"""Atomic server-authoritative dashboard persistence for Argus."""
from __future__ import annotations

from homeassistant.core import HomeAssistant

from .dashboard_merge import merge_dashboard_patch
from .storage import _storage_lock, _store, async_load_ui_data


async def async_save_dashboard_patch(
    hass: HomeAssistant,
    patch: dict,
    *,
    entry_id: str | None = None,
) -> dict:
    """Atomically merge a dashboard patch and return the complete UI data.

    React/Vite/TypeScript is the sole dashboard editor. LocalStorage is only a
    recovery cache. The Home Assistant store is authoritative and every write
    preserves unknown/future dashboard keys.
    """
    if not isinstance(patch, dict):
        raise ValueError("dashboard must be an object")
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass, entry_id)
        current["dashboard"] = merge_dashboard_patch(
            current.get("dashboard"), patch
        )
        await _store(hass, entry_id).async_save(current)
        return current
