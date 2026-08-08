from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"
MOTION = (WWW / "argus-motion-system.js").read_text(encoding="utf-8")
RESPONSIVE = (WWW / "argus-v2049-responsive-widgets.js").read_text(encoding="utf-8")
BOOTSTRAP = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")


class TestV2049MotionSystem(unittest.TestCase):
    def test_module_is_loaded_after_responsive_patch(self):
        self.assertIn("export function applyMotionSystem(ArgusPanel)", MOTION)
        self.assertIn("argus-motion-system.js?v=2.0.49", BOOTSTRAP)
        self.assertGreater(BOOTSTRAP.rfind("applyMotionSystem(ArgusPanel)"), BOOTSTRAP.rfind("applyV2049ResponsiveWidgets(ArgusPanel)"))

    def test_observer_is_child_list_only_and_cleaned(self):
        self.assertIn("new MutationObserver", MOTION)
        self.assertIn("{childList:true,subtree:true,attributes:false}", MOTION)
        self.assertIn("observer?.disconnect()", MOTION)
        self.assertIn("cancelAnimationFrame", MOTION)
        self.assertIn("clearTimeout", MOTION)

    def test_profile_flow_has_no_synthetic_full_screen_welcome(self):
        self.assertNotIn("argus-profile-transition", MOTION)
        self.assertNotIn("Bienvenido,", MOTION)
        self.assertNotIn("argus-motion-dashboard-enter 360ms", MOTION)
        self.assertIn("clearProfileState(state)", MOTION)

    def test_frequently_rebuilt_dashboard_never_animates(self):
        self.assertIn("#widget-grid,.dashboard-instances", MOTION)
        self.assertIn("animation:none!important", MOTION)
        self.assertIn("opacity:1!important", MOTION)
        self.assertIn("animateDashboard:()=>{}", MOTION)

    def test_motion_respects_accessibility(self):
        self.assertIn("prefers-reduced-motion:reduce", MOTION)
        self.assertIn("argus-perf-essential", MOTION)
        self.assertIn("disconnectedCallback", MOTION)

    def test_responsive_rules_use_precise_layouts(self):
        self.assertIn("#w-access", RESPONSIVE)
        self.assertIn("grid-template-columns:repeat(3,minmax(0,1fr))", RESPONSIVE)
        self.assertIn("#w-github", RESPONSIVE)
        self.assertIn("place-content:center", RESPONSIVE)
        self.assertIn("row-gap:18px", RESPONSIVE)
        self.assertIn("touch-action:pan-y", RESPONSIVE)
        self.assertNotIn("#argus-react-dashboard-root #w-access", RESPONSIVE)


if __name__ == "__main__":
    unittest.main()
