# Argus 1.8.0 — Cinematic local security

Argus 1.8 removes experimental and misleading surfaces and introduces a new cinematic interaction layer.

## Removed

- TTS actions and TTS WebSocket discovery.
- Google Generative AI camera analysis.
- Argus AI smart-arming suggestions.
- Argus Copilot references.
- Matter claims and labels. HomeKit Bridge remains documented by its real capability.

Existing stored automation records are preserved for safe rollback, but removed action types are ignored at runtime and no longer shown in the interface.

## New visual system

- Procedural WebGL atmosphere with high-density rain, rainstorms, lightning-only storms, snow, fog, clouds, sun, stars, lunar phases and sensor-backed eclipse presentation.
- Seasons derive from Home Assistant latitude and the current month, with northern/southern hemisphere correction.
- Premium opening, closing, saving, modal, button and sensor transitions.
- `prefers-reduced-motion` remains respected.
- Lovelace card rebuilt with seven-language controls, vacation mode, escaped content and truthful missing-data states.

## Reliability

- Deterministic local automation executor with an explicit service-domain allowlist.
- Removed experimental actions cannot be executed.
- Stale smart-arming notifications are dismissed during setup.
- Version aligned to 1.8.0 in manifest, constants, card and tests.

## Upgrade

Restart Home Assistant and perform a hard browser refresh after installing. Review existing automations: replace removed TTS or generative-camera actions with native Home Assistant automations if still needed.
