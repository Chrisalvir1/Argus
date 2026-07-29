"""Argus Home Hub integration lifecycle."""
from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from . import const, websocket_api
from .const import DOMAIN, PLATFORMS
from .feature_policy import (
    cleanup_removed_features,
    install_alarm_policy,
    install_websocket_policy,
)
from .media_websocket import install as install_media_websocket
from .panel import async_register_panel

_LOGGER = logging.getLogger(__name__)
_WS_REGISTERED_KEY = f"{DOMAIN}_ws_registered"


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    hass.data.setdefault(DOMAIN, {})
    cleanup_removed_features(hass)
    install_alarm_policy()
    await async_register_panel(hass)
    _async_register_websocket_once(hass)
    return True


def _async_register_websocket_once(hass: HomeAssistant) -> None:
    if hass.data[DOMAIN].get(_WS_REGISTERED_KEY):
        return
    install_media_websocket(websocket_api)
    install_websocket_policy(websocket_api)
    websocket_api.async_register_websocket_api(hass)
    hass.data[DOMAIN][_WS_REGISTERED_KEY] = True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN][entry.entry_id] = entry.data
    cleanup_removed_features(hass)
    install_alarm_policy()
    await async_register_panel(hass)
    _async_register_websocket_once(hass)
    entry.async_on_unload(entry.add_update_listener(async_reload_entry))
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    _LOGGER.info("Argus integration starting (version %s)", const.VERSION)
    return True


async def async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id, None)
    return unload_ok
