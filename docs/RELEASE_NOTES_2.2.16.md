# Release Notes - Argus v2.2.16

## Hotfix
1. **Critical UI CSS Fix:** Fixed a missing closing brace in the CSS injected via the `argus-panel.ts` template. This syntax error was causing the browser to drop the remainder of the stylesheet, which included the main `:host` rule and the `ios-confirm-backdrop` styles, leading to an entirely unstyled white screen layout in both the main Panel and the React Dashboard widget.
