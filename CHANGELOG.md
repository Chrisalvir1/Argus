## [2.0.98] - 2026-08-13

### Changed / Fixed
- Massive UI simplification: Re-enabled React layout permanently, forced text to white for legibility, removed complex aesthetic customization UI, fixed language dropdown selector in profile menu.

## [2.0.97] - 2026-08-13

### Fixed
- Disabled experimental React Dashboard layer to restore legacy stability and prevent UI wipes during profile load.
- Corrected CSS contrast bug causing black text on dark Argus panels when users run HA Light Theme.
- Fixed aesthetic customization persistence (background image, sound) by updating login bootstrap payload.
- Reverted animated weather SVGs to stable emoji presentation for improved compatibility.

## [2.0.96] - 2026-08-13

### Changed
- Bump de versión a 2.0.96.

## [2.0.95] - 2026-08-13

### Fixed
- Solucionado conflicto en el pipeline de CI/CD al remover la configuración redundante de python-version en setup-python.

## [2.0.91] - 2026-08-13

### Fixed
- Solucionado bloqueo del inicio de sesión donde la pantalla de bienvenida retornaba prematuramente debido a la eliminación del overlay de perfiles.

## [2.0.90] - 2026-08-13

### Fixed
- Reparada inicialización del clima animado (WebGL) en segundo plano usando ResizeObserver.
- Solucionado bloqueo completo de la interfaz de carga tras seleccionar perfil (se removió destrucción prematura del overlay de login).

## [2.0.89] - 2026-08-13

### Fixed
- Solucionado layout cortado de fullscreen en dispositivos con transformaciones (Lovelace) como iPads/tablets.
- Reparada la animacion de contracción del overlay de perfiles hacia el avatar de la barra superior.
- Removida la conversión manual de color RGB a favor de la nativa de HA Core para sincronizar luces correctamente.
- Recuperada compatibilidad del clima animado (WebGL) y agregado como opción para el fondo general del panel.

# Changelog

Todos los cambios relevantes de Argus se documentan aquí. El historial anterior continúa disponible en Git.

## [2.0.88] - 2026-08-12

### Fixed
- **Animación de bienvenida:** se eliminó el parpadeo blanco al finalizar la animación iniciando la carga de `_load()` en la fase de fade-out en vez de esperar a que terminara la animación completa.
- **Top Bar Profile:** La imagen de perfil en el top bar (hero) ahora hace _fallback_ automático al `entity_picture` de la entidad `person` asociada en HA, mostrando la foto real si está disponible en Home Assistant.
- **Botón Cambiar Imagen:** el dropdown de perfil ahora navega nativamente a `/config/person` de Home Assistant al seleccionar "Ir a Personas de HA ↗", reemplazando el antiguo modal obsoleto.
- **Selector de Idiomas:** solucionado el bug donde los menús desplegables (como el selector de idiomas) no se cerraban al hacer clic fuera de ellos en navegadores con encapsulamiento estricto (Shadow DOM y `composedPath`).
- **WebGL Weather:** corrección en `_initWeatherWebGL` para pantallas con inicialización diferida o en _layout_ asíncrono (tamaño inicial 0x0), forzando `fallback` al tamaño del contenedor y activando correctamente los efectos.

## [2.0.86] - 2026-08-12

### Fixed
- **Blur permanente: causa raiz final**: El elemento `#bootstrap-overlay` (clase `.argus-bootstrap-layer`) tiene `backdrop-filter:blur(20px)` y `position:fixed`, y NUNCA se elimina del DOM — solo se oculta con `display:none`. En WebKit, un elemento con `backdrop-filter` y `position:fixed` crea una capa en el compositor gráfico que **puede persistir incluso con `display:none`** en ciertas condiciones de render. Solución: eliminado `backdrop-filter` del CSS de `.argus-bootstrap-layer`, y `_nukeAllLoginOverlays()` ahora también limpia explícitamente el `backdropFilter` del elemento via JS.

## [2.0.85] - 2026-08-12

### Fixed
- **Blur permanente eliminado definitivamente**: Causa raiz identificada: `backdrop-filter:blur` en un elemento `position:fixed` dentro de un Shadow DOM crea una capa separada en el compositor WebKit. Cuando el elemento se destruye con `.remove()`, WebKit puede dejar la capa del compositor "huérfana" y visible de forma permanente. Solución: se eliminó `backdrop-filter` de `.argus-profile-overlay` y `.argus-welcome-screen`. El fondo oscuro (`rgba 0.85+`) logra el mismo efecto visual sin tocar el compositor.
- **Función `_nukeAllLoginOverlays()` añadida**: Destrucción forzada de todos los overlays de login/perfil/bienvenida en un solo método. Se invoca al inicio de la animación de bienvenida, al final de la misma, y al inicio de `_load()` para garantizar que ningún overlay residual bloquee el dashboard.

## [2.0.84] - 2026-08-12

