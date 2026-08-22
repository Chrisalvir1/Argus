"""v2.0.50 arming-wait completion and Aqara-safe open detection."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
RUNTIME = (ROOT / "custom_components" / "argus" / "sensor_state_runtime.py").read_text(encoding="utf-8")
PANEL = (ROOT / "custom_components" / "argus" / "alarm_control_panel.py").read_text(encoding="utf-8")
CONST = (ROOT / "custom_components" / "argus" / "const.py").read_text(encoding="utf-8")
MANIFEST = (ROOT / "custom_components" / "argus" / "manifest.json").read_text(encoding="utf-8")
BOOTSTRAP = (ROOT / "custom_components" / "argus" / "www" / "argus-bootstrap.js").read_text(encoding="utf-8")


class TestV2050ArmingComplete(unittest.TestCase):
    def test_version_is_2050(self):
        self.assertIn('VERSION = "2.2.83"', CONST)
        self.assertIn('"version": "2.2.83"', MANIFEST)
        self.assertIn("2.2.83", BOOTSTRAP)

    def test_runtime_unifies_open_detection(self):
        self.assertIn("def is_sensor_active(", RUNTIME)
        self.assertIn("def open_blocking_sensors(", RUNTIME)
        self.assertIn("ArgusAlarmPanel._open_blocking_sensors = open_blocking_override", RUNTIME)
        self.assertIn("is_active_sensor_state", RUNTIME)
        self.assertIn(".arming_state_machine", RUNTIME)

    def test_runtime_completes_when_blockers_clear(self):
        self.assertIn("decide_arming_wait", RUNTIME)
        self.assertIn("decision.complete", RUNTIME)
        self.assertIn("delay_elapsed", RUNTIME)
        self.assertIn("await self._async_complete_arming(target)", RUNTIME)

    def test_panel_still_has_pending_policy(self):
        self.assertIn("wait_for_sensors", PANEL)
        self.assertIn("open_sensors_policy", PANEL)
        self.assertIn("_async_recheck_arm_request", PANEL)


if __name__ == "__main__":
    unittest.main()
