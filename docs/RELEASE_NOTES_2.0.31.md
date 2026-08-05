# Argus Home Hub v2.0.31

Esta versión corrige la identificación de luces, incorpora verificación física del destello y refina varios contenedores del panel.

## Correcciones principales
- Home Assistant es ahora la única fuente de verdad para capacidades de color.
- Dimmers y luces blancas conservan destello, pero no muestran color.
- Luces `hs`, `xy`, `rgb`, `rgbw` y `rgbww` mantienen color y destello.
- Cada salida muestra los modos exactos declarados por Home Assistant.
- Botón de prueba física que confirma si se utilizó flash nativo, efecto nativo o destello temporizado Argus.
- Sensores en píldora compacta para la vista normal; fullscreen permanece intacto.
- Automatizaciones e historial con altura acotada y desplazamiento interno.
- Control de acceso ajustado al contenido.
- Personalización estética avanzada oculta al iniciar y desplegable mediante un único control accesible.

## Validación
- Compilación Python completa.
- Suite de pruebas de regresión.
- Validación sintáctica de todos los archivos JavaScript.
- HACS y hassfest aprobados antes de preparar la versión.
- Tag `v2.0.31` y paquete publicado `argus.zip` verificados.

> Después de actualizar, reinicia Home Assistant y realiza una recarga completa del navegador sin caché.
