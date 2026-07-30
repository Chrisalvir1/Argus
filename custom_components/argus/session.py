"""Backend session management for Argus UI."""
from __future__ import annotations

import time
from dataclasses import dataclass

from homeassistant.core import HomeAssistant

from .const import DOMAIN


@dataclass
class ArgusSession:
    """Represents an active, authenticated Argus UI session."""

    ha_user_id: str
    entry_id: str
    argus_user_id: str
    auth_method: str
    expires_at: float
    auth_version: int = 1


class SessionManager:
    """Manages Argus UI sessions securely in the backend."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the session manager."""
        self.hass = hass
        # Keyed by f"{ha_user_id}:{entry_id}"
        self._sessions: dict[str, ArgusSession] = {}

    def _key(self, ha_user_id: str, entry_id: str) -> str:
        return f"{ha_user_id}:{entry_id}"

    def create_session(
        self,
        ha_user_id: str,
        entry_id: str,
        argus_user_id: str,
        auth_method: str,
        ttl_seconds: int = 86400,
    ) -> ArgusSession:
        """Create or overwrite a session for a specific HA user and Argus instance."""
        session = ArgusSession(
            ha_user_id=ha_user_id,
            entry_id=entry_id,
            argus_user_id=argus_user_id,
            auth_method=auth_method,
            expires_at=time.time() + ttl_seconds,
        )
        self._sessions[self._key(ha_user_id, entry_id)] = session
        return session

    def get_session(self, ha_user_id: str, entry_id: str) -> ArgusSession | None:
        """Retrieve an active session if valid."""
        key = self._key(ha_user_id, entry_id)
        session = self._sessions.get(key)
        if not session:
            return None
            
        if time.time() > session.expires_at:
            self.invalidate_session(ha_user_id, entry_id)
            return None
            
        return session

    def invalidate_session(self, ha_user_id: str, entry_id: str) -> None:
        """Invalidate a session."""
        self._sessions.pop(self._key(ha_user_id, entry_id), None)

    def invalidate_all_for_argus_user(self, entry_id: str, argus_user_id: str) -> None:
        """Invalidate all sessions for a specific Argus user (e.g. after password change)."""
        to_remove = []
        for key, session in self._sessions.items():
            if session.entry_id == entry_id and session.argus_user_id == argus_user_id:
                to_remove.append(key)
        for key in to_remove:
            self._sessions.pop(key, None)

def async_get_session_manager(hass: HomeAssistant) -> SessionManager:
    """Get or create the Argus SessionManager."""
    key = f"{DOMAIN}_session_manager"
    if key not in hass.data:
        hass.data[key] = SessionManager(hass)
    return hass.data[key]
