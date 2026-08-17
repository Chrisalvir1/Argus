# Argus v2.2.0 — Complete React Migration, Multi-Instance Isolation & Visual Stability

## Highlights & Architectural Changes

### Pure React 19 + TypeScript Runtime
- The interface now executes exclusively on React + TypeScript + Vite.
- Physically eliminated the legacy JavaScript/Lit panel, bridge, and runtime monkey-patches from `src/legacy`.

### Multi-Instance Isolation & Routing
- Mandatory `entry_id` propagation across all WebSocket endpoints and panel operations.
- Dynamic instance selector with persistent per-user routing in local storage.
- Dashboards return and display data strictly scoped to the active instance.

### Visual Stability & Performance
- Standardized on a clean, fixed default background; removed unneeded background/weather animated shaders.
- Static Liquid Glass surfaces eliminate expensive per-widget `backdrop-filter` rendering.
- Layout persistence with smooth corner resizing (including compact `XS` size and responsive layout recovery) adhering to `prefers-reduced-motion`.

### Typed Administration Surface
- Native React administration workspace for managing:
  - User profiles, roles, and Home Assistant account associations.
  - User PINs and presence automation rules.
  - Alarm modes, sensors, sirens, external alarm control panels, and lights.
  - Incident workflows, audit logs, and advanced security settings (guest codes, duress PIN).

### Read-Only Home Assistant Automations
- Home Assistant automations referencing active Argus entities/devices/areas are displayed in read-only mode.
- Creating or modifying automations cleanly redirects to native Home Assistant automation editors.

### Scoped SOS & Security Permissions
- Aligned permissions on both frontend and backend using `manage_sos`.
- Staged output selections validate supported entity domains and persist against the active instance.

### Semantic Activity Logging & i18n Architecture
- Historical audit events store semantic action keys and parameters, rendering dynamically localized descriptions and locale-aware timestamps.
- Foundational catalog architecture established for 12 locales (Spanish, English, French, Portuguese, Italian, Simplified Chinese, Traditional Chinese, Hindi, Arabic with RTL support, Korean, Japanese, and Ukrainian).
*(Note: Full key-by-key native translation of remaining non-Spanish catalogs continues as an ongoing initiative).*
