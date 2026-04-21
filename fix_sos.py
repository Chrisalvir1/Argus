import re

with open("custom_components/argus/www/argus-panel.js", "r") as f:
    js = f.read()

# 1. HTML changes for the call button
old_html = """    <button class="ios-confirm-cancel" id="btn-cancel-sos">Cancelar</button>
  </div>"""

new_html = """    <div style="margin-top:20px;text-align:center">
      <a id="sos-call-btn" href="tel:911" style="display:flex;justify-content:center;align-items:center;gap:8px;background:rgba(255,59,48,0.2);color:#ff3b30;text-decoration:none;padding:14px;border-radius:18px;font-weight:800;font-size:15px;border:1px solid rgba(255,59,48,0.3)">
        📞 Llamar a Emergencias (911)
      </a>
    </div>
    <button class="ios-confirm-cancel" id="btn-cancel-sos" style="margin-top:10px">Cancelar</button>
  </div>"""

js = js.replace(old_html, new_html)

# 2. _triggerSOS() changes
old_trigger = """    if (this._hass) {
      this._hass.callService('argus', 'trigger', {}).catch(() => {});
    }"""

new_trigger = """    if (this._hass) {
      const eid = this._dashboard?.entries?.[0]?.entity_id;
      if (eid) {
        this._hass.callService('alarm_control_panel', 'alarm_trigger', { entity_id: eid }).catch(() => {});
      }
    }"""
js = js.replace(old_trigger, new_trigger)

# 3. Dynamic emergency number inside connectedCallback or _init
old_init = "  async _init() {"
new_init = """  async _init() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const callBtn = this.shadowRoot.getElementById('sos-call-btn');
      if (callBtn) {
          if (tz.includes('Europe') || tz.includes('Madrid') || tz.includes('Berlin') || tz.includes('Paris') || tz.includes('London')) {
              callBtn.href = "tel:112";
              callBtn.innerHTML = "📞 Llamar a Emergencias (112)";
          } else if (tz.includes('Australia')) {
              callBtn.href = "tel:000";
              callBtn.innerHTML = "📞 Llamar a Emergencias (000)";
          }
      }
    } catch(e) {}
"""
js = js.replace(old_init, new_init)

with open("custom_components/argus/www/argus-panel.js", "w") as f:
    f.write(js)
