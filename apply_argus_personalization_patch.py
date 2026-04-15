from pathlib import Path
import subprocess, re, json, shutil
from urllib.parse import urlparse

repo=Path('/Users/chrisalvir/Desktop/argus')
base=repo/'custom_components'/'argus'
files={
 'manifest':base/'manifest.json',
 'ws':base/'websocket_api.py',
 'storage':base/'storage.py',
 'panel':base/'www'/'argus-panel.js',
}
R=lambda p:p.read_text(encoding='utf-8')
W=lambda p,t:p.write_text(t,encoding='utf-8')

def rep(t,o,n,l):
    if n in t:return t
    if o not in t: raise SystemExit(f'MISSING:{l}')
    return t.replace(o,n,1)

m=R(files['manifest'])
m=re.sub(r'"version"\s*:\s*"[^"]+"','"version": "0.9.5"',m,1)
W(files['manifest'],m)

w=R(files['ws'])
w=rep(w,'''@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_ui",
        vol.Optional("zones", default=[]): list,
        vol.Optional("dashboard", default={}): dict,
        vol.Optional("notif_targets", default=[]): list,
        vol.Optional("tts_targets", default=[]): list,
        vol.Optional("users", default=[]): list,
    }
)''','''@websocket_api.websocket_command(
    {
        vol.Required("type"): "argus/save_ui",
        vol.Optional("zones", default=[]): list,
        vol.Optional("dashboard", default={}): dict,
        vol.Optional("notif_targets", default=[]): list,
        vol.Optional("tts_targets", default=[]): list,
        vol.Optional("users", default=[]): list,
        vol.Optional("home_name", default=""): str,
        vol.Optional("background_mode", default="weather"): vol.In(["weather", "none", "photo", "collage"]),
        vol.Optional("background_images", default=[]): list,
        vol.Optional("temperature_source", default="auto"): str,
    }
)''','ws schema')
w=rep(w,'''            "users": msg.get("users", []),
        },''','''            "users": msg.get("users", []),
            "home_name": msg.get("home_name", ""),
            "background_mode": msg.get("background_mode", "weather"),
            "background_images": msg.get("background_images", []),
            "temperature_source": msg.get("temperature_source", "auto"),
        },''','ws save')
W(files['ws'],w)

s=R(files['storage'])
s=rep(s,'''        "users": [],
    }''','''        "users": [],
        "home_name": "",
        "background_mode": "weather",
        "background_images": [],
        "temperature_source": "auto",
    }''','storage defaults')
s=rep(s,'''    data.setdefault("automations", [])
    return data''','''    data.setdefault("automations", [])
    data.setdefault("home_name", "")
    data.setdefault("background_mode", "weather")
    data.setdefault("background_images", [])
    data.setdefault("temperature_source", "auto")
    return data''','storage setdefault')
W(files['storage'],s)

