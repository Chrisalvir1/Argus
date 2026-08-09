from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
ARGUS=ROOT/'custom_components'/'argus'
WWW=ARGUS/'www'
class TestV2049HomeKitUiFollowup(unittest.TestCase):
 def test_keepalive_is_scoped_and_cancelled(self):
  source=(ARGUS/'homekit_keepalive.py').read_text(encoding='utf-8')
  for token in ('AlarmControlPanelState.ARMING','_arm_request','async_call_later','argus_homekit_keepalive','cancel_keepalive','_async_complete_arming'):
   self.assertIn(token,source)
 def test_keepalive_installs_after_safety_runtime(self):
  source=(ARGUS/'__init__.py').read_text(encoding='utf-8')
  self.assertIn('install_safety_runtime();install_homekit_keepalive()',source)
 def test_access_scroll_and_widget_centering(self):
  source=(WWW/'argus-v2049-responsive-widgets.js').read_text(encoding='utf-8')
  for token in ('#w-access','overflow-y:auto','touch-action:pan-y','-webkit-overflow-scrolling:touch','#w-backup','#w-github','justify-content:center','align-items:center','flex-wrap:wrap','MutationObserver'):
   self.assertIn(token,source)
 @unittest.skip("Legacy architecture replaced by TypeScript")
 def test_bootstrap_loads_followup(self):
  source=(WWW/'argus-bootstrap.js').read_text(encoding='utf-8')
  self.assertIn('argus-v2049-responsive-widgets.js?v=2.0.50',source)
  self.assertIn('applyV2049ResponsiveWidgets(ArgusPanel)',source)
 def test_v2050_widget_layouts_layer(self):
  source=(WWW/'argus-v2050-widget-layouts.js').read_text(encoding='utf-8')
  for token in ('#w-access','#w-backup','#w-github','touch-action:pan-y','justify-content:center','align-items:center'):
   self.assertIn(token,source)
if __name__=='__main__':unittest.main()
