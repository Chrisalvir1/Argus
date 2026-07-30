# Notas de la Versión 1.9.0 - Actualización de Seguridad Crítica

## Cambios de Seguridad
- **Autorización de Timeline Forense:** La visualización del historial y timeline forense ahora exige los permisos de sesión adecuados y el permiso específico `view_history`, garantizando que solo usuarios autorizados accedan a la bitácora de eventos.
- **Gestión de PINs en Onboarding:** Los PINs ahora se manejan con seguridad estricta. El PIN de acceso se hashea en origen y el PIN maestro se configura en las opciones del componente de alarma, logrando que el PIN del panel frontend sea completamente independiente del de la alarma de Home Assistant.
- **Privacidad Zero-Leak:** Se ha eliminado por completo el registro desde el cliente (`write_log` y `audit-client.js`) garantizando que los eventos sensibles no puedan ser fabricados desde el frontend y asegurando cero fugas de PINs y hashes al navegador.
- **Autorización Estricta de Admin:** Las llamadas a la API que exponen los usuarios y las personas de Home Assistant (`get_ha_users` y `get_ha_persons`) ahora requieren rigurosamente de una sesión activa de administrador de Argus y permisos de administrador de Home Assistant.

## Mejoras Funcionales
- **SOS/Pánico Corregido:** Se resolvieron los errores (ReferenceError y bugs) relacionados con la activación de SOS, asegurando su funcionamiento correcto.
- **PresenceManager Optimizado:** El administrador de presencia ha sido reescrito para responder de forma reactiva a los cambios de las entidades configuradas de forma sincrónica, cancelando tareas programadas si los eventos posteriores cambian (por ejemplo, si un usuario regresa a casa antes de que el armado se ejecute).
