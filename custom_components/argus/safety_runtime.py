"""Safety-critical runtime repairs for arming, sensors, HomeKit, and names."""
from __future__ import annotations
import logging
from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.const import STATE_UNAVAILABLE, STATE_UNKNOWN
from homeassistant.helpers import device_registry as dr, entity_registry as er
from .arming_voice import async_announce_arming_cancelled
_LOGGER=logging.getLogger(__name__)
_INSTALLED=False
_ACTIVE={"on","open","opening","unlocked","active","motion","detected","wet","problem","unsafe","recording"}
def _sensor_blocks(hass,entity_id):
    state=hass.states.get(entity_id)
    if state is None or state.state in {STATE_UNKNOWN,STATE_UNAVAILABLE,"none","None",""}:return True
    value=str(state.state).lower();domain=entity_id.split('.',1)[0]
    if domain=="binary_sensor":return value=="on"
    if domain=="lock":return value!="locked"
    if domain=="cover":return value not in {"closed","closing"}
    return value in _ACTIVE
def _display_title(hass,entity_id,current):
    entry=er.async_get(hass).async_get(entity_id)
    device=dr.async_get(hass).async_get(entry.device_id) if entry and entry.device_id else None
    title=(device.name_by_user or device.name) if device else None
    if not title and entry:title=entry.name
    title=str(title or current or entity_id).strip()
    words=title.split()
    if len(words)>1 and words[0].casefold()==words[1].casefold():title=' '.join(words[1:])
    return title
def install_safety_runtime():
    global _INSTALLED
    if _INSTALLED:return
    from .alarm_control_panel import ArgusAlarmPanel
    from . import websocket_api
    original_policy=ArgusAlarmPanel._open_sensor_policy;original_disarm=ArgusAlarmPanel.async_alarm_disarm;original_arm=ArgusAlarmPanel._async_arm;original_entities=websocket_api._serialize_available_entities
    def safe_policy(self,mode_key):
        config=self._mode_config(mode_key);explicit=config.get("open_sensors_policy") or config.get("openSensorsPolicy")
        if explicit in {"allow","pending","block"}:return explicit
        if config.get("require_closed") is False or config.get("requireClosed") is False:return "allow"
        sensors=config.get("sensors") or self._sensors_for_state(AlarmControlPanelState(f"armed_{mode_key}"))
        return "pending" if sensors else original_policy(self,mode_key)
    def safe_open(self,target):
        config=self._mode_config(target.value.replace("armed_",""));sensors=config.get("sensors") or self._sensors_for_state(target);bypassed=set(config.get("bypassed_sensors") or config.get("bypassedSensors") or [])
        return list(dict.fromkeys(sensor for sensor in sensors if sensor not in bypassed and _sensor_blocks(self.hass,sensor)))
    async def reliable_arm(self,target,code=None,*,origin="service"):
        result=await original_arm(self,target,code,origin=origin)
        request=getattr(self,"_arm_request",None)
        if request and request.get("wait_for_sensors") and request.get("blocking_sensors"):
            self._alarm_state=AlarmControlPanelState.ARMING
            self.async_write_ha_state()
            await self._async_mqtt_publish()
        return result
    async def safe_disarm(self,code=None):
        pending=getattr(self,"_arm_request",None)
        if pending or self._alarm_state==AlarmControlPanelState.ARMING:
            target=pending.get("target") if pending else getattr(self,"_arming_target",None)
            try:
                if target is not None:await async_announce_arming_cancelled(self.hass,self._config_entry,alarm_entity_id=self.entity_id,target=getattr(target,"value",str(target)),source=await self._get_context_user())
            except Exception:_LOGGER.exception("Argus cancellation announcement failed")
            await self._async_cancel_arming_request("cancelled_from_off",disarm=True);self._alarm_state=AlarmControlPanelState.DISARMED;self.async_write_ha_state();await self._async_mqtt_publish();await self._async_persist_stable_state("cancelled_from_off");return
        return await original_disarm(self,code=code)
    def titled_entities(hass):
        rows=original_entities(hass)
        for row in rows:row["name"]=_display_title(hass,row["entity_id"],row.get("name"))
        return rows
    ArgusAlarmPanel._open_sensor_policy=safe_policy;ArgusAlarmPanel._open_blocking_sensors=safe_open;ArgusAlarmPanel._async_arm=reliable_arm;ArgusAlarmPanel.async_alarm_disarm=safe_disarm;websocket_api._serialize_available_entities=titled_entities;_INSTALLED=True
