"""Tests for Stage 4 Correlated Incident Engine and Command Center."""
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


incidents = load_module("argus.core.incidents", COMPONENT / "core" / "incidents.py")


class TestStage4Incidents(unittest.TestCase):
    def test_life_safety_critical_priority(self) -> None:
        engine = incidents.IncidentEngine()
        evt = incidents.IncidentEvent(sensor_id="binary_sensor.smoke_detector", area_id="kitchen", device_class="smoke")

        inc = engine.process_sensor_event(evt)
        self.assertEqual(inc.severity, incidents.IncidentSeverity.CRITICAL)
        self.assertEqual(inc.confidence_score, 1.0)
        self.assertEqual(inc.status, incidents.IncidentStatus.OPEN)

    def test_multi_sensor_correlation_sequence(self) -> None:
        engine = incidents.IncidentEngine()
        evt1 = incidents.IncidentEvent(sensor_id="binary_sensor.door_front", area_id="living_room")
        evt2 = incidents.IncidentEvent(sensor_id="binary_sensor.motion_living", area_id="living_room")
        evt3 = incidents.IncidentEvent(sensor_id="binary_sensor.motion_hallway", area_id="living_room")

        inc1 = engine.process_sensor_event(evt1)
        self.assertEqual(inc1.confidence_score, 0.6)
        self.assertEqual(len(inc1.sensor_sequence), 1)

        # Correlate second sensor
        inc2 = engine.process_sensor_event(evt2)
        self.assertEqual(inc2.id, inc1.id)
        self.assertEqual(len(inc2.sensor_sequence), 2)
        self.assertEqual(inc2.confidence_score, 0.85)

        # Correlate third sensor -> High confidence
        inc3 = engine.process_sensor_event(evt3)
        self.assertEqual(len(inc3.sensor_sequence), 3)
        self.assertEqual(inc3.confidence_score, 0.98)
        self.assertEqual(inc3.severity, incidents.IncidentSeverity.HIGH)

    def test_incident_actions(self) -> None:
        engine = incidents.IncidentEngine()
        evt = incidents.IncidentEvent(sensor_id="binary_sensor.window_study", area_id="study")
        inc = engine.process_sensor_event(evt)

        # Confirm incident
        confirmed = engine.confirm_incident(inc.id, actor="Admin")
        self.assertIsNotNone(confirmed)
        self.assertEqual(confirmed.status, incidents.IncidentStatus.CONFIRMED)

        # Resolve incident
        resolved = engine.resolve_incident(inc.id, actor="Admin", reason="All clear")
        self.assertIsNotNone(resolved)
        self.assertEqual(resolved.status, incidents.IncidentStatus.RESOLVED)


if __name__ == "__main__":
    unittest.main()
