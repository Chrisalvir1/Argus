from pathlib import Path
import unittest
R=Path(__file__).resolve().parents[1];C=R/'custom_components'/'argus'
class TestTriggerVoiceRuntime(unittest.TestCase):
 def test_only_announces_after_real_trigger(self):
  s=(C/'trigger_voice.py').read_text();self.assertIn('await original(self)',s);self.assertIn('self._alarm_state==AlarmControlPanelState.TRIGGERED',s);self.assertIn('not getattr(self,"_panic_active",False)',s)
 def test_sensor_title_not_entity_is_spoken(self):
  s=(C/'arming_voice.py').read_text();self.assertIn('"sensor":sensor["name"]',s);self.assertIn('device.name_by_user',s);self.assertIn('device.name',s)
if __name__=='__main__':unittest.main()
