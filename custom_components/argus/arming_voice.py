"""Dynamic TTS and event payloads for Argus arming and alarm events."""
from __future__ import annotations
import logging
import asyncio
from homeassistant.components import persistent_notification
from homeassistant.helpers import device_registry as dr, entity_registry as er
from .const import *
from .storage import async_load_ui_data
from .i18n import translate

_LOGGER = logging.getLogger(__name__)
_PLAYER_LOCKS: dict[str, asyncio.Lock] = {}

async def _get_language(hass, config_entry):
    ui_data = await async_load_ui_data(hass, config_entry.entry_id)
    lang = str(ui_data.get("language") or "").split("-")[0].split("_")[0].lower()
    if lang in {"es", "en"}:
        return lang
    if lang and lang != "auto":
        return "en"

    ha_lang = str(getattr(hass.config, "language", "") or "").split("-")[0].split("_")[0].lower()
    if ha_lang.startswith("es"):
        return "es"
    if ha_lang.startswith("en"):
        return "en"
    return "en" if ha_lang else "es"

def _options(hass, entry):
    merged = dict(getattr(entry, "data", {}) or {})
    merged.update(getattr(entry, "options", {}) or {})
    merged.update(hass.data.get(DOMAIN, {}).get("arming_voice_yaml", {}))
    # The Argus panel is the single editable source after importing legacy
    # Options/YAML values; these values must win at runtime too.
    merged.update(hass.data.get(DOMAIN, {}).get("arming_voice_ui", {}).get(entry.entry_id, {}))
    return merged

def _sensor_identity(hass, entity_id):
    state = hass.states.get(entity_id)
    entry = er.async_get(hass).async_get(entity_id)
    device = dr.async_get(hass).async_get(entry.device_id) if entry and entry.device_id else None
    name = (device.name_by_user or device.name) if device else None
    if not name and entry: name = entry.name
    if not name and state: name = state.attributes.get("friendly_name")
    name = str(name or entity_id).strip()
    parts = name.split()
    if len(parts) > 1 and parts[0].casefold() == parts[1].casefold(): name = ' '.join(parts[1:])
    return {
        "entity_id": entity_id, "name": name, "state": state.state if state else "unavailable",
        "unique_id": entry.unique_id if entry else None, "device_id": entry.device_id if entry else None,
        "identifiers": sorted(f"{a}:{b}" for a,b in (device.identifiers if device else set())),
        "connections": sorted(f"{a}:{b}" for a,b in (device.connections if device else set()))
    }

def _count_labels(lang, zones, sensors):
    """Build spoken counts with correct singular/plural wording."""
    if lang == "es":
        return {
            "zone_count_label": f"{zones} {'zona' if zones == 1 else 'zonas'}",
            "sensor_count_label": f"{sensors} {'sensor' if sensors == 1 else 'sensores'}",
            "sensor_open_agreement": "abierto" if sensors == 1 else "abiertos",
        }
    return {
        "zone_count_label": f"{zones} {'zone' if zones == 1 else 'zones'}",
        "sensor_count_label": f"{sensors} {'sensor' if sensors == 1 else 'sensors'}",
    }

def _join_spoken_list(items, lang):
    """Join spoken names with a natural conjunction before the final item."""
    items = [str(item) for item in items if item]
    if len(items) < 2:
        return items[0] if items else ""
    conjunction = "y" if lang == "es" else "and"
    if len(items) == 2:
        return f"{items[0]} {conjunction} {items[1]}"
    return f"{', '.join(items[:-1])} {conjunction} {items[-1]}"

def _has_voice_placeholder(template, *names):
    """Return whether a custom phrase explicitly inserts any dynamic value."""
    template = str(template or "")
    return any("{" + name + "}" in template for name in names)

def _append_voice_sentence(message, sentence):
    """Append an automatic spoken detail without breaking custom punctuation."""
    message = str(message or "").strip()
    sentence = str(sentence or "").strip()
    if not sentence:
        return message
    if not message:
        return sentence
    if message.endswith((".", "!", "?", "…")):
        return f"{message} {sentence}"
    return f"{message}. {sentence}"

