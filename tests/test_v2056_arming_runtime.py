"""Executable regressions for the v2.2.82 arming path."""
from __future__ import annotations

import asyncio
import importlib.util
from pathlib import Path
import sys
import types
import unittest
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


class _State:
    def __init__(self, value: str, name: str | None = None) -> None:
        self.state = value
        self.attributes = {"friendly_name": name} if name else {}


class _States:
    def __init__(self, values: dict[str, _State]) -> None:
        self.values = values

    def get(self, entity_id: str):
        return self.values.get(entity_id)


def _load_sensor_runtime():
    """Load the pure detector with the minimum real HA API surface."""
    package = types.ModuleType("argus_sensor_runtime_v2056")
    package.__path__ = [str(COMPONENT)]
    acp = types.ModuleType("homeassistant.components.alarm_control_panel")
    acp.AlarmControlPanelState = types.SimpleNamespace(
        ARMED_HOME="armed_home", ARMED_AWAY="armed_away",
        ARMED_NIGHT="armed_night", ARMED_VACATION="armed_vacation",
    )
    const = types.ModuleType("homeassistant.const")
    const.STATE_UNKNOWN = "unknown"
    const.STATE_UNAVAILABLE = "unavailable"
    event = types.ModuleType("homeassistant.helpers.event")
    event.async_track_time_interval = lambda *_args, **_kwargs: lambda: None
    modules = {
        "argus_sensor_runtime_v2056": package,
        "homeassistant": types.ModuleType("homeassistant"),
        "homeassistant.components": types.ModuleType("homeassistant.components"),
        "homeassistant.components.alarm_control_panel": acp,
        "homeassistant.const": const,
        "homeassistant.helpers": types.ModuleType("homeassistant.helpers"),
        "homeassistant.helpers.event": event,
    }
    spec = importlib.util.spec_from_file_location(
        "argus_sensor_runtime_v2056.sensor_state_runtime",
        COMPONENT / "sensor_state_runtime.py",
    )
    module = importlib.util.module_from_spec(spec)
    with patch.dict(sys.modules, modules):
        assert spec.loader is not None
        spec.loader.exec_module(module)
    return module


def _load_voice_runtime():
    """Load voice code with a small async HA double and real message selection."""
    package = types.ModuleType("argus_voice_v2056")
    package.__path__ = [str(COMPONENT)]
    const = types.ModuleType("argus_voice_v2056.const")
    const.DOMAIN = "argus"
    const.CONF_ARMING_VOICE_ENABLED = "arming_voice_enabled"
    const.CONF_ARMING_VOICE_TTS = "arming_voice_tts"
    const.CONF_ARMING_VOICE_PLAYERS = "arming_voice_players"
    const.CONF_ARMING_VOICE_MESSAGE_START = "arming_voice_message_start"
    const.CONF_ARMING_VOICE_MESSAGE_REMAINING = "arming_voice_message_remaining"
    const.CONF_ARMING_VOICE_MESSAGE_LAST = "arming_voice_message_last"
    const.CONF_ARMING_VOICE_MESSAGE_COMPLETE = "arming_voice_message_complete"
    const.CONF_ARMING_VOICE_MESSAGE_CANCELLED = "arming_voice_message_cancelled"
    const.CONF_ARMING_VOICE_MESSAGE_TRIGGERED = "arming_voice_message_triggered"
    const.CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED = "arming_voice_message_additional_triggered"
    storage = types.ModuleType("argus_voice_v2056.storage")

    async def load_ui_data(*_args, **_kwargs):
        return {"language": "en"}

    storage.async_load_ui_data = load_ui_data
    i18n = types.ModuleType("argus_voice_v2056.i18n")
    i18n._TRANSLATIONS = {}
    i18n.translate = lambda _lang, key, **values: {
        "msg_start": "start {sensors}", "msg_remaining": "closed {closed}; remaining {sensors}",
        "msg_last": "last {sensors}", "msg_complete": "complete",
    }.get(key, key).format(**values)
    registry = types.SimpleNamespace(async_get=lambda _hass: types.SimpleNamespace(async_get=lambda _eid: None))
    helpers = types.ModuleType("homeassistant.helpers")
    helpers.device_registry = registry
    helpers.entity_registry = registry
    components = types.ModuleType("homeassistant.components")
    components.persistent_notification = types.SimpleNamespace(async_create=lambda *_args, **_kwargs: None)
    modules = {
        "argus_voice_v2056": package,
        "argus_voice_v2056.const": const,
        "argus_voice_v2056.storage": storage,
        "argus_voice_v2056.i18n": i18n,
        "homeassistant": types.ModuleType("homeassistant"),
        "homeassistant.components": components,
        "homeassistant.helpers": helpers,
    }
    spec = importlib.util.spec_from_file_location("argus_voice_v2056.arming_voice", COMPONENT / "arming_voice.py")
    module = importlib.util.module_from_spec(spec)
    with patch.dict(sys.modules, modules):
        assert spec.loader is not None
        spec.loader.exec_module(module)
    return module


class TestV2056ArmingRuntime(unittest.TestCase):
    def test_closed_values_clear_wait_but_unavailable_never_arms_blindly(self):
        runtime = _load_sensor_runtime()
        hass = types.SimpleNamespace(states=_States({
            "binary_sensor.door": _State("off"),
            "binary_sensor.window": _State("cerrado"),
            "binary_sensor.bad": _State("unavailable"),
        }))
        self.assertFalse(runtime.is_sensor_active(hass, "binary_sensor.door"))
        self.assertFalse(runtime.is_sensor_active(hass, "binary_sensor.window"))
        self.assertTrue(runtime.is_sensor_active(hass, "binary_sensor.bad"))
        self.assertTrue(runtime.is_sensor_active(hass, "binary_sensor.missing"))

    def test_partial_close_uses_transition_message_and_calls_tts(self):
        voice = _load_voice_runtime()
        events, calls = [], []

        class Bus:
            def async_fire(self, event, payload):
                events.append((event, payload))

        class Services:
            async def async_call(self, domain, service, data, blocking=False):
                calls.append((domain, service, data, blocking))

        hass = types.SimpleNamespace(
            states=_States({
                "binary_sensor.front": _State("off", "Front door"),
                "binary_sensor.back": _State("on", "Back door"),
            }),
            bus=Bus(), services=Services(), config=types.SimpleNamespace(language="en"), data={},
        )
        entry = types.SimpleNamespace(
            entry_id="entry", title="Home",
            options={
                "arming_voice_enabled": True, "arming_voice_tts": "tts.test",
                "arming_voice_players": ["media_player.kitchen"],
                "arming_voice_message_remaining": "closed {closed}; remaining {sensors}",
                "arming_voice_message_last": "last {sensors}",
            },
        )
        asyncio.run(voice.async_announce_arming_wait_update(
            hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
            previous_open=["binary_sensor.front", "binary_sensor.back"], current_open=["binary_sensor.back"],
        ))
        self.assertEqual(events[0][1]["message"], "closed Front door; remaining Back door")
        self.assertEqual(calls, [("tts", "speak", {
            "entity_id": "tts.test", "media_player_entity_id": "media_player.kitchen",
            "message": "closed Front door; remaining Back door", "cache": True
        }, False)])


if __name__ == "__main__":
    unittest.main()
