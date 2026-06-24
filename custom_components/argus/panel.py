"""Frontend panel registration for Argus."""
from __future__ import annotations

import logging
import os
from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig, HomeAssistantView
from homeassistant.core import HomeAssistant
from aiohttp import web

from .const import DOMAIN, VERSION

_LOGGER = logging.getLogger(__name__)

_PANEL_REGISTERED_KEY = f"{DOMAIN}_panel_registered"
_STATIC_REGISTERED_KEY = f"{DOMAIN}_static_registered"
_UPLOAD_VIEW_REGISTERED_KEY = f"{DOMAIN}_upload_view_registered"
_MAX_UPLOAD_BYTES = 50 * 1024 * 1024
_ALLOWED_MEDIA_EXTENSIONS = {
    ".avif", ".gif", ".heic", ".heif", ".jpeg", ".jpg", ".m4v",
    ".mov", ".mp4", ".png", ".webm", ".webp",
}


class ArgusUploadView(HomeAssistantView):
    """API view to upload background media files for Argus."""
    
    url = "/api/argus/upload"
    name = "api:argus:upload"
    requires_auth = True
    
    async def post(self, request: web.Request) -> web.Response:
        """Handle file upload."""
        hass = request.app["hass"]
        
        try:
            reader = await request.multipart()
            field = await reader.next()
            
            if not field or field.name != "file":
                return self.json({"success": False, "error": "No file field found"}, status=400)
                
            filename = os.path.basename(field.filename)
            extension = Path(filename).suffix.lower()
            if not filename or extension not in _ALLOWED_MEDIA_EXTENSIONS:
                return self.json({"success": False, "error": "Unsupported media type"}, status=400)
            if request.content_length and request.content_length > _MAX_UPLOAD_BYTES:
                return self.json({"success": False, "error": "File exceeds the 50 MB limit"}, status=413)
            upload_dir = hass.config.path("www", "argus")
            
            def _write_uploaded_file():
                os.makedirs(upload_dir, exist_ok=True)
                return os.path.join(upload_dir, filename)
                
            target_path = await hass.async_add_executor_job(_write_uploaded_file)
            
            file_data = await field.read()
            if len(file_data) > _MAX_UPLOAD_BYTES:
                return self.json({"success": False, "error": "File exceeds the 50 MB limit"}, status=413)
            
            def _write_data(data):
                with open(target_path, "wb") as f:
                    f.write(data)
                    
            await hass.async_add_executor_job(_write_data, file_data)
            
            return self.json({
                "success": True, 
                "url": f"/local/argus/{filename}"
            })
        except Exception as err:
            return self.json({"success": False, "error": str(err)}, status=500)


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register the Argus sidebar panel, static assets, and upload views."""
    hass.data.setdefault(DOMAIN, {})

    # Register upload view only once
    if not hass.data[DOMAIN].get(_UPLOAD_VIEW_REGISTERED_KEY):
        try:
            hass.http.register_view(ArgusUploadView())
            hass.data[DOMAIN][_UPLOAD_VIEW_REGISTERED_KEY] = True
            _LOGGER.debug("Argus: upload view registered")
        except Exception as err:  # noqa: BLE001
            _LOGGER.warning("Argus: could not register upload view: %s", err)

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
                module_url=f"/api/{DOMAIN}_static/argus-panel.js?v={VERSION}",
                sidebar_title="Argus Home Hub",
                sidebar_icon="mdi:shield-lock-outline",
                require_admin=False,
                config={
                    "domain": DOMAIN,
                    "card_url": f"/api/{DOMAIN}_static/argus-card.js?v={VERSION}",
                },
            )
            hass.data[DOMAIN][_PANEL_REGISTERED_KEY] = True
            _LOGGER.info("Argus: panel registered in sidebar")
        except Exception as err:  # noqa: BLE001
            _LOGGER.warning("Argus: could not register panel: %s", err)
