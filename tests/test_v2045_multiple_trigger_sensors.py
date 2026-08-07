from pathlib import Path
import unittest
R=Path(__file__).resolve().parents[1];C=R/'custom_components'/'argus';W=C/'www'
class TestMultipleTriggerSensors(unittest.TestCase):
 def test_runtime_tracks_additional_sensors(self):
  s=(C/'trigger_voice.py').read_text();self.assertIn('_argus_triggered_sensors',s);self.assertIn('wrapped_sensor',s);self.assertIn('additional(self,entity_id)',s);self.assertIn('triggered_sensor_count',s)
 def test_voice_has_initial_and_additional_messages(self):
  s=(C/'arming_voice.py').read_text();self.assertIn('CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED',s);self.assertIn('"additional":additional',s);self.assertIn('"triggered_sensors":all_info',s)
 def test_active_instance_blinks_triggered_sensors_orange(self):
  s=(W/'argus-v2045-trigger-sensors.js').read_text();self.assertIn('argus-triggered-sensor',s);self.assertIn('#ff8a1f',s);self.assertIn('argusTriggeredSensor',s);self.assertIn('triggered_sensors',s)
if __name__=='__main__':unittest.main()