def _auto_open_summary(lang, zone_count, sensor_count, names, *, remaining=False):
    """Describe the open sensors assigned to the selected mode in plain speech."""
    if not names:
        return ""
    labels = _count_labels(lang, zone_count, sensor_count)
    joined = _join_spoken_list(names, lang)
    if lang == "es":
        intro = "Todavía hay" if remaining else "Hay"
        return f"{intro} {labels['zone_count_label']} con {labels['sensor_count_label']} {labels['sensor_open_agreement']}: {joined}."
    intro = "There are still" if remaining else "There are"
    return f"{intro} {labels['zone_count_label']} with {labels['sensor_count_label']} open: {joined}."

def _format_voice_template(template, values):
    if isinstance(template, str) and "{" in template:
        try:
            class _SafeValues(dict):
                def __missing__(self, key): return "{" + key + "}"
            return template.format_map(_SafeValues(values))
        except Exception:
            return template
    return template

async def _apply_message_rule(hass, entry, key, message, options, lang, *, mode='', alarm_entity_id='', closed=(), opened=(), event_sensor=None):
    ui = await async_load_ui_data(hass, entry.entry_id)
    rule = ui.get('voice_message_rules', {}).get(key)
    if rule is None:
        return message
    from .voice_message_rules import build_rule_message
    mode = str(mode or '').replace('armed_', '')
    modes = ui.get('modes', {})
    scoped = modes.get('__by_entity__', {}).get(alarm_entity_id, modes)
    cfg = scoped.get(mode, {})
    eligible = None
    if 'sensors' in cfg:
        excluded = set(cfg.get('bypassed_sensors', cfg.get('bypassedSensors', [])))
        eligible = set(cfg.get('sensors', [])) - excluded
    elif f'sensors_{mode}' in options:
        eligible = set(options.get(f'sensors_{mode}', []) or [])
    zones = ui.get('zones', []) if ui.get('zones_enabled', True) else []
    if not zones and rule.get('zone_ids') is None:
        if eligible is None:
            eligible = set(options.get(f'sensors_{mode}', []) or []) if mode else set()
        zones = [{'id': '__mode_sensors__', 'area': '', 'modes': [mode], 'entity_ids': sorted(eligible)}]
    entities = {entity_id: hass.states.get(entity_id) for zone in zones for entity_id in zone.get('entity_ids', [])}
    # Structured edits are plain text; old templates remain on the legacy path.
    result = build_rule_message(options.get(key, ''), rule, zones, entities, mode=mode,
                                eligible=eligible, closed=closed, opened=opened, lang=lang)
    if mode in {'home', 'away', 'night'}:
        result = _append_voice_sentence(result, ('Modo: ' if lang == 'es' else 'Mode: ') + translate(lang, 'armed_' + mode))
    if event_sensor:
        result = _append_voice_sentence(result, ('Sensor que activó la alarma: ' if lang == 'es' else 'Alarm trigger sensor: ') + event_sensor)
    return result

async def _async_speak(hass, options, message, lang):
  if not options.get(CONF_ARMING_VOICE_ENABLED, False): return
  tts = str(options.get(CONF_ARMING_VOICE_TTS, "") or "")
  players = options.get(CONF_ARMING_VOICE_PLAYERS, [])
  if isinstance(players, str): players = [players]
  players = [player for player in players if player][:5]
  if not message or not message.strip(" `´'\".,!?:;-"): return
  if not tts or not players:
      _LOGGER.error("Argus: voice announcements enabled but incomplete (tts=%r, players=%r). Announcement skipped: %s", tts or None, players or None, message)
      persistent_notification.async_create(
          hass,
          translate(lang, "tts_error_incomplete_body"),
          title=translate(lang, "tts_error_incomplete_title"),
          notification_id="argus_voice_config_incomplete"
      )
      return
  for player in dict.fromkeys(players):
      async def deliver(target=player, speak_tts=tts, speak_message=message, speak_lang=lang):
          try:
              lock = _PLAYER_LOCKS.setdefault(target, asyncio.Lock())
              async with lock:
                  await asyncio.wait_for(
                      hass.services.async_call(
                          "tts", "speak",
                          {"entity_id": speak_tts, "media_player_entity_id": target, "message": speak_message, "cache": True},
                          blocking=True,
                      ),
                      # Some TTS engines take several seconds to synthesize and
                      # hand off audio. A short timeout cancels synthesis and
                      # leaves the speaker playing a clipped announcement.
                      timeout=15.0,
                  )
          except asyncio.TimeoutError:
              _LOGGER.warning("Argus voice announcement timed out for %s", target)
          except Exception as err:  # noqa: BLE001 — voice must not interrupt alarm state transitions.
              _LOGGER.warning("Argus could not announce on %s: %s", target, err)
              persistent_notification.async_create(
                  hass,
                  translate(speak_lang, "tts_error_play_body", player=target),
                  title=translate(speak_lang, "tts_error_play_title"),
                  notification_id=f"argus_voice_error_{target.replace('.', '_')}"
              )
      create_task = getattr(hass, "async_create_task", None)
      if callable(create_task):
          create_task(deliver())
      else:
          await deliver()

