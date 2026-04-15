"""WebSocket API for the Argus frontend panel."""
from __future__ import annotations

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .const import DOMAIN, SIGNAL_CONFIG_UPDATED
from .storage import (
    async_get_audit_log,
    async_load_ui_data,
    async_save_ui_data,
)

_SUPPORTED_DOMAINS = {
    "binary_sensor", "camera", "climate", "cover",
    "light", "lock", "media_player", "sensor", "siren", "switch",
}


def async_register_websocket_api(hass: HomeAssistant) -> None:
    """Register all Argus websocket commands."""
    websocket_api.async_register_command(hass, ws_argus_dashboard)
    websocket_api.async_register_command(hass, ws_argus_save_ui)
    websocket_api.async_register_command(hass, ws_argus_get_mode_config)
    websocket_api.async_register_command(hass, ws_argus_save_mode_config)
    websocket_api.async_register_command(hass, ws_argus_get_audit_log)
    websocket_api.async_register_command(hass, ws_argus_clear_audit_log)
    websocket_api.async_register_command(hass, ws_argus_save_advanced_config)
    websocket_api.async_register_command(hass, ws_argus_get_advanced_config)
    websocket_api.async_register_command(hass, ws_argus_save_automations)
    websocket_api.async_register_command(hass, ws_argus_get_automations)
    websocket_api.async_register_command(hass, ws_argus_get_tts_engines)
    websocket_api.async_register_command(hass, ws_argus_get_media_players)
    websocket_api.async_register_command(hass, ws_argus_update_master_pin)
    websocket_api.async_register_command(hass, ws_argus_write_log)


@callback
def _serialize_available_entities(hass: HomeAssistant) -> list[dict]:
    """Return all HA entities relevant to Argus, sorted by area + domain."""
    entity_registry = er.async_get(hass)
    area_registry = ar.async_get(hass)
    items: list[dict] = []

    for state in hass.states.async_all():
        domain = state.entity_id.split(".", 1)[0]
        if domain not in _SUPPORTED_DOMAINS:
            continue

        entry = entity_registry.async_get(state.entity_id)
        area_name = None
        if entry and entry.area_id:
            area = area_registry.async_get_area(entry.area_id)
            area_name = area.name if area else None

        items.append(
            {
                "entity_id": state.entity_id,
                "name": state.name,
                "domain": domain,
                "state": state.state,
                "area": area_name,
                "icon": state.attributes.get("icon"),
                "friendly_name": state.attributes.get("friendly_name"),
            }
        )

    return sorted(
        items,
        key=lambda i: (i.get("area") or "zzz", i["domain"], i["entity_id"]),
    )


@callback
def _resolve_alarm_entity_id(hass: HomeAssistant, config_entry_id: str) -> str | None:
    """Resolve the alarm_control_panel entity_id for an Argus config entry."""
    entity_registry = er.async_get(hass)

    for entity_entry in entity_registry.entities.values():
        if (
            entity_entry.config_entry_id == config_entry_id
            and entity_entry.domain == "alarm_control_panel"
            and not entity_entry.disabled_by
        ):
            return entity_entry.entity_id

    for state in hass.states.async_all("alarm_control_panel"):
        if state.attributes.get("config_entry_id") == config_entry_id:
            return state.entity_id

    return None


@websocket_api.websocket_command({vol.Required("type"): "argus/dashboard"})
@websocket_api.async_response
async def ws_argus_dashboard(hass: HomeAssistant, connection, msg) -> None:
    """Return full dashboard alarm entries, UI state, and available entities."""
    ui_data = await async_load_ui_data(hass)
    entries_payload = []

    for entry in hass.config_entries.async_entries(DOMAIN):
        alarm_entity_id = _resolve_alarm_entity_id(hass, entry.entry_id)
        state_obj = hass.states.get(alarm_entity_id) if alarm_entity_id else None

        entries_payload.append(
            {
                "entry_id": entry.entry_id,
                "title": entry.title,
                "entity_id": alarm_entity_id,
                "state": state_obj.state if state_obj else "unavailable",
                "attributes": dict(state_obj.attributes) if state_obj else {},
                "config": dict(entry.data),
                "options": dict(entry.options),
            }
        )

    connection.send_result(
        msg["id"],
        {
            "entries": entries_payload,
            "ui": ui_data,
            "available_entities": _serialize_available_entities(hass),
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_ui",
        vol.Optional("zones", default=[]): list,
        vol.Optional("dashboard", default={}): dict,
        vol.Optional("notif_targets", default=[]): list,
        vol.Optional("tts_targets", default=[]): list,
        vol.Optional("users", default=[]): list,
        vol.Optional("home_name", default=""): str,
        vol.Optional("background_mode", default="weather"): vol.In(["weather", "none", "photo", "collage"]),
        vol.Optional("background_images", default=[]): list,
        vol.Optional("temperature_source", default="auto"): str,
    }
)
@websocket_api.async_response
async def ws_argus_save_ui(hass: HomeAssistant, connection, msg) -> None:
    """Persist zones, dashboard layout, notif_targets, tts_targets and users from the Argus panel UI."""
    saved = await async_save_ui_data(
        hass,
        {
            "zones": msg.get("zones", []),
            "dashboard": msg.get("dashboard", {}),
            "notif_targets": msg.get("notif_targets", []),
            "tts_targets": msg.get("tts_targets", []),
            "users": msg.get("users", []),
            "home_name": msg.get("home_name", ""),
            "background_mode": msg.get("background_mode", "weather"),
            "background_images": msg.get("background_images", []),
            "temperature_source": msg.get("temperature_source", "auto"),
        },
    )
    connection.send_result(msg["id"], {"saved": True, "ui": saved})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_mode_config"})
