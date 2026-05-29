"""Local UI storage helpers for Argus."""
from __future__ import annotations

import base64
import datetime
import os
import re

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import DOMAIN

_STORAGE_VERSION = 1
_STORAGE_KEY = f"{DOMAIN}.ui"
AUDIT_LOG_MAX = 200


def _default_payload() -> dict:
    return {
        "zones": [],
        "modes": {
            "home": {},
            "away": {},
            "night": {},
            "vacation": {},
        },
        "dashboard": {
            "layout": "grid",
            "dense": False,
        },
        "audit_log": [],
        "advanced": {
            "guest_code": None,
            "guest_code_enabled": False,
        },
        "automations": [],
        "notif_targets": [],
        "tts_targets": [],
        "users": [],
        "home_name": "",
        "background_mode": "weather",
        "background_images": [],
        "temperature_source": "auto",
        "panel_bg_file": "",
        "panel_bg_sound": False,
        "hub_bg_mode": "none",
        "hub_bg_file": "",
        "hub_bg_sound": False,
    }


def _migrate_base64_file(hass: HomeAssistant, value: str, prefix: str) -> str:
    """Migrate a base64 string from config to a physical file and return the /local URL."""
    if not value or not isinstance(value, str) or not value.startswith("data:"):
        return value

    try:
        # Extract extension from data URI e.g. "data:image/png;base64,..."
        match = re.match(r"^data:([^;]+);base64,", value)
        if not match:
            return value
        
        mime_type = match.group(1)
        ext = "bin"
        if "image/png" in mime_type:
            ext = "png"
        elif "image/jpeg" in mime_type or "image/jpg" in mime_type:
            ext = "jpg"
        elif "image/gif" in mime_type:
            ext = "gif"
        elif "video/mp4" in mime_type:
            ext = "mp4"
        elif "video/webm" in mime_type:
            ext = "webm"
        elif "image/webp" in mime_type:
            ext = "webp"
            
        _, encoded = value.split(",", 1)
        file_data = base64.b64decode(encoded)
        
        filename = f"{prefix}_migrated.{ext}"
        upload_dir = hass.config.path("www", "argus")
        os.makedirs(upload_dir, exist_ok=True)
        target_path = os.path.join(upload_dir, filename)
        
        with open(target_path, "wb") as f:
            f.write(file_data)
            
        return f"/local/argus/{filename}"
    except Exception:
        return value


async def async_load_ui_data(hass: HomeAssistant) -> dict:
    """Load saved Argus UI data from HA storage and migrate legacy Base64 files."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    data = await store.async_load()
    if not data:
        return _default_payload()
    # Ensure new keys exist in old storage data
    data.setdefault("audit_log", [])
    data.setdefault("advanced", {"guest_code": None, "guest_code_enabled": False})
    data.setdefault("automations", [])
    data.setdefault("home_name", "")
    data.setdefault("background_mode", "weather")
    data.setdefault("background_images", [])
    data.setdefault("temperature_source", "auto")
    data.setdefault("panel_bg_file", "")
    data.setdefault("panel_bg_sound", False)
    data.setdefault("hub_bg_mode", "none")
    data.setdefault("hub_bg_file", "")
    data.setdefault("hub_bg_sound", False)

    # Legacy Base64 to physical files migration
    needs_save = False

    panel_bg = data.get("panel_bg_file", "")
    if isinstance(panel_bg, str) and panel_bg.startswith("data:"):
        def _mig1():
            return _migrate_base64_file(hass, panel_bg, "panel_bg")
        data["panel_bg_file"] = await hass.async_add_executor_job(_mig1)
        needs_save = True

    hub_bg = data.get("hub_bg_file", "")
    if isinstance(hub_bg, str) and hub_bg.startswith("data:"):
        def _mig2():
            return _migrate_base64_file(hass, hub_bg, "hub_bg")
        data["hub_bg_file"] = await hass.async_add_executor_job(_mig2)
        needs_save = True

    bg_images = data.get("background_images", [])
    if isinstance(bg_images, list):
        new_images = []
        changed = False
        for idx, img in enumerate(bg_images):
            if isinstance(img, str) and img.startswith("data:"):
                def _mig_img(i=idx, val=img):
                    return _migrate_base64_file(hass, val, f"bg_image_{i}")
                new_img = await hass.async_add_executor_job(_mig_img)
                new_images.append(new_img)
                changed = True
            else:
                new_images.append(img)
        if changed:
            data["background_images"] = new_images
            needs_save = True

    if needs_save:
        await store.async_save(data)

    return data


async def async_save_ui_data(hass: HomeAssistant, data: dict) -> dict:
    """Persist Argus UI data to HA storage."""
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    current = await async_load_ui_data(hass)
    current.update(data or {})
    await store.async_save(current)
    return current


async def async_append_audit_log(
    hass: HomeAssistant, action: str, detail: str = "", user: str = "Argus"
) -> None:
    """Append an event to the Argus audit log (max 200 entries, newest first)."""
    import datetime
    store = Store(hass, _STORAGE_VERSION, _STORAGE_KEY)
    current = await async_load_ui_data(hass)
    log: list = current.get("audit_log", [])
    
    # Standardize action key for comparison
    def norm(s): return str(s or "").lower().replace("ed", "").strip()
    
    # Deduplication: Ensure we prefer User logs over generic Argus logs for the same event
    now = datetime.datetime.now(datetime.timezone.utc)
    if log:
        latest = log[0]
        try:
            latest_ts = datetime.datetime.fromisoformat(latest["ts"].replace("Z", "+00:00"))
            if (now - latest_ts).total_seconds() < 5.0:
                if norm(action) == norm(latest.get("action")):
                    if user == "Argus" and latest.get("user") != "Argus":
                        return  # Skip generic log since we already have a user log
                    if user != "Argus" and latest.get("user") == "Argus":
                        log.pop(0) # Remove existing generic log to favor the user log
        except Exception:
            pass

    entry = {
        "ts": now.isoformat(),
        "action": action,
        "detail": detail,
        "user": user,
    }
    log.insert(0, entry)
    current["audit_log"] = log[:AUDIT_LOG_MAX]
    await store.async_save(current)


async def async_get_audit_log(hass: HomeAssistant) -> list:
    """Return the audit log list."""
    data = await async_load_ui_data(hass)
    return data.get("audit_log", [])
