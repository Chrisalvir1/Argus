from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


class TestV2048ResponsiveWidgetsContract(unittest.TestCase):
    def test_bootstrap_loads_responsive_repairs_last(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")
        self.assertIn("argus-v2048-responsive-widgets.js?v=2.0.48", bootstrap)
        self.assertIn("applyV2048ResponsiveWidgets(ArgusPanel)", bootstrap)
        self.assertIn("react-layout-4", bootstrap)

    def test_access_control_has_real_mouse_and_touch_scroll(self):
        source = (WWW / "argus-v2048-responsive-widgets.js").read_text(encoding="utf-8")
        for token in (
            "#w-access", "overflow-y:auto", "-webkit-overflow-scrolling:touch",
            "touch-action:pan-y", "[role=\"tabpanel\"]", "[role=\"dialog\"]",
            "MutationObserver",
        ):
            self.assertIn(token, source)

    def test_backup_and_support_center_at_every_widget_size(self):
        source = (WWW / "argus-v2048-responsive-widgets.js").read_text(encoding="utf-8")
        for token in (
            "#w-backup", "#w-github", "justify-content:center",
            "align-items:center", "align-content:center", "flex-wrap:wrap",
            "max-width:100%",
        ):
            self.assertIn(token, source)


if __name__ == "__main__":
    unittest.main()
