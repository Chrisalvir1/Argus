# Argus v2.0.63 — Patch Release

## Fixed
- Hero clock respects 12h/24h format setting via `_formatTime()`.
- `clock_format` is now saved and loaded correctly from HA UI config.
- Clock format selector added to personalization panel.
- Liquid Glass effect fully restored: blur(28px) saturate(180%) with correct inset highlight.

## Enhanced
- Weather WebGL animations: wind-angled rain (4 depth layers), asymmetric lightning, snow with per-flake rotation + accumulation, volumetric fog, star twinkle + shooting stars, aurora borealis effect for cold clear nights, sun god rays, heat shimmer above 30°C.
