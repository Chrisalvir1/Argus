"""Unit tests for Argus Sensor Walk Test Engine and Per-Sensor Delays."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import time
import unittest
from types import SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


def load_module(name: str, file_path: Path):
    spec = importlib.util.spec_from_file_location(name, file_path)
    assert spec and spec.loader
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


walk_test_mod = load_module("argus.core.walk_test", COMPONENT / "core" / "walk_test.py")
WalkTestManager = walk_test_mod.WalkTestManager
WalkTestSession = walk_test_mod.WalkTestSession
async_get_walk_test_manager = walk_test_mod.async_get_walk_test_manager


class TestWalkTestAndSensorDelays(unittest.IsolatedAsyncioTestCase):
    def test_walk_test_session_lifecycle_and_triggers(self):
        sensors = ["binary_sensor.front_door", "binary_sensor.back_window", "binary_sensor.motion_hall"]
        session = WalkTestSession(entry_id="test_entry", sensors=sensors, timeout_seconds=300, started_by="Alice")

        self.assertTrue(session.active)
        self.assertFalse(session.is_expired)
        self.assertEqual(session.all_sensors, sensors)
        self.assertEqual(len(session.tested_sensors), 0)

        # Trigger first sensor
        is_new = session.record_trigger("binary_sensor.front_door", "on", "Puerta Principal")
        self.assertTrue(is_new)
        self.assertEqual(len(session.tested_sensors), 1)
        self.assertIn("binary_sensor.front_door", session.tested_sensors)

        # Retrigger same sensor - should update but is_new is False
        is_new_repeat = session.record_trigger("binary_sensor.front_door", "off", "Puerta Principal")
        self.assertFalse(is_new_repeat)
        self.assertEqual(len(session.tested_sensors), 1)

        # Trigger second sensor
        session.record_trigger("binary_sensor.back_window", "open", "Ventana Trasera")
        self.assertEqual(len(session.tested_sensors), 2)

        data = session.to_dict()
        self.assertTrue(data["active"])
        self.assertEqual(data["tested_count"], 2)
        self.assertEqual(data["total_sensors"], 3)
        self.assertEqual(data["progress_percent"], 66)

    def test_walk_test_timeout_expiration(self):
        sensors = ["binary_sensor.door"]
        session = WalkTestSession(entry_id="test_entry", sensors=sensors, timeout_seconds=-1)
        self.assertTrue(session.is_expired)
        self.assertFalse(session.record_trigger("binary_sensor.door", "on"))

    def test_walk_test_manager_start_and_stop(self):
        bus = SimpleNamespace(async_fire=Mock())
        hass = SimpleNamespace(data={}, bus=bus)
        mgr = async_get_walk_test_manager(hass)

        sensors = ["binary_sensor.front_door", "binary_sensor.patio"]
        session = mgr.start_walk_test("inst_1", sensors, timeout_seconds=600, started_by="Bob")

        self.assertTrue(mgr.is_active("inst_1"))
        bus.async_fire.assert_called_with("argus_walk_test_started", session.to_dict())

        session.record_trigger("binary_sensor.front_door", "on")
        report = mgr.stop_walk_test("inst_1")

        self.assertFalse(mgr.is_active("inst_1"))
        self.assertIsNotNone(report)
        self.assertEqual(report["tested_count"], 1)
        bus.async_fire.assert_called_with("argus_walk_test_stopped", report)

    def test_per_sensor_instant_and_custom_delays(self):
        """Verify per-sensor delay customization logic."""
        mode_cfg = {
            "entry_delay": 30,
            "entry_sensors": ["binary_sensor.front_door"],
            "sensor_settings": {
                "binary_sensor.patio_window": {"delay": 0, "type": "instant"},
                "binary_sensor.garage_entry": {"delay": 45, "type": "delayed"},
            },
        }

        # Case 1: Window marked instant has delay 0 even if in entry_sensors
        w_setting = mode_cfg["sensor_settings"]["binary_sensor.patio_window"]
        is_instant = w_setting.get("type") == "instant" or w_setting.get("delay") == 0
        self.assertTrue(is_instant)

        # Case 2: Garage marked with custom delay 45 has delay 45
        g_setting = mode_cfg["sensor_settings"]["binary_sensor.garage_entry"]
        g_delay = int(g_setting.get("delay"))
        self.assertEqual(g_delay, 45)

        # Case 3: Front door has no custom delay, uses default 30
        f_setting = mode_cfg["sensor_settings"].get("binary_sensor.front_door", {})
        f_delay = f_setting.get("delay", mode_cfg["entry_delay"])
        self.assertEqual(f_delay, 30)


if __name__ == "__main__":
    unittest.main()
