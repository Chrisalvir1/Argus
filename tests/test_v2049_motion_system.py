from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"
MOTION = (WWW / "argus-motion-system.js").read_text(encoding="utf-8")
BOOTSTRAP = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")


class TestV2049MotionSystem(unittest.TestCase):
    def test_module_and_bootstrap_order(self):
        self.assertIn("export function applyMotionSystem(ArgusPanel)", MOTION)
        self.assertIn("./argus-motion-system.js?v=2.0.49", BOOTSTRAP)
        self.assertGreater(
            BOOTSTRAP.rfind("applyMotionSystem(ArgusPanel)"),
            BOOTSTRAP.rfind("applyV2049ResponsiveWidgets(ArgusPanel)"),
        )
        self.assertIn("react-dashboard-react.js?v=react-layout-3", BOOTSTRAP)

    def test_non_destructive_shadow_dom_contract(self):
        for forbidden in (
            'document.querySelectorAll("*")', "document.querySelectorAll('*')",
            "document.documentElement", "cloneNode(", "replaceWith(",
            ".innerHTML=", ".innerHTML =",
        ):
            self.assertNotIn(forbidden, MOTION)
        self.assertIn("panel.shadowRoot", MOTION)
        self.assertIn("appendChild(style)", MOTION)
        self.assertIn("enumerable:false", MOTION)

    def test_observer_and_cleanup_contract(self):
        for required in (
            "new MutationObserver", "childList:true", "subtree:true",
            "attributes:false", "requestAnimationFrame", ".disconnect()",
            "cancelAnimationFrame", "clearTimeout", "disconnectedCallback",
        ):
            self.assertIn(required, MOTION)

    def test_profile_and_accessibility_contract(self):
        for required in (
            "#bootstrap-overlay", ".user-selector-grid", ".pin-prompt",
            "#btn-submit-login-pin", "transitionend", "8000",
            "prefers-reduced-motion:reduce", "argus-perf-light",
            "argus-perf-essential",
        ):
            self.assertIn(required, MOTION)

    def test_interaction_and_background_safety(self):
        for required in (
            "pointerdown", "pointerup", "pointercancel",
            "removeProperty('will-change')", "_handlePanelBgFile",
            "_handleHubBgFile", "#bg-mode-select-standalone",
            "#hub-bg-mode-select",
        ):
            self.assertIn(required, MOTION)
        self.assertNotIn("filter:blur", MOTION)
        self.assertNotIn("backdrop-filter", MOTION)
        self.assertNotIn(".entry-content", MOTION)


if __name__ == "__main__":
    unittest.main()
