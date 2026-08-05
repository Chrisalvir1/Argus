"""Regression tests for HA capability truth, safe pulsing and colour restoration."""
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
          for (const id of ['light.dimmer','light.white','light.onoff','light.none']) {{ if (isColorLight(panel,id)) process.exit(1); }}
          if (!readLightCapabilities(panel,'light.dimmer').safeFlash) process.exit(2);
          if (readLightCapabilities(panel,'light.onoff').safeFlash) process.exit(3);
          if (readLightCapabilities(panel,'light.dimmer').flashMethod !== 'brightness_pulse') process.exit(4);
          if (readLightCapabilities(panel,'light.onoff').flashMethod !== 'steady_safe') process.exit(5);
        """
        subprocess.run(["node", "--input-type=module", "-e", script], check=True)

    def test_real_colour_modes_expose_colour(self):
        script = f"""
          import {{ isColorLight }} from {JS.as_uri()!r};
          for (const mode of ['hs','xy','rgb','rgbw','rgbww']) {{
            const panel = {{_hass:{{states:{{'light.test':{{attributes:{{supported_color_modes:[mode]}}}}}}}}}};
            if (!isColorLight(panel,'light.test')) process.exit(1);
          }}
        """
        subprocess.run(["node", "--input-type=module", "-e", script], check=True)

    def test_backend_has_no_repeated_on_off_software_flash(self):
        backend = BACKEND.read_text()
        self.assertNotIn("def _software_flash", backend)
        pulse = backend.split("async def _brightness_pulse",1)[1].split("@websocket_api.websocket_command",1)[0]
        self.assertIn('async_call("light", "turn_on", high', pulse)
        self.assertIn('async_call("light", "turn_on", low', pulse)
        self.assertNotIn('"turn_off"', pulse)
        self.assertIn('return data, "steady_safe", 0.0', backend)

    def test_plug_like_onoff_lights_cannot_flash(self):
        frontend = JS.read_text()
        self.assertIn("nativeEffect || nativeFlash || brightness", frontend)
        self.assertIn("Luz fija segura", frontend)
        self.assertIn("nunca hará ciclos repetidos", frontend)
        self.assertIn("capability.safeFlash&&Boolean(flashInput.checked)", frontend)

    def test_test_endpoint_uses_safe_methods_and_restores_state(self):
        backend = BACKEND.read_text()
        self.assertIn('"argus/test_light_output"', backend)
        self.assertIn('method == "brightness_pulse"', backend)
        self.assertIn("_capture_light_state", backend)
        self.assertIn("_restore_light_state", backend)
        test_section = backend.split("async def ws_argus_test_light_output",1)[1].split("async def _async_siren",1)[0]
        self.assertNotIn('async_call("light", "turn_off"', test_section)

    def test_runtime_restores_normal_colour_and_power_state(self):
        backend = BACKEND.read_text()
        self.assertIn('service_data["rgb_color"] = [255, 255, 255]', backend)
        self.assertIn('service_data["color_temp_kelvin"]', backend)
        self.assertIn('service_data["hs_color"]', backend)
        self.assertIn('service_data["xy_color"]', backend)
        self.assertIn('snapshots.setdefault(entity_id, _capture_light_state', backend)
        self.assertIn('await _restore_light_state(self.hass, entity_id', backend)

    def test_false_rgb_is_removed_before_storage(self):
        backend = BACKEND.read_text()
        self.assertIn('settings.get(entity_id, {}).pop("rgb_color", None)', backend)
        self.assertIn('modes.intersection(_COLOR_MODES)', backend)

    def test_ui_reports_safe_flash_method(self):
        frontend = JS.read_text()
        self.assertIn("pulso de brillo sin apagar", frontend)
        self.assertIn("flash nativo", frontend)
        self.assertIn("efecto nativo", frontend)
        self.assertIn("destello bloqueado por seguridad", frontend)

    def test_normal_sensor_rows_and_bounded_widgets_remain(self):
        frontend = JS.read_text()
        self.assertIn(".entry:not(.ios-fullscreen)", frontend)
        self.assertIn("border-radius:999px!important", frontend)
        self.assertIn("#widget-grid>#w-access", frontend)
        self.assertIn("height:clamp(270px,32vh,340px)!important", frontend)


if __name__ == "__main__":
    unittest.main()
