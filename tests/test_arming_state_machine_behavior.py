"""Executable regression tests for the Argus arming-wait state machine."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "custom_components" / "argus" / "arming_state_machine.py"
SPEC = importlib.util.spec_from_file_location("argus_arming_state_machine", MODULE_PATH)
ARMING = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(ARMING)


class TestArmingStateMachineBehavior(unittest.TestCase):
    def test_aqara_binary_sensor_on_and_off(self):
        self.assertTrue(
            ARMING.is_active_sensor_state("binary_sensor.front_door", "on")
        )
        self.assertFalse(
            ARMING.is_active_sensor_state("binary_sensor.front_door", "off")
        )

    def test_translated_closed_values_do_not_block(self):
        for value in ("closed", "cerrado", "clear", "safe", "inactive"):
            with self.subTest(value=value):
                self.assertFalse(
                    ARMING.is_active_sensor_state("binary_sensor.door", value)
                )

    def test_partial_close_reports_closed_and_remaining(self):
        decision = ARMING.decide_arming_wait(
            ["binary_sensor.front", "binary_sensor.patio"],
            ["binary_sensor.patio"],
            sensor_wait_started=True,
            delay_elapsed=False,
        )
        self.assertEqual(decision.recently_closed, ("binary_sensor.front",))
        self.assertEqual(decision.current_open, ("binary_sensor.patio",))
        self.assertFalse(decision.complete)
        self.assertEqual(decision.reason, "blocking_sensors")

    def test_final_close_completes_without_waiting_for_stale_timer(self):
        decision = ARMING.decide_arming_wait(
            ["binary_sensor.patio"],
            [],
            sensor_wait_started=True,
            delay_elapsed=False,
        )
        self.assertEqual(decision.recently_closed, ("binary_sensor.patio",))
        self.assertTrue(decision.complete)
        self.assertEqual(decision.reason, "sensors_cleared")

    def test_normal_exit_delay_is_preserved_without_initial_blockers(self):
        waiting = ARMING.decide_arming_wait(
            [], [], sensor_wait_started=False, delay_elapsed=False
        )
        elapsed = ARMING.decide_arming_wait(
            [], [], sensor_wait_started=False, delay_elapsed=True
        )
        self.assertFalse(waiting.complete)
        self.assertEqual(waiting.reason, "arming_delay")
        self.assertTrue(elapsed.complete)
        self.assertEqual(elapsed.reason, "delay_elapsed")

    def test_runtime_repairs_generation_and_orphaned_arming(self):
        source = (
            ROOT / "custom_components" / "argus" / "sensor_state_runtime.py"
        ).read_text(encoding="utf-8")
        self.assertIn('request["generation"] = self._arm_generation', source)
        self.assertIn("recover_orphaned_arming", source)
        self.assertIn("sensor_wait_started", source)
        self.assertNotIn(
            'request.get("generation") != self._arm_generation:\n                return',
            source,
        )


if __name__ == "__main__":
    unittest.main()
