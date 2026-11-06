## 2026-11-06 — v3.7.0

Versionado solicitado por el usuario. Incluye todos los cambios locales de verificación fullscreen y contexto. No confundir filtrado de zona seleccionada con detección incompleta. Validación visual de los últimos ajustes en hardware pendiente. No modificar configuración operativa durante las comprobaciones.

## 2026-11-05 — Versión local 2.9.160: estados completos de sensor

- El diagnóstico contextual muestra estado interpretado según clase de entidad, conexión, batería y, para contactos que siguen abiertos, la hora de inicio (`last_changed`). No extrapolar «abierto/cerrado» a sensores de movimiento ni a entidades informativas.
- Una entidad como `sensor.sun_next_dawn` se marca «No es sensor de seguridad»; un timestamp no es una apertura ni un cierre. Solo exponer batería o porcentaje cuando HA lo informe.
- Backend añadió `availability`, `battery_low` y `last_changed` al resultado de diagnóstico. Bundle invalidado en bootstrap para la vista local 8123.
- Mantener configuración de zonas: se observa que la zona de prueba contiene una entidad informativa y no contactos/detectores; no agregar, quitar ni inventar entidades.

## 2026-11-05 — Versión local 2.9.159

Usuario autoriza versionar corrección contextual para visualizar cambios. Actualizados manifest, const y URL del bundle para invalidar caché. Sin commit/tag/publicación. Pendientes en CONTEXTUAL_UX_CORRECTION.md; no declarar validado el recorrido WebSocket real.

# Memoria de decisiones UX de Argus

## Fase 7 — Implementación e integración completadas (2.9.150)

- Diagnóstico contextual y pruebas guiadas o libres por zona. La disponibilidad no acredita una prueba física.
- Chrome y Home Assistant aislado confirmaron selección por cristal, contacto y PIR virtuales, actualizaciones WebSocket, recuperación de sesión, cancelación y expiración.
- Permisos administrativos en el servidor. SOS y las alarmas conservan su prioridad durante las pruebas.
- El selector contextual admite teclado. Verificadas las vistas de 390×844 y 480×320. El cierre ejecutó cuatro pruebas frontend y ocho backend dirigidas.
- Quedan pendientes sensores físicos y lectores de pantalla.

## Fase 6 — Cierre de validación en navegador (2026-11-04, 2.9.149)

- Fase 6 completada a nivel de implementación e integración tras recorrer Argus en navegador contra Home Assistant de laboratorio aislado; no repetir las auditorías ni las pruebas automatizadas que ya estaban aprobadas.
- Flujo verificado: armado Ausente bloqueado por contacto virtual abierto → «Armado en espera» → bypass autorizado → «Armado · Ausente» con protección parcial → el contacto se cierra y sigue omitido → reincorporación manual desde el dashboard → el backend confirma y desaparece la omisión → nueva apertura produce alarma enclavada → desarmado con PIN de prueba termina el ciclo.
- También se comprobó que la acción de reincorporación se rechaza si el sensor ya no está en reposo, sin cambio visual optimista; un perfil estándar no recibe la acción administrativa de reincorporar.
- Defecto puntual corregido durante la validación: la proyección optimista `arming` podía permanecer visible después de la confirmación `armed` recibida del backend. La reconciliación ahora retira esa proyección con el estado confirmado, incluso cuando el ACK llega tarde.
- Evidencia del recorrido aislado guardada durante la sesión en `/tmp/argus-f6-espera.jpg`, `-recuperado.jpg`, `-rechazo.jpg`, `-reincorporado.jpg`, `-alarma.jpg`, `-desarmado.jpg` y `-estandar.jpg`. No hubo sirenas, llamadas ni salidas reales; el laboratorio local quedó apagado y la instalación operativa no se modificó.
- La implementación queda en versión local 2.9.149. No crear release/tag ni desplegar. Las validaciones en hardware físico siguen siendo independientes y pendientes; no iniciar Fase 7 automáticamente.

## Fase 5 — Cierre controlado (2026-11-04, 2.9.148)

- Implementación aprobada por el usuario. Congelar el dashboard contextual, el diseño premium y el responsive. Mantener el detalle a ancho completo, las fechas normalizadas y las advertencias de batería, bypass y permisos.
- Línea base operativa aprobada: 7 zonas, 0 listas, 0 pendientes y 7 sin verificar. Conservar las 67 pruebas frontend aprobadas.
- Laboratorio independiente en loopback (puerto 18123), almacenamiento nuevo y un contacto virtual en Patio virtual. Sin número de emergencia, sirenas, automatizaciones ni reproductores. La prueba se limitó a estados virtuales con Argus desarmado.
- Home Assistant emitió eventos WebSocket reales para cerrado → abierto → no disponible → cerrado. El panel mostró inicialmente Cerrado y 1/1/0 (zonas/listas/pendientes), pero el detalle seleccionado quedó desactualizado ante apertura e indisponibilidad. Volver a la vista general mostró 1/0/0 y una zona sin verificar. La recuperación tampoco se mostró automáticamente; al abrir Diagnóstico apareció Cerrado y Disponible. La integración visual en vivo y el recuento automático de apertura siguen pendientes.
- La validación WebSocket es el único pendiente de integración de la Fase 5. La Fase 6 se reserva para armado en espera, bypass, recuperación y reincorporación manual de sensores durante un armado activo.

## Avisos de voz TTS (2026-10-23)

- El selector permite hasta cinco reproductores que reciben el mismo anuncio en paralelo. Consultar tanto las entidades `media_player` activas como las habilitadas en el registro de Home Assistant, e incluir actualización manual; conservar selecciones guardadas si un reproductor queda fuera de línea. Google Cast, Alexa Media, AirPlay y JACK son elegibles cuando su integración los publica como entidades `media_player`. La instancia local de pruebas puede no tener reproductores y eso no implica que falten en el HA original.
- Argus ofrece solo español e inglés. «Automático (Home Assistant)» resuelve a uno de esos dos; el idioma/nombre del motor TTS no cambia el idioma del texto enviado al motor.
- Cada cuadro de texto TTS pertenece solo a su evento: inicio del armado en espera, cierre con varios pendientes, último sensor pendiente, todos cerrados, armado confirmado, cancelación, alarma inicial, sensor adicional durante alarma y cierre de sensor durante alarma.
- Cuando un sensor se cierra y queda exactamente uno pendiente, se lee el mensaje de «último sensor», incluyendo el sensor cerrado y el pendiente. La alarma disparada permanece activa hasta desarmar manualmente.
- No leer todos los cuadros en una misma acción. Las frases completas/cierre y armado confirmado son eventos distintos y se anuncian secuencialmente.
- Versión 2.9.128 incluye una prueba de cada ruta; el editor muestra un ejemplo del sensor cerrado al previsualizar el último pendiente. La detección ampliada de reproductores está en 2.9.129.

