"""Authoritative reconciliation for Argus pending and armed sensor states.

State events are the fast path and a two-second watchdog is the recovery path.
The same pure decision function controls both, preventing an event race from
leaving Home Assistant or HomeKit permanently in ARMING.
"""
from __future__ import annotations

import asyncio
import logging
from datetime import timedelta

from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.helpers.event import async_track_time_interval

from .arming_state_machine import decide_arming_wait, is_active_sensor_state

_LOGGER = logging.getLogger(__name__)
_INTERVAL = timedelta(seconds=2)
_ARMED_STATES = {
    AlarmControlPanelState.ARMED_HOME,
    AlarmControlPanelState.ARMED_AWAY,
    AlarmControlPanelState.ARMED_NIGHT,
    AlarmControlPanelState.ARMED_VACATION,
}


def is_sensor_active(hass, entity_id: str) -> bool:
    """Return True only when the current entity state is active/open."""
    state = hass.states.get(entity_id)
    return is_active_sensor_state(entity_id, state.state if state else None)


def open_blocking_sensors(panel, target) -> list[str]:
    """Return the canonical, de-duplicated blocker list for a mode."""
    mode_key = target.value.replace("armed_", "")
    config = panel._mode_config(mode_key) if hasattr(panel, "_mode_config") else {}
    sensors = config.get("sensors") or panel._sensors_for_state(target)
    bypassed = set(
        config.get("bypassed_sensors")
        or config.get("bypassedSensors")
        or []
    )
    return [
        entity_id
        for entity_id in dict.fromkeys(sensors)
        if entity_id not in bypassed and is_sensor_active(panel.hass, entity_id)
    ]


