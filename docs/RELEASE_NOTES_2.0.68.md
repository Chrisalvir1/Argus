# Argus v2.0.68 — Patch Release

## Fixed
- **Legibilidad y Contraste Adaptativos:** Textos, etiquetas y selectores se adaptan dinámicamente al fondo del cielo: color negro/gris oscuro durante el día (cielo claro) y blanco/gris claro durante la noche (cielo oscuro) para máxima legibilidad.
- **Selector de Formato de Hora:** Resuelto el problema de doble renderizado y solapamiento del texto al remover la duplicidad del script de legado.
- **Selectores de Navegador:** Se forzó un color de fondo sólido en las opciones del menú desplegable para corregir el bug de WebKit/Blink donde el texto blanco se hacía invisible sobre fondo blanco.
- **Acciones SOS (Pánico):** Corregido el enlace del botón de selección de accesorios; ahora abre de manera exitosa el modal de selección de entidades en Home Assistant.
- **Perfil de Rendimiento:** Removido el indicador y badge de "Equilibrado (detectado automáticamente)" en la vista avanzada.