@websocket_api.async_response
async def ws_argus_get_mode_config(hass: HomeAssistant, connection, msg) -> None:
    """Return current mode settings from storage."""
    ui_data = await async_load_ui_data(hass)
    connection.send_result(msg["id"], ui_data.get("modes", {}))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_mode_config",
        vol.Required("mode"): vol.In(["disarmed", "home", "away", "night", "vacation"]),
        vol.Optional("entity_id", default=""): str,
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_save_mode_config(hass: HomeAssistant, connection, msg) -> None:
    """Save configuration for a specific alarm mode."""
    mode = msg["mode"]
    config = msg["config"]
    entity_id = msg.get("entity_id", "")
    ui_data = await async_load_ui_data(hass)
    modes = ui_data.get("modes", {})
    if entity_id:
        modes.setdefault("__by_entity__", {})
        modes["__by_entity__"].setdefault(entity_id, {})
        modes["__by_entity__"][entity_id][mode] = config
    modes[mode] = config
    await async_save_ui_data(hass, {"modes": modes})
    # Notify alarm panel to reload config and re-subscribe sensors
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "modes": modes})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_audit_log"})
@websocket_api.async_response
async def ws_argus_get_audit_log(hass: HomeAssistant, connection, msg) -> None:
    """Return the Argus audit log."""
    log = await async_get_audit_log(hass)
    connection.send_result(msg["id"], {"log": log})


@websocket_api.websocket_command({vol.Required("type"): "argus/clear_audit_log"})
@websocket_api.async_response
async def ws_argus_clear_audit_log(hass: HomeAssistant, connection, msg) -> None:
    """Clear the Argus audit log."""
    await async_save_ui_data(hass, {"audit_log": []})
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_advanced_config",
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_save_advanced_config(hass: HomeAssistant, connection, msg) -> None:
    """Persist advanced config (guest PIN, NFC, etc.)."""
    await async_save_ui_data(hass, {"advanced": msg["config"]})
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_advanced_config"})
@websocket_api.async_response
async def ws_argus_get_advanced_config(hass: HomeAssistant, connection, msg) -> None:
    """Return the advanced config."""
    ui_data = await async_load_ui_data(hass)
    connection.send_result(msg["id"], ui_data.get("advanced", {}))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_automations",
        vol.Required("automations"): list,
    }
)
@websocket_api.async_response
async def ws_argus_save_automations(hass: HomeAssistant, connection, msg) -> None:
    """Save custom Argus automations."""
    await async_save_ui_data(hass, {"automations": msg["automations"]})
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_automations"})
@websocket_api.async_response
async def ws_argus_get_automations(hass: HomeAssistant, connection, msg) -> None:
    """Return configured automations."""
    ui_data = await async_load_ui_data(hass)
    connection.send_result(msg["id"], ui_data.get("automations", []))


@websocket_api.websocket_command({vol.Required("type"): "argus/get_tts_engines"})
@websocket_api.async_response
async def ws_argus_get_tts_engines(hass: HomeAssistant, connection, msg) -> None:
    """Return a list of TTS providers/engines available."""
    engines = []
    # HA tts providers usually expose entities as tts.<provider>
    for state in hass.states.async_all("tts"):
        engines.append({
            "entity_id": state.entity_id,
            "name": state.attributes.get("friendly_name") or state.name
        })
    # Also some might just be service calls but TTS entity is standard now.
    connection.send_result(msg["id"], engines)


@websocket_api.websocket_command({vol.Required("type"): "argus/get_media_players"})
@websocket_api.async_response
async def ws_argus_get_media_players(hass: HomeAssistant, connection, msg) -> None:
    """Return a list of media_player entities available for TTS."""
    players = []
    for state in hass.states.async_all("media_player"):
        players.append({
            "entity_id": state.entity_id,
            "name": state.attributes.get("friendly_name") or state.name
        })
    connection.send_result(msg["id"], players)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/update_master_pin",
        vol.Required("pin"): str,
    }
)
@websocket_api.async_response
async def ws_argus_update_master_pin(hass: HomeAssistant, connection, msg) -> None:
    """Update the master PIN code on the Argus ConfigEntry."""
    from .const import CONF_CODE

    # Get the first argus config entry
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        connection.send_result(msg["id"], {"success": False, "error": "No config entry found"})
        return
        
    entry = entries[0]
    
    # Update the options
    new_options = dict(entry.options)
    new_options[CONF_CODE] = msg["pin"]
    
    hass.config_entries.async_update_entry(entry, options=new_options)
    
    # Reload the integration so the panel picks up the updated CONF_CODE
    await hass.config_entries.async_reload(entry.entry_id)
    
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/write_log",
        vol.Required("action"): str,
        vol.Optional("detail", default=""): str,
        vol.Optional("user", default=""): str,
    }
)
@websocket_api.async_response
async def ws_argus_write_log(hass: HomeAssistant, connection, msg) -> None:
    """Append an event to the Argus audit log, keeping the last 50 entries."""
    import datetime

    ui_data = await async_load_ui_data(hass)
    log = ui_data.get("audit_log", [])
    log.insert(0, {
        "action": msg["action"],
        "detail": msg.get("detail", ""),
        "user": msg.get("user", ""),
        "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    })
    # Keep only last 50 entries
    ui_data["audit_log"] = log[:50]
    await async_save_ui_data(hass, ui_data)
    connection.send_result(msg["id"], {"written": True})
