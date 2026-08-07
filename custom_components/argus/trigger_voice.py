"""Install the alarm-trigger voice announcement without duplicating alarms."""
from __future__ import annotations
import re
from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from .arming_voice import async_announce_alarm_triggered

def _trigger_entity(panel) -> str | None:
    value=str(getattr(panel,"_triggered_by","") or "")
    if panel.hass.states.get(value):return value
    match=re.search(r"Sensor:\s*([a-z_]+\.[a-zA-Z0-9_]+)",value)
    return match.group(1) if match and panel.hass.states.get(match.group(1)) else None

def install_trigger_voice() -> None:
    from .alarm_control_panel import ArgusAlarmPanel
    if getattr(ArgusAlarmPanel,"__argus_trigger_voice__",False):return
    ArgusAlarmPanel.__argus_trigger_voice__=True
    original=ArgusAlarmPanel._async_trigger
    async def wrapped(self):
        was_triggered=self._alarm_state==AlarmControlPanelState.TRIGGERED
        entity_id=_trigger_entity(self)
        source=str(getattr(self,"_triggered_by","") or "unknown")
        await original(self)
        if not was_triggered and self._alarm_state==AlarmControlPanelState.TRIGGERED and entity_id and not getattr(self,"_panic_active",False):
            await async_announce_alarm_triggered(self.hass,self._config_entry,alarm_entity_id=self.entity_id,sensor_entity_id=entity_id,mode=getattr(self,"_triggered_mode",None),source=source)
    ArgusAlarmPanel._async_trigger=wrapped
