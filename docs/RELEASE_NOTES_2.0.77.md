# Argus v2.0.77 — Patch Release

## Fixed
- **Time Format**: Clock formatting checks directly read the custom UI settings `clock_format` to prevent unsynchronized state on re-renders. Added temporal console logging in `_formatTime` to audit format loads.
- **Profile Avatar**: Sourced `prof.picture` within the active profile badge (`_updateProfileBadge()`) to render the profile picture correctly if populated, rather than defaulting to initials.
- **Access Control Roles**: Removed low-contrast neon colors in favor of muted semi-transparent backdrops (`rgba(255,255,255,0.08)` to `0.12`) with high-contrast text. Styled role labels beneath user names with muted grey text.
- **Weather Falling Backing**: Configured immediate background gradient updates matching weather conditions (Apple Weather style) to cover parent wrappers while WebGL assets are loading.
- **Default Theme Styling**: Restored clean text shadows on key containers and buttons when default dark mode is active to ensure legibility.
- **Background URL Retention**: Preserved the custom background image URL database entries during saves in "Predeterminado" mode, allowing switching back without loss.
