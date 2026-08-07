import pathlib,unittest
ROOT=pathlib.Path(__file__).resolve().parents[1];COMP=ROOT/'custom_components'/'argus';WWW=COMP/'www'
class TestV2041SafetyContract(unittest.TestCase):
 def test_homekit_off_cancels_any_pending_state(self):
  s=(COMP/'safety_runtime.py').read_text();self.assertIn('self._alarm_state==AlarmControlPanelState.ARMING',s);self.assertIn('cancelled_from_off',s);self.assertIn('async_announce_arming_cancelled',s)
 def test_sensor_safety_defaults_to_pending(self):
  s=(COMP/'safety_runtime.py').read_text();self.assertIn('return "pending" if sensors',s);self.assertIn('STATE_UNAVAILABLE',s);self.assertIn('domain=="binary_sensor"',s)
 def test_yaml_voice_override(self):
  s=(COMP/'arming_voice.py').read_text();self.assertIn('arming_voice_yaml',s);self.assertIn('merged.update',s);self.assertIn('"tts", "speak"',s)
 def test_panel_repairs_load_last(self):
  b=(WWW/'argus-bootstrap.js').read_text();self.assertIn('argus-v2041-audit-repair.js?v=2.0.44',b);self.assertIn('applyV2041AuditRepair(ArgusPanel)',b)
 def test_disarm_scroll_and_layout(self):
  s=(WWW/'argus-v2041-audit-repair.js').read_text();
  for token in ('DESARMAR / OFF','argus/perform_alarm_action','#w-access','overflow-y:auto','argus-widgets-v4','dragend'):self.assertIn(token,s)
if __name__=='__main__':unittest.main()
