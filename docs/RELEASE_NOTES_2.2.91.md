# Argus v2.2.91 — React Console Parity, Sections Resizing & Sensor Polish

Argus **v2.2.91** brings complete React console parity to dashboard cards, layout resizing in Sections, and crisp 3D sensor chip styling.

---

## 🛡️ Highlights

1. **Argus Card React Parity**:
   - Total elimination of legacy HTML fallback templates in favor of pure React SecurityConsole across all dashboards.
   - 3D tactile mode buttons with glass highlights and crisp contrast.
   - Sensor chip capsules with real-time battery indicators and active status coloring.

2. **Sections & Grid Resizing**:
   - Added `getGridOptions()` and `getLayoutOptions()` enabling multi-column horizontal and vertical resizing in Home Assistant Sections dashboards.
   - Container query `@container argus-console` dynamic switching between 3-column horizontal and clean vertical layouts.

3. **Sensor Backdrop Shadow Elimination**:
   - Removed redundant compositing backdrop filter causing rectangular shadows behind sensor chips.
