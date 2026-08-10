"""Argus alarm entity and local automation runtime."""
from __future__ import annotations

import json
import logging
import copy

from homeassistant.components.alarm_control_panel import (
    AlarmControlPanelEntity,
    AlarmControlPanelEntityFeature,
    AlarmControlPanelState,
    CodeFormat,
)
from homeassistant.components import persistent_notification
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import STATE_ON
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.event import (
    async_track_state_change_event,
    async_call_later,
    async_track_time_interval,
)
from datetime import datetime, timedelta, timezone
from homeassistant.helpers.restore_state import RestoreEntity
from homeassistant.util import dt as dt_util

from .const import (
    DOMAIN,
    DATA_PANELS,
    SIGNAL_CONFIG_UPDATED,
    CONF_NAME,
    CONF_CODE,
    CONF_CODE_ARM_REQUIRED,
    CONF_ARMING_TIME,
    CONF_TRIGGER_TIME,
    CONF_ENTRY_DELAY,
    CONF_SENSORS_AWAY,
    CONF_SENSORS_HOME,
    CONF_SENSORS_NIGHT,
    CONF_SENSORS_VACATION,
    CONF_ENTRY_SENSORS,
    CONF_LINKED_ALARM_PANELS,
    CONF_SIREN_ENTITY,
    CONF_MQTT_ENABLED,
    CONF_MQTT_TOPIC_STATE,
    CONF_MQTT_TOPIC_COMMAND,
    DEFAULT_NAME,
    DEFAULT_ARMING_TIME,
    DEFAULT_TRIGGER_TIME,
    DEFAULT_ENTRY_DELAY,
    MQTT_COMMAND_DISARM,
    MQTT_COMMAND_ARM_HOME,
    MQTT_COMMAND_ARM_AWAY,
    MQTT_COMMAND_ARM_NIGHT,
    MQTT_COMMAND_ARM_VACATION,
)
from .storage import (
    async_load_ui_data, async_append_audit_log,
    async_get_alarm_runtime_state, async_save_alarm_runtime_state,
)
from .security import PinAttemptLimiter, verify_pin
from .arming_voice import async_announce_arming_wait_update

_LOGGER = logging.getLogger(__name__)

_MODE_LABELS = {
    'armed_home': 'En Casa',
    'armed_away': 'Ausente',
    'armed_night': 'Noche',
    'armed_vacation': 'Vacaciones'
}

_LANGUAGE_NAMES = {
    "es": "Spanish", "en": "English", "fr": "French", "pt": "Portuguese",
    "it": "Italian", "zh": "Chinese", "ru": "Russian",
}

_SOS_TEXT = {
    "es": ("ARGUS — SOS / PÁNICO", "🚨 Botón SOS activado desde {home}. Revisa el estado de la alarma de inmediato.", "Llamar al {number}"),
    "en": ("ARGUS — SOS / PANIC", "🚨 SOS button activated from {home}. Check the alarm status immediately.", "Call {number}"),
    "fr": ("ARGUS — SOS / PANIQUE", "🚨 Bouton SOS activé depuis {home}. Vérifiez immédiatement l’état de l’alarme.", "Appeler le {number}"),
    "pt": ("ARGUS — SOS / PÂNICO", "🚨 Botão SOS ativado em {home}. Verifique o estado do alarme imediatamente.", "Ligar para {number}"),
    "it": ("ARGUS — SOS / PANICO", "🚨 Pulsante SOS attivato da {home}. Controlla subito lo stato dell’allarme.", "Chiama {number}"),
    "zh": ("ARGUS — SOS / 紧急", "🚨 SOS 按钮已从 {home} 激活。请立即检查警报状态。", "呼叫 {number}"),
    "ru": ("ARGUS — SOS / ТРЕВОГА", "🚨 Кнопка SOS активирована из {home}. Немедленно проверьте состояние сигнализации.", "Позвонить {number}"),
}

ARMED_STATES = {
    AlarmControlPanelState.ARMED_HOME,
    AlarmControlPanelState.ARMED_AWAY,
    AlarmControlPanelState.ARMED_NIGHT,
    AlarmControlPanelState.ARMED_VACATION,
}

