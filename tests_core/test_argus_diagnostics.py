from __future__ import annotations

import asyncio
from types import SimpleNamespace
from unittest.mock import patch

import homeassistant.core
from custom_components.argus.diagnostics import async_get_config_entry_diagnostics


def test_diagnostics_are_aggregate_and_do_not_disclose_codes_or_entity_ids():
    entities = [
        SimpleNamespace(domain="alarm_control_panel", entity_id="alarm_control_panel.argus"),
        SimpleNamespace(domain="binary_sensor", entity_id="binary_sensor.private_door"),
        SimpleNamespace(domain="binary_sensor", entity_id="binary_sensor.private_window"),
    ]
    registry = object()
    state_map = {
        "alarm_control_panel.argus": SimpleNamespace(state="disarmed"),
        "binary_sensor.private_door": SimpleNamespace(state="on"),
        "binary_sensor.private_window": SimpleNamespace(state="unavailable"),
    }
    hass = SimpleNamespace(states=SimpleNamespace(get=state_map.get))
    entry = SimpleNamespace(
        entry_id="entry-1",
        state=SimpleNamespace(value="loaded"),
        data={"code": "1234"},
        options={
            "arming_voice_enabled": True,
            "arming_voice_tts": "tts.private",
            "arming_voice_players": ["media_player.private"],
        },
    )
    with patch("custom_components.argus.diagnostics.er.async_get", return_value=registry), patch(
        "custom_components.argus.diagnostics.er.async_entries_for_config_entry",
        return_value=entities,
    ):
        result = asyncio.run(async_get_config_entry_diagnostics(hass, entry))

    assert result["entities"]["binary_sensor"] == {"total": 2, "available": 1}
    assert result["notifications"] == {
        "arming_voice_enabled": True,
        "tts_configured": True,
        "players_configured": 1,
    }
    rendered = repr(result)
    for sensitive_value in ("1234", "tts.private", "media_player.private", "private_door"):
        assert sensitive_value not in rendered
