"""WebSocket API for the Argus frontend panel."""
from __future__ import annotations

import datetime

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send

from .const import DOMAIN, SIGNAL_CONFIG_UPDATED
from .storage import (
    async_append_audit_log,
    async_get_audit_log,
    async_load_ui_data,
    async_save_ui_data,
)
from .security import hash_pin, verify_pin

_MAX_UPLOAD_BYTES = 50 * 1024 * 1024
_ALLOWED_MEDIA_EXTENSIONS = {
    ".avif", ".gif", ".heic", ".heif", ".jpeg", ".jpg", ".m4v",
    ".mov", ".mp4", ".png", ".webm", ".webp",
}

_SUPPORTED_DOMAINS = {
    "binary_sensor", "camera", "climate", "cover",
    "light", "lock", "media_player", "sensor", "siren", "switch",
}


def async_register_websocket_api(hass: HomeAssistant) -> None:
    """Register all Argus websocket commands."""
    # The panel exposes configuration, credentials and local media.  UI checks
    # are not an authorization boundary: Home Assistant must enforce admin access.
    commands = (
        ws_argus_dashboard, ws_argus_save_ui, ws_argus_get_mode_config,
        ws_argus_save_mode_config, ws_argus_get_audit_log, ws_argus_get_stats,
        ws_argus_get_system_health, ws_argus_get_forensic_timeline,
        ws_argus_copilot,
        ws_argus_clear_audit_log, ws_argus_restore_config,
        ws_argus_save_advanced_config, ws_argus_get_advanced_config,
        ws_argus_save_automations, ws_argus_get_automations,
        ws_argus_get_tts_engines, ws_argus_get_media_players,
        ws_argus_update_master_pin, ws_argus_write_log, ws_argus_upload_file,
        ws_argus_list_files, ws_argus_delete_file,
    )
    for command in commands:
        websocket_api.async_register_command(
            hass, websocket_api.require_admin(command)
        )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/upload_file",
        vol.Required("filename"): str,
        vol.Required("data"): str,
    }
)
@websocket_api.async_response
async def ws_argus_upload_file(hass: HomeAssistant, connection, msg) -> None:
    """Upload a file to the local Argus media directory."""
    import os
    import base64

    filename = os.path.basename(msg["filename"])
    data_url = msg["data"]
    extension = os.path.splitext(filename)[1].lower()
    if not filename or extension not in _ALLOWED_MEDIA_EXTENSIONS:
        connection.send_error(msg["id"], "invalid_file", "Unsupported media type")
        return
    # Reject oversized base64 before decoding it to avoid an avoidable memory spike.
    if len(data_url) > (_MAX_UPLOAD_BYTES * 4 // 3) + 1024:
        connection.send_error(msg["id"], "file_too_large", "File exceeds the 50 MB limit")
        return

    # Decode base64 data
    try:
        if "," in data_url:
            _, encoded = data_url.split(",", 1)
        else:
            encoded = data_url
        file_data = base64.b64decode(encoded, validate=True)
        if len(file_data) > _MAX_UPLOAD_BYTES:
            connection.send_error(msg["id"], "file_too_large", "File exceeds the 50 MB limit")
            return
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


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/delete_uploaded_file",
        vol.Required("filename"): str,
    }
)
@websocket_api.async_response
async def ws_argus_delete_file(hass: HomeAssistant, connection, msg) -> None:
    """Delete an uploaded background file."""
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


def _configured_security_entities(ui_data: dict) -> set[str]:
    """Collect configured sensors without guessing at their state or battery."""
    entities: set[str] = set()
    modes = ui_data.get("modes", {})
    for mode, config in modes.items():
        if mode == "__by_entity__":
            continue
        if isinstance(config, dict):
            entities.update(e for e in config.get("sensors", []) if isinstance(e, str))
            entities.update(e for e in config.get("sirens", []) if isinstance(e, str))
    for entity_modes in modes.get("__by_entity__", {}).values():
        if not isinstance(entity_modes, dict):
            continue
        for config in entity_modes.values():
            if isinstance(config, dict):
                entities.update(e for e in config.get("sensors", []) if isinstance(e, str))
                entities.update(e for e in config.get("sirens", []) if isinstance(e, str))
    entities.update(e for e in ui_data.get("panic_outputs", []) if isinstance(e, str))
    return entities


