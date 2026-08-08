"""Functional tests for the Argus-specific HomeKit arming adapter."""
from pathlib import Path
import importlib.util
import sys
import types
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "custom_components" / "argus" / "homekit_runtime.py"


def load_runtime():
    spec = importlib.util.spec_from_file_location("argus_homekit_runtime_test", MODULE_PATH)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class FakeCharacteristic:
    def __init__(self):
        self.values = []

    def set_value(self, value):
        self.values.append(value)


class FakeState:
    def __init__(self, state, attributes):
        self.state = state
        self.attributes = attributes


class TestHomeKitTransitionRuntime(unittest.TestCase):
    def test_resolver_requires_argus_marker_and_arming_state(self):
        runtime = load_runtime()
        for target in ("armed_home", "armed_away", "armed_night", "armed_vacation"):
            self.assertEqual(
                runtime.resolve_argus_arming_target(
                    "arming",
                    {"argus_homekit_transition": True, "arming_target": target},
                ),
                target,
            )
        self.assertIsNone(runtime.resolve_argus_arming_target("arming", {"arming_target": "armed_home"}))
        self.assertIsNone(runtime.resolve_argus_arming_target("armed_home", {"argus_homekit_transition": True, "arming_target": "armed_home"}))
        self.assertIsNone(runtime.resolve_argus_arming_target("arming", {"argus_homekit_transition": True, "arming_target": "invalid"}))

    def test_patch_preserves_each_argus_target_only(self):
        runtime = load_runtime()

        class FakeSecuritySystem:
            def __init__(self):
                self.entity_id = "alarm_control_panel.argus"
                self.char_target_state = FakeCharacteristic()

            def async_update_state(self, _new_state):
                self.char_target_state.set_value(99)

        homekit_module = types.ModuleType("homeassistant.components.homekit.type_security_systems")
        homekit_module.SecuritySystem = FakeSecuritySystem
        homekit_module.HK_ALARM_STAY_ARMED = 0
        homekit_module.HK_ALARM_AWAY_ARMED = 1
        homekit_module.HK_ALARM_NIGHT_ARMED = 2

        homekit_package = types.ModuleType("homeassistant.components.homekit")
        homekit_package.type_security_systems = homekit_module
        components_package = types.ModuleType("homeassistant.components")
        components_package.homekit = homekit_package
        homeassistant_package = types.ModuleType("homeassistant")
        homeassistant_package.components = components_package
        core_module = types.ModuleType("homeassistant.core")
        core_module.callback = lambda function: function

        fake_modules = {
            "homeassistant": homeassistant_package,
            "homeassistant.components": components_package,
            "homeassistant.components.homekit": homekit_package,
            "homeassistant.components.homekit.type_security_systems": homekit_module,
            "homeassistant.core": core_module,
        }
        with patch.dict(sys.modules, fake_modules):
            self.assertTrue(runtime._patch_homekit_security_system())
            expected = {
                "armed_home": 0,
                "armed_away": 1,
                "armed_night": 2,
                "armed_vacation": 1,
            }
            for target, homekit_value in expected.items():
                accessory = FakeSecuritySystem()
                accessory.async_update_state(FakeState("arming", {"argus_homekit_transition": True, "arming_target": target}))
                self.assertEqual(accessory.char_target_state.values, [99, homekit_value])

            unrelated = FakeSecuritySystem()
            unrelated.async_update_state(FakeState("arming", {"arming_target": "armed_home"}))
            self.assertEqual(unrelated.char_target_state.values, [99])


if __name__ == "__main__":
    unittest.main()