# Argus accepts locks and several binary-sensor style entities as intrusion
# sensors.  Home Assistant represents their active state with different values.
_INTRUSION_ACTIVE_STATES = {STATE_ON, "open", "unlocked", "active", "motion", "recording"}


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Argus alarm panel from a config entry."""
    panel = ArgusAlarmPanel(hass, config_entry)
    hass.data.setdefault(DOMAIN, {}).setdefault(DATA_PANELS, {})[config_entry.entry_id] = panel
    async_add_entities([panel], update_before_add=True)



class ArgusAlarmPanel(AlarmControlPanelEntity, RestoreEntity):
    """Argus Smart Alarm Control Panel with sensor monitoring."""

    _attr_has_entity_name = True
    _attr_should_poll = False
    _attr_supported_features = (
        AlarmControlPanelEntityFeature.ARM_HOME
        | AlarmControlPanelEntityFeature.ARM_AWAY
        | AlarmControlPanelEntityFeature.ARM_NIGHT
        | AlarmControlPanelEntityFeature.ARM_VACATION
        | AlarmControlPanelEntityFeature.TRIGGER
    )

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        self.hass = hass
        self._config_entry = config_entry
        self._load_config()
        self._alarm_state = AlarmControlPanelState.DISARMED
        self._attr_unique_id = config_entry.entry_id

        # Core Engines
        from .core.incidents import IncidentEngine
        self._incident_engine = IncidentEngine(correlation_window_seconds=60)

        # Timers
        self._arming_listener = None
        self._entry_listener = None
        self._trigger_listener = None
        self._arming_target = None
        self._arm_request: dict | None = None
        self._arm_generation = 0
        self._triggered_mode: str | None = None  # modo activo al momento del disparo
        self._panic_active = False
        self._panic_previous_state: AlarmControlPanelState | None = None

        # Tracking
        self._unsub_sensors = None
        self._triggered_by: str | None = None
        self._mqtt_unsub = None
        
        # UI/Mode config
        self._ui_config = {}

        # ARM-LOCK v2: timestamp (monotonic) until which forced-Home is blocked
        self._arm_lock_until: float = 0.0
        self._unsub_schedule = None
        self._confirmation_events: dict[str, float] = {}
        self._confirmation_listener = None

    async def _get_context_user(self) -> str:
        """Get the user name from the current context."""
        ctx = self._context
        if ctx and ctx.user_id:
            try:
                user = await self.hass.auth.async_get_user(ctx.user_id)
                if user:
                    return user.name
            except Exception:
                pass
        return "Argus"

    def _language(self) -> str:
        """Return the supported Home Assistant language for server-side output."""
        language = str(getattr(self.hass.config, "language", "en")).split("-", 1)[0]
        return language if language in _SOS_TEXT else "en"

    # ── Config loading ──────────────────────────────────────────────
    def _load_config(self):
        d = dict(self._config_entry.data)
        if self._config_entry.options:
            d.update(self._config_entry.options)
        self._name = d.get(CONF_NAME, DEFAULT_NAME)
        self._code = d.get(CONF_CODE) or None
        self._code_arm_required = d.get(CONF_CODE_ARM_REQUIRED, False)
        # Safe int cast — el config entry puede traer None si el usuario no
        # configuró el campo; int(None) lanza TypeError → usamos fallback.
        def _safe_int(val, default):
            try:
                return int(val) if val is not None else int(default)
            except (TypeError, ValueError):
                return int(default)
        self._arming_time  = _safe_int(d.get(CONF_ARMING_TIME),  DEFAULT_ARMING_TIME)
        self._trigger_time = _safe_int(d.get(CONF_TRIGGER_TIME), DEFAULT_TRIGGER_TIME)
        self._entry_delay  = _safe_int(d.get(CONF_ENTRY_DELAY),  DEFAULT_ENTRY_DELAY)
        
        # Base sensors (defaults if no per-mode UI config exists)
        self._sensors_away = d.get(CONF_SENSORS_AWAY, [])
        self._sensors_home = d.get(CONF_SENSORS_HOME, [])
        self._sensors_night = d.get(CONF_SENSORS_NIGHT, [])
        self._sensors_vacation = d.get(CONF_SENSORS_VACATION, self._sensors_away)
        self._entry_sensors = d.get(CONF_ENTRY_SENSORS, [])
        self._siren_entity = d.get(CONF_SIREN_ENTITY)
        
        self._mqtt_enabled = d.get(CONF_MQTT_ENABLED, False)
        self._mqtt_topic_state = d.get(CONF_MQTT_TOPIC_STATE, "argus/alarm/state")
        self._mqtt_topic_command = d.get(CONF_MQTT_TOPIC_COMMAND, "argus/alarm/set")

    # ── Properties ────────────────────────────────────────────────
    @property
    def name(self) -> str:
        return self._name

    @property
    def device_info(self) -> dict:
        return {"identifiers": {(DOMAIN, self._config_entry.entry_id)}, "name": self._name, "manufacturer": "Argus", "model": "Argus Home Hub"}

    @property
    def state(self) -> AlarmControlPanelState | None:
        """Return the state of the device."""
        return self._alarm_state

    @property
    def alarm_state(self) -> AlarmControlPanelState | None:
        """Return the state (modern property name)."""
        return self._alarm_state

    @property
    def code_arm_required(self) -> bool:
        # FIX: Si se devuelve True, HomeKit asume que armar fallará porque no puede enviar PIN,
        # lo que provoca que el botón rebote a "Desactivado" inmediatamente.
        return False

    @property
    def code_format(self):
        if self._code:
            return CodeFormat.NUMBER
        return None

    @property
    def extra_state_attributes(self) -> dict:
        attrs = {"config_entry_id": self._config_entry.entry_id}
        if getattr(self, "_arm_lock_bounces", 0) > 0:
            attrs["arm_lock_bounces"] = self._arm_lock_bounces
        if self._triggered_by:
            attrs["triggered_by"] = self._triggered_by
        if self._panic_active:
            attrs["argus_panic_active"] = True
            if self._panic_previous_state:
                attrs["panic_previous_state"] = self._panic_previous_state.value
        if self._alarm_state in (
            AlarmControlPanelState.ARMING,
            AlarmControlPanelState.PENDING,
        ):
            delay = (
                self._arming_time
                if self._alarm_state == AlarmControlPanelState.ARMING
                else self._entry_delay
            )
            attrs["delay"] = delay
        if self._arm_request:
            attrs["arming_target"] = self._arm_request["target"].value
            attrs["arming_origin"] = self._arm_request["origin"]
            attrs["arming_blocking_sensors"] = list(self._arm_request["blocking_sensors"])
            attrs["arming_waiting_for_sensors"] = bool(self._arm_request["wait_for_sensors"])
            attrs["argus_homekit_transition"] = (
                self._alarm_state == AlarmControlPanelState.ARMING
            )

        # Spatial Model & Master Alarm Attributes
        from .core.spatial import Property, Building, Floor, Area, Room, MasterAlarm
        st_val = self._alarm_state.value if hasattr(self._alarm_state, "value") else str(self._alarm_state)
        area_house = Area("area_house", "Main House", state=st_val)
        prop = Property("prop_home", self._name, buildings=[Building("bld_main", "Main Residence", floors=[Floor("floor_1", "Main Floor", areas=[area_house])])])
        master = MasterAlarm(prop)
        attrs["spatial_summary"] = master.get_summary()
        attrs["combined_state"] = master.get_combined_state()

        # Health Diagnostic Attributes
        from .core.health import evaluate_system_health
        states_dict = {st.entity_id: {"state": st.state, "attributes": dict(st.attributes)} for st in self.hass.states.async_all()}
        health_rep = evaluate_system_health(states_dict, self._all_sensors(), self._siren_entity, self._mqtt_enabled)
        attrs["health_readiness_score"] = health_rep.readiness_score
        attrs["health_status"] = health_rep.status
        return attrs

    # ── Sensor helpers ─────────────────────────────────────────────
    def _get_mode_val(self, mode_key, key, default):
        """Get value from UI mode config, fallback to self, then global default.

        FIX-2: reads __by_entity__ first (canonical path written by JS panel),
        then falls back to flat legacy modes[mode_key].
        Also casts numeric values safely so None never reaches comparisons.
        """
        modes = self._ui_config.get("modes", {})

        # Priority 1: per-entity config (canonical path)
        if mode_key:
            by_entity = modes.get("__by_entity__", {})
            per_entity_cfg = by_entity.get(self.entity_id, {}).get(mode_key, {})
            if key in per_entity_cfg:
                val = per_entity_cfg[key]
                if key in ("arming_time", "entry_delay") and val is not None:
                    try:
                        return int(val)
                    except (TypeError, ValueError):
                        pass
                return val

        # Priority 2: flat legacy config
        if mode_key:
            flat_cfg = modes.get(mode_key, {})
            if key in flat_cfg:
                val = flat_cfg[key]
                if key in ("arming_time", "entry_delay") and val is not None:
                    try:
                        return int(val)
                    except (TypeError, ValueError):
                        pass
                return val

        # Priority 3: component-level defaults
        attr_map = {
            "arming_time": self._arming_time,
            "entry_delay": self._entry_delay,
            "mqtt_enabled": self._mqtt_enabled,
        }
        val = attr_map.get(key, default)
        if key in ("arming_time", "entry_delay") and val is not None:
            try:
                return int(val)
            except (TypeError, ValueError):
                pass
        return val if val is not None else default

    def _sensors_for_state(self, state: AlarmControlPanelState) -> list[str]:
        """Return active sensors for the given state, excluding bypassed ones.

        Priority:
          1. Per-entity config  → modes["__by_entity__"][entity_id][mode_key]
          2. Flat/legacy config → modes[mode_key]
          3. Static YAML config (fallback)
        """
        modes = self._ui_config.get("modes", {})
        mode_key = state.value.replace("armed_", "")

        # 1 – per-entity config written by the JS panel via argus/save_mode_config
        by_entity = modes.get("__by_entity__", {})
        m_cfg = by_entity.get(self.entity_id, {}).get(mode_key)

        # 2 – flat legacy config (written by older versions / direct saves)
        if not m_cfg:
            m_cfg = modes.get(mode_key)

        if m_cfg:
            sensors  = m_cfg.get("sensors") or []
            # Accept both camelCase (JS) and snake_case (Python) key names
            bypassed = (
                m_cfg.get("bypassed_sensors")
                or m_cfg.get("bypassedSensors")
                or []
            )
            active = [s for s in sensors if s not in bypassed]
            _LOGGER.debug(
                "Argus [%s] mode=%s sensors=%s bypassed=%s active=%s",
                self.entity_id, mode_key, sensors, bypassed, active,
            )
            return active

        # 3 – static YAML fallback
        if state == AlarmControlPanelState.ARMED_HOME:
            return self._sensors_home or self._sensors_away
        if state == AlarmControlPanelState.ARMED_NIGHT:
            return self._sensors_night or self._sensors_away
        if state == AlarmControlPanelState.ARMED_VACATION:
            return self._sensors_vacation or self._sensors_away
        return self._sensors_away  # ARMED_AWAY

    def _all_sensors(self) -> list[str]:
        """Return the union of all sensors across every mode config source."""
        s: set[str] = set()

        # 1 – static YAML config
        s.update(self._sensors_away     or [])
        s.update(self._sensors_home     or [])
        s.update(self._sensors_night    or [])
        s.update(self._sensors_vacation or [])

        modes = self._ui_config.get("modes", {})

        # 2 – flat / legacy mode configs  (modes["home"], modes["away"] …)
        for key, cfg in modes.items():
            if key == "__by_entity__":
                continue
            if isinstance(cfg, dict) and cfg.get("sensors"):
                s.update(cfg["sensors"])

        # 3 – per-entity configs  (modes["__by_entity__"][entity_id][mode_key])
        for _eid, entity_modes in modes.get("__by_entity__", {}).items():
            for _mode_key, cfg in entity_modes.items():
                if isinstance(cfg, dict) and cfg.get("sensors"):
                    s.update(cfg["sensors"])

        return list(s)

    def _mode_config(self, mode_key: str) -> dict:
        modes = self._ui_config.get("modes", {})
        return modes.get("__by_entity__", {}).get(self.entity_id, {}).get(mode_key) or modes.get(mode_key) or {}

    def _open_blocking_sensors(self, target: AlarmControlPanelState) -> list[str]:
        config = self._mode_config(target.value.replace("armed_", ""))
        sensors = config.get("sensors") or self._sensors_for_state(target)
        bypassed = config.get("bypassed_sensors") or config.get("bypassedSensors") or []
        return [sensor for sensor in sensors if sensor not in bypassed and (state := self.hass.states.get(sensor)) and state.state in _INTRUSION_ACTIVE_STATES]

    def _open_sensor_policy(self, mode_key: str) -> str:
        config = self._mode_config(mode_key)
        if config.get("require_closed") or config.get("requireClosed"):
            return "block"
        policy = config.get("open_sensors_policy") or config.get("openSensorsPolicy")
        return policy if policy in {"allow", "pending", "block"} else "allow"

    # ── Lifecycle ──────────────────────────────────────────────────
    async def async_added_to_hass(self) -> None:
        await super().async_added_to_hass()

        # Load dynamic mode configuration from storage
        self._ui_config = await async_load_ui_data(self.hass, self._config_entry.entry_id)

        # Local-first recovery: prefer the last *committed* stable state.  We
        # never restore a countdown, an entry delay, or a triggered state, so
        # power recovery cannot replay an order that was already obsolete.
        runtime_state = await async_get_alarm_runtime_state(
            self.hass, self._config_entry.entry_id
        )
        restored_from_runtime = False
        runtime_value = runtime_state.get("state")
        if runtime_value:
            try:
                candidate = AlarmControlPanelState(runtime_value)
                if candidate in (
                    AlarmControlPanelState.DISARMED,
                    AlarmControlPanelState.ARMED_HOME,
                    AlarmControlPanelState.ARMED_AWAY,
                    AlarmControlPanelState.ARMED_NIGHT,
                    AlarmControlPanelState.ARMED_VACATION,
                ):
                    self._alarm_state = candidate
                    restored_from_runtime = True
            except ValueError:
                pass

        # RestoreEntity is the compatibility fallback for installations made
        # before runtime persistence existed.
        last = await self.async_get_last_state()
        if last is not None and not restored_from_runtime:
            try:
                restored = AlarmControlPanelState(last.state)
                if restored in (
                    AlarmControlPanelState.DISARMED,
                    AlarmControlPanelState.ARMED_HOME,
                    AlarmControlPanelState.ARMED_AWAY,
                    AlarmControlPanelState.ARMED_NIGHT,
                    AlarmControlPanelState.ARMED_VACATION,
                ):
                    self._alarm_state = restored
                    runtime_state = {
                        "state": restored.value,
                        "updated_at": last.last_updated.isoformat(),
                        "source": "restore_entity",
                    }
            except ValueError:
                self._alarm_state = AlarmControlPanelState.DISARMED

        if restored_from_runtime:
            await async_append_audit_log(
                self.hass, "state_restored",
                f"Estado local restaurado: {self._alarm_state.value}", user="Argus",
                entry_id=self._config_entry.entry_id,
            )

        await self._async_reconcile_state_schedule(runtime_state)
        if not runtime_value:
            await self._async_persist_stable_state("legacy_restore")

        # Subscribe to sensor state changes
        all_sensors = self._all_sensors()
        if all_sensors:
            self._unsub_sensors = async_track_state_change_event(
                self.hass, all_sensors, self._async_sensor_changed
            )

        # MQTT
        if self._mqtt_enabled:
            await self._async_setup_mqtt()

        # Re-subscribe sensors & reload config when panel saves changes
        self.async_on_remove(
            async_dispatcher_connect(
                self.hass, SIGNAL_CONFIG_UPDATED, self._async_reload_config
            )
        )

        self._unsub_schedule = async_track_time_interval(
            self.hass, self._async_check_state_schedule, timedelta(seconds=30)
        )

    def _latest_scheduled_transition(self):
        """Return the most recent enabled local schedule occurrence."""
        schedule = self._ui_config.get("state_schedule", [])
        if not isinstance(schedule, list):
            return None
        now = dt_util.now()
        candidates = []
        valid_states = {
            "disarmed", "armed_home", "armed_away", "armed_night", "armed_vacation",
        }
        for item in schedule:
            if not isinstance(item, dict) or item.get("enabled", True) is False:
                continue
            state = item.get("state")
            time_value = str(item.get("time", ""))
            days = item.get("days", list(range(7)))
            if state not in valid_states or not isinstance(days, list):
                continue
            try:
                hour, minute = (int(part) for part in time_value.split(":", 1))
                if not (0 <= hour <= 23 and 0 <= minute <= 59):
                    continue
            except (TypeError, ValueError):
                continue
            for days_ago in range(8):
                date = (now - timedelta(days=days_ago)).date()
                if date.weekday() not in days:
                    continue
                occurrence = now.replace(
                    year=date.year, month=date.month, day=date.day,
                    hour=hour, minute=minute, second=0, microsecond=0,
                )
                if occurrence <= now:
                    candidates.append((occurrence, state, item.get("id", "schedule")))
                    break
        return max(candidates, key=lambda value: value[0]) if candidates else None

    async def _async_reconcile_state_schedule(self, runtime_state: dict) -> None:
        """Apply only a schedule transition newer than the committed state."""
        latest = self._latest_scheduled_transition()
        if not latest:
            return
        occurrence, state_value, schedule_id = latest

        # SOS / manual panic requires explicit action — never disarm or change state via schedule
        if getattr(self, "_panic_active", False):
            return

        updated_at = runtime_state.get("updated_at")
        if updated_at:
            try:
                committed = datetime.fromisoformat(str(updated_at).replace("Z", "+00:00"))
                if committed.tzinfo is None:
                    committed = committed.replace(tzinfo=timezone.utc)
                if occurrence.astimezone(timezone.utc) <= committed.astimezone(timezone.utc):
                    return
            except (TypeError, ValueError):
                pass
        try:
            scheduled_state = AlarmControlPanelState(state_value)
        except ValueError:
            return

        # If currently TRIGGERED, PENDING, or ARMING, allow EXCLUSIVELY a scheduled transition to DISARMED
        if self._alarm_state in (
            AlarmControlPanelState.TRIGGERED,
            AlarmControlPanelState.PENDING,
            AlarmControlPanelState.ARMING,
        ):
            if scheduled_state != AlarmControlPanelState.DISARMED:
                return

        scheduled_value = getattr(scheduled_state, "value", scheduled_state)
        is_scheduled_arm = scheduled_value in {
            "armed_home", "armed_away", "armed_night", "armed_vacation"
        }
        if self._alarm_state != scheduled_state and is_scheduled_arm:
            # Schedules must take the same pending/bypass-aware path as every
            # other arm request; never write an armed state directly.
            await self._async_arm(scheduled_state, origin="schedule")
        elif self._alarm_state != scheduled_state:
            self._cancel_timers()
            if scheduled_state == AlarmControlPanelState.DISARMED or self._alarm_state == AlarmControlPanelState.TRIGGERED:
                await self._async_siren(False)
                persistent_notification.async_dismiss(self.hass, "argus_triggered")
                self._triggered_by = None
                self._triggered_mode = None
                self._panic_active = False
                self._panic_previous_state = None
            self._alarm_state = scheduled_state
            self.async_write_ha_state()
            await self._async_mqtt_publish()
        await self._async_persist_stable_state("schedule_recovery")
        await async_append_audit_log(
            self.hass, "schedule_reconciled",
            f"Horario {schedule_id}: {state_value}", user="Argus",
            entry_id=self._config_entry.entry_id,
        )

    @callback
    def _async_check_state_schedule(self, _now=None) -> None:
        """Keep local schedules working even when internet/cloud services fail."""
        async def _check():
            runtime = await async_get_alarm_runtime_state(
                self.hass, self._config_entry.entry_id
            )
            await self._async_reconcile_state_schedule(runtime)
        self.hass.async_create_task(_check())

    async def _async_reload_config(self, changed_entry_id: str | None = None) -> None:
        """Reload UI config, re-subscribe sensors, and update MQTT subscriptions after panel saves configuration."""
        # A mode save in one Argus instance must never cancel an arming
        # request in another instance.  Older dispatcher sends did not carry
        # an entry id, so preserve that behaviour for compatibility.
        if changed_entry_id and changed_entry_id != self._config_entry.entry_id:
            return
        await self._async_cancel_arming_request("config_reload", disarm=True)
        self._ui_config = await async_load_ui_data(self.hass, self._config_entry.entry_id)
        # Re-subscribe sensors (picks up newly added/removed sensors from UI)
        if self._unsub_sensors:
            self._unsub_sensors()
            self._unsub_sensors = None
        all_sensors = self._all_sensors()
        if all_sensors:
            self._unsub_sensors = async_track_state_change_event(
                self.hass, all_sensors, self._async_sensor_changed
            )

        # Update MQTT status dynamically on config reload
        global_mqtt = self._get_mode_val(None, "mqtt_enabled", self._mqtt_enabled)
        any_mode_mqtt = any(self._get_mode_val(m, "mqtt_enabled", False) for m in ["home", "away", "night", "vacation"])
        should_mqtt = global_mqtt or any_mode_mqtt

        if should_mqtt:
            await self._async_setup_mqtt()
            await self._async_mqtt_publish()
        elif self._mqtt_unsub:
            try:
                self._mqtt_unsub()
            except Exception:  # noqa: BLE001
                pass
            self._mqtt_unsub = None
            _LOGGER.info("Argus: MQTT unsubscribed due to configuration reload")

        _LOGGER.info(
            "Argus: Config reloaded — monitoreando %d sensores: %s",
            len(all_sensors), all_sensors
        )

    async def _evaluate_automations(self, event_type: str, **kwargs) -> None:
        """Execute only validated, local automation actions."""
        rules = self._ui_config.get("automations", [])
        if not isinstance(rules, list):
            return
        sensor_id = str(kwargs.get("sensor", ""))
        sensor = self.hass.states.get(sensor_id) if sensor_id else None
        sensor_name = str(sensor.attributes.get("friendly_name", sensor_id) if sensor else sensor_id or "sensor")
        allowed_domains = {"cover", "fan", "input_boolean", "light", "lock", "siren", "switch"}
        allowed_services = {"cover": {"open_cover", "close_cover", "stop_cover"}, "lock": {"lock", "unlock"}}

        def replace_tokens(value):
            if isinstance(value, str):
                return (value.replace("{{sensor}}", sensor_name).replace("{{ sensor }}", sensor_name)
                        .replace("{sensor}", sensor_name).replace("{{entity_id}}", sensor_id)
                        .replace("{{ entity_id }}", sensor_id))
            if isinstance(value, dict):
                return {key: replace_tokens(item) for key, item in value.items()}
            if isinstance(value, list):
                return [replace_tokens(item) for item in value]
            return value

        for rule in rules:
            if not isinstance(rule, dict) or rule.get("event") != event_type:
                continue
            condition = rule.get("condition") or {}
            if not isinstance(condition, dict):
                continue
            if condition.get("type") == "mode" and self._alarm_state.value.replace("armed_", "") != condition.get("value"):
                continue
            if condition.get("type") == "entity_id" and sensor_id != condition.get("value"):
                continue
            actions = rule.get("actions", [])
            if not isinstance(actions, list):
                continue
            for raw_action in actions:
                if not isinstance(raw_action, dict):
                    continue
                action = replace_tokens(copy.deepcopy(raw_action))
                action_type = str(action.get("type", ""))
                try:
                    if action_type in {"turn_on", "turn_off"}:
                        entities = action.get("entities", [])
                        if not isinstance(entities, list):
                            continue
                        for entity_id in entities:
                            domain, separator, _ = str(entity_id).partition(".")
                            if separator and domain in allowed_domains:
                                await self.hass.services.async_call(domain, action_type, {"entity_id": str(entity_id)}, blocking=False)
                    elif action_type == "notify":
                        target = str(action.get("target", ""))
                        if not target.startswith("notify.") or target.count(".") != 1:
                            continue
                        await self.hass.services.async_call("notify", target.split(".", 1)[1], {"title": str(action.get("title", "Argus"))[:128], "message": str(action.get("message", ""))[:2000]}, blocking=False)
                    elif action_type == "service":
                        domain, separator, service = str(action.get("service", "")).partition(".")
                        data = action.get("data", {})
                        if not separator or service not in allowed_services.get(domain, set()) or not isinstance(data, dict):
                            continue
                        await self.hass.services.async_call(domain, service, copy.deepcopy(data), blocking=False)
                    elif action_type == "trigger_alarm":
                        if event_type == "triggered" or self._alarm_state not in ARMED_STATES:
                            continue
                        self._triggered_by = f"Rule: {str(rule.get('name') or 'Local rule')}" + (f" (Sensor: {sensor_id})" if sensor_id else "")
                        await self._async_trigger()
                    else:
                        continue
                    await async_append_audit_log(self.hass, "automation_executed", f"{event_type}: {action_type}", user="Argus", metadata={"sensor_entity_id": sensor_id}, entry_id=self._config_entry.entry_id)
                except Exception:  # noqa: BLE001
                    _LOGGER.exception("Argus local automation failed")


    async def async_will_remove_from_hass(self) -> None:
        if self._unsub_sensors:
            self._unsub_sensors()
        if self._mqtt_unsub:
            self._mqtt_unsub()
        if self._unsub_schedule:
            self._unsub_schedule()
        self.hass.data.get(DOMAIN, {}).get(DATA_PANELS, {}).pop(
            self._config_entry.entry_id, None
        )
        self._cancel_timers()

    def _cancel_timers(self):
        self._arm_generation += 1
        for attr in (
            "_arming_listener", "_entry_listener", "_trigger_listener",
            "_confirmation_listener",
        ):
            lst = getattr(self, attr)
            if lst:
                lst()
                setattr(self, attr, None)
        self._arming_target = None
        self._arm_request = None
        self._confirmation_events.clear()

    async def _async_cancel_arming_request(self, reason: str, *, disarm: bool = False) -> None:
        had_request = self._arm_request is not None
        if not had_request and self._alarm_state != AlarmControlPanelState.ARMING:
            return
        self._cancel_timers()
        if disarm and (had_request or self._alarm_state == AlarmControlPanelState.ARMING):
            self._alarm_state = AlarmControlPanelState.DISARMED
            self.async_write_ha_state()
            await self._async_mqtt_publish()
            await self._async_persist_stable_state(reason)
        await async_append_audit_log(self.hass, "arming_cancelled", f"Armado cancelado: {reason}", user="Argus", metadata={"reason": reason}, entry_id=self._config_entry.entry_id)

    async def _async_persist_stable_state(self, source: str) -> None:
        """Record the state after a real transition, never during a timer."""
        await async_save_alarm_runtime_state(
            self.hass, self._config_entry.entry_id, self._alarm_state.value,
            source=source,
        )

    def _requires_immediate_trigger(self, entity_id: str) -> bool:
        """Critical life-safety devices always bypass intelligent confirmation."""
        state = self.hass.states.get(entity_id)
        device_class = str(state.attributes.get("device_class", "")).lower() if state else ""
        return device_class in {"smoke", "gas", "carbon_monoxide", "safety", "tamper"}

    def _request_intelligent_confirmation(self, entity_id: str) -> bool:
        """Collect corroborating intrusion signals without weakening life safety."""
        import time as _time

        policy = self._ui_config.get("intelligent_confirmation", {})
        if not policy.get("enabled") or self._requires_immediate_trigger(entity_id):
            return False
        try:
            window = max(3, min(120, int(policy.get("window_seconds", 15))))
            required = max(2, min(5, int(policy.get("required_signals", 2))))
        except (TypeError, ValueError):
            return False

        now = _time.monotonic()
        self._confirmation_events = {
            sensor: seen for sensor, seen in self._confirmation_events.items()
            if now - seen <= window
        }
        self._confirmation_events[entity_id] = now
        if len(self._confirmation_events) >= required:
            if self._confirmation_listener:
                self._confirmation_listener()
                self._confirmation_listener = None
            return False

        self.hass.async_create_task(async_append_audit_log(
            self.hass, "confirmation_pending",
            f"Esperando confirmación: {entity_id} ({len(self._confirmation_events)}/{required})",
            user="Argus",
            entry_id=self._config_entry.entry_id,
        ))
        if self._confirmation_listener:
            self._confirmation_listener()
        self._confirmation_listener = async_call_later(
            self.hass, window, self._async_finish_confirmation
        )
        return True

    @callback
    def _async_finish_confirmation(self, _now) -> None:
        """Close an unconfirmed incident; no stale event can trigger later."""
        self._confirmation_listener = None
        self._confirmation_events.clear()
        if self._alarm_state in ARMED_STATES:
            self._triggered_by = None

    # ── Sensor monitoring ───────────────────────────────────────────
    @callback
    def _async_sensor_changed(self, event):
        """React when a monitored sensor changes state."""
        new_state = event.data.get("new_state")
        entity_id = event.data.get("entity_id")

        if entity_id and self._arm_request:
            self.hass.async_create_task(self._async_recheck_arm_request())

        if new_state is None or new_state.state not in _INTRUSION_ACTIVE_STATES:
            return

        # Fire "sensor_opened" automations globally (before filtering by alarm state)
        self.hass.async_create_task(self._evaluate_automations("sensor_opened", sensor=entity_id))
        self.hass.bus.async_fire("argus_sensor_opened", {
            "entity_id": entity_id, "state": new_state.state, "alarm_entity_id": self.entity_id, "entry_id": self._config_entry.entry_id
        })

        # Process incident correlation
        from .core.incidents import IncidentEvent
        dev_cls = str(new_state.attributes.get("device_class", "")) if new_state else ""
        inc_event = IncidentEvent(sensor_id=entity_id, area_id="main_house", state_value=new_state.state, device_class=dev_cls)
        inc = self._incident_engine.process_sensor_event(inc_event, mode=str(self._alarm_state))

        if self._alarm_state not in ARMED_STATES:
            return

        active = self._sensors_for_state(self._alarm_state)
        if entity_id not in active:
            return

        _LOGGER.warning("Argus: Sensor %s tripped while %s", entity_id, self._alarm_state)
        self._triggered_by = entity_id
        # Guardar el modo activo antes del disparo para que _get_siren_entities
        # pueda resolver las sirenas correctas cuando el estado sea TRIGGERED
        self._triggered_mode = self._alarm_state.value.replace("armed_", "")

        mode_key = self._alarm_state.value.replace("armed_", "")
        # FIX-2b: leer desde __by_entity__ (misma prioridad que _sensors_for_state)
        _modes = self._ui_config.get("modes", {})
        _by_e  = _modes.get("__by_entity__", {})
        mode_cfg = (
            _by_e.get(self.entity_id, {}).get(mode_key)
            or _modes.get(mode_key)
            or {}
        )

        # Per-mode entry list or global entry list
        entry_list = mode_cfg.get("entry_sensors")
        if not isinstance(entry_list, list):
            entry_list = self._entry_sensors
        if not isinstance(entry_list, list):
            entry_list = []

        _raw_delay = mode_cfg.get("entry_delay", self._entry_delay)
        try:
            entry_delay = int(_raw_delay) if _raw_delay is not None else 0
        except (TypeError, ValueError):
            entry_delay = 0

        if entity_id in entry_list and entry_delay > 0:
            # Entry delay → PENDING
            self._alarm_state = AlarmControlPanelState.PENDING
            self.async_write_ha_state()
            if self._entry_listener:
                self._entry_listener()
            self._entry_listener = async_call_later(
                self.hass, entry_delay, self._async_trigger_now
            )
        elif self._request_intelligent_confirmation(entity_id):
            return
        else:
            self.hass.async_create_task(self._async_trigger())

    @callback
    def _async_trigger_now(self, _now):
        """Entry delay expired — trigger immediately."""
        if self._alarm_state == AlarmControlPanelState.PENDING:
            self.hass.async_create_task(self._async_trigger())

    async def _async_trigger(self):
        """Activate the alarm."""
        if self._alarm_state == AlarmControlPanelState.ARMING and self._arm_request:
            await self._async_cancel_arming_request("triggered", disarm=True)
        if not self._panic_active and self._alarm_state not in ARMED_STATES and self._alarm_state != AlarmControlPanelState.PENDING:
            return

        self._cancel_timers()
        
        # v0.9.33 Fix #1: si la alarma se dispara sin pasar por un sensor normal (ej. botón SOS manual),
        # _triggered_mode sería None y las sirenas nunca sonarían. Asignar un fallback si falta.
        if not self._triggered_mode and self._alarm_state in ARMED_STATES:
            self._triggered_mode = self._alarm_state.value.replace("armed_", "")
        elif not self._triggered_mode:
            self._triggered_mode = "away" # Fallback universal para pánico/SOS
            
        self._alarm_state = AlarmControlPanelState.TRIGGERED
        self.async_write_ha_state()
        _LOGGER.warning("Argus: ALARM TRIGGERED by %s", self._triggered_by)

        await self._async_siren(True)
        await self._async_mqtt_publish()
        self.hass.async_create_task(self._evaluate_automations("triggered", sensor=self._triggered_by))
        await self._async_sync_panels(AlarmControlPanelState.TRIGGERED)

        if self._panic_active:
            notif_targets = self._ui_config.get("notif_targets", [])
            emergency_number = self._ui_config.get("emergency_number", "911")
            loc = self._ui_config.get("home_name", "Mi Casa") or "Mi Casa"
            sos_title, sos_message, call_title = _SOS_TEXT[self._language()]
            sos_message = sos_message.format(home=loc)
            for target in notif_targets:
                try:
                    await self.hass.services.async_call(
                        "notify",
                        target,
                        {
                            "message": sos_message,
                            "title": sos_title,
                            "data": {
                                "push": {"sound": "alarm.caf", "badge": 1},
                                "priority": "high",
                                "ttl": 0,
                                "actions": [
                                    {
                                        "action": "URI",
                                        "title": call_title.format(number=emergency_number),
                                        "uri": f"tel:{emergency_number}",
                                    }
                                ],
                            },
                        },
                        blocking=False,
                    )
                except Exception as e:
                    _LOGGER.warning("Argus: SOS notification error for %s: %s", target, e)
        # Persistent notification in HA
        if self._panic_active:
            sos_title, sos_message, _ = _SOS_TEXT[self._language()]
            persistent_notification.async_create(
                self.hass,
                sos_message.format(home=self._ui_config.get("home_name") or self._name),
                title=f"🚨 {sos_title}",
                notification_id="argus_triggered",
            )
        else:
            persistent_notification.async_create(
                self.hass,
                f"⚠️ Sensor: **{self._triggered_by or 'desconocido'}**\n\nModo activo: `{self._alarm_state.value}`",
                title="🚨 ARGUS — ALARMA DISPARADA",
                notification_id="argus_triggered",
            )
        sensor_name = "desconocido"
        if self._triggered_by:
            state_obj = self.hass.states.get(self._triggered_by)
            if state_obj:
                sensor_name = state_obj.attributes.get("friendly_name", self._triggered_by)
            else:
                sensor_name = self._triggered_by
        
        mode_label = self._alarm_state.value.replace("armed_", "").capitalize()
        # If triggered by a rule, mention it
        trigger_detail = f"Sensor: {sensor_name} (Modo: {mode_label})"
        if "Regla" in str(self._triggered_by):
            trigger_detail = f"Disparado por {self._triggered_by} ({mode_label})"

        await async_append_audit_log(
            self.hass, "triggered",
            trigger_detail,
            user="Argus",
            entry_id=self._config_entry.entry_id,
        )

        await self._async_sync_panels(AlarmControlPanelState.TRIGGERED)
        await self._async_persist_stable_state("trigger")

        # An SOS is ended deliberately by the user.  It must never silently
        # disarm or return the system to normal because a timer expired.
        _tt = self._trigger_time if isinstance(self._trigger_time, int) else 0
        if _tt > 0 and not self._panic_active:
            self._trigger_listener = async_call_later(
                self.hass, _tt, self._async_reset_triggered
            )

    async def _async_sync_external_panels(self, action: str) -> None:
        """Trigger or disarm linked external alarm panels (like camera sirens)."""
        linked_panels = self._config_entry.options.get(CONF_LINKED_ALARM_PANELS, [])
        if not linked_panels:
            return
            
        service = "alarm_trigger" if action == "trigger" else "alarm_disarm"
        for panel in linked_panels:
            try:
                # Do not trigger ourselves to prevent loops
                if panel != self.entity_id:
                    await self.hass.services.async_call(
                        "alarm_control_panel",
                        service,
                        {"entity_id": panel},
                        blocking=False,
                    )
            except Exception as e:
                _LOGGER.warning("Argus: Failed to %s external panel %s: %s", service, panel, e)

    @callback
    def _async_reset_triggered(self, _now):
        """Auto-disarm after trigger_time expires."""
        # FIX v0.9.31: apagar sirenas primero, LUEGO limpiar estado
        async def _do_reset():
            await self._async_siren(False)
            self._triggered_mode = None
            self._alarm_state = AlarmControlPanelState.DISARMED
            self._triggered_by = None
            self.async_write_ha_state()
            await self._async_mqtt_publish()
            await self._async_persist_stable_state("trigger_timeout")
        self.hass.async_create_task(_do_reset())

    @callback
    def _async_finish_arming(self, _now) -> None:
        """Arming countdown finished — move to target armed state."""
        if self._arm_request and self._arming_target:
            self._alarm_state = self._arming_target
            self._arming_listener = None
            self.async_write_ha_state()
            self.hass.async_create_task(self._async_mqtt_publish())

    # ── Siren ───────────────────────────────────────────────────────
    def _get_siren_entities(self) -> list[str]:
        """Return list of siren entities from UI config or fallback to single entity.

        FIX (v0.9.30 Bug crítico): TRIGGERED y PENDING no están en ARMED_STATES,
        por lo que antes la sirena NUNCA se activaba al dispararse la alarma.
        Ahora resuelve el mode_key así:
          - ARMED_*   → del estado actual
          - TRIGGERED / PENDING → de _triggered_mode (guardado al momento del disparo)
          - Cualquier otro → sin modo, solo fallback global
        """
        modes = self._ui_config.get("modes", {})

        # SOS can have its own output profile, independent from the active
        # armed mode. This also makes panic useful while Argus is disarmed.
        if self._panic_active:
            panic_outputs = self._ui_config.get("panic_outputs", [])
            if isinstance(panic_outputs, list) and panic_outputs:
                return panic_outputs

        # Resolver mode_key según estado actual
        if self._alarm_state in ARMED_STATES:
            mode_key = self._alarm_state.value.replace("armed_", "")
        elif self._alarm_state in (
            AlarmControlPanelState.TRIGGERED,
            AlarmControlPanelState.PENDING,
        ):
            # Usar el modo que estaba activo antes del disparo
            mode_key = self._triggered_mode
        else:
            mode_key = None

        if mode_key:
            # Priority 1: per-entity config (canonical path written by JS panel)
            by_entity = modes.get("__by_entity__", {})
            pe_sirens = (
                by_entity.get(self.entity_id, {})
                .get(mode_key, {})
                .get("sirens", [])
            )
            if pe_sirens:
                return [entity for entity in pe_sirens if not entity.startswith("alarm_control_panel.")]

            # Priority 2: flat legacy config for the ACTIVE mode only
            flat_sirens = modes.get(mode_key, {}).get("sirens", [])
            if flat_sirens:
                return [entity for entity in flat_sirens if not entity.startswith("alarm_control_panel.")]

        # Priority 3: single siren from initial YAML config (global fallback)
        if self._siren_entity:
            return [self._siren_entity]
        return []

    async def _async_siren(self, activate: bool):
        """Activate or deactivate all configured siren entities.

        FIX (v0.9.30): usa homeassistant.turn_on/turn_off como servicio universal
        para cubrir plugs Tuya, Wi-Fi y cualquier entidad que no responda
        a su dominio nativo. Orden de intento:
          1. Dominio nativo (light con brightness, siren/switch/fan/input_boolean)
          2. Si falla → homeassistant.turn_on / homeassistant.turn_off (universal)
        """
        sirens = self._get_siren_entities()
        if not sirens:
            _LOGGER.warning("Argus: _async_siren(%s) — sin sirenas configuradas (estado=%s, modo=%s)",
                            activate, self._alarm_state, self._triggered_mode)
            return
        service = "turn_on" if activate else "turn_off"
        for entity_id in sirens:
            domain = entity_id.split(".")[0]
            _LOGGER.info("Argus: siren %s → %s (domain=%s)", entity_id, service, domain)
            try:
                if domain == "light":
                    svc_data = {"entity_id": entity_id}
                    if activate:
                        svc_data["brightness_pct"] = 100
                        mode_cfg = self._mode_config(self._triggered_mode) if self._triggered_mode else {}
                        settings = (mode_cfg.get("light_siren_settings") or {}).get(entity_id, {})
                        # Legacy global colour is retained as a safe fallback.
                        legacy_color = mode_cfg.get("light_color")
                        supported = (self.hass.states.get(entity_id).attributes.get("supported_color_modes", []) if self.hass.states.get(entity_id) else [])
                        rgb = settings.get("rgb_color")
                        hs = settings.get("hs_color")
                        if rgb and "rgb" in supported:
                            svc_data["rgb_color"] = rgb
                        elif hs and "hs" in supported:
                            svc_data["hs_color"] = hs
                        elif legacy_color:
                            svc_data["color_name"] = legacy_color
                        effects = (self.hass.states.get(entity_id).attributes.get("effect_list", []) if self.hass.states.get(entity_id) else [])
                        if settings.get("gentle_flash"):
                            effect = next((item for item in effects if str(item).lower() in {"flash", "slow flash", "slow_flash", "blink"}), None)
                            if effect:
                                svc_data["effect"] = effect
                    await self.hass.services.async_call(
                        "light",
                        "turn_on" if activate else "turn_off",
                        svc_data,
                        blocking=False,
                    )
                else:
                    # Intento 1: dominio nativo (switch, siren, fan, input_boolean…)
                    await self.hass.services.async_call(
                        domain, service, {"entity_id": entity_id}, blocking=False
                    )
            except Exception as e:  # noqa: BLE001
                # Intento 2: servicio universal homeassistant (cubre Tuya/Wi-Fi)
                _LOGGER.warning(
                    "Argus: native call failed for %s (%s), retrying via homeassistant.%s — %s",
                    entity_id, domain, service, e
                )
                try:
                    await self.hass.services.async_call(
                        "homeassistant", service, {"entity_id": entity_id}, blocking=False
                    )
                except Exception as e2:  # noqa: BLE001
                    _LOGGER.error("Argus: siren control failed for %s: %s", entity_id, e2)

    # ── MQTT ────────────────────────────────────────────────────────
    async def _async_setup_mqtt(self):
        """Subscribe to MQTT command topic."""
        if "mqtt" not in self.hass.config.components:
            _LOGGER.error("Argus: MQTT integration is not configured in Home Assistant. Please set up the MQTT integration first.")
            return

        if self._mqtt_unsub:
            try:
                self._mqtt_unsub()
            except Exception:  # noqa: BLE001
                pass
            self._mqtt_unsub = None

        try:
            from homeassistant.components import mqtt  # noqa: PLC0415
            self._mqtt_unsub = await mqtt.async_subscribe(
                self.hass, self._mqtt_topic_command, self._async_mqtt_message
            )
            _LOGGER.info("Argus: MQTT subscribed to %s", self._mqtt_topic_command)
        except Exception as e:  # noqa: BLE001
            _LOGGER.error("Argus: MQTT setup failed (broker may not be available or connected): %s", e)

    @callback
    def _async_mqtt_message(self, msg):
        cmd = ""
        code = None
        payload_str = str(msg.payload or "").strip()

        # Try to parse as JSON first
        try:
            payload = json.loads(payload_str)
            if isinstance(payload, dict):
                cmd = str(payload.get("command", "")).upper()
                code = payload.get("code")
            else:
                cmd = str(payload).upper()
        except (TypeError, ValueError, json.JSONDecodeError):
            # Fallback to raw string command
            cmd = payload_str.upper()

        dispatch = {
            MQTT_COMMAND_DISARM: self.async_alarm_disarm,
            MQTT_COMMAND_ARM_HOME: self.async_alarm_arm_home,
            MQTT_COMMAND_ARM_AWAY: self.async_alarm_arm_away,
            MQTT_COMMAND_ARM_NIGHT: self.async_alarm_arm_night,
            MQTT_COMMAND_ARM_VACATION: self.async_alarm_arm_vacation,
        }
        if cmd in dispatch:
            self.hass.async_create_task(dispatch[cmd](code=code))
        else:
            _LOGGER.warning("Argus: Unknown MQTT command: %s", cmd)

    async def _async_mqtt_publish(self):
        """Publish status to MQTT if enabled globally or for any mode."""
        # Ensure we don't spam if strictly disabled everywhere
        global_mqtt = self._get_mode_val(None, "mqtt_enabled", self._mqtt_enabled)
        any_mode_mqtt = any(self._get_mode_val(m, "mqtt_enabled", False) for m in ["home", "away", "night", "vacation"])
        
        if not global_mqtt and not any_mode_mqtt:
             return

        try:
            from homeassistant.components import mqtt  # noqa: PLC0415
            state_val = self._alarm_state.value if self._alarm_state else None
            if state_val:
                await mqtt.async_publish(
                    self.hass,
                    self._mqtt_topic_state,
                    state_val,
                    retain=True,
                )
        except Exception as e:  # noqa: BLE001
            _LOGGER.warning("Argus: MQTT publish failed: %s", e)

    # ── Arm / Disarm ───────────────────────────────────────────────
    def _matching_disarm_user(self, code):
        """Return the enabled disarm-capable user matching a personal PIN."""
        if not code:
            return None
        for user in self._ui_config.get("users", []):
            if not user.get("enabled", True) or not user.get("permissions", {}).get("disarm", False):
                continue
            for key in ("master_pin_hash", "pin", "access_pin_hash"):
                if user.get(key) and verify_pin(code, user[key]):
                    expiry = user.get("expiration_date")
                    if expiry:
                        try:
                            if datetime.now() > datetime.fromisoformat(expiry):
                                break
                        except (TypeError, ValueError):
                            break
                    return user
        return None

    def _validate_code(self, code) -> bool:
        """Validate global, guest, or an authorised user's personal PIN."""
        if self._code and verify_pin(code, self._code):
            return True
        # Check guest PIN
        adv = self._ui_config.get("advanced", {})
        if adv.get("guest_code_enabled") and adv.get("guest_code"):
            if verify_pin(code, adv["guest_code"]):
                return True
        return self._matching_disarm_user(code) is not None

    async def async_alarm_disarm(self, code=None) -> None:
        # Off cancels a pending request without a PIN; the alarm is not armed yet.
        if getattr(self, "_arm_request", None) and self._alarm_state in (AlarmControlPanelState.DISARMED, AlarmControlPanelState.ARMING):
            if not self._code:
                await self._async_cancel_arming_request("cancelled_from_off", disarm=True)
                return
        user_id = await self._get_context_user()
        limiter_key = f"{DOMAIN}_pin_limiter_{self._config_entry.entry_id}"
        limiter = self.hass.data.setdefault(limiter_key, PinAttemptLimiter())

        if limiter.is_blocked(user_id or "default"):
            _LOGGER.warning("Argus: Disarm rejected — too many failed PIN attempts")
            await async_append_audit_log(
                self.hass, "disarm_blocked", "Too many failed attempts", user=user_id, entry_id=self._config_entry.entry_id
            )
            return

        has_personal_pin = any(
            user.get("enabled", True)
            and user.get("permissions", {}).get("disarm", False)
            and (user.get("master_pin_hash") or user.get("pin") or user.get("access_pin_hash"))
            for user in self._ui_config.get("users", [])
        )
        if (self._code or has_personal_pin) and not self._validate_code(code):
            limiter.record_failure(user_id or "default")
            _LOGGER.warning("Argus: Disarm rejected — invalid or missing code")
            await async_append_audit_log(
                self.hass, "disarm_rejected", "Invalid or missing code", user=user_id, entry_id=self._config_entry.entry_id
            )
            return

        limiter.reset(user_id or "default")

        # Check Duress PIN (PIN de Coacción)
        adv = self._ui_config.get("advanced", {})
        duress_pin = adv.get("duress_pin")
        if code and duress_pin and verify_pin(code, duress_pin):
            _LOGGER.warning("ARGUS DURESS: Coercion PIN entered! Executing visual disarm and silent SOS panic.")
            await async_append_audit_log(
                self.hass, "duress_pin_triggered", "Coercion PIN entered", user=user_id, severity="critical", entry_id=self._config_entry.entry_id
            )
            self._cancel_timers()
            await self._async_siren(False)
            self._alarm_state = AlarmControlPanelState.DISARMED
            self.async_write_ha_state()
            await self._async_mqtt_publish()
            await self._async_persist_stable_state("disarm")
            self.hass.bus.async_fire("argus_state_changed", {
                "entity_id": self.entity_id, "state": "disarmed", "duress": True, "entry_id": self._config_entry.entry_id
            })
            self.hass.async_create_task(self.async_alarm_trigger())
            return

        # Find which user code matches
        caller_name = None
        if code:
            if verify_pin(code, self._code):
                caller_name = "Master Admin"
            else:
                if adv.get("guest_code_enabled") and adv.get("guest_code") and verify_pin(code, adv["guest_code"]):
                    caller_name = "Invitado"
                else:
                    matched_user = self._matching_disarm_user(code)
                    if matched_user:
                        caller_name = matched_user.get("name")

        if not caller_name:
            caller_name = user_id

        self._cancel_timers()
        await self._async_siren(False)
        persistent_notification.async_dismiss(self.hass, "argus_triggered")
        
        await self._async_sync_panels(AlarmControlPanelState.DISARMED)

        self._panic_active = False
        self._panic_previous_state = None
        self._triggered_mode = None
        self._arm_lock_until = 0.0
        self._alarm_state = AlarmControlPanelState.DISARMED
        self._triggered_by = None
        self.async_write_ha_state()
        await self._async_mqtt_publish()
        await self._async_persist_stable_state("disarm")
        self.hass.async_create_task(self._evaluate_automations("disarmed"))
        self.hass.bus.async_fire("argus_state_changed", {
            "entity_id": self.entity_id, "state": "disarmed", "user": caller_name, "entry_id": self._config_entry.entry_id
        })
        self.hass.bus.async_fire("argus_disarmed", {
            "entity_id": self.entity_id, "user": caller_name, "entry_id": self._config_entry.entry_id
        })
        await async_append_audit_log(self.hass, "disarmed", f"Sistema desarmado por {caller_name}", user=caller_name, entry_id=self._config_entry.entry_id)
        _LOGGER.info("Argus: Disarmed by %s", caller_name)
        await self._async_sync_panels(AlarmControlPanelState.DISARMED)

    async def _async_arm(self, target: AlarmControlPanelState, code=None, *, origin: str = "service") -> None:
        import time as _time
        restoring_panic = (
            self._panic_active and target == self._panic_previous_state
        )

        # ── ARM-LOCK v2 (Anti-Rebote HomeKit) ──────────────────────────
        # Cuando Argus está en Away/Night/Vacation y algo externo (HomeKit
        # sincronizando con Aqara) intenta forzarlo a Home dentro de los
        # primeros 120 segundos, rechazamos la orden y re-publicamos
        # nuestro estado real para corregir la UI de HomeKit.
        #
        # Reglas:
        #   - Solo bloquea transiciones HACIA Home desde Away/Night/Vacation
        #   - Permite cambiar entre Away ↔ Night ↔ Vacation libremente
        #   - Permite desarmar siempre (disarm no pasa por _async_arm)
        #   - No causa ningún congelamiento ni retraso
        if (
            target == AlarmControlPanelState.ARMED_HOME
            and self._alarm_state in ARMED_STATES
            and self._alarm_state != AlarmControlPanelState.ARMED_HOME
            and _time.monotonic() < self._arm_lock_until
        ):
            _LOGGER.warning(
                "Argus ARM-LOCK: Bloqueado intento externo de forzar Home. "
                "Estado actual protegido: %s", self._alarm_state
            )
            # Re-publicar estado real cambiando un atributo para forzar evento en HA
            # Esto evita que HomeKit asuma que falló y devuelva la UI a 'Desarmado'
            self._arm_lock_bounces = getattr(self, "_arm_lock_bounces", 0) + 1
            self.async_write_ha_state()
            return

        if self._alarm_state == target:
            return

        # STRICT AWAY/VACATION LOCK:
        # Prevent automations or accidental clicks from lowering the security state from Away/Vacation.
        # To exit Away/Vacation, the user MUST disarm first.
        if self._alarm_state in (AlarmControlPanelState.ARMED_AWAY, AlarmControlPanelState.ARMED_VACATION) and target in ARMED_STATES:
            _LOGGER.warning(
                "Argus: Blocked transition from %s to %s. System must be disarmed first.",
                self._alarm_state, target
            )
            return

        if self._code_arm_required and not restoring_panic and not self._validate_code(code):
            _LOGGER.warning("Argus: Arm rejected — invalid code")
            await async_append_audit_log(self.hass, "arm_rejected", f"Invalid code for {target.value}", user="Argus", entry_id=self._config_entry.entry_id)
            return

        # Every source shares the policy/bypass evaluator.
        _MODE_KEY_MAP = {
            AlarmControlPanelState.ARMED_HOME:     "home",
            AlarmControlPanelState.ARMED_AWAY:     "away",
            AlarmControlPanelState.ARMED_NIGHT:    "night",
            AlarmControlPanelState.ARMED_VACATION: "vacation",
        }
        mode_key = _MODE_KEY_MAP.get(target)

        policy = self._open_sensor_policy(mode_key) if mode_key else "allow"
        open_sensors = self._open_blocking_sensors(target) if mode_key else []
        if open_sensors and policy == "block" and not restoring_panic:
            open_names = [
                self.hass.states.get(eid).attributes.get("friendly_name", eid)
                if self.hass.states.get(eid) else eid
                for eid in open_sensors
            ]
            msg = f"Sensores abiertos: {', '.join(open_names)}"
            _LOGGER.warning("Argus: Arm rejected — %s", msg)
            await async_append_audit_log(
                self.hass, "arm_rejected", msg, user="Argus",
                entry_id=self._config_entry.entry_id,
            )
            persistent_notification.async_create(
                self.hass,
                title="🔒 Argus — No se pudo armar",
                message=(
                    "El sistema **no se armó** porque los siguientes "
                    "sensores están abiertos o activos:\n\n"
                    + "\n".join(f"• {n}" for n in open_names)
                    + "\n\nCiérralos o activa el bypass antes de armar."
                ),
                notification_id="argus_arm_blocked",
            )
            self.hass.bus.async_fire(
                "argus_arm_blocked",
                {
                    "entity_id": self.entity_id,
                    "mode": mode_key,
                    "open_sensors": open_names,
                },
            )
            return

        if self._alarm_state == AlarmControlPanelState.ARMING and self._arm_request:
            await self._async_cancel_arming_request("replaced_by_new_arm", disarm=True)

        self._cancel_timers()

        # Restoring an armed state from the Panic stop action must turn off the
        # selected sirens/lights, then preserve the user's prior armed mode.
        if self._panic_active:
            await self._async_siren(False)
            self._panic_active = False
            self._panic_previous_state = None
            self._triggered_by = None
            self._triggered_mode = None

        arming_delay = 0 if restoring_panic else self._get_mode_val(
            mode_key, "arming_time", self._arming_time
        )
        try:
            arming_delay = max(0, int(arming_delay or 0))
        except (TypeError, ValueError):
            arming_delay = 0

        if arming_delay or (open_sensors and policy == "pending"):
            self._arming_target = target
            self._arm_request = {"generation": self._arm_generation, "target": target, "origin": origin, "blocking_sensors": open_sensors, "wait_for_sensors": policy == "pending", "delay_elapsed": not bool(arming_delay)}
            # Publish the genuine transition. The Argus HomeKit adapter keeps
            # the requested Casa/Ausente/Noche target while CurrentState remains
            # disarmed, which is how Apple Home represents “Armando…”.
            self._alarm_state = AlarmControlPanelState.ARMING
            self.async_write_ha_state()
            await self._async_mqtt_publish()
            if open_sensors and policy == "pending":
                # Voice feedback is helpful, never a prerequisite for the
                # security state machine.  A temporary TTS/storage failure
                # must not leave the request half-created in ARMING.
                try:
                    await async_announce_arming_wait_update(
                        self.hass, self._config_entry, alarm_entity_id=self.entity_id,
                        target=target.value, previous_open=[], current_open=open_sensors,
                    )
                except Exception:  # noqa: BLE001
                    _LOGGER.exception("Argus initial arming voice update failed")
            if arming_delay:
                self._arming_listener = async_call_later(self.hass, arming_delay, lambda now, generation=self._arm_generation: self._async_finish_arming(now, generation))
            _LOGGER.info("Argus: HomeKit-safe arming request %s in %s seconds", target, arming_delay)
            return

        await self._async_complete_arming(target)

    @callback
    def _async_finish_arming(self, _now, generation: int | None = None) -> None:
        """Finish an arming countdown unless it was cancelled by disarm."""
        request = self._arm_request
        if request and generation is not None and request["generation"] != generation:
            return
        if request:
            request["delay_elapsed"] = True
            self.hass.async_create_task(self._async_recheck_arm_request())
            return
        target = self._arming_target
        self._arming_listener = None
        self._arming_target = None
        if target:
            self.hass.async_create_task(self._async_complete_arming(target))

    async def _async_recheck_arm_request(self) -> None:
        request = self._arm_request
        if not request:
            return
        previous_open = list(request.get("blocking_sensors") or [])
        open_sensors = self._open_blocking_sensors(request["target"]) if request["wait_for_sensors"] else []
        request["blocking_sensors"] = open_sensors
        self.async_write_ha_state()
        if request["wait_for_sensors"] and previous_open != open_sensors:
            await async_announce_arming_wait_update(
                self.hass, self._config_entry, alarm_entity_id=self.entity_id,
                target=request["target"].value, previous_open=previous_open, current_open=open_sensors,
            )
        if open_sensors or not request["delay_elapsed"]:
            return
        # A stale callback must never complete a replacement/cancelled request.
        if request is not self._arm_request or request["generation"] != self._arm_generation:
            return
        target = request["target"]
        self._arm_request = None
        self._arming_target = None
        await self._async_complete_arming(target)

    async def _async_complete_arming(self, target: AlarmControlPanelState) -> None:
        """Commit an armed state and publish the completed transition."""
        import time as _time
        self._alarm_state = target
        self.async_write_ha_state()

        # ARM-LOCK: protección de 30s contra rebote automático de HomeKit.
        # Solo bloquea intentos de forzar Home. Desarmar siempre funciona.
        if target != AlarmControlPanelState.ARMED_HOME:
            self._arm_lock_until = _time.monotonic() + 30.0
        else:
            self._arm_lock_until = 0.0

        await self._async_mqtt_publish()
        await self._async_persist_stable_state("arm")

        self.hass.async_create_task(self._evaluate_automations("armed", target=target))
        user_name = await self._get_context_user()
        self.hass.bus.async_fire("argus_state_changed", {
            "entity_id": self.entity_id, "state": target.value if hasattr(target, "value") else str(target), "user": user_name, "entry_id": self._config_entry.entry_id
        })
        self.hass.bus.async_fire("argus_armed", {
            "entity_id": self.entity_id, "mode": target.value if hasattr(target, "value") else str(target), "user": user_name, "entry_id": self._config_entry.entry_id
        })
        await async_append_audit_log(self.hass, "armed", f"Modo: {_MODE_LABELS.get(target.value if hasattr(target, 'value') else str(target), target)}", user=user_name, entry_id=self._config_entry.entry_id)
        _LOGGER.info("Argus: Armado → %s", target)
        await self._async_sync_panels(target)

    async def async_alarm_arm_home(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_HOME, code)

    async def async_alarm_arm_away(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_AWAY, code)

    async def async_alarm_arm_night(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_NIGHT, code)

    async def async_alarm_arm_vacation(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_VACATION, code)

    async def async_alarm_trigger(self, code=None) -> None:
        """Trigger the alarm from an explicit SOS/manual panic action."""
        if not self._panic_active:
            if self._alarm_state in ARMED_STATES or self._alarm_state == AlarmControlPanelState.DISARMED:
                self._panic_previous_state = self._alarm_state
            elif self._triggered_mode:
                mode_map = {
                    "home": AlarmControlPanelState.ARMED_HOME,
                    "away": AlarmControlPanelState.ARMED_AWAY,
                    "night": AlarmControlPanelState.ARMED_NIGHT,
                    "vacation": AlarmControlPanelState.ARMED_VACATION,
                }
                self._panic_previous_state = mode_map.get(self._triggered_mode, AlarmControlPanelState.DISARMED)
            else:
                self._panic_previous_state = AlarmControlPanelState.DISARMED
            self._panic_active = True
        self._triggered_by = "SOS / manual panic"
        self.hass.bus.async_fire("argus_panic_activated", {
            "entity_id": self.entity_id, "user": await self._get_context_user(), "entry_id": self._config_entry.entry_id
        })
        await self._async_trigger()

    async def async_stop_panic(self) -> None:
        """Stop an active SOS and restore the state captured before it started."""
        if not self._panic_active:
            return
        previous_state = self._panic_previous_state or AlarmControlPanelState.DISARMED
        self._cancel_timers()
        await self._async_siren(False)
        persistent_notification.async_dismiss(self.hass, "argus_triggered")
        
        await self._async_sync_panels(AlarmControlPanelState.DISARMED)

        self._panic_active = False
        self._panic_previous_state = None
        self._triggered_mode = None
        self._triggered_by = None
        self._alarm_state = previous_state
        self.async_write_ha_state()
        await self._async_mqtt_publish()
        await self._async_persist_stable_state("panic_restore")
        if previous_state in ARMED_STATES:
            self.hass.async_create_task(
                self._evaluate_automations("armed", target=previous_state)
            )
        await async_append_audit_log(
            self.hass,
            "panic_stopped",
            f"Pánico detenido; restaurado a {_MODE_LABELS.get(previous_state.value, previous_state.value)}",
            user=await self._get_context_user(),
            entry_id=self._config_entry.entry_id,
        )

    @callback
    def async_write_ha_state(self) -> None:
        """Write entity state and send a dispatcher signal."""
        super().async_write_ha_state()
        from homeassistant.helpers.dispatcher import async_dispatcher_send
        async_dispatcher_send(self.hass, f"{DOMAIN}_state_changed")
        if self.hass.is_running:
            self.hass.async_create_task(self._async_mqtt_publish())
    async def _async_sync_panels(self, state: AlarmControlPanelState) -> None:
        """Sincroniza el estado de Argus con los paneles esclavos configurados."""
        try:
            modes = self._ui_config.get("modes", {})
            by_entity = modes.get("__by_entity__", {}).get(self.entity_id, {})
            
            # Obtener todos los paneles sincronizados de todos los modos para el disarm/trigger
            all_sync_panels = set()
            for mode_key in ["home", "away", "night", "vacation"]:
                cfg = by_entity.get(mode_key) or modes.get(mode_key) or {}
                for p in (cfg.get("external_panels") or cfg.get("sync_panels") or []):
                    all_sync_panels.add(p)
            
            panels_to_sync = []
            service = "alarm_disarm"
            
            if state == AlarmControlPanelState.DISARMED:
                panels_to_sync = list(all_sync_panels)
                service = "alarm_disarm"
            elif state == AlarmControlPanelState.TRIGGERED:
                # Disparar solo los paneles sincronizados del modo actual, o todos si fue pánico
                if self._triggered_mode:
                    cfg = by_entity.get(self._triggered_mode) or modes.get(self._triggered_mode) or {}
                    panels_to_sync = cfg.get("external_panels") or cfg.get("sync_panels", [])
                else:
                    panels_to_sync = list(all_sync_panels)
                service = "alarm_trigger"
            elif state in ARMED_STATES:
                # Armar solo los paneles del modo correspondiente
                _MODE_MAP = {
                    AlarmControlPanelState.ARMED_HOME: ("home", "alarm_arm_home"),
                    AlarmControlPanelState.ARMED_AWAY: ("away", "alarm_arm_away"),
                    AlarmControlPanelState.ARMED_NIGHT: ("night", "alarm_arm_night"),
                    AlarmControlPanelState.ARMED_VACATION: ("vacation", "alarm_arm_vacation"),
                }
                mode_key, service = _MODE_MAP.get(state, ("away", "alarm_arm_away"))
                cfg = by_entity.get(mode_key) or modes.get(mode_key) or {}
                panels_to_sync = cfg.get("external_panels") or cfg.get("sync_panels", [])
            
            if not panels_to_sync:
                return

            for panel in panels_to_sync:
                if panel == self.entity_id or not str(panel).startswith("alarm_control_panel."):
                    continue
                try:
                    _LOGGER.info("Argus Sync Panel: %s -> %s", panel, service)
                    await self.hass.services.async_call(
                        "alarm_control_panel", service, {"entity_id": panel}, blocking=False
                    )
                except Exception as err:  # A third-party panel cannot interrupt Argus.
                    _LOGGER.warning("Argus: external panel %s rejected %s: %s", panel, service, err)
        except Exception as e:
            _LOGGER.error("Argus: Error sincronizando paneles esclavos: %s", e)
