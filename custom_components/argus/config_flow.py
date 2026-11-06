"""Config and options flows for Argus."""
from __future__ import annotations
import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector
from .const import (
 CONF_ARMING_TIME,CONF_CODE,CONF_CODE_ARM_REQUIRED,CONF_ENTRY_DELAY,CONF_MQTT_ENABLED,
 CONF_MQTT_TOPIC_COMMAND,CONF_MQTT_TOPIC_STATE,CONF_NAME,CONF_SENSORS_AWAY,
 CONF_SENSORS_HOME,CONF_SENSORS_NIGHT,CONF_ENTRY_SENSORS,
 CONF_LINKED_ALARM_PANELS,CONF_TRIGGER_TIME,DEFAULT_ARMING_TIME,DEFAULT_ENTRY_DELAY,
 DEFAULT_MQTT_TOPIC_COMMAND,DEFAULT_MQTT_TOPIC_STATE,DEFAULT_NAME,DEFAULT_TRIGGER_TIME,DOMAIN,
)
class ArgusConfigFlow(config_entries.ConfigFlow,domain=DOMAIN):
 VERSION=2
 async def async_step_user(self,user_input=None):
  if user_input is not None:
   name=str(user_input.get(CONF_NAME,DEFAULT_NAME)).strip() or DEFAULT_NAME
   await self.async_set_unique_id(name.lower());self._abort_if_unique_id_configured()
   return self.async_create_entry(title=name,data={CONF_NAME:name,CONF_CODE:"",CONF_CODE_ARM_REQUIRED:False,CONF_ARMING_TIME:DEFAULT_ARMING_TIME,CONF_TRIGGER_TIME:DEFAULT_TRIGGER_TIME,CONF_ENTRY_DELAY:DEFAULT_ENTRY_DELAY,CONF_SENSORS_AWAY:[],CONF_SENSORS_HOME:[],CONF_SENSORS_NIGHT:[],CONF_ENTRY_SENSORS:[],CONF_LINKED_ALARM_PANELS:[],CONF_MQTT_ENABLED:False,CONF_MQTT_TOPIC_STATE:DEFAULT_MQTT_TOPIC_STATE,CONF_MQTT_TOPIC_COMMAND:DEFAULT_MQTT_TOPIC_COMMAND})
  return self.async_show_form(step_id="user",data_schema=vol.Schema({vol.Required(CONF_NAME,default=DEFAULT_NAME):selector.TextSelector(selector.TextSelectorConfig(type=selector.TextSelectorType.TEXT))}))
