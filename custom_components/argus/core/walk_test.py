"""Argus Sensor Walk Test Engine.

Allows physical testing of all configured intrusion sensors without triggering
real alarms, sirens, or emergency notifications. Records verified sensors in real
time with audit logging and automatic timeout.
"""
from __future__ import annotations

import datetime
import logging
import time
from typing import Any, Dict, List, Optional

try:
    from homeassistant.core import HomeAssistant, callback
except ImportError:
    HomeAssistant = Any  # type: ignore[assignment, misc]
    callback = lambda f: f  # type: ignore[assignment]

_LOGGER = logging.getLogger(__name__)
DEFAULT_WALK_TEST_TIMEOUT_SECONDS = 900  # 15 minutes max timeout


class WalkTestSession:
    """Represents an active walk test session for an Argus alarm instance."""

    def __init__(
        self,
        entry_id: str,
        sensors: List[str],
        timeout_seconds: int = DEFAULT_WALK_TEST_TIMEOUT_SECONDS,
        started_by: str = "Admin",
    ) -> None:
        self.entry_id = entry_id
        self.all_sensors = list(sensors)
        self.tested_sensors: Dict[str, Dict[str, Any]] = {}
        self.started_at = time.time()
        self.expires_at = self.started_at + timeout_seconds
        self.started_by = started_by
        self.active = True

    @property
    def is_expired(self) -> bool:
        return time.time() > self.expires_at

    def record_trigger(self, entity_id: str, state_value: str, friendly_name: Optional[str] = None) -> bool:
        """Record a sensor trigger during the walk test."""
        if not self.active or self.is_expired:
            return False
        now_iso = datetime.datetime.now(datetime.timezone.utc).isoformat()
        is_new = entity_id not in self.tested_sensors
        self.tested_sensors[entity_id] = {
            "entity_id": entity_id,
            "name": friendly_name or entity_id,
            "state": state_value,
            "verified_at": now_iso,
        }
        return is_new

    def to_dict(self) -> Dict[str, Any]:
        """Return JSON-serializable status of the walk test."""
        remaining_seconds = max(0, int(self.expires_at - time.time())) if self.active and not self.is_expired else 0
        return {
            "active": self.active and not self.is_expired,
            "entry_id": self.entry_id,
            "started_by": self.started_by,
            "started_at": self.started_at,
            "remaining_seconds": remaining_seconds,
            "total_sensors": len(self.all_sensors),
            "tested_count": len(self.tested_sensors),
            "all_sensors": self.all_sensors,
            "tested_sensors": self.tested_sensors,
            "progress_percent": int((len(self.tested_sensors) / len(self.all_sensors) * 100)) if self.all_sensors else 100,
        }


class WalkTestManager:
    """Manages active walk tests across instances."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self._sessions: Dict[str, WalkTestSession] = {}

    def get_session(self, entry_id: str) -> Optional[WalkTestSession]:
        session = self._sessions.get(entry_id)
        if session and session.is_expired:
            session.active = False
            self._sessions.pop(entry_id, None)
            return None
        return session

    def is_active(self, entry_id: str) -> bool:
        session = self.get_session(entry_id)
        return bool(session and session.active and not session.is_expired)

    def start_walk_test(
        self,
        entry_id: str,
        sensors: List[str],
        timeout_seconds: int = DEFAULT_WALK_TEST_TIMEOUT_SECONDS,
        started_by: str = "Admin",
    ) -> WalkTestSession:
        """Start a new walk test session."""
        session = WalkTestSession(entry_id, sensors, timeout_seconds, started_by)
        self._sessions[entry_id] = session
        self.hass.bus.async_fire("argus_walk_test_started", session.to_dict())
        return session

    def stop_walk_test(self, entry_id: str) -> Optional[Dict[str, Any]]:
        """Stop an active walk test and return the final report."""
        session = self._sessions.pop(entry_id, None)
        if not session:
            return None
        session.active = False
        data = session.to_dict()
        self.hass.bus.async_fire("argus_walk_test_stopped", data)
        return data


def async_get_walk_test_manager(hass: HomeAssistant) -> WalkTestManager:
    """Return the global WalkTestManager instance for Home Assistant."""
    key = "argus_walk_test_manager"
    if key not in hass.data:
        hass.data[key] = WalkTestManager(hass)
    return hass.data[key]
