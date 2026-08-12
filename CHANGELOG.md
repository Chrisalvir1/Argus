# Changelog

Todos los cambios relevantes de Argus se documentan aquí. El historial anterior continúa disponible en Git.

## [2.0.70] - 2026-08-12

### Fixed
- Corregida la visualización gris opaca en los widgets del tablero modificando directamente el archivo `style.css` de la compilación React para que el fondo de `.argus-widget` utilice las variables de cristal de Liquid Glass de manera nativa.
- Mejorados visualmente los distintivos de usuario (`.user-badge`) en el Control de Acceso: ahora los roles de administrador, cuentas vinculadas de Home Assistant y estados de PIN/expiración tienen colores sumamente elegantes, serios, legibles y adaptativos según el contraste del fondo del cielo.
## [2.0.69] - 2026-08-12

### Fixed
- Restaurado el efecto "Liquid Glass" translúcido en todos los contenedores de widgets del tablero (.argus-widget), aplicando el desenfoque de fondo y opacidad de cristal de manera impecable y desactivando fondos grises opacos.
## [2.0.68] - 2026-08-12

### Fixed
- Corregida la legibilidad y contraste de textos adaptativamente: ahora los textos y etiquetas cambian a negro/gris oscuro bajo cielo diurno (claro) y se mantienen en blanco bajo cielo nocturno (oscuro).
- Resuelto el solapamiento visual y doble renderizado del selector de formato de hora eliminando la inyección de control duplicada desde el script de legado.
- Corregida la visibilidad de los elementos dentro de las opciones de selectores en navegadores WebKit/Blink forzando colores de fondo sólidos.
- Reparado el botón de selección de accesorios SOS (Acciones de Pánico) permitiendo la apertura del modal selector de Home Assistant de manera exitosa.
- Removido el indicador informativo del perfil de rendimiento ("Equilibrado / detectado automáticamente") a petición del usuario.
## [2.0.67] - 2026-08-12

