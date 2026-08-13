const ie = [
  { code: "auto", flag: "🏠", label: "Home Assistant" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ru", flag: "🇷🇺", label: "Русский" }
], w = {
  es: {
    hero_desc: "Sistema integral de seguridad, control de acceso, automatizaciones y HomeKit.",
    instances: "Instancias activas",
    modes: "Modos",
    automations: "⚡ Automatizaciones",
    linked_rules: "Reglas vinculadas a Argus",
    create_ha: "+ Crear en HA",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ Ajustes",
    change_pin: "PIN Maestro",
    pin_desc: "Código numérico para armar y desarmar.",
    new_pin: "Nuevo PIN",
    confirm_pin: "Confirmar PIN",
    update_pin: "Actualizar PIN",
    current_pin: "PIN actual",
    notifications_title: "🔔 Notificaciones",
    notif_desc: "Selecciona los dispositivos móviles registrados en HA que recibirán alertas de Argus.",
    save_notif: "Guardar",
    users_title: "👥 Usuarios y Control de Acceso",
    admin_only: "Solo administradores pueden modificar esta sección.",
    add_user: "Agregar usuario",
    username: "Nombre de Usuario",
    user_pin: "PIN de usuario",
    is_admin: "Administrador",
    save_user: "Guardar",
    no_users: "Sin usuarios adicionales configurados.",
    homekit_title: "🏠 HomeKit",
    close: "Cerrar",
    search_placeholder: "Buscar por nombre, área o entity_id",
    available: "Disponibles",
    selected_lbl: "Seleccionadas",
    clear: "Limpiar",
    accept: "Aceptar",
    introduce_pin: "Introduce tu PIN",
    pin_modal_desc: "PIN numérico para desarmar Argus",
    confirm: "✓ Confirmar",
    cancel: "Cancelar",
    disarmed: "Desarmado",
    armed_home: "En Casa",
    armed_away: "Ausente",
    armed_night: "Noche",
    armed_vacation: "Vacaciones",
    triggered: "¡ALARMA!",
    pending: "Cuenta regresiva",
    arming: "Armando",
    unavailable: "No disponible",
    sync_panel_section: "Paneles Sincronizados",
    sync_panel_help: "Paneles de alarma que seguirán el mismo estado de Argus",
    sensor_section: "Sensores de Intrusión",
    siren_section: "Sirenas",
    thermostat_alert_notif: "🌡️ Alerta de temperatura",
    none_selected: "Ninguno seleccionado",
    search_select: "Buscar y seleccionar",
    save_mode: "💾 Guardar modo",
    details_notif: "Notificación de alarma",
    activity_log: "📋 Historial de Actividad",
    log_armed: "Armado",
    log_disarmed: "Desarmado",
    log_triggered: "¡Disparado!",
    log_by: "por",
    log_sensor: "Sensor",
    log_no_events: "Sin eventos recientes.",
    mode_home: "En Casa",
    mode_away: "Ausente",
    mode_night: "Noche",
    mode_vacation: "Vacaciones",
    homekit_bridge: "Puente HomeKit",
    homekit_not_paired: "No vinculado a ninguna casa.",
    homekit_house: "Casa de Apple Home",
    language: "Idioma",
    lang_select_title: "Seleccionar Idioma",
    btn_home: "🏠 EN CASA",
    btn_away: "🔒 AUSENTE",
    btn_night: "🌙 NOCHE",
    btn_vacation: "✈️ VACACIONES",
    btn_disarmed: "DESARMADO",
    btn_sos: "🚨 SOS / PÁNICO",
    system_armed: "SISTEMA ARMADO",
    system_disarmed: "SISTEMA DESARMADO",
    home_name_lbl: "Nombre del Hogar",
    background_lbl: "Fondo",
    edit_btn: "✏️ Editar",
    save_btn: "Guardar",
    backup_title: "Respaldo y Restauración",
    backup_desc: "Guarda una copia de seguridad de tus ajustes o restaura una anterior.",
    export_btn: "📤 Descargar",
    import_btn: "📥 Restaurar",
    reset_btn: "⚠️ Restablecer",
    undo_reset_btn: "↩️ Deshacer Restablecimiento",
    access_title: "Control de Acceso y Usuarios",
    access_desc: "Gestión global de seguridad, PIN maestro y administradores.",
    pin_master_title: "PIN Maestro",
    pin_active_yes: "PIN Maestro: Activo",
    pin_active_no: "PIN Maestro: Desactivado",
    select_all: "☑ Todos",
    deselect_all: "☐ Ninguno",
    mqtt_label: "MQTT",
    arm_time_label: "Tiempo armado (s)",
    disarm_time_label: "Retraso de entrada (s)",
    pin_incorrect: "❌ PIN actual incorrecto",
    pin_updated: "✓ PIN Actualizado",
    pin_deleted: "✓ PIN Eliminado",
    searching_auto: "↻ Buscando automatizaciones...",
    no_auto_linked: "No hay automatizaciones vinculadas a Argus.",
    pin_remove_hint: "Para quitar el PIN: Introduce el actual y deja los campos de abajo vacíos.",
    lbl_load_file: "Cargar archivo:",
    lbl_aesthetic_custom: "Personalización Estética",
    lbl_uploaded_files: "Archivos subidos en servidor",
    bypass_lbl: "🚫 Omitir",
    lock_if_open: "Bloquear si abiertos",
    wait_if_open: "Esperar armado en espera",
    select_btn: "+ Seleccionar",
    add_btn: "+ Añadir",
    sensors_to_bypass: "Sensores a Omitir",
    no_instances: "No hay instancias. Agrega Argus desde Integraciones.",
    fullscreen_title: "Pantalla completa",
    sos_slide: "Desliza para activar SOS",
    sos_confirm_title: "Confirmar pánico",
    sos_confirm_text: "Desliza para disparar la alarma inmediatamente.",
    sos_call: "📞 Llamar a Emergencias",
    home_name_modal_title: "🏡 Nombre del Hogar",
    home_name_modal_desc: "Este nombre aparece en el panel de instancias y en pantalla completa.",
    home_name_label: "Nombre del Hogar",
    home_name_placeholder: "Mi Casa",
    clear_log_btn: "BORRAR",
    bg_weather: "Clima animado",
    bg_none: "Predeterminado",
    bg_panel_none: "Sin fondo",
    bg_photo: "Una foto",
    bg_collage: "Collage",
    bg_video: "Video en loop",
    bg_panel_title: "Fondo para panel",
    bg_hub_title: "Fondo Argus",
    bg_sound_opt: "Sonido de video",
    bg_image_opt: "Imagen / GIF",
    bg_hub_default: "Predeterminado (Argus)",
    forgot_pin: "¿Olvidaste tu PIN?",
    pin_reset_admin_only: "❌ Error: Solo los administradores de Home Assistant pueden restablecer el PIN maestro.",
    pin_reset_confirm: "¿Estás seguro de que deseas restablecer el PIN maestro? Se eliminará el PIN actual y se desactivará.",
    temp_auto: "Automático (sensor local / termostato / clima)",
    temp_thermostat: "(termostato)",
    battery_low: "⚠️ Batería baja",
    times_section: "⏱️ Tiempos",
    arm_time: "Armado (s)",
    disarm_time: "Retraso de entrada (s)",
    save_config: "GUARDAR CONFIGURACIÓN",
    never_triggered: "Nunca activada",
    bridge_paired: "Puente configurado",
    bridge_paired_desc: "El puente <b>{bridge}</b> está configurado en Home Assistant. Home Assistant no permite comprobar desde aquí si fue añadido a Apple Home ni conocer su nombre.",
    bridge_not_connected: "Puente no configurado",
    bridge_not_desc: "Activa la integración HomeKit Bridge en Home Assistant e incluye la entidad <code>alarm_control_panel.argus_*</code> para generar un código QR de emparejamiento.",
    manual_disarm: "Manual (Desarmado)",
    manual_arm: "Manual",
    open_sensors: "Sensores abiertos",
    log_detail_disarm: "Sistema desarmado",
    alarm_instance: "Instancia de Alarma",
    log_detail_armed: "Modo",
    log_detail_triggered: "Activación automática",
    user_exp_type: "Vencimiento",
    user_exp_date: "Fecha/Hora de Vencimiento",
    exp_indefinite: "Indefinido",
    exp_temporary: "Temporal (Fecha/Hora)",
    expired: "Expirado",
    active_until: "Vence",
    log_detail_pin_reset: "PIN maestro restablecido por el administrador",
    log_detail_pin_reset_failed: "Intento no autorizado de restablecer el PIN maestro",
    badge_pin_reset: "PIN Restablecido",
    badge_pin_reset_failed: "Fallo Reset PIN",
    no_files_uploaded: "Sin archivos subidos. Carga un fondo usando los controles de arriba.",
    no_files_uploaded_short: "Sin archivos subidos.",
    files_count: "{count} archivos",
    files_count_short: "{count} arch.",
    file_delete_confirm: '¿Seguro que deseas borrar "{filename}" permanentemente?',
    use_for_panel: "Panel",
    use_for_hub: "Argus",
    delete_btn_title: "Borrar de almacenamiento",
    bg_panel_selected_from_history: "Fondo de panel seleccionado desde historial.",
    bg_hub_selected_from_history: "Fondo Argus seleccionado desde historial.",
    error_loading_uploaded_files: "Error al cargar historial de archivos.",
    welcome_greeting: "Bienvenido/a,",
    select_profile_title: "Selecciona tu perfil",
    select_profile_subtitle: "Accede a tus paneles e instancias de seguridad de Argus.",
    exit_to_ha: "Volver a Home Assistant",
    role_argus_admin: "Administrador de Argus",
    role_argus_user: "Usuario estándar",
    ha_account_linked: "Cuenta de Home Assistant: {name}",
    ha_account_unavailable: "Vinculación no disponible",
    user_role_label: "Rol Argus",
    delete_user_tooltip: "Eliminar perfil de usuario",
    delete_user_confirm: '¿Estás seguro de que deseas eliminar a "{name}"?',
    cannot_delete_last_admin: "No se puede eliminar el último administrador vinculante.",
    clock_format_label: "Formato de hora",
    clock_format_desc: "Elige cómo se muestran las horas en el panel y el historial.",
    clock_auto: "Automático (Home Assistant)",
    clock_12h: "12 horas (AM/PM)",
    clock_24h: "24 horas",
    unlock_kiosk: "Desbloquear kiosco",
    first_run_welcome: "Gracias por elegir Argus Home Hub. Bienvenido/a.",
    first_run_desc: "Complete la configuración inicial para asegurar su hogar.",
    first_run_pin_expl: "El PIN de acceso abre Argus. El PIN maestro controla el armado y desarmado.",
    first_run_skip: "Omitir",
    first_run_start: "Comenzar con Argus",
    first_run_blocked_title: "Acceso denegado",
    first_run_blocked_desc: "Se requiere un administrador de Home Assistant para configurar Argus por primera vez.",
    log_action_first_run_completed: "Argus inicializado por {user}",
    log_action_fullscreen_unlocked: "Kiosco desbloqueado por {user}",
    log_action_master_pin_rejected: "Intento incorrecto de PIN maestro por {user}",
    log_action_select_profile: "Perfil seleccionado: {user}",
    log_action_verify_access_pin: "PIN de acceso verificado por {user}",
    log_action_sos: "Pánico SOS activado por {user}",
    log_action_stop_sos: "Pánico SOS detenido por {user}",
    log_action_save_ui: "Ajustes de UI guardados por {user}",
    log_action_rejected: "Acción rechazada",
    unlinked_ha_accounts_title: "Cuentas de Home Assistant sin perfil Argus",
    btn_create_argus_profile: "Crear perfil Argus",
    no_unlinked_ha_accounts: "Todas las cuentas de Home Assistant activas tienen perfil.",
    profile_is_yours: "Este es tu perfil",
    profile_needs_pin: "Perfil ajeno — introduce el PIN de acceso",
    profile_no_pin_access: "Este perfil no tiene PIN de acceso. No puedes abrirlo.",
    ha_role_admin: "Admin HA",
    ha_role_standard: "Usuario HA",
    login_btn: "Iniciar sesión",
    cancel_btn: "Cancelar",
    pin_placeholder: "PIN de acceso",
    link_ha_user: "Vincular a Usuario Home Assistant",
    ha_admin_label: "Home Assistant Admin",
    ha_standard_user_label: "Standard HA User",
    role_argus_standard: "Usuario estándar"
  },
  en: {
    hero_desc: "Alarm control, modes and automations.",
    instances: "Active Instances",
    modes: "Modes",
    automations: "⚡ Automations",
    linked_rules: "Argus-linked Rules",
    create_ha: "+ Create in HA",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ Settings",
    change_pin: "Master PIN",
    pin_desc: "Numeric code to arm and disarm.",
    new_pin: "New PIN",
    confirm_pin: "Confirm PIN",
    update_pin: "Update PIN",
    current_pin: "Current PIN",
    notifications_title: "🔔 Notifications",
    notif_desc: "Select the mobile devices registered in HA that will receive Argus alerts.",
    save_notif: "Save",
    users_title: "👥 Users & Access Control",
    admin_only: "Only administrators can modify this section.",
    add_user: "Add user",
    username: "Username",
    user_pin: "User PIN",
    is_admin: "Administrator",
    save_user: "Save",
    no_users: "No additional users configured.",
    homekit_title: "🏠 HomeKit",
    close: "Close",
    search_placeholder: "Search by name, area or entity_id",
    available: "Available",
    selected_lbl: "Selected",
    clear: "Clear",
    accept: "Accept",
    introduce_pin: "Enter your PIN",
    pin_modal_desc: "Numeric PIN to disarm Argus",
    confirm: "✓ Confirm",
    cancel: "Cancel",
    disarmed: "Disarmed",
    armed_home: "Home",
    armed_away: "Away",
    armed_night: "Night",
    armed_vacation: "Vacation",
    triggered: "ALARM!",
    pending: "Pending",
    arming: "Arming",
    unavailable: "Unavailable",
    sensor_section: "Intrusion Sensors",
    siren_section: "Sirens",
    thermostat_alert_notif: "🌡️ Temperature alert",
    none_selected: "None selected",
    search_select: "Search & select",
    save_mode: "💾 Save mode",
    details_notif: "Alarm notification",
    activity_log: "📋 Activity Log",
    log_armed: "Armed",
    log_disarmed: "Disarmed",
    log_triggered: "Triggered!",
    log_by: "by",
    log_sensor: "Sensor",
    log_no_events: "No recent events.",
    mode_home: "Home",
    mode_away: "Away",
    mode_night: "Night",
    mode_vacation: "Vacation",
    homekit_bridge: "HomeKit Bridge",
    homekit_not_paired: "Not paired to any home.",
    homekit_house: "Apple Home",
    language: "Language",
    lang_select_title: "Select Language",
    btn_home: "🏠 HOME",
    btn_away: "🔒 AWAY",
    btn_night: "🌙 NIGHT",
    btn_vacation: "✈️ VACATION",
    btn_disarmed: "DISARMED",
    btn_sos: "🚨 SOS / PANIC",
    system_armed: "SYSTEM ARMED",
    system_disarmed: "SYSTEM DISARMED",
    home_name_lbl: "Home Name",
    background_lbl: "Background",
    edit_btn: "✏️ Edit",
    save_btn: "Save",
    backup_title: "Backup & Restore",
    backup_desc: "Save a backup of your settings or restore a previous one.",
    export_btn: "📤 Download",
    import_btn: "📥 Restore",
    reset_btn: "⚠️ Factory Reset",
    undo_reset_btn: "↩️ Undo Reset",
    access_title: "Access Control & Users",
    access_desc: "Global security management, master PIN and administrators.",
    pin_master_title: "Master PIN",
    pin_active_yes: "Master PIN: Active",
    pin_active_no: "Master PIN: Deactivated",
    select_all: "☑ All",
    deselect_all: "☐ None",
    mqtt_label: "MQTT",
    arm_time_label: "Arm time (s)",
    disarm_time_label: "Entry delay (s)",
    pin_incorrect: "❌ Incorrect current PIN",
    pin_updated: "✓ PIN Updated",
    pin_deleted: "✓ PIN Deleted",
    searching_auto: "↻ Searching automations...",
    no_auto_linked: "No automations linked to Argus.",
    pin_remove_hint: "To remove PIN: Enter the current one and leave the fields below empty.",
    lbl_load_file: "Upload file:",
    lbl_aesthetic_custom: "Aesthetic Customization",
    lbl_uploaded_files: "Uploaded files on server",
    bypass_lbl: "🚫 Bypass",
    lock_if_open: "Lock if open",
    wait_if_open: "Wait for sensors to close",
    select_btn: "+ Select",
    add_btn: "+ Add",
    sensors_to_bypass: "Sensors to Bypass",
    no_instances: "No instances. Add Argus from Integrations.",
    fullscreen_title: "Full screen",
    sos_slide: "Slide to activate SOS",
    sos_confirm_title: "Confirm panic",
    sos_confirm_text: "Slide to trigger the alarm immediately.",
    sos_call: "📞 Call Emergency Services",
    home_name_modal_title: "🏡 Home Name",
    home_name_modal_desc: "This name appears in the instances panel and in full screen.",
    home_name_label: "Home Name",
    home_name_placeholder: "My Home",
    clear_log_btn: "CLEAR",
    bg_weather: "Animated weather",
    bg_none: "Default",
    bg_panel_none: "No background",
    bg_photo: "One photo",
    bg_collage: "Collage",
    bg_video: "Loop video",
    bg_panel_title: "Panel background",
    bg_hub_title: "Argus background",
    bg_sound_opt: "Video sound",
    bg_image_opt: "Image / GIF",
    bg_hub_default: "Default (Argus)",
    forgot_pin: "Forgot PIN?",
    pin_reset_admin_only: "❌ Error: Only Home Assistant administrators can reset the master PIN.",
    pin_reset_confirm: "Are you sure you want to reset the master PIN? The current PIN will be removed and deactivated.",
    temp_auto: "Automatic (local sensor / thermostat / climate)",
    temp_thermostat: "(thermostat)",
    battery_low: "⚠️ Low Battery",
    times_section: "⏱️ Times",
    arm_time: "Arming (s)",
    disarm_time: "Entry delay (s)",
    save_config: "SAVE CONFIGURATION",
    never_triggered: "Never triggered",
    bridge_paired: "Bridge configured",
    bridge_paired_desc: "The <b>{bridge}</b> bridge is configured in Home Assistant. Home Assistant cannot verify from here whether it was added to Apple Home or report its name.",
    bridge_not_connected: "Bridge not configured",
    bridge_not_desc: "Enable the HomeKit Bridge integration in Home Assistant and include the entity <code>alarm_control_panel.argus_*</code> to generate a pairing QR code.",
    manual_disarm: "Manual (Disarmed)",
    manual_arm: "Manual",
    open_sensors: "Open sensors",
    log_detail_disarm: "System disarmed",
    alarm_instance: "Alarm Instance",
    log_detail_armed: "Mode",
    log_detail_triggered: "Automatic activation",
    user_exp_type: "Expiration",
    user_exp_date: "Expiration Date/Time",
    exp_indefinite: "Indefinite",
    exp_temporary: "Temporary (Date/Time)",
    expired: "Expired",
    active_until: "Expires",
    log_detail_pin_reset: "Master PIN reset by administrator",
    log_detail_pin_reset_failed: "Unauthorized attempt to reset master PIN",
    badge_pin_reset: "PIN Reset",
    badge_pin_reset_failed: "PIN Reset Failed",
    no_files_uploaded: "No uploaded files. Upload a background using the controls above.",
    no_files_uploaded_short: "No uploaded files.",
    files_count: "{count} files",
    files_count_short: "{count} files",
    file_delete_confirm: 'Are you sure you want to permanently delete "{filename}"?',
    use_for_panel: "Panel",
    use_for_hub: "Argus",
    delete_btn_title: "Delete from storage",
    bg_panel_selected_from_history: "Panel background selected from history.",
    bg_hub_selected_from_history: "Argus background selected from history.",
    error_loading_uploaded_files: "Error loading file history.",
    welcome_greeting: "Welcome,",
    select_profile_title: "Select Your Profile",
    select_profile_subtitle: "Access your security panels and Argus instances.",
    exit_to_ha: "Back to Home Assistant",
    role_argus_admin: "Argus Administrator",
    role_argus_user: "Standard User",
    ha_account_linked: "Home Assistant Account: {name}",
    ha_account_unavailable: "Binding unavailable",
    user_role_label: "Argus Role",
    delete_user_tooltip: "Delete user profile",
    delete_user_confirm: 'Are you sure you want to delete "{name}"?',
    cannot_delete_last_admin: "Cannot delete the last binding administrator.",
    clock_format_label: "Time Format",
    clock_format_desc: "Choose how time is displayed across panels and logs.",
    clock_auto: "Automatic (Home Assistant)",
    clock_12h: "12-hour (AM/PM)",
    clock_24h: "24-hour",
    unlock_kiosk: "Unlock kiosk",
    first_run_welcome: "Thank you for choosing Argus Home Hub. Welcome.",
    first_run_desc: "Complete setup to secure your home.",
    first_run_pin_expl: "The access PIN opens Argus. The master PIN controls arming and disarming.",
    first_run_skip: "Skip",
    first_run_start: "Start with Argus",
    first_run_blocked_title: "Access Denied",
    first_run_blocked_desc: "A Home Assistant administrator is required to set up Argus for the first time.",
    log_action_first_run_completed: "Argus initialized by {user}",
    log_action_fullscreen_unlocked: "Kiosk unlocked by {user}",
    log_action_master_pin_rejected: "Incorrect master PIN attempt by {user}",
    log_action_select_profile: "Profile selected: {user}",
    log_action_verify_access_pin: "Access PIN verified by {user}",
    log_action_sos: "SOS Panic triggered by {user}",
    log_action_stop_sos: "SOS Panic stopped by {user}",
    log_action_save_ui: "UI Settings saved by {user}",
    log_action_rejected: "Action rejected",
    unlinked_ha_accounts_title: "Home Assistant accounts without Argus profile",
    btn_create_argus_profile: "Create Argus Profile",
    no_unlinked_ha_accounts: "All active Home Assistant accounts have a profile.",
    profile_is_yours: "This is your profile",
    profile_needs_pin: "Another person’s profile — enter the access PIN",
    profile_no_pin_access: "This profile has no access PIN. You cannot open it.",
    ha_role_admin: "HA Admin",
    ha_role_standard: "HA User",
    login_btn: "Login",
    cancel_btn: "Cancel",
    pin_placeholder: "Access PIN",
    link_ha_user: "Link to Home Assistant User",
    ha_admin_label: "Home Assistant Admin",
    ha_standard_user_label: "Standard HA User",
    role_argus_standard: "Standard User"
  },
  fr: {
    hero_desc: "Sécurité intégrée, contrôle d'accès, automatisations et HomeKit.",
    instances: "Instances actives",
    modes: "Modes",
    automations: "⚡ Automatisations",
    linked_rules: "Règles liées à Argus",
    create_ha: "+ Créer dans HA",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ Paramètres",
    change_pin: "PIN maître",
    pin_desc: "Code numérique pour armer et désarmer.",
    new_pin: "Nouveau PIN",
    confirm_pin: "Confirmer PIN",
    update_pin: "Mettre à jour PIN",
    current_pin: "PIN actuel",
    notifications_title: "🔔 Notifications",
    notif_desc: "Sélectionnez les appareils mobiles enregistrés dans HA pour recevoir les alertes Argus.",
    save_notif: "Enregistrer",
    users_title: "👥 Utilisateurs & Contrôle d'accès",
    admin_only: "Seuls les administrateurs peuvent modifier cette section.",
    add_user: "Ajouter un utilisateur",
    username: "Nom d'utilisateur",
    user_pin: "PIN utilisateur",
    is_admin: "Administrateur",
    save_user: "Enregistrer",
    no_users: "Aucun utilisateur supplémentaire configuré.",
    homekit_title: "🏠 HomeKit",
    close: "Fermer",
    search_placeholder: "Rechercher par nom, zone ou entity_id",
    available: "Disponibles",
    selected_lbl: "Sélectionnés",
    clear: "Effacer",
    accept: "Accepter",
    introduce_pin: "Entrez votre PIN",
    pin_modal_desc: "PIN numérique pour désarmer Argus",
    confirm: "✓ Confirmer",
    cancel: "Annuler",
    disarmed: "Désarmé",
    armed_home: "À la maison",
    armed_away: "Absent",
    armed_night: "Nuit",
    armed_vacation: "Vacances",
    triggered: "ALARME!",
    pending: "En attente",
    arming: "Armement",
    unavailable: "Indisponible",
    sensor_section: "Capteurs d'intrusion",
    siren_section: "Sirènes",
    thermostat_alert_notif: "🌡️ Alerte de température",
    none_selected: "Aucun sélectionné",
    search_select: "Rechercher & sélectionner",
    save_mode: "💾 Enregistrer mode",
    details_notif: "Notification d'alarme",
    activity_log: "📋 Journal d'activité",
    log_armed: "Armé",
    log_disarmed: "Désarmé",
    log_triggered: "Déclenché!",
    log_by: "par",
    log_sensor: "Capteur",
    log_no_events: "Aucun événement récent.",
    mode_home: "Maison",
    mode_away: "Absent",
    mode_night: "Nuit",
    mode_vacation: "Vacances",
    homekit_bridge: "Pont HomeKit",
    homekit_not_paired: "Non associé à une maison.",
    homekit_house: "Apple Home",
    language: "Langue",
    lang_select_title: "Sélectionner la langue",
    btn_home: "🏠 MAISON",
    btn_away: "🔒 ABSENT",
    btn_night: "🌙 NUIT",
    btn_vacation: "✈️ VACANCES",
    btn_disarmed: "DÉSARMÉ",
    btn_sos: "🚨 SOS / PANIQUE",
    system_armed: "SYSTÈME ARMÉ",
    system_disarmed: "SYSTÈME DÉSARMÉ",
    home_name_lbl: "Nom du domicile",
    background_lbl: "Fond",
    edit_btn: "✏️ Modifier",
    save_btn: "Enregistrer",
    backup_title: "Sauvegarde & Restauration",
    backup_desc: "Enregistrez une sauvegarde ou restaurez une précédente.",
    export_btn: "📤 Télécharger",
    import_btn: "📥 Restaurer",
    reset_btn: "⚠️ Réinitialiser",
    undo_reset_btn: "↩️ Annuler la réinitialisation",
    access_title: "Contrôle d'accès & Utilisateurs",
    access_desc: "Gestion globale de la sécurité, PIN maître et administrateurs.",
    pin_master_title: "PIN Maître",
    pin_active_yes: "PIN actif: Oui",
    pin_active_no: "PIN actif: Non",
    select_all: "☑ Tous",
    deselect_all: "☐ Aucun",
    mqtt_label: "MQTT",
    arm_time_label: "Temps armement (s)",
    disarm_time_label: "Délai d'entrée (s)",
    pin_incorrect: "❌ PIN actuel incorrect",
    pin_updated: "✓ PIN mis à jour",
    pin_deleted: "✓ PIN supprimé",
    searching_auto: "↻ Recherche automatisations...",
    no_auto_linked: "Aucune automatisation liée à Argus.",
    pin_remove_hint: "Pour supprimer le PIN: entrez le PIN actuel et laissez les champs vides.",
    lbl_load_file: "Charger le fichier:",
    lbl_aesthetic_custom: "Personnalisation esthétique",
    lbl_uploaded_files: "Fichiers téléchargés sur le serveur",
    bypass_lbl: "🚫 Ignorer",
    lock_if_open: "Bloquer si ouvert",
    wait_if_open: "Attendre la fermeture des capteurs",
    select_btn: "+ Sélectionner",
    add_btn: "+ Ajouter",
    sensors_to_bypass: "Capteurs à ignorer",
    no_instances: "Aucune instance.",
    fullscreen_title: "Plein écran",
    sos_slide: "Glisser pour activer SOS",
    sos_confirm_title: "Confirmer la panique",
    sos_confirm_text: "Glissez pour déclencher l'alarme immédiatement.",
    sos_call: "📞 Appeler les urgences",
    home_name_modal_title: "🏡 Nom du domicile",
    home_name_modal_desc: "Ce nom apparaît dans le panneau des instances et en plein écran.",
    home_name_label: "Nom du domicile",
    home_name_placeholder: "Ma maison",
    clear_log_btn: "EFFACER",
    bg_weather: "Météo animée",
    bg_none: "Par défaut",
    bg_panel_none: "Sans fond",
    bg_photo: "Une photo",
    bg_collage: "Collage",
    bg_video: "Vidéo en boucle",
    bg_panel_title: "Fond du panneau",
    bg_hub_title: "Fond Argus",
    bg_sound_opt: "Son de la vidéo",
    bg_image_opt: "Image / GIF",
    bg_hub_default: "Par défaut (Argus)",
    forgot_pin: "PIN oublié ?",
    pin_reset_admin_only: "❌ Erreur : Seuls les administrateurs de Home Assistant peuvent réinitialiser le PIN maître.",
    pin_reset_confirm: "Êtes-vous sûr de vouloir réinitialiser le PIN maître ? Le PIN actuel sera supprimé et désactivé.",
    temp_auto: "Automatique (capteur local / thermostat / climat)",
    temp_thermostat: "(thermostat)",
    battery_low: "⚠️ Batterie faible",
    times_section: "⏱️ Temps",
    arm_time: "Armé (s)",
    disarm_time: "Délai entrée (s)",
    save_config: "ENREGISTRER LA CONFIGURATION",
    never_triggered: "Jamais déclenché",
    bridge_paired: "Pont configuré",
    bridge_paired_desc: "Le pont <b>{bridge}</b> est configuré dans Home Assistant. Home Assistant ne peut pas vérifier ici son ajout à Apple Home ni fournir son nom.",
    bridge_not_connected: "Pont non configuré",
    bridge_not_desc: "Activez l'intégration HomeKit Bridge dans Home Assistant et incluez l'entité <code>alarm_control_panel.argus_*</code> pour générer un QR d'appairage.",
    manual_disarm: "Manuel (Désarmé)",
    manual_arm: "Manuel",
    open_sensors: "Capteurs ouverts",
    log_detail_disarm: "Système désarmé",
    alarm_instance: "Instance d'alarme",
    log_detail_armed: "Mode",
    log_detail_triggered: "Activation automatique",
    log_detail_pin_reset: "Code PIN maître réinitialisé par l'administrateur",
    log_detail_pin_reset_failed: "Tentative non autorisée de réinitialiser le code PIN maître",
    badge_pin_reset: "PIN Réinitialisé",
    badge_pin_reset_failed: "Échec Réinit. PIN",
    no_files_uploaded: "Aucun fichier téléchargé. Téléchargez un arrière-plan à l'aide des commandes ci-dessus.",
    no_files_uploaded_short: "Aucun fichier téléchargé.",
    files_count: "{count} fichiers",
    files_count_short: "{count} fich.",
    file_delete_confirm: 'Voulez-vous vraiment supprimer définitivement "{filename}" ?',
    use_for_panel: "Panneau",
    use_for_hub: "Argus",
    delete_btn_title: "Supprimer du stockage",
    bg_panel_selected_from_history: "Arrière-plan du panneau sélectionné depuis l'historique.",
    bg_hub_selected_from_history: "Arrière-plan Argus sélectionné depuis l'historique.",
    error_loading_uploaded_files: "Erreur lors du chargement de l'historique des fichiers.",
    welcome_greeting: "Bienvenue,",
    select_profile_title: "Sélectionnez votre profil",
    select_profile_subtitle: "Accédez à vos panneaux de sécurité et instances Argus.",
    exit_to_ha: "Retour à Home Assistant",
    role_argus_admin: "Administrateur Argus",
    role_argus_user: "Utilisateur standard",
    ha_account_linked: "Compte Home Assistant : {name}",
    ha_account_unavailable: "Liaison indisponible",
    user_role_label: "Rôle Argus",
    delete_user_tooltip: "Supprimer le profil utilisateur",
    delete_user_confirm: "Voulez-vous vraiment supprimer « {name} » ?",
    cannot_delete_last_admin: "Impossible de supprimer le dernier administrateur.",
    clock_format_label: "Format d'heure",
    clock_format_desc: "Choisissez l'affichage de l'heure.",
    clock_auto: "Automatique (Home Assistant)",
    clock_12h: "12 heures (AM/PM)",
    clock_24h: "24 heures",
    unlock_kiosk: "Déverrouiller le kiosque",
    first_run_welcome: "Merci d'avoir choisi Argus Home Hub. Bienvenue.",
    first_run_desc: "Complétez la configuration initiale.",
    first_run_pin_expl: "Le PIN d'accès ouvre Argus. Le PIN maître contrôle l'armement.",
    first_run_skip: "Passer",
    first_run_start: "Démarrer avec Argus",
    first_run_blocked_title: "Accès refusé",
    first_run_blocked_desc: "Un administrateur Home Assistant est requis.",
    log_action_first_run_completed: "Argus initialisé par {user}",
    log_action_fullscreen_unlocked: "Kiosque déverrouillé par {user}",
    log_action_master_pin_rejected: "Tentative de PIN maître incorrecte par {user}",
    log_action_select_profile: "Profil sélectionné : {user}",
    log_action_verify_access_pin: "PIN d'accès vérifié par {user}",
    log_action_sos: "Panique SOS déclenchée par {user}",
    log_action_stop_sos: "Panique SOS arrêtée par {user}",
    log_action_save_ui: "Paramètres UI enregistrés par {user}",
    log_action_rejected: "Action rejetée",
    unlinked_ha_accounts_title: "Comptes Home Assistant sans profil Argus",
    btn_create_argus_profile: "Créer un profil Argus",
    no_unlinked_ha_accounts: "Tous les comptes Home Assistant actifs ont un profil.",
    profile_is_yours: "C’est votre profil",
    profile_needs_pin: "Profil d’une autre personne — entrez le PIN d’accès",
    profile_no_pin_access: "Ce profil n’a pas de PIN d’accès. Vous ne pouvez pas l’ouvrir.",
    ha_role_admin: "Admin HA",
    ha_role_standard: "Utilisateur HA",
    login_btn: "Connexion",
    cancel_btn: "Annuler",
    pin_placeholder: "Code PIN d’accès",
    link_ha_user: "Lier à un utilisateur Home Assistant",
    ha_admin_label: "Admin Home Assistant",
    ha_standard_user_label: "Utilisateur HA standard",
    role_argus_standard: "Utilisateur standard"
  },
  pt: {
    hero_desc: "Segurança integrada, controle de acesso, automações e HomeKit.",
    instances: "Instâncias ativas",
    modes: "Modos",
    automations: "⚡ Automações",
    linked_rules: "Regras vinculadas ao Argus",
    create_ha: "+ Criar no HA",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ Configurações",
    change_pin: "PIN Mestre",
    pin_desc: "Código numérico para armar e desarmar.",
    new_pin: "Novo PIN",
    confirm_pin: "Confirmar PIN",
    update_pin: "Atualizar PIN",
    current_pin: "PIN atual",
    notifications_title: "🔔 Notificações",
    notif_desc: "Selecione os dispositivos móveis registrados no HA que receberão alertas do Argus.",
    save_notif: "Salvar",
    users_title: "👥 Usuários & Controle de Acesso",
    admin_only: "Somente administradores podem modificar esta seção.",
    add_user: "Adicionar usuário",
    username: "Nome de usuário",
    user_pin: "PIN do usuário",
    is_admin: "Administrador",
    save_user: "Salvar",
    no_users: "Nenhum usuário adicional configurado.",
    homekit_title: "🏠 HomeKit",
    close: "Fechar",
    search_placeholder: "Buscar por nome, área ou entity_id",
    available: "Disponíveis",
    selected_lbl: "Selecionados",
    clear: "Limpar",
    accept: "Aceitar",
    introduce_pin: "Digite seu PIN",
    pin_modal_desc: "PIN numérico para desarmar o Argus",
    confirm: "✓ Confirmar",
    cancel: "Cancelar",
    disarmed: "Desarmado",
    armed_home: "Em Casa",
    armed_away: "Ausente",
    armed_night: "Noite",
    armed_vacation: "Férias",
    triggered: "ALARME!",
    pending: "Pendente",
    arming: "Armando",
    unavailable: "Indisponível",
    sensor_section: "Sensores de Intrusão",
    siren_section: "Sirenes",
    thermostat_alert_notif: "🌡️ Alerta de temperatura",
    none_selected: "Nenhum selecionado",
    search_select: "Buscar & selecionar",
    save_mode: "💾 Salvar modo",
    details_notif: "Notificação de alarme",
    activity_log: "📋 Registro de Atividade",
    log_armed: "Armado",
    log_disarmed: "Desarmado",
    log_triggered: "Disparado!",
    log_by: "por",
    log_sensor: "Sensor",
    log_no_events: "Nenhum evento recente.",
    mode_home: "Em Casa",
    mode_away: "Ausente",
    mode_night: "Noite",
    mode_vacation: "Férias",
    homekit_bridge: "Ponte HomeKit",
    homekit_not_paired: "Não associado a nenhuma casa.",
    homekit_house: "Apple Home",
    language: "Idioma",
    lang_select_title: "Selecionar Idioma",
    btn_home: "🏠 EM CASA",
    btn_away: "🔒 AUSENTE",
    btn_night: "🌙 NOITE",
    btn_vacation: "✈️ FÉRIAS",
    btn_disarmed: "DESARMADO",
    btn_sos: "🚨 SOS / PÂNICO",
    system_armed: "SISTEMA ARMADO",
    system_disarmed: "SISTEMA DESARMADO",
    home_name_lbl: "Nome do lar",
    background_lbl: "Fundo",
    edit_btn: "✏️ Editar",
    save_btn: "Salvar",
    backup_title: "Backup & Restauração",
    backup_desc: "Salve um backup ou restaure um anterior.",
    export_btn: "📤 Baixar",
    import_btn: "📥 Restaurar",
    reset_btn: "⚠️ Redefinir",
    undo_reset_btn: "↩️ Desfazer Redefinição",
    access_title: "Controle de Acesso & Usuários",
    access_desc: "Gerenciamento global, PIN mestre e administradores.",
    pin_master_title: "PIN Mestre",
    pin_active_yes: "PIN Ativo: Sim",
    pin_active_no: "PIN Ativo: Não",
    select_all: "☑ Todos",
    deselect_all: "☐ Nenhum",
    mqtt_label: "MQTT",
    arm_time_label: "Tempo armado (s)",
    disarm_time_label: "Atraso de entrada (s)",
    pin_incorrect: "❌ PIN atual incorreto",
    pin_updated: "✓ PIN Atualizado",
    pin_deleted: "✓ PIN Removido",
    searching_auto: "↻ Buscando automações...",
    no_auto_linked: "Nenhuma automação vinculada ao Argus.",
    pin_remove_hint: "Para remover o PIN: insira o atual e deixe os campos abaixo vazios.",
    lbl_load_file: "Carregar arquivo:",
    lbl_aesthetic_custom: "Personalização estética",
    lbl_uploaded_files: "Arquivos enviados no servidor",
    bypass_lbl: "🚫 Ignorar",
    lock_if_open: "Bloquear se aberto",
    wait_if_open: "Aguardar fechamento dos sensores",
    select_btn: "+ Selecionar",
    add_btn: "+ Adicionar",
    sensors_to_bypass: "Sensores a ignorar",
    no_instances: "Nenhuma instância.",
    fullscreen_title: "Tela cheia",
    sos_slide: "Deslize para ativar SOS",
    sos_confirm_title: "Confirmar pânico",
    sos_confirm_text: "Deslize para acionar o alarme imediatamente.",
    sos_call: "📞 Chamar emergências",
    home_name_modal_title: "🏡 Nome do lar",
    home_name_modal_desc: "Este nome aparece no painel de instâncias e em tela cheia.",
    home_name_label: "Nome do lar",
    home_name_placeholder: "Minha Casa",
    clear_log_btn: "LIMPAR",
    bg_weather: "Clima animado",
    bg_none: "Padrão",
    bg_panel_none: "Sem fundo",
    bg_photo: "Uma foto",
    bg_collage: "Colagem",
    bg_video: "Vídeo em loop",
    bg_panel_title: "Fundo do painel",
    bg_hub_title: "Fundo Argus",
    bg_sound_opt: "Som do vídeo",
    bg_image_opt: "Imagem / GIF",
    bg_hub_default: "Padrão (Argus)",
    forgot_pin: "Esqueceu o PIN?",
    pin_reset_admin_only: "❌ Erro: Apenas administradores do Home Assistant podem redefinir o PIN mestre.",
    pin_reset_confirm: "Tem certeza que deseja redefinir o PIN mestre? O PIN atual será removido e desativado.",
    temp_auto: "Automático (sensor local / termostato / clima)",
    temp_thermostat: "(termostato)",
    battery_low: "⚠️ Bateria fraca",
    times_section: "⏱️ Tempos",
    arm_time: "Armado (s)",
    disarm_time: "Atraso de entrada (s)",
    save_config: "SALVAR CONFIGURAÇÃO",
    never_triggered: "Nunca ativado",
    bridge_paired: "Ponte configurada",
    bridge_paired_desc: "A ponte <b>{bridge}</b> está configurada no Home Assistant. Não é possível verificar daqui se foi adicionada ao Apple Home nem informar seu nome.",
    bridge_not_connected: "Ponte não configurada",
    bridge_not_desc: "Ative a integração HomeKit Bridge no Home Assistant e inclua a entidade <code>alarm_control_panel.argus_*</code> para gerar um QR de emparelhamento.",
    manual_disarm: "Manual (Desarmado)",
    manual_arm: "Manual",
    open_sensors: "Sensores abertos",
    log_detail_disarm: "Sistema desarmado",
    log_detail_armed: "Modo",
    log_detail_triggered: "Ativação automática",
    alarm_instance: "Instância do alarme",
    log_detail_pin_reset: "PIN mestre redefinido pelo administrador",
    log_detail_pin_reset_failed: "Tentativa não autorizada de redefinir o PIN mestre",
    badge_pin_reset: "PIN Redefinido",
    badge_pin_reset_failed: "Falha ao Redefinir PIN",
    no_files_uploaded: "Nenhum arquivo enviado. Envie um plano de fundo usando os controles acima.",
    no_files_uploaded_short: "Nenhum arquivo enviado.",
    files_count: "{count} arquivos",
    files_count_short: "{count} arq.",
    file_delete_confirm: 'Tem certeza de que deseja excluir "{filename}" permanentemente?',
    use_for_panel: "Painel",
    use_for_hub: "Argus",
    delete_btn_title: "Excluir do armazenamento",
    bg_panel_selected_from_history: "Plano de fundo do painel selecionado a partir do histórico.",
    bg_hub_selected_from_history: "Plano de fundo do Argus selecionado a partir do histórico.",
    error_loading_uploaded_files: "Erro ao carregar o histórico de arquivos.",
    welcome_greeting: "Bem-vindo/a,",
    select_profile_title: "Selecione o seu perfil",
    select_profile_subtitle: "Acesse seus painéis de segurança e instâncias Argus.",
    exit_to_ha: "Voltar ao Home Assistant",
    role_argus_admin: "Administrador do Argus",
    role_argus_user: "Usuário padrão",
    ha_account_linked: "Conta do Home Assistant: {name}",
    ha_account_unavailable: "Vínculo indisponível",
    user_role_label: "Função Argus",
    delete_user_tooltip: "Excluir perfil de usuário",
    delete_user_confirm: 'Tem certeza de que deseja excluir "{name}"?',
    cannot_delete_last_admin: "Não é possível excluir o último administrador.",
    clock_format_label: "Formato de hora",
    clock_format_desc: "Escolha como a hora é exibida.",
    clock_auto: "Automático (Home Assistant)",
    clock_12h: "12 horas (AM/PM)",
    clock_24h: "24 horas",
    unlock_kiosk: "Desbloquear quiosque",
    first_run_welcome: "Obrigado por escolher o Argus Home Hub. Bem-vindo(a).",
    first_run_desc: "Conclua a configuração inicial.",
    first_run_pin_expl: "O PIN de acesso abre o Argus. O PIN mestre controla o armamento.",
    first_run_skip: "Pular",
    first_run_start: "Começar com o Argus",
    first_run_blocked_title: "Acesso negado",
    first_run_blocked_desc: "É necessário um administrador do Home Assistant.",
    log_action_first_run_completed: "Argus inicializado por {user}",
    log_action_fullscreen_unlocked: "Quiosque desbloqueado por {user}",
    log_action_master_pin_rejected: "Tentativa incorreta de PIN mestre por {user}",
    log_action_select_profile: "Perfil selecionado: {user}",
    log_action_verify_access_pin: "PIN de acesso verificado por {user}",
    log_action_sos: "Pânico SOS acionado por {user}",
    log_action_stop_sos: "Pânico SOS interrompido por {user}",
    log_action_save_ui: "Configurações de UI salvas por {user}",
    log_action_rejected: "Ação rejeitada",
    unlinked_ha_accounts_title: "Contas do Home Assistant sem perfil Argus",
    btn_create_argus_profile: "Criar perfil Argus",
    no_unlinked_ha_accounts: "Todas as contas do Home Assistant ativas possuem perfil.",
    profile_is_yours: "Este é o seu perfil",
    profile_needs_pin: "Perfil de outra pessoa — insira o PIN de acesso",
    profile_no_pin_access: "Este perfil não tem PIN de acesso. Você não pode abri-lo.",
    ha_role_admin: "Admin HA",
    ha_role_standard: "Usuário HA",
    login_btn: "Entrar",
    cancel_btn: "Cancelar",
    pin_placeholder: "PIN de acesso",
    link_ha_user: "Vincular a Usuário do Home Assistant",
    ha_admin_label: "Administrador do Home Assistant",
    ha_standard_user_label: "Usuário padrão do HA",
    role_argus_standard: "Usuário padrão"
  },
  it: {
    hero_desc: "Sicurezza integrata, controllo accessi, automazioni e HomeKit.",
    instances: "Istanze attive",
    modes: "Modi",
    automations: "⚡ Automazioni",
    linked_rules: "Regole collegate ad Argus",
    create_ha: "+ Crea in HA",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ Impostazioni",
    change_pin: "PIN Principale",
    pin_desc: "Codice numerico per armare e disarmare.",
    new_pin: "Nuovo PIN",
    confirm_pin: "Conferma PIN",
    update_pin: "Aggiorna PIN",
    current_pin: "PIN attuale",
    notifications_title: "🔔 Notifiche",
    notif_desc: "Seleziona i dispositivi mobili registrati in HA che riceveranno gli avvisi di Argus.",
    save_notif: "Salva",
    users_title: "👥 Utenti & Controllo Accessi",
    admin_only: "Solo gli amministratori possono modificare questa sezione.",
    add_user: "Aggiungi utente",
    username: "Nome utente",
    user_pin: "PIN utente",
    is_admin: "Amministratore",
    save_user: "Salva",
    no_users: "Nessun utente aggiuntivo configurato.",
    homekit_title: "🏠 HomeKit",
    close: "Chiudi",
    search_placeholder: "Cerca per nome, area o entity_id",
    available: "Disponibili",
    selected_lbl: "Selezionati",
    clear: "Cancella",
    accept: "Accetta",
    introduce_pin: "Inserisci il tuo PIN",
    pin_modal_desc: "PIN numerico per disarmare Argus",
    confirm: "✓ Conferma",
    cancel: "Annulla",
    disarmed: "Disarmato",
    armed_home: "In Casa",
    armed_away: "Assente",
    armed_night: "Notte",
    armed_vacation: "Vacanze",
    triggered: "ALLARME!",
    pending: "In attesa",
    arming: "Armamento",
    unavailable: "Non disponibile",
    sensor_section: "Sensori di intrusione",
    siren_section: "Sirene",
    thermostat_alert_notif: "🌡️ Avviso temperatura",
    none_selected: "Nessuno selezionato",
    search_select: "Cerca & seleziona",
    save_mode: "💾 Salva modalità",
    details_notif: "Notifica allarme",
    activity_log: "📋 Registro Attività",
    log_armed: "Armato",
    log_disarmed: "Disarmato",
    log_triggered: "Attivato!",
    log_by: "da",
    log_sensor: "Sensore",
    log_no_events: "Nessun evento recente.",
    mode_home: "In Casa",
    mode_away: "Assente",
    mode_night: "Notte",
    mode_vacation: "Vacanze",
    homekit_bridge: "Ponte HomeKit",
    homekit_not_paired: "Non associato a nessuna casa.",
    homekit_house: "Apple Home",
    language: "Lingua",
    lang_select_title: "Seleziona Lingua",
    btn_home: "🏠 CASA",
    btn_away: "🔒 ASSENTE",
    btn_night: "🌙 NOTTE",
    btn_vacation: "✈️ VACANZE",
    btn_disarmed: "DISARMATO",
    btn_sos: "🚨 SOS / PANICO",
    system_armed: "SISTEMA ARMATO",
    system_disarmed: "SISTEMA DISARMATO",
    home_name_lbl: "Nome della casa",
    background_lbl: "Sfondo",
    edit_btn: "✏️ Modifica",
    save_btn: "Salva",
    backup_title: "Backup & Ripristino",
    backup_desc: "Salva un backup o ripristina uno precedente.",
    export_btn: "📤 Scarica",
    import_btn: "📥 Ripristina",
    reset_btn: "⚠️ Ripristina",
    undo_reset_btn: "↩️ Annulla Ripristino",
    access_title: "Controllo Accessi & Utenti",
    access_desc: "Gestione globale della sicurezza, PIN principale e amministratori.",
    pin_master_title: "PIN Principale",
    pin_active_yes: "PIN Attivo: Sì",
    pin_active_no: "PIN Attivo: No",
    select_all: "☑ Tutti",
    deselect_all: "☐ Nessuno",
    mqtt_label: "MQTT",
    arm_time_label: "Tempo armato (s)",
    disarm_time_label: "Ritardo ingresso (s)",
    pin_incorrect: "❌ PIN attuale errato",
    pin_updated: "✓ PIN Aggiornato",
    pin_deleted: "✓ PIN Eliminato",
    searching_auto: "↻ Ricerca automazioni...",
    no_auto_linked: "Nessuna automazione collegata ad Argus.",
    pin_remove_hint: "Per rimuovere il PIN: inserisci quello attuale e lascia vuoti i campi sottostanti.",
    lbl_load_file: "Carica file:",
    lbl_aesthetic_custom: "Personalizzazione estetica",
    lbl_uploaded_files: "File caricati sul server",
    bypass_lbl: "🚫 Ignora",
    lock_if_open: "Blocca se aperto",
    wait_if_open: "Attendi chiusura sensori",
    select_btn: "+ Seleziona",
    add_btn: "+ Aggiungi",
    sensors_to_bypass: "Sensori da ignorare",
    no_instances: "Nessuna istanza.",
    fullscreen_title: "Schermo intero",
    sos_slide: "Scorri per attivare SOS",
    sos_confirm_title: "Conferma panico",
    sos_confirm_text: "Scorri per attivare immediatamente l'allarme.",
    sos_call: "📞 Chiama i soccorsi",
    home_name_modal_title: "🏡 Nome della casa",
    home_name_modal_desc: "Questo nome appare nel pannello delle istanze e a schermo intero.",
    home_name_label: "Nome della casa",
    home_name_placeholder: "Casa mia",
    clear_log_btn: "CANCELLA",
    bg_weather: "Meteo animato",
    bg_none: "Predefinito",
    bg_panel_none: "Nessuno sfondo",
    bg_photo: "Una foto",
    bg_collage: "Collage",
    bg_video: "Video in loop",
    bg_panel_title: "Sfondo pannello",
    bg_hub_title: "Sfondo Argus",
    bg_sound_opt: "Audio video",
    bg_image_opt: "Immagine / GIF",
    bg_hub_default: "Predefinito (Argus)",
    forgot_pin: "PIN dimenticato?",
    pin_reset_admin_only: "❌ Errore: Solo gli amministratori di Home Assistant possono reimpostare el PIN principale.",
    pin_reset_confirm: "Sei sicuro di voler reimpostare il PIN principale? Il PIN attuale verrà rimosso e disattivato.",
    temp_auto: "Automatico (sensore locale / termostato / clima)",
    temp_thermostat: "(termostato)",
    battery_low: "⚠️ Batteria scarica",
    times_section: "⏱️ Tempi",
    arm_time: "Armato (s)",
    disarm_time: "Ritardo entrata (s)",
    save_config: "SALVA CONFIGURAZIONE",
    never_triggered: "Mai attivato",
    bridge_paired: "Ponte configurato",
    bridge_paired_desc: "Il ponte <b>{bridge}</b> è configurato in Home Assistant. Da qui non è possibile verificare se sia stato aggiunto ad Apple Home né conoscerne il nome.",
    bridge_not_connected: "Ponte non configurato",
    bridge_not_desc: "Abilita l'integrazione HomeKit Bridge in Home Assistant e includi l'entità <code>alarm_control_panel.argus_*</code> per generare un QR di abbinamento.",
    manual_disarm: "Manuale (Disarmato)",
    manual_arm: "Manuale",
    open_sensors: "Sensori aperti",
    log_detail_disarm: "Sistema disarmato",
    alarm_instance: "Istanza allarme",
    log_detail_armed: "Modalità",
    log_detail_triggered: "Attivazione automatica",
    log_detail_pin_reset: "PIN principale reimpostato dall'amministratore",
    log_detail_pin_reset_failed: "Tentativo non autorizzato di reimpostare il PIN principale",
    badge_pin_reset: "PIN Reimpostato",
    badge_pin_reset_failed: "Reimpostazione PIN Fallita",
    no_files_uploaded: "Nessun file caricato. Carica uno sfondo usando i controlli sopra.",
    no_files_uploaded_short: "Nessun file caricato.",
    files_count: "{count} file",
    files_count_short: "{count} file",
    file_delete_confirm: 'Sei sicuro di voler eliminare permanentemente "{filename}"?',
    use_for_panel: "Pannello",
    use_for_hub: "Argus",
    delete_btn_title: "Elimina dalla memoria",
    bg_panel_selected_from_history: "Sfondo del pannello selezionato dalla cronologia.",
    bg_hub_selected_from_history: "Sfondo di Argus selezionato dalla cronologia.",
    error_loading_uploaded_files: "Errore durante il caricamento della cronologia dei file.",
    select_profile_title: "Seleziona il tuo profilo",
    select_profile_subtitle: "Accedi ai tuoi pannelli di sicurezza e istanze Argus.",
    exit_to_ha: "Torna a Home Assistant",
    role_argus_admin: "Amministratore Argus",
    role_argus_user: "Utente standard",
    ha_account_linked: "Account Home Assistant: {name}",
    ha_account_unavailable: "Collegamento non disponibile",
    user_role_label: "Ruolo Argus",
    delete_user_tooltip: "Elimina profilo utente",
    delete_user_confirm: 'Sei sicuro di voler eliminare "{name}"?',
    cannot_delete_last_admin: "Impossibile eliminare l'ultimo amministratore.",
    clock_format_label: "Formato ora",
    clock_format_desc: "Scegli come visualizzare l'ora.",
    clock_auto: "Automatico (Home Assistant)",
    clock_12h: "12 ore (AM/PM)",
    clock_24h: "24 ore",
    unlock_kiosk: "Sblocca chiosco",
    first_run_welcome: "Grazie per aver scelto Argus Home Hub. Benvenuto/a.",
    first_run_desc: "Completa la configurazione.",
    first_run_pin_expl: "Il PIN di accesso apre Argus. Il PIN master controlla l'armamento.",
    first_run_skip: "Salta",
    first_run_start: "Inizia con Argus",
    first_run_blocked_title: "Accesso negato",
    first_run_blocked_desc: "È richiesto un amministratore di Home Assistant.",
    log_action_first_run_completed: "Argus inizializzato da {user}",
    log_action_fullscreen_unlocked: "Chiosco sbloccato da {user}",
    log_action_master_pin_rejected: "Tentativo di PIN master errato da {user}",
    log_action_select_profile: "Profilo selezionato: {user}",
    log_action_verify_access_pin: "PIN di accesso verificato da {user}",
    log_action_sos: "Panico SOS attivato da {user}",
    log_action_stop_sos: "Panico SOS fermato da {user}",
    log_action_save_ui: "Impostazioni UI salvate da {user}",
    log_action_rejected: "Azione rifiutata",
    unlinked_ha_accounts_title: "Account Home Assistant senza profilo Argus",
    btn_create_argus_profile: "Crea profilo Argus",
    no_unlinked_ha_accounts: "Tutti gli account Home Assistant attivi hanno un profilo.",
    profile_is_yours: "Questo è il tuo profilo",
    profile_needs_pin: "Profilo di un’altra persona — inserisci il PIN di accesso",
    profile_no_pin_access: "Questo profilo non ha un PIN di accesso. Non puoi aprirlo.",
    ha_role_admin: "Admin HA",
    ha_role_standard: "Utente HA",
    login_btn: "Accedi",
    cancel_btn: "Annulla",
    pin_placeholder: "PIN di accesso",
    link_ha_user: "Collega all’utente Home Assistant",
    ha_admin_label: "Amministratore Home Assistant",
    ha_standard_user_label: "Utente HA standard",
    role_argus_standard: "Utente standard"
  },
  zh: {
    hero_desc: "集成安全、访问控制、自动化和HomeKit。",
    instances: "活跃实例",
    modes: "模式",
    automations: "⚡ 自动化",
    linked_rules: "Argus关联规则",
    create_ha: "+ 在HA中创建",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ 设置",
    change_pin: "主PIN码",
    pin_desc: "用于布防和撤防的数字代码。",
    new_pin: "新PIN码",
    confirm_pin: "确认PIN码",
    update_pin: "更新PIN码",
    current_pin: "当前PIN码",
    notifications_title: "🔔 通知",
    notif_desc: "选择在HA中注册的移动设备以接收Argus警报。",
    save_notif: "保存",
    users_title: "👥 用户和访问控制",
    admin_only: "只有管理员才能修改此部分。",
    add_user: "添加用户",
    username: "用户名",
    user_pin: "用户PIN码",
    is_admin: "管理员",
    save_user: "保存",
    no_users: "未配置额外用户。",
    homekit_title: "🏠 HomeKit",
    close: "关闭",
    search_placeholder: "按名称、区域或entity_id搜索",
    available: "可用",
    selected_lbl: "已选择",
    clear: "清除",
    accept: "接受",
    introduce_pin: "输入您的PIN码",
    pin_modal_desc: "撤防Argus的数字PIN码",
    confirm: "✓ 确认",
    cancel: "取消",
    disarmed: "已撤防",
    armed_home: "在家",
    armed_away: "外出",
    armed_night: "夜间",
    armed_vacation: "度假",
    triggered: "警报！",
    pending: "等待中",
    arming: "布防中",
    unavailable: "不可用",
    sensor_section: "入侵传感器",
    siren_section: "警报器",
    thermostat_alert_notif: "🌡️ 温度警报",
    none_selected: "未选择",
    search_select: "搜索并选择",
    save_mode: "💾 保存模式",
    details_notif: "警报通知",
    activity_log: "📋 活动日志",
    log_armed: "已布防",
    log_disarmed: "已撤防",
    log_triggered: "已触发！",
    log_by: "由",
    log_sensor: "传感器",
    log_no_events: "没有最近事件。",
    mode_home: "在家",
    mode_away: "外出",
    mode_night: "夜间",
    mode_vacation: "度假",
    homekit_bridge: "HomeKit桥接",
    homekit_not_paired: "未与任何家庭关联。",
    homekit_house: "Apple Home",
    language: "语言",
    lang_select_title: "选择语言",
    btn_home: "🏠 在家",
    btn_away: "🔒 外出",
    btn_night: "🌙 夜间",
    btn_vacation: "✈️ 度假",
    btn_disarmed: "已撤防",
    btn_sos: "🚨 SOS / 紧急",
    system_armed: "系统已布防",
    system_disarmed: "系统已撤防",
    home_name_lbl: "家庭名称",
    background_lbl: "背景",
    edit_btn: "✏️ 编辑",
    save_btn: "保存",
    backup_title: "备份与恢复",
    backup_desc: "保存设置备份或恢复之前的设置。",
    export_btn: "📤 下载",
    import_btn: "📥 恢复",
    reset_btn: "⚠️ 恢复出厂",
    undo_reset_btn: "↩️ 撤销重置",
    access_title: "访问控制和用户",
    access_desc: "全局安全管理、主PIN码和管理员。",
    pin_master_title: "主PIN码",
    pin_active_yes: "PIN激活: 是",
    pin_active_no: "PIN激活: 否",
    select_all: "☑ 全选",
    deselect_all: "☐ 全不选",
    mqtt_label: "MQTT",
    arm_time_label: "布防延迟(s)",
    disarm_time_label: "进入延迟(s)",
    pin_incorrect: "❌ 当前PIN错误",
    pin_updated: "✓ PIN已更新",
    pin_deleted: "✓ PIN已删除",
    searching_auto: "↻ 正在搜索自动化...",
    no_auto_linked: "没有链接到Argus的自动化。",
    pin_remove_hint: "删除PIN: 输入当前PIN并将下面字段留空。",
    lbl_load_file: "上传文件:",
    lbl_aesthetic_custom: "美学个性化",
    lbl_uploaded_files: "服务器上上传的文件",
    bypass_lbl: "🚫 跳过",
    lock_if_open: "开启时锁定",
    wait_if_open: "等待传感器关闭后布防",
    select_btn: "+ 选择",
    add_btn: "+ 添加",
    sensors_to_bypass: "跳过的传感器",
    no_instances: "没有实例。",
    fullscreen_title: "全屏",
    sos_slide: "滑动以激活SOS",
    sos_confirm_title: "确认紧急",
    sos_confirm_text: "滑动以立即触发警报。",
    sos_call: "📞 拨打紧急服务",
    home_name_modal_title: "🏡 家庭名称",
    home_name_modal_desc: "此名称显示在实例面板和全屏中。",
    home_name_label: "家庭名称",
    home_name_placeholder: "我的家",
    clear_log_btn: "清除",
    bg_weather: "动画天气",
    bg_none: "默认",
    bg_panel_none: "无背景",
    bg_photo: "单张照片",
    bg_collage: "拼贴画",
    bg_video: "循环视频",
    bg_panel_title: "面板背景",
    bg_hub_title: "Argus 背景",
    bg_sound_opt: "视频声音",
    bg_image_opt: "图片 / GIF",
    bg_hub_default: "默认 (Argus)",
    forgot_pin: "忘记PIN码？",
    pin_reset_admin_only: "❌ 错误：只有 Home Assistant 管理员可以重置主 PIN 码。",
    pin_reset_confirm: "您确定要重置主 PIN 码吗？当前的 PIN 码将被删除并停用。",
    temp_auto: "自动（本地传感器 / 恒温器 / 气候）",
    temp_thermostat: "(恒温器)",
    battery_low: "⚠️ 电池不足",
    times_section: "⏱️ 时间",
    arm_time: "布防延迟(s)",
    disarm_time: "进入延迟(s)",
    save_config: "保存配置",
    never_triggered: "从未触发",
    bridge_paired: "桥接已配置",
    bridge_paired_desc: "桥接 <b>{bridge}</b> 已在 Home Assistant 中配置。Home Assistant 无法从这里验证它是否已添加到 Apple Home，也无法提供家庭名称。",
    bridge_not_connected: "桥接未配置",
    bridge_not_desc: "在Home Assistant中启用HomeKit Bridge集成并包含实体<code>alarm_control_panel.argus_*</code>以生成配对QR码。",
    manual_disarm: "手动(已撤防)",
    manual_arm: "手动",
    open_sensors: "开启的传感器",
    log_detail_disarm: "系统已撤防",
    alarm_instance: "报警实例",
    log_detail_armed: "模式",
    log_detail_triggered: "自动激活",
    log_detail_pin_reset: "管理员已重置主PIN码",
    log_detail_pin_reset_failed: "未授权尝试重置主PIN码",
    badge_pin_reset: "PIN已重置",
    badge_pin_reset_failed: "PIN重置失败",
    no_files_uploaded: "未上传文件。请使用上方控件上传背景。",
    no_files_uploaded_short: "未上传文件。",
    files_count: "{count} 个文件",
    files_count_short: "{count} 文件",
    file_delete_confirm: '您确定要永久删除 "{filename}" 吗？',
    use_for_panel: "面板",
    use_for_hub: "Argus",
    delete_btn_title: "从存储中删除",
    bg_panel_selected_from_history: "已从历史记录中选择面板背景。",
    bg_hub_selected_from_history: "已从历史记录中选择Argus背景。",
    error_loading_uploaded_files: "加载文件历史记录出错。",
    select_profile_title: "选择您的个人资料",
    select_profile_subtitle: "访问您的安全面板和 Argus 实例。",
    exit_to_ha: "返回 Home Assistant",
    role_argus_admin: "Argus 管理员",
    role_argus_user: "标准用户",
    ha_account_linked: "Home Assistant 账户：{name}",
    ha_account_unavailable: "绑定不可用",
    user_role_label: "Argus 角色",
    delete_user_tooltip: "删除用户个人资料",
    delete_user_confirm: "您确定要删除“{name}”吗？",
    cannot_delete_last_admin: "无法删除最后一个管理员。",
    clock_format_label: "时间格式",
    clock_format_desc: "选择时间的显示方式。",
    clock_auto: "自动（Home Assistant）",
    clock_12h: "12 小时制 (AM/PM)",
    clock_24h: "24 小时制",
    unlock_kiosk: "解锁自助服务终端",
    first_run_welcome: "感谢选择 Argus Home Hub。欢迎。",
    first_run_desc: "完成设置以保护您的家。",
    first_run_pin_expl: "访问 PIN 打开 Argus。主 PIN 控制撤防和布防。",
    first_run_skip: "跳过",
    first_run_start: "开始使用 Argus",
    first_run_blocked_title: "拒绝访问",
    first_run_blocked_desc: "首次设置 Argus 需要 Home Assistant 管理员。",
    log_action_first_run_completed: "Argus 已由 {user} 初始化",
    log_action_fullscreen_unlocked: "自助服务终端已由 {user} 解锁",
    log_action_master_pin_rejected: "{user} 的主 PIN 尝试不正确",
    log_action_select_profile: "已选择个人资料：{user}",
    log_action_verify_access_pin: "访问 PIN 已由 {user} 验证",
    log_action_sos: "SOS 紧急情况由 {user} 触发",
    log_action_stop_sos: "SOS 紧急情况由 {user} 停止",
    log_action_save_ui: "UI 设置已由 {user} 保存",
    log_action_rejected: "操作已被拒绝",
    unlinked_ha_accounts_title: "没有 Argus 个人资料的 Home Assistant 账户",
    btn_create_argus_profile: "创建 Argus 个人资料",
    no_unlinked_ha_accounts: "所有活跃的 Home Assistant 账户都有个人资料。",
    profile_is_yours: "这是您的个人资料",
    profile_needs_pin: "其他人的个人资料 — 请输入访问 PIN",
    profile_no_pin_access: "该个人资料没有访问 PIN。您无法打开它。",
    ha_role_admin: "HA 管理员",
    ha_role_standard: "HA 用户",
    login_btn: "登录",
    cancel_btn: "取消",
    pin_placeholder: "访问 PIN",
    link_ha_user: "关联至 Home Assistant 用户",
    ha_admin_label: "Home Assistant 管理员",
    ha_standard_user_label: "标准 HA 用户",
    role_argus_standard: "标准用户"
  },
  ru: {
    hero_desc: "Комплексная безопасность, контроль доступа, автоматизация и HomeKit.",
    instances: "Активные экземпляры",
    modes: "Режимы",
    automations: "⚡ Автоматизации",
    linked_rules: "Правила Argus",
    create_ha: "+ Создать в HA",
    no_rules: "",
    rules_tip: "",
    settings: "⚙️ Настройки",
    change_pin: "Мастер PIN",
    pin_desc: "Цифровой код для постановки и снятия с охраны.",
    new_pin: "Новый PIN",
    confirm_pin: "Подтвердить PIN",
    update_pin: "Обновить PIN",
    current_pin: "Текущий PIN",
    notifications_title: "🔔 Уведомления",
    notif_desc: "Выберите мобильные устройства, зарегистрированные в HA для получения оповещений Argus.",
    save_notif: "Сохранить",
    users_title: "👥 Пользователи и контроль доступа",
    admin_only: "Только администраторы могут изменять этот раздел.",
    add_user: "Добавить пользователя",
    username: "Имя пользователя",
    user_pin: "PIN пользователя",
    is_admin: "Администратор",
    save_user: "Сохранить",
    no_users: "Дополнительные пользователи не настроены.",
    homekit_title: "🏠 HomeKit",
    close: "Закрыть",
    search_placeholder: "Поиск по имени, зоне или entity_id",
    available: "Доступные",
    selected_lbl: "Выбранные",
    clear: "Очистить",
    accept: "Принять",
    introduce_pin: "Введите PIN",
    pin_modal_desc: "Цифровой PIN для снятия с охраны Argus",
    confirm: "✓ Подтвердить",
    cancel: "Отмена",
    disarmed: "Снято с охраны",
    armed_home: "Дома",
    armed_away: "Ушёл",
    armed_night: "Ночь",
    armed_vacation: "Отпуск",
    triggered: "ТРЕВОГА!",
    pending: "Ожидание",
    arming: "Постановка",
    unavailable: "Недоступно",
    sensor_section: "Датчики вторжения",
    siren_section: "Сирены",
    thermostat_alert_notif: "🌡️ Температурный сигнал",
    none_selected: "Не выбрано",
    search_select: "Поиск и выбор",
    save_mode: "💾 Сохранить режим",
    details_notif: "Уведомление тревоги",
    activity_log: "📋 Журнал активности",
    log_armed: "Поставлено",
    log_disarmed: "Снято",
    log_triggered: "Сработало!",
    log_by: "от",
    log_sensor: "Датчик",
    log_no_events: "Нет последних событий.",
    mode_home: "Дома",
    mode_away: "Ушёл",
    mode_night: "Ночь",
    mode_vacation: "Отпуск",
    homekit_bridge: "Мост HomeKit",
    homekit_not_paired: "Не связано ни с каким домом.",
    homekit_house: "Apple Home",
    language: "Язык",
    lang_select_title: "Выбрать язык",
    btn_home: "🏠 ДОМА",
    btn_away: "🔒 УШЁЛ",
    btn_night: "🌙 НОЧЬ",
    btn_vacation: "✈️ ОТПУСК",
    btn_disarmed: "СНЯТО",
    btn_sos: "🚨 SOS / ТРЕВОГА",
    system_armed: "СИСТЕМА ПОСТАВЛЕНА",
    system_disarmed: "СИСТЕМА СНЯТА",
    home_name_lbl: "Название дома",
    background_lbl: "Фон",
    edit_btn: "✏️ Редактировать",
    save_btn: "Сохранить",
    backup_title: "Резервная копия",
    backup_desc: "Сохраните резервную копию или восстановите предыдущую.",
    export_btn: "📤 Скачать",
    import_btn: "📥 Восстановить",
    reset_btn: "⚠️ Сброс",
    undo_reset_btn: "↩️ Отменить сброс",
    access_title: "Контроль доступа и пользователи",
    access_desc: "Глобальная безопасность, мастер PIN и администраторы.",
    pin_master_title: "Мастер PIN",
    pin_active_yes: "PIN активен: Да",
    pin_active_no: "PIN активен: Нет",
    select_all: "☑ Все",
    deselect_all: "☐ Ничего",
    mqtt_label: "MQTT",
    arm_time_label: "Время взятия (с)",
    disarm_time_label: "Задержка входа (с)",
    pin_incorrect: "❌ Неверный текущий PIN",
    pin_updated: "✓ PIN Обновлен",
    pin_deleted: "✓ PIN Удален",
    searching_auto: "↻ Поиск автоматизаций...",
    no_auto_linked: "Нет автоматизаций, связанных с Argus.",
    pin_remove_hint: "Для удаления PIN: введите текущий и оставьте поля пустыми.",
    lbl_load_file: "Загрузить файл:",
    lbl_aesthetic_custom: "Эстетическая персонализация",
    lbl_uploaded_files: "Загруженные файлы на сервере",
    bypass_lbl: "🚫 Обход",
    lock_if_open: "Блокировать если открыто",
    wait_if_open: "Ждать закрытия датчиков",
    select_btn: "+ Выбрать",
    add_btn: "+ Добавить",
    sensors_to_bypass: "Датчики для обхода",
    no_instances: "Нет экземпляров.",
    fullscreen_title: "Полный экран",
    sos_slide: "Проведите для активации SOS",
    sos_confirm_title: "Подтвердить тревогу",
    sos_confirm_text: "Проведите для немедленной активации тревоги.",
    sos_call: "📞 Вызвать экстренные службы",
    home_name_modal_title: "🏡 Название дома",
    home_name_modal_desc: "Это имя отображается в панели экземпляров и в полноекранном режиме.",
    home_name_label: "Название дома",
    home_name_placeholder: "Мой дом",
    clear_log_btn: "ОЧИСТИТЬ",
    bg_weather: "Анимированная погода",
    bg_none: "По умолчанию",
    bg_panel_none: "Без фона",
    bg_photo: "Одно фото",
    bg_collage: "Коллаж",
    bg_video: "Зацикленное видео",
    bg_panel_title: "Фон панели",
    bg_hub_title: "Фон Argus",
    bg_sound_opt: "Звук видео",
    bg_image_opt: "Изображение / GIF",
    bg_hub_default: "По умолчанию (Argus)",
    forgot_pin: "Забыли PIN?",
    pin_reset_admin_only: "❌ Ошибка: Только администраторы Home Assistant могут сбросить мастер-PIN.",
    pin_reset_confirm: "Вы уверены, что хотите сбросить мастер-PIN? Текущий PIN-код будет удален и отключен.",
    temp_auto: "Авто (лок. датчик / термостат / климат)",
    temp_thermostat: "(термостат)",
    battery_low: "⚠️ Низкий заряд",
    times_section: "⏱️ Времена",
    arm_time: "Постановка (s)",
    disarm_time: "Задержка входа (s)",
    save_config: "СОХРАНИТЬ КОНФИГУРАЦИЮ",
    never_triggered: "Никогда не срабатывало",
    bridge_paired: "Мост настроен",
    bridge_paired_desc: "Мост <b>{bridge}</b> настроен в Home Assistant. Здесь нельзя проверить, добавлен ли он в Apple Home, или узнать его название.",
    bridge_not_connected: "Мост не настроен",
    bridge_not_desc: "Включите интеграцию HomeKit Bridge в Home Assistant и добавьте <code>alarm_control_panel.argus_*</code> для QR сопряжения.",
    manual_disarm: "Вручную (Снято)",
    manual_arm: "Вручную",
    open_sensors: "Открытые датчики",
    log_detail_disarm: "Система снята",
    alarm_instance: "Экземпляр тревоги",
    log_detail_armed: "Режим",
    log_detail_triggered: "Автоматическая активация",
    log_detail_pin_reset: "Мастер-PIN сброшен администратором",
    log_detail_pin_reset_failed: "Несанкционированная попытка сбросить мастер-PIN",
    badge_pin_reset: "PIN Сброшен",
    badge_pin_reset_failed: "Ошибка Сброса PIN",
    no_files_uploaded: "Нет загруженных файлов. Загрузите фон с помощью элементов управления выше.",
    no_files_uploaded_short: "Нет загруженных файлов.",
    files_count: "{count} файлов",
    files_count_short: "{count} файл.",
    file_delete_confirm: "Вы уверены, что хотите навсегда удалить «{filename}»?",
    use_for_panel: "Панель",
    use_for_hub: "Argus",
    delete_btn_title: "Удалить из хранилища",
    bg_panel_selected_from_history: "Фон панели выбран из истории.",
    bg_hub_selected_from_history: "Фон Argus выбран из истории.",
    error_loading_uploaded_files: "Ошибка при загрузке истории файлов.",
    select_profile_title: "Выберите ваш профиль",
    select_profile_subtitle: "Доступ к вашим панелям безопасности и экземплярам Argus.",
    exit_to_ha: "Вернуться в Home Assistant",
    role_argus_admin: "Администратор Argus",
    role_argus_user: "Стандартный пользователь",
    ha_account_linked: "Учетная запись Home Assistant: {name}",
    ha_account_unavailable: "Привязка недоступна",
    user_role_label: "Роль Argus",
    delete_user_tooltip: "Удалить профиль пользователя",
    delete_user_confirm: 'Вы уверены, что хотите удалить "{name}"?',
    cannot_delete_last_admin: "Нельзя удалить последнего администратора.",
    clock_format_label: "Формат времени",
    clock_format_desc: "Выберите способ отображения времени.",
    clock_auto: "Автоматически (Home Assistant)",
    clock_12h: "12-часовой (AM/PM)",
    clock_24h: "24-часовой",
    unlock_kiosk: "Разблокировать киоск",
    first_run_welcome: "Спасибо за выбор Argus Home Hub. Добро пожаловать.",
    first_run_desc: "Завершите настройку для защиты вашего дома.",
    first_run_pin_expl: "PIN-код доступа открывает Argus. Мастер PIN-код управляет охраной.",
    first_run_skip: "Пропустить",
    first_run_start: "Начать работу с Argus",
    first_run_blocked_title: "Доступ запрещен",
    first_run_blocked_desc: "Для первичной настройки Argus требуется администратор Home Assistant.",
    log_action_first_run_completed: "Argus инициализирован пользователем {user}",
    log_action_fullscreen_unlocked: "Киоск разблокирован пользователем {user}",
    log_action_master_pin_rejected: "Неверная попытка ввода мастер-PIN {user}",
    log_action_select_profile: "Выбран профиль: {user}",
    log_action_verify_access_pin: "PIN-код доступа проверен {user}",
    log_action_sos: "SOS паника вызвана пользователем {user}",
    log_action_stop_sos: "SOS паника остановлена пользователем {user}",
    log_action_save_ui: "Настройки UI сохранены пользователем {user}",
    log_action_rejected: "Действие отклонено",
    unlinked_ha_accounts_title: "Учетные записи Home Assistant без профиля Argus",
    btn_create_argus_profile: "Создать профиль Argus",
    no_unlinked_ha_accounts: "Все активные учетные записи Home Assistant имеют профиль.",
    profile_is_yours: "Это ваш профиль",
    profile_needs_pin: "Профиль другого пользователя — введите PIN доступа",
    profile_no_pin_access: "У этого профиля нет PIN доступа. Вы не можете его открыть.",
    ha_role_admin: "Админ HA",
    ha_role_standard: "Пользователь HA",
    login_btn: "Войти",
    cancel_btn: "Отмена",
    pin_placeholder: "PIN доступа",
    link_ha_user: "Связать с пользователем Home Assistant",
    ha_admin_label: "Администратор Home Assistant",
    ha_standard_user_label: "Стандартный пользователь HA",
    role_argus_standard: "Стандартный пользователь"
  }
}, Vt = {
  es: { use_ha_language: "Usar idioma de Home Assistant", emergency_number_label: "🚨 Número local de emergencias", emergency_help: "Configúralo según la ubicación del hogar (p. ej., Costa Rica: 911; España: 112). Se incluirá en las alertas SOS.", sos_actions: "🚨 Acciones SOS", sos_select_outputs: "Seleccionar luces, sirenas o scripts", sos_outputs_help: "Estos dispositivos se activarán siempre al usar SOS, incluso con Argus desarmado.", sos_no_outputs: "Sin dispositivos seleccionados", sos_call_help: "Si este equipo no admite llamadas, Argus enviará una alerta urgente a los dispositivos móviles configurados.", sos_stop: "🛑 DETENER PÁNICO", customize: "Personalizar", done: "Listo", sos_activated: "SOS activado", sos_call_confirm: "¿Quieres llamar ahora a emergencias ({number})?", sos_error: "No se pudo activar el SOS: {error}", no_alarm_instance: "No hay una instancia de alarma disponible", panic_state_unknown: "No se pudo determinar el estado anterior del pánico. Desarma o rearma manualmente.", panic_stopped: "Pánico detenido; restaurado a {state}", panic_stop_error: "No se pudo detener el pánico: {error}", selector_panic: "🚨 Acciones SOS", status_open: "Abierto", status_closed: "Cerrado", status_idle: "En reposo", status_recording: "Grabando", status_home: "En casa", status_away: "Fuera", no_results: "Sin resultados", user_required: "Nombre y PIN requeridos", generic_error: "Error: {error}", clear_history_confirm: "¿Seguro que quieres borrar todo el historial?", export_error: "Error al exportar: {error}", invalid_config: "Archivo de configuración no válido.", import_success: "Configuración restaurada con éxito. Recargando...", import_error: "Error al importar: {error}", file_read_error: "No se pudo leer el archivo.", reset_confirm: "¿Estás seguro de que deseas restablecer Argus a sus valores de fábrica? Perderás todas tus configuraciones, PINs y modos.", reset_success: "Argus restablecido. Tienes unos segundos para deshacer si cambias de opinión, o simplemente recarga la página para aplicar los cambios.", reset_error: "Error al restablecer: {error}", undo_success: "Restablecimiento deshecho con éxito.", undo_error: "Error al deshacer: {error}", url_placeholder: "URL del fondo...", loading: "Cargando...", delete: "Borrar", fullscreen_title: "Pantalla completa", home_default: "Mi Casa", home_fallback: "Hogar", user_default: "Usuario", temp_notification_title: "Argus — Alerta de Temperatura", action_failed: "No se pudo realizar la acción", cannot_arm: "No se puede armar", open_sensors_explain: `Los siguientes sensores están abiertos:
{names}

Ciérralos antes de armar, o activa “Omitir” en el sensor.`, pin_disarm_error: "PIN incorrecto o error al desarmar", notification_disarmed: "{user} desarmó el sistema.", notification_armed: "{user} activó el modo {mode}.", upload_error: "Falló la subida.", delete_file_error: "No se pudo eliminar el archivo: {error}", file_choice: `“{file}”

¿Usar como imagen estática (Aceptar) o como video animado (Cancelar)?

• Aceptar → Imagen estática
• Cancelar → Video animado`, first_run_blocked_title: "Acceso denegado", first_run_blocked_desc: "Se requiere un administrador de Home Assistant para configurar Argus por primera vez.", first_run_welcome: "Gracias por elegir Argus Home Hub. Bienvenido/a.", first_run_desc: "Complete la configuración para proteger su hogar.", first_run_pin_expl: "El PIN de acceso abre Argus. El PIN maestro controla el armado y desarmado.", first_run_skip: "Omitir por ahora", first_run_start: "Comenzar con Argus" },
  en: { use_ha_language: "Use Home Assistant language", emergency_number_label: "🚨 Local emergency number", emergency_help: "Configure it for the home location (e.g., Costa Rica: 911; Spain: 112). It will be included in SOS alerts.", sos_actions: "🚨 SOS actions", sos_select_outputs: "Select lights, sirens, or scripts", sos_outputs_help: "These devices will always activate when SOS is used, even while Argus is disarmed.", sos_no_outputs: "No devices selected", sos_call_help: "If this device cannot place calls, Argus will send an urgent alert to the configured mobile devices.", sos_stop: "🛑 STOP PANIC", customize: "Customize", done: "Done", sos_activated: "SOS activated", sos_call_confirm: "Call emergency services now ({number})?", sos_error: "Could not activate SOS: {error}", no_alarm_instance: "No alarm instance is available", panic_state_unknown: "The prior panic state could not be determined. Disarm or arm manually.", panic_stopped: "Panic stopped; restored to {state}", panic_stop_error: "Could not stop panic: {error}", selector_panic: "🚨 SOS actions", status_open: "Open", status_closed: "Closed", status_idle: "Idle", status_recording: "Recording", status_home: "Home", status_away: "Away", no_results: "No results", user_required: "Name and PIN are required", generic_error: "Error: {error}", clear_history_confirm: "Delete the entire activity history?", export_error: "Export failed: {error}", invalid_config: "Invalid configuration file.", import_success: "Configuration restored successfully. Reloading…", import_error: "Import failed: {error}", file_read_error: "Could not read the file.", reset_confirm: "Reset Argus to factory settings? All configurations, PINs, and modes will be lost.", reset_success: "Argus was reset. You have a few seconds to undo it, or reload the page to apply the changes.", reset_error: "Reset failed: {error}", undo_success: "Reset undone successfully.", undo_error: "Could not undo reset: {error}", url_placeholder: "Background URL…", loading: "Loading…", delete: "Delete", fullscreen_title: "Full screen", home_default: "My Home", home_fallback: "Home", user_default: "User", temp_notification_title: "Argus — Temperature Alert", action_failed: "Action could not be completed", cannot_arm: "Cannot arm", open_sensors_explain: `The following sensors are open:
{names}

Close them before arming, or enable “Bypass” on the sensor.`, pin_disarm_error: "Incorrect PIN or error while disarming", notification_disarmed: "{user} disarmed the system.", notification_armed: "{user} activated {mode} mode.", upload_error: "Upload failed.", delete_file_error: "Could not delete the file: {error}", file_choice: `“{file}”

Use as a static image (OK) or an animated video (Cancel)?

• OK → Static image
• Cancel → Animated video`, first_run_blocked_title: "Access Denied", first_run_blocked_desc: "A Home Assistant administrator is required to configure Argus for the first time.", first_run_welcome: "Thank you for choosing Argus Home Hub. Welcome.", first_run_desc: "Complete setup to secure your home.", first_run_pin_expl: "The access PIN opens Argus. The master PIN controls arming and disarming.", first_run_skip: "Skip for now", first_run_start: "Start with Argus" },
  fr: { use_ha_language: "Utiliser la langue de Home Assistant", emergency_number_label: "🚨 Numéro d’urgence local", emergency_help: "Configurez-le pour le domicile (ex. Costa Rica : 911 ; Espagne : 112). Il sera inclus dans les alertes SOS.", sos_actions: "🚨 Actions SOS", sos_select_outputs: "Sélectionner lumières, sirènes ou scripts", sos_outputs_help: "Ces appareils s’activeront toujours avec SOS, même si Argus est désarmé.", sos_no_outputs: "Aucun appareil sélectionné", sos_call_help: "Si cet appareil ne peut pas appeler, Argus enverra une alerte urgente aux appareils mobiles configurés.", sos_stop: "🛑 ARRÊTER LA PANIQUE", customize: "Personnaliser", done: "Terminé", sos_activated: "SOS activé", sos_call_confirm: "Appeler les urgences maintenant ({number}) ?", sos_error: "Impossible d’activer SOS : {error}", no_alarm_instance: "Aucune instance d’alarme disponible", panic_state_unknown: "L’état antérieur de la panique est inconnu. Armez ou désarmez manuellement.", panic_stopped: "Panique arrêtée ; rétablie à {state}", panic_stop_error: "Impossible d’arrêter la panique : {error}", selector_panic: "🚨 Actions SOS", status_open: "Ouvert", status_closed: "Fermé", status_idle: "Au repos", status_recording: "Enregistrement", status_home: "Maison", status_away: "Absent", no_results: "Aucun résultat", user_required: "Nom et PIN requis", generic_error: "Erreur : {error}", clear_history_confirm: "Supprimer tout l’historique d’activité ?", export_error: "Échec de l’exportation : {error}", invalid_config: "Fichier de configuration invalide.", import_success: "Configuration restaurée. Rechargement…", import_error: "Échec de l’importation : {error}", file_read_error: "Impossible de lire le fichier.", reset_confirm: "Réinitialiser Argus ? Toutes les configurations, PIN et modes seront perdus.", reset_success: "Argus a été réinitialisé. Vous avez quelques secondes pour annuler.", reset_error: "Échec de la réinitialisation : {error}", undo_success: "Réinitialisation annulée.", undo_error: "Impossible d’annuler : {error}", url_placeholder: "URL de l’arrière-plan…", loading: "Chargement…", delete: "Supprimer", fullscreen_title: "Plein écran", home_default: "Ma maison", home_fallback: "Maison", user_default: "Utilisateur", temp_notification_title: "Argus — Alerte de température", action_failed: "Action impossible", cannot_arm: "Impossible d’armer", open_sensors_explain: `Les capteurs suivants sont ouverts :
{names}

Fermez-les avant d’armer ou activez « Ignorer ». `, pin_disarm_error: "PIN incorrect ou erreur de désarmement", notification_disarmed: "{user} a désarmé le système.", notification_armed: "{user} a activé le mode {mode}.", upload_error: "Échec du téléversement.", delete_file_error: "Impossible de supprimer le fichier : {error}", file_choice: `« {file} »

Utiliser comme image fixe (OK) ou vidéo animée (Annuler) ?`, first_run_blocked_title: "Accès refusé", first_run_blocked_desc: "Un administrateur Home Assistant est requis pour configurer Argus pour la première fois.", first_run_welcome: "Merci d'avoir choisi Argus Home Hub. Bienvenue.", first_run_desc: "Terminez la configuration pour sécuriser votre domicile.", first_run_pin_expl: "Le code d'accès ouvre Argus. Le code maître contrôle l'armement.", first_run_skip: "Ignorer pour l'instant", first_run_start: "Commencer avec Argus" },
  pt: { use_ha_language: "Usar idioma do Home Assistant", emergency_number_label: "🚨 Número local de emergência", emergency_help: "Configure para a localização da casa (ex.: Costa Rica: 911; Espanha: 112). Será incluído nos alertas SOS.", sos_actions: "🚨 Ações SOS", sos_select_outputs: "Selecionar luzes, sirenes ou scripts", sos_outputs_help: "Estes dispositivos sempre serão ativados ao usar SOS, mesmo com Argus desarmado.", sos_no_outputs: "Nenhum dispositivo selecionado", sos_call_help: "Se este dispositivo não puder ligar, o Argus enviará um alerta urgente aos dispositivos móveis configurados.", sos_stop: "🛑 PARAR PÂNICO", customize: "Personalizar", done: "Concluído", sos_activated: "SOS ativado", sos_call_confirm: "Ligar para emergência agora ({number})?", sos_error: "Não foi possível ativar SOS: {error}", no_alarm_instance: "Nenhuma instância de alarme disponível", panic_state_unknown: "Não foi possível determinar o estado anterior do pânico. Arme ou desarme manualmente.", panic_stopped: "Pânico parado; restaurado para {state}", panic_stop_error: "Não foi possível parar o pânico: {error}", selector_panic: "🚨 Ações SOS", status_open: "Aberto", status_closed: "Fechado", status_idle: "Em repouso", status_recording: "Gravando", status_home: "Em casa", status_away: "Fora", no_results: "Sem resultados", user_required: "Nome e PIN são obrigatórios", generic_error: "Erro: {error}", clear_history_confirm: "Excluir todo o histórico de atividade?", export_error: "Erro ao exportar: {error}", invalid_config: "Arquivo de configuração inválido.", import_success: "Configuração restaurada. Recarregando…", import_error: "Erro ao importar: {error}", file_read_error: "Não foi possível ler o arquivo.", reset_confirm: "Restaurar Argus aos padrões de fábrica? Todas as configurações, PINs e modos serão perdidos.", reset_success: "Argus foi restaurado. Você tem alguns segundos para desfazer.", reset_error: "Erro ao restaurar: {error}", undo_success: "Restauração desfeita.", undo_error: "Erro ao desfazer: {error}", url_placeholder: "URL do fundo…", loading: "Carregando…", delete: "Excluir", fullscreen_title: "Tela cheia", home_default: "Minha Casa", home_fallback: "Casa", user_default: "Usuário", temp_notification_title: "Argus — Alerta de Temperatura", action_failed: "Não foi possível realizar a ação", cannot_arm: "Não é possível armar", open_sensors_explain: `Os seguintes sensores estão abertos:
{names}

Feche-os antes de armar ou ative “Ignorar”.`, pin_disarm_error: "PIN incorreto ou erro ao desarmar", notification_disarmed: "{user} desarmou o sistema.", notification_armed: "{user} ativou o modo {mode}.", upload_error: "Falha no envio.", delete_file_error: "Não foi possível excluir o arquivo: {error}", file_choice: `“{file}”

Usar como imagem estática (OK) ou vídeo animado (Cancelar)?`, first_run_blocked_title: "Acesso negado", first_run_blocked_desc: "É necessário um administrador do Home Assistant para configurar o Argus pela primeira vez.", first_run_welcome: "Obrigado por escolher o Argus Home Hub. Bem-vindo(a).", first_run_desc: "Conclua a configuração para proteger sua casa.", first_run_pin_expl: "O PIN de acesso abre o Argus. O PIN mestre controla armar e desarmar.", first_run_skip: "Ignorar por agora", first_run_start: "Começar com Argus" },
  it: { use_ha_language: "Usa la lingua di Home Assistant", emergency_number_label: "🚨 Numero di emergenza locale", emergency_help: "Configurarlo per la posizione della casa (es. Costa Rica: 911; Spagna: 112). Sarà incluso negli avvisi SOS.", sos_actions: "🚨 Azioni SOS", sos_select_outputs: "Seleziona luci, sirene o script", sos_outputs_help: "Questi dispositivi saranno sempre attivati con SOS, anche se Argus è disarmato.", sos_no_outputs: "Nessun dispositivo selezionato", sos_call_help: "Se questo dispositivo non può effettuare chiamate, Argus invierà un avviso urgente ai dispositivi mobili configurati.", sos_stop: "🛑 FERMA PANICO", customize: "Personalizza", done: "Fine", sos_activated: "SOS attivato", sos_call_confirm: "Chiamare ora i servizi di emergenza ({number})?", sos_error: "Impossibile attivare SOS: {error}", no_alarm_instance: "Nessuna istanza di allarme disponibile", panic_state_unknown: "Impossibile determinare lo stato precedente del panico. Armare o disarmare manualmente.", panic_stopped: "Panico fermato; ripristinato a {state}", panic_stop_error: "Impossibile fermare il panico: {error}", selector_panic: "🚨 Azioni SOS", status_open: "Aperto", status_closed: "Chiuso", status_idle: "Inattivo", status_recording: "Registrazione", status_home: "Casa", status_away: "Fuori", no_results: "Nessun risultato", user_required: "Nome e PIN obbligatori", generic_error: "Errore: {error}", clear_history_confirm: "Eliminare tutta la cronologia attività?", export_error: "Esportazione non riuscita: {error}", invalid_config: "File di configurazione non valido.", import_success: "Configurazione ripristinata. Ricaricamento…", import_error: "Importazione non riuscita: {error}", file_read_error: "Impossibile leggere il file.", reset_confirm: "Ripristinare Argus alle impostazioni di fabbrica? Configurazioni, PIN e modalità saranno persi.", reset_success: "Argus è stato ripristinato. Hai alcuni secondi per annullare.", reset_error: "Ripristino non riuscito: {error}", undo_success: "Ripristino annullato.", undo_error: "Impossibile annullare: {error}", url_placeholder: "URL dello sfondo…", loading: "Caricamento…", delete: "Elimina", fullscreen_title: "Schermo intero", home_default: "Casa mia", home_fallback: "Casa", user_default: "Utente", temp_notification_title: "Argus — Avviso temperatura", action_failed: "Impossibile eseguire l’azione", cannot_arm: "Impossibile armare", open_sensors_explain: `I seguenti sensori sono aperti:
{names}

Chiudili prima di armare o abilita “Ignora”.`, pin_disarm_error: "PIN errato o errore durante il disarmo", notification_disarmed: "{user} ha disarmato il sistema.", notification_armed: "{user} ha attivato la modalità {mode}.", upload_error: "Caricamento non riuscito.", delete_file_error: "Impossibile eliminare il file: {error}", file_choice: `“{file}”

Usare come immagine statica (OK) o video animato (Annulla)?`, first_run_blocked_title: "Accesso negato", first_run_blocked_desc: "È necessario un amministratore di Home Assistant per configurare Argus per la prima volta.", first_run_welcome: "Grazie per aver scelto Argus Home Hub. Benvenuto/a.", first_run_desc: "Completa la configurazione per proteggere la tua casa.", first_run_pin_expl: "Il PIN di accesso apre Argus. Il PIN master controlla l'inserimento e il disinserimento.", first_run_skip: "Salta per ora", first_run_start: "Inizia con Argus" },
  zh: { use_ha_language: "使用 Home Assistant 语言", emergency_number_label: "🚨 本地紧急号码", emergency_help: "请按家庭所在地设置（例如哥斯达黎加：911；西班牙：112）。该号码将包含在 SOS 警报中。", sos_actions: "🚨 SOS 操作", sos_select_outputs: "选择灯、警报器或脚本", sos_outputs_help: "即使 Argus 已撤防，使用 SOS 时这些设备也会始终启动。", sos_no_outputs: "未选择设备", sos_call_help: "如果该设备无法拨号，Argus 将向已配置的移动设备发送紧急警报。", sos_stop: "🛑 停止紧急状态", customize: "自定义", done: "完成", sos_activated: "SOS 已激活", sos_call_confirm: "现在拨打紧急服务电话 ({number})？", sos_error: "无法激活 SOS：{error}", no_alarm_instance: "没有可用的警报实例", panic_state_unknown: "无法确定紧急状态之前的状态。请手动布防或撤防。", panic_stopped: "紧急状态已停止；恢复为 {state}", panic_stop_error: "无法停止紧急状态：{error}", selector_panic: "🚨 SOS 操作", status_open: "打开", status_closed: "关闭", status_idle: "空闲", status_recording: "录制中", status_home: "在家", status_away: "离家", no_results: "无结果", user_required: "需要姓名和 PIN", generic_error: "错误：{error}", clear_history_confirm: "删除全部活动历史记录？", export_error: "导出失败：{error}", invalid_config: "配置文件无效。", import_success: "配置已恢复。正在重新加载…", import_error: "导入失败：{error}", file_read_error: "无法读取文件。", reset_confirm: "将 Argus 恢复为出厂设置？所有配置、PIN 和模式将丢失。", reset_success: "Argus 已重置。你有几秒钟可以撤销。", reset_error: "重置失败：{error}", undo_success: "已撤销重置。", undo_error: "无法撤销重置：{error}", url_placeholder: "背景 URL…", loading: "正在加载…", delete: "删除", fullscreen_title: "全屏", home_default: "我的家", home_fallback: "家", user_default: "用户", temp_notification_title: "Argus — 温度警报", action_failed: "无法完成操作", cannot_arm: "无法布防", open_sensors_explain: `以下传感器处于打开状态：
{names}

请在布防前关闭它们，或启用“跳过”。`, pin_disarm_error: "PIN 错误或撤防时出错", notification_disarmed: "{user} 已撤防系统。", notification_armed: "{user} 已激活 {mode} 模式。", upload_error: "上传失败。", delete_file_error: "无法删除文件：{error}", file_choice: `“{file}”

用作静态图片（确定）还是动画视频（取消）？`, first_run_blocked_title: "拒绝访问", first_run_blocked_desc: "首次配置 Argus 需要 Home Assistant 管理员。", first_run_welcome: "感谢您选择 Argus Home Hub。欢迎。", first_run_desc: "完成设置以保护您的家庭。", first_run_pin_expl: "访问 PIN 用于打开 Argus。主 PIN 控制布防和撤防。", first_run_skip: "暂时跳过", first_run_start: "开始使用 Argus" },
  ru: { use_ha_language: "Использовать язык Home Assistant", emergency_number_label: "🚨 Местный номер экстренной службы", emergency_help: "Настройте для местоположения дома (например, Коста-Рика: 911; Испания: 112). Номер будет включён в SOS-оповещения.", sos_actions: "🚨 Действия SOS", sos_select_outputs: "Выбрать свет, сирены или сценарии", sos_outputs_help: "Эти устройства всегда будут включаться при SOS, даже когда Argus снят с охраны.", sos_no_outputs: "Устройства не выбраны", sos_call_help: "Если устройство не может звонить, Argus отправит срочное оповещение на настроенные мобильные устройства.", sos_stop: "🛑 ОСТАНОВИТЬ ТРЕВОГУ", customize: "Настроить", done: "Готово", sos_activated: "SOS активирован", sos_call_confirm: "Позвонить в экстренную службу ({number})?", sos_error: "Не удалось активировать SOS: {error}", no_alarm_instance: "Нет доступного экземпляра сигнализации", panic_state_unknown: "Невозможно определить предыдущее состояние тревоги. Поставьте или снимите с охраны вручную.", panic_stopped: "Тревога остановлена; восстановлено состояние {state}", panic_stop_error: "Не удалось остановить тревогу: {error}", selector_panic: "🚨 Действия SOS", status_open: "Открыто", status_closed: "Закрыто", status_idle: "Ожидание", status_recording: "Запись", status_home: "Дома", status_away: "Вне дома", no_results: "Нет результатов", user_required: "Требуются имя и PIN", generic_error: "Ошибка: {error}", clear_history_confirm: "Удалить всю историю активности?", export_error: "Ошибка экспорта: {error}", invalid_config: "Недопустимый файл конфигурации.", import_success: "Конфигурация восстановлена. Перезагрузка…", import_error: "Ошибка импорта: {error}", file_read_error: "Не удалось прочитать файл.", reset_confirm: "Сбросить Argus к заводским настройкам? Все конфигурации, PIN и режимы будут потеряны.", reset_success: "Argus сброшен. У вас есть несколько секунд, чтобы отменить это.", reset_error: "Ошибка сброса: {error}", undo_success: "Сброс отменён.", undo_error: "Не удалось отменить сброс: {error}", url_placeholder: "URL фона…", loading: "Загрузка…", delete: "Удалить", fullscreen_title: "Полный экран", home_default: "Мой дом", home_fallback: "Дом", user_default: "Пользователь", temp_notification_title: "Argus — Температурное предупреждение", action_failed: "Не удалось выполнить действие", cannot_arm: "Невозможно поставить на охрану", open_sensors_explain: `Следующие датчики открыты:
{names}

Закройте их перед постановкой на охрану или включите «Обход».`, pin_disarm_error: "Неверный PIN или ошибка снятия с охраны", notification_disarmed: "{user} снял систему с охраны.", notification_armed: "{user} активировал режим {mode}.", upload_error: "Ошибка загрузки.", delete_file_error: "Не удалось удалить файл: {error}", file_choice: `«{file}»

Использовать как статичное изображение (ОК) или анимированное видео (Отмена)?`, first_run_blocked_title: "Доступ запрещен", first_run_blocked_desc: "Для первой настройки Argus требуется администратор Home Assistant.", first_run_welcome: "Спасибо, что выбрали Argus Home Hub. Добро пожаловать.", first_run_desc: "Завершите настройку для безопасности вашего дома.", first_run_pin_expl: "PIN доступа открывает Argus. Мастер-PIN управляет постановкой и снятием с охраны.", first_run_skip: "Пропустить пока", first_run_start: "Начать с Argus" }
}, Gt = {
  es: { setup_required_title: "Falta configurar Argus", setup_required_desc: "Argus está instalado, pero todavía no existe una instancia. Añádela en Integraciones y luego vuelve a este panel.", setup_required_action: "Configurar Argus en Integraciones", welcome_profile: "Bienvenido/a, {name}", initialization_error_title: "Argus no pudo iniciar", initialization_error_desc: "No se pudo conectar con el backend autenticado de Home Assistant.", retry_action: "Reintentar" },
  en: { setup_required_title: "Argus setup required", setup_required_desc: "Argus is installed, but no instance exists yet. Add it in Integrations, then return to this panel.", setup_required_action: "Configure Argus in Integrations", welcome_profile: "Welcome, {name}", initialization_error_title: "Argus could not start", initialization_error_desc: "The authenticated Home Assistant backend connection could not be established.", retry_action: "Retry" },
  fr: { setup_required_title: "Configuration d’Argus requise", setup_required_desc: "Argus est installé, mais aucune instance n’existe encore. Ajoutez-la dans Intégrations, puis revenez à ce panneau.", setup_required_action: "Configurer Argus dans Intégrations", welcome_profile: "Bienvenue, {name}", initialization_error_title: "Argus n’a pas pu démarrer", initialization_error_desc: "La connexion authentifiée au backend Home Assistant a échoué.", retry_action: "Réessayer" },
  pt: { setup_required_title: "É necessário configurar o Argus", setup_required_desc: "O Argus está instalado, mas ainda não existe uma instância. Adicione-a em Integrações e volte a este painel.", setup_required_action: "Configurar Argus em Integrações", welcome_profile: "Bem-vindo(a), {name}", initialization_error_title: "O Argus não pôde iniciar", initialization_error_desc: "Não foi possível conectar ao backend autenticado do Home Assistant.", retry_action: "Tentar novamente" },
  it: { setup_required_title: "Configurazione di Argus necessaria", setup_required_desc: "Argus è installato, ma non esiste ancora un’istanza. Aggiungila in Integrazioni, poi torna a questo pannello.", setup_required_action: "Configura Argus in Integrazioni", welcome_profile: "Benvenuto/a, {name}", initialization_error_title: "Argus non si è avviato", initialization_error_desc: "Impossibile connettersi al backend autenticato di Home Assistant.", retry_action: "Riprova" },
  zh: { setup_required_title: "需要配置 Argus", setup_required_desc: "Argus 已安装，但尚未创建实例。请在“集成”中添加，然后返回此面板。", setup_required_action: "在集成中配置 Argus", welcome_profile: "欢迎，{name}", initialization_error_title: "Argus 无法启动", initialization_error_desc: "无法连接到 Home Assistant 的已认证后端。", retry_action: "重试" },
  ru: { setup_required_title: "Требуется настройка Argus", setup_required_desc: "Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.", setup_required_action: "Настроить Argus в интеграциях", welcome_profile: "Добро пожаловать, {name}", initialization_error_title: "Не удалось запустить Argus", initialization_error_desc: "Не удалось подключиться к авторизованному backend Home Assistant.", retry_action: "Повторить" }
}, Yt = {
  es: {
    github_title: "Apoya a Argus",
    github_desc: "Si te gusta este proyecto, considera darle una estrella en GitHub para apoyar su desarrollo.",
    github_action: "Dar estrella en GitHub",
    history_refresh: "Actualizar",
    history_unavailable: "No se pudo cargar el historial. Verifica el permiso «Ver historial» e inténtalo de nuevo.",
    user_no_pin: "Sin PIN",
    user_pin_action: "PIN",
    user_role_action: "Rol",
    notif_no_services: "Sin servicios móviles",
    log_action_user_logged_in: "Inicio de sesión",
    log_action_state_restored: "Estado restaurado",
    log_action_profile_selected: "Perfil seleccionado",
    log_action_schedule_applied: "Horario aplicado",
    log_action_mode_changed: "Modo cambiado",
    log_action_backup_created: "Copia de seguridad creada",
    log_action_backup_restored: "Configuración restaurada",
    log_action_access_pin_updated: "PIN de acceso actualizado",
    modal_cancel: "Cancelar",
    modal_save: "Guardar",
    modal_confirm: "Confirmar",
    modal_pin_title: "PIN de acceso",
    modal_pin_help: "Deja en blanco para eliminar el PIN de acceso.",
    modal_edit_name: "Editar nombre",
    modal_add_user: "+ Agregar usuario manual",
    modal_name_label: "Nombre del perfil",
    modal_user_added: "Usuario creado.",
    modal_delete_confirm: "¿Eliminar este usuario? Esta acción no se puede deshacer."
  },
  en: {
    github_title: "Support Argus",
    github_desc: "If you like this project, consider starring it on GitHub to support its development.",
    github_action: "Star on GitHub",
    history_refresh: "Refresh",
    history_unavailable: "Activity history could not be loaded. Check the “View history” permission and try again.",
    user_no_pin: "No PIN",
    user_pin_action: "PIN",
    user_role_action: "Role",
    notif_no_services: "No mobile services",
    log_action_user_logged_in: "User login",
    log_action_state_restored: "State restored",
    log_action_profile_selected: "Profile selected",
    log_action_schedule_applied: "Schedule applied",
    log_action_mode_changed: "Mode changed",
    log_action_backup_created: "Backup created",
    log_action_backup_restored: "Configuration restored",
    log_action_access_pin_updated: "Access PIN updated",
    modal_cancel: "Cancel",
    modal_save: "Save",
    modal_confirm: "Confirm",
    modal_pin_title: "Access PIN",
    modal_pin_help: "Leave blank to remove the access PIN.",
    modal_edit_name: "Edit name",
    modal_add_user: "+ Add manual user",
    modal_name_label: "Profile name",
    modal_user_added: "User created.",
    modal_delete_confirm: "Delete this user? This action cannot be undone."
  },
  fr: {
    github_title: "Soutenez Argus",
    github_desc: "Si vous aimez ce projet, ajoutez une étoile sur GitHub pour soutenir son développement.",
    github_action: "Ajouter une étoile sur GitHub",
    history_refresh: "Actualiser",
    history_unavailable: "Impossible de charger l’historique. Vérifiez l’autorisation « Voir l’historique » et réessayez.",
    user_no_pin: "Sans PIN",
    user_pin_action: "PIN",
    user_role_action: "Rôle",
    notif_no_services: "Aucun service mobile",
    log_action_user_logged_in: "Connexion",
    log_action_state_restored: "État restauré",
    log_action_profile_selected: "Profil sélectionné",
    log_action_schedule_applied: "Horaire appliqué",
    log_action_mode_changed: "Mode modifié",
    log_action_backup_created: "Sauvegarde créée",
    log_action_backup_restored: "Configuration restaurée",
    log_action_access_pin_updated: "PIN d’accès mis à jour",
    modal_cancel: "Annuler",
    modal_save: "Enregistrer",
    modal_confirm: "Confirmer",
    modal_pin_title: "PIN d’accès",
    modal_pin_help: "Laissez vide pour supprimer le PIN.",
    modal_edit_name: "Modifier le nom",
    modal_add_user: "+ Ajouter un utilisateur",
    modal_name_label: "Nom du profil",
    modal_user_added: "Utilisateur créé.",
    modal_delete_confirm: "Supprimer cet utilisateur ?"
  },
  pt: {
    github_title: "Apoie o Argus",
    github_desc: "Se você gosta deste projeto, dê uma estrela no GitHub para apoiar o desenvolvimento.",
    github_action: "Dar estrela no GitHub",
    history_refresh: "Atualizar",
    history_unavailable: "Não foi possível carregar o histórico. Verifique a permissão “Ver histórico” e tente novamente.",
    user_no_pin: "Sem PIN",
    user_pin_action: "PIN",
    user_role_action: "Função",
    notif_no_services: "Sem serviços móveis",
    log_action_user_logged_in: "Login do usuário",
    log_action_state_restored: "Estado restaurado",
    log_action_profile_selected: "Perfil selecionado",
    log_action_schedule_applied: "Horário aplicado",
    log_action_mode_changed: "Modo alterado",
    log_action_backup_created: "Backup criado",
    log_action_backup_restored: "Configuração restaurada",
    log_action_access_pin_updated: "PIN de acesso atualizado",
    modal_cancel: "Cancelar",
    modal_save: "Salvar",
    modal_confirm: "Confirmar",
    modal_pin_title: "PIN de acesso",
    modal_pin_help: "Deixe em branco para remover o PIN.",
    modal_edit_name: "Editar nome",
    modal_add_user: "+ Adicionar usuário",
    modal_name_label: "Nome do perfil",
    modal_user_added: "Usuário criado.",
    modal_delete_confirm: "Excluir este usuário?"
  },
  it: {
    github_title: "Sostieni Argus",
    github_desc: "Se ti piace questo progetto, aggiungi una stella su GitHub per sostenerne lo sviluppo.",
    github_action: "Aggiungi una stella su GitHub",
    history_refresh: "Aggiorna",
    history_unavailable: "Impossibile caricare la cronologia. Controlla il permesso “Visualizza cronologia” e riprova.",
    user_no_pin: "Senza PIN",
    user_pin_action: "PIN",
    user_role_action: "Ruolo",
    notif_no_services: "Nessun servizio mobile",
    log_action_user_logged_in: "Accesso utente",
    log_action_state_restored: "Stato ripristinato",
    log_action_profile_selected: "Profilo selezionato",
    log_action_schedule_applied: "Pianificazione applicata",
    log_action_mode_changed: "Modalità cambiata",
    log_action_backup_created: "Backup creato",
    log_action_backup_restored: "Configurazione ripristinata",
    log_action_access_pin_updated: "PIN di accesso aggiornato",
    modal_cancel: "Annulla",
    modal_save: "Salva",
    modal_confirm: "Conferma",
    modal_pin_title: "PIN di accesso",
    modal_pin_help: "Lascia vuoto per rimuovere il PIN.",
    modal_edit_name: "Modifica nome",
    modal_add_user: "+ Aggiungi utente",
    modal_name_label: "Nome del profilo",
    modal_user_added: "Utente creato.",
    modal_delete_confirm: "Eliminare questo utente?"
  },
  zh: {
    github_title: "支持 Argus",
    github_desc: "如果您喜欢这个项目，请在 GitHub 上加星以支持其开发。",
    github_action: "在 GitHub 上加星",
    history_refresh: "刷新",
    history_unavailable: "无法加载活动历史。请检查“查看历史”权限后重试。",
    user_no_pin: "无 PIN",
    user_pin_action: "PIN",
    user_role_action: "角色",
    notif_no_services: "无移动服务",
    log_action_user_logged_in: "用户登录",
    log_action_state_restored: "状态已恢复",
    log_action_profile_selected: "已选择配置文件",
    log_action_schedule_applied: "已应用计划",
    log_action_mode_changed: "模式已更改",
    log_action_backup_created: "已创建备份",
    log_action_backup_restored: "配置已恢复",
    log_action_access_pin_updated: "访问 PIN 已更新",
    modal_cancel: "取消",
    modal_save: "保存",
    modal_confirm: "确认",
    modal_pin_title: "访问 PIN",
    modal_pin_help: "留空以删除访问 PIN。",
    modal_edit_name: "编辑名称",
    modal_add_user: "+ 添加用户",
    modal_name_label: "配置文件名称",
    modal_user_added: "用户已创建。",
    modal_delete_confirm: "删除此用户？"
  },
  ru: {
    github_title: "Поддержите Argus",
    github_desc: "Если вам нравится проект, поставьте звезду на GitHub, чтобы поддержать разработку.",
    github_action: "Поставить звезду на GitHub",
    history_refresh: "Обновить",
    history_unavailable: "Не удалось загрузить историю. Проверьте разрешение «Просмотр истории» и повторите попытку.",
    user_no_pin: "Без PIN",
    user_pin_action: "PIN",
    user_role_action: "Роль",
    notif_no_services: "Нет мобильных служб",
    log_action_user_logged_in: "Вход пользователя",
    log_action_state_restored: "Состояние восстановлено",
    log_action_profile_selected: "Профиль выбран",
    log_action_schedule_applied: "Расписание применено",
    log_action_mode_changed: "Режим изменён",
    log_action_backup_created: "Резервная копия создана",
    log_action_backup_restored: "Конфигурация восстановлена",
    log_action_access_pin_updated: "PIN доступа обновлён",
    modal_cancel: "Отмена",
    modal_save: "Сохранить",
    modal_confirm: "Подтвердить",
    modal_pin_title: "PIN доступа",
    modal_pin_help: "Оставьте пустым, чтобы удалить PIN.",
    modal_edit_name: "Изменить имя",
    modal_add_user: "+ Добавить пользователя",
    modal_name_label: "Имя профиля",
    modal_user_added: "Пользователь создан.",
    modal_delete_confirm: "Удалить этого пользователя?"
  }
}, Kt = {
  es: { setup_admin_name: "Nombre del Administrador", setup_access_pin: "PIN de acceso al panel Argus (Opcional)", setup_master_pin: "PIN maestro para armar/desarmar (Opcional)", claim_title: "Argus Security Update", claim_desc: "Tu instalación requiere un administrador para reclamar el acceso.", claim_btn: "Reclamar Administración" },
  en: { setup_admin_name: "Administrator Name", setup_access_pin: "Argus panel access PIN (Optional)", setup_master_pin: "Master PIN to arm/disarm (Optional)", claim_title: "Argus Security Update", claim_desc: "Your installation needs an administrator to claim access.", claim_btn: "Claim Administration" },
  fr: { setup_admin_name: "Nom de l’administrateur", setup_access_pin: "PIN d’accès au panneau Argus (Optionnel)", setup_master_pin: "PIN maître pour armer/désarmer (Optionnel)", claim_title: "Mise à jour de sécurité Argus", claim_desc: "Votre installation nécessite un administrateur pour réclamer l’accès.", claim_btn: "Réclamer l’administration" },
  pt: { setup_admin_name: "Nome do Administrador", setup_access_pin: "PIN de acesso ao painel Argus (Opcional)", setup_master_pin: "PIN mestre para armar/desarmar (Opcional)", claim_title: "Atualização de Segurança Argus", claim_desc: "Sua instalação precisa de um administrador para reivindicar o acesso.", claim_btn: "Reivindicar Administração" },
  it: { setup_admin_name: "Nome dell’amministratore", setup_access_pin: "PIN di accesso al pannello Argus (Opzionale)", setup_master_pin: "PIN master per armare/disarmare (Opzionale)", claim_title: "Aggiornamento di sicurezza Argus", claim_desc: "La tua installazione richiede un amministratore per rivendicare l’accesso.", claim_btn: "Rivendica Amministrazione" },
  zh: { setup_admin_name: "管理员名称", setup_access_pin: "Argus 面板访问 PIN (可选)", setup_master_pin: "布防/撤防主 PIN (可选)", claim_title: "Argus 安全更新", claim_desc: "您的安装需要管理员来声明访问权限。", claim_btn: "声明管理权限" },
  ru: { setup_admin_name: "Имя администратора", setup_access_pin: "PIN доступа к панели Argus (Необязательно)", setup_master_pin: "Мастер-PIN для постановки/снятия с охраны (Необязательно)", claim_title: "Обновление безопасности Argus", claim_desc: "Вашей установке требуется администратор для получения доступа.", claim_btn: "Заявить права администратора" }
};
for (const a of Object.keys(w))
  Object.assign(w[a], Vt[a], Gt[a], Yt[a], Kt[a]);
Object.assign(w.es, { expired: "Expirado", active_until: "Vigente hasta", exp_indefinite: "Indefinido" });
Object.assign(w.en, { expired: "Expired", active_until: "Valid until", exp_indefinite: "Indefinite" });
Object.assign(w.fr, { expired: "Expiré", active_until: "Expire", exp_indefinite: "Indéfini" });
Object.assign(w.pt, { expired: "Expirado", active_until: "Expira", exp_indefinite: "Indefinido" });
Object.assign(w.it, { expired: "Scaduto", active_until: "Scade", exp_indefinite: "Indefinito" });
Object.assign(w.zh, { expired: "已过期", active_until: "到期", exp_indefinite: "无限期" });
Object.assign(w.ru, { expired: "Истёк", active_until: "Действует до", exp_indefinite: "Бессрочно" });
Object.assign(w.es, { entry_sensors: "Sensores con retraso de entrada", select_entry_sensors: "Seleccionar sensores de entrada" });
Object.assign(w.en, { entry_sensors: "Entry-delay sensors", select_entry_sensors: "Select entry sensors" });
Object.assign(w.fr, { entry_sensors: "Capteurs avec délai d’entrée", select_entry_sensors: "Sélectionner les capteurs d’entrée" });
Object.assign(w.pt, { entry_sensors: "Sensores com atraso de entrada", select_entry_sensors: "Selecionar sensores de entrada" });
Object.assign(w.it, { entry_sensors: "Sensori con ritardo di ingresso", select_entry_sensors: "Seleziona sensori di ingresso" });
Object.assign(w.zh, { entry_sensors: "具有进入延迟的传感器", select_entry_sensors: "选择进入传感器" });
Object.assign(w.ru, { entry_sensors: "Датчики с задержкой входа", select_entry_sensors: "Выбрать датчики входа" });
Object.assign(w.es, { entry_delay_toggle: "Retraso de entrada (⏳) o instantáneo (⚡)", saved: "✓ Guardado correctamente", pin_mismatch: "❌ El nuevo PIN no coincide" });
Object.assign(w.en, { entry_delay_toggle: "Entry delay (⏳) or instant (⚡)", saved: "✓ Saved successfully", pin_mismatch: "❌ New PIN does not match" });
Object.assign(w.fr, { entry_delay_toggle: "Délai d’entrée (⏳) ou instantané (⚡)", saved: "✓ Enregistré", pin_mismatch: "❌ Le nouveau code PIN ne correspond pas" });
Object.assign(w.pt, { entry_delay_toggle: "Atraso de entrada (⏳) ou instantâneo (⚡)", saved: "✓ Salvo com sucesso", pin_mismatch: "❌ O novo PIN não coincide" });
Object.assign(w.it, { entry_delay_toggle: "Ritardo di ingresso (⏳) o istantaneo (⚡)", saved: "✓ Salvato correttamente", pin_mismatch: "❌ Il nuovo PIN non corrisponde" });
Object.assign(w.zh, { entry_delay_toggle: "进入延迟 (⏳) 或即时 (⚡)", saved: "✓ 已成功保存", pin_mismatch: "❌ 新 PIN 不匹配" });
Object.assign(w.ru, { entry_delay_toggle: "Задержка входа (⏳) или мгновенно (⚡)", saved: "✓ Успешно сохранено", pin_mismatch: "❌ Новый PIN-код не совпадает" });
Object.assign(w.es, { temp_displayed: "🌡️ Temperatura mostrada", weather_source: "☁️ Fuente de clima", weather_auto: "Automático (primera entidad de clima)", user_exp_type: "Vencimiento", user_exp_date: "Fecha/Hora de vencimiento", exp_temporary: "Temporal (fecha/hora)", log_mode: "Modo", log_action_user_added: "Usuario añadido", log_action_user_deleted: "Usuario eliminado", log_action_rejected: "Acción rechazada", log_action_automation: "Automatización ejecutada", log_action_analysis: "Análisis de IA", log_action_sos: "SOS activado", log_action_sos_stopped: "Pánico detenido" });
Object.assign(w.en, { temp_displayed: "🌡️ Displayed temperature", weather_source: "☁️ Weather source", weather_auto: "Automatic (first weather entity)", user_exp_type: "Expiration", user_exp_date: "Expiration date/time", exp_temporary: "Temporary (date/time)", log_mode: "Mode", log_action_user_added: "User added", log_action_user_deleted: "User deleted", log_action_rejected: "Action rejected", log_action_automation: "Automation executed", log_action_analysis: "AI analysis", log_action_sos: "SOS activated", log_action_sos_stopped: "Panic stopped" });
Object.assign(w.fr, { temp_displayed: "🌡️ Température affichée", weather_source: "☁️ Source météo", weather_auto: "Automatique (première entité météo)", user_exp_type: "Expiration", user_exp_date: "Date/heure d’expiration", exp_temporary: "Temporaire (date/heure)", log_mode: "Mode", log_action_user_added: "Utilisateur ajouté", log_action_user_deleted: "Utilisateur supprimé", log_action_rejected: "Action refusée", log_action_automation: "Automatisation exécutée", log_action_analysis: "Analyse IA", log_action_sos: "SOS activé", log_action_sos_stopped: "Panique arrêtée" });
Object.assign(w.pt, { temp_displayed: "🌡️ Temperatura exibida", weather_source: "☁️ Fonte de clima", weather_auto: "Automático (primeira entidade meteorológica)", user_exp_type: "Expiração", user_exp_date: "Data/hora de expiração", exp_temporary: "Temporário (data/hora)", log_mode: "Modo", log_action_user_added: "Usuário adicionado", log_action_user_deleted: "Usuário removido", log_action_rejected: "Ação recusada", log_action_automation: "Automação executada", log_action_analysis: "Análise de IA", log_action_sos: "SOS ativado", log_action_sos_stopped: "Pânico interrompido" });
Object.assign(w.it, { temp_displayed: "🌡️ Temperatura visualizzata", weather_source: "☁️ Fonte meteo", weather_auto: "Automatico (prima entità meteo)", user_exp_type: "Scadenza", user_exp_date: "Data/ora di scadenza", exp_temporary: "Temporaneo (data/ora)", log_mode: "Modalità", log_action_user_added: "Utente aggiunto", log_action_user_deleted: "Utente eliminato", log_action_rejected: "Azione rifiutata", log_action_automation: "Automazione eseguita", log_action_analysis: "Analisi IA", log_action_sos: "SOS attivato", log_action_sos_stopped: "Panico interrotto" });
Object.assign(w.zh, { temp_displayed: "🌡️ 显示的温度", weather_source: "☁️ 天气来源", weather_auto: "自动（第一个天气实体）", user_exp_type: "到期", user_exp_date: "到期日期/时间", exp_temporary: "临时（日期/时间）", log_mode: "模式", log_action_user_added: "已添加用户", log_action_user_deleted: "已删除用户", log_action_rejected: "操作被拒绝", log_action_automation: "自动化已执行", log_action_analysis: "AI 分析", log_action_sos: "SOS 已激活", log_action_sos_stopped: "紧急状态已停止" });
Object.assign(w.ru, { temp_displayed: "🌡️ Отображаемая температура", weather_source: "☁️ Источник погоды", weather_auto: "Автоматически (первая погодная сущность)", user_exp_type: "Срок действия", user_exp_date: "Дата/время окончания", exp_temporary: "Временный (дата/время)", log_mode: "Режим", log_action_user_added: "Пользователь добавлен", log_action_user_deleted: "Пользователь удалён", log_action_rejected: "Действие отклонено", log_action_automation: "Автоматизация выполнена", log_action_analysis: "Анализ ИИ", log_action_sos: "SOS активирован", log_action_sos_stopped: "Тревога остановлена" });
Object.assign(w.es, { external_panels: "Paneles de alarma externos", light_siren_color: "Color de alarma", light_siren_flash: "Destello suave si está disponible" });
Object.assign(w.en, { external_panels: "External alarm panels", light_siren_color: "Alarm colour", light_siren_flash: "Gentle flash when available" });
Object.assign(w.fr, { external_panels: "Panneaux d’alarme externes", light_siren_color: "Couleur d’alarme", light_siren_flash: "Clignotement doux si disponible" });
Object.assign(w.pt, { external_panels: "Painéis de alarme externos", light_siren_color: "Cor do alarme", light_siren_flash: "Piscar suave quando disponível" });
Object.assign(w.it, { external_panels: "Pannelli di allarme esterni", light_siren_color: "Colore allarme", light_siren_flash: "Lampeggio delicato se disponibile" });
Object.assign(w.zh, { external_panels: "外部报警面板", light_siren_color: "警报颜色", light_siren_flash: "可用时柔和闪烁" });
Object.assign(w.ru, { external_panels: "Внешние панели сигнализации", light_siren_color: "Цвет тревоги", light_siren_flash: "Мягкое мигание при наличии" });
const zt = document.createElement("template");
zt.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@keyframes heroSpringSlideIn {
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

  /* Modern Premium Liquid Glass & iOS Wobble Styles */
  :host {
    font-family: 'Inter', sans-serif !important;
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

  /* Garantiza legibilidad sobre cualquier fondo */
  :host([data-bg-mode="default"]) .hero-top-bar,
  :host([data-bg-mode="default"]) .entry-hud,
  :host([data-bg-mode="default"]) .mode-btn,
  :host([data-bg-mode="default"]) .sensor-pill {
    text-shadow: 0 1px 4px rgba(0,0,0,0.7);
  }

  :host([data-bg-mode="default"]) .mode-btn {
    background: rgba(255,255,255,0.10) !important;
    border: 1px solid rgba(255,255,255,0.18) !important;
    color: rgba(255,255,255,0.95) !important;
    backdrop-filter: blur(12px);
  }

  :host([data-bg-mode="default"]) .subsection-title,
  :host([data-bg-mode="default"]) .user-role-label {
    color: rgba(255,255,255,0.60) !important;
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
    background: linear-gradient(135deg,color-mix(in srgb,rgba(255,255,255,0.18) 80%,transparent),rgba(255,255,255,0.04));
    backdrop-filter: blur(28px) saturate(180%) brightness(1.08);
    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.08);
    border: 1px solid rgba(255,255,255,0.22);
    box-shadow: 0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25);
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
  .ios-confirm-backdrop.open { display: flex; pointer-events: auto !important; }
  .ios-confirm-backdrop.open * { pointer-events: auto; }
  .ios-confirm-backdrop.open .ios-slider-label { pointer-events: none !important; }
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
  .glass.liquid-glass{background:var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)))!important;backdrop-filter:blur(28px) saturate(150%)!important;-webkit-backdrop-filter:blur(28px) saturate(150%)!important;border-color:rgba(255,255,255,0.15)!important;box-shadow:0 8px 32px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.1)!important}
  button:focus-visible,input:focus-visible,select:focus-visible,[tabindex]:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#007aff) 70%,#fff);outline-offset:3px}
  button:disabled{cursor:not-allowed;opacity:.5;filter:saturate(.45)}
  @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
  .wrap{max-width:1400px;margin:0 auto;padding:24px;display:grid;gap:24px}
  .glass{background:var(--glass-bg, rgba(255, 255, 255, 0.06));border:1px solid var(--glass-border, rgba(255, 255, 255, 0.09));border-radius:28px;box-shadow:var(--glass-shadow);backdrop-filter:blur(12px) saturate(1.2);-webkit-backdrop-filter:blur(12px) saturate(1.2)}
  .hero{padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:var(--hero-bg, linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)));margin-bottom:12px;will-change:transform,opacity;animation:heroSpringSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both}
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
  .personalize-workspace{display:grid;grid-template-rows:0fr;opacity:0;pointer-events:none;transition:grid-template-rows 0.6s cubic-bezier(0.175,0.885,0.32,1.275),opacity 0.4s ease,margin-top 0.4s ease}
  .personalize-workspace > div { overflow:hidden; min-height:0; }
  .personalize-workspace:not(.collapsed){grid-template-rows:1fr;opacity:1;pointer-events:auto;margin-top:16px;animation:bounceExpand 0.55s cubic-bezier(0.175,0.885,0.32,1.275) forwards}
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
  .access-panel { padding: 22px 24px; overflow-y:auto; max-height:60vh; -webkit-overflow-scrolling:touch; }
  .access-panel .panel-head { margin-bottom: 12px; }
  .access-summary { font-size: 12px; opacity: .72; }
  .access-actions { display:flex; gap:10px; flex-wrap:wrap; }
  .access-actions button { flex:0 1 auto; padding:8px 12px; font-size:11px; }
  .access-actions button.active { background:var(--primary-color,#007aff); color:#fff; border-color:transparent; }
  .access-section { display:block; min-width:0; margin-bottom:24px; }
  .access-section h3 { font-size:12px; font-weight:900; opacity:.8; margin:0 0 10px; text-transform:uppercase; }
  .access-panel .user-card { padding:10px 12px; border-radius:12px; }
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

  /* ── iOS/Android Fullscreen: cubre pantalla completa sin clipping ── */
  .ios-fullscreen {
    position: fixed !important;
    inset: 0 !important;
    left: 0 !important;
    top: 0 !important;
    width: 100vw !important; height: 100dvh !important;
    max-width: 100vw !important; max-height: 100dvh !important;
    min-height: 100dvh !important;
    margin: 0 !important; border-radius: 0 !important;
    z-index: 999999 !important;
    display: flex !important; flex-direction: column !important;
    background: #000 !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
    /* Notch / home-indicator safe areas (iOS/Android) */
    padding-top: env(safe-area-inset-top, 0px) !important;
    padding-bottom: env(safe-area-inset-bottom, 0px) !important;
    padding-left: env(safe-area-inset-left, 0px) !important;
    padding-right: env(safe-area-inset-right, 0px) !important;
  }
  @media(min-width:900px) {
    .ios-fullscreen {
      /* Remove floating modal override so it is truly fullscreen on iPad/Tablet */
      inset: 0 !important;
      left: 0 !important; right: 0 !important; top: 0 !important; bottom: 0 !important;
      width: 100vw !important; height: 100vh !important;
      max-width: 100vw !important;
      margin: 0 !important; border-radius: 0 !important;
      border: 1px solid rgba(255,255,255,0.12) !important;
      box-shadow: 0 40px 100px rgba(0,0,0,0.8) !important;
      overflow: hidden !important;
      -webkit-mask-image: -webkit-radial-gradient(white, black) !important;
      padding: 0 !important;
    }
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
  /* dvh handled in base .ios-fullscreen rule */
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
  .ios-fullscreen .entry-content.security-console{display:flex!important;flex-wrap:nowrap!important;justify-content:center!important;align-items:center!important;gap:32px!important;padding:50px 48px 36px!important;overflow:auto!important;height:100%!important;max-height:100vh!important;max-height:100dvh!important;box-sizing:border-box!important;-webkit-overflow-scrolling:touch!important}
  .ios-fullscreen .entry-content.security-console .liquid-stack{order:1!important;flex:0 1 340px!important;min-width:240px!important;max-width:360px!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;align-self:center!important}
  .ios-fullscreen .entry-content.security-console .entry-icon{order:2!important;flex:0 0 180px!important;min-height:160px!important;margin:0!important;display:flex!important;justify-content:center!important;align-items:center!important}
  .ios-fullscreen .entry-content.security-console .console-sensors{order:3!important;flex:0 1 340px!important;min-width:220px!important;max-width:380px!important;align-self:center!important}
  .ios-fullscreen .entry-content.security-console .console-keypad{order:4!important;flex:0 0 240px!important;width:240px!important;max-width:260px!important}
  @media(max-width:900px){.ios-fullscreen .entry-content.security-console{flex-wrap:wrap!important;padding:80px 20px 24px!important;gap:18px!important;align-content:flex-start!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important}.ios-fullscreen .entry-content.security-console .entry-icon{order:1!important;flex:0 0 auto!important;min-height:110px!important;display:flex!important}.ios-fullscreen .entry-content.security-console .liquid-stack{order:2!important;flex:0 0 100%!important;width:100%!important;max-width:380px!important}.ios-fullscreen .entry-content.security-console .console-sensors{order:3!important;flex:0 0 100%!important;width:100%!important;max-width:380px!important}.ios-fullscreen .entry-content.security-console .console-keypad{order:4!important;flex:0 0 100%!important;width:100%!important;max-width:320px!important;padding:14px!important}}

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
  /* REEMPLAZA los colores neón por tokens legibles */
  .user-badge.admin {
    background: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.18);
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  .user-badge.user {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.75);
    border: 1px solid rgba(255,255,255,0.12);
  }
  /* Role label debajo del nombre */
  .user-role-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);  /* muted, no neón */
    margin-top: 2px;
  }
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
  .personalize-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:"home temp" "panel weather" "hub clock" "emergency emergency";gap:14px 16px;align-items:start}
  .personalize-column{display:contents}
  .personalize-field{min-width:0;align-self:stretch}
  .pf-home{grid-area:home}.pf-temp{grid-area:temp}.pf-weather{grid-area:weather}.pf-panel{grid-area:panel}.pf-hub{grid-area:hub}.pf-emergency{grid-area:emergency}.pf-clock{grid-area:clock}
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
    .personalize-grid{grid-template-columns:minmax(0,1fr);grid-template-areas:"home" "temp" "weather" "panel" "hub" "clock" "emergency"}
    .pf-emergency{grid-template-columns:minmax(0,1fr);grid-template-areas:"emergency-label" "emergency-input" "emergency-help"}
    .personalize-section{padding:14px}
    .sos-configuration{display:flex;flex-direction:column;align-items:stretch;gap:10px;padding:14px;border-radius:24px}
    .sos-configuration #lbl-sos-actions{white-space:normal}.sos-configuration #btn-select-sos-outputs{width:100%!important}.sos-configuration #sos-output-help{max-width:none}
  }
  .wx-horizon::before{content:'';position:absolute;inset:26% 0 0;background:radial-gradient(ellipse at 12% 100%,rgba(0,0,0,.34) 0 18%,transparent 19%),radial-gradient(ellipse at 50% 100%,rgba(0,0,0,.29) 0 23%,transparent 24%),radial-gradient(ellipse at 89% 100%,rgba(0,0,0,.36) 0 20%,transparent 21%);filter:blur(10px)}
  /* ── Weather Animated Backgrounds (Apple Weather Premium) ────────────────────────────────── */
  .scene{position:absolute;inset:0;z-index:0;overflow:hidden;background:linear-gradient(165deg,#2c86c7,#8fc7dc 62%,#d7c7aa);transition:background 1.5s ease;border-radius:inherit}
  .scene.sunny{background:linear-gradient(180deg,#1b60d0,#40a0ff 40%,#90d0ff)}
  .scene.partlycloudy{background:linear-gradient(180deg,#3073d8,#6bb5ff 50%,#b8e0ff)}
  .scene.cloudy{background:linear-gradient(180deg,#5b6976,#80909c 50%,#a4b3be)}
  .scene.fog{background:linear-gradient(180deg,#6c767c,#9ca6ac 50%,#ccd1d4)}
  .scene.rain,.scene.storm{background:linear-gradient(180deg,#303d49,#495a69 50%,#687985)}
  .scene.snow{background:linear-gradient(180deg,#627f94,#92b1c7 50%,#d8eaf5)}
  .scene.night{background:linear-gradient(180deg,#020513 0%,#0a1130 50%,#152248 100%)!important}
  .scene.sunny::after,.scene.partlycloudy::after{content:'';position:absolute;inset:-50%;background:radial-gradient(circle at 50% 50%,#fff 0%,rgba(255,255,255,0.8) 5%,transparent 15%),radial-gradient(circle at 50% 50%,rgba(255,220,100,0.4) 0%,transparent 30%),conic-gradient(from 0deg at 50% 50%,transparent 0deg,rgba(255,255,255,0.15) 15deg,transparent 30deg,rgba(255,255,255,0.1) 45deg,transparent 60deg,rgba(255,255,255,0.2) 90deg,transparent 120deg,rgba(255,255,255,0.1) 180deg,transparent 240deg,rgba(255,255,255,0.15) 300deg,transparent 360deg);animation:rotate-sun 120s linear infinite;mix-blend-mode:screen;transform-origin:center;left:30%;top:-20%}
  .scene.night.clear::after,.scene.night.partlycloudy::after{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,#fff 0 1px,transparent 1.5px);background-size:80px 73px;opacity:0.8;animation:stars 12s ease-in-out infinite alternate}
  .scene.night.clear::before,.scene.night.partlycloudy::before{content:'';position:absolute;right:15%;top:15%;width:50px;height:50px;background:transparent;border-radius:50%;box-shadow:inset -10px -10px 0 0 #ffffe0;filter:drop-shadow(0 0 15px rgba(255,255,180,0.5))}
  .scene.night.clear.eclipse::before{box-shadow:inset 0 0 0 25px rgba(0,0,0,0.9),0 0 20px 5px rgba(255,100,50,0.8)}
  .scene.partlycloudy::before,.scene.cloudy::before{content:'';position:absolute;inset:-30%;background:radial-gradient(ellipse at 10% 20%,rgba(255,255,255,0.4) 0%,transparent 25%),radial-gradient(ellipse at 80% 30%,rgba(255,255,255,0.3) 0%,transparent 35%),radial-gradient(ellipse at 40% 50%,rgba(255,255,255,0.2) 0%,transparent 40%);filter:blur(25px);animation:clouds 40s linear infinite alternate}
  .scene.night.cloudy::before,.scene.night.partlycloudy::before{background:radial-gradient(ellipse at 10% 20%,rgba(100,110,130,0.4) 0%,transparent 25%),radial-gradient(ellipse at 80% 30%,rgba(80,90,120,0.4) 0%,transparent 35%)}
  .scene.rain::after,.scene.storm::after{content:'';position:absolute;inset:-50%;background:repeating-linear-gradient(108deg,transparent 0,transparent 20px,rgba(200,220,240,0.2) 21px,transparent 22px),repeating-linear-gradient(110deg,transparent 0,transparent 45px,rgba(200,220,240,0.4) 46px,transparent 48px);background-size:100% 200%;animation:rain 1.2s linear infinite;opacity:0.8}
  .scene.snow::after{content:'';position:absolute;inset:-30%;background-image:radial-gradient(circle,rgba(255,255,255,0.8) 0 2px,transparent 3px),radial-gradient(circle,rgba(255,255,255,0.4) 0 4px,transparent 5px);background-size:45px 52px,90px 110px;background-position:0 0,20px 30px;animation:snow 8s linear infinite}
  .scene.fog::before{content:'';position:absolute;inset:-20%;background:repeating-linear-gradient(0deg,transparent 0 40px,rgba(240,245,250,0.4) 50px 80px,transparent 90px 140px);filter:blur(18px);animation:fog 20s ease-in-out infinite alternate}
  .scene.night.fog::before{background:repeating-linear-gradient(0deg,transparent 0 40px,rgba(120,130,150,0.4) 50px 80px,transparent 90px 140px)}
  .scene.storm{animation:lightning 12s infinite}
  @keyframes rotate-sun{to{transform:rotate(1turn)}}
  @keyframes clouds{0%{transform:translate(-5%,-5%) scale(1)}100%{transform:translate(10%,10%) scale(1.1)}}
  @keyframes stars{0%{opacity:0.4}100%{opacity:1}}
  @keyframes rain{0%{background-position:0 0,0 0}100%{background-position:-150px 300px,-200px 400px}}
  @keyframes snow{0%{background-position:0 0,20px 30px}100%{background-position:90px 300px,-45px 400px}}
  @keyframes fog{0%{transform:translateY(0) scale(1);opacity:0.6}100%{transform:translateY(-50px) scale(1.2);opacity:0.9}}
  @keyframes lightning{0%,93%,95%,100%{filter:none}94%{filter:brightness(2.5) contrast(1.5) saturate(0.5)}}
  
  .wx-static{background:linear-gradient(180deg,rgba(22,28,42,.92),rgba(35,44,67,.95));position:absolute;inset:0;z-index:0;border-radius:inherit}
  .wx-photo,.wx-collage{background:#10141d;position:absolute;inset:0;z-index:0;border-radius:inherit}
  .wx-photo::before{content:"";position:absolute;inset:0;background:var(--bg-image) center/cover no-repeat;filter:saturate(1.05) contrast(1.05);border-radius:inherit}
  .wx-photo::after,.wx-collage::after,.wx-static::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,12,.18),rgba(5,8,12,.5));border-radius:inherit}
  .wx-collage-grid{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;padding:4px}
  .wx-collage-cell{border-radius:18px;background:center/cover no-repeat;min-height:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
  .wx-video{position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:0;background:#10141d}
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
  background: rgba(0,0,0,0.88);
  /* NO backdrop-filter: element is permanently in DOM (display:none toggle).
     WebKit compositor leak bug — opaque background is visually equivalent. */
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

/* ─── tvOS Profile Selector ─── */
.argus-profile-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.85);
  /* NO backdrop-filter: causes orphaned compositor layers in WebKit when removed.
     High-opacity background achieves same visual effect safely. */
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  animation: argus-overlay-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes argus-overlay-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Título arriba */
.argus-profile-header {
  text-align: center;
  margin-bottom: 36px;
  animation: argus-slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
@keyframes argus-slide-down {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.argus-profile-header h2 {
  margin: 0; font-size: 1.6rem; font-weight: 800;
  color: #fff; letter-spacing: -0.02em;
}
.argus-profile-header p {
  margin: 6px 0 0; font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
}

/* Grid de perfiles */
.argus-profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 28px 24px;
  max-width: 520px;
  width: 100%;
  animation: argus-grid-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}
@keyframes argus-grid-in {
  from { opacity: 0; transform: scale(0.92) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Cada perfil */
@media (max-width: 480px) and (orientation: portrait) {
  .argus-profile-grid { 
    grid-template-columns: 1fr;
    padding: 16px;
  }
  .argus-profile-item { width: 100%; }
}

.argus-profile-item {
  touch-action: manipulation;
  min-height: 44px;
  display: flex; flex-direction: column;
  align-items: center; gap: 10px;
  cursor: pointer;
  border-radius: 16px;
  padding: 14px 8px 10px;
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}
.argus-profile-item:hover {
  transform: scale(1.08);
  background: rgba(255,255,255,0.07);
}
.argus-profile-item:active {
  transform: scale(0.96);
}
.argus-profile-item:focus-visible {
  outline: 2px solid rgba(255,255,255,0.6);
  outline-offset: 4px;
}

/* Círculo avatar */
.argus-profile-circle {
  width: 76px; height: 76px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid rgba(255,255,255,0.18);
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; font-weight: 800;
  color: #fff; overflow: hidden; flex-shrink: 0;
  background: rgba(255,255,255,0.1);
  position: relative;
}
.argus-profile-item:hover .argus-profile-circle {
  border-color: rgba(255,255,255,0.55);
  box-shadow: 0 0 0 3px rgba(255,255,255,0.15), 0 6px 24px rgba(0,0,0,0.4);
}
.argus-profile-circle img {
  width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
}
.argus-profile-circle .lock-badge {
  position: absolute; bottom: 0; right: 0;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(0,0,0,0.7); display: flex;
  align-items: center; justify-content: center;
  font-size: 11px; border: 1.5px solid rgba(255,255,255,0.2);
}

/* Nombre y rol */
.argus-profile-label {
  text-align: center;
}
.argus-profile-label .p-name {
  font-size: 0.82rem; font-weight: 700;
  color: #fff; line-height: 1.2;
  max-width: 80px; overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;
}
.argus-profile-label .p-role {
  font-size: 0.68rem; font-weight: 500;
  color: rgba(255,255,255,0.5);
  margin-top: 2px;
  text-transform: uppercase; letter-spacing: 0.04em;
}

/* ─── Welcome Screen (Fase 2) ─── */
.argus-welcome-screen {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.88);
  /* NO backdrop-filter: Safari/WebKit compositor bug causes blur to persist
     after element.remove(). Use opaque background instead. */
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  z-index: 10000;
  pointer-events: none;
}
.argus-welcome-avatar {
  width: 110px; height: 110px;
  border-radius: 50%; overflow: hidden;
  border: 3px solid rgba(255,255,255,0.3);
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  font-size: 2.8rem; font-weight: 800; color: #fff;
  background: rgba(255,255,255,0.12);
  will-change: transform, width, height, border-radius;
}
.argus-welcome-avatar img {
  width: 100%; height: 100%; object-fit: cover;
}
.argus-welcome-text {
  margin-top: 20px; text-align: center;
}
.argus-welcome-text .greeting {
  font-size: 1.0rem; color: rgba(255,255,255,0.6);
  font-weight: 500; letter-spacing: 0.02em;
  margin: 0;
}
.argus-welcome-text .wname {
  font-size: 2.0rem; font-weight: 900;
  color: #fff; letter-spacing: -0.03em;
  margin: 6px 0 0;
  line-height: 1;
}

/* PIN prompt dentro del selector tvOS */
.argus-pin-prompt {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  display: flex; align-items: center; justify-content: center;
  z-index: 10001;
  animation: argus-overlay-in 0.25s ease both;
}
.argus-pin-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 20px; padding: 28px 24px;
  width: min(340px, 90vw);
  text-align: center; color: #fff;
}
.argus-pin-card h3 {
  margin: 0 0 4px; font-size: 1.1rem; font-weight: 800;
}
.argus-pin-card .pin-sub {
  font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.argus-pin-input {
  width: 100%; box-sizing: border-box;
  text-align: center; font-size: 1.6rem;
  letter-spacing: 0.4em; padding: 12px;
  border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.07); color: #fff;
  outline: none; margin-bottom: 14px;
}
.argus-numpad {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 10px;
  margin-bottom: 12px;
}
.argus-numpad button {
  padding: 14px; font-size: 1.15rem; font-weight: 700;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.08); color: #fff;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}
.argus-numpad button:active { transform: scale(0.93); background: rgba(255,255,255,0.18); }
.argus-pin-actions {
  display: flex; gap: 10px; margin-top: 4px;
}
.argus-pin-actions button {
  flex: 1; padding: 12px; border-radius: 12px; font-size: 0.85rem;
  font-weight: 700; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.07); color: #fff;
  transition: background 0.15s;
}
.argus-pin-actions button:hover { background: rgba(255,255,255,0.15); }

@keyframes argus-shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-8px); }
  40%       { transform: translateX(8px); }
  60%       { transform: translateX(-5px); }
  80%       { transform: translateX(5px); }
}
@keyframes argus-overlay-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}

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

/* Mobile background and HomeKit polish fixes (moved from runtime hack) */
.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}
.entry-icon{contain:layout!important}
#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}
.argus-instance-duplicate-status{display:none!important}
.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}
.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}
.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}
#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}
@media(max-width:760px){
  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:14px!important;padding:18px 14px!important}
  .hero-left{width:100%!important;min-width:0!important;align-items:center!important}
  .hero-context{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;margin:4px 0 0!important;justify-items:center!important;align-items:center!important;gap:10px!important}
  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:grid!important;grid-template-columns:1fr!important;justify-items:center!important;align-items:center!important;gap:3px!important;line-height:1.12!important}
  .hero-clock strong,.hero-clock span{width:auto!important;max-width:100%!important;text-align:center!important;margin:0!important;line-height:1.12!important}
  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}
  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}
  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}
  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}
  .entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding-left:10px!important;padding-right:10px!important}
  .console-hud{grid-template-columns:minmax(0,1fr)!important;grid-template-areas:'location' 'connection' 'readings'!important;justify-items:center!important;align-items:center!important;gap:8px!important;text-align:center!important}
  .console-hud-loc,.argus-connection-pill,.console-hud-right{width:100%!important;max-width:100%!important;box-sizing:border-box!important;justify-self:center!important;justify-content:center!important;text-align:center!important;margin:0!important}
  .console-hud-right{display:flex!important;flex-wrap:wrap!important;overflow:visible!important;gap:6px!important}
  .security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important;align-items:stretch!important}
  .security-console .liquid-btn{min-width:0!important;white-space:normal!important;line-height:1.2!important;min-height:46px!important}
  #w-activity,.activity-log{max-height:46vh!important;overflow-y:auto!important}
  .argus-mobile-history-overflow-item{display:list-item!important}
  #w-performance,.performance-card,.device-performance{display:grid!important;grid-template-columns:minmax(0,1fr)!important;justify-items:stretch!important;align-items:center!important;text-align:center!important;gap:10px!important}
  #w-performance *,.performance-card *,.device-performance *{max-width:100%!important;box-sizing:border-box!important}
  #w-access .panel-body,#w-settings .panel-body,.sos-actions,.panic-actions{overflow:visible!important;max-height:none!important}
  .sos-actions button,.panic-actions button,[data-action*="sos"],[data-action*="panic"]{min-height:48px!important;touch-action:manipulation!important}
  input[type="file"]{max-width:100%!important;width:100%!important;color:#fff!important}
}
@media(orientation:landscape) and (max-height:560px) and (max-width:950px){
  .hero{padding:14px!important;gap:10px!important}
  .hero-context{grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important}
  .hero-clock{width:auto!important;justify-items:start!important}
  .hero-pills{justify-content:flex-start!important}
  .ios-fullscreen .console-hud{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;grid-template-areas:'location connection readings'!important}
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .argus-connection-pill,.ios-fullscreen .console-hud-right{width:auto!important}
}
  .entry { overflow: hidden; border-radius: 28px; -webkit-mask-image: -webkit-radial-gradient(white, black); }
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
      <div id="hero-profile-container"></div>
      <button class="lang-pill" id="btn-edit-widgets" title="Configurar Widgets del Dashboard" style="margin-left: 4px;">
        <span id="edit-widgets-label">⚙️</span>
      </button>
    </div>
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
                    <input type="file" id="panel-bg-file-input" accept="image/*,video/*,.gif,.heic,.heif" style="font-size:10px; max-width:180px;">
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
                    <input type="file" id="hub-bg-file-input" accept="image/*,video/*,.gif,.heic,.heif" style="font-size:10px; max-width:180px;">
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
              <div class="personalize-field pf-clock">
                <label class="setting-label" id="lbl-clock-format" for="argus-clock-format-select" style="font-size:11px;font-weight:800;text-transform:uppercase;opacity:.6;margin-bottom:4px;">🕐 Formato de hora</label>
                <select id="argus-clock-format-select" class="glass-control">
                  <option value="auto">Auto (Home Assistant)</option>
                  <option value="12h">12 horas (AM/PM)</option>
                  <option value="24h">24 horas</option>
                </select>
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
        </div>

        <div class="access-workspace" id="access-workspace" style="display:contents">
          <!-- Users -->
          <div class="access-section" id="access-users-section">
            <h3 id="h-users"></h3>
            <p class="small" id="p-admin-only" style="margin-bottom:14px;color:#fb8c00;font-weight:600"></p>
            <div id="users-list" style="display:grid;gap:12px;margin-bottom:16px"></div>
          </div>

          <!-- Notifications -->
          <div class="access-section" id="access-notifications-section">
            <h3 id="h-notifications"></h3>
            <p class="small" id="p-notif-desc" style="margin:0 0 12px;opacity:.72"></p>
            <div id="notif-targets" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px"></div>
            <div style="display:flex;gap:8px;align-items:center">
              <select id="notif-select" class="glass-control" style="flex:1;min-width:0"></select>
              <button type="button" class="ghost" id="btn-add-notif" style="white-space:nowrap">＋</button>
            </div>
            <div class="save-row" style="margin-top:12px">
              <button class="primary" id="btn-save-notif" style="width:100%"></button>
            </div>
            <div id="notif-status" class="status" style="margin-top:8px;text-align:center;font-size:12px;font-weight:bold;min-height:18px"></div>
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
class Xt extends HTMLElement {
  constructor() {
    super(), this._showSosConfirm = !1, this._sosEntryIdx = null, this._sosBusy = !1, this._sosSliding = !1, this._sosStartX = 0, this._sosOffsetX = 0, this._sosConfirmed = !1, this.attachShadow({ mode: "open" }).appendChild(zt.content.cloneNode(!0)), this._wsId = 1, this._socket = null, this._dashboard = null, this._ui = null, this._available = [], this._mode = "home", this._modeEntryId = null, this._selected = [], this._selectorTarget = null, this._hass = null, this._prevStates = {}, this._notifTargets = [], this._users = [], this._haUsersList = [], this._isAdmin = !0, this._pinCallback = null, this._homeName = "", this._backgroundMode = "weather", this._backgroundImages = [], this._temperatureSource = "auto", this._weatherSource = "auto", this._pending = {}, this._lastClockUpdate = 0, this._manualLang = null, this._fullscreenIdx = -1, this._cachedBgUrl = null, this._cachedBgBrightness = void 0, this._hubBgMode = "default", this._hubBgFile = "", this._hubBgSound = !1, this._clockFormat = "auto", this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._panicOutputs = void 0, this._initPromise = null, this._staticBound = !1, this._postLoadBound = !1;
  }
  _getTimeZone() {
    return this._hass?.config?.time_zone || void 0;
  }
  _getClockFormat() {
    const e = this._ui?.clock_format ?? this._dashboard?.clock_format ?? "auto";
    return ["auto", "12h", "24h"].includes(e) ? e : "auto";
  }
  _formatTime(e) {
    if (!e) return "";
    const t = e instanceof Date ? e : new Date(e);
    if (isNaN(t.getTime())) return "";
    const i = this._getClockFormat(), o = this._getLocale(), r = this._getTimeZone(), s = { hour: "2-digit", minute: "2-digit" };
    if (r && (s.timeZone = r), i === "12h")
      s.hour12 = !0;
    else if (i === "24h")
      s.hour12 = !1;
    else {
      const n = this._hass?.locale?.time_format;
      n === "12" || n === "12h" ? s.hour12 = !0 : (n === "24" || n === "24h") && (s.hour12 = !1);
    }
    try {
      return new Intl.DateTimeFormat(o, s).format(t);
    } catch {
      return t.toLocaleTimeString(o, { hour: "2-digit", minute: "2-digit" });
    }
  }
  _formatDateTime(e) {
    if (!e) return "";
    const t = e instanceof Date ? e : new Date(e);
    if (isNaN(t.getTime())) return "";
    const i = this._getClockFormat(), o = this._getLocale(), r = this._getTimeZone(), s = {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    if (r && (s.timeZone = r), i === "12h")
      s.hour12 = !0;
    else if (i === "24h")
      s.hour12 = !1;
    else {
      const n = this._hass?.locale?.time_format;
      n === "12" || n === "12h" ? s.hour12 = !0 : (n === "24" || n === "24h") && (s.hour12 = !1);
    }
    try {
      return new Intl.DateTimeFormat(o, s).format(t);
    } catch {
      return t.toLocaleString(o, s);
    }
  }
  _updateProfileBadge() {
    const e = this.shadowRoot.getElementById("active-profile-pill"), t = this.shadowRoot.getElementById("profile-avatar"), i = this.shadowRoot.getElementById("profile-name"), o = this.shadowRoot.getElementById("profile-role");
    if (!e || !t || !i || !o) return;
    const r = this._currentProfile;
    if (!r) {
      e.style.display = "none";
      return;
    }
    e.style.display = "flex";
    const s = r.name || "User";
    r.picture ? t.innerHTML = `<img src="${this._escapeHtml(r.picture)}" 
        style="width:100%;height:100%;border-radius:50%;object-fit:cover;" 
        alt="${this._escapeHtml(s)}" />` : t.textContent = s.slice(0, 2).toUpperCase(), i.textContent = s;
    const n = r.role === "admin" ? "role_argus_admin" : "role_argus_user";
    o.textContent = this._t(n);
  }
  _getBrightness(e) {
    return new Promise((t) => {
      if (!e) {
        t(128);
        return;
      }
      const i = new Image();
      i.crossOrigin = "Anonymous", i.onload = () => {
        try {
          const o = document.createElement("canvas");
          o.width = 10, o.height = 10;
          const r = o.getContext("2d");
          if (!r) {
            t(128);
            return;
          }
          r.drawImage(i, 0, 0, 10, 10);
          const s = r.getImageData(0, 0, 10, 10).data;
          let n = 0, d = 0, p = 0, c = 0;
          for (let u = 0; u < s.length; u += 4)
            n += s[u], d += s[u + 1], p += s[u + 2], c++;
          const l = (0.299 * n + 0.587 * d + 0.114 * p) / c;
          t(l);
        } catch {
          t(128);
        }
      }, i.onerror = () => {
        t(128);
      }, i.src = e;
    });
  }
  async _updateTheme() {
    if (!this._hass) return;
    let e = !1;
    const t = this._hubBgMode || "default";
    if (t === "default")
      e = !0;
    else if (t === "image") {
      const i = this._hubBgFile || "";
      if (i)
        if (this._cachedBgUrl === i && this._cachedBgBrightness !== void 0)
          e = this._cachedBgBrightness < 135;
        else {
          const o = await this._getBrightness(i);
          this._cachedBgUrl = i, this._cachedBgBrightness = o, e = o < 135;
        }
      else
        e = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
    } else {
      const i = this._backgroundMode || "weather";
      if (i === "none")
        e = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      else if (i === "weather")
        if (this._hass.states?.["sun.sun"]?.state === "below_horizon")
          e = !0;
        else {
          const s = this._getWeatherEntity().state || "sunny";
          e = !["sunny", "fog", "snow", "windy"].includes(s);
        }
      else if (i === "photo" || i === "collage") {
        let o = "";
        if (this._backgroundImages && this._backgroundImages[0] ? o = this._backgroundImages[0] : this._panelBgFile && (o = this._panelBgFile), o)
          if (this._cachedBgUrl === o && this._cachedBgBrightness !== void 0)
            e = this._cachedBgBrightness < 135;
          else {
            const r = await this._getBrightness(o);
            this._cachedBgUrl = o, this._cachedBgBrightness = r, e = r < 135;
          }
        else
          e = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      }
    }
    this.setAttribute("argus-dark-mode", e ? "true" : "false"), e ? this.classList.remove("daytime-theme") : this.classList.add("daytime-theme");
  }
  set hass(e) {
    const t = this._hass;
    if (this._hass = e, this._updateTheme(), !this._dashboard?.entries?.length) {
      this._ensureInitialized();
      return;
    }
    const i = !1;
    t?.language !== e.language && !this._manualLang && this._refreshLocalizedUi();
    const r = this._dashboard.entries.some(
      (m) => m.entity_id && t?.states[m.entity_id]?.state !== e.states[m.entity_id]?.state
    ), s = this._temperatureSource === "auto" ? null : this._temperatureSource, n = s && t?.states[s]?.state !== e.states[s]?.state, d = this._weatherSource !== "auto" ? this._weatherSource : Object.values(e.states).find((m) => m.entity_id.startsWith("weather."))?.entity_id, p = d && (t?.states[d]?.state !== e.states[d]?.state || t?.states[d]?.attributes?.temperature !== e.states[d]?.attributes?.temperature || t?.states[d]?.attributes?.temperature_unit !== e.states[d]?.attributes?.temperature_unit), c = /* @__PURE__ */ new Set(), l = (m) => {
      !m || typeof m != "object" || (Array.isArray(m.sensors) && m.sensors.forEach((f) => c.add(f)), Object.values(m).forEach((f) => {
        f && typeof f == "object" && l(f);
      }));
    };
    l(this._ui?.modes);
    const u = !!t && [...c].some((m) => {
      const f = t.states[m], _ = e.states[m];
      return f?.state !== _?.state || f?.attributes?.battery_level !== _?.attributes?.battery_level || f?.attributes?.battery_percentage !== _?.attributes?.battery_percentage;
    }), g = !!t && Object.values(e.states).some((m) => {
      const f = m.entity_id || "", _ = m.attributes?.device_class === "battery" || /_battery$/i.test(f), b = t.states[f];
      return _ && b?.state !== m.state;
    });
    (r || u || g || n || i || p || !t) && (this._renderEntries(), this._renderActivityLog(), t || (this._renderModeTabs(), this._renderModeView(), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers()));
  }
  get hass() {
    return this._hass;
  }
  /* ── Translation ─────────────────────────────────────────────────── */
  _t(e) {
    const t = this._getCurrentLangCode();
    return w[t]?.[e] || w.en[e] || e;
  }
  _format(e, t = {}) {
    return this._t(e).replace(/\{(\w+)\}/g, (i, o) => String(t[o] ?? `{${o}}`));
  }
  _escapeHtml(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[t]);
  }
  _getCurrentLangCode() {
    const e = this._manualLang || this._ui?.language || (this._hass?.language || "en").split("-")[0];
    return w[e] ? e : "en";
  }
  _getLocale() {
    return {
      es: "es-ES",
      en: "en-US",
      fr: "fr-FR",
      pt: "pt-BR",
      it: "it-IT",
      zh: "zh-CN",
      ru: "ru-RU"
    }[this._getCurrentLangCode()] || "en-US";
  }
  _weatherPresentation(e, t) {
    const i = String(e || "sunny").toLowerCase().replace(/[\s-]+/g, "_"), o = {
      es: { sunny: "Soleado", clear_night: "Noche despejada", partlycloudy: "Parcialmente nublado", cloudy: "Nublado", rainy: "Lluvioso", pouring: "Lluvia intensa", lightning: "Tormenta eléctrica", lightning_rainy: "Tormenta con lluvia", snowy: "Nevando", fog: "Niebla", windy: "Ventoso", exceptional: "Condiciones excepcionales" },
      en: { sunny: "Sunny", clear_night: "Clear night", partlycloudy: "Partly cloudy", cloudy: "Cloudy", rainy: "Rainy", pouring: "Heavy rain", lightning: "Thunderstorm", lightning_rainy: "Thunderstorm with rain", snowy: "Snowing", fog: "Foggy", windy: "Windy", exceptional: "Exceptional conditions" },
      fr: { sunny: "Ensoleillé", clear_night: "Nuit claire", partlycloudy: "Partiellement nuageux", cloudy: "Nuageux", rainy: "Pluvieux", pouring: "Forte pluie", lightning: "Orage", lightning_rainy: "Orage avec pluie", snowy: "Neige", fog: "Brouillard", windy: "Venteux", exceptional: "Conditions exceptionnelles" },
      pt: { sunny: "Ensolarado", clear_night: "Noite limpa", partlycloudy: "Parcialmente nublado", cloudy: "Nublado", rainy: "Chuvoso", pouring: "Chuva forte", lightning: "Trovoada", lightning_rainy: "Trovoada com chuva", snowy: "Nevando", fog: "Neblina", windy: "Ventoso", exceptional: "Condições excepcionais" },
      it: { sunny: "Soleggiato", clear_night: "Notte serena", partlycloudy: "Parzialmente nuvoloso", cloudy: "Nuvoloso", rainy: "Piovoso", pouring: "Pioggia intensa", lightning: "Temporale", lightning_rainy: "Temporale con pioggia", snowy: "Nevica", fog: "Nebbia", windy: "Ventoso", exceptional: "Condizioni eccezionali" },
      zh: { sunny: "晴朗", clear_night: "晴夜", partlycloudy: "局部多云", cloudy: "多云", rainy: "有雨", pouring: "大雨", lightning: "雷暴", lightning_rainy: "雷雨", snowy: "下雪", fog: "有雾", windy: "有风", exceptional: "异常天气" },
      ru: { sunny: "Солнечно", clear_night: "Ясная ночь", partlycloudy: "Переменная облачность", cloudy: "Облачно", rainy: "Дождливо", pouring: "Сильныйдь", lightning: "Гроза", lightning_rainy: "Гроза с дождём", snowy: "Снег", fog: "Туман", windy: "Ветрено", exceptional: "Исключительные условия" }
    }, r = i.includes("lightning") ? "⛈️" : i === "pouring" || i.includes("rain") ? "🌧️" : i.includes("snow") || i === "hail" || i === "sleet" ? "❄️" : i === "fog" ? "🌫️" : i.includes("cloud") ? "☁️" : t ? "🌙" : "☀️", s = this._getCurrentLangCode();
    return { icon: r, label: o[s]?.[i] || o.en[i] || i.replace(/_/g, " ") };
  }
  _openLangModal() {
    const e = this.shadowRoot.getElementById("lang-modal");
    if (!e) return;
    const t = this.shadowRoot.getElementById("lang-grid"), i = this._manualLang || "auto";
    t && (t.innerHTML = ie.map((s) => `
        <button class="lang-option${s.code === i ? " active" : ""}" data-lang="${s.code}">
          <span class="lang-flag">${s.flag}</span>
          <span>${s.code === "auto" ? this._t("use_ha_language") : s.label}</span>
        </button>`).join(""), t.querySelectorAll(".lang-option").forEach((s) => {
      s.addEventListener("click", () => {
        this._setLanguage(s.dataset.lang), this._closeLangModal();
      });
    }));
    const o = this.shadowRoot.getElementById("lang-modal-title");
    o && (o.textContent = `🌐 ${this._t("lang_select_title")}`);
    const r = e.querySelector(".lang-modal-card");
    r && (r.style.animation = "none", r.offsetWidth, r.style.animation = ""), e.classList.add("open");
  }
  _closeLangModal() {
    this.shadowRoot.getElementById("lang-modal")?.classList.remove("open");
  }
  _setLanguage(e) {
    if (e === "auto") {
      this._manualLang = null;
      try {
        localStorage.removeItem("argus_lang");
      } catch {
      }
      this._send("argus/save_ui", { language: null }).catch(console.error);
    } else {
      if (!w[e]) return;
      this._manualLang = e;
      try {
        localStorage.setItem("argus_lang", e);
      } catch {
      }
      this._send("argus/save_ui", { language: e }).catch(console.error);
    }
    this._refreshLocalizedUi();
  }
  _refreshLocalizedUi() {
    this._applyTranslations(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderActivityLog(), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers(), this._renderSosOutputs(), this._configureEmergencyCall(), this._updateHomeNameDisplay(), this._renderUploadedFiles();
  }
  _applyTranslations() {
    const e = (x) => this._t(x), t = (x) => this.shadowRoot.getElementById(x), i = (x, h) => {
      const y = t(x);
      y && (y.textContent = h);
    }, o = this._manualLang || "auto", r = ie.find((x) => x.code === o) || ie[1], s = t("lang-pill-flag"), n = t("lang-pill-label");
    s && (s.textContent = r.flag), n && (n.textContent = o === "auto" ? this._t("use_ha_language") : r.label), i("p-hero-desc", e("hero_desc")), i("h-instances", e("instances")), i("h-modes", e("modes")), i("h-automations", e("automations")), i("p-linked-rules", e("linked_rules")), i("h-settings", e("settings")), i("h-activity-log", e("activity_log")), i("btn-refresh-history", e("history_refresh")), i("t-change-pin", e("change_pin")), i("l-current-pin-lbl", e("current_pin")), i("lnk-forgot-pin", e("forgot_pin")), i("pin-forgot-link", e("forgot_pin")), i("btn-save-pin", e("update_pin")), i("l-new-pin", e("new_pin")), i("l-confirm-pin", e("confirm_pin")), i("h-notifications", e("notifications_title")), i("p-notif-desc", e("notif_desc")), i("h-users", e("users_title")), i("p-admin-only", e("admin_only")), i("t-add-user", e("add_user")), i("l-username", e("username")), i("l-user-pin", e("user_pin")), i("s-is-admin", e("is_admin")), i("l-user-exp-type", e("user_exp_type")), i("l-user-exp-date", e("user_exp_date"));
    const d = t("opt-exp-indefinite");
    d && (d.textContent = e("exp_indefinite"));
    const p = t("opt-exp-temporary");
    p && (p.textContent = e("exp_temporary")), i("selector-select-all", e("select_all")), i("selector-deselect-all", e("deselect_all")), i("l-available", e("available")), i("l-selected-lbl", e("selected_lbl")), i("l-introduce-pin", `🔒 ${e("introduce_pin")}`), i("l-pin-modal-desc", e("pin_modal_desc")), ((x) => {
      const h = t(x);
      h && (h.placeholder = e("search_placeholder"));
    })("selector-search");
    const l = (x, h) => {
      const y = t(x);
      y && (y.textContent = e(h));
    };
    l("btn-new-auto", "create_ha"), l("btn-save-pin", "update_pin"), l("btn-save-notif", "save_notif"), l("btn-save-user", "save_user"), l("selector-close", "close"), l("selector-clear", "clear"), l("selector-accept", "accept"), l("pin-cancel", "cancel"), l("pin-confirm", "confirm"), l("btn-cancel-sos", "cancel"), l("sos-call-btn", "sos_call"), l("home-name-cancel", "cancel"), l("home-name-save", "save_btn");
    const u = t("lang-modal-close");
    u && (u.textContent = `✕ ${e("close")}`), i("lbl-home-name-hdr", e("home_name_lbl")), i("lbl-panel-bg-title", e("bg_panel_title")), i("lbl-hub-bg-title", e("bg_hub_title")), i("s-panel-bg-sound-lbl", e("bg_sound_opt")), i("s-hub-bg-sound-lbl", e("bg_sound_opt")), i("lbl-aesthetic-text", "🎨 " + e("lbl_aesthetic_custom") + " (Avanzado)"), i("edit-widgets-label", this._widgetEditing ? "✓ " + e("done") : "⚙️ Config. Widgets"), i("lbl-temperature-source", e("temp_displayed")), i("lbl-weather-source", e("weather_source")), i("lbl-panel-bg-upload", e("lbl_load_file")), i("lbl-hub-bg-upload", e("lbl_load_file")), i("lbl-uploaded-files-title", e("lbl_uploaded_files")), i("btn-edit-home-name-standalone", e("edit_btn")), i("btn-save-personalization-standalone", e("save_btn")), i("btn-clear-log", e("clear_log_btn")), i("h-access-title", e("access_title")), i("p-access-desc", e("access_desc")), i("btn-access-users", `👥 ${e("users_title").replace(/^👥\s*/, "").replace(/\s(?:y|&|e)\s.*$/i, "")}`), i("btn-access-pin", `🔐 ${e("pin_master_title")}`), i("h-settings-pin", e("pin_master_title")), i("p-pin-remove-hint", e("pin_remove_hint")), i("h-backup-title", e("backup_title")), i("p-backup-desc", e("backup_desc")), i("btn-export-config", e("export_btn")), i("btn-reset-config", e("reset_btn")), i("btn-undo-reset", e("undo_reset_btn")), i("btn-import-trigger", e("import_btn")), i("github-title", e("github_title")), i("github-desc", e("github_desc")), i("github-action", `⭐ ${e("github_action")}`), i("sos-title-txt", e("sos_confirm_title")), i("sos-text-txt", e("sos_confirm_text")), i("sos-label", e("sos_slide")), i("home-name-modal-h3", e("home_name_modal_title")), i("p-home-name-modal-desc", e("home_name_modal_desc")), i("l-home-name-modal-label", e("home_name_label")), i("lang-modal-title", `🌐 ${e("lang_select_title")}`), i("sos-call-help", e("sos_call_help")), i("lbl-emergency-number", e("emergency_number_label")), i("emergency-number-help", e("emergency_help")), i("lbl-sos-actions", e("sos_actions")), i("btn-select-sos-outputs", e("sos_select_outputs")), i("sos-output-help", e("sos_outputs_help")), i("home-name-modal-desc", e("home_name_modal_desc")), i("pin-backspace", e("delete"));
    const g = t("bg-mode-select-standalone");
    if (g) {
      const x = g.value;
      g.innerHTML = `
        <option value="weather">${e("bg_weather")}</option>
        <option value="none">${e("bg_panel_none")}</option>
        <option value="photo">${e("bg_photo")}</option>
        <option value="collage">${e("bg_collage")}</option>
      `, x && (g.value = x);
    }
    const m = t("hub-bg-mode-select");
    if (m) {
      const x = m.value;
      m.innerHTML = `
        <option value="default">${e("bg_hub_default")}</option>
        <option value="image">${e("bg_image_opt")}</option>
      `, x && (m.value = x);
    }
    this._populateTemperatureSources(), this._populateWeatherSources();
    const f = t("current-pin-display");
    if (f) {
      const x = this._dashboard?.entries?.[0]?.pin_configured;
      if (x != null)
        f.textContent = e(x ? "pin_active_yes" : "pin_active_no");
      else {
        const h = f.textContent || "", y = h.includes("Sí") || h.includes("Yes") || h.includes("Sim") || h.includes("Sì") || h.includes("是") || h.includes("Да") || h.includes("Ja") || h.includes("Oui") || h.includes("Activo") || h.includes("Active");
        f.textContent = e(y ? "pin_active_yes" : "pin_active_no");
      }
    }
    const _ = t("home-name-input");
    _ && (_.placeholder = e("home_name_placeholder"));
    const b = t("panel-bg-url-input");
    b && (b.placeholder = e("url_placeholder"));
    const v = t("hub-bg-url-input");
    v && (v.placeholder = e("url_placeholder")), this._syncAccessSummary();
  }
  _syncAccessSummary() {
    const e = this.shadowRoot?.getElementById("p-access-desc");
    if (!e) return;
    if (!this._dashboard) {
      e.textContent = this._t("access_desc");
      return;
    }
    const t = this._dashboard.entries?.[0]?.pin_configured === !0, i = this._t(t ? "pin_active_yes" : "pin_active_no"), o = Array.isArray(this._users) ? this._users.filter((s) => s?.enabled !== !1).length : 0, r = o > 0 ? `${this._t("users_title")}: ${o}` : this._t("no_users");
    e.textContent = `${i} · ${r}`;
  }
  _toggleAccessSection(e) {
  }
  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() {
    try {
      this._manualLang = localStorage.getItem("argus_lang") || null;
    } catch {
    }
    this._ensureInitialized(), this._startClock(), this._fullscreenIdx >= 0 && !this._kioskLocked && (document.fullscreenElement || document.webkitFullscreenElement || (this._fullscreenIdx = -1, this.classList.remove("fullscreen-active"))), this._onFsChange = () => {
      if (!(document.fullscreenElement || document.webkitFullscreenElement) && !this._kioskLocked) {
        this.classList.remove("fullscreen-active");
        const t = this.shadowRoot.querySelector(".entry.ios-fullscreen");
        t && t.classList.remove("ios-fullscreen"), this._fullscreenIdx = -1, document.body.style.overflow = "", this._renderEntries();
      }
    }, document.addEventListener("fullscreenchange", this._onFsChange), document.addEventListener("webkitfullscreenchange", this._onFsChange), this._onEscape = (e) => {
      e.key !== "Escape" || !this.classList.contains("fullscreen-active") || document.fullscreenElement || document.webkitFullscreenElement || this._exitFullscreenView();
    }, document.addEventListener("keydown", this._onEscape);
  }
  disconnectedCallback() {
    this._clockInterval && clearInterval(this._clockInterval), this._initRetryTimer && clearTimeout(this._initRetryTimer), this._socket && (this._socket.close(), this._socket = null), this._dashboard = null, this._currentProfile = null, this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._loadState = null, this._initPromise = null, this._onFsChange && (document.removeEventListener("fullscreenchange", this._onFsChange), document.removeEventListener("webkitfullscreenchange", this._onFsChange)), this._onEscape && document.removeEventListener("keydown", this._onEscape), this.shadowRoot?.querySelectorAll(".wx-webgl").forEach((e) => e._argusWebglStop?.());
  }
  _startClock() {
    this._clockInterval && clearInterval(this._clockInterval), this._clockInterval = setInterval(() => {
      const e = /* @__PURE__ */ new Date();
      if (this._dashboard) {
        const t = this.shadowRoot.getElementById("hero-clock-time");
        if (t) {
          const o = this._formatTime(e);
          t.textContent !== o && (t.textContent = o);
        }
        const i = this.shadowRoot.querySelector(".console-hud-time");
        if (i) {
          const o = this._formatTime(e);
          i.textContent !== o && (i.textContent = o);
        }
      }
    }, 1e3);
  }
  _ensureInitialized() {
    !this.isConnected || !this._hass || this._dashboard || this._initPromise || (this._initPromise = this._init().catch((e) => {
      console.error("Argus initialization failed:", e), this.isConnected && this._renderInitializationError(e);
    }).finally(() => {
      this._initPromise = null;
    }));
  }
  _bindSOS() {
    if (this._sosBound) return;
    const e = this.shadowRoot.getElementById("sos-thumb"), t = e && e.closest(".ios-slider-track");
    if (!e || !t || e._sosBound) return;
    e._sosBound = !0;
    let i = !1, o = 0, r = 0;
    const s = () => Math.max(1, t.offsetWidth - e.offsetWidth - 12), n = (l) => {
      i = !0, o = l.clientX - r, e.setPointerCapture(l.pointerId), e.style.transition = "none", e.style.cursor = "grabbing", l.preventDefault();
    }, d = (l) => {
      if (!i) return;
      r = Math.max(0, Math.min(l.clientX - o, s())), e.style.left = 6 + r + "px";
      const u = r / s();
      t.style.background = "rgba(217,4,41," + (0.15 + u * 0.55) + ")", u >= 0.98 && c(!0);
    }, p = (l) => {
      i && c(!1);
    }, c = (l) => {
      i = !1, e.style.transition = "all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)", e.style.cursor = "grab", l ? (this._triggerSOS(), r = 0, setTimeout(() => {
        e.style.left = "6px", t.style.background = "rgba(217,4,41,0.15)";
      }, 600)) : (r = 0, e.style.left = "6px", t.style.background = "rgba(217,4,41,0.15)");
    };
    e.addEventListener("pointerdown", n), e.addEventListener("pointermove", d), e.addEventListener("pointerup", p), e.addEventListener("pointercancel", p), this._sosBound = !0;
  }
  async _init() {
    this._mode = "disarmed", this._staticBound || (this._bindStatic(), this._staticBound = !0), await this._connect(), this._applyTranslations(), await this._load(), this._dashboard && (this._initWidgetGrid(), !this._postLoadBound && (this._postLoadBound = !0, this.shadowRoot.getElementById("btn-clear-log")?.addEventListener("click", () => this._clearHistory()), this.shadowRoot.getElementById("btn-refresh-history")?.addEventListener("click", async () => {
      await this._loadActivityTimeline(this._dashboard?.entry_id), this._renderActivityLog();
    }), this.shadowRoot.getElementById("btn-export-forensic")?.addEventListener("click", () => this._exportForensicTimeline()), this.shadowRoot.getElementById("btn-export-config")?.addEventListener("click", () => this._exportConfig()), this.shadowRoot.getElementById("btn-import-trigger")?.addEventListener("click", () => this.shadowRoot.getElementById("import-config-file").click()), this.shadowRoot.getElementById("import-config-file")?.addEventListener("change", (e) => this._importConfig(e)), this.shadowRoot.getElementById("btn-reset-config")?.addEventListener("click", () => this._resetConfig()), this.shadowRoot.getElementById("btn-undo-reset")?.addEventListener("click", () => this._undoResetConfig()), this.shadowRoot.getElementById("btn-save-personalization-standalone")?.addEventListener("click", () => this._savePersonalization()), this.shadowRoot.getElementById("btn-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), this._configureEmergencyCall()));
  }
  async _clearHistory() {
    if (confirm(this._t("clear_history_confirm")))
      try {
        const e = this._dashboard?.entry_id;
        await this._send("argus/clear_audit_log", e ? { entry_id: e } : {}), await this._loadActivityTimeline(e), this._renderActivityLog();
      } catch (e) {
        alert(this._format("generic_error", { error: e.message }));
      }
  }
  async _loadActivityTimeline(e = null) {
    if (this._ui)
      try {
        const t = { limit: 100 };
        e && (t.entry_id = e);
        const i = await this._send("argus/get_forensic_timeline", t), o = Array.isArray(i?.timeline) ? i.timeline.filter((r) => r && typeof r == "object" && !Array.isArray(r)) : [];
        this._forensicTimeline = o, this._activityTimelineError = null, this._ui.audit_log = o, this._renderActivityLog();
      } catch (t) {
        console.warn("Argus activity timeline unavailable:", t), this._activityTimelineError = t?.message || String(t), this._forensicTimeline = null, Array.isArray(this._ui.audit_log) || (this._ui.audit_log = []), this._renderActivityLog();
      }
  }
  _exportForensicTimeline() {
    const e = Array.isArray(this._forensicTimeline) ? this._forensicTimeline : this._ui?.audit_log || [], t = new Blob([JSON.stringify({ format: "argus-forensic-timeline", generated_at: (/* @__PURE__ */ new Date()).toISOString(), events: e }, null, 2)], { type: "application/json" }), i = URL.createObjectURL(t), o = document.createElement("a");
    o.href = i, o.download = `argus_forensic_${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.json`, o.click(), setTimeout(() => URL.revokeObjectURL(i), 5e3);
  }
  _backupText(e) {
    const t = this._getCurrentLangCode(), i = {
      es: { password: "Contraseña de cifrado (mínimo 8 caracteres)", weak: "La contraseña debe tener al menos 8 caracteres.", decrypt: "Contraseña de la copia cifrada", bad: "No se pudo descifrar la copia. Verifica la contraseña." },
      en: { password: "Encryption password (minimum 8 characters)", weak: "The password must be at least 8 characters.", decrypt: "Encrypted backup password", bad: "The backup could not be decrypted. Check the password." },
      fr: { password: "Mot de passe de chiffrement (8 caractères minimum)", weak: "Le mot de passe doit comporter au moins 8 caractères.", decrypt: "Mot de passe de la sauvegarde chiffrée", bad: "Impossible de déchiffrer la sauvegarde. Vérifiez le mot de passe." },
      pt: { password: "Senha de criptografia (mínimo de 8 caracteres)", weak: "A senha deve ter pelo menos 8 caracteres.", decrypt: "Senha do backup criptografado", bad: "Não foi possível descriptografar o backup. Verifique a senha." },
      it: { password: "Password di cifratura (minimo 8 caratteri)", weak: "La password deve contenere almeno 8 caratteri.", decrypt: "Password del backup cifrato", bad: "Impossibile decifrare il backup. Verifica la password." },
      zh: { password: "加密密码（至少 8 个字符）", weak: "密码必须至少包含 8 个字符。", decrypt: "加密备份密码", bad: "无法解密备份，请检查密码。" },
      ru: { password: "Пароль шифрования (минимум 8 символов)", weak: "Пароль должен содержать не менее 8 символов.", decrypt: "Пароль зашифрованной копии", bad: "Не удалось расшифровать копию. Проверьте пароль." }
    };
    return (i[t] || i.en)[e];
  }
  _bytesToBase64(e) {
    let t = "";
    return e.forEach((i) => {
      t += String.fromCharCode(i);
    }), btoa(t);
  }
  _base64ToBytes(e) {
    return Uint8Array.from(atob(e), (t) => t.charCodeAt(0));
  }
  async _backupKey(e, t, i) {
    const o = await crypto.subtle.importKey("raw", new TextEncoder().encode(e), "PBKDF2", !1, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: t, iterations: 25e4, hash: "SHA-256" },
      o,
      { name: "AES-GCM", length: 256 },
      !1,
      i
    );
  }
  _requestBackupPassword(e) {
    return new Promise((t) => {
      const i = document.createElement("div");
      i.className = "modal-back open", i.setAttribute("role", "dialog"), i.setAttribute("aria-modal", "true");
      const o = e === "decrypt" ? this._backupText("decrypt") : this._backupText("password");
      i.innerHTML = `<div class="modal" style="max-width:430px"><div class="modal-head"><h3>${this._escapeHtml(o)}</h3></div><input type="password" class="glass-control" autocomplete="new-password" style="font-size:17px"><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:14px"><button class="ghost" data-secret-cancel>✕</button><button class="primary" data-secret-ok>✓</button></div></div>`, this.shadowRoot.appendChild(i);
      const r = i.querySelector("input"), s = (n) => {
        i.remove(), t(n);
      };
      i.querySelector("[data-secret-cancel]").addEventListener("click", () => s(null)), i.querySelector("[data-secret-ok]").addEventListener("click", () => s(r.value)), r.addEventListener("keydown", (n) => {
        n.key === "Enter" && s(r.value), n.key === "Escape" && s(null);
      }), requestAnimationFrame(() => r.focus());
    });
  }
  async _exportConfig() {
    try {
      const e = await this._requestBackupPassword("encrypt");
      if (e === null) return;
      if (e.length < 8) {
        alert(this._backupText("weak"));
        return;
      }
      const i = (await this._send("argus/export_config"))?.config;
      if (typeof i != "object" || i === null) throw new Error(this._t("invalid_config"));
      delete i.runtime;
      const o = crypto.getRandomValues(new Uint8Array(16)), r = crypto.getRandomValues(new Uint8Array(12)), s = await this._backupKey(e, o, ["encrypt"]), n = await crypto.subtle.encrypt({ name: "AES-GCM", iv: r }, s, new TextEncoder().encode(JSON.stringify(i))), d = {
        format: "argus-encrypted-backup",
        version: 1,
        kdf: "PBKDF2-SHA256",
        iterations: 25e4,
        cipher: "AES-256-GCM",
        salt: this._bytesToBase64(o),
        iv: this._bytesToBase64(r),
        data: this._bytesToBase64(new Uint8Array(n))
      }, p = new Blob([JSON.stringify(d)], { type: "application/json" }), c = URL.createObjectURL(p), l = document.createElement("a");
      l.href = c, l.download = `argus_backup_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.argus`, l.click(), setTimeout(() => URL.revokeObjectURL(c), 5e3);
    } catch (e) {
      alert(this._format("export_error", { error: e.message }));
    }
  }
  _importConfig(e) {
    const t = e.target.files[0];
    if (!t) return;
    e.target.value = "";
    const i = new FileReader();
    i.onload = async (o) => {
      try {
        let r = JSON.parse(o.target.result);
        if (r?.format === "argus-encrypted-backup") {
          const s = await this._requestBackupPassword("decrypt");
          if (s === null) return;
          try {
            const n = this._base64ToBytes(r.salt), d = this._base64ToBytes(r.iv), p = await this._backupKey(s, n, ["decrypt"]), c = await crypto.subtle.decrypt({ name: "AES-GCM", iv: d }, p, this._base64ToBytes(r.data));
            r = JSON.parse(new TextDecoder().decode(c));
          } catch {
            throw new Error(this._backupText("bad"));
          }
        }
        if (typeof r != "object" || r === null)
          throw new Error(this._t("invalid_config"));
        await this._send("argus/restore_config", { config: r }), alert(this._t("import_success")), window.location.reload();
      } catch (r) {
        alert(this._format("import_error", { error: r.message }));
      }
    }, i.onerror = () => alert(this._t("file_read_error")), i.readAsText(t);
  }
  async _resetConfig() {
    if (confirm(this._t("reset_confirm")))
      try {
        this._undoState = JSON.parse(JSON.stringify(this._ui));
        const e = {};
        await this._send("argus/restore_config", { config: e }), this.shadowRoot.getElementById("btn-reset-config").style.display = "none", this.shadowRoot.getElementById("btn-undo-reset").style.display = "block", alert(this._t("reset_success")), this._resetTimer = setTimeout(() => {
          window.location.reload();
        }, 1e4);
      } catch {
        alert(this._t("reset_error_auth"));
      }
  }
  async _undoResetConfig() {
    if (this._undoState)
      try {
        clearTimeout(this._resetTimer), await this._send("argus/restore_config", { config: this._undoState }), this.shadowRoot.getElementById("btn-reset-config").style.display = "block", this.shadowRoot.getElementById("btn-undo-reset").style.display = "none", alert(this._t("undo_success")), window.location.reload();
      } catch (e) {
        alert(this._format("undo_error", { error: e.message }));
      }
  }
  _bindStatic() {
    const e = (r) => this.shadowRoot.getElementById(r);
    e("selector-close").addEventListener("click", () => this._closeModal()), e("selector-accept").addEventListener("click", () => this._acceptSelection()), e("selector-clear").addEventListener("click", () => {
      this._selected = [], this._renderSelector();
    }), e("selector-search").addEventListener("input", () => this._renderSelector()), e("selector-modal").addEventListener("click", (r) => {
      r.target.id === "selector-modal" && this._closeModal();
    }), e("selector-select-all").addEventListener("click", () => this._selectAll()), e("selector-deselect-all").addEventListener("click", () => {
      this._selected = [], this._renderSelector();
    }), e("btn-new-auto").addEventListener("click", () => {
      history.pushState(null, "", "/config/automation/edit/new"), window.dispatchEvent(new CustomEvent("location-changed"));
    }), e("btn-access-users")?.addEventListener("click", () => this._toggleAccessSection("users")), e("btn-access-pin")?.addEventListener("click", () => this._toggleAccessSection("pin")), e("btn-save-pin").addEventListener("click", () => this._savePin()), e("lnk-forgot-pin")?.addEventListener("click", (r) => {
      r.preventDefault(), this._handleForgotPin();
    }), e("pin-forgot-link")?.addEventListener("click", (r) => {
      r.preventDefault(), this._handleForgotPin();
    }), e("pin-close").addEventListener("click", () => this._closePinModal()), e("pin-cancel").addEventListener("click", () => this._closePinModal()), e("pin-modal").addEventListener("click", (r) => {
      r.target.id === "pin-modal" && this._closePinModal();
    }), e("pin-confirm").addEventListener("click", () => this._submitPin()), e("pin-input").addEventListener("keydown", (r) => {
      r.key === "Enter" && this._submitPin();
    }), this.shadowRoot.querySelectorAll("[data-pin-digit]").forEach(
      (r) => r.addEventListener("click", () => this._appendPinDigit(r.dataset.pinDigit))
    ), e("pin-backspace").addEventListener("click", () => this._backspacePin()), e("btn-add-notif")?.addEventListener("click", () => this._addNotifTarget()), e("btn-save-notif")?.addEventListener("click", () => this._saveNotifications()), e("btn-edit-home-name-standalone")?.addEventListener("click", () => this._editHomeName()), e("home-name-modal-close").addEventListener("click", () => this._closeHomeNameModal()), e("home-name-cancel").addEventListener("click", () => this._closeHomeNameModal()), e("home-name-modal").addEventListener("click", (r) => {
      r.target.id === "home-name-modal" && this._closeHomeNameModal();
    }), e("home-name-save").addEventListener("click", () => this._saveHomeName()), e("home-name-input").addEventListener("keydown", (r) => {
      r.key === "Enter" && this._saveHomeName();
    }), e("btn-edit-widgets")?.addEventListener("click", () => this._toggleWidgetEditing());
    const t = e("lbl-aesthetic-custom"), i = e("personalize-workspace");
    t && i && !t._boundToggle && (t._boundToggle = !0, t.addEventListener("click", () => {
      const r = i.classList.toggle("collapsed"), s = e("personalize-chevron");
      s && (s.textContent = r ? "▼ Desplegar" : "▲ Ocultar");
    })), e("btn-lang-picker")?.addEventListener("click", () => this._openLangModal()), e("lang-modal-close")?.addEventListener("click", () => this._closeLangModal()), e("lang-modal")?.addEventListener("click", (r) => {
      r.target.id === "lang-modal" && this._closeLangModal();
    });
    const o = () => {
      e("sos-modal")?.classList.remove("open"), this._sosEntryIdx = null, e("sos-thumb") && (e("sos-thumb").style.left = "6px", e("sos-thumb").closest(".ios-slider-track").style.background = "rgba(217,4,41,0.15)");
    };
    e("btn-cancel-sos")?.addEventListener("click", o), e("sos-close-x")?.addEventListener("click", o), e("sos-modal")?.addEventListener("click", (r) => {
      r.target.id === "sos-modal" && o();
    }), e("bg-mode-select-standalone")?.addEventListener("change", () => this._updateBgFieldsVisibility()), e("hub-bg-mode-select")?.addEventListener("change", () => this._updateBgFieldsVisibility()), e("panel-bg-file-input")?.addEventListener("change", (r) => this._handlePanelBgFile(r)), e("hub-bg-file-input")?.addEventListener("change", (r) => this._handleHubBgFile(r));
  }
  /* ── WebSocket ───────────────────────────────────────────────────── */
  async _connect() {
    if (typeof this._hass?.callWS != "function")
      throw new Error("Home Assistant authenticated WebSocket is unavailable");
  }
  _send(e, t = {}) {
    return typeof this._hass?.callWS != "function" ? Promise.reject(new Error("Home Assistant authenticated WebSocket is unavailable")) : this._hass.callWS({ type: e, ...t });
  }
  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    let e;
    try {
      e = await this._send("argus/login_bootstrap");
    } catch (A) {
      console.error("Argus bootstrap load failed:", A);
      return;
    }
    this._bootstrap = e;
    const t = e.user_theme || { background_mode: "default", background_file: "" };
    if (this._currentUserTheme = t, t.background_mode !== "default" && t.background_file ? (this._backgroundMode = t.background_mode, this._panelBgFile = t.background_file, this._backgroundImages = [t.background_file]) : t.background_mode !== "default" && t.background_mode ? (this._backgroundMode = t.background_mode, this._panelBgFile = "", this._backgroundImages = []) : (this._backgroundMode = e.background_mode || "none", this._panelBgFile = "", this._backgroundImages = e.background_images || []), e.weather_source && (this._weatherSource = e.weather_source), e.temperature_source && (this._temperatureSource = e.temperature_source), e.language && (this._manualLang = e.language), this._updateCanvasBackground(), e.configuration_missing) {
      this._loadState = "configuration_missing", this._renderMissingConfigurationScreen();
      return;
    }
    if (e.first_run) {
      this._loadState = "first_run", this._renderFirstRunScreen();
      return;
    }
    if (e.legacy_claim_needed) {
      this._loadState = "legacy_claim", this._renderLegacyClaimScreen();
      return;
    }
    if (!e.has_active_session || !this._profileSelectedThisMount) {
      this._loadState = "profile_selection", this._renderLoginScreen(e);
      return;
    }
    this._nukeAllLoginOverlays();
    let i;
    try {
      i = await this._send("argus/dashboard");
    } catch (A) {
      if (A.message.includes("permission") || A.message.includes("session") || A.message.includes("unauthorized")) {
        this._renderLoginScreen(e);
        return;
      }
      console.error("Argus dashboard load failed:", A);
      return;
    }
    this._dashboard = i, this._loadState = "dashboard", this._currentProfile = i.current_profile || null, this._updateHeroProfileDisplay();
    const o = this.shadowRoot.getElementById("bootstrap-overlay");
    o && (this._currentProfile && !this._welcomeShownThisMount ? o.style.display = "flex" : o.style.display = "none"), this._available = i.available_entities || [], this._ui = i.ui || { modes: {}, dashboard: {} }, await this._loadActivityTimeline(i.entry_id), this._notifTargets = i.ui?.notif_targets || [], this._users = Array.isArray(i.ui?.users) ? i.ui.users.filter((A) => A && typeof A == "object" && !Array.isArray(A)) : [], this._homeName = i.ui?.home_name || "", this._emergencyNumber = i.ui?.emergency_number || "911", this._panicOutputs = i.ui?.panic_outputs || [];
    const r = this._users.find((A) => A.id === this._currentProfile?.id) || {};
    this._backgroundMode = r.background_mode || i.ui?.background_mode || "weather", this._backgroundImages = r.background_images || i.ui?.background_images || [], this._temperatureSource = i.ui?.temperature_source || "auto", this._weatherSource = i.ui?.weather_source || "auto", this._clockFormat = i.ui?.clock_format || "auto", this._panelBgFile = r.panel_bg_file !== void 0 ? r.panel_bg_file : i.ui?.panel_bg_file || "", this._panelBgSound = !!(r.panel_bg_sound !== void 0 ? r.panel_bg_sound : i.ui?.panel_bg_sound);
    const s = r.hub_bg_mode || i.ui?.hub_bg_mode || "none";
    this._hubBgMode = s === "none" || s === "default" ? "default" : s, this._hubBgFile = r.hub_bg_file !== void 0 ? r.hub_bg_file : i.ui?.hub_bg_file || "", this._hubBgSound = !!(r.hub_bg_sound !== void 0 ? r.hub_bg_sound : i.ui?.hub_bg_sound), this._updateTheme(), this._updateHomeNameDisplay(), this._updateProfileBadge(), this._populateTemperatureSources();
    const n = this.shadowRoot.getElementById("temp-source-select-standalone");
    n && (n.value = this._temperatureSource || "auto", n.dataset.bound || (n.dataset.bound = "1", n.addEventListener("change", () => this._savePersonalization()))), this._populateWeatherSources();
    const d = this.shadowRoot.getElementById("weather-source-select");
    d && (d.value = this._weatherSource || "auto", d.dataset.bound || (d.dataset.bound = "1", d.addEventListener("change", () => this._savePersonalization())));
    const p = this.shadowRoot.getElementById("argus-clock-format-select");
    p && (this._clockFormat = this._ui?.clock_format || this._dashboard?.clock_format || "auto", p.value = this._clockFormat, p.dataset.bound || (p.dataset.bound = "1", p.addEventListener("change", () => this._savePersonalization())));
    const c = this.shadowRoot.getElementById("emergency-number-input");
    c && (c.value = this._emergencyNumber), this._renderSosOutputs(), this._configureEmergencyCall();
    const l = this.shadowRoot.getElementById("bg-mode-select-standalone");
    l && (l.innerHTML = `
        <option value="weather">${this._t("bg_weather")}</option>
        <option value="none">${this._t("bg_panel_none")}</option>
        <option value="photo">${this._t("bg_photo")}</option>
        <option value="collage">${this._t("bg_collage")}</option>
      `, l.value = this._backgroundMode || "weather");
    const u = this.shadowRoot.getElementById("hub-bg-mode-select");
    u && (u.innerHTML = `
        <option value="default">${this._t("bg_hub_default")}</option>
        <option value="image">${this._t("bg_image_opt")}</option>
        <option value="weather">Clima animado</option>
      `, u.value = this._hubBgMode || "default");
    const g = this.shadowRoot.getElementById("panel-bg-url-input");
    g && (g.value = this._panelBgFile && !this._panelBgFile.startsWith("data:") ? this._panelBgFile : "");
    const m = this.shadowRoot.getElementById("chk-panel-bg-sound");
    m && (m.checked = this._panelBgSound);
    const f = this.shadowRoot.getElementById("hub-bg-url-input");
    f && (f.value = this._hubBgFile && !this._hubBgFile.startsWith("data:") ? this._hubBgFile : "");
    const _ = this.shadowRoot.getElementById("chk-hub-bg-sound");
    _ && (_.checked = this._hubBgSound), this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._isAdmin = i.current_profile?.role === "admin", this._permissions = i.current_profile?.permissions || {};
    const b = i.entries?.[0]?.entity_id;
    if (b ? ((!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = b), this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null)) : (!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = null), this._isAdmin)
      try {
        const A = await this._send("argus/get_ha_users");
        this._haUsersList = A?.ha_users || [];
      } catch (A) {
        console.warn("Could not fetch HA users:", A);
      }
    const v = i.entries?.[0]?.pin_configured === !0, x = this.shadowRoot.getElementById("current-pin-display"), h = this.shadowRoot.getElementById("group-current-pin");
    x && (x.textContent = v ? this._t("pin_active_yes") : this._t("pin_active_no")), h && (v ? h.classList.remove("collapsed") : h.classList.add("collapsed"));
    const y = this.shadowRoot.getElementById("lnk-forgot-pin");
    y && (y.style.display = v ? "inline" : "none");
    const k = this.shadowRoot.getElementById("pin-forgot-link");
    k && (k.style.display = v ? "inline" : "none"), [
      ["instances", () => this._renderEntries()],
      ["activity log", () => this._renderActivityLog()],
      ["mode tabs", () => this._renderModeTabs()],
      ["mode view", () => this._renderModeView()],
      ["automations", () => this._renderAutomations()],
      ["notifications", () => this._renderNotifications()],
      ["users", () => this._renderUsers()]
    ].forEach(([A, R]) => {
      try {
        R();
      } catch (C) {
        console.error(`Argus ${A} render failed:`, C);
      }
    }), this._loadUploadedFiles();
    const E = i.entries && i.entries.length > 0, S = E && i.entries[0].entity_id;
    E && !S ? this._loadRetryTimeout || (this._loadRetryTimeout = setTimeout(() => {
      this._loadRetryTimeout = null, this._load();
    }, 1500)) : this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null);
  }
  /* ── Entries (alarm instances) ───────────────────────────────────── */
  _getSensorBattery(e, t) {
    return this._getDevicePower(e, t).battery;
  }
  // Read only values that Home Assistant exposes.  In particular, do not use a
  // lightning icon or assume 100% just because an entity has no battery sensor.
  _getDevicePower(e, t) {
    const i = t?.attributes || {}, o = [i.battery_level, i.battery, i.battery_percentage].find((d) => Number.isFinite(Number(d)));
    let r = o === void 0 ? null : Math.max(0, Math.min(100, Math.round(Number(o))));
    const s = String(i.power_source || i.power_supply || i.power_type || "").toLowerCase(), n = i.mains_powered === !0 || i.is_mains_powered === !0 || i.wired === !0 || /(?:mains|ac|wired|line|external|toma|corriente)/.test(s);
    if (r === null) {
      let d = null;
      const p = (this._available || []).find((l) => l.entity_id === e);
      if (p && p.device_id && (d = (this._available || []).find(
        (l) => l.device_id === p.device_id && (this._hass?.states?.[l.entity_id]?.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(l.entity_id))
      ), d && (d = { state: this._hass?.states?.[d.entity_id]?.state })), !d) {
        const l = e.split(".").slice(1).join(".").toLowerCase(), u = l.replace(/_(contact|door|window|motion|occupancy|opening|sensor)$/i, "");
        d = Object.values(this._hass?.states || {}).map((g) => {
          const m = String(g.entity_id || "").toLowerCase();
          if (!(g.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(m))) return { state: g, score: 0 };
          const _ = m.split(".").slice(1).join("."), b = _ === `${l}_battery` ? 100 : _ === `${u}_battery` ? 90 : _.startsWith(`${l}_battery`) ? 80 : _.startsWith(`${u}_battery`) ? 70 : 0;
          return { state: g, score: b };
        }).filter((g) => g.score > 0).sort((g, m) => m.score - g.score)[0];
      }
      const c = Number(d?.state);
      Number.isFinite(c) && (r = Math.max(0, Math.min(100, Math.round(c))));
    }
    return { battery: r, mains: n };
  }
  _deviceFacts(e, t, i = !0) {
    const o = t?.state || "unknown", r = ["on", "unlocked", "open", "recording", "active", "motion"].includes(o), s = { on: this._t("status_open"), off: this._t("status_closed"), locked: this._t("status_closed"), unlocked: this._t("status_open"), idle: this._t("status_idle"), recording: this._t("status_recording"), home: this._t("status_home"), not_home: this._t("status_away") }, n = e.split(".")[0], d = ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(n), p = this._getDevicePower(e, t), c = [];
    if (i && c.push({ text: d ? o.toUpperCase() : s[o] || o, className: d ? "" : r ? "status-open" : "status-closed" }), p.mains && c.push({ text: "🔌 AC", className: "power-mains" }), p.battery !== null) {
      const l = p.battery === 0, u = p.battery <= 10 && !l, g = l ? "🔋 ❌" : `🔋 ${p.battery}%`, m = l ? "dead" : u ? "low" : "";
      c.push({ text: g, className: `pill-power ${m}` });
    }
    return c;
  }
  _renderBatteryAlerts() {
    if (!this._hass?.states) return "";
    const e = this._hass.states, t = Object.values(e).filter((r) => {
      const s = r.entity_id?.endsWith("_battery") || r.attributes?.device_class === "battery", n = /dimmer|switch|light|plug|outlet/i.test(r.entity_id) || /dimmer|switch|light|plug|outlet/i.test(r.attributes?.friendly_name || "");
      if (!s || n || r.state === "unknown" || r.state === "unavailable") return !1;
      const d = Number(r.state);
      return !Number.isNaN(d) && d <= 20;
    });
    if (!t.length) return "";
    const i = (r) => this._t(r);
    return `<div class="battery-alerts-container" style="position:absolute; top:18px; left:18px; z-index:15; display:flex; flex-direction:column; gap:6px; max-width:75%; pointer-events:none;">${t.map((r) => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${i("battery_low")}: ${this._escapeHtml(r.attributes.friendly_name || r.entity_id)} (${r.state}%)</div>`).join("")}</div>`;
  }
  _modeButtonIcon(e) {
    const t = {
      home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z"/><path d="M9 21v-6h6v6"/>',
      away: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="M8.5 12h7M12 8.5v7"/>',
      night: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/><path d="m17.5 4 .5 1.2L19.2 6l-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.8z"/>',
      vacation: '<path d="M3 13.5 21 5l-6.8 15-2.3-6.2z"/><path d="m11.9 13.8 3.4 3.4M11.9 13.8 7.2 12"/>',
      disarm: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      sos: '<path d="M12 3 21 20H3z"/><path d="M12 9v4.5M12 17h.01"/>'
    };
    return `<svg class="mode-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t[e] || t.disarm}</svg>`;
  }
  _renderPremiumStatusIcon(e, t, i = "0") {
    const o = t ? "triggered" : { armed_home: "home", armed_away: "away", armed_night: "night", armed_vacation: "vacation", disarmed: "disarm" }[e] || "disarm", r = { home: "#ffad42", away: "#ff6464", night: "#7fb9ff", vacation: "#d69cff", disarm: "#6be295", triggered: "#ff424f" }[o], s = {
      home: '<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away: '<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night: '<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
      vacation: '<path d="m67 113 66-34-28 66-9-25z"/><path d="m96 120 15 15M96 120l-20-6"/>',
      disarm: '<path d="m76 104 16 16 34-39"/>',
      triggered: '<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[o];
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 18px 28px rgba(0,0,0,.34));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(o)}"><defs><linearGradient id="premium-${o}-${i}" x1="20%" y1="10%" x2="85%" y2="100%"><stop stop-color="#fff" stop-opacity=".38"/><stop offset=".25" stop-color="${r}" stop-opacity=".78"/><stop offset="1" stop-color="${r}" stop-opacity=".18"/></linearGradient><filter id="premium-glow-${o}-${i}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${o}-${i})" stroke="${r}" stroke-width="3" filter="url(#premium-glow-${o}-${i})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(5,12,23,.3)" stroke="rgba(255,255,255,.22)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${o}-${i})">${s}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${r}" stroke-opacity=".42" stroke-width="2"><animate attributeName="r" values="51;60;51" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;.08;.6" dur="3.5s" repeatCount="indefinite"/></circle></svg>`;
  }
  _getIntelligentSVG(e, t, i, o, r = "0") {
    return this._renderPremiumStatusIcon(e, o, r);
  }
  _renderEntries() {
    this._sosBound = !1;
    const e = this.shadowRoot.getElementById("entries"), t = this.shadowRoot.getElementById("global-status"), i = this._dashboard?.entries || [], o = (h) => this._t(h);
    if (!i.length) {
      e.innerHTML = `<div class="small" style="padding:10px">${o("no_instances")}</div>`;
      return;
    }
    const s = i.map((h) => this._hass?.states[h.entity_id]?.state || "unavailable").some((h) => h.startsWith("armed") || h === "triggered" || h === "pending");
    t.innerHTML = `<span class="badge ${s ? "armed_away" : "disarmed"}">${o(s ? "system_armed" : "system_disarmed")}</span>`;
    const d = this._getWeatherEntity().state || "sunny", p = this._hass?.states?.["sun.sun"]?.state === "below_horizon", c = this._weatherPresentation(d, p), l = (h) => {
      const y = String(o(h) || "").trim(), k = y.indexOf(" ");
      return k > 0 && k <= 3 ? y.substring(k + 1).trim() : y;
    }, u = /* @__PURE__ */ new Date(), g = this._formatTime(u), m = this.shadowRoot.getElementById("hero-clock-time"), f = this.shadowRoot.getElementById("hero-clock-date"), _ = this.shadowRoot.getElementById("hero-weather-pill"), b = this.shadowRoot.getElementById("hero-security-pill");
    m && (m.textContent = g), f && (f.textContent = u.toLocaleDateString(this._getLocale(), { weekday: "short", month: "short", day: "numeric" })), _ && (_.textContent = `${c.icon} ${c.label}`), b && (b.innerHTML = `<i class="hero-live" style="background:${s ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${s ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml(o(s ? "system_armed" : "system_disarmed"))}`), Array.from(e.querySelectorAll("article.entry")).length !== i.length && (e.innerHTML = i.map((h, y) => `<article class="entry" data-idx="${y}"></article>`).join(""));
    const x = e.querySelectorAll("article.entry");
    i.forEach((h, y) => {
      const k = x[y], S = this._hass?.states[h.entity_id]?.state || h.state || "unavailable", A = S === "triggered", R = !!this._hass?.states?.[h.entity_id]?.attributes?.argus_panic_active;
      h.pin_configured === !0 || h.user_pin_configured;
      const C = this._hass?.config?.location_name || this._homeName || o("home_fallback"), T = this._getDisplayedTemperature(), H = this._getTemperatureReadings();
      ({
        disarmed: { label: o("disarmed"), accent: "#55df91" },
        armed_home: { label: o("mode_home"), accent: "#ffb54d" },
        armed_away: { label: o("mode_away"), accent: "#ff724f" },
        armed_night: { label: o("mode_night"), accent: "#8ab9ff" },
        armed_vacation: { label: o("mode_vacation"), accent: "#d59bff" },
        triggered: { label: o("log_triggered"), accent: "#ff4d5d" },
        pending: { label: o("system_armed"), accent: "#ffb54d" }
      })[S] || S.replace(/_/g, " ");
      const N = c.label, z = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log[0] : null;
      z && this._localizeActivityDetail(String(z.action || ""), String(z.detail || ""));
      const $ = S.replace("armed_", "");
      let M = this._ui?.modes?.__by_entity__?.[h.entity_id]?.[$] || this._ui?.modes?.[$] || {};
      if (A && !(M.sensors || []).length) {
        const I = this._ui?.modes?.__by_entity__?.[h.entity_id] || this._ui?.modes || {};
        M = ["away", "home", "night", "vacation"].map((P) => I[P]).find((P) => (P?.sensors || []).some((L) => ["on", "open", "unlocked", "recording", "active", "motion"].includes(this._hass?.states?.[L]?.state))) || {};
      }
      let Q = M.sensors || [];
      if (S === "disarmed" || !Q.length) {
        const I = this._ui?.modes?.__by_entity__?.[h.entity_id] || this._ui?.modes || {}, P = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((L) => {
          I[L]?.sensors && I[L].sensors.forEach((xe) => P.add(xe));
        }), Q = Array.from(P);
      }
      const Ft = M.bypassed_sensors || [], Ke = Q.filter((I) => !Ft.includes(I)), Xe = ["on", "open", "unlocked", "recording", "active", "motion"], be = !!this._hass?.states?.[h.entity_id]?.attributes?.arming_waiting_for_sensors, jt = Array.isArray(this._hass?.states?.[h.entity_id]?.attributes?.arming_blocking_sensors) ? this._hass?.states?.[h.entity_id]?.attributes?.arming_blocking_sensors : [], Z = Ke.some((I) => Xe.includes(this._hass?.states?.[I]?.state)) && (S.startsWith("armed") || S === "pending" || be) && !A, ye = this._fullscreenIdx === y || this._kioskLocked && (this._kioskEntryId === h.entry_id || i.length === 1);
      k.className = `entry cinematic-entry ${ye ? "ios-fullscreen" : ""}`, k.style.cssText = A ? "border:3px solid #ff5252;box-shadow:0 0 30px rgba(255,82,82,.4)" : "", k.querySelectorAll(".wx-webgl").forEach((I) => I._argusWebglStop?.());
      const Dt = Ke.map((I) => {
        const P = this._hass?.states[I];
        if (!P) return "";
        const L = Xe.includes(P.state), xe = P.attributes?.friendly_name || I.split(".")[1] || I, ve = P.attributes?.device_class || (I.startsWith("lock.") ? "lock" : "door");
        let D = "";
        ve === "lock" ? D = L ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>' : ve === "window" ? D = L ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14l16 0"></path><path d="M4 10l16 0"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M4 12h16M12 4v16"></path></svg>' : ve === "motion" ? D = L ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M4.93 4.93a10 10 0 0 1 14.14 0M4.93 19.07a10 10 0 0 0 14.14 0"></path></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>' : D = L ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V2h12v20H4z"></path><path d="M16 4h4v18H4z"></path><circle cx="12" cy="12" r="1"></circle></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V2h12v20H6z"></path><circle cx="14" cy="12" r="1"></circle></svg>';
        const ee = this._getDevicePower(I, P);
        let Je = "";
        if (ee.battery !== null) {
          const we = ee.battery === 0, Ut = ee.battery <= 10 && !we, Wt = we ? "🔋 ❌" : `🔋 ${ee.battery}%`;
          (we || Ut) && (Je = `<span style="margin-left:8px;font-size:10px;font-weight:700;color:#ff5252;background:rgba(255,255,255,0.1);backdrop-filter:blur(4px);padding:2px 6px;border-radius:10px;border:1px solid rgba(255,82,82,0.3);text-shadow:0 0 5px rgba(255,82,82,0.5);">${Wt}</span>`);
        }
        const te = be && jt.includes(I);
        return `<div class="console-sensor ${L ? "open" : ""}"><span class="console-sensor-icon" style="display:flex;align-items:center;justify-content:center;color:${te ? "#ffd700" : L ? "#ff968b" : "#75f4b0"};${te ? "animation:pulse 1s infinite;" : L ? "animation:pulse 2s infinite;" : ""}">${D}</span><span class="console-sensor-name" style="${te ? "color:#ffd700" : ""}">${this._escapeHtml(xe)}</span><span class="console-sensor-state" style="color:${te ? "#ffd700" : L ? "#ff968b" : "#75f4b0"}">${this._escapeHtml(o(L ? "status_open" : "status_closed"))}${Je}</span></div>`;
      }).join("");
      k.innerHTML = `
          ${this._renderEntryBackground(d, p)}
          ${this._kioskLocked ? `<button class="btn-unlock-kiosk" data-action="unlock-kiosk" style="position:absolute;top:16px;right:16px;z-index:99;padding:8px 14px;background:rgba(220,38,38,0.85);color:white;border:none;border-radius:10px;font-weight:600;font-size:13px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 4px 12px rgba(0,0,0,0.4)">🔓 ${this._escapeHtml(o("unlock_kiosk") || "Desbloquear kiosco")}</button>` : ""}
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:100;padding:5px 12px;background:rgba(36,188,129,.2);border:1px solid rgba(36,188,129,.4);border-radius:20px;color:#75f4b0;font-size:11px;font-weight:700;backdrop-filter:blur(10px);box-shadow:0 4px 12px rgba(0,0,0,0.2);display:flex;align-items:center;gap:6px;white-space:nowrap;"><div style="width:7px;height:7px;border-radius:50%;background:#75f4b0;box-shadow:0 0 8px #75f4b0;"></div>CONECTADO</div>
          ${ye ? `<button class="ghost entry-exit-fs" data-exit-fullscreen title="${this._escapeHtml(o("fullscreen_title"))}" aria-label="${this._escapeHtml(o("fullscreen_title"))}" style="position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);backdrop-filter:blur(12px);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 20px rgba(0,0,0,.3)">×</button>` : ""}
          ${ye ? "" : `<button class="ghost fs-btn entry-fs" data-fullscreen="${y}" title="${this._escapeHtml(o("fullscreen_title"))}" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>`}
          ${this._renderBatteryAlerts()}
          <div class="hud">
            <div class="hud-loc">${this._escapeHtml(C)} · ${this._escapeHtml(N)}</div>
            <div class="hud-data"><span>${this._escapeHtml(g)}</span>${T ? `<i>🌡️ ${this._escapeHtml(T)}</i>` : ""}</div>
            ${H.length ? `<div class="hud-temperatures">${H.map((I) => `<span class="hud-temperature">${this._escapeHtml(I.label)} ${this._escapeHtml(I.value)}</span>`).join("")}</div>` : ""}
          </div>
          <div class="entry-content security-console">
            <!-- Compact HUD bar at top of console — replaces overlapping absolute hud -->
            <div class="console-hud">
              <span class="console-hud-loc">🏡 ${this._escapeHtml(C)} · ${this._escapeHtml(N)}</span>
              <div class="console-hud-right">
                <span class="console-hud-time">${this._escapeHtml(g)}</span>
                ${T ? `<span class="console-hud-temp">🌡️ ${this._escapeHtml(T)}</span>` : ""}
                ${H.length ? `<div class="console-hud-temps">${H.map((I) => `<span class="console-hud-tpill">${this._escapeHtml(I.label)} ${this._escapeHtml(I.value)}</span>`).join("")}</div>` : ""}
              </div>
            </div>
            <div class="entry-icon" style="display:flex;justify-content:center;animation:float-icon 5s ease-in-out infinite;">
              ${this._getIntelligentSVG(be ? "pending" : S, null, p, A, y)}
            </div>
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${S === "armed_home" ? "active" : ""} ${Z && S === "armed_home" ? "buzz-orange" : ""}" data-idx="${y}" data-action="home">${this._modeButtonIcon("home")}<span>${this._escapeHtml(l("btn_home"))}</span></button>
              <button class="liquid-btn btn-away ${S === "armed_away" ? "active" : ""} ${Z && S === "armed_away" ? "buzz-orange" : ""}" data-idx="${y}" data-action="away">${this._modeButtonIcon("away")}<span>${this._escapeHtml(l("btn_away"))}</span></button>
              <button class="liquid-btn btn-night ${S === "armed_night" ? "active" : ""} ${Z && S === "armed_night" ? "buzz-orange" : ""}" data-idx="${y}" data-action="night">${this._modeButtonIcon("night")}<span>${this._escapeHtml(l("btn_night"))}</span></button>
              <button class="liquid-btn btn-vacation ${S === "armed_vacation" ? "active" : ""} ${Z && S === "armed_vacation" ? "buzz-orange" : ""}" data-idx="${y}" data-action="vacation">${this._modeButtonIcon("vacation")}<span>${this._escapeHtml(l("btn_vacation"))}</span></button>
              <button class="liquid-btn btn-disarm ${S === "disarmed" ? "active" : ""}" data-idx="${y}" data-action="disarm">${this._modeButtonIcon("disarm")}<span>${this._escapeHtml(l("btn_disarmed"))}</span></button>
              ${this._permissions?.sos !== !1 ? `<button class="btn-sos" data-action="${R ? "stop-sos" : "sos"}" data-idx="${y}">${this._modeButtonIcon("sos")}<span>${o(R ? "sos_stop" : "btn_sos")}</span></button>` : ""}
            </div>
            <div class="console-sensors">${Dt || `<div class="console-empty">${this._escapeHtml(Q.length === 0 ? "Sin sensores de intrusión configurados." : "Todos los sensores configurados están omitidos.")}</div>`}</div>

          </div>
      `;
    }), e.querySelectorAll('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])').forEach(
      (h) => h.addEventListener("click", (y) => this._handleAction(y.currentTarget.dataset.idx, y.currentTarget.dataset.action))
    ), e.querySelectorAll('button[data-action="unlock-kiosk"]').forEach(
      (h) => h.addEventListener("click", () => this._requestKioskUnlock())
    ), e.querySelectorAll('button[data-action="sos"]').forEach(
      (h) => h.addEventListener("click", () => {
        this._sosEntryIdx = Number(h.dataset.idx);
        const y = this.shadowRoot.getElementById("sos-modal");
        y && y.classList.add("open");
      })
    ), e.querySelectorAll('button[data-action="stop-sos"]').forEach(
      (h) => h.addEventListener("click", () => this._stopSOS(Number(h.dataset.idx)))
    ), e.querySelectorAll("button[data-fullscreen]").forEach((h) => {
      h.addEventListener("click", (y) => this._toggleFullscreen(y.currentTarget.closest(".entry")));
    }), e.querySelectorAll("button[data-exit-fullscreen]").forEach((h) => {
      h.addEventListener("click", () => this._exitFullscreenView());
    }), e.querySelectorAll(".wx-webgl").forEach((h) => {
      h._argusRO && h._argusRO.disconnect();
      const y = () => {
        h._argusWebglInit || (h.clientWidth > 0 || h.offsetWidth > 0) && h.isConnected && (h._argusWebglInit = !0, this._initWeatherWebGL(h));
      };
      typeof ResizeObserver < "u" && (h._argusRO = new ResizeObserver(() => {
        y(), h._argusRO?.disconnect();
      }), h._argusRO.observe(h.parentElement || h)), h.clientWidth > 0 ? y() : requestAnimationFrame(() => {
        h.clientWidth > 0 ? y() : setTimeout(() => y(), 200);
      });
    }), this._bindSOS();
  }
  async _exitFullscreenView() {
    const e = this._fullscreenIdx >= 0 ? this._fullscreenIdx : 0, t = (this._dashboard?.entries || [])[e], i = t && (t.pin_configured === !0 || t.user_pin_configured === !0), o = async () => {
      if (document.fullscreenElement || document.webkitFullscreenElement)
        try {
          document.exitFullscreen ? await document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        } catch {
        }
      (this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen"))?.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((s) => s.classList.remove("ios-fullscreen")), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this._renderEntries();
    };
    if (!i) {
      await o();
      return;
    }
    this._showPinModal(async (r) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: t.entry_id,
          pin: r || ""
        }), this._closePinModal(), await o();
      } catch {
        const n = this.shadowRoot.getElementById("pin-error");
        n && (n.textContent = "❌ PIN incorrecto o error de acceso", n.style.color = "#ff4a4a");
      }
    });
  }
  _requestKioskUnlock() {
    if (!this._kioskLocked) return;
    const e = (this._dashboard?.entries || []).find((r) => r && r.entry_id === this._kioskEntryId), t = this.shadowRoot.getElementById("pin-error");
    if (!e || !e.entry_id) {
      t && (t.textContent = "Cannot resolve Argus instance", t.style.color = "#ff4a4a");
      return;
    }
    const i = this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry"), o = () => {
      document.exitFullscreen ? document.exitFullscreen().catch(() => {
      }) : document.webkitExitFullscreen && document.webkitExitFullscreen(), i && i.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((r) => r.classList.remove("ios-fullscreen")), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this._renderEntries();
    };
    if (e.pin_configured !== !0) {
      o();
      return;
    }
    t && (t.textContent = ""), this._showPinModal(async (r) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: e.entry_id,
          pin: r || ""
        }), this._closePinModal(), o();
      } catch (s) {
        t && (t.textContent = s.message || this._t("pin_disarm_error"), t.style.color = "#ff4a4a");
      }
    });
  }
  _toggleFullscreen(e) {
    if (this._kioskLocked) {
      this._requestKioskUnlock();
      return;
    }
    const t = e || this.shadowRoot.querySelector(".entry"), i = t?.querySelector(".entry-fs"), o = parseInt(i?.dataset?.fullscreen ?? 0), r = isNaN(o) || o < 0 ? 0 : o, s = this._dashboard?.entries?.[r] || this._dashboard?.entries?.[0];
    this._kioskEntryId = s?.entry_id || null, this._kioskTarget = t, this._kioskLocked = !1, this._fullscreenIdx = r, this.classList.add("fullscreen-active");
    const n = t?.requestFullscreen || t?.webkitRequestFullscreen, d = () => {
      t && t.classList.add("ios-fullscreen"), document.body.style.overflow = "hidden", this._renderEntries();
    };
    n ? n.call(t).then(() => {
      document.body.style.overflow = "hidden", this._renderEntries();
    }).catch(d) : d();
  }
  _getWeatherGradient(e, t = "") {
    const i = {
      sunny: "linear-gradient(160deg, #4da6ff 0%, #89c4ff 60%, #c8e8ff 100%)",
      clear: "linear-gradient(160deg, #1a1a3e 0%, #2d2d6b 50%, #0f2557 100%)",
      cloudy: "linear-gradient(160deg, #6b7a8d 0%, #9aa5b1 60%, #c5cdd5 100%)",
      partlycloudy: "linear-gradient(160deg, #5b8fd4 0%, #7baee8 50%, #a8c8f0 100%)",
      rainy: "linear-gradient(160deg, #3d4f5c 0%, #5a6e7a 50%, #7a8e96 100%)",
      snowy: "linear-gradient(160deg, #a8bfcf 0%, #c5d8e8 60%, #e8f0f8 100%)",
      stormy: "linear-gradient(160deg, #1a1f2e 0%, #2d3244 50%, #3d4255 100%)",
      fog: "linear-gradient(160deg, #8a9099 0%, #adb5bd 60%, #ced4da 100%)"
    }, o = String(t || e.label || "").toLowerCase(), r = Object.keys(i).find((s) => o.includes(s)) || Object.keys(i).find((s) => e.label?.toLowerCase().includes(s)) || "sunny";
    return i[r];
  }
  _initWeatherWebGL(e) {
    if (!e || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = e.parentElement;
    if (t) {
      const h = this._getWeatherEntity()?.state, y = this._hass?.states?.["sun.sun"]?.state === "below_horizon", k = String(h || "sunny").toLowerCase().replace(/[\s-]+/g, "_");
      t.style.background = this._getWeatherGradient(
        this._weatherPresentation(h, y),
        k
      );
    }
    const i = e.getContext("webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, powerPreference: "low-power" }) || e.getContext("experimental-webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, powerPreference: "low-power" });
    if (!i) {
      e.style.opacity = "0";
      return;
    }
    i.clearColor(0, 0, 0, 0);
    const o = "attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}", r = `precision highp float;varying vec2 uv;uniform float time,rain,snow,fog,storm,wind,temp,night,cloudy;
uniform vec2 cloudPositions[6];
uniform vec2 cloudSizes[6];
uniform float cloudAlphas[6];
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);return mix(mix(h(i+vec2(0.0,0.0)),h(i+vec2(1.0,0.0)),u.x),mix(h(i+vec2(0.0,1.0)),h(i+vec2(1.0,1.0)),u.x),u.y);}
float fbm(vec2 p){float f=0.0,a=0.5;for(int i=0;i<4;i++){f+=a*noise(p);p*=2.0;a*=0.5;}return f;}
float rainLayer(vec2 u,float t,float n){vec2 s=vec2(20.0+8.0*n,7.0+3.0*n);u.x+=wind*0.1*u.y;vec2 g=u*s,id=floor(g),q=fract(g);float sp=2.4+n*1.35+h(id)*1.2;q.y=fract(q.y+t*sp+h(id));float x=abs(q.x-(0.5+wind*0.2-q.y*(0.16+wind*0.1)));return (1.0-smoothstep(0.003,0.035-n*0.006,x))*(1.0-smoothstep(0.18,0.98,q.y));}
float snowLayer(vec2 u,float t,float n){vec2 g=u*vec2(15.0+n*5.0,10.0+n*4.0),id=floor(g),q=fract(g);q.y=fract(q.y+t*(0.2+h(id)*0.2)+h(id));q.x+=sin(t+h(id)*6.28)*0.2+wind*0.1*t;return 1.0-smoothstep(0.01+n*0.01,0.08+n*0.02,length(q-vec2(0.5)));}
void main(){float t=time*0.001;vec2 u=uv;if(temp>30.0){u.x+=sin(u.y*20.0+t*5.0)*0.003*(temp-30.0)/10.0;u.y+=cos(u.x*20.0+t*4.0)*0.003*(temp-30.0)/10.0;}
vec3 col=vec3(0.0);float alpha=0.0;
float clAlpha=0.0;
if(cloudy>0.0){
  for(int i=0;i<6;i++){
    vec2 center=cloudPositions[i];
    vec2 size=cloudSizes[i]*1.6;
    vec2 d=(u-center)/size;
    float dist=dot(d,d);
    if(dist<1.0){
      float base=exp(-dist*3.5);
      float edge=noise(u*8.0+vec2(t*0.05))*0.35;
      float intensity=clamp(base+edge*base,0.0,1.0);
      clAlpha=max(clAlpha,cloudAlphas[i]*intensity*0.45);
    }
  }
}
if(clAlpha>0.0){
  vec3 cloudColor=mix(vec3(0.85,0.90,0.95),vec3(1.0),clAlpha);
  col=mix(col,cloudColor,clAlpha);
  alpha=max(alpha,clAlpha*0.7);
}
if(night>0.5&&rain==0.0&&snow==0.0&&fog==0.0){float st=h(floor(u*150.0));if(st>0.99){float tw=0.5+0.5*sin(t*3.0+st*100.0);col+=vec3(1.0)*tw*(st-0.99)*100.0;alpha=max(alpha,tw*0.5);}}
if(night>0.5&&temp<5.0&&rain==0.0&&snow==0.0&&storm==0.0){float au=fbm(vec2(u.x*2.0+t*0.1,u.y*3.0-t*0.05)),au2=fbm(vec2(u.x*3.0-t*0.15,u.y*2.0+t*0.08));vec3 ac=mix(vec3(0.0,1.0,0.5),vec3(0.5,0.0,1.0),au);float intn=smoothstep(0.4,0.8,au*au2)*(1.0-u.y);col+=ac*intn*1.5;alpha=max(alpha,intn);}
if(night<0.5&&rain==0.0&&fog==0.0&&snow==0.0&&cloudy==0.0){float gr=fbm(vec2(u.x*4.0-t*0.08,u.y*0.4))*(1.0-u.y*0.8);float sunGlow=smoothstep(0.3,0.7,gr);col+=vec3(1.0,0.92,0.72)*sunGlow*0.65;alpha=max(alpha,sunGlow*0.45);}
if(rain>0.0){float r=rainLayer(u,t,0.0)+rainLayer(u,t,1.0)*0.65+rainLayer(u,t,2.0)*0.45+rainLayer(u,t,3.0)*0.25;col+=vec3(0.75,0.88,1.0)*r*rain*1.2;alpha=max(alpha,min(1.0,r*rain*1.1));}
if(snow>0.0){float s=snowLayer(u,t,0.0)+snowLayer(u,t,1.0)*0.7+snowLayer(u,t,2.0)*0.4;col+=vec3(1.0)*s*snow;alpha=max(alpha,min(1.0,s*snow));}
if(fog>0.0){float f=fbm(vec2(u.x*3.0+t*0.2,u.y*4.0-t*0.1));col+=vec3(0.8,0.85,0.9)*f*fog*0.7;alpha=max(alpha,min(1.0,f*fog*0.8));}
if(storm>0.0){float fl=step(0.98,fract(t*0.1+fbm(u*5.0+t)))*(0.8+0.2*noise(vec2(t*50.0)));col+=vec3(1.0,0.95,1.0)*fl*storm;alpha=max(alpha,fl*storm*0.8);}
gl_FragColor=vec4(col,alpha);}`, s = (h, y) => {
      const k = i.createShader(h);
      return i.shaderSource(k, y), i.compileShader(k), i.getShaderParameter(k, i.COMPILE_STATUS) ? k : null;
    }, n = s(i.VERTEX_SHADER, o), d = s(i.FRAGMENT_SHADER, r);
    if (!n || !d) {
      e.style.opacity = "0";
      return;
    }
    const p = i.createProgram();
    if (i.attachShader(p, n), i.attachShader(p, d), i.linkProgram(p), !i.getProgramParameter(p, i.LINK_STATUS)) {
      e.style.opacity = "0";
      return;
    }
    const c = i.createBuffer();
    i.bindBuffer(i.ARRAY_BUFFER, c), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), i.STATIC_DRAW);
    const l = (h) => i.getUniformLocation(p, h), u = i.getAttribLocation(p, "p"), g = {
      time: l("time"),
      rain: l("rain"),
      snow: l("snow"),
      fog: l("fog"),
      storm: l("storm"),
      wind: l("wind"),
      temp: l("temp"),
      night: l("night"),
      cloudy: l("cloudy"),
      cloudPositions: l("cloudPositions"),
      cloudSizes: l("cloudSizes"),
      cloudAlphas: l("cloudAlphas")
    }, m = {
      rain: Math.max(Number(e.dataset.rain || 0), Number(e.dataset.drizzle || 0) * 0.4),
      snow: Number(e.dataset.snow || 0),
      fog: Number(e.dataset.fog || 0),
      storm: Number(e.dataset.storm || 0),
      wind: Number(e.dataset.wind || 0),
      temp: Number(e.dataset.temp || 20),
      night: Number(e.dataset.night || 0),
      cloudy: Number(e.dataset.cloudy || 0)
    }, _ = Array.from({ length: 6 }, () => ({
      x: Math.random() * 800,
      y: 50 + Math.random() * 250,
      rx: 120 + Math.random() * 80,
      ry: 45 + Math.random() * 25,
      speed: 0.1 + Math.random() * 0.3,
      alpha: 0.08 + Math.random() * 0.07
    }));
    let b = 0, v = !0;
    if (e.width === 0 || e.height === 0 || e.clientWidth === 0 || e.clientHeight === 0) {
      const h = e.parentElement;
      h && h.offsetWidth > 0 ? (e.width = Math.floor(h.offsetWidth * (window.devicePixelRatio || 1)) || 300, e.height = Math.floor(h.offsetHeight * (window.devicePixelRatio || 1)) || 200) : (e.width = 600, e.height = 400);
    }
    const x = (h) => {
      if (!v || !e.isConnected) return;
      i.clear(i.COLOR_BUFFER_BIT);
      const y = Math.min(window.devicePixelRatio || 1, 1.5), k = Math.max(1, Math.round(e.clientWidth * y)), E = Math.max(1, Math.round(e.clientHeight * y));
      (e.width !== k || e.height !== E) && (e.width = k, e.height = E, i.viewport(0, 0, k, E)), m.cloudy > 0 && _.forEach((C) => {
        C.x -= C.speed, C.x + C.rx < 0 && (C.x = k + C.rx, C.y = 50 + Math.random() * (E - 100));
      });
      const S = [], A = [], R = [];
      _.forEach((C) => {
        S.push(C.x / k, C.y / E), A.push(C.rx / k, C.ry / E), R.push(m.cloudy > 0 ? C.alpha : 0);
      }), i.useProgram(p), i.enable(i.BLEND), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), i.bindBuffer(i.ARRAY_BUFFER, c), i.enableVertexAttribArray(u), i.vertexAttribPointer(u, 2, i.FLOAT, !1, 0, 0), g.time && i.uniform1f(g.time, h), g.rain && i.uniform1f(g.rain, m.rain), g.snow && i.uniform1f(g.snow, m.snow), g.fog && i.uniform1f(g.fog, m.fog), g.storm && i.uniform1f(g.storm, m.storm), g.wind && i.uniform1f(g.wind, m.wind), g.temp && i.uniform1f(g.temp, m.temp), g.night && i.uniform1f(g.night, m.night), g.cloudy && i.uniform1f(g.cloudy, m.cloudy), g.cloudPositions && i.uniform2fv(g.cloudPositions, S), g.cloudSizes && i.uniform2fv(g.cloudSizes, A), g.cloudAlphas && i.uniform1fv(g.cloudAlphas, R), i.drawArrays(i.TRIANGLE_STRIP, 0, 4), b = requestAnimationFrame(x);
    };
    e._argusWebglStop = () => {
      v = !1, cancelAnimationFrame(b), i.getExtension("WEBGL_lose_context")?.loseContext();
    }, e.closest(".wx-atmosphere")?.classList.add("webgl-active"), b = requestAnimationFrame(x);
  }
  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _renderAtmosphere(e, t) {
    const i = String(e || "").toLowerCase(), o = (f) => i.includes(f), r = o("thunder") || o("lightning") || o("storm"), s = o("snow") || o("hail") || o("sleet") || o("blizzard"), n = o("drizzle") || o("shower"), d = !n && (o("rain") || o("pouring")), p = o("fog") || o("mist") || o("hazy"), c = o("cloud") || o("overcast");
    let l = "clear";
    r ? l = "storm" : d || n ? l = "rain" : s ? l = "snow" : p ? l = "fog" : o("partly") ? l = "partlycloudy" : c ? l = "cloudy" : o("sunny") && (l = "sunny");
    const u = t ? "night" : "day", m = this._eclipseEvent() ? "eclipse" : "";
    return `<div class="scene ${u} ${l} ${m}"></div>`;
  }
  _getWeatherBg(e, t) {
    return this._renderAtmosphere(e, t);
  }
  /* ── Activity Log ────────────────────────────────────────────────── */
  _healthText() {
    const e = {
      es: { title: "Centro de salud", healthy: "Sistema saludable", warning: "Requiere atención", critical: "Dispositivos sin conexión", devices: "dispositivos configurados", offline: "sin conexión", low: "baterías bajas", battery: "Batería", none: "No hay dispositivos seleccionados en los modos.", local: "Local-first activo", confirm: "Confirmación inteligente", help: "Requiere señales independientes dentro de una ventana. Humo, gas, CO y seguridad siempre disparan de inmediato.", save: "Guardar", saved: "Guardado" },
      en: { title: "Health center", healthy: "System healthy", warning: "Attention required", critical: "Devices offline", devices: "configured devices", offline: "offline", low: "low batteries", battery: "Battery", none: "No devices are selected in the modes.", local: "Local-first active", confirm: "Intelligent confirmation", help: "Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.", save: "Save", saved: "Saved" },
      fr: { title: "Centre de santé", healthy: "Système sain", warning: "Attention requise", critical: "Appareils hors ligne", devices: "appareils configurés", offline: "hors ligne", low: "batteries faibles", battery: "Batterie", none: "Aucun appareil n’est sélectionné dans les modes.", local: "Local-first actif", confirm: "Confirmation intelligente", help: "Exige des signaux indépendants. Fumée, gaz, CO et sécurité déclenchent toujours immédiatement.", save: "Enregistrer", saved: "Enregistré" },
      pt: { title: "Centro de saúde", healthy: "Sistema saudável", warning: "Requer atenção", critical: "Dispositivos offline", devices: "dispositivos configurados", offline: "offline", low: "baterias fracas", battery: "Bateria", none: "Nenhum dispositivo foi selecionado nos modos.", local: "Local-first ativo", confirm: "Confirmação inteligente", help: "Exige sinais independentes. Fumaça, gás, CO e segurança sempre disparam imediatamente.", save: "Salvar", saved: "Salvo" },
      it: { title: "Centro salute", healthy: "Sistema integro", warning: "Richiede attenzione", critical: "Dispositivi offline", devices: "dispositivi configurati", offline: "offline", low: "batterie scariche", batteria: "Batteria", none: "Nessun dispositivo è selezionato nelle modalità.", local: "Local-first attivo", confirm: "Conferma intelligente", help: "Richiede segnali indipendenti. Fumo, gas, CO e sicurezza scattano sempre subito.", save: "Salva", saved: "Salvato" },
      zh: { title: "健康中心", healthy: "系统健康", warning: "需要注意", critical: "设备离线", devices: "已配置设备", offline: "离线", low: "低电量", battery: "电池", none: "模式中未选择设备。", local: "本地优先已启用", confirm: "智能确认", help: "需要在时间窗口内收到独立信号。烟雾、燃气、一氧化碳和安全传感器始终立即触发。", save: "保存", saved: "已保存" },
      ru: { title: "Центр здоровья", healthy: "Система исправна", warning: "Требуется внимание", critical: "Устройства не в сети", devices: "настроенных устройств", offline: "не в сети", low: "низкий заряд", battery: "Батарея", none: "В режимах не выбраны устройства.", local: "Local-first активен", confirm: "Умное подтверждение", help: "Требует независимых сигналов. Дым, газ, CO и безопасность всегда срабатывают сразу.", save: "Сохранить", saved: "Сохранено" }
    };
    return e[this._getCurrentLangCode()] || e.en;
  }
  _renderHealthCenter() {
    const e = this._healthText(), t = this.shadowRoot.getElementById("h-health-title"), i = this.shadowRoot.getElementById("health-local-badge"), o = this.shadowRoot.getElementById("health-center");
    t && (t.textContent = e.title), i && (i.textContent = e.local);
    const r = this._ui?.intelligent_confirmation || { enabled: !1, window_seconds: 15, required_signals: 2 }, s = this.shadowRoot.getElementById("confirm-enabled"), n = this.shadowRoot.getElementById("confirm-signals"), d = this.shadowRoot.getElementById("confirm-window");
    s && (s.checked = !!r.enabled), n && (n.value = String(r.required_signals || 2)), d && (d.value = String(r.window_seconds || 15));
    const p = this.shadowRoot.getElementById("confirm-label");
    p && (p.textContent = e.confirm);
    const c = this.shadowRoot.getElementById("confirm-help");
    c && (c.textContent = e.help);
    const l = this.shadowRoot.getElementById("btn-save-confirmation");
    if (l && l.dataset.saved !== "1" && (l.textContent = e.save), this._renderStateSchedule(), !o) return;
    const u = this._systemHealth;
    if (!u) {
      o.innerHTML = `<div class="small" style="padding:10px">${this._escapeHtml(e.none)}</div>`;
      return;
    }
    const g = Array.isArray(u.batteries) ? u.batteries : [], m = g.filter((h) => h.low), f = Array.isArray(u.unavailable) ? u.unavailable : [], _ = Array.isArray(u.configured_devices) ? u.configured_devices : [], b = u.status === "critical" ? e.critical : u.status === "warning" ? e.warning : e.healthy, v = new Map(g.map((h) => [h.entity_id, h])), x = _.map((h) => {
      const y = v.get(h.entity_id), k = h.state === "unknown" || h.state === "unavailable", E = [k ? e.offline : h.state];
      return y?.value !== null && y?.value !== void 0 && E.push(`${y.value}${y.unit || "%"}`), { name: h.name, value: E.join(" · "), alert: k || !!y?.low };
    });
    o.innerHTML = `<div class="health-summary">
      <div class="health-score" style="--score:${Number(u.score) || 0}" aria-label="${Number(u.score) || 0}%">${Number(u.score) || 0}</div>
      <div><div style="font-weight:850">${this._escapeHtml(b)}</div><div class="small" style="opacity:.6;margin-top:3px">${_.length} ${this._escapeHtml(e.devices)}</div></div>
    </div><div class="health-metrics">
      <div class="health-metric"><strong>${f.length}</strong><span>${this._escapeHtml(e.offline)}</span></div>
      <div class="health-metric"><strong>${m.length}</strong><span>${this._escapeHtml(e.low)}</span></div>
      <div class="health-metric"><strong>${g.length}</strong><span>${this._escapeHtml(e.battery)}</span></div>
    </div><div class="health-list" style="margin-top:13px">${x.length ? x.map((h) => `<div class="health-row"><span>${this._escapeHtml(h.name)}</span><strong style="color:${h.alert ? "#ff8a80" : "inherit"}">${this._escapeHtml(h.value)}</strong></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(e.none)}</div>`}</div>`;
  }
  async _saveIntelligentConfirmation() {
    const e = {
      enabled: !!this.shadowRoot.getElementById("confirm-enabled")?.checked,
      required_signals: Number(this.shadowRoot.getElementById("confirm-signals")?.value || 2),
      window_seconds: Number(this.shadowRoot.getElementById("confirm-window")?.value || 15)
    };
    try {
      await this._send("argus/save_ui", { intelligent_confirmation: e }), this._ui.intelligent_confirmation = e;
      const t = this.shadowRoot.getElementById("btn-save-confirmation");
      t && (t.textContent = `✓ ${this._healthText().saved}`, t.dataset.saved = "1", setTimeout(() => {
        t.dataset.saved = "0", t.textContent = this._healthText().save;
      }, 1600));
    } catch (t) {
      alert(this._format("generic_error", { error: t.message }));
    }
  }
  _scheduleText() {
    const e = {
      es: { title: "Horarios locales de estado", all: "Todos los días", weekdays: "Lunes a viernes", weekend: "Fin de semana", empty: "Sin horarios. Argus conservará el último estado confirmado.", disarmed: "Desarmado", home: "En casa", away: "Ausente", night: "Noche", vacation: "Vacaciones" },
      en: { title: "Local state schedules", all: "Every day", weekdays: "Monday to Friday", weekend: "Weekend", empty: "No schedules. Argus will preserve the last confirmed state.", disarmed: "Disarmed", home: "Home", away: "Away", night: "Night", vacation: "Vacation" },
      fr: { title: "Horaires d’état locaux", all: "Tous les jours", weekdays: "Lundi à vendredi", weekend: "Week-end", empty: "Aucun horaire. Argus conservera le dernier état confirmé.", disarmed: "Désarmé", home: "Maison", away: "Absent", night: "Nuit", vacation: "Vacances" },
      pt: { title: "Horários locais de estado", all: "Todos os dias", weekdays: "Segunda a sexta", weekend: "Fim de semana", empty: "Sem horários. Argus preservará o último estado confirmado.", disarmed: "Desarmado", home: "Em casa", away: "Ausente", night: "Noite", vacation: "Férias" },
      it: { title: "Programmi locali di stato", all: "Ogni giorno", weekdays: "Da lunedì a venerdì", weekend: "Fine settimana", empty: "Nessun programma. Argus manterrà l’ultimo stato confermato.", disarmed: "Disarmato", home: "Casa", away: "Assente", night: "Notte", vacation: "Vacanza" },
      zh: { title: "本地状态计划", all: "每天", weekdays: "周一至周五", weekend: "周末", empty: "没有计划。Argus 将保留最后确认的状态。", disarmed: "撤防", home: "在家", away: "外出", night: "夜间", vacation: "度假" },
      ru: { title: "Локальное расписание состояния", all: "Каждый день", weekdays: "Понедельник–пятница", weekend: "Выходные", empty: "Расписания нет. Argus сохранит последнее подтверждённое состояние.", disarmed: "Снято", home: "Дома", away: "Нет дома", night: "Ночь", vacation: "Отпуск" }
    };
    return e[this._getCurrentLangCode()] || e.en;
  }
  _renderStateSchedule() {
    const e = this._scheduleText(), t = this.shadowRoot.getElementById("schedule-title");
    t && (t.textContent = e.title);
    const i = this.shadowRoot.getElementById("schedule-state"), o = this.shadowRoot.getElementById("schedule-days");
    if (i) {
      const c = i.value;
      i.innerHTML = `<option value="disarmed">${e.disarmed}</option><option value="armed_home">${e.home}</option><option value="armed_away">${e.away}</option><option value="armed_night">${e.night}</option><option value="armed_vacation">${e.vacation}</option>`, i.value = c || "armed_night";
    }
    if (o) {
      const c = o.value;
      o.innerHTML = `<option value="all">${e.all}</option><option value="weekdays">${e.weekdays}</option><option value="weekend">${e.weekend}</option>`, o.value = c || "all";
    }
    const r = this.shadowRoot.getElementById("schedule-list");
    if (!r) return;
    const s = Array.isArray(this._ui?.state_schedule) ? this._ui.state_schedule : [], n = { es: "Eliminar horario", en: "Delete schedule", fr: "Supprimer l’horaire", pt: "Excluir horário", it: "Elimina programma", zh: "删除计划", ru: "Удалить расписание" }[this._getCurrentLangCode()] || "Delete schedule", d = (c) => ({ disarmed: e.disarmed, armed_home: e.home, armed_away: e.away, armed_night: e.night, armed_vacation: e.vacation })[c] || c, p = (c) => c?.length === 2 ? e.weekend : c?.length === 5 ? e.weekdays : e.all;
    r.innerHTML = s.length ? s.map((c) => `<div class="schedule-row"><span><strong>${this._escapeHtml(c.time || "")}</strong> · ${this._escapeHtml(d(c.state))} · ${this._escapeHtml(p(c.days))}</span><button class="ghost" data-schedule-delete="${this._escapeHtml(c.id)}" aria-label="${this._escapeHtml(n)}">×</button></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(e.empty)}</div>`, r.querySelectorAll("[data-schedule-delete]").forEach((c) => c.addEventListener("click", () => this._deleteStateSchedule(c.dataset.scheduleDelete)));
  }
  async _addStateSchedule() {
    const e = this.shadowRoot.getElementById("schedule-state")?.value, t = this.shadowRoot.getElementById("schedule-time")?.value, i = this.shadowRoot.getElementById("schedule-days")?.value || "all";
    if (!e || !/^([01]\d|2[0-3]):[0-5]\d$/.test(t || "")) return;
    const o = i === "weekdays" ? [0, 1, 2, 3, 4] : i === "weekend" ? [5, 6] : [0, 1, 2, 3, 4, 5, 6], r = Array.isArray(this._ui?.state_schedule) ? [...this._ui.state_schedule] : [];
    r.push({ id: `schedule_${Date.now()}`, state: e, time: t, days: o, enabled: !0 }), await this._saveStateSchedule(r);
  }
  async _deleteStateSchedule(e) {
    const t = (this._ui?.state_schedule || []).filter((i) => i.id !== e);
    await this._saveStateSchedule(t);
  }
  async _saveStateSchedule(e) {
    try {
      await this._send("argus/save_ui", { state_schedule: e }), this._ui.state_schedule = e, this._renderStateSchedule();
    } catch (t) {
      alert(this._format("generic_error", { error: t.message }));
    }
  }
  _localizeActivityDetail(e, t) {
    const i = String(t || "").trim(), o = i.toLocaleLowerCase(), r = {
      home: ["en casa", "home", "casa", "maison", "em casa", "дом", "在家"],
      away: ["ausente", "away", "absent", "fora", "fuori", "ушёл", "外出"],
      night: ["noche", "night", "nuit", "noite", "notte", "ночь", "夜间"],
      vacation: ["vacaciones", "vacation", "vacances", "férias", "vacanza", "отпуск", "度假"]
    }, n = Object.entries(r).find(([, l]) => l.some((u) => o.includes(u)))?.[0];
    if (e === "pin_reset") return this._t("log_detail_pin_reset");
    if (e === "pin_reset_failed") return this._t("log_detail_pin_reset_failed");
    if (e === "state_restored") {
      const l = {
        disarmed: this._t("disarmed"),
        armed_home: this._t("mode_home"),
        armed_away: this._t("mode_away"),
        armed_night: this._t("mode_night"),
        armed_vacation: this._t("mode_vacation"),
        triggered: this._t("log_triggered")
      };
      return i.replace(
        /\b(disarmed|armed_home|armed_away|armed_night|armed_vacation|triggered)\b/gi,
        (g) => l[g.toLowerCase()] || g
      ) || this._t("log_action_state_restored");
    }
    if (e === "confirmation_pending") return i;
    if (e === "disarmed" || e === "disarm") return this._t("log_detail_disarm");
    if (e === "armed" || e === "arm")
      return n ? `${this._t("manual_arm")} (${this._t(`mode_${n}`)})` : this._t("manual_arm");
    if (e === "triggered") {
      const l = i.match(/\((?:modo|mode|modalità|режим|模式)\s*:?\s*([^)]+)\)/i);
      let u = "";
      if (l && l[1]) {
        const f = l[1].toLowerCase(), _ = Object.entries(r).find(([, b]) => b.some((v) => f.includes(v)))?.[0];
        u = _ ? this._t(`mode_${_}`) : l[1];
      }
      const g = i.match(/(?:sensor|capteur|sensore|датчик|传感器)\s*:\s*(.+)$/i)?.[1]?.replace(/\s*\((?:modo|mode|modalità|режим|模式)\s*:?[^)]*\)\s*$/i, "")?.trim();
      let m = g ? `${this._t("log_sensor")}: ${g}` : this._t("log_detail_triggered");
      return u && (m += ` (${this._t("log_mode")}: ${u})`), m;
    }
    if (e === "user_added") return this._t("log_action_user_added");
    if (e === "user_deleted") return this._t("log_action_user_deleted");
    if (e === "sos") return this._t("log_action_sos");
    if (e === "sos_stopped" || e === "panic_stopped") return this._t("log_action_sos_stopped");
    if (e.startsWith("auto_") || e === "automation_executed") return this._t("log_action_automation");
    if (e.startsWith("ai_")) return this._t("log_action_analysis");
    if (e.includes("rejected")) return this._t("log_action_rejected");
    if (e === "ui_configuration_updated") return this._t("settings");
    if (e === "user_logged_in") return this._t("log_action_user_logged_in");
    if (e === "profile_selected") return this._t("log_action_profile_selected");
    if (e === "schedule_applied") return this._t("log_action_schedule_applied");
    if (e === "mode_changed") return this._t("log_action_mode_changed");
    if (e === "audit_log_cleared") return this._t("history_refresh");
    if (e.includes("pin_updated") || e.includes("access_pin_updated")) return this._t("update_pin");
    const p = `log_action_${String(e).toLowerCase()}`, c = this._t(p);
    return c !== p ? c : i;
  }
  _renderActivityLog() {
    const e = this.shadowRoot.getElementById("h-activity-log"), t = this.shadowRoot.getElementById("activity-log");
    if (t) {
      e && (e.textContent = this._t("activity_log"));
      try {
        const i = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log.filter((s) => s && typeof s == "object" && !Array.isArray(s)) : [];
        if (!i.length) {
          const s = this._activityTimelineError ? this._t("history_unavailable") : this._t("log_no_events");
          t.innerHTML = `<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(s)}</div>`;
          return;
        }
        const o = t.closest(".panel"), r = o && o.getAttribute("data-size") === "S";
        t.innerHTML = i.slice(0, r ? 1 : 30).map((s) => {
          const n = String(s.action || ""), d = String(s.detail || ""), p = String(s.user || s.actor || ""), c = s.ts ? new Date(s.ts) : null;
          let l = "";
          if (c && !Number.isNaN(c.getTime()))
            try {
              l = c.toLocaleString(this._getLocale());
            } catch {
              l = c.toISOString();
            }
          const u = this._localizeActivityDetail(n, d);
          let g = '<div class="glass-orb"></div>', m = "", f = n, _ = "";
          if (n.endsWith("_rejected"))
            _ = "log-item--triggered", m = "trigger", f = this._t("log_action_rejected");
          else if (n.includes("arm") && !n.includes("disarm"))
            _ = "log-item--armed", m = "arm", f = this._t("log_armed");
          else if (n.includes("disarm"))
            _ = "log-item--disarmed", m = "disarm", f = this._t("log_disarmed");
          else if (n.includes("trigger") || n.includes("alarm"))
            _ = "log-item--triggered", m = "trigger", f = this._t("log_triggered");
          else if (n === "pin_reset")
            _ = "log-item--disarmed", m = "disarm", f = this._t("badge_pin_reset");
          else if (n === "pin_reset_failed")
            _ = "log-item--triggered", m = "trigger", f = this._t("badge_pin_reset_failed");
          else if (n === "sos" || n === "sos_stopped" || n === "panic_stopped")
            _ = "log-item--triggered", m = "trigger", f = this._t("log_action_sos");
          else {
            const v = `log_action_${n}`, x = this._t(v);
            f = x !== v ? x : this._t(n) !== n ? this._t(n) : n;
          }
          let b = "";
          return p && p !== "Argus" && p !== "system" ? b = `👤 ${p}` : n.toLowerCase().includes("homekit") || u.toLowerCase().includes("homekit") ? b = "🍎 HomeKit" : b = "🤖 Argus", `<div class="log-item ${_}">
          <div class="log-icon">${g}</div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${m}">${this._escapeHtml(f)}</span>
              <span style="font-weight:500">${this._escapeHtml(u)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(l)} &nbsp;·&nbsp; ${this._escapeHtml(b)}</div>
          </div>
        </div>`;
        }).join("");
      } catch (i) {
        console.error("Argus activity log render failed:", i), t.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("log_no_events")}</div>`;
      }
    }
  }
  /* ── Modes ───────────────────────────────────────────────────────── */
  _renderModeTabs() {
    const e = this.shadowRoot.getElementById("mode-tabs");
    if (!e) return;
    const t = ["disarmed", "home", "away", "night", "vacation"], i = { disarmed: "🔓", home: "🏠", away: "🔴", night: "🌙", vacation: "✈️" }, o = {
      disarmed: this._t("disarmed"),
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      vacation: this._t("mode_vacation")
    };
    let r = e.querySelector(".tab-bubble");
    !r || e.querySelectorAll("[data-mode]").length !== t.length ? (e.className = "tabs", e.innerHTML = `
        <div class="tab-bubble"></div>
        ${t.map((d) => `
          <button type="button" class="tab" data-mode="${d}">
            <span class="tab-icon" style="font-size: 20px;">${i[d]}</span>
            <span class="tab-label">${o[d]}</span>
          </button>
        `).join("")}
      `, r = e.querySelector(".tab-bubble"), e.querySelectorAll("[data-mode]").forEach((d) => d.addEventListener("click", () => {
      this._mode = d.dataset.mode, this._renderModeTabs(), this._renderModeView();
    }))) : t.forEach((d) => {
      const p = e.querySelector(`[data-mode="${d}"]`);
      if (p) {
        const c = p.querySelector(".tab-icon"), l = p.querySelector(".tab-label");
        c && (c.textContent = i[d]), l && (l.textContent = o[d]);
      }
    });
    const s = e.querySelectorAll(".tab");
    let n = null;
    s.forEach((d) => {
      d.dataset.mode === this._mode ? (d.classList.add("active"), n = d) : d.classList.remove("active");
    }), r && n && (r.className = `tab-bubble bubble-${this._mode}`, requestAnimationFrame(() => {
      const d = n.offsetLeft, p = n.offsetWidth;
      r.style.transform = `translate3d(${d}px, 0, 0) scaleX(${p / 100})`, r.style.width = "100px", r.style.left = "0";
    }));
  }
  _currentModeConfig() {
    const e = {
      sensors: [],
      bypassed_sensors: [],
      sirens: [],
      require_closed: !1,
      open_sensors_policy: "allow",
      arming_time: null,
      entry_delay: null,
      mqtt_enabled: null,
      entry_sensors: [],
      external_panels: [],
      light_siren_settings: {}
    };
    (!this._ui || typeof this._ui != "object" || Array.isArray(this._ui)) && (this._ui = { modes: {}, dashboard: {} }), (!this._ui.modes || typeof this._ui.modes != "object" || Array.isArray(this._ui.modes)) && (this._ui.modes = {}), (!this._ui.modes.__by_entity__ || typeof this._ui.modes.__by_entity__ != "object" || Array.isArray(this._ui.modes.__by_entity__)) && (this._ui.modes.__by_entity__ = {});
    let t = this._modeEntryId;
    if ((!t || t === "default") && (t = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = t, this._mode = this._mode || "disarmed", (!this._ui.modes.__by_entity__[t] || typeof this._ui.modes.__by_entity__[t] != "object" || Array.isArray(this._ui.modes.__by_entity__[t])) && (this._ui.modes.__by_entity__[t] = {}), !this._ui.modes.__by_entity__[t][this._mode] || typeof this._ui.modes.__by_entity__[t][this._mode] != "object" || Array.isArray(this._ui.modes.__by_entity__[t][this._mode])) {
      let r = {};
      this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] == "object" && !Array.isArray(this._ui.modes[this._mode]) && (r = this._ui.modes[this._mode]), this._ui.modes.__by_entity__[t][this._mode] = { ...e, ...r };
    }
    const i = this._ui.modes.__by_entity__[t][this._mode], o = i && typeof i == "object" && !Array.isArray(i) ? i : e;
    return {
      ...e,
      ...o,
      sensors: Array.isArray(o?.sensors) ? o.sensors : [],
      bypassed_sensors: Array.isArray(o?.bypassed_sensors) ? o.bypassed_sensors : [],
      sirens: Array.isArray(o?.sirens) ? o.sirens : [],
      entry_sensors: Array.isArray(o?.entry_sensors) ? o.entry_sensors : [],
      // sync_panels was the short-lived UI name; retain it only as a read fallback.
      external_panels: Array.isArray(o?.external_panels) ? o.external_panels : Array.isArray(o?.sync_panels) ? o.sync_panels : [],
      require_closed: typeof o?.require_closed == "boolean" ? o.require_closed : !1,
      open_sensors_policy: o?.open_sensors_policy === "pending" || o?.open_sensors_policy === "allow" || o?.open_sensors_policy === "block" ? o.open_sensors_policy : o?.require_closed ? "block" : "allow",
      arming_time: o?.arming_time !== void 0 && o?.arming_time !== null ? o.arming_time : null,
      entry_delay: o?.entry_delay !== void 0 && o?.entry_delay !== null ? o.entry_delay : null,
      light_siren_settings: o?.light_siren_settings && typeof o.light_siren_settings == "object" ? o.light_siren_settings : {},
      mqtt_enabled: o?.mqtt_enabled !== void 0 && o?.mqtt_enabled !== null ? o.mqtt_enabled : null
    };
  }
  _toggleEntrySensor(e) {
    if (!this._isAdmin) return;
    const t = this._currentModeConfig(), i = Array.isArray(t.entry_sensors) ? [...t.entry_sensors] : [];
    i.includes(e) ? t.entry_sensors = i.filter((o) => o !== e) : t.entry_sensors = [...i, e], this._renderModeView();
  }
  _renderModeView() {
    const e = this._currentModeConfig(), t = e.sensors || [], i = e.bypassed_sensors || [], o = e.sirens || [], r = e.external_panels || [], s = this.shadowRoot.getElementById("mode-view");
    s && (s.classList.remove("bounce-in"), s.offsetWidth, s.classList.add("bounce-in"));
    const n = !this._isAdmin, d = this._dashboard?.entries || [], p = this._modeEntryId || d[0]?.entity_id || "", c = d.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("alarm_instance")}</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${d.map((l) => `<option value="${this._escapeHtml(l.entity_id)}" ${l.entity_id === p ? "selected" : ""}>${this._escapeHtml(l.title || l.entity_id)}</option>`).join("")}</select>
        </div>` : "";
    s.innerHTML = `
      <div class="mode-grid-layout">
        ${c}

        <div class="mode-section-card">
          <div class="mode-section-title">🛡️ ${this._t("sensor_section")}</div>
          <div class="mode-sensor-grid" id="sensor-chips">
            ${t.map((l) => this._chip(l, "sensor")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${n ? "" : `
            <button class="ghost" data-open-selector="sensor" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-require-closed" ${e.require_closed ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("lock_if_open")}</span>
            </label>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-wait-if-open" ${e.open_sensors_policy === "pending" ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("wait_if_open")}</span>
            </label>
          `}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("bypass_lbl")}</div>
          <div class="mode-sensor-grid" id="bypass-chips">
            ${i.map((l) => this._chip(l, "bypass")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${n ? "" : `<button class="ghost" data-open-selector="bypass" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 ${this._t("siren_section")}</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${o.map((l) => this._chip(l, "siren")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${o.filter((l) => l.startsWith("light.")).map((l) => {
      const u = e.light_siren_settings?.[l] || {}, m = "#" + (Array.isArray(u.rgb_color) ? u.rgb_color : [255, 0, 0]).map((f) => Number(f).toString(16).padStart(2, "0")).join("");
      return `<details class="light-siren-settings"><summary>⚙ ${this._escapeHtml(this._hass?.states?.[l]?.attributes?.friendly_name || l)}</summary><label>${this._t("light_siren_color") || "Color"} <input type="color" data-light-siren-color="${this._escapeHtml(l)}" value="${m}"></label><label class="checkbox-label"><input type="checkbox" data-light-siren-flash="${this._escapeHtml(l)}" ${u.gentle_flash ? "checked" : ""}> ${this._t("light_siren_flash") || "Destello suave si está disponible"}</label></details>`;
    }).join("")}
          <div class="mode-section-title" style="margin-top:14px;font-size:12px">🔗 ${this._t("external_panels") || "Paneles de alarma externos"}</div>
          <div class="mode-sensor-grid" id="external-panel-chips">
            ${r.map((l) => this._chip(l, "external_panel")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${n ? "" : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button><button class="ghost" data-open-selector="external_panel" style="margin-top:8px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("times_section")}</div>
          <div class="times-grid">
            <div class="input-group time-field">
              <span class="input-label">${this._t("arm_time")}</span>
              <input type="number" id="mode-arming-time" value="${e.arming_time ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
            <div class="input-group time-field">
              <span class="input-label">${this._t("disarm_time")}</span>
              <input type="number" id="mode-entry-delay" value="${e.entry_delay ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
          </div>
          <div class="mode-sensor-grid entry-sensor-list">
            ${(e.entry_sensors || []).map((l) => this._chip(l, "entry")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${n ? "" : `<button class="ghost" data-open-selector="entry" style="margin-top:10px;width:100%;justify-content:center;font-size:12px">${this._t("select_entry_sensors")}</button>`}
          <label class="checkbox-label mode-mqtt-row">
            <input type="checkbox" id="mode-mqtt-enabled" ${e.mqtt_enabled === !0 ? "checked" : ""}>
            <span style="font-size:12px;font-weight:600">${this._t("mqtt_label")}</span>
          </label>
        </div>
      </div>
      ${n ? "" : `<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;"><button class="primary" id="save-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2)">${this._t("save_config")}</button><span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span></div>`}
    `, s.querySelector("#mode-instance-select")?.addEventListener("change", (l) => {
      this._modeEntryId = l.target.value, this._renderModeView();
    }), n || (s.querySelectorAll("[data-open-selector]").forEach(
      (l) => l.addEventListener("click", () => this._openModal(l.dataset.openSelector))
    ), s.querySelectorAll("[data-remove]").forEach(
      (l) => l.addEventListener("click", () => this._removeChip(l.dataset.remove))
    ), s.querySelectorAll("[data-toggle-delay]").forEach(
      (l) => l.addEventListener("click", () => this._toggleEntrySensor(l.dataset.toggleDelay))
    ), s.querySelector("#save-mode")?.addEventListener("click", () => this._saveMode()));
  }
  _chip(e, t) {
    const i = this._hass?.states?.[e]?.state, o = ["on", "unlocked", "open", "recording", "active", "motion"].includes(i), r = this._hass?.states?.[e]?.attributes?.friendly_name || e, s = !this._isAdmin, n = t === "sensor" || t === "bypass" ? `<span class="pill-dot ${o ? "open" : ""}" title="${i}"></span>` : "";
    let d = "", p = "";
    if (t === "sensor" || t === "bypass" || t === "entry") {
      const u = this._hass?.states?.[e], g = this._getDevicePower(e, u);
      if (d = `<span class="pill-status">${o ? this._t("status_open") : this._t("status_closed")}</span>`, g.mains && (p += '<span class="pill-power">🔌 AC</span>'), g.battery !== null) {
        const m = g.battery === 0, f = g.battery <= 10 && !m, _ = m ? "🔋 ❌" : `🔋 ${g.battery}%`;
        p += `<span class="pill-power ${m ? "dead" : f ? "low" : ""}">${_}</span>`;
      }
    }
    const c = this._dashboard?.entries?.some(
      (u) => this._hass?.states?.[u.entity_id]?.state === "triggered"
    );
    let l = "";
    return t === "siren" && c && (l = " siren-active"), (t === "sensor" || t === "bypass" || t === "entry") && c && o && (l = " triggered-sensor"), `
      <span class="sensor-pill${l}">
        ${n}
        <span class="pill-content">
          <span class="pill-name">${this._escapeHtml(r)}</span>
          ${d}
          ${p}
        </span>
        ${s ? "" : `<button data-remove="${t}:${e}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
  }
  _removeChip(e) {
    if (!this._isAdmin) return;
    const [t, i] = e.split(":"), o = this._currentModeConfig(), r = t === "sensor" ? "sensors" : t === "bypass" ? "bypassed_sensors" : t === "entry" ? "entry_sensors" : t === "external_panel" ? "external_panels" : "sirens";
    let s = this._modeEntryId;
    (!s || s === "default") && (s = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = s, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[s] = this._ui.modes.__by_entity__[s] || {}, this._ui.modes.__by_entity__[s][this._mode] = { ...o, [r]: (o[r] || []).filter((n) => n !== i) }, this._renderModeView();
  }
  async _saveMode() {
    const e = this._currentModeConfig(), t = this.shadowRoot.getElementById("mode-require-closed"), i = this.shadowRoot.getElementById("mode-wait-if-open"), o = this.shadowRoot.getElementById("mode-arming-time"), r = this.shadowRoot.getElementById("mode-entry-delay"), s = this.shadowRoot.getElementById("mode-mqtt-enabled");
    t && (e.require_closed = t.checked), t?.checked ? e.open_sensors_policy = "block" : i?.checked ? e.open_sensors_policy = "pending" : e.open_sensors_policy = "allow", o && (e.arming_time = o.value ? parseInt(o.value) : 0), r && (e.entry_delay = r.value ? parseInt(r.value) : 0), s && (e.mqtt_enabled = s.checked), e.light_siren_settings = {}, this.shadowRoot.querySelectorAll("[data-light-siren-color]").forEach((n) => {
      const d = n.value || "#ff0000";
      e.light_siren_settings[n.dataset.lightSirenColor] = {
        rgb_color: [1, 3, 5].map((p) => parseInt(d.slice(p, p + 2), 16)),
        gentle_flash: !!this.shadowRoot.querySelector(`[data-light-siren-flash="${CSS.escape(n.dataset.lightSirenColor)}"]`)?.checked
      };
    }), this._runWithPin(async () => {
      const n = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || "default";
      this._ui.modes = this._ui.modes || {}, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[n] = this._ui.modes.__by_entity__[n] || {}, this._ui.modes.__by_entity__[n][this._mode] = { ...e };
      const d = this.shadowRoot.getElementById("mode-status");
      d && (d.textContent = "…", d.className = "status");
      try {
        await this._send("argus/save_mode_config", {
          entity_id: n,
          mode: this._mode,
          config: e
        }), d && (d.textContent = this._t("saved"), d.className = "status ok show"), setTimeout(() => {
          d && (d.textContent = "", d.className = "status");
        }, 3e3);
      } catch (p) {
        d && (d.textContent = "✗ " + (p.message || this._t("generic_error").replace(": {error}", "")), d.className = "status err show");
      }
    });
  }
  /* ── Automations ─────────────────────────────────────────────────── */
  _renderAutomations() {
    const e = this.shadowRoot.getElementById("auto-view");
    if (e) {
      if (!this._dashboard?.entries?.length || !this._hass) {
        e.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
        return;
      }
      try {
        if (!this._relatedAutomationsQueried) {
          this._relatedAutomationsQueried = !0, this._cachedRelatedAutomations = /* @__PURE__ */ new Set(), (async () => {
            try {
              let n = [];
              for (const d of this._dashboard.entries) {
                const p = await this._hass.callWS({ type: "search/related", item_type: "entity", item_id: d.entity_id });
                if (p && (p.automation && n.push(...p.automation), p.device && p.device.length))
                  for (const c of p.device) {
                    const l = await this._hass.callWS({ type: "search/related", item_type: "device", item_id: c });
                    l && l.automation && n.push(...l.automation);
                  }
              }
              this._cachedRelatedAutomations = new Set(n);
            } catch {
              this._cachedRelatedAutomations = /* @__PURE__ */ new Set();
            } finally {
              this._relatedAutomationsFetched = !0, this._renderAutomations();
            }
          })(), e.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
          return;
        }
        if (!this._relatedAutomationsFetched) return;
        const t = this._hass.states || {}, i = Object.values(t).filter((n) => {
          if (!n || !n.entity_id || !n.entity_id.startsWith("automation.")) return !1;
          const d = (n.attributes?.friendly_name || "").toLowerCase();
          return this._cachedRelatedAutomations.has(n.entity_id) || d.includes("argus") || n.entity_id.toLowerCase().includes("argus");
        });
        if (!i.length) {
          e.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
          return;
        }
        const o = e.closest(".panel"), r = o && o.getAttribute("data-size") === "S", s = i.slice(0, r ? 1 : 15);
        e.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${s.map((n) => {
          const d = n.attributes?.id || n.entity_id.replace("automation.", ""), p = n.attributes?.last_triggered ? new Date(n.attributes.last_triggered).toLocaleString(this._getLocale()) : this._t("never_triggered"), c = r ? "" : `<div class="small" style="opacity:0.7;margin-top:4px">${this._escapeHtml(p)}</div>`;
          return `
        <div class="list-item-card">
          <div>
            <div style="font-weight:700">${this._escapeHtml(n.attributes?.friendly_name || n.entity_id)}</div>
            ${c}
          </div>
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(d)}">✏️</button>
        </div>`;
        }).join("")}</div>`, e.querySelectorAll("[data-edit-auto]").forEach((n) => n.addEventListener("click", () => {
          history.pushState(null, "", `/config/automation/edit/${n.dataset.editAuto}`), window.dispatchEvent(new CustomEvent("location-changed"));
        }));
      } catch (t) {
        console.error("Argus automations render failed:", t), e.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
      }
    }
  }
  /* ── Notifications ───────────────────────────────────────────────── */
  _populateNotifSelect() {
    const e = this.shadowRoot.getElementById("notif-select");
    if (!e) return;
    const t = this._hass?.services?.notify || {}, i = Object.values(this._hass?.states || {}).filter((s) => s?.entity_id?.startsWith("notify.") && s.entity_id !== "notify.persistent_notification").map((s) => ({ value: `entity:${s.entity_id}`, label: s.attributes?.friendly_name || s.entity_id })), o = Object.keys(t).filter((s) => !["notify", "send_message", "persistent_notification"].includes(s) && !this._notifTargets.includes(s)).map((s) => ({ value: s, label: s.replace(/_/g, " ") })), r = [...i, ...o].filter((s) => !this._notifTargets.includes(s.value));
    e.innerHTML = r.length ? r.map(({ value: s, label: n }) => `<option value="${this._escapeHtml(s)}">${this._escapeHtml(`🔔 ${n}`)}</option>`).join("") : `<option value="">— ${this._escapeHtml(this._t("notif_no_services"))} —</option>`;
  }
  _addNotifTarget() {
    const t = this.shadowRoot.getElementById("notif-select")?.value;
    !t || this._notifTargets.includes(t) || (this._notifTargets.push(t), this._renderNotifChips(), this._populateNotifSelect());
  }
  _renderNotifChips() {
    const e = this.shadowRoot.getElementById("notif-targets");
    e && (e.innerHTML = this._notifTargets.map((t) => `
      <span class="notif-chip">🔔 ${this._escapeHtml(t.replace(/^entity:notify\./, "").replace(/_/g, " "))}
        <button data-notif-remove="${this._escapeHtml(t)}">✕</button>
      </span>`).join("") || '<span class="small" style="opacity:.5">—</span>', e.querySelectorAll("[data-notif-remove]").forEach(
      (t) => t.addEventListener("click", () => {
        this._notifTargets = this._notifTargets.filter((i) => i !== t.dataset.notifRemove), this._renderNotifChips(), this._populateNotifSelect();
      })
    ));
  }
  _renderNotifications() {
    this._renderNotifChips(), this._populateNotifSelect();
  }
  async _saveNotifications() {
    const e = this.shadowRoot.getElementById("notif-status");
    this._runWithPin(async () => {
      try {
        await this._send("argus/save_ui", {
          notif_targets: this._notifTargets
        }), e && (e.textContent = "✓", e.className = "status ok");
      } catch (t) {
        e ? (e.textContent = t.message, e.className = "status err") : alert(this._format("generic_error", { error: t.message }));
      }
    });
  }
  /* ── Users ───────────────────────────────────────────────────────── */
  _renderUsers() {
    const e = this.shadowRoot.getElementById("users-list");
    if (!e) return;
    const t = this.shadowRoot.getElementById("p-admin-only");
    t && (t.style.display = this._isAdmin ? "none" : "block");
    try {
      const i = Array.isArray(this._users) ? this._users.filter((n) => n && typeof n == "object" && !Array.isArray(n)) : [], o = e.closest(".panel"), r = o && o.getAttribute("data-size") === "S", s = r ? i.slice(0, 2) : i;
      i.length ? (e.innerHTML = s.map((n, d) => {
        if (r)
          return `
            <div class="user-card" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:6px 10px;flex-direction:row">
              <div style="font-weight:700">${this._escapeHtml(n.name || "")}</div>
              <div style="display:flex;gap:4px">
                ${n.role === "admin" ? '<span class="user-badge admin">⭐ Adm</span>' : '<span class="user-badge user">👤 Std</span>'}
                ${n.access_pin_configured ? '<span class="user-badge" style="background:rgba(0,122,255,0.12);color:#007aff">🔒 PIN</span>' : ""}
              </div>
            </div>`;
        const p = n.expiration_date && new Date(n.expiration_date) < /* @__PURE__ */ new Date();
        let c = "";
        if (n.expiration_date) {
          const f = new Date(n.expiration_date);
          if (!isNaN(f.getTime()))
            try {
              c = this._formatDateTime(f);
            } catch {
              c = f.toISOString();
            }
        }
        const l = n.expiration_date ? p ? `<span class="user-badge admin" style="background:rgba(229,57,53,0.12);color:#e53935;margin-left:5px">❌ ${this._escapeHtml(this._t("expired"))} (${this._escapeHtml(c)})</span>` : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">⏳ ${this._escapeHtml(this._t("active_until"))}: ${this._escapeHtml(c)}</span>` : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">♾️ ${this._t("exp_indefinite")}</span>`, u = n.ha_user_id ? (() => {
          const f = (this._haUsersList || []).find((_) => _.id === n.ha_user_id);
          return f ? this._format("ha_account_linked", { name: f.name }) : this._t("ha_account_unavailable");
        })() : this._t("ha_account_unavailable"), g = n.role === "admin" ? "⭐ " + this._escapeHtml(this._t("role_argus_admin")) : "👤 " + this._escapeHtml(this._t("role_argus_standard")), m = n.access_pin_configured ? '<span class="user-badge" style="background:rgba(0,122,255,0.12);color:#007aff">🔒 PIN</span>' : `<span class="user-badge" style="opacity:0.55">🔓 ${this._escapeHtml(this._t("user_no_pin"))}</span>`;
        return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(n.name || "")}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${n.role === "admin" ? "admin" : "user"}">${g}</span>
                  <span class="user-badge" style="background:rgba(74,20,140,0.15);color:rgba(186,104,200,0.95);border:1px solid rgba(74,20,140,0.22);margin-left:5px">${this._escapeHtml(u)}</span>
                  ${m}
                  ${l}
                </div>
                ${n.role !== "admin" && n.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Ver Panel">👁️ ${n.permissions.view_status ? "Panel" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Armar Sistema">🛡️ ${n.permissions.arm ? "Armar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Desarmar Sistema">🔓 ${n.permissions.disarm ? "Desarmar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Ver Historial">📜 ${n.permissions.view_history ? "Historial" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="Cambiar PIN Acceso">🔑 ${n.permissions.change_pin ? "PIN Acceso" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="Cambiar PIN Maestro">🔑 ${n.permissions.change_master_pin ? "PIN Maestro" : "---"}</span>
                </div>
                ` : ""}
              </div>
              <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${d}" title="${this._escapeHtml(this._t("modal_edit_name"))}">✏️</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${d}" title="${this._escapeHtml(this._t("modal_pin_title"))}">🔑</button>
                  ${n.role !== "admin" ? `<button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-perms="${d}" title="Permisos">🛡️</button>` : ""}
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${d}" title="${this._escapeHtml(this._t("user_role_label"))}">⭐</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t("delete_user_tooltip"))}" aria-label="${this._escapeHtml(this._t("delete_user_tooltip"))}" data-user-del="${d}">🗑️</button>
                ` : ""}
              </div>
            </div>
          </div>`;
      }).join(""), this._isAdmin && e.insertAdjacentHTML("beforeend", `
            <div style="margin-top:10px">
              <button class="secondary" style="width:100%;padding:10px;font-size:13px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,255,255,0.18);background:rgba(255,255,255,0.03)" id="btn-add-manual-user">➕ ${this._escapeHtml(this._t("modal_add_user"))}</button>
            </div>`), this._isAdmin && (e.querySelectorAll("[data-user-edit]").forEach((n) => {
        n.addEventListener("click", async () => {
          const d = Number(n.dataset.userEdit), p = this._users[d];
          if (!p) return;
          const c = await this._showArgusInputModal({
            title: this._t("modal_edit_name"),
            label: this._t("modal_name_label"),
            placeholder: p.name,
            initialValue: p.name,
            type: "text"
          });
          c === null || c.trim() === "" || this._runWithPin(async () => {
            try {
              const l = this._users.map((g, m) => m === d ? { ...g, name: c.trim() } : g), u = await this._send("argus/save_ui", { users: l });
              u && u.ui ? (this._ui = u.ui, this._users = u.ui.users || l) : this._users = l, this._renderUsers();
            } catch (l) {
              this._showArgusConfirmModal(l.message || this._format("generic_error", { error: l }), { confirmLabel: "OK" });
            }
          });
        });
      }), e.querySelectorAll("[data-user-pin]").forEach((n) => {
        n.addEventListener("click", async () => {
          const d = Number(n.dataset.userPin), p = this._users[d];
          if (!p) return;
          const c = await this._showArgusInputModal({
            title: `${this._t("modal_pin_title")} — ${p.name}`,
            label: this._t("modal_pin_help"),
            placeholder: "••••",
            type: "password",
            numeric: !0
          });
          c !== null && this._runWithPin(async () => {
            try {
              await this._send("argus/save_user_access_pin", { argus_user_id: p.id, pin: c.trim() });
              const l = await this._send("argus/dashboard");
              l && l.users && (this._users = l.users), this._renderUsers();
            } catch (l) {
              this._showArgusConfirmModal(l.message || this._format("generic_error", { error: l }), { confirmLabel: "OK" });
            }
          });
        });
      }), e.querySelector("#btn-add-manual-user")?.addEventListener("click", async () => {
        const n = await this._showArgusInputModal({
          title: this._t("modal_add_user"),
          label: this._t("modal_name_label"),
          placeholder: this._t("user_default") || "Usuario",
          type: "text"
        });
        !n || !n.trim() || this._runWithPin(async () => {
          try {
            const d = {
              id: `argus_manual_${Date.now()}`,
              name: n.trim(),
              role: "standard",
              enabled: !0,
              permissions: { view_status: !0, arm: !0, disarm: !0, view_history: !1 }
            }, p = [...this._users || [], d], c = await this._send("argus/save_ui", { users: p });
            c && c.ui ? (this._ui = c.ui, this._users = c.ui.users || p) : this._users = p, this._renderUsers();
          } catch (d) {
            this._showArgusConfirmModal(d.message || this._format("generic_error", { error: d }), { confirmLabel: "OK" });
          }
        });
      }), e.querySelectorAll("[data-user-role-toggle]").forEach((n) => {
        n.addEventListener("click", async () => {
          const d = Number(n.dataset.userRoleToggle), p = this._users[d];
          if (!p) return;
          const c = await this._showArgusInputModal({
            title: this._t("user_role_action") || "Cambiar Rol",
            label: this._t("user_role_label") || "Selecciona el rol",
            initialValue: p.role === "admin" ? "admin" : "standard",
            type: "select",
            options: [
              { value: "admin", label: this._t("role_argus_admin") || "Administrador de Argus" },
              { value: "standard", label: this._t("role_argus_standard") || "Usuario estándar" }
            ]
          });
          !c || c === p.role || this._runWithPin(async () => {
            const l = this._users.map((u, g) => g === d ? { ...u, role: c } : u);
            try {
              const u = await this._send("argus/save_ui", { users: l });
              u && u.ui ? (this._ui = u.ui, this._users = u.ui.users || l) : this._users = l, this._renderUsers();
            } catch (u) {
              this._showArgusConfirmModal(u.message || this._format("generic_error", { error: u }), { confirmLabel: "OK" });
            }
          });
        });
      }), e.querySelectorAll("[data-user-del]").forEach(
        (n) => n.addEventListener("click", async () => {
          const d = Number(n.dataset.userDel), p = this._users[d];
          if (!p) return;
          const c = this._format("delete_user_confirm", { name: p.name || "User" });
          await this._showArgusConfirmModal(
            this._t("modal_delete_confirm") || c,
            { confirmLabel: this._t("clear") || "Delete", confirmStyle: "background:#e53935;color:white;border:none" }
          ) && this._runWithPin(async () => {
            const u = [...this._users];
            u.splice(d, 1);
            try {
              const g = await this._send("argus/save_ui", { users: u });
              g && g.ui ? (this._ui = g.ui, this._users = g.ui.users || u) : this._users = u, this._renderUsers();
            } catch (g) {
              this._showArgusConfirmModal(g.message || this._format("generic_error", { error: g }), { confirmLabel: "OK" });
            }
          });
        })
      ), e.querySelectorAll("[data-user-perms]").forEach((n) => {
        n.addEventListener("click", async () => {
          const d = Number(n.dataset.userPerms), p = this._users[d];
          if (!p) return;
          const c = await this._showArgusPermissionsModal(p);
          c !== null && this._runWithPin(async () => {
            const l = this._users.map((u, g) => g === d ? { ...u, permissions: { ...u.permissions, ...c } } : u);
            try {
              const u = await this._send("argus/save_ui", { users: l });
              u && u.ui ? (this._ui = u.ui, this._users = u.ui.users || l) : this._users = l, this._renderUsers();
            } catch (u) {
              this._showArgusConfirmModal(u.message || this._format("generic_error", { error: u }), { confirmLabel: "OK" });
            }
          });
        });
      }))) : e.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    } catch (i) {
      console.error("Argus users list render failed:", i), e.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    }
    this._syncAccessSummary();
  }
  _populateTemperatureSources() {
    const e = this.shadowRoot.getElementById("temp-source-select-standalone");
    if (!e || !this._hass) return;
    const t = [{ entity_id: "auto", name: this._t("temp_auto") }];
    for (const o of Object.values(this._hass.states || {})) {
      const r = o.entity_id || "", s = o.attributes || {};
      if (r.startsWith("climate.") && typeof s.current_temperature == "number") {
        t.push({ entity_id: r, name: `🌡️ ${s.friendly_name || r} ${this._t("temp_thermostat")}` });
        continue;
      }
      if (!r.startsWith("sensor.")) continue;
      const n = String(s.device_class || "").toLowerCase(), d = String(s.unit_of_measurement || s.native_unit_of_measurement || "").toLowerCase(), p = Number(o.state);
      Number.isFinite(p) && (n === "temperature" || ["°c", "°f", "c", "f"].includes(d)) && t.push({ entity_id: r, name: `🌡️ ${s.friendly_name || r}` });
    }
    const i = /* @__PURE__ */ new Set();
    e.innerHTML = t.filter((o) => i.has(o.entity_id) ? !1 : (i.add(o.entity_id), !0)).map((o) => `<option value="${this._escapeHtml(o.entity_id)}">${this._escapeHtml(o.name)}</option>`).join("");
  }
  _populateWeatherSources() {
    const e = this.shadowRoot.getElementById("weather-source-select");
    if (!e || !this._hass?.states) return;
    const t = e.value || this._weatherSource || "auto", i = Object.values(this._hass.states).filter((o) => o.entity_id?.startsWith("weather."));
    e.innerHTML = [{ entity_id: "auto", name: this._t("weather_auto") }, ...i.map((o) => ({ entity_id: o.entity_id, name: o.attributes?.friendly_name || o.entity_id }))].map((o) => `<option value="${this._escapeHtml(o.entity_id)}">${this._escapeHtml(o.name)}</option>`).join(""), e.value = [...e.options].some((o) => o.value === t) ? t : "auto";
  }
  _getWeatherEntity() {
    const e = this._weatherSource || "auto";
    return (e !== "auto" ? this._hass?.states?.[e] : null) || Object.values(this._hass?.states || {}).find((i) => i.entity_id?.startsWith("weather.")) || { state: "sunny", attributes: {} };
  }
  _getDisplayedTemperature() {
    if (!this._hass) return null;
    const e = this._temperatureSource || "auto";
    if (e !== "auto") {
      const r = this._hass.states?.[e];
      if (!r) return null;
      const s = e.startsWith("climate.") ? r.attributes?.current_temperature : Number(r.state), n = e.startsWith("climate.") ? r.attributes?.temperature_unit : r.attributes?.unit_of_measurement || r.attributes?.native_unit_of_measurement;
      return Number.isFinite(Number(s)) ? `${Number(s).toFixed(1).replace(/\.0$/, "")}°${String(n || "").replace("°", "")}` : null;
    }
    const t = this._getWeatherEntity(), i = t?.attributes?.temperature, o = t?.attributes?.temperature_unit;
    return Number.isFinite(Number(i)) ? `${Number(i).toFixed(1).replace(/\.0$/, "")}°${String(o || "").replace("°", "")}` : null;
  }
  _getTemperatureReadings() {
    if (!this._hass?.states) return [];
    const e = [], t = this._getWeatherEntity(), i = t?.attributes?.temperature, o = t?.attributes?.temperature_unit;
    Number.isFinite(Number(i)) && e.push({ label: "EXT.", value: `${Number(i).toFixed(1).replace(/\.0$/, "")}°${String(o || "").replace("°", "")}` });
    const r = this._temperatureSource || "auto";
    let s = r !== "auto" ? this._hass.states[r] : Object.values(this._hass.states).find((n) => n.entity_id?.startsWith("climate.") && Number.isFinite(Number(n.attributes?.current_temperature)));
    if (s?.entity_id?.startsWith("weather.") && (s = null), s) {
      const n = s.entity_id.startsWith("climate.") ? s.attributes?.current_temperature : Number(s.state), d = s.entity_id.startsWith("climate.") ? s.attributes?.temperature_unit : s.attributes?.unit_of_measurement || s.attributes?.native_unit_of_measurement;
      Number.isFinite(Number(n)) && e.push({ label: "INT.", value: `${Number(n).toFixed(1).replace(/\.0$/, "")}°${String(d || "").replace("°", "")}` });
    }
    return e;
  }
  _moonPhase() {
    const e = (this._hass?.states?.["sensor.moon_phase"]?.state || this._hass?.states?.["sensor.moon"]?.state || "").toLowerCase().replace(/[\s-]+/g, "_");
    return e.includes("new") ? "new" : e.includes("waxing_crescent") ? "waxing-crescent" : e.includes("first_quarter") ? "first-quarter" : e.includes("waxing_gibbous") ? "waxing-gibbous" : e.includes("waning_gibbous") ? "waning-gibbous" : e.includes("last_quarter") || e.includes("third_quarter") ? "last-quarter" : e.includes("waning_crescent") ? "waning-crescent" : (e.includes("full"), "full");
  }
  _eclipseEvent() {
    const t = Object.values(this._hass?.states || {}).find((o) => {
      const r = `${o.entity_id || ""} ${o.attributes?.friendly_name || ""} ${o.attributes?.device_class || ""}`.toLowerCase(), s = `${o.state || ""} ${o.attributes?.event || ""} ${o.attributes?.type || ""}`.toLowerCase();
      return /eclips/.test(r) && !/^(off|none|unknown|unavailable|false|0)$/i.test(String(o.state || "")) && /eclips|solar|lunar|moon|luna/.test(s);
    });
    if (!t) return null;
    const i = `${t.state || ""} ${t.attributes?.event || ""} ${t.attributes?.type || ""} ${t.attributes?.friendly_name || ""}`.toLowerCase();
    return /solar|sun|sol/.test(i) ? "solar" : /lunar|moon|luna/.test(i) ? "lunar" : null;
  }
  _renderEclipseOverlay(e) {
    if (!e) return "";
    const t = e === "solar" ? "☀️ Eclipse solar" : "🌕 Eclipse lunar";
    return `<div class="weather-eclipse" aria-label="${t}">${t}</div>`;
  }
  _season() {
    const e = (/* @__PURE__ */ new Date()).getMonth(), i = Number(this._hass?.config?.latitude) < 0 ? (e + 6) % 12 : e;
    return [11, 0, 1].includes(i) ? "winter" : [2, 3, 4].includes(i) ? "spring" : [5, 6, 7].includes(i) ? "summer" : "autumn";
  }
  async _handleBackgroundFiles(e) {
    const t = Array.from(e?.target?.files || []).slice(0, 4);
    if (!t.length) return;
    const i = (r) => new Promise((s, n) => {
      const d = new FileReader();
      d.onload = () => s(String(d.result || "")), d.onerror = n, d.readAsDataURL(r);
    });
    this._backgroundImages = (await Promise.all(t.map(i))).filter(Boolean);
    const o = this.shadowRoot.getElementById("bg-file-help");
    o && (o.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`);
  }
  _isVideoFile(e) {
    const t = [".mov", ".mp4", ".webm", ".ogg", ".avi", ".m4v"], i = (e.name || "").toLowerCase();
    return t.some((o) => i.endsWith(o)) || e.type.startsWith("video/");
  }
  async _showLivePhotoDialog(e, t, i) {
    confirm(this._format("file_choice", { file: e.name })) ? await t() : await i();
  }
  async _uploadFile(e, t) {
    const i = this._hass?.auth?.accessToken, o = {};
    i && (o.Authorization = `Bearer ${i}`);
    const r = new FormData();
    r.append("file", e);
    const s = await fetch("/api/argus/upload", {
      method: "POST",
      body: r,
      headers: o
    });
    if (!s.ok) throw new Error(`HTTP error! status: ${s.status}`);
    return await s.json();
  }
  async _handlePanelBgFile(e) {
    const t = e?.target?.files?.[0];
    if (!t) return;
    const i = this.shadowRoot.getElementById("bg-file-help");
    i && (i.textContent = "Subiendo al servidor..."), e.target.value = "";
    try {
      if (this._isVideoFile(t))
        await this._showLivePhotoDialog(
          t,
          async () => {
            const r = await this._uploadFile(t, i);
            if (r?.success) {
              this._panelBgFile = r.url;
              const s = this.shadowRoot.getElementById("panel-bg-url-input");
              s && (s.value = r.url), i && (i.textContent = `Subido como imagen: ${t.name}`), this._loadUploadedFiles();
            } else
              i && (i.textContent = this._format("generic_error", { error: r?.error || this._t("upload_error") }));
          },
          async () => {
            const r = await this._uploadFile(t, i);
            if (r?.success) {
              this._panelBgFile = r.url;
              const s = this.shadowRoot.getElementById("panel-bg-url-input");
              s && (s.value = r.url), i && (i.textContent = `Subido como video: ${t.name}`), this._loadUploadedFiles();
            } else
              i && (i.textContent = this._format("generic_error", { error: r?.error || this._t("upload_error") }));
          }
        );
      else {
        const r = await this._uploadFile(t, i);
        if (r?.success) {
          this._panelBgFile = r.url;
          const s = this.shadowRoot.getElementById("panel-bg-url-input");
          s && (s.value = r.url), i && (i.textContent = `Subido: ${t.name}`), this._loadUploadedFiles();
        } else
          i && (i.textContent = this._format("generic_error", { error: r?.error || this._t("upload_error") }));
      }
    } catch (o) {
      console.error("Upload failed:", o), i && (i.textContent = this._format("generic_error", { error: o.message || o }));
    }
  }
  async _handleHubBgFile(e) {
    const t = e?.target?.files?.[0];
    if (!t) return;
    const i = this.shadowRoot.getElementById("hub-file-help");
    i && (i.textContent = "Subiendo al servidor..."), e.target.value = "";
    try {
      if (this._isVideoFile(t))
        await this._showLivePhotoDialog(
          t,
          async () => {
            const r = await this._uploadFile(t, i);
            if (r?.success) {
              this._hubBgFile = r.url;
              const s = this.shadowRoot.getElementById("hub-bg-url-input");
              s && (s.value = r.url), i && (i.textContent = `Subido como imagen: ${t.name}`), this._loadUploadedFiles();
            } else
              i && (i.textContent = this._format("generic_error", { error: r?.error || this._t("upload_error") }));
          },
          async () => {
            const r = await this._uploadFile(t, i);
            if (r?.success) {
              this._hubBgFile = r.url;
              const s = this.shadowRoot.getElementById("hub-bg-url-input");
              s && (s.value = r.url), i && (i.textContent = `Subido como video: ${t.name}`), this._loadUploadedFiles();
            } else
              i && (i.textContent = this._format("generic_error", { error: r?.error || this._t("upload_error") }));
          }
        );
      else {
        const r = await this._uploadFile(t, i);
        if (r?.success) {
          this._hubBgFile = r.url;
          const s = this.shadowRoot.getElementById("hub-bg-url-input");
          s && (s.value = r.url), i && (i.textContent = `Subido: ${t.name}`), this._loadUploadedFiles();
        } else
          i && (i.textContent = this._format("generic_error", { error: r?.error || this._t("upload_error") }));
      }
    } catch (o) {
      console.error("Upload failed:", o), i && (i.textContent = this._format("generic_error", { error: o.message || o }));
    }
  }
  async _loadUploadedFiles() {
    try {
      const e = await this._send("argus/list_uploaded_files");
      this._uploadedFiles = e || [], this._renderUploadedFiles();
    } catch (e) {
      console.error("Failed to load uploaded files:", e);
      const t = this.shadowRoot.getElementById("uploaded-files-list");
      t && (t.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; color:#ff4d4d; opacity:0.8;">
            ${this._t("error_loading_uploaded_files")}
          </div>
        `);
    }
  }
  _renderUploadedFiles() {
    const e = this.shadowRoot.getElementById("uploaded-files-list"), t = this.shadowRoot.getElementById("storage-files-count");
    if (!e) return;
    const i = this._uploadedFiles || [];
    if (!i.length) {
      e.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; opacity:0.5;">
          ${this._t("no_files_uploaded")}
        </div>
      `, t && (t.textContent = this._t("files_count").replace("{count}", "0"));
      return;
    }
    let o = 0;
    i.forEach((s) => o += s.size_bytes || 0);
    let r = "";
    o >= 1024 * 1024 ? r = `${(o / (1024 * 1024)).toFixed(2)} MB` : r = `${(o / 1024).toFixed(2)} KB`, t && (t.textContent = this._t("files_count_short").replace("{count}", i.length) + ` (${r})`), e.innerHTML = i.filter((s) => !s.is_video).map((s) => `
      <div class="file-card" data-filename="${this._escapeHtml(s.name)}">
        <div class="file-card-preview">
          <img src="${this._escapeHtml(s.url)}" loading="lazy">
        </div>
        <div class="file-card-name" title="${this._escapeHtml(s.name)}">${this._escapeHtml(s.name)}</div>
        <div class="file-card-meta">
          <span>${this._escapeHtml(s.size_str)}</span>
          <button class="file-card-btn-delete" data-filename="${this._escapeHtml(s.name)}" title="${this._escapeHtml(this._t("delete_btn_title"))}">🗑️</button>
        </div>
        <div class="file-card-actions">
          <button class="file-card-btn use-for-panel" data-url="${this._escapeHtml(s.url)}">${this._escapeHtml(this._t("use_for_panel"))}</button>
          <button class="file-card-btn use-for-hub" data-url="${this._escapeHtml(s.url)}">${this._escapeHtml(this._t("use_for_hub"))}</button>
        </div>
      </div>
    `).join(""), e.querySelectorAll(".file-card-btn-delete").forEach((s) => {
      s.addEventListener("click", () => {
        const n = s.dataset.filename;
        confirm(this._t("file_delete_confirm").replace("{filename}", n)) && this._deleteUploadedFile(n);
      });
    }), e.querySelectorAll(".use-for-panel").forEach((s) => {
      s.addEventListener("click", () => {
        const n = s.dataset.url;
        this._panelBgFile = n;
        const d = this.shadowRoot.getElementById("panel-bg-url-input");
        d && (d.value = n);
        const p = this.shadowRoot.getElementById("bg-mode-select-standalone");
        p && (p.value = "photo"), this._backgroundMode = "photo", this._updateBgFieldsVisibility(), this._renderEntries(), this._savePersonalization();
        const c = this.shadowRoot.getElementById("bg-file-help");
        c && (c.textContent = this._t("bg_panel_selected_from_history"));
      });
    }), e.querySelectorAll(".use-for-hub").forEach((s) => {
      s.addEventListener("click", () => {
        const n = s.dataset.url;
        this._hubBgFile = n;
        const d = this.shadowRoot.getElementById("hub-bg-url-input");
        d && (d.value = n);
        const p = this.shadowRoot.getElementById("hub-bg-mode-select");
        p && (p.value = "image"), this._hubBgMode = "image", this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._savePersonalization();
        const c = this.shadowRoot.getElementById("hub-file-help");
        c && (c.textContent = this._t("bg_hub_selected_from_history"));
      });
    });
  }
  async _deleteUploadedFile(e) {
    try {
      await this._send("argus/delete_uploaded_file", { filename: e }), this._uploadedFiles && (this._uploadedFiles = this._uploadedFiles.filter((o) => o.name !== e), this._renderUploadedFiles());
      const t = this.shadowRoot.getElementById("panel-bg-url-input");
      t && t.value === `/local/argus/${e}` && (t.value = "", this._panelBgFile = "");
      const i = this.shadowRoot.getElementById("hub-bg-url-input");
      i && i.value === `/local/argus/${e}` && (i.value = "", this._hubBgFile = "");
    } catch (t) {
      console.warn("Server delete failed:", t), alert(this._format("delete_file_error", { error: t.message || t }));
    }
  }
  _updateBgFieldsVisibility() {
    const e = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", t = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", i = this.shadowRoot.getElementById("panel-custom-bg-inputs");
    if (i)
      if (e === "photo" || e === "collage") {
        i.style.display = "flex";
        const r = this.shadowRoot.getElementById("lbl-panel-bg-sound");
        r && (r.style.display = "none");
        const s = this.shadowRoot.getElementById("panel-bg-file-input");
        s && (s.accept = "image/*,.mov,.heic,.heif");
        const n = this.shadowRoot.getElementById("panel-bg-url-input");
        n && (n.placeholder = "Pegar URL de la imagen");
      } else
        i.style.display = "none";
    const o = this.shadowRoot.getElementById("hub-custom-bg-inputs");
    if (o)
      if (t === "image") {
        o.style.display = "flex";
        const r = this.shadowRoot.getElementById("lbl-hub-bg-sound");
        r && (r.style.display = "none");
        const s = this.shadowRoot.getElementById("hub-bg-file-input");
        s && (s.accept = "image/*,.mov,.heic,.heif");
        const n = this.shadowRoot.getElementById("hub-bg-url-input");
        n && (n.placeholder = "Pegar URL de la imagen/GIF");
      } else
        o.style.display = "none";
  }
  _updateCanvasBackground() {
    const e = this.shadowRoot.getElementById("argus-canvas-bg"), t = this._hubBgMode || "default", i = this._hubBgFile || "";
    if (this.setAttribute("data-bg-mode", t), this.style.backgroundImage = "", this.style.backgroundSize = "", this.style.backgroundPosition = "", this.style.backgroundRepeat = "", this.style.backgroundAttachment = "", this.style.background = "", e && (e.innerHTML = "", e.style.backgroundImage = ""), t === "none")
      return;
    if (t === "weather") {
      e && (e.innerHTML = '<canvas class="wx-webgl" style="position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none;"></canvas>', this.shadowRoot.querySelectorAll(".wx-webgl").forEach((r) => {
        r._argusRO && r._argusRO.disconnect();
        const s = () => {
          r._argusWebglInit || (r.clientWidth > 0 || r.offsetWidth > 0) && r.isConnected && (r._argusWebglInit = !0, this._initWeatherWebGL(r));
        };
        typeof ResizeObserver < "u" && (r._argusRO = new ResizeObserver(() => {
          s(), r._argusRO?.disconnect();
        }), r._argusRO.observe(r.parentElement || r)), r.clientWidth > 0 ? s() : requestAnimationFrame(() => {
          r.clientWidth > 0 ? s() : setTimeout(s, 200);
        });
      }));
      return;
    }
    const o = t === "default" ? "/api/argus_static/argus-default-bg.jpg" : t === "image" && i ? i : "";
    o && (this.style.backgroundImage = `url('${o.replace(/'/g, "%27")}')`, this.style.backgroundSize = "cover", this.style.backgroundPosition = "center", this.style.backgroundRepeat = "no-repeat", this.style.backgroundAttachment = "fixed");
  }
  _renderEntryBackground(e, t) {
    const i = this._backgroundMode || "weather", o = this._backgroundImages || [];
    return i === "none" ? '<div class="wx wx-static"></div>' : i === "photo" && (this._panelBgFile || o[0]) ? `<div class="wx wx-photo" style="--bg-image:url('${(this._panelBgFile || o[0]).replace(/'/g, "%27")}')"></div>` : i === "collage" && o.length ? `<div class="wx wx-collage"><div class="wx-collage-grid">${o.slice(0, 4).map((r) => `<div class="wx-collage-cell" style="background-image:url('${r.replace(/'/g, "%27")}')"></div>`).join("")}</div></div>` : i === "video" && this._panelBgFile ? `<div class="wx wx-video">
        <video autoplay loop playsinline ${this._panelBgSound ? "" : "muted"} style="width:100%; height:100%; object-fit:cover; pointer-events:none; position:absolute; inset:0; z-index:1;">
          <source src="${this._panelBgFile}">
        </video>
      </div>` : '<canvas class="wx-webgl" style="position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; border-radius:inherit;"></canvas>';
  }
  _updateHomeNameDisplay() {
    const e = this.shadowRoot.getElementById("lbl-home-name-prominent");
    e && (e.textContent = this._homeName || this._t("home_default"));
  }
  _sendTempNotification(e) {
    const t = this._notifTargets || [];
    !t.length || !this._hass || t.forEach((i) => {
      try {
        this._hass.callService("notify", i, {
          message: e,
          title: this._t("temp_notification_title"),
          data: { push: { sound: "default", badge: 1 } }
        });
      } catch {
      }
    });
  }
  _normaliseEmergencyNumber(e) {
    const t = String(e || "").replace(/[^0-9+]/g, "");
    return /^[+]?[0-9]{2,15}$/.test(t) ? t : "911";
  }
  _renderSosOutputs() {
    const e = this.shadowRoot?.getElementById("sos-output-chips");
    if (!e) return;
    const t = this._panicOutputs || [];
    e.innerHTML = t.length ? t.map((i) => {
      const o = this._hass?.states?.[i]?.attributes?.friendly_name || i;
      return `<span class="sensor-pill" title="${this._escapeHtml(o)}"><span>${this._escapeHtml(o)}</span></span>`;
    }).join("") : `<div class="mode-sensor-none">${this._t("sos_no_outputs")}</div>`;
  }
  _configureEmergencyCall() {
    const e = this.shadowRoot?.getElementById("sos-call-btn");
    if (!e) return;
    const t = this._normaliseEmergencyNumber(this._emergencyNumber);
    e.href = `tel:${t}`, e.textContent = `${this._t("sos_call")} (${t})`;
  }
  async _triggerSOS() {
    if (this._sosBusy) return;
    this._sosBusy = !0;
    const e = this.shadowRoot && this.shadowRoot.getElementById("sos-modal");
    e && e.classList.remove("open");
    const t = this._normaliseEmergencyNumber(this._emergencyNumber), i = this._sosEntryIdx, o = this._dashboard?.entries?.[i], r = o?.entity_id;
    try {
      if (!this._hass || !r) throw new Error(this._t("no_alarm_instance"));
      await this._send("argus/perform_alarm_action", { action: "sos", entry_id: o.entry_id }), window.confirm(`${this._t("sos_activated")}. ${this._format("sos_call_confirm", { number: t })}`) && (window.location.href = `tel:${t}`);
    } catch (s) {
      alert(this._format("sos_error", { error: s?.message || s }));
    } finally {
      this._sosEntryIdx = null, this._sosBusy = !1;
    }
  }
  async _stopSOS(e) {
    const t = this._dashboard?.entries?.[e], o = (t && this._hass?.states?.[t.entity_id])?.attributes?.panic_previous_state, r = {
      armed_home: "alarm_arm_home",
      armed_away: "alarm_arm_away",
      armed_night: "alarm_arm_night",
      armed_vacation: "alarm_arm_vacation",
      disarmed: "alarm_disarm"
    }[o];
    if (!t?.entity_id || !r) {
      alert(this._t("panic_state_unknown"));
      return;
    }
    const s = async (d) => {
      try {
        return await this._send("argus/perform_alarm_action", {
          action: r.replace("alarm_", ""),
          entry_id: t.entry_id,
          ...d ? { code: d } : {}
        }), await this._load(), !0;
      } catch (p) {
        const c = this.shadowRoot.getElementById("pin-error");
        return c ? c.textContent = `❌ ${this._format("panic_stop_error", { error: "" }).replace(/:\s*$/, "")}` : alert(this._format("panic_stop_error", { error: p?.message || p })), !1;
      }
    };
    t.pin_configured === !0 || (this._users || []).length > 0 ? this._showPinModal(s) : await s(null);
  }
  _savePersonalization() {
    this._runWithPin(() => this._persistPersonalization());
  }
  async _persistPersonalization() {
    this._ui = this._ui || {};
    const e = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", t = this.shadowRoot.getElementById("temp-source-select-standalone")?.value || "auto", i = this.shadowRoot.getElementById("weather-source-select")?.value || "auto", o = this.shadowRoot.getElementById("argus-clock-format-select")?.value || "auto";
    this._clockFormat = ["auto", "12h", "24h"].includes(o) ? o : "auto";
    const r = this._normaliseEmergencyNumber(this.shadowRoot.getElementById("emergency-number-input")?.value), s = this.shadowRoot.getElementById("panel-bg-url-input")?.value || "", n = !!this.shadowRoot.getElementById("chk-panel-bg-sound")?.checked, d = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", p = d === "default" ? "none" : d, c = this._hubBgFile || this.shadowRoot.getElementById("hub-bg-url-input")?.value || "", l = !!this.shadowRoot.getElementById("chk-hub-bg-sound")?.checked, u = {
      home_name: this._homeName,
      temperature_source: t,
      weather_source: i,
      clock_format: this._clockFormat,
      emergency_number: r
    };
    this._panicOutputs !== void 0 && (u.panic_outputs = this._panicOutputs);
    const g = (this._ui.users || []).find((_) => _.id === this._currentProfile?.id);
    u.background_mode = e, u.background_images = this._backgroundImages || [], u.panel_bg_file = s, u.panel_bg_sound = n, u.hub_bg_mode = p, u.hub_bg_file = c, u.hub_bg_sound = l, u.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    let m = "default", f = "";
    if (e === "photo" && s ? (m = "photo", f = s) : e === "weather" ? m = "weather" : e === "none" && (m = "none"), u.theme = {
      background_mode: m,
      background_file: f
    }, g) {
      const _ = JSON.parse(JSON.stringify(this._ui.users || [])), b = _.find((v) => v.id === this._currentProfile?.id);
      b.background_mode = e, b.background_images = this._backgroundImages || [], b.panel_bg_file = s, b.panel_bg_sound = n, b.hub_bg_mode = p, b.hub_bg_file = c, b.hub_bg_sound = l, b.theme = u.theme, u.users = _;
    }
    try {
      await this._send("argus/save_ui", u), this._currentUserTheme = u.theme, this._backgroundMode = e, this._temperatureSource = t, this._weatherSource = i, this._emergencyNumber = r, this._panelBgFile = s, this._panelBgSound = n, this._hubBgMode = d, this._hubBgFile = c, this._hubBgSound = l, this._updateTheme(), this._ui = this._ui || {}, g ? this._ui.users = u.users : (this._ui.background_mode = e, this._ui.background_images = this._backgroundImages || [], this._ui.panel_bg_file = s, this._ui.panel_bg_sound = n, this._ui.hub_bg_mode = p, this._ui.hub_bg_file = c, this._ui.hub_bg_sound = l), this._ui.temperature_source = t, this._ui.weather_source = i, this._ui.clock_format = this._clockFormat, this._ui.emergency_number = r, this._ui.panic_outputs = this._panicOutputs, this._configureEmergencyCall(), this._ui.hub_bg_file = c, this._ui.hub_bg_sound = l, this._renderEntries(), this._updateCanvasBackground();
      const _ = this.shadowRoot.getElementById("btn-save-personalization-standalone");
      if (_) {
        const b = _.textContent;
        _.textContent = this._t("saved"), _.style.background = "#43a047", setTimeout(() => {
          _.textContent = b, _.style.background = "";
        }, 3e3);
      }
    } catch (_) {
      alert(this._format("generic_error", { error: _.message }));
    }
  }
  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const e = () => {
      const t = this.shadowRoot.getElementById("home-name-modal"), i = this.shadowRoot.getElementById("home-name-input"), o = this.shadowRoot.getElementById("home-name-status");
      i.value = this._homeName || this.shadowRoot.getElementById("home-name-setting")?.value || "", o && (o.textContent = ""), t.classList.add("open"), t.setAttribute("aria-hidden", "false"), setTimeout(() => i.focus(), 60);
    };
    this._runWithPin(e);
  }
  _closeHomeNameModal() {
    const e = this.shadowRoot.getElementById("home-name-modal");
    e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
  }
  async _saveHomeName() {
    const t = (this.shadowRoot.getElementById("home-name-input")?.value || "").trim();
    try {
      await this._send("argus/save_ui", { home_name: t }), this._homeName = t, this._ui || (this._ui = {}), this._ui.home_name = t, this._updateHomeNameDisplay(), this._renderEntries(), setTimeout(() => this._closeHomeNameModal(), 800);
    } catch (i) {
      alert(this._format("generic_error", { error: i.message }));
    }
  }
  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const e = this.shadowRoot.getElementById("pin-status"), t = this._dashboard?.entries?.[0]?.pin_configured === !0, i = this.shadowRoot.getElementById("current-pin").value;
    if (t && !i) {
      e && (e.textContent = this._t("pin_incorrect"), e.className = "status err");
      return;
    }
    const o = this.shadowRoot.getElementById("new-pin-1").value, r = this.shadowRoot.getElementById("new-pin-2").value;
    if (o !== r) {
      e ? (e.textContent = this._t("pin_mismatch"), e.className = "status err") : alert(this._t("pin_mismatch"));
      return;
    }
    try {
      await this._send("argus/update_master_pin", { pin: o, current_pin: i }), e && (e.textContent = o ? this._t("pin_updated") : this._t("pin_deleted"), e.className = "status ok"), this.shadowRoot.getElementById("current-pin-display") && (this.shadowRoot.getElementById("current-pin-display").textContent = o ? this._t("pin_active_yes") : this._t("pin_active_no")), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !!o), this._syncAccessSummary(), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => this._load(), 1200);
    } catch (s) {
      e ? (e.textContent = s.message, e.className = "status err") : alert(s.message);
    }
  }
  async _handleForgotPin() {
    const e = this.shadowRoot.getElementById("pin-status"), t = this.shadowRoot.getElementById("pin-error");
    if (!(this._hass?.user?.is_admin === !0)) {
      const o = this._t("pin_reset_admin_only");
      e && (e.textContent = o, e.className = "status err"), t && (t.textContent = o);
      return;
    }
    if (confirm(this._t("pin_reset_confirm")))
      try {
        await this._send("argus/update_master_pin", { pin: "", force_reset: !0 });
        const o = "✓ PIN Maestro restablecido";
        e && (e.textContent = o, e.className = "status ok"), t && (t.textContent = o, t.style.color = "#43a047"), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => {
          this._closePinModal(), this._load();
        }, 1200);
      } catch (o) {
        const r = this._format("generic_error", { error: o.message });
        e && (e.textContent = r, e.className = "status err"), t && (t.textContent = r);
      }
  }
  /* ── Liquid-glass input modal (replaces window.prompt) ───────────── */
  _showArgusInputModal({ title: e = "", label: t = "", placeholder: i = "", initialValue: o = "", type: r = "text", numeric: s = !1, options: n = null } = {}) {
    return new Promise((d) => {
      const p = `_aim_${Date.now()}`, c = document.createElement("div");
      c.id = p, c.setAttribute("role", "dialog"), c.setAttribute("aria-modal", "true"), c.style.cssText = [
        "position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const l = t.replace(/'/g, "&#39;"), u = e.replace(/'/g, "&#39;"), g = i.replace(/'/g, "&#39;"), m = this._t("modal_cancel") || "Cancelar", f = this._t("modal_save") || "Guardar";
      c.innerHTML = `
        <div style="background:rgba(30,30,45,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${u}</div>
          ${l ? `<div style="font-size:13px;color:rgba(255,255,255,0.55);margin-top:-6px">${l}</div>` : ""}
          ${r === "select" && n ? `<select id="aim-inp" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;transition:border-color .2s;font-family:inherit">
                 ${n.map((y) => `<option value="${this._escapeHtml(y.value)}" ${y.value === o ? "selected" : ""}>${this._escapeHtml(y.label)}</option>`).join("")}
               </select>` : `<input id="aim-inp" type="${r === "password" ? "password" : "text"}"
            ${s ? 'inputmode="numeric" pattern="[0-9]*"' : ""}
            placeholder="${g}"
            value="${o.replace(/"/g, "&quot;")}"
            style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;
              padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;
              transition:border-color .2s;font-family:inherit"/>`}
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="aim-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${m}</button>
            <button id="aim-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${f}</button>
          </div>
        </div>`, (this.shadowRoot || document.body).appendChild(c);
      const b = c.querySelector("#aim-inp"), v = c.querySelector("#aim-ok"), x = c.querySelector("#aim-cancel");
      setTimeout(() => b?.focus(), 60), b?.addEventListener("focus", () => b.style.borderColor = "rgba(74,144,217,0.8)"), b?.addEventListener("blur", () => b.style.borderColor = "rgba(255,255,255,0.15)");
      const h = (y) => {
        c.remove(), d(y);
      };
      v.addEventListener("click", () => h(b.value)), x.addEventListener("click", () => h(null)), b.addEventListener("keydown", (y) => {
        y.key === "Enter" && (y.preventDefault(), h(b.value)), y.key === "Escape" && (y.preventDefault(), h(null));
      }), c.addEventListener("click", (y) => {
        y.target === c && h(null);
      });
    });
  }
  _showArgusPermissionsModal(e) {
    return new Promise((t) => {
      const i = document.createElement("div");
      i.style.cssText = [
        "position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const o = this._t("modal_cancel") || "Cancelar", r = this._t("modal_save") || "Guardar", s = e.permissions || {};
      i.innerHTML = `
        <div style="background:rgba(30,30,45,0.85);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(400px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ Permisos de ${this._escapeHtml(e.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.55);margin-top:-6px">Selecciona las acciones permitidas para este perfil estándar:</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:280px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${s.view_status ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>Ver Estado de Sensores / Panel</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${s.arm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>Armar Alarma</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${s.disarm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>Desarmar Alarma</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${s.view_history ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>Ver Historial de Actividad</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${s.change_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">Permitir Cambiar su PIN de Acceso</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${s.change_master_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">Permitir Cambiar el PIN Maestro</span>
            </label>
          </div>

          <div style="display:flex;gap:10px;margin-top:10px">
            <button id="apm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${o}</button>
            <button id="apm-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${r}</button>
          </div>
        </div>`, (this.shadowRoot || document.body).appendChild(i);
      const d = i.querySelector("#apm-ok"), p = i.querySelector("#apm-cancel"), c = (l) => {
        i.remove(), t(l);
      };
      d.addEventListener("click", () => {
        const l = {
          view_status: i.querySelector("#chk-perm-view-status").checked,
          arm: i.querySelector("#chk-perm-arm").checked,
          disarm: i.querySelector("#chk-perm-disarm").checked,
          view_history: i.querySelector("#chk-perm-view-history").checked,
          change_pin: i.querySelector("#chk-perm-change-pin").checked,
          change_master_pin: i.querySelector("#chk-perm-change-master-pin").checked
        };
        c(l);
      }), p.addEventListener("click", () => c(null)), i.addEventListener("click", (l) => {
        l.target === i && c(null);
      });
    });
  }
  /* ── Liquid-glass confirm modal (replaces window.confirm) ─────────── */
  _showArgusConfirmModal(e = "", { confirmLabel: t = "", confirmStyle: i = "", cancelLabel: o = "" } = {}) {
    return new Promise((r) => {
      const s = document.createElement("div");
      s.setAttribute("role", "alertdialog"), s.setAttribute("aria-modal", "true"), s.style.cssText = [
        "position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const n = t || this._t("modal_confirm") || "Confirmar", d = o || this._t("modal_cancel") || "Cancelar", p = i || "background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)";
      s.innerHTML = `
        <div style="background:rgba(30,30,45,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(340px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.88);line-height:1.5;text-align:center">${e}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${d}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${p}">${n}</button>
          </div>
        </div>`, (this.shadowRoot || document.body).appendChild(s);
      const l = (u) => {
        s.remove(), r(u);
      };
      s.querySelector("#acm-ok").addEventListener("click", () => l(!0)), s.querySelector("#acm-cancel").addEventListener("click", () => l(!1)), s.addEventListener("click", (u) => {
        u.target === s && l(!1);
      }), s.addEventListener("keydown", (u) => {
        u.key === "Enter" && l(!0), u.key === "Escape" && l(!1);
      }), setTimeout(() => s.querySelector("#acm-ok")?.focus(), 60);
    });
  }
  _runWithPin(e) {
    e();
  }
  _showPinModal(e) {
    const t = this.shadowRoot.getElementById("pin-modal"), i = this.shadowRoot.getElementById("pin-input"), o = this.shadowRoot.getElementById("pin-error"), r = this.shadowRoot.querySelector(".wrap");
    i.value = "", o && (o.textContent = "", o.style.color = ""), this._pinCallback = e;
    const s = this.classList.contains("fullscreen-active");
    let n = null;
    if (s && (n = this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry") || this.shadowRoot.querySelector("article")), s && n) {
      t.style.position = "absolute", t.style.zIndex = "99999999", t.style.background = "rgba(0, 0, 0, 0.55)", t.style.backdropFilter = "none", t.style.webkitBackdropFilter = "none";
      const d = t.querySelector(".modal");
      d && (d.classList.remove("dial-elastic"), d.offsetWidth, d.classList.add("dial-elastic")), n.appendChild(t);
    } else
      t.style.position = "fixed", t.style.zIndex = "999999", t.style.background = "rgba(0, 0, 0, 0.3)", t.style.backdropFilter = "none", t.style.webkitBackdropFilter = "none", r && r.classList.add("wrap-blurred");
    t.classList.add("open"), t.setAttribute("aria-hidden", "false"), setTimeout(() => i.focus(), 60);
  }
  _closePinModal() {
    const e = this.shadowRoot.getElementById("pin-modal");
    e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
    const t = this.shadowRoot.querySelector(".wrap");
    t && t.classList.remove("wrap-blurred"), e.style.position = "fixed", e.style.zIndex = "999999", this.shadowRoot.appendChild(e), this._pinCallback = null;
  }
  _appendPinDigit(e) {
    const t = this.shadowRoot.getElementById("pin-input"), i = this.shadowRoot.getElementById("pin-error");
    t && (t.value = `${t.value || ""}${e}`.slice(0, 8), i && (i.textContent = ""));
  }
  _backspacePin() {
    const e = this.shadowRoot.getElementById("pin-input"), t = this.shadowRoot.getElementById("pin-error");
    e && (e.value = (e.value || "").slice(0, -1), t && (t.textContent = ""));
  }
  async _submitPin() {
    const e = this.shadowRoot.getElementById("pin-input").value.trim();
    if (!e) {
      const i = this.shadowRoot.getElementById("pin-error");
      i && (i.textContent = "⚠️ Introduce el PIN");
      return;
    }
    const t = this._pinCallback;
    if (t)
      try {
        await t(e) !== !1 && this._closePinModal();
      } catch (i) {
        const o = this.shadowRoot.getElementById("pin-error");
        o && (o.textContent = i.message || "❌ PIN incorrecto");
      }
    else
      this._closePinModal();
  }
  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const e = (this.shadowRoot.getElementById("selector-search").value || "").toLowerCase().trim(), t = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"];
    this._available.filter((o) => {
      if (this._selectorTarget === "external_panel") return o.domain === "alarm_control_panel";
      if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(o.domain);
      if (o.domain === "lock") return !0;
      if (o.domain === "binary_sensor") {
        const r = this._hass?.states?.[o.entity_id]?.attributes?.device_class || "";
        return t.includes(r);
      }
      return !1;
    }).filter((o) => !e || [o.entity_id, o.name, o.area].filter(Boolean).join(" ").toLowerCase().includes(e)).forEach((o) => {
      this._selected.includes(o.entity_id) || this._selected.push(o.entity_id);
    }), this._renderSelector();
  }
  _openModal(e) {
    this._selectorTarget = e;
    const t = this._currentModeConfig(), i = e === "sensor" ? "sensors" : e === "bypass" ? "bypassed_sensors" : e === "entry" ? "entry_sensors" : e === "external_panel" ? "external_panels" : "sirens";
    this._selected = e === "panic" ? [...this._panicOutputs || []] : Array.isArray(t?.[i]) ? [...t[i]] : [];
    const o = this.shadowRoot.getElementById("selector-title");
    e === "sensor" ? o.textContent = this._t("sensor_section") : e === "bypass" ? o.textContent = this._t("sensors_to_bypass") : e === "entry" ? o.textContent = this._t("entry_sensors") : e === "panic" ? o.textContent = this._t("selector_panic") : e === "external_panel" ? o.textContent = this._t("external_panels") || "Paneles de alarma externos" : o.textContent = this._t("siren_section"), this.shadowRoot.getElementById("selector-search").value = "", this._renderSelector();
    const r = this.shadowRoot.getElementById("selector-modal");
    r.classList.add("open"), r.setAttribute("aria-hidden", "false");
  }
  _closeModal() {
    const e = this.shadowRoot.getElementById("selector-modal");
    e.classList.remove("open"), e.setAttribute("aria-hidden", "true");
  }
  _renderSelector() {
    const e = (this.shadowRoot.getElementById("selector-search").value || "").toLowerCase().trim(), t = this.shadowRoot.getElementById("selector-list"), i = this.shadowRoot.getElementById("selector-selected"), o = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"], r = this._available.filter((s) => {
      if (this._selectorTarget === "external_panel") return s.domain === "alarm_control_panel";
      if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(s.domain);
      if (s.domain === "lock") return !0;
      if (s.domain === "binary_sensor") {
        const n = this._hass?.states?.[s.entity_id]?.attributes?.device_class || "";
        return o.includes(n);
      }
      return !1;
    }).filter((s) => !e || [s.entity_id, s.name, s.area, s.entity_id.split(".")[1]].filter(Boolean).join(" ").toLowerCase().includes(e));
    t.innerHTML = r.map((s) => {
      this._hass?.states?.[s.entity_id]?.state;
      const n = this._hass?.states?.[s.entity_id], d = this._deviceFacts(s.entity_id, n, !0);
      return `<label class="pick-row">
        <input type="checkbox" data-entity="${this._escapeHtml(s.entity_id)}" ${this._selected.includes(s.entity_id) ? "checked" : ""}>
        <div>
          <div class="pick-row-name">${this._escapeHtml(s.name || s.entity_id)}</div>
          <div class="pick-row-meta">${this._escapeHtml(s.entity_id)}${s.area ? " · " + this._escapeHtml(s.area) : ""}</div>
          <div class="device-facts">${d.map((p) => `<span class="device-fact ${p.className}">${this._escapeHtml(p.text)}</span>`).join("")}</div>
        </div>
      </label>`;
    }).join("") || `<div class="small" style="padding:10px">${this._t("no_results")}</div>`, t.addEventListener("change", (s) => {
      const n = s.target.closest("input[type=checkbox]");
      if (!n || !n.dataset.entity) return;
      const d = n.dataset.entity;
      n.checked ? this._selected.includes(d) || this._selected.push(d) : this._selected = this._selected.filter((p) => p !== d), this._renderSelector();
    }, { once: !0 }), i.innerHTML = this._selected.map((s) => {
      const n = this._hass?.states?.[s], d = this._deviceFacts(s, n, !0);
      return `<div class="sel-right-item">
        <div style="min-width:0">
          <div class="sel-right-name">${this._escapeHtml(n?.attributes?.friendly_name || s)}</div>
          <div class="sel-right-facts">${d.map((p) => `<span class="device-fact ${p.className}">${this._escapeHtml(p.text)}</span>`).join("")}</div>
        </div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${this._escapeHtml(s)}">✕</button>
      </div>`;
    }).join("") || `<div class="small" style="padding:10px;opacity:.5">${this._t("none_selected")}</div>`, i.querySelectorAll("[data-rm]").forEach(
      (s) => s.addEventListener("click", () => {
        this._selected = this._selected.filter((n) => n !== s.dataset.rm), this._renderSelector();
      })
    ), this.shadowRoot.getElementById("selector-count").textContent = `${this._selected.length} ${this._t("selected_lbl").toLowerCase()}`;
  }
  _acceptSelection() {
    if (!this._ui) return;
    if (this._selectorTarget === "panic") {
      this._panicOutputs = [...this._selected], this._renderSosOutputs(), this._closeModal(), this._savePersonalization();
      return;
    }
    this._ui.modes || (this._ui.modes = {}), this._ui.modes.__by_entity__ || (this._ui.modes.__by_entity__ = {});
    let e = this._modeEntryId;
    (!e || e === "default") && (e = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = e, this._ui.modes.__by_entity__[e] || (this._ui.modes.__by_entity__[e] = {});
    const t = {
      sensors: [],
      bypassed_sensors: [],
      sirens: [],
      external_panels: [],
      require_closed: !1,
      arming_time: null,
      entry_delay: null,
      mqtt_enabled: null,
      entry_sensors: [],
      light_siren_settings: {}
    }, i = this._ui.modes.__by_entity__[e][this._mode] || {}, o = { ...t, ...i };
    this._selectorTarget === "sensor" && (o.sensors = [...this._selected]), this._selectorTarget === "siren" && (o.sirens = [...this._selected]), this._selectorTarget === "bypass" && (o.bypassed_sensors = [...this._selected]), this._selectorTarget === "entry" && (o.entry_sensors = [...this._selected]), this._selectorTarget === "external_panel" && (o.external_panels = [...this._selected]), this._ui.modes.__by_entity__[e][this._mode] = o, this._closeModal(), this._renderModeView();
  }
  /* ── Alarm actions ───────────────────────────────────────────────── */
  async _handleAction(e, t) {
    const i = this._dashboard.entries[Number(e)];
    if (!i?.entity_id || !this._hass) return;
    const o = this._hass.states[i.entity_id];
    if (!o || o.state === "unavailable") return;
    const r = {
      home: "alarm_arm_home",
      away: "alarm_arm_away",
      night: "alarm_arm_night",
      vacation: "alarm_arm_vacation",
      disarm: "alarm_disarm"
    }, s = {
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      vacation: this._t("mode_vacation")
    }, n = r[t];
    if (!n) return;
    if (this._hass?.user?.name || this._t("user_default"), t === "disarm") {
      const c = i.pin_configured === !0, l = i.user_pin_configured === !0, u = async (g) => {
        try {
          return await this._send("argus/perform_alarm_action", {
            action: "disarm",
            entry_id: i.entry_id,
            ...g ? { code: g } : {}
          }), setTimeout(() => {
            this._renderModeView(), this._load();
          }, 300), !0;
        } catch {
          const f = this.shadowRoot.getElementById("pin-error");
          return f && (f.textContent = "❌ PIN incorrecto o error al desarmar"), !1;
        }
      };
      c || l ? this._showPinModal(async (g) => await u(g)) : await u(null);
      return;
    }
    const d = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id, p = this._ui?.modes?.__by_entity__?.[d]?.[t] || this._ui?.modes?.[t] || {};
    if (p.require_closed) {
      const c = p.sensors || [], l = new Set(
        p.bypassed_sensors || p.bypassedSensors || []
      ), u = [];
      for (const g of c) {
        if (l.has(g)) continue;
        const m = this._hass.states[g]?.state;
        ["on", "open", "unlocked", "active", "motion", "recording"].includes(m) && u.push(this._hass.states[g]?.attributes?.friendly_name || g);
      }
      if (u.length > 0) {
        this._showArmBlockedAlert(u);
        return;
      }
    }
    try {
      await this._send("argus/perform_alarm_action", {
        action: n.replace("alarm_", ""),
        entry_id: i.entry_id
      });
      const c = s[t] || t;
      setTimeout(() => this._load(), 800);
    } catch (c) {
      const l = c?.message || (typeof c == "string" ? c : JSON.stringify(c));
      this._showArmBlockedAlert([], l), console.error("Argus action failed", c);
    }
  }
  _showArmBlockedAlert(e = [], t = "") {
    if (t) {
      alert(`🚨 ${this._t("action_failed")}

${t}`);
      return;
    }
    const i = e.map((o) => `  • ${o}`).join(`
`);
    alert(
      `🚨 ${this._t("cannot_arm")}

` + this._format("open_sensors_explain", { names: i })
    );
  }
  /* ── Bootstrap Render Methods ─────────────────────────────────────── */
  _renderInitializationError(e) {
    const t = this.shadowRoot.getElementById("bootstrap-overlay");
    t.style.display = "flex", t.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(this._t("initialization_error_title"))}</h1>
        <p>${this._escapeHtml(this._t("initialization_error_desc"))}</p>
        <div style="font-size:11px;opacity:.55;margin-bottom:16px;word-break:break-word">
          ${this._escapeHtml(e?.message || "unknown error")}
        </div>
        <button id="btn-retry-argus" class="btn-start" style="width:100%">
          ${this._escapeHtml(this._t("retry_action"))}
        </button>
      </div>
    `, this.shadowRoot.getElementById("btn-retry-argus")?.addEventListener("click", () => {
      t.style.display = "none", this._dashboard = null, this._ensureInitialized();
    });
  }
  _renderMissingConfigurationScreen() {
    const e = this.shadowRoot.getElementById("bootstrap-overlay");
    e.style.display = "flex", e.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(this._t("setup_required_title"))}</h1>
        <p>${this._escapeHtml(this._t("setup_required_desc"))}</p>
        <button id="btn-open-argus-integration" class="btn-start" style="width:100%">
          ${this._escapeHtml(this._t("setup_required_action"))}
        </button>
      </div>
    `, this.shadowRoot.getElementById("btn-open-argus-integration")?.addEventListener("click", () => {
      history.pushState(null, "", "/config/integrations/integration/argus"), window.dispatchEvent(new CustomEvent("location-changed"));
    });
  }
  _updateHeroProfileDisplay() {
    const e = this.shadowRoot.getElementById("hero-profile-container");
    if (!e) return;
    const t = this._currentProfile;
    if (!t) {
      e.style.display = "none", e.innerHTML = "";
      return;
    }
    e.style.display = "flex", e.style.position = "relative";
    let i = t.picture || null;
    if (!i && this._hass?.states) {
      const l = Object.values(this._hass.states).filter(
        (u) => u.entity_id?.startsWith("person.") && (u.attributes?.friendly_name?.toLowerCase() === t.name?.toLowerCase() || u.attributes?.user_id === t.ha_user_id)
      );
      if (l.length > 0) {
        const u = l[0].attributes?.entity_picture;
        u && (i = u);
      }
    }
    t.picture = i;
    const o = t.picture ? `<img id="hero-profile-avatar" src="${this._escapeHtml(t.picture)}" alt="${this._escapeHtml(t.name)}" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 3px 8px rgba(0,0,0,0.2); flex-shrink: 0;" />` : `<div id="hero-profile-avatar" class="user-avatar" style="width: 34px; height: 34px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0;">${this._escapeHtml(t.name.substring(0, 2).toUpperCase())}</div>`, r = this._manualLang || "auto", s = t.role === "admin" || t.permissions && t.permissions.change_pin, n = t.role === "admin" || t.permissions && t.permissions.change_master_pin;
    e.innerHTML = `
      <div class="hero-profile-pill glass liquid-glass" style="display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px;">
        ${o}
        <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
          <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(t.name)}</span>
          <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${t.role === "admin" ? "Admin" : "Estándar"}</span>
        </div>
        <span class="profile-chevron" style="font-size: 7.5px; opacity: 0.65; margin-left: 2px;">▼</span>
      </div>

      <!-- Dropdown Card -->
      <div id="profile-dropdown" class="hero-profile-dropdown glass liquid-glass" style="display: none;">
        <div style="display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 8px; width: 100%;">
          ${t.picture ? `<img src="${this._escapeHtml(t.picture)}" alt="${this._escapeHtml(t.name)}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;" />` : `<div class="user-avatar" style="width: 44px; height: 44px; border-radius: 50%; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;">${this._escapeHtml(t.name.substring(0, 2).toUpperCase())}</div>`}
          <div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0; align-items: flex-start;">
            <span style="font-size: 9.5px; opacity: 0.5; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;">${this._t("profile_is_yours") || "Perfil Activo"}</span>
            <span style="font-size: 14px; font-weight: 850; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; text-align: left;">${this._escapeHtml(t.name)}</span>
            <button id="btn-change-profile-picture" style="font-size: 10.5px; font-weight: 700; color: #30d158; text-decoration: none; display: flex; align-items: center; gap: 3px; margin-top: 3px; background: none; border: none; padding: 0; cursor: pointer;">
              👤 ${this._t("change_profile_picture") || "Ir a Personas de HA ↗"}
            </button>
          </div>
          <span class="user-badge ${t.role === "admin" ? "admin" : "user"}" style="font-size: 8.5px; padding: 3px 8px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.03em;">${t.role === "admin" ? "Admin" : "Estándar"}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          <label style="font-size: 11px; font-weight: 700; opacity: 0.7; display: flex; align-items: center; gap: 5px;">⚙️ Idioma / Language</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 36px; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${ie.map((l) => `<option value="${l.code}" ${l.code === r ? "selected" : ""}>${l.flag} ${l.code === "auto" ? "Automático (HA)" : l.label}</option>`).join("")}
          </select>
        </div>

        <!-- PIN management section -->
        ${s || n ? `
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">🔑 Gestión de Pines</span>
          
          <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 2px;">
            ${s ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">PIN de Acceso</span>
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">Cambiar</button>
                <button id="btn-dropdown-remove-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">Quitar</button>
              </div>
            </div>
            ` : ""}
            
            ${n ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">PIN Maestro</span>
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">Cambiar</button>
                <button id="btn-dropdown-remove-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">Quitar</button>
              </div>
            </div>
            ` : ""}
          </div>
        </div>
        ` : ""}

        <!-- Switch user button -->
        <button id="btn-dropdown-switch-user" class="glass-control" style="width: 100%; min-height: 32px; padding: 6px; border-radius: 10px; font-size: 10.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; margin-top: 6px; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); color: var(--v2066-text);">
          👤 Cambiar de Perfil
        </button>
      </div>
    `;
    const d = e.querySelector(".hero-profile-pill"), p = e.querySelector("#profile-dropdown");
    if (d && p) {
      d.addEventListener("click", (u) => {
        u.stopPropagation();
        const g = p.style.display === "flex";
        p.style.display = g ? "none" : "flex";
      });
      const l = (u) => {
        (u.composedPath ? u.composedPath() : [u.target]).some((f) => f === e || f.closest && f.closest?.("#profile-dropdown")) || (p.style.display = "none", document.removeEventListener("click", l, !0));
      };
      d.addEventListener("click", () => {
        setTimeout(() => {
          p.style.display === "flex" && document.addEventListener("click", l, !0);
        }, 10);
      });
    }
    const c = e.querySelector("#dropdown-lang-select");
    c && c.addEventListener("change", (l) => {
      l.target.value === "auto" ? this._setLangAuto() : this._setLangManual(l.target.value);
    }), e.querySelector("#btn-change-profile-picture")?.addEventListener("click", (l) => {
      l.stopPropagation(), p.style.display = "none";
      try {
        window.history.pushState(null, "", "/config/person"), window.dispatchEvent(new CustomEvent("location-changed"));
      } catch {
        window.location.href = "/config/person";
      }
    }), e.querySelector("#btn-dropdown-switch-user")?.addEventListener("click", (l) => {
      l.stopPropagation(), this._switchProfile();
    }), e.querySelector("#btn-dropdown-change-access-pin")?.addEventListener("click", (l) => {
      l.stopPropagation(), p.style.display = "none";
      const u = this.shadowRoot.getElementById("w-access");
      u && (u.scrollIntoView({ behavior: "smooth", block: "center" }), u.style.transition = "box-shadow 0.5s ease-in-out", u.style.boxShadow = "0 0 30px rgba(0, 122, 255, 0.6)", setTimeout(() => {
        u.style.boxShadow = "";
      }, 1500), this.shadowRoot.querySelectorAll("#users-list .user-card").forEach((m) => {
        if (m.textContent.includes(t.name)) {
          m.style.transition = "background-color 0.5s ease", m.style.backgroundColor = "rgba(0, 122, 255, 0.15)", setTimeout(() => {
            m.style.backgroundColor = "";
          }, 2e3);
          const f = m.querySelector("[data-user-pin]");
          f && f.focus();
        }
      }));
    }), e.querySelector("#btn-dropdown-remove-access-pin")?.addEventListener("click", (l) => {
      l.stopPropagation(), p.style.display = "none";
      const u = this.shadowRoot.getElementById("w-access");
      u && (u.scrollIntoView({ behavior: "smooth", block: "center" }), u.style.transition = "box-shadow 0.5s ease-in-out", u.style.boxShadow = "0 0 30px rgba(0, 122, 255, 0.6)", setTimeout(() => {
        u.style.boxShadow = "";
      }, 1500), this.shadowRoot.querySelectorAll("#users-list .user-card").forEach((m) => {
        if (m.textContent.includes(t.name)) {
          m.style.transition = "background-color 0.5s ease", m.style.backgroundColor = "rgba(255, 69, 58, 0.15)", setTimeout(() => {
            m.style.backgroundColor = "";
          }, 2e3);
          const f = m.querySelector("[data-user-pin]");
          f && f.focus();
        }
      }));
    }), e.querySelector("#btn-dropdown-change-master-pin")?.addEventListener("click", (l) => {
      l.stopPropagation(), p.style.display = "none";
      const u = this.shadowRoot.getElementById("w-access");
      if (u) {
        u.scrollIntoView({ behavior: "smooth", block: "center" }), u.style.transition = "box-shadow 0.5s ease-in-out", u.style.boxShadow = "0 0 30px rgba(255, 179, 0, 0.6)", setTimeout(() => {
          u.style.boxShadow = "";
        }, 1500);
        const g = this.shadowRoot.getElementById("new-pin-1");
        g && g.focus();
      }
    }), e.querySelector("#btn-dropdown-remove-master-pin")?.addEventListener("click", (l) => {
      l.stopPropagation(), p.style.display = "none";
      const u = this.shadowRoot.getElementById("w-access");
      if (u) {
        u.scrollIntoView({ behavior: "smooth", block: "center" }), u.style.transition = "box-shadow 0.5s ease-in-out", u.style.boxShadow = "0 0 30px rgba(255, 179, 0, 0.6)", setTimeout(() => {
          u.style.boxShadow = "";
        }, 1500);
        const g = this.shadowRoot.getElementById("current-pin");
        g && g.focus();
      }
    });
  }
  async _switchProfile() {
    let e;
    try {
      e = await this._send("argus/bootstrap"), this._welcomeShownThisMount = !1, this._renderLoginScreen(e);
    } catch (t) {
      console.error("Switch profile bootstrap failed:", t);
    }
  }
  async _showChangePictureModal() {
    let e = [];
    try {
      e = ((await this._send("argus/get_ha_persons", {}))?.ha_persons ?? []).filter((n) => n.entity_id).map((n) => {
        const d = this._hass?.states?.[n.entity_id];
        return {
          name: n.name || n.entity_id,
          url: d?.attributes?.entity_picture || null
        };
      }).filter((n) => n.url);
    } catch {
    }
    const t = document.createElement("div");
    t.style.cssText = `
      position: fixed; inset: 0; z-index: 10100;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex; align-items: center; justify-content: center;
    `;
    const i = e.map((r, s) => `
      <div data-pic-url="${this._escapeHtml(r.url)}" data-pic-idx="${s}"
           style="display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; padding:10px; border-radius:12px; border:2px solid transparent; transition:border-color 0.15s;"
           class="ha-pic-option">
        <img src="${this._escapeHtml(r.url)}" alt="${this._escapeHtml(r.name)}"
             style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.15); box-shadow:0 4px 14px rgba(0,0,0,0.3);" />
        <span style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.7); max-width:72px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${this._escapeHtml(r.name)}</span>
      </div>
    `).join("");
    t.innerHTML = `
      <div style="background:rgba(30,32,48,0.97); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:24px; width:min(380px,90vw); color:#fff;">
        <h3 style="margin:0 0 4px; font-size:1.05rem; font-weight:800;">📸 Cambiar imagen de perfil</h3>
        <p style="margin:0 0 16px; font-size:0.78rem; color:rgba(255,255,255,0.5);">Elige una foto de tus personas de HA o dirígete al perfil de HA para subir una nueva.</p>

        ${e.length ? `
          <div style="font-size:11px; font-weight:700; opacity:0.6; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">Personas de Home Assistant</div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
            ${i}
          </div>
        ` : `
          <p style="font-size:12px; color:rgba(255,255,255,0.45); margin-bottom:16px;">No se encontraron personas con foto en HA. Abre HA para añadir una imagen a tu persona.</p>
        `}

        <div style="display:flex; gap:8px;">
          <a href="/config/profile" target="_top"
             style="flex:1; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.07); color:#fff; font-size:12px; font-weight:700; text-decoration:none; text-align:center;">
            Ir al Perfil HA ↗
          </a>
          <button id="modal-pic-cancel"
                  style="flex:1; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.6); font-size:12px; font-weight:700; cursor:pointer;">
            Cancelar
          </button>
        </div>

        <div id="pic-save-status" style="font-size:12px; margin-top:10px; min-height:16px; text-align:center;"></div>
      </div>
    `, this.shadowRoot.appendChild(t);
    const o = t.querySelector("#pic-save-status");
    t.querySelectorAll(".ha-pic-option").forEach((r) => {
      r.addEventListener("mouseenter", () => r.style.borderColor = "rgba(255,255,255,0.4)"), r.addEventListener("mouseleave", () => r.style.borderColor = "transparent"), r.addEventListener("click", async () => {
        const s = r.getAttribute("data-pic-url");
        if (s) {
          o.textContent = "⏳ Guardando...";
          try {
            await this._send("argus/save_ui", {
              profile_picture: s
            }), o.style.color = "#34c759", o.textContent = "✅ Imagen actualizada. Recarga para verla.", setTimeout(() => {
              t.remove(), this._updateHeroProfileDisplay(), this._updateProfileBadge();
            }, 1200);
          } catch (n) {
            o.style.color = "#ff453a", o.textContent = "❌ " + (n.message || "Error al guardar");
          }
        }
      });
    }), t.querySelector("#modal-pic-cancel").addEventListener("click", () => t.remove()), t.addEventListener("click", (r) => {
      r.target === t && t.remove();
    });
  }
  _renderFirstRunScreen() {
    const e = this.shadowRoot.getElementById("bootstrap-overlay");
    if (e.style.display = "flex", this._hass?.user && this._hass.user.is_admin === !1) {
      e.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass">
          <h1>${this._t("first_run_blocked_title") || "Acceso denegado"}</h1>
          <p>${this._t("first_run_blocked_desc") || "Se requiere un administrador de Home Assistant para configurar Argus por primera vez."}</p>
        </div>
      `;
      return;
    }
    const t = this._hass?.user?.name || "Admin", i = this._getCurrentLangCode(), o = {
      es: ["Bienvenido a Argus Home Hub", "Protección inteligente para lo que más importa."],
      en: ["Welcome to Argus Home Hub", "Smart protection for what matters most."],
      fr: ["Bienvenue dans Argus Home Hub", "Une protection intelligente pour ce qui compte le plus."],
      pt: ["Bem-vindo ao Argus Home Hub", "Proteção inteligente para o que mais importa."],
      it: ["Benvenuto in Argus Home Hub", "Protezione intelligente per ciò che conta di più."],
      zh: ["欢迎使用 Argus Home Hub", "为重要事物提供智能保护。"],
      ru: ["Добро пожаловать в Argus Home Hub", "Умная защита самого важного."]
    }[i] || ["Welcome to Argus Home Hub", "Smart protection for what matters most."], r = () => {
      e.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:420px">
          <div class="argus-first-run-thank-icon">✓</div>
          <h1 style="margin-bottom:10px;font-weight:850">Gracias por usar Argus Home Hub</h1>
          <p style="margin:0">Tu sistema está listo y protegido.</p>
        </div>
      `, setTimeout(() => {
        e.style.display = "none", this._profileSelectedThisMount = !0, this._load();
      }, 1500);
    };
    e.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:540px;width:92vw">
        <div class="argus-first-run-brand">
          <img class="argus-first-run-logo" src="/api/argus_static/argus_logo.png" alt="Logotipo oficial de Argus">
          <div>
            <h1>${this._escapeHtml(o[0])}</h1>
            <p>${this._escapeHtml(o[1])}</p>
          </div>
        </div>

        <!-- Mode selector tabs -->
        <div style="display:flex;gap:10px;margin-bottom:16px;background:rgba(255,255,255,0.05);padding:4px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
          <button id="tab-setup-fresh" style="flex:1;padding:10px;border-radius:10px;border:none;background:rgba(255,255,255,0.15);color:#fff;font-weight:700;font-size:13px;cursor:pointer">🚀 Configurar desde cero</button>
          <button id="tab-setup-restore" style="flex:1;padding:10px;border-radius:10px;border:none;background:transparent;color:rgba(255,255,255,0.6);font-weight:600;font-size:13px;cursor:pointer">📁 Restaurar Backup</button>
        </div>

        <!-- Fresh Setup View -->
        <div id="view-setup-fresh" class="pin-prompt" style="display:block;border:none;background:transparent;box-shadow:none;padding:0">
          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t("setup_admin_name") || "Nombre del Administrador")}</label>
          <input type="text" id="setup-admin-name" placeholder="Name" value="${this._escapeHtml(t)}" style="margin-bottom:15px;width:100%" />

          <p style="font-size:12px;opacity:0.8;margin-bottom:10px;line-height:1.4">
            ${this._escapeHtml(this._t("first_run_pin_expl") || "El PIN de acceso abre Argus. El PIN maestro controla el armado y desarmado.")}
          </p>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t("setup_access_pin") || "PIN de acceso al panel Argus (Opcional)")}</label>
          <div style="display:flex;gap:10px;margin-bottom:15px">
            <input type="password" id="setup-access-pin" placeholder="PIN (4-12)" style="flex:1" />
            <button id="skip-access-pin" class="btn-cancel" style="width:auto;padding:0 12px;font-size:11px">${this._escapeHtml(this._t("first_run_skip") || "Omitir")}</button>
          </div>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t("setup_master_pin") || "PIN maestro para armar/desarmar (Opcional)")}</label>
          <div style="display:flex;gap:10px;margin-bottom:20px">
            <input type="password" id="setup-master-pin" placeholder="PIN (4-12)" style="flex:1" />
            <button id="skip-master-pin" class="btn-cancel" style="width:auto;padding:0 12px;font-size:11px">${this._escapeHtml(this._t("first_run_skip") || "Omitir")}</button>
          </div>

          <button id="btn-complete-setup" class="btn-start" style="width:100%">${this._escapeHtml(this._t("first_run_start") || "Comenzar con Argus")}</button>
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
    const s = this.shadowRoot.getElementById("tab-setup-fresh"), n = this.shadowRoot.getElementById("tab-setup-restore"), d = this.shadowRoot.getElementById("view-setup-fresh"), p = this.shadowRoot.getElementById("view-setup-restore");
    s?.addEventListener("click", () => {
      s.style.background = "rgba(255,255,255,0.15)", s.style.color = "#fff", n.style.background = "transparent", n.style.color = "rgba(255,255,255,0.6)", d.style.display = "block", p.style.display = "none";
    }), n?.addEventListener("click", () => {
      n.style.background = "rgba(255,255,255,0.15)", n.style.color = "#fff", s.style.background = "transparent", s.style.color = "rgba(255,255,255,0.6)", p.style.display = "block", d.style.display = "none";
    }), this.shadowRoot.getElementById("skip-access-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-access-pin").value = "";
    }), this.shadowRoot.getElementById("skip-master-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-master-pin").value = "";
    }), this.shadowRoot.getElementById("btn-complete-setup")?.addEventListener("click", async () => {
      const u = this.shadowRoot.getElementById("setup-admin-name").value || t, g = this.shadowRoot.getElementById("setup-master-pin").value || void 0, m = this.shadowRoot.getElementById("setup-access-pin").value || void 0;
      try {
        await this._send("argus/complete_first_run", { admin_name: u, master_pin: g, access_pin: m }), r();
      } catch (f) {
        alert("Setup failed: " + f.message);
      }
    });
    const c = this.shadowRoot.getElementById("setup-restore-file"), l = this.shadowRoot.getElementById("restore-status");
    this.shadowRoot.getElementById("btn-trigger-restore")?.addEventListener("click", () => {
      c?.click();
    }), c?.addEventListener("change", (u) => {
      const g = u.target.files?.[0];
      if (!g) return;
      l && (l.textContent = "Procesando copia de seguridad...");
      const m = new FileReader();
      m.onload = async (f) => {
        try {
          let _ = JSON.parse(f.target.result);
          if (_?.format === "argus-encrypted-backup") {
            const b = await this._showArgusInputModal({
              title: "Copia de seguridad cifrada",
              label: "Introduce la contraseña del backup:",
              type: "password"
            });
            if (!b) {
              l && (l.textContent = "Restauración cancelada.");
              return;
            }
            try {
              const v = this._base64ToBytes(_.salt), x = this._base64ToBytes(_.iv), h = await this._backupKey(b, v, ["decrypt"]), y = await crypto.subtle.decrypt({ name: "AES-GCM", iv: x }, h, this._base64ToBytes(_.data));
              _ = JSON.parse(new TextDecoder().decode(y));
            } catch {
              throw new Error("Contraseña de copia de seguridad incorrecta.");
            }
          }
          if (typeof _ != "object" || _ === null)
            throw new Error(this._t("invalid_config"));
          await this._send("argus/restore_config", { config: _ }), l && (l.textContent = "✅ Copia de seguridad restaurada con éxito."), r();
        } catch (_) {
          l && (l.textContent = "❌ Error al restaurar: " + (_.message || _));
        }
      }, m.onerror = () => {
        l && (l.textContent = "❌ Error al leer el archivo.");
      }, m.readAsText(g);
    });
  }
  _renderLegacyClaimScreen() {
    const e = this.shadowRoot.getElementById("bootstrap-overlay");
    e.style.display = "flex", e.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <h1>${this._t("claim_title") || "Argus Security Update"}</h1>
        <p>${this._t("claim_desc") || "Your installation needs an administrator to claim access."}</p>
        <button id="btn-claim-admin" class="btn-claim">${this._t("claim_btn") || "Claim Administration"}</button>
      </div>
    `, this.shadowRoot.getElementById("btn-claim-admin").addEventListener("click", async () => {
      try {
        await this._send("argus/claim_legacy_administration"), e.style.display = "none", this._profileSelectedThisMount = !0, this._load();
      } catch (t) {
        alert("Claim failed: " + t.message);
      }
    });
  }
  async _renderLoginScreen(e) {
    if (!this._isRenderingLogin) {
      this._isRenderingLogin = !0;
      try {
        const t = (l) => this._t(l);
        let i = [];
        try {
          const l = await this._send("argus/get_profiles", {});
          i = l?.profiles ?? l?.users ?? e?.users ?? [];
        } catch {
          i = this._config?.profiles ?? e?.users ?? [];
        }
        if (!i.length) return;
        i = i.map((l) => ({
          ...l,
          display_name: l.display_name || l.name,
          picture: l.picture || null
        }));
        const o = this.shadowRoot.getElementById("bootstrap-overlay");
        o && (o.style.display = "none"), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen").forEach((l) => l.remove());
        const r = document.createElement("div");
        r.className = "argus-profile-overlay";
        const s = `
      <div class="argus-profile-header">
        <h2>${this._escapeHtml(t("select_profile_title"))}</h2>
        <p>${this._escapeHtml(t("select_profile_subtitle"))}</p>
      </div>
    `, d = `
      <div class="argus-profile-grid">
        ${i.map((l) => {
          const u = l.is_own_profile === !0, g = l.access_pin_configured === !0, m = l.role === "admin" ? t("role_argus_admin") : t("role_argus_standard"), f = l.picture ? `<img src="${this._escapeHtml(l.picture)}" alt="" />` : this._escapeHtml(l.name.substring(0, 2).toUpperCase()), _ = g ? '<div class="lock-badge">🔒</div>' : "";
          return `
        <div class="argus-profile-item" tabindex="0"
             data-user-id="${this._escapeHtml(l.id)}"
             data-is-own="${u ? "true" : "false"}"
             data-requires-pin="${g ? "true" : "false"}">
          
          <div class="argus-profile-circle">
            ${f}
            ${_}
          </div>
          <div class="argus-profile-label">
            <div class="p-name">${this._escapeHtml(l.name)}</div>
            <div class="p-role">${this._escapeHtml(m)}</div>
          </div>
        </div>
      `;
        }).join("")}
      </div>
    `, p = `
      <button id="argus-exit-ha" style="
        position: absolute; bottom: 40px;
        background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
        padding: 12px 24px; border-radius: 20px; color: #fff; cursor: pointer;
        font-size: 0.9rem; font-weight: 600; transition: background 0.2s;
      ">
        ← ${this._escapeHtml(t("exit_to_ha"))}
      </button>
    `;
        r.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        ${s}
        ${d}
      </div>
      ${p}
    `, this.shadowRoot.appendChild(r), r.querySelector("#argus-exit-ha").addEventListener("click", () => {
          window.location.assign("/");
        }), r.querySelectorAll(".argus-profile-item").forEach((l) => {
          l.addEventListener("click", async () => {
            if (r.dataset.processing) return;
            r.dataset.processing = "1";
            const u = l.getAttribute("data-user-id"), g = l.getAttribute("data-is-own") === "true", m = l.getAttribute("data-requires-pin") === "true", f = i.find((_) => _.id === u);
            if (g)
              if (m)
                r.remove(), this._showTvOSPinPrompt(f);
              else
                try {
                  await this._send("argus/select_profile", { argus_user_id: u }), r.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(f);
                } catch (_) {
                  r.dataset.processing = "", alert(_.message || "Error seleccionando perfil");
                }
            else {
              if (!m) {
                const _ = l;
                _.style.animation = "none", _.offsetHeight, _.style.animation = "argus-shake 0.3s ease", r.dataset.processing = "";
                return;
              }
              r.remove(), this._showTvOSPinPrompt(f);
            }
          }), l.addEventListener("keydown", (u) => {
            (u.key === "Enter" || u.key === " ") && l.dispatchEvent(new Event("click"));
          });
        });
      } finally {
        this._isRenderingLogin = !1;
      }
    }
  }
  async _showTvOSPinPrompt(e) {
    const t = (p) => this._t(p), i = document.createElement("div");
    i.className = "argus-pin-prompt", i.innerHTML = `
      <div class="argus-pin-card">
        <h3>${this._escapeHtml(t("profile_needs_pin"))}</h3>
        <div class="pin-sub">Ingresa el PIN de ${this._escapeHtml(e.name)}</div>
        
        <input type="password" id="pin-input" class="argus-pin-input" readonly
               placeholder="••••" inputmode="numeric" />
               
        <div class="argus-numpad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => `<button data-digit="${p}">${p}</button>`).join("")}
          <button id="pin-cancel" style="font-size:0.8rem; background:rgba(255,59,48,0.15); color:#ff453a; border-color:rgba(255,59,48,0.2);">X</button>
          <button data-digit="0">0</button>
          <button id="pin-del" style="font-size:1.1rem; color:#ff9f0a;">⌫</button>
        </div>
        
        <div class="argus-pin-actions">
          <button id="pin-enter" style="background:rgba(52,199,89,0.25); border-color:rgba(52,199,89,0.4); color:#34c759;">
            Acceder
          </button>
        </div>
        <div id="pin-error" style="color:#ff453a; font-size:12px; margin-top:8px; min-height:16px;"></div>
      </div>
    `, this.shadowRoot.appendChild(i);
    const o = i.querySelector("#pin-input"), r = i.querySelector("#pin-error"), s = i.querySelector(".argus-pin-card"), n = i.querySelector(".argus-numpad");
    n.querySelectorAll("[data-digit]").forEach((p) => {
      const c = p.getAttribute("data-digit");
      p.addEventListener("click", () => {
        o.value.length < 8 && (o.value += c);
      });
    }), n.querySelector("#pin-del").addEventListener("click", () => {
      o.value = o.value.slice(0, -1);
    }), i.querySelector("#pin-enter").addEventListener("click", () => d()), i.querySelector("#pin-cancel").addEventListener("click", () => {
      i.remove(), this._renderLoginScreen({ users: this._config?.profiles || [] });
    });
    const d = async () => {
      if (!i.dataset.processing) {
        if (i.dataset.processing = "1", !o.value) {
          i.dataset.processing = "";
          return;
        }
        try {
          await this._send("argus/verify_access_pin", {
            argus_user_id: e.id,
            pin: o.value
          }), i.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(e);
        } catch (p) {
          i.dataset.processing = "", r.textContent = p.message || t("invalid_pin_msg"), s.style.animation = "none", s.offsetHeight, s.style.animation = "argus-shake 0.3s ease", o.value = "";
        }
      }
    };
    o.addEventListener("keydown", (p) => {
      p.key === "Enter" && d();
    });
  }
  async _runProfileWelcomeAnimation(e) {
    this._nukeAllLoginOverlays();
    const t = document.createElement("div");
    t.className = "argus-welcome-screen active-anim", t.style.position = "fixed", t.style.inset = "0", t.style.background = "rgba(0,0,0,0.88)", t.style.display = "flex", t.style.flexDirection = "column", t.style.alignItems = "center", t.style.justifyContent = "center", t.style.zIndex = "10000", t.style.pointerEvents = "none";
    const i = e.picture ? `<img src="${this._escapeHtml(e.picture)}" alt="" />` : this._escapeHtml(e.name.substring(0, 2).toUpperCase());
    t.innerHTML = `
      <div class="argus-welcome-avatar" id="welcome-avatar-flying">
        ${i}
      </div>
      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t("welcome_greeting") || "Bienvenido,")}</p>
        <h1 class="wname">${this._escapeHtml(e.display_name || e.name)}</h1>
      </div>
    `, this.shadowRoot.appendChild(t);
    let o = Promise.resolve();
    this._dashboardLoading || (this._dashboardLoading = !0, o = this._load().catch((m) => console.error("Load error during animation:", m)).finally(() => {
      this._dashboardLoading = !1;
    }));
    const r = t.querySelector("#welcome-avatar-flying"), s = t.querySelector("#welcome-text-anim");
    r.style.transform = "scale(0.8)", r.style.opacity = "0", s.style.opacity = "0", s.style.transform = "translateY(15px)", await new Promise((m) => requestAnimationFrame(m)), r.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease", r.style.transform = "scale(1)", r.style.opacity = "1", s.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.5s ease 0.15s", s.style.transform = "translateY(0)", s.style.opacity = "1", await new Promise((m) => setTimeout(m, 1500)), s.style.transition = "opacity 0.3s ease", s.style.opacity = "0";
    const n = r.getBoundingClientRect(), d = this.shadowRoot.querySelector("#hero-profile-container .user-avatar");
    let p, c, l = 0.5;
    if (d) {
      const m = d.getBoundingClientRect();
      p = m.left + m.width / 2, c = m.top + m.height / 2, l = m.width / n.width;
    } else
      p = window.innerWidth - 60, c = 58;
    const u = p - (n.left + n.width / 2), g = c - (n.top + n.height / 2);
    r.style.transition = "transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.45s ease 0.2s", r.style.transform = `translate(${u}px, ${g}px) scale(${l})`, t.style.transition = "background-color 0.6s ease 0.1s", t.style.backgroundColor = "transparent", await new Promise((m) => setTimeout(m, 700)), await o, this._nukeAllLoginOverlays();
  }
  _nukeAllLoginOverlays() {
    this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen, .argus-pin-prompt").forEach((t) => {
      t.style.transition = "none", t.style.opacity = "0", t.style.display = "none", t.remove();
    });
    const e = this.shadowRoot?.getElementById("bootstrap-overlay");
    e && (e.style.backdropFilter = "none", e.style.webkitBackdropFilter = "none", e.style.display = "none", e.style.opacity = "0", e.style.pointerEvents = "none");
  }
  _initWidgetGrid() {
    try {
      this._widgetConfig = JSON.parse(localStorage.getItem("argus-widgets-v1")) || [
        { id: "activity", size: "M", hidden: !1 },
        { id: "modes", size: "M", hidden: !1 },
        { id: "automations", size: "M", hidden: !1 },
        { id: "access", size: "M", hidden: !1 },
        { id: "backup", size: "S", hidden: !1 },
        { id: "github", size: "S", hidden: !1 }
      ];
    } catch {
      this._widgetConfig = [
        { id: "activity", size: "M", hidden: !1 },
        { id: "modes", size: "M", hidden: !1 },
        { id: "automations", size: "M", hidden: !1 },
        { id: "access", size: "M", hidden: !1 },
        { id: "backup", size: "S", hidden: !1 },
        { id: "github", size: "S", hidden: !1 }
      ];
    }
    const e = this.shadowRoot.getElementById("widget-grid");
    if (!e) return;
    const t = Array.from(e.children).filter(
      (i) => i.classList.contains("panel") && !i.classList.contains("dashboard-instances")
    );
    t.forEach((i) => {
      const o = i.id.replace("w-", "");
      if (!i.querySelector(".panel-edit-overlay")) {
        const r = document.createElement("div");
        r.className = "panel-edit-overlay";
        const s = document.createElement("div");
        s.className = "widget-controls";
        const n = document.createElement("div");
        n.className = "widget-controls-title";
        const d = i.querySelector("h2")?.textContent;
        n.textContent = d ? `Widget: ${d}` : `Widget: ${o.toUpperCase()}`, s.appendChild(n);
        const p = document.createElement("div");
        p.className = "widget-drag-handle", p.innerHTML = "⋮⋮ Arrastrar", p.title = "Arrastrar para mover";
        const c = document.createElement("div");
        c.className = "widget-sizes", ["S", "M", "L", "XL"].forEach((u) => {
          const g = document.createElement("button");
          g.className = "widget-size-btn", g.textContent = u, g.dataset.size = u, g.addEventListener("click", (m) => {
            m.stopPropagation(), m.preventDefault(), this._changeWidgetSize(o, u);
          }), c.appendChild(g);
        });
        const l = document.createElement("button");
        l.className = "widget-toggle-btn", l.textContent = "Ocultar", l.addEventListener("click", (u) => {
          u.stopPropagation(), u.preventDefault(), this._toggleWidgetVisibility(o);
        }), s.appendChild(p), s.appendChild(c), s.appendChild(l), r.appendChild(s), i.appendChild(r);
      }
    }), this._renderWidgetLayout(), this._bindWidgetDragEvents(t);
  }
  _renderWidgetLayout() {
    const e = this.shadowRoot.getElementById("widget-grid");
    if (!e) return;
    const t = new Map((this._widgetConfig || []).map((o, r) => [o.id, { ...o, idx: r }])), i = Array.from(e.children).filter(
      (o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")
    );
    i.sort((o, r) => {
      const s = t.get(o.id.replace("w-", "")) || { idx: 99 }, n = t.get(r.id.replace("w-", "")) || { idx: 99 };
      return s.idx - n.idx;
    }), i.forEach((o) => {
      e.appendChild(o);
      const r = o.id.replace("w-", ""), s = t.get(r);
      if (s) {
        o.setAttribute("data-size", s.size), o.style.display = s.hidden ? "none" : "";
        const n = o.querySelector(".panel-edit-overlay");
        if (n) {
          n.querySelectorAll(".widget-size-btn").forEach((p) => {
            p.classList.toggle("active", p.dataset.size === s.size);
          });
          const d = n.querySelector(".widget-toggle-btn");
          d && (d.textContent = s.hidden ? "Mostrar" : "Ocultar", d.style.background = s.hidden ? "rgba(52,199,89,.85)" : "rgba(220,38,38,.85)");
        }
      }
    }), e.classList.toggle("editing", !!this._widgetEditing);
  }
  _bindWidgetDragEvents(e) {
    const t = this.shadowRoot.getElementById("widget-grid");
    if (!t) return;
    (e || Array.from(t.children).filter(
      (o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")
    )).forEach((o) => {
      o._dragBound || (o._dragBound = !0, o.addEventListener("dragstart", (r) => {
        if (!this._widgetEditing) {
          r.preventDefault();
          return;
        }
        o.classList.add("dragging"), r.dataTransfer.setData("text/plain", o.id), r.dataTransfer.effectAllowed = "move";
      }), o.addEventListener("dragend", () => {
        o.classList.remove("dragging"), this._saveWidgetLayout();
      }), o.addEventListener("dragover", (r) => {
        if (!this._widgetEditing) return;
        r.preventDefault();
        const s = t.querySelector(".dragging");
        if (!s || s === o) return;
        const n = o.getBoundingClientRect();
        r.clientY - n.top > n.height / 2 ? o.after(s) : o.before(s);
      }));
    });
  }
  _saveWidgetLayout() {
    const e = this.shadowRoot.getElementById("widget-grid");
    if (!e) return;
    const t = Array.from(e.children).filter(
      (i) => i.classList.contains("panel") && !i.classList.contains("dashboard-instances")
    );
    this._widgetConfig = t.map((i) => ({
      id: i.id.replace("w-", ""),
      size: i.getAttribute("data-size") || "M",
      hidden: i.style.display === "none"
    }));
    try {
      localStorage.setItem("argus-widgets-v1", JSON.stringify(this._widgetConfig));
    } catch {
    }
  }
  _toggleWidgetEditing() {
    this._widgetEditing = !this._widgetEditing, this.shadowRoot.getElementById("widget-grid") && (this._initWidgetGrid(), this._renderWidgetLayout()), this._applyTranslations();
  }
  _changeWidgetSize(e, t) {
    const i = (this._widgetConfig || []).find((o) => o.id === e);
    i && (i.size = t, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
  _toggleWidgetVisibility(e) {
    const t = (this._widgetConfig || []).find((i) => i.id === e);
    t && (t.hidden = !t.hidden, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
}
customElements.define("argus-panel-v2018", Xt);
function Qe(a) {
  const e = a._hass?.auth?.accessToken;
  return e ? { Authorization: `Bearer ${e}` } : {};
}
function Jt(a) {
  const e = a?.prototype;
  !e || e.__argusMediaClient || (e.__argusMediaClient = !0, e._loadUploadedFiles = async function() {
    try {
      const t = await fetch("/api/argus/media", { headers: Qe(this), credentials: "same-origin" });
      if (!t.ok) throw new Error(`HTTP ${t.status}`);
      const i = await t.json();
      this._uploadedFiles = Array.isArray(i.files) ? i.files : [];
    } catch (t) {
      console.error("Private Argus media listing failed", t), this._uploadedFiles = [];
    }
    this._renderUploadedFiles?.();
  }, e._deleteUploadedFile = async function(t) {
    try {
      const i = await fetch(`/api/argus/media/${encodeURIComponent(t)}`, { method: "DELETE", headers: Qe(this), credentials: "same-origin" });
      if (!i.ok) throw new Error(`HTTP ${i.status}`);
      this._uploadedFiles = (this._uploadedFiles ?? []).filter((r) => r.name !== t);
      const o = [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]];
      for (const [r, s] of o) {
        const n = this.shadowRoot.getElementById(r);
        n?.value.includes(`/${t}?`) && (n.value = "", this[s] = "");
      }
      this._renderUploadedFiles?.();
    } catch (i) {
      const o = i instanceof Error ? i.message : String(i);
      console.error("Private Argus media deletion failed", i), window.alert(this._format?.("delete_file_error", { error: o }) ?? o);
    }
  });
}
const ae = (a, e) => a.getElementById(e), oe = (a, e, t) => a._t?.(e) ?? t;
function Qt(a) {
  const e = a?.prototype;
  !e || e.__argusSecurityClient || (e.__argusSecurityClient = !0, e._savePin = async function() {
    const t = this.shadowRoot.getElementById("pin-status"), o = this._dashboard?.entries?.[0], r = ae(this.shadowRoot, "current-pin")?.value ?? "", s = ae(this.shadowRoot, "new-pin-1")?.value ?? "", n = ae(this.shadowRoot, "new-pin-2")?.value ?? "", d = (p) => {
      t && (t.textContent = p, t.className = "status err");
    };
    if (!o?.entry_id) return d("No Argus config entry is available");
    if (o.pin_configured && !r) return d(oe(this, "pin_incorrect", "PIN incorrecto"));
    if (s !== n) return d(oe(this, "pin_mismatch", "Los PIN no coinciden"));
    if (s && !/^\d{4,12}$/.test(s)) return d("PIN: se requieren entre 4 y 12 dígitos");
    if (!this._send) return d("Argus WebSocket is unavailable");
    try {
      await this._send("argus/update_master_pin", { entry_id: o.entry_id, pin: s, current_pin: r }), o.pin_configured = !!s, t && (t.textContent = s ? oe(this, "pin_updated", "PIN actualizado") : oe(this, "pin_deleted", "PIN eliminado"), t.className = "status ok");
      for (const p of ["current-pin", "new-pin-1", "new-pin-2"]) {
        const c = ae(this.shadowRoot, p);
        c && (c.value = "");
      }
      this._syncAccessSummary?.(), window.setTimeout(() => {
        this._load?.();
      }, 800);
    } catch (p) {
      d(p instanceof Error ? p.message : String(p));
    }
  }, e._handleForgotPin = function() {
    const t = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", i = this.shadowRoot.getElementById("pin-status");
    i ? (i.textContent = t, i.className = "status err") : window.alert(t);
  });
}
const Zt = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block;image-rendering:auto}
.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
.argus-overlay{position:absolute;inset:0;pointer-events:none}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;
function ei(a) {
  const e = a.__argusWebgl;
  if (!e) return;
  cancelAnimationFrame(e.frame), e.observer?.disconnect(), document.removeEventListener("visibilitychange", e.visibility), e.gl.deleteBuffer(e.buffer), e.gl.deleteProgram(e.program);
  const t = e.gl.getExtension("WEBGL_lose_context");
  t && t.loseContext(), e.overlay?.remove(), delete a.__argusWebgl;
}
function ti(a) {
  const e = a?.prototype;
  if (!e || e.__argusPremiumExperience) return;
  e.__argusPremiumExperience = !0;
  const t = e.connectedCallback;
  e.connectedCallback = function() {
    const o = t?.call(this);
    return queueMicrotask(() => {
      if (this.shadowRoot && !this.shadowRoot.getElementById("argus-premium-style")) {
        const r = document.createElement("style");
        r.id = "argus-premium-style", r.textContent = Zt, this.shadowRoot.append(r);
      }
    }), o;
  };
  const i = e.disconnectedCallback;
  e.disconnectedCallback = function() {
    const o = this.shadowRoot;
    return o && o.querySelectorAll(".wx-webgl").forEach(ei), i?.call(this);
  };
}
const Oe = "argus-motion-system-v2049", le = "__argusMotionV2049", Ze = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", ke = `
:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;
function ii(a) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
  const e = String(a._argusPerfProfile || a.dataset?.argusPerf || "").toLowerCase();
  return e === "essential" || a.classList.contains("argus-perf-essential") ? "essential" : e === "light" ? "light" : "full";
}
function et(a) {
  if (a[le]) return a[le];
  const e = {
    panel: a,
    active: !1,
    observer: null,
    observerFrame: 0,
    rafs: /* @__PURE__ */ new Set(),
    timers: /* @__PURE__ */ new Set(),
    cleanups: /* @__PURE__ */ new Set(),
    pressed: /* @__PURE__ */ new Set(),
    profileControl: null,
    api: null
  };
  return Object.defineProperty(a, le, { value: e, writable: !0, configurable: !0 }), e;
}
function ai(a, e) {
  const t = requestAnimationFrame(() => {
    a.rafs.delete(t), a.active && e();
  });
  return a.rafs.add(t), t;
}
function Ae(a, e, t, i, o) {
  e.addEventListener(t, i, o), a.cleanups.add(() => e.removeEventListener(t, i, o));
}
function We(a) {
  const e = a.shadowRoot;
  if (!e) return;
  let t = e.getElementById(Oe);
  t ? t.textContent !== ke && (t.textContent = ke) : (t = document.createElement("style"), t.id = Oe, t.textContent = ke, e.appendChild(t));
}
function X(a) {
  a.profileControl?.classList.remove("is-entering"), a.profileControl = null, a.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function tt(a, e) {
  X(a), a.profileControl = e, e?.classList.add("is-entering"), a.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function oi(a) {
  a.observer || !a.panel.shadowRoot || (a.observer = new MutationObserver((e) => {
    e.some((t) => [...t.addedNodes].some((i) => i instanceof Element && i.id !== Oe)) && (a.observerFrame || (a.observerFrame = ai(a, () => {
      a.observerFrame = 0, We(a.panel);
    })));
  }), a.observer.observe(a.panel.shadowRoot, { childList: !0, subtree: !0, attributes: !1 }));
}
function ri(a) {
  const e = a.panel.shadowRoot;
  if (!e) return;
  const t = (i) => {
    i && (i.classList.remove("argus-motion-press"), a.pressed.delete(i));
  };
  Ae(a, e, "pointerdown", (i) => {
    if (ii(a.panel) === "essential") return;
    const r = i.target?.closest?.(Ze);
    !r || r.disabled || (r.classList.add("argus-motion-press"), a.pressed.add(r));
  }, !0), ["pointerup", "pointercancel", "pointerleave"].forEach((i) => Ae(a, e, i, (o) => {
    const r = o.target;
    t(r?.closest?.(Ze));
  }, !0)), Ae(a, e, "click", (i) => {
    const o = i.target, r = o?.closest?.(".user-card");
    r && r.dataset.isOwn === "true" && r.dataset.pinRequired !== "true" && tt(a, r), o?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && tt(a, o.closest("button")), o?.closest?.("#btn-cancel-login") && X(a);
  }, !0);
}
function Se(a) {
  a.active || !a.panel.shadowRoot || (a.active = !0, We(a.panel), ri(a), oi(a), a.api = Object.freeze({ animateView: () => {
  }, stagger: () => {
  }, transitionBackground: () => () => {
  }, animateDashboard: () => {
  } }));
}
function si(a) {
  a.active = !1, a.observer?.disconnect(), a.observer = null, a.observerFrame && cancelAnimationFrame(a.observerFrame), a.observerFrame = 0, a.rafs.forEach(cancelAnimationFrame), a.rafs.clear(), a.timers.forEach(clearTimeout), a.timers.clear(), a.cleanups.forEach((e) => e()), a.cleanups.clear(), a.pressed.forEach((e) => e.classList.remove("argus-motion-press")), a.pressed.clear(), X(a);
}
function ni(a) {
  const e = a?.prototype;
  if (!e || e.__argusMotionSystemV2049) return;
  e.__argusMotionSystemV2049 = !0;
  const t = e.connectedCallback, i = e.disconnectedCallback, o = e._load;
  e.connectedCallback = function() {
    const r = t?.call(this), s = et(this);
    return this.shadowRoot ? Se(s) : queueMicrotask(() => Se(s)), r;
  }, e.disconnectedCallback = function() {
    const r = this[le];
    return r && si(r), i?.call(this);
  }, e._load = async function(...r) {
    const s = et(this);
    try {
      const n = await o?.apply(this, r);
      return !s.active && this.isConnected && Se(s), We(this), X(s), n;
    } catch (n) {
      throw X(s), n;
    }
  };
}
const it = "__argusStableRenderV2050";
function O(a) {
  const e = a.shadowRoot;
  if (!e) return;
  const t = /* @__PURE__ */ new Date(), i = t.toLocaleTimeString(a._getLocale?.() || void 0, { hour: "2-digit", minute: "2-digit" }), o = t.toLocaleDateString(a._getLocale?.() || void 0, { weekday: "short", month: "short", day: "numeric" }), r = e.getElementById("hero-clock-time"), s = e.getElementById("hero-clock-date");
  r && r.textContent !== i && (r.textContent = i), s && s.textContent !== o && (s.textContent = o), e.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((n) => {
    n && n.textContent !== i && (n.textContent = i);
  });
}
function at(a, e, t, i, o, r, s) {
  return [
    e?.entity_id || "",
    e?.entry_id || "",
    t || "",
    r ? "1" : "0",
    s ? "1" : "0",
    o || "",
    i?.arming_waiting_for_sensors ? "1" : "0",
    JSON.stringify(i?.arming_blocking_sensors || []),
    JSON.stringify(i?.triggered_sensors || []),
    a._backgroundMode || "",
    a._panelBgFile || "",
    a._getWeatherEntity?.()?.state || "",
    a._hass?.states?.["sun.sun"]?.state || "",
    a._getDisplayedTemperature?.() || "",
    a._homeName || "",
    a._kioskLocked ? "1" : "0"
  ].join("|");
}
function Ee(a, e) {
  !e || e._argusDelegated || (e._argusDelegated = !0, e.addEventListener("click", (t) => {
    const i = t.target;
    if (i.closest?.('button[data-action="unlock-kiosk"]')) {
      a._requestKioskUnlock?.();
      return;
    }
    const r = i.closest?.('button[data-action="sos"]');
    if (r) {
      a._sosEntryIdx = Number(r.dataset.idx), a.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
      return;
    }
    const s = i.closest?.('button[data-action="stop-sos"]');
    if (s) {
      a._stopSOS?.(Number(s.dataset.idx));
      return;
    }
    const n = i.closest?.("button[data-fullscreen]");
    if (n) {
      a._toggleFullscreen?.(n.closest(".entry"));
      return;
    }
    if (i.closest?.("button[data-exit-fullscreen]")) {
      a._exitFullscreenView?.();
      return;
    }
    const p = i.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])');
    p?.dataset?.idx != null && p?.dataset?.action && a._handleAction?.(p.dataset.idx, p.dataset.action);
  }));
}
function li(a) {
  const e = a?.prototype;
  if (!e || e[it]) return;
  e[it] = !0;
  const t = e._renderEntries, i = Object.getOwnPropertyDescriptor(e, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "hass");
  e._updateLiveClocks = function() {
    O(this);
  }, e._startClock = function() {
    this._clockInterval && clearInterval(this._clockInterval), O(this), this._clockInterval = setInterval(() => {
      this._dashboard && O(this);
    }, 1e3);
  }, e._renderEntries = function(n = !1) {
    const d = this.shadowRoot;
    if (!d) return t?.call(this, n);
    const p = d.getElementById("entries"), c = this._dashboard?.entries || [];
    if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !p || !c.length) {
      const f = t?.call(this, n);
      return Ee(this, d.getElementById("entries")), O(this), f;
    }
    const l = [...p.querySelectorAll("article.entry")];
    if (!(n || l.length !== c.length || !l.every((f) => f.querySelector(".entry-content")))) {
      let f = !0;
      for (let _ = 0; _ < c.length; _++) {
        const b = c[_], v = this._hass?.states?.[b.entity_id], x = v?.state || b.state || "unavailable", h = v?.attributes || {}, y = !!h.argus_panic_active, k = this._fullscreenIdx === _ || !!this._kioskLocked && (this._kioskEntryId === b.entry_id || c.length === 1), E = String(x).replace("armed_", "");
        let S = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[E] || this._ui?.modes?.[E] || {}, A = S.sensors || [];
        if (x === "disarmed" || !A.length) {
          const N = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, z = /* @__PURE__ */ new Set();
          ["away", "home", "night", "vacation"].forEach(($) => {
            (N[$]?.sensors || []).forEach((M) => z.add(M));
          }), A = [...z];
        }
        const R = S.bypassed_sensors || [], T = A.filter((N) => !R.includes(N)).map((N) => {
          const z = this._hass?.states?.[N], $ = z?.attributes?.battery_level ?? z?.attributes?.battery_percentage ?? "";
          return `${N}:${z?.state || ""}:${$}`;
        }).join(","), H = at(this, b, x, h, T, y, k);
        if (this._instanceSignatures.get(_) !== H) {
          f = !1;
          break;
        }
      }
      if (f) {
        const b = c.map((h) => this._hass?.states?.[h.entity_id]?.state || "unavailable").some((h) => String(h).startsWith("armed") || h === "triggered" || h === "pending"), v = d.getElementById("global-status");
        if (v) {
          const h = (k) => this._t?.(k) || k, y = `<span class="badge ${b ? "armed_away" : "disarmed"}">${h(b ? "system_armed" : "system_disarmed")}</span>`;
          v.innerHTML !== y && (v.innerHTML = y);
        }
        const x = d.getElementById("hero-security-pill");
        if (x) {
          const h = (E) => this._t?.(E) || E, y = h(b ? "system_armed" : "system_disarmed"), k = `<i class="hero-live" style="background:${b ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${b ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(y) || y}`;
          x.innerHTML !== k && (x.innerHTML = k);
        }
        O(this), Ee(this, p);
        return;
      }
    }
    const g = t?.call(this, n === !0 ? !0 : void 0);
    return [...p.querySelectorAll("article.entry")].forEach((f, _) => {
      const b = c[_];
      if (!b) return;
      const v = this._hass?.states?.[b.entity_id], x = v?.state || b.state || "unavailable", h = v?.attributes || {}, y = !!h.argus_panic_active, k = this._fullscreenIdx === _ || !!this._kioskLocked && (this._kioskEntryId === b.entry_id || c.length === 1), E = String(x).replace("armed_", "");
      let S = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[E] || this._ui?.modes?.[E] || {}, A = S.sensors || [];
      if (x === "disarmed" || !A.length) {
        const N = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, z = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach(($) => {
          (N[$]?.sensors || []).forEach((M) => z.add(M));
        }), A = [...z];
      }
      const R = S.bypassed_sensors || [], T = A.filter((N) => !R.includes(N)).map((N) => {
        const z = this._hass?.states?.[N], $ = z?.attributes?.battery_level ?? z?.attributes?.battery_percentage ?? "";
        return `${N}:${z?.state || ""}:${$}`;
      }).join(","), H = at(this, b, x, h, T, y, k);
      this._instanceSignatures.set(_, H), f.dataset.renderSig = H;
    }), Ee(this, p), O(this), g;
  };
  const o = i?.get, r = i?.set;
  r && Object.defineProperty(e, "hass", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return o ? o.call(this) : this._hass;
    },
    set: function(n) {
      const d = this._hass;
      if (d && this._dashboard?.entries?.length) {
        const p = /* @__PURE__ */ new Set(), c = (x) => {
          !x || typeof x != "object" || (Array.isArray(x.sensors) && x.sensors.forEach((h) => p.add(h)), Object.values(x).forEach((h) => {
            h && typeof h == "object" && c(h);
          }));
        };
        c(this._ui?.modes);
        const l = d.language !== n.language;
        l && !this._manualLang && this._refreshLocalizedUi?.();
        const u = this._dashboard.entries.some((x) => x.entity_id && d.states[x.entity_id]?.state !== n.states[x.entity_id]?.state), g = [...p].some(
          (x) => d.states[x]?.state !== n.states[x]?.state || d.states[x]?.attributes?.battery_level !== n.states[x]?.attributes?.battery_level || d.states[x]?.attributes?.battery_percentage !== n.states[x]?.attributes?.battery_percentage
        ), m = this._temperatureSource === "auto" ? null : this._temperatureSource, f = m && d.states[m]?.state !== n.states[m]?.state, _ = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(n.states).find((x) => x.entity_id?.startsWith("weather."))?.entity_id, b = _ && (d.states[_]?.state !== n.states[_]?.state || d.states[_]?.attributes?.temperature !== n.states[_]?.attributes?.temperature), v = u || g || f || b || l;
        this._hass = n, this._updateTheme?.(), v ? (this._renderEntries?.(l), this._renderActivityLog?.()) : O(this);
        return;
      }
      return r.call(this, n);
    }
  });
  const s = e.connectedCallback;
  e.connectedCallback = function() {
    const n = s?.call(this);
    return this._startClock?.(), n;
  };
}
const ot = "argus-v2050-alarm-visuals", di = {
  armed_home: /EN CASA|HOME/i,
  armed_away: /AUSENTE|AWAY/i,
  armed_night: /NOCHE|NIGHT/i,
  armed_vacation: /VACACIONES|VACATION/i
};
function ci(a, e) {
  const t = e?.entity_id || e?.alarm_entity_id;
  return String(e?.state || e?.alarm_state || e?.attributes?.state || a._hass?.states?.[t]?.state || "").toLowerCase();
}
function Ie(a, e, t) {
  a.classList.toggle("argus-action-active", t), a.dataset.argusAction = e;
  const i = e === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : e === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  a.style.setProperty("background", t ? i : "rgba(255,255,255,.105)", "important"), a.style.setProperty("background-image", t ? i : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), a.style.setProperty("border", t ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), a.style.setProperty("box-shadow", t ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important");
}
function pi(a) {
  const e = a.shadowRoot;
  if (!e) return;
  let t = e.getElementById(ot);
  t || (t = document.createElement("style"), t.id = ot, e.appendChild(t)), t.textContent = `
.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important}
.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}
.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}
.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important}
@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}
@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}
@keyframes argusTriggeredSensor{0%,100%{opacity:.62}50%{opacity:1}}
`;
}
function Ce(a) {
  if (!a.shadowRoot) return;
  pi(a);
  const e = a.shadowRoot.querySelectorAll(".entry");
  Array.from(e).forEach((t, i) => {
    const o = a._dashboard?.entries?.[i] || {}, r = o.attributes || a._hass?.states?.[o.entity_id]?.attributes || {}, s = ci(a, o), n = r.arming_blocking_sensors || [], d = s === "arming" || !!r.arming_waiting_for_sensors || !!n.length;
    t.classList.toggle("argus-arming", d), t.classList.toggle("argus-waiting", d);
    const p = t.querySelector(".entry-icon");
    let c = t.querySelector(".argus-shield-status");
    d && p ? (c || (c = document.createElement("span"), c.className = "argus-shield-status", p.insertAdjacentElement("afterend", c)), c.textContent = n.length ? `ESPERANDO ${n.length} SENSOR(ES)` : s === "arming" ? "ARMANDO…" : "ESPERANDO SENSORES") : c?.remove();
    const l = t.querySelector(".liquid-stack");
    if (l) {
      let m = l.querySelector(".argus-disarm-btn");
      if (!m) {
        m = document.createElement("button"), m.type = "button", m.className = "liquid-btn argus-disarm-btn", m.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", m.onclick = async () => {
          if (o.entry_id) {
            m.disabled = !0;
            try {
              await a._send?.("argus/perform_alarm_action", { entry_id: o.entry_id, action: "disarm" }), await a._load?.();
            } finally {
              m.disabled = !1;
            }
          }
        };
        const f = Array.from(l.children).find((_) => /SOS|PÁNICO|PANIC/i.test(_.textContent || ""));
        f ? l.insertBefore(m, f) : l.appendChild(m);
      }
      Array.from(l.querySelectorAll(".liquid-btn,button")).forEach((f) => {
        const _ = f, b = String(_.textContent || "");
        if (/SOS|PÁNICO|PANIC/i.test(b)) Ie(_, "sos", !!r.argus_panic_active);
        else if (/DESARMAR|DISARM|OFF/i.test(b)) Ie(_, "disarm", s === "disarmed");
        else {
          const v = Object.entries(di).find(([, x]) => x.test(b));
          v && Ie(_, v[0], s === v[0]);
        }
      });
    }
    const u = new Set((r.triggered_sensors || []).map(String)), g = new Set(n.map((m) => String(a._dashboard?.available_entities?.find((f) => f.entity_id === m)?.name || m).toLocaleLowerCase()));
    t.querySelectorAll(".console-sensor").forEach((m) => {
      const f = String(m.querySelector(".console-sensor-name")?.textContent || m.textContent || "").toLocaleLowerCase(), _ = Array.from(g).some((v) => f.includes(v) || v.includes(f)), b = Array.from(u).some((v) => f.includes(String(v).toLocaleLowerCase()));
      m.classList.toggle("argus-blocking", _), m.classList.toggle("argus-triggered-sensor", b);
    });
  });
}
function ui(a) {
  const e = a?.prototype;
  if (!e || e.__v2050AlarmVisuals) return;
  e.__v2050AlarmVisuals = !0;
  const t = e.connectedCallback, i = e._load, o = e._renderEntries;
  e.connectedCallback = function() {
    const r = t?.call(this);
    return Ce(this), r;
  }, e._load = async function(...r) {
    const s = await i?.apply(this, r);
    return Ce(this), s;
  }, e._renderEntries = function(...r) {
    const s = o?.apply(this, r);
    return Ce(this), s;
  };
}
const rt = "argus-v2049-responsive-widgets", mi = '#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"],.users-modal,.access-modal,.argus-users-modal';
function gi(a) {
  const e = a.shadowRoot;
  if (!e) return;
  let t = e.getElementById(rt);
  t || (t = document.createElement("style"), t.id = rt, e.appendChild(t)), t.textContent = `
#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}
#w-access>.panel-head,#w-access>.access-summary,#w-access>.tabs{flex:0 0 auto!important}
#w-access :is(.panel-body,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"]){flex:1 1 auto!important;min-width:0!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;scrollbar-gutter:stable!important;box-sizing:border-box!important}
:is(.users-modal,.access-modal,.argus-users-modal,.modal,[role="dialog"]){max-width:min(94vw,760px)!important;max-height:min(88dvh,720px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}
/* Backup: title plus an explicit responsive button grid. */
#w-backup{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-auto-rows:max-content!important;place-content:center!important;align-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:16px!important;gap:12px!important;text-align:center!important}
#w-backup>h2,#w-backup>.panel-head,#w-backup>.panel-title{grid-column:1/-1!important;width:100%!important;margin:0 0 2px!important;text-align:center!important}
#w-backup>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;box-sizing:border-box!important;margin-top:0!important;margin-bottom:0!important}
#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-column:1/-1!important;gap:12px!important;width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}
#w-backup :is(button,a,ha-button,mwc-button){width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;padding-inline:8px!important;white-space:normal!important;overflow-wrap:anywhere!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important;font-size:clamp(11px,1.1vw,14px)!important}
/* Support: compact centered group; no inherited space-between or auto margins. */
#w-github{display:grid!important;grid-template-columns:minmax(0,1fr)!important;grid-auto-rows:max-content!important;place-content:center!important;justify-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:18px!important;row-gap:18px!important;text-align:center!important}
#w-github>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important}
#w-github :is(h2,.panel-head,.panel-title){width:100%!important;margin:0!important;text-align:center!important}
#w-github :is(.panel-body,.actions,.support-actions,.button-row,.controls){display:grid!important;place-items:center!important;width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}
#w-github :is(button,a,ha-button,mwc-button){width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important}
#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay{position:absolute!important;inset:0!important;margin:0!important;max-width:none!important}
@media(max-width:460px){#w-backup{grid-template-columns:1fr!important;overflow-y:auto!important}#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){grid-template-columns:1fr!important}#w-backup :is(button,a,ha-button,mwc-button){font-size:13px!important}#w-github{padding:14px!important;row-gap:12px!important}}
`;
}
function hi(a) {
  const e = a.shadowRoot;
  e && e.querySelectorAll(mi).forEach((t) => {
    const i = t;
    i.style.touchAction = "pan-y", i.style.setProperty("-webkit-overflow-scrolling", "touch"), i.scrollHeight > i.clientHeight && (i.style.overflowY = "auto");
  });
}
function re(a) {
  gi(a), hi(a);
}
function _i(a) {
  const e = a?.prototype;
  if (!e || e.__v2049ResponsiveWidgets) return;
  e.__v2049ResponsiveWidgets = !0;
  const t = e.connectedCallback, i = e.disconnectedCallback, o = e._load, r = e._renderEntries;
  e.connectedCallback = function() {
    const s = t?.call(this);
    return re(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
      this._v2049Frame || (this._v2049Frame = requestAnimationFrame(() => {
        this._v2049Frame = 0, re(this);
      }));
    }), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), s;
  }, e.disconnectedCallback = function() {
    return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, i?.call(this);
  }, e._load = async function(...s) {
    const n = await o?.apply(this, s);
    return re(this), n;
  }, e._renderEntries = function(...s) {
    const n = r?.apply(this, s);
    return re(this), n;
  };
}
const st = "argus-v2050-widget-layouts";
function fi(a) {
  const e = a.shadowRoot;
  if (!e) return;
  let t = e.getElementById(st);
  t || (t = document.createElement("style"), t.id = st, e.appendChild(t)), t.textContent = `
#w-access{display:flex!important;flex-direction:column!important;min-width:0!important;min-height:0!important;height:100%!important;overflow:hidden!important}
#w-access .panel-body,#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;overscroll-behavior:contain!important}
#w-backup{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:14px!important;padding:16px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}
#w-backup h2,#w-backup .panel-head,#w-backup .panel-title{margin:0!important;width:100%!important;text-align:center!important;flex:0 0 auto!important}
#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}
#w-backup button,#w-backup a,#w-backup ha-button,#w-backup mwc-button{width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important;justify-content:center!important;text-align:center!important;font-size:clamp(11px,1.1vw,14px)!important;box-sizing:border-box!important}
#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:16px!important;padding:18px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}
#w-github h2,#w-github .panel-head,#w-github .panel-title{margin:0!important;width:100%!important;text-align:center!important}
#w-github .panel-body,#w-github .actions,#w-github .support-actions{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:12px!important;width:auto!important;max-width:100%!important;margin:0!important;padding:0!important}
#w-github button,#w-github a,#w-github ha-button,#w-github mwc-button{width:auto!important;max-width:100%!important;margin:0!important;justify-content:center!important}
#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay,#w-access .panel-edit-overlay{position:absolute!important;inset:0!important}
@media(max-width:520px){#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{grid-template-columns:1fr!important}#w-backup{overflow-y:auto!important}}
`;
}
function bi(a) {
  const e = a.shadowRoot;
  e && e.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((t) => {
    const i = t;
    i.style.touchAction = "pan-y", i.style.setProperty("-webkit-overflow-scrolling", "touch"), i.scrollHeight > i.clientHeight && (i.style.overflowY = "auto");
  });
}
function se(a) {
  fi(a), bi(a);
}
function yi(a) {
  const e = a?.prototype;
  if (!e || e.__v2050WidgetLayouts) return;
  e.__v2050WidgetLayouts = !0;
  const t = e.connectedCallback, i = e.disconnectedCallback, o = e._load, r = e._renderEntries;
  e.connectedCallback = function() {
    const s = t?.call(this);
    return se(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
      this._v2050LayoutFrame || (this._v2050LayoutFrame = requestAnimationFrame(() => {
        this._v2050LayoutFrame = 0, se(this);
      }));
    }), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, { childList: !0, subtree: !0 }), s;
  }, e.disconnectedCallback = function() {
    return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, i?.call(this);
  }, e._load = async function(...s) {
    const n = await o?.apply(this, s);
    return se(this), n;
  }, e._renderEntries = function(...s) {
    const n = r?.apply(this, s);
    return se(this), n;
  };
}
const xi = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], nt = { es: ["Configurar widgets", "Arrastrar", "Ocultar", "Mostrar", "Conectado", "Sin sensores configurados", "Todos los sensores están omitidos"], en: ["Configure widgets", "Drag", "Hide", "Show", "Connected", "No sensors configured", "All sensors are bypassed"], fr: ["Configurer les widgets", "Déplacer", "Masquer", "Afficher", "Connecté", "Aucun capteur configuré", "Tous les capteurs sont ignorés"], pt: ["Configurar widgets", "Arrastar", "Ocultar", "Mostrar", "Conectado", "Nenhum sensor configurado", "Todos os sensores estão ignorados"], it: ["Configura widget", "Trascina", "Nascondi", "Mostra", "Connesso", "Nessun sensore configurato", "Tutti i sensori sono esclusi"], zh: ["配置小组件", "拖动", "隐藏", "显示", "已连接", "未配置传感器", "所有传感器均已绕过"], ru: ["Настроить виджеты", "Перетащить", "Скрыть", "Показать", "Подключено", "Датчики не настроены", "Все датчики исключены"] }, vi = (a) => {
  const e = String(a._manualLang || a._hass?.language || "en").toLowerCase().split(/[-_]/)[0];
  return nt[e] || nt.en;
}, lt = (a) => [...a?.children || []].filter((e) => e.classList.contains("panel") && !e.classList.contains("dashboard-instances")), ze = (a, e) => {
  if (!a) return;
  const t = a.querySelector("[data-fullscreen]");
  let i = a.querySelector("[data-exit-fullscreen]");
  i || (i = document.createElement("button"), i.className = "ghost entry-exit-fs", i.dataset.exitFullscreen = "", i.textContent = "×", i.style.cssText = "position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25)", i.onclick = () => a.getRootNode().host._exitFullscreenView(), a.appendChild(i)), t && (t.style.display = e ? "none" : "block"), i.style.display = e ? "block" : "none";
};
function dt(a) {
  if (a.shadowRoot?.getElementById("argus-ui-fix")) return;
  const e = document.createElement("style");
  e.id = "argus-ui-fix", e.textContent = ".grid.editing .panel.widget-hidden-preview{opacity:.48!important}.widget-drag-handle{min-height:44px;display:flex;align-items:center;justify-content:center}.ios-fullscreen .entry-content.security-console{display:grid!important;grid-template-columns:minmax(230px,340px) minmax(150px,1fr) minmax(230px,380px)!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;gap:20px 32px!important;padding:56px 48px 32px!important;overflow:hidden!important}.ios-fullscreen .console-hud{grid-area:hud!important}.ios-fullscreen .liquid-stack{grid-area:modes!important;width:100%!important}.ios-fullscreen .entry-icon{grid-area:icon!important}.ios-fullscreen .console-sensors{grid-area:sensors!important;max-height:60vh!important;overflow:auto!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console{grid-template-columns:1fr!important;grid-template-rows:auto auto auto auto!important;grid-template-areas:'hud' 'icon' 'modes' 'sensors'!important;padding:64px 18px 22px!important;overflow-y:auto!important}.ios-fullscreen .liquid-stack,.ios-fullscreen .console-sensors{max-width:420px!important;margin:auto!important}}", a.shadowRoot.appendChild(e);
}
function Ne(a) {
  const e = vi(a), t = a.shadowRoot;
  if (!t) return;
  const i = t.getElementById("edit-widgets-label");
  i && (i.textContent = a._widgetEditing ? "✓ " + (a._t?.("done") || "Done") : "⚙️ " + e[0]), t.querySelectorAll(".widget-drag-handle").forEach((o) => o.textContent = "⋮⋮ " + e[1]), t.querySelectorAll(".widget-toggle-btn").forEach((o) => o.textContent = /mostrar|show|afficher|mostra|显示|показ/i.test(o.textContent) ? e[3] : e[2]), t.querySelectorAll(".console-empty").forEach((o) => o.textContent = /omit|bypass|ignor|exclu|绕过|исключ/i.test(o.textContent) ? e[6] : e[5]), t.querySelectorAll(".entry").forEach((o) => [...o.children].filter((r) => ["CONECTADO", "CONNECTED"].includes(r.textContent?.trim())).forEach((r) => {
    const s = r.firstElementChild;
    r.textContent = "", s && r.appendChild(s), r.append(e[4]);
  }));
}
function wi(a) {
  if (!a || a.__uiAudit) return;
  a.__uiAudit = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._applyTranslations, o = e._renderEntries, r = e._initWidgetGrid, s = e._saveWidgetLayout;
  e.connectedCallback = function() {
    return dt(this), t?.call(this);
  }, e._applyTranslations = function() {
    const n = i?.call(this);
    return Ne(this), n;
  }, e._renderEntries = function() {
    const n = o?.call(this);
    return dt(this), this.shadowRoot?.querySelectorAll(".entry").forEach((d, p) => ze(d, this._fullscreenIdx === p || d.classList.contains("ios-fullscreen"))), Ne(this), n;
  }, e._toggleFullscreen = function(n) {
    if (n = n || this.shadowRoot?.querySelector(".entry"), !n) return;
    this._fullscreenIdx = Number(n.querySelector("[data-fullscreen]")?.dataset.fullscreen || 0), this._kioskLocked = !1, this._kioskTarget = n, this.classList.add("fullscreen-active"), n.classList.add("ios-fullscreen"), ze(n, !0), document.body.style.overflow = "hidden", (n.requestFullscreen || n.webkitRequestFullscreen)?.call(n).catch?.(() => {
    });
  }, e._exitFullscreenView = async function() {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : document.webkitExitFullscreen?.();
    } catch {
    }
    this.shadowRoot?.querySelectorAll(".entry.ios-fullscreen").forEach((n) => {
      n.classList.remove("ios-fullscreen"), ze(n, !1);
    }), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskTarget = null, document.body.style.overflow = "";
  }, e._initWidgetGrid = function() {
    if (!this._widgetConfigLoaded) {
      const d = this._ui?.dashboard?.widget_layout;
      if (d) try {
        localStorage.setItem("argus-widgets-v1", JSON.stringify(d));
      } catch {
      }
      this._widgetConfigLoaded = !0;
    }
    r?.call(this);
    const n = this.shadowRoot?.getElementById("widget-grid");
    lt(n).forEach((d) => d.draggable = !!this._widgetEditing), n && !n._auditDrag && (n._auditDrag = !0, n.addEventListener("dragover", (d) => {
      if (!this._widgetEditing) return;
      d.preventDefault();
      const p = n.querySelector(".dragging");
      if (!p) return;
      let c = null, l = 1 / 0;
      if (lt(n).filter((u) => u !== p).forEach((u) => {
        const g = u.getBoundingClientRect(), m = Math.hypot(d.clientX - g.x - g.width / 2, d.clientY - g.y - g.height / 2);
        m < l && (l = m, c = u);
      }), c) {
        const u = c.getBoundingClientRect();
        c[d.clientX > u.x + u.width / 2 || d.clientY > u.y + u.height / 2 ? "after" : "before"](p);
      }
    })), Ne(this);
  }, e._saveWidgetLayout = function() {
    s?.call(this);
    const n = this._widgetConfig || xi;
    this._ui = this._ui || {};
    const d = { ...this._ui.dashboard || {}, widget_layout: n };
    this._ui.dashboard = d, clearTimeout(this._widgetSaveTimer), this._widgetSaveTimer = setTimeout(() => this._send("argus/save_ui", { dashboard: d }).catch((p) => console.error("Widget layout save failed", p)), 180);
  }, e._changeWidgetSize = function(n, d) {
    const p = (this._widgetConfig || []).find((l) => l.id === n);
    if (!p) return;
    p.size = d;
    const c = this.shadowRoot?.getElementById("w-" + n);
    c && (c.dataset.size = d), this._renderWidgetLayout(), this._saveWidgetLayout();
  }, e._toggleWidgetVisibility = function(n) {
    const d = (this._widgetConfig || []).find((c) => c.id === n);
    if (!d) return;
    d.hidden = !d.hidden;
    const p = this.shadowRoot?.getElementById("w-" + n);
    p && (p.classList.toggle("widget-hidden-preview", d.hidden && this._widgetEditing), p.style.display = d.hidden && !this._widgetEditing ? "none" : ""), this._renderWidgetLayout(), this._saveWidgetLayout();
  };
}
function ct(a) {
  if (a.shadowRoot?.getElementById("argus-grid-polish-style")) return;
  const e = document.createElement("style");
  e.id = "argus-grid-polish-style", e.textContent = `
#widget-grid.grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-template-rows:auto!important;grid-auto-flow:dense!important;grid-auto-rows:clamp(190px,22vw,280px)!important;align-items:stretch!important;gap:clamp(10px,1.5vw,20px)!important}
#widget-grid>.panel:not(.dashboard-instances){min-width:0!important;min-height:0!important;height:auto!important;overflow:hidden!important;align-self:stretch!important}
#widget-grid>.panel[data-size="S"]{grid-column:span 1!important;grid-row:span 1!important}
#widget-grid>.panel[data-size="M"]{grid-column:span 2!important;grid-row:span 1!important}
#widget-grid>.panel[data-size="L"]{grid-column:span 2!important;grid-row:span 2!important}
#widget-grid>.panel[data-size="XL"]{grid-column:span 4!important;grid-row:span 2!important}
#widget-grid>#w-activity[data-size="S"],#widget-grid>#w-automations[data-size="S"]{grid-row:span 2!important}
#widget-grid>#w-instances.dashboard-instances{grid-column:1/-1!important;grid-row:1!important;height:auto!important;min-height:max-content!important;align-self:start!important}
#widget-grid.editing .panel.widget-hidden-preview{opacity:.48!important}
#widget-grid>.panel[data-size="S"]{padding:clamp(10px,1.2vw,16px)!important}
#widget-grid>.panel[data-size="S"] .panel-head{margin-bottom:8px!important;gap:6px!important;flex-wrap:nowrap!important}
#widget-grid>.panel[data-size="S"] h2{font-size:clamp(9px,1vw,12px)!important;line-height:1.15!important}
#widget-grid>.panel[data-size="S"] .tabs{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:5px!important;overflow-x:auto!important}
#w-modes[data-size="S"] #mode-tabs{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-auto-flow:column!important;gap:5px!important;overflow-x:auto!important}
#w-modes[data-size="S"] #mode-tabs>*{min-width:0!important;width:auto!important;padding:7px 4px!important}
#w-modes[data-size="S"] #mode-view{min-height:0!important;max-height:calc(100% - 58px)!important;overflow:auto!important}
#w-activity,#w-automations{display:flex!important;flex-direction:column!important}
#w-activity #activity-log{height:auto!important;min-height:0!important;flex:1 1 auto!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-automations #auto-view{min-height:0!important;flex:1 1 auto!important;overflow:hidden!important}
#w-automations #auto-view>div{height:100%!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
@media(min-width:761px) and (max-width:900px){#widget-grid.grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:auto!important;grid-auto-rows:clamp(190px,30vw,260px)!important;gap:12px!important}#widget-grid>.panel[data-size="S"]{grid-column:span 1!important;grid-row:span 1!important}#widget-grid>.panel[data-size="M"],#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"]{grid-column:span 2!important}#widget-grid>.panel[data-size="M"]{grid-row:span 1!important}#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"]{grid-row:span 2!important}}
@media(max-width:760px){#widget-grid.grid{grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto!important;grid-auto-rows:auto!important;grid-auto-flow:row!important;gap:12px!important}#widget-grid>.panel[data-size="S"],#widget-grid>.panel[data-size="M"],#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"]{grid-column:1!important;grid-row:auto!important;width:100%!important;box-sizing:border-box!important}#widget-grid>#w-activity,#widget-grid>#w-automations{min-height:360px!important}#widget-grid>#w-modes,#widget-grid>#w-access{min-height:280px!important}#widget-grid>.panel[data-size="S"]{padding:14px!important}}
@media(orientation:landscape) and (max-height:560px) and (max-width:950px){#widget-grid.grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-auto-rows:auto!important}#widget-grid>.panel[data-size="S"]{grid-column:span 1!important}#widget-grid>.panel[data-size="M"],#widget-grid>.panel[data-size="L"],#widget-grid>.panel[data-size="XL"],#widget-grid>#w-activity,#widget-grid>#w-automations{grid-column:span 2!important}}
`, a.shadowRoot?.appendChild(e);
}
function ki(a) {
  if (!a || a.__gridPolish) return;
  a.__gridPolish = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._initWidgetGrid;
  e.connectedCallback = function() {
    return ct(this), t?.call(this);
  }, e._initWidgetGrid = function() {
    const o = i?.call(this);
    return ct(this), o;
  };
}
const pt = { es: { on: "Conectado", off: "Argus desconectado · HA sin conexión" }, en: { on: "Connected", off: "Argus disconnected · HA offline" }, fr: { on: "Connecté", off: "Argus déconnecté · HA hors ligne" }, pt: { on: "Conectado", off: "Argus desconectado · HA sem conexão" }, it: { on: "Connesso", off: "Argus disconnesso · HA offline" }, zh: { on: "已连接", off: "Argus 已断开 · HA 离线" }, ru: { on: "Подключено", off: "Argus отключён · HA не в сети" } }, Ai = (a) => {
  const e = String(a._manualLang || a._hass?.language || a._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
  return pt[e] || pt.en;
};
function Si(a) {
  if (a.shadowRoot?.getElementById("argus-fullscreen-polish-style")) return;
  const e = document.createElement("style");
  e.id = "argus-fullscreen-polish-style", e.textContent = `
.console-hud{display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:center!important;gap:12px!important;padding:0!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;overflow:visible!important}
.console-hud-loc{justify-self:start!important;max-width:100%!important;padding:9px 14px!important;border-radius:999px!important;background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.07))!important;border:1px solid rgba(255,255,255,.24)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 8px 22px rgba(0,0,0,.16)!important;backdrop-filter:blur(20px) saturate(145%)!important;-webkit-backdrop-filter:blur(20px) saturate(145%)!important}
.console-hud-right{justify-self:end!important;display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:7px!important;min-width:0!important;background:transparent!important;border:0!important;box-shadow:none!important}
.console-hud-time,.console-hud-temp,.console-hud-tpill{display:inline-flex!important;align-items:center!important;min-height:30px!important;box-sizing:border-box!important;padding:6px 10px!important;border-radius:999px!important;background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.07))!important;border:1px solid rgba(255,255,255,.24)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 8px 22px rgba(0,0,0,.14)!important;backdrop-filter:blur(20px) saturate(145%)!important;-webkit-backdrop-filter:blur(20px) saturate(145%)!important}
.console-hud-temps{display:flex!important;gap:7px!important;flex-wrap:nowrap!important}
.argus-connection-pill{position:static!important;inset:auto!important;transform:none!important;grid-column:2!important;justify-self:center!important;z-index:30!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;min-height:30px!important;box-sizing:border-box!important;padding:6px 12px!important;border-radius:999px!important;white-space:nowrap!important;font-size:11px!important;font-weight:800!important;letter-spacing:.02em!important;backdrop-filter:blur(20px) saturate(150%)!important;-webkit-backdrop-filter:blur(20px) saturate(150%)!important;transition:color .25s ease,background .25s ease,border-color .25s ease,box-shadow .25s ease!important}
.argus-connection-pill[data-online="true"]{color:#7ff8bd!important;background:linear-gradient(135deg,rgba(36,188,129,.28),rgba(36,188,129,.10))!important;border:1px solid rgba(78,231,163,.48)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.24),0 0 20px rgba(36,188,129,.20)!important}
.argus-connection-pill[data-online="false"]{color:#ffd09a!important;background:linear-gradient(135deg,rgba(255,145,43,.32),rgba(130,66,8,.18))!important;border:1px solid rgba(255,171,76,.62)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.22),0 0 22px rgba(255,132,28,.28)!important}
.argus-connection-dot{width:7px!important;height:7px!important;flex:0 0 7px!important;border-radius:50%!important;background:currentColor!important;box-shadow:0 0 9px currentColor!important}
.console-sensors{position:relative!important;isolation:isolate!important;display:grid!important;grid-auto-rows:minmax(48px,auto)!important;align-content:start!important;gap:10px!important;padding:8px 7px!important;max-height:min(64vh,560px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important;background:transparent!important;border:0!important;box-shadow:none!important;filter:none!important;transform:none!important;contain:layout paint!important}
.console-sensors::before,.console-sensors::after{display:none!important;content:none!important}
.console-sensor{position:relative!important;z-index:1!important;min-width:0!important;margin:0!important;overflow:hidden!important;isolation:isolate!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.20),inset 0 0 0 1px rgba(255,255,255,.04)!important;transform:translateZ(0)!important}
.console-sensor.open{box-shadow:inset 0 1px 0 rgba(255,255,255,.18),inset 0 0 0 1px rgba(255,102,92,.16)!important}
.console-sensors::-webkit-scrollbar{width:6px}.console-sensors::-webkit-scrollbar-track{background:transparent}.console-sensors::-webkit-scrollbar-thumb{background:rgba(255,255,255,.25);border-radius:999px}
@media(min-width:901px){.ios-fullscreen .entry-content.security-console{grid-template-columns:minmax(210px,260px) minmax(280px,1fr) minmax(250px,340px)!important;gap:18px 20px!important;padding:48px 32px 28px!important}.ios-fullscreen .entry-content.security-console .entry-icon{min-width:280px!important;min-height:300px!important;overflow:visible!important}.ios-fullscreen .entry-content.security-console .entry-icon svg{width:clamp(280px,34vw,500px)!important;max-width:500px!important;min-width:280px!important;filter:drop-shadow(0 0 46px rgba(94,255,167,.30))!important}.ios-fullscreen .entry-content.security-console .console-sensors{width:100%!important;max-width:340px!important}}
@media(max-width:900px){.console-hud{grid-template-columns:minmax(0,1fr) auto!important;grid-template-areas:'location connection' 'readings readings'!important}.console-hud-loc{grid-area:location!important}.argus-connection-pill{grid-area:connection!important}.console-hud-right{grid-area:readings!important;justify-self:stretch!important;justify-content:flex-start!important;overflow-x:auto!important}.ios-fullscreen .entry-content.security-console .entry-icon{display:flex!important;min-height:190px!important}.ios-fullscreen .entry-content.security-console .entry-icon svg{display:block!important;width:clamp(180px,46vw,300px)!important;max-width:300px!important}.console-sensors{width:100%!important;max-width:460px!important;max-height:42vh!important}}
`, a.shadowRoot?.appendChild(e);
}
function Ei(a) {
  let e = a.querySelector(".argus-connection-pill");
  if (e) return e;
  if (e = [...a.children].find((o) => o.tagName === "DIV" && (o.getAttribute("style") || "").includes("left:50%") && (o.getAttribute("style") || "").includes("top:12px")), !e) return null;
  e.className = "argus-connection-pill", e.removeAttribute("style");
  const t = a.querySelector(".console-hud"), i = t?.querySelector(".console-hud-right");
  return t && t.insertBefore(e, i || null), e;
}
function Ii(a) {
  const e = !!a._hass && a._hass?.connection?.connected !== !1;
  return navigator.onLine !== !1 && e;
}
function de(a) {
  const e = Ai(a), t = Ii(a);
  a.shadowRoot?.querySelectorAll(".entry").forEach((i) => {
    const o = Ei(i);
    if (!o) return;
    o.dataset.online = String(t), o.setAttribute("role", "status"), o.setAttribute("aria-live", "polite"), o.replaceChildren();
    const r = document.createElement("i");
    r.className = "argus-connection-dot";
    const s = document.createElement("span");
    s.className = "argus-connection-label", s.textContent = t ? e.on : e.off, o.append(r, s);
  });
}
function ut(a) {
  Si(a), de(a);
}
function Ci(a) {
  if (!a || a.__fullscreenPolish) return;
  a.__fullscreenPolish = !0;
  const e = a.prototype, t = e.connectedCallback, i = e.disconnectedCallback, o = e._renderEntries, r = Object.getOwnPropertyDescriptor(e, "hass");
  e.connectedCallback = function() {
    const s = t?.call(this);
    return this._argusOnlineHandler = () => de(this), window.addEventListener("online", this._argusOnlineHandler), window.addEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), this._argusConnectivityTimer = setInterval(() => de(this), 2500), queueMicrotask(() => ut(this)), s;
  }, e.disconnectedCallback = function() {
    return window.removeEventListener("online", this._argusOnlineHandler), window.removeEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), i?.call(this);
  }, e._renderEntries = function() {
    const s = o?.call(this);
    return ut(this), s;
  }, r?.set && Object.defineProperty(e, "hass", { configurable: !0, enumerable: r.enumerable, get: r.get, set(s) {
    r.set.call(this, s), queueMicrotask(() => de(this));
  } });
}
const me = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], qe = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Le = /* @__PURE__ */ new Set(["auto", "12h", "24h"]), J = (a) => JSON.parse(JSON.stringify(a));
function ge(a) {
  if (!Array.isArray(a)) return null;
  const e = /* @__PURE__ */ new Set(), t = [];
  return a.forEach((i) => {
    const o = String(i?.id || "");
    !o || e.has(o) || (e.add(o), t.push({ id: o, size: qe.has(i?.size) ? i.size : "M", hidden: !!i?.hidden }));
  }), me.forEach((i) => {
    e.has(i.id) || t.push({ ...i });
  }), t.length ? t : null;
}
function zi() {
  try {
    return ge(JSON.parse(localStorage.getItem("argus-widgets-v2") || localStorage.getItem("argus-widgets-v1") || "null"));
  } catch {
    return null;
  }
}
function Nt(a) {
  try {
    const e = JSON.stringify(a);
    localStorage.setItem("argus-widgets-v2", e), localStorage.setItem("argus-widgets-v1", e);
  } catch {
  }
}
function mt(a) {
  if (a.shadowRoot?.getElementById("argus-v2012-audit-style")) return;
  const e = document.createElement("style");
  e.id = "argus-v2012-audit-style", e.textContent = `
:host{--argus-clear-bg:linear-gradient(105deg,rgba(30,62,78,.34),rgba(9,25,37,.50));--argus-clear-border:rgba(255,255,255,.18)}
.entry,.entry-bg,.entry-bg>*:first-child,.entry .wx,.entry .wx-atmosphere,.entry-content{border-radius:32px!important}.entry{isolation:isolate;overflow:hidden!important;transition:border-radius .28s ease,box-shadow .28s ease,transform .28s ease,opacity .2s ease!important}.entry::after{border-radius:32px!important}
.entry-content.security-console{display:grid!important;grid-template-columns:minmax(220px,1fr) minmax(160px,220px) minmax(260px,1fr)!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;align-items:center!important;gap:18px 24px!important;padding:24px!important}.security-console .console-hud{grid-area:hud!important}.security-console .liquid-stack{grid-area:modes!important;width:100%!important;max-width:none!important}.security-console .entry-icon{grid-area:icon!important;width:100%!important;justify-self:center!important}.security-console .console-sensors{grid-area:sensors!important;width:100%!important;max-width:none!important}
.security-console .liquid-btn,.security-console .console-keypad,.console-hud-loc,.console-hud-time,.console-hud-temp,.console-hud-tpill,.argus-connection-pill{background:var(--argus-clear-bg)!important;border:1px solid var(--argus-clear-border)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 7px 18px rgba(0,0,0,.12)!important}.security-console .liquid-btn.active{background:linear-gradient(105deg,color-mix(in srgb,var(--btn-bg,#34c759) 58%,transparent),rgba(8,25,36,.44))!important}.security-console .liquid-btn{transition:transform .28s cubic-bezier(.2,.8,.2,1),background .35s ease,border-color .35s ease,box-shadow .35s ease,color .25s ease!important}.security-console .liquid-btn:hover{transform:translateY(-2px)!important}.security-console .liquid-btn:active{transform:scale(.975)!important}
.entry-icon{position:relative!important;contain:layout paint;transform:translateZ(0)}.entry-icon>svg{position:relative;z-index:2;transform-origin:center;transition:filter .5s ease,opacity .35s ease!important}.entry-icon.argus-shield-changing>svg{animation:argusShieldIn .52s cubic-bezier(.2,.82,.2,1) both!important}.argus-old-shield{position:absolute;inset:0;z-index:3;display:grid;place-items:center;pointer-events:none;animation:argusShieldOut .5s cubic-bezier(.4,0,.2,1) both}.argus-old-shield svg{width:100%;height:auto;max-width:inherit}@keyframes argusShieldIn{0%{opacity:.15;transform:scale(.94);filter:blur(4px)}55%{opacity:1;transform:scale(1.025);filter:blur(0)}100%{opacity:1;transform:scale(1)}}@keyframes argusShieldOut{0%{opacity:1;transform:scale(1);filter:blur(0)}100%{opacity:0;transform:scale(1.045);filter:blur(5px)}}
.console-hud{grid-template-columns:minmax(0,1fr) minmax(150px,220px) minmax(0,1fr)!important}.console-hud-loc{grid-column:1!important;justify-self:start!important;min-width:0!important;max-width:100%!important}.argus-connection-pill{grid-column:2!important;justify-self:center!important}.console-hud-right{grid-column:3!important;justify-self:end!important;min-width:0!important;max-width:100%!important}
.hero-context{display:grid!important;grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important;gap:12px!important;min-width:0!important}.hero-clock{display:grid!important;grid-template-rows:auto auto!important;align-content:center!important;justify-items:end!important;min-width:76px!important;padding-right:12px!important}.hero-clock strong,.hero-clock span{width:100%!important;text-align:right!important;white-space:nowrap!important;font-variant-numeric:tabular-nums!important}.hero-clock span{overflow:hidden!important;text-overflow:ellipsis!important;max-width:14ch!important}.hero-pills{min-width:0!important;flex-wrap:wrap!important}
.pf-clock{grid-area:clock}.personalize-grid{grid-template-areas:'home temp' 'panel weather' 'hub clock' 'emergency emergency'!important}.ios-fullscreen .entry-content.security-console{grid-template-columns:minmax(230px,340px) minmax(280px,1fr) minmax(250px,340px)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;align-items:center!important;overflow:hidden!important}.ios-fullscreen .entry-icon{justify-self:center!important;align-self:center!important}.ios-fullscreen .entry-icon svg{will-change:transform,opacity,filter}:host(.argus-exiting-fullscreen) .entry{pointer-events:none!important;transition:none!important}
@media(max-width:900px){.entry-content.security-console,.ios-fullscreen .entry-content.security-console{grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto auto auto auto!important;grid-template-areas:'hud' 'icon' 'modes' 'sensors'!important;justify-items:center!important;padding:68px 16px 24px!important;gap:16px!important;overflow-y:auto!important;align-content:start!important}.console-hud{width:100%!important;grid-template-columns:minmax(0,1fr) auto!important;grid-template-areas:'location connection' 'readings readings'!important;gap:8px!important}.console-hud-loc{grid-area:location!important}.argus-connection-pill{grid-area:connection!important}.console-hud-right{grid-area:readings!important;justify-self:stretch!important;justify-content:flex-start!important;overflow-x:auto!important}.security-console .entry-icon{display:flex!important;min-height:150px!important;max-width:280px!important}.security-console .entry-icon svg{width:min(58vw,260px)!important;max-width:260px!important;min-width:0!important}.security-console .liquid-stack,.security-console .console-sensors{width:100%!important;max-width:440px!important;margin:0 auto!important}.security-console .console-sensors{max-height:none!important;overflow:visible!important}.hero-context{width:100%!important;grid-template-columns:auto minmax(0,1fr)!important}.hero-clock{justify-items:start!important;padding:0 12px 0 0!important}.hero-clock strong,.hero-clock span{text-align:left!important}.hero-pills{justify-content:flex-start!important}.personalize-grid{grid-template-columns:1fr!important;grid-template-areas:'home' 'temp' 'weather' 'clock' 'panel' 'hub' 'emergency'!important}}
@media(max-width:520px){.entry,.entry-bg,.entry-bg>*:first-child,.entry .wx,.entry-content{border-radius:26px!important}.entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding:72px 12px 20px!important}.security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important}.security-console .liquid-btn{min-width:0!important;white-space:normal!important}.console-hud-loc{font-size:10px!important}.console-hud-right{scrollbar-width:none}.hero-context{grid-template-columns:1fr!important}.hero-clock{border:0!important;padding:0!important;justify-items:start!important}.hero-pills{width:100%!important}.ios-fullscreen{overflow:hidden!important}.ios-fullscreen .entry-content.security-console{height:100dvh!important;max-height:100dvh!important}.ios-fullscreen .console-sensors{padding-bottom:28px!important}}
@media(prefers-reduced-motion:reduce){.argus-old-shield{display:none!important}.entry-icon.argus-shield-changing>svg{animation:none!important}}
`, a.shadowRoot.appendChild(e);
}
function Ni(a) {
  return [...a.shadowRoot?.querySelectorAll(".entry") || []].map((e) => e.querySelector(".entry-icon>svg")?.outerHTML || null);
}
function Li(a, e) {
  a.shadowRoot?.querySelectorAll(".entry").forEach((t, i) => {
    const o = t.querySelector(".entry-icon"), r = o?.querySelector(":scope>svg"), s = e[i];
    if (!o || !r || !s || s === r.outerHTML) return;
    o.querySelector(".argus-old-shield")?.remove();
    const n = document.createElement("div");
    n.className = "argus-old-shield", n.innerHTML = s, o.prepend(n), o.classList.remove("argus-shield-changing"), o.offsetWidth, o.classList.add("argus-shield-changing"), setTimeout(() => {
      n.remove(), o.classList.remove("argus-shield-changing");
    }, 560);
  });
}
function Pi(a) {
  const e = a.shadowRoot?.getElementById("widget-grid");
  if (!e) return ge(a._widgetConfig) || J(me);
  const t = new Map((a._widgetConfig || []).map((o) => [o.id, o])), i = [...e.children].filter((o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")).map((o) => {
    const r = o.id.replace(/^w-/, ""), s = t.get(r) || {};
    return { id: r, size: qe.has(o.dataset.size) ? o.dataset.size : qe.has(s.size) ? s.size : "M", hidden: o.classList.contains("widget-hidden-preview") || o.style.display === "none" || !!s.hidden };
  });
  return ge(i) || J(me);
}
function Bi(a, e) {
  a._widgetConfig = J(e), Nt(e), a._ui = a._ui || {};
  const t = { ...a._ui.dashboard || {}, widget_layout: J(e) };
  a._ui.dashboard = t;
  const i = { dashboard: t };
  a._dashboard?.entry_id && (i.entry_id = a._dashboard.entry_id), a._widgetSaveChain = (a._widgetSaveChain || Promise.resolve()).catch(() => {
  }).then(() => a._send("argus/save_ui", i)).then((o) => {
    o?.ui?.dashboard && (a._ui.dashboard = o.ui.dashboard), a.dataset.widgetSave = "saved";
  }).catch((o) => {
    a.dataset.widgetSave = "local", console.error("Argus widget layout saved locally; server save failed", o);
  });
}
function Ri(a) {
  if (!a || a.__v2012AuditFixes) return;
  a.__v2012AuditFixes = !0;
  const e = a.prototype, t = e.connectedCallback, i = e.disconnectedCallback, o = e._load, r = e._renderEntries, s = e._initWidgetGrid, n = e._saveWidgetLayout, d = e._persistPersonalization, p = e._applyTranslations, c = e._exitFullscreenView;
  e.connectedCallback = function() {
    mt(this);
    const l = t?.call(this);
    return this._argusExitCapture = (u) => {
      this._argusExiting && u.stopImmediatePropagation();
    }, document.addEventListener("fullscreenchange", this._argusExitCapture, !0), document.addEventListener("webkitfullscreenchange", this._argusExitCapture, !0), l;
  }, e.disconnectedCallback = function() {
    return document.removeEventListener("fullscreenchange", this._argusExitCapture, !0), document.removeEventListener("webkitfullscreenchange", this._argusExitCapture, !0), i?.call(this);
  }, e._load = async function() {
    const l = await o?.call(this);
    return this._ui && (this._clockFormat = Le.has(this._ui.clock_format) ? this._ui.clock_format : "auto"), l;
  }, e._applyTranslations = function() {
    return p?.call(this);
  }, e._renderEntries = function() {
    const l = Ni(this), u = r?.call(this);
    return mt(this), requestAnimationFrame(() => Li(this, l)), u;
  }, e._initWidgetGrid = function() {
    const l = ge(this._ui?.dashboard?.widget_layout), u = zi();
    this._widgetConfig = J(l || u || me), Nt(this._widgetConfig), this._widgetConfigLoaded = !0;
    const g = s?.call(this);
    return this._renderWidgetLayout?.(), g;
  }, e._saveWidgetLayout = function() {
    n?.call(this), Bi(this, Pi(this));
  }, e._persistPersonalization = async function() {
    this._clockFormat = Le.has(this.shadowRoot?.getElementById("argus-clock-format-select")?.value) ? this.shadowRoot.getElementById("argus-clock-format-select").value : Le.has(this._clockFormat) ? this._clockFormat : "auto";
    const l = await d?.call(this);
    this._ui = this._ui || {}, this._ui.clock_format = this._clockFormat;
    const u = { clock_format: this._clockFormat };
    this._ui.weather_source && (u.weather_source = this._ui.weather_source), this._ui.temperature_source && (u.temperature_source = this._ui.temperature_source), this._dashboard?.entry_id && (u.entry_id = this._dashboard.entry_id);
    const g = await this._send("argus/save_ui", u);
    return g?.ui && (this._ui = { ...this._ui, ...g.ui }), this._lastClockUpdate = 0, this._updateHeroContext?.(), this._renderEntries?.(), l;
  }, e._exitFullscreenView = async function() {
    this._argusExiting = !0, this.classList.add("argus-exiting-fullscreen");
    try {
      return await c?.call(this);
    } finally {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        this._argusExiting = !1, this.classList.remove("argus-exiting-fullscreen");
      }));
    }
  };
}
const he = ["essential", "light", "balanced", "full"], Lt = "argus-performance-v1", $i = 6e3, Hi = 18, Ti = 3, Mi = 25e3;
function Pt() {
  try {
    const a = navigator.userAgent || "", e = navigator.platform || "", t = navigator.hardwareConcurrency || 0, i = navigator.deviceMemory || 0;
    let o = 0;
    const r = `${a}|${e}|${t}|${i}`;
    for (let s = 0; s < r.length; s++) o = o * 31 + r.charCodeAt(s) | 0;
    return String(o);
  } catch {
    return "default";
  }
}
function Bt() {
  try {
    return JSON.parse(localStorage.getItem(Lt) || "{}");
  } catch {
    return {};
  }
}
function Oi(a) {
  try {
    localStorage.setItem(Lt, JSON.stringify(a));
  } catch {
  }
}
function qi() {
  const a = navigator.hardwareConcurrency || 2, e = navigator.deviceMemory || null, t = window.devicePixelRatio || 1, i = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || !1;
  let o = !1, r = !1;
  try {
    r = !!document.createElement("canvas").getContext("webgl2");
  } catch {
  }
  try {
    const s = document.createElement("canvas");
    o = !!(s.getContext("webgl") || s.getContext("experimental-webgl"));
  } catch {
  }
  return { cores: a, memory: e, dpr: t, reducedMotion: i, webgl1: o, webgl2: r, width: window.innerWidth || 0, height: window.innerHeight || 0 };
}
function Fi(a = 900) {
  return new Promise((e) => {
    let t = 0;
    const i = performance.now();
    function o(r) {
      t++, r - i < a ? requestAnimationFrame(o) : e(Math.round(t * 1e3 / Math.max(1, r - i)));
    }
    requestAnimationFrame(o);
  });
}
function ji(a, e) {
  let t = 0;
  return t += Math.min(a.cores || 2, 8) * 8, t += a.memory ? Math.min(a.memory, 8) * 6 : 18, a.webgl2 ? t += 30 : a.webgl1 && (t += 14), t += Math.min(e, 60) * 1.2, e >= 55 && (a.cores || 0) >= 4 && (t += 8), a.reducedMotion && (t -= 20), Math.max(a.width, a.height) < 800 && (t -= 10), t >= 170 ? "full" : t >= 120 ? "balanced" : t >= 70 ? "light" : "essential";
}
function Di(a) {
  return he.includes(a) ? a : null;
}
function Ui(a) {
  if (a.shadowRoot?.getElementById("argus-perf-style")) return;
  const e = document.createElement("style");
  e.id = "argus-perf-style", e.textContent = `
:host(.argus-perf-light) .entry,:host(.argus-perf-essential) .entry{transition-duration:.16s!important}
:host(.argus-perf-essential) .argus-old-shield{display:none!important}
:host(.argus-perf-essential) .entry-icon.argus-shield-changing>svg{animation:none!important}
:host(.argus-perf-light) .entry-icon.argus-shield-changing>svg{animation-duration:.22s!important}
:host(.argus-perf-essential) .liquid-btn,:host(.argus-perf-essential) .console-keypad,:host(.argus-perf-light) .liquid-btn{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
:host(.argus-perf-essential) .liquid-btn:hover,:host(.argus-perf-light) .liquid-btn:hover{transform:none!important}
:host(.argus-perf-essential) .entry::after{display:none!important}
.pf-performance{grid-area:performance}.personalize-grid{grid-template-areas:'home temp' 'panel weather' 'hub clock' 'performance performance' 'emergency emergency'!important}
.argus-perf-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;opacity:.72;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:5px 10px;margin-top:4px;white-space:nowrap}
.argus-perf-badge strong{opacity:1;font-weight:700}
@media(max-width:900px){.personalize-grid{grid-template-areas:'home' 'temp' 'weather' 'clock' 'performance' 'panel' 'hub' 'emergency'!important}}
`, a.shadowRoot.appendChild(e);
}
function Ve(a, e, t) {
  a._argusPerfProfile = e, a.dataset.argusPerf = e, a.dataset.argusPerfSource = t || "auto", he.forEach((i) => a.classList.remove("argus-perf-" + i)), a.classList.add("argus-perf-" + e), a.dispatchEvent(new CustomEvent("argus-performance-profile", { bubbles: !0, composed: !0, detail: { profile: e, source: t || "auto", capabilities: a._argusPerfCaps || null, fps: a._argusPerfFps || null } }));
}
async function Wi(a) {
  const e = qi(), t = await Fi();
  a._argusPerfCaps = e, a._argusPerfFps = t, a._argusPerfAuto = ji(e, t);
  const i = Bt(), o = Pt();
  i[o] = { ...i[o] || {}, auto: a._argusPerfAuto, checkedAt: Date.now() }, Oi(i), Ve(a, a._argusPerfAuto, "auto");
}
function Vi(a) {
  Rt(a);
  let e = performance.now(), t = e, i = 0, o = 0;
  function r(s) {
    const n = s - t;
    if (t = s, n > 0) {
      const d = 1e3 / n;
      if (s - e >= $i && (e = s, d < Hi ? i++ : i = 0, i >= Ti && s - o > Mi)) {
        const p = Math.max(0, he.indexOf(a._argusPerfProfile || "balanced") - 1), c = he[p];
        c && c !== a._argusPerfProfile && (a._argusPerfAuto = c, Ve(a, c, "auto-downgrade"), o = s), i = 0;
      }
    }
    a._argusPerfMonitorFrame = requestAnimationFrame(r);
  }
  a._argusPerfMonitorFrame = requestAnimationFrame(r);
}
function Rt(a) {
  a._argusPerfMonitorFrame && (cancelAnimationFrame(a._argusPerfMonitorFrame), a._argusPerfMonitorFrame = null);
}
function Gi(a) {
  if (!a || a.__argusPerformanceProfile) return;
  a.__argusPerformanceProfile = !0;
  const e = a.prototype, t = e.connectedCallback, i = e.disconnectedCallback, o = e._load, r = e._applyTranslations;
  e.connectedCallback = function() {
    Ui(this);
    const s = Bt()[Pt()] || {};
    this._argusPerfAuto = Di(s.auto) || "balanced", Ve(this, this._argusPerfAuto, "auto");
    const n = t?.call(this);
    return Wi(this), Vi(this), n;
  }, e.disconnectedCallback = function() {
    return Rt(this), i?.call(this);
  }, e._load = async function() {
    return await o?.call(this);
  }, e._applyTranslations = function() {
    return r?.call(this);
  };
}
function gt(a) {
  if (a.shadowRoot?.getElementById("argus-visual-container-fixes")) return;
  const e = document.createElement("style");
  e.id = "argus-visual-container-fixes", e.textContent = `
:host{
  --argus-container-radius:28px;
  --argus-title-color:var(--primary-text-color,rgba(255,255,255,.96));
  --argus-title-shadow:0 1px 2px rgba(0,0,0,.22);
}
.panel,.dashboard-instances,.entry{
  border-radius:var(--argus-container-radius)!important;
  background-clip:padding-box!important;
}
.dashboard-instances{
  display:block!important;
  visibility:visible!important;
  opacity:1!important;
  grid-column:1/-1!important;
  min-height:clamp(138px,16vw,210px)!important;
  position:relative!important;
  z-index:2!important;
}
.dashboard-instances::before,.dashboard-instances::after,
.entry::before,.entry::after,.panel>.panel-bg,.dashboard-instances>.panel-bg{
  border-radius:inherit!important;
}
.grid.editing .dashboard-instances .panel-edit-overlay,
#widget-grid.editing .dashboard-instances .panel-edit-overlay,
.dashboard-instances>.panel-edit-overlay{display:none!important}
.panel h2,.dashboard-instances h2,.panel-title,.section-title,
.mode-section-title,.widget-title,.settings-section-title,.access-section-title{
  color:var(--argus-title-color)!important;
  -webkit-text-fill-color:var(--argus-title-color)!important;
  text-shadow:var(--argus-title-shadow)!important;
  opacity:1!important;
}
#widget-grid>.panel:not(.dashboard-instances){
  overflow:auto!important;
  overscroll-behavior:contain!important;
  scrollbar-gutter:stable!important;
}
#widget-grid>.panel:not(.dashboard-instances)::-webkit-scrollbar{width:6px;height:6px}
#widget-grid>.panel:not(.dashboard-instances)::-webkit-scrollbar-thumb{background:rgba(255,255,255,.24);border-radius:999px}
.entry-icon{background:none!important;background-image:none!important;box-shadow:none!important}
.entry-icon::before,.entry-icon::after{content:none!important;display:none!important;background:none!important;box-shadow:none!important}
.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{background:none!important;background-image:none!important;box-shadow:none!important}
.entry-icon>svg{filter:drop-shadow(0 0 18px rgba(94,255,167,.25))!important}
@media (orientation:landscape) and (max-height:820px){
  .ios-fullscreen .entry-content.security-console{
    display:grid!important;box-sizing:border-box!important;width:100vw!important;
    height:100dvh!important;min-height:0!important;max-height:100dvh!important;
    grid-template-columns:minmax(160px,28vw) minmax(130px,1fr) minmax(210px,34vw)!important;
    grid-template-rows:auto minmax(0,1fr)!important;
    grid-template-areas:'hud hud hud' 'modes icon sensors'!important;
    align-items:stretch!important;align-content:stretch!important;gap:10px 14px!important;
    padding:58px 14px 12px!important;overflow:hidden!important;
  }
  .ios-fullscreen .console-hud{grid-area:hud!important;min-width:0!important}
  .ios-fullscreen .liquid-stack{
    grid-area:modes!important;align-self:stretch!important;width:100%!important;
    min-width:0!important;min-height:0!important;max-height:none!important;margin:0!important;
    overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
  }
  .ios-fullscreen .entry-icon{
    grid-area:icon!important;align-self:center!important;justify-self:center!important;
    display:flex!important;width:100%!important;min-width:0!important;min-height:0!important;
    max-width:none!important;max-height:calc(100dvh - 128px)!important;overflow:visible!important;
  }
  .ios-fullscreen .entry-icon>svg{
    display:block!important;width:clamp(130px,22vw,220px)!important;min-width:0!important;
    max-width:220px!important;max-height:calc(100dvh - 140px)!important;margin:auto!important;
  }
  .ios-fullscreen .console-sensors{
    grid-area:sensors!important;align-self:stretch!important;width:100%!important;
    min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;
    margin:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
  }
}
@media (orientation:landscape) and (max-height:560px){
  .ios-fullscreen .entry-content.security-console{
    grid-template-columns:minmax(150px,27vw) minmax(120px,1fr) minmax(200px,35vw)!important;
    gap:8px 10px!important;padding:52px 10px 8px!important;
  }
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .console-hud-time,
  .ios-fullscreen .console-hud-temp,.ios-fullscreen .console-hud-tpill,
  .ios-fullscreen .argus-connection-pill{min-height:26px!important;padding:4px 8px!important;font-size:9px!important}
  .ios-fullscreen .entry-icon>svg{width:clamp(120px,20vw,190px)!important;max-height:calc(100dvh - 124px)!important}
}
@media (prefers-color-scheme:light){
  :host{--argus-title-color:var(--primary-text-color,#172033);--argus-title-shadow:0 1px 1px rgba(255,255,255,.55)}
}
@media (max-width:520px) and (orientation:portrait){:host{--argus-container-radius:24px}}
`, a.shadowRoot.appendChild(e);
}
function ce(a) {
  const e = a.shadowRoot?.querySelector(".dashboard-instances");
  e && (e.draggable = !1, e.removeAttribute("hidden"), e.classList.remove("widget-hidden-preview", "dragging"), e.querySelector(":scope > .panel-edit-overlay")?.remove(), e.style.setProperty("display", "block", "important"), e.style.setProperty("visibility", "visible", "important"), e.style.setProperty("opacity", "1", "important"));
}
function Yi(a) {
  !a.shadowRoot?.getElementById("widget-grid") || a._argusWidgetLayoutRestored || (a._argusWidgetLayoutRestored = !0, a._widgetConfigLoaded ? a._renderWidgetLayout?.() : a._initWidgetGrid?.(), ce(a));
}
function Ki(a) {
  if (!a || a.__argusVisualContainerFixes) return;
  a.__argusVisualContainerFixes = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries, r = e._toggleWidgetEditing;
  e.connectedCallback = function() {
    return gt(this), t?.call(this);
  }, e._load = async function() {
    this._argusWidgetLayoutRestored = !1;
    const s = await i?.call(this);
    return Yi(this), ce(this), s;
  }, e._renderEntries = function() {
    const s = o?.call(this);
    return gt(this), ce(this), s;
  }, e._toggleWidgetEditing = function() {
    const s = r?.call(this);
    return ce(this), s;
  };
}
function ht(a, e, t, i) {
  const o = a.shadowRoot?.getElementById(e), r = o?.getAttribute("data-size");
  if (r !== "S") return t?.apply(a, i);
  o.setAttribute("data-size", "M");
  try {
    return t?.apply(a, i);
  } finally {
    o.setAttribute("data-size", r);
  }
}
function Xi(a) {
  if (!a || a.__argusCompleteContentFixes) return;
  a.__argusCompleteContentFixes = !0;
  const e = a.prototype, t = e._renderActivityLog, i = e._renderAutomations;
  e._renderActivityLog = function(...o) {
    return ht(this, "w-activity", t, o);
  }, e._renderAutomations = function(...o) {
    return ht(this, "w-automations", i, o);
  };
}
const Ji = 15e3;
function Qi(a, e) {
  const t = a._getLocale?.() || void 0, i = a._getTimeZone?.(), o = { weekday: "short", month: "short", day: "numeric" };
  i && (o.timeZone = i);
  try {
    return new Intl.DateTimeFormat(t, o).format(e);
  } catch {
    return e.toLocaleDateString(t, o);
  }
}
function Fe(a) {
  const e = /* @__PURE__ */ new Date(), t = a._formatTime?.(e) || e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), i = a.shadowRoot?.getElementById("hero-clock-time"), o = a.shadowRoot?.getElementById("hero-clock-date");
  i && (i.textContent = t), o && (o.textContent = Qi(a, e)), a.shadowRoot?.querySelectorAll(".console-hud-time").forEach((r) => {
    r.textContent = t;
  });
}
function Zi(a) {
  a.shadowRoot?.querySelectorAll(".entry-icon svg").forEach((e) => {
    e.style.overflow = "visible", e.querySelectorAll("filter").forEach((t) => {
      t.setAttribute("filterUnits", "userSpaceOnUse"), t.setAttribute("x", "-80"), t.setAttribute("y", "-80"), t.setAttribute("width", "360"), t.setAttribute("height", "360"), t.setAttribute("color-interpolation-filters", "sRGB");
    });
  });
}
function ea(a) {
  const e = a.shadowRoot;
  e && (e.querySelectorAll('input[type="file"]').forEach((t) => {
    t.setAttribute("accept", "image/*,video/*,.gif"), t.removeAttribute("capture");
  }), e.querySelectorAll("button,ha-button,mwc-button").forEach((t) => {
    const i = (t.textContent || t.getAttribute("aria-label") || "").toLowerCase();
    /predeterminado|default|argus/.test(i) && /fondo|background|argus/.test(i) && (t.dataset.argusDefaultBackground = "true");
  }));
}
function ta(a) {
  const e = a.shadowRoot;
  if (!e) return;
  e.querySelectorAll("#w-activity .entry,#w-activity .log-entry,#w-activity li,.activity-log .entry,.activity-log li").forEach((i, o) => {
    o > 39 ? i.classList.add("argus-mobile-history-overflow-item") : i.classList.remove("argus-mobile-history-overflow-item");
  });
}
function ia(a) {
  const e = a.shadowRoot;
  e && e.querySelectorAll(".dashboard-instances .entry button,.dashboard-instances .entry .badge,.dashboard-instances .entry .status,.dashboard-instances .entry h3,.dashboard-instances .entry h4").forEach((t) => {
    const i = (t.textContent || "").trim().toLowerCase();
    /^(sistema\s+desarmado|system\s+disarmed|desarmado|disarmed)$/.test(i) && t.classList.add("argus-instance-duplicate-status");
  });
}
function aa(a) {
  if (a.shadowRoot?.getElementById("argus-runtime-visual-style")) return;
  const e = document.createElement("style");
  e.id = "argus-runtime-visual-style", e.textContent = `
.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}
.entry-icon{contain:layout!important}
#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}
.argus-instance-duplicate-status{display:none!important}
.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}
.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}
.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}
#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}
@media(max-width:760px){
  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:14px!important;padding:18px 14px!important}
  .hero-left{width:100%!important;min-width:0!important;align-items:center!important}
  .hero-context{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;margin:4px 0 0!important;justify-items:center!important;align-items:center!important;gap:10px!important}
  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:grid!important;grid-template-columns:1fr!important;justify-items:center!important;align-items:center!important;gap:3px!important;line-height:1.12!important}
  .hero-clock strong,.hero-clock span{width:auto!important;max-width:100%!important;text-align:center!important;margin:0!important;line-height:1.12!important}
  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}
  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}
  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}
  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}
  .entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding-left:10px!important;padding-right:10px!important}
  .console-hud{grid-template-columns:minmax(0,1fr)!important;grid-template-areas:'location' 'connection' 'readings'!important;justify-items:center!important;align-items:center!important;gap:8px!important;text-align:center!important}
  .console-hud-loc,.argus-connection-pill,.console-hud-right{width:100%!important;max-width:100%!important;box-sizing:border-box!important;justify-self:center!important;justify-content:center!important;text-align:center!important;margin:0!important}
  .console-hud-right{display:flex!important;flex-wrap:wrap!important;overflow:visible!important;gap:6px!important}
  .security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important;align-items:stretch!important}
  .security-console .liquid-btn{min-width:0!important;white-space:normal!important;line-height:1.2!important;min-height:46px!important}
  #w-activity,.activity-log{max-height:46vh!important;overflow-y:auto!important}
  .argus-mobile-history-overflow-item{display:list-item!important}
  #w-performance,.performance-card,.device-performance{display:grid!important;grid-template-columns:minmax(0,1fr)!important;justify-items:stretch!important;align-items:center!important;text-align:center!important;gap:10px!important}
  #w-performance *,.performance-card *,.device-performance *{max-width:100%!important;box-sizing:border-box!important}
  #w-access .panel-body,#w-settings .panel-body,.sos-actions,.panic-actions{overflow:visible!important;max-height:none!important}
  .sos-actions button,.panic-actions button,[data-action*="sos"],[data-action*="panic"]{min-height:48px!important;touch-action:manipulation!important}
  input[type="file"]{max-width:100%!important;width:100%!important;color:#fff!important}
}
@media(orientation:landscape) and (max-height:560px) and (max-width:950px){
  .hero{padding:14px!important;gap:10px!important}
  .hero-context{grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important}
  .hero-clock{width:auto!important;justify-items:start!important}
  .hero-pills{justify-content:flex-start!important}
  .ios-fullscreen .console-hud{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;grid-template-areas:'location connection readings'!important}
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .argus-connection-pill,.ios-fullscreen .console-hud-right{width:auto!important}
}
`, a.shadowRoot?.appendChild(e);
}
function Pe(a) {
  aa(a), Fe(a), Zi(a), ea(a), ta(a), ia(a);
}
function oa(a) {
  if (!a || a.__argusRuntimeVisualFixes) return;
  a.__argusRuntimeVisualFixes = !0;
  const e = a.prototype, t = e.connectedCallback, i = e.disconnectedCallback, o = e._load, r = e._renderEntries, s = e._applyTranslations;
  e.connectedCallback = function() {
    const n = t?.call(this);
    return clearInterval(this._argusClockTimer), this._argusClockTimer = setInterval(() => Fe(this), Ji), queueMicrotask(() => Pe(this)), n;
  }, e.disconnectedCallback = function() {
    return clearInterval(this._argusClockTimer), this._argusClockTimer = null, i?.call(this);
  }, e._load = async function() {
    const n = await o?.call(this);
    return Pe(this), n;
  }, e._renderEntries = function() {
    const n = r?.call(this);
    return Pe(this), n;
  }, e._applyTranslations = function() {
    const n = s?.call(this);
    return Fe(this), n;
  };
}
const ra = /* @__PURE__ */ new Set(["unavailable", "unknown"]), _t = {
  es: { status_unavailable: "Sin conexión", status_unavailable_hint: "El dispositivo perdió conexión en Home Assistant y necesita revisión." },
  en: { status_unavailable: "Unavailable", status_unavailable_hint: "The device lost connection in Home Assistant and needs review." },
  fr: { status_unavailable: "Indisponible", status_unavailable_hint: "L'appareil a perdu la connexion dans Home Assistant et doit être vérifié." },
  pt: { status_unavailable: "Indisponível", status_unavailable_hint: "O dispositivo perdeu a conexão no Home Assistant e precisa de revisão." },
  it: { status_unavailable: "Non disponibile", status_unavailable_hint: "Il dispositivo ha perso la connessione in Home Assistant e richiede una verifica." },
  zh: { status_unavailable: "不可用", status_unavailable_hint: "设备在 Home Assistant 中失去连接，需要检查。" },
  ru: { status_unavailable: "Недоступно", status_unavailable_hint: "Устройство потеряло связь в Home Assistant и требует проверки." }
};
function je(a) {
  return a ? ra.has(String(a.state ?? "").toLowerCase()) : !0;
}
function U(a) {
  return String(a ?? "").replace(/[&<>'"]/g, (e) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[e]);
}
function ft(a) {
  const e = a.shadowRoot;
  if (!e) return;
  const t = e.getElementById("bg-mode-select-standalone");
  t && !t.dataset.argusBgFixBound && (t.dataset.argusBgFixBound = "1", t.addEventListener("change", () => {
    if (a._backgroundMode = t.value, !["photo", "collage", "video"].includes(t.value)) {
      a._panelBgFile = "";
      const o = e.getElementById("panel-bg-url-input");
      o && (o.value = "");
    }
    a._updateBgFieldsVisibility?.(), a._updateTheme?.(), a._renderEntries?.();
  }));
  const i = e.getElementById("hub-bg-mode-select");
  i && !i.dataset.argusBgFixBound && (i.dataset.argusBgFixBound = "1", i.addEventListener("change", () => {
    if (a._hubBgMode = i.value, i.value !== "image") {
      a._hubBgFile = "";
      const o = e.getElementById("hub-bg-url-input");
      o && (o.value = "");
    }
    a._updateBgFieldsVisibility?.(), a._updateCanvasBackground?.(), a._updateTheme?.();
  }));
}
function sa(a) {
  const e = a.shadowRoot, t = e?.getElementById("bg-mode-select-standalone")?.value ?? a._backgroundMode, i = e?.getElementById("hub-bg-mode-select")?.value ?? a._hubBgMode;
  if (!["photo", "collage", "video"].includes(t)) {
    a._panelBgFile = "";
    const o = e?.getElementById("panel-bg-url-input");
    o && (o.value = "");
  }
  if (i !== "image") {
    a._hubBgFile = "";
    const o = e?.getElementById("hub-bg-url-input");
    o && (o.value = "");
  }
}
function bt(a) {
  const e = a.shadowRoot;
  if (!e || e.getElementById("argus-availability-style")) return;
  const t = document.createElement("style");
  t.id = "argus-availability-style", t.textContent = `
.sensor-pill.sensor-unavailable{border-color:rgba(255,180,60,.65)!important;background:rgba(120,72,8,.28)!important}
.sensor-pill.sensor-unavailable .pill-dot{background:#ffb43c!important;box-shadow:0 0 8px rgba(255,180,60,.85)!important}
.sensor-pill.sensor-unavailable .pill-status{color:#ffcf8a!important;opacity:1!important;font-weight:900!important}
.console-sensor.unavailable{background:linear-gradient(100deg,rgba(255,170,40,.22),rgba(40,26,8,.62))!important;border-color:rgba(255,190,80,.65)!important}
.console-sensor.unavailable .console-sensor-state{color:#ffcf8a!important}
.status-unavailable{color:#ffcf8a!important;font-weight:900!important}
`, e.appendChild(t);
}
function na(a) {
  const e = a.shadowRoot;
  if (!e || !a._hass?.states) return;
  const t = a._dashboard?.entries || [];
  e.querySelectorAll(".entry").forEach((i, o) => {
    const r = t[o];
    if (!r) return;
    const s = a._hass.states[r.entity_id], n = String(s?.state || "disarmed"), d = n.replace("armed_", "");
    let p = a._ui?.modes?.__by_entity__?.[r.entity_id]?.[d] || a._ui?.modes?.[d] || {}, c = p.sensors || [];
    if (n === "disarmed" || !c.length) {
      const m = a._ui?.modes?.__by_entity__?.[r.entity_id] || a._ui?.modes || {}, f = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((_) => {
        m[_]?.sensors && m[_].sensors.forEach((b) => f.add(b));
      }), c = Array.from(f);
    }
    const l = p.bypassed_sensors || [], u = c.filter((m) => !l.includes(m) && a._hass.states[m]), g = i.querySelectorAll(".console-sensors .console-sensor");
    g.length && g.forEach((m, f) => {
      const _ = u[f];
      if (!_) return;
      const b = a._hass.states[_];
      if (!je(b)) return;
      m.classList.add("unavailable"), m.classList.remove("open"), m.title = a._t("status_unavailable_hint");
      const v = m.querySelector(".console-sensor-icon");
      v && (v.textContent = "❓", v.style.color = "#ffcf8a", v.style.animation = "none");
      const x = m.querySelector(".console-sensor-state");
      x && (x.textContent = a._t("status_unavailable"), x.style.color = "#ffcf8a");
    });
  });
}
function la(a) {
  if (!a || a.__argusBgSensorAvailabilityFixes) return;
  a.__argusBgSensorAvailabilityFixes = !0;
  const e = a.prototype;
  async function t(c) {
    if (!(!c._currentProfile || !c._currentProfile.id))
      try {
        const l = await c._send("argus/get_profile_theme");
        if (l && l.theme && Object.keys(l.theme).length > 0) {
          const u = l.theme;
          u.background_mode !== void 0 && (c._backgroundMode = u.background_mode), u.background_images !== void 0 && (c._backgroundImages = u.background_images), u.panel_bg_file !== void 0 && (c._panelBgFile = u.panel_bg_file || ""), u.panel_bg_sound !== void 0 && (c._panelBgSound = u.panel_bg_sound), u.hub_bg_mode !== void 0 && (c._hubBgMode = u.hub_bg_mode === "none" || u.hub_bg_mode === "default" ? "default" : u.hub_bg_mode), u.hub_bg_file !== void 0 && (c._hubBgFile = u.hub_bg_file || ""), u.hub_bg_sound !== void 0 && (c._hubBgSound = u.hub_bg_sound), c._ui || (c._ui = {}), c._ui.background_mode = c._backgroundMode, c._ui.background_images = c._backgroundImages, c._ui.panel_bg_file = c._panelBgFile, c._ui.panel_bg_sound = c._panelBgSound, c._ui.hub_bg_mode = c._hubBgMode, c._ui.hub_bg_file = c._hubBgFile, c._ui.hub_bg_sound = c._hubBgSound;
          const g = c.shadowRoot;
          if (g) {
            const m = g.getElementById("bg-mode-select-standalone");
            m && (m.value = c._backgroundMode);
            const f = g.getElementById("hub-bg-mode-select");
            f && (f.value = c._hubBgMode);
            const _ = g.getElementById("panel-bg-url-input");
            _ && !c._panelBgFile.startsWith("data:") && (_.value = c._panelBgFile);
            const b = g.getElementById("hub-bg-url-input");
            b && !c._hubBgFile.startsWith("data:") && (b.value = c._hubBgFile);
          }
          typeof c._updateBgFieldsVisibility == "function" && c._updateBgFieldsVisibility(), typeof c._updateCanvasBackground == "function" && c._updateCanvasBackground(), typeof c._updateTheme == "function" && c._updateTheme(), typeof c._renderEntries == "function" && c._renderEntries();
        }
      } catch (l) {
        console.warn("Failed to load profile theme", l);
      }
  }
  async function i(c) {
    if (!(!c._currentProfile || !c._currentProfile.id))
      try {
        const l = c.shadowRoot;
        let u = c._backgroundMode, g = c._hubBgMode;
        if (l) {
          const _ = l.getElementById("bg-mode-select-standalone");
          _ && (u = _.value);
          const b = l.getElementById("hub-bg-mode-select");
          b && (g = b.value);
        }
        const m = {
          background_mode: u,
          hub_bg_mode: g === "default" ? "none" : g,
          panel_bg_file: ["photo", "collage", "video"].includes(u) && c._panelBgFile || "",
          hub_bg_file: g === "image" && c._hubBgFile || "",
          background_images: c._backgroundImages || [],
          panel_bg_sound: !!c._panelBgSound,
          hub_bg_sound: !!c._hubBgSound
        }, f = await c._send("argus/save_profile_theme", { theme: m });
        f && f.theme && (c._currentProfile.theme = f.theme);
      } catch (l) {
        console.warn("Failed to save profile theme", l);
      }
  }
  const o = e._t;
  e._t = function(c) {
    if (c === "status_unavailable" || c === "status_unavailable_hint") {
      const l = String(this._getLocale?.() || this._hass?.language || "en").split("-")[0];
      return (_t[l] || _t.en)[c];
    }
    return o.call(this, c);
  };
  const r = e._persistPersonalization;
  e._persistPersonalization = async function() {
    sa(this);
    const c = await r.call(this);
    return await i(this), c;
  };
  const s = e._chip;
  e._chip = function(c, l) {
    const u = this._hass?.states?.[c];
    if (!(l === "sensor" || l === "bypass" || l === "entry") || !je(u))
      return s.call(this, c, l);
    const m = u?.attributes?.friendly_name || c, f = this._t("status_unavailable_hint");
    return `
      <span class="sensor-pill sensor-unavailable" title="${U(f)}">
        <span class="pill-dot"></span>
        <span class="pill-content">
          <span class="pill-name">${U(m)}</span>
          <span class="pill-status">❓ ${U(this._t("status_unavailable"))}</span>
        </span>
        ${this._isAdmin ? `<button data-remove="${l}:${U(c)}" title="${U(f)}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>` : ""}
      </span>
    `;
  };
  const n = e._deviceFacts;
  e._deviceFacts = function(c, l, u = !0) {
    if (u && je(l)) {
      const g = [{ text: `❓ ${this._t("status_unavailable")}`, className: "status-unavailable" }], m = this._getDevicePower(c, l);
      return m.mains && g.push({ text: "🔌 AC", className: "power-mains" }), m.battery !== null && g.push({ text: `🔋 ${m.battery}%`, className: m.battery <= 20 ? "power-low" : "" }), g;
    }
    return n.call(this, c, l, u);
  };
  const d = e._renderEntries;
  e._renderEntries = function() {
    const c = d.call(this);
    return bt(this), na(this), ft(this), c;
  };
  const p = e._load;
  e._load = async function() {
    const c = await p?.call(this);
    return await t(this), bt(this), ft(this), c;
  };
}
function da(a) {
  const e = a.shadowRoot;
  if (!e || e.getElementById("argus-battery-ui-style")) return;
  const t = document.createElement("style");
  t.id = "argus-battery-ui-style", t.textContent = `
    .console-sensor-battery {
      font-size: 9px;
      font-weight: 800;
      margin-left: 8px;
      padding: 3px 6px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #e2e8f0;
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
    .console-sensor-battery.low {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: rgba(239, 68, 68, 0.4) !important;
      color: #fca5a5 !important;
      animation: pulse 2s infinite;
    }
    .console-sensor-battery.dead {
      background: rgba(220, 38, 38, 0.3) !important;
      border-color: rgba(220, 38, 38, 0.6) !important;
      color: #f87171 !important;
    }
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.6; }
      100% { opacity: 1; }
    }
    .sensor-pill .pill-power, .device-fact.pill-power {
      font-size: 9px;
      font-weight: 800;
      padding: 2px 5px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #e2e8f0;
    }
    .sensor-pill .pill-power.low, .device-fact.pill-power.low {
      background: rgba(239, 68, 68, 0.2) !important;
      border-color: rgba(239, 68, 68, 0.4) !important;
      color: #fca5a5 !important;
      animation: pulse 2s infinite;
    }
    .sensor-pill .pill-power.dead, .device-fact.pill-power.dead {
      background: rgba(220, 38, 38, 0.3) !important;
      border-color: rgba(220, 38, 38, 0.6) !important;
      color: #f87171 !important;
    }
  `, e.appendChild(t);
}
function ca(a) {
  const e = a.shadowRoot;
  if (!e || !a._hass?.states) return;
  const t = a._dashboard?.entries || [];
  e.querySelectorAll(".entry").forEach((i, o) => {
    const r = t[o];
    if (!r) return;
    const s = a._hass.states[r.entity_id], n = String(s?.state || "disarmed"), d = n.replace("armed_", "");
    let p = a._ui?.modes?.__by_entity__?.[r.entity_id]?.[d] || a._ui?.modes?.[d] || {}, c = p.sensors || [];
    if (n === "disarmed" || !c.length) {
      const m = a._ui?.modes?.__by_entity__?.[r.entity_id] || a._ui?.modes || {}, f = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((_) => {
        m[_]?.sensors && m[_].sensors.forEach((b) => f.add(b));
      }), c = Array.from(f);
    }
    const l = p.bypassed_sensors || [], u = c.filter((m) => !l.includes(m) && a._hass.states[m]), g = i.querySelectorAll(".console-sensors .console-sensor");
    g.length && g.forEach((m, f) => {
      const _ = u[f];
      if (!_) return;
      const b = a._hass.states[_];
      if (!b || m.querySelector(".console-sensor-battery")) return;
      const v = a._getSensorBattery(_, b);
      if (v != null && typeof v == "number") {
        const x = m.querySelector(".console-sensor-state");
        if (x) {
          const h = v === 0, y = v <= 10 && !h;
          let k = h ? "🔋 ❌" : `🔋 ${v}%`;
          const A = `<span class="console-sensor-battery ${h ? "dead" : y ? "low" : ""}" title="${h ? "Sin conexión (Batería agotada)" : y ? "Batería crítica - Reemplazar ya" : "Nivel de batería"}">${k}</span>`;
          x.insertAdjacentHTML("beforebegin", A);
        }
      }
    });
  });
}
function pa(a) {
  if (!a || a.__argusBatteryUiFixes) return;
  a.__argusBatteryUiFixes = !0;
  const e = a.prototype, t = e._renderEntries;
  e._renderEntries = function() {
    const i = t.call(this);
    return da(this), ca(this), i;
  };
}
const _e = /* @__PURE__ */ new Set(["weather", "none", "photo", "collage", "video"]), Ge = /* @__PURE__ */ new Set(["default", "image"]);
function q(a) {
  return String(a ?? "").replace(/[&<>"']/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[e]);
}
function ua(a) {
  const e = /^#[0-9a-f]{6}$/i.test(a || "") ? a : "#ff0000";
  return [1, 3, 5].map((t) => parseInt(e.slice(t, t + 2), 16));
}
function yt(a) {
  const e = a.shadowRoot;
  if (!e || e.getElementById("argus-deep-repair-style")) return;
  const t = document.createElement("style");
  t.id = "argus-deep-repair-style", t.textContent = `
.security-console .console-sensors{flex:0 1 276px!important;max-width:292px!important;min-width:210px!important;gap:7px!important;align-content:center!important;margin-inline:auto!important}
.security-console .console-sensor{min-height:0!important;padding:8px 10px!important;gap:8px!important;border-radius:12px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 4px 12px rgba(0,0,0,.16)!important}
.security-console .console-sensor-icon{font-size:15px!important;line-height:1!important}.security-console .console-sensor-name{font-size:11px!important;font-weight:800!important}.security-console .console-sensor-state{font-size:9px!important;letter-spacing:.035em!important}.security-console .console-sensor-battery{font-size:8px!important;margin-left:2px!important;padding:2px 4px!important}
.light-siren-settings,.sos-output-settings{margin-top:8px;padding:9px 10px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(0,0,0,.12)}.light-siren-settings summary,.sos-output-settings summary{cursor:pointer;font-size:11px;font-weight:850}.light-siren-settings label,.sos-output-settings label{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:9px;font-size:11px}.sos-output-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px;align-items:start}.sos-output-row>.sensor-pill{width:100%!important;justify-content:flex-start!important}.sos-remove-output{border:0;border-radius:9px;padding:7px 9px;background:rgba(239,68,68,.18);color:#fca5a5;cursor:pointer}.sos-output-settings{grid-column:1/-1;margin-top:0}.sos-output-settings input[type=color]{width:44px;height:28px;padding:1px;border:0;border-radius:8px;background:transparent}.sos-output-settings select{min-width:120px;padding:6px;border-radius:8px;background:rgba(10,20,34,.8);color:inherit;border:1px solid rgba(255,255,255,.14)}
@media(max-width:950px){.security-console .console-sensors{width:min(100%,292px)!important;max-width:292px!important;min-width:0!important}}.ios-fullscreen .entry-content.security-console .console-sensors{flex-basis:292px!important;max-width:310px!important;min-width:220px!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console .console-sensors{width:min(100%,310px)!important;max-width:310px!important}}`, e.appendChild(t);
}
function xt(a = {}, e = {}) {
  const t = e?.background_mode, i = e?.background_file || "";
  let o = a.background_mode;
  _e.has(o) || (o = _e.has(t) ? t : "weather");
  let r = a.panel_bg_file;
  r === void 0 && (r = i), r = String(r || ""), ["photo", "collage", "video"].includes(o) || (r = "");
  let s = a.hub_bg_mode;
  s = s === "none" ? "default" : s, Ge.has(s) || (s = "default");
  let n = String(a.hub_bg_file || "");
  return s !== "image" && (n = ""), { background_mode: o, background_images: Array.isArray(a.background_images) ? a.background_images : r ? [r] : [], panel_bg_file: r, panel_bg_sound: !!a.panel_bg_sound, hub_bg_mode: s, hub_bg_file: n, hub_bg_sound: !!a.hub_bg_sound };
}
function vt(a, e) {
  a._backgroundMode = e.background_mode, a._backgroundImages = e.background_images, a._panelBgFile = e.panel_bg_file, a._panelBgSound = e.panel_bg_sound, a._hubBgMode = e.hub_bg_mode, a._hubBgFile = e.hub_bg_file, a._hubBgSound = e.hub_bg_sound;
  const t = a.shadowRoot, i = t?.getElementById("bg-mode-select-standalone"), o = t?.getElementById("panel-bg-url-input"), r = t?.getElementById("chk-panel-bg-sound"), s = t?.getElementById("hub-bg-mode-select"), n = t?.getElementById("hub-bg-url-input"), d = t?.getElementById("chk-hub-bg-sound");
  i && (i.value = e.background_mode), o && (o.value = e.panel_bg_file), r && (r.checked = e.panel_bg_sound), s && (s.value = e.hub_bg_mode), n && (n.value = e.hub_bg_file), d && (d.checked = e.hub_bg_sound), a._updateBgFieldsVisibility?.(), a._updateCanvasBackground?.(), a._updateTheme?.(), a._renderEntries?.();
}
function wt(a) {
  const e = a.shadowRoot;
  if (!e) return;
  const t = (i, o, r) => {
    i && !i.dataset[o] && (i.dataset[o] = "1", i.addEventListener("change", r));
  };
  t(e.getElementById("bg-mode-select-standalone"), "deepBg", (i) => {
    const o = _e.has(i.target.value) ? i.target.value : "weather";
    if (a._backgroundMode = o, !["photo", "collage", "video"].includes(o)) {
      a._panelBgFile = "", a._backgroundImages = [];
      const r = e.getElementById("panel-bg-url-input");
      r && (r.value = "");
    }
    a._updateBgFieldsVisibility?.(), a._updateTheme?.(), a._renderEntries?.();
  }), t(e.getElementById("hub-bg-mode-select"), "deepBg", (i) => {
    const o = Ge.has(i.target.value) ? i.target.value : "default";
    if (a._hubBgMode = o, o === "default") {
      a._hubBgFile = "";
      const r = e.getElementById("hub-bg-url-input");
      r && (r.value = "");
    }
    a._updateBgFieldsVisibility?.(), a._updateCanvasBackground?.(), a._updateTheme?.();
  }), t(e.getElementById("panel-bg-url-input"), "deepBg", (i) => {
    a._panelBgFile = String(i.target.value || "").trim(), a._panelBgFile && (a._backgroundImages = [a._panelBgFile]), a._renderEntries?.();
  }), t(e.getElementById("hub-bg-url-input"), "deepBg", (i) => {
    a._hubBgFile = String(i.target.value || "").trim(), a._updateCanvasBackground?.(), a._updateTheme?.();
  });
}
function pe(a) {
  const e = a.shadowRoot?.getElementById("sos-output-chips");
  if (!e) return;
  const t = Array.isArray(a._panicOutputs) ? a._panicOutputs : [], i = a._panicOutputSettings || {};
  e.innerHTML = t.length ? t.map((o) => {
    const r = a._hass?.states?.[o], s = r?.attributes?.friendly_name || o, n = o.startsWith("light."), d = i[o] || {}, p = ["none", "gentle", "rapid"].includes(d.flash_mode) ? d.flash_mode : d.gentle_flash ? "gentle" : "none";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${q(s)}"><span>${q(s)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${q(o)}" aria-label="Eliminar">✕</button>${n ? `<details class="sos-output-settings"><summary>🎨 Color y destello</summary><label>Color <input type="color" data-sos-output-color="${q(o)}" value="${c = d.rgb_color, `#${(Array.isArray(c) && c.length === 3 ? c : [255, 0, 0]).map((l) => Math.max(0, Math.min(255, Number(l) || 0)).toString(16).padStart(2, "0")).join("")}`}"></label><label>Destello <select data-sos-output-flash="${q(o)}"><option value="none" ${p === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${p === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${p === "rapid" ? "selected" : ""}>Rápido</option></select></label></details>` : ""}</div>`;
    var c;
  }).join("") : `<div class="mode-sensor-none">${q(a._t("sos_no_outputs"))}</div>`, e.querySelectorAll("[data-remove-sos-output]").forEach((o) => {
    o.addEventListener("click", () => {
      a._panicOutputs = t.filter((r) => r !== o.dataset.removeSosOutput), delete a._panicOutputSettings?.[o.dataset.removeSosOutput], pe(a);
    });
  });
}
function ma(a) {
  if (!a || a.__argusDeepRepair) return;
  a.__argusDeepRepair = !0;
  const e = a.prototype, t = e._load;
  e._load = async function() {
    const n = await t.call(this);
    if (yt(this), this._panicOutputSettings = this._dashboard?.ui?.panic_output_settings || {}, this._currentProfile?.id) try {
      const d = await this._send("argus/get_profile_theme");
      vt(this, xt(d?.theme || {}, this._currentUserTheme || {}));
    } catch (d) {
      console.warn("Argus profile theme load failed:", d);
    }
    return wt(this), pe(this), n;
  };
  const i = e._renderEntries;
  e._renderEntries = function() {
    const n = i.call(this);
    return yt(this), wt(this), n;
  }, e._renderSosOutputs = function() {
    pe(this);
  };
  const o = e._acceptSelection;
  e._acceptSelection = function() {
    if (this._selectorTarget !== "panic") return o.call(this);
    this._panicOutputs = [...new Set(this._selected || [])], this._panicOutputSettings = this._panicOutputSettings || {}, this._panicOutputs.forEach((n) => {
      this._panicOutputSettings[n] ||= { flash_mode: "none" };
    }), pe(this), this._closeModal?.();
  };
  const r = e._handlePanelBgFile;
  e._handlePanelBgFile = async function(n) {
    if (await r.call(this, n), this._panelBgFile) {
      this._backgroundMode = "photo", this._backgroundImages = [this._panelBgFile];
      const d = this.shadowRoot?.getElementById("bg-mode-select-standalone");
      d && (d.value = "photo"), this._updateBgFieldsVisibility?.(), this._renderEntries?.();
    }
  };
  const s = e._handleHubBgFile;
  e._handleHubBgFile = async function(n) {
    if (await s.call(this, n), this._hubBgFile) {
      this._hubBgMode = "image";
      const d = this.shadowRoot?.getElementById("hub-bg-mode-select");
      d && (d.value = "image"), this._updateBgFieldsVisibility?.(), this._updateCanvasBackground?.(), this._updateTheme?.();
    }
  }, e._persistPersonalization = async function() {
    const n = this.shadowRoot, d = _e.has(n?.getElementById("bg-mode-select-standalone")?.value) ? n.getElementById("bg-mode-select-standalone").value : "weather", p = Ge.has(n?.getElementById("hub-bg-mode-select")?.value) ? n.getElementById("hub-bg-mode-select").value : "default", c = ["photo", "collage", "video"].includes(d) ? String(n?.getElementById("panel-bg-url-input")?.value || this._panelBgFile || "").trim() : "", l = p === "image" ? String(n?.getElementById("hub-bg-url-input")?.value || this._hubBgFile || "").trim() : "", u = { background_mode: d, background_images: d === "collage" ? this._backgroundImages || [] : c ? [c] : [], panel_bg_file: c, panel_bg_sound: !!n?.getElementById("chk-panel-bg-sound")?.checked, hub_bg_mode: p === "default" ? "none" : "image", hub_bg_file: l, hub_bg_sound: !!n?.getElementById("chk-hub-bg-sound")?.checked }, g = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, m = this._normaliseEmergencyNumber(n?.getElementById("emergency-number-input")?.value), f = { ...g ? { entry_id: g } : {}, home_name: this._homeName, temperature_source: n?.getElementById("temp-source-select-standalone")?.value || "auto", weather_source: n?.getElementById("weather-source-select")?.value || "auto", emergency_number: m, panic_outputs: this._panicOutputs || [] };
    try {
      const _ = function(v) {
        const x = { ...v._panicOutputSettings || {} };
        return v.shadowRoot?.querySelectorAll("[data-sos-output-color]").forEach((h) => {
          const y = h.dataset.sosOutputColor;
          x[y] = { ...x[y] || {}, rgb_color: ua(h.value), flash_mode: v.shadowRoot.querySelector(`[data-sos-output-flash="${CSS.escape(y)}"]`)?.value || "none" };
        }), v._panicOutputSettings = Object.fromEntries((v._panicOutputs || []).map((h) => [h, x[h] || { flash_mode: "none" }])), v._panicOutputSettings;
      }(this);
      await this._send("argus/save_profile_theme", { ...g ? { entry_id: g } : {}, theme: u }), await this._send("argus/save_panic_output_profile", { ...g ? { entry_id: g } : {}, outputs: this._panicOutputs || [], settings: _ }), await this._send("argus/save_ui", f), vt(this, xt(u)), this._temperatureSource = f.temperature_source, this._weatherSource = f.weather_source, this._emergencyNumber = m, this._configureEmergencyCall?.();
      const b = n?.getElementById("btn-save-personalization-standalone");
      if (b) {
        const v = b.textContent;
        b.textContent = this._t("saved"), b.style.background = "#43a047", setTimeout(() => {
          b.textContent = v, b.style.background = "";
        }, 3e3);
      }
    } catch (_) {
      throw alert(this._format("generic_error", { error: _?.message || _ })), _;
    }
  };
}
const ga = /* @__PURE__ */ new Set(["hs", "xy", "rgb", "rgbw", "rgbww"]), ha = /* @__PURE__ */ new Set(["flash", "slow flash", "slow_flash", "blink", "strobe", "police"]);
function B(a) {
  return String(a ?? "").replace(/[&<>"']/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[e]);
}
function fe(a, e) {
  const t = a?._hass?.states?.[e], i = t?.attributes || {}, o = Array.isArray(i.supported_color_modes) ? [...new Set(i.supported_color_modes.map((c) => String(c).toLowerCase()).filter(Boolean))] : [], r = Array.isArray(i.effect_list) ? i.effect_list.map((c) => String(c).toLowerCase()) : [], s = !!t && String(e).startsWith("light."), n = s && (o.some((c) => c !== "onoff") || Number.isFinite(Number(i.brightness))), d = s && r.some((c) => ha.has(c)), p = s && (Number(i.supported_features) & 8) === 8;
  return {
    exists: !!t,
    isLight: s,
    modes: o,
    color: s && o.some((c) => ga.has(c)),
    brightness: n,
    nativeEffect: d,
    nativeFlash: p,
    safeFlash: d || p || n,
    flashMethod: d ? "native_effect" : p ? "native_flash" : n ? "brightness_pulse" : "steady_safe"
  };
}
function _a(a, e) {
  return fe(a, e).color;
}
function fa(a) {
  return `#${(Array.isArray(a) && a.length === 3 ? a : [255, 0, 0]).map((t) => Math.max(0, Math.min(255, Number(t) || 0)).toString(16).padStart(2, "0")).join("")}`;
}
function Ye(a) {
  const e = /^#[0-9a-f]{6}$/i.test(a || "") ? a : "#ff0000";
  return [1, 3, 5].map((t) => parseInt(e.slice(t, t + 2), 16));
}
function G(a) {
  const e = a.shadowRoot;
  if (!e || e.getElementById("argus-entity-truth-style")) return;
  const t = document.createElement("style");
  t.id = "argus-entity-truth-style", t.textContent = `
[hidden]{display:none!important}.sos-output-row{grid-template-columns:minmax(0,1fr) auto!important;padding:6px 8px!important;border:1px solid rgba(255,255,255,.09);border-radius:16px;background:rgba(5,15,28,.16)}
.sos-output-settings summary,.light-siren-settings summary{white-space:normal!important}.argus-ha-capability{display:inline-flex;margin-left:6px;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.08);font-size:8px;font-weight:750;opacity:.72;text-transform:none;letter-spacing:0}
.argus-safe-note{margin-top:8px;padding:8px;border-radius:10px;background:rgba(255,183,77,.10);font-size:9px;line-height:1.35;opacity:.85}.argus-test-flash{width:100%;margin-top:8px;padding:7px 9px;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(46,168,255,.12);color:inherit;font-size:10px;font-weight:850;cursor:pointer}.argus-test-flash:disabled{opacity:.55;cursor:wait}
#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{flex:0 1 248px!important;width:248px!important;max-width:248px!important;min-width:205px!important;gap:6px!important;margin-inline:0!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor{min-height:34px!important;padding:6px 10px!important;gap:7px!important;border-radius:999px!important;box-sizing:border-box!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-icon{font-size:16px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-name{font-size:10px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-state{font-size:8px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-battery{font-size:9px!important;padding:2px 5px!important;border-radius:999px!important}
#widget-grid>#w-access{align-self:start!important;height:max-content!important;min-height:0!important;max-height:none!important}#widget-grid>#w-access .access-workspace:not(.open){display:none!important}#widget-grid>#w-access .access-workspace.open{max-height:430px!important;overflow:auto!important;overscroll-behavior:contain}#widget-grid>#w-activity,#widget-grid>#w-automations{grid-row:span 1!important;height:clamp(270px,32vh,340px)!important;min-height:270px!important;max-height:340px!important;align-self:start!important}#widget-grid>#w-activity #activity-log,#widget-grid>#w-automations #auto-view,#widget-grid>#w-automations #auto-view>div{min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}@media(max-width:760px){#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{width:min(100%,248px)!important;max-width:248px!important}#widget-grid>#w-activity,#widget-grid>#w-automations{height:360px!important;min-height:360px!important;max-height:360px!important}}`, e.appendChild(t);
}
async function $t(a, e, t, i, o) {
  if (!t || i === "none") return;
  const r = e.textContent;
  e.disabled = !0, e.textContent = "Probando de forma segura…";
  try {
    const s = { entity_id: t, flash_mode: i };
    _a(a, t) && Array.isArray(o) && (s.rgb_color = o);
    const n = await a._send("argus/test_light_output", s), d = { brightness_pulse: "pulso de brillo sin apagar", native_flash: "flash nativo", native_effect: "efecto nativo", steady_safe: "luz fija; destello bloqueado por seguridad", steady: "luz fija" }[n?.method] || "servicio seguro de luz";
    e.textContent = `✓ ${d}`;
  } catch (s) {
    e.textContent = `✗ ${s?.message || "No respondió la luz"}`;
  } finally {
    setTimeout(() => {
      e.disabled = !1, e.textContent = r;
    }, 4e3);
  }
}
function Ht(a, e) {
  return a.safeFlash ? `${a.color ? "🎨 Color y destello seguro" : "✨ Destello seguro"} — ${B(e)}` : `💡 Luz fija segura — ${B(e)}`;
}
function ue(a) {
  G(a);
  const e = a.shadowRoot?.getElementById("sos-output-chips");
  if (!e) return;
  const t = Array.isArray(a._panicOutputs) ? a._panicOutputs : [], i = a._panicOutputSettings || {};
  e.innerHTML = t.length ? t.map((o) => {
    const s = a._hass?.states?.[o]?.attributes?.friendly_name || o, n = fe(a, o), d = i[o] || {}, p = n.safeFlash && ["none", "gentle", "rapid"].includes(d.flash_mode) ? d.flash_mode : n.safeFlash && d.gentle_flash ? "gentle" : "none", c = n.modes.length ? n.modes.join(", ") : "sin capacidad declarada";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${B(o)}"><span>${B(s)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${B(o)}" aria-label="Eliminar">✕</button>${n.isLight ? `<details class="sos-output-settings"><summary>${Ht(n, s)} <span class="argus-ha-capability">HA: ${B(c)}</span></summary>${n.color ? `<label>Color <input type="color" data-sos-output-color="${B(o)}" value="${fa(d.rgb_color)}"></label>` : `<input type="hidden" data-sos-output-color="${B(o)}" value="#ffffff">`}${n.safeFlash ? `<label>Destello <select data-sos-output-flash="${B(o)}"><option value="none" ${p === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${p === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${p === "rapid" ? "selected" : ""}>Rápido</option></select></label><button type="button" class="argus-test-flash" data-test-sos-flash="${B(o)}">Probar destello seguro</button>` : '<div class="argus-safe-note">Esta entidad solo admite encendido/apagado. Argus la mantendrá encendida de forma fija y nunca hará ciclos repetidos que puedan restablecer el bombillo o el plug.</div>'}</details>` : ""}</div>`;
  }).join("") : `<div class="mode-sensor-none">${B(a._t("sos_no_outputs"))}</div>`, e.querySelectorAll("[data-remove-sos-output]").forEach((o) => o.addEventListener("click", () => {
    a._panicOutputs = t.filter((r) => r !== o.dataset.removeSosOutput), delete a._panicOutputSettings?.[o.dataset.removeSosOutput], ue(a);
  })), e.querySelectorAll("[data-test-sos-flash]").forEach((o) => o.addEventListener("click", () => {
    const r = o.dataset.testSosFlash, s = o.closest(".sos-output-settings"), n = s?.querySelector("[data-sos-output-flash]")?.value || "none", d = s?.querySelector('input[type="color"][data-sos-output-color]');
    $t(a, o, r, n, d ? Ye(d.value) : null);
  }));
}
function kt(a) {
  G(a);
  const e = a.shadowRoot;
  e && e.querySelectorAll("[data-light-siren-color]").forEach((t) => {
    const i = t.dataset.lightSirenColor, o = fe(a, i), r = t.closest(".light-siren-settings"), s = t.closest("label");
    !o.color && s && s.remove();
    const n = r?.querySelector("summary"), d = a._hass?.states?.[i]?.attributes?.friendly_name || i, p = o.modes.length ? o.modes.join(", ") : "sin capacidad declarada";
    n && (n.innerHTML = `${Ht(o, d)} <span class="argus-ha-capability">HA: ${B(p)}</span>`);
    const c = r?.querySelector("[data-light-siren-flash]");
    if (!o.safeFlash && c) {
      c.checked = !1, c.disabled = !0;
      const l = c.closest("label");
      l && (l.innerHTML = '<span class="argus-safe-note">Sin destello: luz fija para evitar ciclos de alimentación.</span>');
    }
    if (o.safeFlash && r && !r.querySelector("[data-test-mode-flash]")) {
      const l = document.createElement("button");
      l.type = "button", l.className = "argus-test-flash", l.dataset.testModeFlash = i, l.textContent = "Probar destello seguro", l.addEventListener("click", () => {
        const u = r.querySelector("[data-light-siren-flash]")?.checked, g = o.color ? r.querySelector("[data-light-siren-color]") : null;
        $t(a, l, i, u ? "gentle" : "none", g ? Ye(g.value) : null);
      }), r.appendChild(l);
    }
  });
}
function ba(a) {
  const e = a._currentModeConfig(), t = a.shadowRoot, i = t.getElementById("mode-require-closed"), o = t.getElementById("mode-arming-time"), r = t.getElementById("mode-entry-delay"), s = t.getElementById("mode-mqtt-enabled");
  i && (e.require_closed = i.checked), o && (e.arming_time = o.value ? parseInt(o.value, 10) : 0), r && (e.entry_delay = r.value ? parseInt(r.value, 10) : 0), s && (e.mqtt_enabled = s.checked), e.light_siren_settings = {}, t.querySelectorAll("[data-light-siren-flash]").forEach((n) => {
    const d = n.dataset.lightSirenFlash, p = fe(a, d), c = p.safeFlash && !!n.checked, l = { gentle_flash: c, flash_mode: c ? "gentle" : "none" };
    if (p.color) {
      const u = t.querySelector(`[data-light-siren-color="${CSS.escape(d)}"]`);
      u && (l.rgb_color = Ye(u.value));
    }
    e.light_siren_settings[d] = l;
  }), a._runWithPin(async () => {
    const n = a._modeEntryId || a._dashboard?.entries?.[0]?.entity_id || "default";
    a._ui.modes ||= {}, a._ui.modes.__by_entity__ ||= {}, a._ui.modes.__by_entity__[n] ||= {}, a._ui.modes.__by_entity__[n][a._mode] = { ...e };
    const d = t.getElementById("mode-status");
    d && (d.textContent = "…", d.className = "status");
    try {
      await a._send("argus/save_mode_config", { entity_id: n, mode: a._mode, config: e }), d && (d.textContent = a._t("saved"), d.className = "status ok show"), setTimeout(() => {
        d && (d.textContent = "", d.className = "status");
      }, 3e3);
    } catch (p) {
      d && (d.textContent = `✗ ${p?.message || "Error"}`, d.className = "status err show");
    }
  });
}
function ya(a) {
  if (!a || a.__argusLightCapabilityFixes) return;
  a.__argusLightCapabilityFixes = !0;
  const e = a.prototype, t = e.connectedCallback;
  e.connectedCallback = function() {
    return G(this), t?.call(this);
  };
  const i = e._load;
  e._load = async function() {
    const n = await i.call(this);
    return G(this), ue(this), kt(this), n;
  }, e._renderSosOutputs = function() {
    ue(this);
  };
  const o = e._acceptSelection;
  e._acceptSelection = function() {
    const n = o.call(this);
    return this._selectorTarget === "panic" && ue(this), n;
  };
  const r = e._renderModeView;
  e._renderModeView = function() {
    const n = r.call(this);
    return kt(this), n;
  };
  const s = e._renderEntries;
  e._renderEntries = function() {
    const n = s.call(this);
    return G(this), n;
  }, e._saveMode = function() {
    return ba(this);
  };
}
function At(a) {
  const e = a.shadowRoot, t = e?.getElementById("lbl-aesthetic-custom"), i = e?.getElementById("personalize-workspace");
  if (!e || !t || !i || t.dataset.argusPersonalizationToggle === "1") return;
  const o = t.cloneNode(!0);
  t.replaceWith(o), o.dataset.argusPersonalizationToggle = "1", o.setAttribute("role", "button"), o.setAttribute("tabindex", "0");
  const r = e.getElementById("btn-edit-home-name-standalone"), s = e.getElementById("btn-save-personalization-standalone"), n = (p) => {
    i.hidden = !p, i.classList.toggle("collapsed", !p), o.setAttribute("aria-expanded", String(p));
    const c = o.querySelector("#personalize-chevron");
    c && (c.style.transform = "none", c.textContent = p ? "▲ Ocultar" : "▼ Desplegar"), r && (r.hidden = !p), s && (s.hidden = !p);
  };
  n(!1);
  const d = () => n(o.getAttribute("aria-expanded") !== "true");
  o.addEventListener("click", d), o.addEventListener("keydown", (p) => {
    p.key !== "Enter" && p.key !== " " || (p.preventDefault(), d());
  });
}
function xa(a) {
  if (!a || a.__argusPersonalizationToggleFix) return;
  a.__argusPersonalizationToggleFix = !0;
  const e = a.prototype, t = e.connectedCallback;
  e.connectedCallback = function() {
    const o = t?.call(this);
    return queueMicrotask(() => At(this)), o;
  };
  const i = e._load;
  e._load = async function() {
    const o = await i?.call(this);
    return At(this), o;
  };
}
function Be(a) {
  if (a.shadowRoot?.getElementById("argus-dashboard-scroll-fixes")) return;
  const e = document.createElement("style");
  e.id = "argus-dashboard-scroll-fixes", e.textContent = `
#w-modes,#w-access{display:flex!important;flex-direction:column!important;min-height:0!important;overflow:hidden!important}
#w-modes .panel-head,#w-access .panel-head{flex:0 0 auto!important}
#w-modes #mode-tabs,#w-access .tabs{flex:0 0 auto!important;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:thin!important}
#w-modes #mode-view,#w-modes .mode-view,#w-modes .mode-config,#w-modes .mode-content,
#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list,#w-access .users-grid,#w-access .access-list{
 flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important;-webkit-overflow-scrolling:touch!important
}
#w-modes #mode-view::-webkit-scrollbar,#w-access #access-view::-webkit-scrollbar,#w-access .access-content::-webkit-scrollbar,#w-access .users-list::-webkit-scrollbar,#w-access .user-list::-webkit-scrollbar{width:7px}
#w-modes #mode-view::-webkit-scrollbar-thumb,#w-access #access-view::-webkit-scrollbar-thumb,#w-access .access-content::-webkit-scrollbar-thumb,#w-access .users-list::-webkit-scrollbar-thumb,#w-access .user-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:999px}
@media(max-width:760px){#w-modes,#w-access{min-height:420px!important;max-height:70dvh!important}#w-modes #mode-view,#w-access #access-view,#w-access .access-content{padding-bottom:28px!important}}
`, a.shadowRoot?.appendChild(e);
}
function va(a) {
  if (!a || a.__argusDashboardScrollFixes) return;
  a.__argusDashboardScrollFixes = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries;
  e.connectedCallback = function() {
    return Be(this), t?.call(this);
  }, e._load = async function() {
    const r = await i?.call(this);
    return Be(this), r;
  }, e._renderEntries = function() {
    const r = o?.call(this);
    return Be(this), r;
  };
}
const Tt = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Y = (a) => JSON.parse(JSON.stringify(a));
function De(a) {
  if (!Array.isArray(a)) return null;
  const e = /* @__PURE__ */ new Set(), t = [];
  for (const i of a) {
    const o = String(i?.id || "");
    !o || e.has(o) || (e.add(o), t.push({ id: o, size: Tt.has(i?.size) ? i.size : "M", hidden: !!i?.hidden }));
  }
  return t.length ? t : null;
}
function St(a) {
  try {
    return De(JSON.parse(localStorage.getItem("argus-widgets-v4") || localStorage.getItem("argus-widgets-v2") || "null"));
  } catch {
    return null;
  }
}
function wa(a) {
  const e = a.shadowRoot?.getElementById("widget-grid"), t = new Map((a._widgetConfig || []).map((i) => [i.id, i]));
  return De(e ? [...e.children].filter((i) => i.classList.contains("panel") && !i.classList.contains("dashboard-instances")).map((i) => {
    const o = i.id.replace(/^w-/, "");
    return { id: o, size: Tt.has(i.dataset.size) ? i.dataset.size : t.get(o)?.size || "M", hidden: !!t.get(o)?.hidden };
  }) : a._widgetConfig);
}
function Mt(a) {
  const e = wa(a);
  if (!e) return;
  a._widgetConfig = Y(e), localStorage.setItem("argus-widgets-v4", JSON.stringify(e)), a._ui = a._ui || {};
  const t = { ...a._ui.dashboard || {}, widget_layout: Y(e) };
  a._ui.dashboard = t;
  const i = a._dashboard?.entry_id || a._dashboard?.entries?.[0]?.entry_id, o = { dashboard: t, ...i ? { entry_id: i } : {} };
  a._v2041Save = (a._v2041Save || Promise.resolve()).catch(() => {
  }).then(() => a._send("argus/save_ui", o)).catch((r) => console.error("Argus layout save failed", r));
}
function ka(a) {
  if (a.shadowRoot?.getElementById("argus-v2041-audit-repair")) return;
  const e = document.createElement("style");
  e.id = "argus-v2041-audit-repair", e.textContent = `
#w-modes,#w-access{display:flex!important;flex-direction:column!important;overflow:hidden!important;min-height:320px!important}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid{flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-access [role=tabpanel]{min-height:220px!important;max-height:none!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important}
.argus-disarm-btn{--btn-bg:#64748b!important;background:linear-gradient(110deg,rgba(100,116,139,.58),rgba(30,41,59,.72))!important;border-color:rgba(255,255,255,.2)!important}
@media(max-width:760px){#w-modes,#w-access{min-height:440px!important;max-height:75dvh!important}}
`, a.shadowRoot?.appendChild(e);
}
function W(a) {
  ka(a), [...a.shadowRoot?.querySelectorAll(".entry") || []].forEach((o, r) => {
    const s = o.querySelector(".liquid-stack");
    if (!s || s.querySelector(".argus-disarm-btn")) return;
    const n = document.createElement("button");
    n.type = "button", n.className = "liquid-btn argus-disarm-btn", n.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", n.addEventListener("click", async () => {
      const d = a._dashboard?.entries?.[r] || a._dashboard?.entries?.find((p) => p.entity_id === o.dataset.entityId);
      if (d) {
        n.disabled = !0;
        try {
          await a._send("argus/perform_alarm_action", { entry_id: d.entry_id, action: "disarm" }), await a._load?.();
        } catch (p) {
          console.error("Argus disarm failed", p);
        } finally {
          n.disabled = !1;
        }
      }
    }), s.prepend(n);
  });
  const t = a.shadowRoot?.getElementById("w-access");
  if (t) {
    const o = t.querySelector(".panel-body,#access-view,.access-view,.access-content");
    o && !o.textContent.trim() && [...t.querySelectorAll("button,[role=tab]")].find((s) => /usuarios|users/i.test(s.textContent || ""))?.click();
  }
  const i = a.shadowRoot?.getElementById("widget-grid");
  if (i && !i._v2041) {
    i._v2041 = !0;
    for (const o of ["drop", "dragend"]) i.addEventListener(o, () => {
      a._widgetEditing && setTimeout(() => Mt(a), 0);
    }, !0);
  }
}
function Aa(a) {
  if (!a || a.__v2041AuditRepair) return;
  a.__v2041AuditRepair = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries, r = e._saveWidgetLayout, s = e._initWidgetGrid;
  e.connectedCallback = function() {
    const n = t?.call(this);
    W(this);
    let d;
    return this._v2041Observer = new MutationObserver(() => {
      clearTimeout(d), d = setTimeout(() => W(this), 80);
    }), this._v2041Observer.observe(this.shadowRoot, { childList: !0 }), n;
  }, e._initWidgetGrid = function() {
    const n = St();
    n && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: Y(n) });
    const d = s?.call(this);
    return n && (this._widgetConfig = Y(n), this._renderWidgetLayout?.()), W(this), d;
  }, e._load = async function() {
    const n = await i?.call(this), d = St();
    return d && (this._widgetConfig = Y(d), this._renderWidgetLayout?.()), W(this), n;
  }, e._renderEntries = function() {
    const n = o?.call(this);
    return W(this), n;
  }, e._saveWidgetLayout = function() {
    const n = r?.call(this);
    return setTimeout(() => Mt(this), 0), n;
  };
}
const Ot = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), qt = "argus-widgets-stable-v5", F = (a) => JSON.parse(JSON.stringify(a));
function Ue(a) {
  if (!Array.isArray(a)) return null;
  const e = /* @__PURE__ */ new Set(), t = [];
  for (const i of a) {
    const o = String(i?.id || "");
    !o || e.has(o) || (e.add(o), t.push({ id: o, size: Ot.has(i?.size) ? i.size : "M", hidden: !!i?.hidden }));
  }
  return t.length ? t : null;
}
function Et() {
  try {
    return Ue(JSON.parse(localStorage.getItem(qt) || localStorage.getItem("argus-widgets-v4") || "null"));
  } catch {
    return null;
  }
}
function j(a) {
  const e = a.shadowRoot?.getElementById("widget-grid"), t = new Map((a._widgetConfig || []).map((i) => [i.id, i]));
  return Ue(e ? [...e.children].filter((i) => i.classList.contains("panel") && !i.classList.contains("dashboard-instances")).map((i) => {
    const o = i.id.replace(/^w-/, "");
    return { id: o, size: Ot.has(i.dataset.size) ? i.dataset.size : t.get(o)?.size || "M", hidden: !!t.get(o)?.hidden };
  }) : a._widgetConfig);
}
function K(a, e = j(a)) {
  if (!e) return;
  localStorage.setItem(qt, JSON.stringify(e)), a._widgetConfig = F(e), a._ui = a._ui || {};
  const t = { ...a._ui.dashboard || {}, widget_layout: F(e) };
  a._ui.dashboard = t;
  const i = a._dashboard?.entry_id || a._dashboard?.entries?.[0]?.entry_id, o = { dashboard: t, ...i ? { entry_id: i } : {} };
  a._stableSave = (a._stableSave || Promise.resolve()).catch(() => {
  }).then(() => a._send("argus/save_ui", o)).catch((r) => console.error("Argus server layout save failed; stable local layout retained", r));
}
function Sa(a) {
  if (a.shadowRoot?.getElementById("argus-v2042-stability")) return;
  const e = document.createElement("style");
  e.id = "argus-v2042-stability", e.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:linear-gradient(110deg,#22c55e,#15803d)!important;border-color:rgba(134,239,172,.65)!important;color:white!important;box-shadow:0 8px 22px rgba(34,197,94,.22)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}
.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}
@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes,#w-access{display:flex!important;flex-direction:column!important;overflow:hidden!important;min-height:360px!important}#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
@media(max-width:760px){#w-modes,#w-access{min-height:480px!important;max-height:78dvh!important}}
`, a.shadowRoot?.appendChild(e);
}
function V(a) {
  Sa(a), [...a.shadowRoot?.querySelectorAll(".entry") || []].forEach((o, r) => {
    const s = a._dashboard?.entries?.[r], n = s?.attributes || {}, d = n.arming_blocking_sensors || [], p = !!(n.arming_waiting_for_sensors || d.length);
    o.classList.toggle("argus-waiting", p);
    const c = o.querySelector(".liquid-stack");
    if (c) {
      let u = c.querySelector(".argus-disarm-btn");
      u || (u = document.createElement("button"), u.type = "button", u.className = "liquid-btn argus-disarm-btn", u.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", u.onclick = async () => {
        if (s) {
          u.disabled = !0;
          try {
            await a._send("argus/perform_alarm_action", { entry_id: s.entry_id, action: "disarm" }), await a._load?.();
          } finally {
            u.disabled = !1;
          }
        }
      });
      const g = [...c.children].find((m) => /SOS|PÁNICO|PANIC/i.test(m.textContent || ""));
      g ? c.insertBefore(u, g) : c.appendChild(u);
    }
    const l = new Set(d.map((u) => {
      const g = a._dashboard?.available_entities?.find?.((m) => m.entity_id === u);
      return String(g?.name || u).toLocaleLowerCase();
    }));
    o.querySelectorAll(".console-sensor").forEach((u) => {
      const g = String(u.querySelector(".console-sensor-name")?.textContent || u.textContent || "").toLocaleLowerCase();
      u.classList.toggle("argus-blocking", [...l].some((m) => g.includes(m) || m.includes(g)));
    });
  });
  const t = a.shadowRoot?.getElementById("w-access");
  if (t) {
    const o = t.querySelector(".panel-body,#access-view,.access-view,.access-content,.access-body");
    o && !o.textContent.trim() && [...t.querySelectorAll("button,[role=tab]")].find((r) => /usuarios|users/i.test(r.textContent || ""))?.click();
  }
  const i = a.shadowRoot?.getElementById("widget-grid");
  i && !i._stableLayout && (i._stableLayout = !0, i.addEventListener("dragend", () => {
    a._widgetEditing && K(a, j(a));
  }, !0), i.addEventListener("drop", () => queueMicrotask(() => {
    a._widgetEditing && K(a, j(a));
  }), !1), new MutationObserver(() => {
    a._widgetEditing && (clearTimeout(a._stableMutation), a._stableMutation = setTimeout(() => K(a, j(a)), 80));
  }).observe(i, { childList: !0 }));
}
function Ea(a) {
  if (!a || a.__v2042Stability) return;
  a.__v2042Stability = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries, r = e._initWidgetGrid, s = e._toggleWidgetEditing, n = e._saveWidgetLayout;
  e.connectedCallback = function() {
    const d = t?.call(this);
    return V(this), d;
  }, e._initWidgetGrid = function() {
    const d = Et();
    d && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: F(d) });
    const p = r?.call(this);
    return d && (this._widgetConfig = F(d), this._renderWidgetLayout?.()), V(this), p;
  }, e._load = async function() {
    const d = await i?.call(this), p = Et();
    return p && (this._widgetConfig = F(p), this._renderWidgetLayout?.(), requestAnimationFrame(() => {
      this._widgetConfig = F(p), this._renderWidgetLayout?.();
    })), V(this), d;
  }, e._renderEntries = function() {
    const d = o?.call(this);
    return V(this), d;
  }, e._toggleWidgetEditing = function() {
    const d = this._widgetEditing, p = d ? j(this) : null, c = s?.call(this);
    return d && p && K(this, p), V(this), c;
  }, e._saveWidgetLayout = function() {
    const d = j(this), p = n?.call(this);
    return K(this, d), p;
  };
}
function Ia(a) {
  if (a.shadowRoot?.getElementById("argus-v2043-visual-fix")) return;
  const e = document.createElement("style");
  e.id = "argus-v2043-visual-fix", e.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:#22a447!important;background-image:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important;box-shadow:0 8px 22px rgba(34,197,94,.3)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important}
`, a.shadowRoot.appendChild(e);
}
function Re(a) {
  Ia(a), [...a.shadowRoot?.querySelectorAll(".entry") || []].forEach((e, t) => {
    const i = a._dashboard?.entries?.[t], o = i?.attributes || {}, r = o.arming_blocking_sensors || [], s = !!(o.arming_waiting_for_sensors || r.length);
    e.classList.toggle("argus-waiting", s);
    const n = e.querySelector(".liquid-stack");
    if (n) {
      let p = n.querySelector(".argus-disarm-btn");
      p || (p = document.createElement("button"), p.type = "button", p.className = "liquid-btn argus-disarm-btn", p.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", p.onclick = async () => {
        if (i) {
          p.disabled = !0;
          try {
            await a._send("argus/perform_alarm_action", { entry_id: i.entry_id, action: "disarm" }), await a._load?.();
          } finally {
            p.disabled = !1;
          }
        }
      }), p.style.setProperty("grid-column", "1 / -1", "important"), p.style.setProperty("width", "100%", "important"), p.style.setProperty("background", "#22a447", "important"), p.style.setProperty("background-image", "linear-gradient(110deg,#34c759,#16863a)", "important"), p.style.setProperty("color", "#fff", "important");
      const c = [...n.children].find((l) => /SOS|PÁNICO|PANIC/i.test(l.textContent || ""));
      c ? n.insertBefore(p, c) : n.appendChild(p);
    }
    const d = new Set(r.map((p) => String(a._dashboard?.available_entities?.find?.((c) => c.entity_id === p)?.name || p).toLocaleLowerCase()));
    e.querySelectorAll(".console-sensor").forEach((p) => {
      const c = String(p.querySelector(".console-sensor-name")?.textContent || p.textContent || "").toLocaleLowerCase();
      p.classList.toggle("argus-blocking", [...d].some((l) => c.includes(l) || l.includes(c)));
    });
  });
}
function Ca(a) {
  if (!a || a.__v2043VisualFix) return;
  a.__v2043VisualFix = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries;
  e.connectedCallback = function() {
    const r = t?.call(this);
    return Re(this), r;
  }, e._load = async function() {
    const r = await i?.call(this);
    return Re(this), r;
  }, e._renderEntries = function() {
    const r = o?.call(this);
    return Re(this), r;
  };
}
function ne(a) {
  return String(a || "").trim().toLocaleLowerCase();
}
function $e(a) {
  if (!a.shadowRoot) return;
  let e = a.shadowRoot.getElementById("argus-v2045-trigger-sensors");
  e || (e = document.createElement("style"), e.id = "argus-v2045-trigger-sensors", e.textContent = ".entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;color:#fff!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;box-shadow:0 0 18px rgba(249,115,22,.55)!important}@keyframes argusTriggeredSensor{0%,100%{opacity:.62;box-shadow:0 0 8px rgba(249,115,22,.35)}50%{opacity:1;box-shadow:0 0 26px rgba(251,146,60,.9)}}", a.shadowRoot.appendChild(e)), [...a.shadowRoot.querySelectorAll(".entry") || []].forEach((t, i) => {
    const o = a._dashboard?.entries?.[i], r = o?.attributes || {}, s = r.triggered_sensors || [], n = new Set(s.flatMap((d) => {
      const p = a._dashboard?.available_entities?.find?.((c) => c.entity_id === d);
      return [ne(d), ne(p?.name), ne(p?.friendly_name)];
    }).filter(Boolean));
    t.querySelectorAll(".console-sensor").forEach((d) => {
      const p = ne(d.querySelector(".console-sensor-name")?.textContent || d.textContent);
      d.classList.toggle("argus-triggered-sensor", [...n].some((c) => p.includes(c) || c.includes(p)));
    });
  });
}
function za(a) {
  if (!a || a.__v2045TriggerSensors) return;
  a.__v2045TriggerSensors = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries;
  e.connectedCallback = function() {
    const r = t?.call(this);
    return $e(this), r;
  }, e._load = async function() {
    const r = await i?.call(this);
    return $e(this), r;
  }, e._renderEntries = function() {
    const r = o?.call(this);
    return $e(this), r;
  };
}
const Na = { armed_home: /EN CASA|HOME/i, armed_away: /AUSENTE|AWAY/i, armed_night: /NOCHE|NIGHT/i, armed_vacation: /VACACIONES|VACATION/i };
function La(a, e) {
  const t = e?.entity_id || e?.alarm_entity_id;
  return String(e?.state || e?.alarm_state || e?.attributes?.state || a._hass?.states?.[t]?.state || "").toLowerCase();
}
function He(a, e, t) {
  a.classList.toggle("argus-action-active", t), a.dataset.argusAction = e;
  const i = e === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : e === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  a.style.setProperty("background", t ? i : "rgba(255,255,255,.105)", "important"), a.style.setProperty("background-image", t ? i : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), a.style.setProperty("border", t ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), a.style.setProperty("box-shadow", t ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important"), a.style.setProperty("backdrop-filter", "blur(16px) saturate(1.2)", "important");
}
function Te(a) {
  if (!a.shadowRoot) return;
  let e = a.shadowRoot.getElementById("argus-v2046-active-visuals");
  e || (e = document.createElement("style"), e.id = "argus-v2046-active-visuals", e.textContent = ".entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important;transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease!important}.entry .liquid-stack .liquid-btn:not(.argus-action-active):hover{background:rgba(255,255,255,.16)!important;transform:translateY(-1px)}.entry.argus-arming .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}", a.shadowRoot.appendChild(e)), [...a.shadowRoot.querySelectorAll(".entry") || []].forEach((t, i) => {
    const o = a._dashboard?.entries?.[i] || {}, r = o.attributes || {}, s = La(a, o), n = s === "arming" || !!r.arming_waiting_for_sensors || !!(r.arming_blocking_sensors || []).length;
    t.classList.toggle("argus-arming", n);
    const d = t.querySelector(".entry-icon");
    let p = t.querySelector(".argus-shield-status");
    n && d ? (p || (p = document.createElement("span"), p.className = "argus-shield-status", d.insertAdjacentElement("afterend", p)), p.textContent = (r.arming_blocking_sensors || []).length ? "ESPERANDO SENSORES" : "ARMANDO…") : p?.remove();
    const c = t.querySelector(".liquid-stack");
    c && [...c.querySelectorAll(".liquid-btn,button")].forEach((l) => {
      const u = String(l.textContent || "");
      if (/SOS|PÁNICO|PANIC/i.test(u)) He(l, "sos", !!r.argus_panic_active);
      else if (/DESARMAR|DISARM|OFF/i.test(u)) He(l, "disarm", s === "disarmed");
      else {
        const g = Object.entries(Na).find(([, m]) => m.test(u));
        g && He(l, g[0], s === g[0]);
      }
    });
  });
}
function Pa(a) {
  if (!a || a.__v2046ActiveVisuals) return;
  a.__v2046ActiveVisuals = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._load, o = e._renderEntries;
  e.connectedCallback = function() {
    const r = t?.call(this);
    return Te(this), r;
  }, e._load = async function() {
    const r = await i?.call(this);
    return Te(this), r;
  }, e._renderEntries = function() {
    const r = o?.call(this);
    return Te(this), r;
  };
}
const Ba = /* @__PURE__ */ new Set(["alarm_control_panel", "fan", "input_boolean", "light", "script", "siren", "switch"]), Ra = (a) => typeof a == "string" && a.split(".").length === 2 && Ba.has(a.split(".", 1)[0]);
function $a(a) {
  if (!a || a.__argusSosOutputPersistence) return;
  a.__argusSosOutputPersistence = !0;
  const e = a.prototype, t = e._acceptSelection;
  e._acceptSelection = async function() {
    if (this._selectorTarget !== "panic") return t?.call(this);
    const i = Array.isArray(this._panicOutputs) ? [...this._panicOutputs] : [], o = { ...this._panicOutputSettings || {} }, r = [...new Set((this._selected || []).filter(Ra))], s = { ...this._panicOutputSettings || {} };
    Object.keys(s).forEach((d) => {
      r.includes(d) || delete s[d];
    }), r.forEach((d) => {
      s[d] ??= { flash_mode: "none" };
    }), this._panicOutputs = r, this._panicOutputSettings = s, this._renderSosOutputs?.(), this._closeModal?.();
    const n = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    try {
      const d = await this._send("argus/save_panic_output_profile", { ...n ? { entry_id: n } : {}, outputs: r, settings: s });
      this._panicOutputs = Array.isArray(d?.outputs) ? d.outputs : r, this._panicOutputSettings = d?.settings && typeof d.settings == "object" ? d.settings : s, this._ui = this._ui || {}, this._ui.panic_outputs = this._panicOutputs, this._ui.panic_output_settings = this._panicOutputSettings, this._renderSosOutputs?.();
    } catch (d) {
      this._panicOutputs = i, this._panicOutputSettings = o, this._renderSosOutputs?.(), alert(`No se pudieron guardar las acciones SOS: ${d?.message || d}`);
    }
  };
}
const Ha = `#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`, Ta = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_sunPosition;
uniform vec3 u_moonPosition;
uniform float u_moonPhase;
uniform vec4 u_weather;       // x: Nubes, y: Lluvia, z: Nieve, w: Relámpagos
uniform vec2 u_cloudOffset;   // Offset acumulado del viento (calculado en JS)
uniform vec2 u_parallax;      // Offset de paralaje (mouse/giroscopio)

out vec4 FragColor;

float hash(float n) { return fract(sin(n) * 43758.5453123); }
float hash(vec2 p)  { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(
        mix(mix(hash(n+0.0), hash(n+1.0), f.x), mix(hash(n+57.0), hash(n+58.0), f.x), f.y),
        mix(mix(hash(n+113.0), hash(n+114.0), f.x), mix(hash(n+170.0), hash(n+171.0), f.x), f.y), f.z);
}

float fbm(vec3 p) {
    float f = 0.0, w = 0.5;
    for (int i = 0; i < 4; i++) { f += w * noise(p); p *= 2.02; w *= 0.5; }
    return f;
}

vec3 ACESFilm(vec3 x) {
    float a=2.51, b=0.03, c=2.43, d=0.59, e=0.14;
    return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    uv += u_parallax * 0.03;
    
    vec2 dropDistortion = vec2(0.0);
    float dropSpecular = 0.0;
    
    if (u_weather.y > 0.0) { 
        vec2 dropUV = uv * vec2(12.0, 6.0);
        dropUV.y += u_time * 0.4;
        dropUV.x += u_cloudOffset.x * 2.0; 
        
        vec2 grid = fract(dropUV) - 0.5;
        vec2 id = floor(dropUV);
        
        float rnd = hash(id * 123.45);
        vec2 dropPos = grid - vec2(rnd * 0.4 - 0.2, fract(rnd * 34.5) * 0.4 - 0.2);
        
        float d = length(dropPos);
        float dropShape = 1.0 - smoothstep(0.05, 0.35, d);
        
        dropDistortion = dropPos * dropShape * u_weather.y * 0.5; 
        dropSpecular = smoothstep(0.1, 0.2, d) * dropShape * u_weather.y * 0.8;
    }
    
    vec3 viewDir = normalize(vec3(uv + dropDistortion, -1.0));

    vec3 sunDir  = normalize(u_sunPosition);
    vec3 moonDir = normalize(u_moonPosition);

    float cosThetaSun = dot(viewDir, sunDir);
    float height      = max(0.0, viewDir.y);
    float opticalDepth = exp(-height / 0.1) * 8e3;
    vec3 rayleighCoeff = vec3(5.5e-6, 13.0e-6, 22.4e-6);
    vec3 skyBase = 22.0 * (1.0 + cosThetaSun * cosThetaSun) * rayleighCoeff * opticalDepth;
    skyBase = mix(skyBase, vec3(0.3, 0.35, 0.4) * 2.0, u_weather.x * 0.8);

    float nightFactor = step(sunDir.y, 0.1);

    float starNoise = hash(floor(uv * 200.0));
    float starGlow  = smoothstep(0.98, 1.0, starNoise)
                    * (0.5 + 0.5 * sin(u_time * 2.0 + starNoise * 10.0))
                    * (1.0 - smoothstep(-0.1, 0.1, sunDir.y));
    vec3 nightSky = vec3(starGlow) * nightFactor;

    float distMoon  = distance(viewDir, moonDir);
    float moonBody  = (1.0 - smoothstep(0.04, 0.045, distMoon)) * nightFactor;
    vec3  shadowOff = normalize(vec3(u_moonPhase - 0.5, 0.0, -1.0));
    float moonShadow = smoothstep(0.03, 0.05, distance(viewDir, moonDir + shadowOff * 0.02));
    nightSky += vec3(1.5, 1.5, 1.8) * moonBody * moonShadow;

    float sunGlow  = smoothstep(0.998, 1.0, cosThetaSun);
    vec3  sunColor = vec3(25.0, 20.0, 15.0) * sunGlow;

    vec3 skyColor = skyBase + sunColor + nightSky;

    vec3 cloudPos    = viewDir * 3.0 + vec3(u_time * 0.02 + u_cloudOffset.x, u_time * 0.01, u_cloudOffset.y);
    float cloudDensity = smoothstep(0.3, 0.8, fbm(cloudPos) * u_weather.x);

    vec3 lightDir    = sunDir.y > -0.1 ? sunDir : moonDir;
    float cloudShadow = fbm(cloudPos + lightDir * 0.1);
    vec3 cloudColor  = mix(vec3(0.2, 0.25, 0.3), vec3(1.2, 1.1, 1.0),
                           smoothstep(0.2, 0.8, cloudDensity - cloudShadow));

    float flashTiming   = fract(sin(u_time * 10.0) * 43758.5);
    float lightningFlash = smoothstep(0.95, 1.0, flashTiming) * u_weather.w * 50.0;
    cloudColor += vec3(0.8, 0.9, 1.0) * lightningFlash;

    vec3 hdrColor = mix(skyColor, cloudColor, cloudDensity);

    vec2 rainUV = uv * vec2(10.0, 2.0) + vec2(0.0, u_time * 3.0);
    float rain  = smoothstep(0.9, 1.0, hash(rainUV)) * u_weather.y;

    vec2 snowUV = uv * 5.0 + vec2(sin(u_time * 0.5), u_time * 0.5);
    float snow  = smoothstep(0.8, 1.0, fbm(vec3(snowUV, u_time))) * u_weather.z;

    hdrColor += vec3(0.5, 0.6, 0.7) * rain;
    hdrColor += vec3(1.5) * snow;
    hdrColor += vec3(1.0, 1.1, 1.2) * dropSpecular;

    vec3 ldrColor = ACESFilm(hdrColor);
    ldrColor = pow(ldrColor, vec3(1.0 / 2.2));
    FragColor = vec4(ldrColor, 1.0);
}`;
class Ma extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._canvas = document.createElement("canvas"), this._canvas.style.cssText = "width:100%;height:100%;display:block;";
    const e = document.createElement("style");
    e.textContent = ":host{display:block;width:100%;height:100%;min-height:300px;border-radius:24px;overflow:hidden;background:#000;position:absolute;inset:0;} canvas{width:100%;height:100%;display:block;}", this.shadowRoot.append(e, this._canvas), this.gl = null, this.program = null, this.uniforms = {}, this.startTime = performance.now(), this._animationFrame = null, this._resizeObserver = null, this._lastTime = null, this._cloudOffset = { x: 0, y: 0 }, this._lastMouseTime = 0, this.target = { sunY: 0.5, nubes: 0, lluvia: 0, nieve: 0, relampagos: 0, moonPhase: 1, wind: { x: 0, y: 0 }, parallax: { x: 0, y: 0 } }, this.current = { sunY: 0.5, nubes: 0, lluvia: 0, nieve: 0, relampagos: 0, moonPhase: 1, parallax: { x: 0, y: 0 } };
  }
  setConfig(e) {
    this._config = e;
  }
  set hass(e) {
    this._hass = e, this.gl && this._updateTargets();
  }
  get hass() {
    return this._hass;
  }
  connectedCallback() {
    const e = this._canvas, t = (i, o) => {
      if (i === 0 || o === 0) return;
      const r = Math.min(window.devicePixelRatio || 1, 2), s = Math.floor(i * r), n = Math.floor(o * r);
      (e.width !== s || e.height !== n) && (e.width = s, e.height = n, this.gl && this.gl.viewport(0, 0, e.width, e.height));
    };
    this._resizeObserver = new ResizeObserver((i) => {
      for (const o of i) {
        let r = o.contentRect.width || e.clientWidth || this.clientWidth, s = o.contentRect.height || e.clientHeight || this.clientHeight;
        t(r, s);
      }
    }), this._resizeObserver.observe(e), requestAnimationFrame(() => {
      (e.width === 0 || e.height === 0) && t(e.clientWidth || this.clientWidth || 100, e.clientHeight || this.clientHeight || 100);
    }), this.addEventListener("mousemove", this._onMouseMove.bind(this)), window.addEventListener("deviceorientation", this._onGyro.bind(this)), this._initWebGL(e);
  }
  disconnectedCallback() {
    this._animationFrame && cancelAnimationFrame(this._animationFrame), this._resizeObserver?.disconnect(), this.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("deviceorientation", this._onGyro), this.gl && this.program && this.gl.deleteProgram(this.program);
  }
  _updateTargets() {
    if (!this._hass) return;
    const e = this._hass.states["sun.sun"];
    e && (this.target.sunY = (e.attributes.elevation ?? 0) / 90, this.target.wind = { x: (e.attributes.wind_speed ?? 0) * 1e-3, y: 0 });
    const t = this._config?.weather_entity || "weather.home", i = this._hass.states[t];
    if (i) {
      const r = i.state;
      this.target.nubes = ["cloudy", "rainy", "pouring", "snowy", "lightning", "lightning-rainy", "partlycloudy"].includes(r) ? r === "partlycloudy" ? 0.5 : 1 : 0, this.target.lluvia = r === "pouring" ? 1 : r === "rainy" || r === "lightning-rainy" ? 0.6 : 0, this.target.nieve = r === "snowy" ? 1 : 0, this.target.relampagos = r === "lightning" || r === "lightning-rainy" ? 1 : 0;
    }
    const o = this._hass.states["sensor.moon_phase"];
    if (o) {
      const r = parseFloat(o.state) || 100;
      this.target.moonPhase = r > 1 ? r / 100 : r;
    }
  }
  _onMouseMove(e) {
    const t = Date.now();
    if (t - this._lastMouseTime < 16) return;
    this._lastMouseTime = t;
    const i = this.getBoundingClientRect();
    this.target.parallax.x = (e.clientX - i.left) / i.width * 2 - 1, this.target.parallax.y = -((e.clientY - i.top) / i.height * 2 - 1);
  }
  _onGyro(e) {
    this.target.parallax.x = (e.gamma ?? 0) / 45, this.target.parallax.y = (e.beta ?? 0) / 90;
  }
  _damp(e, t, i, o) {
    return t + (e - t) * Math.exp(-i * o);
  }
  _initWebGL(e) {
    const t = e.getContext("webgl2", { antialias: !1 });
    if (!t) {
      console.error("[Argus] WebGL2 no soportado");
      return;
    }
    t.getExtension("EXT_color_buffer_float");
    try {
      t.drawingBufferColorSpace = "display-p3", t.unpackColorSpace = "display-p3";
    } catch {
    }
    this.gl = t;
    const i = (p, c) => {
      const l = t.createShader(p);
      return t.shaderSource(l, c), t.compileShader(l), t.getShaderParameter(l, t.COMPILE_STATUS) ? l : (console.error("[Argus] Shader error:", t.getShaderInfoLog(l)), t.deleteShader(l), null);
    }, o = i(t.VERTEX_SHADER, Ha), r = i(t.FRAGMENT_SHADER, Ta);
    if (!o || !r) return;
    if (this.program = t.createProgram(), t.attachShader(this.program, o), t.attachShader(this.program, r), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) {
      console.error("[Argus] Link error:", t.getProgramInfoLog(this.program));
      return;
    }
    const s = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, s), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), t.STATIC_DRAW);
    const n = t.getAttribLocation(this.program, "position");
    t.enableVertexAttribArray(n), t.vertexAttribPointer(n, 2, t.FLOAT, !1, 0, 0), this.uniforms = {
      resolution: t.getUniformLocation(this.program, "u_resolution"),
      time: t.getUniformLocation(this.program, "u_time"),
      sunPosition: t.getUniformLocation(this.program, "u_sunPosition"),
      moonPosition: t.getUniformLocation(this.program, "u_moonPosition"),
      moonPhase: t.getUniformLocation(this.program, "u_moonPhase"),
      weather: t.getUniformLocation(this.program, "u_weather"),
      cloudOffset: t.getUniformLocation(this.program, "u_cloudOffset"),
      parallax: t.getUniformLocation(this.program, "u_parallax")
    }, t.useProgram(this.program), t.uniform3f(this.uniforms.sunPosition, 0, 0.5, -1), t.uniform3f(this.uniforms.moonPosition, 0.5, 0.3, -1), t.uniform1f(this.uniforms.moonPhase, 1), t.uniform4f(this.uniforms.weather, 0, 0, 0, 0), t.uniform2f(this.uniforms.cloudOffset, 0, 0), t.uniform2f(this.uniforms.parallax, 0, 0);
    const d = () => {
      if (!this.isConnected) return;
      const p = performance.now(), c = Math.min((p - (this._lastTime || p)) / 1e3, 0.1);
      this._lastTime = p;
      const l = this.current, u = this.target;
      this._firstFrame === void 0 ? (this._firstFrame = !1, l.sunY = u.sunY, l.nubes = u.nubes, l.lluvia = u.lluvia, l.nieve = u.nieve, l.relampagos = u.relampagos, l.moonPhase = u.moonPhase) : (l.sunY = this._damp(l.sunY, u.sunY, 0.5, c), l.nubes = this._damp(l.nubes, u.nubes, 5, c), l.lluvia = this._damp(l.lluvia, u.lluvia, 5, c), l.nieve = this._damp(l.nieve, u.nieve, 5, c), l.relampagos = this._damp(l.relampagos, u.relampagos, 8, c), l.moonPhase = this._damp(l.moonPhase, u.moonPhase, 1, c)), l.parallax.x = this._damp(l.parallax.x, u.parallax.x, 6, c), l.parallax.y = this._damp(l.parallax.y, u.parallax.y, 6, c), this._cloudOffset.x += (u.wind?.x || 0) * c, this._cloudOffset.y += (u.wind?.y || 0) * c, t.useProgram(this.program), t.bindBuffer(t.ARRAY_BUFFER, s), t.enableVertexAttribArray(n), t.vertexAttribPointer(n, 2, t.FLOAT, !1, 0, 0), t.uniform2f(this.uniforms.resolution, e.width, e.height), t.uniform1f(this.uniforms.time, (p - this.startTime) / 1e3), t.uniform3f(this.uniforms.sunPosition, 0, l.sunY, -1), t.uniform3f(this.uniforms.moonPosition, 0.2, -l.sunY + 0.2, -1), t.uniform1f(this.uniforms.moonPhase, l.moonPhase), t.uniform4f(this.uniforms.weather, l.nubes, l.lluvia, l.nieve, l.relampagos), t.uniform2f(this.uniforms.cloudOffset, this._cloudOffset.x, this._cloudOffset.y), t.uniform2f(this.uniforms.parallax, l.parallax.x, l.parallax.y), t.drawArrays(t.TRIANGLES, 0, 3), this._animationFrame = requestAnimationFrame(d);
    };
    d();
  }
}
customElements.get("argus-weather-panel") || customElements.define("argus-weather-panel", Ma);
function Me(a) {
  const e = a._ui?.color_scheme || a._dashboard?.ui?.color_scheme || a._currentUserTheme?.color_scheme, t = e === "light";
  if (a.classList.toggle("daytime-theme", t), !e && a._hass?.states?.["sun.sun"]) {
    const o = a._hass.states["sun.sun"].state === "above_horizon";
    a.classList.toggle("daytime-theme", o);
  }
  if (a.shadowRoot?.getElementById("argus-v2066-style")) return;
  const i = document.createElement("style");
  i.id = "argus-v2066-style", i.textContent = `
:host{--v2066-glass:linear-gradient(135deg,color-mix(in srgb,var(--card-background-color,#101827) 34%,transparent),color-mix(in srgb,var(--card-background-color,#101827) 15%,transparent));--v2066-border:color-mix(in srgb,var(--primary-text-color,#fff) 22%,transparent);--v2066-text:var(--primary-text-color,#f7f9ff);--v2066-muted:var(--secondary-text-color,rgba(247,249,255,.72))}
:host(.daytime-theme){--v2066-glass:linear-gradient(135deg,rgba(255,255,255,.3),rgba(255,255,255,.12));--v2066-border:rgba(0,0,0,.16);--v2066-text:#172033;--v2066-muted:#4c586d}
.glass,.liquid-glass,.panel,.entry,.argus-widget{background:var(--v2066-glass)!important;border:1px solid var(--v2066-border)!important;box-shadow:inset 0 1px 0 color-mix(in srgb,var(--primary-text-color,#fff) 16%,transparent),0 14px 38px rgba(0,0,0,.16)!important;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important;color:var(--v2066-text)!important}
.hero{position:relative!important;z-index:1000!important;overflow:visible!important}
.mode-section-card,.user-card,.file-card,.log-item,.personalize-section,.sos-configuration{background:rgba(255,255,255,0.035)!important;border:1px solid var(--v2066-border)!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;color:var(--v2066-text)!important}
:host(.daytime-theme) .mode-section-card,:host(.daytime-theme) .user-card,:host(.daytime-theme) .file-card,:host(.daytime-theme) .log-item,:host(.daytime-theme) .personalize-section,:host(.daytime-theme) .sos-configuration{background:rgba(0,0,0,0.03)!important;}
.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.panel h1,.panel h2,.panel h3,.panel h4,.panel-title,.section-title,.setting-label,.mode-section-title,.widget-title,.settings-section-title,.access-section-title{color:var(--v2066-text)!important;opacity:1!important;text-shadow:none!important}.panel p,.panel small,.hint,.muted,.setting-help,.mode-sensor-none{color:var(--v2066-muted)!important;opacity:1!important}
button,input,select,textarea,.glass-control{color:var(--v2066-text)!important;-webkit-text-fill-color:var(--v2066-text)!important;background-color:color-mix(in srgb,var(--card-background-color,#101827) 38%,transparent)!important;border-color:var(--v2066-border)!important}button{min-height:44px;touch-action:manipulation}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#2783de) 76%,white)!important;outline-offset:2px!important}
button.primary,button#selector-accept{background-color:var(--primary-color,#007aff)!important;background:var(--primary-color,#007aff)!important;color:#fff!important;-webkit-text-fill-color:#fff!important;border:1px solid rgba(0,122,255,0.2)!important;box-shadow:0 4px 12px rgba(0,122,255,0.25)!important}
button.primary:hover,button#selector-accept:hover{background-color:#0062cc!important;background:#0062cc!important}
:host(.daytime-theme) button:not(.primary):not(#selector-accept),:host(.daytime-theme) select,:host(.daytime-theme) input,:host(.daytime-theme) textarea,:host(.daytime-theme) .glass-control{background-color:rgba(0,0,0,0.05)!important;color:#172033!important;-webkit-text-fill-color:#172033!important;border-color:rgba(0,0,0,0.12)!important}
select option{background-color:#101827!important;color:#f7f9ff!important;-webkit-text-fill-color:#f7f9ff!important}
:host(.daytime-theme) select option{background-color:#ffffff!important;color:#172033!important;-webkit-text-fill-color:#172033!important}
.user-badge{display:inline-block!important;padding:4px 10px!important;border-radius:6px!important;font-size:10px!important;font-weight:800!important;letter-spacing:.04em!important;text-transform:uppercase!important;background:rgba(142,142,147,0.2)!important;color:#d1d1d6!important;border:1px solid rgba(142,142,147,0.35)!important}
:host(.daytime-theme) .user-badge{background:rgba(142,142,147,0.1)!important;color:#6e6e73!important;border:1px solid rgba(142,142,147,0.2)!important}
.user-badge.admin{background:rgba(255,159,10,0.2)!important;color:#ffca7a!important;border:1px solid rgba(255,159,10,0.35)!important}
:host(.daytime-theme) .user-badge.admin{background:rgba(255,149,0,0.1)!important;color:#b25900!important;border:1px solid rgba(255,149,0,0.2)!important}
.user-badge[style*="background:#4a148c"]{background:rgba(147,112,219,0.22)!important;color:#dcd0ff!important;border:1px solid rgba(147,112,219,0.4)!important}
:host(.daytime-theme) .user-badge[style*="background:#4a148c"]{background:rgba(74,20,140,0.1)!important;color:#4a148c!important;border:1px solid rgba(74,20,140,0.2)!important}
.user-badge[style*="color:#007aff"]{background:rgba(0,122,255,0.2)!important;color:#9bc5ff!important;border:1px solid rgba(0,122,255,0.35)!important}
:host(.daytime-theme) .user-badge[style*="color:#007aff"]{background:rgba(0,122,255,0.1)!important;color:#007aff!important;border:1px solid rgba(0,122,255,0.2)!important}
.user-badge[style*="color:#43a047"]{background:rgba(48,209,88,0.2)!important;color:#a4f6be!important;border:1px solid rgba(48,209,88,0.35)!important}
:host(.daytime-theme) .user-badge[style*="color:#43a047"]{background:rgba(52,199,89,0.1)!important;color:#248a3d!important;border:1px solid rgba(52,199,89,0.2)!important}
#hero-profile-container{display:flex;align-items:center;justify-content:center;margin-inline:14px}
@media(max-width:750px){#hero-profile-container{margin:8px 0 4px 0}}
.hero-profile-pill{display:flex;align-items:center;gap:8px;padding:5px 12px 5px 7px;border-radius:999px;background:var(--v2066-glass);border:1px solid var(--v2066-border);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 4px 12px rgba(0,0,0,0.12);backdrop-filter:blur(20px) saturate(140%);-webkit-backdrop-filter:blur(20px) saturate(140%);cursor:pointer;transition:transform 0.25s cubic-bezier(0.2,1,0.2,1)!important}
.hero-profile-pill:hover{transform:translateY(-1px)!important}
.hero-profile-pill:active{transform:scale(0.96)!important}
.hero-profile-dropdown{position:absolute;top:100%;right:0;margin-top:10px;width:280px;border-radius:20px;padding:16px;z-index:100000;display:none;flex-direction:column;gap:12px;transform-origin:top right;animation:iosPopIn 0.25s cubic-bezier(0.2,1,0.2,1) both;backdrop-filter:blur(30px) saturate(180%)!important;-webkit-backdrop-filter:blur(30px) saturate(180%)!important}
:host([argus-dark-mode="true"]) .hero-profile-dropdown{background:rgba(20,26,38,0.94)!important;border:1.5px solid rgba(255,255,255,0.12)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 20px 48px rgba(0,0,0,0.5)!important;color:#f1f5f9!important}
:host(.daytime-theme) .hero-profile-dropdown,:host([argus-dark-mode="false"]) .hero-profile-dropdown{background:rgba(255,255,255,0.97)!important;border:1.5px solid rgba(0,0,0,0.12)!important;box-shadow:0 20px 48px rgba(0,0,0,0.15)!important;color:#1e293b!important}
.hero-profile-dropdown .user-badge.admin{background:#ffb300!important;color:#000!important;font-weight:800!important;border:none!important}
.hero-profile-dropdown .user-badge:not(.admin){background:rgba(255,255,255,0.15)!important;color:var(--v2066-text)!important;font-weight:800!important}
:host(.daytime-theme) .hero-profile-dropdown .user-badge:not(.admin),:host([argus-dark-mode="false"]) .hero-profile-dropdown .user-badge:not(.admin){background:rgba(0,0,0,0.08)!important;color:#1e293b!important}
.hero-profile-dropdown label,.hero-profile-dropdown span:not(.user-badge){color:inherit!important}
.personalize-section{padding:14px 16px!important;gap:12px!important}
.personalize-grid{gap:10px 14px!important}
.personalize-field{margin-bottom:6px!important}
.personalize-section button,.sos-configuration button{min-height:32px!important;height:32px!important;padding:4px 12px!important;border-radius:10px!important;font-size:11px!important;font-weight:800!important}
.personalize-section select,.personalize-section input,.personalize-section .glass-control{padding:6px 10px!important;border-radius:10px!important;font-size:12.5px!important;min-height:32px!important;height:32px!important}
.personalize-section input[type="file"]{height:auto!important;min-height:0!important;padding:0!important}
@keyframes iosPopIn{from{transform:scale(0.9) translateY(-10px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}
@keyframes springBounceIn{0%{transform:scale(0.85);opacity:0}50%{transform:scale(1.02);opacity:0.8}75%{transform:scale(0.98);opacity:0.95}100%{transform:scale(1);opacity:1}}
@keyframes argusWelcomeFly{0%{opacity:0;transform:translate(-50%,-50%) scale(0.6)}30%{opacity:1;transform:translate(-50%,-50%) scale(1.05)}60%{opacity:1;transform:translate(-50%,-50%) scale(0.98)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
.wx-atmosphere{position:absolute;inset:0;overflow:hidden;isolation:isolate}
@media(prefers-color-scheme:light){:host:not(.daytime-theme){--v2066-glass:linear-gradient(135deg,rgba(255,255,255,.56),rgba(255,255,255,.24));--v2066-border:rgba(255,255,255,.72);--v2066-text:var(--primary-text-color,#172033);--v2066-muted:var(--secondary-text-color,#4c586d)}}`, a.shadowRoot?.appendChild(i);
}
function It(a) {
  const e = a.shadowRoot;
  !e || e.__argusLangSelectorBound || (e.__argusLangSelectorBound = !0, e.addEventListener("change", (t) => {
    const i = t.target;
    if (!i || !(i.matches(
      '#hero-lang-select, select[data-lang], .lang-selector, [name="language"], [id*="lang"]'
    ) || i.tagName === "SELECT" && i.closest?.(".hero-profile-dropdown"))) return;
    const r = i.value || null;
    a._manualLang = r;
    const s = a._dashboard?.entry_id || a._dashboard?.entries?.[0]?.entry_id;
    a._send?.("argus/save_ui", {
      ...s ? { entry_id: s } : {},
      manual_lang: r
    }).catch((n) => console.error("Argus lang save failed", n)), a._refreshLocalizedUi?.(), a._applyTranslations?.(), a._renderEntries?.();
  }, !0));
}
function Oa(a) {
  return a._selectorTarget = "panic", a._selected = Array.isArray(a._panicOutputs) ? [...a._panicOutputs] : [], typeof a._openModal == "function" ? (a._openModal("panic"), !0) : typeof a._openSelector == "function" ? (a._openSelector("panic"), !0) : typeof a._openEntitySelector == "function" ? (a._openEntitySelector("panic"), !0) : !1;
}
function Ct(a) {
  const e = a.shadowRoot;
  !e || e.__argusV2066SosBound || (e.__argusV2066SosBound = !0, e.addEventListener("click", (t) => {
    const i = t.target?.closest?.("button");
    if (!i) return;
    const o = `${i.textContent || ""} ${i.getAttribute("aria-label") || ""} ${i.title || ""}`.toLowerCase();
    (i.matches('[data-select-sos-output],[data-action="select-panic-outputs"],#select-sos-outputs,#btn-select-sos-outputs') || /seleccionar|select|a\u00f1adir|add/.test(o) && /luces|lights|sirenas|sirens|scripts|acciones sos|sos actions/.test(o)) && queueMicrotask(() => {
      e.querySelector('.modal.open,.ios-confirm-backdrop.open,[role="dialog"][open]') || Oa(a);
    }), i.matches("[data-remove-sos-output]") && queueMicrotask(async () => {
      const s = [...new Set(a._panicOutputs || [])], n = { ...a._panicOutputSettings || {} };
      Object.keys(n).forEach((p) => {
        s.includes(p) || delete n[p];
      });
      const d = a._dashboard?.entry_id || a._dashboard?.entries?.[0]?.entry_id;
      try {
        await a._send?.("argus/save_panic_output_profile", { ...d ? { entry_id: d } : {}, outputs: s, settings: n });
      } catch (p) {
        console.error("Argus v2.0.66 SOS remove failed", p);
      }
    });
  }, !0));
}
function qa(a) {
  if (!a || a.__argusV2066Webgl2AndUi) return;
  a.__argusV2066Webgl2AndUi = !0;
  const e = a.prototype, t = e.connectedCallback, i = e._renderEntries;
  e.connectedCallback = function() {
    Me(this);
    const r = t?.call(this);
    Ct(this), It(this);
    const s = this._ui?.manual_lang || this._dashboard?.ui?.manual_lang;
    return s && !this._manualLang && (this._manualLang = s), r;
  }, e._renderEntries = function() {
    const r = i?.call(this);
    return Me(this), Ct(this), It(this), r;
  }, e._renderAtmosphere = function(r, s) {
    return '<div class="wx wx-atmosphere" style="position:relative;width:100%;height:100%;display:block;"><argus-weather-panel></argus-weather-panel></div>';
  }, e._initWeatherWebGL = function(r) {
  };
  const o = Object.getOwnPropertyDescriptor(e, "hass");
  Object.defineProperty(e, "hass", {
    set(r) {
      o?.set && o.set.call(this, r), Me(this);
      const s = this.shadowRoot?.querySelector("argus-weather-panel");
      s && (s.hass = r, s.setConfig({ weather_entity: this._config?.weather_entity || "weather.home" }));
    },
    get() {
      return o?.get ? o.get.call(this) : this._hass;
    }
  });
}
function Fa(a) {
  wi(a);
}
function ja(a) {
  ki(a), Ci(a), Ri(a), Gi(a), Ki(a), Xi(a), oa(a), la(a), pa(a), ma(a), ya(a), xa(a), va(a), Aa(a), Ea(a), Ca(a), za(a), Pa(a), $a(a), qa(a);
}
function Ua(a) {
  a || (a = customElements.get("argus-panel-v2018"));
  const e = a;
  !e || e.__argusTypedFrontend || (e.__argusTypedFrontend = !0, Fa(e), Qt(e), Jt(e), ti(e), ni(e), li(e), ui(e), _i(e), yi(e), ja(e));
}
export {
  Ua as applyArgusFrontend
};