def _entity_name(state, entity_id: str) -> str:
    return str(state.attributes.get("friendly_name") or entity_id) if state else entity_id


def _forensic_severity(action: str) -> str:
    action = action.lower()
    if "trigger" in action or "rejected" in action or action == "sos":
        return "critical"
    if "pending" in action or "restored" in action:
        return "warning"
    return "info"


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
                # Never serialize a ConfigEntry wholesale: it can contain the
                # master PIN and other credentials.  The frontend only needs to
                # know whether a PIN has been configured.
                "pin_configured": bool(
                    entry.options.get("code") or entry.data.get("code")
                ),
            }
        )

    connection.send_result(
        msg["id"],
        {
            "entries": entries_payload,
            "ui": ui_data,
            "available_entities": _serialize_available_entities(hass),
        },
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_ui",
        vol.Optional("zones"): list,
        vol.Optional("dashboard"): dict,
        vol.Optional("notif_targets"): list,
        vol.Optional("tts_targets"): list,
        vol.Optional("emergency_number"): vol.All(
            str, vol.Length(min=1, max=16), vol.Match(r"^[0-9+()\-\s]+$")
        ),
        vol.Optional("panic_outputs"): list,
        vol.Optional("users"): list,
        vol.Optional("home_name"): str,
        vol.Optional("background_mode"): vol.In(["weather", "none", "photo", "collage", "video"]),
        vol.Optional("background_images"): list,
        vol.Optional("temperature_source"): str,
        vol.Optional("weather_source"): str,
        vol.Optional("intelligent_confirmation"): dict,
        vol.Optional("state_schedule"): list,
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
        "zones", "dashboard", "notif_targets", "tts_targets", "emergency_number", "panic_outputs", "users", "home_name",
        "background_mode", "background_images", "temperature_source", "weather_source", "intelligent_confirmation", "state_schedule", "temp_alert_min", "temp_alert_max",
        "panel_bg_file", "panel_bg_sound", "hub_bg_mode", "hub_bg_file", "hub_bg_sound"
    ]
    
    for key in valid_keys:
        if key in msg:
            updates[key] = msg[key]
            
    if "users" in msg:
        old_ui = await async_load_ui_data(hass)
        old_users = old_ui.get("users", [])
        new_users = msg["users"]
        for user_data in new_users:
            if user_data.get("pin") and not user_data["pin"].startswith("scrypt:"):
                user_data["pin"] = hash_pin(user_data["pin"])
        
        # Get admin name
        user_id = connection.context.user_id
        admin_name = "Administrador"
        if user_id:
            try:
                user = await hass.auth.async_get_user(user_id)
                if user:
                    admin_name = user.name
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
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
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
    cutoff = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=30)
    for entry in log:
        try:
            timestamp = datetime.datetime.fromisoformat(
                entry.get("ts", "").replace("Z", "+00:00")
            )
        except (AttributeError, TypeError, ValueError):
            continue
        if timestamp < cutoff:
            continue
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


