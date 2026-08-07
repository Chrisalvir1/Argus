"""Dynamic TTS and event payloads for Argus sensor-wait arming."""
from __future__ import annotations
import logging
from typing import Any
from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr, entity_registry as er
from .const import (
    CONF_ARMING_VOICE_ENABLED, CONF_ARMING_VOICE_TTS, CONF_ARMING_VOICE_PLAYERS,
    CONF_ARMING_VOICE_MESSAGE_START, CONF_ARMING_VOICE_MESSAGE_REMAINING,
    CONF_ARMING_VOICE_MESSAGE_LAST, CONF_ARMING_VOICE_MESSAGE_COMPLETE,
    CONF_ARMING_VOICE_MESSAGE_CANCELLED, DEFAULT_ARMING_VOICE_MESSAGE_START,
    DEFAULT_ARMING_VOICE_MESSAGE_REMAINING, DEFAULT_ARMING_VOICE_MESSAGE_LAST,
    DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE, DEFAULT_ARMING_VOICE_MESSAGE_CANCELLED,
)
_LOGGER = logging.getLogger(__name__)
_MODE_NAMES = {"armed_home": "En casa", "armed_away": "Ausente", "armed_night": "Noche", "armed_vacation": "Vacaciones"}
_CANCEL_PATCHED = False

class _SafeValues(dict):
    def __missing__(self, key: str) -> str: return "{" + key + "}"

def _sensor_identity(hass: HomeAssistant, entity_id: str) -> dict[str, Any]:
    state = hass.states.get(entity_id); entry = er.async_get(hass).async_get(entity_id)
    device = dr.async_get(hass).async_get(entry.device_id) if entry and entry.device_id else None
    name = state.attributes.get("friendly_name") if state else None
    if not name and entry: name = entry.name or entry.original_name
    if not name and device: name = device.name_by_user or device.name
    return {"entity_id": entity_id, "name": str(name or entity_id), "unique_id": entry.unique_id if entry else None, "device_id": entry.device_id if entry else None, "identifiers": sorted(f"{d}:{v}" for d,v in (device.identifiers if device else set())), "connections": sorted(f"{k}:{v}" for k,v in (device.connections if device else set()))}

def _render(template: str, values: dict[str, Any]) -> str:
    try: return str(template).format_map(_SafeValues(values)).strip()
    except (ValueError, AttributeError): return str(template).strip()

async def _async_speak(hass: HomeAssistant, options: dict, message: str) -> None:
    if not options.get(CONF_ARMING_VOICE_ENABLED, False): return
    tts_entity = str(options.get(CONF_ARMING_VOICE_TTS, "") or ""); players = options.get(CONF_ARMING_VOICE_PLAYERS, [])
    if not tts_entity or not isinstance(players, list) or not players or not message: return
    for player in players:
        try: await hass.services.async_call("tts", "speak", {"entity_id": tts_entity, "media_player_entity_id": player, "message": message, "cache": True}, blocking=False)
        except Exception: _LOGGER.exception("Argus could not announce on %s", player)

async def async_announce_arming_wait_update(hass: HomeAssistant, config_entry, *, alarm_entity_id: str, target: str, previous_open: list[str], current_open: list[str]) -> None:
    previous=list(dict.fromkeys(previous_open)); current=list(dict.fromkeys(current_open))
    if previous==current: return
    current_info=[_sensor_identity(hass,e) for e in current]; previous_set,current_set=set(previous),set(current)
    closed_info=[_sensor_identity(hass,e) for e in previous if e not in current_set]; opened_info=[_sensor_identity(hass,e) for e in current if e not in previous_set]
    names=[i["name"] for i in current_info]; closed_names=[i["name"] for i in closed_info]; mode_name=_MODE_NAMES.get(target,target)
    values={"count":len(current),"total":len(previous_set|current_set),"sensors":", ".join(names),"closed":", ".join(closed_names),"opened":", ".join(i["name"] for i in opened_info),"mode":mode_name,"home":config_entry.title}
    options=dict(config_entry.options)
    if not current: template=options.get(CONF_ARMING_VOICE_MESSAGE_COMPLETE,DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE)
    elif len(current)==1 and previous: template=options.get(CONF_ARMING_VOICE_MESSAGE_LAST,DEFAULT_ARMING_VOICE_MESSAGE_LAST)
    elif closed_names: template=options.get(CONF_ARMING_VOICE_MESSAGE_REMAINING,DEFAULT_ARMING_VOICE_MESSAGE_REMAINING)
    else: template=options.get(CONF_ARMING_VOICE_MESSAGE_START,DEFAULT_ARMING_VOICE_MESSAGE_START)
    message=_render(template,values)
    hass.bus.async_fire("argus_arming_wait_update", {"entry_id":config_entry.entry_id,"alarm_entity_id":alarm_entity_id,"mode":target,"mode_name":mode_name,"open_count":len(current),"open_sensors":current_info,"open_sensor_names":names,"recently_closed":closed_info,"recently_opened":opened_info,"all_closed":not current,"message":message})
    await _async_speak(hass,options,message)

async def async_announce_arming_cancelled(hass: HomeAssistant, config_entry, *, alarm_entity_id: str, target: str, source: str) -> None:
    options=dict(config_entry.options); mode_name=_MODE_NAMES.get(target,target)
    message=_render(options.get(CONF_ARMING_VOICE_MESSAGE_CANCELLED,DEFAULT_ARMING_VOICE_MESSAGE_CANCELLED),{"mode":mode_name,"home":config_entry.title,"source":source})
    hass.bus.async_fire("argus_arming_wait_cancelled", {"entry_id":config_entry.entry_id,"alarm_entity_id":alarm_entity_id,"mode":target,"mode_name":mode_name,"source":source,"message":message})
    await _async_speak(hass,options,message)

def install_cancel_announcement() -> None:
    """Wrap the manual Off path once without rewriting user automations."""
    global _CANCEL_PATCHED
    if _CANCEL_PATCHED: return
    from homeassistant.components.alarm_control_panel import AlarmControlPanelState
    from .alarm_control_panel import ArgusAlarmPanel
    original = ArgusAlarmPanel.async_alarm_disarm
    async def wrapped(self, code=None):
        request = self._arm_request if self._alarm_state == AlarmControlPanelState.DISARMED else None
        if request:
            source = await self._get_context_user()
            await async_announce_arming_cancelled(self.hass, self._config_entry, alarm_entity_id=self.entity_id, target=request["target"].value, source=source)
        return await original(self, code=code)
    ArgusAlarmPanel.async_alarm_disarm = wrapped
    _CANCEL_PATCHED = True
