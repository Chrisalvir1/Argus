"""Argus Local Floorplan Engine & Marker Position Schema Validator."""
from __future__ import annotations

import copy
from typing import Any, Dict, List, Optional


def validate_floorplan_schema(payload: Dict[str, Any]) -> Dict[str, Any]:
    """Validate and sanitize local interactive floorplan layout payload."""
    if not isinstance(payload, dict):
        raise ValueError("Floorplan payload must be an object")

    sanitized = {
        "image_url": str(payload.get("image_url") or ""),
        "markers": [],
        "rooms": [],
        "grid_snap": bool(payload.get("grid_snap", True)),
    }

    markers = payload.get("markers", [])
    if isinstance(markers, list):
        for item in markers:
            if isinstance(item, dict) and "entity_id" in item:
                try:
                    x = max(0.0, min(100.0, float(item.get("x", 50.0))))
                    y = max(0.0, min(100.0, float(item.get("y", 50.0))))
                except (ValueError, TypeError):
                    x, y = 50.0, 50.0
                sanitized["markers"].append({
                    "entity_id": str(item["entity_id"]),
                    "x": x,
                    "y": y,
                    "icon": str(item.get("icon") or "mdi:shield-home"),
                    "label": str(item.get("label") or item["entity_id"]),
                    "device_type": str(item.get("device_type") or "sensor"),
                })

    return sanitized