@websocket_api.websocket_command({vol.Required("type"): "argus/get_system_health"})
@websocket_api.async_response
async def ws_argus_get_system_health(hass: HomeAssistant, connection, msg) -> None:
    """Return real device-health and energy telemetry from Home Assistant."""
    ui_data = await async_load_ui_data(hass)
    configured = _configured_security_entities(ui_data)
    entity_registry = er.async_get(hass)
    configured_device_ids = {
        entity_registry.async_get(entity_id).device_id
        for entity_id in configured
        if entity_registry.async_get(entity_id)
        and entity_registry.async_get(entity_id).device_id
    }

    unavailable = []
    devices = []
    batteries = []
    for entity_id in sorted(configured):
        state = hass.states.get(entity_id)
        status = state.state if state else "unavailable"
        if not state or status in {"unknown", "unavailable"}:
            unavailable.append({
                "entity_id": entity_id,
                "name": _entity_name(state, entity_id),
                "state": status,
            })
        devices.append({
            "entity_id": entity_id,
            "name": _entity_name(state, entity_id),
            "state": status,
        })
        if state:
            raw_battery = state.attributes.get("battery_level")
            try:
                battery_value = float(raw_battery)
            except (TypeError, ValueError):
                battery_value = None
            if battery_value is not None:
                batteries.append({
                    "entity_id": entity_id,
                    "name": _entity_name(state, entity_id),
                    "value": battery_value,
                    "unit": "%",
                    "low": battery_value <= 20,
                    "available": True,
                    "source": "entity_attribute",
                })

    energy = []
    for state in hass.states.async_all("sensor"):
        attributes = state.attributes
        device_class = str(attributes.get("device_class", "")).lower()
        registry_entry = entity_registry.async_get(state.entity_id)
        is_related = bool(
            registry_entry and registry_entry.device_id in configured_device_ids
        )
        if device_class == "battery" and is_related:
            try:
                value = float(state.state)
            except (TypeError, ValueError):
                value = None
            batteries.append({
                "entity_id": state.entity_id,
                "name": _entity_name(state, state.entity_id),
                "value": value,
                "unit": attributes.get("unit_of_measurement") or "%",
                "low": value is not None and value <= 20,
                "available": state.state not in {"unknown", "unavailable"},
            })
        if device_class in {"power", "energy"}:
            try:
                value = float(state.state)
            except (TypeError, ValueError):
                value = None
            energy.append({
                "entity_id": state.entity_id,
                "name": _entity_name(state, state.entity_id),
                "kind": device_class,
                "value": value,
                "unit": attributes.get("unit_of_measurement") or "",
                "available": state.state not in {"unknown", "unavailable"},
            })

    batteries = list({battery["entity_id"]: battery for battery in batteries}.values())
    low_batteries = [battery for battery in batteries if battery["low"]]
    score = 100
    score -= min(50, len(unavailable) * 15)
    score -= min(30, len(low_batteries) * 10)
    connection.send_result(msg["id"], {
        "score": max(0, score),
        "status": "critical" if unavailable else ("warning" if low_batteries else "healthy"),
        "local_first": True,
        "configured_devices": devices,
        "unavailable": unavailable,
        "batteries": batteries,
        # Values remain separate by entity/unit: summing sub-meters could
        # double-count a home's consumption and would be misleading.
        "energy": energy,
    })


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/get_forensic_timeline",
        vol.Optional("limit", default=200): vol.All(vol.Coerce(int), vol.Range(min=1, max=200)),
    }
)
@websocket_api.async_response
async def ws_argus_get_forensic_timeline(hass: HomeAssistant, connection, msg) -> None:
    """Return a structured, chronological security timeline."""
    log = await async_get_audit_log(hass)
    events = []
    for entry in log[: msg["limit"]]:
        action = str(entry.get("action", "event"))
        events.append({
            "ts": entry.get("ts"),
            "action": action,
            "detail": entry.get("detail", ""),
            "actor": entry.get("user", "Argus"),
            "severity": _forensic_severity(action),
        })
    connection.send_result(msg["id"], {
        "events": events,
        "event_count": len(events),
        "generated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    })


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/copilot",
        vol.Required("query"): vol.All(str, vol.Length(min=1, max=500)),
        vol.Optional("language", default="en"): vol.In(["es", "en", "fr", "pt", "it", "zh", "ru"]),
    }
)
@websocket_api.async_response
async def ws_argus_copilot(hass: HomeAssistant, connection, msg) -> None:
    """Answer local security questions without sending home data to a cloud AI."""
    language = msg["language"]
    query = msg["query"].strip().lower()
    words = {
        "state": ["estado", "armado", "state", "armed", "état", "armé", "estado", "armado", "stato", "inserito", "状态", "布防", "состояние", "охрана"],
        "battery": ["batería", "bateria", "battery", "batterie", "batteria", "电池", "батар"],
        "energy": ["energía", "energia", "energy", "énergie", "potenza", "energia", "能源", "мощ", "энерг"],
        "events": ["evento", "historial", "línea", "event", "history", "événement", "historique", "evento", "cronologia", "事件", "历史", "событ", "истор"],
        "health": ["salud", "problema", "health", "problem", "santé", "problème", "saúde", "problema", "salute", "problema", "健康", "问题", "здоров", "проблем"],
    }
    intent = next((name for name, terms in words.items() if any(term in query for term in terms)), "help")
    copy = {
        "es": {"state":"Estado actual: {value}.","battery":"Baterías bajas: {value}.","energy":"Lecturas de energía/potencia disponibles: {value}.","events":"Evento reciente: {value}.","health":"Salud: {value} dispositivos sin conexión.","help":"Puedo consultar estado, baterías, energía, salud y eventos recientes.","none":"ninguno","unavailable":"sin datos"},
        "en": {"state":"Current state: {value}.","battery":"Low batteries: {value}.","energy":"Available energy/power readings: {value}.","events":"Latest event: {value}.","health":"Health: {value} devices offline.","help":"I can check status, batteries, energy, health, and recent events.","none":"none","unavailable":"no data"},
        "fr": {"state":"État actuel : {value}.","battery":"Batteries faibles : {value}.","energy":"Mesures énergie/puissance disponibles : {value}.","events":"Dernier événement : {value}.","health":"Santé : {value} appareils hors ligne.","help":"Je peux vérifier l’état, les batteries, l’énergie, la santé et les événements récents.","none":"aucune","unavailable":"aucune donnée"},
        "pt": {"state":"Estado atual: {value}.","battery":"Baterias fracas: {value}.","energy":"Leituras de energia/potência disponíveis: {value}.","events":"Evento recente: {value}.","health":"Saúde: {value} dispositivos offline.","help":"Posso consultar estado, baterias, energia, saúde e eventos recentes.","none":"nenhuma","unavailable":"sem dados"},
        "it": {"state":"Stato attuale: {value}.","battery":"Batterie scariche: {value}.","energy":"Letture energia/potenza disponibili: {value}.","events":"Evento recente: {value}.","health":"Salute: {value} dispositivi offline.","help":"Posso controllare stato, batterie, energia, salute ed eventi recenti.","none":"nessuna","unavailable":"nessun dato"},
        "zh": {"state":"当前状态：{value}。","battery":"低电量设备：{value}。","energy":"可用能源/功率读数：{value}。","events":"最近事件：{value}。","health":"健康状态：{value} 个设备离线。","help":"我可以查询状态、电池、能源、健康和最近事件。","none":"无","unavailable":"无数据"},
        "ru": {"state":"Текущее состояние: {value}.","battery":"Низкий заряд: {value}.","energy":"Доступные показания энергии/мощности: {value}.","events":"Последнее событие: {value}.","health":"Здоровье: устройств не в сети — {value}.","help":"Я могу проверить состояние, батареи, энергию, здоровье и последние события.","none":"нет","unavailable":"нет данных"},
    }[language]

    configured = _configured_security_entities(await async_load_ui_data(hass))
    registry = er.async_get(hass)
    configured_devices = {
        entry.device_id for entity_id in configured
        if (entry := registry.async_get(entity_id)) and entry.device_id
    }
    if intent == "state":
        states = [state.state for state in hass.states.async_all("alarm_control_panel") if state.attributes.get("config_entry_id")]
        value = ", ".join(states) or copy["unavailable"]
    elif intent == "battery":
        low = []
        for state in hass.states.async_all("sensor"):
            if str(state.attributes.get("device_class", "")).lower() != "battery":
                continue
            battery_entry = registry.async_get(state.entity_id)
            if not battery_entry or battery_entry.device_id not in configured_devices:
                continue
            try:
                if float(state.state) <= 20:
                    low.append(f"{_entity_name(state, state.entity_id)} {state.state}%")
            except (TypeError, ValueError):
                continue
        value = ", ".join(low[:8]) or copy["none"]
    elif intent == "energy":
        readings = []
        for state in hass.states.async_all("sensor"):
            if str(state.attributes.get("device_class", "")).lower() in {"energy", "power"} and state.state not in {"unknown", "unavailable"}:
                readings.append(f"{_entity_name(state, state.entity_id)} {state.state} {state.attributes.get('unit_of_measurement', '')}".strip())
        value = ", ".join(readings[:6]) or copy["unavailable"]
    elif intent == "events":
        log = await async_get_audit_log(hass)
        value = str(log[0].get("detail") or log[0].get("action")) if log else copy["none"]
    elif intent == "health":
        value = str(sum(1 for entity_id in configured if not hass.states.get(entity_id) or hass.states.get(entity_id).state in {"unknown", "unavailable"}))
    else:
        connection.send_result(msg["id"], {"intent":"help", "answer":copy["help"], "local":True})
        return
    connection.send_result(msg["id"], {
        "intent": intent,
        "answer": copy[intent].format(value=value),
        "local": True,
    })


