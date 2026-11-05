# Zonas y configuración de modos · auditoría y propuesta

Fecha: 14 de octubre de 2026. Estado: propuesta para implementar; eliminación del prototipo realizada.

## Evidencia del código actual

- Modos: `src/legacy/argus-panel.ts`, `_renderModeTabs`, `_renderModeView`, `_saveMode`: cinco pestañas; formularios HTML imperativos, sensores y salidas duplicados por modo.
- Configuración canónica por entidad: `modes.__by_entity__[entity_id][mode]`; conservar el aislamiento entre paneles.
- `custom_components/argus/zones.py`: zonas con ID, nombre, entidades y dispositivos; sin límite de diez, número estable, áreas personalizadas, selección de modos ni condiciones por sensor. El saneador descarta propiedades que no conoce; ampliar solo React perdería los campos al guardar.
- `alarm_control_panel.py`, `_sensors_for_state`: lee listas de sensores por modo, no zonas. `_async_sensor_changed` descarta estados inactivos/cerrados y procesa alarmas en estados armados. Desarmado con zonas activas y condiciones de cierre necesitan una ruta explícita nueva.
- `sensor_state_runtime.py` tiene reconciliación y vigilancia de sensores. Integrar las mismas reglas allí para que una segunda ruta no contradiga la nueva configuración.
- Sirenas: `_get_siren_entities`, `_async_siren` y salidas de pánico ya resuelven dispositivos por modo, luces configurables y llamadas al dominio correspondiente con alternativa universal. Reutilizar esas capacidades; no prometer acciones que la entidad no soporte.
- Cristales y toasts ya leen zonas y sensores; todavía existe un fallback visual a seis cristales sin zonas configuradas. La nueva configuración debe sustituir ese fallback por cero zonas y un estado vacío.

## Flujo propuesto

Conservar arriba Desarmado, En Casa, Ausente, Noche y Configuración SOS. Sustituir Sensores de intrusión por Zonas.

Mostrar «0 de 10 zonas utilizadas · Máximo 10 zonas» y «Agregar zona». Al crear una zona, asignar el primer número libre entre 1 y 10. No renumerar las demás al eliminar una: los registros y los cristales deben conservar su identidad.

Crear una zona una sola vez, compartida entre modos del mismo panel. Ejemplo: Zona 1 · Cocina. Cada zona tiene ID estable, número estable, área y lista de sensores.

Usar un editor React dentro de Modos que sustituya el contenido con transición elástica y botón Volver. Evitar varios modales superpuestos, especialmente en móvil.

1. Área: elegir existente o crear un nombre propio. Permitir renombrar y eliminar; si tiene zonas, solicitar reasignación antes de eliminar. Las áreas propias de Argus no borran áreas de Home Assistant. Opcionalmente ofrecer importar nombres de HA.
2. Sensores: buscador y selección manual de entidades, mostrando nombre, tipo, estado y zona asignada. Añadir una entidad, no todas las entidades de un dispositivo indiscriminadamente.
3. Condición de cada sensor: abrir, cerrar, movimiento, humo/gas/fuego detectado, o condición avanzada si la entidad la admite. Mostrar solo opciones compatibles y sus estados reales.
4. Activar zona en: cinco selectores independientes, todos elegidos por el usuario. Una zona puede estar activa simultáneamente en En Casa, Ausente y Noche.
5. Respuesta: disparar alarma o solo avisar. Las salidas de alarma las define el modo. Las excepciones por zona serían una opción avanzada posterior.

Un sensor pertenece a una zona principal para evitar que el mismo evento abra varios cristales o produzca alertas duplicadas. Cambiarlo de zona es una reasignación explícita.

## Ejemplo

Zona 1 · Cocina, activa en Desarmado, En Casa, Ausente y Noche:

- Ventana cocina: disparar al abrir.
- Detector de humo cocina: disparar al detectar humo.
- Movimiento cocina: si no debe disparar en En Casa, permitir una excepción explícita por sensor y modo; no duplicar el sensor ni la zona para conseguirlo.

En cada pestaña, el usuario ve las zonas habilitadas en ese modo y las salidas que responderán. Seleccionar manualmente un enchufe, luz, sirena u otro actuador compatible. Para cada salida, mostrar la acción admitida; las luces conservan color y efecto disponibles.

## Estados y seguridad

