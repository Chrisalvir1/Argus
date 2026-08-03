# Argus v2.0.10 — Interactive Widgets & Aesthetic Personalization Fixes

## What's New

This release fixes widget interactivity and aesthetic personalization controls based on user feedback.

---

## 🛠️ Key Improvements & Fixes

### ⚙️ Interactive Dashboard Widgets Fixed
- **Clean Event Listeners:** Removed DOM node cloning during widget drag binding. Internal buttons inside widgets (activity refresh, forensic export, user access toggles, etc.) remain 100% interactive and responsive.
- **Widget Resizing & Dragging:** Restored resizing (`S`, `M`, `L`, `XL`), visibility toggling (`Mostrar` / `Ocultar`), and drag-and-drop reordering.
- **Top Bar "Config. Widgets" Button:** Fully functional toggle for grid edit mode with visual feedback.

### 🎨 Personalization Section Restored & Expanded by Default
- **Always Visible Options:** The Aesthetic Personalization section now starts expanded by default, showing all custom background options, weather sources, temperature display settings, emergency number configuration, and SOS actions immediately.
- **Toggle Header Fixed:** Resolved an issue where localized string updates destroyed the collapse/expand chevron. The header toggle (`▲ Ocultar` / `▼ Desplegar`) works smoothly.

---

## 🧪 Tests

All **124 unit and integration tests** pass.

---

## 📦 Install / Update

Use **HACS** or manually copy `custom_components/argus/` into your Home Assistant configuration directory.  
*Important: Clear your browser cache (`Ctrl+Shift+R` / `Cmd+Shift+R`) after updating.*
