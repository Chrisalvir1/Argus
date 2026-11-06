# Argus Home Hub 3.0.5

## Correcciones de pantalla completa y accesibilidad

- En pantalla completa vertical, el núcleo mide el espacio visible restante después de la cabecera, los modos y el panel de control. Se amplía cuando hay espacio y se reduce si el contenido crece; los tamaños de los controles no dependen de esta escala.
- Se corrige la cascada de CSS que podía conservar un límite antiguo de tamaño y se usa la orientación real del viewport.
- En móviles estrechos, hogar, estado de Argus y salida se acomodan en dos filas para evitar que se tapen entre sí. En pantallas mayores se mantiene el ancho ajustado al contenido.
- Se elimina el rectángulo de fondo detrás del panel contextual.
- Las zonas del fallback SVG son mayores y seleccionables por toque o teclado. El nombre completo queda disponible para lectores y en el título accesible.
- Se conserva el fallback SVG en equipos que no pueden usar WebGL y los límites adaptativos de resolución del renderizador.

## Validación

- `npx tsc --noEmit`: aprobado.
- `npm test -- --reporter=dot`: 69 pruebas aprobadas.
- `npm run build`: aprobado.
- `git diff --check`: aprobado.
- Revisión visual en Safari/iPhone y Echo Show 5: pendiente de confirmación en los dispositivos después de actualizar.

Si el contenido supera el alto disponible, Argus conserva el acceso mediante desplazamiento y reduce el núcleo. Esta versión no garantiza que toda combinación de zoom, textos traducidos y controles quepa sin scroll.

No se modifican el backend de armado, los sensores, las zonas guardadas ni los emparejamientos.
