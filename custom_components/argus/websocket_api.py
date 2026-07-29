"""Validated WebSocket API for the Argus frontend panel with per-instance isolation."""
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


def _limiter(hass: HomeAssistant, entry_id: str = "global") -> PinAttemptLimiter:
    key = f"{DOMAIN}_limiter_{entry_id}"
    return hass.data.setdefault(key, PinAttemptLimiter())


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
        advanced["duress_pin_configured"] = bool(advanced.get("duress_pin"))
        advanced.pop("duress_pin", None)
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
                raise ValueError(f"PIN for user '{user.get('name')}' is weak")
            user["pin"] = hash_pin(str(pin))
        user.setdefault("enabled", True)
        sanitized.append(user)
    return sanitized


def _serialize_available_entities(hass: HomeAssistant) -> list[dict]:
    entity_reg = er.async_get(hass)
    area_reg = ar.async_get(hass)
    entities = []

    for state in hass.states.async_all():
        domain = state.entity_id.split(".", 1)[0]
        if domain not in _SUPPORTED_DOMAINS:
            continue

        entry = entity_reg.async_get(state.entity_id)
        if entry and entry.disabled_by:
            continue

        area_id = entry.area_id if entry else None
        if not area_id and entry and entry.device_id:
            from homeassistant.helpers import device_registry as dr
            dev_reg = dr.async_get(hass)
            dev = dev_reg.async_get(entry.device_id)
            if dev:
                area_id = dev.area_id

        area_name = None
        if area_id:
            area = area_reg.async_get_area(area_id)
            if area:
                area_name = area.name

        entities.append({
            "entity_id": state.entity_id,
            "name": state.attributes.get("friendly_name") or state.entity_id,
            "domain": domain,
            "device_class": state.attributes.get("device_class"),
            "state": state.state,
            "area": area_name,
            "icon": state.attributes.get("icon"),
        })

    return entities


