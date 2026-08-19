# Release Notes - Argus v2.2.44

## Highlights
- **Aislamiento Total en Pantalla Completa (Full Screen Clean Isolation)**:
  - Se eliminan por completo encabezados de widgets ("PANEL DE SEGURIDAD ARGUS"), barras de herramientas, bordes externos y contenedores redundantes en modo pantalla completa.
  - La consola de seguridad ocupa el lienzo limpio sin marcos molestos en cualquier dispositivo.
- **Optimización Integral para iPhone y Android (Vertical y Horizontal)**:
  - **Horizontal / Landscape**: Distribución balanceada de 3 columnas (Modos, Escudo, Sensores) con proporciones y tipografía calibradas para evitar truncamientos y solapamientos.
  - **Vertical / Portrait**: Distribución vertical limpia y optimizada (HUD superior, Escudo centrado, Fila de 3 modos, Deslizador SOS y Sensores).
- **Cero Solapamiento en el HUD**:
  - `● Conectado` y `SISTEMA DESARMADO` cuentan con anchos y espaciados dinámicos con `clamp()`, garantizando que nunca se toquen ni se superpongan en pantallas estrechas.
- **Rendimiento Acelerado a 60 FPS / 120 FPS ProMotion & Gama HDR**:
  - Capas aceleradas por hardware GPU (`translate3d(0, 0, 0)`, `backface-visibility: hidden`).
  - Paleta Wide Gamut Display P3 adaptada a pantallas OLED Super Retina XDR y AMOLED.
