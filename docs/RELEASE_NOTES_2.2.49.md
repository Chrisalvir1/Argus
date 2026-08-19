# Release Notes v2.2.49

- **Fullscreen Exit Restoration:** Fixed fullscreen stage cleanup on escape and fullscreenchange events to guarantee full restoration of the main dashboard grid.
- **Desktop Fullscreen 100vw/100vh:** Eliminated 16:9 fixed box constraints in desktop fullscreen mode so the view occupies the entire viewport cleanly.
- **Unified Sensor Chips:** Cleaned up conflicting sensor width rules to ensure consistent pill-style sensors without ugly name truncations across both standard and fullscreen modes.
