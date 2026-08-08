"""Dashboard persistence helpers for Argus.

Pure functions with no Home Assistant imports so they can be unit-tested in
isolation and reused from the WebSocket layer.
"""
from __future__ import annotations

import copy


def merge_dashboard_patch(existing: object, patch: object) -> dict:
    """Recursively merge a dashboard update patch into the stored dashboard.

    Patch semantics: only keys present in ``patch`` are written; nested dicts
    merge recursively; any other value replaces the stored one.

    Root cause fixed (v2.0.48): the ``dashboard`` storage key is shared by the
    React editor (``react_layout_v2``) and legacy layers (``widget_layout``).
    The previous wholesale replace let whichever client saved last wipe every
    key it did not know about, so the widget board reset after updates.
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
