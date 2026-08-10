"""Executable behavior tests for arming-wait voice transitions."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).parents[1]
MODULE = ROOT / "custom_components" / "argus" / "arming_voice_state.py"
SPEC = importlib.util.spec_from_file_location("argus_arming_voice_state", MODULE)
assert SPEC and SPEC.loader
voice_state = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = voice_state
SPEC.loader.exec_module(voice_state)


class TestArmingVoiceBehavior(unittest.TestCase):
    def test_initial_wait_announces_every_open_sensor(self) -> None:
        transition = voice_state.resolve_wait_announcement(
            [],
            ["binary_sensor.patio", "binary_sensor.porton"],
        )
        self.assertEqual(transition["phase"], "start")
        self.assertEqual(
            transition["current"],
            ["binary_sensor.patio", "binary_sensor.porton"],
        )
        self.assertEqual(transition["closed"], [])

    def test_closure_announces_closed_and_remaining_even_when_one_remains(self) -> None:
        transition = voice_state.resolve_wait_announcement(
            ["binary_sensor.patio", "binary_sensor.porton"],
            ["binary_sensor.porton"],
        )
        self.assertEqual(transition["phase"], "remaining")
        self.assertEqual(transition["closed"], ["binary_sensor.patio"])
        self.assertEqual(transition["current"], ["binary_sensor.porton"])

    def test_final_closure_announces_completion(self) -> None:
        transition = voice_state.resolve_wait_announcement(
            ["binary_sensor.porton"],
            [],
        )
        self.assertEqual(transition["phase"], "complete")
        self.assertEqual(transition["closed"], ["binary_sensor.porton"])
        self.assertEqual(transition["current"], [])

    def test_unchanged_sensor_set_does_not_repeat_tts(self) -> None:
        self.assertIsNone(
            voice_state.resolve_wait_announcement(
                ["binary_sensor.porton"],
                ["binary_sensor.porton"],
            )
        )

    def test_duplicate_entities_are_announced_once(self) -> None:
        transition = voice_state.resolve_wait_announcement(
            [],
            ["binary_sensor.porton", "binary_sensor.porton"],
        )
        self.assertEqual(transition["current"], ["binary_sensor.porton"])

    def test_production_voice_path_uses_pure_transition(self) -> None:
        source = (ROOT / "custom_components" / "argus" / "arming_voice.py").read_text(encoding="utf-8")
        self.assertIn("resolve_wait_announcement(previous_open, current_open)", source)
        self.assertIn('phase == "remaining"', source)
        self.assertLess(source.index('phase == "remaining"'), source.index('phase == "last"'))


if __name__ == "__main__":
    unittest.main()
