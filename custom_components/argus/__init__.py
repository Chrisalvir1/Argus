"""Argus - Premium Smart Alarm & Security Panel for Home Assistant."""
from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from . import const
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
        getattr(const, "VERSION", "0.6.6"),
    )
    return True


async def async_migrate_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Migrate old config entries to the current schema version.

    El config flow declara VERSION = 2. Sin este handler, las entradas creadas
    por versiones antiguas (version 1) harían que HA registrara
    "Migration handler not found" y la integración no cargaría. El esquema de
    datos es compatible hacia adelante (las claves faltantes tienen valores por
    defecto en _load_config y en el options flow), así que basta con rellenar
    cualquier clave ausente y subir el número de versión.
    """
    if entry.version > 2:
        # Entrada de una versión más nueva que este código → no degradar.
        return False

    if entry.version < 2:
        data = dict(entry.data)
        defaults = {
            const.CONF_CODE: "",
            const.CONF_CODE_ARM_REQUIRED: False,
            const.CONF_ARMING_TIME: const.DEFAULT_ARMING_TIME,
            const.CONF_TRIGGER_TIME: const.DEFAULT_TRIGGER_TIME,
            const.CONF_ENTRY_DELAY: const.DEFAULT_ENTRY_DELAY,
            const.CONF_SENSORS_AWAY: [],
            const.CONF_SENSORS_HOME: [],
            const.CONF_SENSORS_NIGHT: [],
            const.CONF_SENSORS_VACATION: [],
            const.CONF_ENTRY_SENSORS: [],
            const.CONF_MQTT_ENABLED: False,
            const.CONF_MQTT_TOPIC_STATE: const.DEFAULT_MQTT_TOPIC_STATE,
            const.CONF_MQTT_TOPIC_COMMAND: const.DEFAULT_MQTT_TOPIC_COMMAND,
        }
        for key, value in defaults.items():
            data.setdefault(key, value)
        hass.config_entries.async_update_entry(entry, data=data, version=2)
        _LOGGER.info("Argus: config entry migrada a la versión 2")

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
