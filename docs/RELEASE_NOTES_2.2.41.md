# Release Notes - Argus v2.2.41

## Highlights
- **Perfeccionamiento de Pantalla Completa (16:9 & Kiosco)**:
  - Consola de seguridad en pantalla completa adaptada con relación de aspecto **16:9** y curvatura continua perfecta de 36px en las 4 esquinas.
  - Marco envolvente con efecto cristal líquido y difuminado de fondo sin deformaciones ni cortes asimétricos.
- **Botones de Modo Claros y Legibles**:
  - Rediseño de los botones de modo (`En casa`, `Ausente`, `Noche`) con icono superior y texto completo inferior centrado, evitando textos truncados (`E...`, `A...`, `N...`).
  - Ancho ampliado y distribución balanceada de 3 columnas con retroalimentación luminosa activa.
- **Botón de Salida (X) y Reingreso (⛶) sin Duplicados ni Solapamientos**:
  - Eliminado el solapamiento del botón de salida `✕` sobre el badge del nombre del hogar.
  - Al salir de pantalla completa, el botón `✕` desaparece de inmediato y se restaura limpiamente el botón de pantalla completa `⛶` sin dejar elementos fantasma.
- **Transiciones Suaves a 60 FPS y Gráficos HDR**:
  - Eliminados los parpadeos y saltos de layout al entrar o salir de pantalla completa mediante animaciones CSS aceleradas por hardware (`transform: translateZ(0)`).
  - Escudo central con gradientes OLED HDR, resplandor ambiental multicapa y reflejos especulares de alto contraste.
