/**
 * Argus Card 0.7.0
 * Lovelace custom card for Home Assistant dashboards.
 * Usage:
 *   type: custom:argus-card
 *   entity: alarm_control_panel.argus
 *   title: Mi Alarma   # optional
 */
class ArgusCard extends HTMLElement {
  static getStubConfig() {
    return { entity: "alarm_control_panel.argus", title: "Argus" };
  }

  static get properties() {
    return { hass: {}, config: {} };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("argus-card requiere el campo 'entity'");
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  async _call(service) {
    if (!this._hass) return;
    try {
      await this._hass.callService("alarm_control_panel", service, {
        entity_id: this._config.entity,
      });
    } catch (e) {
      console.error("[ArgusCard]", e);
    }
  }

  _stateColor(state) {
    if (state === "disarmed") return "#43a047";
    if (["armed_home", "armed_night"].includes(state)) return "#fb8c00";
    if (["armed_away", "armed_vacation"].includes(state)) return "#e53935";
    if (state === "triggered") return "#b71c1c";
    if (state === "arming" || state === "pending") return "#1e88e5";
    return "#90a4ae";
  }

  _stateLabel(state) {
    const labels = {
      disarmed: "Desarmada",
      armed_away: "Armada Away",
      armed_home: "Armada Home",
      armed_night: "Armada Noche",
      armed_vacation: "Armada Vacaciones",
      arming: "Armando...",
      pending: "Retardo entrada",
      triggered: "\u26a0\ufe0f DISPARADA",
      unavailable: "No disponible",
    };
    return labels[state] || state;
  }

  _render() {
    if (!this._config || !this._hass) return;
    const stateObj = this._hass.states[this._config.entity];
    const state = stateObj ? stateObj.state : "unavailable";
    const color = this._stateColor(state);
    const label = this._stateLabel(state);
    const title = this._config.title || "Argus";
    const attrs = stateObj ? stateObj.attributes : {};

    this.innerHTML = `
      <ha-card>
        <style>
          .argus-card {
            padding: 18px 20px 20px;
            display: grid;
            gap: 14px;
            font-family: Inter, system-ui, sans-serif;
          }
          .argus-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .argus-title {
            font-size: 15px;
            font-weight: 700;
            opacity: .7;
            letter-spacing: .03em;
          }
          .argus-state {
            font-size: 26px;
            font-weight: 800;
            color: ${color};
            letter-spacing: -.01em;
          }
          .argus-entity {
            font-size: 11px;
            opacity: .45;
            margin-top: -6px;
          }
          .argus-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .argus-btn {
            flex: 1;
            min-width: 80px;
            border: 0;
            border-radius: 12px;
            padding: 10px 12px;
            font: 600 12px/1 Inter, system-ui, sans-serif;
            cursor: pointer;
            transition: opacity .15s, transform .1s;
          }
          .argus-btn:active { transform: scale(.95); }
          .argus-btn:hover { opacity: .82; }
          .btn-away { background: rgba(229,57,53,.12); color: #e53935; }
          .btn-home { background: rgba(251,140,0,.12); color: #fb8c00; }
          .btn-night { background: rgba(30,136,229,.12); color: #1e88e5; }
          .btn-disarm { background: rgba(67,160,71,.12); color: #43a047; }
          .btn-panic { background: rgba(183,28,28,.13); color: #b71c1c; }
          .argus-bar {
            height: 4px;
            border-radius: 4px;
            background: ${color};
            opacity: .35;
          }
        </style>
        <div class="argus-card">
          <div class="argus-bar"></div>
          <div class="argus-header">
            <span class="argus-title">🛡️ ${title}</span>
          </div>
          <div>
            <div class="argus-state">${label}</div>
            <div class="argus-entity">${this._config.entity}</div>
          </div>
          <div class="argus-actions">
            <button class="argus-btn btn-away" id="away">🔒 Away</button>
            <button class="argus-btn btn-home" id="home">🏠 Home</button>
            <button class="argus-btn btn-night" id="night">🌙 Noche</button>
            <button class="argus-btn btn-disarm" id="disarm">🔓 Desarmar</button>
            <button class="argus-btn btn-panic" id="panic">🚨 Pánico</button>
          </div>
        </div>
      </ha-card>
    `;

    this.querySelector("#away").onclick = () => this._call("alarm_arm_away");
    this.querySelector("#home").onclick = () => this._call("alarm_arm_home");
    this.querySelector("#night").onclick = () => this._call("alarm_arm_night");
    this.querySelector("#disarm").onclick = () => this._call("alarm_disarm");
    this.querySelector("#panic").onclick = () => this._call("alarm_trigger");
  }

  getCardSize() { return 3; }
}

customElements.define("argus-card", ArgusCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "argus-card",
  name: "Argus Card",
  description: "Tarjeta de control de alarma Argus para dashboards de Home Assistant",
  preview: true,
  documentationURL: "https://github.com/Chrisalvir1/Argus",
});
