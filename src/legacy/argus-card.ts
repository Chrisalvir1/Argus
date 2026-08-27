// @ts-nocheck
/**
 * Argus Panel & Alarm Card — v2.2.4
 * Auto-discovering Lovelace card for Home Assistant.
 *
 * View Modes:
 * 1. "compact" (Default / Instancias Activas):
 *    Renders the pure active instance security console (Liquid Glass, dynamic mode buttons,
 *    slide-to-disarm, slide-to-sos, and intrusion sensors).
 * 2. "panel" (Panel Completo):
 *    Renders the complete Argus hub (dashboard widgets, history log, automations, access control).
 * 3. "basic" (Básico con Clima):
 *    Renders the classic compact card with animated weather backdrop and PIN keypad.
 */

const ARGUS_CARD_VERSION='2.2.92';

console.info(
  `%c🛡️ ARGUS ALARM CARD %c v${ARGUS_CARD_VERSION} `,
  'color:white;background:#0a1628;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;',
  'color:#0a1628;background:#38bdf8;font-weight:700;padding:4px 8px;border-radius:0 4px 4px 0;'
);

// ── Auto-discover the first argus entity in HA states ──────────────────────
function findArgusEntity(hass) {
  if (!hass?.states) return null;
  const states = Object.values(hass.states);
  const argusEntity = states.find(
    e => e.entity_id?.startsWith('alarm_control_panel.') &&
         (e.attributes?.argus_version || e.attributes?.argus_entry_id || e.entity_id.includes('argus'))
  ) || states.find(e => e.entity_id?.startsWith('alarm_control_panel.'));
  return argusEntity?.entity_id || null;
}

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

