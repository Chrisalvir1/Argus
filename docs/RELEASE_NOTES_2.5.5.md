# Argus Home Hub v2.5.5 — Authentic macOS Boot Progress & Offline Connection Guard

**Release date:** October 2, 2026  
**Previous release:** [v2.5.4](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.4)

This release transforms the startup bootloader into an authentic, state-driven Apple macOS boot experience. The progress bar no longer loops endlessly when Home Assistant is offline, pauses accurately during disconnections, and only completes and reveals Argus when Home Assistant is actually connected and ready.

## Fixes & Improvements

- **No More Infinite Looping:** Replaced the infinite CSS looping animation with a state-driven progress bar that tracks the real initialization stages of Home Assistant and Argus.
- **Offline Connection Detection:** When Home Assistant loses connection ("Conexión perdida. Reconectando..."), the progress bar halts immediately instead of fake-loading, displays a clear status message ("Sin conexión con Home Assistant"), and provides a one-click "Refrescar" action.
- **Smooth 100% Reveal (macOS Style):** When Home Assistant is connected and Argus finishes loading the profiles or dashboard, the bar glides smoothly to 100%, pauses briefly for the authentic macOS finish, and crisp-fades into the profile selector or security console.
- **Dynamic Reconnection:** Automatically resumes boot progress when the Home Assistant WebSocket reconnects in the background.

## Actualización

Actualización del sistema de arranque estilo macOS y control de desconexión:

- **Barra de arranque real (sin bucles infinitos):** Se eliminó la animación en bucle infinito. La barra ahora refleja el progreso real de conexión y carga de Argus.
- **Detección de estado sin conexión:** Si Home Assistant está desconectado o pierde conexión, la barra se detiene de inmediato (no se queda cargando y cargando), muestra el aviso "Sin conexión con Home Assistant" y ofrece el botón "Refrescar".
- **Completado rápido a 100% y entrada:** Cuando Home Assistant tiene conexión y los perfiles o el panel están listos, la barra se llena de forma fluida hasta el 100% y da paso inmediato a los perfiles o a Argus.
- **Reconexión automática:** Si la conexión de HA vuelve en segundo plano, la barra reanuda la carga automáticamente sin necesidad de recargar.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