async def async_announce_arming_wait_update(hass, config_entry, *, alarm_entity_id, target, previous_open, current_open, committed=False):
  previous = list(dict.fromkeys(previous_open))
  current = list(dict.fromkeys(current_open))
  if previous == current and not committed: return
  lang = await _get_language(hass, config_entry)
  ui_data = await async_load_ui_data(hass, config_entry.entry_id)
  zones = ui_data.get("zones", [])
  mode_key = {"armed_home": "home", "armed_away": "away", "armed_night": "night"}.get(target, target)
  zone_by_sensor = {
      entity_id: zone for zone in zones
      if zone.get("enabled", True) and mode_key in zone.get("modes", [])
      for entity_id in zone.get("entity_ids", [])
  }
  def with_zone(entity_id, *, status="pending"):
      info = _sensor_identity(hass, entity_id)
      zone = zone_by_sensor.get(entity_id)
      if zone:
          info["zone_number"] = zone.get("number")
          info["area"] = zone.get("area", "")
          area = str(zone.get("area") or "").strip()
          if lang == "es":
              prefix = f"Zona de {area}" if area else "Zona sin área"
              state_text = {"pending": "sigue abierto", "closed": "se cerró", "opened": "se abrió"}[status]
              info["spoken_name"] = f"{prefix}, sensor {info['name']} {state_text}"
          elif lang == "en":
              prefix = f"Zone {area}" if area else "Zone without an area"
              state_text = {"pending": "still open", "closed": "closed", "opened": "opened"}[status]
              info["spoken_name"] = f"{prefix}, sensor {info['name']} {state_text}"
          else:
              info["spoken_name"] = f"{area or info['name']}, {info['name']}"
      else:
          info["spoken_name"] = info["name"]
      return info
  current_info = [with_zone(e, status="pending") for e in current]
  prev_set, cur_set = set(previous), set(current)
  closed = [with_zone(e, status="closed") for e in previous if e not in cur_set]
  opened = [with_zone(e, status="opened") for e in current if e not in prev_set]
  names = [i["spoken_name"] for i in current_info]
  mode = translate(lang, target)
  
  values = {
      "count": len(current), "total": len(prev_set | cur_set), "sensors": _join_spoken_list(names, lang),
      "closed": _join_spoken_list([i["spoken_name"] for i in closed], lang),
      "opened": _join_spoken_list([i["spoken_name"] for i in opened], lang),
      "mode": mode, "home": config_entry.title,
        "zone_count": len({i.get("zone_number") or i["entity_id"] for i in current_info}),
      **_count_labels(lang, len({i.get("zone_number") or i["entity_id"] for i in current_info}), len(current)),
  }
  options = _options(hass, config_entry)
  
  if committed:
      message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_ARMED, "msg_armed"
  elif not current:
      message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_COMPLETE, "msg_complete"
  # A transition must always say what closed as well as what remains.  The
  # former "last" branch hid the close event whenever exactly one sensor was
  # left, which made the voice flow look stalled even while it was progressing.
  elif closed and len(current) == 1:
      message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_LAST, "msg_last"
  elif closed:
      message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_REMAINING, "msg_remaining"
  elif len(current) == 1 and previous:
      message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_LAST, "msg_last"
  else:
      message_key, translation_key = CONF_ARMING_VOICE_MESSAGE_START, "msg_start"
  custom_template = options.get(message_key)
  template = custom_template or translate(lang, translation_key)
  
  message = _format_voice_template(template, values)
  if custom_template:
      if message_key == CONF_ARMING_VOICE_MESSAGE_START and current and not _has_voice_placeholder(custom_template, "sensors"):
          message = _append_voice_sentence(message, _auto_open_summary(lang, values["zone_count"], len(current), names))
      elif message_key == CONF_ARMING_VOICE_MESSAGE_REMAINING:
          if closed and not _has_voice_placeholder(custom_template, "closed"):
              message = _append_voice_sentence(message, _join_spoken_list([item["spoken_name"] for item in closed], lang))
          if current and not _has_voice_placeholder(custom_template, "sensors"):
              message = _append_voice_sentence(message, _auto_open_summary(lang, values["zone_count"], len(current), names, remaining=True))
      elif translation_key == "msg_last":
          if closed and not _has_voice_placeholder(custom_template, "closed"):
              message = _append_voice_sentence(message, _join_spoken_list([item["spoken_name"] for item in closed], lang))
          if current and not _has_voice_placeholder(custom_template, "sensors"):
              message = _append_voice_sentence(message, _auto_open_summary(lang, values["zone_count"], len(current), names, remaining=True))

  message = await _apply_message_rule(hass, config_entry, message_key, message, options, lang, mode=target, alarm_entity_id=alarm_entity_id, closed=[i["entity_id"] for i in closed], opened=[i["entity_id"] for i in opened])
  hass.bus.async_fire("argus_arming_wait_update", {
      "entry_id": config_entry.entry_id, "alarm_entity_id": alarm_entity_id, "mode": target, "mode_name": mode,
      "open_count": len(current), "open_sensors": current_info, "open_sensor_names": names,
      "recently_closed": closed, "recently_opened": opened, "all_closed": not current, "message": message
  })
  # Speak the all-closed transition too. Previously the event and message
  # existed, but this guard silently dropped it before the armed announcement.
  if current or committed or (previous and not current):
      await _async_speak(hass, options, message, lang)