@callback
def async_register_websocket_api(hass: HomeAssistant) -> None:
    websocket_api.async_register_command(hass, ws_argus_dashboard)
    websocket_api.async_register_command(hass, ws_argus_save_ui)
    websocket_api.async_register_command(hass, ws_argus_get_mode_config)
    websocket_api.async_register_command(hass, ws_argus_save_mode_config)
    websocket_api.async_register_command(hass, ws_argus_get_audit_log)
    websocket_api.async_register_command(hass, ws_argus_get_forensic_timeline)
    websocket_api.async_register_command(hass, ws_argus_get_stats)
    websocket_api.async_register_command(hass, ws_argus_clear_audit_log)
    websocket_api.async_register_command(hass, ws_argus_restore_config)
    websocket_api.async_register_command(hass, ws_argus_save_advanced_config)
    websocket_api.async_register_command(hass, ws_argus_get_advanced_config)
    websocket_api.async_register_command(hass, ws_argus_save_automations)
    websocket_api.async_register_command(hass, ws_argus_get_automations)
    websocket_api.async_register_command(hass, ws_argus_get_media_players)
    websocket_api.async_register_command(hass, ws_argus_update_master_pin)
    websocket_api.async_register_command(hass, ws_argus_write_log)
    websocket_api.async_register_command(hass, ws_argus_get_incidents)
    websocket_api.async_register_command(hass, ws_argus_update_incident)
    websocket_api.async_register_command(hass, ws_argus_get_forensic_timeline)
    websocket_api.async_register_command(hass, ws_argus_get_health)


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_forensic_timeline",
    vol.Optional("entry_id"): str,
    vol.Optional("limit", default=100): int,
})
@websocket_api.async_response
async def ws_argus_get_forensic_timeline(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    log = await async_get_audit_log(hass, entry_id)
    timeline = log[:msg["limit"]]
    connection.send_result(msg["id"], {"timeline": timeline})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_health",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_health(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    data = await async_load_ui_data(hass, entry_id)

    # Gather sensor and siren states
    states = {}
    for state in hass.states.async_all():
        states[state.entity_id] = {
            "state": state.state,
            "attributes": dict(state.attributes),
        }

    modes = data.get("modes", {})
    sensors = []
    for mode_cfg in modes.values():
        if isinstance(mode_cfg, dict):
            sensors.extend(mode_cfg.get("sensors") or [])

    from .core.health import evaluate_system_health
    report = evaluate_system_health(
        states_dict=states,
        configured_sensors=list(set(sensors)),
        siren_entity=data.get("siren_entity"),
        mqtt_enabled=bool(data.get("mqtt_enabled")),
    )
    connection.send_result(msg["id"], {
        "readiness_score": report.readiness_score,
        "status": report.status,
        "issues": [{"issue_id": i.issue_id, "severity": i.severity, "category": i.category, "message": i.message, "recommendation": i.recommendation} for i in report.issues],
        "recommendations": report.recommendations,
    })


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_incidents",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_incidents(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    data = await async_load_ui_data(hass, entry_id)
    incidents = data.get("incidents", [])
    connection.send_result(msg["id"], {"incidents": incidents})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/update_incident",
    vol.Required("incident_id"): str,
    vol.Required("action"): vol.In(["confirm", "false_alarm", "silence_siren", "resolve"]),
    vol.Optional("reason", default=""): str,
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_update_incident(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    action, incident_id = msg["action"], msg["incident_id"]
    _, actor = _actor(connection)

    data = await async_load_ui_data(hass, entry_id)
    incidents = copy.deepcopy(data.get("incidents", []))
    target_inc = None
    for inc in incidents:
        if inc.get("id") == incident_id:
            target_inc = inc
            break

    if not target_inc:
        connection.send_error(msg["id"], "not_found", "Incident not found")
        return

    if action == "confirm":
        target_inc["status"] = "confirmed"
    elif action == "false_alarm":
        target_inc["status"] = "false_alarm"
    elif action == "resolve":
        target_inc["status"] = "resolved"

    target_inc.setdefault("executed_actions", []).append({
        "action": action, "actor": actor, "reason": msg.get("reason"), "ts": datetime.datetime.now(datetime.timezone.utc).isoformat()
    })

    await async_save_ui_data(hass, {"incidents": incidents}, entry_id)
    await async_append_audit_log(
        hass, f"incident_{action}", f"Incident {incident_id} action: {action}", user=actor, entry_id=entry_id
    )
    connection.send_result(msg["id"], {"success": True, "incident": target_inc})


@callback
def _resolve_alarm_entity_id(hass: HomeAssistant, config_entry_id: str) -> str | None:
    registry = er.async_get(hass)
    for entity in registry.entities.values():
        if entity.config_entry_id == config_entry_id and entity.domain == "alarm_control_panel" and not entity.disabled_by:
            return entity.entity_id
    return None


@websocket_api.websocket_command({
    vol.Required("type"): "argus/dashboard",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_dashboard(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    ui_data = await async_load_ui_data(hass, entry_id)
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
    vol.Optional("entry_id"): str,
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
    entry_id = msg.get("entry_id")
    updates = {key: copy.deepcopy(value) for key, value in msg.items() if key not in {"id", "type", "entry_id"}}
    _, actor = _actor(connection)
    try:
        if "users" in updates:
            updates["users"] = _sanitize_users(updates["users"])
        saved = await async_save_ui_data(hass, updates, entry_id)
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_config", str(err))
        return
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    await async_append_audit_log(hass, "ui_configuration_updated", user=actor, entry_id=entry_id)
    connection.send_result(msg["id"], {"saved": True, "ui": _redact_ui_data(saved)})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_mode_config",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_mode_config(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    connection.send_result(msg["id"], (await async_load_ui_data(hass, entry_id)).get("modes", {}))


@websocket_api.websocket_command({
    vol.Required("type"): "argus/save_mode_config",
    vol.Required("mode"): vol.In(["disarmed", "home", "away", "night", "vacation"]),
    vol.Optional("entity_id", default=""): str,
    vol.Optional("entry_id"): str,
    vol.Required("config"): dict,
})
@websocket_api.async_response
async def ws_argus_save_mode_config(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    data = await async_load_ui_data(hass, entry_id)
    modes = copy.deepcopy(data.get("modes", {}))
    mode, config, entity_id = msg["mode"], copy.deepcopy(msg["config"]), msg["entity_id"]
    if entity_id:
        modes.setdefault("__by_entity__", {}).setdefault(entity_id, {})[mode] = config
    else:
        modes[mode] = config
    await async_save_ui_data(hass, {"modes": modes}, entry_id)
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "modes": modes})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_audit_log",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_audit_log(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    connection.send_result(msg["id"], {"log": await async_get_audit_log(hass, entry_id)})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_stats",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_stats(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    log = await async_get_audit_log(hass, entry_id)
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
        elif "armed" in action:
            stats["armings_30d"] += 1
        sensor = event.get("metadata", {}).get("sensor_entity_id")
        if sensor:
            stats["top_sensors"][sensor] = stats["top_sensors"].get(sensor, 0) + 1
    connection.send_result(msg["id"], stats)


@websocket_api.websocket_command({
    vol.Required("type"): "argus/clear_audit_log",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_clear_audit_log(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    _, actor = _actor(connection)
    await async_clear_audit_log(hass, actor=actor, entry_id=entry_id)
    connection.send_result(msg["id"], {"cleared": True})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/restore_config",
    vol.Optional("entry_id"): str,
    vol.Required("config"): dict,
})
@websocket_api.async_response
async def ws_argus_restore_config(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    _, actor = _actor(connection)
    try:
        restored = await async_restore_ui_data(hass, msg["config"], actor=actor, entry_id=entry_id)
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_backup", str(err))
        return
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "ui": _redact_ui_data(restored)})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/save_advanced_config",
    vol.Optional("entry_id"): str,
    vol.Required("config"): dict,
})
@websocket_api.async_response
async def ws_argus_save_advanced_config(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    config = copy.deepcopy(msg["config"])
    guest = config.get("guest_code")
    if guest and not str(guest).startswith("scrypt:"):
        if not validate_pin(str(guest)):
            connection.send_error(msg["id"], "invalid_pin", "Guest PIN does not satisfy the security policy")
            return
        config["guest_code"] = hash_pin(str(guest))

    duress = config.get("duress_pin")
    if duress and not str(duress).startswith("scrypt:"):
        if not validate_pin(str(duress)):
            connection.send_error(msg["id"], "invalid_pin", "Duress PIN does not satisfy the security policy")
            return
        config["duress_pin"] = hash_pin(str(duress))

    await async_save_ui_data(hass, {"advanced": config}, entry_id)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_advanced_config",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_advanced_config(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    advanced = copy.deepcopy((await async_load_ui_data(hass, entry_id)).get("advanced", {}))
    advanced["guest_code_configured"] = bool(advanced.get("guest_code"))
    advanced.pop("guest_code", None)
    advanced["duress_pin_configured"] = bool(advanced.get("duress_pin"))
    advanced.pop("duress_pin", None)
    connection.send_result(msg["id"], advanced)


@websocket_api.websocket_command({
    vol.Required("type"): "argus/save_automations",
    vol.Optional("entry_id"): str,
    vol.Required("automations"): list,
})
@websocket_api.async_response
async def ws_argus_save_automations(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    await async_save_ui_data(hass, {"automations": copy.deepcopy(msg["automations"])}, entry_id)
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/get_automations",
    vol.Optional("entry_id"): str,
})
@websocket_api.async_response
async def ws_argus_get_automations(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    connection.send_result(msg["id"], (await async_load_ui_data(hass, entry_id)).get("automations", []))


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
    limiter = _limiter(hass, entry.entry_id)
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
            entry_id=entry.entry_id,
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
        entry_id=entry.entry_id,
    )
    await hass.config_entries.async_reload(entry.entry_id)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({
    vol.Required("type"): "argus/write_log",
    vol.Optional("entry_id"): str,
    vol.Required("action"): vol.All(str, vol.Length(min=1, max=64)),
    vol.Optional("detail", default=""): vol.All(str, vol.Length(max=1000)),
})
@websocket_api.async_response
async def ws_argus_write_log(hass, connection, msg) -> None:
    entry_id = msg.get("entry_id")
    _, actor = _actor(connection)
    await async_append_audit_log(hass, msg["action"], msg["detail"], user=actor, entry_id=entry_id)
    connection.send_result(msg["id"], {"written": True})
