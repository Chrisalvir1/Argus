// @ts-nocheck
/**
 * Argus UI Polish, Theme, SOS binding and Localization fixes.
 * Weather WebGL background has been completely removed in favor of lightweight,
 * ProMotion 120Hz/60Hz accelerated React rendering with Rec.2020/Display-P3 HDR support.
 */

function installStyles(panel) {
  if (panel.shadowRoot?.getElementById('argus-v2066-style')) return;
  const s = document.createElement('style');
  s.id = 'argus-v2066-style';
  s.textContent = `
:host {
  --v2066-glass: linear-gradient(135deg, color-mix(in srgb, var(--card-background-color, #101827) 34%, transparent), color-mix(in srgb, var(--card-background-color, #101827) 15%, transparent));
  --v2066-border: color-mix(in srgb, var(--primary-text-color, #fff) 22%, transparent);
  --v2066-text: #fff;
  --v2066-muted: rgba(255, 255, 255, 0.72);
}
.glass, .liquid-glass, .panel, .entry, .argus-widget {
  background: var(--v2066-glass) !important;
  border: 1px solid var(--v2066-border) !important;
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--primary-text-color, #fff) 16%, transparent), 0 14px 38px rgba(0,0,0,.16) !important;
  backdrop-filter: blur(24px) saturate(145%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(145%) !important;
  color: var(--v2066-text) !important;
}
.hero { position: relative !important; z-index: 1000 !important; overflow: visible !important; }
.mode-section-card, .user-card, .file-card, .log-item, .personalize-section, .sos-configuration {
  background: rgba(255, 255, 255, 0.035) !important;
  border: 1px solid var(--v2066-border) !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  color: var(--v2066-text) !important;
}
.argus-widget .panel { background: transparent !important; border: none !important; box-shadow: none !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }
.panel h1, .panel h2, .panel h3, .panel h4, .panel-title, .section-title, .setting-label, .mode-section-title, .widget-title, .settings-section-title, .access-section-title {
  color: var(--v2066-text) !important;
  opacity: 1 !important;
  text-shadow: none !important;
}
.panel p, .panel small, .hint, .muted, .setting-help, .mode-sensor-none {
  color: var(--v2066-muted) !important;
  opacity: 1 !important;
}
button, input, select, textarea, .glass-control {
  color: var(--v2066-text) !important;
  -webkit-text-fill-color: var(--v2066-text) !important;
  background-color: color-mix(in srgb, var(--card-background-color, #101827) 38%, transparent) !important;
  border-color: var(--v2066-border) !important;
}
button { min-height: 44px; touch-action: manipulation; }
button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--primary-color, #2783de) 76%, white) !important;
  outline-offset: 2px !important;
}
button.primary, button#selector-accept {
  background-color: var(--primary-color, #007aff) !important;
  background: var(--primary-color, #007aff) !important;
  color: #fff !important;
  -webkit-text-fill-color: #fff !important;
  border: 1px solid rgba(0, 122, 255, 0.2) !important;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.25) !important;
}
button.primary:hover, button#selector-accept:hover {
  background-color: #0062cc !important;
  background: #0062cc !important;
}
select option { background-color: #101827 !important; color: #f7f9ff !important; -webkit-text-fill-color: #f7f9ff !important; }
.user-badge {
  display: inline-block !important;
  padding: 4px 10px !important;
  border-radius: 6px !important;
  font-size: 10px !important;
  font-weight: 800 !important;
  letter-spacing: .04em !important;
  text-transform: uppercase !important;
  background: rgba(142, 142, 147, 0.2) !important;
  color: #d1d1d6 !important;
  border: 1px solid rgba(142, 142, 147, 0.35) !important;
}
.user-badge.admin { background: rgba(255, 159, 10, 0.2) !important; color: #ffca7a !important; border: 1px solid rgba(255, 159, 10, 0.35) !important; }
.user-badge[style*="background:#4a148c"] { background: rgba(147, 112, 219, 0.22) !important; color: #dcd0ff !important; border: 1px solid rgba(147, 112, 219, 0.4) !important; }
.user-badge[style*="color:#007aff"] { background: rgba(0, 122, 255, 0.2) !important; color: #9bc5ff !important; border: 1px solid rgba(0, 122, 255, 0.35) !important; }
.user-badge[style*="color:#43a047"] { background: rgba(48, 209, 88, 0.2) !important; color: #a4f6be !important; border: 1px solid rgba(48, 209, 88, 0.35) !important; }
#hero-profile-container { display: flex; align-items: center; justify-content: center; margin-inline: 14px; }
@media(max-width: 750px) { #hero-profile-container { margin: 8px 0 4px 0; } }
.hero-profile-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px 5px 7px;
  border-radius: 999px;
  background: var(--v2066-glass);
  border: 1px solid var(--v2066-border);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.2, 1, 0.2, 1) !important;
}
.hero-profile-pill:hover { transform: translateY(-1px) !important; }
.hero-profile-pill:active { transform: scale(0.96) !important; }
.hero-profile-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  width: 280px;
  border-radius: 20px;
  padding: 16px;
  z-index: 100000;
  display: none;
  flex-direction: column;
  gap: 12px;
  transform-origin: top right;
  animation: iosPopIn 0.25s cubic-bezier(0.2, 1, 0.2, 1) both;
  backdrop-filter: blur(30px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
}
:host([argus-dark-mode="true"]) .hero-profile-dropdown {
  background: rgba(20, 26, 38, 0.94) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 48px rgba(0, 0, 0, 0.5) !important;
  color: #f1f5f9 !important;
}
.hero-profile-dropdown .user-badge.admin { background: #ffb300 !important; color: #000 !important; font-weight: 800 !important; border: none !important; }
.hero-profile-dropdown .user-badge:not(.admin) { background: rgba(255, 255, 255, 0.15) !important; color: var(--v2066-text) !important; font-weight: 800 !important; }
.hero-profile-dropdown label, .hero-profile-dropdown span:not(.user-badge) { color: inherit !important; }
.personalize-section { padding: 14px 16px !important; gap: 12px !important; }
.personalize-grid { gap: 10px 14px !important; }
.personalize-field { margin-bottom: 6px !important; }
.personalize-section button, .sos-configuration button { min-height: 32px !important; height: 32px !important; padding: 4px 12px !important; border-radius: 10px !important; font-size: 11px !important; font-weight: 800 !important; }
.personalize-section select, .personalize-section input, .personalize-section .glass-control { padding: 6px 10px !important; border-radius: 10px !important; font-size: 12.5px !important; min-height: 32px !important; height: 32px !important; }
.personalize-section input[type="file"] { height: auto !important; min-height: 0 !important; padding: 0 !important; }
@keyframes iosPopIn { from { transform: scale(0.9) translateY(-10px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
@keyframes springBounceIn { 0% { transform: scale(0.85); opacity: 0; } 50% { transform: scale(1.02); opacity: 0.8; } 75% { transform: scale(0.98); opacity: 0.95; } 100% { transform: scale(1); opacity: 1; } }
@keyframes argusWelcomeFly { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.6); } 30% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); } 60% { opacity: 1; transform: translate(-50%, -50%) scale(0.98); } 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
`;
  panel.shadowRoot?.appendChild(s);
}