### Fixed
- **UI congelada en Blur / Múltiples clicks en selector de perfiles**: Se solucionó un problema crítico (concurrencia de carga de Home Assistant) donde si la interfaz inicializaba repetidas veces en el primer segundo, se apilaban múltiples "pantallas de selección de perfil" una sobre otra. Esto causaba que el usuario tuviera que dar varios clicks, e incluso al lograr entrar, las capas extras fantasma se quedaban en la pantalla manteniendo todo el dashboard con el filtro borroso (`backdrop-filter`).

## [2.0.83] - 2026-08-12

### Fixed
- **WebKit Blur Bug**: Se solucionó un error persistente en iOS/Safari donde el `backdrop-filter` de la pantalla de bienvenida se quedaba "huérfano" y permanentemente estancado en pantalla como una capa borrosa debido al motor de renderizado de Safari. La animación de salida ahora desvanece la opacidad en lugar del filtro.

## [2.0.82] - 2026-08-12

### Fixed
- **Protección contra multi-tap**: Se añadió una bandera (`dataset.processing`) al selector de perfiles de tvOS y al prompt del PIN. Esto previene que se despachen múltiples eventos al tocar rápidamente, evitando pantallas desenfocadas estancadas.

## [2.0.81] - 2026-08-12

### Fixed
- **Shader WebGL2**: Se solucionó la baja resolución del canvas en pantallas Retina/OLED usando `devicePixelRatio`.
- **Dimensiones del panel de clima**: Se añadió un contenedor relativo al `<argus-weather-panel>` para evitar que el canvas colapse a 0px height.
- **Transición inicial WebGL2**: Se saltó el interpolador exponencial (damp) en el primer frame para evitar un fundido de 1.5s desde cielo despejado.
- **ResizeObserver**: Se añadió inicialización forzada por `requestAnimationFrame` para evitar que no se renderice en el primer mount si las dimensiones iniciales son 0x0.
- **GitHub Actions**: Tests y manifestos adaptados a Python 3.12 (por fallo de availability de 3.14 exacto).

## [2.0.80] - 2026-08-12

### Fixed
- **Fullscreen móvil/tablet**: Usa `position:fixed` + `inset:0` + `100dvh` + `env(safe-area-inset-*)` para cubrir pantalla completa sin clipping en iOS/Android.
- **Animación climática**: Nubes WebGL con falloff gaussiano suavizado (sin blobs blancos duros). Lluvia más visible (+20% intensidad). Brillo solar mejorado.
- **Canvas WebGL en móvil**: Inicialización mediante `ResizeObserver` para garantizar que el canvas tenga dimensiones antes de compilar el shader.
- **GitHub Actions**: Flexibilizado requerimiento de Python a ≥3.11 (era exacto 3.14.2 lo que causaba el fallo del workflow Release).

## [2.0.79] - 2026-08-12

### Fixed
- Triple tap en móvil: añadido touch-action: manipulation para eliminar el delay de 300ms de iOS.
- Layout móvil portrait: grid de perfiles responde con columna única en pantallas estrechas (<480px portrait).
- Nombre en bienvenida: usa display_name de Argus con fallback al nombre de HA.
- Foto de perfil unificada: selector de perfiles y top bar comparten la misma fuente (u.picture del bootstrap).
- Eliminado el overlay de bienvenida antiguo (_showProfileWelcome/_triggerWelcomeSpringAnimation).
- Animación de bienvenida: el avatar vuela al top bar derecho (no a la izquierda).

### Added
- Modal de cambio de imagen: al tocar "Cambiar imagen" en el dropdown del perfil, se abre un picker con fotos de personas de HA.
- Integración con personas de HA: lee entity_picture de los estados de las entidades person.* de Home Assistant.

## [2.0.78] - 2026-08-12

### Changed
- Replaced the profile selection overlay with a tvOS-inspired design.
- Added smooth scale and transform animations for profile selection.
- Redesigned the PIN prompt for a cleaner, modern interface matching tvOS aesthetics.
- Profile welcome animation now transitions smoothly with a scaling and flying effect.

## [2.0.77] - 2026-08-12

### Fixed
- Reloj: sincronizada la lectura del formato de hora 12h/24h directamente desde la configuración guardada del panel.
- Perfil: corregido el avatar en el badge del perfil para utilizar `prof.picture` si está cargada en vez de iniciales estáticas.
- Control de Acceso: rediseñadas las etiquetas de roles (administrador y estándar) para eliminar los colores de estilo neón y utilizar transparencias suaves de alta legibilidad.
- Clima Fallback: implementada una transición suave e inmediata con gradientes de fondo basados en Apple Weather antes de que inicialice WebGL.
- Personalización: solucionado el bug al guardar el fondo predeterminado donde se vaciaba la URL del archivo de fondo personalizado, y garantizada la legibilidad del texto con sombras de texto adecuadas.

## [2.0.76] - 2026-08-12

