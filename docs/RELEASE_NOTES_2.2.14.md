# Release Notes - Argus v2.2.14

## Highlights

1. **New `XS` (Extra Small) Widget Sizing & Compact Box Layout:**
   - Added support for the `XS` size across all widgets.
   - Fixed Backup & Restore (`#w-backup`) and GitHub Support (`#w-github`) so they fit compactly without large vertical gray empty spaces.
   - Widgets adapt cleanly with internal scrollbars (`overflow-y: auto`) if content overflows, preventing infinite card stretching.

2. **Modes Jelly Water-Drop Bounce Modal (`jelly-modal`):**
   - Added dedicated mode configuration modal with smooth spring jelly bounce animation (`@keyframes jellyBounce`).
   - Allows keeping `#w-modes` compact on the main grid while easily opening mode settings.

3. **Explicit Multi-Language Save Feedback & No Auto-Saving:**
   - Selections and removals in SOS Actions and Modes now remain staged in UI drafts until explicitly saved.
   - Save buttons show clear `"✓ Guardado exitosamente"` (translated into ES, EN, FR, PT, IT, ZH, RU) with a green gradient confirmation state.
