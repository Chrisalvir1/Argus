/**
 * Argus Intelligent Card v0.8.0
 * Unified with the panel UI: Atmospheric backgrounds, Liquid Glass buttons, and HUD.
 */
class ArgusCard extends HTMLElement {
  static getStubConfig() {
    return { entity: "alarm_control_panel.argus", title: "Alarma Argus Principal" };
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

  _render() {
    if (!this._config || !this._hass) return;
    const stateObj = this._hass.states[this._config.entity];
    const state = stateObj ? stateObj.state : "unavailable";
    const title = this._config.title || "Alarma Argus Principal";
    const triggered = state === "triggered";

    // Weather & Location
    const locName = this._hass.config.location_name || "Atenas, Costa Rica";
    const weatherEnt = Object.values(this._hass.states).find(s => s.entity_id.startsWith('weather.')) || { state: 'clear', attributes: { temperature: 24, temperature_unit: '°C' } };
    const temp = weatherEnt.attributes.temperature || '--';
    const unit = weatherEnt.attributes.temperature_unit || '°C';
    const weatherState = (weatherEnt.state || 'clear').toLowerCase();
    const isNight = this._hass.states['sun.sun']?.state === 'below_horizon';

    // Time
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    // Background & Icon
    let bgSvg = isNight ? 'env_night.svg' : 'env_day.svg';
    if (weatherState.includes('rain')) bgSvg = 'env_rain.svg';
    else if (weatherState.includes('cloud')) bgSvg = 'env_clouds.svg';

    let svgName = 'mode_disarmed.svg';
    if (state === 'armed_home') svgName = 'mode_home.svg';
    else if (state === 'armed_away') svgName = 'mode_away.svg';
    else if (state === 'armed_night') svgName = 'mode_night.svg';
    else if (state === 'armed_vacation') svgName = 'mode_vacation.svg';

    const v = "0.8.0";

    this.innerHTML = `
      <ha-card style="overflow:hidden; border-radius:24px; border:none; background:none;">
        <style>
          .argus-card {
            position: relative;
            overflow: hidden;
            border-radius: 24px;
            min-height: 220px;
            display: flex;
            flex-direction: column;
            font-family: Inter, system-ui, sans-serif;
            color: #fff;
          }
          .card-bg { position: absolute; inset: 0; z-index: 1; opacity: 0.6; }
          .card-bg img { width: 100%; height: 100%; object-fit: cover; }
          
          .hud { position: absolute; top: 15px; right: 20px; text-align: right; z-index: 3; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
          .hud-loc { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; }
          .hud-data { font-size: 16px; font-weight: 700; margin-top: 2px; }

          .content { position: relative; z-index: 2; flex: 1; padding: 20px; display: grid; grid-template-columns: 130px 1fr; gap: 15px; align-items: center; background: linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 70%); }
          
          .liquid-stack { display: grid; gap: 6px; }
          .liquid-btn { border: none; background: rgba(255,255,255,0.08); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); color: #fff; padding: 8px 12px; border-radius: 12px; font-size: 10px; font-weight: 700; display: flex; align-items: center; gap: 8px; cursor: pointer; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.05); }
          .liquid-btn:hover { background: rgba(255,255,255,0.15); transform: translateX(3px); }
          .liquid-btn.active { background: var(--btn-bg, rgba(255,255,255,0.2)); border-color: rgba(255,255,255,0.3); }
          
          .btn-home.active{ --btn-bg: rgba(251,140,0,0.3); }
          .btn-away.active{ --btn-bg: rgba(229,57,53,0.3); }
          .btn-night.active{ --btn-bg: rgba(30,136,229,0.3); }
          .btn-vacation.active{ --btn-bg: rgba(156,39,176,0.3); }
          .btn-disarm { margin-top: 2px; border: 1px solid rgba(67,160,71,0.2); }

          .icon-wrap { display: flex; justify-content: center; align-items: center; }
          .icon-wrap img { max-width: 100%; height: auto; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4)); animation: float 4s ease-in-out infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

          .card-title { position: absolute; bottom: 15px; left: 20px; z-index: 3; font-size: 11px; font-weight: 800; text-transform: uppercase; opacity: 0.6; letter-spacing: 0.5px; }
        </style>

        <div class="argus-card">
          <div class="card-bg"><img src="/api/argus_static/${bgSvg}?v=${v}"></div>
          
          <div class="hud">
            <div class="hud-loc">${locName}</div>
            <div class="hud-data">${timeStr} • ${temp}${unit}</div>
          </div>

          <div class="content">
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${state==='armed_home'?'active':''}" id="home">🏠 EN CASA</button>
              <button class="liquid-btn btn-away ${state==='armed_away'?'active':''}" id="away">🔒 AUSENTE</button>
              <button class="liquid-btn btn-night ${state==='armed_night'?'active':''}" id="night">🌙 NOCHE</button>
              <button class="liquid-btn btn-disarm" id="disarm">🔓 DESARMADO</button>
              <button class="liquid-btn" style="color:#ff5252" id="panic">🚨 PÁNICO</button>
            </div>
            
            <div class="icon-wrap">
              ${triggered ? '<div style="font-size:70px;">🚨</div>' : `<img src="/api/argus_static/${svgName}?v=${v}">`}
            </div>
          </div>

          <div class="card-title">${title}</div>
        </div>
      </ha-card>
    `;

    this.querySelector("#home").onclick = () => this._call("alarm_arm_home");
    this.querySelector("#away").onclick = () => this._call("alarm_arm_away");
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
  name: "Argus Card Premium",
  description: "Tarjeta Inteligente Argus con clima dinámico y botones Liquid Glass",
  preview: true,
  documentationURL: "https://github.com/Chrisalvir1/Argus",
});
