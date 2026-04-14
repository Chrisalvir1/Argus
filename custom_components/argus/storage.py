"""Local UI storage helpers for Argus."""
from __future__ import annotations

import datetime

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN

_STORAGE_VERSION = 1
_STORAGE_KEY = f"{DOMAIN}.ui"
AUDIT_LOG_MAX = 200


def _default_payload() -> dict:
    return {
        "zones": [],
        "modes": {
            "home": {},
            "away": {},
            "night": {},
            "vacation": {},
        },
        "dashboard": {
            "layout": "grid",
            "dense": False,
        },
        "audit_log": [],
        "advanced": {
            "guest_code": None,
            "guest_code_enabled": False,
        },
        "automations": [],
        "notif_targets": [],
        "users": [],
    }


async def async_load_ui_data(hass: HomeAssistant) -> dict:
    """Load saved Argus UI data from HA storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    data = await store.async_load()
    if not data:
        return _default_payload()
    # Ensure new keys exist in old storage data
    data.setdefault("audit_log", [])
    data.setdefault("advanced", {"guest_code": None, "guest_code_enabled": False})
    data.setdefault("automations", [])
    return data


async def async_save_ui_data(hass: HomeAssistant, data: dict) -> dict:
    """Persist Argus UI data to HA storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    current = await async_load_ui_data(hass)
    current.update(data or {})
    await store.async_save(current)
    return current


async def async_append_audit_log(
    hass: HomeAssistant, action: str, detail: str = "", user: str = "system"
) -> None:
    """Append an event to the Argus audit log (max 200 entries, newest first)."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    current = await async_load_ui_data(hass)
    log: list = current.get("audit_log", [])
    entry = {
        "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "action": action,
        "detail": detail,
        "user": user,
    }
    log.insert(0, entry)
    current["audit_log"] = log[:AUDIT_LOG_MAX]
    await store.async_save(current)


async def async_get_audit_log(hass: HomeAssistant) -> list:
    """Return the audit log list."""
    data = await async_load_ui_data(hass)
    return data.get("audit_log", [])
