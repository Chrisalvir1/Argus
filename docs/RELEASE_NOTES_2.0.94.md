# Argus v2.0.94 — Patch Release

## Fixed
- **Flasheo de Interfaz:** Resuelto el parpadeo inicial en la carga del dashboard (`#widget-grid`) que mostraba widgets legacy antes de que React se montara.
- **Animaciones Restauradas:** Eliminada la restricción global de `animation: none` que rompía la animación del avatar volador al cambiar de perfil.
- **Top Bar Spring Animation:** Restaurado el efecto "spring" usando `cubic-bezier` al cargar la barra superior (`.hero`).
- **Clima SVG Animado:** La cabecera (top bar) ahora inyecta correctamente los SVGs animados (ej. `env_day.svg`, `env_rain.svg`) dependiendo del estado de la entidad meteorológica configurada.
- **Tipografía Global:** Se forzó la tipografía `Inter` en todo el componente Shadow DOM para evitar sangrado de estilos genéricos de Home Assistant.
- **Selector de Idiomas:** Solucionada la persistencia del idioma. Ahora se expone desde el backend en el payload de `login_bootstrap` y se asegura su aplicación inmediata.
