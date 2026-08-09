"""Canonical open-sensor policy resolution for Argus arming modes."""
from __future__ import annotations

_VALID_POLICIES = {"allow", "pending", "block"}
_WAIT_KEYS = (
    "wait_for_sensors",
    "waitForSensors",
    "arming_wait",
    "armingWait",
    "wait_arming",
    "waitArming",
    "pending_sensors",
    "pendingSensors",
)


def resolve_open_sensor_policy(config: dict | None, *, has_sensors: bool) -> str:
    """Return the canonical policy, migrating configurations saved by old UIs.

    Several legacy frontend overrides displayed a wait toggle but failed to
    persist ``open_sensors_policy``. A mode containing intrusion sensors must
    therefore default to the safe pending path unless an explicit policy was
    stored. Strict blocking remains available through an explicit ``block``.
    """
    config = config if isinstance(config, dict) else {}
    explicit = config.get("open_sensors_policy") or config.get("openSensorsPolicy")
    if explicit in _VALID_POLICIES:
        return str(explicit)
    if any(config.get(key) is True for key in _WAIT_KEYS):
        return "pending"
    if config.get("require_closed") is True or config.get("requireClosed") is True:
        return "pending"
    return "pending" if has_sensors else "allow"


def install_arming_policy_runtime() -> None:
    """Install canonical policy resolution after legacy safety wrappers."""
    from homeassistant.components.alarm_control_panel import AlarmControlPanelState

    from .alarm_control_panel import ArgusAlarmPanel

    if getattr(ArgusAlarmPanel, "_argus_canonical_arming_policy", False):
        return

    def canonical_policy(self, mode_key: str) -> str:
        config = self._mode_config(mode_key)
        try:
            target = AlarmControlPanelState(f"armed_{mode_key}")
            sensors = config.get("sensors") or self._sensors_for_state(target)
        except ValueError:
            sensors = config.get("sensors") or []
        return resolve_open_sensor_policy(config, has_sensors=bool(sensors))

    ArgusAlarmPanel._open_sensor_policy = canonical_policy
    ArgusAlarmPanel._argus_canonical_arming_policy = True
