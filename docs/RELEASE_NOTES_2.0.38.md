# Argus Home Hub v2.0.38

Corrección complementaria del armado en espera para HomeKit.

- Mientras Argus espera sensores o completa el retardo, HomeKit conserva el panel en Off en vez de mostrar Away incorrectamente.
- Enviar Off durante esa espera cancela inmediatamente la solicitud, aunque exista un PIN de desarmado, porque todavía no se ha armado el sistema.
- Los binary sensors de espera y armado en progreso se actualizan inmediatamente al cancelar.
- Mantiene la selección manual de TTS/reproductores y los mensajes editables añadidos en v2.0.37.
