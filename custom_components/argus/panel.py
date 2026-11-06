"""Argus frontend registration."""
from __future__ import annotations

import asyncio
from hashlib import sha256
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
_PANEL_LOCK_KEY = f"{DOMAIN}_panel_setup_lock"
_OPTIONAL_SETUP_KEY = f"{DOMAIN}_panel_optional_setup_started"


def _frontend_revision() -> str:
    """Invalidate the entry module whenever the bootstrap or bundle changes."""
    www = Path(__file__).parent / "www"
    digest = sha256()
    for filename in ("argus-bootstrap.js", "react-dist/argus-frontend.js"):
        digest.update((www / filename).read_bytes())
    return digest.hexdigest()[:16]


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register Argus assets/panel promptly and defer optional resource APIs."""
    revision = await hass.async_add_executor_job(_frontend_revision)
    data = hass.data.setdefault(DOMAIN, {})
    lock = data.setdefault(_PANEL_LOCK_KEY, asyncio.Lock())
    async with lock:
        if not data.get(_STATIC_REGISTERED_KEY):
            www_path = Path(__file__).parent / "www"
            await hass.http.async_register_static_paths([
                StaticPathConfig(f"/api/{DOMAIN}_static", str(www_path), cache_headers=False)
            ])
            data[_STATIC_REGISTERED_KEY] = True

        try:
            from homeassistant.components.frontend import add_extra_js_url
            # Register as ES5 (non-module) so HA injects it as a regular <script> tag
            # before any ES module, including HACS frontend.
            add_extra_js_url(hass, f"/api/{DOMAIN}_static/argus-brand-patch.js?v={VERSION}", es5=True)
            add_extra_js_url(hass, f"/api/{DOMAIN}_static/argus-brand-patch.js?v={VERSION}", es5=False)
        except Exception as err:
            _LOGGER.debug("Argus: non-fatal extra js registration note: %s", err)

        if not data.get(_PANEL_REGISTERED_KEY):
            await panel_custom.async_register_panel(
                hass,
                # Version the element name as well as the module URL. Browsers
                # cannot redefine a custom element that an older panel registered.
                webcomponent_name="argus-panel-v2018",
                frontend_url_path=DOMAIN,
                module_url=f"/api/{DOMAIN}_static/argus-bootstrap.js?v={VERSION}&rev={revision}",
                sidebar_title="Argus Home Hub",
                sidebar_icon="mdi:shield-lock-outline",
                require_admin=False,
                config={
                    "domain": DOMAIN,
                    "card_url": f"/api/{DOMAIN}_static/argus-card.js?v={VERSION}",
                },
            )
            data[_PANEL_REGISTERED_KEY] = True
            _LOGGER.info("Argus: architectural frontend registered")

        if not data.get(_OPTIONAL_SETUP_KEY):
            data[_OPTIONAL_SETUP_KEY] = True
            hass.async_create_task(_async_setup_optional_panel_resources(hass))


async def _async_setup_optional_panel_resources(hass: HomeAssistant) -> None:
    """Initialize nonessential media/Lovelace APIs without blocking the panel."""
    try:
        await async_register_media_views(hass)
        await _async_register_lovelace_resources(hass)
    except Exception:
        _LOGGER.exception("Argus optional panel resources could not be initialized")


async def _async_register_lovelace_resources(hass: HomeAssistant) -> None:
    """Auto-register argus-bootstrap as a Lovelace resource so custom cards load on all dashboards."""
    try:
        ll_data = hass.data.get("lovelace")
        if ll_data and hasattr(ll_data, "resources"):
            resources = ll_data.resources
            # Storage collections load lazily. Calling async_items() before
            # async_get_info() returns no data, which made every Argus setup
            # append another copy of each resource. It also hid old URLs from
            # the version updater. Load first, then update one canonical item
            # and remove duplicate Argus entries while preserving their IDs.
            if hasattr(resources, "async_get_info"):
                await resources.async_get_info()

            items = resources.async_items() if hasattr(resources, "async_items") else []
            if hasattr(items, "__await__"):
                items = await items
            items = items or []

            async def ensure_resource(filename: str) -> None:
                url = f"/api/{DOMAIN}_static/{filename}?v={VERSION}"
                if filename == "argus-bootstrap.js":
                    revision = await hass.async_add_executor_job(_frontend_revision)
                    url += f"&rev={revision}"
                prefix = f"/api/{DOMAIN}_static/{filename}"
                existing = [
                    item for item in items
                    if isinstance(item, dict) and item.get("url", "").split("?", 1)[0] == prefix
                ]
                if not existing:
                    if hasattr(resources, "async_create_item"):
                        await resources.async_create_item({"res_type": "module", "url": url})
                    return

                canonical = existing[0]
                if canonical.get("url") != url and hasattr(resources, "async_update_item"):
                    await resources.async_update_item(canonical["id"], {"res_type": "module", "url": url})
                if hasattr(resources, "async_delete_item"):
                    for duplicate in existing[1:]:
                        await resources.async_delete_item(duplicate["id"])

            await ensure_resource("argus-bootstrap.js")
            await ensure_resource("argus-brand-patch.js")
    except Exception as err:
        _LOGGER.debug("Argus: non-fatal Lovelace resource note: %s", err)

