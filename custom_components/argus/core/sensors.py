"""Argus Sensor Intrusion & Active State Helper."""
from __future__ import annotations

from typing import Any, Iterable

from .state_machine import INTRUSION_ACTIVE_STATES


def is_sensor_active(state_value: Any) -> bool:
    """Return True if state_value matches intrusion active states (on, open, unlocked, etc.)."""
    if state_value is None:
        return False
    return str(state_value).lower() in INTRUSION_ACTIVE_STATES


def filter_active_sensors(
    sensor_ids: Iterable[str], get_state_func: Any
) -> list[str]:
    """Filter list of sensor entity IDs and return those currently active."""
    active: list[str] = []
    for sid in sensor_ids:
        st = get_state_func(sid)
        if st and is_sensor_active(st.state):
            active.append(sid)
    return active
