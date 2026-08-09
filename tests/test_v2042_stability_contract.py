import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
COMP = ROOT / "custom_components" / "argus"
WWW = COMP / "www"


class TestV2042Stability(unittest.TestCase):
    def test_device_title_preferred(self):
        for filename in ("arming_voice.py", "safety_runtime.py"):
            source = (COMP / filename).read_text()
            self.assertIn("device.name_by_user", source)
            self.assertIn("device.name", source)

    def test_homekit_wait_keeps_target_and_is_cancelable(self):
        source = (COMP / "safety_runtime.py").read_text()
        self.assertIn("self._alarm_state = AlarmControlPanelState.ARMING", source)
        self.assertIn("waiting_safe_sensor_changed", source)
        self.assertIn("cancelled_from_off", source)

    def test_classic_waiting_visuals_exist(self):
        source = (ROOT / "src" / "legacy" / "argus-v2042-stability.ts").read_text()
        for token in (
            "grid-column:1/-1", "argusWaitShield",
            "argusBlockingSensor", "insertBefore(btn,sos)",
        ):
            self.assertIn(token, source)

    @unittest.skip("Legacy architecture replaced by TypeScript")
    def test_typescript_layout_is_enabled(self):
        bootstrap = (WWW / "argus-bootstrap.js").read_text()
        self.assertIn("applyReactDashboardLayout(ArgusPanel)", bootstrap)
        self.assertNotIn("applyV2040DashboardFixes", bootstrap)


if __name__ == "__main__":
    unittest.main()
