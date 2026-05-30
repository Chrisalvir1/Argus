"""Tests for Argus config flow."""
from __future__ import annotations

import pytest
from unittest.mock import AsyncMock, MagicMock, patch

from custom_components.argus.const import (
    DOMAIN,
    DEFAULT_NAME,
    DEFAULT_ARMING_TIME,
    DEFAULT_TRIGGER_TIME,
    DEFAULT_ENTRY_DELAY,
)


class TestArgusConfigFlow:
    """Test the Argus config flow."""

    def test_config_flow_version(self):
        """Test config flow version is set."""
        from custom_components.argus.config_flow import ArgusConfigFlow
        assert ArgusConfigFlow.VERSION == 2

    def test_config_flow_domain(self):
        """Test config flow domain matches DOMAIN constant."""
        from custom_components.argus.config_flow import ArgusConfigFlow
        assert ArgusConfigFlow.HANDLER == DOMAIN

    @pytest.mark.asyncio
    async def test_step_user_shows_form_without_input(self):
        """Test user step shows form when no input provided."""
        from custom_components.argus.config_flow import ArgusConfigFlow

        flow = ArgusConfigFlow()
        flow.hass = MagicMock()
        flow.context = {}
        flow._async_current_entries = MagicMock(return_value=[])

        result = await flow.async_step_user(user_input=None)
        assert result["type"] == "form"
        assert result["step_id"] == "user"

    @pytest.mark.asyncio
    async def test_step_user_creates_entry_with_default_name(self):
        """Test user step creates entry with provided name."""
        from custom_components.argus.config_flow import ArgusConfigFlow

        flow = ArgusConfigFlow()
        flow.hass = MagicMock()
        flow.context = {}
        flow._async_current_entries = MagicMock(return_value=[])
        flow.async_create_entry = MagicMock(
            return_value={"type": "create_entry", "title": "Test Argus", "data": {}}
        )

        result = await flow.async_step_user(user_input={"name": "Test Argus"})
        assert flow.async_create_entry.called
        call_kwargs = flow.async_create_entry.call_args
        assert call_kwargs.kwargs.get("title") == "Test Argus" or call_kwargs[1].get("title") == "Test Argus"

    @pytest.mark.asyncio
    async def test_step_user_default_values_applied(self):
        """Test that sensible defaults are applied when creating entry."""
        from custom_components.argus.config_flow import ArgusConfigFlow

        flow = ArgusConfigFlow()
        flow.hass = MagicMock()
        flow.context = {}
        flow._async_current_entries = MagicMock(return_value=[])

        created_data = {}

        def capture_entry(title, data):
            created_data.update(data)
            return {"type": "create_entry", "title": title, "data": data}

        flow.async_create_entry = capture_entry

        await flow.async_step_user(user_input={"name": "My Alarm"})

        assert created_data.get("arming_time") == DEFAULT_ARMING_TIME
        assert created_data.get("trigger_time") == DEFAULT_TRIGGER_TIME
        assert created_data.get("entry_delay") == DEFAULT_ENTRY_DELAY
        assert created_data.get("sensors_away") == []
        assert created_data.get("sensors_home") == []
        assert created_data.get("code_arm_required") is False
        assert created_data.get("mqtt_enabled") is False


class TestArgusOptionsFlow:
    """Test the Argus options flow."""

    def test_options_flow_is_returned(self):
        """Test that get_options_flow returns an OptionsFlow instance."""
        from custom_components.argus.config_flow import ArgusConfigFlow, ArgusOptionsFlow
        entry = MagicMock()
        flow = ArgusConfigFlow.async_get_options_flow(entry)
        assert isinstance(flow, ArgusOptionsFlow)
