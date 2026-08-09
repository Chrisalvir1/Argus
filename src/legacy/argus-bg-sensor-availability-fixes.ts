// @ts-nocheck
/**
 * Argus v2.0.25 — Background selector + sensor availability fixes.
 *
 * Fix A (backgrounds): the personalization selectors only refreshed field
 * visibility on change. `this._backgroundMode` / `this._hubBgMode` kept the
 * previous value until save, so any re-render rebuilt the <select> with the
 * OLD mode and the choice snapped back. `_persistPersonalization` also fell
 * back to `this._panelBgFile` / `this._hubBgFile` even when the user switched
 * to weather/none/default, so the uploaded image could never be cleared.
 *
 * Fix B (sensors): `unavailable`/`unknown` entities were rendered as a green
 * "closed". They now render as an amber "?" / "Sin conexión" state with a
 * hint that the device lost connection in Home Assistant and needs review.
 */

const ARGUS_UNAVAILABLE_STATES = new Set(['unavailable', 'unknown']);

const ARGUS_BG_SENSOR_I18N = {
  es: { status_unavailable: 'Sin conexión', status_unavailable_hint: 'El dispositivo perdió conexión en Home Assistant y necesita revisión.' },
  en: { status_unavailable: 'Unavailable', status_unavailable_hint: 'The device lost connection in Home Assistant and needs review.' },
  fr: { status_unavailable: 'Indisponible', status_unavailable_hint: "L'appareil a perdu la connexion dans Home Assistant et doit être vérifié." },
  pt: { status_unavailable: 'Indisponível', status_unavailable_hint: 'O dispositivo perdeu a conexão no Home Assistant e precisa de revisão.' },
  it: { status_unavailable: 'Non disponibile', status_unavailable_hint: 'Il dispositivo ha perso la connessione in Home Assistant e richiede una verifica.' },
  zh: { status_unavailable: '不可用', status_unavailable_hint: '设备在 Home Assistant 中失去连接，需要检查。' },
  ru: { status_unavailable: 'Недоступно', status_unavailable_hint: 'Устройство потеряло связь в Home Assistant и требует проверки.' },
};

function argusIsUnavailable(stateObj) {
  if (!stateObj) return true;
  return ARGUS_UNAVAILABLE_STATES.has(String(stateObj.state ?? '').toLowerCase());
}

function argusEsc(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[char]));
}

/* ── Fix A: background selectors ─────────────────────────────────────── */

function argusSyncBackgroundControls(panel) {
  const root = panel.shadowRoot;
  if (!root) return;

  const bgMode = root.getElementById('bg-mode-select-standalone');
  if (bgMode && !bgMode.dataset.argusBgFixBound) {
    bgMode.dataset.argusBgFixBound = '1';
    bgMode.addEventListener('change', () => {
      // Commit the selection to the model immediately so a re-render can
      // never snap the control back to the previous mode.
      panel._backgroundMode = bgMode.value;
      if (!['photo', 'collage', 'video'].includes(bgMode.value)) {
        panel._panelBgFile = '';
        const urlInput = root.getElementById('panel-bg-url-input');
        if (urlInput) urlInput.value = '';
      }
      panel._updateBgFieldsVisibility?.();
      panel._updateTheme?.();
      panel._renderEntries?.();
    });
  }

  const hubMode = root.getElementById('hub-bg-mode-select');
  if (hubMode && !hubMode.dataset.argusBgFixBound) {
    hubMode.dataset.argusBgFixBound = '1';
    hubMode.addEventListener('change', () => {
      panel._hubBgMode = hubMode.value;
      if (hubMode.value !== 'image') {
        panel._hubBgFile = '';
        const urlInput = root.getElementById('hub-bg-url-input');
        if (urlInput) urlInput.value = '';
      }
      panel._updateBgFieldsVisibility?.();
      panel._updateCanvasBackground?.();
      panel._updateTheme?.();
    });
  }
}

