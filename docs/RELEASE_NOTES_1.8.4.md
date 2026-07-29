# Argus 1.8.4 — Activity History Real-Time Fix

## 🐞 Bug Fixes
- **Activity Log Real-Time Sync**: Fixed an issue where the activity history panel would appear empty or fail to update in real-time when actions (arming, disarming, incorrect PINs) were performed. The frontend was expecting `events` from the `argus/get_forensic_timeline` payload instead of `timeline`, and the local event writer was failing to append new events to the active timeline array.
