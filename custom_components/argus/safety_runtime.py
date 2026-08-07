"""Safety-critical runtime repairs for arming, sensors, HomeKit, and storage."""
from __future__ import annotations

import copy
import logging

from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.const import STATE_UNAVAILABLE, STATE_UNKNOWN
from homeassistant.helpers import device_registry as dr, entity_registry as er

from .arming_voice import async_announce_arming_cancelled
from .dashboard_storage import async_save_dashboard_patch

_LOGGER = logging.getLogger(__name__)
_INSTALLED = False
_ACTIVE = {
    "on", "open", "opening", "unlocked", "active", "motion", "detected",
    "wet", "problem", "unsafe", "recording",
}


def _sensor_blocks(hass, entity_id):
    state = hass.states.get(entity_id)
    if state is None or state.state in {
        STATE_UNKNOWN, STATE_UNAVAILABLE, "none", "None", "",
    }:
        return True
    value = str(state.state).lower()
    domain = entity_id.split(".", 1)[0]
    if domain == "binary_sensor":
        return value == "on"
    if domain == "lock":
        return value != "locked"
    if domain == "cover":
        return value not in {"closed", "closing"}
    return value in _ACTIVE


def _display_title(hass, entity_id, current):
    entry = er.async_get(hass).async_get(entity_id)
    device = (
        dr.async_get(hass).async_get(entry.device_id)
        if entry and entry.device_id else None
    )
    title = (device.name_by_user or device.name) if device else None
    if not title and entry:
        title = entry.name
    title = str(title or current or entity_id).strip()
    words = title.split()
    if len(words) > 1 and words[0].casefold() == words[1].casefold():
        title = " ".join(words[1:])
    return title


def install_safety_runtime():
    """Install the v2.0.47 state-machine and persistence repairs once.

    Home Assistant's HomeKit bridge maps ARMING to current=OFF and
    target=AWAY. Consequently ARMING can never preserve a requested HOME or
    NIGHT target. While an Argus request is waiting, publish the requested
    ARMED_* target to HomeKit but gate sensor triggering behind _arm_request.
    Argus still exposes the real progress and blockers through attributes and
    its two binary sensors. Only _async_complete_arming commits the transition.
    """
    global _INSTALLED
    if _INSTALLED:
        return

    from .alarm_control_panel import ArgusAlarmPanel
    from . import websocket_api

    original_policy = ArgusAlarmPanel._open_sensor_policy
    original_disarm = ArgusAlarmPanel.async_alarm_disarm
    original_arm = ArgusAlarmPanel._async_arm
    original_sensor_changed = ArgusAlarmPanel._async_sensor_changed
    original_entities = websocket_api._serialize_available_entities
    original_save_ui_data = websocket_api.async_save_ui_data

    def safe_policy(self, mode_key):
        config = self._mode_config(mode_key)
        explicit = (
            config.get("open_sensors_policy")
            or config.get("openSensorsPolicy")
        )
        if explicit in {"allow", "pending", "block"}:
            return explicit
        if (
            config.get("require_closed") is False
            or config.get("requireClosed") is False
        ):
            return "allow"
        sensors = config.get("sensors") or self._sensors_for_state(
            AlarmControlPanelState(f"armed_{mode_key}")
        )
        return "pending" if sensors else original_policy(self, mode_key)

    def safe_open(self, target):
        config = self._mode_config(target.value.replace("armed_", ""))
        sensors = config.get("sensors") or self._sensors_for_state(target)
        bypassed = set(
            config.get("bypassed_sensors")
            or config.get("bypassedSensors")
            or []
        )
        return list(dict.fromkeys(
            sensor for sensor in sensors
            if sensor not in bypassed and _sensor_blocks(self.hass, sensor)
        ))

    async def reliable_arm(self, target, code=None, *, origin="service"):
        # A new HomeKit target replaces an unfinished request deterministically.
        pending = getattr(self, "_arm_request", None)
        if pending:
            if pending.get("target") == target:
                return
            await self._async_cancel_arming_request(
                "replaced_by_new_arm", disarm=True
            )

        result = await original_arm(self, target, code, origin=origin)
        request = getattr(self, "_arm_request", None)
        if request:
            # Publish the exact target. HomeKit otherwise maps ARMING to Away
            # and loses Home/Night. Sensor callbacks are gated below until the
            # request is genuinely completed.
            request["published_target_state"] = target.value
            self._alarm_state = target
            self.async_write_ha_state()
            await self._async_mqtt_publish()
        return result

    def waiting_safe_sensor_changed(self, event):
        request = getattr(self, "_arm_request", None)
        if not request:
            return original_sensor_changed(self, event)

        # During a waiting/countdown request the externally published ARMED_*
        # state is only a HomeKit target. Never trigger the alarm yet.
        self.hass.async_create_task(self._async_recheck_arm_request())
        entity_id = event.data.get("entity_id")
        new_state = event.data.get("new_state")
        if entity_id and new_state and str(new_state.state).lower() in _ACTIVE:
            self.hass.bus.async_fire("argus_sensor_opened", {
                "entity_id": entity_id,
                "state": new_state.state,
                "alarm_entity_id": self.entity_id,
                "entry_id": self._config_entry.entry_id,
                "arming_wait": True,
                "arming_target": getattr(request.get("target"), "value", None),
            })
        # Do not run Argus sensor_opened automations while the request is
        # pending: a configured trigger_alarm action would bypass this gate.
        return None

    async def safe_disarm(self, code=None):
        pending = getattr(self, "_arm_request", None)
        if pending or self._alarm_state == AlarmControlPanelState.ARMING:
            target = (
                pending.get("target") if pending
                else getattr(self, "_arming_target", None)
            )
            try:
                if target is not None:
                    await async_announce_arming_cancelled(
                        self.hass,
                        self._config_entry,
                        alarm_entity_id=self.entity_id,
                        target=getattr(target, "value", str(target)),
                        source=await self._get_context_user(),
                    )
            except Exception:
                _LOGGER.exception("Argus cancellation announcement failed")
            await self._async_cancel_arming_request(
                "cancelled_from_off", disarm=True
            )
            return
        return await original_disarm(self, code=code)

    def titled_entities(hass):
        rows = original_entities(hass)
        for row in rows:
            row["name"] = _display_title(
                hass, row["entity_id"], row.get("name")
            )
        return rows

    async def stable_save_ui_data(hass, updates, entry_id=None):
        """Route dashboard patches through an atomic recursive merge."""
        safe_updates = copy.deepcopy(updates or {})
        if "dashboard" not in safe_updates:
            return await original_save_ui_data(hass, safe_updates, entry_id)
        dashboard_patch = safe_updates.pop("dashboard")
        if safe_updates:
            await original_save_ui_data(hass, safe_updates, entry_id)
        return await async_save_dashboard_patch(
            hass, dashboard_patch, entry_id=entry_id
        )

    ArgusAlarmPanel._open_sensor_policy = safe_policy
    ArgusAlarmPanel._open_blocking_sensors = safe_open
    ArgusAlarmPanel._async_arm = reliable_arm
    ArgusAlarmPanel._async_sensor_changed = waiting_safe_sensor_changed
    ArgusAlarmPanel.async_alarm_disarm = safe_disarm
    websocket_api._serialize_available_entities = titled_entities
    websocket_api.async_save_ui_data = stable_save_ui_data
    _INSTALLED = True
