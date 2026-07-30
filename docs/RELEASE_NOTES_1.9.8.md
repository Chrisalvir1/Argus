# Argus v1.9.8 Release Notes

## 🛡 Security & Core
* **Race Condition Fix in Alarm Trigger**: Fixed a critical bug where the alarm would mistakenly trigger if a sensor entry delay expired in the exact same processor cycle that an automation or a user disarmed the panel. Disarming now instantly and permanently aborts any queued triggers.
* **Resilient Disarm**: The system strictly honors disarm commands (both with and without PIN, depending on configuration) even during high-load asynchronous sensor events.

## 🌍 Internationalization (i18n) & UI
* **Complete Audit Log Translation**: Fixed an issue where the backend-generated events (like `user_added`, `ui_configuration_updated`, `automation_executed`) were displayed in raw English or a mix of languages. The panel now maps these to localized badges and descriptions dynamically.
* **Triggered Mode Rendering Fix**: Fixed a `ReferenceError` inside the activity log localization function that would cause the entire history screen to fail and show "No events" when an alarm trigger event was recorded.
* **Onboarding & Setup Screens**: All first-run, setup, and admin claim screens have been fully ported to the `_t()` translation engine and now support all 7 languages natively.
* **Missing Methods**: Restored the missing `_toggleAccessSection` method, resolving UI crashes when clicking on User and PIN configuration elements.

## 🛠 Stability
* Passed 118 automated security and UI tests.
* JavaScript syntax checked and cache-busting updated.
