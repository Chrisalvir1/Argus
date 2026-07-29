"""Behavioral tests for dependency-free Argus security helpers."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import unittest

MODULE = Path(__file__).parents[1] / "custom_components" / "argus" / "security.py"
SPEC = importlib.util.spec_from_file_location("argus_security", MODULE)
assert SPEC and SPEC.loader
security = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = security
SPEC.loader.exec_module(security)


class TestSecurityHelpers(unittest.TestCase):
    def test_hash_is_salted_and_verifiable(self) -> None:
        first = security.hash_pin("7391")
        second = security.hash_pin("7391")
        self.assertNotEqual(first, second)
        self.assertTrue(security.verify_pin("7391", first))
        self.assertFalse(security.verify_pin("7392", first))

    def test_hash_rejects_weak_pin(self) -> None:
        for weak in ("1234", "0000", "1111"):
            with self.subTest(pin=weak), self.assertRaises(ValueError):
                security.hash_pin(weak)

    def test_pin_policy(self) -> None:
        for weak in (None, "", "1234", "0000", "12ab", "123", "1234567890123"):
            with self.subTest(pin=weak):
                self.assertFalse(security.validate_pin(weak))
        self.assertTrue(security.validate_pin("7391"))
        self.assertTrue(security.validate_pin("840275"))

    def test_attempt_limiter(self) -> None:
        limiter = security.PinAttemptLimiter(max_attempts=2, block_seconds=60)
        self.assertFalse(limiter.is_blocked("user"))
        self.assertFalse(limiter.record_failure("user"))
        self.assertTrue(limiter.record_failure("user"))
        self.assertTrue(limiter.is_blocked("user"))
        limiter.reset("user")
        self.assertFalse(limiter.is_blocked("user"))

    def test_legacy_detection(self) -> None:
        self.assertTrue(security.needs_rehash("7391"))
        self.assertFalse(security.needs_rehash(security.hash_pin("7391")))
        self.assertFalse(security.needs_rehash(None))


if __name__ == "__main__":
    unittest.main()
