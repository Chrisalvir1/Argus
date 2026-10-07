# Argus Home Hub v2.5.8 — Responsive Console and Reliable State Updates

**Release date:** October 7, 2026  
**Previous release:** [v2.5.7](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.7)

This release improves security-console state updates and fullscreen layout across screen sizes. It also updates frontend dependencies and resolves a high-severity source-map-js advisory.

## Changes

- Refresh alarm UI when entity attributes or Home Assistant connectivity change.
- Show all alarm instances in the full panel, respect the selected instance, and remove fuzzy sensor matching.
- Keep hidden dashboard widgets recoverable and avoid reloading the entire dashboard after arm/disarm actions.
- Prevent overlapping Walk Test requests and clean panel timers when disconnected.
- Adapt fullscreen to dynamic viewport sizes, safe areas, short displays and touch targets; route controls to the selected alarm.
- Update nanoid 6.0.2, @vitejs/plugin-react 6.1.2, Vite 8.3.3, react-grid-layout 2.3.0 and source-map-js 1.2.2.

## Cambios

- Refresco de alarma cuando cambian atributos o conectividad de Home Assistant.
- Mostrar todas las alarmas del panel, respetar la instancia elegida y eliminar búsquedas aproximadas de sensores.
- Recuperar widgets ocultos y evitar recargar el panel completo al armar o desarmar.
- Evitar consultas Walk Test simultáneas y limpiar temporizadores al desconectar.
- Adaptar pantalla completa a distintas dimensiones, áreas seguras, pantallas cortas y controles táctiles.
- Actualizar dependencias y corregir la vulnerabilidad alta reportada en source-map-js.

## Validation

Python regression tests, TypeScript check, frontend tests/build, HACS validation, hassfest and npm audit run in the release workflow. Home Assistant behavior still requires validation in a live installation.
