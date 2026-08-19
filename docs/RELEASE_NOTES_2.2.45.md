# Release Notes - Argus v2.2.45

## Highlights
- **Teletransportación de Escenario de Pantalla Completa (Zero-Leak Stage)**:
  - Al activar pantalla completa, la consola de seguridad se monta directamente en un contenedor raíz `#argus-fullscreen-stage` en `shadowRoot`.
  - Se elimina cualquier interferencia de `transform`, `overflow` o encabezados heredados de React Grid Layout ("PANEL DE SEGURIDAD ARGUS").
- **Eliminación del Hueco en Botones de Modos (3 Columnas Dinámicas)**:
  - Se eliminaron las reglas obsoletas de 2 columnas. Los modos (`En Casa`, `Ausente`, `Noche`) se organizan dinámicamente en 3 columnas iguales (`grid-template-columns: repeat(3, minmax(0, 1fr))`), adaptándose con el botón `Desarmar` / `SOS` a pantalla completa sin dejar huecos vacíos.
- **HUD No Desbordante en Vista Vertical Móvil**:
  - `🏡 Hogar` y `● Conectado` comparten la primera fila superior con anchos flexibles y elipsis, mientras que `SISTEMA DESARMADO` se sitúa centrado inmediatamente debajo, sin salirse del borde de la pantalla.
- **Rendimiento 60 FPS / 120 FPS y Display P3 HDR en Móviles**:
  - Aceleración por hardware GPU en todas las capas del panel con paleta Display P3 calibrada para pantallas OLED Super Retina XDR y AMOLED.
