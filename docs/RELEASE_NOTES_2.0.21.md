# Argus Home Hub v2.0.21 — Armado pendiente por instancia

Esta corrección de mantenimiento restaura la aplicación de la política de
sensores abiertos configurada en la UI para cada instancia de Argus.

## Corrección

- El panel de alarma carga la configuración UI desde el mismo `config entry`
  donde el panel la guarda, en el arranque y tras cada actualización.
- Casa, Noche, Ausente y Vacaciones con **Esperar a que cierren** permanecen en
  `ARMING` hasta que se cierre el último sensor configurado que no esté omitido.
- Los armados desde el panel/WebSocket, los servicios de Home Assistant y
  HomeKit comparten ese estado canónico; los sensores bypassed siguen sin
  bloquear ni retrasar el armado.

## Validación

Se añadieron pruebas de comportamiento para los cuatro modos, varios sensores,
bypass y las políticas permitir/bloquear/esperar, además de validar la recarga
por `config entry`.
