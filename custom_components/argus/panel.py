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
            StaticPathConfig(f"/api/{DOMAIN}_static", str(www_path), cache_headers=False)
        ])
        hass.data[DOMAIN][_STATIC_REGISTERED_KEY] = True

    if not hass.data[DOMAIN].get(_PANEL_REGISTERED_KEY):
        await panel_custom.async_register_panel(
            hass,
            # Version the element name as well as the module URL. Browsers
            # cannot redefine a custom element that an older panel registered.
            webcomponent_name="argus-panel-v2018",
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

    await _async_register_lovelace_resources(hass)


async def _async_register_lovelace_resources(hass: HomeAssistant) -> None:
    """Auto-register argus-bootstrap as a Lovelace resource so custom cards load on all dashboards."""
    url = f"/api/{DOMAIN}_static/argus-bootstrap.js?v={VERSION}"
    try:
        ll_data = hass.data.get("lovelace")
        if ll_data and hasattr(ll_data, "resources"):
            resources = ll_data.resources
            items = []
            if hasattr(resources, "async_get_items"):
                items = resources.async_get_items()
            elif hasattr(resources, "async_items"):
                items = resources.async_items()

            prefix = f"/api/{DOMAIN}_static/argus-bootstrap.js"
            existing = [item for item in items if isinstance(item, dict) and item.get("url", "").startswith(prefix)]

            if not existing and hasattr(resources, "async_create_item"):
                await resources.async_create_item({"res_type": "module", "url": url})
            elif existing and hasattr(resources, "async_update_item"):
                for item in existing:
                    if item.get("url") != url and "id" in item:
                        await resources.async_update_item(item["id"], {"res_type": "module", "url": url})
    except Exception as err:
        _LOGGER.debug("Argus: non-fatal Lovelace resource note: %s", err)

