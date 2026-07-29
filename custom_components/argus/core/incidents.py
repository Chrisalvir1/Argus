"""Argus Correlated Incident Engine & Command Center Helper."""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
import uuid
from typing import Any, Dict, List, Optional


class IncidentSeverity(str, Enum):
    CRITICAL = "critical"  # Life safety: Smoke, Gas, CO, SOS/Panic
    HIGH = "high"          # Confirmed multi-sensor intrusion
    MEDIUM = "medium"      # Single sensor intrusion during armed state
    LOW = "low"            # Minor anomaly / unconfirmed signal


class IncidentStatus(str, Enum):
    OPEN = "open"
    CONFIRMED = "confirmed"
    FALSE_ALARM = "false_alarm"
    RESOLVED = "resolved"


LIFE_SAFETY_CLASSES = {"smoke", "gas", "co", "carbon_monoxide", "fire", "heat", "safety"}


@dataclass
class IncidentEvent:
    sensor_id: str
    timestamp: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    area_id: str = "default_area"
    state_value: str = "on"
    device_class: Optional[str] = None


@dataclass
class Incident:
    id: str
    title: str
    first_sensor: str
    sensor_sequence: List[IncidentEvent] = field(default_factory=list)
    area_id: str = "default_area"
    severity: IncidentSeverity = IncidentSeverity.MEDIUM
    confidence_score: float = 0.5
    status: IncidentStatus = IncidentStatus.OPEN
    evidence: List[Dict[str, Any]] = field(default_factory=list)
    executed_actions: List[Dict[str, Any]] = field(default_factory=list)
    pending_actions: List[Dict[str, Any]] = field(default_factory=list)
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    updated_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    closed_at: Optional[str] = None
    closed_reason: Optional[str] = None

    def add_sensor_event(self, event: IncidentEvent) -> None:
        self.sensor_sequence.append(event)
        self.updated_at = datetime.now(timezone.utc).isoformat()
        # Increase confidence score with multi-sensor sequence
        count = len(self.sensor_sequence)
        if count >= 3:
            self.confidence_score = 0.98
            if self.severity == IncidentSeverity.MEDIUM:
                self.severity = IncidentSeverity.HIGH
        elif count == 2:
            self.confidence_score = 0.85
            if self.severity == IncidentSeverity.MEDIUM:
                self.severity = IncidentSeverity.HIGH


class IncidentEngine:
    """Deterministic Multi-Sensor Incident Correlator."""

    def __init__(self, correlation_window_seconds: int = 60) -> None:
        self.correlation_window = correlation_window_seconds
        self.active_incidents: Dict[str, Incident] = {}

    def process_sensor_event(
        self, event: IncidentEvent, mode: str = "armed_away"
    ) -> Incident:
        """Process incoming sensor signal, correlate or create new incident."""
        dev_cls = (event.device_class or "").lower()

        # Life Safety / Panic: ALWAYS CRITICAL, instant priority 1.0 confidence
        if dev_cls in LIFE_SAFETY_CLASSES or "panic" in event.sensor_id or "sos" in event.sensor_id:
            inc_id = f"inc_{uuid.uuid4().hex[:8]}"
            incident = Incident(
                id=inc_id,
                title=f"Emergencia de Seguridad ({dev_cls or 'SOS'})",
                first_sensor=event.sensor_id,
                sensor_sequence=[event],
                area_id=event.area_id,
                severity=IncidentSeverity.CRITICAL,
                confidence_score=1.0,
                status=IncidentStatus.OPEN,
            )
            self.active_incidents[inc_id] = incident
            return incident

        # Look for active incident in same area within correlation window
        for inc in self.active_incidents.values():
            if inc.status in (IncidentStatus.OPEN, IncidentStatus.CONFIRMED) and inc.area_id == event.area_id:
                inc.add_sensor_event(event)
                return inc

        # Otherwise create new correlated incident
        inc_id = f"inc_{uuid.uuid4().hex[:8]}"
        incident = Incident(
            id=inc_id,
            title=f"Intrusión detectada en {event.area_id}",
            first_sensor=event.sensor_id,
            sensor_sequence=[event],
            area_id=event.area_id,
            severity=IncidentSeverity.MEDIUM,
            confidence_score=0.6,
            status=IncidentStatus.OPEN,
        )
        self.active_incidents[inc_id] = incident
        return incident

    def confirm_incident(self, incident_id: str, actor: str) -> Optional[Incident]:
        inc = self.active_incidents.get(incident_id)
        if inc:
            inc.status = IncidentStatus.CONFIRMED
            inc.confidence_score = 1.0
            inc.executed_actions.append({"action": "confirm", "actor": actor, "ts": datetime.now(timezone.utc).isoformat()})
            inc.updated_at = datetime.now(timezone.utc).isoformat()
        return inc

    def mark_false_alarm(self, incident_id: str, actor: str) -> Optional[Incident]:
        inc = self.active_incidents.get(incident_id)
        if inc:
            inc.status = IncidentStatus.FALSE_ALARM
            inc.closed_at = datetime.now(timezone.utc).isoformat()
            inc.closed_reason = f"Marked false alarm by {actor}"
            inc.executed_actions.append({"action": "false_alarm", "actor": actor, "ts": datetime.now(timezone.utc).isoformat()})
        return inc

    def resolve_incident(self, incident_id: str, actor: str, reason: str = "Resolved") -> Optional[Incident]:
        inc = self.active_incidents.get(incident_id)
        if inc:
            inc.status = IncidentStatus.RESOLVED
            inc.closed_at = datetime.now(timezone.utc).isoformat()
            inc.closed_reason = reason
            inc.executed_actions.append({"action": "resolve", "actor": actor, "reason": reason, "ts": datetime.now(timezone.utc).isoformat()})
        return inc
