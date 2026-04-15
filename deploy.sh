#!/bin/bash
cd /Users/chrisalvir/Desktop/argus

# 1. Run the python script to patch the file
python3 apply_v096_local.py

# 2. Add files
git add custom_components/argus/manifest.json custom_components/argus/www/argus-panel.js

# 3. Commit
git commit -m "feat: v0.9.6 — Interfaz Liquid Glass macOS, alertas de bateria y boton SOS iOS"

# 4. Push to main
git push origin main

# 5. Tag and push tag
git tag v0.9.6
git push origin v0.9.6

# 6. Create Github release
gh release create v0.9.6 --title "v0.9.6 — Liquid Glass & SOS" --notes "## 🆕 Novedades v0.9.6

### 💎 Interfaz Liquid Glass (macOS)
- Nuevo diseno translucido con efecto *blur* y *saturate* para los contenedores principales.
- Sombras suaves y bordes refinados al estilo Apple.

### 🔋 Monitor Inteligente de Baterias
- Detecta automaticamente sensores de intrusion con bateria baja (<= 20%).
- Muestra alertas dinamicas indicando el nombre exacto del sensor afectado.

### 🚨 Boton de Panico (SOS) con Confirmacion iOS
- Nuevo boton dedicado para disparar la alarma manualmente.
- Modal de confirmacion con slider interactivo (deslizar para activar) para evitar toques accidentales."

echo "DEPLOY_COMPLETE"
