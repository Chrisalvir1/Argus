## Argus v0.5.1 — Fix armado lento + desarme bloqueado

### Bugs corregidos

- **Armado instantaneo por defecto** — `DEFAULT_ARMING_TIME` cambiado de 60s a 0s. Las nuevas instalaciones arman de inmediato sin delay de salida. Las existentes pueden cambiarlo en Opciones.
- **Desarme siempre funciona** — El boton Desarmar ya no es rechazado silenciosamente. Ahora solo se requiere codigo para desarmar si `Codigo requerido para armar` esta activado. Antes cualquier instalacion con un PIN configurado bloqueaba el desarme desde el panel.
- **Sync a alarma vinculada no bloquea** — `blocking=True` cambiado a `blocking=False` en la sincronizacion con la entidad vinculada (HomeKit/Aqara). Evita que una alarma vinculada lenta bloquee el desarme de Argus.

### Deploy en HA Terminal

```bash
REPO=https://raw.githubusercontent.com/Chrisalvir1/Argus/main/custom_components/argus
BASE=/config/custom_components/argus
curl -sf "$REPO/alarm_control_panel.py" -o "$BASE/alarm_control_panel.py" && echo OK
curl -sf "$REPO/const.py" -o "$BASE/const.py" && echo OK
ha core restart
```

> Si el armado sigue siendo lento, ve a Integraciones > Argus > Configurar y cambia el **Tiempo de armado** a 0.
