# Argus 2.9.151 — corrección UX previa a Fase 10

Fecha: 5 de noviembre de 2026, Costa Rica. El informe documenta la investigación y los recorridos ejecutados con el bundle 2.9.151. Después se creó un checkpoint local 2.9.152; este versionado no cambia los resultados ni convierte las verificaciones pendientes en aprobadas. No se declara completada la corrección integral de fluidez.

## Causas y correcciones comprobadas

1. **Reajuste/fullscreen:** el MutationObserver de SecurityEmblem3D llamaba onMotion ante cualquier cambio de clase del host. Esto suspendía el rAF, reiniciaba la adaptación y reasignaba el buffer incluso cuando no cambiaba el perfil gráfico. Ahora compara únicamente essential/light antes de intervenir. En Safari nativo, añadir y quitar una clase de diagnóstico ajena al perfil produjo 0 escrituras width/height y conservó la instancia de Canvas. Se retiró la clase al terminar.
2. **Redimensionamiento:** setPixelRatio ya llama internamente a setSize; inmediatamente se llamaba otra vez a setSize. Una secuencia nativa de seis anchos alternados 92%/100% registró 24 mutaciones width/height. Sustituidos ambos setters por setDrawingBufferSize, API existente de Three.js que actualiza ancho, alto y DPR juntos. Con la misma secuencia se registraron 12 mutaciones. Anchos CSS idénticos antes/después: 817.875, 889, 817.875, 889, 817.875, 889. Canvas único y misma referencia en ambas pruebas. La resolución final y las propiedades gráficas se conservan. La medición es de escrituras de atributos, no de latencia GPU ni de FPS.
3. **Observer de tamaño:** notificaciones debidas solo a cambios del viewport interno siguen actualizando anclaje/hit-testing, pero no reasignan resolución si la superficie WebGL conserva ancho y alto.
4. **PIN:** el teclado de alarma compartido tenía la traducción española de PIN de perfil. Se corrigieron las etiquetas de alarma es/en y la descripción específica de desarme. El acceso al perfil utiliza su propio prompt, input/error locales al overlay y argus/verify_access_pin; el desarme conserva argus/perform_alarm_action, action=disarm, code. No se cambió ningún endpoint, credencial, permiso, límite o validación. La entrada compartida se limpia en cada apertura. No se registraron PIN reales. El texto Validando PIN… se conserva.

## Investigación sin cambios especulativos

- **Scroll natural:** el editor escucha pointermove para cancelar la pulsación larga, sin preventDefault en esa ruta; no se encontró un listener wheel/touchmove del editor que justifique sustituir el scroll nativo. No se añadió smooth scrolling ni librerías. Backdrop, sombras y overflow anidado siguen siendo candidatos de composición, no causas demostradas. No se eliminaron efectos visuales para ocultar el síntoma.
- **Perfil:** ReactPanelHost reutiliza el root si #entries no cambia. La bienvenida ya inicia carga asíncrona detrás de la animación. No se demostró una causa única de la demora percibida y no se reescribió ese flujo. El laboratorio ha acumulado 17 perfiles de pruebas anteriores, lo que limita su equivalencia con la instalación del usuario; el selector puede dejar perfiles fuera del área visible. No se alteró el diseño productivo basándose en ese artefacto.
- **Panel HA:** el perfil de guardado móvil/escritorio sigue separado por ventana como se aprobó; no se cambiaron breakpoints ni container queries. Las correcciones actúan sobre el coste de la superficie WebGL, no sobre la distribución.

## Evidencia específica de Safari

Safari nativo de macOS (el menú Desarrollo identificó Safari 27.2), laboratorio independiente http://127.0.0.1:18127/argus. Contactos virtuales, sin sirenas, llamadas ni notificaciones externas. No se modificó la instalación operativa.

