# Argus Home Hub v2.0.22 — Perímetro en cierre localizado

Argus v2.0.22 mejora la experiencia visible de armado pendiente sin cambiar la lógica de seguridad validada.

## Escudo de armado

- Durante una espera por sensores, el escudo SVG muestra **Perímetro en cierre** con el modo destino, un aro ámbar, una puerta asegurándose, el conteo de accesos abiertos y hasta dos sensores (más los restantes).
- Al cerrar el último sensor bloqueante, el escudo transiciona brevemente al modo armado solicitado.
- Un retardo normal de armado es una variante separada: **Armado en curso**, icono de reloj y sin lista de sensores.
- La animación respeta la preferencia del sistema para reducir movimiento.

## Configuración y compatibilidad

- **Bloquear si abiertos** es la única fuente visible de bloqueo.
- El selector de sensores abiertos sólo permite **Permitir armado** o **Esperar a que cierren**.
- Los sensores omitidos continúan fuera de cualquier bloqueo o espera, sin alterar su telemetría ni automatizaciones.
- Las exportaciones antiguas con `open_sensors_policy: block` siguen bloqueando y se normalizan a `require_closed: true` al volver a guardar.
- Argus gestiona estos modos desde la UI; no requiere YAML. El formato de referencia de exportación se documenta en [OPEN_SENSOR_ARMING.md](OPEN_SENSOR_ARMING.md).

## Idiomas y validación

Los nuevos textos de configuración, espera, conteos y retardo están localizados para español, inglés, francés, portugués, italiano, chino y ruso. La publicación se valida con la suite completa, JSON de traducciones, compilación Python, sintaxis JavaScript y revisión de espacios Git.
