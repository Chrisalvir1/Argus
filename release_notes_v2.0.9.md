# Argus v2.0.10 — UI Fixes: Widget Grid, Console Layout & HUD

## What's New

This release delivers targeted UI quality fixes following the interactive widget dashboard introduced in v2.0.8.

---

## 🐛 Bug Fixes

### ⚙️ Widget "Config. Widgets" Button Now Works
- **Root cause fixed:** The widget grid `<div>` was missing `id="widget-grid"` — all widget editing code used `getElementById('widget-grid')` and got `null`, making the button completely non-functional.
- The button is now correctly labeled **"⚙️ Config. Widgets"** (inactive) / **"✓ Listo"** (when editing), making its purpose unambiguous.

### 🖥️ Fullscreen Security Console: Horizontal Layout Restored
- Fixed the broken vertical stacking of modes / shield / sensors in fullscreen.
- **Desktop (≥900px):** Modes on the **left** → Shield in the **center** → Sensors on the **right** — true horizontal three-column layout.
- **Mobile (≤900px):** Clean vertical stack: Shield → Modes → Sensors.

### 📊 HUD Info No Longer Overlaps Sensors
- The absolute-positioned HUD (home name, time, temperature) was floating over the sensor list, making sensors illegible.
- **Fix:** The absolute HUD is now hidden via CSS inside the security-console. Instead, a new inline `.console-hud` bar is rendered as a full-width row at the top of the console flex layout — clean, readable, never overlapping sensors.

### 🟢 CONECTADO Indicator Always Visible
- The "CONECTADO" connection status pill was previously only shown in fullscreen mode.
- It now appears at all times on every active alarm instance card.

---

## 🧪 Tests

All **124 unit and integration tests** pass without regressions.

---

## 📦 Install / Update

Use **HACS** or manually copy `custom_components/argus/` into your Home Assistant config.  
After updating, **clear your browser cache** (`Ctrl+Shift+R` / `Cmd+Shift+R`) to flush the JavaScript cache.
