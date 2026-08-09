from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


class TestDashboardCompatibilityContract(unittest.TestCase):
    def test_legacy_editor_is_not_loaded(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")
        self.assertNotIn("argus-v2040-dashboard-fixes.js", bootstrap)
        self.assertNotIn("applyV2040DashboardFixes", bootstrap)
        self.assertIn("argus-dashboard-scroll-fixes.js?v=2.0.50", bootstrap)
        self.assertIn("applyReactDashboardLayout(ArgusPanel)", bootstrap)

    def test_legacy_scroll_behavior_is_preserved_without_writes(self):
        source = (WWW / "argus-dashboard-scroll-fixes.js").read_text(encoding="utf-8")
        for token in (
            "#w-modes", "#w-access", "#mode-view", "#access-view",
            "overflow-y:auto", "-webkit-overflow-scrolling:touch",
        ):
            self.assertIn(token, source)
        for forbidden in (
            "localStorage", "argus/save_ui", "widget_layout",
            "_saveWidgetLayout", "_v2040SaveChain",
        ):
            self.assertNotIn(forbidden, source)


if __name__ == "__main__":
    unittest.main()
