# Auditoría del editor de widgets — 2026-10-14

## Alcance y conclusión

Solicitud: comportamiento de widgets semejante a iPad, conservando el diseño Argus: mover, reorganizar, redimensionar horizontal/verticalmente, adaptar el contenido al tamaño real y animar con respuesta inmediata y rebote al terminar. Primero auditar; no implementar todavía.

La base es React con `react-grid-layout` 2.3, usando su adaptador `legacy`, y `react-resizable`. No hace falta rehacer todo Argus. Se recomienda reconstruir el controlador del editor, su contrato de dimensiones y la presentación interna de los seis widgets, conservando servicios, datos y lógica de seguridad. Mantener inicialmente la biblioteca de grid y decidir su sustitución únicamente con un prototipo aislado de gestos. No cambiar el núcleo aprobado.

## Evidencia en el panel local

Inspección de DOM y estilos computados en `http://127.0.0.1:8123/argus`, viewport 584 × 715, versión local 2.9.97, sin activar modos ni SOS ni mover/redimensionar widgets persistidos.

| Widget | Alto del contenido disponible | Alto interior requerido | Problema observado |
|---|---:|---:|---|
| Historial | 414 px en la tarjeta; panel limitado a 329 px | 408 px, además de la lista desplazable | Altura máxima de 46vh y lista fija de 280 px: dos desplazamientos, espacio desaprovechado |
| Automatizaciones | 414 px | 414 px | Tarjeta vacía conserva alto fijo del grid; no tiene presentación compacta por ancho de widget |
| Respaldo | 414 px | 414 px | Contenido de 674 px dentro de 539 px; overflow horizontal oculto recorta controles |
| Acceso | 414 px | 1039 px | Límite adicional de 60vh; formulario largo sin estrategia compacta |
| Modos | 522 px | 922 px | Se reduce la ventana desplazable, no se reorganizan los controles por ancho de tarjeta |
| Soporte | 198 px | 198 px | Se mantiene el diseño heredado; requiere validación en tamaños menores |

Los seis widgets inspeccionados tienen `container-type: normal`: no existe un contrato común de container queries por tarjeta. El encabezado y el panel de seguridad quedan fuera de la cuadrícula editable.

## Hallazgos del código

### 1. Dos modelos de presentación

`src/features/dashboard/index.tsx` mueve nodos HTML heredados a hosts React. `ArgusDashboard.tsx`, componente `Host`, los inserta con `appendChild`. React controla la carcasa y la geometría, pero el contenido sigue dependiendo de `src/legacy/argus-panel.ts`, estilos inline y estilos globales.

La presencia de React no convierte automáticamente el contenido en adaptable. `height:100%` en la carcasa no elimina alturas fijas, filas flex sin wrapping o restricciones internas. El editor HTML antiguo continúa definido en el código; la integración oculta sus controles y sustituye `_toggleWidgetEditing`. No se confirmó un segundo editor activo, pero es deuda que debe retirarse al migrar.

### 2. Conflictos de posición y tamaño

En `ArgusDashboard.tsx`:

- `compactType="vertical"` empuja el diseño hacia arriba; no conserva huecos elegidos libremente.
- `preventCollision={false}` permite al motor desplazar otros widgets, pero `onDragStop` vuelve a comprobar colisiones usando `lastValid.current`, no el layout final recibido en el callback. Puede decidir con posiciones anteriores a la operación.
- `onResizeStop` descarta el layout completo recibido. `replaceItem` cambia solo la tarjeta elegida y, ante colisión, llama a `firstFreePosition`, que busca desde la esquina superior izquierda. No conserva necesariamente la solución que acaba de mostrar el motor.
- La cuadrícula usa filas de 92 px más separación de 16 px: el ajuste vertical es de 108 px por unidad. Es muy grueso para un gesto que se espera continuo.
- Todos los widgets aceptan mínimos genéricos de una columna y una fila, aunque algunos formularios no caben. El máximo de 12 filas también es universal.
- Solo hay tirador sureste (`se`), y el arrastre solo comienza en un botón de 44 × 40 px. No existe autodesplazamiento implementado por Argus para subir/bajar por un tablero largo durante el arrastre, ni controles de movimiento por teclado.
- `isBounded` limita el gesto al contenedor del grid. La cabecera y seguridad no están dentro de ese espacio: los seis widgets no pueden cruzar esa frontera para colocarse por encima de ellos.

Estos conflictos están confirmados en el código. El gesto persistido no se ejecutó en esta auditoría; la causa exacta de cada fallo de arrastre debe reproducirse en un entorno de prueba con copia del layout.

### 3. La animación introduce retraso durante resize

`style.css` aplica a `.argus-dashboard-grid .react-grid-item` transiciones de 180 ms en transform, width y height. El CSS de la biblioteca desactiva transiciones con `.react-grid-item.resizing`, pero el estilo local se inyecta después con igual especificidad y lo anula. Solo se restaura explícitamente `transition:none` para arrastre, no para resize.

Resultado esperado por la cascada: el tamaño visual persigue al puntero durante el estirado. No existe un resorte físico de cierre; la curva actual es una transición CSS convencional. El blur de 24 px y las sombras de todas las tarjetas añaden coste cuando se repinta su tamaño, pero su coste en milisegundos aún no se ha perfilado.

### 4. Adaptación basada en pantalla, no en widget

`style.css` y el template heredado usan media queries de viewport. Una tarjeta estrecha situada en un escritorio ancho conserva controles de escritorio. Casos concretos en `argus-panel.ts`:

