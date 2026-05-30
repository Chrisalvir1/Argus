"""Fixtures for Argus tests."""
from __future__ import annotations

import pytest
from unittest.mock import AsyncMock, MagicMock, patch


@pytest.fixture
def mock_config_entry():
    """Return a mock ConfigEntry for Argus."""
    entry = MagicMock()
    entry.entry_id = "test_entry_id"
    entry.domain = "argus"
    entry.data = {
        "name": "Test Argus",
        "code": "",
        "code_arm_required": False,
        "arming_time": 0,
        "trigger_time": 120,
        "entry_delay": 60,
        "sensors_away": [],
        "sensors_home": [],
        "sensors_night": [],
        "sensors_vacation": [],
        "entry_sensors": [],
        "mqtt_enabled": False,
        "mqtt_topic_state": "argus/alarm/state",
        "mqtt_topic_command": "argus/alarm/command",
    }
    entry.options = {}
    return entry


@pytest.fixture
def mock_hass():
    """Return a mock HomeAssistant instance."""
    hass = MagicMock()
    hass.data = {}
    hass.states = MagicMock()
    hass.bus = MagicMock()
    hass.bus.async_fire = AsyncMock()
    hass.services = MagicMock()
    hass.services.async_register = MagicMock()
    hass.config_entries = MagicMock()
    hass.config_entries.async_forward_entry_setups = AsyncMock(return_value=True)
    hass.config_entries.async_unload_platforms = AsyncMock(return_value=True)
    return hass
