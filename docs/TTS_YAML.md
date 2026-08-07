# Configuración TTS de Argus por YAML

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
    message_triggered: "Alerta. La alarma fue disparada por: {sensors}. Modo {mode}."
    message_additional_triggered: "Alerta adicional. También se activó {sensor}. Ya hay {count} sensores: {sensors}."
```

`message_triggered` anuncia el primer sensor o el conjunto correlacionado que inició la alarma. `message_additional_triggered` anuncia cada sensor nuevo que se abra mientras Argus continúe disparado.

Variables: `{sensor}`, `{sensors}`, `{count}`, `{sensor_entity_id}`, `{sensor_state}`, `{mode}`, `{home}`, `{source}` y `{triggered_by}`. Los nombres usan el título limpio del dispositivo.

Después de editar YAML, valida la configuración y reinicia Home Assistant.