- Historial: `height:280px` inline y máximo de `46vh`/`min(58vh,520px)` en su panel.
- Acceso: máximo de `60vh`.
- Respaldo: fila flex con tres acciones, sin wrapping en su contenedor inline.
- Modos: tabs y formularios con reglas propias, sin consultar el ancho/alto del widget.

La carcasa añade scroll vertical a todos los paneles y oculta overflow horizontal. Eso impide ver el desbordamiento, pero no lo resuelve.

### 5. Guardado y breakpoints inconsistentes

En `layout.ts` e `index.tsx`:

- El editor trabaja con cinco breakpoints (12/8/4/2/2 columnas), mientras el almacenamiento v3 guarda tres (12/8/2). Al cargar, copia el layout móvil de dos columnas también a `sm`, que tiene cuatro. Al guardar, prioriza `xs` para móvil y descarta la distribución específica de `sm` y `xxs`. Una disposición puede cambiar después de recargar.
- El cache local usa usuario + dashboard, pero el objeto remoto `react_layout_v3` no tiene espacio de nombres por usuario. No garantiza un layout independiente para cada perfil.
- `save(layouts)` llama a `migrateToV3({layouts})` sin pasar la visibilidad actual; genera `visibility:{}` y puede borrar la selección de widgets ocultos del servidor.
- Las escrituras de layout, visibilidad y salida del editor no están serializadas. `revision` se incrementa en el cliente pero no se valida como control de concurrencia en el guardado mostrado. Respuestas fuera de orden pueden dejar estado local o remoto antiguo.
- El ResizeObserver añadido por Argus observa el nodo inicial de carga con dependencias vacías; tras hidratarse se sustituye ese nodo. Es redundante y potencialmente obsoleto. La biblioteca sí tiene un observador propio de ancho, por lo que esto no prueba que falle toda la detección de tamaño.

### 6. La cobertura de pruebas no valida el gesto real

Las 53 pruebas del frontend pasan. Las de layout comprueban principalmente funciones puras. El test Python llamado `collision_safe_non_compacting_grid` comprueba tokens, pero no verifica que la compactación esté desactivada; actualmente el componente la activa. No hay prueba de puntero que garantice orden, resize, persistencia y reflujo del contenido después de recargar.

## Propuesta de reconstrucción acotada

1. **Modelo único y transacciones.** Separar layout confirmado y borrador de edición. Usar el layout completo que devuelve el motor; un solo resolvedor de colisiones, sin volver a buscar huecos. Guardar layout y visibilidad juntos, serializar peticiones y conservar una copia recuperable del diseño anterior. Definir expresamente si el tablero es compartido o por perfil antes de migrar datos.
2. **Widgets con contrato real.** Cada tarjeta tiene cabecera, cuerpo `min-height:0`, anchos mínimos útiles y presentaciones compacta/media/amplia mediante container queries. Altura adicional amplía el contenido útil; no escala textos como una fotografía. Historial: una sola lista flexible; Modos/Acceso: secciones que reorganizan sus columnas; Respaldo/Soporte: acciones con wrapping; Automatizaciones: lista flexible y estado vacío proporcionado.
3. **Gestos y colocación previsibles.** Movimiento con ratón y touch, asa clara, vista previa del destino y autoscroll. La tarjeta sigue el puntero sin interpolación durante el gesto. Los vecinos se acomodan de forma determinista. Añadir alineación izquierda/centro/derecha y movimiento accesible; decidir si se permiten huecos deliberados y conservarlos de forma coherente. Más resolución vertical que las filas actuales.
4. **Movimiento elástico al terminar.** Un resorte breve al soltar/encajar y transición de vecinos mediante transform. No aplicar easing al tamaño que el usuario está manipulando. Respetar movimiento reducido; reducir blur/sombras durante el gesto en equipos lentos. El navegador sincroniza la animación con la pantalla; no prometer 120 fps sin medir.
5. **Migración incremental.** Implementar primero una cuadrícula de prueba con tarjetas ficticias y después Historial + Respaldo. Validar el motor, luego migrar Modos, Acceso, Automatizaciones y Soporte sin cambiar su lógica. Integrar el panel de seguridad en un shell editable solo si ese alcance se confirma; conservar el diseño congelado de su núcleo.

## Criterios de aceptación antes de sustituir el editor actual

- Reordenar arriba/abajo y colocar a izquierda/centro/derecha cuando haya ancho suficiente; persistir exactamente la decisión tras recargar.
- Estirar/encoger con ratón y tacto, sin que la tarjeta salte a otro hueco ni el tirador se quede retrasado.
- Verificar cada widget en anchos aproximados de 280, 360, 520 y 800 px, alto compacto/medio/grande, y orientación vertical/horizontal. No exigir a un formulario completo caber en un tamaño ilegible: imponer un mínimo útil y ofrecer presentación compacta.
- Comprobar cero recortes horizontales, controles accesibles y un único scroll por región larga.
- Probar ocultar, mover, guardar y recargar; cambiar breakpoints; guardar con red lenta y peticiones fuera de orden; perfil diferente si se elige distribución por usuario.
- Registrar tiempos de frames y tareas largas durante drag/resize en equipos lentos y pantallas de 60/120 Hz; validar el resorte visualmente y con movimiento reducido.
- Conservar configuración, funciones de seguridad, núcleo aprobado y posibilidad de recuperar la disposición anterior.

## Trabajo realizado en esta auditoría

Lectura del editor, adaptador de montaje, modelo/migración de layout, almacenamiento remoto, estilos heredados y CSS de las dependencias instaladas; mediciones reales de los seis widgets; ejecución de la suite existente (53 pruebas). Solo se añadieron este informe y requisitos a `UX_MEMORY.md`. No se modificó ni desplegó código del editor.
