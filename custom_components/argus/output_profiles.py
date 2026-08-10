"""Editable SOS outputs with capability-safe light effects and restoration."""
from __future__ import annotations

import asyncio
import colorsys
import copy
import logging
from types import SimpleNamespace
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send

from . import websocket_api as argus_ws
from .auth import ArgusAuthError, _require_argus_admin
from .const import SIGNAL_CONFIG_UPDATED
from .storage import async_save_ui_data

_LOGGER = logging.getLogger(__name__)
_ALLOWED_OUTPUT_DOMAINS = {"alarm_control_panel", "fan", "input_boolean", "light", "script", "siren", "switch"}
_FLASH_MODES = {"none", "gentle", "rapid"}
_COLOR_MODES = {"hs", "xy", "rgb", "rgbw", "rgbww"}
_NATIVE_EFFECT_NAMES = {"flash", "slow flash", "slow_flash", "blink", "strobe", "police"}


def _valid_output(entity_id: object) -> bool:
    return isinstance(entity_id, str) and entity_id.count(".") == 1 and entity_id.split(".", 1)[0] in _ALLOWED_OUTPUT_DOMAINS


def _normalise_rgb(value: object) -> list[int] | None:
    if not isinstance(value, (list, tuple)) or len(value) != 3:
        return None
    try:
        return [max(0, min(255, int(part))) for part in value]
    except (TypeError, ValueError):
        return None


def _supported_modes(attrs: dict[str, Any]) -> set[str]:
    return {str(mode).lower() for mode in (attrs.get("supported_color_modes") or [])}


def _supports_brightness(attrs: dict[str, Any], modes: set[str] | None = None) -> bool:
    modes = modes if modes is not None else _supported_modes(attrs)
    return any(mode != "onoff" for mode in modes) or isinstance(attrs.get("brightness"), (int, float))


def _normalise_settings(outputs: list[str], raw: object) -> dict[str, dict[str, Any]]:
    source = raw if isinstance(raw, dict) else {}
    result = {}
    for entity_id in outputs:
        item = source.get(entity_id, {})
        if not isinstance(item, dict):
            item = {}
        rgb = _normalise_rgb(item.get("rgb_color"))
        flash_mode = str(item.get("flash_mode") or ("gentle" if item.get("gentle_flash") else "none"))
        if flash_mode not in _FLASH_MODES:
            flash_mode = "none"
        clean: dict[str, Any] = {"flash_mode": flash_mode}
        if rgb is not None:
            clean["rgb_color"] = rgb
        effect = item.get("effect")
        if isinstance(effect, str) and len(effect) <= 128:
            clean["effect"] = effect
        result[entity_id] = clean
    return result


def async_register_output_profiles_api(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_argus_save_panic_output_profile)
    websocket_api.async_register_command(hass, ws_argus_test_light_output)


@websocket_api.websocket_command({vol.Required("type"): "argus/save_panic_output_profile", vol.Optional("entry_id"): str, vol.Required("outputs"): list, vol.Optional("settings", default={}): dict})
@websocket_api.async_response
async def ws_argus_save_panic_output_profile(hass, connection, msg) -> None:
    entry_id = argus_ws._resolve_entry_id(hass, msg.get("entry_id"))
    try:
        await _require_argus_admin(hass, connection, entry_id)
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message)
        return
    outputs = list(dict.fromkeys(item for item in msg["outputs"] if _valid_output(item)))
    settings = _normalise_settings(outputs, msg.get("settings"))
    for entity_id in outputs:
        state = hass.states.get(entity_id)
        modes = _supported_modes(dict(state.attributes)) if state and entity_id.startswith("light.") else set()
        if not modes.intersection(_COLOR_MODES):
            settings.get(entity_id, {}).pop("rgb_color", None)
    saved = await async_save_ui_data(hass, {"panic_outputs": outputs, "panic_output_settings": settings}, entry_id)
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED, entry_id)
    connection.send_result(msg["id"], {"success": True, "outputs": saved.get("panic_outputs", []), "settings": saved.get("panic_output_settings", {})})


