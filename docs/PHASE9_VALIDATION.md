# Argus 2.9.151 — consolidación local y Fase 9

## A. Consolidación

Base anterior: 2.9.150. Base final: 2.9.151. Checkpoint local: `e3ece2c` (`chore(argus): consolidate phases 1-8 locally as 2.9.151`). Incluye 125 archivos: backend, frontend React/Three.js, bridge, pruebas, integración, bundle react-dist, bootstrap y documentación. Metadatos sincronizados en const.py, manifest.json y referencia de caché. CHANGELOG, UX_MEMORY y RELEASE_NOTES_2.9.151 actualizados. No publicación, tag, push o despliegue.

Se construyó desde un worktree separado del commit y el bundle resultó idéntico byte por byte. Se copiaron las dependencias instaladas: no equivale a validar una instalación nueva desde el registro. Validación ejecutada con Node 24.12.0; la versión declarada 26.13 no estuvo disponible en el entorno. No se alteró ese requisito.

Quedan fuera del checkpoint archivos locales preexistentes: local/, backups/, preview, lanzadores/scripts locales, capturas y notas históricas no necesarias para reconstruir las fuentes. No se borraron ni descartaron. Credenciales y laboratorio excluidos.

### Pruebas

- Frontend completo: 70 aprobadas, 17 archivos.
- TypeScript y build: aprobados.
- Contratos de versión: 5 aprobados.
- Backend crítico dirigido: 4 aprobados.
- Fixture v2056 corregido para proporcionar callback de Home Assistant: 12 aprobadas.
- Suite backend amplia: primera ejecución de 222 pruebas tuvo 10 fallos, 5 errores y 13 omisiones. NO está completamente aprobada. La ejecución conjunta mezcla mocks de Home Assistant entre módulos.
- Ejecución por archivo: 42/51 procesos terminaron correctamente antes de corregir los fixtures callback y las notas de versión. Dos archivos usan estilo pytest y no contienen unittest ejecutables. Persisten contratos textuales antiguos, mocks incompletos de permisos/bus y un import standalone de state_machine. No se cambiaron expectativas para ocultarlos. Logs originales: /tmp/argus-consolidation-tests.log y /tmp/argus-isolated-tests.log.
- Fuentes sin errores de whitespace; el bundle generado contiene espacios finales emitidos desde literales. No se editó manualmente el bundle para esconderlos.

## B. Fase 9

No se modificó código gráfico, CSS, geometría, seguridad ni dependencias. No hay comparación antes/después de una optimización porque no se aplicó ninguna.

### Inspección técnica

SecurityEmblem3D y el controlador frames existente utilizan tiempo transcurrido, un rAF protegido contra duplicación, cancelación al ocultar/desmontar, observadores con desconexión y liberación de geometrías, materiales, texturas y renderer. La calidad adaptativa tiene histéresis; no limita artificialmente a 60 FPS. Los objetos de proyección se reutilizan. No se identificó una causa técnica que justificara memoización o reconstrucción de componentes. Esta es inspección de código, no perfil de heap/GPU ni prueba de fuga sostenida.

### Medición real de navegador

Chrome headless, WebGL por software ANGLE/SwiftShader, DPR 2, dashboard conectado al laboratorio independiente en 18127. Contactos virtuales, sin salidas físicas ni llamadas. Cada viewport esperó 6,5 segundos, secuencialmente en una misma sesión; por tanto calidad y calentamiento influyen. Son muestras de telemetría, no benchmarks comparables entre dispositivos.

| Viewport | FPS entregados | p95 intervalo ms | Calidad |
|---|---:|---:|---:|
| 1920×1080 | 2 | 3666,59 | 1 |
| 2560×1440 | 4 | 749,9 | 0,85 |
| 1024×768 | 14 | 116,6 | 0,70 |
| 880×900 | 15 | 83,4 | 0,55 |
| 480×320 | 37 | 49,9 | 0,50 |
| 320×480 | 40 | 33,4 | 0,50 |
| 390×844 | 23 | 50,1 | 0,50 |

Un solo Canvas en las siete muestras. Las dimensiones internas y CSS constan en phase9-metrics.json. La adaptación redujo progresivamente resolución bajo carga. La recuperación y estabilidad de calidad están cubiertas por pruebas unitarias; no se demostró recuperación de calidad con GPU física.

En sesión nueva a 1920×1080, tras 10 s de calentamiento, rAF independiente durante 4 s: 21 intervalos, p50 183,3 ms y p95 183,4 ms. Telemetría del renderer: 5 FPS, p95 200 ms, tiempo de llamada render 0,55 ms. El tiempo de llamada no mide el trabajo completo de GPU. Incluso rAF externo fue lento; no se atribuye el resultado exclusivamente a JavaScript de Argus. No hay medición fiable de CPU/GPU física.

Movimiento reducido: emulación de la preferencia, Canvas presente y estado accesible conservado; telemetría sin cambios entre dos muestras separadas 2,2 s tras estabilizar. Esto confirma ausencia de actualización continua de esa telemetría; no sustituye observación visual sostenida del halo en hardware.

