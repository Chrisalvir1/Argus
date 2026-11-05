"""Observe sensor transitions without changing alarm processing."""
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


CONTACT_CLASSES = {"door", "window", "garage_door", "opening"}
MOTION_CLASSES = {"motion", "occupancy", "vibration"}


def physical_test_kind(state):
    if state is None or not state.entity_id.startswith("binary_sensor."):
        return None
    device_class = state.attributes.get("device_class")
    if device_class in CONTACT_CLASSES:
        return "contact"
    if device_class in MOTION_CLASSES:
        return "activation"
    return None


def diagnose_sensor(entity_id, state):
    attributes = state.attributes if state else {}
    kind = physical_test_kind(state)
    battery = attributes.get("battery_level")
    battery = battery if type(battery) in (int, float) and 0 <= battery <= 100 else None
    if state is None or state.state in {"unknown", "unavailable", "offline"}:
        category = "unverifiable"
    elif attributes.get("battery_low") is True or (battery is not None and battery <= 20):
        category = "attention"
    elif not entity_id.startswith("binary_sensor."):
        category = "informational"
    else:
        category = "correct"
    return {"entity_id": entity_id, "category": category, "state": state.state if state else None,
            "battery": battery, "physical_test_kind": kind,
            "last_updated": state.last_updated.isoformat() if state else None}


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
        self.zone_id: str | None = None
        self.guided_kinds: dict[str, str] = {}
        self.step_index = 0
        self.step_started_at = self.started_at
        self.opened_at = None
        self.skipped: list[str] = []

    @property
    def current_sensor(self):
        if self.guided_kinds and self.step_index < len(self.all_sensors):
            return self.all_sensors[self.step_index]
        return None

    def control_step(self, action):
        sensor = self.current_sensor
        if not self.active or self.is_expired or sensor is None:
            raise ValueError("No hay un paso activo")
        if action == "continue" and sensor not in self.tested_sensors:
            raise ValueError("El paso todavía no está comprobado")
        if action == "retry":
            self.tested_sensors.pop(sensor, None)
        else:
            if action == "skip" and sensor not in self.tested_sensors:
                self.skipped.append(sensor)
            self.step_index += 1
        self.step_started_at = time.time()
        self.opened_at = None

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
            "zone_id": self.zone_id,
            "mode": "guided" if self.guided_kinds else "free",
            "current_sensor": self.current_sensor,
            "step_phase": (
                "complete" if self.current_sensor is None
                else "verified" if self.current_sensor in self.tested_sensors
                else "close" if self.opened_at is not None
                else "activate"
            ) if self.guided_kinds else None,
            "skipped_sensors": list(self.skipped),
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
        self._cleanup: Dict[str, Any] = {}
        self._reports: dict[str, dict[str, Any]] = {}
        self._sessions: Dict[str, WalkTestSession] = {}

    def status(self, entry_id: str) -> dict[str, Any]:
        session = self.get_session(entry_id)
        return session.to_dict() if session else self._reports.get(
            entry_id, {"active": False, "entry_id": entry_id}
        )

    def get_session(self, entry_id: str) -> Optional[WalkTestSession]:
        session = self._sessions.get(entry_id)
        if session and session.is_expired:
            self.stop_walk_test(entry_id, reason="expired")
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
        guided_kinds: dict[str, str] | None = None,
        zone_id: str | None = None,
    ) -> WalkTestSession:
        """Start a new walk test session."""
        existing = self.get_session(entry_id)
        if existing:
            return existing

        from homeassistant.helpers.event import async_call_later, async_track_state_change_event

        session = WalkTestSession(entry_id, list(dict.fromkeys(sensors)), timeout_seconds, started_by)
        session.zone_id = zone_id
        session.guided_kinds = guided_kinds or {}
        activation_states = {"on", "open", "opening", "motion", "detected", "vibration"}
        inactive_states = {"off", "closed", "locked", "clear", "idle"}

        @callback
        def observe(event):
            entity_id = event.data["entity_id"]
            old = event.data.get("old_state")
            new = event.data.get("new_state")
            timestamp = event.time_fired.timestamp()
            if (
                self._sessions.get(entry_id) is not session
                or not session.active or session.is_expired
                or timestamp <= session.step_started_at
                or old is None or new is None
                or entity_id in session.tested_sensors
            ):
                return
            activation = old.state in inactive_states and new.state in activation_states
            if session.guided_kinds:
                if entity_id != session.current_sensor:
                    return
                if session.guided_kinds[entity_id] == "contact":
                    if activation:
                        session.opened_at = timestamp
                        self.publish(session)
                        return
                    if new.state in {"unknown", "unavailable", "offline"}:
                        session.opened_at = None
                        self.publish(session)
                        return
                    if not (session.opened_at is not None and timestamp > session.opened_at
                            and old.state in activation_states and new.state in inactive_states):
                        return
                elif not activation:
                    return
            elif not activation:
                return
            if session.record_trigger(entity_id, new.state, new.name):
                self.publish(session)

        @callback
        def expire(_now):
            if self._sessions.get(entry_id) is session:
                self.stop_walk_test(entry_id, reason="expired")

        unsubscribe = async_track_state_change_event(self.hass, session.all_sensors, observe)
        cancel_timeout = async_call_later(self.hass, timeout_seconds, expire)
        self._cleanup[entry_id] = (unsubscribe, cancel_timeout)
        self._reports.pop(entry_id, None)
        self._sessions[entry_id] = session
        self.hass.bus.async_fire("argus_walk_test_started", session.to_dict())
        self.publish(session)
        return session

    def publish(self, session: WalkTestSession) -> None:
        self.hass.bus.async_fire("argus_walk_test_updated", session.to_dict())

    def stop_walk_test(self, entry_id: str, *, reason: str = "finished") -> Optional[Dict[str, Any]]:
        """Stop an active walk test and return the final report."""
        session = self._sessions.pop(entry_id, None)
        if not session:
            return None
        for cleanup in self._cleanup.pop(entry_id, ()):
            cleanup()
        session.active = False
        data = session.to_dict()
        data["reason"] = reason
        self._reports[entry_id] = data
        data["unverified_sensors"] = [sensor for sensor in session.all_sensors
                                      if sensor not in session.tested_sensors]
        self.hass.bus.async_fire("argus_walk_test_stopped", data)
        self.hass.bus.async_fire("argus_walk_test_updated", data)
        return data


def async_get_walk_test_manager(hass: HomeAssistant) -> WalkTestManager:
    """Return the global WalkTestManager instance for Home Assistant."""
    key = "argus_walk_test_manager"
    if key not in hass.data:
        hass.data[key] = WalkTestManager(hass)
    return hass.data[key]
