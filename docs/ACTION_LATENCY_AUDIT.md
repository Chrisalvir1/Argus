# Auditoría y corrección de latencia — 2026-10-14

## Resultado

La demora visible no correspondía a un retardo de armado en la instalación de laboratorio. La configuración probada usa `arming_time=0` y no tiene sensores ni salidas configurados. La entidad de Home Assistant confirmaba En Casa, Ausente y Noche en aproximadamente 7 ms. El panel React esperaba la respuesta websocket para redibujar; además, su redibujado de respaldo leía la instantánea anterior de `hass`. El usuario podía ver el modo anterior mientras esperaba aunque el servidor ya hubiese cambiado el estado.

La versión 2.9.96 muestra el estado solicitado inmediatamente al pulsar. Cuando llega la respuesta, reemplaza esa proyección por el estado canónico que el websocket lee de la entidad de alarma. Si la acción falla o el servidor devuelve un estado distinto (por ejemplo, espera de sensores), la UI se reconcilia con ese resultado. Desarmado también proyecta el cambio inmediato y se revierte si falla la validación.

## Recorrido verificado

1. La consola captura el estado objetivo antes de esperar el websocket y emite `argus-state-update`; React pinta el modo en el mismo ciclo del clic.
2. Home Assistant sigue siendo quien autoriza y ejecuta la acción. El handler devuelve el estado real de la entidad después del servicio, además de registrar la duración en el log.
3. Un error de permisos, PIN o servicio elimina la proyección, de modo que no queda un modo ficticiamente armado.
4. La entidad publica el estado antes de ejecutar persistencia, notificaciones, auditoría secundaria y sincronización de paneles. Los retardos armados y las políticas de espera por sensores siguen siendo efectivos.

## Verificación en la versión activa

- Home Assistant local reiniciado y registró `Argus integration starting (version 2.9.96)`.
- El panel respondió HTTP 200 y sirvió tanto `argus-bootstrap.js?v=2.9.96` como el bundle React versionado.
- Acciones reales del panel local: En Casa, Desarmado, Ausente, Desarmado, Noche, Desarmado. La interfaz mostró cada estado solicitado y terminó en **Desarmado**.
- El websocket registró En Casa en 6,9 ms, Ausente en 6,9 ms, Noche en 6,7 ms, y las tres acciones de desarmado entre 6,8 y 8,0 ms. La entidad confirmó cada estado entre 10 y 22 ms después de aceptar el comando.
- La prueba usó solo la instancia local `alarm_control_panel.argus_home_lab_argus_home_lab`, con cero sensores y cero salidas. No se activó SOS ni se realizó ninguna llamada.
- Suite Python: 159 pruebas correctas (13 omitidas). Vitest: 53 pruebas correctas. Compilación de producción y `compileall` correctos.

## Alcance visual

No se modificó la geometría, color, composición, escala ni animación del núcleo congelado. El cambio solo afecta el estado de interfaz y la confirmación de acciones.
