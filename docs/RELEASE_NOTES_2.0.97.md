# Argus v2.0.97 — Core UI Stabilization

This patch addresses several UI and UX regressions reported by users:

1. **Disabled React Dashboard (Legacy Restore)**
   The experimental React Dashboard layer has been disabled. The frontend now exclusively uses the stable legacy DOM flexbox layout, removing the visual glitches and sudden resets that occurred during profile loads.
2. **Fixed Text Contrast**
   Corrected a CSS regression where text would appear black on dark backgrounds for users running a Home Assistant Light Theme. Text within Argus now correctly uses `#ffffff` when in dark mode.
3. **Restored Aesthetic Persistence**
   Aesthetic changes (such as custom background URLs and sound settings) now properly persist between page reloads. The websocket bootstrap payload has been updated to provide the frontend with all configured UI variables before the dashboard renders.
4. **Reverted Weather Presentation**
   Due to issues with the animated weather SVGs, the weather display has been reverted back to the reliable emoji-based system (`☀️`, `☁️`, `🌙`). The shield icon SVG remains untouched and functional.
