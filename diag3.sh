#!/bin/bash
WS="/Users/chrisalvir/Desktop/argus/custom_components/argus/websocket_api.py"
ST="/Users/chrisalvir/Desktop/argus/custom_components/argus/storage.py"
PY="/Users/chrisalvir/Desktop/argus/custom_components/argus/alarm_control_panel.py"
F="/Users/chrisalvir/Desktop/argus/custom_components/argus/www/argus-panel.js"

echo "=== websocket_api.py save_mode_config handler ==="
awk '/save_mode_config/,/^@/' "$WS" | head -60

echo ""
echo "=== storage.py save_mode_config / async_save_mode ==="
awk '/def.*save_mode\|async.*save_mode\|save_mode_config/,/^def /' "$ST" | head -50
grep -n 'def ' "$ST" | head -20

echo ""
echo "=== JS: no existe id=mode-status en template HTML ==="
grep -n 'id=.mode-status' "$F" | head -5

echo ""
echo "=== JS: readonly flag en _renderModeView ==="
grep -n 'readonly\|_readonly\|read.only' "$F" | head -15