p=R(files['panel'])
for a,b in [
('Argus Home Hub – v0.9.4','Argus Home Hub – v0.9.5'),
('?v=0.9.4','?v=0.9.5'),
('<span id="lbl-home-name">Mi Hogar</span>','<span id="lbl-home-name">Mi Casa</span>'),
('placeholder="Ej: El Chante de Gecko y Chris"','placeholder="Mi Casa"'),
]: p=p.replace(a,b)
p=rep(p,"    this._homeName = '';     // custom home name, editable with PIN\n    this._pending = {};","    this._homeName = '';     // custom home name, editable with PIN\n    this._backgroundMode = 'weather';\n    this._backgroundImages = [];\n    this._temperatureSource = 'auto';\n    this._pending = {};",'ctor')
p=rep(p,"@keyframes wxFogMove{0%{transform:translateX(-40%)}100%{transform:translateX(10%)}}","@keyframes wxFogMove{0%{transform:translateX(-40%)}100%{transform:translateX(10%)}}\n  .wx-static{background:linear-gradient(180deg,rgba(22,28,42,.92),rgba(35,44,67,.95))}\n  .wx-photo,.wx-collage{background:#10141d}\n  .wx-photo::before{content:\"\";position:absolute;inset:0;background:var(--bg-image) center/cover no-repeat;filter:saturate(1.05) contrast(1.05)}\n  .wx-photo::after,.wx-collage::after,.wx-static::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,12,.18),rgba(5,8,12,.5))}\n  .wx-collage-grid{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;padding:4px}\n  .wx-collage-cell{border-radius:18px;background:center/cover no-repeat;min-height:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}",'bg css')
p=rep(p,'''          <div class="save-row">
            <button class="primary" id="btn-save-pin" style="width:100%;margin-top:4px"></button>
            <span class="status" id="pin-status" style="width:100%;text-align:center"></span>
          </div>
        </div>
      </section>''','''          <div class="save-row">
            <button class="primary" id="btn-save-pin" style="width:100%;margin-top:4px"></button>
            <span class="status" id="pin-status" style="width:100%;text-align:center"></span>
          </div>
        </div>
        <div class="subsection" style="margin-top:14px">
          <div class="subsection-title">Mi Casa</div>
          <div class="field-group" style="margin-bottom:10px"><label>Nombre de la casa</label><input type="text" id="home-name-setting" placeholder="Mi Casa" maxlength="60" autocomplete="off"></div>
          <div class="field-group" style="margin-bottom:10px"><label>Fondo del panel</label><select id="bg-mode-select"><option value="weather">Clima animado</option><option value="none">Sin animación</option><option value="photo">Una foto</option><option value="collage">Collage</option></select></div>
          <div class="field-group" style="margin-bottom:10px"><label>Subir foto(s)</label><input type="file" id="bg-file-input" accept="image/*" multiple><div class="small" id="bg-file-help" style="margin-top:6px;opacity:.7">Puedes subir 1 foto o varias para collage.</div></div>
          <div class="field-group" style="margin-bottom:10px"><label>Temperatura a mostrar</label><select id="temp-source-select"></select></div>
          <div class="save-row"><button class="primary" id="btn-save-personalization" style="width:100%">Guardar Mi Casa</button><span class="status" id="personalization-status" style="width:100%;text-align:center"></span></div>
        </div>
      </section>''','settings')
