# Argus 2.9.122

## Avisos TTS del armado en espera

- Los textos del modo seleccionado se explican como parte del armado en espera. Argus usa las zonas asignadas a ese modo y recalcula zonas y sensores pendientes en cada cambio.
- Cuando se cierra un sensor, anuncia el área y nombre del sensor cerrado y el nuevo recuento, junto con los sensores que siguen por cerrar.
- Al llegar a cero, dice: “Todas las zonas están cerradas. Argus procede a armarse en modo X.” Después confirma el armado.
- El TTS de alarma disparada incluye las áreas y sensores abiertos y se repite cada 30 segundos mientras sigan abiertos. El cierre se anuncia, pero la alarma y sirenas permanecen activas hasta el desarmado manual.
- Los mensajes predeterminados continúan siendo editables desde Voz de Argus; se añadió un texto configurable para el cierre de sensor durante una alarma.

La política de armado solo espera cuando la casilla “Modo de armado en espera hasta cerrar sensores” está activada para ese modo.
