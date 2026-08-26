# Argus v2.2.89 — Dashboard Visual Alignment & Dark Glassmorphism Parity

## Fixed
- **Dashboard Visual Parity & Dark Glassmorphism:** Fully aligned the security panel card embedded in Home Assistant Lovelace Dashboards with the dedicated Argus Home Hub sidebar experience.
- **Isolated Dark Base Glass Base:** Enforced solid dark glassmorphism styling (`linear-gradient(135deg, rgba(16, 23, 38, 0.95), rgba(10, 15, 26, 0.98))`), eliminating white-on-white text washouts in light-themed dashboards.
- **Horizontal 3-Column Mode Buttons & Full-Width SOS:** Arranged mode buttons (`En Casa`, `Ausente`, `Noche`) into a 3-column row with full-width SOS slider below them, preventing vertical collapse and button label clipping (`Desliz...`).
- **Structured HUD & Sensor Capsules:** Realaligned the top HUD bar with 3 dark capsules (Location, Connection, Alarm State) and styled sensors with high-contrast pill badges.