p=rep(p,"    s('home-name-save').addEventListener('click', () => this._saveHomeName());\n    s('home-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._saveHomeName(); });","    s('home-name-save').addEventListener('click', () => this._saveHomeName());\n    s('home-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._saveHomeName(); });\n    s('bg-file-input').addEventListener('change', e => this._handleBackgroundFiles(e));\n    s('btn-save-personalization').addEventListener('click', () => this._savePersonalization());",'binds')
p=rep(p,"    this._users = dashboard.ui?.users || [];\n    this._homeName = dashboard.ui?.home_name || '';\n    // Sync label in button\n    const hnLbl = this.shadowRoot.getElementById('lbl-home-name');\n    if (hnLbl) hnLbl.textContent = this._homeName || 'Mi Hogar';","    this._users = dashboard.ui?.users || [];\n    this._homeName = dashboard.ui?.home_name || '';\n    this._backgroundMode = dashboard.ui?.background_mode || 'weather';\n    this._backgroundImages = dashboard.ui?.background_images || [];\n    this._temperatureSource = dashboard.ui?.temperature_source || 'auto';\n    const hnLbl = this.shadowRoot.getElementById('lbl-home-name');\n    if (hnLbl) hnLbl.textContent = this._homeName || 'Mi Casa';\n    const homeNameSetting = this.shadowRoot.getElementById('home-name-setting');\n    if (homeNameSetting) homeNameSetting.value = this._homeName || '';\n    const bgMode = this.shadowRoot.getElementById('bg-mode-select');\n    if (bgMode) bgMode.value = this._backgroundMode || 'weather';\n    this._populateTemperatureSources();\n    const tempSel = this.shadowRoot.getElementById('temp-source-select');\n    if (tempSel) tempSel.value = this._temperatureSource || 'auto';",'load ui')
insert='''  _populateTemperatureSources() {\n    const sel = this.shadowRoot.getElementById('temp-source-select');\n    if (!sel || !this._hass) return;\n    const extra = [{ entity_id: 'auto', name: 'Automático (sensor local / termostato / clima)' }];\n    for (const s of Object.values(this._hass.states || {})) {\n      const id = s.entity_id || ''; const a = s.attributes || {};\n      if (id.startsWith('climate.') && typeof a.current_temperature === 'number') { extra.push({ entity_id:id, name:`🌡️ ${a.friendly_name || id} (termostato)` }); continue; }\n      if (!id.startsWith('sensor.')) continue;\n      const dc = String(a.device_class || '').toLowerCase(); const u = String(a.unit_of_measurement || a.native_unit_of_measurement || '').toLowerCase(); const v = Number(s.state);\n      if (Number.isFinite(v) && (dc === 'temperature' || ['°c','°f','c','f'].includes(u))) extra.push({ entity_id:id, name:`🌡️ ${a.friendly_name || id}` });\n    }\n    const seen = new Set();\n    sel.innerHTML = extra.filter(x => !seen.has(x.entity_id) && seen.add(x.entity_id) === undefined).map(x => `<option value="${x.entity_id}">${x.name}</option>`).join('');\n  }\n\n  async _handleBackgroundFiles(ev) {\n    const files = Array.from(ev?.target?.files || []).slice(0, 4); if (!files.length) return;\n    const read = f => new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(String(r.result || '')); r.onerror = bad; r.readAsDataURL(f); });\n    this._backgroundImages = (await Promise.all(files.map(read))).filter(Boolean);\n    const help = this.shadowRoot.getElementById('bg-file-help'); if (help) help.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`;\n  }\n\n  _renderEntryBackground(ws, isNight) {\n    const mode = this._backgroundMode || 'weather', imgs = this._backgroundImages || [];\n    if (mode === 'none') return `<div class="wx wx-static"></div>`;\n    if (mode === 'photo' && imgs[0]) return `<div class="wx wx-photo" style="--bg-image:url('${imgs[0].replace(/'/g, "%27")}')"></div>`;\n    if (mode === 'collage' && imgs.length) return `<div class="wx wx-collage"><div class="wx-collage-grid">${imgs.slice(0,4).map(src => `<div class="wx-collage-cell" style="background-image:url('${src.replace(/'/g, "%27")}')"></div>`).join('')}</div></div>`;\n    return this._getWeatherBg(ws, isNight);\n  }\n\n  _savePersonalization() {\n    const pin = this._dashboard?.entries?.[0]?.options?.code || '';\n    const run = () => this._persistPersonalization();\n    if (!pin) return run();\n    this._showPinModal(v => { if (v !== pin) return alert('PIN incorrecto'); run(); });\n  }\n\n  async _persistPersonalization() {\n    const status = this.shadowRoot.getElementById('personalization-status');\n    const home_name = (this.shadowRoot.getElementById('home-name-setting')?.value || '').trim();\n    const background_mode = this.shadowRoot.getElementById('bg-mode-select')?.value || 'weather';\n    const temperature_source = this.shadowRoot.getElementById('temp-source-select')?.value || 'auto';\n    try {\n      await this._send('argus/save_ui', { home_name, background_mode, background_images: this._backgroundImages || [], temperature_source });\n      this._homeName = home_name; this._backgroundMode = background_mode; this._temperatureSource = temperature_source;\n      this._ui = this._ui || {}; this._ui.home_name = home_name; this._ui.background_mode = background_mode; this._ui.background_images = this._backgroundImages || []; this._ui.temperature_source = temperature_source;\n      const lbl = this.shadowRoot.getElementById('lbl-home-name'); if (lbl) lbl.textContent = this._homeName || 'Mi Casa';\n      if (status) { status.textContent = '✓ Mi Casa guardada'; status.className = 'status ok'; }\n      this._renderEntries();\n    } catch (e) { if (status) { status.textContent = e.message; status.className = 'status err'; } }\n  }\n\n  /* ── Home Name management ────────────────────────────────────────── */'''
p=rep(p,'  /* ── Home Name management ────────────────────────────────────────── */',insert,'insert methods')
p=rep(p,"inp.value = this._homeName || '';","inp.value = this._homeName || this.shadowRoot.getElementById('home-name-setting')?.value || '';",'prefill')
p=rep(p,"      if (lbl) lbl.textContent = name || 'Mi Hogar';","      if (lbl) lbl.textContent = name || 'Mi Casa';\n      const field = this.shadowRoot.getElementById('home-name-setting');\n      if (field) field.value = name || '';",'save label')
p=rep(p,"    if (preciseTempSensor) {","    const configuredTempState = this._temperatureSource && this._temperatureSource !== 'auto' ? this._hass?.states?.[this._temperatureSource] : null;\n    const configuredTemp = configuredTempState ? (() => { const s = configuredTempState; if (s.entity_id.startsWith('climate.') && typeof s.attributes?.current_temperature === 'number') return { temp: s.attributes.current_temperature, unit: s.attributes?.temperature_unit || '°C' }; const unit = s.attributes?.unit_of_measurement || s.attributes?.native_unit_of_measurement || '°C'; const val = Number(s.state); return Number.isFinite(val) ? { temp: val, unit } : null; })() : null;\n    if (configuredTemp) { rawTemp = configuredTemp.temp; rawUnit = configuredTemp.unit; } else if (preciseTempSensor) {",'temp priority')
p=rep(p,'${this._getWeatherBg(weatherState, isNight)}','${this._renderEntryBackground(weatherState, isNight)}','render bg')
W(files['panel'],p)

