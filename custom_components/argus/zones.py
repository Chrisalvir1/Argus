"""Validation and normalization for user-defined Argus zones."""
from __future__ import annotations

import copy
import re
import uuid

_ID = re.compile(r"^[A-Za-z0-9_-]{1,64}$")
_MODES = {"disarmed", "home", "away", "night"}
_CONDITIONS = {"open", "close", "motion", "detected"}
_ACTIVE = {"on", "open", "opening", "unlocked", "active", "motion", "detected", "occupied", "wet", "problem", "unsafe", "recording", "true", "1", "tamper", "vibration", "triggered"}
_CLOSED = {"off", "closed", "closing", "locked", "locking", "standby", "safe", "clear", "cerrado", "idle", "inactive", "false", "0"}


def default_zones() -> list[dict]:
    """Create the three unconfigured crystals present in a fresh Argus setup."""
    return [{
        "id": f"zone-{number}", "number": number, "name": f"Zona {number}", "area": "",
        "modes": [], "entity_ids": [], "device_ids": [], "enabled": True,
        "sensor_settings": {},
    } for number in range(1, 4)]


def condition_matches(condition: str, old_state: object, new_state: object, device_class: str | None = None) -> bool:
    """Match an explicit zone trigger transition without confusing state with alarm latch."""
    old_value = str(old_state or "").strip().lower()
    new_value = str(new_state or "").strip().lower()
    active = new_value in _ACTIVE
    if condition == "close":
        return old_value in _ACTIVE and new_value in _CLOSED
    if condition == "motion":
        return active and (device_class or "").lower() in {"motion", "occupancy", "presence", "moving"}
    if condition == "detected":
        return active and ((device_class or "").lower() in {"smoke", "gas", "carbon_monoxide", "heat", "safety", "problem", "moisture"} or new_value in {"detected", "triggered", "problem", "unsafe"})
    return active


def sanitize_zones(value: object, valid_entities: set[str] | None = None, valid_devices: set[str] | None = None) -> list[dict]:
    if not isinstance(value, list):
        raise ValueError("zones must be a list")
    if len(value) > 10:
        raise ValueError("Argus supports at most 10 zones")
    result = []
    for index, raw in enumerate(value):
        if not isinstance(raw, dict):
            raise ValueError("every zone must be an object")
        zone = copy.deepcopy(raw)
        zone_id = str(zone.get("id") or uuid.uuid4())
        if not _ID.match(zone_id) and not _looks_like_uuid(zone_id):
            raise ValueError("zone id is invalid")
        entities = _links(zone.get("entity_ids", []), "entity_ids")
        devices = _links(zone.get("device_ids", []), "device_ids")
        number = zone.get("number", index + 1)
        if isinstance(number, bool) or not isinstance(number, int) or not 1 <= number <= 10:
            raise ValueError("zone number must be between 1 and 10")
        # The zone number is the stable identity shown on the security crystal;
        # only its area label is user-editable.
        name = f"Zona {number}"
        area = str(zone.get("area") or "").strip()
        if len(area) > 80:
            raise ValueError("zone area is too long")
        # SOS is an output-only emergency configuration, not an arming mode
        # that can own intrusion-zone sensors. Silently migrate old assignments.
        modes = [mode for mode in _links(zone.get("modes", []), "modes") if mode != "sos"]
        if any(mode not in _MODES for mode in modes):
            raise ValueError("zone mode is invalid")
        settings = zone.get("sensor_settings", {})
        if not isinstance(settings, dict):
            raise ValueError("sensor_settings must be an object")
        clean_settings = {}
        for entity_id, raw_setting in settings.items():
            if entity_id not in entities or not isinstance(raw_setting, dict):
                raise ValueError("sensor setting must belong to this zone")
            condition = raw_setting.get("condition", "open")
            if condition not in _CONDITIONS:
                raise ValueError("sensor condition is invalid")
            delay = raw_setting.get("delay", 0)
            if isinstance(delay, bool) or not isinstance(delay, int) or not 0 <= delay <= 3600:
                raise ValueError("sensor delay must be between 0 and 3600 seconds")
            delay_unit = raw_setting.get("delay_unit", "seconds")
            if delay_unit not in {"seconds", "minutes"}:
                raise ValueError("sensor delay unit must be seconds or minutes")
            clean_settings[entity_id] = {"condition": condition, "delay": delay, "delay_unit": delay_unit}
        if valid_entities is not None:
            unknown = [item for item in entities if item not in valid_entities]
            if unknown:
                raise ValueError(f"unknown entity_id: {unknown[0]}")
        if valid_devices is not None:
            unknown = [item for item in devices if item not in valid_devices]
            if unknown:
                raise ValueError(f"unknown device_id: {unknown[0]}")
        cleaned = {
            "id": zone_id, "number": number, "name": name, "area": area,
            "sensor_settings": clean_settings, "entity_ids": entities,
            "device_ids": devices, "enabled": bool(zone.get("enabled", True)),
            "created_at": zone.get("created_at"), "updated_at": zone.get("updated_at"),
        }
        # A legacy zone without mode assignments has never owned alarm
        # coverage. Keep that distinction until the user assigns it explicitly.
        if "modes" in zone:
            cleaned["modes"] = modes
        result.append(cleaned)
    ids = [item["id"] for item in result]
    if len(ids) != len(set(ids)):
        raise ValueError("zone ids must be unique")
    if len({item["number"] for item in result}) != len(result):
        raise ValueError("zone numbers must be unique")
    linked = [entity_id for zone in result for entity_id in zone["entity_ids"]]
    if len(set(linked)) != len(linked):
        raise ValueError("a sensor can belong to only one zone")
    return result


