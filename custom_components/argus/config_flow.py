"""Config flow for Argus."""
from __future__ import annotations

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback

from .const import (
    DOMAIN,
    CONF_NAME,
    CONF_CODE,
    CONF_CODE_ARM_REQUIRED,
    CONF_ARMING_TIME,
    CONF_TRIGGER_TIME,
    DEFAULT_NAME,
    DEFAULT_ARMING_TIME,
    DEFAULT_TRIGGER_TIME,
)


class ArgusConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Argus."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        """Handle the initial setup step."""
        errors = {}

        if user_input is not None:
            return self.async_create_entry(
                title=user_input.get(CONF_NAME, DEFAULT_NAME),
                data=user_input,
            )

        schema = vol.Schema(
            {
                vol.Required(CONF_NAME, default=DEFAULT_NAME): str,
                vol.Optional(CONF_CODE, default=""): str,
                vol.Optional(CONF_CODE_ARM_REQUIRED, default=False): bool,
                vol.Optional(CONF_ARMING_TIME, default=DEFAULT_ARMING_TIME): int,
                vol.Optional(CONF_TRIGGER_TIME, default=DEFAULT_TRIGGER_TIME): int,
            }
        )

        return self.async_show_form(
            step_id="user",
            data_schema=schema,
            errors=errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return ArgusOptionsFlow(config_entry)


class ArgusOptionsFlow(config_entries.OptionsFlow):
    """Handle Argus options."""

    def __init__(self, config_entry):
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None):
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        schema = vol.Schema(
            {
                vol.Optional(
                    CONF_ARMING_TIME,
                    default=self.config_entry.data.get(CONF_ARMING_TIME, DEFAULT_ARMING_TIME),
                ): int,
                vol.Optional(
                    CONF_TRIGGER_TIME,
                    default=self.config_entry.data.get(CONF_TRIGGER_TIME, DEFAULT_TRIGGER_TIME),
                ): int,
            }
        )

        return self.async_show_form(step_id="init", data_schema=schema)
