import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "argus" / "www"


class TestVisualContainerFixes(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.patch = (WWW / "argus-visual-container-fixes.js").read_text(encoding="utf-8")
        cls.bootstrap = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")

    def test_visual_patch_is_loaded_last(self):
        self.assertIn("argus-visual-container-fixes.js?v=2.0.13", self.bootstrap)
        self.assertGreater(
            self.bootstrap.rfind("applyVisualContainerFixes"),
            self.bootstrap.rfind("applyPerformanceProfile"),
        )

    def test_outer_container_corners_are_clipped(self):
        self.assertIn("--argus-container-radius:28px", self.patch)
        self.assertIn("clip-path:inset(0 round var(--argus-container-radius))", self.patch)
        self.assertIn("overflow:hidden!important", self.patch)

    def test_titles_follow_home_assistant_theme_contrast(self):
        self.assertIn("--primary-text-color", self.patch)
        self.assertIn("-webkit-text-fill-color", self.patch)
        self.assertIn("@media (prefers-color-scheme:light)", self.patch)

    def test_active_instances_stay_visible_while_editing(self):
        self.assertIn("function preserveActiveInstances", self.patch)
        self.assertIn("instances.removeAttribute('hidden')", self.patch)
        self.assertIn("instances.style.setProperty('display', 'block', 'important')", self.patch)
        self.assertIn("instances.draggable = false", self.patch)


if __name__ == "__main__":
    unittest.main()
