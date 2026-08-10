# Changelog

Todos los cambios relevantes de Argus se documentan aquí. El historial anterior continúa disponible en Git.

## [2.0.56] - 2026-08-09

### Fixed
- **Contrato de espera persistente:** el frontend guarda `open_sensors_policy: pending` después de todos los overrides heredados y el backend migra configuraciones rotas de forma canónica.
- **TTS de cierres parciales:** cada cierre anuncia cuál sensor cerró y cuáles siguen bloqueando, incluso cuando queda uno.
- **Finalización determinista:** el último cierre completa el modo solicitado y publica el estado armado para HomeKit.
- **Ciclo de vida del panel:** se neutraliza el temporizador visual duplicado y todos los intervalos se cancelan al salir.

### Tests
- Cobertura ejecutable de payload WebSocket, política frontend/backend, transiciones de espera, TTS, orden de runtimes, HomeKit y temporizadores.

### Maintenance
- Eliminados workflows de una sola vez, scripts de parche obsoletos, publicación directa a `main`, artefactos rastreados y la tarjeta TypeScript que no se compilaba ni distribuía.

## [2.0.55] - 2026-08-09

### Fixed
- Armado en espera autoritativo al cerrar el último sensor.
- Recuperación de solicitudes `ARMING` huérfanas.
- Primeras pruebas ejecutables de cierre parcial y final.

## [2.0.54] - 2026-08-09

### Fixed
- Normalización de estados cerrados de sensores personalizados y Aqara.

## [2.0.53] - 2026-08-09

### Added
- Blueprints nativos para notificaciones móviles y Telegram.
- Permisos visibles para usuarios estándar.

### Fixed
- Internacionalización y TTS dinámico para conteo de sensores bloqueantes.

## [2.0.52] - 2026-08-09

### Fixed
- Scroll táctil de Control de Acceso y centrado de Respaldo/Restauración y Apoya a Argus.
- Selector de espera restituido para Casa, Ausente, Noche y Vacaciones.
- Color RGB exacto para luces compatibles.
- Detección automática de perfil de rendimiento.

## [2.0.51] - 2026-08-09

### Added
- TTS en siete idiomas, entrada TypeScript única y clientes WebSocket tipados.

### Fixed
- Compatibilidad WebGL iOS/Safari, PIN al cancelar espera y build Vite ES2025.

## [2.0.50] - 2026-08-09

### Fixed
- Revisión del armado atascado, force-complete, HomeKit/UI, layouts y capa visual de alarma.

### Added
- Detección canónica de sensores activos y pruebas de regresión del armado.

## [2.0.49] - 2026-08-08

### Added
- Sistema modular de movimiento y transiciones con soporte `prefers-reduced-motion`.

### Fixed
- Reducción de fotogramas vacíos, selecciones duplicadas y observadores globales.

---

Consulta `docs/RELEASE_NOTES_*.md` y el historial Git para versiones anteriores.
