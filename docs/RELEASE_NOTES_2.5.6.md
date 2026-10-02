# Argus Home Hub v2.5.6 — Centered Security Console & Resilient Sensor Resolution

**Release date:** October 2, 2026  
**Previous release:** [v2.5.5](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.5)

This release brings perfect geometric centering to the Security Console on wide screens and desktop displays, while resolving persistent entity lookup issues for Omni Tuya Local door sensors (such as `sensor_puerta_de_bodega`).

## Fixes & Improvements

- **Centered Shield & Conectado Pill:** Rebuilt the Security Console 3-column desktop and container grid into a symmetrical `1fr auto 1fr` structure with `margin: 0 auto` and `justify-self: center`. The `CONECTADO` badge and central shield icon are mathematically locked at true 50% card center instead of being pushed left by sensor columns.
- **Resilient Omni Tuya Local Resolution:** Extended `_getEntityState` and `SecurityConsole.tsx` lookup to support multi-stage fuzzy resolution:
  - Exact and lowercase entity ID matching.
  - Variations stripping or adding `sensor_` prefixes and prepositions (`_de_`, `_del_`, `_la_`, `_el_`).
  - Domain swaps between `binary_sensor.` and `sensor.`.
  - Matching against Home Assistant `friendly_name` attributes.
  - Token-level matching (e.g. matching `bodega` across all binary sensors in HA).
- **Tuya Sleep State Recovery:** Added attribute fallback (`attributes.contact`, `attributes.door`, `attributes.opening`, `attributes.last_state`) for Tuya battery door sensors that go to sleep and report temporary offline states in local socket connections while preserving their true contact state in attributes.
- **Mode Fallback Coverage:** Added `disarmed` mode to the dashboard sensor fallback collection loop so sensors mapped under the Disarmed state are included consistently.

## Actualización

Actualización de centrado de consola y resolución resiliente de sensores Omni Tuya Local:

- **Escudo y Pastilla "CONECTADO" perfectamente centrados:** Se corrigió la cuadrícula del panel principal a `1fr auto 1fr`, asegurando que el estado "CONECTADO" y el escudo central estén 100% centrados geométricamente en la tarjeta en computadoras y pantallas anchas.
- **Detección del sensor de puerta de bodega (Omni Tuya Local):** Se integró un resolvedor multicapa que encuentra el sensor de bodega incluso si el ID en Home Assistant difiere ligeramente (`sensor_puerta_bodega`, `puerta_bodega`, o variaciones de prefijo/preposiciones), además de verificar atributos de contacto si el sensor entra en modo de reposo/ahorro de energía.
- **Inclusión del modo desarmado:** El ciclo de recolección de sensores del panel principal ahora incluye el modo `disarmed`.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
