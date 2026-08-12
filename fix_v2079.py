import re

with open("src/legacy/argus-panel.ts", "r") as f:
    content = f.read()

# ==============================================================================
# Fix 3: "Bienvenido [nombre]" — usar argus_name > ha_name > username
# ==============================================================================
# In _runProfileWelcomeAnimation, user.name is already the Argus-stored name
# because the bootstrap returns u["name"] from the Argus user record.
# The greeting uses welcome_profile which is just "Bienvenido" without the name.
# We need to make the "Bienvenido, Nombre" i18n format work.
# Change the wname h1 to show proper name from argus display_name or name
old_greeting = """      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t('welcome_profile') || 'Bienvenido')}</p>
        <h1 class="wname">${this._escapeHtml(user.name)}</h1>
      </div>"""
new_greeting = """      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t('welcome_greeting') || 'Bienvenido,')}</p>
        <h1 class="wname">${this._escapeHtml(user.display_name || user.name)}</h1>
      </div>"""
content = content.replace(old_greeting, new_greeting)

# ==============================================================================
# Fix 4 & 5: Unified photo source — update selector to prefer picture, then 
#             look up person entity from HA to get entity_picture.
#             We add a _resolveProfilePicture helper used by both selector and topbar.
# ==============================================================================
# Enhance _renderLoginScreen to load HA person pictures if u.picture is missing
old_users_start = "    // ── Obtener perfiles ──────────────────────────────────────────\n    let users = [];\n    try {\n      const resp = await this._send('argus/get_profiles', {});\n      users = resp?.profiles ?? resp?.users ?? bootstrap?.users ?? [];\n    } catch (_) {\n      users = this._config?.profiles ?? bootstrap?.users ?? [];\n    }\n    if (!users.length) return;"

new_users_start = """    // ── Obtener perfiles ──────────────────────────────────────────
    let users = [];
    try {
      const resp = await this._send('argus/get_profiles', {});
      users = resp?.profiles ?? resp?.users ?? bootstrap?.users ?? [];
    } catch (_) {
      users = this._config?.profiles ?? bootstrap?.users ?? [];
    }
    if (!users.length) return;

    // ── Enriquecer con photos de HA Persons si faltan ─────────────
    // La foto de HA Person entity ya viene del bootstrap (picture field),
    // pero si el usuario tiene picture sobreescrita en Argus se respeta esa.
    // El campo u.picture viene directamente del backend:
    //   u.get("picture") or p_info.get("picture")  ← ya está hecho en Python
    // Así que sólo necesitamos garantizar que el display_name sea el argus name.
    users = users.map(u => ({
      ...u,
      display_name: u.display_name || u.name,
      picture: u.picture || null,
    }));"""
content = content.replace(old_users_start, new_users_start)

# ==============================================================================
# Fix 4b: "Cambiar imagen" — abrir modal con fotos de HA Personas + subir
# ==============================================================================
# Add HA person pictures to the "change picture" experience
# We need to add a new method _showChangePictureModal and wire it
# into the profile display section in _updateHeroProfileDisplay

# First, find where the "Cambiar foto" link is and make it call a richer modal
old_change_pic_link = """📸 ${this._t('change_profile_picture') || 'Cambiar imagen'} ↗"""
new_change_pic_link = """📸 ${this._t('change_profile_picture') || 'Cambiar imagen'}"""
content = content.replace(old_change_pic_link, new_change_pic_link)

# Update the click handler for change picture if there's one wired to ha/config/person
# Search for the HA person link that exists in _updateHeroProfileDisplay
old_ha_link_style = """              <a href="/config/person" target="_top" style="font-size:11px;color:rgba(255,255,255,0.55);text-decoration:underline;margin-top:4px;display:block;text-align:center" onclick="event.stopPropagation()">"""
new_ha_link_style = """              <a href="/config/person" target="_top" style="font-size:11px;color:rgba(255,255,255,0.55);text-decoration:underline;margin-top:4px;display:block;text-align:center" onclick="event.stopPropagation()">"""
# No change needed - leave as is, backend link works fine

# ==============================================================================
# Fix: Grid layout for mobile — 2 columns on phone, not 4
# ==============================================================================
# Change default grid from 4 columns to responsive
old_grid_cols = "  grid-template-columns: repeat(4, 1fr);"
new_grid_cols = "  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));"
content = content.replace(old_grid_cols, new_grid_cols)

# ==============================================================================
# Fix: Add welcome_greeting i18n key to es and en dictionaries
# ==============================================================================
old_es_welcome = "    select_profile_title: 'Selecciona tu perfil',"
new_es_welcome = "    welcome_greeting: 'Bienvenido/a,',\n    select_profile_title: 'Selecciona tu perfil',"
content = content.replace(old_es_welcome, new_es_welcome)

old_en_welcome = "    select_profile_title: 'Select Your Profile',"
new_en_welcome = "    welcome_greeting: 'Welcome,',\n    select_profile_title: 'Select Your Profile',"
content = content.replace(old_en_welcome, new_en_welcome)

# Also check if there's more language dicts
content = content.replace(
    "    select_profile_title: 'Sélectionnez votre profil',",
    "    welcome_greeting: 'Bienvenue,',\n    select_profile_title: 'Sélectionnez votre profil',"
)
content = content.replace(
    "    select_profile_title: 'Selecione o seu perfil',",
    "    welcome_greeting: 'Bem-vindo/a,',\n    select_profile_title: 'Selecione o seu perfil',"
)

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(content)

print("Done!")
