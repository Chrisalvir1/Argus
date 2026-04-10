"""Config flow for Argus — multi-step with entity selectors."""
from __future__ import annotations

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
    CONF_ENTRY_SENSORS,
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
    """Multi-step config flow for Argus."""

    VERSION = 2

    _data: dict[str, Any] = {}

    # ── Step 1: Basic settings ──────────────────────────────────
    async def async_step_user(self, user_input=None):
        """Handle step 1: name, code, and delay settings."""
        if user_input is not None:
            self._data = user_input
            return await self.async_step_sensors()

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Required(CONF_NAME, default=DEFAULT_NAME): selector.TextSelector(),
                vol.Optional(CONF_CODE, default=""): selector.TextSelector(
                    selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD)
                ),
                vol.Optional(CONF_CODE_ARM_REQUIRED, default=False): selector.BooleanSelector(),
                vol.Optional(CONF_ARMING_TIME, default=DEFAULT_ARMING_TIME): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=300, step=5,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
                vol.Optional(CONF_TRIGGER_TIME, default=DEFAULT_TRIGGER_TIME): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=30, max=3600, step=30,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
                vol.Optional(CONF_ENTRY_DELAY, default=DEFAULT_ENTRY_DELAY): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=300, step=5,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
            }),
        )

    # ── Step 2: Sensor zones ────────────────────────────────────
    async def async_step_sensors(self, user_input=None):
        """Handle step 2: select sensor entities and siren."""
        if user_input is not None:
            self._data.update(user_input)
            return await self.async_step_mqtt()

        return self.async_show_form(
            step_id="sensors",
            data_schema=vol.Schema({
                vol.Optional(CONF_LINKED_ALARM_ENTITY): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="alarm_control_panel")
                ),
                vol.Optional(CONF_SENSORS_AWAY, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(
                        domain="binary_sensor", multiple=True
                    )
                ),
                vol.Optional(CONF_SENSORS_HOME, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(
                        domain="binary_sensor", multiple=True
                    )
                ),
                vol.Optional(CONF_SENSORS_NIGHT, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(
                        domain="binary_sensor", multiple=True
                    )
                ),
                vol.Optional(CONF_ENTRY_SENSORS, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(
                        domain="binary_sensor", multiple=True
                    )
                ),
                vol.Optional(CONF_SIREN_ENTITY): selector.EntitySelector(
                    selector.EntitySelectorConfig(
                        domain=["switch", "siren", "script", "light"]
                    )
                ),
            }),
        )

    # ── Step 3: MQTT (optional) ────────────────────────────────
    async def async_step_mqtt(self, user_input=None):
        """Handle step 3: optional MQTT configuration."""
        if user_input is not None:
            self._data.update(user_input)
            return self.async_create_entry(
                title=self._data.get(CONF_NAME, DEFAULT_NAME),
                data=self._data,
            )

        return self.async_show_form(
            step_id="mqtt",
            data_schema=vol.Schema({
                vol.Optional(CONF_MQTT_ENABLED, default=False): selector.BooleanSelector(),
                vol.Optional(
                    CONF_MQTT_TOPIC_STATE, default=DEFAULT_MQTT_TOPIC_STATE
                ): selector.TextSelector(),
                vol.Optional(
                    CONF_MQTT_TOPIC_COMMAND, default=DEFAULT_MQTT_TOPIC_COMMAND
                ): selector.TextSelector(),
            }),
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return ArgusOptionsFlow(config_entry)


class ArgusOptionsFlow(config_entries.OptionsFlow):
    """Handle Argus options (reconfigure sensors and delays)."""

    def __init__(self, config_entry):
        self.config_entry = config_entry
        self._opts = {}

    async def async_step_init(self, user_input=None):
        """Timing options."""
        d = self.config_entry.data
        if user_input is not None:
            self._opts.update(user_input)
            return await self.async_step_sensors()

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema({
                vol.Optional(CONF_ARMING_TIME, default=d.get(CONF_ARMING_TIME, DEFAULT_ARMING_TIME)): selector.NumberSelector(
                    selector.NumberSelectorConfig(min=0, max=300, step=5, unit_of_measurement="s", mode=selector.NumberSelectorMode.BOX)
                ),
                vol.Optional(CONF_TRIGGER_TIME, default=d.get(CONF_TRIGGER_TIME, DEFAULT_TRIGGER_TIME)): selector.NumberSelector(
                    selector.NumberSelectorConfig(min=30, max=3600, step=30, unit_of_measurement="s", mode=selector.NumberSelectorMode.BOX)
                ),
                vol.Optional(CONF_ENTRY_DELAY, default=d.get(CONF_ENTRY_DELAY, DEFAULT_ENTRY_DELAY)): selector.NumberSelector(
                    selector.NumberSelectorConfig(min=0, max=300, step=5, unit_of_measurement="s", mode=selector.NumberSelectorMode.BOX)
                ),
            }),
        )

    async def async_step_sensors(self, user_input=None):
        """Sensor options."""
        d = self.config_entry.data
        if user_input is not None:
            self._opts.update(user_input)
            return self.async_create_entry(title="", data=self._opts)

        return self.async_show_form(
            step_id="sensors",
            data_schema=vol.Schema({
                vol.Optional(CONF_SENSORS_AWAY, default=d.get(CONF_SENSORS_AWAY, [])): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_SENSORS_HOME, default=d.get(CONF_SENSORS_HOME, [])): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_SENSORS_NIGHT, default=d.get(CONF_SENSORS_NIGHT, [])): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_ENTRY_SENSORS, default=d.get(CONF_ENTRY_SENSORS, [])): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_SIREN_ENTITY, default=d.get(CONF_SIREN_ENTITY, "")): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain=["switch", "siren", "script", "light"])
                ),
            }),
        )
