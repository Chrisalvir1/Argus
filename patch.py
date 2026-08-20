with open("custom_components/argus/arming_voice.py", "r") as f:
    content = f.read()

OLD = """def _options(hass, entry):
    merged = dict(entry.options)
    merged.update(hass.data.get(DOMAIN, {}).get("arming_voice_yaml", {}))
    return merged"""

NEW = """
LEGACY_SPANISH_DEFAULTS = {
    "No puedo completar el armado. Hay {count} sensores abiertos: {sensors}.",
    "{closed} se ha cerrado. Faltan {count} sensores por cerrar: {sensors}.",
    "Falta un sensor por cerrar: {sensors}.",
    "Todos los sensores están cerrados. Argus continuará el armado en modo {mode}.",
    "El armado en modo {mode} fue cancelado manualmente.",
    "Alerta de seguridad. La alarma fue disparada por: {sensors}. Modo {mode}.",
    "Alerta adicional. También se activó {sensor}. Ya hay {count} sensores involucrados: {sensors}.",
}

def _options(hass, entry):
    merged = dict(entry.options)
    merged.update(hass.data.get(DOMAIN, {}).get("arming_voice_yaml", {}))
    for k, v in list(merged.items()):
        if isinstance(v, str) and v.strip() in LEGACY_SPANISH_DEFAULTS:
            merged.pop(k)
    return merged"""

with open("custom_components/argus/arming_voice.py", "w") as f:
    f.write(content.replace(OLD, NEW))
