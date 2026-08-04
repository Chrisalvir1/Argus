# Argus Home Hub v2.0.24 — Condición de espera para automatizaciones

## Nueva condición nativa de Home Assistant

Cada instancia de Argus incorpora una entidad binaria localizada: **Esperando que se cierren los sensores para armar**. Está asociada al dispositivo de esa instancia, por lo que no mezcla estados entre varias instalaciones de Argus.

Se activa sólo cuando Argus está en `ARMING` y espera sensores bloqueantes. Se desactiva al cerrar el último y completar el armado, al desarmar o cancelar, ante una nueva solicitud de modo, SOS/alarma, recarga o descarga. Un retardo normal de armado sin sensores pendientes no la activa.

## Uso en una automatización

En el editor de automatizaciones, añade una condición, selecciona el dispositivo de la instancia de Argus y elige **Esperando que se cierren los sensores para armar** como **activada**. También puede emplearse una condición de estado:

```yaml
condition:
  - condition: state
    entity_id: binary_sensor.argus_esperando_sensores_para_armar
    state: "on"
```

Sustituye el identificador por el asignado por Home Assistant. Los atributos `arming_target`, `blocking_sensor_count` y `blocking_sensors` aportan contexto sin exponer códigos ni credenciales.

## Validación

Se cubrieron transiciones de espera, cierre final, cancelación/desarmado, retardo normal y aislamiento entre dos instancias, junto con localización en los siete idiomas, pruebas completas y verificaciones estáticas.
