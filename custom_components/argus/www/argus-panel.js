/**
 * Argus Panel 0.4.1
 * Clean rebuild after selector refactor.
 */
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host{display:block;min-height:100vh;box-sizing:border-box;color:var(--primary-text-color);background:var(--lovelace-background,var(--primary-background-color));font-family:Inter,system-ui,sans-serif}
    *{box-sizing:border-box}
    .wrap{max-width:1200px;margin:0 auto;padding:24px;display:grid;gap:20px}
    .glass{background:color-mix(in srgb,var(--card-background-color,#fff) 84%,transparent);border:1px solid color-mix(in srgb,var(--divider-color,#ccc) 50%,transparent);border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,.08);backdrop-filter:blur(18px) saturate(1.2);-webkit-backdrop-filter:blur(18px) saturate(1.2)}
    .hero{padding:24px 26px;display:flex;align-items:center;gap:16px}
    .hero-icon{font-size:40px;line-height:1}
    .hero h1{margin:0 0 4px;font-size:26px;font-weight:700}
    .hero p{margin:0;font-size:14px;opacity:.68}
    .grid{display:grid;grid-template-columns:1.35fr 1fr;gap:20px}
    @media (max-width:860px){.grid{grid-template-columns:1fr}}
    .panel{padding:20px}
    .panel h2{margin:0 0 14px;font-size:16px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;opacity:.72}
    .entry{padding:16px;border-radius:16px;display:grid;gap:10px;background:color-mix(in srgb,var(--primary-color,#03a9f4) 6%,var(--card-background-color,#fff));border:1px solid color-mix(in srgb,var(--primary-color,#03a9f4) 16%,transparent);margin-bottom:12px}
    .entry:last-child{margin-bottom:0}
    .entry-title{font-size:17px;font-weight:700}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:rgba(3,169,244,.13);color:var(--primary-color,#03a9f4)}
    .badge.armed_away,.badge.armed_vacation{background:rgba(229,57,53,.12);color:var(--error-color,#e53935)}
    .badge.armed_home,.badge.armed_night{background:rgba(251,140,0,.12);color:#fb8c00}
    .badge.disarmed{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}
    .badge.triggered{background:rgba(229,57,53,.22);color:var(--error-color,#e53935)}
    .badge.unavailable{background:rgba(120,120,120,.12);color:var(--secondary-text-color,#888)}
    .meta{font-size:12px;opacity:.58}
    .actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
    .unavailable-notice{padding:10px 12px;border-radius:10px;background:rgba(120,120,120,.1);color:var(--secondary-text-color,#888);font-size:12px;display:flex;align-items:center;gap:7px}
    button{border:0;border-radius:12px;padding:9px 16px;font:600 13px/1 Inter,system-ui,sans-serif;cursor:pointer;transition:opacity .15s,transform .1s}
    button:active:not(:disabled){transform:scale(.96)}
    button:disabled{opacity:.38;cursor:not-allowed}
    button.primary{background:var(--primary-color,#03a9f4);color:#fff}
    button.ghost{background:color-mix(in srgb,var(--card-background-color,#fff) 60%,var(--primary-color,#03a9f4) 12%);color:var(--primary-text-color)}
    button.danger{background:rgba(229,57,53,.12);color:var(--error-color,#e53935)}
    button.success{background:rgba(67,160,71,.13);color:var(--success-color,#43a047)}
    button:hover:not(:disabled){opacity:.88}
    textarea,input[type=text],input[type=time],select:not([multiple]){width:100%;border-radius:12px;border:1px solid var(--divider-color,#ccc);background:color-mix(in srgb,var(--card-background-color,#fff) 52%,transparent);color:var(--primary-text-color);padding:9px 12px;font-size:13px;outline:none;transition:border-color .2s}
    textarea{min-height:120px;resize:vertical;font:12.5px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace}
    textarea:focus,input[type=text]:focus,input[type=time]:focus,select:not([multiple]):focus,select[multiple]:focus{border-color:var(--primary-color,#03a9f4)}
    .save-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:4px}
    .status{font-size:13px;flex:1;min-width:100px}
    .status.ok{color:var(--success-color,#43a047)}
    .status.err{color:var(--error-color,#e53935)}
    .tabs{display:flex;gap:6px;margin-bottom:18px;padding:5px;background:color-mix(in srgb,var(--card-background-color,#fff) 42%,transparent);border-radius:14px;border:1px solid color-mix(in srgb,var(--divider-color,#ccc) 30%,transparent)}
    .tab{flex:1;padding:9px 6px;text-align:center;cursor:pointer;border-radius:10px;font-size:12px;font-weight:700;white-space:nowrap}
    .tab.active{background:var(--primary-color,#03a9f4);color:#fff;box-shadow:0 4px 12px rgba(3,169,244,.22)}
    .tab:not(.active):hover{background:color-mix(in srgb,var(--primary-color,#03a9f4) 10%,transparent)}
    .config-grid,.stack{display:grid;gap:14px}
    .field-group{display:grid;gap:6px}
    .field-group>label,.subsection-title{font-size:11px;font-weight:800;opacity:.64;text-transform:uppercase;letter-spacing:.05em}
    select[multiple]{width:100%;border-radius:12px;border:1px solid var(--divider-color,#ccc);background:color-mix(in srgb,var(--card-background-color,#fff) 50%,transparent);color:var(--primary-text-color);padding:8px;min-height:110px;font-size:13px;outline:none}
    .slider-row{display:flex;align-items:center;gap:12px}
    .slider-row input[type=range]{flex:1}
    .slider-row .val{font-size:13px;font-weight:700;width:38px;text-align:right}
    .slider-row .lbl{font-size:13px;font-weight:500;width:68px;flex-shrink:0}
    .subsection{background:color-mix(in srgb,var(--card-background-color,#fff) 35%,transparent);border:1px solid color-mix(in srgb,var(--divider-color,#ccc) 45%,transparent);border-radius:14px;padding:14px;display:grid;gap:12px}
    .days-row{display:flex;gap:5px;flex-wrap:wrap}
    .day-btn{padding:6px 10px;border-radius:8px;font-size:12px;font-weight:800;cursor:pointer;border:1px solid color-mix(in srgb,var(--divider-color,#ccc) 70%,transparent);background:color-mix(in srgb,var(--card-background-color,#fff) 60%,transparent);color:var(--primary-text-color);transition:all .15s;user-select:none}
    .day-btn.sel{background:var(--primary-color,#03a9f4);color:#fff;border-color:transparent}
    .two-col{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .checkbox-label{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:500;cursor:pointer;user-select:none}
    .small{font-size:12px;opacity:.66}
    .chip-list{display:flex;flex-wrap:wrap;gap:8px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:7px 10px;border-radius:999px;background:color-mix(in srgb,var(--primary-color,#03a9f4) 10%,var(--card-background-color,#fff));border:1px solid color-mix(in srgb,var(--primary-color,#03a9f4) 18%,transparent);font-size:12px;font-weight:700}
    .chip button{padding:0;border:0;background:none;cursor:pointer;opacity:.7}
    .modal-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.42);display:none;align-items:center;justify-content:center;padding:20px;z-index:9999}
    .modal-backdrop.open{display:flex}
    .modal{width:min(900px,100%);max-height:min(80vh,900px);overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:18px;border-radius:18px;background:var(--card-background-color,#fff);border:1px solid var(--divider-color,#ccc);box-shadow:0 24px 80px rgba(0,0,0,.22)}
    .modal-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
    .modal-head h3{margin:0;font-size:18px}
    .modal-body{display:grid;grid-template-columns:1fr 1fr;gap:14px;overflow:auto;padding-right:4px}
    @media (max-width:860px){.modal-body{grid-template-columns:1fr}}
    .listbox{display:grid;gap:8px;max-height:50vh;overflow:auto;padding-right:4px}
    .list-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;border:1px solid color-mix(in srgb,var(--divider-color,#ccc) 70%,transparent);background:color-mix(in srgb,var(--card-background-color,#fff) 76%,transparent)}
    .list-item input{width:18px;height:18px}
    .modal-footer{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center}
    .search{display:flex;gap:10px;align-items:center}
    .search input{min-width:min(420px,100%)}
    .pin-modal .modal{max-width:340px;min-height:unset;grid-template-rows:auto auto auto}
    .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:14px;border-radius:12px;border:2px solid var(--primary-color,#03a9f4);background:transparent;color:inherit;width:100%;outline:none;transition:border-color .2s}
    .pin-input:focus{border-color:color-mix(in srgb,var(--primary-color,#03a9f4) 70%,#000)}
    .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}
  </style>
  <div class="wrap">
    <div class="glass hero">
      <div class="hero-icon">🛡️</div>
      <div>
        <h1>Argus Home Hub</h1>
        <p>Control de alarmas, modos, horarios, TTS y automatizaciones.</p>
      </div>
    </div>
    <div class="grid">
      <section class="glass panel">
        <h2>Instancias activas</h2>
        <div id="entries"></div>
        <div style="margin-top:24px">
          <h2>Zonas globales</h2>
          <p class="meta" style="margin-bottom:12px">Define zonas personalizadas en JSON.</p>
          <textarea id="zones" spellcheck="false" placeholder='[{"name":"Sala","entities":["binary_sensor.puerta_principal"]}]'></textarea>
          <div class="save-row"><button class="primary" id="btn-save-zones">💾 Guardar zonas</button><span class="status" id="status-zones"></span></div>
        </div>
      </section>
      <section class="glass panel">
        <h2>Modos</h2>
        <div class="tabs" id="mode-tabs"></div>
        <div id="mode-view"></div>
      </section>
    </div>
    <section class="glass panel" id="homekit-section" style="display:none">
      <h2>🏠 HomeKit &amp; Matter</h2>
      <div id="homekit-content"></div>
    </section>
    <section class="glass panel" id="security-section">
      <h2>🔐 Seguridad</h2>
      <div id="security-content"></div>
    </section>
  </div>
  <div class="modal-backdrop" id="selector-modal" aria-hidden="true">
    <div class="modal">
      <div class="modal-head">
        <h3 id="selector-title">Seleccionar dispositivos</h3>
        <button class="ghost" id="selector-close">Cerrar</button>
      </div>
      <div class="search"><input id="selector-search" type="text" placeholder="Buscar por nombre, área o entity_id"></div>
      <div class="modal-body">
        <div>
          <div class="subsection-title" style="margin-bottom:8px">Disponibles</div>
          <div class="listbox" id="selector-list"></div>
        </div>
        <div>
          <div class="subsection-title" style="margin-bottom:8px">Seleccionadas</div>
          <div class="listbox" id="selector-selected"></div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="small" id="selector-count">0 seleccionadas</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="ghost" id="selector-clear">Limpiar</button><button class="primary" id="selector-accept">Aceptar</button></div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop pin-modal" id="pin-modal" aria-hidden="true">
    <div class="modal">
      <div class="modal-head"><h3>🔒 Introduce PIN</h3><button class="ghost" id="pin-close">✕</button></div>
      <div style="display:grid;gap:10px">
        <p class="small" style="text-align:center;margin:0">Introduce el PIN numérico para desarmar Argus</p>
        <input id="pin-input" class="pin-input" type="password" inputmode="numeric" pattern="[0-9]*" placeholder="••••" autocomplete="off">
        <div id="pin-error" class="pin-error"></div>
      </div>
      <div class="modal-footer">
        <button class="ghost" id="pin-cancel">Cancelar</button>
        <button class="primary" id="pin-confirm">✓ Confirmar</button>
      </div>
    </div>
  </div>
`;

class ArgusPanel extends HTMLElement {
  constructor() { super(); this.attachShadow({mode:'open'}).appendChild(template.content.cloneNode(true)); this._wsId = 1; this._socket = null; this._dashboard = null; this._ui = null; this._available = []; this._mode = 'home'; this._selected = []; this._selectorTarget = null; this._authOk = false; this._hass = null; this._prevStates = {}; }
  set hass(hass) {
    this._hass = hass;
    if (!this._dashboard?.entries?.length) return;
    const changed = this._dashboard.entries.some(e => e.entity_id && this._prevStates[e.entity_id] !== hass.states[e.entity_id]?.state);
    if (changed) {
      this._dashboard.entries.forEach(e => { if (e.entity_id) this._prevStates[e.entity_id] = hass.states[e.entity_id]?.state; });
      this._renderEntries();
    }
  }
  get hass() { return this._hass; }
  connectedCallback() { this._init(); }
  async _init() {
    this._bindStatic();
    await this._connect();
    await this._load();
  }
  _bindStatic() {
    this.shadowRoot.getElementById('selector-close').addEventListener('click', ()=>this._closeModal());
    this.shadowRoot.getElementById('selector-accept').addEventListener('click', ()=>this._acceptSelection());
    this.shadowRoot.getElementById('selector-clear').addEventListener('click', ()=>{ this._selected = []; this._renderSelector(); });
    this.shadowRoot.getElementById('selector-search').addEventListener('input', ()=>this._renderSelector());
    this.shadowRoot.getElementById('selector-modal').addEventListener('click', (e)=>{ if(e.target.id==='selector-modal') this._closeModal(); });
    this.shadowRoot.getElementById('btn-save-zones')?.addEventListener('click', ()=>this._saveZones());
    this.shadowRoot.getElementById('pin-close').addEventListener('click', ()=>this._closePinModal());
    this.shadowRoot.getElementById('pin-cancel').addEventListener('click', ()=>this._closePinModal());
    this.shadowRoot.getElementById('pin-modal').addEventListener('click', (e)=>{ if(e.target.id==='pin-modal') this._closePinModal(); });
    this.shadowRoot.getElementById('pin-confirm').addEventListener('click', ()=>this._submitPin());
    this.shadowRoot.getElementById('pin-input').addEventListener('keydown', (e)=>{ if(e.key==='Enter') this._submitPin(); });
  }
  _closePinModal() {
    const m = this.shadowRoot.getElementById('pin-modal');
    if (m) { m.classList.remove('open'); m.setAttribute('aria-hidden','true'); }
    this._pinCallback = null;
  }
  _showPinModal(onConfirm) {
    const m = this.shadowRoot.getElementById('pin-modal');
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    if (!m || !inp) return;
    inp.value = '';
    if (err) err.textContent = '';
    this._pinCallback = onConfirm;
    m.classList.add('open');
    m.setAttribute('aria-hidden','false');
    setTimeout(() => inp.focus(), 60);
  }
  _submitPin() {
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    const pin = inp ? inp.value.trim() : '';
    if (!pin) { if(err) err.textContent = '⚠️ Introduce el PIN'; return; }
    const cb = this._pinCallback;
    this._closePinModal();
    if (cb) cb(pin);
  }
  _connect() {
    return new Promise((resolve, reject) => {
      const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      this._pending = {};
      this._socket = new WebSocket(`${proto}://${location.host}/api/websocket`);
      this._socket.addEventListener('message', (ev) => {
        const msg = JSON.parse(ev.data);
        if (msg.type === 'auth_required') {
          const token = this.hass?.auth?.data?.access_token;
          if (!token) { reject(new Error('No HA auth token available')); return; }
          this._socket.send(JSON.stringify({ type: 'auth', access_token: token }));
          return;
        }
        if (msg.type === 'auth_ok') {
          this._authOk = true;
          resolve();
          return;
        }
        if (msg.type === 'auth_invalid') {
          reject(new Error('HA websocket auth invalid'));
          return;
        }
        if (msg.type === 'result' && this._pending?.[msg.id]) {
          this._pending[msg.id](msg.result ?? msg);
          delete this._pending[msg.id];
        }
      });
      this._socket.addEventListener('error', reject, { once: true });
    });
  }
  _send(type, data={}) {
    const id = this._wsId++;
    return new Promise((resolve, reject) => {
      this._pending[id] = (result) => {
        if (result && result.success === false) reject(new Error(result.error?.message || 'Request failed'));
        else resolve(result);
      };
      this._socket.send(JSON.stringify({ id, type, ...data }));
      setTimeout(()=>{ if (this._pending[id]) { delete this._pending[id]; reject(new Error('timeout')); } }, 10000);
    });
  }
  async _load() {
    const dashboard = await this._send('argus/dashboard');
    this._dashboard = dashboard;
    this._available = dashboard.available_entities || [];
    this._ui = dashboard.ui || { modes: {}, zones: [], dashboard: {} };
    this._renderEntries();
    this._renderModeTabs();
    this._renderModeView();
    this.shadowRoot.getElementById('zones').value = JSON.stringify(this._ui.zones || [], null, 2);
    this._renderHomeKit();
  }
  async _renderHomeKit() {
    const sec = this.shadowRoot.getElementById('homekit-section');
    const cnt = this.shadowRoot.getElementById('homekit-content');
    if (!sec || !cnt) return;
    sec.style.display = '';
    let code = null;
    try {
      // Try persistent_notification from HA HomeKit integration
      const notifs = Object.values(this.hass?.states || {}).filter(s => s.entity_id.startsWith('persistent_notification.') && (s.attributes?.message||'').toLowerCase().includes('homekit'));
      for (const n of notifs) {
        const m = (n.attributes?.message||'').match(/(\d{3}-\d{2}-\d{3}|\d{8})/);
        if (m) { code = m[1].replace(/-/g,''); break; }
      }
      // Try config entries
      if (!code) {
        const entries = await this.hass.callWS({type:'config_entries/get',domain:'homekit'}).catch(()=>[]);
        for (const ent of (entries||[])) { const c=ent.options?.code||ent.data?.code; if(c){code=String(c).replace(/[^0-9]/g,'');break;} }
      }
    } catch(e) {}
    if (code && code.length >= 8) {
      const fmt = code.replace(/(\d{3})(\d{2})(\d{3})/,'$1-$2-$3');
      cnt.innerHTML = `
        <div style="display:grid;gap:16px;justify-items:center;padding:8px 0">
          <p class="meta" style="text-align:center">Abre <strong>Casa</strong> en tu iPhone → Agregar accesorio → Escanear código o introducir manualmente.</p>
          <canvas id="hk-qr"></canvas>
          <div style="font-size:28px;font-weight:900;letter-spacing:6px;font-family:monospace;padding:10px 20px;border-radius:12px;background:color-mix(in srgb,var(--primary-color,#03a9f4) 8%,var(--card-background-color,#fff));border:2px dashed color-mix(in srgb,var(--primary-color,#03a9f4) 35%,transparent)">${fmt}</div>
          <div class="small">Categoría: Security System (11) · Protocolo: IP</div>
        </div>`;
      this._drawHomeKitQR(code);
    } else {
      cnt.innerHTML = `
        <div style="display:grid;gap:12px">
          <p class="meta">Para vincular Argus con Apple HomeKit, activa <strong>HomeKit Bridge</strong> en Home Assistant e incluye la entidad <code>alarm_control_panel.argus_alarm</code>.</p>
          <div style="padding:12px;border-radius:10px;background:color-mix(in srgb,var(--primary-color,#03a9f4) 7%,transparent);font-size:12px">
            <strong>Pasos:</strong><br>1. HA → Configuración → Integraciones → Agregar → <em>HomeKit Bridge</em><br>2. Incluye la entidad de Argus<br>3. Escanea el QR que aparece en las Notificaciones de HA
          </div>
        </div>`;
    }
  }
  async _drawHomeKitQR(code8) {
    try {
      if (!window.QRCode) await new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s);});
      const cat=11,flags=4;
      const payload=BigInt(cat)*BigInt(0x100000000)+BigInt(parseInt(code8)*16+flags);
      const uri='X-HM://'+payload.toString(36).toUpperCase().padStart(9,'0');
      const canvas=this.shadowRoot.getElementById('hk-qr');
      if(canvas&&window.QRCode) QRCode.toCanvas(canvas,uri,{width:180,margin:2,color:{dark:'#000000',light:'#ffffff'}});
    } catch(e){ const c=this.shadowRoot.getElementById('hk-qr'); if(c) c.style.display='none'; }
  }
  async _saveZones() {
    const status = this.shadowRoot.getElementById('status-zones');
    try {
      const zones = JSON.parse(this.shadowRoot.getElementById('zones').value || '[]');
      await this._send('argus/save_ui', { zones, dashboard: this._ui.dashboard || {} });
      status.textContent = 'Zonas guardadas';
      status.className = 'status ok';
    } catch (err) {
      status.textContent = `Error: ${err.message}`;
      status.className = 'status err';
    }
  }
  _renderEntries() {
    const el = this.shadowRoot.getElementById('entries');
    const entries = this._dashboard?.entries || [];
    if (!entries.length) { el.innerHTML = '<div class="empty"><strong>No hay instancias</strong><span>Agrega una desde Configuración → Integraciones → Argus.</span></div>'; return; }
    const LABELS = { disarmed:'🟢 Desarmado', armed_home:'🏠 Casa activo', armed_away:'🔴 Ausente activo', armed_night:'🌙 Noche activo', armed_vacation:'✈️ Vacaciones activo', arming:'⏳ Armando...', pending:'⏰ Cuenta regresiva', triggered:'🚨 ALARMA', unavailable:'⚠️ No disponible' };
    el.innerHTML = entries.map((e, idx) => {
      const live = this.hass?.states[e.entity_id]?.state;
      const state = live || e.state || 'unavailable';
      const isUnavailable = !e.entity_id || (!live && state === 'unavailable');
      const label = LABELS[state] || state.replaceAll('_',' ');
      const modeKey = state.replace('armed_','');
      const sensors = this._ui?.modes?.[modeKey]?.sensors || [];
      const sirens  = this._ui?.modes?.[modeKey]?.sirens  || [];
      const openSensors = sensors.filter(s => this.hass?.states[s]?.state === 'on');
      const triggered = state === 'triggered';
      const isArmed = state.startsWith('armed_');
      const sensorLine = sensors.length ? `${sensors.length} sensor${sensors.length>1?'es':''} · ${openSensors.length>0 ? '⚠️ '+openSensors.length+' abierto'+(openSensors.length>1?'s':'') : '✅ todos cerrados'} · ${sirens.length} sirena${sirens.length!==1?'s':''}` : 'Sin sensores configurados';
      const actionBtns = isUnavailable
        ? `<div class="unavailable-notice">⚠️ El platform <code>alarm_control_panel</code> no cargó. Ejecuta <code>ha core restart</code> en el Terminal de HA.</div>`
        : `<div class="actions">
             <button class="${state==='armed_home'?'primary':'ghost'}" data-idx="${idx}" data-action="home">🏠 Casa</button>
             <button class="${state==='armed_away'?'primary':'ghost'}" data-idx="${idx}" data-action="away">🔴 Ausente</button>
             <button class="${state==='armed_night'?'primary':'ghost'}" data-idx="${idx}" data-action="night">🌙 Noche</button>
             <button class="${state==='armed_vacation'?'primary':'ghost'}" data-idx="${idx}" data-action="vacation">✈️ Vacaciones</button>
             <button class="danger" data-idx="${idx}" data-action="disarm">🔓 Desarmar</button>
           </div>`;
      return `<article class="entry" style="${triggered?'border-color:var(--error-color,#e53935);background:rgba(229,57,53,.06)':''}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div><div class="entry-title">${e.title||'Argus'}</div><div class="badge ${state}" style="margin-top:5px;font-size:13px;padding:5px 13px">${label}</div></div>
          ${triggered?'<div style="font-size:32px">🚨</div>':''}
        </div>
        <div class="meta" style="margin-top:4px">${e.entity_id||'sin entidad'}</div>
        ${isArmed&&!isUnavailable?`<div class="meta">${sensorLine}</div>`:''}
        ${actionBtns}
      </article>`;
    }).join('');
    el.querySelectorAll('button[data-action]').forEach(btn => btn.addEventListener('click', (ev)=>this._handleAction(ev.currentTarget.dataset.idx, ev.currentTarget.dataset.action)));
  }
  _renderModeTabs() {
    const tabs = this.shadowRoot.getElementById('mode-tabs');
    const modes = ['home','away','night','vacation'];
    tabs.innerHTML = modes.map(m => `<div class="tab ${m===this._mode?'active':''}" data-mode="${m}">${m[0].toUpperCase()+m.slice(1)}</div>`).join('');
    tabs.querySelectorAll('.tab').forEach(t => t.addEventListener('click', ()=>{ this._mode = t.dataset.mode; this._renderModeTabs(); this._renderModeView(); }));
  }
  _currentModeConfig() { const modes = this._ui?.modes || {}; return modes[this._mode] || {}; }
  _renderModeView() {
    const cfg = this._currentModeConfig();
    const el = this.shadowRoot.getElementById('mode-view');
    const sensors = cfg.sensors || [];
    const sirens = cfg.sirens || [];
    const days = cfg.days || [];
    el.innerHTML = `
      <div class="stack">
        <div class="subsection">
          <div class="subsection-title">Sensores de intrusión</div>
          <div class="chip-list" id="sensor-chips">${sensors.map(x=>this._chip(x,'sensor')).join('') || '<span class="small">Ninguno seleccionado</span>'}</div>
          <div class="small">Usa el buscador, selecciona y pulsa Aceptar.</div>
          <div><button class="ghost" data-open-selector="sensor">Buscar y seleccionar</button></div>
        </div>
        <div class="subsection">
          <div class="subsection-title">Sirenas vinculadas</div>
          <div class="chip-list" id="siren-chips">${sirens.map(x=>this._chip(x,'siren')).join('') || '<span class="small">Ninguna seleccionada</span>'}</div>
          <div class="small">Puedes escoger múltiples sirenas y confirmar al final.</div>
          <div><button class="ghost" data-open-selector="siren">Buscar y seleccionar</button></div>
        </div>
        <div class="subsection">
          <div class="subsection-title">Horarios de activación</div>
          <div class="days-row">${['L','M','X','J','V','S','D'].map((d,i)=>`<button class="day-btn ${days.includes(i)?'sel':''}" data-day="${i}">${d}</button>`).join('')}</div>
          <div class="two-col"><div class="field-group"><label>Hora activar</label><input id="arm-time" type="time" value="${cfg.arm_time || ''}"></div><div class="field-group"><label>Hora desactivar</label><input id="disarm-time" type="time" value="${cfg.disarm_time || ''}"></div></div>
          <label class="checkbox-label"><input id="auto-schedule" type="checkbox" ${cfg.auto_schedule ? 'checked' : ''}> Activar horario automático</label>
        </div>
      </div>
      <div class="save-row" style="margin-top:14px"><button class="primary" id="save-mode">💾 Guardar modo</button><span class="status" id="mode-status"></span></div>
    `;
    el.querySelectorAll('[data-day]').forEach(btn => btn.addEventListener('click', ()=>btn.classList.toggle('sel')));
    el.querySelectorAll('[data-open-selector]').forEach(btn => btn.addEventListener('click', ()=>this._openModal(btn.dataset.openSelector)));
    el.querySelectorAll('[data-remove]').forEach(btn => btn.addEventListener('click', ()=>this._removeChip(btn.dataset.remove)));
    el.querySelector('#save-mode').addEventListener('click', ()=>this._saveMode());
  }
  _chip(entityId, type) { return `<span class="chip">${entityId}<button title="Quitar" data-remove="${type}:${entityId}">✕</button></span>`; }
  _removeChip(value) {
    const [type, entityId] = value.split(':');
    const cfg = this._currentModeConfig();
    const key = type === 'sensor' ? 'sensors' : 'sirens';
    const next = { ...cfg, [key]: (cfg[key] || []).filter(v => v !== entityId) };
    this._ui.modes[this._mode] = next;
    this._renderModeView();
  }
  _openModal(type) {
    this._selectorTarget = type;
    const cfg = this._currentModeConfig();
    this._selected = [...(cfg[type === 'sensor' ? 'sensors' : 'sirens'] || [])];
    this.shadowRoot.getElementById('selector-title').textContent = type === 'sensor' ? 'Seleccionar sensores de intrusión' : 'Seleccionar sirenas vinculadas';
    this.shadowRoot.getElementById('selector-search').value = '';
    this._renderSelector();
    this.shadowRoot.getElementById('selector-modal').classList.add('open');
    this.shadowRoot.getElementById('selector-modal').setAttribute('aria-hidden', 'false');
  }
  _closeModal() { this.shadowRoot.getElementById('selector-modal').classList.remove('open'); this.shadowRoot.getElementById('selector-modal').setAttribute('aria-hidden', 'true'); }
  _renderSelector() {
    const q = (this.shadowRoot.getElementById('selector-search').value || '').toLowerCase().trim();
    const list = this.shadowRoot.getElementById('selector-list');
    const selected = this.shadowRoot.getElementById('selector-selected');
    const allowedDomains = this._selectorTarget === 'sensor' ? ['binary_sensor','sensor'] : ['siren','switch'];
    const items = this._available.filter(x => allowedDomains.includes(x.domain)).filter(x => !q || [x.entity_id, x.name, x.area, x.friendly_name].filter(Boolean).join(' ').toLowerCase().includes(q));
    list.innerHTML = items.map(x => `<label class="list-item"><input type="checkbox" data-entity="${x.entity_id}" ${this._selected.includes(x.entity_id)?'checked':''}><div><div style="font-weight:700">${x.name || x.entity_id}</div><div class="small">${x.entity_id}${x.area ? ' · '+x.area : ''}</div></div></label>`).join('') || '<div class="small">Sin resultados</div>';
    list.querySelectorAll('input[type=checkbox]').forEach(cb => cb.addEventListener('change', (e)=>{ const id=e.target.dataset.entity; if(e.target.checked){ if(!this._selected.includes(id)) this._selected.push(id); } else { this._selected = this._selected.filter(v=>v!==id); } this._renderSelector(); }));
    selected.innerHTML = this._selected.map(id => `<div class="list-item" style="justify-content:space-between"><div>${id}</div><button class="ghost" data-remove-selected="${id}">Quitar</button></div>`).join('') || '<div class="small">Aún no hay selecciones</div>';
    selected.querySelectorAll('[data-remove-selected]').forEach(b => b.addEventListener('click', ()=>{ this._selected = this._selected.filter(v => v !== b.dataset.removeSelected); this._renderSelector(); }));
    this.shadowRoot.getElementById('selector-count').textContent = `${this._selected.length} seleccionadas`;
  }
  _acceptSelection() {
    const cfg = this._currentModeConfig();
    const modes = this._ui.modes || {};
    const next = { ...cfg };
    if (this._selectorTarget === 'sensor') next.sensors = [...this._selected];
    if (this._selectorTarget === 'siren') next.sirens = [...this._selected];
    modes[this._mode] = next;
    this._ui.modes = modes;
    this._closeModal();
    this._renderModeView();
  }
  async _saveMode() {
    const cfg = this._currentModeConfig();
    const days = [...this.shadowRoot.querySelectorAll('[data-day].sel')].map(b => Number(b.dataset.day));
    const payload = { ...cfg, days, arm_time: this.shadowRoot.getElementById('arm-time').value, disarm_time: this.shadowRoot.getElementById('disarm-time').value, auto_schedule: this.shadowRoot.getElementById('auto-schedule').checked };
    this._ui.modes[this._mode] = payload;
    const status = this.shadowRoot.getElementById('mode-status');
    try {
      await this._send('argus/save_mode_config', { mode: this._mode, config: payload });
      status.textContent = 'Guardado';
      status.className = 'status ok';
    } catch (err) {
      status.textContent = `Error: ${err.message}`;
      status.className = 'status err';
    }
  }
  async _handleAction(idx, action) {
    const e = this._dashboard.entries[Number(idx)];
    if (!e || !e.entity_id || !this.hass) return;
    const live = this.hass.states[e.entity_id];
    if (!live || live.state === 'unavailable') return;
    const serviceMap = {
      home: 'alarm_arm_home',
      away: 'alarm_arm_away',
      night: 'alarm_arm_night',
      vacation: 'alarm_arm_vacation',
      disarm: 'alarm_disarm',
    };
    const service = serviceMap[action];
    if (!service) return;
    // Disarm: require PIN if code_format is set on the entity
    if (action === 'disarm' && live.attributes?.code_format) {
      this._showPinModal(async (pin) => {
        try {
          await this.hass.callService('alarm_control_panel', 'alarm_disarm', { entity_id: e.entity_id, code: pin });
          setTimeout(() => this._load().catch(()=>{}), 800);
        } catch (err) {
          const errEl = this.shadowRoot.getElementById('pin-error');
          // Re-open modal with error if still failed
          console.error('Argus disarm+PIN error:', err);
        }
      });
      return;
    }
    try {
      await this.hass.callService('alarm_control_panel', service, { entity_id: e.entity_id });
      setTimeout(() => this._load().catch(()=>{}), 800);
    } catch (err) {
      console.error('Argus action failed', err);
    }
  }
}
customElements.define('argus-panel', ArgusPanel);
