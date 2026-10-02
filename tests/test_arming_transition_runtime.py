"""Regression tests for exporter-neutral refreshes during pending arming."""
from __future__ import annotations

import asyncio
import importlib.util
from pathlib import Path
import sys
import types
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


def _load_runtime(panel_type, scheduled_calls):
    package_name = "argus_transition_test"
    package = types.ModuleType(package_name)
    package.__path__ = [str(COMPONENT)]
    panel_module = types.ModuleType(f"{package_name}.alarm_control_panel")
    panel_module.ArgusAlarmPanel = panel_type
    alarm_component = types.ModuleType("homeassistant.components.alarm_control_panel")
    alarm_component.AlarmControlPanelState = types.SimpleNamespace(ARMING="arming")
    event_module = types.ModuleType("homeassistant.helpers.event")

    def schedule(_hass, delay, callback):
        scheduled_calls.append((delay, callback))
        return lambda: None

    event_module.async_call_later = schedule
    modules = {
        package_name: package,
        f"{package_name}.alarm_control_panel": panel_module,
        "homeassistant": types.ModuleType("homeassistant"),
        "homeassistant.components": types.ModuleType("homeassistant.components"),
        "homeassistant.components.alarm_control_panel": alarm_component,
        "homeassistant.helpers": types.ModuleType("homeassistant.helpers"),
        "homeassistant.helpers.event": event_module,
    }
    spec = importlib.util.spec_from_file_location(
        f"{package_name}.arming_transition_runtime",
        COMPONENT / "arming_transition_runtime.py",
    )
    module = importlib.util.module_from_spec(spec)
    with patch.dict(sys.modules, modules):
        assert spec.loader is not None
        spec.loader.exec_module(module)
        module.install_arming_transition_runtime()
    return module


class TestArmingTransitionRuntime(unittest.TestCase):
    def test_pending_arm_refresh_is_generic_and_does_not_complete_request(self):
        scheduled = []

        class Panel:
            _async_arm = None
            _async_cancel_arming_request = None
            _async_complete_arming = None

            def __init__(self):
                self._arm_request = None
                self._alarm_state = "disarmed"
                self._argus_homekit_keepalive_revision = 0
                self.hass = object()
                self.refreshes = 0

            async def arm(self, target, code=None, *, origin="service"):
                self._arm_request = {"target": target}
                self._alarm_state = "arming"
                return origin

            async def cancel(self, reason, *, disarm=False):
                self._arm_request = None
                self._alarm_state = "disarmed"

            async def complete(self, target):
                self._arm_request = None
                self._alarm_state = target

            def async_write_ha_state(self):
                self.refreshes += 1

            def attributes(self):
                return {"arming_target": "armed_home"} if self._arm_request else {}

        Panel._async_arm = Panel.arm
        Panel._async_cancel_arming_request = Panel.cancel
        Panel._async_complete_arming = Panel.complete
        Panel.extra_state_attributes = property(Panel.attributes)
        _load_runtime(Panel, scheduled)

        panel = Panel()
        result = asyncio.run(panel._async_arm("armed_home", origin="service"))
        self.assertEqual(result, "service")
        self.assertEqual(panel._alarm_state, "arming")
        self.assertEqual(len(scheduled), 1)

        delay, pulse = scheduled.pop()
        self.assertEqual(delay, 15)
        pulse(None)

        self.assertEqual(panel._alarm_state, "arming")
        self.assertEqual(panel._arm_request, {"target": "armed_home"})
        self.assertEqual(panel.refreshes, 1)
        attributes = panel.extra_state_attributes
        self.assertEqual(attributes["argus_transition_revision"], 1)
        self.assertEqual(attributes["argus_homekit_keepalive"], 1)
        self.assertEqual(scheduled[0][0], 15)


if __name__ == "__main__":
    unittest.main()
