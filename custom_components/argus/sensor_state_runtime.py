"""Authoritative sensor reconciliation for pending and armed Argus states.

State-change listeners remain the fast path. A small local watchdog is the
safety net for integrations (Aqara/Zigbee hubs included) that coalesce, delay,
or miss an event. It never changes configuration and only acts on sensors
selected for the current mode.

v2.0.50:
- One active-state detector shared by arming wait and armed monitoring.
- When every blocking sensor closes during arming wait, arming completes.
- Re-arm while stuck in ARMING can force-complete if sensors are closed.
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


def is_sensor_active(hass, entity_id: str) -> bool:
    """Return True when a monitored sensor is currently blocking/open."""
    state = hass.states.get(entity_id)
    if state is None:
        return False
    value = str(state.state).strip().lower()
    if value in {STATE_UNKNOWN, STATE_UNAVAILABLE, "none", ""}:
        return False
    domain = entity_id.split(".", 1)[0]
    if domain == "binary_sensor":
        # HA binary sensors: on = open/active for door/window/motion.
        return value == "on"
    if domain == "lock":
        return value not in {"locked", "locking"}
    if domain == "cover":
        return value not in {"closed", "closing"}
    return value in _ACTIVE


def open_blocking_sensors(panel, target) -> list[str]:
    """Canonical open-sensor list for arming decisions (Aqara-safe)."""
    mode_key = target.value.replace("armed_", "")
    config = panel._mode_config(mode_key) if hasattr(panel, "_mode_config") else {}
    sensors = config.get("sensors") or panel._sensors_for_state(target)
    bypassed = config.get("bypassed_sensors") or config.get("bypassedSensors") or []
    open_ids: list[str] = []
    for entity_id in dict.fromkeys(sensors):
        if entity_id in bypassed:
            continue
        if is_sensor_active(panel.hass, entity_id):
            open_ids.append(entity_id)
    return open_ids


def install_sensor_state_runtime() -> None:
    """Install after safety, HomeKit keepalive, and trigger voice wrappers."""
    from .alarm_control_panel import ArgusAlarmPanel

    if getattr(ArgusAlarmPanel, "_argus_sensor_state_runtime", False):
        return

    original_added = ArgusAlarmPanel.async_added_to_hass
    original_remove = ArgusAlarmPanel.async_will_remove_from_hass
    original_sensor_changed = ArgusAlarmPanel._async_sensor_changed
    original_complete = ArgusAlarmPanel._async_complete_arming
    original_recheck = ArgusAlarmPanel._async_recheck_arm_request
    original_arm = ArgusAlarmPanel._async_arm
    original_open = ArgusAlarmPanel._open_blocking_sensors

    def active_for_state(self, state) -> set[str]:
        if state not in _ARMED_STATES:
            return set()
        return {
            entity_id
            for entity_id in dict.fromkeys(self._sensors_for_state(state))
            if is_sensor_active(self.hass, entity_id)
        }

    def open_blocking_override(self, target):
        return open_blocking_sensors(self, target)

    async def recheck_with_completion(self) -> None:
        """Recheck blockers; complete arming the moment every sensor is closed."""
        request = self._arm_request
        if not request:
            return
        previous_open = list(request.get("blocking_sensors") or [])
        open_sensors = (
            open_blocking_sensors(self, request["target"])
            if request.get("wait_for_sensors")
            else []
        )
        request["blocking_sensors"] = open_sensors
        # Always publish updated blocker list so HomeKit/UI stop showing stale waits.
        self.async_write_ha_state()

        if request.get("wait_for_sensors") and previous_open != open_sensors:
            try:
                from .arming_voice import async_announce_arming_wait_update

                await async_announce_arming_wait_update(
                    self.hass,
                    self._config_entry,
                    alarm_entity_id=self.entity_id,
                    target=request["target"].value,
                    previous_open=previous_open,
                    current_open=open_sensors,
                )
            except Exception:  # noqa: BLE001
                _LOGGER.exception("Argus arming voice update failed")

        # Still waiting on sensors or countdown.
        if open_sensors:
            _LOGGER.debug(
                "Argus arming wait still blocked by %s (states=%s)",
                open_sensors,
                {
                    eid: getattr(self.hass.states.get(eid), "state", None)
                    for eid in open_sensors
                },
            )
            return
        if not request.get("delay_elapsed", True):
            return
        if request is not self._arm_request or request.get("generation") != self._arm_generation:
            return

        target = request["target"]
        _LOGGER.info(
            "Argus arming wait cleared — completing arm to %s (origin=%s)",
            target,
            request.get("origin"),
        )
        self._arm_request = None
        self._arming_target = None
        if self._arming_listener:
            try:
                self._arming_listener()
            except Exception:  # noqa: BLE001
                pass
            self._arming_listener = None
        await self._async_complete_arming(target)

    async def arm_with_stuck_recovery(self, target, code=None, *, origin: str = "service"):
        """If already waiting and sensors are closed, complete instead of cancelling."""
        request = getattr(self, "_arm_request", None)
        if (
            request
            and self._alarm_state == AlarmControlPanelState.ARMING
            and request.get("target") == target
        ):
            open_now = open_blocking_sensors(self, target) if request.get("wait_for_sensors") else []
            request["blocking_sensors"] = open_now
            if not open_now:
                # Force delay elapsed so a second HomeKit/HA arm press completes.
                request["delay_elapsed"] = True
                _LOGGER.info(
                    "Argus force-complete arming to %s after re-arm with sensors closed",
                    target,
                )
                self._arm_request = None
                self._arming_target = None
                if self._arming_listener:
                    try:
                        self._arming_listener()
                    except Exception:  # noqa: BLE001
                        pass
                    self._arming_listener = None
                await self._async_complete_arming(target)
                return
            # Sensors still open: refresh UI and keep waiting (do not disarm).
            self.async_write_ha_state()
            _LOGGER.warning(
                "Argus still waiting to arm %s; open sensors: %s",
                target,
                open_now,
            )
            return
        return await original_arm(self, target, code, origin=origin)

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
                await recheck_with_completion(self)
                after_request = getattr(self, "_arm_request", None)
                after = list(after_request.get("blocking_sensors") or []) if after_request else []
                if before != after or after_request is None:
                    _LOGGER.info(
                        "Argus sensor reconciliation (%s): blockers %s -> %s; request=%s",
                        source,
                        before,
                        after,
                        "active" if after_request else "completed",
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

            _LOGGER.warning(
                "Argus sensor watchdog detected newly active monitored sensor %s while %s",
                entity_id,
                self._alarm_state,
            )
            self._triggered_by = entity_id
            self._triggered_mode = self._alarm_state.value.replace("armed_", "")
            await self._async_trigger()

    def schedule_reconcile(self, source: str) -> None:
        self.hass.async_create_task(reconcile(self, source))

    async def added_with_reconciliation(self) -> None:
        await original_added(self)
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
        schedule_reconcile(self, "state_change")
        return result

    async def complete_with_baseline(self, target) -> None:
        await original_complete(self, target)
        self._argus_last_active_sensors = active_for_state(self, target)

    ArgusAlarmPanel._open_blocking_sensors = open_blocking_override
    ArgusAlarmPanel._async_recheck_arm_request = recheck_with_completion
    ArgusAlarmPanel._async_arm = arm_with_stuck_recovery
    ArgusAlarmPanel.async_added_to_hass = added_with_reconciliation
    ArgusAlarmPanel.async_will_remove_from_hass = remove_with_reconciliation
    ArgusAlarmPanel._async_sensor_changed = sensor_changed_with_reconciliation
    ArgusAlarmPanel._async_complete_arming = complete_with_baseline
    ArgusAlarmPanel._argus_sensor_state_runtime = True
    # Keep reference so tests can assert the override is installed.
    ArgusAlarmPanel._argus_is_sensor_active = staticmethod(is_sensor_active)
