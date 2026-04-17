/**
 * Argus Home Hub – v0.9.21
 * Complete, self-contained custom element.
 * Fixes: inline CSS animated weather (rain/storm/snow/stars/moon/sun),
 *        temperature from dedicated local sensor with weather fallback,
 *        DESARMADO button active state when disarmed,
 *        per-instance fullscreen, vacation quick action, numeric PIN dial pad,
 *        mode tabs including disarmed.
 * v0.9.21: Fix light-mode invisible text (mode-section-title/sensor-pill),
 *          selector panel-right not showing selected items,
 *          export uses Blob API (modern browsers), import reset + robust validation,
 *          require_closed & bypassed_sensors read/write per entity_id structure.
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
    add_user:'Agregar usuario', username:'Nombre de Usuario', user_pin:'PIN de usuario',
    is_admin:'Administrador', save_user:'Guardar', no_users:'Sin usuarios adicionales configurados.',
    homekit_title:'🏠 HomeKit & Matter', close:'Cerrar',
    search_placeholder:'Buscar por nombre, área o entity_id',
    available:'Disponibles', selected_lbl:'Seleccionadas', clear:'Limpiar', accept:'Aceptar',
    introduce_pin:'Introduce tu PIN', pin_modal_desc:'PIN numérico para desarmar Argus',
    confirm:'✓ Confirmar', cancel:'Cancelar',
    disarmed:'Desarmado', armed_home:'En Casa', armed_away:'Ausente',
    armed_night:'Noche', armed_vacation:'Vacaciones', triggered:'¡ALARMA!',
    pending:'Cuenta regresiva', arming:'Armando', unavailable:'No disponible',
    sensor_section:'Sensores de Intrusión', siren_section:'Sirenas', thermostat_alert_notif:'🌡️ Alerta de temperatura',
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
    sensor_section:'Intrusion Sensors', siren_section:'Sirens', thermostat_alert_notif:'🌡️ Temperature alert',
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

  /* Liquid Glass & SOS Styles */
  :host {
    --glass-bg: var(--argus-glass-bg, rgba(255, 255, 255, 0.12));
    --glass-border: var(--argus-glass-border, rgba(255, 255, 255, 0.2));
    --glass-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    --sos-red: linear-gradient(135deg, #ff4d4f, #d90429);
    --ios-track: rgba(0, 0, 0, 0.1);
    --ios-thumb: linear-gradient(180deg, #ffffff, #f0f0f0);
    --text-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }
  
  /* Detect light mode via HA variables and adjust glass */
  :host([selected-theme*="light"]), :host(:not([selected-theme*="dark"])) {
    --argus-glass-bg: rgba(255, 255, 255, 0.7);
    --argus-glass-border: rgba(0, 0, 0, 0.15);
    --text-shadow: none;
    --hud-bg: rgba(0,0,0,0.06);
    --hero-gradient: linear-gradient(135deg, #1e3c72, #2a5298);
    --card-title-color: #0d47a1;
    --pill-bg: rgba(0,0,0,0.04);
    --pill-border: rgba(0,0,0,0.1);
    --pill-text: #1e1e2d;
  }
  
  :host {
    --hud-text-color: #fff;
    --hud-bg: rgba(255,255,255,0.1);
  }

  .liquid-glass { 
    background: var(--glass-bg); 
    backdrop-filter: blur(20px) saturate(170%); 
    -webkit-backdrop-filter: blur(20px) saturate(170%); 
    border: 1px solid var(--glass-border); 
    box-shadow: var(--glass-shadow); 
  }
  .battery-alert { margin: 0 0 12px 0; padding: 12px 16px; border-radius: 16px; background: rgba(255, 149, 0, 0.16); border: 1px solid rgba(255, 179, 71, 0.32); color: #fff3d6; font-weight: 600; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); text-align: left;}
  .btn-sos { width: 100%; min-height: 54px; border: 0; border-radius: 18px; background: var(--sos-red); color: white; font-size: 1rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 12px 28px rgba(217, 4, 41, 0.35); transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease; margin-top: 8px; }
  .btn-sos:hover { transform: translateY(-1px); box-shadow: 0 16px 34px rgba(217, 4, 41, 0.42); }
  .btn-sos:active { transform: translateY(0); opacity: 0.94; }
  .ios-confirm-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); display: none; align-items: center; justify-content: center; padding: 18px; z-index: 999999; backdrop-filter: blur(10px); }
  .ios-confirm-backdrop.open { display: flex; }
  .ios-confirm-card { width: min(100%, 420px); border-radius: 28px; padding: 22px; color: white; background: rgba(30,30,40,0.85); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
  .ios-confirm-title { font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; text-align: center; }
  .ios-confirm-text { font-size: 0.96rem; opacity: 0.92; line-height: 1.45; text-align: center; margin-bottom: 18px; }
  .ios-slider-shell { padding: 4px 0 16px; }
  .ios-slider-track { position: relative; height: 64px; border-radius: 999px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 255, 255, 0.16); overflow: hidden; }
  .ios-slider-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 82px; font-size: 0.95rem; font-weight: 700; color: rgba(255, 255, 255, 0.92); pointer-events: none; text-align: center; }
  .ios-slider-thumb { position: absolute; top: 6px; left: 6px; width: 52px; height: 52px; border-radius: 50%; background: var(--ios-thumb); color: #d90429; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; box-shadow: 0 8px 18px rgba(0, 0, 0, 0.22); touch-action: none; user-select: none; cursor: grab; transition: transform 0.1s ease-out; }
  .ios-confirm-cancel { width: 100%; min-height: 48px; border: 0; border-radius: 16px; background: rgba(255,255,255,0.1); color: white; font-weight: 700; cursor: pointer; }

  :host{display:block;min-height:100vh;box-sizing:border-box;color:var(--primary-text-color);background:var(--lovelace-background,var(--primary-background-color));font-family:'Outfit',Inter,system-ui,sans-serif}
  *{box-sizing:border-box}
  .wrap{max-width:1400px;margin:0 auto;padding:24px;display:grid;gap:24px}
  .glass{background:rgba(255, 255, 255, 0.08);border:1px solid rgba(255, 255, 255, 0.15);border-radius:24px;box-shadow:0 12px 40px rgba(0,0,0,0.2);backdrop-filter:blur(20px) saturate(1.5);-webkit-backdrop-filter:blur(20px) saturate(1.5)}
  .hero{padding:30px 35px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))}
  .hero-left{display:flex;align-items:center;gap:20px}
  .hero-icon{font-size:52px;line-height:1;filter:drop-shadow(0 0 15px rgba(255,255,255,0.2))}
  .hero h1{margin:0 0 4px;font-size:32px;font-weight:900;letter-spacing:-0.03em;background:var(--hero-gradient, linear-gradient(to right, #ffffff, #b3e5fc));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .hero p{margin:0;font-size:15px;opacity:.7;font-weight:500}
  .grid{display:grid;grid-template-columns:1.2fr 0.9fr 0.9fr;gap:24px;align-items:start}
  @media(max-width:1100px){.grid{grid-template-columns:1fr 1fr}}
  @media(max-width:750px){.grid{grid-template-columns:1fr}.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}
  
  .stack{display:grid;gap:24px}
  .panel{padding:26px;position:relative;overflow:hidden}
  .panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
  .panel h2{margin:0;font-size:14px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--primary-color,#03a9f4);opacity:0.9}
  
  /* Section Mi Casa accessibility */
  .micasa-grid { display: grid; gap: 16px; margin-top: 10px; }
  .micasa-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 18px; transition: all 0.3s ease; }
  .micasa-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.15); transform: translateY(-2px); }
  
  /* Mode Reorganization Styles */
  .mode-grid-layout { display: flex; flex-direction: column; gap: 20px; }
  .mode-section-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 20px; transition: all 0.3s ease; }
  :host([selected-theme*="light"]) .mode-section-card { background: rgba(0,0,0,0.03); border-color: rgba(0,0,0,0.06); }
  .mode-section-card:hover { border-color: rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); }
  :host([selected-theme*="light"]) .mode-section-card:hover { border-color: rgba(0,0,0,0.12); background: rgba(0,0,0,0.05); }
  .mode-section-title { font-size: 14px; font-weight: 800; color: var(--card-title-color, #fff); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }
  /* Fix #1 - Light Mode: titulos visibles */
  :host([selected-theme*="light"]) .mode-section-title { color: var(--primary-text-color, #1e1e2d); }
  :host([selected-theme*="light"]) .subsection-title   { color: rgba(30,30,45,0.55); }
  
  .sensor-pill { background: var(--pill-bg, rgba(255,255,255,0.08)); color: var(--pill-text, #fff); border: 1px solid var(--pill-border, rgba(255,255,255,0.1)); padding: 6px 12px; border-radius: 12px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; }
  /* Fix #1 - Light Mode: pills visibles */
  :host([selected-theme*="light"]) .sensor-pill        { color: var(--pill-text, #1e1e2d); }
  :host([selected-theme*="light"]) .sensor-pill button { color: #1e1e2d; }
  .icon-btn { background: none; border: none; padding: 4px; color: inherit; opacity: 0.6; cursor: pointer; transition: opacity 0.2s; display: flex; align-items: center; justify-content: center; border-radius: 6px; }
  .icon-btn:hover { opacity: 1; background: rgba(255,255,255,0.1); }
  .icon-btn.active { color: #fb8c00; opacity: 1; }
  
  .input-group { display: flex; flex-direction: column; gap: 6px; }
  .input-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-left: 4px; }
  
  /* Intelligent Entry Card */
  .entry{position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(255,255,255,0.1);margin-bottom:16px;min-height:220px;display:flex;flex-direction:column;transition:transform 0.3s ease}
  .entry-bg{position:absolute;inset:0;z-index:1;background-size:cover;background-position:center;transition:opacity 0.5s ease}
  .entry-bg img{width:100%;height:100%;object-fit:cover;opacity:0.6}
  .entry-content{position:relative;z-index:2;flex:1;padding:20px;display:grid;grid-template-columns:140px 1fr;gap:20px;align-items:center;background:linear-gradient(90deg, rgba(0,0,0,0.3) 0%, transparent 60%)}
  
  /* HUD Overlay */
  .hud{position:absolute;top:20px;right:24px;text-align:right;z-index:3;color:var(--hud-text-color);text-shadow:var(--text-shadow);display:flex;flex-direction:column;gap:4px}
  .hud-loc{font-size:13px;font-weight:900;text-transform:uppercase;opacity:1;letter-spacing:1.5px;background:var(--hud-bg);padding:4px 12px;border-radius:10px;backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,0.1);align-self:flex-end}
  .hud-data{font-size:20px;font-weight:800;letter-spacing:-0.02em;background:var(--hud-bg);padding:6px 14px;border-radius:12px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);display:inline-flex;align-items:center;gap:8px;align-self:flex-end}
  .hud-data i{font-size:14px;opacity:0.7;font-style:normal}

  /* Liquid Glass Buttons */
  .liquid-stack{display:grid;gap:10px}
  .liquid-btn{border:none;background:rgba(255,255,255,0.08);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);color:#fff;padding:12px 16px;border-radius:16px;font-size:13px;font-weight:800;display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer;transition:all 0.2s cubic-bezier(0.4,0,0.2,1);border:1px solid rgba(255,255,255,0.1);text-shadow:0 1px 3px rgba(0,0,0,0.4);letter-spacing:0.5px}
  .liquid-btn:hover{background:rgba(255,255,255,0.18);transform:translateX(6px);border-color:rgba(255,255,255,0.3)}
  .liquid-btn.active{background:var(--btn-bg, rgba(255,255,255,0.25));border-color:rgba(255,255,255,0.5);box-shadow:0 0 25px var(--btn-shadow, rgba(255,255,255,0.15))}
  .liquid-btn i{font-size:16px}
  
  /* Mode Specific Colors for Liquid Buttons */
  .btn-home.active{--btn-bg:rgba(251,140,0,0.3); --btn-shadow:rgba(251,140,0,0.4)}
  .btn-away.active{--btn-bg:rgba(229,57,53,0.3); --btn-shadow:rgba(229,57,53,0.4)}
  .btn-night.active{--btn-bg:rgba(30,136,229,0.3); --btn-shadow:rgba(30,136,229,0.4)}
  .btn-vacation.active{--btn-bg:rgba(156,39,176,0.3); --btn-shadow:rgba(156,39,176,0.4)}
  .btn-disarm{--btn-bg:rgba(67,160,71,0.2); margin-top:4px}
  .btn-disarm.active{--btn-bg:rgba(67,160,71,0.35);--btn-shadow:rgba(67,160,71,0.5);border-color:rgba(67,160,71,0.6)!important;box-shadow:0 0 25px rgba(67,160,71,0.45)!important}
  
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
  .setting-label{font-size:13px;font-weight:700;color:var(--primary-text-color);letter-spacing:0.01em;margin-bottom:2px;display:block}
  .setting-sublabel{font-size:12px;font-weight:400;opacity:0.55;color:var(--primary-text-color);margin-bottom:6px;display:block}
  .temp-alert-row{display:flex;gap:10px;align-items:center;margin-top:8px;flex-wrap:wrap}
  .temp-alert-row input[type=number]{width:72px;padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:inherit;font-size:13px;font-weight:700;text-align:center}
  .temp-alert-status-ok{color:#66bb6a;font-size:12px}
  .temp-alert-status-warn{color:#ef5350;font-size:12px;font-weight:700}
  
  /* Generic buttons */
  button{border:0;border-radius:12px;padding:9px 16px;font:700 13px/1 Inter,system-ui,sans-serif;cursor:pointer;transition:opacity .15s,transform .1s}
  button:active:not(:disabled){transform:scale(.96)}
  button.primary{background:var(--primary-color,#03a9f4);color:#fff}
  button.ghost{background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 60%,var(--primary-color,#03a9f4) 12%);color:var(--primary-text-color)}
  
  /* FS button */
  .fs-btn{background:rgba(255,255,255,0.05);padding:8px;border-radius:10px;font-size:16px}
  
  /* Modal Fixes */
  .modal-back{position:fixed;inset:0;background:rgba(0,0,0,0.7);display:none;align-items:center;justify-content:center;padding:20px;z-index:999999;backdrop-filter:blur(8px)}
  .modal-back.open{display:flex}
  .modal{width:min(400px,100%);max-height:85vh;overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:24px;border-radius:28px;background:color-mix(in srgb, var(--card-background-color,#1e1e2e) 95%, #fff);border:1px solid rgba(255,255,255,0.1);box-shadow:0 30px 100px rgba(0,0,0,0.6)}
  .modal-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
  .modal-head h3{margin:0;font-size:20px;font-weight:800}
  .modal-body{overflow:auto;padding:5px}
  .modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:15px}
  /* PIN modal */
  .pm .modal{max-width:340px;min-height:unset;grid-template-rows:auto auto auto}
  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:14px;border-radius:12px;border:2px solid var(--primary-color,#03a9f4);background:transparent;color:inherit;width:100%;outline:none}
  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}
  .pin-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:6px}
  .pin-key{border:1px solid color-mix(in srgb,var(--divider-color,#444) 60%,transparent);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 78%,transparent);color:var(--primary-text-color);padding:14px 0;border-radius:14px;font-size:22px;font-weight:800;min-height:54px}
  .pin-key:hover{background:color-mix(in srgb,var(--primary-color,#03a9f4) 16%,var(--card-background-color,#1e1e2e) 84%)}
  .pin-key.action{font-size:18px}
  .pin-pad-spacer{display:block}
  /* User card */
  .user-card{display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:12px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 50%,transparent);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 60%,transparent)}
  .user-badge{display:inline-block;padding:2px 8px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;background:rgba(3,169,244,.15);color:var(--primary-color,#03a9f4)}
  .user-badge.admin{background:rgba(251,140,0,.15);color:#fb8c00}
  /* Notif target chip */
  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;background:rgba(67,160,71,.13);border:1px solid rgba(67,160,71,.25);font-size:12px;font-weight:700;color:var(--success-color,#43a047)}
  .notif-chip button{padding:0;border:0;background:none;cursor:pointer;opacity:.65}
  /* Triggered box */
  .trig-box{padding:10px 12px;border-radius:10px;background:rgba(229,57,53,.1);border:1px dashed var(--error-color,#e53935);font-size:12px;font-weight:600;color:var(--error-color,#e53935)}
  /* inputs */
  input[type="text"],input[type="password"],input[type="number"],input[type="search"],select{width:100%;padding:10px 14px;border-radius:10px;border:1px solid color-mix(in srgb,var(--divider-color,#444) 60%,transparent);background:color-mix(in srgb,var(--card-background-color,#1e1e2e) 80%,transparent);color:var(--primary-text-color);font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s;display:block}
  input[type="text"]:focus,input[type="password"]:focus,input[type="number"]:focus,input[type="search"]:focus,select:focus{border-color:var(--primary-color,#03a9f4);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary-color,#03a9f4) 15%,transparent)}
  /* search */
  .search-wrap{display:flex;gap:10px;align-items:center}
  .search-wrap input{flex:1;min-width:0}
  /* ── Dual-panel selector modal ───────────────────────────────────────────────────── */
  #selector-modal .modal{width:min(860px,96vw);max-height:92vh}
  .sel-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;overflow:hidden}
  @media(max-width:600px){.sel-grid{grid-template-columns:1fr}}
  .sel-panel{display:flex;flex-direction:column;gap:8px;overflow:hidden;min-height:0}
  .sel-panel-inner{overflow-y:auto;flex:1;display:grid;gap:4px;align-content:start}
  .sel-actions{display:flex;gap:6px;flex-wrap:wrap;flex-shrink:0}
  .pick-row{display:grid;grid-template-columns:20px 1fr;align-items:start;gap:8px;padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);cursor:pointer;transition:background .12s}
  .pick-row:hover{background:rgba(255,255,255,0.08)}
  .pick-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--primary-color,#03a9f4);margin-top:2px}
  .pick-row-name{font-weight:700;font-size:13px;display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .pick-row-meta{font-size:11px;opacity:0.5;margin-top:2px}
  .sel-right-item{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:10px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.04);font-size:13px}
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
  /* ── Weather Animated Backgrounds ────────────────────────────────── */
  .wx{position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1}
  .wx-sunny{background:linear-gradient(175deg,#0055cc 0%,#1976d2 25%,#42a5f5 55%,#b3e5fc 100%)}
  .wx-partly{background:linear-gradient(175deg,#0d47a1 0%,#1565c0 30%,#5b97cc 60%,#90caf9 100%)}
  .wx-cloudy{background:linear-gradient(175deg,#546e7a 0%,#607d8b 40%,#90a4ae 70%,#b0bec5 100%)}
  .wx-rain{background:linear-gradient(175deg,#1a2e40 0%,#263238 35%,#37474f 65%,#455a64 100%)}
  .wx-storm{background:linear-gradient(175deg,#05080e 0%,#0b1420 40%,#111e30 75%,#1a2a40 100%)}
  .wx-snow{background:linear-gradient(175deg,#455a64 0%,#607d8b 35%,#90a4ae 65%,#cfd8dc 100%)}
  .wx-fog{background:linear-gradient(175deg,#6d8b96 0%,#8faab3 40%,#b0c4cc 70%,#cdd8dc 100%)}
  .wx-night{background:linear-gradient(175deg,#020613 0%,#05103a 30%,#0a1850 60%,#152060 100%)}
  .wx-night-cloudy{background:linear-gradient(175deg,#080810 0%,#0f1020 40%,#181828 70%,#222234 100%)}
  /* sun */
  .wx-sun{position:absolute;top:9%;right:13%;width:64px;height:64px}
  .wx-sun-core{width:100%;height:100%;border-radius:50%;background:radial-gradient(circle at 38% 32%,#fff9e3 5%,#fff176 35%,#fdd835 65%,#fbc02d 85%);box-shadow:0 0 0 7px rgba(255,235,59,.22),0 0 0 16px rgba(255,235,59,.1),0 0 45px 10px rgba(255,210,0,.42);animation:wxSunPulse 4s ease-in-out infinite}
  .wx-sun-rays{position:absolute;inset:-24px;border-radius:50%;background:repeating-conic-gradient(rgba(255,230,60,.18) 0deg 7deg,transparent 7deg 18deg);animation:wxSunRotate 18s linear infinite}
  @keyframes wxSunPulse{0%,100%{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.06);filter:brightness(1.1)}}
  @keyframes wxSunRotate{to{transform:rotate(360deg)}}
  /* clouds */
  .wx-cloud{position:absolute;background:rgba(255,255,255,.85);border-radius:60px}
  .wx-cloud::before,.wx-cloud::after{content:'';position:absolute;background:inherit;border-radius:50%}
  .wx-cloud::before{width:54%;height:160%;top:-64%;left:17%}
  .wx-cloud::after{width:40%;height:130%;top:-50%;right:14%}
  .wx-cloud.gray{background:rgba(118,138,148,.72)}.wx-cloud.gray::before,.wx-cloud.gray::after{background:inherit}
  .wx-cloud.dark{background:rgba(48,62,76,.84)}.wx-cloud.dark::before,.wx-cloud.dark::after{background:inherit}
  .wx-cl1{width:130px;height:42px;top:22%;left:-160px;animation:wxDr1 22s linear infinite}
  .wx-cl2{width:90px;height:30px;top:37%;left:-110px;animation:wxDr2 30s linear infinite 6s}
  .wx-cl3{width:160px;height:50px;top:15%;left:-190px;animation:wxDr1 28s linear infinite 10s}
  .wx-cl4{width:110px;height:36px;top:30%;left:-135px;animation:wxDr2 18s linear infinite 2s}
  @keyframes wxDr1{to{transform:translateX(calc(100vw + 360px))}}
  @keyframes wxDr2{to{transform:translateX(calc(100vw + 300px))}}
  /* raindrops */
  .wx-drop{position:absolute;width:1.5px;background:linear-gradient(to bottom,transparent,rgba(145,200,235,.75));border-radius:1px;animation:wxDropFall linear infinite}
  @keyframes wxDropFall{0%{top:-5%;opacity:0}15%{opacity:1}85%{opacity:.7}100%{top:108%;opacity:0}}
  /* lightning */
  .wx-bolt{position:absolute;top:0;left:44%;width:8px;height:60%;background:rgba(255,255,180,0);clip-path:polygon(42% 0%,78% 0%,52% 44%,82% 44%,22% 100%,48% 52%,12% 52%);animation:wxBolt 7s ease-in-out infinite}
  .wx-flash{position:absolute;inset:0;background:rgba(255,255,255,0);animation:wxFlash 7s ease-in-out infinite;border-radius:inherit}
  @keyframes wxBolt{0%,81%,84%,100%{background:rgba(255,255,180,0)}82%,83%{background:linear-gradient(to bottom,#fff9c4,#ffee58,#fff176)}}
  @keyframes wxFlash{0%,81%,84%,100%{background:rgba(255,255,255,0)}82%,83%{background:rgba(255,255,255,.07)}}
  /* snowflakes */
  .wx-flake{position:absolute;color:rgba(255,255,255,.82);animation:wxFlakeFall linear infinite;user-select:none;pointer-events:none}
  @keyframes wxFlakeFall{0%{top:-8%;opacity:0;transform:translateX(0) rotate(0deg)}10%{opacity:.9}85%{opacity:.65}100%{top:108%;opacity:0;transform:translateX(var(--wx-d,20px)) rotate(540deg)}}
  /* stars */
  .wx-star{position:absolute;background:#fff;border-radius:50%;animation:wxStarBlink ease-in-out infinite;pointer-events:none}
  @keyframes wxStarBlink{0%,100%{opacity:.1;transform:scale(.6)}50%{opacity:1;transform:scale(1.15)}}
  /* moon */
  .wx-moon{position:absolute;top:9%;right:13%;width:48px;height:48px}
  .wx-moon-disc{width:100%;height:100%;border-radius:50%;background:radial-gradient(circle at 37% 32%,#fffde7 0%,#fff9c4 35%,#fff176 65%,#ffee58 85%);box-shadow:0 0 0 3px rgba(255,238,88,.18),0 0 22px 5px rgba(255,238,88,.22),0 0 48px 12px rgba(255,238,88,.1);animation:wxMoonPulse 6s ease-in-out infinite}
  .wx-moon-shadow{position:absolute;top:-4%;left:18%;width:90%;height:90%;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,0) 40%,rgba(8,12,35,.55) 82%)}
  @keyframes wxMoonPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.03);filter:brightness(1.07)}}
  /* fog */
  .wx-fog-strip{position:absolute;width:250%;height:44px;background:linear-gradient(90deg,transparent 5%,rgba(175,200,210,.35) 25%,rgba(192,212,218,.44) 50%,rgba(175,200,210,.35) 75%,transparent 95%);animation:wxFogMove linear infinite alternate;border-radius:50px}
  @keyframes wxFogMove{0%{transform:translateX(-40%)}100%{transform:translateX(10%)}}
  .wx-static{background:linear-gradient(180deg,rgba(22,28,42,.92),rgba(35,44,67,.95))}
  .wx-photo,.wx-collage{background:#10141d}
  .wx-photo::before{content:"";position:absolute;inset:0;background:var(--bg-image) center/cover no-repeat;filter:saturate(1.05) contrast(1.05)}
  .wx-photo::after,.wx-collage::after,.wx-static::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,12,.18),rgba(5,8,12,.5))}
  .wx-collage-grid{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;padding:4px}
  .wx-collage-cell{border-radius:18px;background:center/cover no-repeat;min-height:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}

.sensor-pill {
  display:inline-flex; align-items:center; gap:8px;
  background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12);
  border-radius:14px; padding:10px 14px;
  font-size:13px; color:rgba(255,255,255,0.95);
  backdrop-filter:blur(10px); transition:all 0.2s cubic-bezier(0.4,0,0.2,1);
  font-weight:700; box-shadow:0 4px 12px rgba(0,0,0,0.1);
}
.sensor-pill:hover { background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.3); transform:translateY(-1px); }
.sensor-pill .pill-dot { width:10px; height:10px; border-radius:50%; background:#4caf50; flex-shrink:0; box-shadow:0 0 10px rgba(76,175,80,0.5); }
.sensor-pill .pill-dot.open { background:#ff5252; box-shadow:0 0 10px rgba(255,82,82,0.5); }
.sensor-pill .pill-dot.unavailable { background:#999; }
.sensor-pill button { background:none; border:none; color:#fff; cursor:pointer; opacity:0.5; padding:4px; font-size:14px; transition:opacity 0.2s; }
.sensor-pill button:hover { opacity:1; }

.mode-sensor-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:12px; margin-top:12px; }
.mode-sensor-none { grid-column:1/-1; padding:30px; text-align:center; background:rgba(255,255,255,0.03); border:2px dashed rgba(255,255,255,0.1); border-radius:20px; color:rgba(255,255,255,0.4); font-size:14px; font-weight:600; }
.subsection-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; color:rgba(255,255,255,0.5); display:block; }

</style>

<!-- SOS Confirm Modal -->
<div class="ios-confirm-backdrop" id="sos-modal">
  <div class="ios-confirm-card liquid-glass" id="sos-card">
    <div class="ios-confirm-title">Confirmar pánico</div>
    <div class="ios-confirm-text">Desliza para disparar la alarma inmediatamente.</div>
    <div class="ios-slider-shell">
      <div class="ios-slider-track">
        <div class="ios-slider-label" id="sos-label">Desliza para activar SOS</div>
        <div class="ios-slider-thumb" id="sos-thumb">🚨</div>
      </div>
    </div>
    <button class="ios-confirm-cancel" id="btn-cancel-sos">Cancelar</button>
  </div>
</div>


<div class="wrap">
  <!-- HERO -->
  <div class="glass hero liquid-glass">
    <div class="hero-left">
      <div class="hero-icon">🛡️</div>
      <div>
        <h1>Argus Home Hub</h1>
        <p id="p-hero-desc"></p>
      </div>
    </div>
  </div>

  <!-- TWO-COLUMN LAYOUT -->
  <div class="grid">

    <!-- LEFT COLUMN: Activity & Instances -->
    <div class="stack">
      <!-- Instances -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
          <h2 id="h-instances"></h2>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="global-status"></div>
          </div>
        </div>
        <div id="entries"></div>
      </section>

      <!-- Activity log -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
          <h2 id="h-activity-log"></h2>
          <button class="ghost" id="btn-clear-log" style="font-size:10px;padding:4px 8px;opacity:0.6">BORRAR</button>
        </div>
        <div id="activity-log" style="display:grid;gap:10px;max-height:400px;overflow-y:auto;margin-top:10px"></div>
      </section>
    </div>

    <!-- CENTER COLUMN: Mi Casa & Modes -->
    <div class="stack">
      <!-- Mi Casa Section (Standalone) -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
          <h2>🏡 Mi Casa</h2>
          <button class="ghost" id="btn-edit-home-name-standalone" style="padding:6px 12px;font-size:12px;border-radius:10px;display:flex;align-items:center;gap:6px">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            <span>Editar</span>
          </button>
        </div>
        <div class="micasa-grid">
          <div class="micasa-card">
            <span class="setting-label">Nombre del Hogar</span>
            <div id="lbl-home-name-prominent" style="font-size:22px;font-weight:900;margin-top:4px">Mi Casa</div>
          </div>
          <div class="micasa-card">
            <span class="setting-label">Fondo del Panel</span>
            <select id="bg-mode-select-standalone" style="margin-top:8px"></select>
          </div>
        </div>
        <div class="save-row" style="margin-top:20px">
          <button class="primary" id="btn-save-personalization-standalone" style="width:100%;height:50px;font-size:14px">Guardar Cambios</button>
        </div>
      </section>

      <!-- Modes -->
      <section class="glass panel liquid-glass">
        <div class="panel-head">
           <h2 id="h-modes"></h2>
        </div>
        <div class="tabs" id="mode-tabs" style="margin-bottom:15px"></div>
        <div id="mode-view"></div>
      </section>
    </div>

    <!-- RIGHT COLUMN: Tools & Settings -->
    <div class="stack">
      <!-- Users -->
      <section class="glass panel liquid-glass">
        <h2 id="h-users"></h2>
        <p class="small" id="p-admin-only" style="margin-bottom:14px;color:#fb8c00;font-weight:600"></p>
        <div id="users-list" style="display:grid;gap:12px;margin-bottom:16px"></div>
        <div class="subsection" id="add-user-form">
          <div class="subsection-title" id="t-add-user"></div>
          <div class="field-group"><label id="l-username"></label><input type="text" id="new-user-name" autocomplete="off"></div>
          <div class="field-group"><label id="l-user-pin"></label><input type="password" id="new-user-pin" inputmode="numeric" pattern="[0-9]*"></div>
          <label id="l-is-admin" class="checkbox-label" style="margin-top:10px;display:flex;align-items:center;gap:10px"><input type="checkbox" id="new-user-admin"> <span id="s-is-admin"></span></label>
          <div class="save-row" style="margin-top:15px"><button class="primary" id="btn-save-user" style="width:100%"></button></div>
        </div>
      </section>

      <!-- Automations -->
      <section class="glass panel liquid-glass">
        <h2 id="h-automations"></h2>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <span class="small" id="p-linked-rules" style="opacity:0.7"></span>
          <button class="primary" id="btn-new-auto" style="padding:6px 12px;font-size:11px"></button>
        </div>
        <div id="auto-view"></div>
      </section>

      <!-- Master PIN Settings -->
      <section class="glass panel liquid-glass">
        <h2 id="h-settings-pin">PIN Maestro</h2>
        <div class="subsection">
          <p class="small" style="margin-bottom:12px;opacity:0.7">Control de acceso global para desactivar y cambiar ajustes.</p>
          <div id="current-pin-display" style="font-size:13px;font-weight:800;color:var(--primary-color);margin-bottom:15px;background:rgba(3,169,244,0.1);padding:8px 12px;border-radius:10px;display:inline-block"></div>
          
          <div class="field-group" id="group-current-pin" style="display:none; margin-bottom:12px">
             <label>PIN Actual</label>
             <input type="password" id="current-pin" inputmode="numeric" pattern="[0-9]*">
          </div>

          <p class="small" style="margin:0 0 10px 0; color:var(--primary-color); font-weight:700">Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.</p>

          <div style="display:grid;gap:10px">
            <div class="field-group"><label id="l-new-pin"></label><input type="password" id="new-pin-1" inputmode="numeric" pattern="[0-9]*" placeholder="••••"></div>
            <div class="field-group"><label id="l-confirm-pin"></label><input type="password" id="new-pin-2" inputmode="numeric" pattern="[0-9]*"></div>
          </div>
          <div class="save-row" style="margin-top:15px">
            <button class="primary" id="btn-save-pin" style="width:100%"></button>
          </div>
        </div>
      </section>

      <!-- Notifications -->
      <section class="glass panel liquid-glass">
        <h2 id="h-notifications"></h2>
        <p class="small" id="p-notif-desc" style="margin-bottom:12px;opacity:0.7"></p>
        <div class="subsection">
          <div class="subsection-title">Dispositivos Vinculados</div>
          <div id="notif-targets" class="chip-list" style="margin-bottom:12px"></div>
          <div style="display:flex;gap:10px">
            <select id="notif-select" style="flex:1"></select>
            <button class="ghost" id="btn-add-notif" style="white-space:nowrap;padding:0 15px">+ Añadir</button>
          </div>
        </div>
        <div class="save-row" style="margin-top:20px"><button class="primary" id="btn-save-notif" style="width:100%"></button></div>
      </section>

      <!-- Backup & Restore -->
      <section class="glass panel liquid-glass">
        <h2>Respaldo y Restauración</h2>
        <p class="small" style="margin-bottom:12px;opacity:0.7">Guarda una copia de seguridad de tus ajustes o restaura una anterior.</p>
        <div style="display:grid;gap:10px">
          <button class="ghost" id="btn-export-config">📤 Descargar Copia de Seguridad</button>
          <div style="position:relative">
            <button class="ghost" style="width:100%" id="btn-import-trigger">📥 Restaurar desde Archivo</button>
            <input type="file" id="import-config-file" style="display:none" accept=".json">
          </div>
        </div>
      </section>

      <!-- Advanced -->
      <section class="glass panel liquid-glass" id="homekit-section" style="display:none">
        <h2 id="h-homekit"></h2>
        <div id="homekit-content"></div>
      </section>
    </div>

  </div> <!-- /grid -->
</div>

<!-- Selector modal (dual-panel) -->
<div class="modal-back" id="selector-modal" aria-hidden="true">
  <div class="modal">
    <div class="modal-head">
      <h3 id="selector-title">Seleccionar</h3>
      <button class="ghost" id="selector-close"></button>
    </div>
    <div class="modal-body" style="overflow:hidden;display:flex;flex-direction:column;gap:10px">
      <div class="sel-grid">
        <!-- LEFT: lista disponible con búsqueda y acciones rápidas -->
        <div class="sel-panel">
          <div class="subsection-title" id="l-available">Disponibles</div>
          <div class="search-wrap" style="margin:0"><input id="selector-search" type="search" placeholder="Buscar..."></div>
          <div class="sel-actions">
            <button class="ghost" id="selector-select-all" style="padding:5px 10px;font-size:12px">☑ Todos</button>
            <button class="ghost" id="selector-deselect-all" style="padding:5px 10px;font-size:12px">☐ Ninguno</button>
          </div>
          <div class="sel-panel-inner" id="selector-list"></div>
        </div>
        <!-- RIGHT: panel de seleccionados -->
        <div class="sel-panel">
          <div class="subsection-title" id="l-selected-lbl">Seleccionados</div>
          <div class="small" id="selector-count" style="margin-bottom:4px">0 seleccionados</div>
          <div class="sel-panel-inner" id="selector-selected"></div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <div style="display:flex;gap:10px;width:100%;justify-content:flex-end">
        <button class="ghost" id="selector-clear"></button>
        <button class="primary" id="selector-accept"></button>
      </div>
    </div>
  </div>
</div>

<!-- Home name edit modal -->
<div class="modal-back" id="home-name-modal" aria-hidden="true">
  <div class="modal" style="width:min(400px,96vw)">
    <div class="modal-head">
      <h3>🏡 Nombre del Hogar</h3>
      <button class="ghost" id="home-name-modal-close">✕</button>
    </div>
    <div style="display:grid;gap:14px;padding:4px 0">
      <p class="small" style="margin:0;opacity:.7">Este nombre aparece en el panel de instancias y en pantalla completa.</p>
      <div class="field-group">
        <label>Nombre del Hogar</label>
        <input type="text" id="home-name-input" placeholder="Mi Casa" maxlength="60" autocomplete="off" style="font-size:15px">
      </div>
      <span class="status" id="home-name-status" style="text-align:center"></span>
    </div>
    <div class="modal-footer">
      <button class="ghost" id="home-name-cancel">Cancelar</button>
      <button class="primary" id="home-name-save">Guardar</button>
    </div>
  </div>
</div>

<!-- PIN modal -->
<div class="modal-back pm" id="pin-modal" aria-hidden="true">
  <div class="modal">
    <div class="modal-head"><h3 id="l-introduce-pin">🔒</h3><button class="ghost" id="pin-close">✕</button></div>
    <div style="display:grid;gap:10px">
      <p id="l-pin-modal-desc" class="small" style="text-align:center;margin:0"></p>
      <input id="pin-input" class="pin-input" type="password" inputmode="numeric" pattern="[0-9]*" placeholder="••••" autocomplete="off" maxlength="8">
      <div class="pin-pad" id="pin-pad">
        <button class="pin-key" type="button" data-pin-digit="1">1</button>
        <button class="pin-key" type="button" data-pin-digit="2">2</button>
        <button class="pin-key" type="button" data-pin-digit="3">3</button>
        <button class="pin-key" type="button" data-pin-digit="4">4</button>
        <button class="pin-key" type="button" data-pin-digit="5">5</button>
        <button class="pin-key" type="button" data-pin-digit="6">6</button>
        <button class="pin-key" type="button" data-pin-digit="7">7</button>
        <button class="pin-key" type="button" data-pin-digit="8">8</button>
        <button class="pin-key" type="button" data-pin-digit="9">9</button>
        <span class="pin-pad-spacer" aria-hidden="true"></span>
        <button class="pin-key" type="button" data-pin-digit="0">0</button>
        <button class="pin-key action" type="button" id="pin-backspace">⌫</button>
      </div>
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
    this._showSosConfirm = false;
    this._sosSliding = false;
    this._sosStartX = 0;
    this._sosOffsetX = 0;
    this._sosConfirmed = false;

    this.attachShadow({ mode: 'open' }).appendChild(_tmpl.content.cloneNode(true));
    this._wsId = 1; this._socket = null; this._dashboard = null;
    this._ui = null; this._available = []; this._mode = 'home'; this._modeEntryId = null;
    this._selected = []; this._selectorTarget = null;
    this._hass = null; this._prevStates = {};
    this._notifTargets = []; // list of notify service_ids selected
    this._users = [];        // [{name, pin, is_admin}]
    this._isAdmin = true;    // determined from hass user
    this._pinCallback = null;
    this._homeName = '';     // custom home name, editable with PIN
    this._backgroundMode = 'weather';
    this._backgroundImages = [];
    this._temperatureSource = 'auto';
    this._pending = {};
    this._lastClockUpdate = 0;
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    if (!this._dashboard?.entries?.length) return;

    // Trigger render if any of these change:
    // 1. Alarm states
    // 2. Temperature sensor state
    // 3. Clock (roughly every minute)
    // 4. Weather state
    
    const now = Date.now();
    // Clock is now handled by a dedicated interval for better accuracy
    const clockChanged = false; 

    const alarmChanged = this._dashboard.entries.some(
      e => e.entity_id && oldHass?.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state
    );

    const tempEntity = this._temperatureSource === 'auto' ? null : this._temperatureSource;
    const tempChanged = tempEntity && oldHass?.states[tempEntity]?.state !== hass.states[tempEntity]?.state;
    
    const weatherEnt = Object.values(hass.states).find(s => s.entity_id.startsWith('weather.'))?.entity_id;
    const weatherChanged = weatherEnt && oldHass?.states[weatherEnt]?.state !== hass.states[weatherEnt]?.state;

    if (alarmChanged || tempChanged || clockChanged || weatherChanged || !oldHass) {
      this._renderEntries();
      this._renderActivityLog();
      // Only re-render setup views if they are visible or if it's the first load
      if (!oldHass) {
        this._renderModeTabs();
        this._renderModeView();
        this._renderAutomations();
        this._renderNotifications();
        this._renderUsers();
        this._renderHomeKit();
      }
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
  connectedCallback() { 
    this._init(); 
    this._startClock();
  }
  disconnectedCallback() {
    if (this._clockInterval) clearInterval(this._clockInterval);
  }

  _startClock() {
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() === 0 || !this._lastClockUpdate) {
         this._lastClockUpdate = Date.now();
         this._renderEntries();
      }
    }, 1000);
  }

  _bindSOS() {
    const thumb = this.shadowRoot.getElementById('sos-thumb');
    const track = thumb && thumb.closest('.ios-slider-track');
    if (!thumb || !track) return;

    let sliding = false, startX = 0, offsetX = 0;
    const maxSlide = () => Math.max(1, track.offsetWidth - thumb.offsetWidth - 12);

    const onPointerDown = (e) => {
      sliding = true;
      startX = e.clientX - offsetX;
      thumb.setPointerCapture(e.pointerId);
      thumb.style.transition = 'none';
      thumb.style.cursor = 'grabbing';
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!sliding) return;
      offsetX = Math.max(0, Math.min(e.clientX - startX, maxSlide()));
      thumb.style.left = (6 + offsetX) + 'px';
      const pct = offsetX / maxSlide();
      track.style.background = 'rgba(217,4,41,' + (0.15 + pct * 0.55) + ')';
      if (pct >= 0.98) finalize(true);
    };

    const onPointerUp = (e) => {
      if (!sliding) return;
      finalize(false);
    };

    const finalize = (confirmed) => {
      sliding = false;
      thumb.style.transition = 'all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      thumb.style.cursor = 'grab';
      if (confirmed) {
        this._triggerSOS();
        offsetX = 0;
        setTimeout(() => {
          thumb.style.left = '6px';
          track.style.background = 'rgba(217,4,41,0.15)';
        }, 600);
      } else {
        offsetX = 0;
        thumb.style.left = '6px';
        track.style.background = 'rgba(217,4,41,0.15)';
      }
    };

    thumb.addEventListener('pointerdown', onPointerDown);
    thumb.addEventListener('pointermove', onPointerMove);
    thumb.addEventListener('pointerup', onPointerUp);
    thumb.addEventListener('pointercancel', onPointerUp);
  }

  async _init() {
    this._mode = 'disarmed';
    this._bindStatic();
    try {
      await this._connect();
    } catch (e) {
      console.error('Argus WS connect failed:', e);
    }
    this._applyTranslations();
    await this._load();
    this.shadowRoot.getElementById('btn-clear-log')?.addEventListener('click', () => this._clearHistory());
    this.shadowRoot.getElementById('btn-export-config')?.addEventListener('click', () => this._exportConfig());
    this.shadowRoot.getElementById('btn-import-trigger')?.addEventListener('click', () => this.shadowRoot.getElementById('import-config-file').click());
    this.shadowRoot.getElementById('import-config-file')?.addEventListener('change', (ev) => this._importConfig(ev));

    this.shadowRoot.getElementById('btn-save-personalization-standalone')?.addEventListener('click', () => this._savePersonalization());
  }

  async _clearHistory() {
    if (!confirm('¿Seguro que quieres borrar todo el historial?')) return;
    try {
      await this._send('argus/clear_activity_log');
      this._renderActivityLog();
    } catch (err) { alert(err.message); }
  }

  _exportConfig() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this._ui, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `argus_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  _importConfig(event) {
    const file = event.target.files[0];
    if (!file) return;
    event.target.value = ''; // Fix #3 - permite reimportar el mismo archivo
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const config = JSON.parse(e.target.result);
        if (typeof config !== 'object' || config === null)
          throw new Error('Archivo de configuración no válido.');
        await this._send('argus/restore_config', { config });
        alert('Configuración restaurada con éxito. Recargando...');
        window.location.reload();
      } catch (err) {
        alert('Error al importar: ' + err.message);
      }
    };
    reader.onerror = () => alert('No se pudo leer el archivo.');
    reader.readAsText(file);
  }

  _bindStatic() {
    const s = id => this.shadowRoot.getElementById(id);
    s('selector-close').addEventListener('click', () => this._closeModal());
    s('selector-accept').addEventListener('click', () => this._acceptSelection());
    s('selector-clear').addEventListener('click', () => { this._selected = []; this._renderSelector(); });
    s('selector-search').addEventListener('input', () => this._renderSelector());
    s('selector-modal').addEventListener('click', e => { if (e.target.id === 'selector-modal') this._closeModal(); });
    s('selector-select-all').addEventListener('click', () => this._selectAll());
    s('selector-deselect-all').addEventListener('click', () => { this._selected = []; this._renderSelector(); });

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
    this.shadowRoot.querySelectorAll('[data-pin-digit]').forEach(btn =>
      btn.addEventListener('click', () => this._appendPinDigit(btn.dataset.pinDigit))
    );
    s('pin-backspace').addEventListener('click', () => this._backspacePin());

    s('btn-add-notif').addEventListener('click', () => this._addNotifTarget());
    s('btn-save-notif').addEventListener('click', () => this._saveNotifications());
    s('btn-save-user').addEventListener('click', () => this._saveUser());

    // Home name edit (requires PIN)
    s('btn-edit-home-name-standalone')?.addEventListener('click', () => this._editHomeName());
    s('home-name-modal-close').addEventListener('click', () => this._closeHomeNameModal());
    s('home-name-cancel').addEventListener('click', () => this._closeHomeNameModal());
    s('home-name-modal').addEventListener('click', e => { if (e.target.id === 'home-name-modal') this._closeHomeNameModal(); });
    s('home-name-save').addEventListener('click', () => this._saveHomeName());
    s('home-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._saveHomeName(); });
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
    this._homeName = dashboard.ui?.home_name || '';
    this._backgroundMode = dashboard.ui?.background_mode || 'weather';
    this._backgroundImages = dashboard.ui?.background_images || [];
    this._temperatureSource = dashboard.ui?.temperature_source || 'auto';
    
    this._updateHomeNameDisplay();

    this._populateTemperatureSources();
    const tempSel = this.shadowRoot.getElementById('temp-source-select-standalone');
    if (tempSel) tempSel.value = this._temperatureSource || 'auto';
    const bgMode = this.shadowRoot.getElementById('bg-mode-select-standalone');
    if (bgMode) {
      bgMode.innerHTML = `
        <option value="weather">Clima animado</option>
        <option value="none">Sin animación</option>
        <option value="photo">Una foto</option>
        <option value="collage">Collage</option>
      `;
      bgMode.value = this._backgroundMode || 'weather';
    }

    // Admin flag: use the HA user's own admin status
    this._isAdmin = this._hass?.user ? Boolean(this._hass.user.is_admin || this._hass.user.is_owner) : true;
    if (!this._modeEntryId) this._modeEntryId = dashboard.entries?.[0]?.entity_id || null;

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

  _renderBatteryAlerts() {
    if (!this._hass?.states) return '';
    const states = this._hass.states;
    const lowBatteries = Object.values(states).filter((st) => {
      const isBattery = st.entity_id?.endsWith('_battery') || st.attributes?.device_class === 'battery';
      if (!isBattery || st.state === 'unknown' || st.state === 'unavailable') return false;
      const level = Number(st.state);
      return !Number.isNaN(level) && level <= 20;
    });
    if (!lowBatteries.length) return '';
    const rows = lowBatteries.map(b => `<div class="battery-alert">⚠️ Batería baja: ${b.attributes.friendly_name || b.entity_id} (${b.state}%)</div>`).join('');
    return `<div class="battery-alerts-container" style="margin-top: 10px;">${rows}</div>`;
  }

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

    // Weather
    const weatherEnt = Object.values(this._hass?.states || {}).find(s => s.entity_id.startsWith('weather.')) || { state: 'sunny' };
    const weatherState = weatherEnt.state || 'sunny';
    const isNight = this._hass.states['sun.sun']?.state === 'below_horizon';

    // Time
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    el.innerHTML = entries.map((e, idx) => {
      const live  = this._hass?.states[e.entity_id]?.state;
      const state = live || e.state || 'unavailable';
      const triggered = state === 'triggered';
      const fullHudLoc = this._homeNameProminent || this._hass?.config?.location_name || 'Hogar';

      // Icon Selection
      let svgName = 'mode_disarmed.svg';
      if (state === 'armed_home') svgName = 'mode_home.svg';
      else if (state === 'armed_away') svgName = 'mode_away.svg';
      else if (state === 'armed_night') svgName = 'mode_night.svg';
      else if (state === 'armed_vacation') svgName = 'mode_vacation.svg';

      return `
        <article class="entry" style="${triggered ? 'border:3px solid #ff5252;box-shadow:0 0 30px rgba(255,82,82,.4)' : ''}">
          ${this._renderEntryBackground(weatherState, isNight)}

          <button class="ghost fs-btn entry-fs" data-fullscreen="${idx}" title="Pantalla completa" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>

          ${this._renderBatteryAlerts()}
          <div class="hud">
            <div class="hud-loc">${fullHudLoc}</div>
            <div class="hud-data">
                <span>${timeStr}</span>
            </div>
          </div>

          <div class="entry-content">
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${state==='armed_home'?'active':''}" data-idx="${idx}" data-action="home">🏠 EN CASA</button>
              <button class="liquid-btn btn-away ${state==='armed_away'?'active':''}" data-idx="${idx}" data-action="away">🔒 AUSENTE</button>
              <button class="liquid-btn btn-night ${state==='armed_night'?'active':''}" data-idx="${idx}" data-action="night">🌙 NOCHE</button>
              <button class="liquid-btn btn-vacation ${state==='armed_vacation'?'active':''}" data-idx="${idx}" data-action="vacation">✈️ VACACIONES</button>
              <button class="liquid-btn btn-disarm ${state==='disarmed'?'active':''}" data-idx="${idx}" data-action="disarm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg> <span>DESARMADO</span></button>
              <button class="btn-sos" data-action="sos">🚨 SOS / PÁNICO</button>
            </div>

            <div class="entry-icon">
              ${triggered ? '<div style="font-size:100px;filter:drop-shadow(0 0 30px #f00)">🚨</div>' : `<img src="/api/argus_static/${svgName}?v=1.0.0">`}
            </div>
          </div>
        </article>`;
    }).join('');

    el.querySelectorAll('button[data-action]').forEach(btn =>
      btn.addEventListener('click', ev => this._handleAction(ev.currentTarget.dataset.idx, ev.currentTarget.dataset.action))
    );
    
    el.querySelectorAll('button[data-action="sos"]').forEach(btn =>
      btn.addEventListener('click', () => {
        const sosModal = this.shadowRoot.getElementById('sos-modal');
        if (sosModal) sosModal.classList.add('open');
      })
    );
    el.querySelectorAll('button[data-fullscreen]').forEach(btn =>
      btn.addEventListener('click', ev => this._toggleFullscreen(ev.currentTarget.closest('.entry')))
    );
  }

  _toggleFullscreen(targetEl) {
    const target = targetEl || this.shadowRoot.querySelector('.entry');
    if (!document.fullscreenElement) {
      (target || this).requestFullscreen().catch(err => {
        alert(`Error al activar pantalla completa: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _getWeatherBg(ws, isNight) {
    const has = s => ws.includes(s);
    if (has('pouring') || has('rain') || has('drizzle') || has('shower')) return this._bgRain(false);
    if (has('thunder') || has('lightning') || has('storm'))               return this._bgRain(true);
    if (has('snow') || has('hail') || has('sleet') || has('blizzard'))   return this._bgSnow();
    if (has('fog') || has('mist') || has('hazy'))                         return this._bgFog(isNight);
    if ((has('cloud') || has('overcast')) && isNight)                     return this._bgNightCloudy(true);
    if (has('cloud') || has('overcast'))                                  return this._bgCloudy(has('partly'));
    if (isNight && (has('clear') || has('sunny')))                        return this._bgNightStarry();
    if (isNight)                                                           return this._bgNightCloudy(false);
    if (has('partly'))                                                     return this._bgPartlyCloudy();
    return this._bgSunny();
  }

  _bgSunny() {
    return `<div class="wx wx-sunny">
      <div class="wx-sun"><div class="wx-sun-rays"></div><div class="wx-sun-core"></div></div>
      <div class="wx-cloud wx-cl1"></div><div class="wx-cloud wx-cl2"></div>
    </div>`;
  }

  _bgPartlyCloudy() {
    return `<div class="wx wx-partly">
      <div class="wx-sun" style="opacity:.85"><div class="wx-sun-rays"></div><div class="wx-sun-core"></div></div>
      <div class="wx-cloud wx-cl1"></div><div class="wx-cloud wx-cl2"></div>
      <div class="wx-cloud wx-cl3"></div><div class="wx-cloud wx-cl4"></div>
    </div>`;
  }

  _bgCloudy(isPartly) {
    const sun = isPartly ? `<div class="wx-sun" style="opacity:.35"><div class="wx-sun-rays"></div><div class="wx-sun-core"></div></div>` : '';
    return `<div class="wx wx-cloudy">${sun}
      <div class="wx-cloud gray wx-cl1"></div><div class="wx-cloud gray wx-cl2"></div>
      <div class="wx-cloud gray wx-cl3"></div><div class="wx-cloud gray wx-cl4"></div>
    </div>`;
  }

  _bgRain(hasLightning) {
    const drops = Array.from({length: 48}, (_, i) => {
      const l  = ((i * 211 + 13) % 97).toFixed(1);
      const dd = -((i * 0.09 + (i % 7) * 0.35) % 3.5).toFixed(2);
      const dur = (0.48 + (i % 6) * 0.09).toFixed(2);
      const h   = 10 + (i % 6) * 4;
      return `<div class="wx-drop" style="left:${l}%;height:${h}px;animation-duration:${dur}s;animation-delay:${dd}s"></div>`;
    }).join('');
    return `<div class="wx ${hasLightning ? 'wx-storm' : 'wx-rain'}">
      <div class="wx-cloud dark wx-cl1"></div><div class="wx-cloud dark wx-cl3"></div>
      ${hasLightning ? '<div class="wx-bolt"></div><div class="wx-flash"></div>' : ''}
      ${drops}
    </div>`;
  }

  _bgSnow() {
    const chars = ['❄','❅','❆','∗','✶','•'];
    const flakes = Array.from({length: 28}, (_, i) => {
      const l   = ((i * 353 + 11) % 94).toFixed(1);
      const dd  = -((i * 0.28 + (i % 5) * 0.6) % 5).toFixed(2);
      const dur = (3.2 + (i % 6) * 0.6).toFixed(1);
      const d   = (((i % 9) - 4) * 14);
      const sz  = 10 + (i % 5) * 3;
      return `<div class="wx-flake" style="left:${l}%;animation-duration:${dur}s;animation-delay:${dd}s;--wx-d:${d}px;font-size:${sz}px">${chars[i%6]}</div>`;
    }).join('');
    return `<div class="wx wx-snow">
      <div class="wx-cloud gray wx-cl1"></div><div class="wx-cloud gray wx-cl3"></div>
      ${flakes}
    </div>`;
  }

  _bgFog(isNight) {
    const strips = Array.from({length: 4}, (_, i) =>
      `<div class="wx-fog-strip" style="top:${18+i*18}%;animation-duration:${11+i*5}s;animation-delay:-${i*3}s;opacity:${.5+i*.12}"></div>`
    ).join('');
    return `<div class="wx ${isNight ? 'wx-night-cloudy' : 'wx-fog'}">
      ${strips}
      ${isNight ? '<div class="wx-moon" style="opacity:.45"><div class="wx-moon-disc"></div><div class="wx-moon-shadow"></div></div>' : ''}
    </div>`;
  }

  _bgNightStarry() {
    const stars = Array.from({length: 60}, (_, i) => {
      const x   = ((i * 181 + 17) % 96).toFixed(1);
      const y   = ((i * 97  + 7)  % 72).toFixed(1);
      const s   = (.7 + (i % 4) * .65).toFixed(1);
      const dd  = -((i * 0.13) % 5.5).toFixed(2);
      const dur = (1.8 + (i % 6) * .45).toFixed(1);
      return `<div class="wx-star" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-duration:${dur}s;animation-delay:${dd}s"></div>`;
    }).join('');
    return `<div class="wx wx-night">${stars}
      <div class="wx-moon"><div class="wx-moon-disc"></div><div class="wx-moon-shadow"></div></div>
    </div>`;
  }

  _bgNightCloudy(hasMoon = true) {
    const stars = Array.from({length: 18}, (_, i) => {
      const x   = ((i * 53 + 9) % 85).toFixed(1);
      const y   = ((i * 41 + 5) % 48).toFixed(1);
      const s   = (.6 + (i % 3) * .5).toFixed(1);
      const dd  = -((i * 0.2) % 5).toFixed(2);
      const dur = (2.5 + (i % 5) * .6).toFixed(1);
      return `<div class="wx-star" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-duration:${dur}s;animation-delay:${dd}s;opacity:.25"></div>`;
    }).join('');
    return `<div class="wx wx-night-cloudy">${stars}
      ${hasMoon ? '<div class="wx-moon" style="opacity:.5"><div class="wx-moon-disc"></div><div class="wx-moon-shadow"></div></div>' : ''}
      <div class="wx-cloud dark wx-cl1" style="opacity:.75"></div>
      <div class="wx-cloud dark wx-cl2" style="opacity:.85"></div>
      <div class="wx-cloud dark wx-cl3" style="opacity:.65"></div>
    </div>`;
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
      if (user && user !== 'Argus' && user !== 'system') {
        source = `👤 ${user}`;
      } else if (action.toLowerCase().includes('homekit') || detail.toLowerCase().includes('homekit')) {
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
    const modes = ['disarmed', 'home', 'away', 'night', 'vacation'];
    const icons = { disarmed:'🔓', home:'🏠', away:'🔴', night:'🌙', vacation:'✈️' };
    const lbls  = {
      disarmed: this._t('disarmed'),
      home:     this._t('mode_home'),
      away:     this._t('mode_away'),
      night:    this._t('mode_night'),
      vacation: this._t('mode_vacation'),
    };
    tabs.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px">${modes.map(m => `
      <button type="button" data-mode="${m}" style="padding:10px 14px;border-radius:12px;font-weight:800;border:1px solid ${m===this._mode ? 'rgba(3,169,244,.65)' : 'rgba(255,255,255,.12)'};background:${m===this._mode ? 'rgba(3,169,244,.18)' : 'rgba(255,255,255,.04)'};color:inherit">${icons[m]} ${lbls[m]}</button>`).join('')}</div>`;
    tabs.querySelectorAll('[data-mode]').forEach(t => t.addEventListener('click', () => {
      this._mode = t.dataset.mode; this._renderModeTabs(); this._renderModeView();
    }));
  }

  _currentModeConfig() {
    const emptyCfg = { 
      sensors: [], bypassed_sensors: [], sirens: [], 
      require_closed: false, arming_time: null, entry_delay: null, 
      mqtt_enabled: null, entry_sensors: [] 
    };
    if (!this._ui) return { ...emptyCfg };
    this._ui.modes = this._ui.modes || {};
    this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
    const entityId = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
    this._modeEntryId = entityId;
    this._mode = this._mode || 'disarmed';
    
    this._ui.modes.__by_entity__[entityId] = this._ui.modes.__by_entity__[entityId] || {};
    
    // Migration/Ensure valid
    if (!this._ui.modes.__by_entity__[entityId][this._mode]) {
        const legacy = this._ui.modes[this._mode] || emptyCfg;
        this._ui.modes.__by_entity__[entityId][this._mode] = { ...emptyCfg, ...legacy };
    }
    
    const cfg = this._ui.modes.__by_entity__[entityId][this._mode];
    return { ...emptyCfg, ...cfg };
  }

  _toggleEntrySensor(entityId) {
    if (!this._isAdmin) return;
    const cfg = this._currentModeConfig();
    const list = Array.isArray(cfg.entry_sensors) ? [...cfg.entry_sensors] : [];
    if (list.includes(entityId)) {
      cfg.entry_sensors = list.filter(v => v !== entityId);
    } else {
      cfg.entry_sensors = [...list, entityId];
    }
    this._renderModeView();
  }

  _renderModeView() {
    const cfg = this._currentModeConfig();
    const sensors = cfg.sensors || [];
    const bypass  = cfg.bypassed_sensors || [];
    const sirens  = cfg.sirens  || [];
    const el = this.shadowRoot.getElementById('mode-view');
    const readonly = !this._isAdmin;
    const entries = this._dashboard?.entries || [];
    const activeEntityId = this._modeEntryId || entries[0]?.entity_id || '';

    const instanceBlock = entries.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">📍 Instancia de Alarma</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${entries.map(e => `<option value="${e.entity_id}" ${e.entity_id===activeEntityId ? 'selected' : ''}>${e.title || e.entity_id}</option>`).join('')}</select>
        </div>` : '';

    el.innerHTML = `
      <div class="mode-grid-layout">
        ${instanceBlock}

        <div class="mode-section-card">
          <div class="mode-section-title">🛡️ Sensores de Activación</div>
          <div class="mode-sensor-grid" id="sensor-chips">
            ${sensors.map(x => this._chip(x, 'sensor')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `
            <button class="ghost" data-open-selector="sensor" style="margin-top:16px; width:100%; justify-content:center">+ Seleccionar Sensores</button>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:12px;margin-top:16px;padding:12px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.05)">
              <input type="checkbox" id="mode-require-closed" ${cfg.require_closed ? 'checked' : ''}>
              <span style="font-size:13px;font-weight:700">Bloquear armado si hay sensores abiertos</span>
            </label>
          `}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">🚫 Sensores para Omitir</div>
          <div class="mode-sensor-grid" id="bypass-chips">
            ${bypass.map(x => this._chip(x, 'bypass')).join('') || `<div class="mode-sensor-none">No hay sensores omitidos</div>`}
          </div>
          ${readonly ? '' : `<button class="ghost" data-open-selector="bypass" style="margin-top:16px; width:100%; justify-content:center">+ Añadir Sensor para Ignorar</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 Sirenas</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${sirens.map(x => this._chip(x, 'siren')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `<button class="ghost" data-open-selector="siren" style="margin-top:16px; width:100%; justify-content:center">+ Seleccionar Sirenas</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">⌨️ Tiempos y MQTT</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
            <div class="input-group">
              <span class="input-label">Retraso Armado (s)</span>
              <input type="number" id="mode-arming-time" value="${cfg.arming_time ?? ''}" placeholder="Defecto" style="padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit">
            </div>
            <div class="input-group">
              <span class="input-label">Retraso Entrada (s)</span>
              <input type="number" id="mode-entry-delay" value="${cfg.entry_delay ?? ''}" placeholder="Defecto" style="padding:10px; border-radius:10px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit">
            </div>
          </div>
          <label class="checkbox-label" style="display:flex;align-items:center;gap:12px;margin-top:16px;padding:12px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.05)">
            <input type="checkbox" id="mode-mqtt-enabled" ${cfg.mqtt_enabled !== false ? 'checked' : ''}>
            <span style="font-size:13px;font-weight:700">Habilitar MQTT para este modo</span>
          </label>
        </div>

        ${readonly ? '' : `<button class="primary" id="save-mode" style="width:100%;height:54px;font-size:15px;box-shadow:0 10px 25px rgba(0,0,0,0.2)">GUARDAR CONFIGURACIÓN</button>`}
      </div>
    `;

    el.querySelector('#mode-instance-select')?.addEventListener('change', ev => {
      this._modeEntryId = ev.target.value;
      this._renderModeView();
    });
    if (!readonly) {
      el.querySelectorAll('[data-open-selector]').forEach(btn =>
        btn.addEventListener('click', () => this._openModal(btn.dataset.openSelector))
      );
      el.querySelectorAll('[data-remove]').forEach(btn =>
        btn.addEventListener('click', () => this._removeChip(btn.dataset.remove))
      );
      el.querySelectorAll('[data-toggle-delay]').forEach(btn =>
        btn.addEventListener('click', () => this._toggleEntrySensor(btn.dataset.toggleDelay))
      );
      el.querySelector('#save-mode')?.addEventListener('click', () => this._saveMode());
    }
  }

  _chip(entityId, type) {
    const raw = this._hass?.states?.[entityId]?.state;
    const isTr = ['on', 'unlocked', 'open', 'recording', 'active', 'motion'].includes(raw);
    const cfg = this._currentModeConfig();
    const isEntry = (cfg.entry_sensors || []).includes(entityId);
    const name = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
    const readonly = !this._isAdmin;

    const dot = type === 'sensor' || type === 'bypass'
      ? `<span class="pill-dot ${isTr ? 'open' : ''}" title="${raw}"></span>`
      : '';
    
    const delayIcon = type === 'sensor' ? `
      <button class="icon-btn ${isEntry ? 'active' : ''}" data-toggle-delay="${entityId}" title="Retraso de entrada (⏳) o Instantáneo (⚡)">
        ${isEntry ? '⏳' : '⚡'}
      </button>` : '';

    return `
      <span class="sensor-pill">
        ${dot}
        <span style="flex:1">${name}</span>
        ${delayIcon}
        ${readonly ? '' : `<button data-remove="${type}:${entityId}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer">✕</button>`}
      </span>
    `;
  }

  _removeChip(value) {
    if (!this._isAdmin) return;
    const [type, entityId] = value.split(':');
    const cfg = this._currentModeConfig();
    const key = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : 'sirens');
    this._ui.modes[this._mode] = { ...cfg, [key]: (cfg[key] || []).filter(v => v !== entityId) };
    this._renderModeView();
  }

  async _saveMode() {
    const cfg = this._currentModeConfig();
    const chk = this.shadowRoot.getElementById('mode-require-closed');
    const armTime = this.shadowRoot.getElementById('mode-arming-time');
    const entDelay = this.shadowRoot.getElementById('mode-entry-delay');
    const mqttChk = this.shadowRoot.getElementById('mode-mqtt-enabled');

    if (chk) cfg.require_closed = chk.checked;
    if (armTime) cfg.arming_time = armTime.value ? parseInt(armTime.value) : null;
    if (entDelay) cfg.entry_delay = entDelay.value ? parseInt(entDelay.value) : null;
    if (mqttChk) cfg.mqtt_enabled = mqttChk.checked;
    
    const status = this.shadowRoot.getElementById('mode-status');
    try {
      await this._send('argus/save_mode_config', { entity_id: this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || '', mode: this._mode, config: cfg });
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

  _populateTemperatureSources() {
    const sel = this.shadowRoot.getElementById('temp-source-select-standalone');
    if (!sel || !this._hass) return;
    const extra = [{ entity_id: 'auto', name: 'Automático (sensor local / termostato / clima)' }];
    for (const s of Object.values(this._hass.states || {})) {
      const id = s.entity_id || ''; const a = s.attributes || {};
      if (id.startsWith('climate.') && typeof a.current_temperature === 'number') { extra.push({ entity_id:id, name:`🌡️ ${a.friendly_name || id} (termostato)` }); continue; }
      if (!id.startsWith('sensor.')) continue;
      const dc = String(a.device_class || '').toLowerCase(); const u = String(a.unit_of_measurement || a.native_unit_of_measurement || '').toLowerCase(); const v = Number(s.state);
      if (Number.isFinite(v) && (dc === 'temperature' || ['°c','°f','c','f'].includes(u))) extra.push({ entity_id:id, name:`🌡️ ${a.friendly_name || id}` });
    }
    const seen = new Set();
    sel.innerHTML = extra.filter(x => !seen.has(x.entity_id) && seen.add(x.entity_id) === undefined).map(x => `<option value="${x.entity_id}">${x.name}</option>`).join('');
  }

  async _handleBackgroundFiles(ev) {
    const files = Array.from(ev?.target?.files || []).slice(0, 4); if (!files.length) return;
    const read = f => new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(String(r.result || '')); r.onerror = bad; r.readAsDataURL(f); });
    this._backgroundImages = (await Promise.all(files.map(read))).filter(Boolean);
    const help = this.shadowRoot.getElementById('bg-file-help'); if (help) help.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`;
  }

  _renderEntryBackground(ws, isNight) {
    const mode = this._backgroundMode || 'weather', imgs = this._backgroundImages || [];
    if (mode === 'none') return `<div class="wx wx-static"></div>`;
    if (mode === 'photo' && imgs[0]) return `<div class="wx wx-photo" style="--bg-image:url('${imgs[0].replace(/'/g, "%27")}')"></div>`;
    if (mode === 'collage' && imgs.length) return `<div class="wx wx-collage"><div class="wx-collage-grid">${imgs.slice(0,4).map(src => `<div class="wx-collage-cell" style="background-image:url('${src.replace(/'/g, "%27")}')"></div>`).join('')}</div></div>`;
    return this._getWeatherBg(ws, isNight);
  }

  _updateHomeNameDisplay() {
    const prominent = this.shadowRoot.getElementById('lbl-home-name-prominent');
    if (prominent) prominent.textContent = this._homeName || 'Mi Casa';
  }

  _sendTempNotification(message) {
    const targets = (this._ui && this._ui.notification_targets) || [];
    if (!targets.length || !this._hass) return;
    targets.forEach(target => {
      try {
        this._hass.callService('notify', target, {
          message,
          title: 'Argus — Alerta de Temperatura',
             data: { push: { sound: 'default', badge: 1 } }
        });
      } catch (_) {}
    });
  }

  _triggerSOS() {
    const modal = this.shadowRoot && this.shadowRoot.getElementById('sos-modal');
    if (modal) modal.classList.remove('open');
    const targets = (this._ui && this._ui.notification_targets) || [];
    const loc = this._homeName || 'Mi Casa';
    if (targets.length && this._hass) {
      targets.forEach(target => {
        try {
          this._hass.callService('notify', target, {
            message: '🚨 Botón SOS activado desde ' + loc + '. Revisa el estado de la alarma de inmediato.',
            title: 'ARGUS — SOS / PÁNICO',
               data: { push: { sound: 'alarm.caf', badge: 1 }, priority: 'high', ttl: 0 }
          });
        } catch (_) {}
      });
    }
    if (this._hass) {
      this._hass.callService('argus', 'trigger', {}).catch(() => {});
    }
  }

  _savePersonalization() {
    const pin = this._dashboard?.entries?.[0]?.options?.code || '';
    const run = () => this._persistPersonalization();
    if (!pin) return run();
    this._showPinModal(v => { if (v !== pin) return alert('PIN incorrecto'); run(); });
  }

  async _persistPersonalization() {
    const status = this.shadowRoot.getElementById('personalization-status');
    const background_mode = this.shadowRoot.getElementById('bg-mode-select-standalone')?.value || 'weather';
    const temperature_source = this.shadowRoot.getElementById('temp-source-select-standalone')?.value || 'auto';
    try {
      await this._send('argus/save_ui', { 
        home_name: this._homeName, 
        background_mode, 
        background_images: this._backgroundImages || [], 
        temperature_source 
      });
      this._backgroundMode = background_mode; this._temperatureSource = temperature_source;
      this._ui = this._ui || {}; this._ui.background_mode = background_mode; this._ui.background_images = this._backgroundImages || []; this._ui.temperature_source = temperature_source;
      this._renderEntries();
      
      const btn = this.shadowRoot.getElementById('btn-save-personalization-standalone');
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent = '✓ Guardado Correctamente';
        btn.style.background = '#43a047';
        setTimeout(() => { btn.textContent = oldText; btn.style.background = ''; }, 3000);
      }
    } catch (e) { alert('Error: ' + e.message); }
  }

  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const masterPin = this._dashboard?.entries?.[0]?.options?.code || '';
    const doOpen = () => {
      const m = this.shadowRoot.getElementById('home-name-modal');
      const inp = this.shadowRoot.getElementById('home-name-input');
      const st  = this.shadowRoot.getElementById('home-name-status');
      inp.value = this._homeName || this.shadowRoot.getElementById('home-name-setting')?.value || '';
      if (st) st.textContent = '';
      m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
      setTimeout(() => inp.focus(), 60);
    };
    if (masterPin) {
      this._showPinModal(pin => {
        if (pin !== masterPin) {
          setTimeout(() => {
            const err = this.shadowRoot.getElementById('pin-error');
            if (err) err.textContent = '\u274c PIN incorrecto';
          }, 50);
          return;
        }
        doOpen();
      });
    } else {
      doOpen();
    }
  }

  _closeHomeNameModal() {
    const m = this.shadowRoot.getElementById('home-name-modal');
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
  }

  async _saveHomeName() {
    const inp = this.shadowRoot.getElementById('home-name-input');
    const name = (inp?.value || '').trim();
    try {
      await this._send('argus/save_ui', { home_name: name });
      this._homeName = name;
      if (!this._ui) this._ui = {};
      this._ui.home_name = name;
      this._updateHomeNameDisplay();
      this._renderEntries();
      setTimeout(() => this._closeHomeNameModal(), 800);
    } catch (e) { alert('Error: ' + e.message); }
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
      status.textContent = p1 ? '✓ PIN Actualizado' : '✓ PIN Eliminado'; 
      status.className = 'status ok';
      if (this.shadowRoot.getElementById('current-pin-display')) {
        this.shadowRoot.getElementById('current-pin-display').textContent = p1 ? 'PIN Activo: Sí' : 'PIN Activo: No';
      }
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

  _appendPinDigit(digit) {
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    if (!inp) return;
    inp.value = `${inp.value || ''}${digit}`.slice(0, 8);
    if (err) err.textContent = '';
  }

  _backspacePin() {
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    if (!inp) return;
    inp.value = (inp.value || '').slice(0, -1);
    if (err) err.textContent = '';
  }

  _submitPin() {
    const pin = this.shadowRoot.getElementById('pin-input').value.trim();
    if (!pin) { this.shadowRoot.getElementById('pin-error').textContent = '⚠️ Introduce el PIN'; return; }
    const cb = this._pinCallback;
    this._closePinModal();
    if (cb) cb(pin);
  }

  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const q = (this.shadowRoot.getElementById('selector-search').value || '').toLowerCase().trim();
    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = this._available.filter(x => {
      if (this._selectorTarget === 'siren') return ['siren','switch'].includes(x.domain);
      if (x.domain === 'lock') return true;
      if (x.domain === 'binary_sensor') {
        const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
        return INTRUSION_DC.includes(dc);
      }
      return false;
    }).filter(x => !q || [x.entity_id, x.name, x.area].filter(Boolean).join(' ').toLowerCase().includes(q));
    items.forEach(x => { if (!this._selected.includes(x.entity_id)) this._selected.push(x.entity_id); });
    this._renderSelector();
  }

  _openModal(type) {
    this._selectorTarget = type;
    const cfg = this._currentModeConfig();
    const _srcKey = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : 'sirens');
    this._selected = Array.isArray(cfg[_srcKey]) ? [...cfg[_srcKey]] : [];
    const title = this.shadowRoot.getElementById('selector-title');
    if (type === 'sensor') title.textContent = this._t('sensor_section');
    else if (type === 'bypass') title.textContent = 'Sensores a Omitir';
    else title.textContent = this._t('siren_section');
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
      if (this._selectorTarget === 'siren') return ['siren','switch','light','fan','input_boolean'].includes(x.domain);
      // sensor / bypass mode:
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
      const lblMap = { on:'Abierto', off:'Cerrado', locked:'Cerrado', unlocked:'Abierto', idle:'Reposo', recording:'Grabando', home:'En casa', not_home:'Fuera' };
      const lbl  = this._selectorTarget === 'sensor'
        ? `<span class="badge ${isTr ? 'armed_away' : 'disarmed'}" style="padding:2px 6px;font-size:10px">${lblMap[raw] || raw}</span>`
        : '';
      return `<label class="pick-row">
        <input type="checkbox" data-entity="${x.entity_id}" ${this._selected.includes(x.entity_id) ? 'checked' : ''}>
        <div>
          <div class="pick-row-name">${x.name || x.entity_id}${lbl}</div>
          <div class="pick-row-meta">${x.entity_id}${x.area ? ' · '+x.area : ''}</div>
        </div>
      </label>`;
    }).join('') || `<div class="small" style="padding:10px">Sin resultados</div>`;

    list.querySelectorAll('input[type=checkbox]').forEach(cb =>
      cb.addEventListener('change', e => {
        const id = e.target.dataset.entity;
        if (e.target.checked) { if (!this._selected.includes(id)) this._selected.push(id); }
        else this._selected = this._selected.filter(v => v !== id);
        this._renderSelector();
      })
    );

    selBox.innerHTML = this._selected.map(id =>
      `<div class="sel-right-item">
        <div style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._hass?.states?.[id]?.attributes?.friendly_name || id}</div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${id}">✕</button>
      </div>`
    ).join('') || `<div class="small" style="padding:10px;opacity:.5">${this._t('none_selected')}</div>`;

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
    if (this._selectorTarget === 'sensor') cfg.sensors          = [...this._selected];
    if (this._selectorTarget === 'siren')  cfg.sirens           = [...this._selected];
    if (this._selectorTarget === 'bypass') cfg.bypassed_sensors = [...this._selected];
    // Fix #2+5 - Persistir por entity_id para aislamiento multi-instancia
    const _eid = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id;
    if (_eid) {
      if (!this._ui.modes[_eid]) this._ui.modes[_eid] = {};
      this._ui.modes[_eid][this._mode] = cfg;
    } else {
      this._ui.modes[this._mode] = cfg;
    }
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
          this._writeLog('disarm', `Manual (Desarmado)`, currentUser);
          this._sendHaNotif(`🔓 ${this._t('log_disarmed')}`, `${currentUser} desarmó el sistema.`);
          setTimeout(() => this._load(), 800);
        } catch (err) { 
          const pinErr = this.shadowRoot.getElementById('pin-error');
          if (pinErr) pinErr.textContent = '❌ PIN incorrecto';
        }
      });
      return;
    }

    // Fix #4+5 - Leer config del modo desde estructura persistida por entity_id
    const _armEid = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id;
    const modeCfg = (this._ui?.modes?.[_armEid]?.[action])
                 || (this._ui?.modes?.[action])
                 || {};
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
      this._writeLog('arm', `Manual (${modeTxt})`, currentUser);
      this._sendHaNotif(`🔒 ${this._t('log_armed')} — ${modeTxt}`, `${currentUser} activó el modo ${modeTxt}.`);
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
