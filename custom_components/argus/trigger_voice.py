"""Track and announce every intrusion sensor involved in an Argus alarm."""
from __future__ import annotations
import re
import asyncio
from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from .arming_voice import async_announce_alarm_triggered
_ACTIVE={"on","open","unlocked","active","motion","recording"}
_MODE_STATES={"home":AlarmControlPanelState.ARMED_HOME,"away":AlarmControlPanelState.ARMED_AWAY,"night":AlarmControlPanelState.ARMED_NIGHT,"vacation":AlarmControlPanelState.ARMED_VACATION}
def _trigger_entity(panel) -> str | None:
 value=str(getattr(panel,"_triggered_by","") or "")
 if panel.hass.states.get(value):return value
 match=re.search(r"Sensor:\s*([a-z_]+\.[a-zA-Z0-9_]+)",value)
 return match.group(1) if match and panel.hass.states.get(match.group(1)) else None
def _is_monitored(panel,entity_id):
 mode_state=_MODE_STATES.get(getattr(panel,"_triggered_mode",None))
 return bool(mode_state and entity_id in panel._sensors_for_state(mode_state))
def _is_active_monitored(panel,entity_id):
 state=panel.hass.states.get(entity_id)
 return bool(state and state.state in _ACTIVE and _is_monitored(panel,entity_id))
def install_trigger_voice() -> None:
 from .alarm_control_panel import ArgusAlarmPanel
 if getattr(ArgusAlarmPanel,"__argus_trigger_voice__",False):return
 ArgusAlarmPanel.__argus_trigger_voice__=True
 original_trigger=ArgusAlarmPanel._async_trigger
 original_sensor=ArgusAlarmPanel._async_sensor_changed
 original_disarm=ArgusAlarmPanel.async_alarm_disarm
 original_attrs=ArgusAlarmPanel.extra_state_attributes.fget
 async def announce(self,entity_id,additional):
  sensors=list(dict.fromkeys(getattr(self,"_argus_triggered_sensors",[]) or []))
  await async_announce_alarm_triggered(self.hass,self._config_entry,alarm_entity_id=self.entity_id,sensor_entity_id=entity_id,triggered_sensor_ids=sensors,mode=getattr(self,"_triggered_mode",None),source=str(getattr(self,"_triggered_by","") or entity_id),additional=additional)
 async def wrapped_trigger(self):
  lock = getattr(self, "_argus_trigger_lock", None)
  if lock is None:
      lock = self._argus_trigger_lock = asyncio.Lock()
  async with lock:
      was_triggered=self._alarm_state==AlarmControlPanelState.TRIGGERED
      entity_id=_trigger_entity(self)
      correlated=list(getattr(self,"_confirmation_events",{}).keys())
      await original_trigger(self)
      if not was_triggered and self._alarm_state==AlarmControlPanelState.TRIGGERED and not getattr(self,"_panic_active",False):
       causes=[e for e in [*correlated,entity_id] if e and ((e == entity_id and _is_monitored(self, e)) or _is_active_monitored(self,e))]
       self._argus_triggered_sensors=list(dict.fromkeys(causes))
       self.async_write_ha_state()
       if entity_id:await announce(self,entity_id,False)
 async def additional(self,entity_id):
  lock = getattr(self, "_argus_trigger_lock", None)
  if lock is None:
      lock = self._argus_trigger_lock = asyncio.Lock()
  async with lock:
      sensors=list(getattr(self,"_argus_triggered_sensors",[]) or [])
      if entity_id in sensors or not _is_active_monitored(self,entity_id):return
      sensors.append(entity_id);self._argus_triggered_sensors=sensors;self.async_write_ha_state();await announce(self,entity_id,True)
 def wrapped_sensor(self,event):
  was_triggered=self._alarm_state==AlarmControlPanelState.TRIGGERED
  result=original_sensor(self,event)
  entity_id=event.data.get("entity_id");new_state=event.data.get("new_state")
  if was_triggered and entity_id and new_state and new_state.state in _ACTIVE:self.hass.async_create_task(additional(self,entity_id))
  return result
 async def wrapped_disarm(self,*args,**kwargs):
  result=await original_disarm(self,*args,**kwargs)
  if self._alarm_state==AlarmControlPanelState.DISARMED:self._argus_triggered_sensors=[];self.async_write_ha_state()
  return result
 def wrapped_attrs(self):
  attrs=original_attrs(self);sensor_ids=list(getattr(self,"_argus_triggered_sensors",[]) or []);attrs["triggered_sensors"]=sensor_ids;attrs["triggered_sensor_names"]=[self.hass.states.get(e).attributes.get("friendly_name",e) if self.hass.states.get(e) else e for e in sensor_ids];attrs["triggered_sensor_count"]=len(sensor_ids);return attrs
 ArgusAlarmPanel._async_trigger=wrapped_trigger;ArgusAlarmPanel._async_sensor_changed=wrapped_sensor;ArgusAlarmPanel.async_alarm_disarm=wrapped_disarm;ArgusAlarmPanel.extra_state_attributes=property(wrapped_attrs)
