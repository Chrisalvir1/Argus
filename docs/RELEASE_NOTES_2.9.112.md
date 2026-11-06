# Argus 2.9.112

- Keep the web dashboard layout stable when the Home Assistant sidebar is opened or hidden. The responsive profile now follows the browser viewport, so the drawer only changes available widget width; it does not select a different saved desktop arrangement.
- Show the assigned zones and sensors for the mode being configured in Argus Voice, with the real default announcement text for each event.
- Let the user switch each announcement, including the armed confirmation, between the Argus default and a custom message without entering template variables. Clearing a custom message restores the default.
- Correct the wait-start announcement so it says Argus is arming and checking zones rather than incorrectly saying arming failed.
- Keep zone-aware runtime substitution, Home Assistant TTS engine discovery, and up to five parallel media players.

Validation: dashboard/TTS contract tests and frontend build pass. The local Home Assistant frontend bundle is served with the 2.9.112 cache key.
