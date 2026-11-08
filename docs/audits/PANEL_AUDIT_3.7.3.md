# Auditoría del panel de control de Argus v3.7.3

## Alcance y estado

Código auditado: /workspace/Argus-responsive, commit ad00f8bacbf1cbd7320d1a740d9111af3646cba9, versión3.7.3. Auditoría solicitada antes de aplicar correcciones. No se modificó código, versiones, configuración, emparejamientos ni lógica de seguridad. No hubo commit, push, tag o despliegue.

Se revisaron SecurityConsole, SecurityContext, ContextSensorChecks, zone-context, los estilos de consola, el host React, el fullscreen heredado, Argus Card y la consulta WebSocket de diagnóstico. Se ejecutó el componente React real con Chromium y estados HA simulados en un harness temporal, primero aislado y después incluyendo la regla heredada exacta de fullscreen y los estilos exteriores de Argus Card. Esto no equivale a probar Safari/iPhone real, Echo Show físico o la aplicación HA completa con todas sus integraciones.

Evidencia temporal: /tmp/argus-panel-audit. El harness no envía acciones a HA ni usa credenciales. El repositorio terminó sin cambios.

## Conclusión

El comportamiento descrito no es un error de configuración del usuario. Existen conflictos entre la visibilidad global de fullscreen, las condiciones de la vista contextual, el significado de los conteos y el tamaño del contenido. Corregir únicamente fuentes, márgenes o tamaño del núcleo no resuelve este conjunto de problemas.

## Cómo funciona actualmente

1. Argus Card monta argus-panel-v2018 como hijo. Ambos terminan usando SecurityConsoleRoot y SecurityConsole; por eso comparten los problemas de lógica. Card añade otro shadow root, ha-card, controles de altura y una clase de fullscreen propia.
2. El banner usa el estado confirmado de la entidad alarm_control_panel en HA. Las solicitudes optimistas de la interfaz se contrastan con esa confirmación. Esta separación es útil y debe conservarse.
3. El resumen calcula zonas habilitadas y sus estados; si existe un modo armado utiliza sus sensores requeridos y exclusiones para evaluar cada zona.
4. El listado inferior se construye separadamente. En desarmado también recorre los sensores de las zonas y muestra automáticamente abiertos, no disponibles, omitidos o con batería baja.
5. Verificar zonas y los cristales ponen verificationOpen=true y diagnosticOpen=true. El diagnóstico ya se consulta automáticamente, aunque la pantalla siga pidiendo elegir Diagnóstico automático o Prueba física.
6. focused=verificationOpen oculta los contadores, el listado normal y la navegación dentro de SecurityContext. No oculta la cabecera, el núcleo, los modos ni SOS del resto de la consola.
7. Cerrar vuelve a poner los booleanos a falso y elimina la zona seleccionada: reaparecen el resumen y los sensores que ya se mostraban automáticamente. No existe una navegación de vistas única que represente todo este recorrido.
8. En fullscreen, una regla heredada oculta también las secciones internas de este componente. El estado React dice abierto, pero CSS mantiene invisible el detalle.

## Hallazgos y evidencia

