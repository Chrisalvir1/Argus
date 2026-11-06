# Argus 2.9.98

## Editor adaptable del tablero

- Guarda las distribuciones independientes de escritorio, tableta y móvil en los cinco breakpoints del grid, junto con su visibilidad.
- Migra los diseños anteriores una sola vez y serializa los guardados remotos para evitar que una respuesta antigua sobrescriba la más reciente.
- Conserva espacios vacíos elegidos por el usuario y persiste el resultado de movimiento/redimensionado, incluidos los widgets que el grid desplazó para resolver colisiones.
- Usa filas más pequeñas, ocho tiradores de redimensionado, controles accesibles de posición y autodesplazamiento durante el arrastre cerca de los bordes.
- Adapta los seis widgets a sus dimensiones reales con container queries, contenido flexible y scroll interno en listas largas.
- El movimiento acompaña al puntero y anima al terminar; movimiento reducido desactiva la transición.
- El núcleo de seguridad permanece intacto.

## Verificación

- Compilación de producción y suite de frontend.
- Verificación visual y de persistencia en el Home Assistant local, sin activar estados de seguridad.
