# Argus v2.0.62 — Patch Release

## Fixed
- Selectores de Temperatura Mostrada y Fuente de Clima ahora guardan correctamente al cambiar.
- SOS modal: `pointer-events` ahora siempre activos cuando el modal está abierto.
- Liquid Glass: especificidad CSS corregida (`.glass.liquid-glass` > `.glass`).
- Animación del escudo SVG de instancias: IDs únicos deterministicos evitan bucle de re-render.
- WebGL shader: guard `if (!gl) return` en ciclo de animación previene crash con canvas no inicializado.