function bindLanguageSelector(panel) {
  const root = panel.shadowRoot;
  if (!root || root.__argusLangSelectorBound) return;
  root.__argusLangSelectorBound = true;
  root.addEventListener('change', event => {
    const target = event.target;
    if (!target) return;
    const isLangSelect = target.matches(
      '#hero-lang-select, select[data-lang], .lang-selector, [name="language"], [id*="lang"]'
    ) || (target.tagName === 'SELECT' && target.closest?.('.hero-profile-dropdown'));
    if (!isLangSelect) return;
    const newLang = target.value || null;
    panel._manualLang = newLang;
    const entry_id = panel._dashboard?.entry_id || panel._dashboard?.entries?.[0]?.entry_id;
    panel._send?.('argus/save_ui', {
      ...(entry_id ? { entry_id } : {}),
      manual_lang: newLang
    }).catch(err => console.error('Argus lang save failed', err));
    panel._refreshLocalizedUi?.();
    panel._applyTranslations?.();
    panel._renderEntries?.();
  }, true);
}

function openPanicSelector(panel) {
  panel._selectorTarget = 'panic';
  panel._selected = Array.isArray(panel._panicOutputs) ? [...panel._panicOutputs] : [];
  if (typeof panel._openModal === 'function') { panel._openModal('panic'); return true; }
  if (typeof panel._openSelector === 'function') { panel._openSelector('panic'); return true; }
  if (typeof panel._openEntitySelector === 'function') { panel._openEntitySelector('panic'); return true; }
  return false;
}

