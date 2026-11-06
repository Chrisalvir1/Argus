# Argus 2.9.84

## Cambios

- Se agrega la pestaña global **Zonas** a la barra de Modos / SOS. El editor de diez zonas se administra allí; cada modo muestra un resumen de las zonas que tiene asignadas.
- Se combina la selección por modo de sirenas, luces, enchufes, switches y paneles de alarma compatibles en un solo listado y selector.
- Los paneles `alarm_control_panel` se siguen guardando en su campo compatible y se controlan con servicios de armado, disparo y desarmado. Las salidas HA, incluidas las entidades provenientes de MQTT, conservan sus acciones `turn_on`/`turn_off`.
- Se retira el checkbox MQTT redundante de la tarjeta de Sirenas.

## Validación

- Suites Vitest y Python ejecutadas después de compilar el bundle.
- El panel local se verificará con Argus desarmado; no se activan sensores, salidas ni SOS durante esta validación.
