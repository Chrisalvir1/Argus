# Argus Home Hub v2.5.4 — Snug Sensor Chips & Void Gap Elimination

**Release date:** October 1, 2026  
**Previous release:** [v2.5.3](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.3)

This release eliminates excessive empty space in the security console sensor chips, making them hug their content snugly with zero void gap between sensor names and status labels.

## Fixes & Improvements

- **Zero-Void Sensor Pills:** Eliminated the huge empty void between sensor names and state labels by replacing `space-between` and `margin-left: auto` with a tight, natural `flex-start` layout (`gap: 8px`).
- **Snug `fit-content` Sizing:** Sensor pills now automatically size to `fit-content` instead of being stretched across 440px, keeping every capsule compact, clean, and balanced.
- **Aligned Layout:** Sensor chips align neatly to the right edge under the system status badge on desktop, and center compactly on mobile screens.
- **Omni Tuya Local Compatibility:** Retained full native recognition for Tuya Local / Omni Tuya Local state values (`"true"`, `"false"`, `"1"`, `"0"`, `"detected"`, `"tamper"`, `"vibration"`) in both backend and frontend.

## Actualización

Actualización de refinamiento visual y eliminación de vacíos en sensores:

- **Pastillas de sensores ceñidas sin vacíos:** Se eliminó por completo el gran espacio vacío entre el nombre del sensor y su estado (`ABIERTO` / `CERRADO` / `No disponible`), agrupándolos de forma natural con una separación de 8px.
- **Tamaño `fit-content` inteligente:** Las pastillas de sensor ahora miden exactamente lo que ocupa su contenido, sin estirarse a 440px en pantallas anchas.
- **Alineación equilibrada:** Los sensores se alinean ordenadamente a la derecha bajo el indicador de estado del sistema en escritorio y se centran con elegancia en móviles.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
