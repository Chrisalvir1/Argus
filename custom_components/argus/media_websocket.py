"""Private-media compatibility commands for legacy Argus WebSocket clients."""
from __future__ import annotations

import base64

import voluptuous as vol
from homeassistant.components import websocket_api

from .media import async_get_media_manager


@websocket_api.websocket_command({
    vol.Required("type"): "argus/upload_file",
    vol.Required("filename"): str,
    vol.Required("data"): str,
})
@websocket_api.async_response
async def ws_upload(hass, connection, msg) -> None:
    try:
        encoded = msg["data"].split(",", 1)[-1]
        content = base64.b64decode(encoded, validate=True)
        descriptor = await (await async_get_media_manager(hass)).async_save_bytes(
            msg["filename"], content
        )
        connection.send_result(msg["id"], {"success": True, **descriptor})
    except (ValueError, TypeError):
        connection.send_error(msg["id"], "invalid_media", "Invalid media upload")


@websocket_api.websocket_command({vol.Required("type"): "argus/list_uploaded_files"})
@websocket_api.async_response
async def ws_list(hass, connection, msg) -> None:
    connection.send_result(msg["id"], await (await async_get_media_manager(hass)).async_list())


@websocket_api.websocket_command({
    vol.Required("type"): "argus/delete_uploaded_file",
    vol.Required("filename"): str,
})
@websocket_api.async_response
async def ws_delete(hass, connection, msg) -> None:
    deleted = await (await async_get_media_manager(hass)).async_delete(msg["filename"])
    if deleted:
        connection.send_result(msg["id"], {"success": True})
    else:
        connection.send_error(msg["id"], "not_found", "Media file not found")


def install(websocket_module) -> None:
    """Replace legacy public-media commands before command registration."""
    websocket_module.ws_argus_upload_file = ws_upload
    websocket_module.ws_argus_list_files = ws_list
    websocket_module.ws_argus_delete_file = ws_delete
