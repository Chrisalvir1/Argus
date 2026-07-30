# Argus v1.9.1

## Bugfixes & Security Enhancements
- **Kiosk & Screen Protection**: Mode kiosco con fuente de verdad `_kioskLocked`. Salir de pantalla completa nativa (`Escape`) mantiene la vista restringida y ofrece botón de desbloqueo mediante PIN Maestro. Validación estricta en backend `argus/verify_master_pin_for_screen_unlock` con rate limiting e identificación exacta por config entry ID (`entry_id`).
- **First Run & Onboarding**: Separación clara de PIN de acceso y PIN maestro opcionales. Restricción backend para requerir administradores reales de Home Assistant.
- **Security & Authorization**: Selección de perfil requerida en cada apertura del panel. El PIN maestro no crea sesiones de Argus.
- **Home Assistant Roles**: Obtención dinámica del rol administrativo de Home Assistant mediante el backend `hass.auth.async_get_users()`.
- **Data Integrity**: Validación de unicidad de `ha_user_id` en storage canónico y preservación implícita de `panic_outputs` en SOS.
- **UI & Cosmetic**: Enlace GitHub corregido a `Chrisalvir1/Argus`.
