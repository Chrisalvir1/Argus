import re

with open("custom_components/argus/www/argus-panel.js", "r") as f:
    js = f.read()

# 1. Update CSS
css_updates = """
  .tabs { display: flex; background: rgba(255,255,255,0.05); padding: 5px; border-radius: 14px; gap: 4px; overflow-x: auto; scrollbar-width: none; margin-bottom: 20px; }
  .tabs::-webkit-scrollbar { display: none; }
  .tab { flex: 1; min-width: 80px; text-align: center; border-radius: 10px; padding: 10px 0; font-size: 13px; font-weight: 800; color: rgba(255,255,255,0.6); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; border: none; outline: none; }
  .tab:hover { color: #fff; background: rgba(255,255,255,0.08); }
  .tab.active { background: var(--primary-color, #03a9f4); color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transform: translateY(-2px); }
  :host([selected-theme*="light"]) .tabs { background: rgba(0,0,0,0.05); }
  :host([selected-theme*="light"]) .tab { color: rgba(0,0,0,0.6); }
  :host([selected-theme*="light"]) .tab:hover { color: #000; background: rgba(0,0,0,0.08); }
  :host([selected-theme*="light"]) .tab.active { color: #fff; }

  @keyframes bounceIn {
    0% { transform: scale(0.95); opacity: 0; }
    50% { transform: scale(1.02); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  .bounce-in { animation: bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
"""
if "bounceIn" not in js:
    # Appending css correctly
    js = js.replace(".tabs{display:flex;gap:12px;margin-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.1)}\n  .tab{background:0 0;border:none;color:inherit;opacity:.5;padding:10px 2px;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s}\n  .tab.active{opacity:1;border-bottom:2px solid var(--primary-color,#03a9f4);color:var(--primary-color,#03a9f4)}", css_updates)

# 2. Extract and re-position "Instances" correctly inside the template.
html_start_marker = '<div class="grid">'
template_start = js.find(html_start_marker)
if template_start > -1:
    instances_match = re.search(r'      <!-- Instances -->\s*<section class="glass panel liquid-glass">.*?</section>', js, re.DOTALL)
    if instances_match:
        html_instances = instances_match.group(0)
        # remove it from its original place in the grid
        js = js.replace(html_instances, '')
        
        html_instances = html_instances.replace('<section class="glass panel liquid-glass">', '<section class="glass panel liquid-glass" style="width:100%; max-width:960px; aspect-ratio:16/9; display:flex; flex-direction:column; margin: 0 auto 24px auto;">')
        html_instances = html_instances.replace('<div id="entries"></div>', '<div id="entries" style="flex:1; overflow-y:auto; overflow-x:hidden;"></div>')
        
        # insert before <div class="grid">
        js = js.replace(html_start_marker, f"<!-- PANORAMICO: INSTANCES -->\n{html_instances}\n\n  " + html_start_marker)

# 3. Add bounce-in trigger
old_render = "  _renderModeView() {"
new_render = """  _renderModeView() {
    const el = this.shadowRoot.getElementById('mode-view');
    if (el) {
      el.classList.remove('bounce-in');
      void el.offsetWidth;
      el.classList.add('bounce-in');
    }"""
js = js.replace(old_render, new_render)

# 4. SOS fixes
old_html_sos = """    <button class="ios-confirm-cancel" id="btn-cancel-sos">Cancelar</button>
  </div>"""

new_html_sos = """    <div style="margin-top:20px;text-align:center">
      <a id="sos-call-btn" href="tel:911" style="display:flex;justify-content:center;align-items:center;gap:8px;background:rgba(255,59,48,0.2);color:#ff3b30;text-decoration:none;padding:14px;border-radius:18px;font-weight:800;font-size:15px;border:1px solid rgba(255,59,48,0.3)">
        📞 Llamar a Emergencias (911)
      </a>
    </div>
    <button class="ios-confirm-cancel" id="btn-cancel-sos" style="margin-top:10px">Cancelar</button>
  </div>"""

js = js.replace(old_html_sos, new_html_sos)

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
