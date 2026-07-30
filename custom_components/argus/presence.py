import logging
import asyncio
from typing import Any
from homeassistant.core import HomeAssistant, callback, Event
from homeassistant.helpers.event import async_track_state_change_event
from .storage import async_load_ui_data
from .websocket_api import async_append_audit_log, _resolve_alarm_entity_id
from homeassistant.const import STATE_UNAVAILABLE, STATE_UNKNOWN
from .const import SIGNAL_CONFIG_UPDATED
from homeassistant.helpers.dispatcher import async_dispatcher_connect

_LOGGER = logging.getLogger(__name__)

class PresenceManager:
    """Manages presence-based auto-arming and disarming."""

    def __init__(self, hass: HomeAssistant, entry_id: str):
        self.hass = hass
        self.entry_id = entry_id
        self._unsub_track = None
        self._unsub_dispatcher = None
        self._pending_tasks = {}

    async def async_setup(self):
        """Setup presence manager and state tracking."""
        await self.async_update_listeners()
        self._unsub_dispatcher = async_dispatcher_connect(
            self.hass, SIGNAL_CONFIG_UPDATED, self._on_config_updated
        )
        _LOGGER.info(f"Argus PresenceManager initialized for entry {self.entry_id}")

    @callback
    def _on_config_updated(self, entry_id=None):
        if entry_id is None or entry_id == self.entry_id:
            self.hass.async_create_task(self.async_update_listeners())

    async def async_update_listeners(self):
        if self._unsub_track:
            self._unsub_track()
            self._unsub_track = None
            
        for task in self._pending_tasks.values():
            task.cancel()
        self._pending_tasks.clear()
            
        ui_data = await async_load_ui_data(self.hass, self.entry_id)
        rules = ui_data.get("presence_rules", [])
        entities_to_track = set()
        for rule in rules:
            if not rule.get("enabled", True):
                continue
            for p in rule.get("persons", []):
                if p.startswith("person."):
                    entities_to_track.add(p)
                
        if entities_to_track:
            self._unsub_track = async_track_state_change_event(
                self.hass, list(entities_to_track), self._async_state_changed
            )

    @callback
    def async_unload(self):
        """Unload presence manager."""
        if self._unsub_track:
            self._unsub_track()
            self._unsub_track = None
        if self._unsub_dispatcher:
            self._unsub_dispatcher()
            self._unsub_dispatcher = None
        for task in self._pending_tasks.values():
            task.cancel()
        self._pending_tasks.clear()
        _LOGGER.info(f"Argus PresenceManager unloaded for entry {self.entry_id}")

    async def _async_state_changed(self, event: Event):
        """Handle state changes for person entities."""
        entity_id = event.data.get("entity_id")
        if not entity_id or not entity_id.startswith("person."):
            return

        new_state = event.data.get("new_state")
        old_state = event.data.get("old_state")
        if not new_state or not old_state or new_state.state == old_state.state:
            return

        ui_data = await async_load_ui_data(self.hass, self.entry_id)
        rules = ui_data.get("presence_rules", [])
        if not rules:
            return

        alarm_entity_id = _resolve_alarm_entity_id(self.hass, self.entry_id)
        if not alarm_entity_id:
            return

        alarm_state = self.hass.states.get(alarm_entity_id)
        if not alarm_state:
            return

        # Evaluate rules
        for rule in rules:
            if not rule.get("enabled", True):
                continue
            persons = rule.get("persons", [])
            if entity_id not in persons:
                continue

            # Auto-disarm logic
            if rule.get("auto_disarm") and new_state.state == "home":
                # Check if anyone arrived home and alarm is armed
                if alarm_state.state != "disarmed":
                    await self._execute_disarm(rule, entity_id)
                # Also cancel any pending arming tasks for this rule
                self._cancel_pending_task(rule.get("id"))
                continue

            # Auto-arm logic
            if new_state.state not in ("home", STATE_UNKNOWN, STATE_UNAVAILABLE):
                # Someone left, check if ALL tracked persons are now away
                all_away = True
                for p in persons:
                    s = self.hass.states.get(p)
                    if not s or s.state in ("home", STATE_UNKNOWN, STATE_UNAVAILABLE):
                        all_away = False
                        break

                if all_away and alarm_state.state == "disarmed":
                    self._schedule_arm(rule, persons)
                continue

            # If a person returns home, or goes unknown/unavailable, cancel pending arming
            if new_state.state in ("home", STATE_UNKNOWN, STATE_UNAVAILABLE):
                if rule.get("id") in self._pending_tasks:
                    await async_append_audit_log(
                        self.hass, 
                        "presence_cancel", 
                        f"Auto-arm cancelled: {entity_id} state changed to {new_state.state}",
                        user="System",
                        entry_id=self.entry_id
                    )
                    self._cancel_pending_task(rule.get("id"))

    def _cancel_pending_task(self, rule_id: str):
        if rule_id in self._pending_tasks:
            self._pending_tasks[rule_id].cancel()
            del self._pending_tasks[rule_id]

    def _schedule_arm(self, rule: dict, persons: list):
        rule_id = rule.get("id")
        self._cancel_pending_task(rule_id)
        delay = int(rule.get("delay", 0))
        
        async def _arm_task():
            try:
                if delay > 0:
                    await asyncio.sleep(delay)
                
                # Re-evaluate before arming
                alarm_entity_id = _resolve_alarm_entity_id(self.hass, self.entry_id)
                alarm_state = self.hass.states.get(alarm_entity_id)
                if not alarm_state or alarm_state.state != "disarmed":
                    return

                # Re-check all persons
                for p in persons:
                    s = self.hass.states.get(p)
                    if not s or s.state in ("home", STATE_UNKNOWN, STATE_UNAVAILABLE):
                        await async_append_audit_log(
                            self.hass, 
                            "presence_cancel", 
                            f"Auto-arm aborted at execution: {p} is {s.state if s else 'not found'}",
                            user="System",
                            entry_id=self.entry_id
                        )
                        return

                # Execute arming
                arm_mode = rule.get("arm_mode", "away")
                service = f"alarm_arm_{arm_mode}"
                await self.hass.services.async_call("alarm_control_panel", service, {"entity_id": alarm_entity_id})
                
                await async_append_audit_log(
                    self.hass, 
                    "presence_arm", 
                    f"Auto-armed ({arm_mode}) by presence rule",
                    user="System",
                    entry_id=self.entry_id
                )
            except asyncio.CancelledError:
                pass
            finally:
                if rule_id in self._pending_tasks:
                    del self._pending_tasks[rule_id]

        self._pending_tasks[rule_id] = self.hass.async_create_task(_arm_task())
        
        # Log scheduling
        self.hass.async_create_task(async_append_audit_log(
            self.hass, 
            "presence_schedule", 
            f"Auto-arm ({rule.get('arm_mode', 'away')}) scheduled in {delay}s",
            user="System",
            entry_id=self.entry_id
        ))

    async def _execute_disarm(self, rule: dict, trigger_entity: str):
        alarm_entity_id = _resolve_alarm_entity_id(self.hass, self.entry_id)
        if not alarm_entity_id:
            return
        
        await self.hass.services.async_call("alarm_control_panel", "alarm_disarm", {"entity_id": alarm_entity_id})
        
        await async_append_audit_log(
            self.hass, 
            "presence_disarm", 
            f"Auto-disarmed by {trigger_entity} arriving home",
            user="System",
            entry_id=self.entry_id
        )
