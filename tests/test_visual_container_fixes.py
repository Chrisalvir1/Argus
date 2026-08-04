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
        self.assertIn("argus-visual-container-fixes.js?v=2.0.27", self.bootstrap)
        self.assertGreater(self.bootstrap.rfind("applyVisualContainerFixes"), self.bootstrap.rfind("applyPerformanceProfile"))

    def test_titles_follow_home_assistant_theme_contrast(self):
        self.assertIn("--primary-text-color", self.patch)
        self.assertIn("-webkit-text-fill-color", self.patch)
        self.assertIn("@media (prefers-color-scheme:light)", self.patch)

    def test_active_instances_stay_visible_without_dom_reordering(self):
        self.assertIn("function keepActiveInstancesVisible", self.patch)
        self.assertIn("instances.removeAttribute('hidden')", self.patch)
        self.assertIn("instances.style.setProperty('display', 'block', 'important')", self.patch)
        self.assertIn("instances.draggable = false", self.patch)
        self.assertNotIn("grid.prepend(instances)", self.patch)
        self.assertNotIn("_argusActiveInstancesNode", self.patch)

    def test_saved_widget_order_restores_once_after_load(self):
        self.assertIn("function restoreWidgetLayoutOnce", self.patch)
        self.assertIn("_argusWidgetLayoutRestored", self.patch)
        load_section = self.patch.split("proto._load = async function()", 1)[1].split("proto._renderEntries", 1)[0]
        self.assertIn("restoreWidgetLayoutOnce(this)", load_section)
        render_section = self.patch.split("proto._renderEntries = function()", 1)[1].split("proto._toggleWidgetEditing", 1)[0]
        self.assertNotIn("restoreWidgetLayoutOnce(this)", render_section)

    def test_landscape_fullscreen_keeps_modes_and_sensors_accessible(self):
        self.assertIn("(orientation:landscape) and (max-height:820px)", self.patch)
        self.assertIn("grid-template-areas:'hud hud hud' 'modes icon sensors'", self.patch)
        self.assertIn(".ios-fullscreen .liquid-stack", self.patch)
        self.assertIn(".ios-fullscreen .console-sensors", self.patch)
        self.assertIn("overflow-y:auto!important", self.patch)
        self.assertIn("height:100dvh!important", self.patch)

    def test_shield_has_no_rectangular_gradient_layer(self):
        self.assertIn(".entry-icon::before", self.patch)
        self.assertIn("content:none!important", self.patch)
        self.assertIn("background-image:none!important", self.patch)
        self.assertIn("filter:drop-shadow", self.patch)


if __name__ == "__main__":
    unittest.main()
