# Cierre de correcciones de panel — v3.7.4

Auditoría previa: PANEL_AUDIT_3.7.3.md. La implementación sigue la aprobación del usuario para corregir y publicar, conservando el diseño del núcleo.

## Cambios

- Legacy: retirado el selector fullscreen genérico que ocultaba secciones internas.
- SecurityConsole: estado de navegación único (resumen/detalle, zona, filtro y consulta/prueba); captura de tamaño y scroll para mantener el marco; controles de fondo inertes; adaptación al cambio de orientación sin perder selección; sin filas espontáneas en desarmado.
- SecurityContext: estado confirmado, cierre y conteos globales persistentes, con desplazamiento del cuerpo. El detalle ocupa todo el área existente de la consola y no queda limitado a la antigua celda de sensores de la cuadrícula.
- Conteos: se usan zonas activas globales, no la lista de sensores requerida para el modo armado. Los estados informativos no se interpretan como cerrados por ausencia de actividad. Los desconocidos se indican aparte.
- ContextSensorChecks: selector compacto, estados/conexión/batería resumidos y hora en expansión voluntaria. Las pruebas físicas filtradas por Listas/Pendientes requieren escoger zona o Todas para evitar un alcance ambiguo.
- WebSocket de prueba física: Todas las zonas usa solo sensores de zonas activas; se mantienen permisos, exclusión de sensores inmediatos y condición de alarma desarmada. Sin zonas se conserva el conjunto legado.
- SecurityEmblem3D/SecurityShield y recursos gráficos del núcleo: sin cambios.

## Navegador

Harness temporal en /tmp/argus-panel-audit y resultados/capturas en /tmp/argus-panel-374. Ejecuta SecurityConsoleRoot y estilos del proyecto, incluyendo el bloque heredado de fullscreen y los estilos exteriores de Card. Backend, autenticación y estados de HA están simulados. No es una prueba de la instancia HA física.

Cinco escenarios pasan: móvil Hub390×844; móvil Card390×844; Card horizontal844×390; escritorio1366×768; pantalla tipo Echo Show960×480. En todos: sin filas al cargar desarmado, altura exterior conservada al abrir, fondo oculto/inactivo, detalle visible dentro de fullscreen, conteos constantes, Pendientes/Listas con resultados correctos, clic en número del contador y cierre al resumen.

Pruebas adicionales pasan: banner se actualiza a En Casa manteniendo3zonas globales; desconexión cambia a3/0/2 más aviso sin verificar; selección de Garaje se mantiene al rotar; Escape vuelve al resumen; fullscreen nativo Chromium permite abrir y cerrar detalle. No se enviaron acciones reales de armado, SOS, desarmado ni pruebas físicas.

## Pruebas automatizadas

La suite frontend añade regresiones de filas no solicitadas, conteos globales independientes del modo, cierre persistente, datos informativos no cerrados y ausencia del selector heredado destructivo. El backend añade3pruebas del alcance de sensores en sesiones físicas. Los resultados finales de compilación y suites se registran durante la preparación de publicación.

## Límites conservados

Safari/iPhone, Echo Show y HA reales pendientes de comprobación. La batería del diagnóstico sigue dependiendo de atributos expuestos por HA; no se adivinan asociaciones con otras entidades de batería. La consulta de diagnóstico mantiene su endpoint general y la UI filtra el alcance de zonas; optimizar consultas es trabajo separado. Una zona desconocida no cuenta como Lista ni como abierta: Zonas puede ser mayor que Listas+Pendientes, con aviso explícito.

Resultados finales locales:75pruebas frontend aprobadas; suite backend290pruebas contabilizadas con13omisiones heredadas y0módulos fallidos; TypeScript, build, sintaxis Python y git diff --check correctos. Backend local con HA2025.1.4/Python3.12; compatibilidad del entorno objetivo declarada se verifica en Actions. Los cambios no abarcan una prueba física del hardware.