## Tablero y guardado de modos (2026-10-15)

- La configuración TTS «Voz de Argus» va dentro de la tarjeta «Armado», debajo de sus controles y antes de Sirenas/Guardar Modo.
- Cada modo debe confirmar con claridad el guardado. Al navegar con cambios pendientes, ofrecer Guardar y continuar, Descartar y continuar o Seguir editando; ante un error de persistencia, quedarse en la vista y mantener el borrador.
- El tablero se guarda automáticamente al terminar cada movimiento o redimensionado; no agregar botón Listo ni Guardar tablero. Mostrar estado Guardando/Guardado y terminar edición con un clic fuera del grid y la barra. Al mover o redimensionar, compactar verticalmente para cerrar huecos como iOS, manteniendo el orden y las columnas seleccionadas.
- La compactación debe sentirse continua, no tosca: durante el arrastre, vecinos sin animación que se reinicia por celda; al soltar, un asentamiento breve (260 ms) sin sobreimpulso fuerte. Durante resize, los vecinos no deben retrasar el borde bajo el puntero.
- No usar compactación vertical estándar para el gesto manual: esta compacta también al elemento recién arrastrado y lo regresa hacia arriba aunque se suelte abajo. El compactor personalizado mantiene ese elemento en su celda elegida, reacomoda los demás alrededor sin colisiones y luego limpia la marca temporal `moved` antes de guardar.
- El dashboard actual importa `Responsive` desde `react-grid-layout/legacy`; esa envoltura ignora `compactor`. Usar `compactType=null` para que no haya snapback durante el gesto y llamar `compactLayoutAroundAnchor` desde `onDragStop(layout, oldItem, item)` para colocar vecinos después del release.
- Llamar la misma compactación anclada desde `onResizeStop`; antes no ocurría y los widgets desplazados podían quedar detrás del redimensionado. Antes de compactar hacia arriba, empujar cualquier vecino que ya se solape debajo del ancla y verificar ausencia de colisiones.
- La auditoría de 2.9.135 encontró colisión ya persistida en el perfil Argus del laboratorio: `access-control` y `alarm-configuration` se solapaban en `lg`. `mergeLayouts` debe reparar layouts v5 al cargar (no solo migraciones antiguas), preservar `x` y empujar hacia abajo, y escribir el saneamiento de vuelta a HA. No declarar arreglado basándose solo en una prueba del algoritmo si el perfil existente todavía está corrupto.
- Ocultar un widget conserva su visibilidad en almacenamiento y debe existir un acceso recuperable para mostrar widgets ocultos aunque todos estén ocultos.
- Mantener layouts independientes por breakpoint. Un movimiento en anchos móviles (xs/xxs/sm) solo modifica ese breakpoint; no copiar layouts interpolados de React Grid Layout sobre web/tableta ni a la inversa.
- El diseño final aprobado del núcleo de seguridad está congelado: no modificar su aspecto ni sus animaciones.

## Perfil y ajustes

- La apertura del menú/modal de perfil debe tener una elasticidad visible y agradable; al cerrar, el usuario también quiere un pequeño rebote. Evitar una transición rígida o una desaparición instantánea.
- En móvil vertical, los ajustes de perfil deben quedar centrados y completamente visibles, con desplazamiento interno cuando el contenido supere la altura disponible y sin desbordamiento horizontal.
- El modal de ajustes de perfil se migró a una capa React. Conserva las acciones actuales de ajustes y su integración con Home Assistant.
- Apertura elástica y cierre con rebote; en móvil vertical queda centrado, con ancho y alto limitados, desplazamiento interno y sin desbordamiento lateral.
- Mantener teclado (Escape, foco y tabulación), `aria-expanded` y `prefers-reduced-motion` al modificar esta interfaz.

## Auditoría de referencia (2026-10-13)

- El HTML Apple compartido contiene una animación SVG del botón de menú con apertura/cierre separados, dos fases y duración de 240 ms. No incluye los recursos externos suficientes para confirmar el comportamiento exacto de sus modales.
- El menú actual de perfil vive en `src/legacy/argus-panel.ts`, está construido como HTML imperativo y se posiciona de forma absoluta bajo el perfil.
- Hay CSS para clases `opening` y `closing`, pero el manejador encontrado alterna `display` directamente y no activa esas clases; por ello la animación definida no parece conectada al flujo real.
- El ancho mínimo de 320 px puede exceder viewports menores, y la posición absoluta bajo el perfil no garantiza centrado ni visibilidad en móvil vertical.
- El proyecto ya usa React 19 en el dashboard y la consola; migrar el modal es técnicamente viable, aunque requerirá conservar los callbacks/servicios existentes y montar/desmontar de forma compatible con el custom element de Home Assistant.
- Implementación actual: `src/features/profile/dialog.tsx` monta el modal React fuera del contenedor visual que recortaba su contenido y React crea los controles a partir de la plantilla existente para preservar todos sus IDs y callbacks.
- En móvil vertical, el host React ocupa el viewport entero: debe conservar `pointer-events: none` y solo la capa visible (`opening`/`open`) puede recibir eventos. Si la capa cerrada captura toques, bloquea el botón del perfil aunque esté invisible.
- El bundle del panel está cache-busteado por la versión del integration (`VERSION` y `manifest.json`); tras regenerar el JS, incrementar esa versión y reiniciar Home Assistant local si la vista continúa ejecutando el código anterior.
- Verificado en viewport 546×715: el perfil abre centrado y desplazable, y cierra con su botón. No ejecutar acciones SOS para probar este diálogo.
- El modal de perfil debe escalar desde el centro del botón de perfil y volver a ese mismo punto al cerrar, con sobreimpulso elástico y rebote breve. El icono de cierre es SVG de trazos para evitar la deformación tipográfica de una ×.
- En desktop el modal de perfil debe quedar compacto (máximo 320 px); en móvil vertical, hasta 340 px dentro del ancho disponible. Los desplegables deben conservar un pequeño margen interior para que sus flechas no queden pegadas al borde. Mantener radios coherentes: tarjeta principal 24 px, tarjetas interiores 16 px, controles 14 px y chips 10 px.
- Sincronizar el estado oculto del modal con `animationend` del cierre y mantener el mismo `scale` final/inicial para evitar un destello; compositor solo durante la animación (`will-change`), con rebote corto y moderado.

## Rendimiento adaptativo (2026-10-14)