function argusSanitizeBackgroundState(panel) {
  // Defensive cleanup before persisting: never keep a file reference for a
  // mode that cannot display it. This is what made the uploaded image
  // impossible to remove.
  const root = panel.shadowRoot;
  const bgMode = root?.getElementById('bg-mode-select-standalone')?.value ?? panel._backgroundMode;
  const hubMode = root?.getElementById('hub-bg-mode-select')?.value ?? panel._hubBgMode;

  if (!['photo', 'collage', 'video'].includes(bgMode)) {
    panel._panelBgFile = '';
    const urlInput = root?.getElementById('panel-bg-url-input');
    if (urlInput) urlInput.value = '';
  }
  if (hubMode !== 'image') {
    panel._hubBgFile = '';
    const urlInput = root?.getElementById('hub-bg-url-input');
    if (urlInput) urlInput.value = '';
  }
}

/* ── Fix B: sensor availability ──────────────────────────────────────── */

function argusInstallAvailabilityStyles(panel) {
  const root = panel.shadowRoot;
  if (!root || root.getElementById('argus-availability-style')) return;
  const style = document.createElement('style');
  style.id = 'argus-availability-style';
  style.textContent = `
.sensor-pill.sensor-unavailable{border-color:rgba(255,180,60,.65)!important;background:rgba(120,72,8,.28)!important}
.sensor-pill.sensor-unavailable .pill-dot{background:#ffb43c!important;box-shadow:0 0 8px rgba(255,180,60,.85)!important}
.sensor-pill.sensor-unavailable .pill-status{color:#ffcf8a!important;opacity:1!important;font-weight:900!important}
.console-sensor.unavailable{background:linear-gradient(100deg,rgba(255,170,40,.22),rgba(40,26,8,.62))!important;border-color:rgba(255,190,80,.65)!important}
.console-sensor.unavailable .console-sensor-state{color:#ffcf8a!important}
.status-unavailable{color:#ffcf8a!important;font-weight:900!important}
`;
  root.appendChild(style);
}

function argusFixConsoleSensorRows(panel) {
  // The console sensor rows are rendered inline by _renderEntries without an
  // entity id in the DOM. Recompute the same active sensor list per entry and
  // patch rows in order.
  const root = panel.shadowRoot;
  if (!root || !panel._hass?.states) return;

  const entries = panel._dashboard?.entries || [];
  root.querySelectorAll('.entry').forEach((art, idx) => {
    const entry = entries[idx];
    if (!entry) return;
    const stateObj = panel._hass.states[entry.entity_id];
    const state = String(stateObj?.state || 'disarmed');
    const mKey = state.replace('armed_', '');
    let eCfg = (panel._ui?.modes?.__by_entity__?.[entry.entity_id]?.[mKey])
              || (panel._ui?.modes?.[mKey]) || {};
    let sList = eCfg.sensors || [];
    if (state === 'disarmed' || !sList.length) {
      const modes = panel._ui?.modes?.__by_entity__?.[entry.entity_id] || panel._ui?.modes || {};
      const all = new Set();
      ['away', 'home', 'night', 'vacation'].forEach(m => {
        if (modes[m]?.sensors) modes[m].sensors.forEach(s => all.add(s));
      });
      sList = Array.from(all);
    }
    const bypassed = eCfg.bypassed_sensors || [];
    const active = sList.filter(s => !bypassed.includes(s) && panel._hass.states[s]);

    const rows = art.querySelectorAll('.console-sensors .console-sensor');
    if (!rows.length) return;
    rows.forEach((row, rowIdx) => {
      const sid = active[rowIdx];
      if (!sid) return;
      const st = panel._hass.states[sid];
      if (!argusIsUnavailable(st)) return;
      row.classList.add('unavailable');
      row.classList.remove('open');
      row.title = panel._t('status_unavailable_hint');
      const icon = row.querySelector('.console-sensor-icon');
      if (icon) {
        icon.textContent = '❓';
        icon.style.color = '#ffcf8a';
        icon.style.animation = 'none';
      }
      const stateEl = row.querySelector('.console-sensor-state');
      if (stateEl) {
        stateEl.textContent = panel._t('status_unavailable');
        stateEl.style.color = '#ffcf8a';
      }
    });
  });
}

