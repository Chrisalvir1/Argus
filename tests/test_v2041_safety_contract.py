import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
COMP = ROOT / "custom_components" / "argus"
WWW = COMP / "www"


class TestSafetyContract(unittest.TestCase):
    def test_homekit_off_cancels_any_pending_state(self):
        source = (COMP / "safety_runtime.py").read_text()
        self.assertIn("pending = getattr(self, \"_arm_request\", None)", source)
        self.assertIn("cancelled_from_off", source)
        self.assertIn("async_announce_arming_cancelled", source)

    def test_sensor_safety_defaults_to_pending(self):
        source = (COMP / "safety_runtime.py").read_text()
        self.assertIn('return "pending" if sensors', source)
        self.assertIn("STATE_UNAVAILABLE", source)
        self.assertIn('domain == "binary_sensor"', source)

    def test_yaml_voice_override(self):
        source = (COMP / "arming_voice.py").read_text()
        self.assertIn("arming_voice_yaml", source)
        self.assertIn("merged.update", source)
        self.assertIn('\"tts\", \"speak\"', source)

    def test_panel_repairs_and_react_editor_load(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text()
        self.assertIn("argus-v2041-audit-repair.js?v=2.0.50", bootstrap)
        self.assertIn("applyV2041AuditRepair(ArgusPanel)", bootstrap)
        self.assertIn("applyReactDashboardLayout(ArgusPanel)", bootstrap)


if __name__ == "__main__":
    unittest.main()