- Seguir la cadencia real de requestAnimationFrame, incluido refresco variable/ProMotion cuando el navegador lo entregue. No prometer ni forzar 120 FPS ni deducir Hz físicos de `update: fast`.
- Las interpolaciones del núcleo usan tiempo transcurrido, con respuesta consistente a 30/60/100/120 cuadros/s. Evitar límites fijos de 16 ms y lecturas de geometría DOM por cuadro.
- Calidad automática: observar intervalos y coste de render, bajar resolución tras carga sostenida y recuperarla gradualmente con histéresis. Pausar el núcleo fuera del viewport/en pestaña oculta; el modo de movimiento reducido solo renderiza ante cambios.
- Diagnóstico técnico del canvas: `data-argus-frames` expone cadencia observada, FPS entregados, intervalo p95, coste CPU de render y factor de calidad; no representa Hz físicos ni tiempo GPU. `data-argus-color-space` informa el espacio usado.
- P3 cuando el dispositivo y WebGL lo soporten, sRGB como fallback. Las variables CSS base deben ir antes de las reglas de gama amplia y detectar `color-gamut`, además de soporte sintáctico. Gama amplia no equivale a salida HDR. Esta versión mantiene el núcleo en rango dinámico estándar.
- Modal de perfil: conservar origen sin leer el rectángulo escalado; contenido React memorizado; scroll interno no debe causar commits síncronos. Mantener rebote al abrir/cerrar y ocultar el contenido pequeño al final del cierre. Evitar backdrop blur durante la transformación.
- Safari/WKWebView y macOS pueden limitar la cadencia por preferencias, energía y políticas del compositor. Argus no puede cambiar esas políticas ni invocar APIs nativas CADisplayLink desde una página web.

- Móviles básicos: si hay 2 núcleos o menos, 2 GB o menos reportados, o ahorro de datos, iniciar calidad conservadora (.65), sin antialias ni transmisión de cristal; los hints ausentes no significan dispositivo débil. Desactivar blur de los controles cuando la calidad cae a .7 o menos. Si WebGL no está disponible o pierde contexto, mostrar núcleo SVG estático con color de estado.

## Seguridad y paleta de modos (2026-10-14)

- Implementado en 2.9.83: editor de hasta diez zonas en Modos, acordeón exclusivo, área como nombre personalizable, sensor único por zona, asignación múltiple de modos, condiciones abrir/cerrar/movimiento/detección compatibles con la clase, retardo individual, un cristal por zona y persistencia de zona/configuración de modos en una sola operación. Antes de cambiar zona o modo, solicita guardar, descartar o continuar editando.
- La condición y el retardo de un sensor son comunes a los modos seleccionados. La UI hereda el retardo del modo actual al añadir sensores antiguos. Los retardos previos distintos entre varios modos requieren revisión manual. Los sensores sin zona siguen activos y se muestran como pendientes de migración; no eliminar silenciosamente la cobertura antigua.
- TTS de armado se configura desde Modos: activar, motor, reproductores y mensajes. YAML tiene prioridad y la UI no permite sobrescribir sus claves. El flujo de avisos y estados mantiene la lógica de HA/HomeKit existente.
- La auditoría y la propuesta detalladas están en `ZONES_CONFIGURATION_AUDIT.md`; las limitaciones de migración están en `RELEASE_NOTES_2.9.83.md`.
- Refinamiento confirmado: zonas en acordeón exclusivo, solo una abierta. Si hay cambios al cambiar de zona, modo, cerrar editor o salir: Guardar y continuar / Descartar y continuar / Seguir editando. No cambiar de zona antes de completar el guardado; conservar borrador ante error.
- Sustituir las opciones redundantes Bloquear armado / Esperar por una sola configuración: «Modo de armado en espera hasta cerrar sensores». Reutilizar el flujo compartido de HA/HomeKit y TTS: cantidad y nombres abiertos, cierres uno a uno y «Todos los sensores están cerrados, activando modo X»; armar únicamente al comprobar que todos los sensores relevantes están listos. Sin nueva sección global de tiempos.
- Retirar del nuevo editor Omitir sensores y Paneles de alarma externos como secciones separadas. Unificar salidas en Sirenas (sirenas, luces, enchufes, switches/controladores y paneles externos compatibles HA/MQTT). No asumir servicio turn_on para un panel de alarma ni publicar a MQTT sin configurar explícitamente su acción.
- Cada sensor tiene disparo Instantáneo por defecto o Con retardo en segundos, dentro de su configuración de zona. El retardo previo al disparo no es un tiempo de espera de armado. Migrar valores antiguos con vista previa; no borrar silenciosamente omisiones ni retardos configurados al retirar controles.

- Avisos: a la derecha del núcleo en escritorio y fullscreen; centrados sobre el núcleo en vertical. Entrada elástica desde la derecha; Cancelar contrae a una flecha reabrible con clic o deslizamiento.
- Cerrar físicamente un sensor devuelve su cristal al núcleo, pero nunca silencia ni desarma una alarma disparada. Alarma y SOS permanecen activos hasta una acción manual explícita; no detenerlos por tiempo.
- El canvas de seguridad usa sRGB (2.9.79); no reactivar la selección Display P3 que convirtió SOS rojo en naranja en WebKit.
- Desde 2.9.81: llamada automática solo para pánico/SOS real, nunca por cualquier estado triggered. Intrusión usa toast por sensor con zona, nombre y Abierto/Cerrado; Cerrado dura 1,8 segundos y desaparece. El botón inferior abre manualmente emergencias. Flecha persistente solo en SOS; en intrusión el cuadro se retira después del cierre. Mantener flecha y cuadro en una única transformación y limitar overflow-x en fullscreen.

