# Argus v2.0.65 — Patch Release

## Fixed
- Corregido el guardado de ajustes de personalización (formato de reloj y otros) que fallaba al inicializar el objeto `_ui` por primera vez.
- Modal de emergencia (SOS) ahora auto-guarda los dispositivos seleccionados al presionar Listo, sin requerir click adicional en el botón Guardar global.
- Corregido el fondo del panel de instancias activas (Liquid Glass) para que se muestre como cristal translúcido en lugar de un gris opaco.
- Cambiado el formato de fecha en el registro de actividad para ser más compacto y legible (DD/MM en lugar de texto localizado largo).
- Las nubes y sol estáticos de CSS reducen su opacidad cuando las animaciones WebGL están en uso, permitiendo observar claramente los efectos volumétricos como los rayos de sol.
