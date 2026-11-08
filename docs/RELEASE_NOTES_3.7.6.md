# Argus Home Hub 3.7.6

Corrige la vista horizontal de fullscreen en iPhone. La regla de pantallas táctiles bajas activaba el emblema SVG también en horizontal; ahora girar el dispositivo conserva el núcleo de seguridad 3D original. El fallback SVG permanece disponible cuando Argus está en modo de rendimiento esencial o WebGL falla.

El panel horizontal respeta las áreas seguras laterales y verticales para que la isla dinámica y los bordes del dispositivo no tapen la casa, el estado de Argus ni los controles. Los indicadores muestran Zonas, Listas y Pendientes como títulos sobre sus cantidades, sin cápsulas interiores, y los encabezados dejan de quedar recortados.

Verificación local:76 pruebas frontend, TypeScript y build. Chromium con WebGL por software conserva el mismo canvas 3D al rotar hacia horizontal y volver a vertical; márgenes laterales de59px simulados, títulos y fallback esencial comprobados. Cinco recorridos de regresión del panel en Hub, Card, móvil, horizontal, escritorio y Echo Show simulado pasan. La comprobación simulada no sustituye una revisión física en Safari/iPhone o Echo Show.

Sin nuevas dependencias ni cambios a la geometría o los materiales del núcleo 3D. Actualizar la integración existente y recargar el dashboard después del reinicio habitual de Home Assistant.
