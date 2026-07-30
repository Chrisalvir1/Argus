"""Argus frontend registration."""
from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import DOMAIN, VERSION
from .media import async_register_media_views

_LOGGER = logging.getLogger(__name__)
_PANEL_REGISTERED_KEY = f"{DOMAIN}_panel_registered"
_STATIC_REGISTERED_KEY = f"{DOMAIN}_static_registered"


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register isolated media API, static assets and sidebar panel once."""
    hass.data.setdefault(DOMAIN, {})
    await async_register_media_views(hass)

    if not hass.data[DOMAIN].get(_STATIC_REGISTERED_KEY):
        www_path = Path(__file__).parent / "www"
        await hass.http.async_register_static_paths([
            StaticPathConfig(f"/api/{DOMAIN}_static", str(www_path), cache_headers=True)
        ])
        hass.data[DOMAIN][_STATIC_REGISTERED_KEY] = True

    if not hass.data[DOMAIN].get(_PANEL_REGISTERED_KEY):
        await panel_custom.async_register_panel(
            hass,
            webcomponent_name="argus-panel",
            frontend_url_path=DOMAIN,
            module_url=f"/api/{DOMAIN}_static/argus-bootstrap.js?v={VERSION}",
            sidebar_title="Argus Home Hub",
            sidebar_icon="mdi:shield-lock-outline",
            # Standard HA users must be able to open Argus and select their
            # own profile. Sensitive operations remain protected by the
            # WebSocket permission checks; first-run still requires HA admin.
            require_admin=False,
            config={
                "domain": DOMAIN,
                "card_url": f"/api/{DOMAIN}_static/argus-card.js?v={VERSION}",
            },
        )
        hass.data[DOMAIN][_PANEL_REGISTERED_KEY] = True
        _LOGGER.info("Argus: architectural frontend registered")
