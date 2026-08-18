# Release Notes - Argus v2.2.22

## Visual Parity with v2.2.13 in Full React Architecture

### Hero Layout (matches v2.2.13)
- `active-instances` widget now occupies full width as the hero card at top
- `history` + `modes` side by side below hero
- `automations` + `access` in bottom row
- `sos` at bottom — storage key bumped to v3 to force fresh layout

### ActiveInstances Widget — Complete Rewrite
- Instance name header (🏠 + alarm entity friendly_name)
- Connected/Disconnected status badge (green dot)
- System status badge (SISTEMA DESARMADO / ARMADO · EN CASA, etc.)
- 2×2 mode buttons grid with active indicator dot
- Animated shield SVG (green=disarmed, orange=armed, red=triggered)
- Sensor list with ABIERTO/CERRADO badges + battery %
- Disarm button (green) + SOS button (dark, 2-tap confirm)

### Modes Widget — Complete Rewrite
- 5 mode tabs: Desarmado, En Casa, Ausente, Noche, Vacaciones
- Per-mode config panels: Sensores de Intrusión, Omitir, Sirenas, Tiempos, Paneles externos, MQTT

### HistoryWidget — Updated
- Header buttons: Actualizar, JSON (export), BORRAR
- Color-coded entries with event type, description, timestamp, source

### AccessControlWidget — Updated
- User cards with role badge (Administrador/Estándar), HA account, 4 action icons
- PIN status badge, expiry badge, + Añadir Usuario button

### SOSWidget — Updated
- Dark button style matching v2.2.13 SOS/PÁNICO design
- 2-tap confirm pattern with pulse animation
