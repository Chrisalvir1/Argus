# Release Notes - Argus v2.2.37

## Targeted Security Sensor Battery Monitoring & Alert Filtering

### Highlights
- **Targeted Battery Alerts**: Low battery alerts are now restricted strictly to intrusion and security sensors configured in Argus modes. Unrelated Home Assistant devices (e.g. Apple Watch, iPhones, laptops, media remotes) will no longer trigger banner alerts.
- **Accurate Sensor Battery Telemetry**: Enhanced companion sensor resolution and removed stale caching, ensuring true live battery levels are displayed only for sensors that expose real battery telemetry.
- **Safe Fallback**: Sensors without battery telemetry will cleanly display their open/closed state without showing synthetic battery badges.
