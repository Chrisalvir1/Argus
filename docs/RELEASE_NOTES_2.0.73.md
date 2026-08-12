# Argus v2.0.73 — Patch Release

## Added
- **Permisos de Gestión de PINs para Usuarios Estándar:** Agregamos una matriz de permisos avanzados (`🛡️ Permisos`) para usuarios estándar administrados desde el widget principal de Control de Acceso. Ahora los administradores pueden otorgar o revocar de forma independiente el permiso para cambiar el **PIN de acceso de usuario** y el **PIN maestro**.
- **Redirección de Gestión de Pines:** Al hacer clic en "Cambiar" o "Quitar" PINs desde el perfil activo de la barra superior, la página realiza un desplazamiento suave (`scrollIntoView`) hasta el widget de "Control de Acceso y Usuarios", aplicando un destello de luz y enfocando los campos de edición respectivos.
- **Seguridad en Eliminación de Usuarios:** Al borrar un usuario, se eliminan inmediatamente todas las credenciales de PIN del servidor y se invalidan las sesiones activas en el gestor de sesiones de Home Assistant, impidiendo cualquier reingreso con credenciales antiguas.

## Fixed
- **Ocultamiento de Gestión de Pines en Estándar:** Si un usuario estándar no cuenta con los permisos requeridos, la sección de "Gestión de Pines" del menú desplegable del perfil se oculta por completo automáticamente.
- **Botones de Usuarios Compactos:** Reemplazamos los textos largos de los botones de la tarjeta de usuario con íconos compactos y elegantes (`✏️`, `🔑`, `🛡️`, `⭐`, `🗑️`) para una presentación súper limpia y estructurada.
