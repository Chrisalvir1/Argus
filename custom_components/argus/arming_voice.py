"""Dynamic TTS and event payloads for Argus sensor-wait arming."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr, entity_registry as er

from .const import (
    CONF_ARMING_VOICE_ENABLED,
    CONF_ARMING_VOICE_TTS,
    CONF_ARMING_VOICE_PLAYERS,
    CONF_ARMING_VOICE_MESSAGE_START,
    CONF_ARMING_VOICE_MESSAGE_REMAINING,
    CONF_ARMING_VOICE_MESSAGE_LAST,
    CONF_ARMING_VOICE_MESSAGE_COMPLETE,
    DEFAULT_ARMING_VOICE_MESSAGE_START,
    DEFAULT_ARMING_VOICE_MESSAGE_REMAINING,
    DEFAULT_ARMING_VOICE_MESSAGE_LAST,
    DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE,
)

_LOGGER = logging.getLogger(__name__)
_MODE_NAMES = {"armed_home": "En casa", "armed_away": "Ausente", "armed_night": "Noche", "armed_vacation": "Vacaciones"}


class _SafeValues(dict):
    def __missing__(self, key: str) -> str:
        return "{" + key + "}"


def _sensor_identity(hass: HomeAssistant, entity_id: str) -> dict[str, Any]:
    """Resolve a current display name and stable registry/device identity."""
    state = hass.states.get(entity_id)
    entity_registry = er.async_get(hass)
    device_registry = dr.async_get(hass)
    entry = entity_registry.async_get(entity_id)
    device = device_registry.async_get(entry.device_id) if entry and entry.device_id else None
    name = None
    if state:
        name = state.attributes.get("friendly_name")
    if not name and entry:
        name = entry.name or entry.original_name
    if not name and device:
        name = device.name_by_user or device.name
    name = str(name or entity_id)
    identifiers = sorted(f"{domain}:{value}" for domain, value in (device.identifiers if device else set()))
    connections = sorted(f"{kind}:{value}" for kind, value in (device.connections if device else set()))
    return {
        "entity_id": entity_id,
        "name": name,
        "unique_id": entry.unique_id if entry else None,
        "device_id": entry.device_id if entry else None,
        "identifiers": identifiers,
        "connections": connections,
    }


def _render(template: str, values: dict[str, Any]) -> str:
    try:
        return str(template).format_map(_SafeValues(values)).strip()
    except (ValueError, AttributeError):
        return str(template).strip()


async def async_announce_arming_wait_update(
    hass: HomeAssistant,
    config_entry,
    *,
    alarm_entity_id: str,
    target: str,
    previous_open: list[str],
    current_open: list[str],
) -> None:
    """Publish one dynamic update and optionally speak it on selected players."""
    previous = list(dict.fromkeys(previous_open))
    current = list(dict.fromkeys(current_open))
    if previous == current:
        return

    current_info = [_sensor_identity(hass, entity_id) for entity_id in current]
    previous_set, current_set = set(previous), set(current)
    closed_info = [_sensor_identity(hass, entity_id) for entity_id in previous if entity_id not in current_set]
    opened_info = [_sensor_identity(hass, entity_id) for entity_id in current if entity_id not in previous_set]
    current_names = [item["name"] for item in current_info]
    closed_names = [item["name"] for item in closed_info]
    mode_name = _MODE_NAMES.get(target, target)
    values = {
        "count": len(current),
        "total": len(set(previous) | set(current)),
        "sensors": ", ".join(current_names),
        "closed": ", ".join(closed_names),
        "opened": ", ".join(item["name"] for item in opened_info),
        "mode": mode_name,
        "home": config_entry.title,
    }
    options = dict(config_entry.options)
    if not current:
        template = options.get(CONF_ARMING_VOICE_MESSAGE_COMPLETE, DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE)
    elif len(current) == 1 and previous:
        template = options.get(CONF_ARMING_VOICE_MESSAGE_LAST, DEFAULT_ARMING_VOICE_MESSAGE_LAST)
    elif closed_names:
        template = options.get(CONF_ARMING_VOICE_MESSAGE_REMAINING, DEFAULT_ARMING_VOICE_MESSAGE_REMAINING)
    else:
        template = options.get(CONF_ARMING_VOICE_MESSAGE_START, DEFAULT_ARMING_VOICE_MESSAGE_START)
    message = _render(template, values)

    hass.bus.async_fire("argus_arming_wait_update", {
        "entry_id": config_entry.entry_id,
        "alarm_entity_id": alarm_entity_id,
        "mode": target,
        "mode_name": mode_name,
        "open_count": len(current),
        "open_sensors": current_info,
        "open_sensor_names": current_names,
        "recently_closed": closed_info,
        "recently_opened": opened_info,
        "all_closed": not current,
        "message": message,
    })

    if not options.get(CONF_ARMING_VOICE_ENABLED, False):
        return
    tts_entity = str(options.get(CONF_ARMING_VOICE_TTS, "") or "")
    players = options.get(CONF_ARMING_VOICE_PLAYERS, [])
    if not tts_entity or not isinstance(players, list) or not players or not message:
        return
    for player in players:
        try:
            await hass.services.async_call(
                "tts", "speak",
                {"entity_id": tts_entity, "media_player_entity_id": player, "message": message, "cache": True},
                blocking=False,
            )
        except Exception:  # noqa: BLE001
            _LOGGER.exception("Argus could not announce arming wait on %s", player)
