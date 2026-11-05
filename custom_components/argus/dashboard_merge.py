"""Dashboard persistence helpers for Argus.

Pure functions with no Home Assistant imports so they can be unit-tested in
isolation and reused from the WebSocket layer.
"""
from __future__ import annotations

import copy
from datetime import datetime, timezone


def repair_saved_layout_collisions(value: object) -> tuple[dict | None, bool]:
    """Push overlapping saved widgets down while preserving their columns."""
    if not isinstance(value, dict) or value.get("layoutVersion") != 5:
        return None, False
    layouts = value.get("layouts")
    if not isinstance(layouts, dict):
        return None, False

    repaired = copy.deepcopy(value)
    any_changed = False
    for breakpoint, items in repaired["layouts"].items():
        if not isinstance(items, list):
            continue
        valid = [
            item for item in items
            if isinstance(item, dict)
            and all(isinstance(item.get(key), (int, float)) for key in ("x", "y", "w", "h"))
        ]
        placed: list[dict] = []
        changed = False
        # Preserve the earliest widget's position; later colliding widgets move
        # below it. Stable source ordering breaks ties deterministically.
        for item in sorted(valid, key=lambda widget: (widget["y"], widget["x"])):
            while True:
                collisions = [
                    other for other in placed
                    if item["x"] < other["x"] + other["w"]
                    and item["x"] + item["w"] > other["x"]
                    and item["y"] < other["y"] + other["h"]
                    and item["y"] + item["h"] > other["y"]
                ]
                if not collisions:
                    break
                item["y"] = max(other["y"] + other["h"] for other in collisions)
                changed = True
            placed.append(item)
        if changed:
            positions = {item.get("i"): item for item in valid}
            repaired["layouts"][breakpoint] = [
                positions.get(item.get("i"), item) for item in items
            ]
            any_changed = True

    if not any_changed:
        return repaired, False
    repaired["revision"] = int(repaired.get("revision") or 0) + 1
    repaired["updatedAt"] = datetime.now(timezone.utc).isoformat()
    return repaired, True


def merge_dashboard_patch(existing: object, patch: object) -> dict:
    """Recursively merge a dashboard update patch into the stored dashboard.

    Patch semantics: only keys present in ``patch`` are written; nested dicts
    merge recursively; any other value replaces the stored one.

    The dashboard key is shared with other Argus UI settings, so layout writes
    must merge recursively. The current frontend stores its layout in the
    versioned ``react_layout_v3`` namespace; older keys remain readable only
    during migration.
    """
    base = copy.deepcopy(existing) if isinstance(existing, dict) else {}
    if not isinstance(patch, dict):
        return base
    for key, value in patch.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            # An explicit empty object means "clear/reset this section".
            # Non-empty objects merge so independent React layout and
            # visibility saves cannot erase one another.
            base[key] = (
                merge_dashboard_patch(base[key], value)
                if value else {}
            )
        else:
            base[key] = copy.deepcopy(value)
    return base
