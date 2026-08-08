"""Authoritative sensor reconciliation for pending and armed Argus states.

State-change listeners remain the fast path. A small local watchdog is the
safety net for integrations that coalesce, delay, or miss an event. It never
changes configuration and only acts on sensors selected for the current mode.
"""
from __future__ import annotations

import asyncio
import logging
from datetime import timedelta

from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.const import STATE_UNAVAILABLE, STATE_UNKNOWN
from homeassistant.helpers.event import async_track_time_interval

_LOGGER = logging.getLogger(__name__)
_INTERVAL = timedelta(seconds=2)
_ARMED_STATES = {
    AlarmControlPanelState.ARMED_HOME,
    AlarmControlPanelState.ARMED_AWAY,
    AlarmControlPanelState.ARMED_NIGHT,
    AlarmControlPanelState.ARMED_VACATION,
}
_ACTIVE = {
    "on", "open", "opening", "unlocked", "active", "motion", "detected",
    "wet", "problem", "unsafe", "recording",
}


def _is_active(hass, entity_id: str) -> bool:
    state = hass.states.get(entity_id)
    if state is None:
        return False
    value = str(state.state).strip().lower()
    if value in {STATE_UNKNOWN, STATE_UNAVAILABLE, "none", ""}:
        return False
    domain = entity_id.split(".", 1)[0]
    if domain == "binary_sensor":
        return value == "on"
    if domain == "lock":
        return value != "locked"
    if domain == "cover":
        return value not in {"closed", "closing"}
    return value in _ACTIVE


def install_sensor_state_runtime() -> None:
    """Install after safety, HomeKit keepalive, and trigger voice wrappers."""
    from .alarm_control_panel import ArgusAlarmPanel

    if getattr(ArgusAlarmPanel, "_argus_sensor_state_runtime", False):
        return

    original_added = ArgusAlarmPanel.async_added_to_hass
    original_remove = ArgusAlarmPanel.async_will_remove_from_hass
    original_sensor_changed = ArgusAlarmPanel._async_sensor_changed
    original_complete = ArgusAlarmPanel._async_complete_arming

    def active_for_state(self, state) -> set[str]:
        if state not in _ARMED_STATES:
            return set()
        return {
            entity_id
            for entity_id in dict.fromkeys(self._sensors_for_state(state))
            if _is_active(self.hass, entity_id)
        }

    async def reconcile(self, source: str) -> None:
        lock = getattr(self, "_argus_sensor_reconcile_lock", None)
        if lock is None:
            lock = self._argus_sensor_reconcile_lock = asyncio.Lock()
        if lock.locked():
            return
        async with lock:
            request = getattr(self, "_arm_request", None)
            if request:
                before = list(request.get("blocking_sensors") or [])
                await self._async_recheck_arm_request()
                after_request = getattr(self, "_arm_request", None)
                after = list(after_request.get("blocking_sensors") or []) if after_request else []
                if before != after:
                    _LOGGER.info(
                        "Argus sensor reconciliation (%s): blockers %s -> %s",
                        source, before, after,
                    )
                return

            if self._alarm_state not in _ARMED_STATES:
                self._argus_last_active_sensors = set()
                return

            active = active_for_state(self, self._alarm_state)
            previous = set(getattr(self, "_argus_last_active_sensors", set()))
            self._argus_last_active_sensors = active
            newly_active = active - previous
            if not newly_active:
                return
            entity_id = sorted(newly_active)[0]

            # The normal listener should already have triggered. If it did not,
            # this is the safety fallback and follows the exact same trigger path.
            _LOGGER.warning(
                "Argus sensor watchdog detected newly active monitored sensor %s while %s",
                entity_id, self._alarm_state,
            )
            self._triggered_by = entity_id
            self._triggered_mode = self._alarm_state.value.replace("armed_", "")
            await self._async_trigger()

    def schedule_reconcile(self, source: str) -> None:
        self.hass.async_create_task(reconcile(self, source))

    async def added_with_reconciliation(self) -> None:
        await original_added(self)
        # Restored armed installations establish a baseline instead of treating
        # a sensor that was already open before startup as a fresh intrusion.
        self._argus_last_active_sensors = active_for_state(self, self._alarm_state)
        existing = getattr(self, "_argus_sensor_watchdog_unsub", None)
        if existing:
            existing()
        self._argus_sensor_watchdog_unsub = async_track_time_interval(
            self.hass,
            lambda _now: schedule_reconcile(self, "watchdog"),
            _INTERVAL,
        )
        schedule_reconcile(self, "startup")

    async def remove_with_reconciliation(self) -> None:
        unsubscribe = getattr(self, "_argus_sensor_watchdog_unsub", None)
        if unsubscribe:
            unsubscribe()
        self._argus_sensor_watchdog_unsub = None
        await original_remove(self)

    def sensor_changed_with_reconciliation(self, event):
        result = original_sensor_changed(self, event)
        # Run after the regular callback so the normal event path remains first.
        schedule_reconcile(self, "state_change")
        return result

    async def complete_with_baseline(self, target) -> None:
        await original_complete(self, target)
        # Completion requires all blocking sensors closed. Establishing this
        # baseline makes the next real opening detectable by the watchdog.
        self._argus_last_active_sensors = active_for_state(self, target)

    ArgusAlarmPanel.async_added_to_hass = added_with_reconciliation
    ArgusAlarmPanel.async_will_remove_from_hass = remove_with_reconciliation
    ArgusAlarmPanel._async_sensor_changed = sensor_changed_with_reconciliation
    ArgusAlarmPanel._async_complete_arming = complete_with_baseline
    ArgusAlarmPanel._argus_sensor_state_runtime = True
