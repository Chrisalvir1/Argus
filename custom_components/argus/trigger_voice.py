"""Track and announce every intrusion sensor involved in an Argus alarm."""
from __future__ import annotations
import re
import asyncio
from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from .arming_voice import async_announce_alarm_triggered, async_announce_alarm_sensor_closed, async_announce_disarmed
_ACTIVE={"on","open","unlocked","active","motion","recording"}
_REPEAT_INTERVAL=30
_MODE_STATES={"home":AlarmControlPanelState.ARMED_HOME,"away":AlarmControlPanelState.ARMED_AWAY,"night":AlarmControlPanelState.ARMED_NIGHT}
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
 def open_triggered_sensors(self):
  candidates=list(dict.fromkeys(getattr(self,"_argus_triggered_sensors",[]) or []))
  opened=getattr(self,"_argus_open_triggered_sensors",set())
  return [entity_id for entity_id in candidates if entity_id in opened and _is_active_monitored(self,entity_id)]
 async def repeat_alarm_voice(self):
  try:
   while self._alarm_state==AlarmControlPanelState.TRIGGERED and not getattr(self,"_panic_active",False):
    await asyncio.sleep(_REPEAT_INTERVAL)
    opened=open_triggered_sensors(self)
    if self._alarm_state!=AlarmControlPanelState.TRIGGERED or not opened:return
    await async_announce_alarm_triggered(self.hass,self._config_entry,alarm_entity_id=self.entity_id,sensor_entity_id=opened[0],triggered_sensor_ids=opened,mode=getattr(self,"_triggered_mode",None),source=str(getattr(self,"_triggered_by","") or opened[0]),additional=False)
  except asyncio.CancelledError:
   raise
  finally:
   if getattr(self,"_argus_trigger_repeat_task",None) is asyncio.current_task():
    self._argus_trigger_repeat_task=None
 def ensure_repeat_alarm_voice(self):
  task=getattr(self,"_argus_trigger_repeat_task",None)
  if task and not task.done():return
  if open_triggered_sensors(self):
   self._argus_trigger_repeat_task=self.hass.async_create_task(repeat_alarm_voice(self))
 def stop_repeat_alarm_voice(self):
  task=getattr(self,"_argus_trigger_repeat_task",None)
  if task and not task.done():task.cancel()
  self._argus_trigger_repeat_task=None
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
       self._argus_open_triggered_sensors=set(causes)
       self.async_write_ha_state()
       if entity_id:
        await async_announce_alarm_triggered(self.hass,self._config_entry,alarm_entity_id=self.entity_id,sensor_entity_id=entity_id,triggered_sensor_ids=open_triggered_sensors(self) or [entity_id],mode=getattr(self,"_triggered_mode",None),source=str(getattr(self,"_triggered_by","") or entity_id),additional=False)
        ensure_repeat_alarm_voice(self)
 async def additional(self,entity_id):
  lock = getattr(self, "_argus_trigger_lock", None)
  if lock is None:
      lock = self._argus_trigger_lock = asyncio.Lock()
  async with lock:
      if not _is_active_monitored(self,entity_id):return
      open_ids=getattr(self,"_argus_open_triggered_sensors",set())
      if entity_id in open_ids:return
      open_ids.add(entity_id);self._argus_open_triggered_sensors=open_ids
      sensors=list(getattr(self,"_argus_triggered_sensors",[]) or [])
      if entity_id not in sensors:sensors.append(entity_id)
      self._argus_triggered_sensors=sensors;self.async_write_ha_state()
      await async_announce_alarm_triggered(self.hass,self._config_entry,alarm_entity_id=self.entity_id,sensor_entity_id=entity_id,triggered_sensor_ids=open_triggered_sensors(self),mode=getattr(self,"_triggered_mode",None),source=str(getattr(self,"_triggered_by","") or entity_id),additional=True)
      ensure_repeat_alarm_voice(self)
 def wrapped_sensor(self,event):
  was_triggered=self._alarm_state==AlarmControlPanelState.TRIGGERED
  result=original_sensor(self,event)
  entity_id=event.data.get("entity_id");new_state=event.data.get("new_state")
  if was_triggered and entity_id and new_state:
   if new_state.state in _ACTIVE:self.hass.async_create_task(additional(self,entity_id))
   else:
    open_ids=getattr(self,"_argus_open_triggered_sensors",set())
    was_open=entity_id in open_ids
    open_ids.discard(entity_id)
    remaining=open_triggered_sensors(self)
    if was_open:
     self.hass.async_create_task(async_announce_alarm_sensor_closed(self.hass,self._config_entry,alarm_entity_id=self.entity_id,sensor_entity_id=entity_id,open_sensor_ids=remaining,mode=getattr(self,"_triggered_mode",None)))
    if not remaining:stop_repeat_alarm_voice(self)
  return result
 async def wrapped_disarm(self,*args,**kwargs):
  was_disarmed = self._alarm_state == AlarmControlPanelState.DISARMED
  previous_mode = getattr(self, '_triggered_mode', None) or self._alarm_state
  actor_context = getattr(self, '_context', None)
  actor_user_id = getattr(actor_context, 'user_id', None)
  actor_record = getattr(self.hass, 'data', {}).get('argus', {}).get('voice_action_contexts', {}).get(getattr(actor_context, 'id', None), {})
  if actor_record.get('entity_id') != getattr(self, 'entity_id', None): actor_record = {}
  actor_profile_name = actor_record.get('profile_name')
  actor_source = actor_record.get('source')
  result=await original_disarm(self,*args,**kwargs)
  if self._alarm_state==AlarmControlPanelState.DISARMED:
   stop_repeat_alarm_voice(self);self._argus_triggered_sensors=[];self._argus_open_triggered_sensors=set();self.async_write_ha_state()
   if not was_disarmed and result is not False:
    self.hass.async_create_task(async_announce_disarmed(self.hass, self._config_entry, actor_user_id=actor_user_id, actor_profile_name=actor_profile_name, actor_source=actor_source, previous_mode=previous_mode, event_revision=getattr(self, "_output_revision", None)))
  return result
 def wrapped_attrs(self):
  attrs=original_attrs(self);sensor_ids=list(getattr(self,"_argus_triggered_sensors",[]) or []);attrs["triggered_sensors"]=sensor_ids;attrs["triggered_sensor_names"]=[self.hass.states.get(e).attributes.get("friendly_name",e) if self.hass.states.get(e) else e for e in sensor_ids];attrs["triggered_sensor_count"]=len(sensor_ids);return attrs
 ArgusAlarmPanel._async_trigger=wrapped_trigger;ArgusAlarmPanel._async_sensor_changed=wrapped_sensor;ArgusAlarmPanel.async_alarm_disarm=wrapped_disarm;ArgusAlarmPanel.extra_state_attributes=property(wrapped_attrs)
