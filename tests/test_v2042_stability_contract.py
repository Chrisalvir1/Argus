import pathlib,unittest
R=pathlib.Path(__file__).resolve().parents[1];C=R/'custom_components'/'argus';W=C/'www'
class TestV2042Stability(unittest.TestCase):
 def test_device_title_preferred(self):
  for f in ('arming_voice.py','safety_runtime.py'):
   s=(C/f).read_text();self.assertIn('device.name_by_user',s);self.assertIn('device.name',s)
 def test_homekit_wait_is_real_arming_and_off_is_cancelable(self):
  s=(C/'safety_runtime.py').read_text();self.assertIn('self._alarm_state=AlarmControlPanelState.ARMING',s);self.assertIn('pending or self._alarm_state==AlarmControlPanelState.ARMING',s)
 def test_classic_waiting_visuals_and_disarm_position(self):
  s=(W/'argus-v2042-stability.js').read_text();
  for x in ('grid-column:1/-1','argusWaitShield','argusBlockingSensor','insertBefore(btn,sos)'):self.assertIn(x,s)
 def test_layout_saved_before_edit_exit(self):
  s=(W/'argus-v2042-stability.js').read_text();
  for x in ('argus-widgets-stable-v5','const was=this._widgetEditing','layout=was?snapshot(this):null','dragend'):self.assertIn(x,s)
 def test_react_layout_does_not_override_native_persistence(self):
  b=(W/'argus-bootstrap.js').read_text();self.assertNotIn('applyReactDashboardLayout(ArgusPanel)',b)
if __name__=='__main__':unittest.main()
