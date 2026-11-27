"""Dependency-free security helpers for Argus PIN credentials."""
from __future__ import annotations

import base64
from collections.abc import Callable
from dataclasses import asdict, dataclass
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
    return hash_legacy_pin(pin)


def hash_legacy_pin(pin: str) -> str:
    """Preserve an existing credential irrespective of current PIN policy."""
    salt = os.urandom(16)
    prefix = _PREFIX if hasattr(hashlib, "scrypt") else "pbkdf2_sha256"
    if hasattr(hashlib, "scrypt"):
        digest = hashlib.scrypt(pin.encode(), salt=salt, n=2**14, r=8, p=1)
    else:
        digest = hashlib.pbkdf2_hmac("sha256", pin.encode(), salt, 100000)
    return ":".join(
        (prefix, base64.b64encode(salt).decode(), base64.b64encode(digest).decode())
    )


def verify_pin(pin: str | None, stored: str | None) -> bool:
    """Compare a PIN against a stored credential hash."""
    if not pin or not isinstance(stored, str) or not stored:
        return False
    if not stored.startswith((f"{_PREFIX}:", "pbkdf2_sha256:")):
        return False
    try:
        prefix, raw_salt, raw_digest = stored.split(":", 2)
        salt = base64.b64decode(raw_salt, validate=True)
        expected = base64.b64decode(raw_digest, validate=True)
        # Older fallback hashes were mislabeled scrypt but have a 32-byte digest.
        use_pbkdf2 = prefix == "pbkdf2_sha256" or (prefix == _PREFIX and len(expected) == 32)
        if not use_pbkdf2 and hasattr(hashlib, "scrypt"):
            digest = hashlib.scrypt(
                str(pin).encode(), salt=salt, n=2**14, r=8, p=1
            )
        elif use_pbkdf2:
            digest = hashlib.pbkdf2_hmac("sha256", str(pin).encode(), salt, 100000)
        else:
            return False
        return hmac.compare_digest(digest, expected)
    except (ValueError, TypeError):
        return False


def needs_rehash(stored: str | int | None) -> bool:
    """Return whether a stored credential still uses the legacy format."""
    return bool(stored) and not str(stored).startswith((f"{_PREFIX}:", "pbkdf2_sha256:"))


@dataclass
class PinAttemptState:
    """Failed-attempt state for one authenticated Home Assistant user."""

    failures: int = 0
    blocked_until: float = 0.0
    retry_level: int = 0
    expires_at: float = 0.0


class PinAttemptLimiter:
    """Rate-limit PIN attempts with bounded, restart-safe deadlines."""

    _IDLE_SECONDS = 24 * 60 * 60
    _MAX_RETRY_LEVEL = 8

    def __init__(
        self,
        max_attempts: int = 5,
        block_seconds: int = 300,
        *,
        saved: dict | None = None,
        on_change: Callable[[], None] | None = None,
    ) -> None:
        self.max_attempts = max_attempts
        self.block_seconds = block_seconds
        self._on_change = on_change
        self._states: dict[str, PinAttemptState] = {}
        now = time.time()
        for key, state in (saved if isinstance(saved, dict) else {}).items():
            try:
                candidate = PinAttemptState(**state)
                if (
                    0 <= candidate.failures < max_attempts
                    and 0 <= candidate.retry_level <= self._MAX_RETRY_LEVEL
                    and 0 <= candidate.blocked_until <= candidate.expires_at
                    and now < candidate.expires_at <= now + self._IDLE_SECONDS
                ):
                    self._states[key] = candidate
            except (TypeError, ValueError):
                continue

    def snapshot(self) -> dict:
        now = time.time()
        return {
            key: asdict(state)
            for key, state in self._states.items()
            if state.expires_at > now
        }

    def _changed(self) -> None:
        if self._on_change:
            self._on_change()

    def is_blocked(self, key: str) -> bool:
        state = self._states.get(key)
        if state is None:
            return False
        now = time.time()
        if state.expires_at <= now:
            self._states.pop(key, None)
            return False
        return state.blocked_until > now

    def record_failure(self, key: str) -> bool:
        if self.is_blocked(key):
            return True
        now = time.time()
        state = self._states.setdefault(key, PinAttemptState())
        state.expires_at = now + self._IDLE_SECONDS
        state.failures += 1
        blocked = state.failures >= self.max_attempts
        if blocked:
            delay = min(self.block_seconds * 2 ** state.retry_level, 60 * 60)
            state.blocked_until = now + delay
            state.retry_level = min(state.retry_level + 1, self._MAX_RETRY_LEVEL)
            state.failures = 0
        self._changed()
        return blocked

    def reset(self, key: str) -> None:
        if self._states.pop(key, None) is not None:
            self._changed()
