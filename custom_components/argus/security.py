"""Dependency-free security helpers for Argus PIN credentials."""
from __future__ import annotations

import base64
from dataclasses import dataclass
import hashlib
import hmac
import os
import re
import time

_PREFIX = "scrypt"
_PIN_PATTERN = re.compile(r"^\d{4,12}$")
_COMMON_PINS = {"0000", "1111", "1234", "4321", "1212", "9999", "2580"}


def validate_pin(pin: str | None) -> bool:
    """Return whether a PIN satisfies the Argus security policy."""
    if not pin or not _PIN_PATTERN.fullmatch(str(pin)):
        return False
    value = str(pin)
    if value in _COMMON_PINS or len(set(value)) == 1:
        return False
    sequences = "01234567890123456789"
    return value not in sequences and value not in sequences[::-1]


def hash_pin(pin: str) -> str:
    """Return a salted scrypt representation of a validated PIN."""
    if not validate_pin(pin):
        raise ValueError("PIN does not satisfy the Argus security policy")
    salt = os.urandom(16)
    digest = hashlib.scrypt(pin.encode(), salt=salt, n=2**14, r=8, p=1)
    return ":".join(
        (_PREFIX, base64.b64encode(salt).decode(), base64.b64encode(digest).decode())
    )


def verify_pin(pin: str | None, stored: str | None) -> bool:
    """Compare a PIN against a current hash or legacy plaintext value."""
    if not pin or not stored:
        return False
    if not stored.startswith(f"{_PREFIX}:"):
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


@dataclass
class PinAttemptState:
    """Failed-attempt state for one authenticated Home Assistant user."""

    failures: int = 0
    blocked_until: float = 0.0


class PinAttemptLimiter:
    """Bound repeated online PIN attempts using monotonic time."""

    def __init__(self, max_attempts: int = 5, block_seconds: int = 300) -> None:
        self.max_attempts = max_attempts
        self.block_seconds = block_seconds
        self._states: dict[str, PinAttemptState] = {}

    def is_blocked(self, key: str) -> bool:
        state = self._states.get(key)
        if not state:
            return False
        if state.blocked_until <= time.monotonic():
            if state.blocked_until:
                self._states.pop(key, None)
            return False
        return True

    def record_failure(self, key: str) -> bool:
        state = self._states.setdefault(key, PinAttemptState())
        state.failures += 1
        if state.failures >= self.max_attempts:
            state.blocked_until = time.monotonic() + self.block_seconds
            return True
        return False

    def reset(self, key: str) -> None:
        self._states.pop(key, None)
