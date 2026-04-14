"""Frontend panel registration for Argus."""
from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

_PANEL_REGISTERED_KEY = f"{DOMAIN}_panel_registered"
_STATIC_REGISTERED_KEY = f"{DOMAIN}_static_registered"


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register the Argus sidebar panel and static assets. Safe to call multiple times."""
    hass.data.setdefault(DOMAIN, {})

    # Register static paths only once
    if not hass.data[DOMAIN].get(_STATIC_REGISTERED_KEY):
        try:
            www_path = Path(__file__).parent / "www"
            await hass.http.async_register_static_paths(
                [StaticPathConfig(
                    f"/api/{DOMAIN}_static",
                    str(www_path),
                    cache_headers=False,
                )]
            )
            hass.data[DOMAIN][_STATIC_REGISTERED_KEY] = True
            _LOGGER.debug("Argus: static paths registered")
        except Exception as err:  # noqa: BLE001
            _LOGGER.warning("Argus: could not register static paths: %s", err)

    # Register sidebar panel only once
    if not hass.data[DOMAIN].get(_PANEL_REGISTERED_KEY):
        try:
            await panel_custom.async_register_panel(
                hass,
                webcomponent_name="argus-panel",
                frontend_url_path=DOMAIN,
                module_url=f"/api/{DOMAIN}_static/argus-panel.js?v=0.6.12",
                sidebar_title="Argus Home Hub",
                sidebar_icon="mdi:shield-lock-outline",
                require_admin=False,
                config={
                    "domain": DOMAIN,
                    "card_url": f"/api/{DOMAIN}_static/argus-card.js?v=0.6.12",
                },
            )
            hass.data[DOMAIN][_PANEL_REGISTERED_KEY] = True
            _LOGGER.info("Argus: panel registered in sidebar")
        except Exception as err:  # noqa: BLE001
            _LOGGER.warning("Argus: could not register panel: %s", err)
