# Argus v2.0.67 — Patch Release

## Refactor
- Migración a LitElement (\`argus-weather-panel\`) con fotorrealismo HDR y físicas atmosféricas.
- Renderizado WebGL2 con soporte HDR y color Display-P3 (aces film).
- Parallax interactivo (giroscopio/mouse) para cielo y nubes 3D.
- Screen-space refraction procedural para colisiones de lluvia pesada.
- Interpolación (Lerp) exponencial para transiciones suaves de clima.
- Optimizado para 60 FPS fijos sin VBOs, usando un *Framebuffer* fraccionado y un triángulo expandido.
