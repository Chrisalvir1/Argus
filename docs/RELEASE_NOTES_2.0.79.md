# Argus v2.0.79 — Patch Release

## Fixed
- **Triple tap en móvil**: Añadido `touch-action: manipulation` a los items del selector de perfiles para eliminar el delay de 300ms en iOS y Android.
- **Layout móvil portrait**: Grid de perfiles cambia a una sola columna en pantallas menores de 480px en orientación vertical.
- **Nombre en bienvenida**: La pantalla de bienvenida usa `display_name` de Argus con fallback al nombre de HA — prioridad correcta.
- **Foto de perfil unificada**: El selector de perfiles y el badge del top bar usan la misma fuente de verdad (`u.picture` del bootstrap, que ya combina foto de Argus + persona HA).
- **Animación de bienvenida**: El avatar vuela hacia el top bar **derecho** (posición correcta) en lugar de a la izquierda.

## Changed
- Eliminado el overlay de bienvenida antiguo (`_showProfileWelcome` / `_triggerWelcomeSpringAnimation`). La animación tvOS de `_runProfileWelcomeAnimation` es la única pantalla de bienvenida.

## Added
- **Modal de cambio de imagen de perfil**: Al tocar "📸 Cambiar imagen" en el dropdown del perfil aparece un modal con las fotos de las entidades `person.*` de Home Assistant.
- **Integración con personas de HA**: El modal llama a `argus/get_ha_persons` y lee `entity_picture` de los estados de HA para mostrar las fotos disponibles.
