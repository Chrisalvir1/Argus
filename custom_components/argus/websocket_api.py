"""WebSocket API for the Argus frontend panel."""
from __future__ import annotations

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .const import DOMAIN, SIGNAL_CONFIG_UPDATED, CONF_CODE
from .storage import (
    async_append_audit_log,
    async_get_audit_log,
    async_load_ui_data,
    async_save_ui_data,
)

_SUPPORTED_DOMAINS = {
    "binary_sensor", "camera", "climate", "cover",
    "light", "lock", "media_player", "sensor", "siren", "switch",
}

# Extensiones permitidas para subir como fondos (imágenes/vídeo). Se excluye SVG
# a propósito: un SVG abierto directamente puede ejecutar scripts (XSS) y aquí
# solo se usan fondos rasterizados o vídeo.
_ALLOWED_UPLOAD_EXTS = {
    ".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp",
    ".mp4", ".webm", ".ogg", ".mov", ".m4v",
}


def async_register_websocket_api(hass: HomeAssistant) -> None:
    """Register all Argus websocket commands."""
    websocket_api.async_register_command(hass, ws_argus_dashboard)
    websocket_api.async_register_command(hass, ws_argus_save_ui)
    websocket_api.async_register_command(hass, ws_argus_get_mode_config)
    websocket_api.async_register_command(hass, ws_argus_save_mode_config)
    websocket_api.async_register_command(hass, ws_argus_get_audit_log)
    websocket_api.async_register_command(hass, ws_argus_get_stats)
    websocket_api.async_register_command(hass, ws_argus_clear_audit_log)
    websocket_api.async_register_command(hass, ws_argus_restore_config)
    websocket_api.async_register_command(hass, ws_argus_save_advanced_config)
    websocket_api.async_register_command(hass, ws_argus_get_advanced_config)
    websocket_api.async_register_command(hass, ws_argus_save_automations)
    websocket_api.async_register_command(hass, ws_argus_get_automations)
    websocket_api.async_register_command(hass, ws_argus_get_tts_engines)
    websocket_api.async_register_command(hass, ws_argus_get_media_players)
    websocket_api.async_register_command(hass, ws_argus_update_master_pin)
    websocket_api.async_register_command(hass, ws_argus_write_log)
    websocket_api.async_register_command(hass, ws_argus_upload_file)
    websocket_api.async_register_command(hass, ws_argus_list_files)
    websocket_api.async_register_command(hass, ws_argus_delete_file)


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/upload_file",
        vol.Required("filename"): str,
        vol.Required("data"): str,
    }
)
@websocket_api.async_response
async def ws_argus_upload_file(hass: HomeAssistant, connection, msg) -> None:
    """Upload a file to the local Argus media directory (admin only)."""
    import os
    import base64

    filename = os.path.basename(msg["filename"])
    if not filename:
        connection.send_error(msg["id"], "invalid_filename", "Empty filename")
        return
    ext = os.path.splitext(filename)[1].lower()
    if ext not in _ALLOWED_UPLOAD_EXTS:
        connection.send_error(
            msg["id"], "invalid_extension",
            f"File type '{ext}' not allowed",
        )
        return
    data_url = msg["data"]

    # Decode base64 data
    try:
        if "," in data_url:
            _, encoded = data_url.split(",", 1)
        else:
            encoded = data_url
        file_data = base64.b64decode(encoded)
    except Exception as err:
        connection.send_error(msg["id"], "invalid_data", f"Failed to decode base64: {err}")
        return

    upload_dir = hass.config.path("www", "argus")

    def _write_file():
        os.makedirs(upload_dir, exist_ok=True)
        target_path = os.path.join(upload_dir, filename)
        with open(target_path, "wb") as f:
            f.write(file_data)

    try:
        await hass.async_add_executor_job(_write_file)
        connection.send_result(
            msg["id"],
            {"success": True, "url": f"/local/argus/{filename}"}
        )
    except Exception as err:
        connection.send_error(msg["id"], "write_failed", f"Failed to write file: {err}")


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/list_uploaded_files",
    }
)
@websocket_api.async_response
async def ws_argus_list_files(hass: HomeAssistant, connection, msg) -> None:
    """List all uploaded background files."""
    import os

    upload_dir = hass.config.path("www", "argus")

    def _list_files():
        if not os.path.exists(upload_dir):
            return []
        
        files_list = []
        for filename in os.listdir(upload_dir):
            filepath = os.path.join(upload_dir, filename)
            if os.path.isfile(filepath):
                stat = os.stat(filepath)
                # Formatted size
                size_bytes = stat.st_size
                if size_bytes >= 1024 * 1024:
                    size_str = f"{size_bytes / (1024 * 1024):.2f} MB"
                else:
                    size_str = f"{size_bytes / 1024:.2f} KB"
                
                # Simple file type check
                ext = os.path.splitext(filename)[1].lower()
                is_video = ext in (".mp4", ".webm", ".ogg", ".mov", ".m4v")
                
                files_list.append({
                    "name": filename,
                    "size_bytes": size_bytes,
                    "size_str": size_str,
                    "mtime": stat.st_mtime,
                    "url": f"/local/argus/{filename}",
                    "is_video": is_video,
                })
        # Sort by modification time (newest first)
        files_list.sort(key=lambda x: x["mtime"], reverse=True)
        return files_list

    try:
        files = await hass.async_add_executor_job(_list_files)
        connection.send_result(msg["id"], files)
    except Exception as err:
        connection.send_error(msg["id"], "list_failed", f"Failed to list files: {err}")


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/delete_uploaded_file",
        vol.Required("filename"): str,
    }
)
@websocket_api.async_response
async def ws_argus_delete_file(hass: HomeAssistant, connection, msg) -> None:
    """Delete an uploaded background file (admin only)."""
    import os

    filename = os.path.basename(msg["filename"])
    upload_dir = hass.config.path("www", "argus")
    target_path = os.path.join(upload_dir, filename)

    def _delete_file():
        if os.path.exists(target_path):
            os.remove(target_path)
            return True
        return False

    try:
        deleted = await hass.async_add_executor_job(_delete_file)
        if deleted:
            connection.send_result(msg["id"], {"success": True})
        else:
            connection.send_error(msg["id"], "not_found", "File not found")
    except Exception as err:
        connection.send_error(msg["id"], "delete_failed", f"Failed to delete file: {err}")



