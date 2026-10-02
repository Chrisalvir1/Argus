# Argus Home Hub v2.5.7 — Unobstructed Fullscreen & Symmetrical Sensor Grid

**Release date:** October 2, 2026  
**Previous release:** [v2.5.6](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.6)

This release addresses UI layout collisions and symmetry in the Security Console by relocating the fullscreen button to the top-right header and establishing a neat, centered grid for the sensor list.

## Fixes & Improvements

- **Unobstructed Fullscreen Action:** Moved the fullscreen button (`⛶`) from the bottom-right corner of the card up into the top-right console header (`console-hud-right`) beside the system status badge. This ensures sensor chips at the end of the list never collide with or obstruct the fullscreen button.
- **Symmetrical 3-Column Card Layout:** Harmonized Column 1 (`liquid-stack` mode buttons), Column 2 (`entry-icon` shield), and Column 3 (`console-sensors`) so all three columns are centered in their respective tracks (`justify-self: center`, `margin: 0 auto`).
- **Clean Left-Aligned Sensors in Centered Column:** Configured the sensor container with `align-items: flex-start` inside its centered column. All lock icons and sensor names now begin on the exact same vertical line, removing the ragged right-aligned staircase appearance while keeping the tight 8px gap between name and status without any void gap.

## Actualización

Actualización de orden visual y eliminación de obstrucción del botón de pantalla completa:

- **Botón de Pantalla Completa sin obstrucciones:** Se reubicó el botón de pantalla completa (`⛶`) de la esquina inferior derecha a la barra superior derecha de la consola (`console-hud-right`), junto a la pastilla de estado. Ya no choca ni queda tapado por el último sensor de la lista.
- **Cuadrícula y Sensores bien alineados y centrados:**
  - El bloque de sensores ahora está centrado en su columna (columna 3), manteniendo simetría total con los botones de modo de la columna 1 y el escudo central de la columna 2.
  - Los sensores dentro de la lista quedan alineados rectos por la izquierda: todos los candados y nombres empiezan en la misma vertical en vez de estar desordenados como escalera en la pared derecha.
  - Se mantiene la separación compacta (8px) entre el nombre del sensor y su estado, sin espacios vacíos.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
