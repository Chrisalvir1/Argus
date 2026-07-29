"""Tests for Stage 5 Health Center, Privacy & Cryptographic Forensics."""
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


health = load_module("argus.core.health", COMPONENT / "core" / "health.py")
events = load_module("argus.audit.events", COMPONENT / "audit" / "events.py")
forensics = load_module("argus.audit.forensics", COMPONENT / "audit" / "forensics.py")


class TestStage5HealthPrivacyForensics(unittest.TestCase):
    def test_health_evaluation_optimal(self) -> None:
        states = {
            "binary_sensor.door": {"state": "off", "attributes": {"battery_level": 95}},
            "siren.alarm": {"state": "off", "attributes": {}},
        }
        report = health.evaluate_system_health(
            states_dict=states,
            configured_sensors=["binary_sensor.door"],
            siren_entity="siren.alarm",
            mqtt_enabled=False,
        )
        self.assertEqual(report.readiness_score, 100)
        self.assertEqual(report.status, "optimal")
        self.assertEqual(len(report.issues), 0)

    def test_health_evaluation_degraded(self) -> None:
        states = {
            "binary_sensor.door": {"state": "unavailable", "attributes": {}},
            "binary_sensor.window": {"state": "off", "attributes": {"battery_level": 15}},
        }
        report = health.evaluate_system_health(
            states_dict=states,
            configured_sensors=["binary_sensor.door", "binary_sensor.window"],
            siren_entity=None,
            mqtt_enabled=False,
        )
        self.assertLess(report.readiness_score, 80)
        self.assertIn(report.status, ("degraded", "critical"))
        self.assertGreater(len(report.issues), 0)

    def test_cryptographic_forensic_chain_tamper_detection(self) -> None:
        e1 = events.format_audit_entry("system_start", "Argus booted", "System")
        h1 = forensics.compute_event_hash(e1, "")
        e1["hash"] = h1

        e2 = events.format_audit_entry("alarm_armed", "Armed away", "Admin")
        h2 = forensics.compute_event_hash(e2, h1)
        e2["hash"] = h2

        chain = [e1, e2]
        valid, msg = forensics.verify_forensic_chain(chain)
        self.assertTrue(valid)

        # Alter e1 detail to simulate tampering
        e1["detail"] = "Tampered detail text"
        valid_tampered, msg_tampered = forensics.verify_forensic_chain(chain)
        self.assertFalse(valid_tampered)
        self.assertIn("Tamper detected", msg_tampered)


if __name__ == "__main__":
    unittest.main()