def install_sensor_state_runtime() -> None:
    """Install the single event/watchdog reconciliation owner once."""
    from .alarm_control_panel import ArgusAlarmPanel

    if getattr(ArgusAlarmPanel, "_argus_sensor_state_runtime", False):
        return

    original_added = ArgusAlarmPanel.async_added_to_hass
    original_remove = ArgusAlarmPanel.async_will_remove_from_hass
    original_sensor_changed = ArgusAlarmPanel._async_sensor_changed
    original_complete = ArgusAlarmPanel._async_complete_arming
    original_arm = ArgusAlarmPanel._async_arm
    original_cancel = ArgusAlarmPanel._async_cancel_arming_request

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

    async def announce_wait_change(self, target, previous_open, current_open) -> None:
        if list(previous_open) == list(current_open):
            return
        try:
            from .arming_voice import async_announce_arming_wait_update

            await async_announce_arming_wait_update(
                self.hass,
                self._config_entry,
                alarm_entity_id=self.entity_id,
                target=target.value,
                previous_open=previous_open,
                current_open=current_open,
            )
        except Exception:  # Voice can fail, but security state must continue.
            _LOGGER.exception("Argus arming voice update failed")

    async def recheck_with_completion(self) -> None:
        """Publish blockers and atomically commit when the final one closes."""
        lock = getattr(self, "_argus_recheck_lock", None)
        if lock is None:
            lock = self._argus_recheck_lock = asyncio.Lock()

        async with lock:
            request = getattr(self, "_arm_request", None)
            if not request or request.get("completing"):
                return

            previous_open = list(request.get("blocking_sensors") or [])
            current_open = (
                open_blocking_sensors(self, request["target"])
                if request.get("wait_for_sensors")
                else []
            )
            request["blocking_sensors"] = current_open
            self._argus_last_blocking_sensors = list(current_open)

            decision = decide_arming_wait(
                previous_open,
                current_open,
                sensor_wait_started=bool(request.get("sensor_wait_started")),
                delay_elapsed=bool(request.get("delay_elapsed")),
            )
            self.async_write_ha_state()
            await announce_wait_change(
                self, request["target"], previous_open, current_open
            )

            if not decision.complete:
                _LOGGER.debug(
                    "Argus arming remains pending: reason=%s blockers=%s states=%s",
                    decision.reason,
                    current_open,
                    {
                        entity_id: getattr(
                            self.hass.states.get(entity_id), "state", None
                        )
                        for entity_id in current_open
                    },
                )
                return
            if request is not getattr(self, "_arm_request", None):
                return

            # A live request is authoritative. A stale counter used to return
            # forever here; repair it instead so the watchdog can finish.
            if request.get("generation") != self._arm_generation:
                _LOGGER.warning(
                    "Argus repaired stale arming generation %s -> %s",
                    request.get("generation"),
                    self._arm_generation,
                )
                request["generation"] = self._arm_generation

            request["completing"] = True
            target = request["target"]
            if self._arming_listener:
                try:
                    self._arming_listener()
                except Exception:  # noqa: BLE001
                    pass
                self._arming_listener = None
            self._arm_request = None
            self._arming_target = None

            _LOGGER.info(
                "Argus arming wait completed: target=%s reason=%s origin=%s",
                target,
                decision.reason,
                request.get("origin"),
            )
            try:
                await self._async_complete_arming(target)
            except Exception:  # Preserve a request only if no state was committed.
                if self._alarm_state == target:
                    _LOGGER.exception(
                        "Argus armed to %s but a post-commit action failed", target
                    )
                    return
                request["completing"] = False
                request["generation"] = self._arm_generation
                self._arm_request = request
                self._arming_target = target
                self._alarm_state = AlarmControlPanelState.ARMING
                self.async_write_ha_state()
                raise

    async def recover_orphaned_arming(self) -> bool:
        """Recover ARMING when another wrapper lost the request object."""
        if (
            self._alarm_state != AlarmControlPanelState.ARMING
            or getattr(self, "_arm_request", None)
        ):
            return False
        target = (
            getattr(self, "_arming_target", None)
            or getattr(self, "_argus_last_arming_target", None)
        )
        if target not in _ARMED_STATES:
            _LOGGER.error(
                "Argus found orphaned ARMING without a recoverable target"
            )
            return False

        current_open = open_blocking_sensors(self, target)
        previous_open = list(
            getattr(self, "_argus_last_blocking_sensors", []) or []
        )
        if current_open:
            _LOGGER.warning(
                "Argus rebuilt orphaned arming request for %s; blockers=%s",
                target,
                current_open,
            )
            self._arm_request = {
                "generation": self._arm_generation,
                "target": target,
                "origin": "watchdog_recovery",
                "blocking_sensors": previous_open,
                "wait_for_sensors": True,
                "sensor_wait_started": True,
                "delay_elapsed": True,
            }
            self._arming_target = target
            await recheck_with_completion(self)
            return True

        await announce_wait_change(self, target, previous_open, [])
        _LOGGER.warning(
            "Argus recovered orphaned ARMING and completed %s", target
        )
        await self._async_complete_arming(target)
        return True

    async def arm_with_stuck_recovery(
        self, target, code=None, *, origin: str = "service"
    ):
        """Refresh or complete an existing request instead of resetting it."""
        self._argus_last_arming_target = target
        request = getattr(self, "_arm_request", None)
        if (
            request
            and self._alarm_state == AlarmControlPanelState.ARMING
            and request.get("target") == target
        ):
            if request.get("wait_for_sensors") and request.get("blocking_sensors"):
                request["sensor_wait_started"] = True
            current_open = open_blocking_sensors(self, target)
            if not current_open and request.get("sensor_wait_started"):
                request["delay_elapsed"] = True
            await recheck_with_completion(self)
            return

        result = await original_arm(self, target, code, origin=origin)
        request = getattr(self, "_arm_request", None)
        if request:
            started_with_blockers = bool(
                request.get("wait_for_sensors")
                and request.get("blocking_sensors")
            )
            request["sensor_wait_started"] = started_with_blockers
            self._argus_last_blocking_sensors = list(
                request.get("blocking_sensors") or []
            )
            schedule_reconcile(self, "arm_request")
        return result

    async def cancel_with_reconciliation(
        self, reason: str, *, disarm: bool = False
    ) -> None:
        try:
            await original_cancel(self, reason, disarm=disarm)
        finally:
            if not getattr(self, "_arm_request", None):
                self._argus_last_arming_target = None
                self._argus_last_blocking_sensors = []

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
                after = (
                    list(after_request.get("blocking_sensors") or [])
                    if after_request
                    else []
                )
                if before != after or after_request is None:
                    _LOGGER.info(
                        "Argus reconciliation (%s): blockers %s -> %s; request=%s",
                        source,
                        before,
                        after,
                        "active" if after_request else "completed",
                    )
                return

            if await recover_orphaned_arming(self):
                return

            if self._alarm_state not in _ARMED_STATES:
                self._argus_last_active_sensors = set()
                return

            active = active_for_state(self, self._alarm_state)
            previous = set(
                getattr(self, "_argus_last_active_sensors", set())
            )
            self._argus_last_active_sensors = active
            newly_active = active - previous
            if not newly_active:
                return
            entity_id = sorted(newly_active)[0]
            _LOGGER.warning(
                "Argus watchdog detected newly active sensor %s while %s",
                entity_id,
                self._alarm_state,
            )
            self._triggered_by = entity_id
            self._triggered_mode = self._alarm_state.value.replace("armed_", "")
            await self._async_trigger()

    def schedule_reconcile(self, source: str) -> None:
        """Schedule from either HA's event loop or its watchdog worker.

        ``async_track_time_interval`` may invoke its callback from a worker
        thread.  ``async_create_task`` is loop-only and HA 2026 rejects that
        call, which stopped the watchdog before it could observe a closed
        sensor.  ``create_task`` is Home Assistant's thread-safe entry point.
        """
        self.hass.create_task(reconcile(self, source))

    async def added_with_reconciliation(self) -> None:
        await original_added(self)
        self._argus_last_active_sensors = active_for_state(
            self, self._alarm_state
        )
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
        self._argus_last_arming_target = None
        self._argus_last_blocking_sensors = []

    ArgusAlarmPanel._open_blocking_sensors = open_blocking_override
    ArgusAlarmPanel._async_recheck_arm_request = recheck_with_completion
    ArgusAlarmPanel._async_arm = arm_with_stuck_recovery
    ArgusAlarmPanel._async_cancel_arming_request = cancel_with_reconciliation
    ArgusAlarmPanel.async_added_to_hass = added_with_reconciliation
    ArgusAlarmPanel.async_will_remove_from_hass = remove_with_reconciliation
    ArgusAlarmPanel._async_sensor_changed = sensor_changed_with_reconciliation
    ArgusAlarmPanel._async_complete_arming = complete_with_baseline
    ArgusAlarmPanel._argus_sensor_state_runtime = True
    ArgusAlarmPanel._argus_is_sensor_active = staticmethod(is_sensor_active)
