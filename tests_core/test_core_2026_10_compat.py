"""Smoke tests executed against the real Home Assistant Core 2026.10 source."""

import importlib

import homeassistant.core  # Initialize Core's voluptuous compatibility layer first.
from homeassistant import const
from homeassistant.components.alarm_control_panel import AlarmControlPanelEntity
from homeassistant.helpers.restore_state import RestoreEntity


def test_exact_core_target():
    assert (const.MAJOR_VERSION, const.MINOR_VERSION, str(const.PATCH_VERSION)) == (2026, 10, "0")


def test_argus_platform_and_websocket_modules_import_with_core_2026_10():
    modules = (
        "custom_components.argus",
        "custom_components.argus.alarm_control_panel",
        "custom_components.argus.binary_sensor",
        "custom_components.argus.config_flow",
        "custom_components.argus.switch",
        "custom_components.argus.websocket_api",
        "custom_components.argus.panel",
    )
    for module in modules:
        importlib.import_module(module)


def test_alarm_panel_uses_current_core_entity_contracts():
    from custom_components.argus.alarm_control_panel import ArgusAlarmPanel

    assert issubclass(ArgusAlarmPanel, AlarmControlPanelEntity)
    assert issubclass(ArgusAlarmPanel, RestoreEntity)
