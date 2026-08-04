# Política de sensores abiertos y armado pendiente

Argus configura esta política desde la UI, por instancia y para los modos Casa (`home`), Ausente (`away`), Noche (`night`) y Vacaciones (`vacation`). Desarmado no tiene política de armado.

## Opciones

| Valor exportado | Resultado |
| --- | --- |
| `allow` | Arma aunque uno o más sensores estén abiertos. |
| `block` | Rechaza la solicitud e informa los sensores abiertos. |
| `pending` | Mantiene `ARMING` hasta que todos los sensores bloqueantes estén cerrados. |

No hay configuración YAML requerida: el panel persiste esta opción en el almacenamiento de UI. En una exportación, aparece dentro de la configuración del modo como `open_sensors_policy`. Por ejemplo:

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

Para compatibilidad, cuando `open_sensors_policy` no existe, `require_closed: true` se interpreta como `block` y `require_closed: false` como `allow`. También se acepta el formato heredado `bypassedSensors`.

## Bypass y espera

Siempre se evalúan los sensores del modo menos sus sensores omitidos. Un sensor en bypass no bloquea, no aparece como pendiente y no puede retrasar la confirmación. Esto no elimina sus eventos, telemetría ni automatizaciones ya configuradas.

Con `pending`, Argus publica `ARMING` para Home Assistant y HomeKit. Si hay varios sensores abiertos, no completa hasta que cierre el último. Si el modo tiene `arming_time`, deben cumplirse tanto el tiempo como el cierre de todos los sensores. El estado incluye el destino, el origen disponible y los sensores bloqueantes para facilitar automatizaciones y diagnósticos.

Las solicitudes desde el panel/WebSocket, servicios Home Assistant o HomeKit, MQTT, presencia y horarios pasan por el mismo flujo. Desarmar durante la espera la cancela definitivamente. Una nueva solicitud, cambio de modo, SOS/alarma, recarga de configuración, descarga de la integración y una programación de desarmado invalidan de forma segura la solicitud anterior. Las esperas no se persisten ni se reanudan después de reiniciar.
