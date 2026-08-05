"""Editable SOS output profiles and reliable light alarm effects for Argus."""
from __future__ import annotations
import asyncio
import colorsys
import copy
import logging
from typing import Any
import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send
from .auth import ArgusAuthError, _require_argus_admin
from .const import SIGNAL_CONFIG_UPDATED
from .storage import async_save_ui_data
from . import websocket_api as argus_ws
_LOGGER = logging.getLogger(__name__)
_ALLOWED_OUTPUT_DOMAINS = {"alarm_control_panel", "fan", "input_boolean", "light", "script", "siren", "switch"}
_FLASH_MODES = {"none", "gentle", "rapid"}
def _valid_output(entity_id: object) -> bool:
    return isinstance(entity_id, str) and entity_id.count(".") == 1 and entity_id.split(".", 1)[0] in _ALLOWED_OUTPUT_DOMAINS
def _normalise_rgb(value: object) -> list[int] | None:
    if not isinstance(value, (list, tuple)) or len(value) != 3:
        return None
    try:
        return [max(0, min(255, int(part))) for part in value]
    except (TypeError, ValueError):
        return None
def _normalise_settings(outputs: list[str], raw: object) -> dict[str, dict[str, Any]]:
    source = raw if isinstance(raw, dict) else {}
    result = {}
    for entity_id in outputs:
        item = source.get(entity_id, {})
        if not isinstance(item, dict): item = {}
        rgb = _normalise_rgb(item.get("rgb_color"))
        flash_mode = str(item.get("flash_mode") or ("gentle" if item.get("gentle_flash") else "none"))
        if flash_mode not in _FLASH_MODES: flash_mode = "none"
        clean = {"flash_mode": flash_mode}
        if rgb is not None: clean["rgb_color"] = rgb
        effect = item.get("effect")
        if isinstance(effect, str) and len(effect) <= 128: clean["effect"] = effect
        result[entity_id] = clean
    return result
def async_register_output_profiles_api(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_argus_save_panic_output_profile)
@websocket_api.websocket_command({vol.Required("type"): "argus/save_panic_output_profile", vol.Optional("entry_id"): str, vol.Required("outputs"): list, vol.Optional("settings", default={}): dict})
@websocket_api.async_response
async def ws_argus_save_panic_output_profile(hass, connection, msg) -> None:
    entry_id = argus_ws._resolve_entry_id(hass, msg.get("entry_id"))
    try:
        await _require_argus_admin(hass, connection, entry_id)
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message); return
    outputs = list(dict.fromkeys(item for item in msg["outputs"] if _valid_output(item)))
    settings = _normalise_settings(outputs, msg.get("settings"))
    saved = await async_save_ui_data(hass, {"panic_outputs": outputs, "panic_output_settings": settings}, entry_id)
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "outputs": saved.get("panic_outputs", []), "settings": saved.get("panic_output_settings", {})})
def _light_service_data(panel, entity_id: str, settings: dict) -> tuple[dict, bool, float]:
    data = {"entity_id": entity_id, "brightness_pct": 100}
    state = panel.hass.states.get(entity_id)
    attrs = state.attributes if state else {}
    supported_modes = set(attrs.get("supported_color_modes") or [])
    rgb = _normalise_rgb(settings.get("rgb_color"))
    if rgb and supported_modes.intersection({"hs", "xy", "rgb", "rgbw", "rgbww"}):
        if supported_modes == {"hs"}:
            red, green, blue = (part / 255 for part in rgb)
            hue, saturation, _ = colorsys.rgb_to_hsv(red, green, blue)
            data["hs_color"] = [round(hue * 360, 2), round(saturation * 100, 2)]
        else: data["rgb_color"] = rgb
    flash_mode = str(settings.get("flash_mode") or ("gentle" if settings.get("gentle_flash") else "none"))
    effects = list(attrs.get("effect_list") or [])
    requested_effect = settings.get("effect")
    effect = requested_effect if requested_effect in effects else next((candidate for candidate in effects if str(candidate).lower() in {"flash", "slow flash", "slow_flash", "blink", "strobe", "police"}), None)
    software_flash = False; interval = 0.8
    if flash_mode != "none":
        if effect: data["effect"] = effect
        elif int(attrs.get("supported_features") or 0) & 8: data["flash"] = "short" if flash_mode == "rapid" else "long"
        else: software_flash = True; interval = 0.35 if flash_mode == "rapid" else 0.8
    return data, software_flash, interval
async def _software_flash(panel, entity_id: str, service_data: dict, interval: float) -> None:
    try:
        while True:
            await panel.hass.services.async_call("light", "turn_on", copy.deepcopy(service_data), blocking=False)
            await asyncio.sleep(interval)
            await panel.hass.services.async_call("light", "turn_off", {"entity_id": entity_id}, blocking=False)
            await asyncio.sleep(interval)
    except asyncio.CancelledError: raise
    except Exception: _LOGGER.exception("Argus software flash failed for %s", entity_id)
async def _async_siren_with_output_profiles(self, activate: bool) -> None:
    sirens = self._get_siren_entities()
    tasks = getattr(self, "_argus_flash_tasks", None)
    if not isinstance(tasks, dict): tasks = {}; self._argus_flash_tasks = tasks
    if not activate:
        for task in list(tasks.values()): task.cancel()
        tasks.clear()
    for entity_id in sirens:
        domain = entity_id.split(".", 1)[0]
        try:
            if domain == "light":
                if not activate:
                    await self.hass.services.async_call("light", "turn_off", {"entity_id": entity_id}, blocking=False); continue
                if self._panic_active: settings = (self._ui_config.get("panic_output_settings") or {}).get(entity_id, {})
                else:
                    mode_cfg = self._mode_config(self._triggered_mode) if self._triggered_mode else {}
                    settings = (mode_cfg.get("light_siren_settings") or {}).get(entity_id, {})
                data, software_flash, interval = _light_service_data(self, entity_id, settings)
                old_task = tasks.pop(entity_id, None)
                if old_task: old_task.cancel()
                if software_flash: tasks[entity_id] = self.hass.async_create_task(_software_flash(self, entity_id, data, interval))
                else: await self.hass.services.async_call("light", "turn_on", data, blocking=False)
                continue
            service = ("alarm_trigger" if activate else "alarm_disarm") if domain == "alarm_control_panel" else ("turn_on" if activate else "turn_off")
            await self.hass.services.async_call(domain, service, {"entity_id": entity_id}, blocking=False)
        except Exception as err:
            fallback = "turn_on" if activate else "turn_off"
            _LOGGER.warning("Argus output call failed for %s: %s", entity_id, err)
            try: await self.hass.services.async_call("homeassistant", fallback, {"entity_id": entity_id}, blocking=False)
            except Exception: _LOGGER.exception("Argus output fallback failed for %s", entity_id)
def install_output_profile_runtime() -> None:
    from .alarm_control_panel import ArgusAlarmPanel
    if getattr(ArgusAlarmPanel, "__argus_output_profiles_installed", False): return
    ArgusAlarmPanel.__argus_output_profiles_installed = True
    ArgusAlarmPanel._async_siren = _async_siren_with_output_profiles
