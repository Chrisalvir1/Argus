# Argus v2.0.88 — Patch Release

## Fixed

1. **Animación de bienvenida sin parpadeos:**
   La carga del dashboard (\`_load()\`) ahora se solapa con los últimos 520ms de la animación de bienvenida. Esto elimina el desagradable destello blanco ("blank flash") que ocurría entre la destrucción del overlay y el renderizado final del UI.

2. **Foto de perfil real desde HA:**
   Si el perfil local de Argus no tiene una foto configurada, el Hero Dashboard ahora buscará de forma inteligente la entidad \`person.X\` correspondiente en Home Assistant y utilizará su \`entity_picture\` para el avatar del top bar.

3. **Navegación nativa para cambio de imagen:**
   Se eliminó el modal obsoleto de selección de fotos. Ahora, el botón en el menú de perfil dirige directamente al panel nativo de personas en HA (\`/config/person\`) utilizando SPA routing (\`pushState\`) o fallback a href.

4. **Corrección de Shadow DOM en menús:**
   El cierre de menús al hacer clic fuera (\`_closeOnClickOutside\`) ahora usa \`e.composedPath()\` para poder cruzar la frontera del Shadow DOM. Esto soluciona que el selector de idiomas y otras funciones no respondieran correctamente.

5. **Clima WebGL - Zero-size Init Fix:**
   Añadida comprobación inmediata de tamaño de canvas en \`_initWeatherWebGL\`. Si el dashboard se monta con un tamaño inicial de \`0x0\` (por ejemplo, layouts asíncronos o vistas full-screen diferidas), el canvas tomará correctamente las proporciones del padre en lugar de abortar el renderizado, restaurando los shaders de clima.
