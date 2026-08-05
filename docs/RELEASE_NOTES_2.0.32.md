# Argus Home Hub v2.0.32

Versión de seguridad para el manejo de bombillos, destellos y restauración de color.

## Destello seguro
- Se eliminó el ciclo repetido `turn_off`/`turn_on`.
- Flash o efectos nativos se utilizan únicamente cuando Home Assistant los declara.
- Luces regulables sin flash nativo pulsan el brillo sin apagarse.
- Luces `onoff` y plugs permanecen encendidos de forma fija.

## Restauración de estado
- Antes de una alarma se guarda estado, brillo, color, temperatura de blanco y efecto.
- Al finalizar se restauran exactamente los valores anteriores.
- Las luces originalmente apagadas recuperan su color previo, o blanco neutro cuando Home Assistant no conserva ese valor, antes de apagarse.
- La prueba de destello utiliza el mismo proceso seguro de captura y restauración.

## Validación
- Compilación Python completa.
- Suite de pruebas de regresión actualizada.
- Validación sintáctica de todos los archivos JavaScript.
- HACS y hassfest aprobados antes de preparar la versión.

> Después de actualizar, reinicia Home Assistant y realiza una recarga completa del navegador sin caché.
