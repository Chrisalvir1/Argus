# Changelog

Todos los cambios relevantes de Argus se documentan aquí. El historial anterior continúa disponible en Git.

## [2.0.12] - 2026-08-03

### Fixed
- **Interactividad de widgets corregida:** Eliminado el clonado de nodos DOM durante el binding de widgets que destruía los listeners de botones internos. Todos los botones de widgets (refresco de historial, exportación, gestión de usuarios, etc.) funcionan perfectamente.
- **Personalización Estética desplegada por defecto:** La sección de personalización estética avanzada ahora inicia desplegada por defecto mostrando todas las opciones (fondos, fuentes de clima, temperaturas, números de emergencia y SOS). Se corrigió la sustitución de traducciones que destruía el botón/flecha de colapsado.
- **Botón "Config. Widgets":** Vinculación directa y confiable en la barra superior.

## [2.0.9] - 2026-08-03

### Fixed
- **Widget "Config. Widgets" ID faltante:** Se añadió el `id="widget-grid"` faltante al contenedor del grid.
- **Layout fullscreen horizontal:** Modos (izquierda) · Escudo (centro) · Sensores (derecha) en pantallas grandes.
- **HUD superpuesto a sensores:** La barra `.console-hud` integrada reemplaza el HUD absoluto sobrepuesto.
- **Indicador CONECTADO:** Visible permanentemente en cada instancia activa.

## [2.0.8] - 2026-08-03

### Added
- **Dashboard de widgets interactivos estilo iOS:** Botón "Config. Widgets" en la barra superior que activa el modo edición con animación jiggle, arrastrar y soltar (mouse y táctil), redimensionado S/M/L/XL y visibilidad por widget — todo persistido en `localStorage`.
- **Personalización Estética Avanzada colapsable:** La sección de personalización ahora se muestra oculta por defecto y se despliega con animación elástica de rebote al hacer clic.
- **Layout en instancia activa mejorado:** Escudo centrado, modos a la izquierda y sensores a la derecha en pantalla grande. Reordenamiento fluido a columna en móvil.



### Fixed
- **Bug crítico en el historial de actividad:** Todos los eventos del panel de alarma (`armed`, `disarmed`, `triggered`, `schedule_reconciled`, `state_restored`, `automation_executed`, `arm_rejected`, `confirmation_pending`, `panic_stopped`) se escribían sin `entry_id`, guardándose en la llave de storage global `argus.ui` en lugar de la correcta `argus.ui.{entry_id}`. El frontend los leía de la llave correcta, por lo que el historial aparecía siempre vacío. Solucionado añadiendo `entry_id=self._config_entry.entry_id` a cada llamada `async_append_audit_log` en `alarm_control_panel.py`.
- **WebSocket mal tipificado:** El botón "Borrar historial" del frontend enviaba el comando `argus/clear_activity_log` que no existe en el backend, causando un error silencioso. Corregido al nombre correcto `argus/clear_audit_log`.
- **Resolución automática de `entry_id` en WebSocket:** Todos los handlers WebSocket que no reciben un `entry_id` explícito ahora auto-resuelven el ID de la única instancia de Argus presente, garantizando que lecturas y escrituras siempre usen el mismo archivo de storage.

## [1.8.9] - 2026-07-29

### Fixed
- Corregido un error en la importación de `persistent_notification` que impedía que el proceso de desarmado completara su ejecución, dejando la alarma estancada en estado "Triggered" y fallando en guardar el evento en el historial de actividad.

## [1.8.3] - 2026-07-29

### Fixed
- Forzado el refresco de caché del navegador web mediante query strings (`?v=1.8.3`) en las importaciones de `argus-bootstrap.js` para asegurar que las correcciones visuales de la versión 1.8.1 (texto de estación "summer", shader WebGL y badge de batería) se apliquen automáticamente sin requerir borrar la caché manualmente.
- Corregida la relación de aspecto del sol y la luna en el shader WebGL para que mantengan una forma circular perfecta independientemente de la resolución de la pantalla.

## [1.8.2] - 2026-07-29

### Fixed
- Corregida la importación de `PinAttemptLimiter` en `alarm_control_panel.py` que causaba el error `NameError: name 'PinAttemptLimiter' is not defined` al desarmar desde Home Assistant y HomeKit (`alarm_control_panel/alarm_disarm`).
- Conectado el limitador de intentos por instancia (`entry_id`) durante el desarmado.

## [1.8.1] - 2026-07-29

### Fixed
- Ruido WebGL suavizado en el fondo cinemático eliminando la cuadrícula de bloques rectangulares grises.
- Removida la etiqueta de texto flotante de estación ("summer", "winter", etc.) en la esquina de la tarjeta.
- Formateada la alerta de batería baja en un badge flotante glassmorphism con desenfoque de fondo y borde sutil.
- Idempotencia del workflow de publicación en GitHub Actions para releases con tags existentes.

## [1.8.0] - 2026-07-28

### Added
- Motor atmosférico WebGL procedimental para lluvia, tormenta con lluvia, tormenta eléctrica sin lluvia, nieve, niebla, nubes, sol, estrellas, luna, estaciones y eclipses respaldados por sensores.
- Sistema de animaciones premium para apertura, cierre, guardado, botones, sensores, tarjetas y modales.
- Tarjeta Lovelace reconstruida con modo vacaciones, siete idiomas, contenido escapado y estados desconocidos honestos.
- Motor local determinista de automatizaciones con allowlist de dominios.

### Changed
- Estaciones calculadas por fecha, latitud y hemisferio configurados en Home Assistant.
- Versión unificada a 1.8.0 en manifest, constantes, tarjeta y contratos.
- README y notas de actualización alineados con las capacidades reales.

### Removed
- Acciones TTS del runtime y descubrimiento WebSocket de TTS.
- Análisis de cámara mediante Google Generative AI Conversation.
- Sugerencias Argus AI y su temporizador periódico.
- Referencias visibles a Argus Copilot.
- Afirmaciones y etiquetas Matter propias.
- Temperatura inventada de 24 °C y país predeterminado Costa Rica en la tarjeta.

### Security
- Las acciones retiradas almacenadas por versiones anteriores se ignoran y no se ejecutan.
- El nuevo ejecutor limita servicios a dominios locales explícitamente permitidos.

## [1.7.0] - 2026-07-27

### Added
- Almacenamiento privado de medios bajo `.storage/argus_media`.
- URL firmadas mediante HMAC-SHA256 y nombres UUID.
- Clientes frontend modulares para seguridad, auditoría y medios.
- Documentación de arquitectura y migración.

### Fixed
- Límite Base64 antes de decodificar cargas.
- Fallback PBKDF2-HMAC cuando `hashlib.scrypt` no está disponible.

## [1.6.0] - 2026-07-26

### Added
- Aplicación real de PIN, usuarios, expiración y código invitado.
- Rate limiting administrativo, redacción de hashes y restauración atómica.
- Auditoría estructurada, recuperación estable y compatibilidad multi-instancia.
- Endurecimiento de CI y del artefacto de release.

## [1.5.3] - 2026-07-17

### Changed
- Traducción dinámica de la fuente meteorológica.

### Removed
- Centro de Salud y Energía anterior.
- Argus Copilot anterior.

---

Consulta `docs/RELEASE_NOTES_*.md` y el historial Git para versiones anteriores.
