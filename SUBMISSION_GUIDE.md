# Argus Home Hub — Submission Guide

This document contains everything needed to get Argus accepted in HACS by default
and eventually in Home Assistant Core.

---

## Part 1: HACS Default Repository

Getting Argus to appear in HACS without users needing a custom repository URL.

### Status Checklist

- [x] Public GitHub repository
- [x] `custom_components/argus/` structure
- [x] `manifest.json` with all required fields
- [x] `hacs.json` present and valid
- [x] `strings.json` + `translations/en.json` in English
- [x] `services.yaml` in English
- [x] Brand assets: `brand/icon.png` and `brand/logo.png` (256x256, RGBA, transparent bg)
- [x] CI: HACS Action + hassfest validation (`.github/workflows/validate.yml`)
- [ ] PR to `hacs/default` repository (see below)
- [ ] PR to `hacs/brands` repository (see below)

---

### Step 1 — Submit to `hacs/brands`

This is a **separate PR** from the main HACS default submission.

**Repository:** https://github.com/hacs/brands

**What to submit:**
Create a folder `custom_integrations/argus/` in that repo with:
- `icon.png` — 256×256px, PNG, **transparent background** (RGBA)
- `logo.png` — 256×256px, PNG, **transparent background** (RGBA)

The images are ready in `/custom_components/argus/brand/` in this repo.

**PR title:** `Add Argus Home Hub brand`

**PR body:**
```
## Description

Adds brand assets for **Argus Home Hub** — a premium security integration for Home Assistant.

- Repository: https://github.com/Chrisalvir1/Argus
- Integration domain: `argus`
- Icon/Logo: 256x256px PNG with transparent background (RGBA)
```

**Why previous submissions may have been rejected:**
- Images were RGB format (no alpha channel) — now fixed to RGBA with transparent background
- Make sure you submit to `custom_integrations/argus/` NOT `integrations/argus/`

---

### Step 2 — Submit to `hacs/default`

**Repository:** https://github.com/hacs/default

**What to submit:**
Create file `integration/argus.json` with:
```json
{
  "description": "Premium Smart Alarm & Security Panel for Home Assistant",
  "full_name": "Chrisalvir1/Argus",
  "render_readme": true
}
```

**PR title:** `Add Argus Home Hub integration`

**PR body:**
```
## Integration details

- **Name:** Argus Home Hub
- **Repository:** https://github.com/Chrisalvir1/Argus
- **Domain:** `argus`
- **Category:** integration

## Checklist

- [x] The repository is public
- [x] All files are in `custom_components/argus/`
- [x] `manifest.json` is present and valid
- [x] `hacs.json` is present and valid
- [x] Translations exist (`strings.json`, `translations/en.json`)
- [x] Services descriptions are in English (`services.yaml`)
- [x] HACS Action CI passes
- [x] hassfest CI passes
- [x] Brand assets submitted to hacs/brands

## What is Argus Home Hub?

Argus Home Hub is a complete premium security alarm system for Home Assistant.
It replaces the standard alarm panel with a Liquid Glass interface (macOS-inspired),
full audit logging, guest PINs with expiry, animated weather backgrounds, 7-language
support, and more.

The integration is a local_push, config-flow-based integration with zero external
dependencies.
```

**Common rejection reasons:**
1. CI not passing — run HACS Action + hassfest locally first
2. `hacs/brands` PR not submitted or not merged yet
3. Description not in English
4. Missing required fields in `hacs.json`

---

## Part 2: Home Assistant Core

Getting Argus included directly in HA without HACS.

### Current Quality Scale Status

See `quality_scale.yaml` for current Bronze tier progress.

### Blocking Requirements Before PR to `home-assistant/core`

| Requirement | Status | Notes |
|---|---|---|
| Unit tests (pytest) | 🟡 Started | `tests/components/argus/` created |
| Config flow tests | 🟡 Started | `test_config_flow.py` created |
| Type hints complete | 🟡 Partial | `from __future__ import annotations` present |
| `quality_scale.yaml` | ✅ Done | Created |
| English docs | 🟡 Partial | README primarily Spanish |
| Error recovery | 🟠 Todo | Silver tier requirement |
| Test coverage >80% | 🟠 Todo | Need more tests |

### Steps for HA Core submission

1. **Fork** `home-assistant/core`
2. **Copy** `custom_components/argus/` → `homeassistant/components/argus/`
3. **Add tests** to `tests/components/argus/` (expand on existing)
4. **Submit PR** to `home-assistant/core` → `dev` branch
5. Include `quality_scale.yaml` in the PR

### PR template for `home-assistant/core`

**Title:** `Add Argus Home Hub alarm integration`

**Body:**
```
## Description

Adds **Argus Home Hub** — a premium local security alarm integration.

- **Domain:** `argus`
- **IoT class:** `local_push`
- **Config flow:** Yes (no YAML required)
- **External dependencies:** None (pure Python + vanilla JS)

## Integration description

Argus Home Hub is a complete Home Assistant alarm control panel integration
featuring 5 alarm modes (Home, Away, Night, Vacation, Disarmed), configurable
sensor groups per mode, entry delay, siren failover, guest PINs with expiry,
MQTT sync, TTS integration, and a premium Lovelace card with Liquid Glass UI.

## Checklist

- [ ] The code is formatted with `python -m black`
- [ ] There are tests for the config flow
- [ ] New code has been typed
- [ ] `quality_scale.yaml` added
```

---

## Why submissions may have been rejected historically

### HACS brands rejection
The most likely cause: **PNG images were RGB without alpha channel.**
HACS brands requires RGBA (transparent background). This has now been fixed.

### HACS default rejection
Possible causes:
1. Brand PR to `hacs/brands` not merged first
2. CI validation not passing (services.yaml was in Spanish)
3. Missing `hacs.json` fields

### HA Core rejection
HA Core reviewers require:
1. Complete test suite (we had zero tests)
2. `quality_scale.yaml`
3. Adherence to HA code standards
4. English documentation

---

## Useful Links

- HACS default: https://github.com/hacs/default
- HACS brands: https://github.com/hacs/brands
- HA Core: https://github.com/home-assistant/core
- HA brands: https://github.com/home-assistant/brands
- HACS publish docs: https://hacs.xyz/docs/publish/integration/
- HA quality scale: https://developers.home-assistant.io/docs/core/integration-quality-scale/
- HA contributing: https://developers.home-assistant.io/docs/development_submitting/
