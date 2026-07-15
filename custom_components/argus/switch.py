"""Stateful SOS switch exposed by Argus for Home Assistant and HomeKit."""
from __future__ import annotations

from homeassistant.components.switch import SwitchEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.dispatcher import async_dispatcher_connect

from .const import DATA_PANELS, DOMAIN


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Expose the reversible Argus SOS control as a stateful switch."""
    async_add_entities([ArgusPanicSwitch(hass, config_entry)])


class ArgusPanicSwitch(SwitchEntity):
    """Turn on to activate panic; turn off to restore the previous Argus state."""

    _attr_has_entity_name = False
    _attr_name = "Argus Panic"
    _attr_icon = "mdi:alarm-light"

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        self.hass = hass
        self._config_entry = config_entry
        self._attr_unique_id = f"{config_entry.entry_id}_panic"
        self._unsub_state = None

    @property
    def _panel(self):
        return self.hass.data.get(DOMAIN, {}).get(DATA_PANELS, {}).get(
            self._config_entry.entry_id
        )

    @property
    def is_on(self) -> bool:
        """Return whether this Argus instance is in manual panic mode."""
        return bool(self._panel and self._panel._panic_active)

    async def async_added_to_hass(self) -> None:
        """Mirror changes made by the panel or the Argus UI immediately."""
        self._unsub_dispatcher = async_dispatcher_connect(
            self.hass, f"{DOMAIN}_state_changed", self._handle_state_changed
        )

    async def async_will_remove_from_hass(self) -> None:
        if self._unsub_dispatcher:
            self._unsub_dispatcher()
            self._unsub_dispatcher = None

    @callback
    def _handle_state_changed(self) -> None:
        self.async_write_ha_state()

    async def async_turn_on(self, **kwargs) -> None:
        """Activate Argus panic regardless of armed/disarmed mode."""
        panel = self._panel
        if panel is None:
            return
        await panel.async_alarm_trigger()
        self.async_write_ha_state()

    async def async_turn_off(self, **kwargs) -> None:
        """Stop panic while restoring the exact pre-panic state."""
        panel = self._panel
        if panel is None:
            return
        await panel.async_stop_panic()
        self.async_write_ha_state()
