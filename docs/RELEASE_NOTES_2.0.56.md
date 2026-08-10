# Argus Home Hub v2.0.56

## Correcciones críticas de armado

- El armado en espera termina en el modo seleccionado cuando los sensores configurados pasan a un estado cerrado reconocido (`off`, `closed` o `cerrado`).
- Sensores ausentes, `unknown` o `unavailable` no se interpretan como cerrados: Argus mantiene la espera de forma segura hasta recibir un estado real.
- El anuncio TTS de un cierre parcial ahora dice cuál sensor cerró y cuál sigue pendiente. Si TTS o su almacenamiento falla temporalmente, el armado continúa funcionando.
- HomeKit conserva la transición de armado y Argus no cruza solicitudes de armado entre instancias al guardar configuración.

## Verificación recomendada en Home Assistant

1. Activa **Esperar armado en espera** en el modo que usarás y guarda.
2. Deja un sensor abierto, arma ese modo y confirma `arming_target` y `arming_blocking_sensors`.
3. Cierra el sensor: Argus y Apple Home deben cambiar al mismo modo armado solicitado.
4. Repite para Casa, Ausente, Noche y Vacaciones, y prueba una transición parcial con dos sensores para confirmar el TTS.
