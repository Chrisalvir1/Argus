# Argus Home Hub 3.7.2

## Panel de zonas

Verificar zonas y las listas contextuales se limitan a sensores asignados a zonas, sin añadir sensores de otros modos. Listas/Pendientes abren sus filtros; tocar un cristal abre el diagnóstico y Cerrar vuelve al estado general. Se muestran número y nombre de zona, estado/conexión y batería cuando HA los informa.

Se corrige el área de grid del contexto completo en fullscreen horizontal bajo. El detalle queda dentro de la consola con desplazamiento acotado. El fallback SVG gira mediante requestAnimationFrame, colorea los arcos por zona y respeta movimiento reducido. En pantallas táctiles de hasta600px de alto se elige esta representación ligera.

## Voz sencilla y contextual

Cada aviso personalizado permite escribir una frase normal y elegir zonas y estados a anunciar. Se distinguen abiertos/cerrados actuales, sin conexión, batería baja y sensores que acaban de cambiar durante ese evento. Se cuentan sensores únicos y zonas por identificador; un sensor no disponible nunca se presenta como cerrado. Los filtros solo cambian la información hablada cuando ocurre el aviso existente.

Los anuncios personalizados añaden el modo real y el sensor/zona causante de una alarma. El desarmado desde Argus utiliza el perfil del comando autenticado; el evento oficial de HomeKit se correlaciona por contexto y entidad para identificar ese origen, sin inventar el nombre de la persona. Acciones externas con usuario HA se identifican como cuenta HA, no como persona de Apple Casa. Orígenes desconocidos se mantienen desconocidos.

Guía: [Editor de voz](VOICE_EDITOR.md).

## Compatibilidad y persistencia

No cambian las decisiones de armado, autorización, PIN ni emparejamientos. Se añade voice_message_rules al almacenamiento UI existente para guardar las selecciones por mensaje. Los mensajes heredados conservan su comportamiento mientras no se adopte el editor sencillo. Configuración YAML opcional: examples/configuration.yaml; las nuevas selecciones se configuran desde la interfaz.

## Validación y pendientes

Verificados localmente: TypeScript, build, 69 pruebas frontend, 11 pruebas de filtros/runtime de voz, 12 regresiones de anuncios, 8 de identidad/desarmado, 3 del adaptador/contexto HomeKit y 3 de migración de ajustes.

La revisión visual en Safari/iPhone y Echo Show y la reproducción física en los altavoces siguen pendientes. El acceso a HA del usuario quedó bloqueado por HTTP403 y la comprobación remota se detuvo a petición del usuario. Las pruebas controladas no acreditan que el audio se escuchara en hardware.

## Reversión

Antes de actualizar, conservar una copia de seguridad HA que incluya la integración y su configuración. Las versiones anteriores desconocen voice_message_rules; podrían volver al comportamiento de voz anterior. Conservar los datos existentes y restaurar la versión previa de los archivos si fuera necesario, sin borrar la integración ni emparejamientos.
