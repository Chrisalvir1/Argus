# Changelog

All notable changes to this project will be documented in this file.

## [1.3.7] - 2026-07-14

### Security
- El panel y todos sus comandos WebSocket ahora requieren permisos de administrador de Home Assistant.
- El PIN maestro ya no se serializa hacia el navegador; su validación ocurre en el backend.
- Se escaparon valores dinámicos del panel para impedir inyección HTML y las subidas HTTP ahora se escriben por fragmentos con límite real de tamaño.

### Changed
- Mejoras de accesibilidad y respuesta móvil: foco visible, respeto por movimiento reducido y diseño compacto en pantallas pequeñas.
- La validación CI usa commits inmutables para HACS y Hassfest, Dependabot revisa GitHub Actions semanalmente y se añadieron pruebas de regresión rápidas.

### Fixed
- Las estadísticas de 30 días ahora excluyen eventos anteriores al período.

## [1.3.5] - 2026-06-24

### Added
- **Selector Inteligente de Temperatura**: Nuevo selector de fuente de temperatura. Puedes elegir el clima de tu área o un sensor/termostato específico, mostrando la temperatura real junto a la hora en la instancia activa.
- **Gestión de HomeKit Bridge**: Añadida la opción de "Desvincular y volver a emparejar". Usa la acción oficial `homekit.unpair` para borrar de forma segura todos los emparejamientos y generar un nuevo QR para tu casa en Apple Home.

### Changed
- **Soporte Ampliado para Sensores**: Las cerraduras (locks) y sensores con estados `open`, `unlocked`, `motion`, etc. ahora pueden disparar Argus de forma nativa (antes solo reaccionaba a `on`).
- **Mejoras de Ubicación**: La ubicación en pantalla ahora prioriza de forma inteligente el nombre configurado de la ubicación de tu Home Assistant.
- **Liquid Glass en Selectores**: Los selectores de "Fondo del panel" y "Fondo Argus" adoptan el elegante estilo *Liquid Glass*.

### Fixed
- **Corrección Funcional SOS/Pánico**: El botón SOS ahora dispara exactamente la instancia desde la que se abrió (antes siempre apuntaba a la primera alarma). Registra el evento en auditoría y envía notificaciones a los destinos configurados reales.

---
*See release_notes.md for older versions.*