- Para cambiar entre En Casa, Ausente y Noche, siempre hay que desarmar primero. Mientras está armado o armándose, los controles de modo quedan bloqueados; el modo activo conserva su color para mostrar el estado y los otros quedan grises. Durante SOS, todos los modos quedan bloqueados y solo se ofrece detener SOS.
- En Casa usa ámbar, Ausente usa morado (#A855F7) en botón, acento del panel, distintivo, núcleo y esquinas L. Noche conserva azul. Rojo queda reservado al disparo de alarma/SOS y alertas activas.
- La regla de cambio de modo se aplica también en la entidad de alarma, para que una llamada de servicio o automatización no pueda cambiar de modo sin desarmar.
- En móvil vertical, ubicar las L dentro de las esquinas reales del panel y reservar esa zona: inset de cabecera, selector y deslizadores para que no las tapen. Usar marcas compactas de ~30 px y colocarlas cerca del borde visible. En Ausente, núcleo y L usan morado #A855F7 directo, sin refracción/transmisión que lave el tono.
- Safari puede desplazar el color de la capa WebGL en gama amplia; corregir solo el canvas de Ausente con el ajuste de tono necesario para que coincida con el control CSS. No aplicar este filtro durante SOS/alarma.
- En móvil vertical, levantar el distintivo de estado unos 10 px para que no quede pegado al modo activo.

## Configuración global de zonas y salidas (2026-10-14)

- La pestaña **Zonas** es independiente en la barra superior de Modos / SOS. El editor global de hasta 10 zonas no se duplica dentro de cada modo ni dentro de SOS.
- Cada modo muestra solo un resumen de las zonas asignadas a ese modo; las asignaciones y edición viven en Zonas.
- La sección de salidas de cada modo tiene un único listado y un selector: **Agregar dispositivos y paneles compatibles**. Incluye entidades HA compatibles, también las expuestas por integraciones MQTT.
- La UI no ofrece un checkbox MQTT dentro de Sirenas. Conservar compatibilidad con configuraciones existentes y no excluir entidades MQTT cuyo dominio sea compatible.
- Al combinar el selector, persistir los `alarm_control_panel` en `external_panels` y salidas `turn_on`/`turn_off` en `sirens`; así los paneles usan sus servicios de alarma y las luces, enchufes, switches y sirenas se activan al disparar y se apagan al desarmar.
- SOS no tiene asignación ni resumen de zonas: la pestaña global Zonas solo asigna sensores a Desarmado, En Casa, Ausente y Noche. SOS solo configura sus salidas de emergencia.
- SOS reutiliza el selector de dispositivos/paneles compatibles de Sirenas, pero guarda su lista en `panic_outputs`, independiente de `modes.__by_entity__[entidad][modo].sirens`. Se puede elegir la misma entidad en varios modos; quitarla de un modo solo cambia ese modo.
- Editor de zonas en Liquid Glass. Argus inicia con tres zonas vacías habilitadas para representar tres cristales; puede haber hasta diez. Una migración única crea las tres en instalaciones cuyo almacenamiento anterior tenía la lista vacía; borrar todas después se conserva.
- El nombre visible de zona es fijo `Zona N`; únicamente se personaliza el área. No exigir área, modo o sensor para guardar una zona aún sin configurar. Los cristales muestran `ZONA N` y debajo el área (o «Sin área»).
- El error genérico de guardado se debía a crear `set(device_registry.devices)`: Home Assistant itera esa colección como `DeviceEntry`, que no es hashable. Comparar los IDs explícitos (`device.id`) y registrar/exponer errores inesperados del comando de zonas.

## Núcleo aprobado por referencia visual (2026-10-14)

- Bloqueo de diseño confirmado por Chris: el núcleo, cristales, proporciones, rotación y composición visual aprobados quedan congelados. No cambiar su diseño ni “mejorarlo” durante correcciones funcionales; requiere una petición explícita posterior.
- Auditoría de latencia 2026-10-14: `ACTION_LATENCY_AUDIT.md`. Separar demoras de servicio/estado de la animación; cualquier cambio al tiempo de movimiento del núcleo requiere autorización explícita.

- La imagen `codex-clipboard-3e253e75-b2d6-46a3-b64c-cb17bf1a6f6e.png` fija el diseño: sectores curvos redondos alrededor de la lente. No sustituir por gemas ni óvalos. Mostrar exactamente un cristal por zona activa: con tres zonas se muestran tres sectores de la misma forma individual de la referencia; al armar se amplían angularmente sin cambiar sus radios para completar el círculo. No mostrar reservas ficticias.
- Cada zona asignada lleva ZONA N y debajo el área en negro, impresos sobre la superficie 3D y adaptados al tamaño de su sector. El texto acompaña la apertura, inclinación y giro del cristal; no usar etiquetas HTML flotantes.

- Restaurar y conservar el giro suave original de los cristales desarmados (0.25 rad/s), respetando movimiento reducido. Las inscripciones siguen su transformación 3D. Renderizar tipografía nativa mediante CSS3D, independiente de la resolución adaptativa WebGL, para no pixelar los textos. La forma geométrica aprobada no cambia.
- Corrección del borde interior (2026-10-14): no ampliar la triangulación de una extrusión de 60° mediante `atan2 * ratio`; sus triángulos atraviesan el hueco interior al cerrar 1–3 zonas. Usar barrido polar con triángulos entre muestras angulares contiguas y perfil biselado de radios constantes. Se retira el anillo superpuesto que intentaba tapar las muescas. Verificado en En Casa normal/pantalla completa y pruebas de 1, 3, 6 y 10 cristales durante todo el cierre.

- Latencia de acciones, 2.9.96: proyectar En Casa/Ausente/Noche/Desarmado de inmediato al pulsar, y reconciliarlo con el estado incluido en la respuesta de `argus/perform_alarm_action`; ante error, retirar la proyección para mostrar el estado canónico. La entidad publica el estado antes de despachar tareas secundarias. Conservar los retardos configurados y la espera por sensores. No modificar el diseño congelado del núcleo.
- Verificación de 2.9.96: probar En Casa, Ausente, Noche y Desarmado únicamente en el Home Assistant local de laboratorio, con cero sensores y cero salidas configuradas. Nunca activar SOS ni llamar a emergencias durante estas pruebas.
- 2.9.97, controles: separar los deslizadores de Desarmado y SOS de los botones de modo, con un margen mayor adaptable al móvil y reducido en horizontal compacto. El halo exterior de ambos sigue el color del modo activo; conservar el borde/identidad verde de Desarmado y rojo de SOS. Este ajuste no modifica la geometría, animación ni diseño congelado del núcleo.

## Editor de tablero: requisitos y auditoría (2026-10-14)

- Carga local del panel, 2.9.137: Home Assistant servía la raíz pero `/argus` y los assets devolvían 404; el log mostraba setup de Argus >300 s. El registro del panel está serializado ante setup YAML y config-entry concurrentes; assets estáticos y ruta del panel se registran antes de branding, APIs de medios y sincronización Lovelace, que van al fondo. Verificar tras reinicio tanto `/argus` como `/api/argus_static/argus-bootstrap.js` y el log “architectural frontend registered”.

- Colisiones persistentes, 2.9.136: el layout v5 guardado del laboratorio tenía `access-control` y `alarm-configuration` superpuestos en `lg` (x34/y45/w40/h36 contra x28/y0/w68/h57). La corrección solo en React no bastaba si el panel no iniciaba sesión o conservaba caché. Ahora `argus/dashboard` repara y persiste la geometría en Home Assistant al entregar el panel, preservando columnas y moviendo la tarjeta solapada debajo del bloqueo. En la sesión verificada la revisión subió de 136 a 137, y el layout lg quedó sin intersecciones. Mantener como requisito: verificar el bundle servido, la sesión/perfil activo y el almacenamiento real de HA; no afirmar corrección basándose solo en el código o la imagen.

- Historial móvil: el widget debe tener un único dueño del desplazamiento (`#activity-log`). El contenedor `#w-activity` y el panel anfitrión no deben ser también desplazables; usar `touch-action: pan-y`, scroll táctil nativo y evitar blur/animaciones de entrada que parpadean en Safari vertical. Si la bitácora cambia durante el scroll, conservar anclada la primera fila visible.

- Chris quiere funcionamiento de widgets semejante a iPad, conservando el aspecto Liquid Glass de Argus: mover arriba/abajo/izquierda/derecha/centro, reorganizar vecinos, estirar y encoger en ambos ejes con contenido adaptable y respuesta ágil. El contenido debe reorganizarse por el tamaño real de la tarjeta, con textos legibles, controles accesibles y mínimos útiles.
- Informe completo en `DASHBOARD_WIDGET_AUDIT.md`. El usuario autorizó implementar la reparación en tres fases y cargarla en el laboratorio: (1) geometría, migración y guardado; (2) contenido adaptable; (3) gestos, animación y validación.
- Auditoría: React controla la carcasa de seis widgets, pero su contenido es HTML heredado; cabecera y seguridad están fuera del grid. Hay conflicto entre compactación/recolocación manual y layout del motor, transición de 180 ms activa durante resize, alturas máximas de viewport, overflow horizontal oculto y ausencia de container queries por widget. Hay además conversión 5→3 breakpoints con pérdida de distribución, visibilidad vaciada al guardar layout y falta de serialización de guardados.
- Recomendación: reconstruir la coordinación del editor y el contrato adaptable de cada widget, conservando lógica y servicios; probar primero el motor actual en aislamiento. Seguir el puntero directamente durante el gesto y reservar rebote para soltar/encajar. Validar ratón/tacto, persistencia y tamaños reales; no prometer fps sin perfilado.
- Fase 1, 2.9.99: el motor trabaja a 46 px por fila + 8 px de margen; las cinco distribuciones lg/md/sm/xs/xxs se guardan en `react_layout_v4` y en cache local; migrar v1/v3 escala una vez altura y posición vertical, preserva visibilidad y serializa las escrituras remotas. La migración de sm usa su distribución de cuatro columnas predeterminada cuando v3 no la guardaba. La versión 2.9.130 reemplaza la antigua regla de preservar huecos: activa compactación vertical al soltar o redimensionar, conserva columnas y persiste distribución completa.
- Fase 2, 2.9.99: la carcasa de cada tarjeta es un contenedor de tamaño. Historial, Automatizaciones, Respaldo, Acceso, Modos/SOS y Soporte usan el tamaño del widget, quitan límites basados en alto de pantalla y permiten scroll solo dentro de las regiones largas. Modos reorganiza pestañas y contenido; Respaldo envuelve acciones con texto multilínea; Acceso reduce su resumen cuando la tarjeta es angosta.
- Fase 3, 2.9.99: mientras se arrastra/redimensiona, la tarjeta sigue el puntero sin transiciones; al soltar, los vecinos tienen un rebote corto. Se agregan asas de ocho direcciones, autodesplazamiento al acercar el puntero a los bordes y controles de movimiento accesibles de una celda que respetan colisiones. Respeta `prefers-reduced-motion`. Esta edición no modifica el diseño, geometría ni animaciones del núcleo de seguridad aprobado.
- Regla de seguridad: validar este editor sin disparar SOS ni cambiar estados del sistema de alarma. Las pruebas de modos previas solo se hacen en el laboratorio sin sensores ni salidas enlazadas. La versión del panel en el laboratorio debe coincidir con `const.py`, `manifest.json`, el import cache-busted del bootstrap y el bundle de `react-dist`.
- Historial móvil, 2.9.100: el listener de Home Assistant refrescaba toda la lista al cambiar sensores/reloj/clima y reinsertaba filas con animación `iosGlassIn`, aunque el log no hubiera cambiado. `_renderActivityLog` ahora compara la firma de eventos visibles, locale, tamaño y error antes de tocar el DOM; las filas del widget no repiten la animación de entrada. Mantener scroll interno único en móvil y verificar nuevas entradas reales, traducción y tamaños.

- Editor libre, 2.9.101: Chris rechazó los presets S/M/L/XL y las flechas discretas de posición. El encabezado de cada tarjeta sirve de zona amplia para arrastrar; las asas de borde derecho e inferior cambian un eje cada una y la esquina inferior derecha usa un agarre visible grande para ambos ejes. La cuadrícula pasa a 96/80/64/40/32 columnas, filas de 10 px y márgenes de 2 px, con límites mínimos menores para poder formar tarjetas más cuadradas. La cuadrícula de pasos pequeños conserva el comportamiento de widgets que se acomodan sin solaparse.
- El layout se guarda como `react_layout_v5`; `migrateToV5` convierte una vez los datos remotos/locales anteriores y conserva proporciones, breakpoints y visibilidad. No volver a escalar registros v5. Durante drag/resize, React no actualiza el árbol entero por cada movimiento; el cambio se guarda al soltar o al terminar el redimensionado.
- Edición tipo iOS: no hay botones «Editar tablero» ni «Listo». Mantener presionado un área no interactiva de una tarjeta durante 560 ms entra en edición, tanto con mouse como con tacto. En edición, tocar fuera de la cuadrícula (incluso el panel lateral de Home Assistant) termina; Escape también la termina. Los widgets se guardan automáticamente en cada movimiento o redimensionado, sin confirmación final. Mantener controles de restaurar diseño y widgets ocultos dentro de la barra temporal de edición.
- Mantener Historial móvil con la firma de render de 2.9.100 y validar su lista en vista vertical; no cambiar el núcleo, cristales, geometría o animaciones de seguridad aprobados durante trabajo del tablero.
- 2.9.102: quitar los controles «Editar tablero» y «Listo». Entrar con pulsación larga de 560 ms en zona no interactiva de un widget, guardar cada movimiento/redimensionado al soltar y finalizar al tocar fuera de la cuadrícula o con Escape. La barra de Modos/SOS ocupa una fila en móvil; colores activos: Desarmado verde, En Casa naranja, Ausente morado, Noche azul y SOS rojo.
- 2.9.103: los gestos internos del editor escuchan en la raíz React dentro del Shadow DOM; el documento usa `composedPath()` solo para detectar toque fuera de Argus y así no romper la pulsación larga por retargeting.
- 2.9.105: todo widget debe organizar su propio contenido según las dimensiones de su tarjeta, incluso en escritorio con varias tarjetas lado a lado. Modos/SOS conserva sus seis pestañas en una sola barra compacta; las secciones, rejillas de sensores, acciones, resúmenes, usuarios y soporte se repliegan con consultas `@container`. No modificar el núcleo/cristales de seguridad aprobados.

- Scroll Argus, 2.9.106: los widgets largos pueden conservar su scroll interno para respetar el tamaño adaptable, pero al llegar a cualquiera de sus bordes deben entregar el impulso del scroll al documento. No aplicar `overscroll-behavior: contain/none` a Historial, Acceso, Modos/SOS ni a la regla genérica de paneles. El scroll rápido global no debe sentirse atrapado sobre un widget. El cambio no altera el núcleo aprobado.


## Teclado PIN y estabilidad de Historial (2.9.113)

- El teclado PIN de desbloqueo debe seguir siendo numérico, redondo y Liquid Glass, centrado sobre el núcleo en móvil vertical, a la derecha del núcleo en web cuando haya espacio y centrado en pantalla completa. Abrir con rebote corto; cancelar con X, fondo o Escape y cerrar con rebote breve. Un PIN incorrecto/error conserva el teclado abierto, muestra el error y hace una vibración visual corta; jamás cerrar como si hubiese sido válido. El botón Enter no cierra por sí solo: el callback de validación debe confirmar éxito explícitamente.
- La ruta actual de desbloqueo de pantalla valida el PIN maestro (`verify_master_pin_for_screen_unlock`); no solicitar PIN personal si no se puede validar por esa ruta. Mantener intactos la validación del backend y su limitador de intentos.
- Historial vertical: `#activity-log` es el único scroller del widget; la tarjeta y su panel React anfitrión no deben capturar scroll. Rebotar al documento al llegar al borde (`overscroll-behavior-y:auto`). Al cambiar eventos, reconciliar filas por `data-activity-key` y conservar nodos/posición de la primera fila visible, sin reinsertar todas las filas ni ejecutar animación de entrada. Mantener desactivados blur y animaciones de fila en Safari vertical.
- Versión 2.9.113 corrige también la ruta de error/cancelación del PIN y el doble scroller responsable de atascos/parpadeos percibidos en la tarjeta de Historial. No modifica el diseño ni la geometría congelados del núcleo de seguridad.

- Historial vertical, 2.9.114: además de conservar un único scroll nativo, quitar el gutter fijo del scrollbar, las sombras exteriores de las filas y el filtro de vidrio en la tarjeta en Safari vertical; mantener su borde y apariencia de vidrio. Esta reducción de capas busca evitar costuras de composición intermitentes. No tocar el núcleo de seguridad aprobado.

- Historial vertical, 2.9.115: 2.9.114 dejó el fondo de la tarjeta al 6 % de opacidad, así que el wallpaper animado seguía atravesando el vidrio como franjas rectangulares verdes, y permaneció un brillo interior que se percibía como borde parpadeante. En vertical usar una superficie Liquid Glass estable y más opaca, degradados fijos en las filas, sin blur, mezcla, sombra ni transición en el contenedor. No cambiar el núcleo de seguridad.

- Widgets verticales, 2.9.116: las franjas también aparecían en Automatizaciones; por tanto, la causa era compartida y no exclusiva de Historial. En WebKit vertical eliminar `backdrop-filter` de todas las tarjetas React y usar el mismo degradado estable, de opacidad alta y sin sombra. Desactivar transición de posición cuando no se está editando, sin afectar scroll ni gestos del editor. Mantener intacto escritorio y núcleo de seguridad.
- Flicker al pasar el puntero, 2.9.117: `SecurityEmblem3D` instalaba `pointermove` en toda la tarjeta de seguridad aunque el lienzo WebGL cubría la tarjeta completa; cada movimiento actualizaba parallax/reflejos y forzaba renders grandes. El listener ahora se limita a `.console-emblem-viewport`. Historial vertical fuerza `transform/filter` estables además de la superficie opaca ya definida. Verificar en el navegador real pasando el puntero primero por el núcleo y luego por Historial; no afirmar corrección visual sin comprobar esa reproducción.
- Franja azul/verde en cabecera de Historial y Automatizaciones, 2.9.118: la captura vertical muestra la franja alineada con la superficie de la tarjeta, no con filas ni texto. El CSS compartido aún usaba alfas .94–.96; usar degradado RGB opaco para todos los widgets verticales y filas del Historial, desactivar blur/sombra y aislar la tarjeta. Recargar para aplicar porque el CSS vive en el bundle React cacheado.

- Doble superficie Liquid Glass vertical, 2.9.119: la captura nueva de 3:19 PM mostró que 2.9.118 solo había opacado el cascarón React; el `section.glass.panel.liquid-glass` hijo aún pintaba otra capa. El panel hijo debe ser transparente y sin borde/sombra/backdrop/transition dentro de widgets verticales, para Historial, Automatizaciones y el resto. Mantener la tarjeta exterior, las filas, controles y el scroll. Verificar recargando y pasando el puntero por los widgets; el selector de perfil de acceso impide inspeccionar el contenido hasta que el usuario elija su perfil.

- Doble filtro persistente, 2.9.120: inspección del DOM real después de 2.9.119 encontró `backdrop-filter: blur(28px) saturate(1.5)` computado en `#w-activity` y `#w-automations`, aun con el fondo interno transparente. El CSS minificado no logró prevalecer sobre la regla heredada del filtro. `Host` ahora neutraliza el estilo del panel nativo inline con prioridad important solo en vertical, escucha cambio de orientación y limpia esas propiedades al salir de vertical. La tarjeta React, el estado/layout y los datos permanecen intactos. Verificar valor computado `none` y mover el puntero sobre los widgets.

- Acceso y Usuarios: tarjetas sobrias con acciones de texto. Distinguir el PIN para entrar a Argus del PIN global de armado, con el formulario global plegado dentro de Acceso. Quitar el resumen de diagnóstico.
- Avisos móviles: el usuario quiere un aviso por armado, desarmado, alarma disparada o SOS, sin mensajes repetidos ni avisos por intentos de armado bloqueados.
- Tarjeta de usuario: conservar solo datos que ayuden a reconocer identidad, rol, cuenta HA vinculada, estado del PIN y vigencia. Quitar la lista de permisos repetida de la tarjeta. Acciones en orden: editar nombre, PIN, permisos (estándar), rol y eliminar al final con estilo de peligro.

- Evolución de la consola: agrupar controles a la izquierda, conservar la geometría, lente, halo y segmentos del núcleo, y usar la derecha para información accionable de Home Assistant. En pantallas estrechas, apilar el contexto. Mantener el detalle seleccionado al recibir una alarma y ofrecer acceso explícito al incidente y a la llamada.
- Reglas del motor solicitadas: SOS y armado son independientes. Una intrusión permanece enclavada hasta desarme. Batería baja es advertencia, mientras que un sensor obligatorio no operativo bloquea el armado. Toda omisión es por ciclo y la reincorporación requiere confirmación y estado normal. La prueba física debe controlar en el motor qué eventos quedan excluidos de la sirena y permitir SOS.
- Entregar para revisión local antes de publicar. Validar los flujos con sensores reales y no publicar release ni tag automáticamente.

## Consolidación de Fases 1–8 y Fase 8 completada (2.9.151)

- Consolidar conjuntamente fuentes Python/React, integración WebSocket, pruebas y bundle usado por Home Assistant.
- Fase 8 validó el foco contextual/modal, SOS completo/parcial/vertical y por toque, llamada con marcador simulado y coexistencia de SOS e intrusión.
- Safari nativo conserva pendientes Tab/Opción+Tab/Escape y retorno del foco. Tacto y lectores de pantalla físicos siguen pendientes.
- Fase 9 requiere medición de navegador antes de optimizar y conserva el diseño aprobado.


## Estado vigente — cierre de fluidez en Safari (2026-11-05, 2.9.151)

Esta entrada prevalece sobre notas históricas que den por resuelta la fluidez global o mezclen PIN de alarma y perfil.

- Checkpoint anterior: `e3ece2c`, consolidación de Fases 1–8 en 2.9.151. La instrucción posterior del usuario autoriza versionado y checkpoint local 2.9.152; sigue prohibido publicar, crear tags, hacer push o desplegar. No iniciar Fase 10 ni otra fase adicional de optimización.
- Diseño premium, responsive, cristales, halo y lente congelados. Conservar animaciones, scroll nativo y accesibilidad. No tocar autenticación, SOS, armado/desarmado, alarmas enclavadas, bypass, permisos, pruebas físicas ni contratos WebSocket para corregir fluidez.
- Correcciones locales vigentes: título de alarma «Introduce el PIN de armado» y descripción específica para desarmar; perfil mantiene su prompt y `argus/verify_access_pin`; desarme mantiene `argus/perform_alarm_action` con `code`. No intercambiar credenciales ni registrar PIN. La prueba de presentación de Safari no equivale a un desarme autenticado real.
- Renderizado: el observer del host compara el perfil gráfico efectivo antes de reiniciar adaptación; los cambios de clase ajenos al rendimiento no deben reasignar el buffer. Las notificaciones de tamaño sin cambio de superficie actualizan anclaje sin reasignar resolución. Usar actualización conjunta de tamaño/DPR para evitar el doble resize interno de setPixelRatio + setSize.
- Evidencia nativa Safari: clase ajena al perfil → 0 escrituras del buffer, misma instancia. Seis anchos controlados 92%/100% → 24 escrituras antes y 12 después; mismos anchos medidos y un solo Canvas. Esto NO demuestra 50% más fluidez ni ausencia de tirones. El ensayo fue programático dentro del inspector, no un gesto físico de trackpad ni un ensayo del sidebar real.
- Línea base de pruebas al terminar la corrección: 79 frontend/17 archivos, 4 backend críticas, TypeScript y build aprobados. Los fallos conocidos de la suite backend amplia permanecen documentados en PHASE9_VALIDATION.md; no presentar toda esa suite como aprobada.
- **Fluidez global de Safari todavía abierta.** No usar los 60 FPS de Chrome/Apple M2 como prueba de scroll o transiciones de Safari. La medición temporal rAF de Safari se interrumpió y no es comparación válida. PerformanceObserver no expuso longtask en la sesión. No hay cifras válidas de latencia, style/layout/paint o fotogramas perdidos por escenario.
- Siguiente trabajo acotado: medir A) scroll lento/rápido con núcleo activo, B) fullscreen repetido, C) sidebar HA abierto/cerrado y cambios de columnas, D) acceso/salida de perfil. Separar espera de autenticación/datos, montaje React, layout y animación. Buscar solo causas reproducibles; no atribuir todo a Three.js ni eliminar efectos indiscriminadamente.
- Comparar antes/después únicamente con condiciones equivalentes; si no existe una base anterior comparable, decirlo. Confirmar nitidez, proporciones, hit-testing de cristales, foco, SOS y responsive tras las correcciones.
- Si la automatización de Safari no es fiable, preparar las cuatro acciones manuales breves para el usuario y dejar explícitamente pendiente la validación humana. Clasificar cada escenario: corregido/verificado en Safari, corregido/pendiente visual o todavía reproducible. No declarar cierre global sin evidencia apropiada o pendientes humanos expresos.
- Laboratorio utilizado: origen independiente 127.0.0.1:18127, contactos virtuales y salidas externas aisladas. No modificar la instalación operativa. Hay perfiles F7 acumulados en ese laboratorio: no extrapolar sus problemas de selector a la instalación del usuario sin reproducirlos allí.
- Documentación de referencia: docs/SAFARI_UX_2.9.151.md; diagnóstico repetible scripts/diagnostics/safari-resize-probe.js; especificación de continuación adjunta 781341fc-d519-477a-8849-39900e550a33/Texto pegado.txt.

