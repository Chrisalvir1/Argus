# Argus Home Hub v2.0.48

## HomeKit y espera de sensores

- Mantiene la solicitud interna de armado y sus sensores bloqueadores hasta completar el armado o recibir `Off` manual.
- Conserva el modo solicitado y la cancelación segura introducidos en la rama de estabilidad 2.0.47.
- La validación final debe incluir una espera prolongada desde Apple Home; el estado visual transitorio depende de las características que publique el puente HomeKit de Home Assistant.

## Control de acceso y usuarios

- El contenido de Control de acceso y usuarios vuelve a desplazarse dentro del tamaño real del widget.
- El scroll funciona con rueda, trackpad y gesto táctil, tanto en escritorio como en móvil.
- Las listas, pestañas y cuadros de diálogo de usuarios tienen altura limitada, desplazamiento interno y espacio inferior seguro.

## Respaldo, restauración y soporte

- Los controles de Respaldo y restauración permanecen centrados horizontal y verticalmente en tamaños S, M, L y XL.
- Apoya a Argus se centra y adapta sus botones y textos al ancho disponible sin desbordarse.
- Los botones se reorganizan en varias líneas y ocupan un ancho táctil adecuado en móvil.

## Evidencia antes de publicar

1. Abrir Usuarios y recorrer toda la configuración con rueda y gesto táctil.
2. Repetir en un teléfono en orientación vertical y horizontal.
3. Cambiar Respaldo y restauración y Apoya a Argus entre S, M, L y XL.
4. Confirmar que encabezados, controles y botones permanecen visibles, centrados y sin recortes.
5. Probar HomeKit con un sensor abierto durante una espera prolongada y cancelar manualmente con `Off`.
