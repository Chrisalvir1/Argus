# Argus Home Hub v2.5.0 — Security, HAP & Dashboard Improvements

**Release date:** October 1, 2026  
**Previous release:** [v2.4.22](https://github.com/Chrisalvir1/Argus/releases/tag/v2.4.22)

Argus 2.5.0 brings a broad security and reliability review, clearer security dashboards, generic arming-transition data for compatible HAP adapters, and a proper localized PDF download for activity history.

## Highlights

### Arming state for compatible HAP adapters

Argus now exposes the arming transition and requested target as generic Home Assistant entity state and attributes. A compatible HAP adapter can use these to represent an arm request that is waiting for sensors or completing its exit delay, while continuing to expose the four Argus modes: **Disarmed, Home, Away, and Night**. HomeKit Bridge support remains available.

An adapter must map Argus's state and attributes to its own HAP characteristics; support depends on that adapter's implementation. This release does not claim automatic compatibility with every HAP or Matter service.

### Security and reliability

- Harden authentication and PIN handling, storage access, media endpoints, presence checks, and WebSocket request validation.
- Add regression coverage for security, state transitions, floorplan data, and activity exports.
- Refresh stable frontend dependencies and the lockfile, with automated dependency security checks in CI.
- Fix dashboard sizing, responsive behavior, sensor labels, and optional floorplan response handling.

### Dashboard improvements

- Add security readiness insights to make system health and blocking issues easier to assess.
- Add an interactive live floorplan widget.

### Activity history PDF

PDF export now downloads a real PDF file directly. Report labels and supported event descriptions follow the selected Argus language (English or Spanish), instead of opening a browser print view on the Home Assistant address.

## Upgrade

Update Argus through HACS or install the attached `argus.zip` release asset, then restart Home Assistant if requested by the integration update flow. The release also includes `argus.zip.sha256` so the archive can be verified.

## En español

Argus 2.5.0 incluye una revisión amplia de seguridad y confiabilidad, mejoras en el panel, datos genéricos del proceso de armado para adaptadores HAP compatibles y la descarga correcta del historial en PDF.

### Armado con adaptadores HAP compatibles

Argus expone el progreso del armado y el modo solicitado mediante el estado y los atributos genéricos de la entidad de alarma de Home Assistant. Un adaptador HAP compatible puede usarlos para representar una solicitud que espera el cierre de sensores o que aún cumple el retardo de salida. Argus conserva sus cuatro modos: **Desarmado, En casa, Ausente y Noche**. HomeKit Bridge sigue disponible.

Cada adaptador debe traducir el estado y los atributos de Argus a sus propias características HAP. La compatibilidad depende de esa implementación; esta versión no garantiza compatibilidad automática con cualquier servicio HAP o Matter.

### Seguridad y confiabilidad

- Refuerza la autenticación y el manejo del PIN, el acceso al almacenamiento, los endpoints de medios, la presencia y la validación de solicitudes WebSocket.
- Añade pruebas de regresión para seguridad, transiciones de estado, datos del plano y exportaciones del historial.
- Actualiza dependencias estables del frontend y su archivo de bloqueo, e incorpora auditorías automáticas de seguridad de dependencias en CI.
- Corrige el tamaño y la adaptación del dashboard, las etiquetas de sensores y el manejo opcional de respuestas del plano.

### Mejoras del panel e historial

- Incluye indicadores de preparación y estado de seguridad, además de un plano interactivo en vivo.
- La exportación del historial descarga un archivo PDF real. Los títulos y las descripciones compatibles respetan el idioma seleccionado en Argus (español o inglés), sin abrir la vista de impresión del navegador.

### Actualización

Actualiza Argus desde HACS o instala el archivo `argus.zip` adjunto y reinicia Home Assistant si el flujo de actualización de la integración lo solicita. También se incluye `argus.zip.sha256` para verificar el archivo.