### Punto de control local 2.9.152 (2026-11-05)

- Se versionan localmente las correcciones ya implementadas de coste de resize WebGL, etiquetas del PIN de armado y estados activos del bridge contextual. Bundle de producción local, `manifest.json`, `const.py` y cache-buster quedan alineados en 2.9.152.
- Safari nativo completó las acciones de scroll, fullscreen, sidebar de HA y salida/entrada de perfil contra el bundle 2.9.151. Los cuatro escenarios siguen pendientes de verificación visual sostenida; no afirmar fluidez total. Ver evidencia y limitaciones en `docs/SAFARI_UX_2.9.151.md` y `docs/safari-native-ux-2.9.151-evidence.txt`.
- La nueva versión identifica este checkpoint local; no es una publicación ni certifica mediciones físicas. Mantener diseño, motor de seguridad y versión responsive congelados.

### A/B de Safari y puerto canónico (2026-11-05, 2.9.152)

- El único puerto activo y autorizado para el proyecto local es `http://127.0.0.1:8123/argus`. No levantar ni dirigir al usuario a `18123`, `18127` ni a previews alternativos. Las menciones de esos puertos en reportes previos son evidencia histórica, no configuración vigente.
- Se confirmó el listener de Home Assistant/Argus en `8123`; no había listener en `18127`. Se detuvo el preview Vite de Argus en `5179`; tampoco quedó escuchando. El probe Safari fue actualizado para limitarse al origen `8123`.
- La comparación nativa A/B de blur en `docs/SAFARI_AB_2.9.152.md` no fue causalmente concluyente: el buffer adaptativo tuvo resoluciones internas diferentes y las muestras fueron ruidosas. No aplicar cambios permanentes especulativos ni afirmar fluidez global.
- Las muestras usaron scroll sintético con Inspector, no gesto físico. Perfil fijo, fullscreen/sidebar medidos por separado y tiempos de montaje/bienvenida no quedaron medidos en esta ronda. No hubo cambios permanentes al diseño, Three.js o lógica de seguridad.

