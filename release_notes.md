# Argus v1.5.3 — Refined Interface & Local-First Recovery

Esta actualización refina la interfaz de usuario eliminando el Centro de Salud/Energía y el asistente Copilot, añade traducciones dinámicas a la fuente de clima y conserva internamente la recuperación local ante apagones y el registro forense.

### 🌟 Cambios en esta versión

- **Traducción de Clima:** La etiqueta y el estado de la fuente de clima seleccionada ahora se traducen dinámicamente al cambiar el idioma en el panel.
- **Simplificación:** Se ha removido el panel visual de Salud/Energía y el asistente inteligente Copilot local (junto con sus endpoints WebSocket correspondientes).
- **Recuperación Local y Forense:** Se mantiene la resiliencia local ante apagones, la recuperación del estado programado y la auditoría de la línea forense.
- **API de Extensiones:** Acceso WebSocket simplificado y documentado para desarrolladores ([docs/EXTENSIONS_API.md](file:///Users/chrisalvir/Desktop/GITHUB%20PROJECT/argus/docs/EXTENSIONS_API.md)).
