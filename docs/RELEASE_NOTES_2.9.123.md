# Argus 2.9.123

## Mensajes de voz y estado de zonas

- Se simplifican los mensajes TTS predeterminados en español para explicar cada paso con frases directas.
- Voz de Argus muestra las zonas y sensores asignados al modo seleccionado, con el estado actual de Home Assistant: punto verde para abierto y punto rojo para cerrado.
- Los puntos se actualizan al cambiar el estado del sensor, sin volver a dibujar el editor ni perder texto personalizado sin guardar.
- Se aclara que editar un mensaje solo cambia las palabras habladas; la verificación, el conteo y el armado conservan su lógica.
- Al cerrar el último sensor, Argus anuncia: “Todas las zonas están cerradas. Argus procede a armarse en modo X.” y luego confirma el armado.
