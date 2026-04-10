/**
 * Argus Panel 0.2.0
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
    @media (max-width: 900px) {
      .grid-2 { grid-template-columns: 1fr; }
      .wrap { padding: 16px; }
    }
  </style>
  <div class="wrap">
    <div class="glass hero">
      <div class="hero-icon">🛡️</div>
      <div>
        <h1>Argus</h1>
        <p>Panel de seguridad inteligente para Home Assistant · v0.2.0</p>
      </div>
    </div>

    <div class="grid-2">
      <div class="glass panel">
        <h2>Instancias activas</h2>
        <div id="entries"></div>
      </div>

      <div class="glass panel">
        <h2>Zonas</h2>
        <p class="meta" style="margin-bottom:12px;">Define zonas personalizadas en JSON y guárdalas. Cada zona puede agrupar sensores, sirenas o cámaras de tu instalación.</p>
        <textarea id="zones" spellcheck="false" placeholder='[{"name":"Sala","entities":["binary_sensor.puerta_principal"]}]'></textarea>
        <div class="save-row">
          <button class="primary" id="btn-save">💾 Guardar zonas</button>
          <button class="ghost" id="btn-reload">↺ Recargar</button>
          <span class="status" id="status"></span>
        </div>
      </div>

      <div class="glass panel section-full">
        <h2>Entidades disponibles en Home Assistant</h2>
        <p class="meta" style="margin-bottom:14px;">Estas entidades están integradas en tu HA y pueden asignarse a zonas o usarse como sensores, sirena o cámara en Argus.</p>
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
    this._loading = false;
  }

  connectedCallback() {
    this._q("#btn-save").addEventListener("click", () => this._saveZones());
    this._q("#btn-reload").addEventListener("click", () => this._load());
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
      this._data = await this._hass.callWS({ type: "argus/dashboard" });
      this._render();
    } catch (err) {
      this._status(`Error: ${err.message}`, true);
    } finally {
      this._loading = false;
    }
  }

  async _callAlarm(entityId, service) {
    if (!entityId) return;
    try {
      await this._hass.callService("alarm_control_panel", service, { entity_id: entityId });
      setTimeout(() => this._load(), 800);
    } catch (err) {
      this._status(`Error llamando ${service}: ${err.message}`, true);
    }
  }

  async _saveZones() {
    try {
      const raw = this._q("#zones").value.trim() || "[]";
      const zones = JSON.parse(raw);
      const dashboard = this._data?.ui?.dashboard || { layout: "grid", dense: false };
      await this._hass.callWS({ type: "argus/save_ui", zones, dashboard });
      this._status("✓ Zonas guardadas.", false);
      await this._load();
    } catch (err) {
      this._status(`Error guardando: ${err.message}`, true);
    }
  }

  _status(msg, isErr) {
    const el = this._q("#status");
    el.textContent = msg;
    el.className = "status " + (isErr ? "err" : "ok");
    if (!isErr) setTimeout(() => { el.textContent = ""; }, 3500);
  }

  _renderEntries() {
    const el = this._q("#entries");
    el.innerHTML = "";
    const entries = this._data?.entries || [];
    if (!entries.length) {
      el.innerHTML = `<div class="empty"><strong>Sin instancias</strong>Ve a Configuración → Integraciones → Argus para crear la primera.</div>`;
      return;
    }
    entries.forEach((e) => {
      const div = document.createElement("div");
      div.className = "entry";
      const awayCount = (e.config?.sensors_away || []).length;
      const homeCount = (e.config?.sensors_home || []).length;
      const nightCount = (e.config?.sensors_night || []).length;
      div.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span class="entry-title">${e.title || "Argus"}</span>
          <span class="badge ${e.state}">${e.state || "unknown"}</span>
        </div>
        <div class="meta">${e.entity_id || "entidad pendiente"} &nbsp;·&nbsp; away ${awayCount} · home ${homeCount} · night ${nightCount}</div>
        <div class="actions">
          <button class="primary" data-svc="alarm_arm_away">🔒 Armar Away</button>
          <button class="ghost" data-svc="alarm_arm_home">🏠 Armar Home</button>
          <button class="ghost" data-svc="alarm_arm_night">🌙 Armar Night</button>
          <button class="ghost" data-svc="alarm_disarm">🔓 Desarmar</button>
          <button class="danger" data-svc="alarm_trigger">🚨 Pánico</button>
        </div>
      `;
      div.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => this._callAlarm(e.entity_id, btn.dataset.svc));
      });
      el.appendChild(div);
    });
  }

  _renderChips() {
    const el = this._q("#chips");
    el.innerHTML = "";
    const entities = this._data?.available_entities || [];
    if (!entities.length) {
      el.innerHTML = `<span class="meta">No hay entidades disponibles.</span>`;
      return;
    }
    entities.slice(0, 100).forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.title = item.friendly_name || item.entity_id;
      chip.textContent = `${item.entity_id}${item.area ? " · " + item.area : ""}`;
      el.appendChild(chip);
    });
  }

  _render() {
    this._renderEntries();
    this._renderChips();
    const zones = this._data?.ui?.zones || [];
    this._q("#zones").value = zones.length ? JSON.stringify(zones, null, 2) : "";
  }
}

customElements.define("argus-panel", ArgusPanel);
