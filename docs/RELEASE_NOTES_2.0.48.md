# Argus Home Hub v2.0.48

## HomeKit: transición de armado real

Esta revisión corrige la regresión detectada durante la validación física de v2.0.47.

- Cuando Argus espera sensores o ejecuta el conteo, la entidad permanece en `arming`; no publica prematuramente `armed_home`, `armed_away` ni `armed_night`.
- Apple Home recibe CurrentState desarmado y TargetState Casa, Ausente o Noche según el modo solicitado, por lo que puede mostrar la transición “Armando…”.
- El ajuste del TargetState está limitado a entidades con el marcador interno de Argus y no modifica otros paneles de alarma de Home Assistant.
- `_arm_request` continúa bloqueando disparos y automatizaciones de disparo mientras existan sensores pendientes.
- Solo `_async_complete_arming` publica el estado armado definitivo después de cerrar los sensores y finalizar el conteo.
- `Off` continúa cancelando inmediatamente la solicitud pendiente.

## Validación requerida

1. Solicitar Casa, Ausente y Noche desde Apple Home con un sensor abierto.
2. Confirmar que Apple Home muestra armado en curso y conserva el modo elegido.
3. Confirmar que Argus permanece en `arming` y mantiene `arming_blocking_sensors`.
4. Cerrar los sensores y comprobar que solo entonces cambia al estado armado definitivo.
5. Repetir pulsando `Off` durante la espera.

La compilación y CI no sustituyen esta prueba física.
