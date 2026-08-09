from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


class TestBrowserBundleContract(unittest.TestCase):
    @unittest.skip("Legacy React bundle replaced by Vite")
    def test_react_bundle_has_no_node_process_environment(self):
        bundle = (WWW / "react-dist" / "argus-dashboard-react.js").read_text(encoding="utf-8")
        self.assertNotIn("process.env", bundle)

    @unittest.skip("Legacy architecture replaced by TypeScript")
    def test_native_panel_loads_before_react_editor(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")
        self.assertIn("import './argus-panel.js?v=2.0.50'", bootstrap)
        self.assertIn(
            "import('./react-dist/argus-dashboard-react.js?v=react-layout-3')",
            bootstrap,
        )
        self.assertIn(".catch(", bootstrap)
        self.assertLess(
            bootstrap.index("customElements.get('argus-panel-v2018')"),
            bootstrap.index("import('./react-dist/"),
        )
        self.assertIn("applyV2050AlarmVisuals(ArgusPanel)", bootstrap)
        self.assertIn("applyV2050WidgetLayouts(ArgusPanel)", bootstrap)


if __name__ == "__main__":
    unittest.main()