### Corrección localizada de parpadeo al desplazar (2026-11-05, 2.9.154)

- Las tarjetas `.entry` combinaban `backdrop-filter`, una máscara radial WebKit heredada y contenido superpuesto. La máscara era redundante con `overflow:hidden` y `border-radius`, y podía añadir una superficie de composición en WebKit: se retiró sin cambiar el vidrio ni el radio. La relación causal con el flicker requiere confirmación visual en Safari.
- El `IntersectionObserver` del núcleo suspendía inmediatamente al tocar el límite del viewport. Ahora conserva la órbita dentro de 160 px de margen, evitando la secuencia detener/reanudar al atravesar el borde durante scroll rápido; todavía suspende cuando el panel queda claramente lejos.
- Se versionó en `2.9.154`; TypeScript, build y 80 pruebas frontend pasaron. El bundle descargado de `8123` coincide byte a byte con el local y el bootstrap sirve el cache-buster `2.9.154`.
- La verificación humana de scroll rápido y flicker en Safari nativo sigue pendiente; no declarar el síntoma visual resuelto hasta comprobarlo con gesto real.

### Ajuste Safari tras persistencia del flicker (2026-11-05, 2.9.155)

- El usuario reportó que el parpadeo continuaba, especialmente al volver al inicio y llegar al final del scroll; la modificación de máscara y margen de IntersectionObserver de 2.9.154 no lo resolvió.
- 2.9.157: causa potencial reproducible en código para un flash del núcleo durante scroll: el muestreo de `requestAnimationFrame` alimentaba al controlador adaptativo con retrasos del compositor; al clasificar la caída como carga, podía reducir/restaurar la resolución y reasignar el buffer WebGL. Se pausa solo el muestreo de calidad durante wheel/touch/scroll y se descartan muestras contaminadas; la órbita continúa renderizando. Build y 80 pruebas pasan; SHA-256 del bundle local y del servido en `8123` coincide (`fee207e7…e57939b5`). Verificación visual sostenida en Safari nativo sigue pendiente; no declarar eliminado el parpadeo sin esa comprobación.
- Se identificó en `.entry` una superficie grande con `backdrop-filter`, un overlay `mix-blend-mode:soft-light` y un `transform:translateY(-2px)` en hover. En Safari, esta combinación puede forzar repintado/recomposición de la tarjeta mientras se desplaza.
- En navegadores WebKit, se conserva el vidrio, se mantiene una versión más tenue del gradiente de luz sin modo de mezcla y se quita el movimiento de hover de la tarjeta, manteniendo la transición de sombra.
- Build Vite, TypeScript y `git diff --check` aprobados. No se afirma que el parpadeo visual haya desaparecido: la pestaña del proyecto está en Safari, pero la automatización disponible no puede controlar esa ventana/tab; hace falta la comprobación visual del usuario en `http://127.0.0.1:8123/argus`.
- Bootstrap local actualizado a `2.9.155`; mantener el puerto 8123 como única dirección de trabajo. Sin commit, tag, release ni despliegue.

