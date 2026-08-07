# Argus Home Hub v2.0.44

- Añade un mensaje TTS específico cuando un sensor dispara realmente la alarma.
- Expone el mensaje editable en la misma configuración de opciones de TTS.
- Añade `message_triggered` a `configuration.yaml`.
- Usa el título limpio del dispositivo, por ejemplo `Puerta Principal`, sin repetir el tipo de dispositivo.
- Emite el evento `argus_alarm_triggered` con nombre, entidad, estado, `unique_id`, `device_id`, identificadores y conexiones del sensor.
- No anuncia falsamente durante la espera de armado ni durante un SOS manual: anuncia solo después de que Argus entra realmente en `triggered` por un sensor identificado.
