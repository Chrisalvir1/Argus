# Argus 2.9.86

- Solucionado el guardado de zonas: el registro actual de Home Assistant expone objetos `DeviceEntry` no hashables; Argus ahora valida sus IDs y el comando captura fallos inesperados con un error visible y registro del servidor.
- El núcleo inicia con tres zonas vacías habilitadas. Las instalaciones anteriores con una lista vacía reciben estas tres zonas una sola vez, hasta diez disponibles.
- `Zona N` es fijo; solo el área es personalizable. Puedes guardar la zona antes de asignar área, sensores o modos.
- Rediseño Liquid Glass para el editor y distintivos en cada cristal con `ZONA N` y el área en subtítulo.

Validación: tests de zonas y contratos, suite frontend, TypeScript, build y suite de integración.