- Zona habilitada en Desarmado: permite vigilancia explícita en ese estado, por ejemplo detectores seleccionados por el usuario. No activar zonas automáticamente.
- Zona habilitada en SOS: se vigila durante un SOS ya activo. Marcar esa casilla no convierte una apertura en SOS ni realiza llamadas. Si se desea una acción de pánico desde un sensor, debe configurarse aparte y expresamente.
- El cristal indica el estado físico de la zona, independiente del disparador. Un disparador «al cerrar» puede activar la alarma con el cristal cerrado y un toast «Cerrado · Alarma disparada».
- Zona abierta si al menos un sensor físico asignado está activo. Recoger el cristal cuando todos vuelvan a su estado normal. Un valor desconocido/no disponible nunca equivale a Cerrado.
- La alarma queda disparada hasta una detención manual aunque el sensor se cierre. El toast muestra Cerrado brevemente y desaparece; no detener sirenas, no desarmar.
- Intrusión: toast de Zona N · Área, nombre del sensor y estado; botón manual para abrir emergencias. SOS: pregunta automática de llamada; la llamada solo ocurre al tocar su enlace.
- Máximo diez zonas validado en UI y servidor. Una zona equivale a un cristal, con orden estable por número. Las zonas deshabilitadas en un modo permanecen identificables pero visualmente inactivas.
- No disparar por recargar la página ni por reconstruir el formulario. Evaluar transiciones reales en el backend y registrar sensor, zona, modo y condición.

## Migración y comprobaciones antes de instalar

1. Respaldar y migrar listas actuales sin perder sirenas, omisiones, retardos ni ajustes por entidad. No inventar áreas: ofrecer asignarlas a zonas antes de confirmar la migración.
2. Ampliar contrato y saneador de zonas, áreas, asignaciones y condiciones; comprobar guardar/cargar sin pérdida de datos.
3. Implementar un único evaluador de eventos para todos los modos, vigilancia y reconciliación. Separar condición de disparo de estado físico.
4. Rehacer editor React y mantener compatibilidad de lectura durante la migración; retirar la selección directa antigua solo cuando la migración esté completa.
5. Probar zonas 0/1/10, intento de 11, borrar una intermedia, reasignar sensor y área, modos combinados, cierre como disparador, sensores desconocidos, varios sensores abiertos y eventos simultáneos.
6. Verificar toasts, cristales y salidas con estados y servicios simulados; ninguna prueba debe llamar a emergencias ni activar dispositivos reales.

La nueva configuración aún no está implementada por esta auditoría. El prototipo visual fue retirado; el núcleo y las zonas reales se conservan.

## Refinamiento confirmado: acordeones, espera y salidas

Estas decisiones sustituyen cualquier alternativa anterior incompatible de este documento.

### Acordeón exclusivo y borradores

Cada Zona N · Área despliega su configuración individual. Solo puede estar abierta una zona. Cambiar de zona con cambios pendientes presenta Guardar y continuar, Descartar y continuar, o Seguir editando. El guardado debe completarse en el servidor antes de abrir la siguiente. Si falla, conservar el borrador y mostrar el error. Aplicar la misma protección al cambiar de modo, cerrar el editor o salir de la configuración. No confundir cerrar el acordeón con cerrar físicamente el sensor.

### Una sola configuración de armado en espera

Etiqueta exacta: «Modo de armado en espera hasta cerrar sensores». Retirar la duplicación entre Bloquear si abiertos y Esperar armado. El flujo de espera debe ejecutarse automáticamente al solicitar el modo con sensores relevantes abiertos; no añadir una segunda opción equivalente ni interpretar la simplificación como permiso para armar ignorando sensores.

Reutilizar el motor compartido por Home Assistant y HomeKit: anunciar cantidad y nombres, anunciar cierres individuales y terminar con «Todos los sensores están cerrados, activando modo X». Revalidar antes de confirmar el estado armado; sensores desconocidos/no disponibles no cuentan como cerrados. Conservar cancelación manual, prevención de callbacks obsoletos y vigilancia de recuperación.

Evidencia: `arming_voice.py` ya publica `recently_closed`, `recently_opened`, `all_closed` y mensajes; `i18n.py` contiene el mensaje de todos cerrados; `_async_recheck_arm_request` invoca los anuncios y valida generación de solicitud antes de completar. `sensor_state_runtime.py` integra eventos y vigilancia con HomeKit/HA. Adaptar las entradas a zonas sin duplicar ese flujo.

