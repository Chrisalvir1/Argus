# Argus 3.8.0 · Automatización y seguridad

Candidato basado en 3.7.12. Las funciones de aviso interactivo, MQTT, PIN de override y grupos de sensores se activan explícitamente.

| Archivo | Cambio |
| --- | --- |
| `sensor_state_runtime.py` | Ventana por grupo de sensores distintos y tratamiento de la primera lectura al restaurar un armado |
| `alarm_control_panel.py` | Aplica grupos y permisos al flujo del panel, conserva el bypass transitorio y actualiza las suscripciones MQTT |
| `push_actions.py` | Vincula cada acción de Companion App al estado que generó el aviso. Requiere un usuario autenticado, comprueba permisos y consume la acción una vez. |
| `auth.py`, `storage.py` | Validan y almacenan hashes de PIN de override de cada usuario junto con el permiso de armado forzado |
| `websocket_api.py` | Configura grupos y tópicos, redacta credenciales y valida el ciclo de armado solicitado |
| `SecurityConsole.tsx`, `argus-panel.ts` | Configuran el PIN de override en permisos de usuario y lo solicitan al armar con bypass |

## Configuración

- **Grupos de sensores.** En una configuración de modo de `argus/save_mode_config` agrega `sensor_groups`, por ejemplo `[{"sensors":["binary_sensor.front","binary_sensor.hall"],"required":2,"window_seconds":180}]`. Las entidades deben pertenecer al modo y cada sensor puede aparecer en un grupo. Un grupo observa activaciones de entidades distintas. Los sensores críticos mantienen el disparo inmediato.
- **Primera lectura.** Un sensor desconocido al restaurar un estado armado puede disparar al activarse. Para aceptar una primera lectura abierta de un contacto, configura `sensor_settings.<entity_id>.allow_open_initially` como `true` en el modo correspondiente. Argus vuelve a vigilar ese contacto al cerrarse.
- **Acciones push.** Guarda `push_actions_enabled: true` mediante `argus/save_ui` y configura destinos de notificación Companion App. Los avisos pueden incluir desarmado, reintento de armado y armado forzado. Cuando el panel requiere PIN, abre Argus y completa el flujo de PIN. Las acciones expiran tras tres minutos y respetan el contexto de usuario de Home Assistant.
- **Override.** En el editor de permisos concede armado y armado con bypass al perfil elegido y define su PIN de override. La consola ofrece la acción durante un armado en espera si todos los bloqueos son omitibles. Los sensores protegidos conservan su bloqueo. Los omitidos se exponen en `bypassed_sensors` y duran solo ese ciclo.
- **MQTT.** Mediante `argus/save_ui`, guarda un objeto `mqtt` con `enabled`, `state_topic` y `command_topic`. Usa tópicos distintos por instancia y permisos de publicación restrictivos en tu bróker. Argus descarta comandos MQTT retenidos. Home Assistant debe tener MQTT configurado.

Las verificaciones de la Companion App en dispositivos físicos y del bróker MQTT siguen pendientes antes de publicar.
