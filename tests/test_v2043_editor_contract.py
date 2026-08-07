from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1];SRC=ROOT/'src'/'features'/'dashboard';WWW=ROOT/'custom_components'/'argus'/'www'
class TestV2043EditorContract(unittest.TestCase):
 def test_only_typescript_editor_is_active(self):
  source=(SRC/'index.tsx').read_text();self.assertIn("getElementById('edit-widgets-label')",source);self.assertIn("closest('button')",source);self.assertIn('_argusReactSetEditing',source)
 def test_mount_waits_for_real_dashboard_identity(self):
  source=(SRC/'index.tsx').read_text();self.assertIn('if(!grid||!dashboardId||panel._argusReactRoot)return',source);self.assertNotIn('queueMicrotask(()=>mount(this))',source)
 def test_hydration_cannot_overwrite_saved_layout(self):
  source=(SRC/'ArgusDashboard.tsx').read_text();self.assertIn('[hydrated,setHydrated]',source);self.assertIn('if(!hydrated)return',source);self.assertIn('wasEditing.current&&!editing',source)
 def test_layout_is_local_and_server_persisted(self):
  source=(SRC/'index.tsx').read_text();self.assertIn('react_layout_v2',source);self.assertIn("panel._send('argus/save_ui'",source);self.assertIn('LocalStorageDashboardLayoutStorage',source)
 def test_disarm_is_forced_green_and_full_width(self):
  source=(WWW/'argus-v2043-visual-fix.js').read_text();self.assertIn("setProperty('background','#22a447','important')",source);self.assertIn("setProperty('grid-column','1 / -1','important')",source)
if __name__=='__main__':unittest.main()
