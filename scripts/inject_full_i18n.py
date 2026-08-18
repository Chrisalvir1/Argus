import json, re

with open("merged_texts.json") as f:
    merged = json.load(f)

# Load existing base
es_base = merged.get("es", {})
en_base = merged.get("en", {})
fr_base = merged.get("fr", {})
pt_base = merged.get("pt", {})
it_base = merged.get("it", {})
zh_base = merged.get("zh", {})
ru_base = merged.get("ru", {})

# Clean up corrupted keys from ES where Russian/broken text was stored
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
es_base.update(corrupted_in_es)

# Complete master translation map for all common keys in 13 languages
master_langs = ["es", "en", "fr", "pt", "it", "zh", "zh-Hant", "ru", "hi", "ar", "ko", "ja", "uk"]

from scripts.build_clean_translations import TRANSLATION_MAP

# Build full dictionary
final_texts = {l: {} for l in master_langs}

# 1. Start with known base
for k, v in es_base.items():
    final_texts["es"][k] = v

for k, v in en_base.items():
    final_texts["en"][k] = v

for k, v in fr_base.items():
    final_texts["fr"][k] = v

for k, v in pt_base.items():
    final_texts["pt"][k] = v

for k, v in it_base.items():
    final_texts["it"][k] = v

for k, v in zh_base.items():
    final_texts["zh"][k] = v
    # also use as base for zh-Hant
    final_texts["zh-Hant"][k] = v

for k, v in ru_base.items():
    final_texts["ru"][k] = v

# 2. Overlay verified TRANSLATION_MAP
for key, trans in TRANSLATION_MAP.items():
    for l, val in trans.items():
        if l in final_texts:
            final_texts[l][key] = val

# 3. For any missing keys in any language, fallback to English or Spanish
all_known_keys = set(es_base.keys()).union(set(en_base.keys()))

for lang in master_langs:
    for k in all_known_keys:
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
        # Escape string for single-quoted JS literal
        escaped_v = json.dumps(v, ensure_ascii=False)[1:-1].replace("'", "\\'")
        lines.append(f"    '{k}': '{escaped_v}',")
    lines.append("  },")
lines.append("};")

new_texts_block = "\n".join(lines) + "\n"

# Replace in src/legacy/argus-panel.ts
with open("src/legacy/argus-panel.ts") as f:
    content = f.read()

start_idx = content.find("const TEXTS = {")
class_idx = content.find("class ArgusPanel extends HTMLElement {")

if start_idx == -1 or class_idx == -1:
    print("Failed to find boundaries in argus-panel.ts")
    exit(1)

new_content = content[:start_idx] + new_texts_block + content[class_idx:]

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(new_content)

print("Successfully injected full clean i18n dictionary into src/legacy/argus-panel.ts")
