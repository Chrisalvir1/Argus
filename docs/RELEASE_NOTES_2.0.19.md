# Argus Home Hub v2.0.19

## Política de sensores abiertos

Argus añade una política configurable por modo para Casa, Ausente, Noche y Vacaciones:

- **Permitir** arma aunque haya sensores abiertos.
- **Bloquear** conserva el rechazo de armado.
- **Esperar a que cierren** mantiene el panel en `ARMING` para Home Assistant y HomeKit hasta que cierre el último sensor bloqueante.

La espera respeta el retardo de salida, muestra el modo de destino y los sensores pendientes, y se cancela de forma segura al desarmar, cambiar de modo, activar SOS/alarma, recargar, descargar la integración o recibir un horario de desarmado.

## Compatibilidad

Los sensores omitidos siguen excluidos en todas las decisiones: no bloquean ni participan en la espera, y mantienen su telemetría y automatizaciones. Las configuraciones existentes mantienen el resultado previo: `require_closed: true` equivale a bloquear y `false` a permitir hasta guardar una política nueva.

MQTT, presencia y horarios pasan ahora por el flujo común de armado, por lo que reciben la misma protección y comportamiento que el panel y los servicios de Home Assistant/HomeKit.
