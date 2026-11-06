import unittest
import importlib.util
from pathlib import Path

MODULE_PATH = Path(__file__).resolve().parents[1] / "custom_components" / "argus" / "dashboard_merge.py"
SPEC = importlib.util.spec_from_file_location("argus_dashboard_merge_test", MODULE_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)
repair_saved_layout_collisions = MODULE.repair_saved_layout_collisions


class SavedDashboardCollisionRepairTests(unittest.TestCase):
    def test_repairs_saved_v5_overlap_without_changing_columns(self):
        saved = {
            "layoutVersion": 5,
            "revision": 136,
            "updatedAt": "old",
            "visibility": {"automations": False},
            "layouts": {
                "lg": [
                    {"i": "access-control", "x": 34, "y": 45, "w": 40, "h": 36},
                    {"i": "alarm-configuration", "x": 28, "y": 0, "w": 68, "h": 57},
                ],
                "md": [
                    {"i": "activity-history", "x": 0, "y": 0, "w": 40, "h": 36},
                    {"i": "automations", "x": 40, "y": 0, "w": 40, "h": 36},
                ],
            },
        }

        repaired, changed = repair_saved_layout_collisions(saved)

        self.assertTrue(changed)
        self.assertEqual(repaired["layouts"]["lg"][0]["x"], 34)
        self.assertEqual(repaired["layouts"]["lg"][0]["y"], 57)
        self.assertEqual(repaired["layouts"]["lg"][1]["x"], 28)
        self.assertEqual(repaired["layouts"]["lg"][1]["y"], 0)
        self.assertEqual(repaired["revision"], 137)
        self.assertEqual(repaired["visibility"], {"automations": False})
        self.assertEqual(saved["layouts"]["lg"][0]["y"], 45)

    def test_keeps_non_overlapping_layout_unchanged(self):
        saved = {
            "layoutVersion": 5,
            "revision": 4,
            "layouts": {"lg": [
                {"i": "one", "x": 0, "y": 0, "w": 10, "h": 10},
                {"i": "two", "x": 10, "y": 0, "w": 10, "h": 10},
            ]},
        }

        repaired, changed = repair_saved_layout_collisions(saved)

        self.assertFalse(changed)
        self.assertEqual(repaired, saved)


if __name__ == "__main__":
    unittest.main()
