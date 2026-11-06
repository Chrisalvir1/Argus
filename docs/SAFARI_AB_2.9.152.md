# Argus 2.9.152 — comparación A/B controlada en Safari

Fecha: 5 de noviembre de 2026. Entorno activo: Safari nativo en `http://127.0.0.1:8123/argus`. Se mantuvo el sistema desarmado. No se ejecutaron PIN, armado, SOS, llamadas ni acciones sobre salidas de seguridad.

## Resultado

La comparación disponible no atribuye los tirones a una causa única. No se justifica una modificación permanente de Three.js, composición CSS ni animaciones con esta evidencia. Argus quedó visualmente restaurado, sin instrumentación temporal.

| Comparación | Muestra | Resultado observado | Conclusión |
| --- | --- | --- | --- |
| Scroll sintético, filtros activos (A2) | 12 s; 667 frames; 55,7 FPS; intervalo p50 17 ms, p95 21 ms; 5 intervalos >33 ms y 3 >50 ms. | La calidad etiquetada siguió en `light`; Canvas CSS estable en 887×762,1 px. El buffer interno cambió de 1066×916 a 1244×1069 durante la muestra. SVG: 4.676 `setAttribute`, 26 ms acumulados. WebGL: 8.016 llamadas `draw*`, 11 ms acumulados. | La variación del buffer ocurrió sin cambio del tamaño CSS, pero esta muestra no demuestra que causara una pausa visible. |
| Mismo scroll sintético, filtros desactivados por estilo inline temporal (B2) | 12 s; 616 frames; 51,4 FPS; p50 17 ms, p95 30 ms; 15 intervalos >33 ms y 4 >50 ms. | Confirmación durante la muestra: cero `backdrop-filter` activos. Buffer interno estable en 889×764; Canvas CSS igual a A2. SVG: 4.319 `setAttribute`, 18 ms. WebGL: 7.404 llamadas `draw*`, 15 ms. | No mejoró consistentemente frente a A2. Resoluciones internas adaptativas distintas y variación temporal impiden atribuir causalidad al blur. No se aplica una reducción permanente del desenfoque. |

Los dos ensayos usaron alternancia sintética de `document.scrollingElement.scrollTop` en Safari con Web Inspector abierto; **no** fueron gestos físicos de trackpad o rueda y no verifican sidebar ni pantalla completa. El inspector y la adaptación de calidad añaden variabilidad. Un primer intento de desactivar blur mediante CSS no prevaleció sobre estilos dentro del shadow DOM y se descartó; B2 sí confirmó cero filtros desactivados computados antes de iniciar la muestra.

## Alcance solicitado aún sin medición válida

- Calidad adaptativa normal frente a perfil fijo: no medido. El controlador es interno al componente; no se congeló porque no se identificó una intervención externa que mantuviera el mismo render y la órbita sin modificar el producto.
- Pantalla completa y apertura/cierre del panel lateral durante muestras equivalentes: no medidos en esta comparación.
- Perfil: carga, montaje React y animación de bienvenida no se separaron en esta muestra.
- La instrumentación temporal para RAF, buffer, `setAttribute` SVG y `draw*` WebGL se retiró al terminar. No se cambió Three.js ni el CSS permanente.

Por tanto, esta ronda **no demuestra fluidez global de Safari** ni valida físicamente scroll, fullscreen, sidebar o perfil. No se encontró evidencia suficiente para una corrección especulativa. Se conserva 2.9.152 y no se crea commit, tag ni release.

## Puertos locales

## Revisión posterior del proyecto solicitada por el usuario

React y React DOM instalados: 19.3.1, alineados. ReactPanelHost conserva su root mientras no cambia el contenedor; el efecto que construye Three.js depende de variante y número de zonas, no de cada actualización de estado. Esto no demuestra ausencia de renders React ni atribuye la pausa global a una dependencia.

Defecto localizado confirmado por lectura de la implementación instalada de Three.js: `setDrawingBufferSize` escribe siempre los atributos width/height, incluso con valores idénticos. El controlador adaptativo puede cambiar calidad manteniendo la resolución efectiva limitada por el mínimo o presupuesto. Se agregó una guarda de ancho, alto y ratio aplicados para evitar esas escrituras redundantes. Las transiciones reales de resolución siguen aplicándose. No se cambia la órbita, geometría ni política adaptativa.

Verificaciones ejecutadas: TypeScript sin errores, Vitest dirigido (8 pruebas aprobadas en 2 archivos), build Vite aprobado y diff sin errores de espacios. El bundle se reconstruyó. Esta corrección elimina la operación redundante identificada; su efecto sobre los tirones visibles y la pausa periódica sigue pendiente de comprobación en ejecución y no se declara resuelta toda la fluidez.

El único origen activo para Argus en este entorno es `127.0.0.1:8123`. Comprobación de listeners después de cerrar el preview: `8123` escuchando; `18127` y el preview Vite `5179` sin listener. El preview sobrante fue detenido. Referencias a `18123`/`18127` que aparecen en informes anteriores son registros históricos de otro laboratorio y no instrucciones para levantar Argus ni endpoints activos. El script `scripts/diagnostics/safari-resize-probe.js` se ajustó para aceptar únicamente el origen `http://127.0.0.1:8123`.
