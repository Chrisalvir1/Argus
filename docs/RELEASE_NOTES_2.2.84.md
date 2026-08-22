# Argus v2.2.84 — Mobile Security Console Fullscreen, Rec.2020/Display-P3 HDR, 120Hz ProMotion & Legacy Root Purge

## Added & Improved
- **Full-Screen Security Console Takeover (Mobile & Desktop):** Fullscreen mode (⛶) exclusively expands the entire Security Console (shield, arm modes, live sensors, slide-to-disarm, slide-to-sos) across the entire viewport in both portrait vertical and landscape horizontal layouts with dedicated top HUD bar, touch scrolling, and ✕ exit button.
- **Wide-Gamut Rec.2020 / Display-P3 HDR & HLG Support:** High-dynamic-range color variables for shield SVG glow, status badges, and sensors.
- **Apple ProMotion (120Hz) & 60Hz GPU Composition:** Full GPU hardware acceleration using 3D transforms (`translate3d`, `scale3d`, `will-change`) without artificial framerate limits.

## Fixed & Cleaned
- **Pure React Security Console:** Eliminated legacy HTML templates; disarm slider (`Desliza para desarmar`) is strictly hidden when disarmed and only visible when armed.
- **Complete Legacy WebGL & Accordion Purge:** Completely removed obsolete WebGL weather animation loops and deleted the root `Más Ajustes / SOS (Avanzado)` drawer (SOS device settings reside inside MODOS).
- **Strict 5-Language Alignment:** Enforced localization exclusively to Spanish (`es`), English (`en`), Portuguese (`pt`), Russian (`ru`), and Chinese (`zh`).
- **Vacation Mode Purged:** Removed legacy vacation mode from the active console.
