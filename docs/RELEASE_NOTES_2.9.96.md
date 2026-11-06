# Argus 2.9.96

Mode selection and disarming now update the security console immediately while the Home Assistant command is in flight. The websocket response includes the alarm entity's committed state, so the UI reconciles to the server result and rolls back if validation or the service fails.

Non-critical persistence, notifications, linked-panel synchronization, and audit work stay outside the immediate state transition where the entity can safely schedule them. Configured arming delays and sensor-wait policies remain authoritative.

The approved security-core geometry and styling are unchanged. No SOS action or emergency call was used for validation.
