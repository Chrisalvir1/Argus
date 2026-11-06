"""Resolve legacy and current Argus voice settings without dropping values."""
from __future__ import annotations


def resolve_voice_settings(fields, entry_data, entry_options, yaml_values, ui_values):
    """Return effective settings, fields to import, and whether legacy exists.

    Precedence is Argus panel > YAML > config-entry Options > config-entry
    data. Empty strings are retained because they mean “use the default text”.
    """
    legacy = {}
    for key in fields:
        value = entry_data.get(key)
        if key in entry_options and entry_options[key] is not None:
            value = entry_options[key]
        if key in yaml_values and yaml_values[key] is not None:
            value = yaml_values[key]
        if value is not None:
            legacy[key] = value

    ui = {key: value for key, value in ui_values.items() if key in fields}
    effective = dict(legacy)
    effective.update(ui)
    to_import = {key: value for key, value in legacy.items() if key not in ui}
    return effective, to_import, bool(legacy)


def merge_media_player_entities(states, registry_entries):
    """Return active and registered Home Assistant media players.

    Some integrations create an entity-registry entry before a state is
    available (for example while the player is offline). Keeping those
    enabled entries discoverable lets Argus configure the player without
    requiring it to be online at the exact moment the voice editor opens.
    """
    players = {}

    def get_value(item, key, default=None):
        if isinstance(item, dict):
            return item.get(key, default)
        return getattr(item, key, default)

    registry_entries = list(registry_entries)
    disabled = {
        get_value(entry, "entity_id", "")
        for entry in registry_entries
        if get_value(entry, "disabled_by") is not None
    }

    for state in states:
        entity_id = get_value(state, "entity_id", "")
        if not isinstance(entity_id, str) or not entity_id.startswith("media_player."):
            continue
        if entity_id in disabled:
            continue
        attributes = get_value(state, "attributes", {}) or {}
        name = attributes.get("friendly_name") or get_value(state, "name") or entity_id
        current_state = str(get_value(state, "state", "unknown"))
        players[entity_id] = {
            "entity_id": entity_id,
            "name": str(name),
            "available": current_state != "unavailable",
            "state": current_state,
        }

    for entry in registry_entries:
        entity_id = get_value(entry, "entity_id", "")
        if not isinstance(entity_id, str) or not entity_id.startswith("media_player."):
            continue
        if get_value(entry, "disabled_by") is not None:
            continue
        state = players.get(entity_id)
        state_name = state["name"] if state else ""
        name = (
            get_value(entry, "name")
            or state_name
            or get_value(entry, "original_name")
            or entity_id
        )
        if state is None:
            state = {
                "entity_id": entity_id,
                "name": str(name),
                "available": False,
                "state": "unavailable",
            }
            players[entity_id] = state
        else:
            # The registry's custom name should win, while active states
            # still supply the current name when HA has no custom override.
            state["name"] = str(get_value(entry, "name") or state_name or get_value(entry, "original_name") or entity_id)

    return sorted(players.values(), key=lambda player: (player["name"].casefold(), player["entity_id"]))