def _links(value: object, field: str) -> list[str]:
    if not isinstance(value, list):
        raise ValueError(f"{field} must be a list")
    return list(dict.fromkeys(str(item).strip() for item in value if isinstance(item, str) and item.strip()))


def _looks_like_uuid(value: str) -> bool:
    try:
        uuid.UUID(value)
        return True
    except ValueError:
        return False


def project_zone_modes(modes: dict, previous: list[dict], zones: list[dict]) -> dict:
    """Project explicit zone assignments while keeping unassigned legacy sensors."""
    import copy

    projected = copy.deepcopy(modes)
    managed = {sensor for zone in previous + zones if "modes" in zone
               for sensor in zone.get("entity_ids", [])}
    scopes = list(projected.get("__by_entity__", {}).values())
    if not scopes:
        scopes = [projected]
    for scope in scopes:
        for mode in ("disarmed", "home", "away", "night"):
            config = scope.setdefault(mode, {})
            if not isinstance(config, dict):
                config = scope[mode] = {}
            legacy = [sensor for sensor in config.get("sensors", []) if sensor not in managed]
            assigned = [sensor for zone in zones if zone.get("enabled", True) and mode in zone.get("modes", [])
                        for sensor in zone["entity_ids"]]
            config["sensors"] = list(dict.fromkeys(legacy + assigned))
            settings = dict(config.get("sensor_settings") or {})
            for sensor in managed:
                settings.pop(sensor, None)
            for zone in zones:
                if mode not in zone.get("modes", []) or not zone.get("enabled", True):
                    continue
                for sensor, setting in zone.get("sensor_settings", {}).items():
                    settings[sensor] = {"type": "instant" if setting["delay"] == 0 else "custom",
                                        "delay": setting["delay"], "condition": setting["condition"]}
            config["sensor_settings"] = settings
            config["bypassed_sensors"] = [sensor for sensor in config.get("bypassed_sensors", []) if sensor not in managed]
        sos_config = scope.setdefault("sos", {})
        if not isinstance(sos_config, dict):
            sos_config = scope["sos"] = {}
        sos_config["sensors"] = [sensor for sensor in sos_config.get("sensors", []) if sensor not in managed]
        sos_settings = dict(sos_config.get("sensor_settings") or {})
        for sensor in managed:
            sos_settings.pop(sensor, None)
        sos_config["sensor_settings"] = sos_settings
        sos_config["bypassed_sensors"] = [sensor for sensor in sos_config.get("bypassed_sensors", []) if sensor not in managed]
    return projected


def zone_activation_updates(current: dict, zones: list[dict], enabled: bool) -> dict:
    """Keep inactive definitions separate from effective security assignments."""
    import copy

    if enabled and not zones:
        zones = default_zones()
    was_enabled = current.get("zones_enabled", False)
    modes = current.get("modes", {})
    updates = {"zones_enabled": enabled, "zones_initialized": True,
               "zones_saved": copy.deepcopy(zones), "zones": zones if enabled else []}
    if enabled:
        if not was_enabled:
            updates["zones_legacy_modes"] = copy.deepcopy(modes)
        updates["modes"] = project_zone_modes(modes, current.get("zones", []), zones)
    elif was_enabled:
        restored = project_zone_modes(modes, current.get("zones", []), [])
        baseline = current.get("zones_legacy_modes", {})
        # Restore only sensor assignments; other mode settings may have been edited.
        for key, value in baseline.items():
            if key == "__by_entity__":
                for entity_id, scope in value.items():
                    target = restored.setdefault(key, {}).setdefault(entity_id, {})
                    _restore_zone_sensor_fields(target, scope)
            elif isinstance(value, dict):
                _restore_zone_sensor_fields(restored, {key: value})
        updates["modes"] = restored
    else:
        updates["modes"] = copy.deepcopy(modes)
    return updates


def _restore_zone_sensor_fields(target: dict, source: dict) -> None:
    import copy
    for mode, config in source.items():
        if not isinstance(config, dict):
            continue
        dest = target.setdefault(mode, {})
        for field in ("sensors", "sensor_settings", "bypassed_sensors"):
            if field in config:
                dest[field] = copy.deepcopy(config[field])
            else:
                dest.pop(field, None)


def zone_event_payloads(zones: list[dict], entity_id: str, states) -> list[dict]:
    """Describe physical states for HA automations, independently of alarm latching."""
    results = []
    for zone in zones:
        sensors = zone.get("entity_ids", [])
        if not zone.get("enabled", True) or entity_id not in sensors:
            continue
        values = {sensor: getattr(states.get(sensor), "state", "unavailable") for sensor in sensors}
        active = [sensor for sensor, value in values.items() if str(value).lower() in _ACTIVE]
        unverifiable = [sensor for sensor, value in values.items()
                        if str(value).lower() not in _ACTIVE | _CLOSED]
        results.append({"zone_id": zone["id"], "zone_number": zone.get("number"),
                        "zone_area": zone.get("area", ""), "entity_id": entity_id,
                        "state": values[entity_id], "sensor_states": values,
                        "active_sensors": active, "unverifiable_sensors": unverifiable,
                        "any_sensor_active": bool(active),
                        "all_sensors_active": bool(sensors) and len(active) == len(sensors),
                        "all_sensors_closed": bool(sensors) and not active and not unverifiable})
    return results
