# Argus Home Hub v2.5.3 — Compact UI & Tuya Local Sensor Fix

**Release date:** October 1, 2026
**Previous release:** [v2.5.2](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.2)

This release makes sensor chips compact and snappy, accelerates profile selection entry, fixes entity state resolution for Omni Tuya Local sensors, and adds support for the boolean/string state representations used by Tuya Local integrations.

## Fixes & Improvements

- **Compact Sensor Chips:** Reduced sensor pill height from 48px to 34px with tighter padding, smaller icons and lock graphics — a dense, information-rich layout without wasted whitespace.
- **Omni Tuya Local Sensor Support:** Argus now correctly reads sensor states reported by Tuya Local / Omni Tuya Local integrations, including `"true"/"false"`, `"1"/"0"`, `"detected"`, `"tamper"`, and `"vibration"` — preventing false "No disponible" displays for correctly connected sensors.
- **Robust Entity Resolution:** Added `_getEntityState()` helper with case-insensitive and linear-scan fallbacks so sensors configured with any capitalization variation are correctly resolved from Home Assistant.
- **Snappy Profile Selection:** Reduced profile selection and welcome animation from ~2.4 seconds to ~550ms with instant tactile feedback on avatar click.
- **Apple macOS Boot Screen:** Cold-boot splash now shows the official Argus logo and an Apple-style progress bar instead of the legacy shield icon.

## Actualización

Actualización correctiva de sensores y UI compacta para Argus:

- **Sensores Omni Tuya Local:** Argus ahora lee correctamente los estados de sensores de la integración Tuya Local/Omni Tuya Local, incluyendo `"true"/"false"`, `"1"/"0"`, `"detected"`, `"tamper"` y `"vibration"`, eliminando la visualización falsa de "No disponible" en sensores correctamente conectados.
- **Chips de sensores compactos:** Pastillas de sensor reducidas de 48px a 34px de alto con padding ajustado, íconos más pequeños y diseño denso y elegante sin espacio vacío.
- **Resolución robusta de entidades:** Helper `_getEntityState()` con búsqueda insensible a mayúsculas para que sensores configurados con cualquier variación de capitalización sean resueltos correctamente.
- **Entrada de perfil ultrarrápida:** Transición de selección de perfil reducida de ~2.4s a ~550ms con respuesta táctil inmediata.
- **Pantalla de arranque estilo macOS:** Reemplazado el escudo legacy por el logotipo oficial de Argus y barra de progreso estilo Apple al encender o refrescar.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
