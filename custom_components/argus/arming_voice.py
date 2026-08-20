"""Dynamic TTS and event payloads for Argus arming and alarm events."""
from __future__ import annotations
import logging
from homeassistant.components import persistent_notification
from homeassistant.helpers import device_registry as dr, entity_registry as er
from .const import *
from .storage import async_load_ui_data
from .i18n import translate, _TRANSLATIONS

_LOGGER = logging.getLogger(__name__)

def _detect_tts_language(hass, tts_entity_id: str) -> str | None:
    """Infer the language directly from the configured TTS entity or its metadata."""
    if not tts_entity_id:
        return None
    candidates = [str(tts_entity_id).lower()]
    
    state = hass.states.get(tts_entity_id) if hasattr(hass, "states") else None
    if state and state.attributes:
        for attr_key in ("language", "friendly_name", "voice"):
            val = state.attributes.get(attr_key)
            if val:
                candidates.append(str(val).lower())
        opts = state.attributes.get("options")
        if isinstance(opts, dict):
            for opt_val in opts.values():
                candidates.append(str(opt_val).lower())
                
    try:
        registry = er.async_get(hass)
        entry = registry.async_get(tts_entity_id)
        if entry:
            if entry.name:
                candidates.append(str(entry.name).lower())
            if entry.original_name:
                candidates.append(str(entry.original_name).lower())
            if entry.unique_id:
                candidates.append(str(entry.unique_id).lower())
            if entry.options and isinstance(entry.options, dict):
                for opt_val in entry.options.values():
                    candidates.append(str(opt_val).lower())
    except Exception:
        pass

    full_text = " ".join(candidates)

    if any(tok in full_text for tok in [
        "espanol", "español", "spanish", "es-es", "es_es", "es-419", "es_419",
        "es-mx", "es_mx", "es-us", "es_us", "es-ar", "es_ar", "es-co", "es_co",
        "_es", "-es", ".es", " es", "es "
    ]):
        return "es"

    if any(tok in full_text for tok in [
        "francais", "français", "french", "fr-fr", "fr_fr", "fr-ca", "fr_ca",
        "_fr", "-fr", ".fr", " fr", "fr "
    ]):
        return "fr"

    if any(tok in full_text for tok in [
        "portugues", "português", "portuguese", "pt-br", "pt_br", "pt-pt", "pt_pt",
        "_pt", "-pt", ".pt", " pt", "pt "
    ]):
        return "pt"

    if any(tok in full_text for tok in [
        "italiano", "italian", "it-it", "it_it", "_it", "-it", ".it", " it", "it "
    ]):
        return "it"

    if any(tok in full_text for tok in [
        "russian", "ruso", "русский", "ru-ru", "ru_ru", "_ru", "-ru", ".ru", " ru", "ru "
    ]):
        return "ru"

    if any(tok in full_text for tok in [
        "chinese", "chino", "中文", "zh-cn", "zh_cn", "zh-tw", "zh_tw", "zh-hans", "zh-hant",
        "_zh", "-zh", ".zh", " zh", "zh "
    ]):
        return "zh"

    if any(tok in full_text for tok in [
        "english", "ingles", "inglés", "en-us", "en_us", "en-gb", "en_gb", "en-au", "en_au", "en-ca", "en_ca",
        "_en", "-en", ".en", " en", "en "
    ]):
        return "en"

    return None

async def _get_language(hass, config_entry):
    options = _options(hass, config_entry)
    tts_entity = str(options.get(CONF_ARMING_VOICE_TTS, "") or "")
    if tts_entity:
        detected = _detect_tts_language(hass, tts_entity)
        if detected:
            return detected
    ui_data = await async_load_ui_data(hass, config_entry.entry_id)
    lang = ui_data.get("language")
    if lang:
        return str(lang).split("-")[0].lower()
    ha_lang = getattr(hass.config, "language", None)
    if ha_lang:
        return str(ha_lang).split("-")[0].lower()
    return "es"

