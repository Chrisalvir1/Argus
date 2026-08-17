"""Regression checks for the deterministic React dashboard UX."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
LAYOUT = ROOT / "src" / "features" / "dashboard" / "layout.ts"
DASHBOARD = ROOT / "src" / "features" / "dashboard" / "ArgusDashboard.tsx"
MOTION = ROOT / "src" / "app" / "motion.css"
APP = ROOT / "src" / "app" / "ArgusApp.tsx"


class ReactUxContractTests(unittest.TestCase):
    def test_widgets_support_compact_corner_resize_and_settle_feedback(self) -> None:
        layout = LAYOUT.read_text(encoding="utf-8")
        dashboard = DASHBOARD.read_text(encoding="utf-8")
        self.assertIn("XS:{w:2,h:2}", layout)
        self.assertIn("minW:1,minH:1", layout)
        self.assertIn("support-argus", layout)
        self.assertIn("resizeHandles={['se']}", dashboard)
        self.assertIn("finishResize(value.i)", dashboard)
        self.assertIn("argus-widget--settled", dashboard)

    def test_static_glass_has_no_backdrop_filter_or_continuous_motion(self) -> None:
        style = MOTION.read_text(encoding="utf-8")
        self.assertIn("backdrop-filter:none!important", style)
        self.assertIn("argus-settle", style)
        self.assertIn("prefers-reduced-motion", style)
        self.assertIn("dashboard-instances,#entries{animation:none!important", style)

    def test_support_widget_stays_compact_and_uses_github_link(self) -> None:
        source = APP.read_text(encoding="utf-8")
        self.assertIn("title:'widget.support'", source)
        self.assertIn("size:'XS'", source)
        self.assertIn("https://github.com/Chrisalvir1/Argus", source)


if __name__ == "__main__":
    unittest.main()
