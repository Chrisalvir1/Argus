# Release Notes - Argus v2.2.42

## Highlights
- **Simetría Geométrica Perfecta en el HUD Superior**:
  - Píldora central de conexión (`● Conectado`) posicionada con precisión matemática exacta al centro geométrico del panel (`left: 50%; transform: translate(-50%, -50%)`).
  - Las 3 píldoras informativas (`🏡 Hogar`, `● Conectado`, `SISTEMA ESTADO`) comparten altura unificada de 38px, radios continuos y alineación perfecta sin desplazamientos asimétricos.
  - El botón de salida `✕` cuenta con espaciado balanceado de 84px respecto a la insignia del hogar.
- **Transición Suave y Acelerada a 60 FPS / 100 Hz / 120 Hz**:
  - Eliminados los tirones y estiramientos al entrar o salir de pantalla completa.
  - La transición de escala y opacidad utiliza aceleración GPU en 3D (`transform: translate3d(0, 0, 0)`), evitando reconstrucciones destructivas del DOM en mitad del ciclo de redimensionamiento.
- **Gráficos HDR y Gama Amplia Display P3**:
  - Integrada compatibilidad con perfiles de color HDR / Wide Gamut Display P3 (`color(display-p3 ...)`).
  - Resplandor y halo luminoso multicapa en el escudo central (`drop-shadow` de alta saturación y reflejo especular interior en blanco puro).
  - Fondo cósmico de contraste OLED ultra profundo.