- Acceso real al perfil, desplazamiento de página y entrada/salida de fullscreen se recorrieron en la sesión previa al ajuste final del buffer. No se los presenta como validación completa de fluidez posterior.
- Web Inspector confirmó el bundle corregido: ARGUS_UX_LOADED = Introduce el PIN de armado.
- ARGUS_UX_PROFILE_PROBE: bufferWrites=0, sameCanvas=true, longTasksSupported=false.
- ARGUS_UX_SURFACE_RESIZE antes: bufferWrites=24, sameCanvas=true, canvases=1.
- ARGUS_UX_SURFACE_AFTER después: bufferWrites=12, sameCanvas=true, canvases=1, mismos anchos y pausas de 250 ms.
- El script de diagnóstico repetible está en scripts/diagnostics/safari-resize-probe.js. Solo funciona en el origen de laboratorio; restaura el CSS y desconecta el observer. Es una prueba de cambio de ancho programático, no un gesto físico del trackpad ni un ensayo real del drawer HA.
- El PIN se abrió mediante el método existente con callback fixture que rechaza, exclusivamente para comprobar presentación: título y descripción de PIN de armado visibles, captura safari-pin-2.9.151.png. NO fue una prueba de desarme autenticado por backend en Safari. No se intercambiaron ni configuraron credenciales.
- La preferencia/gestión de Escape/foco no se declara validada por esta comprobación: al cerrar el inspector el foco puede pasar al documento y el retorno observado no fue un recorrido controlado desde el botón de origen.
- Una medición temporal rAF de 20 s se interrumpió durante interacción con la aplicación. Sus cifras NO se usan como comparación. Safari no expone longtask en PerformanceObserver.supportedEntryTypes de esta sesión. No se obtuvieron mediciones válidas de style/layout/paint/CPU ni una comparación de latencia de primer frame. No se reutilizan los FPS de Chrome como prueba de fluidez de Safari.

## Archivos de esta corrección

- src/features/dashboard/components/SecurityEmblem3D.tsx: perfil efectivo, dimensiones y actualización conjunta de buffer.
- src/legacy/argus-panel.ts: etiquetas de PIN, descripción contextual.
- src/legacy/disarm.test.ts: prueba sobre el método real de apertura; limpia input/error, conserva callback, enfoca sin scroll y no ejecuta autenticación al abrir.
- custom_components/argus/www/react-dist/argus-frontend.js: recompilado con el proceso existente.
- scripts/diagnostics/safari-resize-probe.js y este informe/captura: evidencia local sin commit.

Los cambios previos del bridge de sensores y sus ocho regresiones siguen conservados, independientes de esta tarea.

## Pruebas ejecutadas

- Frontend completo: 79/79, 17 archivos (incluye las 19 pruebas dirigidas previas).
- Archivo de desarme: 6/6, incluido nuevo caso de apertura.
- TypeScript --noEmit y Vite build: aprobados después del ajuste final.
- Backend crítico aislado: 4/4; sin modificaciones al motor.
- git diff --check: aprobado antes de redactar este informe; se vuelve a ejecutar al finalizar.

## Pendientes y criterio de cierre

Las correcciones de etiquetas y reasignaciones redundantes están implementadas y comprobadas. Diseño, geometría, materiales, seguridad y versión permanecen intactos.

Permanecen abiertos: comparación controlada de scroll rápido/lento sostenido en Safari; drawer real HA y fullscreen repetidos DESPUÉS del ajuste final; latencia de entrada/salida de perfil; foco/teclado y desarme backend en Safari desde control real; prueba de selección de cristales tras resize; regresión de las siete resoluciones tras esta corrección. No se afirma que todos los tirones reportados estén resueltos, ni que las 12 escrituras equivalgan a un 50% de mejora de fluidez. No se inicia Fase 10.


## Continuación acordada y comprobación humana mínima (2026-11-05)

Se conserva la implementación actual. La nueva instrucción limita la continuación a los cuatro escenarios siguientes; no autoriza un rediseño ni el inicio de Fase 10. Hasta disponer de una reproducción comparable, los cuatro quedan **pendientes de validación global**, aunque las reasignaciones y etiquetas concretas sí tienen evidencia nativa.

Si la automatización no permite completar una medición fiable, en el Safari habitual del usuario:

1. **Scroll:** con el núcleo visible y activo, desplazar la página arriba/abajo despacio y luego rápido; comprobar también el paso por Historial. Indicar dónde se detiene o pega y si usa trackpad o rueda.
2. **Fullscreen:** entrar y salir tres veces mediante el control existente; observar pausa inicial, parpadeo, nitidez y respuesta del siguiente control.
3. **Sidebar HA:** abrir y cerrar tres veces, observando cambios de columnas y si el reajuste continúa después de terminar la transición del panel lateral.
4. **Perfil:** salir al selector mediante el flujo existente y volver al perfil; distinguir la espera de autenticación de los tirones de la animación. No compartir ni capturar el PIN.

