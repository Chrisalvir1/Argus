/**
 * Argus Home Hub – v0.6.8
 * Complete, self-contained custom element.
 * Fixes: blank screen (missing template declaration, broken ID refs),
 * Adds: notifications section, multi-user PINs, admin access control.
 */

/* ── i18n ─────────────────────────────────────────────────────────────── */
const TEXTS = {
  es: {
    hero_desc:'Control de alarmas, modos, TTS y automatizaciones.',
    instances:'Instancias activas', modes:'Modos', automations:'⚡ Automatizaciones',
    linked_rules:'Reglas vinculadas a Argus', create_ha:'+ Crear en HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Ajustes', change_pin:'PIN Maestro', pin_desc:'Código numérico para armar y desarmar.',
    new_pin:'Nuevo PIN', confirm_pin:'Confirmar PIN', update_pin:'Actualizar PIN',
    current_pin:'PIN actual', notifications_title:'🔔 Notificaciones',
    notif_desc:'Selecciona los dispositivos móviles registrados en HA que recibirán alertas de Argus.',
    save_notif:'Guardar', users_title:'👥 Usuarios y Control de Acceso',
    admin_only:'Solo administradores pueden modificar esta sección.',
    add_user:'Agregar usuario', username:'Nombre de usuario', user_pin:'PIN de usuario',
    is_admin:'Administrador', save_user:'Guardar', no_users:'Sin usuarios adicionales configurados.',
    homekit_title:'🏠 HomeKit & Matter', close:'Cerrar',
    search_placeholder:'Buscar por nombre, área o entity_id',
    available:'Disponibles', selected_lbl:'Seleccionadas', clear:'Limpiar', accept:'Aceptar',
    introduce_pin:'Introduce tu PIN', pin_modal_desc:'PIN numérico para desarmar Argus',
    confirm:'✓ Confirmar', cancel:'Cancelar',
    disarmed:'Desarmado', armed_home:'En Casa', armed_away:'Ausente',
    armed_night:'Noche', armed_vacation:'Vacaciones', triggered:'¡ALARMA!',
    pending:'Cuenta regresiva', arming:'Armando', unavailable:'No disponible',
    sensor_section:'Sensores de Intrusión', siren_section:'Sirenas',
    none_selected:'Ninguno seleccionado', search_select:'Buscar y seleccionar',
    save_mode:'💾 Guardar modo', details_notif:'Notificación de alarma',
    activity_log:'📋 Historial de Actividad',
    log_armed:'Armado', log_disarmed:'Desarmado', log_triggered:'¡Disparado!',
    log_by:'por', log_sensor:'Sensor', log_no_events:'Sin eventos recientes.',
    mode_home:'En Casa', mode_away:'Ausente', mode_night:'Noche', mode_vacation:'Vacaciones',
    homekit_bridge:'Puente HomeKit', homekit_not_paired:'No vinculado a ninguna casa.',
    homekit_house:'Casa de Apple Home',
  },
  en: {
    hero_desc:'Alarm control, modes, TTS and automations.',
    instances:'Active Instances', modes:'Modes', automations:'⚡ Automations',
    linked_rules:'Argus-linked Rules', create_ha:'+ Create in HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Settings', change_pin:'Master PIN', pin_desc:'Numeric code to arm and disarm.',
    new_pin:'New PIN', confirm_pin:'Confirm PIN', update_pin:'Update PIN',
    current_pin:'Current PIN', notifications_title:'🔔 Notifications',
    notif_desc:'Select the mobile devices registered in HA that will receive Argus alerts.',
    save_notif:'Save', users_title:'👥 Users & Access Control',
    admin_only:'Only administrators can modify this section.',
    add_user:'Add user', username:'Username', user_pin:'User PIN',
    is_admin:'Administrator', save_user:'Save', no_users:'No additional users configured.',
    homekit_title:'🏠 HomeKit & Matter', close:'Close',
    search_placeholder:'Search by name, area or entity_id',
    available:'Available', selected_lbl:'Selected', clear:'Clear', accept:'Accept',
    introduce_pin:'Enter your PIN', pin_modal_desc:'Numeric PIN to disarm Argus',
    confirm:'✓ Confirm', cancel:'Cancel',
    disarmed:'Disarmed', armed_home:'Home', armed_away:'Away',
    armed_night:'Night', armed_vacation:'Vacation', triggered:'ALARM!',
    pending:'Pending', arming:'Arming', unavailable:'Unavailable',
    sensor_section:'Intrusion Sensors', siren_section:'Sirens',
    none_selected:'None selected', search_select:'Search & select',
    save_mode:'💾 Save mode', details_notif:'Alarm notification',
    activity_log:'📋 Activity Log',
    log_armed:'Armed', log_disarmed:'Disarmed', log_triggered:'Triggered!',
    log_by:'by', log_sensor:'Sensor', log_no_events:'No recent events.',
    mode_home:'Home', mode_away:'Away', mode_night:'Night', mode_vacation:'Vacation',
    homekit_bridge:'HomeKit Bridge', homekit_not_paired:'Not paired to any home.',
    homekit_house:'Apple Home',
  }
};