Para sensores de movimiento/detección, presentar su estado real y criterio de reposo, no llamarlos literalmente puertas abiertas/cerradas. Incluir únicamente sensores habilitados para ese modo en el conjunto que bloquea el armado.

### Retardos individuales

Retirar la sección global Tiempos del nuevo editor. Cada sensor ofrece Instantáneo (predeterminado para nuevas asignaciones) o Con retardo, con segundos validados. Ese retardo es previo al disparo de alarma tras el evento; no retrasa el cierre del acordeón ni equivale al armado en espera. Una condición y retardo compartidos se heredan por los modos elegidos; una excepción por sensor/modo debe ser explícita.

El backend ya lee `sensor_settings[entity_id].type` y `.delay`, pero también tiene fallback global a `entry_delay`, lista `entry_sensors` y `arming_time`. Retirar el formulario sin migrar estas rutas dejaría retardos ocultos. Mostrar los valores migrados antes de guardar y comprobar que el resultado efectivo coincide con cada sensor. No convertir a instantáneos sensores existentes con retardo sin consentimiento sobre la migración.

### Sirenas unificadas

Eliminar las secciones Omitir sensores y Paneles de alarma externos. Mantener una sola sección Sirenas con selección manual de dispositivos y acciones compatibles: sirena, luz, enchufe/switch, controlador, panel externo y salida MQTT configurada.

Conservar los adaptadores existentes de paneles externos, las salidas de pánico y los parámetros de luces. Los paneles usan servicios específicos de alarma; no tratarlos como un switch. Las salidas MQTT necesitan tópico, payload de activación y detención y permisos/validación equivalentes a la configuración actual. Mostrar tipo y acción para que el usuario sepa qué hará cada salida.

Las omisiones actuales deben aparecer en una vista previa de migración para decidir asignación/activación por modo; borrar la lista antigua sin resolverlas podría incorporar sensores que el usuario había excluido.

### Comprobaciones adicionales

- Cambiar de zona con borrador: guardar, descartar, cancelar y fallo de guardado.
- Espera de armado desde UI, servicio HA y HomeKit: conteo, nombres, cierres sucesivos, reapertura durante espera y armado solo al completar.
- Retardos por sensor: cero por defecto nuevo, retardo explícito, migración de valores antiguos y ausencia de fallback global invisible.
- Salidas unificadas: servicios específicos, luces, paneles y MQTT simulados; ninguna sirena real durante las pruebas.

Este refinamiento está guardado como especificación; el nuevo editor y su migración siguen pendientes de implementación.
## Implementación 2.9.83

- Implementado: editor de diez zonas en Modos, edición exclusiva con guardado/descartar antes de cambiar, nombres/áreas, sensores únicos, selección de modos, condición y retardo por sensor.
- Implementado: persistencia de zonas y proyección de sensores a modos en una sola operación; sensores antiguos sin zona permanecen activos y se señalan durante la migración.
- Implementado: configuración TTS en el panel, validación de entidades actuales, persistencia por instancia y protección de parámetros administrados por YAML.
- Conservación: al agregar un sensor antiguo al editor, se hereda la configuración de retardo del modo actual. El editor aplica una condición/retardo único del sensor a todos los modos seleccionados; si los retardos anteriores diferían por modo, revise ese valor al migrar.
- Verificado con tests de lógica aislada; el servidor Home Assistant en ejecución no se reinició y no se activaron dispositivos reales.

## Reorganización de la interfaz 2.9.84

- El editor de zonas pasa a una pestaña global en la barra superior de Modos / SOS. Cada modo enseña su resumen de zonas asignadas y ya no contiene el editor duplicado.
- La tarjeta de sirenas muestra una única lista y usa un selector que reúne actuadores `turn_on`/`turn_off` con paneles `alarm_control_panel` compatibles.
- La selección se proyecta a los campos existentes `sirens` y `external_panels` para mantener los servicios correctos al disparar, armar y desarmar. MQTT queda como origen de entidades compatibles, no como checkbox redundante en la tarjeta.
- En la instancia local se confirmó que el editor anterior mostraba una Zona 1 con error de guardado; la lectura en una sesión nueva devuelve cero zonas persistidas. La sesión anterior se dejó intacta para no perder ese borrador. La pestaña nueva demuestra la estructura reorganizada sin activar ni guardar dispositivos.