Registrar navegador, tamaño, método de entrada y escenario donde se reproduce. Son instrucciones de comprobación, no resultados ejecutados. No se pide activar SOS, alarmas, sirenas ni llamadas. Ante un tirón reproducible, corregir solo su causa y ejecutar la regresión afectada. Esta medición pertenece al bundle 2.9.151; las acciones verificadas no certifican fluidez visual sostenida.

## Ejecución de los cuatro recorridos en Safari nativo — 2026-11-05

Esta sección sustituye el estado de «recorridos no ejecutados» anterior. Se utilizó Safari de macOS, pestaña real del laboratorio independiente `127.0.0.1:18127/argus`, bundle 2.9.151. La pestaña operativa de 8123 no se alteró. No se activaron alarmas, SOS ni salidas. La entrada nativa se efectuó mediante accesibilidad de macOS; no equivale a un ensayo físico de inercia de trackpad.

Se instaló instrumentación temporal desde Web Inspector: intervalos requestAnimationFrame, ResizeObserver de la superficie inicial, mutaciones width/height del Canvas y contador del método legacy `_renderEntries`. Al terminar se desconectó y se recargó únicamente el laboratorio para retirar también los wrappers temporales. No se añadieron listeners ni bucles al producto.

| Escenario real | Acción y resultado observable | Registro de intervalos | Clasificación de fluidez |
| --- | --- | --- | --- |
| Scroll lento/rápido | Bajada de 0,4 páginas, 3 páginas hasta el final; subida de 3 hasta el inicio; bajada/subida de 0,3. Scrollbar observado en 0 → 0,158 → 1 → 0 → 0,119 → 0. Sin bloqueo permanente. | 24.804 ms; 1.358 frames; p50 17 ms, p95 25 ms; máximo 1.000 ms; 12 intervalos >50 ms. | **Pendiente de verificación visual** sostenida con trackpad/rueda: las acciones se completan, pero las pausas no están atribuidas. |
| Pantalla completa | Dos entradas mediante botón existente y salidas con Escape. Safari creó su ventana fullscreen nativa y restauró la barra del navegador y Home Assistant. Primera medición no se registró y se descarta. | Segunda captura: 87.350 ms, 4.847 frames; p50 17 ms, p95 20 ms; máximo 667 ms; 50 intervalos >50 ms. Incluye tiempo ocioso y abrir/cerrar Inspector. | **Pendiente de verificación visual**: transición funcional comprobada, suavidad no acreditada. |
| Sidebar Home Assistant | Pulsaciones reales del botón Alternar panel lateral; captura confirmó rail estrecho de iconos frente al panel expandido. | 24.814 ms; 1.326 frames; p50 17 ms, p95 21 ms; máximo 414 ms; 15 intervalos >50 ms. | **Pendiente de verificación visual**: no se observó un ciclo infinito de reajuste; las pausas requieren una traza causal. |
| Salida/entrada de perfil | Menú del perfil → Cambiar perfil de usuario → selector Perfiles de Acceso → Argus Lab → bienvenida → dashboard. Perfil de laboratorio sin PIN; no se ensayó autenticación. | Ciclo completo con pausas de automatización: 132.995 ms; 7.553 frames; p50 17 ms, p95 20 ms; máximo 647 ms; 48 intervalos >50 ms. `_load`: **323 ms**; `_runProfileWelcomeAnimation`: **1.533 ms**. | **Pendiente de verificación visual** de la animación: ida y vuelta funcional comprobada; duración total no equivale a congelamiento. |

### Qué se pudo descartar y qué no

