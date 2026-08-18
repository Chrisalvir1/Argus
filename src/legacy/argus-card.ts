// @ts-nocheck
/**
 * Argus Panel Card — v2.2.2
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

const ARGUS_CARD_VERSION='2.2.2';

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

customElements.define('argus-panel-card', ArgusPanelCard);

// Register in HA card browser — no YAML required
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'argus-panel-card',
  name: 'Argus Security Panel',
  description: 'Panel completo de seguridad Argus — se auto-configura con tu alarma. Incluye dashboard, historial, modos y control de acceso.',
  preview: true,
  documentationURL: 'https://github.com/Chrisalvir1/Argus',
});

// Keep the old argus-card registered as legacy fallback
const COPY = {
  es:{title:'Seguridad',home:'EN CASA',away:'AUSENTE',night:'NOCHE',vacation:'VACACIONES',disarm:'DESARMAR',pin:'INTRODUCIR PIN',bad:'PIN incorrecto',unknown:'Ubicación no disponible'},
  en:{title:'Security',home:'HOME',away:'AWAY',night:'NIGHT',vacation:'VACATION',disarm:'DISARM',pin:'ENTER PIN',bad:'Incorrect PIN',unknown:'Location unavailable'},
  fr:{title:'Sécurité',home:'MAISON',away:'ABSENT',night:'NUIT',vacation:'VACANCES',disarm:'DÉSARMER',pin:'SAISIR LE PIN',bad:'PIN incorrect',unknown:'Emplacement indisponible'},
  pt:{title:'Segurança',home:'EM CASA',away:'AUSENTE',night:'NOITE',vacation:'FÉRIAS',disarm:'DESARMAR',pin:'DIGITE O PIN',bad:'PIN incorreto',unknown:'Local indisponível'},
  it:{title:'Sicurezza',home:'CASA',away:'ASSENTE',night:'NOTTE',vacation:'VACANZA',disarm:'DISARMA',pin:'INSERISCI PIN',bad:'PIN errato',unknown:'Posizione non disponibile'},
  zh:{title:'安全',home:'在家',away:'外出',night:'夜间',vacation:'度假',disarm:'撤防',pin:'输入 PIN',bad:'PIN 错误',unknown:'位置不可用'},
  'zh-Hant':{title:'安全',home:'在家',away:'離家',night:'夜間',vacation:'度假',disarm:'撤防',pin:'輸入 PIN',bad:'PIN 錯誤',unknown:'位置不可用'},
  ru:{title:'Безопасность',home:'ДОМА',away:'УШЁЛ',night:'НОЧЬ',vacation:'ОТПУСК',disarm:'СНЯТЬ',pin:'ВВЕДИТЕ PIN',bad:'Неверный PIN',unknown:'Местоположение недоступно'},
  hi:{title:'सुरक्षा',home:'घर पर',away:'बाहर',night:'रात',vacation:'छुट्टी',disarm:'डिसआर्म',pin:'पिन दर्ज करें',bad:'गलत पिन',unknown:'स्थान अनुपलब्ध'},
  ar:{title:'الأمان',home:'في المنزل',away:'بالخارج',night:'ليلي',vacation:'إجازة',disarm:'تعطيل',pin:'أدخل رمز PIN',bad:'رمز PIN خاطئ',unknown:'الموقع غير متاح'},
  ko:{title:'보안',home:'재실',away:'외출',night:'야간',vacation:'휴가',disarm:'해제',pin:'PIN 입력',bad:'잘못된 PIN',unknown:'위치 사용 불가'},
  ja:{title:'セキュリティ',home:'在宅',away:'外出',night:'夜間',vacation:'休暇',disarm:'解除',pin:'PINを入力',bad:'PINが正しくありません',unknown:'位置情報利用不可'},
  uk:{title:'Безпека',home:'ВДОМА',away:'НЕМАЄ ВДОМА',night:'НІЧ',vacation:'ВІДПУСТКА',disarm:'ЗНЯТИ',pin:'ВВЕДІТЬ PIN',bad:'Невірний PIN',unknown:'Розташування недоступне'}
};
const esc = v => String(v ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

class ArgusCard extends HTMLElement {
  static getStubConfig(hass) {
    const entity = findArgusEntity(hass) || 'alarm_control_panel.argus';
    return { entity, title: 'Argus' };
  }
  setConfig(config) { if (!config?.entity) throw new Error("argus-card requires 'entity'"); this._config = { ...config }; }
  set hass(hass) { this._hass = hass; this._render(); }
  _text() { const lang = String(this._hass?.language || 'en').split('-')[0]; return COPY[lang] || COPY.en; }
  async _call(service, code) { const data = { entity_id: this._config.entity }; if (code) data.code = code; await this._hass.callService('alarm_control_panel', service, data); if (service !== 'alarm_disarm') return; for (let i = 0; i < 10; i++) { await new Promise(r => setTimeout(r, 100)); if (this._hass.states?.[this._config.entity]?.state === 'disarmed') return; } throw new Error('Did not disarm'); }
  _weather() { const states = Object.values(this._hass?.states || {}); const entity = this._config.weather_entity ? this._hass.states[this._config.weather_entity] : states.find(e => e.entity_id?.startsWith('weather.') && !['unknown','unavailable'].includes(e.state)); if (!entity) return { state: 'unavailable', temp: '—', unit: '', night: this._hass?.states?.['sun.sun']?.state === 'below_horizon' }; const v = Number(entity.attributes?.temperature); return { state: String(entity.state || 'unavailable').toLowerCase(), temp: Number.isFinite(v) ? Math.round(v) : '—', unit: Number.isFinite(v) ? String(entity.attributes?.temperature_unit || '') : '', night: this._hass?.states?.['sun.sun']?.state === 'below_horizon' }; }
  _location(copy) { const c = this._hass?.config || {}; const p = []; if (c.location_name && !/^(home|casa|hogar)$/i.test(c.location_name)) p.push(c.location_name); if (c.country) p.push(c.country); return p.length ? p.join(', ') : copy.unknown; }
  _scene(w) { const s = w.state, storm = /thunder|storm|lightning/.test(s), rain = /rain|pouring|drizzle|shower/.test(s), snow = /snow/.test(s), fog = /fog|mist|hazy/.test(s), cloud = /cloud|overcast/.test(s); return [w.night ? 'night' : 'day', storm ? 'storm' : rain ? 'rain' : snow ? 'snow' : fog ? 'fog' : cloud ? 'cloud' : 'clear'].join(' '); }
  _render() {
    if (!this._config || !this._hass) return;
    const copy = this._text(), entity = this._hass.states[this._config.entity], state = entity?.state || 'unavailable', weather = this._weather(), location = this._location(copy), title = this._config.title || copy.title, scene = this._scene(weather), time = new Intl.DateTimeFormat(this._hass.language || undefined, { hour: '2-digit', minute: '2-digit' }).format(new Date());
    this.innerHTML = `<ha-card><style>ha-card{overflow:hidden;border:0;border-radius:30px;background:#07111f;color:#fff;box-shadow:0 20px 70px rgba(0,0,0,.36)}.card{position:relative;min-height:330px;isolation:isolate;overflow:hidden;font-family:Inter,system-ui,sans-serif}.scene{position:absolute;inset:0;z-index:-3;overflow:hidden;background:linear-gradient(165deg,#2c86c7,#8fc7dc 62%,#d7c7aa);transition:background 1.5s ease}.scene.sunny{background:linear-gradient(180deg,#1b60d0,#40a0ff 40%,#90d0ff)}.scene.partlycloudy{background:linear-gradient(180deg,#3073d8,#6bb5ff 50%,#b8e0ff)}.scene.cloudy{background:linear-gradient(180deg,#5b6976,#80909c 50%,#a4b3be)}.scene.fog{background:linear-gradient(180deg,#6c767c,#9ca6ac 50%,#ccd1d4)}.scene.rain,.scene.storm{background:linear-gradient(180deg,#303d49,#495a69 50%,#687985)}.scene.snow{background:linear-gradient(180deg,#627f94,#92b1c7 50%,#d8eaf5)}.scene.night{background:linear-gradient(180deg,#020513 0%,#0a1130 50%,#152248 100%)!important}.vignette{position:absolute;inset:0;z-index:-2;background:radial-gradient(circle at 68% 42%,transparent 15%,rgba(2,6,15,.1) 55%,rgba(0,0,0,.58) 100%)}.hud{display:flex;justify-content:space-between;gap:16px;padding:20px 22px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 2px 12px #000}.weather{font-size:18px;letter-spacing:0;text-transform:none}.layout{display:grid;grid-template-columns:minmax(145px,185px) 1fr;gap:18px;align-items:center;padding:8px 22px 24px}.modes{display:grid;gap:8px}.mode{appearance:none;border:1px solid rgba(255,255,255,.17);border-radius:16px;background:rgba(8,16,31,.26);backdrop-filter:blur(20px) saturate(1.25);color:#fff;padding:12px 13px;text-align:left;font-weight:850;letter-spacing:.03em;cursor:pointer;transition:transform .25s cubic-bezier(.16,1,.3,1),background .25s,box-shadow .25s}.mode:hover{transform:translateX(5px) scale(1.02);background:rgba(255,255,255,.17);box-shadow:0 12px 26px rgba(0,0,0,.2)}.mode:active{transform:scale(.97)}.mode.active{background:linear-gradient(135deg,rgba(59,178,255,.42),rgba(114,75,255,.3));border-color:rgba(255,255,255,.42);box-shadow:inset 0 1px rgba(255,255,255,.3),0 10px 34px rgba(20,97,184,.26)}.shield{display:grid;place-items:center;font-size:96px;filter:drop-shadow(0 22px 34px rgba(0,0,0,.46));animation:float 5s ease-in-out infinite}.triggered .shield{animation:alarm 1s ease-in-out infinite}@keyframes float{50%{transform:translateY(-10px) scale(1.025)}}@keyframes alarm{50%{transform:scale(1.12);filter:drop-shadow(0 0 35px #ff334f)}}.title{position:absolute;right:22px;bottom:18px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;font-size:10px;opacity:.7}.keypad{position:absolute;inset:0;z-index:10;display:grid;place-items:center;background:rgba(3,9,20,.72);backdrop-filter:blur(28px) saturate(1.35);animation:open .42s cubic-bezier(.16,1,.3,1)}.pad{width:min(240px,80%);text-align:center}.pad-head{display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:900;letter-spacing:.12em}.display{font-size:27px;letter-spacing:8px;min-height:42px;margin:12px}.keys{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.key{border:1px solid rgba(255,255,255,.14);border-radius:14px;background:rgba(255,255,255,.08);color:#fff;padding:11px;font-size:16px;font-weight:800;cursor:pointer;transition:.2s}.key:hover{background:rgba(255,255,255,.2);transform:translateY(-2px)}.error{color:#ff8592;font-size:11px;font-weight:800}.close{border:0;background:none;color:#fff;font-size:19px;cursor:pointer}@keyframes open{from{opacity:0;transform:scale(.94);filter:blur(8px)}}@media(max-width:520px){.layout{grid-template-columns:1fr 100px}.shield{font-size:72px}.hud{flex-direction:column}.weather{font-size:15px}}@media(prefers-reduced-motion:reduce){*,::before,::after{animation:none!important;transition:none!important}}</style><div class="card ${state==='triggered'?'triggered':''}"><div class="scene ${esc(scene)}"></div><div class="vignette"></div><div class="hud"><span>${esc(location)}</span><span class="weather">${esc(time)} · ${esc(weather.temp)}${esc(weather.unit)}</span></div><div class="layout"><div class="modes"><button class="mode ${state==='armed_home'?'active':''}" data-service="alarm_arm_home" ${this._busy?'disabled':''}>🏠 ${copy.home}</button><button class="mode ${state==='armed_away'?'active':''}" data-service="alarm_arm_away" ${this._busy?'disabled':''}>🔒 ${copy.away}</button><button class="mode ${state==='armed_night'?'active':''}" data-service="alarm_arm_night" ${this._busy?'disabled':''}>🌙 ${copy.night}</button><button class="mode ${state==='armed_vacation'?'active':''}" data-service="alarm_arm_vacation" ${this._busy?'disabled':''}>✈️ ${copy.vacation}</button><button class="mode ${state==='disarmed'?'active':''}" data-service="alarm_disarm" ${this._busy?'disabled':''}>🔓 ${copy.disarm}</button></div><div class="shield">${state==='triggered'?'🚨':'🛡️'}</div></div><div class="title">${esc(title)} · v${ARGUS_CARD_VERSION}</div>${this._showKeypad?`<div class="keypad"><div class="pad"><div class="pad-head"><span>${copy.pin}</span><button class="close" data-close>×</button></div><div class="display">${'•'.repeat((this._enteredPin||'').length)||'—'}</div>${this._pinError?`<div class="error" role="alert">${copy.bad}</div>`:''}<div class="keys">${[1,2,3,4,5,6,7,8,9,'⌫',0,'✓'].map(v=>`<button class="key" data-key="${v}" ${this._busy?'disabled':''}>${v}</button>`).join('')}</div></div></div>`:''}</div></ha-card>`;
    this.querySelectorAll('[data-service]').forEach(btn => btn.onclick = async () => { if (this._busy) return; if (btn.dataset.service === 'alarm_disarm' && entity?.attributes?.code_format) { this._showKeypad = true; this._enteredPin = ''; this._pinError = false; this._render(); return; } this._busy = true; this._render(); try { await this._call(btn.dataset.service); } catch (e) { console.error(e); } finally { this._busy = false; this._render(); } });
    this.querySelector('[data-close]')?.addEventListener('click', () => { this._showKeypad = false; this._render(); });
    this.querySelectorAll('[data-key]').forEach(btn => btn.onclick = async () => { if (this._busy) return; const v = btn.dataset.key; if (v === '⌫') this._enteredPin = (this._enteredPin || '').slice(0, -1); else if (v === '✓') { if (!this._enteredPin) return; this._busy = true; this._render(); try { await this._call('alarm_disarm', this._enteredPin); this._showKeypad = false; this._enteredPin = ''; } catch (e) { console.error(e); this._pinError = true; this._enteredPin = ''; } finally { this._busy = false; } } else if ((this._enteredPin || '').length < 12) this._enteredPin = (this._enteredPin || '') + v; this._render(); });
  }
  getCardSize() { return 4; }
}
customElements.define('argus-card', ArgusCard);
window.customCards.push({
  type: 'argus-card',
  name: 'Argus Alarm Card (Compacto)',
  description: 'Tarjeta compacta de alarma Argus con escena de clima animada.',
  preview: true,
  documentationURL: 'https://github.com/Chrisalvir1/Argus',
});
