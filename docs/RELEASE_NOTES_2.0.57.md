# Argus Home Hub v2.0.57

## Corrección crítica de armado

- El watchdog que reevalúa los sensores ahora programa su trabajo de forma segura desde el hilo de Home Assistant.
- Al cerrar el último sensor bloqueante, Argus puede completar el armado en lugar de quedarse permanentemente en espera.

## Validación

- Incluye una regresión que evita volver a llamar a la API de tareas no segura desde el watchdog.
