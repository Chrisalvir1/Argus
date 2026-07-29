"""Private, signed media storage for Argus."""
from __future__ import annotations

import hashlib
import hmac
import logging
import mimetypes
import os
from pathlib import Path
import secrets
import tempfile
import uuid

from aiohttp import web
from homeassistant.components.http import HomeAssistantView
from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)
_MEDIA_STORE_KEY = f"{DOMAIN}.media"
_MEDIA_STORE_VERSION = 1
_MEDIA_MANAGER_KEY = "media_manager"
_MEDIA_VIEWS_KEY = "media_views_registered"
_MAX_UPLOAD_BYTES = 50 * 1024 * 1024
_ALLOWED_EXTENSIONS = {
    ".avif", ".gif", ".heic", ".heif", ".jpeg", ".jpg", ".m4v",
    ".mov", ".mp4", ".png", ".webm", ".webp",
}


class ArgusMediaManager:
    """Own private media files and issue tamper-resistant URLs."""

    def __init__(self, hass: HomeAssistant) -> None:
        self.hass = hass
        self.directory = Path(hass.config.path(".storage", "argus_media"))
        self._store = Store(hass, _MEDIA_STORE_VERSION, _MEDIA_STORE_KEY)
        self._secret = ""

    async def async_initialize(self) -> None:
        data = await self._store.async_load() or {}
        secret = data.get("signing_secret") if isinstance(data, dict) else None
        if not isinstance(secret, str) or len(secret) < 64:
            secret = secrets.token_hex(32)
            await self._store.async_save({"signing_secret": secret})
        self._secret = secret
        await self.hass.async_add_executor_job(self.directory.mkdir, 0o700, True, True)

    def _signature(self, filename: str) -> str:
        return hmac.new(
            self._secret.encode(), filename.encode(), hashlib.sha256
        ).hexdigest()

    def signed_url(self, filename: str) -> str:
        return f"/api/argus/media/content/{filename}?sig={self._signature(filename)}"

    def validate_signature(self, filename: str, signature: str) -> bool:
        return bool(signature) and hmac.compare_digest(
            self._signature(filename), signature
        )

    def safe_path(self, filename: str) -> Path | None:
        safe = os.path.basename(filename)
        extension = Path(safe).suffix.lower()
        if safe != filename or extension not in _ALLOWED_EXTENSIONS:
            return None
        path = self.directory / safe
        try:
            path.resolve().relative_to(self.directory.resolve())
        except ValueError:
            return None
        return path

    async def async_save_bytes(self, original_name: str, content: bytes) -> dict:
        extension = Path(os.path.basename(original_name)).suffix.lower()
        if extension not in _ALLOWED_EXTENSIONS:
            raise ValueError("Unsupported media type")
        if not content or len(content) > _MAX_UPLOAD_BYTES:
            raise ValueError("Invalid media size")
        filename = f"{uuid.uuid4().hex}{extension}"
        target = self.directory / filename

        def _write() -> None:
            descriptor, temporary = tempfile.mkstemp(dir=self.directory, prefix=".argus-")
            try:
                with os.fdopen(descriptor, "wb") as handle:
                    handle.write(content)
                    handle.flush()
                    os.fsync(handle.fileno())
                os.replace(temporary, target)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)

        await self.hass.async_add_executor_job(_write)
        return await self.async_describe(filename)

    async def async_describe(self, filename: str) -> dict:
        path = self.safe_path(filename)
        if path is None:
            raise ValueError("Invalid filename")
        stat = await self.hass.async_add_executor_job(path.stat)
        extension = path.suffix.lower()
        return {
            "name": filename,
            "size_bytes": stat.st_size,
            "size_str": (
                f"{stat.st_size / (1024 * 1024):.2f} MB"
                if stat.st_size >= 1024 * 1024
                else f"{stat.st_size / 1024:.2f} KB"
            ),
            "mtime": stat.st_mtime,
            "url": self.signed_url(filename),
            "is_video": extension in {".mp4", ".webm", ".mov", ".m4v"},
        }

    async def async_list(self) -> list[dict]:
        def _names() -> list[str]:
            return [
                item.name for item in self.directory.iterdir()
                if item.is_file() and not item.name.startswith(".")
            ]

        result = []
        for filename in await self.hass.async_add_executor_job(_names):
            try:
                result.append(await self.async_describe(filename))
            except (OSError, ValueError):
                _LOGGER.warning("Ignoring invalid Argus media file: %s", filename)
        return sorted(result, key=lambda item: item["mtime"], reverse=True)

    async def async_delete(self, filename: str) -> bool:
        path = self.safe_path(filename)
        if path is None:
            return False

        def _delete() -> bool:
            if not path.is_file():
                return False
            path.unlink()
            return True

        return await self.hass.async_add_executor_job(_delete)


