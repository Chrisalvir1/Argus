from pathlib import Path
import unittest

PATCH = (Path(__file__).parents[1] / 'custom_components' / 'argus' / 'www' / 'argus-ui-audit-fixes.js').read_text(encoding='utf-8')

class TestIosAdaptiveWidgetGrid(unittest.TestCase):
    def test_four_small_widgets_fit_one_row(self):
        self.assertIn('grid-template-columns:repeat(4,minmax(0,1fr))', PATCH)
        self.assertIn('.panel[data-size="S"]{grid-column:span 1', PATCH)

    def test_dense_flow_backfills_empty_cells(self):
        self.assertIn('grid-auto-flow:dense', PATCH)
        self.assertIn('grid-auto-rows:clamp(', PATCH)

    def test_all_ios_sizes_have_predictable_spans(self):
        expected = {'S': ('1', '1'), 'M': ('2', '1'), 'L': ('2', '2'), 'XL': ('4', '2')}
        for size, (columns, rows) in expected.items():
            selector = f'.panel[data-size="{size}"]'
            section = PATCH.split(selector, 1)[1][:160]
            self.assertIn(f'grid-column:span {columns}', section)
            self.assertIn(f'grid-row:span {rows}', section)

    def test_modes_small_layout_stays_horizontal(self):
        self.assertIn('#w-modes[data-size="S"] #mode-tabs', PATCH)
        self.assertIn('grid-template-columns:repeat(4,minmax(0,1fr))', PATCH)
        self.assertIn('grid-auto-flow:column', PATCH)

    def test_previous_mobile_single_column_override_is_replaced(self):
        mobile = PATCH.split('@media(max-width:900px)', 1)[1]
        self.assertIn('grid-template-columns:repeat(4,minmax(0,1fr))', mobile)

if __name__ == '__main__':
    unittest.main()
