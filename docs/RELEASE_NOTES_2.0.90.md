# Argus v2.0.90 — Hotfix Release

## Fixed
- **Animación del Perfil (Crash de Carga):** Se eliminó una llamada prematura a la limpieza de modales que destruía la pantalla de inicio de sesión antes de que terminara su animación. Esto causaba un error donde la interfaz de Argus quedaba congelada, vacía o tomaba demasiado tiempo en cargar después de hacer clic en un perfil.
- **Fondo de Panel con WebGL (Clima Animado):** Se implementó correctamente `ResizeObserver` para el lienzo WebGL cuando se usa como fondo general del panel. Anteriormente, si el fondo se inicializaba antes de que la pantalla terminara de cargar (dimensión 0x0), el clima no se renderizaba correctamente.
