import unittest
from datetime import datetime, timezone
from types import SimpleNamespace
from unittest.mock import Mock, patch

from custom_components.argus.core.walk_test import WalkTestManager


class WalkTestObservation(unittest.TestCase):
    def setUp(self):
        self.hass = Mock()
        self.manager = WalkTestManager(self.hass)
        for name in ("async_track_state_change_event", "async_call_later"):
            handle = patch(f"homeassistant.helpers.event.{name}")
            setattr(self, name, handle.start())
            self.addCleanup(handle.stop)
        self.session = self.manager.start_walk_test("entry", ["binary_sensor.door"])
        self.observe = self.async_track_state_change_event.call_args.args[2]

    def event(self, before, after, timestamp=None):
        self.observe(SimpleNamespace(
            time_fired=datetime.fromtimestamp(
                timestamp if timestamp is not None else self.session.started_at + 1,
                timezone.utc,
            ),
            data={
                "entity_id": "binary_sensor.door",
                "old_state": SimpleNamespace(state=before),
                "new_state": SimpleNamespace(state=after, name="Door"),
            },
        ))

    def test_only_new_transitions_from_rest_count(self):
        self.event("off", "on", self.session.started_at - 1)
        self.event("on", "on")
        self.event("off", "unavailable")
        self.event("unavailable", "on")
        self.assertFalse(self.session.tested_sensors)
        self.event("off", "on")
        first = dict(self.session.tested_sensors)
        self.event("on", "on")
        self.event("off", "on")
        self.assertEqual(self.session.tested_sensors, first)
        self.assertEqual(len(first), 1)

    def test_duplicate_start_and_stop(self):
        self.assertIs(self.manager.start_walk_test("entry", []), self.session)
        self.manager.stop_walk_test("entry")
        self.assert_resources_released()

    def test_timeout(self):
        self.async_call_later.call_args.args[2](None)
        self.assert_resources_released()

    def assert_resources_released(self):
        self.async_track_state_change_event.return_value.assert_called_once()
        self.async_call_later.return_value.assert_called_once()
        self.assertIsNone(self.manager.get_session("entry"))

    def test_guided_contact_requires_ordered_open_and_close(self):
        self.session.guided_kinds = {"binary_sensor.door": "contact"}
        self.event("on", "off")
        self.event("off", "on")
        self.assertEqual(self.session.to_dict()["step_phase"], "close")
        with self.assertRaises(ValueError):
            self.session.control_step("continue")
        self.event("on", "off", self.session.started_at + 0.5)
        self.assertFalse(self.session.tested_sensors)
        self.event("on", "off", self.session.started_at + 2)
        self.assertEqual(self.session.to_dict()["step_phase"], "verified")
        self.session.control_step("continue")
        self.assertEqual(self.session.to_dict()["step_phase"], "complete")

    def test_guided_motion_requires_new_activation_only(self):
        self.session.guided_kinds = {"binary_sensor.door": "activation"}
        self.event("on", "on")
        self.assertFalse(self.session.tested_sensors)
        self.event("off", "on")
        self.assertEqual(self.session.to_dict()["step_phase"], "verified")

    def test_cancel_reports_unverified_and_releases_resources(self):
        report = self.manager.stop_walk_test("entry", reason="cancelled")
        self.assertEqual(report["reason"], "cancelled")
        self.assertEqual(report["unverified_sensors"], ["binary_sensor.door"])
        self.assert_resources_released()

    def test_guided_session_publishes_scoped_progress_and_final_result(self):
        self.manager.stop_walk_test("entry")
        self.session = self.manager.start_walk_test(
            "entry", ["binary_sensor.door"], zone_id="patio",
            guided_kinds={"binary_sensor.door": "contact"},
        )
        self.observe = self.async_track_state_change_event.call_args.args[2]
        self.event("off", "on")
        event, progress = self.hass.bus.async_fire.call_args.args
        self.assertEqual(event, "argus_walk_test_updated")
        self.assertEqual(progress["zone_id"], "patio")
        self.assertEqual(progress["step_phase"], "close")
        self.assertEqual(progress["tested_count"], 0)
        self.event("on", "off", self.session.started_at + 2)
        self.assertEqual(self.hass.bus.async_fire.call_args.args[1]["tested_count"], 1)
        self.manager.stop_walk_test("entry", reason="cancelled")
        _, result = self.hass.bus.async_fire.call_args.args
        self.assertEqual(result["reason"], "cancelled")
        self.assertFalse(result["active"])

    def test_status_recovers_expiration_after_subscriber_disconnects(self):
        self.event("off", "on")
        self.async_call_later.call_args.args[2](None)
        status = self.manager.status("entry")
        self.assertFalse(status["active"])
        self.assertEqual(status["reason"], "expired")
        self.assertEqual(status["tested_count"], 1)
        self.assert_resources_released()
        self.manager.start_walk_test("entry", ["binary_sensor.door"])
        self.assertEqual(self.manager.status("entry")["tested_count"], 0)
        self.assertNotIn("reason", self.manager.status("entry"))
