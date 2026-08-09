"""Version and wiring contracts for Aqara-safe arming completion."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
ARGUS = ROOT / "custom_components" / "argus"
RUNTIME = (ARGUS / "sensor_state_runtime.py").read_text(encoding="utf-8")
MACHINE = (ARGUS / "arming_state_machine.py").read_text(encoding="utf-8")
PANEL = (ARGUS / "alarm_control_panel.py").read_text(encoding="utf-8")
CONST = (ARGUS / "const.py").read_text(encoding="utf-8")
MANIFEST = (ARGUS / "manifest.json").read_text(encoding="utf-8")
BOOTSTRAP = (ARGUS / "www" / "argus-bootstrap.js").read_text(encoding="utf-8")


class TestV2050ArmingComplete(unittest.TestCase):
    def test_current_version_is_consistent(self):
        self.assertIn('VERSION = "2.0.54"', CONST)
        self.assertIn('"version": "2.0.54"', MANIFEST)
        self.assertIn("2.0.54", BOOTSTRAP)

    def test_runtime_uses_one_open_detection_function(self):
        self.assertIn("def is_sensor_active(", RUNTIME)
        self.assertIn("def open_blocking_sensors(", RUNTIME)
        self.assertIn(
            "ArgusAlarmPanel._open_blocking_sensors = open_blocking_override",
            RUNTIME,
        )
        self.assertIn("is_active_sensor_state", RUNTIME)
        self.assertIn("binary_sensor", MACHINE)
        self.assertIn("opening", MACHINE)
        self.assertIn("cerrado", MACHINE)

    def test_runtime_completes_when_final_blocker_clears(self):
        self.assertIn("decide_arming_wait", RUNTIME)
        self.assertIn("decision.complete", RUNTIME)
        self.assertIn("sensor_wait_started", RUNTIME)
        self.assertIn("delay_elapsed", RUNTIME)
        self.assertIn("await self._async_complete_arming(target)", RUNTIME)
        self.assertIn('reason = "sensors_cleared"', MACHINE)

    def test_runtime_has_recovery_instead_of_permanent_return(self):
        self.assertIn("recover_orphaned_arming", RUNTIME)
        self.assertIn('request["generation"] = self._arm_generation', RUNTIME)

    def test_panel_still_exposes_pending_policy(self):
        self.assertIn("wait_for_sensors", PANEL)
        self.assertIn("open_sensors_policy", PANEL)
        self.assertIn("_async_recheck_arm_request", PANEL)


if __name__ == "__main__":
    unittest.main()
