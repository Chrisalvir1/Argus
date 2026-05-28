"""Config flow for Argus — multi-step with entity selectors."""
from __future__ import annotations
from typing import Any

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers import selector

from .const import (
    DOMAIN,
    CONF_NAME,
    CONF_CODE,
    CONF_CODE_ARM_REQUIRED,
    CONF_ARMING_TIME,
    CONF_TRIGGER_TIME,
    CONF_ENTRY_DELAY,
    CONF_SENSORS_AWAY,
    CONF_SENSORS_HOME,
    CONF_SENSORS_NIGHT,
    CONF_SENSORS_VACATION,
    CONF_ENTRY_SENSORS,
    CONF_LINKED_ALARM_ENTITY,
    CONF_SIREN_ENTITY,
    CONF_MQTT_ENABLED,
    CONF_MQTT_TOPIC_STATE,
    CONF_MQTT_TOPIC_COMMAND,
    DEFAULT_NAME,
    DEFAULT_ARMING_TIME,
    DEFAULT_TRIGGER_TIME,
    DEFAULT_ENTRY_DELAY,
    DEFAULT_MQTT_TOPIC_STATE,
    DEFAULT_MQTT_TOPIC_COMMAND,
)


class ArgusConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Single-step config flow for Argus."""

    VERSION = 2

    async def async_step_user(self, user_input=None):
        """Handle user step: confirm installation and name, apply default configuration."""
        if user_input is not None:
            name = user_input.get(CONF_NAME, DEFAULT_NAME)
            data = {
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
            }
            return self.async_create_entry(
                title=name,
                data=data,
            )

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Required(CONF_NAME, default=DEFAULT_NAME): selector.TextSelector(),
            }),
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """Return the options flow handler."""
        return ArgusOptionsFlow()



class ArgusOptionsFlow(config_entries.OptionsFlow):
    """Handle Argus options — single step, compatible with all HA versions."""

    def __init__(self) -> None:
        super().__init__()

    async def async_step_init(self, user_input=None):
        """Single step: edit timers, code and sensors."""
        try:
            d = dict(self.config_entry.data)
            if self.config_entry.options:
                d.update(self.config_entry.options)
        except AttributeError:
            d = {}

        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema({
                vol.Optional(
                    CONF_ARMING_TIME,
                    default=int(d.get(CONF_ARMING_TIME, DEFAULT_ARMING_TIME)),
                ): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=300, step=5,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
                vol.Optional(
                    CONF_TRIGGER_TIME,
                    default=int(d.get(CONF_TRIGGER_TIME, DEFAULT_TRIGGER_TIME)),
                ): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=120, step=1,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
                vol.Optional(
                    CONF_ENTRY_DELAY,
                    default=int(d.get(CONF_ENTRY_DELAY, DEFAULT_ENTRY_DELAY)),
                ): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=300, step=5,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
                vol.Optional(
                    CONF_CODE,
                    default=d.get(CONF_CODE, ""),
                ): selector.TextSelector(
                    selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD)
                ),
                vol.Optional(
                    CONF_CODE_ARM_REQUIRED,
                    default=bool(d.get(CONF_CODE_ARM_REQUIRED, False)),
                ): selector.BooleanSelector(),
            }),
        )
