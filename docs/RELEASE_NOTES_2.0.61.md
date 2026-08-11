# Argus Home Hub v2.0.61

## Correcciones TypeScript y estabilidad del shader

- **Fix TS18047**: Se resolvieron todos los errores de null-check en el canvas WebGL. Las referencias a `gl`, `canvas` y contextos derivados ahora tienen guardas explícitas antes de su uso.
- **Fix aridad firework()**: La llamada a `firework()` en `fireworksLayer` pasaba 5 argumentos cuando la función solo acepta 4. Se eliminó el argumento redundante `localT-localT` (siempre 0) que quedó de una sesión de depuración.
- **Tipado explícito de canvas**: `_initWeatherWebGL` ahora recibe `canvas: HTMLCanvasElement` explícitamente, eliminando ambigüedad de tipo en la firma.
- **Versión sincronizada**: `manifest.json` y `const.py` actualizados a `2.0.61` desde sus valores desincronizados anteriores (`2.0.60` y `2.0.57` respectivamente).

## Instalación

Actualiza desde HACS o descarga `argus.zip` de los assets de este release y copia `custom_components/argus/` a tu instancia de Home Assistant. Reinicia HA después de la actualización.