async def async_announce_arming_cancelled(hass, config_entry, *, alarm_entity_id, target, source):
  lang = await _get_language(hass, config_entry)
  options = _options(hass, config_entry)
  mode = translate(lang, target)
  
  template = options.get(CONF_ARMING_VOICE_MESSAGE_CANCELLED)
  if template:
      try:
          message = template.format(mode=mode, home=config_entry.title, source=source)
      except:
          message = template
  else:
      message = translate(lang, "msg_cancelled", mode=mode, home=config_entry.title, source=source)

  message = await _apply_message_rule(hass, config_entry, CONF_ARMING_VOICE_MESSAGE_CANCELLED, message, options, lang, mode=target, alarm_entity_id=alarm_entity_id)
  hass.bus.async_fire("argus_arming_wait_cancelled", {
      "entry_id": config_entry.entry_id, "alarm_entity_id": alarm_entity_id, "mode": target,
      "mode_name": mode, "source": source, "message": message
  })
  await _async_speak(hass, options, message, lang)

async def async_announce_alarm_triggered(hass, config_entry, *, alarm_entity_id, sensor_entity_id, triggered_sensor_ids, mode, source, additional=False):
  lang = await _get_language(hass, config_entry)
  options = _options(hass, config_entry)
  sensor = _sensor_identity(hass, sensor_entity_id)
  all_info = [_sensor_identity(hass, e) for e in dict.fromkeys(triggered_sensor_ids)]
  ui_data = await async_load_ui_data(hass, config_entry.entry_id)
  mode_key = {"armed_home": "home", "armed_away": "away", "armed_night": "night"}.get(mode, mode)
  zone_by_sensor = {
      entity_id: zone for zone in ui_data.get("zones", [])
      if zone.get("enabled", True) and mode_key in zone.get("modes", [])
      for entity_id in zone.get("entity_ids", [])
  }
  def spoken_identity(info):
      zone = zone_by_sensor.get(info["entity_id"])
      if not zone:
          state = info.get("state")
          suffix = " abierto" if state in {"on", "open", "unlocked", "active", "motion", "recording"} else ""
          return f"{info['name']}{suffix}"
      area = str(zone.get("area") or "").strip()
      state = info.get("state")
      suffix = " abierto" if state in {"on", "open", "unlocked", "active", "motion", "recording"} else ""
      if lang == "es":
          prefix = f"Zona de {area}" if area else "Zona sin área"
          info["zone_number"] = zone.get("number")
          return f"{prefix}, sensor {info['name']}{suffix}"
      if lang == "en":
          prefix = f"Zone {area}" if area else "Zone without an area"
          info["zone_number"] = zone.get("number")
          return f"{prefix}, sensor {info['name']}{' open' if suffix else ''}"
      return f"{area}, {info['name']}" if area else info["name"]
  sensor["spoken_name"] = spoken_identity(sensor)
  for info in all_info:
      info["spoken_name"] = spoken_identity(info)
  mode_name = translate(lang, str(mode or "")) if mode else translate(lang, "desconocido")
  
  values = {
      "sensor":sensor["spoken_name"], "sensors": _join_spoken_list([i["spoken_name"] for i in all_info], lang),
      "count": len(all_info), "sensor_entity_id": sensor_entity_id, "sensor_state": sensor["state"],
      "mode": mode_name, "home": config_entry.title, "source": source, "triggered_by": source
  }
  zone_count = len({i.get("zone_number") or i["entity_id"] for i in all_info})
  values["zone_count"] = zone_count
  values.update(_count_labels(lang, zone_count, len(all_info)))
  
  key = CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED if additional else CONF_ARMING_VOICE_MESSAGE_TRIGGERED
  msg_key = "msg_additional" if additional else "msg_triggered"
  
  template = options.get(key)
  if template:
      message = _format_voice_template(template, values)
      if not _has_voice_placeholder(template, "sensors", "sensor"):
          message = _append_voice_sentence(
              message,
              _auto_open_summary(lang, zone_count, len(all_info), [item["spoken_name"] for item in all_info]),
          )
      elif _has_voice_placeholder(template, "sensor") and not _has_voice_placeholder(template, "sensors"):
          # The custom phrase already names the first sensor; add any other
          # triggered sensors automatically without repeating that one.
          other_info = [item for item in all_info if item["entity_id"] != sensor_entity_id]
          other_zones = len({item.get("zone_number") or item["entity_id"] for item in other_info})
          message = _append_voice_sentence(
              message,
              _auto_open_summary(lang, other_zones, len(other_info), [item["spoken_name"] for item in other_info]),
          )
  else:
      message = translate(lang, msg_key, **values)

  message = await _apply_message_rule(hass, config_entry, key, message, options, lang, mode=mode, alarm_entity_id=alarm_entity_id, opened=[sensor_entity_id], event_sensor=sensor["spoken_name"])
  hass.bus.async_fire("argus_alarm_triggered", {
      "entry_id": config_entry.entry_id, "alarm_entity_id": alarm_entity_id, "mode": mode, "mode_name": mode_name,
      "sensor":sensor, "sensor_name":sensor["spoken_name"], "sensor_entity_id": sensor_entity_id,
      "triggered_sensors":all_info, "triggered_sensor_names": [i["spoken_name"] for i in all_info],
      "triggered_sensor_count": len(all_info), "additional":additional, "source": source, "message": message
  })
  await _async_speak(hass, options, message, lang)

