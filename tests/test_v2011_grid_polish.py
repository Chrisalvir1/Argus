from pathlib import Path
import unittest

ROOT = Path(__file__).parents[1]
WWW = ROOT / 'custom_components' / 'argus' / 'www'
GRID = (WWW / 'argus-grid-polish.js').read_text(encoding='utf-8')
BOOTSTRAP = (WWW / 'argus-bootstrap.js').read_text(encoding='utf-8')

class TestGridPolish(unittest.TestCase):
    def test_four_small_widgets_fit_one_row(self):
        self.assertIn('grid-template-columns:repeat(4,minmax(0,1fr))', GRID)
        self.assertIn('.panel[data-size="S"]{grid-column:span 1', GRID)
    def test_dense_flow_and_ios_sizes(self):
        self.assertIn('grid-auto-flow:dense', GRID)
        for size, cols, rows in [('S','1','1'),('M','2','1'),('L','2','2'),('XL','4','2')]:
            section=GRID.split(f'.panel[data-size="{size}"]',1)[1][:150]
            self.assertIn(f'grid-column:span {cols}',section)
            self.assertIn(f'grid-row:span {rows}',section)
    def test_content_widgets_remain_readable_when_narrow(self):
        self.assertIn('#w-activity[data-size="S"]', GRID)
        self.assertIn('#w-automations[data-size="S"]', GRID)
        self.assertIn('grid-row:span 2!important', GRID)
        self.assertIn('scrollbar-gutter:stable', GRID)
    def test_modes_small_stays_horizontal(self):
        self.assertIn('#w-modes[data-size="S"] #mode-tabs',GRID)
        self.assertIn('grid-auto-flow:column',GRID)
    def test_module_is_loaded(self):
        self.assertIn('applyGridPolish(ArgusPanel)',BOOTSTRAP)

if __name__ == '__main__': unittest.main()
