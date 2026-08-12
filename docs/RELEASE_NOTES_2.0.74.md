# Argus v2.0.74 — Patch Release

## Fixed
- Permisos granulares por usuario estándar: los administradores pueden ahora activar/desactivar individualmente el permiso de cambio de PIN de acceso y PIN maestro para cada perfil estándar.
- Gestión de PINs y selector de idioma integrados directamente en el menú desplegable del perfil activo en la barra superior (`hero`).
- Animación de bienvenida estilo iOS Spring: la foto de perfil y el nombre vuelan suavemente desde la tarjeta de bienvenida hasta el distintivo de perfil en la barra superior al iniciar sesión.
- Selector de formato de hora (`12h`/`24h`/`auto`) persistido y restaurado correctamente desde la personalización del panel.
- Efecto Liquid Glass corregido con `blur(28px)`, saturación 180% y especificidad CSS adecuada (`.glass.liquid-glass`).
- Auto-guardado inmediato al seleccionar accesorios SOS en el modal selector.
- Shader WebGL atmosférico mejorado con aurora boreal (condiciones nocturnas frías), niebla volumétrica (fbm), lluvia con viento lateral, nieve con rotación, distorsión de calor, twinkle de estrellas y rayos de sol (god rays).
- Canvas WebGL recibe `data-wind`, `data-temp` y `data-night` para efectos contextuales precisos.
- Botones de acción de usuario compactados con íconos emoji para una interfaz más limpia.
- Widget de selector de entidades (`_openEntitySelector`) protegido contra configuración nula con operador `?.`.
