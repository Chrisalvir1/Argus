# Argus v2.2.92 — Total Eradication of Sensor Backdrop Artifacts

Argus **v2.2.92** completely eliminates the dark rectangular compositing box behind sensor chips by removing nested scroll layer isolation and guaranteeing true transparent overflow.

---

## 🛡️ Highlights

1. **Total Eradication of Sensor Backdrop Rectangle**:
   - Removed nested compositing scroll layer constraints on `.console-sensors`.
   - Set `.console-sensors` and `.entry-content` to pure `overflow: visible` and `background: transparent !important`.
   - Sensors now float cleanly and directly on the card's dark glass background.

2. **Sections & Grid Resizing**:
   - Added `getGridOptions()` and `getLayoutOptions()` enabling multi-column horizontal and vertical resizing in Home Assistant Sections dashboards.
   - Container query `@container argus-console` dynamic switching between 3-column horizontal and clean vertical layouts.

3. **Sensor Backdrop Shadow Elimination**:
   - Removed redundant compositing backdrop filter causing rectangular shadows behind sensor chips.
