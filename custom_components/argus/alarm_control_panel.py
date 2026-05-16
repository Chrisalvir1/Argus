"""Argus Alarm Control Panel — full logic with sensors, timers, siren and MQTT.

v0.9.30 backend fixes:
  - _get_siren_entities: Bug crítico — TRIGGERED no está en ARMED_STATES, por lo
    que la sirena NUNCA se activaba al dispararse la alarma. Fix: cuando el estado
    es TRIGGERED o PENDING se usa _triggered_mode (nuevo atributo que guarda el
    modo activo justo antes del disparo) para resolver las sirenas correctas.
  - _async_siren: usa homeassistant.turn_on/turn_off como servicio universal
    fallback para plugs Tuya/Matter/WiFi que a veces no responden a su dominio
    nativo. Orden: intenta dominio nativo, si falla usa homeassistant como
    fallback silencioso. Light mantiene brightness_pct=100.
  - Versión anterior: v0.9.29
"""
from __future__ import annotations

import logging

from homeassistant.components.alarm_control_panel import (
    AlarmControlPanelEntity,
    AlarmControlPanelEntityFeature,
    AlarmControlPanelState,
    CodeFormat,
)
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
from datetime import timedelta
from homeassistant.components.persistent_notification import async_create as pn_create
from homeassistant.helpers.restore_state import RestoreEntity

