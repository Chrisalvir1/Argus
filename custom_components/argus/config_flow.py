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
    """Multi-step config flow for Argus."""

    VERSION = 2

    def __init__(self) -> None:
        self._ dict[str, Any] = {}

    # ── Step 1: Basic settings ──────────────────────────────
    async def async_step_user(self, user_input=None):
        """Handle step 1: name, code, and delay settings."""
        if user_input is not None:
            self._data.update(user_input)
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

    # ── Step 2: Sensor zones ──────────────────────────────
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
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_SENSORS_HOME, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_SENSORS_NIGHT, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_ENTRY_SENSORS, default=[]): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional(CONF_SIREN_ENTITY): selector.EntitySelector(
                    selector.EntitySelectorConfig(
                        domain=["switch", "siren", "script", "light"]
                    )
                ),
            }),
        )

    # ── Step 3: MQTT (optional) ──────────────────────────
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
        """Return the options flow handler."""
        return ArgusOptionsFlow()


class ArgusOptionsFlow(config_entries.OptionsFlow):
    """Handle Argus options (reconfigure sensors and delays per mode)."""

    def __init__(self) -> None:
        """Initialize — no arguments: config_entry is provided by HA framework."""
        super().__init__()
        self._opts: dict[str, Any] = {}
        self._selected_mode: str | None = None

    async def async_step_init(self, user_input: dict[str, Any] | None = None):
        """Manage the selection of what to configure."""
        if not self._opts:
            self._opts = dict(self.config_entry.data)

        if user_input is not None:
            choice = user_input["config_choice"]
            if choice == "global":
                return await self.async_step_global()
            self._selected_mode = choice
            return await self.async_step_mode()

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema({
                vol.Required("config_choice", default="global"): selector.SelectSelector(
                    selector.SelectSelectorConfig(
                        options=[
                            {"value": "global", "label": "Global Settings & Siren"},
                            {"value": "home",     "label": "Mode: Home (Casa)"},
                            {"value": "away",     "label": "Mode: Away (Ausente)"},
                            {"value": "night",    "label": "Mode: Night (Noche)"},
                            {"value": "vacation", "label": "Mode: Vacation (Vacaciones)"},
                        ],
                        mode=selector.SelectSelectorMode.LIST,
                    )
                ),
            }),
        )

    async def async_step_global(self, user_input: dict[str, Any] | None = None):
        """Handle global settings."""
        if user_input is not None:
            self._opts.update(user_input)
            return self.async_create_entry(title="", data=self._opts)

        d = self._opts
        return self.async_show_form(
            step_id="global",
            data_schema=vol.Schema({
                vol.Optional(CONF_NAME, default=d.get(CONF_NAME, DEFAULT_NAME)): selector.TextSelector(),
                vol.Optional(CONF_SIREN_ENTITY, default=d.get(CONF_SIREN_ENTITY, "")): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain=["switch", "siren", "script", "light"])
                ),
                vol.Optional(CONF_LINKED_ALARM_ENTITY, default=d.get(CONF_LINKED_ALARM_ENTITY, "")): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="alarm_control_panel")
                ),
                vol.Optional(CONF_CODE, default=d.get(CONF_CODE, "")): selector.TextSelector(
                    selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD)
                ),
                vol.Optional(CONF_CODE_ARM_REQUIRED, default=d.get(CONF_CODE_ARM_REQUIRED, False)): selector.BooleanSelector(),
            }),
        )

    async def async_step_mode(self, user_input: dict[str, Any] | None = None):
        """Handle specific mode settings."""
        mode = self._selected_mode
        if user_input is not None:
            if mode == "home":
                self._opts[CONF_SENSORS_HOME] = user_input.get("mode_sensors", [])
            elif mode == "away":
                self._opts[CONF_SENSORS_AWAY] = user_input.get("mode_sensors", [])
            elif mode == "night":
                self._opts[CONF_SENSORS_NIGHT] = user_input.get("mode_sensors", [])
            elif mode == "vacation":
                self._opts[CONF_SENSORS_VACATION] = user_input.get("mode_sensors", [])

            if "mode_entry_delay" in user_input:
                self._opts[CONF_ENTRY_DELAY] = user_input["mode_entry_delay"]
            if "mode_arming_time" in user_input:
                self._opts[CONF_ARMING_TIME] = user_input["mode_arming_time"]

            return self.async_create_entry(title="", data=self._opts)

        d = self._opts
        current_sensors: list = []
        if mode == "home":
            current_sensors = d.get(CONF_SENSORS_HOME, [])
        elif mode == "away":
            current_sensors = d.get(CONF_SENSORS_AWAY, [])
        elif mode == "night":
            current_sensors = d.get(CONF_SENSORS_NIGHT, [])
        elif mode == "vacation":
            current_sensors = d.get(CONF_SENSORS_VACATION, [])

        return self.async_show_form(
            step_id="mode",
            description_placeholders={"mode": (mode or "unknown").capitalize()},
            data_schema=vol.Schema({
                vol.Optional("mode_sensors", default=current_sensors): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="binary_sensor", multiple=True)
                ),
                vol.Optional("mode_arming_time", default=d.get(CONF_ARMING_TIME, DEFAULT_ARMING_TIME)): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=300, step=5,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
                vol.Optional("mode_entry_delay", default=d.get(CONF_ENTRY_DELAY, DEFAULT_ENTRY_DELAY)): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=0, max=300, step=5,
                        unit_of_measurement="s",
                        mode=selector.NumberSelectorMode.BOX,
                    )
                ),
            }),
        )