async def async_get_media_manager(hass: HomeAssistant) -> ArgusMediaManager:
    hass.data.setdefault(DOMAIN, {})
    manager = hass.data[DOMAIN].get(_MEDIA_MANAGER_KEY)
    if manager is None:
        manager = ArgusMediaManager(hass)
        await manager.async_initialize()
        hass.data[DOMAIN][_MEDIA_MANAGER_KEY] = manager
    return manager


class ArgusMediaUploadView(HomeAssistantView):
    url = "/api/argus/upload"
    name = "api:argus:upload"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        if not request["hass_user"].is_admin:
            return self.json({"success": False, "error": "Administrator access required"}, status=403)
        hass = request.app["hass"]
        try:
            field = await (await request.multipart()).next()
            if not field or field.name != "file" or not field.filename:
                return self.json({"success": False, "error": "No file field found"}, status=400)
            chunks = []
            size = 0
            while True:
                chunk = await field.read_chunk(size=64 * 1024)
                if not chunk:
                    break
                size += len(chunk)
                if size > _MAX_UPLOAD_BYTES:
                    return self.json({"success": False, "error": "File exceeds the 50 MB limit"}, status=413)
                chunks.append(chunk)
            descriptor = await (await async_get_media_manager(hass)).async_save_bytes(
                field.filename, b"".join(chunks)
            )
            return self.json({"success": True, **descriptor})
        except ValueError as err:
            return self.json({"success": False, "error": str(err)}, status=400)
        except Exception:  # noqa: BLE001
            _LOGGER.exception("Private Argus media upload failed")
            return self.json({"success": False, "error": "Upload failed"}, status=500)


class ArgusMediaListView(HomeAssistantView):
    url = "/api/argus/media"
    name = "api:argus:media:list"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        if not request["hass_user"].is_admin:
            return self.json({"error": "Administrator access required"}, status=403)
        files = await (await async_get_media_manager(request.app["hass"])).async_list()
        return self.json({"files": files})


class ArgusMediaDeleteView(HomeAssistantView):
    url = "/api/argus/media/{filename}"
    name = "api:argus:media:delete"
    requires_auth = True

    async def delete(self, request: web.Request, filename: str) -> web.Response:
        if not request["hass_user"].is_admin:
            return self.json({"error": "Administrator access required"}, status=403)
        deleted = await (await async_get_media_manager(request.app["hass"])).async_delete(filename)
        return self.json({"success": deleted}, status=200 if deleted else 404)


class ArgusMediaContentView(HomeAssistantView):
    url = "/api/argus/media/content/{filename}"
    name = "api:argus:media:content"
    requires_auth = False

    async def get(self, request: web.Request, filename: str) -> web.StreamResponse:
        manager = await async_get_media_manager(request.app["hass"])
        if not manager.validate_signature(filename, request.query.get("sig", "")):
            raise web.HTTPForbidden()
        path = manager.safe_path(filename)
        if path is None or not await manager.hass.async_add_executor_job(path.is_file):
            raise web.HTTPNotFound()
        response = web.FileResponse(path)
        response.content_type = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
        response.headers["Cache-Control"] = "private, max-age=86400"
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Content-Security-Policy"] = "default-src 'none'; media-src 'self'; img-src 'self'"
        return response


async def async_register_media_views(hass: HomeAssistant) -> None:
    hass.data.setdefault(DOMAIN, {})
    if hass.data[DOMAIN].get(_MEDIA_VIEWS_KEY):
        return
    await async_get_media_manager(hass)
    for view in (
        ArgusMediaUploadView(), ArgusMediaListView(),
        ArgusMediaDeleteView(), ArgusMediaContentView(),
    ):
        hass.http.register_view(view)
    hass.data[DOMAIN][_MEDIA_VIEWS_KEY] = True