def _options(hass, entry):
    merged = dict(entry.options)
    merged.update(hass.data.get(DOMAIN, {}).get("arming_voice_yaml", {}))
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
async def _async_speak(hass, options, message, lang):
  if not options.get(CONF_ARMING_VOICE_ENABLED, False): return
  tts = str(options.get(CONF_ARMING_VOICE_TTS, "") or "")
  players = options.get(CONF_ARMING_VOICE_PLAYERS, [])
  if isinstance(players, str): players = [players]
  players = [player for player in players if player]
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
      try:
          await hass.services.async_call("tts", "speak", {"entity_id": tts, "media_player_entity_id": player, "message": message, "cache": True}, blocking=False)
      except Exception:
          _LOGGER.exception("Argus could not announce on %s", player)
          persistent_notification.async_create(
              hass,
              translate(lang, "tts_error_play_body", player=player),
              title=translate(lang, "tts_error_play_title"),
              notification_id=f"argus_voice_error_{player.replace('.', '_')}"
          )

async def async_announce_arming_wait_update(hass, config_entry, *, alarm_entity_id, target, previous_open, current_open):
  previous = list(dict.fromkeys(previous_open))
  current = list(dict.fromkeys(current_open))
  if previous == current: return
  lang = await _get_language(hass, config_entry)
  current_info = [_sensor_identity(hass, e) for e in current]
  prev_set, cur_set = set(previous), set(current)
  closed = [_sensor_identity(hass, e) for e in previous if e not in cur_set]
  opened = [_sensor_identity(hass, e) for e in current if e not in prev_set]
  names = [i["name"] for i in current_info]
  mode = translate(lang, target)
  
  values = {
      "count": len(current), "total": len(prev_set | cur_set), "sensors": ", ".join(names),
      "closed": ", ".join(i["name"] for i in closed), "opened": ", ".join(i["name"] for i in opened),
      "mode": mode, "home": config_entry.title
  }
  options = _options(hass, config_entry)
  
  if not current:
      template = options.get(CONF_ARMING_VOICE_MESSAGE_COMPLETE) or translate(lang, "msg_complete")
  # A transition must always say what closed as well as what remains.  The
  # former "last" branch hid the close event whenever exactly one sensor was
  # left, which made the voice flow look stalled even while it was progressing.
  elif closed:
      template = options.get(CONF_ARMING_VOICE_MESSAGE_REMAINING) or translate(lang, "msg_remaining")
  elif len(current) == 1 and previous:
      template = options.get(CONF_ARMING_VOICE_MESSAGE_LAST) or translate(lang, "msg_last")
  else:
      template = options.get(CONF_ARMING_VOICE_MESSAGE_START) or translate(lang, "msg_start")
  
  if isinstance(template, str) and "{" in template:
      try:
          # We use safe mapping equivalent to i18n's logic to prevent crashes on missing keys in custom templates
          class _SafeValues(dict):
              def __missing__(self, key): return "{" + key + "}"
          message = template.format_map(_SafeValues(values))
      except Exception:
          message = template
  else:
      message = template

  hass.bus.async_fire("argus_arming_wait_update", {
      "entry_id": config_entry.entry_id, "alarm_entity_id": alarm_entity_id, "mode": target, "mode_name": mode,
      "open_count": len(current), "open_sensors": current_info, "open_sensor_names": names,
      "recently_closed": closed, "recently_opened": opened, "all_closed": not current, "message": message
  })
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
  mode_name = translate(lang, str(mode or "")) if mode else translate(lang, "desconocido")
  
  values = {
      "sensor":sensor["name"], "sensors": ", ".join(i["name"] for i in all_info),
      "count": len(all_info), "sensor_entity_id": sensor_entity_id, "sensor_state": sensor["state"],
      "mode": mode_name, "home": config_entry.title, "source": source, "triggered_by": source
  }
  
  key = CONF_ARMING_VOICE_MESSAGE_ADDITIONAL_TRIGGERED if additional else CONF_ARMING_VOICE_MESSAGE_TRIGGERED
  msg_key = "msg_additional" if additional else "msg_triggered"
  
  template = options.get(key)
  if template:
      try:
          message = template.format(**values)
      except:
          message = template
  else:
      message = translate(lang, msg_key, **values)

  hass.bus.async_fire("argus_alarm_triggered", {
      "entry_id": config_entry.entry_id, "alarm_entity_id": alarm_entity_id, "mode": mode, "mode_name": mode_name,
      "sensor":sensor, "sensor_name":sensor["name"], "sensor_entity_id": sensor_entity_id,
      "triggered_sensors":all_info, "triggered_sensor_names": [i["name"] for i in all_info],
      "triggered_sensor_count": len(all_info), "additional":additional, "source": source, "message": message
  })
  await _async_speak(hass, options, message, lang)
def install_cancel_announcement():return None
