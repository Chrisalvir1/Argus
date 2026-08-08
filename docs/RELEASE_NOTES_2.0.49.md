# Argus Home Hub v2.0.49 — candidato de validación física

## Motivo

La prueba física de v2.0.48 confirmó dos regresiones que no estaban cubiertas por CI: Apple Home deja de mostrar una espera prolongada como “Armando…” y tres widgets no se adaptan correctamente al tamaño configurado.

## HomeKit

- Mantiene intacta la máquina de estados: Argus continúa en `arming` mientras haya sensores bloqueadores y solo `Off` cancela la solicitud.
- Añade un heartbeat exclusivo de Argus cada 15 segundos mientras existe `_arm_request`.
- El heartbeat cambia únicamente el atributo `argus_homekit_keepalive`, provocando un evento nuevo de Home Assistant para que el adaptador HomeKit vuelva a publicar el modo objetivo.
- El temporizador se elimina al cancelar, desarmar o completar el armado y nunca cierra sensores ni completa la transición.

## Control de acceso y usuarios

- El cuerpo, pestañas, listas y diálogos usan la altura real del widget.
- Rueda, trackpad y gesto táctil desplazan el contenido internamente.
- En móvil se aplica `touch-action: pan-y`, inercia WebKit y espacio inferior seguro.

## Respaldo y restauración / Apoya a Argus

- Ambos widgets centran el contenido horizontal y verticalmente en S, M, L y XL.
- Controles y botones se reorganizan en varias líneas, respetan el ancho disponible y no se recortan en móvil.

## Validación requerida

1. Esperar al menos dos minutos con un sensor abierto y confirmar que Apple Home conserva “Armando…”.
2. Pulsar `Off` y confirmar `disarmed` sin heartbeat ni solicitud pendiente.
3. Abrir Usuarios y recorrer toda la configuración con rueda y gesto táctil.
4. Probar Control de acceso, Respaldo y restauración y Apoya a Argus en S, M, L y XL, escritorio y móvil.
5. No publicar ni etiquetar v2.0.49 hasta completar prueba física y CI.
