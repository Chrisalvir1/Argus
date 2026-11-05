"""Translations for the Argus backend TTS and notifications."""
from __future__ import annotations
from typing import Any

_TRANSLATIONS = {
    "es": {
        "armed_home": "En casa", "armed_away": "Ausente", "armed_night": "Noche", "armed_vacation": "Vacaciones", "armed_custom_bypass": "Personalizado",
        "home": "En casa", "away": "Ausente", "night": "Noche", "vacation": "Vacaciones", "custom_bypass": "Personalizado",
        "disarmed": "Desarmado", "disarm": "Desarmado", "desarmado": "Desarmado", "arming": "Armando", "armando": "Armando",
        "pending": "Pendiente", "triggered": "Disparada", "desconocido": "Desconocido", "unknown": "Desconocido",
        "msg_start": "Argus todavía no puede armarse en modo {mode}. Hay {zone_count_label} con {sensor_count_label} {sensor_open_agreement}: {sensors}.",
        "msg_remaining": "{closed}. Todavía hay {zone_count_label} con {sensor_count_label} {sensor_open_agreement}: {sensors}.",
        "msg_last": "{closed}. Solo queda 1 sensor por cerrar: {sensors}.",
        "msg_complete": "Todas las zonas están cerradas. Argus procede a armarse en modo {mode}.",
        "msg_armed": "Argus ya está armado en modo {mode}.",
        "msg_cancelled": "Se canceló el armado en modo {mode}.",
        "msg_triggered": "¡Alerta! Hay {zone_count_label} con {sensor_count_label} {sensor_open_agreement}: {sensors}. La alarma está activa en modo {mode}.",
        "msg_additional": "¡Alerta! También hay {zone_count_label} con {sensor_count_label} {sensor_open_agreement}: {sensors}. La alarma sigue activa.",
        "msg_alarm_sensor_closed": "{closed}. {open_status} La alarma y las sirenas siguen activas. Desarma Argus para apagarlas.",
        "tts_error_incomplete_title": "Argus — Avisos de voz incompletos",
        "tts_error_incomplete_body": "La voz de Argus está activada pero falta la entidad TTS o los reproductores de audio. Abrí Ajustes → Argus → Opciones, completá la configuración de voz y guardá.",
        "tts_error_play_title": "Argus — Error de TTS",
        "tts_error_play_body": "Argus no pudo reproducir un aviso de voz en {player}. Revisá el registro de Home Assistant para más detalles.",
    },
    "en": {
        "armed_home": "Home", "armed_away": "Away", "armed_night": "Night", "armed_vacation": "Vacation", "armed_custom_bypass": "Custom Bypass",
        "home": "Home", "away": "Away", "night": "Night", "vacation": "Vacation", "custom_bypass": "Custom Bypass",
        "disarmed": "Disarmed", "disarm": "Disarmed", "arming": "Arming",
        "pending": "Pending", "triggered": "Triggered", "desconocido": "Unknown", "unknown": "Unknown",
        "msg_start": "Argus is arming in {mode} mode and checking zones. {zone_count_label} have {sensor_count_label} open: {sensors}.",
        "msg_remaining": "Closed: {closed}. Remaining: {zone_count_label} with {sensor_count_label} open: {sensors}.",
        "msg_last": "Closed: {closed}. One sensor remaining: {sensors}.",
        "msg_complete": "Zones and sensors are closed. Argus is arming in {mode} mode.",
        "msg_armed": "Argus: system armed in {mode} mode.",
        "msg_cancelled": "Arming in {mode} mode was cancelled manually.",
        "msg_triggered": "Alert! {zone_count_label} have {sensor_count_label} open: {sensors}. The alarm remains active in {mode} mode.",
        "msg_additional": "Alert! {sensor} also opened. Now {zone_count_label} have {sensor_count_label} open: {sensors}. The alarm remains active.",
        "msg_alarm_sensor_closed": "Closed: {closed}. {zone_count_label} with {sensor_count_label} remain open: {sensors}. The alarm and sirens remain active; disarm Argus manually.",
        "tts_error_incomplete_title": "Argus — Incomplete voice announcements",
        "tts_error_incomplete_body": "Argus voice is enabled but missing the TTS entity or audio players. Go to Settings → Argus → Options to complete voice configuration and save.",
        "tts_error_play_title": "Argus — TTS Error",
        "tts_error_play_body": "Argus could not play a voice announcement on {player}. Check Home Assistant logs for details.",
    },
}

class _SafeValues(dict):
    def __missing__(self, key):
        return "{" + key + "}"

def translate(language: str, key: Any, **kwargs) -> str:
    """Fetch translation and format it."""
    lang = (language or "es")[:2].lower()
    # Argus exposes Spanish and English only. Unknown Home Assistant locales
    # use English, matching the language selector's fallback behavior.
    if lang not in {"es", "en"}:
        lang = "en"
    lang_dict = _TRANSLATIONS[lang]
    
    raw_key = getattr(key, "value", str(key or "")).strip()
    k = raw_key.lower().replace("alarmcontrolpanelstate.", "").strip()
    
    text = lang_dict.get(k) or lang_dict.get(raw_key)
    if text is None:
        fallback_dict = _TRANSLATIONS.get("en", {})
        text = fallback_dict.get(k) or fallback_dict.get(raw_key, raw_key)
    
    if kwargs:
        try:
            return str(text).format_map(_SafeValues(kwargs)).strip()
        except (ValueError, AttributeError):
            return str(text).strip()
    return str(text).strip()
