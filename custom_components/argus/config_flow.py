"""Config and options flows for Argus."""
from __future__ import annotations
import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector
from .const import (
 CONF_ARMING_TIME,CONF_CODE,CONF_CODE_ARM_REQUIRED,CONF_ENTRY_DELAY,CONF_MQTT_ENABLED,
 CONF_MQTT_TOPIC_COMMAND,CONF_MQTT_TOPIC_STATE,CONF_NAME,CONF_SENSORS_AWAY,
 CONF_SENSORS_HOME,CONF_SENSORS_NIGHT,CONF_SENSORS_VACATION,CONF_ENTRY_SENSORS,
 CONF_LINKED_ALARM_PANELS,CONF_TRIGGER_TIME,DEFAULT_ARMING_TIME,DEFAULT_ENTRY_DELAY,
 DEFAULT_MQTT_TOPIC_COMMAND,DEFAULT_MQTT_TOPIC_STATE,DEFAULT_NAME,DEFAULT_TRIGGER_TIME,DOMAIN,
 CONF_ARMING_VOICE_ENABLED,CONF_ARMING_VOICE_TTS,CONF_ARMING_VOICE_PLAYERS,
 CONF_ARMING_VOICE_MESSAGE_START,CONF_ARMING_VOICE_MESSAGE_REMAINING,
 CONF_ARMING_VOICE_MESSAGE_LAST,CONF_ARMING_VOICE_MESSAGE_COMPLETE,
 CONF_ARMING_VOICE_MESSAGE_CANCELLED,CONF_ARMING_VOICE_MESSAGE_TRIGGERED,
 CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED,DEFAULT_ARMING_VOICE_MESSAGE_START,
 DEFAULT_ARMING_VOICE_MESSAGE_REMAINING,DEFAULT_ARMING_VOICE_MESSAGE_LAST,
 DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE,DEFAULT_ARMING_VOICE_MESSAGE_CANCELLED,
 DEFAULT_ARMING_VOICE_MESSAGE_TRIGGERED,DEFAULT_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED,
)
_VOICE_KEYS=(CONF_ARMING_VOICE_ENABLED,CONF_ARMING_VOICE_TTS,CONF_ARMING_VOICE_PLAYERS,CONF_ARMING_VOICE_MESSAGE_START,CONF_ARMING_VOICE_MESSAGE_REMAINING,CONF_ARMING_VOICE_MESSAGE_LAST,CONF_ARMING_VOICE_MESSAGE_COMPLETE,CONF_ARMING_VOICE_MESSAGE_CANCELLED,CONF_ARMING_VOICE_MESSAGE_TRIGGERED,CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED)
class ArgusConfigFlow(config_entries.ConfigFlow,domain=DOMAIN):
 VERSION=2
 async def async_step_user(self,user_input=None):
  if user_input is not None:
   name=str(user_input.get(CONF_NAME,DEFAULT_NAME)).strip() or DEFAULT_NAME
   await self.async_set_unique_id(name.lower());self._abort_if_unique_id_configured()
   return self.async_create_entry(title=name,data={CONF_NAME:name,CONF_CODE:"",CONF_CODE_ARM_REQUIRED:False,CONF_ARMING_TIME:DEFAULT_ARMING_TIME,CONF_TRIGGER_TIME:DEFAULT_TRIGGER_TIME,CONF_ENTRY_DELAY:DEFAULT_ENTRY_DELAY,CONF_SENSORS_AWAY:[],CONF_SENSORS_HOME:[],CONF_SENSORS_NIGHT:[],CONF_SENSORS_VACATION:[],CONF_ENTRY_SENSORS:[],CONF_LINKED_ALARM_PANELS:[],CONF_MQTT_ENABLED:False,CONF_MQTT_TOPIC_STATE:DEFAULT_MQTT_TOPIC_STATE,CONF_MQTT_TOPIC_COMMAND:DEFAULT_MQTT_TOPIC_COMMAND})
  return self.async_show_form(step_id="user",data_schema=vol.Schema({vol.Required(CONF_NAME,default=DEFAULT_NAME):selector.TextSelector(selector.TextSelectorConfig(type=selector.TextSelectorType.TEXT))}))
 @staticmethod
 @callback
 def async_get_options_flow(config_entry):return ArgusOptionsFlow()
class ArgusOptionsFlow(config_entries.OptionsFlow):
 """Voice-only options screen.

 v2.0.48: saving this screen no longer wipes stored voice settings. A key
 that is absent from the submitted form keeps its stored value; only a field
 the user explicitly emptied clears it. (The v2.0.46 flow popped every voice
 key missing from the form, which silently deleted the TTS entity and the
 media players on save and killed every voice announcement.)
 """
 async def async_step_init(self,user_input=None):
  values=dict(self.config_entry.data);values.update(self.config_entry.options)
  if user_input is not None:
   submitted=dict(self.config_entry.options)
   for key in _VOICE_KEYS:
    if key not in user_input:continue
    value=user_input[key]
    if value in (None,"",[]):submitted.pop(key,None)
    else:submitted[key]=value
   return self.async_create_entry(title="",data=submitted)
  tts_value=values.get(CONF_ARMING_VOICE_TTS)
  tts_marker=vol.Optional(CONF_ARMING_VOICE_TTS,default=tts_value) if tts_value else vol.Optional(CONF_ARMING_VOICE_TTS)
  schema=vol.Schema({
   vol.Optional(CONF_ARMING_VOICE_ENABLED,default=bool(values.get(CONF_ARMING_VOICE_ENABLED,False))):selector.BooleanSelector(),
   tts_marker:selector.EntitySelector(selector.EntitySelectorConfig(domain="tts")),
   vol.Optional(CONF_ARMING_VOICE_PLAYERS,default=values.get(CONF_ARMING_VOICE_PLAYERS,[])):selector.EntitySelector(selector.EntitySelectorConfig(multiple=True, domain="media_player")),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_START,default=values.get(CONF_ARMING_VOICE_MESSAGE_START,DEFAULT_ARMING_VOICE_MESSAGE_START)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_REMAINING,default=values.get(CONF_ARMING_VOICE_MESSAGE_REMAINING,DEFAULT_ARMING_VOICE_MESSAGE_REMAINING)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_LAST,default=values.get(CONF_ARMING_VOICE_MESSAGE_LAST,DEFAULT_ARMING_VOICE_MESSAGE_LAST)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_COMPLETE,default=values.get(CONF_ARMING_VOICE_MESSAGE_COMPLETE,DEFAULT_ARMING_VOICE_MESSAGE_COMPLETE)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_CANCELLED,default=values.get(CONF_ARMING_VOICE_MESSAGE_CANCELLED,DEFAULT_ARMING_VOICE_MESSAGE_CANCELLED)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_TRIGGERED,default=values.get(CONF_ARMING_VOICE_MESSAGE_TRIGGERED,DEFAULT_ARMING_VOICE_MESSAGE_TRIGGERED)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
   vol.Optional(CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED,default=values.get(CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED,DEFAULT_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED)):selector.TextSelector(selector.TextSelectorConfig(multiline=True)),
  })
  return self.async_show_form(step_id="init",data_schema=schema)
