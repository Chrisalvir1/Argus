"""Atomic local storage helpers for Argus with per-instance isolation support."""
from __future__ import annotations

import asyncio
import base64
import copy
import datetime
import os
import re
import uuid

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .security import hash_pin, validate_pin

_STORAGE_VERSION = 1
_STORAGE_KEY_GLOBAL = f"{DOMAIN}.ui"
AUDIT_LOG_MAX = 500
_LOCK_KEY = f"{DOMAIN}_storage_lock"
_MAX_MEDIA_BYTES = 50 * 1024 * 1024


def _storage_lock(hass: HomeAssistant) -> asyncio.Lock:
    return hass.data.setdefault(_LOCK_KEY, asyncio.Lock())


def _store(hass: HomeAssistant, entry_id: str | None = None) -> Store:
    key = f"{_STORAGE_KEY_GLOBAL}.{entry_id}" if entry_id else _STORAGE_KEY_GLOBAL
    return Store(hass, _STORAGE_VERSION, key)


def _default_payload() -> dict:
    return {
        "first_run": True,
        "zones": [], "modes": {"home": {}, "away": {}, "night": {}, "vacation": {}},
        "dashboard": {"layout": "grid", "dense": False}, "audit_log": [],
        "advanced": {"guest_code": None, "guest_code_enabled": False, "duress_pin": None},
        "automations": [], "notif_targets": [],
        "emergency_number": "911", "panic_outputs": [], "users": [],
        "home_name": "", "background_mode": "weather", "background_images": [],
        "temperature_source": "auto", "weather_source": "auto",
        "intelligent_confirmation": {"enabled": False, "window_seconds": 15, "required_signals": 2},
        "state_schedule": [], "runtime": {"alarm_states": {}},
        "panel_bg_file": "", "panel_bg_sound": False,
        "hub_bg_mode": "none", "hub_bg_file": "", "hub_bg_sound": False,
    }


def _merge_defaults(data: object) -> dict:
    result = _default_payload()
    if isinstance(data, dict):
        result.update(copy.deepcopy(data))
    result.pop("tts_targets", None)
    if not isinstance(result.get("runtime"), dict):
        result["runtime"] = {"alarm_states": {}}
    result["runtime"].setdefault("alarm_states", {})
    return result


