from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"
MOTION_PATH = WWW / "argus-motion-system.js"
BOOTSTRAP_PATH = WWW / "argus-bootstrap.js"
MOTION = MOTION_PATH.read_text(encoding="utf-8")
BOOTSTRAP = BOOTSTRAP_PATH.read_text(encoding="utf-8")


class TestV2049MotionSystem(unittest.TestCase):
    def test_module_and_export(self):
        self.assertTrue(MOTION_PATH.is_file())
        self.assertIn("export function applyMotionSystem(ArgusPanel)", MOTION)

    def test_bootstrap_order_and_contract(self):
        self.assertIn("from './argus-motion-system.js?v=2.0.49'", BOOTSTRAP)
        self.assertGreater(
            BOOTSTRAP.rfind("applyMotionSystem(ArgusPanel)"),
            BOOTSTRAP.rfind("applyV2049ResponsiveWidgets(ArgusPanel)"),
        )
        self.assertIn("customElements.get('argus-panel-v2018')", BOOTSTRAP)
        self.assertIn("react-dashboard-react.js?v=react-layout-3", BOOTSTRAP)

    def test_no_destructive_or_global_dom_patterns(self):
        self.assertNotIn('document.querySelectorAll("*")', MOTION)
        self.assertNotIn("document.querySelectorAll('*')", MOTION)
        self.assertNotIn("document.documentElement", MOTION)
        self.assertNotIn("cloneNode(", MOTION)
        self.assertNotIn("replaceWith(", MOTION)
        self.assertNotRegex(MOTION, re.compile(r"\.innerHTML\s*="))

    def test_shadow_styles_and_instance_state(self):
        self.assertIn("const root=panel.shadowRoot", MOTION)
        self.assertIn("root.appendChild(style)", MOTION)
        self.assertIn("argus-motion-system-v2049", MOTION)
        self.assertIn("__argusMotionV2049", MOTION)
        self.assertIn("enumerable:false", MOTION)
        self.assertNotIn("document.head.appendChild", MOTION)

    def test_observer_is_scoped_batched_and_cleaned(self):
        self.assertIn("state.observer=new MutationObserver", MOTION)
        self.assertIn("state.observer.observe(state.panel.shadowRoot", MOTION)
        self.assertIn("childList:true", MOTION)
        self.assertIn("subtree:true", MOTION)
        self.assertIn("attributes:false", MOTION)
        self.assertIn("requestAnimationFrame", MOTION)
        self.assertIn("state.observer?.disconnect()", MOTION)
        self.assertIn("cancelAnimationFrame", MOTION)
        self.assertIn("clearTimeout", MOTION)
        self.assertIn("proto.disconnectedCallback", MOTION)

    def test_profile_pin_dashboard_and_recovery(self):
        for value in (
            "#bootstrap-overlay", ".user-selector-grid", ".pin-prompt",
            "#btn-submit-login-pin", "argus-motion-overlay-exit",
            "argus-motion-dashboard-enter", "transitionend",
            "resetProfile(state)", "8000",
        ):
            self.assertIn(value, MOTION)

    def test_accessibility_and_performance_profiles(self):
        self.assertIn("prefers-reduced-motion:reduce", MOTION)
        self.assertIn("argus-perf-light", MOTION)
        self.assertIn("argus-perf-essential", MOTION)
        self.assertIn("panel._argusPerfProfile", MOTION)
        self.assertIn("panel.dataset?.argusPerf", MOTION)

    def test_interaction_and_stagger_contracts(self):
        interactive = MOTION[
            MOTION.index("const INTERACTIVE_SELECTOR"):
            MOTION.index("const BACKGROUND_CONTROL_SELECTOR")
        ]
        stagger = MOTION[
            MOTION.index("const STAGGER_SELECTOR"):
            MOTION.index("const INTERACTIVE_SELECTOR")
        ]
        self.assertNotRegex(interactive, re.compile(r"['\"]button['\"]"))
        self.assertIn("'.entry'", stagger)
        self.assertNotIn("'.entry-content'", stagger)
        self.assertIn("'pointerdown'", MOTION)
        self.assertIn("'pointerup'", MOTION)
        self.assertIn("'pointercancel'", MOTION)
        self.assertIn("removeProperty('will-change')", MOTION)

    def test_backgrounds_use_safe_real_hooks(self):
        self.assertNotIn("filter:blur", MOTION)
        self.assertNotIn("backdrop-filter", MOTION)
        self.assertIn("'_handlePanelBgFile'", MOTION)
        self.assertIn("'_handleHubBgFile'", MOTION)
        self.assertIn("#bg-mode-select-standalone", MOTION)
        self.assertIn("#hub-bg-mode-select", MOTION)


if __name__ == "__main__":
    unittest.main()
