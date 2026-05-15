"""Argus Alarm Control Panel — Minimal compatibility version."""
from __future__ import annotations
import logging
from homeassistant.components.alarm_control_panel import (
    AlarmControlPanelEntity,
    AlarmControlPanelEntityFeature,
    AlarmControlPanelState,
    CodeFormat,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from .const import DOMAIN, CONF_NAME, DEFAULT_NAME

_LOGGER = logging.getLogger(__name__)

async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Argus alarm panel."""
    try:
        async_add_entities([ArgusAlarmPanel(config_entry)])
    except Exception as err:
        _LOGGER.error("Argus Setup Error: %s", err, exc_info=True)

class ArgusAlarmPanel(AlarmControlPanelEntity):
    """Minimal Argus Entity."""

    def __init__(self, config_entry: ConfigEntry) -> None:
        self._attr_name = config_entry.data.get(CONF_NAME, DEFAULT_NAME)
        self._attr_unique_id = config_entry.entry_id
        self._attr_state = AlarmControlPanelState.DISARMED
        self._attr_supported_features = (
            AlarmControlPanelEntityFeature.ARM_HOME
            | AlarmControlPanelEntityFeature.ARM_AWAY
            | AlarmControlPanelEntityFeature.ARM_NIGHT
        )

    @property
    def state(self) -> str:
        return self._attr_state
