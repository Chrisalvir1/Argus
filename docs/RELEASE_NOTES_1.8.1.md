# Argus 1.8.1 — Visual Experience & Release Hardening

## 🎨 Visual & UI Polish
- **Smooth WebGL Shader Noise**: Replaced discrete grid tiles with smooth bilinear procedural noise in the cinematic background.
- **Clean Card Header**: Removed raw floating seasonal text tags (`summer`, `spring`, `winter`, `autumn`).
- **Glassmorphism Low Battery Badge**: Formatted low battery warnings as styled glassmorphic badges (`backdrop-filter: blur(12px)`) with crisp icons and clear contrast.

## ⚙️ Release & Workflow Resilience
- **Idempotent CI/CD Release Workflow**: Updated `.github/workflows/release.yml` to automatically update release artifacts when re-tagging releases.

## 🧪 Testing & Verification
- 50/50 unittests passing 100% green.
- All 8 GitHub Actions CI checks passing 100% green.