@websocket_api.websocket_command({vol.Required("type"): "argus/clear_activity_log"})
@websocket_api.async_response
async def ws_argus_clear_audit_log(hass: HomeAssistant, connection, msg) -> None:
    """Clear the Argus audit log."""
    await async_save_ui_data(hass, {"audit_log": []})
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/restore_config",
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_restore_config(hass: HomeAssistant, connection, msg) -> None:
    """Restore the full Argus UI configuration from an external backup."""
    # Portable configuration must never overwrite the locally committed alarm
    # state.  Restoring a backup is configuration recovery, not an arm command.
    from .storage import Store, _STORAGE_VERSION, _STORAGE_KEY
    current = await async_load_ui_data(hass)
    restored = dict(msg["config"])
    restored["runtime"] = current.get("runtime", {"alarm_states": {}})
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    await store.async_save(restored)
    async_dispatcher_send(hass, SIGNAL_CONFIG_UPDATED)
    connection.send_result(msg["id"], {"success": True})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_advanced_config",
        vol.Required("config"): dict,
    }
)
@websocket_api.async_response
async def ws_argus_save_advanced_config(hass: HomeAssistant, connection, msg) -> None:
    """Persist advanced config (guest PIN, NFC, etc.)."""
    config = dict(msg["config"])
    guest_code = config.get("guest_code")
    if guest_code and not guest_code.startswith("scrypt:"):
        config["guest_code"] = hash_pin(guest_code)
    await async_save_ui_data(hass, {"advanced": config})
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


@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/update_master_pin",
        vol.Required("pin"): vol.All(str, vol.Match(r"^\d{0,32}$")),
        vol.Optional("current_pin", default=""): vol.All(
            str, vol.Match(r"^\d{0,32}$")
        ),
        vol.Optional("force_reset", default=False): bool,
    }
)
@websocket_api.async_response
async def ws_argus_update_master_pin(hass: HomeAssistant, connection, msg) -> None:
    """Update the master PIN code on the Argus ConfigEntry."""
    from .const import CONF_CODE

    # Get the first argus config entry
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        connection.send_result(msg["id"], {"success": False, "error": "No config entry found"})
        return
        
    entry = entries[0]
    current_pin = entry.options.get(CONF_CODE) or entry.data.get(CONF_CODE) or ""
    if current_pin and not msg["force_reset"] and not verify_pin(msg["current_pin"], current_pin):
        connection.send_error(msg["id"], "invalid_pin", "Current PIN is incorrect")
        return
    
    # Update the options
    new_options = dict(entry.options)
    new_options[CONF_CODE] = hash_pin(msg["pin"]) if msg["pin"] else ""
    
    hass.config_entries.async_update_entry(entry, options=new_options)
    
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
