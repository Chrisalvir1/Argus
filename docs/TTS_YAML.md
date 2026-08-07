# Configuración TTS de Argus por YAML

La interfaz de opciones continúa disponible. Si existe este bloque en `configuration.yaml`, sus valores tienen prioridad:

```yaml
argus:
  arming_voice:
    enabled: true
    tts_entity: tts.google_translate_es_es
    media_players:
      - media_player.sala
      - media_player.cocina
    message_start: "No puedo armar en {mode}. Hay {count} sensores abiertos: {sensors}."
    message_remaining: "{closed} se cerró. Faltan {count}: {sensors}."
    message_last: "Falta cerrar: {sensors}."
    message_complete: "Todos los sensores están cerrados. Armando en {mode}."
    message_cancelled: "El armado en {mode} fue cancelado manualmente."
```

Variables disponibles: `{mode}`, `{home}`, `{count}`, `{total}`, `{sensors}`, `{closed}`, `{opened}` y `{source}` según el tipo de mensaje.

Después de editar YAML, valida la configuración y reinicia Home Assistant.
