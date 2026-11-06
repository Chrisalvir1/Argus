# Argus Home Hub v3.0.0

## Novedades

- Dashboard contextual con zonas, disponibilidad, batería y estados confirmados por Home Assistant.
- Zonas opcionales: las instalaciones heredadas conservan sus sensores por modo sin tener que activar zonas.
- Núcleo Three.js original, renderizado adaptativo y distribución responsive.
- Armado en espera, omisión temporal y reincorporación manual autorizada.
- Diagnóstico de sensores y sesiones de prueba guiadas y libres.
- Configuración general de voz en Modos / SOS, con importación de ajustes heredados.
- Gestión de perfiles, PIN, accesibilidad, alto contraste y configuración de salidas compatibles.
- SOS independiente de la alarma de intrusión; detener SOS requiere PIN cuando esté configurado.

## Actualización desde v2.6.8

Consulte [la guía de migración](MIGRATION_3.0.0.md). Haga un respaldo completo de Home Assistant antes de actualizar. No elimine la integración ni sus entidades. La actualización conserva identificadores y configuración existente; las funciones nuevas se configuran voluntariamente.

## Compatibilidad

Objetivo de integración: Home Assistant Core 2026.11.0. El paquete incluye el frontend compilado; Node.js solo se necesita para desarrollar.

## Validación

El informe de preparación y sus pendientes se mantiene en RELEASE_VALIDATION_3.0.0.md. Esta nota no acredita pruebas físicas de dispositivos, llamadas, sirenas ni rendimiento GPU.

## Panel y núcleo

El núcleo conserva Three.js y sus cristales originales. Sin Zonas activadas se muestran siete cristales sin etiquetas; al activar Zonas se representa la cantidad configurada. El renderizador adapta su calidad automáticamente y respeta movimiento reducido. El dashboard contextual muestra métricas y detalles de la zona seleccionada sin sustituir el Historial de Actividad.

La presentación se adapta al espacio disponible dentro de Home Assistant y a pantalla completa. Los widgets permiten arrastre y redimensionado, conservando distribuciones de móvil y web. Los ajustes de perfil incluyen formato horario, idioma, contraste y modo de interacción.

## Zonas y sensores

Las zonas son optativas. El administrador asigna sensores, subtítulo de área y modos. El diagnóstico distingue contactos abiertos, sensores activos, indisponibilidad, información y batería cuando Home Assistant proporciona esos datos. Una entidad de fecha y hora no acredita protección ni una prueba física. Los resultados recibidos por WebSocket actualizan el contexto.

Las pruebas guiadas y libres observan nuevas transiciones; un contacto requiere apertura y cierre, mientras que un detector compatible requiere activación. Finalizar, cancelar o expirar libera la sesión. Estas pruebas no sustituyen la comprobación física del dispositivo.

## Armado, omisión e intrusión

El armado en espera mantiene la solicitud pendiente mientras existan bloqueos obligatorios. Resolverlos permite completar la solicitud vigente; cancelarla evita que una recuperación posterior arme el sistema. El bypass temporal requiere autorización y validación del backend. Un sensor recuperado permanece omitido durante el ciclo hasta su reincorporación manual. La alarma de intrusión permanece enclavada aunque el contacto se cierre y finaliza mediante desarme autorizado.

## Voz general

Voz de Argus se configura una sola vez en Modos / SOS y utiliza el modo y los sensores correspondientes a cada evento. Los cuadros de mensajes corresponden a acciones distintas, no se leen todos juntos. Los nombres de zonas y sensores se incorporan según el contexto. Los motores TTS y reproductores deben estar integrados en Home Assistant; su transporte y sincronización dependen de cada integración.

La voz heredada de YAML y ConfigEntry se importa sin sobrescribir ajustes ya personalizados en el panel. Se conservan textos vacíos para usar los predeterminados. [Ejemplo YAML opcional](../examples/configuration.yaml).

## SOS, permisos y accesibilidad

SOS puede activarse sin armar la intrusión y detenerse sin desarmarla. Un PIN configurado protege su finalización. El teclado conserva validación del servidor y límites de intentos; la presentación contextual y modal se adapta al espacio. El control accesible por toque utiliza confirmación. Las llamadas requieren acción voluntaria y configuración autorizada; Argus no acredita conexión directa a una central de emergencias.

Los perfiles estándar reciben únicamente las acciones permitidas. La administración, configuración y permisos se reservan al administrador. Los puentes HomeKit/Matter consumen los estados y servicios de Home Assistant; no eliminan las comprobaciones de PIN de Argus.

## Salidas y compatibilidad

Las salidas se eligen entre las entidades compatibles presentes en Home Assistant. Los perfiles de salida permiten opciones según las capacidades de la entidad, incluidas luces compatibles. La restauración del estado previo y los efectos dependen de la información que cada integración exponga. No se exige Node.js en Home Assistant: el ZIP incluye el bundle.

## Alcance de las comprobaciones

CI comprueba instalación de dependencias, TypeScript, frontend, paquete HACS, hassfest y contratos con Core 2026.11. Las pruebas físicas de tacto, ProMotion, Echo Show, altavoces, sirenas y lectores de pantalla permanecen independientes. La compatibilidad con automatizaciones de terceros debe comprobarse en cada instalación; no se garantiza ausencia universal de errores.
