"""Tests for Stage 7 Resilience, Alarmo Migration, and Release Validation."""
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


migration = load_module("argus.core.migration", COMPONENT / "core" / "migration.py")


class TestStage7ResilienceMigration(unittest.TestCase):
    def test_alarmo_safe_import_preview(self) -> None:
        alarmo_data = {
            "sensors": [
                {"entity_id": "binary_sensor.front_door", "modes": ["away", "home"]},
                {"entity_id": "binary_sensor.living_motion", "modes": ["away"]},
            ],
            "areas": [{"name": "House"}],
            "users": [{"name": "Admin", "code": "1234"}],  # Contains sensitive PIN
            "siren_entity": "siren.main_siren",
        }

        preview = migration.AlarmoImporter.preview_import(alarmo_data)
        self.assertTrue(preview.safe_to_import)
        self.assertIn("binary_sensor.front_door", preview.supported_sensors)
        self.assertIn("House", preview.supported_areas)

        # Security assertion: Plaintext PINs are explicitly excluded
        self.assertIn("Alarmo user PIN hashes excluded for security", preview.incompatible_items)

    def test_alarmo_config_generation(self) -> None:
        alarmo_data = {
            "sensors": [
                {"entity_id": "binary_sensor.front_door", "modes": ["away", "home"]},
            ],
            "siren_entity": "siren.alarm",
        }

        argus_config = migration.AlarmoImporter.generate_argus_config(alarmo_data)
        self.assertTrue(argus_config["alarmo_migrated"])
        self.assertEqual(argus_config["siren_entity"], "siren.alarm")
        self.assertIn("binary_sensor.front_door", argus_config["modes"]["away"]["sensors"])
        self.assertIn("binary_sensor.front_door", argus_config["modes"]["home"]["sensors"])


if __name__ == "__main__":
    unittest.main()
