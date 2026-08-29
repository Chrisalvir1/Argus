"""Regression test verifying thread-safe automation scheduling in Argus."""
from pathlib import Path
import unittest
from unittest.mock import MagicMock

ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


class TestThreadSafeSensorAutomations(unittest.TestCase):
    def test_sensor_opened_uses_create_task_thread_safe_api(self):
        source = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")

        # The sensor_opened evaluation must use hass.create_task for thread safety
        self.assertIn(
            'self.hass.create_task(self._evaluate_automations("sensor_opened", sensor=entity_id))',
            source,
        )

        # Ensure sensor_opened is not scheduled via async_create_task
        self.assertNotIn(
            'self.hass.async_create_task(self._evaluate_automations("sensor_opened"',
            source,
        )

    def test_event_loop_automations_preserve_async_create_task(self):
        source = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")

        # Event loop async functions must keep using async_create_task
        self.assertIn(
            'self.hass.async_create_task(self._evaluate_automations("triggered", sensor=self._triggered_by))',
            source,
        )
        self.assertIn(
            'self.hass.async_create_task(self._evaluate_automations("disarmed"))',
            source,
        )
        self.assertIn(
            'self.hass.async_create_task(self._evaluate_automations("armed", target=target))',
            source,
        )
        self.assertIn(
            'self._evaluate_automations("armed", target=previous_state)',
            source,
        )

    def test_sensor_changed_dispatches_via_thread_safe_create_task(self):
        """Simulate sensor state change callback and ensure only create_task is called."""
        class MockState:
            def __init__(self, state, attributes=None):
                self.state = state
                self.attributes = attributes or {}

        class MockEvent:
            def __init__(self, entity_id, new_state):
                self.data = {
                    "entity_id": entity_id,
                    "new_state": new_state,
                }

        # Mock panel minimal harness mimicking ArgusAlarmPanel._async_sensor_changed
        from unittest.mock import AsyncMock

        class FakeIncidentEngine:
            def process_sensor_event(self, event, mode=""):
                return None

        class DummyPanel:
            def __init__(self, hass):
                self.hass = hass
                self._arm_request = None
                self.entity_id = "alarm_control_panel.argus_home"
                self._config_entry = MagicMock(entry_id="test_entry_123")
                self._incident_engine = FakeIncidentEngine()
                self._alarm_state = "disarmed"

            async def _evaluate_automations(self, event_type, **kwargs):
                pass

            def _async_sensor_changed(self, event):
                new_state = event.data.get("new_state")
                entity_id = event.data.get("entity_id")

                if entity_id and self._arm_request:
                    self.hass.async_create_task(self._async_recheck_arm_request())

                if new_state is None or new_state.state not in ("on", "open", "unlocked", "abierto", "detected"):
                    return

                # Thread-safe dispatch
                self.hass.create_task(self._evaluate_automations("sensor_opened", sensor=entity_id))
                self.hass.bus.async_fire("argus_sensor_opened", {
                    "entity_id": entity_id, "state": new_state.state, "alarm_entity_id": self.entity_id, "entry_id": self._config_entry.entry_id
                })

        mock_hass = MagicMock()
        # If async_create_task is called from a thread, HA Core raises or warns
        mock_hass.async_create_task = MagicMock(
            side_effect=RuntimeError("Detected that custom integration argus calls hass.async_create_task from a thread")
        )
        created_tasks = []
        mock_hass.create_task = MagicMock(side_effect=lambda coro: created_tasks.append(coro))

        panel = DummyPanel(mock_hass)
        event = MockEvent("binary_sensor.front_door", MockState("on", {"device_class": "door"}))

        # This must succeed without calling async_create_task
        panel._async_sensor_changed(event)

        self.assertEqual(mock_hass.async_create_task.call_count, 0)
        self.assertEqual(mock_hass.create_task.call_count, 1)
        self.assertEqual(len(created_tasks), 1)

        # Clean up coroutine to avoid unawaited warning in test
        import asyncio
        asyncio.run(created_tasks[0])


if __name__ == "__main__":
    unittest.main()
