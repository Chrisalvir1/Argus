# Argus 1.8.2 — HomeKit & HA Panel Disarm Hotfix

## 🐛 Bug Fix
- **Fix Disarm NameError**: Resolved `NameError: name 'PinAttemptLimiter' is not defined` when executing `alarm_control_panel/alarm_disarm` service calls from Home Assistant frontend and HomeKit integration.
- **Per-Instance Rate Limiting**: Properly wired per-instance `PinAttemptLimiter` instance lookup for secure rate-limited disarm checks.

## 🧪 Testing & Verification
- 50/50 unittests passing 100% green.
- All GitHub Actions CI checks passing 100% green.
