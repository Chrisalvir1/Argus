# Argus 2.9.116

The portrait-only repaint bands were shared by dashboard widgets, not limited to Activity History. In WebKit, translucent React cards with `backdrop-filter` were composited above Argus's fixed animated canvas; that produced rectangular color bands and edge flicker in History and Automations. All portrait dashboard cards now use a consistent steady Liquid Glass gradient without backdrop filtering or shadows. Position transitions are disabled while the dashboard is not being edited. Scrolling and edit gestures remain enabled; desktop layout and the security core are unchanged.

Validation: frontend build, frontend tests, Python regression contracts, and local Home Assistant static endpoint checks.
