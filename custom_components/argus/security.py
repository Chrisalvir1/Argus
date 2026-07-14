"""Small, dependency-free helpers for storing Argus PINs safely."""
from __future__ import annotations

import base64
import hashlib
import hmac
import os


_PREFIX = "scrypt"


def hash_pin(pin: str) -> str:
    """Return a salted scrypt representation of a numeric PIN."""
    salt = os.urandom(16)
    digest = hashlib.scrypt(pin.encode(), salt=salt, n=2**14, r=8, p=1)
    return ":".join((_PREFIX, base64.b64encode(salt).decode(), base64.b64encode(digest).decode()))


def verify_pin(pin: str | None, stored: str | None) -> bool:
    """Compare a PIN against a current hash or a legacy plaintext value."""
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