Pruebas dirigidas de rendimiento/geometría: 19 aprobadas en 3 archivos. Incluyen equivalencia temporal a cadencias simuladas 30/60/100/120 y adaptación/recuperación. No son prueba de pantallas físicas a esas frecuencias.

### Límites y estado

Los 60 FPS y p95 17,6 ms históricos no son resultados nuevos ni línea base comparable con SwiftShader. No se afirma mejora ni degradación de GPU real. Safari nativo, ProMotion y dispositivos táctiles no se verificaron en esta ronda. Selección, visibilidad/reanudación, estados críticos y limpieza conservan implementación/pruebas previas; no se presenta una nueva validación exhaustiva de navegador de esos flujos. No se repitió la auditoría visual responsive: las siete mediciones de Canvas no prueban por sí solas ausencia de overflow o legibilidad.

Consolidación local completada. Auditoría y medición disponible de Fase 9 completadas sin optimizaciones injustificadas. El criterio integral de cierre de Fase 9 queda limitado por la falta de una línea base comparable y comprobación gráfica en navegador con aceleración real; no se declara rendimiento de hardware aprobado. Suite backend amplia pendiente de saneamiento separado. No se inicia Fase 10. Este informe y los JSON quedan sin nuevo checkpoint, conforme a la instrucción.


## Revisión final — 2.9.151, sin nuevo commit

Esta revisión sustituye la conclusión anterior sobre disponibilidad de GPU. Se probó Chrome con ventana sin flags de SwiftShader: WebGL reportó `ANGLE (Apple, ANGLE Metal Renderer: Apple M2, Unspecified Version)`, proveedor `Google Inc. (Apple)`. También se comprobó explícitamente el backend Metal, con el mismo resultado. No es emulación de GPU.

### Medición acelerada real

Chrome 157.0.8103.38, macOS/Apple M2, DPR 2. Dos sesiones nuevas equivalentes del dashboard de laboratorio aislado en 18127, 10 segundos de calentamiento y 4 segundos de muestreo rAF independiente. Sin cambios gráficos entre muestras. El panel embebido limita el ancho: el Canvas CSS fue 1292×541 en ambas ventanas; no son dos cargas de fullscreen distintas.

| Viewport | Buffer normal | FPS renderer | p50 rAF | p95 rAF | Calidad | Tiempo llamada render |
|---|---|---:|---:|---:|---:|---:|
| 1920×1080 | 2588×1086 | 60 | 16,7 ms | 17,6 ms | 1 | 0,61 ms |
| 2560×1440 | 2588×1086 | 60 | 16,7 ms | 17,6 ms | 1 | 0,61 ms |

240 intervalos por muestra; un Canvas. No se observó descenso de calidad en esta ventana medida. Evidencia: phase9-gpu-1920.json y phase9-gpu-2560.json. Resolución capturada ANTES de activar movimiento reducido. La llamada render no representa tiempo de GPU ni consumo de CPU. No se midieron vatios, carga GPU, memoria sostenida ni 120 Hz físicos. SwiftShader queda exclusivamente como diagnóstico de software; no se compara su tasa con estas mediciones para afirmar una mejora de código. Los valores históricos tampoco constituyen un ensayo A/B.

En ambas sesiones, activar movimiento reducido conservó Canvas/estado y detuvo cambios continuos de telemetría durante 2,2 s. La inspección previa de Three.js confirma supresión de vibraciones/ondas decorativas. No se presenta esto como prueba física de accesibilidad ni como observación visual prolongada de todas las alarmas.

### Clasificación individual de los fallos backend

Se extrajo `e1ac497` a un directorio temporal independiente mediante git archive. Se ejecutaron siete archivos, cada uno en proceso separado, con el mismo Python/HA de desarrollo tanto sobre esa base como sobre la versión actual. No se alteraron expectativas ni archivos de esas pruebas.