def _light_service_data(panel, entity_id: str, settings: dict) -> tuple[dict, str, float]:
    """Build service data and choose only a reset-safe attention method."""
    state = panel.hass.states.get(entity_id)
    attrs = dict(state.attributes) if state else {}
    supported_modes = _supported_modes(attrs)
    supports_brightness = _supports_brightness(attrs, supported_modes)
    data: dict[str, Any] = {"entity_id": entity_id}
    if supports_brightness:
        data["brightness_pct"] = 100

    rgb = _normalise_rgb(settings.get("rgb_color"))
    if rgb and supported_modes.intersection(_COLOR_MODES):
        # Prefer rgb_color directly — it is exact and universal.
        # Only convert to hs_color when the light exclusively supports hs
        # and has no rgb/rgbw/rgbww support (conversion would otherwise
        # introduce hue rounding errors and apply the wrong color).
        rgb_modes = {"rgb", "rgbw", "rgbww"}
        if supported_modes.intersection(rgb_modes):
            data["rgb_color"] = rgb
        elif supported_modes <= {"hs", "xy", "color_temp"} and "hs" in supported_modes:
            red, green, blue = (part / 255 for part in rgb)
            hue, saturation, _ = colorsys.rgb_to_hsv(red, green, blue)
            data["hs_color"] = [round(hue * 360, 2), round(saturation * 100, 2)]
        else:
            data["rgb_color"] = rgb

    flash_mode = str(settings.get("flash_mode") or ("gentle" if settings.get("gentle_flash") else "none"))
    if flash_mode == "none":
        return data, "steady", 0.0

    effects = list(attrs.get("effect_list") or [])
    requested_effect = settings.get("effect")
    effect = requested_effect if requested_effect in effects else next(
        (candidate for candidate in effects if str(candidate).lower() in _NATIVE_EFFECT_NAMES), None
    )
    if effect:
        data["effect"] = effect
        return data, "native_effect", 0.0
    if int(attrs.get("supported_features") or 0) & 8:
        data["flash"] = "short" if flash_mode == "rapid" else "long"
        return data, "native_flash", 0.0
    if supports_brightness:
        return data, "brightness_pulse", 0.35 if flash_mode == "rapid" else 0.8
    return data, "steady_safe", 0.0


def _capture_light_state(hass: HomeAssistant, entity_id: str) -> dict[str, Any] | None:
    """Capture power, brightness, colour and effect before Argus changes a light."""
    state = hass.states.get(entity_id)
    if state is None:
        return None
    attrs = dict(state.attributes)
    modes = _supported_modes(attrs)
    service_data: dict[str, Any] = {"entity_id": entity_id}
    brightness = attrs.get("brightness")
    if isinstance(brightness, (int, float)):
        service_data["brightness"] = max(1, min(255, int(brightness)))

    color_mode = str(attrs.get("color_mode") or "").lower()
    if color_mode == "hs" and isinstance(attrs.get("hs_color"), (list, tuple)):
        service_data["hs_color"] = list(attrs["hs_color"])
    elif color_mode == "xy" and isinstance(attrs.get("xy_color"), (list, tuple)):
        service_data["xy_color"] = list(attrs["xy_color"])
    elif color_mode in {"rgb", "rgbw", "rgbww"} and _normalise_rgb(attrs.get("rgb_color")):
        service_data["rgb_color"] = _normalise_rgb(attrs.get("rgb_color"))
    elif color_mode == "color_temp":
        if isinstance(attrs.get("color_temp_kelvin"), (int, float)):
            service_data["color_temp_kelvin"] = int(attrs["color_temp_kelvin"])
        elif isinstance(attrs.get("color_temp"), (int, float)):
            service_data["color_temp"] = int(attrs["color_temp"])
    elif isinstance(attrs.get("hs_color"), (list, tuple)):
        service_data["hs_color"] = list(attrs["hs_color"])
    elif isinstance(attrs.get("xy_color"), (list, tuple)):
        service_data["xy_color"] = list(attrs["xy_color"])
    elif _normalise_rgb(attrs.get("rgb_color")):
        service_data["rgb_color"] = _normalise_rgb(attrs.get("rgb_color"))
    elif "color_temp" in modes and isinstance(attrs.get("color_temp_kelvin"), (int, float)):
        service_data["color_temp_kelvin"] = int(attrs["color_temp_kelvin"])
    elif modes.intersection(_COLOR_MODES):
        service_data["rgb_color"] = [255, 255, 255]

    effect = attrs.get("effect")
    effect_names = [str(item) for item in (attrs.get("effect_list") or [])]
    if isinstance(effect, str) and effect:
        service_data["effect"] = effect
    elif "none" in {item.lower() for item in effect_names}:
        service_data["effect"] = next(item for item in effect_names if item.lower() == "none")
    return {"was_on": state.state == "on", "service_data": service_data}


