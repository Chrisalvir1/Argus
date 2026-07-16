# Changelog

All notable changes to this project will be documented in this file.

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
