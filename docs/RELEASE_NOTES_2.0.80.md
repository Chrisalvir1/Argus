# Argus v2.0.80 — Patch Release

## Fixed

### Fullscreen en móvil y tableta
- El modo fullscreen de instancias activas ahora cubre toda la pantalla en iOS y Android sin recortes.
- Usa `position: fixed`, `inset: 0`, `100dvh` y `env(safe-area-inset-*)` para respetar el notch y la barra home.
- En tablets/desktop ≥900px mantiene el estilo flotante con 3% de margen y border-radius.
- Se eliminó el conflicto entre `100vh` y `100dvh` que causaba el recorte inferior en iOS Safari.

### Animaciones climáticas
- **Nubes**: Reemplazadas las esferas duras (`dot(d,d)`) por falloff gaussiano con bordes fbm — aspecto esponjoso real.
- **Lluvia**: Intensidad aumentada 20% y color más azulado para mayor visibilidad.
- **Sol diurno**: Brillo atmosférico mejorado con gradiente suavizado.
- **CSS clouds**: `.wx-cloudfield` ahora se oculta completamente cuando el shader WebGL está activo (antes se superponían).

### Canvas WebGL en móvil
- Inicialización vía `ResizeObserver` garantiza que el canvas tiene dimensiones reales antes de compilar/correr el shader.
- Guard `_argusWebglInit` previene doble inicialización.

### GitHub Actions — Release workflow
- Requerimiento de Python flexibilizado a `≥3.11` (el check exacto `3.14.2` fallaba porque esa versión exacta no está disponible en los runners de GitHub Actions).