async def _restore_light_state(hass: HomeAssistant, entity_id: str, snapshot: dict[str, Any] | None) -> None:
    """Restore the exact pre-alarm state so alarm colour never persists."""
    if not snapshot:
        await hass.services.async_call("light", "turn_off", {"entity_id": entity_id}, blocking=False)
        return
    data = copy.deepcopy(snapshot.get("service_data") or {"entity_id": entity_id})
    data["entity_id"] = entity_id
    if len(data) > 1:
        await hass.services.async_call("light", "turn_on", data, blocking=True)
    if snapshot.get("was_on"):
        if len(data) == 1:
            await hass.services.async_call("light", "turn_on", data, blocking=False)
    else:
        await hass.services.async_call("light", "turn_off", {"entity_id": entity_id}, blocking=False)


async def _brightness_pulse(panel, entity_id: str, service_data: dict, interval: float) -> None:
    """Pulse brightness without any repeated off/on power cycle."""
    high = copy.deepcopy(service_data)
    low = copy.deepcopy(service_data)
    high["brightness_pct"] = 100
    low["brightness_pct"] = 25
    try:
        while True:
            await panel.hass.services.async_call("light", "turn_on", high, blocking=False)
            await asyncio.sleep(interval)
            await panel.hass.services.async_call("light", "turn_on", low, blocking=False)
            await asyncio.sleep(interval)
    except asyncio.CancelledError:
        raise
    except Exception:
        _LOGGER.exception("Argus brightness pulse failed for %s", entity_id)


@websocket_api.websocket_command({vol.Required("type"): "argus/test_light_output", vol.Optional("entry_id"): str, vol.Required("entity_id"): str, vol.Required("flash_mode"): vol.In(["gentle", "rapid"]), vol.Optional("rgb_color"): list})
@websocket_api.async_response
async def ws_argus_test_light_output(hass, connection, msg) -> None:
    """Physically test only native flash/effects or safe brightness pulsing."""
    entry_id = argus_ws._resolve_entry_id(hass, msg.get("entry_id"))
    try:
        await _require_argus_admin(hass, connection, entry_id)
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message)
        return
    entity_id = msg["entity_id"]
    state = hass.states.get(entity_id)
    if not entity_id.startswith("light.") or state is None:
        connection.send_error(msg["id"], "invalid_light", "La entidad no es una luz disponible en Home Assistant")
        return
    if state.state in {"unknown", "unavailable"}:
        connection.send_error(msg["id"], "light_unavailable", "La luz no está disponible en Home Assistant")
        return

    settings: dict[str, Any] = {"flash_mode": msg["flash_mode"]}
    rgb = _normalise_rgb(msg.get("rgb_color"))
    if rgb is not None:
        settings["rgb_color"] = rgb
    panel = SimpleNamespace(hass=hass)
    data, method, interval = _light_service_data(panel, entity_id, settings)
    snapshot = _capture_light_state(hass, entity_id)
    try:
        if method == "brightness_pulse":
            high = copy.deepcopy(data)
            low = copy.deepcopy(data)
            high["brightness_pct"] = 100
            low["brightness_pct"] = 25
            for _ in range(2):
                await hass.services.async_call("light", "turn_on", high, blocking=True)
                await asyncio.sleep(interval)
                await hass.services.async_call("light", "turn_on", low, blocking=True)
                await asyncio.sleep(interval)
        else:
            await hass.services.async_call("light", "turn_on", data, blocking=True)
            await asyncio.sleep(2.5 if msg["flash_mode"] == "gentle" else 1.5)
    except Exception as err:
        _LOGGER.exception("Argus safe light test failed for %s", entity_id)
        connection.send_error(msg["id"], "light_test_failed", str(err))
        return
    finally:
        try:
            await _restore_light_state(hass, entity_id, snapshot)
        except Exception:
            _LOGGER.exception("Could not restore %s after Argus light test", entity_id)
    connection.send_result(msg["id"], {"success": True, "entity_id": entity_id, "method": method, "color_applied": "rgb_color" in data or "hs_color" in data})


