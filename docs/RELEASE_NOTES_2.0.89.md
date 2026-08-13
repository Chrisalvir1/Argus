# Argus v2.0.89 — Emergency Bug Fix Release

## Fixed
- **Mobile/Tablet Fullscreen Layout:** Resuelto problema donde el modo pantalla completa `.ios-fullscreen` dejaba espacios oscuros visibles y no cubría toda la pantalla al usar en vistas con transformaciones de Lovelace (ej. iPad/Tablets).
- **Animación del Perfil:** Corregida la animación del modal de inicio de sesión que no se encogía correctamente hacia el header superior al seleccionar el perfil.
- **Sincronización de Color RGB:** Removida la conversión forzada a HSL para luces a favor de la conversión nativa de HA Core, resolviendo un bug donde luces seleccionadas en el panel tomaban un color incorrecto en dispositivos.
- **Clima Animado Premium:** Ahora la fidelidad visual máxima ("Apple Weather") es compatible con el fondo global del Hub, además de recuperar los Canvas de WebGL estables que se habían ocultado.
