"""Upgrade fixtures for zone configuration from the official 2.6.8 store."""
from __future__ import annotations

import asyncio
import ast
import copy
import sys
from pathlib import Path
from types import ModuleType
from types import SimpleNamespace
import unittest
from unittest.mock import patch

# Load the integration modules without running the full Home Assistant package
# initializer. This fixture only exercises persisted data migration and zone
# projection, not platform registration.
ARGUS_PACKAGE = "custom_components.argus"
ARGUS_PATH = Path(__file__).resolve().parents[1] / "custom_components" / "argus"
if ARGUS_PACKAGE not in sys.modules:
    package = ModuleType(ARGUS_PACKAGE)
    package.__path__ = [str(ARGUS_PATH)]
    package.__package__ = ARGUS_PACKAGE
    sys.modules[ARGUS_PACKAGE] = package

from custom_components.argus import storage
from custom_components.argus.const import DOMAIN
from custom_components.argus.zones import default_zones, project_zone_modes


PANEL_SOURCE = ARGUS_PATH / "alarm_control_panel.py"
PANEL_TREE = ast.parse(PANEL_SOURCE.read_text(encoding="utf-8"))
PANEL_CLASS = next(
    node for node in PANEL_TREE.body
    if isinstance(node, ast.ClassDef) and node.name == "ArgusAlarmPanel"
)
_SENSORS_FOR_STATE = next(
    node for node in PANEL_CLASS.body
    if isinstance(node, ast.FunctionDef) and node.name == "_sensors_for_state"
)
_MODE_CONFIG = next(
    node for node in PANEL_CLASS.body
    if isinstance(node, ast.FunctionDef) and node.name == "_mode_config"
)


class _AlarmState:
    def __init__(self, value):
        self.value = value


class _AlarmStates:
    ARMED_HOME = _AlarmState("armed_home")
    ARMED_AWAY = _AlarmState("armed_away")
    ARMED_NIGHT = _AlarmState("armed_night")


_PANEL_METHODS = {"AlarmControlPanelState": _AlarmStates}
exec(compile(ast.Module(body=[_SENSORS_FOR_STATE, _MODE_CONFIG], type_ignores=[]), str(PANEL_SOURCE), "exec"), _PANEL_METHODS)


def effective_mode_sensors(modes: dict, mode: str) -> list[str]:
    panel = SimpleNamespace(
        _ui_config={"modes": modes},
        entity_id="alarm_control_panel.argus",
        _sensors_home=[], _sensors_away=[], _sensors_night=[],
    )
    panel._mode_config = lambda key: _PANEL_METHODS["_mode_config"](panel, key)
    state = getattr(_AlarmStates, f"ARMED_{mode.upper()}")
    return _PANEL_METHODS["_sensors_for_state"](panel, state)


class MemoryStore:
    """In-memory stand-in for HA Store, isolated to this migration test."""

    records: dict[str, dict] = {}

    def __init__(self, _hass, _version, key):
        self.key = key

    async def async_load(self):
        value = self.records.get(self.key)
        return copy.deepcopy(value)

    async def async_save(self, value):
        self.records[self.key] = copy.deepcopy(value)


class ZoneUpgradeMigrationTests(unittest.TestCase):
    def setUp(self):
        MemoryStore.records = {}
        self.entry_id = "upgrade-entry"
        self.hass = SimpleNamespace(
            data={},
            config_entries=SimpleNamespace(
                async_entries=lambda domain: [object()] if domain == DOMAIN else []
            ),
        )

    def upgrade(self, legacy_store: dict | None, entry_store: dict | None = None) -> dict:
        if legacy_store is not None:
            MemoryStore.records[f"{DOMAIN}.ui"] = copy.deepcopy(legacy_store)
        if entry_store is not None:
            MemoryStore.records[f"{DOMAIN}.ui.{self.entry_id}"] = copy.deepcopy(entry_store)
        with patch.object(storage, "Store", MemoryStore):
            return asyncio.run(storage.async_load_ui_data(self.hass, self.entry_id))

    def test_v268_upgrade_keeps_explicitly_empty_zones_empty(self):
        # Shape of the official release's legacy Store: no migration marker.
        old_modes = {
            "home": {"sensors": ["binary_sensor.front_door"]},
            "away": {"sensors": ["binary_sensor.front_door", "binary_sensor.motion"]},
            "night": {"sensors": ["binary_sensor.front_door"]},
        }
        result = self.upgrade({"first_run": False, "zones": [], "modes": old_modes})

        self.assertEqual(result["zones"], [])
        self.assertTrue(result["zones_initialized"])
        self.assertEqual(result["modes"], old_modes)
        # The zone projection used when an admin saves an empty zone list must
        # leave legacy mode sensors active; no zone is required for arming.
        projected = project_zone_modes(result["modes"], [], [])
        self.assertEqual(projected["away"]["sensors"], old_modes["away"]["sensors"])
        self.assertEqual(effective_mode_sensors(projected, "away"), old_modes["away"]["sensors"])

    def test_core_uses_legacy_mode_sensors_without_any_zone(self):
        old_modes = {"home": {"sensors": []}, "away": {"sensors": ["binary_sensor.front_door"]}, "night": {"sensors": []}}
        result = self.upgrade({"first_run": False, "zones": [], "modes": old_modes})

        self.assertEqual(effective_mode_sensors(result["modes"], "away"), ["binary_sensor.front_door"])

    def test_core_uses_zone_assigned_sensors_after_zone_projection(self):
        legacy_modes = {
            "home": {"sensors": ["binary_sensor.front_door"]},
            "away": {"sensors": ["binary_sensor.front_door"]},
            "night": {"sensors": []},
        }
        configured = [{
            "id": "patio", "number": 1, "name": "Zona 1", "area": "Patio",
            "modes": ["away"], "entity_ids": ["binary_sensor.back_door"],
            "device_ids": [], "enabled": True,
            "sensor_settings": {"binary_sensor.back_door": {"condition": "open", "delay": 0}},
        }]
        projected = project_zone_modes(legacy_modes, [], configured)

        self.assertEqual(
            effective_mode_sensors(projected, "away"),
            ["binary_sensor.front_door", "binary_sensor.back_door"],
        )

    def test_upgrade_preserves_configured_zones_and_assignments(self):
        configured = [{
            "id": "patio", "number": 1, "name": "Zona 1", "area": "Patio",
            "modes": ["away"], "entity_ids": ["binary_sensor.back_door"],
            "device_ids": [], "enabled": True,
            "sensor_settings": {"binary_sensor.back_door": {"condition": "open", "delay": 0}},
        }]
        old_modes = {"away": {"sensors": ["binary_sensor.back_door"]}}
        result = self.upgrade({"first_run": False, "zones": configured, "modes": old_modes})

        self.assertEqual(result["zones"], configured)
        self.assertEqual(result["modes"]["away"]["sensors"], ["binary_sensor.back_door"])

    def test_existing_entry_store_empty_zones_is_not_repopulated(self):
        result = self.upgrade(None, {"first_run": False, "zones": [], "modes": {"away": {}}})
        self.assertEqual(result["zones"], [])
        self.assertTrue(result["zones_initialized"])

    def test_fresh_install_still_receives_default_zone_slots(self):
        result = self.upgrade(None)
        self.assertEqual(result["zones"], [])
        self.assertFalse(result["zones_enabled"])
        self.assertEqual(result["zones_saved"], default_zones())
        self.assertTrue(result["zones_initialized"])


if __name__ == "__main__":
    unittest.main()
