# Actualización de Argus v2.6.8 a v3.0.0

1. Cree un respaldo completo de Home Assistant, incluyendo `.storage`, `configuration.yaml`, automatizaciones e integración Argus.
2. Actualice los archivos de la integración mediante HACS o el paquete oficial. No elimine ni vuelva a crear la integración.
3. Reinicie Home Assistant. Abra Argus y compruebe modos, sensores, PIN, reproductores, salidas y automatizaciones.
4. Configure las novedades únicamente cuando quiera utilizarlas.

## Conservación de datos

Se conservan ConfigEntry, opciones e identificadores de entidades. El almacenamiento anterior `argus.ui` se recupera para una única instancia; no se mezclan datos automáticamente entre varias instancias. La migración conserva campos heredados y desconocidos, incluidos destinos antiguos de voz.

Las instalaciones sin zonas mantienen los sensores configurados por modo. Activar Zonas es una decisión del administrador. Antes de hacerlo, revise las asignaciones y modos; la activación cambia el origen de la selección de sensores.

Los ajustes de voz del panel prevalecen sobre YAML, opciones de integración y datos iniciales. Los valores heredados que aún no existen en el panel se importan sin reemplazar personalizaciones nuevas. Los mensajes vacíos mantienen su significado de usar el mensaje predeterminado.

## Automatizaciones

No cambie IDs de entidades existentes. Las automatizaciones de Home Assistant que apuntan a esas entidades deben conservar sus referencias. Compruebe condiciones y servicios personalizados de su instalación antes de habilitar salidas reales. Las nuevas acciones por zona requieren configuración expresa.

SOS y alarma de intrusión son independientes. Apagar SOS conserva una intrusión activa y exige autenticación si hay PIN configurado. Los puentes externos no omiten esta protección.

## Recuperación

Si necesita volver atrás, restaure el respaldo completo de Home Assistant junto con la versión anterior. Restaurar solo archivos Python no revierte los datos que se hayan editado después de actualizar.
