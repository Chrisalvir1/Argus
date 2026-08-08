"""Argus-specific HomeKit transition compatibility.

HomeKit has no explicit current-state value for "arming". Home Assistant
correctly maps an ARMING current state to DISARMED, which makes Apple Home show
an in-progress transition when the target differs. However, Home Assistant
maps every ARMING target to Away. Argus adds the requested mode as an entity
attribute; this adapter preserves that target only for marked Argus entities.
"""
from __future__ import annotations

import logging
from collections.abc import Mapping
from typing import Any

_LOGGER = logging.getLogger(__name__)
_INSTALLED = False
_LISTENER_UNSUB = None
_MARKER_ATTRIBUTE = "argus_homekit_transition"
_TARGET_ATTRIBUTE = "arming_target"
_VALID_TARGETS = {
    "armed_home",
    "armed_away",
    "armed_night",
    "armed_vacation",
}


def resolve_argus_arming_target(
    state: Any,
    attributes: Mapping[str, Any] | None,
) -> str | None:
    """Return the requested target for a genuine Argus arming transition."""
    state_value = getattr(state, "value", state)
    if state_value != "arming" or not isinstance(attributes, Mapping):
        return None
    if attributes.get(_MARKER_ATTRIBUTE) is not True:
        return None
    target = getattr(attributes.get(_TARGET_ATTRIBUTE), "value", attributes.get(_TARGET_ATTRIBUTE))
    return target if target in _VALID_TARGETS else None


def _patch_homekit_security_system() -> bool:
    """Patch HomeKit target selection without changing other alarm panels."""
    global _INSTALLED
    try:
        from homeassistant.components.homekit import type_security_systems as homekit
        from homeassistant.core import callback
    except (ImportError, ModuleNotFoundError):
        return False

    security_system = getattr(homekit, "SecuritySystem", None)
    if security_system is None:
        _LOGGER.warning("Argus: HomeKit SecuritySystem API is unavailable")
        return False
    if getattr(security_system, "_argus_arming_target_patch", False):
        _INSTALLED = True
        return True

    original_update = security_system.async_update_state
    target_values = {
        "armed_home": homekit.HK_ALARM_STAY_ARMED,
        "armed_away": homekit.HK_ALARM_AWAY_ARMED,
        "armed_night": homekit.HK_ALARM_NIGHT_ARMED,
        "armed_vacation": homekit.HK_ALARM_AWAY_ARMED,
    }

    @callback
    def argus_async_update_state(self, new_state):
        original_update(self, new_state)
        target = resolve_argus_arming_target(
            new_state.state,
            new_state.attributes,
        )
        if target is None:
            return
        try:
            self.char_target_state.set_value(target_values[target])
        except Exception:  # HomeKit must never break the Argus state machine.
            _LOGGER.exception(
                "Argus: failed to preserve HomeKit arming target %s for %s",
                target,
                getattr(self, "entity_id", "unknown"),
            )
            return
        _LOGGER.debug(
            "Argus: HomeKit transition for %s keeps target %s",
            getattr(self, "entity_id", "unknown"),
            target,
        )

    security_system.async_update_state = argus_async_update_state
    security_system._argus_arming_target_patch = True
    _INSTALLED = True
    return True


def install_homekit_runtime(hass) -> bool:
    """Install now, or immediately after HomeKit becomes available."""
    global _LISTENER_UNSUB
    if _patch_homekit_security_system():
        return True
    if _LISTENER_UNSUB is not None:
        return False

    def _component_loaded(event):
        global _LISTENER_UNSUB
        if event.data.get("component") != "homekit":
            return
        if not _patch_homekit_security_system():
            return
        unsubscribe = _LISTENER_UNSUB
        _LISTENER_UNSUB = None
        if unsubscribe:
            unsubscribe()

    _LISTENER_UNSUB = hass.bus.async_listen("component_loaded", _component_loaded)
    return False
