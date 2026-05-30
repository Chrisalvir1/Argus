#!/bin/bash
# =============================================================
# Argus v1.3.3 — Deploy completo a Home Assistant
# Ejecutar en: HA Terminal & SSH addon
# =============================================================
set -e

BASE=/config/custom_components/argus
REPO=https://raw.githubusercontent.com/Chrisalvir1/Argus/main/custom_components/argus

echo "=== Argus v1.3.3 Deploy ==="

# 1. Verificar que existe el directorio
mkdir -p "$BASE/www"

# 2. Descargar todos los archivos Python
for f in __init__.py alarm_control_panel.py config_flow.py const.py manifest.json panel.py storage.py websocket_api.py; do
  if curl -sf "$REPO/$f" -o "$BASE/$f"; then
    echo "  OK  $f"
  else
    echo "  ERR $f" && exit 1
  fi
done

# 3. Descargar el panel JS, la tarjeta Lovelace y activos www
if curl -sf "$REPO/www/argus-panel.js" -o "$BASE/www/argus-panel.js"; then
  echo "  OK  www/argus-panel.js"
else
  echo "  ERR www/argus-panel.js" && exit 1
fi

if curl -sf "$REPO/www/argus-card.js" -o "$BASE/www/argus-card.js"; then
  echo "  OK  www/argus-card.js"
else
  echo "  ERR www/argus-card.js" && exit 1
fi

# 3b. Descargar la imagen de fondo oficial de Argus
if curl -sf "$REPO/www/argus-default-bg.jpg" -o "$BASE/www/argus-default-bg.jpg"; then
  echo "  OK  www/argus-default-bg.jpg"
else
  echo "  WARN  www/argus-default-bg.jpg no encontrado (puede ser una instalación antigua)"
fi

# 4. Verificar que config_flow.py está reparado (sin el bug)
if grep -q 'self\._ dict' "$BASE/config_flow.py"; then
  echo "  ERR config_flow.py todavía tiene el bug!"
  exit 1
else
  echo "  OK  config_flow.py verificado (sin SyntaxError)"
fi

# 5. Agregar 'argus:' a configuration.yaml si no existe
# (necesario para que el panel aparezca en la barra lateral sin config entry)
if ! grep -q '^argus:' /config/configuration.yaml; then
  echo "" >> /config/configuration.yaml
  echo "# Argus Security Panel" >> /config/configuration.yaml
  echo "argus:" >> /config/configuration.yaml
  echo "  OK  argus: agregado a configuration.yaml"
else
  echo "  OK  argus: ya existe en configuration.yaml"
fi

echo ""
echo "=== Deploy completado. Reiniciando HA... ==="
ha core restart
