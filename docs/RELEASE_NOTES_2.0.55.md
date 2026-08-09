# Argus Home Hub 2.0.55

## Reparación definitiva del armado en espera

- Mantiene `ARMING` mientras existan sensores abiertos.
- Anuncia por TTS cada sensor cerrado y los que todavía faltan.
- Al cerrar el último sensor, anuncia la finalización y activa inmediatamente el modo solicitado.
- El watchdog cubre eventos Aqara/Zigbee retrasados o perdidos.
- Repara generaciones desincronizadas y solicitudes `ARMING` huérfanas.
- Serializa reconciliaciones concurrentes para evitar doble TTS o doble armado.
- Añade pruebas ejecutables de cierre parcial y cierre final.

La prueba física con Aqara y HomeKit debe realizarse tras instalar v2.0.55 y reiniciar Home Assistant.
