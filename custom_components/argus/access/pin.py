"""Argus PIN Validation & Cryptographic Hash Manager (Access Module)."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys

try:
    from ..security import (
        PinAttemptLimiter,
        PinAttemptState,
        hash_pin,
        needs_rehash,
        validate_pin,
        verify_pin,
    )
except (ImportError, ValueError):
    sec_path = Path(__file__).parents[1] / "security.py"
    spec = importlib.util.spec_from_file_location("argus_security_standalone", sec_path)
    if spec and spec.loader:
        sec_mod = importlib.util.module_from_spec(spec)
        sys.modules[spec.name] = sec_mod
        spec.loader.exec_module(sec_mod)
        validate_pin = sec_mod.validate_pin
        hash_pin = sec_mod.hash_pin
        verify_pin = sec_mod.verify_pin
        needs_rehash = sec_mod.needs_rehash
        PinAttemptState = sec_mod.PinAttemptState
        PinAttemptLimiter = sec_mod.PinAttemptLimiter

__all__ = [
    "validate_pin",
    "hash_pin",
    "verify_pin",
    "needs_rehash",
    "PinAttemptState",
    "PinAttemptLimiter",
]
