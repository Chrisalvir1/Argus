"""Argus 1.8 feature policy: local, deterministic security only."""
from __future__ import annotations

import copy
import logging
from typing import Any

from homeassistant.components import persistent_notification, websocket_api as ha_websocket

from .storage import async_append_audit_log

_LOGGER = logging.getLogger(__name__)
_REMOVED_ACTION_TYPES = {"tts", "analyze_camera", "ai", "copilot"}
_ALLOWED_SERVICE_DOMAINS = {
    "cover", "fan", "input_boolean", "light", "lock", "notify",
    "script", "siren", "switch",
}


def _replace_tokens(value: Any, sensor_id: str, sensor_name: str) -> Any:
    if isinstance(value, str):
        return (
            value.replace("{{sensor}}", sensor_name)
            .replace("{{ sensor }}", sensor_name)
            .replace("{sensor}", sensor_name)
            .replace("{{entity_id}}", sensor_id)
            .replace("{{ entity_id }}", sensor_id)
        )
    if isinstance(value, dict):
        return {key: _replace_tokens(item, sensor_id, sensor_name) for key, item in value.items()}
    if isinstance(value, list):
        return [_replace_tokens(item, sensor_id, sensor_name) for item in value]
    return value


async def evaluate_local_automations(panel, event_type: str, **kwargs) -> None:
    """Execute deterministic local actions without TTS or generative AI."""
    rules = panel._ui_config.get("automations", [])  # noqa: SLF001
    if not isinstance(rules, list):
        return
    sensor_id = str(kwargs.get("sensor", ""))
    sensor_state = panel.hass.states.get(sensor_id) if sensor_id else None
    sensor_name = (
        sensor_state.attributes.get("friendly_name", sensor_id)
        if sensor_state else sensor_id or "sensor"
    )

    for raw_rule in rules:
        if not isinstance(raw_rule, dict) or raw_rule.get("event") != event_type:
            continue
        condition = raw_rule.get("condition") or {}
        if condition.get("type") == "mode":
            current_mode = panel._alarm_state.value.replace("armed_", "")  # noqa: SLF001
            if current_mode != condition.get("value"):
                continue
        if condition.get("type") == "entity_id" and sensor_id != condition.get("value"):
            continue

        for raw_action in raw_rule.get("actions", []):
            if not isinstance(raw_action, dict):
                continue
            action = _replace_tokens(copy.deepcopy(raw_action), sensor_id, sensor_name)
            action_type = str(action.get("type", ""))
            if action_type in _REMOVED_ACTION_TYPES:
                _LOGGER.warning("Argus ignored removed action type: %s", action_type)
                continue

            try:
                if action_type in {"turn_on", "turn_off"}:
                    service = action_type
                    for entity_id in action.get("entities", []):
                        domain = str(entity_id).split(".", 1)[0]
                        if domain not in _ALLOWED_SERVICE_DOMAINS:
                            continue
                        await panel.hass.services.async_call(
                            domain, service, {"entity_id": entity_id}, blocking=False
                        )
                elif action_type == "notify":
                    target = str(action.get("target", ""))
                    if target.startswith("notify."):
                        await panel.hass.services.async_call(
                            "notify", target.split(".", 1)[1],
                            {
                                "title": str(action.get("title", "Argus"))[:128],
                                "message": str(action.get("message", ""))[:2000],
                            },
                            blocking=False,
                        )
                elif action_type == "service":
                    service_name = str(action.get("service", ""))
                    if "." not in service_name:
                        continue
                    domain, service = service_name.split(".", 1)
                    if domain not in _ALLOWED_SERVICE_DOMAINS:
                        continue
                    await panel.hass.services.async_call(
                        domain, service, copy.deepcopy(action.get("data", {})), blocking=False
                    )
                else:
                    continue
                await async_append_audit_log(
                    panel.hass,
                    "automation_executed",
                    f"{event_type}: {action_type}",
                    user="Argus",
                    metadata={"sensor_entity_id": sensor_id},
                )
            except Exception:  # noqa: BLE001
                _LOGGER.exception("Argus local automation failed")


def install_alarm_policy() -> None:
    """Replace experimental AI/TTS paths with the deterministic engine."""
    from .alarm_control_panel import ArgusAlarmPanel

    async def _disabled_smart_arming(self, _now=None) -> None:
        self._smart_arming_suggested = False

    ArgusAlarmPanel._evaluate_automations = evaluate_local_automations
    ArgusAlarmPanel._async_check_smart_arming = _disabled_smart_arming


def install_websocket_policy(module) -> None:
    """Register the supported WebSocket surface without TTS discovery."""
    command_names = (
        "ws_argus_dashboard", "ws_argus_save_ui", "ws_argus_get_mode_config",
        "ws_argus_save_mode_config", "ws_argus_get_audit_log", "ws_argus_get_stats",
        "ws_argus_get_forensic_timeline", "ws_argus_clear_audit_log",
        "ws_argus_restore_config", "ws_argus_save_advanced_config",
        "ws_argus_get_advanced_config", "ws_argus_save_automations",
        "ws_argus_get_automations", "ws_argus_get_media_players",
        "ws_argus_update_master_pin", "ws_argus_write_log",
        "ws_argus_upload_file", "ws_argus_list_files", "ws_argus_delete_file",
    )

    def _register(hass) -> None:
        for name in command_names:
            command = getattr(module, name)
            ha_websocket.async_register_command(hass, ha_websocket.require_admin(command))

    module.async_register_websocket_api = _register


def cleanup_removed_features(hass) -> None:
    """Dismiss notifications created by removed experimental features."""
    persistent_notification.async_dismiss(hass, "argus_smart_arming")
