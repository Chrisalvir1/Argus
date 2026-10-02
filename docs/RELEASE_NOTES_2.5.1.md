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
- Refined visual rendering for unavailable/unknown sensors with aligned SVG alerts and dashed borders.

## Actualización

Actualización correctiva y evolutiva para Argus:

- Se actualiza la consola en tiempo real al cambiar el estado o batería de los sensores.
- Se eliminan del panel el widget del plano y la actividad diaria, sanitizando diseños guardados.
- Se elimina por completo el modo "Vacaciones" en toda la plataforma, migrando configuraciones antiguas hacia "Ausente" de forma segura.
- Se restaura el logo original de Argus en reportes PDF y se corrige la zona horaria (UTC-6 Costa Rica).
- **Prueba de Sensores (Walk Test):** Modo de prueba sin sirenas con temporizador, barra de progreso, registro forense y aviso sonoro (chime).
- **Retardo individual por sensor:** Disparo instantáneo (0s), retardos personalizados y distintivos interactivos en los chips de sensor.
- Mejoras de visualización para sensores no disponibles.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
