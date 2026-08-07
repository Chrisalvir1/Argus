"""Argus Home Hub integration lifecycle."""
from __future__ import annotations
import logging
import voluptuous as vol
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from . import const, output_profiles, personalization, websocket_api
from .const import DOMAIN,PLATFORMS,CONF_ARMING_VOICE_ENABLED,CONF_ARMING_VOICE_TTS,CONF_ARMING_VOICE_PLAYERS,CONF_ARMING_VOICE_MESSAGE_START,CONF_ARMING_VOICE_MESSAGE_REMAINING,CONF_ARMING_VOICE_MESSAGE_LAST,CONF_ARMING_VOICE_MESSAGE_COMPLETE,CONF_ARMING_VOICE_MESSAGE_CANCELLED,CONF_ARMING_VOICE_MESSAGE_TRIGGERED,CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED
from .media_websocket import install as install_media_websocket
from .panel import async_register_panel
from .safety_runtime import install_safety_runtime
from .trigger_voice import install_trigger_voice
_LOGGER=logging.getLogger(__name__);_WS_REGISTERED_KEY=f"{DOMAIN}_ws_registered"
_VOICE_KEYS={"enabled":CONF_ARMING_VOICE_ENABLED,"tts_entity":CONF_ARMING_VOICE_TTS,"media_players":CONF_ARMING_VOICE_PLAYERS,"message_start":CONF_ARMING_VOICE_MESSAGE_START,"message_remaining":CONF_ARMING_VOICE_MESSAGE_REMAINING,"message_last":CONF_ARMING_VOICE_MESSAGE_LAST,"message_complete":CONF_ARMING_VOICE_MESSAGE_COMPLETE,"message_cancelled":CONF_ARMING_VOICE_MESSAGE_CANCELLED,"message_triggered":CONF_ARMING_VOICE_MESSAGE_TRIGGERED,"message_additional_triggered":CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED}
_VOICE_SCHEMA=vol.Schema({vol.Optional("enabled"):bool,vol.Optional("tts_entity"):str,vol.Optional("media_players"):[str],vol.Optional("message_start"):str,vol.Optional("message_remaining"):str,vol.Optional("message_last"):str,vol.Optional("message_complete"):str,vol.Optional("message_cancelled"):str,vol.Optional("message_triggered"):str,vol.Optional("message_additional_triggered"):str},extra=vol.ALLOW_EXTRA)
CONFIG_SCHEMA=vol.Schema({vol.Optional(DOMAIN):vol.Schema({vol.Optional("arming_voice"):_VOICE_SCHEMA},extra=vol.ALLOW_EXTRA)},extra=vol.ALLOW_EXTRA)
def _load_yaml_voice(hass,config):
 raw=(config.get(DOMAIN) or {}).get("arming_voice") or {};hass.data.setdefault(DOMAIN,{})["arming_voice_yaml"]={_VOICE_KEYS[key]:value for key,value in raw.items() if key in _VOICE_KEYS}
async def async_setup(hass:HomeAssistant,config:dict)->bool:
 hass.data.setdefault(DOMAIN,{});_load_yaml_voice(hass,config);install_safety_runtime();install_trigger_voice();await async_register_panel(hass);_async_register_websocket_once(hass);return True
def _async_register_websocket_once(hass):
 if hass.data[DOMAIN].get(_WS_REGISTERED_KEY):return
 install_media_websocket(websocket_api);websocket_api.async_register_websocket_api(hass);personalization.async_register_personalization_api(hass);output_profiles.async_register_output_profiles_api(hass);output_profiles.install_output_profile_runtime();hass.data[DOMAIN][_WS_REGISTERED_KEY]=True
from .presence import PresenceManager
async def async_setup_entry(hass:HomeAssistant,entry:ConfigEntry)->bool:
 hass.data.setdefault(DOMAIN,{});install_safety_runtime();install_trigger_voice();pm=PresenceManager(hass,entry.entry_id);await pm.async_setup();hass.data[DOMAIN][entry.entry_id]={"config":entry.data,"presence_manager":pm};await async_register_panel(hass);_async_register_websocket_once(hass);entry.async_on_unload(entry.add_update_listener(async_reload_entry));await hass.config_entries.async_forward_entry_setups(entry,PLATFORMS);_LOGGER.info("Argus integration starting (version %s)",const.VERSION);return True
async def async_reload_entry(hass,entry):await hass.config_entries.async_reload(entry.entry_id)
async def async_unload_entry(hass,entry):
 ok=await hass.config_entries.async_unload_platforms(entry,PLATFORMS)
 if ok:
  data=hass.data[DOMAIN].pop(entry.entry_id,None)
  if data and "presence_manager" in data:data["presence_manager"].async_unload()
 return ok
