"""Keep a pending Argus transition visible to HomeKit.

Apple Home may reconcile a long-running SecuritySystem transition back to Off
when no state event is emitted while Argus waits for open sensors. This runtime
adds an Argus-only heartbeat attribute while a genuine ARMING request exists.
Each heartbeat creates a fresh Home Assistant state event, allowing the scoped
HomeKit adapter to re-assert the requested target. It never completes, cancels,
or changes the alarm request itself.
"""
from __future__ import annotations

from homeassistant.components.alarm_control_panel import AlarmControlPanelState
from homeassistant.helpers.event import async_call_later

_INTERVAL_SECONDS = 15


def install_homekit_keepalive() -> None:
    """Install the keepalive after the safety runtime has wrapped the panel."""
    from .alarm_control_panel import ArgusAlarmPanel

    if getattr(ArgusAlarmPanel, "_argus_homekit_keepalive_patch", False):
        return

    original_arm = ArgusAlarmPanel._async_arm
    original_cancel = ArgusAlarmPanel._async_cancel_arming_request
    original_complete = ArgusAlarmPanel._async_complete_arming
    original_attributes = ArgusAlarmPanel.extra_state_attributes.fget

    def cancel_keepalive(self) -> None:
        unsubscribe = getattr(self, "_argus_homekit_keepalive_unsub", None)
        if unsubscribe:
            unsubscribe()
        self._argus_homekit_keepalive_unsub = None

    def schedule_keepalive(self) -> None:
        cancel_keepalive(self)

        def pulse(_now) -> None:
            self._argus_homekit_keepalive_unsub = None
            if (
                not getattr(self, "_arm_request", None)
                or self._alarm_state != AlarmControlPanelState.ARMING
            ):
                return
            self._argus_homekit_keepalive_revision = (
                getattr(self, "_argus_homekit_keepalive_revision", 0) + 1
            )
            self.async_write_ha_state()
            self._argus_homekit_keepalive_unsub = async_call_later(
                self.hass, _INTERVAL_SECONDS, pulse
            )

        self._argus_homekit_keepalive_unsub = async_call_later(
            self.hass, _INTERVAL_SECONDS, pulse
        )

    async def arm_with_keepalive(self, target, code=None, *, origin="service"):
        result = await original_arm(self, target, code, origin=origin)
        if (
            getattr(self, "_arm_request", None)
            and self._alarm_state == AlarmControlPanelState.ARMING
        ):
            schedule_keepalive(self)
        return result

    async def cancel_with_keepalive(self, reason, *, disarm=False):
        cancel_keepalive(self)
        return await original_cancel(self, reason, disarm=disarm)

    async def complete_with_keepalive(self, target):
        cancel_keepalive(self)
        return await original_complete(self, target)

    def attributes_with_keepalive(self):
        attributes = original_attributes(self)
        if (
            getattr(self, "_arm_request", None)
            and self._alarm_state == AlarmControlPanelState.ARMING
        ):
            attributes["argus_homekit_keepalive"] = getattr(
                self, "_argus_homekit_keepalive_revision", 0
            )
        return attributes

    ArgusAlarmPanel._async_arm = arm_with_keepalive
    ArgusAlarmPanel._async_cancel_arming_request = cancel_with_keepalive
    ArgusAlarmPanel._async_complete_arming = complete_with_keepalive
    ArgusAlarmPanel.extra_state_attributes = property(attributes_with_keepalive)
    ArgusAlarmPanel._argus_homekit_keepalive_patch = True
