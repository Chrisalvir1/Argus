# Argus 2.9.85

- SOS ya no muestra zonas ni permite asignarle sensores desde el editor global. Las asignaciones antiguas de zona a SOS se migran fuera de la cobertura SOS.
- El panel SOS reutiliza el mismo selector de dispositivos y paneles compatibles de Sirenas. Su selección se guarda como `panic_outputs`, separada de las sirenas configuradas por cada modo.
- Las sirenas de En Casa, Ausente y Noche permanecen independientes. Es posible seleccionar una entidad en más de un modo y quitarla de uno sin modificar los demás.

Validación: pruebas Python de zonas y contratos de configuración SOS, suite frontend, TypeScript y build del bundle.
