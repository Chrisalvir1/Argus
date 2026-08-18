import json, re, subprocess

# 1. Get original v2.2.13 argus-panel.ts
original = subprocess.check_output(["git", "show", "v2.2.13:src/legacy/argus-panel.ts"]).decode("utf-8")

tmpl_start = original.find("const _tmpl = document.createElement('template');")
class_start = original.find("class ArgusPanel extends HTMLElement {")

if tmpl_start == -1 or class_start == -1:
    print("Could not find template boundaries in original v2.2.13")
    exit(1)

tmpl_block = original[tmpl_start:class_start]
header_block = original[:original.find("const TEXTS = {")]
class_and_rest = original[class_start:]

# 2. Build full clean translations dictionary
from scripts.build_clean_translations import TRANSLATION_MAP

# Load translations from previous dump or build fresh
master_langs = ["es", "en", "fr", "pt", "it", "zh", "zh-Hant", "ru", "hi", "ar", "ko", "ja", "uk"]
final_texts = {l: {} for l in master_langs}

# Extract all keys and values from original TEXTS in v2.2.13
orig_texts_block = original[original.find("const TEXTS = {"):tmpl_start]
lang_blocks = re.findall(r"([a-zA-Z-]+):\s*\{([\s\S]*?)\n\s*\},?", orig_texts_block)

for lang, body in lang_blocks:
    if lang in final_texts:
        pairs = re.findall(r"([a-zA-Z0-9_]+)\s*:\s*(\x27(?:\\.|[^\x27\\])*\x27|\"(?:\\.|[^\"\\])*\")", body)
        for k, v in pairs:
            try:
                final_texts[lang][k] = eval(v)
            except Exception:
                final_texts[lang][k] = v[1:-1]

# Apply clean overrides for ES
corrupted_in_es = {
    "access_pin_lbl": "PIN de Acceso",
    "master_pin_lbl": "PIN Maestro",
    "action_failed": "No se pudo realizar la acción",
    "active_profile": "Perfil Activo",
    "all_sensors_bypassed": "Todos los sensores configurados están omitidos.",
    "emergency_number_label": "Número de Emergencia",
    "emergency_help": "Número telefónico marcado en caso de emergencia.",
    "sos_actions": "Acciones Automáticas de SOS",
    "sos_select_outputs": "Seleccionar salidas de pánico",
    "sos_outputs_help": "Dispositivos activados al disparar el SOS.",
    "role_argus_admin_short": "Adm",
    "role_argus_user_short": "Std",
    "use_ha_language": "Usar idioma de Home Assistant",
    "change_profile_picture": "Cambiar foto en Personas de HA ↗",
    "pin_management": "🔑 Gestión de Pines",
    "change_btn": "Cambiar",
    "remove_btn": "Quitar",
    "switch_profile_btn": "👤 Cambiar de Perfil",
    "lang_selector_lbl": "⚙️ Idioma / Language",
    "connected": "CONECTADO",
    "no_sensors_configured": "Sin sensores configurados",
    "edit_dashboard_done": "✓ Listo",
    "edit_dashboard": "Editar tablero",
    "reset_dashboard": "Restablecer diseño",
    "status_open": "ABIERTO",
    "status_closed": "CERRADO",
    "status_idle": "INACTIVO",
    "status_recording": "GRABANDO",
    "status_home": "EN CASA",
    "status_away": "FUERA",
    "system_triggered": "¡ALARMA DISPARADA!",
    "waiting_sensors": "ESPERANDO SENSORES",
    "sos_stop": "DETENER SOS",
    "btn_sos": "🚨 SOS / PÁNICO",
    "user_no_pin": "Sin PIN de acceso",
    "change_user_pin": "Cambiar PIN",
    "delete_user": "Eliminar usuario",
    "exp_indefinite": "Indefinido",
    "exp_temporary": "Temporal (Fecha/Hora)",
    "active_until": "Vence",
    "expired": "Expirado"
}
final_texts["es"].update(corrupted_in_es)

# Apply TRANSLATION_MAP
for key, trans in TRANSLATION_MAP.items():
    for l, val in trans.items():
        if l in final_texts:
            final_texts[l][key] = val

# Ensure zh-Hant has all keys from zh
for k, v in final_texts["zh"].items():
    if k not in final_texts["zh-Hant"]:
        final_texts["zh-Hant"][k] = v

# Fill missing keys for all languages from EN or ES
all_keys = set(final_texts["es"].keys()).union(set(final_texts["en"].keys()))
for lang in master_langs:
    for k in all_keys:
        if k not in final_texts[lang] or not final_texts[lang][k]:
            if lang == "zh-Hant" and k in final_texts["zh"]:
                final_texts[lang][k] = final_texts["zh"][k]
            elif k in final_texts["en"]:
                final_texts[lang][k] = final_texts["en"][k]
            elif k in final_texts["es"]:
                final_texts[lang][k] = final_texts["es"][k]

# Generate JavaScript const TEXTS = { ... }
lines = ["const TEXTS = {"]
for lang in master_langs:
    lines.append(f"  '{lang}': {{")
    for k, v in sorted(final_texts[lang].items()):
        escaped_v = json.dumps(v, ensure_ascii=False)[1:-1].replace("'", "\\'")
        lines.append(f"    '{k}': '{escaped_v}',")
    lines.append("  },")
lines.append("};\n")

new_texts_block = "\n".join(lines) + "\n"

# Reassemble complete file: header + TEXTS + _tmpl + class ArgusPanel + rest
full_file = header_block + new_texts_block + tmpl_block + class_and_rest

# Add alias customElements.define('argus-panel', ArgusPanel) at the end if not present
if "customElements.define('argus-panel'," not in full_file:
    full_file += "\ntry { if (!customElements.get('argus-panel')) customElements.define('argus-panel', ArgusPanel); } catch(_) {}\n"

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(full_file)

print("Successfully injected TEXTS and preserved full _tmpl in src/legacy/argus-panel.ts")
