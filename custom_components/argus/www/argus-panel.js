/**
 * Argus Home Hub – v2.0.11
 * Complete, self-contained custom element.
 * Fixes: inline CSS animated weather (rain/storm/snow/stars/moon/sun),
 *        temperature from dedicated local sensor with weather fallback,
 *        DESARMADO button active state when disarmed,
 *        per-instance fullscreen, vacation quick action, numeric PIN dial pad,
 *        mode tabs including disarmed.
 * v0.9.26: Fix light-mode invisible text (mode-section-title/sensor-pill),
 *          selector panel-right not showing selected items,
 *          export uses Blob API (modern browsers), import reset + robust validation,
 *          require_closed & bypassed_sensors read/write per entity_id structure.
 * v0.9.31: Fix selector sirenas — delegación de eventos evita checkbox cruzado,
 *          Fix require_closed — lee checkbox justo antes del send para garantizar
 *          que el valor más reciente llega al bloqueo de armado.
 * v0.9.32: Fix DESARMADO apaga animación parpadeo en sirenas/sensores triggered,
 *          Fix historial muestra sensor que disparó la alarma,
 *          Fix píldoras de sirenas parpadean rojo cuando estado=triggered,
 *          Animación triggered muestra chips con nombre de sensores abiertos.
 */

/* ── i18n ─────────────────────────────────────────────────────────────── */
const LANG_LIST = [
  { code:'auto', flag:'🏠', label:'Home Assistant' },
  { code:'es', flag:'🇪🇸', label:'Español' },
  { code:'en', flag:'🇬🇧', label:'English' },
  { code:'fr', flag:'🇫🇷', label:'Français' },
  { code:'pt', flag:'🇧🇷', label:'Português' },
  { code:'it', flag:'🇮🇹', label:'Italiano' },
  { code:'zh', flag:'🇨🇳', label:'中文' },
  { code:'ru', flag:'🇷🇺', label:'Русский' },
];

// Values received from Home Assistant or persisted storage must never become
// executable markup when rendered through a template literal.
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
}[char]));
const TEXTS = {
  es: {
    hero_desc:'Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.',
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
    homekit_title:'🏠 HomeKit', close:'Cerrar',
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
    homekit_house:'Casa de Apple Home', language:'Idioma',
    lang_select_title:'Seleccionar Idioma',
    btn_home:'🏠 EN CASA', btn_away:'🔒 AUSENTE', btn_night:'🌙 NOCHE',
    btn_vacation:'✈️ VACACIONES', btn_disarmed:'DESARMADO', btn_sos:'🚨 SOS / PÁNICO',
    system_armed:'SISTEMA ARMADO', system_disarmed:'SISTEMA DESARMADO',
    home_name_lbl:'Nombre del Hogar', background_lbl:'Fondo', edit_btn:'✏️ Editar',
    save_btn:'Guardar', backup_title:'Respaldo y Restauración',
    backup_desc:'Guarda una copia de seguridad de tus ajustes o restaura una anterior.',
    export_btn:'📤 Descargar', import_btn:'📥 Restaurar', reset_btn:'⚠️ Restablecer', undo_reset_btn:'↩️ Deshacer Restablecimiento',
    access_title:'Control de Acceso y Usuarios',
    access_desc:'Gestión global de seguridad, PIN maestro y administradores.',
    pin_master_title:'PIN Maestro', pin_active_yes:'PIN Maestro: Activo', pin_active_no:'PIN Maestro: Desactivado',
    select_all:'☑ Todos', deselect_all:'☐ Ninguno', mqtt_label:'MQTT',
    arm_time_label:'Tiempo armado (s)', disarm_time_label:'Retraso de entrada (s)',
    pin_incorrect:'❌ PIN actual incorrecto', pin_updated:'✓ PIN Actualizado', pin_deleted:'✓ PIN Eliminado',
    searching_auto:'↻ Buscando automatizaciones...', no_auto_linked:'No hay automatizaciones vinculadas a Argus.',
    pin_remove_hint:'Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.',
    lbl_load_file:'Cargar archivo:', lbl_aesthetic_custom:'Personalización Estética', lbl_uploaded_files:'Archivos subidos en servidor',
    bypass_lbl:'🚫 Omitir', lock_if_open:'Bloquear si abiertos',
    select_btn:'+ Seleccionar', add_btn:'+ Añadir',
    sensors_to_bypass:'Sensores a Omitir',
    no_instances:'No hay instancias. Agrega Argus desde Integraciones.',
    fullscreen_title:'Pantalla completa',
    sos_slide:'Desliza para activar SOS', sos_confirm_title:'Confirmar pánico',
    sos_confirm_text:'Desliza para disparar la alarma inmediatamente.',
    sos_call:'📞 Llamar a Emergencias',
    home_name_modal_title:'🏡 Nombre del Hogar',
    home_name_modal_desc:'Este nombre aparece en el panel de instancias y en pantalla completa.',
    home_name_label:'Nombre del Hogar', home_name_placeholder:'Mi Casa',
    clear_log_btn:'BORRAR',
    bg_weather:'Clima animado', bg_none:'Predeterminado', bg_panel_none:'Sin fondo', bg_photo:'Una foto', bg_collage:'Collage', bg_video:'Video en loop', bg_panel_title:'Fondo para panel', bg_hub_title:'Fondo Argus', bg_sound_opt:'Sonido de video', bg_image_opt:'Imagen / GIF', bg_hub_default:'Predeterminado (Argus)',
    forgot_pin:'¿Olvidaste tu PIN?', pin_reset_admin_only:'❌ Error: Solo los administradores de Home Assistant pueden restablecer el PIN maestro.', pin_reset_confirm:'¿Estás seguro de que deseas restablecer el PIN maestro? Se eliminará el PIN actual y se desactivará.',
    temp_auto:'Automático (sensor local / termostato / clima)', temp_thermostat:'(termostato)', battery_low:'⚠️ Batería baja',
    times_section:'⏱️ Tiempos', arm_time:'Armado (s)', disarm_time:'Retraso de entrada (s)',
    save_config:'GUARDAR CONFIGURACIÓN', never_triggered:'Nunca activada',
    bridge_paired:'Puente configurado',
    bridge_paired_desc:'El puente <b>{bridge}</b> está configurado en Home Assistant. Home Assistant no permite comprobar desde aquí si fue añadido a Apple Home ni conocer su nombre.',
    bridge_not_connected:'Puente no configurado',
    bridge_not_desc:'Activa la integración HomeKit Bridge en Home Assistant e incluye la entidad <code>alarm_control_panel.argus_*</code> para generar un código QR de emparejamiento.',
    manual_disarm:'Manual (Desarmado)',
    manual_arm:'Manual',
    open_sensors:'Sensores abiertos',
    log_detail_disarm:'Sistema desarmado',
    alarm_instance:'Instancia de Alarma',
    log_detail_armed:'Modo',
    log_detail_triggered:'Activación automática',
    user_exp_type: 'Vencimiento',
    user_exp_date: 'Fecha/Hora de Vencimiento',
    exp_indefinite: 'Indefinido',
    exp_temporary: 'Temporal (Fecha/Hora)',
    expired: 'Expirado',
    active_until: 'Vence',
    log_detail_pin_reset: 'PIN maestro restablecido por el administrador',
    log_detail_pin_reset_failed: 'Intento no autorizado de restablecer el PIN maestro',
    badge_pin_reset: 'PIN Restablecido',
    badge_pin_reset_failed: 'Fallo Reset PIN',
    no_files_uploaded: 'Sin archivos subidos. Carga un fondo usando los controles de arriba.',
    no_files_uploaded_short: 'Sin archivos subidos.',
    files_count: '{count} archivos',
    files_count_short: '{count} arch.',
    file_delete_confirm: '¿Seguro que deseas borrar "{filename}" permanentemente?',
    use_for_panel: 'Panel',
    use_for_hub: 'Argus',
    delete_btn_title: 'Borrar de almacenamiento',
    bg_panel_selected_from_history: 'Fondo de panel seleccionado desde historial.',
    bg_hub_selected_from_history: 'Fondo Argus seleccionado desde historial.',
    error_loading_uploaded_files: 'Error al cargar historial de archivos.',
    select_profile_title: 'Selecciona tu perfil',
    select_profile_subtitle: 'Accede a tus paneles e instancias de seguridad de Argus.',
    exit_to_ha: 'Volver a Home Assistant',
    role_argus_admin: 'Administrador de Argus',
    role_argus_user: 'Usuario estándar',
    ha_account_linked: 'Cuenta de Home Assistant: {name}',
    ha_account_unavailable: 'Vinculación no disponible',
    user_role_label: 'Rol Argus',
    delete_user_tooltip: 'Eliminar perfil de usuario',
    delete_user_confirm: '¿Estás seguro de que deseas eliminar a "{name}"?',
    cannot_delete_last_admin: 'No se puede eliminar el último administrador vinculante.',
    clock_format_label: 'Formato de hora',
    clock_format_desc: 'Elige cómo se muestran las horas en el panel y el historial.',
    clock_auto: 'Automático (Home Assistant)',
    clock_12h: '12 horas (AM/PM)',
    clock_24h: '24 horas',
    unlock_kiosk: 'Desbloquear kiosco',
    first_run_welcome: 'Gracias por elegir Argus Home Hub. Bienvenido/a.',
    first_run_desc: 'Complete la configuración inicial para asegurar su hogar.',
    first_run_pin_expl: 'El PIN de acceso abre Argus. El PIN maestro controla el armado y desarmado.',
    first_run_skip: 'Omitir',
    first_run_start: 'Comenzar con Argus',
    first_run_blocked_title: 'Acceso denegado',
    first_run_blocked_desc: 'Se requiere un administrador de Home Assistant para configurar Argus por primera vez.',
    log_action_first_run_completed: 'Argus inicializado por {user}',
    log_action_fullscreen_unlocked: 'Kiosco desbloqueado por {user}',
    log_action_master_pin_rejected: 'Intento incorrecto de PIN maestro por {user}',
    log_action_select_profile: 'Perfil seleccionado: {user}',
    log_action_verify_access_pin: 'PIN de acceso verificado por {user}',
    log_action_sos: 'Pánico SOS activado por {user}',
    log_action_stop_sos: 'Pánico SOS detenido por {user}',
    log_action_save_ui: 'Ajustes de UI guardados por {user}',
    log_action_rejected: 'Acción rechazada',
    unlinked_ha_accounts_title: 'Cuentas de Home Assistant sin perfil Argus',
    btn_create_argus_profile: 'Crear perfil Argus',
    no_unlinked_ha_accounts: 'Todas las cuentas de Home Assistant activas tienen perfil.',
    profile_is_yours: 'Este es tu perfil',
    profile_needs_pin: 'Perfil ajeno — introduce el PIN de acceso',
    profile_no_pin_access: 'Este perfil no tiene PIN de acceso. No puedes abrirlo.',
    ha_role_admin: 'Admin HA',
    ha_role_standard: 'Usuario HA',
    login_btn: 'Iniciar sesión',
    cancel_btn: 'Cancelar',
    pin_placeholder: 'PIN de acceso',
    link_ha_user: 'Vincular a Usuario Home Assistant',
    ha_admin_label: 'Home Assistant Admin',
    ha_standard_user_label: 'Standard HA User',
    role_argus_standard: 'Usuario estándar',
  },
  en: {
    hero_desc:'Alarm control, modes and automations.',
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
    homekit_title:'🏠 HomeKit', close:'Close',
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
    homekit_house:'Apple Home', language:'Language',
    lang_select_title:'Select Language',
    btn_home:'🏠 HOME', btn_away:'🔒 AWAY', btn_night:'🌙 NIGHT',
    btn_vacation:'✈️ VACATION', btn_disarmed:'DISARMED', btn_sos:'🚨 SOS / PANIC',
    system_armed:'SYSTEM ARMED', system_disarmed:'SYSTEM DISARMED',
    home_name_lbl:'Home Name', background_lbl:'Background', edit_btn:'✏️ Edit',
    save_btn:'Save', backup_title:'Backup & Restore',
    backup_desc:'Save a backup of your settings or restore a previous one.',
    export_btn:'📤 Download', import_btn:'📥 Restore', reset_btn:'⚠️ Factory Reset', undo_reset_btn:'↩️ Undo Reset',
    access_title:'Access Control & Users',
    access_desc:'Global security management, master PIN and administrators.',
    pin_master_title:'Master PIN', pin_active_yes:'Master PIN: Active', pin_active_no:'Master PIN: Deactivated',
    select_all:'☑ All', deselect_all:'☐ None', mqtt_label:'MQTT',
    arm_time_label:'Arm time (s)', disarm_time_label:'Entry delay (s)',
    pin_incorrect:'❌ Incorrect current PIN', pin_updated:'✓ PIN Updated', pin_deleted:'✓ PIN Deleted',
    searching_auto:'↻ Searching automations...', no_auto_linked:'No automations linked to Argus.',
    pin_remove_hint:'To remove PIN: Enter the current one and leave the fields below empty.',
    lbl_load_file:'Upload file:', lbl_aesthetic_custom:'Aesthetic Customization', lbl_uploaded_files:'Uploaded files on server',
    bypass_lbl:'🚫 Bypass', lock_if_open:'Lock if open',
    select_btn:'+ Select', add_btn:'+ Add',
    sensors_to_bypass:'Sensors to Bypass',
    no_instances:'No instances. Add Argus from Integrations.',
    fullscreen_title:'Full screen',
    sos_slide:'Slide to activate SOS', sos_confirm_title:'Confirm panic',
    sos_confirm_text:'Slide to trigger the alarm immediately.',
    sos_call:'📞 Call Emergency Services',
    home_name_modal_title:'🏡 Home Name',
    home_name_modal_desc:'This name appears in the instances panel and in full screen.',
    home_name_label:'Home Name', home_name_placeholder:'My Home',
    clear_log_btn:'CLEAR',
    bg_weather:'Animated weather', bg_none:'Default', bg_panel_none:'No background', bg_photo:'One photo', bg_collage:'Collage', bg_video:'Loop video', bg_panel_title:'Panel background', bg_hub_title:'Argus background', bg_sound_opt:'Video sound', bg_image_opt:'Image / GIF', bg_hub_default:'Default (Argus)',
    forgot_pin:'Forgot PIN?', pin_reset_admin_only:'❌ Error: Only Home Assistant administrators can reset the master PIN.', pin_reset_confirm:'Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.',
    temp_auto:'Automatic (local sensor / thermostat / climate)', temp_thermostat:'(thermostat)', battery_low:'⚠️ Low Battery',
    times_section:'⏱️ Times', arm_time:'Arming (s)', disarm_time:'Entry delay (s)',
    save_config:'SAVE CONFIGURATION', never_triggered:'Never triggered',
    bridge_paired:'Bridge configured',
    bridge_paired_desc:'The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.',
    bridge_not_connected:'Bridge not configured',
    bridge_not_desc:'Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.',
    manual_disarm:'Manual (Disarmed)',
    manual_arm:'Manual',
    open_sensors:'Open sensors',
    log_detail_disarm:'System disarmed',
    alarm_instance:'Alarm Instance',
    log_detail_armed:'Mode',
    log_detail_triggered:'Automatic activation',
    user_exp_type: 'Expiration',
    user_exp_date: 'Expiration Date/Time',
    exp_indefinite: 'Indefinite',
    exp_temporary: 'Temporary (Date/Time)',
    expired: 'Expired',
    active_until: 'Expires',
    log_detail_pin_reset: 'Master PIN reset by administrator',
    log_detail_pin_reset_failed: 'Unauthorized attempt to reset master PIN',
    badge_pin_reset: 'PIN Reset',
    badge_pin_reset_failed: 'PIN Reset Failed',
    no_files_uploaded: 'No uploaded files. Upload a background using the controls above.',
    no_files_uploaded_short: 'No uploaded files.',
    files_count: '{count} files',
    files_count_short: '{count} files',
    file_delete_confirm: 'Are you sure you want to permanently delete "{filename}"?',
    use_for_panel: 'Panel',
    use_for_hub: 'Argus',
    delete_btn_title: 'Delete from storage',
    bg_panel_selected_from_history: 'Panel background selected from history.',
    bg_hub_selected_from_history: 'Argus background selected from history.',
    error_loading_uploaded_files: 'Error loading file history.',
    select_profile_title: 'Select Your Profile',
    select_profile_subtitle: 'Access your security panels and Argus instances.',
    exit_to_ha: 'Back to Home Assistant',
    role_argus_admin: 'Argus Administrator',
    role_argus_user: 'Standard User',
    ha_account_linked: 'Home Assistant Account: {name}',
    ha_account_unavailable: 'Binding unavailable',
    user_role_label: 'Argus Role',
    delete_user_tooltip: 'Delete user profile',
    delete_user_confirm: 'Are you sure you want to delete "{name}"?',
    cannot_delete_last_admin: 'Cannot delete the last binding administrator.',
    clock_format_label: 'Time Format',
    clock_format_desc: 'Choose how time is displayed across panels and logs.',
    clock_auto: 'Automatic (Home Assistant)',
    clock_12h: '12-hour (AM/PM)',
    clock_24h: '24-hour',
    unlock_kiosk: 'Unlock kiosk',
    first_run_welcome: 'Thank you for choosing Argus Home Hub. Welcome.',
    first_run_desc: 'Complete setup to secure your home.',
    first_run_pin_expl: 'The access PIN opens Argus. The master PIN controls arming and disarming.',
    first_run_skip: 'Skip',
    first_run_start: 'Start with Argus',
    first_run_blocked_title: 'Access Denied',
    first_run_blocked_desc: 'A Home Assistant administrator is required to set up Argus for the first time.',
    log_action_first_run_completed: 'Argus initialized by {user}',
    log_action_fullscreen_unlocked: 'Kiosk unlocked by {user}',
    log_action_master_pin_rejected: 'Incorrect master PIN attempt by {user}',
    log_action_select_profile: 'Profile selected: {user}',
    log_action_verify_access_pin: 'Access PIN verified by {user}',
    log_action_sos: 'SOS Panic triggered by {user}',
    log_action_stop_sos: 'SOS Panic stopped by {user}',
    log_action_save_ui: 'UI Settings saved by {user}',
    log_action_rejected: 'Action rejected',
    unlinked_ha_accounts_title: 'Home Assistant accounts without Argus profile',
    btn_create_argus_profile: 'Create Argus Profile',
    no_unlinked_ha_accounts: 'All active Home Assistant accounts have a profile.',
    profile_is_yours: 'This is your profile',
    profile_needs_pin: 'Another person\u2019s profile — enter the access PIN',
    profile_no_pin_access: 'This profile has no access PIN. You cannot open it.',
    ha_role_admin: 'HA Admin',
    ha_role_standard: 'HA User',
    login_btn: 'Login',
    cancel_btn: 'Cancel',
    pin_placeholder: 'Access PIN',
    link_ha_user: 'Link to Home Assistant User',
    ha_admin_label: 'Home Assistant Admin',
    ha_standard_user_label: 'Standard HA User',
    role_argus_standard: 'Standard User',
  },
  fr: {
    hero_desc:"Sécurité intégrée, contrôle d'accès, automatisations et HomeKit.",
    instances:'Instances actives', modes:'Modes', automations:'⚡ Automatisations',
    linked_rules:'Règles liées à Argus', create_ha:'+ Créer dans HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Paramètres', change_pin:'PIN maître', pin_desc:'Code numérique pour armer et désarmer.',
    new_pin:'Nouveau PIN', confirm_pin:'Confirmer PIN', update_pin:'Mettre à jour PIN',
    current_pin:'PIN actuel', notifications_title:'🔔 Notifications',
    notif_desc:'Sélectionnez les appareils mobiles enregistrés dans HA pour recevoir les alertes Argus.',
    save_notif:'Enregistrer', users_title:'👥 Utilisateurs & Contrôle d\'accès',
    admin_only:'Seuls les administrateurs peuvent modifier cette section.',
    add_user:'Ajouter un utilisateur', username:'Nom d\'utilisateur', user_pin:'PIN utilisateur',
    is_admin:'Administrateur', save_user:'Enregistrer', no_users:'Aucun utilisateur supplémentaire configuré.',
    homekit_title:'🏠 HomeKit', close:'Fermer',
    search_placeholder:'Rechercher par nom, zone ou entity_id',
    available:'Disponibles', selected_lbl:'Sélectionnés', clear:'Effacer', accept:'Accepter',
    introduce_pin:'Entrez votre PIN', pin_modal_desc:'PIN numérique pour désarmer Argus',
    confirm:'✓ Confirmer', cancel:'Annuler',
    disarmed:'Désarmé', armed_home:'À la maison', armed_away:'Absent',
    armed_night:'Nuit', armed_vacation:'Vacances', triggered:'ALARME!',
    pending:'En attente', arming:'Armement', unavailable:'Indisponible',
    sensor_section:'Capteurs d\'intrusion', siren_section:'Sirènes', thermostat_alert_notif:'🌡️ Alerte de température',
    none_selected:'Aucun sélectionné', search_select:'Rechercher & sélectionner',
    save_mode:'💾 Enregistrer mode', details_notif:'Notification d\'alarme',
    activity_log:'📋 Journal d\'activité',
    log_armed:'Armé', log_disarmed:'Désarmé', log_triggered:'Déclenché!',
    log_by:'par', log_sensor:'Capteur', log_no_events:'Aucun événement récent.',
    mode_home:'Maison', mode_away:'Absent', mode_night:'Nuit', mode_vacation:'Vacances',
    homekit_bridge:'Pont HomeKit', homekit_not_paired:'Non associé à une maison.',
    homekit_house:'Apple Home', language:'Langue',
    lang_select_title:'Sélectionner la langue',
    btn_home:'🏠 MAISON', btn_away:'🔒 ABSENT', btn_night:'🌙 NUIT',
    btn_vacation:'✈️ VACANCES', btn_disarmed:'DÉSARMÉ', btn_sos:'🚨 SOS / PANIQUE',
    system_armed:'SYSTÈME ARMÉ', system_disarmed:'SYSTÈME DÉSARMÉ',
    home_name_lbl:'Nom du domicile', background_lbl:'Fond', edit_btn:'✏️ Modifier',
    save_btn:'Enregistrer', backup_title:'Sauvegarde & Restauration',
    backup_desc:'Enregistrez une sauvegarde ou restaurez une précédente.',
    export_btn:'📤 Télécharger', import_btn:'📥 Restaurer', reset_btn:'⚠️ Réinitialiser', undo_reset_btn:'↩️ Annuler la réinitialisation',
    access_title:'Contrôle d\'accès & Utilisateurs',
    access_desc:'Gestion globale de la sécurité, PIN maître et administrateurs.',
    pin_master_title:'PIN Maître', pin_active_yes:'PIN actif: Oui', pin_active_no:'PIN actif: Non',
    select_all:'☑ Tous', deselect_all:'☐ Aucun', mqtt_label:'MQTT',
    arm_time_label:'Temps armement (s)', disarm_time_label:'Délai d\'entrée (s)',
    pin_incorrect:'❌ PIN actuel incorrect', pin_updated:'✓ PIN mis à jour', pin_deleted:'✓ PIN supprimé',
    searching_auto:'↻ Recherche automatisations...', no_auto_linked:'Aucune automatisation liée à Argus.',
    pin_remove_hint:'Pour supprimer le PIN: entrez le PIN actuel et laissez les champs vides.',
    lbl_load_file:'Charger le fichier:', lbl_aesthetic_custom:'Personnalisation esthétique', lbl_uploaded_files:'Fichiers téléchargés sur le serveur',
    bypass_lbl:'🚫 Ignorer', lock_if_open:'Bloquer si ouvert',
    select_btn:'+ Sélectionner', add_btn:'+ Ajouter',
    sensors_to_bypass:'Capteurs à ignorer', no_instances:'Aucune instance.',
    fullscreen_title:'Plein écran', sos_slide:'Glisser pour activer SOS',
    sos_confirm_title:'Confirmer la panique', sos_confirm_text:'Glissez pour déclencher l\'alarme immédiatement.',
    sos_call:'📞 Appeler les urgences',
    home_name_modal_title:'🏡 Nom du domicile',
    home_name_modal_desc:'Ce nom apparaît dans le panneau des instances et en plein écran.',
    home_name_label:'Nom du domicile', home_name_placeholder:'Ma maison',
    clear_log_btn:'EFFACER',
    bg_weather:'Météo animée', bg_none:'Par défaut', bg_panel_none:'Sans fond', bg_photo:'Une photo', bg_collage:'Collage', bg_video:'Vidéo en boucle', bg_panel_title:'Fond du panneau', bg_hub_title:'Fond Argus', bg_sound_opt:'Son de la vidéo', bg_image_opt:'Image / GIF', bg_hub_default:'Par défaut (Argus)',
    forgot_pin:'PIN oublié ?', pin_reset_admin_only:'❌ Erreur : Seuls les administrateurs de Home Assistant peuvent réinitialiser le PIN maître.', pin_reset_confirm:'Êtes-vous sûr de vouloir réinitialiser le PIN maître ? Le PIN actuel sera supprimé et désactivé.',
    temp_auto:'Automatique (capteur local / thermostat / climat)', temp_thermostat:'(thermostat)', battery_low:'⚠️ Batterie faible',
    times_section:'⏱️ Temps', arm_time:'Armé (s)', disarm_time:'Délai entrée (s)',
    save_config:'ENREGISTRER LA CONFIGURATION', never_triggered:'Jamais déclenché',
    bridge_paired:'Pont configuré',
    bridge_paired_desc:'Le pont <b>{bridge}</b> est configuré dans Home Assistant. Home Assistant ne peut pas vérifier ici son ajout à Apple Home ni fournir son nom.',
    bridge_not_connected:'Pont non configuré',
    bridge_not_desc:'Activez l\'intégration HomeKit Bridge dans Home Assistant et incluez l\'entité <code>alarm_control_panel.argus_*</code> pour générer un QR d\'appairage.',
    manual_disarm:'Manuel (Désarmé)', manual_arm:'Manuel',
    open_sensors:'Capteurs ouverts', log_detail_disarm:'Système désarmé',
    alarm_instance:"Instance d'alarme",
    log_detail_armed:'Mode', log_detail_triggered:'Activation automatique',
    log_detail_pin_reset: "Code PIN maître réinitialisé par l'administrateur",
    log_detail_pin_reset_failed: "Tentative non autorisée de réinitialiser le code PIN maître",
    badge_pin_reset: 'PIN Réinitialisé',
    badge_pin_reset_failed: 'Échec Réinit. PIN',
    no_files_uploaded: "Aucun fichier téléchargé. Téléchargez un arrière-plan à l'aide des commandes ci-dessus.",
    no_files_uploaded_short: 'Aucun fichier téléchargé.',
    files_count: '{count} fichiers',
    files_count_short: '{count} fich.',
    file_delete_confirm: 'Voulez-vous vraiment supprimer définitivement "{filename}" ?',
    use_for_panel: 'Panneau',
    use_for_hub: 'Argus',
    delete_btn_title: 'Supprimer du stockage',
    bg_panel_selected_from_history: "Arrière-plan du panneau sélectionné depuis l'historique.",
    bg_hub_selected_from_history: "Arrière-plan Argus sélectionné depuis l'historique.",
    error_loading_uploaded_files: "Erreur lors du chargement de l'historique des fichiers.",
    select_profile_title: 'Sélectionnez votre profil',
    select_profile_subtitle: 'Accédez à vos panneaux de sécurité et instances Argus.',
    exit_to_ha: 'Retour à Home Assistant',
    role_argus_admin: 'Administrateur Argus',
    role_argus_user: 'Utilisateur standard',
    ha_account_linked: 'Compte Home Assistant : {name}',
    ha_account_unavailable: 'Liaison indisponible',
    user_role_label: 'Rôle Argus',
    delete_user_tooltip: 'Supprimer le profil utilisateur',
    delete_user_confirm: 'Voulez-vous vraiment supprimer « {name} » ?',
    cannot_delete_last_admin: 'Impossible de supprimer le dernier administrateur.',
    clock_format_label: 'Format d\'heure',
    clock_format_desc: 'Choisissez l\'affichage de l\'heure.',
    clock_auto: 'Automatique (Home Assistant)',
    clock_12h: '12 heures (AM/PM)',
    clock_24h: '24 heures',
    unlock_kiosk: 'Déverrouiller le kiosque',
    first_run_welcome: 'Merci d\'avoir choisi Argus Home Hub. Bienvenue.',
    first_run_desc: 'Complétez la configuration initiale.',
    first_run_pin_expl: 'Le PIN d\'accès ouvre Argus. Le PIN maître contrôle l\'armement.',
    first_run_skip: 'Passer',
    first_run_start: 'Démarrer avec Argus',
    first_run_blocked_title: 'Accès refusé',
    first_run_blocked_desc: 'Un administrateur Home Assistant est requis.',
    log_action_first_run_completed: 'Argus initialisé par {user}',
    log_action_fullscreen_unlocked: 'Kiosque déverrouillé par {user}',
    log_action_master_pin_rejected: 'Tentative de PIN maître incorrecte par {user}',
    log_action_select_profile: 'Profil sélectionné : {user}',
    log_action_verify_access_pin: 'PIN d\'accès vérifié par {user}',
    log_action_sos: 'Panique SOS déclenchée par {user}',
    log_action_stop_sos: 'Panique SOS arrêtée par {user}',
    log_action_save_ui: 'Paramètres UI enregistrés par {user}',
    log_action_rejected: 'Action rejetée',
    unlinked_ha_accounts_title: 'Comptes Home Assistant sans profil Argus',
    btn_create_argus_profile: 'Créer un profil Argus',
    no_unlinked_ha_accounts: 'Tous les comptes Home Assistant actifs ont un profil.',
    profile_is_yours: 'C\u2019est votre profil',
    profile_needs_pin: 'Profil d\u2019une autre personne — entrez le PIN d\u2019accès',
    profile_no_pin_access: 'Ce profil n\u2019a pas de PIN d\u2019accès. Vous ne pouvez pas l\u2019ouvrir.',
    ha_role_admin: 'Admin HA',
    ha_role_standard: 'Utilisateur HA',
    login_btn: 'Connexion',
    cancel_btn: 'Annuler',
    pin_placeholder: 'Code PIN d\u2019accès',
    link_ha_user: 'Lier à un utilisateur Home Assistant',
    ha_admin_label: 'Admin Home Assistant',
    ha_standard_user_label: 'Utilisateur HA standard',
    role_argus_standard: 'Utilisateur standard',
  },
  pt: {
    hero_desc:'Segurança integrada, controle de acesso, automações e HomeKit.',
    instances:'Instâncias ativas', modes:'Modos', automations:'⚡ Automações',
    linked_rules:'Regras vinculadas ao Argus', create_ha:'+ Criar no HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Configurações', change_pin:'PIN Mestre', pin_desc:'Código numérico para armar e desarmar.',
    new_pin:'Novo PIN', confirm_pin:'Confirmar PIN', update_pin:'Atualizar PIN',
    current_pin:'PIN atual', notifications_title:'🔔 Notificações',
    notif_desc:'Selecione os dispositivos móveis registrados no HA que receberão alertas do Argus.',
    save_notif:'Salvar', users_title:'👥 Usuários & Controle de Acesso',
    admin_only:'Somente administradores podem modificar esta seção.',
    add_user:'Adicionar usuário', username:'Nome de usuário', user_pin:'PIN do usuário',
    is_admin:'Administrador', save_user:'Salvar', no_users:'Nenhum usuário adicional configurado.',
    homekit_title:'🏠 HomeKit', close:'Fechar',
    search_placeholder:'Buscar por nome, área ou entity_id',
    available:'Disponíveis', selected_lbl:'Selecionados', clear:'Limpar', accept:'Aceitar',
    introduce_pin:'Digite seu PIN', pin_modal_desc:'PIN numérico para desarmar o Argus',
    confirm:'✓ Confirmar', cancel:'Cancelar',
    disarmed:'Desarmado', armed_home:'Em Casa', armed_away:'Ausente',
    armed_night:'Noite', armed_vacation:'Férias', triggered:'ALARME!',
    pending:'Pendente', arming:'Armando', unavailable:'Indisponível',
    sensor_section:'Sensores de Intrusão', siren_section:'Sirenes', thermostat_alert_notif:'🌡️ Alerta de temperatura',
    none_selected:'Nenhum selecionado', search_select:'Buscar & selecionar',
    save_mode:'💾 Salvar modo', details_notif:'Notificação de alarme',
    activity_log:'📋 Registro de Atividade',
    log_armed:'Armado', log_disarmed:'Desarmado', log_triggered:'Disparado!',
    log_by:'por', log_sensor:'Sensor', log_no_events:'Nenhum evento recente.',
    mode_home:'Em Casa', mode_away:'Ausente', mode_night:'Noite', mode_vacation:'Férias',
    homekit_bridge:'Ponte HomeKit', homekit_not_paired:'Não associado a nenhuma casa.',
    homekit_house:'Apple Home', language:'Idioma',
    lang_select_title:'Selecionar Idioma',
    btn_home:'🏠 EM CASA', btn_away:'🔒 AUSENTE', btn_night:'🌙 NOITE',
    btn_vacation:'✈️ FÉRIAS', btn_disarmed:'DESARMADO', btn_sos:'🚨 SOS / PÂNICO',
    system_armed:'SISTEMA ARMADO', system_disarmed:'SISTEMA DESARMADO',
    home_name_lbl:'Nome do lar', background_lbl:'Fundo', edit_btn:'✏️ Editar',
    save_btn:'Salvar', backup_title:'Backup & Restauração',
    backup_desc:'Salve um backup ou restaure um anterior.',
    export_btn:'📤 Baixar', import_btn:'📥 Restaurar', reset_btn:'⚠️ Redefinir', undo_reset_btn:'↩️ Desfazer Redefinição',
    access_title:'Controle de Acesso & Usuários',
    access_desc:'Gerenciamento global, PIN mestre e administradores.',
    pin_master_title:'PIN Mestre', pin_active_yes:'PIN Ativo: Sim', pin_active_no:'PIN Ativo: Não',
    select_all:'☑ Todos', deselect_all:'☐ Nenhum', mqtt_label:'MQTT',
    arm_time_label:'Tempo armado (s)', disarm_time_label:'Atraso de entrada (s)',
    pin_incorrect:'❌ PIN atual incorreto', pin_updated:'✓ PIN Atualizado', pin_deleted:'✓ PIN Removido',
    searching_auto:'↻ Buscando automações...', no_auto_linked:'Nenhuma automação vinculada ao Argus.',
    pin_remove_hint:'Para remover o PIN: insira o atual e deixe os campos abaixo vazios.',
    lbl_load_file:'Carregar arquivo:', lbl_aesthetic_custom:'Personalização estética', lbl_uploaded_files:'Arquivos enviados no servidor',
    bypass_lbl:'🚫 Ignorar', lock_if_open:'Bloquear se aberto',
    select_btn:'+ Selecionar', add_btn:'+ Adicionar',
    sensors_to_bypass:'Sensores a ignorar', no_instances:'Nenhuma instância.',
    fullscreen_title:'Tela cheia', sos_slide:'Deslize para ativar SOS',
    sos_confirm_title:'Confirmar pânico', sos_confirm_text:'Deslize para acionar o alarme imediatamente.',
    sos_call:'📞 Chamar emergências',
    home_name_modal_title:'🏡 Nome do lar',
    home_name_modal_desc:'Este nome aparece no painel de instâncias e em tela cheia.',
    home_name_label:'Nome do lar', home_name_placeholder:'Minha Casa',
    clear_log_btn:'LIMPAR',
    bg_weather:'Clima animado', bg_none:'Padrão', bg_panel_none:'Sem fundo', bg_photo:'Uma foto', bg_collage:'Colagem', bg_video:'Vídeo em loop', bg_panel_title:'Fundo do painel', bg_hub_title:'Fundo Argus', bg_sound_opt:'Som do vídeo', bg_image_opt:'Imagem / GIF', bg_hub_default:'Padrão (Argus)',
    forgot_pin:'Esqueceu o PIN?', pin_reset_admin_only:'❌ Erro: Apenas administradores do Home Assistant podem redefinir o PIN mestre.', pin_reset_confirm:'Tem certeza que deseja redefinir o PIN mestre? O PIN atual será removido e desativado.',
    temp_auto:'Automático (sensor local / termostato / clima)', temp_thermostat:'(termostato)', battery_low:'⚠️ Bateria fraca',
    times_section:'⏱️ Tempos', arm_time:'Armado (s)', disarm_time:'Atraso de entrada (s)',
    save_config:'SALVAR CONFIGURAÇÃO', never_triggered:'Nunca ativado',
    bridge_paired:'Ponte configurada',
    bridge_paired_desc:'A ponte <b>{bridge}</b> está configurada no Home Assistant. Não é possível verificar daqui se foi adicionada ao Apple Home nem informar seu nome.',
    bridge_not_connected:'Ponte não configurada',
    bridge_not_desc:'Ative a integração HomeKit Bridge no Home Assistant e inclua a entidade <code>alarm_control_panel.argus_*</code> para gerar um QR de emparelhamento.',
    manual_disarm:'Manual (Desarmado)', manual_arm:'Manual',
    open_sensors:'Sensores abertos', log_detail_disarm:'Sistema desarmado',
    log_detail_armed:'Modo', log_detail_triggered:'Ativação automática',
    alarm_instance:'Instância do alarme',
    log_detail_pin_reset: 'PIN mestre redefinido pelo administrador',
    log_detail_pin_reset_failed: 'Tentativa não autorizada de redefinir o PIN mestre',
    badge_pin_reset: 'PIN Redefinido',
    badge_pin_reset_failed: 'Falha ao Redefinir PIN',
    no_files_uploaded: 'Nenhum arquivo enviado. Envie um plano de fundo usando os controles acima.',
    no_files_uploaded_short: 'Nenhum arquivo enviado.',
    files_count: '{count} arquivos',
    files_count_short: '{count} arq.',
    file_delete_confirm: 'Tem certeza de que deseja excluir "{filename}" permanentemente?',
    use_for_panel: 'Painel',
    use_for_hub: 'Argus',
    delete_btn_title: 'Excluir do armazenamento',
    bg_panel_selected_from_history: 'Plano de fundo do painel selecionado a partir do histórico.',
    bg_hub_selected_from_history: 'Plano de fundo do Argus selecionado a partir do histórico.',
    error_loading_uploaded_files: 'Erro ao carregar o histórico de arquivos.',
    select_profile_title: 'Selecione o seu perfil',
    select_profile_subtitle: 'Acesse seus painéis de segurança e instâncias Argus.',
    exit_to_ha: 'Voltar ao Home Assistant',
    role_argus_admin: 'Administrador do Argus',
    role_argus_user: 'Usuário padrão',
    ha_account_linked: 'Conta do Home Assistant: {name}',
    ha_account_unavailable: 'Vínculo indisponível',
    user_role_label: 'Função Argus',
    delete_user_tooltip: 'Excluir perfil de usuário',
    delete_user_confirm: 'Tem certeza de que deseja excluir "{name}"?',
    cannot_delete_last_admin: 'Não é possível excluir o último administrador.',
    clock_format_label: 'Formato de hora',
    clock_format_desc: 'Escolha como a hora é exibida.',
    clock_auto: 'Automático (Home Assistant)',
    clock_12h: '12 horas (AM/PM)',
    clock_24h: '24 horas',
    unlock_kiosk: 'Desbloquear quiosque',
    first_run_welcome: 'Obrigado por escolher o Argus Home Hub. Bem-vindo(a).',
    first_run_desc: 'Conclua a configuração inicial.',
    first_run_pin_expl: 'O PIN de acesso abre o Argus. O PIN mestre controla o armamento.',
    first_run_skip: 'Pular',
    first_run_start: 'Começar com o Argus',
    first_run_blocked_title: 'Acesso negado',
    first_run_blocked_desc: 'É necessário um administrador do Home Assistant.',
    log_action_first_run_completed: 'Argus inicializado por {user}',
    log_action_fullscreen_unlocked: 'Quiosque desbloqueado por {user}',
    log_action_master_pin_rejected: 'Tentativa incorreta de PIN mestre por {user}',
    log_action_select_profile: 'Perfil selecionado: {user}',
    log_action_verify_access_pin: 'PIN de acesso verificado por {user}',
    log_action_sos: 'Pânico SOS acionado por {user}',
    log_action_stop_sos: 'Pânico SOS interrompido por {user}',
    log_action_save_ui: 'Configurações de UI salvas por {user}',
    log_action_rejected: 'Ação rejeitada',
    unlinked_ha_accounts_title: 'Contas do Home Assistant sem perfil Argus',
    btn_create_argus_profile: 'Criar perfil Argus',
    no_unlinked_ha_accounts: 'Todas as contas do Home Assistant ativas possuem perfil.',
    profile_is_yours: 'Este é o seu perfil',
    profile_needs_pin: 'Perfil de outra pessoa — insira o PIN de acesso',
    profile_no_pin_access: 'Este perfil não tem PIN de acesso. Você não pode abri-lo.',
    ha_role_admin: 'Admin HA',
    ha_role_standard: 'Usuário HA',
    login_btn: 'Entrar',
    cancel_btn: 'Cancelar',
    pin_placeholder: 'PIN de acesso',
    link_ha_user: 'Vincular a Usuário do Home Assistant',
    ha_admin_label: 'Administrador do Home Assistant',
    ha_standard_user_label: 'Usuário padrão do HA',
    role_argus_standard: 'Usuário padrão',
  },
  it: {
    hero_desc:'Sicurezza integrata, controllo accessi, automazioni e HomeKit.',
    instances:'Istanze attive', modes:'Modi', automations:'⚡ Automazioni',
    linked_rules:'Regole collegate ad Argus', create_ha:'+ Crea in HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Impostazioni', change_pin:'PIN Principale', pin_desc:'Codice numerico per armare e disarmare.',
    new_pin:'Nuovo PIN', confirm_pin:'Conferma PIN', update_pin:'Aggiorna PIN',
    current_pin:'PIN attuale', notifications_title:'🔔 Notifiche',
    notif_desc:'Seleziona i dispositivi mobili registrati in HA che riceveranno gli avvisi di Argus.',
    save_notif:'Salva', users_title:'👥 Utenti & Controllo Accessi',
    admin_only:'Solo gli amministratori possono modificare questa sezione.',
    add_user:'Aggiungi utente', username:'Nome utente', user_pin:'PIN utente',
    is_admin:'Amministratore', save_user:'Salva', no_users:'Nessun utente aggiuntivo configurato.',
    homekit_title:'🏠 HomeKit', close:'Chiudi',
    search_placeholder:'Cerca per nome, area o entity_id',
    available:'Disponibili', selected_lbl:'Selezionati', clear:'Cancella', accept:'Accetta',
    introduce_pin:'Inserisci il tuo PIN', pin_modal_desc:'PIN numerico per disarmare Argus',
    confirm:'✓ Conferma', cancel:'Annulla',
    disarmed:'Disarmato', armed_home:'In Casa', armed_away:'Assente',
    armed_night:'Notte', armed_vacation:'Vacanze', triggered:'ALLARME!',
    pending:'In attesa', arming:'Armamento', unavailable:'Non disponibile',
    sensor_section:'Sensori di intrusione', siren_section:'Sirene', thermostat_alert_notif:'🌡️ Avviso temperatura',
    none_selected:'Nessuno selezionato', search_select:'Cerca & seleziona',
    save_mode:'💾 Salva modalità', details_notif:'Notifica allarme',
    activity_log:'📋 Registro Attività',
    log_armed:'Armato', log_disarmed:'Disarmato', log_triggered:'Attivato!',
    log_by:'da', log_sensor:'Sensore', log_no_events:'Nessun evento recente.',
    mode_home:'In Casa', mode_away:'Assente', mode_night:'Notte', mode_vacation:'Vacanze',
    homekit_bridge:'Ponte HomeKit', homekit_not_paired:'Non associato a nessuna casa.',
    homekit_house:'Apple Home', language:'Lingua',
    lang_select_title:'Seleziona Lingua',
    btn_home:'🏠 CASA', btn_away:'🔒 ASSENTE', btn_night:'🌙 NOTTE',
    btn_vacation:'✈️ VACANZE', btn_disarmed:'DISARMATO', btn_sos:'🚨 SOS / PANICO',
    system_armed:'SISTEMA ARMATO', system_disarmed:'SISTEMA DISARMATO',
    home_name_lbl:'Nome della casa', background_lbl:'Sfondo', edit_btn:'✏️ Modifica',
    save_btn:'Salva', backup_title:'Backup & Ripristino',
    backup_desc:'Salva un backup o ripristina uno precedente.',
    export_btn:'📤 Scarica', import_btn:'📥 Ripristina', reset_btn:'⚠️ Ripristina', undo_reset_btn:'↩️ Annulla Ripristino',
    access_title:'Controllo Accessi & Utenti',
    access_desc:'Gestione globale della sicurezza, PIN principale e amministratori.',
    pin_master_title:'PIN Principale', pin_active_yes:'PIN Attivo: Sì', pin_active_no:'PIN Attivo: No',
    select_all:'☑ Tutti', deselect_all:'☐ Nessuno', mqtt_label:'MQTT',
    arm_time_label:'Tempo armato (s)', disarm_time_label:'Ritardo ingresso (s)',
    pin_incorrect:'❌ PIN attuale errato', pin_updated:'✓ PIN Aggiornato', pin_deleted:'✓ PIN Eliminato',
    searching_auto:'↻ Ricerca automazioni...', no_auto_linked:'Nessuna automazione collegata ad Argus.',
    pin_remove_hint:'Per rimuovere il PIN: inserisci quello attuale e lascia vuoti i campi sottostanti.',
    lbl_load_file:'Carica file:', lbl_aesthetic_custom:'Personalizzazione estetica', lbl_uploaded_files:'File caricati sul server',
    bypass_lbl:'🚫 Ignora', lock_if_open:'Blocca se aperto',
    select_btn:'+ Seleziona', add_btn:'+ Aggiungi',
    sensors_to_bypass:'Sensori da ignorare', no_instances:'Nessuna istanza.',
    fullscreen_title:'Schermo intero', sos_slide:'Scorri per attivare SOS',
    sos_confirm_title:'Conferma panico', sos_confirm_text:'Scorri per attivare immediatamente l\'allarme.',
    sos_call:'📞 Chiama i soccorsi',
    home_name_modal_title:'🏡 Nome della casa',
    home_name_modal_desc:'Questo nome appare nel pannello delle istanze e a schermo intero.',
    home_name_label:'Nome della casa', home_name_placeholder:'Casa mia',
    clear_log_btn:'CANCELLA',
    bg_weather:'Meteo animato', bg_none:'Predefinito', bg_panel_none:'Nessuno sfondo', bg_photo:'Una foto', bg_collage:'Collage', bg_video:'Video in loop', bg_panel_title:'Sfondo pannello', bg_hub_title:'Sfondo Argus', bg_sound_opt:'Audio video', bg_image_opt:'Immagine / GIF', bg_hub_default:'Predefinito (Argus)',
    forgot_pin:'PIN dimenticato?', pin_reset_admin_only:'❌ Errore: Solo gli amministratori di Home Assistant possono reimpostare el PIN principale.', pin_reset_confirm:'Sei sicuro di voler reimpostare il PIN principale? Il PIN attuale verrà rimosso e disattivato.',
    temp_auto:'Automatico (sensore locale / termostato / clima)', temp_thermostat:'(termostato)', battery_low:'⚠️ Batteria scarica',
    times_section:'⏱️ Tempi', arm_time:'Armato (s)', disarm_time:'Ritardo entrata (s)',
    save_config:'SALVA CONFIGURAZIONE', never_triggered:'Mai attivato',
    bridge_paired:'Ponte configurato',
    bridge_paired_desc:'Il ponte <b>{bridge}</b> è configurato in Home Assistant. Da qui non è possibile verificare se sia stato aggiunto ad Apple Home né conoscerne il nome.',
    bridge_not_connected:'Ponte non configurato',
    bridge_not_desc:"Abilita l'integrazione HomeKit Bridge in Home Assistant e includi l'entità <code>alarm_control_panel.argus_*</code> per generare un QR di abbinamento.",
    manual_disarm:'Manuale (Disarmato)', manual_arm:'Manuale',
    open_sensors:'Sensori aperti', log_detail_disarm:'Sistema disarmato',
    alarm_instance:'Istanza allarme',
    log_detail_armed:'Modalità', log_detail_triggered:'Attivazione automatica',
    log_detail_pin_reset: "PIN principale reimpostato dall'amministratore",
    log_detail_pin_reset_failed: 'Tentativo non autorizzato di reimpostare il PIN principale',
    badge_pin_reset: 'PIN Reimpostato',
    badge_pin_reset_failed: 'Reimpostazione PIN Fallita',
    no_files_uploaded: 'Nessun file caricato. Carica uno sfondo usando i controlli sopra.',
    no_files_uploaded_short: 'Nessun file caricato.',
    files_count: '{count} file',
    files_count_short: '{count} file',
    file_delete_confirm: 'Sei sicuro di voler eliminare permanentemente "{filename}"?',
    use_for_panel: 'Pannello',
    use_for_hub: 'Argus',
    delete_btn_title: 'Elimina dalla memoria',
    bg_panel_selected_from_history: 'Sfondo del pannello selezionato dalla cronologia.',
    bg_hub_selected_from_history: 'Sfondo di Argus selezionato dalla cronologia.',
    error_loading_uploaded_files: 'Errore durante il caricamento della cronologia dei file.',
    select_profile_title: 'Seleziona il tuo profilo',
    select_profile_subtitle: 'Accedi ai tuoi pannelli di sicurezza e istanze Argus.',
    exit_to_ha: 'Torna a Home Assistant',
    role_argus_admin: 'Amministratore Argus',
    role_argus_user: 'Utente standard',
    ha_account_linked: 'Account Home Assistant: {name}',
    ha_account_unavailable: 'Collegamento non disponibile',
    user_role_label: 'Ruolo Argus',
    delete_user_tooltip: 'Elimina profilo utente',
    delete_user_confirm: 'Sei sicuro di voler eliminare "{name}"?',
    cannot_delete_last_admin: 'Impossibile eliminare l\'ultimo amministratore.',
    clock_format_label: 'Formato ora',
    clock_format_desc: 'Scegli come visualizzare l\'ora.',
    clock_auto: 'Automatico (Home Assistant)',
    clock_12h: '12 ore (AM/PM)',
    clock_24h: '24 ore',
    unlock_kiosk: 'Sblocca chiosco',
    first_run_welcome: 'Grazie per aver scelto Argus Home Hub. Benvenuto/a.',
    first_run_desc: 'Completa la configurazione.',
    first_run_pin_expl: 'Il PIN di accesso apre Argus. Il PIN master controlla l\'armamento.',
    first_run_skip: 'Salta',
    first_run_start: 'Inizia con Argus',
    first_run_blocked_title: 'Accesso negato',
    first_run_blocked_desc: 'È richiesto un amministratore di Home Assistant.',
    log_action_first_run_completed: 'Argus inizializzato da {user}',
    log_action_fullscreen_unlocked: 'Chiosco sbloccato da {user}',
    log_action_master_pin_rejected: 'Tentativo di PIN master errato da {user}',
    log_action_select_profile: 'Profilo selezionato: {user}',
    log_action_verify_access_pin: 'PIN di accesso verificato da {user}',
    log_action_sos: 'Panico SOS attivato da {user}',
    log_action_stop_sos: 'Panico SOS fermato da {user}',
    log_action_save_ui: 'Impostazioni UI salvate da {user}',
    log_action_rejected: 'Azione rifiutata',
    unlinked_ha_accounts_title: 'Account Home Assistant senza profilo Argus',
    btn_create_argus_profile: 'Crea profilo Argus',
    no_unlinked_ha_accounts: 'Tutti gli account Home Assistant attivi hanno un profilo.',
    profile_is_yours: 'Questo è il tuo profilo',
    profile_needs_pin: 'Profilo di un\u2019altra persona — inserisci il PIN di accesso',
    profile_no_pin_access: 'Questo profilo non ha un PIN di accesso. Non puoi aprirlo.',
    ha_role_admin: 'Admin HA',
    ha_role_standard: 'Utente HA',
    login_btn: 'Accedi',
    cancel_btn: 'Annulla',
    pin_placeholder: 'PIN di accesso',
    link_ha_user: 'Collega all\u2019utente Home Assistant',
    ha_admin_label: 'Amministratore Home Assistant',
    ha_standard_user_label: 'Utente HA standard',
    role_argus_standard: 'Utente standard',
  },
  zh: {
    hero_desc:'集成安全、访问控制、自动化和HomeKit。',
    instances:'活跃实例', modes:'模式', automations:'⚡ 自动化',
    linked_rules:'Argus关联规则', create_ha:'+ 在HA中创建',
    no_rules:'', rules_tip:'',
    settings:'⚙️ 设置', change_pin:'主PIN码', pin_desc:'用于布防和撤防的数字代码。',
    new_pin:'新PIN码', confirm_pin:'确认PIN码', update_pin:'更新PIN码',
    current_pin:'当前PIN码', notifications_title:'🔔 通知',
    notif_desc:'选择在HA中注册的移动设备以接收Argus警报。',
    save_notif:'保存', users_title:'👥 用户和访问控制',
    admin_only:'只有管理员才能修改此部分。',
    add_user:'添加用户', username:'用户名', user_pin:'用户PIN码',
    is_admin:'管理员', save_user:'保存', no_users:'未配置额外用户。',
    homekit_title:'🏠 HomeKit', close:'关闭',
    search_placeholder:'按名称、区域或entity_id搜索',
    available:'可用', selected_lbl:'已选择', clear:'清除', accept:'接受',
    introduce_pin:'输入您的PIN码', pin_modal_desc:'撤防Argus的数字PIN码',
    confirm:'✓ 确认', cancel:'取消',
    disarmed:'已撤防', armed_home:'在家', armed_away:'外出',
    armed_night:'夜间', armed_vacation:'度假', triggered:'警报！',
    pending:'等待中', arming:'布防中', unavailable:'不可用',
    sensor_section:'入侵传感器', siren_section:'警报器', thermostat_alert_notif:'🌡️ 温度警报',
    none_selected:'未选择', search_select:'搜索并选择',
    save_mode:'💾 保存模式', details_notif:'警报通知',
    activity_log:'📋 活动日志',
    log_armed:'已布防', log_disarmed:'已撤防', log_triggered:'已触发！',
    log_by:'由', log_sensor:'传感器', log_no_events:'没有最近事件。',
    mode_home:'在家', mode_away:'外出', mode_night:'夜间', mode_vacation:'度假',
    homekit_bridge:'HomeKit桥接', homekit_not_paired:'未与任何家庭关联。',
    homekit_house:'Apple Home', language:'语言',
    lang_select_title:'选择语言',
    btn_home:'🏠 在家', btn_away:'🔒 外出', btn_night:'🌙 夜间',
    btn_vacation:'✈️ 度假', btn_disarmed:'已撤防', btn_sos:'🚨 SOS / 紧急',
    system_armed:'系统已布防', system_disarmed:'系统已撤防',
    home_name_lbl:'家庭名称', background_lbl:'背景', edit_btn:'✏️ 编辑',
    save_btn:'保存', backup_title:'备份与恢复',
    backup_desc:'保存设置备份或恢复之前的设置。',
    export_btn:'📤 下载', import_btn:'📥 恢复', reset_btn:'⚠️ 恢复出厂', undo_reset_btn:'↩️ 撤销重置',
    access_title:'访问控制和用户',
    access_desc:'全局安全管理、主PIN码和管理员。',
    pin_master_title:'主PIN码', pin_active_yes:'PIN激活: 是', pin_active_no:'PIN激活: 否',
    select_all:'☑ 全选', deselect_all:'☐ 全不选', mqtt_label:'MQTT',
    arm_time_label:'布防延迟(s)', disarm_time_label:'进入延迟(s)',
    pin_incorrect:'❌ 当前PIN错误', pin_updated:'✓ PIN已更新', pin_deleted:'✓ PIN已删除',
    searching_auto:'↻ 正在搜索自动化...', no_auto_linked:'没有链接到Argus的自动化。',
    pin_remove_hint:'删除PIN: 输入当前PIN并将下面字段留空。',
    lbl_load_file:'上传文件:', lbl_aesthetic_custom:'美学个性化', lbl_uploaded_files:'服务器上上传的文件',
    bypass_lbl:'🚫 跳过', lock_if_open:'开启时锁定',
    select_btn:'+ 选择', add_btn:'+ 添加',
    sensors_to_bypass:'跳过的传感器', no_instances:'没有实例。',
    fullscreen_title:'全屏', sos_slide:'滑动以激活SOS',
    sos_confirm_title:'确认紧急', sos_confirm_text:'滑动以立即触发警报。',
    sos_call:'📞 拨打紧急服务',
    home_name_modal_title:'🏡 家庭名称',
    home_name_modal_desc:'此名称显示在实例面板和全屏中。',
    home_name_label:'家庭名称', home_name_placeholder:'我的家',
    clear_log_btn:'清除',
    bg_weather:'动画天气', bg_none:'默认', bg_panel_none:'无背景', bg_photo:'单张照片', bg_collage:'拼贴画', bg_video:'循环视频', bg_panel_title:'面板背景', bg_hub_title:'Argus 背景', bg_sound_opt:'视频声音', bg_image_opt:'图片 / GIF', bg_hub_default:'默认 (Argus)',
    forgot_pin:'忘记PIN码？', pin_reset_admin_only:'❌ 错误：只有 Home Assistant 管理员可以重置主 PIN 码。', pin_reset_confirm:'您确定要重置主 PIN 码吗？当前的 PIN 码将被删除并停用。',
    temp_auto:'自动（本地传感器 / 恒温器 / 气候）', temp_thermostat:'(恒温器)', battery_low:'⚠️ 电池不足',
    times_section:'⏱️ 时间', arm_time:'布防延迟(s)', disarm_time:'进入延迟(s)',
    save_config:'保存配置', never_triggered:'从未触发',
    bridge_paired:'桥接已配置',
    bridge_paired_desc:'桥接 <b>{bridge}</b> 已在 Home Assistant 中配置。Home Assistant 无法从这里验证它是否已添加到 Apple Home，也无法提供家庭名称。',
    bridge_not_connected:'桥接未配置',
    bridge_not_desc:'在Home Assistant中启用HomeKit Bridge集成并包含实体<code>alarm_control_panel.argus_*</code>以生成配对QR码。',
    manual_disarm:'手动(已撤防)', manual_arm:'手动',
    open_sensors:'开启的传感器', log_detail_disarm:'系统已撤防',
    alarm_instance:'报警实例',
    log_detail_armed:'模式', log_detail_triggered:'自动激活',
    log_detail_pin_reset: '管理员已重置主PIN码',
    log_detail_pin_reset_failed: '未授权尝试重置主PIN码',
    badge_pin_reset: 'PIN已重置',
    badge_pin_reset_failed: 'PIN重置失败',
    no_files_uploaded: '未上传文件。请使用上方控件上传背景。',
    no_files_uploaded_short: '未上传文件。',
    files_count: '{count} 个文件',
    files_count_short: '{count} 文件',
    file_delete_confirm: '您确定要永久删除 "{filename}" 吗？',
    use_for_panel: '面板',
    use_for_hub: 'Argus',
    delete_btn_title: '从存储中删除',
    bg_panel_selected_from_history: '已从历史记录中选择面板背景。',
    bg_hub_selected_from_history: '已从历史记录中选择Argus背景。',
    error_loading_uploaded_files: '加载文件历史记录出错。',
    select_profile_title: '选择您的个人资料',
    select_profile_subtitle: '访问您的安全面板和 Argus 实例。',
    exit_to_ha: '返回 Home Assistant',
    role_argus_admin: 'Argus 管理员',
    role_argus_user: '标准用户',
    ha_account_linked: 'Home Assistant 账户：{name}',
    ha_account_unavailable: '绑定不可用',
    user_role_label: 'Argus 角色',
    delete_user_tooltip: '删除用户个人资料',
    delete_user_confirm: '您确定要删除\u201c{name}\u201d吗？',
    cannot_delete_last_admin: '无法删除最后一个管理员。',
    clock_format_label: '时间格式',
    clock_format_desc: '选择时间的显示方式。',
    clock_auto: '自动（Home Assistant）',
    clock_12h: '12 小时制 (AM/PM)',
    clock_24h: '24 小时制',
    unlock_kiosk: '解锁自助服务终端',
    first_run_welcome: '感谢选择 Argus Home Hub。欢迎。',
    first_run_desc: '完成设置以保护您的家。',
    first_run_pin_expl: '访问 PIN 打开 Argus。主 PIN 控制撤防和布防。',
    first_run_skip: '跳过',
    first_run_start: '开始使用 Argus',
    first_run_blocked_title: '拒绝访问',
    first_run_blocked_desc: '首次设置 Argus 需要 Home Assistant 管理员。',
    log_action_first_run_completed: 'Argus 已由 {user} 初始化',
    log_action_fullscreen_unlocked: '自助服务终端已由 {user} 解锁',
    log_action_master_pin_rejected: '{user} 的主 PIN 尝试不正确',
    log_action_select_profile: '已选择个人资料：{user}',
    log_action_verify_access_pin: '访问 PIN 已由 {user} 验证',
    log_action_sos: 'SOS 紧急情况由 {user} 触发',
    log_action_stop_sos: 'SOS 紧急情况由 {user} 停止',
    log_action_save_ui: 'UI 设置已由 {user} 保存',
    log_action_rejected: '操作已被拒绝',
    unlinked_ha_accounts_title: '没有 Argus 个人资料的 Home Assistant 账户',
    btn_create_argus_profile: '创建 Argus 个人资料',
    no_unlinked_ha_accounts: '所有活跃的 Home Assistant 账户都有个人资料。',
    profile_is_yours: '这是您的个人资料',
    profile_needs_pin: '其他人的个人资料 — 请输入访问 PIN',
    profile_no_pin_access: '该个人资料没有访问 PIN。您无法打开它。',
    ha_role_admin: 'HA 管理员',
    ha_role_standard: 'HA 用户',
    login_btn: '登录',
    cancel_btn: '取消',
    pin_placeholder: '访问 PIN',
    link_ha_user: '关联至 Home Assistant 用户',
    ha_admin_label: 'Home Assistant 管理员',
    ha_standard_user_label: '标准 HA 用户',
    role_argus_standard: '标准用户',
  },
  ru: {
    hero_desc:'Комплексная безопасность, контроль доступа, автоматизация и HomeKit.',
    instances:'Активные экземпляры', modes:'Режимы', automations:'⚡ Автоматизации',
    linked_rules:'Правила Argus', create_ha:'+ Создать в HA',
    no_rules:'', rules_tip:'',
    settings:'⚙️ Настройки', change_pin:'Мастер PIN', pin_desc:'Цифровой код для постановки и снятия с охраны.',
    new_pin:'Новый PIN', confirm_pin:'Подтвердить PIN', update_pin:'Обновить PIN',
    current_pin:'Текущий PIN', notifications_title:'🔔 Уведомления',
    notif_desc:'Выберите мобильные устройства, зарегистрированные в HA для получения оповещений Argus.',
    save_notif:'Сохранить', users_title:'👥 Пользователи и контроль доступа',
    admin_only:'Только администраторы могут изменять этот раздел.',
    add_user:'Добавить пользователя', username:'Имя пользователя', user_pin:'PIN пользователя',
    is_admin:'Администратор', save_user:'Сохранить', no_users:'Дополнительные пользователи не настроены.',
    homekit_title:'🏠 HomeKit', close:'Закрыть',
    search_placeholder:'Поиск по имени, зоне или entity_id',
    available:'Доступные', selected_lbl:'Выбранные', clear:'Очистить', accept:'Принять',
    introduce_pin:'Введите PIN', pin_modal_desc:'Цифровой PIN для снятия с охраны Argus',
    confirm:'✓ Подтвердить', cancel:'Отмена',
    disarmed:'Снято с охраны', armed_home:'Дома', armed_away:'Ушёл',
    armed_night:'Ночь', armed_vacation:'Отпуск', triggered:'ТРЕВОГА!',
    pending:'Ожидание', arming:'Постановка', unavailable:'Недоступно',
    sensor_section:'Датчики вторжения', siren_section:'Сирены', thermostat_alert_notif:'🌡️ Температурный сигнал',
    none_selected:'Не выбрано', search_select:'Поиск и выбор',
    save_mode:'💾 Сохранить режим', details_notif:'Уведомление тревоги',
    activity_log:'📋 Журнал активности',
    log_armed:'Поставлено', log_disarmed:'Снято', log_triggered:'Сработало!',
    log_by:'от', log_sensor:'Датчик', log_no_events:'Нет последних событий.',
    mode_home:'Дома', mode_away:'Ушёл', mode_night:'Ночь', mode_vacation:'Отпуск',
    homekit_bridge:'Мост HomeKit', homekit_not_paired:'Не связано ни с каким домом.',
    homekit_house:'Apple Home', language:'Язык',
    lang_select_title:'Выбрать язык',
    btn_home:'🏠 ДОМА', btn_away:'🔒 УШЁЛ', btn_night:'🌙 НОЧЬ',
    btn_vacation:'✈️ ОТПУСК', btn_disarmed:'СНЯТО', btn_sos:'🚨 SOS / ТРЕВОГА',
    system_armed:'СИСТЕМА ПОСТАВЛЕНА', system_disarmed:'СИСТЕМА СНЯТА',
    home_name_lbl:'Название дома', background_lbl:'Фон', edit_btn:'✏️ Редактировать',
    save_btn:'Сохранить', backup_title:'Резервная копия',
    backup_desc:'Сохраните резервную копию или восстановите предыдущую.',
    export_btn:'📤 Скачать', import_btn:'📥 Восстановить', reset_btn:'⚠️ Сброс', undo_reset_btn:'↩️ Отменить сброс',
    access_title:'Контроль доступа и пользователи',
    access_desc:'Глобальная безопасность, мастер PIN и администраторы.',
    pin_master_title:'Мастер PIN', pin_active_yes:'PIN активен: Да', pin_active_no:'PIN активен: Нет',
    select_all:'☑ Все', deselect_all:'☐ Ничего', mqtt_label:'MQTT',
    arm_time_label:'Время взятия (с)', disarm_time_label:'Задержка входа (с)',
    pin_incorrect:'❌ Неверный текущий PIN', pin_updated:'✓ PIN Обновлен', pin_deleted:'✓ PIN Удален',
    searching_auto:'↻ Поиск автоматизаций...', no_auto_linked:'Нет автоматизаций, связанных с Argus.',
    pin_remove_hint:'Для удаления PIN: введите текущий и оставьте поля пустыми.',
    lbl_load_file:'Загрузить файл:', lbl_aesthetic_custom:'Эстетическая персонализация', lbl_uploaded_files:'Загруженные файлы на сервере',
    bypass_lbl:'🚫 Обход', lock_if_open:'Блокировать если открыто',
    select_btn:'+ Выбрать', add_btn:'+ Добавить',
    sensors_to_bypass:'Датчики для обхода', no_instances:'Нет экземпляров.',
    fullscreen_title:'Полный экран', sos_slide:'Проведите для активации SOS',
    sos_confirm_title:'Подтвердить тревогу', sos_confirm_text:'Проведите для немедленной активации тревоги.',
    sos_call:'📞 Вызвать экстренные службы',
    home_name_modal_title:'🏡 Название дома',
    home_name_modal_desc:'Это имя отображается в панели экземпляров и в полноекранном режиме.',
    home_name_label:'Название дома', home_name_placeholder:'Мой дом',
    clear_log_btn:'ОЧИСТИТЬ',
    bg_weather:'Анимированная погода', bg_none:'По умолчанию', bg_panel_none:'Без фона', bg_photo:'Одно фото', bg_collage:'Коллаж', bg_video:'Зацикленное видео', bg_panel_title:'Фон панели', bg_hub_title:'Фон Argus', bg_sound_opt:'Звук видео', bg_image_opt:'Изображение / GIF', bg_hub_default:'По умолчанию (Argus)',
    forgot_pin:'Забыли PIN?', pin_reset_admin_only:'❌ Ошибка: Только администраторы Home Assistant могут сбросить мастер-PIN.', pin_reset_confirm:'Вы уверены, что хотите сбросить мастер-PIN? Текущий PIN-код будет удален и отключен.',
    temp_auto:'Авто (лок. датчик / термостат / климат)', temp_thermostat:'(термостат)', battery_low:'⚠️ Низкий заряд',
    times_section:'⏱️ Времена', arm_time:'Постановка (s)', disarm_time:'Задержка входа (s)',
    save_config:'СОХРАНИТЬ КОНФИГУРАЦИЮ', never_triggered:'Никогда не срабатывало',
    bridge_paired:'Мост настроен',
    bridge_paired_desc:'Мост <b>{bridge}</b> настроен в Home Assistant. Здесь нельзя проверить, добавлен ли он в Apple Home, или узнать его название.',
    bridge_not_connected:'Мост не настроен',
    bridge_not_desc:'Включите интеграцию HomeKit Bridge в Home Assistant и добавьте <code>alarm_control_panel.argus_*</code> для QR сопряжения.',
    manual_disarm:'Вручную (Снято)', manual_arm:'Вручную',
    open_sensors:'Открытые датчики', log_detail_disarm:'Система снята',
    alarm_instance:'Экземпляр тревоги',
    log_detail_armed:'Режим', log_detail_triggered:'Автоматическая активация',
    log_detail_pin_reset: 'Мастер-PIN сброшен администратором',
    log_detail_pin_reset_failed: 'Несанкционированная попытка сбросить мастер-PIN',
    badge_pin_reset: 'PIN Сброшен',
    badge_pin_reset_failed: 'Ошибка Сброса PIN',
    no_files_uploaded: 'Нет загруженных файлов. Загрузите фон с помощью элементов управления выше.',
    no_files_uploaded_short: 'Нет загруженных файлов.',
    files_count: '{count} файлов',
    files_count_short: '{count} файл.',
    file_delete_confirm: 'Вы уверены, что хотите навсегда удалить «{filename}»?',
    use_for_panel: 'Панель',
    use_for_hub: 'Argus',
    delete_btn_title: 'Удалить из хранилища',
    bg_panel_selected_from_history: 'Фон панели выбран из истории.',
    bg_hub_selected_from_history: 'Фон Argus выбран из истории.',
    error_loading_uploaded_files: 'Ошибка при загрузке истории файлов.',
    select_profile_title: 'Выберите ваш профиль',
    select_profile_subtitle: 'Доступ к вашим панелям безопасности и экземплярам Argus.',
    exit_to_ha: 'Вернуться в Home Assistant',
    role_argus_admin: 'Администратор Argus',
    role_argus_user: 'Стандартный пользователь',
    ha_account_linked: 'Учетная запись Home Assistant: {name}',
    ha_account_unavailable: 'Привязка недоступна',
    user_role_label: 'Роль Argus',
    delete_user_tooltip: 'Удалить профиль пользователя',
    delete_user_confirm: 'Вы уверены, что хотите удалить "{name}"?',
    cannot_delete_last_admin: 'Нельзя удалить последнего администратора.',
    clock_format_label: 'Формат времени',
    clock_format_desc: 'Выберите способ отображения времени.',
    clock_auto: 'Автоматически (Home Assistant)',
    clock_12h: '12-часовой (AM/PM)',
    clock_24h: '24-часовой',
    unlock_kiosk: 'Разблокировать киоск',
    first_run_welcome: 'Спасибо за выбор Argus Home Hub. Добро пожаловать.',
    first_run_desc: 'Завершите настройку для защиты вашего дома.',
    first_run_pin_expl: 'PIN-код доступа открывает Argus. Мастер PIN-код управляет охраной.',
    first_run_skip: 'Пропустить',
    first_run_start: 'Начать работу с Argus',
    first_run_blocked_title: 'Доступ запрещен',
    first_run_blocked_desc: 'Для первичной настройки Argus требуется администратор Home Assistant.',
    log_action_first_run_completed: 'Argus инициализирован пользователем {user}',
    log_action_fullscreen_unlocked: 'Киоск разблокирован пользователем {user}',
    log_action_master_pin_rejected: 'Неверная попытка ввода мастер-PIN {user}',
    log_action_select_profile: 'Выбран профиль: {user}',
    log_action_verify_access_pin: 'PIN-код доступа проверен {user}',
    log_action_sos: 'SOS паника вызвана пользователем {user}',
    log_action_stop_sos: 'SOS паника остановлена пользователем {user}',
    log_action_save_ui: 'Настройки UI сохранены пользователем {user}',
    log_action_rejected: 'Действие отклонено',
    unlinked_ha_accounts_title: 'Учетные записи Home Assistant без профиля Argus',
    btn_create_argus_profile: 'Создать профиль Argus',
    no_unlinked_ha_accounts: 'Все активные учетные записи Home Assistant имеют профиль.',
    profile_is_yours: 'Это ваш профиль',
    profile_needs_pin: 'Профиль другого пользователя — введите PIN доступа',
    profile_no_pin_access: 'У этого профиля нет PIN доступа. Вы не можете его открыть.',
    ha_role_admin: 'Админ HA',
    ha_role_standard: 'Пользователь HA',
    login_btn: 'Войти',
    cancel_btn: 'Отмена',
    pin_placeholder: 'PIN доступа',
    link_ha_user: 'Связать с пользователем Home Assistant',
    ha_admin_label: 'Администратор Home Assistant',
    ha_standard_user_label: 'Стандартный пользователь HA',
    role_argus_standard: 'Стандартный пользователь',
  },
};

// Text that is shared by controls created dynamically. Keeping this separate
// from the original dictionaries makes it much harder for a new UI feature to
// accidentally ship in only one language.
const EXTRA_TEXTS = {
  es: { use_ha_language:'Usar idioma de Home Assistant', emergency_number_label:'🚨 Número local de emergencias', emergency_help:'Configúralo según la ubicación del hogar (p. ej., Costa Rica: 911; España: 112). Se incluirá en las alertas SOS.', sos_actions:'🚨 Acciones SOS', sos_select_outputs:'Seleccionar luces, sirenas o scripts', sos_outputs_help:'Estos dispositivos se activarán siempre al usar SOS, incluso con Argus desarmado.', sos_no_outputs:'Sin dispositivos seleccionados', sos_call_help:'Si este equipo no admite llamadas, Argus enviará una alerta urgente a los dispositivos móviles configurados.', sos_stop:'🛑 DETENER PÁNICO', customize:'Personalizar', done:'Listo', sos_activated:'SOS activado', sos_call_confirm:'¿Quieres llamar ahora a emergencias ({number})?', sos_error:'No se pudo activar el SOS: {error}', no_alarm_instance:'No hay una instancia de alarma disponible', panic_state_unknown:'No se pudo determinar el estado anterior del pánico. Desarma o rearma manualmente.', panic_stopped:'Pánico detenido; restaurado a {state}', panic_stop_error:'No se pudo detener el pánico: {error}', selector_panic:'🚨 Acciones SOS', status_open:'Abierto', status_closed:'Cerrado', status_idle:'En reposo', status_recording:'Grabando', status_home:'En casa', status_away:'Fuera', no_results:'Sin resultados', user_required:'Nombre y PIN requeridos', generic_error:'Error: {error}', clear_history_confirm:'¿Seguro que quieres borrar todo el historial?', export_error:'Error al exportar: {error}', invalid_config:'Archivo de configuración no válido.', import_success:'Configuración restaurada con éxito. Recargando...', import_error:'Error al importar: {error}', file_read_error:'No se pudo leer el archivo.', reset_confirm:'¿Estás seguro de que deseas restablecer Argus a sus valores de fábrica? Perderás todas tus configuraciones, PINs y modos.', reset_success:'Argus restablecido. Tienes unos segundos para deshacer si cambias de opinión, o simplemente recarga la página para aplicar los cambios.', reset_error:'Error al restablecer: {error}', undo_success:'Restablecimiento deshecho con éxito.', undo_error:'Error al deshacer: {error}', url_placeholder:'URL del fondo...', loading:'Cargando...', delete:'Borrar', fullscreen_title:'Pantalla completa', home_default:'Mi Casa', home_fallback:'Hogar', user_default:'Usuario', temp_notification_title:'Argus — Alerta de Temperatura', action_failed:'No se pudo realizar la acción', cannot_arm:'No se puede armar', open_sensors_explain:'Los siguientes sensores están abiertos:\n{names}\n\nCiérralos antes de armar, o activa \u201cOmitir\u201d en el sensor.', pin_disarm_error:'PIN incorrecto o error al desarmar', notification_disarmed:'{user} desarmó el sistema.', notification_armed:'{user} activó el modo {mode}.', upload_error:'Falló la subida.', delete_file_error:'No se pudo eliminar el archivo: {error}', file_choice:'\u201c{file}\u201d\n\n¿Usar como imagen estática (Aceptar) o como video animado (Cancelar)?\n\n• Aceptar → Imagen estática\n• Cancelar → Video animado', first_run_blocked_title:'Acceso denegado', first_run_blocked_desc:'Se requiere un administrador de Home Assistant para configurar Argus por primera vez.', first_run_welcome:'Gracias por elegir Argus Home Hub. Bienvenido/a.', first_run_desc:'Complete la configuración para proteger su hogar.', first_run_pin_expl:'El PIN de acceso abre Argus. El PIN maestro controla el armado y desarmado.', first_run_skip:'Omitir por ahora', first_run_start:'Comenzar con Argus' },
  en: { use_ha_language:'Use Home Assistant language', emergency_number_label:'🚨 Local emergency number', emergency_help:'Configure it for the home location (e.g., Costa Rica: 911; Spain: 112). It will be included in SOS alerts.', sos_actions:'🚨 SOS actions', sos_select_outputs:'Select lights, sirens, or scripts', sos_outputs_help:'These devices will always activate when SOS is used, even while Argus is disarmed.', sos_no_outputs:'No devices selected', sos_call_help:'If this device cannot place calls, Argus will send an urgent alert to the configured mobile devices.', sos_stop:'🛑 STOP PANIC', customize:'Customize', done:'Done', sos_activated:'SOS activated', sos_call_confirm:'Call emergency services now ({number})?', sos_error:'Could not activate SOS: {error}', no_alarm_instance:'No alarm instance is available', panic_state_unknown:'The prior panic state could not be determined. Disarm or arm manually.', panic_stopped:'Panic stopped; restored to {state}', panic_stop_error:'Could not stop panic: {error}', selector_panic:'🚨 SOS actions', status_open:'Open', status_closed:'Closed', status_idle:'Idle', status_recording:'Recording', status_home:'Home', status_away:'Away', no_results:'No results', user_required:'Name and PIN are required', generic_error:'Error: {error}', clear_history_confirm:'Delete the entire activity history?', export_error:'Export failed: {error}', invalid_config:'Invalid configuration file.', import_success:'Configuration restored successfully. Reloading…', import_error:'Import failed: {error}', file_read_error:'Could not read the file.', reset_confirm:'Reset Argus to factory settings? All configurations, PINs, and modes will be lost.', reset_success:'Argus was reset. You have a few seconds to undo it, or reload the page to apply the changes.', reset_error:'Reset failed: {error}', undo_success:'Reset undone successfully.', undo_error:'Could not undo reset: {error}', url_placeholder:'Background URL…', loading:'Loading…', delete:'Delete', fullscreen_title:'Full screen', home_default:'My Home', home_fallback:'Home', user_default:'User', temp_notification_title:'Argus — Temperature Alert', action_failed:'Action could not be completed', cannot_arm:'Cannot arm', open_sensors_explain:'The following sensors are open:\n{names}\n\nClose them before arming, or enable \u201cBypass\u201d on the sensor.', pin_disarm_error:'Incorrect PIN or error while disarming', notification_disarmed:'{user} disarmed the system.', notification_armed:'{user} activated {mode} mode.', upload_error:'Upload failed.', delete_file_error:'Could not delete the file: {error}', file_choice:'\u201c{file}\u201d\n\nUse as a static image (OK) or an animated video (Cancel)?\n\n• OK → Static image\n• Cancel → Animated video', first_run_blocked_title:'Access Denied', first_run_blocked_desc:'A Home Assistant administrator is required to configure Argus for the first time.', first_run_welcome:'Thank you for choosing Argus Home Hub. Welcome.', first_run_desc:'Complete setup to secure your home.', first_run_pin_expl:'The access PIN opens Argus. The master PIN controls arming and disarming.', first_run_skip:'Skip for now', first_run_start:'Start with Argus' },
  fr: { use_ha_language:'Utiliser la langue de Home Assistant', emergency_number_label:'🚨 Numéro d\u2019urgence local', emergency_help:'Configurez-le pour le domicile (ex. Costa Rica : 911 ; Espagne : 112). Il sera inclus dans les alertes SOS.', sos_actions:'🚨 Actions SOS', sos_select_outputs:'Sélectionner lumières, sirènes ou scripts', sos_outputs_help:'Ces appareils s\u2019activeront toujours avec SOS, même si Argus est désarmé.', sos_no_outputs:'Aucun appareil sélectionné', sos_call_help:'Si cet appareil ne peut pas appeler, Argus enverra une alerte urgente aux appareils mobiles configurés.', sos_stop:'🛑 ARRÊTER LA PANIQUE', customize:'Personnaliser', done:'Terminé', sos_activated:'SOS activé', sos_call_confirm:'Appeler les urgences maintenant ({number}) ?', sos_error:'Impossible d\u2019activer SOS : {error}', no_alarm_instance:'Aucune instance d\u2019alarme disponible', panic_state_unknown:'L\u2019état antérieur de la panique est inconnu. Armez ou désarmez manuellement.', panic_stopped:'Panique arrêtée ; rétablie à {state}', panic_stop_error:'Impossible d\u2019arrêter la panique : {error}', selector_panic:'🚨 Actions SOS', status_open:'Ouvert', status_closed:'Fermé', status_idle:'Au repos', status_recording:'Enregistrement', status_home:'Maison', status_away:'Absent', no_results:'Aucun résultat', user_required:'Nom et PIN requis', generic_error:'Erreur : {error}', clear_history_confirm:'Supprimer tout l\u2019historique d\u2019activité ?', export_error:'Échec de l\u2019exportation : {error}', invalid_config:'Fichier de configuration invalide.', import_success:'Configuration restaurée. Rechargement…', import_error:'Échec de l\u2019importation : {error}', file_read_error:'Impossible de lire le fichier.', reset_confirm:'Réinitialiser Argus ? Toutes les configurations, PIN et modes seront perdus.', reset_success:'Argus a été réinitialisé. Vous avez quelques secondes pour annuler.', reset_error:'Échec de la réinitialisation : {error}', undo_success:'Réinitialisation annulée.', undo_error:'Impossible d\u2019annuler : {error}', url_placeholder:'URL de l\u2019arrière-plan…', loading:'Chargement…', delete:'Supprimer', fullscreen_title:'Plein écran', home_default:'Ma maison', home_fallback:'Maison', user_default:'Utilisateur', temp_notification_title:'Argus — Alerte de température', action_failed:'Action impossible', cannot_arm:'Impossible d\u2019armer', open_sensors_explain:'Les capteurs suivants sont ouverts :\n{names}\n\nFermez-les avant d\u2019armer ou activez « Ignorer ». ', pin_disarm_error:'PIN incorrect ou erreur de désarmement', notification_disarmed:'{user} a désarmé le système.', notification_armed:'{user} a activé le mode {mode}.', upload_error:'Échec du téléversement.', delete_file_error:'Impossible de supprimer le fichier : {error}', file_choice:'« {file} »\n\nUtiliser comme image fixe (OK) ou vidéo animée (Annuler) ?', first_run_blocked_title:'Accès refusé', first_run_blocked_desc:'Un administrateur Home Assistant est requis pour configurer Argus pour la première fois.', first_run_welcome:'Merci d\'avoir choisi Argus Home Hub. Bienvenue.', first_run_desc:'Terminez la configuration pour sécuriser votre domicile.', first_run_pin_expl:'Le code d\'accès ouvre Argus. Le code maître contrôle l\'armement.', first_run_skip:'Ignorer pour l\'instant', first_run_start:'Commencer avec Argus' },
  pt: { use_ha_language:'Usar idioma do Home Assistant', emergency_number_label:'🚨 Número local de emergência', emergency_help:'Configure para a localização da casa (ex.: Costa Rica: 911; Espanha: 112). Será incluído nos alertas SOS.', sos_actions:'🚨 Ações SOS', sos_select_outputs:'Selecionar luzes, sirenes ou scripts', sos_outputs_help:'Estes dispositivos sempre serão ativados ao usar SOS, mesmo com Argus desarmado.', sos_no_outputs:'Nenhum dispositivo selecionado', sos_call_help:'Se este dispositivo não puder ligar, o Argus enviará um alerta urgente aos dispositivos móveis configurados.', sos_stop:'🛑 PARAR PÂNICO', customize:'Personalizar', done:'Concluído', sos_activated:'SOS ativado', sos_call_confirm:'Ligar para emergência agora ({number})?', sos_error:'Não foi possível ativar SOS: {error}', no_alarm_instance:'Nenhuma instância de alarme disponível', panic_state_unknown:'Não foi possível determinar o estado anterior do pânico. Arme ou desarme manualmente.', panic_stopped:'Pânico parado; restaurado para {state}', panic_stop_error:'Não foi possível parar o pânico: {error}', selector_panic:'🚨 Ações SOS', status_open:'Aberto', status_closed:'Fechado', status_idle:'Em repouso', status_recording:'Gravando', status_home:'Em casa', status_away:'Fora', no_results:'Sem resultados', user_required:'Nome e PIN são obrigatórios', generic_error:'Erro: {error}', clear_history_confirm:'Excluir todo o histórico de atividade?', export_error:'Erro ao exportar: {error}', invalid_config:'Arquivo de configuração inválido.', import_success:'Configuração restaurada. Recarregando…', import_error:'Erro ao importar: {error}', file_read_error:'Não foi possível ler o arquivo.', reset_confirm:'Restaurar Argus aos padrões de fábrica? Todas as configurações, PINs e modos serão perdidos.', reset_success:'Argus foi restaurado. Você tem alguns segundos para desfazer.', reset_error:'Erro ao restaurar: {error}', undo_success:'Restauração desfeita.', undo_error:'Erro ao desfazer: {error}', url_placeholder:'URL do fundo…', loading:'Carregando…', delete:'Excluir', fullscreen_title:'Tela cheia', home_default:'Minha Casa', home_fallback:'Casa', user_default:'Usuário', temp_notification_title:'Argus — Alerta de Temperatura', action_failed:'Não foi possível realizar a ação', cannot_arm:'Não é possível armar', open_sensors_explain:'Os seguintes sensores estão abertos:\n{names}\n\nFeche-os antes de armar ou ative \u201cIgnorar\u201d.', pin_disarm_error:'PIN incorreto ou erro ao desarmar', notification_disarmed:'{user} desarmou o sistema.', notification_armed:'{user} ativou o modo {mode}.', upload_error:'Falha no envio.', delete_file_error:'Não foi possível excluir o arquivo: {error}', file_choice:'\u201c{file}\u201d\n\nUsar como imagem estática (OK) ou vídeo animado (Cancelar)?', first_run_blocked_title:'Acesso negado', first_run_blocked_desc:'É necessário um administrador do Home Assistant para configurar o Argus pela primeira vez.', first_run_welcome:'Obrigado por escolher o Argus Home Hub. Bem-vindo(a).', first_run_desc:'Conclua a configuração para proteger sua casa.', first_run_pin_expl:'O PIN de acesso abre o Argus. O PIN mestre controla armar e desarmar.', first_run_skip:'Ignorar por agora', first_run_start:'Começar com Argus' },
  it: { use_ha_language:'Usa la lingua di Home Assistant', emergency_number_label:'🚨 Numero di emergenza locale', emergency_help:'Configurarlo per la posizione della casa (es. Costa Rica: 911; Spagna: 112). Sarà incluso negli avvisi SOS.', sos_actions:'🚨 Azioni SOS', sos_select_outputs:'Seleziona luci, sirene o script', sos_outputs_help:'Questi dispositivi saranno sempre attivati con SOS, anche se Argus è disarmato.', sos_no_outputs:'Nessun dispositivo selezionato', sos_call_help:'Se questo dispositivo non può effettuare chiamate, Argus invierà un avviso urgente ai dispositivi mobili configurati.', sos_stop:'🛑 FERMA PANICO', customize:'Personalizza', done:'Fine', sos_activated:'SOS attivato', sos_call_confirm:'Chiamare ora i servizi di emergenza ({number})?', sos_error:'Impossibile attivare SOS: {error}', no_alarm_instance:'Nessuna istanza di allarme disponibile', panic_state_unknown:'Impossibile determinare lo stato precedente del panico. Armare o disarmare manualmente.', panic_stopped:'Panico fermato; ripristinato a {state}', panic_stop_error:'Impossibile fermare il panico: {error}', selector_panic:'🚨 Azioni SOS', status_open:'Aperto', status_closed:'Chiuso', status_idle:'Inattivo', status_recording:'Registrazione', status_home:'Casa', status_away:'Fuori', no_results:'Nessun risultato', user_required:'Nome e PIN obbligatori', generic_error:'Errore: {error}', clear_history_confirm:'Eliminare tutta la cronologia attività?', export_error:'Esportazione non riuscita: {error}', invalid_config:'File di configurazione non valido.', import_success:'Configurazione ripristinata. Ricaricamento…', import_error:'Importazione non riuscita: {error}', file_read_error:'Impossibile leggere il file.', reset_confirm:'Ripristinare Argus alle impostazioni di fabbrica? Configurazioni, PIN e modalità saranno persi.', reset_success:'Argus è stato ripristinato. Hai alcuni secondi per annullare.', reset_error:'Ripristino non riuscito: {error}', undo_success:'Ripristino annullato.', undo_error:'Impossibile annullare: {error}', url_placeholder:'URL dello sfondo…', loading:'Caricamento…', delete:'Elimina', fullscreen_title:'Schermo intero', home_default:'Casa mia', home_fallback:'Casa', user_default:'Utente', temp_notification_title:'Argus — Avviso temperatura', action_failed:'Impossibile eseguire l\u2019azione', cannot_arm:'Impossibile armare', open_sensors_explain:'I seguenti sensori sono aperti:\n{names}\n\nChiudili prima di armare o abilita \u201cIgnora\u201d.', pin_disarm_error:'PIN errato o errore durante il disarmo', notification_disarmed:'{user} ha disarmato il sistema.', notification_armed:'{user} ha attivato la modalità {mode}.', upload_error:'Caricamento non riuscito.', delete_file_error:'Impossibile eliminare il file: {error}', file_choice:'\u201c{file}\u201d\n\nUsare come immagine statica (OK) o video animato (Annulla)?', first_run_blocked_title:'Accesso negato', first_run_blocked_desc:'È necessario un amministratore di Home Assistant per configurare Argus per la prima volta.', first_run_welcome:'Grazie per aver scelto Argus Home Hub. Benvenuto/a.', first_run_desc:'Completa la configurazione per proteggere la tua casa.', first_run_pin_expl:'Il PIN di accesso apre Argus. Il PIN master controlla l\'inserimento e il disinserimento.', first_run_skip:'Salta per ora', first_run_start:'Inizia con Argus' },
  zh: { use_ha_language:'使用 Home Assistant 语言', emergency_number_label:'🚨 本地紧急号码', emergency_help:'请按家庭所在地设置（例如哥斯达黎加：911；西班牙：112）。该号码将包含在 SOS 警报中。', sos_actions:'🚨 SOS 操作', sos_select_outputs:'选择灯、警报器或脚本', sos_outputs_help:'即使 Argus 已撤防，使用 SOS 时这些设备也会始终启动。', sos_no_outputs:'未选择设备', sos_call_help:'如果该设备无法拨号，Argus 将向已配置的移动设备发送紧急警报。', sos_stop:'🛑 停止紧急状态', customize:'自定义', done:'完成', sos_activated:'SOS 已激活', sos_call_confirm:'现在拨打紧急服务电话 ({number})？', sos_error:'无法激活 SOS：{error}', no_alarm_instance:'没有可用的警报实例', panic_state_unknown:'无法确定紧急状态之前的状态。请手动布防或撤防。', panic_stopped:'紧急状态已停止；恢复为 {state}', panic_stop_error:'无法停止紧急状态：{error}', selector_panic:'🚨 SOS 操作', status_open:'打开', status_closed:'关闭', status_idle:'空闲', status_recording:'录制中', status_home:'在家', status_away:'离家', no_results:'无结果', user_required:'需要姓名和 PIN', generic_error:'错误：{error}', clear_history_confirm:'删除全部活动历史记录？', export_error:'导出失败：{error}', invalid_config:'配置文件无效。', import_success:'配置已恢复。正在重新加载…', import_error:'导入失败：{error}', file_read_error:'无法读取文件。', reset_confirm:'将 Argus 恢复为出厂设置？所有配置、PIN 和模式将丢失。', reset_success:'Argus 已重置。你有几秒钟可以撤销。', reset_error:'重置失败：{error}', undo_success:'已撤销重置。', undo_error:'无法撤销重置：{error}', url_placeholder:'背景 URL…', loading:'正在加载…', delete:'删除', fullscreen_title:'全屏', home_default:'我的家', home_fallback:'家', user_default:'用户', temp_notification_title:'Argus — 温度警报', action_failed:'无法完成操作', cannot_arm:'无法布防', open_sensors_explain:'以下传感器处于打开状态：\n{names}\n\n请在布防前关闭它们，或启用\u201c跳过\u201d。', pin_disarm_error:'PIN 错误或撤防时出错', notification_disarmed:'{user} 已撤防系统。', notification_armed:'{user} 已激活 {mode} 模式。', upload_error:'上传失败。', delete_file_error:'无法删除文件：{error}', file_choice:'\u201c{file}\u201d\n\n用作静态图片（确定）还是动画视频（取消）？', first_run_blocked_title:'拒绝访问', first_run_blocked_desc:'首次配置 Argus 需要 Home Assistant 管理员。', first_run_welcome:'感谢您选择 Argus Home Hub。欢迎。', first_run_desc:'完成设置以保护您的家庭。', first_run_pin_expl:'访问 PIN 用于打开 Argus。主 PIN 控制布防和撤防。', first_run_skip:'暂时跳过', first_run_start:'开始使用 Argus' },
  ru: { use_ha_language:'Использовать язык Home Assistant', emergency_number_label:'🚨 Местный номер экстренной службы', emergency_help:'Настройте для местоположения дома (например, Коста-Рика: 911; Испания: 112). Номер будет включён в SOS-оповещения.', sos_actions:'🚨 Действия SOS', sos_select_outputs:'Выбрать свет, сирены или сценарии', sos_outputs_help:'Эти устройства всегда будут включаться при SOS, даже когда Argus снят с охраны.', sos_no_outputs:'Устройства не выбраны', sos_call_help:'Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.', sos_stop:'🛑 ОСТАНОВИТЬ ТРЕВОГУ', customize:'Настроить', done:'Готово', sos_activated:'SOS активирован', sos_call_confirm:'Позвонить в экстренную службу ({number})?', sos_error:'Не удалось активировать SOS: {error}', no_alarm_instance:'Нет доступного экземпляра сигнализации', panic_state_unknown:'Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.', panic_stopped:'Тревога остановлена; восстановлено состояние {state}', panic_stop_error:'Не удалось остановить тревогу: {error}', selector_panic:'🚨 Действия SOS', status_open:'Открыто', status_closed:'Закрыто', status_idle:'Ожидание', status_recording:'Запись', status_home:'Дома', status_away:'Вне дома', no_results:'Нет результатов', user_required:'Требуются имя и PIN', generic_error:'Ошибка: {error}', clear_history_confirm:'Удалить всю историю активности?', export_error:'Ошибка экспорта: {error}', invalid_config:'Недопустимый файл конфигурации.', import_success:'Конфигурация восстановлена. Перезагрузка…', import_error:'Ошибка импорта: {error}', file_read_error:'Не удалось прочитать файл.', reset_confirm:'Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.', reset_success:'Argus сброшен. У вас есть несколько секунд, чтобы отменить это.', reset_error:'Ошибка сброса: {error}', undo_success:'Сброс отменён.', undo_error:'Не удалось отменить сброс: {error}', url_placeholder:'URL фона…', loading:'Загрузка…', delete:'Удалить', fullscreen_title:'Полный экран', home_default:'Мой дом', home_fallback:'Дом', user_default:'Пользователь', temp_notification_title:'Argus — Температурное предупреждение', action_failed:'Не удалось выполнить действие', cannot_arm:'Невозможно поставить на охрану', open_sensors_explain:'Следующие датчики открыты:\n{names}\n\nЗакройте их перед постановкой на охрану или включите «Обход».', pin_disarm_error:'Неверный PIN или ошибка снятия с охраны', notification_disarmed:'{user} снял систему с охраны.', notification_armed:'{user} активировал режим {mode}.', upload_error:'Ошибка загрузки.', delete_file_error:'Не удалось удалить файл: {error}', file_choice:'«{file}»\n\nИспользовать как статичное изображение (ОК) или анимированное видео (Отмена)?', first_run_blocked_title:'Доступ запрещен', first_run_blocked_desc:'Для первой настройки Argus требуется администратор Home Assistant.', first_run_welcome:'Спасибо, что выбрали Argus Home Hub. Добро пожаловать.', first_run_desc:'Завершите настройку для безопасности вашего дома.', first_run_pin_expl:'PIN доступа открывает Argus. Мастер-PIN управляет постановкой и снятием с охраны.', first_run_skip:'Пропустить пока', first_run_start:'Начать с Argus' },
};

const SETUP_REQUIRED_TEXTS = {
  es: { setup_required_title:'Falta configurar Argus', setup_required_desc:'Argus está instalado, pero todavía no existe una instancia. Añádela en Integraciones y luego vuelve a este panel.', setup_required_action:'Configurar Argus en Integraciones', welcome_profile:'Bienvenido/a, {name}', initialization_error_title:'Argus no pudo iniciar', initialization_error_desc:'No se pudo conectar con el backend autenticado de Home Assistant.', retry_action:'Reintentar' },
  en: { setup_required_title:'Argus setup required', setup_required_desc:'Argus is installed, but no instance exists yet. Add it in Integrations, then return to this panel.', setup_required_action:'Configure Argus in Integrations', welcome_profile:'Welcome, {name}', initialization_error_title:'Argus could not start', initialization_error_desc:'The authenticated Home Assistant backend connection could not be established.', retry_action:'Retry' },
  fr: { setup_required_title:'Configuration d\u2019Argus requise', setup_required_desc:'Argus est installé, mais aucune instance n\u2019existe encore. Ajoutez-la dans Intégrations, puis revenez à ce panneau.', setup_required_action:'Configurer Argus dans Intégrations', welcome_profile:'Bienvenue, {name}', initialization_error_title:'Argus n\u2019a pas pu démarrer', initialization_error_desc:'La connexion authentifiée au backend Home Assistant a échoué.', retry_action:'Réessayer' },
  pt: { setup_required_title:'É necessário configurar o Argus', setup_required_desc:'O Argus está instalado, mas ainda não existe uma instância. Adicione-a em Integrações e volte a este painel.', setup_required_action:'Configurar Argus em Integrações', welcome_profile:'Bem-vindo(a), {name}', initialization_error_title:'O Argus não pôde iniciar', initialization_error_desc:'Não foi possível conectar ao backend autenticado do Home Assistant.', retry_action:'Tentar novamente' },
  it: { setup_required_title:'Configurazione di Argus necessaria', setup_required_desc:'Argus è installato, ma non esiste ancora un\u2019istanza. Aggiungila in Integrazioni, poi torna a questo pannello.', setup_required_action:'Configura Argus in Integrazioni', welcome_profile:'Benvenuto/a, {name}', initialization_error_title:'Argus non si è avviato', initialization_error_desc:'Impossibile connettersi al backend autenticato di Home Assistant.', retry_action:'Riprova' },
  zh: { setup_required_title:'需要配置 Argus', setup_required_desc:'Argus 已安装，但尚未创建实例。请在\u201c集成\u201d中添加，然后返回此面板。', setup_required_action:'在集成中配置 Argus', welcome_profile:'欢迎，{name}', initialization_error_title:'Argus 无法启动', initialization_error_desc:'无法连接到 Home Assistant 的已认证后端。', retry_action:'重试' },
  ru: { setup_required_title:'Требуется настройка Argus', setup_required_desc:'Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.', setup_required_action:'Настроить Argus в интеграциях', welcome_profile:'Добро пожаловать, {name}', initialization_error_title:'Не удалось запустить Argus', initialization_error_desc:'Не удалось подключиться к авторизованному backend Home Assistant.', retry_action:'Повторить' },
};

const UI_AUDIT_TEXTS = {
  es: { github_title:'Apoya a Argus', github_desc:'Si te gusta este proyecto, considera darle una estrella en GitHub para apoyar su desarrollo.', github_action:'Dar estrella en GitHub', history_refresh:'Actualizar', history_unavailable:'No se pudo cargar el historial. Verifica el permiso «Ver historial» e inténtalo de nuevo.', user_no_pin:'Sin PIN', user_pin_action:'PIN', user_role_action:'Rol', notif_no_services:'Sin servicios móviles',
    log_action_user_logged_in:'Inicio de sesión', log_action_state_restored:'Estado restaurado', log_action_profile_selected:'Perfil seleccionado', log_action_schedule_applied:'Horario aplicado', log_action_mode_changed:'Modo cambiado', log_action_backup_created:'Copia de seguridad creada', log_action_backup_restored:'Configuración restaurada', log_action_access_pin_updated:'PIN de acceso actualizado',
    modal_cancel:'Cancelar', modal_save:'Guardar', modal_confirm:'Confirmar', modal_pin_title:'PIN de acceso', modal_pin_help:'Deja en blanco para eliminar el PIN de acceso.', modal_edit_name:'Editar nombre', modal_add_user:'+ Agregar usuario manual', modal_name_label:'Nombre del perfil', modal_user_added:'Usuario creado.', modal_delete_confirm:'¿Eliminar este usuario? Esta acción no se puede deshacer.' },
  en: { github_title:'Support Argus', github_desc:'If you like this project, consider starring it on GitHub to support its development.', github_action:'Star on GitHub', history_refresh:'Refresh', history_unavailable:'Activity history could not be loaded. Check the \u201cView history\u201d permission and try again.', user_no_pin:'No PIN', user_pin_action:'PIN', user_role_action:'Role', notif_no_services:'No mobile services',
    log_action_user_logged_in:'User login', log_action_state_restored:'State restored', log_action_profile_selected:'Profile selected', log_action_schedule_applied:'Schedule applied', log_action_mode_changed:'Mode changed', log_action_backup_created:'Backup created', log_action_backup_restored:'Configuration restored', log_action_access_pin_updated:'Access PIN updated',
    modal_cancel:'Cancel', modal_save:'Save', modal_confirm:'Confirm', modal_pin_title:'Access PIN', modal_pin_help:'Leave blank to remove the access PIN.', modal_edit_name:'Edit name', modal_add_user:'+ Add manual user', modal_name_label:'Profile name', modal_user_added:'User created.', modal_delete_confirm:'Delete this user? This action cannot be undone.' },
  fr: { github_title:'Soutenez Argus', github_desc:'Si vous aimez ce projet, ajoutez une étoile sur GitHub pour soutenir son développement.', github_action:'Ajouter une étoile sur GitHub', history_refresh:'Actualiser', history_unavailable:'Impossible de charger l\u2019historique. Vérifiez l\u2019autorisation « Voir l\u2019historique » et réessayez.', user_no_pin:'Sans PIN', user_pin_action:'PIN', user_role_action:'Rôle', notif_no_services:'Aucun service mobile',
    log_action_user_logged_in:'Connexion', log_action_state_restored:'État restauré', log_action_profile_selected:'Profil sélectionné', log_action_schedule_applied:'Horaire appliqué', log_action_mode_changed:'Mode modifié', log_action_backup_created:'Sauvegarde créée', log_action_backup_restored:'Configuration restaurée', log_action_access_pin_updated:'PIN d\u2019accès mis à jour',
    modal_cancel:'Annuler', modal_save:'Enregistrer', modal_confirm:'Confirmer', modal_pin_title:'PIN d\u2019accès', modal_pin_help:'Laissez vide pour supprimer le PIN.', modal_edit_name:'Modifier le nom', modal_add_user:'+ Ajouter un utilisateur', modal_name_label:'Nom du profil', modal_user_added:'Utilisateur créé.', modal_delete_confirm:'Supprimer cet utilisateur ?' },
  pt: { github_title:'Apoie o Argus', github_desc:'Se você gosta deste projeto, dê uma estrela no GitHub para apoiar o desenvolvimento.', github_action:'Dar estrela no GitHub', history_refresh:'Atualizar', history_unavailable:'Não foi possível carregar o histórico. Verifique a permissão \u201cVer histórico\u201d e tente novamente.', user_no_pin:'Sem PIN', user_pin_action:'PIN', user_role_action:'Função', notif_no_services:'Sem serviços móveis',
    log_action_user_logged_in:'Login do usuário', log_action_state_restored:'Estado restaurado', log_action_profile_selected:'Perfil selecionado', log_action_schedule_applied:'Horário aplicado', log_action_mode_changed:'Modo alterado', log_action_backup_created:'Backup criado', log_action_backup_restored:'Configuração restaurada', log_action_access_pin_updated:'PIN de acesso atualizado',
    modal_cancel:'Cancelar', modal_save:'Salvar', modal_confirm:'Confirmar', modal_pin_title:'PIN de acesso', modal_pin_help:'Deixe em branco para remover o PIN.', modal_edit_name:'Editar nome', modal_add_user:'+ Adicionar usuário', modal_name_label:'Nome do perfil', modal_user_added:'Usuário criado.', modal_delete_confirm:'Excluir este usuário?' },
  it: { github_title:'Sostieni Argus', github_desc:'Se ti piace questo progetto, aggiungi una stella su GitHub per sostenerne lo sviluppo.', github_action:'Aggiungi una stella su GitHub', history_refresh:'Aggiorna', history_unavailable:'Impossibile caricare la cronologia. Controlla il permesso \u201cVisualizza cronologia\u201d e riprova.', user_no_pin:'Senza PIN', user_pin_action:'PIN', user_role_action:'Ruolo', notif_no_services:'Nessun servizio mobile',
    log_action_user_logged_in:'Accesso utente', log_action_state_restored:'Stato ripristinato', log_action_profile_selected:'Profilo selezionato', log_action_schedule_applied:'Pianificazione applicata', log_action_mode_changed:'Modalità cambiata', log_action_backup_created:'Backup creato', log_action_backup_restored:'Configurazione ripristinata', log_action_access_pin_updated:'PIN di accesso aggiornato',
    modal_cancel:'Annulla', modal_save:'Salva', modal_confirm:'Conferma', modal_pin_title:'PIN di accesso', modal_pin_help:'Lascia vuoto per rimuovere il PIN.', modal_edit_name:'Modifica nome', modal_add_user:'+ Aggiungi utente', modal_name_label:'Nome del profilo', modal_user_added:'Utente creato.', modal_delete_confirm:'Eliminare questo utente?' },
  zh: { github_title:'支持 Argus', github_desc:'如果您喜欢这个项目，请在 GitHub 上加星以支持其开发。', github_action:'在 GitHub 上加星', history_refresh:'刷新', history_unavailable:'无法加载活动历史。请检查\u201c查看历史\u201d权限后重试。', user_no_pin:'无 PIN', user_pin_action:'PIN', user_role_action:'角色', notif_no_services:'无移动服务',
    log_action_user_logged_in:'用户登录', log_action_state_restored:'状态已恢复', log_action_profile_selected:'已选择配置文件', log_action_schedule_applied:'已应用计划', log_action_mode_changed:'模式已更改', log_action_backup_created:'已创建备份', log_action_backup_restored:'配置已恢复', log_action_access_pin_updated:'访问 PIN 已更新',
    modal_cancel:'取消', modal_save:'保存', modal_confirm:'确认', modal_pin_title:'访问 PIN', modal_pin_help:'留空以删除访问 PIN。', modal_edit_name:'编辑名称', modal_add_user:'+ 添加用户', modal_name_label:'配置文件名称', modal_user_added:'用户已创建。', modal_delete_confirm:'删除此用户？' },
  ru: { github_title:'Поддержите Argus', github_desc:'Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.', github_action:'Поставить звезду на GitHub', history_refresh:'Обновить', history_unavailable:'Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.', user_no_pin:'Без PIN', user_pin_action:'PIN', user_role_action:'Роль', notif_no_services:'Нет мобильных служб',
    log_action_user_logged_in:'Вход пользователя', log_action_state_restored:'Состояние восстановлено', log_action_profile_selected:'Профиль выбран', log_action_schedule_applied:'Расписание применено', log_action_mode_changed:'Режим изменён', log_action_backup_created:'Резервная копия создана', log_action_backup_restored:'Конфигурация восстановлена', log_action_access_pin_updated:'PIN доступа обновлён',
    modal_cancel:'Отмена', modal_save:'Сохранить', modal_confirm:'Подтвердить', modal_pin_title:'PIN доступа', modal_pin_help:'Оставьте пустым, чтобы удалить PIN.', modal_edit_name:'Изменить имя', modal_add_user:'+ Добавить пользователя', modal_name_label:'Имя профиля', modal_user_added:'Пользователь создан.', modal_delete_confirm:'Удалить этого пользователя?' },
};

const FIRST_RUN_TEXTS = {
  es: { setup_admin_name:'Nombre del Administrador', setup_access_pin:'PIN de acceso al panel Argus (Opcional)', setup_master_pin:'PIN maestro para armar/desarmar (Opcional)', claim_title:'Argus Security Update', claim_desc:'Tu instalación requiere un administrador para reclamar el acceso.', claim_btn:'Reclamar Administración' },
  en: { setup_admin_name:'Administrator Name', setup_access_pin:'Argus panel access PIN (Optional)', setup_master_pin:'Master PIN to arm/disarm (Optional)', claim_title:'Argus Security Update', claim_desc:'Your installation needs an administrator to claim access.', claim_btn:'Claim Administration' },
  fr: { setup_admin_name:'Nom de l\u2019administrateur', setup_access_pin:'PIN d\u2019accès au panneau Argus (Optionnel)', setup_master_pin:'PIN maître pour armer/désarmer (Optionnel)', claim_title:'Mise à jour de sécurité Argus', claim_desc:'Votre installation nécessite un administrateur pour réclamer l\u2019accès.', claim_btn:'Réclamer l\u2019administration' },
  pt: { setup_admin_name:'Nome do Administrador', setup_access_pin:'PIN de acesso ao painel Argus (Opcional)', setup_master_pin:'PIN mestre para armar/desarmar (Opcional)', claim_title:'Atualização de Segurança Argus', claim_desc:'Sua instalação precisa de um administrador para reivindicar o acesso.', claim_btn:'Reivindicar Administração' },
  it: { setup_admin_name:'Nome dell\u2019amministratore', setup_access_pin:'PIN di accesso al pannello Argus (Opzionale)', setup_master_pin:'PIN master per armare/disarmare (Opzionale)', claim_title:'Aggiornamento di sicurezza Argus', claim_desc:'La tua installazione richiede un amministratore per rivendicare l\u2019accesso.', claim_btn:'Rivendica Amministrazione' },
  zh: { setup_admin_name:'管理员名称', setup_access_pin:'Argus 面板访问 PIN (可选)', setup_master_pin:'布防/撤防主 PIN (可选)', claim_title:'Argus 安全更新', claim_desc:'您的安装需要管理员来声明访问权限。', claim_btn:'声明管理权限' },
  ru: { setup_admin_name:'Имя администратора', setup_access_pin:'PIN доступа к панели Argus (Необязательно)', setup_master_pin:'Мастер-PIN для постановки/снятия с охраны (Необязательно)', claim_title:'Обновление безопасности Argus', claim_desc:'Вашей установке требуется администратор для получения доступа.', claim_btn:'Заявить права администратора' },
};

for (const language of Object.keys(TEXTS)) {
  Object.assign(TEXTS[language], EXTRA_TEXTS[language], SETUP_REQUIRED_TEXTS[language], UI_AUDIT_TEXTS[language], FIRST_RUN_TEXTS[language]);
}

Object.assign(TEXTS.es, { expired:'Expirado', active_until:'Vigente hasta', exp_indefinite:'Indefinido' });
Object.assign(TEXTS.en, { expired:'Expired', active_until:'Valid until', exp_indefinite:'Indefinite' });
Object.assign(TEXTS.fr, { expired:'Expiré', active_until:'Expire', exp_indefinite:'Indéfini' });
Object.assign(TEXTS.pt, { expired:'Expirado', active_until:'Expira', exp_indefinite:'Indefinido' });
Object.assign(TEXTS.it, { expired:'Scaduto', active_until:'Scade', exp_indefinite:'Indefinito' });
Object.assign(TEXTS.zh, { expired:'已过期', active_until:'到期', exp_indefinite:'无限期' });
Object.assign(TEXTS.ru, { expired:'Истёк', active_until:'Действует до', exp_indefinite:'Бессрочно' });
Object.assign(TEXTS.es, { entry_sensors:'Sensores con retraso de entrada', select_entry_sensors:'Seleccionar sensores de entrada' });
Object.assign(TEXTS.en, { entry_sensors:'Entry-delay sensors', select_entry_sensors:'Select entry sensors' });
Object.assign(TEXTS.fr, { entry_sensors:'Capteurs avec délai d\u2019entrée', select_entry_sensors:'Sélectionner les capteurs d\u2019entrée' });
Object.assign(TEXTS.pt, { entry_sensors:'Sensores com atraso de entrada', select_entry_sensors:'Selecionar sensores de entrada' });
Object.assign(TEXTS.it, { entry_sensors:'Sensori con ritardo di ingresso', select_entry_sensors:'Seleziona sensori di ingresso' });
Object.assign(TEXTS.zh, { entry_sensors:'具有进入延迟的传感器', select_entry_sensors:'选择进入传感器' });
Object.assign(TEXTS.ru, { entry_sensors:'Датчики с задержкой входа', select_entry_sensors:'Выбрать датчики входа' });
Object.assign(TEXTS.es, { entry_delay_toggle:'Retraso de entrada (⏳) o instantáneo (⚡)', saved:'✓ Guardado correctamente', pin_mismatch:'❌ El nuevo PIN no coincide' });
Object.assign(TEXTS.en, { entry_delay_toggle:'Entry delay (⏳) or instant (⚡)', saved:'✓ Saved successfully', pin_mismatch:'❌ New PIN does not match' });
Object.assign(TEXTS.fr, { entry_delay_toggle:'Délai d\u2019entrée (⏳) ou instantané (⚡)', saved:'✓ Enregistré', pin_mismatch:'❌ Le nouveau code PIN ne correspond pas' });
Object.assign(TEXTS.pt, { entry_delay_toggle:'Atraso de entrada (⏳) ou instantâneo (⚡)', saved:'✓ Salvo com sucesso', pin_mismatch:'❌ O novo PIN não coincide' });
Object.assign(TEXTS.it, { entry_delay_toggle:'Ritardo di ingresso (⏳) o istantaneo (⚡)', saved:'✓ Salvato correttamente', pin_mismatch:'❌ Il nuovo PIN non corrisponde' });
Object.assign(TEXTS.zh, { entry_delay_toggle:'进入延迟 (⏳) 或即时 (⚡)', saved:'✓ 已成功保存', pin_mismatch:'❌ 新 PIN 不匹配' });
Object.assign(TEXTS.ru, { entry_delay_toggle:'Задержка входа (⏳) или мгновенно (⚡)', saved:'✓ Успешно сохранено', pin_mismatch:'❌ Новый PIN-код не совпадает' });

// Labels introduced after the original language dictionaries.  Keeping these
// together makes the UI resilient when a newly-added static control is
// translated, rather than falling back to English (or its template text).
Object.assign(TEXTS.es, { temp_displayed:'🌡️ Temperatura mostrada', weather_source:'☁️ Fuente de clima', weather_auto:'Automático (primera entidad de clima)', user_exp_type:'Vencimiento', user_exp_date:'Fecha/Hora de vencimiento', exp_temporary:'Temporal (fecha/hora)', log_mode:'Modo', log_action_user_added:'Usuario añadido', log_action_user_deleted:'Usuario eliminado', log_action_rejected:'Acción rechazada', log_action_automation:'Automatización ejecutada', log_action_analysis:'Análisis de IA', log_action_sos:'SOS activado', log_action_sos_stopped:'Pánico detenido' });
Object.assign(TEXTS.en, { temp_displayed:'🌡️ Displayed temperature', weather_source:'☁️ Weather source', weather_auto:'Automatic (first weather entity)', user_exp_type:'Expiration', user_exp_date:'Expiration date/time', exp_temporary:'Temporary (date/time)', log_mode:'Mode', log_action_user_added:'User added', log_action_user_deleted:'User deleted', log_action_rejected:'Action rejected', log_action_automation:'Automation executed', log_action_analysis:'AI analysis', log_action_sos:'SOS activated', log_action_sos_stopped:'Panic stopped' });
Object.assign(TEXTS.fr, { temp_displayed:'🌡️ Température affichée', weather_source:'☁️ Source météo', weather_auto:'Automatique (première entité météo)', user_exp_type:'Expiration', user_exp_date:"Date/heure d\u2019expiration", exp_temporary:'Temporaire (date/heure)', log_mode:'Mode', log_action_user_added:'Utilisateur ajouté', log_action_user_deleted:'Utilisateur supprimé', log_action_rejected:'Action refusée', log_action_automation:'Automatisation exécutée', log_action_analysis:'Analyse IA', log_action_sos:'SOS activé', log_action_sos_stopped:'Panique arrêtée' });
Object.assign(TEXTS.pt, { temp_displayed:'🌡️ Temperatura exibida', weather_source:'☁️ Fonte de clima', weather_auto:'Automático (primeira entidade meteorológica)', user_exp_type:'Expiração', user_exp_date:'Data/hora de expiração', exp_temporary:'Temporário (data/hora)', log_mode:'Modo', log_action_user_added:'Usuário adicionado', log_action_user_deleted:'Usuário removido', log_action_rejected:'Ação recusada', log_action_automation:'Automação executada', log_action_analysis:'Análise de IA', log_action_sos:'SOS ativado', log_action_sos_stopped:'Pânico interrompido' });
Object.assign(TEXTS.it, { temp_displayed:'🌡️ Temperatura visualizzata', weather_source:'☁️ Fonte meteo', weather_auto:'Automatico (prima entità meteo)', user_exp_type:'Scadenza', user_exp_date:'Data/ora di scadenza', exp_temporary:'Temporaneo (data/ora)', log_mode:'Modalità', log_action_user_added:'Utente aggiunto', log_action_user_deleted:'Utente eliminato', log_action_rejected:'Azione rifiutata', log_action_automation:'Automazione eseguita', log_action_analysis:'Analisi IA', log_action_sos:'SOS attivato', log_action_sos_stopped:'Panico interrotto' });
Object.assign(TEXTS.zh, { temp_displayed:'🌡️ 显示的温度', weather_source:'☁️ 天气来源', weather_auto:'自动（第一个天气实体）', user_exp_type:'到期', user_exp_date:'到期日期/时间', exp_temporary:'临时（日期/时间）', log_mode:'模式', log_action_user_added:'已添加用户', log_action_user_deleted:'已删除用户', log_action_rejected:'操作被拒绝', log_action_automation:'自动化已执行', log_action_analysis:'AI 分析', log_action_sos:'SOS 已激活', log_action_sos_stopped:'紧急状态已停止' });
Object.assign(TEXTS.ru, { temp_displayed:'🌡️ Отображаемая температура', weather_source:'☁️ Источник погоды', weather_auto:'Автоматически (первая погодная сущность)', user_exp_type:'Срок действия', user_exp_date:'Дата/время окончания', exp_temporary:'Временный (дата/время)', log_mode:'Режим', log_action_user_added:'Пользователь добавлен', log_action_user_deleted:'Пользователь удалён', log_action_rejected:'Действие отклонено', log_action_automation:'Автоматизация выполнена', log_action_analysis:'Анализ ИИ', log_action_sos:'SOS активирован', log_action_sos_stopped:'Тревога остановлена' });

/* ── Template ─────────────────────────────────────────────────────────── */
const _tmpl = document.createElement('template');
_tmpl.innerHTML = `
<style>

  /* Modern Premium Liquid Glass & iOS Wobble Styles */
  :host {
    --glass-bg: var(--argus-glass-bg, rgba(255, 255, 255, 0.07));
    --glass-border: var(--argus-glass-border, rgba(255, 255, 255, 0.09));
    --glass-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.35),
                    0 15px 30px -10px rgba(0, 122, 255, 0.12),
                    inset 0 1px 0 rgba(255, 255, 255, 0.15);
    --sos-red: linear-gradient(135deg, #ff3b30, #ff2d55);
    --ios-track: rgba(0, 0, 0, 0.25);
    --ios-thumb: linear-gradient(180deg, #ffffff, #f4f4f7);
    --text-shadow: 0 1px 3px rgba(0,0,0,0.15);
    --primary-color: #007aff;
    --personalize-bg: rgba(255, 255, 255, 0.02);
    --personalize-border: rgba(255, 255, 255, 0.06);
    --personalize-divider: rgba(255, 255, 255, 0.08);
    --bg-inputs-bg: rgba(0, 0, 0, 0.15);
    --bg-inputs-border: rgba(255, 255, 255, 0.05);
    --input-bg-darker: rgba(0, 0, 0, 0.25);
    --input-border-darker: rgba(255, 255, 255, 0.12);
    --hero-bg: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
    --log-item-bg: rgba(255, 255, 255, 0.02);
    --log-item-border: rgba(255, 255, 255, 0.05);
    --user-card-bg: rgba(255, 255, 255, 0.02);
    --user-card-border: rgba(255, 255, 255, 0.06);
    --primary-text-color: #ffffff;
    --secondary-text-color: rgba(255, 255, 255, 0.7);
    --input-bg: rgba(255, 255, 255, 0.04);
    --input-border: rgba(255, 255, 255, 0.12);
  }

  /* Detect light mode via HA variables and adjust glass */
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) {
    --argus-glass-bg: rgba(255, 255, 255, 0.25);
    --argus-glass-border: rgba(0, 0, 0, 0.08);
    --glass-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.08),
                    0 10px 20px -10px rgba(0, 122, 255, 0.05),
                    inset 0 1px 0 rgba(255, 255, 255, 0.5);
    --text-shadow: none;
    --hud-bg: rgba(0,0,0,0.04);
    --hero-gradient: linear-gradient(135deg, #0052d4, #4364f7, #6fb1fc);
    --card-title-color: #0052d4;
    --pill-bg: rgba(0,0,0,0.03);
    --pill-border: rgba(0,0,0,0.08);
    --pill-text: #1d1d1f;
    --argus-pill-bg: rgba(0,0,0,0.04);
    --argus-pill-bg-hover: rgba(0,0,0,0.08);
    --argus-pill-border: rgba(0,0,0,0.12);
    --argus-pill-color: #1d1d1f;
    --argus-pill-color-muted: rgba(0,0,0,0.6);
    --primary-color: #007aff;
    --personalize-bg: rgba(0, 0, 0, 0.02);
    --personalize-border: rgba(0, 0, 0, 0.05);
    --personalize-divider: rgba(0, 0, 0, 0.08);
    --bg-inputs-bg: rgba(0, 0, 0, 0.03);
    --bg-inputs-border: rgba(0, 0, 0, 0.07);
    --input-bg-darker: rgba(0, 0, 0, 0.04);
    --input-border-darker: rgba(0, 0, 0, 0.12);
    --hero-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
    --log-item-bg: rgba(0, 0, 0, 0.02);
    --log-item-border: rgba(0, 0, 0, 0.05);
    --user-card-bg: rgba(0, 0, 0, 0.02);
    --user-card-border: rgba(0, 0, 0, 0.06);
    --primary-text-color: #1d1d1f;
    --secondary-text-color: rgba(0, 0, 0, 0.7);
    --input-bg: rgba(0, 0, 0, 0.04);
    --input-border: rgba(0, 0, 0, 0.12);
  }

  :host {
    --hud-text-color: #fff;
    --hud-bg: rgba(255,255,255,0.06);
  }

  /* Fullscreen Active / Virtual Fullscreen CSS Overrides */
  :host(.fullscreen-active) {
    position: fixed !important;
    inset: 0 !important;
    z-index: 99999999 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: #000 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  :host(.fullscreen-active) .wrap {
    padding: 0 !important;
    margin: 0 !important;
    max-width: none !important;
    width: 100% !important;
    height: 100% !important;
  }
  :host(.fullscreen-active) .hero {
    display: none !important;
  }
  :host(.fullscreen-active) .grid {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    gap: 0 !important;
  }
  :host(.fullscreen-active) .grid > .stack:not(:first-child) {
    display: none !important;
  }
  :host(.fullscreen-active) .grid > .stack:first-child {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  :host(.fullscreen-active) .grid > .stack:first-child > section:not(:first-child) {
    display: none !important;
  }
  :host(.fullscreen-active) .grid > .stack:first-child > section:first-child {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }
  :host(.fullscreen-active) .grid > .stack:first-child > section:first-child .panel-head {
    display: none !important;
  }
  :host(.fullscreen-active) .grid > .stack:first-child > section:first-child .personalize-section {
    display: none !important;
  }
  :host(.fullscreen-active) #entries {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  :host(.fullscreen-active) #entries > .entry:not(.ios-fullscreen) {
    display: none !important;
  }
  :host(.fullscreen-active) #entries > .entry.ios-fullscreen {
    position: fixed !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    border-radius: 0 !important;
    z-index: 100 !important;
  }

  .liquid-glass {
    background: var(--glass-bg);
    backdrop-filter: blur(12px) saturate(120%);
    -webkit-backdrop-filter: blur(12px) saturate(120%);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
  }
  .wrap { position: relative; z-index: 1; transition: filter 0.35s ease, opacity 0.35s ease; }
  .wrap.wrap-blurred { filter: blur(15px); opacity: 0.45; pointer-events: none; }
  @keyframes dialElasticIn {
    0% { transform: scale(0.8) translateY(20px); opacity: 0; }
    60% { transform: scale(1.04) translateY(-4px); opacity: 0.9; }
    85% { transform: scale(0.98) translateY(1px); opacity: 0.98; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }
  .dial-elastic { animation: dialElasticIn 0.5s cubic-bezier(0.25, 1.25, 0.5, 1) forwards; }

  .collapsible {
    transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease, margin 0.4s ease, padding 0.4s ease;
    overflow: hidden;
    max-height: 600px;
    opacity: 1;
  }
  .collapsible.collapsed {
    max-height: 0 !important;
    opacity: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    border: none !important;
    pointer-events: none;
  }

  /* Scrollbar aesthetics */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.08);
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.18);
  }

  .battery-alert { margin: 0 0 16px 0; padding: 14px 18px; border-radius: 20px; background: rgba(255, 149, 0, 0.12); border: 1px solid rgba(255, 149, 0, 0.22); color: #ffe3b3; font-weight: 700; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); text-align: left; box-shadow: 0 4px 15px rgba(255,149,0,0.1); }

  /* SOS Slider redesign */
  .btn-sos { width: 100%; min-height: 56px; border: 0; border-radius: 20px; background: var(--sos-red); color: white; font-size: 1.05rem; font-weight: 800; letter-spacing: 0.02em; cursor: pointer; box-shadow: 0 10px 25px rgba(255, 59, 48, 0.35); transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, opacity 0.2s; margin-top: 8px; display:flex;align-items:center;justify-content:center;gap:10px; }
  .btn-sos:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(255, 59, 48, 0.45); }
  .btn-sos:active { transform: scale(0.95); opacity: 0.92; }
  .ios-confirm-backdrop { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); display: none; align-items: center; justify-content: center; padding: 18px; z-index: 999999; backdrop-filter: blur(12px); }
  .ios-confirm-backdrop.open { display: flex; }
  .ios-confirm-card { width: min(100%, 420px); border-radius: 32px; padding: 24px; color: white; background: rgba(20,22,35,0.85); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 32px 80px rgba(0,0,0,0.6); }
  .ios-confirm-title { font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; text-align: center; }
  .ios-confirm-text { font-size: 0.98rem; opacity: 0.85; line-height: 1.45; text-align: center; margin-bottom: 20px; }
  .ios-slider-shell { padding: 4px 0 16px; }
  .ios-slider-track { position: relative; height: 66px; border-radius: 999px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); overflow: hidden; }
  .ios-slider-label { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 82px; font-size: 0.95rem; font-weight: 700; color: rgba(255, 255, 255, 0.85); pointer-events: none; text-align: center; }
  .ios-slider-thumb { position: absolute; top: 6px; left: 6px; width: 52px; height: 52px; border-radius: 50%; background: var(--ios-thumb); color: #ff3b30; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 900; box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25); touch-action: none; user-select: none; cursor: grab; transition: transform 0.1s ease-out; }
  .ios-confirm-cancel { width: 100%; min-height: 50px; border: 0; border-radius: 18px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.05); color: white; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s; }
  .ios-confirm-cancel:hover { background: rgba(255,255,255,0.14); }
  .ios-confirm-cancel:active { transform: scale(0.96); }

  :host{display:block;min-height:100vh;box-sizing:border-box;color:var(--primary-text-color);background:var(--lovelace-background,var(--primary-background-color));font-family:'Outfit',Inter,system-ui,sans-serif}
  *{box-sizing:border-box}
  @keyframes iosGlassIn{0%{opacity:0;transform:translateY(14px) scale(.965)}65%{opacity:1;transform:translateY(-2px) scale(1.008)}100%{transform:translateY(0) scale(1)}}
  @keyframes iosSelectPop{0%{transform:scale(.92);opacity:.45}60%{transform:scale(1.045);opacity:1}100%{transform:scale(1)}}
  .glass,.entry,.mode-section-card,.user-card,.file-card,.log-item{animation:iosGlassIn .5s cubic-bezier(.22,1.18,.36,1) both}
  .pick-row:has(input:checked),.tab.active,.liquid-btn.active{animation:iosSelectPop .34s cubic-bezier(.2,1.45,.35,1);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary-color,#007aff) 45%,transparent),0 12px 30px color-mix(in srgb,var(--primary-color,#007aff) 18%,transparent)}
  .liquid-glass{background:linear-gradient(135deg,color-mix(in srgb,var(--glass-bg) 86%,#fff 14%),var(--glass-bg));backdrop-filter:blur(24px) saturate(155%);-webkit-backdrop-filter:blur(24px) saturate(155%);border-color:color-mix(in srgb,var(--glass-border) 70%,#fff 30%)}
  button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 70%,#fff);outline-offset:3px}
  button:disabled{cursor:not-allowed;opacity:.5;filter:saturate(.45)}
  @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
  .wrap{max-width:1400px;margin:0 auto;padding:24px;display:grid;gap:24px}
  .glass{background:var(--glass-bg, rgba(255, 255, 255, 0.06));border:1px solid var(--glass-border, rgba(255, 255, 255, 0.09));border-radius:28px;box-shadow:var(--glass-shadow);backdrop-filter:blur(12px) saturate(1.2);-webkit-backdrop-filter:blur(12px) saturate(1.2)}
  .hero{padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:var(--hero-bg, linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)));margin-bottom:12px}
  .hero-left{display:flex;align-items:center;gap:22px}
  .hero-context{margin-left:auto;display:flex;align-items:center;gap:8px;min-width:0}.hero-clock{display:flex;flex-direction:column;align-items:flex-end;padding-right:14px;border-right:1px solid rgba(255,255,255,.14);line-height:1}.hero-clock strong{font-size:1.45rem;letter-spacing:-.05em}.hero-clock span{font-size:10px;opacity:.65;margin-top:5px;text-transform:uppercase;letter-spacing:.08em}.hero-pills{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.hero-pill{display:inline-flex;align-items:center;gap:5px;padding:7px 10px;border:1px solid rgba(255,255,255,.15);border-radius:999px;background:rgba(7,16,29,.27);box-shadow:inset 0 1px 0 rgba(255,255,255,.15);backdrop-filter:blur(14px);font-size:10px;font-weight:800;white-space:nowrap}.hero-pill .hero-live{width:7px;height:7px;border-radius:50%;background:#55df91;box-shadow:0 0 9px #55df91}
  .hero-icon{font-size:54px;line-height:1;filter:drop-shadow(0 0 20px rgba(255,255,255,0.15))}
  .hero h1{margin:0 0 4px;font-size:34px;font-weight:900;letter-spacing:-0.03em;background:var(--hero-gradient, linear-gradient(to right, #ffffff, #82b1ff));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
  .hero p{margin:0;font-size:16px;opacity:.7;font-weight:500}
  @media(max-width:700px){.wrap{padding:14px;gap:14px}.glass{border-radius:22px}.hero{padding:22px;align-items:flex-start}.hero-icon{font-size:40px}.hero h1{font-size:27px}.hero p{font-size:14px}.entry-content{grid-template-columns:96px 1fr;padding:16px 105px 16px 14px;gap:10px}.sensor-column{width:98px}.sensor-chip{max-width:94px}.entry-icon{min-height:110px}.entry-icon svg{max-width:150px}.hud{top:12px;right:12px}.hud-data{font-size:15px;padding:5px 9px}.hud-loc{font-size:10px;padding:3px 8px}}

  /* Modern Mode Navigation & iOS Liquid Bubble Transition */
  .tabs { position: relative; isolation:isolate; display: flex; min-height:72px; background: rgba(255, 255, 255, 0.03); padding: 6px; border-radius: 20px; gap: 6px; overflow: visible; scrollbar-width: none; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.06); z-index: 1; }
  .tabs::-webkit-scrollbar { display: none; }
  .tab { position: relative; flex: 1; min-width: 55px; min-height:60px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border-radius: 14px; padding: 10px 4px; font-size: 11px; font-weight: 800; color: rgba(255, 255, 255, 0.55); transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); cursor: pointer; border: none !important; outline: none; background: transparent !important; box-shadow: none !important; z-index: 1; }
  .tab:hover { color: #fff; }
  .tab:active:not(:disabled) { transform: scale(0.94); }
  .tab.active { color: #fff !important; background: transparent !important; box-shadow: none !important; transform: none !important; }

  .tab-bubble { position: absolute; top: 6px; bottom: 6px; height: calc(100% - 12px); border-radius: 14px; z-index: 0; transform-origin: left center; transition: transform 0.45s cubic-bezier(0.25, 1.35, 0.4, 1.05), background 0.4s ease, box-shadow 0.4s ease; pointer-events: none; }
  .tab-bubble.bubble-disarmed { background: #43a047; box-shadow: 0 8px 24px rgba(67, 160, 71, 0.4); }
  .tab-bubble.bubble-home { background: #fb8c00; box-shadow: 0 8px 24px rgba(251, 140, 0, 0.4); }
  .tab-bubble.bubble-away { background: #e53935; box-shadow: 0 8px 24px rgba(229, 57, 53, 0.4); }
  .tab-bubble.bubble-night { background: #1e88e5; box-shadow: 0 8px 24px rgba(30, 136, 229, 0.4); }
  .tab-bubble.bubble-vacation { background: #9c27b0; box-shadow: 0 8px 24px rgba(156, 39, 176, 0.4); }

  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .tabs { background: rgba(0, 0, 0, 0.03); border-color: rgba(0, 0, 0, 0.06); }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .tab { color: rgba(0, 0, 0, 0.55); }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .tab:hover { color: #000; }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .tab.active { color: #fff !important; }

  @keyframes bounceIn {
    0% { transform: scale(0.96); opacity: 0; }
    50% { transform: scale(1.01); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  .bounce-in { animation: bounceIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;align-items:start;position:relative}
  .panel{transition:transform .3s ease,box-shadow .3s ease,grid-column .3s ease,grid-row .3s ease;position:relative}
  .panel[data-size="S"]{grid-column:span 1;grid-row:span 1}
  .panel[data-size="M"]{grid-column:span 2;grid-row:span 1}
  .panel[data-size="L"]{grid-column:span 2;grid-row:span 2}
  .panel[data-size="XL"]{grid-column:span 4;grid-row:span 2}
  .dashboard-instances{grid-column:1 / -1}
  
  /* Edit Mode Styles */
  .grid.editing .panel{animation:jiggle .3s infinite ease-in-out;cursor:grab}
  .grid.editing .panel:nth-child(even){animation-duration:.27s;animation-direction:reverse}
  .grid.editing .panel:nth-child(3n){animation-duration:.32s;animation-delay:.05s}
  .grid.editing .panel.dragging{opacity:.5;animation:none;cursor:grabbing}
  
  .panel-edit-overlay{position:absolute;inset:0;background:rgba(5,15,30,.82);backdrop-filter:blur(10px);border-radius:inherit;z-index:90;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;opacity:0;pointer-events:none;transition:opacity .25s ease}
  .grid.editing .panel:not(.dashboard-instances) .panel-edit-overlay{opacity:1;pointer-events:auto}
  
  .widget-controls{display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:18px;backdrop-filter:blur(8px)}
  .widget-controls-title{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.05em;opacity:.7}
  .widget-sizes{display:flex;gap:6px}
  .widget-size-btn{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.05);color:#fff;border-radius:8px;padding:6px 10px;font-size:11px;font-weight:800;cursor:pointer;transition:all .2s}
  .widget-size-btn:hover{background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.3)}
  .widget-size-btn.active{background:#007aff;border-color:#007aff;box-shadow:0 0 10px rgba(0,122,255,.4)}
  .widget-drag-handle{font-size:22px;color:rgba(255,255,255,.6);cursor:grab;padding:4px}
  .widget-toggle-btn{background:rgba(220,38,38,.85);color:white;border:none;border-radius:8px;padding:6px 12px;font-size:10px;font-weight:800;cursor:pointer}
  
  @keyframes jiggle{
    0%{transform:rotate(-0.5deg)}
    50%{transform:rotate(0.5deg)}
    100%{transform:rotate(-0.5deg)}
  }
  @media(max-width:900px){
    .grid{grid-template-columns:minmax(0,1fr)}
    .panel[data-size="S"],.panel[data-size="M"],.panel[data-size="L"],.panel[data-size="XL"]{grid-column:1 / -1;grid-row:auto}
    .grid.editing .panel{animation:none !important}
  }
  
  /* Adaptivity styles for size S widgets */
  .panel[data-size="S"] .tab-label{display:none}
  .panel[data-size="S"] .tab-icon{font-size:24px !important}
  .panel[data-size="S"] #p-backup-desc{display:none}
  .panel[data-size="S"] #github-desc{display:none}

  /* Collapsible Personalization with Bounce expansion */
  .personalize-workspace{overflow:hidden;max-height:0;opacity:0;pointer-events:none;transition:max-height 0.6s cubic-bezier(0.175,0.885,0.32,1.275),opacity 0.4s ease}
  .personalize-workspace:not(.collapsed){max-height:1000px;opacity:1;pointer-events:auto;margin-top:16px;animation:bounceExpand 0.55s cubic-bezier(0.175,0.885,0.32,1.275) forwards}
  @keyframes bounceExpand{
    0%{transform:scale(0.96) translateY(-8px);opacity:0}
    70%{transform:scale(1.01) translateY(2px);opacity:0.9}
    100%{transform:scale(1) translateY(0);opacity:1}
  }
  @media(max-width:750px){.hero{flex-direction:column;text-align:center}.hero-left{flex-direction:column}}
  @media(max-width:750px){.hero .lang-pill{align-self:center;margin-inline:auto}.hero-left{width:100%;align-items:center}}

  .stack{display:grid;gap:24px}
  .panel{padding:28px;position:relative;overflow:hidden}
  .panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}
  .panel h2{margin:0;font-size:14px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:var(--primary-color,#007aff);opacity:0.95}

  /* Access settings stay quiet until the user needs to manage them. */
  .access-panel { padding: 22px 24px; }
  .access-panel .panel-head { margin-bottom: 12px; }
  .access-summary { font-size: 12px; opacity: .72; }
  .access-actions { display:flex; gap:10px; flex-wrap:wrap; }
  .access-actions button { flex:0 1 auto; padding:8px 12px; font-size:11px; }
  .access-actions button.active { background:var(--primary-color,#007aff); color:#fff; border-color:transparent; }
  .access-workspace { display:none; grid-template-columns:minmax(0,1fr); margin-top:16px; padding-top:18px; border-top:1px solid var(--glass-border,rgba(255,255,255,.09)); }
  .access-workspace.open { display:grid; }
  .access-section { display:none; min-width:0; }
  .access-section.open { display:block; }
  .access-section h3 { font-size:12px; font-weight:900; opacity:.8; margin:0 0 10px; text-transform:uppercase; }
  .access-panel .user-card { padding:10px 12px; border-radius:12px; }
  .access-workspace.open {
    animation:iosGlassIn .35s cubic-bezier(.22,1.18,.36,1) both;
    background:linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.018));
    border:1px solid var(--glass-border,rgba(255,255,255,.09));
    border-radius:20px;
    padding:18px;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.10),0 12px 30px rgba(0,0,0,.10);
    backdrop-filter:blur(22px) saturate(145%);
    -webkit-backdrop-filter:blur(22px) saturate(145%);
  }
  .github-star-action {
    display:inline-flex;align-items:center;justify-content:center;gap:7px;
    min-height:42px;padding:9px 16px;border-radius:14px;text-decoration:none;
    color:var(--primary-text-color,#fff);font-size:12px;font-weight:850;
    background:linear-gradient(135deg,rgba(255,255,255,.14),rgba(255,255,255,.055));
    border:1px solid rgba(255,255,255,.16);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 9px 24px rgba(0,0,0,.16);
    backdrop-filter:blur(18px) saturate(150%);
    -webkit-backdrop-filter:blur(18px) saturate(150%);
    transition:transform .2s ease,background .2s ease,box-shadow .2s ease;
  }
  .github-star-action:hover { transform:translateY(-1px);background:rgba(255,255,255,.18);box-shadow:0 12px 28px rgba(0,0,0,.20); }
  @media(max-width:600px){ .access-panel{padding:20px}.access-actions{width:100%}.access-actions button{flex:1} }

  /* Personalization inside instances */
  .personalize-row { display: flex; gap: 14px; align-items: center; margin-top: 18px; padding: 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; flex-wrap: wrap; }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .personalize-row { background: rgba(0,0,0,0.02); border-color: rgba(0,0,0,0.05); }
  .personalize-row .setting-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-bottom: 4px; }

  /* Mode Reorganization Styles — HORIZONTAL */
  .mode-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }
  @media(max-width:900px){ .mode-grid-layout { grid-template-columns: 1fr; } }
  .mode-section-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 18px; transition: all 0.3s ease; }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .mode-section-card { background: rgba(0,0,0,0.02); border-color: rgba(0,0,0,0.05); }
  .mode-section-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .mode-section-card:hover { border-color: rgba(0,0,0,0.10); background: rgba(0,0,0,0.04); }
  .mode-section-title { font-size: 13px; font-weight: 800; color: var(--primary-color, #007aff); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }
  .mode-sensor-grid { color: var(--primary-text-color, #fff); }
  .mode-sensor-none { color: var(--primary-text-color, rgba(255,255,255,0.5)); opacity: 0.6; font-size: 13px; }
  .mode-section-card span, .mode-section-card label, .mode-section-card .input-label { color: var(--primary-text-color, #fff); }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .mode-section-card span, :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .mode-section-card label, :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .mode-section-card .input-label { color: var(--primary-text-color, #1d1d1f); }

  .sensor-pill { background: var(--pill-bg, rgba(255,255,255,0.06)); color: var(--pill-text, #fff); border: 1px solid var(--pill-border, rgba(255,255,255,0.1)); padding: 8px 14px; border-radius: 14px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; transition: all 0.2s; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  @keyframes argus-blink-red { 0%,100%{box-shadow:0 0 0 0 rgba(255,50,50,0);background:var(--pill-bg,rgba(255,255,255,0.06))} 50%{box-shadow:0 0 0 6px rgba(255,50,50,0.25);background:rgba(255,50,50,0.15)} }
  .sensor-pill.siren-active   { animation: argus-blink-red 1.2s ease-in-out infinite; border-color: rgba(255,82,82,0.5) !important; }
  .sensor-pill.triggered-sensor { animation: argus-blink-red 0.9s ease-in-out infinite; border-color: rgba(255,82,82,0.6) !important; }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sensor-pill        { color: var(--pill-text, #1d1d1f); }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sensor-pill button { color: #1d1d1f; }
  .icon-btn { background: none; border: none; padding: 4px; color: inherit; opacity: 0.6; cursor: pointer; transition: opacity 0.2s, transform 0.15s; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
  .icon-btn:active { transform: scale(0.9); }

  #mode-status { opacity: 0; transition: opacity .35s; }
  #mode-status.show { opacity: 1; }
  #mode-status.ok  { color: #4caf50; }
  #mode-status.err { color: #f44336; }

  /* Light Mode Modal Overrides */
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal {
    background: rgba(255,255,255,0.97) !important;
    border: 1px solid rgba(0,0,0,0.08) !important;
    color: #1d1d1f !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal * {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal input[type="search"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal input[type="text"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal input[type="number"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal select {
    background: rgba(0,0,0,0.03) !important;
    border-color: rgba(0,0,0,0.10) !important;
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pick-row {
    background: rgba(0,0,0,0.02) !important;
    border-color: rgba(0,0,0,0.05) !important;
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pick-row:hover {
    background: rgba(0,122,255,0.06) !important;
    border-color: rgba(0,122,255,0.2) !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pick-row-name,
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pick-row-meta {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pick-row-meta {
    opacity: 0.6 !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sel-right-item {
    background: rgba(0,0,0,0.03) !important;
    border-color: rgba(0,0,0,0.06) !important;
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sel-right-item button {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal h3,
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) #selector-title {
    color: #1d1d1f !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) #selector-count {
    color: rgba(0,0,0,0.6) !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sel-actions button {
    color: #1d1d1f !important;
    border-color: rgba(0,0,0,0.08) !important;
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .modal-back {
    background: rgba(0,0,0,0.3) !important;
  }
  .icon-btn:hover { opacity: 1; background: rgba(255,255,255,0.08); }
  .icon-btn.active { color: #fb8c00; opacity: 1; }

  .input-group { display: flex; flex-direction: column; gap: 6px; }
  .times-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;align-items:end}
  .time-field{min-width:0;display:flex;flex-direction:column;justify-content:flex-end;height:100%}
  .time-field .input-label{min-height:34px;display:flex;align-items:flex-end;line-height:1.2;margin-bottom:6px;padding-bottom:2px}
  .time-field input{width:100%;height:44px!important;padding:8px 12px!important;border-radius:12px!important;box-sizing:border-box!important;margin:0!important;font-size:14px!important}
  .entry-sensor-list{min-height:44px;margin-top:12px!important;display:flex;flex-wrap:wrap;align-items:center;border:1px solid rgba(255,255,255,.10)!important;background:rgba(255,255,255,.03)!important;border-radius:12px!important;padding:10px;gap:8px}
  .instance-activity-strip{display:grid;grid-template-columns:auto repeat(3,minmax(0,1fr));gap:8px;align-items:center;margin:4px 0 16px;padding:10px 12px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(5,13,25,.25);backdrop-filter:blur(18px) saturate(135%);-webkit-backdrop-filter:blur(18px) saturate(135%)}.instance-activity-title{font-size:10px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;opacity:.62;padding-right:6px}.instance-activity-item{min-width:0;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.86}.instance-activity-item time{opacity:.55;margin-right:4px;font-variant-numeric:tabular-nums}
  .mode-mqtt-row{display:flex;align-items:center;gap:10px;margin-top:12px;padding:10px 14px!important;min-height:44px;border-radius:12px!important;background:rgba(255,255,255,.03)!important;border:1px solid rgba(255,255,255,.10)!important}
  .mode-mqtt-row input{margin:0;accent-color:var(--primary-color,#007aff)}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .entry-sensor-list{border-color:rgba(0,0,0,.12)!important;background:rgba(0,0,0,.03)!important}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .mode-mqtt-row{background:rgba(0,0,0,.03)!important;border-color:rgba(0,0,0,.12)!important}
  .input-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-left: 4px; }

  /* Intelligent Entry Card */
  .entry{position:relative;overflow:hidden;border-radius:28px;border:1px solid rgba(255,255,255,0.08);margin-bottom:16px;min-height:220px;display:flex;flex-direction:column;transition:transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);box-shadow:0 12px 30px rgba(0,0,0,0.15)}
  .entry:hover{transform:translateY(-2px);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 20px 48px rgba(0,0,0,.3)}
  .entry::after{content:'';position:absolute;inset:0;z-index:2;pointer-events:none;border-radius:inherit;background:linear-gradient(120deg,rgba(255,255,255,.14),transparent 22%,transparent 74%,rgba(255,255,255,.05));mix-blend-mode:soft-light}
  .entry-status-ribbon{position:absolute;top:20px;left:20px;z-index:5;display:flex;align-items:center;gap:9px;max-width:calc(100% - 260px);padding:8px 12px;border:1px solid color-mix(in srgb,var(--entry-accent) 55%,rgba(255,255,255,.2));border-radius:14px;background:linear-gradient(135deg,color-mix(in srgb,var(--entry-accent) 28%,rgba(8,15,28,.76)),rgba(7,14,25,.56));box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 8px 24px color-mix(in srgb,var(--entry-accent) 22%,transparent);backdrop-filter:blur(18px) saturate(150%);-webkit-backdrop-filter:blur(18px) saturate(150%);color:#fff}
  .entry-status-orb{width:10px;height:10px;flex:0 0 auto;border-radius:50%;background:var(--entry-accent);box-shadow:0 0 12px var(--entry-accent)}
  .entry-status-copy{display:flex;flex-direction:column;min-width:0}.entry-status-kicker{font-size:8px;line-height:1;text-transform:uppercase;letter-spacing:.12em;opacity:.72;font-weight:800}.entry-status-name{font-size:13px;line-height:1.2;font-weight:900;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry-status-event{font-size:9px;line-height:1.2;opacity:.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:290px}
  .entry-bg{position:absolute;inset:0;z-index:1;background-size:cover;background-position:center;transition:opacity 0.5s ease}
  .entry-bg img{width:100%;height:100%;object-fit:cover;opacity:0.6}
  .entry-content{position:relative;z-index:2;flex:1;padding:20px 140px 20px 20px;display:grid;grid-template-columns:140px 1fr;gap:20px;align-items:center;background:linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 60%)}
  /* The live instance is the console: real controls, real sensors and one
     clear disarm keypad. Decorative dashboard cards never sit above it. */
  .security-console{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;gap:32px;padding:32px 24px 24px;background:linear-gradient(90deg,rgba(3,10,20,.40),rgba(3,10,20,.08) 50%,rgba(3,10,20,.36))}
  .security-console .entry-icon{order:2;flex:0 0 160px!important;min-height:150px!important;margin:0!important;display:flex;justify-content:center;align-items:center;animation:float-icon 5s ease-in-out infinite}.security-console .entry-icon svg{max-width:150px!important;width:100%}
  .security-console .liquid-stack{order:1;flex:1 1 250px;max-width:320px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.security-console .liquid-btn{min-height:62px;justify-content:center;text-align:center;padding:10px;font-size:12px;gap:8px;white-space:nowrap}.security-console .liquid-btn span:last-child{min-width:0;overflow:hidden;text-overflow:ellipsis}.security-console .btn-disarm,.security-console .btn-sos{grid-column:1/-1}
  .console-sensors{order:3;flex:1 1 300px;max-width:400px;display:grid;gap:14px;align-content:center}.console-sensor{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:13px 16px;border:1px solid rgba(255,255,255,.15);border-radius:18px;background:linear-gradient(100deg,rgba(36,188,129,.22),rgba(10,27,38,.58));backdrop-filter:blur(18px);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 8px 22px rgba(0,0,0,.22)}.console-sensor.open{background:linear-gradient(100deg,rgba(235,74,67,.30),rgba(34,14,23,.62));border-color:rgba(255,102,92,.7)}.console-sensor-icon{font-size:20px}.console-sensor-name{font-weight:850;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.console-sensor-state{font-size:11px;font-weight:900;text-transform:uppercase;color:#75f4b0}.console-sensor.open .console-sensor-state{color:#ff968b}.console-empty{padding:24px;text-align:center;border:1px dashed rgba(255,255,255,.22);border-radius:18px;opacity:.75}
  .console-keypad{flex:1 1 220px;max-width:280px;padding:18px;border:1px solid rgba(255,255,255,.16);border-radius:24px;background:rgba(5,15,30,0.4);backdrop-filter:blur(16px);display:grid;gap:12px}.console-keypad-title{font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;text-align:center}.console-keypad-close{position:absolute;top:8px;right:10px;width:28px;height:28px;border:0;border-radius:50%;background:rgba(255,255,255,.1);color:#fff;font-size:20px;line-height:1;cursor:pointer}.console-keypad{position:relative}.console-pin-display{width:100%;box-sizing:border-box;padding:11px;border-radius:14px;border:1px solid rgba(255,255,255,.18);background:rgba(4,14,26,.46);color:#fff;text-align:center;font-size:20px;letter-spacing:.35em}.console-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;place-items:center}.console-pad button{width:100%;aspect-ratio:1/1;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:linear-gradient(145deg,rgba(165,220,255,.24),rgba(20,45,66,.62));color:#fff;font-size:17px;font-weight:800;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 6px 14px rgba(0,0,0,.25);cursor:pointer;display:flex;align-items:center;justify-content:center}.console-pad .console-enter{border-radius:16px;aspect-ratio:auto;height:100%;color:#7ff8c1;border-color:rgba(74,230,157,.65)}.console-keypad small{text-align:center;opacity:.7}.console-pin-status{min-height:1.2em;margin:0;color:#ffb4ac;opacity:0;transition:opacity .18s ease}.console-pin-status.visible{opacity:1}
  /* ── Console HUD header (inside the flex layout, not absolute) ──────── */
  .console-hud{order:0;flex:0 0 100%;display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:rgba(0,0,0,0.25);border-radius:14px;backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);gap:12px;flex-wrap:wrap}
  .console-hud-loc{font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:1.2px;opacity:.9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .console-hud-right{display:flex;align-items:center;gap:10px;flex-shrink:0}
  .console-hud-time{font-size:16px;font-weight:800;letter-spacing:-.02em}
  .console-hud-temp{font-size:11px;opacity:.8;font-weight:700}
  .console-hud-temps{display:flex;gap:6px;flex-wrap:wrap;align-items:center}
  .console-hud-tpill{font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12)}
  /* Hide the floating absolute HUD inside security-console to avoid overlap with sensor list */
  .security-console .hud,.ios-fullscreen .entry-content.security-console ~ .hud,.entry-content.security-console + .hud{display:none!important}
  /* The .hud inside the article gets hidden when the content is a security-console */
  .entry:has(.security-console) .hud{display:none!important}
  @media(max-width:950px){.grid{grid-template-columns:1fr;grid-template-areas:"instances" "activity" "modes" "access" "automations" "backup" "github"}.security-console{flex-direction:column;padding:10px 18px 24px;gap:20px}.security-console .entry-icon{order:2!important;flex:0 0 auto!important;min-height:130px!important}.security-console .liquid-stack{order:3!important;width:100%;max-width:320px}.security-console .console-sensors{order:4!important;width:100%;max-width:320px}.console-hud{order:1!important}.console-keypad{width:100%;max-width:320px}}

  /* Sensor column */
  .sensor-column{position:absolute;right:0;top:0;bottom:0;width:auto;max-width:40%;z-index:4;display:flex;flex-direction:column;gap:7px;align-items:flex-end;justify-content:center;padding:12px 12px 12px 0;pointer-events:none}
  .sensor-chip{display:flex;align-items:center;gap:6px;padding:7px 10px;border-radius:16px;font-size:10px;font-weight:800;letter-spacing:.2px;max-width:148px;backdrop-filter:blur(20px) saturate(140%);-webkit-backdrop-filter:blur(20px) saturate(140%);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 7px 18px rgba(0,0,0,.24);transition:transform .2s,box-shadow .2s}
  .sensor-chip-text{display:flex;flex-direction:column;min-width:0;flex:1}
  .sensor-chip-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .sensor-chip-state{font-size:8px;letter-spacing:.08em;text-transform:uppercase;opacity:.82;margin-top:2px}
  .sensor-chip-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
  .sensor-chip-battery{grid-column:1 / -1;margin-top:5px;padding-top:5px;border-top:1px solid currentColor;font-size:9px;line-height:1;opacity:.9}
  .sensor-chip--open{background:linear-gradient(135deg,rgba(255,149,0,.9),rgba(255,96,0,.64));color:#fff}
  .sensor-chip--open .sensor-chip-dot{background:#fff;box-shadow:0 0 8px rgba(255,255,255,.95)}
  .sensor-chip--triggered{background:linear-gradient(135deg,rgba(255,69,58,.96),rgba(190,30,35,.82));animation:chip-pulse .9s ease-in-out infinite}
  .sensor-chip--closed{background:rgba(15,23,32,.62);color:#eef8f1}
  .sensor-chip--closed .sensor-chip-dot{background:#34c759;box-shadow:0 0 8px rgba(52,199,.9)}
  .sensor-chip-battery.low{color:#ffd166;font-weight:900}
  .buzz-orange{position:relative;border-color:rgba(255,171,64,.92)!important;background:linear-gradient(135deg,rgba(255,149,0,.38),rgba(255,109,0,.16))!important;box-shadow:0 0 0 1px rgba(255,183,77,.45),0 0 25px rgba(255,145,0,.55),inset 0 1px 0 rgba(255,255,255,.3)!important;animation:buzz-orange 1.05s cubic-bezier(.36,.07,.19,.97) infinite}
  .buzz-orange::after{content:'⚠';margin-left:auto;color:#fff3d1;font-size:14px;filter:drop-shadow(0 1px 3px rgba(0,0,0,.28))}
  @keyframes buzz-orange{0%,100%{transform:translateX(0) rotate(0)}12%{transform:translateX(-2px) rotate(-.65deg)}25%{transform:translateX(3px) rotate(.8deg)}40%{transform:translateX(-3px) rotate(-.8deg)}55%{transform:translateX(2px) rotate(.55deg)}70%{transform:translateX(-1px) rotate(-.25deg)}}
  @keyframes chip-pulse{0%,100%{opacity:1}50%{opacity:0.55}}

  /* HUD Overlay */
  .hud{position:absolute;top:20px;right:24px;text-align:right;z-index:3;color:var(--hud-text-color);text-shadow:var(--text-shadow);display:flex;flex-direction:column;gap:4px}
  .hud-loc{font-size:13px;font-weight:900;text-transform:uppercase;opacity:1;letter-spacing:1.5px;background:var(--hud-bg);padding:4px 12px;border-radius:10px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.08);align-self:flex-end}
  .hud-data{font-size:20px;font-weight:800;letter-spacing:-0.02em;background:var(--hud-bg);padding:6px 14px;border-radius:12px;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.08);display:inline-flex;align-items:center;gap:8px;align-self:flex-end}
  .hud-data i{font-size:14px;opacity:0.7;font-style:normal}
  .hud-temperatures{display:flex;justify-content:flex-end;gap:5px;flex-wrap:wrap}
  .hud-temperature{padding:4px 8px;border-radius:999px;background:var(--hud-bg);border:1px solid rgba(255,255,255,.09);font-size:10px;font-weight:800;backdrop-filter:blur(8px)}
  .weather-eclipse{position:absolute;left:22px;bottom:18px;z-index:2;padding:7px 11px;border-radius:14px;background:rgba(18,10,28,.52);border:1px solid rgba(255,192,92,.36);backdrop-filter:blur(10px);font-size:10px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.25);pointer-events:none}

  /* Liquid Glass Buttons */
  .liquid-stack{display:grid;gap:10px}
  .liquid-btn{border:none;background:rgba(255,255,255,0.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);color:#fff;padding:14px 18px;border-radius:18px;font-size:13.5px;font-weight:800;display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer;transition:all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);border:1px solid rgba(255,255,255,0.08);text-shadow:0 1px 2px rgba(0,0,0,0.3);letter-spacing:0.5px}
  .mode-btn-icon{width:26px;height:26px;padding:5px;border-radius:10px;flex:0 0 auto;background:linear-gradient(135deg,rgba(255,255,255,.24),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 4px 10px rgba(0,0,0,.16);filter:drop-shadow(0 2px 4px rgba(0,0,0,.2))}
  .liquid-btn.active .mode-btn-icon{background:linear-gradient(135deg,rgba(255,255,255,.36),rgba(255,255,255,.12));border-color:rgba(255,255,255,.42)}
  .btn-sos .mode-btn-icon{width:28px;height:28px;border-radius:11px;background:rgba(255,255,255,.17)}
  .liquid-btn:hover{background:rgba(255,255,255,0.14);transform:translateX(4px);border-color:rgba(255,255,255,0.2)}
  .liquid-btn.active{background:var(--btn-bg, rgba(255,255,255,0.2));border-color:rgba(255,255,255,0.4);box-shadow:0 8px 24px var(--btn-shadow, rgba(255,255,255,0.12))}
  .liquid-btn:active:not(:disabled) { transform: scale(0.96); }
  .liquid-btn i{font-size:16px}

  .btn-home.active{--btn-bg:rgba(251,140,0,0.22); --btn-shadow:rgba(251,140,0,0.3)}
  .btn-away.active{--btn-bg:rgba(229,57,53,0.22); --btn-shadow:rgba(229,57,53,0.3)}
  .btn-night.active{--btn-bg:rgba(30,136,229,0.22); --btn-shadow:rgba(30,136,229,0.3)}
  .btn-vacation.active{--btn-bg:rgba(156,39,176,0.22); --btn-shadow:rgba(156,39,176,0.3)}
  .btn-disarm{--btn-bg:rgba(67,160,71,0.15); margin-top:4px}
  .btn-disarm.active{--btn-bg:rgba(67,160,71,0.25);--btn-shadow:rgba(67,160,71,0.4);border-color:rgba(67,160,71,0.45)!important;box-shadow:0 8px 24px rgba(67,160,71,0.35)!important}

  .ios-fullscreen { position: fixed !important; z-index: 999999 !important; display: flex !important; flex-direction: column !important; background: #000 !important; }
  @media(min-width:900px) {
    .ios-fullscreen { inset: 3% !important; width: 94vw !important; height: 94vh !important; max-width: 1500px !important; margin: auto !important; border-radius: 36px !important; border: 1px solid rgba(255,255,255,0.12) !important; box-shadow: 0 40px 100px rgba(0,0,0,0.8) !important; overflow: hidden !important; }
  }
  @media(max-width:899px) {
    .ios-fullscreen { inset: 0 !important; width: 100vw !important; height: 100vh !important; max-width: none !important; margin: 0 !important; border-radius: 0 !important; }
  }
  .ios-fullscreen .entry-content { grid-template-columns: 320px 1fr !important; padding: 60px !important; gap: 60px !important; height: 100% !important; align-items: center !important; background: radial-gradient(circle at 20% 50%, rgba(0,0,0,0.5) 0%, transparent 80%) !important; }
  .ios-fullscreen .liquid-btn { padding: 16px 20px !important; font-size: 16px !important; border-radius: 20px !important; gap: 12px !important; box-shadow: 0 10px 40px rgba(0,0,0,0.4) !important; }
  .ios-fullscreen .liquid-btn i { font-size: 24px !important; }
  .ios-fullscreen .hud { top: 60px !important; right: 60px !important; scale: 1.4; transform-origin: top right; }
  .ios-fullscreen .sensor-column { max-width: 45% !important; padding-right: 60px !important; }
  .ios-fullscreen .sensor-chip { font-size: 14px !important; padding: 10px 16px !important; max-width: 260px !important; }

  .entry-icon{display:flex;justify-content:center;align-items:center;perspective:1000px;min-height:160px}
  .entry-icon svg{width:100%;height:auto;max-width:280px;filter:drop-shadow(0 0 25px rgba(255,255,255,0.12));animation:float-icon 5s ease-in-out infinite;transition:max-width 0.4s ease}
  .ios-fullscreen .entry-icon svg{max-width:650px;filter:drop-shadow(0 0 60px rgba(255,255,255,0.3))}
  @keyframes float-icon{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(-12px) rotate(1deg)}}

  /* Phone layout: controls must never sit below the HUD or be hidden behind
     the artwork. Sensor status becomes a readable section beneath the modes. */
  @media(max-width:700px){
    .hero-context{width:100%;margin:6px 0 0;justify-content:space-between}.hero-clock{align-items:flex-start;border-right:0;padding-right:0}.hero-clock strong{font-size:1.25rem}.hero-pills{justify-content:flex-end}.hero-pill{padding:6px 8px;font-size:9px}
    .entry{min-height:0;border-radius:24px}
    .instance-activity-strip{grid-template-columns:1fr;gap:5px;margin-bottom:12px;padding:10px}.instance-activity-item:nth-of-type(n+3){display:none}
    .entry-status-ribbon{top:58px;left:14px;max-width:calc(100% - 28px);padding:6px 9px}.entry-status-name{font-size:11px}.entry-status-event{display:none}
    .entry-content{display:grid;grid-template-columns:minmax(0,1fr);padding:78px 14px 76px;gap:14px;align-items:start;background:linear-gradient(180deg,rgba(0,0,0,.32),rgba(0,0,0,.10) 45%,rgba(0,0,0,.28))}
    .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;width:100%}
    .liquid-btn{min-height:52px;padding:10px 11px;justify-content:center;text-align:center;font-size:12px;line-height:1.1;letter-spacing:.25px;border-radius:16px}
    .liquid-stack .btn-disarm,.liquid-stack .btn-sos{grid-column:1/-1}
    .liquid-stack .btn-sos{min-height:58px;margin-top:2px}
    .entry-icon{display:none}
    .hud{top:12px;left:14px;right:14px;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;gap:8px;text-align:left}
    .hud-loc{align-self:auto;max-width:58%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;letter-spacing:1px;padding:6px 9px}
    .hud-data{align-self:auto;font-size:15px;padding:5px 9px;gap:5px}
    .hud-data i{font-size:11px}
    .hud-temperatures{justify-content:flex-start;position:absolute;top:42px;left:0}
    .hud-temperature{font-size:9px;padding:3px 6px}
    .weather-eclipse{left:14px;bottom:14px;padding:5px 7px;font-size:8px}
    .sensor-column{position:static;grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;width:auto;padding:0;overflow:visible;pointer-events:auto;align-items:stretch}
    .sensor-chip{max-width:none;min-width:0;padding:8px 9px;font-size:10px;border-radius:13px}
    .entry-fs{bottom:14px!important;right:14px!important;padding:8px 11px!important;font-size:15px!important}
  }

  /* Fullscreen on phones has its own compact layouts for both orientations. */
  .ios-fullscreen{height:100dvh!important;min-height:100dvh!important}
  @media(max-width:700px) and (orientation:portrait){
    .ios-fullscreen .entry-content{grid-template-columns:minmax(0,1fr)!important;padding:76px 16px 22px!important;gap:14px!important;overflow-y:auto!important;align-content:start!important}
    .ios-fullscreen .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:9px!important}
    .ios-fullscreen .liquid-btn{min-height:50px!important;padding:10px!important;font-size:12px!important;border-radius:16px!important;gap:6px!important}
    .ios-fullscreen .liquid-stack .btn-disarm,.ios-fullscreen .liquid-stack .btn-sos{grid-column:1/-1}
    .ios-fullscreen .entry-icon{display:none!important}
    .ios-fullscreen .sensor-column{position:static!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;width:auto!important;padding:0!important;gap:8px!important}
    .ios-fullscreen .sensor-chip{max-width:none!important;padding:8px 9px!important;font-size:10px!important}
    .ios-fullscreen .hud{top:12px!important;left:16px!important;right:16px!important;scale:1!important;transform:none!important}
  }
  @media(max-width:900px) and (orientation:landscape){
    .ios-fullscreen .entry-content{grid-template-columns:minmax(210px,34vw) minmax(0,1fr)!important;padding:54px 22px 18px!important;gap:20px!important;align-items:center!important}
    .ios-fullscreen .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}
    .ios-fullscreen .liquid-btn{min-height:42px!important;padding:8px!important;font-size:11px!important;border-radius:14px!important;gap:5px!important}
    .ios-fullscreen .liquid-stack .btn-disarm,.ios-fullscreen .liquid-stack .btn-sos{grid-column:1/-1}
    .ios-fullscreen .liquid-stack .btn-sos{min-height:46px!important}
    .ios-fullscreen .entry-icon svg{max-width:min(42vw,300px)!important}
    .ios-fullscreen .hud{top:10px!important;right:18px!important;scale:1!important}
    .ios-fullscreen .sensor-column{max-width: 40% !important;padding-right:16px!important;gap:5px!important}
    .ios-fullscreen .sensor-chip{max-width:180px!important;padding:6px 8px!important;font-size:10px!important}
  }
  /* The active console owns its fullscreen layout. Legacy entry grid rules
     must not redistribute the controls into empty corners. */
  /* Fullscreen security-console: modos izquierda, escudo centro, sensores derecha */
  .ios-fullscreen .entry-content.security-console{display:flex!important;flex-wrap:nowrap!important;justify-content:center!important;align-items:center!important;gap:32px!important;padding:50px 48px 36px!important;overflow:auto!important;height:100%!important;box-sizing:border-box!important}
  .ios-fullscreen .entry-content.security-console .liquid-stack{order:1!important;flex:0 1 340px!important;min-width:240px!important;max-width:360px!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;align-self:center!important}
  .ios-fullscreen .entry-content.security-console .entry-icon{order:2!important;flex:0 0 180px!important;min-height:160px!important;margin:0!important;display:flex!important;justify-content:center!important;align-items:center!important}
  .ios-fullscreen .entry-content.security-console .console-sensors{order:3!important;flex:0 1 340px!important;min-width:220px!important;max-width:380px!important;align-self:center!important}
  .ios-fullscreen .entry-content.security-console .console-keypad{order:4!important;flex:0 0 240px!important;width:240px!important;max-width:260px!important}
  @media(max-width:900px){.ios-fullscreen .entry-content.security-console{flex-wrap:wrap!important;padding:80px 20px 24px!important;gap:18px!important;align-content:flex-start!important;overflow-y:auto!important}.ios-fullscreen .entry-content.security-console .entry-icon{order:1!important;flex:0 0 auto!important;min-height:110px!important;display:flex!important}.ios-fullscreen .entry-content.security-console .liquid-stack{order:2!important;flex:0 0 100%!important;width:100%!important;max-width:380px!important}.ios-fullscreen .entry-content.security-console .console-sensors{order:3!important;flex:0 0 100%!important;width:100%!important;max-width:380px!important}.ios-fullscreen .entry-content.security-console .console-keypad{order:4!important;flex:0 0 100%!important;width:100%!important;max-width:320px!important;padding:14px!important}}

  .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:999px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
  .badge.armed_away,.badge.armed_vacation{background:rgba(229,57,53,.12);color:var(--error-color,#e53935)}
  .badge.armed_home,.badge.armed_night{background:rgba(251,140,0,.12);color:#fb8c00}
  .badge.disarmed{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}
  .badge.triggered{background:rgba(229,57,53,.2);color:var(--error-color,#e53935);animation:pulse 1s ease-in-out infinite}

  @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
  .meta{font-size:12px;opacity:.5}
  .setting-label{font-size:13px;font-weight:700;color:var(--primary-text-color);letter-spacing:0.01em;margin-bottom:2px;display:block}
  .setting-sublabel{font-size:12px;font-weight:400;opacity:0.55;color:var(--primary-text-color);margin-bottom:6px;display:block}
  .temp-alert-row{display:flex;gap:10px;align-items:center;margin-top:8px;flex-wrap:wrap}
  .temp-alert-row input[type=number]{width:72px;padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);color:inherit;font-size:13px;font-weight:700;text-align:center}
  .temp-alert-status-ok{color:#43a047;font-size:12px}
  .temp-alert-status-warn{color:#e53935;font-size:12px;font-weight:700}

  /* Generic buttons */
  button{border:0;border-radius:14px;padding:10px 18px;font:700 13px/1 'Outfit',Inter,system-ui,sans-serif;cursor:pointer;transition:background 0.2s,opacity .15s,transform .15s cubic-bezier(0.175, 0.885, 0.32, 1.275),box-shadow 0.2s}
  button:active:not(:disabled){transform:scale(.94) translateY(1px)}
  button.primary{background:var(--primary-color,#007aff);color:#fff;box-shadow:0 4px 12px rgba(0, 122, 255, 0.25)}
  button.primary:hover{background:#0062cc}
  button.ghost{background:rgba(255, 255, 255, 0.05);border:1px solid rgba(255, 255, 255, 0.08);color:var(--primary-text-color)}
  button.ghost:hover{background:rgba(255, 255, 255, 0.1)}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) button.ghost { background:rgba(0,0,0,0.03); border-color:rgba(0,0,0,0.08); }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) button.ghost:hover { background:rgba(0,0,0,0.06); }


  /* FS button */
  .fs-btn{background:rgba(255,255,255,0.05);padding:8px;border-radius:10px;font-size:16px}

  /* Modal Fixes */
  .modal-back{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:center;justify-content:center;padding:20px;z-index:999999;backdrop-filter:blur(12px)}
  .modal-back.open{display:flex}
  .modal{width:min(400px,100%);max-height:85vh;overflow:hidden;display:grid;grid-template-rows:auto 1fr auto;gap:14px;padding:24px;border-radius:32px;background:rgba(22, 24, 38, 0.95);border:1px solid rgba(255,255,255,0.08);box-shadow:0 30px 100px rgba(0,0,0,0.6);backdrop-filter:blur(28px)}
  .modal-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
  .modal-head h3{margin:0;font-size:20px;font-weight:800}
  .modal-body{overflow:auto;padding:5px}
  .modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:15px}
  /* PIN modal */
  .pm .modal{max-width:340px;min-height:unset;grid-template-rows:auto auto auto;background:rgba(22, 24, 38, 0.82) !important;backdrop-filter:blur(16px) saturate(140%) !important;-webkit-backdrop-filter:blur(16px) saturate(140%) !important;border:1px solid rgba(255, 255, 255, 0.12) !important;box-shadow:0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;border-radius:36px;padding:28px;display:flex;flex-direction:column;align-items:center;gap:16px}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pm .modal{background:rgba(255, 255, 255, 0.85) !important;border:1px solid rgba(0, 0, 0, 0.08) !important;box-shadow:0 20px 50px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;color:#1d1d1f !important}
  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:12px;border-radius:16px;border:none;background:rgba(255,255,255,0.02);color:inherit;width:100%;outline:none;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2)}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pin-input{background:rgba(0,0,0,0.03)}
  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}
  .pin-grid{display:grid;grid-template-columns:repeat(3,68px);gap:16px;justify-content:center;margin-top:10px}
  .pin-btn-round{width:68px;height:68px;border-radius:50% !important;border:1px solid rgba(255,255,255,0.1) !important;background:rgba(255,255,255,0.04) !important;color:#fff !important;font-size:24px;font-weight:600;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s, transform 0.15s, border-color 0.2s;box-shadow:0 4px 10px rgba(0,0,0,0.15);padding:0 !important;outline:none}
  .pin-btn-round:hover{background:rgba(255,255,255,0.12) !important;border-color:rgba(255,255,255,0.2) !important}
  .pin-btn-round:active{transform:scale(0.92) !important;background:rgba(255,255,255,0.2) !important}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pin-btn-round{background:rgba(0,0,0,0.03) !important;border-color:rgba(0,0,0,0.08) !important;color:#1d1d1f !important}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pin-btn-round:hover{background:rgba(0,0,0,0.08) !important}
  .pin-btn-round.action-key{font-size:12px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;border-color:transparent !important;background:transparent !important;box-shadow:none}
  .pin-btn-round.action-key:hover{background:rgba(255,255,255,0.05) !important}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pin-btn-round.action-key:hover{background:rgba(0,0,0,0.04) !important}
  .pin-btn-round.action-key.enter-key{color:#34c759 !important}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pin-btn-round.action-key.enter-key{color:#28a745 !important}
  .pin-btn-round.action-key.delete-key{color:#ff3b30 !important}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .pin-btn-round.action-key.delete-key{color:#dc3545 !important}
  /* User card */
  .user-card{display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:16px;border:1px solid var(--user-card-border, rgba(255,255,255,0.06));background:var(--user-card-bg, rgba(255,255,255,0.02));box-shadow:0 4px 10px rgba(0,0,0,0.08)}
  .user-badge{display:inline-block;padding:3px 9px;border-radius:8px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;background:rgba(0,122,255,.12);color:var(--primary-color,#007aff)}
  .user-badge.admin{background:rgba(251,140,0,.12);color:#fb8c00}
  /* Notif target chip */
  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:rgba(67,160,71,.1);border:1px solid rgba(67,160,71,.2);font-size:12px;font-weight:700;color:var(--success-color,#43a047)}
  .notif-chip button{padding:0;border:0;background:none;cursor:pointer;opacity:.65}
  /* Triggered box */
  .trig-box{padding:12px 14px;border-radius:14px;background:rgba(229,57,53,.08);border:1px dashed var(--error-color,#e53935);font-size:12px;font-weight:600;color:var(--error-color,#e53935)}
  /* inputs */
  input[type="text"], input[type="password"], input[type="number"], input[type="search"], select, input[type="datetime-local"], .glass-control {
    width: 100%;
    padding: 11px 14px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.055));
    color: var(--primary-text-color);
    backdrop-filter: blur(18px) saturate(145%);
    -webkit-backdrop-filter: blur(18px) saturate(145%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), 0 8px 22px rgba(0, 0, 0, 0.12);
    font: 700 13px/1.2 'Outfit', Inter, system-ui, sans-serif;
    outline: none;
    transition: transform 0.34s cubic-bezier(0.18, 0.89, 0.32, 1.32), border-color 0.22s, box-shadow 0.22s;
    display: block;
    box-sizing: border-box;
  }
  input[type="text"]:focus, input[type="password"]:focus, input[type="number"]:focus, input[type="search"]:focus, select:focus, input[type="datetime-local"]:focus, .glass-control:focus {
    transform: scale(1.018);
    border-color: rgba(112, 188, 255, 0.78);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.23), 0 0 0 4px rgba(0, 122, 255, 0.14), 0 10px 28px rgba(0, 0, 0, 0.16);
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) input[type="text"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) input[type="password"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) input[type="number"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) input[type="search"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) select,
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) input[type="datetime-local"],
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .glass-control {
    background: rgba(255, 255, 255, 0.52);
    border-color: rgba(0, 0, 0, 0.10);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 6px 16px rgba(0, 0, 0, 0.05);
  }
  /* search */
  .search-wrap{display:flex;gap:10px;align-items:center}
  .search-wrap input{flex:1;min-width:0}
  /* ── Dual-panel selector modal ───────────────────────────────────────────────────── */
  #selector-modal .modal{width:min(980px,96vw);height:min(780px,92vh);max-height:92vh;grid-template-rows:auto minmax(0,1fr) auto}
  #selector-modal .modal-body{min-height:0;height:100%;padding:5px 0}
  .sel-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px;overflow:hidden;min-height:0;height:100%}
  @media(max-width:600px){.sel-grid{grid-template-columns:1fr}}
  .sel-panel{display:flex;flex-direction:column;gap:8px;overflow:hidden;min-width:0;min-height:0;padding:12px;border-radius:18px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.07)}
  .sel-panel-inner{overflow-y:auto;overscroll-behavior:contain;flex:1;min-height:0;display:grid;gap:6px;align-content:start;padding-right:4px}
  .sel-actions{display:flex;gap:6px;flex-wrap:wrap;flex-shrink:0}
  .pick-row{display:grid;grid-template-columns:20px minmax(0,1fr);align-items:start;gap:10px;padding:12px;border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.025);cursor:pointer;transition:background .12s,border-color .12s}
  .pick-row:hover{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.16)}
  .pick-row:has(input:checked){border-color:rgba(0,122,255,.58);background:rgba(0,122,255,.10)}
  .pick-row input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--primary-color,#007aff);margin-top:2px}
  .pick-row-name{font-weight:750;font-size:13px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;line-height:1.25}
  .pick-row-meta{font-size:11px;opacity:0.58;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .device-facts{display:flex;gap:5px;flex-wrap:wrap;margin-top:7px}
  .device-fact{display:inline-flex;align-items:center;min-height:20px;padding:2px 7px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);font-size:10px;font-weight:750;line-height:1.1;white-space:nowrap}
  .device-fact.status-open{color:#ff8a80;background:rgba(255,82,82,.12)}
  .device-fact.status-closed{color:#7ee2a8;background:rgba(52,199,.12)}
  .device-fact.power-low{color:#ffd166;background:rgba(255,183,77,.13)}
  .sel-right-item{display:flex;align-items:center;justify-content:space-between;min-width:0;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.09);background:rgba(255,255,255,0.055);font-size:13px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.06)}
  .sel-right-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}
  .sel-right-facts{display:flex;gap:5px;flex-wrap:wrap;margin-top:5px}
  .mode-sensor-grid .sensor-pill{width:100%;min-width:0;padding:9px 10px;gap:7px}
  .mode-sensor-grid .sensor-pill .pill-content{display:grid;grid-template-columns:minmax(0,1fr) auto auto;align-items:center;gap:6px;min-width:0;flex:1}
  .mode-sensor-grid .sensor-pill .pill-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .mode-sensor-grid .sensor-pill .pill-status{font-size:10px;font-weight:800;opacity:.78;white-space:nowrap}
  .mode-sensor-grid .sensor-pill .pill-power{font-size:10px;font-weight:700;opacity:.82;white-space:nowrap}
  .sel-panel-inner::-webkit-scrollbar{width:7px}.sel-panel-inner::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.18);border-radius:99px}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sel-panel{background:rgba(0,0,0,0.025);border-color:rgba(0,0,0,0.08)}
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sel-right-item{background:rgba(255,255,255,0.58);border-color:rgba(0,0,0,0.09)}
  /* Activity log */
  .log-item{display:flex;align-items:flex-start;gap:12px;padding:13px;border-radius:18px;border:1px solid var(--log-item-border, rgba(255,255,255,.05));background:linear-gradient(135deg,color-mix(in srgb,var(--log-item-bg,rgba(255,255,255,.02)) 84%,#fff 16%),var(--log-item-bg,rgba(255,255,255,.02)));color:var(--primary-text-color,#fff);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 7px 18px rgba(0,0,0,.10)}
  .log-icon{width:34px;height:34px;display:grid;place-items:center;border-radius:13px;flex-shrink:0;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 5px 12px rgba(0,0,0,.12)}
  .glass-orb{width:14px;height:14px;border-radius:50%;box-shadow:inset 0 2px 4px rgba(255,255,255,0.5),0 2px 6px rgba(0,0,0,0.2);background:rgba(255,255,255,0.3)}
  .log-item.log-item--armed .log-icon{background:rgba(255,149,0,.16);border-color:rgba(255,183,77,.28)}
  .log-item.log-item--armed .glass-orb{background:linear-gradient(135deg,#ffb74d,#f57c00)}
  .log-item.log-item--disarmed .log-icon{background:rgba(52,199,.14);border-color:rgba(105,219,139,.28)}
  .log-item.log-item--disarmed .glass-orb{background:linear-gradient(135deg,#69db8b,#388e3c)}
  .log-item.log-item--triggered .log-icon{background:rgba(255,69,58,.16);border-color:rgba(255,139,131,.30)}
  .log-item.log-item--triggered .glass-orb{background:linear-gradient(135deg,#ff8b83,#d32f2f)}
  .log-body{flex:1;min-width:0}
  .log-title{font-weight:700;font-size:13px}
  .log-meta{font-size:11px;opacity:.55;margin-top:2px}
  .log-badge{display:inline-block;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;margin-right:4px}
  .log-badge.arm{background:rgba(251,140,0,.12);color:#fb8c00}
  .log-badge.disarm{background:rgba(67,160,71,.12);color:var(--success-color,#43a047)}
  .log-badge.trigger{background:rgba(229,57,53,.15);color:var(--error-color,#e53935)}
  button:focus-visible,input:focus-visible,select:focus-visible,a:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 72%,#fff);outline-offset:3px}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}.wx canvas{display:none!important}}
  /* Personalization section styles */
  .personalize-section {
    margin-top: 18px;
    padding: 18px;
    background: var(--personalize-bg, rgba(255,255,255,0.02));
    border: 1px solid var(--personalize-border, rgba(255,255,255,0.06));
    border-radius: 22px;
    display: grid;
    gap: 16px;
  }
  .personalize-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:"home temp" "panel weather" "hub emergency";gap:14px 16px;align-items:start}
  .personalize-column{display:contents}
  .personalize-field{min-width:0;align-self:stretch}
  .pf-home{grid-area:home}.pf-temp{grid-area:temp}.pf-weather{grid-area:weather}.pf-panel{grid-area:panel}.pf-hub{grid-area:hub}.pf-emergency{grid-area:emergency}
  .pf-panel,.pf-hub{display:flex;flex-direction:column;gap:8px}
  .pf-emergency{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);grid-template-areas:"emergency-label emergency-label" "emergency-input emergency-help";gap:5px 16px;align-items:start;padding-top:2px}
  .pf-emergency #lbl-emergency-number{grid-area:emergency-label}.pf-emergency #emergency-number-input{grid-area:emergency-input}.pf-emergency #emergency-number-help{grid-area:emergency-help;margin:0!important}
  .sos-configuration {
    padding: 18px;
    border-radius: 24px;
    border: 1px solid rgba(255, 59, 48, 0.25);
    background: linear-gradient(135deg, rgba(255, 59, 48, 0.12), rgba(255, 255, 255, 0.02));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 12px 28px rgba(255, 59, 48, 0.06), 0 8px 20px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  /* SOS uses the full personalization width so outputs never create a tall,
     narrow list with unused space beside it. */
  .sos-configuration{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"title action" "outputs outputs" "help help";gap:12px 16px;align-items:center}
  .sos-configuration #lbl-sos-actions{grid-area:title;margin:0!important;white-space:nowrap}
  .sos-configuration #sos-output-chips{grid-area:outputs;margin:0!important;display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:7px;align-items:stretch;max-height:148px;overflow-y:auto;overflow-x:hidden;padding:2px 5px 2px 2px;overscroll-behavior:contain}
  .sos-configuration #sos-output-chips .sensor-pill{width:100%;min-width:0;min-height:34px;justify-content:center;padding:7px 10px;font-size:11px;border-radius:12px}
  .sos-configuration #sos-output-chips .sensor-pill > span{display:block;min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}
  .sos-configuration #sos-output-chips .mode-sensor-none{grid-column:1/-1;padding:18px;min-height:54px}
  .sos-configuration #btn-select-sos-outputs{grid-area:action;width:auto!important;max-width:230px;min-width:0;white-space:normal;overflow-wrap:anywhere;line-height:1.15}
  .sos-configuration #sos-output-help{grid-area:help;margin:0!important;max-width:none}
  .sos-configuration:hover {
    transform: translateY(-2px);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 16px 36px rgba(255, 59, 48, 0.10), 0 12px 24px rgba(0, 0, 0, 0.16);
  }
  :host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .sos-configuration {
    border-color: rgba(255, 59, 48, 0.3);
    background: linear-gradient(135deg, rgba(255, 59, 48, 0.08), rgba(0, 0, 0, 0.01));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 10px 24px rgba(255, 59, 48, 0.05);
  }
  #sos-output-chips .sensor-pill{background:linear-gradient(135deg,rgba(255,255,255,.16),rgba(255,255,255,.06));border-color:rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 5px 14px rgba(0,0,0,.10)}
  .background-custom-inputs{flex-direction:column;gap:8px;background:rgba(0,0,0,.15);padding:12px;border-radius:18px;border:1px solid rgba(255,255,255,.09);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
  .modal-back.open .modal,
  .lang-modal-back.open .lang-modal-card,
  .ios-confirm-backdrop.open .ios-confirm-card {
    animation: liquidDropIn .48s cubic-bezier(.16,1.24,.32,1) both;
  }
  @keyframes liquidDropIn{0%{opacity:0;transform:translateY(18px) scale(.91);filter:blur(5px)}65%{opacity:1;transform:translateY(-3px) scale(1.018);filter:blur(0)}100%{transform:translateY(0) scale(1)}}
  @keyframes argus-modal-in{0%{opacity:0;transform:scale(.94) translateY(8px)}100%{opacity:1;transform:scale(1) translateY(0)}}
  @media(max-width:700px){
    .personalize-grid{grid-template-columns:minmax(0,1fr);grid-template-areas:"home" "temp" "weather" "panel" "hub" "emergency"}
    .pf-emergency{grid-template-columns:minmax(0,1fr);grid-template-areas:"emergency-label" "emergency-input" "emergency-help"}
    .personalize-section{padding:14px}
    .sos-configuration{display:flex;flex-direction:column;align-items:stretch;gap:10px;padding:14px;border-radius:24px}
    .sos-configuration #lbl-sos-actions{white-space:normal}.sos-configuration #btn-select-sos-outputs{width:100%!important}.sos-configuration #sos-output-help{max-width:none}
  }
  /* ── Weather Animated Backgrounds ────────────────────────────────── */
  .wx{position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1}
  /* Cinematic, data-driven atmosphere replacing the old illustrated landscape. */
  .wx-atmosphere{isolation:isolate;background:linear-gradient(180deg,var(--sky-top),var(--sky-mid) 58%,var(--sky-bottom));overflow:hidden}
  .wx-webgl{position:absolute;inset:0;z-index:2;width:100%;height:100%;pointer-events:none;mix-blend-mode:screen;opacity:.92}
  .wx-atmosphere.webgl-active .wx-precip,.wx-atmosphere.webgl-active .wx-lightning,.wx-atmosphere.webgl-active .wx-fog-real{opacity:0}
  .wx-atmosphere::before{content:'';position:absolute;inset:-20%;z-index:-1;background:radial-gradient(ellipse at 65% 20%,rgba(255,255,255,.18),transparent 30%),radial-gradient(ellipse at 50% 120%,rgba(0,0,0,.48),transparent 48%),linear-gradient(115deg,rgba(255,255,255,.07),transparent 42%);filter:blur(12px)}
  .wx-horizon{position:absolute;inset:auto -10% 0;height:38%;background:linear-gradient(180deg,transparent,rgba(4,10,18,.22) 18%,rgba(3,8,14,.72));filter:blur(1px)}
  .wx-horizon::before{content:'';position:absolute;inset:26% 0 0;background:radial-gradient(ellipse at 12% 100%,rgba(0,0,0,.34) 0 18%,transparent 19%),radial-gradient(ellipse at 50% 100%,rgba(0,0,0,.29) 0 23%,transparent 24%),radial-gradient(ellipse at 89% 100%,rgba(0,0,0,.36) 0 20%,transparent 21%);filter:blur(10px)}
  .wx-celestial{position:absolute;top:11%;right:12%;width:70px;height:70px;border-radius:50%;z-index:1}
  .wx-sun-real{background:radial-gradient(circle at 36% 35%,#fffdf2 0 8%,#fff7b2 24%,#ffc94c 58%,rgba(255,166,30,.65) 100%);box-shadow:0 0 24px 7px rgba(255,196,58,.42),0 0 70px 22px rgba(255,190,48,.18);animation:wxSunBreathe 8s ease-in-out infinite}
  .wx-moon-real{background:radial-gradient(circle at 34% 28%,#fffdf4 0 8%,#e9e4d5 42%,#a8a394 100%);box-shadow:0 0 20px 4px rgba(236,236,222,.28),inset -9px -7px 12px rgba(48,50,60,.22);overflow:hidden}
  .wx-moon-real::after{content:'';position:absolute;inset:-5px;background:var(--moon-shadow,#0a1428);border-radius:50%;transform:translateX(var(--moon-offset,0));box-shadow:0 0 0 1px rgba(0,0,0,.06)}
  .wx-moon-real.full::after{display:none}.wx-moon-real.new{opacity:.14}.wx-moon-real.new::after{display:block;transform:none}.wx-moon-real.waxing-crescent{--moon-offset:42px}.wx-moon-real.first-quarter{--moon-offset:31px}.wx-moon-real.waxing-gibbous{--moon-offset:17px}.wx-moon-real.waning-gibbous{--moon-offset:-17px}.wx-moon-real.last-quarter{--moon-offset:-31px}.wx-moon-real.waning-crescent{--moon-offset:-42px}
  .wx-starfield{position:absolute;inset:0;background-image:radial-gradient(circle at 12% 16%,#fff 0 1px,transparent 1.5px),radial-gradient(circle at 33% 31%,rgba(255,255,255,.8) 0 1px,transparent 1.5px),radial-gradient(circle at 56% 11%,#fff 0 1px,transparent 1.5px),radial-gradient(circle at 73% 38%,rgba(255,255,255,.7) 0 1px,transparent 1.5px),radial-gradient(circle at 91% 20%,#fff 0 1px,transparent 1.5px);opacity:.78;animation:wxStarDrift 16s ease-in-out infinite alternate}
  .wx-cloudfield{position:absolute;inset:-15% -20%;background:radial-gradient(ellipse at 14% 31%,var(--cloud-color) 0 9%,transparent 22%),radial-gradient(ellipse at 43% 18%,var(--cloud-color) 0 12%,transparent 28%),radial-gradient(ellipse at 74% 35%,var(--cloud-color) 0 10%,transparent 24%),radial-gradient(ellipse at 92% 13%,var(--cloud-color) 0 12%,transparent 27%);filter:blur(18px);opacity:var(--cloud-opacity,.72);animation:wxCloudDrift 45s ease-in-out infinite alternate}
  .wx-precip{position:absolute;inset:-20% -10%;opacity:.78;pointer-events:none;overflow:hidden}.wx-precip.rain,.wx-precip.drizzle{background:none;animation:none}.wx-rain-drop{position:absolute;top:-20%;left:var(--x);width:var(--w);height:var(--h);border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(211,237,255,.92));box-shadow:0 0 3px rgba(195,230,255,.38);opacity:var(--o);transform:rotate(17deg);animation:wxDropReal var(--fall) linear var(--delay) infinite}.wx-precip.drizzle .wx-rain-drop{width:1px;opacity:.42;animation-duration:1.35s}.wx-precip.snow{background-image:radial-gradient(circle,rgba(255,255,255,.92) 0 1.6px,transparent 2px);background-size:42px 42px;animation:wxSnowReal 8s linear infinite}
  .wx-lightning{position:absolute;inset:0;background:rgba(238,247,255,0);animation:wxLightningReal 8s ease-in-out infinite;mix-blend-mode:screen}.wx-lightning::after{content:'';position:absolute;top:-5%;left:63%;width:13%;height:72%;background:linear-gradient(115deg,transparent 43%,rgba(255,255,235,.95) 44% 47%,transparent 48%) center/100% 100%;clip-path:polygon(43% 0,75% 0,51% 38%,82% 38%,21% 100%,43% 55%,13% 55%);opacity:0;animation:wxBoltReal 8s ease-in-out infinite;filter:drop-shadow(0 0 8px #fff6bd)}
  .wx-fog-real{position:absolute;inset:20% -40%;background:repeating-linear-gradient(180deg,transparent 0 48px,rgba(235,244,247,.17) 52px 76px,transparent 82px 132px);filter:blur(14px);animation:wxFogReal 18s ease-in-out infinite alternate}
  .wx-seasonal{position:absolute;inset:-20% 0;pointer-events:none;opacity:.62}.wx-seasonal.spring{background-image:radial-gradient(ellipse,rgba(255,204,220,.9) 0 2px,transparent 2.8px);background-size:54px 68px;animation:wxPetals 12s linear infinite}.wx-seasonal.autumn{background-image:radial-gradient(ellipse,rgba(229,142,57,.88) 0 2px,transparent 3px);background-size:66px 80px;animation:wxPetals 10s linear infinite}
  .wx-atmosphere.eclipse-solar .wx-celestial{background:#090d15!important;box-shadow:0 0 0 7px #fff2ad,0 0 24px 12px #ffc75a,0 0 70px 30px rgba(255,195,80,.32)!important}.wx-atmosphere.eclipse-lunar .wx-celestial{background:radial-gradient(circle at 35% 28%,#f08c7c,#a43c3a 60%,#5e232a)!important;box-shadow:0 0 28px 8px rgba(230,86,72,.35)!important}
  @keyframes wxSunBreathe{50%{transform:scale(1.045);filter:brightness(1.08)}}@keyframes wxStarDrift{to{transform:translateY(5px);opacity:.5}}@keyframes wxCloudDrift{to{transform:translateX(9%) translateY(3%)}}@keyframes wxDropReal{to{transform:translate(-14vw,145vh) rotate(17deg)}}@keyframes wxSnowReal{to{transform:translate(30px,90px)}}@keyframes wxLightningReal{0%,71%,74%,100%{background:transparent}72%,73%{background:rgba(238,247,255,.33)}}@keyframes wxBoltReal{0%,71%,74%,100%{opacity:0}72%,73%{opacity:1}}@keyframes wxFogReal{to{transform:translateX(12%)}}@keyframes wxPetals{to{transform:translate(12%,105%) rotate(180deg)}}
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
  .wx-video{position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:1;background:#10141d}
  .wx-video::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,12,.18),rgba(5,8,12,.5));z-index:2}
  #argus-canvas-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background-size:cover;background-position:center;background-repeat:no-repeat}
  #argus-canvas-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.3) 100%);z-index:1;pointer-events:none}

.sensor-pill {
  display:inline-flex; align-items:center; gap:8px;
  background:var(--argus-pill-bg, rgba(255,255,255,0.04));
  border:1px solid var(--argus-pill-border, rgba(255,255,255,0.08));
  border-radius:14px; padding:10px 14px;
  font-size:13px; color:var(--argus-pill-color, rgba(255,255,255,0.95));
  backdrop-filter:blur(10px); transition:all 0.2s cubic-bezier(0.4,0,0.2,1);
  font-weight:700; box-shadow:0 4px 12px rgba(0,0,0,0.08);
}
.sensor-pill:hover { background:var(--argus-pill-bg-hover, rgba(255,255,255,0.08)); border-color:rgba(255,255,255,0.25); transform:translateY(-1px); }
.sensor-pill .pill-dot { width:10px; height:10px; border-radius:50%; background:#34c759; flex-shrink:0; box-shadow:0 0 10px rgba(52,199,0.5); }
.sensor-pill .pill-dot.open { background:#ff3b30; box-shadow:0 0 10px rgba(255,59,48,0.5); }
.sensor-pill .pill-dot.unavailable { background:#999; }
.sensor-pill button { background:none; border:none; color:var(--argus-pill-color, #fff); cursor:pointer; opacity:0.5; padding:4px; font-size:14px; transition:opacity 0.2s; }
.sensor-pill button:hover { opacity:1; }

.mode-sensor-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:12px; margin-top:12px; }
.mode-sensor-none { grid-column:1/-1; padding:30px; text-align:center; background:var(--argus-pill-bg,rgba(255,255,255,0.03)); border:2px dashed var(--argus-pill-border,rgba(255,255,255,0.1)); border-radius:20px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.4)); font-size:14px; font-weight:600; }
.subsection-title { font-size:12px; font-weight:900; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; color:var(--argus-pill-color-muted,rgba(255,255,255,0.5)); display:block; }

:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .list-item-card * { color: #1e1e2d; }

/* ── Language Picker ───────────────────────────────────── */
.lang-pill {
  display:inline-flex; align-items:center; gap:6px;
  padding:7px 14px; border-radius:999px;
  background:rgba(255,255,255,0.10);
  border:1px solid rgba(255,255,255,0.18);
  backdrop-filter:blur(12px) saturate(120%);
  -webkit-backdrop-filter:blur(12px) saturate(120%);
  color:#fff; font-size:13px; font-weight:700;
  cursor:pointer; transition:all 0.22s cubic-bezier(0.4,0,0.2,1);
  box-shadow:0 4px 16px rgba(0,0,0,0.18);
  white-space:nowrap; flex-shrink:0;
}
.lang-pill:hover { background:rgba(255,255,255,0.22); transform:translateY(-1px); }
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-pill {
  background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.15); color:#1e1e2d;
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-pill:hover { background:rgba(0,0,0,0.12); }

/* Language modal */
.lang-modal-back { position:fixed; inset:0; background:rgba(0,0,0,0.55); display:none; align-items:center; justify-content:center; z-index:999998; backdrop-filter:blur(4px); }
.lang-modal-back.open { display:flex; }
.lang-modal-card {
  width:min(400px,92vw); border-radius:28px; padding:28px 24px 20px;
  background:rgba(20,22,35,0.92);
  border:1px solid rgba(255,255,255,0.14);
  box-shadow:0 32px 80px rgba(0,0,0,0.55);
  backdrop-filter:blur(12px) saturate(120%);
  -webkit-backdrop-filter:blur(12px) saturate(120%);
  color:#fff;
  animation: langBounceIn 0.38s cubic-bezier(0.175,0.885,0.32,1.275) forwards;
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-modal-card {
  background:rgba(255,255,255,0.96); color:#1e1e2d;
  border-color:rgba(0,0,0,0.12); box-shadow:0 20px 60px rgba(0,0,0,0.25);
}
@keyframes langBounceIn {
  0%   { transform:scale(0.82) translateY(20px); opacity:0; }
  60%  { transform:scale(1.03) translateY(-4px); opacity:1; }
  100% { transform:scale(1)    translateY(0);    opacity:1; }
}
.lang-modal-title {
  font-size:18px; font-weight:900; letter-spacing:-0.01em;
  margin-bottom:20px; text-align:center;
}
.lang-grid {
  display:grid; grid-template-columns:1fr 1fr; gap:10px;
}
.lang-option {
  display:flex; align-items:center; gap:10px;
  padding:12px 14px; border-radius:16px;
  background:rgba(255,255,255,0.10);
  border:1.5px solid rgba(255,255,255,0.18);
  /* Buttons do not inherit color reliably through the HA shadow DOM. */
  color:rgba(255,255,255,0.98) !important;
  text-shadow:0 1px 2px rgba(0,0,0,0.38);
  cursor:pointer; transition:all 0.18s ease;
  font-size:14px; font-weight:750;
}
.lang-option span:not(.lang-flag) { color:inherit !important; }
.lang-option:hover { background:rgba(255,255,255,0.16); border-color:rgba(255,255,255,0.28); transform:translateY(-1px); }
.lang-option.active {
  background:rgba(3,169,244,0.30); border-color:rgba(76,201,255,0.82);
  box-shadow:0 0 18px rgba(3,169,244,0.25);
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-option { background:rgba(0,0,0,0.04); border-color:rgba(0,0,0,0.1); color:#18212f !important; text-shadow:none; }
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-option span:not(.lang-flag) { color:#18212f !important; }
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-option:hover { background:rgba(0,0,0,0.09); }
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-option.active { background:rgba(3,169,244,0.12); border-color:rgba(3,169,244,0.4); }
.lang-flag { font-size:22px; line-height:1; }
.lang-close-row { display:flex; justify-content:center; margin-top:18px; }
.lang-close-btn {
  padding:9px 28px; border-radius:14px;
  background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15);
  color:#fff; font-size:13px; font-weight:700; cursor:pointer;
  transition:background 0.18s;
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .lang-close-btn { background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.14); color:#1e1e2d; }
.lang-close-btn:hover { background:rgba(255,255,255,0.2); }

/* Background File Manager Styles */
.file-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
  transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.file-card:hover {
  background: rgba(255, 255, 255, 0.08) !important;
  border-color: rgba(255, 255, 255, 0.16) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .file-card {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.07);
  color: #1c1c1e;
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .file-card:hover {
  background: rgba(0, 0, 0, 0.05) !important;
  border-color: rgba(0, 0, 0, 0.12) !important;
}
.file-card-preview {
  position: relative;
  width: 100%;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}
.file-card-preview img, .file-card-preview video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.file-card-name {
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.85;
}
.file-card-meta {
  font-size: 9px;
  opacity: 0.55;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.file-card-actions {
  display: flex;
  gap: 4px;
  margin-top: auto;
}
.file-card-btn {
  flex: 1;
  padding: 4px;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}
.file-card-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .file-card-btn {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
}
:host([argus-dark-mode="false"]:not([data-bg-mode="default"])) .file-card-btn:hover {
  background: rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.25);
}
.file-card-btn-delete {
  padding: 3px 6px;
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.15);
  background: rgba(255, 59, 48, 0.05);
  border-radius: 6px;
  cursor: pointer;
  font-size: 9px;
  transition: all 0.15s ease;
}
.file-card-btn-delete:hover {
  background: rgba(255, 59, 48, 0.25);
  border-color: rgba(255, 59, 48, 0.45);
}

.argus-bootstrap-layer {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  animation: fadeIn 0.4s ease forwards;
}
.argus-bootstrap-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  padding: 40px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
  text-align: center;
}
.argus-bootstrap-card h1 {
  margin: 0 0 16px;
  font-weight: 300;
  font-size: 28px;
  letter-spacing: 0.5px;
}
.argus-bootstrap-card p {
  color: rgba(255,255,255,0.7);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
}
@keyframes argusWelcomeCard {
  from { opacity: 0; transform: translateY(18px) scale(.96); }
  65% { opacity: 1; transform: translateY(-3px) scale(1.01); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes argusWelcomeLogo {
  0%,100% { transform: translateY(0) scale(1); filter: drop-shadow(0 10px 18px rgba(32,145,255,.28)); }
  50% { transform: translateY(-5px) scale(1.045); filter: drop-shadow(0 16px 26px rgba(32,145,255,.5)); }
}
@keyframes argusWelcomeCheck {
  from { opacity: 0; transform: scale(.55) rotate(-16deg); }
  70% { opacity: 1; transform: scale(1.1) rotate(4deg); }
  to { opacity: 1; transform: scale(1) rotate(0); }
}
.argus-first-run-card { animation: argusWelcomeCard .58s cubic-bezier(.22,1.2,.36,1) both; }
.argus-first-run-logo { height:68px; width:68px; border-radius:19px; animation:argusWelcomeLogo 2.4s ease-in-out infinite; }
.argus-first-run-brand { display:flex; flex-direction:column; align-items:center; gap:10px; margin-bottom:20px; }
.argus-first-run-brand h1 { margin:0; font-size:1.65rem; font-weight:850; letter-spacing:-.02em; }
.argus-first-run-brand p { margin:0; font-size:.92rem; color:rgba(255,255,255,.7); }
.argus-first-run-thank-icon { width:74px; height:74px; margin:0 auto 18px; display:grid; place-items:center; border-radius:50%; background:rgba(52,199,89,.18); border:1px solid rgba(52,199,89,.45); color:#58e37c; font-size:2.15rem; box-shadow:0 0 32px rgba(52,199,89,.22); animation:argusWelcomeCheck .5s cubic-bezier(.2,1.35,.35,1) both; }
.user-selector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
  margin-top: 24px;
}
.user-card {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 16px;
  padding: 20px 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.user-card:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}
.user-card-own {
  border-color: rgba(0, 122, 255, 0.55);
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.22), 0 8px 24px rgba(0,122,255,0.1);
}
.user-card-own:hover {
  border-color: rgba(0, 122, 255, 0.8);
}
.profile-own-badge {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #007aff;
  background: rgba(0, 122, 255, 0.12);
  border-radius: 999px;
  padding: 2px 8px;
  margin-top: -4px;
}
.user-role-label {
  font-size: 11px;
  opacity: 0.55;
  font-weight: 600;
  letter-spacing: 0.02em;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}
.user-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
}
.user-name {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
}
.pin-prompt {
  display: none;
  animation: fadeIn 0.3s ease forwards;
  margin-top: 20px;
}
.pin-prompt input {
  font-size: 24px;
  letter-spacing: 8px;
  text-align: center;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(0,0,0,0.2);
  color: white;
  width: 200px;
  margin-bottom: 20px;
}
.btn-claim {
  background: #ff3b30;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-claim:hover { background: #ff453a; }
.btn-start {
  background: #34c759;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-start:hover { background: #30d158; }
.btn-cancel {
  background: rgba(255,255,255,0.1);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 10px;
}
</style>

<!-- Bootstrap UI -->
<div id="bootstrap-overlay" class="argus-bootstrap-layer" style="display:none"></div>

<!-- Language picker modal -->
<div class="lang-modal-back" id="lang-modal" aria-hidden="true">
  <div class="lang-modal-card">
    <div class="lang-modal-title" id="lang-modal-title">🌐 Select Language</div>
    <div class="lang-grid" id="lang-grid"></div>
    <div class="lang-close-row">
      <button class="lang-close-btn" id="lang-modal-close">✕ Close</button>
    </div>
  </div>
</div>

<!-- SOS Confirm Modal -->
<div class="ios-confirm-backdrop" id="sos-modal">
  <div class="ios-confirm-card liquid-glass" id="sos-card" style="position:relative;">
    <button id="sos-close-x" style="position:absolute; top:16px; right:16px; background:rgba(255,255,255,0.1); border:none; color:white; border-radius:50%; width:32px; height:32px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:14px; opacity:0.8; padding:0; transition:background 0.2s;">✕</button>
    <div class="ios-confirm-title" id="sos-title-txt">Confirmar pánico</div>
    <div class="ios-confirm-text" id="sos-text-txt">Desliza para disparar la alarma inmediatamente.</div>
    <div class="ios-slider-shell">
      <div class="ios-slider-track">
        <div class="ios-slider-label" id="sos-label">Desliza para activar SOS</div>
        <div class="ios-slider-thumb" id="sos-thumb">🚨</div>
      </div>
    </div>
    <div style="margin-top:20px;text-align:center">
      <a id="sos-call-btn" href="tel:911" style="display:flex;justify-content:center;align-items:center;gap:8px;background:rgba(255,59,48,0.2);color:#ff3b30;text-decoration:none;padding:14px;border-radius:18px;font-weight:800;font-size:15px;border:1px solid rgba(255,59,48,0.3)">
        📞 Llamar a Emergencias (911)
      </a>
      <p id="sos-call-help" class="small" style="margin:10px 4px 0;opacity:.72;line-height:1.35">If this device cannot place calls, Argus will send an urgent alert to the configured mobile devices.</p>
    </div>
    <button class="ios-confirm-cancel" id="btn-cancel-sos" style="margin-top:10px">Cancelar</button>
  </div>
</div>


<div id="argus-canvas-bg"></div>


<div class="wrap">
  <!-- HERO -->
  <div class="glass hero liquid-glass">
    <div class="hero-left">
      <img src="/api/argus_static/argus_logo.png" alt="Argus Logo" style="width: 75px; height: 75px; border-radius: 18px; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.25); flex-shrink: 0;">
      <div>
        <h1>Argus Home Hub</h1>
        <p id="p-hero-desc"></p>
      </div>
    </div>
    <div class="hero-context" aria-live="polite">
      <div class="hero-clock"><strong id="hero-clock-time">--:--</strong><span id="hero-clock-date"></span></div>
      <div class="hero-pills">
        <span class="hero-pill" id="hero-weather-pill">☀️ --</span>
        <span class="hero-pill" id="hero-security-pill"><i class="hero-live"></i> Argus</span>
      </div>
    </div>
    <button class="lang-pill" id="btn-edit-widgets" title="Configurar Widgets del Dashboard">
      <span id="edit-widgets-label">⚙️ Config. Widgets</span>
    </button>
    <button class="lang-pill" id="btn-lang-picker" title="Language / Idioma">
      <span id="lang-pill-flag">🌐</span>
      <span id="lang-pill-label">Language</span>
    </button>
  </div>

  <!-- TWO-COLUMN LAYOUT -->
  <div class="grid" id="widget-grid">

    <!-- Instances -->
    <section class="glass panel liquid-glass dashboard-instances" id="w-instances" style="grid-column: 1 / -1;">
        <div class="panel-head">
          <h2 id="h-instances"></h2>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="global-status"></div>
          </div>
        </div>
        <div id="entries"></div>
        <!-- Personalization section -->
        <div class="personalize-section">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--personalize-divider, rgba(255,255,255,0.08)); padding-bottom:10px; flex-wrap:wrap; gap:10px;">
            <div id="lbl-aesthetic-custom" style="font-weight:900; font-size:14px; letter-spacing:-0.01em; cursor:pointer; display:flex; align-items:center; gap:8px; user-select:none;">
              <span id="lbl-aesthetic-text">🎨 Personalización Estética (Avanzado)</span>
              <span id="personalize-chevron" style="transition: transform 0.3s ease; font-size: 11px; background: rgba(255,255,255,0.1); padding: 3px 8px; border-radius: 8px;">▲ Ocultar</span>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="ghost" id="btn-edit-home-name-standalone" style="padding:6px 10px;font-size:11px;border-radius:10px;white-space:nowrap">✏️ Editar Nombre</button>
              <button class="primary" id="btn-save-personalization-standalone" style="padding:8px 14px;font-size:12px;border-radius:10px;white-space:nowrap">Guardar</button>
            </div>
          </div>

          <div class="personalize-workspace" id="personalize-workspace">
            <div class="personalize-grid">
            <!-- Column 1: Nombre y Fondos -->
            <div class="personalize-column">
              <div class="personalize-field pf-home">
                <div class="setting-label" id="lbl-home-name-hdr" style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6;">Nombre del Hogar</div>
                <div id="lbl-home-name-prominent" style="font-size:18px;font-weight:900;margin-top:2px">Mi Casa</div>
              </div>
              <div class="personalize-field pf-panel">
                <div class="setting-label" id="lbl-panel-bg-title" style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6; margin-bottom:4px;">Fondo para Panel</div>
                <select id="bg-mode-select-standalone" class="glass-control"></select>
                <div id="panel-custom-bg-inputs" class="background-custom-inputs" style="display:none;">
                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
                    <span id="lbl-panel-bg-upload" style="font-size:11px; opacity:0.8;">Cargar archivo:</span>
                    <input type="file" id="panel-bg-file-input" accept="image/*,video/mp4,video/webm,video/quicktime,.heic,.heif" style="font-size:10px; max-width:180px;">
                  </div>
                  <div style="font-size:10px; opacity:0.5; text-align:right;" id="bg-file-help"></div>
                  <input type="text" id="panel-bg-url-input" class="glass-control" placeholder="Background URL…">
                  <label id="lbl-panel-bg-sound" style="display:none; align-items:center; gap:8px; font-size:11px; cursor:pointer;">
                    <input type="checkbox" id="chk-panel-bg-sound"> <span id="s-panel-bg-sound-lbl">Sonido de video</span>
                  </label>
                </div>
              </div>
              <div class="personalize-field pf-hub">
                <div class="setting-label" id="lbl-hub-bg-title" style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6; margin-bottom:4px;">Fondo Argus</div>
                <select id="hub-bg-mode-select" class="glass-control"></select>
                <!-- Argus Background Custom Inputs (shown dynamically) -->
                <div id="hub-custom-bg-inputs" class="background-custom-inputs" style="display:none;">
                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
                    <span id="lbl-hub-bg-upload" style="font-size:11px; opacity:0.8;">Cargar archivo:</span>
                    <input type="file" id="hub-bg-file-input" accept="image/*,video/mp4,video/webm,video/quicktime,.heic,.heif" style="font-size:10px; max-width:180px;">
                  </div>
                  <div style="font-size:10px; opacity:0.5; text-align:right;" id="hub-file-help"></div>
                  <input type="text" id="hub-bg-url-input" class="glass-control" placeholder="Background URL…">
                  <label id="lbl-hub-bg-sound" style="display:none; align-items:center; gap:8px; font-size:11px; cursor:pointer;">
                    <input type="checkbox" id="chk-hub-bg-sound"> <span id="s-hub-bg-sound-lbl">Sonido de video</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Column 2: Sensores, Emergencias y SOS -->
            <div class="personalize-column">
              <div class="personalize-field pf-temp">
                <label class="setting-label" id="lbl-temperature-source" for="temp-source-select-standalone" style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6; margin-bottom:4px;">🌡️ Temperatura mostrada</label>
                <select id="temp-source-select-standalone" class="glass-control"></select>
              </div>
              <div class="personalize-field pf-weather">
                <label class="setting-label" id="lbl-weather-source" for="weather-source-select" style="font-size:11px;font-weight:800;text-transform:uppercase;opacity:.6;margin-bottom:4px;">☁️ Fuente de clima</label>
                <select id="weather-source-select" class="glass-control"></select>
              </div>
              <div class="personalize-field pf-emergency">
                <label class="setting-label" id="lbl-emergency-number" for="emergency-number-input" style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6; margin-bottom:4px;">🚨 Local emergency number</label>
                <input id="emergency-number-input" class="glass-control" inputmode="tel" maxlength="16" value="911" aria-describedby="emergency-number-help">
                <div id="emergency-number-help" class="small" style="margin-top:5px;opacity:.65;line-height:1.35">Configure it for the home location. It will be included in SOS alerts.</div>
              </div>
            </div>
          </div>

          <div class="sos-configuration">
            <div class="setting-label" id="lbl-sos-actions" style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6; margin-bottom:6px;">🚨 SOS actions</div>
            <div id="sos-output-chips" class="mode-sensor-grid" style="margin-bottom:8px"></div>
            <button class="ghost" id="btn-select-sos-outputs" style="width:100%;justify-content:center;font-size:12px">Select lights, sirens, or scripts</button>
            <div class="small" id="sos-output-help" style="margin-top:5px;opacity:.65;line-height:1.35">These devices will always activate when SOS is used, even while Argus is disarmed.</div>
          </div>

          <!-- Historial de Archivos Subidos -->
          <div style="border-top:1px solid var(--personalize-divider, rgba(255,255,255,0.08)); padding-top:14px; margin-top:6px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
              <div style="font-size:11px; font-weight:800; text-transform:uppercase; opacity:0.6; display:flex; align-items:center; gap:6px;">
                📁 <span id="lbl-uploaded-files-title">Archivos Subidos en Servidor</span>
              </div>
              <span id="storage-files-count" style="font-size:10px; opacity:0.5;">Loading…</span>
            </div>
            <div id="uploaded-files-list" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:10px; max-height:220px; overflow-y:auto; padding:5px 0;">
              <!-- Los archivos se renderizan aquí dinámicamente -->
            </div>
          </div>

          </div>
        </div>
      </section>

      <!-- Activity log -->
      <section class="glass panel liquid-glass activity-panel" id="w-activity">
        <div class="panel-head">
          <h2 id="h-activity-log"></h2>
          <div style="display:flex;gap:6px"><button class="ghost" id="btn-refresh-history" style="font-size:10px;padding:4px 8px"></button><button class="ghost" id="btn-export-forensic" style="font-size:10px;padding:4px 8px;opacity:.7">JSON</button><button class="ghost" id="btn-clear-log" style="font-size:10px;padding:4px 8px;opacity:0.6">BORRAR</button></div>
        </div>
        <div id="activity-log" style="display:grid;gap:10px;height:280px;overflow-y:auto;margin-top:10px"></div>
      </section>

      <!-- Modes -->
      <section class="glass panel liquid-glass modes-panel" id="w-modes">
        <div class="panel-head">
           <h2 id="h-modes"></h2>
        </div>
        <div class="tabs" id="mode-tabs" style="margin-bottom:15px"></div>
        <div id="mode-view"></div>
      </section>

      <!-- Users & Master PIN Settings -->
      <section class="glass panel liquid-glass access-panel" id="w-access">
        <div class="panel-head">
          <div>
            <h2 id="h-access-title">Control de Acceso y Usuarios</h2>
            <p class="access-summary" id="p-access-desc">PIN desactivado · Sin usuarios adicionales</p>
          </div>
          <div class="access-actions">
            <button class="ghost" id="btn-access-users" aria-expanded="false">👥 Usuarios</button>
            <button class="ghost" id="btn-access-pin" aria-expanded="false">🔐 PIN Maestro</button>
          </div>
        </div>

        <div class="access-workspace" id="access-workspace">
          <!-- Users -->
          <div class="access-section" id="access-users-section">
            <h3 id="h-users"></h3>
            <p class="small" id="p-admin-only" style="margin-bottom:14px;color:#fb8c00;font-weight:600"></p>
            <div id="users-list" style="display:grid;gap:12px;margin-bottom:16px"></div>
          </div>

          <!-- Master PIN -->
          <div class="access-section" id="access-pin-section">
            <h3 id="h-settings-pin">PIN Maestro</h3>
            <div class="subsection">
              <div id="current-pin-display" style="font-size:13px;font-weight:800;color:var(--primary-color);margin-bottom:15px;background:rgba(3,169,244,0.1);padding:8px 12px;border-radius:10px;display:inline-block"></div>
              <div class="field-group collapsible collapsed" id="group-current-pin" style="margin-bottom: 12px">
                 <div style="display:flex; justify-content:space-between; align-items:center;">
                   <label id="l-current-pin-lbl"></label>
                   <a href="#" id="lnk-forgot-pin" style="font-size:11px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:bold; margin-bottom:4px; display:none;"></a>
                 </div>
                 <input type="password" id="current-pin" inputmode="numeric" pattern="[0-9]*" class="glass-control">
              </div>
              <p class="small" id="p-pin-remove-hint" style="margin:0 0 10px 0; color:var(--primary-color); font-weight:700">Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.</p>
              <div style="display:grid;gap:10px">
                <div class="field-group"><label id="l-new-pin"></label><input type="password" id="new-pin-1" inputmode="numeric" pattern="[0-9]*" class="glass-control"></div>
                <div class="field-group"><label id="l-confirm-pin"></label><input type="password" id="new-pin-2" inputmode="numeric" pattern="[0-9]*" class="glass-control"></div>
              </div>
              <div class="save-row" style="margin-top:15px">
                <button class="primary" id="btn-save-pin" style="width:100%"></button>
              </div>
              <div id="pin-status" class="status" style="margin-top:8px; text-align:center; font-size:12px; font-weight:bold; min-height:18px;"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Automations -->
      <section class="glass panel liquid-glass automations-panel" id="w-automations">
        <h2 id="h-automations"></h2>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <span class="small" id="p-linked-rules" style="opacity:0.7"></span>
          <button class="primary" id="btn-new-auto" style="padding:6px 12px;font-size:11px"></button>
        </div>
        <div id="auto-view"></div>
      </section>

      <!-- Backup & Restore -->
      <section class="glass panel liquid-glass backup-panel" id="w-backup">
        <h2 id="h-backup-title">Respaldo y Restauración</h2>
        <p class="small" id="p-backup-desc" style="margin-bottom:12px;opacity:0.7">Guarda una copia de seguridad de tus ajustes o restaura una anterior.</p>
        <div style="display:flex;gap:10px;align-items:center;">
          <button class="ghost" id="btn-export-config" style="flex:1">📤 Descargar</button>
          <div style="position:relative; flex:1">
            <button class="ghost" style="width:100%" id="btn-import-trigger">📥 Restaurar</button>
            <input type="file" id="import-config-file" style="display:none" accept=".json,.argus,application/json">
          </div>
          <button class="ghost danger" id="btn-reset-config" style="flex:1">⚠️ Restablecer</button>
          <button class="primary" id="btn-undo-reset" style="flex:1; display:none;">↩️ Deshacer</button>
        </div>
      </section>

      <!-- GitHub Opt-In -->
      <section class="glass panel liquid-glass github-panel" id="w-github" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.02); padding:16px;">
        <div style="flex:1">
          <h3 id="github-title" style="margin:0; font-size:14px; font-weight:600"></h3>
          <p id="github-desc" style="margin:4px 0 0; font-size:12px; opacity:0.7"></p>
        </div>
        <a id="github-action" class="github-star-action" href="https://github.com/Chrisalvir1/Argus" target="_blank" rel="noopener noreferrer" style="margin-left:16px"></a>
      </section>

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
      <h3 id="home-name-modal-h3">🏡 Nombre del Hogar</h3>
      <button class="ghost" id="home-name-modal-close">✕</button>
    </div>
    <div style="display:grid;gap:14px;padding:4px 0">
      <p class="small" id="home-name-modal-desc" style="margin:0;opacity:.7">This name appears in the instances panel and in full screen.</p>
      <div class="field-group">
        <label id="l-home-name-modal-label">Home name</label>
        <input type="text" id="home-name-input" placeholder="Mi Casa" maxlength="60" autocomplete="off" class="glass-control">
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
    <div class="modal-head">
      <h3 id="l-introduce-pin">🔒</h3>
      <button class="ghost" id="pin-close" style="background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;">✕</button>
    </div>
    <div style="display:grid;gap:10px;width:100%">
      <p id="l-pin-modal-desc" class="small" style="text-align:center;margin:0;opacity:0.75"></p>
      <input id="pin-input" class="pin-input" type="password" inputmode="numeric" pattern="[0-9]*" placeholder="••••" autocomplete="off" maxlength="8" readonly>
      <div class="pin-grid" id="pin-pad">
        <button class="pin-btn-round" type="button" data-pin-digit="1">1</button>
        <button class="pin-btn-round" type="button" data-pin-digit="2">2</button>
        <button class="pin-btn-round" type="button" data-pin-digit="3">3</button>
        <button class="pin-btn-round" type="button" data-pin-digit="4">4</button>
        <button class="pin-btn-round" type="button" data-pin-digit="5">5</button>
        <button class="pin-btn-round" type="button" data-pin-digit="6">6</button>
        <button class="pin-btn-round" type="button" data-pin-digit="7">7</button>
        <button class="pin-btn-round" type="button" data-pin-digit="8">8</button>
        <button class="pin-btn-round" type="button" data-pin-digit="9">9</button>
        <button class="pin-btn-round action-key delete-key" type="button" id="pin-backspace">Borrar</button>
        <button class="pin-btn-round" type="button" data-pin-digit="0">0</button>
        <button class="pin-btn-round action-key enter-key" type="button" id="pin-confirm">Enter</button>
      </div>
      <div id="pin-error" class="pin-error"></div>
      <div style="text-align:center; margin-top: 5px;">
        <a href="#" id="pin-forgot-link" style="font-size:12px; color:var(--accent-color, #ff4081); text-decoration:none; font-weight:700; display:none;"></a>
      </div>
    </div>
    <button id="pin-cancel" style="display:none"></button>
  </div>
</div>
`;

/* ── Web Component ────────────────────────────────────────────────────── */
class ArgusPanel extends HTMLElement {
  constructor() {
    super();
    this._showSosConfirm = false;
    this._sosEntryIdx = null;
    this._sosBusy = false;
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
    this._users = [];        // [{name, pin, role, ha_user_id}]
    this._haUsersList = [];  // fetched HA users
    this._isAdmin = true;    // determined from hass user
    this._pinCallback = null;
    this._homeName = '';     // custom home name, editable with PIN
    this._backgroundMode = 'weather';
    this._backgroundImages = [];
    this._temperatureSource = 'auto';
    this._weatherSource = 'auto';
    this._pending = {};
    this._lastClockUpdate = 0;
    this._manualLang = null;
    this._fullscreenIdx = -1;
    this._cachedBgUrl = null;
    this._cachedBgBrightness = undefined;
    this._hubBgMode = 'default';
    this._hubBgFile = '';
    this._hubBgSound = false;
    this._clockFormat = 'auto';
    this._profileSelectedThisMount = false;
    this._welcomeShownThisMount = false;
    this._panicOutputs = undefined;
    this._initPromise = null;
    this._staticBound = false;
    this._postLoadBound = false;
  }

  _getTimeZone() {
    return this._hass?.config?.time_zone || undefined;
  }

  _getClockFormat() {
    const fmt = this._clockFormat || this._ui?.clock_format || this._dashboard?.clock_format || 'auto';
    return ['auto', '12h', '24h'].includes(fmt) ? fmt : 'auto';
  }

  _formatTime(dateInput) {
    if (!dateInput) return '';
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(date.getTime())) return '';

    const formatSetting = this._getClockFormat();
    const locale = this._getLocale();
    const timeZone = this._getTimeZone();

    const options = { hour: '2-digit', minute: '2-digit' };
    if (timeZone) options.timeZone = timeZone;

    if (formatSetting === '12h') {
      options.hour12 = true;
    } else if (formatSetting === '24h') {
      options.hour12 = false;
    } else {
      const haFmt = this._hass?.locale?.time_format;
      if (haFmt === '12' || haFmt === '12h') options.hour12 = true;
      else if (haFmt === '24' || haFmt === '24h') options.hour12 = false;
    }

    try {
      return new Intl.DateTimeFormat(locale, options).format(date);
    } catch (e) {
      return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    }
  }

  _formatDateTime(dateInput) {
    if (!dateInput) return '';
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(date.getTime())) return '';

    const formatSetting = this._getClockFormat();
    const locale = this._getLocale();
    const timeZone = this._getTimeZone();

    const options = {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    if (timeZone) options.timeZone = timeZone;

    if (formatSetting === '12h') {
      options.hour12 = true;
    } else if (formatSetting === '24h') {
      options.hour12 = false;
    } else {
      const haFmt = this._hass?.locale?.time_format;
      if (haFmt === '12' || haFmt === '12h') options.hour12 = true;
      else if (haFmt === '24' || haFmt === '24h') options.hour12 = false;
    }

    try {
      return new Intl.DateTimeFormat(locale, options).format(date);
    } catch (e) {
      return date.toLocaleString(locale, options);
    }
  }

  _updateProfileBadge() {
    const pill = this.shadowRoot.getElementById('active-profile-pill');
    const avatar = this.shadowRoot.getElementById('profile-avatar');
    const nameEl = this.shadowRoot.getElementById('profile-name');
    const roleEl = this.shadowRoot.getElementById('profile-role');
    if (!pill || !avatar || !nameEl || !roleEl) return;

    const prof = this._currentProfile;
    if (!prof) {
      pill.style.display = 'none';
      return;
    }

    pill.style.display = 'flex';
    const name = prof.name || 'User';
    const initials = name.slice(0, 2).toUpperCase();
    avatar.textContent = initials;
    nameEl.textContent = name;

    const roleKey = prof.role === 'admin' ? 'role_argus_admin' : 'role_argus_user';
    roleEl.textContent = this._t(roleKey);
  }

  _getBrightness(src) {
    return new Promise((resolve) => {
      if (!src) {
        resolve(128);
        return;
      }
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = 10;
          canvas.height = 10;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve(128);
            return;
          }
          ctx.drawImage(img, 0, 0, 10, 10);
          const imgData = ctx.getImageData(0, 0, 10, 10).data;
          let r = 0, g = 0, b = 0, count = 0;
          for (let i = 0; i < imgData.length; i += 4) {
            r += imgData[i];
            g += imgData[i + 1];
            b += imgData[i + 2];
            count++;
          }
          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / count;
          resolve(brightness);
        } catch (e) {
          resolve(128);
        }
      };
      img.onerror = () => {
        resolve(128);
      };
      img.src = src;
    });
  }

  async _updateTheme() {
    if (!this._hass) return;

    let isDark = false;
    const hubBgMode = this._hubBgMode || 'default';

    if (hubBgMode === 'default') {
      // The bundled Argus artwork is intentionally dark. Keeping its dark
      // Liquid Glass palette preserves contrast and the original depth even
      // when the surrounding HA shell is in light mode.
      isDark = true;
    } else if (hubBgMode === 'image') {
      const src = this._hubBgFile || '';
      if (src) {
        if (this._cachedBgUrl === src && this._cachedBgBrightness !== undefined) {
          isDark = this._cachedBgBrightness < 135;
        } else {
          const brightness = await this._getBrightness(src);
          this._cachedBgUrl = src;
          this._cachedBgBrightness = brightness;
          isDark = brightness < 135;
        }
      } else {
        // Fallback to Home Assistant theme if no image URL is populated yet
        isDark = this._hass.themes ? this._hass.themes.darkMode === true : false;
      }
    } else {
      // hubBgMode is 'none', so use panel background mode or Lovelace theme
      const mode = this._backgroundMode || 'weather';
      if (mode === 'none') {
        isDark = this._hass.themes ? this._hass.themes.darkMode === true : false;
      } else if (mode === 'weather') {
        const isNight = this._hass.states?.['sun.sun']?.state === 'below_horizon';
        if (isNight) {
          isDark = true;
        } else {
          const weatherEnt = this._getWeatherEntity();
          const weatherState = weatherEnt.state || 'sunny';
          const lightConditions = ['sunny', 'fog', 'snow', 'windy'];
          isDark = !lightConditions.includes(weatherState);
        }
      } else if (mode === 'photo' || mode === 'collage') {
        let src = '';
        if (this._backgroundImages && this._backgroundImages[0]) {
          src = this._backgroundImages[0];
        } else if (this._panelBgFile) {
          src = this._panelBgFile;
        }
        if (src) {
          if (this._cachedBgUrl === src && this._cachedBgBrightness !== undefined) {
            isDark = this._cachedBgBrightness < 135;
          } else {
            const brightness = await this._getBrightness(src);
            this._cachedBgUrl = src;
            this._cachedBgBrightness = brightness;
            isDark = brightness < 135;
          }
        } else {
          isDark = this._hass.themes ? this._hass.themes.darkMode === true : false;
        }
      }
    }

    this.setAttribute('argus-dark-mode', isDark ? 'true' : 'false');
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    this._updateTheme();
    if (!this._dashboard?.entries?.length) {
      this._ensureInitialized();
      return;
    }

    // Trigger render if any of these change:
    // 1. Alarm states
    // 2. Temperature sensor state
    // 3. Clock (roughly every minute)
    // 4. Weather state

    const now = Date.now();
    // Clock is now handled by a dedicated interval for better accuracy
    const clockChanged = false;

    const languageChanged = oldHass?.language !== hass.language;
    if (languageChanged && !this._manualLang) this._refreshLocalizedUi();

    const alarmChanged = this._dashboard.entries.some(
      e => e.entity_id && oldHass?.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state
    );

    const tempEntity = this._temperatureSource === 'auto' ? null : this._temperatureSource;
    const tempChanged = tempEntity && oldHass?.states[tempEntity]?.state !== hass.states[tempEntity]?.state;

    const weatherEnt = (this._weatherSource !== 'auto' ? this._weatherSource : Object.values(hass.states).find(s => s.entity_id.startsWith('weather.'))?.entity_id);
    const weatherChanged = weatherEnt && (
      oldHass?.states[weatherEnt]?.state !== hass.states[weatherEnt]?.state ||
      oldHass?.states[weatherEnt]?.attributes?.temperature !== hass.states[weatherEnt]?.attributes?.temperature ||
      oldHass?.states[weatherEnt]?.attributes?.temperature_unit !== hass.states[weatherEnt]?.attributes?.temperature_unit
    );

    // Instance cards display live contact state and battery level.  Restrict
    // updates to configured sensors so unrelated HA state changes do not
    // redraw the dashboard.
    const configuredSensors = new Set();
    const collectConfiguredSensors = value => {
      if (!value || typeof value !== 'object') return;
      if (Array.isArray(value.sensors)) value.sensors.forEach(id => configuredSensors.add(id));
      Object.values(value).forEach(child => {
        if (child && typeof child === 'object') collectConfiguredSensors(child);
      });
    };
    collectConfiguredSensors(this._ui?.modes);
    const sensorChanged = Boolean(oldHass) && [...configuredSensors].some(id => {
      const previous = oldHass.states[id];
      const current = hass.states[id];
      return previous?.state !== current?.state
        || previous?.attributes?.battery_level !== current?.attributes?.battery_level
        || previous?.attributes?.battery_percentage !== current?.attributes?.battery_percentage;
    });
    const batteryChanged = Boolean(oldHass) && Object.values(hass.states).some(current => {
      const id = current.entity_id || '';
      const isBattery = current.attributes?.device_class === 'battery' || /_battery$/i.test(id);
      const previous = oldHass.states[id];
      return isBattery && previous?.state !== current.state;
    });

    if (alarmChanged || sensorChanged || batteryChanged || tempChanged || clockChanged || weatherChanged || !oldHass) {
      this._renderEntries();
      this._renderActivityLog();
      // Only re-render setup views if they are visible or if it's the first load
      if (!oldHass) {
        this._renderModeTabs();
        this._renderModeView();
        this._renderAutomations();
        this._renderNotifications();
        this._renderUsers();
      }
    }
  }
  get hass() { return this._hass; }

  /* ── Translation ─────────────────────────────────────────────────── */
  _t(key) {
    const lang = this._getCurrentLangCode();
    return TEXTS[lang]?.[key] || TEXTS.en[key] || key;
  }

  _format(key, values = {}) {
    return this._t(key).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? `{${name}}`));
  }

  _escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  _getCurrentLangCode() {
    const candidate = this._manualLang || (this._hass?.language || 'en').split('-')[0];
    return TEXTS[candidate] ? candidate : 'en';
  }

  _getLocale() {
    return {
      es: 'es-ES', en: 'en-US', fr: 'fr-FR', pt: 'pt-BR',
      it: 'it-IT', zh: 'zh-CN', ru: 'ru-RU',
    }[this._getCurrentLangCode()] || 'en-US';
  }

  _weatherPresentation(condition, isNight) {
    const key = String(condition || 'sunny').toLowerCase().replace(/[\s-]+/g, '_');
    const labels = {
      es: { sunny:'Soleado', clear_night:'Noche despejada', partlycloudy:'Parcialmente nublado', cloudy:'Nublado', rainy:'Lluvioso', pouring:'Lluvia intensa', lightning:'Tormenta eléctrica', lightning_rainy:'Tormenta con lluvia', snowy:'Nevando', fog:'Niebla', windy:'Ventoso', exceptional:'Condiciones excepcionales' },
      en: { sunny:'Sunny', clear_night:'Clear night', partlycloudy:'Partly cloudy', cloudy:'Cloudy', rainy:'Rainy', pouring:'Heavy rain', lightning:'Thunderstorm', lightning_rainy:'Thunderstorm with rain', snowy:'Snowing', fog:'Foggy', windy:'Windy', exceptional:'Exceptional conditions' },
      fr: { sunny:'Ensoleillé', clear_night:'Nuit claire', partlycloudy:'Partiellement nuageux', cloudy:'Nuageux', rainy:'Pluvieux', pouring:'Forte pluie', lightning:'Orage', lightning_rainy:'Orage avec pluie', snowy:'Neige', fog:'Brouillard', windy:'Venteux', exceptional:'Conditions exceptionnelles' },
      pt: { sunny:'Ensolarado', clear_night:'Noite limpa', partlycloudy:'Parcialmente nublado', cloudy:'Nublado', rainy:'Chuvoso', pouring:'Chuva forte', lightning:'Trovoada', lightning_rainy:'Trovoada com chuva', snowy:'Nevando', fog:'Neblina', windy:'Ventoso', exceptional:'Condições excepcionais' },
      it: { sunny:'Soleggiato', clear_night:'Notte serena', partlycloudy:'Parzialmente nuvoloso', cloudy:'Nuvoloso', rainy:'Piovoso', pouring:'Pioggia intensa', lightning:'Temporale', lightning_rainy:'Temporale con pioggia', snowy:'Nevica', fog:'Nebbia', windy:'Ventoso', exceptional:'Condizioni eccezionali' },
      zh: { sunny:'晴朗', clear_night:'晴夜', partlycloudy:'局部多云', cloudy:'多云', rainy:'有雨', pouring:'大雨', lightning:'雷暴', lightning_rainy:'雷雨', snowy:'下雪', fog:'有雾', windy:'有风', exceptional:'异常天气' },
      ru: { sunny:'Солнечно', clear_night:'Ясная ночь', partlycloudy:'Переменная облачность', cloudy:'Облачно', rainy:'Дождливо', pouring:'Сильный дождь', lightning:'Гроза', lightning_rainy:'Гроза с дождём', snowy:'Снег', fog:'Туман', windy:'Ветрено', exceptional:'Исключительные условия' },
    };
    const icon = key.includes('lightning') ? '⛈️'
      : key === 'pouring' || key.includes('rain') ? '🌧️'
      : key.includes('snow') || key === 'hail' || key === 'sleet' ? '❄️'
      : key === 'fog' ? '🌫️'
      : key.includes('cloud') ? '☁️'
      : isNight ? '🌙' : '☀️';
    const language = this._getCurrentLangCode();
    return { icon, label: labels[language]?.[key] || labels.en[key] || key.replace(/_/g, ' ') };
  }

  _openLangModal() {
    const modal = this.shadowRoot.getElementById('lang-modal');
    if (!modal) return;
    const grid = this.shadowRoot.getElementById('lang-grid');
    const cur = this._manualLang || 'auto';
    if (grid) {
      grid.innerHTML = LANG_LIST.map(l => `
        <button class="lang-option${l.code === cur ? ' active' : ''}" data-lang="${l.code}">
          <span class="lang-flag">${l.flag}</span>
          <span>${l.code === 'auto' ? this._t('use_ha_language') : l.label}</span>
        </button>`).join('');
      grid.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          this._setLanguage(btn.dataset.lang);
          this._closeLangModal();
        });
      });
    }
    const title = this.shadowRoot.getElementById('lang-modal-title');
    if (title) title.textContent = `\ud83c\udf10 ${this._t('lang_select_title')}`;
    const card = modal.querySelector('.lang-modal-card');
    if (card) { card.style.animation='none'; void card.offsetWidth; card.style.animation=''; }
    modal.classList.add('open');
  }

  _closeLangModal() {
    this.shadowRoot.getElementById('lang-modal')?.classList.remove('open');
  }

  _setLanguage(code) {
    if (code === 'auto') {
      this._manualLang = null;
      try { localStorage.removeItem('argus_lang'); } catch(e) {}
    } else {
      if (!TEXTS[code]) return;
      this._manualLang = code;
      try { localStorage.setItem('argus_lang', code); } catch(e) {}
    }
    this._refreshLocalizedUi();
  }

  _refreshLocalizedUi() {
    this._applyTranslations();
    this._renderEntries();
    this._renderModeTabs();
    this._renderModeView();
    this._renderActivityLog();
    this._renderAutomations();
    this._renderNotifications();
    this._renderUsers();
    this._renderSosOutputs();
    this._configureEmergencyCall();
    this._updateHomeNameDisplay();
    this._renderUploadedFiles();
  }

  _applyTranslations() {
    const t = k => this._t(k);
    const s = id => this.shadowRoot.getElementById(id);
    const set = (id, txt) => { const e = s(id); if (e) e.textContent = txt; };

    // Update lang pill
    const cur = this._manualLang || 'auto';
    const langDef = LANG_LIST.find(l => l.code === cur) || LANG_LIST[1];
    const flagEl = s('lang-pill-flag'); const labelEl = s('lang-pill-label');
    if (flagEl) flagEl.textContent = langDef.flag;
    if (labelEl) labelEl.textContent = cur === 'auto' ? this._t('use_ha_language') : langDef.label;


    set('p-hero-desc',    t('hero_desc'));
    set('h-instances',    t('instances'));
    set('h-modes',        t('modes'));
    set('h-automations',  t('automations'));
    set('p-linked-rules', t('linked_rules'));
    set('h-settings',     t('settings'));
    set('h-activity-log', t('activity_log'));
    set('btn-refresh-history', t('history_refresh'));
    set('t-change-pin',   t('change_pin'));
    set('l-current-pin-lbl', t('current_pin'));
    set('lnk-forgot-pin', t('forgot_pin'));
    set('pin-forgot-link', t('forgot_pin'));
    set('btn-save-pin',   t('update_pin'));
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
    set('l-user-exp-type', t('user_exp_type'));
    set('l-user-exp-date', t('user_exp_date'));
    const optInd = s('opt-exp-indefinite'); if (optInd) optInd.textContent = t('exp_indefinite');
    const optTemp = s('opt-exp-temporary'); if (optTemp) optTemp.textContent = t('exp_temporary');
    set('selector-select-all',   t('select_all'));
    set('selector-deselect-all', t('deselect_all'));
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
    btn('btn-cancel-sos', 'cancel');
    btn('sos-call-btn',   'sos_call');
    btn('home-name-cancel', 'cancel');
    btn('home-name-save',   'save_btn');
    const langClose = s('lang-modal-close');
    if (langClose) langClose.textContent = `✕ ${t('close')}`;

    // Static template labels (new in v1.0.1)
    set('lbl-home-name-hdr',    t('home_name_lbl'));
    set('lbl-panel-bg-title',   t('bg_panel_title'));
    set('lbl-hub-bg-title',     t('bg_hub_title'));
    set('s-panel-bg-sound-lbl', t('bg_sound_opt'));
    set('s-hub-bg-sound-lbl',   t('bg_sound_opt'));
    set('lbl-aesthetic-text', '🎨 ' + t('lbl_aesthetic_custom') + ' (Avanzado)');
    set('edit-widgets-label', this._widgetEditing ? ('✓ ' + t('done')) : '⚙️ Config. Widgets');
    set('lbl-temperature-source', t('temp_displayed'));
    set('lbl-weather-source', t('weather_source'));
    set('lbl-panel-bg-upload',  t('lbl_load_file'));
    set('lbl-hub-bg-upload',    t('lbl_load_file'));
    set('lbl-uploaded-files-title', t('lbl_uploaded_files'));
    set('btn-edit-home-name-standalone', t('edit_btn'));
    set('btn-save-personalization-standalone', t('save_btn'));
    set('btn-clear-log',        t('clear_log_btn'));
    set('h-access-title',       t('access_title'));
    set('p-access-desc',        t('access_desc'));
    set('btn-access-users',     `👥 ${t('users_title').replace(/^👥\s*/, '').replace(/\s(?:y|&|e)\s.*$/i, '')}`);
    set('btn-access-pin',       `🔐 ${t('pin_master_title')}`);
    set('h-settings-pin',       t('pin_master_title'));
    set('p-pin-remove-hint',    t('pin_remove_hint'));
    set('h-backup-title',       t('backup_title'));
    set('p-backup-desc',        t('backup_desc'));
    set('btn-export-config',    t('export_btn'));
    set('btn-reset-config',     t('reset_btn'));
    set('btn-undo-reset',       t('undo_reset_btn'));
    set('btn-import-trigger',   t('import_btn'));
    set('github-title',         t('github_title'));
    set('github-desc',          t('github_desc'));
    set('github-action',        `⭐ ${t('github_action')}`);
    set('sos-title-txt',        t('sos_confirm_title'));
    set('sos-text-txt',         t('sos_confirm_text'));
    set('sos-label',            t('sos_slide'));
    set('home-name-modal-h3',   t('home_name_modal_title'));
    set('p-home-name-modal-desc', t('home_name_modal_desc'));
    set('l-home-name-modal-label', t('home_name_label'));
    set('lang-modal-title',     `🌐 ${t('lang_select_title')}`);
    set('sos-call-help', t('sos_call_help'));
    set('lbl-emergency-number', t('emergency_number_label'));
    set('emergency-number-help', t('emergency_help'));
    set('lbl-sos-actions', t('sos_actions'));
    set('btn-select-sos-outputs', t('sos_select_outputs'));
    set('sos-output-help', t('sos_outputs_help'));
    set('home-name-modal-desc', t('home_name_modal_desc'));
    set('pin-backspace', t('delete'));

    const bgMode = s('bg-mode-select-standalone');
    if (bgMode) {
      const v = bgMode.value;
      bgMode.innerHTML = `
        <option value="weather">${t('bg_weather')}</option>
        <option value="none">${t('bg_panel_none')}</option>
        <option value="photo">${t('bg_photo')}</option>
        <option value="collage">${t('bg_collage')}</option>
      `;
      if (v) bgMode.value = v;
    }

    const hubBgSelect = s('hub-bg-mode-select');
    if (hubBgSelect) {
      const v = hubBgSelect.value;
      hubBgSelect.innerHTML = `
        <option value="default">${t('bg_hub_default')}</option>
        <option value="image">${t('bg_image_opt')}</option>
      `;
      if (v) hubBgSelect.value = v;
    }

    this._populateTemperatureSources();
    this._populateWeatherSources();

    // PIN display
    const pinDisp2 = s('current-pin-display');
    if (pinDisp2) {
      const hasPIN = this._dashboard?.entries?.[0]?.pin_configured;
      if (hasPIN !== undefined && hasPIN !== null) {
        pinDisp2.textContent = hasPIN ? t('pin_active_yes') : t('pin_active_no');
      } else {
        const text = pinDisp2.textContent || '';
        const hasPINText = text.includes('Sí') || text.includes('Yes')
          || text.includes('Sim') || text.includes('Sì')
          || text.includes('是') || text.includes('Да')
          || text.includes('Ja') || text.includes('Oui')
          || text.includes('Activo') || text.includes('Active');
        pinDisp2.textContent = hasPINText ? t('pin_active_yes') : t('pin_active_no');
      }
    }
    // Home name input placeholder
    const hnInput = s('home-name-input');
    if (hnInput) hnInput.placeholder = t('home_name_placeholder');
    const panelUrl = s('panel-bg-url-input');
    if (panelUrl) panelUrl.placeholder = t('url_placeholder');
    const hubUrl = s('hub-bg-url-input');
    if (hubUrl) hubUrl.placeholder = t('url_placeholder');
    this._syncAccessSummary();
  }

  _syncAccessSummary() {
    const summary = this.shadowRoot?.getElementById('p-access-desc');
    if (!summary) return;

    // Translation runs before the dashboard bootstrap has necessarily
    // completed. Keep the generic description until real access data exists.
    if (!this._dashboard) {
      summary.textContent = this._t('access_desc');
      return;
    }

    const hasMasterPin = this._dashboard.entries?.[0]?.pin_configured === true;
    const pinStatus = this._t(hasMasterPin ? 'pin_active_yes' : 'pin_active_no');
    const userCount = Array.isArray(this._users)
      ? this._users.filter(user => user?.enabled !== false).length
      : 0;
    const usersStatus = userCount > 0
      ? `${this._t('users_title')}: ${userCount}`
      : this._t('no_users');

    summary.textContent = `${pinStatus} · ${usersStatus}`;
  }

  _toggleAccessSection(section) {
    if (!['users', 'pin'].includes(section)) return;
    const workspace = this.shadowRoot?.getElementById('access-workspace');
    const usersSection = this.shadowRoot?.getElementById('access-users-section');
    const pinSection = this.shadowRoot?.getElementById('access-pin-section');
    const usersButton = this.shadowRoot?.getElementById('btn-access-users');
    const pinButton = this.shadowRoot?.getElementById('btn-access-pin');
    if (!workspace || !usersSection || !pinSection) return;

    const target = section === 'users' ? usersSection : pinSection;
    const shouldOpen = !target.classList.contains('open');
    workspace.classList.toggle('open', shouldOpen);
    usersSection.classList.toggle('open', shouldOpen && section === 'users');
    pinSection.classList.toggle('open', shouldOpen && section === 'pin');

    for (const [button, active] of [
      [usersButton, shouldOpen && section === 'users'],
      [pinButton, shouldOpen && section === 'pin'],
    ]) {
      if (!button) continue;
      button.classList.toggle('active', active);
      button.setAttribute('aria-expanded', String(active));
    }

    if (shouldOpen && section === 'users') this._renderUsers();
    if (shouldOpen && section === 'pin') this._syncAccessSummary();
  }

  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() {
    // Restore persisted language
    try { this._manualLang = localStorage.getItem('argus_lang') || null; } catch(e) {}
    this._ensureInitialized();
    this._startClock();

    // Listen to fullscreen changes to handle native escape key / exit
    this._onFsChange = () => {
      const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
      if (!fsEl && !this._kioskLocked) {
        this.classList.remove('fullscreen-active');
        const activeFS = this.shadowRoot.querySelector('.entry.ios-fullscreen');
        if (activeFS) {
          activeFS.classList.remove('ios-fullscreen');
        }
        this._fullscreenIdx = -1;
        document.body.style.overflow = '';
        this._renderEntries();
      }
    };
    document.addEventListener('fullscreenchange', this._onFsChange);
    document.addEventListener('webkitfullscreenchange', this._onFsChange);
    this._onEscape = event => {
      if (event.key !== 'Escape' || !this.classList.contains('fullscreen-active')) return;
      // Native fullscreen emits fullscreenchange. This also covers the CSS
      // fallback used by Safari, where Esc does not emit that event.
      if (!(document.fullscreenElement || document.webkitFullscreenElement)) {
        this._exitFullscreenView();
      }
    };
    document.addEventListener('keydown', this._onEscape);
  }
  disconnectedCallback() {
    if (this._clockInterval) clearInterval(this._clockInterval);
    if (this._initRetryTimer) clearTimeout(this._initRetryTimer);
    if (this._socket) {
      this._socket.close();
      this._socket = null;
    }
    // Home Assistant may reuse this panel element after navigating away.
    // Authentication is per opening, so do not retain a dashboard/profile.
    this._dashboard = null;
    this._currentProfile = null;
    this._profileSelectedThisMount = false;
    this._welcomeShownThisMount = false;
    this._loadState = null;
    this._initPromise = null;
    if (this._onFsChange) {
      document.removeEventListener('fullscreenchange', this._onFsChange);
      document.removeEventListener('webkitfullscreenchange', this._onFsChange);
    }
    if (this._onEscape) document.removeEventListener('keydown', this._onEscape);
  }

  _startClock() {
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => {
      const now = new Date();
      if (this._dashboard && (now.getSeconds() === 0 || !this._lastClockUpdate)) {
         this._lastClockUpdate = Date.now();
         this._renderEntries();
      }
    }, 1000);
  }

  _ensureInitialized() {
    // Lovelace can attach the element before assigning hass.  Waiting for the
    // authenticated hass object avoids a permanent blank panel after a reload.
    if (!this.isConnected || !this._hass || this._dashboard || this._initPromise) return;
    this._initPromise = this._init()
      .catch(err => {
        console.error('Argus initialization failed:', err);
        if (this.isConnected) {
          this._renderInitializationError(err);
        }
      })
      .finally(() => { this._initPromise = null; });
  }

  _bindSOS() {
    if (this._sosBound) return;
    const thumb = this.shadowRoot.getElementById('sos-thumb');
    const track = thumb && thumb.closest('.ios-slider-track');
    if (!thumb || !track || thumb._sosBound) return;
    thumb._sosBound = true;

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
    this._sosBound = true;
  }

  async _init() {
    this._mode = 'disarmed';
    if (!this._staticBound) {
      this._bindStatic();
      this._staticBound = true;
    }
    await this._connect();
    this._applyTranslations();
    await this._load();
    // Onboarding and login are valid initialized states, not failures that
    // should spawn a new WebSocket/retry loop.
    if (!this._dashboard) return;
    this._initWidgetGrid();
    if (this._postLoadBound) return;
    this._postLoadBound = true;
    this.shadowRoot.getElementById('btn-clear-log')?.addEventListener('click', () => this._clearHistory());
    this.shadowRoot.getElementById('btn-refresh-history')?.addEventListener('click', async () => {
      await this._loadActivityTimeline(this._dashboard?.entry_id);
      this._renderActivityLog();
    });
    this.shadowRoot.getElementById('btn-export-forensic')?.addEventListener('click', () => this._exportForensicTimeline());
    this.shadowRoot.getElementById('btn-export-config')?.addEventListener('click', () => this._exportConfig());
    this.shadowRoot.getElementById('btn-import-trigger')?.addEventListener('click', () => this.shadowRoot.getElementById('import-config-file').click());
    this.shadowRoot.getElementById('import-config-file')?.addEventListener('change', (ev) => this._importConfig(ev));
    this.shadowRoot.getElementById('btn-reset-config')?.addEventListener('click', () => this._resetConfig());
    this.shadowRoot.getElementById('btn-undo-reset')?.addEventListener('click', () => this._undoResetConfig());

    this.shadowRoot.getElementById('btn-save-personalization-standalone')?.addEventListener('click', () => this._savePersonalization());
    const toggleHeader = this.shadowRoot.getElementById('lbl-aesthetic-custom');
    const personalizeWorkspace = this.shadowRoot.getElementById('personalize-workspace');
    toggleHeader?.addEventListener('click', () => {
      const isCollapsed = personalizeWorkspace.classList.toggle('collapsed');
      const chevron = this.shadowRoot.getElementById('personalize-chevron');
      if (chevron) {
        chevron.style.transform = isCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)';
      }
    });
    this.shadowRoot.getElementById('btn-select-sos-outputs')?.addEventListener('click', () => this._openModal('panic'));

    this._configureEmergencyCall();
  }

  async _clearHistory() {
    if (!confirm(this._t('clear_history_confirm'))) return;
    try {
      const entryId = this._dashboard?.entry_id;
      await this._send('argus/clear_audit_log', entryId ? { entry_id: entryId } : {});
      await this._loadActivityTimeline(entryId);
      this._renderActivityLog();
    } catch (err) { alert(this._format('generic_error', { error: err.message })); }
  }

  async _loadActivityTimeline(entryId = null) {
    if (!this._ui) return;
    try {
      const payload = { limit: 100 };
      if (entryId) payload.entry_id = entryId;
      const response = await this._send('argus/get_forensic_timeline', payload);
      const timeline = Array.isArray(response?.timeline)
        ? response.timeline.filter(entry => entry && typeof entry === 'object' && !Array.isArray(entry))
        : [];
      this._forensicTimeline = timeline;
      this._activityTimelineError = null;
      this._ui.audit_log = timeline;
      this._renderActivityLog();
    } catch (err) {
      // A profile without view_history may continue using the dashboard.
      // Preserve any audit data already present instead of erasing it.
      console.warn('Argus activity timeline unavailable:', err);
      this._activityTimelineError = err?.message || String(err);
      this._forensicTimeline = null;
      if (!Array.isArray(this._ui.audit_log)) this._ui.audit_log = [];
      this._renderActivityLog();
    }
  }

  _exportForensicTimeline() {
    const events = Array.isArray(this._forensicTimeline) ? this._forensicTimeline : (this._ui?.audit_log || []);
    const blob = new Blob([JSON.stringify({format:'argus-forensic-timeline',generated_at:new Date().toISOString(),events}, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob); const anchor = document.createElement('a');
    anchor.href = url; anchor.download = `argus_forensic_${new Date().toISOString().replace(/[:.]/g,'-')}.json`; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  _backupText(key) {
    const language = this._getCurrentLangCode();
    const messages = {
      es:{password:'Contraseña de cifrado (mínimo 8 caracteres)',weak:'La contraseña debe tener al menos 8 caracteres.',decrypt:'Contraseña de la copia cifrada',bad:'No se pudo descifrar la copia. Verifica la contraseña.'},
      en:{password:'Encryption password (minimum 8 characters)',weak:'The password must be at least 8 characters.',decrypt:'Encrypted backup password',bad:'The backup could not be decrypted. Check the password.'},
      fr:{password:'Mot de passe de chiffrement (8 caractères minimum)',weak:'Le mot de passe doit comporter au moins 8 caractères.',decrypt:'Mot de passe de la sauvegarde chiffrée',bad:'Impossible de déchiffrer la sauvegarde. Vérifiez le mot de passe.'},
      pt:{password:'Senha de criptografia (mínimo de 8 caracteres)',weak:'A senha deve ter pelo menos 8 caracteres.',decrypt:'Senha do backup criptografado',bad:'Não foi possível descriptografar o backup. Verifique a senha.'},
      it:{password:'Password di cifratura (minimo 8 caratteri)',weak:'La password deve contenere almeno 8 caratteri.',decrypt:'Password del backup cifrato',bad:'Impossibile decifrare il backup. Verifica la password.'},
      zh:{password:'加密密码（至少 8 个字符）',weak:'密码必须至少包含 8 个字符。',decrypt:'加密备份密码',bad:'无法解密备份，请检查密码。'},
      ru:{password:'Пароль шифрования (минимум 8 символов)',weak:'Пароль должен содержать не менее 8 символов.',decrypt:'Пароль зашифрованной копии',bad:'Не удалось расшифровать копию. Проверьте пароль.'},
    };
    return (messages[language] || messages.en)[key];
  }

  _bytesToBase64(bytes) {
    let binary = '';
    bytes.forEach(byte => { binary += String.fromCharCode(byte); });
    return btoa(binary);
  }

  _base64ToBytes(value) {
    return Uint8Array.from(atob(value), char => char.charCodeAt(0));
  }

  async _backupKey(password, salt, usages) {
    const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      {name:'PBKDF2',salt,iterations:250000,hash:'SHA-256'}, material,
      {name:'AES-GCM',length:256}, false, usages
    );
  }

  _requestBackupPassword(kind) {
    return new Promise(resolve => {
      const layer = document.createElement('div');
      layer.className = 'modal-back open';
      layer.setAttribute('role', 'dialog');
      layer.setAttribute('aria-modal', 'true');
      const title = kind === 'decrypt' ? this._backupText('decrypt') : this._backupText('password');
      layer.innerHTML = `<div class="modal" style="max-width:430px"><div class="modal-head"><h3>${this._escapeHtml(title)}</h3></div><input type="password" class="glass-control" autocomplete="new-password" style="font-size:17px"><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:14px"><button class="ghost" data-secret-cancel>✕</button><button class="primary" data-secret-ok>✓</button></div></div>`;
      this.shadowRoot.appendChild(layer);
      const input = layer.querySelector('input');
      const finish = value => { layer.remove(); resolve(value); };
      layer.querySelector('[data-secret-cancel]').addEventListener('click', () => finish(null));
      layer.querySelector('[data-secret-ok]').addEventListener('click', () => finish(input.value));
      input.addEventListener('keydown', event => { if (event.key === 'Enter') finish(input.value); if (event.key === 'Escape') finish(null); });
      requestAnimationFrame(() => input.focus());
    });
  }

  async _exportConfig() {
    try {
      const password = await this._requestBackupPassword('encrypt');
      if (password === null) return;
      if (password.length < 8) { alert(this._backupText('weak')); return; }
      const exported = await this._send('argus/export_config');
      const config = exported?.config;
      if (typeof config !== 'object' || config === null) throw new Error(this._t('invalid_config'));
      // Runtime alarm state belongs to the current installation and must not
      // be imported as a command on another system.
      delete config.runtime;
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const key = await this._backupKey(password, salt, ['encrypt']);
      const cipher = await crypto.subtle.encrypt({name:'AES-GCM',iv}, key, new TextEncoder().encode(JSON.stringify(config)));
      const envelope = {
        format:'argus-encrypted-backup',version:1,kdf:'PBKDF2-SHA256',iterations:250000,cipher:'AES-256-GCM',
        salt:this._bytesToBase64(salt),iv:this._bytesToBase64(iv),data:this._bytesToBase64(new Uint8Array(cipher))
      };
      const blob = new Blob([JSON.stringify(envelope)], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = `argus_backup_${new Date().toISOString().split('T')[0]}.argus`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } catch (err) {
      alert(this._format('export_error', { error: err.message }));
    }
  }

  _importConfig(event) {
    const file = event.target.files[0];
    if (!file) return;
    event.target.value = ''; // Fix #3 - permite reimportar el mismo archivo
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        let config = JSON.parse(e.target.result);
        if (config?.format === 'argus-encrypted-backup') {
          const password = await this._requestBackupPassword('decrypt');
          if (password === null) return;
          try {
            const salt = this._base64ToBytes(config.salt);
            const iv = this._base64ToBytes(config.iv);
            const key = await this._backupKey(password, salt, ['decrypt']);
            const plain = await crypto.subtle.decrypt({name:'AES-GCM',iv}, key, this._base64ToBytes(config.data));
            config = JSON.parse(new TextDecoder().decode(plain));
          } catch (_) {
            throw new Error(this._backupText('bad'));
          }
        }
        if (typeof config !== 'object' || config === null)
          throw new Error(this._t('invalid_config'));
        await this._send('argus/restore_config', { config });
        alert(this._t('import_success'));
        window.location.reload();
      } catch (err) {
        alert(this._format('import_error', { error: err.message }));
      }
    };
    reader.onerror = () => alert(this._t('file_read_error'));
    reader.readAsText(file);
  }

  async _resetConfig() {
    if (!confirm(this._t('reset_confirm'))) return;
    try {
      this._undoState = JSON.parse(JSON.stringify(this._ui)); // Store for undo

      const defaultConfig = {};
      await this._send('argus/restore_config', { config: defaultConfig });

      this.shadowRoot.getElementById('btn-reset-config').style.display = 'none';
      this.shadowRoot.getElementById('btn-undo-reset').style.display = 'block';

      alert(this._t('reset_success'));

      // Auto reload after 10s if not undone
      this._resetTimer = setTimeout(() => {
        window.location.reload();
      }, 10000);

    } catch (err) {
      alert(this._t('reset_error_auth'));
    }
  }

  async _undoResetConfig() {
    if (!this._undoState) return;
    try {
      clearTimeout(this._resetTimer);
      await this._send('argus/restore_config', { config: this._undoState });

      this.shadowRoot.getElementById('btn-reset-config').style.display = 'block';
      this.shadowRoot.getElementById('btn-undo-reset').style.display = 'none';

      alert(this._t('undo_success'));
      window.location.reload();
    } catch (err) {
      alert(this._format('undo_error', { error: err.message }));
    }
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
    s('btn-access-users')?.addEventListener('click', () => this._toggleAccessSection('users'));
    s('btn-access-pin')?.addEventListener('click', () => this._toggleAccessSection('pin'));
    s('btn-save-pin').addEventListener('click', () => this._savePin());
    s('lnk-forgot-pin')?.addEventListener('click', e => { e.preventDefault(); this._handleForgotPin(); });
    s('pin-forgot-link')?.addEventListener('click', e => { e.preventDefault(); this._handleForgotPin(); });

    s('pin-close').addEventListener('click', () => this._closePinModal());
    s('pin-cancel').addEventListener('click', () => this._closePinModal());
    s('pin-modal').addEventListener('click', e => { if (e.target.id === 'pin-modal') this._closePinModal(); });
    s('pin-confirm').addEventListener('click', () => this._submitPin());
    s('pin-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._submitPin(); });
    this.shadowRoot.querySelectorAll('[data-pin-digit]').forEach(btn =>
      btn.addEventListener('click', () => this._appendPinDigit(btn.dataset.pinDigit))
    );
    s('pin-backspace').addEventListener('click', () => this._backspacePin());

    s('btn-add-notif')?.addEventListener('click', () => this._addNotifTarget());
    s('btn-save-notif')?.addEventListener('click', () => this._saveNotifications());

    // Home name edit (requires PIN)
    s('btn-edit-home-name-standalone')?.addEventListener('click', () => this._editHomeName());
    s('home-name-modal-close').addEventListener('click', () => this._closeHomeNameModal());
    s('home-name-cancel').addEventListener('click', () => this._closeHomeNameModal());
    s('home-name-modal').addEventListener('click', e => { if (e.target.id === 'home-name-modal') this._closeHomeNameModal(); });
    s('home-name-save').addEventListener('click', () => this._saveHomeName());
    s('home-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') this._saveHomeName(); });

    // Edit widgets button
    s('btn-edit-widgets')?.addEventListener('click', () => this._toggleWidgetEditing());

    // Personalize section toggle
    const toggleHeader = s('lbl-aesthetic-custom');
    const personalizeWorkspace = s('personalize-workspace');
    if (toggleHeader && personalizeWorkspace && !toggleHeader._boundToggle) {
      toggleHeader._boundToggle = true;
      toggleHeader.addEventListener('click', () => {
        const isCollapsed = personalizeWorkspace.classList.toggle('collapsed');
        const chevron = s('personalize-chevron');
        if (chevron) {
          chevron.textContent = isCollapsed ? '▼ Desplegar' : '▲ Ocultar';
        }
      });
    }

    // Language picker
    s('btn-lang-picker')?.addEventListener('click', () => this._openLangModal());
    s('lang-modal-close')?.addEventListener('click', () => this._closeLangModal());
    s('lang-modal')?.addEventListener('click', e => { if (e.target.id === 'lang-modal') this._closeLangModal(); });

    // SOS Modal
    const closeSOS = () => {
      s('sos-modal')?.classList.remove('open');
      this._sosEntryIdx = null;
      if (s('sos-thumb')) {
         s('sos-thumb').style.left = '6px';
         s('sos-thumb').closest('.ios-slider-track').style.background = 'rgba(217,4,41,0.15)';
      }
    };
    s('btn-cancel-sos')?.addEventListener('click', closeSOS);
    s('sos-close-x')?.addEventListener('click', closeSOS);
    s('sos-modal')?.addEventListener('click', e => { if (e.target.id === 'sos-modal') closeSOS(); });

    s('bg-mode-select-standalone')?.addEventListener('change', () => this._updateBgFieldsVisibility());
    s('hub-bg-mode-select')?.addEventListener('change', () => this._updateBgFieldsVisibility());
    s('panel-bg-file-input')?.addEventListener('change', e => this._handlePanelBgFile(e));
    s('hub-bg-file-input')?.addEventListener('change', e => this._handleHubBgFile(e));
  }

  /* ── WebSocket ───────────────────────────────────────────────────── */
  async _connect() {
    // A custom panel already receives Home Assistant's authenticated
    // connection. Opening a second socket and reading hass.auth.data used an
    // internal token that modern HA versions no longer expose reliably.
    if (typeof this._hass?.callWS !== 'function') {
      throw new Error('Home Assistant authenticated WebSocket is unavailable');
    }
  }

  _send(type, data = {}) {
    if (typeof this._hass?.callWS !== 'function') {
      return Promise.reject(new Error('Home Assistant authenticated WebSocket is unavailable'));
    }
    return this._hass.callWS({ type, ...data });
  }

  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    let bootstrap;
    try { bootstrap = await this._send('argus/login_bootstrap'); }
    catch (e) { console.error('Argus bootstrap load failed:', e); return; }

    this._bootstrap = bootstrap;
    this._backgroundMode = bootstrap.background_mode || 'none';
    this._backgroundImages = bootstrap.background_images || [];
    this._updateCanvasBackground();

    if (bootstrap.configuration_missing) {
      this._loadState = 'configuration_missing';
      this._renderMissingConfigurationScreen();
      return;
    }

    if (bootstrap.first_run) {
      this._loadState = 'first_run';
      this._renderFirstRunScreen();
      return;
    }

    if (bootstrap.legacy_claim_needed) {
      this._loadState = 'legacy_claim';
      this._renderLegacyClaimScreen();
      return;
    }

    if (!bootstrap.has_active_session || !this._profileSelectedThisMount) {
      this._loadState = 'profile_selection';
      this._renderLoginScreen(bootstrap);
      return;
    }

    // Now we have a session, load dashboard
    let dashboard;
    try { dashboard = await this._send('argus/dashboard'); }
    catch (e) {
      if (e.message.includes('permission') || e.message.includes('session') || e.message.includes('unauthorized')) {
        this._renderLoginScreen(bootstrap);
        return;
      }
      console.error('Argus dashboard load failed:', e);
      return;
    }

    this._dashboard = dashboard;
    this._loadState = 'dashboard';
    const bootstrapOverlay = this.shadowRoot.getElementById('bootstrap-overlay');
    if (bootstrapOverlay) bootstrapOverlay.style.display = 'none';
    this._currentProfile = dashboard.current_profile || null;
    this._available = dashboard.available_entities || [];
    this._ui = dashboard.ui || { modes: {}, dashboard: {} };
    await this._loadActivityTimeline(dashboard.entry_id);
    this._notifTargets = dashboard.ui?.notif_targets || [];
    this._users = Array.isArray(dashboard.ui?.users)
      ? dashboard.ui.users.filter(user => user && typeof user === 'object' && !Array.isArray(user))
      : [];
    this._homeName = dashboard.ui?.home_name || '';
    this._emergencyNumber = dashboard.ui?.emergency_number || '911';
    this._panicOutputs = dashboard.ui?.panic_outputs || [];
    this._backgroundMode = dashboard.ui?.background_mode || 'weather';
    this._backgroundImages = dashboard.ui?.background_images || [];
    this._temperatureSource = dashboard.ui?.temperature_source || 'auto';
    this._weatherSource = dashboard.ui?.weather_source || 'auto';
    this._panelBgFile = dashboard.ui?.panel_bg_file || '';
    this._panelBgSound = Boolean(dashboard.ui?.panel_bg_sound);
    const rawHubBgMode = dashboard.ui?.hub_bg_mode || 'none';
    this._hubBgMode = (rawHubBgMode === 'none' || rawHubBgMode === 'default') ? 'default' : rawHubBgMode;
    this._hubBgFile = dashboard.ui?.hub_bg_file || '';
    this._hubBgSound = Boolean(dashboard.ui?.hub_bg_sound);
    this._updateTheme();
    this._updateHomeNameDisplay();
    this._updateProfileBadge();
    this._showProfileWelcome();

    this._populateTemperatureSources();
    const tempSel = this.shadowRoot.getElementById('temp-source-select-standalone');
    if (tempSel) tempSel.value = this._temperatureSource || 'auto';
    this._populateWeatherSources();
    const weatherSel = this.shadowRoot.getElementById('weather-source-select');
    if (weatherSel) weatherSel.value = this._weatherSource || 'auto';
    const emergencyInput = this.shadowRoot.getElementById('emergency-number-input');
    if (emergencyInput) emergencyInput.value = this._emergencyNumber;
    this._renderSosOutputs();
    this._configureEmergencyCall();

    const bgMode = this.shadowRoot.getElementById('bg-mode-select-standalone');
    if (bgMode) {
      bgMode.innerHTML = `
        <option value="weather">${this._t('bg_weather')}</option>
        <option value="none">${this._t('bg_panel_none')}</option>
        <option value="photo">${this._t('bg_photo')}</option>
        <option value="collage">${this._t('bg_collage')}</option>
      `;
      bgMode.value = this._backgroundMode || 'weather';
    }

    const hubBgSelect = this.shadowRoot.getElementById('hub-bg-mode-select');
    if (hubBgSelect) {
      hubBgSelect.innerHTML = `
        <option value="default">${this._t('bg_hub_default')}</option>
        <option value="image">${this._t('bg_image_opt')}</option>
      `;
      hubBgSelect.value = this._hubBgMode || 'default';
    }

    const panelUrlInput = this.shadowRoot.getElementById('panel-bg-url-input');
    if (panelUrlInput) panelUrlInput.value = (this._panelBgFile && !this._panelBgFile.startsWith('data:')) ? this._panelBgFile : '';

    const chkPanelSound = this.shadowRoot.getElementById('chk-panel-bg-sound');
    if (chkPanelSound) chkPanelSound.checked = this._panelBgSound;

    const hubUrlInput = this.shadowRoot.getElementById('hub-bg-url-input');
    if (hubUrlInput) hubUrlInput.value = (this._hubBgFile && !this._hubBgFile.startsWith('data:')) ? this._hubBgFile : '';

    const chkHubSound = this.shadowRoot.getElementById('chk-hub-bg-sound');
    if (chkHubSound) chkHubSound.checked = this._hubBgSound;

    this._updateBgFieldsVisibility();
    this._updateCanvasBackground();

    this._isAdmin = dashboard.current_profile?.role === 'admin';
    this._permissions = dashboard.current_profile?.permissions || {};
    const resolvedEntityId = dashboard.entries?.[0]?.entity_id;
    if (resolvedEntityId) {
      if (!this._modeEntryId || this._modeEntryId === 'default') {
        this._modeEntryId = resolvedEntityId;
      }
      if (this._loadRetryTimeout) {
        clearTimeout(this._loadRetryTimeout);
        this._loadRetryTimeout = null;
      }
    } else {
      if (!this._modeEntryId || this._modeEntryId === 'default') {
        this._modeEntryId = null;
      }
    }

    if (this._isAdmin) {
      try {
        const haUsersResp = await this._send('argus/get_ha_users');
        this._haUsersList = haUsersResp?.ha_users || [];
      } catch (e) {
        console.warn('Could not fetch HA users:', e);
      }
    }

    // Show current PIN toggle & validation required
    const pinConfigured = dashboard.entries?.[0]?.pin_configured === true;
    const pinDisp = this.shadowRoot.getElementById('current-pin-display');
    const groupCurrentPin = this.shadowRoot.getElementById('group-current-pin');

    if (pinDisp) pinDisp.textContent = pinConfigured ? this._t('pin_active_yes') : this._t('pin_active_no');
    if (groupCurrentPin) {
      if (pinConfigured) groupCurrentPin.classList.remove('collapsed');
      else groupCurrentPin.classList.add('collapsed');
    }
    const lnkForgot = this.shadowRoot.getElementById('lnk-forgot-pin');
    if (lnkForgot) lnkForgot.style.display = pinConfigured ? 'inline' : 'none';
    const pinForgot = this.shadowRoot.getElementById('pin-forgot-link');
    if (pinForgot) pinForgot.style.display = pinConfigured ? 'inline' : 'none';

    // Each section is independent. A bad legacy value in one must not leave
    // the rest of the dashboard as an empty template skeleton.
    [
      ['instances', () => this._renderEntries()],
      ['activity log', () => this._renderActivityLog()],
      ['mode tabs', () => this._renderModeTabs()],
      ['mode view', () => this._renderModeView()],
      ['automations', () => this._renderAutomations()],
      ['notifications', () => this._renderNotifications()],
      ['users', () => this._renderUsers()],
    ].forEach(([name, render]) => {
      try { render(); }
      catch (err) { console.error(`Argus ${name} render failed:`, err); }
    });
    this._loadUploadedFiles();

    // Retry loading if integration is reloading and has no active entity_id yet
    const hasEntries = dashboard.entries && dashboard.entries.length > 0;
    const hasEntityId = hasEntries && dashboard.entries[0].entity_id;
    if (hasEntries && !hasEntityId) {
      if (!this._loadRetryTimeout) {
        this._loadRetryTimeout = setTimeout(() => {
          this._loadRetryTimeout = null;
          this._load();
        }, 1500);
      }
    } else {
      if (this._loadRetryTimeout) {
        clearTimeout(this._loadRetryTimeout);
        this._loadRetryTimeout = null;
      }
    }
  }

  /* ── Entries (alarm instances) ───────────────────────────────────── */

  _getSensorBattery(sensorId, sensorState) {
    return this._getDevicePower(sensorId, sensorState).battery;
  }

  // Read only values that Home Assistant exposes.  In particular, do not use a
  // lightning icon or assume 100% just because an entity has no battery sensor.
  _getDevicePower(sensorId, sensorState) {
    const attributes = sensorState?.attributes || {};
    const direct = [attributes.battery_level, attributes.battery, attributes.battery_percentage]
      .find(value => Number.isFinite(Number(value)));
    let battery = direct === undefined ? null : Math.max(0, Math.min(100, Math.round(Number(direct))));

    const source = String(attributes.power_source || attributes.power_supply || attributes.power_type || '').toLowerCase();
    const mains = attributes.mains_powered === true || attributes.is_mains_powered === true || attributes.wired === true ||
      /(?:mains|ac|wired|line|external|toma|corriente)/.test(source);

    if (battery === null) {
      // Prefer exact entity-id matches.  The prior loose first-match lookup
      // could display another device's battery when several names overlapped.
      const objectId = sensorId.split('.').slice(1).join('.').toLowerCase();
      const base = objectId.replace(/_(contact|door|window|motion|occupancy|opening|sensor)$/i, '');
      const companion = Object.values(this._hass?.states || {})
        .map(state => {
          const id = String(state.entity_id || '').toLowerCase();
          const isBattery = state.attributes?.device_class === 'battery' || /_battery(?:_level|_percent(?:age)?)?$/i.test(id);
          if (!isBattery) return { state, score: 0 };
          const object = id.split('.').slice(1).join('.');
          const score = object === `${objectId}_battery` ? 100
            : object === `${base}_battery` ? 90
            : object.startsWith(`${objectId}_battery`) ? 80
            : object.startsWith(`${base}_battery`) ? 70
            : 0;
          return { state, score };
        })
        .filter(candidate => candidate.score > 0)
        .sort((a, b) => b.score - a.score)[0]?.state;
      const level = Number(companion?.state);
      if (Number.isFinite(level)) battery = Math.max(0, Math.min(100, Math.round(level)));
    }
    return { battery, mains };
  }

  _deviceFacts(entityId, stateObj, includeStatus = true) {
    const raw = stateObj?.state || 'unknown';
    const isOpen = ['on', 'unlocked', 'open', 'recording', 'active', 'motion'].includes(raw);
    const labels = { on:this._t('status_open'), off:this._t('status_closed'), locked:this._t('status_closed'), unlocked:this._t('status_open'), idle:this._t('status_idle'), recording:this._t('status_recording'), home:this._t('status_home'), not_home:this._t('status_away') };
    const domain = entityId.split('.')[0];
    const isActuator = ['siren', 'switch', 'light', 'fan', 'input_boolean', 'script'].includes(domain);
    const power = this._getDevicePower(entityId, stateObj);
    const facts = [];
    if (includeStatus) facts.push({ text: isActuator ? raw.toUpperCase() : (labels[raw] || raw), className: isActuator ? '' : (isOpen ? 'status-open' : 'status-closed') });
    if (power.mains) facts.push({ text: '🔌 AC', className: 'power-mains' });
    if (power.battery !== null) facts.push({ text: `🔋 ${power.battery}%`, className: power.battery <= 20 ? 'power-low' : '' });
    return facts;
  }

  _renderBatteryAlerts() {
    if (!this._hass?.states) return '';
    const states = this._hass.states;
    const lowBatteries = Object.values(states).filter((st) => {
      const isBattery = st.entity_id?.endsWith('_battery') || st.attributes?.device_class === 'battery';
      const isMains = /dimmer|switch|light|plug|outlet/i.test(st.entity_id) || /dimmer|switch|light|plug|outlet/i.test(st.attributes?.friendly_name || '');
      if (!isBattery || isMains || st.state === 'unknown' || st.state === 'unavailable') return false;
      const level = Number(st.state);
      return !Number.isNaN(level) && level <= 20;
    });
    if (!lowBatteries.length) return '';
    const t = k => this._t(k);
    const rows = lowBatteries.map(b => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${t('battery_low')}: ${this._escapeHtml(b.attributes.friendly_name || b.entity_id)} (${b.state}%)</div>`).join('');
    return `<div class="battery-alerts-container" style="position:absolute; top:18px; left:18px; z-index:15; display:flex; flex-direction:column; gap:6px; max-width:75%; pointer-events:none;">${rows}</div>`;
  }

  _modeButtonIcon(mode) {
    const paths = {
      home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z"/><path d="M9 21v-6h6v6"/>',
      away: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="M8.5 12h7M12 8.5v7"/>',
      night: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/><path d="m17.5 4 .5 1.2L19.2 6l-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.8z"/>',
      vacation: '<path d="M3 13.5 21 5l-6.8 15-2.3-6.2z"/><path d="m11.9 13.8 3.4 3.4M11.9 13.8 7.2 12"/>',
      disarm: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      sos: '<path d="M12 3 21 20H3z"/><path d="M12 9v4.5M12 17h.01"/>'
    };
    return `<svg class="mode-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[mode] || paths.disarm}</svg>`;
  }

  _renderPremiumStatusIcon(state, triggered) {
    const mode = triggered ? 'triggered' : ({ armed_home:'home', armed_away:'away', armed_night:'night', armed_vacation:'vacation', disarmed:'disarm' }[state] || 'disarm');
    const accent = { home:'#ffad42', away:'#ff6464', night:'#7fb9ff', vacation:'#d69cff', disarm:'#6be295', triggered:'#ff424f' }[mode];
    const symbol = {
      home:'<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away:'<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night:'<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
      vacation:'<path d="m67 113 66-34-28 66-9-25z"/><path d="m96 120 15 15M96 120l-20-6"/>',
      disarm:'<path d="m76 104 16 16 34-39"/>',
      triggered:'<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[mode];
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 18px 28px rgba(0,0,0,.34));max-width:180px;margin:auto;display:block" aria-label="${this._escapeHtml(mode)}"><defs><linearGradient id="premium-${mode}" x1="20%" y1="10%" x2="85%" y2="100%"><stop stop-color="#fff" stop-opacity=".38"/><stop offset=".25" stop-color="${accent}" stop-opacity=".78"/><stop offset="1" stop-color="${accent}" stop-opacity=".18"/></linearGradient><filter id="premium-glow-${mode}"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${mode})" stroke="${accent}" stroke-width="3" filter="url(#premium-glow-${mode})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(5,12,23,.3)" stroke="rgba(255,255,255,.22)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${mode})">${symbol}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${accent}" stroke-opacity=".42" stroke-width="2"><animate attributeName="r" values="51;60;51" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;.08;.6" dur="3.5s" repeatCount="indefinite"/></circle></svg>`;
  }

  _getIntelligentSVG(state, w, isNight, triggered) {
    return this._renderPremiumStatusIcon(state, triggered);
  }

  _renderEntries() {
    this._sosBound = false;
    const el = this.shadowRoot.getElementById('entries');
    const globalStatusEl = this.shadowRoot.getElementById('global-status');
    const entries = this._dashboard?.entries || [];
    const t = k => this._t(k);

    if (!entries.length) {
      el.innerHTML = `<div class="small" style="padding:10px">${t('no_instances')}</div>`;
      return;
    }

    // Determine global status
    const allStates = entries.map(e => this._hass?.states[e.entity_id]?.state || 'unavailable');
    const isArmed = allStates.some(s => s.startsWith('armed') || s === 'triggered' || s === 'pending');
    globalStatusEl.innerHTML = `<span class="badge ${isArmed ? 'armed_away' : 'disarmed'}">${isArmed ? t('system_armed') : t('system_disarmed')}</span>`;

    // Weather
    const weatherEnt = this._getWeatherEntity();
    const weatherState = weatherEnt.state || 'sunny';
    const isNight = this._hass?.states?.['sun.sun']?.state === 'below_horizon';
    const weather = this._weatherPresentation(weatherState, isNight);
    const modeLabel = key => {
      const str = String(t(key) || '').trim();
      const firstSpace = str.indexOf(' ');
      if (firstSpace > 0 && firstSpace <= 3) return str.substring(firstSpace + 1).trim();
      return str;
    };

    // Time
    const timeStr = new Date().toLocaleTimeString(this._getLocale(), { hour: '2-digit', minute: '2-digit' });
    const now = new Date();
    const heroClock = this.shadowRoot.getElementById('hero-clock-time');
    const heroDate = this.shadowRoot.getElementById('hero-clock-date');
    const heroWeather = this.shadowRoot.getElementById('hero-weather-pill');
    const heroSecurity = this.shadowRoot.getElementById('hero-security-pill');
    if (heroClock) heroClock.textContent = timeStr;
    if (heroDate) heroDate.textContent = now.toLocaleDateString(this._getLocale(), { weekday: 'short', month: 'short', day: 'numeric' });
    if (heroWeather) heroWeather.textContent = `${weather.icon} ${weather.label}`;
    if (heroSecurity) heroSecurity.innerHTML = `<i class="hero-live" style="background:${isArmed ? '#ffb54d' : '#55df91'};box-shadow:0 0 9px ${isArmed ? '#ffb54d' : '#55df91'}"></i>${this._escapeHtml(isArmed ? t('system_armed') : t('system_disarmed'))}`;

    // Surgical Update: Maintain article nodes to persist fullscreen state
    const existing = Array.from(el.querySelectorAll('article.entry'));
    if (existing.length !== entries.length) {
      el.innerHTML = entries.map((_, i) => `<article class="entry" data-idx="${i}"></article>`).join('');
    }

    const currentArticles = el.querySelectorAll('article.entry');
    entries.forEach((e, idx) => {
      const art = currentArticles[idx];
      const live  = this._hass?.states[e.entity_id]?.state;
      const state = live || e.state || 'unavailable';
      const triggered = state === 'triggered';
      const panicActive = Boolean(this._hass?.states?.[e.entity_id]?.attributes?.argus_panic_active);
      const requiresDisarmPin = e.pin_configured === true || e.user_pin_configured === true;
      const fullHudLoc = this._hass?.config?.location_name || this._homeName || t('home_fallback');
      const displayedTemperature = this._getDisplayedTemperature();
      const temperatures = this._getTemperatureReadings();
      const stateMeta = {
        disarmed: { label: t('disarmed'), accent: '#55df91' },
        armed_home: { label: t('mode_home'), accent: '#ffb54d' },
        armed_away: { label: t('mode_away'), accent: '#ff724f' },
        armed_night: { label: t('mode_night'), accent: '#8ab9ff' },
        armed_vacation: { label: t('mode_vacation'), accent: '#d59bff' },
        triggered: { label: t('log_triggered'), accent: '#ff4d5d' },
        pending: { label: t('system_armed'), accent: '#ffb54d' },
      }[state] || { label: state.replace(/_/g, ' '), accent: '#9eb5cc' };
      const weatherLabel = weather.label;
      const recent = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log[0] : null;
      const recentEvent = recent ? this._localizeActivityDetail(String(recent.action || ''), String(recent.detail || '')) : '';

      const mKey = state.replace('armed_', '');
      let eCfg = (this._ui?.modes?.__by_entity__?.[e.entity_id]?.[mKey])
                || (this._ui?.modes?.[mKey]) || {};
      if (triggered && !(eCfg.sensors || []).length) {
        const modes = this._ui?.modes?.__by_entity__?.[e.entity_id] || this._ui?.modes || {};
        eCfg = ['away', 'home', 'night', 'vacation']
          .map(mode => modes[mode])
          .find(config => (config?.sensors || []).some(id => ['on', 'open', 'unlocked', 'recording', 'active', 'motion'].includes(this._hass?.states?.[id]?.state)))
          || {};
      }
      let sList = eCfg.sensors || [];
      if (state === 'disarmed' || !sList.length) {
        const modes = this._ui?.modes?.__by_entity__?.[e.entity_id] || this._ui?.modes || {};
        const allSensors = new Set();
        ['away', 'home', 'night', 'vacation'].forEach(m => {
          if (modes[m]?.sensors) {
            modes[m].sensors.forEach(s => allSensors.add(s));
          }
        });
        sList = Array.from(allSensors);
      }
      const sByps = eCfg.bypassed_sensors || [];
      const activeSensors = sList.filter(s => !sByps.includes(s));
      const OPEN = ['on', 'open', 'unlocked', 'recording', 'active', 'motion'];
      const hasOpenSensor = activeSensors.some(sid => OPEN.includes(this._hass?.states?.[sid]?.state));
      const sensorAlert = hasOpenSensor && (state.startsWith('armed') || state === 'pending') && !triggered;

      const isFS = this._fullscreenIdx === idx || (this._kioskLocked && (this._kioskEntryId === e.entry_id || entries.length === 1));
      art.className = `entry cinematic-entry ${isFS ? 'ios-fullscreen' : ''}`;
      art.style.cssText = triggered ? 'border:3px solid #ff5252;box-shadow:0 0 30px rgba(255,82,82,.4)' : '';
      art.querySelectorAll('.wx-webgl').forEach(canvas => canvas._argusWebglStop?.());
      const sensorRows = activeSensors.map(sid => {
        const sensor = this._hass?.states[sid];
        if (!sensor) return '';
        const isOpen = OPEN.includes(sensor.state);
        const name = sensor.attributes?.friendly_name || sid.split('.')[1] || sid;
        const deviceClass = sensor.attributes?.device_class || (sid.startsWith('lock.') ? 'lock' : 'door');
        
        let iconHtml = '';
        if (deviceClass === 'lock') {
          iconHtml = isOpen ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`
                            : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
        } else if (deviceClass === 'window') {
          iconHtml = isOpen ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14l16 0"></path><path d="M4 10l16 0"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>`
                            : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M4 12h16M12 4v16"></path></svg>`;
        } else if (deviceClass === 'motion') {
          iconHtml = isOpen ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M4.93 4.93a10 10 0 0 1 14.14 0M4.93 19.07a10 10 0 0 0 14.14 0"></path></svg>`
                            : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>`;
        } else {
          // Default to door
          iconHtml = isOpen ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V2h12v20H4z"></path><path d="M16 4h4v18h-4"></path><circle cx="12" cy="12" r="1"></circle></svg>`
                            : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V2h12v20H6z"></path><circle cx="14" cy="12" r="1"></circle></svg>`;
        }

        return `<div class="console-sensor ${isOpen ? 'open' : ''}"><span class="console-sensor-icon" style="display:flex;align-items:center;justify-content:center;color:${isOpen?'#ff968b':'#75f4b0'};${isOpen?'animation:pulse 2s infinite;':''}">${iconHtml}</span><span class="console-sensor-name">${this._escapeHtml(name)}</span><span class="console-sensor-state" style="color:${isOpen?'#ff968b':'#75f4b0'}">${this._escapeHtml(isOpen ? t('status_open') : t('status_closed'))}</span></div>`;
      }).join('');

      art.innerHTML = `
          ${this._renderEntryBackground(weatherState, isNight)}
          ${this._kioskLocked ? `<button class="btn-unlock-kiosk" data-action="unlock-kiosk" style="position:absolute;top:16px;right:16px;z-index:99;padding:8px 14px;background:rgba(220,38,38,0.85);color:white;border:none;border-radius:10px;font-weight:600;font-size:13px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 4px 12px rgba(0,0,0,0.4)">🔓 ${this._escapeHtml(t('unlock_kiosk') || 'Desbloquear kiosco')}</button>` : ''}
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:100;padding:5px 12px;background:rgba(36,188,129,.2);border:1px solid rgba(36,188,129,.4);border-radius:20px;color:#75f4b0;font-size:11px;font-weight:700;backdrop-filter:blur(10px);box-shadow:0 4px 12px rgba(0,0,0,0.2);display:flex;align-items:center;gap:6px;white-space:nowrap;"><div style="width:7px;height:7px;border-radius:50%;background:#75f4b0;box-shadow:0 0 8px #75f4b0;"></div>CONECTADO</div>
          ${isFS ? `<button class="ghost entry-exit-fs" data-exit-fullscreen title="${this._escapeHtml(t('fullscreen_title'))}" aria-label="${this._escapeHtml(t('fullscreen_title'))}" style="position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);backdrop-filter:blur(12px);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 20px rgba(0,0,0,.3)">×</button>` : ''}
          ${!isFS ? `<button class="ghost fs-btn entry-fs" data-fullscreen="${idx}" title="${this._escapeHtml(t('fullscreen_title'))}" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>` : ''}
          ${this._renderBatteryAlerts()}
          <!-- HUD hidden inside security-console — data shown in .console-hud instead -->
          <div class="hud">
            <div class="hud-loc">${this._escapeHtml(fullHudLoc)} · ${this._escapeHtml(weatherLabel)}</div>
            <div class="hud-data"><span>${this._escapeHtml(timeStr)}</span>${displayedTemperature ? `<i>🌡️ ${this._escapeHtml(displayedTemperature)}</i>` : ''}</div>
            ${temperatures.length ? `<div class="hud-temperatures">${temperatures.map(item => `<span class="hud-temperature">${this._escapeHtml(item.label)} ${this._escapeHtml(item.value)}</span>`).join('')}</div>` : ''}
          </div>
          <div class="entry-content security-console">
            <!-- Compact HUD bar at top of console — replaces overlapping absolute hud -->
            <div class="console-hud">
              <span class="console-hud-loc">🏡 ${this._escapeHtml(fullHudLoc)} · ${this._escapeHtml(weatherLabel)}</span>
              <div class="console-hud-right">
                <span class="console-hud-time">${this._escapeHtml(timeStr)}</span>
                ${displayedTemperature ? `<span class="console-hud-temp">🌡️ ${this._escapeHtml(displayedTemperature)}</span>` : ''}
                ${temperatures.length ? `<div class="console-hud-temps">${temperatures.map(item => `<span class="console-hud-tpill">${this._escapeHtml(item.label)} ${this._escapeHtml(item.value)}</span>`).join('')}</div>` : ''}
              </div>
            </div>
            <div class="entry-icon" style="display:flex;justify-content:center;animation:float-icon 5s ease-in-out infinite;">
              ${this._getIntelligentSVG(state, null, isNight, triggered)}
            </div>
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${state==='armed_home'?'active':''} ${sensorAlert && state==='armed_home'?'buzz-orange':''}" data-idx="${idx}" data-action="home">${this._modeButtonIcon('home')}<span>${this._escapeHtml(modeLabel('btn_home'))}</span></button>
              <button class="liquid-btn btn-away ${state==='armed_away'?'active':''} ${sensorAlert && state==='armed_away'?'buzz-orange':''}" data-idx="${idx}" data-action="away">${this._modeButtonIcon('away')}<span>${this._escapeHtml(modeLabel('btn_away'))}</span></button>
              <button class="liquid-btn btn-night ${state==='armed_night'?'active':''} ${sensorAlert && state==='armed_night'?'buzz-orange':''}" data-idx="${idx}" data-action="night">${this._modeButtonIcon('night')}<span>${this._escapeHtml(modeLabel('btn_night'))}</span></button>
              <button class="liquid-btn btn-vacation ${state==='armed_vacation'?'active':''} ${sensorAlert && state==='armed_vacation'?'buzz-orange':''}" data-idx="${idx}" data-action="vacation">${this._modeButtonIcon('vacation')}<span>${this._escapeHtml(modeLabel('btn_vacation'))}</span></button>
              <button class="liquid-btn btn-disarm ${state==='disarmed'?'active':''}" data-idx="${idx}" data-action="disarm">${this._modeButtonIcon('disarm')}<span>${this._escapeHtml(modeLabel('btn_disarmed'))}</span></button>
              ${this._permissions?.sos !== false ? `<button class="btn-sos" data-action="${panicActive ? 'stop-sos' : 'sos'}" data-idx="${idx}">${this._modeButtonIcon('sos')}<span>${panicActive ? t('sos_stop') : t('btn_sos')}</span></button>` : ''}
            </div>
            <div class="console-sensors">${sensorRows || `<div class="console-empty">${this._escapeHtml(sList.length === 0 ? 'Sin sensores de intrusión configurados.' : 'Todos los sensores configurados están omitidos.')}</div>`}</div>

          </div>
      `;
    });

    el.querySelectorAll('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])').forEach(btn =>
      btn.addEventListener('click', ev => this._handleAction(ev.currentTarget.dataset.idx, ev.currentTarget.dataset.action))
    );

    el.querySelectorAll('button[data-action="unlock-kiosk"]').forEach(btn =>
      btn.addEventListener('click', () => this._requestKioskUnlock())
    );

    el.querySelectorAll('button[data-action="sos"]').forEach(btn =>
      btn.addEventListener('click', () => {
        this._sosEntryIdx = Number(btn.dataset.idx);
        const sosModal = this.shadowRoot.getElementById('sos-modal');
        if (sosModal) sosModal.classList.add('open');
      })
    );
    el.querySelectorAll('button[data-action="stop-sos"]').forEach(btn =>
      btn.addEventListener('click', () => this._stopSOS(Number(btn.dataset.idx)))
    );
    el.querySelectorAll('button[data-fullscreen]').forEach(btn => {
      btn.addEventListener('click', ev => this._toggleFullscreen(ev.currentTarget.closest('.entry')));
    });
    el.querySelectorAll('button[data-exit-fullscreen]').forEach(btn => {
      btn.addEventListener('click', () => this._exitFullscreenView());
    });
    el.querySelectorAll('.wx-webgl').forEach(canvas => this._initWeatherWebGL(canvas));
    this._bindSOS();
  }

  async _exitFullscreenView() {
    const validIdx = this._fullscreenIdx >= 0 ? this._fullscreenIdx : 0;
    const fsEntry = (this._dashboard?.entries || [])[validIdx];
    const requiresPin = fsEntry && (fsEntry.pin_configured === true || fsEntry.user_pin_configured === true);

    const doExit = async () => {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        try {
          if (document.exitFullscreen) await document.exitFullscreen();
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        } catch (_) {}
      }
      const target = this._kioskTarget || this.shadowRoot.querySelector('.entry.ios-fullscreen');
      target?.classList.remove('ios-fullscreen');
      this.shadowRoot.querySelectorAll('.entry.ios-fullscreen').forEach(el => el.classList.remove('ios-fullscreen'));
      this.classList.remove('fullscreen-active');
      this._fullscreenIdx = -1;
      this._kioskLocked = false;
      this._kioskEntryId = null;
      this._kioskTarget = null;
      document.body.style.overflow = '';
      this._renderEntries();
    };

    if (!requiresPin) {
      await doExit();
      return;
    }

    this._showPinModal(async (pin) => {
      try {
        await this._send('argus/verify_master_pin_for_screen_unlock', {
          entry_id: fsEntry.entry_id,
          pin: pin || ""
        });
        this._closePinModal();
        await doExit();
      } catch (err) {
        const pinErr = this.shadowRoot.getElementById('pin-error');
        if (pinErr) {
          pinErr.textContent = '❌ PIN incorrecto o error de acceso';
          pinErr.style.color = '#ff4a4a';
        }
      }
    });
  }

  _requestKioskUnlock() {
    if (!this._kioskLocked) return;

    const kioskEntry = (this._dashboard?.entries || []).find(e => e && e.entry_id === this._kioskEntryId);
    const errEl = this.shadowRoot.getElementById('pin-error');

    // Fail closed if instance / entry_id cannot be resolved
    if (!kioskEntry || !kioskEntry.entry_id) {
      if (errEl) {
        errEl.textContent = 'Cannot resolve Argus instance';
        errEl.style.color = '#ff4a4a';
      }
      return;
    }

    const target = this._kioskTarget || this.shadowRoot.querySelector('.entry.ios-fullscreen') || this.shadowRoot.querySelector('.entry');

    const doExit = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      if (target) target.classList.remove('ios-fullscreen');
      this.shadowRoot.querySelectorAll('.entry.ios-fullscreen').forEach(el => el.classList.remove('ios-fullscreen'));
      this.classList.remove('fullscreen-active');
      this._fullscreenIdx = -1;
      this._kioskLocked = false;
      this._kioskEntryId = null;
      this._kioskTarget = null;
      document.body.style.overflow = '';
      this._renderEntries();
    };

    if (kioskEntry.pin_configured !== true) {
      doExit();
      return;
    }

    if (errEl) errEl.textContent = '';
    this._showPinModal(async (pin) => {
      try {
        await this._send('argus/verify_master_pin_for_screen_unlock', {
          entry_id: kioskEntry.entry_id,
          pin: pin || ""
        });
        this._closePinModal();
        doExit();
      } catch (err) {
        if (errEl) {
          errEl.textContent = err.message || this._t('pin_disarm_error');
          errEl.style.color = '#ff4a4a';
        }
      }
    });
  }

  _toggleFullscreen(targetEl) {
    if (this._kioskLocked) {
      this._requestKioskUnlock();
      return;
    }

    const target = targetEl || this.shadowRoot.querySelector('.entry');
    const fsBtn = target?.querySelector('.entry-fs');
    const idx = parseInt(fsBtn?.dataset?.fullscreen ?? 0);
    const validIdx = (isNaN(idx) || idx < 0) ? 0 : idx;
    const entry = this._dashboard?.entries?.[validIdx] || this._dashboard?.entries?.[0];

    this._kioskEntryId = entry?.entry_id || null;
    this._kioskTarget = target;
    // Fullscreen is a presentation action, not kiosk lock.  A kiosk lock
    // must be enabled explicitly; otherwise Esc must always leave fullscreen.
    this._kioskLocked = false;
    this._fullscreenIdx = validIdx;
    this.classList.add('fullscreen-active');

    const requestFS = target?.requestFullscreen || target?.webkitRequestFullscreen;
    if (requestFS) {
      requestFS.call(target).then(() => {
        document.body.style.overflow = 'hidden';
        this._renderEntries();
      }).catch(() => {
        if (target) target.classList.add('ios-fullscreen');
        document.body.style.overflow = 'hidden';
        this._renderEntries();
      });
    } else {
      if (target) target.classList.add('ios-fullscreen');
      document.body.style.overflow = 'hidden';
      this._renderEntries();
    }
  }

  _initWeatherWebGL(canvas) {
    if (!canvas || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' });
    if (!gl) return;
    const vertex = 'attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}';
    const fragment = `precision mediump float;varying vec2 uv;uniform float time,rain,snow,fog,storm;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
      float rainLayer(vec2 u,float t,float n){vec2 s=vec2(20.0+8.0*n,7.0+3.0*n);vec2 g=u*s;vec2 id=floor(g);vec2 q=fract(g);float sp=2.4+n*1.35+h(id)*1.2;q.y=fract(q.y+t*sp+h(id));float x=abs(q.x-(.54-q.y*.16));return (1.0-smoothstep(.003,.035-n*.006,x))*(1.0-smoothstep(.18,.98,q.y));}
      float snowLayer(vec2 u,float t){vec2 g=u*vec2(17.0,10.0);vec2 id=floor(g);vec2 q=fract(g);q.y=fract(q.y+t*(.23+h(id)*.34)+h(id));q.x+=sin(t+h(id)*6.28)*.14;return 1.0-smoothstep(.012,.075,length(q-vec2(.5)));}
      void main(){float t=time*.001;float r=rainLayer(uv,t,0.0)+rainLayer(uv,t,1.0)*.62+rainLayer(uv,t,2.0)*.34;float s=snowLayer(uv,t)+snowLayer(uv*1.6,t*.82)*.42;float mist=(sin(uv.y*33.0+t*.8)+sin(uv.y*18.0-t*.45))*0.025+0.045;float flash=step(.985,fract(t*.115))*storm*.42;vec3 col=vec3(.72,.88,1.0)*r*rain+vec3(1.0)*s*snow+vec3(.78,.88,.92)*mist*fog+vec3(1.0)*flash;float a=min(1.0,r*rain*.78+s*snow*.82+mist*fog+flash);gl_FragColor=vec4(col,a);}`;
    const compile = (type, source) => { const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader); return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null; };
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;
    const program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'p'); const uniform = key => gl.getUniformLocation(program, key);
    const values = { rain:Number(canvas.dataset.rain), snow:Number(canvas.dataset.snow), fog:Number(canvas.dataset.fog), storm:Number(canvas.dataset.storm) };
    let frame = 0, active = true;
    const draw = now => {
      if (!active || !canvas.isConnected) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5), width = Math.max(1, Math.round(canvas.clientWidth * ratio)), height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; gl.viewport(0, 0, width, height); }
      gl.useProgram(program); gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(uniform('time'), now); gl.uniform1f(uniform('rain'), values.rain); gl.uniform1f(uniform('snow'), values.snow); gl.uniform1f(uniform('fog'), values.fog); gl.uniform1f(uniform('storm'), values.storm); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(draw);
    };
    canvas._argusWebglStop = () => { active = false; cancelAnimationFrame(frame); gl.getExtension('WEBGL_lose_context')?.loseContext(); };
    canvas.closest('.wx-atmosphere')?.classList.add('webgl-active');
    frame = requestAnimationFrame(draw);
  }

  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _renderAtmosphere(ws, isNight) {
    const value = String(ws || '').toLowerCase();
    const has = term => value.includes(term);
    const storm = has('thunder') || has('lightning') || has('storm');
    const snow = has('snow') || has('hail') || has('sleet') || has('blizzard');
    const drizzle = has('drizzle') || has('shower');
    const rain = !drizzle && (has('rain') || has('pouring'));
    const fog = has('fog') || has('mist') || has('hazy');
    const clouds = has('cloud') || has('overcast') || has('partly') || rain || drizzle || storm || snow;
    const eclipse = this._eclipseEvent();
    const season = this._season();
    let sky = isNight ? ['#050a16', '#0b1930', '#14233a'] : ['#2e6e9e', '#79a9c7', '#c9d0ca'];
    if (storm) sky = isNight ? ['#05070e', '#101827', '#202b36'] : ['#293946', '#506573', '#83929a'];
    else if (rain || drizzle) sky = isNight ? ['#07111f', '#17283a', '#344556'] : ['#526878', '#879aa6', '#b8c1c2'];
    else if (snow) sky = isNight ? ['#101827', '#26384d', '#506271'] : ['#8ea0ad', '#c5d0d4', '#e5ebea'];
    else if (fog) sky = isNight ? ['#19212a', '#3b4750', '#627078'] : ['#aab7bd', '#d1dadd', '#e3e5e0'];
    else if (has('sunny')) sky = isNight ? sky : ['#0b4675', '#4c94bd', '#d4c99e'];
    const precip = snow ? 'snow' : (drizzle ? 'drizzle' : ((rain || storm) ? 'rain' : ''));
    const rainDrops = (precip === 'rain' || precip === 'drizzle') ? Array.from({ length: storm ? 56 : (precip === 'rain' ? 38 : 22) }, (_, index) => {
      const x = (index * 37) % 112 - 6;
      const height = 15 + (index % 5) * 8;
      const width = index % 7 === 0 ? 2 : 1;
      const opacity = 0.28 + (index % 6) * 0.1;
      const fall = 0.48 + (index % 5) * 0.11;
      const delay = -((index * 0.17) % 1.8);
      return `<span class="wx-rain-drop" style="--x:${x}%;--h:${height}px;--w:${width}px;--o:${opacity};--fall:${fall}s;--delay:${delay}s"></span>`;
    }).join('') : '';
    const celestial = isNight ? `<div class="wx-celestial wx-moon-real ${this._moonPhase()}" style="--moon-shadow:${sky[0]}"></div>` : (!clouds || has('partly') ? '<div class="wx-celestial wx-sun-real"></div>' : '');
    return `<div class="wx wx-atmosphere ${isNight ? 'night' : 'day'} ${eclipse ? `eclipse-${eclipse}` : ''}" style="--sky-top:${sky[0]};--sky-mid:${sky[1]};--sky-bottom:${sky[2]};--cloud-color:${storm ? 'rgba(17,25,35,.84)' : (isNight ? 'rgba(38,52,68,.76)' : 'rgba(235,241,242,.68)')};--cloud-opacity:${clouds ? '.8' : '0'}">
      <canvas class="wx-webgl" aria-hidden="true" data-rain="${rain || storm ? 1 : 0}" data-drizzle="${drizzle ? 1 : 0}" data-snow="${snow ? 1 : 0}" data-fog="${fog ? 1 : 0}" data-storm="${storm ? 1 : 0}"></canvas>${isNight ? '<div class="wx-starfield"></div>' : ''}${celestial}${clouds ? '<div class="wx-cloudfield"></div>' : ''}${precip ? `<div class="wx-precip ${precip}">${rainDrops}</div>` : ''}${storm ? '<div class="wx-lightning"></div>' : ''}${fog ? '<div class="wx-fog-real"></div>' : ''}${!rain && !drizzle && !storm && !snow && (season === 'spring' || season === 'autumn') ? `<div class="wx-seasonal ${season}"></div>` : ''}<div class="wx-horizon"></div>${this._renderEclipseOverlay(eclipse)}</div>`;
  }

  _getWeatherBg(ws, isNight) {
    return this._renderAtmosphere(ws, isNight);
  }


  /* ── Activity Log ────────────────────────────────────────────────── */
  _healthText() {
    const copy = {
      es:{title:'Centro de salud',healthy:'Sistema saludable',warning:'Requiere atención',critical:'Dispositivos sin conexión',devices:'dispositivos configurados',offline:'sin conexión',low:'baterías bajas',battery:'Batería',none:'No hay dispositivos seleccionados en los modos.',local:'Local-first activo',confirm:'Confirmación inteligente',help:'Requiere señales independientes dentro de una ventana. Humo, gas, CO y seguridad siempre disparan de inmediato.',save:'Guardar',saved:'Guardado'},
      en:{title:'Health center',healthy:'System healthy',warning:'Attention required',critical:'Devices offline',devices:'configured devices',offline:'offline',low:'low batteries',battery:'Battery',none:'No devices are selected in the modes.',local:'Local-first active',confirm:'Intelligent confirmation',help:'Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.',save:'Save',saved:'Saved'},
      fr:{title:'Centre de santé',healthy:'Système sain',warning:'Attention requise',critical:'Appareils hors ligne',devices:'appareils configurés',offline:'hors ligne',low:'batteries faibles',battery:'Batterie',none:'Aucun appareil n\u2019est sélectionné dans les modes.',local:'Local-first actif',confirm:'Confirmation intelligente',help:'Exige des signaux indépendants. Fumée, gaz, CO et sécurité déclenchent toujours immédiatement.',save:'Enregistrer',saved:'Enregistré'},
      pt:{title:'Centro de saúde',healthy:'Sistema saudável',warning:'Requer atenção',critical:'Dispositivos offline',devices:'dispositivos configurados',offline:'offline',low:'baterias fracas',battery:'Bateria',none:'Nenhum dispositivo foi selecionado nos modos.',local:'Local-first ativo',confirm:'Confirmação inteligente',help:'Exige sinais independentes. Fumaça, gás, CO e segurança sempre disparam imediatamente.',save:'Salvar',saved:'Salvo'},
      it:{title:'Centro salute',healthy:'Sistema integro',warning:'Richiede attenzione',critical:'Dispositivi offline',devices:'dispositivi configurati',offline:'offline',low:'batterie scariche',battery:'Batteria',none:'Nessun dispositivo è selezionato nelle modalità.',local:'Local-first attivo',confirm:'Conferma intelligente',help:'Richiede segnali indipendenti. Fumo, gas, CO e sicurezza scattano sempre subito.',save:'Salva',saved:'Salvato'},
      zh:{title:'健康中心',healthy:'系统健康',warning:'需要注意',critical:'设备离线',devices:'已配置设备',offline:'离线',low:'低电量',battery:'电池',none:'模式中未选择设备。',local:'本地优先已启用',confirm:'智能确认',help:'需要在时间窗口内收到独立信号。烟雾、燃气、一氧化碳和安全传感器始终立即触发。',save:'保存',saved:'已保存'},
      ru:{title:'Центр здоровья',healthy:'Система исправна',warning:'Требуется внимание',critical:'Устройства не в сети',devices:'настроенных устройств',offline:'не в сети',low:'низкий заряд',battery:'Батарея',none:'В режимах не выбраны устройства.',local:'Local-first активен',confirm:'Умное подтверждение',help:'Требует независимых сигналов. Дым, газ, CO и безопасность всегда срабатывают сразу.',save:'Сохранить',saved:'Сохранено'},
    };
    return copy[this._getCurrentLangCode()] || copy.en;
  }

  _renderHealthCenter() {
    const text = this._healthText();
    const title = this.shadowRoot.getElementById('h-health-title');
    const badge = this.shadowRoot.getElementById('health-local-badge');
    const el = this.shadowRoot.getElementById('health-center');
    if (title) title.textContent = text.title;
    if (badge) badge.textContent = text.local;
    const policy = this._ui?.intelligent_confirmation || {enabled:false,window_seconds:15,required_signals:2};
    const enabled = this.shadowRoot.getElementById('confirm-enabled');
    const signals = this.shadowRoot.getElementById('confirm-signals');
    const windowSelect = this.shadowRoot.getElementById('confirm-window');
    if (enabled) enabled.checked = Boolean(policy.enabled);
    if (signals) signals.value = String(policy.required_signals || 2);
    if (windowSelect) windowSelect.value = String(policy.window_seconds || 15);
    const label = this.shadowRoot.getElementById('confirm-label'); if (label) label.textContent = text.confirm;
    const help = this.shadowRoot.getElementById('confirm-help'); if (help) help.textContent = text.help;
    const save = this.shadowRoot.getElementById('btn-save-confirmation'); if (save && save.dataset.saved !== '1') save.textContent = text.save;
    this._renderStateSchedule();
    if (!el) return;
    const health = this._systemHealth;
    if (!health) { el.innerHTML = `<div class="small" style="opacity:.6">${this._escapeHtml(text.none)}</div>`; return; }
    const batteries = Array.isArray(health.batteries) ? health.batteries : [];
    const low = batteries.filter(item => item.low);
    const offline = Array.isArray(health.unavailable) ? health.unavailable : [];
    const devices = Array.isArray(health.configured_devices) ? health.configured_devices : [];
    const statusText = health.status === 'critical' ? text.critical : health.status === 'warning' ? text.warning : text.healthy;
    const batteriesByEntity = new Map(batteries.map(item => [item.entity_id, item]));
    const details = devices.map(item => {
      const battery = batteriesByEntity.get(item.entity_id);
      const isOffline = item.state === 'unknown' || item.state === 'unavailable';
      const facts = [isOffline ? text.offline : item.state];
      if (battery?.value !== null && battery?.value !== undefined) facts.push(`${battery.value}${battery.unit || '%'}`);
      return {name:item.name, value:facts.join(' · '), alert:isOffline || Boolean(battery?.low)};
    });
    el.innerHTML = `<div class="health-summary">
      <div class="health-score" style="--score:${Number(health.score)||0}" aria-label="${Number(health.score)||0}%">${Number(health.score)||0}</div>
      <div><div style="font-weight:850">${this._escapeHtml(statusText)}</div><div class="small" style="opacity:.6;margin-top:3px">${devices.length} ${this._escapeHtml(text.devices)}</div></div>
    </div><div class="health-metrics">
      <div class="health-metric"><strong>${offline.length}</strong><span>${this._escapeHtml(text.offline)}</span></div>
      <div class="health-metric"><strong>${low.length}</strong><span>${this._escapeHtml(text.low)}</span></div>
      <div class="health-metric"><strong>${batteries.length}</strong><span>${this._escapeHtml(text.battery)}</span></div>
    </div><div class="health-list" style="margin-top:13px">${details.length ? details.map(item => `<div class="health-row"><span>${this._escapeHtml(item.name)}</span><strong style="color:${item.alert?'#ff8a80':'inherit'}">${this._escapeHtml(item.value)}</strong></div>`).join('') : `<div class="small" style="opacity:.55">${this._escapeHtml(text.none)}</div>`}</div>`;
  }

  async _saveIntelligentConfirmation() {
    const config = {
      enabled:Boolean(this.shadowRoot.getElementById('confirm-enabled')?.checked),
      required_signals:Number(this.shadowRoot.getElementById('confirm-signals')?.value || 2),
      window_seconds:Number(this.shadowRoot.getElementById('confirm-window')?.value || 15),
    };
    try {
      await this._send('argus/save_ui', {intelligent_confirmation:config});
      this._ui.intelligent_confirmation = config;
      const button = this.shadowRoot.getElementById('btn-save-confirmation');
      if (button) { button.textContent = `✓ ${this._healthText().saved}`; button.dataset.saved = '1'; setTimeout(() => { button.dataset.saved='0'; button.textContent=this._healthText().save; }, 1600); }
    } catch (err) { alert(this._format('generic_error', {error:err.message})); }
  }

  _scheduleText() {
    const copy = {
      es:{title:'Horarios locales de estado',all:'Todos los días',weekdays:'Lunes a viernes',weekend:'Fin de semana',empty:'Sin horarios. Argus conservará el último estado confirmado.',disarmed:'Desarmado',home:'En casa',away:'Ausente',night:'Noche',vacation:'Vacaciones'},
      en:{title:'Local state schedules',all:'Every day',weekdays:'Monday to Friday',weekend:'Weekend',empty:'No schedules. Argus will preserve the last confirmed state.',disarmed:'Disarmed',home:'Home',away:'Away',night:'Night',vacation:'Vacation'},
      fr:{title:'Horaires d\u2019état locaux',all:'Tous les jours',weekdays:'Lundi à vendredi',weekend:'Week-end',empty:'Aucun horaire. Argus conservera le dernier état confirmé.',disarmed:'Désarmé',home:'Maison',away:'Absent',night:'Nuit',vacation:'Vacances'},
      pt:{title:'Horários locais de estado',all:'Todos os dias',weekdays:'Segunda a sexta',weekend:'Fim de semana',empty:'Sem horários. Argus preservará o último estado confirmado.',disarmed:'Desarmado',home:'Em casa',away:'Ausente',night:'Noite',vacation:'Férias'},
      it:{title:'Programmi locali di stato',all:'Ogni giorno',weekdays:'Da lunedì a venerdì',weekend:'Fine settimana',empty:'Nessun programma. Argus manterrà l\u2019ultimo stato confermato.',disarmed:'Disarmato',home:'Casa',away:'Assente',night:'Notte',vacation:'Vacanza'},
      zh:{title:'本地状态计划',all:'每天',weekdays:'周一至周五',weekend:'周末',empty:'没有计划。Argus 将保留最后确认的状态。',disarmed:'撤防',home:'在家',away:'外出',night:'夜间',vacation:'度假'},
      ru:{title:'Локальное расписание состояния',all:'Каждый день',weekdays:'Понедельник–пятница',weekend:'Выходные',empty:'Расписания нет. Argus сохранит последнее подтверждённое состояние.',disarmed:'Снято',home:'Дома',away:'Нет дома',night:'Ночь',vacation:'Отпуск'},
    };
    return copy[this._getCurrentLangCode()] || copy.en;
  }

  _renderStateSchedule() {
    const text = this._scheduleText();
    const title = this.shadowRoot.getElementById('schedule-title'); if (title) title.textContent = text.title;
    const stateSelect = this.shadowRoot.getElementById('schedule-state');
    const daysSelect = this.shadowRoot.getElementById('schedule-days');
    if (stateSelect) {
      const current = stateSelect.value;
      stateSelect.innerHTML = `<option value="disarmed">${text.disarmed}</option><option value="armed_home">${text.home}</option><option value="armed_away">${text.away}</option><option value="armed_night">${text.night}</option><option value="armed_vacation">${text.vacation}</option>`;
      stateSelect.value = current || 'armed_night';
    }
    if (daysSelect) {
      const current = daysSelect.value;
      daysSelect.innerHTML = `<option value="all">${text.all}</option><option value="weekdays">${text.weekdays}</option><option value="weekend">${text.weekend}</option>`;
      daysSelect.value = current || 'all';
    }
    const list = this.shadowRoot.getElementById('schedule-list'); if (!list) return;
    const schedules = Array.isArray(this._ui?.state_schedule) ? this._ui.state_schedule : [];
    const deleteLabel = {es:'Eliminar horario',en:'Delete schedule',fr:'Supprimer l\u2019horaire',pt:'Excluir horário',it:'Elimina programma',zh:'删除计划',ru:'Удалить расписание'}[this._getCurrentLangCode()] || 'Delete schedule';
    const labelForState = state => ({disarmed:text.disarmed,armed_home:text.home,armed_away:text.away,armed_night:text.night,armed_vacation:text.vacation}[state] || state);
    const labelForDays = days => days?.length === 2 ? text.weekend : days?.length === 5 ? text.weekdays : text.all;
    list.innerHTML = schedules.length ? schedules.map(item => `<div class="schedule-row"><span><strong>${this._escapeHtml(item.time || '')}</strong> · ${this._escapeHtml(labelForState(item.state))} · ${this._escapeHtml(labelForDays(item.days))}</span><button class="ghost" data-schedule-delete="${this._escapeHtml(item.id)}" aria-label="${this._escapeHtml(deleteLabel)}">×</button></div>`).join('') : `<div class="small" style="opacity:.55">${this._escapeHtml(text.empty)}</div>`;
    list.querySelectorAll('[data-schedule-delete]').forEach(button => button.addEventListener('click', () => this._deleteStateSchedule(button.dataset.scheduleDelete)));
  }

  async _addStateSchedule() {
    const state = this.shadowRoot.getElementById('schedule-state')?.value;
    const time = this.shadowRoot.getElementById('schedule-time')?.value;
    const dayPreset = this.shadowRoot.getElementById('schedule-days')?.value || 'all';
    if (!state || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time || '')) return;
    const days = dayPreset === 'weekdays' ? [0,1,2,3,4] : dayPreset === 'weekend' ? [5,6] : [0,1,2,3,4,5,6];
    const schedules = Array.isArray(this._ui?.state_schedule) ? [...this._ui.state_schedule] : [];
    schedules.push({id:`schedule_${Date.now()}`,state,time,days,enabled:true});
    await this._saveStateSchedule(schedules);
  }

  async _deleteStateSchedule(id) {
    const schedules = (this._ui?.state_schedule || []).filter(item => item.id !== id);
    await this._saveStateSchedule(schedules);
  }

  async _saveStateSchedule(schedules) {
    try {
      await this._send('argus/save_ui', {state_schedule:schedules});
      this._ui.state_schedule = schedules;
      this._renderStateSchedule();
    } catch (err) { alert(this._format('generic_error', {error:err.message})); }
  }

  _localizeActivityDetail(action, rawDetail) {
    const raw = String(rawDetail || '').trim();
    const normalized = raw.toLocaleLowerCase();
    const modes = {
      home: ['en casa', 'home', 'casa', 'maison', 'em casa', 'дом', '在家'],
      away: ['ausente', 'away', 'absent', 'fora', 'fuori', 'ушёл', '外出'],
      night: ['noche', 'night', 'nuit', 'noite', 'notte', 'ночь', '夜间'],
      vacation: ['vacaciones', 'vacation', 'vacances', 'férias', 'vacanza', 'отпуск', '度假'],
    };
    const findMode = () => {
      return Object.entries(modes).find(([, terms]) => terms.some(term => normalized.includes(term)))?.[0];
    };
    const mode = findMode();

    if (action === 'pin_reset') return this._t('log_detail_pin_reset');
    if (action === 'pin_reset_failed') return this._t('log_detail_pin_reset_failed');
    if (action === 'state_restored') {
      const stateMap = {
        disarmed: this._t('disarmed'), armed_home: this._t('mode_home'), armed_away: this._t('mode_away'),
        armed_night: this._t('mode_night'), armed_vacation: this._t('mode_vacation'), triggered: this._t('log_triggered'),
      };
      const translated = raw.replace(/\b(disarmed|armed_home|armed_away|armed_night|armed_vacation|triggered)\b/gi,
        m => stateMap[m.toLowerCase()] || m);
      return translated || this._t('log_action_state_restored');
    }
    if (action === 'confirmation_pending') return raw;
    if (action === 'disarmed' || action === 'disarm') return this._t('log_detail_disarm');
    if (action === 'armed' || action === 'arm') {
      return mode ? `${this._t('manual_arm')} (${this._t(`mode_${mode}`)})` : this._t('manual_arm');
    }
    if (action === 'triggered') {
      const modeMatch = raw.match(/\((?:modo|mode|modalità|режим|模式)\s*:?\s*([^)]+)\)/i);
      let displayMode = '';
      if (modeMatch && modeMatch[1]) {
        const mStr = modeMatch[1].toLowerCase();
        const modeKey = Object.entries(modes).find(([, terms]) => terms.some(t => mStr.includes(t)))?.[0];
        displayMode = modeKey ? this._t(`mode_${modeKey}`) : modeMatch[1];
      }
      const sensor = raw.match(/(?:sensor|capteur|sensore|датчик|传感器)\s*:\s*(.+)$/i)?.[1]
        ?.replace(/\s*\((?:modo|mode|modalità|режим|模式)\s*:?[^)]*\)\s*$/i, '')?.trim();

      let msg = sensor ? `${this._t('log_sensor')}: ${sensor}` : this._t('log_detail_triggered');
      if (displayMode) msg += ` (${this._t('log_mode')}: ${displayMode})`;
      return msg;
    }
    if (action === 'user_added') return this._t('log_action_user_added');
    if (action === 'user_deleted') return this._t('log_action_user_deleted');
    if (action === 'sos') return this._t('log_action_sos');
    if (action === 'sos_stopped' || action === 'panic_stopped') return this._t('log_action_sos_stopped');
    if (action.startsWith('auto_') || action === 'automation_executed') return this._t('log_action_automation');
    if (action.startsWith('ai_')) return this._t('log_action_analysis');
    if (action.includes('rejected')) return this._t('log_action_rejected');
    if (action === 'ui_configuration_updated') return this._t('settings');
    if (action === 'user_logged_in') return this._t('log_action_user_logged_in');
    if (action === 'profile_selected') return this._t('log_action_profile_selected');
    if (action === 'schedule_applied') return this._t('log_action_schedule_applied');
    if (action === 'mode_changed') return this._t('log_action_mode_changed');
    if (action === 'audit_log_cleared') return this._t('history_refresh');
    if (action.includes('pin_updated') || action.includes('access_pin_updated')) return this._t('update_pin');
    const lowerAction = String(action).toLowerCase();
    const tKey = `log_action_${lowerAction}`;
    const tVal = this._t(tKey);
    if (tVal !== tKey) return tVal;
    return raw;
  }

  _renderActivityLog() {
    const titleEl = this.shadowRoot.getElementById('h-activity-log');
    const el = this.shadowRoot.getElementById('activity-log');
    if (!el) return;
    if (titleEl) titleEl.textContent = this._t('activity_log');

    try {
      const log = Array.isArray(this._ui?.audit_log)
        ? this._ui.audit_log.filter(entry => entry && typeof entry === 'object' && !Array.isArray(entry))
        : [];
      if (!log.length) {
        const message = this._activityTimelineError
          ? this._t('history_unavailable')
          : this._t('log_no_events');
        el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(message)}</div>`;
        return;
      }

      const panel = el.closest('.panel');
      const isSmall = panel && panel.getAttribute('data-size') === 'S';
      el.innerHTML = log.slice(0, isSmall ? 1 : 30).map(ev => {
        const action = String(ev.action || '');
        const rawDetail = String(ev.detail || '');
        const user   = String(ev.user || ev.actor || '');
        const date = ev.ts ? new Date(ev.ts) : null;
        let ts = '';
        if (date && !Number.isNaN(date.getTime())) {
          try {
            ts = date.toLocaleString(this._getLocale());
          } catch (e) {
            ts = date.toISOString();
          }
        }

        const detail = this._localizeActivityDetail(action, rawDetail);

        let icon = '<div class="glass-orb"></div>', badgeCls = '', badgeTxt = action, itemCls = '';
        if (action.endsWith('_rejected')) {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('log_action_rejected');
        } else if (action.includes('arm') && !action.includes('disarm')) {
          itemCls = 'log-item--armed'; badgeCls = 'arm'; badgeTxt = this._t('log_armed');
        } else if (action.includes('disarm')) {
          itemCls = 'log-item--disarmed'; badgeCls = 'disarm'; badgeTxt = this._t('log_disarmed');
        } else if (action.includes('trigger') || action.includes('alarm')) {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('log_triggered');
        } else if (action === 'pin_reset') {
          itemCls = 'log-item--disarmed'; badgeCls = 'disarm'; badgeTxt = this._t('badge_pin_reset');
        } else if (action === 'pin_reset_failed') {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('badge_pin_reset_failed');
        } else if (action === 'sos' || action === 'sos_stopped' || action === 'panic_stopped') {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('log_action_sos');
        } else {
          const tKey = `log_action_${action}`;
          const tVal = this._t(tKey);
          badgeTxt = tVal !== tKey ? tVal : (this._t(action) !== action ? this._t(action) : action);
        }

        let source = '';
        if (user && user !== 'Argus' && user !== 'system') {
          source = `👤 ${user}`;
        } else if (action.toLowerCase().includes('homekit') || detail.toLowerCase().includes('homekit')) {
          source = `🍎 HomeKit`;
        } else {
          source = `🤖 Argus`;
        }

        return `<div class="log-item ${itemCls}">
          <div class="log-icon">${icon}</div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${badgeCls}">${this._escapeHtml(badgeTxt)}</span>
              <span style="font-weight:500">${this._escapeHtml(detail)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(ts)} &nbsp;·&nbsp; ${this._escapeHtml(source)}</div>
          </div>
        </div>`;
      }).join('');
    } catch (err) {
      console.error('Argus activity log render failed:', err);
      el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('log_no_events')}</div>`;
    }
  }

  /* ── Modes ───────────────────────────────────────────────────────── */
  _renderModeTabs() {
    const tabs = this.shadowRoot.getElementById('mode-tabs');
    if (!tabs) return;
    const modes = ['disarmed', 'home', 'away', 'night', 'vacation'];
    const icons = { disarmed:'🔓', home:'🏠', away:'🔴', night:'🌙', vacation:'✈️' };
    const lbls  = {
      disarmed: this._t('disarmed'),
      home:     this._t('mode_home'),
      away:     this._t('mode_away'),
      night:    this._t('mode_night'),
      vacation: this._t('mode_vacation'),
    };

    let bubble = tabs.querySelector('.tab-bubble');
    // A frontend resource update can leave an existing custom element with a
    // stale, partial tab DOM (only the visual bubble). Rebuild it whenever
    // its five mode controls are not all present.
    if (!bubble || tabs.querySelectorAll('[data-mode]').length !== modes.length) {
      tabs.className = 'tabs';
      tabs.innerHTML = `
        <div class="tab-bubble"></div>
        ${modes.map(m => `
          <button type="button" class="tab" data-mode="${m}">
            <span class="tab-icon" style="font-size: 20px;">${icons[m]}</span>
            <span class="tab-label">${lbls[m]}</span>
          </button>
        `).join('')}
      `;
      bubble = tabs.querySelector('.tab-bubble');

      tabs.querySelectorAll('[data-mode]').forEach(t => t.addEventListener('click', () => {
        this._mode = t.dataset.mode;
        this._renderModeTabs();
        this._renderModeView();
      }));
    } else {
      modes.forEach(m => {
        const btn = tabs.querySelector(`[data-mode="${m}"]`);
        if (btn) {
          const iconSpan = btn.querySelector('.tab-icon');
          const labelSpan = btn.querySelector('.tab-label');
          if (iconSpan) iconSpan.textContent = icons[m];
          if (labelSpan) labelSpan.textContent = lbls[m];
        }
      });
    }

    const buttons = tabs.querySelectorAll('.tab');
    let activeBtn = null;
    buttons.forEach(btn => {
      if (btn.dataset.mode === this._mode) {
        btn.classList.add('active');
        activeBtn = btn;
      } else {
        btn.classList.remove('active');
      }
    });

    if (bubble && activeBtn) {
      bubble.className = `tab-bubble bubble-${this._mode}`;
      requestAnimationFrame(() => {
        const left = activeBtn.offsetLeft;
        const width = activeBtn.offsetWidth;
        bubble.style.transform = `translate3d(${left}px, 0, 0) scaleX(${width / 100})`;
        bubble.style.width = '100px';
        bubble.style.left = '0';
      });
    }
  }

  _currentModeConfig() {
    const emptyCfg = {
      sensors: [], bypassed_sensors: [], sirens: [],
      require_closed: false, arming_time: null, entry_delay: null,
      mqtt_enabled: null, entry_sensors: []
    };
    if (!this._ui || typeof this._ui !== 'object' || Array.isArray(this._ui)) {
      this._ui = { modes: {}, dashboard: {} };
    }

    if (!this._ui.modes || typeof this._ui.modes !== 'object' || Array.isArray(this._ui.modes)) {
      this._ui.modes = {};
    }
    if (!this._ui.modes.__by_entity__ || typeof this._ui.modes.__by_entity__ !== 'object' || Array.isArray(this._ui.modes.__by_entity__)) {
      this._ui.modes.__by_entity__ = {};
    }

    let entityId = this._modeEntryId;
    if (!entityId || entityId === 'default') {
      entityId = this._dashboard?.entries?.[0]?.entity_id || 'default';
    }
    this._modeEntryId = entityId;
    this._mode = this._mode || 'disarmed';

    if (!this._ui.modes.__by_entity__[entityId] || typeof this._ui.modes.__by_entity__[entityId] !== 'object' || Array.isArray(this._ui.modes.__by_entity__[entityId])) {
      this._ui.modes.__by_entity__[entityId] = {};
    }

    // Migration/Ensure valid
    if (!this._ui.modes.__by_entity__[entityId][this._mode] || typeof this._ui.modes.__by_entity__[entityId][this._mode] !== 'object' || Array.isArray(this._ui.modes.__by_entity__[entityId][this._mode])) {
        let legacy = {};
        if (this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] === 'object' && !Array.isArray(this._ui.modes[this._mode])) {
          legacy = this._ui.modes[this._mode];
        }
        this._ui.modes.__by_entity__[entityId][this._mode] = { ...emptyCfg, ...legacy };
    }

    const savedCfg = this._ui.modes.__by_entity__[entityId][this._mode];
    const cfg = savedCfg && typeof savedCfg === 'object' && !Array.isArray(savedCfg) ? savedCfg : emptyCfg;
    // Older stored UI data may contain a missing or malformed collection.
    // Never allow that to abort rendering the entire Modes section.
    return {
      ...emptyCfg,
      ...cfg,
      sensors: Array.isArray(cfg?.sensors) ? cfg.sensors : [],
      bypassed_sensors: Array.isArray(cfg?.bypassed_sensors) ? cfg.bypassed_sensors : [],
      sirens: Array.isArray(cfg?.sirens) ? cfg.sirens : [],
      entry_sensors: Array.isArray(cfg?.entry_sensors) ? cfg.entry_sensors : [],
      require_closed: typeof cfg?.require_closed === 'boolean' ? cfg.require_closed : false,
      arming_time: (cfg?.arming_time !== undefined && cfg?.arming_time !== null) ? cfg.arming_time : null,
      entry_delay: (cfg?.entry_delay !== undefined && cfg?.entry_delay !== null) ? cfg.entry_delay : null,
      mqtt_enabled: (cfg?.mqtt_enabled !== undefined && cfg?.mqtt_enabled !== null) ? cfg.mqtt_enabled : null,
    };
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
    if (el) {
      el.classList.remove('bounce-in');
      void el.offsetWidth; // force reflow
      el.classList.add('bounce-in');
    }
    const readonly = !this._isAdmin;
    const entries = this._dashboard?.entries || [];
    const activeEntityId = this._modeEntryId || entries[0]?.entity_id || '';

    const instanceBlock = entries.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">${this._t('alarm_instance')}</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${entries.map(e => `<option value="${this._escapeHtml(e.entity_id)}" ${e.entity_id===activeEntityId ? 'selected' : ''}>${this._escapeHtml(e.title || e.entity_id)}</option>`).join('')}</select>
        </div>` : '';

    el.innerHTML = `
      <div class="mode-grid-layout">
        ${instanceBlock}

        <div class="mode-section-card">
          <div class="mode-section-title">🛡️ ${this._t('sensor_section')}</div>
          <div class="mode-sensor-grid" id="sensor-chips">
            ${sensors.map(x => this._chip(x, 'sensor')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `
            <button class="ghost" data-open-selector="sensor" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t('select_btn')}</button>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-require-closed" ${cfg.require_closed ? 'checked' : ''}>
              <span style="font-size:12px;font-weight:600">${this._t('lock_if_open')}</span>
            </label>
          `}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t('bypass_lbl')}</div>
          <div class="mode-sensor-grid" id="bypass-chips">
            ${bypass.map(x => this._chip(x, 'bypass')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `<button class="ghost" data-open-selector="bypass" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t('add_btn')}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 ${this._t('siren_section')}</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${sirens.map(x => this._chip(x, 'siren')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t('select_btn')}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t('times_section')}</div>
          <div class="times-grid">
            <div class="input-group time-field">
              <span class="input-label">${this._t('arm_time')}</span>
              <input type="number" id="mode-arming-time" value="${cfg.arming_time ?? ''}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
            <div class="input-group time-field">
              <span class="input-label">${this._t('disarm_time')}</span>
              <input type="number" id="mode-entry-delay" value="${cfg.entry_delay ?? ''}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
          </div>
          <div class="mode-sensor-grid entry-sensor-list">
            ${(cfg.entry_sensors || []).map(x => this._chip(x, 'entry')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `<button class="ghost" data-open-selector="entry" style="margin-top:10px;width:100%;justify-content:center;font-size:12px">${this._t('select_entry_sensors')}</button>`}
          <label class="checkbox-label mode-mqtt-row">
            <input type="checkbox" id="mode-mqtt-enabled" ${cfg.mqtt_enabled === true ? 'checked' : ''}>
            <span style="font-size:12px;font-weight:600">${this._t('mqtt_label')}</span>
          </label>
        </div>
      </div>
      ${readonly ? '' : `<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;"><button class="primary" id="save-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2)">${this._t('save_config')}</button><span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span></div>`}
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
    const name = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
    const readonly = !this._isAdmin;

    const dot = type === 'sensor' || type === 'bypass'
    ? `<span class="pill-dot ${isTr ? 'open' : ''}" title="${raw}"></span>`
    : '';

    let stateLabel = '';
    let powerHtml = '';
    if (type === 'sensor' || type === 'bypass' || type === 'entry') {
      const stateObj = this._hass?.states?.[entityId];
      const power = this._getDevicePower(entityId, stateObj);
      stateLabel = `<span class="pill-status">${isTr ? this._t('status_open') : this._t('status_closed')}</span>`;
      powerHtml = `${power.mains ? '<span class="pill-power">🔌 AC</span>' : ''}${power.battery !== null ? `<span class="pill-power">🔋 ${power.battery}%</span>` : ''}`;
    }

    const alarmTriggered = this._dashboard?.entries?.some(en =>
    this._hass?.states?.[en.entity_id]?.state === 'triggered'
    );
    let pillExtra = '';
    if (type === 'siren' && alarmTriggered) pillExtra = ' siren-active';
    if ((type === 'sensor' || type === 'bypass' || type === 'entry') && alarmTriggered && isTr) pillExtra = ' triggered-sensor';

    return `
      <span class="sensor-pill${pillExtra}">
        ${dot}
        <span class="pill-content">
          <span class="pill-name">${this._escapeHtml(name)}</span>
          ${stateLabel}
          ${powerHtml}
        </span>
        ${readonly ? '' : `<button data-remove="${type}:${entityId}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
  }

  _removeChip(value) {
    if (!this._isAdmin) return;
    const [type, entityId] = value.split(':');
    const cfg = this._currentModeConfig();
    const key = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : (type === 'entry' ? 'entry_sensors' : 'sirens'));
    let eId = this._modeEntryId;
    if (!eId || eId === 'default') {
      eId = this._dashboard?.entries?.[0]?.entity_id || 'default';
    }
    this._modeEntryId = eId;
    this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
    this._ui.modes.__by_entity__[eId] = this._ui.modes.__by_entity__[eId] || {};
    this._ui.modes.__by_entity__[eId][this._mode] = { ...cfg, [key]: (cfg[key] || []).filter(v => v !== entityId) };
    this._renderModeView();
  }

  async _saveMode() {
    const cfg = this._currentModeConfig();
    const chk      = this.shadowRoot.getElementById('mode-require-closed');
    const armTime  = this.shadowRoot.getElementById('mode-arming-time');
    const entDelay = this.shadowRoot.getElementById('mode-entry-delay');
    const mqttChk  = this.shadowRoot.getElementById('mode-mqtt-enabled');

    if (chk)      cfg.require_closed = chk.checked;
    if (armTime)  cfg.arming_time  = armTime.value  ? parseInt(armTime.value)  : 0;
    if (entDelay) cfg.entry_delay  = entDelay.value ? parseInt(entDelay.value) : 0;
    if (mqttChk)  cfg.mqtt_enabled = mqttChk.checked;

    this._runWithPin(async () => {
      const _eid = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || 'default';
      this._ui.modes = this._ui.modes || {};
      this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {};
      this._ui.modes.__by_entity__[_eid] = this._ui.modes.__by_entity__[_eid] || {};
      this._ui.modes.__by_entity__[_eid][this._mode] = { ...cfg };

      const status = this.shadowRoot.getElementById('mode-status');
      if (status) { status.textContent = '…'; status.className = 'status'; }
      try {
        await this._send('argus/save_mode_config', {
          entity_id: _eid,
          mode: this._mode,
          config: cfg,
        });
        if (status) { status.textContent = this._t('saved'); status.className = 'status ok show'; }
        setTimeout(() => { if (status) { status.textContent = ''; status.className = 'status'; } }, 3000);
      } catch (err) {
        if (status) { status.textContent = '✗ ' + (err.message || this._t('generic_error').replace(': {error}', '')); status.className = 'status err show'; }
      }
    });
  }

  /* ── Automations ─────────────────────────────────────────────────── */
  _renderAutomations() {
    const el = this.shadowRoot.getElementById('auto-view');
    if (!el) return;
    if (!this._dashboard?.entries?.length || !this._hass) {
      el.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t('searching_auto')}</div>`;
      return;
    }

    try {
      if (!this._relatedAutomationsQueried) {
          this._relatedAutomationsQueried = true;
          this._cachedRelatedAutomations = new Set();
          (async () => {
              try {
                  let relatedSets = [];
                  for (const e of this._dashboard.entries) {
                      const res = await this._hass.callWS({ type: 'search/related', item_type: 'entity', item_id: e.entity_id });
                      if (res) {
                          if (res.automation) relatedSets.push(...res.automation);
                          if (res.device && res.device.length) {
                              for (const d of res.device) {
                                  const resDev = await this._hass.callWS({ type: 'search/related', item_type: 'device', item_id: d });
                                  if (resDev && resDev.automation) relatedSets.push(...resDev.automation);
                              }
                          }
                      }
                  }
                  this._cachedRelatedAutomations = new Set(relatedSets);
              } catch (err) {
                  this._cachedRelatedAutomations = new Set();
              } finally {
                  this._relatedAutomationsFetched = true;
                  this._renderAutomations(); // Re-render when data is ready
              }
          })();
          el.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t('searching_auto')}</div>`;
          return;
      }

      if (!this._relatedAutomationsFetched) return;

      const states = this._hass.states || {};
      const items = Object.values(states).filter(s => {
        if (!s || !s.entity_id || !s.entity_id.startsWith('automation.')) return false;
        const name = (s.attributes?.friendly_name || '').toLowerCase();
        return this._cachedRelatedAutomations.has(s.entity_id) || name.includes('argus') || s.entity_id.toLowerCase().includes('argus');
      });

      if (!items.length) {
        el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('no_auto_linked')}</div>`;
        return;
      }

      const panel = el.closest('.panel');
      const isSmall = panel && panel.getAttribute('data-size') === 'S';
      const visibleItems = items.slice(0, isSmall ? 1 : 15);
      el.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${visibleItems.map(a => {
        const editId = a.attributes?.id || a.entity_id.replace('automation.', '');
        const lastTriggered = a.attributes?.last_triggered ? new Date(a.attributes.last_triggered).toLocaleString(this._getLocale()) : this._t('never_triggered');
        const subtext = isSmall ? '' : `<div class="small" style="opacity:0.7;margin-top:4px">${this._escapeHtml(lastTriggered)}</div>`;
        return `
        <div class="list-item-card">
          <div>
            <div style="font-weight:700">${this._escapeHtml(a.attributes?.friendly_name || a.entity_id)}</div>
            ${subtext}
          </div>
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(editId)}">✏️</button>
        </div>`;
      }).join('')}</div>`;

      el.querySelectorAll('[data-edit-auto]').forEach(btn => btn.addEventListener('click', () => {
        history.pushState(null, '', `/config/automation/edit/${btn.dataset.editAuto}`);
        window.dispatchEvent(new CustomEvent('location-changed'));
      }));
    } catch (err) {
      console.error('Argus automations render failed:', err);
      el.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t('no_auto_linked')}</div>`;
    }
  }

  /* ── Notifications ───────────────────────────────────────────────── */
  _populateNotifSelect() {
    const sel = this.shadowRoot.getElementById('notif-select');
    if (!sel) return;
    const services = this._hass?.services?.notify || {};

    let opts = Object.keys(services).filter(k => k !== 'notify' && !k.includes('persistent_notification') && !this._notifTargets.includes(k));

    sel.innerHTML = opts.length
      ? opts.map(k => {
          let label = k;
          if (k.startsWith('mobile_app')) label = "📱 " + k.replace('mobile_app_', '').replace(/_/g, ' ');
          else label = "🔔 " + label.replace(/_/g, ' ');
          return `<option value="${this._escapeHtml(k)}">${this._escapeHtml(label)}</option>`;
        }).join('')
      : `<option value="">— ${this._escapeHtml(this._t('notif_no_services'))} —</option>`;
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
      <span class="notif-chip">📱 ${this._escapeHtml(t.replace(/_/g,' '))}
        <button data-notif-remove="${this._escapeHtml(t)}">✕</button>
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
    return;
  }

  async _saveNotifications() {
    const status = this.shadowRoot.getElementById('notif-status');
    this._runWithPin(async () => {
      try {
        await this._send('argus/save_ui', {
          notif_targets: this._notifTargets,
        });
        if (status) { status.textContent = '✓'; status.className = 'status ok'; }
      } catch (e) {
        if (status) { status.textContent = e.message; status.className = 'status err'; }
        else { alert(this._format('generic_error', { error: e.message })); }
      }
    });
  }

  /* ── Users ───────────────────────────────────────────────────────── */
  _renderUsers() {
    const el = this.shadowRoot.getElementById('users-list');
    if (!el) return;

    const adminOnlyText = this.shadowRoot.getElementById('p-admin-only');
    if (adminOnlyText) {
      adminOnlyText.style.display = this._isAdmin ? 'none' : 'block';
    }

    try {
      const users = Array.isArray(this._users) ? this._users.filter(u => u && typeof u === 'object' && !Array.isArray(u)) : [];
      const panel = el.closest('.panel');
      const isSmall = panel && panel.getAttribute('data-size') === 'S';
      const visibleUsers = isSmall ? users.slice(0, 2) : users;
      if (!users.length) {
        el.innerHTML = `<div class="small">${this._t('no_users')}</div>`;
      } else {
        el.innerHTML = visibleUsers.map((u, i) => {
          if (isSmall) {
            return `
            <div class="user-card" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:6px 10px;flex-direction:row">
              <div style="font-weight:700">${this._escapeHtml(u.name || '')}</div>
              <div style="display:flex;gap:4px">
                ${u.role === 'admin' ? '<span class="user-badge admin">⭐ Adm</span>' : '<span class="user-badge">👤 Std</span>'}
                ${u.access_pin_configured ? '<span class="user-badge" style="background:rgba(0,122,255,0.12);color:#007aff">🔒 PIN</span>' : ''}
              </div>
            </div>`;
          }
          const isExpired = u.expiration_date && new Date(u.expiration_date) < new Date();
          let formattedDate = '';
          if (u.expiration_date) {
            const dateObj = new Date(u.expiration_date);
            if (!isNaN(dateObj.getTime())) {
              try {
                formattedDate = this._formatDateTime(dateObj);
              } catch (e) {
                formattedDate = dateObj.toISOString();
              }
            }
          }
          const expBadge = u.expiration_date
            ? (isExpired
              ? `<span class="user-badge admin" style="background:rgba(229,57,53,0.12);color:#e53935;margin-left:5px">❌ ${this._escapeHtml(this._t('expired'))} (${this._escapeHtml(formattedDate)})</span>`
              : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">⏳ ${this._escapeHtml(this._t('active_until'))}: ${this._escapeHtml(formattedDate)}</span>`)
            : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">♾️ ${this._t('exp_indefinite')}</span>`;

          const haAccountText = u.ha_user_id
            ? (() => {
                const haUser = (this._haUsersList || []).find(ha => ha.id === u.ha_user_id);
                return haUser
                  ? this._format('ha_account_linked', { name: haUser.name })
                  : this._t('ha_account_unavailable');
              })()
            : this._t('ha_account_unavailable');

          const roleText = u.role === 'admin'
            ? '⭐ ' + this._escapeHtml(this._t('role_argus_admin'))
            : '👤 ' + this._escapeHtml(this._t('role_argus_standard'));

          const pinBadge = u.access_pin_configured
            ? `<span class="user-badge" style="background:rgba(0,122,255,0.12);color:#007aff">🔒 PIN</span>`
            : `<span class="user-badge" style="opacity:0.55">🔓 ${this._escapeHtml(this._t('user_no_pin'))}</span>`;

          return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(u.name || '')}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${u.role === 'admin' ? 'admin' : ''}">${roleText}</span>
                  <span class="user-badge" style="background:#4a148c;color:white;margin-left:5px">${this._escapeHtml(haAccountText)}</span>
                  ${pinBadge}
                  ${expBadge}
                </div>
              </div>
              <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${i}" title="${this._escapeHtml(this._t('modal_edit_name'))}">✏️ ${this._escapeHtml(this._t('modal_edit_name'))}</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${i}" title="${this._escapeHtml(this._t('modal_pin_title'))}">🔑 ${this._escapeHtml(this._t('user_pin_action'))}</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${i}" title="${this._escapeHtml(this._t('user_role_label'))}">⭐ ${this._escapeHtml(this._t('user_role_action'))}</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t('delete_user_tooltip'))}" aria-label="${this._escapeHtml(this._t('delete_user_tooltip'))}" data-user-del="${i}">🗑️ ${this._escapeHtml(this._t('clear') || 'Borrar')}</button>
                ` : ''}
              </div>
            </div>
          </div>`;
        }).join('');

        if (this._isAdmin) {
          el.insertAdjacentHTML('beforeend', `
            <div style="margin-top:10px">
              <button class="secondary" style="width:100%;padding:10px;font-size:13px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,255,255,0.18);background:rgba(255,255,255,0.03)" id="btn-add-manual-user">➕ ${this._escapeHtml(this._t('modal_add_user'))}</button>
            </div>`);
        }

        if (this._isAdmin) {
          el.querySelectorAll('[data-user-edit]').forEach(btn => {
            btn.addEventListener('click', async () => {
              const idx = Number(btn.dataset.userEdit);
              const targetUser = this._users[idx];
              if (!targetUser) return;
              const newName = await this._showArgusInputModal({
                title: this._t('modal_edit_name'),
                label: this._t('modal_name_label'),
                placeholder: targetUser.name,
                initialValue: targetUser.name,
                type: 'text',
              });
              if (newName === null || newName.trim() === '') return;
              this._runWithPin(async () => {
                try {
                  const nextUsers = this._users.map((u, k) => k === idx ? { ...u, name: newName.trim() } : u);
                  const resp = await this._send('argus/save_ui', { users: nextUsers });
                  if (resp && resp.ui) { this._ui = resp.ui; this._users = resp.ui.users || nextUsers; }
                  else { this._users = nextUsers; }
                  this._renderUsers();
                } catch (e) {
                  this._showArgusConfirmModal(e.message || this._format('generic_error', { error: e }), { confirmLabel: 'OK' });
                }
              });
            });
          });

          el.querySelectorAll('[data-user-pin]').forEach(btn => {
            btn.addEventListener('click', async () => {
              const idx = Number(btn.dataset.userPin);
              const targetUser = this._users[idx];
              if (!targetUser) return;
              const newPin = await this._showArgusInputModal({
                title: `${this._t('modal_pin_title')} — ${targetUser.name}`,
                label: this._t('modal_pin_help'),
                placeholder: '••••',
                type: 'password',
                numeric: true,
              });
              if (newPin === null) return;
              this._runWithPin(async () => {
                try {
                  await this._send('argus/save_user_access_pin', { argus_user_id: targetUser.id, pin: newPin.trim() });
                  const dash = await this._send('argus/dashboard');
                  if (dash && dash.users) { this._users = dash.users; }
                  this._renderUsers();
                } catch (e) {
                  this._showArgusConfirmModal(e.message || this._format('generic_error', { error: e }), { confirmLabel: 'OK' });
                }
              });
            });
          });

          el.querySelector('#btn-add-manual-user')?.addEventListener('click', async () => {
            const newName = await this._showArgusInputModal({
              title: this._t('modal_add_user'),
              label: this._t('modal_name_label'),
              placeholder: this._t('user_default') || 'Usuario',
              type: 'text',
            });
            if (!newName || !newName.trim()) return;
            this._runWithPin(async () => {
              try {
                const newUser = {
                  id: `argus_manual_${Date.now()}`,
                  name: newName.trim(),
                  role: 'standard',
                  enabled: true,
                  permissions: { view_status: true, arm: false, disarm: false, view_history: false },
                };
                const nextUsers = [...(this._users || []), newUser];
                const resp = await this._send('argus/save_ui', { users: nextUsers });
                if (resp && resp.ui) { this._ui = resp.ui; this._users = resp.ui.users || nextUsers; }
                else { this._users = nextUsers; }
                this._renderUsers();
              } catch (e) {
                this._showArgusConfirmModal(e.message || this._format('generic_error', { error: e }), { confirmLabel: 'OK' });
              }
            });
          });

          // Change Role via Select Modal
          el.querySelectorAll('[data-user-role-toggle]').forEach(btn => {
            btn.addEventListener('click', async () => {
              const idx = Number(btn.dataset.userRoleToggle);
              const targetUser = this._users[idx];
              if (!targetUser) return;
              const newRole = await this._showArgusInputModal({
                title: this._t('user_role_action') || 'Cambiar Rol',
                label: this._t('user_role_label') || 'Selecciona el rol',
                initialValue: targetUser.role === 'admin' ? 'admin' : 'standard',
                type: 'select',
                options: [
                  { value: 'admin', label: this._t('role_argus_admin') || 'Administrador de Argus' },
                  { value: 'standard', label: this._t('role_argus_standard') || 'Usuario estándar' }
                ]
              });
              if (!newRole || newRole === targetUser.role) return;

              this._runWithPin(async () => {
                const nextUsers = this._users.map((u, k) => k === idx ? { ...u, role: newRole } : u);
                try {
                  const resp = await this._send('argus/save_ui', { users: nextUsers });
                  if (resp && resp.ui) {
                    this._ui = resp.ui;
                    this._users = resp.ui.users || nextUsers;
                  } else {
                    this._users = nextUsers;
                  }
                  this._renderUsers();
                } catch (e) {
                  this._showArgusConfirmModal(e.message || this._format('generic_error', { error: e }), { confirmLabel: 'OK' });
                }
              });
            });
          });

          el.querySelectorAll('[data-user-del]').forEach(btn =>
            btn.addEventListener('click', async () => {
              const idx = Number(btn.dataset.userDel);
              const targetUser = this._users[idx];
              if (!targetUser) return;

              const confirmMsg = this._format('delete_user_confirm', { name: targetUser.name || 'User' });
              const confirmed = await this._showArgusConfirmModal(
                this._t('modal_delete_confirm') || confirmMsg,
                { confirmLabel: this._t('clear') || 'Delete', confirmStyle: 'background:#e53935;color:white;border:none' }
              );
              if (!confirmed) return;

              this._runWithPin(async () => {
                const nextUsers = [...this._users];
                nextUsers.splice(idx, 1);
                try {
                  const resp = await this._send('argus/save_ui', { users: nextUsers });
                  if (resp && resp.ui) {
                    this._ui = resp.ui;
                    this._users = resp.ui.users || nextUsers;
                  } else {
                    this._users = nextUsers;
                  }
                  this._renderUsers();
                } catch (e) {
                  this._showArgusConfirmModal(e.message || this._format('generic_error', { error: e }), { confirmLabel: 'OK' });
                }
              });
            })
          );
        }
      }
    } catch (err) {
      console.error('Argus users list render failed:', err);
      el.innerHTML = `<div class="small">${this._t('no_users')}</div>`;
    }

    this._syncAccessSummary();
  }

  _populateTemperatureSources() {
    const sel = this.shadowRoot.getElementById('temp-source-select-standalone');
    if (!sel || !this._hass) return;
    const extra = [{ entity_id: 'auto', name: this._t('temp_auto') }];
    for (const s of Object.values(this._hass.states || {})) {
      const id = s.entity_id || ''; const a = s.attributes || {};
      if (id.startsWith('climate.') && typeof a.current_temperature === 'number') { extra.push({ entity_id:id, name:`🌡️ ${a.friendly_name || id} ${this._t('temp_thermostat')}` }); continue; }
      if (!id.startsWith('sensor.')) continue;
      const dc = String(a.device_class || '').toLowerCase(); const u = String(a.unit_of_measurement || a.native_unit_of_measurement || '').toLowerCase(); const v = Number(s.state);
      if (Number.isFinite(v) && (dc === 'temperature' || ['°c','°f','c','f'].includes(u))) extra.push({ entity_id:id, name:`🌡️ ${a.friendly_name || id}` });
    }
    const seen = new Set();
    sel.innerHTML = extra.filter(x => {
      if (seen.has(x.entity_id)) return false;
      seen.add(x.entity_id);
      return true;
    }).map(x => `<option value="${this._escapeHtml(x.entity_id)}">${this._escapeHtml(x.name)}</option>`).join('');
  }

  _populateWeatherSources() {
    const select = this.shadowRoot.getElementById('weather-source-select');
    if (!select || !this._hass?.states) return;
    const previous = select.value || this._weatherSource || 'auto';
    const weather = Object.values(this._hass.states).filter(state => state.entity_id?.startsWith('weather.'));
    select.innerHTML = [{ entity_id: 'auto', name: this._t('weather_auto') }, ...weather.map(state => ({ entity_id: state.entity_id, name: state.attributes?.friendly_name || state.entity_id }))]
      .map(item => `<option value="${this._escapeHtml(item.entity_id)}">${this._escapeHtml(item.name)}</option>`).join('');
    select.value = [...select.options].some(option => option.value === previous) ? previous : 'auto';
  }

  _getWeatherEntity() {
    const selected = this._weatherSource || 'auto';
    const configured = selected !== 'auto' ? this._hass?.states?.[selected] : null;
    return configured || Object.values(this._hass?.states || {}).find(state => state.entity_id?.startsWith('weather.')) || { state: 'sunny', attributes: {} };
  }

  _getDisplayedTemperature() {
    if (!this._hass) return null;
    const source = this._temperatureSource || 'auto';
    if (source !== 'auto') {
      const state = this._hass.states?.[source];
      if (!state) return null;
      const value = source.startsWith('climate.') ? state.attributes?.current_temperature : Number(state.state);
      const unit = source.startsWith('climate.')
        ? state.attributes?.temperature_unit
        : (state.attributes?.unit_of_measurement || state.attributes?.native_unit_of_measurement);
      return Number.isFinite(Number(value)) ? `${Number(value).toFixed(1).replace(/\.0$/, '')}°${String(unit || '').replace('°', '')}` : null;
    }
    const weather = this._getWeatherEntity();
    const value = weather?.attributes?.temperature;
    const unit = weather?.attributes?.temperature_unit;
    return Number.isFinite(Number(value)) ? `${Number(value).toFixed(1).replace(/\.0$/, '')}°${String(unit || '').replace('°', '')}` : null;
  }

  _getTemperatureReadings() {
    if (!this._hass?.states) return [];
    const readings = [];
    const weather = this._getWeatherEntity();
    const outside = weather?.attributes?.temperature;
    const outsideUnit = weather?.attributes?.temperature_unit;
    if (Number.isFinite(Number(outside))) readings.push({ label: 'EXT.', value: `${Number(outside).toFixed(1).replace(/\.0$/, '')}°${String(outsideUnit || '').replace('°', '')}` });

    const source = this._temperatureSource || 'auto';
    let indoor = source !== 'auto' ? this._hass.states[source] : Object.values(this._hass.states).find(state => state.entity_id?.startsWith('climate.') && Number.isFinite(Number(state.attributes?.current_temperature)));
    if (indoor?.entity_id?.startsWith('weather.')) indoor = null;
    if (indoor) {
      const value = indoor.entity_id.startsWith('climate.') ? indoor.attributes?.current_temperature : Number(indoor.state);
      const unit = indoor.entity_id.startsWith('climate.') ? indoor.attributes?.temperature_unit : (indoor.attributes?.unit_of_measurement || indoor.attributes?.native_unit_of_measurement);
      if (Number.isFinite(Number(value))) readings.push({ label: 'INT.', value: `${Number(value).toFixed(1).replace(/\.0$/, '')}°${String(unit || '').replace('°', '')}` });
    }
    return readings;
  }

  _moonPhase() {
    const raw = (this._hass?.states?.['sensor.moon_phase']?.state || this._hass?.states?.['sensor.moon']?.state || '').toLowerCase().replace(/[\s-]+/g, '_');
    if (raw.includes('new')) return 'new';
    if (raw.includes('waxing_crescent')) return 'waxing-crescent';
    if (raw.includes('first_quarter')) return 'first-quarter';
    if (raw.includes('waxing_gibbous')) return 'waxing-gibbous';
    if (raw.includes('waning_gibbous')) return 'waning-gibbous';
    if (raw.includes('last_quarter') || raw.includes('third_quarter')) return 'last-quarter';
    if (raw.includes('waning_crescent')) return 'waning-crescent';
    return raw.includes('full') ? 'full' : 'full';
  }

  _eclipseEvent() {
    const states = Object.values(this._hass?.states || {});
    const entity = states.find(state => {
      const text = `${state.entity_id || ''} ${state.attributes?.friendly_name || ''} ${state.attributes?.device_class || ''}`.toLowerCase();
      const value = `${state.state || ''} ${state.attributes?.event || ''} ${state.attributes?.type || ''}`.toLowerCase();
      return /eclips/.test(text) && !/^(off|none|unknown|unavailable|false|0)$/i.test(String(state.state || '')) && /eclips|solar|lunar|moon|luna/.test(value);
    });
    if (!entity) return null;
    const value = `${entity.state || ''} ${entity.attributes?.event || ''} ${entity.attributes?.type || ''} ${entity.attributes?.friendly_name || ''}`.toLowerCase();
    return /solar|sun|sol/.test(value) ? 'solar' : (/lunar|moon|luna/.test(value) ? 'lunar' : null);
  }

  _renderEclipseOverlay(eclipse) {
    if (!eclipse) return '';
    const label = eclipse === 'solar' ? '☀️ Eclipse solar' : '🌕 Eclipse lunar';
    return `<div class="weather-eclipse" aria-label="${label}">${label}</div>`;
  }

  _season() {
    const month = new Date().getMonth();
    const southern = Number(this._hass?.config?.latitude) < 0;
    const seasonalMonth = southern ? (month + 6) % 12 : month;
    if ([11, 0, 1].includes(seasonalMonth)) return 'winter';
    if ([2, 3, 4].includes(seasonalMonth)) return 'spring';
    if ([5, 6, 7].includes(seasonalMonth)) return 'summer';
    return 'autumn';
  }

  async _handleBackgroundFiles(ev) {
    const files = Array.from(ev?.target?.files || []).slice(0, 4); if (!files.length) return;
    const read = f => new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(String(r.result || '')); r.onerror = bad; r.readAsDataURL(f); });
    this._backgroundImages = (await Promise.all(files.map(read))).filter(Boolean);
    const help = this.shadowRoot.getElementById('bg-file-help'); if (help) help.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`;
  }

  _isVideoFile(file) {
    const videoExts = ['.mov', '.mp4', '.webm', '.ogg', '.avi', '.m4v'];
    const name = (file.name || '').toLowerCase();
    return videoExts.some(e => name.endsWith(e)) || file.type.startsWith('video/');
  }

  async _showLivePhotoDialog(file, onImage, onVideo) {
    // Show a simple confirm dialog asking what to do with .mov files
    const choice = confirm(this._format('file_choice', { file: file.name }));
    if (choice) {
      await onImage();
    } else {
      await onVideo();
    }
  }

  async _uploadFile(file, help) {
    const token = this._hass?.auth?.accessToken;
    const headers = {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/argus/upload', {
      method: 'POST',
      body: formData,
      headers: headers
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  }

  async _handlePanelBgFile(ev) {
    const file = ev?.target?.files?.[0]; if (!file) return;
    const help = this.shadowRoot.getElementById('bg-file-help');
    if (help) help.textContent = 'Subiendo al servidor...';
    ev.target.value = '';
    try {
      const isVideo = this._isVideoFile(file);
      if (isVideo) {
        await this._showLivePhotoDialog(
          file,
          async () => {
            // As static image — still upload the file
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._panelBgFile = res.url;
              const inp = this.shadowRoot.getElementById('panel-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como imagen: ${file.name}`;
              this._loadUploadedFiles();
            } else {
      if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          },
          async () => {
            // As animated video
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._panelBgFile = res.url;
              const inp = this.shadowRoot.getElementById('panel-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como video: ${file.name}`;
              this._loadUploadedFiles();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          }
        );
      } else {
        const res = await this._uploadFile(file, help);
        if (res?.success) {
          this._panelBgFile = res.url;
          const inp = this.shadowRoot.getElementById('panel-bg-url-input');
          if (inp) inp.value = res.url;
          if (help) help.textContent = `Subido: ${file.name}`;
          this._loadUploadedFiles();
        } else {
          if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
        }
      }
    } catch (err) {
      console.error('Upload failed:', err);
      if (help) help.textContent = this._format('generic_error', { error: err.message || err });
    }
  }

  async _handleHubBgFile(ev) {
    const file = ev?.target?.files?.[0]; if (!file) return;
    const help = this.shadowRoot.getElementById('hub-file-help');
    if (help) help.textContent = 'Subiendo al servidor...';
    ev.target.value = '';
    try {
      const isVideo = this._isVideoFile(file);
      if (isVideo) {
        await this._showLivePhotoDialog(
          file,
          async () => {
            // As static image
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._hubBgFile = res.url;
              const inp = this.shadowRoot.getElementById('hub-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como imagen: ${file.name}`;
              this._loadUploadedFiles();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          },
          async () => {
            // As animated video — set hub bg mode to 'image' and use video URL directly
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._hubBgFile = res.url;
              const inp = this.shadowRoot.getElementById('hub-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como video: ${file.name}`;
              this._loadUploadedFiles();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          }
        );
      } else {
        const res = await this._uploadFile(file, help);
        if (res?.success) {
          this._hubBgFile = res.url;
          const inp = this.shadowRoot.getElementById('hub-bg-url-input');
          if (inp) inp.value = res.url;
          if (help) help.textContent = `Subido: ${file.name}`;
          this._loadUploadedFiles();
        } else {
          if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
        }
      }
    } catch (err) {
      console.error('Upload failed:', err);
      if (help) help.textContent = this._format('generic_error', { error: err.message || err });
    }
  }

  async _loadUploadedFiles() {
    try {
      const files = await this._send('argus/list_uploaded_files');
      this._uploadedFiles = files || [];
      this._renderUploadedFiles();
    } catch (err) {
      console.error('Failed to load uploaded files:', err);
      const listContainer = this.shadowRoot.getElementById('uploaded-files-list');
      if (listContainer) {
        listContainer.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; color:#ff4d4d; opacity:0.8;">
            ${this._t('error_loading_uploaded_files')}
          </div>
        `;
      }
    }
  }

  _renderUploadedFiles() {
    const listContainer = this.shadowRoot.getElementById('uploaded-files-list');
    const countLabel = this.shadowRoot.getElementById('storage-files-count');
    if (!listContainer) return;

    const files = this._uploadedFiles || [];
    if (!files.length) {
      listContainer.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; opacity:0.5;">
          ${this._t('no_files_uploaded')}
        </div>
      `;
      if (countLabel) countLabel.textContent = this._t('files_count').replace('{count}', '0');
      return;
    }

    let totalBytes = 0;
    files.forEach(f => totalBytes += (f.size_bytes || 0));
    let totalStr = '';
    if (totalBytes >= 1024 * 1024) {
      totalStr = `${(totalBytes / (1024 * 1024)).toFixed(2)} MB`;
    } else {
      totalStr = `${(totalBytes / 1024).toFixed(2)} KB`;
    }

    if (countLabel) {
      countLabel.textContent = this._t('files_count_short').replace('{count}', files.length) + ` (${totalStr})`;
    }

    listContainer.innerHTML = files
      .filter(file => !file.is_video)
      .map(file => `
      <div class="file-card" data-filename="${this._escapeHtml(file.name)}">
        <div class="file-card-preview">
          <img src="${this._escapeHtml(file.url)}" loading="lazy">
        </div>
        <div class="file-card-name" title="${this._escapeHtml(file.name)}">${this._escapeHtml(file.name)}</div>
        <div class="file-card-meta">
          <span>${this._escapeHtml(file.size_str)}</span>
          <button class="file-card-btn-delete" data-filename="${this._escapeHtml(file.name)}" title="${this._escapeHtml(this._t('delete_btn_title'))}">🗑️</button>
        </div>
        <div class="file-card-actions">
          <button class="file-card-btn use-for-panel" data-url="${this._escapeHtml(file.url)}">${this._escapeHtml(this._t('use_for_panel'))}</button>
          <button class="file-card-btn use-for-hub" data-url="${this._escapeHtml(file.url)}">${this._escapeHtml(this._t('use_for_hub'))}</button>
        </div>
      </div>
    `).join('');

    listContainer.querySelectorAll('.file-card-btn-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const fname = btn.dataset.filename;
        if (confirm(this._t('file_delete_confirm').replace('{filename}', fname))) {
          this._deleteUploadedFile(fname);
        }
      });
    });

    listContainer.querySelectorAll('.use-for-panel').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url;
        this._panelBgFile = url;
        const inp = this.shadowRoot.getElementById('panel-bg-url-input');
        if (inp) inp.value = url;
        const bgMode = this.shadowRoot.getElementById('bg-mode-select-standalone');
        // This selector has no "video" value. Selecting it left the control
        // blank and prevented the image from rendering until a reload.
        if (bgMode) bgMode.value = 'photo';
        this._backgroundMode = 'photo';
        this._updateBgFieldsVisibility();
        this._renderEntries();
        this._savePersonalization();
        const help = this.shadowRoot.getElementById('bg-file-help');
        if (help) help.textContent = this._t('bg_panel_selected_from_history');
      });
    });

    listContainer.querySelectorAll('.use-for-hub').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url;
        this._hubBgFile = url;
        const inp = this.shadowRoot.getElementById('hub-bg-url-input');
        if (inp) inp.value = url;
        const hubMode = this.shadowRoot.getElementById('hub-bg-mode-select');
        // The hub selector uses "image" (not "photo"). The old value made
        // uploaded images impossible to select as the Argus-wide background.
        if (hubMode) hubMode.value = 'image';
        this._hubBgMode = 'image';
        this._updateBgFieldsVisibility();
        this._updateCanvasBackground();
        this._savePersonalization();
        const help = this.shadowRoot.getElementById('hub-file-help');
        if (help) help.textContent = this._t('bg_hub_selected_from_history');
      });
    });
  }

  async _deleteUploadedFile(filename) {
    try {
      await this._send('argus/delete_uploaded_file', { filename });
      if (this._uploadedFiles) {
        this._uploadedFiles = this._uploadedFiles.filter(f => f.name !== filename);
        this._renderUploadedFiles();
      }
      // Clear a selected file only after the server confirms deletion.
      const panelInp = this.shadowRoot.getElementById('panel-bg-url-input');
      if (panelInp && panelInp.value === `/local/argus/${filename}`) {
        panelInp.value = '';
        this._panelBgFile = '';
      }
      const hubInp = this.shadowRoot.getElementById('hub-bg-url-input');
      if (hubInp && hubInp.value === `/local/argus/${filename}`) {
        hubInp.value = '';
        this._hubBgFile = '';
      }
    } catch (err) {
      console.warn('Server delete failed:', err);
      alert(this._format('delete_file_error', { error: err.message || err }));
    }
  }

  _updateBgFieldsVisibility() {
    const bgMode = this.shadowRoot.getElementById('bg-mode-select-standalone')?.value || 'weather';
    const hubBgMode = this.shadowRoot.getElementById('hub-bg-mode-select')?.value || 'default';

    const panelInputs = this.shadowRoot.getElementById('panel-custom-bg-inputs');
    if (panelInputs) {
      if (bgMode === 'photo' || bgMode === 'collage') {
        panelInputs.style.display = 'flex';
        const soundLabel = this.shadowRoot.getElementById('lbl-panel-bg-sound');
        if (soundLabel) soundLabel.style.display = 'none';

        const fileInput = this.shadowRoot.getElementById('panel-bg-file-input');
        if (fileInput) fileInput.accept = 'image/*,.mov,.heic,.heif';

        const urlInput = this.shadowRoot.getElementById('panel-bg-url-input');
        if (urlInput) urlInput.placeholder = 'Pegar URL de la imagen';
      } else {
        panelInputs.style.display = 'none';
      }
    }

    const hubInputs = this.shadowRoot.getElementById('hub-custom-bg-inputs');
    if (hubInputs) {
      if (hubBgMode === 'image') {
        hubInputs.style.display = 'flex';
        const soundLabel = this.shadowRoot.getElementById('lbl-hub-bg-sound');
        if (soundLabel) soundLabel.style.display = 'none';

        const fileInput = this.shadowRoot.getElementById('hub-bg-file-input');
        if (fileInput) fileInput.accept = 'image/*,.mov,.heic,.heif';

        const urlInput = this.shadowRoot.getElementById('hub-bg-url-input');
        if (urlInput) urlInput.placeholder = 'Pegar URL de la imagen/GIF';
      } else {
        hubInputs.style.display = 'none';
      }
    }
  }

  _updateCanvasBackground() {
    const bgContainer = this.shadowRoot.getElementById('argus-canvas-bg');
    const mode = this._hubBgMode || 'default';
    const file = this._hubBgFile || '';

    this.setAttribute('data-bg-mode', mode);

    // Reset inline host background styling
    this.style.backgroundImage = '';
    this.style.backgroundSize = '';
    this.style.backgroundPosition = '';
    this.style.backgroundRepeat = '';
    this.style.backgroundAttachment = '';
    this.style.background = ''; // restore CSS stylesheet default

    if (bgContainer) {
      bgContainer.innerHTML = '';
      bgContainer.style.backgroundImage = '';
    }

    if (mode === 'none') {
      return;
    }

    const imgSrc = (mode === 'default')
      ? '/api/argus_static/argus-default-bg.jpg'
      : (mode === 'image' && file ? file : '');

    if (imgSrc) {
      // Apply background directly to :host to prevent browser/Safari z-index Shadow DOM rendering issues
      this.style.backgroundImage = `url('${imgSrc.replace(/'/g, "%27")}')`;
      this.style.backgroundSize = 'cover';
      this.style.backgroundPosition = 'center';
      this.style.backgroundRepeat = 'no-repeat';
      this.style.backgroundAttachment = 'fixed';
    }
  }

  _renderEntryBackground(ws, isNight) {
    const mode = this._backgroundMode || 'weather', imgs = this._backgroundImages || [];
    if (mode === 'none') return `<div class="wx wx-static"></div>`;
    if (mode === 'photo' && (this._panelBgFile || imgs[0])) {
      const bgImg = this._panelBgFile || imgs[0];
      return `<div class="wx wx-photo" style="--bg-image:url('${bgImg.replace(/'/g, "%27")}')"></div>`;
    }
    if (mode === 'collage' && imgs.length) return `<div class="wx wx-collage"><div class="wx-collage-grid">${imgs.slice(0,4).map(src => `<div class="wx-collage-cell" style="background-image:url('${src.replace(/'/g, "%27")}')"></div>`).join('')}</div></div>`;
    if (mode === 'video' && this._panelBgFile) {
      const sound = this._panelBgSound;
      return `<div class="wx wx-video">
        <video autoplay loop playsinline ${sound ? '' : 'muted'} style="width:100%; height:100%; object-fit:cover; pointer-events:none; position:absolute; inset:0; z-index:1;">
          <source src="${this._panelBgFile}">
        </video>
      </div>`;
    }
    return this._getWeatherBg(ws, isNight);
  }

  _updateHomeNameDisplay() {
    const prominent = this.shadowRoot.getElementById('lbl-home-name-prominent');
    if (prominent) prominent.textContent = this._homeName || this._t('home_default');
  }

  _sendTempNotification(message) {
    const targets = this._notifTargets || [];
    if (!targets.length || !this._hass) return;
    targets.forEach(target => {
      try {
        this._hass.callService('notify', target, {
          message,
          title: this._t('temp_notification_title'),
             data: { push: { sound: 'default', badge: 1 } }
        });
      } catch (_) {}
    });
  }

  _normaliseEmergencyNumber(value) {
    const number = String(value || '').replace(/[^0-9+]/g, '');
    return /^[+]?[0-9]{2,15}$/.test(number) ? number : '911';
  }

  _renderSosOutputs() {
    const container = this.shadowRoot?.getElementById('sos-output-chips');
    if (!container) return;
    const outputs = this._panicOutputs || [];
    container.innerHTML = outputs.length
      ? outputs.map(id => {
          const name = this._hass?.states?.[id]?.attributes?.friendly_name || id;
          return `<span class="sensor-pill" title="${this._escapeHtml(name)}"><span>${this._escapeHtml(name)}</span></span>`;
        }).join('')
      : `<div class="mode-sensor-none">${this._t('sos_no_outputs')}</div>`;
  }

  _configureEmergencyCall() {
    const callBtn = this.shadowRoot?.getElementById('sos-call-btn');
    if (!callBtn) return;
    const number = this._normaliseEmergencyNumber(this._emergencyNumber);
    callBtn.href = `tel:${number}`;
    callBtn.textContent = `${this._t('sos_call')} (${number})`;
  }

  async _triggerSOS() {
    if (this._sosBusy) return;
    this._sosBusy = true;
    const modal = this.shadowRoot && this.shadowRoot.getElementById('sos-modal');
    if (modal) modal.classList.remove('open');
    const emergencyNumber = this._normaliseEmergencyNumber(this._emergencyNumber);
    const idx = this._sosEntryIdx;
    const entry = this._dashboard?.entries?.[idx];
    const eid = entry?.entity_id;
    try {
      if (!this._hass || !eid) throw new Error(this._t('no_alarm_instance'));
      await this._send('argus/perform_alarm_action', { action: 'sos', entry_id: entry.entry_id });
      if (window.confirm(`${this._t('sos_activated')}. ${this._format('sos_call_confirm', { number: emergencyNumber })}`)) {
        window.location.href = `tel:${emergencyNumber}`;
      }
    } catch (err) {
      alert(this._format('sos_error', { error: err?.message || err }));
    } finally {
      this._sosEntryIdx = null;
      this._sosBusy = false;
    }
  }

  async _stopSOS(idx) {
    const entry = this._dashboard?.entries?.[idx];
    const live = entry && this._hass?.states?.[entry.entity_id];
    const previous = live?.attributes?.panic_previous_state;
    const restoreService = {
      armed_home: 'alarm_arm_home', armed_away: 'alarm_arm_away',
      armed_night: 'alarm_arm_night', armed_vacation: 'alarm_arm_vacation',
      disarmed: 'alarm_disarm',
    }[previous];
    if (!entry?.entity_id || !restoreService) {
      alert(this._t('panic_state_unknown'));
      return;
    }
    const restore = async (pin) => {
      try {
        await this._send('argus/perform_alarm_action', {
          action: restoreService.replace('alarm_', ''),
          entry_id: entry.entry_id,
          ...(pin ? { code: pin } : {})
        });
        await this._load();
        return true;
      } catch (err) {
        const pinError = this.shadowRoot.getElementById('pin-error');
        if (pinError) pinError.textContent = `❌ ${this._format('panic_stop_error', { error: '' }).replace(/:\s*$/, '')}`;
        else alert(this._format('panic_stop_error', { error: err?.message || err }));
        return false;
      }
    };

    const pinConfigured = entry.pin_configured === true || (this._users || []).length > 0;
    if (pinConfigured) this._showPinModal(restore);
    else await restore(null);
  }

  _savePersonalization() {
    this._runWithPin(() => this._persistPersonalization());
  }

  async _persistPersonalization() {
    const background_mode = this.shadowRoot.getElementById('bg-mode-select-standalone')?.value || 'weather';
    const temperature_source = this.shadowRoot.getElementById('temp-source-select-standalone')?.value || 'auto';
    const weather_source = this.shadowRoot.getElementById('weather-source-select')?.value || 'auto';
    const emergency_number = this._normaliseEmergencyNumber(this.shadowRoot.getElementById('emergency-number-input')?.value);

    let panel_bg_file = '';
    const panel_bg_url = this.shadowRoot.getElementById('panel-bg-url-input')?.value || '';
    if (panel_bg_url) {
      panel_bg_file = panel_bg_url;
    } else if (this._panelBgFile) {
      panel_bg_file = this._panelBgFile;
    }
    const panel_bg_sound = Boolean(this.shadowRoot.getElementById('chk-panel-bg-sound')?.checked);

    const selected_hub_bg_mode = this.shadowRoot.getElementById('hub-bg-mode-select')?.value || 'default';
    const hub_bg_mode = selected_hub_bg_mode === 'default' ? 'none' : selected_hub_bg_mode;
    let hub_bg_file = '';
    const hub_bg_url = this.shadowRoot.getElementById('hub-bg-url-input')?.value || '';
    if (hub_bg_url) {
      hub_bg_file = hub_bg_url;
    } else if (this._hubBgFile) {
      hub_bg_file = this._hubBgFile;
    }
    const hub_bg_sound = Boolean(this.shadowRoot.getElementById('chk-hub-bg-sound')?.checked);

    const payload = {
      home_name: this._homeName,
      background_mode,
      background_images: this._backgroundImages || [],
      temperature_source,
      weather_source,
      emergency_number,
      panel_bg_file,
      panel_bg_sound,
      hub_bg_mode,
      hub_bg_file,
      hub_bg_sound
    };
    if (this._panicOutputs !== undefined) {
      payload.panic_outputs = this._panicOutputs;
    }

    try {
      await this._send('argus/save_ui', payload);
      this._backgroundMode = background_mode;
      this._temperatureSource = temperature_source;
      this._weatherSource = weather_source;
      this._emergencyNumber = emergency_number;
      this._panelBgFile = panel_bg_file;
      this._panelBgSound = panel_bg_sound;
      this._hubBgMode = selected_hub_bg_mode;
      this._hubBgFile = hub_bg_file;
      this._hubBgSound = hub_bg_sound;
      this._updateTheme();

      this._ui = this._ui || {};
      this._ui.background_mode = background_mode;
      this._ui.background_images = this._backgroundImages || [];
      this._ui.temperature_source = temperature_source;
      this._ui.weather_source = weather_source;
      this._ui.emergency_number = emergency_number;
      this._ui.panic_outputs = this._panicOutputs;
      this._configureEmergencyCall();
      this._ui.panel_bg_file = panel_bg_file;
      this._ui.panel_bg_sound = panel_bg_sound;
      this._ui.hub_bg_mode = hub_bg_mode;
      this._ui.hub_bg_file = hub_bg_file;
      this._ui.hub_bg_sound = hub_bg_sound;

      this._renderEntries();
      this._updateCanvasBackground();

      const btn = this.shadowRoot.getElementById('btn-save-personalization-standalone');
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent = this._t('saved');
        btn.style.background = '#43a047';
        setTimeout(() => { btn.textContent = oldText; btn.style.background = ''; }, 3000);
      }
    } catch (e) { alert(this._format('generic_error', { error: e.message })); }
  }

  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const doOpen = () => {
      const m = this.shadowRoot.getElementById('home-name-modal');
      const inp = this.shadowRoot.getElementById('home-name-input');
      const st  = this.shadowRoot.getElementById('home-name-status');
      inp.value = this._homeName || this.shadowRoot.getElementById('home-name-setting')?.value || '';
      if (st) st.textContent = '';
      m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
      setTimeout(() => inp.focus(), 60);
    };
    this._runWithPin(doOpen);
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
    } catch (e) { alert(this._format('generic_error', { error: e.message })); }
  }

  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const status = this.shadowRoot.getElementById('pin-status');
    const pinConfigured = this._dashboard?.entries?.[0]?.pin_configured === true;

    const pinCurrent = this.shadowRoot.getElementById('current-pin').value;
    if (pinConfigured && !pinCurrent) {
      if (status) {
        status.textContent = this._t('pin_incorrect');
        status.className = 'status err';
      }
      return;
    }

    const p1 = this.shadowRoot.getElementById('new-pin-1').value;
    const p2 = this.shadowRoot.getElementById('new-pin-2').value;

    if (p1 !== p2) {
      if (status) {
        status.textContent = this._t('pin_mismatch');
        status.className = 'status err';
      } else {
        alert(this._t('pin_mismatch'));
      }
      return;
    }

    try {
      await this._send('argus/update_master_pin', { pin: p1, current_pin: pinCurrent });
      if (status) {
        status.textContent = p1 ? this._t('pin_updated') : this._t('pin_deleted');
        status.className = 'status ok';
      }
      if (this.shadowRoot.getElementById('current-pin-display')) {
        this.shadowRoot.getElementById('current-pin-display').textContent = p1 ? this._t('pin_active_yes') : this._t('pin_active_no');
      }
      if (this._dashboard?.entries?.[0]) this._dashboard.entries[0].pin_configured = Boolean(p1);
      this._syncAccessSummary();
      if (this.shadowRoot.getElementById('current-pin')) this.shadowRoot.getElementById('current-pin').value = '';
      this.shadowRoot.getElementById('new-pin-1').value = '';
      this.shadowRoot.getElementById('new-pin-2').value = '';
      setTimeout(() => this._load(), 1200);
    } catch (e) {
      if (status) {
        status.textContent = e.message;
        status.className = 'status err';
      } else {
        alert(e.message);
      }
    }
  }

  async _handleForgotPin() {
    const status = this.shadowRoot.getElementById('pin-status');
    const pinErr = this.shadowRoot.getElementById('pin-error');

    const isAdmin = this._hass?.user?.is_admin === true;

    if (!isAdmin) {
      const errMsg = this._t('pin_reset_admin_only');
      if (status) {
        status.textContent = errMsg;
        status.className = 'status err';
      }
      if (pinErr) {
        pinErr.textContent = errMsg;
      }
      return;
    }

    if (confirm(this._t('pin_reset_confirm'))) {
      try {
        await this._send('argus/update_master_pin', { pin: '', force_reset: true });
        const successMsg = '✓ PIN Maestro restablecido';
        if (status) {
          status.textContent = successMsg;
          status.className = 'status ok';
        }
        if (pinErr) {
          pinErr.textContent = successMsg;
          pinErr.style.color = '#43a047';
        }

        if (this.shadowRoot.getElementById('current-pin')) this.shadowRoot.getElementById('current-pin').value = '';
        this.shadowRoot.getElementById('new-pin-1').value = '';
        this.shadowRoot.getElementById('new-pin-2').value = '';

        setTimeout(() => {
          this._closePinModal();
          this._load();
        }, 1200);
      } catch (e) {
        const errMsg = this._format('generic_error', { error: e.message });
        if (status) {
          status.textContent = errMsg;
          status.className = 'status err';
        }
        if (pinErr) {
          pinErr.textContent = errMsg;
        }
      }
    }
  }

  /* ── Liquid-glass input modal (replaces window.prompt) ───────────── */
  _showArgusInputModal({ title = '', label = '', placeholder = '', initialValue = '', type = 'text', numeric = false, options = null } = {}) {
    return new Promise(resolve => {
      const id = `_aim_${Date.now()}`;
      const overlay = document.createElement('div');
      overlay.id = id;
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.style.cssText = [
        'position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center',
        'background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)',
        'animation:argus-modal-in .18s ease',
      ].join(';');

      const safeLabel = label.replace(/'/g, '&#39;');
      const safeTitle = title.replace(/'/g, '&#39;');
      const safePlaceholder = placeholder.replace(/'/g, '&#39;');
      const cancelLabel = this._t('modal_cancel') || 'Cancelar';
      const saveLabel   = this._t('modal_save')   || 'Guardar';

      overlay.innerHTML = `
        <div style="background:rgba(30,30,45,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${safeTitle}</div>
          ${safeLabel ? `<div style="font-size:13px;color:rgba(255,255,255,0.55);margin-top:-6px">${safeLabel}</div>` : ''}
          ${type === 'select' && options
            ? `<select id="aim-inp" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;transition:border-color .2s;font-family:inherit">
                 ${options.map(o => `<option value="${this._escapeHtml(o.value)}" ${o.value === initialValue ? 'selected' : ''}>${this._escapeHtml(o.label)}</option>`).join('')}
               </select>`
            : `<input id="aim-inp" type="${type === 'password' ? 'password' : 'text'}"
            ${numeric ? 'inputmode="numeric" pattern="[0-9]*"' : ''}
            placeholder="${safePlaceholder}"
            value="${initialValue.replace(/"/g, '&quot;')}"
            style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;
              padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;
              transition:border-color .2s;font-family:inherit"/>`
          }
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="aim-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${cancelLabel}</button>
            <button id="aim-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${saveLabel}</button>
          </div>
        </div>`;

      const root = this.shadowRoot || document.body;
      root.appendChild(overlay);

      const inp = overlay.querySelector('#aim-inp');
      const okBtn = overlay.querySelector('#aim-ok');
      const cancelBtn = overlay.querySelector('#aim-cancel');

      setTimeout(() => inp?.focus(), 60);
      inp?.addEventListener('focus', () => inp.style.borderColor = 'rgba(74,144,217,0.8)');
      inp?.addEventListener('blur',  () => inp.style.borderColor = 'rgba(255,255,255,0.15)');

      const cleanup = val => { overlay.remove(); resolve(val); };

      okBtn.addEventListener('click', () => cleanup(inp.value));
      cancelBtn.addEventListener('click', () => cleanup(null));
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); cleanup(inp.value); }
        if (e.key === 'Escape') { e.preventDefault(); cleanup(null); }
      });
      overlay.addEventListener('click', e => { if (e.target === overlay) cleanup(null); });
    });
  }

  /* ── Liquid-glass confirm modal (replaces window.confirm) ─────────── */
  _showArgusConfirmModal(message = '', { confirmLabel = '', confirmStyle = '', cancelLabel = '' } = {}) {
    return new Promise(resolve => {
      const overlay = document.createElement('div');
      overlay.setAttribute('role', 'alertdialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.style.cssText = [
        'position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center',
        'background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)',
        'animation:argus-modal-in .18s ease',
      ].join(';');

      const cl = confirmLabel || this._t('modal_confirm') || 'Confirmar';
      const ccl = cancelLabel  || this._t('modal_cancel')  || 'Cancelar';
      const cStyle = confirmStyle || 'background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)';

      overlay.innerHTML = `
        <div style="background:rgba(30,30,45,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(340px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.88);line-height:1.5;text-align:center">${message}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${ccl}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${cStyle}">${cl}</button>
          </div>
        </div>`;

      const root = this.shadowRoot || document.body;
      root.appendChild(overlay);

      const cleanup = val => { overlay.remove(); resolve(val); };
      overlay.querySelector('#acm-ok').addEventListener('click', () => cleanup(true));
      overlay.querySelector('#acm-cancel').addEventListener('click', () => cleanup(false));
      overlay.addEventListener('click', e => { if (e.target === overlay) cleanup(false); });
      overlay.addEventListener('keydown', e => {
        if (e.key === 'Enter') cleanup(true);
        if (e.key === 'Escape') cleanup(false);
      });
      setTimeout(() => overlay.querySelector('#acm-ok')?.focus(), 60);
    });
  }

  _runWithPin(action) {
    action();
  }

  _showPinModal(onConfirm) {
    const m = this.shadowRoot.getElementById('pin-modal');
    const inp = this.shadowRoot.getElementById('pin-input');
    const err = this.shadowRoot.getElementById('pin-error');
    const wrap = this.shadowRoot.querySelector('.wrap');
    inp.value = '';
    if (err) {
      err.textContent = '';
      err.style.color = '';
    }
    this._pinCallback = onConfirm;

    const isFS = this.classList.contains('fullscreen-active');
    let fsEl = null;
    if (isFS) {
      fsEl = this.shadowRoot.querySelector('.entry.ios-fullscreen') ||
             this.shadowRoot.querySelector('.entry') ||
             this.shadowRoot.querySelector('article');
    }

    if (isFS && fsEl) {
      m.style.position = 'absolute';
      m.style.zIndex = '99999999';
      m.style.background = 'rgba(0, 0, 0, 0.55)';
      m.style.backdropFilter = 'none';
      m.style.webkitBackdropFilter = 'none';
      const modalBox = m.querySelector('.modal');
      if (modalBox) {
        modalBox.classList.remove('dial-elastic');
        void modalBox.offsetWidth; // force reflow
        modalBox.classList.add('dial-elastic');
      }
      fsEl.appendChild(m);
    } else {
      m.style.position = 'fixed';
      m.style.zIndex = '999999';
      m.style.background = 'rgba(0, 0, 0, 0.3)';
      m.style.backdropFilter = 'none';
      m.style.webkitBackdropFilter = 'none';
      if (wrap) {
        wrap.classList.add('wrap-blurred');
      }
    }

    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    setTimeout(() => inp.focus(), 60);
  }

  _closePinModal() {
    const m = this.shadowRoot.getElementById('pin-modal');
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
    const wrap = this.shadowRoot.querySelector('.wrap');
    if (wrap) {
      wrap.classList.remove('wrap-blurred');
    }
    m.style.position = 'fixed';
    m.style.zIndex = '999999';
    this.shadowRoot.appendChild(m);
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

  async _submitPin() {
    const pin = this.shadowRoot.getElementById('pin-input').value.trim();
    if (!pin) {
      const errEl = this.shadowRoot.getElementById('pin-error');
      if (errEl) errEl.textContent = '⚠️ Introduce el PIN';
      return;
    }
    const cb = this._pinCallback;
    if (cb) {
      try {
        const success = await cb(pin);
        if (success !== false) {
          this._closePinModal();
        }
      } catch (err) {
        const errEl = this.shadowRoot.getElementById('pin-error');
        if (errEl) errEl.textContent = err.message || '❌ PIN incorrecto';
      }
    } else {
      this._closePinModal();
    }
  }

  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const q = (this.shadowRoot.getElementById('selector-search').value || '').toLowerCase().trim();
    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = this._available.filter(x => {
      if (this._selectorTarget === 'siren' || this._selectorTarget === 'panic') return ['siren','switch','light','fan','input_boolean','script'].includes(x.domain);
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
    const _srcKey = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : (type === 'entry' ? 'entry_sensors' : 'sirens'));
    this._selected = type === 'panic'
      ? [...(this._panicOutputs || [])]
      : (Array.isArray(cfg[_srcKey]) ? [...cfg[_srcKey]] : []);
    const title = this.shadowRoot.getElementById('selector-title');
    if (type === 'sensor') title.textContent = this._t('sensor_section');
    else if (type === 'bypass') title.textContent = this._t('sensors_to_bypass');
    else if (type === 'entry') title.textContent = this._t('entry_sensors');
    else if (type === 'panic') title.textContent = this._t('selector_panic');
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

    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = this._available.filter(x => {
      if (this._selectorTarget === 'siren' || this._selectorTarget === 'panic') return ['siren','switch','light','fan','input_boolean','script'].includes(x.domain);
      if (x.domain === 'lock') return true;
      if (x.domain === 'binary_sensor') {
        const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
        return INTRUSION_DC.includes(dc);
      }
      return false;
    }).filter(x => !q || [x.entity_id, x.name, x.area, x.entity_id.split('.')[1]].filter(Boolean).join(' ').toLowerCase().includes(q));

    list.innerHTML = items.map(x => {
      const raw   = this._hass?.states?.[x.entity_id]?.state || 'unknown';
      const stateObj = this._hass?.states?.[x.entity_id];
      const facts = this._deviceFacts(x.entity_id, stateObj, true);
      return `<label class="pick-row">
        <input type="checkbox" data-entity="${this._escapeHtml(x.entity_id)}" ${this._selected.includes(x.entity_id) ? 'checked' : ''}>
        <div>
          <div class="pick-row-name">${this._escapeHtml(x.name || x.entity_id)}</div>
          <div class="pick-row-meta">${this._escapeHtml(x.entity_id)}${x.area ? ' · '+this._escapeHtml(x.area) : ''}</div>
          <div class="device-facts">${facts.map(f => `<span class="device-fact ${f.className}">${this._escapeHtml(f.text)}</span>`).join('')}</div>
        </div>
      </label>`;
    }).join('') || `<div class="small" style="padding:10px">${this._t('no_results')}</div>`;

    list.addEventListener('change', e => {
      const cb = e.target.closest('input[type=checkbox]');
      if (!cb || !cb.dataset.entity) return;
      const id = cb.dataset.entity;
      if (cb.checked) { if (!this._selected.includes(id)) this._selected.push(id); }
      else this._selected = this._selected.filter(v => v !== id);
      this._renderSelector();
    }, { once: true });

    selBox.innerHTML = this._selected.map(id => {
      const stateObj = this._hass?.states?.[id];
      const facts = this._deviceFacts(id, stateObj, true);
      return `<div class="sel-right-item">
        <div style="min-width:0">
          <div class="sel-right-name">${this._escapeHtml(stateObj?.attributes?.friendly_name || id)}</div>
          <div class="sel-right-facts">${facts.map(f => `<span class="device-fact ${f.className}">${this._escapeHtml(f.text)}</span>`).join('')}</div>
        </div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${this._escapeHtml(id)}">✕</button>
      </div>`;
    }).join('') || `<div class="small" style="padding:10px;opacity:.5">${this._t('none_selected')}</div>`;

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
    // FIX A DEFINITIVO: leer cfg fresco, mutar, y escribir de vuelta
    // EXACTAMENTE en modes.__by_entity__[eid][mode] — la misma ruta que _currentModeConfig lee
    if (!this._ui) return;
    if (this._selectorTarget === 'panic') {
      this._panicOutputs = [...this._selected];
      this._renderSosOutputs();
      this._closeModal();
      return;
    }
    if (!this._ui.modes) this._ui.modes = {};
    if (!this._ui.modes.__by_entity__) this._ui.modes.__by_entity__ = {};
    let _eid = this._modeEntryId;
    if (!_eid || _eid === 'default') {
      _eid = this._dashboard?.entries?.[0]?.entity_id || 'default';
    }
    this._modeEntryId = _eid;
    if (!this._ui.modes.__by_entity__[_eid]) this._ui.modes.__by_entity__[_eid] = {};
    const EMPTY = { sensors:[], bypassed_sensors:[], sirens:[], require_closed:false,
                    arming_time:null, entry_delay:null, mqtt_enabled:null, entry_sensors:[] };
    // Partir de la config existente para no perder otros campos
    const existing = this._ui.modes.__by_entity__[_eid][this._mode] || {};
    const cfg = { ...EMPTY, ...existing };
    if (this._selectorTarget === 'sensor') cfg.sensors          = [...this._selected];
    if (this._selectorTarget === 'siren')  cfg.sirens           = [...this._selected];
    if (this._selectorTarget === 'bypass') cfg.bypassed_sensors = [...this._selected];
    if (this._selectorTarget === 'entry')  cfg.entry_sensors    = [...this._selected];
    // Escribir de vuelta en la ruta canónica
    this._ui.modes.__by_entity__[_eid][this._mode] = cfg;
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
    const currentUser = this._hass?.user?.name || this._t('user_default');

    if (action === 'disarm') {
      // FIX-4: sólo mostrar modal de PIN si hay código configurado
      const masterPin = e.pin_configured === true;
      const hasUsers = e.user_pin_configured === true;
      const doDisarm = async (pin) => {
        try {
          await this._send('argus/perform_alarm_action', {
            action: 'disarm',
            entry_id: e.entry_id,
            ...(pin ? { code: pin } : {})
          });

          this._sendHaNotif(`🔓 ${this._t('log_disarmed')}`, this._format('notification_disarmed', { user: currentUser }));
          // FIX v0.9.32 — Bug 1: al desarmar, forzar re-render inmediato para
          // quitar la clase siren-active/triggered-sensor de todas las píldoras.
          setTimeout(() => { this._renderModeView(); this._load(); }, 300);
          return true;
        } catch (err) {
          const pinErr = this.shadowRoot.getElementById('pin-error');
          if (pinErr) pinErr.textContent = '❌ PIN incorrecto o error al desarmar';
          return false;
        }
      };
      if (masterPin || hasUsers) {
        // Keep the compact panel intact. The touch/mouse keypad is rendered
        // only after the user explicitly asks to disarm.
        this._showPinModal(async pin => { return await doDisarm(pin); });
      } else {
        await doDisarm(null);
      }
      return;
    }

    // FIX-3: leer modeCfg desde la ruta canónica __by_entity__
    const _armEid = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id;
    const modeCfg = (this._ui?.modes?.__by_entity__?.[_armEid]?.[action])
                 || (this._ui?.modes?.[action])
                 || {};

    // FIX-5: bloqueo require_closed con detalle de sensores abiertos
    if (modeCfg.require_closed) {
      const modeSensors = modeCfg.sensors || [];
      // Match the integration behaviour: bypassed sensors never block arming
      // and never trigger the alarm in this specific mode.
      const bypassedSensors = new Set(
        modeCfg.bypassed_sensors || modeCfg.bypassedSensors || []
      );
      const openNames = [];
      for (const sId of modeSensors) {
        if (bypassedSensors.has(sId)) continue;
        const estado = this._hass.states[sId]?.state;
        if (['on', 'open', 'unlocked', 'active', 'motion', 'recording'].includes(estado)) {
          openNames.push(this._hass.states[sId]?.attributes?.friendly_name || sId);
        }
      }
      if (openNames.length > 0) {
        this._showArmBlockedAlert(openNames);

        return;
      }
    }

    try {
      await this._send('argus/perform_alarm_action', {
        action: service.replace('alarm_', ''),
        entry_id: e.entry_id
      });
      const modeTxt = modeLabels[action] || action;

      this._sendHaNotif(`🔒 ${this._t('log_armed')} — ${modeTxt}`, this._format('notification_armed', { user: currentUser, mode: modeTxt }));
      setTimeout(() => this._load(), 800);
    } catch (err) {
      // FIX-5: mostrar error real del backend al usuario
      const msg = err?.message || (typeof err === 'string' ? err : JSON.stringify(err));
      this._showArmBlockedAlert([], msg);
      console.error('Argus action failed', err);
    }
  }

  _showArmBlockedAlert(openSensors = [], customMsg = '') {
    // FIX-5: alerta rica con motivo real
    if (customMsg) {
      alert(`🚨 ${this._t('action_failed')}\n\n${customMsg}`);
      return;
    }
    const lines = openSensors.map(n => `  • ${n}`).join('\n');
    alert(
      `🚨 ${this._t('cannot_arm')}\n\n` +
      this._format('open_sensors_explain', { names: lines })
    );
  }

  /* ── Bootstrap Render Methods ─────────────────────────────────────── */
  _renderInitializationError(error) {
    const overlay = this.shadowRoot.getElementById('bootstrap-overlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(this._t('initialization_error_title'))}</h1>
        <p>${this._escapeHtml(this._t('initialization_error_desc'))}</p>
        <div style="font-size:11px;opacity:.55;margin-bottom:16px;word-break:break-word">
          ${this._escapeHtml(error?.message || 'unknown error')}
        </div>
        <button id="btn-retry-argus" class="btn-start" style="width:100%">
          ${this._escapeHtml(this._t('retry_action'))}
        </button>
      </div>
    `;
    this.shadowRoot.getElementById('btn-retry-argus')?.addEventListener('click', () => {
      overlay.style.display = 'none';
      this._dashboard = null;
      this._ensureInitialized();
    });
  }

  _renderMissingConfigurationScreen() {
    const overlay = this.shadowRoot.getElementById('bootstrap-overlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(this._t('setup_required_title'))}</h1>
        <p>${this._escapeHtml(this._t('setup_required_desc'))}</p>
        <button id="btn-open-argus-integration" class="btn-start" style="width:100%">
          ${this._escapeHtml(this._t('setup_required_action'))}
        </button>
      </div>
    `;
    this.shadowRoot.getElementById('btn-open-argus-integration')?.addEventListener('click', () => {
      history.pushState(null, '', '/config/integrations/integration/argus');
      window.dispatchEvent(new CustomEvent('location-changed'));
    });
  }

  _showProfileWelcome() {
    if (this._welcomeShownThisMount || !this._currentProfile?.name) return;
    this._welcomeShownThisMount = true;
    const overlay = this.shadowRoot.getElementById('bootstrap-overlay');
    const message = this._format('welcome_profile', {
      name: this._currentProfile.name,
    });
    overlay.style.display = 'flex';
    overlay.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass" style="animation:cardSlideFadeIn .45s ease">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(message)}</h1>
        <p style="margin-bottom:0">Argus Home Hub</p>
      </div>
    `;
    clearTimeout(this._welcomeTimer);
    this._welcomeTimer = setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.opacity = '';
      }, 300);
    }, 1200);
  }

  _renderFirstRunScreen() {
    const overlay = this.shadowRoot.getElementById('bootstrap-overlay');
    overlay.style.display = 'flex';

    if (this._hass?.user && this._hass.user.is_admin === false) {
      overlay.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass">
          <h1>${this._t('first_run_blocked_title') || 'Acceso denegado'}</h1>
          <p>${this._t('first_run_blocked_desc') || 'Se requiere un administrador de Home Assistant para configurar Argus por primera vez.'}</p>
        </div>
      `;
      return;
    }

    const defaultName = this._hass?.user?.name || "Admin";
    const language = this._getCurrentLangCode();
    const welcomeCopy = {
      es: ['Bienvenido a Argus Home Hub', 'Protección inteligente para lo que más importa.'],
      en: ['Welcome to Argus Home Hub', 'Smart protection for what matters most.'],
      fr: ['Bienvenue dans Argus Home Hub', 'Une protection intelligente pour ce qui compte le plus.'],
      pt: ['Bem-vindo ao Argus Home Hub', 'Proteção inteligente para o que mais importa.'],
      it: ['Benvenuto in Argus Home Hub', 'Protezione intelligente per ciò che conta di più.'],
      zh: ['欢迎使用 Argus Home Hub', '为重要事物提供智能保护。'],
      ru: ['Добро пожаловать в Argus Home Hub', 'Умная защита самого важного.'],
    }[language] || ['Welcome to Argus Home Hub', 'Smart protection for what matters most.'];
    const finishFirstRun = () => {
      overlay.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:420px">
          <div class="argus-first-run-thank-icon">✓</div>
          <h1 style="margin-bottom:10px;font-weight:850">Gracias por usar Argus Home Hub</h1>
          <p style="margin:0">Tu sistema está listo y protegido.</p>
        </div>
      `;
      setTimeout(() => {
        overlay.style.display = 'none';
        this._profileSelectedThisMount = true;
        this._load();
      }, 1500);
    };
    overlay.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:540px;width:92vw">
        <div class="argus-first-run-brand">
          <img class="argus-first-run-logo" src="/api/argus_static/argus_logo.png" alt="Logotipo oficial de Argus">
          <div>
            <h1>${this._escapeHtml(welcomeCopy[0])}</h1>
            <p>${this._escapeHtml(welcomeCopy[1])}</p>
          </div>
        </div>

        <!-- Mode selector tabs -->
        <div style="display:flex;gap:10px;margin-bottom:16px;background:rgba(255,255,255,0.05);padding:4px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
          <button id="tab-setup-fresh" style="flex:1;padding:10px;border-radius:10px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-weight:700;font-size:13px;cursor:pointer">🚀 Configurar desde cero</button>
          <button id="tab-setup-restore" style="flex:1;padding:10px;border-radius:10px;border:none;background:transparent;color:rgba(255,255,255,0.6);font-weight:600;font-size:13px;cursor:pointer">📁 Restaurar Backup</button>
        </div>

        <!-- Fresh Setup View -->
        <div id="view-setup-fresh" class="pin-prompt" style="display:block;border:none;background:transparent;box-shadow:none;padding:0">
          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t('setup_admin_name') || 'Nombre del Administrador')}</label>
          <input type="text" id="setup-admin-name" placeholder="Name" value="${this._escapeHtml(defaultName)}" style="margin-bottom:15px;width:100%" />

          <p style="font-size:12px;opacity:0.8;margin-bottom:10px;line-height:1.4">
            ${this._escapeHtml(this._t('first_run_pin_expl') || 'El PIN de acceso abre Argus. El PIN maestro controla el armado y desarmado.')}
          </p>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t('setup_access_pin') || 'PIN de acceso al panel Argus (Opcional)')}</label>
          <div style="display:flex;gap:10px;margin-bottom:15px">
            <input type="password" id="setup-access-pin" placeholder="PIN (4-12)" style="flex:1" />
            <button id="skip-access-pin" class="btn-cancel" style="width:auto;padding:0 12px;font-size:11px">${this._escapeHtml(this._t('first_run_skip') || 'Omitir')}</button>
          </div>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t('setup_master_pin') || 'PIN maestro para armar/desarmar (Opcional)')}</label>
          <div style="display:flex;gap:10px;margin-bottom:20px">
            <input type="password" id="setup-master-pin" placeholder="PIN (4-12)" style="flex:1" />
            <button id="skip-master-pin" class="btn-cancel" style="width:auto;padding:0 12px;font-size:11px">${this._escapeHtml(this._t('first_run_skip') || 'Omitir')}</button>
          </div>

          <button id="btn-complete-setup" class="btn-start" style="width:100%">${this._escapeHtml(this._t('first_run_start') || 'Comenzar con Argus')}</button>
        </div>

        <!-- Restore Backup View -->
        <div id="view-setup-restore" style="display:none;padding:10px 0;text-align:center">
          <p style="font-size:13px;opacity:0.8;margin-bottom:16px;line-height:1.4">
            Suba un archivo de copia de seguridad de Argus (<code>.json</code>) para restaurar automáticamente todos sus perfiles, configuraciones, PINs y temas almacenados.
          </p>
          <input type="file" id="setup-restore-file" accept=".json,.argus,application/json" style="display:none" />
          <button id="btn-trigger-restore" class="btn-start" style="width:100%;padding:14px;font-size:14px;display:flex;align-items:center;justify-content:center;gap:8px">
            📁 Seleccionar copia de seguridad Argus (.json o .argus)
          </button>
          <div id="restore-status" style="margin-top:12px;font-size:12px;min-height:20px"></div>
        </div>
      </div>
    `;

    const tabFresh = this.shadowRoot.getElementById('tab-setup-fresh');
    const tabRestore = this.shadowRoot.getElementById('tab-setup-restore');
    const viewFresh = this.shadowRoot.getElementById('view-setup-fresh');
    const viewRestore = this.shadowRoot.getElementById('view-setup-restore');

    tabFresh?.addEventListener('click', () => {
      tabFresh.style.background = 'rgba(255,255,255,0.15)';
      tabFresh.style.color = '#fff';
      tabRestore.style.background = 'transparent';
      tabRestore.style.color = 'rgba(255,255,255,0.6)';
      viewFresh.style.display = 'block';
      viewRestore.style.display = 'none';
    });

    tabRestore?.addEventListener('click', () => {
      tabRestore.style.background = 'rgba(255,255,255,0.15)';
      tabRestore.style.color = '#fff';
      tabFresh.style.background = 'transparent';
      tabFresh.style.color = 'rgba(255,255,255,0.6)';
      viewRestore.style.display = 'block';
      viewFresh.style.display = 'none';
    });

    this.shadowRoot.getElementById('skip-access-pin')?.addEventListener('click', () => {
      this.shadowRoot.getElementById('setup-access-pin').value = '';
    });

    this.shadowRoot.getElementById('skip-master-pin')?.addEventListener('click', () => {
      this.shadowRoot.getElementById('setup-master-pin').value = '';
    });

    this.shadowRoot.getElementById('btn-complete-setup')?.addEventListener('click', async () => {
      const admin_name = this.shadowRoot.getElementById('setup-admin-name').value || defaultName;
      const master_pin = this.shadowRoot.getElementById('setup-master-pin').value || undefined;
      const access_pin = this.shadowRoot.getElementById('setup-access-pin').value || undefined;
      try {
        await this._send('argus/complete_first_run', { admin_name, master_pin, access_pin });
        finishFirstRun();
      } catch (err) {
        alert("Setup failed: " + err.message);
      }
    });

    // Handle Restore Backup File Upload
    const restoreInput = this.shadowRoot.getElementById('setup-restore-file');
    const restoreStatus = this.shadowRoot.getElementById('restore-status');

    this.shadowRoot.getElementById('btn-trigger-restore')?.addEventListener('click', () => {
      restoreInput?.click();
    });

    restoreInput?.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      if (restoreStatus) restoreStatus.textContent = 'Procesando copia de seguridad...';
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          let config = JSON.parse(e.target.result);
          if (config?.format === 'argus-encrypted-backup') {
            const password = await this._showArgusInputModal({
              title: 'Copia de seguridad cifrada',
              label: 'Introduce la contraseña del backup:',
              type: 'password'
            });
            if (!password) {
              if (restoreStatus) restoreStatus.textContent = 'Restauración cancelada.';
              return;
            }
            try {
              const salt = this._base64ToBytes(config.salt);
              const iv = this._base64ToBytes(config.iv);
              const key = await this._backupKey(password, salt, ['decrypt']);
              const plain = await crypto.subtle.decrypt({name:'AES-GCM',iv}, key, this._base64ToBytes(config.data));
              config = JSON.parse(new TextDecoder().decode(plain));
            } catch (_) {
              throw new Error('Contraseña de copia de seguridad incorrecta.');
            }
          }

          if (typeof config !== 'object' || config === null) {
            throw new Error(this._t('invalid_config'));
          }

          await this._send('argus/restore_config', { config });

          if (restoreStatus) restoreStatus.textContent = '✅ Copia de seguridad restaurada con éxito.';
          finishFirstRun();
        } catch (err) {
          if (restoreStatus) restoreStatus.textContent = '❌ Error al restaurar: ' + (err.message || err);
        }
      };
      reader.onerror = () => {
        if (restoreStatus) restoreStatus.textContent = '❌ Error al leer el archivo.';
      };
      reader.readAsText(file);
    });
  }

  _renderLegacyClaimScreen() {
    const overlay = this.shadowRoot.getElementById('bootstrap-overlay');
    overlay.style.display = 'flex';
    overlay.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <h1>${this._t('claim_title') || 'Argus Security Update'}</h1>
        <p>${this._t('claim_desc') || 'Your installation needs an administrator to claim access.'}</p>
        <button id="btn-claim-admin" class="btn-claim">${this._t('claim_btn') || 'Claim Administration'}</button>
      </div>
    `;
    this.shadowRoot.getElementById('btn-claim-admin').addEventListener('click', async () => {
      try {
        await this._send('argus/claim_legacy_administration');
        overlay.style.display = 'none';
        this._profileSelectedThisMount = true;
        this._load();
      } catch (err) {
        alert("Claim failed: " + err.message);
      }
    });
  }

  _renderLoginScreen(bootstrap) {
    const overlay = this.shadowRoot.getElementById('bootstrap-overlay');
    overlay.style.display = 'flex';

    const users = bootstrap.users || [];
    const haUserId = bootstrap.ha_user_id || null;

    // Build user cards — highlight own profile, render picture, and online status
    const usersHtml = users.map(u => {
      const isOwn = u.is_own_profile === true;
      const ownBadge = isOwn
        ? `<div class="profile-own-badge">${this._escapeHtml(this._t('profile_is_yours'))}</div>`
        : '';
      const lockIcon = u.access_pin_configured ? ' 🔒' : '';
      const roleLabel = u.role === 'admin'
        ? this._escapeHtml(this._t('role_argus_admin'))
        : this._escapeHtml(this._t('role_argus_standard'));

      const avatarHtml = u.picture
        ? `<img src="${this._escapeHtml(u.picture)}" alt="${this._escapeHtml(u.name)}" style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.2);box-shadow:0 4px 12px rgba(0,0,0,0.3)"/>`
        : `<div class="user-avatar">${this._escapeHtml(u.name.substring(0, 2).toUpperCase())}</div>`;

      const statusDot = u.online !== false
        ? `<span title="Online / Conectado" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#34c759;box-shadow:0 0 8px #34c759;margin-right:5px"></span>`
        : `<span title="Offline / Ausente" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ff9500;box-shadow:0 0 8px #ff9500;margin-right:5px"></span>`;

      const ariaStatus = isOwn
        ? this._t('profile_is_yours')
        : (u.access_pin_configured ? this._t('profile_needs_pin') : this._t('profile_no_pin_access'));
      const ariaLabelText = `${u.name}, ${roleLabel}, ${ariaStatus}`;

      return `
        <div class="user-card${isOwn ? ' user-card-own' : ''}"
             data-user-id="${this._escapeHtml(u.id)}"
             data-is-own="${isOwn ? 'true' : 'false'}"
             data-pin-required="${u.access_pin_configured ? 'true' : 'false'}"
             tabindex="0"
             role="button"
             aria-label="${this._escapeHtml(ariaLabelText)}">
          ${avatarHtml}
          <div class="user-name" style="margin-top:6px;display:flex;align-items:center;justify-content:center">${statusDot}${this._escapeHtml(u.name)}${lockIcon}</div>
          <div class="user-role-label">${roleLabel}</div>
          ${ownBadge}
          <a href="/config/person" target="_top" class="ha-person-link" style="font-size:10px;color:rgba(255,255,255,0.55);text-decoration:underline;margin-top:4px;display:inline-block" onclick="event.stopPropagation()">📷 Cambiar foto en HA ↗</a>
        </div>
      `;
    }).join('');

    overlay.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass" style="max-width:520px;width:92vw">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:4px">
          <img src="/api/argus_static/argus_logo.png" alt="Argus" style="height:36px;border-radius:8px;flex-shrink:0">
          <div>
            <h1 style="margin:0;font-size:1.35rem;font-weight:900">${this._escapeHtml(this._t('select_profile_title'))}</h1>
            <p style="margin:4px 0 0;font-size:0.82rem;opacity:0.65">${this._escapeHtml(this._t('select_profile_subtitle'))}</p>
          </div>
        </div>
        <div class="user-selector-grid" style="margin-top:18px">
          ${usersHtml}
        </div>
        <button id="btn-exit-to-ha" class="btn-cancel"
                style="margin:18px 0 0;width:100%">
          ← ${this._escapeHtml(this._t('exit_to_ha'))}
        </button>
        <div id="pin-prompt" class="pin-prompt" style="display:none;margin-top:16px;animation:fadeIn .25s ease">
          <div id="pin-prompt-label" style="font-size:13px;opacity:0.85;margin-bottom:8px;text-align:center;font-weight:600"></div>
          <input type="password" id="login-pin-input" placeholder="${this._escapeHtml(this._t('pin_placeholder'))}" inputmode="numeric" pattern="[0-9]*" readonly
                 style="width:100%;box-sizing:border-box;text-align:center;font-size:1.4rem;letter-spacing:0.3em;padding:10px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.07);color:inherit;outline:none;margin-bottom:12px"/>

          <div class="pin-grid" id="login-pin-pad" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px">
            <button class="pin-btn-round" type="button" data-login-digit="1" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">1</button>
            <button class="pin-btn-round" type="button" data-login-digit="2" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">2</button>
            <button class="pin-btn-round" type="button" data-login-digit="3" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">3</button>
            <button class="pin-btn-round" type="button" data-login-digit="4" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">4</button>
            <button class="pin-btn-round" type="button" data-login-digit="5" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">5</button>
            <button class="pin-btn-round" type="button" data-login-digit="6" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">6</button>
            <button class="pin-btn-round" type="button" data-login-digit="7" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">7</button>
            <button class="pin-btn-round" type="button" data-login-digit="8" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">8</button>
            <button class="pin-btn-round" type="button" data-login-digit="9" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">9</button>
            <button class="pin-btn-round" type="button" id="btn-login-pin-backspace" style="padding:14px;font-size:1rem;border-radius:12px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,59,48,0.2);color:#ff453a;cursor:pointer">⌫</button>
            <button class="pin-btn-round" type="button" data-login-digit="0" style="padding:14px;font-size:1.2rem;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer">0</button>
            <button class="pin-btn-round" type="button" id="btn-submit-login-pin" style="padding:14px;font-size:1rem;border-radius:12px;border:1px solid rgba(52,199,89,0.3);background:rgba(52,199,89,0.25);color:#34c759;font-weight:700;cursor:pointer">✓</button>
          </div>

          <div style="display:flex;gap:8px;justify-content:center">
            <button id="btn-cancel-login" class="btn-cancel" style="width:100%">${this._escapeHtml(this._t('cancel_btn'))}</button>
          </div>
          <div id="login-pin-error" style="color:#ff453a;font-size:12px;min-height:18px;text-align:center;margin-top:6px"></div>
        </div>
      </div>
    `;

    const pinPrompt = this.shadowRoot.getElementById('pin-prompt');
    const pinInput = this.shadowRoot.getElementById('login-pin-input');
    const pinLabel = this.shadowRoot.getElementById('pin-prompt-label');
    const pinError = this.shadowRoot.getElementById('login-pin-error');
    const grid = this.shadowRoot.querySelector('.user-selector-grid');
    let selectedUserId = null;

    this.shadowRoot.getElementById('btn-exit-to-ha')?.addEventListener('click', () => {
      window.location.assign('/');
    });

    // Wire numeric keypad dial buttons
    this.shadowRoot.querySelectorAll('[data-login-digit]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (pinInput && pinInput.value.length < 8) {
          pinInput.value += btn.getAttribute('data-login-digit');
        }
      });
    });

    this.shadowRoot.getElementById('btn-login-pin-backspace')?.addEventListener('click', () => {
      if (pinInput) pinInput.value = pinInput.value.slice(0, -1);
    });

    const _showGrid = () => {
      selectedUserId = null;
      if (pinInput) pinInput.value = '';
      if (pinError) pinError.textContent = '';
      if (pinPrompt) pinPrompt.style.display = 'none';
      if (grid) grid.style.display = 'grid';
    };

    const _showPinPrompt = (label) => {
      if (pinLabel) pinLabel.textContent = label;
      if (pinError) pinError.textContent = '';
      if (pinPrompt) pinPrompt.style.display = 'block';
      if (grid) grid.style.display = 'none';
      if (pinInput) { pinInput.value = ''; }
    };

    this.shadowRoot.querySelectorAll('.user-card').forEach(el => {
      el.addEventListener('click', async () => {
        const userId = el.getAttribute('data-user-id');
        const isOwn = el.getAttribute('data-is-own') === 'true';
        const pinRequired = el.getAttribute('data-pin-required') === 'true';

        if (isOwn) {
          // Own profile — direct select (no PIN needed unless configured)
          if (pinRequired) {
            selectedUserId = userId;
            _showPinPrompt(this._t('profile_needs_pin'));
          } else {
            try {
              await this._send('argus/select_profile', { argus_user_id: userId });
              overlay.style.display = 'none';
              this._profileSelectedThisMount = true;
              this._load();
            } catch (err) {
              if (pinError) pinError.textContent = err.message || '❌';
            }
          }
        } else {
          // Foreign profile
          if (!pinRequired) {
            // No PIN → reject client-side immediately (backend also rejects)
            if (pinError) { pinError.textContent = this._t('profile_no_pin_access'); pinError.style.display = 'block'; }
            el.style.animation = 'none';
            el.offsetWidth; // reflow
            el.style.animation = 'shake .3s ease';
            return;
          }
          // Has PIN → prompt
          selectedUserId = userId;
          _showPinPrompt(this._t('profile_needs_pin'));
        }
      });

      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') el.click(); });
    });

    this.shadowRoot.getElementById('btn-cancel-login').addEventListener('click', _showGrid);

    this.shadowRoot.getElementById('btn-submit-login-pin').addEventListener('click', async () => {
      if (!selectedUserId || !pinInput.value) return;
      if (pinError) pinError.textContent = '';
      try {
        await this._send('argus/verify_access_pin', { argus_user_id: selectedUserId, pin: pinInput.value });
        overlay.style.display = 'none';
        this._profileSelectedThisMount = true;
        this._load();
      } catch (err) {
        if (pinError) pinError.textContent = '❌ ' + (err.message || 'Error');
        if (pinInput) { pinInput.value = ''; pinInput.focus(); }
      }
    });

    // Allow Enter key in PIN input
    if (pinInput) {
      pinInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') this.shadowRoot.getElementById('btn-submit-login-pin').click();
      });
    }
  }


  /* ── HA Notifications helper ─────────────────────────────────────── */
  _sendHaNotif(title, message) {
    if (!this._notifTargets.length) return;
    for (const target of this._notifTargets) {
      this._hass.callService('notify', target, { title, message }).catch(() => {});
    }
  }

  _initWidgetGrid() {
    try {
      this._widgetConfig = JSON.parse(localStorage.getItem('argus-widgets-v1')) || [
        { id: 'activity', size: 'M', hidden: false },
        { id: 'modes', size: 'M', hidden: false },
        { id: 'automations', size: 'M', hidden: false },
        { id: 'access', size: 'M', hidden: false },
        { id: 'backup', size: 'S', hidden: false },
        { id: 'github', size: 'S', hidden: false }
      ];
    } catch(e) {
      this._widgetConfig = [
        { id: 'activity', size: 'M', hidden: false },
        { id: 'modes', size: 'M', hidden: false },
        { id: 'automations', size: 'M', hidden: false },
        { id: 'access', size: 'M', hidden: false },
        { id: 'backup', size: 'S', hidden: false },
        { id: 'github', size: 'S', hidden: false }
      ];
    }

    const grid = this.shadowRoot.getElementById('widget-grid');
    if (!grid) return;

    const panels = Array.from(grid.children).filter(el =>
      el.classList.contains('panel') && !el.classList.contains('dashboard-instances')
    );

    panels.forEach(panel => {
      const wId = panel.id.replace('w-', '');
      if (!panel.querySelector('.panel-edit-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'panel-edit-overlay';

        const controls = document.createElement('div');
        controls.className = 'widget-controls';

        const title = document.createElement('div');
        title.className = 'widget-controls-title';
        const h2Text = panel.querySelector('h2')?.textContent;
        title.textContent = h2Text ? `Widget: ${h2Text}` : `Widget: ${wId.toUpperCase()}`;
        controls.appendChild(title);

        const dragHandle = document.createElement('div');
        dragHandle.className = 'widget-drag-handle';
        dragHandle.innerHTML = '⋮⋮ Arrastrar';
        dragHandle.title = 'Arrastrar para mover';

        const sizesDiv = document.createElement('div');
        sizesDiv.className = 'widget-sizes';

        ['S', 'M', 'L', 'XL'].forEach(sz => {
          const btn = document.createElement('button');
          btn.className = 'widget-size-btn';
          btn.textContent = sz;
          btn.dataset.size = sz;
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            this._changeWidgetSize(wId, sz);
          });
          sizesDiv.appendChild(btn);
        });

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'widget-toggle-btn';
        toggleBtn.textContent = 'Ocultar';
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this._toggleWidgetVisibility(wId);
        });

        controls.appendChild(dragHandle);
        controls.appendChild(sizesDiv);
        controls.appendChild(toggleBtn);
        overlay.appendChild(controls);
        panel.appendChild(overlay);
      }
    });

    this._renderWidgetLayout();
    this._bindWidgetDragEvents(panels);
  }

  _renderWidgetLayout() {
    const grid = this.shadowRoot.getElementById('widget-grid');
    if (!grid) return;

    const configMap = new Map((this._widgetConfig || []).map((w, idx) => [w.id, { ...w, idx }]));

    const children = Array.from(grid.children).filter(el =>
      el.classList.contains('panel') && !el.classList.contains('dashboard-instances')
    );

    children.sort((a, b) => {
      const aCfg = configMap.get(a.id.replace('w-', '')) || { idx: 99 };
      const bCfg = configMap.get(b.id.replace('w-', '')) || { idx: 99 };
      return aCfg.idx - bCfg.idx;
    });

    children.forEach(child => {
      grid.appendChild(child);
      const wId = child.id.replace('w-', '');
      const cfg = configMap.get(wId);
      if (cfg) {
        child.setAttribute('data-size', cfg.size);
        child.style.display = cfg.hidden ? 'none' : '';

        const overlay = child.querySelector('.panel-edit-overlay');
        if (overlay) {
          overlay.querySelectorAll('.widget-size-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === cfg.size);
          });
          const toggleBtn = overlay.querySelector('.widget-toggle-btn');
          if (toggleBtn) {
            toggleBtn.textContent = cfg.hidden ? 'Mostrar' : 'Ocultar';
            toggleBtn.style.background = cfg.hidden ? 'rgba(52,199,89,.85)' : 'rgba(220,38,38,.85)';
          }
        }
      }
    });

    grid.classList.toggle('editing', !!this._widgetEditing);
  }

  _bindWidgetDragEvents(panels) {
    const grid = this.shadowRoot.getElementById('widget-grid');
    if (!grid) return;

    const list = panels || Array.from(grid.children).filter(el =>
      el.classList.contains('panel') && !el.classList.contains('dashboard-instances')
    );

    list.forEach(panel => {
      if (panel._dragBound) return;
      panel._dragBound = true;

      panel.addEventListener('dragstart', (e) => {
        if (!this._widgetEditing) { e.preventDefault(); return; }
        panel.classList.add('dragging');
        e.dataTransfer.setData('text/plain', panel.id);
        e.dataTransfer.effectAllowed = 'move';
      });

      panel.addEventListener('dragend', () => {
        panel.classList.remove('dragging');
        this._saveWidgetLayout();
      });

      panel.addEventListener('dragover', (e) => {
        if (!this._widgetEditing) return;
        e.preventDefault();
        const dragging = grid.querySelector('.dragging');
        if (!dragging || dragging === panel) return;
        const rect = panel.getBoundingClientRect();
        if ((e.clientY - rect.top) > rect.height / 2) {
          panel.after(dragging);
        } else {
          panel.before(dragging);
        }
      });
    });
  }

  _saveWidgetLayout() {
    const grid = this.shadowRoot.getElementById('widget-grid');
    if (!grid) return;
    const children = Array.from(grid.children).filter(el =>
      el.classList.contains('panel') && !el.classList.contains('dashboard-instances')
    );
    this._widgetConfig = children.map(child => ({
      id: child.id.replace('w-', ''),
      size: child.getAttribute('data-size') || 'M',
      hidden: child.style.display === 'none'
    }));
    try { localStorage.setItem('argus-widgets-v1', JSON.stringify(this._widgetConfig)); } catch(e) {}
  }

  _toggleWidgetEditing() {
    this._widgetEditing = !this._widgetEditing;
    const grid = this.shadowRoot.getElementById('widget-grid');
    if (grid) {
      this._initWidgetGrid();
      this._renderWidgetLayout();
    }
    this._applyTranslations();
  }

  _changeWidgetSize(id, size) {
    const cfg = (this._widgetConfig || []).find(w => w.id === id);
    if (cfg) {
      cfg.size = size;
      this._saveWidgetLayout();
      this._renderWidgetLayout();
    }
  }

  _toggleWidgetVisibility(id) {
    const cfg = (this._widgetConfig || []).find(w => w.id === id);
    if (cfg) {
      cfg.hidden = !cfg.hidden;
      this._saveWidgetLayout();
      this._renderWidgetLayout();
    }
  }

}

customElements.define('argus-panel-v2011', ArgusPanel);
