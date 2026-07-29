"""Validated WebSocket API for the Argus frontend panel."""
from __future__ import annotations

import base64
import copy
import datetime
import logging
import os
import uuid

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .const import DOMAIN, SIGNAL_CONFIG_UPDATED
from .security import PinAttemptLimiter, hash_pin, needs_rehash, validate_pin, verify_pin
from .storage import (
    async_append_audit_log,
    async_clear_audit_log,
    async_get_audit_log,
    async_load_ui_data,
    async_restore_ui_data,
    async_save_ui_data,
)

_LOGGER = logging.getLogger(__name__)
_MAX_UPLOAD_BYTES = 50 * 1024 * 1024
_ALLOWED_MEDIA_EXTENSIONS = {
    ".avif", ".gif", ".heic", ".heif", ".jpeg", ".jpg", ".m4v",
    ".mov", ".mp4", ".png", ".webm", ".webp",
}
_SUPPORTED_DOMAINS = {
    "binary_sensor", "camera", "climate", "cover", "light", "lock",
    "media_player", "sensor", "siren", "switch",
}
_LIMITER_KEY = f"{DOMAIN}_pin_attempt_limiter"


def _limiter(hass: HomeAssistant) -> PinAttemptLimiter:
    return hass.data.setdefault(_LIMITER_KEY, PinAttemptLimiter())


def _actor(connection) -> tuple[str, str]:
    user = getattr(connection, "user", None)
    user_id = str(getattr(user, "id", "unknown"))
    return user_id, str(getattr(user, "name", None) or "Home Assistant administrator")


def _entry_by_id(hass: HomeAssistant, entry_id: str):
    for entry in hass.config_entries.async_entries(DOMAIN):
        if entry.entry_id == entry_id:
            return entry
    return None


def _redact_ui_data(data: dict) -> dict:
    """Return UI data without reusable credential hashes."""
    redacted = copy.deepcopy(data)
    users = redacted.get("users", [])
    if isinstance(users, list):
        for user in users:
            if isinstance(user, dict):
                user["pin_configured"] = bool(user.get("pin"))
                user.pop("pin", None)
    advanced = redacted.get("advanced")
    if isinstance(advanced, dict):
        advanced["guest_code_configured"] = bool(advanced.get("guest_code"))
        advanced.pop("guest_code", None)
    redacted.pop("runtime", None)
    return redacted


def _sanitize_users(users: list) -> list[dict]:
    sanitized: list[dict] = []
    for item in users:
        if not isinstance(item, dict):
            raise ValueError("Every user must be an object")
        user = copy.deepcopy(item)
        pin = user.get("pin")
        if pin and not str(pin).startswith("scrypt:"):
            if not validate_pin(str(pin)):
                raise ValueError("A user PIN does not satisfy the security policy")
            user["pin"] = hash_pin(str(pin))
        sanitized.append(user)
    return sanitized


def async_register_websocket_api(hass: HomeAssistant) -> None:
    commands = (
        ws_argus_dashboard, ws_argus_save_ui, ws_argus_get_mode_config,
        ws_argus_save_mode_config, ws_argus_get_audit_log, ws_argus_get_stats,
        ws_argus_get_forensic_timeline, ws_argus_clear_audit_log,
        ws_argus_restore_config, ws_argus_save_advanced_config,
        ws_argus_get_advanced_config, ws_argus_save_automations,
        ws_argus_get_automations,
        ws_argus_get_media_players, ws_argus_update_master_pin,
        ws_argus_write_log, ws_argus_upload_file, ws_argus_list_files,
        ws_argus_delete_file,
    )
    for command in commands:
        websocket_api.async_register_command(hass, websocket_api.require_admin(command))


@websocket_api.websocket_command({
    vol.Required("type"): "argus/upload_file",
    vol.Required("filename"): str,
    vol.Required("data"): str,
})
@websocket_api.async_response
async def ws_argus_upload_file(hass, connection, msg) -> None:
    extension = os.path.splitext(os.path.basename(msg["filename"]))[1].lower()
    if extension not in _ALLOWED_MEDIA_EXTENSIONS:
        connection.send_error(msg["id"], "invalid_file", "Unsupported media type")
        return
    encoded = msg["data"].split(",", 1)[-1]
    if len(encoded) > (_MAX_UPLOAD_BYTES * 4 // 3) + 1024:
        connection.send_error(msg["id"], "file_too_large", "File exceeds the 50 MB limit")
        return
    try:
        file_data = base64.b64decode(encoded, validate=True)
        if len(file_data) > _MAX_UPLOAD_BYTES:
            raise ValueError("oversized")
        upload_dir = hass.config.path("www", "argus")
        filename = f"{uuid.uuid4().hex}{extension}"

        def _write() -> None:
            os.makedirs(upload_dir, exist_ok=True)
            temporary = os.path.join(upload_dir, f".{filename}.tmp")
            target = os.path.join(upload_dir, filename)
            try:
                with open(temporary, "wb") as handle:
                    handle.write(file_data)
                os.replace(temporary, target)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)

        await hass.async_add_executor_job(_write)
        connection.send_result(msg["id"], {"success": True, "url": f"/local/argus/{filename}"})
    except (ValueError, OSError):
        _LOGGER.exception("Argus WebSocket media upload failed")
        connection.send_error(msg["id"], "upload_failed", "Upload failed")


