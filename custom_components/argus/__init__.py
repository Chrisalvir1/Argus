"""Argus - Premium Smart Alarm & Security Panel for Home Assistant."""
from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DOMAIN, PLATFORMS
from .panel import async_register_panel
from .websocket_api import async_register_websocket_api

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up Argus from configuration.yaml."""
    hass.data.setdefault(DOMAIN, {})

    if not hass.data[DOMAIN].get("panel_registered"):
        await async_register_panel(hass)
        hass.data[DOMAIN]["panel_registered"] = True

    if not hass.data[DOMAIN].get("ws_registered"):
        async_register_websocket_api(hass)
        hass.data[DOMAIN]["ws_registered"] = True

    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Argus from a config entry."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN][entry.entry_id] = entry.data

    if not hass.data[DOMAIN].get("panel_registered"):
        await async_register_panel(hass)
        hass.data[DOMAIN]["panel_registered"] = True

    if not hass.data[DOMAIN].get("ws_registered"):
        async_register_websocket_api(hass)
        hass.data[DOMAIN]["ws_registered"] = True

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    _LOGGER.info("Argus 0.3.2 successfully set up.")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id, None)
    return unload_ok
