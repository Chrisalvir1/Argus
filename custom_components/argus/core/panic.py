"""Argus Panic & SOS Emergency Notification Manager."""
from __future__ import annotations

from typing import Any

SOS_TEXT = {
    "es": (
        "ARGUS — SOS / PÁNICO",
        "🚨 Botón SOS activado desde {home}. Revisa el estado de la alarma de inmediato.",
        "Llamar al {number}",
    ),
    "en": (
        "ARGUS — SOS / PANIC",
        "🚨 SOS button activated from {home}. Check the alarm status immediately.",
        "Call {number}",
    ),
    "fr": (
        "ARGUS — SOS / PANIQUE",
        "🚨 Bouton SOS activé depuis {home}. Vérifiez immédiatement l’état de l’alarme.",
        "Appeler le {number}",
    ),
    "pt": (
        "ARGUS — SOS / PÂNICO",
        "🚨 Botão SOS ativado em {home}. Verifique o estado do alarme imediatamente.",
        "Ligar para {number}",
    ),
    "it": (
        "ARGUS — SOS / PANICO",
        "🚨 Pulsante SOS attivato da {home}. Controlla subito lo stato dell’allarme.",
        "Chiama {number}",
    ),
    "zh": (
        "ARGUS — SOS / 紧急",
        "🚨 SOS 按钮已从 {home} 激活。请立即检查警报状态。",
        "呼叫 {number}",
    ),
    "ru": (
        "ARGUS — SOS / ТРЕВОГА",
        "🚨 Кнопка SOS активирована из {home}. Немедленно проверьте состояние сигнализации.",
        "Позвонить {number}",
    ),
}


def get_sos_messages(
    lang: str = "en", home_name: str = "Home", emergency_number: str = ""
) -> dict[str, str]:
    """Generate localized SOS notification payload."""
    template = SOS_TEXT.get(lang) or SOS_TEXT["en"]
    title, message_fmt, action_fmt = template
    msg = message_fmt.format(home=home_name)
    if emergency_number:
        msg += f" {action_fmt.format(number=emergency_number)}"
    return {
        "title": title,
        "message": msg,
    }
