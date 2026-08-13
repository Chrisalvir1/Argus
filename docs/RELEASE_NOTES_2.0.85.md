# Argus v2.0.85 — Patch Release

## Fixed

### Blur permanente en dashboard — Causa raíz eliminada

El bug del "dashboard bloqueado en modo blur" que afectaba Mac Safari, iOS y Chrome ha sido resuelto de raíz:

**Causa real identificada:** `backdrop-filter: blur()` en elementos `position:fixed` dentro de un Shadow DOM crea una capa separada en el compositor gráfico (compositor layer) del navegador. Cuando el elemento se destruye con `.remove()`, WebKit/Blink puede dejar esa capa del compositor como "huérfana" — visible y pintada permanentemente sobre el resto del contenido, aunque el elemento del DOM ya no exista.

**Solución implementada:**
1. **Eliminado `backdrop-filter`** de `.argus-profile-overlay` y `.argus-welcome-screen`. El fondo oscuro (`rgba(0,0,0,0.85+)`) logra el mismo efecto visual sin crear una capa del compositor separada.
2. **Nuevo método `_nukeAllLoginOverlays()`**: Destrucción forzada e inmediata de todos los overlays de login/perfil/bienvenida. Se invoca en 3 puntos clave:
   - Al inicio de `_runProfileWelcomeAnimation()` — limpia overlays previos antes de crear el nuevo.
   - Al final de la animación de bienvenida — garantiza destrucción completa.
   - Al inicio de `_load()` en el camino hacia el dashboard — última línea de defensa.