@callback
def _serialize_available_entities(hass: HomeAssistant) -> list[dict]:
    """Return all HA entities relevant to Argus, sorted by area + domain."""
    entity_registry = er.async_get(hass)
    area_registry = ar.async_get(hass)
    items: list[dict] = []

    for state in hass.states.async_all():
        domain = state.entity_id.split(".", 1)[0]
        if domain not in _SUPPORTED_DOMAINS:
            continue

        entry = entity_registry.async_get(state.entity_id)
        area_name = None
        if entry and entry.area_id:
            area = area_registry.async_get_area(entry.area_id)
            area_name = area.name if area else None

        items.append(
            {
                "entity_id": state.entity_id,
                "name": state.name,
                "domain": domain,
                "state": state.state,
                "area": area_name,
                "icon": state.attributes.get("icon"),
                "friendly_name": state.attributes.get("friendly_name"),
            }
        )

    return sorted(
        items,
        key=lambda i: (i.get("area") or "zzz", i["domain"], i["entity_id"]),
    )


@callback
def _resolve_alarm_entity_id(hass: HomeAssistant, config_entry_id: str) -> str | None:
    """Resolve the alarm_control_panel entity_id for an Argus config entry."""
    entity_registry = er.async_get(hass)

    for entity_entry in entity_registry.entities.values():
        if (
            entity_entry.config_entry_id == config_entry_id
            and entity_entry.domain == "alarm_control_panel"
            and not entity_entry.disabled_by
        ):
            return entity_entry.entity_id

    for state in hass.states.async_all("alarm_control_panel"):
        if state.attributes.get("config_entry_id") == config_entry_id:
            return state.entity_id

    return None