def _migrate_base64_file(hass: HomeAssistant, value: str, prefix: str) -> str:
    if not isinstance(value, str) or not value.startswith("data:"):
        return value
    match = re.match(r"^data:([^;]+);base64,", value)
    extensions = {
        "image/png": "png", "image/jpeg": "jpg", "image/jpg": "jpg",
        "image/gif": "gif", "image/webp": "webp",
        "video/mp4": "mp4", "video/webm": "webm",
    }
    extension = extensions.get(match.group(1)) if match else None
    if not extension:
        return ""
    try:
        encoded = value.split(",", 1)[1]
        if len(encoded) > (_MAX_MEDIA_BYTES * 4 // 3) + 1024:
            return ""
        content = base64.b64decode(encoded, validate=True)
        if len(content) > _MAX_MEDIA_BYTES:
            return ""
        directory = hass.config.path("www", "argus")
        os.makedirs(directory, exist_ok=True)
        target = os.path.join(directory, f"{prefix}_migrated.{extension}")
        temporary = f"{target}.tmp"
        with open(temporary, "wb") as handle:
            handle.write(content)
        os.replace(temporary, target)
        return f"/local/argus/{os.path.basename(target)}"
    except (ValueError, OSError):
        return ""


async def async_load_ui_data(hass: HomeAssistant, entry_id: str | None = None) -> dict:
    store = _store(hass, entry_id)
    raw = await store.async_load()
    if isinstance(raw, dict) and "first_run" not in raw:
        raw["first_run"] = False
    data = _merge_defaults(raw)
    changed = raw != data
    for field, prefix in (("panel_bg_file", "panel_bg"), ("hub_bg_file", "hub_bg")):
        value = data.get(field, "")
        if isinstance(value, str) and value.startswith("data:"):
            data[field] = await hass.async_add_executor_job(_migrate_base64_file, hass, value, prefix)
            changed = True
    images = data.get("background_images", [])
    if isinstance(images, list):
        migrated = []
        for index, value in enumerate(images):
            if isinstance(value, str) and value.startswith("data:"):
                value = await hass.async_add_executor_job(_migrate_base64_file, hass, value, f"bg_image_{index}")
                changed = True
            if value:
                migrated.append(value)
        data["background_images"] = migrated
    if changed:
        await store.async_save(data)
    return data


def _preserve_redacted_user_pins(current: object, incoming: object) -> list[dict]:
    """Keep stored hashes when the browser sends redacted user objects."""
    if not isinstance(incoming, list):
        raise ValueError("users must be a list")
    current_by_name = {
        str(item.get("name")): item for item in (current if isinstance(current, list) else [])
        if isinstance(item, dict) and item.get("name")
    }
    merged = []
    for item in incoming:
        if not isinstance(item, dict):
            raise ValueError("every user must be an object")
        user = copy.deepcopy(item)

        previous = current_by_name.get(str(user.get("name")))
        if previous:
            # Preserve old pin
            if not user.get("pin") and previous.get("pin"):
                user["pin"] = previous["pin"]
            # Preserve new access_pin_hash
            if not user.get("access_pin_hash") and previous.get("access_pin_hash"):
                user["access_pin_hash"] = previous["access_pin_hash"]

        merged.append(user)
    return merged


async def _count_real_ha_admins(hass: HomeAssistant, users_list: list[dict]) -> int:
    count = 0
    for u in users_list:
        if isinstance(u, dict) and u.get("role") == "admin" and u.get("enabled", True) and u.get("ha_user_id"):
            ha_user = await hass.auth.async_get_user(u["ha_user_id"])
            if ha_user and ha_user.is_admin:
                count += 1
    return count

async def async_save_ui_data(
    hass: HomeAssistant, updates: dict, entry_id: str | None = None
) -> dict:
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass, entry_id)
        safe_updates = copy.deepcopy(updates or {})
        if "users" in safe_updates:
            # Check for ha_user_id uniqueness
            ha_users_seen = set()
            for u in safe_updates["users"]:
                if isinstance(u, dict) and u.get("enabled", True):
                    ha_id = u.get("ha_user_id")
                    if ha_id:
                        if ha_id in ha_users_seen:
                            raise ValueError(f"ha_user_id '{ha_id}' is already linked to another enabled Argus profile.")
                        ha_users_seen.add(ha_id)

            # Check if this change would remove the last real HA admin
            current_users = current.get("users", [])
            new_users = safe_updates["users"]

            current_admin_count = await _count_real_ha_admins(hass, current_users)
            if current_admin_count > 0:
                new_admin_count = await _count_real_ha_admins(hass, new_users)
                if new_admin_count == 0:
                    raise ValueError("Cannot remove, disable, or demote the last Argus administrator linked to a real Home Assistant administrator")

            safe_updates["users"] = _preserve_redacted_user_pins(
                current_users, new_users
            )

        if "panic_outputs" in safe_updates:
            if not isinstance(safe_updates["panic_outputs"], list):
                safe_updates["panic_outputs"] = []
            valid_outputs = []
            for e_id in safe_updates["panic_outputs"]:
                if isinstance(e_id, str) and "." in e_id and len(e_id.split(".")) == 2:
                    valid_outputs.append(e_id)
            safe_updates["panic_outputs"] = valid_outputs

        current.update(safe_updates)
        await _store(hass, entry_id).async_save(current)
        return current


def _sanitize_users(users: object) -> list[dict]:
    if not isinstance(users, list):
        raise ValueError("users must be a list")
    result = []
    for item in users:
        if not isinstance(item, dict):
            raise ValueError("every user must be an object")
        user = copy.deepcopy(item)

        if not user.get("id"):
            user["id"] = str(uuid.uuid4())

        user.setdefault("name", "Unknown")
        user.setdefault("ha_user_id", None)

        if "is_admin" in user:
            is_admin = user.pop("is_admin")
            if "role" not in user:
                user["role"] = "admin" if is_admin else "standard"

        user.setdefault("role", "standard")
        if user["role"] not in {"admin", "standard"}:
            user["role"] = "standard"

        user.setdefault("enabled", True)
        user.setdefault("person_entity", None)
        user.setdefault("shared_kiosk_profile", False)

        if user["shared_kiosk_profile"]:
            user["role"] = "standard"

        user.setdefault("theme", {"background_mode": "default", "background_file": ""})

        perms = user.get("permissions", {})
        if not isinstance(perms, dict):
            perms = {}
        user["permissions"] = {
            "view_status": bool(perms.get("view_status", True)),
            "view_history": bool(perms.get("view_history", False)),
            "arm": bool(perms.get("arm", False)),
            "disarm": bool(perms.get("disarm", False)),
            "sos": bool(perms.get("sos", False)),
        }

        # Validate/Hash alarm pin
        pin = user.get("pin")
        if pin and not str(pin).startswith("scrypt:"):
            if not validate_pin(str(pin)):
                raise ValueError("backup contains an invalid user PIN")
            user["pin"] = hash_pin(str(pin))

        # Validate/Hash access pin
        access_pin = user.get("access_pin_hash")
        if access_pin and not str(access_pin).startswith("scrypt:"):
            if not validate_pin(str(access_pin)):
                raise ValueError("backup contains an invalid access PIN")
            user["access_pin_hash"] = hash_pin(str(access_pin))

        result.append(user)
    return result