@websocket_api.websocket_command({vol.Required("type"): "argus/list_uploaded_files"})
@websocket_api.async_response
async def ws_argus_list_files(hass, connection, msg) -> None:
    upload_dir = hass.config.path("www", "argus")

    def _list() -> list[dict]:
        if not os.path.isdir(upload_dir):
            return []
        result = []
        for filename in os.listdir(upload_dir):
            path = os.path.join(upload_dir, filename)
            extension = os.path.splitext(filename)[1].lower()
            if not os.path.isfile(path) or extension not in _ALLOWED_MEDIA_EXTENSIONS:
                continue
            stat = os.stat(path)
            result.append({
                "name": filename,
                "size_bytes": stat.st_size,
                "size_str": f"{stat.st_size / 1024:.2f} KB",
                "mtime": stat.st_mtime,
                "url": f"/local/argus/{filename}",
                "is_video": extension in {".mp4", ".webm", ".mov", ".m4v"},
            })
        return sorted(result, key=lambda item: item["mtime"], reverse=True)

    try:
        connection.send_result(msg["id"], await hass.async_add_executor_job(_list))
    except OSError:
        _LOGGER.exception("Argus media listing failed")
        connection.send_error(msg["id"], "list_failed", "Unable to list files")


@websocket_api.websocket_command({
    vol.Required("type"): "argus/delete_uploaded_file",
    vol.Required("filename"): str,
})
@websocket_api.async_response
async def ws_argus_delete_file(hass, connection, msg) -> None:
    filename = os.path.basename(msg["filename"])
    if filename != msg["filename"] or os.path.splitext(filename)[1].lower() not in _ALLOWED_MEDIA_EXTENSIONS:
        connection.send_error(msg["id"], "invalid_file", "Invalid filename")
        return
    target = hass.config.path("www", "argus", filename)
    try:
        deleted = await hass.async_add_executor_job(
            lambda: os.path.isfile(target) and not os.remove(target)
        )
        if deleted:
            connection.send_result(msg["id"], {"success": True})
        else:
            connection.send_error(msg["id"], "not_found", "File not found")
    except OSError:
        _LOGGER.exception("Argus media deletion failed")
        connection.send_error(msg["id"], "delete_failed", "Unable to delete file")


@callback
def _serialize_available_entities(hass: HomeAssistant) -> list[dict]:
    entity_registry = er.async_get(hass)
    area_registry = ar.async_get(hass)
    items = []
    for state in hass.states.async_all():
        domain = state.entity_id.split(".", 1)[0]
        if domain not in _SUPPORTED_DOMAINS:
            continue
        entry = entity_registry.async_get(state.entity_id)
        area_name = None
        if entry and entry.area_id:
            area = area_registry.async_get_area(entry.area_id)
            area_name = area.name if area else None
        items.append({
            "entity_id": state.entity_id,
            "name": state.name,
            "domain": domain,
            "state": state.state,
            "area": area_name,
            "icon": state.attributes.get("icon"),
            "friendly_name": state.attributes.get("friendly_name"),
        })
    return sorted(items, key=lambda item: (item.get("area") or "zzz", item["domain"], item["entity_id"]))


@callback
def _resolve_alarm_entity_id(hass: HomeAssistant, config_entry_id: str) -> str | None:
    registry = er.async_get(hass)
    for entity in registry.entities.values():
        if entity.config_entry_id == config_entry_id and entity.domain == "alarm_control_panel" and not entity.disabled_by:
            return entity.entity_id
    return None


@websocket_api.websocket_command({vol.Required("type"): "argus/dashboard"})
@websocket_api.async_response
async def ws_argus_dashboard(hass, connection, msg) -> None:
    ui_data = await async_load_ui_data(hass)
    entries = []
    for entry in hass.config_entries.async_entries(DOMAIN):
        entity_id = _resolve_alarm_entity_id(hass, entry.entry_id)
        state = hass.states.get(entity_id) if entity_id else None
        entries.append({
            "entry_id": entry.entry_id,
            "title": entry.title,
            "entity_id": entity_id,
            "state": state.state if state else "unavailable",
            "attributes": dict(state.attributes) if state else {},
            "pin_configured": bool(entry.options.get("code") or entry.data.get("code")),
        })
    connection.send_result(msg["id"], {
        "entries": entries,
        "ui": _redact_ui_data(ui_data),
        "available_entities": _serialize_available_entities(hass),
    })


