# Argus v2.0.86 — Patch Release

## Fixed

### Blur permanente — Causa raíz final identificada

El elemento `#bootstrap-overlay` (`.argus-bootstrap-layer`) era el verdadero culpable:

1. Tiene `backdrop-filter: blur(20px)` + `position: fixed`
2. **NUNCA se elimina del DOM** — solo se oculta con `display:none`
3. En WebKit, un compositor layer creado por `backdrop-filter` puede persistir incluso cuando el elemento está en `display:none` bajo ciertas condiciones de render

**Cambios:**
- Eliminado `backdrop-filter` del CSS de `.argus-bootstrap-layer`
- `_nukeAllLoginOverlays()` ahora también limpia `backdropFilter` del `#bootstrap-overlay` via JS inline
- Los tres overlays de login (`argus-profile-overlay`, `argus-welcome-screen`, `argus-pin-prompt`) ya no tenían `backdrop-filter` desde v2.0.85
