"""Argus Siren Entity Control Helper."""
from __future__ import annotations

import logging
from typing import Any

_LOGGER = logging.getLogger(__name__)


async def async_turn_on_siren(
    hass: Any, siren_entity_id: str | None, *, duration: int | None = None
) -> None:
    """Turn on siren entity if defined."""
    if not siren_entity_id:
        return
    try:
        domain = siren_entity_id.split(".", 1)[0]
        service = "turn_on"
        service_data: dict[str, Any] = {"entity_id": siren_entity_id}
        if domain == "siren" and duration:
            service_data["duration"] = duration
        await hass.services.async_call(domain, service, service_data, blocking=False)
    except Exception as err:
        _LOGGER.warning("Failed to turn on siren %s: %s", siren_entity_id, err)


async def async_turn_off_siren(hass: Any, siren_entity_id: str | None) -> None:
    """Turn off siren entity if defined."""
    if not siren_entity_id:
        return
    try:
        domain = siren_entity_id.split(".", 1)[0]
        await hass.services.async_call(
            domain, "turn_off", {"entity_id": siren_entity_id}, blocking=False
        )
    except Exception as err:
        _LOGGER.warning("Failed to turn off siren %s: %s", siren_entity_id, err)
