# Argus Home Hub 3.7.4

## Panel de control y zonas

Se corrige una regla heredada de fullscreen que ocultaba todas las secciones salvo el contenedor principal, incluyendo la verificación de sensores y los contadores.

Al consultar zonas, la información ocupa una vista dentro del mismo panel: conserva el banner de estado y los conteos globales, mientras oculta e inhabilita hogar/núcleo/modos/SOS del fondo hasta cerrar. El cuerpo del detalle se desplaza internamente; la altura exterior de la tarjeta no aumenta al abrir información. Cerrar o Escape regresan al resumen y restauran foco y desplazamiento. El estado de alarma continúa actualizándose durante la consulta.

En desarmado no se muestran filas de sensores sin solicitarlas. Zonas cuenta las activas en Argus; Listas las zonas con todos sus sensores verificables cerrados/inactivos; Pendientes las que contienen sensores abiertos/activos. Desconectados, zonas vacías y estados no verificables se indican aparte: no se consideran cerrados. Los requisitos y las exclusiones de armado permanecen en el motor de seguridad, separados de estos conteos globales.

El selector de zona es compacto, los contadores se pueden pulsar completos y cada sensor resume estado, conexión y batería disponible. La hora de apertura queda en Más información. La prueba física es secundaria y requiere elegir una zona o Todas las zonas, además de las restricciones administrativas y de estado existentes. Si hay zonas activas, la prueba global incluye solo sensores de esas zonas; si no hay zonas, conserva el alcance heredado.

## Núcleo y compatibilidad

No se modifican SecurityEmblem3D.tsx ni SecurityShield.tsx: se conservan diseño, geometría, colores y animación del núcleo. Tampoco se modifican PIN, permisos, decisiones de armado, bypass, identidades ni emparejamientos. No se añaden dependencias. Incluye las mejoras TTS de v3.7.3 sin cambiarlas.

## Verificación

- TypeScript, suite frontend, suite backend y build documentados en docs/audits/PANEL_CONTEXT_3.7.4.md.
- Chromium local con componente real y datos HA simulados: Hub/Card en390×844, Card horizontal844×390, escritorio1366×768 y pantalla tipo Echo Show960×480.
- Verificación de altura estable, banner/conteos visibles, filtros, clic en el número, cierre, giro de pantalla con selección preservada, estado HA actualizado durante el detalle y fullscreen nativo de Chromium.
- No acredita validación física en Safari/iPhone o Echo Show. No se ha actualizado la instancia HA del usuario ni probado audio real.

## Actualización y reversión

Actualizar la integración existente en HACS y reiniciar HA según su procedimiento habitual; recargar Argus y el dashboard. El cargador frontend cambia de versión para solicitar el bundle nuevo. No eliminar la integración ni datos ni emparejamientos. Para revertir, conservar una copia de seguridad y reinstalar los archivos de v3.7.3; no requiere migración de almacenamiento.
