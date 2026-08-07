"""Dynamic TTS and event payloads for Argus arming and alarm events."""
from __future__ import annotations
import logging
from homeassistant.helpers import device_registry as dr, entity_registry as er
from .const import DOMAIN, CONF_ARMING_VOICE_ENABLED, CONF_ARMING_VOICE_TTS, CONF_ARMING_VOICE_PLAYERS, CONF_ARMING_VOICE_MESSAGE_START, CONF_ARMING_VOICE_MESSAGE_REMAINING, CONF_ARMING_VOICE_MESSAGE_LAST, CONF_ARMING_VOICE_MESSAGE_COMPLETE, CONF_ARMING_VOICE_MESSAGE_CANCELLED, CONF_ARMING_VOICE_MESSAGE_TRIGGERED, DEFAULT_ARMING_VOICE_MESSAGE_START, DEFAULT_ARMING_VOICE_MESSAGE_REMAINING, DEFAULT_ARMING_VOICE_MESSAGE_LAST, DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE, DEFAULT_ARMING_VOICE_MESSAGE_CANCELLED, DEFAULT_ARMING_VOICE_MESSAGE_TRIGGERED
_LOGGER=logging.getLogger(__name__);_MODE_NAMES={"armed_home":"En casa","armed_away":"Ausente","armed_night":"Noche","armed_vacation":"Vacaciones","home":"En casa","away":"Ausente","night":"Noche","vacation":"Vacaciones"}
class _SafeValues(dict):
    def __missing__(self,key):return "{"+key+"}"
def _options(hass,entry):merged=dict(entry.options);merged.update(hass.data.get(DOMAIN,{}).get("arming_voice_yaml",{}));return merged
def _sensor_identity(hass,entity_id):
    state=hass.states.get(entity_id);entry=er.async_get(hass).async_get(entity_id);device=dr.async_get(hass).async_get(entry.device_id) if entry and entry.device_id else None
    name=(device.name_by_user or device.name) if device else None
    if not name and entry:name=entry.name
    if not name and state:name=state.attributes.get("friendly_name")
    name=str(name or entity_id).strip();parts=name.split()
    if len(parts)>1 and parts[0].casefold()==parts[1].casefold():name=' '.join(parts[1:])
    return {"entity_id":entity_id,"name":name,"state":state.state if state else "unavailable","unique_id":entry.unique_id if entry else None,"device_id":entry.device_id if entry else None,"identifiers":sorted(f"{a}:{b}" for a,b in (device.identifiers if device else set())),"connections":sorted(f"{a}:{b}" for a,b in (device.connections if device else set()))}
def _render(template,values):
    try:return str(template).format_map(_SafeValues(values)).strip()
    except (ValueError,AttributeError):return str(template).strip()
async def _async_speak(hass,options,message):
    if not options.get(CONF_ARMING_VOICE_ENABLED,False):return
    tts=str(options.get(CONF_ARMING_VOICE_TTS,"") or "");players=options.get(CONF_ARMING_VOICE_PLAYERS,[])
    if isinstance(players,str):players=[players]
    if not tts or not players or not message:return
    for player in dict.fromkeys(players):
        try:await hass.services.async_call("tts", "speak", {"entity_id":tts,"media_player_entity_id":player,"message":message,"cache":True},blocking=False)
        except Exception:_LOGGER.exception("Argus could not announce on %s",player)
async def async_announce_arming_wait_update(hass,config_entry,*,alarm_entity_id,target,previous_open,current_open):
    previous=list(dict.fromkeys(previous_open));current=list(dict.fromkeys(current_open))
    if previous==current:return
    current_info=[_sensor_identity(hass,e) for e in current];prev_set,cur_set=set(previous),set(current);closed=[_sensor_identity(hass,e) for e in previous if e not in cur_set];opened=[_sensor_identity(hass,e) for e in current if e not in prev_set];names=[i["name"] for i in current_info];mode=_MODE_NAMES.get(target,target);values={"count":len(current),"total":len(prev_set|cur_set),"sensors":", ".join(names),"closed":", ".join(i["name"] for i in closed),"opened":", ".join(i["name"] for i in opened),"mode":mode,"home":config_entry.title};options=_options(hass,config_entry)
    if not current:template=options.get(CONF_ARMING_VOICE_MESSAGE_COMPLETE,DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE)
    elif len(current)==1 and previous:template=options.get(CONF_ARMING_VOICE_MESSAGE_LAST,DEFAULT_ARMING_VOICE_MESSAGE_LAST)
    elif closed:template=options.get(CONF_ARMING_VOICE_MESSAGE_REMAINING,DEFAULT_ARMING_VOICE_MESSAGE_REMAINING)
    else:template=options.get(CONF_ARMING_VOICE_MESSAGE_START,DEFAULT_ARMING_VOICE_MESSAGE_START)
    message=_render(template,values);hass.bus.async_fire("argus_arming_wait_update",{"entry_id":config_entry.entry_id,"alarm_entity_id":alarm_entity_id,"mode":target,"mode_name":mode,"open_count":len(current),"open_sensors":current_info,"open_sensor_names":names,"recently_closed":closed,"recently_opened":opened,"all_closed":not current,"message":message});await _async_speak(hass,options,message)
async def async_announce_arming_cancelled(hass,config_entry,*,alarm_entity_id,target,source):
    options=_options(hass,config_entry);mode=_MODE_NAMES.get(target,target);message=_render(options.get(CONF_ARMING_VOICE_MESSAGE_CANCELLED,DEFAULT_ARMING_VOICE_MESSAGE_CANCELLED),{"mode":mode,"home":config_entry.title,"source":source});hass.bus.async_fire("argus_arming_wait_cancelled",{"entry_id":config_entry.entry_id,"alarm_entity_id":alarm_entity_id,"mode":target,"mode_name":mode,"source":source,"message":message});await _async_speak(hass,options,message)
async def async_announce_alarm_triggered(hass,config_entry,*,alarm_entity_id,sensor_entity_id,mode,source):
    options=_options(hass,config_entry);sensor=_sensor_identity(hass,sensor_entity_id);mode_name=_MODE_NAMES.get(str(mode or ""),str(mode or "desconocido"));values={"sensor":sensor["name"],"sensor_entity_id":sensor_entity_id,"sensor_state":sensor["state"],"mode":mode_name,"home":config_entry.title,"source":source,"triggered_by":source};message=_render(options.get(CONF_ARMING_VOICE_MESSAGE_TRIGGERED,DEFAULT_ARMING_VOICE_MESSAGE_TRIGGERED),values);hass.bus.async_fire("argus_alarm_triggered",{"entry_id":config_entry.entry_id,"alarm_entity_id":alarm_entity_id,"mode":mode,"mode_name":mode_name,"sensor":sensor,"sensor_name":sensor["name"],"sensor_entity_id":sensor_entity_id,"source":source,"message":message});await _async_speak(hass,options,message)
def install_cancel_announcement():return None
