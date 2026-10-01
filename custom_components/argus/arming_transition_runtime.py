"""Keep a pending Argus transition visible to Home Assistant consumers.

Some bridges reconcile a long-running alarm transition when no state event is
emitted while Argus waits for open sensors. This runtime emits an Argus-only
heartbeat attribute while a genuine ARMING request exists. Each heartbeat
creates a fresh Home Assistant state event so subscribed exporters can refresh
the entity and its arming_target/progress attributes. It never completes,
cancels, or changes the alarm request itself. The native HomeKit adapter can
consume the same event and apply its protocol-specific target-state mapping.
"""
from __future__ import annotations

from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.helpers.event import async_call_later

_INTERVAL_SECONDS = 15


def install_arming_transition_runtime() -> None:
    """Install the generic transition heartbeat after safety wrappers."""
    from .alarm_control_panel import ArgusAlarmPanel

    if (
        getattr(ArgusAlarmPanel, "_argus_arming_transition_runtime", False)
        or getattr(ArgusAlarmPanel, "_argus_homekit_keepalive_patch", False)
    ):
        return

    original_arm = ArgusAlarmPanel._async_arm
    original_cancel = ArgusAlarmPanel._async_cancel_arming_request
    original_complete = ArgusAlarmPanel._async_complete_arming
    original_attributes = ArgusAlarmPanel.extra_state_attributes.fget

    def cancel_transition_refresh(self) -> None:
        unsubscribe = getattr(self, "_argus_transition_refresh_unsub", None)
        if unsubscribe:
            unsubscribe()
        self._argus_transition_refresh_unsub = None

    def schedule_transition_refresh(self) -> None:
        cancel_transition_refresh(self)

        def pulse(_now) -> None:
            self._argus_transition_refresh_unsub = None
            if (
                not getattr(self, "_arm_request", None)
                or self._alarm_state != AlarmControlPanelState.ARMING
            ):
                return
            self._argus_transition_revision = (
                getattr(self, "_argus_transition_revision", 0) + 1
            )
            self.async_write_ha_state()
            self._argus_transition_refresh_unsub = async_call_later(
                self.hass, _INTERVAL_SECONDS, pulse
            )

        self._argus_transition_refresh_unsub = async_call_later(
            self.hass, _INTERVAL_SECONDS, pulse
        )

    async def arm_with_keepalive(self, target, code=None, *, origin="service"):
        result = await original_arm(self, target, code, origin=origin)
        if (
            getattr(self, "_arm_request", None)
            and self._alarm_state == AlarmControlPanelState.ARMING
        ):
            schedule_transition_refresh(self)
        return result

    async def cancel_with_keepalive(self, reason, *, disarm=False):
        cancel_transition_refresh(self)
        return await original_cancel(self, reason, disarm=disarm)

    async def complete_with_keepalive(self, target):
        cancel_transition_refresh(self)
        return await original_complete(self, target)

    def attributes_with_keepalive(self):
        attributes = original_attributes(self)
        if (
            getattr(self, "_arm_request", None)
            and self._alarm_state == AlarmControlPanelState.ARMING
        ):
            revision = getattr(
                self, "_argus_transition_revision", 0
            )
            attributes["argus_transition_revision"] = revision
            # Preserve the original attribute for existing HomeKit setups and
            # dashboards that may already use it as a transition refresh key.
            attributes["argus_homekit_keepalive"] = revision
        return attributes

    ArgusAlarmPanel._async_arm = arm_with_keepalive
    ArgusAlarmPanel._async_cancel_arming_request = cancel_with_keepalive
    ArgusAlarmPanel._async_complete_arming = complete_with_keepalive
    ArgusAlarmPanel.extra_state_attributes = property(attributes_with_keepalive)
    ArgusAlarmPanel._argus_arming_transition_runtime = True
    # Preserve the guard for any older loader that installed the former alias.
    ArgusAlarmPanel._argus_homekit_keepalive_patch = True