from .const import (
    DOMAIN,
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
    CONF_SIREN_ENTITY,
    CONF_MQTT_ENABLED,
    CONF_MQTT_TOPIC_STATE,
    CONF_MQTT_TOPIC_COMMAND,
    VERSION,
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
from .storage import async_load_ui_data, async_append_audit_log

_LOGGER = logging.getLogger(__name__)

_MODE_LABELS = {
    'armed_home': 'En Casa',
    'armed_away': 'Ausente',
    'armed_night': 'Noche',
    'armed_vacation': 'Vacaciones'
}

ARMED_STATES = {
    AlarmControlPanelState.ARMED_HOME,
    AlarmControlPanelState.ARMED_AWAY,
    AlarmControlPanelState.ARMED_NIGHT,
    AlarmControlPanelState.ARMED_VACATION,
}


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Argus alarm panel from a config entry."""
    async_add_entities([ArgusAlarmPanel(hass, config_entry)], update_before_add=True)



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
        self._attr_unique_id = config_entry.entry_id
        self._name = config_entry.data.get(CONF_NAME, DEFAULT_NAME)
        self._load_config()
        self._alarm_state = AlarmControlPanelState.DISARMED

        # Timers
        self._arming_listener = None
        self._entry_listener = None
        self._trigger_listener = None
        self._arming_target = None
        self._triggered_mode: str | None = None  # modo activo al momento del disparo

        # Tracking
        self._unsub_sensors = None
        self._triggered_by: str | None = None
        self._mqtt_unsub = None
        
        # List of armed states for internal logic
        self._armed_states_vals = [
            self._get_state_value(AlarmControlPanelState.ARMED_HOME),
            self._get_state_value(AlarmControlPanelState.ARMED_AWAY),
            self._get_state_value(AlarmControlPanelState.ARMED_NIGHT),
            self._get_state_value(AlarmControlPanelState.ARMED_VACATION),
        ]
        
        # UI/Mode config
        self._ui_config = {}

        # ARM-LOCK v2: timestamp (monotonic) until which forced-Home is blocked
        self._arm_lock_until: float = 0.0

        # DRILL MODE (Simulacro)
        self._drill_mode: bool = False
        self._drill_listener = None
        self._smart_arming_suggested = False
        self._unsub_smart_arming = None

    def _get_state_value(self, state: str | AlarmControlPanelState | None = None) -> str:
        """Helper to safely get the string value of a state (Enum or string)."""
        target = state if state is not None else self._alarm_state
        if hasattr(target, "value"):
            return str(target.value)
        return str(target)

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
        self._mqtt_topic_command = d.get(CONF_MQTT_TOPIC_COMMAND, DEFAULT_MQTT_TOPIC_COMMAND)

    # ── Properties ────────────────────────────────────────────────
    @property
    def name(self) -> str:
        return self._name

    @property
    def alarm_state(self) -> AlarmControlPanelState:
        """Return the state of the alarm."""
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
        attrs = {
            "config_entry_id": self._config_entry.entry_id,
            "internal_state": self._get_state_value(),
            "arm_lock_until": self._arm_lock_until,
        }
        if self._drill_mode:
            attrs["drill_mode"] = True
        if self._triggered_by:
            attrs["triggered_by"] = self._triggered_by
        
        # State-specific delays
        st = self._get_state_value()
        if st in ("arming", "pending"):
            attrs["delay"] = self._arming_time if st == "arming" else self._entry_delay
            
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
        mode_key = self._get_state_value(state).replace("armed_", "")

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

    # ── Lifecycle ──────────────────────────────────────────────────
    async def async_added_to_hass(self) -> None:
        await super().async_added_to_hass()

        # Load dynamic mode configuration from storage
        self._ui_config = await async_load_ui_data(self.hass)

        # Restore last stable state
        last = await self.async_get_last_state()
        if last is not None:
            try:
                # El metaclass maneja la llamada si es el fallback
                restored = AlarmControlPanelState(last.state)
                VALID_STATES = (
                    AlarmControlPanelState.DISARMED,
                    AlarmControlPanelState.ARMED_HOME,
                    AlarmControlPanelState.ARMED_AWAY,
                    AlarmControlPanelState.ARMED_NIGHT,
                    AlarmControlPanelState.ARMED_VACATION,
                    AlarmControlPanelState.ARMING,
                    AlarmControlPanelState.PENDING,
                    AlarmControlPanelState.TRIGGERED,
                )
                if restored in VALID_STATES:
                    self._alarm_state = restored
                else:
                    self._alarm_state = AlarmControlPanelState.DISARMED
            except (ValueError, TypeError):
                self._alarm_state = AlarmControlPanelState.DISARMED

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

        # Start smart arming AI check every 15 mins
        self._unsub_smart_arming = async_track_time_interval(
            self.hass, self._async_check_smart_arming, timedelta(minutes=15)
        )

    @callback
    def _async_check_smart_arming(self, _now=None):
        """AI Pattern check: suggest arming if house is empty and disarmed."""
        if self._alarm_state != AlarmControlPanelState.DISARMED:
            self._smart_arming_suggested = False
            return
            
        persons = self.hass.states.async_all("person")
        if not persons:
            return
            
        all_away = all(p.state not in ("home", "En casa") for p in persons)
        if all_away:
            if not getattr(self, "_smart_arming_suggested", False):
                self._smart_arming_suggested = True
                pn_create(
                    self.hass,
                    message="Todos parecen haber salido de casa, pero la alarma sigue desarmada. ¿Deseas armar Argus?",
                    title="💡 Sugerencia Inteligente Argus AI",
                    notification_id="argus_smart_arming",
                )
                self.hass.async_create_task(
                    async_append_audit_log(self.hass, "ai_suggestion", "Sugerencia de armado (casa vacía)", user="Argus AI")
                )
        else:
            self._smart_arming_suggested = False

    async def _async_reload_config(self) -> None:
        """Reload UI config and re-subscribe sensors after panel saves mode config."""
        self._ui_config = await async_load_ui_data(self.hass)
        # Re-subscribe sensors (picks up newly added/removed sensors from UI)
        if self._unsub_sensors:
            self._unsub_sensors()
            self._unsub_sensors = None
        all_sensors = self._all_sensors()
        if all_sensors:
            self._unsub_sensors = async_track_state_change_event(
                self.hass, all_sensors, self._async_sensor_changed
            )
        _LOGGER.info(
            "Argus: Config reloaded — monitoreando %d sensores: %s",
            len(all_sensors), all_sensors
        )

    async def _evaluate_automations(self, event_type: str, **kwargs) -> None:
        """Evaluate and execute matched automations based on event trigger."""
        automations = self._ui_config.get("automations", [])
        if not automations:
            return

        sensor_id = kwargs.get("sensor", "")
        sensor_name = "un sensor"
        if sensor_id:
            state_obj = self.hass.states.get(sensor_id)
            if state_obj:
                sensor_name = state_obj.attributes.get("friendly_name", sensor_id)
            else:
                sensor_name = sensor_id

        def _replace_wildcards(obj):
            if isinstance(obj, str):
                return obj.replace("{{sensor}}", sensor_name).replace("{{ sensor }}", sensor_name).replace("{sensor}", sensor_name).replace("{{entity_id}}", sensor_id).replace("{{ entity_id }}", sensor_id)
            elif isinstance(obj, dict):
                return {k: _replace_wildcards(v) for k, v in obj.items()}
            elif isinstance(obj, list):
                return [_replace_wildcards(v) for v in obj]
            return obj

        for rule in automations:
            if rule.get("event") != event_type:
                continue

            # Optional Condition checking
            # Examples: condition={"type": "mode", "value": "night"}
            cond = rule.get("condition")
            if cond:
                c_type = cond.get("type")
                if c_type == "mode" and self._get_state_value().replace("armed_", "") != cond.get("value"):
                    continue
                if c_type == "entity_id" and kwargs.get("sensor") != cond.get("value"):
                    continue
                
            # Execute Actions
            actions = rule.get("actions", [])
            for action_raw in actions:
                action = _replace_wildcards(action_raw)
                a_type = action.get("type")
                if a_type == "tts":
                    engine = action.get("engine", "tts.cloud_say")
                    device = action.get("device")
                    message = action.get("message", "Argus")
                    if device:
                        try:
                            await self.hass.services.async_call(
                                "tts", "speak",
                                {"entity_id": engine, "media_player_entity_id": device,
                                 "message": message, "language": "es"},
                                blocking=False,
                            )
                        except Exception as e:
                            _LOGGER.warning("Argus: TTS action error: %s", e)
                elif a_type == "turn_on":
                    entities = action.get("entities", [])
                    if entities:
                        for e_id in entities:
                            domain = e_id.split(".")[0]
                            try:
                                await self.hass.services.async_call(
                                    domain, "turn_on", {"entity_id": e_id}, blocking=False
                                )
                            except Exception as e:
                                _LOGGER.warning("Argus: turn_on action error for %s: %s", e_id, e)
                elif a_type == "turn_off":
                    entities = action.get("entities", [])
                    if entities:
                        for e_id in entities:
                            domain = e_id.split(".")[0]
                            try:
                                await self.hass.services.async_call(
                                    domain, "turn_off", {"entity_id": e_id}, blocking=False
                                )
                            except Exception as e:
                                _LOGGER.warning("Argus: turn_off action error for %s: %s", e_id, e)
                elif a_type == "analyze_camera":
                    camera_id = action.get("camera_id")
                    tts_device = action.get("tts_device")
                    if camera_id and tts_device:
                        async def _analyze_and_speak():
                            try:
                                # Call Gemini to analyze the camera stream
                                response = await self.hass.services.async_call(
                                    "google_generative_ai_conversation", "generate_content",
                                    {
                                        "image_entity_id": camera_id,
                                        "prompt": "Hay alguien en la imagen de la cámara de seguridad? Describe brevemente en español lo que ves y si parece una amenaza (ej. 'Se detectó una persona caminando en el jardín'). Si no hay nadie, di 'No se detecta movimiento inusual en la cámara'."
                                    },
                                    blocking=True,
                                    return_response=True
                                )
                                text = ""
                                if response and "text" in response:
                                    text = response["text"]
                                if text:
                                    await self.hass.services.async_call(
                                        "tts", "speak",
                                        {"entity_id": "tts.cloud_say", "media_player_entity_id": tts_device, "message": text, "language": "es"},
                                        blocking=False
                                    )
                                await async_append_audit_log(self.hass, "ai_camera", f"Análisis: {text[:50]}...", user="Argus AI")
                            except Exception as e:
                                _LOGGER.warning("Argus: Camera analysis error: %s", e)
                        self.hass.async_create_task(_analyze_and_speak())
                elif a_type == "trigger_alarm":
                    # Forzar evento de disparo
                    rule_name = rule.get("name") or "Regla Automática"
                    if self._alarm_state in ARMED_STATES or kwargs.get("sensor"):
                         self._triggered_by = f"Regla: {rule_name}"
                         if kwargs.get("sensor"):
                              self._triggered_by += f" (Sensor: {kwargs.get('sensor')})"
                         self.hass.async_create_task(self._async_trigger())
                
                # Log the automation action
                rule_name = rule.get("name") or "Argus"
                await async_append_audit_log(
                    self.hass, f"auto_{action.get('type')}", 
                    f"Ejecutando: {rule_name} (Acción: {action.get('type')})",
                    user="Argus"
                )


    async def async_will_remove_from_hass(self) -> None:
        if self._unsub_sensors:
            self._unsub_sensors()
        if self._mqtt_unsub:
            self._mqtt_unsub()
        if self._unsub_smart_arming:
            self._unsub_smart_arming()
        self._cancel_timers()

    def _cancel_timers(self):
        for attr in ("_arming_listener", "_entry_listener", "_trigger_listener", "_drill_listener"):
            lst = getattr(self, attr, None)
            if lst:
                lst()
                setattr(self, attr, None)

    # ── Sensor monitoring ───────────────────────────────────────────
    @callback
    def _async_sensor_changed(self, event):
        """React when a monitored sensor changes state."""
        new_state = event.data.get("new_state")
        entity_id = event.data.get("entity_id")

        if new_state is None:
            return
        # Accept both binary_sensor ON and cover/lock open/unlocked states
        OPEN_TRIGGER_STATES = {"on", "open", "unlocked", "detected", "motion"}
        if new_state.state not in OPEN_TRIGGER_STATES:
            return

        # Fire "sensor_opened" automations globally (before filtering by alarm state)
        self.hass.async_create_task(self._evaluate_automations("sensor_opened", sensor=entity_id))

        if self._alarm_state not in ARMED_STATES:
            return

        active = self._sensors_for_state(self._alarm_state)
        if entity_id not in active:
            return

        _LOGGER.warning("Argus: Sensor %s tripped while %s", entity_id, self._alarm_state)
        self._triggered_by = entity_id
        # Guardar el modo activo antes del disparo para que _get_siren_entities
        # pueda resolver las sirenas correctas cuando el estado sea TRIGGERED
        self._triggered_mode = self._get_state_value().replace("armed_", "")

        mode_key = self._get_state_value().replace("armed_", "")
        # FIX-2b: leer desde __by_entity__ (misma prioridad que _sensors_for_state)
        _modes = self._ui_config.get("modes", {})
        _by_e  = _modes.get("__by_entity__", {})
        mode_cfg = (
            _by_e.get(self.entity_id, {}).get(mode_key)
            or _modes.get(mode_key)
            or {}
        )

        # Per-mode entry list or global entry list
        entry_list  = mode_cfg.get("entry_sensors", self._entry_sensors)
        _raw_delay  = mode_cfg.get("entry_delay", self._entry_delay)
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
        else:
            self.hass.async_create_task(self._async_trigger())

    @callback
    def _async_trigger_now(self, _now):
        """Entry delay expired — trigger immediately."""
        if self._alarm_state == AlarmControlPanelState.PENDING:
            self.hass.async_create_task(self._async_trigger())

    async def _async_trigger(self):
        """Activate the alarm (or drill if _drill_mode is True)."""
        self._cancel_timers()

        # v0.9.33 Fix #1: si la alarma se dispara sin pasar por un sensor normal (ej. botón SOS manual),
        # _triggered_mode sería None y las sirenas nunca sonarían. Asignar un fallback si falta.
        if not self._triggered_mode and self._alarm_state in ARMED_STATES:
            self._triggered_mode = self._get_state_value().replace("armed_", "")
        elif not self._triggered_mode:
            self._triggered_mode = "away"  # Fallback universal para pánico/SOS

        self._alarm_state = AlarmControlPanelState.TRIGGERED
        self.async_write_ha_state()

        # ── DRILL MODE — sirena SÍ, notificaciones NO, log marcado como simulacro ──
        if self._drill_mode:
            _LOGGER.info("Argus: [SIMULACRO] disparado por %s", self._triggered_by)
            await self._async_siren(True)
            await self._async_mqtt_publish()

            sensor_name = "desconocido"
            if self._triggered_by:
                state_obj = self.hass.states.get(self._triggered_by)
                sensor_name = state_obj.attributes.get("friendly_name", self._triggered_by) if state_obj else self._triggered_by

            await async_append_audit_log(
                self.hass, "drill",
                f"[SIMULACRO] Sensor: {sensor_name}",
                user="Argus"
            )

            # Auto-reset simulacro tras 60 s (o trigger_time si es menor)
            _tt = self._trigger_time if isinstance(self._trigger_time, int) and self._trigger_time > 0 else 60
            _drill_timeout = min(_tt, 120)  # máximo 2 min en simulacro
            self._trigger_listener = async_call_later(
                self.hass, _drill_timeout, self._async_reset_drill
            )
            return
        # ── FIN DRILL MODE ──────────────────────────────────────────────────────────

        _LOGGER.warning("Argus: ALARM TRIGGERED by %s", self._triggered_by)
        await self._async_siren(True)
        await self._async_mqtt_publish()
        self.hass.async_create_task(self._evaluate_automations("triggered", sensor=self._triggered_by))
        # Persistent notification in HA
        pn_create(
            self.hass,
            message=f"\u26a0\ufe0f Sensor: **{self._triggered_by or 'desconocido'}**\n\nModo activo: `{self._get_state_value()}`",
            title="\U0001f6a8 Argus \u2014 Alarma Activada",
            notification_id="argus_triggered",
        )
        sensor_name = "desconocido"
        if self._triggered_by:
            state_obj = self.hass.states.get(self._triggered_by)
            if state_obj:
                sensor_name = state_obj.attributes.get("friendly_name", self._triggered_by)
            else:
                sensor_name = self._triggered_by

        mode_label = (self._triggered_mode or self._get_state_value().replace("armed_", "")).capitalize()
        trigger_detail = f"Sensor: {sensor_name} (Modo: {mode_label})"
        if self._triggered_by and "Regla" in str(self._triggered_by):
            trigger_detail = f"Disparado por {self._triggered_by} ({mode_label})"

        await async_append_audit_log(
            self.hass, "triggered",
            trigger_detail,
            user="Argus"
        )

        # Auto-reset after trigger_time
        _tt = self._trigger_time if isinstance(self._trigger_time, int) else 0
        if _tt > 0:
            self._trigger_listener = async_call_later(
                self.hass, _tt, self._async_reset_triggered
            )

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
        self.hass.async_create_task(_do_reset())

    @callback
    def _async_reset_drill(self, _now):
        """Auto-reset after drill (simulacro) ends — restores previous state."""
        async def _do_drill_reset():
            await self._async_siren(False)
            # Restaurar el estado que tenía ANTES del simulacro
            prev = getattr(self, "_drill_prev_state", AlarmControlPanelState.DISARMED)
            self._alarm_state = prev
            self._drill_mode = False
            self._drill_listener = None
            self._triggered_mode = None
            self._triggered_by = None
            self._drill_prev_state = None
            self.async_write_ha_state()
            await self._async_mqtt_publish()
            await async_append_audit_log(
                self.hass, "drill",
                f"[SIMULACRO] Finalizado — sistema restaurado a {self._get_state_value(prev)}",
                user="Argus"
            )
            _LOGGER.info("Argus: [SIMULACRO] finalizado. Estado restaurado: %s", prev)
        self.hass.async_create_task(_do_drill_reset())

    @callback
    def _async_finish_arming(self, _now):
        """Arming countdown finished — move to target armed state."""
        if self._alarm_state == AlarmControlPanelState.ARMING and self._arming_target:
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

        # Resolver mode_key según estado actual
        if self._alarm_state in ARMED_STATES:
            mode_key = self._get_state_value().replace("armed_", "")
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
                return pe_sirens

            # Priority 2: flat legacy config for the ACTIVE mode only
            flat_sirens = modes.get(mode_key, {}).get("sirens", [])
            if flat_sirens:
                return flat_sirens

        # Priority 3: single siren from initial YAML config (global fallback)
        if self._siren_entity:
            return [self._siren_entity]
        return []

    async def _async_siren(self, activate: bool):
        """Activate or deactivate all configured siren entities.

        FIX (v0.9.30): usa homeassistant.turn_on/turn_off como servicio universal
        para cubrir plugs Tuya, Matter, WiFi y cualquier entidad que no responda
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
                # Intento 2: servicio universal homeassistant (cubre Tuya/Matter/WiFi)
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
        try:
            from homeassistant.components import mqtt  # noqa: PLC0415
            self._mqtt_unsub = await mqtt.async_subscribe(
                self.hass, self._mqtt_topic_command, self._async_mqtt_message
            )
            _LOGGER.info("Argus: MQTT subscribed to %s", self._mqtt_topic_command)
        except Exception as e:  # noqa: BLE001
            _LOGGER.warning("Argus: MQTT setup failed: %s", e)

    @callback
    def _async_mqtt_message(self, msg):
        cmd = msg.payload.strip().upper()
        dispatch = {
            MQTT_COMMAND_DISARM: self.async_alarm_disarm,
            MQTT_COMMAND_ARM_HOME: self.async_alarm_arm_home,
            MQTT_COMMAND_ARM_AWAY: self.async_alarm_arm_away,
            MQTT_COMMAND_ARM_NIGHT: self.async_alarm_arm_night,
            MQTT_COMMAND_ARM_VACATION: self.async_alarm_arm_vacation,
        }
        if cmd in dispatch:
            self.hass.async_create_task(dispatch[cmd]())
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
            await mqtt.async_publish(
                self.hass,
                self._mqtt_topic_state,
                self._get_state_value(),
                retain=True,
            )
        except Exception as e:  # noqa: BLE001
            _LOGGER.warning("Argus: MQTT publish failed: %s", e)

    # ── Arm / Disarm ───────────────────────────────────────────────
    def _validate_code(self, code) -> bool:
        """Validate code against main PIN and optional guest PIN."""
        if self._code is None:
            return True
        if str(code) == str(self._code):
            return True
        # Check guest PIN
        adv = self._ui_config.get("advanced", {})
        if adv.get("guest_code_enabled") and adv.get("guest_code"):
            if str(code) == str(adv["guest_code"]):
                return True
        return False

    async def async_alarm_disarm(self, code=None) -> None:
        # Trusted callers (HomeKit, Alexa, automaciones, MQTT) NO envían código → permitir.
        # FIX: Validar que no sea un string vacío si el PIN está configurado (evita bypass accidental)
        if self._code and code is not None and code != "" and not self._validate_code(code):
            _LOGGER.warning("Argus: Disarm rejected — invalid code")
            await async_append_audit_log(self.hass, "disarm_rejected", "Invalid code", user="Argus")
            return

        self._cancel_timers()
        await self._async_siren(False)
        self._triggered_mode = None
        self._arm_lock_until = 0.0
        self._alarm_state = AlarmControlPanelState.DISARMED
        self._triggered_by = None
        self.async_write_ha_state()
        
        # secondary tasks
        self.hass.async_create_task(self._async_mqtt_publish())
        self.hass.async_create_task(self._evaluate_automations("disarmed"))
        self.hass.async_create_task(async_append_audit_log(self.hass, "disarmed", "Sistema desarmado", user=await self._get_context_user()))
        _LOGGER.info("Argus: Disarmed")

    async def _async_arm(self, target: AlarmControlPanelState, code=None) -> None:
        """Internal logic to transition to an armed state."""
        import time as _time
        target_val = self._get_state_value(target)
        current_val = self._get_state_value()
        
        _LOGGER.info("Argus: Arm request -> %s (current: %s)", target_val, current_val)

        # 1. Block if triggered
        if current_val == self._get_state_value(AlarmControlPanelState.TRIGGERED):
            _LOGGER.warning("Argus: Cannot arm while triggered")
            return

        # 2. Skip if already in state
        if current_val == target_val:
            return

        # 3. Simple execution
        _LOGGER.info("Argus: Executing arming to %s", target_val)
        self._cancel_timers()
        self._alarm_state = target
        self.async_write_ha_state()

        # ARM-LOCK (simplified to 10s for testing)
        self._arm_lock_until = _time.monotonic() + 10.0 if target_val != "armed_home" else 0.0

        self.hass.async_create_task(self._async_mqtt_publish())
        self.hass.async_create_task(self._evaluate_automations("armed", target=target))
        self.hass.async_create_task(async_append_audit_log(self.hass, "armed", f"Modo: {target_val}", user=await self._get_context_user()))

    async def async_alarm_arm_home(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_HOME, code)

    async def async_alarm_arm_away(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_AWAY, code)

    async def async_alarm_arm_night(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_NIGHT, code)

    async def async_alarm_arm_vacation(self, code=None) -> None:
        await self._async_arm(AlarmControlPanelState.ARMED_VACATION, code)

    async def async_alarm_trigger(self, code=None) -> None:
        await self._async_trigger()
