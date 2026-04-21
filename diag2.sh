#!/bin/bash
F="/Users/chrisalvir/Desktop/argus/custom_components/argus/www/argus-panel.js"
PY="/Users/chrisalvir/Desktop/argus/custom_components/argus/alarm_control_panel.py"

echo "=== JS: existe id=mode-status en el HTML template? ==="
grep -n 'mode-status\|id="mode-status\|save-mode' "$F" | head -15

echo ""
echo "=== JS: _renderModeView - boton guardar y status span ==="
sed -n '/_renderModeView/,/^  }/p' "$F" | grep -A2 -B2 'save-mode\|mode-status\|Guardar' | head -30

echo ""
echo "=== PY: linea exacta arming_delay > 0 ==="
sed -n '808,820p' "$PY"

echo ""
echo "=== PY: storage save_mode_config handler ==="
grep -n 'save_mode_config\|save_mode\|SAVE_MODE' "$PY" | head -10

echo ""
echo "=== storage.py existe? ==="
ls /Users/chrisalvir/Desktop/argus/custom_components/argus/storage.py 2>/dev/null && echo 'SI' || echo 'NO'

echo ""
echo "=== websocket.py / ws_api.py handler save_mode_config ==="
find /Users/chrisalvir/Desktop/argus/custom_components/argus/ -name '*.py' | xargs grep -l 'save_mode_config' 2>/dev/null
