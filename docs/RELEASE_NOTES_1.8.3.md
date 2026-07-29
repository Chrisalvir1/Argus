# Argus 1.8.3 — UI Cache Busting & Shader Fixes

## 🎨 Visual & UI Fixes
- **Cache Busting Strategy**: The Argus UI relies on modern ES modules loaded natively by the browser. Unfortunately, mobile apps and Safari aggressively cache these modules indefinitely. Argus `1.8.3` appends strict version tags (`?v=1.8.3`) to all imports in the ES bootstrap chain, forcing all client devices to flush their cache and fetch the visual improvements introduced in 1.8.1.
- **Sun & Moon Aspect Ratio**: The celestial shader rendering the sun and moon has been aspect-corrected (`r.x/r.y`), fixing an issue where they appeared as stretched horizontal ovals on wide screens. They now render as perfect glowing orbs.

## 🧪 Testing & Verification
- 50/50 unittests passing 100% green.
- All GitHub Actions CI checks passing 100% green.
