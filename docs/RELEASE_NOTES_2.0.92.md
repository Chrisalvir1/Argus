# Argus v2.0.92 — Bug Fix Release

## Fixed
- **UI Freeze / MutationObserver Loop (#1):** Se detuvo el bucle de congelamiento de UI debounceando el MutationObserver y eliminando la observación `subtree`.
- **CSP — Import de CDN Lit (#2):** Se eliminó el import de CDN de Lit que violaba la Content Security Policy.
- **Tema Oscuro por defecto (#3):** Se corrigió el tema oscuro que no se aplicaba correctamente al cargar la app.
- **Persistencia del selector de idioma (#7):** Se corrigió la persistencia de la selección de idioma entre sesiones.
