## Argus v1.4.3 — Bugfix de Interfaz, Rendimiento y Liquid Glass

### 🐛 Correcciones en esta versión

- **Restauración de Liquid Glass:** Se corrige un problema en modo claro donde las tarjetas se volvían paneles opacos blancos al usar el fondo predeterminado. Ahora las tarjetas mantienen su estética Liquid Glass oscura y translúcida original con fondo predeterminado, y adaptan su contraste correctamente cuando se usan fondos personalizados claros.
- **Rendimiento del Historial:** La obtención del historial de eventos (`argus/get_audit_log`) ya no bloquea la carga principal del panel. Se carga de forma asíncrona mejorando el tiempo de respuesta inicial.
- **Robustez en Pestañas de Modos:** Mejorada la validación de configuraciones antiguas para evitar problemas de renderizado en los sensores vinculados, garantizando la altura mínima y regeneración de pestañas.

