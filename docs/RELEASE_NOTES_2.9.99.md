# Argus 2.9.99

## Editor adaptable del tablero

- Guarda las cinco distribuciones independientes de escritorio, tableta y móvil junto con la visibilidad de los widgets.
- Migra diseños anteriores una sola vez y serializa los guardados para conservar el último layout y visibilidad.
- Conserva huecos deliberados y persiste posiciones y tamaños resueltos por la cuadrícula, incluidas las tarjetas vecinas desplazadas.
- Usa filas más pequeñas, ocho tiradores de redimensionado, controles accesibles de posición y autodesplazamiento durante el arrastre.
- Adapta los seis widgets a sus dimensiones reales con container queries y scroll interno en listas largas. Los botones de Respaldo se envuelven en pantallas angostas.
- Sigue el puntero durante el gesto y anima al soltar; movimiento reducido desactiva la transición.
- El núcleo de seguridad aprobado permanece intacto.

## Verificación

- Compilación de producción, TypeScript, 54 pruebas de frontend y 160 pruebas de Home Assistant (13 saltadas por sustituciones de arquitectura anteriores).
- Revisión visual de la interfaz móvil y del editor en Home Assistant local, sin activar modos ni SOS.
