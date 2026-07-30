"""Authorization helpers for Argus."""
from __future__ import annotations

from homeassistant.core import HomeAssistant
from homeassistant.components import websocket_api

from .storage import async_load_ui_data
from .session import async_get_session_manager


class ArgusAuthError(Exception):
    """Raised when authorization fails."""
    def __init__(self, code: str, message: str) -> None:
        self.code = code
        self.message = message
        super().__init__(message)


def _get_ha_actor(connection: websocket_api.ActiveConnection) -> tuple[str, str]:
    user = getattr(connection, "user", None)
    user_id = str(getattr(user, "id", "unknown"))
    return user_id, str(getattr(user, "name", None) or "Home Assistant administrator")


def _require_ha_admin(connection: websocket_api.ActiveConnection) -> None:
    user = getattr(connection, "user", None)
    if not user or not getattr(user, "is_admin", False):
        raise ArgusAuthError("unauthorized", "Requires Home Assistant administrator privileges")


async def _get_argus_profile(hass: HomeAssistant, entry_id: str, argus_user_id: str) -> dict | None:
    data = await async_load_ui_data(hass, entry_id)
    for u in data.get("users", []):
        if u.get("id") == argus_user_id:
            return u
    return None


async def _require_argus_session(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, entry_id: str
) -> tuple[dict, str]:
    """Return (ArgusProfile, HA_Actor_ID). Raises if no valid session."""
    user = getattr(connection, "user", None)
    if not user:
        raise ArgusAuthError("unauthorized", "Unauthenticated Home Assistant connection")
        
    sm = async_get_session_manager(hass)
    session = sm.get_session(user.id, entry_id)
    if not session:
        raise ArgusAuthError("unauthorized", "Valid Argus session required")
        
    profile = await _get_argus_profile(hass, entry_id, session.argus_user_id)
    if not profile or not profile.get("enabled", True):
        sm.invalidate_session(user.id, entry_id)
        raise ArgusAuthError("unauthorized", "Argus profile is disabled or deleted")
        
    return profile, user.id


async def _require_argus_admin(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, entry_id: str
) -> tuple[dict, str]:
    """Require both HA Admin and Argus Admin. Returns (ArgusProfile, HA_Actor_ID)."""
    _require_ha_admin(connection)
    profile, ha_user_id = await _require_argus_session(hass, connection, entry_id)
    if profile.get("role") != "admin":
        raise ArgusAuthError("unauthorized", "Requires Argus administrator privileges")
    return profile, ha_user_id


async def _require_permission(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, entry_id: str, permission: str
) -> tuple[dict, str]:
    """Require specific permission or admin role. Returns (ArgusProfile, HA_Actor_ID)."""
    profile, ha_user_id = await _require_argus_session(hass, connection, entry_id)
    if profile.get("role") == "admin":
        return profile, ha_user_id
        
    if not profile.get("permissions", {}).get(permission, False):
        raise ArgusAuthError("unauthorized", f"Requires Argus permission: {permission}")
        
    return profile, ha_user_id
