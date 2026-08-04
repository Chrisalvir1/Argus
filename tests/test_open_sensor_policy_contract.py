"""Regression contracts for open-sensor arming policies.

These source-level tests complement HA integration tests in environments where
Home Assistant is not installed.  They protect the routing and compatibility
guarantees that must hold for every arming source.
"""
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
PANEL = (ROOT / "custom_components/argus/alarm_control_panel.py").read_text(encoding="utf-8")
UI = (ROOT / "custom_components/argus/www/argus-panel.js").read_text(encoding="utf-8")
PRESENCE = (ROOT / "custom_components/argus/presence.py").read_text(encoding="utf-8")


class TestOpenSensorPolicyContract(unittest.TestCase):
    def test_all_policies_and_legacy_mapping_exist(self):
        self.assertIn('{"allow", "block", "pending"}', PANEL)
        self.assertIn('"block" if (config.get("require_closed")', PANEL)

    def test_bypass_is_excluded_from_blocking_and_pending(self):
        self.assertIn('config.get("bypassed_sensors") or config.get("bypassedSensors")', PANEL)
        self.assertIn('if sensor not in bypassed', PANEL)

    def test_pending_has_generation_and_sensor_recheck(self):
        for token in ('_arm_generation', '_arm_request', '_async_recheck_arm_request', 'delay_elapsed'):
            self.assertIn(token, PANEL)
        self.assertIn('if entity_id and self._arm_request', PANEL)

    def test_schedule_mqtt_and_presence_use_canonical_flow(self):
        self.assertIn('_async_arm(scheduled_state, origin="schedule")', PANEL)
        self.assertIn('origin="mqtt"', PANEL)
        self.assertIn('await panel._async_arm(target, origin="presence")', PRESENCE)

    def test_ui_offers_policy_and_does_not_preblock_pending(self):
        for token in ('open_sensors_policy', 'policy_allow', 'policy_block', 'policy_pending'):
            self.assertIn(token, UI)
        self.assertIn("if (configuredPolicy === 'pending')", UI)

