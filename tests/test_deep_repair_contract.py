"""Static regression contract for the deep UI/output repair."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


class DeepRepairContractTests(unittest.TestCase):
    def test_deep_repair_is_loaded_last(self):
        bootstrap = (ROOT / "custom_components/argus/www/argus-bootstrap.js").read_text()
        self.assertIn("argus-deep-repair.js?v=2.0.33", bootstrap)
        self.assertLess(bootstrap.index("applyBatteryUiFixes(ArgusPanel)"), bootstrap.index("applyDeepRepair(ArgusPanel)"))

    def test_profile_background_writer_is_authoritative(self):
        frontend = (ROOT / "custom_components/argus/www/argus-deep-repair.js").read_text()
        self.assertIn("argus/save_profile_theme", frontend)
        self.assertIn('"default"===r?"none":"image"', frontend)
        self.assertIn("_panelBgFile=\"\"", frontend)
        self.assertNotIn("payload.users", frontend)

    def test_sos_profile_and_safe_runtime_are_connected(self):
        frontend = (ROOT / "custom_components/argus/www/argus-deep-repair.js").read_text()
        backend = (ROOT / "custom_components/argus/output_profiles.py").read_text()
        init = (ROOT / "custom_components/argus/__init__.py").read_text()
        self.assertIn("argus/save_panic_output_profile", frontend)
        self.assertIn('"panic_output_settings"', backend)
        self.assertIn("_brightness_pulse", backend)
        self.assertNotIn("def _software_flash", backend)
        self.assertIn("_restore_light_state", backend)
        self.assertIn("rgb_color", backend)
        self.assertIn("install_output_profile_runtime", init)

    def test_sensor_rows_are_compact(self):
        frontend = (ROOT / "custom_components/argus/www/argus-deep-repair.js").read_text()
        self.assertIn("max-width:292px!important", frontend)
        self.assertIn("padding:8px 10px!important", frontend)
        self.assertIn("gap:7px!important", frontend)


if __name__ == "__main__":
    unittest.main()
