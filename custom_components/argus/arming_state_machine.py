"""Pure decisions for Argus sensor-wait arming transitions.

This module intentionally has no Home Assistant imports so the security-critical
transition rules can be executed as real unit tests.
"""
from __future__ import annotations

from typing import NamedTuple

_ACTIVE_VALUES = frozenset({
    "on", "open", "opening", "unlocked", "active", "motion", "detected",
    "wet", "problem", "unsafe", "recording",
})
_CLOSED_VALUES = frozenset({
    "off", "closed", "closing", "locked", "locking", "standby", "safe",
    "clear", "cerrado", "idle", "inactive",
})
_UNAVAILABLE_VALUES = frozenset({"unknown", "unavailable", "none", ""})


class ArmingWaitDecision(NamedTuple):
    """Result of reconciling one pending arming request."""

    current_open: tuple[str, ...]
    recently_closed: tuple[str, ...]
    recently_opened: tuple[str, ...]
    complete: bool
    reason: str


def unique_ids(values) -> tuple[str, ...]:
    """Return stable, non-empty entity IDs without duplicates."""
    return tuple(dict.fromkeys(str(value) for value in values if value))


def is_active_sensor_state(entity_id: str, state_value: object) -> bool:
    """Normalize common HA/Aqara contact, lock, and cover states."""
    value = "" if state_value is None else str(state_value).strip().lower()
    if value in _UNAVAILABLE_VALUES or value in _CLOSED_VALUES:
        return False
    if value in _ACTIVE_VALUES:
        return True
    domain = str(entity_id).partition(".")[0]
    if domain == "binary_sensor":
        return value == "on"
    if domain == "lock":
        return value not in {"locked", "locking"}
    if domain == "cover":
        return value not in {"closed", "closing"}
    return False


def decide_arming_wait(
    previous_open,
    current_open,
    *,
    sensor_wait_started: bool,
    delay_elapsed: bool,
) -> ArmingWaitDecision:
    """Decide whether a pending arming request can commit.

    If the request genuinely began blocked by open sensors, closing the final
    blocker completes immediately. A separate exit countdown is only required
    when the request did not begin in sensor-wait mode.
    """
    previous = unique_ids(previous_open)
    current = unique_ids(current_open)
    previous_set = set(previous)
    current_set = set(current)
    closed = tuple(entity_id for entity_id in previous if entity_id not in current_set)
    opened = tuple(entity_id for entity_id in current if entity_id not in previous_set)

    if current:
        complete = False
        reason = "blocking_sensors"
    elif sensor_wait_started:
        complete = True
        reason = "sensors_cleared"
    elif delay_elapsed:
        complete = True
        reason = "delay_elapsed"
    else:
        complete = False
        reason = "arming_delay"

    return ArmingWaitDecision(current, closed, opened, complete, reason)
