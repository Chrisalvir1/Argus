# Argus v2.2.86 — Mobile Fullscreen Stage Removal, Centered Conectado HUD, 3x3 Grid & Strict Mode Battery Alerts

## Fixed & Enhanced
- **Mobile Fullscreen Takeover Fix:** Completely eliminated blank/black screen in mobile vertical and horizontal fullscreen by removing obsolete `#argus-fullscreen-stage` overlay and legacy viewport styles.
- **Strict Mode Sensor Battery Alerts:** Battery warnings strictly evaluate ONLY sensors currently configured in active modes (`home`, `away`, `night`). Unselected devices or locks (e.g. smart locks) are never checked for battery alerts.
- **3x3 Grid Alignment:** Perfect 3-column × 2-row layout with `🟢 CONECTADO` mathematically and visually centered directly above the central shield SVG on the top HUD line.
- **Dark Shadow Removal:** Removed unwanted dark background shadows and box borders behind the home name, conectado pill, system status badge, and live sensor chips.
