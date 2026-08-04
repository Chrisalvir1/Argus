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
        vol.Optional("entry_id"): str,
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
            
        profile, _ = await _require_argus_session(hass, connection, entry_id)
        
        theme = profile.get("theme", {})
        
        allowed_keys = {
            "background_mode", "background_images", "panel_bg_file",
            "panel_bg_sound", "hub_bg_mode", "hub_bg_file", "hub_bg_sound"
        }
        filtered_theme = {k: v for k, v in theme.items() if k in allowed_keys}
        
        connection.send_result(msg["id"], {"theme": filtered_theme})
        
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message)
    except Exception as err:
        _LOGGER.error("Error in get_profile_theme: %s", err)
        connection.send_error(msg["id"], "unknown_error", str(err))

@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_profile_theme",
        vol.Optional("entry_id"): str,
        vol.Required("theme"): vol.Schema({
            vol.Optional("background_mode"): vol.In(["weather", "none", "photo", "collage", "video"]),
            vol.Optional("background_images"): list,
            vol.Optional("panel_bg_file"): vol.All(str, vol.Length(max=2048)),
            vol.Optional("panel_bg_sound"): bool,
            vol.Optional("hub_bg_mode"): vol.In(["none", "image", "video"]),
            vol.Optional("hub_bg_file"): vol.All(str, vol.Length(max=2048)),
            vol.Optional("hub_bg_sound"): bool,
        })
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
            
        profile, _ = await _require_argus_session(hass, connection, entry_id)
        
        data = await argus_ws.async_load_ui_data(hass, entry_id)
        users = data.get("users", [])
        
        target_user = None
        for u in users:
            if u.get("id") == profile["id"]:
                target_user = u
                break
                
        if not target_user:
            connection.send_error(msg["id"], "not_found", "User not found")
            return
            
        current_theme = target_user.get("theme", {})
        current_theme.update(msg["theme"])
        target_user["theme"] = current_theme
        
        await argus_ws.async_save_ui_data(hass, {"users": users}, entry_id)
        
        async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
        
        connection.send_result(msg["id"], {"success": True, "theme": current_theme})
        
    except ArgusAuthError as err:
        connection.send_error(msg["id"], err.code, err.message)
    except Exception as err:
        _LOGGER.error("Error in save_profile_theme: %s", err)
        connection.send_error(msg["id"], "unknown_error", str(err))
