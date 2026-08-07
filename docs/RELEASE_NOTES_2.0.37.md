# Argus Home Hub v2.0.37

## Armado inteligente por voz
- Selección manual del motor TTS y de uno o varios reproductores desde las opciones de la integración.
- Mensajes predeterminados editables para inicio de espera, sensores restantes, último sensor y cierre completo.
- Resolución en vivo del nombre visible y de la identidad estable del sensor mediante los registros de entidades y dispositivos de Home Assistant.
- Evento `argus_arming_wait_update` con nombres, cantidad, sensores cerrados/abiertos e identificadores disponibles.
- Solo se evalúan los sensores de intrusión seleccionados para el modo solicitado y se respetan los bypass.

## HomeKit
Home Assistant convierte siempre el estado genérico `arming` a `Away` en HomeKit. Argus ahora mantiene el panel en `Off/Disarmed` mientras procesa una solicitud de armado y expone el progreso en un binary sensor independiente. Al completar la espera muestra directamente el modo real solicitado. Enviar `Off` durante la espera cancela la solicitud.
