"""Atomic local storage helpers for Argus."""
from __future__ import annotations

import asyncio
import base64
import copy
import datetime
import os
import re

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .security import hash_pin, validate_pin

_STORAGE_VERSION = 2
_STORAGE_KEY = f"{DOMAIN}.ui"
AUDIT_LOG_MAX = 500
_LOCK_KEY = f"{DOMAIN}_storage_lock"
_MAX_MIGRATED_MEDIA_BYTES = 50 * 1024 * 1024


def _storage_lock(hass: HomeAssistant) -> asyncio.Lock:
    return hass.data.setdefault(_LOCK_KEY, asyncio.Lock())


def _default_payload() -> dict:
    return {
        "zones": [],
        "modes": {"home": {}, "away": {}, "night": {}, "vacation": {}},
        "dashboard": {"layout": "grid", "dense": False},
        "audit_log": [],
        "advanced": {"guest_code": None, "guest_code_enabled": False},
        "automations": [],
        "notif_targets": [],
        "tts_targets": [],
        "emergency_number": "911",
        "panic_outputs": [],
        "users": [],
        "home_name": "",
        "background_mode": "weather",
        "background_images": [],
        "temperature_source": "auto",
        "weather_source": "auto",
        "intelligent_confirmation": {
            "enabled": False,
            "window_seconds": 15,
            "required_signals": 2,
        },
        "state_schedule": [],
        "runtime": {"alarm_states": {}},
        "panel_bg_file": "",
        "panel_bg_sound": False,
        "hub_bg_mode": "none",
        "hub_bg_file": "",
        "hub_bg_sound": False,
    }


def _merge_defaults(data: dict | None) -> dict:
    result = _default_payload()
    if isinstance(data, dict):
        result.update(data)
    if not isinstance(result.get("runtime"), dict):
        result["runtime"] = {"alarm_states": {}}
    result["runtime"].setdefault("alarm_states", {})
    return result


def _store(hass: HomeAssistant) -> Store:
    return Store(hass, _STORAGE_VERSION, _STORAGE_KEY)


def _migrate_base64_file(hass: HomeAssistant, value: str, prefix: str) -> str:
    if not isinstance(value, str) or not value.startswith("data:"):
        return value
    match = re.match(r"^data:([^;]+);base64,", value)
    if not match:
        return value
    mime_to_ext = {
        "image/png": "png",
        "image/jpeg": "jpg",
        "image/jpg": "jpg",
        "image/gif": "gif",
        "image/webp": "webp",
        "video/mp4": "mp4",
        "video/webm": "webm",
    }
    extension = mime_to_ext.get(match.group(1))
    if not extension:
        return ""
    try:
        encoded = value.split(",", 1)[1]
        if len(encoded) > (_MAX_MIGRATED_MEDIA_BYTES * 4 // 3) + 1024:
            return ""
        file_data = base64.b64decode(encoded, validate=True)
        if len(file_data) > _MAX_MIGRATED_MEDIA_BYTES:
            return ""
        filename = f"{prefix}_migrated.{extension}"
        upload_dir = hass.config.path("www", "argus")
        os.makedirs(upload_dir, exist_ok=True)
        target_path = os.path.join(upload_dir, filename)
        temporary = f"{target_path}.tmp"
        with open(temporary, "wb") as handle:
            handle.write(file_data)
        os.replace(temporary, target_path)
        return f"/local/argus/{filename}"
    except (ValueError, OSError):
        return ""


async def async_load_ui_data(hass: HomeAssistant) -> dict:
    """Load, normalize and migrate Argus UI data."""
    store = _store(hass)
    raw = await store.async_load()
    data = _merge_defaults(raw)
    changed = raw != data

    media_fields = (("panel_bg_file", "panel_bg"), ("hub_bg_file", "hub_bg"))
    for field, prefix in media_fields:
        value = data.get(field, "")
        if isinstance(value, str) and value.startswith("data:"):
            data[field] = await hass.async_add_executor_job(
                _migrate_base64_file, hass, value, prefix
            )
            changed = True

    images = data.get("background_images", [])
    if isinstance(images, list):
        migrated = []
        for index, value in enumerate(images):
            if isinstance(value, str) and value.startswith("data:"):
                value = await hass.async_add_executor_job(
                    _migrate_base64_file, hass, value, f"bg_image_{index}"
                )
                changed = True
            if value:
                migrated.append(value)
        data["background_images"] = migrated

    if changed:
        await store.async_save(data)
    return data


async def async_save_ui_data(hass: HomeAssistant, updates: dict) -> dict:
    """Atomically merge validated updates into storage."""
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass)
        current.update(copy.deepcopy(updates or {}))
        await _store(hass).async_save(current)
        return current


