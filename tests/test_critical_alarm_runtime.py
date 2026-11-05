"""Exercise Argus alarm transitions with all external outputs isolated."""
from types import SimpleNamespace
import unittest
from unittest.mock import AsyncMock, Mock, patch

from custom_components.argus import alarm_control_panel as alarm


def close_task(coroutine):
    coroutine.close()


def fixture(state):
    return SimpleNamespace(
        hass=SimpleNamespace(data={}, states={}, async_create_task=close_task),
        _config_entry=SimpleNamespace(entry_id="fixture"),
        _alarm_state=state,
        _arm_request=None,
        _cycle_bypassed=set(),
        _zone_pending_sensor=None,
        _zone_disarmed_trigger=False,
        _triggered_mode=None,
        _triggered_by=None,
        _panic_active=False,
        _active_panic_outputs=(),
        _ui_config={"home_name": "Fixture"},
        _code="fixture-only",
        _validate_code=lambda code: code == "1111",
        _require_alarm_actor_permission=AsyncMock(),
        _get_siren_entities=lambda: ("siren.fixture",),
        _get_context_user=AsyncMock(return_value="Fixture"),
        _language=lambda: "es",
        _name="Fixture",
        _cancel_timers=Mock(),
        _async_siren=AsyncMock(),
        _async_notify_configured=AsyncMock(),
        _async_fire_panic_activated=AsyncMock(),
        _evaluate_automations=AsyncMock(),
        _async_finish_trigger=AsyncMock(),
        _async_finish_disarm=AsyncMock(),
        async_write_ha_state=Mock(),
    )


