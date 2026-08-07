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
    message_triggered: "Alerta de seguridad. El sensor {sensor} disparó la alarma de Argus en modo {mode}."
```

Para `message_triggered` están disponibles `{sensor}`, `{sensor_entity_id}`, `{sensor_state}`, `{mode}`, `{home}`, `{source}` y `{triggered_by}`. `{sensor}` usa el título limpio del dispositivo, por ejemplo `Puerta Principal`, sin repetir el tipo “Puerta”.

Las variables de espera incluyen `{mode}`, `{home}`, `{count}`, `{total}`, `{sensors}`, `{closed}`, `{opened}` y `{source}` según el mensaje.

Después de editar YAML, valida la configuración y reinicia Home Assistant.