@websocket_api.websocket_command({vol.Required("type"): "argus/dashboard"})
@websocket_api.async_response
async def ws_argus_dashboard(hass: HomeAssistant, connection, msg) -> None:
    """Return full dashboard alarm entries, UI state, and available entities."""
    ui_data = await async_load_ui_data(hass)
    entries_payload = []

    for entry in hass.config_entries.async_entries(DOMAIN):
        alarm_entity_id = _resolve_alarm_entity_id(hass, entry.entry_id)
        state_obj = hass.states.get(alarm_entity_id) if alarm_entity_id else None

        entries_payload.append(
            {
                "entry_id": entry.entry_id,
                "title": entry.title,
                "entity_id": alarm_entity_id,
                "state": state_obj.state if state_obj else "unavailable",
                "attributes": dict(state_obj.attributes) if state_obj else {},
                "config": dict(entry.data),
                "options": dict(entry.options),
            }
        )

    is_admin = bool(connection.user and connection.user.is_admin)

    # Redactar secretos (PIN maestro, PINs de usuario, PIN de invitado) para
    # usuarios no administradores. Se trabaja sobre una copia profunda para no
    # mutar el objeto cacheado del Store.
    if not is_admin:
        import copy

        ui_data = copy.deepcopy(ui_data)
        for u in ui_data.get("users", []) or []:
            if isinstance(u, dict):
                u.pop("pin", None)
        adv = ui_data.get("advanced")
        if isinstance(adv, dict):
            adv.pop("guest_code", None)
        for e in entries_payload:
            if isinstance(e.get("config"), dict):
                e["config"].pop(CONF_CODE, None)
            if isinstance(e.get("options"), dict):
                e["options"].pop(CONF_CODE, None)

    connection.send_result(
        msg["id"],
        {
            "entries": entries_payload,
            "ui": ui_data,
            "available_entities": _serialize_available_entities(hass),
            "is_admin": is_admin,
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_ui",
        vol.Optional("zones"): list,
        vol.Optional("dashboard"): dict,
        vol.Optional("notif_targets"): list,
        vol.Optional("tts_targets"): list,
        vol.Optional("users"): list,
        vol.Optional("home_name"): str,
        vol.Optional("background_mode"): vol.In(["weather", "none", "photo", "collage", "video"]),
        vol.Optional("background_images"): list,
        vol.Optional("temperature_source"): str,
        vol.Optional("temp_alert_min"): vol.Any(None, vol.Coerce(float)),
        vol.Optional("temp_alert_max"): vol.Any(None, vol.Coerce(float)),
        vol.Optional("panel_bg_file"): str,
        vol.Optional("panel_bg_sound"): bool,
        vol.Optional("hub_bg_mode"): vol.In(["none", "image", "video"]),
        vol.Optional("hub_bg_file"): str,
        vol.Optional("hub_bg_sound"): bool,
    }
)
@websocket_api.async_response
async def ws_argus_save_ui(hass: HomeAssistant, connection, msg) -> None:
    """Persist UI data from the Argus panel without overwriting missing fields."""
    
    updates = {}
    valid_keys = [
        "zones", "dashboard", "notif_targets", "tts_targets", "users", "home_name",
        "background_mode", "background_images", "temperature_source", "temp_alert_min", "temp_alert_max",
        "panel_bg_file", "panel_bg_sound", "hub_bg_mode", "hub_bg_file", "hub_bg_sound"
    ]
    
    for key in valid_keys:
        if key in msg:
            updates[key] = msg[key]
            
    if "users" in msg:
        # Gestionar usuarios/PINs es una operación de administrador.
        if not (connection.user and connection.user.is_admin):
            connection.send_error(
                msg["id"], "unauthorized",
                "Solo un administrador puede modificar usuarios y PINs",
            )
            return

        old_ui = await async_load_ui_data(hass)
        old_users = old_ui.get("users", [])
        new_users = msg["users"]

        # Get admin name (connection.user es la API estable; no existe
        # connection.context en ActiveConnection y rompía la gestión de usuarios).
        admin_name = "Administrador"
        try:
            if connection.user and connection.user.name:
                admin_name = connection.user.name
        except Exception:
            pass
                
        # Find added users
        old_names = {u.get("name") for u in old_users if u.get("name")}
        for u in new_users:
            if u.get("name") and u.get("name") not in old_names:
                role = "Administrador" if u.get("is_admin") else "Usuario"
                exp = u.get("expiration_date")
                exp_info = f" (Vence: {exp.replace('T', ' ')})" if exp else " (Indefinido)"
                await async_append_audit_log(
                    hass, 
                    "user_added", 
                    f"Usuario '{u.get('name')}' ({role}) agregado{exp_info}", 
                    user=admin_name
                )
                
        # Find deleted users
        new_names = {u.get("name") for u in new_users if u.get("name")}
        for u in old_users:
            if u.get("name") and u.get("name") not in new_names:
                await async_append_audit_log(
                    hass, 
                    "user_deleted", 
                    f"Usuario '{u.get('name')}' eliminado", 
                    user=admin_name
                )
            
    saved = await async_save_ui_data(hass, updates)
    connection.send_result(msg["id"], {"saved": True, "ui": saved})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_mode_config"})
