# Argus v2.0.75 — Patch Release

## Fixed
- **Dynamic Theme Adaptiveness**: Toggle `.daytime-theme` class on the host element dynamically based on background image brightness so light/dark text overrides apply properly.
- **Active Instance Animations**: Exclude active instance elements (SVG shield, mode buttons, SOS button) from the global animation killer rule to restore their original floating, pulsing, and glowing movements.
- **Profile Picture & Change Profile Link**: Render the user's profile avatar inside the top-bar profile dropdown header and add a "Cambiar imagen ↗" link pointing to HA native profile settings.
- **SOS Action Buttons Contrast**: Overwrote low contrast buttons ("Limpiar" and "Aceptar") style overrides to keep them readable across both dark and light modes.
- **Access Badges Contrast**: Replaced neon purple badges with soft, high-contrast, modern visual styles.
- **Snappier Transition**: Reduced the welcome card flight delay from 1.4s to 650ms and the flight transition to 450ms for a smoother, iOS-style entry.
