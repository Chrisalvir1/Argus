// @ts-nocheck
/**
 * Argus Panel Card — v2.2.3
 * Auto-discovering Lovelace card that embeds the full argus-panel-v2018 UI.
 *
 * Features:
 * - Zero YAML required: auto-detects the Argus alarm entity
 * - getStubConfig() + getConfigElement() → appears in HA card picker with NO manual config
 * - Renders the complete argus-panel-v2018 custom element (full dashboard)
 * - Fullscreen toggle button (⛶ / ✕) overlaid top-right
 * - Fully responsive: works in mobile, tablet, desktop, and kiosk fullscreen
 * - Registers itself in window.customCards so HA shows it in the card browser
 */

const ARGUS_CARD_VERSION='2.2.3';

console.info(
  `%c🛡️ ARGUS PANEL CARD %c v${ARGUS_CARD_VERSION} `,
  'color:white;background:#0a1628;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;',
  'color:#0a1628;background:#38bdf8;font-weight:700;padding:4px 8px;border-radius:0 4px 4px 0;'
);

// ── Auto-discover the first argus entity in HA states ──────────────────────
function findArgusEntity(hass) {
  if (!hass?.states) return null;
  // Prefer entities with argus-specific attributes
  const states = Object.values(hass.states);
  const argusEntity = states.find(
    e => e.entity_id?.startsWith('alarm_control_panel.') &&
         (e.attributes?.argus_version || e.attributes?.argus_entry_id || e.entity_id.includes('argus'))
  ) || states.find(e => e.entity_id?.startsWith('alarm_control_panel.'));
  return argusEntity?.entity_id || null;
}

// ── Card editor (shown in HA visual card editor, no YAML needed) ───────────
class ArgusCardEditor extends HTMLElement {
  setConfig(config) { this._config = config; }
  set hass(hass) { this._hass = hass; this._render(); }
  _render() {
    if (!this._hass) return;
    const entityId = this._config?.entity || '';
    const alarmEntities = Object.keys(this._hass.states || {})
      .filter(k => k.startsWith('alarm_control_panel.'));
    this.innerHTML = `
      <style>
        .argus-editor { padding: 16px; display: grid; gap: 12px; font-family: Inter, system-ui, sans-serif; }
        .argus-editor label { font-size: 13px; font-weight: 600; color: var(--primary-text-color); display: grid; gap: 4px; }
        .argus-editor select, .argus-editor input { padding: 9px 12px; border-radius: 10px; border: 1px solid var(--divider-color, rgba(0,0,0,.12)); background: var(--card-background-color, #fff); color: var(--primary-text-color); font-size: 14px; width: 100%; box-sizing: border-box; }
        .argus-editor .hint { font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
      </style>
      <div class="argus-editor">
        <label>
          Entidad de alarma Argus
          <select id="entity-sel">
            ${alarmEntities.map(e => `<option value="${e}" ${e === entityId ? 'selected' : ''}>${e}</option>`).join('')}
          </select>
          <span class="hint">Se detecta automáticamente — solo cambia si tienes múltiples instancias.</span>
        </label>
        <label>
          Modo de vista
          <select id="mode-sel">
            <option value="panel" ${(this._config?.mode || 'panel') === 'panel' ? 'selected' : ''}>Panel completo (recomendado)</option>
            <option value="compact" ${this._config?.mode === 'compact' ? 'selected' : ''}>Compacto (solo instancia activa)</option>
          </select>
        </label>
        <label>
          Título (opcional)
          <input id="title-input" type="text" placeholder="Argus Security" value="${this._config?.title || ''}"/>
        </label>
      </div>`;

    this.querySelector('#entity-sel').addEventListener('change', e => this._fire({ entity: e.target.value }));
    this.querySelector('#mode-sel').addEventListener('change', e => this._fire({ mode: e.target.value }));
    this.querySelector('#title-input').addEventListener('change', e => this._fire({ title: e.target.value }));
  }
  _fire(changed) {
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: { ...this._config, ...changed } },
      bubbles: true, composed: true
    }));
  }
}
customElements.define('argus-panel-card-editor', ArgusCardEditor);

// ── Main card ──────────────────────────────────────────────────────────────
class ArgusPanelCard extends HTMLElement {
  // Called by HA to auto-populate config when added from card picker
  static getStubConfig(hass) {
    const entity = findArgusEntity(hass) || 'alarm_control_panel.argus';
    return { entity, mode: 'panel', title: 'Argus Security' };
  }

  // Tells HA which element to use as the visual editor
  static getConfigElement() {
    return document.createElement('argus-panel-card-editor');
  }

  setConfig(config) {
    this._config = {
      mode: 'panel',
      title: 'Argus Security',
      ...config,
    };
    // If no entity set yet, we'll auto-detect on first hass update
    this._panelMounted = false;
    this._fullscreen = false;
    this._ensureStructure();
  }