/* ── Template ─────────────────────────────────────────────────────────── */
const _tmpl = document.createElement('template');
_tmpl.innerHTML = `
<style>
  :host{display:block;min-height:100vh;box-sizing:border-box;color:var(--primary-text-color);background:var(--lovelace-background,var(--primary-background-color));font-family:Inter,system-ui,sans-serif}
  *{box-sizing:border-box}
  .wrap{max-width:1200px;margin:0 auto;padding:24px;display:grid;gap:20px}
  .glass{background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 84%,transparent);border:1px solid color-mix(in srgb,var(--divider-color,#333) 50%,transparent);border-radius:20px;box-shadow:0 8px 32px rgba(0,0,0,.18);backdrop-filter:blur(18px) saturate(1.2)}
  .hero{padding:24px 26px;display:flex;align-items:center;gap:16px}
  .hero-icon{font-size:44px;line-height:1}
  .hero h1{margin:0 0 4px;font-size:26px;font-weight:800}
  .hero p{margin:0;font-size:14px;opacity:.6}
  .grid{display:grid;grid-template-columns:1.35fr 1fr;gap:20px;align-items:start}
  @media(max-width:860px){.grid{grid-template-columns:1fr}}
  .panel{padding:20px}
  .panel h2{margin:0 0 16px;font-size:13px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;opacity:.55}
  .entry{padding:16px;border-radius:16px;display:grid;gap:10px;background:color-mix(in srgb,var(--primary-color,#03a9f4) 6%,var(--card-background-color,#1e1e2e));border:1px solid color-mix(in srgb,var(--primary-color,#03a9f4) 16%,transparent);margin-bottom:12px}
  .entry-title{font-size:17px;font-weight:700}
  .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
  .badge.armed_away,.badge.armed_vacation{background:rgba(229,57,53,.15);color:var(--error-color,#e53935)}
  .badge.armed_home,.badge.armed_night{background:rgba(251,140,0,.15);color:#fb8c00}
  .badge.disarmed{background:rgba(67,160,71,.15);color:var(--success-color,#43a047)}
  .badge.triggered{background:rgba(229,57,53,.25);color:var(--error-color,#e53935);animation:pulse 1s ease-in-out infinite}
  .badge.unavailable{background:rgba(120,120,120,.12);color:var(--secondary-text-color,#888)}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
  .meta{font-size:12px;opacity:.5}
  .actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
  button{border:0;border-radius:12px;padding:9px 16px;font:700 13px/1 Inter,system-ui,sans-serif;cursor:pointer;transition:opacity .15s,transform .1s}
  button:active:not(:disabled){transform:scale(.96)}
  button:disabled{opacity:.35;cursor:not-allowed}
  button.primary{background:var(--primary-color,#03a9f4);color:#fff}
  button.ghost{background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 60%,var(--primary-color,#03a9f4) 12%);color:var(--primary-text-color)}
  button.danger{background:rgba(229,57,53,.12);color:var(--error-color,#e53935)}
  button.success{background:rgba(67,160,71,.13);color:var(--success-color,#43a047)}
  button:hover:not(:disabled){opacity:.82}
  input[type=text],input[type=password],input[type=time],input[type=number],select:not([multiple]),textarea{width:100%;border-radius:12px;border:1px solid var(--divider-color,#444);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 52%,transparent);color:var(--primary-text-color);padding:9px 12px;font-size:13px;outline:none;transition:border-color .2s}
  input:focus,textarea:focus,select:focus{border-color:var(--primary-color,#03a9f4)}
  textarea{min-height:80px;resize:vertical;font:12.5px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace}
  .save-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:8px}
  .status{font-size:13px;flex:1}
  .status.ok{color:var(--success-color,#43a047)}
  .status.err{color:var(--error-color,#e53935)}
  .tabs{display:flex;gap:6px;margin-bottom:18px;padding:5px;background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 42%,transparent);border-radius:14px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 30%,transparent)}
  .tab{flex:1;padding:9px 6px;text-align:center;cursor:pointer;border-radius:10px;font-size:12px;font-weight:700;white-space:nowrap}
  .tab.active{background:var(--primary-color,#03a9f4);color:#fff;box-shadow:0 4px 12px rgba(3,169,244,.28)}
  .tab:not(.active):hover{background:color-mix(in srgb,var(--primary-color,#03a9f4) 10%,transparent)}
  .stack{display:grid;gap:14px}
  .field-group{display:grid;gap:6px}
  .field-group>label,.subsection-title{font-size:11px;font-weight:800;opacity:.55;text-transform:uppercase;letter-spacing:.05em}
  .subsection{background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 35%,transparent);border:1px solid color-mix(in srgb,var(--divider-color,#444) 45%,transparent);border-radius:14px;padding:14px;display:grid;gap:12px}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .three-col{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
  .checkbox-label{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;cursor:pointer;user-select:none}
  .small{font-size:12px;opacity:.6}
  .chip-list{display:flex;flex-wrap:wrap;gap:8px;min-height:28px}
  .chip{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;background:color-mix(in srgb,var(--primary-color,#03a9f4) 10%,var(--card-background-color,#1e1e2e));border:1px solid color-mix(in srgb,var(--primary-color,#03a9f4) 18%,transparent);font-size:12px;font-weight:700}
  .chip button{padding:0;border:0;background:none;cursor:pointer;opacity:.65;font-size:11px}
  /* Modal */
  .modal-back{position:fixed;inset:0;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;padding:20px;z-index:9999}
  .modal-back.open{display:flex}
  .modal{width:min(900px,100%);max-height:85vh;overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:20px;border-radius:20px;background:var(--card-background-color,#1e1e2e);border:1px solid var(--divider-color,#444);box-shadow:0 24px 80px rgba(0,0,0,.4)}
  .modal-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
  .modal-head h3{margin:0;font-size:18px;font-weight:700}
  .modal-body{display:grid;grid-template-columns:1fr 1fr;gap:14px;overflow:auto}
  @media(max-width:680px){.modal-body{grid-template-columns:1fr}}
  .listbox{display:grid;gap:8px;max-height:48vh;overflow:auto}
  .list-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 70%,transparent);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 76%,transparent)}
  .list-item input[type=checkbox]{width:18px;height:18px;cursor:pointer}
  .modal-footer{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center}
  /* PIN modal */
  .pm .modal{max-width:340px;min-height:unset;grid-template-rows:auto auto auto}
  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:14px;border-radius:12px;border:2px solid var(--primary-color,#03a9f4);background:transparent;color:inherit;width:100%;outline:none}
  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}
  /* User card */
  .user-card{display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:12px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 50%,transparent);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 60%,transparent)}
  .user-badge{display:inline-block;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;background:rgba(3,169,244,.15);color:var(--primary-color,#03a9f4)}
  .user-badge.admin{background:rgba(251,140,0,.15);color:#fb8c00}
  /* Notif target chip */
  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;background:rgba(67,160,71,.13);border:1px solid rgba(67,160,71,.25);font-size:12px;font-weight:700;color:var(--success-color,#43a047)}
  .notif-chip button{padding:0;border:0;background:none;cursor:pointer;opacity:.65}
  /* Triggered box */
  .trig-box{padding:10px 12px;border-radius:10px;background:rgba(229,57,53,.1);border:1px dashed var(--error-color,#e53935);font-size:12px;font-weight:600;color:var(--error-color,#e53935)}
  /* search */
  .search-wrap{display:flex;gap:10px;align-items:center}
  .search-wrap input{flex:1}
  /* Activity log */
  .log-item{display:flex;align-items:flex-start;gap:12px;padding:10px 12px;border-radius:12px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 50%,transparent);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 60%,transparent)}
  .log-icon{font-size:20px;line-height:1;flex-shrink:0}
  .log-body{flex:1;min-width:0}
  .log-title{font-weight:700;font-size:13px}
  .log-meta{font-size:11px;opacity:.55;margin-top:2px}
  .log-badge{display:inline-block;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;margin-right:4px}
  .log-badge.arm{background:rgba(251,140,0,.15);color:#fb8c00}
  .log-badge.disarm{background:rgba(67,160,71,.15);color:var(--success-color,#43a047)}
  .log-badge.trigger{background:rgba(229,57,53,.18);color:var(--error-color,#e53935)}
</style>

<div class="wrap">
  <!-- HERO -->
  <div class="glass hero">
    <div class="hero-icon">🛡️</div>
    <div>
      <h1>Argus Home Hub</h1>
      <p id="p-hero-desc"></p>
    </div>
  </div>

  <!-- ROW 1: Instances + Modes -->
  <div class="grid">
    <section class="glass panel">
      <h2 id="h-instances"></h2>
      <div id="entries"></div>
      <!-- Activity log -->
      <h2 id="h-activity-log" style="margin-top:20px"></h2>
      <div id="activity-log" style="display:grid;gap:8px;max-height:260px;overflow-y:auto"></div>
    </section>
    <section class="glass panel">
      <h2 id="h-modes"></h2>
      <div class="tabs" id="mode-tabs"></div>
      <div id="mode-view"></div>
    </section>
  </div>

  <!-- ROW 2: Automations + Settings -->
  <div class="grid">
    <section class="glass panel">
      <h2 id="h-automations"></h2>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <span class="small" id="p-linked-rules"></span>
        <button class="primary" id="btn-new-auto" style="padding:6px 14px;font-size:12px"></button>
      </div>
      <div id="auto-view"></div>
    </section>
    <section class="glass panel">
      <h2 id="h-settings"></h2>
      <div class="stack">
        <div class="subsection">
          <div class="subsection-title" id="t-change-pin"></div>
          <p class="small" id="p-pin-desc" style="margin:0"></p>
      <div id="current-pin-display" style="font-size:13px;font-weight:700;color:var(--primary-color);margin-bottom:4px"></div>
          <div class="two-col" style="gap:8px">
            <div class="field-group"><label id="l-new-pin"></label><input type="password" id="new-pin-1" inputmode="numeric" pattern="[0-9]*"></div>
            <div class="field-group"><label id="l-confirm-pin"></label><input type="password" id="new-pin-2" inputmode="numeric" pattern="[0-9]*"></div>
          </div>
          <button class="primary" id="btn-save-pin" style="width:100%;margin-top:4px"></button>
          <span class="status" id="pin-status" style="font-size:12px"></span>
        </div>
      </div>
    </section>
  </div>

  <!-- ROW 3: Notifications -->
  <section class="glass panel">
    <h2 id="h-notifications"></h2>
    <p class="small" id="p-notif-desc" style="margin-bottom:10px"></p>

    <!-- Push targets (notify.*) -->
    <div class="subsection" style="margin-bottom:12px">
      <div class="subsection-title" id="t-push-title">📱 Notificaciones Push (Móvil)</div>
      <div id="notif-targets" class="chip-list" style="min-height:28px"></div>
      <div style="display:flex;gap:8px;align-items:center;margin-top:8px">
        <select id="notif-select" style="flex:1"></select>
        <button class="ghost" id="btn-add-notif" style="white-space:nowrap">+ Agregar</button>
      </div>
    </div>

    <!-- TTS / Audio targets (media_player.*) -->
    <div class="subsection" style="margin-bottom:12px">
      <div class="subsection-title" id="t-tts-title">🔊 Anuncios de Voz (Airplay · Cast · Altavoces)</div>
      <div id="tts-targets" class="chip-list" style="min-height:28px"></div>
      <div style="display:flex;gap:8px;align-items:center;margin-top:8px">
        <select id="tts-select" style="flex:1"></select>
        <button class="ghost" id="btn-add-tts" style="white-space:nowrap">+ Agregar</button>
      </div>
    </div>

    <div class="save-row" style="margin-top:10px"><button class="primary" id="btn-save-notif"></button><span class="status" id="notif-status"></span></div>
  </section>

  <!-- ROW 4: Users -->
  <section class="glass panel">
    <h2 id="h-users"></h2>
    <p class="small" id="p-admin-only" style="margin-bottom:14px;color:var(--warning-color,#fb8c00)"></p>
    <div id="users-list" style="display:grid;gap:10px;margin-bottom:16px"></div>
    <div class="subsection" id="add-user-form">
      <div class="subsection-title" id="t-add-user"></div>
      <div class="three-col">
        <div class="field-group"><label id="l-username"></label><input type="text" id="new-user-name" autocomplete="off"></div>
        <div class="field-group"><label id="l-user-pin"></label><input type="password" id="new-user-pin" inputmode="numeric" pattern="[0-9]*"></div>
        <div class="field-group" style="justify-content:end">
          <label id="l-is-admin" class="checkbox-label" style="margin-top:20px"><input type="checkbox" id="new-user-admin"> <span id="s-is-admin"></span></label>
        </div>
      </div>
      <div class="save-row"><button class="primary" id="btn-save-user"></button><span class="status" id="user-status"></span></div>
    </div>
  </section>

  <!-- ROW 5: HomeKit -->
  <section class="glass panel" id="homekit-section" style="display:none">
    <h2 id="h-homekit"></h2>
    <div id="homekit-content"></div>
  </section>
</div>

<!-- Selector modal -->
<div class="modal-back" id="selector-modal" aria-hidden="true">
  <div class="modal">
    <div class="modal-head">
      <h3 id="selector-title">Seleccionar</h3>
      <button class="ghost" id="selector-close"></button>
    </div>
    <div class="search-wrap"><input id="selector-search" type="text"></div>
    <div class="modal-body">
      <div>
        <div class="subsection-title" id="l-available" style="margin-bottom:8px"></div>
        <div class="listbox" id="selector-list"></div>
      </div>
      <div>
        <div class="subsection-title" id="l-selected-lbl" style="margin-bottom:8px"></div>
        <div class="listbox" id="selector-selected"></div>
      </div>
    </div>
    <div class="modal-footer">
      <div class="small" id="selector-count">0</div>
      <div style="display:flex;gap:10px">
        <button class="ghost" id="selector-clear"></button>
        <button class="primary" id="selector-accept"></button>
      </div>
    </div>
  </div>
</div>

<!-- PIN modal -->
<div class="modal-back pm" id="pin-modal" aria-hidden="true">
  <div class="modal">
    <div class="modal-head"><h3 id="l-introduce-pin">🔒</h3><button class="ghost" id="pin-close">✕</button></div>
    <div style="display:grid;gap:10px">
      <p id="l-pin-modal-desc" class="small" style="text-align:center;margin:0"></p>
      <input id="pin-input" class="pin-input" type="password" inputmode="numeric" pattern="[0-9]*" placeholder="••••" autocomplete="off">
      <div id="pin-error" class="pin-error"></div>
    </div>
    <div class="modal-footer">
      <button class="ghost" id="pin-cancel"></button>
      <button class="primary" id="pin-confirm"></button>
    </div>
  </div>
</div>
`;

