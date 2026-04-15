import re
import os

path = "/Users/chrisalvir/Desktop/argus/custom_components/argus/www/argus-panel.js"
with open(path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update versions
code = code.replace("v0.9.5", "v0.9.6")

# 2. Add constructor variables
const_pattern = r"(constructor\(\)\s*\{\s*super\(\);)"
if "_showSosConfirm" not in code:
    code = re.sub(const_pattern, r"\1\n    this._showSosConfirm = false;\n    this._sosSliding = false;\n    this._sosStartX = 0;\n    this._sosOffsetX = 0;\n    this._sosConfirmed = false;\n", code, count=1)

# 3. Add styles to _tmpl.innerHTML = `<style>
css_patch = """
  /* Liquid Glass & SOS Styles */
  :host {
    --glass-bg: rgba(255, 255, 255, 0.14);
    --glass-border: rgba(255, 255, 255, 0.22);
    --glass-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
    --sos-red: linear-gradient(135deg, #ff4d4f, #d90429);
    --ios-track: rgba(255, 255, 255, 0.12);
    --ios-thumb: linear-gradient(180deg, #ffffff, #dfe7f5);
  }
  .liquid-glass { background: var(--glass-bg); backdrop-filter: blur(22px) saturate(180%); -webkit-backdrop-filter: blur(22px) saturate(180%); border: 1px solid var(--glass-border); box-shadow: var(--glass-shadow); }
  .battery-alert { margin: 0 0 12px 0; padding: 12px 16px; border-radius: 16px; background: rgba(255, 149, 0, 0.16); border: 1px solid rgba(255, 179, 71, 0.32); color: #fff3d6; font-weight: 600; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); text-align: left;}
  .btn-sos { width: 100%; min-height: 54px; border: 0; border-radius: 18px; background: var(--sos-red); color: white; font-size: 1rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 12px 28px rgba(217, 4, 41, 0.35); transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease; margin-top: 8px; }
  .btn-sos:hover { transform: translateY(-1px); box-shadow: 0 16px 34px rgba(217, 4, 41, 0.42); }
  .btn-sos:active { transform: translateY(0); opacity: 0.94; }
  .ios-confirm-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); display: none; align-items: center; justify-content: center; padding: 18px; z-index: 999999; backdrop-filter: blur(10px); }
  .ios-confirm-backdrop.open { display: flex; }
  .ios-confirm-card { width: min(100%, 420px); border-radius: 28px; padding: 22px; color: white; background: rgba(30,30,40,0.85); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
  .ios-confirm-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; text-align: center; }
  .ios-confirm-text { font-size: 0.96rem; opacity: 0.92; line-height: 1.45; text-align: center; margin-bottom: 18px; }
  .ios-slider-shell { padding: 4px 0 16px; }
  .ios-slider-track { position: relative; height: 64px; border-radius: 999px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 255, 255, 0.16); overflow: hidden; }
  .ios-slider-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 82px; font-size: 0.95rem; font-weight: 700; color: rgba(255, 255, 255, 0.92); pointer-events: none; text-align: center; }
  .ios-slider-thumb { position: absolute; top: 6px; left: 6px; width: 52px; height: 52px; border-radius: 50%; background: var(--ios-thumb); color: #d90429; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22); touch-action: none; user-select: none; cursor: grab; transition: transform 0.1s ease-out; }
  .ios-confirm-cancel { width: 100%; min-height: 48px; border: 0; border-radius: 16px; background: rgba(255,255,255,0.1); color: white; font-weight: 700; cursor: pointer; }
"""
if "Liquid Glass & SOS Styles" not in code:
    code = code.replace("<style>", f"<style>\n{css_patch}")

# 4. Inject Modal HTML into _tmpl
modal_html = """
<!-- SOS Confirm Modal -->
<div class="ios-confirm-backdrop" id="sos-modal">
  <div class="ios-confirm-card liquid-glass" id="sos-card">
    <div class="ios-confirm-title">Confirmar pánico</div>
    <div class="ios-confirm-text">Desliza para disparar la alarma inmediatamente.</div>
    <div class="ios-slider-shell">
      <div class="ios-slider-track">
        <div class="ios-slider-label" id="sos-label">Desliza para activar SOS</div>
        <div class="ios-slider-thumb" id="sos-thumb">🚨</div>
      </div>
    </div>
    <button class="ios-confirm-cancel" id="btn-cancel-sos">Cancelar</button>
  </div>
</div>
"""
if 'id="sos-modal"' not in code:
    code = code.replace("</style>", f"</style>\n{modal_html}")

# 5. Inject DOM bindings in connectedCallback
bindings = """
    const sosModal = this.shadowRoot.getElementById('sos-modal');
    const sosThumb = this.shadowRoot.getElementById('sos-thumb');
    const sosLabel = this.shadowRoot.getElementById('sos-label');
    if (this.shadowRoot.getElementById('btn-cancel-sos')) {
      this.shadowRoot.getElementById('btn-cancel-sos').addEventListener('click', () => {
        sosModal.classList.remove('open');
        this._sosOffsetX = 0;
        sosThumb.style.transform = `translateX(0px)`;
        sosLabel.textContent = "Desliza para activar SOS";
      });
    }
    
    if (sosThumb) {
      const startSlide = (e) => {
        this._sosSliding = true;
        this._sosStartX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        sosThumb.style.transition = 'none';
      };
      const moveSlide = (e) => {
        if (!this._sosSliding) return;
        const currentX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        this._sosOffsetX = Math.max(0, Math.min(220, currentX - this._sosStartX));
        sosThumb.style.transform = `translateX(${this._sosOffsetX}px)`;
      };
      const endSlide = async () => {
        if (!this._sosSliding) return;
        this._sosSliding = false;
        sosThumb.style.transition = 'transform 0.2s ease-out';
        if (this._sosOffsetX >= 180) {
          this._sosOffsetX = 220;
          sosThumb.style.transform = `translateX(220px)`;
          sosLabel.textContent = "Enviando SOS...";
          if (this._hass) {
            await this._hass.callService("alarm_control_panel", "alarm_trigger", {
              entity_id: "alarm_control_panel.argus_alarm"
            });
            this._writeLog('triggered', 'SOS disparado manualmente por panel.', this._hass?.user?.name || 'Usuario');
          }
          setTimeout(() => {
            sosModal.classList.remove('open');
            this._sosOffsetX = 0;
            sosThumb.style.transform = `translateX(0px)`;
            sosLabel.textContent = "Desliza para activar SOS";
          }, 600);
        } else {
          this._sosOffsetX = 0;
          sosThumb.style.transform = `translateX(0px)`;
        }
      };
      
      sosThumb.addEventListener('pointerdown', startSlide);
      window.addEventListener('pointermove', moveSlide);
      window.addEventListener('pointerup', endSlide);
      window.addEventListener('pointercancel', endSlide);
    }
"""
if "sosModal = this.shadowRoot.getElementById" not in code:
    code = code.replace("super.connectedCallback();", "super.connectedCallback();\n" + bindings)

# 6. Add _renderBatteryAlerts method
battery_method = """
  _renderBatteryAlerts() {
    if (!this._hass?.states) return '';
    const states = this._hass.states;
    const lowBatteries = Object.values(states).filter((st) => {
      const isBattery = st.entity_id?.endsWith('_battery') || st.attributes?.device_class === 'battery';
      if (!isBattery || st.state === 'unknown' || st.state === 'unavailable') return false;
      const level = Number(st.state);
      return !Number.isNaN(level) && level <= 20;
    });
    if (!lowBatteries.length) return '';
    const rows = lowBatteries.map(b => `<div class="battery-alert">⚠️ Batería baja: ${b.attributes.friendly_name || b.entity_id} (${b.state}%)</div>`).join('');
    return `<div class="battery-alerts-container" style="margin-top: 10px;">${rows}</div>`;
  }
"""
if "_renderBatteryAlerts()" not in code:
    code = code.replace("  _renderEntries() {", battery_method + "\n  _renderEntries() {")

# 7. Modify _renderEntries to inject battery alerts and SOS button
if "<!-- SOS injected -->" not in code:
    code = code.replace('<div class="hud">', '${this._renderBatteryAlerts()}\n          <div class="hud">')
    code = code.replace('<button class="liquid-btn btn-disarm', '<button class="btn-sos" data-action="sos">🚨 SOS / PÁNICO</button>\n              <!-- SOS injected -->\n              <button class="liquid-btn btn-disarm')

# 8. Add click handler for SOS button in _renderEntries
action_handler_patch = """
    el.querySelectorAll('button[data-action="sos"]').forEach(btn =>
      btn.addEventListener('click', () => {
        const sosModal = this.shadowRoot.getElementById('sos-modal');
        if (sosModal) sosModal.classList.add('open');
      })
    );
"""
if 'button[data-action="sos"]' not in code:
    code = code.replace("el.querySelectorAll('button[data-fullscreen]')", action_handler_patch + "    el.querySelectorAll('button[data-fullscreen]')")

# 9. Update Liquid Glass classes globally
code = code.replace('class="glass panel"', 'class="glass panel liquid-glass"')
code = code.replace('class="glass hero"', 'class="glass hero liquid-glass"')

with open(path, "w", encoding="utf-8") as f:
    f.write(code)

print("FILE_PATCH_COMPLETE")