def _sanitize_restore(payload: object, runtime: dict) -> dict:
    if not isinstance(payload, dict):
        raise ValueError("backup must be an object")
    defaults = _default_payload()
    restored = copy.deepcopy(defaults)
    for key in defaults:
        if key in payload and key not in {"runtime", "audit_log"}:
            restored[key] = copy.deepcopy(payload[key])
    restored["runtime"] = copy.deepcopy(runtime)
    restored["users"] = _sanitize_users(restored.get("users", []))
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
    hass: HomeAssistant, payload: object, *, actor: str, entry_id: str | None = None
) -> dict:
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass, entry_id)
        restored = _sanitize_restore(payload, current.get("runtime", {}))
        restored["audit_log"] = [{
            "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "action": "configuration_restored", "detail": "Portable configuration restored",
            "user": actor, "severity": "warning", "metadata": {},
        }]
        await _store(hass, entry_id).async_save(restored)
        return restored


async def async_append_audit_log(
    hass: HomeAssistant, action: str, detail: str = "", user: str = "Argus",
    *, severity: str = "info", metadata: dict | None = None, entry_id: str | None = None
) -> None:
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass, entry_id)
        log = current.get("audit_log", [])
        if not isinstance(log, list):
            log = []

        prev_hash = log[0].get("hash", "") if log and isinstance(log[0], dict) else ""
        from .audit.forensics import compute_event_hash
        entry_data = {
            "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "action": str(action)[:64], "detail": str(detail)[:1000],
            "user": str(user)[:128],
            "severity": severity if severity in {"info", "warning", "critical"} else "info",
            "metadata": copy.deepcopy(metadata or {}),
        }
        entry_data["hash"] = compute_event_hash(entry_data, prev_hash)
        log.insert(0, entry_data)
        current["audit_log"] = log[:AUDIT_LOG_MAX]
        await _store(hass, entry_id).async_save(current)


async def async_clear_audit_log(hass: HomeAssistant, *, actor: str, entry_id: str | None = None) -> None:
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass, entry_id)
        count = len(current.get("audit_log", []))
        current["audit_log"] = [{
            "ts": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "action": "audit_log_cleared", "detail": f"Cleared {count} prior events",
            "user": actor, "severity": "warning", "metadata": {"prior_count": count},
        }]
        await _store(hass, entry_id).async_save(current)


async def async_get_audit_log(hass: HomeAssistant, entry_id: str | None = None) -> list:
    log = (await async_load_ui_data(hass, entry_id)).get("audit_log", [])
    return log if isinstance(log, list) else []


async def async_save_alarm_runtime_state(
    hass: HomeAssistant, entry_id: str, state: str, *, source: str
) -> None:
    if state not in {"disarmed", "armed_home", "armed_away", "armed_night", "armed_vacation"}:
        return
    async with _storage_lock(hass):
        current = await async_load_ui_data(hass, entry_id)
        current.setdefault("runtime", {}).setdefault("alarm_states", {})[entry_id] = {
            "state": state,
            "updated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "source": str(source)[:64],
        }
        await _store(hass, entry_id).async_save(current)


async def async_get_alarm_runtime_state(hass: HomeAssistant, entry_id: str) -> dict:
    state = (await async_load_ui_data(hass, entry_id)).get("runtime", {}).get("alarm_states", {}).get(entry_id, {})
    return state if isinstance(state, dict) else {}
