## 🚨 Fix crítico — v0.5.0

### 🐛 Bugs corregidos
- **`config_flow.py` SyntaxError** (`self._ dict` → `self._data`) que causaba:
  - `Invalid handler specified` en Dispositivos y Servicios
  - `alarm_control_panel` nunca cargaba (aparecía como unavailable en el panel)
  - Ninguna entidad de Argus se registraba en Home Assistant

### ✨ Nuevas características
- **Estado en vivo** — el badge del modo (Casa / Ausente / Noche / Vacaciones / ALARMA) se actualiza en tiempo real usando `hass.states` sin recargar la página
- **Sensores monitoreados visibles** — cuando un modo está activo muestra cuántos sensores hay configurados y cuántos están abiertos en ese momento
- **Botón del modo activo resaltado** — el modo armado aparece en azul, los demás en gris
- **Alarma disparada** — borde rojo + icono grande cuando `state = triggered`
- **Sección HomeKit & Matter** — si tienes HomeKit Bridge activo en HA, detecta el código de emparejamiento y genera el QR automáticamente
- **Instrucciones HomeKit** — si no tienes HomeKit Bridge, muestra los pasos para configurarlo

### 📦 Deploy en HA (Terminal addon)
```bash
cd /config/custom_components/argus
REPO=https://raw.githubusercontent.com/Chrisalvir1/Argus/main/custom_components/argus
for f in __init__.py alarm_control_panel.py config_flow.py const.py manifest.json panel.py storage.py websocket_api.py; do
  curl -sf "$REPO/$f" -o "$f" && echo "OK $f" || echo "FAIL $f"
done
curl -sf "$REPO/www/argus-panel.js" -o www/argus-panel.js
ha core restart
```
