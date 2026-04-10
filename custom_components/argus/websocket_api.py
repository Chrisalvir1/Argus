"""WebSocket API for the Argus frontend panel."""
from __future__ import annotations

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er

from .const import DOMAIN
from .storage import async_load_ui_data, async_save_ui_data

_SUPPORTED_DOMAINS = {
    "binary_sensor", "camera", "climate", "cover",
    "light", "lock", "media_player", "sensor", "siren", "switch",
}


def async_register_websocket_api(hass: HomeAssistant) -> None:
    """Register all Argus websocket commands."""
    websocket_api.async_register_command(hass, ws_argus_dashboard)
    websocket_api.async_register_command(hass, ws_argus_save_ui)


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


@websocket_api.websocket_command({vol.Required("type"): "argus/dashboard"})
@websocket_api.async_response
async def ws_argus_dashboard(hass: HomeAssistant, connection, msg) -> None:
    """Return full dashboard  alarm entries, UI state, and available entities."""
    entity_registry = er.async_get(hass)
    ui_data = await async_load_ui_data(hass)
    entries_payload = []

    for entry in hass.config_entries.async_entries(DOMAIN):
        alarm_entity_id = None
        for entity_entry in entity_registry.entities.values():
            if (
                entity_entry.config_entry_id == entry.entry_id
                and entity_entry.domain == "alarm_control_panel"
            ):
                alarm_entity_id = entity_entry.entity_id
                break

        state_obj = hass.states.get(alarm_entity_id) if alarm_entity_id else None
        entries_payload.append(
            {
                "entry_id": entry.entry_id,
                "title": entry.title,
                "entity_id": alarm_entity_id,
                "state": state_obj.state if state_obj else "unavailable",
                "attributes": dict(state_obj.attributes) if state_obj else {},
                "config": dict(entry.data),
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
    }
)
@websocket_api.async_response
async def ws_argus_save_ui(hass: HomeAssistant, connection, msg) -> None:
    """Persist zones and dashboard layout from the Argus panel UI."""
    saved = await async_save_ui_data(
        hass,
        {
            "zones": msg.get("zones", []),
            "dashboard": msg.get("dashboard", {}),
        },
    )
    connection.send_result(msg["id"], {"saved": True, "ui": saved})
