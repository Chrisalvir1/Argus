/**
 * Argus Panel 0.4.0
 * Custom panel registered in the Home Assistant sidebar.
 * Communicates with the backend via websocket: argus/dashboard and argus/save_ui.
 *
 * Changelog 0.4.0:
 * - Modo config: multi-selección de dispositivos + sirenas mejorada
 * - Modo config: horarios de activación (días + horas)
 * - Modo config: TTS tester con selector de dispositivo AirPlay/Alexa/Google/Ecobee
 * - Modo config: opción "Crear automatización" al guardar
 * - Instancias activas: botones deshabilitados cuando state=unavailable, con aviso
 * - Hub: sección "Entidades disponibles" eliminada
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
    @media (max-width: 860px) { .grid-2 { grid-template-columns: 1fr; } }
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
    .badge.unavailable { background: rgba(120,120,120,.12); color: var(--secondary-text-color, #888); }
    .meta { font-size: 12px; opacity: .55; }
    .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
    .unavailable-notice {
      padding: 9px 12px;
      border-radius: 10px;
      background: rgba(120,120,120,.1);
      color: var(--secondary-text-color, #888);
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 7px;
    }
    button {
      border: 0;
      border-radius: 12px;
      padding: 9px 16px;
      font: 600 13px/1 Inter, system-ui, sans-serif;
      cursor: pointer;
      transition: opacity .15s, transform .1s;
    }
    button:active:not(:disabled) { transform: scale(.96); }
    button:disabled { opacity: .38; cursor: not-allowed; }
    button.primary { background: var(--primary-color, #03a9f4); color: #fff; }
    button.ghost {
      background: color-mix(in srgb, var(--card-background-color, #fff) 60%, var(--primary-color, #03a9f4) 12%);
      color: var(--primary-text-color);
    }
    button.danger { background: rgba(229,57,53,.12); color: var(--error-color, #e53935); }
    button.success { background: rgba(67,160,71,.13); color: var(--success-color, #43a047); }
    button:hover:not(:disabled) { opacity: .85; }
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
      min-height: 120px;
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
    .save-row { display: flex; gap: 10px; margin-top: 4px; align-items: center; flex-wrap: wrap; }
    .status { font-size: 13px; flex: 1; min-width: 100px; }
    .status.ok { color: var(--success-color, #43a047); }
    .status.err { color: var(--error-color, #e53935); }
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
      padding: 9px 6px;
      text-align: center;
      cursor: pointer;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      transition: all .2s;
      white-space: nowrap;
    }
    .tab.active {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      box-shadow: 0 4px 12px rgba(3,169,244,.25);
    }
    .tab:not(.active):hover {
      background: color-mix(in srgb, var(--primary-color, #03a9f4) 10%, transparent);
    }
    .config-grid { display: grid; gap: 14px; }
    .field-group { display: grid; gap: 6px; }
    .field-group > label {
      font-size: 11px;
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
      min-height: 110px;
      font-size: 13px;
      outline: none;
    }
    select[multiple]:focus { border-color: var(--primary-color, #03a9f4); }
    select:not([multiple]) {
      width: 100%;
      border-radius: 12px;
      border: 1px solid var(--divider-color, #ccc);
      background: color-mix(in srgb, var(--card-background-color, #fff) 50%, transparent);
      color: var(--primary-text-color);
      padding: 9px 12px;
      font-size: 13px;
      outline: none;
      transition: border-color .2s;
    }
    select:not([multiple]):focus { border-color: var(--primary-color, #03a9f4); }
    .slider-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .slider-row input[type="range"] { flex: 1; }
    .slider-row .val { font-size: 13px; font-weight: 600; width: 38px; text-align: right; }
    .slider-row .lbl { font-size: 13px; font-weight: 500; width: 68px; flex-shrink: 0; }
    input[type="text"], input[type="time"] {
      width: 100%;
      border-radius: 12px;
      border: 1px solid var(--divider-color, #ccc);
      background: color-mix(in srgb, var(--card-background-color, #fff) 50%, transparent);
      color: var(--primary-text-color);
      padding: 9px 12px;
      font-size: 13px;
      font-family: inherit;
      outline: none;
      transition: border-color .2s;
    }
    input[type="text"]:focus, input[type="time"]:focus { border-color: var(--primary-color, #03a9f4); }
    .subsection {
      background: color-mix(in srgb, var(--card-background-color, #fff) 35%, transparent);
      border: 1px solid color-mix(in srgb, var(--divider-color, #ccc) 45%, transparent);
      border-radius: 14px;
      padding: 14px;
      display: grid;
      gap: 12px;
    }
    .subsection-title {
      font-size: 11px;
      font-weight: 700;
      opacity: .65;
      text-transform: uppercase;
      letter-spacing: .05em;
      margin: 0 0 2px;
    }
    .days-row {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
    }
    .day-btn {
      padding: 6px 10px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      border: 1px solid color-mix(in srgb, var(--divider-color, #ccc) 70%, transparent);
      background: color-mix(in srgb, var(--card-background-color, #fff) 60%, transparent);
      color: var(--primary-text-color);
      transition: all .15s;
      user-select: none;
    }
    .day-btn.sel {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: transparent;
    }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      user-select: none;
    }
    .options-row { display: flex; gap: 14px; flex-wrap: wrap; }
  </style>

  <div class="wrap">
    <!-- Hero -->
    <div class="glass hero">
      <div class="hero-icon">🛡️</div>
      <div>
        <h1>Argus</h1>
        <p>Argus Home Hub · v0.4.0</p>
      </div>
    </div>

    <div class="grid-2">
      <!-- LEFT: Instancias + Zonas -->
      <div class="glass panel">
        <h2>Instancias activas</h2>
        <div id="entries"></div>

        <div style="margin-top: 24px;">
          <h2>Zonas globales</h2>
          <p class="meta" style="margin-bottom:12px;">Define zonas personalizadas en JSON.</p>
          <textarea id="zones" spellcheck="false" placeholder='[{"name":"Sala","entities":["binary_sensor.puerta_principal"]}]'></textarea>
          <div class="save-row">
            <button class="primary" id="btn-save-zones">💾 Guardar zonas</button>
            <span class="status" id="status-zones"></span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Configuración de Modos -->
      <div class="glass panel">
        <h2>Configuración de Modos</h2>
        <div class="tabs" id="mode-tabs">
          <div class="tab active" data-mode="home">🏠 Casa</div>
          <div class="tab" data-mode="away">🔒 Ausente</div>
          <div class="tab" data-mode="night">🌙 Noche</div>
          <div class="tab" data-mode="vacation">✈️ Vacaciones</div>
        </div>

        <div id="mode-config" class="config-grid">

          <!-- Sensores -->
          <div class="field-group">
            <label>Sensores de intrusión <span style="opacity:.5;font-weight:400;">(Ctrl/Cmd + clic para multiselección)</span></label>
            <select id="mode-sensors" multiple></select>
          </div>

          <!-- Sirenas -->
          <div class="field-group">
            <label>Sirenas vinculadas <span style="opacity:.5;font-weight:400;">(Ctrl/Cmd + clic para multiselección)</span></label>
            <select id="mode-sirens" multiple></select>
          </div>

          <!-- Retrasos -->
          <div class="field-group">
            <label>Retrasos (segundos)</label>
            <div class="slider-row">
              <span class="lbl">Entrada</span>
              <input type="range" id="delay-entry" min="0" max="180" step="5">
              <span class="val" id="val-entry">30</span>
            </div>
            <div class="slider-row">
              <span class="lbl">Salida</span>
              <input type="range" id="delay-exit" min="0" max="180" step="5">
              <span class="val" id="val-exit">30</span>
            </div>
          </div>

          <!-- Horario de activación -->
          <div class="subsection">
            <p class="subsection-title">⏰ Horario de activación automática</p>
            <div class="field-group">
              <label>Días activos</label>
              <div class="days-row" id="days-row">
                <span class="day-btn" data-day="mon">L</span>
                <span class="day-btn" data-day="tue">M</span>
                <span class="day-btn" data-day="wed">X</span>
                <span class="day-btn" data-day="thu">J</span>
                <span class="day-btn" data-day="fri">V</span>
                <span class="day-btn" data-day="sat">S</span>
                <span class="day-btn" data-day="sun">D</span>
              </div>
            </div>
            <div class="two-col">
              <div class="field-group">
                <label>Activar a las</label>
                <input type="time" id="sched-start">
              </div>
              <div class="field-group">
                <label>Desactivar a las</label>
                <input type="time" id="sched-end">
              </div>
            </div>
            <label class="checkbox-label">
              <input type="checkbox" id="sched-enabled">
              Activar horario automático
            </label>
          </div>

          <!-- TTS -->
          <div class="subsection">
            <p class="subsection-title">🔊 Notificación de voz (TTS)</p>
            <div class="field-group">
              <label>Mensaje de voz</label>
              <input type="text" id="tts-message" placeholder="Ej: Sistema activado en modo Casa">
            </div>
            <div class="two-col">
              <div class="field-group">
                <label>Dispositivo de audio</label>
                <select id="tts-device">
                  <option value="">— Seleccionar —</option>
                </select>
              </div>
              <div class="field-group">
                <label>Motor TTS</label>
                <select id="tts-engine">
                  <option value="tts.speak">HA Cloud TTS</option>
                  <option value="tts.google_translate_say">Google Translate</option>
                  <option value="tts.cloud_say">Nabu Casa Cloud</option>
                  <option value="notify">Notify (Alexa/Google)</option>
                </select>
              </div>
            </div>
            <div class="save-row">
              <button class="ghost" id="btn-tts-test">▶ Probar</button>
              <button class="success" id="btn-tts-save">💾 Guardar TTS</button>
              <span class="status" id="status-tts"></span>
            </div>
          </div>

          <!-- Opciones -->
          <div class="field-group">
            <label>Opciones</label>
            <div class="options-row">
              <label class="checkbox-label">
                <input type="checkbox" id="opt-notify"> Notificaciones push
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="opt-mqtt"> MQTT
              </label>
              <label class="checkbox-label">
                <input type="checkbox" id="opt-automation"> Crear automatización
              </label>
            </div>
          </div>

          <div class="save-row">
            <button class="primary" id="btn-save-mode">💾 Guardar modo</button>
            <span class="status" id="status-mode"></span>
          </div>
        </div>
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
    this._selectedDays = { home: [], away: [], night: [], vacation: [] };
  }

  connectedCallback() {
    this._q("#btn-save-zones").addEventListener("click", () => this._saveZones());
    this._q("#btn-save-mode").addEventListener("click", () => this._saveMode());
    this._q("#btn-tts-test").addEventListener("click", () => this._testTTS());
    this._q("#btn-tts-save").addEventListener("click", () => this._saveTTS());
    this._q("#mode-tabs").addEventListener("click", (e) => {
      const tab = e.target.closest(".tab");
      if (tab) this._setTab(tab.dataset.mode);
    });
    this._q("#delay-entry").addEventListener("input", (e) => {
      this._q("#val-entry").textContent = e.target.value;
    });
    this._q("#delay-exit").addEventListener("input", (e) => {
      this._q("#val-exit").textContent = e.target.value;
    });
    this._q("#days-row").addEventListener("click", (e) => {
      const btn = e.target.closest(".day-btn");
      if (!btn) return;
      const day = btn.dataset.day;
      const days = this._selectedDays[this._currentMode] || [];
      const idx = days.indexOf(day);
      if (idx === -1) days.push(day);
      else days.splice(idx, 1);
      this._selectedDays[this._currentMode] = days;
      btn.classList.toggle("sel", idx === -1);
    });
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
        this._hass.callWS({ type: "argus/get_mode_config" }).catch(() => ({}))
      ]);
      this._data = dashboard;
      this._modesConfig = modes || {};
      // Restore saved days from config
      ["home", "away", "night", "vacation"].forEach(m => {
        if (this._modesConfig[m]?.schedule?.days) {
          this._selectedDays[m] = [...this._modesConfig[m].schedule.days];
        }
      });
      this._render();
    } catch (err) {
      console.error("[Argus Panel] load error:", err);
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
      const days = this._selectedDays[this._currentMode] || [];
      const config = {
        sensors: Array.from(this._q("#mode-sensors").selectedOptions).map(o => o.value),
        sirens: Array.from(this._q("#mode-sirens").selectedOptions).map(o => o.value),
        entry_delay: parseInt(this._q("#delay-entry").value),
        exit_delay: parseInt(this._q("#delay-exit").value),
        notify: this._q("#opt-notify").checked,
        mqtt_enabled: this._q("#opt-mqtt").checked,
        create_automation: this._q("#opt-automation").checked,
        schedule: {
          enabled: this._q("#sched-enabled").checked,
          days,
          start: this._q("#sched-start").value,
          end: this._q("#sched-end").value,
        },
        tts: {
          message: this._q("#tts-message").value,
          device: this._q("#tts-device").value,
          engine: this._q("#tts-engine").value,
        },
      };
      await this._hass.callWS({
        type: "argus/save_mode_config",
        mode: this._currentMode,
        config
      });
      // Si "crear automatización" está marcado, disparar creación
      if (config.create_automation) {
        try {
          await this._hass.callWS({
            type: "argus/create_mode_automation",
            mode: this._currentMode,
            config
          });
        } catch (autoErr) {
          console.warn("[Argus] create_automation not supported yet:", autoErr);
        }
      }
      this._status("#status-mode", "✓ Modo guardado");
      await this._load();
    } catch (err) {
      this._status("#status-mode", "Error: " + err.message, true);
    }
  }

  async _testTTS() {
    const message = this._q("#tts-message").value.trim();
    const device = this._q("#tts-device").value;
    const engine = this._q("#tts-engine").value;
    if (!message) {
      this._status("#status-tts", "⚠ Escribe un mensaje primero", true);
      return;
    }
    if (!device) {
      this._status("#status-tts", "⚠ Selecciona un dispositivo", true);
      return;
    }
    try {
      if (engine === "notify") {
        // Para Alexa/Google usa notify
        const svcName = device.replace("media_player.", "").replace(/\./g, "_");
        await this._hass.callService("notify", svcName, { message });
      } else {
        // tts.speak compatible con HA Cloud, Google, Nabu Casa
        await this._hass.callService("tts", "speak", {
          entity_id: engine === "tts.speak" ? "tts.home_assistant_cloud" : engine,
          media_player_entity_id: device,
          message,
          language: "es"
        });
      }
      this._status("#status-tts", "✓ Reproduciendo…");
    } catch (err) {
      // Fallback: intentar con media_player.play_media + TTS URL
      this._status("#status-tts", "Error TTS: " + err.message, true);
    }
  }

  async _saveTTS() {
    const cfg = this._modesConfig[this._currentMode] || {};
    cfg.tts = {
      message: this._q("#tts-message").value,
      device: this._q("#tts-device").value,
      engine: this._q("#tts-engine").value,
    };
    try {
      await this._hass.callWS({
        type: "argus/save_mode_config",
        mode: this._currentMode,
        config: cfg
      });
      this._status("#status-tts", "✓ TTS guardado");
    } catch (err) {
      this._status("#status-tts", "Error: " + err.message, true);
    }
  }

  _status(sel, msg, isErr) {
    const el = this._q(sel);
    el.textContent = msg;
    el.className = "status " + (isErr ? "err" : "ok");
    setTimeout(() => { el.textContent = ""; }, 3500);
  }

  _setTab(mode) {
    this._currentMode = mode;
    this.shadowRoot.querySelectorAll(".tab").forEach(t =>
      t.classList.toggle("active", t.dataset.mode === mode)
    );
    this._renderModeConfig();
  }

  _renderModeConfig() {
    const cfg = this._modesConfig[this._currentMode] || {};
    const available = this._data?.available_entities || [];

    /* --- Sensores --- */
    const sensorSel = this._q("#mode-sensors");
    sensorSel.innerHTML = "";
    available
      .filter(e => e.domain === "binary_sensor")
      .forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.entity_id;
        opt.textContent = `${s.name || s.entity_id}${s.area ? "  ·  " + s.area : ""}`;
        opt.selected = (cfg.sensors || []).includes(s.entity_id);
        sensorSel.appendChild(opt);
      });

    /* --- Sirenas --- */
    const sirenSel = this._q("#mode-sirens");
    sirenSel.innerHTML = "";

    // Dominios compatibles + smart plugs; también incluye cualquier entidad
    // cuyo nombre/entity_id contenga "siren", "sirena" o "alarm" (sin importar dominio)
    const SIREN_DOMAINS = ["siren", "switch", "light", "input_boolean", "script", "automation"];
    const SIREN_KEYWORDS = ["siren", "sirena", "alarm", "alerta", "buzzer", "strobe", "plug", "enchufe"];

    // Iconos por dominio / keyword para identificarlos visualmente
    const sirenIcon = (e) => {
      const id  = (e.entity_id || "").toLowerCase();
      const nm  = (e.name || "").toLowerCase();
      if (e.domain === "siren")           return "🚨";
      if (e.domain === "automation")      return "⚙️";
      if (e.domain === "script")          return "📜";
      if (e.domain === "input_boolean")   return "🔘";
      if (e.domain === "light")           return "💡";
      // switch: diferenciar smart plug de interruptor genérico
      if (SIREN_KEYWORDS.some(k => id.includes(k) || nm.includes(k))) return "🚨";
      return "🔌"; // smart plug genérico
    };

    const sirenEntities = available.filter(e => {
      const idLow  = (e.entity_id || "").toLowerCase();
      const nmLow  = (e.name     || "").toLowerCase();
      const byDomain  = SIREN_DOMAINS.includes(e.domain);
      const byKeyword = SIREN_KEYWORDS.some(k => idLow.includes(k) || nmLow.includes(k));
      return byDomain || byKeyword;
    });

    // Agrupar: sirenas dedicadas primero, luego smart plugs / switches
    const groupDedicated = sirenEntities.filter(e =>
      e.domain === "siren" ||
      SIREN_KEYWORDS.some(k => (e.entity_id||"").toLowerCase().includes(k) || (e.name||"").toLowerCase().includes(k))
    );
    const groupPlugs = sirenEntities.filter(e => !groupDedicated.includes(e));

    const addGroup = (label, items) => {
      if (!items.length) return;
      const grp = document.createElement("optgroup");
      grp.label = label;
      items.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.entity_id;
        opt.textContent = `${sirenIcon(s)} ${s.name || s.entity_id}${s.area ? "  ·  " + s.area : ""}`;
        opt.selected = (cfg.sirens || []).includes(s.entity_id);
        grp.appendChild(opt);
      });
      sirenSel.appendChild(grp);
    };

    addGroup("🚨 Sirenas / Alarmas", groupDedicated);
    addGroup("🔌 Smart Plugs / Switches", groupPlugs);

    // Fallback si no hay nada
    if (!sirenEntities.length) {
      const opt = document.createElement("option");
      opt.disabled = true;
      opt.textContent = "Sin dispositivos disponibles";
      sirenSel.appendChild(opt);
    }

    /* --- Retrasos --- */
    this._q("#delay-entry").value = cfg.entry_delay ?? 30;
    this._q("#val-entry").textContent = cfg.entry_delay ?? 30;
    this._q("#delay-exit").value = cfg.exit_delay ?? 30;
    this._q("#val-exit").textContent = cfg.exit_delay ?? 30;

    /* --- Horario --- */
    const sched = cfg.schedule || {};
    const savedDays = this._selectedDays[this._currentMode] || sched.days || [];
    this._selectedDays[this._currentMode] = [...savedDays];
    this.shadowRoot.querySelectorAll(".day-btn").forEach(btn => {
      btn.classList.toggle("sel", savedDays.includes(btn.dataset.day));
    });
    this._q("#sched-start").value = sched.start || "";
    this._q("#sched-end").value = sched.end || "";
    this._q("#sched-enabled").checked = !!sched.enabled;

    /* --- TTS --- */
    const tts = cfg.tts || {};
    this._q("#tts-message").value = tts.message || "";
    if (tts.engine) this._q("#tts-engine").value = tts.engine;

    // Dispositivos de audio: media_player (AirPlay, Alexa, Google Home, Ecobee, etc.)
    const devSel = this._q("#tts-device");
    devSel.innerHTML = `<option value="">— Seleccionar —</option>`;
    available
      .filter(e => e.domain === "media_player")
      .forEach(mp => {
        const opt = document.createElement("option");
        opt.value = mp.entity_id;
        // Detectar tipo para icono
        const name = (mp.name || mp.entity_id).toLowerCase();
        let icon = "🔈";
        if (name.includes("airplay") || name.includes("apple") || name.includes("homepod") || name.includes("atv")) icon = "🍎";
        else if (name.includes("alexa") || name.includes("echo")) icon = "🔵";
        else if (name.includes("google") || name.includes("nest") || name.includes("chromecast")) icon = "🔴";
        else if (name.includes("ecobee")) icon = "🌿";
        opt.textContent = `${icon} ${mp.name || mp.entity_id}`;
        opt.selected = tts.device === mp.entity_id;
        devSel.appendChild(opt);
      });

    /* --- Opciones --- */
    this._q("#opt-notify").checked = !!cfg.notify;
    this._q("#opt-mqtt").checked = !!cfg.mqtt_enabled;
    this._q("#opt-automation").checked = !!cfg.create_automation;
  }

  _renderEntries() {
    const el = this._q("#entries");
    el.innerHTML = "";
    const entries = this._data?.entries || [];

    if (!entries.length) {
      el.innerHTML = `
        <div class="empty">
          <span style="font-size:28px;">🔒</span>
          <strong>Sin instancias</strong>
          <span>No hay paneles de alarma configurados.</span>
        </div>`;
      return;
    }

    entries.forEach((e) => {
      const isUnavailable = e.state === "unavailable" || !e.state;
      const div = document.createElement("div");
      div.className = "entry";
      div.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span class="entry-title">${e.title || "Argus"}</span>
          <span class="badge ${e.state || "unavailable"}">${e.state || "unavailable"}</span>
        </div>
        <div class="meta">${e.entity_id || "entidad pendiente"}</div>
        ${isUnavailable
          ? `<div class="unavailable-notice">⚠️ Entidad no disponible — verifica que la integración esté activa en Home Assistant.</div>`
          : `<div class="actions">
              <button class="primary" data-svc="alarm_arm_away" ${isUnavailable ? "disabled" : ""}>🔒 Away</button>
              <button class="ghost"   data-svc="alarm_arm_home" ${isUnavailable ? "disabled" : ""}>🏠 Home</button>
              <button class="ghost"   data-svc="alarm_arm_night" ${isUnavailable ? "disabled" : ""}>🌙 Noche</button>
              <button class="ghost"   data-svc="alarm_arm_vacation" ${isUnavailable ? "disabled" : ""}>✈️ Vacaciones</button>
              <button class="danger"  data-svc="alarm_disarm" ${isUnavailable ? "disabled" : ""}>🔓 Desarmar</button>
            </div>`
        }
      `;
      div.querySelectorAll("button[data-svc]").forEach(b => {
        b.addEventListener("click", () => {
          if (b.disabled) return;
          this._hass.callService("alarm_control_panel", b.dataset.svc, {
            entity_id: e.entity_id
          });
        });
      });
      el.appendChild(div);
    });
  }

  _render() {
    this._renderEntries();
    this._renderModeConfig();
    const zones = this._data?.ui?.zones || [];
    this._q("#zones").value = zones.length ? JSON.stringify(zones, null, 2) : "";
  }
}

customElements.define("argus-panel", ArgusPanel);
