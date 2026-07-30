# Argus v1.9.2

## Features & Bugfixes

- **Redacción de Credenciales en Dashboard por Allowlist Estricta**: El backend sanitiza `current_profile` en `ws_argus_dashboard` mediante una lista blanca estricta (`id`, `name`, `role`, `enabled`, `permissions`, `shared_kiosk_profile`), filtrando cualquier secreto, hash o campo desconocido antes de enviarlo al cliente.
- **Selector de Perfiles Rediseñado (`_renderLoginScreen`)**:
  - Logo oficial Argus (`argus_logo.png`), título "Argus Home Hub" y subtítulos traducidos.
  - Tarjetas de perfil accesibles con indicación de PIN y rol local traducido.
  - Transición suave de entrada/salida (respetando `prefers-reduced-motion`).
- **Filtrado Seguro y Creación de Perfiles desde Cuentas HA**:
  - Uso de `getattr` para excluir cuentas `system_generated` e inactivas manteniendo compatibilidad con versiones antiguas de Home Assistant.
  - Sección traducida "Cuentas de Home Assistant sin perfil Argus" que permite al administrador crear un perfil Argus con un solo clic, prellenando nombre e `ha_user_id` con rol estándar por defecto y permisos mínimos explícitos.
  - Si una vinculación legada apunta a un ID técnico ya no presente, se muestra como "Vinculación no disponible" en la interfaz sin eliminar automáticamente el perfil.
- **Seguridad de Administración & Borrado**:
  - Protección en backend que impide eliminar o desarmar de permisos al último administrador Argus vinculado a un admin real de Home Assistant.
  - Botón de eliminación en rojo peligro (`btn-danger`) con icono 🗑️ y modal de confirmación traducido.
- **Barra Superior**:
  - Indicador con avatar/iniciales, nombre y badge del rol Argus activo traducido ("Administrador de Argus" / "Usuario estándar").
- **Internacionalización Completa (7 idiomas)**:
  - Soporte nativo para `es`, `en`, `fr`, `pt`, `it`, `zh` y `ru`.
  - Detección automática desde `hass.language` -> `hass.locale?.language` -> `navigator.language` normalizando dialectos (ej. `es-ES` -> `es`).
  - Auditoría completa del frontend eliminando textos visibles hardcodeados.
- **Historial de Actividad Localizado**:
  - Traducción dinámica en frontend de acciones estructuradas y visualización limpia de registros legados.
- **Formato de Hora Configurable (`clock_format`)**:
  - Preferencia guardada en UI (`auto`, `12h`, `24h`) respetada por el reloj principal y el historial de actividad usando `Intl.DateTimeFormat` con la zona horaria configurada en HA (`hass.config.time_zone`). Validada y normalizada en backend/storage.
