"""Translations for the Argus backend TTS and notifications."""

_TRANSLATIONS = {
    "es": {
        "armed_home": "En casa", "armed_away": "Ausente", "armed_night": "Noche", "armed_vacation": "Vacaciones", "armed_custom_bypass": "Personalizado",
        "home": "En casa", "away": "Ausente", "night": "Noche", "vacation": "Vacaciones", "custom_bypass": "Personalizado",
        "disarmed": "Desarmado", "disarm": "Desarmado", "desarmado": "Desarmado", "arming": "Armando", "armando": "Armando",
        "pending": "Pendiente", "triggered": "Disparada", "desconocido": "Desconocido", "unknown": "Desconocido",
        "msg_start": "No puedo completar el armado. Hay {count} sensores abiertos: {sensors}.",
        "msg_remaining": "{closed} se ha cerrado. Faltan {count} sensores por cerrar: {sensors}.",
        "msg_last": "Falta un sensor por cerrar: {sensors}.",
        "msg_complete": "Todos los sensores están cerrados. Argus continuará el armado en modo {mode}.",
        "msg_cancelled": "El armado en modo {mode} fue cancelado manualmente.",
        "msg_triggered": "Alerta de seguridad. La alarma fue disparada por: {sensors}. Modo {mode}.",
        "msg_additional": "Alerta adicional. También se activó {sensor}. Ya hay {count} sensores involucrados: {sensors}.",
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
        "msg_start": "Cannot complete arming. {count} sensors are open: {sensors}.",
        "msg_remaining": "{closed} was closed. {count} sensors remaining: {sensors}.",
        "msg_last": "One sensor remaining: {sensors}.",
        "msg_complete": "All sensors closed. Argus will continue arming in {mode} mode.",
        "msg_cancelled": "Arming in {mode} mode was cancelled manually.",
        "msg_triggered": "Security alert. Alarm triggered by: {sensors}. {mode} mode.",
        "msg_additional": "Additional alert. {sensor} was also triggered. There are {count} sensors involved: {sensors}.",
        "tts_error_incomplete_title": "Argus — Incomplete voice announcements",
        "tts_error_incomplete_body": "Argus voice is enabled but missing the TTS entity or audio players. Go to Settings → Argus → Options to complete voice configuration and save.",
        "tts_error_play_title": "Argus — TTS Error",
        "tts_error_play_body": "Argus could not play a voice announcement on {player}. Check Home Assistant logs for details.",
    },
    "fr": {
        "armed_home": "Présent", "armed_away": "Absent", "armed_night": "Nuit", "armed_vacation": "Vacances", "armed_custom_bypass": "Personnalisé",
        "home": "Présent", "away": "Absent", "night": "Nuit", "vacation": "Vacances", "custom_bypass": "Personnalisé",
        "disarmed": "Désarmé", "disarm": "Désarmé", "arming": "Armement",
        "pending": "En attente", "triggered": "Déclenché", "desconocido": "Inconnu", "unknown": "Inconnu",
        "msg_start": "Impossible d'armer. {count} capteurs sont ouverts : {sensors}.",
        "msg_remaining": "{closed} a été fermé. Il reste {count} capteurs à fermer : {sensors}.",
        "msg_last": "Il reste un capteur à fermer : {sensors}.",
        "msg_complete": "Tous les capteurs sont fermés. L'armement se poursuivra en mode {mode}.",
        "msg_cancelled": "L'armement en mode {mode} a été annulé.",
        "msg_triggered": "Alerte de sécurité. Alarme déclenchée par : {sensors}. Mode {mode}.",
        "msg_additional": "Alerte supplémentaire. {sensor} a également été déclenché. {count} capteurs impliqués : {sensors}.",
        "tts_error_incomplete_title": "Argus — Annonces vocales incomplètes",
        "tts_error_incomplete_body": "La voix d'Argus est activée mais il manque l'entité TTS ou les lecteurs audio. Allez dans Paramètres → Argus → Options pour configurer.",
        "tts_error_play_title": "Argus — Erreur TTS",
        "tts_error_play_body": "Impossible de lire une annonce vocale sur {player}.",
    },
    "pt": {
        "armed_home": "Em casa", "armed_away": "Ausente", "armed_night": "Noite", "armed_vacation": "Férias", "armed_custom_bypass": "Personalizado",
        "home": "Em casa", "away": "Ausente", "night": "Noite", "vacation": "Férias", "custom_bypass": "Personalizado",
        "disarmed": "Desarmado", "disarm": "Desarmado", "arming": "Armando",
        "pending": "Pendente", "triggered": "Disparado", "desconocido": "Desconhecido", "unknown": "Desconhecido",
        "msg_start": "Não é possível armar. {count} sensores estão abertos: {sensors}.",
        "msg_remaining": "{closed} foi fechado. Faltam {count} sensores: {sensors}.",
        "msg_last": "Falta um sensor: {sensors}.",
        "msg_complete": "Todos os sensores fechados. Argus vai armar no modo {mode}.",
        "msg_cancelled": "O arme no modo {mode} foi cancelado.",
        "msg_triggered": "Alerta de segurança. Alarme disparado por: {sensors}. Modo {mode}.",
        "msg_additional": "Alerta adicional. {sensor} também foi disparado. Há {count} sensores envolvidos: {sensors}.",
        "tts_error_incomplete_title": "Argus — Avisos de voz incompletos",
        "tts_error_incomplete_body": "A voz do Argus está ativada, mas falta a entidade TTS ou reprodutores de áudio. Vá para Configurações → Argus → Opções.",
        "tts_error_play_title": "Argus — Erro de TTS",
        "tts_error_play_body": "O Argus não conseguiu reproduzir um aviso de voz em {player}.",
    },
    "it": {
        "armed_home": "In casa", "armed_away": "Fuori", "armed_night": "Notte", "armed_vacation": "Vacanza", "armed_custom_bypass": "Personalizzato",
        "home": "In casa", "away": "Fuori", "night": "Notte", "vacation": "Vacanza", "custom_bypass": "Personalizzato",
        "disarmed": "Disarmato", "disarm": "Disarmato", "arming": "Inserimento",
        "pending": "In attesa", "triggered": "Attivato", "desconocido": "Sconosciuto", "unknown": "Sconosciuto",
        "msg_start": "Impossibile inserire. {count} sensori sono aperti: {sensors}.",
        "msg_remaining": "{closed} è stato chiuso. Mancano {count} sensori: {sensors}.",
        "msg_last": "Manca un sensore: {sensors}.",
        "msg_complete": "Tutti i sensori chiusi. Inserimento in modalità {mode}.",
        "msg_cancelled": "Inserimento in modalità {mode} annullato.",
        "msg_triggered": "Allarme di sicurezza. Attivato da: {sensors}. Modalità {mode}.",
        "msg_additional": "Allarme aggiuntivo. Anche {sensor} è stato attivato. {count} sensori coinvolti: {sensors}.",
        "tts_error_incomplete_title": "Argus — Avvisi vocali incompleti",
        "tts_error_incomplete_body": "Voce di Argus abilitata ma manca TTS o lettori audio. Vai su Impostazioni → Argus → Opzioni.",
        "tts_error_play_title": "Argus — Errore TTS",
        "tts_error_play_body": "Impossibile riprodurre avviso vocale su {player}.",
    },
    "zh": {
        "armed_home": "在家", "armed_away": "离家", "armed_night": "睡眠", "armed_vacation": "度假", "armed_custom_bypass": "自定义",
        "home": "在家", "away": "离家", "night": "睡眠", "vacation": "度假", "custom_bypass": "自定义",
        "disarmed": "撤防", "disarm": "撤防", "arming": "布防中",
        "pending": "等待中", "triggered": "已触发", "desconocido": "未知", "unknown": "未知",
        "msg_start": "无法完成布防。{count} 个传感器开启：{sensors}。",
        "msg_remaining": "{closed} 已关闭。还有 {count} 个传感器：{sensors}。",
        "msg_last": "还有一个传感器：{sensors}。",
        "msg_complete": "所有传感器已关闭。Argus 将继续在 {mode} 模式下布防。",
        "msg_cancelled": "{mode} 模式下的布防已手动取消。",
        "msg_triggered": "安全警报。警报触发：{sensors}。模式 {mode}。",
        "msg_additional": "附加警报。{sensor} 也被触发。涉及 {count} 个传感器：{sensors}。",
        "tts_error_incomplete_title": "Argus — 语音播报不完整",
        "tts_error_incomplete_body": "语音播报已启用，但缺少 TTS 或音频播放器。请前往“设置” → “Argus” → “选项”进行配置。",
        "tts_error_play_title": "Argus — TTS 错误",
        "tts_error_play_body": "无法在 {player} 上播放语音播报。",
    },
    "ru": {
        "armed_home": "Дома", "armed_away": "Не дома", "armed_night": "Ночь", "armed_vacation": "Отпуск", "armed_custom_bypass": "Особый",
        "home": "Дома", "away": "Не дома", "night": "Ночь", "vacation": "Отпуск", "custom_bypass": "Особый",
        "disarmed": "Снято с охраны", "disarm": "Снято с охраны", "arming": "Постановка на охрану",
        "pending": "Ожидание", "triggered": "Тревога", "desconocido": "Неизвестно", "unknown": "Неизвестно",
        "msg_start": "Невозможно поставить на охрану. Открыто {count} датчиков: {sensors}.",
        "msg_remaining": "{closed} закрыт. Осталось закрыть {count} датчиков: {sensors}.",
        "msg_last": "Осталось закрыть один датчик: {sensors}.",
        "msg_complete": "Все датчики закрыты. Охрана в режиме {mode}.",
        "msg_cancelled": "Постановка в режим {mode} отменена.",
        "msg_triggered": "Тревога. Сработало: {sensors}. Режим {mode}.",
        "msg_additional": "Дополнительная тревога. {sensor} сработал. Всего {count} датчиков: {sensors}.",
        "tts_error_incomplete_title": "Argus — Неполные голосовые настройки",
        "tts_error_incomplete_body": "Голос включен, но отсутствует TTS или плеер. Зайдите в Настройки → Argus → Опции.",
        "tts_error_play_title": "Argus — Ошибка TTS",
        "tts_error_play_body": "Не удалось воспроизвести голос на {player}.",
    }
}

class _SafeValues(dict):
    def __missing__(self, key):
        return "{" + key + "}"

def translate(language: str, key: Any, **kwargs) -> str:
    """Fetch translation and format it."""
    lang = (language or "es")[:2].lower()
    lang_dict = _TRANSLATIONS.get(lang) or _TRANSLATIONS.get("es") or _TRANSLATIONS.get("en")
    
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
