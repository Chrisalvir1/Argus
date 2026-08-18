# Release Notes - Argus v2.2.20

## Fixes & UI Layout Optimization
1. **Resolved Widget Stacking Bug:** Aligned default React Grid Layout widget IDs with active widgets (`modes`, `active-instances`, `sos`, `history`, `automations`, `access`). This restores the proper 2-column & 3-column responsive grid layout instead of vertical stacking.
2. **Removed Overlapping Header Controls:** The widget edit header (dots, drag handle) is now strictly rendered only when edit mode is toggled via the Top Bar pencil button.
3. **Live Home Assistant Control:** Connected alarm arm/disarm actions directly to Home Assistant services with responsive visual feedback.
