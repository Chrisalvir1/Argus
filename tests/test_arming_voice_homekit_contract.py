from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


class TestArmingVoiceHomeKitContract(unittest.TestCase):
    def test_homekit_wait_keeps_requested_mode_and_off_is_reliable(self):
        safety = (COMPONENT / "safety_runtime.py").read_text(encoding="utf-8")
        binary = (COMPONENT / "binary_sensor.py").read_text(encoding="utf-8")
        self.assertIn("self._alarm_state = AlarmControlPanelState.ARMING", safety)
        self.assertIn("waiting_safe_sensor_changed", safety)
        self.assertIn("cancelled_from_off", safety)
        self.assertIn("ArgusArmingInProgressBinarySensor", binary)

    def test_voice_uses_device_title_identity_and_event(self):
        voice = (COMPONENT / "arming_voice.py").read_text(encoding="utf-8")
        self.assertIn("device.name_by_user", voice)
        self.assertIn("entry.unique_id", voice)
        self.assertIn("device.identifiers", voice)
        self.assertIn("argus_arming_wait_update", voice)
        self.assertIn("media_player_entity_id", voice)


if __name__ == "__main__":
    unittest.main()
