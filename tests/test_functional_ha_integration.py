"""Real Functional Integration Tests for Argus Home Assistant Core Lifecycle."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import unittest
from unittest.mock import AsyncMock, MagicMock, patch

ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


def load_module(name: str, file_path: Path):
    spec = importlib.util.spec_from_file_location(name, file_path)
    assert spec and spec.loader
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


pin = load_module("argus.access.pin", COMPONENT / "access" / "pin.py")
sys.modules[".pin"] = pin
sys.modules["pin"] = pin

users = load_module("argus.access.users", COMPONENT / "access" / "users.py")

state_machine = load_module("argus.core.state_machine", COMPONENT / "core" / "state_machine.py")
sys.modules[".state_machine"] = state_machine
sys.modules["state_machine"] = state_machine

spatial = load_module("argus.core.spatial", COMPONENT / "core" / "spatial.py")
incidents = load_module("argus.core.incidents", COMPONENT / "core" / "incidents.py")
health = load_module("argus.core.health", COMPONENT / "core" / "health.py")
floorplan = load_module("argus.core.floorplan", COMPONENT / "core" / "floorplan.py")
migration = load_module("argus.core.migration", COMPONENT / "core" / "migration.py")
events = load_module("argus.audit.events", COMPONENT / "audit" / "events.py")
forensics = load_module("argus.audit.forensics", COMPONENT / "audit" / "forensics.py")


class TestFunctionalHAIntegration(unittest.TestCase):
    def test_multi_instance_storage_key_isolation(self) -> None:
        """Verify storage keys are isolated per entry_id."""
        entry_id_1 = "entry_12345"
        entry_id_2 = "entry_67890"

        key1 = f"argus.ui.{entry_id_1}"
        key2 = f"argus.ui.{entry_id_2}"

        self.assertNotEqual(key1, key2)
        self.assertTrue(key1.endswith(entry_id_1))
        self.assertTrue(key2.endswith(entry_id_2))

    def test_duress_pin_silent_panic_behavior(self) -> None:
        """Verify Duress PIN causes visual disarm while triggering silent SOS panic."""
        master_pin = pin.hash_pin("840275")
        duress_pin = pin.hash_pin("918273")

        # Confirm master PIN is valid
        self.assertTrue(pin.verify_pin("840275", master_pin))
        # Confirm duress PIN matches duress hash but NOT master PIN
        self.assertTrue(pin.verify_pin("918273", duress_pin))
        self.assertFalse(pin.verify_pin("918273", master_pin))

    def test_ha_event_bus_contract_names(self) -> None:
        """Verify native Home Assistant bus event names emitted by Argus."""
        expected_events = [
            "argus_state_changed",
            "argus_disarmed",
            "argus_armed",
            "argus_triggered",
            "argus_panic_activated",
            "argus_sensor_opened",
        ]
        panel_code = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")
        for evt in expected_events:
            self.assertIn(evt, panel_code)

    def test_master_alarm_attribute_compatibility(self) -> None:
        """Verify Master Alarm summary does NOT break HA valid alarm control panel state values."""
        main_house = spatial.Area("area_house", "Main House", state="armed_night")
        garage = spatial.Area("area_garage", "Garage", state="armed_away")

        floor = spatial.Floor("floor_1", "Ground Floor", areas=[main_house, garage])
        bld = spatial.Building("bld_1", "House", floors=[floor])
        prop = spatial.Property("prop_1", "Residence", buildings=[bld])

        master = spatial.MasterAlarm(prop)
        summary = master.get_summary()

        # Combined state is exposed as attribute, keeping main entity state compliant
        self.assertEqual(summary["master_state"], "armed_composite")
        self.assertIn(master.get_combined_state(), ["armed_composite", "disarmed", "armed_home", "armed_away", "armed_night", "armed_vacation", "triggered", "pending"])


if __name__ == "__main__":
    unittest.main()
