# Argus v2.2.2 — Lovelace Card Automática & Liquid Glass Perfeccionado

## ✨ Nuevas Funciones / New Features

### 🛡️ Tarjeta Automática en Dashboards de Home Assistant (`argus-panel-card`)
- Registro directo en el catálogo de tarjetas visuales de Home Assistant (`window.customCards`).
- **Cero YAML:** Se añade con un clic desde la interfaz "+ Añadir tarjeta" y detecta automáticamente la entidad de alarma Argus.
- **Selector de modo visual:** Permite elegir entre vista de *Panel Completo* (dashboard interactivo, widgets, historial) o *Compacta* (solo la consola de seguridad de la instancia activa).

### ⛶ Modo Pantalla Completa Dedicado
- Botón flotante `⛶` en la esquina superior derecha de la tarjeta.
- Expande el panel a pantalla completa real (`100vw` × `100dvh`), ideal para tablets montadas en pared, teléfonos o quioscos.
- Soporte para tecla `Escape` y botón `✕` para salir fluidamente.

### 🏷️ Badge Dinámico de Estado en Instancias Activas
- Indicador pill en la barra HUD superior con actualización en tiempo real:
  - 🟢 `SISTEMA DESARMADO`
  - 🟡 `SISTEMA ARMADO · EN CASA`
  - 🔴 `SISTEMA ARMADO · AUSENTE`
  - 🔵 `SISTEMA ARMADO · NOCHE`
  - 🟣 `SISTEMA ARMADO · VACACIONES`
  - 🚨 `ALARMA ACTIVADA` (Pulsante)
- Completamente traducido a los 13 idiomas soportados.

### 📱 Slide-to-Action Estilo iOS (Slide to Power Off)
- Deslizador de seguridad con pista oscura de cristal líquido (`backdrop-filter: blur(32px)`).
- Tirador circular a la izquierda con íconos de candado y pánico.
- Máscara de texto con degradado y animación de resorte con rebote elástico.
- Deslizador de desarmado solo visible cuando el sistema está armado.
- Deslizador SOS con pulsación luminosa en estado activo.

## 🔧 Correcciones
- Eliminados los estilos inline `!important` en `argus-v2046-active-visuals.ts` que anulaban el acabado Liquid Glass de los botones.
- Resueltos conflictos de selectores CSS en `.btn-disarm`.
- Bundled `argus-panel-card` y `argus-card` en la compilación principal de TypeScript/Vite.
