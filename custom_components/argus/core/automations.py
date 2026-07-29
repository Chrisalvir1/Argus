"""Argus Local Automation Deterministic Engine."""
from __future__ import annotations

import logging
from typing import Any

_LOGGER = logging.getLogger(__name__)

ALLOWED_SERVICES = {
    "light.turn_on", "light.turn_off", "switch.turn_on", "switch.turn_off",
    "siren.turn_on", "siren.turn_off", "notify.notify", "notify.persistent_notification",
    "script.turn_on", "automation.trigger", "cover.open_cover", "cover.close_cover",
}


def is_service_allowed(domain: str, service: str) -> bool:
    """Return whether local automation service call is permitted."""
    full_name = f"{domain}.{service}".lower()
    return full_name in ALLOWED_SERVICES or domain in {"notify", "light", "switch", "siren"}


async def async_execute_local_action(
    hass: Any, action: dict[str, Any], context: dict[str, Any] | None = None
) -> bool:
    """Execute a single local automation action safely."""
    if not isinstance(action, dict):
        return False
    service_str = str(action.get("service") or "")
    if "." not in service_str:
        return False
    domain, service = service_str.split(".", 1)

    if not is_service_allowed(domain, service):
        _LOGGER.warning("Local automation blocked unpermitted service: %s", service_str)
        return False

    target = action.get("target") or {}
    data = action.get("data") or {}

    service_data = {}
    if isinstance(data, dict):
        service_data.update(data)
    if isinstance(target, dict):
        if "entity_id" in target:
            service_data["entity_id"] = target["entity_id"]

    try:
        await hass.services.async_call(domain, service, service_data, blocking=False)
        return True
    except Exception as err:
        _LOGGER.error("Failed to execute local action %s: %s", service_str, err)
        return False
