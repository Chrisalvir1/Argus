"""Argus Cryptographic Forensic Hash-Chaining & Integrity Verification."""
from __future__ import annotations

import hashlib
import json
from typing import Any


def compute_event_hash(event: dict[str, Any], prev_hash: str = "") -> str:
    """Compute SHA-256 hash of an audit event linked to the previous event hash."""
    payload = {
        "ts": event.get("ts"),
        "action": event.get("action"),
        "detail": event.get("detail"),
        "user": event.get("user"),
        "severity": event.get("severity"),
        "prev_hash": prev_hash,
    }
    # Add semantic presentation fields only when present so historical chains
    # created before i18n metadata remain verifiable.
    if "message_key" in event:
        payload["message_key"] = event.get("message_key")
        payload["message_params"] = event.get("message_params", {})
    serialized = json.dumps(payload, sort_keys=True)
    return hashlib.sha256(serialized.encode("utf-8")).hexdigest()


def verify_forensic_chain(events: list[dict[str, Any]]) -> tuple[bool, str]:
    """Verify integrity of chronological audit event list. Return (is_valid, error_msg)."""
    if not isinstance(events, list) or not events:
        return True, "Empty chain"

    prev_hash = ""
    # Events are stored newest-first or oldest-first; process oldest to newest
    ordered_events = list(reversed(events)) if events[0].get("ts", "") > events[-1].get("ts", "") else events

    for idx, evt in enumerate(ordered_events):
        recorded_hash = evt.get("hash")
        expected_hash = compute_event_hash(evt, prev_hash)
        if recorded_hash and recorded_hash != expected_hash:
            return False, f"Tamper detected at index {idx} (action: {evt.get('action')})"
        prev_hash = expected_hash

    return True, "Chain intact"
