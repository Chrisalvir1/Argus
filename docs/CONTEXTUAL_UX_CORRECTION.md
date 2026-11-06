# Corrección contextual — 2026-11-05

Copia local existente 2.9.158; se conserva su versión, sin retroceder a 2.9.152 mencionada en la especificación.

Se eliminó el disclosure Zona para diagnóstico. El selector accesible usa la misma selección contextual existente del cristal y aparece antes del detalle. Se mantienen las métricas al abrir una zona. El diagnóstico formatea timestamps con idioma y zona horaria HA, humaniza contactos y actividad, y elimina mensajes de pruebas físicas de sus resultados.

La actualización reutiliza el estado HA recibido por el bridge: los cambios de las entidades configuradas invalidan la consulta de diagnóstico. No agrega polling ni suscripción. Las respuestas anteriores se descartan al cambiar el contexto o estado. La compatibilidad previa usa physical_test_kind del resultado backend; aún debe verificarse su equivalencia con las exclusiones por disparo inmediato aplicadas al iniciar sesiones.

Prueba física muestra el conteo previo y explica Guiada/Libre. No permite iniciar mientras se consulta o sin compatibles.

Verificado: TypeScript, 81 pruebas frontend (18 archivos), build; git diff --check. Backend sin cambios.

Pendiente: regresión específica de actualizaciones HA/batería, recorrido WebSocket en laboratorio aislado, equivalencia del conteo con exclusiones de inicio, tres viewports 1920×1080 / 390×844 / 480×320, interacción de teclado y selección cristal. La inspección del navegador integrado encontró la pestaña antigua aún abierta con Zona para diagnóstico. No se afirmó que cargara el bundle nuevo. No se ejecutó armado, SOS, llamada ni pruebas físicas.

No declarar cierre integral hasta completar estos pendientes.

## Corrección posterior solicitada por el usuario

El panel muestra una sola tarjeta Verificar zonas. Abre un diálogo nativo modal, con selección de todas/una zona compartida con el cristal, dos métodos de verificación, foco inicial en Cerrar, Escape y restauración del foco. La modalidad física inicial es Guiada; se muestran las causas que impiden iniciar, incluidos ausencia de compatibles y falta de conexión.

Verificación real en navegador integrado 8123: apertura, consulta al backend completada, cambio a prueba física y cierre con retorno del foco. El backend devolvió una sola entidad: Sun Próximo amanecer, de MICHHI, informativa y sin batería. Ninguna entidad compatible con prueba física. Esto explica la ausencia de una prueba de apertura/cierre real; no se fabricaron resultados ni se añadieron sensores a la configuración del usuario. No se validó inicio físico con contacto en esta instalación.

Tras la comprobación, se añade mensaje explícito para selección vacía o exclusivamente informativa y se oculta Iniciar cuando no existen compatibles. La prueba física completa y cambios de contacto/batería en laboratorio siguen pendientes.

## Verificación contenida en el panel — 2026-11-05

Se sustituye el diálogo de capa superior por una sección interna del panel contextual. Mientras está abierta, se retiran del render los indicadores, detalle y navegación anteriores; el estado general sigue visible. Escape y Cerrar restauran el foco al botón Verificar zonas.

Comprobado en navegador integrado sobre 8123: abrir, seleccionar MICHHI, diagnóstico recibido dentro de la sección, cambiar a todas las zonas, prueba física muestra ausencia de compatibles dentro de la misma sección, cerrar y recuperar indicadores y foco. Sin contenido de detalle detrás ni oscurecimiento global. Captura observada confirma contención al ancho del panel. TypeScript, 83 pruebas frontend, build y diff-check aprobados. La prueba física con contactos reales/virtuales no se ejecutó: la configuración actual solo contiene una entidad informativa.
## Estado del sensor y datos disponibles — 2026-11-05 (2.9.160)

- Causa del dato confuso: el panel estaba listando una entidad de tipo `timestamp` como si fuera un sensor de zona y el rótulo anterior no explicaba que carece de estado de contacto. El contrato del diagnóstico tampoco incluía el instante del último cambio ni disponibilidad separada.
- El backend ahora devuelve disponibilidad, batería (incluyendo atributo `battery`) y `last_changed`. La UI solo traduce `on/off` a Abierto/Cerrado para clases de contacto; movimiento se presenta como Actividad/Sin actividad y otras entidades binarias como Activo/Inactivo.
- Si un contacto está abierto, el panel indica «Abierto desde [hora] · continúa abierto». Para una entidad sin atributos de batería no inventa porcentaje. Un timestamp se indica como entidad que no es sensor de seguridad; el estado de conexión se conserva como Disponible/Sin conexión.
- La zona actual del entorno contiene la entidad informativa Próximo amanecer y no tiene contactos/detectores configurados; por tanto, no puede mostrar abierto/cerrado ni horas de apertura reales hasta que se asignen entidades de contacto. No se cambió la configuración ni se accionó equipo.
- Versión local 2.9.160. TypeScript, build, `git diff --check`, 83 pruebas frontend y las 3 pruebas dirigidas de diagnóstico backend pasan. La suite backend amplia aún tiene un fallo de contrato no relacionado: `test_walk_test_manager_start_and_stop` espera `argus_walk_test_started`, mientras el código emite `argus_walk_test_updated`; se conserva sin alterar ese comportamiento ajeno al diagnóstico.
- El servidor local de Home Assistant en `127.0.0.1:8123` responde y entrega el bundle compilado desde `api/argus_static/react-dist/argus-frontend.js`. La vista abierta presenta el nuevo texto contextual y el dato real del amanecer; esto confirma que el cambio de frontend se aplicó localmente.
- Verificación del contenido real de contacto/batería: limitada por la configuración cargada, que contiene solo `Sun Próximo amanecer` como entidad de MICHHI. El componente ahora interpretará contacto y batería cuando Home Assistant aporte entidades y atributos compatibles, pero esa lectura no se puede validar en vivo sin un contacto asignado. El proceso backend activo no se reinició, así que el payload ampliado de `last_changed` requiere recarga de la integración o reinicio de Home Assistant para quedar activo; no se reinició para evitar interrumpir el servicio.
