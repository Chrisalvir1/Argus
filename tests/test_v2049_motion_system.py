from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"
MOTION = (WWW / "argus-motion-system.js").read_text(encoding="utf-8")
BOOTSTRAP = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")


class TestV2049MotionSystem(unittest.TestCase):
    def test_module_is_loaded_after_responsive_patch(self):
        self.assertIn("export function applyMotionSystem(ArgusPanel)", MOTION)
        self.assertIn("argus-motion-system.js?v=2.0.49", BOOTSTRAP)
        self.assertGreater(
            BOOTSTRAP.rfind("applyMotionSystem(ArgusPanel)"),
            BOOTSTRAP.rfind("applyV2049ResponsiveWidgets(ArgusPanel)"),
        )

    def test_observer_is_child_list_only_and_cleaned(self):
        self.assertIn("new MutationObserver", MOTION)
        self.assertIn("{childList:true,subtree:true,attributes:false}", MOTION)
        self.assertIn("observer?.disconnect()", MOTION)
        self.assertIn("cancelAnimationFrame", MOTION)
        self.assertIn("clearTimeout", MOTION)

    def test_motion_respects_accessibility_and_existing_hooks(self):
        self.assertIn("prefers-reduced-motion:reduce", MOTION)
        self.assertIn("argus-perf-essential", MOTION)
        self.assertIn("_handlePanelBgFile", MOTION)
        self.assertIn("_handleHubBgFile", MOTION)
        self.assertIn("transitionend", MOTION)
        self.assertIn("disconnectedCallback", MOTION)


if __name__ == "__main__":
    unittest.main()
