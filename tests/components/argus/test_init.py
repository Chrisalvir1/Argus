"""Tests for Argus integration setup."""
from __future__ import annotations

import pytest
from unittest.mock import AsyncMock, MagicMock, patch

from custom_components.argus.const import DOMAIN


def test_domain_constant():
    """Test the domain constant is correct."""
    assert DOMAIN == "argus"


def test_const_values():
    """Test that key constants have expected values."""
    from custom_components.argus.const import (
        DOMAIN,
        NAME,
        PLATFORMS,
        DEFAULT_ARMING_TIME,
        DEFAULT_TRIGGER_TIME,
        DEFAULT_ENTRY_DELAY,
        DEFAULT_MQTT_TOPIC_STATE,
        DEFAULT_MQTT_TOPIC_COMMAND,
    )
    assert DOMAIN == "argus"
    assert NAME == "Argus Home Hub"
    assert "alarm_control_panel" in PLATFORMS
    assert DEFAULT_ARMING_TIME >= 0
    assert DEFAULT_TRIGGER_TIME > 0
    assert DEFAULT_ENTRY_DELAY >= 0
    assert "argus" in DEFAULT_MQTT_TOPIC_STATE
    assert "argus" in DEFAULT_MQTT_TOPIC_COMMAND


@pytest.mark.asyncio
async def test_async_setup(mock_hass):
    """Test that async_setup registers panel and websocket."""
    with (
        patch("custom_components.argus.async_register_panel", new_callable=AsyncMock) as mock_panel,
        patch("custom_components.argus.async_register_websocket_api") as mock_ws,
    ):
        from custom_components.argus import async_setup
        result = await async_setup(mock_hass, {})
        assert result is True
        mock_panel.assert_called_once_with(mock_hass)
        mock_ws.assert_called_once_with(mock_hass)


@pytest.mark.asyncio
async def test_async_setup_entry(mock_hass, mock_config_entry):
    """Test that async_setup_entry stores data and forwards platforms."""
    with (
        patch("custom_components.argus.async_register_panel", new_callable=AsyncMock),
        patch("custom_components.argus.async_register_websocket_api"),
    ):
        from custom_components.argus import async_setup_entry
        mock_hass.data = {DOMAIN: {"_ws_registered": True}}
        result = await async_setup_entry(mock_hass, mock_config_entry)
        assert result is True
        assert mock_config_entry.entry_id in mock_hass.data[DOMAIN]


@pytest.mark.asyncio
async def test_async_unload_entry(mock_hass, mock_config_entry):
    """Test that async_unload_entry unloads platforms and cleans data."""
    from custom_components.argus import async_unload_entry
    mock_hass.data = {DOMAIN: {mock_config_entry.entry_id: {}}}
    mock_hass.config_entries.async_unload_platforms = AsyncMock(return_value=True)

    result = await async_unload_entry(mock_hass, mock_config_entry)
    assert result is True
    assert mock_config_entry.entry_id not in mock_hass.data[DOMAIN]
