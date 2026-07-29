"""Tests for Stage 6 Interactive Floorplan and Visual Experience Engine."""
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


floorplan = load_module("argus.core.floorplan", COMPONENT / "core" / "floorplan.py")


class TestStage6FloorplanVisual(unittest.TestCase):
    def test_floorplan_schema_validation(self) -> None:
        raw = {
            "image_url": "/local/argus/floorplan.png",
            "markers": [
                {"entity_id": "binary_sensor.door_front", "x": 25.5, "y": 110.0, "label": "Puerta Principal"},
                {"entity_id": "camera.living_room", "x": -5.0, "y": 45.0, "label": "Cámara Sala"},
            ],
            "grid_snap": True,
        }
        sanitized = floorplan.validate_floorplan_schema(raw)

        self.assertEqual(sanitized["image_url"], "/local/argus/floorplan.png")
        self.assertEqual(len(sanitized["markers"]), 2)

        # Verify coordinate clamping between 0.0 and 100.0
        m1 = sanitized["markers"][0]
        self.assertEqual(m1["x"], 25.5)
        self.assertEqual(m1["y"], 100.0)  # Clamped from 110.0 to 100.0

        m2 = sanitized["markers"][1]
        self.assertEqual(m2["x"], 0.0)    # Clamped from -5.0 to 0.0
        self.assertEqual(m2["y"], 45.0)


if __name__ == "__main__":
    unittest.main()