  _ensureStructure() {
    if (this._structureReady) return;
    this._structureReady = true;
    this.style.display = 'block';

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; }
        ha-card {
          overflow: hidden;
          border-radius: 24px;
          background: #07111f;
          color: #fff;
          box-shadow: 0 20px 60px rgba(0,0,0,.38);
          position: relative;
          --ha-card-border-radius: 24px;
        }
        /* Wrapper that holds the argus-panel-v2018 element */
        .argus-panel-host {
          display: block;
          min-height: 480px;
          width: 100%;
          overflow: hidden;
        }
        /* Fullscreen mode */
        :host(.argus-fullscreen) ha-card {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9999 !important;
          border-radius: 0 !important;
          width: 100vw !important;
          height: 100dvh !important;
          max-width: 100vw !important;
          max-height: 100dvh !important;
          overflow: auto !important;
        }
        :host(.argus-fullscreen) .argus-panel-host {
          min-height: 100dvh;
          height: 100dvh;
          overflow: auto;
        }
        /* Fullscreen toggle button */
        .argus-fs-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 10000;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.20);
          background: rgba(8,16,30,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: rgba(255,255,255,0.80);
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
        }
        .argus-fs-btn:hover {
          background: rgba(20,40,70,0.92);
          transform: scale(1.08);
        }
        /* Responsive */
        @media (max-width: 600px) {
          .argus-panel-host { min-height: 360px; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      </style>
      <ha-card>
        <button class="argus-fs-btn" id="fs-btn" title="Pantalla completa" aria-label="Pantalla completa">⛶</button>
        <div class="argus-panel-host" id="panel-host"></div>
      </ha-card>`;

    this._fsBtn = shadow.getElementById('fs-btn');
    this._panelHost = shadow.getElementById('panel-host');

    this._fsBtn.addEventListener('click', () => this._toggleFullscreen());
    // ESC exits fullscreen
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this._fullscreen) this._exitFullscreen();
    });
  }

  set hass(hass) {
    this._hass = hass;

    // Auto-detect entity if not set in config
    if (!this._config.entity || this._config.entity === 'alarm_control_panel.argus') {
      const detected = findArgusEntity(hass);
      if (detected) this._config.entity = detected;
    }

    this._mountPanel();

    // Forward hass to the inner panel element
    if (this._panelEl) {
      try { this._panelEl.hass = hass; } catch (_) {}
    }
  }

  _mountPanel() {
    if (this._panelMounted || !this._panelHost) return;

    const panelTag = customElements.get('argus-panel-v2018') ? 'argus-panel-v2018' : null;
    if (!panelTag) return; // panel not registered yet — hass setter will retry

    this._panelMounted = true;
    this._panelEl = document.createElement('argus-panel-v2018');

    // Pass config to the panel
    try {
      this._panelEl.setConfig({
        entity: this._config.entity,
        title: this._config.title,
        // compact mode hides the tabs and shows only the instance panel
        compact: this._config.mode === 'compact',
      });
    } catch (_) {}

    if (this._hass) {
      try { this._panelEl.hass = this._hass; } catch (_) {}
    }

    this._panelHost.appendChild(this._panelEl);
  }

  _toggleFullscreen() {
    this._fullscreen ? this._exitFullscreen() : this._enterFullscreen();
  }

  _enterFullscreen() {
    this._fullscreen = true;
    this.classList.add('argus-fullscreen');
    this._fsBtn.textContent = '✕';
    this._fsBtn.title = 'Salir de pantalla completa';
    document.body.style.overflow = 'hidden';
  }

  _exitFullscreen() {
    this._fullscreen = false;
    this.classList.remove('argus-fullscreen');
    this._fsBtn.textContent = '⛶';
    this._fsBtn.title = 'Pantalla completa';
    document.body.style.overflow = '';
  }

  getCardSize() { return 6; }
}

if (!customElements.get('argus-panel-card')) {
  customElements.define('argus-panel-card', ArgusPanelCard);
}
if (!customElements.get('argus-card')) {
  customElements.define('argus-card', class extends ArgusPanelCard {});
}

// Register in HA card browser — no YAML required
window.customCards = window.customCards || [];
const registeredTypes = new Set(window.customCards.map(c => c.type));
if (!registeredTypes.has('argus-panel-card')) {
  window.customCards.push({
    type: 'argus-panel-card',
    name: 'Argus Security Panel',
    description: 'Panel completo de seguridad Argus con dashboard, modos, sensores y pantalla completa.',
    preview: true,
    documentationURL: 'https://github.com/Chrisalvir1/Argus',
  });
}
if (!registeredTypes.has('argus-card')) {
  window.customCards.push({
    type: 'argus-card',
    name: 'Argus Alarm Card',
    description: 'Tarjeta de seguridad Argus con panel completo y pantalla completa.',
    preview: true,
    documentationURL: 'https://github.com/Chrisalvir1/Argus',
  });
}
