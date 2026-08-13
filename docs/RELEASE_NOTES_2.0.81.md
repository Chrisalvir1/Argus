# Argus v2.0.81 — Patch Release

## Fixed

### Animación de Clima (WebGL2)
- Se corrigió el escalado interno a 0.5x que causaba gráficos borrosos y pixelados. Ahora utiliza `window.devicePixelRatio` (con tope en 2.0x por rendimiento) ofreciendo fidelidad nativa tipo Apple Weather.
- Se resolvió el problema de colapso a 0px de altura envolviendo el `<argus-weather-panel>` en un contendor `position: relative`.
- El shader WebGL2 ahora inicializa directamente a las condiciones climáticas del momento, eliminando el "lag de amanecer" de 1.5 segundos.
- Un fallback preventivo de `requestAnimationFrame` arregló un bug donde el clima no se renderizaba porque el ResizeObserver no disparaba inicialmente con elementos sin tamaño en el shadow DOM.

### CI / Build System
- Actualizada la versión objetivo de Python a `3.12` en los tests (`test_v210_runtime_contract.py`) y en los Github Actions.
