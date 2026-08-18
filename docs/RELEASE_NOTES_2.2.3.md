# Argus v2.2.3 — Perfeccionamiento de Lovelace Cards y Limpieza Visual

## 🔧 Cambios y Mejoras

### 🗑️ Limpieza del Badge de Estado Duplicado
- Eliminado completamente el contenedor de estado `#global-status` de la cabecera exterior.
- El indicador de estado (`SISTEMA DESARMADO`, `SISTEMA ARMADO · CASA`, etc.) ahora vive únicamente dentro del cristal HUD de la consola activa (`.console-hud`), con colores reactivos por modo y traducción a los 13 idiomas.

### 🛡️ Disponibilidad Inmediata en Dashboards de Home Assistant
- **Auto-registro de recursos Lovelace:** Home Assistant ahora auto-registra el script de Argus en `lovelace.resources` en el inicio.
- **Tarjetas unificadas:** Tanto `argus-panel-card` como `argus-card` renderizan el panel completo con:
  - Selector de entidad automático (cero YAML).
  - Selector visual de modo (*Panel Completo* vs *Compacto*).
  - Botón de pantalla completa (`⛶` / `✕`) para quioscos y tablets.
