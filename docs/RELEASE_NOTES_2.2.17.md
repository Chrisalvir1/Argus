# Release Notes - Argus v2.2.17

## Hotfix
1. **Critical UI CSS Fix:** Fixed a missing closing brace in the CSS injected via the `argus-panel.ts` template. This syntax error was causing the browser to drop the remainder of the stylesheet, which included the main `:host` rule and the `ios-confirm-backdrop` styles, leading to an entirely unstyled white screen layout in both the main Panel and the React Dashboard widget.

## Fixes v2.2.17
1. **Fixed Mode Modal:** Forced modal to appear inline when the Mode is clicked (Safari/Chrome visibility flex animation bug fixed).
2. **Removed React Toolbar:** The dashboard React editor toolbar was removed per your instructions, integrating strictly to the liquid glass legacy pencil + Guardar button flow.
