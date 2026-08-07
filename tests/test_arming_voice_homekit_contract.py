from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
COMPONENT=ROOT/'custom_components'/'argus'
class TestArmingVoiceHomeKitContract(unittest.TestCase):
    def test_homekit_wait_is_disarmed_and_progress_is_external(self):
        panel=(COMPONENT/'alarm_control_panel.py').read_text(encoding='utf-8')
        binary=(COMPONENT/'binary_sensor.py').read_text(encoding='utf-8')
        self.assertIn('Home Assistant maps generic ARMING to Away in HomeKit', panel)
        self.assertIn('self._alarm_state = AlarmControlPanelState.DISARMED', panel)
        self.assertIn('ArgusArmingInProgressBinarySensor', binary)
    def test_voice_uses_dynamic_registry_names_and_event(self):
        voice=(COMPONENT/'arming_voice.py').read_text(encoding='utf-8')
        self.assertIn('friendly_name', voice)
        self.assertIn('entry.unique_id', voice)
        self.assertIn('device.identifiers', voice)
        self.assertIn('argus_arming_wait_update', voice)
        self.assertIn('media_player_entity_id', voice)
if __name__=='__main__': unittest.main()
