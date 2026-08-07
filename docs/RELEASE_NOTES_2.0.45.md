# Argus Home Hub v2.0.45

- Registra todos los sensores que participan en una alarma activa, no únicamente el primero.
- Anuncia el sensor inicial o el conjunto correlacionado que dispara Argus.
- Si otro sensor se abre mientras la alarma sigue disparada, lo añade y realiza un nuevo anuncio TTS.
- Añade mensajes separados y editables para el disparo inicial y los disparos adicionales en la interfaz y YAML.
- Expone `triggered_sensors`, `triggered_sensor_names` y `triggered_sensor_count` en la instancia activa.
- Hace parpadear en naranja únicamente los sensores involucrados mientras la alarma está disparada.
- Limpia la lista al desarmar para que una alarma anterior no contamine la siguiente.
