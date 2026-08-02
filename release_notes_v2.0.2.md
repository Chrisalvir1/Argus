# 🚑 Argus v2.0.2 Hotfix: Restore Panel Boot & Webcomponent Registration Sync

**Hotfix Release v2.0.2** resolves an issue where updating to v2.0.1 could cause the Argus frontend panel to load as a blank screen.

## 🐛 Bug Fix
- **Webcomponent Registration Synchronization:** Home Assistant registers custom panels dynamically using the version string (`argus-panel-v202`). This release syncs the versioned custom element across `panel.py`, `argus-bootstrap.js`, and `argus-panel.js` (`customElements.define` and `customElements.get`), ensuring the panel boots cleanly and renders reliably across all browsers.

## 🔒 Automated Verification
- Enhanced unit tests (`test_v194_panel_flow.py`) to dynamically validate alignment between backend version constants, panel registration, bootstrap fetch, and webcomponent definition.

*All features from v2.0.1 (Premium Onboarding, Backup Restore, Liquid Glass UI, and WebGL Weather Engine) remain fully included and active.*
