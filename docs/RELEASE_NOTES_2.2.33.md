# Release Notes - Argus v2.2.33

## Comprehensive 13-Language Reactive Synchronization & SOS Banner Cleanup

### Highlights
- **Backend Schema Compatibility**: Fixed Home Assistant WebSocket API (`_SAVE_UI_SCHEMA`) to accept `manual_lang`, preventing validation failures and ensuring language choices persist across sessions.
- **Initial Load Translations**: Fixed `_load()` flow to execute a complete localization refresh `_refreshLocalizedUi()` as soon as profile and configuration load, eliminating stale Spanish fallback on initial render.
- **Legacy Decorator Modernization**: Migrated `argus-ui-audit-fixes.ts` from a static 7-language array to dynamic `panel._t()` calls supporting all 13 languages (Ukrainian, Hindi, Chinese, Russian, Portuguese, French, Italian, Arabic, Korean, Japanese, etc.).
- **Dialog & Modal Localization**: Converted hardcoded text in user permission badges, permissions modal, state schedules, and profile photo picker to use translation keys.
- **Widget Controls Localization**: React widget context menus and accessibility feedback announcements now dynamically update when switching languages.
- **SOS Banner Cleanup**: Eliminated the emergency call button from `#sos-modal` and added `style="display:none"` inline to prevent flashing on startup.