// ── Card Visual Config Editor (Zero YAML) ──────────────────────────────────
class ArgusCardEditor extends HTMLElement {
  setConfig(config) { this._config = config; }
  set hass(hass) { this._hass = hass; this._render(); }
  _render() {
    if (!this._hass) return;
    const entityId = this._config?.entity || '';
    const mode = this._config?.mode || 'compact';
    const alarmEntities = Object.keys(this._hass.states || {})
      .filter(k => k.startsWith('alarm_control_panel.'));

    this.innerHTML = `
      <style>
        .argus-editor { padding: 16px; display: grid; gap: 14px; font-family: 'Outfit', Inter, system-ui, sans-serif; }
        .argus-editor label { font-size: 13px; font-weight: 700; color: var(--primary-text-color); display: grid; gap: 5px; }
        .argus-editor select, .argus-editor input { padding: 10px 12px; border-radius: 12px; border: 1px solid var(--divider-color, rgba(255,255,255,.15)); background: var(--card-background-color, rgba(0,0,0,.2)); color: var(--primary-text-color); font-size: 14px; width: 100%; box-sizing: border-box; }
        .argus-editor .hint { font-size: 11px; opacity: 0.7; font-weight: 500; }
        .argus-editor .opt-grp { border-left: 3px solid #38bdf8; padding-left: 10px; margin-top: 4px; }
      </style>
      <div class="argus-editor">
        <label>
          Entidad de Alarma Argus
          <select id="entity-sel">
            ${alarmEntities.map(e => `<option value="${e}" ${e === entityId ? 'selected' : ''}>${e}</option>`).join('')}
          </select>
          <span class="hint">Detectada automáticamente. Solo cámbiala si tienes varias alarmas.</span>
        </label>
        <label>
          Diseño / Modo de Vista
          <select id="mode-sel">
            <option value="compact" ${mode === 'compact' ? 'selected' : ''}>✨ Instancia Activa (Consola Liquid Glass · Recomendado)</option>
            <option value="panel" ${mode === 'panel' ? 'selected' : ''}>📊 Panel Completo (Dashboard, widgets e historial)</option>
            <option value="basic" ${mode === 'basic' ? 'selected' : ''}>🌤️ Básico (Tarjeta clásica con clima animado)</option>
          </select>
          <div class="opt-grp hint">
            ${mode === 'compact' ? 'Muestra la consola de seguridad de Instancias Activas con el escudo animado, modos iluminados, slide-to-disarm, slide-to-sos y sensores.' :
              mode === 'panel' ? 'Muestra todo el panel de control de Argus con su cuadrícula de widgets e historial de eventos.' :
              'Muestra la tarjeta de alarma ligera con escena de clima y teclado PIN.'}
          </div>
        </label>
        <label>
          Título de la Tarjeta (opcional)
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

// ── Unified Argus Panel & Alarm Card ───────────────────────────────────────
class ArgusPanelCard extends HTMLElement {
  static getStubConfig(hass) {
    const entity = findArgusEntity(hass) || 'alarm_control_panel.argus';
    return { entity, mode: 'compact', title: 'Argus Security' };
  }

  static getConfigElement() {
    return document.createElement('argus-panel-card-editor');
  }

  setConfig(config) {
    this._config = {
      mode: 'compact',
      title: 'Argus Security',
      ...config,
    };
    this._panelMounted = false;
    this._fullscreen = false;
    this._busy = false;
    this._showKeypad = false;
    this._enteredPin = '';
    this._pinError = false;
    this._ensureStructure();
  }

  _ensureStructure() {
    if (this._structureReady) return;
    this._structureReady = true;
    this.style.display = 'block';

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; width: 100%; box-sizing: border-box; }
        ha-card {
          border-radius: 28px !important;
          background: linear-gradient(135deg, rgba(16, 23, 38, 0.96) 0%, rgba(10, 15, 26, 0.98) 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.14) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;
          backdrop-filter: blur(28px) saturate(160%) !important;
          -webkit-backdrop-filter: blur(28px) saturate(160%) !important;
          color: #ffffff !important;
          position: relative;
          --ha-card-border-radius: 28px;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden !important;
        }
        .argus-panel-host {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          width: 100%;
          min-height: fit-content;
          overflow: visible !important;
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
        .argus-fs-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10000;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(8,16,30,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: rgba(255,255,255,0.85);
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
        @media (max-width: 600px) {
          .argus-panel-host { min-height: 340px; }
        }
      </style>
      <ha-card>
        <button class="argus-fs-btn" id="fs-btn" title="Pantalla completa" aria-label="Pantalla completa">⛶</button>
        <div class="argus-panel-host" id="panel-host"></div>
      </ha-card>`;

    this._fsBtn = shadow.getElementById('fs-btn');
    this._panelHost = shadow.getElementById('panel-host');

    this._fsBtn.addEventListener('click', () => this._toggleFullscreen());
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this._fullscreen) this._exitFullscreen();
    });
  }

  set hass(hass) {
    this._hass = hass;

    if (!this._config.entity || this._config.entity === 'alarm_control_panel.argus') {
      const detected = findArgusEntity(hass);
      if (detected) this._config.entity = detected;
    }

    if (this._config.mode === 'basic') {
      this._renderBasicCard();
    } else {
      this._mountPanel();
      if (this._panelEl) {
        try { this._panelEl.hass = hass; } catch (_) {}
      }
    }
  }

  _mountPanel() {
    if (this._panelMounted || !this._panelHost) return;

    const panelTag = customElements.get('argus-panel-v2018') ? 'argus-panel-v2018' : null;
    if (!panelTag) return;

    this._panelMounted = true;
    this._panelHost.innerHTML = '';
    this._panelEl = document.createElement('argus-panel-v2018');

    if (this._config.mode !== 'panel') {
      this._panelEl.setAttribute('compact', '');
      this._panelEl.classList.add('argus-compact');
    }

    try {
      this._panelEl.setConfig({
        entity: this._config.entity,
        title: this._config.title,
        compact: this._config.mode !== 'panel',
      });
    } catch (_) {}

    this._panelHost.appendChild(this._panelEl);

    if (this._hass) {
      try { this._panelEl.hass = this._hass; } catch (_) {}
    }
  }

  _renderBasicCard() {
    if (!this._panelHost || !this._hass) return;
    this._panelMounted = false;
    const lang = String(this._hass?.language || 'en').split('-')[0];
    const copy = COPY[lang] || COPY.en;
    const entity = this._hass.states[this._config.entity];
    const state = entity?.state || 'unavailable';
    const states = Object.values(this._hass?.states || {});
    const weatherEnt = this._config.weather_entity ? this._hass.states[this._config.weather_entity] : states.find(e => e.entity_id?.startsWith('weather.') && !['unknown','unavailable'].includes(e.state));
    const tempVal = Number(weatherEnt?.attributes?.temperature);
    const weather = {
      state: String(weatherEnt?.state || 'unavailable').toLowerCase(),
      temp: Number.isFinite(tempVal) ? Math.round(tempVal) : '—',
      unit: Number.isFinite(tempVal) ? String(weatherEnt?.attributes?.temperature_unit || '') : '',
      night: this._hass?.states?.['sun.sun']?.state === 'below_horizon'
    };
    const c = this._hass?.config || {};
    const parts = [];
    if (c.location_name && !/^(home|casa|hogar)$/i.test(c.location_name)) parts.push(c.location_name);
    if (c.country) parts.push(c.country);
    const location = parts.length ? parts.join(', ') : copy.unknown;
    const title = this._config.title || copy.title;
    const s = weather.state;
    const storm = /thunder|storm|lightning/.test(s), rain = /rain|pouring|drizzle|shower/.test(s), snow = /snow/.test(s), fog = /fog|mist|hazy/.test(s), cloud = /cloud|overcast/.test(s);
    const scene = [weather.night ? 'night' : 'day', storm ? 'storm' : rain ? 'rain' : snow ? 'snow' : fog ? 'fog' : cloud ? 'cloud' : 'clear'].join(' ');
    const time = new Intl.DateTimeFormat(this._hass.language || undefined, { hour: '2-digit', minute: '2-digit' }).format(new Date());

    this._panelHost.innerHTML = `
      <style>
        .basic-card{position:relative;min-height:330px;isolation:isolate;overflow:hidden;font-family:'Outfit',Inter,system-ui,sans-serif}
        .basic-scene{position:absolute;inset:0;z-index:-3;overflow:hidden;background:linear-gradient(165deg,#2c86c7,#8fc7dc 62%,#d7c7aa);transition:background 1.5s ease}
        .basic-scene.night{background:linear-gradient(180deg,#020513 0%,#0a1130 50%,#152248 100%)!important}
        .basic-vignette{position:absolute;inset:0;z-index:-2;background:radial-gradient(circle at 68% 42%,transparent 15%,rgba(2,6,15,.1) 55%,rgba(0,0,0,.58) 100%)}
        .basic-hud{display:flex;justify-content:space-between;gap:16px;padding:20px 22px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 2px 12px #000}
        .basic-weather{font-size:18px;letter-spacing:0;text-transform:none}
        .basic-layout{display:grid;grid-template-columns:minmax(145px,185px) 1fr;gap:18px;align-items:center;padding:8px 22px 24px}
        .basic-modes{display:grid;gap:8px}
        .basic-mode{appearance:none;border:1px solid rgba(255,255,255,.17);border-radius:16px;background:rgba(8,16,31,.26);backdrop-filter:blur(20px) saturate(1.25);color:#fff;padding:12px 13px;text-align:left;font-weight:850;letter-spacing:.03em;cursor:pointer;transition:transform .25s,background .25s,box-shadow .25s}
        .basic-mode:hover{transform:translateX(5px) scale(1.02);background:rgba(255,255,255,.17);box-shadow:0 12px 26px rgba(0,0,0,.2)}
        .basic-mode.active{background:linear-gradient(135deg,rgba(59,178,255,.42),rgba(114,75,255,.3));border-color:rgba(255,255,255,.42);box-shadow:inset 0 1px rgba(255,255,255,.3),0 10px 34px rgba(20,97,184,.26)}
        .basic-shield{display:grid;place-items:center;font-size:96px;filter:drop-shadow(0 22px 34px rgba(0,0,0,.46));animation:basicFloat 5s ease-in-out infinite}
        @keyframes basicFloat{50%{transform:translateY(-10px) scale(1.025)}}
        .basic-title{position:absolute;right:22px;bottom:18px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;font-size:10px;opacity:.7}
      </style>
      <div class="basic-card">
        <div class="basic-scene ${esc(scene)}"></div>
        <div class="basic-vignette"></div>
        <div class="basic-hud"><span>${esc(location)}</span><span class="basic-weather">${esc(time)} · ${esc(weather.temp)}${esc(weather.unit)}</span></div>
        <div class="basic-layout">
          <div class="basic-modes">
            <button class="basic-mode ${state==='armed_home'?'active':''}" data-service="alarm_arm_home">🏠 ${copy.home}</button>
            <button class="basic-mode ${state==='armed_away'?'active':''}" data-service="alarm_arm_away">🔒 ${copy.away}</button>
            <button class="basic-mode ${state==='armed_night'?'active':''}" data-service="alarm_arm_night">🌙 ${copy.night}</button>
            <button class="basic-mode ${state==='armed_vacation'?'active':''}" data-service="alarm_arm_vacation">✈️ ${copy.vacation}</button>
            <button class="basic-mode ${state==='disarmed'?'active':''}" data-service="alarm_disarm">🔓 ${copy.disarm}</button>
          </div>
          <div class="basic-shield">${state==='triggered'?'🚨':'🛡️'}</div>
        </div>
        <div class="basic-title">${esc(title)} · v${ARGUS_CARD_VERSION}</div>
      </div>
    `;

    this._panelHost.querySelectorAll('[data-service]').forEach(btn => {
      btn.onclick = async () => {
        const service = btn.dataset.service;
        await this._hass.callService('alarm_control_panel', service, { entity_id: this._config.entity });
      };
    });
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

  getGridOptions() {
    return {
      columns: 12,
      rows: 'auto',
      min_columns: 3,
      min_rows: 2,
    };
  }

  getLayoutOptions() {
    return {
      grid_columns: 4,
      grid_rows: 'auto',
      grid_min_columns: 2,
      grid_min_rows: 2,
    };
  }
}

if (!customElements.get('argus-panel-card')) {
  customElements.define('argus-panel-card', ArgusPanelCard);
}
if (!customElements.get('argus-card')) {
  customElements.define('argus-card', class extends ArgusPanelCard {});
}

// Register both custom cards in HA card browser
window.customCards = window.customCards || [];
const registeredTypes = new Set(window.customCards.map(c => c.type));
if (!registeredTypes.has('argus-panel-card')) {
  window.customCards.push({
    type: 'argus-panel-card',
    name: 'Argus Security Panel',
    description: 'Panel de seguridad Argus — consola Liquid Glass de Instancias Activas, dashboard e historial.',
    preview: true,
    documentationURL: 'https://github.com/Chrisalvir1/Argus',
  });
}
if (!registeredTypes.has('argus-card')) {
  window.customCards.push({
    type: 'argus-card',
    name: 'Argus Alarm Card',
    description: 'Tarjeta de seguridad Argus — consola interactiva de Instancia Activa con Liquid Glass y pantalla completa.',
    preview: true,
    documentationURL: 'https://github.com/Chrisalvir1/Argus',
  });
}
