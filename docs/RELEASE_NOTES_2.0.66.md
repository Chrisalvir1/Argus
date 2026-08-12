# Argus v2.0.66 — WebGL2 y reparación visual

## Cambios
- El clima se renderiza por completo en un único canvas WebGL2 con shaders GLSL ES 3.00.
- El shader incluye cielo día/noche, sol, luna, estrellas, nubes volumétricas FBM, lluvia, nieve, niebla, relámpagos y aurora.
- Eliminadas las capas CSS atmosféricas del HTML generado; `_renderAtmosphere` devuelve solo contenedor y canvas.
- Render limitado a 24–30 FPS, DPR reducido, pausa fuera de pantalla y soporte de movimiento reducido para wall panels.
- Reparado el botón de selección de acciones SOS y la persistencia al eliminar accesorios.
- Contenedores unificados con Liquid Glass y contraste legible en modo claro y oscuro.
- Desactivadas las animaciones CSS del panel; WebGL2 queda como único sistema atmosférico animado.
