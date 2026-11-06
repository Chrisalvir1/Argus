# Argus 2.9.100

## Historial móvil y editor adaptable

- El historial conserva sus filas entre actualizaciones de Home Assistant que no cambian los eventos, en lugar de reconstruirlas por cambios de sensores, hora o clima.
- Las filas del historial dejan de repetir la animación de entrada, que producía parpadeo al refrescar la vista vertical móvil.
- Se conserva el editor adaptable y el layout migrado de 2.9.99.
- El núcleo de seguridad aprobado permanece intacto.

## Verificación

- TypeScript, compilación de producción, 54 pruebas de frontend y 161 pruebas Python completadas (13 saltadas por sustituciones de arquitectura anteriores).
- Home Assistant local responde HTTP 200 y reporta la integración Argus 2.9.100; se inspeccionaron los widgets e historial renderizados sin cambiar modos ni activar SOS.
- La prevención de repintado idéntico y la regla de no animar filas repetidas quedan cubiertas por el contrato de frontend; falta una sesión de viewport estrecho para una confirmación visual específica del teléfono.
