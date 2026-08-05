"""Regression tests for real Home Assistant light capabilities."""
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]
JS = ROOT / "custom_components/argus/www/argus-light-capability-fixes.js"
BACKEND = ROOT / "custom_components/argus/output_profiles.py"


class LightCapabilityContractTests(unittest.TestCase):
    def test_non_rgb_lights_never_expose_colour(self):
        script = f"""
          import {{ isColorLight }} from {JS.as_uri()!r};
          const panel = {{_hass:{{states:{{
            'light.white':{{attributes:{{supported_color_modes:['color_temp']}}}},
            'light.onoff':{{attributes:{{supported_color_modes:['onoff']}}}},
            'light.none':{{attributes:{{}}}}
          }}}}}};
          if (isColorLight(panel, 'light.white')) process.exit(1);
          if (isColorLight(panel, 'light.onoff')) process.exit(2);
          if (isColorLight(panel, 'light.none')) process.exit(3);
        """
        subprocess.run(["node", "--input-type=module", "-e", script], check=True)

    def test_real_colour_modes_expose_colour(self):
        script = f"""
          import {{ isColorLight }} from {JS.as_uri()!r};
          for (const mode of ['hs','xy','rgb','rgbw','rgbww']) {{
            const panel = {{_hass:{{states:{{'light.test':{{attributes:{{supported_color_modes:[mode]}}}}}}}}}};
            if (!isColorLight(panel, 'light.test')) process.exit(1);
          }}
        """
        subprocess.run(["node", "--input-type=module", "-e", script], check=True)

    def test_runtime_ignores_colour_on_white_only_lights(self):
        backend = BACKEND.read_text()
        self.assertIn('supported_modes.intersection({"hs", "xy", "rgb", "rgbw", "rgbww"})', backend)
        self.assertIn('if rgb and supported_modes.intersection', backend)

    def test_mode_ui_keeps_flash_but_hides_false_colour(self):
        frontend = JS.read_text()
        self.assertIn("if (label) label.hidden = true", frontend)
        self.assertIn("— Destello", frontend)
        self.assertIn("data-light-siren-flash", (ROOT / "custom_components/argus/www/argus-panel.js").read_text())


if __name__ == "__main__":
    unittest.main()