subprocess.run(['python3','-m','py_compile',str(files['ws']),str(files['storage'])],check=True)
node=shutil.which('node')
if node: subprocess.run([node,'--check',str(files['panel'])],check=True)
branch=subprocess.check_output(['git','-C',str(repo),'branch','--show-current'],text=True).strip() or 'main'
subprocess.run(['git','-C',str(repo),'add',str(files['manifest']),str(files['ws']),str(files['storage']),str(files['panel'])],check=True)
if subprocess.check_output(['git','-C',str(repo),'status','--short'],text=True).strip(): subprocess.run(['git','-C',str(repo),'commit','-m','feat: add mi casa personalization and thermostat source'],check=True)
subprocess.run(['git','-C',str(repo),'push','origin',branch],check=True)
tag='v0.9.5'
if tag in subprocess.check_output(['git','-C',str(repo),'tag'],text=True).splitlines():
 subprocess.run(['git','-C',str(repo),'tag','-d',tag],check=True); subprocess.run(['git','-C',str(repo),'push','origin',f':refs/tags/{tag}'],check=True)
subprocess.run(['git','-C',str(repo),'tag',tag],check=True)
subprocess.run(['git','-C',str(repo),'push','origin',tag],check=True)
notes='Adds Mi Casa personalization, background upload/collage, and manual thermostat temperature source selection.'
done=False
if shutil.which('gh') and subprocess.run(['gh','auth','status'],capture_output=True).returncode==0:
 subprocess.run(['gh','release','delete',tag,'--repo','Chrisalvir1/argus','--yes'],capture_output=True)
 subprocess.run(['gh','release','create',tag,'--repo','Chrisalvir1/argus','--title',tag,'--notes',notes],check=True); done=True
if not done:
 remote=subprocess.check_output(['git','-C',str(repo),'remote','get-url','origin'],text=True).strip()
 if remote.startswith('http'):
  u=urlparse(remote); tok=u.password or u.username or ''; rp=u.path.lstrip('/').removesuffix('.git')
  if tok and rp:
   x=subprocess.check_output(['curl','-sS','-H','Accept: application/vnd.github+json','-H',f'Authorization: Bearer {tok}',f'https://api.github.com/repos/{rp}/releases/tags/{tag}'],text=True)
   try: rid=json.loads(x).get('id')
   except: rid=None
   if rid: subprocess.run(['curl','-sS','-X','DELETE','-H','Accept: application/vnd.github+json','-H',f'Authorization: Bearer {tok}',f'https://api.github.com/repos/{rp}/releases/{rid}'],check=True)
   body=json.dumps({'tag_name':tag,'name':tag,'body':notes})
   subprocess.run(['curl','-sS','-X','POST','-H','Accept: application/vnd.github+json','-H',f'Authorization: Bearer {tok}',f'https://api.github.com/repos/{rp}/releases','-d',body],check=True); done=True
print('PATCH_OK'); print(f'BRANCH={branch}'); print(f'TAG={tag}'); print(f'RELEASE_DONE={done}')