/* ── Prototype patches ───────────────────────────────────────────────── */

export function applyBgSensorAvailabilityFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusBgSensorAvailabilityFixes) return;
  ArgusPanel.__argusBgSensorAvailabilityFixes = true;
  const proto = ArgusPanel.prototype;

  async function argusApplyProfileTheme(panel) {
    if (!panel._currentProfile || !panel._currentProfile.id) return;
    
    try {
      const res = await panel._send('argus/get_profile_theme');
      if (res && res.theme && Object.keys(res.theme).length > 0) {
        const t = res.theme;
        
        if (t.background_mode !== undefined) panel._backgroundMode = t.background_mode;
        if (t.background_images !== undefined) panel._backgroundImages = t.background_images;
        if (t.panel_bg_file !== undefined) panel._panelBgFile = t.panel_bg_file || '';
        if (t.panel_bg_sound !== undefined) panel._panelBgSound = t.panel_bg_sound;
        
        if (t.hub_bg_mode !== undefined) {
          panel._hubBgMode = (t.hub_bg_mode === 'none' || t.hub_bg_mode === 'default') ? 'default' : t.hub_bg_mode;
        }
        if (t.hub_bg_file !== undefined) panel._hubBgFile = t.hub_bg_file || '';
        if (t.hub_bg_sound !== undefined) panel._hubBgSound = t.hub_bg_sound;
        
        if (!panel._ui) panel._ui = {};
        panel._ui.background_mode = panel._backgroundMode;
        panel._ui.background_images = panel._backgroundImages;
        panel._ui.panel_bg_file = panel._panelBgFile;
        panel._ui.panel_bg_sound = panel._panelBgSound;
        panel._ui.hub_bg_mode = panel._hubBgMode;
        panel._ui.hub_bg_file = panel._hubBgFile;
        panel._ui.hub_bg_sound = panel._hubBgSound;
        
        const root = panel.shadowRoot;
        if (root) {
          const modeSel = root.getElementById('bg-mode-select-standalone');
          if (modeSel) modeSel.value = panel._backgroundMode;
          
          const hubModeSel = root.getElementById('hub-bg-mode-select');
          if (hubModeSel) hubModeSel.value = panel._hubBgMode;
          
          const panelUrl = root.getElementById('panel-bg-url-input');
          if (panelUrl && (!panel._panelBgFile.startsWith('data:'))) {
            panelUrl.value = panel._panelBgFile;
          }
          
          const hubUrl = root.getElementById('hub-bg-url-input');
          if (hubUrl && (!panel._hubBgFile.startsWith('data:'))) {
            hubUrl.value = panel._hubBgFile;
          }
        }
        
        if (typeof panel._updateBgFieldsVisibility === 'function') panel._updateBgFieldsVisibility();
        if (typeof panel._updateCanvasBackground === 'function') panel._updateCanvasBackground();
        if (typeof panel._updateTheme === 'function') panel._updateTheme();
        if (typeof panel._renderEntries === 'function') panel._renderEntries();
      }
    } catch (e) {
      console.warn('Failed to load profile theme', e);
    }
  }

  async function argusSaveProfileTheme(panel) {
    if (!panel._currentProfile || !panel._currentProfile.id) return;
    try {
      const root = panel.shadowRoot;
      let bgMode = panel._backgroundMode;
      let hubBgMode = panel._hubBgMode;
      
      if (root) {
         const modeSel = root.getElementById('bg-mode-select-standalone');
         if (modeSel) bgMode = modeSel.value;
         
         const hubModeSel = root.getElementById('hub-bg-mode-select');
         if (hubModeSel) hubBgMode = hubModeSel.value;
      }
      
      const theme = {
        background_mode: bgMode,
        hub_bg_mode: hubBgMode === 'default' ? 'none' : hubBgMode,
        panel_bg_file: ['photo', 'collage', 'video'].includes(bgMode) ? (panel._panelBgFile || '') : '',
        hub_bg_file: hubBgMode === 'image' ? (panel._hubBgFile || '') : '',
        background_images: panel._backgroundImages || [],
        panel_bg_sound: !!panel._panelBgSound,
        hub_bg_sound: !!panel._hubBgSound
      };
      
      const res = await panel._send('argus/save_profile_theme', { theme });
      if (res && res.theme) {
         panel._currentProfile.theme = res.theme;
      }
    } catch (e) {
      console.warn('Failed to save profile theme', e);
    }
  }

  // i18n for the new availability state.
  const originalT = proto._t;
  proto._t = function(key) {
    if (key === 'status_unavailable' || key === 'status_unavailable_hint') {
      const lang = String(this._getLocale?.() || this._hass?.language || 'en').split('-')[0];
      const dict = ARGUS_BG_SENSOR_I18N[lang] || ARGUS_BG_SENSOR_I18N.en;
      return dict[key];
    }
    return originalT.call(this, key);
  };

  // Never persist a file reference for a mode that cannot display it.
  const originalPersist = proto._persistPersonalization;
  proto._persistPersonalization = async function() {
    argusSanitizeBackgroundState(this);
    const result = await originalPersist.call(this);
    await argusSaveProfileTheme(this);
    return result;
  };

  // Sensor pills (modes / bypass / entry lists): show "Sin conexión" + ❓.
  const originalChip = proto._chip;
  proto._chip = function(entityId, type) {
    const stateObj = this._hass?.states?.[entityId];
    const isSensorType = type === 'sensor' || type === 'bypass' || type === 'entry';
    if (!isSensorType || !argusIsUnavailable(stateObj)) {
      return originalChip.call(this, entityId, type);
    }
    const name = stateObj?.attributes?.friendly_name || entityId;
    const hint = this._t('status_unavailable_hint');
    return `
      <span class="sensor-pill sensor-unavailable" title="${argusEsc(hint)}">
        <span class="pill-dot"></span>
        <span class="pill-content">
          <span class="pill-name">${argusEsc(name)}</span>
          <span class="pill-status">❓ ${argusEsc(this._t('status_unavailable'))}</span>
        </span>
        ${!this._isAdmin ? '' : `<button data-remove="${type}:${argusEsc(entityId)}" title="${argusEsc(hint)}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
  };

  // Device facts (selector lists): report unavailable explicitly instead of
  // rendering the raw state as a green "closed".
  const originalFacts = proto._deviceFacts;
  proto._deviceFacts = function(entityId, stateObj, includeStatus = true) {
    if (includeStatus && argusIsUnavailable(stateObj)) {
      const facts = [{ text: `❓ ${this._t('status_unavailable')}`, className: 'status-unavailable' }];
      const power = this._getDevicePower(entityId, stateObj);
      if (power.mains) facts.push({ text: '🔌 AC', className: 'power-mains' });
      if (power.battery !== null) facts.push({ text: `🔋 ${power.battery}%`, className: power.battery <= 20 ? 'power-low' : '' });
      return facts;
    }
    return originalFacts.call(this, entityId, stateObj, includeStatus);
  };

  // After every render: styles, console sensor rows, selector bindings.
  const originalRenderEntries = proto._renderEntries;
  proto._renderEntries = function() {
    const result = originalRenderEntries.call(this);
    argusInstallAvailabilityStyles(this);
    argusFixConsoleSensorRows(this);
    argusSyncBackgroundControls(this);
    return result;
  };

  const originalLoad = proto._load;
  proto._load = async function() {
    const result = await originalLoad?.call(this);
    await argusApplyProfileTheme(this);
    argusInstallAvailabilityStyles(this);
    argusSyncBackgroundControls(this);
    return result;
  };
}
