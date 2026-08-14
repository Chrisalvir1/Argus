# Argus v2.1.7 — Exact Physical Light Colors & Instant Mode Buttons i18n

## Fixed
- **Exact Light Physical Color & Flash:** Prevented vendor scene presets (such as Govee/Wiz built-in effects or hardware flash flags that defaulted to green) from overriding user-selected RGB colors. When testing or triggering alarm/SOS lights with a chosen color (e.g. Red), the system sends pure `rgb_color` and pulses brightness safely between 100% and 20% without changing the color.
- **Immediate Real-Time Mode Buttons Localization:** Language changes instantly translate mode buttons (`EN CASA`, `AUSENTE`, `NOCHE`, `VACACIONES`, `DESARMAR / OFF`, `SISTEMA DESARMADO`) and status badges across all instances without requiring a browser refresh or session reload.
- **Top-Level Template Crash Fix:** Removed top-level module template references preventing custom element startup crashes and black screen.
