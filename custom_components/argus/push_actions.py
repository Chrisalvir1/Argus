"""One-time Companion App actions tied to the current alarm transition."""

from __future__ import annotations

import logging
import secrets
import time

from homeassistant.exceptions import HomeAssistantError

_LOGGER = logging.getLogger(__name__)
_TIMEOUT = 180
_LABELS = {
    "ARGUS_DISARM": "Desarmar",
    "ARGUS_FORCE_ARM": "Armar con bypass",
    "ARGUS_RETRY_ARM": "Volver a comprobar sensores",
}


def notification_actions(panel, *actions: str) -> dict:
    if panel._ui_config.get("push_actions_enabled") is not True:
        return {}
    tokens = panel._argus_push_tokens = {}
    revision = panel._output_revision
    buttons = []
    for action in actions:
        identifier = f"{action}_{secrets.token_urlsafe(18)}"
        tokens[identifier] = (action, revision, time.monotonic() + _TIMEOUT)
        buttons.append({"action": identifier, "title": _LABELS[action], "authenticationRequired": True})
    return {"actions": buttons}


async def handle_notification_action(panel, event) -> None:
    """Process only a live action attributed to an authenticated HA user."""
    if panel._ui_config.get("push_actions_enabled") is not True:
        return
    identifier = event.data.get("action")
    if not isinstance(identifier, str) or not event.context.user_id:
        return
    tokens = getattr(panel, "_argus_push_tokens", {})
    if (token := tokens.get(identifier)) is None:
        return
    action, revision, expires = token
    if revision != panel._output_revision or expires <= time.monotonic():
        tokens.pop(identifier, None)
        return
    permission = {
        "ARGUS_DISARM": "disarm",
        "ARGUS_FORCE_ARM": "force_arm",
        "ARGUS_RETRY_ARM": "arm",
    }[action]
    try:
        await panel._require_alarm_actor_permission(permission, context=event.context)
        if tokens is not getattr(panel, "_argus_push_tokens", None) or revision != panel._output_revision:
            return
        if tokens.pop(identifier, None) is None:
            return
        if action == "ARGUS_DISARM":
            # The existing service enforces any required PIN. Push data never carries one.
            await panel.hass.services.async_call(
                "alarm_control_panel", "alarm_disarm", {"entity_id": panel.entity_id},
                blocking=True, context=event.context,
            )
        elif action == "ARGUS_FORCE_ARM":
            if panel._code_arm_required:
                return
            await panel.async_force_waiting_arm()
        elif panel._arm_request:
            await panel._async_recheck_arm_request()
    except HomeAssistantError:
        _LOGGER.info("Argus rejected a Companion notification action")
