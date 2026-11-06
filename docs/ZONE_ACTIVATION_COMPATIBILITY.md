# Activación opcional de zonas

En Modos / SOS → Zonas, el administrador dispone de «Activar zonas».
El backend permite cambiarlo únicamente con los paneles de esa integración
confirmados en `disarmed` y sin SOS activo. Una entidad ausente no equivale a desarmado.

Las instalaciones sin asignaciones de zona mantienen el comportamiento anterior.
Las instalaciones que ya tenían sensores y modos asignados a zonas conservan su
activación al migrar. Las definiciones desactivadas quedan en `zones_saved`;
`zones` contiene exclusivamente las definiciones efectivas. Los lectores existentes
(armado, diagnóstico, núcleo, voz) siguen leyendo `zones`.

Al activar se guarda `zones_legacy_modes`. Al desactivar se recuperan sus sensores,
condiciones y omisiones configuradas, conservando otros ajustes posteriores de cada
modo. Esto conserva tanto el formato global como `__by_entity__`. Las instalaciones
que ya usaban zonas antes de esta copia no tienen un historial recuperable de sus
sensores anteriores: al desactivar se retiran los sensores administrados por esas
zonas y se conservan los sensores ajenos a ellas. No se inventa una configuración histórica.

Las opciones/YAML de TTS se importan al almacenamiento del panel durante el inicio
de la integración. Los textos y valores ya guardados en Argus tienen prioridad.
La ruta antigua continúa mostrando la indicación para abrir el editor de Argus;
los datos originales se conservan como fuente compatible.

## Automatizaciones de Home Assistant

Se conserva el evento `argus_sensor_opened`. Se añade `argus_zone_changed` al recibir
un cambio de estado de un sensor observado de una zona efectiva, incluso si está
omitido. No es una orden de disparo de alarma: describe el estado físico recibido.
Incluye `entry_id`, `alarm_entity_id`, `zone_id`, `zone_number`, `zone_area`,
`entity_id`, `state`, `sensor_states`, `active_sensors`, `unverifiable_sensors`,
`any_sensor_active`, `all_sensors_active` y `all_sensors_closed`.

Ejemplo de disparador para cualquier cambio del sensor de la zona:

```yaml
triggers:
  - trigger: event
    event_type: argus_zone_changed
    event_data:
      zone_id: zone-1
      entity_id: binary_sensor.patio
conditions:
  - condition: template
    value_template: "{{ trigger.event.data.all_sensors_active }}"
```

Filtrar también `entry_id` cuando haya varias instancias. El ejemplo requiere añadir
una acción elegida por el usuario. `all_sensors_active` describe todos los sensores
activos (por ejemplo contactos abiertos), independientemente de las condiciones de
alarma configuradas. Una entidad desconocida o desconectada nunca cuenta como cerrada.
El evento se produce en cambios, no es una condición de estado persistente ni un
selector de dispositivos nuevo en el editor de automatizaciones.

## Validación disponible

Pruebas dirigidas de migración, reversibilidad, modos globales y por entidad,
eventos agregados y TTS. Frontend: 83 pruebas; TypeScript y bundle compilados.
Estas verificaciones no representan una prueba de automatizaciones externas ni una
actualización de la instalación operativa del usuario.

## Núcleo y voz general

Con zonas desactivadas el núcleo conserva siete cristales decorativos sin etiquetas.
Con zonas activadas representa exclusivamente las definiciones habilitadas. La pestaña
Voz de Argus de Modos / SOS contiene una única configuración general. El formulario
de opciones de HA se retiró conservando los datos heredados. El anuncio de desarmado
se produce solo tras una transición confirmada y no se repite estando ya desarmado.
Validación adicional: 33 pruebas dirigidas, 83 frontend, TypeScript y compilación.

## Sensores anteriores y luces de alarma

Con zonas desactivadas, los modos muestran Sensores con las asignaciones antiguas
globales o por entidad. El selector acepta binary_sensor, sensor, cover, lock e
input_boolean; una lectura numérica no crea una condición de umbral por seleccionarla.
Salidas: light, switch, siren, fan, input_boolean, script y paneles externos.
MQTT se admite a través de esas entidades publicadas por HA, no enviando tópicos arbitrarios.
Se excluyen los paneles propios para evitar activar Argus recursivamente.

Respiración media usa RGB solo en luces con modos de color compatibles, y transiciones
solo si HA anuncia LightEntityFeature.TRANSITION. Ciclo de 3 segundos con transiciones
de 1,2 segundos por tramo. Una luz incompatible mantiene salida fija sin parámetros no
anunciados. Al detener la salida se cancela y espera la tarea antes de restaurar la
captura de encendido, brillo, color y efecto originales. RGBW/RGBWW conserva sus canales.
No se inventa color blanco si el dispositivo no informa su color anterior.
Tonos de sirena: solo los disponibles en available_tones y específicos de cada modo.

Validación: 85 pruebas frontend; 26 backend dirigidas, incluidas 7 de luces y tonos
con servicios simulados. No se activaron luces, sirenas ni otros dispositivos físicos.