### Corrección del fondo fijo al hacer scroll (2026-11-05, 2.9.158)

- El usuario confirmó que seguía el parpadeo, especialmente al llegar al inicio/final del scroll. El fondo del host de HA usaba `background-attachment: fixed`; se movió la misma imagen a la capa de viewport ya existente `#argus-canvas-bg` en modo panel, manteniendo encuadre, órbita, núcleo, modo compacto y fondo propio de fullscreen. No se tocó lógica de seguridad ni geometría Three.js.
- TypeScript, build Vite y 80 pruebas frontend aprobadas. El bootstrap y bundle de `http://127.0.0.1:8123` coinciden con el árbol local por SHA-256 (`9d447bde…d34056` y `f806e82e…e0955`).
- **No declarar resuelto visualmente:** Safari nativo no pudo observarse con la vista Argus desbloqueada en esta sesión. Hace falta comprobar con el perfil del usuario, sin compartir su PIN. Seguir usando exclusivamente el puerto 8123.

### Migración local a Home Assistant Core 2026.11 (2026-11-05)

- La versión estable está instalada localmente: Core `2026.11.0`, frontend `20261028.4`, Python `3.14.10`; Node `26.13.0`. El proyecto declara Python `>=3.14,<3.16`; `zeroconf==0.152.0` queda fijado en `local/requirements.txt` para que el laboratorio no resuelva metadatos de versiones mezcladas.
- Argus permanece en `2.9.158`. Se reconstruyeron el bundle React y `argus.zip` con las dependencias actuales; el ZIP pasó verificación estructural y conserva el bundle, manifest y diagnósticos de integración. Sin commit, tag, release, subida ni despliegue.
- Se tomó antes de actualizar Core un respaldo privado de código, historial Git y estado de Home Assistant. Contiene configuración sensible; mantenerlo fuera del repositorio público.
- Se comparó `origin/main` (Argus `2.6.8`, merge base `5ce4114`) sin reemplazar las mejoras locales ni copiar un bundle oficial más antiguo. Se adoptó únicamente el endpoint upstream de diagnósticos agregados que no expone PIN ni IDs de entidades.
- Validado en esta máquina: 80 pruebas frontend, TypeScript, build, 4 smoke checks de Core/diagnósticos, check_config y HTTP 200 en `http://127.0.0.1:8123/argus`; el log confirma que inicia la integración Argus `2.9.158`.
- La suite backend amplia NO está verde: última ejecución, 222 pruebas, 9 fallos, 5 errores y 13 skips (195 pasaron). Los errores son mocks async que devuelven `None` y un fixture de alarma sin `_require_alarm_actor_permission`; los fallos cubren contratos de texto/evento antiguos y fixtures walk-test con expectativas previas. No se atribuyen a HA 2026.11 sin evidencia; no esconder ni presentar como aprobada. Nueve contratos de versión/runtime dirigidos sí pasan. Detalle en `docs/LOCAL_HA_2026.11_MIGRATION.md`.
- El único servidor del proyecto activo para el usuario debe ser `127.0.0.1:8123`. No levantar laboratorio alternativo ni previews en otros puertos.

