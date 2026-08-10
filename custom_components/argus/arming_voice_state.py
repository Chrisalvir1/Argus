"""Pure transition resolver for Argus arming-wait announcements."""
from __future__ import annotations

from typing import Iterable


def resolve_wait_announcement(previous_open: Iterable[str], current_open: Iterable[str]) -> dict | None:
    """Return the deterministic announcement phase and sensor transition.

    A real closure always wins over the generic "last sensor" phase so Argus
    announces both the sensor that closed and every sensor still blocking the
    requested mode.
    """
    previous = list(dict.fromkeys(previous_open))
    current = list(dict.fromkeys(current_open))
    if previous == current:
        return None

    previous_set = set(previous)
    current_set = set(current)
    closed = [entity_id for entity_id in previous if entity_id not in current_set]
    opened = [entity_id for entity_id in current if entity_id not in previous_set]

    if not current:
        phase = "complete"
    elif closed:
        phase = "remaining"
    elif len(current) == 1 and previous:
        phase = "last"
    else:
        phase = "start"

    return {
        "phase": phase,
        "previous": previous,
        "current": current,
        "closed": closed,
        "opened": opened,
    }
