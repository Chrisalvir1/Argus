"""Safety-critical runtime repairs for arming, sensors, and HomeKit Off."""
from __future__ import annotations
import logging
from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.const import STATE_UNAVAILABLE, STATE_UNKNOWN
from .arming_voice import async_announce_arming_cancelled
_LOGGER = logging.getLogger(__name__)
_INSTALLED = False
_ACTIVE = {"on", "open", "opening", "unlocked", "active", "motion", "detected", "wet", "problem", "unsafe", "recording"}

def _sensor_blocks(hass, entity_id: str) -> bool:
    state = hass.states.get(entity_id)
    if state is None or state.state in {STATE_UNKNOWN, STATE_UNAVAILABLE, "none", "None", ""}:
        return True
    value = str(state.state).lower()
    domain = entity_id.split('.', 1)[0]
    if domain == "binary_sensor":
        return value == "on"
    if domain == "lock":
        return value != "locked"
    if domain == "cover":
        return value not in {"closed", "closing"}
    return value in _ACTIVE

def install_safety_runtime() -> None:
    """Install idempotent guards without changing Home Assistant services."""
    global _INSTALLED
    if _INSTALLED:
        return
    from .alarm_control_panel import ArgusAlarmPanel
    original_policy = ArgusAlarmPanel._open_sensor_policy
    original_disarm = ArgusAlarmPanel.async_alarm_disarm

    def safe_policy(self, mode_key: str) -> str:
        config = self._mode_config(mode_key)
        explicit = config.get("open_sensors_policy") or config.get("openSensorsPolicy")
        if explicit in {"allow", "pending", "block"}:
            return explicit
        if config.get("require_closed") is False or config.get("requireClosed") is False:
            return "allow"
        sensors = config.get("sensors") or self._sensors_for_state(AlarmControlPanelState(f"armed_{mode_key}"))
        return "pending" if sensors else original_policy(self, mode_key)

    def safe_open_sensors(self, target):
        config = self._mode_config(target.value.replace("armed_", ""))
        sensors = config.get("sensors") or self._sensors_for_state(target)
        bypassed = set(config.get("bypassed_sensors") or config.get("bypassedSensors") or [])
        return list(dict.fromkeys(sensor for sensor in sensors if sensor not in bypassed and _sensor_blocks(self.hass, sensor)))

    async def safe_disarm(self, code=None):
        pending = getattr(self, "_arm_request", None)
        if pending or self._alarm_state == AlarmControlPanelState.ARMING:
            target = pending.get("target") if pending else getattr(self, "_arming_target", None)
            try:
                if target is not None:
                    await async_announce_arming_cancelled(
                        self.hass, self._config_entry,
                        alarm_entity_id=self.entity_id,
                        target=getattr(target, "value", str(target)),
                        source=await self._get_context_user(),
                    )
            except Exception:
                _LOGGER.exception("Argus cancellation announcement failed")
            await self._async_cancel_arming_request("cancelled_from_off", disarm=True)
            self._alarm_state = AlarmControlPanelState.DISARMED
            self.async_write_ha_state()
            await self._async_mqtt_publish()
            await self._async_persist_stable_state("cancelled_from_off")
            return
        return await original_disarm(self, code=code)

    ArgusAlarmPanel._open_sensor_policy = safe_policy
    ArgusAlarmPanel._open_blocking_sensors = safe_open_sensors
    ArgusAlarmPanel.async_alarm_disarm = safe_disarm
    _INSTALLED = True
