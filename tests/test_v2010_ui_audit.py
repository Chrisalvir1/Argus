from pathlib import Path
import unittest

ROOT = Path(__file__).parents[1]
WWW = ROOT / 'custom_components' / 'argus' / 'www'

class TestUiAuditFixes(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.patch = (WWW / 'argus-ui-audit-fixes.js').read_text(encoding='utf-8')
        cls.bootstrap = (WWW / 'argus-bootstrap.js').read_text(encoding='utf-8')

    def test_patch_is_loaded_before_clients(self):
        self.assertIn("applyUiAuditFixes(ArgusPanel)", self.bootstrap)
        self.assertLess(self.bootstrap.index('applyUiAuditFixes'), self.bootstrap.index('applySecurityClient'))

    def test_fullscreen_does_not_rerender_console(self):
        section = self.patch.split('p._toggleFullscreen=function', 1)[1].split('p._exitFullscreenView', 1)[0]
        self.assertNotIn('_renderEntries', section)
        self.assertIn("classList.add('ios-fullscreen')", section)

    def test_widget_layout_is_server_persisted(self):
        self.assertIn("widget_layout:layout", self.patch)
        self.assertIn("this._send('argus/save_ui',{dashboard})", self.patch)

    def test_widget_sizes_apply_before_save(self):
        section = self.patch.split('p._changeWidgetSize=function', 1)[1].split('p._toggleWidgetVisibility', 1)[0]
        self.assertLess(section.index('dataset.size=size'), section.index('_saveWidgetLayout'))

    def test_supported_languages_cover_new_controls(self):
        for code in ('es:', 'en:', 'fr:', 'pt:', 'it:', 'zh:', 'ru:'):
            self.assertIn(code, self.patch)

if __name__ == '__main__':
    unittest.main()
