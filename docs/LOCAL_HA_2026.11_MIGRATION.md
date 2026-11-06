# Argus local migration to Home Assistant Core 2026.11

Date: 2026-11-05
Argus version retained at the time of the local upgrade: **2.9.158**
Local address: **http://127.0.0.1:8123/argus**

## Private pre-upgrade backup

A private backup of the source and isolated local Home Assistant test
environment was created outside the repository before upgrading Core. Its
filesystem path and fingerprint are intentionally excluded from this document
and all distributable artifacts. The recorded pre-upgrade Core was
`2026.11.0b1`.

## Versions installed and packaged locally

- Home Assistant Core: `2026.11.0` stable, officially released November 4, 2026.
- Home Assistant frontend: `20261028.4`.
- Python: `3.14.10`; project support now declares `>=3.14,<3.16`.
- Node: `26.13.0`.
- React: `19.3.1`; Three.js: `0.187.0`.
- Vite: `8.3.6`; Vitest: `5.1.0`; React Vite plugin: `6.2.1`.
- `zeroconf`: `0.152.0`, explicitly pinned for reproducible HA startup.

The local `argus.zip` was rebuilt after the frontend build. It contains 103
files, including the 2.9.158 manifest, privacy-safe config-entry diagnostics,
and the current React bundle. The archive passed ZIP integrity and contents
checks. SHA-256: `6b7e5f293ee0ad067f84666f2237240b052a6cd9d71fe3055cc5efe8ff25b4cb`.
This is a local install artifact only; no release, tag, upload, or deployment
was made.

## Reconciliation with official Argus upstream

The fetched `origin/main` is commit `8e2cf04`, version `2.6.8`; its merge base
with the local tree is `5ce4114`. The official tree is older than the local
2.9.158 work, so its older UI bundle and version were not copied over Argus.
Its current React/Vite/Vitest toolchain matches the refreshed local versions;
its Three.js floor is `0.186.1`, while local Argus retains `0.187.0`.

The compatible upstream feature adopted locally is config-entry diagnostics.
It reports aggregate entity counts/availability and coarse voice configuration
only. It does not disclose PINs, entity IDs, or configured player/TTS IDs. No
security engine, Three.js geometry, or approved dashboard design was replaced.

## Verification performed

- `python -m homeassistant --version`: **2026.11.0**.
- `bash scripts/local.sh check`: exited successfully against the local Home Assistant configuration directory.
- Core compatibility smoke against the installed HA package: **4 checks passed**
  (exact Core version, Argus modules import, alarm entity inheritance, and
  privacy-safe diagnostics). `pytest` is not installed in these local
  environments, so the four test functions were invoked directly; this is a
  smoke check, not a pytest run.
- Frontend suite: **80 tests passed across 18 files**.
- TypeScript `tsc --noEmit`: passed.
- Production Vite build: passed with Vite `8.3.6`.
- The local Home Assistant server started and returned HTTP **200** for
  `/argus` on `127.0.0.1:8123`. Its log reports Argus integration version
  `2.9.158` starting. No other port was opened for this task.
- Home Assistant returned HTTP **200** for both registered Argus assets; the
  served bootstrap and React bundle matched their local files byte for byte.
  No listener was present on the old lab port `18127` or preview port `5179`.
- The rebuilt `argus.zip` passed `zipfile.testzip()` and was checked to contain
  the expected version, diagnostics module, and frontend bundle, with no
  `__pycache__` or `.pyc` files.

### Backend suite limitation

The latest broad backend `unittest` discovery run contained 222 tests and
finished with **9 failures, 5 errors, and 13 skips** (195 passed). Therefore
the whole backend suite is not certified green. The five errors are caused by
legacy test doubles: four async WebSocket endpoint mocks return `None` where
the test awaits a coroutine, and one `SimpleNamespace` alarm fixture omits the
current `_require_alarm_actor_permission` method. The nine failures are in
source-text/runtime contracts and walk-test fixtures: one expects an old
`async_create_task` source pattern, one searches for battery parsing inline in
the console after that work moved behind `_getSensorBattery`, one expects the
old `argus_walk_test_started` event, and six expect earlier walk-test
observation, timeout, and subscriber-expiration semantics. These failures were
not suppressed or rewritten to make the suite green, and no evidence from
this run attributes them to Home Assistant 2026.11. The focused Core
2026.11 import/contract smoke, nine version/runtime contracts, and frontend
suite pass, but the broad backend suite remains unresolved.

Startup also logged the expected `--skip-pip` notice and a missing optional
TurboJPEG library warning; the latter affects camera snapshot performance, not
Argus alarm or sensor compatibility. A SQLite clean-shutdown warning appeared
on startup and should be watched if it recurs; it did not prevent HTTP startup.

## Current state

The local server is running at `http://127.0.0.1:8123/argus`. The local source,
dependencies, and ZIP artifact retain Argus `2.9.158`. This verifies startup
and the focused compatibility surfaces on this machine; it does not claim a
fresh production HACS install or a production deployment was tested.

## Official version references

- [Home Assistant Core 2026.11.0 release](https://github.com/home-assistant/core/releases/tag/2026.11.0)
- [Home Assistant Core 2026.11.0 package](https://pypi.org/project/homeassistant/2026.11.0/)
- [Home Assistant frontend 20261028.4 package](https://pypi.org/project/home-assistant-frontend/20261028.4/)