### Fixed
- WebGL Fondo Climático: resuelto el problema de blob blanco estático al inicializar con `premultipliedAlpha: false` y limpiar con `gl.clearColor(0,0,0,0)`.
- Loop de Animación: limpiado el buffer en cada frame con `gl.clear(gl.COLOR_BUFFER_BIT)`.
- Fallback de WebGL: si falla WebGL, el canvas se oculta (`opacity: 0`) revelando los fondos y animaciones CSS originales.
- Animación de Nublado: implementadas elipses blancas semitransparentes en movimiento lento horizontal para el clima nublado.
- Memory Leaks: asegurado que todas las llamadas a `requestAnimationFrame` se cancelen con `cancelAnimationFrame` en `disconnectedCallback()`.

## [2.0.75] - 2026-08-12

### Fixed
- Legibilidad e Inteligencia visual: el host ahora alterna correctamente la clase `.daytime-theme` según la claridad del fondo.
- Menú del perfil: muestra la foto de perfil en la cabecera y añade un enlace directo a `/profile` para cambiar la imagen.
- Animación de instancia activa: el escudo SVG y los botones se excluyen de la restricción de animación general para recuperar su movimiento original.
- Botones de acción SOS: restaurado el contraste de color para "Limpiar" y "Aceptar" en fondos oscuros y claros.
- Contraste general de insignias: sustituidas las insignias de cuenta de HA de tonos neón por colores suaves de alta legibilidad.
- Transición más rápida: se reduce la espera de vuelo de bienvenida a 650ms y el vuelo a 450ms.

## [2.0.74] - 2026-08-12

### Fixed
- Permisos granulares por usuario (cambio de PIN de acceso y PIN maestro) ahora visibles solo si el administrador los otorga explícitamente.
- Gestión de PINs y selector de idioma integrados en el menú desplegable del perfil de la barra superior.
- Animación de bienvenida estilo iOS: la foto de perfil y el nombre vuelan suavemente desde la tarjeta al distintivo de la barra superior.
- Selector de formato de hora (`12h`/`24h`/`auto`) guardado y cargado correctamente desde la personalización.
- Shader WebGL mejorado con aurora boreal, niebla volumétrica, lluvia con viento, distorsión de calor y twinkle de estrellas.

## [2.0.73] - 2026-08-12

### Added
- Nueva sección de Permisos detallados (`🛡️ Permisos`) para usuarios estándar, permitiendo a los administradores activar/desactivar el cambio de PIN de acceso y PIN maestro individualmente por usuario.
- Redirección física interactiva: al hacer clic en Cambiar o Quitar PIN de acceso o PIN maestro desde la barra superior, la página se desplaza suavemente al widget de "Control de Acceso y Usuarios", enfocando e iluminando los controles correctos.
- Invalidación de sesión al eliminar usuarios: cuando un administrador borra a un usuario, todas sus sesiones activas se invalidan de inmediato en el servidor Home Assistant y se borran sus credenciales para evitar accesos no autorizados.

### Fixed
- Visibilidad condicional de gestión de pines en el perfil activo: los usuarios estándar solo ven la sección "Gestión de Pines" si el administrador les ha otorgado explícitamente el permiso correspondiente.
- Optimización y simplificación de botones de acción en la tarjeta de usuario, usando distintivos gráficos más pequeños y ordenados.
## [2.0.72] - 2026-08-12

### Added
- Integrada la gestión de Idioma y de PINs directamente dentro del menú desplegable del perfil en la barra superior.
- Creados diálogos y confirmaciones nativas para Cambiar/Quitar tanto el PIN de Acceso de usuario como el PIN Maestro de alarma.

### Removed
- Eliminadas las píldoras antiguas de "Sistema Desarmado" y "Nublado" de la barra superior.
- Removido el botón de selección de idioma antiguo del header superior.

### Fixed
- Reubicado el distintivo de perfil a la derecha de la línea divisoria de la hora y la fecha, ajustando el espaciado para una presentación limpia y balanceada.
- Compactado el diseño de la sección "Personalización Estética (Avanzado)": se redujo la altura y el relleno de todos los controles de selección, campos de texto y botones a 32px para maximizar el espacio de lectura.
## [2.0.71] - 2026-08-12

### Added
- Implementado el nuevo flujo de bienvenida con animación de resorte estilo iOS: al iniciar sesión o cargar la página, se muestra primero una tarjeta de bienvenida que rebota suavemente. Luego, la foto de perfil y el nombre vuelan en una transición de resorte fluida directamente hacia su destino en la barra superior.
- Creado un widget/píldora de perfil activo en Liquid Glass en la barra superior (`hero`).
- Añadido un atajo intuitivo: al hacer clic en el distintivo de perfil de la barra superior, se abre instantáneamente la pantalla de selección de perfiles para cambiar de usuario de forma rápida y sencilla.

### Fixed
- Reubicada y optimizada la información de la barra superior (`hero`) para calzar perfectamente con el nuevo distintivo de perfil adaptativo en pantallas móviles y de escritorio.
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
