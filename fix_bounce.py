import re

with open("custom_components/argus/www/argus-panel.js", "r") as f:
    js = f.read()

# 1. Update CSS if it wasn't updated
css_str = """
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
    # Just append it to the styles
    js = js.replace("</style>", css_str + "\n</style>")

# 2. Add bounce-in trigger
old_render = "  _renderModeView() {"
new_render = """  _renderModeView() {
    const el = this.shadowRoot.getElementById('mode-view');
    if (el) {
      el.classList.remove('bounce-in');
      void el.offsetWidth;
      el.classList.add('bounce-in');
    }"""
js = js.replace(old_render, new_render)

with open("custom_components/argus/www/argus-panel.js", "w") as f:
    f.write(js)
