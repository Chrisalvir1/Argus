from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / 'custom_components' / 'argus' / 'www'
RUNTIME = (WWW / 'argus-runtime-visual-fixes.js').read_text(encoding='utf-8')
PERF = (WWW / 'argus-performance-profile.js').read_text(encoding='utf-8')
GRID = (WWW / 'argus-grid-polish.js').read_text(encoding='utf-8')
BOOTSTRAP = (WWW / 'argus-bootstrap.js').read_text(encoding='utf-8')

class TestV2018RuntimeVisualFixes(unittest.TestCase):
    def test_all_visible_clocks_use_shared_formatter(self):
        self.assertIn("panel._formatTime?.(now)", RUNTIME)
        self.assertIn("hero-clock-time", RUNTIME)
        self.assertIn(".console-hud-time", RUNTIME)
        self.assertIn("CLOCK_INTERVAL_MS", RUNTIME)

    def test_webgl_versions_use_separate_canvases(self):
        self.assertIn("document.createElement('canvas').getContext('webgl2')", PERF)
        self.assertIn("canvas.getContext('webgl')", PERF)
        self.assertLess(PERF.index("getContext('webgl2')"), PERF.index("canvas.getContext('webgl')"))

    def test_missing_memory_is_neutral_and_explained(self):
        self.assertIn("caps.memory?Math.min(caps.memory,8)*6:18", PERF)
        self.assertIn("no expuesta por el navegador", PERF)
        self.assertIn("no identifica ni supone", PERF)

    def test_phone_grid_is_single_column_and_natural_height(self):
        phone = GRID.split('@media(max-width:760px)', 1)[1]
        self.assertIn('grid-template-columns:minmax(0,1fr)', phone)
        self.assertIn('grid-auto-rows:auto', phone)
        self.assertIn('grid-column:1!important', phone)

    def test_tablet_grid_uses_two_columns(self):
        tablet = GRID.split('@media(min-width:761px) and (max-width:900px)', 1)[1]
        self.assertIn('repeat(2,minmax(0,1fr))', tablet)

    def test_shield_filter_bounds_are_expanded(self):
        self.assertIn("filterUnits', 'userSpaceOnUse", RUNTIME)
        self.assertIn("filter.setAttribute('x', '-80')", RUNTIME)
        self.assertIn("filter.setAttribute('width', '360')", RUNTIME)
        self.assertIn('overflow:visible!important', RUNTIME)

    def test_mobile_status_has_explicit_contrast(self):
        self.assertIn('#global-status .badge.disarmed', RUNTIME)
        self.assertIn('color:#fff!important', RUNTIME)
        self.assertIn('.hero-context', RUNTIME)

    def test_runtime_patch_loads_last(self):
        self.assertIn('argus-runtime-visual-fixes.js?v=2.0.46', BOOTSTRAP)
        self.assertGreater(BOOTSTRAP.rfind('applyRuntimeVisualFixes'), BOOTSTRAP.rfind('applyCompleteContentFixes'))

if __name__ == '__main__':
    unittest.main()
