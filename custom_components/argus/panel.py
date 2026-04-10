"""Frontend panel registration for Argus."""
from __future__ import annotations

from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import DOMAIN, NAME


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register the Argus sidebar panel and static frontend assets."""
    www_path = Path(__file__).parent / "www"

    await hass.http.async_register_static_paths(
    [StaticPathConfig(f"/api/{DOMAIN}_static", str(www_path), cache_headers=False)]
)

    panel_custom.async_register_panel(
        hass,
        webcomponent_name="argus-panel",
        frontend_url_path=DOMAIN,
        module_url=f"/api/{DOMAIN}_static/argus-panel.js",
        sidebar_title="Argus Home Center",
        sidebar_icon="mdi:shield-lock-outline",
        require_admin=True,
        config={
            "domain": DOMAIN,
            "card_url": f"/api/{DOMAIN}_static/argus-card.js",
        },
    )
