# Argus Home Hub v2.0.41

## Auditoría profunda de seguridad y panel
- Restaura un botón visible **DESARMAR / OFF** en cada instancia activa.
- HomeKit Off cancela solicitudes tanto en espera segura como en estado ARMING, sin exigir PIN para cancelar una alarma que todavía no terminó de armar.
- Los sensores seleccionados en cada modo esperan cerrados de forma predeterminada; sensores no disponibles no se consideran cerrados.
- Reconoce estados de binary_sensor, lock y cover con semántica segura.
- Conserva orden, tamaño y visibilidad de widgets mediante almacenamiento local estable y sincronización con Home Assistant.
- Repara la carga y el desplazamiento táctil de Modos, Control de acceso y Usuarios.

## TTS por interfaz o YAML
- La voz puede configurarse desde las opciones de la integración o en configuration.yaml.
- YAML tiene prioridad cuando está presente.
- Anuncia nombres, cantidad restante, cierre total y cancelación manual.
