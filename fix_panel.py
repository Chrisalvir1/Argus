#!/usr/bin/env python3
# fix_panel.py — aplica los 2 fixes v0.9.33 en argus-panel.js

path = '/Users/chrisalvir/Desktop/argus/custom_components/argus/www/argus-panel.js'

with open(path, 'r', encoding='utf-8') as f:
    src = f.read()

original_len = len(src)
changes = 0

# ── BUG 1: cloneNode para limpiar listeners acumulados ────────────────────────
# Buscamos por el marcador más único y seguro: el `{ once: true }` en ese contexto
BUG1_MARKER = "    }, { once: true });"
BUG1_FULL_OLD = (
    "    list.addEventListener('change', e => {\n"
    "    const cb = e.target.closest('input[type=checkbox]');\n"
    "    if (!cb || !cb.dataset.entity) return;\n"
    "    const id = cb.dataset.entity;\n"
    "      if (cb.checked) { if (!this._selected.includes(id)) this._selected.push(id); }\n"
    "      else this._selected = this._selected.filter(v => v !== id);\n"
    "      this._renderSelector();\n"
    "    }, { once: true });"
)
BUG1_NEW = (
    "    // FIX v0.9.33 — Bug 1: cloneNode elimina TODOS los listeners acumulados.\n"
    "    // { once:true } no basta: cada _renderSelector() agrega un handler nuevo\n"
    "    // antes de consumir el anterior, disparando multiples handlers al hacer\n"
    "    // click y marcando checkboxes incorrectos de sirenas/sensores vecinos.\n"
    "    const _newList = list.cloneNode(true);\n"
    "    list.parentNode.replaceChild(_newList, list);\n"
    "    _newList.addEventListener('change', e => {\n"
    "      const cb = e.target.closest('input[type=checkbox]');\n"
    "      if (!cb || !cb.dataset.entity) return;\n"
    "      const id = cb.dataset.entity;\n"
    "      if (cb.checked) { if (!this._selected.includes(id)) this._selected.push(id); }\n"
    "      else this._selected = this._selected.filter(v => v !== id);\n"
    "      this._renderSelector();\n"
    "    });"
)

if BUG1_FULL_OLD in src:
    src = src.replace(BUG1_FULL_OLD, BUG1_NEW, 1)
    changes += 1
    print('BUG 1 APLICADO: cloneNode listener fix')
else:
    # fallback: buscar por el bloque único más corto
    idx = src.find("}, { once: true });")
    if idx != -1:
        # encontrar inicio de ese bloque (retroceder hasta 'list.addEventListener')
        start = src.rfind("    list.addEventListener('change'", 0, idx)
        if start != -1:
            chunk = src[start:idx + len("}, { once: true });")]
            print(f'FALLBACK: chunk encontrado ({len(chunk)} chars)')
            src = src[:start] + BUG1_NEW + src[idx + len("}, { once: true });"):]
            changes += 1
            print('BUG 1 APLICADO: via fallback')
        else:
            print('BUG 1 ERROR: no se encontro list.addEventListener')
    else:
        print('BUG 1 ERROR: marca once:true no encontrada')

# ── BUG 2: leer require_closed del DOM en tiempo real ────────────────────────
BUG2_OLD = (
    "    // FIX-5: bloqueo require_closed con detalle de sensores abiertos\n"
    "    if (modeCfg.require_closed) {"
)
BUG2_NEW = (
    "    // FIX v0.9.33 — Bug 2: leer require_closed del DOM en tiempo real.\n"
    "    // _ui puede estar desincronizado si el usuario activo el checkbox\n"
    "    // pero no presiono 'Guardar modo' antes de armar.\n"
    "    const _chkDom = this.shadowRoot.getElementById('mode-require-closed');\n"
    "    const _requireClosed = _chkDom ? _chkDom.checked : (modeCfg.require_closed || false);\n"
    "\n"
    "    // FIX-5: bloqueo require_closed con detalle de sensores abiertos\n"
    "    if (_requireClosed) {"
)

if BUG2_OLD in src:
    src = src.replace(BUG2_OLD, BUG2_NEW, 1)
    changes += 1
    print('BUG 2 APLICADO: require_closed DOM real-time fix')
else:
    print('BUG 2 ERROR: patron no encontrado')
    idx2 = src.find('modeCfg.require_closed')
    print(f'  modeCfg.require_closed en posicion: {idx2}')

# ── Actualizar version en header ──────────────────────────────────────────────
if changes == 2:
    src = src.replace(
        '* Argus Home Hub \u2013 v0.9.32',
        '* Argus Home Hub \u2013 v0.9.33',
        1
    )
    print('VERSION: header actualizado a v0.9.33')

# ── Escribir ──────────────────────────────────────────────────────────────────
if changes > 0:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(src)
    print(f'ARCHIVO ESCRITO: {len(src)} chars (antes {original_len})')
    print(f'CAMBIOS APLICADOS: {changes}/2')
else:
    print('NADA ESCRITO: 0 cambios')