class CriticalAlarmRuntime(unittest.IsolatedAsyncioTestCase):
    def test_waiting_reconciliation_omits_only_the_selected_sensor(self):
        from custom_components.argus.sensor_state_runtime import open_blocking_sensors

        target = alarm.AlarmControlPanelState.ARMED_AWAY
        door, window, other_mode = "binary_sensor.door", "binary_sensor.window", "binary_sensor.other"
        panel = SimpleNamespace(
            hass=SimpleNamespace(states={
                door: SimpleNamespace(state="on"),
                window: SimpleNamespace(state="offline"),
                other_mode: SimpleNamespace(state="on"),
            }),
            _mode_config=lambda key: {"sensors": [door, window]} if key == "away" else {"sensors": [other_mode]},
            _cycle_bypassed={door},
        )
        self.assertEqual(open_blocking_sensors(panel, target), [window])
        panel.hass.states[window].state = "off"
        self.assertEqual(open_blocking_sensors(panel, target), [])
        self.assertEqual(panel._cycle_bypassed, {door})

    async def test_cycle_bypass_rechecks_contact_and_rejects_stale_or_duplicate_actions(self):
        sensor = "binary_sensor.patio"
        target = alarm.AlarmControlPanelState.ARMED_AWAY
        panel = fixture(alarm.AlarmControlPanelState.ARMING)
        panel._arm_generation = 7
        panel._arm_request = {"target": target, "wait_for_sensors": True}
        panel._cycle_reincluded_at = {}
        panel._sensors_for_state = lambda _: [sensor]
        panel._open_blocking_sensors = lambda _: [sensor] if sensor not in panel._cycle_bypassed else []
        panel._requires_immediate_trigger = lambda eid: panel.hass.states[eid].attributes["device_class"] == "smoke"
        def can_omit(eid):
            with patch.object(alarm.er, "async_get", return_value=SimpleNamespace(async_get=lambda _: None)):
                return alarm.ArgusAlarmPanel._can_omit_blocker(panel, eid)

        panel._can_omit_blocker = can_omit
        panel._async_recheck_arm_request = AsyncMock()
        panel._async_persist_stable_state = AsyncMock()

        async def bypass(enable, generation=7):
            await alarm.ArgusAlarmPanel.async_set_cycle_bypass(panel, sensor, enable, generation)

        panel.hass.states[sensor] = SimpleNamespace(state="on", attributes={"device_class": "smoke"})
        with self.assertRaises(alarm.HomeAssistantError):
            await bypass(True)
        panel.hass.states[sensor].attributes["device_class"] = "door"
        await bypass(True)
        self.assertEqual(panel._cycle_bypassed, {sensor})
        with self.assertRaises(alarm.HomeAssistantError):
            await bypass(True)

        panel._arm_request = None
        panel._alarm_state = target
        for state, attrs in [("on", {}), ("unavailable", {}), ("off", {"online": False})]:
            panel.hass.states[sensor] = SimpleNamespace(state=state, attributes=attrs)
            with self.assertRaises(alarm.HomeAssistantError):
                await bypass(False)
        panel.hass.states[sensor] = SimpleNamespace(state="off", attributes={})
        with self.assertRaises(alarm.HomeAssistantError):
            await bypass(False, generation=6)
        self.assertEqual(panel._cycle_bypassed, {sensor})
        await bypass(False)
        self.assertFalse(panel._cycle_bypassed)
        panel._async_persist_stable_state.assert_awaited_once_with("sensor_reincluded")

    async def test_intrusion_stays_latched_after_contact_closes_and_invalid_pin(self):
        panel = fixture(alarm.AlarmControlPanelState.ARMED_AWAY)
        panel._triggered_by = "binary_sensor.patio"
        panel.hass.states[panel._triggered_by] = SimpleNamespace(
            attributes={"friendly_name": "Puerta trasera"},
        )
        with (
            patch.object(alarm, "persistent_notification") as notifications,
            patch.object(alarm, "async_append_audit_log", new_callable=AsyncMock),
            patch.object(alarm, "verify_pin", side_effect=lambda code, _: code == "1111"),
        ):
            await alarm.ArgusAlarmPanel._async_trigger(panel)
            notifications.async_create.assert_called_once()
            self.assertEqual(panel._alarm_state, alarm.AlarmControlPanelState.TRIGGERED)
            alarm.ArgusAlarmPanel._async_sensor_changed(panel, SimpleNamespace(data={
                "entity_id": "binary_sensor.patio",
                "old_state": SimpleNamespace(state="on"),
                "new_state": SimpleNamespace(state="off"),
            }))
            self.assertEqual(panel._alarm_state, alarm.AlarmControlPanelState.TRIGGERED)
            self.assertEqual(panel._triggered_by, "binary_sensor.patio")
            with self.assertRaises(alarm.HomeAssistantError):
                await alarm.ArgusAlarmPanel.async_alarm_disarm(panel, "0000")
            self.assertEqual(panel._alarm_state, alarm.AlarmControlPanelState.TRIGGERED)
            notifications.async_dismiss.assert_not_called()
            await alarm.ArgusAlarmPanel.async_alarm_disarm(panel, "1111")
            self.assertEqual(panel._alarm_state, alarm.AlarmControlPanelState.DISARMED)
            notifications.async_dismiss.assert_called_once_with(panel.hass, "argus_triggered")

    async def test_start_and_stop_sos_preserve_security_state(self):
        for state in (
            alarm.AlarmControlPanelState.DISARMED,
            alarm.AlarmControlPanelState.ARMED_HOME,
            alarm.AlarmControlPanelState.TRIGGERED,
        ):
            with (
                self.subTest(state=state),
                patch.object(alarm, "persistent_notification"),
                patch.object(alarm, "async_append_audit_log", new_callable=AsyncMock),
            ):
                panel = fixture(state)
                await alarm.ArgusAlarmPanel.async_alarm_trigger(panel)
                panel._require_alarm_actor_permission.assert_awaited_once_with("sos")
                self.assertTrue(panel._panic_active)
                self.assertEqual(panel._alarm_state, state)
                await alarm.ArgusAlarmPanel.async_stop_panic(panel)
                self.assertFalse(panel._panic_active)
                self.assertEqual(panel._alarm_state, state)
                expected_outputs = [] if state == alarm.AlarmControlPanelState.TRIGGERED else ["siren.fixture"]
                panel._async_siren.assert_awaited_with(False, expected_outputs)