function bindSos(panel) {
  const root = panel.shadowRoot;
  if (!root || root.__argusV2066SosBound) return;
  root.__argusV2066SosBound = true;
  root.addEventListener('click', event => {
    const button = event.target?.closest?.('button');
    if (!button) return;
    const label = `${button.textContent || ''} ${button.getAttribute('aria-label') || ''} ${button.title || ''}`.toLowerCase();
    const selector = button.matches('[data-select-sos-output],[data-action="select-panic-outputs"],#select-sos-outputs,#btn-select-sos-outputs') || (/seleccionar|select|añadir|add/.test(label) && /luces|lights|sirenas|sirens|scripts|acciones sos|sos actions/.test(label));
    if (selector) queueMicrotask(() => {
      if (!root.querySelector('.modal.open,.ios-confirm-backdrop.open,[role="dialog"][open]')) openPanicSelector(panel);
    });
    if (button.matches('[data-remove-sos-output]')) queueMicrotask(async () => {
      const outputs = [...new Set(panel._panicOutputs || [])];
      const settings = { ...(panel._panicOutputSettings || {}) };
      Object.keys(settings).forEach(id => {
        if (!outputs.includes(id)) delete settings[id];
      });
      const entry_id = panel._dashboard?.entry_id || panel._dashboard?.entries?.[0]?.entry_id;
      try {
        await panel._send?.('argus/save_panic_output_profile', { ...(entry_id ? { entry_id } : {}), outputs, settings });
      } catch (error) {
        console.error('Argus SOS remove failed', error);
      }
    });
  }, true);
}

export function applyV2066Webgl2AndUi(C) {
  if (!C || C.__argusV2066Webgl2AndUi) return;
  C.__argusV2066Webgl2AndUi = true;
  const p = C.prototype;
  const connected = p.connectedCallback;
  const render = p._renderEntries;

  p.connectedCallback = function() {
    installStyles(this);
    const value = connected?.call(this);
    bindSos(this);
    bindLanguageSelector(this);
    const savedLang = this._ui?.manual_lang || this._dashboard?.ui?.manual_lang;
    if (savedLang && !this._manualLang) this._manualLang = savedLang;
    return value;
  };

  p._renderEntries = function() {
    const value = render?.call(this);
    installStyles(this);
    bindSos(this);
    bindLanguageSelector(this);
    return value;
  };

  p._renderAtmosphere = function() {
    return '';
  };

  p._initWeatherWebGL = function() {};

  const origHass = Object.getOwnPropertyDescriptor(p, 'hass');
  Object.defineProperty(p, 'hass', {
    set(hass) {
      if (origHass?.set) origHass.set.call(this, hass);
      installStyles(this);
    },
    get() {
      return origHass?.get ? origHass.get.call(this) : this._hass;
    }
  });
}
