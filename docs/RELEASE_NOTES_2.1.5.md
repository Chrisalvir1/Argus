# Argus v2.1.5 — Profile Avatar Flight Settle, Mobile Clock Centering, 12h Format & Comprehensive i18n

## Fixed & Enhanced
- **Avatar Landing & Empty Placeholder Animation:**
  - Transition animation precisely calculates the destination coordinates of the top bar profile avatar across Desktop, Mobile Portrait, and Mobile Landscape.
  - Avatar placeholder in the top bar starts transparent/empty during the welcome greeting, and reveals with an elastic bounce right as the flying avatar lands.
- **Mobile Clock Centering:**
  - Fixed mobile portrait CSS layout so the Hero clock (time and date) and profile pill are perfectly centered vertically and horizontally.
- **12h / 24h Clock Format Support:**
  - Clock formatting strictly honors Home Assistant's `12 horas (AM/PM)` locale format (`am_pm`, `12`, `12h`) as well as user personalization preferences, displaying formatted AM/PM times (e.g. `6:44 PM`).
- **Complete Real-Time Localization (i18n):**
  - Changing language immediately updates all UI elements in real time across Spanish, English, French, Portuguese, Italian, Chinese, and Russian without page reloads.
  - Translated profile dropdown labels, role badges, active instance connection badges (`CONECTADO` / `CONNECTED`), sensor state messages, and SOS panic modals.
