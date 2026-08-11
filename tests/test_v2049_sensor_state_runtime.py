"""Runtime wiring contracts complementing executable arming-state tests."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
ARGUS = ROOT / "custom_components" / "argus"
RUNTIME = (ARGUS / "sensor_state_runtime.py").read_text(encoding="utf-8")
MACHINE = (ARGUS / "arming_state_machine.py").read_text(encoding="utf-8")


class TestV2049SensorStateRuntime(unittest.TestCase):
    def test_pending_request_is_reconciled_from_event_and_watchdog(self):
        for token in (
            "_arm_request",
            "_async_recheck_arm_request",
            "state_change",
            "watchdog",
            "async_track_time_interval",
            "blocking_sensors",
        ):
            self.assertIn(token, RUNTIME)

    def test_armed_sensor_has_authoritative_trigger_fallback(self):
        for token in (
            "_ARMED_STATES",
            "_sensors_for_state",
            "is_sensor_active",
            "newly_active",
            "_triggered_by",
            "_triggered_mode",
            "await self._async_trigger()",
        ):
            self.assertIn(token, RUNTIME)

    def test_preexisting_open_sensor_is_only_a_baseline(self):
        self.assertIn("_argus_last_active_sensors", RUNTIME)
        self.assertIn("active_for_state", RUNTIME)
        self.assertIn("active - previous", RUNTIME)

    def test_extended_sensor_semantics_live_in_pure_machine(self):
        for token in (
            "binary_sensor",
            "lock",
            "cover",
            "opening",
            "detected",
            "wet",
            "problem",
            "unsafe",
            "cerrado",
        ):
            self.assertIn(token, MACHINE)
        self.assertIn("is_active_sensor_state", RUNTIME)

    def test_arming_wait_uses_executable_completion_decision(self):
        self.assertIn("decide_arming_wait", RUNTIME)
        self.assertIn("decision.complete", RUNTIME)
        self.assertIn("sensor_wait_started", RUNTIME)
        self.assertIn("await self._async_complete_arming(target)", RUNTIME)
        self.assertIn('reason = "sensors_cleared"', MACHINE)

    def test_runtime_repairs_stale_and_orphaned_requests(self):
        self.assertIn('request["generation"] = self._arm_generation', RUNTIME)
        self.assertIn("recover_orphaned_arming", RUNTIME)

    def test_runtime_installs_after_voice_wrapper(self):
        source = (ARGUS / "__init__.py").read_text(encoding="utf-8")
        self.assertIn(
            "install_trigger_voice();install_sensor_state_runtime()", source
        )

    def test_watchdog_uses_thread_safe_task_scheduling(self):
        # call_soon_threadsafe wraps async_create_task safely from threads
        self.assertIn("call_soon_threadsafe", RUNTIME)


if __name__ == "__main__":
    unittest.main()