async def _async_siren_with_output_profiles(self, activate: bool) -> None:
    sirens = self._get_siren_entities()
    tasks = getattr(self, "_argus_flash_tasks", None)
    if not isinstance(tasks, dict):
        tasks = {}
        self._argus_flash_tasks = tasks
    snapshots = getattr(self, "_argus_light_restore", None)
    if not isinstance(snapshots, dict):
        snapshots = {}
        self._argus_light_restore = snapshots

    if not activate:
        for task in list(tasks.values()):
            task.cancel()
        tasks.clear()
        restored: set[str] = set()
        for entity_id in sirens:
            domain = entity_id.split(".", 1)[0]
            try:
                if domain == "light":
                    await _restore_light_state(self.hass, entity_id, snapshots.pop(entity_id, None))
                    restored.add(entity_id)
                    continue
                service = "alarm_disarm" if domain == "alarm_control_panel" else "turn_off"
                await self.hass.services.async_call(domain, service, {"entity_id": entity_id}, blocking=False)
            except Exception:
                _LOGGER.exception("Argus failed to stop output %s", entity_id)
        for entity_id, snapshot in list(snapshots.items()):
            if entity_id not in restored:
                try:
                    await _restore_light_state(self.hass, entity_id, snapshot)
                except Exception:
                    _LOGGER.exception("Argus failed to restore light %s", entity_id)
        snapshots.clear()
        return

    for entity_id in sirens:
        domain = entity_id.split(".", 1)[0]
        try:
            if domain == "light":
                snapshots.setdefault(entity_id, _capture_light_state(self.hass, entity_id))
                if self._panic_active:
                    settings = (self._ui_config.get("panic_output_settings") or {}).get(entity_id, {})
                else:
                    mode_cfg = self._mode_config(self._triggered_mode) if self._triggered_mode else {}
                    settings = (mode_cfg.get("light_siren_settings") or {}).get(entity_id, {})
                data, method, interval = _light_service_data(self, entity_id, settings)
                old_task = tasks.pop(entity_id, None)
                if old_task:
                    old_task.cancel()
                if method == "brightness_pulse":
                    tasks[entity_id] = self.hass.async_create_task(_brightness_pulse(self, entity_id, data, interval))
                else:
                    await self.hass.services.async_call("light", "turn_on", data, blocking=False)
                continue
            service = "alarm_trigger" if domain == "alarm_control_panel" else "turn_on"
            await self.hass.services.async_call(domain, service, {"entity_id": entity_id}, blocking=False)
        except Exception as err:
            _LOGGER.warning("Argus output call failed for %s: %s", entity_id, err)
            try:
                await self.hass.services.async_call("homeassistant", "turn_on", {"entity_id": entity_id}, blocking=False)
            except Exception:
                _LOGGER.exception("Argus output fallback failed for %s", entity_id)


def install_output_profile_runtime() -> None:
    from .alarm_control_panel import ArgusAlarmPanel
    if getattr(ArgusAlarmPanel, "__argus_output_profiles_installed", False):
        return
    ArgusAlarmPanel.__argus_output_profiles_installed = True
    ArgusAlarmPanel._async_siren = _async_siren_with_output_profiles