| ID | Prioridad | Hallazgo confirmado | Evidencia |
|---|---|---|---|
| P01 | Crítica para la interfaz | Fullscreen oculta el detalle y los contadores. El selector `:host(.fullscreen-active) section:not(#w-instances)` aplica `display:none!important` a todas esas secciones, no solo a widgets ajenos. | src/legacy/argus-panel.ts:1184–1191; el detalle es section en SecurityConsole.tsx:410 y los contadores en SecurityContext.tsx:30. Reproducido en Chromium. |
| P02 | Alta | Desarmado muestra sensores sin una petición de detalle. La rama desarmada incluye los sensores de zonas y luego filtra abiertos/no disponibles/omitidos/batería baja. | SecurityConsole.tsx:513–516 y557–560. Fixture con3zonas:2tarjetas abiertas visibles nada más cargar. |
| P03 | Alta | Los conteos mezclan estado global y disponibilidad para armar en un modo. Zonas usa zoneChecks.length después de retirar notApplicable, no el total de zonas activas. Listas significa ready para el alcance calculado, no necesariamente todas las zonas físicamente cerradas. | SecurityConsole.tsx:264–281 y400–403; zone-context.ts:17–26. |
| P04 | Alta | El listado y los conteos pueden contradecirse porque usan alcances diferentes. | Fixture armado En Casa: Zonas1/Listas1/Pendientes0, pero siguen visibles dos contactos abiertos de otras zonas. Counts: required del modo; listado: unión de sensores de zonas. |
| P05 | Alta | El detalle no sustituye la vista principal. Quedan núcleo, modos y SOS detrás, y el banner puede quedar tapado por el modal. | SecurityConsole.tsx:311–448 y SecurityContext.tsx:19–41. Capturas del componente aislado con detalle visible. |
| P06 | Alta | La misma ventana tiene reglas fixed y static contradictorias. La regla fullscreen más específica de1213 mantiene fixed sobre el intento static de1304. | ConsoleBalance.css:1213–1220 frente1304–1307; medición Chromium: position=fixed con sección abierta. |
| P07 | Alta | El crecimiento del panel es consecuencia del flujo/altura automática y de scrolls anidados. El detalle ordinario ocupa flujo; el resumen contiene listas; portrait mide el espacio del núcleo con la altura del contexto; la tarjeta usa altura intrínseca. | ConsoleBalance.css:42–59,390–416,971–980,1135–1161,1227–1233; SecurityConsole.tsx:31–79; argus-card.ts:165–179 y251–259. |
| P08 | Media | Los contadores desaparecen por dos mecanismos: focused los retira del DOM y la regla global fullscreen oculta su section. | SecurityContext.tsx:30 y legacy/argus-panel.ts:1188. No es aparición aleatoria. |
| P09 | Media | Estados desconocidos no son abiertos ni cerrados. El código tiene unknownZones y un texto separado, por lo que Listas+Pendientes puede ser menor que Zonas. | Fixture3zonas:2abiertas+1sin conexión produce3/0/2 y texto1sin verificar. No debe corregirse clasificando la desconectada como cerrada. |
| P10 | Media | Apertura, desconexión, batería y omisión tienen reglas visuales distintas según se mire el cristal, el resumen o el diagnóstico. Un cristal trata no disponible como open para colorear; readiness lo trata como unknown; batería baja no afecta readiness. | SecurityConsole.tsx:246–253,275–281 y553–560; zone-context.ts; core/walk_test.py:34–55. |
| P11 | Media | El diagnóstico es muy extenso y técnico para la primera vista: repite categoría, conexión, estado, hora, batería y párrafos de consulta/prueba. | ContextSensorChecks.tsx:168–185. Además el asistente de prueba física comparte la misma vista de consulta. |
| P12 | Media | La batería procede solo de atributos del sensor. Una entidad de batería asociada pero separada puede no aparecer. | core/walk_test.py:37–41 y ContextSensorChecks.tsx:139–148. No se inventan porcentajes, pero la cobertura no es universal. |
| P13 | Media | Solo la etiqueta de cada contador es botón, no su número ni toda la tarjeta. El foco se intenta mover al cierre aunque fullscreen lo haya ocultado. La section no implementa un diálogo modal completo con fondo inerte/foco contenido. | SecurityContext.tsx:33–35; SecurityConsole.tsx:104–108,410–422. |
| P14 | Media | Fuentes de estado duplicadas: el endpoint consulta todos los sensores de modos más zonas y la UI filtra otra vez; lectura visual del chip, readiness y diagnóstico categorizan separadamente. | websocket_api.py:2049–2071, ContextSensorChecks.tsx:90–100 y122–123; SecurityConsole yzone-context. Riesgo de divergencias y refrescos de diagnóstico repetidos. |

## Resultados de navegador

Fixture: tres zonas; Entrada Principal y Entrada Trasera abiertas; Garaje cerrado. Datos simulados. No se ejecutaron armado, desarmado, SOS ni pruebas físicas.

| Caso | Vista inicial | Al abrir Verificar con regla heredada | Al cerrar |
|---|---|---|---|
| Móvil Hub390×844 |2sensores abiertos visibles; altura de consola aprox.1079px | verificationOpen real, hidden=false, pero display=none; botón Cerrar invisible | estado general y2sensores reaparecen; contadores siguen ocultos mientras fullscreen |
| Móvil Card390×844 | mismo comportamiento del componente y estilos exteriores de Card | mismo ocultamiento | mismo resultado |
| Escritorio Hub1366×768 | conteos3/1/2 y2tarjetas abiertas | detalle invisible por regla heredada | resumen vuelve; en fullscreen contador no visible |
| Pantalla tipo Echo Card960×480 | altura embebida aprox.633px; desborda el alto de480 | la acción visual puede quedar inaccesible por scroll/recorte; la sección abierta también queda oculta | no garantiza regreso visual al mismo punto |

El harness necesitó invocar Cerrar por DOM para terminar la secuencia cuando el control estaba invisible; ese paso NO se presenta como cierre accesible al usuario. En la pantalla baja también fue necesario abrir por DOM para inspeccionar el estado cuando el clic visual no abrió el detalle.

Sin la regla heredada, el detalle sí se veía en Chromium:358×812px para móvil y680×736px para escritorio; cubría el banner o retenía los controles principales detrás. Esto permitió aislar la causa del ocultamiento y comprobar que quitar esa regla por sí solo tampoco implementaría la experiencia solicitada.

