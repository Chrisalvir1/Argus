from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1];SRC=ROOT/'src'/'features'/'dashboard';APP=ROOT/'src'/'app'/'ArgusApp.tsx';WWW=ROOT/'custom_components'/'argus'/'www'
class TestV2043EditorContract(unittest.TestCase):
 def test_only_typescript_editor_is_active(self):
  source=(SRC/'ArgusDashboard.tsx').read_text();self.assertIn('isDraggable={editing}',source);self.assertIn('isResizable={editing}',source);self.assertIn('argus-widget__drag-handle',source)
 def test_mount_waits_for_real_dashboard_identity(self):
  source=APP.read_text();self.assertIn('if(!entryId)return',source);self.assertIn("argus/dashboard",source);self.assertNotIn('queueMicrotask(()=>mount(this))',source)
 def test_hydration_cannot_overwrite_saved_layout(self):
  source=(SRC/'ArgusDashboard.tsx').read_text();self.assertIn('[hydrated,setHydrated]',source);self.assertIn('if(!hydrated)return',source);self.assertIn('wasEditing.current&&!editing',source)
 def test_layout_is_local_and_server_persisted(self):
  source=APP.read_text();self.assertIn('react_layout_v2',source);self.assertIn("this.send('argus/save_ui'",source);self.assertIn('LocalStorageDashboardLayoutStorage',source)
 def test_disarm_is_forced_green_and_full_width(self):
  source=APP.read_text();self.assertIn("perform('disarm')",source);self.assertIn('argus-react-actions',source)
if __name__=='__main__':unittest.main()
