"""Legacy voice config is imported intact and becomes editable in Argus."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import unittest

SOURCE = Path(__file__).resolve().parents[1] / "custom_components/argus/voice_settings.py"
SPEC = importlib.util.spec_from_file_location("argus_voice_settings_test", SOURCE)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(MODULE)


class TestVoiceSettingsMigration(unittest.TestCase):
    def test_yaml_and_entry_options_are_preserved_but_ui_has_final_precedence(self):
        fields = ("enabled", "tts", "players", "message_start", "message_remaining")
        values, to_import, has_legacy = MODULE.resolve_voice_settings(
            fields,
            {"enabled": False, "tts": "tts.old", "message_start": ""},
            {"enabled": True, "players": ["media_player.kitchen"], "message_start": "Legacy start"},
            {"message_start": "YAML start", "message_remaining": "YAML remaining"},
            {"message_start": "Argus custom start"},
        )
        self.assertTrue(has_legacy)
        self.assertEqual(values, {
            "enabled": True,
            "tts": "tts.old",
            "players": ["media_player.kitchen"],
            "message_start": "Argus custom start",
            "message_remaining": "YAML remaining",
        })
        self.assertEqual(to_import["message_remaining"], "YAML remaining")
        self.assertNotIn("message_start", to_import)

    def test_explicit_empty_message_is_not_lost_and_ui_empty_value_is_intentional(self):
        values, to_import, _ = MODULE.resolve_voice_settings(
            ("message_start",), {"message_start": "old text"}, {}, {}, {"message_start": ""}
        )
        self.assertEqual(values["message_start"], "")
        self.assertEqual(to_import, {})

    def test_media_player_list_combines_live_states_with_enabled_registry_entries(self):
        players = MODULE.merge_media_player_entities(
            [
                {
                    "entity_id": "media_player.kitchen_cast",
                    "name": "Kitchen Cast",
                    "attributes": {"friendly_name": "Cocina"},
                    "state": "idle",
                },
                {
                    "entity_id": "media_player.disabled",
                    "attributes": {"friendly_name": "Disabled speaker"},
                    "state": "off",
                },
                {
                    "entity_id": "media_player.airplay",
                    "attributes": {"friendly_name": "AirPlay Sala"},
                    "state": "unavailable",
                },
            ],
            [
                {
                    "entity_id": "media_player.kitchen_cast",
                    "name": "Altavoz de cocina",
                    "original_name": "Kitchen Cast",
                    "disabled_by": None,
                },
                {
                    "entity_id": "media_player.alexa_living_room",
                    "name": None,
                    "original_name": "Alexa Living Room",
                    "disabled_by": None,
                },
                {
                    "entity_id": "media_player.airplay",
                    "name": None,
                    "original_name": "AirPlay Sala",
                    "disabled_by": None,
                },
                {
                    "entity_id": "media_player.disabled",
                    "name": None,
                    "original_name": "Disabled speaker",
                    "disabled_by": "user",
                },
            ],
        )

        self.assertEqual([player["entity_id"] for player in players], [
            "media_player.airplay",
            "media_player.alexa_living_room",
            "media_player.kitchen_cast",
        ])
        self.assertEqual(players[0]["name"], "AirPlay Sala")
        self.assertFalse(players[0]["available"])
        self.assertEqual(players[1]["name"], "Alexa Living Room")
        self.assertFalse(players[1]["available"])
        self.assertEqual(players[2]["name"], "Altavoz de cocina")
        self.assertTrue(players[2]["available"])
        self.assertEqual(players[2]["state"], "idle")


if __name__ == "__main__":
    unittest.main()