### Conteos con el mismo conjunto de tres zonas

| Estado simulado | Zonas | Listas | Pendientes | Observación |
|---|---:|---:|---:|---|
| Desarmado |3|1|2|2tarjetas abiertas visibles sin pedirlas |
| En Casa; solo Garaje requerido |1|1|0|Siguen apareciendo las otras2tarjetas abiertas |
| Ausente |3|1|2|Alcance de modo y listado coinciden en este fixture |
| Noche |3|1|2|Misma situación |
| Desarmado; Garaje sin conexión |3|0|2|1zona sin verificar; no debe sumarse a cerradas |

## Propuesta de funcionamiento — pendiente de implementación

### Vista principal

- Banner de estado confirmado siempre visible.
- Conteos globales persistentes: Zonas=zonas activas en Argus; Listas=zonas con todos los sensores verificables cerrados/inactivos; Pendientes=zonas con al menos un sensor abierto/activo.
- Estados sin conexión/desconocidos y zonas sin sensores se explican con un indicador propio; no se falsea la suma ni se convierte falta de datos en cierre. Batería baja se muestra como aviso independiente.
- Sensores individuales ocultos inicialmente en desarmado. Entrar a detalles requiere acción explícita.
- Los bloqueos de armado y las omisiones del ciclo se muestran como información del modo, distinta del resumen global de contactos.

### Al pedir información

- La zona de contenido del panel cambia de vista: resumen → todas/listas/pendientes → zona → sensores. No se añade una lista debajo de todo lo demás.
- Mantener el banner armado/desarmado/alarma; ocultar el núcleo, modos y controles de fondo mientras se consulta el detalle, como solicita el usuario.
- El contenido detallado usa el área disponible y desplazamiento interior. Abrirlo no cambia la altura exterior de la tarjeta ni exige salir de fullscreen.
- Cada fila resume Zona, sensor y estado; conexión y batería visibles cuando son relevantes; detalles técnicos/horas quedan en una expansión voluntaria.
- Un único recorrido Atrás/Cerrar vuelve a una vista conocida y restaura el foco. Contador completo y cristal son acciones claras y accesibles.
- Diagnóstico actual entra directamente al abrir la zona; prueba física queda como acción secundaria explícita, con permisos y condiciones actuales intactos.

### Arquitectura y prioridad sugeridas

1. Retirar el ocultamiento global que alcanza secciones internas y definir un propietario de fullscreen compartido por Card/Hub. Consolidar las reglas de posicionamiento en vez de añadir otro override aislado.
2. Sustituir combinaciones independientes de verificationOpen/diagnosticOpen/chooseTest/selectedZoneId por un estado de vista coherente y un alcance de datos explícito.
3. Separar el modelo global de contactos del modelo de preparación para armar por modo; compartir la clasificación de estado entre conteos, cristales y filas.
4. Contener el detalle dentro de un área con altura acotada, banner persistente y foco correcto. Revisar scroll/foco al cerrar y al cambiar orientación.
5. Simplificar filas/diagnóstico y verificar Card y Hub dentro de sus envoltorios reales, no solo el componente aislado.

## Criterios antes de considerar resuelto

- Desarmado no muestra filas de sensores sin solicitud.
- Los mismos tres números globales permanecen coherentes entre vistas y modos; indisponibles se señalan sin declararlos cerrados.
- Verificar, cristales y contadores permiten consultar datos sin abandonar fullscreen.
- El banner real permanece visible y se actualiza si cambia la alarma mientras el usuario consulta detalles.
- Card conserva su altura al abrir/cerrar listas; el detalle desplaza solo su cuerpo.
- Cerrar/Atrás funcionan por toque, ratón y teclado y regresan al mismo lugar esperado.
- Validar390×844,844×390,960×480,1366×768, textos largos, zoom y más zonas/sensores; después Safari/iPhone y Echo Show reales.
- Probar ausencia de zonas, zonas vacías, contactos cerrados/abiertos, desconocidos, desconectados, batería baja, omisiones y cambios de estado durante el detalle.
- No alterar permisos, PIN, armado, bypass ni emparejamientos para resolver un problema de presentación.

## Evidencia disponible

- /tmp/argus-panel-audit/metrics-console-only.json: componente sin regla heredada.
- /tmp/argus-panel-audit/metrics.json: con regla de fullscreen real y estilos exteriores de Card.
- /tmp/argus-panel-audit/counter-states.json: matriz de conteos y filas por estado.
- Capturas *-fullscreen-details.png y *-legacy-fullscreen-details.png en esa carpeta.

No se ha aplicado ninguna de las correcciones propuestas. No se ha accedido a HA del usuario ni publicado una versión.
