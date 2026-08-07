from pathlib import Path
import unittest
R=Path(__file__).resolve().parents[1];C=R/'custom_components'/'argus'
class TestTriggerVoice(unittest.TestCase):
 def test_trigger_message_is_configurable_in_ui_and_yaml(self):
  cfg=(C/'config_flow.py').read_text();init=(C/'__init__.py').read_text();self.assertIn('CONF_ARMING_VOICE_MESSAGE_TRIGGERED',cfg);self.assertIn('message_triggered',init)
 def test_trigger_announcement_uses_exact_sensor(self):
  voice=(C/'arming_voice.py').read_text();runtime=(C/'trigger_voice.py').read_text();self.assertIn('async_announce_alarm_triggered',voice);self.assertIn('sensor_entity_id',voice);self.assertIn('_sensor_identity',voice);self.assertIn('self._alarm_state==AlarmControlPanelState.TRIGGERED',runtime)
 def test_alarm_event_has_full_sensor_identity(self):
  voice=(C/'arming_voice.py').read_text();self.assertIn('argus_alarm_triggered',voice);self.assertIn('"sensor":sensor',voice);self.assertIn('"sensor_name":sensor["name"]',voice)
 def test_yaml_documented(self):
  doc=(R/'docs'/'TTS_YAML.md').read_text();self.assertIn('message_triggered:',doc);self.assertIn('{sensor_entity_id}',doc)
if __name__=='__main__':unittest.main()
