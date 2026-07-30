# Argus v1.9.4 — Reparación del acceso, onboarding y panel

Este parche corrige el flujo que podía mostrar el dashboard vacío en lugar del
selector de perfiles o de la configuración inicial.

## Correcciones

- Cada nueva apertura del panel limpia el perfil local anterior y vuelve a
  mostrar el selector de perfiles.
- Las pantallas de primera configuración y selección de perfil son estados
  válidos y ya no disparan bucles de reconexión WebSocket.
- Si Argus está instalado pero todavía no tiene una instancia configurada, se
  muestra una explicación clara con acceso directo a Integraciones.
- El panel no usa el almacenamiento global heredado cuando no existe una
  `config_entry`.
- Después de seleccionar el perfil se muestra una transición breve
  “Bienvenido/a, Nombre”.
- El perfil activo se asigna correctamente al indicador de la barra superior.
- Los usuarios estándar de Home Assistant pueden abrir el panel; las acciones
  sensibles continúan protegidas por permisos Argus en el backend.
- Cache-busting y metadatos actualizados a `1.9.4`.

## Validación

- Suite completa de pruebas Python.
- Compilación de módulos Python.
- Validación sintáctica de todos los archivos JavaScript.
- Verificación de formato con `git diff --check`.
