import re
import os

path = "/Users/chrisalvir/Desktop/argus/custom_components/argus/www/argus-panel.js"
with open(path, "r", encoding="utf-8") as f:
    code = f.read()

code = code.replace("v0.9.5", "v0.9.6")

const_pattern = r"(constructor\(\)\s*\{.*?)(?=\n\s*\w+\(\)\s*\{|\n\s*_[a-zA-Z0-9_]+\s*=)"
match = re.search(const_pattern, code, flags=re.DOTALL)
if match and "this._showSosConfirm = false;" not in match.group(1):
    new_const = match.group(1) + """
    this._showSosConfirm = false;
    this._sosSliding = false;
    this._sosStartX = 0;
    this._sosOffsetX = 0;
    this._sosConfirmed = false;
"""
    code = code.replace(match.group(1), new_const)

css_patch = """
  static get styles() {
    return css`
      :host {
        --glass-bg: rgba(255, 255, 255, 0.14);
        --glass-border: rgba(255, 255, 255, 0.22);
        --glass-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
        --sos-red: linear-gradient(135deg, #ff4d4f, #d90429);
        --ios-track: rgba(255, 255, 255, 0.12);
        --ios-thumb: linear-gradient(180deg, #ffffff, #dfe7f5);
      }
      .liquid-glass { background: var(--glass-bg); backdrop-filter: blur(22px) saturate(180%); -webkit-backdrop-filter: blur(22px) saturate(180%); border: 1px solid var(--glass-border); box-shadow: var(--glass-shadow); }
      .main-container, .hero, .panel-card, .instances-panel, .modes-panel, .settings-panel { border-radius: 24px; }
      .battery-alert { margin: 0 0 12px 0; padding: 12px 16px; border-radius: 16px; background: rgba(255, 149, 0, 0.16); border: 1px solid rgba(255, 179, 71, 0.32); color: #fff3d6; font-weight: 600; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
      .btn-sos { width: 100%; min-height: 54px; border: 0; border-radius: 18px; background: var(--sos-red); color: white; font-size: 1rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 12px 28px rgba(217, 4, 41, 0.35); transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease; margin-top: 16px; }
      .btn-sos:hover { transform: translateY(-1px); box-shadow: 0 16px 34px rgba(217, 4, 41, 0.42); }
      .btn-sos:active { transform: translateY(0); opacity: 0.94; }
      .ios-confirm-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.42); display: flex; align-items: center; justify-content: center; padding: 18px; z-index: 9999; }
      .ios-confirm-card { width: min(100%, 420px); border-radius: 28px; padding: 22px; color: white; }
      .ios-confirm-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; text-align: center; }
      .ios-confirm-text { font-size: 0.96rem; opacity: 0.92; line-height: 1.45; text-align: center; margin-bottom: 18px; }
      .ios-slider-shell { padding: 4px 0 16px; }
      .ios-slider-track { position: relative; height: 64px; border-radius: 999px; background: var(--ios-track); border: 1px solid rgba(255, 255, 255, 0.16); overflow: hidden; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
      .ios-slider-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 82px; font-size: 0.95rem; font-weight: 700; color: rgba(255, 255, 255, 0.92); pointer-events: none; text-align: center; }
      .ios-slider-thumb { position: absolute; top: 6px; left: 6px; width: 52px; height: 52px; border-radius: 50%; background: var(--ios-thumb); color: #d90429; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22); touch-action: none; user-select: none; cursor: grab; transition: transform 0.12s ease; }
      .ios-confirm-cancel { width: 100%; min-height: 48px; border: 0; border-radius: 16px; background: rgba(255,255,255,0.1); color: white; font-weight: 700; cursor: pointer; }
"""

if "--glass-bg" not in code:
    if "static get styles() {\n    return css`" in code:
        code = code.replace("static get styles() {\n    return css`", css_patch)
    elif "static styles = css`" in code:
        inner_css = css_patch.split("return css`")[1].rsplit("`", 1)[0]
        code = code.replace("static styles = css`", "static styles = css`\n" + inner_css)

