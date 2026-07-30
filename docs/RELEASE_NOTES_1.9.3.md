# Argus v1.9.3 — Sincronización automática de perfiles con Home Assistant

## Resumen

Parche de sincronización y UX: Argus ahora crea y mantiene perfiles automáticamente a partir de las cuentas humanas activas de Home Assistant, con reglas estrictas de preservación para perfiles manuales y una interfaz de selección de perfil mejorada con seguridad reforzada.

---

## Novedades

### Sincronización automática de perfiles con HA

- Al abrir el panel (`argus/login_bootstrap`), Argus sincroniza atómicamente todos los perfiles con las cuentas humanas activas de Home Assistant.
- **Cuentas incluidas:** usuarios humanos activos (admin y estándar).
- **Cuentas excluidas:** `system_generated` (homeassistant, supervisor, etc.) e inactivas.
- Los perfiles creados automáticamente incluyen el campo `managed_by_ha_sync: true` y permisos explícitos según el rol.
- Si una cuenta HA desaparece o queda inactiva, su perfil se marca `enabled: false` con `sync_disabled: true` — nunca se borra.
- Si la cuenta HA vuelve a estar activa, el perfil sincronizado se reactiva automáticamente.
- Los perfiles **deshabilitados manualmente** (sin `sync_disabled`) nunca se reactivan automáticamente.
- La sincronización es **idempotente**: llamadas repetidas no crean duplicados.

### Seguridad del selector de perfiles

- El selector muestra **todos los perfiles humanos activos** (no solo el propio).
- El perfil propio se distingue visualmente con un borde azul y un badge `"Este es tu perfil"`.
- Selección directa (sin PIN) solo disponible para el propio perfil (`ha_user_id` coincidente).
- Perfiles ajenos con PIN de acceso configurado → prompt de PIN.
- Perfiles ajenos **sin** PIN de acceso → rechazo inmediato en cliente con mensaje claro (el backend también rechaza).
- Perfil compartido de quiosco (`shared_kiosk_profile: true`) sigue siendo seleccionable por cualquiera.

### Preservación de perfiles manuales

- Los perfiles **sin** `managed_by_ha_sync` (creados manualmente) nunca son modificados ni deshabilitados por el sync.
- Los perfiles **con** `managed_by_ha_sync: true` tampoco tienen nombre, rol, permisos, `pin` ni `access_pin_hash` modificados. Solo `enabled`/`sync_disabled` cambian.

---

## Permisos por defecto en perfiles auto-creados

| Campo           | Admin HA | Estándar HA |
|-----------------|----------|-------------|
| `view_status`   | ✓        | ✓           |
| `view_history`  | ✓        | ✗           |
| `arm`           | ✓        | ✗           |
| `disarm`        | ✓        | ✗           |
| `sos`           | ✓        | ✗           |

Los perfiles auto-creados no contienen `pin` ni `access_pin_hash`.

---

## Cambios técnicos

### `custom_components/argus/storage.py`
- Añadida función `async_sync_ha_profiles(hass, entry_id)`.
- Añadida función auxiliar `_default_permissions_for_role(role)`.
- Añadido `import logging` y `_LOGGER`.

### `custom_components/argus/websocket_api.py`
- `ws_argus_login_bootstrap` llama a `async_sync_ha_profiles` antes de construir la lista de perfiles.
- Los perfiles públicos incluyen `is_own_profile: bool` (sin exponer `ha_user_id` crudo).
- Importado `async_sync_ha_profiles` desde `storage`.

### `custom_components/argus/www/argus-panel.js`
- `_renderLoginScreen` reescrito con diferenciación visual del perfil propio, rechazo cliente de perfiles ajenos sin PIN, y prompt de PIN mejorado con Enter key support.
- Nuevas clases CSS: `.user-card-own`, `.profile-own-badge`, `.user-role-label`, `@keyframes shake`.
- 5 nuevas claves i18n en los 7 idiomas: `profile_is_yours`, `profile_needs_pin`, `profile_no_pin_access`, `ha_role_admin`, `ha_role_standard`.
- Versión del comentario de cabecera actualizada a `v1.9.3`.

### `custom_components/argus/www/argus-bootstrap.js`
- Versión de cache-busting actualizada a `1.9.3`.

### `custom_components/argus/www/argus-card.js`
- `ARGUS_CARD_VERSION` actualizado a `1.9.3`.

### `custom_components/argus/manifest.json`
- `version` → `1.9.3`.

### `custom_components/argus/const.py`
- `VERSION` → `1.9.3` (usado por `panel.py` para cache-busting de URLs del panel).

---

## Tests

- Añadido `tests/test_v193_sync.py` con 16 casos de prueba:
  - Creación de perfil para admin HA y estándar HA.
  - Idempotencia (sin duplicados en llamada doble).
  - Ausencia garantizada de `pin` y `access_pin_hash` en perfiles auto-creados.
  - Flag `managed_by_ha_sync: true` en perfiles auto-creados.
  - Deshabilitación automática al desaparecer cuenta HA.
  - Reactivación al volver cuenta HA.
  - Perfil deshabilitado manualmente → nunca reactivado.
  - Perfil deshabilitado manualmente → sin duplicado creado.
  - Perfil existente → nombre, rol, permisos y hash preservados.
  - Usuarios `system_generated` excluidos.
  - `first_run: true` → sync no-op.
  - Permisos por defecto correctos para estándar y admin.
  - Contratos de frontend: versión, claves i18n en 7 idiomas, CSS, seguridad.
  - Versión en `manifest.json` y `argus-bootstrap.js`.

---

## Verificación

```bash
python3 -m compileall -q custom_components/argus
python3 -m unittest discover -s tests -v
for file in custom_components/argus/www/*.js; do node --check "$file"; done
git diff --check
```

---

## Notas de actualización

1. Crea un respaldo completo antes de actualizar.
2. Actualiza desde HACS o copiando el contenido de `argus.zip` a `custom_components/argus`.
3. Reinicia Home Assistant.
4. Recarga el navegador sin caché (Ctrl+Shift+R / Cmd+Shift+R).
5. Verifica que aparezcan todos los perfiles humanos en el selector.
6. Comprueba que tu propio perfil tenga el badge azul y que los perfiles ajenos sin PIN muestren el mensaje de rechazo.
