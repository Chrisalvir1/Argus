"""Tests for Stage 2 Security Hardening and Multi-Instance Isolation."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


def load_module(name: str, file_path: Path):
    spec = importlib.util.spec_from_file_location(name, file_path)
    assert spec and spec.loader
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


pin = load_module("argus.access.pin", COMPONENT / "access" / "pin.py")
users = load_module("argus.access.users", COMPONENT / "access" / "users.py")
events = load_module("argus.audit.events", COMPONENT / "audit" / "events.py")
forensics = load_module("argus.audit.forensics", COMPONENT / "audit" / "forensics.py")


class TestStage2SecurityMultiInstance(unittest.TestCase):
    def test_multi_instance_limiter_isolation(self) -> None:
        limiter1 = pin.PinAttemptLimiter(max_attempts=2, block_seconds=60)
        limiter2 = pin.PinAttemptLimiter(max_attempts=2, block_seconds=60)

        user_key = "user_admin"

        # Record failures on instance 1 until blocked
        self.assertFalse(limiter1.record_failure(user_key))
        self.assertTrue(limiter1.record_failure(user_key))
        self.assertTrue(limiter1.is_blocked(user_key))

        # Instance 2 must remain unblocked
        self.assertFalse(limiter2.is_blocked(user_key))

    def test_disabled_user_rejection(self) -> None:
        user_list = [
            {"name": "Alice", "pin": pin.hash_pin("840275"), "enabled": True},
            {"name": "Bob", "pin": pin.hash_pin("739182"), "enabled": False},
        ]
        # Active user matches
        found_alice = users.find_user_by_pin("840275", user_list)
        self.assertIsNotNone(found_alice)
        self.assertEqual(found_alice["name"], "Alice")

        # Disabled user is rejected by lookup
        found_bob = users.find_user_by_pin("739182", user_list)
        self.assertIsNone(found_bob)

    def test_duress_pin_verification(self) -> None:
        normal_pin_hash = pin.hash_pin("840275")
        duress_pin_hash = pin.hash_pin("918273")

        # Verify normal PIN
        self.assertTrue(pin.verify_pin("840275", normal_pin_hash))
        self.assertFalse(pin.verify_pin("918273", normal_pin_hash))

        # Verify duress PIN
        self.assertTrue(pin.verify_pin("918273", duress_pin_hash))
        self.assertFalse(pin.verify_pin("840275", duress_pin_hash))

    def test_user_list_redaction(self) -> None:
        user_list = [
            {"name": "Alice", "pin": pin.hash_pin("840275"), "enabled": True},
        ]
        redacted = users.redact_users_for_frontend(user_list)
        self.assertTrue(redacted[0]["pin_configured"])
        self.assertNotIn("pin", redacted[0])


if __name__ == "__main__":
    unittest.main()
