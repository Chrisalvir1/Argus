# Argus Extensions API

Argus exposes an authenticated, local-first WebSocket API through Home
Assistant. Calls use the normal Home Assistant WebSocket connection and require
an administrator account; no Argus security data is sent to a third party.

## Read-only extension commands

- `argus/dashboard` — instances, safe UI configuration, and selectable entities.
- `argus/get_forensic_timeline` — structured events with timestamp, actor,
  severity, action, and detail. Accepts `limit` from 1 to 200.
- `argus/get_stats` — 30-day alarm statistics.

Example payload:

```json
{
  "id": 42,
  "type": "argus/get_forensic_timeline",
  "limit": 100
}
```

## Mutation commands

Configuration mutations remain administrator-only. Extensions should prefer
the narrow commands `argus/save_ui` and `argus/save_mode_config`. Alarm state
changes must use Home Assistant's standard `alarm_control_panel` services so
PIN checks, delays, audit events, and local-first persistence remain intact.

Backups created by the Argus panel use PBKDF2-SHA256 (250,000 iterations) and
AES-256-GCM. Runtime alarm state is intentionally excluded from portable
backups, preventing a restore from becoming an arm/disarm command.
