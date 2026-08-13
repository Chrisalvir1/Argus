# Argus v2.0.82 — Patch Release

## Fixed

### Prevención de Freeze UI (Multi-tap)
- **Selector de perfiles**: Se agregó un guard contra clics/taps múltiples. Si el usuario hace *double tap* rápido sobre un perfil, la interfaz ya no se queda congelada detrás del overlay sin que cargue el dashboard.
- **PIN tvOS**: De igual forma, el ingreso del PIN y confirmación bloquea los clicks/enters adicionales mientras procesa, evitando doble validación o desvanecimiento doble del UI.