| Fallo documentado | Evidencia y clasificación | Acción |
|---|---|---|
| thread_safe_sensor_automations: previous_state | Antes 3/3; ahora 2/3. El contrato busca literalmente una llamada con previous_state. La nueva terminación centralizada usa `_async_recheck_arm_request → _async_complete_arming → _async_finish_arm(target)` y allí programa la automatización. Contrato textual obsoleto por refactor, no prueba de pérdida del evento. | Documentado para saneamiento de contratos en Fase 10. |
| v251: batería/estados en SecurityConsole | Antes 9/9; ahora 8/9. `battery_percentage` está en el helper del panel, utilizado mediante `_getSensorBattery`; esa parte del contrato exige una ubicación antigua. PERO la revisión detectó una regresión real: el fallback del bridge omitió 8 estados activos antes soportados. | Restituidos solo esos estados en el bridge; regresión reproducida con 8 fallos y cubierta después de corregir. El contrato textual antiguo sigue fallando por ubicación y no se oculta. |
| v2422: desarmado | Antes 6/6; ahora 5/6. SimpleNamespace construido por el test no define `_require_alarm_actor_permission`, incorporado en la ruta real de desarmado. Falla antes de probar el PIN. Fixture incompatible con el endurecimiento de permisos; no defecto de autenticación demostrado. | No eliminar la autorización para hacer pasar un mock. Pruebas críticas actuales 4/4. |
| stage3_spatial: import | Falla igual antes y ahora: carga manual `argus.core.spatial` sin paquete padre ni state_machine en sys.path. | Fallo preexistente reproducido del cargador de prueba; pendiente Fase 10. |
| walk_test_and_sensor_delays: start/stop | Antes 4/4; ahora 3/4. Fixture define bus con async_fire solamente; la observación real de Fase 7 necesita async_listen y el temporizador necesita un hass real/completo. En ejecución conjunta también recibe eventos adicionales que invalidan assert_called_with del último evento. | Fixture de laboratorio desactualizado. Motor actual de observación pasa 8/8 aislado. |
| v190: timeline forense | Pasa aislado (archivo 5/5 antes y ahora), falla solo en discovery conjunto con None no awaitable. Mocks globales de HA/decoradores en sys.modules contaminan imports entre archivos. | Dependencia del harness compartido; no cambiar endpoint productivo. |
| v190: usuarios/personas HA | Mismo resultado aislado y misma contaminación de decoradores. | Harness, pendiente Fase 10. |
| v190: onboarding | Mismo resultado aislado y misma contaminación de decoradores. | Harness, pendiente Fase 10. |
| v190: perform_alarm_action | Mismo resultado aislado y misma contaminación de decoradores. | Harness, pendiente Fase 10. |
| walk_test_observation: contacto guiado | 8/8 del archivo aislado actual; falla en ejecución conjunta por módulos HA/eventos/tiempo sustituidos globalmente por otros tests. El archivo no existe en e1ac497, por lo que no se le atribuye antigüedad. | Aislamiento del harness, no regresión reproducida aisladamente. |
| walk_test_observation: PIR guiado | Igual: pasa aisladamente. | Harness. |
| walk_test_observation: publicación de progreso | Igual: pasa aisladamente. | Harness. |
| walk_test_observation: transiciones nuevas | Igual: pasa aisladamente. | Harness. |
| walk_test_observation: expiración tras desconexión | Igual: pasa aisladamente. | Harness. |
| walk_test_observation: timeout/limpieza | Igual: pasa aisladamente. | Harness. |
| v2082: release notes | Defecto de documentación durante la consolidación; RELEASE_NOTES_2.9.151 incorporado en e3ece2c. Reejecutado 5/5 en esta revisión. | Ya corregido. |
| v2056: callback HA | Fallo del fixture visto en ejecución por archivo: mock carecía de homeassistant.core.callback. Corregido en e3ece2c; reejecutado 12/12. | Ya corregido. |
| test_zones / test_sos_mode_configuration_contract: 0 unittest | Son tests de funciones estilo pytest, no TestCase; `unittest discover` no los ejecuta. No equivalen a pruebas aprobadas ni a regresión. | Usar runner apropiado en saneamiento Fase 10. |

Logs comparativos individuales conservados en /tmp/argus-review-pre-*.log y /tmp/argus-review-now-*.log. No se afirma que la suite backend amplia esté verde: quedan contratos y fixtures por mantener. No se amplió esta tarea a repararlos indiscriminadamente.

### Corrección localizada

`src/features/dashboard/argus-panel-bridge.ts`: recupera recording, active, abierto, activa, true, 1, tamper y vibration, manteniendo la prioridad del helper del host cuando exista. No modifica armado ni decisiones del backend. `SecurityConsole.context.test.tsx`: ocho casos comprueban que esos valores producen Pendientes=1/Listas=0 en el dashboard real renderizado, sin helper opcional. Antes de corregir: 8 fallos/4 aprobados en el archivo. Después: 12/12 del archivo; suite frontend completa 78/78, 17 archivos. TypeScript y build aprobados. Backend crítico 4/4, runtime de armado v2056 12/12 y versiones v2082 5/5. git diff --check aprobado para el diff actual. Bundle recompilado con el proceso existente para corresponder a fuentes. Versión permanece 2.9.151; estos cambios quedan sin commit.

### Criterios técnicos

- Diseño/Three.js/materiales/responsive: sin modificaciones.
- Un Canvas medido; rAF único y limpieza de observadores/recursos comprobados por inspección existente, no ensayo de fuga prolongado.
- Independencia temporal y adaptación/recuperación: conservadas las 19 pruebas dirigidas ya aprobadas.
- Interacción de cristales: implementación y evidencia previa conservadas; no nueva prueba manual de selección en esta revisión.
- Estados críticos y SOS: 4 pruebas actuales de backend crítico aprobadas; motor intacto.
- Movimiento reducido: comprobación acelerada descrita arriba, controles conservados.
- Rendimiento GPU validado únicamente para este Chrome/Apple M2, ventanas embebidas y duración medida. Safari, fullscreen con carga diferente, ProMotion, Raspberry Pi, Echo Show, tacto y lectores de pantalla físicos siguen pendientes separados.

Conclusión: revisión técnica de Fase 9 concluida tras corregir la regresión contextual reproducible. Implementación validada con las pruebas disponibles y medición GPU real acotada; no certificación universal de rendimiento físico. No se inicia Fase 10 ni se crea otro commit/versionado.
