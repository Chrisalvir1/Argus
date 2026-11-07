"""Executable regressions for the v2.2.82 arming path."""
from __future__ import annotations

import asyncio
import importlib.util
from pathlib import Path
import sys
import types
import unittest
from unittest.mock import patch, AsyncMock


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
    core = types.ModuleType("homeassistant.core")
    core.callback = lambda function: function
    modules = {
        "argus_sensor_runtime_v2056": package,
        "homeassistant": types.ModuleType("homeassistant"),
        "homeassistant.components": types.ModuleType("homeassistant.components"),
        "homeassistant.components.alarm_control_panel": acp,
        "homeassistant.const": const,
        "homeassistant.helpers": types.ModuleType("homeassistant.helpers"),
        "homeassistant.core": core,
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
    const.CONF_ARMING_VOICE_MESSAGE_ARMED = "arming_voice_message_armed"
    const.CONF_ARMING_VOICE_MESSAGE_CANCELLED = "arming_voice_message_cancelled"
    const.CONF_ARMING_VOICE_MESSAGE_TRIGGERED = "arming_voice_message_triggered"
    const.CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED = "arming_voice_message_additional_triggered"
    const.CONF_ARMING_VOICE_MESSAGE_ALARM_SENSOR_CLOSED = "arming_voice_message_alarm_sensor_closed"
    storage = types.ModuleType("argus_voice_v2056.storage")

    async def load_ui_data(*_args, **_kwargs):
        return {"language": "en"}

    storage.async_load_ui_data = load_ui_data
    i18n = types.ModuleType("argus_voice_v2056.i18n")
    i18n._TRANSLATIONS = {}
    i18n.translate = lambda _lang, key, **values: {
        "msg_start": "start {sensors}", "msg_remaining": "closed {closed}; remaining {sensors}",
        "msg_last": "last {closed}; {sensors}", "msg_complete": "complete",
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
    # This suite verifies routing/content. Playback timing has its own virtual
    # clock suite so these tests do not wait for real speech-length intervals.
    module._wait_for_voice_playback = AsyncMock()
    return module


class TestV2056ArmingRuntime(unittest.TestCase):
    def test_argus_language_ignores_tts_entity_language_and_uses_ui_choice(self):
        voice = _load_voice_runtime()

        async def load_ui_data(*_args, **_kwargs):
            return {"language": "es"}

        voice.async_load_ui_data = load_ui_data
        hass = types.SimpleNamespace(config=types.SimpleNamespace(language="en"))
        entry = types.SimpleNamespace(entry_id="entry", options={
            "arming_voice_tts": "tts.google_translate_en_com",
        })

        self.assertEqual(asyncio.run(voice._get_language(hass, entry)), "es")

    def test_argus_only_resolves_to_spanish_or_english(self):
        voice = _load_voice_runtime()

        async def load_ui_data(*_args, **_kwargs):
            return {"language": "pt-BR"}

        voice.async_load_ui_data = load_ui_data
        hass = types.SimpleNamespace(config=types.SimpleNamespace(language="ru-RU"))
        entry = types.SimpleNamespace(entry_id="entry", options={
            "arming_voice_tts": "tts.example_chinese_voice",
        })

        self.assertEqual(asyncio.run(voice._get_language(hass, entry)), "en")

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
                "binary_sensor.side": _State("on", "Side window"),
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
            previous_open=["binary_sensor.front", "binary_sensor.back", "binary_sensor.side"],
            current_open=["binary_sensor.back", "binary_sensor.side"],
        ))
        self.assertEqual(events[0][1]["message"], "closed Front door; remaining Back door and Side window")
        self.assertEqual(calls, [("tts", "speak", {
            "entity_id": "tts.test", "media_player_entity_id": "media_player.kitchen",
            "message": "closed Front door; remaining Back door and Side window", "cache": True
        }, True)])

    def test_pending_announcement_names_zone_area_sensor_and_mode(self):
        voice = _load_voice_runtime()
        voice.async_load_ui_data = lambda *_args, **_kwargs: _async_zone_data()
        events = []

        async def _async_zone_data(*_args, **_kwargs):
            return {"language": "en", "zones": [{
                "number": 1, "area": "Kitchen", "enabled": True, "modes": ["home"],
                "entity_ids": ["binary_sensor.back"],
            }]}

        class Bus:
            def async_fire(self, event, payload): events.append((event, payload))

        hass = types.SimpleNamespace(states=_States({"binary_sensor.back": _State("on", "Back door")}),
                                     bus=Bus(), config=types.SimpleNamespace(language="en"), data={})
        entry = types.SimpleNamespace(entry_id="entry", title="Home", options={"arming_voice_message_start": "start {sensors}"})
        asyncio.run(voice.async_announce_arming_wait_update(
            hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
            previous_open=[], current_open=["binary_sensor.back"],
        ))
        self.assertIn("Zone Kitchen, sensor Back door still open", events[0][1]["message"])
        self.assertNotIn("Zone 1", events[0][1]["message"])
        self.assertEqual(events[0][1]["open_sensors"][0]["area"], "Kitchen")

    def test_wait_close_recounts_remaining_zones_and_sensors(self):
        voice = _load_voice_runtime()
        events = []

        async def _async_zone_data(*_args, **_kwargs):
            return {"language": "en", "zones": [
                {"number": 1, "area": "Kitchen", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.front"]},
                {"number": 2, "area": "Garage", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.back"]},
                {"number": 3, "area": "Hall", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.side"]},
            ]}

        voice.async_load_ui_data = _async_zone_data

        class Bus:
            def async_fire(self, event, payload): events.append((event, payload))

        hass = types.SimpleNamespace(states=_States({
            "binary_sensor.front": _State("off", "Front door"),
            "binary_sensor.back": _State("on", "Garage door"),
            "binary_sensor.side": _State("on", "Side window"),
        }), bus=Bus(), config=types.SimpleNamespace(language="en"), data={})
        entry = types.SimpleNamespace(entry_id="entry", title="Home", options={
            "arming_voice_message_remaining": "Closed {closed}. {zone_count} zones remain; {sensor_count_label} pending: {sensors}",
        })
        asyncio.run(voice.async_announce_arming_wait_update(
            hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
            previous_open=["binary_sensor.front", "binary_sensor.back", "binary_sensor.side"],
            current_open=["binary_sensor.back", "binary_sensor.side"],
        ))
        message = events[0][1]["message"]
        self.assertIn("Zone Kitchen, sensor Front door closed", message)
        self.assertIn("2 zones remain; 2 sensors pending", message)
        self.assertIn("Zone Garage, sensor Garage door still open", message)
        self.assertIn("Zone Hall, sensor Side window still open", message)

    def test_last_sensor_close_speaks_all_closed_transition(self):
        voice = _load_voice_runtime()
        events, calls = [], []

        class Bus:
            def async_fire(self, event, payload): events.append((event, payload))

        class Services:
            async def async_call(self, domain, service, data, blocking=False):
                calls.append((domain, service, data, blocking))

        hass = types.SimpleNamespace(
            states=_States({"binary_sensor.front": _State("off", "Front door")}),
            bus=Bus(), services=Services(), config=types.SimpleNamespace(language="en"), data={},
        )
        entry = types.SimpleNamespace(
            entry_id="entry", title="Home",
            options={"arming_voice_enabled": True, "arming_voice_tts": "tts.test",
                     "arming_voice_players": ["media_player.kitchen"],
                     "arming_voice_message_complete": "all clear for {mode}"},
        )
        asyncio.run(voice.async_announce_arming_wait_update(
            hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
            previous_open=["binary_sensor.front"], current_open=[],
        ))
        self.assertEqual(events[0][1]["message"], "all clear for armed_home")
        self.assertEqual(calls[0][2]["message"], "all clear for armed_home")

    def test_intrusion_sensor_close_speaks_closed_and_keeps_alarm_latched(self):
        voice = _load_voice_runtime()
        voice.async_load_ui_data = lambda *_args, **_kwargs: _async_zone_data()
        events, calls = [], []

        async def _async_zone_data():
            return {"language": "es", "zones": [{
                "number": 2, "area": "Cocina", "enabled": True, "modes": ["home"],
                "entity_ids": ["binary_sensor.door"],
            }]}

        class Bus:
            def async_fire(self, event, payload): events.append((event, payload))

        class Services:
            async def async_call(self, domain, service, data, blocking=False):
                calls.append((domain, service, data, blocking))

        hass = types.SimpleNamespace(
            states=_States({"binary_sensor.door": _State("off", "Puerta principal")}),
            bus=Bus(), services=Services(), config=types.SimpleNamespace(language="es"), data={},
        )
        entry = types.SimpleNamespace(
            entry_id="entry", title="Casa", options={
                "arming_voice_enabled": True, "arming_voice_tts": "tts.test",
                "arming_voice_players": ["media_player.kitchen"],
                "arming_voice_message_alarm_sensor_closed": "cerró {closed}; quedan {zone_count} zonas y {count} sensores abiertos: {sensors}",
            },
        )
        asyncio.run(voice.async_announce_alarm_sensor_closed(
            hass, entry, alarm_entity_id="alarm_control_panel.argus",
            sensor_entity_id="binary_sensor.door", open_sensor_ids=[], mode="armed_home",
        ))
        self.assertEqual(events[0][0], "argus_alarm_sensor_closed")
        self.assertEqual(events[0][1]["message"], "cerró Zona de Cocina, sensor Puerta principal se cerró; quedan 0 zonas y 0 sensores abiertos: ninguno")
        self.assertTrue(events[0][1]["alarm_remains_active"])
        self.assertEqual(calls[0][2]["message"], events[0][1]["message"])

    def test_voice_fans_out_to_at_most_five_players_concurrently(self):
        voice = _load_voice_runtime()
        scheduled = []
        hass = types.SimpleNamespace(async_create_task=lambda coroutine: scheduled.append(coroutine))
        asyncio.run(voice._async_speak(hass, {
            "arming_voice_enabled": True,
            "arming_voice_tts": "tts.test",
            "arming_voice_players": [f"media_player.room_{n}" for n in range(6)],
        }, "Prueba", "es"))
        self.assertEqual(len(scheduled), 5)
        for coroutine in scheduled:
            coroutine.close()

    def test_custom_text_is_passed_unchanged_to_any_selected_tts_entity(self):
        voice = _load_voice_runtime()
        calls = []
        tasks = []
        message = "Argus de seguridad no pudo completar el armado. Hay una zona abierta."

        class Services:
            async def async_call(self, domain, service, data, blocking=False):
                calls.append((domain, service, data, blocking))

        hass = types.SimpleNamespace(
            services=Services(),
            async_create_task=lambda coroutine: tasks.append(asyncio.create_task(coroutine)),
        )

        async def speak_with_each_engine():
            for engine in (
                "tts.google_translate_en_com",
                "tts.piper",
                "tts.home_assistant_cloud",
            ):
                await voice._async_speak(hass, {
                    "arming_voice_enabled": True,
                    "arming_voice_tts": engine,
                    "arming_voice_players": ["media_player.living_room"],
                }, message, "es")
            await asyncio.gather(*tasks)

        asyncio.run(speak_with_each_engine())

        self.assertEqual(len(calls), 3)
        for engine, call in zip(
            ("tts.google_translate_en_com", "tts.piper", "tts.home_assistant_cloud"),
            calls,
        ):
            self.assertEqual(call, ("tts", "speak", {
                "entity_id": engine,
                "media_player_entity_id": "media_player.living_room",
                "message": message,
                "cache": True,
            }, True))

    def test_each_arming_event_uses_only_its_matching_message_field(self):
        voice = _load_voice_runtime()
        calls = []

        async def load_zones(*_args, **_kwargs):
            return {"language": "en", "zones": [
                {"number": 1, "area": "Kitchen", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.front"]},
                {"number": 2, "area": "Garage", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.back"]},
                {"number": 3, "area": "Hall", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.window"]},
            ]}

        voice.async_load_ui_data = load_zones

        class Bus:
            def async_fire(self, _event, payload):
                pass

        class Services:
            async def async_call(self, domain, service, data, blocking=False):
                calls.append((domain, service, data["message"]))

        hass = types.SimpleNamespace(
            states=_States({
                "binary_sensor.front": _State("on", "Front door"),
                "binary_sensor.back": _State("on", "Back door"),
                "binary_sensor.window": _State("on", "Hall window"),
            }),
            bus=Bus(), services=Services(), config=types.SimpleNamespace(language="en"), data={},
        )
        entry = types.SimpleNamespace(entry_id="entry", title="Home", options={
            "arming_voice_enabled": True,
            "arming_voice_tts": "tts.test",
            "arming_voice_players": ["media_player.kitchen"],
            "arming_voice_message_start": "START {sensors}",
            "arming_voice_message_remaining": "REMAINING {closed}; {sensors}",
            "arming_voice_message_last": "LAST",
            "arming_voice_message_complete": "COMPLETE {mode}",
            "arming_voice_message_armed": "ARMED {mode}",
        })

        async def run_sequence():
            await voice.async_announce_arming_wait_update(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
                previous_open=[], current_open=["binary_sensor.front", "binary_sensor.back", "binary_sensor.window"],
            )
            await voice.async_announce_arming_wait_update(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
                previous_open=["binary_sensor.front", "binary_sensor.back", "binary_sensor.window"],
                current_open=["binary_sensor.back", "binary_sensor.window"],
            )
            await voice.async_announce_arming_wait_update(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
                previous_open=["binary_sensor.back", "binary_sensor.window"],
                current_open=["binary_sensor.window"],
            )
            await voice.async_announce_arming_wait_update(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
                previous_open=["binary_sensor.window"], current_open=[],
            )
            await voice.async_announce_arming_wait_update(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home",
                previous_open=[], current_open=[], committed=True,
            )

        asyncio.run(run_sequence())

        messages = [call[2] for call in calls]
        self.assertEqual(len(messages), 5)
        self.assertTrue(messages[0].startswith("START "))
        self.assertTrue(messages[1].startswith("REMAINING "))
        self.assertTrue(messages[2].startswith("LAST."))
        self.assertIn("Zone Garage, sensor Back door closed", messages[2])
        self.assertIn("Zone Hall, sensor Hall window still open", messages[2])
        self.assertTrue(messages[3].startswith("COMPLETE "))
        self.assertTrue(messages[4].startswith("ARMED "))

    def test_cancel_alarm_additional_sensor_and_sensor_closed_use_separate_fields(self):
        voice = _load_voice_runtime()
        calls = []

        async def load_zones(*_args, **_kwargs):
            return {"language": "en", "zones": [
                {"number": 1, "area": "Kitchen", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.front"]},
                {"number": 2, "area": "Garage", "enabled": True, "modes": ["home"], "entity_ids": ["binary_sensor.back"]},
            ]}

        voice.async_load_ui_data = load_zones

        class Bus:
            def async_fire(self, _event, _payload):
                pass

        class Services:
            async def async_call(self, domain, service, data, blocking=False):
                calls.append((domain, service, data["message"]))

        hass = types.SimpleNamespace(
            states=_States({
                "binary_sensor.front": _State("on", "Front door"),
                "binary_sensor.back": _State("on", "Garage door"),
            }),
            bus=Bus(), services=Services(), config=types.SimpleNamespace(language="en"), data={},
        )
        entry = types.SimpleNamespace(entry_id="entry", title="Home", options={
            "arming_voice_enabled": True,
            "arming_voice_tts": "tts.test",
            "arming_voice_players": ["media_player.kitchen"],
            "arming_voice_message_cancelled": "CANCELLED {mode}",
            "arming_voice_message_triggered": "TRIGGERED {sensors}",
            "arming_voice_message_additional_triggered": "ADDITIONAL {sensors}",
            "arming_voice_message_alarm_sensor_closed": "ALARM CLOSED {closed}",
        })

        async def run_events():
            await voice.async_announce_arming_cancelled(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", target="armed_home", source="user",
            )
            await voice.async_announce_alarm_triggered(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", sensor_entity_id="binary_sensor.front",
                triggered_sensor_ids=["binary_sensor.front"], mode="armed_home", source="binary_sensor.front",
            )
            await voice.async_announce_alarm_triggered(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", sensor_entity_id="binary_sensor.back",
                triggered_sensor_ids=["binary_sensor.front", "binary_sensor.back"], mode="armed_home",
                source="binary_sensor.back", additional=True,
            )
            await voice.async_announce_alarm_sensor_closed(
                hass, entry, alarm_entity_id="alarm_control_panel.argus", sensor_entity_id="binary_sensor.front",
                open_sensor_ids=["binary_sensor.back"], mode="armed_home",
            )

        asyncio.run(run_events())

        messages = [call[2] for call in calls]
        self.assertEqual(len(messages), 4)
        self.assertTrue(messages[0].startswith("CANCELLED "))
        self.assertTrue(messages[1].startswith("TRIGGERED "))
        self.assertTrue(messages[2].startswith("ADDITIONAL "))
        self.assertTrue(messages[3].startswith("ALARM CLOSED "))


if __name__ == "__main__":
    unittest.main()
