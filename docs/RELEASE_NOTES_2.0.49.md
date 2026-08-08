# Argus Home Hub v2.0.49 — candidato de validación física

## Motivo

La prueba física de v2.0.48 confirmó regresiones que no estaban cubiertas por CI: Apple Home deja de mostrar una espera prolongada como “Armando…”, los cambios de sensores pueden no completar el armado o disparar la alarma, y tres widgets no se adaptan correctamente.

## HomeKit

- Mantiene intacta la máquina de estados: Argus continúa en `arming` mientras haya sensores bloqueadores y solo `Off` cancela la solicitud.
- Añade un heartbeat exclusivo de Argus cada 15 segundos mientras existe `_arm_request`.
- El heartbeat cambia únicamente `argus_homekit_keepalive`, provocando un evento de Home Assistant para que el adaptador HomeKit vuelva a publicar el objetivo.
- El temporizador se elimina al cancelar, desarmar o completar el armado.

## Reconciliación autoritativa de sensores

- El listener de Home Assistant sigue siendo la ruta inmediata.
- Un watchdog local cada dos segundos recalcula los sensores bloqueadores mientras existe una solicitud de armado.
- Cuando se cierra un sensor, actualiza la lista y vuelve a emitir el evento y anuncio correspondiente.
- Al cerrar el último sensor, completa el armado si el conteo terminó.
- Si el sistema ya está armado y un evento se pierde o se combina, el watchdog detecta cualquier sensor monitoreado activo y ejecuta la misma ruta real de disparo, sirena, evento y TTS.
- La semántica cubre `binary_sensor`, cerraduras y cobertores, además de estados `opening`, `detected`, `wet`, `problem` y `unsafe`.
- La reconciliación solo observa sensores seleccionados para el modo activo y no cambia configuración, bypass ni solicitudes.

## Control de acceso y usuarios

- El cuerpo, pestañas, listas y diálogos usan la altura real del widget.
- Rueda, trackpad y gesto táctil desplazan el contenido internamente.
- En móvil se aplica `touch-action: pan-y`, inercia WebKit y espacio inferior seguro.

## Respaldo y restauración / Apoya a Argus

- Ambos widgets centran el contenido horizontal y verticalmente en S, M, L y XL.
- Controles y botones se reorganizan en varias líneas, respetan el ancho disponible y no se recortan en móvil.

## Sistema de movimiento y transiciones

- Añade un módulo ESM idempotente aplicado al final de la cadena de parches visuales.
- Coordina la transición perfil → PIN → carga → dashboard sin exponer un fotograma vacío entre el selector y el panel.
- Mantiene el selector visible mientras `_load()` prepara el dashboard y solo lo oculta después de `transitionend`, con timeout de recuperación.
- Evita selecciones duplicadas mientras se valida el perfil o PIN, sin modificar autorización, permisos ni comandos WebSocket.
- Añade entradas breves para dashboard, modos, historial, usuarios, selectores, widgets, tarjetas y sensores nuevos.
- El escalonado usa límite de elementos, deduplicación y `WeakSet` para no reanimar reloj, HUD, batería o sensores existentes.
- El observador se limita al `shadowRoot`, procesa nodos añadidos y agrupa el trabajo con `requestAnimationFrame`.
- Los observers, timers, RAF y listeners propios se eliminan al desconectar el panel.
- Los cambios de fondo usan una capa ligera sin desenfocar, filtrar ni reiniciar canvas WebGL o video.
- Ligero reduce duración y cantidad de elementos; Esencial elimina movimiento decorativo.
- `prefers-reduced-motion` aplica un comportamiento equivalente o más estricto que Esencial.

## Validación requerida

1. Iniciar armado con dos sensores abiertos; cerrar uno y confirmar anuncio y reducción de bloqueadores.
2. Cerrar el último y confirmar el modo armado en Argus y Apple Home.
3. Esperar al menos dos minutos con un sensor abierto y confirmar que Apple Home conserva “Armando…”.
4. Armar completamente cada modo, abrir cada tipo de sensor seleccionado y confirmar `triggered`, sirena, evento y TTS.
5. Pulsar `Off` y confirmar `disarmed` sin heartbeat ni solicitud pendiente.
6. Probar Usuarios y los tres widgets en escritorio, móvil y tamaños S, M, L y XL.
7. Seleccionar un perfil propio sin PIN y confirmar que el selector permanece visible hasta que el dashboard esté listo.
8. Abrir un perfil con PIN, cancelar y volver a entrar; confirmar que no hay flash, bloqueo ni doble selección.
9. Cambiar entre modos, historial, usuarios, ajustes, fullscreen y configuración de widgets.
10. Cambiar fondo de panel y fondo del hub con clima WebGL, imagen y video.
11. Repetir en iPhone/Safari y Android/Chrome con perfiles Completo, Ligero y Esencial.
12. Activar “Reducir movimiento” y confirmar que no haya efectos decorativos ni parpadeos.
13. No publicar ni etiquetar v2.0.49 hasta completar prueba física y CI.
