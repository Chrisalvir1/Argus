# Auditoría de entrega Argus 1.8.0

## Alcance revisado

- Ciclo de vida de la integración.
- Registro WebSocket.
- Política de automatizaciones.
- Panel principal y bootstrap modular.
- Tarjeta Lovelace.
- Versionado y documentación.
- Contratos de arquitectura.
- Accesibilidad de movimiento.

## Eliminaciones verificadas en el runtime

- El comando `argus/get_tts_engines` no se registra.
- Las acciones `tts`, `analyze_camera`, `ai` y `copilot` se rechazan en el ejecutor.
- El temporizador de sugerencias de armado se desconecta al añadir la entidad.
- La notificación histórica `argus_smart_arming` se descarta al iniciar.
- El frontend elimina opciones heredadas y sanea etiquetas Matter, TTS, AI y Copilot.

## UI revisada

- Transiciones de entrada para tarjetas y secciones.
- Apertura de modales y opciones.
- Retroalimentación de guardado.
- Interacciones de botones y sensores.
- Vista móvil.
- Reducción de movimiento.
- Tarjeta con datos meteorológicos y ubicación no inventados.
- Modo vacaciones disponible en la tarjeta.

## Clima cinematográfico

La atmósfera se genera localmente mediante shaders y utiliza el estado de la entidad meteorológica elegida. Los efectos diferenciados incluyen lluvia, tormenta con lluvia, relámpagos sin lluvia, nieve, niebla y nubes. El día/noche depende de `sun.sun`; los eclipses solo aparecen cuando existe una entidad compatible; las estaciones usan la latitud de Home Assistant para corregir el hemisferio.

## Compatibilidad conservada

- Modos y máquina de estados.
- Sensores y sirenas.
- SOS.
- MQTT.
- Auditoría y restauración.
- Automatizaciones locales de encendido, apagado, notificación, servicio permitido y disparo de alarma.
- HomeKit Bridge mediante Home Assistant.

## Validación automatizada requerida antes de fusionar

- Compilación Python.
- Pruebas unitarias/contratos.
- Sintaxis JavaScript.
- HACS.
- Hassfest.
- Construcción y prueba del ZIP.
