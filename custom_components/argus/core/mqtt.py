"""Argus MQTT Protocol & Payload Parsing."""
from __future__ import annotations

import json
import logging
from typing import Any

_LOGGER = logging.getLogger(__name__)

MQTT_COMMAND_DISARM = "DISARM"
MQTT_COMMAND_ARM_HOME = "ARM_HOME"
MQTT_COMMAND_ARM_AWAY = "ARM_AWAY"
MQTT_COMMAND_ARM_NIGHT = "ARM_NIGHT"
MQTT_COMMAND_ARM_VACATION = "ARM_VACATION"

VALID_MQTT_COMMANDS = {
    MQTT_COMMAND_DISARM,
    MQTT_COMMAND_ARM_HOME,
    MQTT_COMMAND_ARM_AWAY,
    MQTT_COMMAND_ARM_NIGHT,
    MQTT_COMMAND_ARM_VACATION,
}


def parse_mqtt_payload(raw_payload: Any) -> tuple[str, str | None]:
    """Parse MQTT payload returning (command, code). Support both JSON and raw string."""
    payload_str = str(raw_payload or "").strip()
    if not payload_str:
        return "", None

    code: str | None = None
    cmd: str = payload_str

    if payload_str.startswith("{") and payload_str.endswith("}"):
        try:
            data = json.loads(payload_str)
            if isinstance(data, dict):
                cmd = str(data.get("command") or data.get("action") or "").upper()
                code = data.get("code") or data.get("pin")
                if code is not None:
                    code = str(code)
        except json.JSONDecodeError:
            pass

    cmd = cmd.upper()
    return cmd, code
