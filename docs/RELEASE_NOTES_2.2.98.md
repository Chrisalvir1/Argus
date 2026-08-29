# Argus Home Hub v2.2.98

## 🛡️ Thread Safety & Sensor Automation Hotfix
- **Thread-Safe Sensor Automations**: Fixes Home Assistant thread-safety failures when sensor-state callbacks schedule Argus automations. The `sensor_opened` automation evaluation now uses `hass.create_task()`, allowing it to be safely scheduled from executor threads and preventing the subsequent “coroutine was never awaited” warning.
- **Frontend Clock Refresh Guard**: Resolved `TypeError: this.updateHeroClock is not a function` during UI language changes, ensuring smooth locale switching across desktop and mobile devices.