@websocket_api.async_response
async def ws_argus_get_mode_config(hass: HomeAssistant, connection, msg) -> None:
    """Return current mode settings from storage."""
    ui_data = await async_load_ui_data(hass)
    connection.send_result(msg["id"], ui_data.get("modes", {}))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_mode_config",
        vol.Required("mode"): vol.In(["disarmed", "home", "away", "night", "vacation"]),
        vol.Optional("entity_id", default=""): str,
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_save_mode_config(hass: HomeAssistant, connection, msg) -> None:
    """Save configuration for a specific alarm mode."""
    mode = msg["mode"]
    config = msg["config"]
    entity_id = msg.get("entity_id", "")
    ui_data = await async_load_ui_data(hass)
    modes = ui_data.get("modes", {})
    if entity_id:
        modes.setdefault("__by_entity__", {})
        modes["__by_entity__"].setdefault(entity_id, {})
        modes["__by_entity__"][entity_id][mode] = config
    modes[mode] = config
    await async_save_ui_data(hass, {"modes": modes})
    # Notify alarm panel to reload config and re-subscribe sensors
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True, "modes": modes})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_audit_log"})
@websocket_api.async_response
async def ws_argus_get_audit_log(hass: HomeAssistant, connection, msg) -> None:
    """Return the Argus audit log."""
    log = await async_get_audit_log(hass)
    connection.send_result(msg["id"], {"log": log})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_stats"})
@websocket_api.async_response
async def ws_argus_get_stats(hass: HomeAssistant, connection, msg) -> None:
    """Return computed statistics from the audit log."""
    log = await async_get_audit_log(hass)
    stats = {
        "total_events": len(log),
        "triggers_30d": 0,
        "armings_30d": 0,
        "top_sensors": {}
    }
    for entry in log:
        act = entry.get("action", "")
        if "trigger" in act:
            stats["triggers_30d"] += 1
            det = entry.get("detail", "")
            if "Sensor:" in det:
                s = det.split("Sensor:")[1].split("(")[0].strip()
                stats["top_sensors"][s] = stats["top_sensors"].get(s, 0) + 1
        elif "arm" in act and "disarm" not in act:
            stats["armings_30d"] += 1

    connection.send_result(msg["id"], stats)


