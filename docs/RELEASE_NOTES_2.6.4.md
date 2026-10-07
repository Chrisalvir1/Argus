# Argus Home Hub v2.6.4 — Armado por modo, transiciones y alertas

Fecha: 7 de octubre de 2026.

## Cambios

- Las listas de sensores de Casa y Noche quedan aisladas por modo. Si una lista está vacía, Argus no la completa con sensores de Ausente.
- Los avisos de armado y anuncios de voz se procesan en segundo plano con timeout, para que los destinos fuera de línea no retrasen la transición de estado.
- En Ausente y SOS, las facetas de cristal se separan del núcleo y viajan a las esquinas; allí se forman protecciones simétricas en «L». El lente oscuro se comprime durante el impulso y vuelve a abrirse para recorrer el panel.
- Acotar la espera de la animación de bienvenida mientras carga el tablero, restaurar estilos del avatar y retirar los overlays en todos los casos.

## Validación

- TypeScript, 9 pruebas de UI y build frontend.
- 141 pruebas Python ejecutadas (13 omitidas), `compileall`, comprobación de sintaxis JavaScript y `git diff --check`.
- Renderizado local Chromium del emblema en escritorio y móvil sin errores de ejecución. La transición de perfil y las notificaciones físicas requieren validación en Home Assistant tras instalar la versión.
