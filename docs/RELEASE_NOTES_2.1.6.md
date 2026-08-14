# Argus v2.1.6 — Real-time i18n, Pure RGB Color Accuracy, Spacious SOS UI & Centered Edit Modals

## Highlights & Fixes

- **Instant Real-Time UI Localization:**
  - Selecting any language now immediately re-renders all instance status badges, mode buttons, dropdown menus, and titles in real time without requiring page refreshes or re-login.
- **Robust 12h / 24h Clock Consistency:**
  - Time formatting is now fully deterministic across all locales, eliminating locale-specific quirks in non-English languages (e.g. Spanish, French, Russian) and preventing background ticker resets.
- **Accurate Physical Light Colors in SOS & Mode Sirens:**
  - Fixed brightness pulsing and light color commands to send pure, unscaled RGB values directly to Home Assistant `light.turn_on` service while pulsing only `brightness_pct`.
  - Lights accurately reflect their selected Home Assistant colors (e.g. Pure Red) during testing and alarm activation.
- **Mode Sirens Full Color & Flash Support:**
  - Light sirens configured under any Mode (Home, Away, Night, Vacation) now clearly display their color picker, flash options, and safe flash test button.
- **Spacious SOS Configuration Layout:**
  - Relocated and compacted the Emergency Number input into a sleek top header pill.
  - SOS device configuration cards now utilize an expanded, responsive grid (`minmax(280px, 1fr)`) with full visibility for device names, color pickers, and flash options.
- **Full-Screen Centered Edit Modals:**
  - Fixed the user edit name and permissions dialogs to attach directly to the document root, eliminating containment clipping and dark offset shadow artifacts.