@websocket_api.websocket_command({vol.Required("type"): "argus/clear_activity_log"})
@websocket_api.async_response
async def ws_argus_clear_audit_log(hass: HomeAssistant, connection, msg) -> None:
    """Clear the Argus audit log."""
    await async_save_ui_data(hass, {"audit_log": []})
    connection.send_result(msg["id"], {"success": True})


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/restore_config",
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_restore_config(hass: HomeAssistant, connection, msg) -> None:
    """Restore the full Argus UI configuration from an external backup (admin only)."""
    # We replace the entire persistent storage dictionary
    from .storage import Store, _STORAGE_VERSION, _STORAGE_KEY
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    await store.async_save(msg["config"])
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_advanced_config",
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_save_advanced_config(hass: HomeAssistant, connection, msg) -> None:
    """Persist advanced config (guest PIN, NFC, etc.) — admin only."""
    await async_save_ui_data(hass, {"advanced": msg["config"]})
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_advanced_config"})
@websocket_api.async_response
async def ws_argus_get_advanced_config(hass: HomeAssistant, connection, msg) -> None:
    """Return the advanced config."""
    ui_data = await async_load_ui_data(hass)
    connection.send_result(msg["id"], ui_data.get("advanced", {}))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_automations",
        vol.Required("automations"): list,
    }
)
@websocket_api.async_response
async def ws_argus_save_automations(hass: HomeAssistant, connection, msg) -> None:
    """Save custom Argus automations."""
    await async_save_ui_data(hass, {"automations": msg["automations"]})
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command({vol.Required("type"): "argus/get_automations"})
@websocket_api.async_response
async def ws_argus_get_automations(hass: HomeAssistant, connection, msg) -> None:
    """Return configured automations."""
    ui_data = await async_load_ui_data(hass)
    connection.send_result(msg["id"], ui_data.get("automations", []))


@websocket_api.websocket_command({vol.Required("type"): "argus/get_tts_engines"})
@websocket_api.async_response
async def ws_argus_get_tts_engines(hass: HomeAssistant, connection, msg) -> None:
    """Return a list of TTS providers/engines available."""
    engines = []
    # HA tts providers usually expose entities as tts.<provider>
    for state in hass.states.async_all("tts"):
        engines.append({
            "entity_id": state.entity_id,
            "name": state.attributes.get("friendly_name") or state.name
        })
    # Also some might just be service calls but TTS entity is standard now.
    connection.send_result(msg["id"], engines)


@websocket_api.websocket_command({vol.Required("type"): "argus/get_media_players"})
@websocket_api.async_response
async def ws_argus_get_media_players(hass: HomeAssistant, connection, msg) -> None:
    """Return a list of media_player entities available for TTS."""
    players = []
    for state in hass.states.async_all("media_player"):
        players.append({
            "entity_id": state.entity_id,
            "name": state.attributes.get("friendly_name") or state.name
        })
    connection.send_result(msg["id"], players)


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/update_master_pin",
        vol.Required("pin"): str,
    }
)
@websocket_api.async_response
async def ws_argus_update_master_pin(hass: HomeAssistant, connection, msg) -> None:
    """Update/reset the master PIN on the Argus ConfigEntry.

    Restringido a administradores de Home Assistant: la sesión autenticada de HA
    actúa como verificación de identidad, de modo que un administrador siempre
    puede restablecer el PIN aunque se haya olvidado, sin conocer el anterior.
    """
    from .const import CONF_CODE

    # Get the first argus config entry
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        connection.send_result(msg["id"], {"success": False, "error": "No config entry found"})
        return
        
    entry = entries[0]
    
    # Update the options
    new_options = dict(entry.options)
    new_options[CONF_CODE] = msg["pin"]
    
    hass.config_entries.async_update_entry(entry, options=new_options)

    # Audit log: registrar quién cambió/restableció el PIN (sin guardar el PIN).
    admin_name = "Administrador"
    try:
        if connection.user and connection.user.name:
            admin_name = connection.user.name
    except Exception:
        pass
    action_detail = "PIN maestro restablecido" if not msg["pin"] else "PIN maestro actualizado"
    await async_append_audit_log(hass, "master_pin_changed", action_detail, user=admin_name)

    # Reload the integration so the panel picks up the updated CONF_CODE
    await hass.config_entries.async_reload(entry.entry_id)

    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/write_log",
        vol.Required("action"): str,
        vol.Optional("detail", default=""): str,
        vol.Optional("user", default=""): str,
    }
)
@websocket_api.async_response
async def ws_argus_write_log(hass: HomeAssistant, connection, msg) -> None:
    """Append an event to the Argus audit log using the centralized helper."""
    await async_append_audit_log(
        hass, 
        action=msg["action"], 
        detail=msg.get("detail", ""), 
        user=msg.get("user", "Argus")
    )
    connection.send_result(msg["id"], {"written": True})
