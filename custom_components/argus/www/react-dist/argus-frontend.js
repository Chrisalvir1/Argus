const Vs = [
  { code: "auto", flag: "🏠", label: "Home Assistant" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ru", flag: "🇷🇺", label: "Русский" }
], Ne = {
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
}, Ug = {
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
}, Wg = {
  es: { setup_required_title: "Falta configurar Argus", setup_required_desc: "Argus está instalado, pero todavía no existe una instancia. Añádela en Integraciones y luego vuelve a este panel.", setup_required_action: "Configurar Argus en Integraciones", welcome_profile: "Bienvenido/a, {name}", initialization_error_title: "Argus no pudo iniciar", initialization_error_desc: "No se pudo conectar con el backend autenticado de Home Assistant.", retry_action: "Reintentar" },
  en: { setup_required_title: "Argus setup required", setup_required_desc: "Argus is installed, but no instance exists yet. Add it in Integrations, then return to this panel.", setup_required_action: "Configure Argus in Integrations", welcome_profile: "Welcome, {name}", initialization_error_title: "Argus could not start", initialization_error_desc: "The authenticated Home Assistant backend connection could not be established.", retry_action: "Retry" },
  fr: { setup_required_title: "Configuration d’Argus requise", setup_required_desc: "Argus est installé, mais aucune instance n’existe encore. Ajoutez-la dans Intégrations, puis revenez à ce panneau.", setup_required_action: "Configurer Argus dans Intégrations", welcome_profile: "Bienvenue, {name}", initialization_error_title: "Argus n’a pas pu démarrer", initialization_error_desc: "La connexion authentifiée au backend Home Assistant a échoué.", retry_action: "Réessayer" },
  pt: { setup_required_title: "É necessário configurar o Argus", setup_required_desc: "O Argus está instalado, mas ainda não existe uma instância. Adicione-a em Integrações e volte a este painel.", setup_required_action: "Configurar Argus em Integrações", welcome_profile: "Bem-vindo(a), {name}", initialization_error_title: "O Argus não pôde iniciar", initialization_error_desc: "Não foi possível conectar ao backend autenticado do Home Assistant.", retry_action: "Tentar novamente" },
  it: { setup_required_title: "Configurazione di Argus necessaria", setup_required_desc: "Argus è installato, ma non esiste ancora un’istanza. Aggiungila in Integrazioni, poi torna a questo pannello.", setup_required_action: "Configura Argus in Integrazioni", welcome_profile: "Benvenuto/a, {name}", initialization_error_title: "Argus non si è avviato", initialization_error_desc: "Impossibile connettersi al backend autenticato di Home Assistant.", retry_action: "Riprova" },
  zh: { setup_required_title: "需要配置 Argus", setup_required_desc: "Argus 已安装，但尚未创建实例。请在“集成”中添加，然后返回此面板。", setup_required_action: "在集成中配置 Argus", welcome_profile: "欢迎，{name}", initialization_error_title: "Argus 无法启动", initialization_error_desc: "无法连接到 Home Assistant 的已认证后端。", retry_action: "重试" },
  ru: { setup_required_title: "Требуется настройка Argus", setup_required_desc: "Argus установлен, но экземпляр ещё не создан. Добавьте его в разделе интеграций и вернитесь на эту панель.", setup_required_action: "Настроить Argus в интеграциях", welcome_profile: "Добро пожаловать, {name}", initialization_error_title: "Не удалось запустить Argus", initialization_error_desc: "Не удалось подключиться к авторизованному backend Home Assistant.", retry_action: "Повторить" }
}, Vg = {
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
}, Gg = {
  es: { setup_admin_name: "Nombre del Administrador", setup_access_pin: "PIN de acceso al panel Argus (Opcional)", setup_master_pin: "PIN maestro para armar/desarmar (Opcional)", claim_title: "Argus Security Update", claim_desc: "Tu instalación requiere un administrador para reclamar el acceso.", claim_btn: "Reclamar Administración" },
  en: { setup_admin_name: "Administrator Name", setup_access_pin: "Argus panel access PIN (Optional)", setup_master_pin: "Master PIN to arm/disarm (Optional)", claim_title: "Argus Security Update", claim_desc: "Your installation needs an administrator to claim access.", claim_btn: "Claim Administration" },
  fr: { setup_admin_name: "Nom de l’administrateur", setup_access_pin: "PIN d’accès au panneau Argus (Optionnel)", setup_master_pin: "PIN maître pour armer/désarmer (Optionnel)", claim_title: "Mise à jour de sécurité Argus", claim_desc: "Votre installation nécessite un administrateur pour réclamer l’accès.", claim_btn: "Réclamer l’administration" },
  pt: { setup_admin_name: "Nome do Administrador", setup_access_pin: "PIN de acesso ao painel Argus (Opcional)", setup_master_pin: "PIN mestre para armar/desarmar (Opcional)", claim_title: "Atualização de Segurança Argus", claim_desc: "Sua instalação precisa de um administrador para reivindicar o acesso.", claim_btn: "Reivindicar Administração" },
  it: { setup_admin_name: "Nome dell’amministratore", setup_access_pin: "PIN di accesso al pannello Argus (Opzionale)", setup_master_pin: "PIN master per armare/disarmare (Opzionale)", claim_title: "Aggiornamento di sicurezza Argus", claim_desc: "La tua installazione richiede un amministratore per rivendicare l’accesso.", claim_btn: "Rivendica Amministrazione" },
  zh: { setup_admin_name: "管理员名称", setup_access_pin: "Argus 面板访问 PIN (可选)", setup_master_pin: "布防/撤防主 PIN (可选)", claim_title: "Argus 安全更新", claim_desc: "您的安装需要管理员来声明访问权限。", claim_btn: "声明管理权限" },
  ru: { setup_admin_name: "Имя администратора", setup_access_pin: "PIN доступа к панели Argus (Необязательно)", setup_master_pin: "Мастер-PIN для постановки/снятия с охраны (Необязательно)", claim_title: "Обновление безопасности Argus", claim_desc: "Вашей установке требуется администратор для получения доступа.", claim_btn: "Заявить права администратора" }
};
for (const o of Object.keys(Ne))
  Object.assign(Ne[o], Ug[o], Wg[o], Vg[o], Gg[o]);
Object.assign(Ne.es, { expired: "Expirado", active_until: "Vigente hasta", exp_indefinite: "Indefinido" });
Object.assign(Ne.en, { expired: "Expired", active_until: "Valid until", exp_indefinite: "Indefinite" });
Object.assign(Ne.fr, { expired: "Expiré", active_until: "Expire", exp_indefinite: "Indéfini" });
Object.assign(Ne.pt, { expired: "Expirado", active_until: "Expira", exp_indefinite: "Indefinido" });
Object.assign(Ne.it, { expired: "Scaduto", active_until: "Scade", exp_indefinite: "Indefinito" });
Object.assign(Ne.zh, { expired: "已过期", active_until: "到期", exp_indefinite: "无限期" });
Object.assign(Ne.ru, { expired: "Истёк", active_until: "Действует до", exp_indefinite: "Бессрочно" });
Object.assign(Ne.es, { entry_sensors: "Sensores con retraso de entrada", select_entry_sensors: "Seleccionar sensores de entrada" });
Object.assign(Ne.en, { entry_sensors: "Entry-delay sensors", select_entry_sensors: "Select entry sensors" });
Object.assign(Ne.fr, { entry_sensors: "Capteurs avec délai d’entrée", select_entry_sensors: "Sélectionner les capteurs d’entrée" });
Object.assign(Ne.pt, { entry_sensors: "Sensores com atraso de entrada", select_entry_sensors: "Selecionar sensores de entrada" });
Object.assign(Ne.it, { entry_sensors: "Sensori con ritardo di ingresso", select_entry_sensors: "Seleziona sensori di ingresso" });
Object.assign(Ne.zh, { entry_sensors: "具有进入延迟的传感器", select_entry_sensors: "选择进入传感器" });
Object.assign(Ne.ru, { entry_sensors: "Датчики с задержкой входа", select_entry_sensors: "Выбрать датчики входа" });
Object.assign(Ne.es, { entry_delay_toggle: "Retraso de entrada (⏳) o instantáneo (⚡)", saved: "✓ Guardado correctamente", pin_mismatch: "❌ El nuevo PIN no coincide" });
Object.assign(Ne.en, { entry_delay_toggle: "Entry delay (⏳) or instant (⚡)", saved: "✓ Saved successfully", pin_mismatch: "❌ New PIN does not match" });
Object.assign(Ne.fr, { entry_delay_toggle: "Délai d’entrée (⏳) ou instantané (⚡)", saved: "✓ Enregistré", pin_mismatch: "❌ Le nouveau code PIN ne correspond pas" });
Object.assign(Ne.pt, { entry_delay_toggle: "Atraso de entrada (⏳) ou instantâneo (⚡)", saved: "✓ Salvo com sucesso", pin_mismatch: "❌ O novo PIN não coincide" });
Object.assign(Ne.it, { entry_delay_toggle: "Ritardo di ingresso (⏳) o istantaneo (⚡)", saved: "✓ Salvato correttamente", pin_mismatch: "❌ Il nuovo PIN non corrisponde" });
Object.assign(Ne.zh, { entry_delay_toggle: "进入延迟 (⏳) 或即时 (⚡)", saved: "✓ 已成功保存", pin_mismatch: "❌ 新 PIN 不匹配" });
Object.assign(Ne.ru, { entry_delay_toggle: "Задержка входа (⏳) или мгновенно (⚡)", saved: "✓ Успешно сохранено", pin_mismatch: "❌ Новый PIN-код не совпадает" });
Object.assign(Ne.es, { temp_displayed: "🌡️ Temperatura mostrada", weather_source: "☁️ Fuente de clima", weather_auto: "Automático (primera entidad de clima)", user_exp_type: "Vencimiento", user_exp_date: "Fecha/Hora de vencimiento", exp_temporary: "Temporal (fecha/hora)", log_mode: "Modo", log_action_user_added: "Usuario añadido", log_action_user_deleted: "Usuario eliminado", log_action_rejected: "Acción rechazada", log_action_automation: "Automatización ejecutada", log_action_analysis: "Análisis de IA", log_action_sos: "SOS activado", log_action_sos_stopped: "Pánico detenido" });
Object.assign(Ne.en, { temp_displayed: "🌡️ Displayed temperature", weather_source: "☁️ Weather source", weather_auto: "Automatic (first weather entity)", user_exp_type: "Expiration", user_exp_date: "Expiration date/time", exp_temporary: "Temporary (date/time)", log_mode: "Mode", log_action_user_added: "User added", log_action_user_deleted: "User deleted", log_action_rejected: "Action rejected", log_action_automation: "Automation executed", log_action_analysis: "AI analysis", log_action_sos: "SOS activated", log_action_sos_stopped: "Panic stopped" });
Object.assign(Ne.fr, { temp_displayed: "🌡️ Température affichée", weather_source: "☁️ Source météo", weather_auto: "Automatique (première entité météo)", user_exp_type: "Expiration", user_exp_date: "Date/heure d’expiration", exp_temporary: "Temporaire (date/heure)", log_mode: "Mode", log_action_user_added: "Utilisateur ajouté", log_action_user_deleted: "Utilisateur supprimé", log_action_rejected: "Action refusée", log_action_automation: "Automatisation exécutée", log_action_analysis: "Analyse IA", log_action_sos: "SOS activé", log_action_sos_stopped: "Panique arrêtée" });
Object.assign(Ne.pt, { temp_displayed: "🌡️ Temperatura exibida", weather_source: "☁️ Fonte de clima", weather_auto: "Automático (primeira entidade meteorológica)", user_exp_type: "Expiração", user_exp_date: "Data/hora de expiração", exp_temporary: "Temporário (data/hora)", log_mode: "Modo", log_action_user_added: "Usuário adicionado", log_action_user_deleted: "Usuário removido", log_action_rejected: "Ação recusada", log_action_automation: "Automação executada", log_action_analysis: "Análise de IA", log_action_sos: "SOS ativado", log_action_sos_stopped: "Pânico interrompido" });
Object.assign(Ne.it, { temp_displayed: "🌡️ Temperatura visualizzata", weather_source: "☁️ Fonte meteo", weather_auto: "Automatico (prima entità meteo)", user_exp_type: "Scadenza", user_exp_date: "Data/ora di scadenza", exp_temporary: "Temporaneo (data/ora)", log_mode: "Modalità", log_action_user_added: "Utente aggiunto", log_action_user_deleted: "Utente eliminato", log_action_rejected: "Azione rifiutata", log_action_automation: "Automazione eseguita", log_action_analysis: "Analisi IA", log_action_sos: "SOS attivato", log_action_sos_stopped: "Panico interrotto" });
Object.assign(Ne.zh, { temp_displayed: "🌡️ 显示的温度", weather_source: "☁️ 天气来源", weather_auto: "自动（第一个天气实体）", user_exp_type: "到期", user_exp_date: "到期日期/时间", exp_temporary: "临时（日期/时间）", log_mode: "模式", log_action_user_added: "已添加用户", log_action_user_deleted: "已删除用户", log_action_rejected: "操作被拒绝", log_action_automation: "自动化已执行", log_action_analysis: "AI 分析", log_action_sos: "SOS 已激活", log_action_sos_stopped: "紧急状态已停止" });
Object.assign(Ne.ru, { temp_displayed: "🌡️ Отображаемая температура", weather_source: "☁️ Источник погоды", weather_auto: "Автоматически (первая погодная сущность)", user_exp_type: "Срок действия", user_exp_date: "Дата/время окончания", exp_temporary: "Временный (дата/время)", log_mode: "Режим", log_action_user_added: "Пользователь добавлен", log_action_user_deleted: "Пользователь удалён", log_action_rejected: "Действие отклонено", log_action_automation: "Автоматизация выполнена", log_action_analysis: "Анализ ИИ", log_action_sos: "SOS активирован", log_action_sos_stopped: "Тревога остановлена" });
Object.assign(Ne.es, { external_panels: "Paneles de alarma externos", light_siren_color: "Color de alarma", light_siren_flash: "Destello suave si está disponible" });
Object.assign(Ne.en, { external_panels: "External alarm panels", light_siren_color: "Alarm colour", light_siren_flash: "Gentle flash when available" });
Object.assign(Ne.fr, { external_panels: "Panneaux d’alarme externes", light_siren_color: "Couleur d’alarme", light_siren_flash: "Clignotement doux si disponible" });
Object.assign(Ne.pt, { external_panels: "Painéis de alarme externos", light_siren_color: "Cor do alarme", light_siren_flash: "Piscar suave quando disponível" });
Object.assign(Ne.it, { external_panels: "Pannelli di allarme esterni", light_siren_color: "Colore allarme", light_siren_flash: "Lampeggio delicato se disponibile" });
Object.assign(Ne.zh, { external_panels: "外部报警面板", light_siren_color: "警报颜色", light_siren_flash: "可用时柔和闪烁" });
Object.assign(Ne.ru, { external_panels: "Внешние панели сигнализации", light_siren_color: "Цвет тревоги", light_siren_flash: "Мягкое мигание при наличии" });
const Ep = document.createElement("template");
Ep.innerHTML = `
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

  .ios-fullscreen { position: fixed !important; z-index: 999999 !important; display: flex !important; flex-direction: column !important; background: #000 !important; }
  @media(min-width:900px) {
    .ios-fullscreen { inset: 3% !important; width: 94vw !important; height: 94vh !important; max-width: 1500px !important; margin: auto !important; border-radius: 36px !important; border: 1px solid rgba(255,255,255,0.12) !important; box-shadow: 0 40px 100px rgba(0,0,0,0.8) !important; overflow: hidden !important; -webkit-mask-image: -webkit-radial-gradient(white, black) !important; }
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
  .wx-webgl{position:absolute;inset:0;z-index:2;width:100%;height:100%;pointer-events:none;opacity:.95}
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
class Yg extends HTMLElement {
  constructor() {
    super(), this._showSosConfirm = !1, this._sosEntryIdx = null, this._sosBusy = !1, this._sosSliding = !1, this._sosStartX = 0, this._sosOffsetX = 0, this._sosConfirmed = !1, this.attachShadow({ mode: "open" }).appendChild(Ep.content.cloneNode(!0)), this._wsId = 1, this._socket = null, this._dashboard = null, this._ui = null, this._available = [], this._mode = "home", this._modeEntryId = null, this._selected = [], this._selectorTarget = null, this._hass = null, this._prevStates = {}, this._notifTargets = [], this._users = [], this._haUsersList = [], this._isAdmin = !0, this._pinCallback = null, this._homeName = "", this._backgroundMode = "weather", this._backgroundImages = [], this._temperatureSource = "auto", this._weatherSource = "auto", this._pending = {}, this._lastClockUpdate = 0, this._manualLang = null, this._fullscreenIdx = -1, this._cachedBgUrl = null, this._cachedBgBrightness = void 0, this._hubBgMode = "default", this._hubBgFile = "", this._hubBgSound = !1, this._clockFormat = "auto", this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._panicOutputs = void 0, this._initPromise = null, this._staticBound = !1, this._postLoadBound = !1;
  }
  _getTimeZone() {
    return this._hass?.config?.time_zone || void 0;
  }
  _getClockFormat() {
    const n = this._clockFormat || this._ui?.clock_format || this._dashboard?.clock_format || "auto";
    return ["auto", "12h", "24h"].includes(n) ? n : "auto";
  }
  _formatTime(n) {
    if (!n) return "";
    const i = n instanceof Date ? n : new Date(n);
    if (isNaN(i.getTime())) return "";
    const a = this._getClockFormat(), l = this._getLocale(), c = this._getTimeZone(), u = { hour: "2-digit", minute: "2-digit" };
    if (c && (u.timeZone = c), a === "12h")
      u.hour12 = !0;
    else if (a === "24h")
      u.hour12 = !1;
    else {
      const m = this._hass?.locale?.time_format;
      m === "12" || m === "12h" ? u.hour12 = !0 : (m === "24" || m === "24h") && (u.hour12 = !1);
    }
    try {
      return new Intl.DateTimeFormat(l, u).format(i);
    } catch {
      return i.toLocaleTimeString(l, { hour: "2-digit", minute: "2-digit" });
    }
  }
  _formatDateTime(n) {
    if (!n) return "";
    const i = n instanceof Date ? n : new Date(n);
    if (isNaN(i.getTime())) return "";
    const a = this._getClockFormat(), l = this._getLocale(), c = this._getTimeZone(), u = {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    if (c && (u.timeZone = c), a === "12h")
      u.hour12 = !0;
    else if (a === "24h")
      u.hour12 = !1;
    else {
      const m = this._hass?.locale?.time_format;
      m === "12" || m === "12h" ? u.hour12 = !0 : (m === "24" || m === "24h") && (u.hour12 = !1);
    }
    try {
      return new Intl.DateTimeFormat(l, u).format(i);
    } catch {
      return i.toLocaleString(l, u);
    }
  }
  _updateProfileBadge() {
    const n = this.shadowRoot.getElementById("active-profile-pill"), i = this.shadowRoot.getElementById("profile-avatar"), a = this.shadowRoot.getElementById("profile-name"), l = this.shadowRoot.getElementById("profile-role");
    if (!n || !i || !a || !l) return;
    const c = this._currentProfile;
    if (!c) {
      n.style.display = "none";
      return;
    }
    n.style.display = "flex";
    const u = c.name || "User", m = u.slice(0, 2).toUpperCase();
    i.textContent = m, a.textContent = u;
    const g = c.role === "admin" ? "role_argus_admin" : "role_argus_user";
    l.textContent = this._t(g);
  }
  _getBrightness(n) {
    return new Promise((i) => {
      if (!n) {
        i(128);
        return;
      }
      const a = new Image();
      a.crossOrigin = "Anonymous", a.onload = () => {
        try {
          const l = document.createElement("canvas");
          l.width = 10, l.height = 10;
          const c = l.getContext("2d");
          if (!c) {
            i(128);
            return;
          }
          c.drawImage(a, 0, 0, 10, 10);
          const u = c.getImageData(0, 0, 10, 10).data;
          let m = 0, g = 0, _ = 0, f = 0;
          for (let k = 0; k < u.length; k += 4)
            m += u[k], g += u[k + 1], _ += u[k + 2], f++;
          const y = (0.299 * m + 0.587 * g + 0.114 * _) / f;
          i(y);
        } catch {
          i(128);
        }
      }, a.onerror = () => {
        i(128);
      }, a.src = n;
    });
  }
  async _updateTheme() {
    if (!this._hass) return;
    let n = !1;
    const i = this._hubBgMode || "default";
    if (i === "default")
      n = !0;
    else if (i === "image") {
      const a = this._hubBgFile || "";
      if (a)
        if (this._cachedBgUrl === a && this._cachedBgBrightness !== void 0)
          n = this._cachedBgBrightness < 135;
        else {
          const l = await this._getBrightness(a);
          this._cachedBgUrl = a, this._cachedBgBrightness = l, n = l < 135;
        }
      else
        n = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
    } else {
      const a = this._backgroundMode || "weather";
      if (a === "none")
        n = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      else if (a === "weather")
        if (this._hass.states?.["sun.sun"]?.state === "below_horizon")
          n = !0;
        else {
          const u = this._getWeatherEntity().state || "sunny";
          n = !["sunny", "fog", "snow", "windy"].includes(u);
        }
      else if (a === "photo" || a === "collage") {
        let l = "";
        if (this._backgroundImages && this._backgroundImages[0] ? l = this._backgroundImages[0] : this._panelBgFile && (l = this._panelBgFile), l)
          if (this._cachedBgUrl === l && this._cachedBgBrightness !== void 0)
            n = this._cachedBgBrightness < 135;
          else {
            const c = await this._getBrightness(l);
            this._cachedBgUrl = l, this._cachedBgBrightness = c, n = c < 135;
          }
        else
          n = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      }
    }
    this.setAttribute("argus-dark-mode", n ? "true" : "false");
  }
  set hass(n) {
    const i = this._hass;
    if (this._hass = n, this._updateTheme(), !this._dashboard?.entries?.length) {
      this._ensureInitialized();
      return;
    }
    const a = !1;
    i?.language !== n.language && !this._manualLang && this._refreshLocalizedUi();
    const c = this._dashboard.entries.some(
      (R) => R.entity_id && i?.states[R.entity_id]?.state !== n.states[R.entity_id]?.state
    ), u = this._temperatureSource === "auto" ? null : this._temperatureSource, m = u && i?.states[u]?.state !== n.states[u]?.state, g = this._weatherSource !== "auto" ? this._weatherSource : Object.values(n.states).find((R) => R.entity_id.startsWith("weather."))?.entity_id, _ = g && (i?.states[g]?.state !== n.states[g]?.state || i?.states[g]?.attributes?.temperature !== n.states[g]?.attributes?.temperature || i?.states[g]?.attributes?.temperature_unit !== n.states[g]?.attributes?.temperature_unit), f = /* @__PURE__ */ new Set(), y = (R) => {
      !R || typeof R != "object" || (Array.isArray(R.sensors) && R.sensors.forEach((P) => f.add(P)), Object.values(R).forEach((P) => {
        P && typeof P == "object" && y(P);
      }));
    };
    y(this._ui?.modes);
    const k = !!i && [...f].some((R) => {
      const P = i.states[R], E = n.states[R];
      return P?.state !== E?.state || P?.attributes?.battery_level !== E?.attributes?.battery_level || P?.attributes?.battery_percentage !== E?.attributes?.battery_percentage;
    }), z = !!i && Object.values(n.states).some((R) => {
      const P = R.entity_id || "", E = R.attributes?.device_class === "battery" || /_battery$/i.test(P), S = i.states[P];
      return E && S?.state !== R.state;
    });
    (c || k || z || m || a || _ || !i) && (this._renderEntries(), this._renderActivityLog(), i || (this._renderModeTabs(), this._renderModeView(), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers()));
  }
  get hass() {
    return this._hass;
  }
  /* ── Translation ─────────────────────────────────────────────────── */
  _t(n) {
    const i = this._getCurrentLangCode();
    return Ne[i]?.[n] || Ne.en[n] || n;
  }
  _format(n, i = {}) {
    return this._t(n).replace(/\{(\w+)\}/g, (a, l) => String(i[l] ?? `{${l}}`));
  }
  _escapeHtml(n) {
    return String(n ?? "").replace(/[&<>"']/g, (i) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[i]);
  }
  _getCurrentLangCode() {
    const n = this._manualLang || (this._hass?.language || "en").split("-")[0];
    return Ne[n] ? n : "en";
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
  _weatherPresentation(n, i) {
    const a = String(n || "sunny").toLowerCase().replace(/[\s-]+/g, "_"), l = {
      es: { sunny: "Soleado", clear_night: "Noche despejada", partlycloudy: "Parcialmente nublado", cloudy: "Nublado", rainy: "Lluvioso", pouring: "Lluvia intensa", lightning: "Tormenta eléctrica", lightning_rainy: "Tormenta con lluvia", snowy: "Nevando", fog: "Niebla", windy: "Ventoso", exceptional: "Condiciones excepcionales" },
      en: { sunny: "Sunny", clear_night: "Clear night", partlycloudy: "Partly cloudy", cloudy: "Cloudy", rainy: "Rainy", pouring: "Heavy rain", lightning: "Thunderstorm", lightning_rainy: "Thunderstorm with rain", snowy: "Snowing", fog: "Foggy", windy: "Windy", exceptional: "Exceptional conditions" },
      fr: { sunny: "Ensoleillé", clear_night: "Nuit claire", partlycloudy: "Partiellement nuageux", cloudy: "Nuageux", rainy: "Pluvieux", pouring: "Forte pluie", lightning: "Orage", lightning_rainy: "Orage avec pluie", snowy: "Neige", fog: "Brouillard", windy: "Venteux", exceptional: "Conditions exceptionnelles" },
      pt: { sunny: "Ensolarado", clear_night: "Noite limpa", partlycloudy: "Parcialmente nublado", cloudy: "Nublado", rainy: "Chuvoso", pouring: "Chuva forte", lightning: "Trovoada", lightning_rainy: "Trovoada com chuva", snowy: "Nevando", fog: "Neblina", windy: "Ventoso", exceptional: "Condições excepcionais" },
      it: { sunny: "Soleggiato", clear_night: "Notte serena", partlycloudy: "Parzialmente nuvoloso", cloudy: "Nuvoloso", rainy: "Piovoso", pouring: "Pioggia intensa", lightning: "Temporale", lightning_rainy: "Temporale con pioggia", snowy: "Nevica", fog: "Nebbia", windy: "Ventoso", exceptional: "Condizioni eccezionali" },
      zh: { sunny: "晴朗", clear_night: "晴夜", partlycloudy: "局部多云", cloudy: "多云", rainy: "有雨", pouring: "大雨", lightning: "雷暴", lightning_rainy: "雷雨", snowy: "下雪", fog: "有雾", windy: "有风", exceptional: "异常天气" },
      ru: { sunny: "Солнечно", clear_night: "Ясная ночь", partlycloudy: "Переменная облачность", cloudy: "Облачно", rainy: "Дождливо", pouring: "Сильный дождь", lightning: "Гроза", lightning_rainy: "Гроза с дождём", snowy: "Снег", fog: "Туман", windy: "Ветрено", exceptional: "Исключительные условия" }
    }, c = a.includes("lightning") ? "⛈️" : a === "pouring" || a.includes("rain") ? "🌧️" : a.includes("snow") || a === "hail" || a === "sleet" ? "❄️" : a === "fog" ? "🌫️" : a.includes("cloud") ? "☁️" : i ? "🌙" : "☀️", u = this._getCurrentLangCode();
    return { icon: c, label: l[u]?.[a] || l.en[a] || a.replace(/_/g, " ") };
  }
  _openLangModal() {
    const n = this.shadowRoot.getElementById("lang-modal");
    if (!n) return;
    const i = this.shadowRoot.getElementById("lang-grid"), a = this._manualLang || "auto";
    i && (i.innerHTML = Vs.map((u) => `
        <button class="lang-option${u.code === a ? " active" : ""}" data-lang="${u.code}">
          <span class="lang-flag">${u.flag}</span>
          <span>${u.code === "auto" ? this._t("use_ha_language") : u.label}</span>
        </button>`).join(""), i.querySelectorAll(".lang-option").forEach((u) => {
      u.addEventListener("click", () => {
        this._setLanguage(u.dataset.lang), this._closeLangModal();
      });
    }));
    const l = this.shadowRoot.getElementById("lang-modal-title");
    l && (l.textContent = `🌐 ${this._t("lang_select_title")}`);
    const c = n.querySelector(".lang-modal-card");
    c && (c.style.animation = "none", c.offsetWidth, c.style.animation = ""), n.classList.add("open");
  }
  _closeLangModal() {
    this.shadowRoot.getElementById("lang-modal")?.classList.remove("open");
  }
  _setLanguage(n) {
    if (n === "auto") {
      this._manualLang = null;
      try {
        localStorage.removeItem("argus_lang");
      } catch {
      }
      this._send("argus/save_ui", { language: null }).catch(console.error);
    } else {
      if (!Ne[n]) return;
      this._manualLang = n;
      try {
        localStorage.setItem("argus_lang", n);
      } catch {
      }
      this._send("argus/save_ui", { language: n }).catch(console.error);
    }
    this._refreshLocalizedUi();
  }
  _refreshLocalizedUi() {
    this._applyTranslations(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderActivityLog(), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers(), this._renderSosOutputs(), this._configureEmergencyCall(), this._updateHomeNameDisplay(), this._renderUploadedFiles();
  }
  _applyTranslations() {
    const n = (x) => this._t(x), i = (x) => this.shadowRoot.getElementById(x), a = (x, b) => {
      const w = i(x);
      w && (w.textContent = b);
    }, l = this._manualLang || "auto", c = Vs.find((x) => x.code === l) || Vs[1], u = i("lang-pill-flag"), m = i("lang-pill-label");
    u && (u.textContent = c.flag), m && (m.textContent = l === "auto" ? this._t("use_ha_language") : c.label), a("p-hero-desc", n("hero_desc")), a("h-instances", n("instances")), a("h-modes", n("modes")), a("h-automations", n("automations")), a("p-linked-rules", n("linked_rules")), a("h-settings", n("settings")), a("h-activity-log", n("activity_log")), a("btn-refresh-history", n("history_refresh")), a("t-change-pin", n("change_pin")), a("l-current-pin-lbl", n("current_pin")), a("lnk-forgot-pin", n("forgot_pin")), a("pin-forgot-link", n("forgot_pin")), a("btn-save-pin", n("update_pin")), a("l-new-pin", n("new_pin")), a("l-confirm-pin", n("confirm_pin")), a("h-notifications", n("notifications_title")), a("p-notif-desc", n("notif_desc")), a("h-users", n("users_title")), a("p-admin-only", n("admin_only")), a("t-add-user", n("add_user")), a("l-username", n("username")), a("l-user-pin", n("user_pin")), a("s-is-admin", n("is_admin")), a("l-user-exp-type", n("user_exp_type")), a("l-user-exp-date", n("user_exp_date"));
    const g = i("opt-exp-indefinite");
    g && (g.textContent = n("exp_indefinite"));
    const _ = i("opt-exp-temporary");
    _ && (_.textContent = n("exp_temporary")), a("selector-select-all", n("select_all")), a("selector-deselect-all", n("deselect_all")), a("l-available", n("available")), a("l-selected-lbl", n("selected_lbl")), a("l-introduce-pin", `🔒 ${n("introduce_pin")}`), a("l-pin-modal-desc", n("pin_modal_desc")), ((x) => {
      const b = i(x);
      b && (b.placeholder = n("search_placeholder"));
    })("selector-search");
    const y = (x, b) => {
      const w = i(x);
      w && (w.textContent = n(b));
    };
    y("btn-new-auto", "create_ha"), y("btn-save-pin", "update_pin"), y("btn-save-notif", "save_notif"), y("btn-save-user", "save_user"), y("selector-close", "close"), y("selector-clear", "clear"), y("selector-accept", "accept"), y("pin-cancel", "cancel"), y("pin-confirm", "confirm"), y("btn-cancel-sos", "cancel"), y("sos-call-btn", "sos_call"), y("home-name-cancel", "cancel"), y("home-name-save", "save_btn");
    const k = i("lang-modal-close");
    k && (k.textContent = `✕ ${n("close")}`), a("lbl-home-name-hdr", n("home_name_lbl")), a("lbl-panel-bg-title", n("bg_panel_title")), a("lbl-hub-bg-title", n("bg_hub_title")), a("s-panel-bg-sound-lbl", n("bg_sound_opt")), a("s-hub-bg-sound-lbl", n("bg_sound_opt")), a("lbl-aesthetic-text", "🎨 " + n("lbl_aesthetic_custom") + " (Avanzado)"), a("edit-widgets-label", this._widgetEditing ? "✓ " + n("done") : "⚙️ Config. Widgets"), a("lbl-temperature-source", n("temp_displayed")), a("lbl-weather-source", n("weather_source")), a("lbl-panel-bg-upload", n("lbl_load_file")), a("lbl-hub-bg-upload", n("lbl_load_file")), a("lbl-uploaded-files-title", n("lbl_uploaded_files")), a("btn-edit-home-name-standalone", n("edit_btn")), a("btn-save-personalization-standalone", n("save_btn")), a("btn-clear-log", n("clear_log_btn")), a("h-access-title", n("access_title")), a("p-access-desc", n("access_desc")), a("btn-access-users", `👥 ${n("users_title").replace(/^👥\s*/, "").replace(/\s(?:y|&|e)\s.*$/i, "")}`), a("btn-access-pin", `🔐 ${n("pin_master_title")}`), a("h-settings-pin", n("pin_master_title")), a("p-pin-remove-hint", n("pin_remove_hint")), a("h-backup-title", n("backup_title")), a("p-backup-desc", n("backup_desc")), a("btn-export-config", n("export_btn")), a("btn-reset-config", n("reset_btn")), a("btn-undo-reset", n("undo_reset_btn")), a("btn-import-trigger", n("import_btn")), a("github-title", n("github_title")), a("github-desc", n("github_desc")), a("github-action", `⭐ ${n("github_action")}`), a("sos-title-txt", n("sos_confirm_title")), a("sos-text-txt", n("sos_confirm_text")), a("sos-label", n("sos_slide")), a("home-name-modal-h3", n("home_name_modal_title")), a("p-home-name-modal-desc", n("home_name_modal_desc")), a("l-home-name-modal-label", n("home_name_label")), a("lang-modal-title", `🌐 ${n("lang_select_title")}`), a("sos-call-help", n("sos_call_help")), a("lbl-emergency-number", n("emergency_number_label")), a("emergency-number-help", n("emergency_help")), a("lbl-sos-actions", n("sos_actions")), a("btn-select-sos-outputs", n("sos_select_outputs")), a("sos-output-help", n("sos_outputs_help")), a("home-name-modal-desc", n("home_name_modal_desc")), a("pin-backspace", n("delete"));
    const z = i("bg-mode-select-standalone");
    if (z) {
      const x = z.value;
      z.innerHTML = `
        <option value="weather">${n("bg_weather")}</option>
        <option value="none">${n("bg_panel_none")}</option>
        <option value="photo">${n("bg_photo")}</option>
        <option value="collage">${n("bg_collage")}</option>
      `, x && (z.value = x);
    }
    const R = i("hub-bg-mode-select");
    if (R) {
      const x = R.value;
      R.innerHTML = `
        <option value="default">${n("bg_hub_default")}</option>
        <option value="image">${n("bg_image_opt")}</option>
      `, x && (R.value = x);
    }
    this._populateTemperatureSources(), this._populateWeatherSources();
    const P = i("current-pin-display");
    if (P) {
      const x = this._dashboard?.entries?.[0]?.pin_configured;
      if (x != null)
        P.textContent = n(x ? "pin_active_yes" : "pin_active_no");
      else {
        const b = P.textContent || "", w = b.includes("Sí") || b.includes("Yes") || b.includes("Sim") || b.includes("Sì") || b.includes("是") || b.includes("Да") || b.includes("Ja") || b.includes("Oui") || b.includes("Activo") || b.includes("Active");
        P.textContent = n(w ? "pin_active_yes" : "pin_active_no");
      }
    }
    const E = i("home-name-input");
    E && (E.placeholder = n("home_name_placeholder"));
    const S = i("panel-bg-url-input");
    S && (S.placeholder = n("url_placeholder"));
    const h = i("hub-bg-url-input");
    h && (h.placeholder = n("url_placeholder")), this._syncAccessSummary();
  }
  _syncAccessSummary() {
    const n = this.shadowRoot?.getElementById("p-access-desc");
    if (!n) return;
    if (!this._dashboard) {
      n.textContent = this._t("access_desc");
      return;
    }
    const i = this._dashboard.entries?.[0]?.pin_configured === !0, a = this._t(i ? "pin_active_yes" : "pin_active_no"), l = Array.isArray(this._users) ? this._users.filter((u) => u?.enabled !== !1).length : 0, c = l > 0 ? `${this._t("users_title")}: ${l}` : this._t("no_users");
    n.textContent = `${a} · ${c}`;
  }
  _toggleAccessSection(n) {
  }
  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() {
    try {
      this._manualLang = localStorage.getItem("argus_lang") || null;
    } catch {
    }
    this._ensureInitialized(), this._startClock(), this._onFsChange = () => {
      if (!(document.fullscreenElement || document.webkitFullscreenElement) && !this._kioskLocked) {
        this.classList.remove("fullscreen-active");
        const i = this.shadowRoot.querySelector(".entry.ios-fullscreen");
        i && i.classList.remove("ios-fullscreen"), this._fullscreenIdx = -1, document.body.style.overflow = "", this._renderEntries();
      }
    }, document.addEventListener("fullscreenchange", this._onFsChange), document.addEventListener("webkitfullscreenchange", this._onFsChange), this._onEscape = (n) => {
      n.key !== "Escape" || !this.classList.contains("fullscreen-active") || document.fullscreenElement || document.webkitFullscreenElement || this._exitFullscreenView();
    }, document.addEventListener("keydown", this._onEscape);
  }
  disconnectedCallback() {
    this._clockInterval && clearInterval(this._clockInterval), this._initRetryTimer && clearTimeout(this._initRetryTimer), this._socket && (this._socket.close(), this._socket = null), this._dashboard = null, this._currentProfile = null, this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._loadState = null, this._initPromise = null, this._onFsChange && (document.removeEventListener("fullscreenchange", this._onFsChange), document.removeEventListener("webkitfullscreenchange", this._onFsChange)), this._onEscape && document.removeEventListener("keydown", this._onEscape);
  }
  _startClock() {
    this._clockInterval && clearInterval(this._clockInterval), this._clockInterval = setInterval(() => {
      const n = /* @__PURE__ */ new Date();
      this._dashboard && (n.getSeconds() === 0 || !this._lastClockUpdate) && (this._lastClockUpdate = Date.now(), this._renderEntries());
    }, 1e3);
  }
  _ensureInitialized() {
    !this.isConnected || !this._hass || this._dashboard || this._initPromise || (this._initPromise = this._init().catch((n) => {
      console.error("Argus initialization failed:", n), this.isConnected && this._renderInitializationError(n);
    }).finally(() => {
      this._initPromise = null;
    }));
  }
  _bindSOS() {
    if (this._sosBound) return;
    const n = this.shadowRoot.getElementById("sos-thumb"), i = n && n.closest(".ios-slider-track");
    if (!n || !i || n._sosBound) return;
    n._sosBound = !0;
    let a = !1, l = 0, c = 0;
    const u = () => Math.max(1, i.offsetWidth - n.offsetWidth - 12), m = (y) => {
      a = !0, l = y.clientX - c, n.setPointerCapture(y.pointerId), n.style.transition = "none", n.style.cursor = "grabbing", y.preventDefault();
    }, g = (y) => {
      if (!a) return;
      c = Math.max(0, Math.min(y.clientX - l, u())), n.style.left = 6 + c + "px";
      const k = c / u();
      i.style.background = "rgba(217,4,41," + (0.15 + k * 0.55) + ")", k >= 0.98 && f(!0);
    }, _ = (y) => {
      a && f(!1);
    }, f = (y) => {
      a = !1, n.style.transition = "all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)", n.style.cursor = "grab", y ? (this._triggerSOS(), c = 0, setTimeout(() => {
        n.style.left = "6px", i.style.background = "rgba(217,4,41,0.15)";
      }, 600)) : (c = 0, n.style.left = "6px", i.style.background = "rgba(217,4,41,0.15)");
    };
    n.addEventListener("pointerdown", m), n.addEventListener("pointermove", g), n.addEventListener("pointerup", _), n.addEventListener("pointercancel", _), this._sosBound = !0;
  }
  async _init() {
    if (this._mode = "disarmed", this._staticBound || (this._bindStatic(), this._staticBound = !0), await this._connect(), this._applyTranslations(), await this._load(), !this._dashboard || (this._initWidgetGrid(), this._postLoadBound)) return;
    this._postLoadBound = !0, this.shadowRoot.getElementById("btn-clear-log")?.addEventListener("click", () => this._clearHistory()), this.shadowRoot.getElementById("btn-refresh-history")?.addEventListener("click", async () => {
      await this._loadActivityTimeline(this._dashboard?.entry_id), this._renderActivityLog();
    }), this.shadowRoot.getElementById("btn-export-forensic")?.addEventListener("click", () => this._exportForensicTimeline()), this.shadowRoot.getElementById("btn-export-config")?.addEventListener("click", () => this._exportConfig()), this.shadowRoot.getElementById("btn-import-trigger")?.addEventListener("click", () => this.shadowRoot.getElementById("import-config-file").click()), this.shadowRoot.getElementById("import-config-file")?.addEventListener("change", (a) => this._importConfig(a)), this.shadowRoot.getElementById("btn-reset-config")?.addEventListener("click", () => this._resetConfig()), this.shadowRoot.getElementById("btn-undo-reset")?.addEventListener("click", () => this._undoResetConfig()), this.shadowRoot.getElementById("btn-save-personalization-standalone")?.addEventListener("click", () => this._savePersonalization());
    const n = this.shadowRoot.getElementById("lbl-aesthetic-custom"), i = this.shadowRoot.getElementById("personalize-workspace");
    n?.addEventListener("click", () => {
      const a = i.classList.toggle("collapsed"), l = this.shadowRoot.getElementById("personalize-chevron");
      l && (l.style.transform = a ? "rotate(0deg)" : "rotate(-180deg)");
    }), this.shadowRoot.getElementById("btn-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), this._configureEmergencyCall();
  }
  async _clearHistory() {
    if (confirm(this._t("clear_history_confirm")))
      try {
        const n = this._dashboard?.entry_id;
        await this._send("argus/clear_audit_log", n ? { entry_id: n } : {}), await this._loadActivityTimeline(n), this._renderActivityLog();
      } catch (n) {
        alert(this._format("generic_error", { error: n.message }));
      }
  }
  async _loadActivityTimeline(n = null) {
    if (this._ui)
      try {
        const i = { limit: 100 };
        n && (i.entry_id = n);
        const a = await this._send("argus/get_forensic_timeline", i), l = Array.isArray(a?.timeline) ? a.timeline.filter((c) => c && typeof c == "object" && !Array.isArray(c)) : [];
        this._forensicTimeline = l, this._activityTimelineError = null, this._ui.audit_log = l, this._renderActivityLog();
      } catch (i) {
        console.warn("Argus activity timeline unavailable:", i), this._activityTimelineError = i?.message || String(i), this._forensicTimeline = null, Array.isArray(this._ui.audit_log) || (this._ui.audit_log = []), this._renderActivityLog();
      }
  }
  _exportForensicTimeline() {
    const n = Array.isArray(this._forensicTimeline) ? this._forensicTimeline : this._ui?.audit_log || [], i = new Blob([JSON.stringify({ format: "argus-forensic-timeline", generated_at: (/* @__PURE__ */ new Date()).toISOString(), events: n }, null, 2)], { type: "application/json" }), a = URL.createObjectURL(i), l = document.createElement("a");
    l.href = a, l.download = `argus_forensic_${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.json`, l.click(), setTimeout(() => URL.revokeObjectURL(a), 5e3);
  }
  _backupText(n) {
    const i = this._getCurrentLangCode(), a = {
      es: { password: "Contraseña de cifrado (mínimo 8 caracteres)", weak: "La contraseña debe tener al menos 8 caracteres.", decrypt: "Contraseña de la copia cifrada", bad: "No se pudo descifrar la copia. Verifica la contraseña." },
      en: { password: "Encryption password (minimum 8 characters)", weak: "The password must be at least 8 characters.", decrypt: "Encrypted backup password", bad: "The backup could not be decrypted. Check the password." },
      fr: { password: "Mot de passe de chiffrement (8 caractères minimum)", weak: "Le mot de passe doit comporter au moins 8 caractères.", decrypt: "Mot de passe de la sauvegarde chiffrée", bad: "Impossible de déchiffrer la sauvegarde. Vérifiez le mot de passe." },
      pt: { password: "Senha de criptografia (mínimo de 8 caracteres)", weak: "A senha deve ter pelo menos 8 caracteres.", decrypt: "Senha do backup criptografado", bad: "Não foi possível descriptografar o backup. Verifique a senha." },
      it: { password: "Password di cifratura (minimo 8 caratteri)", weak: "La password deve contenere almeno 8 caratteri.", decrypt: "Password del backup cifrato", bad: "Impossibile decifrare il backup. Verifica la password." },
      zh: { password: "加密密码（至少 8 个字符）", weak: "密码必须至少包含 8 个字符。", decrypt: "加密备份密码", bad: "无法解密备份，请检查密码。" },
      ru: { password: "Пароль шифрования (минимум 8 символов)", weak: "Пароль должен содержать не менее 8 символов.", decrypt: "Пароль зашифрованной копии", bad: "Не удалось расшифровать копию. Проверьте пароль." }
    };
    return (a[i] || a.en)[n];
  }
  _bytesToBase64(n) {
    let i = "";
    return n.forEach((a) => {
      i += String.fromCharCode(a);
    }), btoa(i);
  }
  _base64ToBytes(n) {
    return Uint8Array.from(atob(n), (i) => i.charCodeAt(0));
  }
  async _backupKey(n, i, a) {
    const l = await crypto.subtle.importKey("raw", new TextEncoder().encode(n), "PBKDF2", !1, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: i, iterations: 25e4, hash: "SHA-256" },
      l,
      { name: "AES-GCM", length: 256 },
      !1,
      a
    );
  }
  _requestBackupPassword(n) {
    return new Promise((i) => {
      const a = document.createElement("div");
      a.className = "modal-back open", a.setAttribute("role", "dialog"), a.setAttribute("aria-modal", "true");
      const l = n === "decrypt" ? this._backupText("decrypt") : this._backupText("password");
      a.innerHTML = `<div class="modal" style="max-width:430px"><div class="modal-head"><h3>${this._escapeHtml(l)}</h3></div><input type="password" class="glass-control" autocomplete="new-password" style="font-size:17px"><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:14px"><button class="ghost" data-secret-cancel>✕</button><button class="primary" data-secret-ok>✓</button></div></div>`, this.shadowRoot.appendChild(a);
      const c = a.querySelector("input"), u = (m) => {
        a.remove(), i(m);
      };
      a.querySelector("[data-secret-cancel]").addEventListener("click", () => u(null)), a.querySelector("[data-secret-ok]").addEventListener("click", () => u(c.value)), c.addEventListener("keydown", (m) => {
        m.key === "Enter" && u(c.value), m.key === "Escape" && u(null);
      }), requestAnimationFrame(() => c.focus());
    });
  }
  async _exportConfig() {
    try {
      const n = await this._requestBackupPassword("encrypt");
      if (n === null) return;
      if (n.length < 8) {
        alert(this._backupText("weak"));
        return;
      }
      const a = (await this._send("argus/export_config"))?.config;
      if (typeof a != "object" || a === null) throw new Error(this._t("invalid_config"));
      delete a.runtime;
      const l = crypto.getRandomValues(new Uint8Array(16)), c = crypto.getRandomValues(new Uint8Array(12)), u = await this._backupKey(n, l, ["encrypt"]), m = await crypto.subtle.encrypt({ name: "AES-GCM", iv: c }, u, new TextEncoder().encode(JSON.stringify(a))), g = {
        format: "argus-encrypted-backup",
        version: 1,
        kdf: "PBKDF2-SHA256",
        iterations: 25e4,
        cipher: "AES-256-GCM",
        salt: this._bytesToBase64(l),
        iv: this._bytesToBase64(c),
        data: this._bytesToBase64(new Uint8Array(m))
      }, _ = new Blob([JSON.stringify(g)], { type: "application/json" }), f = URL.createObjectURL(_), y = document.createElement("a");
      y.href = f, y.download = `argus_backup_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.argus`, y.click(), setTimeout(() => URL.revokeObjectURL(f), 5e3);
    } catch (n) {
      alert(this._format("export_error", { error: n.message }));
    }
  }
  _importConfig(n) {
    const i = n.target.files[0];
    if (!i) return;
    n.target.value = "";
    const a = new FileReader();
    a.onload = async (l) => {
      try {
        let c = JSON.parse(l.target.result);
        if (c?.format === "argus-encrypted-backup") {
          const u = await this._requestBackupPassword("decrypt");
          if (u === null) return;
          try {
            const m = this._base64ToBytes(c.salt), g = this._base64ToBytes(c.iv), _ = await this._backupKey(u, m, ["decrypt"]), f = await crypto.subtle.decrypt({ name: "AES-GCM", iv: g }, _, this._base64ToBytes(c.data));
            c = JSON.parse(new TextDecoder().decode(f));
          } catch {
            throw new Error(this._backupText("bad"));
          }
        }
        if (typeof c != "object" || c === null)
          throw new Error(this._t("invalid_config"));
        await this._send("argus/restore_config", { config: c }), alert(this._t("import_success")), window.location.reload();
      } catch (c) {
        alert(this._format("import_error", { error: c.message }));
      }
    }, a.onerror = () => alert(this._t("file_read_error")), a.readAsText(i);
  }
  async _resetConfig() {
    if (confirm(this._t("reset_confirm")))
      try {
        this._undoState = JSON.parse(JSON.stringify(this._ui));
        const n = {};
        await this._send("argus/restore_config", { config: n }), this.shadowRoot.getElementById("btn-reset-config").style.display = "none", this.shadowRoot.getElementById("btn-undo-reset").style.display = "block", alert(this._t("reset_success")), this._resetTimer = setTimeout(() => {
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
      } catch (n) {
        alert(this._format("undo_error", { error: n.message }));
      }
  }
  _bindStatic() {
    const n = (c) => this.shadowRoot.getElementById(c);
    n("selector-close").addEventListener("click", () => this._closeModal()), n("selector-accept").addEventListener("click", () => this._acceptSelection()), n("selector-clear").addEventListener("click", () => {
      this._selected = [], this._renderSelector();
    }), n("selector-search").addEventListener("input", () => this._renderSelector()), n("selector-modal").addEventListener("click", (c) => {
      c.target.id === "selector-modal" && this._closeModal();
    }), n("selector-select-all").addEventListener("click", () => this._selectAll()), n("selector-deselect-all").addEventListener("click", () => {
      this._selected = [], this._renderSelector();
    }), n("btn-new-auto").addEventListener("click", () => {
      history.pushState(null, "", "/config/automation/edit/new"), window.dispatchEvent(new CustomEvent("location-changed"));
    }), n("btn-access-users")?.addEventListener("click", () => this._toggleAccessSection("users")), n("btn-access-pin")?.addEventListener("click", () => this._toggleAccessSection("pin")), n("btn-save-pin").addEventListener("click", () => this._savePin()), n("lnk-forgot-pin")?.addEventListener("click", (c) => {
      c.preventDefault(), this._handleForgotPin();
    }), n("pin-forgot-link")?.addEventListener("click", (c) => {
      c.preventDefault(), this._handleForgotPin();
    }), n("pin-close").addEventListener("click", () => this._closePinModal()), n("pin-cancel").addEventListener("click", () => this._closePinModal()), n("pin-modal").addEventListener("click", (c) => {
      c.target.id === "pin-modal" && this._closePinModal();
    }), n("pin-confirm").addEventListener("click", () => this._submitPin()), n("pin-input").addEventListener("keydown", (c) => {
      c.key === "Enter" && this._submitPin();
    }), this.shadowRoot.querySelectorAll("[data-pin-digit]").forEach(
      (c) => c.addEventListener("click", () => this._appendPinDigit(c.dataset.pinDigit))
    ), n("pin-backspace").addEventListener("click", () => this._backspacePin()), n("btn-add-notif")?.addEventListener("click", () => this._addNotifTarget()), n("btn-save-notif")?.addEventListener("click", () => this._saveNotifications()), n("btn-edit-home-name-standalone")?.addEventListener("click", () => this._editHomeName()), n("home-name-modal-close").addEventListener("click", () => this._closeHomeNameModal()), n("home-name-cancel").addEventListener("click", () => this._closeHomeNameModal()), n("home-name-modal").addEventListener("click", (c) => {
      c.target.id === "home-name-modal" && this._closeHomeNameModal();
    }), n("home-name-save").addEventListener("click", () => this._saveHomeName()), n("home-name-input").addEventListener("keydown", (c) => {
      c.key === "Enter" && this._saveHomeName();
    }), n("btn-edit-widgets")?.addEventListener("click", () => this._toggleWidgetEditing());
    const i = n("lbl-aesthetic-custom"), a = n("personalize-workspace");
    i && a && !i._boundToggle && (i._boundToggle = !0, i.addEventListener("click", () => {
      const c = a.classList.toggle("collapsed"), u = n("personalize-chevron");
      u && (u.textContent = c ? "▼ Desplegar" : "▲ Ocultar");
    })), n("btn-lang-picker")?.addEventListener("click", () => this._openLangModal()), n("lang-modal-close")?.addEventListener("click", () => this._closeLangModal()), n("lang-modal")?.addEventListener("click", (c) => {
      c.target.id === "lang-modal" && this._closeLangModal();
    });
    const l = () => {
      n("sos-modal")?.classList.remove("open"), this._sosEntryIdx = null, n("sos-thumb") && (n("sos-thumb").style.left = "6px", n("sos-thumb").closest(".ios-slider-track").style.background = "rgba(217,4,41,0.15)");
    };
    n("btn-cancel-sos")?.addEventListener("click", l), n("sos-close-x")?.addEventListener("click", l), n("sos-modal")?.addEventListener("click", (c) => {
      c.target.id === "sos-modal" && l();
    }), n("bg-mode-select-standalone")?.addEventListener("change", () => this._updateBgFieldsVisibility()), n("hub-bg-mode-select")?.addEventListener("change", () => this._updateBgFieldsVisibility()), n("panel-bg-file-input")?.addEventListener("change", (c) => this._handlePanelBgFile(c)), n("hub-bg-file-input")?.addEventListener("change", (c) => this._handleHubBgFile(c));
  }
  /* ── WebSocket ───────────────────────────────────────────────────── */
  async _connect() {
    if (typeof this._hass?.callWS != "function")
      throw new Error("Home Assistant authenticated WebSocket is unavailable");
  }
  _send(n, i = {}) {
    return typeof this._hass?.callWS != "function" ? Promise.reject(new Error("Home Assistant authenticated WebSocket is unavailable")) : this._hass.callWS({ type: n, ...i });
  }
  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    let n;
    try {
      n = await this._send("argus/login_bootstrap");
    } catch (H) {
      console.error("Argus bootstrap load failed:", H);
      return;
    }
    this._bootstrap = n;
    const i = n.user_theme || { background_mode: "default", background_file: "" };
    if (this._currentUserTheme = i, i.background_mode !== "default" && i.background_file ? (this._backgroundMode = i.background_mode, this._panelBgFile = i.background_file, this._backgroundImages = [i.background_file]) : i.background_mode !== "default" && i.background_mode ? (this._backgroundMode = i.background_mode, this._panelBgFile = "", this._backgroundImages = []) : (this._backgroundMode = n.background_mode || "none", this._panelBgFile = "", this._backgroundImages = n.background_images || []), this._updateCanvasBackground(), n.configuration_missing) {
      this._loadState = "configuration_missing", this._renderMissingConfigurationScreen();
      return;
    }
    if (n.first_run) {
      this._loadState = "first_run", this._renderFirstRunScreen();
      return;
    }
    if (n.legacy_claim_needed) {
      this._loadState = "legacy_claim", this._renderLegacyClaimScreen();
      return;
    }
    if (!n.has_active_session || !this._profileSelectedThisMount) {
      this._loadState = "profile_selection", this._renderLoginScreen(n);
      return;
    }
    let a;
    try {
      a = await this._send("argus/dashboard");
    } catch (H) {
      if (H.message.includes("permission") || H.message.includes("session") || H.message.includes("unauthorized")) {
        this._renderLoginScreen(n);
        return;
      }
      console.error("Argus dashboard load failed:", H);
      return;
    }
    this._dashboard = a, this._loadState = "dashboard";
    const l = this.shadowRoot.getElementById("bootstrap-overlay");
    l && (l.style.display = "none"), this._currentProfile = a.current_profile || null, this._available = a.available_entities || [], this._ui = a.ui || { modes: {}, dashboard: {} }, await this._loadActivityTimeline(a.entry_id), this._notifTargets = a.ui?.notif_targets || [], this._users = Array.isArray(a.ui?.users) ? a.ui.users.filter((H) => H && typeof H == "object" && !Array.isArray(H)) : [], this._homeName = a.ui?.home_name || "", this._emergencyNumber = a.ui?.emergency_number || "911", this._panicOutputs = a.ui?.panic_outputs || [];
    const c = this._users.find((H) => H.id === this._myUserId) || {};
    this._backgroundMode = c.background_mode || a.ui?.background_mode || "weather", this._backgroundImages = c.background_images || a.ui?.background_images || [], this._temperatureSource = a.ui?.temperature_source || "auto", this._weatherSource = a.ui?.weather_source || "auto", this._panelBgFile = c.panel_bg_file !== void 0 ? c.panel_bg_file : a.ui?.panel_bg_file || "", this._panelBgSound = !!(c.panel_bg_sound !== void 0 ? c.panel_bg_sound : a.ui?.panel_bg_sound);
    const u = c.hub_bg_mode || a.ui?.hub_bg_mode || "none";
    this._hubBgMode = u === "none" || u === "default" ? "default" : u, this._hubBgFile = c.hub_bg_file !== void 0 ? c.hub_bg_file : a.ui?.hub_bg_file || "", this._hubBgSound = !!(c.hub_bg_sound !== void 0 ? c.hub_bg_sound : a.ui?.hub_bg_sound), this._updateTheme(), this._updateHomeNameDisplay(), this._updateProfileBadge(), this._showProfileWelcome(), this._populateTemperatureSources();
    const m = this.shadowRoot.getElementById("temp-source-select-standalone");
    m && (m.value = this._temperatureSource || "auto"), this._populateWeatherSources();
    const g = this.shadowRoot.getElementById("weather-source-select");
    g && (g.value = this._weatherSource || "auto");
    const _ = this.shadowRoot.getElementById("emergency-number-input");
    _ && (_.value = this._emergencyNumber), this._renderSosOutputs(), this._configureEmergencyCall();
    const f = this.shadowRoot.getElementById("bg-mode-select-standalone");
    f && (f.innerHTML = `
        <option value="weather">${this._t("bg_weather")}</option>
        <option value="none">${this._t("bg_panel_none")}</option>
        <option value="photo">${this._t("bg_photo")}</option>
        <option value="collage">${this._t("bg_collage")}</option>
      `, f.value = this._backgroundMode || "weather");
    const y = this.shadowRoot.getElementById("hub-bg-mode-select");
    y && (y.innerHTML = `
        <option value="default">${this._t("bg_hub_default")}</option>
        <option value="image">${this._t("bg_image_opt")}</option>
      `, y.value = this._hubBgMode || "default");
    const k = this.shadowRoot.getElementById("panel-bg-url-input");
    k && (k.value = this._panelBgFile && !this._panelBgFile.startsWith("data:") ? this._panelBgFile : "");
    const z = this.shadowRoot.getElementById("chk-panel-bg-sound");
    z && (z.checked = this._panelBgSound);
    const R = this.shadowRoot.getElementById("hub-bg-url-input");
    R && (R.value = this._hubBgFile && !this._hubBgFile.startsWith("data:") ? this._hubBgFile : "");
    const P = this.shadowRoot.getElementById("chk-hub-bg-sound");
    P && (P.checked = this._hubBgSound), this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._isAdmin = a.current_profile?.role === "admin", this._permissions = a.current_profile?.permissions || {};
    const E = a.entries?.[0]?.entity_id;
    if (E ? ((!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = E), this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null)) : (!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = null), this._isAdmin)
      try {
        const H = await this._send("argus/get_ha_users");
        this._haUsersList = H?.ha_users || [];
      } catch (H) {
        console.warn("Could not fetch HA users:", H);
      }
    const S = a.entries?.[0]?.pin_configured === !0, h = this.shadowRoot.getElementById("current-pin-display"), x = this.shadowRoot.getElementById("group-current-pin");
    h && (h.textContent = S ? this._t("pin_active_yes") : this._t("pin_active_no")), x && (S ? x.classList.remove("collapsed") : x.classList.add("collapsed"));
    const b = this.shadowRoot.getElementById("lnk-forgot-pin");
    b && (b.style.display = S ? "inline" : "none");
    const w = this.shadowRoot.getElementById("pin-forgot-link");
    w && (w.style.display = S ? "inline" : "none"), [
      ["instances", () => this._renderEntries()],
      ["activity log", () => this._renderActivityLog()],
      ["mode tabs", () => this._renderModeTabs()],
      ["mode view", () => this._renderModeView()],
      ["automations", () => this._renderAutomations()],
      ["notifications", () => this._renderNotifications()],
      ["users", () => this._renderUsers()]
    ].forEach(([H, W]) => {
      try {
        W();
      } catch (Z) {
        console.error(`Argus ${H} render failed:`, Z);
      }
    }), this._loadUploadedFiles();
    const A = a.entries && a.entries.length > 0, O = A && a.entries[0].entity_id;
    A && !O ? this._loadRetryTimeout || (this._loadRetryTimeout = setTimeout(() => {
      this._loadRetryTimeout = null, this._load();
    }, 1500)) : this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null);
  }
  /* ── Entries (alarm instances) ───────────────────────────────────── */
  _getSensorBattery(n, i) {
    return this._getDevicePower(n, i).battery;
  }
  // Read only values that Home Assistant exposes.  In particular, do not use a
  // lightning icon or assume 100% just because an entity has no battery sensor.
  _getDevicePower(n, i) {
    const a = i?.attributes || {}, l = [a.battery_level, a.battery, a.battery_percentage].find((g) => Number.isFinite(Number(g)));
    let c = l === void 0 ? null : Math.max(0, Math.min(100, Math.round(Number(l))));
    const u = String(a.power_source || a.power_supply || a.power_type || "").toLowerCase(), m = a.mains_powered === !0 || a.is_mains_powered === !0 || a.wired === !0 || /(?:mains|ac|wired|line|external|toma|corriente)/.test(u);
    if (c === null) {
      let g = null;
      const _ = (this._available || []).find((y) => y.entity_id === n);
      if (_ && _.device_id && (g = (this._available || []).find(
        (y) => y.device_id === _.device_id && (this._hass?.states?.[y.entity_id]?.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(y.entity_id))
      ), g && (g = { state: this._hass?.states?.[g.entity_id]?.state })), !g) {
        const y = n.split(".").slice(1).join(".").toLowerCase(), k = y.replace(/_(contact|door|window|motion|occupancy|opening|sensor)$/i, "");
        g = Object.values(this._hass?.states || {}).map((z) => {
          const R = String(z.entity_id || "").toLowerCase();
          if (!(z.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(R))) return { state: z, score: 0 };
          const E = R.split(".").slice(1).join("."), S = E === `${y}_battery` ? 100 : E === `${k}_battery` ? 90 : E.startsWith(`${y}_battery`) ? 80 : E.startsWith(`${k}_battery`) ? 70 : 0;
          return { state: z, score: S };
        }).filter((z) => z.score > 0).sort((z, R) => R.score - z.score)[0];
      }
      const f = Number(g?.state);
      Number.isFinite(f) && (c = Math.max(0, Math.min(100, Math.round(f))));
    }
    return { battery: c, mains: m };
  }
  _deviceFacts(n, i, a = !0) {
    const l = i?.state || "unknown", c = ["on", "unlocked", "open", "recording", "active", "motion"].includes(l), u = { on: this._t("status_open"), off: this._t("status_closed"), locked: this._t("status_closed"), unlocked: this._t("status_open"), idle: this._t("status_idle"), recording: this._t("status_recording"), home: this._t("status_home"), not_home: this._t("status_away") }, m = n.split(".")[0], g = ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(m), _ = this._getDevicePower(n, i), f = [];
    if (a && f.push({ text: g ? l.toUpperCase() : u[l] || l, className: g ? "" : c ? "status-open" : "status-closed" }), _.mains && f.push({ text: "🔌 AC", className: "power-mains" }), _.battery !== null) {
      const y = _.battery === 0, k = _.battery <= 10 && !y, z = y ? "🔋 ❌" : `🔋 ${_.battery}%`, R = y ? "dead" : k ? "low" : "";
      f.push({ text: z, className: `pill-power ${R}` });
    }
    return f;
  }
  _renderBatteryAlerts() {
    if (!this._hass?.states) return "";
    const n = this._hass.states, i = Object.values(n).filter((c) => {
      const u = c.entity_id?.endsWith("_battery") || c.attributes?.device_class === "battery", m = /dimmer|switch|light|plug|outlet/i.test(c.entity_id) || /dimmer|switch|light|plug|outlet/i.test(c.attributes?.friendly_name || "");
      if (!u || m || c.state === "unknown" || c.state === "unavailable") return !1;
      const g = Number(c.state);
      return !Number.isNaN(g) && g <= 20;
    });
    if (!i.length) return "";
    const a = (c) => this._t(c);
    return `<div class="battery-alerts-container" style="position:absolute; top:18px; left:18px; z-index:15; display:flex; flex-direction:column; gap:6px; max-width:75%; pointer-events:none;">${i.map((c) => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${a("battery_low")}: ${this._escapeHtml(c.attributes.friendly_name || c.entity_id)} (${c.state}%)</div>`).join("")}</div>`;
  }
  _modeButtonIcon(n) {
    const i = {
      home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z"/><path d="M9 21v-6h6v6"/>',
      away: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="M8.5 12h7M12 8.5v7"/>',
      night: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/><path d="m17.5 4 .5 1.2L19.2 6l-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.8z"/>',
      vacation: '<path d="M3 13.5 21 5l-6.8 15-2.3-6.2z"/><path d="m11.9 13.8 3.4 3.4M11.9 13.8 7.2 12"/>',
      disarm: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      sos: '<path d="M12 3 21 20H3z"/><path d="M12 9v4.5M12 17h.01"/>'
    };
    return `<svg class="mode-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i[n] || i.disarm}</svg>`;
  }
  _renderPremiumStatusIcon(n, i) {
    const a = i ? "triggered" : { armed_home: "home", armed_away: "away", armed_night: "night", armed_vacation: "vacation", disarmed: "disarm" }[n] || "disarm", l = { home: "#ffad42", away: "#ff6464", night: "#7fb9ff", vacation: "#d69cff", disarm: "#6be295", triggered: "#ff424f" }[a], c = {
      home: '<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away: '<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night: '<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
      vacation: '<path d="m67 113 66-34-28 66-9-25z"/><path d="m96 120 15 15M96 120l-20-6"/>',
      disarm: '<path d="m76 104 16 16 34-39"/>',
      triggered: '<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[a];
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 18px 28px rgba(0,0,0,.34));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(a)}"><defs><linearGradient id="premium-${a}" x1="20%" y1="10%" x2="85%" y2="100%"><stop stop-color="#fff" stop-opacity=".38"/><stop offset=".25" stop-color="${l}" stop-opacity=".78"/><stop offset="1" stop-color="${l}" stop-opacity=".18"/></linearGradient><filter id="premium-glow-${a}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${a})" stroke="${l}" stroke-width="3" filter="url(#premium-glow-${a})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(5,12,23,.3)" stroke="rgba(255,255,255,.22)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${a})">${c}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${l}" stroke-opacity=".42" stroke-width="2"><animate attributeName="r" values="51;60;51" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".6;.08;.6" dur="3.5s" repeatCount="indefinite"/></circle></svg>`;
  }
  _getIntelligentSVG(n, i, a, l) {
    return this._renderPremiumStatusIcon(n, l);
  }
  _renderEntries() {
    this._sosBound = !1;
    const n = this.shadowRoot.getElementById("entries"), i = this.shadowRoot.getElementById("global-status"), a = this._dashboard?.entries || [], l = (b) => this._t(b);
    if (!a.length) {
      n.innerHTML = `<div class="small" style="padding:10px">${l("no_instances")}</div>`;
      return;
    }
    const u = a.map((b) => this._hass?.states[b.entity_id]?.state || "unavailable").some((b) => b.startsWith("armed") || b === "triggered" || b === "pending");
    i.innerHTML = `<span class="badge ${u ? "armed_away" : "disarmed"}">${l(u ? "system_armed" : "system_disarmed")}</span>`;
    const g = this._getWeatherEntity().state || "sunny", _ = this._hass?.states?.["sun.sun"]?.state === "below_horizon", f = this._weatherPresentation(g, _), y = (b) => {
      const w = String(l(b) || "").trim(), A = w.indexOf(" ");
      return A > 0 && A <= 3 ? w.substring(A + 1).trim() : w;
    }, k = (/* @__PURE__ */ new Date()).toLocaleTimeString(this._getLocale(), { hour: "2-digit", minute: "2-digit" }), z = /* @__PURE__ */ new Date(), R = this.shadowRoot.getElementById("hero-clock-time"), P = this.shadowRoot.getElementById("hero-clock-date"), E = this.shadowRoot.getElementById("hero-weather-pill"), S = this.shadowRoot.getElementById("hero-security-pill");
    R && (R.textContent = k), P && (P.textContent = z.toLocaleDateString(this._getLocale(), { weekday: "short", month: "short", day: "numeric" })), E && (E.textContent = `${f.icon} ${f.label}`), S && (S.innerHTML = `<i class="hero-live" style="background:${u ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${u ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml(l(u ? "system_armed" : "system_disarmed"))}`), Array.from(n.querySelectorAll("article.entry")).length !== a.length && (n.innerHTML = a.map((b, w) => `<article class="entry" data-idx="${w}"></article>`).join(""));
    const x = n.querySelectorAll("article.entry");
    a.forEach((b, w) => {
      const A = x[w], H = this._hass?.states[b.entity_id]?.state || b.state || "unavailable", W = H === "triggered", Z = !!this._hass?.states?.[b.entity_id]?.attributes?.argus_panic_active;
      b.pin_configured === !0 || b.user_pin_configured;
      const ce = this._hass?.config?.location_name || this._homeName || l("home_fallback"), ae = this._getDisplayedTemperature(), ie = this._getTemperatureReadings();
      ({
        disarmed: { label: l("disarmed"), accent: "#55df91" },
        armed_home: { label: l("mode_home"), accent: "#ffb54d" },
        armed_away: { label: l("mode_away"), accent: "#ff724f" },
        armed_night: { label: l("mode_night"), accent: "#8ab9ff" },
        armed_vacation: { label: l("mode_vacation"), accent: "#d59bff" },
        triggered: { label: l("log_triggered"), accent: "#ff4d5d" },
        pending: { label: l("system_armed"), accent: "#ffb54d" }
      })[H] || H.replace(/_/g, " ");
      const pe = f.label, Y = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log[0] : null;
      Y && this._localizeActivityDetail(String(Y.action || ""), String(Y.detail || ""));
      const ee = H.replace("armed_", "");
      let J = this._ui?.modes?.__by_entity__?.[b.entity_id]?.[ee] || this._ui?.modes?.[ee] || {};
      if (W && !(J.sensors || []).length) {
        const K = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {};
        J = ["away", "home", "night", "vacation"].map((le) => K[le]).find((le) => (le?.sensors || []).some((_e) => ["on", "open", "unlocked", "recording", "active", "motion"].includes(this._hass?.states?.[_e]?.state))) || {};
      }
      let V = J.sensors || [];
      if (H === "disarmed" || !V.length) {
        const K = this._ui?.modes?.__by_entity__?.[b.entity_id] || this._ui?.modes || {}, le = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((_e) => {
          K[_e]?.sensors && K[_e].sensors.forEach((ze) => le.add(ze));
        }), V = Array.from(le);
      }
      const de = J.bypassed_sensors || [], ne = V.filter((K) => !de.includes(K)), T = ["on", "open", "unlocked", "recording", "active", "motion"], U = !!this._hass?.states?.[b.entity_id]?.attributes?.arming_waiting_for_sensors, ve = Array.isArray(this._hass?.states?.[b.entity_id]?.attributes?.arming_blocking_sensors) ? this._hass?.states?.[b.entity_id]?.attributes?.arming_blocking_sensors : [], Ae = ne.some((K) => T.includes(this._hass?.states?.[K]?.state)) && (H.startsWith("armed") || H === "pending" || U) && !W, Ie = this._fullscreenIdx === w || this._kioskLocked && (this._kioskEntryId === b.entry_id || a.length === 1);
      A.className = `entry cinematic-entry ${Ie ? "ios-fullscreen" : ""}`, A.style.cssText = W ? "border:3px solid #ff5252;box-shadow:0 0 30px rgba(255,82,82,.4)" : "", A.querySelectorAll(".wx-webgl").forEach((K) => K._argusWebglStop?.());
      const Me = ne.map((K) => {
        const le = this._hass?.states[K];
        if (!le) return "";
        const _e = T.includes(le.state), ze = le.attributes?.friendly_name || K.split(".")[1] || K, Re = le.attributes?.device_class || (K.startsWith("lock.") ? "lock" : "door");
        let Te = "";
        Re === "lock" ? Te = _e ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>' : Re === "window" ? Te = _e ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14l16 0"></path><path d="M4 10l16 0"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M4 12h16M12 4v16"></path></svg>' : Re === "motion" ? Te = _e ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M4.93 4.93a10 10 0 0 1 14.14 0M4.93 19.07a10 10 0 0 0 14.14 0"></path></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>' : Te = _e ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V2h12v20H4z"></path><path d="M16 4h4v18h-4"></path><circle cx="12" cy="12" r="1"></circle></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V2h12v20H6z"></path><circle cx="14" cy="12" r="1"></circle></svg>';
        const je = this._getDevicePower(K, le);
        let Xe = "";
        if (je.battery !== null) {
          const B = je.battery === 0, D = je.battery <= 10 && !B, X = B ? "🔋 ❌" : `🔋 ${je.battery}%`;
          (B || D) && (Xe = `<span style="margin-left:8px;font-size:10px;font-weight:700;color:#ff5252;background:rgba(255,255,255,0.1);backdrop-filter:blur(4px);padding:2px 6px;border-radius:10px;border:1px solid rgba(255,82,82,0.3);text-shadow:0 0 5px rgba(255,82,82,0.5);">${X}</span>`);
        }
        const N = U && ve.includes(K);
        return `<div class="console-sensor ${_e ? "open" : ""}"><span class="console-sensor-icon" style="display:flex;align-items:center;justify-content:center;color:${N ? "#ffd700" : _e ? "#ff968b" : "#75f4b0"};${N ? "animation:pulse 1s infinite;" : _e ? "animation:pulse 2s infinite;" : ""}">${Te}</span><span class="console-sensor-name" style="${N ? "color:#ffd700" : ""}">${this._escapeHtml(ze)}</span><span class="console-sensor-state" style="color:${N ? "#ffd700" : _e ? "#ff968b" : "#75f4b0"}">${this._escapeHtml(l(_e ? "status_open" : "status_closed"))}${Xe}</span></div>`;
      }).join("");
      A.innerHTML = `
          ${this._renderEntryBackground(g, _)}
          ${this._kioskLocked ? `<button class="btn-unlock-kiosk" data-action="unlock-kiosk" style="position:absolute;top:16px;right:16px;z-index:99;padding:8px 14px;background:rgba(220,38,38,0.85);color:white;border:none;border-radius:10px;font-weight:600;font-size:13px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 4px 12px rgba(0,0,0,0.4)">🔓 ${this._escapeHtml(l("unlock_kiosk") || "Desbloquear kiosco")}</button>` : ""}
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);z-index:100;padding:5px 12px;background:rgba(36,188,129,.2);border:1px solid rgba(36,188,129,.4);border-radius:20px;color:#75f4b0;font-size:11px;font-weight:700;backdrop-filter:blur(10px);box-shadow:0 4px 12px rgba(0,0,0,0.2);display:flex;align-items:center;gap:6px;white-space:nowrap;"><div style="width:7px;height:7px;border-radius:50%;background:#75f4b0;box-shadow:0 0 8px #75f4b0;"></div>CONECTADO</div>
          ${Ie ? `<button class="ghost entry-exit-fs" data-exit-fullscreen title="${this._escapeHtml(l("fullscreen_title"))}" aria-label="${this._escapeHtml(l("fullscreen_title"))}" style="position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);backdrop-filter:blur(12px);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 20px rgba(0,0,0,.3)">×</button>` : ""}
          ${Ie ? "" : `<button class="ghost fs-btn entry-fs" data-fullscreen="${w}" title="${this._escapeHtml(l("fullscreen_title"))}" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>`}
          ${this._renderBatteryAlerts()}
          <!-- HUD hidden inside security-console — data shown in .console-hud instead -->
          <div class="hud">
            <div class="hud-loc">${this._escapeHtml(ce)} · ${this._escapeHtml(pe)}</div>
            <div class="hud-data"><span>${this._escapeHtml(k)}</span>${ae ? `<i>🌡️ ${this._escapeHtml(ae)}</i>` : ""}</div>
            ${ie.length ? `<div class="hud-temperatures">${ie.map((K) => `<span class="hud-temperature">${this._escapeHtml(K.label)} ${this._escapeHtml(K.value)}</span>`).join("")}</div>` : ""}
          </div>
          <div class="entry-content security-console">
            <!-- Compact HUD bar at top of console — replaces overlapping absolute hud -->
            <div class="console-hud">
              <span class="console-hud-loc">🏡 ${this._escapeHtml(ce)} · ${this._escapeHtml(pe)}</span>
              <div class="console-hud-right">
                <span class="console-hud-time">${this._escapeHtml(k)}</span>
                ${ae ? `<span class="console-hud-temp">🌡️ ${this._escapeHtml(ae)}</span>` : ""}
                ${ie.length ? `<div class="console-hud-temps">${ie.map((K) => `<span class="console-hud-tpill">${this._escapeHtml(K.label)} ${this._escapeHtml(K.value)}</span>`).join("")}</div>` : ""}
              </div>
            </div>
            <div class="entry-icon" style="display:flex;justify-content:center;animation:float-icon 5s ease-in-out infinite;">
              ${this._getIntelligentSVG(U ? "pending" : H, null, _, W)}
            </div>
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${H === "armed_home" ? "active" : ""} ${Ae && H === "armed_home" ? "buzz-orange" : ""}" data-idx="${w}" data-action="home">${this._modeButtonIcon("home")}<span>${this._escapeHtml(y("btn_home"))}</span></button>
              <button class="liquid-btn btn-away ${H === "armed_away" ? "active" : ""} ${Ae && H === "armed_away" ? "buzz-orange" : ""}" data-idx="${w}" data-action="away">${this._modeButtonIcon("away")}<span>${this._escapeHtml(y("btn_away"))}</span></button>
              <button class="liquid-btn btn-night ${H === "armed_night" ? "active" : ""} ${Ae && H === "armed_night" ? "buzz-orange" : ""}" data-idx="${w}" data-action="night">${this._modeButtonIcon("night")}<span>${this._escapeHtml(y("btn_night"))}</span></button>
              <button class="liquid-btn btn-vacation ${H === "armed_vacation" ? "active" : ""} ${Ae && H === "armed_vacation" ? "buzz-orange" : ""}" data-idx="${w}" data-action="vacation">${this._modeButtonIcon("vacation")}<span>${this._escapeHtml(y("btn_vacation"))}</span></button>
              <button class="liquid-btn btn-disarm ${H === "disarmed" ? "active" : ""}" data-idx="${w}" data-action="disarm">${this._modeButtonIcon("disarm")}<span>${this._escapeHtml(y("btn_disarmed"))}</span></button>
              ${this._permissions?.sos !== !1 ? `<button class="btn-sos" data-action="${Z ? "stop-sos" : "sos"}" data-idx="${w}">${this._modeButtonIcon("sos")}<span>${l(Z ? "sos_stop" : "btn_sos")}</span></button>` : ""}
            </div>
            <div class="console-sensors">${Me || `<div class="console-empty">${this._escapeHtml(V.length === 0 ? "Sin sensores de intrusión configurados." : "Todos los sensores configurados están omitidos.")}</div>`}</div>

          </div>
      `;
    }), n.querySelectorAll('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])').forEach(
      (b) => b.addEventListener("click", (w) => this._handleAction(w.currentTarget.dataset.idx, w.currentTarget.dataset.action))
    ), n.querySelectorAll('button[data-action="unlock-kiosk"]').forEach(
      (b) => b.addEventListener("click", () => this._requestKioskUnlock())
    ), n.querySelectorAll('button[data-action="sos"]').forEach(
      (b) => b.addEventListener("click", () => {
        this._sosEntryIdx = Number(b.dataset.idx);
        const w = this.shadowRoot.getElementById("sos-modal");
        w && w.classList.add("open");
      })
    ), n.querySelectorAll('button[data-action="stop-sos"]').forEach(
      (b) => b.addEventListener("click", () => this._stopSOS(Number(b.dataset.idx)))
    ), n.querySelectorAll("button[data-fullscreen]").forEach((b) => {
      b.addEventListener("click", (w) => this._toggleFullscreen(w.currentTarget.closest(".entry")));
    }), n.querySelectorAll("button[data-exit-fullscreen]").forEach((b) => {
      b.addEventListener("click", () => this._exitFullscreenView());
    }), n.querySelectorAll(".wx-webgl").forEach((b) => this._initWeatherWebGL(b)), this._bindSOS();
  }
  async _exitFullscreenView() {
    const n = this._fullscreenIdx >= 0 ? this._fullscreenIdx : 0, i = (this._dashboard?.entries || [])[n], a = i && (i.pin_configured === !0 || i.user_pin_configured === !0), l = async () => {
      if (document.fullscreenElement || document.webkitFullscreenElement)
        try {
          document.exitFullscreen ? await document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        } catch {
        }
      (this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen"))?.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((u) => u.classList.remove("ios-fullscreen")), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this._renderEntries();
    };
    if (!a) {
      await l();
      return;
    }
    this._showPinModal(async (c) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: i.entry_id,
          pin: c || ""
        }), this._closePinModal(), await l();
      } catch {
        const m = this.shadowRoot.getElementById("pin-error");
        m && (m.textContent = "❌ PIN incorrecto o error de acceso", m.style.color = "#ff4a4a");
      }
    });
  }
  _requestKioskUnlock() {
    if (!this._kioskLocked) return;
    const n = (this._dashboard?.entries || []).find((c) => c && c.entry_id === this._kioskEntryId), i = this.shadowRoot.getElementById("pin-error");
    if (!n || !n.entry_id) {
      i && (i.textContent = "Cannot resolve Argus instance", i.style.color = "#ff4a4a");
      return;
    }
    const a = this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry"), l = () => {
      document.exitFullscreen ? document.exitFullscreen().catch(() => {
      }) : document.webkitExitFullscreen && document.webkitExitFullscreen(), a && a.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((c) => c.classList.remove("ios-fullscreen")), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this._renderEntries();
    };
    if (n.pin_configured !== !0) {
      l();
      return;
    }
    i && (i.textContent = ""), this._showPinModal(async (c) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: n.entry_id,
          pin: c || ""
        }), this._closePinModal(), l();
      } catch (u) {
        i && (i.textContent = u.message || this._t("pin_disarm_error"), i.style.color = "#ff4a4a");
      }
    });
  }
  _toggleFullscreen(n) {
    if (this._kioskLocked) {
      this._requestKioskUnlock();
      return;
    }
    const i = n || this.shadowRoot.querySelector(".entry"), a = i?.querySelector(".entry-fs"), l = parseInt(a?.dataset?.fullscreen ?? 0), c = isNaN(l) || l < 0 ? 0 : l, u = this._dashboard?.entries?.[c] || this._dashboard?.entries?.[0];
    this._kioskEntryId = u?.entry_id || null, this._kioskTarget = i, this._kioskLocked = !1, this._fullscreenIdx = c, this.classList.add("fullscreen-active");
    const m = i?.requestFullscreen || i?.webkitRequestFullscreen;
    m ? m.call(i).then(() => {
      document.body.style.overflow = "hidden", this._renderEntries();
    }).catch(() => {
      i && i.classList.add("ios-fullscreen"), document.body.style.overflow = "hidden", this._renderEntries();
    }) : (i && i.classList.add("ios-fullscreen"), document.body.style.overflow = "hidden", this._renderEntries());
  }
  _initWeatherWebGL(n) {
    if (!n || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const i = n.getContext("webgl", { alpha: !0, antialias: !1, powerPreference: "low-power" });
    if (!i) return;
    const a = "attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}", l = `precision highp float;varying vec2 uv;uniform float time,rain,snow,fog,storm;
      float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
      float rainLayer(vec2 u,float t,float n){vec2 s=vec2(20.0+8.0*n,7.0+3.0*n);vec2 g=u*s;vec2 id=floor(g);vec2 q=fract(g);float sp=2.4+n*1.35+h(id)*1.2;q.y=fract(q.y+t*sp+h(id));float x=abs(q.x-(.54-q.y*.16));return (1.0-smoothstep(.003,.035-n*.006,x))*(1.0-smoothstep(.18,.98,q.y));}
      float snowLayer(vec2 u,float t){vec2 g=u*vec2(17.0,10.0);vec2 id=floor(g);vec2 q=fract(g);q.y=fract(q.y+t*(.23+h(id)*.34)+h(id));q.x+=sin(t+h(id)*6.28)*.14;return 1.0-smoothstep(.012,.075,length(q-vec2(.5)));}
      void main(){float t=time*.001;float r=rainLayer(uv,t,0.0)+rainLayer(uv,t,1.0)*.62+rainLayer(uv,t,2.0)*.34;float s=snowLayer(uv,t)+snowLayer(uv*1.6,t*.82)*.42;float mist=(sin(uv.y*33.0+t*.8)+sin(uv.y*18.0-t*.45))*0.025+0.045;float flash=step(.985,fract(t*.115))*storm*.42;vec3 col=vec3(.72,.88,1.0)*r*rain+vec3(1.0)*s*snow+vec3(.78,.88,.92)*mist*fog+vec3(1.0)*flash;float a=min(1.0,r*rain*.78+s*snow*.82+mist*fog+flash);gl_FragColor=vec4(col,a);}`, c = (E, S) => {
      const h = i.createShader(E);
      return i.shaderSource(h, S), i.compileShader(h), i.getShaderParameter(h, i.COMPILE_STATUS) ? h : null;
    }, u = c(i.VERTEX_SHADER, a), m = c(i.FRAGMENT_SHADER, l);
    if (!u || !m) return;
    const g = i.createProgram();
    if (i.attachShader(g, u), i.attachShader(g, m), i.linkProgram(g), !i.getProgramParameter(g, i.LINK_STATUS)) return;
    const _ = i.createBuffer();
    i.bindBuffer(i.ARRAY_BUFFER, _), i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), i.STATIC_DRAW);
    const f = i.getAttribLocation(g, "p"), y = (E) => i.getUniformLocation(g, E), k = { rain: Number(n.dataset.rain), snow: Number(n.dataset.snow), fog: Number(n.dataset.fog), storm: Number(n.dataset.storm) };
    let z = 0, R = !0;
    const P = (E) => {
      if (!R || !n.isConnected) return;
      const S = Math.min(window.devicePixelRatio || 1, 1.5), h = Math.max(1, Math.round(n.clientWidth * S)), x = Math.max(1, Math.round(n.clientHeight * S));
      (n.width !== h || n.height !== x) && (n.width = h, n.height = x, i.viewport(0, 0, h, x)), i.useProgram(g), i.enable(i.BLEND), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), i.bindBuffer(i.ARRAY_BUFFER, _), i.enableVertexAttribArray(f), i.vertexAttribPointer(f, 2, i.FLOAT, !1, 0, 0), i.uniform1f(y("time"), E), i.uniform1f(y("rain"), k.rain), i.uniform1f(y("snow"), k.snow), i.uniform1f(y("fog"), k.fog), i.uniform1f(y("storm"), k.storm), i.drawArrays(i.TRIANGLE_STRIP, 0, 4), z = requestAnimationFrame(P);
    };
    n._argusWebglStop = () => {
      R = !1, cancelAnimationFrame(z), i.getExtension("WEBGL_lose_context")?.loseContext();
    }, n.closest(".wx-atmosphere")?.classList.add("webgl-active"), z = requestAnimationFrame(P);
  }
  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _renderAtmosphere(n, i) {
    const a = String(n || "").toLowerCase(), l = (S) => a.includes(S), c = l("thunder") || l("lightning") || l("storm"), u = l("snow") || l("hail") || l("sleet") || l("blizzard"), m = l("drizzle") || l("shower"), g = !m && (l("rain") || l("pouring")), _ = l("fog") || l("mist") || l("hazy"), f = l("cloud") || l("overcast") || l("partly") || g || m || c || u, y = this._eclipseEvent(), k = this._season();
    let z = i ? ["#050a16", "#0b1930", "#14233a"] : ["#2e6e9e", "#79a9c7", "#c9d0ca"];
    c ? z = i ? ["#05070e", "#101827", "#202b36"] : ["#293946", "#506573", "#83929a"] : g || m ? z = i ? ["#07111f", "#17283a", "#344556"] : ["#526878", "#879aa6", "#b8c1c2"] : u ? z = i ? ["#101827", "#26384d", "#506271"] : ["#8ea0ad", "#c5d0d4", "#e5ebea"] : _ ? z = i ? ["#19212a", "#3b4750", "#627078"] : ["#aab7bd", "#d1dadd", "#e3e5e0"] : l("sunny") && (z = i ? z : ["#0b4675", "#4c94bd", "#d4c99e"]);
    const R = u ? "snow" : m ? "drizzle" : g || c ? "rain" : "", P = R === "rain" || R === "drizzle" ? Array.from({ length: c ? 56 : R === "rain" ? 38 : 22 }, (S, h) => {
      const x = h * 37 % 112 - 6, b = 15 + h % 5 * 8, w = h % 7 === 0 ? 2 : 1, A = 0.28 + h % 6 * 0.1, O = 0.48 + h % 5 * 0.11, H = -(h * 0.17 % 1.8);
      return `<span class="wx-rain-drop" style="--x:${x}%;--h:${b}px;--w:${w}px;--o:${A};--fall:${O}s;--delay:${H}s"></span>`;
    }).join("") : "", E = i ? `<div class="wx-celestial wx-moon-real ${this._moonPhase()}" style="--moon-shadow:${z[0]}"></div>` : !f || l("partly") ? '<div class="wx-celestial wx-sun-real"></div>' : "";
    return `<div class="wx wx-atmosphere ${i ? "night" : "day"} ${y ? `eclipse-${y}` : ""}" style="--sky-top:${z[0]};--sky-mid:${z[1]};--sky-bottom:${z[2]};--cloud-color:${c ? "rgba(17,25,35,.84)" : i ? "rgba(38,52,68,.76)" : "rgba(235,241,242,.68)"};--cloud-opacity:${f ? ".8" : "0"}">
      <canvas class="wx-webgl" aria-hidden="true" data-rain="${g || c ? 1 : 0}" data-drizzle="${m ? 1 : 0}" data-snow="${u ? 1 : 0}" data-fog="${_ ? 1 : 0}" data-storm="${c ? 1 : 0}"></canvas>${i ? '<div class="wx-starfield"></div>' : ""}${E}${f ? '<div class="wx-cloudfield"></div>' : ""}${R ? `<div class="wx-precip ${R}">${P}</div>` : ""}${c ? '<div class="wx-lightning"></div>' : ""}${_ ? '<div class="wx-fog-real"></div>' : ""}${!g && !m && !c && !u && (k === "spring" || k === "autumn") ? `<div class="wx-seasonal ${k}"></div>` : ""}<div class="wx-horizon"></div>${this._renderEclipseOverlay(y)}</div>`;
  }
  _getWeatherBg(n, i) {
    return this._renderAtmosphere(n, i);
  }
  /* ── Activity Log ────────────────────────────────────────────────── */
  _healthText() {
    const n = {
      es: { title: "Centro de salud", healthy: "Sistema saludable", warning: "Requiere atención", critical: "Dispositivos sin conexión", devices: "dispositivos configurados", offline: "sin conexión", low: "baterías bajas", battery: "Batería", none: "No hay dispositivos seleccionados en los modos.", local: "Local-first activo", confirm: "Confirmación inteligente", help: "Requiere señales independientes dentro de una ventana. Humo, gas, CO y seguridad siempre disparan de inmediato.", save: "Guardar", saved: "Guardado" },
      en: { title: "Health center", healthy: "System healthy", warning: "Attention required", critical: "Devices offline", devices: "configured devices", offline: "offline", low: "low batteries", battery: "Battery", none: "No devices are selected in the modes.", local: "Local-first active", confirm: "Intelligent confirmation", help: "Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.", save: "Save", saved: "Saved" },
      fr: { title: "Centre de santé", healthy: "Système sain", warning: "Attention requise", critical: "Appareils hors ligne", devices: "appareils configurés", offline: "hors ligne", low: "batteries faibles", battery: "Batterie", none: "Aucun appareil n’est sélectionné dans les modes.", local: "Local-first actif", confirm: "Confirmation intelligente", help: "Exige des signaux indépendants. Fumée, gaz, CO et sécurité déclenchent toujours immédiatement.", save: "Enregistrer", saved: "Enregistré" },
      pt: { title: "Centro de saúde", healthy: "Sistema saudável", warning: "Requer atenção", critical: "Dispositivos offline", devices: "dispositivos configurados", offline: "offline", low: "baterias fracas", battery: "Bateria", none: "Nenhum dispositivo foi selecionado nos modos.", local: "Local-first ativo", confirm: "Confirmação inteligente", help: "Exige sinais independentes. Fumaça, gás, CO e segurança sempre disparam imediatamente.", save: "Salvar", saved: "Salvo" },
      it: { title: "Centro salute", healthy: "Sistema integro", warning: "Richiede attenzione", critical: "Dispositivi offline", devices: "dispositivi configurati", offline: "offline", low: "batterie scariche", battery: "Batteria", none: "Nessun dispositivo è selezionato nelle modalità.", local: "Local-first attivo", confirm: "Conferma intelligente", help: "Richiede segnali indipendenti. Fumo, gas, CO e sicurezza scattano sempre subito.", save: "Salva", saved: "Salvato" },
      zh: { title: "健康中心", healthy: "系统健康", warning: "需要注意", critical: "设备离线", devices: "已配置设备", offline: "离线", low: "低电量", battery: "电池", none: "模式中未选择设备。", local: "本地优先已启用", confirm: "智能确认", help: "需要在时间窗口内收到独立信号。烟雾、燃气、一氧化碳和安全传感器始终立即触发。", save: "保存", saved: "已保存" },
      ru: { title: "Центр здоровья", healthy: "Система исправна", warning: "Требуется внимание", critical: "Устройства не в сети", devices: "настроенных устройств", offline: "не в сети", low: "низкий заряд", battery: "Батарея", none: "В режимах не выбраны устройства.", local: "Local-first активен", confirm: "Умное подтверждение", help: "Требует независимых сигналов. Дым, газ, CO и безопасность всегда срабатывают сразу.", save: "Сохранить", saved: "Сохранено" }
    };
    return n[this._getCurrentLangCode()] || n.en;
  }
  _renderHealthCenter() {
    const n = this._healthText(), i = this.shadowRoot.getElementById("h-health-title"), a = this.shadowRoot.getElementById("health-local-badge"), l = this.shadowRoot.getElementById("health-center");
    i && (i.textContent = n.title), a && (a.textContent = n.local);
    const c = this._ui?.intelligent_confirmation || { enabled: !1, window_seconds: 15, required_signals: 2 }, u = this.shadowRoot.getElementById("confirm-enabled"), m = this.shadowRoot.getElementById("confirm-signals"), g = this.shadowRoot.getElementById("confirm-window");
    u && (u.checked = !!c.enabled), m && (m.value = String(c.required_signals || 2)), g && (g.value = String(c.window_seconds || 15));
    const _ = this.shadowRoot.getElementById("confirm-label");
    _ && (_.textContent = n.confirm);
    const f = this.shadowRoot.getElementById("confirm-help");
    f && (f.textContent = n.help);
    const y = this.shadowRoot.getElementById("btn-save-confirmation");
    if (y && y.dataset.saved !== "1" && (y.textContent = n.save), this._renderStateSchedule(), !l) return;
    const k = this._systemHealth;
    if (!k) {
      l.innerHTML = `<div class="small" style="opacity:.6">${this._escapeHtml(n.none)}</div>`;
      return;
    }
    const z = Array.isArray(k.batteries) ? k.batteries : [], R = z.filter((b) => b.low), P = Array.isArray(k.unavailable) ? k.unavailable : [], E = Array.isArray(k.configured_devices) ? k.configured_devices : [], S = k.status === "critical" ? n.critical : k.status === "warning" ? n.warning : n.healthy, h = new Map(z.map((b) => [b.entity_id, b])), x = E.map((b) => {
      const w = h.get(b.entity_id), A = b.state === "unknown" || b.state === "unavailable", O = [A ? n.offline : b.state];
      return w?.value !== null && w?.value !== void 0 && O.push(`${w.value}${w.unit || "%"}`), { name: b.name, value: O.join(" · "), alert: A || !!w?.low };
    });
    l.innerHTML = `<div class="health-summary">
      <div class="health-score" style="--score:${Number(k.score) || 0}" aria-label="${Number(k.score) || 0}%">${Number(k.score) || 0}</div>
      <div><div style="font-weight:850">${this._escapeHtml(S)}</div><div class="small" style="opacity:.6;margin-top:3px">${E.length} ${this._escapeHtml(n.devices)}</div></div>
    </div><div class="health-metrics">
      <div class="health-metric"><strong>${P.length}</strong><span>${this._escapeHtml(n.offline)}</span></div>
      <div class="health-metric"><strong>${R.length}</strong><span>${this._escapeHtml(n.low)}</span></div>
      <div class="health-metric"><strong>${z.length}</strong><span>${this._escapeHtml(n.battery)}</span></div>
    </div><div class="health-list" style="margin-top:13px">${x.length ? x.map((b) => `<div class="health-row"><span>${this._escapeHtml(b.name)}</span><strong style="color:${b.alert ? "#ff8a80" : "inherit"}">${this._escapeHtml(b.value)}</strong></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(n.none)}</div>`}</div>`;
  }
  async _saveIntelligentConfirmation() {
    const n = {
      enabled: !!this.shadowRoot.getElementById("confirm-enabled")?.checked,
      required_signals: Number(this.shadowRoot.getElementById("confirm-signals")?.value || 2),
      window_seconds: Number(this.shadowRoot.getElementById("confirm-window")?.value || 15)
    };
    try {
      await this._send("argus/save_ui", { intelligent_confirmation: n }), this._ui.intelligent_confirmation = n;
      const i = this.shadowRoot.getElementById("btn-save-confirmation");
      i && (i.textContent = `✓ ${this._healthText().saved}`, i.dataset.saved = "1", setTimeout(() => {
        i.dataset.saved = "0", i.textContent = this._healthText().save;
      }, 1600));
    } catch (i) {
      alert(this._format("generic_error", { error: i.message }));
    }
  }
  _scheduleText() {
    const n = {
      es: { title: "Horarios locales de estado", all: "Todos los días", weekdays: "Lunes a viernes", weekend: "Fin de semana", empty: "Sin horarios. Argus conservará el último estado confirmado.", disarmed: "Desarmado", home: "En casa", away: "Ausente", night: "Noche", vacation: "Vacaciones" },
      en: { title: "Local state schedules", all: "Every day", weekdays: "Monday to Friday", weekend: "Weekend", empty: "No schedules. Argus will preserve the last confirmed state.", disarmed: "Disarmed", home: "Home", away: "Away", night: "Night", vacation: "Vacation" },
      fr: { title: "Horaires d’état locaux", all: "Tous les jours", weekdays: "Lundi à vendredi", weekend: "Week-end", empty: "Aucun horaire. Argus conservera le dernier état confirmé.", disarmed: "Désarmé", home: "Maison", away: "Absent", night: "Nuit", vacation: "Vacances" },
      pt: { title: "Horários locais de estado", all: "Todos os dias", weekdays: "Segunda a sexta", weekend: "Fim de semana", empty: "Sem horários. Argus preservará o último estado confirmado.", disarmed: "Desarmado", home: "Em casa", away: "Ausente", night: "Noite", vacation: "Férias" },
      it: { title: "Programmi locali di stato", all: "Ogni giorno", weekdays: "Da lunedì a venerdì", weekend: "Fine settimana", empty: "Nessun programma. Argus manterrà l’ultimo stato confermato.", disarmed: "Disarmato", home: "Casa", away: "Assente", night: "Notte", vacation: "Vacanza" },
      zh: { title: "本地状态计划", all: "每天", weekdays: "周一至周五", weekend: "周末", empty: "没有计划。Argus 将保留最后确认的状态。", disarmed: "撤防", home: "在家", away: "外出", night: "夜间", vacation: "度假" },
      ru: { title: "Локальное расписание состояния", all: "Каждый день", weekdays: "Понедельник–пятница", weekend: "Выходные", empty: "Расписания нет. Argus сохранит последнее подтверждённое состояние.", disarmed: "Снято", home: "Дома", away: "Нет дома", night: "Ночь", vacation: "Отпуск" }
    };
    return n[this._getCurrentLangCode()] || n.en;
  }
  _renderStateSchedule() {
    const n = this._scheduleText(), i = this.shadowRoot.getElementById("schedule-title");
    i && (i.textContent = n.title);
    const a = this.shadowRoot.getElementById("schedule-state"), l = this.shadowRoot.getElementById("schedule-days");
    if (a) {
      const f = a.value;
      a.innerHTML = `<option value="disarmed">${n.disarmed}</option><option value="armed_home">${n.home}</option><option value="armed_away">${n.away}</option><option value="armed_night">${n.night}</option><option value="armed_vacation">${n.vacation}</option>`, a.value = f || "armed_night";
    }
    if (l) {
      const f = l.value;
      l.innerHTML = `<option value="all">${n.all}</option><option value="weekdays">${n.weekdays}</option><option value="weekend">${n.weekend}</option>`, l.value = f || "all";
    }
    const c = this.shadowRoot.getElementById("schedule-list");
    if (!c) return;
    const u = Array.isArray(this._ui?.state_schedule) ? this._ui.state_schedule : [], m = { es: "Eliminar horario", en: "Delete schedule", fr: "Supprimer l’horaire", pt: "Excluir horário", it: "Elimina programma", zh: "删除计划", ru: "Удалить расписание" }[this._getCurrentLangCode()] || "Delete schedule", g = (f) => ({ disarmed: n.disarmed, armed_home: n.home, armed_away: n.away, armed_night: n.night, armed_vacation: n.vacation })[f] || f, _ = (f) => f?.length === 2 ? n.weekend : f?.length === 5 ? n.weekdays : n.all;
    c.innerHTML = u.length ? u.map((f) => `<div class="schedule-row"><span><strong>${this._escapeHtml(f.time || "")}</strong> · ${this._escapeHtml(g(f.state))} · ${this._escapeHtml(_(f.days))}</span><button class="ghost" data-schedule-delete="${this._escapeHtml(f.id)}" aria-label="${this._escapeHtml(m)}">×</button></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(n.empty)}</div>`, c.querySelectorAll("[data-schedule-delete]").forEach((f) => f.addEventListener("click", () => this._deleteStateSchedule(f.dataset.scheduleDelete)));
  }
  async _addStateSchedule() {
    const n = this.shadowRoot.getElementById("schedule-state")?.value, i = this.shadowRoot.getElementById("schedule-time")?.value, a = this.shadowRoot.getElementById("schedule-days")?.value || "all";
    if (!n || !/^([01]\d|2[0-3]):[0-5]\d$/.test(i || "")) return;
    const l = a === "weekdays" ? [0, 1, 2, 3, 4] : a === "weekend" ? [5, 6] : [0, 1, 2, 3, 4, 5, 6], c = Array.isArray(this._ui?.state_schedule) ? [...this._ui.state_schedule] : [];
    c.push({ id: `schedule_${Date.now()}`, state: n, time: i, days: l, enabled: !0 }), await this._saveStateSchedule(c);
  }
  async _deleteStateSchedule(n) {
    const i = (this._ui?.state_schedule || []).filter((a) => a.id !== n);
    await this._saveStateSchedule(i);
  }
  async _saveStateSchedule(n) {
    try {
      await this._send("argus/save_ui", { state_schedule: n }), this._ui.state_schedule = n, this._renderStateSchedule();
    } catch (i) {
      alert(this._format("generic_error", { error: i.message }));
    }
  }
  _localizeActivityDetail(n, i) {
    const a = String(i || "").trim(), l = a.toLocaleLowerCase(), c = {
      home: ["en casa", "home", "casa", "maison", "em casa", "дом", "在家"],
      away: ["ausente", "away", "absent", "fora", "fuori", "ушёл", "外出"],
      night: ["noche", "night", "nuit", "noite", "notte", "ночь", "夜间"],
      vacation: ["vacaciones", "vacation", "vacances", "férias", "vacanza", "отпуск", "度假"]
    }, m = Object.entries(c).find(([, y]) => y.some((k) => l.includes(k)))?.[0];
    if (n === "pin_reset") return this._t("log_detail_pin_reset");
    if (n === "pin_reset_failed") return this._t("log_detail_pin_reset_failed");
    if (n === "state_restored") {
      const y = {
        disarmed: this._t("disarmed"),
        armed_home: this._t("mode_home"),
        armed_away: this._t("mode_away"),
        armed_night: this._t("mode_night"),
        armed_vacation: this._t("mode_vacation"),
        triggered: this._t("log_triggered")
      };
      return a.replace(
        /\b(disarmed|armed_home|armed_away|armed_night|armed_vacation|triggered)\b/gi,
        (z) => y[z.toLowerCase()] || z
      ) || this._t("log_action_state_restored");
    }
    if (n === "confirmation_pending") return a;
    if (n === "disarmed" || n === "disarm") return this._t("log_detail_disarm");
    if (n === "armed" || n === "arm")
      return m ? `${this._t("manual_arm")} (${this._t(`mode_${m}`)})` : this._t("manual_arm");
    if (n === "triggered") {
      const y = a.match(/\((?:modo|mode|modalità|режим|模式)\s*:?\s*([^)]+)\)/i);
      let k = "";
      if (y && y[1]) {
        const P = y[1].toLowerCase(), E = Object.entries(c).find(([, S]) => S.some((h) => P.includes(h)))?.[0];
        k = E ? this._t(`mode_${E}`) : y[1];
      }
      const z = a.match(/(?:sensor|capteur|sensore|датчик|传感器)\s*:\s*(.+)$/i)?.[1]?.replace(/\s*\((?:modo|mode|modalità|режим|模式)\s*:?[^)]*\)\s*$/i, "")?.trim();
      let R = z ? `${this._t("log_sensor")}: ${z}` : this._t("log_detail_triggered");
      return k && (R += ` (${this._t("log_mode")}: ${k})`), R;
    }
    if (n === "user_added") return this._t("log_action_user_added");
    if (n === "user_deleted") return this._t("log_action_user_deleted");
    if (n === "sos") return this._t("log_action_sos");
    if (n === "sos_stopped" || n === "panic_stopped") return this._t("log_action_sos_stopped");
    if (n.startsWith("auto_") || n === "automation_executed") return this._t("log_action_automation");
    if (n.startsWith("ai_")) return this._t("log_action_analysis");
    if (n.includes("rejected")) return this._t("log_action_rejected");
    if (n === "ui_configuration_updated") return this._t("settings");
    if (n === "user_logged_in") return this._t("log_action_user_logged_in");
    if (n === "profile_selected") return this._t("log_action_profile_selected");
    if (n === "schedule_applied") return this._t("log_action_schedule_applied");
    if (n === "mode_changed") return this._t("log_action_mode_changed");
    if (n === "audit_log_cleared") return this._t("history_refresh");
    if (n.includes("pin_updated") || n.includes("access_pin_updated")) return this._t("update_pin");
    const _ = `log_action_${String(n).toLowerCase()}`, f = this._t(_);
    return f !== _ ? f : a;
  }
  _renderActivityLog() {
    const n = this.shadowRoot.getElementById("h-activity-log"), i = this.shadowRoot.getElementById("activity-log");
    if (i) {
      n && (n.textContent = this._t("activity_log"));
      try {
        const a = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log.filter((u) => u && typeof u == "object" && !Array.isArray(u)) : [];
        if (!a.length) {
          const u = this._activityTimelineError ? this._t("history_unavailable") : this._t("log_no_events");
          i.innerHTML = `<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(u)}</div>`;
          return;
        }
        const l = i.closest(".panel"), c = l && l.getAttribute("data-size") === "S";
        i.innerHTML = a.slice(0, c ? 1 : 30).map((u) => {
          const m = String(u.action || ""), g = String(u.detail || ""), _ = String(u.user || u.actor || ""), f = u.ts ? new Date(u.ts) : null;
          let y = "";
          if (f && !Number.isNaN(f.getTime()))
            try {
              y = f.toLocaleString(this._getLocale());
            } catch {
              y = f.toISOString();
            }
          const k = this._localizeActivityDetail(m, g);
          let z = '<div class="glass-orb"></div>', R = "", P = m, E = "";
          if (m.endsWith("_rejected"))
            E = "log-item--triggered", R = "trigger", P = this._t("log_action_rejected");
          else if (m.includes("arm") && !m.includes("disarm"))
            E = "log-item--armed", R = "arm", P = this._t("log_armed");
          else if (m.includes("disarm"))
            E = "log-item--disarmed", R = "disarm", P = this._t("log_disarmed");
          else if (m.includes("trigger") || m.includes("alarm"))
            E = "log-item--triggered", R = "trigger", P = this._t("log_triggered");
          else if (m === "pin_reset")
            E = "log-item--disarmed", R = "disarm", P = this._t("badge_pin_reset");
          else if (m === "pin_reset_failed")
            E = "log-item--triggered", R = "trigger", P = this._t("badge_pin_reset_failed");
          else if (m === "sos" || m === "sos_stopped" || m === "panic_stopped")
            E = "log-item--triggered", R = "trigger", P = this._t("log_action_sos");
          else {
            const h = `log_action_${m}`, x = this._t(h);
            P = x !== h ? x : this._t(m) !== m ? this._t(m) : m;
          }
          let S = "";
          return _ && _ !== "Argus" && _ !== "system" ? S = `👤 ${_}` : m.toLowerCase().includes("homekit") || k.toLowerCase().includes("homekit") ? S = "🍎 HomeKit" : S = "🤖 Argus", `<div class="log-item ${E}">
          <div class="log-icon">${z}</div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${R}">${this._escapeHtml(P)}</span>
              <span style="font-weight:500">${this._escapeHtml(k)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(y)} &nbsp;·&nbsp; ${this._escapeHtml(S)}</div>
          </div>
        </div>`;
        }).join("");
      } catch (a) {
        console.error("Argus activity log render failed:", a), i.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("log_no_events")}</div>`;
      }
    }
  }
  /* ── Modes ───────────────────────────────────────────────────────── */
  _renderModeTabs() {
    const n = this.shadowRoot.getElementById("mode-tabs");
    if (!n) return;
    const i = ["disarmed", "home", "away", "night", "vacation"], a = { disarmed: "🔓", home: "🏠", away: "🔴", night: "🌙", vacation: "✈️" }, l = {
      disarmed: this._t("disarmed"),
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      vacation: this._t("mode_vacation")
    };
    let c = n.querySelector(".tab-bubble");
    !c || n.querySelectorAll("[data-mode]").length !== i.length ? (n.className = "tabs", n.innerHTML = `
        <div class="tab-bubble"></div>
        ${i.map((g) => `
          <button type="button" class="tab" data-mode="${g}">
            <span class="tab-icon" style="font-size: 20px;">${a[g]}</span>
            <span class="tab-label">${l[g]}</span>
          </button>
        `).join("")}
      `, c = n.querySelector(".tab-bubble"), n.querySelectorAll("[data-mode]").forEach((g) => g.addEventListener("click", () => {
      this._mode = g.dataset.mode, this._renderModeTabs(), this._renderModeView();
    }))) : i.forEach((g) => {
      const _ = n.querySelector(`[data-mode="${g}"]`);
      if (_) {
        const f = _.querySelector(".tab-icon"), y = _.querySelector(".tab-label");
        f && (f.textContent = a[g]), y && (y.textContent = l[g]);
      }
    });
    const u = n.querySelectorAll(".tab");
    let m = null;
    u.forEach((g) => {
      g.dataset.mode === this._mode ? (g.classList.add("active"), m = g) : g.classList.remove("active");
    }), c && m && (c.className = `tab-bubble bubble-${this._mode}`, requestAnimationFrame(() => {
      const g = m.offsetLeft, _ = m.offsetWidth;
      c.style.transform = `translate3d(${g}px, 0, 0) scaleX(${_ / 100})`, c.style.width = "100px", c.style.left = "0";
    }));
  }
  _currentModeConfig() {
    const n = {
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
    let i = this._modeEntryId;
    if ((!i || i === "default") && (i = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = i, this._mode = this._mode || "disarmed", (!this._ui.modes.__by_entity__[i] || typeof this._ui.modes.__by_entity__[i] != "object" || Array.isArray(this._ui.modes.__by_entity__[i])) && (this._ui.modes.__by_entity__[i] = {}), !this._ui.modes.__by_entity__[i][this._mode] || typeof this._ui.modes.__by_entity__[i][this._mode] != "object" || Array.isArray(this._ui.modes.__by_entity__[i][this._mode])) {
      let c = {};
      this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] == "object" && !Array.isArray(this._ui.modes[this._mode]) && (c = this._ui.modes[this._mode]), this._ui.modes.__by_entity__[i][this._mode] = { ...n, ...c };
    }
    const a = this._ui.modes.__by_entity__[i][this._mode], l = a && typeof a == "object" && !Array.isArray(a) ? a : n;
    return {
      ...n,
      ...l,
      sensors: Array.isArray(l?.sensors) ? l.sensors : [],
      bypassed_sensors: Array.isArray(l?.bypassed_sensors) ? l.bypassed_sensors : [],
      sirens: Array.isArray(l?.sirens) ? l.sirens : [],
      entry_sensors: Array.isArray(l?.entry_sensors) ? l.entry_sensors : [],
      // sync_panels was the short-lived UI name; retain it only as a read fallback.
      external_panels: Array.isArray(l?.external_panels) ? l.external_panels : Array.isArray(l?.sync_panels) ? l.sync_panels : [],
      require_closed: typeof l?.require_closed == "boolean" ? l.require_closed : !1,
      open_sensors_policy: l?.open_sensors_policy === "pending" || l?.open_sensors_policy === "allow" || l?.open_sensors_policy === "block" ? l.open_sensors_policy : l?.require_closed ? "block" : "allow",
      arming_time: l?.arming_time !== void 0 && l?.arming_time !== null ? l.arming_time : null,
      entry_delay: l?.entry_delay !== void 0 && l?.entry_delay !== null ? l.entry_delay : null,
      light_siren_settings: l?.light_siren_settings && typeof l.light_siren_settings == "object" ? l.light_siren_settings : {},
      mqtt_enabled: l?.mqtt_enabled !== void 0 && l?.mqtt_enabled !== null ? l.mqtt_enabled : null
    };
  }
  _toggleEntrySensor(n) {
    if (!this._isAdmin) return;
    const i = this._currentModeConfig(), a = Array.isArray(i.entry_sensors) ? [...i.entry_sensors] : [];
    a.includes(n) ? i.entry_sensors = a.filter((l) => l !== n) : i.entry_sensors = [...a, n], this._renderModeView();
  }
  _renderModeView() {
    const n = this._currentModeConfig(), i = n.sensors || [], a = n.bypassed_sensors || [], l = n.sirens || [], c = n.external_panels || [], u = this.shadowRoot.getElementById("mode-view");
    u && (u.classList.remove("bounce-in"), u.offsetWidth, u.classList.add("bounce-in"));
    const m = !this._isAdmin, g = this._dashboard?.entries || [], _ = this._modeEntryId || g[0]?.entity_id || "", f = g.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("alarm_instance")}</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${g.map((y) => `<option value="${this._escapeHtml(y.entity_id)}" ${y.entity_id === _ ? "selected" : ""}>${this._escapeHtml(y.title || y.entity_id)}</option>`).join("")}</select>
        </div>` : "";
    u.innerHTML = `
      <div class="mode-grid-layout">
        ${f}

        <div class="mode-section-card">
          <div class="mode-section-title">🛡️ ${this._t("sensor_section")}</div>
          <div class="mode-sensor-grid" id="sensor-chips">
            ${i.map((y) => this._chip(y, "sensor")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${m ? "" : `
            <button class="ghost" data-open-selector="sensor" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-require-closed" ${n.require_closed ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("lock_if_open")}</span>
            </label>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-wait-if-open" ${n.open_sensors_policy === "pending" ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("wait_if_open")}</span>
            </label>
          `}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("bypass_lbl")}</div>
          <div class="mode-sensor-grid" id="bypass-chips">
            ${a.map((y) => this._chip(y, "bypass")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${m ? "" : `<button class="ghost" data-open-selector="bypass" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 ${this._t("siren_section")}</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${l.map((y) => this._chip(y, "siren")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${l.filter((y) => y.startsWith("light.")).map((y) => {
      const k = n.light_siren_settings?.[y] || {}, R = "#" + (Array.isArray(k.rgb_color) ? k.rgb_color : [255, 0, 0]).map((P) => Number(P).toString(16).padStart(2, "0")).join("");
      return `<details class="light-siren-settings"><summary>⚙ ${this._escapeHtml(this._hass?.states?.[y]?.attributes?.friendly_name || y)}</summary><label>${this._t("light_siren_color") || "Color"} <input type="color" data-light-siren-color="${this._escapeHtml(y)}" value="${R}"></label><label class="checkbox-label"><input type="checkbox" data-light-siren-flash="${this._escapeHtml(y)}" ${k.gentle_flash ? "checked" : ""}> ${this._t("light_siren_flash") || "Destello suave si está disponible"}</label></details>`;
    }).join("")}
          <div class="mode-section-title" style="margin-top:14px;font-size:12px">🔗 ${this._t("external_panels") || "Paneles de alarma externos"}</div>
          <div class="mode-sensor-grid" id="external-panel-chips">
            ${c.map((y) => this._chip(y, "external_panel")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${m ? "" : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button><button class="ghost" data-open-selector="external_panel" style="margin-top:8px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("times_section")}</div>
          <div class="times-grid">
            <div class="input-group time-field">
              <span class="input-label">${this._t("arm_time")}</span>
              <input type="number" id="mode-arming-time" value="${n.arming_time ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
            <div class="input-group time-field">
              <span class="input-label">${this._t("disarm_time")}</span>
              <input type="number" id="mode-entry-delay" value="${n.entry_delay ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
          </div>
          <div class="mode-sensor-grid entry-sensor-list">
            ${(n.entry_sensors || []).map((y) => this._chip(y, "entry")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${m ? "" : `<button class="ghost" data-open-selector="entry" style="margin-top:10px;width:100%;justify-content:center;font-size:12px">${this._t("select_entry_sensors")}</button>`}
          <label class="checkbox-label mode-mqtt-row">
            <input type="checkbox" id="mode-mqtt-enabled" ${n.mqtt_enabled === !0 ? "checked" : ""}>
            <span style="font-size:12px;font-weight:600">${this._t("mqtt_label")}</span>
          </label>
        </div>
      </div>
      ${m ? "" : `<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;"><button class="primary" id="save-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2)">${this._t("save_config")}</button><span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span></div>`}
    `, u.querySelector("#mode-instance-select")?.addEventListener("change", (y) => {
      this._modeEntryId = y.target.value, this._renderModeView();
    }), m || (u.querySelectorAll("[data-open-selector]").forEach(
      (y) => y.addEventListener("click", () => this._openModal(y.dataset.openSelector))
    ), u.querySelectorAll("[data-remove]").forEach(
      (y) => y.addEventListener("click", () => this._removeChip(y.dataset.remove))
    ), u.querySelectorAll("[data-toggle-delay]").forEach(
      (y) => y.addEventListener("click", () => this._toggleEntrySensor(y.dataset.toggleDelay))
    ), u.querySelector("#save-mode")?.addEventListener("click", () => this._saveMode()));
  }
  _chip(n, i) {
    const a = this._hass?.states?.[n]?.state, l = ["on", "unlocked", "open", "recording", "active", "motion"].includes(a), c = this._hass?.states?.[n]?.attributes?.friendly_name || n, u = !this._isAdmin, m = i === "sensor" || i === "bypass" ? `<span class="pill-dot ${l ? "open" : ""}" title="${a}"></span>` : "";
    let g = "", _ = "";
    if (i === "sensor" || i === "bypass" || i === "entry") {
      const k = this._hass?.states?.[n], z = this._getDevicePower(n, k);
      if (g = `<span class="pill-status">${l ? this._t("status_open") : this._t("status_closed")}</span>`, z.mains && (_ += '<span class="pill-power">🔌 AC</span>'), z.battery !== null) {
        const R = z.battery === 0, P = z.battery <= 10 && !R, E = R ? "🔋 ❌" : `🔋 ${z.battery}%`;
        _ += `<span class="pill-power ${R ? "dead" : P ? "low" : ""}">${E}</span>`;
      }
    }
    const f = this._dashboard?.entries?.some(
      (k) => this._hass?.states?.[k.entity_id]?.state === "triggered"
    );
    let y = "";
    return i === "siren" && f && (y = " siren-active"), (i === "sensor" || i === "bypass" || i === "entry") && f && l && (y = " triggered-sensor"), `
      <span class="sensor-pill${y}">
        ${m}
        <span class="pill-content">
          <span class="pill-name">${this._escapeHtml(c)}</span>
          ${g}
          ${_}
        </span>
        ${u ? "" : `<button data-remove="${i}:${n}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
  }
  _removeChip(n) {
    if (!this._isAdmin) return;
    const [i, a] = n.split(":"), l = this._currentModeConfig(), c = i === "sensor" ? "sensors" : i === "bypass" ? "bypassed_sensors" : i === "entry" ? "entry_sensors" : i === "external_panel" ? "external_panels" : "sirens";
    let u = this._modeEntryId;
    (!u || u === "default") && (u = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = u, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[u] = this._ui.modes.__by_entity__[u] || {}, this._ui.modes.__by_entity__[u][this._mode] = { ...l, [c]: (l[c] || []).filter((m) => m !== a) }, this._renderModeView();
  }
  async _saveMode() {
    const n = this._currentModeConfig(), i = this.shadowRoot.getElementById("mode-require-closed"), a = this.shadowRoot.getElementById("mode-wait-if-open"), l = this.shadowRoot.getElementById("mode-arming-time"), c = this.shadowRoot.getElementById("mode-entry-delay"), u = this.shadowRoot.getElementById("mode-mqtt-enabled");
    i && (n.require_closed = i.checked), i?.checked ? n.open_sensors_policy = "block" : a?.checked ? n.open_sensors_policy = "pending" : n.open_sensors_policy = "allow", l && (n.arming_time = l.value ? parseInt(l.value) : 0), c && (n.entry_delay = c.value ? parseInt(c.value) : 0), u && (n.mqtt_enabled = u.checked), n.light_siren_settings = {}, this.shadowRoot.querySelectorAll("[data-light-siren-color]").forEach((m) => {
      const g = m.value || "#ff0000";
      n.light_siren_settings[m.dataset.lightSirenColor] = {
        rgb_color: [1, 3, 5].map((_) => parseInt(g.slice(_, _ + 2), 16)),
        gentle_flash: !!this.shadowRoot.querySelector(`[data-light-siren-flash="${CSS.escape(m.dataset.lightSirenColor)}"]`)?.checked
      };
    }), this._runWithPin(async () => {
      const m = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || "default";
      this._ui.modes = this._ui.modes || {}, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[m] = this._ui.modes.__by_entity__[m] || {}, this._ui.modes.__by_entity__[m][this._mode] = { ...n };
      const g = this.shadowRoot.getElementById("mode-status");
      g && (g.textContent = "…", g.className = "status");
      try {
        await this._send("argus/save_mode_config", {
          entity_id: m,
          mode: this._mode,
          config: n
        }), g && (g.textContent = this._t("saved"), g.className = "status ok show"), setTimeout(() => {
          g && (g.textContent = "", g.className = "status");
        }, 3e3);
      } catch (_) {
        g && (g.textContent = "✗ " + (_.message || this._t("generic_error").replace(": {error}", "")), g.className = "status err show");
      }
    });
  }
  /* ── Automations ─────────────────────────────────────────────────── */
  _renderAutomations() {
    const n = this.shadowRoot.getElementById("auto-view");
    if (n) {
      if (!this._dashboard?.entries?.length || !this._hass) {
        n.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
        return;
      }
      try {
        if (!this._relatedAutomationsQueried) {
          this._relatedAutomationsQueried = !0, this._cachedRelatedAutomations = /* @__PURE__ */ new Set(), (async () => {
            try {
              let m = [];
              for (const g of this._dashboard.entries) {
                const _ = await this._hass.callWS({ type: "search/related", item_type: "entity", item_id: g.entity_id });
                if (_ && (_.automation && m.push(..._.automation), _.device && _.device.length))
                  for (const f of _.device) {
                    const y = await this._hass.callWS({ type: "search/related", item_type: "device", item_id: f });
                    y && y.automation && m.push(...y.automation);
                  }
              }
              this._cachedRelatedAutomations = new Set(m);
            } catch {
              this._cachedRelatedAutomations = /* @__PURE__ */ new Set();
            } finally {
              this._relatedAutomationsFetched = !0, this._renderAutomations();
            }
          })(), n.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
          return;
        }
        if (!this._relatedAutomationsFetched) return;
        const i = this._hass.states || {}, a = Object.values(i).filter((m) => {
          if (!m || !m.entity_id || !m.entity_id.startsWith("automation.")) return !1;
          const g = (m.attributes?.friendly_name || "").toLowerCase();
          return this._cachedRelatedAutomations.has(m.entity_id) || g.includes("argus") || m.entity_id.toLowerCase().includes("argus");
        });
        if (!a.length) {
          n.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
          return;
        }
        const l = n.closest(".panel"), c = l && l.getAttribute("data-size") === "S", u = a.slice(0, c ? 1 : 15);
        n.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${u.map((m) => {
          const g = m.attributes?.id || m.entity_id.replace("automation.", ""), _ = m.attributes?.last_triggered ? new Date(m.attributes.last_triggered).toLocaleString(this._getLocale()) : this._t("never_triggered"), f = c ? "" : `<div class="small" style="opacity:0.7;margin-top:4px">${this._escapeHtml(_)}</div>`;
          return `
        <div class="list-item-card">
          <div>
            <div style="font-weight:700">${this._escapeHtml(m.attributes?.friendly_name || m.entity_id)}</div>
            ${f}
          </div>
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(g)}">✏️</button>
        </div>`;
        }).join("")}</div>`, n.querySelectorAll("[data-edit-auto]").forEach((m) => m.addEventListener("click", () => {
          history.pushState(null, "", `/config/automation/edit/${m.dataset.editAuto}`), window.dispatchEvent(new CustomEvent("location-changed"));
        }));
      } catch (i) {
        console.error("Argus automations render failed:", i), n.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
      }
    }
  }
  /* ── Notifications ───────────────────────────────────────────────── */
  _populateNotifSelect() {
    const n = this.shadowRoot.getElementById("notif-select");
    if (!n) return;
    const i = this._hass?.services?.notify || {}, a = Object.values(this._hass?.states || {}).filter((u) => u?.entity_id?.startsWith("notify.") && u.entity_id !== "notify.persistent_notification").map((u) => ({ value: `entity:${u.entity_id}`, label: u.attributes?.friendly_name || u.entity_id })), l = Object.keys(i).filter((u) => !["notify", "send_message", "persistent_notification"].includes(u) && !this._notifTargets.includes(u)).map((u) => ({ value: u, label: u.replace(/_/g, " ") })), c = [...a, ...l].filter((u) => !this._notifTargets.includes(u.value));
    n.innerHTML = c.length ? c.map(({ value: u, label: m }) => `<option value="${this._escapeHtml(u)}">${this._escapeHtml(`🔔 ${m}`)}</option>`).join("") : `<option value="">— ${this._escapeHtml(this._t("notif_no_services"))} —</option>`;
  }
  _addNotifTarget() {
    const i = this.shadowRoot.getElementById("notif-select")?.value;
    !i || this._notifTargets.includes(i) || (this._notifTargets.push(i), this._renderNotifChips(), this._populateNotifSelect());
  }
  _renderNotifChips() {
    const n = this.shadowRoot.getElementById("notif-targets");
    n && (n.innerHTML = this._notifTargets.map((i) => `
      <span class="notif-chip">🔔 ${this._escapeHtml(i.replace(/^entity:notify\./, "").replace(/_/g, " "))}
        <button data-notif-remove="${this._escapeHtml(i)}">✕</button>
      </span>`).join("") || '<span class="small" style="opacity:.5">—</span>', n.querySelectorAll("[data-notif-remove]").forEach(
      (i) => i.addEventListener("click", () => {
        this._notifTargets = this._notifTargets.filter((a) => a !== i.dataset.notifRemove), this._renderNotifChips(), this._populateNotifSelect();
      })
    ));
  }
  _renderNotifications() {
    this._renderNotifChips(), this._populateNotifSelect();
  }
  async _saveNotifications() {
    const n = this.shadowRoot.getElementById("notif-status");
    this._runWithPin(async () => {
      try {
        await this._send("argus/save_ui", {
          notif_targets: this._notifTargets
        }), n && (n.textContent = "✓", n.className = "status ok");
      } catch (i) {
        n ? (n.textContent = i.message, n.className = "status err") : alert(this._format("generic_error", { error: i.message }));
      }
    });
  }
  /* ── Users ───────────────────────────────────────────────────────── */
  _renderUsers() {
    const n = this.shadowRoot.getElementById("users-list");
    if (!n) return;
    const i = this.shadowRoot.getElementById("p-admin-only");
    i && (i.style.display = this._isAdmin ? "none" : "block");
    try {
      const a = Array.isArray(this._users) ? this._users.filter((m) => m && typeof m == "object" && !Array.isArray(m)) : [], l = n.closest(".panel"), c = l && l.getAttribute("data-size") === "S", u = c ? a.slice(0, 2) : a;
      a.length ? (n.innerHTML = u.map((m, g) => {
        if (c)
          return `
            <div class="user-card" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:6px 10px;flex-direction:row">
              <div style="font-weight:700">${this._escapeHtml(m.name || "")}</div>
              <div style="display:flex;gap:4px">
                ${m.role === "admin" ? '<span class="user-badge admin">⭐ Adm</span>' : '<span class="user-badge">👤 Std</span>'}
                ${m.access_pin_configured ? '<span class="user-badge" style="background:rgba(0,122,255,0.12);color:#007aff">🔒 PIN</span>' : ""}
              </div>
            </div>`;
        const _ = m.expiration_date && new Date(m.expiration_date) < /* @__PURE__ */ new Date();
        let f = "";
        if (m.expiration_date) {
          const P = new Date(m.expiration_date);
          if (!isNaN(P.getTime()))
            try {
              f = this._formatDateTime(P);
            } catch {
              f = P.toISOString();
            }
        }
        const y = m.expiration_date ? _ ? `<span class="user-badge admin" style="background:rgba(229,57,53,0.12);color:#e53935;margin-left:5px">❌ ${this._escapeHtml(this._t("expired"))} (${this._escapeHtml(f)})</span>` : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">⏳ ${this._escapeHtml(this._t("active_until"))}: ${this._escapeHtml(f)}</span>` : `<span class="user-badge" style="background:rgba(67,160,71,0.12);color:#43a047;margin-left:5px">♾️ ${this._t("exp_indefinite")}</span>`, k = m.ha_user_id ? (() => {
          const P = (this._haUsersList || []).find((E) => E.id === m.ha_user_id);
          return P ? this._format("ha_account_linked", { name: P.name }) : this._t("ha_account_unavailable");
        })() : this._t("ha_account_unavailable"), z = m.role === "admin" ? "⭐ " + this._escapeHtml(this._t("role_argus_admin")) : "👤 " + this._escapeHtml(this._t("role_argus_standard")), R = m.access_pin_configured ? '<span class="user-badge" style="background:rgba(0,122,255,0.12);color:#007aff">🔒 PIN</span>' : `<span class="user-badge" style="opacity:0.55">🔓 ${this._escapeHtml(this._t("user_no_pin"))}</span>`;
        return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(m.name || "")}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${m.role === "admin" ? "admin" : ""}">${z}</span>
                  <span class="user-badge" style="background:#4a148c;color:white;margin-left:5px">${this._escapeHtml(k)}</span>
                  ${R}
                  ${y}
                </div>
                ${m.role !== "admin" && m.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Ver Panel">👁️ ${m.permissions.view_status ? "Panel" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Armar Sistema">🛡️ ${m.permissions.arm ? "Armar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Desarmar Sistema">🔓 ${m.permissions.disarm ? "Desarmar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="Ver Historial">📜 ${m.permissions.view_history ? "Historial" : "---"}</span>
                </div>
                ` : ""}
              </div>
              <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${g}" title="${this._escapeHtml(this._t("modal_edit_name"))}">✏️ ${this._escapeHtml(this._t("modal_edit_name"))}</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${g}" title="${this._escapeHtml(this._t("modal_pin_title"))}">🔑 ${this._escapeHtml(this._t("user_pin_action"))}</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${g}" title="${this._escapeHtml(this._t("user_role_label"))}">⭐ ${this._escapeHtml(this._t("user_role_action"))}</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t("delete_user_tooltip"))}" aria-label="${this._escapeHtml(this._t("delete_user_tooltip"))}" data-user-del="${g}">🗑️ ${this._escapeHtml(this._t("clear") || "Borrar")}</button>
                ` : ""}
              </div>
            </div>
          </div>`;
      }).join(""), this._isAdmin && n.insertAdjacentHTML("beforeend", `
            <div style="margin-top:10px">
              <button class="secondary" style="width:100%;padding:10px;font-size:13px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,255,255,0.18);background:rgba(255,255,255,0.03)" id="btn-add-manual-user">➕ ${this._escapeHtml(this._t("modal_add_user"))}</button>
            </div>`), this._isAdmin && (n.querySelectorAll("[data-user-edit]").forEach((m) => {
        m.addEventListener("click", async () => {
          const g = Number(m.dataset.userEdit), _ = this._users[g];
          if (!_) return;
          const f = await this._showArgusInputModal({
            title: this._t("modal_edit_name"),
            label: this._t("modal_name_label"),
            placeholder: _.name,
            initialValue: _.name,
            type: "text"
          });
          f === null || f.trim() === "" || this._runWithPin(async () => {
            try {
              const y = this._users.map((z, R) => R === g ? { ...z, name: f.trim() } : z), k = await this._send("argus/save_ui", { users: y });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || y) : this._users = y, this._renderUsers();
            } catch (y) {
              this._showArgusConfirmModal(y.message || this._format("generic_error", { error: y }), { confirmLabel: "OK" });
            }
          });
        });
      }), n.querySelectorAll("[data-user-pin]").forEach((m) => {
        m.addEventListener("click", async () => {
          const g = Number(m.dataset.userPin), _ = this._users[g];
          if (!_) return;
          const f = await this._showArgusInputModal({
            title: `${this._t("modal_pin_title")} — ${_.name}`,
            label: this._t("modal_pin_help"),
            placeholder: "••••",
            type: "password",
            numeric: !0
          });
          f !== null && this._runWithPin(async () => {
            try {
              await this._send("argus/save_user_access_pin", { argus_user_id: _.id, pin: f.trim() });
              const y = await this._send("argus/dashboard");
              y && y.users && (this._users = y.users), this._renderUsers();
            } catch (y) {
              this._showArgusConfirmModal(y.message || this._format("generic_error", { error: y }), { confirmLabel: "OK" });
            }
          });
        });
      }), n.querySelector("#btn-add-manual-user")?.addEventListener("click", async () => {
        const m = await this._showArgusInputModal({
          title: this._t("modal_add_user"),
          label: this._t("modal_name_label"),
          placeholder: this._t("user_default") || "Usuario",
          type: "text"
        });
        !m || !m.trim() || this._runWithPin(async () => {
          try {
            const g = {
              id: `argus_manual_${Date.now()}`,
              name: m.trim(),
              role: "standard",
              enabled: !0,
              permissions: { view_status: !0, arm: !0, disarm: !0, view_history: !1 }
            }, _ = [...this._users || [], g], f = await this._send("argus/save_ui", { users: _ });
            f && f.ui ? (this._ui = f.ui, this._users = f.ui.users || _) : this._users = _, this._renderUsers();
          } catch (g) {
            this._showArgusConfirmModal(g.message || this._format("generic_error", { error: g }), { confirmLabel: "OK" });
          }
        });
      }), n.querySelectorAll("[data-user-role-toggle]").forEach((m) => {
        m.addEventListener("click", async () => {
          const g = Number(m.dataset.userRoleToggle), _ = this._users[g];
          if (!_) return;
          const f = await this._showArgusInputModal({
            title: this._t("user_role_action") || "Cambiar Rol",
            label: this._t("user_role_label") || "Selecciona el rol",
            initialValue: _.role === "admin" ? "admin" : "standard",
            type: "select",
            options: [
              { value: "admin", label: this._t("role_argus_admin") || "Administrador de Argus" },
              { value: "standard", label: this._t("role_argus_standard") || "Usuario estándar" }
            ]
          });
          !f || f === _.role || this._runWithPin(async () => {
            const y = this._users.map((k, z) => z === g ? { ...k, role: f } : k);
            try {
              const k = await this._send("argus/save_ui", { users: y });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || y) : this._users = y, this._renderUsers();
            } catch (k) {
              this._showArgusConfirmModal(k.message || this._format("generic_error", { error: k }), { confirmLabel: "OK" });
            }
          });
        });
      }), n.querySelectorAll("[data-user-del]").forEach(
        (m) => m.addEventListener("click", async () => {
          const g = Number(m.dataset.userDel), _ = this._users[g];
          if (!_) return;
          const f = this._format("delete_user_confirm", { name: _.name || "User" });
          await this._showArgusConfirmModal(
            this._t("modal_delete_confirm") || f,
            { confirmLabel: this._t("clear") || "Delete", confirmStyle: "background:#e53935;color:white;border:none" }
          ) && this._runWithPin(async () => {
            const k = [...this._users];
            k.splice(g, 1);
            try {
              const z = await this._send("argus/save_ui", { users: k });
              z && z.ui ? (this._ui = z.ui, this._users = z.ui.users || k) : this._users = k, this._renderUsers();
            } catch (z) {
              this._showArgusConfirmModal(z.message || this._format("generic_error", { error: z }), { confirmLabel: "OK" });
            }
          });
        })
      ))) : n.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    } catch (a) {
      console.error("Argus users list render failed:", a), n.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    }
    this._syncAccessSummary();
  }
  _populateTemperatureSources() {
    const n = this.shadowRoot.getElementById("temp-source-select-standalone");
    if (!n || !this._hass) return;
    const i = [{ entity_id: "auto", name: this._t("temp_auto") }];
    for (const l of Object.values(this._hass.states || {})) {
      const c = l.entity_id || "", u = l.attributes || {};
      if (c.startsWith("climate.") && typeof u.current_temperature == "number") {
        i.push({ entity_id: c, name: `🌡️ ${u.friendly_name || c} ${this._t("temp_thermostat")}` });
        continue;
      }
      if (!c.startsWith("sensor.")) continue;
      const m = String(u.device_class || "").toLowerCase(), g = String(u.unit_of_measurement || u.native_unit_of_measurement || "").toLowerCase(), _ = Number(l.state);
      Number.isFinite(_) && (m === "temperature" || ["°c", "°f", "c", "f"].includes(g)) && i.push({ entity_id: c, name: `🌡️ ${u.friendly_name || c}` });
    }
    const a = /* @__PURE__ */ new Set();
    n.innerHTML = i.filter((l) => a.has(l.entity_id) ? !1 : (a.add(l.entity_id), !0)).map((l) => `<option value="${this._escapeHtml(l.entity_id)}">${this._escapeHtml(l.name)}</option>`).join("");
  }
  _populateWeatherSources() {
    const n = this.shadowRoot.getElementById("weather-source-select");
    if (!n || !this._hass?.states) return;
    const i = n.value || this._weatherSource || "auto", a = Object.values(this._hass.states).filter((l) => l.entity_id?.startsWith("weather."));
    n.innerHTML = [{ entity_id: "auto", name: this._t("weather_auto") }, ...a.map((l) => ({ entity_id: l.entity_id, name: l.attributes?.friendly_name || l.entity_id }))].map((l) => `<option value="${this._escapeHtml(l.entity_id)}">${this._escapeHtml(l.name)}</option>`).join(""), n.value = [...n.options].some((l) => l.value === i) ? i : "auto";
  }
  _getWeatherEntity() {
    const n = this._weatherSource || "auto";
    return (n !== "auto" ? this._hass?.states?.[n] : null) || Object.values(this._hass?.states || {}).find((a) => a.entity_id?.startsWith("weather.")) || { state: "sunny", attributes: {} };
  }
  _getDisplayedTemperature() {
    if (!this._hass) return null;
    const n = this._temperatureSource || "auto";
    if (n !== "auto") {
      const c = this._hass.states?.[n];
      if (!c) return null;
      const u = n.startsWith("climate.") ? c.attributes?.current_temperature : Number(c.state), m = n.startsWith("climate.") ? c.attributes?.temperature_unit : c.attributes?.unit_of_measurement || c.attributes?.native_unit_of_measurement;
      return Number.isFinite(Number(u)) ? `${Number(u).toFixed(1).replace(/\.0$/, "")}°${String(m || "").replace("°", "")}` : null;
    }
    const i = this._getWeatherEntity(), a = i?.attributes?.temperature, l = i?.attributes?.temperature_unit;
    return Number.isFinite(Number(a)) ? `${Number(a).toFixed(1).replace(/\.0$/, "")}°${String(l || "").replace("°", "")}` : null;
  }
  _getTemperatureReadings() {
    if (!this._hass?.states) return [];
    const n = [], i = this._getWeatherEntity(), a = i?.attributes?.temperature, l = i?.attributes?.temperature_unit;
    Number.isFinite(Number(a)) && n.push({ label: "EXT.", value: `${Number(a).toFixed(1).replace(/\.0$/, "")}°${String(l || "").replace("°", "")}` });
    const c = this._temperatureSource || "auto";
    let u = c !== "auto" ? this._hass.states[c] : Object.values(this._hass.states).find((m) => m.entity_id?.startsWith("climate.") && Number.isFinite(Number(m.attributes?.current_temperature)));
    if (u?.entity_id?.startsWith("weather.") && (u = null), u) {
      const m = u.entity_id.startsWith("climate.") ? u.attributes?.current_temperature : Number(u.state), g = u.entity_id.startsWith("climate.") ? u.attributes?.temperature_unit : u.attributes?.unit_of_measurement || u.attributes?.native_unit_of_measurement;
      Number.isFinite(Number(m)) && n.push({ label: "INT.", value: `${Number(m).toFixed(1).replace(/\.0$/, "")}°${String(g || "").replace("°", "")}` });
    }
    return n;
  }
  _moonPhase() {
    const n = (this._hass?.states?.["sensor.moon_phase"]?.state || this._hass?.states?.["sensor.moon"]?.state || "").toLowerCase().replace(/[\s-]+/g, "_");
    return n.includes("new") ? "new" : n.includes("waxing_crescent") ? "waxing-crescent" : n.includes("first_quarter") ? "first-quarter" : n.includes("waxing_gibbous") ? "waxing-gibbous" : n.includes("waning_gibbous") ? "waning-gibbous" : n.includes("last_quarter") || n.includes("third_quarter") ? "last-quarter" : n.includes("waning_crescent") ? "waning-crescent" : (n.includes("full"), "full");
  }
  _eclipseEvent() {
    const i = Object.values(this._hass?.states || {}).find((l) => {
      const c = `${l.entity_id || ""} ${l.attributes?.friendly_name || ""} ${l.attributes?.device_class || ""}`.toLowerCase(), u = `${l.state || ""} ${l.attributes?.event || ""} ${l.attributes?.type || ""}`.toLowerCase();
      return /eclips/.test(c) && !/^(off|none|unknown|unavailable|false|0)$/i.test(String(l.state || "")) && /eclips|solar|lunar|moon|luna/.test(u);
    });
    if (!i) return null;
    const a = `${i.state || ""} ${i.attributes?.event || ""} ${i.attributes?.type || ""} ${i.attributes?.friendly_name || ""}`.toLowerCase();
    return /solar|sun|sol/.test(a) ? "solar" : /lunar|moon|luna/.test(a) ? "lunar" : null;
  }
  _renderEclipseOverlay(n) {
    if (!n) return "";
    const i = n === "solar" ? "☀️ Eclipse solar" : "🌕 Eclipse lunar";
    return `<div class="weather-eclipse" aria-label="${i}">${i}</div>`;
  }
  _season() {
    const n = (/* @__PURE__ */ new Date()).getMonth(), a = Number(this._hass?.config?.latitude) < 0 ? (n + 6) % 12 : n;
    return [11, 0, 1].includes(a) ? "winter" : [2, 3, 4].includes(a) ? "spring" : [5, 6, 7].includes(a) ? "summer" : "autumn";
  }
  async _handleBackgroundFiles(n) {
    const i = Array.from(n?.target?.files || []).slice(0, 4);
    if (!i.length) return;
    const a = (c) => new Promise((u, m) => {
      const g = new FileReader();
      g.onload = () => u(String(g.result || "")), g.onerror = m, g.readAsDataURL(c);
    });
    this._backgroundImages = (await Promise.all(i.map(a))).filter(Boolean);
    const l = this.shadowRoot.getElementById("bg-file-help");
    l && (l.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`);
  }
  _isVideoFile(n) {
    const i = [".mov", ".mp4", ".webm", ".ogg", ".avi", ".m4v"], a = (n.name || "").toLowerCase();
    return i.some((l) => a.endsWith(l)) || n.type.startsWith("video/");
  }
  async _showLivePhotoDialog(n, i, a) {
    confirm(this._format("file_choice", { file: n.name })) ? await i() : await a();
  }
  async _uploadFile(n, i) {
    const a = this._hass?.auth?.accessToken, l = {};
    a && (l.Authorization = `Bearer ${a}`);
    const c = new FormData();
    c.append("file", n);
    const u = await fetch("/api/argus/upload", {
      method: "POST",
      body: c,
      headers: l
    });
    if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
    return await u.json();
  }
  async _handlePanelBgFile(n) {
    const i = n?.target?.files?.[0];
    if (!i) return;
    const a = this.shadowRoot.getElementById("bg-file-help");
    a && (a.textContent = "Subiendo al servidor..."), n.target.value = "";
    try {
      if (this._isVideoFile(i))
        await this._showLivePhotoDialog(
          i,
          async () => {
            const c = await this._uploadFile(i, a);
            if (c?.success) {
              this._panelBgFile = c.url;
              const u = this.shadowRoot.getElementById("panel-bg-url-input");
              u && (u.value = c.url), a && (a.textContent = `Subido como imagen: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: c?.error || this._t("upload_error") }));
          },
          async () => {
            const c = await this._uploadFile(i, a);
            if (c?.success) {
              this._panelBgFile = c.url;
              const u = this.shadowRoot.getElementById("panel-bg-url-input");
              u && (u.value = c.url), a && (a.textContent = `Subido como video: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: c?.error || this._t("upload_error") }));
          }
        );
      else {
        const c = await this._uploadFile(i, a);
        if (c?.success) {
          this._panelBgFile = c.url;
          const u = this.shadowRoot.getElementById("panel-bg-url-input");
          u && (u.value = c.url), a && (a.textContent = `Subido: ${i.name}`), this._loadUploadedFiles();
        } else
          a && (a.textContent = this._format("generic_error", { error: c?.error || this._t("upload_error") }));
      }
    } catch (l) {
      console.error("Upload failed:", l), a && (a.textContent = this._format("generic_error", { error: l.message || l }));
    }
  }
  async _handleHubBgFile(n) {
    const i = n?.target?.files?.[0];
    if (!i) return;
    const a = this.shadowRoot.getElementById("hub-file-help");
    a && (a.textContent = "Subiendo al servidor..."), n.target.value = "";
    try {
      if (this._isVideoFile(i))
        await this._showLivePhotoDialog(
          i,
          async () => {
            const c = await this._uploadFile(i, a);
            if (c?.success) {
              this._hubBgFile = c.url;
              const u = this.shadowRoot.getElementById("hub-bg-url-input");
              u && (u.value = c.url), a && (a.textContent = `Subido como imagen: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: c?.error || this._t("upload_error") }));
          },
          async () => {
            const c = await this._uploadFile(i, a);
            if (c?.success) {
              this._hubBgFile = c.url;
              const u = this.shadowRoot.getElementById("hub-bg-url-input");
              u && (u.value = c.url), a && (a.textContent = `Subido como video: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: c?.error || this._t("upload_error") }));
          }
        );
      else {
        const c = await this._uploadFile(i, a);
        if (c?.success) {
          this._hubBgFile = c.url;
          const u = this.shadowRoot.getElementById("hub-bg-url-input");
          u && (u.value = c.url), a && (a.textContent = `Subido: ${i.name}`), this._loadUploadedFiles();
        } else
          a && (a.textContent = this._format("generic_error", { error: c?.error || this._t("upload_error") }));
      }
    } catch (l) {
      console.error("Upload failed:", l), a && (a.textContent = this._format("generic_error", { error: l.message || l }));
    }
  }
  async _loadUploadedFiles() {
    try {
      const n = await this._send("argus/list_uploaded_files");
      this._uploadedFiles = n || [], this._renderUploadedFiles();
    } catch (n) {
      console.error("Failed to load uploaded files:", n);
      const i = this.shadowRoot.getElementById("uploaded-files-list");
      i && (i.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; color:#ff4d4d; opacity:0.8;">
            ${this._t("error_loading_uploaded_files")}
          </div>
        `);
    }
  }
  _renderUploadedFiles() {
    const n = this.shadowRoot.getElementById("uploaded-files-list"), i = this.shadowRoot.getElementById("storage-files-count");
    if (!n) return;
    const a = this._uploadedFiles || [];
    if (!a.length) {
      n.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; opacity:0.5;">
          ${this._t("no_files_uploaded")}
        </div>
      `, i && (i.textContent = this._t("files_count").replace("{count}", "0"));
      return;
    }
    let l = 0;
    a.forEach((u) => l += u.size_bytes || 0);
    let c = "";
    l >= 1024 * 1024 ? c = `${(l / (1024 * 1024)).toFixed(2)} MB` : c = `${(l / 1024).toFixed(2)} KB`, i && (i.textContent = this._t("files_count_short").replace("{count}", a.length) + ` (${c})`), n.innerHTML = a.filter((u) => !u.is_video).map((u) => `
      <div class="file-card" data-filename="${this._escapeHtml(u.name)}">
        <div class="file-card-preview">
          <img src="${this._escapeHtml(u.url)}" loading="lazy">
        </div>
        <div class="file-card-name" title="${this._escapeHtml(u.name)}">${this._escapeHtml(u.name)}</div>
        <div class="file-card-meta">
          <span>${this._escapeHtml(u.size_str)}</span>
          <button class="file-card-btn-delete" data-filename="${this._escapeHtml(u.name)}" title="${this._escapeHtml(this._t("delete_btn_title"))}">🗑️</button>
        </div>
        <div class="file-card-actions">
          <button class="file-card-btn use-for-panel" data-url="${this._escapeHtml(u.url)}">${this._escapeHtml(this._t("use_for_panel"))}</button>
          <button class="file-card-btn use-for-hub" data-url="${this._escapeHtml(u.url)}">${this._escapeHtml(this._t("use_for_hub"))}</button>
        </div>
      </div>
    `).join(""), n.querySelectorAll(".file-card-btn-delete").forEach((u) => {
      u.addEventListener("click", () => {
        const m = u.dataset.filename;
        confirm(this._t("file_delete_confirm").replace("{filename}", m)) && this._deleteUploadedFile(m);
      });
    }), n.querySelectorAll(".use-for-panel").forEach((u) => {
      u.addEventListener("click", () => {
        const m = u.dataset.url;
        this._panelBgFile = m;
        const g = this.shadowRoot.getElementById("panel-bg-url-input");
        g && (g.value = m);
        const _ = this.shadowRoot.getElementById("bg-mode-select-standalone");
        _ && (_.value = "photo"), this._backgroundMode = "photo", this._updateBgFieldsVisibility(), this._renderEntries(), this._savePersonalization();
        const f = this.shadowRoot.getElementById("bg-file-help");
        f && (f.textContent = this._t("bg_panel_selected_from_history"));
      });
    }), n.querySelectorAll(".use-for-hub").forEach((u) => {
      u.addEventListener("click", () => {
        const m = u.dataset.url;
        this._hubBgFile = m;
        const g = this.shadowRoot.getElementById("hub-bg-url-input");
        g && (g.value = m);
        const _ = this.shadowRoot.getElementById("hub-bg-mode-select");
        _ && (_.value = "image"), this._hubBgMode = "image", this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._savePersonalization();
        const f = this.shadowRoot.getElementById("hub-file-help");
        f && (f.textContent = this._t("bg_hub_selected_from_history"));
      });
    });
  }
  async _deleteUploadedFile(n) {
    try {
      await this._send("argus/delete_uploaded_file", { filename: n }), this._uploadedFiles && (this._uploadedFiles = this._uploadedFiles.filter((l) => l.name !== n), this._renderUploadedFiles());
      const i = this.shadowRoot.getElementById("panel-bg-url-input");
      i && i.value === `/local/argus/${n}` && (i.value = "", this._panelBgFile = "");
      const a = this.shadowRoot.getElementById("hub-bg-url-input");
      a && a.value === `/local/argus/${n}` && (a.value = "", this._hubBgFile = "");
    } catch (i) {
      console.warn("Server delete failed:", i), alert(this._format("delete_file_error", { error: i.message || i }));
    }
  }
  _updateBgFieldsVisibility() {
    const n = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", i = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", a = this.shadowRoot.getElementById("panel-custom-bg-inputs");
    if (a)
      if (n === "photo" || n === "collage") {
        a.style.display = "flex";
        const c = this.shadowRoot.getElementById("lbl-panel-bg-sound");
        c && (c.style.display = "none");
        const u = this.shadowRoot.getElementById("panel-bg-file-input");
        u && (u.accept = "image/*,.mov,.heic,.heif");
        const m = this.shadowRoot.getElementById("panel-bg-url-input");
        m && (m.placeholder = "Pegar URL de la imagen");
      } else
        a.style.display = "none";
    const l = this.shadowRoot.getElementById("hub-custom-bg-inputs");
    if (l)
      if (i === "image") {
        l.style.display = "flex";
        const c = this.shadowRoot.getElementById("lbl-hub-bg-sound");
        c && (c.style.display = "none");
        const u = this.shadowRoot.getElementById("hub-bg-file-input");
        u && (u.accept = "image/*,.mov,.heic,.heif");
        const m = this.shadowRoot.getElementById("hub-bg-url-input");
        m && (m.placeholder = "Pegar URL de la imagen/GIF");
      } else
        l.style.display = "none";
  }
  _updateCanvasBackground() {
    const n = this.shadowRoot.getElementById("argus-canvas-bg"), i = this._hubBgMode || "default", a = this._hubBgFile || "";
    if (this.setAttribute("data-bg-mode", i), this.style.backgroundImage = "", this.style.backgroundSize = "", this.style.backgroundPosition = "", this.style.backgroundRepeat = "", this.style.backgroundAttachment = "", this.style.background = "", n && (n.innerHTML = "", n.style.backgroundImage = ""), i === "none")
      return;
    const l = i === "default" ? "/api/argus_static/argus-default-bg.jpg" : i === "image" && a ? a : "";
    l && (this.style.backgroundImage = `url('${l.replace(/'/g, "%27")}')`, this.style.backgroundSize = "cover", this.style.backgroundPosition = "center", this.style.backgroundRepeat = "no-repeat", this.style.backgroundAttachment = "fixed");
  }
  _renderEntryBackground(n, i) {
    const a = this._backgroundMode || "weather", l = this._backgroundImages || [];
    return a === "none" ? '<div class="wx wx-static"></div>' : a === "photo" && (this._panelBgFile || l[0]) ? `<div class="wx wx-photo" style="--bg-image:url('${(this._panelBgFile || l[0]).replace(/'/g, "%27")}')"></div>` : a === "collage" && l.length ? `<div class="wx wx-collage"><div class="wx-collage-grid">${l.slice(0, 4).map((c) => `<div class="wx-collage-cell" style="background-image:url('${c.replace(/'/g, "%27")}')"></div>`).join("")}</div></div>` : a === "video" && this._panelBgFile ? `<div class="wx wx-video">
        <video autoplay loop playsinline ${this._panelBgSound ? "" : "muted"} style="width:100%; height:100%; object-fit:cover; pointer-events:none; position:absolute; inset:0; z-index:1;">
          <source src="${this._panelBgFile}">
        </video>
      </div>` : this._getWeatherBg(n, i);
  }
  _updateHomeNameDisplay() {
    const n = this.shadowRoot.getElementById("lbl-home-name-prominent");
    n && (n.textContent = this._homeName || this._t("home_default"));
  }
  _sendTempNotification(n) {
    const i = this._notifTargets || [];
    !i.length || !this._hass || i.forEach((a) => {
      try {
        this._hass.callService("notify", a, {
          message: n,
          title: this._t("temp_notification_title"),
          data: { push: { sound: "default", badge: 1 } }
        });
      } catch {
      }
    });
  }
  _normaliseEmergencyNumber(n) {
    const i = String(n || "").replace(/[^0-9+]/g, "");
    return /^[+]?[0-9]{2,15}$/.test(i) ? i : "911";
  }
  _renderSosOutputs() {
    const n = this.shadowRoot?.getElementById("sos-output-chips");
    if (!n) return;
    const i = this._panicOutputs || [];
    n.innerHTML = i.length ? i.map((a) => {
      const l = this._hass?.states?.[a]?.attributes?.friendly_name || a;
      return `<span class="sensor-pill" title="${this._escapeHtml(l)}"><span>${this._escapeHtml(l)}</span></span>`;
    }).join("") : `<div class="mode-sensor-none">${this._t("sos_no_outputs")}</div>`;
  }
  _configureEmergencyCall() {
    const n = this.shadowRoot?.getElementById("sos-call-btn");
    if (!n) return;
    const i = this._normaliseEmergencyNumber(this._emergencyNumber);
    n.href = `tel:${i}`, n.textContent = `${this._t("sos_call")} (${i})`;
  }
  async _triggerSOS() {
    if (this._sosBusy) return;
    this._sosBusy = !0;
    const n = this.shadowRoot && this.shadowRoot.getElementById("sos-modal");
    n && n.classList.remove("open");
    const i = this._normaliseEmergencyNumber(this._emergencyNumber), a = this._sosEntryIdx, l = this._dashboard?.entries?.[a], c = l?.entity_id;
    try {
      if (!this._hass || !c) throw new Error(this._t("no_alarm_instance"));
      await this._send("argus/perform_alarm_action", { action: "sos", entry_id: l.entry_id }), window.confirm(`${this._t("sos_activated")}. ${this._format("sos_call_confirm", { number: i })}`) && (window.location.href = `tel:${i}`);
    } catch (u) {
      alert(this._format("sos_error", { error: u?.message || u }));
    } finally {
      this._sosEntryIdx = null, this._sosBusy = !1;
    }
  }
  async _stopSOS(n) {
    const i = this._dashboard?.entries?.[n], l = (i && this._hass?.states?.[i.entity_id])?.attributes?.panic_previous_state, c = {
      armed_home: "alarm_arm_home",
      armed_away: "alarm_arm_away",
      armed_night: "alarm_arm_night",
      armed_vacation: "alarm_arm_vacation",
      disarmed: "alarm_disarm"
    }[l];
    if (!i?.entity_id || !c) {
      alert(this._t("panic_state_unknown"));
      return;
    }
    const u = async (g) => {
      try {
        return await this._send("argus/perform_alarm_action", {
          action: c.replace("alarm_", ""),
          entry_id: i.entry_id,
          ...g ? { code: g } : {}
        }), await this._load(), !0;
      } catch (_) {
        const f = this.shadowRoot.getElementById("pin-error");
        return f ? f.textContent = `❌ ${this._format("panic_stop_error", { error: "" }).replace(/:\s*$/, "")}` : alert(this._format("panic_stop_error", { error: _?.message || _ })), !1;
      }
    };
    i.pin_configured === !0 || (this._users || []).length > 0 ? this._showPinModal(u) : await u(null);
  }
  _savePersonalization() {
    this._runWithPin(() => this._persistPersonalization());
  }
  async _persistPersonalization() {
    const n = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", i = this.shadowRoot.getElementById("temp-source-select-standalone")?.value || "auto", a = this.shadowRoot.getElementById("weather-source-select")?.value || "auto", l = this._normaliseEmergencyNumber(this.shadowRoot.getElementById("emergency-number-input")?.value), c = this.shadowRoot.getElementById("panel-bg-url-input")?.value || "", u = !!this.shadowRoot.getElementById("chk-panel-bg-sound")?.checked, m = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", g = m === "default" ? "none" : m, _ = this.shadowRoot.getElementById("hub-bg-url-input")?.value || "", f = !!this.shadowRoot.getElementById("chk-hub-bg-sound")?.checked, y = {
      home_name: this._homeName,
      temperature_source: i,
      weather_source: a,
      emergency_number: l
    };
    this._panicOutputs !== void 0 && (y.panic_outputs = this._panicOutputs);
    const k = (this._ui.users || []).find((P) => P.id === this._myUserId);
    y.background_mode = n, y.background_images = this._backgroundImages || [], y.panel_bg_file = c, y.panel_bg_sound = u, y.hub_bg_mode = g, y.hub_bg_file = _, y.hub_bg_sound = f, y.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    let z = "default", R = "";
    if (n === "photo" && c ? (z = "photo", R = c) : n === "weather" ? z = "weather" : n === "none" && (z = "none"), y.theme = {
      background_mode: z,
      background_file: R
    }, k) {
      const P = JSON.parse(JSON.stringify(this._ui.users || [])), E = P.find((S) => S.id === this._myUserId);
      E.background_mode = n, E.background_images = this._backgroundImages || [], E.panel_bg_file = c, E.panel_bg_sound = u, E.hub_bg_mode = g, E.hub_bg_file = _, E.hub_bg_sound = f, E.theme = y.theme, y.users = P;
    }
    try {
      await this._send("argus/save_ui", y), this._currentUserTheme = y.theme, this._backgroundMode = n, this._temperatureSource = i, this._weatherSource = a, this._emergencyNumber = l, this._panelBgFile = c, this._panelBgSound = u, this._hubBgMode = m, this._hubBgFile = _, this._hubBgSound = f, this._updateTheme(), this._ui = this._ui || {}, k ? this._ui.users = y.users : (this._ui.background_mode = n, this._ui.background_images = this._backgroundImages || [], this._ui.panel_bg_file = c, this._ui.panel_bg_sound = u, this._ui.hub_bg_mode = g, this._ui.hub_bg_file = _, this._ui.hub_bg_sound = f), this._ui.temperature_source = i, this._ui.weather_source = a, this._ui.emergency_number = l, this._ui.panic_outputs = this._panicOutputs, this._configureEmergencyCall(), this._ui.hub_bg_file = _, this._ui.hub_bg_sound = f, this._renderEntries(), this._updateCanvasBackground();
      const P = this.shadowRoot.getElementById("btn-save-personalization-standalone");
      if (P) {
        const E = P.textContent;
        P.textContent = this._t("saved"), P.style.background = "#43a047", setTimeout(() => {
          P.textContent = E, P.style.background = "";
        }, 3e3);
      }
    } catch (P) {
      alert(this._format("generic_error", { error: P.message }));
    }
  }
  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const n = () => {
      const i = this.shadowRoot.getElementById("home-name-modal"), a = this.shadowRoot.getElementById("home-name-input"), l = this.shadowRoot.getElementById("home-name-status");
      a.value = this._homeName || this.shadowRoot.getElementById("home-name-setting")?.value || "", l && (l.textContent = ""), i.classList.add("open"), i.setAttribute("aria-hidden", "false"), setTimeout(() => a.focus(), 60);
    };
    this._runWithPin(n);
  }
  _closeHomeNameModal() {
    const n = this.shadowRoot.getElementById("home-name-modal");
    n.classList.remove("open"), n.setAttribute("aria-hidden", "true");
  }
  async _saveHomeName() {
    const i = (this.shadowRoot.getElementById("home-name-input")?.value || "").trim();
    try {
      await this._send("argus/save_ui", { home_name: i }), this._homeName = i, this._ui || (this._ui = {}), this._ui.home_name = i, this._updateHomeNameDisplay(), this._renderEntries(), setTimeout(() => this._closeHomeNameModal(), 800);
    } catch (a) {
      alert(this._format("generic_error", { error: a.message }));
    }
  }
  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const n = this.shadowRoot.getElementById("pin-status"), i = this._dashboard?.entries?.[0]?.pin_configured === !0, a = this.shadowRoot.getElementById("current-pin").value;
    if (i && !a) {
      n && (n.textContent = this._t("pin_incorrect"), n.className = "status err");
      return;
    }
    const l = this.shadowRoot.getElementById("new-pin-1").value, c = this.shadowRoot.getElementById("new-pin-2").value;
    if (l !== c) {
      n ? (n.textContent = this._t("pin_mismatch"), n.className = "status err") : alert(this._t("pin_mismatch"));
      return;
    }
    try {
      await this._send("argus/update_master_pin", { pin: l, current_pin: a }), n && (n.textContent = l ? this._t("pin_updated") : this._t("pin_deleted"), n.className = "status ok"), this.shadowRoot.getElementById("current-pin-display") && (this.shadowRoot.getElementById("current-pin-display").textContent = l ? this._t("pin_active_yes") : this._t("pin_active_no")), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !!l), this._syncAccessSummary(), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => this._load(), 1200);
    } catch (u) {
      n ? (n.textContent = u.message, n.className = "status err") : alert(u.message);
    }
  }
  async _handleForgotPin() {
    const n = this.shadowRoot.getElementById("pin-status"), i = this.shadowRoot.getElementById("pin-error");
    if (!(this._hass?.user?.is_admin === !0)) {
      const l = this._t("pin_reset_admin_only");
      n && (n.textContent = l, n.className = "status err"), i && (i.textContent = l);
      return;
    }
    if (confirm(this._t("pin_reset_confirm")))
      try {
        await this._send("argus/update_master_pin", { pin: "", force_reset: !0 });
        const l = "✓ PIN Maestro restablecido";
        n && (n.textContent = l, n.className = "status ok"), i && (i.textContent = l, i.style.color = "#43a047"), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => {
          this._closePinModal(), this._load();
        }, 1200);
      } catch (l) {
        const c = this._format("generic_error", { error: l.message });
        n && (n.textContent = c, n.className = "status err"), i && (i.textContent = c);
      }
  }
  /* ── Liquid-glass input modal (replaces window.prompt) ───────────── */
  _showArgusInputModal({ title: n = "", label: i = "", placeholder: a = "", initialValue: l = "", type: c = "text", numeric: u = !1, options: m = null } = {}) {
    return new Promise((g) => {
      const _ = `_aim_${Date.now()}`, f = document.createElement("div");
      f.id = _, f.setAttribute("role", "dialog"), f.setAttribute("aria-modal", "true"), f.style.cssText = [
        "position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const y = i.replace(/'/g, "&#39;"), k = n.replace(/'/g, "&#39;"), z = a.replace(/'/g, "&#39;"), R = this._t("modal_cancel") || "Cancelar", P = this._t("modal_save") || "Guardar";
      f.innerHTML = `
        <div style="background:rgba(30,30,45,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${k}</div>
          ${y ? `<div style="font-size:13px;color:rgba(255,255,255,0.55);margin-top:-6px">${y}</div>` : ""}
          ${c === "select" && m ? `<select id="aim-inp" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;transition:border-color .2s;font-family:inherit">
                 ${m.map((w) => `<option value="${this._escapeHtml(w.value)}" ${w.value === l ? "selected" : ""}>${this._escapeHtml(w.label)}</option>`).join("")}
               </select>` : `<input id="aim-inp" type="${c === "password" ? "password" : "text"}"
            ${u ? 'inputmode="numeric" pattern="[0-9]*"' : ""}
            placeholder="${z}"
            value="${l.replace(/"/g, "&quot;")}"
            style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;
              padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;
              transition:border-color .2s;font-family:inherit"/>`}
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="aim-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${R}</button>
            <button id="aim-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${P}</button>
          </div>
        </div>`, (this.shadowRoot || document.body).appendChild(f);
      const S = f.querySelector("#aim-inp"), h = f.querySelector("#aim-ok"), x = f.querySelector("#aim-cancel");
      setTimeout(() => S?.focus(), 60), S?.addEventListener("focus", () => S.style.borderColor = "rgba(74,144,217,0.8)"), S?.addEventListener("blur", () => S.style.borderColor = "rgba(255,255,255,0.15)");
      const b = (w) => {
        f.remove(), g(w);
      };
      h.addEventListener("click", () => b(S.value)), x.addEventListener("click", () => b(null)), S.addEventListener("keydown", (w) => {
        w.key === "Enter" && (w.preventDefault(), b(S.value)), w.key === "Escape" && (w.preventDefault(), b(null));
      }), f.addEventListener("click", (w) => {
        w.target === f && b(null);
      });
    });
  }
  /* ── Liquid-glass confirm modal (replaces window.confirm) ─────────── */
  _showArgusConfirmModal(n = "", { confirmLabel: i = "", confirmStyle: a = "", cancelLabel: l = "" } = {}) {
    return new Promise((c) => {
      const u = document.createElement("div");
      u.setAttribute("role", "alertdialog"), u.setAttribute("aria-modal", "true"), u.style.cssText = [
        "position:fixed;inset:0;z-index:9999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const m = i || this._t("modal_confirm") || "Confirmar", g = l || this._t("modal_cancel") || "Cancelar", _ = a || "background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)";
      u.innerHTML = `
        <div style="background:rgba(30,30,45,0.82);border:1px solid rgba(255,255,255,0.14);border-radius:20px;
          padding:28px 24px 22px;width:min(340px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.55);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.88);line-height:1.5;text-align:center">${n}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${g}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${_}">${m}</button>
          </div>
        </div>`, (this.shadowRoot || document.body).appendChild(u);
      const y = (k) => {
        u.remove(), c(k);
      };
      u.querySelector("#acm-ok").addEventListener("click", () => y(!0)), u.querySelector("#acm-cancel").addEventListener("click", () => y(!1)), u.addEventListener("click", (k) => {
        k.target === u && y(!1);
      }), u.addEventListener("keydown", (k) => {
        k.key === "Enter" && y(!0), k.key === "Escape" && y(!1);
      }), setTimeout(() => u.querySelector("#acm-ok")?.focus(), 60);
    });
  }
  _runWithPin(n) {
    n();
  }
  _showPinModal(n) {
    const i = this.shadowRoot.getElementById("pin-modal"), a = this.shadowRoot.getElementById("pin-input"), l = this.shadowRoot.getElementById("pin-error"), c = this.shadowRoot.querySelector(".wrap");
    a.value = "", l && (l.textContent = "", l.style.color = ""), this._pinCallback = n;
    const u = this.classList.contains("fullscreen-active");
    let m = null;
    if (u && (m = this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry") || this.shadowRoot.querySelector("article")), u && m) {
      i.style.position = "absolute", i.style.zIndex = "99999999", i.style.background = "rgba(0, 0, 0, 0.55)", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none";
      const g = i.querySelector(".modal");
      g && (g.classList.remove("dial-elastic"), g.offsetWidth, g.classList.add("dial-elastic")), m.appendChild(i);
    } else
      i.style.position = "fixed", i.style.zIndex = "999999", i.style.background = "rgba(0, 0, 0, 0.3)", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none", c && c.classList.add("wrap-blurred");
    i.classList.add("open"), i.setAttribute("aria-hidden", "false"), setTimeout(() => a.focus(), 60);
  }
  _closePinModal() {
    const n = this.shadowRoot.getElementById("pin-modal");
    n.classList.remove("open"), n.setAttribute("aria-hidden", "true");
    const i = this.shadowRoot.querySelector(".wrap");
    i && i.classList.remove("wrap-blurred"), n.style.position = "fixed", n.style.zIndex = "999999", this.shadowRoot.appendChild(n), this._pinCallback = null;
  }
  _appendPinDigit(n) {
    const i = this.shadowRoot.getElementById("pin-input"), a = this.shadowRoot.getElementById("pin-error");
    i && (i.value = `${i.value || ""}${n}`.slice(0, 8), a && (a.textContent = ""));
  }
  _backspacePin() {
    const n = this.shadowRoot.getElementById("pin-input"), i = this.shadowRoot.getElementById("pin-error");
    n && (n.value = (n.value || "").slice(0, -1), i && (i.textContent = ""));
  }
  async _submitPin() {
    const n = this.shadowRoot.getElementById("pin-input").value.trim();
    if (!n) {
      const a = this.shadowRoot.getElementById("pin-error");
      a && (a.textContent = "⚠️ Introduce el PIN");
      return;
    }
    const i = this._pinCallback;
    if (i)
      try {
        await i(n) !== !1 && this._closePinModal();
      } catch (a) {
        const l = this.shadowRoot.getElementById("pin-error");
        l && (l.textContent = a.message || "❌ PIN incorrecto");
      }
    else
      this._closePinModal();
  }
  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const n = (this.shadowRoot.getElementById("selector-search").value || "").toLowerCase().trim(), i = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"];
    this._available.filter((l) => {
      if (this._selectorTarget === "external_panel") return l.domain === "alarm_control_panel";
      if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(l.domain);
      if (l.domain === "lock") return !0;
      if (l.domain === "binary_sensor") {
        const c = this._hass?.states?.[l.entity_id]?.attributes?.device_class || "";
        return i.includes(c);
      }
      return !1;
    }).filter((l) => !n || [l.entity_id, l.name, l.area].filter(Boolean).join(" ").toLowerCase().includes(n)).forEach((l) => {
      this._selected.includes(l.entity_id) || this._selected.push(l.entity_id);
    }), this._renderSelector();
  }
  _openModal(n) {
    this._selectorTarget = n;
    const i = this._currentModeConfig(), a = n === "sensor" ? "sensors" : n === "bypass" ? "bypassed_sensors" : n === "entry" ? "entry_sensors" : n === "external_panel" ? "external_panels" : "sirens";
    this._selected = n === "panic" ? [...this._panicOutputs || []] : Array.isArray(i[a]) ? [...i[a]] : [];
    const l = this.shadowRoot.getElementById("selector-title");
    n === "sensor" ? l.textContent = this._t("sensor_section") : n === "bypass" ? l.textContent = this._t("sensors_to_bypass") : n === "entry" ? l.textContent = this._t("entry_sensors") : n === "panic" ? l.textContent = this._t("selector_panic") : n === "external_panel" ? l.textContent = this._t("external_panels") || "Paneles de alarma externos" : l.textContent = this._t("siren_section"), this.shadowRoot.getElementById("selector-search").value = "", this._renderSelector();
    const c = this.shadowRoot.getElementById("selector-modal");
    c.classList.add("open"), c.setAttribute("aria-hidden", "false");
  }
  _closeModal() {
    const n = this.shadowRoot.getElementById("selector-modal");
    n.classList.remove("open"), n.setAttribute("aria-hidden", "true");
  }
  _renderSelector() {
    const n = (this.shadowRoot.getElementById("selector-search").value || "").toLowerCase().trim(), i = this.shadowRoot.getElementById("selector-list"), a = this.shadowRoot.getElementById("selector-selected"), l = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"], c = this._available.filter((u) => {
      if (this._selectorTarget === "external_panel") return u.domain === "alarm_control_panel";
      if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(u.domain);
      if (u.domain === "lock") return !0;
      if (u.domain === "binary_sensor") {
        const m = this._hass?.states?.[u.entity_id]?.attributes?.device_class || "";
        return l.includes(m);
      }
      return !1;
    }).filter((u) => !n || [u.entity_id, u.name, u.area, u.entity_id.split(".")[1]].filter(Boolean).join(" ").toLowerCase().includes(n));
    i.innerHTML = c.map((u) => {
      this._hass?.states?.[u.entity_id]?.state;
      const m = this._hass?.states?.[u.entity_id], g = this._deviceFacts(u.entity_id, m, !0);
      return `<label class="pick-row">
        <input type="checkbox" data-entity="${this._escapeHtml(u.entity_id)}" ${this._selected.includes(u.entity_id) ? "checked" : ""}>
        <div>
          <div class="pick-row-name">${this._escapeHtml(u.name || u.entity_id)}</div>
          <div class="pick-row-meta">${this._escapeHtml(u.entity_id)}${u.area ? " · " + this._escapeHtml(u.area) : ""}</div>
          <div class="device-facts">${g.map((_) => `<span class="device-fact ${_.className}">${this._escapeHtml(_.text)}</span>`).join("")}</div>
        </div>
      </label>`;
    }).join("") || `<div class="small" style="padding:10px">${this._t("no_results")}</div>`, i.addEventListener("change", (u) => {
      const m = u.target.closest("input[type=checkbox]");
      if (!m || !m.dataset.entity) return;
      const g = m.dataset.entity;
      m.checked ? this._selected.includes(g) || this._selected.push(g) : this._selected = this._selected.filter((_) => _ !== g), this._renderSelector();
    }, { once: !0 }), a.innerHTML = this._selected.map((u) => {
      const m = this._hass?.states?.[u], g = this._deviceFacts(u, m, !0);
      return `<div class="sel-right-item">
        <div style="min-width:0">
          <div class="sel-right-name">${this._escapeHtml(m?.attributes?.friendly_name || u)}</div>
          <div class="sel-right-facts">${g.map((_) => `<span class="device-fact ${_.className}">${this._escapeHtml(_.text)}</span>`).join("")}</div>
        </div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${this._escapeHtml(u)}">✕</button>
      </div>`;
    }).join("") || `<div class="small" style="padding:10px;opacity:.5">${this._t("none_selected")}</div>`, a.querySelectorAll("[data-rm]").forEach(
      (u) => u.addEventListener("click", () => {
        this._selected = this._selected.filter((m) => m !== u.dataset.rm), this._renderSelector();
      })
    ), this.shadowRoot.getElementById("selector-count").textContent = `${this._selected.length} ${this._t("selected_lbl").toLowerCase()}`;
  }
  _acceptSelection() {
    if (!this._ui) return;
    if (this._selectorTarget === "panic") {
      this._panicOutputs = [...this._selected], this._renderSosOutputs(), this._closeModal();
      return;
    }
    this._ui.modes || (this._ui.modes = {}), this._ui.modes.__by_entity__ || (this._ui.modes.__by_entity__ = {});
    let n = this._modeEntryId;
    (!n || n === "default") && (n = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = n, this._ui.modes.__by_entity__[n] || (this._ui.modes.__by_entity__[n] = {});
    const i = {
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
    }, a = this._ui.modes.__by_entity__[n][this._mode] || {}, l = { ...i, ...a };
    this._selectorTarget === "sensor" && (l.sensors = [...this._selected]), this._selectorTarget === "siren" && (l.sirens = [...this._selected]), this._selectorTarget === "bypass" && (l.bypassed_sensors = [...this._selected]), this._selectorTarget === "entry" && (l.entry_sensors = [...this._selected]), this._selectorTarget === "external_panel" && (l.external_panels = [...this._selected]), this._ui.modes.__by_entity__[n][this._mode] = l, this._closeModal(), this._renderModeView();
  }
  /* ── Alarm actions ───────────────────────────────────────────────── */
  async _handleAction(n, i) {
    const a = this._dashboard.entries[Number(n)];
    if (!a?.entity_id || !this._hass) return;
    const l = this._hass.states[a.entity_id];
    if (!l || l.state === "unavailable") return;
    const c = {
      home: "alarm_arm_home",
      away: "alarm_arm_away",
      night: "alarm_arm_night",
      vacation: "alarm_arm_vacation",
      disarm: "alarm_disarm"
    }, u = {
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      vacation: this._t("mode_vacation")
    }, m = c[i];
    if (!m) return;
    if (this._hass?.user?.name || this._t("user_default"), i === "disarm") {
      const f = a.pin_configured === !0, y = a.user_pin_configured === !0, k = async (z) => {
        try {
          return await this._send("argus/perform_alarm_action", {
            action: "disarm",
            entry_id: a.entry_id,
            ...z ? { code: z } : {}
          }), setTimeout(() => {
            this._renderModeView(), this._load();
          }, 300), !0;
        } catch {
          const P = this.shadowRoot.getElementById("pin-error");
          return P && (P.textContent = "❌ PIN incorrecto o error al desarmar"), !1;
        }
      };
      f || y ? this._showPinModal(async (z) => await k(z)) : await k(null);
      return;
    }
    const g = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id, _ = this._ui?.modes?.__by_entity__?.[g]?.[i] || this._ui?.modes?.[i] || {};
    if (_.require_closed) {
      const f = _.sensors || [], y = new Set(
        _.bypassed_sensors || _.bypassedSensors || []
      ), k = [];
      for (const z of f) {
        if (y.has(z)) continue;
        const R = this._hass.states[z]?.state;
        ["on", "open", "unlocked", "active", "motion", "recording"].includes(R) && k.push(this._hass.states[z]?.attributes?.friendly_name || z);
      }
      if (k.length > 0) {
        this._showArmBlockedAlert(k);
        return;
      }
    }
    try {
      await this._send("argus/perform_alarm_action", {
        action: m.replace("alarm_", ""),
        entry_id: a.entry_id
      });
      const f = u[i] || i;
      setTimeout(() => this._load(), 800);
    } catch (f) {
      const y = f?.message || (typeof f == "string" ? f : JSON.stringify(f));
      this._showArmBlockedAlert([], y), console.error("Argus action failed", f);
    }
  }
  _showArmBlockedAlert(n = [], i = "") {
    if (i) {
      alert(`🚨 ${this._t("action_failed")}

${i}`);
      return;
    }
    const a = n.map((l) => `  • ${l}`).join(`
`);
    alert(
      `🚨 ${this._t("cannot_arm")}

` + this._format("open_sensors_explain", { names: a })
    );
  }
  /* ── Bootstrap Render Methods ─────────────────────────────────────── */
  _renderInitializationError(n) {
    const i = this.shadowRoot.getElementById("bootstrap-overlay");
    i.style.display = "flex", i.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(this._t("initialization_error_title"))}</h1>
        <p>${this._escapeHtml(this._t("initialization_error_desc"))}</p>
        <div style="font-size:11px;opacity:.55;margin-bottom:16px;word-break:break-word">
          ${this._escapeHtml(n?.message || "unknown error")}
        </div>
        <button id="btn-retry-argus" class="btn-start" style="width:100%">
          ${this._escapeHtml(this._t("retry_action"))}
        </button>
      </div>
    `, this.shadowRoot.getElementById("btn-retry-argus")?.addEventListener("click", () => {
      i.style.display = "none", this._dashboard = null, this._ensureInitialized();
    });
  }
  _renderMissingConfigurationScreen() {
    const n = this.shadowRoot.getElementById("bootstrap-overlay");
    n.style.display = "flex", n.innerHTML = `
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
  _showProfileWelcome() {
    if (this._welcomeShownThisMount || !this._currentProfile?.name) return;
    this._welcomeShownThisMount = !0;
    const n = this.shadowRoot.getElementById("bootstrap-overlay"), i = this._format("welcome_profile", {
      name: this._currentProfile.name
    });
    n.style.display = "flex", n.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass" style="animation:cardSlideFadeIn .45s ease">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(i)}</h1>
        <p style="margin-bottom:0">Argus Home Hub</p>
      </div>
    `, clearTimeout(this._welcomeTimer), this._welcomeTimer = setTimeout(() => {
      n.style.opacity = "0", setTimeout(() => {
        n.style.display = "none", n.style.opacity = "";
      }, 300);
    }, 1200);
  }
  _renderFirstRunScreen() {
    const n = this.shadowRoot.getElementById("bootstrap-overlay");
    if (n.style.display = "flex", this._hass?.user && this._hass.user.is_admin === !1) {
      n.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass">
          <h1>${this._t("first_run_blocked_title") || "Acceso denegado"}</h1>
          <p>${this._t("first_run_blocked_desc") || "Se requiere un administrador de Home Assistant para configurar Argus por primera vez."}</p>
        </div>
      `;
      return;
    }
    const i = this._hass?.user?.name || "Admin", a = this._getCurrentLangCode(), l = {
      es: ["Bienvenido a Argus Home Hub", "Protección inteligente para lo que más importa."],
      en: ["Welcome to Argus Home Hub", "Smart protection for what matters most."],
      fr: ["Bienvenue dans Argus Home Hub", "Une protection intelligente pour ce qui compte le plus."],
      pt: ["Bem-vindo ao Argus Home Hub", "Proteção inteligente para o que mais importa."],
      it: ["Benvenuto in Argus Home Hub", "Protezione intelligente per ciò che conta di più."],
      zh: ["欢迎使用 Argus Home Hub", "为重要事物提供智能保护。"],
      ru: ["Добро пожаловать в Argus Home Hub", "Умная защита самого важного."]
    }[a] || ["Welcome to Argus Home Hub", "Smart protection for what matters most."], c = () => {
      n.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:420px">
          <div class="argus-first-run-thank-icon">✓</div>
          <h1 style="margin-bottom:10px;font-weight:850">Gracias por usar Argus Home Hub</h1>
          <p style="margin:0">Tu sistema está listo y protegido.</p>
        </div>
      `, setTimeout(() => {
        n.style.display = "none", this._profileSelectedThisMount = !0, this._load();
      }, 1500);
    };
    n.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:540px;width:92vw">
        <div class="argus-first-run-brand">
          <img class="argus-first-run-logo" src="/api/argus_static/argus_logo.png" alt="Logotipo oficial de Argus">
          <div>
            <h1>${this._escapeHtml(l[0])}</h1>
            <p>${this._escapeHtml(l[1])}</p>
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
          <input type="text" id="setup-admin-name" placeholder="Name" value="${this._escapeHtml(i)}" style="margin-bottom:15px;width:100%" />

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
    const u = this.shadowRoot.getElementById("tab-setup-fresh"), m = this.shadowRoot.getElementById("tab-setup-restore"), g = this.shadowRoot.getElementById("view-setup-fresh"), _ = this.shadowRoot.getElementById("view-setup-restore");
    u?.addEventListener("click", () => {
      u.style.background = "rgba(255,255,255,0.15)", u.style.color = "#fff", m.style.background = "transparent", m.style.color = "rgba(255,255,255,0.6)", g.style.display = "block", _.style.display = "none";
    }), m?.addEventListener("click", () => {
      m.style.background = "rgba(255,255,255,0.15)", m.style.color = "#fff", u.style.background = "transparent", u.style.color = "rgba(255,255,255,0.6)", _.style.display = "block", g.style.display = "none";
    }), this.shadowRoot.getElementById("skip-access-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-access-pin").value = "";
    }), this.shadowRoot.getElementById("skip-master-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-master-pin").value = "";
    }), this.shadowRoot.getElementById("btn-complete-setup")?.addEventListener("click", async () => {
      const k = this.shadowRoot.getElementById("setup-admin-name").value || i, z = this.shadowRoot.getElementById("setup-master-pin").value || void 0, R = this.shadowRoot.getElementById("setup-access-pin").value || void 0;
      try {
        await this._send("argus/complete_first_run", { admin_name: k, master_pin: z, access_pin: R }), c();
      } catch (P) {
        alert("Setup failed: " + P.message);
      }
    });
    const f = this.shadowRoot.getElementById("setup-restore-file"), y = this.shadowRoot.getElementById("restore-status");
    this.shadowRoot.getElementById("btn-trigger-restore")?.addEventListener("click", () => {
      f?.click();
    }), f?.addEventListener("change", (k) => {
      const z = k.target.files?.[0];
      if (!z) return;
      y && (y.textContent = "Procesando copia de seguridad...");
      const R = new FileReader();
      R.onload = async (P) => {
        try {
          let E = JSON.parse(P.target.result);
          if (E?.format === "argus-encrypted-backup") {
            const S = await this._showArgusInputModal({
              title: "Copia de seguridad cifrada",
              label: "Introduce la contraseña del backup:",
              type: "password"
            });
            if (!S) {
              y && (y.textContent = "Restauración cancelada.");
              return;
            }
            try {
              const h = this._base64ToBytes(E.salt), x = this._base64ToBytes(E.iv), b = await this._backupKey(S, h, ["decrypt"]), w = await crypto.subtle.decrypt({ name: "AES-GCM", iv: x }, b, this._base64ToBytes(E.data));
              E = JSON.parse(new TextDecoder().decode(w));
            } catch {
              throw new Error("Contraseña de copia de seguridad incorrecta.");
            }
          }
          if (typeof E != "object" || E === null)
            throw new Error(this._t("invalid_config"));
          await this._send("argus/restore_config", { config: E }), y && (y.textContent = "✅ Copia de seguridad restaurada con éxito."), c();
        } catch (E) {
          y && (y.textContent = "❌ Error al restaurar: " + (E.message || E));
        }
      }, R.onerror = () => {
        y && (y.textContent = "❌ Error al leer el archivo.");
      }, R.readAsText(z);
    });
  }
  _renderLegacyClaimScreen() {
    const n = this.shadowRoot.getElementById("bootstrap-overlay");
    n.style.display = "flex", n.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <h1>${this._t("claim_title") || "Argus Security Update"}</h1>
        <p>${this._t("claim_desc") || "Your installation needs an administrator to claim access."}</p>
        <button id="btn-claim-admin" class="btn-claim">${this._t("claim_btn") || "Claim Administration"}</button>
      </div>
    `, this.shadowRoot.getElementById("btn-claim-admin").addEventListener("click", async () => {
      try {
        await this._send("argus/claim_legacy_administration"), n.style.display = "none", this._profileSelectedThisMount = !0, this._load();
      } catch (i) {
        alert("Claim failed: " + i.message);
      }
    });
  }
  _renderLoginScreen(n) {
    const i = this.shadowRoot.getElementById("bootstrap-overlay");
    i.style.display = "flex";
    const a = n.users || [];
    n.ha_user_id;
    const l = a.map((z) => {
      const R = z.is_own_profile === !0, P = R ? `<div class="profile-own-badge">${this._escapeHtml(this._t("profile_is_yours"))}</div>` : "", E = z.access_pin_configured ? " 🔒" : "", S = z.role === "admin" ? this._escapeHtml(this._t("role_argus_admin")) : this._escapeHtml(this._t("role_argus_standard")), h = z.picture ? `<img src="${this._escapeHtml(z.picture)}" alt="${this._escapeHtml(z.name)}" style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.2);box-shadow:0 4px 12px rgba(0,0,0,0.3)"/>` : `<div class="user-avatar">${this._escapeHtml(z.name.substring(0, 2).toUpperCase())}</div>`, x = z.online !== !1 ? '<span title="Online / Conectado" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#34c759;box-shadow:0 0 8px #34c759;margin-right:5px"></span>' : '<span title="Offline / Ausente" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#ff9500;box-shadow:0 0 8px #ff9500;margin-right:5px"></span>', b = R ? this._t("profile_is_yours") : z.access_pin_configured ? this._t("profile_needs_pin") : this._t("profile_no_pin_access"), w = `${z.name}, ${S}, ${b}`;
      return `
        <div class="user-card${R ? " user-card-own" : ""}"
             data-user-id="${this._escapeHtml(z.id)}"
             data-is-own="${R ? "true" : "false"}"
             data-pin-required="${z.access_pin_configured ? "true" : "false"}"
             tabindex="0"
             role="button"
             aria-label="${this._escapeHtml(w)}">
          ${h}
          <div class="user-name" style="margin-top:6px;display:flex;align-items:center;justify-content:center">${x}${this._escapeHtml(z.name)}${E}</div>
          <div class="user-role-label">${S}</div>
          ${P}
          <a href="/config/person" target="_top" class="ha-person-link" style="font-size:10px;color:rgba(255,255,255,0.55);text-decoration:underline;margin-top:4px;display:inline-block" onclick="event.stopPropagation()">📷 Cambiar foto en HA ↗</a>
        </div>
      `;
    }).join("");
    i.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass" style="max-width:520px;width:92vw">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:4px">
          <img src="/api/argus_static/argus_logo.png" alt="Argus" style="height:36px;border-radius:8px;flex-shrink:0">
          <div>
            <h1 style="margin:0;font-size:1.35rem;font-weight:900">${this._escapeHtml(this._t("select_profile_title"))}</h1>
            <p style="margin:4px 0 0;font-size:0.82rem;opacity:0.65">${this._escapeHtml(this._t("select_profile_subtitle"))}</p>
          </div>
        </div>
        <div class="user-selector-grid" style="margin-top:18px">
          ${l}
        </div>
        <button id="btn-exit-to-ha" class="btn-cancel"
                style="margin:18px 0 0;width:100%">
          ← ${this._escapeHtml(this._t("exit_to_ha"))}
        </button>
        <div id="pin-prompt" class="pin-prompt" style="display:none;margin-top:16px;animation:fadeIn .25s ease">
          <div id="pin-prompt-label" style="font-size:13px;opacity:0.85;margin-bottom:8px;text-align:center;font-weight:600"></div>
          <input type="password" id="login-pin-input" placeholder="${this._escapeHtml(this._t("pin_placeholder"))}" inputmode="numeric" pattern="[0-9]*" readonly
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
            <button id="btn-cancel-login" class="btn-cancel" style="width:100%">${this._escapeHtml(this._t("cancel_btn"))}</button>
          </div>
          <div id="login-pin-error" style="color:#ff453a;font-size:12px;min-height:18px;text-align:center;margin-top:6px"></div>
        </div>
      </div>
    `;
    const c = this.shadowRoot.getElementById("pin-prompt"), u = this.shadowRoot.getElementById("login-pin-input"), m = this.shadowRoot.getElementById("pin-prompt-label"), g = this.shadowRoot.getElementById("login-pin-error"), _ = this.shadowRoot.querySelector(".user-selector-grid");
    let f = null;
    this.shadowRoot.getElementById("btn-exit-to-ha")?.addEventListener("click", () => {
      window.location.assign("/");
    }), this.shadowRoot.querySelectorAll("[data-login-digit]").forEach((z) => {
      z.addEventListener("click", () => {
        u && u.value.length < 8 && (u.value += z.getAttribute("data-login-digit"));
      });
    }), this.shadowRoot.getElementById("btn-login-pin-backspace")?.addEventListener("click", () => {
      u && (u.value = u.value.slice(0, -1));
    });
    const y = () => {
      f = null, u && (u.value = ""), g && (g.textContent = ""), c && (c.style.display = "none"), _ && (_.style.display = "grid");
    }, k = (z) => {
      m && (m.textContent = z), g && (g.textContent = ""), c && (c.style.display = "block"), _ && (_.style.display = "none"), u && (u.value = "");
    };
    this.shadowRoot.querySelectorAll(".user-card").forEach((z) => {
      z.addEventListener("click", async () => {
        const R = z.getAttribute("data-user-id"), P = z.getAttribute("data-is-own") === "true", E = z.getAttribute("data-pin-required") === "true";
        if (P)
          if (E)
            f = R, k(this._t("profile_needs_pin"));
          else
            try {
              await this._send("argus/select_profile", { argus_user_id: R }), i.style.display = "none", this._profileSelectedThisMount = !0, this._load();
            } catch (S) {
              g && (g.textContent = S.message || "❌");
            }
        else {
          if (!E) {
            g && (g.textContent = this._t("profile_no_pin_access"), g.style.display = "block"), z.style.animation = "none", z.offsetWidth, z.style.animation = "shake .3s ease";
            return;
          }
          f = R, k(this._t("profile_needs_pin"));
        }
      }), z.addEventListener("keydown", (R) => {
        (R.key === "Enter" || R.key === " " || R.code === "Space") && z.click();
      });
    }), this.shadowRoot.getElementById("btn-cancel-login").addEventListener("click", y), this.shadowRoot.getElementById("btn-submit-login-pin").addEventListener("click", async () => {
      if (!(!f || !u.value)) {
        g && (g.textContent = "");
        try {
          await this._send("argus/verify_access_pin", { argus_user_id: f, pin: u.value }), i.style.display = "none", this._profileSelectedThisMount = !0, this._load();
        } catch (z) {
          g && (g.textContent = "❌ " + (z.message || "Error")), u && (u.value = "", u.focus());
        }
      }
    }), u && u.addEventListener("keydown", (z) => {
      z.key === "Enter" && this.shadowRoot.getElementById("btn-submit-login-pin").click();
    });
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
    const n = this.shadowRoot.getElementById("widget-grid");
    if (!n) return;
    const i = Array.from(n.children).filter(
      (a) => a.classList.contains("panel") && !a.classList.contains("dashboard-instances")
    );
    i.forEach((a) => {
      const l = a.id.replace("w-", "");
      if (!a.querySelector(".panel-edit-overlay")) {
        const c = document.createElement("div");
        c.className = "panel-edit-overlay";
        const u = document.createElement("div");
        u.className = "widget-controls";
        const m = document.createElement("div");
        m.className = "widget-controls-title";
        const g = a.querySelector("h2")?.textContent;
        m.textContent = g ? `Widget: ${g}` : `Widget: ${l.toUpperCase()}`, u.appendChild(m);
        const _ = document.createElement("div");
        _.className = "widget-drag-handle", _.innerHTML = "⋮⋮ Arrastrar", _.title = "Arrastrar para mover";
        const f = document.createElement("div");
        f.className = "widget-sizes", ["S", "M", "L", "XL"].forEach((k) => {
          const z = document.createElement("button");
          z.className = "widget-size-btn", z.textContent = k, z.dataset.size = k, z.addEventListener("click", (R) => {
            R.stopPropagation(), R.preventDefault(), this._changeWidgetSize(l, k);
          }), f.appendChild(z);
        });
        const y = document.createElement("button");
        y.className = "widget-toggle-btn", y.textContent = "Ocultar", y.addEventListener("click", (k) => {
          k.stopPropagation(), k.preventDefault(), this._toggleWidgetVisibility(l);
        }), u.appendChild(_), u.appendChild(f), u.appendChild(y), c.appendChild(u), a.appendChild(c);
      }
    }), this._renderWidgetLayout(), this._bindWidgetDragEvents(i);
  }
  _renderWidgetLayout() {
    const n = this.shadowRoot.getElementById("widget-grid");
    if (!n) return;
    const i = new Map((this._widgetConfig || []).map((l, c) => [l.id, { ...l, idx: c }])), a = Array.from(n.children).filter(
      (l) => l.classList.contains("panel") && !l.classList.contains("dashboard-instances")
    );
    a.sort((l, c) => {
      const u = i.get(l.id.replace("w-", "")) || { idx: 99 }, m = i.get(c.id.replace("w-", "")) || { idx: 99 };
      return u.idx - m.idx;
    }), a.forEach((l) => {
      n.appendChild(l);
      const c = l.id.replace("w-", ""), u = i.get(c);
      if (u) {
        l.setAttribute("data-size", u.size), l.style.display = u.hidden ? "none" : "";
        const m = l.querySelector(".panel-edit-overlay");
        if (m) {
          m.querySelectorAll(".widget-size-btn").forEach((_) => {
            _.classList.toggle("active", _.dataset.size === u.size);
          });
          const g = m.querySelector(".widget-toggle-btn");
          g && (g.textContent = u.hidden ? "Mostrar" : "Ocultar", g.style.background = u.hidden ? "rgba(52,199,89,.85)" : "rgba(220,38,38,.85)");
        }
      }
    }), n.classList.toggle("editing", !!this._widgetEditing);
  }
  _bindWidgetDragEvents(n) {
    const i = this.shadowRoot.getElementById("widget-grid");
    if (!i) return;
    (n || Array.from(i.children).filter(
      (l) => l.classList.contains("panel") && !l.classList.contains("dashboard-instances")
    )).forEach((l) => {
      l._dragBound || (l._dragBound = !0, l.addEventListener("dragstart", (c) => {
        if (!this._widgetEditing) {
          c.preventDefault();
          return;
        }
        l.classList.add("dragging"), c.dataTransfer.setData("text/plain", l.id), c.dataTransfer.effectAllowed = "move";
      }), l.addEventListener("dragend", () => {
        l.classList.remove("dragging"), this._saveWidgetLayout();
      }), l.addEventListener("dragover", (c) => {
        if (!this._widgetEditing) return;
        c.preventDefault();
        const u = i.querySelector(".dragging");
        if (!u || u === l) return;
        const m = l.getBoundingClientRect();
        c.clientY - m.top > m.height / 2 ? l.after(u) : l.before(u);
      }));
    });
  }
  _saveWidgetLayout() {
    const n = this.shadowRoot.getElementById("widget-grid");
    if (!n) return;
    const i = Array.from(n.children).filter(
      (a) => a.classList.contains("panel") && !a.classList.contains("dashboard-instances")
    );
    this._widgetConfig = i.map((a) => ({
      id: a.id.replace("w-", ""),
      size: a.getAttribute("data-size") || "M",
      hidden: a.style.display === "none"
    }));
    try {
      localStorage.setItem("argus-widgets-v1", JSON.stringify(this._widgetConfig));
    } catch {
    }
  }
  _toggleWidgetEditing() {
    this._widgetEditing = !this._widgetEditing, this.shadowRoot.getElementById("widget-grid") && (this._initWidgetGrid(), this._renderWidgetLayout()), this._applyTranslations();
  }
  _changeWidgetSize(n, i) {
    const a = (this._widgetConfig || []).find((l) => l.id === n);
    a && (a.size = i, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
  _toggleWidgetVisibility(n) {
    const i = (this._widgetConfig || []).find((a) => a.id === n);
    i && (i.hidden = !i.hidden, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
}
customElements.define("argus-panel-v2018", Yg);
function Kg(o) {
  if (o.__esModule) return o;
  var n = o.default;
  if (typeof n == "function") {
    var i = function a() {
      return this instanceof a ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    i.prototype = n.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(o).forEach(function(a) {
    var l = Object.getOwnPropertyDescriptor(o, a);
    Object.defineProperty(i, a, l.get ? l : {
      enumerable: !0,
      get: function() {
        return o[a];
      }
    });
  }), i;
}
var Gs = { exports: {} }, ci = {}, Ys = { exports: {} }, Oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gu;
function Xg() {
  if (gu) return Oe;
  gu = 1;
  var o = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), y = Symbol.iterator;
  function k(T) {
    return T === null || typeof T != "object" ? null : (T = y && T[y] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, R = Object.assign, P = {};
  function E(T, U, ve) {
    this.props = T, this.context = U, this.refs = P, this.updater = ve || z;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(T, U) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, U, "setState");
  }, E.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function S() {
  }
  S.prototype = E.prototype;
  function h(T, U, ve) {
    this.props = T, this.context = U, this.refs = P, this.updater = ve || z;
  }
  var x = h.prototype = new S();
  x.constructor = h, R(x, E.prototype), x.isPureReactComponent = !0;
  var b = Array.isArray, w = Object.prototype.hasOwnProperty, A = { current: null }, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(T, U, ve) {
    var we, Ae = {}, Ie = null, Me = null;
    if (U != null) for (we in U.ref !== void 0 && (Me = U.ref), U.key !== void 0 && (Ie = "" + U.key), U) w.call(U, we) && !O.hasOwnProperty(we) && (Ae[we] = U[we]);
    var K = arguments.length - 2;
    if (K === 1) Ae.children = ve;
    else if (1 < K) {
      for (var le = Array(K), _e = 0; _e < K; _e++) le[_e] = arguments[_e + 2];
      Ae.children = le;
    }
    if (T && T.defaultProps) for (we in K = T.defaultProps, K) Ae[we] === void 0 && (Ae[we] = K[we]);
    return { $$typeof: o, type: T, key: Ie, ref: Me, props: Ae, _owner: A.current };
  }
  function W(T, U) {
    return { $$typeof: o, type: T.type, key: U, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Z(T) {
    return typeof T == "object" && T !== null && T.$$typeof === o;
  }
  function ce(T) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ve) {
      return U[ve];
    });
  }
  var ae = /\/+/g;
  function ie(T, U) {
    return typeof T == "object" && T !== null && T.key != null ? ce("" + T.key) : U.toString(36);
  }
  function pe(T, U, ve, we, Ae) {
    var Ie = typeof T;
    (Ie === "undefined" || Ie === "boolean") && (T = null);
    var Me = !1;
    if (T === null) Me = !0;
    else switch (Ie) {
      case "string":
      case "number":
        Me = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case o:
          case n:
            Me = !0;
        }
    }
    if (Me) return Me = T, Ae = Ae(Me), T = we === "" ? "." + ie(Me, 0) : we, b(Ae) ? (ve = "", T != null && (ve = T.replace(ae, "$&/") + "/"), pe(Ae, U, ve, "", function(_e) {
      return _e;
    })) : Ae != null && (Z(Ae) && (Ae = W(Ae, ve + (!Ae.key || Me && Me.key === Ae.key ? "" : ("" + Ae.key).replace(ae, "$&/") + "/") + T)), U.push(Ae)), 1;
    if (Me = 0, we = we === "" ? "." : we + ":", b(T)) for (var K = 0; K < T.length; K++) {
      Ie = T[K];
      var le = we + ie(Ie, K);
      Me += pe(Ie, U, ve, le, Ae);
    }
    else if (le = k(T), typeof le == "function") for (T = le.call(T), K = 0; !(Ie = T.next()).done; ) Ie = Ie.value, le = we + ie(Ie, K++), Me += pe(Ie, U, ve, le, Ae);
    else if (Ie === "object") throw U = String(T), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
    return Me;
  }
  function Y(T, U, ve) {
    if (T == null) return T;
    var we = [], Ae = 0;
    return pe(T, we, "", "", function(Ie) {
      return U.call(ve, Ie, Ae++);
    }), we;
  }
  function ee(T) {
    if (T._status === -1) {
      var U = T._result;
      U = U(), U.then(function(ve) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ve);
      }, function(ve) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ve);
      }), T._status === -1 && (T._status = 0, T._result = U);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var J = { current: null }, V = { transition: null }, de = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: V, ReactCurrentOwner: A };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Oe.Children = { map: Y, forEach: function(T, U, ve) {
    Y(T, function() {
      U.apply(this, arguments);
    }, ve);
  }, count: function(T) {
    var U = 0;
    return Y(T, function() {
      U++;
    }), U;
  }, toArray: function(T) {
    return Y(T, function(U) {
      return U;
    }) || [];
  }, only: function(T) {
    if (!Z(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Oe.Component = E, Oe.Fragment = i, Oe.Profiler = l, Oe.PureComponent = h, Oe.StrictMode = a, Oe.Suspense = g, Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de, Oe.act = ne, Oe.cloneElement = function(T, U, ve) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var we = R({}, T.props), Ae = T.key, Ie = T.ref, Me = T._owner;
    if (U != null) {
      if (U.ref !== void 0 && (Ie = U.ref, Me = A.current), U.key !== void 0 && (Ae = "" + U.key), T.type && T.type.defaultProps) var K = T.type.defaultProps;
      for (le in U) w.call(U, le) && !O.hasOwnProperty(le) && (we[le] = U[le] === void 0 && K !== void 0 ? K[le] : U[le]);
    }
    var le = arguments.length - 2;
    if (le === 1) we.children = ve;
    else if (1 < le) {
      K = Array(le);
      for (var _e = 0; _e < le; _e++) K[_e] = arguments[_e + 2];
      we.children = K;
    }
    return { $$typeof: o, type: T.type, key: Ae, ref: Ie, props: we, _owner: Me };
  }, Oe.createContext = function(T) {
    return T = { $$typeof: u, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: c, _context: T }, T.Consumer = T;
  }, Oe.createElement = H, Oe.createFactory = function(T) {
    var U = H.bind(null, T);
    return U.type = T, U;
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(T) {
    return { $$typeof: m, render: T };
  }, Oe.isValidElement = Z, Oe.lazy = function(T) {
    return { $$typeof: f, _payload: { _status: -1, _result: T }, _init: ee };
  }, Oe.memo = function(T, U) {
    return { $$typeof: _, type: T, compare: U === void 0 ? null : U };
  }, Oe.startTransition = function(T) {
    var U = V.transition;
    V.transition = {};
    try {
      T();
    } finally {
      V.transition = U;
    }
  }, Oe.unstable_act = ne, Oe.useCallback = function(T, U) {
    return J.current.useCallback(T, U);
  }, Oe.useContext = function(T) {
    return J.current.useContext(T);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(T) {
    return J.current.useDeferredValue(T);
  }, Oe.useEffect = function(T, U) {
    return J.current.useEffect(T, U);
  }, Oe.useId = function() {
    return J.current.useId();
  }, Oe.useImperativeHandle = function(T, U, ve) {
    return J.current.useImperativeHandle(T, U, ve);
  }, Oe.useInsertionEffect = function(T, U) {
    return J.current.useInsertionEffect(T, U);
  }, Oe.useLayoutEffect = function(T, U) {
    return J.current.useLayoutEffect(T, U);
  }, Oe.useMemo = function(T, U) {
    return J.current.useMemo(T, U);
  }, Oe.useReducer = function(T, U, ve) {
    return J.current.useReducer(T, U, ve);
  }, Oe.useRef = function(T) {
    return J.current.useRef(T);
  }, Oe.useState = function(T) {
    return J.current.useState(T);
  }, Oe.useSyncExternalStore = function(T, U, ve) {
    return J.current.useSyncExternalStore(T, U, ve);
  }, Oe.useTransition = function() {
    return J.current.useTransition();
  }, Oe.version = "18.3.1", Oe;
}
var fu;
function zt() {
  return fu || (fu = 1, Ys.exports = Xg()), Ys.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hu;
function Qg() {
  if (hu) return ci;
  hu = 1;
  var o = zt(), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, g, _) {
    var f, y = {}, k = null, z = null;
    _ !== void 0 && (k = "" + _), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (z = g.ref);
    for (f in g) a.call(g, f) && !c.hasOwnProperty(f) && (y[f] = g[f]);
    if (m && m.defaultProps) for (f in g = m.defaultProps, g) y[f] === void 0 && (y[f] = g[f]);
    return { $$typeof: n, type: m, key: k, ref: z, props: y, _owner: l.current };
  }
  return ci.Fragment = i, ci.jsx = u, ci.jsxs = u, ci;
}
var _u;
function Jg() {
  return _u || (_u = 1, Gs.exports = Qg()), Gs.exports;
}
var Ve = Jg(), Bo = {}, Ks = { exports: {} }, Ct = {}, Xs = { exports: {} }, Qs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bu;
function Zg() {
  return bu || (bu = 1, function(o) {
    function n(V, de) {
      var ne = V.length;
      V.push(de);
      e: for (; 0 < ne; ) {
        var T = ne - 1 >>> 1, U = V[T];
        if (0 < l(U, de)) V[T] = de, V[ne] = U, ne = T;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function a(V) {
      if (V.length === 0) return null;
      var de = V[0], ne = V.pop();
      if (ne !== de) {
        V[0] = ne;
        e: for (var T = 0, U = V.length, ve = U >>> 1; T < ve; ) {
          var we = 2 * (T + 1) - 1, Ae = V[we], Ie = we + 1, Me = V[Ie];
          if (0 > l(Ae, ne)) Ie < U && 0 > l(Me, Ae) ? (V[T] = Me, V[Ie] = ne, T = Ie) : (V[T] = Ae, V[we] = ne, T = we);
          else if (Ie < U && 0 > l(Me, ne)) V[T] = Me, V[Ie] = ne, T = Ie;
          else break e;
        }
      }
      return de;
    }
    function l(V, de) {
      var ne = V.sortIndex - de.sortIndex;
      return ne !== 0 ? ne : V.id - de.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      o.unstable_now = function() {
        return c.now();
      };
    } else {
      var u = Date, m = u.now();
      o.unstable_now = function() {
        return u.now() - m;
      };
    }
    var g = [], _ = [], f = 1, y = null, k = 3, z = !1, R = !1, P = !1, E = typeof setTimeout == "function" ? setTimeout : null, S = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(V) {
      for (var de = i(_); de !== null; ) {
        if (de.callback === null) a(_);
        else if (de.startTime <= V) a(_), de.sortIndex = de.expirationTime, n(g, de);
        else break;
        de = i(_);
      }
    }
    function b(V) {
      if (P = !1, x(V), !R) if (i(g) !== null) R = !0, ee(w);
      else {
        var de = i(_);
        de !== null && J(b, de.startTime - V);
      }
    }
    function w(V, de) {
      R = !1, P && (P = !1, S(H), H = -1), z = !0;
      var ne = k;
      try {
        for (x(de), y = i(g); y !== null && (!(y.expirationTime > de) || V && !ce()); ) {
          var T = y.callback;
          if (typeof T == "function") {
            y.callback = null, k = y.priorityLevel;
            var U = T(y.expirationTime <= de);
            de = o.unstable_now(), typeof U == "function" ? y.callback = U : y === i(g) && a(g), x(de);
          } else a(g);
          y = i(g);
        }
        if (y !== null) var ve = !0;
        else {
          var we = i(_);
          we !== null && J(b, we.startTime - de), ve = !1;
        }
        return ve;
      } finally {
        y = null, k = ne, z = !1;
      }
    }
    var A = !1, O = null, H = -1, W = 5, Z = -1;
    function ce() {
      return !(o.unstable_now() - Z < W);
    }
    function ae() {
      if (O !== null) {
        var V = o.unstable_now();
        Z = V;
        var de = !0;
        try {
          de = O(!0, V);
        } finally {
          de ? ie() : (A = !1, O = null);
        }
      } else A = !1;
    }
    var ie;
    if (typeof h == "function") ie = function() {
      h(ae);
    };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), Y = pe.port2;
      pe.port1.onmessage = ae, ie = function() {
        Y.postMessage(null);
      };
    } else ie = function() {
      E(ae, 0);
    };
    function ee(V) {
      O = V, A || (A = !0, ie());
    }
    function J(V, de) {
      H = E(function() {
        V(o.unstable_now());
      }, de);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, o.unstable_continueExecution = function() {
      R || z || (R = !0, ee(w));
    }, o.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < V ? Math.floor(1e3 / V) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, o.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, o.unstable_next = function(V) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = k;
      }
      var ne = k;
      k = de;
      try {
        return V();
      } finally {
        k = ne;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(V, de) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var ne = k;
      k = V;
      try {
        return de();
      } finally {
        k = ne;
      }
    }, o.unstable_scheduleCallback = function(V, de, ne) {
      var T = o.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? T + ne : T) : ne = T, V) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return U = ne + U, V = { id: f++, callback: de, priorityLevel: V, startTime: ne, expirationTime: U, sortIndex: -1 }, ne > T ? (V.sortIndex = ne, n(_, V), i(g) === null && V === i(_) && (P ? (S(H), H = -1) : P = !0, J(b, ne - T))) : (V.sortIndex = U, n(g, V), R || z || (R = !0, ee(w))), V;
    }, o.unstable_shouldYield = ce, o.unstable_wrapCallback = function(V) {
      var de = k;
      return function() {
        var ne = k;
        k = de;
        try {
          return V.apply(this, arguments);
        } finally {
          k = ne;
        }
      };
    };
  }(Qs)), Qs;
}
var yu;
function ef() {
  return yu || (yu = 1, Xs.exports = Zg()), Xs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vu;
function tf() {
  if (vu) return Ct;
  vu = 1;
  var o = zt(), n = ef();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), l = {};
  function c(e, t) {
    u(e, t), u(e + "Capture", t);
  }
  function u(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f = {}, y = {};
  function k(e) {
    return g.call(y, e) ? !0 : g.call(f, e) ? !1 : _.test(e) ? y[e] = !0 : (f[e] = !0, !1);
  }
  function z(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, r, s) {
    if (t === null || typeof t > "u" || z(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null) switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function P(e, t, r, s, d, p, v) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = d, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = v;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new P(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new P(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new P(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new P(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new P(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new P(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function h(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      S,
      h
    );
    E[t] = new P(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(S, h);
    E[t] = new P(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(S, h);
    E[t] = new P(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function x(e, t, r, s) {
    var d = E.hasOwnProperty(t) ? E[t] : null;
    (d !== null ? d.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R(t, r, d, s) && (r = null), s || d === null ? k(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : d.mustUseProperty ? e[d.propertyName] = r === null ? d.type === 3 ? !1 : "" : r : (t = d.attributeName, s = d.attributeNamespace, r === null ? e.removeAttribute(t) : (d = d.type, r = d === 3 || d === 4 && r === !0 ? "" : "" + r, s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var b = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, w = Symbol.for("react.element"), A = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), ce = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ne = Object.assign, T;
  function U(e) {
    if (T === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      T = t && t[1] || "";
    }
    return `
` + T + e;
  }
  var ve = !1;
  function we(e, t) {
    if (!e || ve) return "";
    ve = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (F) {
          var s = F;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (F) {
          s = F;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (F) {
          s = F;
        }
        e();
      }
    } catch (F) {
      if (F && s && typeof F.stack == "string") {
        for (var d = F.stack.split(`
`), p = s.stack.split(`
`), v = d.length - 1, C = p.length - 1; 1 <= v && 0 <= C && d[v] !== p[C]; ) C--;
        for (; 1 <= v && 0 <= C; v--, C--) if (d[v] !== p[C]) {
          if (v !== 1 || C !== 1)
            do
              if (v--, C--, 0 > C || d[v] !== p[C]) {
                var L = `
` + d[v].replace(" at new ", " at ");
                return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), L;
              }
            while (1 <= v && 0 <= C);
          break;
        }
      }
    } finally {
      ve = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? U(e) : "";
  }
  function Ae(e) {
    switch (e.tag) {
      case 5:
        return U(e.type);
      case 16:
        return U("Lazy");
      case 13:
        return U("Suspense");
      case 19:
        return U("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = we(e.type, !1), e;
      case 11:
        return e = we(e.type.render, !1), e;
      case 1:
        return e = we(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case A:
        return "Portal";
      case W:
        return "Profiler";
      case H:
        return "StrictMode";
      case ie:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ce:
        return (e.displayName || "Context") + ".Consumer";
      case Z:
        return (e._context.displayName || "Context") + ".Provider";
      case ae:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Y:
        return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
      case ee:
        t = e._payload, e = e._init;
        try {
          return Ie(e(t));
        } catch {
        }
    }
    return null;
  }
  function Me(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ie(t);
      case 8:
        return t === H ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function K(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function le(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function _e(e) {
    var t = le(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var d = r.get, p = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(v) {
        s = "" + v, p.call(this, v);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(v) {
        s = "" + v;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ze(e) {
    e._valueTracker || (e._valueTracker = _e(e));
  }
  function Re(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), s = "";
    return e && (s = le(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Te(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function je(e, t) {
    var r = t.checked;
    return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Xe(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    r = K(t.value != null ? t.value : r), e._wrapperState = { initialChecked: s, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function N(e, t) {
    t = t.checked, t != null && x(e, "checked", t, !1);
  }
  function B(e, t) {
    N(e, t);
    var r = K(t.value), s = t.type;
    if (r != null) s === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? X(e, t.type, r) : t.hasOwnProperty("defaultValue") && X(e, t.type, K(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function D(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function X(e, t, r) {
    (t !== "number" || Te(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var ue = Array.isArray;
  function ye(e, t, r, s) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < r.length; d++) t["$" + r[d]] = !0;
      for (r = 0; r < e.length; r++) d = t.hasOwnProperty("$" + e[r].value), e[r].selected !== d && (e[r].selected = d), d && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + K(r), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === r) {
          e[d].selected = !0, s && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ee(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Pe(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(i(92));
        if (ue(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: K(r) };
  }
  function Le(e, t) {
    var r = K(t.value), s = K(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), s != null && (e.defaultValue = "" + s);
  }
  function We(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Qe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var I, j = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, s, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, s, d);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (I = I || document.createElement("div"), I.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = I.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function G(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(e) {
    me.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), oe[t] = oe[e];
    });
  });
  function Be(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || oe.hasOwnProperty(e) && oe[e] ? ("" + t).trim() : t + "px";
  }
  function He(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0, d = Be(r, t[r], s);
      r === "float" && (r = "cssFloat"), s ? e.setProperty(r, d) : e[r] = d;
    }
  }
  var Je = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pt(e, t) {
    if (t) {
      if (Je[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function $t(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yt = null;
  function Ln(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xn = null, On = null, en = null;
  function Ar(e) {
    if (e = Kr(e)) {
      if (typeof Xn != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Qi(t), Xn(e.stateNode, e.type, t));
    }
  }
  function Cr(e) {
    On ? en ? en.push(e) : en = [e] : On = e;
  }
  function Qn() {
    if (On) {
      var e = On, t = en;
      if (en = On = null, Ar(e), t) for (e = 0; e < t.length; e++) Ar(t[e]);
    }
  }
  function zi(e, t) {
    return e(t);
  }
  function Tl() {
  }
  var da = !1;
  function Ml(e, t, r) {
    if (da) return e(t, r);
    da = !0;
    try {
      return zi(e, t, r);
    } finally {
      da = !1, (On !== null || en !== null) && (Tl(), Qn());
    }
  }
  function zr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = Qi(r);
    if (s === null) return null;
    r = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var ca = !1;
  if (m) try {
    var Ir = {};
    Object.defineProperty(Ir, "passive", { get: function() {
      ca = !0;
    } }), window.addEventListener("test", Ir, Ir), window.removeEventListener("test", Ir, Ir);
  } catch {
    ca = !1;
  }
  function Xp(e, t, r, s, d, p, v, C, L) {
    var F = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, F);
    } catch (te) {
      this.onError(te);
    }
  }
  var Pr = !1, Ii = null, Pi = !1, ua = null, Qp = { onError: function(e) {
    Pr = !0, Ii = e;
  } };
  function Jp(e, t, r, s, d, p, v, C, L) {
    Pr = !1, Ii = null, Xp.apply(Qp, arguments);
  }
  function Zp(e, t, r, s, d, p, v, C, L) {
    if (Jp.apply(this, arguments), Pr) {
      if (Pr) {
        var F = Ii;
        Pr = !1, Ii = null;
      } else throw Error(i(198));
      Pi || (Pi = !0, ua = F);
    }
  }
  function Tn(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Bl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Hl(e) {
    if (Tn(e) !== e) throw Error(i(188));
  }
  function em(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var d = r.return;
      if (d === null) break;
      var p = d.alternate;
      if (p === null) {
        if (s = d.return, s !== null) {
          r = s;
          continue;
        }
        break;
      }
      if (d.child === p.child) {
        for (p = d.child; p; ) {
          if (p === r) return Hl(d), e;
          if (p === s) return Hl(d), t;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== s.return) r = d, s = p;
      else {
        for (var v = !1, C = d.child; C; ) {
          if (C === r) {
            v = !0, r = d, s = p;
            break;
          }
          if (C === s) {
            v = !0, s = d, r = p;
            break;
          }
          C = C.sibling;
        }
        if (!v) {
          for (C = p.child; C; ) {
            if (C === r) {
              v = !0, r = p, s = d;
              break;
            }
            if (C === s) {
              v = !0, s = p, r = d;
              break;
            }
            C = C.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (r.alternate !== s) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function Dl(e) {
    return e = em(e), e !== null ? $l(e) : null;
  }
  function $l(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = $l(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var jl = n.unstable_scheduleCallback, ql = n.unstable_cancelCallback, tm = n.unstable_shouldYield, nm = n.unstable_requestPaint, rt = n.unstable_now, rm = n.unstable_getCurrentPriorityLevel, pa = n.unstable_ImmediatePriority, Fl = n.unstable_UserBlockingPriority, Ri = n.unstable_NormalPriority, im = n.unstable_LowPriority, Ul = n.unstable_IdlePriority, Ni = null, Kt = null;
  function om(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function") try {
      Kt.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var jt = Math.clz32 ? Math.clz32 : lm, am = Math.log, sm = Math.LN2;
  function lm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (am(e) / sm | 0) | 0;
  }
  var Li = 64, Oi = 4194304;
  function Rr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ti(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, d = e.suspendedLanes, p = e.pingedLanes, v = r & 268435455;
    if (v !== 0) {
      var C = v & ~d;
      C !== 0 ? s = Rr(C) : (p &= v, p !== 0 && (s = Rr(p)));
    } else v = r & ~d, v !== 0 ? s = Rr(v) : p !== 0 && (s = Rr(p));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && !(t & d) && (d = s & -s, p = t & -t, d >= p || d === 16 && (p & 4194240) !== 0)) return t;
    if (s & 4 && (s |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) r = 31 - jt(t), d = 1 << r, s |= e[r], t &= ~d;
    return s;
  }
  function dm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cm(e, t) {
    for (var r = e.suspendedLanes, s = e.pingedLanes, d = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var v = 31 - jt(p), C = 1 << v, L = d[v];
      L === -1 ? (!(C & r) || C & s) && (d[v] = dm(C, t)) : L <= t && (e.expiredLanes |= C), p &= ~C;
    }
  }
  function ma(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Wl() {
    var e = Li;
    return Li <<= 1, !(Li & 4194240) && (Li = 64), e;
  }
  function ga(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Nr(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = r;
  }
  function um(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var d = 31 - jt(r), p = 1 << d;
      t[d] = 0, s[d] = -1, e[d] = -1, r &= ~p;
    }
  }
  function fa(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var s = 31 - jt(r), d = 1 << s;
      d & t | e[s] & t && (e[s] |= t), r &= ~d;
    }
  }
  var Ue = 0;
  function Vl(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Gl, ha, Yl, Kl, Xl, _a = !1, Mi = [], mn = null, gn = null, fn = null, Lr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), hn = [], pm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ql(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Lr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Or.delete(t.pointerId);
    }
  }
  function Tr(e, t, r, s, d, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: s, nativeEvent: p, targetContainers: [d] }, t !== null && (t = Kr(t), t !== null && ha(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function mm(e, t, r, s, d) {
    switch (t) {
      case "focusin":
        return mn = Tr(mn, e, t, r, s, d), !0;
      case "dragenter":
        return gn = Tr(gn, e, t, r, s, d), !0;
      case "mouseover":
        return fn = Tr(fn, e, t, r, s, d), !0;
      case "pointerover":
        var p = d.pointerId;
        return Lr.set(p, Tr(Lr.get(p) || null, e, t, r, s, d)), !0;
      case "gotpointercapture":
        return p = d.pointerId, Or.set(p, Tr(Or.get(p) || null, e, t, r, s, d)), !0;
    }
    return !1;
  }
  function Jl(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var r = Tn(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = Bl(r), t !== null) {
            e.blockedOn = t, Xl(e.priority, function() {
              Yl(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Bi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = ya(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        Yt = s, r.target.dispatchEvent(s), Yt = null;
      } else return t = Kr(r), t !== null && ha(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function Zl(e, t, r) {
    Bi(e) && r.delete(t);
  }
  function gm() {
    _a = !1, mn !== null && Bi(mn) && (mn = null), gn !== null && Bi(gn) && (gn = null), fn !== null && Bi(fn) && (fn = null), Lr.forEach(Zl), Or.forEach(Zl);
  }
  function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _a || (_a = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, gm)));
  }
  function Br(e) {
    function t(d) {
      return Mr(d, e);
    }
    if (0 < Mi.length) {
      Mr(Mi[0], e);
      for (var r = 1; r < Mi.length; r++) {
        var s = Mi[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (mn !== null && Mr(mn, e), gn !== null && Mr(gn, e), fn !== null && Mr(fn, e), Lr.forEach(t), Or.forEach(t), r = 0; r < hn.length; r++) s = hn[r], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < hn.length && (r = hn[0], r.blockedOn === null); ) Jl(r), r.blockedOn === null && hn.shift();
  }
  var Jn = b.ReactCurrentBatchConfig, Hi = !0;
  function fm(e, t, r, s) {
    var d = Ue, p = Jn.transition;
    Jn.transition = null;
    try {
      Ue = 1, ba(e, t, r, s);
    } finally {
      Ue = d, Jn.transition = p;
    }
  }
  function hm(e, t, r, s) {
    var d = Ue, p = Jn.transition;
    Jn.transition = null;
    try {
      Ue = 4, ba(e, t, r, s);
    } finally {
      Ue = d, Jn.transition = p;
    }
  }
  function ba(e, t, r, s) {
    if (Hi) {
      var d = ya(e, t, r, s);
      if (d === null) Ma(e, t, s, Di, r), Ql(e, s);
      else if (mm(d, e, t, r, s)) s.stopPropagation();
      else if (Ql(e, s), t & 4 && -1 < pm.indexOf(e)) {
        for (; d !== null; ) {
          var p = Kr(d);
          if (p !== null && Gl(p), p = ya(e, t, r, s), p === null && Ma(e, t, s, Di, r), p === d) break;
          d = p;
        }
        d !== null && s.stopPropagation();
      } else Ma(e, t, s, null, r);
    }
  }
  var Di = null;
  function ya(e, t, r, s) {
    if (Di = null, e = Ln(s), e = Mn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = Bl(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Di = e, null;
  }
  function ed(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rm()) {
          case pa:
            return 1;
          case Fl:
            return 4;
          case Ri:
          case im:
            return 16;
          case Ul:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var _n = null, va = null, $i = null;
  function td() {
    if ($i) return $i;
    var e, t = va, r = t.length, s, d = "value" in _n ? _n.value : _n.textContent, p = d.length;
    for (e = 0; e < r && t[e] === d[e]; e++) ;
    var v = r - e;
    for (s = 1; s <= v && t[r - s] === d[p - s]; s++) ;
    return $i = d.slice(e, 1 < s ? 1 - s : void 0);
  }
  function ji(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qi() {
    return !0;
  }
  function nd() {
    return !1;
  }
  function It(e) {
    function t(r, s, d, p, v) {
      this._reactName = r, this._targetInst = d, this.type = s, this.nativeEvent = p, this.target = v, this.currentTarget = null;
      for (var C in e) e.hasOwnProperty(C) && (r = e[C], this[C] = r ? r(p) : p[C]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? qi : nd, this.isPropagationStopped = nd, this;
    }
    return ne(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = qi);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = qi);
    }, persist: function() {
    }, isPersistent: qi }), t;
  }
  var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xa = It(Zn), Hr = ne({}, Zn, { view: 0, detail: 0 }), _m = It(Hr), wa, ka, Dr, Fi = ne({}, Hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ea, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (wa = e.screenX - Dr.screenX, ka = e.screenY - Dr.screenY) : ka = wa = 0, Dr = e), wa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ka;
  } }), rd = It(Fi), bm = ne({}, Fi, { dataTransfer: 0 }), ym = It(bm), vm = ne({}, Hr, { relatedTarget: 0 }), Sa = It(vm), xm = ne({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), wm = It(xm), km = ne({}, Zn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Sm = It(km), Em = ne({}, Zn, { data: 0 }), id = It(Em), Am = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Cm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, zm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Im(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zm[e]) ? !!t[e] : !1;
  }
  function Ea() {
    return Im;
  }
  var Pm = ne({}, Hr, { key: function(e) {
    if (e.key) {
      var t = Am[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cm[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ea, charCode: function(e) {
    return e.type === "keypress" ? ji(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Rm = It(Pm), Nm = ne({}, Fi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), od = It(Nm), Lm = ne({}, Hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ea }), Om = It(Lm), Tm = ne({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mm = It(Tm), Bm = ne({}, Fi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hm = It(Bm), Dm = [9, 13, 27, 32], Aa = m && "CompositionEvent" in window, $r = null;
  m && "documentMode" in document && ($r = document.documentMode);
  var $m = m && "TextEvent" in window && !$r, ad = m && (!Aa || $r && 8 < $r && 11 >= $r), sd = " ", ld = !1;
  function dd(e, t) {
    switch (e) {
      case "keyup":
        return Dm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var er = !1;
  function jm(e, t) {
    switch (e) {
      case "compositionend":
        return cd(t);
      case "keypress":
        return t.which !== 32 ? null : (ld = !0, sd);
      case "textInput":
        return e = t.data, e === sd && ld ? null : e;
      default:
        return null;
    }
  }
  function qm(e, t) {
    if (er) return e === "compositionend" || !Aa && dd(e, t) ? (e = td(), $i = va = _n = null, er = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ad && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ud(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Fm[e.type] : t === "textarea";
  }
  function pd(e, t, r, s) {
    Cr(s), t = Yi(t, "onChange"), 0 < t.length && (r = new xa("onChange", "change", null, r, s), e.push({ event: r, listeners: t }));
  }
  var jr = null, qr = null;
  function Um(e) {
    Pd(e, 0);
  }
  function Ui(e) {
    var t = or(e);
    if (Re(t)) return e;
  }
  function Wm(e, t) {
    if (e === "change") return t;
  }
  var md = !1;
  if (m) {
    var Ca;
    if (m) {
      var za = "oninput" in document;
      if (!za) {
        var gd = document.createElement("div");
        gd.setAttribute("oninput", "return;"), za = typeof gd.oninput == "function";
      }
      Ca = za;
    } else Ca = !1;
    md = Ca && (!document.documentMode || 9 < document.documentMode);
  }
  function fd() {
    jr && (jr.detachEvent("onpropertychange", hd), qr = jr = null);
  }
  function hd(e) {
    if (e.propertyName === "value" && Ui(qr)) {
      var t = [];
      pd(t, qr, e, Ln(e)), Ml(Um, t);
    }
  }
  function Vm(e, t, r) {
    e === "focusin" ? (fd(), jr = t, qr = r, jr.attachEvent("onpropertychange", hd)) : e === "focusout" && fd();
  }
  function Gm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ui(qr);
  }
  function Ym(e, t) {
    if (e === "click") return Ui(t);
  }
  function Km(e, t) {
    if (e === "input" || e === "change") return Ui(t);
  }
  function Xm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var qt = typeof Object.is == "function" ? Object.is : Xm;
  function Fr(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var d = r[s];
      if (!g.call(t, d) || !qt(e[d], t[d])) return !1;
    }
    return !0;
  }
  function _d(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function bd(e, t) {
    var r = _d(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (s = e + r.textContent.length, e <= t && s >= t) return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = _d(r);
    }
  }
  function yd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vd() {
    for (var e = window, t = Te(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Te(e.document);
    }
    return t;
  }
  function Ia(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Qm(e) {
    var t = vd(), r = e.focusedElem, s = e.selectionRange;
    if (t !== r && r && r.ownerDocument && yd(r.ownerDocument.documentElement, r)) {
      if (s !== null && Ia(r)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var d = r.textContent.length, p = Math.min(s.start, d);
          s = s.end === void 0 ? p : Math.min(s.end, d), !e.extend && p > s && (d = s, s = p, p = d), d = bd(r, p);
          var v = bd(
            r,
            s
          );
          d && v && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== v.node || e.focusOffset !== v.offset) && (t = t.createRange(), t.setStart(d.node, d.offset), e.removeAllRanges(), p > s ? (e.addRange(t), e.extend(v.node, v.offset)) : (t.setEnd(v.node, v.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Jm = m && "documentMode" in document && 11 >= document.documentMode, tr = null, Pa = null, Ur = null, Ra = !1;
  function xd(e, t, r) {
    var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ra || tr == null || tr !== Te(s) || (s = tr, "selectionStart" in s && Ia(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Ur && Fr(Ur, s) || (Ur = s, s = Yi(Pa, "onSelect"), 0 < s.length && (t = new xa("onSelect", "select", null, t, r), e.push({ event: t, listeners: s }), t.target = tr)));
  }
  function Wi(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var nr = { animationend: Wi("Animation", "AnimationEnd"), animationiteration: Wi("Animation", "AnimationIteration"), animationstart: Wi("Animation", "AnimationStart"), transitionend: Wi("Transition", "TransitionEnd") }, Na = {}, wd = {};
  m && (wd = document.createElement("div").style, "AnimationEvent" in window || (delete nr.animationend.animation, delete nr.animationiteration.animation, delete nr.animationstart.animation), "TransitionEvent" in window || delete nr.transitionend.transition);
  function Vi(e) {
    if (Na[e]) return Na[e];
    if (!nr[e]) return e;
    var t = nr[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in wd) return Na[e] = t[r];
    return e;
  }
  var kd = Vi("animationend"), Sd = Vi("animationiteration"), Ed = Vi("animationstart"), Ad = Vi("transitionend"), Cd = /* @__PURE__ */ new Map(), zd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function bn(e, t) {
    Cd.set(e, t), c(t, [e]);
  }
  for (var La = 0; La < zd.length; La++) {
    var Oa = zd[La], Zm = Oa.toLowerCase(), eg = Oa[0].toUpperCase() + Oa.slice(1);
    bn(Zm, "on" + eg);
  }
  bn(kd, "onAnimationEnd"), bn(Sd, "onAnimationIteration"), bn(Ed, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(Ad, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Id(e, t, r) {
    var s = e.type || "unknown-event";
    e.currentTarget = r, Zp(s, t, void 0, e), e.currentTarget = null;
  }
  function Pd(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r], d = s.event;
      s = s.listeners;
      e: {
        var p = void 0;
        if (t) for (var v = s.length - 1; 0 <= v; v--) {
          var C = s[v], L = C.instance, F = C.currentTarget;
          if (C = C.listener, L !== p && d.isPropagationStopped()) break e;
          Id(d, C, F), p = L;
        }
        else for (v = 0; v < s.length; v++) {
          if (C = s[v], L = C.instance, F = C.currentTarget, C = C.listener, L !== p && d.isPropagationStopped()) break e;
          Id(d, C, F), p = L;
        }
      }
    }
    if (Pi) throw e = ua, Pi = !1, ua = null, e;
  }
  function Ye(e, t) {
    var r = t[qa];
    r === void 0 && (r = t[qa] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    r.has(s) || (Rd(t, e, 2, !1), r.add(s));
  }
  function Ta(e, t, r) {
    var s = 0;
    t && (s |= 4), Rd(r, e, s, t);
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function Vr(e) {
    if (!e[Gi]) {
      e[Gi] = !0, a.forEach(function(r) {
        r !== "selectionchange" && (tg.has(r) || Ta(r, !1, e), Ta(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gi] || (t[Gi] = !0, Ta("selectionchange", !1, t));
    }
  }
  function Rd(e, t, r, s) {
    switch (ed(t)) {
      case 1:
        var d = fm;
        break;
      case 4:
        d = hm;
        break;
      default:
        d = ba;
    }
    r = d.bind(null, t, r, e), d = void 0, !ca || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), s ? d !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: d }) : e.addEventListener(t, r, !0) : d !== void 0 ? e.addEventListener(t, r, { passive: d }) : e.addEventListener(t, r, !1);
  }
  function Ma(e, t, r, s, d) {
    var p = s;
    if (!(t & 1) && !(t & 2) && s !== null) e: for (; ; ) {
      if (s === null) return;
      var v = s.tag;
      if (v === 3 || v === 4) {
        var C = s.stateNode.containerInfo;
        if (C === d || C.nodeType === 8 && C.parentNode === d) break;
        if (v === 4) for (v = s.return; v !== null; ) {
          var L = v.tag;
          if ((L === 3 || L === 4) && (L = v.stateNode.containerInfo, L === d || L.nodeType === 8 && L.parentNode === d)) return;
          v = v.return;
        }
        for (; C !== null; ) {
          if (v = Mn(C), v === null) return;
          if (L = v.tag, L === 5 || L === 6) {
            s = p = v;
            continue e;
          }
          C = C.parentNode;
        }
      }
      s = s.return;
    }
    Ml(function() {
      var F = p, te = Ln(r), re = [];
      e: {
        var Q = Cd.get(e);
        if (Q !== void 0) {
          var ge = xa, he = e;
          switch (e) {
            case "keypress":
              if (ji(r) === 0) break e;
            case "keydown":
            case "keyup":
              ge = Rm;
              break;
            case "focusin":
              he = "focus", ge = Sa;
              break;
            case "focusout":
              he = "blur", ge = Sa;
              break;
            case "beforeblur":
            case "afterblur":
              ge = Sa;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ge = rd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = ym;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = Om;
              break;
            case kd:
            case Sd:
            case Ed:
              ge = wm;
              break;
            case Ad:
              ge = Mm;
              break;
            case "scroll":
              ge = _m;
              break;
            case "wheel":
              ge = Hm;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = Sm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = od;
          }
          var be = (t & 4) !== 0, it = !be && e === "scroll", $ = be ? Q !== null ? Q + "Capture" : null : Q;
          be = [];
          for (var M = F, q; M !== null; ) {
            q = M;
            var se = q.stateNode;
            if (q.tag === 5 && se !== null && (q = se, $ !== null && (se = zr(M, $), se != null && be.push(Gr(M, se, q)))), it) break;
            M = M.return;
          }
          0 < be.length && (Q = new ge(Q, he, null, r, te), re.push({ event: Q, listeners: be }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", ge = e === "mouseout" || e === "pointerout", Q && r !== Yt && (he = r.relatedTarget || r.fromElement) && (Mn(he) || he[tn])) break e;
          if ((ge || Q) && (Q = te.window === te ? te : (Q = te.ownerDocument) ? Q.defaultView || Q.parentWindow : window, ge ? (he = r.relatedTarget || r.toElement, ge = F, he = he ? Mn(he) : null, he !== null && (it = Tn(he), he !== it || he.tag !== 5 && he.tag !== 6) && (he = null)) : (ge = null, he = F), ge !== he)) {
            if (be = rd, se = "onMouseLeave", $ = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (be = od, se = "onPointerLeave", $ = "onPointerEnter", M = "pointer"), it = ge == null ? Q : or(ge), q = he == null ? Q : or(he), Q = new be(se, M + "leave", ge, r, te), Q.target = it, Q.relatedTarget = q, se = null, Mn(te) === F && (be = new be($, M + "enter", he, r, te), be.target = q, be.relatedTarget = it, se = be), it = se, ge && he) t: {
              for (be = ge, $ = he, M = 0, q = be; q; q = rr(q)) M++;
              for (q = 0, se = $; se; se = rr(se)) q++;
              for (; 0 < M - q; ) be = rr(be), M--;
              for (; 0 < q - M; ) $ = rr($), q--;
              for (; M--; ) {
                if (be === $ || $ !== null && be === $.alternate) break t;
                be = rr(be), $ = rr($);
              }
              be = null;
            }
            else be = null;
            ge !== null && Nd(re, Q, ge, be, !1), he !== null && it !== null && Nd(re, it, he, be, !0);
          }
        }
        e: {
          if (Q = F ? or(F) : window, ge = Q.nodeName && Q.nodeName.toLowerCase(), ge === "select" || ge === "input" && Q.type === "file") var xe = Wm;
          else if (ud(Q)) if (md) xe = Km;
          else {
            xe = Gm;
            var ke = Vm;
          }
          else (ge = Q.nodeName) && ge.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (xe = Ym);
          if (xe && (xe = xe(e, F))) {
            pd(re, xe, r, te);
            break e;
          }
          ke && ke(e, Q, F), e === "focusout" && (ke = Q._wrapperState) && ke.controlled && Q.type === "number" && X(Q, "number", Q.value);
        }
        switch (ke = F ? or(F) : window, e) {
          case "focusin":
            (ud(ke) || ke.contentEditable === "true") && (tr = ke, Pa = F, Ur = null);
            break;
          case "focusout":
            Ur = Pa = tr = null;
            break;
          case "mousedown":
            Ra = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ra = !1, xd(re, r, te);
            break;
          case "selectionchange":
            if (Jm) break;
          case "keydown":
          case "keyup":
            xd(re, r, te);
        }
        var Se;
        if (Aa) e: {
          switch (e) {
            case "compositionstart":
              var Ce = "onCompositionStart";
              break e;
            case "compositionend":
              Ce = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ce = "onCompositionUpdate";
              break e;
          }
          Ce = void 0;
        }
        else er ? dd(e, r) && (Ce = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (ad && r.locale !== "ko" && (er || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && er && (Se = td()) : (_n = te, va = "value" in _n ? _n.value : _n.textContent, er = !0)), ke = Yi(F, Ce), 0 < ke.length && (Ce = new id(Ce, e, null, r, te), re.push({ event: Ce, listeners: ke }), Se ? Ce.data = Se : (Se = cd(r), Se !== null && (Ce.data = Se)))), (Se = $m ? jm(e, r) : qm(e, r)) && (F = Yi(F, "onBeforeInput"), 0 < F.length && (te = new id("onBeforeInput", "beforeinput", null, r, te), re.push({ event: te, listeners: F }), te.data = Se));
      }
      Pd(re, t);
    });
  }
  function Gr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Yi(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var d = e, p = d.stateNode;
      d.tag === 5 && p !== null && (d = p, p = zr(e, r), p != null && s.unshift(Gr(e, p, d)), p = zr(e, t), p != null && s.push(Gr(e, p, d))), e = e.return;
    }
    return s;
  }
  function rr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Nd(e, t, r, s, d) {
    for (var p = t._reactName, v = []; r !== null && r !== s; ) {
      var C = r, L = C.alternate, F = C.stateNode;
      if (L !== null && L === s) break;
      C.tag === 5 && F !== null && (C = F, d ? (L = zr(r, p), L != null && v.unshift(Gr(r, L, C))) : d || (L = zr(r, p), L != null && v.push(Gr(r, L, C)))), r = r.return;
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var ng = /\r\n?/g, rg = /\u0000|\uFFFD/g;
  function Ld(e) {
    return (typeof e == "string" ? e : "" + e).replace(ng, `
`).replace(rg, "");
  }
  function Ki(e, t, r) {
    if (t = Ld(t), Ld(e) !== t && r) throw Error(i(425));
  }
  function Xi() {
  }
  var Ba = null, Ha = null;
  function Da(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $a = typeof setTimeout == "function" ? setTimeout : void 0, ig = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, og = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(e) {
    return Od.resolve(null).then(e).catch(ag);
  } : $a;
  function ag(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ja(e, t) {
    var r = t, s = 0;
    do {
      var d = r.nextSibling;
      if (e.removeChild(r), d && d.nodeType === 8) if (r = d.data, r === "/$") {
        if (s === 0) {
          e.removeChild(d), Br(t);
          return;
        }
        s--;
      } else r !== "$" && r !== "$?" && r !== "$!" || s++;
      r = d;
    } while (r);
    Br(t);
  }
  function yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Td(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ir = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + ir, Yr = "__reactProps$" + ir, tn = "__reactContainer$" + ir, qa = "__reactEvents$" + ir, sg = "__reactListeners$" + ir, lg = "__reactHandles$" + ir;
  function Mn(e) {
    var t = e[Xt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[tn] || r[Xt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Td(e); e !== null; ) {
          if (r = e[Xt]) return r;
          e = Td(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function Kr(e) {
    return e = e[Xt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Qi(e) {
    return e[Yr] || null;
  }
  var Fa = [], ar = -1;
  function vn(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > ar || (e.current = Fa[ar], Fa[ar] = null, ar--);
  }
  function Ge(e, t) {
    ar++, Fa[ar] = e.current, e.current = t;
  }
  var xn = {}, ht = vn(xn), wt = vn(!1), Bn = xn;
  function sr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return xn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var d = {}, p;
    for (p in r) d[p] = t[p];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function kt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ji() {
    Ke(wt), Ke(ht);
  }
  function Md(e, t, r) {
    if (ht.current !== xn) throw Error(i(168));
    Ge(ht, t), Ge(wt, r);
  }
  function Bd(e, t, r) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return r;
    s = s.getChildContext();
    for (var d in s) if (!(d in t)) throw Error(i(108, Me(e) || "Unknown", d));
    return ne({}, r, s);
  }
  function Zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Bn = ht.current, Ge(ht, e), Ge(wt, wt.current), !0;
  }
  function Hd(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    r ? (e = Bd(e, t, Bn), s.__reactInternalMemoizedMergedChildContext = e, Ke(wt), Ke(ht), Ge(ht, e)) : Ke(wt), Ge(wt, r);
  }
  var nn = null, eo = !1, Ua = !1;
  function Dd(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function dg(e) {
    eo = !0, Dd(e);
  }
  function wn() {
    if (!Ua && nn !== null) {
      Ua = !0;
      var e = 0, t = Ue;
      try {
        var r = nn;
        for (Ue = 1; e < r.length; e++) {
          var s = r[e];
          do
            s = s(!0);
          while (s !== null);
        }
        nn = null, eo = !1;
      } catch (d) {
        throw nn !== null && (nn = nn.slice(e + 1)), jl(pa, wn), d;
      } finally {
        Ue = t, Ua = !1;
      }
    }
    return null;
  }
  var lr = [], dr = 0, to = null, no = 0, Lt = [], Ot = 0, Hn = null, rn = 1, on = "";
  function Dn(e, t) {
    lr[dr++] = no, lr[dr++] = to, to = e, no = t;
  }
  function $d(e, t, r) {
    Lt[Ot++] = rn, Lt[Ot++] = on, Lt[Ot++] = Hn, Hn = e;
    var s = rn;
    e = on;
    var d = 32 - jt(s) - 1;
    s &= ~(1 << d), r += 1;
    var p = 32 - jt(t) + d;
    if (30 < p) {
      var v = d - d % 5;
      p = (s & (1 << v) - 1).toString(32), s >>= v, d -= v, rn = 1 << 32 - jt(t) + d | r << d | s, on = p + e;
    } else rn = 1 << p | r << d | s, on = e;
  }
  function Wa(e) {
    e.return !== null && (Dn(e, 1), $d(e, 1, 0));
  }
  function Va(e) {
    for (; e === to; ) to = lr[--dr], lr[dr] = null, no = lr[--dr], lr[dr] = null;
    for (; e === Hn; ) Hn = Lt[--Ot], Lt[Ot] = null, on = Lt[--Ot], Lt[Ot] = null, rn = Lt[--Ot], Lt[Ot] = null;
  }
  var Pt = null, Rt = null, Ze = !1, Ft = null;
  function jd(e, t) {
    var r = Ht(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function qd(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, Rt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, Rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Hn !== null ? { id: rn, overflow: on } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ht(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Pt = e, Rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ga(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ya(e) {
    if (Ze) {
      var t = Rt;
      if (t) {
        var r = t;
        if (!qd(e, t)) {
          if (Ga(e)) throw Error(i(418));
          t = yn(r.nextSibling);
          var s = Pt;
          t && qd(e, t) ? jd(s, r) : (e.flags = e.flags & -4097 | 2, Ze = !1, Pt = e);
        }
      } else {
        if (Ga(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ze = !1, Pt = e;
      }
    }
  }
  function Fd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Pt = e;
  }
  function ro(e) {
    if (e !== Pt) return !1;
    if (!Ze) return Fd(e), Ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Da(e.type, e.memoizedProps)), t && (t = Rt)) {
      if (Ga(e)) throw Ud(), Error(i(418));
      for (; t; ) jd(e, t), t = yn(t.nextSibling);
    }
    if (Fd(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Rt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Rt = null;
      }
    } else Rt = Pt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ud() {
    for (var e = Rt; e; ) e = yn(e.nextSibling);
  }
  function cr() {
    Rt = Pt = null, Ze = !1;
  }
  function Ka(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var cg = b.ReactCurrentBatchConfig;
  function Xr(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(i(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var d = s, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(v) {
          var C = d.refs;
          v === null ? delete C[p] : C[p] = v;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function io(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Wd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Vd(e) {
    function t($, M) {
      if (e) {
        var q = $.deletions;
        q === null ? ($.deletions = [M], $.flags |= 16) : q.push(M);
      }
    }
    function r($, M) {
      if (!e) return null;
      for (; M !== null; ) t($, M), M = M.sibling;
      return null;
    }
    function s($, M) {
      for ($ = /* @__PURE__ */ new Map(); M !== null; ) M.key !== null ? $.set(M.key, M) : $.set(M.index, M), M = M.sibling;
      return $;
    }
    function d($, M) {
      return $ = Pn($, M), $.index = 0, $.sibling = null, $;
    }
    function p($, M, q) {
      return $.index = q, e ? (q = $.alternate, q !== null ? (q = q.index, q < M ? ($.flags |= 2, M) : q) : ($.flags |= 2, M)) : ($.flags |= 1048576, M);
    }
    function v($) {
      return e && $.alternate === null && ($.flags |= 2), $;
    }
    function C($, M, q, se) {
      return M === null || M.tag !== 6 ? (M = $s(q, $.mode, se), M.return = $, M) : (M = d(M, q), M.return = $, M);
    }
    function L($, M, q, se) {
      var xe = q.type;
      return xe === O ? te($, M, q.props.children, se, q.key) : M !== null && (M.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ee && Wd(xe) === M.type) ? (se = d(M, q.props), se.ref = Xr($, M, q), se.return = $, se) : (se = Io(q.type, q.key, q.props, null, $.mode, se), se.ref = Xr($, M, q), se.return = $, se);
    }
    function F($, M, q, se) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== q.containerInfo || M.stateNode.implementation !== q.implementation ? (M = js(q, $.mode, se), M.return = $, M) : (M = d(M, q.children || []), M.return = $, M);
    }
    function te($, M, q, se, xe) {
      return M === null || M.tag !== 7 ? (M = Gn(q, $.mode, se, xe), M.return = $, M) : (M = d(M, q), M.return = $, M);
    }
    function re($, M, q) {
      if (typeof M == "string" && M !== "" || typeof M == "number") return M = $s("" + M, $.mode, q), M.return = $, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case w:
            return q = Io(M.type, M.key, M.props, null, $.mode, q), q.ref = Xr($, null, M), q.return = $, q;
          case A:
            return M = js(M, $.mode, q), M.return = $, M;
          case ee:
            var se = M._init;
            return re($, se(M._payload), q);
        }
        if (ue(M) || de(M)) return M = Gn(M, $.mode, q, null), M.return = $, M;
        io($, M);
      }
      return null;
    }
    function Q($, M, q, se) {
      var xe = M !== null ? M.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number") return xe !== null ? null : C($, M, "" + q, se);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case w:
            return q.key === xe ? L($, M, q, se) : null;
          case A:
            return q.key === xe ? F($, M, q, se) : null;
          case ee:
            return xe = q._init, Q(
              $,
              M,
              xe(q._payload),
              se
            );
        }
        if (ue(q) || de(q)) return xe !== null ? null : te($, M, q, se, null);
        io($, q);
      }
      return null;
    }
    function ge($, M, q, se, xe) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return $ = $.get(q) || null, C(M, $, "" + se, xe);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case w:
            return $ = $.get(se.key === null ? q : se.key) || null, L(M, $, se, xe);
          case A:
            return $ = $.get(se.key === null ? q : se.key) || null, F(M, $, se, xe);
          case ee:
            var ke = se._init;
            return ge($, M, q, ke(se._payload), xe);
        }
        if (ue(se) || de(se)) return $ = $.get(q) || null, te(M, $, se, xe, null);
        io(M, se);
      }
      return null;
    }
    function he($, M, q, se) {
      for (var xe = null, ke = null, Se = M, Ce = M = 0, ut = null; Se !== null && Ce < q.length; Ce++) {
        Se.index > Ce ? (ut = Se, Se = null) : ut = Se.sibling;
        var qe = Q($, Se, q[Ce], se);
        if (qe === null) {
          Se === null && (Se = ut);
          break;
        }
        e && Se && qe.alternate === null && t($, Se), M = p(qe, M, Ce), ke === null ? xe = qe : ke.sibling = qe, ke = qe, Se = ut;
      }
      if (Ce === q.length) return r($, Se), Ze && Dn($, Ce), xe;
      if (Se === null) {
        for (; Ce < q.length; Ce++) Se = re($, q[Ce], se), Se !== null && (M = p(Se, M, Ce), ke === null ? xe = Se : ke.sibling = Se, ke = Se);
        return Ze && Dn($, Ce), xe;
      }
      for (Se = s($, Se); Ce < q.length; Ce++) ut = ge(Se, $, Ce, q[Ce], se), ut !== null && (e && ut.alternate !== null && Se.delete(ut.key === null ? Ce : ut.key), M = p(ut, M, Ce), ke === null ? xe = ut : ke.sibling = ut, ke = ut);
      return e && Se.forEach(function(Rn) {
        return t($, Rn);
      }), Ze && Dn($, Ce), xe;
    }
    function be($, M, q, se) {
      var xe = de(q);
      if (typeof xe != "function") throw Error(i(150));
      if (q = xe.call(q), q == null) throw Error(i(151));
      for (var ke = xe = null, Se = M, Ce = M = 0, ut = null, qe = q.next(); Se !== null && !qe.done; Ce++, qe = q.next()) {
        Se.index > Ce ? (ut = Se, Se = null) : ut = Se.sibling;
        var Rn = Q($, Se, qe.value, se);
        if (Rn === null) {
          Se === null && (Se = ut);
          break;
        }
        e && Se && Rn.alternate === null && t($, Se), M = p(Rn, M, Ce), ke === null ? xe = Rn : ke.sibling = Rn, ke = Rn, Se = ut;
      }
      if (qe.done) return r(
        $,
        Se
      ), Ze && Dn($, Ce), xe;
      if (Se === null) {
        for (; !qe.done; Ce++, qe = q.next()) qe = re($, qe.value, se), qe !== null && (M = p(qe, M, Ce), ke === null ? xe = qe : ke.sibling = qe, ke = qe);
        return Ze && Dn($, Ce), xe;
      }
      for (Se = s($, Se); !qe.done; Ce++, qe = q.next()) qe = ge(Se, $, Ce, qe.value, se), qe !== null && (e && qe.alternate !== null && Se.delete(qe.key === null ? Ce : qe.key), M = p(qe, M, Ce), ke === null ? xe = qe : ke.sibling = qe, ke = qe);
      return e && Se.forEach(function(Fg) {
        return t($, Fg);
      }), Ze && Dn($, Ce), xe;
    }
    function it($, M, q, se) {
      if (typeof q == "object" && q !== null && q.type === O && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case w:
            e: {
              for (var xe = q.key, ke = M; ke !== null; ) {
                if (ke.key === xe) {
                  if (xe = q.type, xe === O) {
                    if (ke.tag === 7) {
                      r($, ke.sibling), M = d(ke, q.props.children), M.return = $, $ = M;
                      break e;
                    }
                  } else if (ke.elementType === xe || typeof xe == "object" && xe !== null && xe.$$typeof === ee && Wd(xe) === ke.type) {
                    r($, ke.sibling), M = d(ke, q.props), M.ref = Xr($, ke, q), M.return = $, $ = M;
                    break e;
                  }
                  r($, ke);
                  break;
                } else t($, ke);
                ke = ke.sibling;
              }
              q.type === O ? (M = Gn(q.props.children, $.mode, se, q.key), M.return = $, $ = M) : (se = Io(q.type, q.key, q.props, null, $.mode, se), se.ref = Xr($, M, q), se.return = $, $ = se);
            }
            return v($);
          case A:
            e: {
              for (ke = q.key; M !== null; ) {
                if (M.key === ke) if (M.tag === 4 && M.stateNode.containerInfo === q.containerInfo && M.stateNode.implementation === q.implementation) {
                  r($, M.sibling), M = d(M, q.children || []), M.return = $, $ = M;
                  break e;
                } else {
                  r($, M);
                  break;
                }
                else t($, M);
                M = M.sibling;
              }
              M = js(q, $.mode, se), M.return = $, $ = M;
            }
            return v($);
          case ee:
            return ke = q._init, it($, M, ke(q._payload), se);
        }
        if (ue(q)) return he($, M, q, se);
        if (de(q)) return be($, M, q, se);
        io($, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, M !== null && M.tag === 6 ? (r($, M.sibling), M = d(M, q), M.return = $, $ = M) : (r($, M), M = $s(q, $.mode, se), M.return = $, $ = M), v($)) : r($, M);
    }
    return it;
  }
  var ur = Vd(!0), Gd = Vd(!1), oo = vn(null), ao = null, pr = null, Xa = null;
  function Qa() {
    Xa = pr = ao = null;
  }
  function Ja(e) {
    var t = oo.current;
    Ke(oo), e._currentValue = t;
  }
  function Za(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function mr(e, t) {
    ao = e, Xa = pr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (St = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (Xa !== e) if (e = { context: e, memoizedValue: t, next: null }, pr === null) {
      if (ao === null) throw Error(i(308));
      pr = e, ao.dependencies = { lanes: 0, firstContext: e };
    } else pr = pr.next = e;
    return t;
  }
  var $n = null;
  function es(e) {
    $n === null ? $n = [e] : $n.push(e);
  }
  function Yd(e, t, r, s) {
    var d = t.interleaved;
    return d === null ? (r.next = r, es(t)) : (r.next = d.next, d.next = r), t.interleaved = r, an(e, s);
  }
  function an(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var kn = !1;
  function ts(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Kd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, $e & 2) {
      var d = s.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), s.pending = t, an(e, r);
    }
    return d = s.interleaved, d === null ? (t.next = t, es(s)) : (t.next = d.next, d.next = t), s.interleaved = t, an(e, r);
  }
  function so(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, r |= s, t.lanes = r, fa(e, r);
    }
  }
  function Xd(e, t) {
    var r = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, r === s)) {
      var d = null, p = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var v = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          p === null ? d = p = v : p = p.next = v, r = r.next;
        } while (r !== null);
        p === null ? d = p = t : p = p.next = t;
      } else d = p = t;
      r = { baseState: s.baseState, firstBaseUpdate: d, lastBaseUpdate: p, shared: s.shared, effects: s.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function lo(e, t, r, s) {
    var d = e.updateQueue;
    kn = !1;
    var p = d.firstBaseUpdate, v = d.lastBaseUpdate, C = d.shared.pending;
    if (C !== null) {
      d.shared.pending = null;
      var L = C, F = L.next;
      L.next = null, v === null ? p = F : v.next = F, v = L;
      var te = e.alternate;
      te !== null && (te = te.updateQueue, C = te.lastBaseUpdate, C !== v && (C === null ? te.firstBaseUpdate = F : C.next = F, te.lastBaseUpdate = L));
    }
    if (p !== null) {
      var re = d.baseState;
      v = 0, te = F = L = null, C = p;
      do {
        var Q = C.lane, ge = C.eventTime;
        if ((s & Q) === Q) {
          te !== null && (te = te.next = {
            eventTime: ge,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var he = e, be = C;
            switch (Q = t, ge = r, be.tag) {
              case 1:
                if (he = be.payload, typeof he == "function") {
                  re = he.call(ge, re, Q);
                  break e;
                }
                re = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = be.payload, Q = typeof he == "function" ? he.call(ge, re, Q) : he, Q == null) break e;
                re = ne({}, re, Q);
                break e;
              case 2:
                kn = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (e.flags |= 64, Q = d.effects, Q === null ? d.effects = [C] : Q.push(C));
        } else ge = { eventTime: ge, lane: Q, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, te === null ? (F = te = ge, L = re) : te = te.next = ge, v |= Q;
        if (C = C.next, C === null) {
          if (C = d.shared.pending, C === null) break;
          Q = C, C = Q.next, Q.next = null, d.lastBaseUpdate = Q, d.shared.pending = null;
        }
      } while (!0);
      if (te === null && (L = re), d.baseState = L, d.firstBaseUpdate = F, d.lastBaseUpdate = te, t = d.shared.interleaved, t !== null) {
        d = t;
        do
          v |= d.lane, d = d.next;
        while (d !== t);
      } else p === null && (d.shared.lanes = 0);
      Fn |= v, e.lanes = v, e.memoizedState = re;
    }
  }
  function Qd(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], d = s.callback;
      if (d !== null) {
        if (s.callback = null, s = r, typeof d != "function") throw Error(i(191, d));
        d.call(s);
      }
    }
  }
  var Qr = {}, Qt = vn(Qr), Jr = vn(Qr), Zr = vn(Qr);
  function jn(e) {
    if (e === Qr) throw Error(i(174));
    return e;
  }
  function ns(e, t) {
    switch (Ge(Zr, t), Ge(Jr, e), Ge(Qt, Qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lt(t, e);
    }
    Ke(Qt), Ge(Qt, t);
  }
  function gr() {
    Ke(Qt), Ke(Jr), Ke(Zr);
  }
  function Jd(e) {
    jn(Zr.current);
    var t = jn(Qt.current), r = lt(t, e.type);
    t !== r && (Ge(Jr, e), Ge(Qt, r));
  }
  function rs(e) {
    Jr.current === e && (Ke(Qt), Ke(Jr));
  }
  var et = vn(0);
  function co(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var is = [];
  function os() {
    for (var e = 0; e < is.length; e++) is[e]._workInProgressVersionPrimary = null;
    is.length = 0;
  }
  var uo = b.ReactCurrentDispatcher, as = b.ReactCurrentBatchConfig, qn = 0, tt = null, at = null, dt = null, po = !1, ei = !1, ti = 0, ug = 0;
  function _t() {
    throw Error(i(321));
  }
  function ss(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!qt(e[r], t[r])) return !1;
    return !0;
  }
  function ls(e, t, r, s, d, p) {
    if (qn = p, tt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, uo.current = e === null || e.memoizedState === null ? fg : hg, e = r(s, d), ei) {
      p = 0;
      do {
        if (ei = !1, ti = 0, 25 <= p) throw Error(i(301));
        p += 1, dt = at = null, t.updateQueue = null, uo.current = _g, e = r(s, d);
      } while (ei);
    }
    if (uo.current = fo, t = at !== null && at.next !== null, qn = 0, dt = at = tt = null, po = !1, t) throw Error(i(300));
    return e;
  }
  function ds() {
    var e = ti !== 0;
    return ti = 0, e;
  }
  function Jt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return dt === null ? tt.memoizedState = dt = e : dt = dt.next = e, dt;
  }
  function Mt() {
    if (at === null) {
      var e = tt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = at.next;
    var t = dt === null ? tt.memoizedState : dt.next;
    if (t !== null) dt = t, at = e;
    else {
      if (e === null) throw Error(i(310));
      at = e, e = { memoizedState: at.memoizedState, baseState: at.baseState, baseQueue: at.baseQueue, queue: at.queue, next: null }, dt === null ? tt.memoizedState = dt = e : dt = dt.next = e;
    }
    return dt;
  }
  function ni(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function cs(e) {
    var t = Mt(), r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = at, d = s.baseQueue, p = r.pending;
    if (p !== null) {
      if (d !== null) {
        var v = d.next;
        d.next = p.next, p.next = v;
      }
      s.baseQueue = d = p, r.pending = null;
    }
    if (d !== null) {
      p = d.next, s = s.baseState;
      var C = v = null, L = null, F = p;
      do {
        var te = F.lane;
        if ((qn & te) === te) L !== null && (L = L.next = { lane: 0, action: F.action, hasEagerState: F.hasEagerState, eagerState: F.eagerState, next: null }), s = F.hasEagerState ? F.eagerState : e(s, F.action);
        else {
          var re = {
            lane: te,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null
          };
          L === null ? (C = L = re, v = s) : L = L.next = re, tt.lanes |= te, Fn |= te;
        }
        F = F.next;
      } while (F !== null && F !== p);
      L === null ? v = s : L.next = C, qt(s, t.memoizedState) || (St = !0), t.memoizedState = s, t.baseState = v, t.baseQueue = L, r.lastRenderedState = s;
    }
    if (e = r.interleaved, e !== null) {
      d = e;
      do
        p = d.lane, tt.lanes |= p, Fn |= p, d = d.next;
      while (d !== e);
    } else d === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function us(e) {
    var t = Mt(), r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch, d = r.pending, p = t.memoizedState;
    if (d !== null) {
      r.pending = null;
      var v = d = d.next;
      do
        p = e(p, v.action), v = v.next;
      while (v !== d);
      qt(p, t.memoizedState) || (St = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), r.lastRenderedState = p;
    }
    return [p, s];
  }
  function Zd() {
  }
  function ec(e, t) {
    var r = tt, s = Mt(), d = t(), p = !qt(s.memoizedState, d);
    if (p && (s.memoizedState = d, St = !0), s = s.queue, ps(rc.bind(null, r, s, e), [e]), s.getSnapshot !== t || p || dt !== null && dt.memoizedState.tag & 1) {
      if (r.flags |= 2048, ri(9, nc.bind(null, r, s, d, t), void 0, null), ct === null) throw Error(i(349));
      qn & 30 || tc(r, t, d);
    }
    return d;
  }
  function tc(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = tt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, tt.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function nc(e, t, r, s) {
    t.value = r, t.getSnapshot = s, ic(t) && oc(e);
  }
  function rc(e, t, r) {
    return r(function() {
      ic(t) && oc(e);
    });
  }
  function ic(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !qt(e, r);
    } catch {
      return !0;
    }
  }
  function oc(e) {
    var t = an(e, 1);
    t !== null && Gt(t, e, 1, -1);
  }
  function ac(e) {
    var t = Jt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ni, lastRenderedState: e }, t.queue = e, e = e.dispatch = gg.bind(null, tt, e), [t.memoizedState, e];
  }
  function ri(e, t, r, s) {
    return e = { tag: e, create: t, destroy: r, deps: s, next: null }, t = tt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, tt.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (s = r.next, r.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function sc() {
    return Mt().memoizedState;
  }
  function mo(e, t, r, s) {
    var d = Jt();
    tt.flags |= e, d.memoizedState = ri(1 | t, r, void 0, s === void 0 ? null : s);
  }
  function go(e, t, r, s) {
    var d = Mt();
    s = s === void 0 ? null : s;
    var p = void 0;
    if (at !== null) {
      var v = at.memoizedState;
      if (p = v.destroy, s !== null && ss(s, v.deps)) {
        d.memoizedState = ri(t, r, p, s);
        return;
      }
    }
    tt.flags |= e, d.memoizedState = ri(1 | t, r, p, s);
  }
  function lc(e, t) {
    return mo(8390656, 8, e, t);
  }
  function ps(e, t) {
    return go(2048, 8, e, t);
  }
  function dc(e, t) {
    return go(4, 2, e, t);
  }
  function cc(e, t) {
    return go(4, 4, e, t);
  }
  function uc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function pc(e, t, r) {
    return r = r != null ? r.concat([e]) : null, go(4, 4, uc.bind(null, t, e), r);
  }
  function ms() {
  }
  function mc(e, t) {
    var r = Mt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && ss(t, s[1]) ? s[0] : (r.memoizedState = [e, t], e);
  }
  function gc(e, t) {
    var r = Mt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && ss(t, s[1]) ? s[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function fc(e, t, r) {
    return qn & 21 ? (qt(r, t) || (r = Wl(), tt.lanes |= r, Fn |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, St = !0), e.memoizedState = r);
  }
  function pg(e, t) {
    var r = Ue;
    Ue = r !== 0 && 4 > r ? r : 4, e(!0);
    var s = as.transition;
    as.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = r, as.transition = s;
    }
  }
  function hc() {
    return Mt().memoizedState;
  }
  function mg(e, t, r) {
    var s = zn(e);
    if (r = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null }, _c(e)) bc(t, r);
    else if (r = Yd(e, t, r, s), r !== null) {
      var d = xt();
      Gt(r, e, s, d), yc(r, t, s);
    }
  }
  function gg(e, t, r) {
    var s = zn(e), d = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (_c(e)) bc(t, d);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var v = t.lastRenderedState, C = p(v, r);
        if (d.hasEagerState = !0, d.eagerState = C, qt(C, v)) {
          var L = t.interleaved;
          L === null ? (d.next = d, es(t)) : (d.next = L.next, L.next = d), t.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      r = Yd(e, t, d, s), r !== null && (d = xt(), Gt(r, e, s, d), yc(r, t, s));
    }
  }
  function _c(e) {
    var t = e.alternate;
    return e === tt || t !== null && t === tt;
  }
  function bc(e, t) {
    ei = po = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function yc(e, t, r) {
    if (r & 4194240) {
      var s = t.lanes;
      s &= e.pendingLanes, r |= s, t.lanes = r, fa(e, r);
    }
  }
  var fo = { readContext: Tt, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, fg = { readContext: Tt, useCallback: function(e, t) {
    return Jt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: lc, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, mo(
      4194308,
      4,
      uc.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return mo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return mo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = Jt();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var s = Jt();
    return t = r !== void 0 ? r(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = mg.bind(null, tt, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Jt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ac, useDebugValue: ms, useDeferredValue: function(e) {
    return Jt().memoizedState = e;
  }, useTransition: function() {
    var e = ac(!1), t = e[0];
    return e = pg.bind(null, e[1]), Jt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var s = tt, d = Jt();
    if (Ze) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else {
      if (r = t(), ct === null) throw Error(i(349));
      qn & 30 || tc(s, t, r);
    }
    d.memoizedState = r;
    var p = { value: r, getSnapshot: t };
    return d.queue = p, lc(rc.bind(
      null,
      s,
      p,
      e
    ), [e]), s.flags |= 2048, ri(9, nc.bind(null, s, p, r, t), void 0, null), r;
  }, useId: function() {
    var e = Jt(), t = ct.identifierPrefix;
    if (Ze) {
      var r = on, s = rn;
      r = (s & ~(1 << 32 - jt(s) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = ti++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = ug++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, hg = {
    readContext: Tt,
    useCallback: mc,
    useContext: Tt,
    useEffect: ps,
    useImperativeHandle: pc,
    useInsertionEffect: dc,
    useLayoutEffect: cc,
    useMemo: gc,
    useReducer: cs,
    useRef: sc,
    useState: function() {
      return cs(ni);
    },
    useDebugValue: ms,
    useDeferredValue: function(e) {
      var t = Mt();
      return fc(t, at.memoizedState, e);
    },
    useTransition: function() {
      var e = cs(ni)[0], t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: ec,
    useId: hc,
    unstable_isNewReconciler: !1
  }, _g = { readContext: Tt, useCallback: mc, useContext: Tt, useEffect: ps, useImperativeHandle: pc, useInsertionEffect: dc, useLayoutEffect: cc, useMemo: gc, useReducer: us, useRef: sc, useState: function() {
    return us(ni);
  }, useDebugValue: ms, useDeferredValue: function(e) {
    var t = Mt();
    return at === null ? t.memoizedState = e : fc(t, at.memoizedState, e);
  }, useTransition: function() {
    var e = us(ni)[0], t = Mt().memoizedState;
    return [e, t];
  }, useMutableSource: Zd, useSyncExternalStore: ec, useId: hc, unstable_isNewReconciler: !1 };
  function Ut(e, t) {
    if (e && e.defaultProps) {
      t = ne({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function gs(e, t, r, s) {
    t = e.memoizedState, r = r(s, t), r = r == null ? t : ne({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ho = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var s = xt(), d = zn(e), p = sn(s, d);
    p.payload = t, r != null && (p.callback = r), t = Sn(e, p, d), t !== null && (Gt(t, e, d, s), so(t, e, d));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var s = xt(), d = zn(e), p = sn(s, d);
    p.tag = 1, p.payload = t, r != null && (p.callback = r), t = Sn(e, p, d), t !== null && (Gt(t, e, d, s), so(t, e, d));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = xt(), s = zn(e), d = sn(r, s);
    d.tag = 2, t != null && (d.callback = t), t = Sn(e, d, s), t !== null && (Gt(t, e, s, r), so(t, e, s));
  } };
  function vc(e, t, r, s, d, p, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, p, v) : t.prototype && t.prototype.isPureReactComponent ? !Fr(r, s) || !Fr(d, p) : !0;
  }
  function xc(e, t, r) {
    var s = !1, d = xn, p = t.contextType;
    return typeof p == "object" && p !== null ? p = Tt(p) : (d = kt(t) ? Bn : ht.current, s = t.contextTypes, p = (s = s != null) ? sr(e, d) : xn), t = new t(r, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ho, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = d, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function wc(e, t, r, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, s), t.state !== e && ho.enqueueReplaceState(t, t.state, null);
  }
  function fs(e, t, r, s) {
    var d = e.stateNode;
    d.props = r, d.state = e.memoizedState, d.refs = {}, ts(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? d.context = Tt(p) : (p = kt(t) ? Bn : ht.current, d.context = sr(e, p)), d.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (gs(e, t, p, r), d.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (t = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), t !== d.state && ho.enqueueReplaceState(d, d.state, null), lo(e, r, d, s), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fr(e, t) {
    try {
      var r = "", s = t;
      do
        r += Ae(s), s = s.return;
      while (s);
      var d = r;
    } catch (p) {
      d = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: d, digest: null };
  }
  function hs(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function _s(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var bg = typeof WeakMap == "function" ? WeakMap : Map;
  function kc(e, t, r) {
    r = sn(-1, r), r.tag = 3, r.payload = { element: null };
    var s = t.value;
    return r.callback = function() {
      ko || (ko = !0, Ns = s), _s(e, t);
    }, r;
  }
  function Sc(e, t, r) {
    r = sn(-1, r), r.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var d = t.value;
      r.payload = function() {
        return s(d);
      }, r.callback = function() {
        _s(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (r.callback = function() {
      _s(e, t), typeof s != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
      var v = t.stack;
      this.componentDidCatch(t.value, { componentStack: v !== null ? v : "" });
    }), r;
  }
  function Ec(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new bg();
      var d = /* @__PURE__ */ new Set();
      s.set(t, d);
    } else d = s.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), s.set(t, d));
    d.has(r) || (d.add(r), e = Ng.bind(null, e, t, r), t.then(e, e));
  }
  function Ac(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Cc(e, t, r, s, d) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = d, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = sn(-1, 1), t.tag = 2, Sn(r, t, 1))), r.lanes |= 1), e);
  }
  var yg = b.ReactCurrentOwner, St = !1;
  function vt(e, t, r, s) {
    t.child = e === null ? Gd(t, null, r, s) : ur(t, e.child, r, s);
  }
  function zc(e, t, r, s, d) {
    r = r.render;
    var p = t.ref;
    return mr(t, d), s = ls(e, t, r, s, p, d), r = ds(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~d, ln(e, t, d)) : (Ze && r && Wa(t), t.flags |= 1, vt(e, t, s, d), t.child);
  }
  function Ic(e, t, r, s, d) {
    if (e === null) {
      var p = r.type;
      return typeof p == "function" && !Ds(p) && p.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = p, Pc(e, t, p, s, d)) : (e = Io(r.type, null, s, t, t.mode, d), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, !(e.lanes & d)) {
      var v = p.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Fr, r(v, s) && e.ref === t.ref) return ln(e, t, d);
    }
    return t.flags |= 1, e = Pn(p, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pc(e, t, r, s, d) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Fr(p, s) && e.ref === t.ref) if (St = !1, t.pendingProps = s = p, (e.lanes & d) !== 0) e.flags & 131072 && (St = !0);
      else return t.lanes = e.lanes, ln(e, t, d);
    }
    return bs(e, t, r, s, d);
  }
  function Rc(e, t, r) {
    var s = t.pendingProps, d = s.children, p = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(_r, Nt), Nt |= r;
    else {
      if (!(r & 1073741824)) return e = p !== null ? p.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ge(_r, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = p !== null ? p.baseLanes : r, Ge(_r, Nt), Nt |= s;
    }
    else p !== null ? (s = p.baseLanes | r, t.memoizedState = null) : s = r, Ge(_r, Nt), Nt |= s;
    return vt(e, t, d, r), t.child;
  }
  function Nc(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function bs(e, t, r, s, d) {
    var p = kt(r) ? Bn : ht.current;
    return p = sr(t, p), mr(t, d), r = ls(e, t, r, s, p, d), s = ds(), e !== null && !St ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~d, ln(e, t, d)) : (Ze && s && Wa(t), t.flags |= 1, vt(e, t, r, d), t.child);
  }
  function Lc(e, t, r, s, d) {
    if (kt(r)) {
      var p = !0;
      Zi(t);
    } else p = !1;
    if (mr(t, d), t.stateNode === null) bo(e, t), xc(t, r, s), fs(t, r, s, d), s = !0;
    else if (e === null) {
      var v = t.stateNode, C = t.memoizedProps;
      v.props = C;
      var L = v.context, F = r.contextType;
      typeof F == "object" && F !== null ? F = Tt(F) : (F = kt(r) ? Bn : ht.current, F = sr(t, F));
      var te = r.getDerivedStateFromProps, re = typeof te == "function" || typeof v.getSnapshotBeforeUpdate == "function";
      re || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (C !== s || L !== F) && wc(t, v, s, F), kn = !1;
      var Q = t.memoizedState;
      v.state = Q, lo(t, s, v, d), L = t.memoizedState, C !== s || Q !== L || wt.current || kn ? (typeof te == "function" && (gs(t, r, te, s), L = t.memoizedState), (C = kn || vc(t, r, C, s, Q, L, F)) ? (re || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = L), v.props = s, v.state = L, v.context = F, s = C) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      v = t.stateNode, Kd(e, t), C = t.memoizedProps, F = t.type === t.elementType ? C : Ut(t.type, C), v.props = F, re = t.pendingProps, Q = v.context, L = r.contextType, typeof L == "object" && L !== null ? L = Tt(L) : (L = kt(r) ? Bn : ht.current, L = sr(t, L));
      var ge = r.getDerivedStateFromProps;
      (te = typeof ge == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (C !== re || Q !== L) && wc(t, v, s, L), kn = !1, Q = t.memoizedState, v.state = Q, lo(t, s, v, d);
      var he = t.memoizedState;
      C !== re || Q !== he || wt.current || kn ? (typeof ge == "function" && (gs(t, r, ge, s), he = t.memoizedState), (F = kn || vc(t, r, F, s, Q, he, L) || !1) ? (te || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(s, he, L), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(s, he, L)), typeof v.componentDidUpdate == "function" && (t.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || C === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = he), v.props = s, v.state = he, v.context = L, s = F) : (typeof v.componentDidUpdate != "function" || C === e.memoizedProps && Q === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && Q === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return ys(e, t, r, s, p, d);
  }
  function ys(e, t, r, s, d, p) {
    Nc(e, t);
    var v = (t.flags & 128) !== 0;
    if (!s && !v) return d && Hd(t, r, !1), ln(e, t, p);
    s = t.stateNode, yg.current = t;
    var C = v && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && v ? (t.child = ur(t, e.child, null, p), t.child = ur(t, null, C, p)) : vt(e, t, C, p), t.memoizedState = s.state, d && Hd(t, r, !0), t.child;
  }
  function Oc(e) {
    var t = e.stateNode;
    t.pendingContext ? Md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Md(e, t.context, !1), ns(e, t.containerInfo);
  }
  function Tc(e, t, r, s, d) {
    return cr(), Ka(d), t.flags |= 256, vt(e, t, r, s), t.child;
  }
  var vs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mc(e, t, r) {
    var s = t.pendingProps, d = et.current, p = !1, v = (t.flags & 128) !== 0, C;
    if ((C = v) || (C = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0), C ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1), Ge(et, d & 1), e === null)
      return Ya(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (v = s.children, e = s.fallback, p ? (s = t.mode, p = t.child, v = { mode: "hidden", children: v }, !(s & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = v) : p = Po(v, s, 0, null), e = Gn(e, s, r, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = xs(r), t.memoizedState = vs, e) : ws(t, v));
    if (d = e.memoizedState, d !== null && (C = d.dehydrated, C !== null)) return vg(e, t, v, s, C, d, r);
    if (p) {
      p = s.fallback, v = t.mode, d = e.child, C = d.sibling;
      var L = { mode: "hidden", children: s.children };
      return !(v & 1) && t.child !== d ? (s = t.child, s.childLanes = 0, s.pendingProps = L, t.deletions = null) : (s = Pn(d, L), s.subtreeFlags = d.subtreeFlags & 14680064), C !== null ? p = Pn(C, p) : (p = Gn(p, v, r, null), p.flags |= 2), p.return = t, s.return = t, s.sibling = p, t.child = s, s = p, p = t.child, v = e.child.memoizedState, v = v === null ? xs(r) : { baseLanes: v.baseLanes | r, cachePool: null, transitions: v.transitions }, p.memoizedState = v, p.childLanes = e.childLanes & ~r, t.memoizedState = vs, s;
    }
    return p = e.child, e = p.sibling, s = Pn(p, { mode: "visible", children: s.children }), !(t.mode & 1) && (s.lanes = r), s.return = t, s.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function ws(e, t) {
    return t = Po({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function _o(e, t, r, s) {
    return s !== null && Ka(s), ur(t, e.child, null, r), e = ws(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function vg(e, t, r, s, d, p, v) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, s = hs(Error(i(422))), _o(e, t, v, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = s.fallback, d = t.mode, s = Po({ mode: "visible", children: s.children }, d, 0, null), p = Gn(p, d, v, null), p.flags |= 2, s.return = t, p.return = t, s.sibling = p, t.child = s, t.mode & 1 && ur(t, e.child, null, v), t.child.memoizedState = xs(v), t.memoizedState = vs, p);
    if (!(t.mode & 1)) return _o(e, t, v, null);
    if (d.data === "$!") {
      if (s = d.nextSibling && d.nextSibling.dataset, s) var C = s.dgst;
      return s = C, p = Error(i(419)), s = hs(p, s, void 0), _o(e, t, v, s);
    }
    if (C = (v & e.childLanes) !== 0, St || C) {
      if (s = ct, s !== null) {
        switch (v & -v) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (s.suspendedLanes | v) ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, an(e, d), Gt(s, e, d, -1));
      }
      return Hs(), s = hs(Error(i(421))), _o(e, t, v, s);
    }
    return d.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Lg.bind(null, e), d._reactRetry = t, null) : (e = p.treeContext, Rt = yn(d.nextSibling), Pt = t, Ze = !0, Ft = null, e !== null && (Lt[Ot++] = rn, Lt[Ot++] = on, Lt[Ot++] = Hn, rn = e.id, on = e.overflow, Hn = t), t = ws(t, s.children), t.flags |= 4096, t);
  }
  function Bc(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Za(e.return, t, r);
  }
  function ks(e, t, r, s, d) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: r, tailMode: d } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = r, p.tailMode = d);
  }
  function Hc(e, t, r) {
    var s = t.pendingProps, d = s.revealOrder, p = s.tail;
    if (vt(e, t, s.children, r), s = et.current, s & 2) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bc(e, r, t);
        else if (e.tag === 19) Bc(e, r, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      s &= 1;
    }
    if (Ge(et, s), !(t.mode & 1)) t.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (r = t.child, d = null; r !== null; ) e = r.alternate, e !== null && co(e) === null && (d = r), r = r.sibling;
        r = d, r === null ? (d = t.child, t.child = null) : (d = r.sibling, r.sibling = null), ks(t, !1, d, r, p);
        break;
      case "backwards":
        for (r = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && co(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = r, r = d, d = e;
        }
        ks(t, !0, r, null, p);
        break;
      case "together":
        ks(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function bo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, !(r & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, r = Pn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Pn(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function xg(e, t, r) {
    switch (t.tag) {
      case 3:
        Oc(t), cr();
        break;
      case 5:
        Jd(t);
        break;
      case 1:
        kt(t.type) && Zi(t);
        break;
      case 4:
        ns(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, d = t.memoizedProps.value;
        Ge(oo, s._currentValue), s._currentValue = d;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ge(et, et.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Mc(e, t, r) : (Ge(et, et.current & 1), e = ln(e, t, r), e !== null ? e.sibling : null);
        Ge(et, et.current & 1);
        break;
      case 19:
        if (s = (r & t.childLanes) !== 0, e.flags & 128) {
          if (s) return Hc(e, t, r);
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ge(et, et.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Rc(e, t, r);
    }
    return ln(e, t, r);
  }
  var Dc, Ss, $c, jc;
  Dc = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, Ss = function() {
  }, $c = function(e, t, r, s) {
    var d = e.memoizedProps;
    if (d !== s) {
      e = t.stateNode, jn(Qt.current);
      var p = null;
      switch (r) {
        case "input":
          d = je(e, d), s = je(e, s), p = [];
          break;
        case "select":
          d = ne({}, d, { value: void 0 }), s = ne({}, s, { value: void 0 }), p = [];
          break;
        case "textarea":
          d = Ee(e, d), s = Ee(e, s), p = [];
          break;
        default:
          typeof d.onClick != "function" && typeof s.onClick == "function" && (e.onclick = Xi);
      }
      pt(r, s);
      var v;
      r = null;
      for (F in d) if (!s.hasOwnProperty(F) && d.hasOwnProperty(F) && d[F] != null) if (F === "style") {
        var C = d[F];
        for (v in C) C.hasOwnProperty(v) && (r || (r = {}), r[v] = "");
      } else F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (l.hasOwnProperty(F) ? p || (p = []) : (p = p || []).push(F, null));
      for (F in s) {
        var L = s[F];
        if (C = d?.[F], s.hasOwnProperty(F) && L !== C && (L != null || C != null)) if (F === "style") if (C) {
          for (v in C) !C.hasOwnProperty(v) || L && L.hasOwnProperty(v) || (r || (r = {}), r[v] = "");
          for (v in L) L.hasOwnProperty(v) && C[v] !== L[v] && (r || (r = {}), r[v] = L[v]);
        } else r || (p || (p = []), p.push(
          F,
          r
        )), r = L;
        else F === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, C = C ? C.__html : void 0, L != null && C !== L && (p = p || []).push(F, L)) : F === "children" ? typeof L != "string" && typeof L != "number" || (p = p || []).push(F, "" + L) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (l.hasOwnProperty(F) ? (L != null && F === "onScroll" && Ye("scroll", e), p || C === L || (p = [])) : (p = p || []).push(F, L));
      }
      r && (p = p || []).push("style", r);
      var F = p;
      (t.updateQueue = F) && (t.flags |= 4);
    }
  }, jc = function(e, t, r, s) {
    r !== s && (t.flags |= 4);
  };
  function ii(e, t) {
    if (!Ze) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function bt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, s = 0;
    if (t) for (var d = e.child; d !== null; ) r |= d.lanes | d.childLanes, s |= d.subtreeFlags & 14680064, s |= d.flags & 14680064, d.return = e, d = d.sibling;
    else for (d = e.child; d !== null; ) r |= d.lanes | d.childLanes, s |= d.subtreeFlags, s |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= s, e.childLanes = r, t;
  }
  function wg(e, t, r) {
    var s = t.pendingProps;
    switch (Va(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bt(t), null;
      case 1:
        return kt(t.type) && Ji(), bt(t), null;
      case 3:
        return s = t.stateNode, gr(), Ke(wt), Ke(ht), os(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (ro(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (Ts(Ft), Ft = null))), Ss(e, t), bt(t), null;
      case 5:
        rs(t);
        var d = jn(Zr.current);
        if (r = t.type, e !== null && t.stateNode != null) $c(e, t, r, s, d), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return bt(t), null;
          }
          if (e = jn(Qt.current), ro(t)) {
            s = t.stateNode, r = t.type;
            var p = t.memoizedProps;
            switch (s[Xt] = t, s[Yr] = p, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                Ye("cancel", s), Ye("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", s);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Wr.length; d++) Ye(Wr[d], s);
                break;
              case "source":
                Ye("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Ye(
                  "error",
                  s
                ), Ye("load", s);
                break;
              case "details":
                Ye("toggle", s);
                break;
              case "input":
                Xe(s, p), Ye("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!p.multiple }, Ye("invalid", s);
                break;
              case "textarea":
                Pe(s, p), Ye("invalid", s);
            }
            pt(r, p), d = null;
            for (var v in p) if (p.hasOwnProperty(v)) {
              var C = p[v];
              v === "children" ? typeof C == "string" ? s.textContent !== C && (p.suppressHydrationWarning !== !0 && Ki(s.textContent, C, e), d = ["children", C]) : typeof C == "number" && s.textContent !== "" + C && (p.suppressHydrationWarning !== !0 && Ki(
                s.textContent,
                C,
                e
              ), d = ["children", "" + C]) : l.hasOwnProperty(v) && C != null && v === "onScroll" && Ye("scroll", s);
            }
            switch (r) {
              case "input":
                ze(s), D(s, p, !0);
                break;
              case "textarea":
                ze(s), We(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (s.onclick = Xi);
            }
            s = d, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            v = d.nodeType === 9 ? d : d.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qe(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = v.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = v.createElement(r, { is: s.is }) : (e = v.createElement(r), r === "select" && (v = e, s.multiple ? v.multiple = !0 : s.size && (v.size = s.size))) : e = v.createElementNS(e, r), e[Xt] = t, e[Yr] = s, Dc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (v = $t(r, s), r) {
                case "dialog":
                  Ye("cancel", e), Ye("close", e), d = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ye("load", e), d = s;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Wr.length; d++) Ye(Wr[d], e);
                  d = s;
                  break;
                case "source":
                  Ye("error", e), d = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Ye(
                    "error",
                    e
                  ), Ye("load", e), d = s;
                  break;
                case "details":
                  Ye("toggle", e), d = s;
                  break;
                case "input":
                  Xe(e, s), d = je(e, s), Ye("invalid", e);
                  break;
                case "option":
                  d = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, d = ne({}, s, { value: void 0 }), Ye("invalid", e);
                  break;
                case "textarea":
                  Pe(e, s), d = Ee(e, s), Ye("invalid", e);
                  break;
                default:
                  d = s;
              }
              pt(r, d), C = d;
              for (p in C) if (C.hasOwnProperty(p)) {
                var L = C[p];
                p === "style" ? He(e, L) : p === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && j(e, L)) : p === "children" ? typeof L == "string" ? (r !== "textarea" || L !== "") && G(e, L) : typeof L == "number" && G(e, "" + L) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (l.hasOwnProperty(p) ? L != null && p === "onScroll" && Ye("scroll", e) : L != null && x(e, p, L, v));
              }
              switch (r) {
                case "input":
                  ze(e), D(e, s, !1);
                  break;
                case "textarea":
                  ze(e), We(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + K(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, p = s.value, p != null ? ye(e, !!s.multiple, p, !1) : s.defaultValue != null && ye(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = Xi);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return bt(t), null;
      case 6:
        if (e && t.stateNode != null) jc(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (r = jn(Zr.current), jn(Qt.current), ro(t)) {
            if (s = t.stateNode, r = t.memoizedProps, s[Xt] = t, (p = s.nodeValue !== r) && (e = Pt, e !== null)) switch (e.tag) {
              case 3:
                Ki(s.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ki(s.nodeValue, r, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s), s[Xt] = t, t.stateNode = s;
        }
        return bt(t), null;
      case 13:
        if (Ke(et), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && Rt !== null && t.mode & 1 && !(t.flags & 128)) Ud(), cr(), t.flags |= 98560, p = !1;
          else if (p = ro(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(i(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
              p[Xt] = t;
            } else cr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            bt(t), p = !1;
          } else Ft !== null && (Ts(Ft), Ft = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = r, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (e === null || et.current & 1 ? st === 0 && (st = 3) : Hs())), t.updateQueue !== null && (t.flags |= 4), bt(t), null);
      case 4:
        return gr(), Ss(e, t), e === null && Vr(t.stateNode.containerInfo), bt(t), null;
      case 10:
        return Ja(t.type._context), bt(t), null;
      case 17:
        return kt(t.type) && Ji(), bt(t), null;
      case 19:
        if (Ke(et), p = t.memoizedState, p === null) return bt(t), null;
        if (s = (t.flags & 128) !== 0, v = p.rendering, v === null) if (s) ii(p, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (v = co(e), v !== null) {
              for (t.flags |= 128, ii(p, !1), s = v.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = r, r = t.child; r !== null; ) p = r, e = s, p.flags &= 14680066, v = p.alternate, v === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = v.childLanes, p.lanes = v.lanes, p.child = v.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = v.memoizedProps, p.memoizedState = v.memoizedState, p.updateQueue = v.updateQueue, p.type = v.type, e = v.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return Ge(et, et.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && rt() > br && (t.flags |= 128, s = !0, ii(p, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = co(v), e !== null) {
            if (t.flags |= 128, s = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), ii(p, !0), p.tail === null && p.tailMode === "hidden" && !v.alternate && !Ze) return bt(t), null;
          } else 2 * rt() - p.renderingStartTime > br && r !== 1073741824 && (t.flags |= 128, s = !0, ii(p, !1), t.lanes = 4194304);
          p.isBackwards ? (v.sibling = t.child, t.child = v) : (r = p.last, r !== null ? r.sibling = v : t.child = v, p.last = v);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = rt(), t.sibling = null, r = et.current, Ge(et, s ? r & 1 | 2 : r & 1), t) : (bt(t), null);
      case 22:
      case 23:
        return Bs(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? Nt & 1073741824 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function kg(e, t) {
    switch (Va(t), t.tag) {
      case 1:
        return kt(t.type) && Ji(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return gr(), Ke(wt), Ke(ht), os(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return rs(t), null;
      case 13:
        if (Ke(et), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          cr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ke(et), null;
      case 4:
        return gr(), null;
      case 10:
        return Ja(t.type._context), null;
      case 22:
      case 23:
        return Bs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var yo = !1, yt = !1, Sg = typeof WeakSet == "function" ? WeakSet : Set, fe = null;
  function hr(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (s) {
      nt(e, t, s);
    }
    else r.current = null;
  }
  function Es(e, t, r) {
    try {
      r();
    } catch (s) {
      nt(e, t, s);
    }
  }
  var qc = !1;
  function Eg(e, t) {
    if (Ba = Hi, e = vd(), Ia(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var s = r.getSelection && r.getSelection();
        if (s && s.rangeCount !== 0) {
          r = s.anchorNode;
          var d = s.anchorOffset, p = s.focusNode;
          s = s.focusOffset;
          try {
            r.nodeType, p.nodeType;
          } catch {
            r = null;
            break e;
          }
          var v = 0, C = -1, L = -1, F = 0, te = 0, re = e, Q = null;
          t: for (; ; ) {
            for (var ge; re !== r || d !== 0 && re.nodeType !== 3 || (C = v + d), re !== p || s !== 0 && re.nodeType !== 3 || (L = v + s), re.nodeType === 3 && (v += re.nodeValue.length), (ge = re.firstChild) !== null; )
              Q = re, re = ge;
            for (; ; ) {
              if (re === e) break t;
              if (Q === r && ++F === d && (C = v), Q === p && ++te === s && (L = v), (ge = re.nextSibling) !== null) break;
              re = Q, Q = re.parentNode;
            }
            re = ge;
          }
          r = C === -1 || L === -1 ? null : { start: C, end: L };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (Ha = { focusedElem: e, selectionRange: r }, Hi = !1, fe = t; fe !== null; ) if (t = fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, fe = e;
    else for (; fe !== null; ) {
      t = fe;
      try {
        var he = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (he !== null) {
              var be = he.memoizedProps, it = he.memoizedState, $ = t.stateNode, M = $.getSnapshotBeforeUpdate(t.elementType === t.type ? be : Ut(t.type, be), it);
              $.__reactInternalSnapshotBeforeUpdate = M;
            }
            break;
          case 3:
            var q = t.stateNode.containerInfo;
            q.nodeType === 1 ? q.textContent = "" : q.nodeType === 9 && q.documentElement && q.removeChild(q.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (se) {
        nt(t, t.return, se);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, fe = e;
        break;
      }
      fe = t.return;
    }
    return he = qc, qc = !1, he;
  }
  function oi(e, t, r) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var d = s = s.next;
      do {
        if ((d.tag & e) === e) {
          var p = d.destroy;
          d.destroy = void 0, p !== void 0 && Es(t, r, p);
        }
        d = d.next;
      } while (d !== s);
    }
  }
  function vo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function As(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Fc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Xt], delete t[Yr], delete t[qa], delete t[sg], delete t[lg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Cs(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Xi));
    else if (s !== 4 && (e = e.child, e !== null)) for (Cs(e, t, r), e = e.sibling; e !== null; ) Cs(e, t, r), e = e.sibling;
  }
  function zs(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (zs(e, t, r), e = e.sibling; e !== null; ) zs(e, t, r), e = e.sibling;
  }
  var mt = null, Wt = !1;
  function En(e, t, r) {
    for (r = r.child; r !== null; ) Vc(e, t, r), r = r.sibling;
  }
  function Vc(e, t, r) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function") try {
      Kt.onCommitFiberUnmount(Ni, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        yt || hr(r, t);
      case 6:
        var s = mt, d = Wt;
        mt = null, En(e, t, r), mt = s, Wt = d, mt !== null && (Wt ? (e = mt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : mt.removeChild(r.stateNode));
        break;
      case 18:
        mt !== null && (Wt ? (e = mt, r = r.stateNode, e.nodeType === 8 ? ja(e.parentNode, r) : e.nodeType === 1 && ja(e, r), Br(e)) : ja(mt, r.stateNode));
        break;
      case 4:
        s = mt, d = Wt, mt = r.stateNode.containerInfo, Wt = !0, En(e, t, r), mt = s, Wt = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yt && (s = r.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          d = s = s.next;
          do {
            var p = d, v = p.destroy;
            p = p.tag, v !== void 0 && (p & 2 || p & 4) && Es(r, t, v), d = d.next;
          } while (d !== s);
        }
        En(e, t, r);
        break;
      case 1:
        if (!yt && (hr(r, t), s = r.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = r.memoizedProps, s.state = r.memoizedState, s.componentWillUnmount();
        } catch (C) {
          nt(r, t, C);
        }
        En(e, t, r);
        break;
      case 21:
        En(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (yt = (s = yt) || r.memoizedState !== null, En(e, t, r), yt = s) : En(e, t, r);
        break;
      default:
        En(e, t, r);
    }
  }
  function Gc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Sg()), t.forEach(function(s) {
        var d = Og.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(d, d));
      });
    }
  }
  function Vt(e, t) {
    var r = t.deletions;
    if (r !== null) for (var s = 0; s < r.length; s++) {
      var d = r[s];
      try {
        var p = e, v = t, C = v;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 5:
              mt = C.stateNode, Wt = !1;
              break e;
            case 3:
              mt = C.stateNode.containerInfo, Wt = !0;
              break e;
            case 4:
              mt = C.stateNode.containerInfo, Wt = !0;
              break e;
          }
          C = C.return;
        }
        if (mt === null) throw Error(i(160));
        Vc(p, v, d), mt = null, Wt = !1;
        var L = d.alternate;
        L !== null && (L.return = null), d.return = null;
      } catch (F) {
        nt(d, t, F);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yc(t, e), t = t.sibling;
  }
  function Yc(e, t) {
    var r = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Vt(t, e), Zt(e), s & 4) {
          try {
            oi(3, e, e.return), vo(3, e);
          } catch (be) {
            nt(e, e.return, be);
          }
          try {
            oi(5, e, e.return);
          } catch (be) {
            nt(e, e.return, be);
          }
        }
        break;
      case 1:
        Vt(t, e), Zt(e), s & 512 && r !== null && hr(r, r.return);
        break;
      case 5:
        if (Vt(t, e), Zt(e), s & 512 && r !== null && hr(r, r.return), e.flags & 32) {
          var d = e.stateNode;
          try {
            G(d, "");
          } catch (be) {
            nt(e, e.return, be);
          }
        }
        if (s & 4 && (d = e.stateNode, d != null)) {
          var p = e.memoizedProps, v = r !== null ? r.memoizedProps : p, C = e.type, L = e.updateQueue;
          if (e.updateQueue = null, L !== null) try {
            C === "input" && p.type === "radio" && p.name != null && N(d, p), $t(C, v);
            var F = $t(C, p);
            for (v = 0; v < L.length; v += 2) {
              var te = L[v], re = L[v + 1];
              te === "style" ? He(d, re) : te === "dangerouslySetInnerHTML" ? j(d, re) : te === "children" ? G(d, re) : x(d, te, re, F);
            }
            switch (C) {
              case "input":
                B(d, p);
                break;
              case "textarea":
                Le(d, p);
                break;
              case "select":
                var Q = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!p.multiple;
                var ge = p.value;
                ge != null ? ye(d, !!p.multiple, ge, !1) : Q !== !!p.multiple && (p.defaultValue != null ? ye(
                  d,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : ye(d, !!p.multiple, p.multiple ? [] : "", !1));
            }
            d[Yr] = p;
          } catch (be) {
            nt(e, e.return, be);
          }
        }
        break;
      case 6:
        if (Vt(t, e), Zt(e), s & 4) {
          if (e.stateNode === null) throw Error(i(162));
          d = e.stateNode, p = e.memoizedProps;
          try {
            d.nodeValue = p;
          } catch (be) {
            nt(e, e.return, be);
          }
        }
        break;
      case 3:
        if (Vt(t, e), Zt(e), s & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Br(t.containerInfo);
        } catch (be) {
          nt(e, e.return, be);
        }
        break;
      case 4:
        Vt(t, e), Zt(e);
        break;
      case 13:
        Vt(t, e), Zt(e), d = e.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (Rs = rt())), s & 4 && Gc(e);
        break;
      case 22:
        if (te = r !== null && r.memoizedState !== null, e.mode & 1 ? (yt = (F = yt) || te, Vt(t, e), yt = F) : Vt(t, e), Zt(e), s & 8192) {
          if (F = e.memoizedState !== null, (e.stateNode.isHidden = F) && !te && e.mode & 1) for (fe = e, te = e.child; te !== null; ) {
            for (re = fe = te; fe !== null; ) {
              switch (Q = fe, ge = Q.child, Q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  oi(4, Q, Q.return);
                  break;
                case 1:
                  hr(Q, Q.return);
                  var he = Q.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    s = Q, r = Q.return;
                    try {
                      t = s, he.props = t.memoizedProps, he.state = t.memoizedState, he.componentWillUnmount();
                    } catch (be) {
                      nt(s, r, be);
                    }
                  }
                  break;
                case 5:
                  hr(Q, Q.return);
                  break;
                case 22:
                  if (Q.memoizedState !== null) {
                    Qc(re);
                    continue;
                  }
              }
              ge !== null ? (ge.return = Q, fe = ge) : Qc(re);
            }
            te = te.sibling;
          }
          e: for (te = null, re = e; ; ) {
            if (re.tag === 5) {
              if (te === null) {
                te = re;
                try {
                  d = re.stateNode, F ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (C = re.stateNode, L = re.memoizedProps.style, v = L != null && L.hasOwnProperty("display") ? L.display : null, C.style.display = Be("display", v));
                } catch (be) {
                  nt(e, e.return, be);
                }
              }
            } else if (re.tag === 6) {
              if (te === null) try {
                re.stateNode.nodeValue = F ? "" : re.memoizedProps;
              } catch (be) {
                nt(e, e.return, be);
              }
            } else if ((re.tag !== 22 && re.tag !== 23 || re.memoizedState === null || re === e) && re.child !== null) {
              re.child.return = re, re = re.child;
              continue;
            }
            if (re === e) break e;
            for (; re.sibling === null; ) {
              if (re.return === null || re.return === e) break e;
              te === re && (te = null), re = re.return;
            }
            te === re && (te = null), re.sibling.return = re.return, re = re.sibling;
          }
        }
        break;
      case 19:
        Vt(t, e), Zt(e), s & 4 && Gc(e);
        break;
      case 21:
        break;
      default:
        Vt(
          t,
          e
        ), Zt(e);
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Uc(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var d = s.stateNode;
            s.flags & 32 && (G(d, ""), s.flags &= -33);
            var p = Wc(e);
            zs(e, p, d);
            break;
          case 3:
          case 4:
            var v = s.stateNode.containerInfo, C = Wc(e);
            Cs(e, C, v);
            break;
          default:
            throw Error(i(161));
        }
      } catch (L) {
        nt(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ag(e, t, r) {
    fe = e, Kc(e);
  }
  function Kc(e, t, r) {
    for (var s = (e.mode & 1) !== 0; fe !== null; ) {
      var d = fe, p = d.child;
      if (d.tag === 22 && s) {
        var v = d.memoizedState !== null || yo;
        if (!v) {
          var C = d.alternate, L = C !== null && C.memoizedState !== null || yt;
          C = yo;
          var F = yt;
          if (yo = v, (yt = L) && !F) for (fe = d; fe !== null; ) v = fe, L = v.child, v.tag === 22 && v.memoizedState !== null ? Jc(d) : L !== null ? (L.return = v, fe = L) : Jc(d);
          for (; p !== null; ) fe = p, Kc(p), p = p.sibling;
          fe = d, yo = C, yt = F;
        }
        Xc(e);
      } else d.subtreeFlags & 8772 && p !== null ? (p.return = d, fe = p) : Xc(e);
    }
  }
  function Xc(e) {
    for (; fe !== null; ) {
      var t = fe;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || vo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !yt) if (r === null) s.componentDidMount();
              else {
                var d = t.elementType === t.type ? r.memoizedProps : Ut(t.type, r.memoizedProps);
                s.componentDidUpdate(d, r.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && Qd(t, p, s);
              break;
            case 3:
              var v = t.updateQueue;
              if (v !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                Qd(t, v, r);
              }
              break;
            case 5:
              var C = t.stateNode;
              if (r === null && t.flags & 4) {
                r = C;
                var L = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && r.focus();
                    break;
                  case "img":
                    L.src && (r.src = L.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var F = t.alternate;
                if (F !== null) {
                  var te = F.memoizedState;
                  if (te !== null) {
                    var re = te.dehydrated;
                    re !== null && Br(re);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(i(163));
          }
          yt || t.flags & 512 && As(t);
        } catch (Q) {
          nt(t, t.return, Q);
        }
      }
      if (t === e) {
        fe = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, fe = r;
        break;
      }
      fe = t.return;
    }
  }
  function Qc(e) {
    for (; fe !== null; ) {
      var t = fe;
      if (t === e) {
        fe = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, fe = r;
        break;
      }
      fe = t.return;
    }
  }
  function Jc(e) {
    for (; fe !== null; ) {
      var t = fe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              vo(4, t);
            } catch (L) {
              nt(t, r, L);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var d = t.return;
              try {
                s.componentDidMount();
              } catch (L) {
                nt(t, d, L);
              }
            }
            var p = t.return;
            try {
              As(t);
            } catch (L) {
              nt(t, p, L);
            }
            break;
          case 5:
            var v = t.return;
            try {
              As(t);
            } catch (L) {
              nt(t, v, L);
            }
        }
      } catch (L) {
        nt(t, t.return, L);
      }
      if (t === e) {
        fe = null;
        break;
      }
      var C = t.sibling;
      if (C !== null) {
        C.return = t.return, fe = C;
        break;
      }
      fe = t.return;
    }
  }
  var Cg = Math.ceil, xo = b.ReactCurrentDispatcher, Is = b.ReactCurrentOwner, Bt = b.ReactCurrentBatchConfig, $e = 0, ct = null, ot = null, gt = 0, Nt = 0, _r = vn(0), st = 0, ai = null, Fn = 0, wo = 0, Ps = 0, si = null, Et = null, Rs = 0, br = 1 / 0, dn = null, ko = !1, Ns = null, An = null, So = !1, Cn = null, Eo = 0, li = 0, Ls = null, Ao = -1, Co = 0;
  function xt() {
    return $e & 6 ? rt() : Ao !== -1 ? Ao : Ao = rt();
  }
  function zn(e) {
    return e.mode & 1 ? $e & 2 && gt !== 0 ? gt & -gt : cg.transition !== null ? (Co === 0 && (Co = Wl()), Co) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ed(e.type)), e) : 1;
  }
  function Gt(e, t, r, s) {
    if (50 < li) throw li = 0, Ls = null, Error(i(185));
    Nr(e, r, s), (!($e & 2) || e !== ct) && (e === ct && (!($e & 2) && (wo |= r), st === 4 && In(e, gt)), At(e, s), r === 1 && $e === 0 && !(t.mode & 1) && (br = rt() + 500, eo && wn()));
  }
  function At(e, t) {
    var r = e.callbackNode;
    cm(e, t);
    var s = Ti(e, e === ct ? gt : 0);
    if (s === 0) r !== null && ql(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (r != null && ql(r), t === 1) e.tag === 0 ? dg(eu.bind(null, e)) : Dd(eu.bind(null, e)), og(function() {
        !($e & 6) && wn();
      }), r = null;
      else {
        switch (Vl(s)) {
          case 1:
            r = pa;
            break;
          case 4:
            r = Fl;
            break;
          case 16:
            r = Ri;
            break;
          case 536870912:
            r = Ul;
            break;
          default:
            r = Ri;
        }
        r = lu(r, Zc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function Zc(e, t) {
    if (Ao = -1, Co = 0, $e & 6) throw Error(i(327));
    var r = e.callbackNode;
    if (yr() && e.callbackNode !== r) return null;
    var s = Ti(e, e === ct ? gt : 0);
    if (s === 0) return null;
    if (s & 30 || s & e.expiredLanes || t) t = zo(e, s);
    else {
      t = s;
      var d = $e;
      $e |= 2;
      var p = nu();
      (ct !== e || gt !== t) && (dn = null, br = rt() + 500, Wn(e, t));
      do
        try {
          Pg();
          break;
        } catch (C) {
          tu(e, C);
        }
      while (!0);
      Qa(), xo.current = p, $e = d, ot !== null ? t = 0 : (ct = null, gt = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (d = ma(e), d !== 0 && (s = d, t = Os(e, d))), t === 1) throw r = ai, Wn(e, 0), In(e, s), At(e, rt()), r;
      if (t === 6) In(e, s);
      else {
        if (d = e.current.alternate, !(s & 30) && !zg(d) && (t = zo(e, s), t === 2 && (p = ma(e), p !== 0 && (s = p, t = Os(e, p))), t === 1)) throw r = ai, Wn(e, 0), In(e, s), At(e, rt()), r;
        switch (e.finishedWork = d, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Vn(e, Et, dn);
            break;
          case 3:
            if (In(e, s), (s & 130023424) === s && (t = Rs + 500 - rt(), 10 < t)) {
              if (Ti(e, 0) !== 0) break;
              if (d = e.suspendedLanes, (d & s) !== s) {
                xt(), e.pingedLanes |= e.suspendedLanes & d;
                break;
              }
              e.timeoutHandle = $a(Vn.bind(null, e, Et, dn), t);
              break;
            }
            Vn(e, Et, dn);
            break;
          case 4:
            if (In(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, d = -1; 0 < s; ) {
              var v = 31 - jt(s);
              p = 1 << v, v = t[v], v > d && (d = v), s &= ~p;
            }
            if (s = d, s = rt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Cg(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = $a(Vn.bind(null, e, Et, dn), s);
              break;
            }
            Vn(e, Et, dn);
            break;
          case 5:
            Vn(e, Et, dn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return At(e, rt()), e.callbackNode === r ? Zc.bind(null, e) : null;
  }
  function Os(e, t) {
    var r = si;
    return e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256), e = zo(e, t), e !== 2 && (t = Et, Et = r, t !== null && Ts(t)), e;
  }
  function Ts(e) {
    Et === null ? Et = e : Et.push.apply(Et, e);
  }
  function zg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var s = 0; s < r.length; s++) {
          var d = r[s], p = d.getSnapshot;
          d = d.value;
          try {
            if (!qt(p(), d)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function In(e, t) {
    for (t &= ~Ps, t &= ~wo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - jt(t), s = 1 << r;
      e[r] = -1, t &= ~s;
    }
  }
  function eu(e) {
    if ($e & 6) throw Error(i(327));
    yr();
    var t = Ti(e, 0);
    if (!(t & 1)) return At(e, rt()), null;
    var r = zo(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = ma(e);
      s !== 0 && (t = s, r = Os(e, s));
    }
    if (r === 1) throw r = ai, Wn(e, 0), In(e, t), At(e, rt()), r;
    if (r === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, Et, dn), At(e, rt()), null;
  }
  function Ms(e, t) {
    var r = $e;
    $e |= 1;
    try {
      return e(t);
    } finally {
      $e = r, $e === 0 && (br = rt() + 500, eo && wn());
    }
  }
  function Un(e) {
    Cn !== null && Cn.tag === 0 && !($e & 6) && yr();
    var t = $e;
    $e |= 1;
    var r = Bt.transition, s = Ue;
    try {
      if (Bt.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = s, Bt.transition = r, $e = t, !($e & 6) && wn();
    }
  }
  function Bs() {
    Nt = _r.current, Ke(_r);
  }
  function Wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, ig(r)), ot !== null) for (r = ot.return; r !== null; ) {
      var s = r;
      switch (Va(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Ji();
          break;
        case 3:
          gr(), Ke(wt), Ke(ht), os();
          break;
        case 5:
          rs(s);
          break;
        case 4:
          gr();
          break;
        case 13:
          Ke(et);
          break;
        case 19:
          Ke(et);
          break;
        case 10:
          Ja(s.type._context);
          break;
        case 22:
        case 23:
          Bs();
      }
      r = r.return;
    }
    if (ct = e, ot = e = Pn(e.current, null), gt = Nt = t, st = 0, ai = null, Ps = wo = Fn = 0, Et = si = null, $n !== null) {
      for (t = 0; t < $n.length; t++) if (r = $n[t], s = r.interleaved, s !== null) {
        r.interleaved = null;
        var d = s.next, p = r.pending;
        if (p !== null) {
          var v = p.next;
          p.next = d, s.next = v;
        }
        r.pending = s;
      }
      $n = null;
    }
    return e;
  }
  function tu(e, t) {
    do {
      var r = ot;
      try {
        if (Qa(), uo.current = fo, po) {
          for (var s = tt.memoizedState; s !== null; ) {
            var d = s.queue;
            d !== null && (d.pending = null), s = s.next;
          }
          po = !1;
        }
        if (qn = 0, dt = at = tt = null, ei = !1, ti = 0, Is.current = null, r === null || r.return === null) {
          st = 1, ai = t, ot = null;
          break;
        }
        e: {
          var p = e, v = r.return, C = r, L = t;
          if (t = gt, C.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var F = L, te = C, re = te.tag;
            if (!(te.mode & 1) && (re === 0 || re === 11 || re === 15)) {
              var Q = te.alternate;
              Q ? (te.updateQueue = Q.updateQueue, te.memoizedState = Q.memoizedState, te.lanes = Q.lanes) : (te.updateQueue = null, te.memoizedState = null);
            }
            var ge = Ac(v);
            if (ge !== null) {
              ge.flags &= -257, Cc(ge, v, C, p, t), ge.mode & 1 && Ec(p, F, t), t = ge, L = F;
              var he = t.updateQueue;
              if (he === null) {
                var be = /* @__PURE__ */ new Set();
                be.add(L), t.updateQueue = be;
              } else he.add(L);
              break e;
            } else {
              if (!(t & 1)) {
                Ec(p, F, t), Hs();
                break e;
              }
              L = Error(i(426));
            }
          } else if (Ze && C.mode & 1) {
            var it = Ac(v);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), Cc(it, v, C, p, t), Ka(fr(L, C));
              break e;
            }
          }
          p = L = fr(L, C), st !== 4 && (st = 2), si === null ? si = [p] : si.push(p), p = v;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var $ = kc(p, L, t);
                Xd(p, $);
                break e;
              case 1:
                C = L;
                var M = p.type, q = p.stateNode;
                if (!(p.flags & 128) && (typeof M.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (An === null || !An.has(q)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var se = Sc(p, C, t);
                  Xd(p, se);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        iu(r);
      } catch (xe) {
        t = xe, ot === r && r !== null && (ot = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nu() {
    var e = xo.current;
    return xo.current = fo, e === null ? fo : e;
  }
  function Hs() {
    (st === 0 || st === 3 || st === 2) && (st = 4), ct === null || !(Fn & 268435455) && !(wo & 268435455) || In(ct, gt);
  }
  function zo(e, t) {
    var r = $e;
    $e |= 2;
    var s = nu();
    (ct !== e || gt !== t) && (dn = null, Wn(e, t));
    do
      try {
        Ig();
        break;
      } catch (d) {
        tu(e, d);
      }
    while (!0);
    if (Qa(), $e = r, xo.current = s, ot !== null) throw Error(i(261));
    return ct = null, gt = 0, st;
  }
  function Ig() {
    for (; ot !== null; ) ru(ot);
  }
  function Pg() {
    for (; ot !== null && !tm(); ) ru(ot);
  }
  function ru(e) {
    var t = su(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? iu(e) : ot = t, Is.current = null;
  }
  function iu(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (r = kg(r, t), r !== null) {
          r.flags &= 32767, ot = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (r = wg(r, t, Nt), r !== null) {
        ot = r;
        return;
      }
      if (t = t.sibling, t !== null) {
        ot = t;
        return;
      }
      ot = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function Vn(e, t, r) {
    var s = Ue, d = Bt.transition;
    try {
      Bt.transition = null, Ue = 1, Rg(e, t, r, s);
    } finally {
      Bt.transition = d, Ue = s;
    }
    return null;
  }
  function Rg(e, t, r, s) {
    do
      yr();
    while (Cn !== null);
    if ($e & 6) throw Error(i(327));
    r = e.finishedWork;
    var d = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = r.lanes | r.childLanes;
    if (um(e, p), e === ct && (ot = ct = null, gt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || So || (So = !0, lu(Ri, function() {
      return yr(), null;
    })), p = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || p) {
      p = Bt.transition, Bt.transition = null;
      var v = Ue;
      Ue = 1;
      var C = $e;
      $e |= 4, Is.current = null, Eg(e, r), Yc(r, e), Qm(Ha), Hi = !!Ba, Ha = Ba = null, e.current = r, Ag(r), nm(), $e = C, Ue = v, Bt.transition = p;
    } else e.current = r;
    if (So && (So = !1, Cn = e, Eo = d), p = e.pendingLanes, p === 0 && (An = null), om(r.stateNode), At(e, rt()), t !== null) for (s = e.onRecoverableError, r = 0; r < t.length; r++) d = t[r], s(d.value, { componentStack: d.stack, digest: d.digest });
    if (ko) throw ko = !1, e = Ns, Ns = null, e;
    return Eo & 1 && e.tag !== 0 && yr(), p = e.pendingLanes, p & 1 ? e === Ls ? li++ : (li = 0, Ls = e) : li = 0, wn(), null;
  }
  function yr() {
    if (Cn !== null) {
      var e = Vl(Eo), t = Bt.transition, r = Ue;
      try {
        if (Bt.transition = null, Ue = 16 > e ? 16 : e, Cn === null) var s = !1;
        else {
          if (e = Cn, Cn = null, Eo = 0, $e & 6) throw Error(i(331));
          var d = $e;
          for ($e |= 4, fe = e.current; fe !== null; ) {
            var p = fe, v = p.child;
            if (fe.flags & 16) {
              var C = p.deletions;
              if (C !== null) {
                for (var L = 0; L < C.length; L++) {
                  var F = C[L];
                  for (fe = F; fe !== null; ) {
                    var te = fe;
                    switch (te.tag) {
                      case 0:
                      case 11:
                      case 15:
                        oi(8, te, p);
                    }
                    var re = te.child;
                    if (re !== null) re.return = te, fe = re;
                    else for (; fe !== null; ) {
                      te = fe;
                      var Q = te.sibling, ge = te.return;
                      if (Fc(te), te === F) {
                        fe = null;
                        break;
                      }
                      if (Q !== null) {
                        Q.return = ge, fe = Q;
                        break;
                      }
                      fe = ge;
                    }
                  }
                }
                var he = p.alternate;
                if (he !== null) {
                  var be = he.child;
                  if (be !== null) {
                    he.child = null;
                    do {
                      var it = be.sibling;
                      be.sibling = null, be = it;
                    } while (be !== null);
                  }
                }
                fe = p;
              }
            }
            if (p.subtreeFlags & 2064 && v !== null) v.return = p, fe = v;
            else e: for (; fe !== null; ) {
              if (p = fe, p.flags & 2048) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  oi(9, p, p.return);
              }
              var $ = p.sibling;
              if ($ !== null) {
                $.return = p.return, fe = $;
                break e;
              }
              fe = p.return;
            }
          }
          var M = e.current;
          for (fe = M; fe !== null; ) {
            v = fe;
            var q = v.child;
            if (v.subtreeFlags & 2064 && q !== null) q.return = v, fe = q;
            else e: for (v = M; fe !== null; ) {
              if (C = fe, C.flags & 2048) try {
                switch (C.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vo(9, C);
                }
              } catch (xe) {
                nt(C, C.return, xe);
              }
              if (C === v) {
                fe = null;
                break e;
              }
              var se = C.sibling;
              if (se !== null) {
                se.return = C.return, fe = se;
                break e;
              }
              fe = C.return;
            }
          }
          if ($e = d, wn(), Kt && typeof Kt.onPostCommitFiberRoot == "function") try {
            Kt.onPostCommitFiberRoot(Ni, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Ue = r, Bt.transition = t;
      }
    }
    return !1;
  }
  function ou(e, t, r) {
    t = fr(r, t), t = kc(e, t, 1), e = Sn(e, t, 1), t = xt(), e !== null && (Nr(e, 1, t), At(e, t));
  }
  function nt(e, t, r) {
    if (e.tag === 3) ou(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ou(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (An === null || !An.has(s))) {
          e = fr(r, e), e = Sc(t, e, 1), t = Sn(t, e, 1), e = xt(), t !== null && (Nr(t, 1, e), At(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ng(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = xt(), e.pingedLanes |= e.suspendedLanes & r, ct === e && (gt & r) === r && (st === 4 || st === 3 && (gt & 130023424) === gt && 500 > rt() - Rs ? Wn(e, 0) : Ps |= r), At(e, t);
  }
  function au(e, t) {
    t === 0 && (e.mode & 1 ? (t = Oi, Oi <<= 1, !(Oi & 130023424) && (Oi = 4194304)) : t = 1);
    var r = xt();
    e = an(e, t), e !== null && (Nr(e, t, r), At(e, r));
  }
  function Lg(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), au(e, r);
  }
  function Og(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, d = e.memoizedState;
        d !== null && (r = d.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(t), au(e, r);
  }
  var su;
  su = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || wt.current) St = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return St = !1, xg(e, t, r);
      St = !!(e.flags & 131072);
    }
    else St = !1, Ze && t.flags & 1048576 && $d(t, no, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        bo(e, t), e = t.pendingProps;
        var d = sr(t, ht.current);
        mr(t, r), d = ls(null, t, s, e, d, r);
        var p = ds();
        return t.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, kt(s) ? (p = !0, Zi(t)) : p = !1, t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, ts(t), d.updater = ho, t.stateNode = d, d._reactInternals = t, fs(t, s, e, r), t = ys(null, t, s, !0, p, r)) : (t.tag = 0, Ze && p && Wa(t), vt(null, t, d, r), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (bo(e, t), e = t.pendingProps, d = s._init, s = d(s._payload), t.type = s, d = t.tag = Mg(s), e = Ut(s, e), d) {
            case 0:
              t = bs(null, t, s, e, r);
              break e;
            case 1:
              t = Lc(null, t, s, e, r);
              break e;
            case 11:
              t = zc(null, t, s, e, r);
              break e;
            case 14:
              t = Ic(null, t, s, Ut(s.type, e), r);
              break e;
          }
          throw Error(i(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Ut(s, d), bs(e, t, s, d, r);
      case 1:
        return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Ut(s, d), Lc(e, t, s, d, r);
      case 3:
        e: {
          if (Oc(t), e === null) throw Error(i(387));
          s = t.pendingProps, p = t.memoizedState, d = p.element, Kd(e, t), lo(t, s, null, r);
          var v = t.memoizedState;
          if (s = v.element, p.isDehydrated) if (p = { element: s, isDehydrated: !1, cache: v.cache, pendingSuspenseBoundaries: v.pendingSuspenseBoundaries, transitions: v.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            d = fr(Error(i(423)), t), t = Tc(e, t, s, r, d);
            break e;
          } else if (s !== d) {
            d = fr(Error(i(424)), t), t = Tc(e, t, s, r, d);
            break e;
          } else for (Rt = yn(t.stateNode.containerInfo.firstChild), Pt = t, Ze = !0, Ft = null, r = Gd(t, null, s, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (cr(), s === d) {
              t = ln(e, t, r);
              break e;
            }
            vt(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Jd(t), e === null && Ya(t), s = t.type, d = t.pendingProps, p = e !== null ? e.memoizedProps : null, v = d.children, Da(s, d) ? v = null : p !== null && Da(s, p) && (t.flags |= 32), Nc(e, t), vt(e, t, v, r), t.child;
      case 6:
        return e === null && Ya(t), null;
      case 13:
        return Mc(e, t, r);
      case 4:
        return ns(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = ur(t, null, s, r) : vt(e, t, s, r), t.child;
      case 11:
        return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Ut(s, d), zc(e, t, s, d, r);
      case 7:
        return vt(e, t, t.pendingProps, r), t.child;
      case 8:
        return vt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return vt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (s = t.type._context, d = t.pendingProps, p = t.memoizedProps, v = d.value, Ge(oo, s._currentValue), s._currentValue = v, p !== null) if (qt(p.value, v)) {
            if (p.children === d.children && !wt.current) {
              t = ln(e, t, r);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var C = p.dependencies;
            if (C !== null) {
              v = p.child;
              for (var L = C.firstContext; L !== null; ) {
                if (L.context === s) {
                  if (p.tag === 1) {
                    L = sn(-1, r & -r), L.tag = 2;
                    var F = p.updateQueue;
                    if (F !== null) {
                      F = F.shared;
                      var te = F.pending;
                      te === null ? L.next = L : (L.next = te.next, te.next = L), F.pending = L;
                    }
                  }
                  p.lanes |= r, L = p.alternate, L !== null && (L.lanes |= r), Za(
                    p.return,
                    r,
                    t
                  ), C.lanes |= r;
                  break;
                }
                L = L.next;
              }
            } else if (p.tag === 10) v = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (v = p.return, v === null) throw Error(i(341));
              v.lanes |= r, C = v.alternate, C !== null && (C.lanes |= r), Za(v, r, t), v = p.sibling;
            } else v = p.child;
            if (v !== null) v.return = p;
            else for (v = p; v !== null; ) {
              if (v === t) {
                v = null;
                break;
              }
              if (p = v.sibling, p !== null) {
                p.return = v.return, v = p;
                break;
              }
              v = v.return;
            }
            p = v;
          }
          vt(e, t, d.children, r), t = t.child;
        }
        return t;
      case 9:
        return d = t.type, s = t.pendingProps.children, mr(t, r), d = Tt(d), s = s(d), t.flags |= 1, vt(e, t, s, r), t.child;
      case 14:
        return s = t.type, d = Ut(s, t.pendingProps), d = Ut(s.type, d), Ic(e, t, s, d, r);
      case 15:
        return Pc(e, t, t.type, t.pendingProps, r);
      case 17:
        return s = t.type, d = t.pendingProps, d = t.elementType === s ? d : Ut(s, d), bo(e, t), t.tag = 1, kt(s) ? (e = !0, Zi(t)) : e = !1, mr(t, r), xc(t, s, d), fs(t, s, d, r), ys(null, t, s, !0, e, r);
      case 19:
        return Hc(e, t, r);
      case 22:
        return Rc(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function lu(e, t) {
    return jl(e, t);
  }
  function Tg(e, t, r, s) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, r, s) {
    return new Tg(e, t, r, s);
  }
  function Ds(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Mg(e) {
    if (typeof e == "function") return Ds(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ae) return 11;
      if (e === Y) return 14;
    }
    return 2;
  }
  function Pn(e, t) {
    var r = e.alternate;
    return r === null ? (r = Ht(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function Io(e, t, r, s, d, p) {
    var v = 2;
    if (s = e, typeof e == "function") Ds(e) && (v = 1);
    else if (typeof e == "string") v = 5;
    else e: switch (e) {
      case O:
        return Gn(r.children, d, p, t);
      case H:
        v = 8, d |= 8;
        break;
      case W:
        return e = Ht(12, r, t, d | 2), e.elementType = W, e.lanes = p, e;
      case ie:
        return e = Ht(13, r, t, d), e.elementType = ie, e.lanes = p, e;
      case pe:
        return e = Ht(19, r, t, d), e.elementType = pe, e.lanes = p, e;
      case J:
        return Po(r, d, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Z:
            v = 10;
            break e;
          case ce:
            v = 9;
            break e;
          case ae:
            v = 11;
            break e;
          case Y:
            v = 14;
            break e;
          case ee:
            v = 16, s = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Ht(v, r, t, d), t.elementType = e, t.type = s, t.lanes = p, t;
  }
  function Gn(e, t, r, s) {
    return e = Ht(7, e, s, t), e.lanes = r, e;
  }
  function Po(e, t, r, s) {
    return e = Ht(22, e, s, t), e.elementType = J, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function $s(e, t, r) {
    return e = Ht(6, e, null, t), e.lanes = r, e;
  }
  function js(e, t, r) {
    return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Bg(e, t, r, s, d) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ga(0), this.expirationTimes = ga(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ga(0), this.identifierPrefix = s, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function qs(e, t, r, s, d, p, v, C, L) {
    return e = new Bg(e, t, r, C, L), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = Ht(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: s, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ts(p), e;
  }
  function Hg(e, t, r) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: A, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: r };
  }
  function du(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (kt(r)) return Bd(e, r, t);
    }
    return t;
  }
  function cu(e, t, r, s, d, p, v, C, L) {
    return e = qs(r, s, !0, e, d, p, v, C, L), e.context = du(null), r = e.current, s = xt(), d = zn(r), p = sn(s, d), p.callback = t ?? null, Sn(r, p, d), e.current.lanes = d, Nr(e, d, s), At(e, s), e;
  }
  function Ro(e, t, r, s) {
    var d = t.current, p = xt(), v = zn(d);
    return r = du(r), t.context === null ? t.context = r : t.pendingContext = r, t = sn(p, v), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Sn(d, t, v), e !== null && (Gt(e, d, v, p), so(e, d, v)), v;
  }
  function No(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function uu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Fs(e, t) {
    uu(e, t), (e = e.alternate) && uu(e, t);
  }
  function Dg() {
    return null;
  }
  var pu = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Us(e) {
    this._internalRoot = e;
  }
  Lo.prototype.render = Us.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Ro(e, t, null, null);
  }, Lo.prototype.unmount = Us.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Un(function() {
        Ro(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function Lo(e) {
    this._internalRoot = e;
  }
  Lo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Kl();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < hn.length && t !== 0 && t < hn[r].priority; r++) ;
      hn.splice(r, 0, e), r === 0 && Jl(e);
    }
  };
  function Ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Oo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function mu() {
  }
  function $g(e, t, r, s, d) {
    if (d) {
      if (typeof s == "function") {
        var p = s;
        s = function() {
          var F = No(v);
          p.call(F);
        };
      }
      var v = cu(t, s, e, 0, null, !1, !1, "", mu);
      return e._reactRootContainer = v, e[tn] = v.current, Vr(e.nodeType === 8 ? e.parentNode : e), Un(), v;
    }
    for (; d = e.lastChild; ) e.removeChild(d);
    if (typeof s == "function") {
      var C = s;
      s = function() {
        var F = No(L);
        C.call(F);
      };
    }
    var L = qs(e, 0, !1, null, null, !1, !1, "", mu);
    return e._reactRootContainer = L, e[tn] = L.current, Vr(e.nodeType === 8 ? e.parentNode : e), Un(function() {
      Ro(t, L, r, s);
    }), L;
  }
  function To(e, t, r, s, d) {
    var p = r._reactRootContainer;
    if (p) {
      var v = p;
      if (typeof d == "function") {
        var C = d;
        d = function() {
          var L = No(v);
          C.call(L);
        };
      }
      Ro(t, v, e, d);
    } else v = $g(r, t, e, d, s);
    return No(v);
  }
  Gl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Rr(t.pendingLanes);
          r !== 0 && (fa(t, r | 1), At(t, rt()), !($e & 6) && (br = rt() + 500, wn()));
        }
        break;
      case 13:
        Un(function() {
          var s = an(e, 1);
          if (s !== null) {
            var d = xt();
            Gt(s, e, 1, d);
          }
        }), Fs(e, 1);
    }
  }, ha = function(e) {
    if (e.tag === 13) {
      var t = an(e, 134217728);
      if (t !== null) {
        var r = xt();
        Gt(t, e, 134217728, r);
      }
      Fs(e, 134217728);
    }
  }, Yl = function(e) {
    if (e.tag === 13) {
      var t = zn(e), r = an(e, t);
      if (r !== null) {
        var s = xt();
        Gt(r, e, t, s);
      }
      Fs(e, t);
    }
  }, Kl = function() {
    return Ue;
  }, Xl = function(e, t) {
    var r = Ue;
    try {
      return Ue = e, t();
    } finally {
      Ue = r;
    }
  }, Xn = function(e, t, r) {
    switch (t) {
      case "input":
        if (B(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var s = r[t];
            if (s !== e && s.form === e.form) {
              var d = Qi(s);
              if (!d) throw Error(i(90));
              Re(s), B(s, d);
            }
          }
        }
        break;
      case "textarea":
        Le(e, r);
        break;
      case "select":
        t = r.value, t != null && ye(e, !!r.multiple, t, !1);
    }
  }, zi = Ms, Tl = Un;
  var jg = { usingClientEntryPoint: !1, Events: [Kr, or, Qi, Cr, Qn, Ms] }, di = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qg = { bundleType: di.bundleType, version: di.version, rendererPackageName: di.rendererPackageName, rendererConfig: di.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Dl(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: di.findFiberByHostInstance || Dg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mo.isDisabled && Mo.supportsFiber) try {
      Ni = Mo.inject(qg), Kt = Mo;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jg, Ct.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ws(t)) throw Error(i(200));
    return Hg(e, t, null, r);
  }, Ct.createRoot = function(e, t) {
    if (!Ws(e)) throw Error(i(299));
    var r = !1, s = "", d = pu;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = qs(e, 1, !1, null, null, r, !1, s, d), e[tn] = t.current, Vr(e.nodeType === 8 ? e.parentNode : e), new Us(t);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Dl(t), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return Un(e);
  }, Ct.hydrate = function(e, t, r) {
    if (!Oo(t)) throw Error(i(200));
    return To(null, e, t, !0, r);
  }, Ct.hydrateRoot = function(e, t, r) {
    if (!Ws(e)) throw Error(i(405));
    var s = r != null && r.hydratedSources || null, d = !1, p = "", v = pu;
    if (r != null && (r.unstable_strictMode === !0 && (d = !0), r.identifierPrefix !== void 0 && (p = r.identifierPrefix), r.onRecoverableError !== void 0 && (v = r.onRecoverableError)), t = cu(t, null, e, 1, r ?? null, d, !1, p, v), e[tn] = t.current, Vr(e), s) for (e = 0; e < s.length; e++) r = s[e], d = r._getVersion, d = d(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, d] : t.mutableSourceEagerHydrationData.push(
      r,
      d
    );
    return new Lo(t);
  }, Ct.render = function(e, t, r) {
    if (!Oo(t)) throw Error(i(200));
    return To(null, e, t, !1, r);
  }, Ct.unmountComponentAtNode = function(e) {
    if (!Oo(e)) throw Error(i(40));
    return e._reactRootContainer ? (Un(function() {
      To(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, Ct.unstable_batchedUpdates = Ms, Ct.unstable_renderSubtreeIntoContainer = function(e, t, r, s) {
    if (!Oo(r)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return To(e, t, r, !1, s);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var xu;
function Jo() {
  if (xu) return Ks.exports;
  xu = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (n) {
        console.error(n);
      }
  }
  return o(), Ks.exports = tf(), Ks.exports;
}
var wu;
function nf() {
  if (wu) return Bo;
  wu = 1;
  var o = Jo();
  return Bo.createRoot = o.createRoot, Bo.hydrateRoot = o.hydrateRoot, Bo;
}
var rf = nf();
const of = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', af = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", sf = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var ft = zt(), Js = { exports: {} }, ui = {}, wi = { exports: {} }, lf = wi.exports, ku;
function zl() {
  return ku || (ku = 1, function(o, n) {
    (function(i, a) {
      a(n);
    })(lf, function(i) {
      function a(K) {
        return function(_e, ze, Re, Te, je, Xe, N) {
          return K(_e, ze, N);
        };
      }
      function l(K) {
        return function(_e, ze, Re, Te) {
          if (!_e || !ze || typeof _e != "object" || typeof ze != "object")
            return K(_e, ze, Re, Te);
          var je = Te.get(_e), Xe = Te.get(ze);
          if (je && Xe)
            return je === ze && Xe === _e;
          Te.set(_e, ze), Te.set(ze, _e);
          var N = K(_e, ze, Re, Te);
          return Te.delete(_e), Te.delete(ze), N;
        };
      }
      function c(K, le) {
        var _e = {};
        for (var ze in K)
          _e[ze] = K[ze];
        for (var ze in le)
          _e[ze] = le[ze];
        return _e;
      }
      function u(K) {
        return K.constructor === Object || K.constructor == null;
      }
      function m(K) {
        return typeof K.then == "function";
      }
      function g(K, le) {
        return K === le || K !== K && le !== le;
      }
      var _ = "[object Arguments]", f = "[object Boolean]", y = "[object Date]", k = "[object RegExp]", z = "[object Map]", R = "[object Number]", P = "[object Object]", E = "[object Set]", S = "[object String]", h = Object.prototype.toString;
      function x(K) {
        var le = K.areArraysEqual, _e = K.areDatesEqual, ze = K.areMapsEqual, Re = K.areObjectsEqual, Te = K.areRegExpsEqual, je = K.areSetsEqual, Xe = K.createIsNestedEqual, N = Xe(B);
        function B(D, X, ue) {
          if (D === X)
            return !0;
          if (!D || !X || typeof D != "object" || typeof X != "object")
            return D !== D && X !== X;
          if (u(D) && u(X))
            return Re(D, X, N, ue);
          var ye = Array.isArray(D), Ee = Array.isArray(X);
          if (ye || Ee)
            return ye === Ee && le(D, X, N, ue);
          var Pe = h.call(D);
          return Pe !== h.call(X) ? !1 : Pe === y ? _e(D, X, N, ue) : Pe === k ? Te(D, X, N, ue) : Pe === z ? ze(D, X, N, ue) : Pe === E ? je(D, X, N, ue) : Pe === P || Pe === _ ? m(D) || m(X) ? !1 : Re(D, X, N, ue) : Pe === f || Pe === R || Pe === S ? g(D.valueOf(), X.valueOf()) : !1;
        }
        return B;
      }
      function b(K, le, _e, ze) {
        var Re = K.length;
        if (le.length !== Re)
          return !1;
        for (; Re-- > 0; )
          if (!_e(K[Re], le[Re], Re, Re, K, le, ze))
            return !1;
        return !0;
      }
      var w = l(b);
      function A(K, le) {
        return g(K.valueOf(), le.valueOf());
      }
      function O(K, le, _e, ze) {
        var Re = K.size === le.size;
        if (!Re)
          return !1;
        if (!K.size)
          return !0;
        var Te = {}, je = 0;
        return K.forEach(function(Xe, N) {
          if (Re) {
            var B = !1, D = 0;
            le.forEach(function(X, ue) {
              !B && !Te[D] && (B = _e(N, ue, je, D, K, le, ze) && _e(Xe, X, N, ue, K, le, ze)) && (Te[D] = !0), D++;
            }), je++, Re = B;
          }
        }), Re;
      }
      var H = l(O), W = "_owner", Z = Object.prototype.hasOwnProperty;
      function ce(K, le, _e, ze) {
        var Re = Object.keys(K), Te = Re.length;
        if (Object.keys(le).length !== Te)
          return !1;
        for (var je; Te-- > 0; ) {
          if (je = Re[Te], je === W) {
            var Xe = !!K.$$typeof, N = !!le.$$typeof;
            if ((Xe || N) && Xe !== N)
              return !1;
          }
          if (!Z.call(le, je) || !_e(K[je], le[je], je, je, K, le, ze))
            return !1;
        }
        return !0;
      }
      var ae = l(ce);
      function ie(K, le) {
        return K.source === le.source && K.flags === le.flags;
      }
      function pe(K, le, _e, ze) {
        var Re = K.size === le.size;
        if (!Re)
          return !1;
        if (!K.size)
          return !0;
        var Te = {};
        return K.forEach(function(je, Xe) {
          if (Re) {
            var N = !1, B = 0;
            le.forEach(function(D, X) {
              !N && !Te[B] && (N = _e(je, D, Xe, X, K, le, ze)) && (Te[B] = !0), B++;
            }), Re = N;
          }
        }), Re;
      }
      var Y = l(pe), ee = Object.freeze({
        areArraysEqual: b,
        areDatesEqual: A,
        areMapsEqual: O,
        areObjectsEqual: ce,
        areRegExpsEqual: ie,
        areSetsEqual: pe,
        createIsNestedEqual: a
      }), J = Object.freeze({
        areArraysEqual: w,
        areDatesEqual: A,
        areMapsEqual: H,
        areObjectsEqual: ae,
        areRegExpsEqual: ie,
        areSetsEqual: Y,
        createIsNestedEqual: a
      }), V = x(ee);
      function de(K, le) {
        return V(K, le, void 0);
      }
      var ne = x(c(ee, { createIsNestedEqual: function() {
        return g;
      } }));
      function T(K, le) {
        return ne(K, le, void 0);
      }
      var U = x(J);
      function ve(K, le) {
        return U(K, le, /* @__PURE__ */ new WeakMap());
      }
      var we = x(c(J, {
        createIsNestedEqual: function() {
          return g;
        }
      }));
      function Ae(K, le) {
        return we(K, le, /* @__PURE__ */ new WeakMap());
      }
      function Ie(K) {
        return x(c(ee, K(ee)));
      }
      function Me(K) {
        var le = x(c(J, K(J)));
        return function(_e, ze, Re) {
          return Re === void 0 && (Re = /* @__PURE__ */ new WeakMap()), le(_e, ze, Re);
        };
      }
      i.circularDeepEqual = ve, i.circularShallowEqual = Ae, i.createCustomCircularEqual = Me, i.createCustomEqual = Ie, i.deepEqual = de, i.sameValueZeroEqual = g, i.shallowEqual = T, Object.defineProperty(i, "__esModule", { value: !0 });
    });
  }(wi, wi.exports)), wi.exports;
}
var Ho = { exports: {} }, Su;
function aa() {
  if (Su) return Ho.exports;
  Su = 1;
  function o(i) {
    var a, l, c = "";
    if (typeof i == "string" || typeof i == "number") c += i;
    else if (typeof i == "object") if (Array.isArray(i)) {
      var u = i.length;
      for (a = 0; a < u; a++) i[a] && (l = o(i[a])) && (c && (c += " "), c += l);
    } else for (l in i) i[l] && (c && (c += " "), c += l);
    return c;
  }
  function n() {
    for (var i, a, l = 0, c = "", u = arguments.length; l < u; l++) (i = arguments[l]) && (a = o(i)) && (c && (c += " "), c += a);
    return c;
  }
  return Ho.exports = n, Ho.exports.clsx = n, Ho.exports;
}
var De = {}, Zs, Eu;
function df() {
  return Eu || (Eu = 1, Zs = function(n, i, a) {
    return n === i ? !0 : n.className === i.className && a(n.style, i.style) && n.width === i.width && n.autoSize === i.autoSize && n.cols === i.cols && n.draggableCancel === i.draggableCancel && n.draggableHandle === i.draggableHandle && a(n.verticalCompact, i.verticalCompact) && a(n.compactType, i.compactType) && a(n.layout, i.layout) && a(n.margin, i.margin) && a(n.containerPadding, i.containerPadding) && n.rowHeight === i.rowHeight && n.maxRows === i.maxRows && n.isBounded === i.isBounded && n.isDraggable === i.isDraggable && n.isResizable === i.isResizable && n.allowOverlap === i.allowOverlap && n.preventCollision === i.preventCollision && n.useCSSTransforms === i.useCSSTransforms && n.transformScale === i.transformScale && n.isDroppable === i.isDroppable && a(n.resizeHandles, i.resizeHandles) && a(n.resizeHandle, i.resizeHandle) && n.onLayoutChange === i.onLayoutChange && n.onDragStart === i.onDragStart && n.onDrag === i.onDrag && n.onDragStop === i.onDragStop && n.onResizeStart === i.onResizeStart && n.onResize === i.onResize && n.onResizeStop === i.onResizeStop && n.onDrop === i.onDrop && a(n.droppingItem, i.droppingItem) && a(n.innerRef, i.innerRef);
  }), Zs;
}
var Au;
function Er() {
  if (Au) return De;
  Au = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.bottom = g, De.childrenEqual = z, De.cloneLayout = _, De.cloneLayoutItem = k, De.collides = P, De.compact = E, De.compactItem = x, De.compactType = Te, De.correctBounds = b, De.fastPositionEqual = R, De.fastRGLPropsEqual = void 0, De.getAllCollisions = O, De.getFirstCollision = A, De.getLayoutItem = w, De.getStatics = H, De.modifyLayout = f, De.moveElement = W, De.moveElementAwayFromCollision = Z, De.noop = void 0, De.perc = ce, De.resizeItemInDirection = Ae, De.setTopLeft = Me, De.setTransform = Ie, De.sortLayoutItems = K, De.sortLayoutItemsByColRow = _e, De.sortLayoutItemsByRowCol = le, De.synchronizeLayoutWithChildren = ze, De.validateLayout = Re, De.withLayoutItem = y;
  var o = /* @__PURE__ */ zl(), n = i(zt());
  function i(N) {
    return N && N.__esModule ? N : { default: N };
  }
  function a(N, B) {
    var D = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(N);
      B && (X = X.filter(function(ue) {
        return Object.getOwnPropertyDescriptor(N, ue).enumerable;
      })), D.push.apply(D, X);
    }
    return D;
  }
  function l(N) {
    for (var B = 1; B < arguments.length; B++) {
      var D = arguments[B] != null ? arguments[B] : {};
      B % 2 ? a(Object(D), !0).forEach(function(X) {
        c(N, X, D[X]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(D)) : a(Object(D)).forEach(function(X) {
        Object.defineProperty(N, X, Object.getOwnPropertyDescriptor(D, X));
      });
    }
    return N;
  }
  function c(N, B, D) {
    return (B = u(B)) in N ? Object.defineProperty(N, B, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : N[B] = D, N;
  }
  function u(N) {
    var B = m(N, "string");
    return typeof B == "symbol" ? B : B + "";
  }
  function m(N, B) {
    if (typeof N != "object" || !N) return N;
    var D = N[Symbol.toPrimitive];
    if (D !== void 0) {
      var X = D.call(N, B);
      if (typeof X != "object") return X;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (B === "string" ? String : Number)(N);
  }
  function g(N) {
    let B = 0, D;
    for (let X = 0, ue = N.length; X < ue; X++)
      D = N[X].y + N[X].h, D > B && (B = D);
    return B;
  }
  function _(N) {
    const B = Array(N.length);
    for (let D = 0, X = N.length; D < X; D++)
      B[D] = k(N[D]);
    return B;
  }
  function f(N, B) {
    const D = Array(N.length);
    for (let X = 0, ue = N.length; X < ue; X++)
      B.i === N[X].i ? D[X] = B : D[X] = N[X];
    return D;
  }
  function y(N, B, D) {
    let X = w(N, B);
    return X ? (X = D(k(X)), N = f(N, X), [N, X]) : [N, null];
  }
  function k(N) {
    return {
      w: N.w,
      h: N.h,
      x: N.x,
      y: N.y,
      i: N.i,
      minW: N.minW,
      maxW: N.maxW,
      minH: N.minH,
      maxH: N.maxH,
      moved: !!N.moved,
      static: !!N.static,
      // These can be null/undefined
      isDraggable: N.isDraggable,
      isResizable: N.isResizable,
      resizeHandles: N.resizeHandles,
      isBounded: N.isBounded
    };
  }
  function z(N, B) {
    return (0, o.deepEqual)(n.default.Children.map(N, (D) => D?.key), n.default.Children.map(B, (D) => D?.key)) && (0, o.deepEqual)(n.default.Children.map(N, (D) => D?.props["data-grid"]), n.default.Children.map(B, (D) => D?.props["data-grid"]));
  }
  De.fastRGLPropsEqual = df();
  function R(N, B) {
    return N.left === B.left && N.top === B.top && N.width === B.width && N.height === B.height;
  }
  function P(N, B) {
    return !(N.i === B.i || N.x + N.w <= B.x || N.x >= B.x + B.w || N.y + N.h <= B.y || N.y >= B.y + B.h);
  }
  function E(N, B, D, X) {
    const ue = H(N);
    let ye = g(ue);
    const Ee = K(N, B), Pe = Array(N.length);
    for (let Le = 0, We = Ee.length; Le < We; Le++) {
      let Qe = k(Ee[Le]);
      Qe.static || (Qe = x(ue, Qe, B, D, Ee, X, ye), ye = Math.max(ye, Qe.y + Qe.h), ue.push(Qe)), Pe[N.indexOf(Ee[Le])] = Qe, Qe.moved = !1;
    }
    return Pe;
  }
  const S = {
    x: "w",
    y: "h"
  };
  function h(N, B, D, X) {
    const ue = S[X];
    B[X] += 1;
    const ye = N.map((Ee) => Ee.i).indexOf(B.i);
    for (let Ee = ye + 1; Ee < N.length; Ee++) {
      const Pe = N[Ee];
      if (!Pe.static) {
        if (Pe.y > B.y + B.h) break;
        P(B, Pe) && h(N, Pe, D + B[ue], X);
      }
    }
    B[X] = D;
  }
  function x(N, B, D, X, ue, ye, Ee) {
    const Pe = D === "vertical", Le = D === "horizontal";
    if (Pe)
      for (typeof Ee == "number" ? B.y = Math.min(Ee, B.y) : B.y = Math.min(g(N), B.y); B.y > 0 && !A(N, B); )
        B.y--;
    else if (Le)
      for (; B.x > 0 && !A(N, B); )
        B.x--;
    let We;
    for (; (We = A(N, B)) && !(D === null && ye); )
      if (Le ? h(ue, B, We.x + We.w, "x") : h(ue, B, We.y + We.h, "y"), Le && B.x + B.w > X)
        for (B.x = X - B.w, B.y++; B.x > 0 && !A(N, B); )
          B.x--;
    return B.y = Math.max(B.y, 0), B.x = Math.max(B.x, 0), B;
  }
  function b(N, B) {
    const D = H(N);
    for (let X = 0, ue = N.length; X < ue; X++) {
      const ye = N[X];
      if (ye.x + ye.w > B.cols && (ye.x = B.cols - ye.w), ye.x < 0 && (ye.x = 0, ye.w = B.cols), !ye.static) D.push(ye);
      else
        for (; A(D, ye); )
          ye.y++;
    }
    return N;
  }
  function w(N, B) {
    for (let D = 0, X = N.length; D < X; D++)
      if (N[D].i === B) return N[D];
  }
  function A(N, B) {
    for (let D = 0, X = N.length; D < X; D++)
      if (P(N[D], B)) return N[D];
  }
  function O(N, B) {
    return N.filter((D) => P(D, B));
  }
  function H(N) {
    return N.filter((B) => B.static);
  }
  function W(N, B, D, X, ue, ye, Ee, Pe, Le) {
    if (B.static && B.isDraggable !== !0 || B.y === X && B.x === D) return N;
    "Moving element ".concat(B.i, " to [").concat(String(D), ",").concat(String(X), "] from [").concat(B.x, ",").concat(B.y, "]");
    const We = B.x, Qe = B.y;
    typeof D == "number" && (B.x = D), typeof X == "number" && (B.y = X), B.moved = !0;
    let lt = K(N, Ee);
    (Ee === "vertical" && typeof X == "number" ? Qe >= X : Ee === "horizontal" && typeof D == "number" ? We >= D : !1) && (lt = lt.reverse());
    const j = O(lt, B), G = j.length > 0;
    if (G && Le)
      return _(N);
    if (G && ye)
      return "Collision prevented on ".concat(B.i, ", reverting."), B.x = We, B.y = Qe, B.moved = !1, N;
    for (let oe = 0, me = j.length; oe < me; oe++) {
      const Be = j[oe];
      "Resolving collision between ".concat(B.i, " at [").concat(B.x, ",").concat(B.y, "] and ").concat(Be.i, " at [").concat(Be.x, ",").concat(Be.y, "]"), !Be.moved && (Be.static ? N = Z(N, Be, B, ue, Ee) : N = Z(N, B, Be, ue, Ee));
    }
    return N;
  }
  function Z(N, B, D, X, ue, ye) {
    const Ee = ue === "horizontal", Pe = ue === "vertical", Le = B.static;
    if (X) {
      X = !1;
      const lt = {
        x: Ee ? Math.max(B.x - D.w, 0) : D.x,
        y: Pe ? Math.max(B.y - D.h, 0) : D.y,
        w: D.w,
        h: D.h,
        i: "-1"
      }, I = A(N, lt), j = I && I.y + I.h > B.y, G = I && B.x + B.w > I.x;
      if (I) {
        if (j && Pe)
          return W(N, D, void 0, D.y + 1, X, Le, ue);
        if (j && ue == null)
          return B.y = D.y, D.y = D.y + D.h, N;
        if (G && Ee)
          return W(N, B, D.x, void 0, X, Le, ue);
      } else return "Doing reverse collision on ".concat(D.i, " up to [").concat(lt.x, ",").concat(lt.y, "]."), W(N, D, Ee ? lt.x : void 0, Pe ? lt.y : void 0, X, Le, ue);
    }
    const We = Ee ? D.x + 1 : void 0, Qe = Pe ? D.y + 1 : void 0;
    return We == null && Qe == null ? N : W(N, D, Ee ? D.x + 1 : void 0, Pe ? D.y + 1 : void 0, X, Le, ue);
  }
  function ce(N) {
    return N * 100 + "%";
  }
  const ae = (N, B, D, X) => N + D > X ? B : D, ie = (N, B, D) => N < 0 ? B : D, pe = (N) => Math.max(0, N), Y = (N) => Math.max(0, N), ee = (N, B, D) => {
    let {
      left: X,
      height: ue,
      width: ye
    } = B;
    const Ee = N.top - (ue - N.height);
    return {
      left: X,
      width: ye,
      height: ie(Ee, N.height, ue),
      top: Y(Ee)
    };
  }, J = (N, B, D) => {
    let {
      top: X,
      left: ue,
      height: ye,
      width: Ee
    } = B;
    return {
      top: X,
      height: ye,
      width: ae(N.left, N.width, Ee, D),
      left: pe(ue)
    };
  }, V = (N, B, D) => {
    let {
      top: X,
      height: ue,
      width: ye
    } = B;
    const Ee = N.left - (ye - N.width);
    return {
      height: ue,
      width: Ee < 0 ? N.width : ae(N.left, N.width, ye, D),
      top: Y(X),
      left: pe(Ee)
    };
  }, de = (N, B, D) => {
    let {
      top: X,
      left: ue,
      height: ye,
      width: Ee
    } = B;
    return {
      width: Ee,
      left: ue,
      height: ie(X, N.height, ye),
      top: Y(X)
    };
  }, we = {
    n: ee,
    ne: function() {
      return ee(arguments.length <= 0 ? void 0 : arguments[0], J(...arguments));
    },
    e: J,
    se: function() {
      return de(arguments.length <= 0 ? void 0 : arguments[0], J(...arguments));
    },
    s: de,
    sw: function() {
      return de(arguments.length <= 0 ? void 0 : arguments[0], V(...arguments));
    },
    w: V,
    nw: function() {
      return ee(arguments.length <= 0 ? void 0 : arguments[0], V(...arguments));
    }
  };
  function Ae(N, B, D, X) {
    const ue = we[N];
    return ue ? ue(B, l(l({}, B), D), X) : D;
  }
  function Ie(N) {
    let {
      top: B,
      left: D,
      width: X,
      height: ue
    } = N;
    const ye = "translate(".concat(D, "px,").concat(B, "px)");
    return {
      transform: ye,
      WebkitTransform: ye,
      MozTransform: ye,
      msTransform: ye,
      OTransform: ye,
      width: "".concat(X, "px"),
      height: "".concat(ue, "px"),
      position: "absolute"
    };
  }
  function Me(N) {
    let {
      top: B,
      left: D,
      width: X,
      height: ue
    } = N;
    return {
      top: "".concat(B, "px"),
      left: "".concat(D, "px"),
      width: "".concat(X, "px"),
      height: "".concat(ue, "px"),
      position: "absolute"
    };
  }
  function K(N, B) {
    return B === "horizontal" ? _e(N) : B === "vertical" ? le(N) : N;
  }
  function le(N) {
    return N.slice(0).sort(function(B, D) {
      return B.y > D.y || B.y === D.y && B.x > D.x ? 1 : B.y === D.y && B.x === D.x ? 0 : -1;
    });
  }
  function _e(N) {
    return N.slice(0).sort(function(B, D) {
      return B.x > D.x || B.x === D.x && B.y > D.y ? 1 : -1;
    });
  }
  function ze(N, B, D, X, ue) {
    N = N || [];
    const ye = [];
    n.default.Children.forEach(B, (Pe) => {
      if (Pe?.key == null) return;
      const Le = w(N, String(Pe.key)), We = Pe.props["data-grid"];
      Le && We == null ? ye.push(k(Le)) : We ? ye.push(k(l(l({}, We), {}, {
        i: Pe.key
      }))) : ye.push(k({
        w: 1,
        h: 1,
        x: 0,
        y: g(ye),
        i: String(Pe.key)
      }));
    });
    const Ee = b(ye, {
      cols: D
    });
    return ue ? Ee : E(Ee, X, D);
  }
  function Re(N) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const D = ["x", "y", "w", "h"];
    if (!Array.isArray(N)) throw new Error(B + " must be an array!");
    for (let X = 0, ue = N.length; X < ue; X++) {
      const ye = N[X];
      for (let Ee = 0; Ee < D.length; Ee++) {
        const Pe = D[Ee], Le = ye[Pe];
        if (typeof Le != "number" || Number.isNaN(Le))
          throw new Error("ReactGridLayout: ".concat(B, "[").concat(X, "].").concat(Pe, " must be a number! Received: ").concat(Le, " (").concat(typeof Le, ")"));
      }
      if (typeof ye.i < "u" && typeof ye.i != "string")
        throw new Error("ReactGridLayout: ".concat(B, "[").concat(X, "].i must be a string! Received: ").concat(ye.i, " (").concat(typeof ye.i, ")"));
    }
  }
  function Te(N) {
    const {
      verticalCompact: B,
      compactType: D
    } = N || {};
    return B === !1 ? null : D;
  }
  function je() {
  }
  const Xe = () => {
  };
  return De.noop = Xe, De;
}
var cn = {}, Cu;
function Il() {
  if (Cu) return cn;
  Cu = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.calcGridColWidth = o, cn.calcGridItemPosition = i, cn.calcGridItemWHPx = n, cn.calcWH = l, cn.calcXY = a, cn.clamp = c;
  function o(u) {
    const {
      margin: m,
      containerPadding: g,
      containerWidth: _,
      cols: f
    } = u;
    return (_ - m[0] * (f - 1) - g[0] * 2) / f;
  }
  function n(u, m, g) {
    return Number.isFinite(u) ? Math.round(m * u + Math.max(0, u - 1) * g) : u;
  }
  function i(u, m, g, _, f, y) {
    const {
      margin: k,
      containerPadding: z,
      rowHeight: R
    } = u, P = o(u), E = {};
    return y && y.resizing ? (E.width = Math.round(y.resizing.width), E.height = Math.round(y.resizing.height)) : (E.width = n(_, P, k[0]), E.height = n(f, R, k[1])), y && y.dragging ? (E.top = Math.round(y.dragging.top), E.left = Math.round(y.dragging.left)) : y && y.resizing && typeof y.resizing.top == "number" && typeof y.resizing.left == "number" ? (E.top = Math.round(y.resizing.top), E.left = Math.round(y.resizing.left)) : (E.top = Math.round((R + k[1]) * g + z[1]), E.left = Math.round((P + k[0]) * m + z[0])), E;
  }
  function a(u, m, g, _, f) {
    const {
      margin: y,
      containerPadding: k,
      cols: z,
      rowHeight: R,
      maxRows: P
    } = u, E = o(u);
    let S = Math.round((g - k[0]) / (E + y[0])), h = Math.round((m - k[1]) / (R + y[1]));
    return S = c(S, 0, z - _), h = c(h, 0, P - f), {
      x: S,
      y: h
    };
  }
  function l(u, m, g, _, f, y) {
    const {
      margin: k,
      maxRows: z,
      cols: R,
      rowHeight: P
    } = u, E = o(u);
    let S = Math.round((m + k[0]) / (E + k[0])), h = Math.round((g + k[1]) / (P + k[1])), x = c(S, 0, R - _), b = c(h, 0, z - f);
    return ["sw", "w", "nw"].indexOf(y) !== -1 && (x = c(S, 0, R)), ["nw", "n", "ne"].indexOf(y) !== -1 && (b = c(h, 0, z)), {
      w: x,
      h: b
    };
  }
  function c(u, m, g) {
    return Math.max(Math.min(u, g), m);
  }
  return cn;
}
var pi = {}, el = { exports: {} }, tl, zu;
function cf() {
  if (zu) return tl;
  zu = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tl = o, tl;
}
var nl, Iu;
function uf() {
  if (Iu) return nl;
  Iu = 1;
  var o = /* @__PURE__ */ cf();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, nl = function() {
    function a(u, m, g, _, f, y) {
      if (y !== o) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    a.isRequired = a;
    function l() {
      return a;
    }
    var c = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: l,
      element: a,
      elementType: a,
      instanceOf: l,
      node: a,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return c.PropTypes = c, c;
  }, nl;
}
var Pu;
function Nn() {
  return Pu || (Pu = 1, el.exports = /* @__PURE__ */ uf()()), el.exports;
}
var mi = { exports: {} }, rl, Ru;
function pf() {
  if (Ru) return rl;
  Ru = 1;
  var o = Object.create, n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, l = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, u = (I, j) => {
    for (var G in j)
      n(I, G, { get: j[G], enumerable: !0 });
  }, m = (I, j, G, oe) => {
    if (j && typeof j == "object" || typeof j == "function")
      for (let me of a(j))
        !c.call(I, me) && me !== G && n(I, me, { get: () => j[me], enumerable: !(oe = i(j, me)) || oe.enumerable });
    return I;
  }, g = (I, j, G) => (G = I != null ? o(l(I)) : {}, m(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !I || !I.__esModule ? n(G, "default", { value: I, enumerable: !0 }) : G,
    I
  )), _ = (I) => m(n({}, "__esModule", { value: !0 }), I), f = {};
  u(f, {
    DraggableCore: () => Qe,
    default: () => lt
  }), rl = _(f);
  var y = g(zt()), k = g(/* @__PURE__ */ Nn()), z = g(Jo()), R = aa();
  function P(I, j) {
    for (let G = 0, oe = I.length; G < oe; G++)
      if (j.apply(j, [I[G], G, I])) return I[G];
  }
  function E(I) {
    return typeof I == "function" || Object.prototype.toString.call(I) === "[object Function]";
  }
  function S(I) {
    return typeof I == "number" && !isNaN(I);
  }
  function h(I) {
    return parseInt(I, 10);
  }
  function x(I, j, G) {
    if (I[j])
      return new Error(`Invalid prop ${j} passed to ${G} - do not set this, set it on the child.`);
  }
  var b = ["Moz", "Webkit", "O", "ms"];
  function w(I = "transform") {
    var j, G;
    if (typeof window > "u") return "";
    const oe = (G = (j = window.document) == null ? void 0 : j.documentElement) == null ? void 0 : G.style;
    if (!oe || I in oe) return "";
    for (let me = 0; me < b.length; me++)
      if (A(I, b[me]) in oe) return b[me];
    return "";
  }
  function A(I, j) {
    return j ? `${j}${O(I)}` : I;
  }
  function O(I) {
    let j = "", G = !0;
    for (let oe = 0; oe < I.length; oe++)
      G ? (j += I[oe].toUpperCase(), G = !1) : I[oe] === "-" ? G = !0 : j += I[oe];
    return j;
  }
  var H = w(), W = "";
  function Z(I, j) {
    var G;
    W || (W = (G = P([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(me) {
      return E(I[me]);
    })) != null ? G : "");
    const oe = I[W];
    return E(oe) ? !!oe.call(I, j) : !1;
  }
  function ce(I, j, G) {
    let oe = I;
    do {
      if (Z(oe, j)) return !0;
      if (oe === G) return !1;
      oe = oe.parentNode;
    } while (oe);
    return !1;
  }
  function ae(I, j, G, oe) {
    if (!I) return;
    const me = { capture: !0, ...oe }, Be = G;
    I.addEventListener ? I.addEventListener(j, Be, me) : I.attachEvent ? I.attachEvent("on" + j, Be) : I["on" + j] = Be;
  }
  function ie(I, j, G, oe) {
    if (!I) return;
    const me = { capture: !0, ...oe }, Be = G;
    I.removeEventListener ? I.removeEventListener(j, Be, me) : I.detachEvent ? I.detachEvent("on" + j, Be) : I["on" + j] = null;
  }
  function pe(I) {
    let j = I.clientHeight;
    const G = I.ownerDocument.defaultView.getComputedStyle(I);
    return j += h(G.borderTopWidth), j += h(G.borderBottomWidth), j;
  }
  function Y(I) {
    let j = I.clientWidth;
    const G = I.ownerDocument.defaultView.getComputedStyle(I);
    return j += h(G.borderLeftWidth), j += h(G.borderRightWidth), j;
  }
  function ee(I) {
    let j = I.clientHeight;
    const G = I.ownerDocument.defaultView.getComputedStyle(I);
    return j -= h(G.paddingTop), j -= h(G.paddingBottom), j;
  }
  function J(I) {
    let j = I.clientWidth;
    const G = I.ownerDocument.defaultView.getComputedStyle(I);
    return j -= h(G.paddingLeft), j -= h(G.paddingRight), j;
  }
  function V(I, j, G) {
    const me = j === j.ownerDocument.body ? { left: 0, top: 0 } : j.getBoundingClientRect(), Be = (I.clientX + j.scrollLeft - me.left) / G, He = (I.clientY + j.scrollTop - me.top) / G;
    return { x: Be, y: He };
  }
  function de(I, j) {
    const G = T(I, j, "px");
    return { [A("transform", H)]: G };
  }
  function ne(I, j) {
    return T(I, j, "");
  }
  function T({ x: I, y: j }, G, oe) {
    let me = `translate(${I}${oe},${j}${oe})`;
    if (G) {
      const Be = `${typeof G.x == "string" ? G.x : G.x + oe}`, He = `${typeof G.y == "string" ? G.y : G.y + oe}`;
      me = `translate(${Be}, ${He})` + me;
    }
    return me;
  }
  function U(I, j) {
    return I.targetTouches && P(I.targetTouches, (G) => j === G.identifier) || I.changedTouches && P(I.changedTouches, (G) => j === G.identifier);
  }
  function ve(I) {
    if (I.targetTouches && I.targetTouches[0]) return I.targetTouches[0].identifier;
    if (I.changedTouches && I.changedTouches[0]) return I.changedTouches[0].identifier;
  }
  function we() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Ae(I, j) {
    if (!I) return;
    let G = I.getElementById("react-draggable-style-el");
    if (!G) {
      G = I.createElement("style"), G.type = "text/css", G.id = "react-draggable-style-el";
      const oe = j ?? we();
      oe && G.setAttribute("nonce", oe), G.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, G.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, I.getElementsByTagName("head")[0].appendChild(G);
    }
    I.body && K(I.body, "react-draggable-transparent-selection");
  }
  function Ie(I) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Me(I);
    }) : Me(I);
  }
  function Me(I) {
    if (I)
      try {
        I.body && le(I.body, "react-draggable-transparent-selection");
        const j = I.selection;
        if (j)
          j.empty();
        else {
          const G = (I.defaultView || window).getSelection();
          G && G.type !== "Caret" && G.removeAllRanges();
        }
      } catch {
      }
  }
  function K(I, j) {
    I.classList ? I.classList.add(j) : I.className.match(new RegExp(`(?:^|\\s)${j}(?!\\S)`)) || (I.className += ` ${j}`);
  }
  function le(I, j) {
    I.classList ? I.classList.remove(j) : I.className = I.className.replace(new RegExp(`(?:^|\\s)${j}(?!\\S)`, "g"), "");
  }
  function _e(I, j, G) {
    if (!I.props.bounds) return [j, G];
    let { bounds: oe } = I.props;
    oe = typeof oe == "string" ? oe : B(oe);
    const me = D(I);
    if (typeof oe == "string") {
      const { ownerDocument: Be } = me, He = Be.defaultView;
      if (!He)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Je;
      if (oe === "parent" ? Je = me.parentNode : Je = me.getRootNode().querySelector(oe), !(Je instanceof He.HTMLElement))
        throw new Error('Bounds selector "' + oe + '" could not find an element.');
      const pt = Je, $t = He.getComputedStyle(me), Yt = He.getComputedStyle(pt);
      oe = {
        left: -me.offsetLeft + h(Yt.paddingLeft) + h($t.marginLeft),
        top: -me.offsetTop + h(Yt.paddingTop) + h($t.marginTop),
        right: J(pt) - Y(me) - me.offsetLeft + h(Yt.paddingRight) - h($t.marginRight),
        bottom: ee(pt) - pe(me) - me.offsetTop + h(Yt.paddingBottom) - h($t.marginBottom)
      };
    }
    return S(oe.right) && (j = Math.min(j, oe.right)), S(oe.bottom) && (G = Math.min(G, oe.bottom)), S(oe.left) && (j = Math.max(j, oe.left)), S(oe.top) && (G = Math.max(G, oe.top)), [j, G];
  }
  function ze(I, j, G) {
    const oe = Math.round(j / I[0]) * I[0], me = Math.round(G / I[1]) * I[1];
    return [oe, me];
  }
  function Re(I) {
    return I.props.axis === "both" || I.props.axis === "x";
  }
  function Te(I) {
    return I.props.axis === "both" || I.props.axis === "y";
  }
  function je(I, j, G) {
    const oe = typeof j == "number" ? U(I, j) : null;
    if (typeof j == "number" && !oe) return null;
    const me = D(G), Be = G.props.offsetParent || me.offsetParent || me.ownerDocument.body;
    return V(oe || I, Be, G.props.scale);
  }
  function Xe(I, j, G) {
    const oe = !S(I.lastX), me = D(I);
    return oe ? {
      node: me,
      deltaX: 0,
      deltaY: 0,
      lastX: j,
      lastY: G,
      x: j,
      y: G
    } : {
      node: me,
      deltaX: j - I.lastX,
      deltaY: G - I.lastY,
      lastX: I.lastX,
      lastY: I.lastY,
      x: j,
      y: G
    };
  }
  function N(I, j) {
    const G = I.props.scale;
    return {
      node: j.node,
      x: I.state.x + j.deltaX / G,
      y: I.state.y + j.deltaY / G,
      deltaX: j.deltaX / G,
      deltaY: j.deltaY / G,
      lastX: I.state.x,
      lastY: I.state.y
    };
  }
  function B(I) {
    return {
      left: I.left,
      top: I.top,
      right: I.right,
      bottom: I.bottom
    };
  }
  function D(I) {
    const j = I.findDOMNode();
    if (!j)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return j;
  }
  var X = g(zt()), ue = g(/* @__PURE__ */ Nn()), ye = g(Jo()), Ee = function() {
  }, Pe = Ee, Le = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  }, We = Le.mouse, Qe = class extends X.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (I) => {
        if (this.props.onMouseDown(I), !this.props.allowAnyClick && (typeof I.button == "number" && I.button !== 0 || I.ctrlKey)) return !1;
        const j = this.findDOMNode();
        if (!j || !j.ownerDocument || !j.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: G } = j;
        if (this.props.disabled || !(I.target instanceof G.defaultView.Node) || this.props.handle && !ce(I.target, this.props.handle, j) || this.props.cancel && ce(I.target, this.props.cancel, j))
          return;
        I.type === "touchstart" && !this.props.allowMobileScroll && I.preventDefault();
        const oe = ve(I);
        this.touchIdentifier = oe;
        const me = je(I, oe, this);
        if (me == null) return;
        const { x: Be, y: He } = me, Je = Xe(this, Be, He);
        Pe("calling", this.props.onStart), !(this.props.onStart(I, Je) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Ae(G, this.props.nonce), this.dragging = !0, this.lastX = Be, this.lastY = He, ae(G, We.move, this.handleDrag), ae(G, We.stop, this.handleDragStop));
      }, this.handleDrag = (I) => {
        const j = je(I, this.touchIdentifier, this);
        if (j == null) return;
        let { x: G, y: oe } = j;
        if (Array.isArray(this.props.grid)) {
          let He = G - this.lastX, Je = oe - this.lastY;
          if ([He, Je] = ze(this.props.grid, He, Je), !He && !Je) return;
          G = this.lastX + He, oe = this.lastY + Je;
        }
        const me = Xe(this, G, oe);
        if (this.props.onDrag(I, me) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const He = document.createEvent("MouseEvents");
            He.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(He);
          }
          return;
        }
        this.lastX = G, this.lastY = oe;
      }, this.handleDragStop = (I) => {
        if (!this.dragging) return;
        const j = je(I, this.touchIdentifier, this);
        if (j == null) return;
        let { x: G, y: oe } = j;
        if (Array.isArray(this.props.grid)) {
          let Je = G - this.lastX || 0, pt = oe - this.lastY || 0;
          [Je, pt] = ze(this.props.grid, Je, pt), G = this.lastX + Je, oe = this.lastY + pt;
        }
        const me = Xe(this, G, oe);
        if (this.props.onStop(I, me) === !1 || this.mounted === !1) return !1;
        const He = this.findDOMNode();
        He && this.props.enableUserSelectHack && Ie(He.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, He && (ie(He.ownerDocument, We.move, this.handleDrag), ie(He.ownerDocument, We.stop, this.handleDragStop));
      }, this.onMouseDown = (I) => (We = Le.mouse, this.handleDragStart(I)), this.onMouseUp = (I) => (We = Le.mouse, this.handleDragStop(I)), this.onTouchStart = (I) => (We = Le.touch, this.handleDragStart(I)), this.onTouchEnd = (I) => (We = Le.touch, this.handleDragStop(I));
    }
    componentDidMount() {
      this.mounted = !0;
      const I = this.findDOMNode();
      I && ae(I, Le.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const I = this.findDOMNode();
      if (I) {
        const { ownerDocument: j } = I;
        ie(j, Le.mouse.move, this.handleDrag), ie(j, Le.touch.move, this.handleDrag), ie(j, Le.mouse.stop, this.handleDragStop), ie(j, Le.touch.stop, this.handleDragStop), ie(I, Le.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Ie(j);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var I;
      if ((I = this.props) != null && I.nodeRef)
        return this.props.nodeRef.current;
      const j = ye.default;
      return typeof j.findDOMNode == "function" ? j.findDOMNode(this) : null;
    }
    render() {
      return X.cloneElement(X.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  };
  Qe.displayName = "DraggableCore", Qe.propTypes = {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: ue.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: ue.default.bool,
    children: ue.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: ue.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: ue.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(I, j) {
      if (I[j] && I[j].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: ue.default.arrayOf(ue.default.number),
    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable handle=".handle">
     *              <div>
     *                  <div className="handle">Click me to drag</div>
     *                  <div>This is some other content</div>
     *              </div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    handle: ue.default.string,
    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *           return(
     *               <Draggable cancel=".cancel">
     *                   <div>
     *                     <div className="cancel">You can't drag from here</div>
     *                     <div>Dragging here works fine</div>
     *                   </div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    cancel: ue.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
     * Unfortunately, in order for <Draggable> to work properly, we need raw access
     * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
     * as in this example:
     *
     * function MyComponent() {
     *   const nodeRef = React.useRef(null);
     *   return (
     *     <Draggable nodeRef={nodeRef}>
     *       <div ref={nodeRef}>Example Target</div>
     *     </Draggable>
     *   );
     * }
     *
     * This can be used for arbitrarily nested components, so long as the ref ends up
     * pointing to the actual child DOM node and not a custom component.
     */
    nodeRef: ue.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: ue.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: ue.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: ue.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: ue.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: ue.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: ue.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: x,
    style: x,
    transform: x
  }, Qe.defaultProps = {
    allowAnyClick: !1,
    // by default only accept left click
    allowMobileScroll: !1,
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function() {
    },
    onDrag: function() {
    },
    onStop: function() {
    },
    onMouseDown: function() {
    },
    scale: 1
  };
  var lt = class extends y.Component {
    constructor(I) {
      super(I), this.onDragStart = (j, G) => {
        if (this.props.onStart(j, N(this, G)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (j, G) => {
        if (!this.state.dragging) return !1;
        const oe = N(this, G), me = {
          x: oe.x,
          y: oe.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: He, y: Je } = me;
          me.x += this.state.slackX, me.y += this.state.slackY;
          const [pt, $t] = _e(this, me.x, me.y);
          me.x = pt, me.y = $t, me.slackX = this.state.slackX + (He - me.x), me.slackY = this.state.slackY + (Je - me.y), oe.x = me.x, oe.y = me.y, oe.deltaX = me.x - this.state.x, oe.deltaY = me.y - this.state.y;
        }
        if (this.props.onDrag(j, oe) === !1) return !1;
        this.setState(me);
      }, this.onDragStop = (j, G) => {
        if (!this.state.dragging || this.props.onStop(j, N(this, G)) === !1) return !1;
        const me = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: He, y: Je } = this.props.position;
          me.x = He, me.y = Je;
        }
        this.setState(me);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: I.position ? I.position.x : I.defaultPosition.x,
        y: I.position ? I.position.y : I.defaultPosition.y,
        prevPropsPosition: { ...I.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, I.position && !(I.onDrag || I.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: I }, { prevPropsPosition: j }) {
      return I && (!j || I.x !== j.x || I.y !== j.y) ? {
        x: I.x,
        y: I.y,
        prevPropsPosition: { ...I }
      } : null;
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
    }
    componentWillUnmount() {
      this.state.dragging && this.setState({ dragging: !1 });
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var I;
      if ((I = this.props) != null && I.nodeRef)
        return this.props.nodeRef.current;
      const j = z.default;
      return typeof j.findDOMNode == "function" ? j.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: I,
        bounds: j,
        children: G,
        defaultPosition: oe,
        defaultClassName: me,
        defaultClassNameDragging: Be,
        defaultClassNameDragged: He,
        position: Je,
        positionOffset: pt,
        scale: $t,
        ...Yt
      } = this.props;
      let Ln = {}, Xn = null;
      const en = !!!Je || this.state.dragging, Ar = Je || oe, Cr = {
        // Set left if horizontal drag is enabled
        x: Re(this) && en ? this.state.x : Ar.x,
        // Set top if vertical drag is enabled
        y: Te(this) && en ? this.state.y : Ar.y
      };
      this.state.isElementSVG ? Xn = ne(Cr, pt) : Ln = de(Cr, pt);
      const Qn = y.Children.only(G), zi = (0, R.clsx)(Qn.props.className || "", me, {
        [Be]: this.state.dragging,
        [He]: this.state.dragged
      });
      return /* @__PURE__ */ y.createElement(Qe, { ...Yt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, y.cloneElement(Qn, {
        className: zi,
        style: { ...Qn.props.style, ...Ln },
        transform: Xn
      }));
    }
  };
  return lt.displayName = "Draggable", lt.propTypes = {
    // Accepts all props <DraggableCore> accepts.
    ...Qe.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: k.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: k.default.oneOfType([
      k.default.shape({
        left: k.default.number,
        right: k.default.number,
        top: k.default.number,
        bottom: k.default.number
      }),
      k.default.string,
      k.default.oneOf([!1])
    ]),
    defaultClassName: k.default.string,
    defaultClassNameDragging: k.default.string,
    defaultClassNameDragged: k.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: k.default.shape({
      x: k.default.number,
      y: k.default.number
    }),
    positionOffset: k.default.shape({
      x: k.default.oneOfType([k.default.number, k.default.string]),
      y: k.default.oneOfType([k.default.number, k.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: k.default.shape({
      x: k.default.number,
      y: k.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: x,
    style: x,
    transform: x
  }, lt.defaultProps = {
    ...Qe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, rl;
}
var Nu;
function Pl() {
  if (Nu) return mi.exports;
  Nu = 1;
  const o = pf(), n = o.DraggableCore, i = o.default || o;
  return mi.exports = i, mi.exports.default = i, mi.exports.DraggableCore = n, mi.exports;
}
var gi = { exports: {} }, fi = {}, Do = {}, Lu;
function mf() {
  if (Lu) return Do;
  Lu = 1, Do.__esModule = !0, Do.cloneElement = m;
  var o = n(zt());
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function i(g, _) {
    var f = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var y = Object.getOwnPropertySymbols(g);
      _ && (y = y.filter(function(k) {
        return Object.getOwnPropertyDescriptor(g, k).enumerable;
      })), f.push.apply(f, y);
    }
    return f;
  }
  function a(g) {
    for (var _ = 1; _ < arguments.length; _++) {
      var f = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? i(Object(f), !0).forEach(function(y) {
        l(g, y, f[y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(f)) : i(Object(f)).forEach(function(y) {
        Object.defineProperty(g, y, Object.getOwnPropertyDescriptor(f, y));
      });
    }
    return g;
  }
  function l(g, _, f) {
    return _ = c(_), _ in g ? Object.defineProperty(g, _, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = f, g;
  }
  function c(g) {
    var _ = u(g, "string");
    return typeof _ == "symbol" ? _ : String(_);
  }
  function u(g, _) {
    if (typeof g != "object" || g === null) return g;
    var f = g[Symbol.toPrimitive];
    if (f !== void 0) {
      var y = f.call(g, _);
      if (typeof y != "object") return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(g);
  }
  function m(g, _) {
    return _.style && g.props.style && (_.style = a(a({}, g.props.style), _.style)), _.className && g.props.className && (_.className = g.props.className + " " + _.className), /* @__PURE__ */ o.default.cloneElement(g, _);
  }
  return Do;
}
var hi = {}, Ou;
function Ap() {
  if (Ou) return hi;
  Ou = 1, hi.__esModule = !0, hi.resizableProps = void 0;
  var o = n(/* @__PURE__ */ Nn());
  Pl();
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var i = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: o.default.oneOf(["both", "x", "y", "none"]),
    className: o.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: o.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: o.default.shape({
      allowAnyClick: o.default.bool,
      cancel: o.default.string,
      children: o.default.node,
      disabled: o.default.bool,
      enableUserSelectHack: o.default.bool,
      offsetParent: o.default.node,
      grid: o.default.arrayOf(o.default.number),
      handle: o.default.string,
      nodeRef: o.default.object,
      onStart: o.default.func,
      onDrag: o.default.func,
      onStop: o.default.func,
      onMouseDown: o.default.func,
      scale: o.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      var m = c[0];
      if (m.axis === "both" || m.axis === "y") {
        var g;
        return (g = o.default.number).isRequired.apply(g, c);
      }
      return o.default.number.apply(o.default, c);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: o.default.oneOfType([o.default.node, o.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: o.default.arrayOf(o.default.number),
    lockAspectRatio: o.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: o.default.arrayOf(o.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: o.default.arrayOf(o.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: o.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: o.default.func,
    /*
    * Called on resize event
    * */
    onResize: o.default.func,
    /*
    * Defines which resize handles should be rendered (default: 'se')
    * 's' - South handle (bottom-center)
    * 'w' - West handle (left-center)
    * 'e' - East handle (right-center)
    * 'n' - North handle (top-center)
    * 'sw' - Southwest handle (bottom-left)
    * 'nw' - Northwest handle (top-left)
    * 'se' - Southeast handle (bottom-right)
    * 'ne' - Northeast handle (top-center)
    * */
    resizeHandles: o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: o.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      var m = c[0];
      if (m.axis === "both" || m.axis === "x") {
        var g;
        return (g = o.default.number).isRequired.apply(g, c);
      }
      return o.default.number.apply(o.default, c);
    }
  };
  return hi.resizableProps = i, hi;
}
var Tu;
function Cp() {
  if (Tu) return fi;
  Tu = 1, fi.__esModule = !0, fi.default = void 0;
  var o = u(zt()), n = Pl(), i = mf(), a = Ap(), l = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function c(S) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (c = function(w) {
      return w ? x : h;
    })(S);
  }
  function u(S, h) {
    if (S && S.__esModule)
      return S;
    if (S === null || typeof S != "object" && typeof S != "function")
      return { default: S };
    var x = c(h);
    if (x && x.has(S))
      return x.get(S);
    var b = {}, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var A in S)
      if (A !== "default" && Object.prototype.hasOwnProperty.call(S, A)) {
        var O = w ? Object.getOwnPropertyDescriptor(S, A) : null;
        O && (O.get || O.set) ? Object.defineProperty(b, A, O) : b[A] = S[A];
      }
    return b.default = S, x && x.set(S, b), b;
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(S) {
      for (var h = 1; h < arguments.length; h++) {
        var x = arguments[h];
        for (var b in x)
          Object.prototype.hasOwnProperty.call(x, b) && (S[b] = x[b]);
      }
      return S;
    }, m.apply(this, arguments);
  }
  function g(S, h) {
    if (S == null) return {};
    var x = {}, b = Object.keys(S), w, A;
    for (A = 0; A < b.length; A++)
      w = b[A], !(h.indexOf(w) >= 0) && (x[w] = S[w]);
    return x;
  }
  function _(S, h) {
    var x = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(S);
      h && (b = b.filter(function(w) {
        return Object.getOwnPropertyDescriptor(S, w).enumerable;
      })), x.push.apply(x, b);
    }
    return x;
  }
  function f(S) {
    for (var h = 1; h < arguments.length; h++) {
      var x = arguments[h] != null ? arguments[h] : {};
      h % 2 ? _(Object(x), !0).forEach(function(b) {
        y(S, b, x[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(x)) : _(Object(x)).forEach(function(b) {
        Object.defineProperty(S, b, Object.getOwnPropertyDescriptor(x, b));
      });
    }
    return S;
  }
  function y(S, h, x) {
    return h = k(h), h in S ? Object.defineProperty(S, h, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : S[h] = x, S;
  }
  function k(S) {
    var h = z(S, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function z(S, h) {
    if (typeof S != "object" || S === null) return S;
    var x = S[Symbol.toPrimitive];
    if (x !== void 0) {
      var b = x.call(S, h);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(S);
  }
  function R(S, h) {
    S.prototype = Object.create(h.prototype), S.prototype.constructor = S, P(S, h);
  }
  function P(S, h) {
    return P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(b, w) {
      return b.__proto__ = w, b;
    }, P(S, h);
  }
  var E = /* @__PURE__ */ function(S) {
    R(h, S);
    function h() {
      for (var b, w = arguments.length, A = new Array(w), O = 0; O < w; O++)
        A[O] = arguments[O];
      return b = S.call.apply(S, [this].concat(A)) || this, b.handleRefs = {}, b.lastHandleRect = null, b.slack = null, b;
    }
    var x = h.prototype;
    return x.componentWillUnmount = function() {
      this.resetData();
    }, x.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, x.runConstraints = function(w, A) {
      var O = this.props, H = O.minConstraints, W = O.maxConstraints, Z = O.lockAspectRatio;
      if (!H && !W && !Z) return [w, A];
      if (Z) {
        var ce = this.props.width / this.props.height, ae = w - this.props.width, ie = A - this.props.height;
        Math.abs(ae) > Math.abs(ie * ce) ? A = w / ce : w = A * ce;
      }
      var pe = w, Y = A, ee = this.slack || [0, 0], J = ee[0], V = ee[1];
      return w += J, A += V, H && (w = Math.max(H[0], w), A = Math.max(H[1], A)), W && (w = Math.min(W[0], w), A = Math.min(W[1], A)), this.slack = [J + (pe - w), V + (Y - A)], [w, A];
    }, x.resizeHandler = function(w, A) {
      var O = this;
      return function(H, W) {
        var Z = W.node, ce = W.deltaX, ae = W.deltaY;
        w === "onResizeStart" && O.resetData();
        var ie = (O.props.axis === "both" || O.props.axis === "x") && A !== "n" && A !== "s", pe = (O.props.axis === "both" || O.props.axis === "y") && A !== "e" && A !== "w";
        if (!(!ie && !pe)) {
          var Y = A[0], ee = A[A.length - 1], J = Z.getBoundingClientRect();
          if (O.lastHandleRect != null) {
            if (ee === "w") {
              var V = J.left - O.lastHandleRect.left;
              ce += V;
            }
            if (Y === "n") {
              var de = J.top - O.lastHandleRect.top;
              ae += de;
            }
          }
          O.lastHandleRect = J, ee === "w" && (ce = -ce), Y === "n" && (ae = -ae);
          var ne = O.props.width + (ie ? ce / O.props.transformScale : 0), T = O.props.height + (pe ? ae / O.props.transformScale : 0), U = O.runConstraints(ne, T);
          ne = U[0], T = U[1];
          var ve = ne !== O.props.width || T !== O.props.height, we = typeof O.props[w] == "function" ? O.props[w] : null, Ae = w === "onResize" && !ve;
          we && !Ae && (H.persist == null || H.persist(), we(H, {
            node: Z,
            size: {
              width: ne,
              height: T
            },
            handle: A
          })), w === "onResizeStop" && O.resetData();
        }
      };
    }, x.renderResizeHandle = function(w, A) {
      var O = this.props.handle;
      if (!O)
        return /* @__PURE__ */ o.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + w,
          ref: A
        });
      if (typeof O == "function")
        return O(w, A);
      var H = typeof O.type == "string", W = f({
        ref: A
      }, H ? {} : {
        handleAxis: w
      });
      return /* @__PURE__ */ o.cloneElement(O, W);
    }, x.render = function() {
      var w = this, A = this.props, O = A.children, H = A.className, W = A.draggableOpts;
      A.width, A.height, A.handle, A.handleSize, A.lockAspectRatio, A.axis, A.minConstraints, A.maxConstraints, A.onResize, A.onResizeStop, A.onResizeStart;
      var Z = A.resizeHandles;
      A.transformScale;
      var ce = g(A, l);
      return (0, i.cloneElement)(O, f(f({}, ce), {}, {
        className: (H ? H + " " : "") + "react-resizable",
        children: [].concat(O.props.children, Z.map(function(ae) {
          var ie, pe = (ie = w.handleRefs[ae]) != null ? ie : w.handleRefs[ae] = /* @__PURE__ */ o.createRef();
          return /* @__PURE__ */ o.createElement(n.DraggableCore, m({}, W, {
            nodeRef: pe,
            key: "resizableHandle-" + ae,
            onStop: w.resizeHandler("onResizeStop", ae),
            onStart: w.resizeHandler("onResizeStart", ae),
            onDrag: w.resizeHandler("onResize", ae)
          }), w.renderResizeHandle(ae, pe));
        }))
      }));
    }, h;
  }(o.Component);
  return fi.default = E, E.propTypes = a.resizableProps, E.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, fi;
}
var _i = {}, Mu;
function gf() {
  if (Mu) return _i;
  Mu = 1, _i.__esModule = !0, _i.default = void 0;
  var o = m(zt()), n = c(/* @__PURE__ */ Nn()), i = c(Cp()), a = Ap(), l = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function c(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function u(h) {
    if (typeof WeakMap != "function") return null;
    var x = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (u = function(A) {
      return A ? b : x;
    })(h);
  }
  function m(h, x) {
    if (h && h.__esModule)
      return h;
    if (h === null || typeof h != "object" && typeof h != "function")
      return { default: h };
    var b = u(x);
    if (b && b.has(h))
      return b.get(h);
    var w = {}, A = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var O in h)
      if (O !== "default" && Object.prototype.hasOwnProperty.call(h, O)) {
        var H = A ? Object.getOwnPropertyDescriptor(h, O) : null;
        H && (H.get || H.set) ? Object.defineProperty(w, O, H) : w[O] = h[O];
      }
    return w.default = h, b && b.set(h, w), w;
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(h) {
      for (var x = 1; x < arguments.length; x++) {
        var b = arguments[x];
        for (var w in b)
          Object.prototype.hasOwnProperty.call(b, w) && (h[w] = b[w]);
      }
      return h;
    }, g.apply(this, arguments);
  }
  function _(h, x) {
    var b = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(h);
      x && (w = w.filter(function(A) {
        return Object.getOwnPropertyDescriptor(h, A).enumerable;
      })), b.push.apply(b, w);
    }
    return b;
  }
  function f(h) {
    for (var x = 1; x < arguments.length; x++) {
      var b = arguments[x] != null ? arguments[x] : {};
      x % 2 ? _(Object(b), !0).forEach(function(w) {
        y(h, w, b[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(b)) : _(Object(b)).forEach(function(w) {
        Object.defineProperty(h, w, Object.getOwnPropertyDescriptor(b, w));
      });
    }
    return h;
  }
  function y(h, x, b) {
    return x = k(x), x in h ? Object.defineProperty(h, x, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : h[x] = b, h;
  }
  function k(h) {
    var x = z(h, "string");
    return typeof x == "symbol" ? x : String(x);
  }
  function z(h, x) {
    if (typeof h != "object" || h === null) return h;
    var b = h[Symbol.toPrimitive];
    if (b !== void 0) {
      var w = b.call(h, x);
      if (typeof w != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(h);
  }
  function R(h, x) {
    if (h == null) return {};
    var b = {}, w = Object.keys(h), A, O;
    for (O = 0; O < w.length; O++)
      A = w[O], !(x.indexOf(A) >= 0) && (b[A] = h[A]);
    return b;
  }
  function P(h, x) {
    h.prototype = Object.create(x.prototype), h.prototype.constructor = h, E(h, x);
  }
  function E(h, x) {
    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, A) {
      return w.__proto__ = A, w;
    }, E(h, x);
  }
  var S = /* @__PURE__ */ function(h) {
    P(x, h);
    function x() {
      for (var w, A = arguments.length, O = new Array(A), H = 0; H < A; H++)
        O[H] = arguments[H];
      return w = h.call.apply(h, [this].concat(O)) || this, w.state = {
        width: w.props.width,
        height: w.props.height,
        propsWidth: w.props.width,
        propsHeight: w.props.height
      }, w.onResize = function(W, Z) {
        var ce = Z.size;
        w.props.onResize ? (W.persist == null || W.persist(), w.setState(ce, function() {
          return w.props.onResize && w.props.onResize(W, Z);
        })) : w.setState(ce);
      }, w;
    }
    x.getDerivedStateFromProps = function(A, O) {
      return O.propsWidth !== A.width || O.propsHeight !== A.height ? {
        width: A.width,
        height: A.height,
        propsWidth: A.width,
        propsHeight: A.height
      } : null;
    };
    var b = x.prototype;
    return b.render = function() {
      var A = this.props, O = A.handle, H = A.handleSize;
      A.onResize;
      var W = A.onResizeStart, Z = A.onResizeStop, ce = A.draggableOpts, ae = A.minConstraints, ie = A.maxConstraints, pe = A.lockAspectRatio, Y = A.axis;
      A.width, A.height;
      var ee = A.resizeHandles, J = A.style, V = A.transformScale, de = R(A, l);
      return /* @__PURE__ */ o.createElement(i.default, {
        axis: Y,
        draggableOpts: ce,
        handle: O,
        handleSize: H,
        height: this.state.height,
        lockAspectRatio: pe,
        maxConstraints: ie,
        minConstraints: ae,
        onResizeStart: W,
        onResize: this.onResize,
        onResizeStop: Z,
        resizeHandles: ee,
        transformScale: V,
        width: this.state.width
      }, /* @__PURE__ */ o.createElement("div", g({}, de, {
        style: f(f({}, J), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, x;
  }(o.Component);
  return _i.default = S, S.propTypes = f(f({}, a.resizableProps), {}, {
    children: n.default.element
  }), _i;
}
var Bu;
function ff() {
  return Bu || (Bu = 1, gi.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, gi.exports.Resizable = Cp().default, gi.exports.ResizableBox = gf().default), gi.exports;
}
var un = {}, Hu;
function zp() {
  if (Hu) return un;
  Hu = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var o = i(/* @__PURE__ */ Nn()), n = i(zt());
  function i(c) {
    return c && c.__esModule ? c : { default: c };
  }
  const a = un.resizeHandleAxesType = o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), l = un.resizeHandleType = o.default.oneOfType([o.default.node, o.default.func]);
  return un.default = {
    //
    // Basic props
    //
    className: o.default.string,
    style: o.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: o.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: o.default.bool,
    // # of cols.
    cols: o.default.number,
    // A selector that will not be draggable.
    draggableCancel: o.default.string,
    // A selector for the draggable handler
    draggableHandle: o.default.string,
    // Deprecated
    verticalCompact: function(c) {
      c.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: o.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(c) {
      var u = c.layout;
      u !== void 0 && Er().validateLayout(u, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: o.default.arrayOf(o.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: o.default.arrayOf(o.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: o.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: o.default.number,
    //
    // Flags
    //
    isBounded: o.default.bool,
    isDraggable: o.default.bool,
    isResizable: o.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: o.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: o.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: o.default.bool,
    // parent layout transform scale
    transformScale: o.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: o.default.bool,
    // Resize handle options
    resizeHandles: a,
    resizeHandle: l,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: o.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: o.default.func,
    // Calls on each drag movement.
    onDrag: o.default.func,
    // Calls when drag is complete.
    onDragStop: o.default.func,
    //Calls when resize starts.
    onResizeStart: o.default.func,
    // Calls when resize movement happens.
    onResize: o.default.func,
    // Calls when resize is complete.
    onResizeStop: o.default.func,
    // Calls when some element is dropped.
    onDrop: o.default.func,
    //
    // Other validations
    //
    droppingItem: o.default.shape({
      i: o.default.string.isRequired,
      w: o.default.number.isRequired,
      h: o.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(c, u) {
      const m = c[u], g = {};
      n.default.Children.forEach(m, function(_) {
        if (_?.key != null) {
          if (g[_.key])
            throw new Error('Duplicate child key "' + _.key + '" found! This will cause problems in ReactGridLayout.');
          g[_.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: o.default.any
  }, un;
}
var Du;
function hf() {
  if (Du) return pi;
  Du = 1, Object.defineProperty(pi, "__esModule", {
    value: !0
  }), pi.default = void 0;
  var o = _(zt()), n = Jo(), i = _(/* @__PURE__ */ Nn()), a = Pl(), l = ff(), c = Er(), u = Il(), m = zp(), g = _(aa());
  function _(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function f(E, S) {
    var h = Object.keys(E);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(E);
      S && (x = x.filter(function(b) {
        return Object.getOwnPropertyDescriptor(E, b).enumerable;
      })), h.push.apply(h, x);
    }
    return h;
  }
  function y(E) {
    for (var S = 1; S < arguments.length; S++) {
      var h = arguments[S] != null ? arguments[S] : {};
      S % 2 ? f(Object(h), !0).forEach(function(x) {
        k(E, x, h[x]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(h)) : f(Object(h)).forEach(function(x) {
        Object.defineProperty(E, x, Object.getOwnPropertyDescriptor(h, x));
      });
    }
    return E;
  }
  function k(E, S, h) {
    return (S = z(S)) in E ? Object.defineProperty(E, S, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : E[S] = h, E;
  }
  function z(E) {
    var S = R(E, "string");
    return typeof S == "symbol" ? S : S + "";
  }
  function R(E, S) {
    if (typeof E != "object" || !E) return E;
    var h = E[Symbol.toPrimitive];
    if (h !== void 0) {
      var x = h.call(E, S);
      if (typeof x != "object") return x;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (S === "string" ? String : Number)(E);
  }
  let P = class extends o.default.Component {
    constructor() {
      super(...arguments), k(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), k(this, "elementRef", /* @__PURE__ */ o.default.createRef()), k(this, "onDragStart", (S, h) => {
        let {
          node: x
        } = h;
        const {
          onDragStart: b,
          transformScale: w
        } = this.props;
        if (!b) return;
        const A = {
          top: 0,
          left: 0
        }, {
          offsetParent: O
        } = x;
        if (!O) return;
        const H = O.getBoundingClientRect(), W = x.getBoundingClientRect(), Z = W.left / w, ce = H.left / w, ae = W.top / w, ie = H.top / w;
        A.left = Z - ce + O.scrollLeft, A.top = ae - ie + O.scrollTop, this.setState({
          dragging: A
        });
        const {
          x: pe,
          y: Y
        } = (0, u.calcXY)(this.getPositionParams(), A.top, A.left, this.props.w, this.props.h);
        return b.call(this, this.props.i, pe, Y, {
          e: S,
          node: x,
          newPosition: A
        });
      }), k(this, "onDrag", (S, h, x) => {
        let {
          node: b,
          deltaX: w,
          deltaY: A
        } = h;
        const {
          onDrag: O
        } = this.props;
        if (!O) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let H = this.state.dragging.top + A, W = this.state.dragging.left + w;
        const {
          isBounded: Z,
          i: ce,
          w: ae,
          h: ie,
          containerWidth: pe
        } = this.props, Y = this.getPositionParams();
        if (Z) {
          const {
            offsetParent: de
          } = b;
          if (de) {
            const {
              margin: ne,
              rowHeight: T
            } = this.props, U = de.clientHeight - (0, u.calcGridItemWHPx)(ie, T, ne[1]);
            H = (0, u.clamp)(H, 0, U);
            const ve = (0, u.calcGridColWidth)(Y), we = pe - (0, u.calcGridItemWHPx)(ae, ve, ne[0]);
            W = (0, u.clamp)(W, 0, we);
          }
        }
        const ee = {
          top: H,
          left: W
        };
        x ? this.setState({
          dragging: ee
        }) : (0, n.flushSync)(() => {
          this.setState({
            dragging: ee
          });
        });
        const {
          x: J,
          y: V
        } = (0, u.calcXY)(Y, H, W, ae, ie);
        return O.call(this, ce, J, V, {
          e: S,
          node: b,
          newPosition: ee
        });
      }), k(this, "onDragStop", (S, h) => {
        let {
          node: x
        } = h;
        const {
          onDragStop: b
        } = this.props;
        if (!b) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w,
          h: A,
          i: O
        } = this.props, {
          left: H,
          top: W
        } = this.state.dragging, Z = {
          top: W,
          left: H
        };
        this.setState({
          dragging: null
        });
        const {
          x: ce,
          y: ae
        } = (0, u.calcXY)(this.getPositionParams(), W, H, w, A);
        return b.call(this, O, ce, ae, {
          e: S,
          node: x,
          newPosition: Z
        });
      }), k(this, "onResizeStop", (S, h, x) => this.onResizeHandler(S, h, x, "onResizeStop")), k(this, "onResizeStart", (S, h, x) => this.onResizeHandler(S, h, x, "onResizeStart")), k(this, "onResize", (S, h, x) => this.onResizeHandler(S, h, x, "onResize"));
    }
    shouldComponentUpdate(S, h) {
      if (this.props.children !== S.children || this.props.droppingPosition !== S.droppingPosition) return !0;
      const x = (0, u.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), b = (0, u.calcGridItemPosition)(this.getPositionParams(S), S.x, S.y, S.w, S.h, h);
      return !(0, c.fastPositionEqual)(x, b) || this.props.useCSSTransforms !== S.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(S) {
      this.moveDroppingItem(S);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(S) {
      const {
        droppingPosition: h
      } = this.props;
      if (!h) return;
      const x = this.elementRef.current;
      if (!x) return;
      const b = S.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: w
      } = this.state, A = w && h.left !== b.left || h.top !== b.top;
      if (!w)
        this.onDragStart(h.e, {
          node: x,
          deltaX: h.left,
          deltaY: h.top
        });
      else if (A) {
        const O = h.left - w.left, H = h.top - w.top;
        this.onDrag(
          h.e,
          {
            node: x,
            deltaX: O,
            deltaY: H
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: S.cols,
        containerPadding: S.containerPadding,
        containerWidth: S.containerWidth,
        margin: S.margin,
        maxRows: S.maxRows,
        rowHeight: S.rowHeight
      };
    }
    /**
     * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
     * well when server rendering, and the only way to do that properly is to use percentage width/left because
     * we don't know exactly what the browser viewport is.
     * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
     * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
     *
     * @param  {Object} pos Position object with width, height, left, top.
     * @return {Object}     Style object.
     */
    createStyle(S) {
      const {
        usePercentages: h,
        containerWidth: x,
        useCSSTransforms: b
      } = this.props;
      let w;
      return b ? w = (0, c.setTransform)(S) : (w = (0, c.setTopLeft)(S), h && (w.left = (0, c.perc)(S.left / x), w.width = (0, c.perc)(S.width / x))), w;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(S, h) {
      return /* @__PURE__ */ o.default.createElement(a.DraggableCore, {
        disabled: !h,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, S);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(S, h) {
      return (x, b) => (
        /*: Function*/
        h(x, b, S)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(S, h, x) {
      const {
        cols: b,
        minW: w,
        minH: A,
        maxW: O,
        maxH: H,
        transformScale: W,
        resizeHandles: Z,
        resizeHandle: ce
      } = this.props, ae = this.getPositionParams(), ie = (0, u.calcGridItemPosition)(ae, 0, 0, b, 0).width, pe = (0, u.calcGridItemPosition)(ae, 0, 0, w, A), Y = (0, u.calcGridItemPosition)(ae, 0, 0, O, H), ee = [pe.width, pe.height], J = [Math.min(Y.width, ie), Math.min(Y.height, 1 / 0)];
      return /* @__PURE__ */ o.default.createElement(
        l.Resizable,
        {
          draggableOpts: {
            disabled: !x
          },
          className: x ? void 0 : "react-resizable-hide",
          width: h.width,
          height: h.height,
          minConstraints: ee,
          maxConstraints: J,
          onResizeStop: this.curryResizeHandler(h, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(h, this.onResizeStart),
          onResize: this.curryResizeHandler(h, this.onResize),
          transformScale: W,
          resizeHandles: Z,
          handle: ce
        },
        S
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(S, h, x, b) {
      let {
        node: w,
        size: A,
        handle: O
      } = h;
      const H = this.props[b];
      if (!H) return;
      const {
        x: W,
        y: Z,
        i: ce,
        maxH: ae,
        minH: ie,
        containerWidth: pe
      } = this.props, {
        minW: Y,
        maxW: ee
      } = this.props;
      let J = A;
      w && (J = (0, c.resizeItemInDirection)(O, x, A, pe), (0, n.flushSync)(() => {
        this.setState({
          resizing: b === "onResizeStop" ? null : J
        });
      }));
      let {
        w: V,
        h: de
      } = (0, u.calcWH)(this.getPositionParams(), J.width, J.height, W, Z, O);
      V = (0, u.clamp)(V, Math.max(Y, 1), ee), de = (0, u.clamp)(de, ie, ae), H.call(this, ce, V, de, {
        e: S,
        node: w,
        size: J,
        handle: O
      });
    }
    render() {
      const {
        x: S,
        y: h,
        w: x,
        h: b,
        isDraggable: w,
        isResizable: A,
        droppingPosition: O,
        useCSSTransforms: H
      } = this.props, W = (0, u.calcGridItemPosition)(this.getPositionParams(), S, h, x, b, this.state), Z = o.default.Children.only(this.props.children);
      let ce = /* @__PURE__ */ o.default.cloneElement(Z, {
        ref: this.elementRef,
        className: (0, g.default)("react-grid-item", Z.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": w,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!O,
          cssTransforms: H
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: y(y(y({}, this.props.style), Z.props.style), this.createStyle(W))
      });
      return ce = this.mixinResizable(ce, W, A), ce = this.mixinDraggable(ce, w), ce;
    }
  };
  return pi.default = P, k(P, "propTypes", {
    // Children must be only a single element
    children: i.default.element,
    // General grid attributes
    cols: i.default.number.isRequired,
    containerWidth: i.default.number.isRequired,
    rowHeight: i.default.number.isRequired,
    margin: i.default.array.isRequired,
    maxRows: i.default.number.isRequired,
    containerPadding: i.default.array.isRequired,
    // These are all in grid units
    x: i.default.number.isRequired,
    y: i.default.number.isRequired,
    w: i.default.number.isRequired,
    h: i.default.number.isRequired,
    // All optional
    minW: function(E, S) {
      const h = E[S];
      if (typeof h != "number") return new Error("minWidth not Number");
      if (h > E.w || h > E.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(E, S) {
      const h = E[S];
      if (typeof h != "number") return new Error("maxWidth not Number");
      if (h < E.w || h < E.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(E, S) {
      const h = E[S];
      if (typeof h != "number") return new Error("minHeight not Number");
      if (h > E.h || h > E.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(E, S) {
      const h = E[S];
      if (typeof h != "number") return new Error("maxHeight not Number");
      if (h < E.h || h < E.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: i.default.string.isRequired,
    // Resize handle options
    resizeHandles: m.resizeHandleAxesType,
    resizeHandle: m.resizeHandleType,
    // Functions
    onDragStop: i.default.func,
    onDragStart: i.default.func,
    onDrag: i.default.func,
    onResizeStop: i.default.func,
    onResizeStart: i.default.func,
    onResize: i.default.func,
    // Flags
    isDraggable: i.default.bool.isRequired,
    isResizable: i.default.bool.isRequired,
    isBounded: i.default.bool.isRequired,
    static: i.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: i.default.bool.isRequired,
    transformScale: i.default.number,
    // Others
    className: i.default.string,
    // Selector for draggable handle
    handle: i.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: i.default.string,
    // Current position of a dropping element
    droppingPosition: i.default.shape({
      e: i.default.object.isRequired,
      left: i.default.number.isRequired,
      top: i.default.number.isRequired
    })
  }), k(P, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), pi;
}
var $u;
function Ip() {
  if ($u) return ui;
  $u = 1, Object.defineProperty(ui, "__esModule", {
    value: !0
  }), ui.default = void 0;
  var o = g(zt()), n = /* @__PURE__ */ zl(), i = m(aa()), a = Er(), l = Il(), c = m(hf()), u = m(zp());
  function m(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function g(S, h) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
    return (g = function(w, A) {
      if (!A && w && w.__esModule) return w;
      var O, H, W = { __proto__: null, default: w };
      if (w === null || typeof w != "object" && typeof w != "function") return W;
      if (O = A ? b : x) {
        if (O.has(w)) return O.get(w);
        O.set(w, W);
      }
      for (const Z in w) Z !== "default" && {}.hasOwnProperty.call(w, Z) && ((H = (O = Object.defineProperty) && Object.getOwnPropertyDescriptor(w, Z)) && (H.get || H.set) ? O(W, Z, H) : W[Z] = w[Z]);
      return W;
    })(S, h);
  }
  function _(S, h) {
    var x = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(S);
      h && (b = b.filter(function(w) {
        return Object.getOwnPropertyDescriptor(S, w).enumerable;
      })), x.push.apply(x, b);
    }
    return x;
  }
  function f(S) {
    for (var h = 1; h < arguments.length; h++) {
      var x = arguments[h] != null ? arguments[h] : {};
      h % 2 ? _(Object(x), !0).forEach(function(b) {
        y(S, b, x[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(x)) : _(Object(x)).forEach(function(b) {
        Object.defineProperty(S, b, Object.getOwnPropertyDescriptor(x, b));
      });
    }
    return S;
  }
  function y(S, h, x) {
    return (h = k(h)) in S ? Object.defineProperty(S, h, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : S[h] = x, S;
  }
  function k(S) {
    var h = z(S, "string");
    return typeof h == "symbol" ? h : h + "";
  }
  function z(S, h) {
    if (typeof S != "object" || !S) return S;
    var x = S[Symbol.toPrimitive];
    if (x !== void 0) {
      var b = x.call(S, h);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(S);
  }
  const R = "react-grid-layout";
  let P = !1;
  try {
    P = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let E = class extends o.Component {
    constructor() {
      super(...arguments), y(this, "state", {
        activeDrag: null,
        layout: (0, a.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, a.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), y(this, "dragEnterCounter", 0), y(this, "onDragStart", (h, x, b, w) => {
        let {
          e: A,
          node: O
        } = w;
        const {
          layout: H
        } = this.state, W = (0, a.getLayoutItem)(H, h);
        if (!W) return;
        const Z = {
          w: W.w,
          h: W.h,
          x: W.x,
          y: W.y,
          placeholder: !0,
          i: h
        };
        return this.setState({
          oldDragItem: (0, a.cloneLayoutItem)(W),
          oldLayout: H,
          activeDrag: Z
        }), this.props.onDragStart(H, W, W, null, A, O);
      }), y(this, "onDrag", (h, x, b, w) => {
        let {
          e: A,
          node: O
        } = w;
        const {
          oldDragItem: H
        } = this.state;
        let {
          layout: W
        } = this.state;
        const {
          cols: Z,
          allowOverlap: ce,
          preventCollision: ae
        } = this.props, ie = (0, a.getLayoutItem)(W, h);
        if (!ie) return;
        const pe = {
          w: ie.w,
          h: ie.h,
          x: ie.x,
          y: ie.y,
          placeholder: !0,
          i: h
        };
        W = (0, a.moveElement)(W, ie, x, b, !0, ae, (0, a.compactType)(this.props), Z, ce), this.props.onDrag(W, H, ie, pe, A, O), this.setState({
          layout: ce ? W : (0, a.compact)(W, (0, a.compactType)(this.props), Z),
          activeDrag: pe
        });
      }), y(this, "onDragStop", (h, x, b, w) => {
        let {
          e: A,
          node: O
        } = w;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: H
        } = this.state;
        let {
          layout: W
        } = this.state;
        const {
          cols: Z,
          preventCollision: ce,
          allowOverlap: ae
        } = this.props, ie = (0, a.getLayoutItem)(W, h);
        if (!ie) return;
        W = (0, a.moveElement)(W, ie, x, b, !0, ce, (0, a.compactType)(this.props), Z, ae);
        const Y = ae ? W : (0, a.compact)(W, (0, a.compactType)(this.props), Z);
        this.props.onDragStop(Y, H, ie, null, A, O);
        const {
          oldLayout: ee
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: Y,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(Y, ee);
      }), y(this, "onResizeStart", (h, x, b, w) => {
        let {
          e: A,
          node: O
        } = w;
        const {
          layout: H
        } = this.state, W = (0, a.getLayoutItem)(H, h);
        W && (this.setState({
          oldResizeItem: (0, a.cloneLayoutItem)(W),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(H, W, W, null, A, O));
      }), y(this, "onResize", (h, x, b, w) => {
        let {
          e: A,
          node: O,
          size: H,
          handle: W
        } = w;
        const {
          oldResizeItem: Z
        } = this.state, {
          layout: ce
        } = this.state, {
          cols: ae,
          preventCollision: ie,
          allowOverlap: pe
        } = this.props;
        let Y = !1, ee, J, V;
        const [de, ne] = (0, a.withLayoutItem)(ce, h, (U) => {
          let ve;
          return J = U.x, V = U.y, ["sw", "w", "nw", "n", "ne"].indexOf(W) !== -1 && (["sw", "nw", "w"].indexOf(W) !== -1 && (J = U.x + (U.w - x), x = U.x !== J && J < 0 ? U.w : x, J = J < 0 ? 0 : J), ["ne", "n", "nw"].indexOf(W) !== -1 && (V = U.y + (U.h - b), b = U.y !== V && V < 0 ? U.h : b, V = V < 0 ? 0 : V), Y = !0), ie && !pe && (ve = (0, a.getAllCollisions)(ce, f(f({}, U), {}, {
            w: x,
            h: b,
            x: J,
            y: V
          })).filter((Ae) => Ae.i !== U.i).length > 0, ve && (V = U.y, b = U.h, J = U.x, x = U.w, Y = !1)), U.w = x, U.h = b, U;
        });
        if (!ne) return;
        ee = de, Y && (ee = (0, a.moveElement)(de, ne, J, V, !0, this.props.preventCollision, (0, a.compactType)(this.props), ae, pe));
        const T = {
          w: ne.w,
          h: ne.h,
          x: ne.x,
          y: ne.y,
          static: !0,
          i: h
        };
        this.props.onResize(ee, Z, ne, T, A, O), this.setState({
          layout: pe ? ee : (0, a.compact)(ee, (0, a.compactType)(this.props), ae),
          activeDrag: T
        });
      }), y(this, "onResizeStop", (h, x, b, w) => {
        let {
          e: A,
          node: O
        } = w;
        const {
          layout: H,
          oldResizeItem: W
        } = this.state, {
          cols: Z,
          allowOverlap: ce
        } = this.props, ae = (0, a.getLayoutItem)(H, h), ie = ce ? H : (0, a.compact)(H, (0, a.compactType)(this.props), Z);
        this.props.onResizeStop(ie, W, ae, null, A, O);
        const {
          oldLayout: pe
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: ie,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(ie, pe);
      }), y(this, "onDragOver", (h) => {
        var x;
        if (h.preventDefault(), h.stopPropagation(), P && // $FlowIgnore can't figure this out
        !((x = h.nativeEvent.target) !== null && x !== void 0 && x.classList.contains(R)))
          return !1;
        const {
          droppingItem: b,
          onDropDragOver: w,
          margin: A,
          cols: O,
          rowHeight: H,
          maxRows: W,
          width: Z,
          containerPadding: ce,
          transformScale: ae
        } = this.props, ie = w?.(h);
        if (ie === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const pe = f(f({}, b), ie), {
          layout: Y
        } = this.state, ee = h.currentTarget.getBoundingClientRect(), J = h.clientX - ee.left, V = h.clientY - ee.top, de = {
          left: J / ae,
          top: V / ae,
          e: h
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: ne,
              top: T
            } = this.state.droppingPosition;
            (ne != J || T != V) && this.setState({
              droppingPosition: de
            });
          }
        } else {
          const ne = {
            cols: O,
            margin: A,
            maxRows: W,
            rowHeight: H,
            containerWidth: Z,
            containerPadding: ce || A
          }, T = (0, l.calcXY)(ne, V, J, pe.w, pe.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ o.createElement("div", {
              key: pe.i
            }),
            droppingPosition: de,
            layout: [...Y, f(f({}, pe), {}, {
              x: T.x,
              y: T.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), y(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: h,
          cols: x
        } = this.props, {
          layout: b
        } = this.state, w = (0, a.compact)(b.filter((A) => A.i !== h.i), (0, a.compactType)(this.props), x, this.props.allowOverlap);
        this.setState({
          layout: w,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), y(this, "onDragLeave", (h) => {
        h.preventDefault(), h.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), y(this, "onDragEnter", (h) => {
        h.preventDefault(), h.stopPropagation(), this.dragEnterCounter++;
      }), y(this, "onDrop", (h) => {
        h.preventDefault(), h.stopPropagation();
        const {
          droppingItem: x
        } = this.props, {
          layout: b
        } = this.state, w = b.find((A) => A.i === x.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(b, w, h);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(h, x) {
      let b;
      return x.activeDrag ? null : (!(0, n.deepEqual)(h.layout, x.propsLayout) || h.compactType !== x.compactType ? b = h.layout : (0, a.childrenEqual)(h.children, x.children) || (b = x.layout), b ? {
        layout: (0, a.synchronizeLayoutWithChildren)(b, h.children, h.cols, (0, a.compactType)(h), h.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: h.compactType,
        children: h.children,
        propsLayout: h.layout
      } : null);
    }
    shouldComponentUpdate(h, x) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== h.children || !(0, a.fastRGLPropsEqual)(this.props, h, n.deepEqual) || this.state.activeDrag !== x.activeDrag || this.state.mounted !== x.mounted || this.state.droppingPosition !== x.droppingPosition
      );
    }
    componentDidUpdate(h, x) {
      if (!this.state.activeDrag) {
        const b = this.state.layout, w = x.layout;
        this.onLayoutMaybeChanged(b, w);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const h = (0, a.bottom)(this.state.layout), x = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return h * this.props.rowHeight + (h - 1) * this.props.margin[1] + x * 2 + "px";
    }
    onLayoutMaybeChanged(h, x) {
      x || (x = this.state.layout), (0, n.deepEqual)(x, h) || this.props.onLayoutChange(h);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: h
      } = this.state;
      if (!h) return null;
      const {
        width: x,
        cols: b,
        margin: w,
        containerPadding: A,
        rowHeight: O,
        maxRows: H,
        useCSSTransforms: W,
        transformScale: Z
      } = this.props;
      return /* @__PURE__ */ o.createElement(c.default, {
        w: h.w,
        h: h.h,
        x: h.x,
        y: h.y,
        i: h.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: x,
        cols: b,
        margin: w,
        containerPadding: A || w,
        maxRows: H,
        rowHeight: O,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: W,
        transformScale: Z
      }, /* @__PURE__ */ o.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(h, x) {
      if (!h || !h.key) return;
      const b = (0, a.getLayoutItem)(this.state.layout, String(h.key));
      if (!b) return null;
      const {
        width: w,
        cols: A,
        margin: O,
        containerPadding: H,
        rowHeight: W,
        maxRows: Z,
        isDraggable: ce,
        isResizable: ae,
        isBounded: ie,
        useCSSTransforms: pe,
        transformScale: Y,
        draggableCancel: ee,
        draggableHandle: J,
        resizeHandles: V,
        resizeHandle: de
      } = this.props, {
        mounted: ne,
        droppingPosition: T
      } = this.state, U = typeof b.isDraggable == "boolean" ? b.isDraggable : !b.static && ce, ve = typeof b.isResizable == "boolean" ? b.isResizable : !b.static && ae, we = b.resizeHandles || V, Ae = U && ie && b.isBounded !== !1;
      return /* @__PURE__ */ o.createElement(c.default, {
        containerWidth: w,
        cols: A,
        margin: O,
        containerPadding: H || O,
        maxRows: Z,
        rowHeight: W,
        cancel: ee,
        handle: J,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: U,
        isResizable: ve,
        isBounded: Ae,
        useCSSTransforms: pe && ne,
        usePercentages: !ne,
        transformScale: Y,
        w: b.w,
        h: b.h,
        x: b.x,
        y: b.y,
        i: b.i,
        minH: b.minH,
        minW: b.minW,
        maxH: b.maxH,
        maxW: b.maxW,
        static: b.static,
        droppingPosition: x ? T : void 0,
        resizeHandles: we,
        resizeHandle: de
      }, h);
    }
    render() {
      const {
        className: h,
        style: x,
        isDroppable: b,
        innerRef: w
      } = this.props, A = (0, i.default)(R, h), O = f({
        height: this.containerHeight()
      }, x);
      return /* @__PURE__ */ o.createElement("div", {
        ref: w,
        className: A,
        style: O,
        onDrop: b ? this.onDrop : a.noop,
        onDragLeave: b ? this.onDragLeave : a.noop,
        onDragEnter: b ? this.onDragEnter : a.noop,
        onDragOver: b ? this.onDragOver : a.noop
      }, o.Children.map(this.props.children, (H) => this.processGridItem(H)), b && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ui.default = E, y(E, "displayName", "ReactGridLayout"), y(E, "propTypes", u.default), y(E, "defaultProps", {
    autoSize: !0,
    cols: 12,
    className: "",
    style: {},
    draggableHandle: "",
    draggableCancel: "",
    containerPadding: null,
    rowHeight: 150,
    maxRows: 1 / 0,
    // infinite vertical growth
    layout: [],
    margin: [10, 10],
    isBounded: !1,
    isDraggable: !0,
    isResizable: !0,
    allowOverlap: !1,
    isDroppable: !1,
    useCSSTransforms: !0,
    transformScale: 1,
    verticalCompact: !0,
    compactType: "vertical",
    preventCollision: !1,
    droppingItem: {
      i: "__dropping-elem__",
      h: 1,
      w: 1
    },
    resizeHandles: ["se"],
    onLayoutChange: a.noop,
    onDragStart: a.noop,
    onDrag: a.noop,
    onDragStop: a.noop,
    onResizeStart: a.noop,
    onResize: a.noop,
    onResizeStop: a.noop,
    onDrop: a.noop,
    onDropDragOver: a.noop
  }), ui;
}
var bi = {}, Yn = {}, ju;
function Pp() {
  if (ju) return Yn;
  ju = 1, Object.defineProperty(Yn, "__esModule", {
    value: !0
  }), Yn.findOrGenerateResponsiveLayout = a, Yn.getBreakpointFromWidth = n, Yn.getColsFromBreakpoint = i, Yn.sortBreakpoints = l;
  var o = Er();
  function n(c, u) {
    const m = l(c);
    let g = m[0];
    for (let _ = 1, f = m.length; _ < f; _++) {
      const y = m[_];
      u > c[y] && (g = y);
    }
    return g;
  }
  function i(c, u) {
    if (!u[c])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + c + " is missing!");
    return u[c];
  }
  function a(c, u, m, g, _, f) {
    if (c[m]) return (0, o.cloneLayout)(c[m]);
    let y = c[g];
    const k = l(u), z = k.slice(k.indexOf(m));
    for (let R = 0, P = z.length; R < P; R++) {
      const E = z[R];
      if (c[E]) {
        y = c[E];
        break;
      }
    }
    return y = (0, o.cloneLayout)(y || []), (0, o.compact)((0, o.correctBounds)(y, {
      cols: _
    }), f, _);
  }
  function l(c) {
    return Object.keys(c).sort(function(m, g) {
      return c[m] - c[g];
    });
  }
  return Yn;
}
var qu;
function _f() {
  if (qu) return bi;
  qu = 1, Object.defineProperty(bi, "__esModule", {
    value: !0
  }), bi.default = void 0;
  var o = g(zt()), n = m(/* @__PURE__ */ Nn()), i = /* @__PURE__ */ zl(), a = Er(), l = Pp(), c = m(Ip());
  const u = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function m(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function g(b, w) {
    if (typeof WeakMap == "function") var A = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap();
    return (g = function(H, W) {
      if (!W && H && H.__esModule) return H;
      var Z, ce, ae = { __proto__: null, default: H };
      if (H === null || typeof H != "object" && typeof H != "function") return ae;
      if (Z = W ? O : A) {
        if (Z.has(H)) return Z.get(H);
        Z.set(H, ae);
      }
      for (const ie in H) ie !== "default" && {}.hasOwnProperty.call(H, ie) && ((ce = (Z = Object.defineProperty) && Object.getOwnPropertyDescriptor(H, ie)) && (ce.get || ce.set) ? Z(ae, ie, ce) : ae[ie] = H[ie]);
      return ae;
    })(b, w);
  }
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(b) {
      for (var w = 1; w < arguments.length; w++) {
        var A = arguments[w];
        for (var O in A) ({}).hasOwnProperty.call(A, O) && (b[O] = A[O]);
      }
      return b;
    }, _.apply(null, arguments);
  }
  function f(b, w) {
    if (b == null) return {};
    var A, O, H = y(b, w);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(b);
      for (O = 0; O < W.length; O++) A = W[O], w.indexOf(A) === -1 && {}.propertyIsEnumerable.call(b, A) && (H[A] = b[A]);
    }
    return H;
  }
  function y(b, w) {
    if (b == null) return {};
    var A = {};
    for (var O in b) if ({}.hasOwnProperty.call(b, O)) {
      if (w.indexOf(O) !== -1) continue;
      A[O] = b[O];
    }
    return A;
  }
  function k(b, w) {
    var A = Object.keys(b);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(b);
      w && (O = O.filter(function(H) {
        return Object.getOwnPropertyDescriptor(b, H).enumerable;
      })), A.push.apply(A, O);
    }
    return A;
  }
  function z(b) {
    for (var w = 1; w < arguments.length; w++) {
      var A = arguments[w] != null ? arguments[w] : {};
      w % 2 ? k(Object(A), !0).forEach(function(O) {
        R(b, O, A[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(A)) : k(Object(A)).forEach(function(O) {
        Object.defineProperty(b, O, Object.getOwnPropertyDescriptor(A, O));
      });
    }
    return b;
  }
  function R(b, w, A) {
    return (w = P(w)) in b ? Object.defineProperty(b, w, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : b[w] = A, b;
  }
  function P(b) {
    var w = E(b, "string");
    return typeof w == "symbol" ? w : w + "";
  }
  function E(b, w) {
    if (typeof b != "object" || !b) return b;
    var A = b[Symbol.toPrimitive];
    if (A !== void 0) {
      var O = A.call(b, w);
      if (typeof O != "object") return O;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (w === "string" ? String : Number)(b);
  }
  const S = (b) => Object.prototype.toString.call(b);
  function h(b, w) {
    return b == null ? null : Array.isArray(b) ? b : b[w];
  }
  let x = class extends o.Component {
    constructor() {
      super(...arguments), R(this, "state", this.generateInitialState()), R(this, "onLayoutChange", (w) => {
        this.props.onLayoutChange(w, z(z({}, this.props.layouts), {}, {
          [this.state.breakpoint]: w
        }));
      });
    }
    generateInitialState() {
      const {
        width: w,
        breakpoints: A,
        layouts: O,
        cols: H
      } = this.props, W = (0, l.getBreakpointFromWidth)(A, w), Z = (0, l.getColsFromBreakpoint)(W, H), ce = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, l.findOrGenerateResponsiveLayout)(O, A, W, W, Z, ce),
        breakpoint: W,
        cols: Z
      };
    }
    static getDerivedStateFromProps(w, A) {
      if (!(0, i.deepEqual)(w.layouts, A.layouts)) {
        const {
          breakpoint: O,
          cols: H
        } = A;
        return {
          layout: (0, l.findOrGenerateResponsiveLayout)(w.layouts, w.breakpoints, O, O, H, w.compactType),
          layouts: w.layouts
        };
      }
      return null;
    }
    componentDidUpdate(w) {
      (this.props.width != w.width || this.props.breakpoint !== w.breakpoint || !(0, i.deepEqual)(this.props.breakpoints, w.breakpoints) || !(0, i.deepEqual)(this.props.cols, w.cols)) && this.onWidthChange(w);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(w) {
      const {
        breakpoints: A,
        cols: O,
        layouts: H,
        compactType: W
      } = this.props, Z = this.props.breakpoint || (0, l.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), ce = this.state.breakpoint, ae = (0, l.getColsFromBreakpoint)(Z, O), ie = z({}, H);
      if (ce !== Z || w.breakpoints !== A || w.cols !== O) {
        ce in ie || (ie[ce] = (0, a.cloneLayout)(this.state.layout));
        let ee = (0, l.findOrGenerateResponsiveLayout)(ie, A, Z, ce, ae, W);
        ee = (0, a.synchronizeLayoutWithChildren)(ee, this.props.children, ae, W, this.props.allowOverlap), ie[Z] = ee, this.props.onBreakpointChange(Z, ae), this.props.onLayoutChange(ee, ie), this.setState({
          breakpoint: Z,
          layout: ee,
          cols: ae
        });
      }
      const pe = h(this.props.margin, Z), Y = h(this.props.containerPadding, Z);
      this.props.onWidthChange(this.props.width, pe, ae, Y);
    }
    render() {
      const w = this.props, {
        breakpoint: A,
        breakpoints: O,
        cols: H,
        layouts: W,
        margin: Z,
        containerPadding: ce,
        onBreakpointChange: ae,
        onLayoutChange: ie,
        onWidthChange: pe
      } = w, Y = f(w, u);
      return /* @__PURE__ */ o.createElement(c.default, _({}, Y, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: h(Z, this.state.breakpoint),
        containerPadding: h(ce, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return bi.default = x, R(x, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: n.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: n.default.object,
    allowOverlap: n.default.bool,
    // # of cols. This is a breakpoint -> cols map
    cols: n.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: n.default.oneOfType([n.default.array, n.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: n.default.oneOfType([n.default.array, n.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts(b, w) {
      if (S(b[w]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + S(b[w]));
      Object.keys(b[w]).forEach((A) => {
        if (!(A in b.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, a.validateLayout)(b.layouts[A], "layouts." + A);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: n.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: n.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: n.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: n.default.func
  }), R(x, "defaultProps", {
    breakpoints: {
      lg: 1200,
      md: 996,
      sm: 768,
      xs: 480,
      xxs: 0
    },
    cols: {
      lg: 12,
      md: 10,
      sm: 6,
      xs: 4,
      xxs: 2
    },
    containerPadding: {
      lg: null,
      md: null,
      sm: null,
      xs: null,
      xxs: null
    },
    layouts: {},
    margin: [10, 10],
    allowOverlap: !1,
    onBreakpointChange: a.noop,
    onLayoutChange: a.noop,
    onWidthChange: a.noop
  }), bi;
}
var $o = {}, Rp = function() {
  if (typeof Map < "u")
    return Map;
  function o(n, i) {
    var a = -1;
    return n.some(function(l, c) {
      return l[0] === i ? (a = c, !0) : !1;
    }), a;
  }
  return (
    /** @class */
    function() {
      function n() {
        this.__entries__ = [];
      }
      return Object.defineProperty(n.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), n.prototype.get = function(i) {
        var a = o(this.__entries__, i), l = this.__entries__[a];
        return l && l[1];
      }, n.prototype.set = function(i, a) {
        var l = o(this.__entries__, i);
        ~l ? this.__entries__[l][1] = a : this.__entries__.push([i, a]);
      }, n.prototype.delete = function(i) {
        var a = this.__entries__, l = o(a, i);
        ~l && a.splice(l, 1);
      }, n.prototype.has = function(i) {
        return !!~o(this.__entries__, i);
      }, n.prototype.clear = function() {
        this.__entries__.splice(0);
      }, n.prototype.forEach = function(i, a) {
        a === void 0 && (a = null);
        for (var l = 0, c = this.__entries__; l < c.length; l++) {
          var u = c[l];
          i.call(a, u[1], u[0]);
        }
      }, n;
    }()
  );
}(), yl = typeof window < "u" && typeof document < "u" && window.document === document, Zo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), bf = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Zo) : function(o) {
    return setTimeout(function() {
      return o(Date.now());
    }, 1e3 / 60);
  };
}(), yf = 2;
function vf(o, n) {
  var i = !1, a = !1, l = 0;
  function c() {
    i && (i = !1, o()), a && m();
  }
  function u() {
    bf(c);
  }
  function m() {
    var g = Date.now();
    if (i) {
      if (g - l < yf)
        return;
      a = !0;
    } else
      i = !0, a = !1, setTimeout(u, n);
    l = g;
  }
  return m;
}
var xf = 20, wf = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], kf = typeof MutationObserver < "u", Sf = (
  /** @class */
  function() {
    function o() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = vf(this.refresh.bind(this), xf);
    }
    return o.prototype.addObserver = function(n) {
      ~this.observers_.indexOf(n) || this.observers_.push(n), this.connected_ || this.connect_();
    }, o.prototype.removeObserver = function(n) {
      var i = this.observers_, a = i.indexOf(n);
      ~a && i.splice(a, 1), !i.length && this.connected_ && this.disconnect_();
    }, o.prototype.refresh = function() {
      var n = this.updateObservers_();
      n && this.refresh();
    }, o.prototype.updateObservers_ = function() {
      var n = this.observers_.filter(function(i) {
        return i.gatherActive(), i.hasActive();
      });
      return n.forEach(function(i) {
        return i.broadcastActive();
      }), n.length > 0;
    }, o.prototype.connect_ = function() {
      !yl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), kf ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, o.prototype.disconnect_ = function() {
      !yl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, o.prototype.onTransitionEnd_ = function(n) {
      var i = n.propertyName, a = i === void 0 ? "" : i, l = wf.some(function(c) {
        return !!~a.indexOf(c);
      });
      l && this.refresh();
    }, o.getInstance = function() {
      return this.instance_ || (this.instance_ = new o()), this.instance_;
    }, o.instance_ = null, o;
  }()
), Np = function(o, n) {
  for (var i = 0, a = Object.keys(n); i < a.length; i++) {
    var l = a[i];
    Object.defineProperty(o, l, {
      value: n[l],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return o;
}, kr = function(o) {
  var n = o && o.ownerDocument && o.ownerDocument.defaultView;
  return n || Zo;
}, Lp = sa(0, 0, 0, 0);
function ea(o) {
  return parseFloat(o) || 0;
}
function Fu(o) {
  for (var n = [], i = 1; i < arguments.length; i++)
    n[i - 1] = arguments[i];
  return n.reduce(function(a, l) {
    var c = o["border-" + l + "-width"];
    return a + ea(c);
  }, 0);
}
function Ef(o) {
  for (var n = ["top", "right", "bottom", "left"], i = {}, a = 0, l = n; a < l.length; a++) {
    var c = l[a], u = o["padding-" + c];
    i[c] = ea(u);
  }
  return i;
}
function Af(o) {
  var n = o.getBBox();
  return sa(0, 0, n.width, n.height);
}
function Cf(o) {
  var n = o.clientWidth, i = o.clientHeight;
  if (!n && !i)
    return Lp;
  var a = kr(o).getComputedStyle(o), l = Ef(a), c = l.left + l.right, u = l.top + l.bottom, m = ea(a.width), g = ea(a.height);
  if (a.boxSizing === "border-box" && (Math.round(m + c) !== n && (m -= Fu(a, "left", "right") + c), Math.round(g + u) !== i && (g -= Fu(a, "top", "bottom") + u)), !If(o)) {
    var _ = Math.round(m + c) - n, f = Math.round(g + u) - i;
    Math.abs(_) !== 1 && (m -= _), Math.abs(f) !== 1 && (g -= f);
  }
  return sa(l.left, l.top, m, g);
}
var zf = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(o) {
    return o instanceof kr(o).SVGGraphicsElement;
  } : function(o) {
    return o instanceof kr(o).SVGElement && typeof o.getBBox == "function";
  };
}();
function If(o) {
  return o === kr(o).document.documentElement;
}
function Pf(o) {
  return yl ? zf(o) ? Af(o) : Cf(o) : Lp;
}
function Rf(o) {
  var n = o.x, i = o.y, a = o.width, l = o.height, c = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, u = Object.create(c.prototype);
  return Np(u, {
    x: n,
    y: i,
    width: a,
    height: l,
    top: i,
    right: n + a,
    bottom: l + i,
    left: n
  }), u;
}
function sa(o, n, i, a) {
  return { x: o, y: n, width: i, height: a };
}
var Nf = (
  /** @class */
  function() {
    function o(n) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = sa(0, 0, 0, 0), this.target = n;
    }
    return o.prototype.isActive = function() {
      var n = Pf(this.target);
      return this.contentRect_ = n, n.width !== this.broadcastWidth || n.height !== this.broadcastHeight;
    }, o.prototype.broadcastRect = function() {
      var n = this.contentRect_;
      return this.broadcastWidth = n.width, this.broadcastHeight = n.height, n;
    }, o;
  }()
), Lf = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(n, i) {
      var a = Rf(i);
      Np(this, { target: n, contentRect: a });
    }
    return o;
  }()
), Of = (
  /** @class */
  function() {
    function o(n, i, a) {
      if (this.activeObservations_ = [], this.observations_ = new Rp(), typeof n != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = n, this.controller_ = i, this.callbackCtx_ = a;
    }
    return o.prototype.observe = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof kr(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(n) || (i.set(n, new Nf(n)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, o.prototype.unobserve = function(n) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(n instanceof kr(n).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(n) && (i.delete(n), i.size || this.controller_.removeObserver(this));
      }
    }, o.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, o.prototype.gatherActive = function() {
      var n = this;
      this.clearActive(), this.observations_.forEach(function(i) {
        i.isActive() && n.activeObservations_.push(i);
      });
    }, o.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var n = this.callbackCtx_, i = this.activeObservations_.map(function(a) {
          return new Lf(a.target, a.broadcastRect());
        });
        this.callback_.call(n, i, n), this.clearActive();
      }
    }, o.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, o.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, o;
  }()
), Op = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Rp(), Tp = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(n) {
      if (!(this instanceof o))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var i = Sf.getInstance(), a = new Of(n, i, this);
      Op.set(this, a);
    }
    return o;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(o) {
  Tp.prototype[o] = function() {
    var n;
    return (n = Op.get(this))[o].apply(n, arguments);
  };
});
var Tf = function() {
  return typeof Zo.ResizeObserver < "u" ? Zo.ResizeObserver : Tp;
}();
const Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tf
}, Symbol.toStringTag, { value: "Module" })), Bf = /* @__PURE__ */ Kg(Mf);
var Uu;
function Hf() {
  if (Uu) return $o;
  Uu = 1, Object.defineProperty($o, "__esModule", {
    value: !0
  }), $o.default = R;
  var o = u(zt()), n = c(/* @__PURE__ */ Nn()), i = c(Bf), a = c(aa());
  const l = ["measureBeforeMount"];
  function c(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function u(P, E) {
    if (typeof WeakMap == "function") var S = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (u = function(x, b) {
      if (!b && x && x.__esModule) return x;
      var w, A, O = { __proto__: null, default: x };
      if (x === null || typeof x != "object" && typeof x != "function") return O;
      if (w = b ? h : S) {
        if (w.has(x)) return w.get(x);
        w.set(x, O);
      }
      for (const H in x) H !== "default" && {}.hasOwnProperty.call(x, H) && ((A = (w = Object.defineProperty) && Object.getOwnPropertyDescriptor(x, H)) && (A.get || A.set) ? w(O, H, A) : O[H] = x[H]);
      return O;
    })(P, E);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(P) {
      for (var E = 1; E < arguments.length; E++) {
        var S = arguments[E];
        for (var h in S) ({}).hasOwnProperty.call(S, h) && (P[h] = S[h]);
      }
      return P;
    }, m.apply(null, arguments);
  }
  function g(P, E) {
    if (P == null) return {};
    var S, h, x = _(P, E);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(P);
      for (h = 0; h < b.length; h++) S = b[h], E.indexOf(S) === -1 && {}.propertyIsEnumerable.call(P, S) && (x[S] = P[S]);
    }
    return x;
  }
  function _(P, E) {
    if (P == null) return {};
    var S = {};
    for (var h in P) if ({}.hasOwnProperty.call(P, h)) {
      if (E.indexOf(h) !== -1) continue;
      S[h] = P[h];
    }
    return S;
  }
  function f(P, E, S) {
    return (E = y(E)) in P ? Object.defineProperty(P, E, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : P[E] = S, P;
  }
  function y(P) {
    var E = k(P, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function k(P, E) {
    if (typeof P != "object" || !P) return P;
    var S = P[Symbol.toPrimitive];
    if (S !== void 0) {
      var h = S.call(P, E);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(P);
  }
  const z = "react-grid-layout";
  function R(P) {
    var E;
    return E = class extends o.Component {
      constructor() {
        super(...arguments), f(this, "state", {
          width: 1280
        }), f(this, "elementRef", /* @__PURE__ */ o.createRef()), f(this, "mounted", !1), f(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new i.default((x) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const w = x[0].contentRect.width;
            this.setState({
              width: w
            });
          }
        });
        const h = this.elementRef.current;
        h instanceof HTMLElement && this.resizeObserver.observe(h);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const h = this.elementRef.current;
        h instanceof HTMLElement && this.resizeObserver.unobserve(h), this.resizeObserver.disconnect();
      }
      render() {
        const h = this.props, {
          measureBeforeMount: x
        } = h, b = g(h, l);
        return x && !this.mounted ? /* @__PURE__ */ o.createElement("div", {
          className: (0, a.default)(this.props.className, z),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ o.createElement(P, m({
          innerRef: this.elementRef
        }, b, this.state));
      }
    }, f(E, "defaultProps", {
      measureBeforeMount: !1
    }), f(E, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: n.default.bool
    }), E;
  }
  return $o;
}
var Wu;
function Df() {
  return Wu || (Wu = 1, function(o) {
    o.exports = Ip().default, o.exports.utils = Er(), o.exports.calculateUtils = Il(), o.exports.Responsive = _f().default, o.exports.Responsive.utils = Pp(), o.exports.WidthProvider = Hf().default;
  }(Js)), Js.exports;
}
var Vu = Df();
const $f = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, pn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, Mp = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, Fe = (o, n, i, a, l) => ({ i: o, x: n, y: i, w: a, h: l, minW: Math.min(a, 3), minH: 2, maxW: 12, maxH: 12 }), Vo = { lg: [Fe("activity-history", 0, 0, 3, 4), Fe("automations", 3, 0, 3, 4), Fe("backup-restore", 6, 0, 3, 4), Fe("security-status", 9, 0, 3, 3), Fe("access-control", 0, 5, 6, 3), Fe("alarm-configuration", 6, 4, 6, 8)], md: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 4, 0, 4, 4), Fe("backup-restore", 0, 4, 4, 4), Fe("access-control", 4, 4, 4, 3), Fe("alarm-configuration", 0, 8, 8, 8), Fe("security-status", 0, 16, 4, 3)], sm: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 0, 4, 4, 4), Fe("backup-restore", 0, 8, 4, 4), Fe("access-control", 0, 12, 4, 3), Fe("alarm-configuration", 0, 15, 4, 8), Fe("security-status", 0, 23, 4, 3)], xs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 3), Fe("alarm-configuration", 0, 15, 2, 8), Fe("security-status", 0, 23, 2, 3)], xxs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 3), Fe("alarm-configuration", 0, 15, 2, 8), Fe("security-status", 0, 23, 2, 3)] };
function vl(o, n, i) {
  return Object.entries(Mp).map(([a, l]) => ({ size: a, distance: Math.abs(Math.min(l.w, i) - o) + Math.abs(l.h - n) })).sort((a, l) => a.distance - l.distance)[0]?.size ?? "S";
}
function Bp(o, n) {
  const i = Mp[o];
  return { w: Math.min(i.w, n), h: i.h };
}
function jf(o, n) {
  const i = vl(o.w, o.h, n), a = Bp(i, n);
  return { ...o, w: a.w, h: a.h, x: Math.max(0, Math.min(o.x, n - a.w)), size: i };
}
function xl(o, n) {
  return o.some((i) => i.i !== n.i && n.x < i.x + i.w && n.x + n.w > i.x && n.y < i.y + i.h && n.y + n.h > i.y);
}
function qf(o, n, i) {
  for (let a = 0; a < 240; a++) for (let l = 0; l <= i - n.w; l++) {
    const c = { ...n, x: l, y: a };
    if (!xl(o, c)) return c;
  }
  return { ...n, x: 0, y: Math.max(0, ...o.map((a) => a.y + a.h)) };
}
function Sr(o) {
  const n = {};
  return Object.keys(pn).forEach((i) => {
    const a = pn[i], l = Array.isArray(o?.[i]) ? o[i] : [], c = new Map(l.map((_) => [_.i, _])), u = (Vo[i] || []).map((_) => {
      const f = c.get(_.i);
      if (!f) return { ..._ };
      const y = Math.min(Math.max(1, f.w), a);
      return { ..._, ...f, w: y, x: Math.max(0, Math.min(f.x, a - y)), y: Math.max(0, f.y) };
    }), m = new Set(u.map((_) => _.i)), g = l.filter((_) => !m.has(_.i)).map((_) => ({ ..._, w: Math.min(Math.max(1, _.w), a), x: Math.max(0, Math.min(_.x, a - Math.min(_.w, a))), y: Math.max(0, _.y) }));
    n[i] = [...u, ...g];
  }), n;
}
class Ff {
  key(n, i) {
    return `argus:dashboard-layout:${n}:${i}`;
  }
  read(n, i) {
    try {
      const a = JSON.parse(localStorage.getItem(this.key(n, i)) || "null");
      return a?.layoutVersion === 1 ? a : null;
    } catch {
      return null;
    }
  }
  write(n, i, a) {
    localStorage.setItem(this.key(n, i), JSON.stringify(a));
  }
  async load(n, i) {
    const a = this.read(n, i);
    return a ? Sr(a.layouts) : null;
  }
  async save(n, i, a) {
    const l = this.read(n, i);
    this.write(n, i, { layoutVersion: 1, layouts: a, visibility: l?.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(n, i) {
    return this.read(n, i)?.visibility ?? null;
  }
  async saveVisibility(n, i, a) {
    const l = this.read(n, i);
    this.write(n, i, { layoutVersion: 1, layouts: l?.layouts ?? Sr(null), visibility: a, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(n, i) {
    localStorage.removeItem(this.key(n, i));
  }
}
const Uf = Vu.WidthProvider(Vu.Responsive);
function Wf({ widget: o, node: n, editing: i, size: a, onSize: l, onHide: c, onReset: u }) {
  const m = ft.useRef(null);
  return ft.useLayoutEffect(() => {
    m.current?.appendChild(n), n.draggable = !1, n.querySelector(":scope > .panel-edit-overlay")?.remove(), i ? n.setAttribute("inert", "") : n.removeAttribute("inert");
  }, [n, i]), /* @__PURE__ */ Ve.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ Ve.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ Ve.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${o.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ Ve.jsx("strong", { children: o.title }),
      /* @__PURE__ */ Ve.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ Ve.jsx("summary", { "aria-label": `Opciones de ${o.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ Ve.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ Ve.jsx("span", { children: "Tamaño" }),
          /* @__PURE__ */ Ve.jsx("div", { children: ["S", "M", "L", "XL"].map((g) => /* @__PURE__ */ Ve.jsx("button", { type: "button", className: g === a ? "active" : "", onClick: () => l(g), children: g }, g)) }),
          /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: u, children: "Restablecer widget" }),
          /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: c, children: "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ Ve.jsx("div", { className: `argus-widget__content${o.kind === "access-control" ? " argus-widget__content--access" : ""}`, ref: m })
  ] });
}
function Vf({ widgets: o, nodes: n, storage: i, userId: a, dashboardId: l, onEditing: c, registerEditor: u }) {
  const m = ft.useMemo(() => Object.fromEntries(o.map((Y) => [Y.id, Y.visible])), [o]), [g, _] = ft.useState(Vo), [f, y] = ft.useState(m), [k, z] = ft.useState(!1), [R, P] = ft.useState(!1), [E, S] = ft.useState("lg"), [h, x] = ft.useState(""), b = ft.useRef(Vo), w = ft.useRef(), A = ft.useRef(!1);
  ft.useEffect(() => {
    u(z);
  }, [u]), ft.useEffect(() => {
    let Y = !0;
    return P(!1), Promise.all([i.load(a, l), i.loadVisibility?.(a, l)]).then(([ee, J]) => {
      if (!Y) return;
      const V = Sr(ee);
      _(V), b.current = V, J && y({ ...m, ...J }), P(!0);
    }), () => {
      Y = !1;
    };
  }, [i, a, l, m]), ft.useEffect(() => {
    c(k), R && A.current && !k && i.save(a, l, b.current), A.current = k;
  }, [k, R, c, i, a, l]), ft.useEffect(() => {
    const Y = (ee) => {
      k && (ee.key === "Escape" ? (z(!1), x("Edición finalizada")) : ee.key === "Enter" && ee.target === document.body && z(!1));
    };
    return window.addEventListener("keydown", Y), () => window.removeEventListener("keydown", Y);
  }, [k]), ft.useEffect(() => () => clearTimeout(w.current), []);
  const O = (Y, ee = !1) => {
    _(Y), b.current = Y, clearTimeout(w.current), w.current = window.setTimeout(() => i.save(a, l, Y), ee ? 0 : 550);
  }, H = (Y, ee) => {
    const J = { ...f, [Y]: ee };
    y(J), i.saveVisibility?.(a, l, J), x(ee ? "Widget visible" : "Widget oculto");
  }, W = (Y, ee, J) => {
    const V = b.current, de = V[E] || [], ne = de.filter((ve) => ve.i !== Y), T = xl(ne, ee) ? qf(ne, ee, pn[E]) : ee, U = { ...V, [E]: de.map((ve) => ve.i === Y ? T : ve) };
    O(U, !0), x(J);
  }, Z = (Y, ee) => {
    const J = (b.current[E] || []).find((de) => de.i === Y);
    if (!J) return;
    const V = Bp(ee, pn[E]);
    W(Y, { ...J, ...V, x: Math.max(0, Math.min(J.x, pn[E] - V.w)) }, `Tamaño ${ee}`);
  }, ce = (Y) => {
    const ee = (Vo[E] || []).find((J) => J.i === Y);
    ee && W(Y, { ...ee }, "Widget restablecido");
  }, ae = (Y, ee, J) => {
    const V = jf(J, pn[E]);
    W(J.i, V, `Tamaño ${vl(V.w, V.h, pn[E])}`);
  }, ie = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await i.reset(a, l);
    const Y = Sr(null);
    y(m), O(Y, !0), x("Diseño predeterminado restaurado");
  }, pe = g[E] || [];
  return R ? /* @__PURE__ */ Ve.jsxs("section", { className: `argus-dashboard ${k ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ Ve.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: () => z((Y) => !Y), children: k ? "✓ Listo" : "✥ Editar tablero" }),
      k && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
        /* @__PURE__ */ Ve.jsx("button", { type: "button", onClick: ie, children: "Restablecer diseño" }),
        /* @__PURE__ */ Ve.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: o.filter((Y) => f[Y.id] === !1).map((Y) => /* @__PURE__ */ Ve.jsxs("button", { type: "button", onClick: () => H(Y.id, !0), children: [
          "Mostrar ",
          Y.title
        ] }, Y.id)) })
      ] })
    ] }),
    /* @__PURE__ */ Ve.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: h }),
    /* @__PURE__ */ Ve.jsx(Uf, { className: "argus-dashboard-grid", layouts: g, breakpoints: $f, cols: pn, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: k, isResizable: k, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (Y) => S(Y), onLayoutChange: (Y, ee) => {
      k && (_(ee), b.current = ee);
    }, onResizeStop: ae, onDragStop: (Y, ee, J) => {
      const V = (b.current[E] || []).filter((de) => de.i !== J.i);
      if (xl(V, J)) {
        _({ ...b.current }), x("Posición bloqueada por colisión");
        return;
      }
      W(J.i, J, "Posición guardada");
    }, useCSSTransforms: !0, children: o.filter((Y) => f[Y.id] !== !1 && n.has(Y.id)).map((Y) => {
      const ee = pe.find((V) => V.i === Y.id), J = ee ? vl(ee.w, ee.h, pn[E]) : Y.size;
      return /* @__PURE__ */ Ve.jsx("div", { children: /* @__PURE__ */ Ve.jsx(Wf, { widget: Y, node: n.get(Y.id), editing: k, size: J, onSize: (V) => Z(Y.id, V), onHide: () => H(Y.id, !1), onReset: () => ce(Y.id) }) }, Y.id);
    }) })
  ] }) : /* @__PURE__ */ Ve.jsx("section", { className: "argus-dashboard", children: /* @__PURE__ */ Ve.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: "Cargando tablero…" }) });
}
const Gu = [
  { id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 },
  { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 },
  { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 },
  { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 },
  { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 },
  { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }
];
class Gf extends Ff {
  constructor(n) {
    super(), this.panel = n;
  }
  record() {
    return this.panel._ui?.dashboard?.react_layout_v2 || {};
  }
  async remote(n) {
    if (!this.panel._send) return;
    const a = { ...this.record(), ...n, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, l = { ...this.panel._ui?.dashboard || {}, react_layout_v2: a }, c = this.panel._dashboard?.entry_id || this.panel._dashboard?.entries?.[0]?.entry_id;
    await this.panel._send("argus/save_ui", { dashboard: l, ...c ? { entry_id: c } : {} }), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = l;
  }
  async load(n, i) {
    const a = this.record().layouts;
    return a ? Sr(a) : super.load(n, i);
  }
  async save(n, i, a) {
    await super.save(n, i, a), await this.remote({ layouts: a });
  }
  async loadVisibility(n, i) {
    return this.record().visibility || await super.loadVisibility(n, i);
  }
  async saveVisibility(n, i, a) {
    await super.saveVisibility(n, i, a), await this.remote({ visibility: a });
  }
  async reset(n, i) {
    await super.reset(n, i), await this.remote({ layouts: Sr(null), visibility: {} });
  }
}
function Hp(o) {
  const n = o.shadowRoot?.getElementById("edit-widgets-label");
  (n?.closest("button") || n)?.remove(), o.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((a) => a.remove());
  let i = o.shadowRoot?.getElementById("argus-react-editor-only");
  i || (i = document.createElement("style"), i.id = "argus-react-editor-only", i.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", o.shadowRoot.appendChild(i));
}
function Yf(o) {
  Hp(o);
  const n = o.shadowRoot?.getElementById("widget-grid"), i = o._dashboard?.entry_id || o._dashboard?.entries?.[0]?.entry_id;
  if (!n || !i || o._argusReactRoot) return;
  let a = o.shadowRoot.getElementById("argus-react-dashboard-style");
  if (a || (a = document.createElement("style"), a.id = "argus-react-dashboard-style", a.textContent = of + af + sf, o.shadowRoot.appendChild(a)), !o.shadowRoot.getElementById("argus-access-scroll-fix")) {
    const m = document.createElement("style");
    m.id = "argus-access-scroll-fix", m.textContent = ".argus-widget__content--access{display:flex;min-height:0;overflow:hidden}.argus-widget__content--access>#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}.argus-widget__content--access>#w-access>.panel-head{flex:0 0 auto!important}.argus-widget__content--access>#w-access>#access-workspace{display:block!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;padding-right:4px}", o.shadowRoot.appendChild(m);
  }
  const l = /* @__PURE__ */ new Map();
  Gu.forEach((m) => {
    const g = o.shadowRoot.getElementById(m.nativeId);
    g && l.set(m.id, g);
  });
  const c = document.createElement("div");
  c.id = "argus-react-dashboard-root", n.appendChild(c);
  const u = rf.createRoot(c);
  o._argusReactRoot = u, u.render(/* @__PURE__ */ Ve.jsx(Vf, { widgets: Gu, nodes: l, storage: new Gf(o), userId: o._currentProfile?.id || o._hass?.user?.id || "anonymous", dashboardId: i, onEditing: (m) => {
    o._widgetEditing = m, n.classList.toggle("editing", m);
  }, registerEditor: (m) => {
    o._argusReactSetEditing = m;
  } }));
}
function Kf(o) {
  if (!o || o.__argusReactDashboard) return;
  o.__argusReactDashboard = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load;
  n.connectedCallback = function() {
    const l = i?.call(this);
    return Hp(this), l;
  }, n._load = async function() {
    const l = await a?.call(this);
    return Yf(this), l;
  }, n._toggleWidgetEditing = function() {
    this._argusReactSetEditing?.(!this._widgetEditing);
  };
}
function Yu(o) {
  const n = o._hass?.auth?.accessToken;
  return n ? { Authorization: `Bearer ${n}` } : {};
}
function Xf(o) {
  const n = o?.prototype;
  !n || n.__argusMediaClient || (n.__argusMediaClient = !0, n._loadUploadedFiles = async function() {
    try {
      const i = await fetch("/api/argus/media", { headers: Yu(this), credentials: "same-origin" });
      if (!i.ok) throw new Error(`HTTP ${i.status}`);
      const a = await i.json();
      this._uploadedFiles = Array.isArray(a.files) ? a.files : [];
    } catch (i) {
      console.error("Private Argus media listing failed", i), this._uploadedFiles = [];
    }
    this._renderUploadedFiles?.();
  }, n._deleteUploadedFile = async function(i) {
    try {
      const a = await fetch(`/api/argus/media/${encodeURIComponent(i)}`, { method: "DELETE", headers: Yu(this), credentials: "same-origin" });
      if (!a.ok) throw new Error(`HTTP ${a.status}`);
      this._uploadedFiles = (this._uploadedFiles ?? []).filter((c) => c.name !== i);
      const l = [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]];
      for (const [c, u] of l) {
        const m = this.shadowRoot.getElementById(c);
        m?.value.includes(`/${i}?`) && (m.value = "", this[u] = "");
      }
      this._renderUploadedFiles?.();
    } catch (a) {
      const l = a instanceof Error ? a.message : String(a);
      console.error("Private Argus media deletion failed", a), window.alert(this._format?.("delete_file_error", { error: l }) ?? l);
    }
  });
}
const jo = (o, n) => o.getElementById(n), qo = (o, n, i) => o._t?.(n) ?? i;
function Qf(o) {
  const n = o?.prototype;
  !n || n.__argusSecurityClient || (n.__argusSecurityClient = !0, n._savePin = async function() {
    const i = this.shadowRoot.getElementById("pin-status"), l = this._dashboard?.entries?.[0], c = jo(this.shadowRoot, "current-pin")?.value ?? "", u = jo(this.shadowRoot, "new-pin-1")?.value ?? "", m = jo(this.shadowRoot, "new-pin-2")?.value ?? "", g = (_) => {
      i && (i.textContent = _, i.className = "status err");
    };
    if (!l?.entry_id) return g("No Argus config entry is available");
    if (l.pin_configured && !c) return g(qo(this, "pin_incorrect", "PIN incorrecto"));
    if (u !== m) return g(qo(this, "pin_mismatch", "Los PIN no coinciden"));
    if (u && !/^\d{4,12}$/.test(u)) return g("PIN: se requieren entre 4 y 12 dígitos");
    if (!this._send) return g("Argus WebSocket is unavailable");
    try {
      await this._send("argus/update_master_pin", { entry_id: l.entry_id, pin: u, current_pin: c }), l.pin_configured = !!u, i && (i.textContent = u ? qo(this, "pin_updated", "PIN actualizado") : qo(this, "pin_deleted", "PIN eliminado"), i.className = "status ok");
      for (const _ of ["current-pin", "new-pin-1", "new-pin-2"]) {
        const f = jo(this.shadowRoot, _);
        f && (f.value = "");
      }
      this._syncAccessSummary?.(), window.setTimeout(() => {
        this._load?.();
      }, 800);
    } catch (_) {
      g(_ instanceof Error ? _.message : String(_));
    }
  }, n._handleForgotPin = function() {
    const i = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", a = this.shadowRoot.getElementById("pin-status");
    a ? (a.textContent = i, a.className = "status err") : window.alert(i);
  });
}
const Jf = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block}.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;
function Zf(o) {
  const n = o.__argusWebgl;
  if (!n) return;
  cancelAnimationFrame(n.frame), n.observer?.disconnect(), document.removeEventListener("visibilitychange", n.visibility), n.gl.deleteBuffer(n.buffer), n.gl.deleteProgram(n.program);
  const i = n.gl.getExtension("WEBGL_lose_context");
  i && i.loseContext(), delete o.__argusWebgl;
}
function eh(o) {
  const n = o?.prototype;
  if (!n || n.__argusPremiumExperience) return;
  n.__argusPremiumExperience = !0;
  const i = n.connectedCallback;
  n.connectedCallback = function() {
    const l = i?.call(this);
    return queueMicrotask(() => {
      if (this.shadowRoot && !this.shadowRoot.getElementById("argus-premium-style")) {
        const c = document.createElement("style");
        c.id = "argus-premium-style", c.textContent = Jf, this.shadowRoot.append(c);
      }
    }), l;
  };
  const a = n.disconnectedCallback;
  n.disconnectedCallback = function() {
    const l = this.shadowRoot;
    return l && l.querySelectorAll(".wx-webgl").forEach(Zf), a?.call(this);
  };
}
const wl = "argus-motion-system-v2049", Go = "__argusMotionV2049", Ku = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", il = `
:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;
function th(o) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
  const n = String(o._argusPerfProfile || o.dataset?.argusPerf || "").toLowerCase();
  return n === "essential" || o.classList.contains("argus-perf-essential") ? "essential" : n === "light" ? "light" : "full";
}
function Xu(o) {
  if (o[Go]) return o[Go];
  const n = {
    panel: o,
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
  return Object.defineProperty(o, Go, { value: n, writable: !0, configurable: !0 }), n;
}
function nh(o, n) {
  const i = requestAnimationFrame(() => {
    o.rafs.delete(i), o.active && n();
  });
  return o.rafs.add(i), i;
}
function ol(o, n, i, a, l) {
  n.addEventListener(i, a, l), o.cleanups.add(() => n.removeEventListener(i, a, l));
}
function Rl(o) {
  const n = o.shadowRoot;
  if (!n) return;
  let i = n.getElementById(wl);
  i ? i.textContent !== il && (i.textContent = il) : (i = document.createElement("style"), i.id = wl, i.textContent = il, n.appendChild(i));
}
function Ai(o) {
  o.profileControl?.classList.remove("is-entering"), o.profileControl = null, o.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function Qu(o, n) {
  Ai(o), o.profileControl = n, n?.classList.add("is-entering"), o.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function rh(o) {
  o.observer || !o.panel.shadowRoot || (o.observer = new MutationObserver((n) => {
    n.some((i) => [...i.addedNodes].some((a) => a instanceof Element && a.id !== wl)) && (o.observerFrame || (o.observerFrame = nh(o, () => {
      o.observerFrame = 0, Rl(o.panel);
    })));
  }), o.observer.observe(o.panel.shadowRoot, { childList: !0, subtree: !0, attributes: !1 }));
}
function ih(o) {
  const n = o.panel.shadowRoot;
  if (!n) return;
  const i = (a) => {
    a && (a.classList.remove("argus-motion-press"), o.pressed.delete(a));
  };
  ol(o, n, "pointerdown", (a) => {
    if (th(o.panel) === "essential") return;
    const c = a.target?.closest?.(Ku);
    !c || c.disabled || (c.classList.add("argus-motion-press"), o.pressed.add(c));
  }, !0), ["pointerup", "pointercancel", "pointerleave"].forEach((a) => ol(o, n, a, (l) => {
    const c = l.target;
    i(c?.closest?.(Ku));
  }, !0)), ol(o, n, "click", (a) => {
    const l = a.target, c = l?.closest?.(".user-card");
    c && c.dataset.isOwn === "true" && c.dataset.pinRequired !== "true" && Qu(o, c), l?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && Qu(o, l.closest("button")), l?.closest?.("#btn-cancel-login") && Ai(o);
  }, !0);
}
function al(o) {
  o.active || !o.panel.shadowRoot || (o.active = !0, Rl(o.panel), ih(o), rh(o), o.api = Object.freeze({ animateView: () => {
  }, stagger: () => {
  }, transitionBackground: () => () => {
  }, animateDashboard: () => {
  } }));
}
function oh(o) {
  o.active = !1, o.observer?.disconnect(), o.observer = null, o.observerFrame && cancelAnimationFrame(o.observerFrame), o.observerFrame = 0, o.rafs.forEach(cancelAnimationFrame), o.rafs.clear(), o.timers.forEach(clearTimeout), o.timers.clear(), o.cleanups.forEach((n) => n()), o.cleanups.clear(), o.pressed.forEach((n) => n.classList.remove("argus-motion-press")), o.pressed.clear(), Ai(o);
}
function ah(o) {
  const n = o?.prototype;
  if (!n || n.__argusMotionSystemV2049) return;
  n.__argusMotionSystemV2049 = !0;
  const i = n.connectedCallback, a = n.disconnectedCallback, l = n._load;
  n.connectedCallback = function() {
    const c = i?.call(this), u = Xu(this);
    return this.shadowRoot ? al(u) : queueMicrotask(() => al(u)), c;
  }, n.disconnectedCallback = function() {
    const c = this[Go];
    return c && oh(c), a?.call(this);
  }, n._load = async function(...c) {
    const u = Xu(this);
    try {
      const m = await l?.apply(this, c);
      return !u.active && this.isConnected && al(u), Rl(this), Ai(u), m;
    } catch (m) {
      throw Ai(u), m;
    }
  };
}
const Ju = "__argusStableRenderV2050";
function Kn(o) {
  const n = o.shadowRoot;
  if (!n) return;
  const i = /* @__PURE__ */ new Date(), a = i.toLocaleTimeString(o._getLocale?.() || void 0, { hour: "2-digit", minute: "2-digit" }), l = i.toLocaleDateString(o._getLocale?.() || void 0, { weekday: "short", month: "short", day: "numeric" }), c = n.getElementById("hero-clock-time"), u = n.getElementById("hero-clock-date");
  c && c.textContent !== a && (c.textContent = a), u && u.textContent !== l && (u.textContent = l), n.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((m) => {
    m && m.textContent !== a && (m.textContent = a);
  });
}
function Zu(o, n, i, a, l, c, u) {
  return [
    n?.entity_id || "",
    n?.entry_id || "",
    i || "",
    c ? "1" : "0",
    u ? "1" : "0",
    l || "",
    a?.arming_waiting_for_sensors ? "1" : "0",
    JSON.stringify(a?.arming_blocking_sensors || []),
    JSON.stringify(a?.triggered_sensors || []),
    o._backgroundMode || "",
    o._panelBgFile || "",
    o._getWeatherEntity?.()?.state || "",
    o._hass?.states?.["sun.sun"]?.state || "",
    o._getDisplayedTemperature?.() || "",
    o._homeName || "",
    o._kioskLocked ? "1" : "0"
  ].join("|");
}
function sl(o, n) {
  !n || n._argusDelegated || (n._argusDelegated = !0, n.addEventListener("click", (i) => {
    const a = i.target;
    if (a.closest?.('button[data-action="unlock-kiosk"]')) {
      o._requestKioskUnlock?.();
      return;
    }
    const c = a.closest?.('button[data-action="sos"]');
    if (c) {
      o._sosEntryIdx = Number(c.dataset.idx), o.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
      return;
    }
    const u = a.closest?.('button[data-action="stop-sos"]');
    if (u) {
      o._stopSOS?.(Number(u.dataset.idx));
      return;
    }
    const m = a.closest?.("button[data-fullscreen]");
    if (m) {
      o._toggleFullscreen?.(m.closest(".entry"));
      return;
    }
    if (a.closest?.("button[data-exit-fullscreen]")) {
      o._exitFullscreenView?.();
      return;
    }
    const _ = a.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])');
    _?.dataset?.idx != null && _?.dataset?.action && o._handleAction?.(_.dataset.idx, _.dataset.action);
  }));
}
function sh(o) {
  const n = o?.prototype;
  if (!n || n[Ju]) return;
  n[Ju] = !0;
  const i = n._renderEntries, a = Object.getOwnPropertyDescriptor(n, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(n), "hass");
  n._updateLiveClocks = function() {
    Kn(this);
  }, n._startClock = function() {
    this._clockInterval && clearInterval(this._clockInterval), Kn(this), this._clockInterval = setInterval(() => {
      this._dashboard && Kn(this);
    }, 1e3);
  }, n._renderEntries = function(m = !1) {
    const g = this.shadowRoot;
    if (!g) return i?.call(this, m);
    const _ = g.getElementById("entries"), f = this._dashboard?.entries || [];
    if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !_ || !f.length) {
      const P = i?.call(this, m);
      return sl(this, g.getElementById("entries")), Kn(this), P;
    }
    const y = [..._.querySelectorAll("article.entry")];
    if (!(m || y.length !== f.length || !y.every((P) => P.querySelector(".entry-content")))) {
      let P = !0;
      for (let E = 0; E < f.length; E++) {
        const S = f[E], h = this._hass?.states?.[S.entity_id], x = h?.state || S.state || "unavailable", b = h?.attributes || {}, w = !!b.argus_panic_active, A = this._fullscreenIdx === E || !!this._kioskLocked && (this._kioskEntryId === S.entry_id || f.length === 1), O = String(x).replace("armed_", "");
        let H = this._ui?.modes?.__by_entity__?.[S.entity_id]?.[O] || this._ui?.modes?.[O] || {}, W = H.sensors || [];
        if (x === "disarmed" || !W.length) {
          const pe = this._ui?.modes?.__by_entity__?.[S.entity_id] || this._ui?.modes || {}, Y = /* @__PURE__ */ new Set();
          ["away", "home", "night", "vacation"].forEach((ee) => {
            (pe[ee]?.sensors || []).forEach((J) => Y.add(J));
          }), W = [...Y];
        }
        const Z = H.bypassed_sensors || [], ae = W.filter((pe) => !Z.includes(pe)).map((pe) => {
          const Y = this._hass?.states?.[pe], ee = Y?.attributes?.battery_level ?? Y?.attributes?.battery_percentage ?? "";
          return `${pe}:${Y?.state || ""}:${ee}`;
        }).join(","), ie = Zu(this, S, x, b, ae, w, A);
        if (this._instanceSignatures.get(E) !== ie) {
          P = !1;
          break;
        }
      }
      if (P) {
        const S = f.map((b) => this._hass?.states?.[b.entity_id]?.state || "unavailable").some((b) => String(b).startsWith("armed") || b === "triggered" || b === "pending"), h = g.getElementById("global-status");
        if (h) {
          const b = (A) => this._t?.(A) || A, w = `<span class="badge ${S ? "armed_away" : "disarmed"}">${b(S ? "system_armed" : "system_disarmed")}</span>`;
          h.innerHTML !== w && (h.innerHTML = w);
        }
        const x = g.getElementById("hero-security-pill");
        if (x) {
          const b = (O) => this._t?.(O) || O, w = b(S ? "system_armed" : "system_disarmed"), A = `<i class="hero-live" style="background:${S ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${S ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(w) || w}`;
          x.innerHTML !== A && (x.innerHTML = A);
        }
        Kn(this), sl(this, _);
        return;
      }
    }
    const z = i?.call(this, m === !0 ? !0 : void 0);
    return [..._.querySelectorAll("article.entry")].forEach((P, E) => {
      const S = f[E];
      if (!S) return;
      const h = this._hass?.states?.[S.entity_id], x = h?.state || S.state || "unavailable", b = h?.attributes || {}, w = !!b.argus_panic_active, A = this._fullscreenIdx === E || !!this._kioskLocked && (this._kioskEntryId === S.entry_id || f.length === 1), O = String(x).replace("armed_", "");
      let H = this._ui?.modes?.__by_entity__?.[S.entity_id]?.[O] || this._ui?.modes?.[O] || {}, W = H.sensors || [];
      if (x === "disarmed" || !W.length) {
        const pe = this._ui?.modes?.__by_entity__?.[S.entity_id] || this._ui?.modes || {}, Y = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((ee) => {
          (pe[ee]?.sensors || []).forEach((J) => Y.add(J));
        }), W = [...Y];
      }
      const Z = H.bypassed_sensors || [], ae = W.filter((pe) => !Z.includes(pe)).map((pe) => {
        const Y = this._hass?.states?.[pe], ee = Y?.attributes?.battery_level ?? Y?.attributes?.battery_percentage ?? "";
        return `${pe}:${Y?.state || ""}:${ee}`;
      }).join(","), ie = Zu(this, S, x, b, ae, w, A);
      this._instanceSignatures.set(E, ie), P.dataset.renderSig = ie;
    }), sl(this, _), Kn(this), z;
  };
  const l = a?.get, c = a?.set;
  c && Object.defineProperty(n, "hass", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return l ? l.call(this) : this._hass;
    },
    set: function(m) {
      const g = this._hass;
      if (g && this._dashboard?.entries?.length) {
        const _ = /* @__PURE__ */ new Set(), f = (x) => {
          !x || typeof x != "object" || (Array.isArray(x.sensors) && x.sensors.forEach((b) => _.add(b)), Object.values(x).forEach((b) => {
            b && typeof b == "object" && f(b);
          }));
        };
        f(this._ui?.modes);
        const y = g.language !== m.language;
        y && !this._manualLang && this._refreshLocalizedUi?.();
        const k = this._dashboard.entries.some((x) => x.entity_id && g.states[x.entity_id]?.state !== m.states[x.entity_id]?.state), z = [..._].some(
          (x) => g.states[x]?.state !== m.states[x]?.state || g.states[x]?.attributes?.battery_level !== m.states[x]?.attributes?.battery_level || g.states[x]?.attributes?.battery_percentage !== m.states[x]?.attributes?.battery_percentage
        ), R = this._temperatureSource === "auto" ? null : this._temperatureSource, P = R && g.states[R]?.state !== m.states[R]?.state, E = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(m.states).find((x) => x.entity_id?.startsWith("weather."))?.entity_id, S = E && (g.states[E]?.state !== m.states[E]?.state || g.states[E]?.attributes?.temperature !== m.states[E]?.attributes?.temperature), h = k || z || P || S || y;
        this._hass = m, this._updateTheme?.(), h ? (this._renderEntries?.(y), this._renderActivityLog?.()) : Kn(this);
        return;
      }
      return c.call(this, m);
    }
  });
  const u = n.connectedCallback;
  n.connectedCallback = function() {
    const m = u?.call(this);
    return this._startClock?.(), m;
  };
}
const ep = "argus-v2050-alarm-visuals", lh = {
  armed_home: /EN CASA|HOME/i,
  armed_away: /AUSENTE|AWAY/i,
  armed_night: /NOCHE|NIGHT/i,
  armed_vacation: /VACACIONES|VACATION/i
};
function dh(o, n) {
  const i = n?.entity_id || n?.alarm_entity_id;
  return String(n?.state || n?.alarm_state || n?.attributes?.state || o._hass?.states?.[i]?.state || "").toLowerCase();
}
function ll(o, n, i) {
  o.classList.toggle("argus-action-active", i), o.dataset.argusAction = n;
  const a = n === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : n === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  o.style.setProperty("background", i ? a : "rgba(255,255,255,.105)", "important"), o.style.setProperty("background-image", i ? a : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), o.style.setProperty("border", i ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), o.style.setProperty("box-shadow", i ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important");
}
function ch(o) {
  const n = o.shadowRoot;
  if (!n) return;
  let i = n.getElementById(ep);
  i || (i = document.createElement("style"), i.id = ep, n.appendChild(i)), i.textContent = `
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
function dl(o) {
  if (!o.shadowRoot) return;
  ch(o);
  const n = o.shadowRoot.querySelectorAll(".entry");
  Array.from(n).forEach((i, a) => {
    const l = o._dashboard?.entries?.[a] || {}, c = l.attributes || o._hass?.states?.[l.entity_id]?.attributes || {}, u = dh(o, l), m = c.arming_blocking_sensors || [], g = u === "arming" || !!c.arming_waiting_for_sensors || !!m.length;
    i.classList.toggle("argus-arming", g), i.classList.toggle("argus-waiting", g);
    const _ = i.querySelector(".entry-icon");
    let f = i.querySelector(".argus-shield-status");
    g && _ ? (f || (f = document.createElement("span"), f.className = "argus-shield-status", _.insertAdjacentElement("afterend", f)), f.textContent = m.length ? `ESPERANDO ${m.length} SENSOR(ES)` : u === "arming" ? "ARMANDO…" : "ESPERANDO SENSORES") : f?.remove();
    const y = i.querySelector(".liquid-stack");
    if (y) {
      let R = y.querySelector(".argus-disarm-btn");
      if (!R) {
        R = document.createElement("button"), R.type = "button", R.className = "liquid-btn argus-disarm-btn", R.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", R.onclick = async () => {
          if (l.entry_id) {
            R.disabled = !0;
            try {
              await o._send?.("argus/perform_alarm_action", { entry_id: l.entry_id, action: "disarm" }), await o._load?.();
            } finally {
              R.disabled = !1;
            }
          }
        };
        const P = Array.from(y.children).find((E) => /SOS|PÁNICO|PANIC/i.test(E.textContent || ""));
        P ? y.insertBefore(R, P) : y.appendChild(R);
      }
      Array.from(y.querySelectorAll(".liquid-btn,button")).forEach((P) => {
        const E = P, S = String(E.textContent || "");
        if (/SOS|PÁNICO|PANIC/i.test(S)) ll(E, "sos", !!c.argus_panic_active);
        else if (/DESARMAR|DISARM|OFF/i.test(S)) ll(E, "disarm", u === "disarmed");
        else {
          const h = Object.entries(lh).find(([, x]) => x.test(S));
          h && ll(E, h[0], u === h[0]);
        }
      });
    }
    const k = new Set((c.triggered_sensors || []).map(String)), z = new Set(m.map((R) => String(o._dashboard?.available_entities?.find((P) => P.entity_id === R)?.name || R).toLocaleLowerCase()));
    i.querySelectorAll(".console-sensor").forEach((R) => {
      const P = String(R.querySelector(".console-sensor-name")?.textContent || R.textContent || "").toLocaleLowerCase(), E = Array.from(z).some((h) => P.includes(h) || h.includes(P)), S = Array.from(k).some((h) => P.includes(String(h).toLocaleLowerCase()));
      R.classList.toggle("argus-blocking", E), R.classList.toggle("argus-triggered-sensor", S);
    });
  });
}
function uh(o) {
  const n = o?.prototype;
  if (!n || n.__v2050AlarmVisuals) return;
  n.__v2050AlarmVisuals = !0;
  const i = n.connectedCallback, a = n._load, l = n._renderEntries;
  n.connectedCallback = function() {
    const c = i?.call(this);
    return dl(this), c;
  }, n._load = async function(...c) {
    const u = await a?.apply(this, c);
    return dl(this), u;
  }, n._renderEntries = function(...c) {
    const u = l?.apply(this, c);
    return dl(this), u;
  };
}
const tp = "argus-v2049-responsive-widgets", ph = '#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"],.users-modal,.access-modal,.argus-users-modal';
function mh(o) {
  const n = o.shadowRoot;
  if (!n) return;
  let i = n.getElementById(tp);
  i || (i = document.createElement("style"), i.id = tp, n.appendChild(i)), i.textContent = `
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
function gh(o) {
  const n = o.shadowRoot;
  n && n.querySelectorAll(ph).forEach((i) => {
    const a = i;
    a.style.touchAction = "pan-y", a.style.setProperty("-webkit-overflow-scrolling", "touch"), a.scrollHeight > a.clientHeight && (a.style.overflowY = "auto");
  });
}
function Fo(o) {
  mh(o), gh(o);
}
function fh(o) {
  const n = o?.prototype;
  if (!n || n.__v2049ResponsiveWidgets) return;
  n.__v2049ResponsiveWidgets = !0;
  const i = n.connectedCallback, a = n.disconnectedCallback, l = n._load, c = n._renderEntries;
  n.connectedCallback = function() {
    const u = i?.call(this);
    return Fo(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
      this._v2049Frame || (this._v2049Frame = requestAnimationFrame(() => {
        this._v2049Frame = 0, Fo(this);
      }));
    }), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), u;
  }, n.disconnectedCallback = function() {
    return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, a?.call(this);
  }, n._load = async function(...u) {
    const m = await l?.apply(this, u);
    return Fo(this), m;
  }, n._renderEntries = function(...u) {
    const m = c?.apply(this, u);
    return Fo(this), m;
  };
}
const np = "argus-v2050-widget-layouts";
function hh(o) {
  const n = o.shadowRoot;
  if (!n) return;
  let i = n.getElementById(np);
  i || (i = document.createElement("style"), i.id = np, n.appendChild(i)), i.textContent = `
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
function _h(o) {
  const n = o.shadowRoot;
  n && n.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((i) => {
    const a = i;
    a.style.touchAction = "pan-y", a.style.setProperty("-webkit-overflow-scrolling", "touch"), a.scrollHeight > a.clientHeight && (a.style.overflowY = "auto");
  });
}
function Uo(o) {
  hh(o), _h(o);
}
function bh(o) {
  const n = o?.prototype;
  if (!n || n.__v2050WidgetLayouts) return;
  n.__v2050WidgetLayouts = !0;
  const i = n.connectedCallback, a = n.disconnectedCallback, l = n._load, c = n._renderEntries;
  n.connectedCallback = function() {
    const u = i?.call(this);
    return Uo(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
      this._v2050LayoutFrame || (this._v2050LayoutFrame = requestAnimationFrame(() => {
        this._v2050LayoutFrame = 0, Uo(this);
      }));
    }), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, { childList: !0, subtree: !0 }), u;
  }, n.disconnectedCallback = function() {
    return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, a?.call(this);
  }, n._load = async function(...u) {
    const m = await l?.apply(this, u);
    return Uo(this), m;
  }, n._renderEntries = function(...u) {
    const m = c?.apply(this, u);
    return Uo(this), m;
  };
}
const yh = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], rp = { es: ["Configurar widgets", "Arrastrar", "Ocultar", "Mostrar", "Conectado", "Sin sensores configurados", "Todos los sensores están omitidos"], en: ["Configure widgets", "Drag", "Hide", "Show", "Connected", "No sensors configured", "All sensors are bypassed"], fr: ["Configurer les widgets", "Déplacer", "Masquer", "Afficher", "Connecté", "Aucun capteur configuré", "Tous les capteurs sont ignorés"], pt: ["Configurar widgets", "Arrastar", "Ocultar", "Mostrar", "Conectado", "Nenhum sensor configurado", "Todos os sensores estão ignorados"], it: ["Configura widget", "Trascina", "Nascondi", "Mostra", "Connesso", "Nessun sensore configurato", "Tutti i sensori sono esclusi"], zh: ["配置小组件", "拖动", "隐藏", "显示", "已连接", "未配置传感器", "所有传感器均已绕过"], ru: ["Настроить виджеты", "Перетащить", "Скрыть", "Показать", "Подключено", "Датчики не настроены", "Все датчики исключены"] }, vh = (o) => {
  const n = String(o._manualLang || o._hass?.language || "en").toLowerCase().split(/[-_]/)[0];
  return rp[n] || rp.en;
}, ip = (o) => [...o?.children || []].filter((n) => n.classList.contains("panel") && !n.classList.contains("dashboard-instances")), cl = (o, n) => {
  if (!o) return;
  const i = o.querySelector("[data-fullscreen]");
  let a = o.querySelector("[data-exit-fullscreen]");
  a || (a = document.createElement("button"), a.className = "ghost entry-exit-fs", a.dataset.exitFullscreen = "", a.textContent = "×", a.style.cssText = "position:absolute;top:16px;left:16px;z-index:100;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25)", a.onclick = () => o.getRootNode().host._exitFullscreenView(), o.appendChild(a)), i && (i.style.display = n ? "none" : "block"), a.style.display = n ? "block" : "none";
};
function op(o) {
  if (o.shadowRoot?.getElementById("argus-ui-fix")) return;
  const n = document.createElement("style");
  n.id = "argus-ui-fix", n.textContent = ".grid.editing .panel.widget-hidden-preview{opacity:.48!important}.widget-drag-handle{min-height:44px;display:flex;align-items:center;justify-content:center}.ios-fullscreen .entry-content.security-console{display:grid!important;grid-template-columns:minmax(230px,340px) minmax(150px,1fr) minmax(230px,380px)!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:'hud hud hud' 'modes icon sensors'!important;gap:20px 32px!important;padding:56px 48px 32px!important;overflow:hidden!important}.ios-fullscreen .console-hud{grid-area:hud!important}.ios-fullscreen .liquid-stack{grid-area:modes!important;width:100%!important}.ios-fullscreen .entry-icon{grid-area:icon!important}.ios-fullscreen .console-sensors{grid-area:sensors!important;max-height:60vh!important;overflow:auto!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console{grid-template-columns:1fr!important;grid-template-rows:auto auto auto auto!important;grid-template-areas:'hud' 'icon' 'modes' 'sensors'!important;padding:64px 18px 22px!important;overflow-y:auto!important}.ios-fullscreen .liquid-stack,.ios-fullscreen .console-sensors{max-width:420px!important;margin:auto!important}}", o.shadowRoot.appendChild(n);
}
function ul(o) {
  const n = vh(o), i = o.shadowRoot;
  if (!i) return;
  const a = i.getElementById("edit-widgets-label");
  a && (a.textContent = o._widgetEditing ? "✓ " + (o._t?.("done") || "Done") : "⚙️ " + n[0]), i.querySelectorAll(".widget-drag-handle").forEach((l) => l.textContent = "⋮⋮ " + n[1]), i.querySelectorAll(".widget-toggle-btn").forEach((l) => l.textContent = /mostrar|show|afficher|mostra|显示|показ/i.test(l.textContent) ? n[3] : n[2]), i.querySelectorAll(".console-empty").forEach((l) => l.textContent = /omit|bypass|ignor|exclu|绕过|исключ/i.test(l.textContent) ? n[6] : n[5]), i.querySelectorAll(".entry").forEach((l) => [...l.children].filter((c) => ["CONECTADO", "CONNECTED"].includes(c.textContent?.trim())).forEach((c) => {
    const u = c.firstElementChild;
    c.textContent = "", u && c.appendChild(u), c.append(n[4]);
  }));
}
function xh(o) {
  if (!o || o.__uiAudit) return;
  o.__uiAudit = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._applyTranslations, l = n._renderEntries, c = n._initWidgetGrid, u = n._saveWidgetLayout;
  n.connectedCallback = function() {
    return op(this), i?.call(this);
  }, n._applyTranslations = function() {
    const m = a?.call(this);
    return ul(this), m;
  }, n._renderEntries = function() {
    const m = l?.call(this);
    return op(this), this.shadowRoot?.querySelectorAll(".entry").forEach((g, _) => cl(g, this._fullscreenIdx === _ || g.classList.contains("ios-fullscreen"))), ul(this), m;
  }, n._toggleFullscreen = function(m) {
    if (m = m || this.shadowRoot?.querySelector(".entry"), !m) return;
    this._fullscreenIdx = Number(m.querySelector("[data-fullscreen]")?.dataset.fullscreen || 0), this._kioskLocked = !1, this._kioskTarget = m, this.classList.add("fullscreen-active"), m.classList.add("ios-fullscreen"), cl(m, !0), document.body.style.overflow = "hidden", (m.requestFullscreen || m.webkitRequestFullscreen)?.call(m).catch?.(() => {
    });
  }, n._exitFullscreenView = async function() {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : document.webkitExitFullscreen?.();
    } catch {
    }
    this.shadowRoot?.querySelectorAll(".entry.ios-fullscreen").forEach((m) => {
      m.classList.remove("ios-fullscreen"), cl(m, !1);
    }), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskTarget = null, document.body.style.overflow = "";
  }, n._initWidgetGrid = function() {
    if (!this._widgetConfigLoaded) {
      const g = this._ui?.dashboard?.widget_layout;
      if (g) try {
        localStorage.setItem("argus-widgets-v1", JSON.stringify(g));
      } catch {
      }
      this._widgetConfigLoaded = !0;
    }
    c?.call(this);
    const m = this.shadowRoot?.getElementById("widget-grid");
    ip(m).forEach((g) => g.draggable = !!this._widgetEditing), m && !m._auditDrag && (m._auditDrag = !0, m.addEventListener("dragover", (g) => {
      if (!this._widgetEditing) return;
      g.preventDefault();
      const _ = m.querySelector(".dragging");
      if (!_) return;
      let f = null, y = 1 / 0;
      if (ip(m).filter((k) => k !== _).forEach((k) => {
        const z = k.getBoundingClientRect(), R = Math.hypot(g.clientX - z.x - z.width / 2, g.clientY - z.y - z.height / 2);
        R < y && (y = R, f = k);
      }), f) {
        const k = f.getBoundingClientRect();
        f[g.clientX > k.x + k.width / 2 || g.clientY > k.y + k.height / 2 ? "after" : "before"](_);
      }
    })), ul(this);
  }, n._saveWidgetLayout = function() {
    u?.call(this);
    const m = this._widgetConfig || yh;
    this._ui = this._ui || {};
    const g = { ...this._ui.dashboard || {}, widget_layout: m };
    this._ui.dashboard = g, clearTimeout(this._widgetSaveTimer), this._widgetSaveTimer = setTimeout(() => this._send("argus/save_ui", { dashboard: g }).catch((_) => console.error("Widget layout save failed", _)), 180);
  }, n._changeWidgetSize = function(m, g) {
    const _ = (this._widgetConfig || []).find((y) => y.id === m);
    if (!_) return;
    _.size = g;
    const f = this.shadowRoot?.getElementById("w-" + m);
    f && (f.dataset.size = g), this._renderWidgetLayout(), this._saveWidgetLayout();
  }, n._toggleWidgetVisibility = function(m) {
    const g = (this._widgetConfig || []).find((f) => f.id === m);
    if (!g) return;
    g.hidden = !g.hidden;
    const _ = this.shadowRoot?.getElementById("w-" + m);
    _ && (_.classList.toggle("widget-hidden-preview", g.hidden && this._widgetEditing), _.style.display = g.hidden && !this._widgetEditing ? "none" : ""), this._renderWidgetLayout(), this._saveWidgetLayout();
  };
}
function ap(o) {
  if (o.shadowRoot?.getElementById("argus-grid-polish-style")) return;
  const n = document.createElement("style");
  n.id = "argus-grid-polish-style", n.textContent = `
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
`, o.shadowRoot?.appendChild(n);
}
function wh(o) {
  if (!o || o.__gridPolish) return;
  o.__gridPolish = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._initWidgetGrid;
  n.connectedCallback = function() {
    return ap(this), i?.call(this);
  }, n._initWidgetGrid = function() {
    const l = a?.call(this);
    return ap(this), l;
  };
}
const sp = { es: { on: "Conectado", off: "Argus desconectado · HA sin conexión" }, en: { on: "Connected", off: "Argus disconnected · HA offline" }, fr: { on: "Connecté", off: "Argus déconnecté · HA hors ligne" }, pt: { on: "Conectado", off: "Argus desconectado · HA sem conexão" }, it: { on: "Connesso", off: "Argus disconnesso · HA offline" }, zh: { on: "已连接", off: "Argus 已断开 · HA 离线" }, ru: { on: "Подключено", off: "Argus отключён · HA не в сети" } }, kh = (o) => {
  const n = String(o._manualLang || o._hass?.language || o._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
  return sp[n] || sp.en;
};
function Sh(o) {
  if (o.shadowRoot?.getElementById("argus-fullscreen-polish-style")) return;
  const n = document.createElement("style");
  n.id = "argus-fullscreen-polish-style", n.textContent = `
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
`, o.shadowRoot?.appendChild(n);
}
function Eh(o) {
  let n = o.querySelector(".argus-connection-pill");
  if (n) return n;
  if (n = [...o.children].find((l) => l.tagName === "DIV" && (l.getAttribute("style") || "").includes("left:50%") && (l.getAttribute("style") || "").includes("top:12px")), !n) return null;
  n.className = "argus-connection-pill", n.removeAttribute("style");
  const i = o.querySelector(".console-hud"), a = i?.querySelector(".console-hud-right");
  return i && i.insertBefore(n, a || null), n;
}
function Ah(o) {
  const n = !!o._hass && o._hass?.connection?.connected !== !1;
  return navigator.onLine !== !1 && n;
}
function Yo(o) {
  const n = kh(o), i = Ah(o);
  o.shadowRoot?.querySelectorAll(".entry").forEach((a) => {
    const l = Eh(a);
    if (!l) return;
    l.dataset.online = String(i), l.setAttribute("role", "status"), l.setAttribute("aria-live", "polite"), l.replaceChildren();
    const c = document.createElement("i");
    c.className = "argus-connection-dot";
    const u = document.createElement("span");
    u.className = "argus-connection-label", u.textContent = i ? n.on : n.off, l.append(c, u);
  });
}
function lp(o) {
  Sh(o), Yo(o);
}
function Ch(o) {
  if (!o || o.__fullscreenPolish) return;
  o.__fullscreenPolish = !0;
  const n = o.prototype, i = n.connectedCallback, a = n.disconnectedCallback, l = n._renderEntries, c = Object.getOwnPropertyDescriptor(n, "hass");
  n.connectedCallback = function() {
    const u = i?.call(this);
    return this._argusOnlineHandler = () => Yo(this), window.addEventListener("online", this._argusOnlineHandler), window.addEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), this._argusConnectivityTimer = setInterval(() => Yo(this), 2500), queueMicrotask(() => lp(this)), u;
  }, n.disconnectedCallback = function() {
    return window.removeEventListener("online", this._argusOnlineHandler), window.removeEventListener("offline", this._argusOnlineHandler), clearInterval(this._argusConnectivityTimer), a?.call(this);
  }, n._renderEntries = function() {
    const u = l?.call(this);
    return lp(this), u;
  }, c?.set && Object.defineProperty(n, "hass", { configurable: !0, enumerable: c.enumerable, get: c.get, set(u) {
    c.set.call(this, u), queueMicrotask(() => Yo(this));
  } });
}
const ta = [{ id: "activity", size: "M", hidden: !1 }, { id: "modes", size: "M", hidden: !1 }, { id: "automations", size: "M", hidden: !1 }, { id: "access", size: "M", hidden: !1 }, { id: "backup", size: "S", hidden: !1 }, { id: "github", size: "S", hidden: !1 }], kl = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), dp = { es: ["Formato de hora", "Automático (Home Assistant)", "12 horas (AM/PM)", "24 horas"], en: ["Time format", "Automatic (Home Assistant)", "12-hour (AM/PM)", "24-hour"], fr: ["Format de l’heure", "Automatique (Home Assistant)", "12 heures (AM/PM)", "24 heures"], pt: ["Formato de hora", "Automático (Home Assistant)", "12 horas (AM/PM)", "24 horas"], it: ["Formato ora", "Automatico (Home Assistant)", "12 ore (AM/PM)", "24 ore"], zh: ["时间格式", "自动（Home Assistant）", "12 小时（AM/PM）", "24 小时"], ru: ["Формат времени", "Автоматически (Home Assistant)", "12 часов (AM/PM)", "24 часа"] }, zh = (o) => String(o._manualLang || o._hass?.language || o._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0], Ci = (o) => JSON.parse(JSON.stringify(o));
function na(o) {
  if (!Array.isArray(o)) return null;
  const n = /* @__PURE__ */ new Set(), i = [];
  return o.forEach((a) => {
    const l = String(a?.id || "");
    !l || n.has(l) || (n.add(l), i.push({ id: l, size: kl.has(a?.size) ? a.size : "M", hidden: !!a?.hidden }));
  }), ta.forEach((a) => {
    n.has(a.id) || i.push({ ...a });
  }), i.length ? i : null;
}
function Ih() {
  try {
    return na(JSON.parse(localStorage.getItem("argus-widgets-v2") || localStorage.getItem("argus-widgets-v1") || "null"));
  } catch {
    return null;
  }
}
function Dp(o) {
  try {
    const n = JSON.stringify(o);
    localStorage.setItem("argus-widgets-v2", n), localStorage.setItem("argus-widgets-v1", n);
  } catch {
  }
}
function pl(o) {
  const n = o.shadowRoot, i = n?.querySelector(".personalize-grid");
  if (!i) return;
  let a = n.getElementById("argus-clock-format-field");
  a || (a = document.createElement("div"), a.id = "argus-clock-format-field", a.className = "personalize-field pf-clock", a.innerHTML = '<label class="setting-label" id="argus-clock-format-label" for="argus-clock-format-select"></label><select id="argus-clock-format-select" class="glass-control"><option value="auto"></option><option value="12h"></option><option value="24h"></option></select>', i.appendChild(a), a.querySelector("select")?.addEventListener("change", (g) => {
    o._clockFormat = g.target.value, o._ui = o._ui || {}, o._ui.clock_format = g.target.value, o._lastClockUpdate = 0, o._updateHeroContext?.(), o._renderEntries?.();
  }));
  const l = dp[zh(o)] || dp.en, c = a.querySelector("label"), u = a.querySelectorAll("option");
  c && (c.textContent = "🕐 " + l[0]), u.forEach((g, _) => {
    g.textContent = l[_ + 1];
  });
  const m = a.querySelector("select");
  m && (m.value = o._clockFormat || o._ui?.clock_format || "auto");
}
function cp(o) {
  if (o.shadowRoot?.getElementById("argus-v2012-audit-style")) return;
  const n = document.createElement("style");
  n.id = "argus-v2012-audit-style", n.textContent = `
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
`, o.shadowRoot.appendChild(n);
}
function Ph(o) {
  return [...o.shadowRoot?.querySelectorAll(".entry") || []].map((n) => n.querySelector(".entry-icon>svg")?.outerHTML || null);
}
function Rh(o, n) {
  o.shadowRoot?.querySelectorAll(".entry").forEach((i, a) => {
    const l = i.querySelector(".entry-icon"), c = l?.querySelector(":scope>svg"), u = n[a];
    if (!l || !c || !u || u === c.outerHTML) return;
    l.querySelector(".argus-old-shield")?.remove();
    const m = document.createElement("div");
    m.className = "argus-old-shield", m.innerHTML = u, l.prepend(m), l.classList.remove("argus-shield-changing"), l.offsetWidth, l.classList.add("argus-shield-changing"), setTimeout(() => {
      m.remove(), l.classList.remove("argus-shield-changing");
    }, 560);
  });
}
function Nh(o) {
  const n = o.shadowRoot?.getElementById("widget-grid");
  if (!n) return na(o._widgetConfig) || Ci(ta);
  const i = new Map((o._widgetConfig || []).map((l) => [l.id, l])), a = [...n.children].filter((l) => l.classList.contains("panel") && !l.classList.contains("dashboard-instances")).map((l) => {
    const c = l.id.replace(/^w-/, ""), u = i.get(c) || {};
    return { id: c, size: kl.has(l.dataset.size) ? l.dataset.size : kl.has(u.size) ? u.size : "M", hidden: l.classList.contains("widget-hidden-preview") || l.style.display === "none" || !!u.hidden };
  });
  return na(a) || Ci(ta);
}
function Lh(o, n) {
  o._widgetConfig = Ci(n), Dp(n), o._ui = o._ui || {};
  const i = { ...o._ui.dashboard || {}, widget_layout: Ci(n) };
  o._ui.dashboard = i;
  const a = { dashboard: i };
  o._dashboard?.entry_id && (a.entry_id = o._dashboard.entry_id), o._widgetSaveChain = (o._widgetSaveChain || Promise.resolve()).catch(() => {
  }).then(() => o._send("argus/save_ui", a)).then((l) => {
    l?.ui?.dashboard && (o._ui.dashboard = l.ui.dashboard), o.dataset.widgetSave = "saved";
  }).catch((l) => {
    o.dataset.widgetSave = "local", console.error("Argus widget layout saved locally; server save failed", l);
  });
}
function Oh(o) {
  if (!o || o.__v2012AuditFixes) return;
  o.__v2012AuditFixes = !0;
  const n = o.prototype, i = n.connectedCallback, a = n.disconnectedCallback, l = n._load, c = n._renderEntries, u = n._initWidgetGrid, m = n._saveWidgetLayout, g = n._persistPersonalization, _ = n._applyTranslations, f = n._exitFullscreenView;
  n.connectedCallback = function() {
    cp(this);
    const y = i?.call(this);
    return this._argusExitCapture = (k) => {
      this._argusExiting && k.stopImmediatePropagation();
    }, document.addEventListener("fullscreenchange", this._argusExitCapture, !0), document.addEventListener("webkitfullscreenchange", this._argusExitCapture, !0), y;
  }, n.disconnectedCallback = function() {
    return document.removeEventListener("fullscreenchange", this._argusExitCapture, !0), document.removeEventListener("webkitfullscreenchange", this._argusExitCapture, !0), a?.call(this);
  }, n._load = async function() {
    const y = await l?.call(this);
    return this._ui && (this._clockFormat = this._ui.clock_format || "auto", pl(this)), y;
  }, n._applyTranslations = function() {
    const y = _?.call(this);
    return pl(this), y;
  }, n._renderEntries = function() {
    const y = Ph(this), k = c?.call(this);
    return cp(this), requestAnimationFrame(() => Rh(this, y)), k;
  }, n._initWidgetGrid = function() {
    const y = na(this._ui?.dashboard?.widget_layout), k = Ih();
    this._widgetConfig = Ci(y || k || ta), Dp(this._widgetConfig), this._widgetConfigLoaded = !0;
    const z = u?.call(this);
    return this._renderWidgetLayout?.(), z;
  }, n._saveWidgetLayout = function() {
    m?.call(this), Lh(this, Nh(this));
  }, n._persistPersonalization = async function() {
    this._clockFormat = this.shadowRoot?.getElementById("argus-clock-format-select")?.value || this._clockFormat || "auto";
    const y = await g?.call(this);
    this._ui = this._ui || {}, this._ui.clock_format = this._clockFormat;
    const k = { clock_format: this._clockFormat };
    this._dashboard?.entry_id && (k.entry_id = this._dashboard.entry_id);
    const z = await this._send("argus/save_ui", k);
    return z?.ui && (this._ui = { ...this._ui, ...z.ui }), pl(this), this._lastClockUpdate = 0, this._updateHeroContext?.(), this._renderEntries?.(), y;
  }, n._exitFullscreenView = async function() {
    this._argusExiting = !0, this.classList.add("argus-exiting-fullscreen");
    try {
      return await f?.call(this);
    } finally {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        this._argusExiting = !1, this.classList.remove("argus-exiting-fullscreen");
      }));
    }
  };
}
const ra = ["essential", "light", "balanced", "full"], $p = "argus-performance-v1", Th = 6e3, Mh = 18, Bh = 3, Hh = 25e3, up = {
  es: { full: "Completo", balanced: "Equilibrado", light: "Ligero", essential: "Esencial", auto: "detectado automáticamente", note: "Argus ajusta automáticamente la calidad visual según tu hardware. La seguridad nunca se ve afectada." },
  en: { full: "Full", balanced: "Balanced", light: "Light", essential: "Essential", auto: "auto-detected", note: "Argus automatically adjusts visual quality based on your hardware. Security is never affected." },
  fr: { full: "Complet", balanced: "Équilibré", light: "Léger", essential: "Essentiel", auto: "détecté automatiquement", note: "Argus ajuste automatiquement la qualité visuelle selon votre matériel. La sécurité n'est jamais affectée." },
  pt: { full: "Completo", balanced: "Equilibrado", light: "Leve", essential: "Essencial", auto: "detectado automaticamente", note: "Argus ajusta automaticamente a qualidade visual com base no hardware. A segurança nunca é afetada." },
  it: { full: "Completo", balanced: "Bilanciato", light: "Leggero", essential: "Essenziale", auto: "rilevato automaticamente", note: "Argus regola automaticamente la qualità visiva in base all'hardware. La sicurezza non viene mai influenzata." },
  zh: { full: "完整", balanced: "均衡", light: "轻量", essential: "基础", auto: "自动检测", note: "Argus 根据您的硬件自动调整视觉质量，安全功能从不受影响。" },
  ru: { full: "Полный", balanced: "Сбалансированный", light: "Легкий", essential: "Базовый", auto: "определено автоматически", note: "Argus автоматически настраивает качество отображения. Функции безопасности никогда не затрагиваются." }
}, Dh = (o) => String(o._manualLang || o._hass?.language || o._hass?.locale?.language || "en").toLowerCase().split(/[-_]/)[0];
function jp() {
  try {
    const o = navigator.userAgent || "", n = navigator.platform || "", i = navigator.hardwareConcurrency || 0, a = navigator.deviceMemory || 0;
    let l = 0;
    const c = `${o}|${n}|${i}|${a}`;
    for (let u = 0; u < c.length; u++) l = l * 31 + c.charCodeAt(u) | 0;
    return String(l);
  } catch {
    return "default";
  }
}
function qp() {
  try {
    return JSON.parse(localStorage.getItem($p) || "{}");
  } catch {
    return {};
  }
}
function $h(o) {
  try {
    localStorage.setItem($p, JSON.stringify(o));
  } catch {
  }
}
function jh() {
  const o = navigator.hardwareConcurrency || 2, n = navigator.deviceMemory || null, i = window.devicePixelRatio || 1, a = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || !1;
  let l = !1, c = !1;
  try {
    c = !!document.createElement("canvas").getContext("webgl2");
  } catch {
  }
  try {
    const u = document.createElement("canvas");
    l = !!(u.getContext("webgl") || u.getContext("experimental-webgl"));
  } catch {
  }
  return { cores: o, memory: n, dpr: i, reducedMotion: a, webgl1: l, webgl2: c, width: window.innerWidth || 0, height: window.innerHeight || 0 };
}
function qh(o = 900) {
  return new Promise((n) => {
    let i = 0;
    const a = performance.now();
    function l(c) {
      i++, c - a < o ? requestAnimationFrame(l) : n(Math.round(i * 1e3 / Math.max(1, c - a)));
    }
    requestAnimationFrame(l);
  });
}
function Fh(o, n) {
  let i = 0;
  return i += Math.min(o.cores || 2, 8) * 8, i += o.memory ? Math.min(o.memory, 8) * 6 : 18, o.webgl2 ? i += 30 : o.webgl1 && (i += 14), i += Math.min(n, 60) * 1.2, n >= 55 && (o.cores || 0) >= 4 && (i += 8), o.reducedMotion && (i -= 20), Math.max(o.width, o.height) < 800 && (i -= 10), i >= 170 ? "full" : i >= 120 ? "balanced" : i >= 70 ? "light" : "essential";
}
function Uh(o) {
  return ra.includes(o) ? o : null;
}
function Wh(o) {
  if (o.shadowRoot?.getElementById("argus-perf-style")) return;
  const n = document.createElement("style");
  n.id = "argus-perf-style", n.textContent = `
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
`, o.shadowRoot.appendChild(n);
}
function Nl(o, n, i) {
  o._argusPerfProfile = n, o.dataset.argusPerf = n, o.dataset.argusPerfSource = i || "auto", ra.forEach((a) => o.classList.remove("argus-perf-" + a)), o.classList.add("argus-perf-" + n), o.dispatchEvent(new CustomEvent("argus-performance-profile", { bubbles: !0, composed: !0, detail: { profile: n, source: i || "auto", capabilities: o._argusPerfCaps || null, fps: o._argusPerfFps || null } }));
}
function Vh(o) {
  const n = o.shadowRoot;
  if (!n) return;
  const i = n.getElementById("argus-perf-badge");
  if (!i) return;
  const a = Dh(o), l = up[a] || up.en, c = o._argusPerfProfile || "balanced", u = l[c] || c;
  i.innerHTML = `⚙️ <strong>${u}</strong>&nbsp;(${l.auto})`, i.title = l.note;
}
function ia(o) {
  const n = o.shadowRoot, i = n?.querySelector(".personalize-grid");
  if (!i) return null;
  let a = n.getElementById("argus-performance-field");
  return a || (a = document.createElement("div"), a.id = "argus-performance-field", a.className = "personalize-field pf-performance", a.innerHTML = '<span class="argus-perf-badge" id="argus-perf-badge" title=""></span>', i.appendChild(a)), Vh(o), a;
}
async function Gh(o) {
  const n = jh(), i = await qh();
  o._argusPerfCaps = n, o._argusPerfFps = i, o._argusPerfAuto = Fh(n, i);
  const a = qp(), l = jp();
  a[l] = { ...a[l] || {}, auto: o._argusPerfAuto, checkedAt: Date.now() }, $h(a), Nl(o, o._argusPerfAuto, "auto"), ia(o);
}
function Yh(o) {
  Fp(o);
  let n = performance.now(), i = n, a = 0, l = 0;
  function c(u) {
    const m = u - i;
    if (i = u, m > 0) {
      const g = 1e3 / m;
      if (u - n >= Th && (n = u, g < Mh ? a++ : a = 0, a >= Bh && u - l > Hh)) {
        const _ = Math.max(0, ra.indexOf(o._argusPerfProfile || "balanced") - 1), f = ra[_];
        f && f !== o._argusPerfProfile && (o._argusPerfAuto = f, Nl(o, f, "auto-downgrade"), l = u, ia(o)), a = 0;
      }
    }
    o._argusPerfMonitorFrame = requestAnimationFrame(c);
  }
  o._argusPerfMonitorFrame = requestAnimationFrame(c);
}
function Fp(o) {
  o._argusPerfMonitorFrame && (cancelAnimationFrame(o._argusPerfMonitorFrame), o._argusPerfMonitorFrame = null);
}
function Kh(o) {
  if (!o || o.__argusPerformanceProfile) return;
  o.__argusPerformanceProfile = !0;
  const n = o.prototype, i = n.connectedCallback, a = n.disconnectedCallback, l = n._load, c = n._applyTranslations;
  n.connectedCallback = function() {
    Wh(this);
    const u = qp()[jp()] || {};
    this._argusPerfAuto = Uh(u.auto) || "balanced", Nl(this, this._argusPerfAuto, "auto");
    const m = i?.call(this);
    return Gh(this), Yh(this), m;
  }, n.disconnectedCallback = function() {
    return Fp(this), a?.call(this);
  }, n._load = async function() {
    const u = await l?.call(this);
    return ia(this), u;
  }, n._applyTranslations = function() {
    const u = c?.call(this);
    return ia(this), u;
  };
}
function pp(o) {
  if (o.shadowRoot?.getElementById("argus-visual-container-fixes")) return;
  const n = document.createElement("style");
  n.id = "argus-visual-container-fixes", n.textContent = `
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
`, o.shadowRoot.appendChild(n);
}
function Ko(o) {
  const n = o.shadowRoot?.querySelector(".dashboard-instances");
  n && (n.draggable = !1, n.removeAttribute("hidden"), n.classList.remove("widget-hidden-preview", "dragging"), n.querySelector(":scope > .panel-edit-overlay")?.remove(), n.style.setProperty("display", "block", "important"), n.style.setProperty("visibility", "visible", "important"), n.style.setProperty("opacity", "1", "important"));
}
function Xh(o) {
  !o.shadowRoot?.getElementById("widget-grid") || o._argusWidgetLayoutRestored || (o._argusWidgetLayoutRestored = !0, o._widgetConfigLoaded ? o._renderWidgetLayout?.() : o._initWidgetGrid?.(), Ko(o));
}
function Qh(o) {
  if (!o || o.__argusVisualContainerFixes) return;
  o.__argusVisualContainerFixes = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries, c = n._toggleWidgetEditing;
  n.connectedCallback = function() {
    return pp(this), i?.call(this);
  }, n._load = async function() {
    this._argusWidgetLayoutRestored = !1;
    const u = await a?.call(this);
    return Xh(this), Ko(this), u;
  }, n._renderEntries = function() {
    const u = l?.call(this);
    return pp(this), Ko(this), u;
  }, n._toggleWidgetEditing = function() {
    const u = c?.call(this);
    return Ko(this), u;
  };
}
function mp(o, n, i, a) {
  const l = o.shadowRoot?.getElementById(n), c = l?.getAttribute("data-size");
  if (c !== "S") return i?.apply(o, a);
  l.setAttribute("data-size", "M");
  try {
    return i?.apply(o, a);
  } finally {
    l.setAttribute("data-size", c);
  }
}
function Jh(o) {
  if (!o || o.__argusCompleteContentFixes) return;
  o.__argusCompleteContentFixes = !0;
  const n = o.prototype, i = n._renderActivityLog, a = n._renderAutomations;
  n._renderActivityLog = function(...l) {
    return mp(this, "w-activity", i, l);
  }, n._renderAutomations = function(...l) {
    return mp(this, "w-automations", a, l);
  };
}
const Zh = 15e3;
function e_(o, n) {
  const i = o._getLocale?.() || void 0, a = o._getTimeZone?.(), l = { weekday: "short", month: "short", day: "numeric" };
  a && (l.timeZone = a);
  try {
    return new Intl.DateTimeFormat(i, l).format(n);
  } catch {
    return n.toLocaleDateString(i, l);
  }
}
function Sl(o) {
  const n = /* @__PURE__ */ new Date(), i = o._formatTime?.(n) || n.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), a = o.shadowRoot?.getElementById("hero-clock-time"), l = o.shadowRoot?.getElementById("hero-clock-date");
  a && (a.textContent = i), l && (l.textContent = e_(o, n)), o.shadowRoot?.querySelectorAll(".console-hud-time").forEach((c) => {
    c.textContent = i;
  });
}
function t_(o) {
  o.shadowRoot?.querySelectorAll(".entry-icon svg").forEach((n) => {
    n.style.overflow = "visible", n.querySelectorAll("filter").forEach((i) => {
      i.setAttribute("filterUnits", "userSpaceOnUse"), i.setAttribute("x", "-80"), i.setAttribute("y", "-80"), i.setAttribute("width", "360"), i.setAttribute("height", "360"), i.setAttribute("color-interpolation-filters", "sRGB");
    });
  });
}
function n_(o) {
  const n = o.shadowRoot;
  n && (n.querySelectorAll('input[type="file"]').forEach((i) => {
    i.setAttribute("accept", "image/*,video/*,.gif"), i.removeAttribute("capture");
  }), n.querySelectorAll("button,ha-button,mwc-button").forEach((i) => {
    const a = (i.textContent || i.getAttribute("aria-label") || "").toLowerCase();
    /predeterminado|default|argus/.test(a) && /fondo|background|argus/.test(a) && (i.dataset.argusDefaultBackground = "true");
  }));
}
function r_(o) {
  const n = o.shadowRoot;
  if (!n) return;
  n.querySelectorAll("#w-activity .entry,#w-activity .log-entry,#w-activity li,.activity-log .entry,.activity-log li").forEach((a, l) => {
    l > 39 ? a.classList.add("argus-mobile-history-overflow-item") : a.classList.remove("argus-mobile-history-overflow-item");
  });
}
function i_(o) {
  const n = o.shadowRoot;
  n && n.querySelectorAll(".dashboard-instances .entry button,.dashboard-instances .entry .badge,.dashboard-instances .entry .status,.dashboard-instances .entry h3,.dashboard-instances .entry h4").forEach((i) => {
    const a = (i.textContent || "").trim().toLowerCase();
    /^(sistema\s+desarmado|system\s+disarmed|desarmado|disarmed)$/.test(a) && i.classList.add("argus-instance-duplicate-status");
  });
}
function o_(o) {
  if (o.shadowRoot?.getElementById("argus-runtime-visual-style")) return;
  const n = document.createElement("style");
  n.id = "argus-runtime-visual-style", n.textContent = `
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
`, o.shadowRoot?.appendChild(n);
}
function ml(o) {
  o_(o), Sl(o), t_(o), n_(o), r_(o), i_(o);
}
function a_(o) {
  if (!o || o.__argusRuntimeVisualFixes) return;
  o.__argusRuntimeVisualFixes = !0;
  const n = o.prototype, i = n.connectedCallback, a = n.disconnectedCallback, l = n._load, c = n._renderEntries, u = n._applyTranslations;
  n.connectedCallback = function() {
    const m = i?.call(this);
    return clearInterval(this._argusClockTimer), this._argusClockTimer = setInterval(() => Sl(this), Zh), queueMicrotask(() => ml(this)), m;
  }, n.disconnectedCallback = function() {
    return clearInterval(this._argusClockTimer), this._argusClockTimer = null, a?.call(this);
  }, n._load = async function() {
    const m = await l?.call(this);
    return ml(this), m;
  }, n._renderEntries = function() {
    const m = c?.call(this);
    return ml(this), m;
  }, n._applyTranslations = function() {
    const m = u?.call(this);
    return Sl(this), m;
  };
}
const s_ = /* @__PURE__ */ new Set(["unavailable", "unknown"]), gp = {
  es: { status_unavailable: "Sin conexión", status_unavailable_hint: "El dispositivo perdió conexión en Home Assistant y necesita revisión." },
  en: { status_unavailable: "Unavailable", status_unavailable_hint: "The device lost connection in Home Assistant and needs review." },
  fr: { status_unavailable: "Indisponible", status_unavailable_hint: "L'appareil a perdu la connexion dans Home Assistant et doit être vérifié." },
  pt: { status_unavailable: "Indisponível", status_unavailable_hint: "O dispositivo perdeu a conexão no Home Assistant e precisa de revisão." },
  it: { status_unavailable: "Non disponibile", status_unavailable_hint: "Il dispositivo ha perso la connessione in Home Assistant e richiede una verifica." },
  zh: { status_unavailable: "不可用", status_unavailable_hint: "设备在 Home Assistant 中失去连接，需要检查。" },
  ru: { status_unavailable: "Недоступно", status_unavailable_hint: "Устройство потеряло связь в Home Assistant и требует проверки." }
};
function El(o) {
  return o ? s_.has(String(o.state ?? "").toLowerCase()) : !0;
}
function yi(o) {
  return String(o ?? "").replace(/[&<>'"]/g, (n) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[n]);
}
function fp(o) {
  const n = o.shadowRoot;
  if (!n) return;
  const i = n.getElementById("bg-mode-select-standalone");
  i && !i.dataset.argusBgFixBound && (i.dataset.argusBgFixBound = "1", i.addEventListener("change", () => {
    if (o._backgroundMode = i.value, !["photo", "collage", "video"].includes(i.value)) {
      o._panelBgFile = "";
      const l = n.getElementById("panel-bg-url-input");
      l && (l.value = "");
    }
    o._updateBgFieldsVisibility?.(), o._updateTheme?.(), o._renderEntries?.();
  }));
  const a = n.getElementById("hub-bg-mode-select");
  a && !a.dataset.argusBgFixBound && (a.dataset.argusBgFixBound = "1", a.addEventListener("change", () => {
    if (o._hubBgMode = a.value, a.value !== "image") {
      o._hubBgFile = "";
      const l = n.getElementById("hub-bg-url-input");
      l && (l.value = "");
    }
    o._updateBgFieldsVisibility?.(), o._updateCanvasBackground?.(), o._updateTheme?.();
  }));
}
function l_(o) {
  const n = o.shadowRoot, i = n?.getElementById("bg-mode-select-standalone")?.value ?? o._backgroundMode, a = n?.getElementById("hub-bg-mode-select")?.value ?? o._hubBgMode;
  if (!["photo", "collage", "video"].includes(i)) {
    o._panelBgFile = "";
    const l = n?.getElementById("panel-bg-url-input");
    l && (l.value = "");
  }
  if (a !== "image") {
    o._hubBgFile = "";
    const l = n?.getElementById("hub-bg-url-input");
    l && (l.value = "");
  }
}
function hp(o) {
  const n = o.shadowRoot;
  if (!n || n.getElementById("argus-availability-style")) return;
  const i = document.createElement("style");
  i.id = "argus-availability-style", i.textContent = `
.sensor-pill.sensor-unavailable{border-color:rgba(255,180,60,.65)!important;background:rgba(120,72,8,.28)!important}
.sensor-pill.sensor-unavailable .pill-dot{background:#ffb43c!important;box-shadow:0 0 8px rgba(255,180,60,.85)!important}
.sensor-pill.sensor-unavailable .pill-status{color:#ffcf8a!important;opacity:1!important;font-weight:900!important}
.console-sensor.unavailable{background:linear-gradient(100deg,rgba(255,170,40,.22),rgba(40,26,8,.62))!important;border-color:rgba(255,190,80,.65)!important}
.console-sensor.unavailable .console-sensor-state{color:#ffcf8a!important}
.status-unavailable{color:#ffcf8a!important;font-weight:900!important}
`, n.appendChild(i);
}
function d_(o) {
  const n = o.shadowRoot;
  if (!n || !o._hass?.states) return;
  const i = o._dashboard?.entries || [];
  n.querySelectorAll(".entry").forEach((a, l) => {
    const c = i[l];
    if (!c) return;
    const u = o._hass.states[c.entity_id], m = String(u?.state || "disarmed"), g = m.replace("armed_", "");
    let _ = o._ui?.modes?.__by_entity__?.[c.entity_id]?.[g] || o._ui?.modes?.[g] || {}, f = _.sensors || [];
    if (m === "disarmed" || !f.length) {
      const R = o._ui?.modes?.__by_entity__?.[c.entity_id] || o._ui?.modes || {}, P = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((E) => {
        R[E]?.sensors && R[E].sensors.forEach((S) => P.add(S));
      }), f = Array.from(P);
    }
    const y = _.bypassed_sensors || [], k = f.filter((R) => !y.includes(R) && o._hass.states[R]), z = a.querySelectorAll(".console-sensors .console-sensor");
    z.length && z.forEach((R, P) => {
      const E = k[P];
      if (!E) return;
      const S = o._hass.states[E];
      if (!El(S)) return;
      R.classList.add("unavailable"), R.classList.remove("open"), R.title = o._t("status_unavailable_hint");
      const h = R.querySelector(".console-sensor-icon");
      h && (h.textContent = "❓", h.style.color = "#ffcf8a", h.style.animation = "none");
      const x = R.querySelector(".console-sensor-state");
      x && (x.textContent = o._t("status_unavailable"), x.style.color = "#ffcf8a");
    });
  });
}
function c_(o) {
  if (!o || o.__argusBgSensorAvailabilityFixes) return;
  o.__argusBgSensorAvailabilityFixes = !0;
  const n = o.prototype;
  async function i(f) {
    if (!(!f._currentProfile || !f._currentProfile.id))
      try {
        const y = await f._send("argus/get_profile_theme");
        if (y && y.theme && Object.keys(y.theme).length > 0) {
          const k = y.theme;
          k.background_mode !== void 0 && (f._backgroundMode = k.background_mode), k.background_images !== void 0 && (f._backgroundImages = k.background_images), k.panel_bg_file !== void 0 && (f._panelBgFile = k.panel_bg_file || ""), k.panel_bg_sound !== void 0 && (f._panelBgSound = k.panel_bg_sound), k.hub_bg_mode !== void 0 && (f._hubBgMode = k.hub_bg_mode === "none" || k.hub_bg_mode === "default" ? "default" : k.hub_bg_mode), k.hub_bg_file !== void 0 && (f._hubBgFile = k.hub_bg_file || ""), k.hub_bg_sound !== void 0 && (f._hubBgSound = k.hub_bg_sound), f._ui || (f._ui = {}), f._ui.background_mode = f._backgroundMode, f._ui.background_images = f._backgroundImages, f._ui.panel_bg_file = f._panelBgFile, f._ui.panel_bg_sound = f._panelBgSound, f._ui.hub_bg_mode = f._hubBgMode, f._ui.hub_bg_file = f._hubBgFile, f._ui.hub_bg_sound = f._hubBgSound;
          const z = f.shadowRoot;
          if (z) {
            const R = z.getElementById("bg-mode-select-standalone");
            R && (R.value = f._backgroundMode);
            const P = z.getElementById("hub-bg-mode-select");
            P && (P.value = f._hubBgMode);
            const E = z.getElementById("panel-bg-url-input");
            E && !f._panelBgFile.startsWith("data:") && (E.value = f._panelBgFile);
            const S = z.getElementById("hub-bg-url-input");
            S && !f._hubBgFile.startsWith("data:") && (S.value = f._hubBgFile);
          }
          typeof f._updateBgFieldsVisibility == "function" && f._updateBgFieldsVisibility(), typeof f._updateCanvasBackground == "function" && f._updateCanvasBackground(), typeof f._updateTheme == "function" && f._updateTheme(), typeof f._renderEntries == "function" && f._renderEntries();
        }
      } catch (y) {
        console.warn("Failed to load profile theme", y);
      }
  }
  async function a(f) {
    if (!(!f._currentProfile || !f._currentProfile.id))
      try {
        const y = f.shadowRoot;
        let k = f._backgroundMode, z = f._hubBgMode;
        if (y) {
          const E = y.getElementById("bg-mode-select-standalone");
          E && (k = E.value);
          const S = y.getElementById("hub-bg-mode-select");
          S && (z = S.value);
        }
        const R = {
          background_mode: k,
          hub_bg_mode: z === "default" ? "none" : z,
          panel_bg_file: ["photo", "collage", "video"].includes(k) && f._panelBgFile || "",
          hub_bg_file: z === "image" && f._hubBgFile || "",
          background_images: f._backgroundImages || [],
          panel_bg_sound: !!f._panelBgSound,
          hub_bg_sound: !!f._hubBgSound
        }, P = await f._send("argus/save_profile_theme", { theme: R });
        P && P.theme && (f._currentProfile.theme = P.theme);
      } catch (y) {
        console.warn("Failed to save profile theme", y);
      }
  }
  const l = n._t;
  n._t = function(f) {
    if (f === "status_unavailable" || f === "status_unavailable_hint") {
      const y = String(this._getLocale?.() || this._hass?.language || "en").split("-")[0];
      return (gp[y] || gp.en)[f];
    }
    return l.call(this, f);
  };
  const c = n._persistPersonalization;
  n._persistPersonalization = async function() {
    l_(this);
    const f = await c.call(this);
    return await a(this), f;
  };
  const u = n._chip;
  n._chip = function(f, y) {
    const k = this._hass?.states?.[f];
    if (!(y === "sensor" || y === "bypass" || y === "entry") || !El(k))
      return u.call(this, f, y);
    const R = k?.attributes?.friendly_name || f, P = this._t("status_unavailable_hint");
    return `
      <span class="sensor-pill sensor-unavailable" title="${yi(P)}">
        <span class="pill-dot"></span>
        <span class="pill-content">
          <span class="pill-name">${yi(R)}</span>
          <span class="pill-status">❓ ${yi(this._t("status_unavailable"))}</span>
        </span>
        ${this._isAdmin ? `<button data-remove="${y}:${yi(f)}" title="${yi(P)}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>` : ""}
      </span>
    `;
  };
  const m = n._deviceFacts;
  n._deviceFacts = function(f, y, k = !0) {
    if (k && El(y)) {
      const z = [{ text: `❓ ${this._t("status_unavailable")}`, className: "status-unavailable" }], R = this._getDevicePower(f, y);
      return R.mains && z.push({ text: "🔌 AC", className: "power-mains" }), R.battery !== null && z.push({ text: `🔋 ${R.battery}%`, className: R.battery <= 20 ? "power-low" : "" }), z;
    }
    return m.call(this, f, y, k);
  };
  const g = n._renderEntries;
  n._renderEntries = function() {
    const f = g.call(this);
    return hp(this), d_(this), fp(this), f;
  };
  const _ = n._load;
  n._load = async function() {
    const f = await _?.call(this);
    return await i(this), hp(this), fp(this), f;
  };
}
function u_(o) {
  const n = o.shadowRoot;
  if (!n || n.getElementById("argus-battery-ui-style")) return;
  const i = document.createElement("style");
  i.id = "argus-battery-ui-style", i.textContent = `
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
  `, n.appendChild(i);
}
function p_(o) {
  const n = o.shadowRoot;
  if (!n || !o._hass?.states) return;
  const i = o._dashboard?.entries || [];
  n.querySelectorAll(".entry").forEach((a, l) => {
    const c = i[l];
    if (!c) return;
    const u = o._hass.states[c.entity_id], m = String(u?.state || "disarmed"), g = m.replace("armed_", "");
    let _ = o._ui?.modes?.__by_entity__?.[c.entity_id]?.[g] || o._ui?.modes?.[g] || {}, f = _.sensors || [];
    if (m === "disarmed" || !f.length) {
      const R = o._ui?.modes?.__by_entity__?.[c.entity_id] || o._ui?.modes || {}, P = /* @__PURE__ */ new Set();
      ["away", "home", "night", "vacation"].forEach((E) => {
        R[E]?.sensors && R[E].sensors.forEach((S) => P.add(S));
      }), f = Array.from(P);
    }
    const y = _.bypassed_sensors || [], k = f.filter((R) => !y.includes(R) && o._hass.states[R]), z = a.querySelectorAll(".console-sensors .console-sensor");
    z.length && z.forEach((R, P) => {
      const E = k[P];
      if (!E) return;
      const S = o._hass.states[E];
      if (!S || R.querySelector(".console-sensor-battery")) return;
      const h = o._getSensorBattery(E, S);
      if (h != null && typeof h == "number") {
        const x = R.querySelector(".console-sensor-state");
        if (x) {
          const b = h === 0, w = h <= 10 && !b;
          let A = b ? "🔋 ❌" : `🔋 ${h}%`;
          const W = `<span class="console-sensor-battery ${b ? "dead" : w ? "low" : ""}" title="${b ? "Sin conexión (Batería agotada)" : w ? "Batería crítica - Reemplazar ya" : "Nivel de batería"}">${A}</span>`;
          x.insertAdjacentHTML("beforebegin", W);
        }
      }
    });
  });
}
function m_(o) {
  if (!o || o.__argusBatteryUiFixes) return;
  o.__argusBatteryUiFixes = !0;
  const n = o.prototype, i = n._renderEntries;
  n._renderEntries = function() {
    const a = i.call(this);
    return u_(this), p_(this), a;
  };
}
const oa = /* @__PURE__ */ new Set(["weather", "none", "photo", "collage", "video"]), Ll = /* @__PURE__ */ new Set(["default", "image"]);
function vr(o) {
  return String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]);
}
function g_(o) {
  const n = /^#[0-9a-f]{6}$/i.test(o || "") ? o : "#ff0000";
  return [1, 3, 5].map((i) => parseInt(n.slice(i, i + 2), 16));
}
function _p(o) {
  const n = o.shadowRoot;
  if (!n || n.getElementById("argus-deep-repair-style")) return;
  const i = document.createElement("style");
  i.id = "argus-deep-repair-style", i.textContent = `
.security-console .console-sensors{flex:0 1 276px!important;max-width:292px!important;min-width:210px!important;gap:7px!important;align-content:center!important;margin-inline:auto!important}
.security-console .console-sensor{min-height:0!important;padding:8px 10px!important;gap:8px!important;border-radius:12px!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 4px 12px rgba(0,0,0,.16)!important}
.security-console .console-sensor-icon{font-size:15px!important;line-height:1!important}.security-console .console-sensor-name{font-size:11px!important;font-weight:800!important}.security-console .console-sensor-state{font-size:9px!important;letter-spacing:.035em!important}.security-console .console-sensor-battery{font-size:8px!important;margin-left:2px!important;padding:2px 4px!important}
.light-siren-settings,.sos-output-settings{margin-top:8px;padding:9px 10px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(0,0,0,.12)}.light-siren-settings summary,.sos-output-settings summary{cursor:pointer;font-size:11px;font-weight:850}.light-siren-settings label,.sos-output-settings label{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:9px;font-size:11px}.sos-output-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px;align-items:start}.sos-output-row>.sensor-pill{width:100%!important;justify-content:flex-start!important}.sos-remove-output{border:0;border-radius:9px;padding:7px 9px;background:rgba(239,68,68,.18);color:#fca5a5;cursor:pointer}.sos-output-settings{grid-column:1/-1;margin-top:0}.sos-output-settings input[type=color]{width:44px;height:28px;padding:1px;border:0;border-radius:8px;background:transparent}.sos-output-settings select{min-width:120px;padding:6px;border-radius:8px;background:rgba(10,20,34,.8);color:inherit;border:1px solid rgba(255,255,255,.14)}
@media(max-width:950px){.security-console .console-sensors{width:min(100%,292px)!important;max-width:292px!important;min-width:0!important}}.ios-fullscreen .entry-content.security-console .console-sensors{flex-basis:292px!important;max-width:310px!important;min-width:220px!important}@media(max-width:900px){.ios-fullscreen .entry-content.security-console .console-sensors{width:min(100%,310px)!important;max-width:310px!important}}`, n.appendChild(i);
}
function bp(o = {}, n = {}) {
  const i = n?.background_mode, a = n?.background_file || "";
  let l = o.background_mode;
  oa.has(l) || (l = oa.has(i) ? i : "weather");
  let c = o.panel_bg_file;
  c === void 0 && (c = a), c = String(c || ""), ["photo", "collage", "video"].includes(l) || (c = "");
  let u = o.hub_bg_mode;
  u = u === "none" ? "default" : u, Ll.has(u) || (u = "default");
  let m = String(o.hub_bg_file || "");
  return u !== "image" && (m = ""), { background_mode: l, background_images: Array.isArray(o.background_images) ? o.background_images : c ? [c] : [], panel_bg_file: c, panel_bg_sound: !!o.panel_bg_sound, hub_bg_mode: u, hub_bg_file: m, hub_bg_sound: !!o.hub_bg_sound };
}
function yp(o, n) {
  o._backgroundMode = n.background_mode, o._backgroundImages = n.background_images, o._panelBgFile = n.panel_bg_file, o._panelBgSound = n.panel_bg_sound, o._hubBgMode = n.hub_bg_mode, o._hubBgFile = n.hub_bg_file, o._hubBgSound = n.hub_bg_sound;
  const i = o.shadowRoot, a = i?.getElementById("bg-mode-select-standalone"), l = i?.getElementById("panel-bg-url-input"), c = i?.getElementById("chk-panel-bg-sound"), u = i?.getElementById("hub-bg-mode-select"), m = i?.getElementById("hub-bg-url-input"), g = i?.getElementById("chk-hub-bg-sound");
  a && (a.value = n.background_mode), l && (l.value = n.panel_bg_file), c && (c.checked = n.panel_bg_sound), u && (u.value = n.hub_bg_mode), m && (m.value = n.hub_bg_file), g && (g.checked = n.hub_bg_sound), o._updateBgFieldsVisibility?.(), o._updateCanvasBackground?.(), o._updateTheme?.(), o._renderEntries?.();
}
function vp(o) {
  const n = o.shadowRoot;
  if (!n) return;
  const i = (a, l, c) => {
    a && !a.dataset[l] && (a.dataset[l] = "1", a.addEventListener("change", c));
  };
  i(n.getElementById("bg-mode-select-standalone"), "deepBg", (a) => {
    const l = oa.has(a.target.value) ? a.target.value : "weather";
    if (o._backgroundMode = l, !["photo", "collage", "video"].includes(l)) {
      o._panelBgFile = "", o._backgroundImages = [];
      const c = n.getElementById("panel-bg-url-input");
      c && (c.value = "");
    }
    o._updateBgFieldsVisibility?.(), o._updateTheme?.(), o._renderEntries?.();
  }), i(n.getElementById("hub-bg-mode-select"), "deepBg", (a) => {
    const l = Ll.has(a.target.value) ? a.target.value : "default";
    if (o._hubBgMode = l, l === "default") {
      o._hubBgFile = "";
      const c = n.getElementById("hub-bg-url-input");
      c && (c.value = "");
    }
    o._updateBgFieldsVisibility?.(), o._updateCanvasBackground?.(), o._updateTheme?.();
  }), i(n.getElementById("panel-bg-url-input"), "deepBg", (a) => {
    o._panelBgFile = String(a.target.value || "").trim(), o._panelBgFile && (o._backgroundImages = [o._panelBgFile]), o._renderEntries?.();
  }), i(n.getElementById("hub-bg-url-input"), "deepBg", (a) => {
    o._hubBgFile = String(a.target.value || "").trim(), o._updateCanvasBackground?.(), o._updateTheme?.();
  });
}
function Xo(o) {
  const n = o.shadowRoot?.getElementById("sos-output-chips");
  if (!n) return;
  const i = Array.isArray(o._panicOutputs) ? o._panicOutputs : [], a = o._panicOutputSettings || {};
  n.innerHTML = i.length ? i.map((l) => {
    const c = o._hass?.states?.[l], u = c?.attributes?.friendly_name || l, m = l.startsWith("light."), g = a[l] || {}, _ = ["none", "gentle", "rapid"].includes(g.flash_mode) ? g.flash_mode : g.gentle_flash ? "gentle" : "none";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${vr(u)}"><span>${vr(u)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${vr(l)}" aria-label="Eliminar">✕</button>${m ? `<details class="sos-output-settings"><summary>🎨 Color y destello</summary><label>Color <input type="color" data-sos-output-color="${vr(l)}" value="${f = g.rgb_color, `#${(Array.isArray(f) && f.length === 3 ? f : [255, 0, 0]).map((y) => Math.max(0, Math.min(255, Number(y) || 0)).toString(16).padStart(2, "0")).join("")}`}"></label><label>Destello <select data-sos-output-flash="${vr(l)}"><option value="none" ${_ === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${_ === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${_ === "rapid" ? "selected" : ""}>Rápido</option></select></label></details>` : ""}</div>`;
    var f;
  }).join("") : `<div class="mode-sensor-none">${vr(o._t("sos_no_outputs"))}</div>`, n.querySelectorAll("[data-remove-sos-output]").forEach((l) => {
    l.addEventListener("click", () => {
      o._panicOutputs = i.filter((c) => c !== l.dataset.removeSosOutput), delete o._panicOutputSettings?.[l.dataset.removeSosOutput], Xo(o);
    });
  });
}
function f_(o) {
  if (!o || o.__argusDeepRepair) return;
  o.__argusDeepRepair = !0;
  const n = o.prototype, i = n._load;
  n._load = async function() {
    const m = await i.call(this);
    if (_p(this), this._panicOutputSettings = this._dashboard?.ui?.panic_output_settings || {}, this._currentProfile?.id) try {
      const g = await this._send("argus/get_profile_theme");
      yp(this, bp(g?.theme || {}, this._currentUserTheme || {}));
    } catch (g) {
      console.warn("Argus profile theme load failed:", g);
    }
    return vp(this), Xo(this), m;
  };
  const a = n._renderEntries;
  n._renderEntries = function() {
    const m = a.call(this);
    return _p(this), vp(this), m;
  }, n._renderSosOutputs = function() {
    Xo(this);
  };
  const l = n._acceptSelection;
  n._acceptSelection = function() {
    if (this._selectorTarget !== "panic") return l.call(this);
    this._panicOutputs = [...new Set(this._selected || [])], this._panicOutputSettings = this._panicOutputSettings || {}, this._panicOutputs.forEach((m) => {
      this._panicOutputSettings[m] ||= { flash_mode: "none" };
    }), Xo(this), this._closeModal?.();
  };
  const c = n._handlePanelBgFile;
  n._handlePanelBgFile = async function(m) {
    if (await c.call(this, m), this._panelBgFile) {
      this._backgroundMode = "photo", this._backgroundImages = [this._panelBgFile];
      const g = this.shadowRoot?.getElementById("bg-mode-select-standalone");
      g && (g.value = "photo"), this._updateBgFieldsVisibility?.(), this._renderEntries?.();
    }
  };
  const u = n._handleHubBgFile;
  n._handleHubBgFile = async function(m) {
    if (await u.call(this, m), this._hubBgFile) {
      this._hubBgMode = "image";
      const g = this.shadowRoot?.getElementById("hub-bg-mode-select");
      g && (g.value = "image"), this._updateBgFieldsVisibility?.(), this._updateCanvasBackground?.(), this._updateTheme?.();
    }
  }, n._persistPersonalization = async function() {
    const m = this.shadowRoot, g = oa.has(m?.getElementById("bg-mode-select-standalone")?.value) ? m.getElementById("bg-mode-select-standalone").value : "weather", _ = Ll.has(m?.getElementById("hub-bg-mode-select")?.value) ? m.getElementById("hub-bg-mode-select").value : "default", f = ["photo", "collage", "video"].includes(g) ? String(m?.getElementById("panel-bg-url-input")?.value || this._panelBgFile || "").trim() : "", y = _ === "image" ? String(m?.getElementById("hub-bg-url-input")?.value || this._hubBgFile || "").trim() : "", k = { background_mode: g, background_images: g === "collage" ? this._backgroundImages || [] : f ? [f] : [], panel_bg_file: f, panel_bg_sound: !!m?.getElementById("chk-panel-bg-sound")?.checked, hub_bg_mode: _ === "default" ? "none" : "image", hub_bg_file: y, hub_bg_sound: !!m?.getElementById("chk-hub-bg-sound")?.checked }, z = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, R = this._normaliseEmergencyNumber(m?.getElementById("emergency-number-input")?.value), P = { ...z ? { entry_id: z } : {}, home_name: this._homeName, temperature_source: m?.getElementById("temp-source-select-standalone")?.value || "auto", weather_source: m?.getElementById("weather-source-select")?.value || "auto", emergency_number: R, panic_outputs: this._panicOutputs || [] };
    try {
      const E = function(h) {
        const x = { ...h._panicOutputSettings || {} };
        return h.shadowRoot?.querySelectorAll("[data-sos-output-color]").forEach((b) => {
          const w = b.dataset.sosOutputColor;
          x[w] = { ...x[w] || {}, rgb_color: g_(b.value), flash_mode: h.shadowRoot.querySelector(`[data-sos-output-flash="${CSS.escape(w)}"]`)?.value || "none" };
        }), h._panicOutputSettings = Object.fromEntries((h._panicOutputs || []).map((b) => [b, x[b] || { flash_mode: "none" }])), h._panicOutputSettings;
      }(this);
      await this._send("argus/save_profile_theme", { ...z ? { entry_id: z } : {}, theme: k }), await this._send("argus/save_panic_output_profile", { ...z ? { entry_id: z } : {}, outputs: this._panicOutputs || [], settings: E }), await this._send("argus/save_ui", P), yp(this, bp(k)), this._temperatureSource = P.temperature_source, this._weatherSource = P.weather_source, this._emergencyNumber = R, this._configureEmergencyCall?.();
      const S = m?.getElementById("btn-save-personalization-standalone");
      if (S) {
        const h = S.textContent;
        S.textContent = this._t("saved"), S.style.background = "#43a047", setTimeout(() => {
          S.textContent = h, S.style.background = "";
        }, 3e3);
      }
    } catch (E) {
      throw alert(this._format("generic_error", { error: E?.message || E })), E;
    }
  };
}
const h_ = /* @__PURE__ */ new Set(["hs", "xy", "rgb", "rgbw", "rgbww"]), __ = /* @__PURE__ */ new Set(["flash", "slow flash", "slow_flash", "blink", "strobe", "police"]);
function Dt(o) {
  return String(o ?? "").replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]);
}
function la(o, n) {
  const i = o?._hass?.states?.[n], a = i?.attributes || {}, l = Array.isArray(a.supported_color_modes) ? [...new Set(a.supported_color_modes.map((f) => String(f).toLowerCase()).filter(Boolean))] : [], c = Array.isArray(a.effect_list) ? a.effect_list.map((f) => String(f).toLowerCase()) : [], u = !!i && String(n).startsWith("light."), m = u && (l.some((f) => f !== "onoff") || Number.isFinite(Number(a.brightness))), g = u && c.some((f) => __.has(f)), _ = u && (Number(a.supported_features) & 8) === 8;
  return {
    exists: !!i,
    isLight: u,
    modes: l,
    color: u && l.some((f) => h_.has(f)),
    brightness: m,
    nativeEffect: g,
    nativeFlash: _,
    safeFlash: g || _ || m,
    flashMethod: g ? "native_effect" : _ ? "native_flash" : m ? "brightness_pulse" : "steady_safe"
  };
}
function b_(o, n) {
  return la(o, n).color;
}
function y_(o) {
  return `#${(Array.isArray(o) && o.length === 3 ? o : [255, 0, 0]).map((i) => Math.max(0, Math.min(255, Number(i) || 0)).toString(16).padStart(2, "0")).join("")}`;
}
function Ol(o) {
  const n = /^#[0-9a-f]{6}$/i.test(o || "") ? o : "#ff0000";
  return [1, 3, 5].map((i) => parseInt(n.slice(i, i + 2), 16));
}
function ki(o) {
  const n = o.shadowRoot;
  if (!n || n.getElementById("argus-entity-truth-style")) return;
  const i = document.createElement("style");
  i.id = "argus-entity-truth-style", i.textContent = `
[hidden]{display:none!important}.sos-output-row{grid-template-columns:minmax(0,1fr) auto!important;padding:6px 8px!important;border:1px solid rgba(255,255,255,.09);border-radius:16px;background:rgba(5,15,28,.16)}
.sos-output-settings summary,.light-siren-settings summary{white-space:normal!important}.argus-ha-capability{display:inline-flex;margin-left:6px;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.08);font-size:8px;font-weight:750;opacity:.72;text-transform:none;letter-spacing:0}
.argus-safe-note{margin-top:8px;padding:8px;border-radius:10px;background:rgba(255,183,77,.10);font-size:9px;line-height:1.35;opacity:.85}.argus-test-flash{width:100%;margin-top:8px;padding:7px 9px;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(46,168,255,.12);color:inherit;font-size:10px;font-weight:850;cursor:pointer}.argus-test-flash:disabled{opacity:.55;cursor:wait}
#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{flex:0 1 248px!important;width:248px!important;max-width:248px!important;min-width:205px!important;gap:6px!important;margin-inline:0!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor{min-height:34px!important;padding:6px 10px!important;gap:7px!important;border-radius:999px!important;box-sizing:border-box!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-icon{font-size:16px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-name{font-size:10px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-state{font-size:8px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-battery{font-size:9px!important;padding:2px 5px!important;border-radius:999px!important}
#widget-grid>#w-access{align-self:start!important;height:max-content!important;min-height:0!important;max-height:none!important}#widget-grid>#w-access .access-workspace:not(.open){display:none!important}#widget-grid>#w-access .access-workspace.open{max-height:430px!important;overflow:auto!important;overscroll-behavior:contain}#widget-grid>#w-activity,#widget-grid>#w-automations{grid-row:span 1!important;height:clamp(270px,32vh,340px)!important;min-height:270px!important;max-height:340px!important;align-self:start!important}#widget-grid>#w-activity #activity-log,#widget-grid>#w-automations #auto-view,#widget-grid>#w-automations #auto-view>div{min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}@media(max-width:760px){#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{width:min(100%,248px)!important;max-width:248px!important}#widget-grid>#w-activity,#widget-grid>#w-automations{height:360px!important;min-height:360px!important;max-height:360px!important}}`, n.appendChild(i);
}
async function Up(o, n, i, a, l) {
  if (!i || a === "none") return;
  const c = n.textContent;
  n.disabled = !0, n.textContent = "Probando de forma segura…";
  try {
    const u = { entity_id: i, flash_mode: a };
    b_(o, i) && Array.isArray(l) && (u.rgb_color = l);
    const m = await o._send("argus/test_light_output", u), g = { brightness_pulse: "pulso de brillo sin apagar", native_flash: "flash nativo", native_effect: "efecto nativo", steady_safe: "luz fija; destello bloqueado por seguridad", steady: "luz fija" }[m?.method] || "servicio seguro de luz";
    n.textContent = `✓ ${g}`;
  } catch (u) {
    n.textContent = `✗ ${u?.message || "No respondió la luz"}`;
  } finally {
    setTimeout(() => {
      n.disabled = !1, n.textContent = c;
    }, 4e3);
  }
}
function Wp(o, n) {
  return o.safeFlash ? `${o.color ? "🎨 Color y destello seguro" : "✨ Destello seguro"} — ${Dt(n)}` : `💡 Luz fija segura — ${Dt(n)}`;
}
function Qo(o) {
  ki(o);
  const n = o.shadowRoot?.getElementById("sos-output-chips");
  if (!n) return;
  const i = Array.isArray(o._panicOutputs) ? o._panicOutputs : [], a = o._panicOutputSettings || {};
  n.innerHTML = i.length ? i.map((l) => {
    const u = o._hass?.states?.[l]?.attributes?.friendly_name || l, m = la(o, l), g = a[l] || {}, _ = m.safeFlash && ["none", "gentle", "rapid"].includes(g.flash_mode) ? g.flash_mode : m.safeFlash && g.gentle_flash ? "gentle" : "none", f = m.modes.length ? m.modes.join(", ") : "sin capacidad declarada";
    return `<div class="sos-output-row"><span class="sensor-pill" title="${Dt(l)}"><span>${Dt(u)}</span></span><button type="button" class="sos-remove-output" data-remove-sos-output="${Dt(l)}" aria-label="Eliminar">✕</button>${m.isLight ? `<details class="sos-output-settings"><summary>${Wp(m, u)} <span class="argus-ha-capability">HA: ${Dt(f)}</span></summary>${m.color ? `<label>Color <input type="color" data-sos-output-color="${Dt(l)}" value="${y_(g.rgb_color)}"></label>` : `<input type="hidden" data-sos-output-color="${Dt(l)}" value="#ffffff">`}${m.safeFlash ? `<label>Destello <select data-sos-output-flash="${Dt(l)}"><option value="none" ${_ === "none" ? "selected" : ""}>Sin destello</option><option value="gentle" ${_ === "gentle" ? "selected" : ""}>Suave</option><option value="rapid" ${_ === "rapid" ? "selected" : ""}>Rápido</option></select></label><button type="button" class="argus-test-flash" data-test-sos-flash="${Dt(l)}">Probar destello seguro</button>` : '<div class="argus-safe-note">Esta entidad solo admite encendido/apagado. Argus la mantendrá encendida de forma fija y nunca hará ciclos repetidos que puedan restablecer el bombillo o el plug.</div>'}</details>` : ""}</div>`;
  }).join("") : `<div class="mode-sensor-none">${Dt(o._t("sos_no_outputs"))}</div>`, n.querySelectorAll("[data-remove-sos-output]").forEach((l) => l.addEventListener("click", () => {
    o._panicOutputs = i.filter((c) => c !== l.dataset.removeSosOutput), delete o._panicOutputSettings?.[l.dataset.removeSosOutput], Qo(o);
  })), n.querySelectorAll("[data-test-sos-flash]").forEach((l) => l.addEventListener("click", () => {
    const c = l.dataset.testSosFlash, u = l.closest(".sos-output-settings"), m = u?.querySelector("[data-sos-output-flash]")?.value || "none", g = u?.querySelector('input[type="color"][data-sos-output-color]');
    Up(o, l, c, m, g ? Ol(g.value) : null);
  }));
}
function xp(o) {
  ki(o);
  const n = o.shadowRoot;
  n && n.querySelectorAll("[data-light-siren-color]").forEach((i) => {
    const a = i.dataset.lightSirenColor, l = la(o, a), c = i.closest(".light-siren-settings"), u = i.closest("label");
    !l.color && u && u.remove();
    const m = c?.querySelector("summary"), g = o._hass?.states?.[a]?.attributes?.friendly_name || a, _ = l.modes.length ? l.modes.join(", ") : "sin capacidad declarada";
    m && (m.innerHTML = `${Wp(l, g)} <span class="argus-ha-capability">HA: ${Dt(_)}</span>`);
    const f = c?.querySelector("[data-light-siren-flash]");
    if (!l.safeFlash && f) {
      f.checked = !1, f.disabled = !0;
      const y = f.closest("label");
      y && (y.innerHTML = '<span class="argus-safe-note">Sin destello: luz fija para evitar ciclos de alimentación.</span>');
    }
    if (l.safeFlash && c && !c.querySelector("[data-test-mode-flash]")) {
      const y = document.createElement("button");
      y.type = "button", y.className = "argus-test-flash", y.dataset.testModeFlash = a, y.textContent = "Probar destello seguro", y.addEventListener("click", () => {
        const k = c.querySelector("[data-light-siren-flash]")?.checked, z = l.color ? c.querySelector("[data-light-siren-color]") : null;
        Up(o, y, a, k ? "gentle" : "none", z ? Ol(z.value) : null);
      }), c.appendChild(y);
    }
  });
}
function v_(o) {
  const n = o._currentModeConfig(), i = o.shadowRoot, a = i.getElementById("mode-require-closed"), l = i.getElementById("mode-arming-time"), c = i.getElementById("mode-entry-delay"), u = i.getElementById("mode-mqtt-enabled");
  a && (n.require_closed = a.checked), l && (n.arming_time = l.value ? parseInt(l.value, 10) : 0), c && (n.entry_delay = c.value ? parseInt(c.value, 10) : 0), u && (n.mqtt_enabled = u.checked), n.light_siren_settings = {}, i.querySelectorAll("[data-light-siren-flash]").forEach((m) => {
    const g = m.dataset.lightSirenFlash, _ = la(o, g), f = _.safeFlash && !!m.checked, y = { gentle_flash: f, flash_mode: f ? "gentle" : "none" };
    if (_.color) {
      const k = i.querySelector(`[data-light-siren-color="${CSS.escape(g)}"]`);
      k && (y.rgb_color = Ol(k.value));
    }
    n.light_siren_settings[g] = y;
  }), o._runWithPin(async () => {
    const m = o._modeEntryId || o._dashboard?.entries?.[0]?.entity_id || "default";
    o._ui.modes ||= {}, o._ui.modes.__by_entity__ ||= {}, o._ui.modes.__by_entity__[m] ||= {}, o._ui.modes.__by_entity__[m][o._mode] = { ...n };
    const g = i.getElementById("mode-status");
    g && (g.textContent = "…", g.className = "status");
    try {
      await o._send("argus/save_mode_config", { entity_id: m, mode: o._mode, config: n }), g && (g.textContent = o._t("saved"), g.className = "status ok show"), setTimeout(() => {
        g && (g.textContent = "", g.className = "status");
      }, 3e3);
    } catch (_) {
      g && (g.textContent = `✗ ${_?.message || "Error"}`, g.className = "status err show");
    }
  });
}
function x_(o) {
  if (!o || o.__argusLightCapabilityFixes) return;
  o.__argusLightCapabilityFixes = !0;
  const n = o.prototype, i = n.connectedCallback;
  n.connectedCallback = function() {
    return ki(this), i?.call(this);
  };
  const a = n._load;
  n._load = async function() {
    const m = await a.call(this);
    return ki(this), Qo(this), xp(this), m;
  }, n._renderSosOutputs = function() {
    Qo(this);
  };
  const l = n._acceptSelection;
  n._acceptSelection = function() {
    const m = l.call(this);
    return this._selectorTarget === "panic" && Qo(this), m;
  };
  const c = n._renderModeView;
  n._renderModeView = function() {
    const m = c.call(this);
    return xp(this), m;
  };
  const u = n._renderEntries;
  n._renderEntries = function() {
    const m = u.call(this);
    return ki(this), m;
  }, n._saveMode = function() {
    return v_(this);
  };
}
function wp(o) {
  const n = o.shadowRoot, i = n?.getElementById("lbl-aesthetic-custom"), a = n?.getElementById("personalize-workspace");
  if (!n || !i || !a || i.dataset.argusPersonalizationToggle === "1") return;
  const l = i.cloneNode(!0);
  i.replaceWith(l), l.dataset.argusPersonalizationToggle = "1", l.setAttribute("role", "button"), l.setAttribute("tabindex", "0");
  const c = n.getElementById("btn-edit-home-name-standalone"), u = n.getElementById("btn-save-personalization-standalone"), m = (_) => {
    a.hidden = !_, a.classList.toggle("collapsed", !_), l.setAttribute("aria-expanded", String(_));
    const f = l.querySelector("#personalize-chevron");
    f && (f.style.transform = "none", f.textContent = _ ? "▲ Ocultar" : "▼ Desplegar"), c && (c.hidden = !_), u && (u.hidden = !_);
  };
  m(!1);
  const g = () => m(l.getAttribute("aria-expanded") !== "true");
  l.addEventListener("click", g), l.addEventListener("keydown", (_) => {
    _.key !== "Enter" && _.key !== " " || (_.preventDefault(), g());
  });
}
function w_(o) {
  if (!o || o.__argusPersonalizationToggleFix) return;
  o.__argusPersonalizationToggleFix = !0;
  const n = o.prototype, i = n.connectedCallback;
  n.connectedCallback = function() {
    const l = i?.call(this);
    return queueMicrotask(() => wp(this)), l;
  };
  const a = n._load;
  n._load = async function() {
    const l = await a?.call(this);
    return wp(this), l;
  };
}
function gl(o) {
  if (o.shadowRoot?.getElementById("argus-dashboard-scroll-fixes")) return;
  const n = document.createElement("style");
  n.id = "argus-dashboard-scroll-fixes", n.textContent = `
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
`, o.shadowRoot?.appendChild(n);
}
function k_(o) {
  if (!o || o.__argusDashboardScrollFixes) return;
  o.__argusDashboardScrollFixes = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries;
  n.connectedCallback = function() {
    return gl(this), i?.call(this);
  }, n._load = async function() {
    const c = await a?.call(this);
    return gl(this), c;
  }, n._renderEntries = function() {
    const c = l?.call(this);
    return gl(this), c;
  };
}
const Vp = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Si = (o) => JSON.parse(JSON.stringify(o));
function Al(o) {
  if (!Array.isArray(o)) return null;
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const a of o) {
    const l = String(a?.id || "");
    !l || n.has(l) || (n.add(l), i.push({ id: l, size: Vp.has(a?.size) ? a.size : "M", hidden: !!a?.hidden }));
  }
  return i.length ? i : null;
}
function kp(o) {
  try {
    return Al(JSON.parse(localStorage.getItem("argus-widgets-v4") || localStorage.getItem("argus-widgets-v2") || "null"));
  } catch {
    return null;
  }
}
function S_(o) {
  const n = o.shadowRoot?.getElementById("widget-grid"), i = new Map((o._widgetConfig || []).map((a) => [a.id, a]));
  return Al(n ? [...n.children].filter((a) => a.classList.contains("panel") && !a.classList.contains("dashboard-instances")).map((a) => {
    const l = a.id.replace(/^w-/, "");
    return { id: l, size: Vp.has(a.dataset.size) ? a.dataset.size : i.get(l)?.size || "M", hidden: !!i.get(l)?.hidden };
  }) : o._widgetConfig);
}
function Gp(o) {
  const n = S_(o);
  if (!n) return;
  o._widgetConfig = Si(n), localStorage.setItem("argus-widgets-v4", JSON.stringify(n)), o._ui = o._ui || {};
  const i = { ...o._ui.dashboard || {}, widget_layout: Si(n) };
  o._ui.dashboard = i;
  const a = o._dashboard?.entry_id || o._dashboard?.entries?.[0]?.entry_id, l = { dashboard: i, ...a ? { entry_id: a } : {} };
  o._v2041Save = (o._v2041Save || Promise.resolve()).catch(() => {
  }).then(() => o._send("argus/save_ui", l)).catch((c) => console.error("Argus layout save failed", c));
}
function E_(o) {
  if (o.shadowRoot?.getElementById("argus-v2041-audit-repair")) return;
  const n = document.createElement("style");
  n.id = "argus-v2041-audit-repair", n.textContent = `
#w-modes,#w-access{display:flex!important;flex-direction:column!important;overflow:hidden!important;min-height:320px!important}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid{flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-access [role=tabpanel]{min-height:220px!important;max-height:none!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important}
.argus-disarm-btn{--btn-bg:#64748b!important;background:linear-gradient(110deg,rgba(100,116,139,.58),rgba(30,41,59,.72))!important;border-color:rgba(255,255,255,.2)!important}
@media(max-width:760px){#w-modes,#w-access{min-height:440px!important;max-height:75dvh!important}}
`, o.shadowRoot?.appendChild(n);
}
function vi(o) {
  E_(o), [...o.shadowRoot?.querySelectorAll(".entry") || []].forEach((l, c) => {
    const u = l.querySelector(".liquid-stack");
    if (!u || u.querySelector(".argus-disarm-btn")) return;
    const m = document.createElement("button");
    m.type = "button", m.className = "liquid-btn argus-disarm-btn", m.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", m.addEventListener("click", async () => {
      const g = o._dashboard?.entries?.[c] || o._dashboard?.entries?.find((_) => _.entity_id === l.dataset.entityId);
      if (g) {
        m.disabled = !0;
        try {
          await o._send("argus/perform_alarm_action", { entry_id: g.entry_id, action: "disarm" }), await o._load?.();
        } catch (_) {
          console.error("Argus disarm failed", _);
        } finally {
          m.disabled = !1;
        }
      }
    }), u.prepend(m);
  });
  const i = o.shadowRoot?.getElementById("w-access");
  if (i) {
    const l = i.querySelector(".panel-body,#access-view,.access-view,.access-content");
    l && !l.textContent.trim() && [...i.querySelectorAll("button,[role=tab]")].find((u) => /usuarios|users/i.test(u.textContent || ""))?.click();
  }
  const a = o.shadowRoot?.getElementById("widget-grid");
  if (a && !a._v2041) {
    a._v2041 = !0;
    for (const l of ["drop", "dragend"]) a.addEventListener(l, () => {
      o._widgetEditing && setTimeout(() => Gp(o), 0);
    }, !0);
  }
}
function A_(o) {
  if (!o || o.__v2041AuditRepair) return;
  o.__v2041AuditRepair = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries, c = n._saveWidgetLayout, u = n._initWidgetGrid;
  n.connectedCallback = function() {
    const m = i?.call(this);
    return vi(this), this._v2041Observer = new MutationObserver(() => vi(this)), this._v2041Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), m;
  }, n._initWidgetGrid = function() {
    const m = kp();
    m && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: Si(m) });
    const g = u?.call(this);
    return m && (this._widgetConfig = Si(m), this._renderWidgetLayout?.()), vi(this), g;
  }, n._load = async function() {
    const m = await a?.call(this), g = kp();
    return g && (this._widgetConfig = Si(g), this._renderWidgetLayout?.()), vi(this), m;
  }, n._renderEntries = function() {
    const m = l?.call(this);
    return vi(this), m;
  }, n._saveWidgetLayout = function() {
    const m = c?.call(this);
    return setTimeout(() => Gp(this), 0), m;
  };
}
const Yp = /* @__PURE__ */ new Set(["S", "M", "L", "XL"]), Kp = "argus-widgets-stable-v5", xr = (o) => JSON.parse(JSON.stringify(o));
function Cl(o) {
  if (!Array.isArray(o)) return null;
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const a of o) {
    const l = String(a?.id || "");
    !l || n.has(l) || (n.add(l), i.push({ id: l, size: Yp.has(a?.size) ? a.size : "M", hidden: !!a?.hidden }));
  }
  return i.length ? i : null;
}
function Sp() {
  try {
    return Cl(JSON.parse(localStorage.getItem(Kp) || localStorage.getItem("argus-widgets-v4") || "null"));
  } catch {
    return null;
  }
}
function wr(o) {
  const n = o.shadowRoot?.getElementById("widget-grid"), i = new Map((o._widgetConfig || []).map((a) => [a.id, a]));
  return Cl(n ? [...n.children].filter((a) => a.classList.contains("panel") && !a.classList.contains("dashboard-instances")).map((a) => {
    const l = a.id.replace(/^w-/, "");
    return { id: l, size: Yp.has(a.dataset.size) ? a.dataset.size : i.get(l)?.size || "M", hidden: !!i.get(l)?.hidden };
  }) : o._widgetConfig);
}
function Ei(o, n = wr(o)) {
  if (!n) return;
  localStorage.setItem(Kp, JSON.stringify(n)), o._widgetConfig = xr(n), o._ui = o._ui || {};
  const i = { ...o._ui.dashboard || {}, widget_layout: xr(n) };
  o._ui.dashboard = i;
  const a = o._dashboard?.entry_id || o._dashboard?.entries?.[0]?.entry_id, l = { dashboard: i, ...a ? { entry_id: a } : {} };
  o._stableSave = (o._stableSave || Promise.resolve()).catch(() => {
  }).then(() => o._send("argus/save_ui", l)).catch((c) => console.error("Argus server layout save failed; stable local layout retained", c));
}
function C_(o) {
  if (o.shadowRoot?.getElementById("argus-v2042-stability")) return;
  const n = document.createElement("style");
  n.id = "argus-v2042-stability", n.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:linear-gradient(110deg,#22c55e,#15803d)!important;border-color:rgba(134,239,172,.65)!important;color:white!important;box-shadow:0 8px 22px rgba(34,197,94,.22)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}
.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}
@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes,#w-access{display:flex!important;flex-direction:column!important;overflow:hidden!important;min-height:360px!important}#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
@media(max-width:760px){#w-modes,#w-access{min-height:480px!important;max-height:78dvh!important}}
`, o.shadowRoot?.appendChild(n);
}
function xi(o) {
  C_(o), [...o.shadowRoot?.querySelectorAll(".entry") || []].forEach((l, c) => {
    const u = o._dashboard?.entries?.[c], m = u?.attributes || {}, g = m.arming_blocking_sensors || [], _ = !!(m.arming_waiting_for_sensors || g.length);
    l.classList.toggle("argus-waiting", _);
    const f = l.querySelector(".liquid-stack");
    if (f) {
      let k = f.querySelector(".argus-disarm-btn");
      k || (k = document.createElement("button"), k.type = "button", k.className = "liquid-btn argus-disarm-btn", k.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", k.onclick = async () => {
        if (u) {
          k.disabled = !0;
          try {
            await o._send("argus/perform_alarm_action", { entry_id: u.entry_id, action: "disarm" }), await o._load?.();
          } finally {
            k.disabled = !1;
          }
        }
      });
      const z = [...f.children].find((R) => /SOS|PÁNICO|PANIC/i.test(R.textContent || ""));
      z ? f.insertBefore(k, z) : f.appendChild(k);
    }
    const y = new Set(g.map((k) => {
      const z = o._dashboard?.available_entities?.find?.((R) => R.entity_id === k);
      return String(z?.name || k).toLocaleLowerCase();
    }));
    l.querySelectorAll(".console-sensor").forEach((k) => {
      const z = String(k.querySelector(".console-sensor-name")?.textContent || k.textContent || "").toLocaleLowerCase();
      k.classList.toggle("argus-blocking", [...y].some((R) => z.includes(R) || R.includes(z)));
    });
  });
  const i = o.shadowRoot?.getElementById("w-access");
  if (i) {
    const l = i.querySelector(".panel-body,#access-view,.access-view,.access-content,.access-body");
    l && !l.textContent.trim() && [...i.querySelectorAll("button,[role=tab]")].find((c) => /usuarios|users/i.test(c.textContent || ""))?.click();
  }
  const a = o.shadowRoot?.getElementById("widget-grid");
  a && !a._stableLayout && (a._stableLayout = !0, a.addEventListener("dragend", () => {
    o._widgetEditing && Ei(o, wr(o));
  }, !0), a.addEventListener("drop", () => queueMicrotask(() => {
    o._widgetEditing && Ei(o, wr(o));
  }), !1), new MutationObserver(() => {
    o._widgetEditing && (clearTimeout(o._stableMutation), o._stableMutation = setTimeout(() => Ei(o, wr(o)), 80));
  }).observe(a, { childList: !0 }));
}
function z_(o) {
  if (!o || o.__v2042Stability) return;
  o.__v2042Stability = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries, c = n._initWidgetGrid, u = n._toggleWidgetEditing, m = n._saveWidgetLayout;
  n.connectedCallback = function() {
    const g = i?.call(this);
    return xi(this), g;
  }, n._initWidgetGrid = function() {
    const g = Sp();
    g && (this._ui = this._ui || {}, this._ui.dashboard = { ...this._ui.dashboard || {}, widget_layout: xr(g) });
    const _ = c?.call(this);
    return g && (this._widgetConfig = xr(g), this._renderWidgetLayout?.()), xi(this), _;
  }, n._load = async function() {
    const g = await a?.call(this), _ = Sp();
    return _ && (this._widgetConfig = xr(_), this._renderWidgetLayout?.(), requestAnimationFrame(() => {
      this._widgetConfig = xr(_), this._renderWidgetLayout?.();
    })), xi(this), g;
  }, n._renderEntries = function() {
    const g = l?.call(this);
    return xi(this), g;
  }, n._toggleWidgetEditing = function() {
    const g = this._widgetEditing, _ = g ? wr(this) : null, f = u?.call(this);
    return g && _ && Ei(this, _), xi(this), f;
  }, n._saveWidgetLayout = function() {
    const g = wr(this), _ = m?.call(this);
    return Ei(this, g), _;
  };
}
function I_(o) {
  if (o.shadowRoot?.getElementById("argus-v2043-visual-fix")) return;
  const n = document.createElement("style");
  n.id = "argus-v2043-visual-fix", n.textContent = `
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:#22a447!important;background-image:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important;box-shadow:0 8px 22px rgba(34,197,94,.3)!important}
.entry.argus-waiting .entry-icon>svg{animation:argusWaitShield 1.25s ease-in-out infinite!important;filter:drop-shadow(0 0 22px rgba(251,191,36,.85)) saturate(1.2)!important}.entry.argus-waiting .console-sensor.argus-blocking{animation:argusBlockingSensor .85s ease-in-out infinite!important;border-color:rgba(251,146,60,.9)!important;background:rgba(234,88,12,.2)!important}@keyframes argusWaitShield{0%,100%{opacity:.58;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}@keyframes argusBlockingSensor{0%,100%{opacity:.58;box-shadow:0 0 0 rgba(249,115,22,0)}50%{opacity:1;box-shadow:0 0 20px rgba(249,115,22,.65)}}
#w-modes .panel-body,#w-access .panel-body,#mode-view,#access-view,.access-view,.access-content,.access-sections,.access-body,.users-list,.user-list,.users-grid,[role=tabpanel]{min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important}
`, o.shadowRoot.appendChild(n);
}
function fl(o) {
  I_(o), [...o.shadowRoot?.querySelectorAll(".entry") || []].forEach((n, i) => {
    const a = o._dashboard?.entries?.[i], l = a?.attributes || {}, c = l.arming_blocking_sensors || [], u = !!(l.arming_waiting_for_sensors || c.length);
    n.classList.toggle("argus-waiting", u);
    const m = n.querySelector(".liquid-stack");
    if (m) {
      let _ = m.querySelector(".argus-disarm-btn");
      _ || (_ = document.createElement("button"), _.type = "button", _.className = "liquid-btn argus-disarm-btn", _.innerHTML = "<span>⏻</span><b>DESARMAR / OFF</b>", _.onclick = async () => {
        if (a) {
          _.disabled = !0;
          try {
            await o._send("argus/perform_alarm_action", { entry_id: a.entry_id, action: "disarm" }), await o._load?.();
          } finally {
            _.disabled = !1;
          }
        }
      }), _.style.setProperty("grid-column", "1 / -1", "important"), _.style.setProperty("width", "100%", "important"), _.style.setProperty("background", "#22a447", "important"), _.style.setProperty("background-image", "linear-gradient(110deg,#34c759,#16863a)", "important"), _.style.setProperty("color", "#fff", "important");
      const f = [...m.children].find((y) => /SOS|PÁNICO|PANIC/i.test(y.textContent || ""));
      f ? m.insertBefore(_, f) : m.appendChild(_);
    }
    const g = new Set(c.map((_) => String(o._dashboard?.available_entities?.find?.((f) => f.entity_id === _)?.name || _).toLocaleLowerCase()));
    n.querySelectorAll(".console-sensor").forEach((_) => {
      const f = String(_.querySelector(".console-sensor-name")?.textContent || _.textContent || "").toLocaleLowerCase();
      _.classList.toggle("argus-blocking", [...g].some((y) => f.includes(y) || y.includes(f)));
    });
  });
}
function P_(o) {
  if (!o || o.__v2043VisualFix) return;
  o.__v2043VisualFix = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries;
  n.connectedCallback = function() {
    const c = i?.call(this);
    return fl(this), c;
  }, n._load = async function() {
    const c = await a?.call(this);
    return fl(this), c;
  }, n._renderEntries = function() {
    const c = l?.call(this);
    return fl(this), c;
  };
}
function Wo(o) {
  return String(o || "").trim().toLocaleLowerCase();
}
function hl(o) {
  if (!o.shadowRoot) return;
  let n = o.shadowRoot.getElementById("argus-v2045-trigger-sensors");
  n || (n = document.createElement("style"), n.id = "argus-v2045-trigger-sensors", n.textContent = ".entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;color:#fff!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;box-shadow:0 0 18px rgba(249,115,22,.55)!important}@keyframes argusTriggeredSensor{0%,100%{opacity:.62;box-shadow:0 0 8px rgba(249,115,22,.35)}50%{opacity:1;box-shadow:0 0 26px rgba(251,146,60,.9)}}", o.shadowRoot.appendChild(n)), [...o.shadowRoot.querySelectorAll(".entry") || []].forEach((i, a) => {
    const l = o._dashboard?.entries?.[a], c = l?.attributes || {}, u = c.triggered_sensors || [], m = new Set(u.flatMap((g) => {
      const _ = o._dashboard?.available_entities?.find?.((f) => f.entity_id === g);
      return [Wo(g), Wo(_?.name), Wo(_?.friendly_name)];
    }).filter(Boolean));
    i.querySelectorAll(".console-sensor").forEach((g) => {
      const _ = Wo(g.querySelector(".console-sensor-name")?.textContent || g.textContent);
      g.classList.toggle("argus-triggered-sensor", [...m].some((f) => _.includes(f) || f.includes(_)));
    });
  });
}
function R_(o) {
  if (!o || o.__v2045TriggerSensors) return;
  o.__v2045TriggerSensors = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries;
  n.connectedCallback = function() {
    const c = i?.call(this);
    return hl(this), c;
  }, n._load = async function() {
    const c = await a?.call(this);
    return hl(this), c;
  }, n._renderEntries = function() {
    const c = l?.call(this);
    return hl(this), c;
  };
}
const N_ = { armed_home: /EN CASA|HOME/i, armed_away: /AUSENTE|AWAY/i, armed_night: /NOCHE|NIGHT/i, armed_vacation: /VACACIONES|VACATION/i };
function L_(o, n) {
  const i = n?.entity_id || n?.alarm_entity_id;
  return String(n?.state || n?.alarm_state || n?.attributes?.state || o._hass?.states?.[i]?.state || "").toLowerCase();
}
function _l(o, n, i) {
  o.classList.toggle("argus-action-active", i), o.dataset.argusAction = n;
  const a = n === "sos" ? "linear-gradient(110deg,#ff453a,#ff2d55)" : n === "disarm" ? "linear-gradient(110deg,#34c759,#16863a)" : "linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))";
  o.style.setProperty("background", i ? a : "rgba(255,255,255,.105)", "important"), o.style.setProperty("background-image", i ? a : "linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))", "important"), o.style.setProperty("border", i ? "1px solid rgba(255,255,255,.38)" : "1px solid rgba(255,255,255,.14)", "important"), o.style.setProperty("box-shadow", i ? "0 8px 24px rgba(0,0,0,.24)" : "inset 0 1px 0 rgba(255,255,255,.08)", "important"), o.style.setProperty("backdrop-filter", "blur(16px) saturate(1.2)", "important");
}
function bl(o) {
  if (!o.shadowRoot) return;
  let n = o.shadowRoot.getElementById("argus-v2046-active-visuals");
  n || (n = document.createElement("style"), n.id = "argus-v2046-active-visuals", n.textContent = ".entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important;transition:background .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease!important}.entry .liquid-stack .liquid-btn:not(.argus-action-active):hover{background:rgba(255,255,255,.16)!important;transform:translateY(-1px)}.entry.argus-arming .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}", o.shadowRoot.appendChild(n)), [...o.shadowRoot.querySelectorAll(".entry") || []].forEach((i, a) => {
    const l = o._dashboard?.entries?.[a] || {}, c = l.attributes || {}, u = L_(o, l), m = u === "arming" || !!c.arming_waiting_for_sensors || !!(c.arming_blocking_sensors || []).length;
    i.classList.toggle("argus-arming", m);
    const g = i.querySelector(".entry-icon");
    let _ = i.querySelector(".argus-shield-status");
    m && g ? (_ || (_ = document.createElement("span"), _.className = "argus-shield-status", g.insertAdjacentElement("afterend", _)), _.textContent = (c.arming_blocking_sensors || []).length ? "ESPERANDO SENSORES" : "ARMANDO…") : _?.remove();
    const f = i.querySelector(".liquid-stack");
    f && [...f.querySelectorAll(".liquid-btn,button")].forEach((y) => {
      const k = String(y.textContent || "");
      if (/SOS|PÁNICO|PANIC/i.test(k)) _l(y, "sos", !!c.argus_panic_active);
      else if (/DESARMAR|DISARM|OFF/i.test(k)) _l(y, "disarm", u === "disarmed");
      else {
        const z = Object.entries(N_).find(([, R]) => R.test(k));
        z && _l(y, z[0], u === z[0]);
      }
    });
  });
}
function O_(o) {
  if (!o || o.__v2046ActiveVisuals) return;
  o.__v2046ActiveVisuals = !0;
  const n = o.prototype, i = n.connectedCallback, a = n._load, l = n._renderEntries;
  n.connectedCallback = function() {
    const c = i?.call(this);
    return bl(this), c;
  }, n._load = async function() {
    const c = await a?.call(this);
    return bl(this), c;
  }, n._renderEntries = function() {
    const c = l?.call(this);
    return bl(this), c;
  };
}
const T_ = /* @__PURE__ */ new Set(["alarm_control_panel", "fan", "input_boolean", "light", "script", "siren", "switch"]), M_ = (o) => typeof o == "string" && o.split(".").length === 2 && T_.has(o.split(".", 1)[0]);
function B_(o) {
  if (!o || o.__argusSosOutputPersistence) return;
  o.__argusSosOutputPersistence = !0;
  const n = o.prototype, i = n._acceptSelection;
  n._acceptSelection = async function() {
    if (this._selectorTarget !== "panic") return i?.call(this);
    const a = Array.isArray(this._panicOutputs) ? [...this._panicOutputs] : [], l = { ...this._panicOutputSettings || {} }, c = [...new Set((this._selected || []).filter(M_))], u = { ...this._panicOutputSettings || {} };
    Object.keys(u).forEach((g) => {
      c.includes(g) || delete u[g];
    }), c.forEach((g) => {
      u[g] ??= { flash_mode: "none" };
    }), this._panicOutputs = c, this._panicOutputSettings = u, this._renderSosOutputs?.(), this._closeModal?.();
    const m = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    try {
      const g = await this._send("argus/save_panic_output_profile", { ...m ? { entry_id: m } : {}, outputs: c, settings: u });
      this._panicOutputs = Array.isArray(g?.outputs) ? g.outputs : c, this._panicOutputSettings = g?.settings && typeof g.settings == "object" ? g.settings : u, this._ui = this._ui || {}, this._ui.panic_outputs = this._panicOutputs, this._ui.panic_output_settings = this._panicOutputSettings, this._renderSosOutputs?.();
    } catch (g) {
      this._panicOutputs = a, this._panicOutputSettings = l, this._renderSosOutputs?.(), alert(`No se pudieron guardar las acciones SOS: ${g?.message || g}`);
    }
  };
}
function H_(o) {
  xh(o);
}
function D_(o) {
  wh(o), Ch(o), Oh(o), Kh(o), Qh(o), Jh(o), a_(o), c_(o), m_(o), f_(o), x_(o), w_(o), k_(o), A_(o), z_(o), P_(o), R_(o), O_(o), B_(o);
}
function U_(o) {
  o || (o = customElements.get("argus-panel-v2018"));
  const n = o;
  !n || n.__argusTypedFrontend || (n.__argusTypedFrontend = !0, H_(n), Qf(n), Xf(n), eh(n), ah(n), sh(n), uh(n), fh(n), bh(n), D_(n), Kf(n));
}
export {
  U_ as applyArgusFrontend
};
