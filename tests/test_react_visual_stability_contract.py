"""React-only fixed-background and visual-stability regression contracts."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app" / "ArgusApp.tsx"
MOTION = ROOT / "src" / "app" / "motion.css"
API = ROOT / "custom_components" / "argus" / "websocket_api.py"


class TestReactVisualStabilityContract(unittest.TestCase):
    def test_react_uses_fixed_background_without_weather_or_wallpaper_controls(self):
        source = APP.read_text(encoding="utf-8")
        self.assertIn("t('field.background')", source)
        self.assertNotIn("background_images:", source)
        self.assertNotIn("background_mode:mode", source)

    def test_motion_and_instance_animation_are_disabled(self):
        source = MOTION.read_text(encoding="utf-8")
        self.assertIn("background-image:none!important", source)
        self.assertIn(".dashboard-instances,#entries{animation:none!important", source)
        self.assertIn("prefers-reduced-motion:reduce", source)

    def test_layout_storage_is_stable_across_dashboard_data_updates(self):
        source = APP.read_text(encoding="utf-8")
        self.assertIn("useRef<UiData>", source)
        self.assertIn("new RemoteLayoutStorage(entryId,()=>uiRef.current,scoped)", source)
        self.assertNotIn("setDashboard(null);const value=await scoped", source)

    def test_backend_does_not_accept_wallpaper_fields_in_save_ui(self):
        source = API.read_text(encoding="utf-8")
        schema = source.split("_SAVE_UI_SCHEMA", 1)[1].split("@websocket_api.websocket_command", 1)[0]
        self.assertNotIn('vol.Optional("background_mode")', schema)
        self.assertNotIn('vol.Optional("background_images")', schema)
        self.assertIn("fixed default background", source)


if __name__ == "__main__":
    unittest.main()
