"""Pure mode-change rules shared by the Argus alarm runtime."""
from __future__ import annotations

ARMED_MODE_STATES = frozenset({"armed_home", "armed_away", "armed_night"})
TRANSITION_STATES = frozenset({"arming", "pending"})


def state_value(state: object) -> str:
    """Normalize a Home Assistant enum or plain state string."""
    return str(getattr(state, "value", state))


def mode_change_block_reason(
    current_state: object,
    target_state: object,
    *,
    alarm_active: bool = False,
) -> str | None:
    """Require a disarm before a mode switch or while a trigger is active."""
    current = state_value(current_state)
    target = state_value(target_state)
    if target not in ARMED_MODE_STATES or current == target:
        return None
    if alarm_active or current == "triggered":
        return "Detén la alarma activa y desarma Argus antes de elegir un modo"
    if current in ARMED_MODE_STATES:
        return "Desarma Argus antes de cambiar el modo de seguridad"
    if current in TRANSITION_STATES:
        return "Cancela el armado o desarma Argus antes de cambiar el modo"
    return None
