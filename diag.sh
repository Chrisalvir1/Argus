#!/bin/bash
PY="/Users/chrisalvir/Desktop/argus/custom_components/argus/alarm_control_panel.py"
F="/Users/chrisalvir/Desktop/argus/custom_components/argus/www/argus-panel.js"
MF="/Users/chrisalvir/Desktop/argus/custom_components/argus/manifest.json"

echo "=== VERSION ==="
grep 'version' "$MF"

echo ""
echo "=== JS: _saveMode actual ==="
sed -n '/async _saveMode/,/^  }/p' "$F" | head -35

echo ""
echo "=== PY: _get_mode_val actual ==="
sed -n '/def _get_mode_val/,/def _sensors_for_state/p' "$PY"

echo ""
echo "=== PY: arming_delay comparison ==="
grep -n 'arming_delay\|> 0\|int(' "$PY" | head -20

echo ""
echo "=== PY: _async_sensor_changed entry_delay ==="
sed -n '/_async_sensor_changed/,/def _async_trigger_now/p' "$PY" | head -45
