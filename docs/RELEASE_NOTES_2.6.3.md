# Argus Home Hub v2.6.3 — Emblemas 3D y correcciones de armado

Fecha: 7 de octubre de 2026.

## Cambios

- Reemplazar la ilustración del emblema por tres escenas WebGL interactivas: Núcleo de seguridad circular, Escudo de cristal y Emblema Argus facetados. Se conserva el selector por perfil y el Núcleo como opción predeterminada.
- Añadir materiales con volumen, reflejos, iluminación y color dinámico para desarmado (verde), casa (naranja), ausente (rojo), noche (azul) y alerta (rojo).
- Animar la inclinación con el puntero, cambios de estado, rotación del núcleo y ondas con sacudida visual para aperturas y SOS.
- Reducir el trabajo gráfico limitando la densidad de píxeles y los cuadros por segundo, pausando el dibujo si la página está oculta o fuera de pantalla, y quitando animaciones con movimiento reducido o modo de rendimiento esencial. Si WebGL falla, se conserva el emblema vectorial accesible.
- Corregir el modo Casa para que una lista configurada vacía no herede sensores de otros modos, ejecutar una sola vez el comando de armado y validar usando la entidad de alarma elegida.

## Compatibilidad

La escena necesita WebGL disponible en el navegador. En dispositivos antiguos o con aceleración gráfica limitada se usará el emblema vectorial alternativo si no se puede crear el contexto. Los efectos de SOS son visuales; no activan el vibrador físico del teléfono.

## Validación

TypeScript, compilación frontend, pruebas automatizadas del proyecto y renderizado Chromium local. La revisión en Home Assistant y Echo Show físico queda pendiente de instalación de esta versión.
