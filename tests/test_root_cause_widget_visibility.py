from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"
GRID = (WWW / "argus-grid-polish.js").read_text(encoding="utf-8")
CONTENT = (WWW / "argus-complete-content-fixes.js").read_text(encoding="utf-8")
BOOTSTRAP = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")
VISUAL = (WWW / "argus-visual-container-fixes.js").read_text(encoding="utf-8")


class TestRootCauseWidgetVisibility(unittest.TestCase):
    def test_active_instances_use_explicit_natural_first_row(self):
        self.assertIn("grid-template-rows:auto!important", GRID)
        self.assertIn("#w-instances.dashboard-instances", GRID)
        self.assertIn("grid-row:1!important", GRID)
        self.assertIn("min-height:max-content!important", GRID)

    def test_outer_widgets_do_not_compete_with_inner_scroll(self):
        self.assertIn(".panel:not(.dashboard-instances)", GRID)
        self.assertIn("overflow:hidden!important", GRID)
        self.assertIn("#w-activity #activity-log", GRID)
        self.assertIn("#w-automations #auto-view>div", GRID)
        self.assertIn("overflow-y:auto!important", GRID)

    def test_compact_size_never_discards_history_or_automations(self):
        self.assertIn("renderCompleteContent(this, 'w-activity'", CONTENT)
        self.assertIn("renderCompleteContent(this, 'w-automations'", CONTENT)
        self.assertIn("widget.setAttribute('data-size', 'M')", CONTENT)
        self.assertIn("widget.setAttribute('data-size', size)", CONTENT)

    def test_complete_content_patch_loads_last(self):
        self.assertIn("argus-complete-content-fixes.js?v=2.0.40", BOOTSTRAP)
        self.assertGreater(BOOTSTRAP.rfind("applyCompleteContentFixes"), BOOTSTRAP.rfind("applyVisualContainerFixes"))

    def test_render_cycle_never_reorders_grid(self):
        self.assertNotIn("grid.prepend(instances)", VISUAL)
        render_section = VISUAL.split("proto._renderEntries = function()", 1)[1].split("proto._toggleWidgetEditing", 1)[0]
        self.assertNotIn("restoreWidgetLayoutOnce(this)", render_section)


if __name__ == "__main__":
    unittest.main()