## 2026-11-06 — Preparación autorizada de v3.0.0

- El usuario autoriza completar migración desde v2.6.8, documentación, paquete, commit local, tag y release en GitHub tras resolver las verificaciones pendientes.
- Rama de preparación: codex/prepare-v3.0.0-20261106; integración con origin/main todavía sin cerrar. Respaldos y checkpoints previos conservados.
- Conservar configuración, IDs, automatizaciones, PIN, TTS y funcionamiento sin activar Zonas. Las nuevas funciones son optativas.
- Corregido borrado de tts_targets al cargar almacenamiento; regresión de preservación aprobada. Restaurada ruta OptionsFlow hacia configuración de voz del panel sin reemplazar opciones.
- Node local: .runtime/node-v26.13.0-darwin-arm64/bin. Python: .venv/bin/python (3.14.10).
- Frontend: 88 pruebas, TypeScript y build aprobados. Migración de zonas: 7 pruebas aprobadas. Seguridad crítica: 4 pruebas aprobadas.
- La suite unittest conjunta presenta contaminación entre mocks; observación de sensores pasa aislada. Fixtures actualizados para PIN, autorización, salidas y eventos de progreso. No se cambió la política de seguridad.
- Pendientes: contratos de automatizaciones y sensores, ejecución de pruebas de estilo pytest, integración HA 2026.11, actualización completa sobre copia v2.6.8, documentación v3, reconstrucción ZIP y publicación.
- No declarar v3.0.0 publicada: todavía no existe publicación ni tag final. No prometer ausencia absoluta de errores.
