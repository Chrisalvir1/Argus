# Release Notes - Argus v2.2.19

## Critical Hotfix
1. **Registered All Webcomponent Tag Aliases:** Fixed an issue where the Home Assistant panel registered the custom element as `argus-panel-v2018`, but the frontend only defined `argus-panel`, resulting in a blank screen. Defined all aliases (`argus-panel-v2018`, `argus-panel`, `argus-card`).
2. **Global Liquid Glass Styling Injection:** Injected full grid and liquid glass CSS directly upon attachment.
3. **Deep Gradient Background:** Ensured default dark theme background renders immediately.
