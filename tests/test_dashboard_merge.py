"""Functional tests for the v2.0.47 dashboard persistence fix.

Loads dashboard_merge.py directly from its file path so the tests run without
Home Assistant installed.
"""
from pathlib import Path
import importlib.util
import unittest


def _load_merge():
    module_path = (
        Path(__file__).resolve().parents[1]
        / "custom_components" / "argus" / "dashboard_merge.py"
    )
    spec = importlib.util.spec_from_file_location("argus_dashboard_merge", module_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.merge_dashboard_patch


class TestDashboardMerge(unittest.TestCase):
    def setUp(self):
        self.merge = _load_merge()

    def test_react_layout_patch_preserves_legacy_widget_layout(self):
        existing = {
            "widget_layout": {"activity": {"x": 1}},
            "react_layout_v2": {
                "layouts": {"lg": [{"i": "a", "x": 0}]},
                "visibility": {"automations": False},
                "layoutVersion": 2,
            },
        }
        out = self.merge(existing, {"react_layout_v2": {"layouts": {"lg": [{"i": "a", "x": 4}]}}})
        self.assertEqual(out["widget_layout"], {"activity": {"x": 1}})
        self.assertEqual(out["react_layout_v2"]["layouts"], {"lg": [{"i": "a", "x": 4}]})
        self.assertEqual(out["react_layout_v2"]["visibility"], {"automations": False})
        self.assertEqual(out["react_layout_v2"]["layoutVersion"], 2)

    def test_legacy_patch_preserves_react_layout(self):
        existing = {"react_layout_v2": {"layouts": {"lg": []}, "visibility": {}}}
        out = self.merge(existing, {"widget_layout": {"w": 1}})
        self.assertEqual(out["react_layout_v2"]["layouts"], {"lg": []})
        self.assertEqual(out["widget_layout"], {"w": 1})

    def test_explicit_reset_still_works(self):
        existing = {
            "react_layout_v2": {"layouts": {"lg": [{"i": "a"}]}, "visibility": {"a": False}}
        }
        out = self.merge(existing, {"react_layout_v2": {"layouts": {"lg": []}, "visibility": {}}})
        self.assertEqual(out["react_layout_v2"]["layouts"], {"lg": []})
        self.assertEqual(out["react_layout_v2"]["visibility"], {})

    def test_non_dict_inputs_are_safe(self):
        self.assertEqual(self.merge(None, {"a": 1}), {"a": 1})
        self.assertEqual(self.merge({"a": 1}, None), {"a": 1})
        self.assertEqual(self.merge(None, None), {})

    def test_inputs_are_not_mutated(self):
        existing = {"react_layout_v2": {"layouts": {"lg": []}}}
        patch = {"react_layout_v2": {"visibility": {"a": True}}}
        self.merge(existing, patch)
        self.assertEqual(existing, {"react_layout_v2": {"layouts": {"lg": []}}})
        self.assertEqual(patch, {"react_layout_v2": {"visibility": {"a": True}}})


if __name__ == "__main__":
    unittest.main()
