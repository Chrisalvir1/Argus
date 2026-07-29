"""Argus User Management & Permission Audit Helper."""
from __future__ import annotations

import copy
from typing import Any

try:
    from .pin import hash_pin, validate_pin, verify_pin
except ImportError:
    try:
        from access.pin import hash_pin, validate_pin, verify_pin  # type: ignore
    except ImportError:
        from pin import hash_pin, validate_pin, verify_pin  # type: ignore


def sanitize_user_list(users: list[Any]) -> list[dict[str, Any]]:
    """Sanitize user dictionaries from untrusted or storage input."""
    if not isinstance(users, list):
        raise ValueError("users must be a list")
    sanitized: list[dict[str, Any]] = []
    for item in users:
        if not isinstance(item, dict):
            raise ValueError("every user must be an object")
        user = copy.deepcopy(item)
        pin = user.get("pin")
        if pin and not str(pin).startswith("scrypt:"):
            if not validate_pin(str(pin)):
                raise ValueError("user object contains an invalid PIN")
            user["pin"] = hash_pin(str(pin))
        user.setdefault("enabled", True)
        user.setdefault("role", "user")
        sanitized.append(user)
    return sanitized


def find_user_by_pin(pin: str, users: list[dict[str, Any]]) -> dict[str, Any] | None:
    """Find user matching given PIN using secure timing-safe verify_pin."""
    if not pin or not isinstance(users, list):
        return None
    for user in users:
        if not isinstance(user, dict):
            continue
        if user.get("enabled") is False:
            continue
        stored_pin = user.get("pin")
        if stored_pin and verify_pin(pin, str(stored_pin)):
            return user
    return None


def redact_users_for_frontend(users: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Return user payload with credentials redacted."""
    redacted = []
    for user in users if isinstance(users, list) else []:
        if isinstance(user, dict):
            item = copy.deepcopy(user)
            item["pin_configured"] = bool(item.get("pin"))
            item.pop("pin", None)
            redacted.append(item)
    return redacted
