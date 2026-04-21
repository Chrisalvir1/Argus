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
js = js.replace(".tabs{display:flex;gap:12px;margin-bottom:20px;border-bottom:1px solid rgba(255,255,255,0.1)}\n  .tab{background:0 0;border:none;color:inherit;opacity:.5;padding:10px 2px;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s}\n  .tab.active{opacity:1;border-bottom:2px solid var(--primary-color,#03a9f4);color:var(--primary-color,#03a9f4)}", css_updates)

# 2. Extract Instances and rebalance grid.
html_start = js.find('<div class="grid">')
html_end = js.find('</template>')

html = js[html_start:html_end]

# Extract instances
instances_match = re.search(r'      <!-- Instances -->\s*<section class="glass panel liquid-glass">.*?</section>', html, re.DOTALL)
instances_html = instances_match.group(0)
html = html.replace(instances_html, '')

# Extract Users, Automations, PIN, Settings, Notifications, Backup, Advanced
ext = lambda marker, tag: re.search(f'      <!-- {marker} -->\\s*<section.*?>(.*?)</section>', html, re.DOTALL)

def extract_section(marker):
    m = re.search(f'      <!-- {marker} -->\\s*<section.*?</section>', html, re.DOTALL)
    if m: return m.group(0)
    return ""

activity_html = extract_section("Activity log")
micasa_html = extract_section("Mi Casa Section \\(Standalone\\)")
modes_html = extract_section("Modes")
users_html = extract_section("Users")
auto_html = extract_section("Automations")
pin_html = extract_section("Master PIN Settings")
notif_html = extract_section("Notifications")
backup_html = extract_section("Backup & Restore")
advanced_html = extract_section("Advanced")

# Style the instances block
instances_html = instances_html.replace('<section class="glass panel liquid-glass">', '<section class="glass panel liquid-glass" style="width:100%; max-width:960px; aspect-ratio:16/9; display:flex; flex-direction:column; margin: 0 auto 24px auto;">')
instances_html = instances_html.replace('<div id="entries"></div>', '<div id="entries" style="flex:1; overflow-y:auto; overflow-x:hidden;"></div>')

# Re-assemble the columns
new_html = f"""
  <!-- PANORAMICO: INSTANCES -->
{instances_html}

  <!-- THREE-COLUMN BALANCED LAYOUT -->
  <div class="grid">

    <!-- LEFT COLUMN -->
    <div class="stack">
{activity_html}
{notif_html}
{backup_html}
    </div>

    <!-- CENTER COLUMN -->
    <div class="stack">
{micasa_html}
{modes_html}
    </div>

    <!-- RIGHT COLUMN -->
    <div class="stack">
{users_html}
{auto_html}
{pin_html}
{advanced_html}
    </div>
  </div>
"""

js = js[:html_start] + new_html + js[html_end:]

# 3. Add bounce-in class when mode switches
js = js.replace("this._renderModeView();", """
    this._renderModeView();
    const view = this.shadowRoot.getElementById('mode-view');
    if (view) {
      view.classList.remove('bounce-in');
      void view.offsetWidth; // trigger reflow
      view.classList.add('bounce-in');
    }
""")

# 4. Same SOS fixes from previous patch
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

