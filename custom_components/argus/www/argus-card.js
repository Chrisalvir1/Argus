/**
 * Argus Alarm Card – v0.9.20
 * Refined UI: Improved legibility, accurate weather mapping, and detailed location.
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
    const weatherEntities = Object.values(this._hass.states).filter(s => s.entity_id.startsWith('weather.'));
    const weatherEnt = weatherEntities.find(s => s.entity_id.includes('apple_weather')) 
                     || weatherEntities.find(s => s.state && s.state !== 'unknown')
                     || { state: 'clear', attributes: { temperature: 24, temperature_unit: '°C' } };

    const rawTemp = weatherEnt.attributes.temperature;
    const temp = rawTemp !== undefined ? Math.round(rawTemp) : '--';
    const unit = weatherEnt.attributes.temperature_unit || '°C';
    const weatherState = (weatherEnt.state || 'clear').toLowerCase();
    const isNight = this._hass.states['sun.sun']?.state === 'below_horizon';

    // Robust Location Logic: Canton, Provincia, Pais
    const cfg = this._hass?.config || {};
    const wAttr = weatherEnt?.attributes || {};
    const canton = cfg.city || wAttr.locality || wAttr.city || '';
    const prov   = cfg.location_name && !['home','casa','hogar'].includes(cfg.location_name.toLowerCase()) 
                 ? cfg.location_name 
                 : (wAttr.region || wAttr.province || '');
    const pais   = cfg.country || 'Costa Rica';

    let locName = [canton, prov, pais].filter(Boolean).join(', ');
    if (!locName) locName = 'Ubicación Desconocida';

    // Time
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    // Background selection
    let bgSvg = isNight ? (weatherState.includes('clear') ? 'env_night_starry.svg' : 'env_night.svg') : 'env_day.svg';
    if (weatherState.includes('rain') || weatherState.includes('pouring') || weatherState.includes('lightning')) bgSvg = 'env_rain.svg';
    else if (weatherState.includes('snow')) bgSvg = 'env_snow.svg';
    else if (weatherState.includes('cloud') || weatherState.includes('overcast') || weatherState.includes('fog')) bgSvg = 'env_clouds.svg';

    let svgName = 'mode_disarmed.svg';
    if (state === 'armed_home') svgName = 'mode_home.svg';
    else if (state === 'armed_away') svgName = 'mode_away.svg';
    else if (state === 'armed_night') svgName = 'mode_night.svg';
    else if (state === 'armed_vacation') svgName = 'mode_vacation.svg';

    const v = "0.8.0";

    this.innerHTML = `
      <ha-card style="overflow:hidden; border-radius:28px; border:none; background:none; box-shadow:0 10px 40px rgba(0,0,0,0.3)">
        <style>
          .argus-card {
            position: relative;
            overflow: hidden;
            border-radius: 28px;
            min-height: 250px;
            display: flex;
            flex-direction: column;
            font-family: Inter, system-ui, sans-serif;
            color: #fff;
          }
          .card-bg { position: absolute; inset: 0; z-index: 1; opacity: 0.7; }
          .card-bg img { width: 100%; height: 100%; object-fit: cover; }
          
          .hud { position: absolute; top: 18px; right: 22px; text-align: right; z-index: 3; text-shadow: 0 2px 8px rgba(0,0,0,0.6); }
          .hud-loc { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9; }
          .hud-data { font-size: 18px; font-weight: 700; margin-top: 3px; }

          .content { position: relative; z-index: 2; flex: 1; padding: 24px; display: grid; grid-template-columns: 150px 1fr; gap: 20px; align-items: center; background: linear-gradient(90deg, rgba(0,0,0,0.45) 0%, transparent 75%); }
          
          .liquid-stack { display: grid; gap: 8px; }
          .liquid-btn { border: none; background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); color: #fff; padding: 12px 14px; border-radius: 16px; font-size: 12px; font-weight: 800; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: all 0.2s; border: 1px solid rgba(255,255,255,0.1); text-shadow: 0 1px 2px rgba(0,0,0,0.5); }
          .liquid-btn:hover { background: rgba(255,255,255,0.18); transform: translateX(4px); }
          .liquid-btn.active { background: var(--btn-bg, rgba(255,255,255,0.25)); border-color: rgba(255,255,255,0.4); }
          
          .btn-home.active{ --btn-bg: rgba(251,140,0,0.35); }
          .btn-away.active{ --btn-bg: rgba(229,57,53,0.35); }
          .btn-night.active{ --btn-bg: rgba(30,136,229,0.35); }
          .btn-disarm { margin-top: 4px; border: 1px solid rgba(67,160,71,0.3); }

          .icon-wrap { display: flex; justify-content: center; align-items: center; perspective: 1000px; }
          .icon-wrap img { max-width: 100%; height: auto; filter: drop-shadow(0 12px 24px rgba(0,0,0,0.5)); animation: float 4s ease-in-out infinite; }
          @keyframes float { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-12px) rotate(1deg); } }

          .card-title { position: absolute; bottom: 18px; left: 24px; z-index: 3; font-size: 11px; font-weight: 800; text-transform: uppercase; opacity: 0.7; letter-spacing: 1px; }
        </style>

        <div class="argus-card" style="${triggered ? 'border: 3px solid #ff5252' : ''}">
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
            </div>
            
            <div class="icon-wrap">
              ${triggered ? '<div style="font-size:90px; filter: drop-shadow(0 0 20px #f00)">🚨</div>' : `<img src="/api/argus_static/${svgName}?v=${v}">`}
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
