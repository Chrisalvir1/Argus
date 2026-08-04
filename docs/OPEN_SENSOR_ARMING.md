# Política de sensores abiertos y armado pendiente

Argus configura esta política desde la UI, por instancia y para los modos Casa (`home`), Ausente (`away`), Noche (`night`) y Vacaciones (`vacation`). Desarmado no tiene política de armado.

## Opciones

| Valor exportado | Resultado |
| --- | --- |
| `require_closed: true` | Rechaza la solicitud e informa los sensores abiertos. Es el control existente **Bloquear si abiertos**. |
| `allow` | Con el bloqueo desactivado, arma aunque uno o más sensores estén abiertos. |
| `pending` | Con el bloqueo desactivado, mantiene `ARMING` hasta que todos los sensores bloqueantes estén cerrados. |

No hay configuración YAML requerida: Argus gestiona esta opción desde el panel y la persiste en su almacenamiento de UI. El siguiente JSON es una **referencia no ejecutable** del formato de una exportación; no es una configuración YAML que deba añadirse a Home Assistant. En una exportación, la política aparece dentro de la configuración del modo como `open_sensors_policy`.

```json
{
  "modes": {
    "__by_entity__": {
      "alarm_control_panel.argus": {
        "away": {
          "sensors": ["binary_sensor.front_door", "binary_sensor.garage"],
          "bypassed_sensors": ["binary_sensor.garage"],
          "open_sensors_policy": "pending",
          "arming_time": 30
        }
      }
    }
  }
}
```

El selector nuevo sólo guarda `allow` o `pending`; el bloqueo pertenece exclusivamente a `require_closed`. Para compatibilidad, `open_sensors_policy: block` de exportaciones anteriores se interpreta como `require_closed: true` y se normaliza al guardar de nuevo. Si ambos valores existen, `require_closed` tiene prioridad. También se acepta el formato heredado `bypassedSensors`.

## Bypass y espera

Siempre se evalúan los sensores del modo menos sus sensores omitidos. Un sensor en bypass no bloquea, no aparece como pendiente y no puede retrasar la confirmación. Esto no elimina sus eventos, telemetría ni automatizaciones ya configuradas.

Con `pending`, Argus publica `ARMING` para Home Assistant y HomeKit. Si hay varios sensores abiertos, no completa hasta que cierre el último. Si el modo tiene `arming_time`, deben cumplirse tanto el tiempo como el cierre de todos los sensores. El estado incluye el destino, el origen disponible y los sensores bloqueantes para facilitar automatizaciones y diagnósticos.

Las solicitudes desde el panel/WebSocket, servicios Home Assistant o HomeKit, MQTT, presencia y horarios pasan por el mismo flujo. Desarmar durante la espera la cancela definitivamente. Una nueva solicitud, cambio de modo, SOS/alarma, recarga de configuración, descarga de la integración y una programación de desarmado invalidan de forma segura la solicitud anterior. Las esperas no se persisten ni se reanudan después de reiniciar.

## Condición para automatizaciones de Home Assistant

Argus añade, por cada `config entry`, una entidad binaria al mismo dispositivo de Home Assistant: **Esperando que se cierren los sensores para armar** (el nombre se muestra en el idioma de Home Assistant). Se activa exclusivamente si Argus está en `ARMING` y `arming_waiting_for_sensors` es verdadero; se desactiva al cerrar el último sensor y terminar el armado, al desarmar o cancelar, al cambiar de modo y al descargar la integración. Un retardo normal de `arming_time` sin sensores pendientes no la activa.

En el editor de automatizaciones, crea una condición, escoge el dispositivo de la instancia de Argus, selecciona la entidad **Esperando que se cierren los sensores para armar** y el estado **activado**. La alternativa YAML de una condición de estado es:

```yaml
condition:
  - condition: state
    entity_id: binary_sensor.argus_esperando_sensores_para_armar
    state: "on"
```

Sustituye el `entity_id` por el que Home Assistant asigne a la instancia. La entidad expone `arming_target`, `blocking_sensor_count` y `blocking_sensors`, sin secretos ni códigos.

## Escudo y localización

Mientras `arming_waiting_for_sensors` sea verdadero, el escudo SVG de una instancia activa presenta **Perímetro en cierre**: mantiene atenuada la identidad de Casa, Noche, Ausente o Vacaciones, usa un aro ámbar y una puerta asegurándose, e indica los accesos pendientes. Muestra como máximo dos nombres y un indicador de sensores restantes; al cerrarse el último hace una transición breve al modo armado.

El retardo normal de `arming_time` no se presenta como una espera de perímetro: usa **Armado en curso** y un reloj, sin lista de sensores. Los textos de configuración, espera, conteo y retardo están disponibles en los siete idiomas seleccionables de Argus (español, inglés, francés, portugués, italiano, chino y ruso), y el escudo respeta `prefers-reduced-motion`.
