# Changelog

All notable changes to this project will be documented in this file.

## [1.5.3] - 2026-07-17

### Changed
- **Traducción de Fuente de Clima**: La etiqueta y el estado de la fuente de clima seleccionada ahora se actualizan de forma dinámica al cambiar de idioma en el panel.

### Removed
- **Centro de Salud y Energía**: Se eliminaron completamente todos los elementos visuales de la interfaz de usuario correspondientes al contenedor de Salud y Energía, así como sus endpoints asociados en WebSocket.
- **Argus Copilot**: Eliminación total del asistente de inteligencia local Copilot (interfaz de usuario, endpoints WebSocket de procesamiento y traducciones locales).

### Retained
- **Resiliencia y Forense**: Se conservan a nivel interno la recuperación automática de estado tras apagones y el registro de la línea de tiempo forense.

## [1.5.2] - 2026-07-17

### Added
- **Operaciones Local-First**: Toda la inteligencia, procesamiento y control de la alarma ocurren íntegramente de manera local en el servidor, sin dependencias de servicios en la nube externos.
- **Resiliencia ante Apagones**: Implementación de persistencia local robusta para estados de alarma y horarios programados, garantizando la recuperación automática y segura del estado tras cualquier corte eléctrico.
- **Centro de Salud y Energía**: Monitoreo de disponibilidad en tiempo real, enlace de baterías reales (sin porcentajes inventados) y telemetría de energía/potencia de red.
- **Línea de Tiempo Forense (Forensic Timeline)**: Nuevo registro de eventos estructurado en profundidad con actores, severidad, marcas de tiempo y acciones detalladas.
- **Copilot Multilingüe Local**: Soporte para consultas de seguridad locales directamente procesadas por el asistente integrado en 7 idiomas.
- **Copias Cifradas**: Copias de seguridad de configuración portables y seguras utilizando cifrado robusto PBKDF2-SHA256 y AES-256-GCM.
- **API de Extensiones**: API WebSocket documentada para integraciones externas seguras (detallada en [docs/EXTENSIONS_API.md](file:///Users/chrisalvir/Desktop/GITHUB%20PROJECT/argus/docs/EXTENSIONS_API.md)).

## [1.5.1] - 2026-07-17

### Added
- **Atmósfera WebGL nativa**: Incorporación de un motor WebGL nativo en la GPU (sin dependencias externas) para renderizar dinámicamente partículas de lluvia, nieve, niebla y destellos de relámpagos. Si WebGL está disponible, las capas equivalentes en CSS se desactivan para optimizar rendimiento; en caso contrario o si se detecta "reducir movimiento", el panel vuelve automáticamente al fallback de CSS. Además, se liberan adecuadamente los recursos WebGL al desmontar o cambiar de tarjeta.
- **Selector de Fuente de Clima**: Ajuste persistente que permite elegir de forma manual la entidad `weather.*` correcta de Home Assistant para obtener las condiciones meteorológicas y temperatura exterior exactas de tu ubicación.
- **Iconografía Liquid Glass Premium**: Reemplazo de los iconos de estado (En casa, Ausente, Noche, Vacaciones, Desarmado y SOS/Pánico) por vectores SVG premium de estilo vidrio templado. El escudo central del panel ahora es dinámico, con degradados de color, reflejo de luz y pulso animado según el estado del sistema.

### Changed
- **Interfaz Móvil**: Corrección y centrado del botón selector de idioma en móvil, manteniendo la adaptabilidad de las instancias activas y visualización responsive a pantalla completa.
- **Optimización de Energía de Sensores**: Se eliminó por completo el icono de reloj/retardo de entrada en las tarjetas de sensores. El panel muestra exclusivamente información confirmada por Home Assistant, distinguiendo entre batería (`🔋 %`) y alimentación eléctrica (`🔌 AC`), sin simular ni estimar estados nulos.

### Removed
- **Festividades**: Eliminación total del soporte de festividades, incluyendo interfaz de usuario, endpoints WebSocket, lógica de banderas nacionales/efectos festivos y variables de almacenamiento asociadas.

## [1.5.0] - 2026-07-17

### Added
- **Escena atmosférica cinematográfica**: Reemplazo de la escena básica anterior por una atmósfera cinematográfica interactiva generada localmente con CSS que responde al clima real de Home Assistant (sol, nubes, niebla, lluvia, llovizna, nieve, tormenta eléctrica), soporte de día/noche, estrellas, sol, fases lunares reales (vía `sensor.moon_phase`), estaciones según hemisferio/fecha, y soporte de eclipses.
- **Efectos de festividades opcionales**: Ajuste persistente (desactivado por defecto) para activar festividades con detección de país automática o manual, animación de ondeado de bandera nacional en el día de independencia correspondiente, y efectos para Navidad y Pascua.

### Changed
- **Optimización de Sensores y Batería**: Visualización compacta en tarjetas que muestran nombre, estado (abierto/cerrado), batería real reportada y alimentación "AC" sólo si se declara explícitamente. Se corrigieron posibles errores de asociación cruzada de baterías y se eliminó el icono ambiguo de rayo en el retardo de entrada.
- **Selector de Sensores/Sirenas**: Rediseño amplio del selector con mejor legibilidad que detalla entidad, área, estado real y alimentación/batería en dispositivos disponibles y seleccionados, conservando controles correctos para sirenas.
- **Control de Acceso simplificado**: Reducción del tamaño visual en la sección de control de acceso y usuarios mostrando un resumen compacto, abriendo los paneles detallados únicamente bajo demanda.
- **Diseño Móvil y Responsive**: Adaptación completa para móviles de la sección de Instancias Activas, con modos en dos columnas (Desarmado y SOS a ancho completo), sensores reubicados debajo de los modos, y correcciones de pantalla completa vertical/horizontal usando `100dvh`.

## [1.4.8] - 2026-07-16

### Changed
- **Rediseño compacto de “Control de Acceso y Usuarios”**: El panel ahora muestra un resumen del PIN maestro y usuarios configurados. Los formularios de usuarios y PIN se abren solo bajo demanda, conservando toda la funcionalidad existente.

## [1.4.7] - 2026-07-16

### Updated
- **Información de Instalación:** Actualizadas las novedades y correcciones de versión en el archivo README.md que HACS lee para mostrar las características recientes al actualizar.

## [1.4.6] - 2026-07-16

### Fixed
- **Sometría Responsive y Organización:** Cuadrícula del panel y sección de Personalización Estética reorganizadas en filas equilibradas.
- **Acciones SOS Compactas:** Cuadrícula adaptable con altura máxima y scroll interno. Los nombres largos ahora se truncan con seguridad y se muestra el título completo al posicionar el cursor sobre ellos.
- **Evitar Desbordes Visuales:** Mejoras para la vista móvil en una sola columna y optimizaciones para prevenir desbordes de textos largos en diferentes idiomas.

## [1.4.5] - 2026-07-16

### Fixed
- **Contraste de Idioma:** Se mejoró la legibilidad de los textos dentro del selector de idioma en temas claros y oscuros.
- **Rediseño de Selectores:** El selector de sensores, sirenas, bypass y SOS ahora posee una distribución moderna de dos columnas, altura estable, scroll independiente y tarjetas Liquid Glass.
- **SOS de Ancho Completo:** La fila de acciones de SOS ocupa ahora todo el ancho horizontal del panel, eliminando espacios vacíos.
- **Distribución Simétrica del Panel:** Reorganización de las columnas para un diseño equilibrado. La columna derecha muestra ahora Historial y Modos antes del Control de acceso.
- **Carga de Datos Resiliente:** Incorporadas validaciones robustas y bloques try/catch en el historial, automatizaciones y usuarios para evitar que datos antiguos e incompletos bloqueen la carga del panel.

## [1.4.4] - 2026-07-16

### Fixed
- **Estabilidad del Panel:** Corregido un fallo crítico de carga donde datos antiguos o incompletos en `ui.audit_log`, `ui.users` o `ui.modes` podían detener el renderizado posterior de la interfaz.
- **Historial Resiliente:** Validación robusta del historial de eventos (`audit_log`), filtrado de entradas inválidas y formateo seguro de fechas/acciones.
- **Secciones Aisladas:** Implementado renderizado independiente con bloques try/catch en `_load()` para evitar que un fallo en una sección (como automatizaciones o usuarios) rompa el panel completo.
- **Configuración de Modos Segura:** Validación estricta de variables en la migración de configuraciones antiguas para garantizar que campos heredados no rompan la interfaz.
- **Acceso Seguro a Automatizaciones:** Se robusteció el acceso a las entidades de automatización del sistema ante estados nulos.

## [1.4.3] - 2026-07-16

### Fixed
- **Restauración de Liquid Glass:** Corrección de la renderización en modo claro que convertía el panel en blanco opaco; ahora el diseño Liquid Glass original (oscuro y translúcido) se mantiene intacto si se utiliza el fondo predeterminado de Argus, y se adapta con contraste accesible si se utiliza un fondo personalizado claro.
- **Rendimiento del Historial:** La solicitud de historial (`argus/get_audit_log`) ya no bloquea la carga principal del panel, mejorando el tiempo de respuesta inicial.
- **Robustez de la Interfaz:** Validación estricta de configuraciones de modos antiguas (como `sensors` o `entry_sensors` incompletos) para prevenir que la sección de modos y pestañas dejen de renderizarse adecuadamente.

## [1.4.2] - 2026-07-16

### Added
- **UI/UX Refinada:** Soporte para Tema Claro con alto contraste (superficies opacas, mejor visibilidad con fondos dinámicos).
- **Sensores Premium:** Chips compactos tipo *Liquid Glass* en modales que muestran nombre amigable, estado (Abierto/Cerrado) y % de batería real.
- **Efecto Buzz Orange:** El botón del modo de sistema activo mostrará un sutil zumbido de alerta naranja (`buzz-orange`) si un sensor perimetral se abre estando el sistema armado.
- **Historial Visual:** Nuevos iconos estilo orbe *Liquid Glass* con iluminación dinámica (verde, naranja, rojo) en vez de emojis fijos. Además, se registra el nombre exacto del sensor causante.
- **Internacionalización Profunda:** Traducciones dinámicas para etiquetas de vencimiento de PINs. El historial y las fechas se localizan y redibujan de inmediato al cambiar el idioma (sin recargar).

### Changed
- **Alineación Visual:** Sección de Tiempos de Configuración mejor estructurada manteniendo un diseño uniforme.
- **Bypass (Omitir):** Se garantiza que la directiva de omitir sensores sea evaluada rigurosamente por modo de armado independiente (p. ej., un sensor omitido en `Away` no afecta a `Night`).

## [1.4.1] - 2026-07-14

### Fixed
- Corrección de textos dinámicos fijos en la interfaz que permanecían en español (mensajes de confirmación de guardado, error de PIN no coincidente y notificaciones del sistema de armado/desarmado) para los siete idiomas.

## [1.4.0] - 2026-07-14

### Added
- Internacionalización completa y sincronización en los 7 idiomas (español, inglés, francés, portugués, italiano, chino y ruso) para toda la experiencia de Argus (panel, modos, usuarios, notificaciones y diálogos de configuración/opciones).
- Configuración opcional "Usar idioma de Home Assistant" en el selector.
- Formateo de fechas y horas locales según el idioma seleccionado.
- Tiempos de armado reales (`arming`), cancelación de armado al desarmar, y retardo de entrada por sensores configurables por modo.
- Integración dinámica e inmediata de MQTT reactivo con Broker topic de comandos `argus/alarm/set`, comandos JSON o plain text y control seguro de conexión.

## [1.3.9] - 2026-07-14

### Changed
- Renombrada la entidad de pánico a `Argus Panic`.
- Corrección de notificaciones persistentes en disparo y restauración de SOS.
- Rediseño de la personalización estética para eliminar espacios vacíos en pantallas responsivas.
- Unificación de controles del panel con estilo de vidrio redondeado y transiciones fluidas de foco.
- Eliminación del bloque informativo HomeKit & Matter por falta de confiabilidad del estado de emparejamiento.

## [1.3.8] - 2026-07-14

### Added
- SOS reversible con restauración automática al modo/estado anterior.
- Selector de luces, sirenas, interruptores, ventiladores y scripts para la acción de pánico (SOS).
- Número de emergencias configurable con envío de alertas móviles con botón de llamada directa.
- Switch de pánico independiente por instancia exportable para HomeKit Bridge.

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
