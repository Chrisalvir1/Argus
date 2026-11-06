# Argus 2.9.121

- Restyle the per-mode assigned-zone rows with a blue glass surface and high-contrast text instead of the muted empty-state pill.
- Import legacy voice values from config-entry data/options and YAML into the Argus TTS editor on first use. Keep original empty messages, players, and engine selection; Argus UI values then take precedence at runtime. The old Options editor now points users to Modes / SOS → Voice of Argus.
- Speak pending sensors as “Zona de [área], sensor [nombre] por cerrar” in Spanish, without reading the internal zone number. Also announce the all-sensors-closed transition before the armed confirmation.
- Audit the wait-to-close arming path against the available 2.9.82 backup: policy, blocker detection, recheck, and event/watchdog runtime match. The mode checkbox remains per-mode; the screenshot has that checkbox off, so that mode currently allows immediate arming with open sensors.
- Preserve the security core layout, styling, and animation.
