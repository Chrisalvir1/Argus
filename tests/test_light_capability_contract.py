"""Regression tests for HA-authoritative light capabilities and real flash execution."""
from pathlib import Path
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[1]
JS = ROOT / "custom_components/argus/www/argus-light-capability-fixes.js"
BACKEND = ROOT / "custom_components/argus/output_profiles.py"


class LightCapabilityContractTests(unittest.TestCase):
    def test_non_rgb_lights_never_expose_colour(self):
        script = f"""
          import {{ isColorLight, readLightCapabilities }} from {JS.as_uri()!r};
          const panel = {{_hass:{{states:{{
            'light.dimmer':{{attributes:{{supported_color_modes:['brightness']}}}},
            'light.white':{{attributes:{{supported_color_modes:['color_temp']}}}},
            'light.onoff':{{attributes:{{supported_color_modes:['onoff']}}}},
            'light.none':{{attributes:{{}}}}
          }}}}}};
          for (const id of ['light.dimmer','light.white','light.onoff','light.none']) {{
            if (isColorLight(panel, id)) process.exit(1);
          }}
          if (readLightCapabilities(panel, 'light.dimmer').modes[0] !== 'brightness') process.exit(2);
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

    def test_runtime_uses_ha_capabilities_and_ignores_false_colour(self):
        backend = BACKEND.read_text()
        self.assertIn('_COLOR_MODES = {"hs", "xy", "rgb", "rgbw", "rgbww"}', backend)
        self.assertIn("supported_modes.intersection(_COLOR_MODES)", backend)
        self.assertIn("if rgb and supported_modes.intersection", backend)

    def test_physical_flash_test_calls_real_ha_services(self):
        backend = BACKEND.read_text()
        self.assertIn('"argus/test_light_output"', backend)
        self.assertIn('ws_argus_test_light_output', backend)
        self.assertIn('async_call("light", "turn_on"', backend)
        self.assertIn('async_call("light", "turn_off"', backend)
        self.assertIn('for _ in range(2)', backend)
        self.assertIn('"method": method', backend)

    def test_ui_removes_false_colour_and_exposes_physical_test(self):
        frontend = JS.read_text()
        self.assertIn("if (!capability.color && label) label.remove()", frontend)
        self.assertIn("Probar destello físicamente", frontend)
        self.assertIn("HA: ${escapeHtml(modeLabel)}", frontend)
        self.assertIn("[hidden]{display:none!important}", frontend)

    def test_normal_sensor_rows_are_pills_but_fullscreen_is_excluded(self):
        frontend = JS.read_text()
        self.assertIn(".entry:not(.ios-fullscreen)", frontend)
        self.assertIn("border-radius:999px!important", frontend)
        self.assertIn("max-width:248px!important", frontend)

    def test_access_and_automation_containers_are_bounded(self):
        frontend = JS.read_text()
        self.assertIn("#widget-grid>#w-access", frontend)
        self.assertIn("height:clamp(270px,32vh,340px)!important", frontend)
        self.assertIn("overflow-y:auto!important", frontend)


if __name__ == "__main__":
    unittest.main()
