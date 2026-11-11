# Argus Home Hub 3.7.8

11 de noviembre de 2026

El panel directo de Argus oculta el encabezado redundante “Panel de Seguridad Argus” y elimina el borde, fondo, sombra y relleno del contenedor exterior de la consola. La consola aprovecha el ancho disponible y presenta su propio marco, igual que Argus Card.

Se conserva la navegación y el host de Home Assistant. El cambio solo aplica al panel directo normal: Argus Card compacto y completo conserva sus estilos, y pantalla completa conserva sus reglas de tamaño.

## Verificación

- 77 pruebas frontend.
- TypeScript 7.0.2 y build de producción con Node.js 26.13.0.
- Chromium local a 393 × 852, 768 × 1024 y 1440 × 900: título oculto, shell transparente sin padding y consola a ancho completo. Se comprobó además que el panel completo de Argus Card conserva su shell y que fullscreen mantiene `100dvh`.
- No se ha probado una instancia física de Home Assistant ni Safari/iPhone. La vista real puede añadir los márgenes propios del tema/panel de Home Assistant.
