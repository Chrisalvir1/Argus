# Argus Home Hub v2.2.97

## 🛡️ Standard Permissions Audit & Localization Fixes
- **Modal Localization**: Fixed missing translation keys (`permissions_title`, `permissions_modal_desc`, `perm_view_status`, `perm_arm`, `perm_disarm`, `perm_view_history`, `perm_change_pin`, `perm_change_master_pin`) in the standard profile permissions modal.
- **Granular Permissions Control**: Added explicit options for SOS trigger (`perm_sos`), Admin tabs/settings access (`perm_admin_access`), and Admin profiles access (`perm_admin_profiles`).
- **Enforcement**: Arming, disarming, and SOS actions now strictly honor active profile permissions with real-time modal alerts for standard users.

## 🔑 Profile PIN Management & Interactive Modals
- **SIN PIN State**: When no access or master PIN is configured, displays a clear `SIN PIN` indicator alongside a `⚙️ Configurar` button.
- **Interactive Modals**: Clicking configure, change, or remove directly opens an interactive liquid-glass modal with real-time saving and validation, replacing unresponsive page scrolling.