async def async_announce_alarm_sensor_closed(hass, config_entry, *, alarm_entity_id, sensor_entity_id, open_sensor_ids, mode):
  """Announce a closed intrusion sensor without clearing the latched alarm."""
  lang = await _get_language(hass, config_entry)
  options = _options(hass, config_entry)
  ui_data = await async_load_ui_data(hass, config_entry.entry_id)
  mode_key = {"armed_home": "home", "armed_away": "away", "armed_night": "night"}.get(mode, mode)
  zone_by_sensor = {
      entity_id: zone for zone in ui_data.get("zones", [])
      if zone.get("enabled", True) and mode_key in zone.get("modes", [])
      for entity_id in zone.get("entity_ids", [])
  }
  def format_sensor(entity_id, status):
      info = _sensor_identity(hass, entity_id)
      zone = zone_by_sensor.get(entity_id)
      if zone:
          area = str(zone.get("area") or "").strip()
          if lang == "es":
              prefix = f"Zona de {area}" if area else "Zona sin área"
              return f"{prefix}, sensor {info['name']} {status}"
          if lang == "en":
              prefix = f"Zone {area}" if area else "Zone without an area"
              return f"{prefix}, sensor {info['name']} {status}"
      return f"{info['name']} {status}"
  if lang == "es":
      closed = format_sensor(sensor_entity_id, "se cerró")
      open_names = [format_sensor(e, "abierto") for e in open_sensor_ids]
  elif lang == "en":
      closed = format_sensor(sensor_entity_id, "closed")
      open_names = [format_sensor(e, "open") for e in open_sensor_ids]
  else:
      closed = format_sensor(sensor_entity_id, "closed")
      open_names = [format_sensor(e, "open") for e in open_sensor_ids]
  zones = {zone_by_sensor[e].get("number") or e for e in open_sensor_ids if e in zone_by_sensor}
  zone_count = len(zones)
  values = {
      "closed": closed, "sensors": _join_spoken_list(open_names, lang) or "ninguno",
      "count": len(open_sensor_ids), "zone_count": zone_count, "mode": translate(lang, mode),
      "home": config_entry.title,
      **_count_labels(lang, zone_count, len(open_sensor_ids)),
  }
  if lang == "es":
      values["open_status"] = (
          f"Hay {values['zone_count_label']} con {values['sensor_count_label']} {values['sensor_open_agreement']}: {_join_spoken_list(open_names, lang)}."
          if open_names else "Ya no quedan sensores abiertos."
      )
  elif lang == "en":
      values["open_status"] = (
          f"There are {values['zone_count_label']} with {values['sensor_count_label']} open: {_join_spoken_list(open_names, lang)}."
          if open_names else "No sensors remain open."
      )
  else:
      values["open_status"] = (
          _auto_open_summary(lang, zone_count, len(open_sensor_ids), open_names)
          if open_names else "No sensors remain open."
      )
  custom_template = options.get(CONF_ARMING_VOICE_MESSAGE_ALARM_SENSOR_CLOSED)
  template = custom_template or translate(lang, "msg_alarm_sensor_closed")
  message = _format_voice_template(template, values)
  if custom_template:
      if not _has_voice_placeholder(custom_template, "closed"):
          message = _append_voice_sentence(message, closed)
      if open_names and not _has_voice_placeholder(custom_template, "open_status", "sensors"):
          message = _append_voice_sentence(message, values["open_status"])
      elif not open_names and not _has_voice_placeholder(custom_template, "open_status", "sensors"):
          message = _append_voice_sentence(message, "Ya no quedan sensores abiertos." if lang == "es" else "No sensors remain open.")
  message = await _apply_message_rule(hass, config_entry, CONF_ARMING_VOICE_MESSAGE_ALARM_SENSOR_CLOSED, message, options, lang, mode=mode, alarm_entity_id=alarm_entity_id, closed=[sensor_entity_id])
  hass.bus.async_fire("argus_alarm_sensor_closed", {
      "entry_id": config_entry.entry_id, "alarm_entity_id": alarm_entity_id,
      "sensor_entity_id": sensor_entity_id, "closed_sensor": closed,
      "open_sensor_count": len(open_sensor_ids), "open_zone_count": zone_count,
      "open_sensors": open_names, "alarm_remains_active": True, "message": message,
  })
  await _async_speak(hass, options, message, lang)
