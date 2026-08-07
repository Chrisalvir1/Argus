"""Regression contracts for the v2.0.47 root-cause fixes."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"
WWW = COMPONENT / "www"


class TestV2047StabilityContract(unittest.TestCase):
    def test_homekit_wait_publishes_exact_target_and_gates_triggering(self):
        source = (COMPONENT / "safety_runtime.py").read_text(encoding="utf-8")
        self.assertIn("self._alarm_state = target", source)
        self.assertIn('request["published_target_state"] = target.value', source)
        self.assertIn("waiting_safe_sensor_changed", source)
        self.assertIn("if not request:", source)
        waiting_block = source.split("def waiting_safe_sensor_changed", 1)[1].split("async def safe_disarm", 1)[0]
        self.assertNotIn("_evaluate_automations", waiting_block)
        self.assertNotIn(
            "self._alarm_state=AlarmControlPanelState.ARMING",
            source,
        )

    def test_off_cancels_pending_request_before_pin_validation(self):
        source = (COMPONENT / "safety_runtime.py").read_text(encoding="utf-8")
        self.assertIn("pending = getattr(self, \"_arm_request\", None)", source)
        self.assertIn("cancelled_from_off", source)
        self.assertIn("async_announce_arming_cancelled", source)

    def test_voice_form_preserves_missing_fields(self):
        source = (COMPONENT / "config_flow.py").read_text(encoding="utf-8")
        self.assertIn("if key not in user_input:continue", source)
        self.assertNotIn("else:submitted.pop(key,None)", source)

    def test_tts_failure_is_visible(self):
        source = (COMPONENT / "arming_voice.py").read_text(encoding="utf-8")
        self.assertIn("persistent_notification", source)
        self.assertIn("argus_voice_config_incomplete", source)
        self.assertIn("argus_voice_error_", source)

    def test_dashboard_server_merge_is_atomic(self):
        runtime = (COMPONENT / "safety_runtime.py").read_text(encoding="utf-8")
        storage = (COMPONENT / "dashboard_storage.py").read_text(encoding="utf-8")
        self.assertIn("async_save_dashboard_patch", runtime)
        self.assertIn("async with _storage_lock(hass)", storage)
        self.assertIn("merge_dashboard_patch", storage)

    def test_react_is_the_only_widget_editor(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text(encoding="utf-8")
        self.assertIn("react-dist/argus-dashboard-react.js", bootstrap)
        self.assertNotIn("applyV2040DashboardFixes", bootstrap)
        self.assertIn("applyDashboardScrollFixes", bootstrap)


if __name__ == "__main__":
    unittest.main()
