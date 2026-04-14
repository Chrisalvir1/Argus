/**
 * Argus Home Hub – v0.7.0
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
  .hero{padding:24px 26px;display:flex;align-items:center;justify-content:space-between;gap:16px}
  .hero-left{display:flex;align-items:center;gap:16px}
  .hero-icon{font-size:44px;line-height:1}
  .hero h1{margin:0 0 4px;font-size:26px;font-weight:800}
  .hero p{margin:0;font-size:14px;opacity:.6}
  .grid{display:grid;grid-template-columns:1.35fr 1fr;gap:20px;align-items:start}
  @media(max-width:860px){.grid{grid-template-columns:1fr}}
  .panel{padding:20px}
  .panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
  .panel h2{margin:0;font-size:13px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;opacity:.55}
  
  /* Intelligent Entry Card */
  .entry{position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(255,255,255,0.1);margin-bottom:16px;min-height:220px;display:flex;flex-direction:column;transition:transform 0.3s ease}
  .entry-bg{position:absolute;inset:0;z-index:1;background-size:cover;background-position:center;transition:opacity 0.5s ease}
  .entry-bg img{width:100%;height:100%;object-fit:cover;opacity:0.6}
  .entry-content{position:relative;z-index:2;flex:1;padding:20px;display:grid;grid-template-columns:140px 1fr;gap:20px;align-items:center;background:linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 60%)}
  
  /* HUD Overlay */
  .hud{position:absolute;top:15px;right:20px;text-align:right;z-index:3;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,0.5)}
  .hud-loc{font-size:12px;font-weight:800;text-transform:uppercase;opacity:0.9;letter-spacing:1px}
  .hud-data{font-size:18px;font-weight:700;margin-top:2px}

  /* Liquid Glass Buttons */
  .liquid-stack{display:grid;gap:8px}
  .liquid-btn{border:none;background:rgba(255,255,255,0.08);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);color:#fff;padding:10px 14px;border-radius:14px;font-size:11px;font-weight:700;display:flex;align-items:center;gap:10px;text-align:left;cursor:pointer;transition:all 0.2s cubic-bezier(0.4,0,0.2,1);border:1px solid rgba(255,255,255,0.05)}
  .liquid-btn:hover{background:rgba(255,255,255,0.15);transform:translateX(5px);border-color:rgba(255,255,255,0.2)}
  .liquid-btn.active{background:var(--btn-bg, rgba(255,255,255,0.2));border-color:rgba(255,255,255,0.4);box-shadow:0 0 20px var(--btn-shadow, rgba(255,255,255,0.1))}
  .liquid-btn i{font-size:14px}
  
  /* Mode Specific Colors for Liquid Buttons */
  .btn-home.active{--btn-bg:rgba(251,140,0,0.3); --btn-shadow:rgba(251,140,0,0.4)}
  .btn-away.active{--btn-bg:rgba(229,57,53,0.3); --btn-shadow:rgba(229,57,53,0.4)}
  .btn-night.active{--btn-bg:rgba(30,136,229,0.3); --btn-shadow:rgba(30,136,229,0.4)}
  .btn-vacation.active{--btn-bg:rgba(156,39,176,0.3); --btn-shadow:rgba(156,39,176,0.4)}
  .btn-disarm{--btn-bg:rgba(67,160,71,0.2); margin-top:4px}
  
  .entry-icon{display:flex;justify-content:center;align-items:center;perspective:1000px}
  .entry-icon img{max-width:100%;height:auto;filter:drop-shadow(0 10px 20px rgba(0,0,0,0.4));animation:float-icon 4s ease-in-out infinite}
  @keyframes float-icon{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-15px) rotate(2deg)}}

  .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
  .badge.armed_away,.badge.armed_vacation{background:rgba(229,57,53,.15);color:var(--error-color,#e53935)}
  .badge.armed_home,.badge.armed_night{background:rgba(251,140,0,.15);color:#fb8c00}
  .badge.disarmed{background:rgba(67,160,71,.15);color:var(--success-color,#43a047)}
  .badge.triggered{background:rgba(229,57,53,.25);color:var(--error-color,#e53935);animation:pulse 1s ease-in-out infinite}

  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
  .meta{font-size:12px;opacity:.5}
  
  /* Generic buttons */
  button{border:0;border-radius:12px;padding:9px 16px;font:700 13px/1 Inter,system-ui,sans-serif;cursor:pointer;transition:opacity .15s,transform .1s}
  button:active:not(:disabled){transform:scale(.96)}
  button.primary{background:var(--primary-color,#03a9f4);color:#fff}
  button.ghost{background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 60%,var(--primary-color,#03a9f4) 12%);color:var(--primary-text-color)}
  
  /* FS button */
  .fs-btn{background:rgba(255,255,255,0.05);padding:8px;border-radius:10px;font-size:16px}
  
  input[type=text],input[type=password],input[type=number],select:not([multiple]){width:100%;border-radius:12px;border:1px solid var(--divider-color,#444);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 52%,transparent);color:var(--primary-text-color);padding:9px 12px;font-size:13px;outline:none}
  .save-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:8px}
  .status{font-size:13px;flex:1}
  .tabs{display:flex;gap:6px;margin-bottom:18px;padding:5px;background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 42%,transparent);border-radius:14px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 30%,transparent)}
  .tab{flex:1;padding:9px 6px;text-align:center;cursor:pointer;border-radius:10px;font-size:12px;font-weight:700;white-space:nowrap}
  .tab.active{background:var(--primary-color,#03a9f4);color:#fff;box-shadow:0 4px 12px rgba(3,169,244,.28)}
  .stack{display:grid;gap:14px}
  .subsection{background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 35%,transparent);border:1px solid color-mix(in srgb,var(--divider-color,#444) 45%,transparent);border-radius:14px;padding:14px;display:grid;gap:12px}
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
    <div class="hero-left">
      <div class="hero-icon">🛡️</div>
      <div>
        <h1>Argus Home Hub</h1>
        <p id="p-hero-desc"></p>
      </div>
    </div>
    <button class="ghost fs-btn" id="btn-fullscreen" title="Full Screen">⛶</button>
  </div>

  <!-- TWO-COLUMN LAYOUT -->
  <div class="grid" style="align-items:start">

    <!-- LEFT COLUMN -->
    <div class="stack">
      <!-- Instances -->
      <section class="glass panel">
        <div class="panel-head">
          <h2 id="h-instances"></h2>
          <div id="global-status"></div>
        </div>
        <div id="entries"></div>
      </section>

      <!-- Users -->
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
          <div class="save-row"><button class="primary" id="btn-save-user" style="width:100%"></button><span class="status" id="user-status" style="width:100%;text-align:center"></span></div>
        </div>
      </section>

      <!-- Automations -->
      <section class="glass panel">
        <h2 id="h-automations"></h2>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
          <span class="small" id="p-linked-rules"></span>
          <button class="primary" id="btn-new-auto" style="padding:6px 14px;font-size:12px"></button>
        </div>
        <div id="auto-view"></div>
      </section>

      <!-- HomeKit -->
      <section class="glass panel" id="homekit-section" style="display:none">
        <h2 id="h-homekit"></h2>
        <div id="homekit-content"></div>
      </section>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="stack">
      <!-- Activity log -->
      <section class="glass panel">
        <h2 id="h-activity-log"></h2>
        <div id="activity-log" style="display:grid;gap:8px;max-height:260px;overflow-y:auto"></div>
      </section>

      <!-- Modes -->
      <section class="glass panel">
        <h2 id="h-modes"></h2>
        <div class="tabs" id="mode-tabs"></div>
        <div id="mode-view"></div>
      </section>

      <!-- Notifications -->
      <section class="glass panel">
        <h2 id="h-notifications"></h2>
        <p class="small" id="p-notif-desc" style="margin-bottom:10px"></p>
        <div class="subsection" style="margin-bottom:12px">
          <div class="subsection-title" id="t-push-title">📱 Notificaciones Push (Móvil)</div>
          <div id="notif-targets" class="chip-list" style="min-height:28px"></div>
          <div style="display:flex;gap:8px;align-items:center;margin-top:8px">
            <select id="notif-select" style="flex:1"></select>
            <button class="ghost" id="btn-add-notif" style="white-space:nowrap">+ Agregar</button>
          </div>
        </div>
        <div class="save-row" style="margin-top:10px"><button class="primary" id="btn-save-notif" style="width:100%"></button><span class="status" id="notif-status" style="width:100%;text-align:center"></span></div>
      </section>

      <!-- Settings -->
      <section class="glass panel">
        <h2 id="h-settings"></h2>
        <div class="subsection">
          <div class="subsection-title" id="t-change-pin"></div>
          <p class="small" id="p-pin-desc" style="margin:0"></p>
          <div id="current-pin-display" style="font-size:13px;font-weight:700;color:var(--primary-color);margin-bottom:12px"></div>
          
          <div class="field-group" id="group-current-pin" style="display:none; margin-bottom:12px">
             <label>PIN Actual (Obligatorio para verificar)</label>
             <input type="password" id="current-pin" inputmode="numeric" pattern="[0-9]*">
          </div>

          <div class="two-col" style="gap:8px">
            <div class="field-group"><label id="l-new-pin"></label><input type="password" id="new-pin-1" inputmode="numeric" pattern="[0-9]*" placeholder="Vacío = Desactivar"></div>
            <div class="field-group"><label id="l-confirm-pin"></label><input type="password" id="new-pin-2" inputmode="numeric" pattern="[0-9]*"></div>
          </div>
          <div class="save-row">
            <button class="primary" id="btn-save-pin" style="width:100%;margin-top:4px"></button>
            <span class="status" id="pin-status" style="width:100%;text-align:center"></span>
          </div>
        </div>
      </section>
    </div> <!-- /RIGHT COLUMN -->

  </div> <!-- /grid -->
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

    s('btn-fullscreen').addEventListener('click', () => this._toggleFullscreen());

    s('btn-add-notif').addEventListener('click', () => this._addNotifTarget());
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

    // Show current PIN toggle & validation required
    const currentPin = dashboard.entries?.[0]?.options?.code || '';
    const pinDisp = this.shadowRoot.getElementById('current-pin-display');
    const groupCurrentPin = this.shadowRoot.getElementById('group-current-pin');
    
    if (pinDisp) pinDisp.textContent = currentPin ? `PIN Activo: Sí` : `PIN Activo: No`;
    if (groupCurrentPin) groupCurrentPin.style.display = currentPin ? 'block' : 'none';

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
    const globalStatusEl = this.shadowRoot.getElementById('global-status');
    const entries = this._dashboard?.entries || [];

    if (!entries.length) {
      el.innerHTML = `<div class="small" style="padding:10px">No hay instancias. Agrega Argus desde Integraciones.</div>`;
      return;
    }

    // Determine global status
    const allStates = entries.map(e => this._hass?.states[e.entity_id]?.state || 'unavailable');
    const isArmed = allStates.some(s => s.startsWith('armed') || s === 'triggered' || s === 'pending');
    globalStatusEl.innerHTML = `<span class="badge ${isArmed ? 'armed_away' : 'disarmed'}">${isArmed ? 'SISTEMA ARMADO' : 'SISTEMA DESARMADO'}</span>`;

    // Weather & Location Logic
    const locName = this._hass?.config?.location_name || "Atenas, Costa Rica";
    const weatherEnt = Object.values(this._hass?.states || {}).find(s => s.entity_id.startsWith('weather.')) || { state: 'clear', attributes: { temperature: 24, temperature_unit: '°C' } };
    const temp = weatherEnt.attributes.temperature || '--';
    const unit = weatherEnt.attributes.temperature_unit || '°C';
    const weatherState = (weatherEnt.state || 'clear').toLowerCase();
    const sunState = this._hass?.states['sun.sun']?.state || 'above_horizon';
    const isNight = sunState === 'below_horizon';

    // Time
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    // Background Selection
    let bgSvg = isNight ? 'env_night.svg' : 'env_day.svg';
    if (weatherState.includes('rain')) bgSvg = 'env_rain.svg';
    else if (weatherState.includes('cloud')) bgSvg = 'env_clouds.svg';

    el.innerHTML = entries.map((e, idx) => {
      const live  = this._hass?.states[e.entity_id]?.state;
      const state = live || e.state || 'unavailable';
      const triggered = state === 'triggered';
      const isUnavail = state === 'unavailable' || !e.entity_id;

      // Icon Selection
      let svgName = 'mode_disarmed.svg';
      if (state === 'armed_home') svgName = 'mode_home.svg';
      else if (state === 'armed_away') svgName = 'mode_away.svg';
      else if (state === 'armed_night') svgName = 'mode_night.svg';
      else if (state === 'armed_vacation') svgName = 'mode_vacation.svg';

      return `
        <article class="entry" style="${triggered ? 'border: 2px solid var(--error-color)' : ''}">
          <div class="entry-bg"><img src="/api/argus_static/${bgSvg}?v=0.8.0"></div>
          
          <div class="hud">
            <div class="hud-loc">${locName}</div>
            <div class="hud-data">${timeStr} • ${temp}${unit}</div>
          </div>

          <div class="entry-content">
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${state==='armed_home'?'active':''}" data-idx="${idx}" data-action="home">🏠 EN CASA</button>
              <button class="liquid-btn btn-away ${state==='armed_away'?'active':''}" data-idx="${idx}" data-action="away">🔒 AUSENTE</button>
              <button class="liquid-btn btn-night ${state==='armed_night'?'active':''}" data-idx="${idx}" data-action="night">🌙 NOCHE</button>
              <button class="liquid-btn btn-vacation ${state==='armed_vacation'?'active':''}" data-idx="${idx}" data-action="vacation">✈️ VACACIÓN</button>
              <button class="liquid-btn btn-disarm" data-idx="${idx}" data-action="disarm">🔓 DESARMADO</button>
            </div>
            
            <div class="entry-icon">
               ${triggered ? '<div style="font-size:80px; filter: drop-shadow(0 0 20px #f00)">🚨</div>' : `<img src="/api/argus_static/${svgName}?v=0.8.0">`}
            </div>
          </div>
        </article>`;
    }).join('');

    el.querySelectorAll('button[data-action]').forEach(btn =>
      btn.addEventListener('click', ev => this._handleAction(ev.currentTarget.dataset.idx, ev.currentTarget.dataset.action))
    );
  }

  _toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.requestFullscreen().catch(err => {
        alert(`Error al activar pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
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
          ${readonly ? '' : `<div><button class="ghost" data-open-selector="sensor">${this._t('search_select')}</button></div>
          <label class="checkbox-label" style="display:block;margin-top:10px">
            <input type="checkbox" id="mode-require-closed" ${cfg.require_closed ? 'checked' : ''}>
            Bloquear armado si hay sensores abiertos
          </label>`}
        </div>
        <div class="subsection">
          <div class="subsection-title">${this._t('siren_section')}</div>
          <div class="chip-list" id="siren-chips">
            ${sirens.map(x => this._chip(x, 'siren')).join('') || `<span class="small">${this._t('none_selected')}</span>`}
          </div>
          ${readonly ? '' : `<div><button class="ghost" data-open-selector="siren">${this._t('search_select')}</button></div>`}
        </div>
      ${readonly ? '' : `<div class="save-row" style="margin-top:14px">
        <button class="primary" id="save-mode" style="width:100%">${this._t('save_mode')}</button>
        <span class="status" id="mode-status" style="width:100%;text-align:center"></span>
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
    const chk = this.shadowRoot.getElementById('mode-require-closed');
    if (chk) cfg.require_closed = chk.checked;
    
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
      el.innerHTML = '';
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

  _addNotifTarget() {
    const sel = this.shadowRoot.getElementById('notif-select');
    const val = sel?.value;
    if (!val || this._notifTargets.includes(val)) return;
    this._notifTargets.push(val);
    this._renderNotifChips();
    this._populateNotifSelect();
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

  _renderNotifications() {
    this._renderNotifChips();
    this._populateNotifSelect();
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

    // If we have no code, but we found a bridge, it means it is already paired
    // to an Apple Home (the PIN notification is removed by HA upon successful pairing).
    const isPaired = !code && bridgeName;
    const bridgeLabel = bridgeName || 'Argus Bridge';
    const homeLabel   = homeName || (isPaired ? 'Apple Home (Conectado)' : null);

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
    } else if (isPaired) {
      cnt.innerHTML = `
        <div style="display:grid;gap:10px">
          <div style="display:flex;align-items:center;gap:12px;padding:8px 0">
            <span style="font-size:32px;line-height:1">✅</span>
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--success-color,#43a047)">¡Puente Vinculado!</div>
              <div class="small" style="opacity:.7">El puente <b>${bridgeLabel}</b> está actualmente conectado a <b>${homeLabel}</b>.</div>
            </div>
          </div>
        </div>`;
    } else {
      cnt.innerHTML = `
        <div style="display:grid;gap:10px">
          <div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">🌉</span><div><div style="font-weight:700">${bridgeLabel}</div><div class="small">${this._t('homekit_not_paired')}</div></div></div>
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
    const status = this.shadowRoot.getElementById('pin-status');
    const currentCode = this._dashboard?.entries?.[0]?.options?.code || '';
    
    if (currentCode) {
      const pinCurrent = this.shadowRoot.getElementById('current-pin').value;
      if (pinCurrent !== currentCode) {
        status.textContent = '❌ PIN actual incorrecto';
        status.className = 'status err';
        return;
      }
    }

    const p1 = this.shadowRoot.getElementById('new-pin-1').value;
    const p2 = this.shadowRoot.getElementById('new-pin-2').value;
    
    if (p1 !== p2) { 
      status.textContent = '❌ PIN nuevo no coincide'; 
      status.className = 'status err'; 
      return; 
    }
    
    try {
      await this._send('argus/update_master_pin', { pin: p1 });
      status.textContent = '✓ Guardado'; 
      status.className = 'status ok';
      if (this.shadowRoot.getElementById('current-pin')) this.shadowRoot.getElementById('current-pin').value = '';
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
          this._writeLog('disarm', `Sistema desarmado`, currentUser);
          this._sendHaNotif(`🔓 ${this._t('log_disarmed')}`, `El sistema fue desarmado manualmente por ${currentUser}.`);
          setTimeout(() => this._load(), 800);
        } catch (err) { console.error('disarm error:', err); }
      });
      return;
    }

    // Check if mode requires closed sensors
    const modeCfg = this._ui?.modes?.[action] || {};
    if (modeCfg.require_closed) {
      const modeSensors = modeCfg.sensors || [];
      const openNames = [];
      for (const entityId of modeSensors) {
        const estado = this._hass.states[entityId]?.state;
        if (['on', 'open', 'unlocked', 'active', 'motion', 'recording'].includes(estado)) {
          const name = this._hass.states[entityId]?.attributes?.friendly_name || entityId;
          openNames.push(name);
        }
      }
      if (openNames.length > 0) {
        alert(`🚨 Armado bloqueado.\n\nEl modo requiere que los sensores estén cerrados.\nSensores abiertos:\n- ${openNames.join('\n- ')}`);
        this._writeLog('arm_rejected', `Sensores abiertos al intentar armar: ${openNames.join(', ')}`, currentUser);
        return; // Abort
      }
    }

    try {
      await this._hass.callService('alarm_control_panel', service, { entity_id: e.entity_id });
      const modeTxt = modeLabels[action] || action;
      this._writeLog('arm', `Sistema armado en modo ${modeTxt}`, currentUser);
      this._sendHaNotif(`🔒 ${this._t('log_armed')} — ${modeTxt}`, `El sistema fue armado en modo "${modeTxt}" manualmente por ${currentUser}.`);
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
