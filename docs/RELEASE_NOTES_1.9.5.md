# Argus v1.9.5 — Reparación de conexión real con Home Assistant

Este parche corrige la causa que dejaba visible la plantilla vacía del panel
sin onboarding, selector de perfiles ni mensaje de error.

## Causa raíz

El frontend abría un segundo WebSocket e intentaba autenticarlo leyendo
`hass.auth.data.access_token`, una propiedad interna que Home Assistant ya no
expone de forma fiable. Cuando la conexión fallaba, el reloj del panel seguía
renderizando la plantilla y producía el falso mensaje “No hay instancias”.

## Correcciones

- Todas las llamadas usan ahora `hass.callWS`, la conexión autenticada oficial
  que Home Assistant entrega al panel.
- El dashboard no se renderiza hasta que la inicialización termina.
- Si el backend no responde, se muestra una pantalla de error con el motivo y
  un botón para reintentar.
- El nombre del Web Component incluye la versión para impedir que Safari
  reutilice una definición antigua ya registrada.
- Los recursos estáticos dejan de enviarse con caché persistente.
- `hacs.json` declara explícitamente `argus.zip` como archivo de release.
- Se conservan la pantalla de configuración pendiente, onboarding, selector de
  perfiles y bienvenida introducidos en v1.9.4.
