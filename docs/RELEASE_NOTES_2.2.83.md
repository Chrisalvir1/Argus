# Argus v2.2.83 — Mobile Fullscreen Audit, Rec.2020/Display-P3 HDR, 120Hz Apple ProMotion & Legacy WebGL Purge

## Added & Improved
- **Rec. 2020 / Display P3 / HDR / HLG Color Spaces:** Deep wide-gamut dynamic range rendering for intelligent shield SVG, alert states, and sensor icons on compatible displays.
- **Apple ProMotion (120Hz) & 60Hz Hardware Acceleration:** Optimized GPU rendering via 3D transforms (`translate3d`, `scale3d`) without artificial framerate limits.

## Fixed
- **Mobile Fullscreen Black Screen:** Enforced forced re-rendering across fullscreen transitions to bypass stale render signatures.
- **Shadow DOM Fullscreen Exit (✕ Button):** Delegated native fullscreen requests to host element, fixing mobile event delivery and PIN exit flows.
- **Phantom Sensor Battery Alerts:** Filtered battery alerts strictly to sensors actively assigned to configured Argus modes.
- **Mobile HUD Styling & Scroll Freeze:** Replaced dark wrapper background with transparent flex layout and cleaned up body scroll locks upon unmount.
- **Legacy WebGL Weather Purge:** Completely removed obsolete background weather loops and shaders for massive GPU/CPU resource savings.