methods = """
  _openSosConfirm = () => { this._showSosConfirm = true; this._sosSliding = false; this._sosStartX = 0; this._sosOffsetX = 0; this._sosConfirmed = false; this.requestUpdate(); };
  _closeSosConfirm = () => { this._showSosConfirm = false; this._sosSliding = false; this._sosStartX = 0; this._sosOffsetX = 0; this._sosConfirmed = false; this.requestUpdate(); };
  _triggerSOS = async () => { if (!this._hass) return; await this._hass.callService("alarm_control_panel", "alarm_trigger", { entity_id: "alarm_control_panel.argus_alarm" }); this._closeSosConfirm(); };
  _onSosPointerDown = (ev) => { this._sosSliding = true; this._sosStartX = ev.clientX ?? ev.touches?.[0]?.clientX ?? 0; };
  _onSosPointerMove = (ev) => { if (!this._sosSliding) return; const currentX = ev.clientX ?? ev.touches?.[0]?.clientX ?? 0; this._sosOffsetX = Math.max(0, Math.min(220, currentX - this._sosStartX)); this.requestUpdate(); };
  _onSosPointerUp = async () => { if (!this._sosSliding) return; this._sosSliding = false; if (this._sosOffsetX >= 180) { this._sosConfirmed = true; this._sosOffsetX = 220; this.requestUpdate(); await this._triggerSOS(); return; } this._sosOffsetX = 0; this.requestUpdate(); };

  _renderSosConfirmModal() {
    if (!this._showSosConfirm) return html``;
    return html`
      <div class="ios-confirm-backdrop" @click=${this._closeSosConfirm}>
        <div class="ios-confirm-card liquid-glass" @click=${(e) => e.stopPropagation()}>
          <div class="ios-confirm-title">Confirmar pánico</div>
          <div class="ios-confirm-text">Desliza para disparar la alarma inmediatamente.</div>
          <div class="ios-slider-shell">
            <div class="ios-slider-track">
              <div class="ios-slider-label">${this._sosConfirmed ? "Enviando SOS..." : "Desliza para activar SOS"}</div>
              <div class="ios-slider-thumb" style="transform: translateX(${this._sosOffsetX}px);"
                @pointerdown=${this._onSosPointerDown} @pointermove=${this._onSosPointerMove} @pointerup=${this._onSosPointerUp} @pointercancel=${this._onSosPointerUp}
                @touchstart=${this._onSosPointerDown} @touchmove=${this._onSosPointerMove} @touchend=${this._onSosPointerUp}>🚨</div>
            </div>
          </div>
          <button class="ios-confirm-cancel" @click=${this._closeSosConfirm}>Cancelar</button>
        </div>
      </div>
    `;
  }

  _renderBatteryAlerts() {
    if (!this._hass?.states) return html``;
    const states = this._hass.states;
    const lowBatteries = Object.values(states).filter((st) => {
      const isBattery = st.entity_id?.endsWith("_battery") || st.attributes?.device_class === "battery";
      if (!isBattery || st.state === "unknown" || st.state === "unavailable") return false;
      const level = Number(st.state);
      return !Number.isNaN(level) && level <= 20;
    });
    if (!lowBatteries.length) return html``;
    return html`
      <div class="battery-alerts-container">
        ${lowBatteries.map(b => html`<div class="battery-alert">⚠️ Batería baja: ${b.attributes.friendly_name || b.entity_id} (${b.state}%)</div>`)}
      </div>
    `;
  }

"""

if "_renderSosConfirmModal" not in code:
    code = code.replace("  render() {", methods + "  render() {")

if "liquid-glass" not in code.split("render() {")[1][:500]:
    code = code.replace('class="main-container"', 'class="main-container liquid-glass"')
    code = code.replace('class="panel-card"', 'class="panel-card liquid-glass"')
    code = code.replace("class='main-container'", "class='main-container liquid-glass'")

if "this._renderBatteryAlerts()" not in code:
    render_start = '<div class="main-container liquid-glass">'
    if render_start in code:
        code = code.replace(render_start, render_start + "\n        ${this._renderBatteryAlerts()}")

if "btn-sos" not in code:
    render_end = "      </div>\n    `;\n  }"
    new_render_end = """        <button class="btn-sos" @click=${this._openSosConfirm}>🚨 SOS / PÁNICO</button>
        ${this._renderSosConfirmModal()}
      </div>
    `;
  }"""
    if render_end in code:
        code = code.replace(render_end, new_render_end)
    else:
        code = code.replace("</div>\n    `;", """  <button class="btn-sos" @click=${this._openSosConfirm}>🚨 SOS / PÁNICO</button>
  ${this._renderSosConfirmModal()}
</div>
    `;""")

with open(path, "w", encoding="utf-8") as f:
    f.write(code)

print("PATCH APPLIED SUCCESSFULLY")
