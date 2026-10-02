# Argus Home Hub v2.5.1 — Corrective & Feature Release

**Release date:** October 1, 2026  
**Previous release:** [v2.5.0](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.0)

This release addresses critical fixes (real-time sensor states, vacation mode removal, floorplan/insights cleanup, PDF export) and introduces key Alarmo-equivalent features (Sensor Walk Test and Per-Sensor Delays).

## Fixes & Improvements

- Refresh security-console sensor indicators and battery levels dynamically when Home Assistant updates a configured sensor state.
- Remove daily activity/security-insights and interactive floorplan widgets from dashboard; sanitize legacy saved layouts.
- Completely remove "Vacation" arming mode across UI, services, MQTT, and HomeKit, migrating legacy configs safely to away mode.
- Restore original Argus logo in activity-history PDF and fix Costa Rica UTC-6 date filters.
- **Sensor Walk Test:** Integrated test mode with countdown timer, sensor status tracking, audit logging, and Web Audio chime.
- **Per-Sensor Delays:** Instant triggers (0s), custom delays, and visual status badges on sensor chips.
- Refined visual rendering for unavailable/unknown sensors with aligned SVG alerts and synchronized status in Modos view.
- **Liquid Glass Clock & Balanced Chips:** High-tech Liquid Glass clock SVG icon on delay badges, balanced chip proportions with right-aligned status, and responsive max-width to eliminate empty void space in fullscreen.
- **High-Resolution PDF Logo:** Upgraded to high-definition 1024x1024 artwork positioned on the left side of the report header followed by report metadata, rendering at 384x384 ultra-sharp resolution.

## Actualización

Actualización correctiva y evolutiva para Argus:

- Se actualiza la consola en tiempo real al cambiar el estado o batería de los sensores.
- Se eliminan del panel el widget del plano y la actividad diaria, sanitizando diseños guardados.
- Se elimina por completo el modo "Vacaciones" en toda la plataforma, migrando configuraciones antiguas hacia "Ausente" de forma segura.
- Se restaura el logo original de Argus en reportes PDF en alta resolución (1024x1024), alineado a la izquierda junto a la información, y se corrige la zona horaria (UTC-6 Costa Rica).
- **Prueba de Sensores (Walk Test):** Modo de prueba sin sirenas con temporizador, barra de progreso, registro forense y aviso sonoro (chime).
- **Retardo individual por sensor con reloj Liquid Glass:** Icono 3D Liquid Glass para disparo instantáneo (0s) y retardos personalizados, sincronizado en el panel y en la vista de modos.
- **Diseño compacto y balanceado de sensores:** Estado alineado a la derecha y ancho acotado para eliminar el espacio vacío innecesario en pantalla completa.
- Sincronización precisa de sensores no disponibles entre la consola principal y la configuración de modos.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
