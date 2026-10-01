import unittest
import importlib.util
from pathlib import Path

_SPEC = importlib.util.spec_from_file_location(
    "argus_floorplan_schema",
    Path(__file__).parents[1] / "custom_components/argus/core/floorplan.py",
)
_FLOORPLAN = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(_FLOORPLAN)
validate_floorplan_schema = _FLOORPLAN.validate_floorplan_schema


class FloorplanSchemaTests(unittest.TestCase):
    def test_accepts_local_image_and_clamps_marker_coordinates(self):
        result = validate_floorplan_schema({
            "image_url": "/local/floorplan.png",
            "markers": [{"entity_id": "binary_sensor.front_door", "x": 120, "y": -3}],
        })
        self.assertEqual(result["image_url"], "/local/floorplan.png")
        self.assertEqual(result["markers"][0]["x"], 100)
        self.assertEqual(result["markers"][0]["y"], 0)

    def test_rejects_active_or_remote_non_https_image_schemes(self):
        for url in ("javascript:alert(1)", "data:image/png;base64,abc", "http://example.com/plan.png", "//example.com/plan.png"):
            with self.subTest(url=url), self.assertRaises(ValueError):
                validate_floorplan_schema({"image_url": url})

    def test_rejects_invalid_entities_and_bounds_marker_count(self):
        with self.assertRaises(ValueError):
            validate_floorplan_schema({"markers": [{"entity_id": "javascript:alert(1)"}]})
        with self.assertRaises(ValueError):
            validate_floorplan_schema({"markers": [{"entity_id": f"binary_sensor.door_{i}"} for i in range(201)]})

    def test_bounds_user_supplied_labels_and_deduplicates(self):
        marker = {"entity_id": "binary_sensor.front_door", "label": "x" * 100}
        result = validate_floorplan_schema({"markers": [marker, marker]})
        self.assertEqual(len(result["markers"]), 1)
        self.assertEqual(len(result["markers"][0]["label"]), 80)


if __name__ == "__main__":
    unittest.main()