def _sanitize_restored_users(users: object) -> list[dict]:
    if not isinstance(users, list):
        raise ValueError("users must be a list")
    sanitized: list[dict] = []
    for item in users:
        if not isinstance(item, dict):
            raise ValueError("every user must be an object")
        user = copy.deepcopy(item)
        pin = user.get("pin")
        if pin and not str(pin).startswith("scrypt:"):
            if not validate_pin(str(pin)):
                raise ValueError("backup contains an invalid user PIN")
            user["pin"] = hash_pin(str(pin))
        sanitized.append(user)
    return sanitized


def _sanitize_restore_payload(payload: object, runtime: dict) -> dict:
    if not isinstance(payload, dict):
        raise ValueError("backup must be an object")
    defaults = _default_payload()
    restored = copy.deepcopy(defaults)
    for key in defaults:
        if key in payload and key not in {"runtime", "audit_log"}:
            restored[key] = copy.deepcopy(payload[key])
    restored["runtime"] = copy.deepcopy(runtime)
    restored["audit_log"] = []
    restored["users"] = _sanitize_restored_users(restored.get("users", []))

    advanced = restored.get("advanced")
    if not isinstance(advanced, dict):
        raise ValueError("advanced must be an object")
    guest = advanced.get("guest_code")
    if guest and not str(guest).startswith("scrypt:"):
        if not validate_pin(str(guest)):
            raise ValueError("backup contains an invalid guest PIN")
        advanced["guest_code"] = hash_pin(str(guest))
    return restored


async def async_restore_ui_data(
    hass: HomeAssistant, payload: object, *, actor: str
) -> dict:
    """Validate and atomically restore a portable backup."""
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass)
        restored = _sanitize_restore_payload(payload, current.get("runtime", {}))
        restored["audit_log"] = [{
            "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "action": "configuration_restored",
            "detail": "Portable Argus configuration restored",
            "user": actor,
            "severity": "warning",
        }]
        await _store(hass).async_save(restored)
        return restored


async def async_append_audit_log(
    hass: HomeAssistant,
    action: str,
    detail: str = "",
    user: str = "Argus",
    *,
    severity: str = "info",
    metadata: dict | None = None,
) -> None:
    """Append a structured event to the bounded audit log."""
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass)
        log = current.get("audit_log")
        if not isinstance(log, list):
            log = []
        entry = {
            "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "action": str(action)[:64],
            "detail": str(detail)[:1000],
            "user": str(user)[:128],
            "severity": severity if severity in {"info", "warning", "critical"} else "info",
            "metadata": copy.deepcopy(metadata or {}),
        }
        log.insert(0, entry)
        current["audit_log"] = log[:AUDIT_LOG_MAX]
        await _store(hass).async_save(current)


async def async_clear_audit_log(hass: HomeAssistant, *, actor: str) -> None:
    """Clear prior events while preserving evidence of the action."""
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass)
        prior_count = len(current.get("audit_log", []))
        current["audit_log"] = [{
            "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "action": "audit_log_cleared",
            "detail": f"Cleared {prior_count} prior events",
            "user": actor,
            "severity": "warning",
            "metadata": {"prior_count": prior_count},
        }]
        await _store(hass).async_save(current)


async def async_get_audit_log(hass: HomeAssistant) -> list:
    data = await async_load_ui_data(hass)
    log = data.get("audit_log", [])
    return log if isinstance(log, list) else []


async def async_save_alarm_runtime_state(
    hass: HomeAssistant, entry_id: str, state: str, *, source: str
) -> None:
    stable_states = {
        "disarmed", "armed_home", "armed_away", "armed_night", "armed_vacation",
    }
    if state not in stable_states:
        return
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass)
        runtime = current.setdefault("runtime", {})
        states = runtime.setdefault("alarm_states", {})
        states[entry_id] = {
            "state": state,
            "updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "source": str(source)[:64],
        }
        await _store(hass).async_save(current)


async def async_get_alarm_runtime_state(hass: HomeAssistant, entry_id: str) -> dict:
    data = await async_load_ui_data(hass)
    state = data.get("runtime", {}).get("alarm_states", {}).get(entry_id, {})
    return state if isinstance(state, dict) else {}