def install_cancel_announcement():return None


async def async_announce_disarmed(hass, config_entry, *, actor_user_id=None, actor_profile_name=None, actor_source=None, previous_mode=None):
    """Announce only a server-confirmed transition to disarmed."""
    lang = await _get_language(hass, config_entry)
    options = _options(hass, config_entry)
    template = options.get("arming_voice_message_disarmed")
    message = template or ("Argus de seguridad desarmado." if lang == "es" else "Argus security disarmed.")
    try:
        message = message.format(mode=translate(lang, "disarmed"), home=config_entry.title)
    except (KeyError, ValueError):
        pass
    message = await _apply_message_rule(hass, config_entry, "arming_voice_message_disarmed", message, options, lang, mode="disarmed")
    actor_name = actor_profile_name if actor_source == 'Argus' else None
    if not actor_name and actor_user_id and actor_source != 'HomeKit':
        user = await hass.auth.async_get_user(actor_user_id)
        if user and user.is_active:
            # A service account is not proof of a person controlling HomeKit.
            actor_name = ('cuenta de Home Assistant ' if lang == 'es' else 'Home Assistant account ') + str(user.name)
    previous = str(getattr(previous_mode, 'value', previous_mode) or '')
    if previous in {'home', 'away', 'night'}:
        previous = 'armed_' + previous
    if previous in {'armed_home', 'armed_away', 'armed_night'}:
        message = _append_voice_sentence(message, ('Modo anterior: ' if lang == 'es' else 'Previous mode: ') + translate(lang, previous))
    if actor_source == 'HomeKit':
        message = _append_voice_sentence(message, 'Desarmado desde HomeKit. Persona no identificada por Apple Casa' if lang == 'es' else 'Disarmed from HomeKit. Apple Home did not identify the person')
        await _async_speak(hass, options, message, lang)
        return
    message = _append_voice_sentence(message, (f'Desarmado por {actor_name}' if actor_name else 'Autor del desarmado no identificado') if lang == 'es' else (f'Disarmed by {actor_name}' if actor_name else 'Disarm actor not identified'))
    await _async_speak(hass, options, message, lang)
