"""Argus Alarm State Machine Definitions and Transition Logic."""
from __future__ import annotations

# Mode constants
STATE_DISARMED = "disarmed"
STATE_ARMED_HOME = "armed_home"
STATE_ARMED_AWAY = "armed_away"
STATE_ARMED_NIGHT = "armed_night"
STATE_ARMED_VACATION = "armed_vacation"
STATE_ARMING = "arming"
STATE_PENDING = "pending"
STATE_TRIGGERED = "triggered"

ARMED_STATES = {
    STATE_ARMED_HOME,
    STATE_ARMED_AWAY,
    STATE_ARMED_NIGHT,
    STATE_ARMED_VACATION,
}

INTRUSION_ACTIVE_STATES = {"on", "open", "unlocked", "active", "motion", "recording"}

MODE_LABELS = {
    STATE_ARMED_HOME: "En Casa",
    STATE_ARMED_AWAY: "Ausente",
    STATE_ARMED_NIGHT: "Noche",
    STATE_ARMED_VACATION: "Vacaciones",
    STATE_DISARMED: "Desarmado",
    STATE_ARMING: "Armando",
    STATE_PENDING: "Pendiente",
    STATE_TRIGGERED: "Disparado",
}


def is_armed_state(state: Any) -> bool:
    """Return whether state is one of the armed states."""
    if not state:
        return False
    val = getattr(state, "value", state)
    return str(val) in ARMED_STATES


def is_active_sensor_state(state: Any) -> bool:
    """Return whether a sensor state value is considered triggered/active."""
    if not state:
        return False
    val = getattr(state, "value", state)
    return str(val).lower() in INTRUSION_ACTIVE_STATES