### Refactor
- Migración a LitElement (\`argus-weather-panel\`) con fotorrealismo HDR y físicas atmosféricas.
- Renderizado WebGL2 con soporte HDR y color Display-P3 (aces film).
- Parallax interactivo (giroscopio/mouse) para cielo y nubes 3D.
- Screen-space refraction procedural para colisiones de lluvia pesada.
- Interpolación (Lerp) exponencial para transiciones suaves de clima.
- Optimizado para 60 FPS fijos sin VBOs, usando un *Framebuffer* fraccionado y un triángulo expandido.
## [2.0.66] - 2026-08-11

### Enhanced
- Shader WebGL2 atmosférico con soporte puro para GLSL ES 3.00, logrando unificar cielo, nubes volumétricas, sol/luna, lluvia, nieve y auroras en un único canvas.
- Nubes estáticas, soles, lunas y fondos antiguos basados en CSS fueron eliminados del renderizador, delegando el entorno completamente a la GPU.
- Optimizaciones intensas de WebGL (IntersectionObserver, ResizeObserver) limitando a 24-30 FPS y pausando el dibujado cuando no es visible en pantalla.
- Restructurado y resuelto por completo la retención de persistencia y UI al eliminar y añadir accesorios en el menú avanzado de SOS (Pánico).
- Efecto Liquid Glass centralizado y perfeccionado para usar las variables nativas del tema y `color-mix`, logrando la compatibilidad perfecta del esmerilado translúcido en modos claro/oscuro.
## [2.0.65] - 2026-08-11

### Fixed
- Corregido el guardado de ajustes de personalización que fallaba por inicialización nula de perfil (reloj, formato, fondo, etc).
- Corregido el diseño opaco del contenedor de instancias activas (`.liquid-glass`) forzando el fondo con gradiente.
- Corregido auto-guardado en el modal de selección de SOS para que los cambios se guarden de inmediato al presionar Listo.
- Reducida significativamente la opacidad de las nubes estáticas e incrementados los rayos volumétricos para hacer evidente el funcionamiento del shader WebGL.
- Ajustado formato de fecha (`_formatDateTime`) en el log de actividad a una versión numérica compacta más legible.
## [2.0.64] - 2026-08-11

### Fixed
- Revertidos los cambios al escudo SVG, restaurando el comportamiento visual original según solicitud explícita del usuario.
- Shader WebGL: Implementadas finalmente las verdaderas animaciones avanzadas de WebGL2 prometidas previamente (Aurora boreal, Niebla volumétrica, Nieve con rotación, Lluvia con capas, Rayos de sol y distorsión por calor).
- Ajustado el efecto de desenfoque de las nubes CSS para revelar correctamente los efectos atmosféricos de WebGL.
- Ajustada prueba unitaria fallida debido a la optimización previa del ciclo de reloj del panel.

## [2.0.63] - 2026-08-11

### Fixed
- Hero clock ahora respeta el formato 12h/24h configurado (`_formatTime()`).
- `clock_format` se persiste correctamente al guardar y se carga al iniciar.
- Selector de formato de hora añadido al panel de personalización.
- Liquid Glass: efecto visual restaurado con blur 28px, saturación 180% y brillo correcto.

### Enhanced
- Animaciones WebGL de clima mejoradas: lluvia con viento, relámpagos asimétricos, nieve con rotación, niebla volumétrica, estrellas con twinkle, aurora boreal, rayos de sol (god rays), shimmer de calor.
- Canvas de clima recibe `data-wind`, `data-temp`, `data-night` para efectos contextuales.

## [2.0.62] - 2026-08-11

### Fixed
- Resueltos errores de regresión en selectores de temperatura y clima, liquid glass y modal SOS.
- Corregido bug en animación del escudo SVG de instancias activas (IDs de SVG deterministicos por índice).
- Seguridad WebGL: guard de nulidad en ciclo de animación del shader premium.

## [2.0.57] - 2026-08-09

### Fixed
- Reconciliación de armado segura desde el watchdog de Home Assistant: cerrar el último sensor ya no deja Argus bloqueado en espera.

## [2.0.56]

### Fixed
- El armado en espera usa una definición única y segura de sensor cerrado: `off`, `closed` y `cerrado` liberan el modo solicitado; sensores ausentes, `unknown` o `unavailable` mantienen el armado en espera.
- Al cerrar parcialmente los sensores, el TTS informa tanto el sensor que cerró como el que queda pendiente. Un fallo puntual de TTS o almacenamiento ya no interrumpe la máquina de estados de armado.
- Guardar la configuración de una instancia ya no cancela una solicitud de armado pendiente en otra instancia.

### Removed
- Se retiraron scripts y salidas temporales de publicación que podían reintroducir reemplazos de versión no verificados.

## [2.0.55] - 2026-08-09

### Fixed
- Armado en espera autoritativo, recuperación de solicitudes `ARMING` y TTS por transición.

## [2.0.54]

### Fixed
- Fix watchdog freezing arming state indefinitely when custom sensor components translate closed states like 'cerrado' or 'off'.

## [2.0.53] - 2026-08-09

### Added
- **Blueprints Nativos para Notificaciones**: Integración lista de notificaciones móviles ricas (iOS) y bots de Telegram con video y botones interactivos.
- **Permisos de Usuarios Estándar Visibles**: Nuevo diseño que muestra insignias de permisos en vivo.

### Fixed
- **Internacionalización y TTS Dinámico Mejorado**: Reparada la lógica de TTS para cierres instantáneos y conteo de sensores bloqueantes.

## [2.0.52] - 2026-08-09

### Fixed
- **Control de Acceso — Doble contenedor eliminado:** El panel de usuarios y PIN maestro ya no muestra un cuadro gris anidado dentro del cuadro principal. Las secciones se muestran directamente con scroll nativo en el panel.
- **Toggle "Esperar armado de sensores" restituido (todos los modos):** Se añadió el segundo checkbox "Esperar armado en espera" en la configuración de sensores de cada modo (Casa, Ausente, Noche, Vacaciones). Activa `open_sensors_policy: pending` — Argus espera a que todos los sensores seleccionados para ese modo se cierren antes de completar el armado, con TTS anunciando el conteo en tiempo real.
- **Color RGB exacto en luces de alarma:** Las luces RGB ahora reciben el color seleccionado exacto. Se corrigió la lógica que convertía innecesariamente `rgb_color → hs_color` cuando la luz también acepta `rgb`, introduciendo error de tono.
- **Rendimiento — Auto-detección silenciosa:** Eliminado el selector manual de perfil y el botón "Ejecutar diagnóstico". Argus detecta automáticamente el hardware del dispositivo de visualización (Pi Zero, Pi 3, Pi 4, Pi 5, PC, tablet) usando `navigator.hardwareConcurrency` + disponibilidad de WebGL, aplica el perfil óptimo en silencio y muestra solo un pequeño badge informativo (en el idioma activo) con el perfil detectado. La seguridad nunca se ve afectada.

## [2.0.51] - 2026-08-09

### Added
- **Internacionalización (i18n) Completa para TTS:** Argus ahora soporta y procesa 7 idiomas de forma nativa para todas las notificaciones por voz (eventos de seguridad, disparos, armados, etc.). El backend detecta automáticamente el idioma de la interfaz del usuario.
- **Sincronización de Idioma UI-Servidor:** Al cambiar el idioma en la interfaz, se actualiza automáticamente el estado global en el servidor para que Home Assistant responda en el idioma correcto.
- **TypeScript Entrypoint:** Un único punto de entrada real en `src/app/index.ts` para todo el frontend.
- **WebSocket fuertemente tipado:** `src/core/websocket.ts` validado contra `websocket_api.py`.
- **Clientes TS:** Implementación tipada para `security/client.ts` y `media/client.ts`.

### Fixed
- **Fallo WebGL iOS/Safari (Blur Fix):** Eliminada la propiedad `mix-blend-mode: screen` del canvas WebGL y aumentada la precisión de los shaders a `highp` para garantizar tormentas eléctricas y lluvia estables sin colapsar en pantallas móviles (que antes se quedaban en un fondo difuminado "blur").
- **Protección de Cancelación (Master PIN):** Cancelar una alarma desde el estado "Arming Wait" ahora respeta correctamente y exige el PIN Maestro en la UI, sincronizado con el backend.
- **Frontend Build:** Se resolvió el fallo de Vite al compilar con el target `ES2025` cambiando el target de esbuild a `esnext`, manteniendo TypeScript en `ES2025`.
- **CI Duplicado:** Se eliminó la duplicación de flujos de trabajo de GitHub Actions al ejecutar validaciones tanto en `push` como en `pull_request`.
- **Compatibilidad Residual:** Se eliminó el manifiesto de compatibilidad inactivo que engañaba a las pruebas de integración en `argus-bootstrap.js`.

## [2.0.50] - 2026-08-09

### Fixed
- **Armado atascado en espera de sensores (Aqara/HomeKit):** unificada la detección de sensores abiertos entre el armado y el watchdog. Al cerrar todos los bloqueadores, Argus completa el armado en lugar de quedarse en `arming`.
- **Force-complete:** si rearmas el mismo modo mientras esperas y los sensores ya están cerrados, Argus completa el armado en lugar de cancelar a `disarmed`.
- **HomeKit/UI:** la lista de sensores bloqueantes se actualiza en cada recheck para no mantener "Arming" fantasma.
- **Layouts:** acceso/usuarios con scroll táctil real; Respaldo y Restauración centrados y en rejilla; Apoya a Argus centrado y alineado.
- **Capa visual única de alarma** (`argus-v2050-alarm-visuals`) para estados arming/waiting y botones activos sin pelear con overlays anteriores.
- **Cache-bust 2.0.50** en bootstrap y contratos de versión.

### Added
- `is_sensor_active` / `open_blocking_sensors` canónicos en `sensor_state_runtime.py` (binary_sensor, lock, cover y estados Aqara-friendly).
- Módulos frontend `argus-v2050-alarm-visuals.js` y `argus-v2050-widget-layouts.js`.
- Tests de regresión `tests/test_v2050_arming_complete.py`.

## [2.0.49] - 2026-08-08

### Added
- Sistema modular de movimiento para selector de perfiles, PIN, dashboard, vistas, widgets, tarjetas y sensores.
- Entrada escalonada limitada para contenido nuevo renderizado dinámicamente.
- Capa ligera de transición para cambios de fondo sin aplicar filtros al canvas WebGL ni al video.
- API encapsulada por instancia para animar vistas, dashboard, contenido escalonado y cambios de fondo.

### Fixed
- Eliminado el fotograma vacío entre la selección del perfil y la carga del dashboard.
- El selector permanece visible mientras el dashboard se prepara y se oculta al finalizar la transición, con timeout de recuperación.
- Bloqueadas las selecciones duplicadas durante la validación visual de perfil o PIN sin alterar la lógica de seguridad.
- Transiciones de PIN, bienvenida, modos, historial, usuarios, selectores y widgets suavizadas sin clonar ni reemplazar nodos.

### Accessibility
- Compatibilidad con `prefers-reduced-motion`.
- El perfil Esencial elimina animaciones decorativas y conserva transiciones funcionales inmediatas.
- El feedback táctil no interfiere con click, teclado, focus ni controles de seguridad.

### Performance
- Observer limitado exclusivamente al Shadow DOM de cada panel y configurado solo para nodos añadidos.
- Mutaciones agrupadas mediante `requestAnimationFrame`, sin observar clases, estilos ni toda la página de Home Assistant.
- Perfil Ligero limita el stagger y omite la transición de fondos.
- Limpieza de observers, timers, RAF y listeners al desconectar el panel.

## [2.0.32] - 2026-08-04

### Fixed
- Eliminado el destello de respaldo basado en apagados y encendidos repetidos para evitar reinicios de bombillos Matter, bombillos convencionales inteligentes y plugs.
- Luces regulables sin flash nativo ahora pulsan únicamente el brillo entre 25% y 100%, sin cortar la alimentación lógica.
- Luces exclusivamente `onoff` y entidades similares a plugs se mantienen encendidas de forma fija y no ofrecen destello inseguro.
- Argus captura y restaura estado, brillo, color RGB/HS/XY, temperatura de blanco y efecto después de SOS, alarmas y pruebas.
- Si Home Assistant no conserva el color anterior, se restaura blanco neutro para impedir que el siguiente encendido manual permanezca en rojo.
- Valores RGB falsos se eliminan antes de guardar configuraciones para luces sin capacidad de color.

## [2.0.31] - 2026-08-04

### Fixed
- Detección estricta de capacidades de luces desde `supported_color_modes` de Home Assistant, sin inferencias por nombre o tipo aparente.
- Los dimmers y luces `brightness`, `color_temp` u `onoff` ya no muestran ni guardan controles RGB.
- Prueba física de destello desde SOS y Modos mediante servicios reales `light.turn_on` y `light.turn_off`, con flash nativo, efecto nativo o respaldo temporizado Argus.
- Sensores compactos con diseño de píldora en vista normal, conservando el diseño de pantalla completa.
- Contenedores de acceso, automatizaciones e historial ajustados con altura limitada y scroll interno.
- Personalización estética avanzada cerrada por defecto y controlada por un único botón accesible, sin texto invertido ni doble evento.

## [2.0.30] - 2026-08-04

### Fixed
- Sensores de instancias activas más compactos y proporcionados en escritorio, móvil y pantalla completa.
- Persistencia autoritativa de fondos por perfil, incluyendo restauración real del fondo Argus predeterminado.
- Edición de salidas SOS con eliminación, color y destello suave o rápido.
- Aplicación fiable de color y destello en SOS y modos, con efecto nativo o respaldo temporizado.
- El selector de color solo aparece para luces realmente compatibles con `hs`, `xy`, `rgb`, `rgbw` o `rgbww`; luces blancas, `color_temp` y `onoff` conservan únicamente destello.
- Sensores `unknown` o `unavailable` se identifican como desconectados en lugar de cerrados.

## [2.0.29] - 2026-08-04

### Fixed
- **Personalización por Perfil (Themes):** Se introdujo una reestructuración de la persistencia que empaqueta las preferencias estéticas (`background_mode` y `background_file`) dentro de la propiedad `theme` por usuario. Ahora cada perfil de Argus mantiene de forma confiable su propio fondo animado o estático independiente sin importar si refrescan la pestaña o entran desde otros dispositivos.

## [2.0.28] - 2026-08-04

### Added
- **Binary Sensor de Bloqueo de Sensores:** Nueva integración `binary_sensor.py` que expone un estado de Home Assistant cuando Argus está "Esperando que se cierren los sensores bloqueantes" al intentar armar. Facilita crear automatizaciones nativas.
- **Configuración Avanzada de Luces Sirena:** Renovación del selector de color para sirenas con soporte hexadecimal por color y modo de parpadeo suave (`gentle_flash`), ampliando la compatibilidad de colores RGB y efectos.
- **Sincronización de Paneles Externos**: Nueva sección en la configuración de modos para seleccionar otros paneles de alarma que sincronizarán automáticamente su estado con Argus de forma bidireccional, manteniendo "Sirenas" solo para activación de alarma en pánico.

### Fixed
- **UI en Móviles y Safari:**
  - Ajuste de dimensiones del `.console-sensor` para prevenir desbordes mediante modelo flexbox.
  - Implementación de límite de altura y scroll nativo en las listas de sensores (entry/bypass).
  - Refinamiento de renderizado de fondo (background) que presentaba corte de esquinas (`corner clipping`) en navegadores con WebKit/Safari.
- **Personalización de Fondos de Pantalla:** Corrección del mecanismo de guardado de personalizaciones (wallpapers), que ahora persiste a nivel de instancia si el usuario no tiene perfil cargado, evitando el reinicio a 'Default'.
- **Websocket API y Battery UI:** Solución de la detección de dispositivos mediante el `device_id` para mostrar correctamente baterías, arreglos de dominios faltantes en selectores y refinamiento modal.
- **Batería en Instancias Activas**: Añadido el medidor visual de batería dentro del panel principal al lado del estatus, empleando estilo liquid glass transparente que se torna rojo y avisa desconexión debajo del 10% de carga.

## [2.0.18] - 2026-08-03

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
