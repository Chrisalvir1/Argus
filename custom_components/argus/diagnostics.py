"""Privacy-preserving Home Assistant diagnostics for Argus."""
from __future__ import annotations

from collections import defaultdict
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er

from . import const


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, entry: ConfigEntry
) -> dict[str, Any]:
    """Return aggregate integration health without exposing IDs or PINs."""
    registry = er.async_get(hass)
    counts: dict[str, dict[str, int]] = defaultdict(lambda: {"total": 0, "available": 0})
    for entity in er.async_entries_for_config_entry(registry, entry.entry_id):
        domain = entity.domain
        counts[domain]["total"] += 1
        state = hass.states.get(entity.entity_id)
        if state is not None and state.state not in {"unknown", "unavailable"}:
            counts[domain]["available"] += 1

    options = dict(entry.options)
    data = dict(entry.data)
    voice_enabled = bool(options.get("arming_voice_enabled", data.get("arming_voice_enabled", False)))
    players = options.get("arming_voice_players", data.get("arming_voice_players", []))
    tts_entity = options.get("arming_voice_tts", data.get("arming_voice_tts"))
    return {
        "integration_version": const.VERSION,
        "config_entry": {
            "state": getattr(entry.state, "value", entry.state),
            "has_data": bool(data),
            "option_count": len(options),
        },
        "entities": dict(sorted(counts.items())),
        "notifications": {
            "arming_voice_enabled": voice_enabled,
            "tts_configured": bool(tts_entity),
            "players_configured": len(players) if isinstance(players, (list, tuple)) else 0,
        },
    }
