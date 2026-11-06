# Compatibilidad HomeKit Bridge y exportación HAP

Auditoría local de Argus 2.9.160 y lectura del repositorio
Chrisalvir1/matter-all-in-one-chrisalvir, revisión
b62690c1667b080342bdac79865ed0db6e6e6057.

El archivo matter-all-in-one-addon/src/hap/hap-generic-accessory.ts conserva
SecuritySystemCurrentState mientras HA publica `arming` con el marcador
`argus_arming_transition`. Solo cambia TargetState al objetivo solicitado;
CurrentState se actualiza tras el evento confirmado de HA. El adaptador HomeKit
local conserva también el destino En Casa/Ausente/Noche sin adelantar el armado.
La política de sensores pendientes configurada en Argus se aplica en el motor a
cualquier origen, incluidos los bridges. Un modo configurado explícitamente para
permitir sensores abiertos no se convierte silenciosamente a otra política.

El perfil switch_hap del exportador envía turn_on/turn_off al dominio de la entidad
HA y consulta su estado. No aporta PIN al switch. El switch Argus Panic activa SOS;
turn_off llama al mismo método protegido que el panel de Argus. Con PIN configurado
rechaza el apagado sin autenticación: usar el teclado de Argus. Sin PIN permite
detener SOS sin desarmar. Una alarma de intrusión continúa enclavada; sus salidas
compartidas no se apagan por detener SOS. Se conserva el limitador de intentos del PIN.

Argus actualmente publica una entidad switch de Pánico; no se añadió una entidad
button duplicada. Si otro bridge representa el switch como botón, debe mantener
estas órdenes y estados, sin tratarlo como orden de desarmado.

Validación: 25 pruebas backend dirigidas (5 nuevas de PIN/SOS y 20 de HomeKit,
armado en espera y runtime/TTS), 85 frontend, TypeScript y build aprobados.
Servicios y entidades simulados: no se ejecutaron SOS, armado, llamadas ni sirenas
físicas. Pendiente: emparejamiento y visualización reales con HomeKit/HAP y la
versión instalada del exportador. No se modificó ni publicó el repositorio externo.