_SAVE_UI_SCHEMA = {
    vol.Required("type"): "argus/save_ui",
    vol.Optional("zones"): list,
    vol.Optional("dashboard"): dict,
    vol.Optional("notif_targets"): list,
    vol.Optional("emergency_number"): vol.All(str, vol.Length(min=1, max=16), vol.Match(r"^[0-9+()\-\s]+$")),
    vol.Optional("panic_outputs"): list,
    vol.Optional("users"): list,
    vol.Optional("home_name"): vol.All(str, vol.Length(max=128)),
    vol.Optional("background_mode"): vol.In(["weather", "none", "photo", "collage", "video"]),
    vol.Optional("background_images"): list,
    vol.Optional("temperature_source"): str,
    vol.Optional("weather_source"): str,
    vol.Optional("intelligent_confirmation"): dict,
    vol.Optional("state_schedule"): list,
    vol.Optional("temp_alert_min"): vol.Any(None, vol.Coerce(float)),
    vol.Optional("temp_alert_max"): vol.Any(None, vol.Coerce(float)),
    vol.Optional("panel_bg_file"): str,
    vol.Optional("panel_bg_sound"): bool,
    vol.Optional("hub_bg_mode"): vol.In(["none", "image", "video"]),
    vol.Optional("hub_bg_file"): str,
    vol.Optional("hub_bg_sound"): bool,
}


@websocket_api.websocket_command(_SAVE_UI_SCHEMA)
@websocket_api.async_response
async def ws_argus_save_ui(hass, connection, msg) -> None:
    updates = {key: copy.deepcopy(value) for key, value in msg.items() if key not in {"id", "type"}}
    _, actor = _actor(connection)
    try:
        if "users" in updates:
            updates["users"] = _sanitize_users(updates["users"])
        saved = await async_save_ui_data(hass, updates)
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_config", str(err))
        return
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    await async_append_audit_log(hass, "ui_configuration_updated", user=actor)
    connection.send_result(msg["id"], {"saved": True, "ui": _redact_ui_data(saved)})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_mode_config"})
@websocket_api.async_response
async def ws_argus_get_mode_config(hass, connection, msg) -> None:
    connection.send_result(msg["id"], (await async_load_ui_data(hass)).get("modes", {}))


@websocket_api.websocket_command({
    vol.Required("type"): "argus/save_mode_config",
    vol.Required("mode"): vol.In(["disarmed", "home", "away", "night", "vacation"]),
    vol.Optional("entity_id", default=""): str,
    vol.Required("config"): dict,
})
@websocket_api.async_response
async def ws_argus_save_mode_config(hass, connection, msg) -> None:
    data = await async_load_ui_data(hass)
    modes = copy.deepcopy(data.get("modes", {}))
    mode, config, entity_id = msg["mode"], copy.deepcopy(msg["config"]), msg["entity_id"]
    if entity_id:
        modes.setdefault("__by_entity__", {}).setdefault(entity_id, {})[mode] = config
    else:
        modes[mode] = config
    await async_save_ui_data(hass, {"modes": modes})
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "modes": modes})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_audit_log"})
@websocket_api.async_response
async def ws_argus_get_audit_log(hass, connection, msg) -> None:
    connection.send_result(msg["id"], {"log": await async_get_audit_log(hass)})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_stats"})
