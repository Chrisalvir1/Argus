# Argus v2.0.84 — Patch Release

## Fixed

### UI Glitch: Pantalla borrosa y clicks ignorados en el Login
- **Bug de apilamiento concurrente**: Home Assistant muchas veces envía llamadas de configuración (`setConfig`) sumamente rápido (2 o 3 veces en el primer segundo de carga). Esto causaba un error donde Argus construía e insertaba 2 o 3 "pantallas de perfiles" superpuestas sin limpiar las anteriores.
- **Síntomas resueltos**: 
  - El usuario tenía que hacer clic en el perfil repetidas veces para "despejar" las múltiples pantallas de inicio de sesión invisibles pero superpuestas.
  - Después de iniciar sesión, el usuario se quejaba de que "la pantalla se queda toda borrosa (blur)". Esto ocurría porque al iniciar sesión solo se destruía la capa de arriba, dejando las demás bloqueando visualmente el dashboard.
- **Solución implementada**: Se ha agregado un cerrojo (lock) asíncrono y limpieza explícita en el método `_renderLoginScreen()` para garantizar que únicamente haya una pantalla de perfiles en el DOM en todo momento, resolviendo definitivamente el problema del filtro borroso estancado en Mac, iOS y Web.
