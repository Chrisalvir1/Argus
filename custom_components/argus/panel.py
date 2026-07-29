"""Frontend panel registration and bounded media upload for Argus."""
from __future__ import annotations

import logging
import os
from pathlib import Path
import tempfile
import uuid

from aiohttp import web
from homeassistant.components import panel_custom
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.core import HomeAssistant

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


def _append_chunk(path: str, chunk: bytes) -> None:
    with open(path, "ab") as handle:
        handle.write(chunk)


def _create_tempfile(directory: str) -> str:
    os.makedirs(directory, exist_ok=True)
    descriptor, path = tempfile.mkstemp(dir=directory, prefix=".argus-")
    os.close(descriptor)
    return path


class ArgusUploadView(HomeAssistantView):
    """Authenticated API view for Argus background uploads."""

    url = "/api/argus/upload"
    name = "api:argus:upload"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass = request.app["hass"]
        user = request["hass_user"]
        if not user.is_admin:
            return self.json({"success": False, "error": "Administrator access required"}, status=403)

        temporary_path: str | None = None
        try:
            reader = await request.multipart()
            field = await reader.next()
            if not field or field.name != "file" or not field.filename:
                return self.json({"success": False, "error": "No file field found"}, status=400)

            extension = Path(os.path.basename(field.filename)).suffix.lower()
            if extension not in _ALLOWED_MEDIA_EXTENSIONS:
                return self.json({"success": False, "error": "Unsupported media type"}, status=400)
            if request.content_length and request.content_length > _MAX_UPLOAD_BYTES:
                return self.json({"success": False, "error": "File exceeds the 50 MB limit"}, status=413)

            upload_dir = hass.config.path("www", "argus")
            filename = f"{uuid.uuid4().hex}{extension}"
            target_path = os.path.join(upload_dir, filename)
            temporary_path = await hass.async_add_executor_job(_create_tempfile, upload_dir)

            written = 0
            while True:
                chunk = await field.read_chunk(size=64 * 1024)
                if not chunk:
                    break
                written += len(chunk)
                if written > _MAX_UPLOAD_BYTES:
                    return self.json({"success": False, "error": "File exceeds the 50 MB limit"}, status=413)
                await hass.async_add_executor_job(_append_chunk, temporary_path, chunk)

            if not written:
                return self.json({"success": False, "error": "Empty file"}, status=400)
            await hass.async_add_executor_job(os.replace, temporary_path, target_path)
            temporary_path = None
            return self.json({"success": True, "url": f"/local/argus/{filename}"})
        except Exception:  # noqa: BLE001
            _LOGGER.exception("Argus media upload failed")
            return self.json({"success": False, "error": "Upload failed"}, status=500)
        finally:
            if temporary_path:
                try:
                    await hass.async_add_executor_job(os.unlink, temporary_path)
                except FileNotFoundError:
                    pass


async def async_register_panel(hass: HomeAssistant) -> None:
    """Register sidebar panel, static assets and upload view once."""
    hass.data.setdefault(DOMAIN, {})

    if not hass.data[DOMAIN].get(_UPLOAD_VIEW_REGISTERED_KEY):
        hass.http.register_view(ArgusUploadView())
        hass.data[DOMAIN][_UPLOAD_VIEW_REGISTERED_KEY] = True

    if not hass.data[DOMAIN].get(_STATIC_REGISTERED_KEY):
        www_path = Path(__file__).parent / "www"
        await hass.http.async_register_static_paths(
            [StaticPathConfig(f"/api/{DOMAIN}_static", str(www_path), cache_headers=True)]
        )
        hass.data[DOMAIN][_STATIC_REGISTERED_KEY] = True

    if not hass.data[DOMAIN].get(_PANEL_REGISTERED_KEY):
        await panel_custom.async_register_panel(
            hass,
            webcomponent_name="argus-panel",
            frontend_url_path=DOMAIN,
            module_url=f"/api/{DOMAIN}_static/argus-panel.js?v={VERSION}",
            sidebar_title="Argus Home Hub",
            sidebar_icon="mdi:shield-lock-outline",
            require_admin=True,
            config={
                "domain": DOMAIN,
                "card_url": f"/api/{DOMAIN}_static/argus-card.js?v={VERSION}",
            },
        )
        hass.data[DOMAIN][_PANEL_REGISTERED_KEY] = True
        _LOGGER.info("Argus: panel registered in sidebar")
