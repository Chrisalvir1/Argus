# Argus v2.0.70 — Patch Release

## Fixed
- **Widgets de Tablero Translúcidos:** Se corrigió el archivo CSS de React (`style.css`) para que los elementos `.argus-widget` adopten el fondo translúcido esmerilado de Liquid Glass de manera predeterminada y robusta, en lugar del fondo gris oscuro opaco previo.
- **Contraste de Credenciales/Distintivos en Control de Acceso:** Rediseñados todos los distintivos de usuario (`.user-badge`) con paletas profesionales y alta legibilidad:
  - El rol **Administrador** ahora es un dorado elegante y discreto.
  - La **cuenta vinculada de Home Assistant** cambió de morado chillón a un tono lavanda suave con alta legibilidad en temas claro y oscuro.
  - Los estados de **PIN** y **fechas de expiración** tienen colores consistentes, sutiles y serios que adaptan su opacidad e intensidad al fondo del clima (día/noche).