/* ── Web Component ────────────────────────────────────────────────────── */
class ArgusPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).appendChild(_tmpl.content.cloneNode(true));
    this._wsId = 1; this._socket = null; this._dashboard = null;
    this._ui = null; this._available = []; this._mode = 'home';
    this._selected = []; this._selectorTarget = null;
    this._hass = null; this._prevStates = {};
    this._notifTargets = []; // list of notify service_ids selected
    this._users = [];        // [{name, pin, is_admin}]
    this._isAdmin = true;    // determined from hass user
    this._pinCallback = null;
    this._pending = {};
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._dashboard?.entries?.length) return;
    const changed = this._dashboard.entries.some(
      e => e.entity_id && this._prevStates[e.entity_id] !== hass.states[e.entity_id]?.state
    );
    if (changed) {
      this._dashboard.entries.forEach(e => {
        if (e.entity_id) this._prevStates[e.entity_id] = hass.states[e.entity_id]?.state;
      });
      this._renderEntries();
    }
  }
  get hass() { return this._hass; }

  /* ── Translation ─────────────────────────────────────────────────── */
  _t(key) {
    const lang = (this._hass?.language || 'es').split('-')[0];
    return (TEXTS[lang] || TEXTS.en)[key] || key;
  }

  _applyTranslations() {
    const t = k => this._t(k);
    const s = id => this.shadowRoot.getElementById(id);
    const set = (id, txt) => { const e = s(id); if (e) e.textContent = txt; };

    set('p-hero-desc',    t('hero_desc'));
    set('h-instances',    t('instances'));
    set('h-modes',        t('modes'));
    set('h-automations',  t('automations'));
    set('p-linked-rules', t('linked_rules'));
    set('h-settings',     t('settings'));
    set('h-activity-log', t('activity_log'));
    set('t-change-pin',   t('change_pin'));
    set('p-pin-desc',     t('pin_desc'));
    set('l-new-pin',      t('new_pin'));
    set('l-confirm-pin',  t('confirm_pin'));
    set('h-notifications',t('notifications_title'));
    set('p-notif-desc',   t('notif_desc'));
    set('h-users',        t('users_title'));
    set('p-admin-only',   t('admin_only'));
    set('t-add-user',     t('add_user'));
    set('l-username',     t('username'));
    set('l-user-pin',     t('user_pin'));
    set('s-is-admin',     t('is_admin'));
    set('h-homekit',      t('homekit_title'));
    set('l-available',    t('available'));
    set('l-selected-lbl', t('selected_lbl'));
    set('l-introduce-pin',`🔒 ${t('introduce_pin')}`);
    set('l-pin-modal-desc', t('pin_modal_desc'));

    const sp = id => { const e = s(id); if (e) e.placeholder = t('search_placeholder'); };
    sp('selector-search');

    const btn = (id, k) => { const e = s(id); if (e) e.textContent = t(k); };
    btn('btn-new-auto',   'create_ha');
    btn('btn-save-pin',   'update_pin');
    btn('btn-save-notif', 'save_notif');
    btn('btn-save-user',  'save_user');
    btn('selector-close', 'close');
    btn('selector-clear', 'clear');
    btn('selector-accept','accept');
    btn('pin-cancel',     'cancel');
    btn('pin-confirm',    'confirm');
  }

  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() { this._init(); }

  async _init() {
    this._bindStatic();
    try {
      await this._connect();
    } catch (e) {
      console.error('Argus WS connect failed:', e);
    }
    this._applyTranslations();
    await this._load();
  }

  _bindStatic() {
    const s = id => this.shadowRoot.getElementById(id);
    s('selector-close').addEventListener('click', () => this._closeModal());
    s('selector-accept').addEventListener('click', () => this._acceptSelection());
    s('selector-clear').addEventListener('click', () => { this._selected = []; this._renderSelector(); });
    s('selector-search').addEventListener('input', () => this._renderSelector());
    s('selector-modal').addEventListener('click', e => { if (e.target.id === 'selector-modal') this._closeModal(); });

    s('btn-new-auto').addEventListener('click', () => {
      history.pushState(null, '', '/config/automation/edit/new');
      window.dispatchEvent(new CustomEvent('location-changed'));
    });
    s('btn-save-pin').addEventListener('click', () => this._savePin());

    s('pin-close').addEventListener('click', () => this._closePinModal());
    s('pin-cancel').addEventListener('click', () => this._closePinModal());
    s('pin-modal').addEventListener('click', e => { if (e.target.id === 'pin-modal') this._closePinModal(); });
    s('pin-confirm').addEventListener('click', () => this._submitPin());
    s('pin-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._submitPin(); });

    s('btn-add-notif').addEventListener('click', () => this._addNotifTarget());
    s('btn-add-tts').addEventListener('click', () => this._addTtsTarget());
    s('btn-save-notif').addEventListener('click', () => this._saveNotifications());
    s('btn-save-user').addEventListener('click', () => this._saveUser());
  }

  /* ── WebSocket ───────────────────────────────────────────────────── */
  _connect() {
    return new Promise((resolve, reject) => {
      const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      this._pending = {};
      this._socket = new WebSocket(`${proto}://${location.host}/api/websocket`);
      this._socket.addEventListener('message', ev => {
        const msg = JSON.parse(ev.data);
        if (msg.type === 'auth_required') {
          const tok = this._hass?.auth?.data?.access_token;
          if (!tok) { reject(new Error('no token')); return; }
          this._socket.send(JSON.stringify({ type: 'auth', access_token: tok }));
          return;
        }
        if (msg.type === 'auth_ok') { resolve(); return; }
        if (msg.type === 'auth_invalid') { reject(new Error('auth invalid')); return; }
        if (msg.type === 'result' && this._pending[msg.id]) {
          this._pending[msg.id](msg.result ?? msg);
          delete this._pending[msg.id];
        }
      });
      this._socket.addEventListener('error', reject, { once: true });
    });
  }

  _send(type, data = {}) {
    const id = this._wsId++;
    return new Promise((resolve, reject) => {
      this._pending[id] = result => {
        if (result?.success === false) reject(new Error(result.error?.message || 'failed'));
        else resolve(result);
      };
      this._socket.send(JSON.stringify({ id, type, ...data }));
      setTimeout(() => { if (this._pending[id]) { delete this._pending[id]; reject(new Error('timeout')); } }, 10000);
    });
  }

  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    let dashboard;
    try { dashboard = await this._send('argus/dashboard'); }
    catch (e) { console.error('Argus dashboard load failed:', e); return; }

    this._dashboard = dashboard;
    this._available = dashboard.available_entities || [];
    this._ui = dashboard.ui || { modes: {}, dashboard: {} };
    this._notifTargets = dashboard.ui?.notif_targets || [];
    this._ttsTargets   = dashboard.ui?.tts_targets   || [];
    this._users = dashboard.ui?.users || [];

    // Admin flag: use the HA user's own admin status
    this._isAdmin = this._hass?.user?.is_admin ?? true;

    // Show current PIN
    const currentPin = dashboard.entries?.[0]?.options?.code || '';
    const pinDisp = this.shadowRoot.getElementById('current-pin-display');
    if (pinDisp) pinDisp.textContent = currentPin ? `${this._t('current_pin')}: ${currentPin}` : '';

    this._renderEntries();
    this._renderActivityLog();
    this._renderModeTabs();
    this._renderModeView();
    this._renderAutomations();
    this._renderNotifications();
    this._renderUsers();
    this._renderHomeKit();
  }

  /* ── Entries (alarm instances) ───────────────────────────────────── */
  _renderEntries() {
    const el = this.shadowRoot.getElementById('entries');
    const entries = this._dashboard?.entries || [];
    if (!entries.length) {
      el.innerHTML = `<div class="small" style="padding:10px">No hay instancias. Agrega Argus desde Integraciones.</div>`;
      return;
    }
    const LABELS = {
      disarmed:      `🟢 ${this._t('disarmed')}`,
      armed_home:    `🏠 ${this._t('armed_home')}`,
      armed_away:    `🔴 ${this._t('armed_away')}`,
      armed_night:   `🌙 ${this._t('armed_night')}`,
      armed_vacation:`✈️ ${this._t('armed_vacation')}`,
      arming:        `⏳ ${this._t('arming')}`,
      pending:       `⏰ ${this._t('pending')}`,
      triggered:     `🚨 ${this._t('triggered')}`,
      unavailable:   `⚠️ ${this._t('unavailable')}`,
    };
    el.innerHTML = entries.map((e, idx) => {
      const live  = this._hass?.states[e.entity_id]?.state;
      const state = live || e.state || 'unavailable';
      const label = LABELS[state] || state;
      const triggered = state === 'triggered';
      const isUnavail = state === 'unavailable' || !e.entity_id;

      const actionBtns = isUnavail ? '' : `
        <div class="actions">
          <button class="${state==='armed_home'?'primary':'ghost'}" data-idx="${idx}" data-action="home">🏠</button>
          <button class="${state==='armed_away'?'primary':'ghost'}" data-idx="${idx}" data-action="away">🔴</button>
          <button class="${state==='armed_night'?'primary':'ghost'}" data-idx="${idx}" data-action="night">🌙</button>
          <button class="${state==='armed_vacation'?'primary':'ghost'}" data-idx="${idx}" data-action="vacation">✈️</button>
          <button class="danger" data-idx="${idx}" data-action="disarm">🔓 ${this._t('disarmed')}</button>
        </div>`;

      const triggeredBy = this._hass?.states[e.entity_id]?.attributes?.triggered_by;
      const trigBox = triggeredBy
        ? `<div class="trig-box">🚨 ${this._hass?.states[triggeredBy]?.attributes?.friendly_name || triggeredBy}</div>`
        : '';

      return `<article class="entry" style="${triggered ? 'border-color:var(--error-color)' : ''}">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div class="entry-title">${e.title || 'Argus'}</div>
            <span class="badge ${state}" style="margin-top:6px">${label}</span>
          </div>
          ${triggered ? '<div style="font-size:36px">🚨</div>' : ''}
        </div>
        <div class="meta">${e.entity_id || '—'}</div>
        ${actionBtns}
        ${trigBox}
      </article>`;
    }).join('');

    el.querySelectorAll('button[data-action]').forEach(btn =>
      btn.addEventListener('click', ev => this._handleAction(ev.currentTarget.dataset.idx, ev.currentTarget.dataset.action))
    );
  }

  /* ── Activity Log ────────────────────────────────────────────────── */
  _renderActivityLog() {
    const titleEl = this.shadowRoot.getElementById('h-activity-log');
    const el = this.shadowRoot.getElementById('activity-log');
    if (!el) return;
    if (titleEl) titleEl.textContent = this._t('activity_log');

    const log = this._ui?.audit_log || [];
    if (!log.length) {
      el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('log_no_events')}</div>`;
      return;
    }

    el.innerHTML = log.slice(0, 30).map(ev => {
      const action = ev.action || '';
      const detail = ev.detail || '';
      const user   = ev.user   || '';
      const ts     = ev.ts ? new Date(ev.ts).toLocaleString() : '';

      let icon = '📋', badgeCls = '', badgeTxt = action;
      if (action.includes('arm') && !action.includes('disarm')) {
        icon = '🔒'; badgeCls = 'arm'; badgeTxt = this._t('log_armed');
      } else if (action.includes('disarm')) {
        icon = '🔓'; badgeCls = 'disarm'; badgeTxt = this._t('log_disarmed');
      } else if (action.includes('trigger') || action.includes('alarm')) {
        icon = '🚨'; badgeCls = 'trigger'; badgeTxt = this._t('log_triggered');
      }

      // Attribute the action clearly
      let source = '';
      if (user && user !== 'system') {
        source = `👤 ${user}`;
      } else if (action.includes('homekit') || detail.toLowerCase().includes('homekit')) {
        source = `🍎 HomeKit`;
      } else {
        source = `🤖 Argus`;
      }

      return `<div class="log-item">
        <div class="log-icon">${icon}</div>
        <div class="log-body">
          <div class="log-title">
            <span class="log-badge ${badgeCls}">${badgeTxt}</span>
            <span style="font-weight:500">${detail}</span>
          </div>
          <div class="log-meta">${ts} &nbsp;·&nbsp; ${source}</div>
        </div>
      </div>`;
    }).join('');
  }

  /* ── Modes ───────────────────────────────────────────────────────── */
  _renderModeTabs() {
    const tabs = this.shadowRoot.getElementById('mode-tabs');
    const modes = ['home', 'away', 'night', 'vacation'];
    const icons = { home:'🏠', away:'🔴', night:'🌙', vacation:'✈️' };
    const lbls  = {
      home:     this._t('mode_home'),
      away:     this._t('mode_away'),
      night:    this._t('mode_night'),
      vacation: this._t('mode_vacation'),
    };
    tabs.innerHTML = modes.map(m =>
      `<div class="tab ${m===this._mode?'active':''}" data-mode="${m}">${icons[m]} ${lbls[m]}</div>`
    ).join('');
    tabs.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
      this._mode = t.dataset.mode; this._renderModeTabs(); this._renderModeView();
    }));
  }

  _currentModeConfig() { return this._ui?.modes?.[this._mode] || {}; }

  _renderModeView() {
    const cfg = this._currentModeConfig();
    const sensors = cfg.sensors || [];
    const sirens  = cfg.sirens  || [];
    const el = this.shadowRoot.getElementById('mode-view');
    const readonly = !this._isAdmin;
    el.innerHTML = `
      <div class="stack">
        <div class="subsection">
          <div class="subsection-title">${this._t('sensor_section')}</div>
          <div class="chip-list" id="sensor-chips">
            ${sensors.map(x => this._chip(x, 'sensor')).join('') || `<span class="small">${this._t('none_selected')}</span>`}
          </div>
          ${readonly ? '' : `<div><button class="ghost" data-open-selector="sensor">${this._t('search_select')}</button></div>`}
        </div>
        <div class="subsection">
          <div class="subsection-title">${this._t('siren_section')}</div>
          <div class="chip-list" id="siren-chips">
            ${sirens.map(x => this._chip(x, 'siren')).join('') || `<span class="small">${this._t('none_selected')}</span>`}
          </div>
          ${readonly ? '' : `<div><button class="ghost" data-open-selector="siren">${this._t('search_select')}</button></div>`}
        </div>
      </div>
      ${readonly ? '' : `<div class="save-row" style="margin-top:14px">
        <button class="primary" id="save-mode">${this._t('save_mode')}</button>
        <span class="status" id="mode-status"></span>
      </div>`}
    `;
    if (!readonly) {
      el.querySelectorAll('[data-open-selector]').forEach(btn =>
        btn.addEventListener('click', () => this._openModal(btn.dataset.openSelector))
      );
      el.querySelectorAll('[data-remove]').forEach(btn =>
        btn.addEventListener('click', () => this._removeChip(btn.dataset.remove))
      );
      el.querySelector('#save-mode')?.addEventListener('click', () => this._saveMode());
    }
  }

  _chip(entityId, type) {
    const raw = this._hass?.states?.[entityId]?.state;
    const isTr = ['on', 'unlocked', 'open', 'recording'].includes(raw);
    const dot = type === 'sensor'
      ? `<span style="width:8px;height:8px;border-radius:50%;display:inline-block;background:${isTr ? 'var(--error-color,#e53935)' : 'var(--success-color,#43a047)'}" title="${raw}"></span>`
      : '';
    const name = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
    const readonly = !this._isAdmin;
    return `<span class="chip">${dot}${name}${readonly ? '' : `<button data-remove="${type}:${entityId}">✕</button>`}</span>`;
  }

  _removeChip(value) {
    if (!this._isAdmin) return;
    const [type, entityId] = value.split(':');
    const cfg = this._currentModeConfig();
    const key = type === 'sensor' ? 'sensors' : 'sirens';
    this._ui.modes[this._mode] = { ...cfg, [key]: (cfg[key] || []).filter(v => v !== entityId) };
    this._renderModeView();
  }

  async _saveMode() {
    const cfg = this._currentModeConfig();
    const status = this.shadowRoot.getElementById('mode-status');
    try {
      await this._send('argus/save_mode_config', { mode: this._mode, config: cfg });
      status.textContent = '✓'; status.className = 'status ok';
    } catch (err) { status.textContent = err.message; status.className = 'status err'; }
  }

  /* ── Automations ─────────────────────────────────────────────────── */
  _renderAutomations() {
    const el = this.shadowRoot.getElementById('auto-view');
    const items = Object.values(this._hass?.states || {}).filter(s => {
      if (!s.entity_id.startsWith('automation.')) return false;
      const name = (s.attributes.friendly_name || '').toLowerCase();
      return name.includes('argus') || s.entity_id.toLowerCase().includes('argus');
    });

    if (!items.length) {
      el.innerHTML = `<div class="small" style="text-align:center;padding:14px;opacity:.5">([Argus] …)</div>`;
      return;
    }
    el.innerHTML = `<div class="stack">${items.map(a => `
      <div class="list-item" style="justify-content:space-between">
        <div>
          <div style="font-weight:700">${a.attributes.friendly_name || a.entity_id}</div>
          <div class="small">${a.attributes.last_triggered ? new Date(a.attributes.last_triggered).toLocaleString() : '—'}</div>
        </div>
        <button class="ghost" style="padding:5px 10px" data-edit-auto="${a.entity_id.replace('automation.','')}">✏️</button>
      </div>`).join('')}</div>`;
    el.querySelectorAll('[data-edit-auto]').forEach(btn => btn.addEventListener('click', () => {
      history.pushState(null, '', `/config/automation/edit/${btn.dataset.editAuto}`);
      window.dispatchEvent(new CustomEvent('location-changed'));
    }));
  }

  /* ── Notifications ───────────────────────────────────────────────── */
  _populateNotifSelect() {
    const sel = this.shadowRoot.getElementById('notif-select');
    if (!sel) return;
    const services = this._hass?.services?.notify || {};
    const opts = Object.keys(services).filter(k => !this._notifTargets.includes(k));
    sel.innerHTML = opts.length
      ? opts.map(k => `<option value="${k}">${k.replace(/_/g, ' ')}</option>`).join('')
      : `<option value="">— Sin servicios móviles —</option>`;
  }

  _populateTtsSelect() {
    const sel = this.shadowRoot.getElementById('tts-select');
    if (!sel) return;
    // Include all media_player entities that are suitable for TTS
    const players = Object.values(this._hass?.states || {}).filter(s => {
      if (!s.entity_id.startsWith('media_player.')) return false;
      if (this._ttsTargets.includes(s.entity_id)) return false;
      return true;
    });
    if (!players.length) {
      sel.innerHTML = `<option value="">— No hay dispositivos de audio —</option>`;
      return;
    }
    // Group by type hint via attributes
    const typeIcon = s => {
      const st = (s.attributes?.source_list || []).join(',').toLowerCase();
      const name = (s.attributes?.friendly_name || s.entity_id).toLowerCase();
      if (name.includes('airplay') || (s.attributes?.device_class||'').includes('airplay')) return '🍎';
      if (name.includes('cast') || name.includes('chromecast') || st.includes('cast')) return '📡';
      if (name.includes('alexa') || name.includes('echo')) return '🗣️';
      if (name.includes('bluetooth') || name.includes('bt')) return '🎧';
      if (name.includes('spotify')) return '🎵';
      return '🔊';
    };
    sel.innerHTML = players.map(s =>
      `<option value="${s.entity_id}">${typeIcon(s)} ${s.attributes?.friendly_name || s.entity_id}</option>`
    ).join('');
  }

  _addNotifTarget() {
    const sel = this.shadowRoot.getElementById('notif-select');
    const val = sel?.value;
    if (!val || this._notifTargets.includes(val)) return;
    this._notifTargets.push(val);
    this._renderNotifChips();
    this._populateNotifSelect();
  }

  _addTtsTarget() {
    const sel = this.shadowRoot.getElementById('tts-select');
    const val = sel?.value;
    if (!val || !this._ttsTargets) this._ttsTargets = [];
    if (!val || this._ttsTargets.includes(val)) return;
    this._ttsTargets.push(val);
    this._renderTtsChips();
    this._populateTtsSelect();
  }

  _renderNotifChips() {
    const el = this.shadowRoot.getElementById('notif-targets');
    if (!el) return;
    el.innerHTML = this._notifTargets.map(t => `
      <span class="notif-chip">📱 ${t.replace(/_/g,' ')}
        <button data-notif-remove="${t}">✕</button>
      </span>`).join('') || `<span class="small" style="opacity:.5">—</span>`;
    el.querySelectorAll('[data-notif-remove]').forEach(btn =>
      btn.addEventListener('click', () => {
        this._notifTargets = this._notifTargets.filter(x => x !== btn.dataset.notifRemove);
        this._renderNotifChips();
        this._populateNotifSelect();
      })
    );
  }

  _renderTtsChips() {
    const el = this.shadowRoot.getElementById('tts-targets');
    if (!el) return;
    if (!this._ttsTargets) this._ttsTargets = [];
    el.innerHTML = this._ttsTargets.map(t => {
      const name = this._hass?.states?.[t]?.attributes?.friendly_name || t.replace('media_player.','').replace(/_/g,' ');
      return `<span class="notif-chip" style="background:rgba(3,169,244,.12);border-color:rgba(3,169,244,.25);color:var(--primary-color)">🔊 ${name}
        <button data-tts-remove="${t}">✕</button>
      </span>`;
    }).join('') || `<span class="small" style="opacity:.5">—</span>`;
    el.querySelectorAll('[data-tts-remove]').forEach(btn =>
      btn.addEventListener('click', () => {
        this._ttsTargets = this._ttsTargets.filter(x => x !== btn.dataset.ttsRemove);
        this._renderTtsChips();
        this._populateTtsSelect();
      })
    );
  }

  _renderNotifications() {
    this._renderNotifChips();
    this._renderTtsChips();
    this._populateNotifSelect();
    this._populateTtsSelect();
  }

  async _saveNotifications() {
    const status = this.shadowRoot.getElementById('notif-status');
    try {
      await this._send('argus/save_ui', {
        notif_targets: this._notifTargets,
        tts_targets: this._ttsTargets || [],
      });
      status.textContent = '✓'; status.className = 'status ok';
    } catch (e) { status.textContent = e.message; status.className = 'status err'; }
  }

  /* ── Users ───────────────────────────────────────────────────────── */
  _renderUsers() {
    const el = this.shadowRoot.getElementById('users-list');
    if (!this._users.length) {
      el.innerHTML = `<div class="small">${this._t('no_users')}</div>`;
      return;
    }
    el.innerHTML = this._users.map((u, i) => `
      <div class="user-card">
        <div>
          <div style="font-weight:700">${u.name}</div>
          <span class="user-badge ${u.is_admin ? 'admin' : ''}">${u.is_admin ? '⭐ Admin' : '👤 User'}</span>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          ${this._isAdmin ? `<span class="small">PIN: ${u.pin || '—'}</span>
          <button class="danger" style="padding:5px 10px" data-user-del="${i}">🗑</button>` : ''}
        </div>
      </div>`).join('');
    if (this._isAdmin) {
      el.querySelectorAll('[data-user-del]').forEach(btn =>
        btn.addEventListener('click', () => {
          this._users.splice(Number(btn.dataset.userDel), 1);
          this._renderUsers();
        })
      );
    }
    // show/hide form based on admin
    const form = this.shadowRoot.getElementById('add-user-form');
    if (form) form.style.display = this._isAdmin ? '' : 'none';
  }

  async _saveUser() {
    if (!this._isAdmin) return;
    const name = this.shadowRoot.getElementById('new-user-name').value.trim();
    const pin  = this.shadowRoot.getElementById('new-user-pin').value.trim();
    const isAdmin = this.shadowRoot.getElementById('new-user-admin').checked;
    const status = this.shadowRoot.getElementById('user-status');
    if (!name || !pin) { status.textContent = 'Nombre y PIN requeridos'; status.className = 'status err'; return; }
    this._users.push({ name, pin, is_admin: isAdmin });
    try {
      await this._send('argus/save_ui', { users: this._users });
      this.shadowRoot.getElementById('new-user-name').value = '';
      this.shadowRoot.getElementById('new-user-pin').value = '';
      this.shadowRoot.getElementById('new-user-admin').checked = false;
      status.textContent = '✓'; status.className = 'status ok';
      this._renderUsers();
    } catch (e) { status.textContent = e.message; status.className = 'status err'; }
  }

  /* ── HomeKit ─────────────────────────────────────────────────────── */
  async _renderHomeKit() {
    const sec = this.shadowRoot.getElementById('homekit-section');
    const cnt = this.shadowRoot.getElementById('homekit-content');
    if (!sec || !cnt) return;
    sec.style.display = '';
    let code = null, bridgeName = null, homeName = null;

    try {
      const hkEntries = await this._hass.callWS({ type: 'config_entries/get', domain: 'homekit' }).catch(() => []);
      const alarmDomains = (this._dashboard?.entries || []).map(e => e.entity_id).filter(Boolean);

      for (const ent of (hkEntries || [])) {
        const inc = ent.options?.include_entities || [];
        const matchesArgus = inc.some(id => id.startsWith('alarm_control_panel')) ||
          alarmDomains.some(id => inc.includes(id));
        if (matchesArgus || !bridgeName) {
          bridgeName = ent.title || ent.data?.name || bridgeName || 'Argus Bridge';
          code = String(ent.options?.code || ent.data?.code || code || '').replace(/\D/g, '');
          // Try to read home_name from pairing state
          homeName = ent.data?.home_name || ent.options?.home_name || null;
          if (matchesArgus) break;
        }
      }

      // Fallback from persistent notifications
      if (!code) {
        for (const s of Object.values(this._hass?.states || {})) {
          if (!s.entity_id.startsWith('persistent_notification.')) continue;
          const msg = (s.attributes?.message || '').toLowerCase();
          if (!msg.includes('homekit')) continue;
          const m = (s.attributes.message || '').match(/(\d{3}-\d{2}-\d{3}|\d{8})/);
          if (m) { code = m[1].replace(/-/g, ''); break; }
        }
      }

      // Try to read home name from homekit_pairing entity if available
      if (!homeName) {
        const pairState = Object.values(this._hass?.states || {})
          .find(s => s.entity_id.startsWith('homekit.') || s.entity_id.startsWith('sensor.homekit_'));
        if (pairState) homeName = pairState.attributes?.home_name || null;
      }
    } catch (_) {}

    const bridgeLabel = bridgeName || 'Argus Bridge';
    const homeLabel   = homeName || null;

    if (code && code.length >= 8) {
      const fmt = code.replace(/(\d{3})(\d{2})(\d{3})/, '$1-$2-$3');
      cnt.innerHTML = `
        <div style="display:grid;gap:16px;justify-items:center;padding:8px 0">
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
            <div style="background:var(--primary-color);color:#fff;padding:5px 14px;border-radius:8px;font-size:12px;font-weight:700">🌉 ${this._t('homekit_bridge')}: ${bridgeLabel}</div>
            ${homeLabel ? `<div style="background:rgba(67,160,71,.15);color:var(--success-color,#43a047);padding:5px 14px;border-radius:8px;font-size:12px;font-weight:700">🏡 ${this._t('homekit_house')}: ${homeLabel}</div>` : ''}
          </div>
          <canvas id="hk-qr"></canvas>
          <div style="font-size:28px;font-weight:900;letter-spacing:6px;font-family:monospace;padding:10px 20px;border-radius:12px;border:2px dashed color-mix(in srgb,var(--primary-color,#03a9f4) 35%,transparent)">${fmt}</div>
          <div class="small">Security System · IP</div>
        </div>`;
      this._drawHKQR(code);
    } else {
      cnt.innerHTML = `
        <div style="display:grid;gap:10px">
          ${bridgeLabel ? `<div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">🌉</span><div><div style="font-weight:700">${bridgeLabel}</div><div class="small">${homeLabel ? `${this._t('homekit_house')}: ${homeLabel}` : this._t('homekit_not_paired')}</div></div></div>` : ''}
          <p class="small" style="margin:0">Activa HomeKit Bridge en HA e incluye la entidad <code>alarm_control_panel.argus_*</code>.</p>
        </div>`;
    }
  }

  async _drawHKQR(code8) {
    try {
      if (!window.QRCode) await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js';
        s.onload = res; s.onerror = rej; document.head.appendChild(s);
      });
      const payload = BigInt(11) * BigInt(0x100000000) + BigInt(parseInt(code8) * 16 + 4);
      const uri = 'X-HM://' + payload.toString(36).toUpperCase().padStart(9, '0');
      const canvas = this.shadowRoot.getElementById('hk-qr');
      if (canvas && window.QRCode) QRCode.toCanvas(canvas, uri, { width: 180, margin: 2, color: { dark: '#000', light: '#fff' } });
    } catch (_) { const c = this.shadowRoot.getElementById('hk-qr'); if (c) c.style.display = 'none'; }
  }

  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const p1 = this.shadowRoot.getElementById('new-pin-1').value;
    const p2 = this.shadowRoot.getElementById('new-pin-2').value;
    const status = this.shadowRoot.getElementById('pin-status');
    if (p1 !== p2) { status.textContent = 'PIN no coinciden'; status.className = 'status err'; return; }
    try {
      await this._send('argus/update_master_pin', { pin: p1 });
      status.textContent = '✓'; status.className = 'status ok';
      this.shadowRoot.getElementById('new-pin-1').value = '';
      this.shadowRoot.getElementById('new-pin-2').value = '';
      setTimeout(() => this._load(), 1200);
    } catch (e) { status.textContent = e.message; status.className = 'status err'; }
  }

  _showPinModal(onConfirm) {
    const m = this.shadowRoot.getElementById('pin-modal');
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    inp.value = ''; if (err) err.textContent = '';
    this._pinCallback = onConfirm;
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    setTimeout(() => inp.focus(), 60);
  }

  _closePinModal() {
    this.shadowRoot.getElementById('pin-modal').classList.remove('open');
    this.shadowRoot.getElementById('pin-modal').setAttribute('aria-hidden', 'true');
    this._pinCallback = null;
  }

  _submitPin() {
    const pin = this.shadowRoot.getElementById('pin-input').value.trim();
    if (!pin) { this.shadowRoot.getElementById('pin-error').textContent = '⚠️ Introduce el PIN'; return; }
    const cb = this._pinCallback;
    this._closePinModal();
    if (cb) cb(pin);
  }

  /* ── Selector modal ──────────────────────────────────────────────── */
  _openModal(type) {
    this._selectorTarget = type;
    const cfg = this._currentModeConfig();
    this._selected = [...(cfg[type === 'sensor' ? 'sensors' : 'sirens'] || [])];
    const title = this.shadowRoot.getElementById('selector-title');
    title.textContent = type === 'sensor' ? this._t('sensor_section') : this._t('siren_section');
    this.shadowRoot.getElementById('selector-search').value = '';
    this._renderSelector();
    const m = this.shadowRoot.getElementById('selector-modal');
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
  }

  _closeModal() {
    const m = this.shadowRoot.getElementById('selector-modal');
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
  }

  _renderSelector() {
    const q = (this.shadowRoot.getElementById('selector-search').value || '').toLowerCase().trim();
    const list   = this.shadowRoot.getElementById('selector-list');
    const selBox = this.shadowRoot.getElementById('selector-selected');

    // For sensor type: only contact sensors (door/window/vibration/glass/opening),
    // camera-linked motion sensors, and locks. Everything else is excluded.
    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = this._available.filter(x => {
      if (this._selectorTarget === 'siren') return ['siren','switch'].includes(x.domain);
      // sensor mode:
      if (x.domain === 'lock') return true;
      if (x.domain === 'binary_sensor') {
        const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
        return INTRUSION_DC.includes(dc);
      }
      return false;
    }).filter(x => !q || [x.entity_id, x.name, x.area, x.entity_id.split('.')[1]].filter(Boolean).join(' ').toLowerCase().includes(q));

    list.innerHTML = items.map(x => {
      const raw   = this._hass?.states?.[x.entity_id]?.state || 'unknown';
      const isTr  = ['on', 'unlocked', 'open', 'recording'].includes(raw);
      const dc    = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
      const lblMap = { on:'Abierto', off:'Cerrado', locked:'Cerrado', unlocked:'Abierto', idle:'Reposo', recording:'Grabando', home:'En casa', not_home:'Fuera' };
      const lbl  = this._selectorTarget === 'sensor'
        ? `<span class="badge ${isTr ? 'armed_away' : 'disarmed'}" style="padding:2px 6px;font-size:10px">${lblMap[raw] || raw}</span>`
        : '';
      return `<label class="list-item">
        <input type="checkbox" data-entity="${x.entity_id}" ${this._selected.includes(x.entity_id) ? 'checked' : ''}>
        <div>
          <div style="font-weight:700;display:flex;align-items:center;gap:6px">${x.name || x.entity_id}${lbl}</div>
          <div class="small">${x.entity_id}${x.area ? ' · '+x.area : ''}</div>
        </div>
      </label>`;
    }).join('') || `<div class="small">Sin resultados</div>`;

    list.querySelectorAll('input[type=checkbox]').forEach(cb =>
      cb.addEventListener('change', e => {
        const id = e.target.dataset.entity;
        if (e.target.checked) { if (!this._selected.includes(id)) this._selected.push(id); }
        else this._selected = this._selected.filter(v => v !== id);
        this._renderSelector();
      })
    );

    selBox.innerHTML = this._selected.map(id =>
      `<div class="list-item" style="justify-content:space-between">
        <div>${this._hass?.states?.[id]?.attributes?.friendly_name || id}</div>
        <button class="ghost" style="padding:4px 9px" data-rm="${id}">✕</button>
      </div>`
    ).join('') || `<div class="small">${this._t('none_selected')}</div>`;

    selBox.querySelectorAll('[data-rm]').forEach(b =>
      b.addEventListener('click', () => {
        this._selected = this._selected.filter(v => v !== b.dataset.rm);
        this._renderSelector();
      })
    );
    this.shadowRoot.getElementById('selector-count').textContent =
      `${this._selected.length} ${this._t('selected_lbl').toLowerCase()}`;
  }

  _acceptSelection() {
    const cfg = this._currentModeConfig();
    if (!this._ui.modes) this._ui.modes = {};
    if (this._selectorTarget === 'sensor') cfg.sensors = [...this._selected];
    if (this._selectorTarget === 'siren')  cfg.sirens  = [...this._selected];
    this._ui.modes[this._mode] = cfg;
    this._closeModal();
    this._renderModeView();
  }

  /* ── Alarm actions ───────────────────────────────────────────────── */
  async _handleAction(idx, action) {
    const e = this._dashboard.entries[Number(idx)];
    if (!e?.entity_id || !this._hass) return;
    const live = this._hass.states[e.entity_id];
    if (!live || live.state === 'unavailable') return;

    const serviceMap = {
      home: 'alarm_arm_home', away: 'alarm_arm_away',
      night: 'alarm_arm_night', vacation: 'alarm_arm_vacation',
      disarm: 'alarm_disarm',
    };
    const modeLabels = {
      home: this._t('mode_home'), away: this._t('mode_away'),
      night: this._t('mode_night'), vacation: this._t('mode_vacation'),
    };
    const service = serviceMap[action];
    if (!service) return;
    const currentUser = this._hass?.user?.name || 'Usuario';

    if (action === 'disarm') {
      this._showPinModal(async pin => {
        try {
          await this._hass.callService('alarm_control_panel', 'alarm_disarm', { entity_id: e.entity_id, code: pin });
          // Write audit log
          this._writeLog('disarm', `${e.title || 'Argus'} desarmado`, currentUser);
          // HA push notification
          this._sendHaNotif(`🔓 ${this._t('log_disarmed')}`, `${e.title || 'Argus'} fue desarmado por ${currentUser}.`);
          setTimeout(() => this._load(), 800);
        } catch (err) { console.error('disarm error:', err); }
      });
      return;
    }

    try {
      await this._hass.callService('alarm_control_panel', service, { entity_id: e.entity_id });
      const modeTxt = modeLabels[action] || action;
      this._writeLog('arm', `${e.title || 'Argus'} armado en modo ${modeTxt}`, currentUser);
      this._sendHaNotif(`🔒 ${this._t('log_armed')} — ${modeTxt}`, `${e.title || 'Argus'} fue armado en modo "${modeTxt}" por ${currentUser}.`);
      setTimeout(() => this._load(), 800);
    } catch (err) { console.error('Argus action failed', err); }
  }

  /* ── Audit log writer ────────────────────────────────────────────── */
  _writeLog(action, detail, user = '') {
    // Write to backend asynchronously – don't block UI
    this._send('argus/write_log', { action, detail, user }).catch(() => {});
    // Optimistically prepend to local log so it's visible immediately
    if (!this._ui) this._ui = {};
    if (!this._ui.audit_log) this._ui.audit_log = [];
    this._ui.audit_log.unshift({ action, detail, user, ts: new Date().toISOString() });
    this._ui.audit_log = this._ui.audit_log.slice(0, 50);
    this._renderActivityLog();
  }

  /* ── HA Notifications helper ─────────────────────────────────────── */
  _sendHaNotif(title, message) {
    if (!this._notifTargets.length) return;
    for (const target of this._notifTargets) {
      this._hass.callService('notify', target, { title, message }).catch(() => {});
    }
  }

}

customElements.define('argus-panel', ArgusPanel);
