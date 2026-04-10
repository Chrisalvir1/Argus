"""Local UI storage helpers for Argus."""
from __future__ import annotations

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN

_STORAGE_VERSION = 1
_STORAGE_KEY = f"{DOMAIN}.ui"


def _default_payload() -> dict:
    return {
        "zones": [],
        "dashboard": {
            "layout": "grid",
            "dense": False,
        },
    }


async def async_load_ui_data(hass: HomeAssistant) -> dict:
    """Load saved Argus UI data from HA storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    data = await store.async_load()
    return data or _default_payload()


async def async_save_ui_data(hass: HomeAssistant,  dict) -> dict:
    """Persist Argus UI data to HA storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    payload = _default_payload()
    payload.update(data or {})
    await store.async_save(payload)
    return payload
