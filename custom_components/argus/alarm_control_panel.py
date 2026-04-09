"""Argus Alarm Control Panel platform."""
from __future__ import annotations

import logging
from datetime import timedelta

from homeassistant.components.alarm_control_panel import (
    AlarmControlPanelEntity,
    AlarmControlPanelEntityFeature,
    AlarmControlPanelState,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.restore_state import RestoreEntity

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

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Argus alarm panel from a config entry."""
    async_add_entities(
        [ArgusAlarmPanel(hass, config_entry)],
        update_before_add=True,
    )


class ArgusAlarmPanel(AlarmControlPanelEntity, RestoreEntity):
    """Representation of the Argus alarm control panel."""

    _attr_has_entity_name = True
    _attr_should_poll = False
    _attr_supported_features = (
        AlarmControlPanelEntityFeature.ARM_HOME
        | AlarmControlPanelEntityFeature.ARM_AWAY
        | AlarmControlPanelEntityFeature.ARM_NIGHT
        | AlarmControlPanelEntityFeature.ARM_VACATION
        | AlarmControlPanelEntityFeature.TRIGGER
    )

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        """Initialize Argus alarm panel."""
        self.hass = hass
        self._config_entry = config_entry
        self._name = config_entry.data.get(CONF_NAME, DEFAULT_NAME)
        self._code = config_entry.data.get(CONF_CODE) or None
        self._code_arm_required = config_entry.data.get(CONF_CODE_ARM_REQUIRED, False)
        self._arming_time = config_entry.data.get(CONF_ARMING_TIME, DEFAULT_ARMING_TIME)
        self._trigger_time = config_entry.data.get(CONF_TRIGGER_TIME, DEFAULT_TRIGGER_TIME)
        self._alarm_state = AlarmControlPanelState.DISARMED
        self._attr_unique_id = config_entry.entry_id

    @property
    def name(self) -> str:
        return self._name

    @property
    def alarm_state(self) -> AlarmControlPanelState:
        return self._alarm_state

    @property
    def code_arm_required(self) -> bool:
        return self._code_arm_required

    async def async_alarm_disarm(self, code=None) -> None:
        """Disarm the alarm."""
        if self._validate_code(code):
            self._alarm_state = AlarmControlPanelState.DISARMED
            self.async_write_ha_state()
            _LOGGER.info("Argus disarmed.")

    async def async_alarm_arm_home(self, code=None) -> None:
        """Arm the alarm in home mode."""
        if not self._code_arm_required or self._validate_code(code):
            self._alarm_state = AlarmControlPanelState.ARMED_HOME
            self.async_write_ha_state()
            _LOGGER.info("Argus armed home.")

    async def async_alarm_arm_away(self, code=None) -> None:
        """Arm the alarm in away mode."""
        if not self._code_arm_required or self._validate_code(code):
            self._alarm_state = AlarmControlPanelState.ARMED_AWAY
            self.async_write_ha_state()
            _LOGGER.info("Argus armed away.")

    async def async_alarm_arm_night(self, code=None) -> None:
        """Arm the alarm in night mode."""
        if not self._code_arm_required or self._validate_code(code):
            self._alarm_state = AlarmControlPanelState.ARMED_NIGHT
            self.async_write_ha_state()
            _LOGGER.info("Argus armed night.")

    async def async_alarm_arm_vacation(self, code=None) -> None:
        """Arm the alarm in vacation mode."""
        if not self._code_arm_required or self._validate_code(code):
            self._alarm_state = AlarmControlPanelState.ARMED_VACATION
            self.async_write_ha_state()
            _LOGGER.info("Argus armed vacation.")

    async def async_alarm_trigger(self, code=None) -> None:
        """Trigger the alarm."""
        self._alarm_state = AlarmControlPanelState.TRIGGERED
        self.async_write_ha_state()
        _LOGGER.warning("Argus TRIGGERED.")

    def _validate_code(self, code) -> bool:
        """Validate the provided code."""
        if self._code is None:
            return True
        return code == self._code

    async def async_added_to_hass(self) -> None:
        """Restore previous state on startup."""
        await super().async_added_to_hass()
        last_state = await self.async_get_last_state()
        if last_state is not None:
            try:
                self._alarm_state = AlarmControlPanelState(last_state.state)
            except ValueError:
                self._alarm_state = AlarmControlPanelState.DISARMED
