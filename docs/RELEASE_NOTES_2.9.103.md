# Argus 2.9.103

- Corregir la interacción de pulsación larga dentro del Shadow DOM de Home Assistant. Los eventos de las tarjetas se escuchan dentro del panel y el documento detecta solo los toques externos para salir de edición.
- Mantener el autoguardado al soltar cada movimiento o redimensionado, sin botones «Editar tablero» o «Listo».
- Conservar la barra móvil de Modos/SOS en una fila con acento verde reservado a Desarmado.

Validación: TypeScript sin errores, 52/52 pruebas Vitest y 162 pruebas Python aprobadas (13 omitidas); pulsación larga y salida externa comprobadas en el panel local.
