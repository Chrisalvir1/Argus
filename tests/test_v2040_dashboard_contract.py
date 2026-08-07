import pathlib
import unittest
ROOT=pathlib.Path(__file__).resolve().parents[1]
WWW=ROOT/'custom_components'/'argus'/'www'
class TestV2040DashboardContract(unittest.TestCase):
    def test_dashboard_fix_loads_last(self):
        bootstrap=(WWW/'argus-bootstrap.js').read_text(encoding='utf-8')
        self.assertIn("argus-v2040-dashboard-fixes.js?v=2.0.43",bootstrap)
        self.assertGreater(bootstrap.rfind('applyV2040DashboardFixes'),bootstrap.rfind('applyPersonalizationToggleFix'))
    def test_layout_is_scoped_local_and_server_persisted(self):
        source=(WWW/'argus-v2040-dashboard-fixes.js').read_text(encoding='utf-8')
        for token in ('argus-widgets-v3:',"argus/save_ui",'widget_layout','_v2040SaveChain','capture(this)'):
            self.assertIn(token,source)
    def test_modes_and_access_have_internal_scroll(self):
        source=(WWW/'argus-v2040-dashboard-fixes.js').read_text(encoding='utf-8')
        for token in ('#w-modes','#w-access','#mode-view','#access-view','overflow-y:auto','-webkit-overflow-scrolling:touch'):
            self.assertIn(token,source)
if __name__=='__main__': unittest.main()
