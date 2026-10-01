"""Argus Local Floorplan Engine & Marker Position Schema Validator."""
from __future__ import annotations

import math
import re
from typing import Any, Dict
from urllib.parse import urlsplit

_ENTITY_ID = re.compile(r"^[a-z_][a-z0-9_]*\.[a-z0-9_]+$")


def _safe_image_url(value: Any) -> str:
    url = str(value or "").strip()
    if len(url) > 2048:
        raise ValueError("Floorplan image URL is too long")
    if not url:
        return ""
    parsed = urlsplit(url)
    if parsed.scheme:
        if parsed.scheme.lower() != "https" or not parsed.netloc:
            raise ValueError("Floorplan image must use HTTPS or a local path")
    elif not url.startswith("/") or url.startswith("//") or "\\" in url:
        raise ValueError("Floorplan image must use a local path or HTTPS URL")
    return url


def validate_floorplan_schema(payload: Dict[str, Any]) -> Dict[str, Any]:
    """Validate and sanitize local interactive floorplan layout payload."""
    if not isinstance(payload, dict):
        raise ValueError("Floorplan payload must be an object")

    sanitized = {
        "image_url": _safe_image_url(payload.get("image_url")),
        "markers": [],
        "rooms": [],
        "grid_snap": bool(payload.get("grid_snap", True)),
    }

    markers = payload.get("markers", [])
    if not isinstance(markers, list) or len(markers) > 200:
        raise ValueError("Floorplan must contain at most 200 markers")
    seen = set()
    for item in markers:
        if isinstance(item, dict) and "entity_id" in item:
            entity_id = str(item["entity_id"]).strip()
            if not _ENTITY_ID.fullmatch(entity_id):
                raise ValueError("Floorplan marker has an invalid entity ID")
            if entity_id in seen:
                continue
            seen.add(entity_id)
            try:
                x = float(item.get("x", 50.0))
                y = float(item.get("y", 50.0))
                if not math.isfinite(x) or not math.isfinite(y):
                    raise ValueError
                x = max(0.0, min(100.0, x))
                y = max(0.0, min(100.0, y))
            except (ValueError, TypeError):
                x, y = 50.0, 50.0
            sanitized["markers"].append({
                "entity_id": entity_id,
                "x": x,
                "y": y,
                "icon": str(item.get("icon") or "mdi:shield-home")[:64],
                "label": str(item.get("label") or entity_id)[:80],
                "device_type": str(item.get("device_type") or "sensor")[:32],
            })

    return sanitized
