/**
 * Argus Panel 0.3.2
 * Custom panel registered in the Home Assistant sidebar.
 * Communicates with the backend via websocket: argus/dashboard and argus/save_ui.
 */
const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display: block;
      color: var(--primary-text-color);
      background: var(--lovelace-background, var(--primary-background-color));
      min-height: 100vh;
      box-sizing: border-box;
      font-family: Inter, system-ui, sans-serif;
    }
    * { box-sizing: border-box; }
    .wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 28px 24px;
      display: grid;
      gap: 20px;
    }
    .glass {
      background: color-mix(in srgb, var(--card-background-color, #fff) 82%, transparent);
      border: 1px solid color-mix(in srgb, var(--divider-color, #ccc) 50%, transparent);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,.10);
      backdrop-filter: blur(18px) saturate(1.4);
      -webkit-backdrop-filter: blur(18px) saturate(1.4);
    }
    .hero { padding: 28px 28px 24px; display: flex; align-items: center; gap: 18px; }
    .hero-icon { font-size: 42px; line-height: 1; }
    .hero h1 { margin: 0 0 4px; font-size: 26px; font-weight: 700; }
    .hero p { margin: 0; font-size: 14px; opacity: .65; }
    .grid-2 { display: grid; gap: 20px; grid-template-columns: 1.3fr 1fr; }
    .panel { padding: 22px; }
    .panel h2 { margin: 0 0 16px; font-size: 16px; font-weight: 600; opacity: .75; letter-spacing: .04em; text-transform: uppercase; }
    .entry {
      padding: 16px;
      border-radius: 14px;
      display: grid;
      gap: 10px;
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 6%, var(--card-background-color, #fff));
      border: 1px solid color-mix(in srgb, var(--primary-color, #03a9f4) 15%, transparent);
      margin-bottom: 12px;
    }
    .entry:last-child { margin-bottom: 0; }
    .entry-title { font-size: 17px; font-weight: 700; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: .06em;
      text-transform: uppercase;
      background: rgba(3,169,244,.13);
      color: var(--primary-color, #03a9f4);
    }
    .badge.armed_away, .badge.armed_vacation { background: rgba(229,57,53,.12); color: var(--error-color, #e53935); }
    .badge.armed_home, .badge.armed_night { background: rgba(251,140,0,.12); color: #fb8c00; }
    .badge.disarmed { background: rgba(67,160,71,.12); color: var(--success-color, #43a047); }
    .badge.triggered { background: rgba(229,57,53,.22); color: var(--error-color, #e53935); }
    .meta { font-size: 12px; opacity: .55; }
    .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
    button {
      border: 0;
      border-radius: 12px;
      padding: 9px 16px;
      font: 600 13px/1 Inter, system-ui, sans-serif;
      cursor: pointer;
      transition: opacity .15s, transform .1s;
    }
    button:active { transform: scale(.96); }
    button.primary { background: var(--primary-color, #03a9f4); color: #fff; }
    button.ghost {
      background: color-mix(in srgb, var(--card-background-color, #fff) 60%, var(--primary-color, #03a9f4) 12%);
      color: var(--primary-text-color);
    }
    button.danger { background: rgba(229,57,53,.12); color: var(--error-color, #e53935); }
    button:hover { opacity: .85; }
    .empty {
      text-align: center;
      padding: 32px 16px;
      opacity: .55;
      font-size: 14px;
      display: grid;
      gap: 8px;
    }
    .empty strong { font-size: 16px; opacity: 1; }
    textarea {
      width: 100%;
      min-height: 240px;
      resize: vertical;
      border-radius: 14px;
      padding: 14px;
      border: 1px solid var(--divider-color, #ccc);
      background: color-mix(in srgb, var(--card-background-color, #fff) 70%, transparent);
      color: var(--primary-text-color);
      font: 12.5px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
      outline: none;
      transition: border-color .2s;
    }
    textarea:focus { border-color: var(--primary-color, #03a9f4); }
    .save-row { display: flex; gap: 10px; margin-top: 12px; align-items: center; }
    .status { font-size: 13px; flex: 1; }
    .status.ok { color: var(--success-color, #43a047); }
    .status.err { color: var(--error-color, #e53935); }
    .chips-wrap { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 4px; }
    .chip {
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 11.5px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 55%, var(--primary-color, #03a9f4) 8%);
      border: 1px solid color-mix(in srgb, var(--divider-color, #ccc) 60%, transparent);
      cursor: default;
    }
    .chip:hover { opacity: .8; }
    .section-full { grid-column: 1 / -1; }
    .tabs {
      display: flex;
      gap: 5px;
      margin-bottom: 20px;
      padding: 5px;
      background: color-mix(in srgb, var(--card-background-color, #fff) 40%, transparent);
      border-radius: 14px;
      border: 1px solid color-mix(in srgb, var(--divider-color, #ccc) 30%, transparent);
    }
    .tab {
      flex: 1;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      transition: all .2s;
    }
    .tab.active {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      box-shadow: 0 4px 12px rgba(3,169,244,.25);
    }
    .tab:not(.active):hover {
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 10%, transparent);
    }
    .config-grid {
      display: grid;
      gap: 16px;
    }
    .field-group {
      display: grid;
      gap: 8px;
    }
    .field-group label {
      font-size: 12px;
      font-weight: 700;
      opacity: .6;
      text-transform: uppercase;
      letter-spacing: .05em;
    }
    select[multiple] {
      width: 100%;
      border-radius: 12px;
      border: 1px solid var(--divider-color, #ccc);
      background: color-mix(in srgb, var(--card-background-color, #fff) 50%, transparent);
      color: var(--primary-text-color);
      padding: 8px;
      min-height: 120px;
    }
    .slider-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .slider-row input { flex: 1; }
    .slider-row span { font-size: 13px; font-weight: 600; width: 40px; text-align: right; }
  </style>
  <div class="wrap">
    <div class="glass hero">
      <div class="hero-icon">🛡️</div>
      <div>
        <h1>Argus</h1>
        <p>Panel de seguridad inteligente para Home Assistant · v0.3.0</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="glass panel">
        <h2>Instancias activas</h2>
        <div id="entries"></div>
        
        <div style="margin-top: 24px;">
           <h2>Zonas globales</h2>
           <p class="meta" style="margin-bottom:12px;">Define zonas personalizadas en JSON.</p>
           <textarea id="zones" style="min-height: 120px;" spellcheck="false" placeholder='[{"name":"Sala","entities":["binary_sensor.puerta_principal"]}]'></textarea>
           <div class="save-row">
             <button class="primary" id="btn-save-zones">💾 Guardar zonas</button>
             <span class="status" id="status-zones"></span>
           </div>
        </div>
      </div>

      <div class="glass panel">
        <h2>Configuración de Modos</h2>
        <div class="tabs">
          <div class="tab active" data-mode="home">Casa</div>
          <div class="tab" data-mode="away">Ausente</div>
          <div class="tab" data-mode="night">Noche</div>
          <div class="tab" data-mode="vacation">Vacaciones</div>
        </div>
        
        <div id="mode-config" class="config-grid">
          <div class="field-group">
            <label>Sensores de intrusión</label>
            <select id="mode-sensors" multiple></select>
          </div>
          
          <div class="field-group">
            <label>Sirenas vinculadas</label>
            <select id="mode-sirens" multiple></select>
          </div>

          <div class="field-group">
            <label>Retrasos (segundos)</label>
            <div class="slider-row">
              <label style="width: 80px; text-transform:none; font-weight:500; opacity: 1;">Entrada</label>
              <input type="range" id="delay-entry" min="0" max="180" step="5">
              <span id="val-entry">30</span>
            </div>
            <div class="slider-row">
              <label style="width: 80px; text-transform:none; font-weight:500; opacity: 1;">Salida</label>
              <input type="range" id="delay-exit" min="0" max="180" step="5">
              <span id="val-exit">30</span>
            </div>
          </div>

          <div class="field-group">
            <label>Opciones</label>
            <div style="display:flex; gap: 15px;">
               <label style="display:flex; align-items:center; gap:8px; font-size:13px; text-transform:none; font-weight:500; opacity: 1;">
                 <input type="checkbox" id="opt-notify"> Notificaciones
               </label>
               <label style="display:flex; align-items:center; gap:8px; font-size:13px; text-transform:none; font-weight:500; opacity: 1;">
                 <input type="checkbox" id="opt-mqtt"> MQTT
               </label>
            </div>
          </div>

          <div class="save-row">
            <button class="primary" id="btn-save-mode">💾 Guardar modo</button>
            <span class="status" id="status-mode"></span>
          </div>
        </div>
      </div>

      <div class="glass panel section-full">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h2>Entidades disponibles</h2>
          <button class="ghost" id="btn-reload">↺ Actualizar</button>
        </div>
        <div id="chips" class="chips-wrap"></div>
      </div>
    </div>
  </div>
`;

class ArgusPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._hass = null;
    this._data = null;
    this._modesConfig = {};
    this._currentMode = "home";
    this._loading = false;
  }

  connectedCallback() {
    this._q("#btn-save-zones").addEventListener("click", () => this._saveZones());
    this._q("#btn-save-mode").addEventListener("click", () => this._saveMode());
    this._q("#btn-reload").addEventListener("click", () => this._load());
    this._q(".tabs").addEventListener("click", (e) => {
      const tab = e.target.closest(".tab");
      if (tab) this._setTab(tab.dataset.mode);
    });
    
    this._q("#delay-entry").addEventListener("input", (e) => this._q("#val-entry").textContent = e.target.value);
    this._q("#delay-exit").addEventListener("input", (e) => this._q("#val-exit").textContent = e.target.value);
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._loading && !this._data) this._load();
  }

  _q(sel) { return this.shadowRoot.querySelector(sel); }

  async _load() {
    if (!this._hass || this._loading) return;
    this._loading = true;
    try {
      const [dashboard, modes] = await Promise.all([
        this._hass.callWS({ type: "argus/dashboard" }),
        this._hass.callWS({ type: "argus/get_mode_config" })
      ]);
      this._data = dashboard;
      this._modesConfig = modes;
      this._render();
    } catch (err) {
      console.error(err);
    } finally {
      this._loading = false;
    }
  }

  async _saveZones() {
    try {
      const raw = this._q("#zones").value.trim() || "[]";
      const zones = JSON.parse(raw);
      const dashboard = this._data?.ui?.dashboard || {};
      await this._hass.callWS({ type: "argus/save_ui", zones, dashboard });
      this._status("#status-zones", "✓ Guardado");
      await this._load();
    } catch (err) {
      this._status("#status-zones", "Error: " + err.message, true);
    }
  }

  async _saveMode() {
    try {
      const config = {
        sensors: Array.from(this._q("#mode-sensors").selectedOptions).map(o => o.value),
        sirens: Array.from(this._q("#mode-sirens").selectedOptions).map(o => o.value),
        entry_delay: parseInt(this._q("#delay-entry").value),
        exit_delay: parseInt(this._q("#delay-exit").value),
        notify: this._q("#opt-notify").checked,
        mqtt_enabled: this._q("#opt-mqtt").checked,
      };
      await this._hass.callWS({ type: "argus/save_mode_config", mode: this._currentMode, config });
      this._status("#status-mode", "✓ Modo guardado");
      await this._load();
    } catch (err) {
      this._status("#status-mode", "Error: " + err.message, true);
    }
  }

  _status(sel, msg, isErr) {
    const el = this._q(sel);
    el.textContent = msg;
    el.className = "status " + (isErr ? "err" : "ok");
    setTimeout(() => { el.textContent = ""; }, 3000);
  }

  _setTab(mode) {
    this._currentMode = mode;
    this.shadowRoot.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.mode === mode));
    this._renderModeConfig();
  }

  _renderModeConfig() {
    const cfg = this._modesConfig[this._currentMode] || {};
    
    // Fill sensors select
    const sensorSelect = this._q("#mode-sensors");
    sensorSelect.innerHTML = "";
    const allSensors = (this._data?.available_entities || []).filter(e => e.domain === "binary_sensor");
    allSensors.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.entity_id;
      opt.textContent = `${s.name || s.entity_id} (${s.area || "Sin área"})`;
      opt.selected = (cfg.sensors || []).includes(s.entity_id);
      sensorSelect.appendChild(opt);
    });

    // Fill sirens
    const sirenSelect = this._q("#mode-sirens");
    sirenSelect.innerHTML = "";
    const allSirens = (this._data?.available_entities || []).filter(e => ["switch", "siren", "light"].includes(e.domain));
    allSirens.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.entity_id;
      opt.textContent = `${s.name || s.entity_id}`;
      opt.selected = (cfg.sirens || []).includes(s.entity_id);
      sirenSelect.appendChild(opt);
    });

    this._q("#delay-entry").value = cfg.entry_delay || 30;
    this._q("#val-entry").textContent = cfg.entry_delay || 30;
    this._q("#delay-exit").value = cfg.exit_delay || 30;
    this._q("#val-exit").textContent = cfg.exit_delay || 30;
    this._q("#opt-notify").checked = !!cfg.notify;
    this._q("#opt-mqtt").checked = !!cfg.mqtt_enabled;
  }

  _renderEntries() {
    const el = this._q("#entries");
    el.innerHTML = "";
    const entries = this._data?.entries || [];
    entries.forEach((e) => {
      const div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span class="entry-title">${e.title || "Argus"}</span>
          <span class="badge ${e.state}">${e.state || "unknown"}</span>
        </div>
        <div class="meta">${e.entity_id || "entidad pendiente"}</div>
        <div class="actions">
          <button class="primary" data-svc="alarm_arm_away">🔒 Away</button>
          <button class="ghost" data-svc="alarm_arm_home">🏠 Home</button>
          <button class="ghost" data-svc="alarm_arm_night">🌙 Night</button>
          <button class="ghost" data-svc="alarm_disarm">🔓 Disarm</button>
        </div>
      `;
      div.querySelectorAll("button").forEach(b => {
        b.onclick = () => this._hass.callService("alarm_control_panel", b.dataset.svc, { entity_id: e.entity_id });
      });
      el.appendChild(div);
    });
  }

  _render() {
    this._renderEntries();
    this._renderModeConfig();
    const zones = this._data?.ui?.zones || [];
    this._q("#zones").value = zones.length ? JSON.stringify(zones, null, 2) : "";
    
    const chips = this._q("#chips");
    chips.innerHTML = "";
    (this._data?.available_entities || []).slice(0, 50).forEach(e => {
       const span = document.createElement("span");
       span.className = "chip";
       span.textContent = e.entity_id;
       chips.appendChild(span);
    });
  }
}

customElements.define("argus-panel", ArgusPanel);
