"""Argus - Premium Smart Alarm & Security Panel for Home Assistant."""
from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN, PLATFORMS
from .panel import async_register_panel
from .websocket_api import async_register_websocket_api

_LOGGER = logging.getLogger(__name__)

_WS_REGISTERED_KEY = f"{DOMAIN}_ws_registered"


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up Argus integration (called once on HA startup)."""
    hass.data.setdefault(DOMAIN, {})
    await async_register_panel(hass)
    _async_register_websocket_once(hass)
    return True


def _async_register_websocket_once(hass: HomeAssistant) -> None:
    """Register websocket commands only once."""
    if not hass.data[DOMAIN].get(_WS_REGISTERED_KEY):
        async_register_websocket_api(hass)
        hass.data[DOMAIN][_WS_REGISTERED_KEY] = True
        _LOGGER.debug("Argus: websocket API registered")


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Argus from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN][entry.entry_id] = entry.data

    # Panel and websocket are safe to call here too thanks to guards in panel.py
    await async_register_panel(hass)
    _async_register_websocket_once(hass)

    entry.async_on_unload(entry.add_update_listener(async_reload_entry))

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    _LOGGER.info(
        "Argus integration starting (versión %s)",
        getattr(const, "VERSION", "0.6.4"),
    )
    return True


async def async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload config entry on options change."""
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id, None)
    return unload_ok
