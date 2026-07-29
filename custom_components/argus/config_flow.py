"""Config and options flows for Argus."""
from __future__ import annotations

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector

from .const import (
    CONF_ARMING_TIME,
    CONF_CODE,
    CONF_CODE_ARM_REQUIRED,
    CONF_ENTRY_DELAY,
    CONF_MQTT_ENABLED,
    CONF_MQTT_TOPIC_COMMAND,
    CONF_MQTT_TOPIC_STATE,
    CONF_NAME,
    CONF_SENSORS_AWAY,
    CONF_SENSORS_HOME,
    CONF_SENSORS_NIGHT,
    CONF_SENSORS_VACATION,
    CONF_ENTRY_SENSORS,
    CONF_TRIGGER_TIME,
    DEFAULT_ARMING_TIME,
    DEFAULT_ENTRY_DELAY,
    DEFAULT_MQTT_TOPIC_COMMAND,
    DEFAULT_MQTT_TOPIC_STATE,
    DEFAULT_NAME,
    DEFAULT_TRIGGER_TIME,
    DOMAIN,
)
from .security import hash_pin, validate_pin


class ArgusConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Create a local Argus alarm instance."""

    VERSION = 3

    async def async_step_user(self, user_input=None):
        if user_input is not None:
            name = str(user_input.get(CONF_NAME, DEFAULT_NAME)).strip() or DEFAULT_NAME
            await self.async_set_unique_id(name.lower())
            self._abort_if_unique_id_configured()
            return self.async_create_entry(
                title=name,
                data={
                    CONF_NAME: name,
                    CONF_CODE: "",
                    CONF_CODE_ARM_REQUIRED: False,
                    CONF_ARMING_TIME: DEFAULT_ARMING_TIME,
                    CONF_TRIGGER_TIME: DEFAULT_TRIGGER_TIME,
                    CONF_ENTRY_DELAY: DEFAULT_ENTRY_DELAY,
                    CONF_SENSORS_AWAY: [],
                    CONF_SENSORS_HOME: [],
                    CONF_SENSORS_NIGHT: [],
                    CONF_SENSORS_VACATION: [],
                    CONF_ENTRY_SENSORS: [],
                    CONF_MQTT_ENABLED: False,
                    CONF_MQTT_TOPIC_STATE: DEFAULT_MQTT_TOPIC_STATE,
                    CONF_MQTT_TOPIC_COMMAND: DEFAULT_MQTT_TOPIC_COMMAND,
                },
            )

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Required(CONF_NAME, default=DEFAULT_NAME): selector.TextSelector(
                    selector.TextSelectorConfig(type=selector.TextSelectorType.TEXT)
                ),
            }),
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return ArgusOptionsFlow()


class ArgusOptionsFlow(config_entries.OptionsFlow):
    """Edit timers and master-PIN requirements safely."""

    async def async_step_init(self, user_input=None):
        values = dict(self.config_entry.data)
        values.update(self.config_entry.options)
        errors: dict[str, str] = {}

        if user_input is not None:
            submitted = dict(user_input)
            new_pin = str(submitted.pop(CONF_CODE, "") or "")
            current_pin = values.get(CONF_CODE, "")
            if new_pin:
                if not validate_pin(new_pin):
                    errors[CONF_CODE] = "invalid_pin"
                else:
                    submitted[CONF_CODE] = hash_pin(new_pin)
            else:
                submitted[CONF_CODE] = current_pin

            if not errors:
                return self.async_create_entry(title="", data=submitted)

        schema = vol.Schema({
            vol.Optional(
                CONF_ARMING_TIME,
                default=int(values.get(CONF_ARMING_TIME, DEFAULT_ARMING_TIME)),
            ): selector.NumberSelector(selector.NumberSelectorConfig(
                min=0, max=300, step=5, unit_of_measurement="s",
                mode=selector.NumberSelectorMode.BOX,
            )),
            vol.Optional(
                CONF_TRIGGER_TIME,
                default=int(values.get(CONF_TRIGGER_TIME, DEFAULT_TRIGGER_TIME)),
            ): selector.NumberSelector(selector.NumberSelectorConfig(
                min=0, max=300, step=1, unit_of_measurement="s",
                mode=selector.NumberSelectorMode.BOX,
            )),
            vol.Optional(
                CONF_ENTRY_DELAY,
                default=int(values.get(CONF_ENTRY_DELAY, DEFAULT_ENTRY_DELAY)),
            ): selector.NumberSelector(selector.NumberSelectorConfig(
                min=0, max=300, step=5, unit_of_measurement="s",
                mode=selector.NumberSelectorMode.BOX,
            )),
            vol.Optional(CONF_CODE, default=""): selector.TextSelector(
                selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD)
            ),
            vol.Optional(
                CONF_CODE_ARM_REQUIRED,
                default=bool(values.get(CONF_CODE_ARM_REQUIRED, False)),
            ): selector.BooleanSelector(),
        })
        return self.async_show_form(step_id="init", data_schema=schema, errors=errors)