- **Canvas/React:** misma referencia de Canvas y cero Canvas añadidos en las cuatro muestras. `_renderEntries`: 0 en scroll, 0 en sidebar, 1 en fullscreen y 3 en perfil. Esto descarta recreación del Canvas y ráfagas de ese método en estas muestras; **no es un perfil de commits React** ni prueba de que ningún otro componente renderice.
- **ResizeObserver:** sidebar registró 2 cambios de superficie y 4 mutaciones de atributos del buffer; fullscreen, 3 cambios y 8 mutaciones. No hubo una tormenta sostenida de ResizeObserver en estos recorridos. Abrir/cerrar Inspector cambia también el espacio disponible y contamina el recuento. El observer de superficie se instaló sobre el nodo inicial; no permite certificar observación de un eventual nodo sustituto después del perfil.
- **Scroll:** 0 resize de superficie y 0 `_renderEntries`; hubo 4 escrituras del buffer en la ventana que incluye Inspector. Los contadores documentales de scroll/wheel son incompletos en Shadow DOM y para entrada por accesibilidad: no se usan para contar los gestos reales ni demostrar ausencia universal de listeners bloqueantes.
- **Perfil:** la carga de 323 ms acaba antes de la bienvenida de 1.533 ms. El código conserva pausas intencionales de 600 + 700 + 30 ms y transiciones de avatar/opacidad. La espera percibida contiene una animación deliberada, no solamente una petición de datos. No se retiró ni acortó esa animación aprobada. Una sola muestra no acredita ausencia de tirones dentro de ella.
- **Layout, composición, CSS y GPU:** no se obtuvo una traza temporal que separe style/layout/paint/composición y ejecución gráfica. Safari no expone `longtask` en esta sesión. Un intervalo rAF largo **no identifica por sí mismo la causa**; cambios de foco, Inspector y planificación del automatizador intervienen. No se atribuyen los máximos a Three.js, glassmorphism ni React sin esa evidencia.

### Correcciones e impacto comprobado

En esta continuación **no se modificó código de producto**: no apareció un nuevo defecto causal reproducible que justificara tocar animaciones, CSS o seguridad. Se conservan los arreglos ya implementados de perfil gráfico y actualización conjunta del buffer. La mejora acreditada sigue siendo 24 → 12 escrituras bajo los seis anchos sintéticos equivalentes documentados arriba; no se presenta como 50% de mejora de fluidez ni como comparación antes/después de estos gestos nativos.

No se declara ninguno de los cuatro escenarios «corregido y verificado» en su totalidad. Tampoco se certifica Safari fluido. Se completaron los recorridos reales; queda abierta la atribución de las pausas y su verificación visual sostenida. No se repitieron frontend/build: esta continuación solo añade evidencia/documentación y conserva la línea base anterior (79 frontend, TypeScript/build y 4 backend críticos). `git diff --check` se ejecuta al cerrar.

Evidencia: [salida textual de Web Inspector](safari-native-ux-2.9.151-evidence.txt), [captura nativa del laboratorio tras retirar instrumentación](safari-native-ux-2.9.151.png). La captura estática acredita el entorno, no la suavidad de una animación. No contiene PIN.

### Procedimiento manual exacto para resolver la limitación restante

En Safari habitual, cerrar Web Inspector; conservar zoom y tamaño de ventana durante la serie. No activar controles de seguridad.

1. En `/argus`, colocar el núcleo en pantalla. Durante 10 segundos hacer desplazamientos cortos lentos arriba/abajo y durante otros 10 segundos rápidos hasta Historial y de regreso. Anotar si se atasca el documento o únicamente una lista interna, y si se usa rueda o trackpad.
2. Pulsar el botón Pantalla Completa, esperar a que termine la transición nativa, pulsar Escape. Repetir tres veces. Observar por separado expansión, salida y respuesta al siguiente desplazamiento.
3. Con el dashboard visible, pulsar el menú lateral HA, esperar su apertura completa y volver a cerrarlo; repetir tres veces. Comprobar si la animación termina o continúa reajustando columnas después de soltar el control.
4. Abrir el menú del avatar → Cambiar de Perfil → seleccionar el propio perfil. Si requiere PIN, introducirlo privadamente. Observar si el avatar se desplaza continuamente o salta; distinguir la bienvenida de aproximadamente 1,5 s de una pausa adicional antes/después. Repetir una vez con el dashboard ya cargado.

Para atribuir el tirón, en una segunda serie abrir Desarrollo → Mostrar Inspector Web → Líneas del tiempo, iniciar grabación de eventos/layout/renderizado antes de **un solo** recorrido y detenerla inmediatamente después. Registrar el instante del salto y la categoría de trabajo coincidente. Esta grabación altera el entorno y debe contrastarse con la serie sin Inspector. No compartir credenciales, PIN ni datos privados de red. Una interacción no reproducible por automatización conserva su clasificación pendiente; no se compensa cambiando el diseño.

Versión medida en estos recorridos: 2.9.151. El checkpoint posterior registra los cambios como 2.9.152; no hubo publicación, tag ni inicio de Fase 10.
