"""Argus profile themes personalization."""
import logging
import voluptuous as vol

from homeassistant.core import HomeAssistant, callback
from homeassistant.components import websocket_api
from homeassistant.helpers.dispatcher import async_dispatcher_send

from . import websocket_api as argus_ws
from .auth import _require_argus_session, ArgusAuthError
from .const import SIGNAL_CONFIG_UPDATED

_LOGGER = logging.getLogger(__name__)

def async_register_personalization_api(hass: HomeAssistant) -> None:
    """Register WebSocket API commands for personalization."""
    websocket_api.async_register_command(hass, ws_argus_get_profile_theme)
    websocket_api.async_register_command(hass, ws_argus_save_profile_theme)

@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/get_profile_theme",
        vol.Required("entry_id"): str,
    }
)
@websocket_api.async_response
async def ws_argus_get_profile_theme(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict,
) -> None:
    """Get the active Argus profile theme."""
    try:
        entry_id = argus_ws._resolve_entry_id(hass, msg.get("entry_id"))
        if not entry_id:
            connection.send_error(msg["id"], "not_found", "Argus entry not found")
            return
            
        await _require_argus_session(hass, connection, entry_id)
        connection.send_result(msg["id"], {"theme": {"background_mode": "default", "background_file": ""}})
        
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message)
    except Exception as err:
        _LOGGER.error("Error in get_profile_theme: %s", err)
        connection.send_error(msg["id"], "unknown_error", str(err))

@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_profile_theme",
        vol.Required("entry_id"): str,
        vol.Required("theme"): dict
    }
)
@websocket_api.async_response
async def ws_argus_save_profile_theme(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict,
) -> None:
    """Save the active Argus profile theme."""
    try:
        entry_id = argus_ws._resolve_entry_id(hass, msg.get("entry_id"))
        if not entry_id:
            connection.send_error(msg["id"], "not_found", "Argus entry not found")
            return
            
        await _require_argus_session(hass, connection, entry_id)
        connection.send_error(msg["id"], "unsupported", "Argus uses a fixed default background")
        
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message)
    except Exception as err:
        _LOGGER.error("Error in save_profile_theme: %s", err)
        connection.send_error(msg["id"], "unknown_error", str(err))
