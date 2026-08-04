# Problemas conocidos — Objetivo v2.0.19

Reportados por el usuario el 2026-08-03 (versión base: v2.0.18).
Cada problema tiene su issue en GitHub con la descripción completa y el comportamiento esperado.

## Alcance general

| # | Issue | Problema | Plataforma |
|---|-------|----------|------------|
| 1 | [#26](https://github.com/Chrisalvir1/Argus/issues/26) | Fondo de pantalla: no se puede cambiar, subir desde galería ni restaurar el predeterminado | Global + Móvil + Panel |
| 2 | [#28](https://github.com/Chrisalvir1/Argus/issues/28) | Instancias activas: eliminar el "sistema desarmado" (mostrar solo en el top bar) | Global |
| 3 | [#29](https://github.com/Chrisalvir1/Argus/issues/29) | Pin maestro: los textos no son visibles | Global |
| 4 | [#27](https://github.com/Chrisalvir1/Argus/issues/27) | Historial de actividad muestra todo el historial sin scroll | Móvil |
| 5 | [#30](https://github.com/Chrisalvir1/Argus/issues/30) | Top bar desalineado: hora, fecha, clima y sistema armado | Móvil |
| 6 | [#31](https://github.com/Chrisalvir1/Argus/issues/31) | Rendimiento del dispositivo no está bien alineado | Móvil |
| 7 | [#32](https://github.com/Chrisalvir1/Argus/issues/32) | No se pueden ajustar las acciones SOS | Móvil |

## Criterios de aceptación

1. **Fondo de pantalla (#26):** el cambio de fondo se aplica de inmediato (imagen o animado); existe opción funcional para restaurar el fondo predeterminado de Argus; en móvil se puede subir una imagen desde la galería del dispositivo; en el panel se puede cambiar a imagen o animado.
2. **Instancias activas (#28):** el estado de "sistema desarmado" ya no aparece como instancia activa; el estado del sistema solo se muestra en el top bar.
3. **Pin maestro (#29):** todos los textos son legibles con el tema activo (revisar contraste/color de fuente).
4. **Historial móvil (#27):** se muestra una cantidad limitada de eventos recientes y el resto se carga con scroll (contenedor con scroll o carga incremental).
5. **Top bar móvil (#30):** hora, fecha, clima y estado del sistema armado ordenados y simétricos, alineados vertical y horizontalmente.
6. **Rendimiento del dispositivo (#31):** la sección se alinea correctamente con el diseño general del panel en móvil.
7. **Acciones SOS (#32):** las acciones SOS se pueden configurar desde la versión móvil con los mismos controles disponibles en escritorio.

## Notas

- Al cerrar cada corrección, referenciar el issue correspondiente en el mensaje de commit (ej. `fix(panel): ... closes #27`).
- Actualizar `CHANGELOG.md` con la sección `## [2.0.19]` al completar las correcciones.
