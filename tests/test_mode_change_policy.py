"""Mode-change policy keeps security modes behind an explicit disarm."""
from __future__ import annotations

import unittest
import importlib.util
from pathlib import Path

POLICY_PATH = Path(__file__).resolve().parents[1] / "custom_components" / "argus" / "mode_policy.py"
POLICY_SPEC = importlib.util.spec_from_file_location("argus_mode_policy_test", POLICY_PATH)
POLICY = importlib.util.module_from_spec(POLICY_SPEC)
assert POLICY_SPEC and POLICY_SPEC.loader
POLICY_SPEC.loader.exec_module(POLICY)
mode_change_block_reason = POLICY.mode_change_block_reason


class TestModeChangePolicy(unittest.TestCase):
    def test_each_armed_mode_requires_disarm_before_switch(self):
        for current in ("armed_home", "armed_away", "armed_night"):
            for target in ("armed_home", "armed_away", "armed_night"):
                with self.subTest(current=current, target=target):
                    reason = mode_change_block_reason(current, target)
                    if current == target:
                        self.assertIsNone(reason)
                    else:
                        self.assertIn("Desarma Argus", reason)

    def test_disarmed_state_allows_choosing_any_mode(self):
        for target in ("armed_home", "armed_away", "armed_night"):
            with self.subTest(target=target):
                self.assertIsNone(mode_change_block_reason("disarmed", target))

    def test_pending_and_active_alarm_block_mode_selection(self):
        for current in ("arming", "pending"):
            with self.subTest(current=current):
                self.assertIn("Cancela el armado", mode_change_block_reason(current, "armed_night"))
        self.assertIn("Detén la alarma", mode_change_block_reason("triggered", "armed_home"))
        self.assertIn(
            "Detén la alarma",
            mode_change_block_reason("armed_home", "armed_away", alarm_active=True),
        )

    def test_home_assistant_enum_values_are_supported(self):
        class State:
            value = "armed_home"

        self.assertIn("Desarma Argus", mode_change_block_reason(State(), "armed_away"))


if __name__ == "__main__":
    unittest.main()
