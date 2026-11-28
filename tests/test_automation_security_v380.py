"""Security boundaries for correlated sensors and opt-in alarm actions."""

from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase, TestCase
from unittest.mock import AsyncMock, Mock

import homeassistant.core

from homeassistant.exceptions import HomeAssistantError

from custom_components.argus.alarm_control_panel import ArgusAlarmPanel
from custom_components.argus.auth import ArgusAuthError, require_override_pin
from custom_components.argus.push_actions import handle_notification_action, notification_actions
from custom_components.argus.security import PinAttemptLimiter, hash_pin
from custom_components.argus.sensor_state_runtime import (
    RecoveredSensorGate,
    SensorGroupWindow,
    normalize_sensor_groups,
    sensor_group_ready,
)
from custom_components.argus.websocket_api import _redact_ui_data


class SensorWindowTests(TestCase):
    def test_group_threshold_and_window_require_manual_configuration(self):
        members = ["binary_sensor.front", "binary_sensor.back"]
        for incomplete in ({"required": 2}, {"window_seconds": 137}):
            with self.subTest(incomplete=incomplete), self.assertRaises(ValueError):
                normalize_sensor_groups([{"sensors": members, **incomplete}], members)

        for seconds in (137, 263):
            group = {"sensors": members, "required": 2, "window_seconds": seconds}
            with self.subTest(seconds=seconds):
                self.assertEqual(normalize_sensor_groups([group], members), [group])

    def test_absent_or_empty_groups_preserve_individual_sensor_trigger(self):
        entity_id = "binary_sensor.front"
        for config in ({"sensors": [entity_id]}, {"sensors": [entity_id], "sensor_groups": []}):
            panel = SimpleNamespace(
                _alarm_state=SimpleNamespace(value="armed_away"),
                _mode_config=Mock(return_value=config),
            )
            with self.subTest(config=config):
                self.assertTrue(sensor_group_ready(panel, entity_id))
                panel._mode_config.assert_called_once_with("away")

    def test_counts_distinct_members_and_expires_old_events(self):
        members = ("binary_sensor.front", "binary_sensor.back", "binary_sensor.motion")
        group = {"sensors": list(members), "required": 2, "window_seconds": 120}
        self.assertEqual(normalize_sensor_groups([group], members), [group])
        window = SensorGroupWindow()
        self.assertFalse(window.observe(members[0], members, 2, 120, 0))
        self.assertFalse(window.observe(members[0], members, 2, 120, 1))
        self.assertFalse(window.observe(members[1], members, 2, 120, 122))
        self.assertTrue(window.observe(members[2], members, 2, 120, 123))
        with self.assertRaises(ValueError):
            normalize_sensor_groups([group, group], members)
        with self.assertRaises(ValueError):
            normalize_sensor_groups([{**group, "window_seconds": 119}], members)

    def test_unknown_to_open_is_accepted_except_opted_in_initial_open(self):
        gate = RecoveredSensorGate({"binary_sensor.allowed"})
        self.assertTrue(gate.allow("binary_sensor.normal", "unknown", False))
        self.assertTrue(gate.allow("binary_sensor.normal", "open", True))
        self.assertTrue(gate.allow("binary_sensor.allowed", "unknown", False))
        self.assertFalse(gate.allow("binary_sensor.allowed", "open", True))
        self.assertFalse(gate.allow("binary_sensor.allowed", "on", True))
        self.assertTrue(gate.allow("binary_sensor.allowed", "off", False))
        self.assertTrue(gate.allow("binary_sensor.allowed", "on", True))


class OverrideTests(TestCase):
    def test_override_requires_permission_and_rate_limits_invalid_pins(self):
        hashed = hash_pin("840275")
        profile = {"permissions": {}, "override_pin_hash": hashed}
        limiter = PinAttemptLimiter(max_attempts=2)
        with self.assertRaisesRegex(ArgusAuthError, "permission"):
            require_override_pin(profile, "840275", limiter, "actor")
        profile["permissions"]["force_arm"] = True
        for _ in range(2):
            with self.assertRaisesRegex(ArgusAuthError, "Invalid"):
                require_override_pin(profile, "918273", limiter, "actor")
        with self.assertRaisesRegex(ArgusAuthError, "Too many"):
            require_override_pin(profile, "840275", limiter, "actor")
        require_override_pin(profile, "840275", limiter, "another_actor")
        redacted = _redact_ui_data({"users": [profile]})["users"][0]
        self.assertNotIn("override_pin_hash", redacted)
        self.assertTrue(redacted["override_pin_configured"])


class PushActionTests(IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.panel = SimpleNamespace(
            _ui_config={"push_actions_enabled": True},
            _output_revision=1, _code_arm_required=False,
            _arm_request={"wait_for_sensors": True}, entity_id="alarm_control_panel.argus",
            _async_recheck_arm_request=AsyncMock(),
            _require_alarm_actor_permission=AsyncMock(),
            async_force_waiting_arm=AsyncMock(),
            hass=SimpleNamespace(services=SimpleNamespace(async_call=AsyncMock())),
        )

    def event(self, action, user_id="ha-user"):
        data = notification_actions(self.panel, action)
        return SimpleNamespace(
            data={"action": data["actions"][0]["action"]},
            context=SimpleNamespace(user_id=user_id),
        )

    async def test_retry_is_scoped_authorized_and_single_use(self):
        event = self.event("ARGUS_RETRY_ARM")
        await handle_notification_action(self.panel, event)
        await handle_notification_action(self.panel, event)
        self.panel._require_alarm_actor_permission.assert_awaited_once_with("arm", context=event.context)
        self.panel._async_recheck_arm_request.assert_awaited_once()

    async def test_stale_and_unauthenticated_notifications_do_not_disarm(self):
        old = self.event("ARGUS_DISARM")
        self.panel._output_revision += 1
        await handle_notification_action(self.panel, old)
        await handle_notification_action(self.panel, self.event("ARGUS_DISARM", user_id=None))
        self.panel.hass.services.async_call.assert_not_called()
        event = self.event("ARGUS_DISARM")
        await handle_notification_action(self.panel, event)
        self.panel.hass.services.async_call.assert_awaited_once_with(
            "alarm_control_panel", "alarm_disarm",
            {"entity_id": self.panel.entity_id}, blocking=True, context=event.context,
        )

    async def test_force_checks_permission_and_retains_the_arm_pin_policy(self):
        self.panel._require_alarm_actor_permission.side_effect = HomeAssistantError("denied")
        await handle_notification_action(self.panel, self.event("ARGUS_FORCE_ARM"))
        self.panel._require_alarm_actor_permission.side_effect = None
        self.panel._code_arm_required = True
        await handle_notification_action(self.panel, self.event("ARGUS_FORCE_ARM"))
        self.panel.async_force_waiting_arm.assert_not_called()
        self.panel._code_arm_required = False
        await handle_notification_action(self.panel, self.event("ARGUS_FORCE_ARM"))
        self.panel.async_force_waiting_arm.assert_awaited_once()

    async def test_force_never_bypasses_protected_sensors(self):
        panel = SimpleNamespace(
            _arm_request={"wait_for_sensors": True, "target": "armed_away"},
            _open_blocking_sensors=Mock(return_value=["binary_sensor.door", "binary_sensor.smoke"]),
            _can_omit_blocker=lambda sensor: sensor != "binary_sensor.smoke",
            _cycle_bypassed=set(),
        )
        with self.assertRaisesRegex(HomeAssistantError, "protected"):
            await ArgusAlarmPanel.async_force_waiting_arm(panel)
        self.assertEqual(panel._cycle_bypassed, set())