@websocket_api.async_response
async def ws_argus_get_stats(hass, connection, msg) -> None:
    log = await async_get_audit_log(hass)
    cutoff = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=30)
    stats = {"total_events": len(log), "triggers_30d": 0, "armings_30d": 0, "top_sensors": {}}
    for event in log:
        try:
            timestamp = datetime.datetime.fromisoformat(str(event.get("ts", "")).replace("Z", "+00:00"))
        except ValueError:
            continue
        if timestamp < cutoff:
            continue
        action = str(event.get("action", ""))
        if "trigger" in action:
            stats["triggers_30d"] += 1
            sensor = event.get("metadata", {}).get("sensor_entity_id")
            if sensor:
                stats["top_sensors"][sensor] = stats["top_sensors"].get(sensor, 0) + 1
        elif "arm" in action and "disarm" not in action:
            stats["armings_30d"] += 1
    connection.send_result(msg["id"], stats)


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_forensic_timeline",
    vol.Optional("limit", default=200): vol.All(vol.Coerce(int), vol.Range(min=1, max=500)),
})
@websocket_api.async_response
async def ws_argus_get_forensic_timeline(hass, connection, msg) -> None:
    events = (await async_get_audit_log(hass))[:msg["limit"]]
    connection.send_result(msg["id"], {
        "events": events,
        "event_count": len(events),
        "generated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    })


@websocket_api.websocket_command({vol.Required("type"): "argus/clear_activity_log"})
@websocket_api.async_response
async def ws_argus_clear_audit_log(hass, connection, msg) -> None:
    _, actor = _actor(connection)
    await async_clear_audit_log(hass, actor=actor)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/restore_config",
    vol.Required("config"): dict,
})
@websocket_api.async_response
async def ws_argus_restore_config(hass, connection, msg) -> None:
    _, actor = _actor(connection)
    try:
        restored = await async_restore_ui_data(hass, msg["config"], actor=actor)
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_backup", str(err))
        return
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "ui": _redact_ui_data(restored)})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/save_advanced_config",
    vol.Required("config"): dict,
})
@websocket_api.async_response
async def ws_argus_save_advanced_config(hass, connection, msg) -> None:
    config = copy.deepcopy(msg["config"])
    guest = config.get("guest_code")
    if guest and not str(guest).startswith("scrypt:"):
        if not validate_pin(str(guest)):
            connection.send_error(msg["id"], "invalid_pin", "Guest PIN does not satisfy the security policy")
            return
        config["guest_code"] = hash_pin(str(guest))
    await async_save_ui_data(hass, {"advanced": config})
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_advanced_config"})
@websocket_api.async_response
async def ws_argus_get_advanced_config(hass, connection, msg) -> None:
    advanced = copy.deepcopy((await async_load_ui_data(hass)).get("advanced", {}))
    advanced["guest_code_configured"] = bool(advanced.get("guest_code"))
    advanced.pop("guest_code", None)
    connection.send_result(msg["id"], advanced)


@websocket_api.websocket_command({vol.Required("type"): "argus/save_automations", vol.Required("automations"): list})
@websocket_api.async_response
async def ws_argus_save_automations(hass, connection, msg) -> None:
    await async_save_ui_data(hass, {"automations": copy.deepcopy(msg["automations"])})
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_automations"})
@websocket_api.async_response
async def ws_argus_get_automations(hass, connection, msg) -> None:
    connection.send_result(msg["id"], (await async_load_ui_data(hass)).get("automations", []))


@websocket_api.websocket_command({vol.Required("type"): "argus/get_media_players"})
@websocket_api.async_response
async def ws_argus_get_media_players(hass, connection, msg) -> None:
    connection.send_result(msg["id"], [{"entity_id": state.entity_id, "name": state.name} for state in hass.states.async_all("media_player")])


@websocket_api.websocket_command({
    vol.Required("type"): "argus/update_master_pin",
    vol.Required("entry_id"): str,
    vol.Required("pin"): str,
    vol.Optional("current_pin", default=""): str,
})
@websocket_api.async_response
async def ws_argus_update_master_pin(hass, connection, msg) -> None:
    entry = _entry_by_id(hass, msg["entry_id"])
    if not entry:
        connection.send_error(msg["id"], "not_found", "Argus config entry not found")
        return
    new_pin = msg["pin"]
    if new_pin and not validate_pin(new_pin):
        connection.send_error(msg["id"], "invalid_pin", "PIN must be 4-12 non-trivial digits")
        return

    user_id, actor = _actor(connection)
    key = f"{user_id}:{entry.entry_id}"
    limiter = _limiter(hass)
    if limiter.is_blocked(key):
        connection.send_error(msg["id"], "rate_limited", "Too many failed attempts; try again later")
        return

    current = entry.options.get("code") or entry.data.get("code") or ""
    if current and not verify_pin(msg["current_pin"], current):
        blocked = limiter.record_failure(key)
        await async_append_audit_log(
            hass,
            "master_pin_rejected",
            user=actor,
            severity="critical" if blocked else "warning",
            metadata={"entry_id": entry.entry_id, "rate_limited": blocked},
        )
        connection.send_error(msg["id"], "invalid_pin", "Current PIN is incorrect")
        return

    limiter.reset(key)
    options = dict(entry.options)
    options["code"] = hash_pin(new_pin) if new_pin else ""
    hass.config_entries.async_update_entry(entry, options=options)
    await async_append_audit_log(
        hass,
        "master_pin_updated",
        user=actor,
        severity="warning",
        metadata={"entry_id": entry.entry_id, "legacy_migrated": needs_rehash(current)},
    )
    await hass.config_entries.async_reload(entry.entry_id)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/write_log",
    vol.Required("action"): vol.All(str, vol.Length(min=1, max=64)),
    vol.Optional("detail", default=""): vol.All(str, vol.Length(max=1000)),
})
@websocket_api.async_response
async def ws_argus_write_log(hass, connection, msg) -> None:
    _, actor = _actor(connection)
    await async_append_audit_log(hass, msg["action"], msg["detail"], user=actor)
    connection.send_result(msg["id"], {"written": True})
