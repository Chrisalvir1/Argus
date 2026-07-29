"""Tests for Stage 1 Sanitation and Modular Architecture."""
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
state_machine = load_module("argus.core.state_machine", COMPONENT / "core" / "state_machine.py")
panic = load_module("argus.core.panic", COMPONENT / "core" / "panic.py")
mqtt = load_module("argus.core.mqtt", COMPONENT / "core" / "mqtt.py")
users = load_module("argus.access.users", COMPONENT / "access" / "users.py")
events = load_module("argus.audit.events", COMPONENT / "audit" / "events.py")
forensics = load_module("argus.audit.forensics", COMPONENT / "audit" / "forensics.py")


class TestStage1Architecture(unittest.TestCase):
    def test_state_machine(self) -> None:
        self.assertTrue(state_machine.is_armed_state("armed_home"))
        self.assertFalse(state_machine.is_armed_state("disarmed"))
        self.assertTrue(state_machine.is_active_sensor_state("open"))
        self.assertFalse(state_machine.is_active_sensor_state("off"))

    def test_panic_localization(self) -> None:
        res = panic.get_sos_messages("es", "Casa", "911")
        self.assertIn("ARGUS — SOS", res["title"])
        self.assertIn("911", res["message"])

    def test_mqtt_parser(self) -> None:
        cmd, code = mqtt.parse_mqtt_payload('{"command": "ARM_AWAY", "pin": "12345"}')
        self.assertEqual(cmd, "ARM_AWAY")
        self.assertEqual(code, "12345")

    def test_users_sanitization_and_lookup(self) -> None:
        raw_users = [{"name": "Admin", "pin": "840275"}]
        sanitized = users.sanitize_user_list(raw_users)
        self.assertTrue(sanitized[0]["pin"].startswith("scrypt:"))
        found = users.find_user_by_pin("840275", sanitized)
        self.assertIsNotNone(found)
        self.assertEqual(found["name"], "Admin")

    def test_audit_and_forensics(self) -> None:
        e1 = events.format_audit_entry("alarm_armed", "Armed home mode", "Admin")
        h1 = forensics.compute_event_hash(e1, "")
        e1["hash"] = h1
        valid, msg = forensics.verify_forensic_chain([e1])
        self.assertTrue(valid)
        self.assertEqual(msg, "Chain intact")


if __name__ == "__main__":
    unittest.main()
