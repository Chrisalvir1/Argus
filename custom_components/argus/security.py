"""Dependency-free security helpers for Argus PIN credentials."""
from __future__ import annotations

import base64
import hashlib
import hmac
import os
import re

_PREFIX = "scrypt"
_PIN_PATTERN = re.compile(r"^\d{4,12}$")
_COMMON_PINS = {"0000", "1111", "1234", "4321", "1212", "9999", "2580"}


def validate_pin(pin: str | None) -> bool:
    """Return whether a PIN satisfies the Argus security policy."""
    if not pin or not _PIN_PATTERN.fullmatch(str(pin)):
        return False
    value = str(pin)
    if value in _COMMON_PINS:
        return False
    if len(set(value)) == 1:
        return False
    ascending = "01234567890123456789"
    descending = ascending[::-1]
    return value not in ascending and value not in descending


def hash_pin(pin: str) -> str:
    """Return a salted scrypt representation of a PIN."""
    salt = os.urandom(16)
    digest = hashlib.scrypt(pin.encode(), salt=salt, n=2**14, r=8, p=1)
    return ":".join(
        (_PREFIX, base64.b64encode(salt).decode(), base64.b64encode(digest).decode())
    )


def verify_pin(pin: str | None, stored: str | None) -> bool:
    """Compare a PIN against a current hash or a legacy plaintext value."""
    if not pin or not stored:
        return False
    if not stored.startswith(f"{_PREFIX}:"):
        # Legacy support is intentionally comparison-only. Callers should
        # replace the value with hash_pin(pin) after successful authentication.
        return hmac.compare_digest(str(pin), str(stored))
    try:
        _, raw_salt, raw_digest = stored.split(":", 2)
        digest = hashlib.scrypt(
            str(pin).encode(), salt=base64.b64decode(raw_salt), n=2**14, r=8, p=1
        )
        return hmac.compare_digest(digest, base64.b64decode(raw_digest))
    except (ValueError, TypeError):
        return False


def needs_rehash(stored: str | None) -> bool:
    """Return whether a stored credential still uses the legacy format."""
    return bool(stored) and not str(stored).startswith(f"{_PREFIX}:")
