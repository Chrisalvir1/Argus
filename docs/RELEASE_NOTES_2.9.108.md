# Argus 2.9.108

- Separar «Voz de Argus (TTS)» en una tarjeta independiente situada antes de «Guardar Modo».
- Evitar que las tarjetas de una fila del grid interno se estiren para igualar la tarjeta más alta.
- Limitar el área desplegada de TTS y darle scroll propio; el alto disponible de Modos sigue creciendo con el widget.
- No se modificaron el núcleo de seguridad, los cristales ni sus animaciones.

Verificación: 53 pruebas Vitest, 172 pruebas Python (13 omitidas), TypeScript y build de Vite correctos. El servidor local devuelve el bootstrap y el bundle 2.9.108; la inspección visual disponible seguía usando una vista cargada antes del cambio.
