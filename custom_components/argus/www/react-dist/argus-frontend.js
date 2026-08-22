const Ro = [
  { code: "auto", flag: "🏠", label: "Home Assistant" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
  { code: "zh", flag: "🇨🇳", label: "中文" }
], si = {
  es: {
    accept: "Aceptar",
    access_control_title: "👥 Control de Acceso y Usuarios",
    access_desc: "Control global de seguridad, Pin de Armado y administradores.",
    access_pin_lbl: "Pin perfil Argus",
    access_title: "Control de Acceso y Usuarios",
    action_disarmed: "Desarmado",
    action_failed: "No se pudo realizar la acción",
    action_sos: "Alarma de Emergencia SOS",
    action_sos_stop: "SOS Detenido",
    active_profile: "Perfil Activo",
    active_until: "Vence",
    activity_log: "📋 Historial de Actividad",
    add_btn: "+ Añadir",
    add_user: "Añadir Usuario",
    admin_only: "Solo los administradores pueden gestionar usuarios y configuraciones.",
    alarm_instance: "Instancia de alarma",
    all_sensors_bypassed: "Todos los sensores configurados están omitidos.",
    analysis_title: "Análisis de Seguridad",
    arm_time: "Armado (s)",
    arm_time_label: "Tiempo de armado",
    armed_away: "Ausente",
    armed_home: "En Casa",
    armed_night: "Noche",
    armed_vacation: "Vacaciones",
    arming: "Armando",
    automations: "Automatizaciones",
    available: "Disponibles",
    backdrop_mode_blur: "Desenfoque",
    backdrop_mode_dim: "Atenuado",
    backdrop_mode_none: "Ninguno",
    background_lbl: "Fondo",
    backup_desc: "Exporta, restaura o reinicia la configuración de Argus.",
    backup_title: "Respaldo y Restauración",
    badge_pin_reset: "PIN Restablecido",
    badge_pin_reset_failed: "Fallo al Restablecer PIN",
    battery_low: "Batería baja",
    bg_collage: "Collage",
    bg_hub_default: "Fondo por defecto del Hub",
    bg_hub_selected_from_history: "Fondo del Hub seleccionado del historial",
    bg_hub_title: "Fondo del Hub",
    bg_image_opt: "Imagen",
    bg_none: "Ninguno",
    bg_panel_none: "Sin fondo en el panel",
    bg_panel_selected_from_history: "Fondo del panel seleccionado del historial",
    bg_panel_title: "Fondo del Panel",
    bg_photo: "Foto",
    bg_sound_opt: "Sonido de fondo",
    bg_video: "Video animado",
    bg_weather: "Clima en vivo",
    bridge_not_connected: "Puente no conectado",
    bridge_not_desc: "El puente HomeKit no está conectado actualmente.",
    bridge_paired: "Puente vinculado",
    bridge_paired_desc: "El puente HomeKit está vinculado y activo.",
    btn_away: "🔴 Ausente",
    btn_create_argus_profile: "+ Crear Perfil de Argus",
    btn_disarmed: "🔓 Desarmado",
    btn_home: "🏠 En Casa",
    btn_night: "🌙 Noche",
    btn_sos: "🚨 SOS / PÁNICO",
    btn_vacation: "✈️ Vacaciones",
    bypass_lbl: "🚫 Omitir",
    cancel: "Cancelar",
    cancel_btn: "Cancelar",
    cannot_arm: "No se puede armar el sistema",
    cannot_delete_last_admin: "No se puede eliminar al único administrador.",
    change_btn: "Cambiar",
    change_pin: "Cambiar Pin perfil Argus",
    change_profile_picture: "Cambiar foto en Personas de HA ↗",
    claim_btn: "Reclamar Administrador",
    claim_desc: "Tu instalación requiere un administrador para obtener acceso.",
    claim_title: "Actualización de Seguridad de Argus",
    clear: "Limpiar",
    clear_history: "Limpiar Historial",
    clear_history_confirm: "¿Eliminar todo el historial de actividad?",
    clear_log_btn: "🗑️ Limpiar historial",
    clock_12h: "12 Horas (AM/PM)",
    clock_24h: "24 Horas",
    clock_auto: "Automático (según idioma)",
    clock_format_desc: "Formato de hora en el reloj del encabezado",
    clock_format_label: "Formato de Reloj",
    close: "Cerrar",
    collapse: "Desplegar",
    confirm: "Confirmar",
    confirm_pin: "Confirmar PIN",
    connected: "CONECTADO",
    create_ha: "+ Crear en HA",
    current_pin: "PIN Actual",
    customize: "Personalizar",
    delete: "Eliminar",
    delete_btn_title: "Eliminar",
    delete_file_error: "No se pudo eliminar el archivo: {error}",
    delete_user_confirm: "¿Estás seguro de eliminar este usuario?",
    delete_user_tooltip: "Eliminar este usuario",
    deselect_all: "Deseleccionar todo",
    details_notif: "Detalles de Notificación",
    disarm_time: "Retraso de entrada (s)",
    disarm_time_label: "Tiempo de entrada",
    disarmed: "Desarmado",
    done: "Listo",
    edit_btn: "✏️ Editar Nombre",
    edit_dashboard: "Editar tablero",
    edit_dashboard_done: "✓ Listo",
    emergency_call_active: "Llamada de emergencia en curso...",
    emergency_help: "Configura el número local de emergencia (ej. 911 o 112). Se incluirá en alertas SOS.",
    emergency_number_label: "Número Local de Emergencia",
    sos_config_title: "CONFIGURACIÓN SOS",
    export_history_title: "Exportar Historial",
    log_action_audit_log_cleared: "Historial de actividad eliminado",
    entry_sensors: "Sensores de entrada",
    error_loading_uploaded_files: "Error al cargar archivos subidos.",
    exit_to_ha: "Salir a Home Assistant",
    exp_indefinite: "Indefinido",
    exp_temporary: "Temporal (Fecha/Hora)",
    expand: "Desplegar",
    expired: "Expirado",
    export_btn: "Exportar Configuración",
    export_error: "Error al exportar: {error}",
    external_panels: "Paneles de alarma externos",
    file_choice: "¿Usar como imagen estática (Aceptar) o video animado (Cancelar)?",
    file_delete_confirm: "¿Eliminar este archivo permanentemente?",
    file_read_error: "No se pudo leer el archivo.",
    files_count: "{count} archivos",
    files_count_short: "{count} arch.",
    first_run_blocked_desc: "Configuración bloqueada.",
    first_run_blocked_title: "Configuración Inicial Requerida",
    first_run_desc: "Configura tus credenciales iniciales de seguridad.",
    first_run_pin_expl: "Establece un Pin de Armado para controlar el sistema.",
    first_run_skip: "Omitir por ahora",
    first_run_start: "Comenzar Configuración",
    first_run_welcome: "¡Bienvenido a Argus!",
    forgot_pin: "¿Olvidaste tu PIN?",
    fullscreen_title: "Pantalla Completa",
    generic_error: "Error: {error}",
    github_action: "Dar Estrella en GitHub",
    github_desc: "Si te gusta el proyecto, apóyanos con una estrella en GitHub.",
    github_title: "Apoya a Argus",
    ha_account_linked: "Cuenta HA: {name}",
    ha_account_unavailable: "Sin cuenta HA vinculada",
    ha_admin_label: "Administrador de HA",
    ha_role_admin: "Administrador",
    ha_role_standard: "Usuario Estándar",
    ha_standard_user_label: "Usuario de HA",
    help: "Ayuda",
    hero_desc: "Sistema de seguridad inteligente para el hogar",
    hide: "Ocultar",
    hide_widget: "Ocultar widget",
    history_refresh: "🔄 Actualizar",
    history_title: "Historial de Actividad",
    history_unavailable: "No se pudo cargar el historial.",
    home_default: "Mi Hogar",
    home_fallback: "Mi Hogar",
    home_name_label: "Nombre del Hogar",
    home_name_lbl: "Nombre del Hogar",
    home_name_modal_desc: "Personaliza el nombre de tu residencia mostrado en el encabezado.",
    home_name_modal_title: "Editar Nombre del Hogar",
    home_name_placeholder: "Nombre de tu hogar...",
    homekit_bridge: "Puente HomeKit",
    homekit_house: "Casa de HomeKit",
    homekit_not_paired: "HomeKit no vinculado",
    homekit_title: "Integración HomeKit",
    import_btn: "Importar Configuración",
    import_error: "Error al importar: {error}",
    import_success: "Configuración restaurada. Recargando…",
    initialization_error_desc: "No se pudo conectar con el backend autorizado de Home Assistant.",
    initialization_error_title: "No se pudo iniciar Argus",
    instances: "Panel de Seguridad Argus",
    introduce_pin: "Introduce tu Pin perfil Argus",
    invalid_config: "Archivo de configuración no válido.",
    invalid_pin_msg: "PIN incorrecto",
    is_admin: "¿Es Administrador?",
    lang_select_title: "Seleccionar Idioma",
    lang_selector_lbl: "⚙️ Idioma / Language",
    language: "Idioma",
    lbl_aesthetic_custom: "Personalización y Ajustes",
    lbl_load_file: "Subir archivo",
    lbl_uploaded_files: "Archivos subidos",
    light_siren_color: "Color",
    light_siren_flash: "Destello suave si está disponible",
    link_ha_user: "Vincular usuario de HA",
    linked_rules: "Reglas vinculadas a Argus",
    loading: "Cargando…",
    lock_if_open: "Bloquear si abiertos",
    log_action_access_pin_updated: "Pin perfil Argus actualizado",
    log_action_analysis: "Análisis de Seguridad",
    log_action_automation: "Automatización Ejecutada",
    log_action_backup_created: "Respaldo Creado",
    log_action_backup_restored: "Configuración Restaurada",
    log_action_first_run_completed: "Configuración inicial completada",
    log_action_fullscreen_unlocked: "Pantalla completa desbloqueada",
    log_action_master_pin_rejected: "Pin de Armado incorrecto rechazado",
    log_action_mode_changed: "Modo Cambiado",
    log_action_profile_selected: "Perfil Seleccionado",
    log_action_rejected: "Acción Rechazada",
    log_action_save_ui: "Configuración visual guardada",
    log_action_schedule_applied: "Horario Aplicado",
    log_action_select_profile: "Perfil cambiado",
    log_action_sos: "Alarma de Emergencia SOS",
    log_action_sos_stopped: "SOS Detenido",
    log_action_state_restored: "Estado Restaurado",
    log_action_stop_sos: "Alarma SOS detenida",
    log_action_user_added: "Usuario Creado",
    log_action_user_deleted: "Usuario Eliminado",
    log_action_user_logged_in: "Inicio de Sesión",
    log_action_verify_access_pin: "Pin perfil Argus verificado",
    log_armed: "ARMADO",
    log_by: "por",
    log_detail_armed: "Sistema armado",
    log_detail_disarm: "Sistema desarmado",
    log_detail_pin_reset: "Pin de Armado restablecido por admin",
    log_detail_pin_reset_failed: "Intento de restablecer PIN rechazado",
    log_detail_triggered: "Activación automática",
    log_disarmed: "DESARMADO",
    log_mode: "Modo",
    log_no_events: "No hay eventos registrados en el historial.",
    log_sensor: "Sensor",
    log_triggered: "DISPARADA",
    login_btn: "Iniciar Sesión",
    manual_arm: "Armado manual",
    manual_disarm: "Desarmado manual",
    master_pin_lbl: "Pin de Armado",
    modal_add_user: "+ Añadir Usuario",
    modal_cancel: "Cancelar",
    modal_confirm: "Confirmar",
    modal_delete_confirm: "¿Eliminar este usuario?",
    modal_edit_name: "Editar Nombre",
    modal_name_label: "Nombre del Perfil",
    modal_pin_help: "Deja en blanco para no requerir PIN.",
    modal_pin_title: "Pin perfil Argus",
    modal_save: "Guardar",
    modal_user_added: "Usuario creado exitosamente.",
    mode_away: "Ausente",
    mode_home: "En Casa",
    mode_night: "Noche",
    mode_vacation: "Vacaciones",
    modes: "Modos / SOS",
    modes_sos: "Modos / SOS",
    mqtt_label: "MQTT",
    never_triggered: "Nunca activado",
    new_pin: "Nuevo PIN",
    no_alarm_instance: "No hay instancia de alarma disponible",
    no_auto_linked: "No hay automatizaciones vinculadas.",
    no_files_uploaded: "No hay archivos subidos.",
    no_files_uploaded_short: "Sin archivos",
    no_instances: "No hay instancias configuradas.",
    no_results: "Sin resultados",
    no_rules: "No hay reglas disponibles.",
    no_sensors_configured: "Sin sensores configurados",
    no_unlinked_ha_accounts: "No hay cuentas de HA sin vincular.",
    no_users: "No hay usuarios configurados.",
    none_selected: "Ninguno seleccionado",
    notif_desc: "Notificaciones móviles en eventos críticos.",
    notif_no_services: "No hay servicios de notificación móvil disponibles.",
    notification_armed: "{user} armó el sistema en modo {mode}.",
    notification_disarmed: "{user} desarmó el sistema.",
    notifications_title: "Notificaciones",
    open_sensors: "Sensores Abiertos",
    open_sensors_explain: "Los siguientes sensores están abiertos:\\\\n{names}\\\\n\\\\nCiérralos antes de armar o habilita Omitir.",
    panic_state_unknown: "No se pudo determinar el estado previo de la alarma.",
    panic_stop_error: "No se pudo detener la alarma: {error}",
    panic_stopped: "Alarma detenida; restaurado estado {state}",
    pending: "En espera",
    pin_active_no: "Sin PIN activo",
    pin_active_yes: "PIN activo",
    pin_deleted: "PIN eliminado",
    pin_desc: "Código de seguridad de 4 a 8 dígitos.",
    pin_disarm_error: "PIN incorrecto o error al desarmar",
    pin_incorrect: "PIN incorrecto",
    pin_management: "🔑 Gestión de Pines",
    pin_master_title: "Pin de Armado",
    pin_mismatch: "Los PIN no coinciden",
    pin_modal_desc: "Ingresa tu PIN de seguridad para continuar.",
    pin_placeholder: "••••",
    pin_remove_hint: "Deja en blanco para eliminar el Pin de Armado.",
    pin_reset_admin_only: "Solo el administrador puede restablecer el PIN.",
    pin_reset_confirm: "¿Restablecer el PIN?",
    pin_updated: "PIN actualizado exitosamente",
    profile_is_yours: "Tu Perfil",
    profile_needs_pin: "Este perfil requiere Pin perfil Argus.",
    profile_no_pin_access: "Acceso libre sin PIN.",
    remove_btn: "Eliminar",
    reset_btn: "Restablecer a Valores de Fábrica",
    reset_confirm: "¿Restablecer Argus a valores de fábrica? Se perderán todas las configuraciones.",
    reset_dashboard: "Restablecer diseño",
    reset_error: "Error al restablecer: {error}",
    reset_error_auth: "Autenticación requerida para restablecer.",
    reset_success: "Argus restablecido exitosamente.",
    reset_widget: "Restablecer widget",
    retry_action: "Reintentar",
    role_argus_admin: "Administrador de Argus",
    role_argus_admin_short: "Adm",
    role_argus_standard: "Usuario Estándar",
    role_argus_user: "Usuario Estándar",
    role_argus_user_short: "Std",
    rules_tip: "Consejo de automatización",
    save_btn: "Guardar",
    save_config: "💾 Guardar Modo",
    save_mode: "Guardar Modo",
    save_notif: "Guardar Notificaciones",
    save_user: "Guardar Usuario",
    saved: "✓ Guardado",
    search_placeholder: "Buscar dispositivo o entidad…",
    search_select: "Buscar y seleccionar…",
    searching_auto: "Buscando automatizaciones…",
    select_all: "Seleccionar todo",
    select_btn: "+ Seleccionar",
    select_entry_sensors: "+ Seleccionar sensores de entrada",
    select_profile_subtitle: "Selecciona tu perfil de usuario",
    select_profile_title: "Perfiles de Acceso",
    selected_lbl: "Seleccionados",
    selector_accept: "Aceptar",
    selector_clear: "Limpiar selección",
    selector_close: "Cerrar",
    selector_panic: "🚨 Salidas de Emergencia SOS",
    sensor_section: "Sensores de Intrusión",
    sensors_to_bypass: "Sensores para omitir",
    settings: "⚙️ Ajustes",
    setup_access_pin: "Pin perfil Argus al panel Argus (Opcional)",
    setup_admin_name: "Nombre de Administrador",
    setup_master_pin: "Pin de Armado para armar/desarmar (Opcional)",
    setup_required_action: "Configurar Argus en Integraciones",
    setup_required_desc: "Argus está instalado pero aún no se ha creado una instancia.",
    setup_required_title: "Configuración de Argus Requerida",
    siren_section: "Sirenas",
    size: "Tamaño",
    slide_disarm: "Desliza para desarmar",
    slide_sos: "Desliza para activar SOS",
    slide_sos_stop: "Desliza para detener SOS",
    sos_actions: "Dispositivos y Acciones SOS",
    sos_activated: "SOS activado",
    sos_call: "Llamar a Emergencias",
    sos_call_confirm: "¿Llamar al número local de emergencias ({number})?",
    sos_call_help: "Si este dispositivo no puede realizar llamadas, Argus enviará una notificación crítica.",
    sos_confirm_text: "Desliza para disparar la alarma inmediatamente.",
    sos_confirm_title: "🚨 ¿Activar Alarma de Emergencia?",
    sos_error: "No se pudo activar SOS: {error}",
    sos_no_outputs: "No hay dispositivos de emergencia seleccionados",
    sos_outputs_help: "Estos dispositivos se encenderán al dispararse el SOS.",
    sos_select_outputs: "Seleccionar luces, sirenas o escenas",
    sos_slide: "Desliza para activar SOS",
    sos_stop: "DETENER SOS",
    status_away: "Ausente",
    status_closed: "CERRADO",
    status_home: "En Casa",
    status_idle: "Inactivo",
    status_open: "ABIERTO",
    status_recording: "Grabando",
    support_title: "Estado y Soporte",
    switch_profile_btn: "👤 Cambiar de Perfil",
    sync_panel_help: "Sincroniza el estado con paneles de alarma externos.",
    sync_panel_section: "Paneles de Alarma Externos",
    system_armed: "SISTEMA ARMADO",
    system_disarmed: "SISTEMA DESARMADO",
    system_triggered: "¡ALARMA ACTIVADA!",
    temp_auto: "Temperatura automática",
    temp_displayed: "Entidad de temperatura en vivo",
    temp_notification_title: "Argus — Alerta de Temperatura",
    temp_thermostat: "Termostato",
    thermostat_alert_notif: "Alerta de termostato",
    times_section: "⏱️ Tiempos",
    triggered: "¡Alarma Disparada!",
    unavailable: "No disponible",
    undo_error: "No se pudo deshacer: {error}",
    undo_reset: "Deshacer Restablecimiento",
    undo_reset_btn: "Deshacer Restablecimiento",
    undo_success: "Restablecimiento deshecho.",
    unlinked_ha_accounts_title: "Cuentas de Home Assistant",
    unlock_kiosk: "Desbloquear Kiosco",
    update_pin: "Actualizar PIN",
    upload_error: "Error al subir el archivo.",
    url_placeholder: "URL del fondo…",
    use_for_hub: "Usar en el Hub",
    use_for_panel: "Usar en el Panel",
    use_ha_language: "Usar idioma de Home Assistant",
    user_default: "Usuario",
    user_exp_date: "Fecha y hora de expiración",
    user_exp_type: "Tipo de expiración",
    user_no_pin: "Sin Pin perfil Argus",
    user_pin: "Pin perfil Argus",
    user_pin_action: "Configurar PIN",
    user_required: "Se requieren nombre y PIN.",
    user_role_action: "Cambiar Rol",
    user_role_label: "Rol del Usuario",
    username: "Nombre de Usuario",
    users_title: "👥 Control de Acceso y Usuarios",
    vacation: "Vacaciones",
    wait_if_open: "Esperar armado en espera",
    waiting_sensors: "ESPERANDO SENSORES",
    waiting_sensors_count: "ESPERANDO {count} SENSOR(ES)",
    weather_auto: "Detección automática de clima",
    weather_source: "Entidad de clima",
    welcome_greeting: "¡Hola de nuevo!",
    welcome_profile: "Bienvenido, {name}",
    wrong_pin: "PIN incorrecto"
  },
  en: {
    accept: "Accept",
    access_control_title: "👥 Users & Access Control",
    access_desc: "Global security management, master PIN and administrators.",
    access_pin_lbl: "Argus Profile PIN",
    access_title: "Users & Access Control",
    action_disarmed: "Disarmed",
    action_failed: "Action could not be executed",
    action_sos: "Emergency SOS Alarm",
    action_sos_stop: "SOS Stopped",
    active_profile: "Active Profile",
    active_until: "Expires",
    activity_log: "📋 Activity Log",
    add_btn: "+ Add",
    add_user: "Add User",
    admin_only: "Only administrators can manage users and settings.",
    alarm_instance: "Alarm Instance",
    all_sensors_bypassed: "All configured sensors are bypassed.",
    analysis_title: "Security Analysis",
    arm_time: "Arming delay (s)",
    arm_time_label: "Arming Delay",
    armed_away: "Away",
    armed_home: "Home",
    armed_night: "Night",
    armed_vacation: "Vacation",
    arming: "Arming",
    automations: "Automations",
    available: "Available",
    backdrop_mode_blur: "Blur",
    backdrop_mode_dim: "Dimmed",
    backdrop_mode_none: "None",
    background_lbl: "Background",
    backup_desc: "Export, restore, or reset Argus configuration.",
    backup_title: "Backup & Restore",
    badge_pin_reset: "PIN Reset",
    badge_pin_reset_failed: "PIN Reset Failed",
    battery_low: "Low Battery",
    bg_collage: "Collage",
    bg_hub_default: "Default Hub Background",
    bg_hub_selected_from_history: "Hub background selected from history",
    bg_hub_title: "Hub Background",
    bg_image_opt: "Static Image",
    bg_none: "None",
    bg_panel_none: "No panel background",
    bg_panel_selected_from_history: "Panel background selected from history",
    bg_panel_title: "Panel Background",
    bg_photo: "Photo",
    bg_sound_opt: "Background Sound",
    bg_video: "Animated Video",
    bg_weather: "Live Weather",
    bridge_not_connected: "Bridge Not Connected",
    bridge_not_desc: "The HomeKit bridge is currently disconnected.",
    bridge_paired: "Bridge Paired",
    bridge_paired_desc: "The HomeKit bridge is paired and active.",
    btn_away: "🔴 Away",
    btn_create_argus_profile: "+ Create Argus Profile",
    btn_disarmed: "🔓 Disarmed",
    btn_home: "🏠 Home",
    btn_night: "🌙 Night",
    btn_sos: "🚨 SOS / PANIC",
    btn_vacation: "✈️ Vacation",
    bypass_lbl: "🚫 Bypass",
    cancel: "Cancel",
    cancel_btn: "Cancel",
    cannot_arm: "Cannot arm system",
    cannot_delete_last_admin: "Cannot delete the only administrator.",
    change_btn: "Change",
    change_pin: "Change Access PIN",
    change_profile_picture: "Change photo in HA Persons ↗",
    claim_btn: "Claim Administrator",
    claim_desc: "Your installation requires an administrator to gain access.",
    claim_title: "Argus Security Update",
    clear: "Clear",
    clear_history: "Clear History",
    clear_history_confirm: "Delete all activity history?",
    clear_log_btn: "🗑️ Clear Log",
    clock_12h: "12-Hour (AM/PM)",
    clock_24h: "24-Hour",
    clock_auto: "Automatic (by language)",
    clock_format_desc: "Clock format in top header",
    clock_format_label: "Clock Format",
    close: "Close",
    collapse: "Collapse",
    confirm: "Confirm",
    confirm_pin: "Confirm PIN",
    connected: "CONNECTED",
    create_ha: "+ Create in HA",
    current_pin: "Current PIN",
    customize: "Customize",
    delete: "Delete",
    delete_btn_title: "Delete",
    delete_file_error: "Could not delete file: {error}",
    delete_user_confirm: "Are you sure you want to delete this user?",
    delete_user_tooltip: "Delete this user",
    deselect_all: "Deselect All",
    details_notif: "Notification Details",
    disarm_time: "Entry delay (s)",
    disarm_time_label: "Entry Delay",
    disarmed: "Disarmed",
    done: "Done",
    edit_btn: "✏️ Edit Name",
    edit_dashboard: "Edit Dashboard",
    edit_dashboard_done: "✓ Done",
    emergency_call_active: "Emergency call in progress...",
    emergency_help: "Set local emergency service number (e.g. 911 or 112). Included in SOS alerts.",
    emergency_number_label: "Local Emergency Number",
    sos_config_title: "SOS CONFIGURATION",
    export_history_title: "Export History",
    log_action_audit_log_cleared: "Activity history cleared",
    entry_sensors: "Entry sensors",
    error_loading_uploaded_files: "Error loading uploaded files.",
    exit_to_ha: "Exit to Home Assistant",
    exp_indefinite: "Indefinite",
    exp_temporary: "Temporary (Date/Time)",
    expand: "Expand",
    expired: "Expired",
    export_btn: "Export Configuration",
    export_error: "Export error: {error}",
    external_panels: "External Alarm Panels",
    file_choice: "Use as static image (OK) or animated video (Cancel)?",
    file_delete_confirm: "Delete this file permanently?",
    file_read_error: "Could not read file.",
    files_count: "{count} files",
    files_count_short: "{count} files",
    first_run_blocked_desc: "Setup is locked.",
    first_run_blocked_title: "Initial Setup Required",
    first_run_desc: "Configure your initial security credentials.",
    first_run_pin_expl: "Set a master PIN to control the system.",
    first_run_skip: "Skip for now",
    first_run_start: "Start Setup",
    first_run_welcome: "Welcome to Argus!",
    forgot_pin: "Forgot your PIN?",
    fullscreen_title: "Full Screen",
    generic_error: "Error: {error}",
    github_action: "Star on GitHub",
    github_desc: "If you enjoy this project, support development with a star on GitHub.",
    github_title: "Support Argus",
    ha_account_linked: "HA Account: {name}",
    ha_account_unavailable: "No HA account linked",
    ha_admin_label: "HA Administrator",
    ha_role_admin: "Administrator",
    ha_role_standard: "Standard User",
    ha_standard_user_label: "HA Standard User",
    help: "Help",
    hero_desc: "Intelligent home security system",
    hide: "Hide",
    hide_widget: "Hide widget",
    history_refresh: "🔄 Refresh",
    history_title: "Activity History",
    history_unavailable: "Activity history unavailable.",
    home_default: "My Home",
    home_fallback: "My Home",
    home_name_label: "Home Name",
    home_name_lbl: "Home Name",
    home_name_modal_desc: "Customize your residence name shown in the top header.",
    home_name_modal_title: "Edit Home Name",
    home_name_placeholder: "Your home name...",
    homekit_bridge: "HomeKit Bridge",
    homekit_house: "HomeKit Home",
    homekit_not_paired: "HomeKit Not Paired",
    homekit_title: "HomeKit Integration",
    import_btn: "Import Configuration",
    import_error: "Import error: {error}",
    import_success: "Configuration restored. Reloading…",
    initialization_error_desc: "Could not connect to authorized Home Assistant backend.",
    initialization_error_title: "Could not start Argus",
    instances: "Argus Security Panel",
    introduce_pin: "Enter your security PIN",
    invalid_config: "Invalid configuration file.",
    invalid_pin_msg: "Incorrect PIN",
    is_admin: "Is Administrator?",
    lang_select_title: "Select Language",
    lang_selector_lbl: "⚙️ Language",
    language: "Language",
    lbl_aesthetic_custom: "Personalization & Settings",
    lbl_load_file: "Upload file",
    lbl_uploaded_files: "Uploaded files",
    light_siren_color: "Color",
    light_siren_flash: "Gentle flash if available",
    link_ha_user: "Link HA User",
    linked_rules: "Rules linked to Argus",
    loading: "Loading…",
    lock_if_open: "Block if open",
    log_action_access_pin_updated: "Access PIN updated",
    log_action_analysis: "Security Analysis",
    log_action_automation: "Automation Executed",
    log_action_backup_created: "Backup Created",
    log_action_backup_restored: "Configuration Restored",
    log_action_first_run_completed: "Initial setup completed",
    log_action_fullscreen_unlocked: "Full screen unlocked",
    log_action_master_pin_rejected: "Wrong master PIN rejected",
    log_action_mode_changed: "Mode Changed",
    log_action_profile_selected: "Profile Selected",
    log_action_rejected: "Action Rejected",
    log_action_save_ui: "Visual settings saved",
    log_action_schedule_applied: "Schedule Applied",
    log_action_select_profile: "Profile switched",
    log_action_sos: "Emergency SOS Alarm",
    log_action_sos_stopped: "SOS Stopped",
    log_action_state_restored: "State Restored",
    log_action_stop_sos: "SOS alarm stopped",
    log_action_user_added: "User Created",
    log_action_user_deleted: "User Deleted",
    log_action_user_logged_in: "User Logged In",
    log_action_verify_access_pin: "Access PIN verified",
    log_armed: "ARMED",
    log_by: "by",
    log_detail_armed: "System armed",
    log_detail_disarm: "System disarmed",
    log_detail_pin_reset: "Master PIN reset by HA admin",
    log_detail_pin_reset_failed: "PIN reset attempt rejected",
    log_detail_triggered: "Automatic activation",
    log_disarmed: "DISARMED",
    log_mode: "Mode",
    log_no_events: "No events recorded in history.",
    log_sensor: "Sensor",
    log_triggered: "TRIGGERED",
    login_btn: "Log In",
    manual_arm: "Manual arming",
    manual_disarm: "Manual disarm",
    master_pin_lbl: "Arming PIN",
    modal_add_user: "+ Add User",
    modal_cancel: "Cancel",
    modal_confirm: "Confirm",
    modal_delete_confirm: "Delete this user?",
    modal_edit_name: "Edit Name",
    modal_name_label: "Profile Name",
    modal_pin_help: "Leave blank to not require a PIN.",
    modal_pin_title: "Access PIN",
    modal_save: "Save",
    modal_user_added: "User created successfully.",
    mode_away: "Away",
    mode_home: "Home",
    mode_night: "Night",
    mode_vacation: "Vacation",
    modes: "Modes / SOS",
    modes_sos: "Modes / SOS",
    mqtt_label: "MQTT",
    never_triggered: "Never triggered",
    new_pin: "New PIN",
    no_alarm_instance: "No alarm instance available",
    no_auto_linked: "No automations linked.",
    no_files_uploaded: "No files uploaded.",
    no_files_uploaded_short: "No files",
    no_instances: "No alarm instances configured.",
    no_results: "No results",
    no_rules: "No rules available.",
    no_sensors_configured: "No sensors configured",
    no_unlinked_ha_accounts: "No unlinked HA accounts.",
    no_users: "No users configured.",
    none_selected: "None selected",
    notif_desc: "Mobile push notifications for critical events.",
    notif_no_services: "No mobile notification services available.",
    notification_armed: "{user} armed the system in {mode} mode.",
    notification_disarmed: "{user} disarmed the system.",
    notifications_title: "Notifications",
    open_sensors: "Open Sensors",
    open_sensors_explain: "The following sensors are open:\\\\n{names}\\\\n\\\\nClose them before arming or enable Bypass.",
    panic_state_unknown: "Could not determine previous alarm state.",
    panic_stop_error: "Could not stop alarm: {error}",
    panic_stopped: "Alarm stopped; restored state {state}",
    pending: "Pending",
    pin_active_no: "No active PIN",
    pin_active_yes: "Active PIN",
    pin_deleted: "PIN deleted",
    pin_desc: "4 to 8 digit security code.",
    pin_disarm_error: "Wrong PIN or disarm error",
    pin_incorrect: "Wrong PIN",
    pin_management: "🔑 PIN Management",
    pin_master_title: "Master PIN",
    pin_mismatch: "PINs do not match",
    pin_modal_desc: "Enter your security PIN to continue.",
    pin_placeholder: "••••",
    pin_remove_hint: "Leave blank to remove the master PIN.",
    pin_reset_admin_only: "Only administrators can reset the PIN.",
    pin_reset_confirm: "Reset PIN?",
    pin_updated: "PIN updated successfully",
    profile_is_yours: "Your Profile",
    profile_needs_pin: "This profile requires an access PIN.",
    profile_no_pin_access: "Free access without PIN.",
    remove_btn: "Remove",
    reset_btn: "Factory Reset",
    reset_confirm: "Reset Argus to factory defaults? All configurations and PINs will be lost.",
    reset_dashboard: "Reset Layout",
    reset_error: "Reset error: {error}",
    reset_error_auth: "Authentication required to reset.",
    reset_success: "Argus successfully reset.",
    reset_widget: "Reset widget",
    retry_action: "Retry",
    role_argus_admin: "Argus Administrator",
    role_argus_admin_short: "Admin",
    role_argus_standard: "Standard User",
    role_argus_user: "Standard User",
    role_argus_user_short: "User",
    rules_tip: "Automation tip",
    save_btn: "Save",
    save_config: "💾 Save Mode",
    save_mode: "Save Mode",
    save_notif: "Save Notifications",
    save_user: "Save User",
    saved: "✓ Saved",
    search_placeholder: "Search device or entity…",
    search_select: "Search and select…",
    searching_auto: "Searching automations…",
    select_all: "Select All",
    select_btn: "+ Select",
    select_entry_sensors: "+ Select Entry Sensors",
    select_profile_subtitle: "Select your user profile",
    select_profile_title: "Access Profiles",
    selected_lbl: "Selected",
    selector_accept: "Accept",
    selector_clear: "Clear Selection",
    selector_close: "Close",
    selector_panic: "🚨 SOS Emergency Outputs",
    sensor_section: "Intrusion Sensors",
    sensors_to_bypass: "Sensors to bypass",
    settings: "⚙️ Settings",
    setup_access_pin: "Argus panel access PIN (Optional)",
    setup_admin_name: "Administrator Name",
    setup_master_pin: "Master PIN for arm/disarm (Optional)",
    setup_required_action: "Configure Argus in Integrations",
    setup_required_desc: "Argus is installed but no instance has been created yet.",
    setup_required_title: "Argus Setup Required",
    siren_section: "Sirens",
    size: "Size",
    slide_disarm: "Slide to disarm",
    slide_sos: "Slide to trigger SOS",
    slide_sos_stop: "Slide to stop SOS",
    sos_actions: "SOS Devices and Actions",
    sos_activated: "SOS Activated",
    sos_call: "Call Emergency Services",
    sos_call_confirm: "Call local emergency service ({number})?",
    sos_call_help: "If this device cannot place phone calls, Argus will send a critical alert notification.",
    sos_confirm_text: "Slide to trigger the emergency alarm immediately.",
    sos_confirm_title: "🚨 Trigger Emergency Alarm?",
    sos_error: "Could not trigger SOS: {error}",
    sos_no_outputs: "No emergency output devices selected",
    sos_outputs_help: "These devices will always turn on when SOS triggers.",
    sos_select_outputs: "Select lights, sirens, or scenes",
    sos_slide: "Slide to trigger SOS",
    sos_stop: "STOP SOS",
    status_away: "Away",
    status_closed: "CLOSED",
    status_home: "Home",
    status_idle: "Idle",
    status_open: "OPEN",
    status_recording: "Recording",
    support_title: "Status & Support",
    switch_profile_btn: "👤 Switch Profile",
    sync_panel_help: "Sync state with external alarm panels.",
    sync_panel_section: "External Alarm Panels",
    system_armed: "SYSTEM ARMED",
    system_disarmed: "SYSTEM DISARMED",
    system_triggered: "ALARM TRIGGERED!",
    temp_auto: "Automatic temperature",
    temp_displayed: "Live temperature entity",
    temp_notification_title: "Argus — Temperature Alert",
    temp_thermostat: "Thermostat",
    thermostat_alert_notif: "Thermostat alert",
    times_section: "⏱️ Timers",
    triggered: "Alarm Triggered!",
    unavailable: "Unavailable",
    undo_error: "Could not undo reset: {error}",
    undo_reset: "Undo Reset",
    undo_reset_btn: "Undo Reset",
    undo_success: "Reset undone successfully.",
    unlinked_ha_accounts_title: "Home Assistant Accounts",
    unlock_kiosk: "Unlock Kiosk",
    update_pin: "Update PIN",
    upload_error: "Upload error.",
    url_placeholder: "Background URL…",
    use_for_hub: "Use for Hub",
    use_for_panel: "Use for Panel",
    use_ha_language: "Use Home Assistant language",
    user_default: "User",
    user_exp_date: "Expiration date and time",
    user_exp_type: "Expiration type",
    user_no_pin: "No access PIN",
    user_pin: "Access PIN",
    user_pin_action: "Set PIN",
    user_required: "Name and PIN are required.",
    user_role_action: "Change Role",
    user_role_label: "User Role",
    username: "Username",
    users_title: "👥 Users & Access Control",
    vacation: "Vacation",
    wait_if_open: "Wait for sensors to close",
    waiting_sensors: "WAITING FOR SENSORS",
    waiting_sensors_count: "WAITING FOR {count} SENSOR(S)",
    weather_auto: "Automatic weather detection",
    weather_source: "Weather entity",
    welcome_greeting: "Welcome back!",
    welcome_profile: "Welcome, {name}",
    wrong_pin: "Wrong PIN"
  },
  pt: {
    accept: "Aceitar",
    access_control_title: "👥 Usuários e Controle de Acesso",
    access_desc: "Gerenciamento de segurança global, PIN mestre e administradores.",
    access_pin_lbl: "Pin perfil Argus",
    access_title: "Usuários e Controle de Acesso",
    action_disarmed: "Desarmado",
    action_failed: "A ação não pôde ser executada",
    action_sos: "Alarme SOS de Emergência",
    action_sos_stop: "SOS parado",
    active_profile: "Perfil ativo",
    active_until: "Expira",
    activity_log: "📋 Registro de atividades",
    add_btn: "+ Adicionar",
    add_user: "Adicionar usuário",
    admin_only: "Somente administradores podem gerenciar usuários e configurações.",
    alarm_instance: "Instância de alarme",
    all_sensors_bypassed: "Todos os sensores configurados são ignorados.",
    analysis_title: "Análise de Segurança",
    arm_time: "Atraso(s) de armar",
    arm_time_label: "Atraso de Armamento",
    armed_away: "Ausente",
    armed_home: "Lar",
    armed_night: "Noite",
    armed_vacation: "Férias",
    arming: "Armando",
    automations: "Automações",
    available: "Disponível",
    backdrop_mode_blur: "Borrão",
    backdrop_mode_dim: "Esmaecido",
    backdrop_mode_none: "Nenhum",
    background_lbl: "Fundo",
    backup_desc: "Exporte, restaure ou redefina a configuração do Argus.",
    backup_title: "Backup & Restauração",
    badge_pin_reset: "Redefinir PIN",
    badge_pin_reset_failed: "Falha na redefinição do PIN",
    battery_low: "Bateria fraca",
    bg_collage: "Colagem",
    bg_hub_default: "Plano de fundo padrão do hub",
    bg_hub_selected_from_history: "Plano de fundo do hub selecionado no histórico",
    bg_hub_title: "Plano de fundo do hub",
    bg_image_opt: "Imagem estática",
    bg_none: "Nenhum",
    bg_panel_none: "Sem fundo do painel",
    bg_panel_selected_from_history: "Plano de fundo do painel selecionado no histórico",
    bg_panel_title: "Fundo do painel",
    bg_photo: "Foto",
    bg_sound_opt: "Som de fundo",
    bg_video: "Vídeo animado",
    bg_weather: "Clima ao vivo",
    bridge_not_connected: "Ponte não conectada",
    bridge_not_desc: "A ponte HomeKit está desconectada no momento.",
    bridge_paired: "Ponte emparelhada",
    bridge_paired_desc: "A ponte HomeKit está emparelhada e ativa.",
    btn_away: "🔴 Ausente",
    btn_create_argus_profile: "+ Criar perfil Argus",
    btn_disarmed: "🔓 Desarmado",
    btn_home: "🏠 Em Casa",
    btn_night: "🌙 Noite",
    btn_sos: "🚨 SOS / PÂNICO",
    btn_vacation: "✈️ Férias",
    bypass_lbl: "🚫 Ignorar",
    cancel: "Cancelar",
    cancel_btn: "Cancelar",
    cannot_arm: "Não é possível armar o sistema",
    cannot_delete_last_admin: "Não é possível excluir o único administrador.",
    change_btn: "Alterar",
    change_pin: "Alterar PIN de acesso",
    change_profile_picture: "Alterar foto em HA Pessoas ↗",
    claim_btn: "Administrador de reivindicações",
    claim_desc: "Sua instalação requer um administrador para obter acesso.",
    claim_title: "Atualização de segurança Argus",
    clear: "Claro",
    clear_history: "Limpar histórico",
    clear_history_confirm: "Excluir todo o histórico de atividades?",
    clear_log_btn: "🗑️ Limpar registro",
    clock_12h: "12 horas (AM/PM)",
    clock_24h: "24 horas",
    clock_auto: "Automático (por idioma)",
    clock_format_desc: "Formato do relógio no cabeçalho superior",
    clock_format_label: "Formato do relógio",
    close: "Fechar",
    collapse: "Expandir",
    confirm: "Confirmar",
    confirm_pin: "Confirmar PIN",
    connected: "CONECTADO",
    create_ha: "+ Criar em HA",
    current_pin: "PIN atual",
    customize: "Personalizar",
    delete: "Excluir",
    delete_btn_title: "Excluir",
    delete_file_error: "Não foi possível excluir o arquivo: {error}",
    delete_user_confirm: "Tem certeza de que deseja excluir este usuário?",
    delete_user_tooltip: "Excluir este usuário",
    deselect_all: "Desmarcar tudo",
    details_notif: "Detalhes da notificação",
    disarm_time: "Atraso(s) de entrada",
    disarm_time_label: "Atraso de entrada",
    disarmed: "Desarmado",
    done: "Concluído",
    edit_btn: "✏️ Editar nome",
    edit_dashboard: "Editar painel",
    edit_dashboard_done: "✓ Concluído",
    emergency_call_active: "Chamada de emergência em andamento...",
    emergency_help: "Defina o número do serviço de emergência local (por exemplo, 911 ou 112). Incluído em alertas SOS.",
    emergency_number_label: "🚨 Número de emergência local",
    entry_sensors: "Sensores de entrada",
    error_loading_uploaded_files: "Erro ao carregar os arquivos enviados.",
    exit_to_ha: "Sair para o Home Assistant",
    exp_indefinite: "Indeterminado",
    exp_temporary: "Temporário (data/hora)",
    expand: "Expandir",
    expired: "Expirado",
    export_btn: "Exportar Configuração",
    export_error: "Erro de exportação: {error}",
    external_panels: "Painéis de alarme externos",
    file_choice: "Usar como imagem estática (OK) ou vídeo animado (Cancelar)?",
    file_delete_confirm: "Excluir este arquivo permanentemente?",
    file_read_error: "Não foi possível ler o arquivo.",
    files_count: "{contar} arquivos",
    files_count_short: "{contar} arquivos",
    first_run_blocked_desc: "A configuração está bloqueada.",
    first_run_blocked_title: "Configuração inicial necessária",
    first_run_desc: "Configure suas credenciais de segurança iniciais.",
    first_run_pin_expl: "Defina um PIN mestre para controlar o sistema.",
    first_run_skip: "Pular por enquanto",
    first_run_start: "Iniciar configuração",
    first_run_welcome: "Bem-vindo ao Argos!",
    forgot_pin: "Esqueceu seu PIN?",
    fullscreen_title: "Tela cheia",
    generic_error: "Erro: {erro}",
    github_action: "Estrela no GitHub",
    github_desc: "Se você gostou deste projeto, apoie o desenvolvimento com uma estrela no GitHub.",
    github_title: "Apoie o Argus",
    ha_account: "Conta HA",
    ha_account_linked: "Conta HA: {nome}",
    ha_account_unavailable: "Nenhuma conta HA vinculada",
    ha_admin_label: "Administrador de alta disponibilidade",
    ha_role_admin: "Administrador",
    ha_role_standard: "Usuário padrão",
    ha_standard_user_label: "Usuário padrão HA",
    help: "Ajuda",
    hero_desc: "Sistema de segurança residencial inteligente",
    hide: "Ocultar",
    hide_widget: "Ocultar widget",
    history_refresh: "🔄 Atualizar",
    history_title: "Histórico de atividades",
    history_unavailable: "Histórico de atividades indisponível.",
    home_default: "Minha casa",
    home_fallback: "Minha casa",
    home_name_label: "Nome da casa",
    home_name_lbl: "Nome da casa",
    home_name_modal_desc: "Personalize o nome da sua residência mostrado no cabeçalho superior.",
    home_name_modal_title: "Editar nome da casa",
    home_name_placeholder: "O nome da sua casa...",
    homekit_bridge: "Ponte HomeKit",
    homekit_house: "Página inicial do HomeKit",
    homekit_not_paired: "HomeKit não emparelhado",
    homekit_title: "Integração HomeKit",
    import_btn: "Importar Configuração",
    import_error: "Erro de importação: {error}",
    import_success: "Configuração restaurada. Recarregando…",
    initialization_error_desc: "Não foi possível conectar-se ao back-end autorizado do Home Assistant.",
    initialization_error_title: "Não foi possível iniciar o Argus",
    instances: "Painel de Segurança Argus",
    introduce_pin: "Digite seu PIN de segurança",
    invalid_config: "Arquivo de configuração inválido.",
    invalid_pin_msg: "PIN incorreto",
    is_admin: "É Administrador?",
    lang_select_title: "Selecione o idioma",
    lang_selector_lbl: "⚙️ Idioma",
    language: "Linguagem",
    lbl_aesthetic_custom: "Personalização e Ajustes",
    lbl_load_file: "Carregar arquivo",
    lbl_uploaded_files: "Arquivos enviados",
    light_siren_color: "Cor",
    light_siren_flash: "Flash suave, se disponível",
    link_ha_user: "Vincular usuário HA",
    linked_rules: "Regras vinculadas ao Argus",
    loading: "Carregando…",
    lock_if_open: "Bloquear se aberto",
    log_action_access_pin_updated: "PIN de acesso atualizado",
    log_action_analysis: "Análise de Segurança",
    log_action_automation: "Automação executada",
    log_action_backup_created: "Backup criado",
    log_action_backup_restored: "Configuração restaurada",
    log_action_first_run_completed: "Configuração inicial concluída",
    log_action_fullscreen_unlocked: "Tela cheia desbloqueada",
    log_action_master_pin_rejected: "PIN mestre errado rejeitado",
    log_action_mode_changed: "Modo alterado",
    log_action_profile_selected: "Perfil selecionado",
    log_action_rejected: "Ação rejeitada",
    log_action_save_ui: "Configurações visuais salvas",
    log_action_schedule_applied: "Cronograma aplicado",
    log_action_select_profile: "Perfil trocado",
    log_action_sos: "Alarme SOS de Emergência",
    log_action_sos_stopped: "SOS parado",
    log_action_state_restored: "Estado restaurado",
    log_action_stop_sos: "Alarme SOS parado",
    log_action_user_added: "Usuário criado",
    log_action_user_deleted: "Usuário excluído",
    log_action_user_logged_in: "Usuário logado",
    log_action_verify_access_pin: "PIN de acesso verificado",
    log_armed: "ARMADO",
    log_by: "por",
    log_detail_armed: "Sistema armado",
    log_detail_disarm: "Sistema desarmado",
    log_detail_pin_reset: "PIN mestre redefinido pelo administrador HA",
    log_detail_pin_reset_failed: "Tentativa de redefinição de PIN rejeitada",
    log_detail_triggered: "Ativação automática",
    log_disarmed: "DESARMADO",
    log_mode: "Modo",
    log_no_events: "Nenhum evento registrado na história.",
    log_sensor: "Sensor",
    log_triggered: "PROVOCADO",
    login_btn: "Conecte-se",
    manual_arm: "Armar manualmente",
    manual_disarm: "Desarme manual",
    master_pin_lbl: "Pin de Arme",
    modal_add_user: "+ Adicionar usuário",
    modal_cancel: "Cancelar",
    modal_confirm: "Confirmar",
    modal_delete_confirm: "Excluir este usuário?",
    modal_edit_name: "Editar nome",
    modal_name_label: "Nome do perfil",
    modal_pin_help: "Deixe em branco para não exigir um PIN.",
    modal_pin_title: "PIN de acesso",
    modal_save: "Salvar",
    modal_user_added: "Usuário criado com sucesso.",
    mode_away: "Ausente",
    mode_home: "Em Casa",
    mode_night: "Noite",
    mode_vacation: "Férias",
    modes: "Modos / SOS",
    modes_sos: "Modos / SOS",
    mqtt_label: "MQTT",
    never_triggered: "Nunca acionado",
    new_pin: "Novo PIN",
    no_alarm_instance: "Nenhuma instância de alarme disponível",
    no_auto_linked: "Nenhuma automação vinculada.",
    no_files_uploaded: "Nenhum arquivo enviado.",
    no_files_uploaded_short: "Nenhum arquivo",
    no_instances: "Nenhuma instância de alarme configurada.",
    no_results: "Nenhum resultado",
    no_rules: "Nenhuma regra disponível.",
    no_sensors_configured: "Nenhum sensor configurado",
    no_unlinked_ha_accounts: "Nenhuma conta de HA desvinculada.",
    no_users: "Nenhum usuário registrado",
    none_selected: "Nenhum selecionado",
    notif_desc: "Notificações push móveis para eventos críticos.",
    notif_no_services: "Nenhum serviço de notificação móvel disponível.",
    notification_armed: "{user} armou o sistema no modo {mode}.",
    notification_disarmed: "{user} desarmou o sistema.",
    notifications_title: "Notificações",
    open_sensors: "Sensores abertos",
    open_sensors_explain: "Os seguintes sensores estão abertos:\\\\n{nomes}\\\\n\\\\nFeche-os antes de armar ou ativar o Bypass.",
    panic_state_unknown: "Não foi possível determinar o estado de alarme anterior.",
    panic_stop_error: "Não foi possível parar o alarme: {error}",
    panic_stopped: "Alarme parado; estado restaurado {estado}",
    pending: "Pendente",
    pin_active_no: "Nenhum PIN ativo",
    pin_active_yes: "PIN Ativo",
    pin_deleted: "PIN excluído",
    pin_desc: "Código de segurança de 4 a 8 dígitos.",
    pin_disarm_error: "PIN errado ou erro de desarmamento",
    pin_incorrect: "PIN errado",
    pin_management: "🔑 Gerenciamento de PINs",
    pin_master_title: "PIN Mestre",
    pin_mismatch: "Os PINs não correspondem",
    pin_modal_desc: "Digite seu PIN de segurança para continuar.",
    pin_placeholder: "••••",
    pin_remove_hint: "Deixe em branco para remover o PIN mestre.",
    pin_reset_admin_only: "Somente administradores podem redefinir o PIN.",
    pin_reset_confirm: "Redefinir PIN?",
    pin_updated: "PIN atualizado com sucesso",
    profile_is_yours: "Seu Perfil",
    profile_needs_pin: "Este perfil requer um PIN de acesso.",
    profile_no_pin_access: "Acesso gratuito sem PIN.",
    remove_btn: "Remover",
    reset_btn: "Redefinição de Fábrica",
    reset_confirm: "Redefinir o Argus para os padrões de fábrica? Todas as configurações e PINs serão perdidos.",
    reset_dashboard: "Redefinir layout",
    reset_error: "Erro de redefinição: {error}",
    reset_error_auth: "Autenticação necessária para redefinir.",
    reset_success: "Argus redefinido com sucesso.",
    reset_widget: "Redefinir widget",
    retry_action: "Tentar novamente",
    role_argus_admin: "Administrador Argus",
    role_argus_admin_short: "Administrador",
    role_argus_standard: "Usuário padrão",
    role_argus_user: "Usuário padrão",
    role_argus_user_short: "Usuário",
    rules_tip: "Dica de automação",
    save_btn: "Salvar",
    save_config: "💾 Salvar Modo",
    save_mode: "Modo Salvar",
    save_notif: "Salvar notificações",
    save_user: "Salvar usuário",
    saved: "✓ Salvo",
    search_placeholder: "Pesquisar dispositivo ou entidade…",
    search_select: "Pesquise e selecione…",
    searching_auto: "Procurando automações…",
    select_all: "Selecionar tudo",
    select_btn: "+ Selecionar",
    select_entry_sensors: "+ Selecionar sensores de entrada",
    select_profile_subtitle: "Selecione seu perfil de usuário",
    select_profile_title: "Perfis de acesso",
    selected_lbl: "Selecionado",
    selector_accept: "Aceitar",
    selector_clear: "Limpar seleção",
    selector_close: "Fechar",
    selector_panic: "🚨 Saídas de Emergência SOS",
    sensor_section: "Sensores de Intrusão",
    sensors_to_bypass: "Sensores para ignorar",
    settings: "⚙️ Configurações",
    setup_access_pin: "PIN de acesso ao painel Argus (opcional)",
    setup_admin_name: "Nome do administrador",
    setup_master_pin: "PIN mestre para armar/desarmar (opcional)",
    setup_required_action: "Configurar Argus em integrações",
    setup_required_desc: "O Argus está instalado, mas nenhuma instância foi criada ainda.",
    setup_required_title: "Configuração Argus necessária",
    siren_section: "Sirenes",
    size: "Tamanho",
    slide_disarm: "Deslize para desarmar",
    slide_sos: "Deslize para acionar SOS",
    slide_sos_stop: "Deslize para parar SOS",
    sos_actions: "🚨 Ações SOS",
    sos_activated: "SOS ativado",
    sos_call: "Ligue para os serviços de emergência",
    sos_call_confirm: "Ligar para o serviço de emergência local ({número})?",
    sos_call_help: "Se este dispositivo não puder fazer chamadas, o Argus enviará uma notificação de alerta crítico.",
    sos_confirm_text: "Deslize para acionar o alarme de emergência imediatamente.",
    sos_confirm_title: "🚨 Acionar alarme de emergência?",
    sos_error: "Não foi possível acionar o SOS: {error}",
    sos_no_outputs: "Nenhum dispositivo de saída de emergência selecionado",
    sos_outputs_help: "Esses dispositivos sempre serão ligados quando o SOS for acionado.",
    sos_select_outputs: "Selecione luzes, sirenes ou cenas",
    sos_slide: "Deslize para acionar o SOS",
    sos_stop: "PARAR SOS",
    status_away: "Ausente",
    status_closed: "FECHADO",
    status_home: "Lar",
    status_idle: "Inativo",
    status_open: "ABERTO",
    status_recording: "Gravando",
    support_title: "Status e suporte",
    switch_profile_btn: "👤 Alternar Perfil",
    sync_panel_help: "Estado de sincronização com painéis de alarme externos.",
    sync_panel_section: "Painéis de Alarme Externos",
    system_armed: "SISTEMA ARMADO",
    system_disarmed: "SISTEMA DESARMADO",
    system_triggered: "ALARME DISPARADO!",
    temp_auto: "Temperatura automática",
    temp_displayed: "Entidade de temperatura ao vivo",
    temp_notification_title: "Argus – Alerta de temperatura",
    temp_thermostat: "Termostato",
    thermostat_alert_notif: "Alerta de termostato",
    times_section: "⏱️ Temporizadores",
    triggered: "Alarme disparado!",
    unavailable: "Indisponível",
    undo_error: "Não foi possível desfazer a redefinição: {error}",
    undo_reset: "Desfazer redefinição",
    undo_reset_btn: "Desfazer Redefinição",
    undo_success: "Redefinição desfeita com sucesso.",
    unlinked_ha_accounts_title: "Contas de assistente doméstico",
    unlock_kiosk: "Desbloquear quiosque",
    update_pin: "Atualizar PIN",
    upload_error: "Erro ao carregar.",
    url_placeholder: "URL de plano de fundo…",
    use_for_hub: "Usar para hub",
    use_for_panel: "Use para painel",
    use_ha_language: "Use o idioma do Home Assistant",
    user_default: "Usuário",
    user_exp_date: "Data e hora de expiração",
    user_exp_type: "Tipo de expiração",
    user_no_pin: "Sem PIN de acesso",
    user_pin: "PIN de acesso",
    user_pin_action: "Definir PIN",
    user_required: "Nome e PIN são obrigatórios.",
    user_role_action: "Alterar função",
    user_role_label: "Função do usuário",
    username: "Nome de usuário",
    users_title: "👥 Usuários e controle de acesso",
    vacation: "Férias",
    wait_if_open: "Aguardar fechamento",
    waiting_sensors: "AGUARDANDO SENSORES",
    waiting_sensors_count: "AGUARDANDO {count} SENSOR(S)",
    weather_auto: "Detecção automática do clima",
    weather_source: "Entidade meteorológica",
    welcome_greeting: "Bem vindo de volta!",
    welcome_profile: "Bem-vindo, {nome}",
    wrong_pin: "PIN errado"
  },
  zh: {
    accept: "确认",
    access_control_title: "👥 用户与门禁控制",
    access_desc: "全局安全管理，掌握 PIN 码和管理员。",
    access_pin_lbl: "访问 PIN 码",
    access_title: "用户与门禁控制",
    action_disarmed: "解除武装",
    action_failed: "动作无法执行",
    action_sos: "紧急求救警报",
    action_sos_stop: "求救已停止",
    active_profile: "活动档案",
    active_until: "过期",
    activity_log: "📋 活动日志",
    add_btn: "+ 添加",
    add_user: "添加用户",
    admin_only: "只有管​​理员可以管理用户和设置。",
    alarm_instance: "报警实例",
    all_sensors_bypassed: "所有配置的传感器都会被绕过。",
    analysis_title: "证券分析",
    arm_time: "布防延迟（秒）",
    arm_time_label: "布防延迟",
    armed_away: "离开",
    armed_home: "家",
    armed_night: "夜晚",
    armed_vacation: "假期",
    arming: "武装",
    automations: "自动化",
    available: "可用的",
    backdrop_mode_blur: "模糊",
    backdrop_mode_dim: "变暗",
    backdrop_mode_none: "没有任何",
    background_lbl: "背景",
    backup_desc: "导出、恢复或重置 Argus 配置。",
    backup_title: "备份与恢复",
    badge_pin_reset: "密码重置",
    badge_pin_reset_failed: "PIN 重置失败",
    battery_low: "电池电量低",
    bg_collage: "拼贴画",
    bg_hub_default: "默认中心背景",
    bg_hub_selected_from_history: "Hub背景选自历史",
    bg_hub_title: "中心背景",
    bg_image_opt: "静态图像",
    bg_none: "没有任何",
    bg_panel_none: "无面板背景",
    bg_panel_selected_from_history: "从历史中选择的面板背景",
    bg_panel_title: "面板背景",
    bg_photo: "照片",
    bg_sound_opt: "背景音",
    bg_video: "动画视频",
    bg_weather: "实时天气",
    bridge_not_connected: "桥未连接",
    bridge_not_desc: "HomeKit 桥当前已断开连接。",
    bridge_paired: "桥接配对",
    bridge_paired_desc: "HomeKit 桥接器已配对且处于活动状态。",
    btn_away: "🔴 外出",
    btn_create_argus_profile: "+ 创建阿格斯档案",
    btn_disarmed: "🔓 已撤防",
    btn_home: "🏠 在家",
    btn_night: "🌙 夜间",
    btn_sos: "🚨 紧急呼救 / SOS",
    btn_vacation: "✈️ 度假",
    bypass_lbl: "🚫 绕过",
    cancel: "取消",
    cancel_btn: "取消",
    cannot_arm: "无法布防系统",
    cannot_delete_last_admin: "无法删除唯一的管理员。",
    change_btn: "更改",
    change_pin: "更改访问 PIN 码",
    change_profile_picture: "更改 HA 人员中的照片 ↗",
    claim_btn: "索赔管理员",
    claim_desc: "您的安装需要管理员才能获得访问权限。",
    claim_title: "阿格斯安全更新",
    clear: "清除",
    clear_history: "清除历史记录",
    clear_history_confirm: "删除所有活动历史记录？",
    clear_log_btn: "🗑️清除日志",
    clock_12h: "12 小时（上午/下午）",
    clock_24h: "24小时",
    clock_auto: "自动（按语言）",
    clock_format_desc: "顶部标题中的时钟格式",
    clock_format_label: "时钟格式",
    close: "关闭",
    collapse: "展开",
    confirm: "确认",
    confirm_pin: "确认密码",
    connected: "连接",
    create_ha: "+ 在HA中创建",
    current_pin: "当前密码",
    customize: "定制",
    delete: "删除",
    delete_btn_title: "删除",
    delete_file_error: "无法删除文件：{错误}",
    delete_user_confirm: "您确定要删除该用户吗？",
    delete_user_tooltip: "删除该用户",
    deselect_all: "取消全选",
    details_notif: "通知详情",
    disarm_time: "进入延迟（秒）",
    disarm_time_label: "入境延误",
    disarmed: "已撤防",
    done: "完成",
    edit_btn: "✏️ 编辑姓名",
    edit_dashboard: "编辑仪表板",
    edit_dashboard_done: "✓ 完成",
    emergency_call_active: "紧急呼叫正在进行中...",
    emergency_help: "设置当地紧急服务号码（例如 911 或 112）。包含在 SOS 警报中。",
    emergency_number_label: "🚨 当地紧急电话号码",
    entry_sensors: "入口传感器",
    error_loading_uploaded_files: "加载上传的文件时出错。",
    exit_to_ha: "退出到家庭助理",
    exp_indefinite: "不定",
    exp_temporary: "临时（日期/时间）",
    expand: "展开",
    expired: "已到期",
    export_btn: "导出配置",
    export_error: "导出错误：{错误}",
    external_panels: "外部报警面板",
    file_choice: "用作静态图像（确定）还是动画视频（取消）？",
    file_delete_confirm: "永久删除该文件吗？",
    file_read_error: "无法读取文件。",
    files_count: "{count} 个文件",
    files_count_short: "{count} 个文件",
    first_run_blocked_desc: "设置已锁定。",
    first_run_blocked_title: "需要初始设置",
    first_run_desc: "配置您的初始安全凭证。",
    first_run_pin_expl: "设置主 PIN 码来控制系统。",
    first_run_skip: "暂时跳过",
    first_run_start: "开始设置",
    first_run_welcome: "欢迎来到阿古斯！",
    forgot_pin: "忘记了您的 PIN 码？",
    fullscreen_title: "全屏",
    generic_error: "错误：{错误}",
    github_action: "在 GitHub 上点赞",
    github_desc: "如果您喜欢这个项目，请在 GitHub 上加星支持开发。",
    github_title: "支持 Argus",
    ha_account: "HA 账户",
    ha_account_linked: "HA 帐户：{名称}",
    ha_account_unavailable: "没有链接 HA 帐户",
    ha_admin_label: "医管局管理员",
    ha_role_admin: "行政人员",
    ha_role_standard: "标准用户",
    ha_standard_user_label: "房委会标准用户",
    help: "帮助",
    hero_desc: "智能家庭安防系统",
    hide: "隐藏",
    hide_widget: "隐藏小部件",
    history_refresh: "🔄 刷新",
    history_title: "活动历史",
    history_unavailable: "活动历史记录不可用。",
    home_default: "我的家",
    home_fallback: "我的家",
    home_name_label: "家庭名称",
    home_name_lbl: "家庭名称",
    home_name_modal_desc: "自定义顶部标题中显示的居住名称。",
    home_name_modal_title: "编辑家庭名称",
    home_name_placeholder: "你家的名字...",
    homekit_bridge: "HomeKit 桥接器",
    homekit_house: "HomeKit 主页",
    homekit_not_paired: "HomeKit 未配对",
    homekit_title: "HomeKit 集成",
    import_btn: "导入配置",
    import_error: "导入错误：{错误}",
    import_success: "配置已恢复。正在重新加载...",
    initialization_error_desc: "无法连接到授权的 Home Assistant 后端。",
    initialization_error_title: "无法启动阿格斯",
    instances: "Argus 安全面板",
    introduce_pin: "输入您的安全 PIN 码",
    invalid_config: "配置文件无效。",
    invalid_pin_msg: "PIN 码不正确",
    is_admin: "是管理员吗？",
    lang_select_title: "选择语言",
    lang_selector_lbl: "⚙️ 语言",
    language: "语言",
    lbl_aesthetic_custom: "个性化与设置",
    lbl_load_file: "上传文件",
    lbl_uploaded_files: "上传的文件",
    light_siren_color: "颜色",
    light_siren_flash: "柔和的闪光（如果有）",
    link_ha_user: "链接HA用户",
    linked_rules: "与阿古斯相关的规则",
    loading: "加载中…",
    lock_if_open: "如有开启则阻止",
    log_action_access_pin_updated: "访问 PIN 码已更新",
    log_action_analysis: "证券分析",
    log_action_automation: "自动化执行",
    log_action_backup_created: "备份已创建",
    log_action_backup_restored: "配置已恢复",
    log_action_first_run_completed: "初始设置完成",
    log_action_fullscreen_unlocked: "全屏解锁",
    log_action_master_pin_rejected: "错误的主 PIN 码被拒绝",
    log_action_mode_changed: "模式已更改",
    log_action_profile_selected: "已选择配置文件",
    log_action_rejected: "行动被拒绝",
    log_action_save_ui: "已保存视觉设置",
    log_action_schedule_applied: "应用时间表",
    log_action_select_profile: "配置文件已切换",
    log_action_sos: "紧急求救警报",
    log_action_sos_stopped: "求救已停止",
    log_action_state_restored: "状态恢复",
    log_action_stop_sos: "SOS 警报已停止",
    log_action_user_added: "用户已创建",
    log_action_user_deleted: "用户已删除",
    log_action_user_logged_in: "用户登录",
    log_action_verify_access_pin: "访问 PIN 码已验证",
    log_armed: "武装",
    log_by: "经过",
    log_detail_armed: "系统布防",
    log_detail_disarm: "系统撤防",
    log_detail_pin_reset: "HA 管理员重置主 PIN",
    log_detail_pin_reset_failed: "PIN 码重置尝试被拒绝",
    log_detail_triggered: "自动激活",
    log_disarmed: "解除武装",
    log_mode: "模式",
    log_no_events: "历史上没有记录任何事件。",
    log_sensor: "传感器",
    log_triggered: "触发",
    login_btn: "登录",
    manual_arm: "手动布防",
    manual_disarm: "手动撤防",
    master_pin_lbl: "布防 PIN",
    modal_add_user: "+ 添加用户",
    modal_cancel: "取消",
    modal_confirm: "确认",
    modal_delete_confirm: "删除该用户？",
    modal_edit_name: "编辑姓名",
    modal_name_label: "个人资料名称",
    modal_pin_help: "留空则不需要 PIN。",
    modal_pin_title: "访问密码",
    modal_save: "节省",
    modal_user_added: "用户创建成功。",
    mode_away: "外出",
    mode_home: "在家",
    mode_night: "夜间",
    mode_vacation: "度假",
    modes: "模式 / SOS",
    modes_sos: "模式 / SOS",
    mqtt_label: "MQTT",
    never_triggered: "从未触发过",
    new_pin: "新密码",
    no_alarm_instance: "没有可用的警报实例",
    no_auto_linked: "没有链接自动化。",
    no_files_uploaded: "没有上传文件。",
    no_files_uploaded_short: "没有文件",
    no_instances: "未配置报警实例。",
    no_results: "没有结果",
    no_rules: "没有可用的规则。",
    no_sensors_configured: "未配置传感器",
    no_unlinked_ha_accounts: "没有未链接的 HA 帐户。",
    no_users: "未注册用户",
    none_selected: "未选择",
    notif_desc: "重大事件的移动推送通知。",
    notif_no_services: "没有可用的移动通知服务。",
    notification_armed: "{user} 以 {mode} 模式武装系统。",
    notification_disarmed: "{user} 撤防系统。",
    notifications_title: "通知",
    open_sensors: "开放式传感器",
    open_sensors_explain: "以下传感器处于打开状态：\\\\n{names}\\\\n\\\\n在布防或启用旁路之前关闭它们。",
    panic_state_unknown: "无法确定先前的警报状态。",
    panic_stop_error: "无法停止警报：{错误}",
    panic_stopped: "警报停止；恢复状态{状态}",
    pending: "待办的",
    pin_active_no: "无活动 PIN",
    pin_active_yes: "PIN 已激活",
    pin_deleted: "PIN 码已删除",
    pin_desc: "4 至 8 位安全代码。",
    pin_disarm_error: "PIN 码错误或撤防错误",
    pin_incorrect: "PIN 码错误",
    pin_management: "🔑 PIN 密码管理",
    pin_master_title: "主 PIN 码",
    pin_mismatch: "PIN 码不匹配",
    pin_modal_desc: "输入您的安全 PIN 码以继续。",
    pin_placeholder: "••••",
    pin_remove_hint: "留空以删除主 PIN。",
    pin_reset_admin_only: "只有管​​理员可以重置 PIN。",
    pin_reset_confirm: "重置 PIN 码？",
    pin_updated: "PIN 码更新成功",
    profile_is_yours: "当前用户",
    profile_needs_pin: "此配置文件需要访问 PIN。",
    profile_no_pin_access: "无需 PIN 码即可免费访问。",
    remove_btn: "移除",
    reset_btn: "恢复出厂设置",
    reset_confirm: "将阿格斯重置为出厂默认设置？所有配置和 PIN 码都将丢失。",
    reset_dashboard: "重置布局",
    reset_error: "重置错误：{错误}",
    reset_error_auth: "重置需要身份验证。",
    reset_success: "阿古斯重置成功。",
    reset_widget: "重置小部件",
    retry_action: "重试",
    role_argus_admin: "阿格斯管理员",
    role_argus_admin_short: "行政",
    role_argus_standard: "标准用户",
    role_argus_user: "标准用户",
    role_argus_user_short: "用户",
    rules_tip: "自动化提示",
    save_btn: "保存",
    save_config: "💾 保存模式",
    save_mode: "保存模式",
    save_notif: "保存通知",
    save_user: "保存用户",
    saved: "✓ 已保存",
    search_placeholder: "搜索设备或实体...",
    search_select: "搜索并选择...",
    searching_auto: "搜索自动化...",
    select_all: "选择全部",
    select_btn: "+ 选择",
    select_entry_sensors: "+ 选择入口传感器",
    select_profile_subtitle: "选择您的用户个人资料",
    select_profile_title: "访问配置文件",
    selected_lbl: "已选择",
    selector_accept: "接受",
    selector_clear: "清除选择",
    selector_close: "关闭",
    selector_panic: "🚨 SOS 紧急输出",
    sensor_section: "入侵传感器",
    sensors_to_bypass: "要绕过的传感器",
    settings: "⚙️ 设置",
    setup_access_pin: "Argus 面板访问 PIN 码（可选）",
    setup_admin_name: "管理员姓名",
    setup_master_pin: "用于布防/撤防的主 PIN（可选）",
    setup_required_action: "在集成中配置 Argus",
    setup_required_desc: "Argus 已安装，但尚未创建实例。",
    setup_required_title: "需要阿格斯设置",
    siren_section: "警报器",
    size: "尺寸",
    slide_disarm: "滑动撤防",
    slide_sos: "滑动触发 SOS",
    slide_sos_stop: "滑动停止 SOS",
    sos_actions: "🚨 SOS 行动",
    sos_activated: "紧急求救已启动",
    sos_call: "致电紧急服务",
    sos_call_confirm: "致电当地紧急服务中心（{number}）？",
    sos_call_help: "如果此设备无法拨打电话，Argus 将发送严重警报通知。",
    sos_confirm_text: "滑动即可立即触发紧急警报。",
    sos_confirm_title: "🚨 触发紧急警报？",
    sos_error: "无法触发 SOS：{错误}",
    sos_no_outputs: "未选择紧急输出设备",
    sos_outputs_help: "当 SOS 触发时，这些设备将始终打开。",
    sos_select_outputs: "选择灯光、警报器或场景",
    sos_slide: "滑动触发SOS",
    sos_stop: "停止 SOS",
    status_away: "离开",
    status_closed: "关闭",
    status_home: "家",
    status_idle: "空闲",
    status_open: "开启",
    status_recording: "录制中",
    support_title: "状态与支持",
    switch_profile_btn: "👤 切换配置文件",
    sync_panel_help: "与外部报警面板同步状态。",
    sync_panel_section: "外部报警面板",
    system_armed: "系统已布防",
    system_disarmed: "系统已撤防",
    system_triggered: "警报已触发！",
    temp_auto: "自动控温",
    temp_displayed: "实时温度实体",
    temp_notification_title: "阿格斯 — 温度警报",
    temp_thermostat: "恒温器",
    thermostat_alert_notif: "恒温器警报",
    times_section: "⏱️ 计时延时",
    triggered: "警报已触发！",
    unavailable: "不可用",
    undo_error: "无法撤消重置：{错误}",
    undo_reset: "撤消重置",
    undo_reset_btn: "撤销重置",
    undo_success: "重置撤消成功。",
    unlinked_ha_accounts_title: "家庭助理账户",
    unlock_kiosk: "解锁信息亭",
    update_pin: "更新个人识别码",
    upload_error: "上传错误。",
    url_placeholder: "背景网址...",
    use_for_hub: "用于集线器",
    use_for_panel: "用于面板",
    use_ha_language: "使用家庭助理语言",
    user_default: "用户",
    user_exp_date: "到期日期和时间",
    user_exp_type: "过期类型",
    user_no_pin: "无访问 PIN 码",
    user_pin: "访问密码",
    user_pin_action: "设置密码",
    user_required: "需要姓名和 PIN 码。",
    user_role_action: "改变角色",
    user_role_label: "用户角色",
    username: "用户名",
    users_title: "👥 用户和访问控制",
    vacation: "假期",
    wait_if_open: "等待感应器关闭",
    waiting_sensors: "等待传感器关闭",
    waiting_sensors_count: "正在等待 {count} 个传感器",
    weather_auto: "自动天气检测",
    weather_source: "天气实体",
    welcome_greeting: "欢迎回来！",
    welcome_profile: "欢迎，{name}",
    wrong_pin: "PIN 码错误"
  },
  "zh-Hant": {
    accept: "確認",
    access_control_title: "👥 使用者與門禁控制",
    access_desc: "全域安全管理，掌握 PIN 碼和管理員。",
    access_pin_lbl: "訪問 PIN 碼",
    access_title: "使用者與門禁控制",
    action_disarmed: "解除武裝",
    action_failed: "動作無法執行",
    action_sos: "緊急求救警報",
    action_sos_stop: "求救已停止",
    active_profile: "活動檔案",
    active_until: "過期",
    activity_log: "📋 活動日誌",
    add_btn: "+ 新增",
    add_user: "新增用戶",
    admin_only: "只有管​​理員可以管理使用者和設定。",
    alarm_instance: "警報實例",
    all_sensors_bypassed: "所有配置的感測器都會被繞過。",
    analysis_title: "證券分析",
    arm_time: "布防延遲（秒）",
    arm_time_label: "布防延遲",
    armed_away: "離開",
    armed_home: "家",
    armed_night: "夜晚",
    armed_vacation: "假期",
    arming: "武裝",
    automations: "自動化",
    available: "可用的",
    backdrop_mode_blur: "模糊",
    backdrop_mode_dim: "變暗",
    backdrop_mode_none: "沒有任何",
    background_lbl: "背景",
    backup_desc: "匯出、復原或重設 Argus 配置。",
    backup_title: "備份與還原",
    badge_pin_reset: "密碼重設",
    badge_pin_reset_failed: "PIN 重置失敗",
    battery_low: "電池電量低",
    bg_collage: "拼貼畫",
    bg_hub_default: "預設中心背景",
    bg_hub_selected_from_history: "Hub背景選自歷史",
    bg_hub_title: "中心背景",
    bg_image_opt: "靜態影像",
    bg_none: "沒有任何",
    bg_panel_none: "無面板背景",
    bg_panel_selected_from_history: "從歷史中選擇的面板背景",
    bg_panel_title: "面板背景",
    bg_photo: "照片",
    bg_sound_opt: "背景音",
    bg_video: "動畫影片",
    bg_weather: "即時天氣",
    bridge_not_connected: "橋未連接",
    bridge_not_desc: "HomeKit 橋目前已斷開連線。",
    bridge_paired: "橋接配對",
    bridge_paired_desc: "HomeKit 橋接器已配對且處於作用中狀態。",
    btn_away: "🔴 離家",
    btn_create_argus_profile: "+ 建立阿格斯檔案",
    btn_disarmed: "🔓 已撤防",
    btn_home: "🏠 在家",
    btn_night: "🌙 夜間",
    btn_sos: "🚨 緊急求救 / SOS",
    btn_vacation: "✈️ 度假",
    bypass_lbl: "🚫 略過",
    cancel: "取消",
    cancel_btn: "取消",
    cannot_arm: "無法布防系統",
    cannot_delete_last_admin: "無法刪除唯一的管理員。",
    change_btn: "變更",
    change_pin: "更改訪問 PIN 碼",
    change_profile_picture: "更改 HA 人員中的照片 ↗",
    claim_btn: "索賠管理員",
    claim_desc: "您的安裝需要管理員才能獲得存取權限。",
    claim_title: "阿格斯安全更新",
    clear: "清除",
    clear_history: "清除歷史記錄",
    clear_history_confirm: "刪除所有活動記錄？",
    clear_log_btn: "🗑️清除日誌",
    clock_12h: "12 小時（上午/下午）",
    clock_24h: "24小時",
    clock_auto: "自動（按語言）",
    clock_format_desc: "頂部標題中的時鐘格式",
    clock_format_label: "時鐘格式",
    close: "關閉",
    collapse: "展開",
    confirm: "確認",
    confirm_pin: "確認密碼",
    connected: "連接",
    create_ha: "+ 在HA中創建",
    current_pin: "目前密碼",
    customize: "客製化",
    delete: "刪除",
    delete_btn_title: "刪除",
    delete_file_error: "無法刪除檔案：{錯誤}",
    delete_user_confirm: "您確定要刪除該使用者嗎？",
    delete_user_tooltip: "刪除該用戶",
    deselect_all: "取消全選",
    details_notif: "通知詳情",
    disarm_time: "進入延遲（秒）",
    disarm_time_label: "入境延誤",
    disarmed: "已撤防",
    done: "完成",
    edit_btn: "✏️ 編輯姓名",
    edit_dashboard: "編輯儀表板",
    edit_dashboard_done: "✓ 完成",
    emergency_call_active: "緊急呼叫正在進行中...",
    emergency_help: "設定當地緊急服務號碼（例如 911 或 112）。包含在 SOS 警報中。",
    emergency_number_label: "🚨 當地緊急電話號碼",
    entry_sensors: "入口感應器",
    error_loading_uploaded_files: "載入上傳的檔案時發生錯誤。",
    exit_to_ha: "退出到家庭助理",
    exp_indefinite: "不定",
    exp_temporary: "臨時（日期/時間）",
    expand: "展開",
    expired: "已到期",
    export_btn: "匯出設定",
    export_error: "導出錯誤：{錯誤}",
    external_panels: "外部警報面板",
    file_choice: "用作靜態圖像（確定）還是動畫影片（取消）？",
    file_delete_confirm: "永久刪除該檔案嗎？",
    file_read_error: "無法讀取檔案。",
    files_count: "{count} 個文件",
    files_count_short: "{count} 個文件",
    first_run_blocked_desc: "設定已鎖定。",
    first_run_blocked_title: "需要初始設定",
    first_run_desc: "配置您的初始安全憑證。",
    first_run_pin_expl: "設定主 PIN 碼來控制系統。",
    first_run_skip: "暫時跳過",
    first_run_start: "開始設定",
    first_run_welcome: "歡迎來到阿古斯！",
    forgot_pin: "忘了您的 PIN 碼？",
    fullscreen_title: "全螢幕",
    generic_error: "錯誤：{錯誤}",
    github_action: "在 GitHub 上按讚",
    github_desc: "如果您喜歡這個項目，請在 GitHub 上加星支持開發。",
    github_title: "支持 Argus",
    ha_account: "HA 帳戶",
    ha_account_linked: "HA 帳號：{名稱}",
    ha_account_unavailable: "沒有連結 HA 帳戶",
    ha_admin_label: "醫管局管理員",
    ha_role_admin: "行政人員",
    ha_role_standard: "標準用戶",
    ha_standard_user_label: "房委會標準用戶",
    help: "幫助",
    hero_desc: "智慧家庭安防系統",
    hide: "隱藏",
    hide_widget: "隱藏小工具",
    history_refresh: "🔄 刷新",
    history_title: "活動歷史",
    history_unavailable: "活動歷史記錄不可用。",
    home_default: "我的家",
    home_fallback: "我的家",
    home_name_label: "家庭名稱",
    home_name_lbl: "家庭名稱",
    home_name_modal_desc: "自訂頂部標題中顯示的居住名稱。",
    home_name_modal_title: "編輯家庭名稱",
    home_name_placeholder: "你家的名字...",
    homekit_bridge: "HomeKit 橋接器",
    homekit_house: "HomeKit 首頁",
    homekit_not_paired: "HomeKit 未配對",
    homekit_title: "HomeKit 集成",
    import_btn: "匯入設定",
    import_error: "導入錯誤：{錯誤}",
    import_success: "配置已恢復。正在重新加載...",
    initialization_error_desc: "無法連線到授權的 Home Assistant 後端。",
    initialization_error_title: "無法啟動阿格斯",
    instances: "Argus 安全面板",
    introduce_pin: "輸入您的安全 PIN 碼",
    invalid_config: "設定檔無效。",
    invalid_pin_msg: "PIN 碼不正確",
    is_admin: "是管理員嗎？",
    lang_select_title: "選擇語言",
    lang_selector_lbl: "⚙️ 語言",
    language: "語言",
    lbl_aesthetic_custom: "個人化與設定",
    lbl_load_file: "上傳文件",
    lbl_uploaded_files: "上傳的文件",
    light_siren_color: "顏色",
    light_siren_flash: "柔和的閃光（如果有）",
    link_ha_user: "連結HA用戶",
    linked_rules: "與阿古斯相關的規則",
    loading: "載入中…",
    lock_if_open: "如有開啟則阻止",
    log_action_access_pin_updated: "訪問 PIN 碼已更新",
    log_action_analysis: "證券分析",
    log_action_automation: "自動化執行",
    log_action_backup_created: "備份已創建",
    log_action_backup_restored: "配置已恢復",
    log_action_first_run_completed: "初始設定完成",
    log_action_fullscreen_unlocked: "全螢幕解鎖",
    log_action_master_pin_rejected: "錯誤的主 PIN 碼被拒絕",
    log_action_mode_changed: "模式已更改",
    log_action_profile_selected: "已選擇設定檔",
    log_action_rejected: "行動被拒絕",
    log_action_save_ui: "已儲存視覺設定",
    log_action_schedule_applied: "應用時間表",
    log_action_select_profile: "設定檔已切換",
    log_action_sos: "緊急求救警報",
    log_action_sos_stopped: "求救已停止",
    log_action_state_restored: "狀態恢復",
    log_action_stop_sos: "SOS 警報已停止",
    log_action_user_added: "使用者已建立",
    log_action_user_deleted: "用戶已刪除",
    log_action_user_logged_in: "使用者登入",
    log_action_verify_access_pin: "訪問 PIN 碼已驗證",
    log_armed: "武裝",
    log_by: "經過",
    log_detail_armed: "系統布防",
    log_detail_disarm: "系統撤防",
    log_detail_pin_reset: "HA 管理員重設主 PIN",
    log_detail_pin_reset_failed: "PIN 碼重置嘗試被拒絕",
    log_detail_triggered: "自動啟用",
    log_disarmed: "解除武裝",
    log_mode: "模式",
    log_no_events: "歷史上沒有記錄任何事件。",
    log_sensor: "感應器",
    log_triggered: "觸發",
    login_btn: "登入",
    manual_arm: "手動布防",
    manual_disarm: "手動撤防",
    master_pin_lbl: "布防 PIN",
    modal_add_user: "+ 新增用戶",
    modal_cancel: "取消",
    modal_confirm: "確認",
    modal_delete_confirm: "刪除該用戶？",
    modal_edit_name: "編輯姓名",
    modal_name_label: "個人資料名稱",
    modal_pin_help: "留空則不需要 PIN。",
    modal_pin_title: "訪問密碼",
    modal_save: "節省",
    modal_user_added: "用戶創建成功。",
    mode_away: "離家",
    mode_home: "在家",
    mode_night: "夜間",
    mode_vacation: "度假",
    modes: "模式 / SOS",
    modes_sos: "模式 / SOS",
    mqtt_label: "MQTT",
    never_triggered: "從未觸發過",
    new_pin: "新密碼",
    no_alarm_instance: "沒有可用的警報實例",
    no_auto_linked: "沒有連結自動化。",
    no_files_uploaded: "沒有上傳文件。",
    no_files_uploaded_short: "沒有文件",
    no_instances: "未配置警報實例。",
    no_results: "沒有結果",
    no_rules: "沒有可用的規則。",
    no_sensors_configured: "未配置感測器",
    no_unlinked_ha_accounts: "沒有未連結的 HA 帳戶。",
    no_users: "無註冊使用者",
    none_selected: "未選擇",
    notif_desc: "重大事件的行動推播通知。",
    notif_no_services: "沒有可用的行動通知服務。",
    notification_armed: "{user} 以 {mode} 模式武裝系統。",
    notification_disarmed: "{user} 撤防系統。",
    notifications_title: "通知",
    open_sensors: "開放式感應器",
    open_sensors_explain: "以下感測器處於開啟狀態：\\\\n{names}\\\\n\\\\n在布防或啟用旁路之前關閉它們。",
    panic_state_unknown: "無法確定先前的警報狀態。",
    panic_stop_error: "無法停止警報：{錯誤}",
    panic_stopped: "警報停止；恢復狀態{狀態}",
    pending: "待辦的",
    pin_active_no: "無活動 PIN",
    pin_active_yes: "PIN 已啟用",
    pin_deleted: "PIN 碼已刪除",
    pin_desc: "4 至 8 位元安全代碼。",
    pin_disarm_error: "PIN 碼錯誤或撤防錯誤",
    pin_incorrect: "PIN 碼錯誤",
    pin_management: "🔑 PIN 密碼管理",
    pin_master_title: "主 PIN 碼",
    pin_mismatch: "PIN 碼不匹配",
    pin_modal_desc: "輸入您的安全 PIN 碼以繼續。",
    pin_placeholder: "••••",
    pin_remove_hint: "留空以刪除主 PIN。",
    pin_reset_admin_only: "只有管​​理員可以重置 PIN。",
    pin_reset_confirm: "重置 PIN 碼？",
    pin_updated: "PIN 碼更新成功",
    profile_is_yours: "當前使用者",
    profile_needs_pin: "此設定檔需要存取 PIN。",
    profile_no_pin_access: "無需 PIN 碼即可免費存取。",
    remove_btn: "移除",
    reset_btn: "恢復出廠預設值",
    reset_confirm: "將阿格斯重置為出廠預設值？所有配置和 PIN 碼都將遺失。",
    reset_dashboard: "重設版面配置",
    reset_error: "重設錯誤：{錯誤}",
    reset_error_auth: "重置需要身份驗證。",
    reset_success: "阿古斯重置成功。",
    reset_widget: "重設小工具",
    retry_action: "重試",
    role_argus_admin: "阿格斯管理員",
    role_argus_admin_short: "行政",
    role_argus_standard: "標準用戶",
    role_argus_user: "標準用戶",
    role_argus_user_short: "使用者",
    rules_tip: "自動化提示",
    save_btn: "儲存",
    save_config: "💾 儲存模式",
    save_mode: "儲存模式",
    save_notif: "保存通知",
    save_user: "儲存用戶",
    saved: "✓ 已儲存",
    search_placeholder: "搜尋設備或實體...",
    search_select: "搜尋並選擇...",
    searching_auto: "搜尋自動化...",
    select_all: "選擇全部",
    select_btn: "+ 選擇",
    select_entry_sensors: "+ 選擇入口感應器",
    select_profile_subtitle: "選擇您的用戶個人資料",
    select_profile_title: "存取設定檔",
    selected_lbl: "已選擇",
    selector_accept: "接受",
    selector_clear: "清除選擇",
    selector_close: "關閉",
    selector_panic: "🚨 SOS 緊急輸出",
    sensor_section: "入侵感應器",
    sensors_to_bypass: "要繞過的感測器",
    settings: "⚙️ 設定",
    setup_access_pin: "Argus 面板存取 PIN 碼（可選）",
    setup_admin_name: "管理員姓名",
    setup_master_pin: "用於布防/撤防的主 PIN（可選）",
    setup_required_action: "在整合中配置 Argus",
    setup_required_desc: "Argus 已安裝，但尚未建立實例。",
    setup_required_title: "需要阿格斯設置",
    siren_section: "警報器",
    size: "尺寸",
    slide_disarm: "滑動撤防",
    slide_sos: "滑動觸發 SOS",
    slide_sos_stop: "滑動停止 SOS",
    sos_actions: "🚨 SOS 行動",
    sos_activated: "緊急求救已啟動",
    sos_call: "致電緊急服務",
    sos_call_confirm: "致電當地緊急服務中心（{number}）？",
    sos_call_help: "如果此設備無法撥打電話，Argus 將發送嚴重警報通知。",
    sos_confirm_text: "滑動即可立即觸發緊急警報。",
    sos_confirm_title: "🚨 觸發緊急警報？",
    sos_error: "無法觸發 SOS：{錯誤}",
    sos_no_outputs: "未選擇緊急輸出設備",
    sos_outputs_help: "當 SOS 觸發時，這些裝置將始終開啟。",
    sos_select_outputs: "選擇燈光、警報器或場景",
    sos_slide: "滑動觸發SOS",
    sos_stop: "停止 SOS",
    status_away: "離開",
    status_closed: "關閉",
    status_home: "家",
    status_idle: "閒置",
    status_open: "開啟",
    status_recording: "錄製中",
    support_title: "狀態與支持",
    switch_profile_btn: "👤 切換設定檔",
    sync_panel_help: "與外部警報面板同步狀態。",
    sync_panel_section: "外部警報面板",
    system_armed: "系統已布防",
    system_disarmed: "系統已撤防",
    system_triggered: "警報已觸發！",
    temp_auto: "自動控溫",
    temp_displayed: "即時溫度實體",
    temp_notification_title: "阿格斯 — 溫度警報",
    temp_thermostat: "恆溫器",
    thermostat_alert_notif: "恆溫器警報",
    times_section: "⏱️ 計時延時",
    triggered: "警報已觸發！",
    unavailable: "不可用",
    undo_error: "無法撤銷重設：{錯誤}",
    undo_reset: "撤銷重置",
    undo_reset_btn: "復原重設",
    undo_success: "重置撤銷成功。",
    unlinked_ha_accounts_title: "家庭助理帳戶",
    unlock_kiosk: "解鎖資訊亭",
    update_pin: "更新個人識別碼",
    upload_error: "上傳錯誤。",
    url_placeholder: "背景網址...",
    use_for_hub: "用於集線器",
    use_for_panel: "用於面板",
    use_ha_language: "使用家庭助理語言",
    user_default: "使用者",
    user_exp_date: "到期日期和時間",
    user_exp_type: "過期類型",
    user_no_pin: "無訪問 PIN 碼",
    user_pin: "訪問密碼",
    user_pin_action: "設定密碼",
    user_required: "需要姓名和 PIN 碼。",
    user_role_action: "改變角色",
    user_role_label: "使用者角色",
    username: "使用者名稱",
    users_title: "👥 使用者和存取控制",
    vacation: "假期",
    wait_if_open: "等待感應器關閉",
    waiting_sensors: "等待感應器關閉",
    waiting_sensors_count: "正在等待 {count} 個感測器",
    weather_auto: "自動天氣偵測",
    weather_source: "天氣實體",
    welcome_greeting: "歡迎回來！",
    welcome_profile: "歡迎，{name}",
    wrong_pin: "PIN 碼錯誤"
  },
  ru: {
    accept: "Принять",
    access_control_title: "👥 Пользователи и контроль доступа",
    access_desc: "Глобальное управление безопасностью, главный PIN-код и администраторы.",
    access_pin_lbl: "Pin профиля Argus",
    access_title: "Пользователи и контроль доступа",
    action_disarmed: "Разоружен",
    action_failed: "Действие не может быть выполнено",
    action_sos: "Экстренная сигнализация SOS",
    action_sos_stop: "SOS остановлен",
    active_profile: "Активный профиль",
    active_until: "Срок действия истекает",
    activity_log: "📋 Журнал активности",
    add_btn: "+ Добавить",
    add_user: "Добавить пользователя",
    admin_only: "Только администраторы могут управлять пользователями и настройками.",
    alarm_instance: "Экземпляр тревоги",
    all_sensors_bypassed: "Все настроенные датчики обойдены.",
    analysis_title: "Анализ безопасности",
    arm_time: "Задержка постановки на охрану (с)",
    arm_time_label: "Задержка постановки на охрану",
    armed_away: "Прочь",
    armed_home: "Дом",
    armed_night: "Ночь",
    armed_vacation: "Отпуск",
    arming: "Постановка на охрану",
    automations: "Автоматизация",
    available: "Доступный",
    backdrop_mode_blur: "Размытие",
    backdrop_mode_dim: "Затемнен",
    backdrop_mode_none: "Никто",
    background_lbl: "Фон",
    backup_desc: "Экспортируйте, восстановите или сбросьте конфигурацию Argus.",
    backup_title: "Резервное копирование и восстановление",
    badge_pin_reset: "Сброс PIN-кода",
    badge_pin_reset_failed: "Сброс PIN-кода не удался",
    battery_low: "Низкий заряд батареи",
    bg_collage: "Коллаж",
    bg_hub_default: "Фон концентратора по умолчанию",
    bg_hub_selected_from_history: "Фон хаба, выбранный из истории",
    bg_hub_title: "Фон концентратора",
    bg_image_opt: "Статическое изображение",
    bg_none: "Никто",
    bg_panel_none: "Нет фона панели",
    bg_panel_selected_from_history: "Фон панели выбран из истории",
    bg_panel_title: "Фон панели",
    bg_photo: "Фото",
    bg_sound_opt: "Фоновый звук",
    bg_video: "Анимированное видео",
    bg_weather: "Текущая погода",
    bridge_not_connected: "Мост не подключен",
    bridge_not_desc: "Мост HomeKit в настоящее время отключен.",
    bridge_paired: "Мост в паре",
    bridge_paired_desc: "Мост HomeKit спарен и активен.",
    btn_away: "🔴 Вне дома",
    btn_create_argus_profile: "+ Создать профиль Аргуса",
    btn_disarmed: "🔓 Снято с охраны",
    btn_home: "🏠 Дома",
    btn_night: "🌙 Ночь",
    btn_sos: "🚨 SOS / ПАНИКА",
    btn_vacation: "✈️ Отпуск",
    bypass_lbl: "🚫 Обход",
    cancel: "Отмена",
    cancel_btn: "Отмена",
    cannot_arm: "Не могу поставить систему на охрану",
    cannot_delete_last_admin: "Невозможно удалить единственного администратора.",
    change_btn: "Изменить",
    change_pin: "Изменить PIN-код доступа",
    change_profile_picture: "Сменить фото в HA Persons ↗",
    claim_btn: "Администратор претензий",
    claim_desc: "Для вашей установки требуется администратор для получения доступа.",
    claim_title: "Обновление безопасности Argus",
    clear: "Прозрачный",
    clear_history: "Очистить историю",
    clear_history_confirm: "Удалить всю историю активности?",
    clear_log_btn: "🗑️ Очистить журнал",
    clock_12h: "12 часов (до полудня/после полудня)",
    clock_24h: "24 часа",
    clock_auto: "Автоматически (по языку)",
    clock_format_desc: "Формат часов в верхнем заголовке",
    clock_format_label: "Формат часов",
    close: "Закрыть",
    collapse: "Развернуть",
    confirm: "Подтвердить",
    confirm_pin: "Подтвердить PIN-код",
    connected: "ПОДКЛЮЧЕНО",
    create_ha: "+ Создать в HA",
    current_pin: "Текущий PIN-код",
    customize: "Настроить",
    delete: "Удалить",
    delete_btn_title: "Удалить",
    delete_file_error: "Не удалось удалить файл: {ошибка}",
    delete_user_confirm: "Вы уверены, что хотите удалить этого пользователя?",
    delete_user_tooltip: "Удалить этого пользователя",
    deselect_all: "Отменить выбор всех",
    details_notif: "Детали уведомления",
    disarm_time: "Задержка на вход (с)",
    disarm_time_label: "Задержка входа",
    disarmed: "Снято с охраны",
    done: "Готово",
    edit_btn: "✏️ Редактировать имя",
    edit_dashboard: "Редактировать панель",
    edit_dashboard_done: "✓ Готово",
    emergency_call_active: "Вызов экстренной помощи...",
    emergency_help: "Установите номер местной службы экстренной помощи (например, 911 или 112). Включено в SOS-оповещения.",
    emergency_number_label: "🚨 Местный номер службы экстренной помощи",
    entry_sensors: "Датчики входа",
    error_loading_uploaded_files: "Ошибка загрузки загруженных файлов.",
    exit_to_ha: "Выход в Домашний помощник",
    exp_indefinite: "Бессрочный",
    exp_temporary: "Временный (дата/время)",
    expand: "Развернуть",
    expired: "Истекший",
    export_btn: "Экспорт конфигурации",
    export_error: "Ошибка экспорта: {error}",
    external_panels: "Внешние панели сигнализации",
    file_choice: "Использовать как статическое изображение (ОК) или анимированное видео (Отмена)?",
    file_delete_confirm: "Удалить этот файл навсегда?",
    file_read_error: "Не удалось прочитать файл.",
    files_count: "{количество} файлов",
    files_count_short: "{количество} файлов",
    first_run_blocked_desc: "Настройка заблокирована.",
    first_run_blocked_title: "Требуется первоначальная настройка",
    first_run_desc: "Настройте первоначальные учетные данные безопасности.",
    first_run_pin_expl: "Установите главный PIN-код для управления системой.",
    first_run_skip: "Пропустить сейчас",
    first_run_start: "Начать установку",
    first_run_welcome: "Добро пожаловать в Аргус!",
    forgot_pin: "Забыли свой PIN-код?",
    fullscreen_title: "Полноэкранный",
    generic_error: "Ошибка: {ошибка}",
    github_action: "Звезда на GitHub",
    github_desc: "Если вам нравится этот проект, поддержите разработку звездочкой на GitHub.",
    github_title: "Поддержите Argus",
    ha_account: "Аккаунт HA",
    ha_account_linked: "Учетная запись высокой доступности: {имя}",
    ha_account_unavailable: "Никакая учетная запись HA не связана",
    ha_admin_label: "Администратор высокой доступности",
    ha_role_admin: "Администратор",
    ha_role_standard: "Стандартный пользователь",
    ha_standard_user_label: "Стандартный пользователь высокой доступности",
    help: "Помощь",
    hero_desc: "Интеллектуальная система домашней безопасности",
    hide: "Скрыть",
    hide_widget: "Скрыть виджет",
    history_refresh: "🔄 Обновить",
    history_title: "История активности",
    history_unavailable: "История активности недоступна.",
    home_default: "Мой дом",
    home_fallback: "Мой дом",
    home_name_label: "Домашнее имя",
    home_name_lbl: "Домашнее имя",
    home_name_modal_desc: "Настройте свое имя проживания, указанное в верхнем заголовке.",
    home_name_modal_title: "Изменить домашнее имя",
    home_name_placeholder: "Ваше домашнее имя...",
    homekit_bridge: "ГлавнаяKit Bridge",
    homekit_house: "ГлавнаяKit Home",
    homekit_not_paired: "HomeKit не подключен",
    homekit_title: "Интеграция HomeKit",
    import_btn: "Импорт конфигурации",
    import_error: "Ошибка импорта: {error}",
    import_success: "Конфигурация восстановлена. Перезагрузка…",
    initialization_error_desc: "Не удалось подключиться к авторизованному серверу Home Assistant.",
    initialization_error_title: "Не удалось запустить Аргус",
    instances: "Панель безопасности Argus",
    introduce_pin: "Введите свой PIN-код безопасности",
    invalid_config: "Неверный файл конфигурации.",
    invalid_pin_msg: "Неправильный PIN-код",
    is_admin: "Администратор?",
    lang_select_title: "Выберите язык",
    lang_selector_lbl: "⚙️ Язык",
    language: "Язык",
    lbl_aesthetic_custom: "Персонализация и настройки",
    lbl_load_file: "Загрузить файл",
    lbl_uploaded_files: "Загруженные файлы",
    light_siren_color: "Цвет",
    light_siren_flash: "Мягкая вспышка, если есть",
    link_ha_user: "Ссылка на пользователя высокой доступности",
    linked_rules: "Правила, связанные с Argus",
    loading: "Загрузка…",
    lock_if_open: "Блокировать при открытии",
    log_action_access_pin_updated: "PIN-код доступа обновлен.",
    log_action_analysis: "Анализ безопасности",
    log_action_automation: "Автоматизация выполнена",
    log_action_backup_created: "Резервная копия создана",
    log_action_backup_restored: "Конфигурация восстановлена",
    log_action_first_run_completed: "Первоначальная настройка завершена",
    log_action_fullscreen_unlocked: "Полный экран разблокирован",
    log_action_master_pin_rejected: "Неправильный главный PIN-код отклонен.",
    log_action_mode_changed: "Режим изменен",
    log_action_profile_selected: "Профиль выбран",
    log_action_rejected: "Действие отклонено",
    log_action_save_ui: "Визуальные настройки сохранены.",
    log_action_schedule_applied: "Расписание применено",
    log_action_select_profile: "Профиль переключен",
    log_action_sos: "Экстренная сигнализация SOS",
    log_action_sos_stopped: "SOS остановлен",
    log_action_state_restored: "Состояние восстановлено",
    log_action_stop_sos: "Сигнал SOS отключен",
    log_action_user_added: "Создано пользователем",
    log_action_user_deleted: "Пользователь удален",
    log_action_user_logged_in: "Пользователь вошел в систему",
    log_action_verify_access_pin: "PIN-код доступа подтвержден",
    log_armed: "ВООРУЖЕН",
    log_by: "к",
    log_detail_armed: "Система поставлена ​​на охрану",
    log_detail_disarm: "Система снята с охраны",
    log_detail_pin_reset: "Сброс главного PIN-кода администратором HA",
    log_detail_pin_reset_failed: "Попытка сброса PIN-кода отклонена",
    log_detail_triggered: "Автоматическая активация",
    log_disarmed: "РАЗОРУЖЕН",
    log_mode: "Режим",
    log_no_events: "Никакие события не зафиксированы в истории.",
    log_sensor: "Датчик",
    log_triggered: "Сработало",
    login_btn: "Авторизоваться",
    manual_arm: "Ручная постановка на охрану",
    manual_disarm: "Ручное снятие с охраны",
    master_pin_lbl: "Pin постановки",
    modal_add_user: "+ Добавить пользователя",
    modal_cancel: "Отмена",
    modal_confirm: "Подтверждать",
    modal_delete_confirm: "Удалить этого пользователя?",
    modal_edit_name: "Изменить имя",
    modal_name_label: "Имя профиля",
    modal_pin_help: "Оставьте пустым, чтобы не требовать PIN-код.",
    modal_pin_title: "PIN-код доступа",
    modal_save: "Сохранять",
    modal_user_added: "Пользователь успешно создан.",
    mode_away: "Вне дома",
    mode_home: "Дома",
    mode_night: "Ночь",
    mode_vacation: "Отпуск",
    modes: "Режимы / SOS",
    modes_sos: "Режимы / SOS",
    mqtt_label: "MQTT",
    never_triggered: "Никогда не срабатывал",
    new_pin: "Новый ПИН-код",
    no_alarm_instance: "Нет доступного экземпляра тревоги",
    no_auto_linked: "Никакой автоматизации не связано.",
    no_files_uploaded: "Файлы не загружены.",
    no_files_uploaded_short: "Нет файлов",
    no_instances: "Экземпляры сигналов тревоги не настроены.",
    no_results: "Нет результатов",
    no_rules: "Нет доступных правил.",
    no_sensors_configured: "Датчики не настроены",
    no_unlinked_ha_accounts: "Нет несвязанных учетных записей высокой доступности.",
    no_users: "Нет зарегистрированных пользователей",
    none_selected: "Ничего не выбрано",
    notif_desc: "Мобильные push-уведомления о критических событиях.",
    notif_no_services: "Службы мобильных уведомлений недоступны.",
    notification_armed: "Пользователь {user} поставил систему на охрану в режиме {mode}.",
    notification_disarmed: "Пользователь {user} снял систему с охраны.",
    notifications_title: "Уведомления",
    open_sensors: "Открытые датчики",
    open_sensors_explain: "Следующие датчики открыты:\\\\n{имена}\\\\n\\\\nЗакройте их перед постановкой на охрану или включите обход.",
    panic_state_unknown: "Не удалось определить предыдущее состояние тревоги.",
    panic_stop_error: "Не удалось выключить будильник: {ошибка}",
    panic_stopped: "Сигнализация отключена; восстановленное состояние {state}",
    pending: "В ожидании",
    pin_active_no: "Нет активного PIN",
    pin_active_yes: "PIN Активен",
    pin_deleted: "PIN-код удален.",
    pin_desc: "Код безопасности от 4 до 8 цифр.",
    pin_disarm_error: "Неправильный PIN-код или ошибка снятия с охраны",
    pin_incorrect: "Неправильный PIN-код",
    pin_management: "🔑 Управление PIN-кодами",
    pin_master_title: "Мастер-PIN",
    pin_mismatch: "PIN-коды не совпадают",
    pin_modal_desc: "Введите свой PIN-код безопасности, чтобы продолжить.",
    pin_placeholder: "••••",
    pin_remove_hint: "Оставьте поле пустым, чтобы удалить главный PIN-код.",
    pin_reset_admin_only: "Только администраторы могут сбросить PIN-код.",
    pin_reset_confirm: "Сбросить PIN-код?",
    pin_updated: "PIN-код успешно обновлен",
    profile_is_yours: "Ваш профиль",
    profile_needs_pin: "Для этого профиля требуется PIN-код доступа.",
    profile_no_pin_access: "Бесплатный доступ без PIN-кода.",
    remove_btn: "Удалить",
    reset_btn: "Сброс до заводских настроек",
    reset_confirm: "Сбросить Аргус к заводским настройкам? Все конфигурации и PIN-коды будут потеряны.",
    reset_dashboard: "Сбросить макет",
    reset_error: "Ошибка сброса: {error}",
    reset_error_auth: "Для сброса требуется аутентификация.",
    reset_success: "Аргус успешно перезагружен.",
    reset_widget: "Сбросить виджет",
    retry_action: "Повторить попытку",
    role_argus_admin: "Администратор Аргуса",
    role_argus_admin_short: "Админ",
    role_argus_standard: "Стандартный пользователь",
    role_argus_user: "Стандартный пользователь",
    role_argus_user_short: "Пользователь",
    rules_tip: "Совет по автоматизации",
    save_btn: "Сохранить",
    save_config: "💾 Сохранить режим",
    save_mode: "Режим сохранения",
    save_notif: "Сохранить уведомления",
    save_user: "Сохранить пользователя",
    saved: "✓ Сохранено",
    search_placeholder: "Поиск устройства или объекта…",
    search_select: "Ищите и выбирайте…",
    searching_auto: "Поиск средств автоматизации…",
    select_all: "Выбрать все",
    select_btn: "+ Выбрать",
    select_entry_sensors: "+ Выбрать входные датчики",
    select_profile_subtitle: "Выберите свой профиль пользователя",
    select_profile_title: "Доступ к профилям",
    selected_lbl: "Выбрано",
    selector_accept: "Принимать",
    selector_clear: "Очистить выбор",
    selector_close: "Закрывать",
    selector_panic: "🚨 Экстренные выходы SOS",
    sensor_section: "Датчики проникновения",
    sensors_to_bypass: "Датчики для обхода",
    settings: "⚙️ Настройки",
    setup_access_pin: "PIN-код доступа к панели Argus (необязательно)",
    setup_admin_name: "Имя администратора",
    setup_master_pin: "Главный PIN-код для постановки/снятия с охраны (опционально)",
    setup_required_action: "Настройка Argus в интеграциях",
    setup_required_desc: "Argus установлен, но экземпляр еще не создан.",
    setup_required_title: "Требуется настройка Argus",
    siren_section: "Сирены",
    size: "Размер",
    slide_disarm: "Сдвиньте для снятия охраны",
    slide_sos: "Сдвиньте для включения SOS",
    slide_sos_stop: "Сдвиньте для остановки SOS",
    sos_actions: "🚨 SOS-действия",
    sos_activated: "SOS активирован",
    sos_call: "Позвоните в службу экстренной помощи",
    sos_call_confirm: "Позвонить в местную службу экстренной помощи ({номер})?",
    sos_call_help: "Если это устройство не может совершать телефонные звонки, Argus отправит критическое уведомление.",
    sos_confirm_text: "Сдвиньте, чтобы немедленно включить аварийную сигнализацию.",
    sos_confirm_title: "🚨 Включить экстренную сигнализацию?",
    sos_error: "Не удалось вызвать SOS: {ошибка}",
    sos_no_outputs: "Устройства аварийного вывода не выбраны",
    sos_outputs_help: "Эти устройства всегда включаются при срабатывании SOS.",
    sos_select_outputs: "Выберите свет, сирены или сцены",
    sos_slide: "Слайд для вызова SOS",
    sos_stop: "ОСТАНОВИТЬ SOS",
    status_away: "Прочь",
    status_closed: "ЗАКРЫТО",
    status_home: "Дом",
    status_idle: "Ожидание",
    status_open: "ОТКРЫТО",
    status_recording: "Запись",
    support_title: "Статус и поддержка",
    switch_profile_btn: "👤 Сменить профиль",
    sync_panel_help: "Состояние синхронизации с внешними панелями сигнализации.",
    sync_panel_section: "Внешние панели сигнализации",
    system_armed: "СИСТЕМА НА ОХРАНЕ",
    system_disarmed: "СИСТЕМА СНЯТА С ОХРАНЫ",
    system_triggered: "ТРЕВОГА СРАБОТАЛА!",
    temp_auto: "Автоматическая температура",
    temp_displayed: "Текущая температура",
    temp_notification_title: "Аргус — оповещение о температуре",
    temp_thermostat: "Термостат",
    thermostat_alert_notif: "Оповещение термостата",
    times_section: "⏱️ Таймеры",
    triggered: "Сработала сигнализация!",
    unavailable: "Недоступно",
    undo_error: "Не удалось отменить сброс: {ошибка}",
    undo_reset: "Отменить сброс",
    undo_reset_btn: "Отменить сброс",
    undo_success: "Сброс успешно отменен.",
    unlinked_ha_accounts_title: "Аккаунты домашнего помощника",
    unlock_kiosk: "Разблокировать киоск",
    update_pin: "Обновить PIN-код",
    upload_error: "Ошибка загрузки.",
    url_placeholder: "Фоновый URL…",
    use_for_hub: "Использовать для концентратора",
    use_for_panel: "Использование для панели",
    use_ha_language: "Использовать язык Home Assistant",
    user_default: "Пользователь",
    user_exp_date: "Дата и время истечения срока действия",
    user_exp_type: "Тип срока действия",
    user_no_pin: "Нет PIN-кода доступа",
    user_pin: "PIN-код доступа",
    user_pin_action: "Установить PIN-код",
    user_required: "Требуется имя и PIN-код.",
    user_role_action: "Изменить роль",
    user_role_label: "Роль пользователя",
    username: "Имя пользователя",
    users_title: "👥 Пользователи и контроль доступа",
    vacation: "Отпуск",
    wait_if_open: "Ждать закрытия датчиков",
    waiting_sensors: "ОЖИДАНИЕ ДАТЧИКОВ",
    waiting_sensors_count: "ОЖИДАНИЕ ДАТЧИКОВ: {count}",
    weather_auto: "Автоматическое определение погоды",
    weather_source: "Погода",
    welcome_greeting: "Добро пожаловать!",
    welcome_profile: "Добро пожаловать, {имя}",
    wrong_pin: "Неправильный PIN-код"
  }
}, Tu = document.createElement("template");
Tu.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

#widget-grid.hide-legacy > section.panel:not(#w-instances) { display: none !important; }

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
    --primary-text-color: #fff !important;
    --secondary-text-color: rgba(255, 255, 255, 0.7);
    --input-bg: rgba(255, 255, 255, 0.04);
    --input-border: rgba(255, 255, 255, 0.12);
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
    height: auto !important;
  }
  :host(.fullscreen-active) .hero {
    display: none !important;
  }
  :host(.fullscreen-active) .grid {
    display: block !important;
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
    gap: 0 !important;
  }
  :host(.fullscreen-active) .hero,
  :host(.fullscreen-active) .panel-head,
  :host(.fullscreen-active) .dashboard-instances > .panel-head,
  :host(.fullscreen-active) #h-instances,
  :host(.fullscreen-active) .argus-dashboard,
  :host(.fullscreen-active) .argus-dashboard__toolbar,
  :host(.fullscreen-active) .argus-dashboard__feedback,
  :host(.fullscreen-active) .argus-widget__edit-header,
  :host(.fullscreen-active) .argus-widget:not(:has(.ios-fullscreen)),
  :host(.fullscreen-active) section:not(:has(.ios-fullscreen)):not(#w-instances),
  :host(.fullscreen-active) .personalize-section,
  :host(.fullscreen-active) .grid > .stack:not(:first-child),
  :host(.fullscreen-active) .grid > .stack:first-child > section:not(:first-child) {
    display: none !important;
    visibility: hidden !important;
  }
  :host(.fullscreen-active) #entries {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  :host(.fullscreen-active) #entries > .entry:not(.ios-fullscreen) {
    display: none !important;
  }
  :host(.fullscreen-active) #entries > .entry.ios-fullscreen {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 0 !important;
    border: none !important;
    z-index: 99999999 !important;
    background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;
  }

  #argus-fullscreen-stage {
    display: none;
    position: fixed !important;
    inset: 0 !important;
    z-index: 999999999 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    background: #02050a !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  :host(.fullscreen-active) #argus-fullscreen-stage {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  #argus-fullscreen-stage .entry.ios-fullscreen {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    max-width: none !important;
    max-height: none !important;
    aspect-ratio: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    z-index: 999999999 !important;
  }

  .liquid-glass {
    background: linear-gradient(135deg,color-mix(in srgb,rgba(255,255,255,0.18) 80%,transparent),rgba(255,255,255,0.04));
    backdrop-filter: blur(28px) saturate(180%) brightness(1.08);
    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.08);
    border: 1px solid rgba(255,255,255,0.22);
    box-shadow: 0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.25);
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
  }
  .wrap { position: relative; z-index: 1; transition: filter 0.35s ease, opacity 0.35s ease; opacity: 0; pointer-events: none; }
  .wrap.wrap-ready { opacity: 1; pointer-events: auto; }
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
  .x-never-match ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.08);
  }
  .x-never-match ::-webkit-scrollbar-thumb:hover {
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

  :host{display:block;min-height:100vh;box-sizing:border-box;--primary-text-color:#ffffff!important;--secondary-text-color:rgba(255,255,255,0.7)!important;color:#ffffff!important;background:var(--lovelace-background,var(--primary-background-color));font-family:'Outfit',Inter,system-ui,sans-serif}
  :host([compact]), :host(.argus-compact) {
    min-height: auto !important;
    background: transparent !important;
  }
  :host([compact]) .wrap, :host(.argus-compact) .wrap {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    height: auto !important;
    min-height: fit-content !important;
    gap: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    flex: 1 1 auto !important;
    overflow: visible !important;
    container-type: inline-size;
    container-name: argus-compact-wrap;
  }
  :host([compact]) .hero, :host(.argus-compact) .hero {
    display: none !important;
  }
  :host([compact]) #argus-canvas-bg, :host(.argus-compact) #argus-canvas-bg {
    display: none !important;
  }
  :host([compact]) .tabs, :host(.argus-compact) .tabs {
    display: none !important;
  }
  :host([compact]) .dashboard-instances .panel-head, :host(.argus-compact) .dashboard-instances .panel-head {
    display: none !important;
  }
  :host([compact]) .personalize-section, :host(.argus-compact) .personalize-section {
    display: none !important;
  }
  :host([compact]) .glass.panel:not(#w-instances), :host(.argus-compact) .glass.panel:not(#w-instances) {
    display: none !important;
  }
  :host([compact]) .argus-widget:not(:has(#w-instances)), :host(.argus-compact) .argus-widget:not(:has(#w-instances)) {
    display: none !important;
  }
  :host([compact]) .argus-dashboard__toolbar, :host(.argus-compact) .argus-dashboard__toolbar {
    display: none !important;
  }
  :host([compact]) #widget-grid, :host(.argus-compact) #widget-grid {
    padding: 0 !important;
    margin: 0 !important;
    display: block !important;
    height: auto !important;
  }
  :host([compact]) #w-instances, :host(.argus-compact) #w-instances {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    height: auto !important;
    width: 100% !important;
    min-height: fit-content !important;
    display: flex !important;
    flex-direction: column !important;
    flex: 1 1 auto !important;
    overflow: visible !important;
    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;
    backdrop-filter: blur(28px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;
  }
  :host([compact]) .entry, :host(.argus-compact) .entry {
    margin-bottom: 0 !important;
    border-radius: 24px !important;
    height: auto !important;
    width: 100% !important;
    min-height: fit-content !important;
    display: flex !important;
    flex-direction: column !important;
    flex: 1 1 auto !important;
    overflow: visible !important;
    background: var(--liquid-glass-bg, linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))) !important;
    backdrop-filter: blur(28px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(28px) saturate(150%) !important;
  }
  :host([compact]) #bootstrap-overlay, :host(.argus-compact) #bootstrap-overlay,
  :host([compact]) .argus-profile-overlay, :host(.argus-compact) .argus-profile-overlay,
  :host([compact]) .argus-welcome-screen, :host(.argus-compact) .argus-welcome-screen {
    display: none !important;
  }
  :host([compact]) .argus-widget__content, :host(.argus-compact) .argus-widget__content {
    height: auto !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    flex: 1 1 auto !important;
    overflow: visible !important;
  }
  :host([compact]) #entries, :host(.argus-compact) #entries {
    display: flex !important;
    flex-direction: column !important;
    flex: 1 1 auto !important;
    height: auto !important;
    width: 100% !important;
    margin: 0 !important;
    overflow: visible !important;
  }
  *{box-sizing:border-box}
  @container argus-compact-wrap (max-width: 800px) {
    .security-console { flex-direction: column !important; padding: 20px 18px 24px !important; gap: 20px !important; align-items: center !important; justify-content: center !important; }
    .security-console .entry-icon { order: 2 !important; flex: 0 0 auto !important; min-height: 130px !important; margin: 0 auto !important; }
    .security-console .liquid-stack { order: 3 !important; width: 100% !important; max-width: 360px !important; }
    .security-console .console-sensors { order: 4 !important; width: 100% !important; max-width: 360px !important; display: flex !important; flex-direction: column !important; }
    .sensor-column { position: static !important; max-width: 100% !important; width: 100% !important; align-items: stretch !important; padding: 0 !important; gap: 10px !important; }
    .sensor-chip { max-width: none !important; }
    .entry-content { padding: 20px !important; display: flex !important; flex-direction: column !important; align-items: center !important;  }
    .liquid-stack { display: flex !important; flex-direction: column !important; align-items: stretch !important; gap: 8px !important; }
  }
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
  .hero{position:relative!important;z-index:9999!important;overflow:visible!important;padding:32px 36px;display:flex;align-items:center;justify-content:space-between;gap:20px;background:var(--hero-bg, linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)));margin-bottom:12px;will-change:transform,opacity;animation:heroSpringSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both}
  .hero-left{display:flex;align-items:center;gap:22px}
  .hero-context{position:relative!important;z-index:10000!important;overflow:visible!important;margin-left:auto;display:flex;align-items:center;gap:8px;min-width:0}
  #hero-profile-container{position:relative!important;z-index:10001!important;overflow:visible!important}
  .hero-profile-dropdown{position:absolute!important;top:calc(100% + 12px)!important;right:0!important;z-index:999999!important;max-height:calc(100vh - 100px)!important;overflow-y:auto!important;background:#0f172a!important;background-color:#0f172a!important;border:1.5px solid rgba(255,255,255,0.2)!important;box-shadow:0 24px 60px rgba(0,0,0,0.85),inset 0 1px 0 rgba(255,255,255,0.15)!important;backdrop-filter:blur(48px) saturate(200%)!important;-webkit-backdrop-filter:blur(48px) saturate(200%)!important;opacity:1!important}.hero-clock{display:flex;flex-direction:column;align-items:flex-end;padding-right:14px;border-right:1px solid rgba(255,255,255,.14);line-height:1}.hero-clock strong{font-size:1.45rem;letter-spacing:-.05em}.hero-clock span{font-size:10px;opacity:.65;margin-top:5px;text-transform:uppercase;letter-spacing:.08em}.hero-pills{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.hero-pill{display:inline-flex;align-items:center;gap:5px;padding:7px 10px;border:1px solid rgba(255,255,255,.15);border-radius:999px;background:rgba(7,16,29,.27);box-shadow:inset 0 1px 0 rgba(255,255,255,.15);backdrop-filter:blur(14px);font-size:10px;font-weight:800;white-space:nowrap}.hero-pill .hero-live{width:7px;height:7px;border-radius:50%;background:#55df91;box-shadow:0 0 9px #55df91}
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
  .personalize-row .setting-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-bottom: 4px; }

  /* Mode Reorganization Styles — HORIZONTAL */
  .mode-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }
  @media(max-width:900px){ .mode-grid-layout { grid-template-columns: 1fr; } }
  .mode-section-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.025) 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    border-radius: 20px !important;
    padding: 18px !important;
    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;
    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.22) !important;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  }
  .mode-section-card:hover {
    border-color: rgba(255, 255, 255, 0.26) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.04) 100%) !important;
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;
    transform: translateY(-2px) !important;
  }
  .mode-section-card:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); }
  .mode-section-title { font-size: 13px; font-weight: 800; color: var(--primary-color, #007aff); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; display: flex; align-items: center; gap: 8px; }
  .mode-sensor-grid { color: var(--primary-text-color, #fff); }
  .mode-sensor-none { color: var(--primary-text-color, rgba(255,255,255,0.5)); opacity: 0.6; font-size: 13px; }
  .mode-section-card span, .mode-section-card label, .mode-section-card .input-label { color: var(--primary-text-color, #fff); }

  .sensor-pill { background: var(--pill-bg, rgba(255,255,255,0.06)); color: var(--pill-text, #fff); border: 1px solid var(--pill-border, rgba(255,255,255,0.1)); padding: 8px 14px; border-radius: 14px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; transition: all 0.2s; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  @keyframes argus-blink-red { 0%,100%{box-shadow:0 0 0 0 rgba(255,50,50,0);background:var(--pill-bg,rgba(255,255,255,0.06))} 50%{box-shadow:0 0 0 6px rgba(255,50,50,0.25);background:rgba(255,50,50,0.15)} }
  .sensor-pill.siren-active   { animation: argus-blink-red 1.2s ease-in-out infinite; border-color: rgba(255,82,82,0.5) !important; }
  .sensor-pill.triggered-sensor { animation: argus-blink-red 0.9s ease-in-out infinite; border-color: rgba(255,82,82,0.6) !important; }
  .icon-btn { background: none; border: none; padding: 4px; color: inherit; opacity: 0.6; cursor: pointer; transition: opacity 0.2s, transform 0.15s; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
  .icon-btn:active { transform: scale(0.9); }

  #mode-status { opacity: 0; transition: opacity .35s; }
  #mode-status.show { opacity: 1; }
  #mode-status.ok  { color: #4caf50; }
  #mode-status.err { color: #f44336; }

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
  .input-label { font-size: 12px; font-weight: 700; opacity: 0.7; margin-left: 4px; }

  /* Intelligent Entry Card */
  .entry {
    position: relative;
    overflow: hidden;
    border-radius: 28px !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%) !important;
    backdrop-filter: blur(32px) saturate(170%) brightness(1.08) !important;
    -webkit-backdrop-filter: blur(32px) saturate(170%) brightness(1.08) !important;
    margin-bottom: 16px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
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
  .security-console .liquid-stack{order:1;flex:1 1 280px;max-width:360px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.security-console .liquid-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:68px;text-align:center;padding:10px 4px;font-size:11.5px;font-weight:800;gap:4px;white-space:normal;line-height:1.15;word-break:normal}.security-console .liquid-btn span:last-child{min-width:0;overflow:visible;text-overflow:clip;white-space:normal;text-align:center}.security-console .btn-disarm,.security-console .btn-sos{grid-column:1/-1}
  .console-sensors{order:3;flex:1 1 300px;max-width:400px;display:grid;gap:14px;align-content:center}.console-sensor{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:13px 16px;border:1px solid rgba(255,255,255,.15);border-radius:18px;background:linear-gradient(100deg,rgba(36,188,129,.22),rgba(10,27,38,.58));backdrop-filter:blur(18px);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 8px 22px rgba(0,0,0,.22)}.console-sensor.open{background:linear-gradient(100deg,rgba(235,74,67,.30),rgba(34,14,23,.62));border-color:rgba(255,102,92,.7)}.console-sensor-icon{font-size:20px}.console-sensor-name{font-weight:850;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.console-sensor-state{font-size:11px;font-weight:900;text-transform:uppercase;color:#75f4b0}.console-sensor.open .console-sensor-state{color:#ff968b}.console-empty{padding:24px;text-align:center;border:1px dashed rgba(255,255,255,.22);border-radius:18px;opacity:.75}
  .console-keypad{flex:1 1 220px;max-width:280px;padding:18px;border:1px solid rgba(255,255,255,.16);border-radius:24px;background:rgba(5,15,30,0.4);backdrop-filter:blur(16px);display:grid;gap:12px}.console-keypad-title{font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;text-align:center}.console-keypad-close{position:absolute;top:8px;right:10px;width:28px;height:28px;border:0;border-radius:50%;background:rgba(255,255,255,.1);color:#fff;font-size:20px;line-height:1;cursor:pointer}.console-keypad{position:relative}.console-pin-display{width:100%;box-sizing:border-box;padding:11px;border-radius:14px;border:1px solid rgba(255,255,255,.18);background:rgba(4,14,26,.46);color:#fff;text-align:center;font-size:20px;letter-spacing:.35em}.console-pad{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;place-items:center}.console-pad button{width:100%;aspect-ratio:1/1;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:linear-gradient(145deg,rgba(165,220,255,.24),rgba(20,45,66,.62));color:#fff;font-size:17px;font-weight:800;box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 6px 14px rgba(0,0,0,.25);cursor:pointer;display:flex;align-items:center;justify-content:center}.console-pad .console-enter{border-radius:16px;aspect-ratio:auto;height:100%;color:#7ff8c1;border-color:rgba(74,230,157,.65)}.console-keypad small{text-align:center;opacity:.7}.console-pin-status{min-height:1.2em;margin:0;color:#ffb4ac;opacity:0;transition:opacity .18s ease}.console-pin-status.visible{opacity:1}
  /* ── Console HUD header (inside the flex layout, not absolute) ──────── */
  .console-hud{order:0;flex:0 0 100%;display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:rgba(0,0,0,0.25);border-radius:14px;backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);gap:12px;flex-wrap:wrap}
  .console-hud-loc{font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:1.2px;opacity:.9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .console-hud-right{display:flex;align-items:center;gap:10px;flex-shrink:0}

  /* ── System Status Badge ─────────────────────────────── */
  .console-system-badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 14px;
    border-radius: 999px;
    font-size: 10.5px;
    font-weight: 900;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    white-space: nowrap;
    backdrop-filter: blur(16px) saturate(160%);
    -webkit-backdrop-filter: blur(16px) saturate(160%);
    border: 1.5px solid currentColor;
    transition: all 0.35s ease;
  }
  .console-system-badge--disarmed {
    color: #6ee7b7;
    background: rgba(16,185,129,0.18);
    border-color: rgba(16,185,129,0.60);
    box-shadow: 0 0 16px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
  }
  .console-system-badge--armed_home {
    color: #fde68a;
    background: rgba(251,140,0,0.20);
    border-color: rgba(251,140,0,0.60);
    box-shadow: 0 0 16px rgba(251,140,0,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
  }
  .console-system-badge--armed_away {
    color: #fca5a5;
    background: rgba(229,57,53,0.20);
    border-color: rgba(229,57,53,0.60);
    box-shadow: 0 0 16px rgba(229,57,53,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
  }
  .console-system-badge--armed_night {
    color: #bfdbfe;
    background: rgba(30,136,229,0.20);
    border-color: rgba(30,136,229,0.60);
    box-shadow: 0 0 16px rgba(30,136,229,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
  }
  .console-system-badge--armed_vacation {
    color: #e9d5ff;
    background: rgba(156,39,176,0.20);
    border-color: rgba(156,39,176,0.60);
    box-shadow: 0 0 16px rgba(156,39,176,0.25), inset 0 1px 0 rgba(255,255,255,0.18);
  }
  .console-system-badge--triggered {
    color: #fff;
    background: rgba(239,68,68,0.35);
    border-color: rgba(239,68,68,0.80);
    box-shadow: 0 0 24px rgba(239,68,68,0.60), inset 0 1px 0 rgba(255,255,255,0.25);
    animation: badgeFlash 0.8s infinite ease-in-out;
  }
  @keyframes badgeFlash {
    0%,100% { opacity:1; box-shadow:0 0 24px rgba(239,68,68,.8); }
    50%      { opacity:0.7; box-shadow:0 0 8px rgba(239,68,68,.2); }
  }
  /* arming state reuses armed_home styling with pulsing */
  .console-system-badge--arming {
    color: #fde68a;
    background: rgba(251,140,0,0.20);
    border-color: rgba(251,140,0,0.60);
    animation: badgeArming 1.05s ease-in-out infinite;
  }
  @keyframes badgeArming {
    0%,100% { opacity:0.65; } 50% { opacity:1; }
  }
  .console-hud-time{font-size:16px;font-weight:800;letter-spacing:-.02em}
  .console-hud-temp{font-size:11px;opacity:.8;font-weight:700}
  .console-hud-temps{display:flex;gap:6px;flex-wrap:wrap;align-items:center}
  .console-hud-tpill{font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.12)}
  /* Hide the floating absolute HUD inside security-console to avoid overlap with sensor list */
  .security-console .hud,.ios-fullscreen .entry-content.security-console ~ .hud,.entry-content.security-console + .hud{display:none!important}
  /* The .hud inside the article gets hidden when the content is a security-console */
  @media(max-width:950px){
    .grid{grid-template-columns:1fr;grid-template-areas:"instances" "activity" "modes" "access" "automations" "backup" "github"}
    .security-console{flex-direction:column;padding:12px 14px 20px;gap:16px}
    .security-console .console-hud{order:1!important;width:100%!important;display:flex!important;flex-wrap:wrap!important;justify-content:space-between!important;align-items:center!important;gap:8px!important;padding:8px 12px!important;box-sizing:border-box!important}
    .security-console .console-hud-loc{flex:1 1 auto!important;max-width:calc(100% - 130px)!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;font-size:11px!important}
    .security-console .argus-connection-pill{flex:0 0 auto!important;font-size:10.5px!important}
    .security-console .console-hud-right{flex:0 0 100%!important;display:flex!important;justify-content:center!important;margin-top:2px!important}
    .security-console .entry-icon{order:2!important;flex:0 0 auto!important;min-height:130px!important}
    .security-console .liquid-stack{order:3!important;width:100%!important;max-width:440px!important;margin:0 auto!important;display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}
    .security-console .liquid-stack .btn-disarm,.security-console .liquid-stack .btn-sos{grid-column:1/-1!important}
    .security-console .console-sensors{order:4!important;width:100%!important;max-width:440px!important;margin:0 auto!important}
    .console-keypad{width:100%;max-width:320px}
  }

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
  .liquid-btn {
    border: 1px solid rgba(255, 255, 255, 0.20) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.04) 100%) !important;
    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;
    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;
    color: #ffffff !important;
    padding: 14px 18px;
    border-radius: 18px !important;
    font-size: 13.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: left;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.32) !important;
    transition: all 0.22s cubic-bezier(0.25, 0.8, 0.25, 1);
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    letter-spacing: 0.5px;
  }
  .liquid-btn:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.08) 100%) !important;
    border-color: rgba(255, 255, 255, 0.36) !important;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.45) !important;
    transform: translateY(-2px);
  }
  .btn-sos {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.32) 0%, rgba(185, 28, 28, 0.45) 100%) !important;
    border: 1px solid rgba(252, 165, 165, 0.45) !important;
    box-shadow: 0 10px 28px rgba(239, 68, 68, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
  }
  .btn-sos:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.48) 0%, rgba(185, 28, 28, 0.65) 100%) !important;
    box-shadow: 0 14px 34px rgba(239, 68, 68, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.45) !important;
    transform: translateY(-2px);
  }
  .mode-btn-icon{width:26px;height:26px;padding:5px;border-radius:10px;flex:0 0 auto;background:linear-gradient(135deg,rgba(255,255,255,.24),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 4px 10px rgba(0,0,0,.16);filter:drop-shadow(0 2px 4px rgba(0,0,0,.2))}
  .liquid-btn.active .mode-btn-icon{background:linear-gradient(135deg,rgba(255,255,255,.36),rgba(255,255,255,.12));border-color:rgba(255,255,255,.42)}
  .btn-sos .mode-btn-icon{width:28px;height:28px;border-radius:11px;background:rgba(255,255,255,.17)}
  .liquid-btn:not(.btn-home):not(.btn-away):not(.btn-night):not(.btn-vacation):not(.btn-disarm):not(.btn-sos):hover{background:rgba(255,255,255,0.14);border-color:rgba(255,255,255,0.2)}
  .liquid-btn.active{background:var(--btn-bg, rgba(255,255,255,0.2));border-color:rgba(255,255,255,0.4);box-shadow:0 8px 24px var(--btn-shadow, rgba(255,255,255,0.12))}
  .liquid-btn:active:not(:disabled) { transform: scale(0.96); }
  .liquid-btn i{font-size:16px}

  .btn-home {
    background: linear-gradient(135deg, rgba(251, 140, 0, 0.20) 0%, rgba(251, 140, 0, 0.06) 100%) !important;
    border: 1px solid rgba(251, 140, 0, 0.38) !important;
    color: #ffe0b2 !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  }
  .btn-home.active {
    background: linear-gradient(135deg, #fb8c00 0%, #d97706 100%) !important;
    border: 1px solid rgba(254, 215, 170, 0.85) !important;
    box-shadow: 0 14px 36px rgba(251, 140, 0, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
    color: #ffffff !important;
    transform: translateY(-2px);
  }

  .btn-away {
    background: linear-gradient(135deg, rgba(229, 57, 53, 0.20) 0%, rgba(229, 57, 53, 0.06) 100%) !important;
    border: 1px solid rgba(229, 57, 53, 0.38) !important;
    color: #ffcdd2 !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  }
  .btn-away.active {
    background: linear-gradient(135deg, #e53935 0%, #b91c1c 100%) !important;
    border: 1px solid rgba(254, 202, 202, 0.85) !important;
    box-shadow: 0 14px 36px rgba(229, 57, 53, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
    color: #ffffff !important;
    transform: translateY(-2px);
  }

  .btn-night {
    background: linear-gradient(135deg, rgba(30, 136, 229, 0.20) 0%, rgba(30, 136, 229, 0.06) 100%) !important;
    border: 1px solid rgba(30, 136, 229, 0.38) !important;
    color: #bbdefb !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  }
  .btn-night.active {
    background: linear-gradient(135deg, #1e88e5 0%, #1d4ed8 100%) !important;
    border: 1px solid rgba(191, 219, 254, 0.85) !important;
    box-shadow: 0 14px 36px rgba(30, 136, 229, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
    color: #ffffff !important;
    transform: translateY(-2px);
  }

  .btn-vacation {
    background: linear-gradient(135deg, rgba(156, 39, 176, 0.20) 0%, rgba(156, 39, 176, 0.06) 100%) !important;
    border: 1px solid rgba(156, 39, 176, 0.38) !important;
    color: #e1bee7 !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  }
  .btn-vacation.active {
    background: linear-gradient(135deg, #9c27b0 0%, #7e22ce 100%) !important;
    border: 1px solid rgba(245, 208, 254, 0.85) !important;
    box-shadow: 0 14px 36px rgba(156, 39, 176, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
    color: #ffffff !important;
    transform: translateY(-2px);
  }

  .btn-disarm {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.05) 100%) !important;
    border: 1px solid rgba(16, 185, 129, 0.35) !important;
    color: #a7f3d0 !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
    margin-top: 4px;
  }
  .btn-disarm.active {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
    border: 1px solid rgba(167, 243, 208, 0.85) !important;
    box-shadow: 0 14px 36px rgba(16, 185, 129, 0.60), inset 0 1px 0 rgba(255, 255, 255, 0.55) !important;
    color: #ffffff !important;
    transform: translateY(-2px);
  }

  .btn-sos {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.22) 0%, rgba(185, 28, 28, 0.08) 100%) !important;
    border: 1px solid rgba(252, 165, 165, 0.35) !important;
    color: #fca5a5 !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
  }
  .btn-sos.active, .btn-sos.flashing {
    animation: sosFlashingPulse 0.8s infinite ease-in-out !important;
  }

  @keyframes sosFlashingPulse {
    0%, 100% {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
      border-color: #fca5a5 !important;
      color: #ffffff !important;
      box-shadow: 0 0 32px rgba(239, 68, 68, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
      transform: scale(1.02);
    }
    50% {
      background: linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%) !important;
      border-color: rgba(239, 68, 68, 0.5) !important;
      color: rgba(255, 255, 255, 0.8) !important;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
      transform: scale(0.98);
    }
  }
  /* btn-disarm visual is handled by .btn-disarm and .btn-disarm.active above */

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
  .ios-fullscreen .entry-content { grid-template-columns: 320px 1fr !important; padding: 60px !important; gap: 60px !important; height: auto !important; align-items: center !important; background: radial-gradient(circle at 20% 50%, rgba(0,0,0,0.5) 0%, transparent 80%) !important; }
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
    .hero-context{width:100%;margin:6px 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}.hero-clock{align-items:center;justify-content:center;text-align:center;border-right:0;padding-right:0}.hero-clock strong{font-size:1.35rem;text-align:center}.hero-clock span{text-align:center}.hero-pills{justify-content:center}.hero-pill{padding:6px 8px;font-size:9px}
    .entry{min-height:0;border-radius:24px}
    .instance-activity-strip{grid-template-columns:1fr;gap:5px;margin-bottom:12px;padding:10px}.instance-activity-item:nth-of-type(n+3){display:none}
    .entry-status-ribbon{top:58px;left:14px;max-width:calc(100% - 28px);padding:6px 9px}.entry-status-name{font-size:11px}.entry-status-event{display:none}
    .entry-content{display:grid;grid-template-columns:minmax(0,1fr);padding:78px 14px 76px;gap:14px;align-items:start;background:linear-gradient(180deg,rgba(0,0,0,.32),rgba(0,0,0,.10) 45%,rgba(0,0,0,.28))}
    .liquid-stack{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;width:100%}
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
    .ios-fullscreen .liquid-stack{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:9px!important}
    .ios-fullscreen .liquid-btn{min-height:50px!important;padding:10px!important;font-size:12px!important;border-radius:16px!important;gap:6px!important}
    .ios-fullscreen .liquid-stack .btn-disarm,.ios-fullscreen .liquid-stack .btn-sos{grid-column:1/-1}

    .ios-fullscreen .entry-icon{display:none!important}
    .ios-fullscreen .sensor-column{position:static!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;width:auto!important;padding:0!important;gap:8px!important}
    .ios-fullscreen .sensor-chip{max-width:none!important;padding:8px 9px!important;font-size:10px!important}
    .ios-fullscreen .hud{top:12px!important;left:16px!important;right:16px!important;scale:1!important;transform:none!important}
  }
  @media(max-width:900px) and (orientation:landscape){
    .ios-fullscreen .entry-content{grid-template-columns:minmax(210px,34vw) minmax(0,1fr)!important;padding:54px 22px 18px!important;gap:20px!important;align-items:center!important}
    .ios-fullscreen .liquid-stack{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important}
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
  .ios-fullscreen .entry-content.security-console .liquid-stack{order:1!important;flex:0 1 340px!important;min-width:240px!important;max-width:360px!important;display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;align-self:center!important}
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
  .pin-input{font-size:28px;letter-spacing:10px;text-align:center;padding:12px;border-radius:16px;border:none;background:rgba(255,255,255,0.02);color:inherit;width:100%;outline:none;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2)}
  .pin-error{color:var(--error-color,#e53935);font-size:13px;min-height:18px;text-align:center}
  .pin-grid{display:grid;grid-template-columns:repeat(3,68px);gap:16px;justify-content:center;margin-top:10px}
  .pin-btn-round{width:68px;height:68px;border-radius:50% !important;border:1px solid rgba(255,255,255,0.1) !important;background:rgba(255,255,255,0.04) !important;color:#fff !important;font-size:24px;font-weight:600;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s, transform 0.15s, border-color 0.2s;box-shadow:0 4px 10px rgba(0,0,0,0.15);padding:0 !important;outline:none}
  .pin-btn-round:hover{background:rgba(255,255,255,0.12) !important;border-color:rgba(255,255,255,0.2) !important}
  .pin-btn-round:active{transform:scale(0.92) !important;background:rgba(255,255,255,0.2) !important}
  .pin-btn-round.action-key{font-size:12px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;border-color:transparent !important;background:transparent !important;box-shadow:none}
  .pin-btn-round.action-key:hover{background:rgba(255,255,255,0.05) !important}
  .pin-btn-round.action-key.enter-key{color:#34c759 !important}
  .pin-btn-round.action-key.delete-key{color:#ff3b30 !important}
  /* User card */
  .user-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 18px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.025) 100%) !important;
    backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;
    -webkit-backdrop-filter: blur(28px) saturate(160%) brightness(1.08) !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.20) !important;
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .user-card:hover {
    border-color: rgba(255, 255, 255, 0.25) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%) !important;
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.28) !important;
    transform: translateY(-2px);
  }
  .user-badge{display:inline-block;padding:4px 10px;border-radius:8px;font-size:10.5px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#ffffff!important;border:1px solid rgba(255,255,255,0.18)}
  /* REEMPLAZA los colores neón por tokens legibles */
  .user-badge.admin { background: #d97706 !important; color: #ffffff !important; font-weight: 900 !important; border: 1px solid rgba(255,255,255,0.3) !important; }
  .user-badge.admin_old {
    background: rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.18);
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  .user-badge.user { background: #475569 !important; color: #ffffff !important; font-weight: 800 !important; border: 1px solid rgba(255,255,255,0.2) !important; }
  .user-badge.user_old {
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
  .notif-chip{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);font-size:12px;font-weight:800;color:#ffffff !important}
  .notif-chip button{padding:0 4px;border:0;background:none;cursor:pointer;opacity:.75;color:#ffffff}
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
  .x-never-match input[type="text"],
  .x-never-match input[type="password"],
  .x-never-match input[type="number"],
  .x-never-match input[type="search"],
  .x-never-match select,
  .x-never-match input[type="datetime-local"],
  .x-never-match .glass-control {
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
  .x-never-match .sos-configuration {
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
.x-never-match .lang-pill {
  background:rgba(0,0,0,0.07); border-color:rgba(0,0,0,0.15); color:#1e1e2d;
}

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
.x-never-match .lang-modal-card {
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
.lang-flag { font-size:22px; line-height:1; }
.lang-close-row { display:flex; justify-content:center; margin-top:18px; }
.lang-close-btn {
  padding:9px 28px; border-radius:14px;
  background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15);
  color:#fff; font-size:13px; font-weight:700; cursor:pointer;
  transition:background 0.18s;
}
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
.x-never-match .file-card {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.07);
  color: #1c1c1e;
}
.x-never-match .file-card:hover {
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
.x-never-match .file-card-btn {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
}
.x-never-match .file-card-btn:hover {
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
  background: rgba(0,0,0,0.4); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px);
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 36px 24px;
  max-width: 900px;
  width: 100%;
  justify-content: center;
  animation: argus-grid-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}
@keyframes argus-grid-in {
  from { opacity: 0; transform: scale(0.92) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Cada perfil */
@media (max-width: 950px) and (orientation: landscape) {
  .argus-profile-grid { 
    grid-template-columns: repeat(4, 1fr);
    padding: 16px;
  }
}
@media (max-width: 600px) and (orientation: portrait) {
  .argus-profile-grid { 
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
    gap: 20px 16px;
  }
}
@media (max-width: 380px) and (orientation: portrait) {
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
  width: 120px; height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.18);
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.22s;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.5rem; font-weight: 800;
  color: #fff; overflow: hidden; flex-shrink: 0;
  background: rgba(255,255,255,0.1);
  position: relative;
}
@media (max-width: 600px) and (orientation: portrait) {
  .argus-profile-circle {
    width: 76px; height: 76px;
    font-size: 1.5rem; border-width: 2.5px;
  }
}
@media (max-width: 950px) and (orientation: landscape) {
  .argus-profile-circle {
    width: 84px; height: 84px;
    font-size: 1.8rem; border-width: 2.5px;
  }
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
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(0,0,0,0.75); display: flex;
  align-items: center; justify-content: center;
  font-size: 14px; border: 2px solid rgba(255,255,255,0.2);
}
@media (max-width: 600px) {
  .argus-profile-circle .lock-badge {
    width: 22px; height: 22px; font-size: 11px; border-width: 1.5px;
  }
}

/* Nombre y rol */
.argus-profile-label {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.argus-profile-label .p-name {
  font-size: 1rem; font-weight: 700;
  color: #fff; line-height: 1.2;
  max-width: 140px; overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;
}
.argus-profile-label .p-role {
  font-size: 0.72rem; font-weight: 600;
  color: rgba(255,255,255,0.6);
  margin-top: 4px;
  text-transform: uppercase; letter-spacing: 0.04em;
}
@media (max-width: 600px) {
  .argus-profile-label .p-name { font-size: 0.82rem; max-width: 80px; }
  .argus-profile-label .p-role { font-size: 0.65rem; margin-top: 2px; }
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
#global-status { display: none !important; }
#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}
.argus-instance-duplicate-status{display:none!important}
.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}
.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}
.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}
#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}
@media(max-width:760px){
  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:12px!important;padding:18px 14px!important}
  .hero-left{width:100%!important;min-width:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:8px!important}
  .hero-left>div{text-align:center!important;display:flex!important;flex-direction:column!important;align-items:center!important}
  .hero-left h1,.hero-left p{text-align:center!important;margin:0 auto!important}
  .hero-context{display:flex!important;flex-direction:column!important;width:100%!important;margin:4px 0 0!important;align-items:center!important;justify-content:center!important;gap:8px!important}
  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:3px!important;line-height:1.12!important}
  .hero-clock strong,.hero-clock span,#hero-clock-time,#hero-clock-date{width:100%!important;max-width:100%!important;text-align:center!important;display:block!important;margin:0 auto!important;line-height:1.12!important}
  #hero-profile-container{display:flex!important;justify-content:center!important;align-items:center!important;width:100%!important;margin:2px auto 0!important}
  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}
  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}
  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}
  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}
  .entry:not(.ios-fullscreen) .entry-content.security-console{padding-left:10px!important;padding-right:10px!important}
  .entry:not(.ios-fullscreen) .console-hud{grid-template-columns:minmax(0,1fr)!important;grid-template-areas:'location' 'connection' 'readings'!important;justify-items:center!important;align-items:center!important;gap:8px!important;text-align:center!important}
  .entry:not(.ios-fullscreen) .console-hud-loc,.entry:not(.ios-fullscreen) .argus-connection-pill,.entry:not(.ios-fullscreen) .console-hud-right{width:100%!important;max-width:100%!important;box-sizing:border-box!important;justify-self:center!important;justify-content:center!important;text-align:center!important;margin:0!important}
  .entry:not(.ios-fullscreen) .console-hud-right{display:flex!important;flex-wrap:wrap!important;overflow:visible!important;gap:6px!important}
  .security-console .liquid-stack{grid-template-columns:repeat(3,minmax(0,1fr))!important;align-items:stretch!important}
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
}
  .entry { overflow: hidden; border-radius: 28px; -webkit-mask-image: -webkit-radial-gradient(white, black); }

/* Profile Frosted Glass & Jelly Spring Animation */
@keyframes jellySpringIn{0%{opacity:0;transform:scale(0.7) translateY(-14px)}45%{opacity:1;transform:scale(1.06) translateY(3px)}70%{transform:scale(0.97) translateY(-1px)}88%{transform:scale(1.01) translateY(1px)}100%{opacity:1;transform:scale(1) translateY(0)}}
@keyframes jellySpringOut{0%{opacity:1;transform:scale(1) translateY(0)}35%{opacity:0.95;transform:scale(1.04) translateY(2px)}100%{opacity:0;transform:scale(0.72) translateY(-12px)}}
@keyframes argusSensorArmBlink{0%,100%{border-color:rgba(255,159,10,0.85);box-shadow:0 0 10px rgba(255,159,10,0.5),inset 0 0 6px rgba(255,159,10,0.3);transform:scale(1)}50%{border-color:#ffd60a;box-shadow:0 0 20px 4px rgba(255,214,10,0.85),inset 0 0 12px rgba(255,214,10,0.5);transform:scale(1.02)}}

.hero-profile-dropdown.opening{display:flex!important;animation:jellySpringIn 0.38s cubic-bezier(0.34,1.56,0.64,1) both!important}
.hero-profile-dropdown.closing{display:flex!important;animation:jellySpringOut 0.28s cubic-bezier(0.4,0,0.2,1) both!important;pointer-events:none!important}

/* Dynamic sensor grid with contained scrolling */
.security-console .console-sensors{order:3;flex:1 1 300px;max-width:400px;display:grid;grid-template-columns:1fr;gap:8px;max-height:280px;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;padding-right:4px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.25) transparent}
.security-console .console-sensors.console-sensors--compact,
.security-console .console-sensors[data-count="3"],
.security-console .console-sensors[data-count="4"],
.security-console .console-sensors[data-count="5"],
.security-console .console-sensors[data-count="6"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important}
.security-console .console-sensors.console-sensors--micro,
.security-console .console-sensors[data-count="7"],
.security-console .console-sensors[data-count="8"],
.security-console .console-sensors[data-count="9"],
.security-console .console-sensors[data-count="10"],
.security-console .console-sensors[data-count="11"],
.security-console .console-sensors[data-count="12"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:4px!important}
.console-sensor.sensor-arming-blink,
.console-sensor.argus-blocking{border-color:#ffd60a!important;background:linear-gradient(135deg,rgba(255,149,0,0.38),rgba(255,96,0,0.22))!important;animation:argusSensorArmBlink 0.9s ease-in-out infinite!important;color:#fff!important}

/* Wide spacious SOS selector */
.emergency-number-card{transition:all 0.3s ease}
.sos-configuration #sos-output-chips{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))!important;gap:12px!important;width:100%!important;max-height:none!important;overflow:visible!important}
.sos-output-row{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:10px!important;padding:10px 14px!important;background:rgba(255,255,255,0.06)!important;border:1px solid rgba(255,255,255,0.12)!important;border-radius:12px!important;width:100%!important;box-sizing:border-box!important}
.sos-output-row > .sensor-pill{flex:1!important;min-width:0!important;background:transparent!important;border:none!important;box-shadow:none!important;padding:0!important;font-weight:700!important;font-size:12px!important}

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
<div class="ios-confirm-backdrop" id="sos-modal" style="display:none">
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
    <button class="ios-confirm-cancel" id="btn-cancel-sos" style="margin-top:16px">Cancelar</button>
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
    </div>
  </div>

  <!-- TWO-COLUMN LAYOUT -->
  <div class="grid hide-legacy" id="widget-grid">

    <!-- Instances -->
    <section class="glass panel liquid-glass dashboard-instances" id="w-instances" style="grid-column: 1 / -1;">
        <div class="panel-head">
          <h2 id="h-instances"></h2>
          <div style="display:flex;align-items:center;gap:12px">
            <div id="global-status"></div>
          </div>
        </div>
        <div id="entries"></div>
      </section>

      <!-- Activity log -->
      <section class="glass panel liquid-glass activity-panel" id="w-activity">
        <div class="panel-head">
          <h2 id="h-activity-log"></h2>
          <div style="display:flex;gap:6px">
            <button class="ghost" id="btn-refresh-history" style="font-size:10.5px;padding:4px 10px;font-weight:800;cursor:pointer;background:rgba(255,255,255,0.06);border-radius:8px">🔄 Actualizar</button>
            <button class="ghost" id="btn-export-forensic" style="font-size:10.5px;padding:4px 10px;font-weight:800;cursor:pointer;background:rgba(255,255,255,0.06);border-radius:8px">📄 Exportar</button>
            <button class="ghost" id="btn-clear-log" style="font-size:10.5px;padding:4px 10px;font-weight:800;cursor:pointer;background:rgba(255,69,58,0.12);color:#ff453a !important;border-radius:8px">🗑️ Limpiar</button>
          </div>
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
          <!-- Unified Informative Widget: SOS signals, notifications & audit logging -->
          <div class="system-info-compact-card glass-subpanel" style="padding:14px 18px;border-radius:16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);margin-bottom:14px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:6px;">
              <span style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;color:rgba(255,255,255,0.85)">ℹ️ Diagnóstico y Resumen del Sistema</span>
              <span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:8px;background:rgba(74,222,128,0.15);color:#4ade80;border:1px solid rgba(74,222,128,0.3)">✓ Operativo</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;font-size:11px;">
              <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)">
                <span style="font-size:16px">🚨</span>
                <div><strong style="display:block;color:#fff;font-size:11px">Señales de Auxilio</strong><span style="opacity:0.65;font-size:9.5px">Enlace SOS activo</span></div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)">
                <span style="font-size:16px">🔔</span>
                <div><strong style="display:block;color:#fff;font-size:11px">Notificaciones</strong><span style="opacity:0.65;font-size:9.5px">Push operativas</span></div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05)">
                <span style="font-size:16px">📋</span>
                <div><strong style="display:block;color:#fff;font-size:11px">Registro en Vivo</strong><span style="opacity:0.65;font-size:9.5px">Auditoría continua</span></div>
              </div>
            </div>
          </div>

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
            <h3 id="h-settings-pin">Pin de Armado</h3>
            <div class="subsection">
              <div id="current-pin-display" style="font-size:13px;font-weight:800;color:#ffffff !important;margin-bottom:15px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);padding:8px 14px;border-radius:10px;display:inline-block"></div>
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
        <div style="display:flex; align-items:center; gap:10px; margin-left:16px;">
          <a id="github-action" class="github-star-action" href="https://github.com/Chrisalvir1/Argus" target="_blank" rel="noopener noreferrer"></a>
          <a id="paypal-action" class="glass-control" href="https://paypal.me/CEstradaAlvir" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:4px; padding:6px 14px; border-radius:10px; font-size:12px; font-weight:750; color:#38bdf8 !important; text-decoration:none; background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.3); transition:transform 0.15s ease, background 0.15s ease;">☕ PayPal</a>
        </div>
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

<!-- History Export modal -->
<div class="modal-back pm" id="history-export-modal" aria-hidden="true">
  <div class="modal" style="max-width: 440px;">
    <div class="modal-head">
      <h3 id="h-history-export-title">📄 Exportar Historial</h3>
      <button class="ghost" id="history-export-close" style="background:transparent; border:none; color:inherit; font-size:20px; cursor:pointer; padding:4px 8px;">✕</button>
    </div>
    <div style="display:grid;gap:14px;padding:6px 0">
      <p class="small" style="margin:0;opacity:.75">Selecciona el rango de fechas para exportar o imprimir el reporte de auditoría.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field-group">
          <label style="font-size:11px;font-weight:700;opacity:0.8;">📅 Desde</label>
          <input type="date" id="export-history-from" class="glass-control" style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)">
        </div>
        <div class="field-group">
          <label style="font-size:11px;font-weight:700;opacity:0.8;">📅 Hasta</label>
          <input type="date" id="export-history-to" class="glass-control" style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:10px;color:#fff;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12)">
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
        <button class="primary" id="btn-do-print-pdf" style="height:44px;font-size:13px;font-weight:800;cursor:pointer;border-radius:12px;box-shadow:0 6px 18px rgba(0,122,255,0.3)">
          🖨️ Imprimir / Guardar en PDF
        </button>
        <button class="glass-control" id="btn-do-download-txt" style="height:40px;font-size:12px;font-weight:700;cursor:pointer;border-radius:12px;background:rgba(255,255,255,0.05);color:#fff;border:1px solid rgba(255,255,255,0.15)">
          📑 Descargar Reporte (.txt)
        </button>
        <button class="ghost" id="btn-do-download-json" style="height:36px;font-size:11px;cursor:pointer;opacity:0.75">
          💾 Descargar JSON sin procesar
        </button>
      </div>
    </div>
  </div>
</div>
`;
class Du extends HTMLElement {
  constructor() {
    super(), this._showSosConfirm = !1, this._sosEntryIdx = null, this._sosBusy = !1, this._sosSliding = !1, this._sosStartX = 0, this._sosOffsetX = 0, this._sosConfirmed = !1, this.attachShadow({ mode: "open" }).appendChild(Tu.content.cloneNode(!0)), this._wsId = 1, this._socket = null, this._dashboard = null, this._ui = null, this._available = [], this._mode = "home", this._modeEntryId = null, this._selected = [], this._selectorTarget = null, this._hass = null, this._prevStates = {}, this._notifTargets = [], this._users = [], this._haUsersList = [], this._isAdmin = !0, this._pinCallback = null, this._homeName = "", this._backgroundMode = "weather", this._backgroundImages = [], this._temperatureSource = "auto", this._weatherSource = "auto", this._pending = {}, this._lastClockUpdate = 0, this._manualLang = null, this._fullscreenIdx = -1, this._cachedBgUrl = null, this._cachedBgBrightness = void 0, this._hubBgMode = "default", this._hubBgFile = "", this._hubBgSound = !1, this._clockFormat = "auto", this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._panicOutputs = void 0, this._initPromise = null, this._staticBound = !1, this._postLoadBound = !1;
  }
  _getTimeZone() {
    return this._hass?.config?.time_zone || void 0;
  }
  setConfig(r) {
    this._cardConfig = r, r?.compact ? (this.setAttribute("compact", ""), this.classList.add("argus-compact")) : (this.removeAttribute("compact"), this.classList.remove("argus-compact"));
  }
  _getClockFormat() {
    const r = this._ui?.personalization?.clock_format ?? this._ui?.clock_format ?? this._dashboard?.clock_format ?? "auto";
    return ["auto", "12h", "24h"].includes(r) ? r : "auto";
  }
  _formatTime(r) {
    if (!r) return "";
    const i = r instanceof Date ? r : new Date(r);
    if (isNaN(i.getTime())) return "";
    const o = this._getClockFormat(), s = String(this._hass?.locale?.time_format || "").toLowerCase();
    if (o === "12h" || o === "auto" && (s.includes("12") || s.includes("am"))) {
      let d = i.getHours();
      const m = String(i.getMinutes()).padStart(2, "0"), f = d >= 12 ? "PM" : "AM";
      return d = d % 12, d = d || 12, `${d}:${m} ${f}`;
    } else {
      const d = String(i.getHours()).padStart(2, "0"), m = String(i.getMinutes()).padStart(2, "0");
      return `${d}:${m}`;
    }
  }
  _formatDateTime(r) {
    if (!r) return "";
    const i = r instanceof Date ? r : new Date(r);
    if (isNaN(i.getTime())) return "";
    const o = this._getClockFormat(), s = String(this._hass?.locale?.time_format || "").toLowerCase(), u = o === "12h" || o === "auto" && (s.includes("12") || s.includes("am")), d = String(i.getDate()).padStart(2, "0"), m = String(i.getMonth() + 1).padStart(2, "0"), f = i.getFullYear();
    if (u) {
      let h = i.getHours();
      const S = String(i.getMinutes()).padStart(2, "0"), b = h >= 12 ? "PM" : "AM";
      return h = h % 12, h = h || 12, `${d}/${m}/${f}, ${h}:${S} ${b}`;
    } else {
      const h = String(i.getHours()).padStart(2, "0"), S = String(i.getMinutes()).padStart(2, "0");
      return `${d}/${m}/${f}, ${h}:${S}`;
    }
  }
  _updateProfileBadge() {
    const r = this.shadowRoot.getElementById("active-profile-pill"), i = this.shadowRoot.getElementById("profile-avatar"), o = this.shadowRoot.getElementById("profile-name"), s = this.shadowRoot.getElementById("profile-role");
    if (!r || !i || !o || !s) return;
    const u = this._currentProfile;
    if (!u) {
      r.style.display = "none";
      return;
    }
    r.style.display = "flex";
    const d = u.name || "User";
    u.picture ? i.innerHTML = `<img src="${this._escapeHtml(u.picture)}" 
        style="width:100%;height:100%;border-radius:50%;object-fit:cover;" 
        alt="${this._escapeHtml(d)}" />` : i.textContent = d.slice(0, 2).toUpperCase(), o.textContent = d;
    const m = u.role === "admin" ? "role_argus_admin" : "role_argus_user";
    s.textContent = this._t(m);
  }
  _getBrightness(r) {
    return new Promise((i) => {
      if (!r) {
        i(128);
        return;
      }
      const o = new Image();
      o.crossOrigin = "Anonymous", o.onload = () => {
        try {
          const s = document.createElement("canvas");
          s.width = 10, s.height = 10;
          const u = s.getContext("2d");
          if (!u) {
            i(128);
            return;
          }
          u.drawImage(o, 0, 0, 10, 10);
          const d = u.getImageData(0, 0, 10, 10).data;
          let m = 0, f = 0, h = 0, S = 0;
          for (let k = 0; k < d.length; k += 4)
            m += d[k], f += d[k + 1], h += d[k + 2], S++;
          const b = (0.299 * m + 0.587 * f + 0.114 * h) / S;
          i(b);
        } catch {
          i(128);
        }
      }, o.onerror = () => {
        i(128);
      }, o.src = r;
    });
  }
  async _updateTheme() {
    if (!this._hass) return;
    let r = !1;
    const i = this._hubBgMode || "default";
    if (i === "default")
      r = !0;
    else if (i === "image") {
      const o = this._hubBgFile || "";
      if (o)
        if (this._cachedBgUrl === o && this._cachedBgBrightness !== void 0)
          r = this._cachedBgBrightness < 135;
        else {
          const s = await this._getBrightness(o);
          this._cachedBgUrl = o, this._cachedBgBrightness = s, r = s < 135;
        }
      else
        r = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
    } else {
      const o = this._backgroundMode || "weather";
      if (o === "none")
        r = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      else if (o === "weather")
        if (this._hass.states?.["sun.sun"]?.state === "below_horizon")
          r = !0;
        else {
          const d = this._getWeatherEntity().state || "sunny";
          r = !["sunny", "fog", "snow", "windy"].includes(d);
        }
      else if (o === "photo" || o === "collage") {
        let s = "";
        if (this._backgroundImages && this._backgroundImages[0] ? s = this._backgroundImages[0] : this._panelBgFile && (s = this._panelBgFile), s)
          if (this._cachedBgUrl === s && this._cachedBgBrightness !== void 0)
            r = this._cachedBgBrightness < 135;
          else {
            const u = await this._getBrightness(s);
            this._cachedBgUrl = s, this._cachedBgBrightness = u, r = u < 135;
          }
        else
          r = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      }
    }
    this.setAttribute("argus-dark-mode", r ? "true" : "false");
  }
  set hass(r) {
    const i = this._hass;
    if (this._hass = r, !(this.hasAttribute("compact") || this.classList.contains("argus-compact") || !!this._cardConfig?.compact) && (this._loadState === "profile_selection" || this._loadState === "legacy_claim")) return;
    if (!this._dashboard?.entries?.length) {
      this._ensureInitialized();
      return;
    }
    const s = !1;
    i?.language !== r.language && !this._manualLang && this._refreshLocalizedUi();
    const d = this._dashboard.entries.some(
      (z) => z.entity_id && i?.states[z.entity_id]?.state !== r.states[z.entity_id]?.state
    ), m = this._temperatureSource === "auto" ? null : this._temperatureSource, f = m && i?.states[m]?.state !== r.states[m]?.state, h = this._weatherSource !== "auto" ? this._weatherSource : Object.values(r.states).find((z) => z.entity_id.startsWith("weather."))?.entity_id, S = h && (i?.states[h]?.state !== r.states[h]?.state || i?.states[h]?.attributes?.temperature !== r.states[h]?.attributes?.temperature || i?.states[h]?.attributes?.temperature_unit !== r.states[h]?.attributes?.temperature_unit), b = /* @__PURE__ */ new Set(), k = (z) => {
      !z || typeof z != "object" || (Array.isArray(z.sensors) && z.sensors.forEach((C) => b.add(C)), Object.values(z).forEach((C) => {
        C && typeof C == "object" && k(C);
      }));
    };
    k(this._ui?.modes);
    const P = !!i && [...b].some((z) => {
      const C = i.states[z], w = r.states[z];
      return C?.state !== w?.state || C?.attributes?.battery_level !== w?.attributes?.battery_level || C?.attributes?.battery_percentage !== w?.attributes?.battery_percentage;
    }), L = !!i && Object.values(r.states).some((z) => {
      const C = z.entity_id || "", w = z.attributes?.device_class === "battery" || /_battery$/i.test(C), _ = i.states[C];
      return w && _?.state !== z.state;
    });
    (d || P || L || f || s || S || !i) && (this._renderEntries(), this._renderActivityLog(), i || (this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers()));
  }
  get hass() {
    return this._hass;
  }
  /* ── Translation ─────────────────────────────────────────────────── */
  _t(r) {
    const i = this._getCurrentLangCode();
    return si[i]?.[r] || si.en[r] || r;
  }
  _format(r, i = {}) {
    return this._t(r).replace(/\{(\w+)\}/g, (o, s) => String(i[s] ?? `{${s}}`));
  }
  _escapeHtml(r) {
    return String(r ?? "").replace(/[&<>"']/g, (i) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[i]);
  }
  _getCurrentLangCode() {
    let r = this._manualLang;
    if (r === "auto" && (r = null), !r)
      try {
        const o = localStorage.getItem("argus_lang");
        o && o !== "auto" && (r = o);
      } catch {
      }
    if (!r) {
      if (this._hass?.language && this._hass.language.startsWith("es"))
        return "es";
      const o = this._ui?.manual_lang || this._ui?.language;
      o && o !== "auto" && (r = o);
    }
    if (r || (r = this._hass?.language || "es"), r = String(r || "es").trim(), si[r]) return r;
    if (/^zh-(hant|tw|hk)/i.test(r)) return "zh-Hant";
    if (/^zh/i.test(r)) return "zh";
    const i = r.split(/[-_]/)[0].toLowerCase();
    return si[i] ? i : "es";
  }
  _getLocale() {
    return {
      es: "es-ES",
      en: "en-US",
      pt: "pt-BR",
      ru: "ru-RU",
      zh: "zh-CN",
      "zh-Hant": "zh-TW"
    }[this._getCurrentLangCode()] || "es-ES";
  }
  _weatherPresentation(r, i) {
    const o = String(r || "sunny").toLowerCase().replace(/[\s-]+/g, "_"), s = {
      es: { sunny: "Soleado", clear_night: "Noche despejada", partlycloudy: "Parcialmente nublado", cloudy: "Nublado", rainy: "Lluvioso", pouring: "Lluvia intensa", lightning: "Tormenta eléctrica", lightning_rainy: "Tormenta con lluvia", snowy: "Nevando", fog: "Niebla", windy: "Ventoso", exceptional: "Condiciones excepcionales" },
      en: { sunny: "Sunny", clear_night: "Clear night", partlycloudy: "Partly cloudy", cloudy: "Cloudy", rainy: "Rainy", pouring: "Heavy rain", lightning: "Thunderstorm", lightning_rainy: "Thunderstorm with rain", snowy: "Snowing", fog: "Foggy", windy: "Windy", exceptional: "Exceptional conditions" },
      pt: { sunny: "Ensolarado", clear_night: "Noite limpa", partlycloudy: "Parcialmente nublado", cloudy: "Nublado", rainy: "Chuvoso", pouring: "Chuva forte", lightning: "Trovoada", lightning_rainy: "Trovoada com chuva", snowy: "Nevando", fog: "Neblina", windy: "Ventoso", exceptional: "Condições excepcionais" },
      zh: { sunny: "晴朗", clear_night: "晴夜", partlycloudy: "局部多云", cloudy: "多云", rainy: "有雨", pouring: "大雨", lightning: "雷暴", lightning_rainy: "雷雨", snowy: "下雪", fog: "有雾", windy: "有风", exceptional: "异常天气" },
      "zh-Hant": { sunny: "晴朗", clear_night: "晴夜", partlycloudy: "局部多雲", cloudy: "多雲", rainy: "有雨", pouring: "大雨", lightning: "雷暴", lightning_rainy: "雷雨", snowy: "下雪", fog: "有霧", windy: "有風", exceptional: "異常天氣" },
      ru: { sunny: "Солнечно", clear_night: "Ясная ночь", partlycloudy: "Переменная облачность", cloudy: "Облачно", rainy: "Дождливо", pouring: "Сильный дождь", lightning: "Гроза", lightning_rainy: "Гроза с дождём", snowy: "Снег", fog: "Туман", windy: "Ветрено", exceptional: "Исключительные условия" }
    }, u = o.includes("lightning") ? "⛈️" : o === "pouring" || o.includes("rain") ? "🌧️" : o.includes("snow") || o === "hail" || o === "sleet" ? "❄️" : o === "fog" ? "🌫️" : o.includes("cloud") ? "☁️" : i ? "🌙" : "☀️", d = this._getCurrentLangCode();
    return { icon: u, label: s[d]?.[o] || s.en[o] || o.replace(/_/g, " ") };
  }
  _openLangModal() {
    const r = this.shadowRoot.getElementById("lang-modal");
    if (!r) return;
    const i = this.shadowRoot.getElementById("lang-grid"), o = this._manualLang || "auto";
    i && (i.innerHTML = Ro.map((d) => `
        <button class="lang-option${d.code === o ? " active" : ""}" data-lang="${d.code}">
          <span class="lang-flag">${d.flag}</span>
          <span>${d.code === "auto" ? this._t("use_ha_language") : d.label}</span>
        </button>`).join(""), i.querySelectorAll(".lang-option").forEach((d) => {
      d.addEventListener("click", () => {
        this._setLanguage(d.dataset.lang), this._closeLangModal();
      });
    }));
    const s = this.shadowRoot.getElementById("lang-modal-title");
    s && (s.textContent = `🌐 ${this._t("lang_select_title")}`);
    const u = r.querySelector(".lang-modal-card");
    u && (u.style.animation = "none", u.offsetWidth, u.style.animation = ""), r.classList.add("open");
  }
  _closeLangModal() {
    this.shadowRoot.getElementById("lang-modal")?.classList.remove("open");
  }
  _setLanguage(r) {
    const i = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    if (r === "auto") {
      this._manualLang = null;
      try {
        localStorage.setItem("argus_lang", "auto");
      } catch {
      }
      this._ui && (this._ui.language = "auto", this._ui.manual_lang = "auto"), this._send("argus/save_ui", { language: "auto", manual_lang: "auto", ...i ? { entry_id: i } : {} }).catch(console.error);
    } else {
      if (!si[r]) return;
      this._manualLang = r;
      try {
        localStorage.setItem("argus_lang", r);
      } catch {
      }
      this._ui && (this._ui.language = r, this._ui.manual_lang = r), this._send("argus/save_ui", { language: r, manual_lang: r, ...i ? { entry_id: i } : {} }).catch(console.error);
    }
    this._instanceSignatures && this._instanceSignatures.clear(), this._refreshLocalizedUi();
  }
  _refreshLocalizedUi() {
    window._argusT = (o) => this._t(o), window._argusDashboardReadyBtn = this._t("edit_dashboard_done") || "✓ Listo", window._argusDashboardEditBtn = "✥ " + (this._t("edit_dashboard") || "Editar tablero"), window._argusDashboardResetBtn = this._t("reset_dashboard") || "Restablecer diseño", this._applyTranslations(), this._updateHeroProfileDisplay(), this._updateHeroClock(), this._instanceSignatures && this._instanceSignatures.clear(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderActivityLog(), this._renderAutomations(), this._renderNotifications(), this._renderUsers(), this._renderSosOutputs(), typeof this._renderHealthCenter == "function" && this._renderHealthCenter(), typeof this._renderStateSchedule == "function" && this._renderStateSchedule(), this._configureEmergencyCall(), this._updateHomeNameDisplay(), this._renderUploadedFiles();
    const r = this._manualLang || "auto", i = this.shadowRoot.getElementById("dropdown-lang-select");
    i && i.value !== r && (i.value = r);
    try {
      window.dispatchEvent(new CustomEvent("argus-lang-changed"));
    } catch {
    }
  }
  _applyTranslations() {
    const r = (g) => this._t(g), i = (g) => this.shadowRoot.getElementById(g), o = (g, v) => {
      const E = i(g);
      E && (E.textContent = v);
    }, s = this._manualLang || "auto", u = Ro.find((g) => g.code === s) || Ro[1], d = i("lang-pill-flag"), m = i("lang-pill-label");
    d && (d.textContent = u.flag), m && (m.textContent = s === "auto" ? this._t("use_ha_language") : u.label), o("p-hero-desc", r("hero_desc")), o("h-instances", r("instances")), o("h-modes", r("modes")), o("h-automations", r("automations")), o("p-linked-rules", r("linked_rules")), o("h-settings", r("settings")), o("h-activity-log", r("activity_log")), o("btn-refresh-history", r("history_refresh")), o("t-change-pin", r("change_pin")), o("l-current-pin-lbl", r("current_pin")), o("lnk-forgot-pin", r("forgot_pin")), o("pin-forgot-link", r("forgot_pin")), o("btn-save-pin", r("update_pin")), o("l-new-pin", r("new_pin")), o("l-confirm-pin", r("confirm_pin")), o("h-notifications", r("notifications_title")), o("p-notif-desc", r("notif_desc")), o("h-users", r("users_title")), o("p-admin-only", r("admin_only")), o("t-add-user", r("add_user")), o("l-username", r("username")), o("l-user-pin", r("user_pin")), o("s-is-admin", r("is_admin")), o("l-user-exp-type", r("user_exp_type")), o("l-user-exp-date", r("user_exp_date"));
    const f = i("opt-exp-indefinite");
    f && (f.textContent = r("exp_indefinite"));
    const h = i("opt-exp-temporary");
    h && (h.textContent = r("exp_temporary")), o("selector-select-all", r("select_all")), o("selector-deselect-all", r("deselect_all")), o("l-available", r("available")), o("l-selected-lbl", r("selected_lbl")), o("l-introduce-pin", `🔒 ${r("introduce_pin")}`), o("l-pin-modal-desc", r("pin_modal_desc")), ((g) => {
      const v = i(g);
      v && (v.placeholder = r("search_placeholder"));
    })("selector-search");
    const b = (g, v) => {
      const E = i(g);
      E && (E.textContent = r(v));
    };
    b("btn-new-auto", "create_ha"), b("btn-save-pin", "update_pin"), b("btn-save-notif", "save_notif"), b("btn-save-user", "save_user"), b("selector-close", "close"), b("selector-clear", "clear"), b("selector-accept", "accept"), b("pin-cancel", "cancel"), b("pin-confirm", "confirm"), b("btn-cancel-sos", "cancel"), b("sos-call-btn", "sos_call"), b("home-name-cancel", "cancel"), b("home-name-save", "save_btn");
    const k = i("lang-modal-close");
    k && (k.textContent = `✕ ${r("close")}`), o("lbl-home-name-hdr", r("home_name_lbl")), o("lbl-panel-bg-title", r("bg_panel_title")), o("lbl-hub-bg-title", r("bg_hub_title")), o("s-panel-bg-sound-lbl", r("bg_sound_opt")), o("s-hub-bg-sound-lbl", r("bg_sound_opt")), o("lbl-mas-ajustes", "🎨 " + r("lbl_aesthetic_custom")), o("edit-widgets-label", this._widgetEditing ? "✓ " + r("done") : "⚙️ Config. Widgets"), o("lbl-temperature-source", r("temp_displayed")), o("lbl-weather-source", r("weather_source")), o("lbl-panel-bg-upload", r("lbl_load_file")), o("lbl-hub-bg-upload", r("lbl_load_file")), o("lbl-uploaded-files-title", r("lbl_uploaded_files")), o("btn-edit-home-name-standalone", r("edit_btn")), o("btn-save-personalization-standalone", r("save_btn")), o("btn-refresh-history", r("history_refresh")), o("btn-export-forensic", "📄 " + (r("export_history_title") || "Exportar")), o("btn-clear-log", r("clear_log_btn")), o("h-history-export-title", "📄 " + (r("export_history_title") || "Exportar Historial")), o("h-access-title", r("access_title")), o("p-access-desc", r("access_desc")), o("btn-access-users", `👥 ${r("users_title").replace(/^👥\s*/, "").replace(/\s(?:y|&|e)\s.*$/i, "")}`), o("btn-access-pin", `🔐 ${r("pin_master_title")}`), o("h-settings-pin", r("pin_master_title")), o("p-pin-remove-hint", r("pin_remove_hint")), o("h-backup-title", r("backup_title")), o("p-backup-desc", r("backup_desc")), o("btn-export-config", r("export_btn")), o("btn-reset-config", r("reset_btn")), o("btn-undo-reset", r("undo_reset_btn")), o("btn-import-trigger", r("import_btn")), o("github-title", r("github_title")), o("github-desc", r("github_desc")), o("github-action", `⭐ ${r("github_action")}`), o("sos-title-txt", r("sos_confirm_title")), o("sos-text-txt", r("sos_confirm_text")), o("sos-label", r("sos_slide")), o("home-name-modal-h3", r("home_name_modal_title")), o("p-home-name-modal-desc", r("home_name_modal_desc")), o("l-home-name-modal-label", r("home_name_label")), o("lang-modal-title", `🌐 ${r("lang_select_title")}`), o("sos-call-help", r("sos_call_help")), o("lbl-emergency-number", r("emergency_number_label")), o("emergency-number-help", r("emergency_help")), o("lbl-sos-actions", r("sos_actions")), o("btn-select-sos-outputs", r("sos_select_outputs")), o("sos-output-help", r("sos_outputs_help")), o("home-name-modal-desc", r("home_name_modal_desc")), o("pin-backspace", r("delete"));
    const P = i("bg-mode-select-standalone");
    if (P) {
      const g = P.value;
      P.innerHTML = `
        <option value="weather">${r("bg_weather")}</option>
        <option value="none">${r("bg_panel_none")}</option>
        <option value="photo">${r("bg_photo")}</option>
        <option value="collage">${r("bg_collage")}</option>
      `, g && (P.value = g), this._renderEntries();
    }
    const L = i("hub-bg-mode-select");
    if (L) {
      const g = L.value;
      L.innerHTML = `
        <option value="default">${r("bg_hub_default")}</option>
        <option value="image">${r("bg_image_opt")}</option>
      `, g && (L.value = g);
    }
    this._populateTemperatureSources(), this._populateWeatherSources();
    const z = i("current-pin-display");
    if (z) {
      const g = this._dashboard?.entries?.[0]?.pin_configured;
      if (g != null)
        z.textContent = r(g ? "pin_active_yes" : "pin_active_no");
      else {
        const v = z.textContent || "", E = v.includes("Sí") || v.includes("Yes") || v.includes("Sim") || v.includes("Sì") || v.includes("是") || v.includes("Да") || v.includes("Ja") || v.includes("Oui") || v.includes("Activo") || v.includes("Active");
        z.textContent = r(E ? "pin_active_yes" : "pin_active_no");
      }
    }
    const C = i("home-name-input");
    C && (C.placeholder = r("home_name_placeholder"));
    const w = i("panel-bg-url-input");
    w && (w.placeholder = r("url_placeholder"));
    const _ = i("hub-bg-url-input");
    _ && (_.placeholder = r("url_placeholder"));
    const x = this.shadowRoot;
    if (x) {
      const g = (E) => {
        const A = String(this._t(E) || "").trim(), M = A.indexOf(" ");
        return M > 0 && M <= 3 ? A.substring(M + 1).trim() : A;
      };
      x.querySelectorAll(".entry").forEach((E) => {
        const A = E.querySelector(".btn-home span");
        A && (A.textContent = g("btn_home"));
        const M = E.querySelector(".btn-away span");
        M && (M.textContent = g("btn_away"));
        const V = E.querySelector(".btn-night span");
        V && (V.textContent = g("btn_night"));
        const $ = E.querySelector(".btn-disarm span, .argus-disarm-btn b");
        $ && ($.textContent = g("btn_disarmed"));
        const G = E.querySelector(".btn-sos span");
        if (G) {
          const Z = E.querySelector('.btn-sos[data-action="stop-sos"]');
          G.textContent = Z ? this._t("sos_stop") : this._t("btn_sos");
        }
      });
      const v = x.getElementById("global-status");
      v && (v.innerHTML = "");
    }
    this._syncAccessSummary();
  }
  _syncAccessSummary() {
    const r = this.shadowRoot?.getElementById("p-access-desc");
    if (!r) return;
    if (!this._dashboard) {
      r.textContent = this._t("access_desc");
      return;
    }
    const i = this._dashboard.entries?.[0]?.pin_configured === !0, o = this._t(i ? "pin_active_yes" : "pin_active_no"), s = Array.isArray(this._users) ? this._users.filter((d) => d?.enabled !== !1).length : 0, u = s > 0 ? `${this._t("users_title")}: ${s}` : this._t("no_users");
    r.textContent = `${o} · ${u}`;
  }
  _toggleAccessSection(r) {
  }
  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() {
    try {
      this._manualLang = localStorage.getItem("argus_lang") || null;
    } catch {
    }
    this._ensureInitialized(), this._startClock(), this._fullscreenIdx >= 0 && !this._kioskLocked && (document.fullscreenElement || document.webkitFullscreenElement || (this._fullscreenIdx = -1, this.classList.remove("fullscreen-active"))), this._onFsChange = () => {
      !(document.fullscreenElement || document.webkitFullscreenElement) && !this._kioskLocked && (this.classList.contains("fullscreen-active") || this.shadowRoot?.getElementById("argus-fullscreen-stage")?.style.display !== "none") && this._exitFullscreenView();
    }, document.addEventListener("fullscreenchange", this._onFsChange), document.addEventListener("webkitfullscreenchange", this._onFsChange), this._onEscape = (r) => {
      r.key === "Escape" && (this.classList.contains("fullscreen-active") || this.shadowRoot?.getElementById("argus-fullscreen-stage")?.style.display !== "none") && this._exitFullscreenView();
    }, document.addEventListener("keydown", this._onEscape), this._shadowClickDelegated || (this._shadowClickDelegated = !0, this.shadowRoot?.addEventListener("click", async (r) => {
      const i = r.target;
      if (!i || typeof i.closest != "function") return;
      const o = i.closest("#btn-refresh-history, .btn-refresh-history");
      if (o) {
        r.preventDefault(), r.stopPropagation(), o.style.opacity = "0.5";
        const b = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
        await this._loadActivityTimeline(b), this._renderActivityLog(), o.style.opacity = "1", o.textContent = "✓ " + (this._t("history_refresh") || "Actualizado"), setTimeout(() => {
          o && (o.textContent = "🔄 " + (this._t("history_refresh") || "Actualizar").replace(/^🔄\s*/, ""));
        }, 1500);
        return;
      }
      if (i.closest("#btn-export-forensic, .btn-export-forensic")) {
        r.preventDefault(), r.stopPropagation(), this._openHistoryExportModal();
        return;
      }
      if (i.closest("#btn-clear-log, .btn-clear-log")) {
        r.preventDefault(), r.stopPropagation(), this._clearHistory();
        return;
      }
      if (i.closest("#history-export-close")) {
        r.preventDefault(), this._closeHistoryExportModal();
        return;
      }
      if (i.closest("#btn-do-print-pdf")) {
        r.preventDefault(), this._exportHistoryPrintPdf();
        return;
      }
      if (i.closest("#btn-do-download-txt")) {
        r.preventDefault(), this._exportHistoryText();
        return;
      }
      if (i.closest("#btn-do-download-json")) {
        r.preventDefault(), this._exportForensicTimeline();
        return;
      }
      if (i.closest(".exit-kiosk-btn, button[data-exit-fullscreen]")) {
        r.preventDefault(), r.stopPropagation(), this._exitFullscreenView();
        return;
      }
    }));
  }
  disconnectedCallback() {
    this._clockInterval && clearInterval(this._clockInterval), this._initRetryTimer && clearTimeout(this._initRetryTimer), this._socket && (this._socket.close(), this._socket = null), this._dashboard = null, this._currentProfile = null, this._profileSelectedThisMount = !1, this._welcomeShownThisMount = !1, this._loadState = null, this._initPromise = null, this._onFsChange && (document.removeEventListener("fullscreenchange", this._onFsChange), document.removeEventListener("webkitfullscreenchange", this._onFsChange)), this._onEscape && document.removeEventListener("keydown", this._onEscape), this.shadowRoot?.querySelectorAll(".wx-webgl").forEach((r) => r._argusWebglStop?.());
  }
  _startClock() {
    this._clockInterval && clearInterval(this._clockInterval), this._clockInterval = setInterval(() => {
      const r = /* @__PURE__ */ new Date();
      if (this._dashboard) {
        const i = this.shadowRoot.getElementById("hero-clock-time");
        if (i) {
          const s = this._formatTime(r);
          i.textContent !== s && (i.textContent = s);
        }
        const o = this.shadowRoot.querySelector(".console-hud-time");
        if (o) {
          const s = this._formatTime(r);
          o.textContent !== s && (o.textContent = s);
        }
      }
    }, 1e3);
  }
  _ensureInitialized() {
    !this.isConnected || !this._hass || this._dashboard || this._initPromise || (this._initPromise = this._init().catch((r) => {
      console.error("Argus initialization failed:", r), this.isConnected && this._renderInitializationError(r);
    }).finally(() => {
      this._initPromise = null;
    }));
  }
  _bindSOS() {
    if (this._sosBound) return;
    const r = this.shadowRoot.getElementById("sos-thumb"), i = r && r.closest(".ios-slider-track");
    if (!r || !i || r._sosBound) return;
    r._sosBound = !0;
    let o = !1, s = 0, u = 0;
    const d = () => Math.max(1, i.offsetWidth - r.offsetWidth - 12), m = (b) => {
      o = !0, s = b.clientX - u, r.setPointerCapture(b.pointerId), r.style.transition = "none", r.style.cursor = "grabbing", b.preventDefault();
    }, f = (b) => {
      if (!o) return;
      u = Math.max(0, Math.min(b.clientX - s, d())), r.style.left = 6 + u + "px";
      const k = u / d();
      i.style.background = "rgba(217,4,41," + (0.15 + k * 0.55) + ")", k >= 0.98 && S(!0);
    }, h = (b) => {
      o && S(!1);
    }, S = (b) => {
      o = !1, r.style.transition = "all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)", r.style.cursor = "grab", b ? (this._triggerSOS(), u = 0, setTimeout(() => {
        r.style.left = "6px", i.style.background = "rgba(217,4,41,0.15)";
      }, 600)) : (u = 0, r.style.left = "6px", i.style.background = "rgba(217,4,41,0.15)");
    };
    r.addEventListener("pointerdown", m), r.addEventListener("pointermove", f), r.addEventListener("pointerup", h), r.addEventListener("pointercancel", h), this._sosBound = !0;
  }
  async _init() {
    this._mode = "disarmed", this._staticBound || (this._bindStatic(), this._staticBound = !0), await this._connect(), this._applyTranslations(), await this._load(), this._dashboard && (this._initWidgetGrid(), !this._postLoadBound && (this._postLoadBound = !0, this.shadowRoot.getElementById("history-export-modal")?.addEventListener("click", (r) => {
      r.target && r.target.id === "history-export-modal" && this._closeHistoryExportModal();
    }), this.shadowRoot.getElementById("btn-export-config")?.addEventListener("click", () => this._exportConfig()), this.shadowRoot.getElementById("btn-import-trigger")?.addEventListener("click", () => this.shadowRoot.getElementById("import-config-file").click()), this.shadowRoot.getElementById("import-config-file")?.addEventListener("change", (r) => this._importConfig(r)), this.shadowRoot.getElementById("btn-reset-config")?.addEventListener("click", () => this._resetConfig()), this.shadowRoot.getElementById("btn-undo-reset")?.addEventListener("click", () => this._undoResetConfig()), this.shadowRoot.getElementById("btn-save-personalization-standalone")?.addEventListener("click", () => this._savePersonalization()), this.shadowRoot.getElementById("btn-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), this._configureEmergencyCall()));
  }
  _openHistoryExportModal() {
    const r = this.shadowRoot.getElementById("history-export-modal");
    if (!r) return;
    const i = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date();
    o.setDate(i.getDate() - 30);
    const s = this.shadowRoot.getElementById("export-history-from"), u = this.shadowRoot.getElementById("export-history-to");
    s && !s.value && (s.value = o.toISOString().split("T")[0]), u && !u.value && (u.value = i.toISOString().split("T")[0]), r.classList.add("open"), r.setAttribute("aria-hidden", "false");
  }
  _closeHistoryExportModal() {
    const r = this.shadowRoot.getElementById("history-export-modal");
    r && (r.classList.remove("open"), r.setAttribute("aria-hidden", "true"));
  }
  _getFilteredHistory() {
    const r = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : Array.isArray(this._ui?.audit_log) ? this._ui.audit_log : [], i = this.shadowRoot.getElementById("export-history-from"), o = this.shadowRoot.getElementById("export-history-to"), s = i?.value ? /* @__PURE__ */ new Date(i.value + "T00:00:00") : null, u = o?.value ? /* @__PURE__ */ new Date(o.value + "T23:59:59") : null;
    return r.filter((d) => {
      if (!d || typeof d != "object") return !1;
      if (!d.ts) return !0;
      const m = new Date(d.ts);
      return !(s && m < s || u && m > u);
    });
  }
  _exportHistoryPrintPdf() {
    this._closeHistoryExportModal();
    const r = this._getFilteredHistory(), i = this._homeName || "Argus Home Hub", o = (/* @__PURE__ */ new Date()).toLocaleString(this._getLocale()), s = this.shadowRoot.getElementById("export-history-from")?.value || "Inicio", u = this.shadowRoot.getElementById("export-history-to")?.value || "Hoy", d = r.map((h, S) => {
      const b = h.ts ? new Date(h.ts) : null, k = b && !isNaN(b.getTime()) ? b.toLocaleString(this._getLocale()) : "—", P = String(h.action || ""), L = this._localizeActivityDetail(P, h.detail), z = h.user || h.actor || "Argus";
      return `
        <tr style="border-bottom: 1px solid #e2e8f0; font-size: 11px;">
          <td style="padding: 6px 8px; color: #64748b; font-family: monospace;">${S + 1}</td>
          <td style="padding: 6px 8px; white-space: nowrap; font-weight: 600;">${this._escapeHtml(k)}</td>
          <td style="padding: 6px 8px; font-weight: 700; color: #0284c7;">${this._escapeHtml(P)}</td>
          <td style="padding: 6px 8px;">${this._escapeHtml(L)}</td>
          <td style="padding: 6px 8px; font-weight: 600;">${this._escapeHtml(z)}</td>
        </tr>
      `;
    }).join(""), m = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Argus Home Hub - Historial</title>
        <style>
          @page { size: A4 portrait; margin: 12mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1e293b; margin: 0; padding: 24px; background: #fff; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0284c7; padding-bottom: 14px; margin-bottom: 18px; }
          .brand { display: flex; align-items: center; gap: 14px; }
          .brand img { width: 54px; height: 54px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.12); flex-shrink: 0; }
          .title { font-size: 24px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.02em; }
          .subtitle { font-size: 13px; color: #64748b; margin-top: 3px; font-weight: 600; }
          .meta { font-size: 11px; color: #475569; text-align: right; line-height: 1.5; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #f8fafc; padding: 9px 8px; text-align: left; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #334155; border-bottom: 2px solid #cbd5e1; }
          .footer { margin-top: 24px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="brand">
            <img src="${window.location.origin}/api/argus_static/argus_logo.png" alt="Argus Logo" onerror="this.style.display='none'">
            <div>
              <h1 class="title">Argus Home Hub</h1>
              <div class="subtitle">🏡 ${this._escapeHtml(i)} · Registro de Actividad y Seguridad</div>
            </div>
          </div>
          <div class="meta">
            <div><strong>Rango:</strong> ${this._escapeHtml(s)} al ${this._escapeHtml(u)}</div>
            <div><strong>Generado:</strong> ${this._escapeHtml(o)}</div>
            <div><strong>Total Eventos:</strong> ${r.length}</div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width: 30px;">#</th>
              <th style="width: 130px;">Fecha / Hora</th>
              <th style="width: 120px;">Acción</th>
              <th>Descripción y Detalles</th>
              <th style="width: 100px;">Usuario</th>
            </tr>
          </thead>
          <tbody>
            ${d || '<tr><td colspan="5" style="text-align:center;padding:24px;color:#888;">No hay registros en el rango seleccionado</td></tr>'}
          </tbody>
        </table>
        <div class="footer">
          Argus Home Hub · Sistema de Seguridad Inteligente · Documento de Auditoría
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        <\/script>
      </body>
      </html>
    `, f = window.open("", "_blank", "width=900,height=700");
    f && (f.document.open(), f.document.write(m), f.document.close());
  }
  _exportHistoryText() {
    this._closeHistoryExportModal();
    const r = this._getFilteredHistory(), i = this._homeName || "Argus Home Hub", o = (/* @__PURE__ */ new Date()).toLocaleString(this._getLocale()), s = this.shadowRoot.getElementById("export-history-from")?.value || "Inicio", u = this.shadowRoot.getElementById("export-history-to")?.value || "Hoy";
    let d = `================================================================================
`;
    d += `🛡️  ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD
`, d += `🏡  ${i}
`, d += `📅  Rango: ${s} al ${u}
`, d += `⏰  Generado: ${o}
`, d += `📊  Total eventos: ${r.length}
`, d += `================================================================================

`, r.forEach((S, b) => {
      const k = S.ts ? new Date(S.ts) : null, P = k && !isNaN(k.getTime()) ? k.toLocaleString(this._getLocale()) : "—", L = String(S.action || ""), z = this._localizeActivityDetail(L, S.detail), C = S.user || S.actor || "Argus";
      d += `[${String(b + 1).padStart(3, "0")}] ${P} | [${L}] ${z} | 👤 ${C}
`;
    }), d += `
================================================================================
`, d += `Argus Home Hub - Fin del reporte
`;
    const m = new Blob([d], { type: "text/plain;charset=utf-8" }), f = URL.createObjectURL(m), h = document.createElement("a");
    h.href = f, h.download = `argus_historial_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.txt`, h.click(), setTimeout(() => URL.revokeObjectURL(f), 5e3);
  }
  async _clearHistory() {
    const r = this._dashboard?.entries?.[0]?.pin_configured === !0, i = this._activeProfile?.name || this._hass?.user?.name || "Administrador", o = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, s = async () => {
      try {
        return await this._send("argus/clear_audit_log", {
          ...o ? { entry_id: o } : {},
          user_name: i
        }), await this._loadActivityTimeline(o), this._renderActivityLog(), !0;
      } catch (u) {
        return alert(this._format("generic_error", { error: u.message })), !1;
      }
    };
    if (r)
      this._showPinModal(async (u) => {
        try {
          const d = await this._send("argus/validate_master_pin", {
            pin: u,
            ...o ? { entry_id: o } : {}
          });
          if (d && d.valid === !1)
            throw new Error(this._t("pin_invalid") || "PIN incorrecto");
        } catch {
          throw new Error(this._t("pin_invalid") || "PIN incorrecto");
        }
        return await s();
      });
    else {
      if (!confirm(this._t("clear_history_confirm") || "¿Eliminar todo el historial de actividad?")) return;
      await s();
    }
  }
  async _loadActivityTimeline(r = null) {
    if (this._ui)
      try {
        const i = r || this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, o = { limit: 100 };
        i && (o.entry_id = i);
        const s = await this._send("argus/get_forensic_timeline", o), u = Array.isArray(s?.timeline) ? s.timeline.filter((d) => d && typeof d == "object" && !Array.isArray(d)) : [];
        this._forensicTimeline = u, this._activityTimelineError = null, this._ui.audit_log = u, this._renderActivityLog();
      } catch (i) {
        console.warn("Argus activity timeline unavailable:", i), this._activityTimelineError = i?.message || String(i), this._forensicTimeline = null, Array.isArray(this._ui.audit_log) || (this._ui.audit_log = []), this._renderActivityLog();
      }
  }
  _generateHistoryPDF(r, i) {
    const o = i.homeName || "Mi Casa", s = i.generatedAt || (/* @__PURE__ */ new Date()).toLocaleString(), u = r.length, d = (g) => String(g || "").replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E\xA0-\xFF]/g, " "), m = 612, f = 792, h = 36, S = 40, b = m - h * 2, k = 22, P = Math.max(1, Math.ceil(r.length / k)), L = [];
    for (let g = 0; g < P; g++)
      L.push(5 + g * 2);
    const z = [];
    for (let g = 0; g < P; g++) {
      const v = r.slice(g * k, (g + 1) * k);
      let E = "";
      E += `q 0.05 0.08 0.15 rg 0 ${f - 65} ${m} 65 re f Q
`, E += `BT /F2 14 Tf 1 1 1 rg ${h} ${f - 32} Td (ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD) Tj ET
`, E += `BT /F1 8.5 Tf 0.7 0.8 0.9 rg ${h} ${f - 48} Td (${d(`Hogar: ${o}   |   Generado: ${s}   |   Total Eventos: ${u}`)}) Tj ET
`;
      const A = f - 80;
      E += `q 0.12 0.18 0.28 rg ${h} ${A - 18} ${b} 20 re f Q
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${h + 6} ${A - 13} Td (FECHA Y HORA) Tj ET
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${h + 130} ${A - 13} Td (ACCION / EVENTO) Tj ET
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${h + 255} ${A - 13} Td (ORIGEN / USUARIO) Tj ET
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${h + 365} ${A - 13} Td (DETALLE) Tj ET
`;
      let M = A - 38;
      for (let V = 0; V < v.length; V++) {
        const $ = v[V];
        V % 2 === 0 && (E += `q 0.96 0.97 0.98 rg ${h} ${M - 4} ${b} 20 re f Q
`), E += `q 0.88 0.88 0.88 RG 0.5 w ${h} ${M - 4} m ${h + b} ${M - 4} l S Q
`;
        const G = d($.ts || "-"), Z = d($.action || "-"), ee = d($.user || "Argus"), ne = d($.detail || "-");
        E += `BT /F1 8 Tf 0.15 0.15 0.15 rg ${h + 6} ${M + 2} Td (${G.slice(0, 24)}) Tj ET
`, E += `BT /F2 8 Tf 0.1 0.2 0.4 rg ${h + 130} ${M + 2} Td (${Z.slice(0, 22)}) Tj ET
`, E += `BT /F1 8 Tf 0.2 0.2 0.2 rg ${h + 255} ${M + 2} Td (${ee.slice(0, 20)}) Tj ET
`, E += `BT /F1 7.5 Tf 0.3 0.3 0.3 rg ${h + 365} ${M + 2} Td (${ne.slice(0, 35)}) Tj ET
`, M -= 22;
      }
      E += `q 0.8 0.8 0.8 RG 0.5 w ${h} ${S} m ${h + b} ${S} l S Q
`, E += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg ${h} ${S - 12} Td (Argus Home Hub Security System - Documento Oficial de Auditoria) Tj ET
`, E += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg ${m - h - 60} ${S - 12} Td (${d(`Pagina ${g + 1} de ${P}`)}) Tj ET
`, z.push(E);
    }
    const C = [], w = [], _ = (g) => {
      w.push(C.join(`
`).length + (C.length > 0 ? 1 : 0)), C.push(g);
    };
    C.push("%PDF-1.4"), _(`1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj`), _(`2 0 obj
<< /Type /Pages /Kids [${L.map((g) => `${g} 0 R`).join(" ")}] /Count ${P} /MediaBox [0 0 ${m} ${f}] >>
endobj`), _(`3 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj`), _(`4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj`);
    for (let g = 0; g < P; g++) {
      const v = L[g], E = v + 1, A = z[g], M = unescape(encodeURIComponent(A)).length;
      _(`${v} 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${E} 0 R >>
endobj`), _(`${E} 0 obj
<< /Length ${M} >>
stream
${A}endstream
endobj`);
    }
    const x = C.join(`
`).length + 1;
    C.push("xref"), C.push(`0 ${w.length + 1}`), C.push("0000000000 65535 f ");
    for (let g = 0; g < w.length; g++)
      C.push(String(w[g]).padStart(10, "0") + " 00000 n ");
    return C.push("trailer"), C.push(`<< /Size ${w.length + 1} /Root 1 0 R >>`), C.push("startxref"), C.push(String(x)), C.push("%%EOF"), C.join(`
`);
  }
  _exportHistoryPDF() {
    const i = (Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : this._ui?.audit_log || []).map((k) => {
      const P = String(k.action || ""), L = String(k.detail || ""), z = this._localizeActivityDetail ? this._localizeActivityDetail(P, L) : L, C = String(k.user || k.actor || "Argus");
      let w = "";
      if (k.ts)
        try {
          w = new Date(k.ts).toLocaleString(this._getLocale());
        } catch {
          w = String(k.ts);
        }
      return { ts: w, action: P, user: C, detail: z };
    }), o = this._homeName || "Mi Casa", s = /* @__PURE__ */ new Date(), u = s.toISOString().slice(0, 10), d = s.toTimeString().slice(0, 5).replace(":", "-"), m = s.toLocaleString(this._getLocale()), f = this._generateHistoryPDF(i, { homeName: o, generatedAt: m }), h = new Blob([f], { type: "application/pdf" }), S = URL.createObjectURL(h), b = document.createElement("a");
    b.href = S, b.download = `argus_historial_${u}_${d}.pdf`, b.click(), setTimeout(() => URL.revokeObjectURL(S), 5e3);
  }
  _exportForensicTimeline() {
    this._closeHistoryExportModal();
    const r = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : this._ui?.audit_log || [], i = new Blob([JSON.stringify({ format: "argus-forensic-timeline", generated_at: (/* @__PURE__ */ new Date()).toISOString(), events: r }, null, 2)], { type: "application/json" }), o = URL.createObjectURL(i), s = document.createElement("a");
    s.href = o, s.download = `argus_forensic_${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.json`, s.click(), setTimeout(() => URL.revokeObjectURL(o), 5e3);
  }
  _backupText(r) {
    const i = this._getCurrentLangCode(), o = {
      es: { password: "Contraseña de cifrado (mínimo 8 caracteres)", weak: "La contraseña debe tener al menos 8 caracteres.", decrypt: "Contraseña de la copia cifrada", bad: "No se pudo descifrar la copia. Verifica la contraseña." },
      en: { password: "Encryption password (minimum 8 characters)", weak: "The password must be at least 8 characters.", decrypt: "Encrypted backup password", bad: "The backup could not be decrypted. Check the password." },
      fr: { password: "Mot de passe de chiffrement (8 caractères minimum)", weak: "Le mot de passe doit comporter au moins 8 caractères.", decrypt: "Mot de passe de la sauvegarde chiffrée", bad: "Impossible de déchiffrer la sauvegarde. Vérifiez le mot de passe." },
      pt: { password: "Senha de criptografia (mínimo de 8 caracteres)", weak: "A senha deve ter pelo menos 8 caracteres.", decrypt: "Senha do backup criptografado", bad: "Não foi possível descriptografar o backup. Verifique a senha." },
      it: { password: "Password di cifratura (minimo 8 caratteri)", weak: "La password deve contenere almeno 8 caratteri.", decrypt: "Password del backup cifrato", bad: "Impossibile decifrare il backup. Verifica la password." },
      zh: { password: "加密密码（至少 8 个字符）", weak: "密码必须至少包含 8 个字符。", decrypt: "加密备份密码", bad: "无法解密备份，请检查密码。" },
      ru: { password: "Пароль шифрования (минимум 8 символов)", weak: "Пароль должен содержать не менее 8 символов.", decrypt: "Пароль зашифрованной копии", bad: "Не удалось расшифровать копию. Проверьте пароль." }
    };
    return (o[i] || o.en)[r];
  }
  _bytesToBase64(r) {
    let i = "";
    return r.forEach((o) => {
      i += String.fromCharCode(o);
    }), btoa(i);
  }
  _base64ToBytes(r) {
    return Uint8Array.from(atob(r), (i) => i.charCodeAt(0));
  }
  async _backupKey(r, i, o) {
    const s = await crypto.subtle.importKey("raw", new TextEncoder().encode(r), "PBKDF2", !1, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: i, iterations: 25e4, hash: "SHA-256" },
      s,
      { name: "AES-GCM", length: 256 },
      !1,
      o
    );
  }
  _requestBackupPassword(r) {
    return new Promise((i) => {
      const o = document.createElement("div");
      o.className = "modal-back open", o.setAttribute("role", "dialog"), o.setAttribute("aria-modal", "true");
      const s = r === "decrypt" ? this._backupText("decrypt") : this._backupText("password");
      o.innerHTML = `<div class="modal" style="max-width:430px"><div class="modal-head"><h3>${this._escapeHtml(s)}</h3></div><input type="password" class="glass-control" autocomplete="new-password" style="font-size:17px"><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:14px"><button class="ghost" data-secret-cancel>✕</button><button class="primary" data-secret-ok>✓</button></div></div>`, this.shadowRoot.appendChild(o);
      const u = o.querySelector("input"), d = (m) => {
        o.remove(), i(m);
      };
      o.querySelector("[data-secret-cancel]").addEventListener("click", () => d(null)), o.querySelector("[data-secret-ok]").addEventListener("click", () => d(u.value)), u.addEventListener("keydown", (m) => {
        m.key === "Enter" && d(u.value), m.key === "Escape" && d(null);
      }), requestAnimationFrame(() => u.focus());
    });
  }
  async _exportConfig() {
    try {
      const r = await this._requestBackupPassword("encrypt");
      if (r === null) return;
      if (r.length < 8) {
        alert(this._backupText("weak"));
        return;
      }
      const o = (await this._send("argus/export_config"))?.config;
      if (typeof o != "object" || o === null) throw new Error(this._t("invalid_config"));
      delete o.runtime;
      const s = crypto.getRandomValues(new Uint8Array(16)), u = crypto.getRandomValues(new Uint8Array(12)), d = await this._backupKey(r, s, ["encrypt"]), m = await crypto.subtle.encrypt({ name: "AES-GCM", iv: u }, d, new TextEncoder().encode(JSON.stringify(o))), f = {
        format: "argus-encrypted-backup",
        version: 1,
        kdf: "PBKDF2-SHA256",
        iterations: 25e4,
        cipher: "AES-256-GCM",
        salt: this._bytesToBase64(s),
        iv: this._bytesToBase64(u),
        data: this._bytesToBase64(new Uint8Array(m))
      }, h = new Blob([JSON.stringify(f)], { type: "application/json" }), S = URL.createObjectURL(h), b = document.createElement("a");
      b.href = S, b.download = `argus_backup_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.argus`, b.click(), setTimeout(() => URL.revokeObjectURL(S), 5e3);
    } catch (r) {
      alert(this._format("export_error", { error: r.message }));
    }
  }
  _importConfig(r) {
    const i = r.target.files[0];
    if (!i) return;
    r.target.value = "";
    const o = new FileReader();
    o.onload = async (s) => {
      try {
        let u = JSON.parse(s.target.result);
        if (u?.format === "argus-encrypted-backup") {
          const d = await this._requestBackupPassword("decrypt");
          if (d === null) return;
          try {
            const m = this._base64ToBytes(u.salt), f = this._base64ToBytes(u.iv), h = await this._backupKey(d, m, ["decrypt"]), S = await crypto.subtle.decrypt({ name: "AES-GCM", iv: f }, h, this._base64ToBytes(u.data));
            u = JSON.parse(new TextDecoder().decode(S));
          } catch {
            throw new Error(this._backupText("bad"));
          }
        }
        if (typeof u != "object" || u === null)
          throw new Error(this._t("invalid_config"));
        await this._send("argus/restore_config", { config: u }), alert(this._t("import_success")), window.location.reload();
      } catch (u) {
        alert(this._format("import_error", { error: u.message }));
      }
    }, o.onerror = () => alert(this._t("file_read_error")), o.readAsText(i);
  }
  async _resetConfig() {
    if (confirm(this._t("reset_confirm")))
      try {
        this._undoState = JSON.parse(JSON.stringify(this._ui));
        const r = {};
        await this._send("argus/restore_config", { config: r }), this.shadowRoot.getElementById("btn-reset-config").style.display = "none", this.shadowRoot.getElementById("btn-undo-reset").style.display = "block", alert(this._t("reset_success")), this._resetTimer = setTimeout(() => {
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
      } catch (r) {
        alert(this._format("undo_error", { error: r.message }));
      }
  }
  _bindStatic() {
    const r = (u) => this.shadowRoot.getElementById(u);
    r("selector-close").addEventListener("click", () => this._closeModal()), r("selector-accept").addEventListener("click", () => this._acceptSelection()), r("selector-clear").addEventListener("click", () => {
      this._selected = [], this._renderSelector(!0);
    }), r("selector-search").addEventListener("input", () => {
      clearTimeout(this._searchDebounce), this._searchDebounce = setTimeout(() => this._renderSelector(!0), 120);
    }), r("selector-modal").addEventListener("click", (u) => {
      u.target.id === "selector-modal" && this._closeModal();
    }), r("selector-select-all").addEventListener("click", () => this._selectAll()), r("selector-deselect-all").addEventListener("click", () => {
      this._selected = [], this._renderSelector(!0);
    }), r("btn-new-auto").addEventListener("click", () => {
      history.pushState(null, "", "/config/automation/edit/new"), window.dispatchEvent(new CustomEvent("location-changed"));
    }), r("btn-access-users")?.addEventListener("click", () => this._toggleAccessSection("users")), r("btn-access-pin")?.addEventListener("click", () => this._toggleAccessSection("pin")), r("btn-save-pin").addEventListener("click", () => this._savePin()), r("lnk-forgot-pin")?.addEventListener("click", (u) => {
      u.preventDefault(), this._handleForgotPin();
    }), r("pin-forgot-link")?.addEventListener("click", (u) => {
      u.preventDefault(), this._handleForgotPin();
    }), r("pin-close").addEventListener("click", () => this._closePinModal()), r("pin-cancel").addEventListener("click", () => this._closePinModal()), r("pin-modal").addEventListener("click", (u) => {
      u.target.id === "pin-modal" && this._closePinModal();
    }), r("pin-confirm").addEventListener("click", () => this._submitPin()), r("pin-input").addEventListener("keydown", (u) => {
      u.key === "Enter" && this._submitPin();
    }), this.shadowRoot.querySelectorAll("[data-pin-digit]").forEach(
      (u) => u.addEventListener("click", () => this._appendPinDigit(u.dataset.pinDigit))
    ), r("pin-backspace").addEventListener("click", () => this._backspacePin()), r("btn-add-notif")?.addEventListener("click", () => this._addNotifTarget()), r("btn-save-notif")?.addEventListener("click", () => this._saveNotifications()), r("btn-edit-home-name-standalone")?.addEventListener("click", () => this._editHomeName()), r("home-name-modal-close").addEventListener("click", () => this._closeHomeNameModal()), r("home-name-cancel").addEventListener("click", () => this._closeHomeNameModal()), r("home-name-modal").addEventListener("click", (u) => {
      u.target.id === "home-name-modal" && this._closeHomeNameModal();
    }), r("home-name-save").addEventListener("click", () => this._saveHomeName()), r("home-name-input").addEventListener("keydown", (u) => {
      u.key === "Enter" && this._saveHomeName();
    }), r("btn-edit-widgets")?.addEventListener("click", () => this._toggleWidgetEditing());
    const i = r("lbl-aesthetic-custom"), o = r("personalize-workspace");
    i && o && !i._boundToggle && (i._boundToggle = !0, i.addEventListener("click", () => {
      const u = o.classList.toggle("collapsed"), d = r("personalize-chevron");
      d && (d.textContent = u ? "▼" : "▲");
    })), r("btn-lang-picker")?.addEventListener("click", () => this._openLangModal()), r("lang-modal-close")?.addEventListener("click", () => this._closeLangModal()), r("lang-modal")?.addEventListener("click", (u) => {
      u.target.id === "lang-modal" && this._closeLangModal();
    });
    const s = () => {
      r("sos-modal")?.classList.remove("open"), this._sosEntryIdx = null, r("sos-thumb") && (r("sos-thumb").style.left = "6px", r("sos-thumb").closest(".ios-slider-track").style.background = "rgba(217,4,41,0.15)");
    };
    r("btn-cancel-sos")?.addEventListener("click", s), r("sos-close-x")?.addEventListener("click", s), r("sos-modal")?.addEventListener("click", (u) => {
      u.target.id === "sos-modal" && s();
    }), r("bg-mode-select-standalone")?.addEventListener("change", () => this._updateBgFieldsVisibility()), r("hub-bg-mode-select")?.addEventListener("change", () => this._updateBgFieldsVisibility()), r("panel-bg-file-input")?.addEventListener("change", (u) => this._handlePanelBgFile(u)), r("hub-bg-file-input")?.addEventListener("change", (u) => this._handleHubBgFile(u));
  }
  /* ── WebSocket ───────────────────────────────────────────────────── */
  async _connect() {
    if (typeof this._hass?.callWS != "function")
      throw new Error("Home Assistant authenticated WebSocket is unavailable");
  }
  _send(r, i = {}) {
    return typeof this._hass?.callWS != "function" ? Promise.reject(new Error("Home Assistant authenticated WebSocket is unavailable")) : this._hass.callWS({ type: r, ...i });
  }
  /* ── Load dashboard ──────────────────────────────────────────────── */
  async _load() {
    this.shadowRoot.querySelector(".wrap")?.classList.remove("wrap-ready");
    let r;
    try {
      r = await this._send("argus/login_bootstrap");
    } catch ($) {
      console.error("Argus bootstrap load failed:", $);
      return;
    }
    this._bootstrap = r;
    const i = r.user_theme || { background_mode: "default", background_file: "" };
    this._currentUserTheme = i, i.background_mode !== "default" && i.background_file ? (this._backgroundMode = i.background_mode, this._panelBgFile = i.background_file, this._backgroundImages = [i.background_file]) : i.background_mode !== "default" && i.background_mode ? (this._backgroundMode = i.background_mode, this._panelBgFile = "", this._backgroundImages = []) : (this._backgroundMode = r.background_mode || "none", this._panelBgFile = "", this._backgroundImages = r.background_images || []), r.weather_source && (this._weatherSource = r.weather_source), r.temperature_source && (this._temperatureSource = r.temperature_source);
    try {
      const $ = localStorage.getItem("argus_lang");
      $ && $ !== "auto" ? this._manualLang = $ : r.language && r.language !== "auto" && (!this._hass?.language?.startsWith("es") || r.language === "es") ? this._manualLang = r.language : this._manualLang = null;
    } catch {
    }
    if (this._updateCanvasBackground(), r.configuration_missing) {
      this._loadState = "configuration_missing", this._renderMissingConfigurationScreen();
      return;
    }
    if (r.first_run) {
      this._loadState = "first_run", this._renderFirstRunScreen();
      return;
    }
    if (r.legacy_claim_needed) {
      this._loadState = "legacy_claim", this._renderLegacyClaimScreen();
      return;
    }
    const o = this.hasAttribute("compact") || this.classList.contains("argus-compact") || !!this._cardConfig?.compact;
    if (!r.has_active_session || !this._profileSelectedThisMount)
      if (o) {
        this._profileSelectedThisMount = !0;
        const $ = (r.users || []).find((G) => G.is_own_profile) || (r.users || [])[0];
        if ($ && !r.has_active_session)
          try {
            await this._send("argus/select_profile", { argus_user_id: $.id });
          } catch {
          }
      } else {
        this._loadState = "profile_selection", this._renderLoginScreen(r);
        return;
      }
    this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-pin-prompt").forEach(($) => $.remove());
    let s;
    try {
      s = await this._send("argus/dashboard");
    } catch ($) {
      if (o) {
        const G = this._config?.entity || "alarm_control_panel.argus", Z = this._hass?.states[G];
        s = {
          entries: [{
            entity_id: G,
            name: Z?.attributes?.friendly_name || "Argus Security",
            state: Z?.state || "unavailable",
            pin_configured: !0
          }]
        };
      } else {
        if ($.message.includes("permission") || $.message.includes("session") || $.message.includes("unauthorized")) {
          this._renderLoginScreen(r);
          return;
        }
        console.error("Argus dashboard load failed:", $);
        return;
      }
    }
    if (o && s?.entries?.length) {
      const $ = this._config?.entity || "alarm_control_panel.argus";
      let G = s.entries.find((Z) => Z.entity_id === $);
      G || (G = s.entries[0]), s.entries = [G];
    }
    this._dashboard = s, this._available = s.available_entities || [], this._ui = s.ui || { modes: {}, dashboard: {} }, this._notifTargets = s.ui?.notif_targets || [], this._users = Array.isArray(s.ui?.users) ? s.ui.users.filter(($) => $ && typeof $ == "object" && !Array.isArray($)) : [], this._homeName = s.ui?.home_name || "", this._emergencyNumber = s.ui?.emergency_number || "911", this._loadState = "dashboard", this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready"), this._currentProfile = s.current_profile || null;
    const u = this.shadowRoot.getElementById("bootstrap-overlay");
    u && (this._currentProfile && !this._welcomeShownThisMount ? u.style.display = "flex" : u.style.display = "none"), await this._loadActivityTimeline(s.entry_id), this._panicOutputs = s.ui?.panic_outputs || [];
    const d = this._users.find(($) => $.id === this._currentProfile?.id) || {};
    this._backgroundMode = d.background_mode || s.ui?.background_mode || "weather", this._backgroundImages = d.background_images || s.ui?.background_images || [], this._temperatureSource = s.ui?.temperature_source || "auto", this._weatherSource = s.ui?.weather_source || "auto", this._clockFormat = s.ui?.clock_format || "auto", this._panelBgFile = d.panel_bg_file !== void 0 ? d.panel_bg_file : s.ui?.panel_bg_file || "", this._panelBgSound = !!(d.panel_bg_sound !== void 0 ? d.panel_bg_sound : s.ui?.panel_bg_sound);
    const m = d.hub_bg_mode || s.ui?.hub_bg_mode || "none";
    this._hubBgMode = m === "none" || m === "default" ? "default" : m, this._hubBgFile = d.hub_bg_file !== void 0 ? d.hub_bg_file : s.ui?.hub_bg_file || "", this._hubBgSound = !!(d.hub_bg_sound !== void 0 ? d.hub_bg_sound : s.ui?.hub_bg_sound), this._updateTheme(), this._updateHomeNameDisplay(), this._updateProfileBadge(), this._populateTemperatureSources();
    const f = this.shadowRoot.getElementById("temp-source-select-standalone");
    f && (f.value = this._temperatureSource || "auto", f.dataset.bound || (f.dataset.bound = "1", f.addEventListener("change", () => this._savePersonalization()))), this._populateWeatherSources();
    const h = this.shadowRoot.getElementById("weather-source-select");
    h && (h.value = this._weatherSource || "auto", h.dataset.bound || (h.dataset.bound = "1", h.addEventListener("change", () => this._savePersonalization())));
    const S = this.shadowRoot.getElementById("argus-clock-format-select");
    S && (this._clockFormat = this._ui?.clock_format || this._dashboard?.clock_format || "auto", S.value = this._clockFormat, S.dataset.bound || (S.dataset.bound = "1", S.addEventListener("change", () => this._savePersonalization())));
    const b = this.shadowRoot.getElementById("emergency-number-input");
    b && (b.value = this._emergencyNumber), this._renderSosOutputs(), this._configureEmergencyCall();
    const k = this.shadowRoot.getElementById("bg-mode-select-standalone");
    k && (k.innerHTML = `
        <option value="weather">${this._t("bg_weather")}</option>
        <option value="none">${this._t("bg_panel_none")}</option>
        <option value="photo">${this._t("bg_photo")}</option>
        <option value="collage">${this._t("bg_collage")}</option>
      `, k.value = this._backgroundMode || "weather");
    const P = this.shadowRoot.getElementById("hub-bg-mode-select");
    P && (P.innerHTML = `
        <option value="default">${this._t("bg_hub_default")}</option>
        <option value="image">${this._t("bg_image_opt")}</option>
        <option value="weather">Clima animado</option>
      `, P.value = this._hubBgMode || "default");
    const L = this.shadowRoot.getElementById("panel-bg-url-input");
    L && (L.value = this._panelBgFile && !this._panelBgFile.startsWith("data:") ? this._panelBgFile : "");
    const z = this.shadowRoot.getElementById("chk-panel-bg-sound");
    z && (z.checked = this._panelBgSound);
    const C = this.shadowRoot.getElementById("hub-bg-url-input");
    C && (C.value = this._hubBgFile && !this._hubBgFile.startsWith("data:") ? this._hubBgFile : "");
    const w = this.shadowRoot.getElementById("chk-hub-bg-sound");
    w && (w.checked = this._hubBgSound), this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._isAdmin = s.current_profile?.role === "admin", this._permissions = s.current_profile?.permissions || {};
    const _ = s.entries?.[0]?.entity_id;
    if (_ ? ((!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = _), this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null)) : (!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = null), this._isAdmin)
      try {
        const $ = await this._send("argus/get_ha_users");
        this._haUsersList = $?.ha_users || [];
      } catch ($) {
        console.warn("Could not fetch HA users:", $);
      }
    const x = s.entries?.[0]?.pin_configured === !0, g = this.shadowRoot.getElementById("current-pin-display"), v = this.shadowRoot.getElementById("group-current-pin");
    g && (g.textContent = x ? this._t("pin_active_yes") : this._t("pin_active_no")), v && (x ? v.classList.remove("collapsed") : v.classList.add("collapsed"));
    const E = this.shadowRoot.getElementById("lnk-forgot-pin");
    E && (E.style.display = x ? "inline" : "none");
    const A = this.shadowRoot.getElementById("pin-forgot-link");
    A && (A.style.display = x ? "inline" : "none"), [
      ["instances", () => this._renderEntries()],
      ["activity log", () => this._renderActivityLog()],
      ["mode tabs", () => this._renderModeTabs()],
      ["mode view", () => this._renderModeView()],
      ["automations", () => this._renderAutomations()],
      ["notifications", () => this._renderNotifications()],
      ["users", () => this._renderUsers()]
    ].forEach(([$, G]) => {
      try {
        G();
      } catch (Z) {
        console.error(`Argus ${$} render failed:`, Z);
      }
    }), this._loadUploadedFiles(), this._refreshLocalizedUi();
    const M = s.entries && s.entries.length > 0, V = M && s.entries[0].entity_id;
    M && !V ? this._loadRetryTimeout || (this._loadRetryTimeout = setTimeout(() => {
      this._loadRetryTimeout = null, this._load();
    }, 1500)) : this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null);
  }
  /* ── Entries (alarm instances) ───────────────────────────────────── */
  _getSensorBattery(r, i) {
    return this._getDevicePower(r, i).battery;
  }
  // Read only values that Home Assistant exposes. In particular, do not use a
  // lightning icon or assume 100% just because an entity has no battery sensor.
  _getDevicePower(r, i) {
    if (!r) return { battery: null, mains: !1 };
    const o = i?.attributes || {}, s = [o.battery_level, o.battery, o.battery_percentage].find((h) => h != null && h !== "" && Number.isFinite(Number(h)));
    let u = s === void 0 ? null : Math.max(0, Math.min(100, Math.round(Number(s))));
    const d = String(o.power_source || o.power_supply || o.power_type || "").toLowerCase(), m = o.mains_powered === !0 || o.is_mains_powered === !0 || o.wired === !0 || /(?:mains|ac|wired|line|external|toma|corriente)/.test(d), f = r.split(".")[0];
    if (["switch", "light", "fan", "script", "input_boolean", "siren"].includes(f) && u === null)
      return { battery: null, mains: !0 };
    if (u === null && this._hass?.states) {
      let h = null;
      const S = r.split(".").slice(1).join(".").toLowerCase(), b = S.replace(/_(contact|door|window|motion|occupancy|opening|sensor|iaszone|ias_zone)$/i, ""), k = [
        `sensor.${S}_battery`,
        `sensor.${b}_battery`,
        `sensor.${S}_battery_level`,
        `sensor.${b}_battery_level`,
        `sensor.${S}_battery_percentage`,
        `sensor.${b}_battery_percentage`
      ];
      for (const P of k) {
        const L = this._hass.states[P];
        if (L && L.state !== "unavailable" && L.state !== "unknown" && Number.isFinite(Number(L.state))) {
          h = L.state;
          break;
        }
      }
      if (h === null) {
        const P = (this._available || []).find((L) => L.entity_id === r);
        if (P && P.device_id) {
          const L = (this._available || []).find(
            (z) => z.device_id === P.device_id && z.entity_id !== r && (this._hass?.states?.[z.entity_id]?.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(z.entity_id))
          );
          if (L) {
            const z = this._hass?.states?.[L.entity_id];
            z && z.state !== "unavailable" && z.state !== "unknown" && Number.isFinite(Number(z.state)) && (h = z.state);
          }
        }
      }
      if (h !== null) {
        const P = Number(h);
        Number.isFinite(P) && (u = Math.max(0, Math.min(100, Math.round(P))));
      }
    }
    return { battery: u, mains: m };
  }
  _deviceFacts(r, i, o = !0) {
    const s = i?.state || "unknown", u = ["on", "unlocked", "open", "recording", "active", "motion"].includes(s), d = { on: this._t("status_open"), off: this._t("status_closed"), locked: this._t("status_closed"), unlocked: this._t("status_open"), idle: this._t("status_idle"), recording: this._t("status_recording"), home: this._t("status_home"), not_home: this._t("status_away") }, m = r.split(".")[0], f = ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(m), h = this._getDevicePower(r, i), S = [];
    if (o && S.push({ text: f ? s.toUpperCase() : d[s] || s, className: f ? "" : u ? "status-open" : "status-closed" }), h.mains && S.push({ text: "🔌 AC", className: "power-mains" }), h.battery !== null) {
      const b = h.battery === 0, k = h.battery <= 20 && !b, P = b ? "🔋 ❌" : `🔋 ${h.battery}%`, L = b ? "dead" : k ? "low" : "";
      S.push({ text: P, className: `pill-power ${L}` });
    }
    return S;
  }
  _renderBatteryAlerts(r) {
    if (!this._hass?.states) return "";
    let i = Array.isArray(r) && r.length ? r : [];
    if (!i.length) {
      const d = this._ui?.modes || {}, m = /* @__PURE__ */ new Set();
      ["away", "home", "night"].forEach((f) => {
        const h = d[f]?.sensors;
        Array.isArray(h) && h.forEach((S) => m.add(S));
      }), this._ui?.modes?.__by_entity__ && Object.values(this._ui.modes.__by_entity__).forEach((f) => {
        ["away", "home", "night"].forEach((h) => {
          const S = f[h]?.sensors;
          Array.isArray(S) && S.forEach((b) => m.add(b));
        });
      }), i = Array.from(m);
    }
    if (!i.length) return "";
    const o = [];
    if (i.forEach((d) => {
      const m = this._hass?.states[d];
      if (!m) return;
      const f = this._getDevicePower(d, m);
      if (f.battery !== null && Number.isFinite(f.battery) && f.battery <= 20 && !f.mains) {
        const h = m.attributes?.friendly_name || d.split(".")[1] || d;
        o.push({ name: h, level: f.battery });
      }
    }), !o.length) return "";
    const s = (d) => this._t(d);
    return `<div class="battery-alerts-container" style="position:absolute; top:18px; left:18px; z-index:15; display:flex; flex-direction:column; gap:6px; max-width:75%; pointer-events:none;">${o.map((d) => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${s("battery_low")}: ${this._escapeHtml(d.name)} (${d.level}%)</div>`).join("")}</div>`;
  }
  _modeButtonIcon(r) {
    const i = {
      home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5z"/><path d="M9 21v-6h6v6"/>',
      away: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="M8.5 12h7M12 8.5v7"/>',
      night: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/><path d="m17.5 4 .5 1.2L19.2 6l-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.8z"/>',
      vacation: '<path d="M3 13.5 21 5l-6.8 15-2.3-6.2z"/><path d="m11.9 13.8 3.4 3.4M11.9 13.8 7.2 12"/>',
      disarm: '<path d="M12 3 20 6.5v5.2c0 5-3.4 8-8 9.8-4.6-1.8-8-4.8-8-9.8V6.5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      sos: '<path d="M12 3 21 20H3z"/><path d="M12 9v4.5M12 17h.01"/>'
    };
    return `<svg class="mode-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i[r] || i.disarm}</svg>`;
  }
  _renderPremiumStatusIcon(r, i, o = "0") {
    const s = i ? "triggered" : { armed_home: "home", armed_away: "away", armed_night: "night", armed_vacation: "vacation", disarmed: "disarm" }[r] || "disarm", u = { home: "#ffb700", away: "#ff3344", night: "#3898ff", vacation: "#d69cff", disarm: "#00ff8c", triggered: "#ff1744" }[s], d = { home: "rgba(255,183,0,0.65)", away: "rgba(255,51,68,0.7)", night: "rgba(56,152,255,0.65)", vacation: "rgba(214,156,255,0.65)", disarm: "rgba(0,255,140,0.65)", triggered: "rgba(255,23,68,0.85)" }[s], m = {
      home: '<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away: '<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night: '<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
      vacation: '<path d="m67 113 66-34-28 66-9-25z"/><path d="m96 120 15 15M96 120l-20-6"/>',
      disarm: '<path d="m76 104 16 16 34-39"/>',
      triggered: '<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[s];
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 0 35px ${d}) drop-shadow(0 0 70px ${d}) drop-shadow(0 20px 40px rgba(0,0,0,.7));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(s)}"><defs><linearGradient id="premium-${s}-${o}" x1="20%" y1="5%" x2="85%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".85"/><stop offset=".18" stop-color="${u}" stop-opacity=".98"/><stop offset=".65" stop-color="${u}" stop-opacity=".4"/><stop offset="1" stop-color="#01040a" stop-opacity=".85"/></linearGradient><linearGradient id="shield-inner-${s}-${o}" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".3"/><stop offset=".35" stop-color="${u}" stop-opacity=".15"/><stop offset="1" stop-color="transparent"/></linearGradient><filter id="premium-glow-${s}-${o}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="5.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${s}-${o})" stroke="${u}" stroke-width="3.5" filter="url(#premium-glow-${s}-${o})"/><path d="M100 28 152 50v38c0 38-21 62-52 79-31-17-52-41-52-79V50z" fill="url(#shield-inner-${s}-${o})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(2,6,14,.55)" stroke="rgba(255,255,255,.35)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${s}-${o})">${m}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${u}" stroke-opacity=".65" stroke-width="2.5"><animate attributeName="r" values="50;62;50" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;.08;.8" dur="3.2s" repeatCount="indefinite"/></circle></svg>`;
  }
  _getIntelligentSVG(r, i, o, s, u = "0") {
    return this._renderPremiumStatusIcon(r, s, u);
  }
  _renderEntries() {
    this._sosBound = !1;
    const r = this.shadowRoot.getElementById("entries"), i = this.shadowRoot.getElementById("global-status"), o = this._dashboard?.entries || [], s = (x) => this._t(x);
    if (!o.length) {
      r.innerHTML = `<div class="small" style="padding:10px">${s("no_instances")}</div>`;
      return;
    }
    i && (i.innerHTML = "");
    const d = this._getWeatherEntity().state || "sunny", m = this._hass?.states?.["sun.sun"]?.state === "below_horizon", f = this._weatherPresentation(d, m), h = (x) => {
      const g = String(s(x) || "").trim(), v = g.indexOf(" ");
      return v > 0 && v <= 3 ? g.substring(v + 1).trim() : g;
    }, S = /* @__PURE__ */ new Date(), b = this._formatTime(S), k = this.shadowRoot.getElementById("hero-clock-time"), P = this.shadowRoot.getElementById("hero-clock-date"), L = this.shadowRoot.getElementById("hero-weather-pill"), z = this.shadowRoot.getElementById("hero-security-pill"), C = o.some((x) => {
      const g = this._hass?.states[x.entity_id]?.state || x.state;
      return String(g).startsWith("armed") || g === "triggered" || g === "pending";
    });
    k && (k.textContent = b), P && (P.textContent = S.toLocaleDateString(this._getLocale(), { weekday: "short", month: "short", day: "numeric" })), L && (L.textContent = `${f.icon} ${f.label}`), z && (z.innerHTML = `<i class="hero-live" style="background:${C ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${C ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml(s(C ? "system_armed" : "system_disarmed"))}`), Array.from(r.querySelectorAll("article.entry")).length !== o.length && (r.innerHTML = o.map((x, g) => `<article class="entry" data-idx="${g}"></article>`).join(""));
    const _ = r.querySelectorAll("article.entry");
    if (o.forEach((x, g) => {
      const v = _[g], A = this._hass?.states[x.entity_id]?.state || x.state || "unavailable", M = A === "triggered";
      this._hass?.states?.[x.entity_id]?.attributes?.argus_panic_active, x.pin_configured === !0 || x.user_pin_configured;
      const V = this._hass?.config?.location_name || this._homeName || s("home_fallback");
      this._getDisplayedTemperature(), this._getTemperatureReadings(), {
        disarmed: { label: s("disarmed"), accent: "#55df91" },
        armed_home: { label: s("mode_home"), accent: "#ffb54d" },
        armed_away: { label: s("mode_away"), accent: "#ff724f" },
        armed_night: { label: s("mode_night"), accent: "#8ab9ff" },
        armed_vacation: { label: s("mode_vacation"), accent: "#d59bff" },
        triggered: { label: s("log_triggered"), accent: "#ff4d5d" },
        pending: { label: s("system_armed"), accent: "#ffb54d" }
      }[A] || A.replace(/_/g, " "), f.label;
      const $ = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log[0] : null;
      $ && this._localizeActivityDetail(String($.action || ""), String($.detail || ""));
      const G = A.replace("armed_", "");
      let Z = this._ui?.modes?.__by_entity__?.[x.entity_id]?.[G] || this._ui?.modes?.[G] || {};
      if (M && !(Z.sensors || []).length) {
        const ae = this._ui?.modes?.__by_entity__?.[x.entity_id] || this._ui?.modes || {};
        Z = ["away", "home", "night", "vacation"].map((fe) => ae[fe]).find((fe) => (fe?.sensors || []).some((ye) => ["on", "open", "unlocked", "recording", "active", "motion"].includes(this._hass?.states?.[ye]?.state))) || {};
      }
      let ee = Z.sensors || [];
      if (A === "disarmed" || !ee.length) {
        const ae = this._ui?.modes?.__by_entity__?.[x.entity_id] || this._ui?.modes || {}, fe = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((ye) => {
          ae[ye]?.sensors && ae[ye].sensors.forEach((Ae) => fe.add(Ae));
        }), ee = Array.from(fe);
      }
      const ne = Z.bypassed_sensors || [], le = ee.filter((ae) => !ne.includes(ae)), ge = ["on", "open", "unlocked", "recording", "active", "motion"], de = !!this._hass?.states?.[x.entity_id]?.attributes?.arming_waiting_for_sensors, Q = Array.isArray(this._hass?.states?.[x.entity_id]?.attributes?.arming_blocking_sensors) ? this._hass?.states?.[x.entity_id]?.attributes?.arming_blocking_sensors : [], F = le.some((ae) => ge.includes(this._hass?.states?.[ae]?.state)) && (A.startsWith("armed") || A === "pending" || de) && !M, N = this._fullscreenIdx === g || this._kioskLocked && (this._kioskEntryId === x.entry_id || o.length === 1);
      v.className = `entry cinematic-entry ${N ? "ios-fullscreen" : ""}`, v.style.cssText = M ? "border:3px solid #ff5252;box-shadow:0 0 30px rgba(255,82,82,.4)" : "", v.querySelectorAll(".wx-webgl").forEach((ae) => ae._argusWebglStop?.());
      const B = le.map((ae) => {
        const fe = this._hass?.states[ae];
        if (!fe) return "";
        const ye = ge.includes(fe.state), Ae = fe.attributes?.friendly_name || ae.split(".")[1] || ae, Le = fe.attributes?.device_class || (ae.startsWith("lock.") ? "lock" : "door");
        let J = "";
        Le === "lock" ? J = ye ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>' : Le === "window" ? J = ye ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14l16 0"></path><path d="M4 10l16 0"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M4 12h16M12 4v16"></path></svg>' : Le === "motion" ? J = ye ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M4.93 4.93a10 10 0 0 1 14.14 0M4.93 19.07a10 10 0 0 0 14.14 0"></path></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle></svg>' : J = ye ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V2h12v20H4z"></path><path d="M16 4h4v18H4z"></path><circle cx="12" cy="12" r="1"></circle></svg>' : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V2h12v20H6z"></path><circle cx="14" cy="12" r="1"></circle></svg>';
        const pe = this._getDevicePower(ae, fe);
        let ze = "";
        if (pe.battery !== null) {
          const Ne = pe.battery === 0, Be = pe.battery <= 10 && !Ne, Ue = Ne ? "🔋 ❌" : `🔋 ${pe.battery}%`;
          (Ne || Be) && (ze = `<span style="margin-left:8px;font-size:10px;font-weight:700;color:#ff5252;background:rgba(255,255,255,0.1);backdrop-filter:blur(4px);padding:2px 6px;border-radius:10px;border:1px solid rgba(255,82,82,0.3);text-shadow:0 0 5px rgba(255,82,82,0.5);">${Ue}</span>`);
        }
        const Re = de && Q.includes(ae);
        return `<div class="console-sensor ${ye ? "open" : ""}"><span class="console-sensor-icon" style="display:flex;align-items:center;justify-content:center;color:${Re ? "#ffd700" : ye ? "#ff968b" : "#75f4b0"};${Re ? "animation:pulse 1s infinite;" : ye ? "animation:pulse 2s infinite;" : ""}">${J}</span><span class="console-sensor-name" style="${Re ? "color:#ffd700" : ""}">${this._escapeHtml(Ae)}</span><span class="console-sensor-state" style="color:${Re ? "#ffd700" : ye ? "#ff968b" : "#75f4b0"}">${this._escapeHtml(s(ye ? "status_open" : "status_closed"))}${ze}</span></div>`;
      }).join("");
      v.innerHTML = `
          ${this._renderEntryBackground(d, m)}
          ${this._kioskLocked ? `<button class="btn-unlock-kiosk" data-action="unlock-kiosk" style="position:absolute;top:16px;right:16px;z-index:99;padding:8px 14px;background:rgba(220,38,38,0.85);color:white;border:none;border-radius:10px;font-weight:600;font-size:13px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 4px 12px rgba(0,0,0,0.4)">🔓 ${this._escapeHtml(s("unlock_kiosk") || "Desbloquear kiosco")}</button>` : ""}
          ${N ? `<button class="ghost entry-exit-fs" data-exit-fullscreen title="${this._escapeHtml(s("fullscreen_title"))}" aria-label="${this._escapeHtml(s("fullscreen_title"))}" style="position:absolute;top:24px;left:24px;z-index:120;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);backdrop-filter:blur(12px);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 20px rgba(0,0,0,.3)">×</button>` : ""}
          ${N ? "" : `<button class="ghost fs-btn entry-fs" data-fullscreen="${g}" title="${this._escapeHtml(s("fullscreen_title"))}" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>`}
          ${this._renderBatteryAlerts(le)}
          <div class="entry-content security-console">
            <!-- Symmetrical HUD bar at top of console -->
            <div class="console-hud">
              <span class="console-hud-loc">🏡 ${this._escapeHtml(V)}</span>
              <div class="argus-connection-pill" data-online="true"><i class="argus-connection-dot"></i><span class="argus-connection-label">${this._escapeHtml(s("connected") || "CONECTADO")}</span></div>
              <div class="console-hud-right">
                <span class="console-system-badge console-system-badge--${M ? "triggered" : A}">${this._escapeHtml(
        M ? s("system_triggered") || "ALARMA ACTIVADA" : de ? s("waiting_sensors") || "ESPERANDO SENSORES" : A === "disarmed" ? s("system_disarmed") : A === "armed_home" ? s("system_armed") + " · " + (s("mode_home") || "CASA") : A === "armed_away" ? s("system_armed") + " · " + (s("mode_away") || "AUSENTE") : A === "armed_night" ? s("system_armed") + " · " + (s("mode_night") || "NOCHE") : A === "armed_vacation" ? s("system_armed") + " · " + (s("mode_vacation") || "VACACIONES") : s("system_armed")
      )}</span>
              </div>
            </div>
            <div class="entry-icon" style="display:flex;justify-content:center;animation:float-icon 5s ease-in-out infinite;">
              ${this._getIntelligentSVG(de ? "pending" : A, null, m, M, g)}
            </div>
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${A === "armed_home" ? "active" : ""} ${F && A === "armed_home" ? "buzz-orange" : ""}" data-idx="${g}" data-action="home">${this._modeButtonIcon("home")}<span>${this._escapeHtml(h("btn_home"))}</span></button>
              <button class="liquid-btn btn-away ${A === "armed_away" ? "active" : ""} ${F && A === "armed_away" ? "buzz-orange" : ""}" data-idx="${g}" data-action="away">${this._modeButtonIcon("away")}<span>${this._escapeHtml(h("btn_away"))}</span></button>
              <button class="liquid-btn btn-night ${A === "armed_night" ? "active" : ""} ${F && A === "armed_night" ? "buzz-orange" : ""}" data-idx="${g}" data-action="night">${this._modeButtonIcon("night")}<span>${this._escapeHtml(h("btn_night"))}</span></button>
              ${A !== "disarmed" ? `<button class="liquid-btn btn-disarm" data-idx="${g}" data-action="disarm"><span style="font-size: 20px;">🛡️</span><span>${this._escapeHtml(h("btn_disarmed") || "DESARMAR")}</span></button>` : ""}
            </div>
            <div class="console-sensors">${B || `<div class="console-empty">${this._escapeHtml(ee.length === 0 ? s("no_sensors_configured") || "Sin sensores de intrusión configurados." : s("all_sensors_bypassed") || "Todos los sensores configurados están omitidos.")}</div>`}</div>

          </div>
      `;
    }), r.querySelectorAll('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])').forEach(
      (x) => x.addEventListener("click", (g) => this._handleAction(g.currentTarget.dataset.idx, g.currentTarget.dataset.action))
    ), r.querySelectorAll('button[data-action="unlock-kiosk"]').forEach(
      (x) => x.addEventListener("click", () => this._requestKioskUnlock())
    ), r.querySelectorAll('button[data-action="sos"]').forEach(
      (x) => x.addEventListener("click", () => {
        this._sosEntryIdx = Number(x.dataset.idx);
        const g = this.shadowRoot.getElementById("sos-modal");
        g && g.classList.add("open");
      })
    ), r.querySelectorAll('button[data-action="stop-sos"]').forEach(
      (x) => x.addEventListener("click", () => this._stopSOS(Number(x.dataset.idx)))
    ), r.querySelectorAll("button[data-fullscreen]").forEach((x) => {
      x.addEventListener("click", (g) => this._toggleFullscreen(g.currentTarget.closest(".entry")));
    }), r.querySelectorAll("button[data-exit-fullscreen]").forEach((x) => {
      x.addEventListener("click", () => this._exitFullscreenView());
    }), r.querySelectorAll(".wx-webgl").forEach((x) => {
      x._argusRO && x._argusRO.disconnect();
      const g = () => {
        x._argusWebglInit || (x.clientWidth > 0 || x.offsetWidth > 0) && x.isConnected && (x._argusWebglInit = !0, this._initWeatherWebGL(x));
      };
      typeof ResizeObserver < "u" && (x._argusRO = new ResizeObserver(() => {
        g(), x._argusRO?.disconnect();
      }), x._argusRO.observe(x.parentElement || x)), x.clientWidth > 0 ? g() : requestAnimationFrame(() => {
        x.clientWidth > 0 ? g() : setTimeout(() => g(), 200);
      });
    }), this._bindSOS(), this.classList.contains("fullscreen-active")) {
      let x = this.shadowRoot.getElementById("argus-fullscreen-stage");
      x || (x = document.createElement("div"), x.id = "argus-fullscreen-stage", this.shadowRoot.appendChild(x)), x.style.display = "flex";
      const g = r.querySelector(".entry");
      g && (g.classList.add("ios-fullscreen"), x.replaceChildren(g));
    }
  }
  async _exitFullscreenView() {
    const r = this._fullscreenIdx >= 0 ? this._fullscreenIdx : 0, i = (this._dashboard?.entries || [])[r], o = i && (i.pin_configured === !0 || i.user_pin_configured === !0), s = async () => {
      if (document.fullscreenElement || document.webkitFullscreenElement)
        try {
          document.exitFullscreen ? await document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        } catch {
        }
      (this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen"))?.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((m) => m.classList.remove("ios-fullscreen"));
      const d = this.shadowRoot.getElementById("argus-fullscreen-stage");
      d && (d.innerHTML = "", d.style.display = "none"), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this._renderEntries(!0);
    };
    if (!o) {
      await s();
      return;
    }
    this._showPinModal(async (u) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: i.entry_id,
          pin: u || ""
        }), this._closePinModal(), await s();
      } catch {
        const m = this.shadowRoot.getElementById("pin-error");
        m && (m.textContent = "❌ PIN incorrecto o error de acceso", m.style.color = "#ff4a4a");
      }
    });
  }
  _requestKioskUnlock() {
    if (!this._kioskLocked) return;
    const r = (this._dashboard?.entries || []).find((u) => u && u.entry_id === this._kioskEntryId), i = this.shadowRoot.getElementById("pin-error");
    if (!r || !r.entry_id) {
      i && (i.textContent = "Cannot resolve Argus instance", i.style.color = "#ff4a4a");
      return;
    }
    const o = this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry"), s = () => {
      document.exitFullscreen ? document.exitFullscreen().catch(() => {
      }) : document.webkitExitFullscreen && document.webkitExitFullscreen();
      const u = this.shadowRoot.getElementById("argus-fullscreen-stage"), d = this.shadowRoot.getElementById("entries");
      o && (o.classList.remove("ios-fullscreen"), d && o.parentElement === u && d.appendChild(o)), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((m) => {
        m.classList.remove("ios-fullscreen"), d && m.parentElement === u && d.appendChild(m);
      }), u && (u.style.display = "none", u.replaceChildren()), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !1 } })), this._renderEntries(!0);
    };
    if (r.pin_configured !== !0) {
      s();
      return;
    }
    i && (i.textContent = ""), this._showPinModal(async (u) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: r.entry_id,
          pin: u || ""
        }), this._closePinModal(), s();
      } catch (d) {
        i && (i.textContent = d.message || this._t("pin_disarm_error"), i.style.color = "#ff4a4a");
      }
    });
  }
  _toggleFullscreen(r) {
    if (this._kioskLocked) {
      this._requestKioskUnlock();
      return;
    }
    const i = r || this.shadowRoot.querySelector(".entry"), o = i?.querySelector(".entry-fs") || i?.querySelector("[data-fullscreen]"), s = parseInt(o?.dataset?.fullscreen ?? 0), u = isNaN(s) || s < 0 ? 0 : s, d = this._dashboard?.entries?.[u] || this._dashboard?.entries?.[0];
    this._kioskEntryId = d?.entry_id || null, this._kioskTarget = i, this._kioskLocked = !1, this._fullscreenIdx = u, this.classList.add("fullscreen-active"), document.body.style.overflow = "hidden", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !0 } })), this._renderEntries(!0);
    const m = this.requestFullscreen || this.webkitRequestFullscreen || i?.requestFullscreen || i?.webkitRequestFullscreen;
    m && m.call(this).catch(() => {
    });
  }
  _getWeatherGradient(r, i = "") {
    const o = {
      sunny: "linear-gradient(160deg, #4da6ff 0%, #89c4ff 60%, #c8e8ff 100%)",
      clear: "linear-gradient(160deg, #1a1a3e 0%, #2d2d6b 50%, #0f2557 100%)",
      cloudy: "linear-gradient(160deg, #6b7a8d 0%, #9aa5b1 60%, #c5cdd5 100%)",
      partlycloudy: "linear-gradient(160deg, #5b8fd4 0%, #7baee8 50%, #a8c8f0 100%)",
      rainy: "linear-gradient(160deg, #3d4f5c 0%, #5a6e7a 50%, #7a8e96 100%)",
      snowy: "linear-gradient(160deg, #a8bfcf 0%, #c5d8e8 60%, #e8f0f8 100%)",
      stormy: "linear-gradient(160deg, #1a1f2e 0%, #2d3244 50%, #3d4255 100%)",
      fog: "linear-gradient(160deg, #8a9099 0%, #adb5bd 60%, #ced4da 100%)"
    }, s = String(i || r.label || "").toLowerCase(), u = Object.keys(o).find((d) => s.includes(d)) || Object.keys(o).find((d) => r.label?.toLowerCase().includes(d)) || "sunny";
    return o[u];
  }
  _initWeatherWebGL(r) {
    if (!r || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const i = r.parentElement;
    if (i) {
      const g = this._getWeatherEntity()?.state, v = this._hass?.states?.["sun.sun"]?.state === "below_horizon", E = String(g || "sunny").toLowerCase().replace(/[\s-]+/g, "_");
      i.style.background = this._getWeatherGradient(
        this._weatherPresentation(g, v),
        E
      );
    }
    const o = r.getContext("webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, powerPreference: "low-power" }) || r.getContext("experimental-webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, powerPreference: "low-power" });
    if (!o) {
      r.style.opacity = "0";
      return;
    }
    o.clearColor(0, 0, 0, 0);
    const s = "attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}", u = `precision highp float;varying vec2 uv;uniform float time,rain,snow,fog,storm,wind,temp,night,cloudy;
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
gl_FragColor=vec4(col,alpha);}`, d = (g, v) => {
      const E = o.createShader(g);
      return o.shaderSource(E, v), o.compileShader(E), o.getShaderParameter(E, o.COMPILE_STATUS) ? E : null;
    }, m = d(o.VERTEX_SHADER, s), f = d(o.FRAGMENT_SHADER, u);
    if (!m || !f) {
      r.style.opacity = "0";
      return;
    }
    const h = o.createProgram();
    if (o.attachShader(h, m), o.attachShader(h, f), o.linkProgram(h), !o.getProgramParameter(h, o.LINK_STATUS)) {
      r.style.opacity = "0";
      return;
    }
    const S = o.createBuffer();
    o.bindBuffer(o.ARRAY_BUFFER, S), o.bufferData(o.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), o.STATIC_DRAW);
    const b = (g) => o.getUniformLocation(h, g), k = o.getAttribLocation(h, "p"), P = {
      time: b("time"),
      rain: b("rain"),
      snow: b("snow"),
      fog: b("fog"),
      storm: b("storm"),
      wind: b("wind"),
      temp: b("temp"),
      night: b("night"),
      cloudy: b("cloudy"),
      cloudPositions: b("cloudPositions"),
      cloudSizes: b("cloudSizes"),
      cloudAlphas: b("cloudAlphas")
    }, L = {
      rain: Math.max(Number(r.dataset.rain || 0), Number(r.dataset.drizzle || 0) * 0.4),
      snow: Number(r.dataset.snow || 0),
      fog: Number(r.dataset.fog || 0),
      storm: Number(r.dataset.storm || 0),
      wind: Number(r.dataset.wind || 0),
      temp: Number(r.dataset.temp || 20),
      night: Number(r.dataset.night || 0),
      cloudy: Number(r.dataset.cloudy || 0)
    }, C = Array.from({ length: 6 }, () => ({
      x: Math.random() * 800,
      y: 50 + Math.random() * 250,
      rx: 120 + Math.random() * 80,
      ry: 45 + Math.random() * 25,
      speed: 0.1 + Math.random() * 0.3,
      alpha: 0.08 + Math.random() * 0.07
    }));
    let w = 0, _ = !0;
    if (r.width === 0 || r.height === 0 || r.clientWidth === 0 || r.clientHeight === 0) {
      const g = r.parentElement;
      g && g.offsetWidth > 0 ? (r.width = Math.floor(g.offsetWidth * (window.devicePixelRatio || 1)) || 300, r.height = Math.floor(g.offsetHeight * (window.devicePixelRatio || 1)) || 200) : (r.width = 600, r.height = 400);
    }
    const x = (g) => {
      if (!_ || !r.isConnected) return;
      o.clear(o.COLOR_BUFFER_BIT);
      const v = Math.min(window.devicePixelRatio || 1, 1.5), E = Math.max(1, Math.round(r.clientWidth * v)), A = Math.max(1, Math.round(r.clientHeight * v));
      (r.width !== E || r.height !== A) && (r.width = E, r.height = A, o.viewport(0, 0, E, A)), L.cloudy > 0 && C.forEach((G) => {
        G.x -= G.speed, G.x + G.rx < 0 && (G.x = E + G.rx, G.y = 50 + Math.random() * (A - 100));
      });
      const M = [], V = [], $ = [];
      C.forEach((G) => {
        M.push(G.x / E, G.y / A), V.push(G.rx / E, G.ry / A), $.push(L.cloudy > 0 ? G.alpha : 0);
      }), o.useProgram(h), o.enable(o.BLEND), o.blendFunc(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA), o.bindBuffer(o.ARRAY_BUFFER, S), o.enableVertexAttribArray(k), o.vertexAttribPointer(k, 2, o.FLOAT, !1, 0, 0), P.time && o.uniform1f(P.time, g), P.rain && o.uniform1f(P.rain, L.rain), P.snow && o.uniform1f(P.snow, L.snow), P.fog && o.uniform1f(P.fog, L.fog), P.storm && o.uniform1f(P.storm, L.storm), P.wind && o.uniform1f(P.wind, L.wind), P.temp && o.uniform1f(P.temp, L.temp), P.night && o.uniform1f(P.night, L.night), P.cloudy && o.uniform1f(P.cloudy, L.cloudy), P.cloudPositions && o.uniform2fv(P.cloudPositions, M), P.cloudSizes && o.uniform2fv(P.cloudSizes, V), P.cloudAlphas && o.uniform1fv(P.cloudAlphas, $), o.drawArrays(o.TRIANGLE_STRIP, 0, 4), w = requestAnimationFrame(x);
    };
    r._argusWebglStop = () => {
      _ = !1, cancelAnimationFrame(w), o.getExtension("WEBGL_lose_context")?.loseContext();
    }, r.closest(".wx-atmosphere")?.classList.add("webgl-active"), w = requestAnimationFrame(x);
  }
  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _renderAtmosphere(r, i) {
    const o = String(r || "").toLowerCase(), s = (z) => o.includes(z), u = s("thunder") || s("lightning") || s("storm"), d = s("snow") || s("hail") || s("sleet") || s("blizzard"), m = s("drizzle") || s("shower"), f = !m && (s("rain") || s("pouring")), h = s("fog") || s("mist") || s("hazy"), S = s("cloud") || s("overcast");
    let b = "clear";
    u ? b = "storm" : f || m ? b = "rain" : d ? b = "snow" : h ? b = "fog" : s("partly") ? b = "partlycloudy" : S ? b = "cloudy" : s("sunny") && (b = "sunny");
    const k = i ? "night" : "day", L = this._eclipseEvent() ? "eclipse" : "";
    return `<div class="scene ${k} ${b} ${L}"></div>`;
  }
  _getWeatherBg(r, i) {
    return this._renderAtmosphere(r, i);
  }
  /* ── Activity Log ────────────────────────────────────────────────── */
  _healthText() {
    const r = {
      es: { title: "Centro de salud", healthy: "Sistema saludable", warning: "Requiere atención", critical: "Dispositivos sin conexión", devices: "dispositivos configurados", offline: "sin conexión", low: "baterías bajas", battery: "Batería", none: "No hay dispositivos seleccionados en los modos.", local: "Local-first activo", confirm: "Confirmación inteligente", help: "Requiere señales independientes dentro de una ventana. Humo, gas, CO y seguridad siempre disparan de inmediato.", save: "Guardar", saved: "Guardado" },
      en: { title: "Health center", healthy: "System healthy", warning: "Attention required", critical: "Devices offline", devices: "configured devices", offline: "offline", low: "low batteries", battery: "Battery", none: "No devices are selected in the modes.", local: "Local-first active", confirm: "Intelligent confirmation", help: "Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.", save: "Save", saved: "Saved" },
      fr: { title: "Centre de santé", healthy: "Système sain", warning: "Attention requise", critical: "Appareils hors ligne", devices: "appareils configurés", offline: "hors ligne", low: "batteries faibles", battery: "Batterie", none: "Aucun appareil n’est sélectionné dans les modes.", local: "Local-first actif", confirm: "Confirmation intelligente", help: "Exige des signaux indépendants. Fumée, gaz, CO et sécurité déclenchent toujours immédiatement.", save: "Enregistrer", saved: "Enregistré" },
      pt: { title: "Centro de saúde", healthy: "Sistema saudável", warning: "Requer atenção", critical: "Dispositivos offline", devices: "dispositivos configurados", offline: "offline", low: "baterias fracas", battery: "Bateria", none: "Nenhum dispositivo foi selecionado nos modos.", local: "Local-first ativo", confirm: "Confirmação inteligente", help: "Exige sinais independentes. Fumaça, gás, CO e segurança sempre disparam imediatamente.", save: "Salvar", saved: "Salvo" },
      it: { title: "Centro salute", healthy: "Sistema integro", warning: "Richiede attenzione", critical: "Dispositivi offline", devices: "dispositivi configurati", offline: "offline", low: "batterie scariche", battery: "Batteria", none: "Nessun dispositivo è selezionato nelle modalità.", local: "Local-first attivo", confirm: "Conferma intelligente", help: "Richiede segnali indipendenti. Fumo, gas, CO e sicurezza scattano sempre subito.", save: "Salva", saved: "Salvato" },
      zh: { title: "健康中心", healthy: "系统健康", warning: "需要注意", critical: "设备离线", devices: "已配置设备", offline: "离线", low: "低电量", battery: "电池", none: "模式中未选择设备。", local: "本地优先已启用", confirm: "智能确认", help: "需要在时间窗口内收到独立信号。烟雾、燃气、一氧化碳和安全传感器始终立即触发。", save: "保存", saved: "已保存" },
      "zh-Hant": { title: "健康中心", healthy: "系統健康", warning: "需要注意", critical: "設備離線", devices: "已設定設備", offline: "離線", low: "低電量", battery: "電池", none: "模式中未選擇設備。", local: "本地優先已啟用", confirm: "智慧確認", help: "需要在時間窗口內收到獨立信號。煙霧、燃氣、一氧化碳和安全感應器始終立即觸發。", save: "儲存", saved: "已儲存" },
      ru: { title: "Центр здоровья", healthy: "Система исправна", warning: "Требуется внимание", critical: "Устройства не в сети", devices: "настроенных устройств", offline: "не в сети", low: "низкий заряд", battery: "Батарея", none: "В режимах не выбраны устройства.", local: "Local-first активен", confirm: "Умное подтверждение", help: "Требует независимых сигналов. Дым, газ, CO и безопасность всегда срабатывают сразу.", save: "Сохранить", saved: "Сохранено" },
      hi: { title: "स्वास्थ्य केंद्र", healthy: "सिस्टम स्वस्थ है", warning: "ध्यान आवश्यक है", critical: "डिवाइस ऑफ़लाइन हैं", devices: "कॉन्फ़िगर किए गए डिवाइस", offline: "ऑफ़लाइन", low: "कम बैटरी", battery: "बैटरी", none: "मोड में कोई डिवाइस चयनित नहीं है।", local: "लोकल-फर्स्ट सक्रिय", confirm: "स्मार्ट पुष्टि", help: "समय विंडो के भीतर स्वतंत्र संकेतों की आवश्यकता होती है। धुआं, गैस, CO और सुरक्षा हमेशा तुरंत ट्रिगर होते हैं।", save: "सहेजें", saved: "सहेजा गया" },
      ar: { title: "مركز الصحة", healthy: "النظام سليم", warning: "يتطلب الانتباه", critical: "أجهزة غير متصلة", devices: "الأجهزة المكونة", offline: "غير متصل", low: "بطاريات منخفضة", battery: "البطارية", none: "لم يتم تحديد أي أجهزة في الأوضاع.", local: "الأولوية المحلية نشطة", confirm: "تأكيد ذكي", help: "يتطلب إشارات مستقلة ضمن نافذة زمنية. الدخان والغاز والـ CO والأمان يتم تفعيلها دائماً على الفور.", save: "حفظ", saved: "تم الحفظ" },
      ko: { title: "상태 센터", healthy: "시스템 정상", warning: "주의 필요", critical: "오프라인 장치", devices: "구성된 장치", offline: "오프라인", low: "배터리 부족", battery: "배터리", none: "모드에서 선택된 장치가 없습니다.", local: "로컬 우선 활성", confirm: "스마트 확인", help: "시간 창 내 독립적인 신호가 필요합니다. 연기, 가스, CO 및 안전 센서는 항상 즉시 작동합니다.", save: "저장", saved: "저장됨" },
      ja: { title: "ヘルスセンター", healthy: "システムは正常です", warning: "注意が必要です", critical: "オフラインのデバイス", devices: "設定されたデバイス", offline: "オフライン", low: "バッテリー残量低下", battery: "バッテリー", none: "モードでデバイスが選択されていません。", local: "ローカルファースト有効", confirm: "インテリジェント確認", help: "時間枠内に独立した信号が必要です。煙、ガス、CO、安全センサーは常に即座に作動します。", save: "保存", saved: "保存済み" },
      uk: { title: "Центр здоров’я", healthy: "Система в нормі", warning: "Потрібна увага", critical: "Пристрої не в мережі", devices: "налаштованих пристроїв", offline: "не в мережі", low: "низький заряд", battery: "Батарея", none: "У режимах не вибрано пристроїв.", local: "Local-first активний", confirm: "Розумне підтвердження", help: "Вимагає незалежних сигналів у вікні. Дим, газ, CO та безпека завжди спрацьовують негайно.", save: "Зберегти", saved: "Збережено" }
    };
    return r[this._getCurrentLangCode()] || r.en;
  }
  _renderHealthCenter() {
    const r = this._healthText(), i = this.shadowRoot.getElementById("h-health-title"), o = this.shadowRoot.getElementById("health-local-badge"), s = this.shadowRoot.getElementById("health-center");
    i && (i.textContent = r.title), o && (o.textContent = r.local);
    const u = this._ui?.intelligent_confirmation || { enabled: !1, window_seconds: 15, required_signals: 2 }, d = this.shadowRoot.getElementById("confirm-enabled"), m = this.shadowRoot.getElementById("confirm-signals"), f = this.shadowRoot.getElementById("confirm-window");
    d && (d.checked = !!u.enabled), m && (m.value = String(u.required_signals || 2)), f && (f.value = String(u.window_seconds || 15));
    const h = this.shadowRoot.getElementById("confirm-label");
    h && (h.textContent = r.confirm);
    const S = this.shadowRoot.getElementById("confirm-help");
    S && (S.textContent = r.help);
    const b = this.shadowRoot.getElementById("btn-save-confirmation");
    if (b && b.dataset.saved !== "1" && (b.textContent = r.save), this._renderStateSchedule(), !s) return;
    const k = this._systemHealth;
    if (!k) {
      s.innerHTML = `<div class="small" style="padding:10px">${this._escapeHtml(r.none)}</div>`;
      return;
    }
    const P = Array.isArray(k.batteries) ? k.batteries : [], L = P.filter((g) => g.low), z = Array.isArray(k.unavailable) ? k.unavailable : [], C = Array.isArray(k.configured_devices) ? k.configured_devices : [], w = k.status === "critical" ? r.critical : k.status === "warning" ? r.warning : r.healthy, _ = new Map(P.map((g) => [g.entity_id, g])), x = C.map((g) => {
      const v = _.get(g.entity_id), E = g.state === "unknown" || g.state === "unavailable", A = [E ? r.offline : g.state];
      return v?.value !== null && v?.value !== void 0 && A.push(`${v.value}${v.unit || "%"}`), { name: g.name, value: A.join(" · "), alert: E || !!v?.low };
    });
    s.innerHTML = `<div class="health-summary">
      <div class="health-score" style="--score:${Number(k.score) || 0}" aria-label="${Number(k.score) || 0}%">${Number(k.score) || 0}</div>
      <div><div style="font-weight:850">${this._escapeHtml(w)}</div><div class="small" style="opacity:.6;margin-top:3px">${C.length} ${this._escapeHtml(r.devices)}</div></div>
    </div><div class="health-metrics">
      <div class="health-metric"><strong>${z.length}</strong><span>${this._escapeHtml(r.offline)}</span></div>
      <div class="health-metric"><strong>${L.length}</strong><span>${this._escapeHtml(r.low)}</span></div>
      <div class="health-metric"><strong>${P.length}</strong><span>${this._escapeHtml(r.battery)}</span></div>
    </div><div class="health-list" style="margin-top:13px">${x.length ? x.map((g) => `<div class="health-row"><span>${this._escapeHtml(g.name)}</span><strong style="color:${g.alert ? "#ff8a80" : "inherit"}">${this._escapeHtml(g.value)}</strong></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(r.none)}</div>`}</div>`;
  }
  async _saveIntelligentConfirmation() {
    const r = {
      enabled: !!this.shadowRoot.getElementById("confirm-enabled")?.checked,
      required_signals: Number(this.shadowRoot.getElementById("confirm-signals")?.value || 2),
      window_seconds: Number(this.shadowRoot.getElementById("confirm-window")?.value || 15)
    };
    try {
      await this._send("argus/save_ui", { intelligent_confirmation: r }), this._ui.intelligent_confirmation = r;
      const i = this.shadowRoot.getElementById("btn-save-confirmation");
      i && (i.textContent = `✓ ${this._healthText().saved}`, i.dataset.saved = "1", setTimeout(() => {
        i.dataset.saved = "0", i.textContent = this._healthText().save;
      }, 1600));
    } catch (i) {
      alert(this._format("generic_error", { error: i.message }));
    }
  }
  _scheduleText() {
    const r = {
      es: { title: "Horarios locales de estado", all: "Todos los días", weekdays: "Lunes a viernes", weekend: "Fin de semana", empty: "Sin horarios. Argus conservará el último estado confirmado.", disarmed: "Desarmado", home: "En casa", away: "Ausente", night: "Noche", vacation: "Vacaciones" },
      en: { title: "Local state schedules", all: "Every day", weekdays: "Monday to Friday", weekend: "Weekend", empty: "No schedules. Argus will preserve the last confirmed state.", disarmed: "Disarmed", home: "Home", away: "Away", night: "Night", vacation: "Vacation" },
      fr: { title: "Horaires d’état locaux", all: "Tous les jours", weekdays: "Lundi à vendredi", weekend: "Week-end", empty: "Aucun horaire. Argus conservera le dernier état confirmé.", disarmed: "Désarmé", home: "Maison", away: "Absent", night: "Nuit", vacation: "Vacances" },
      pt: { title: "Horários locais de estado", all: "Todos os dias", weekdays: "Segunda a sexta", weekend: "Fim de semana", empty: "Sem horários. Argus preservará o último estado confirmado.", disarmed: "Desarmado", home: "Em casa", away: "Ausente", night: "Noite", vacation: "Férias" },
      it: { title: "Programmi locali di stato", all: "Ogni giorno", weekdays: "Da lunedì a venerdì", weekend: "Fine settimana", empty: "Nessun programma. Argus manterrà l’ultimo stato confermato.", disarmed: "Disarmato", home: "Casa", away: "Assente", night: "Notte", vacation: "Vacanza" },
      zh: { title: "本地状态计划", all: "每天", weekdays: "周一至周五", weekend: "周末", empty: "没有计划。Argus 将保留最后确认的状态。", disarmed: "撤防", home: "在家", away: "外出", night: "夜间", vacation: "度假" },
      "zh-Hant": { title: "本地狀態排程", all: "每天", weekdays: "週一至週五", weekend: "週末", empty: "沒有排程。Argus 將保留最後確認的狀態。", disarmed: "撤防", home: "在家", away: "外出", night: "夜間", vacation: "度假" },
      ru: { title: "Локальное расписание состояния", all: "Каждый день", weekdays: "Понедельник–пятница", weekend: "Выходные", empty: "Расписания нет. Argus сохранит последнее подтверждённое состояние.", disarmed: "Снято", home: "Дома", away: "Нет дома", night: "Ночь", vacation: "Отпуск" },
      hi: { title: "स्थानीय स्थिति कार्यक्रम", all: "हर दिन", weekdays: "सोमवार से शुक्रवार", weekend: "सप्ताहांत", empty: "कोई शेड्यूल नहीं। आर्गस अंतिम पुष्ट स्थिति को बनाए रखेगा।", disarmed: "निहत्था", home: "घर", away: "बाहर", night: "रात", vacation: "छुट्टी" },
      ar: { title: "جداول الحالة المحلية", all: "كل يوم", weekdays: "من الاثنين إلى الجمعة", weekend: "عطلة نهاية الأسبوع", empty: "لا توجد جداول. سيحتفظ آرجوس بآخر حالة مؤكدة.", disarmed: "غير مسلح", home: "بيت", away: "خارج البيت", night: "ليل", vacation: "إجازة" },
      ko: { title: "로컬 상태 일정", all: "매일", weekdays: "월요일~금요일", weekend: "주말", empty: "일정이 없습니다. Argus는 마지막으로 확인된 상태를 유지합니다.", disarmed: "해제됨", home: "집", away: "외출", night: "야간", vacation: "휴가" },
      ja: { title: "ローカルステータススケジュール", all: "毎日", weekdays: "月曜日〜金曜日", weekend: "週末", empty: "スケジュールはありません。Argusは最後に確認された状態を維持します。", disarmed: "解除", home: "在宅", away: "外出", night: "夜間", vacation: "休暇" },
      uk: { title: "Локальний розклад станів", all: "Щодня", weekdays: "Понеділок–п’ятниця", weekend: "Вихідні", empty: "Розкладу немає. Argus збереже останній підтверджений стан.", disarmed: "Знято з охорони", home: "Вдома", away: "Не вдома", night: "Ніч", vacation: "Відпустка" }
    };
    return r[this._getCurrentLangCode()] || r.en;
  }
  _renderStateSchedule() {
    const r = this._scheduleText(), i = this.shadowRoot.getElementById("schedule-title");
    i && (i.textContent = r.title);
    const o = this.shadowRoot.getElementById("schedule-state"), s = this.shadowRoot.getElementById("schedule-days");
    if (o) {
      const S = o.value;
      o.innerHTML = `<option value="disarmed">${r.disarmed}</option><option value="armed_home">${r.home}</option><option value="armed_away">${r.away}</option><option value="armed_night">${r.night}</option><option value="armed_vacation">${r.vacation}</option>`, o.value = S || "armed_night";
    }
    if (s) {
      const S = s.value;
      s.innerHTML = `<option value="all">${r.all}</option><option value="weekdays">${r.weekdays}</option><option value="weekend">${r.weekend}</option>`, s.value = S || "all";
    }
    const u = this.shadowRoot.getElementById("schedule-list");
    if (!u) return;
    const d = Array.isArray(this._ui?.state_schedule) ? this._ui.state_schedule : [], m = { es: "Eliminar horario", en: "Delete schedule", fr: "Supprimer l’horaire", pt: "Excluir horário", it: "Elimina programma", zh: "删除计划", "zh-Hant": "刪除排程", ru: "Удалить расписание", hi: "शेड्यूल हटाएं", ar: "حذف الجدول", ko: "일정 삭제", ja: "スケジュールを削除", uk: "Видалити розклад" }[this._getCurrentLangCode()] || "Delete schedule", f = (S) => ({ disarmed: r.disarmed, armed_home: r.home, armed_away: r.away, armed_night: r.night, armed_vacation: r.vacation })[S] || S, h = (S) => S?.length === 2 ? r.weekend : S?.length === 5 ? r.weekdays : r.all;
    u.innerHTML = d.length ? d.map((S) => `<div class="schedule-row"><span><strong>${this._escapeHtml(S.time || "")}</strong> · ${this._escapeHtml(f(S.state))} · ${this._escapeHtml(h(S.days))}</span><button class="ghost" data-schedule-delete="${this._escapeHtml(S.id)}" aria-label="${this._escapeHtml(m)}">×</button></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(r.empty)}</div>`, u.querySelectorAll("[data-schedule-delete]").forEach((S) => S.addEventListener("click", () => this._deleteStateSchedule(S.dataset.scheduleDelete)));
  }
  async _addStateSchedule() {
    const r = this.shadowRoot.getElementById("schedule-state")?.value, i = this.shadowRoot.getElementById("schedule-time")?.value, o = this.shadowRoot.getElementById("schedule-days")?.value || "all";
    if (!r || !/^([01]\d|2[0-3]):[0-5]\d$/.test(i || "")) return;
    const s = o === "weekdays" ? [0, 1, 2, 3, 4] : o === "weekend" ? [5, 6] : [0, 1, 2, 3, 4, 5, 6], u = Array.isArray(this._ui?.state_schedule) ? [...this._ui.state_schedule] : [];
    u.push({ id: `schedule_${Date.now()}`, state: r, time: i, days: s, enabled: !0 }), await this._saveStateSchedule(u);
  }
  async _deleteStateSchedule(r) {
    const i = (this._ui?.state_schedule || []).filter((o) => o.id !== r);
    await this._saveStateSchedule(i);
  }
  async _saveStateSchedule(r) {
    try {
      await this._send("argus/save_ui", { state_schedule: r }), this._ui.state_schedule = r, this._renderStateSchedule();
    } catch (i) {
      alert(this._format("generic_error", { error: i.message }));
    }
  }
  _localizeActivityDetail(r, i) {
    const o = String(i || "").trim(), s = o.toLocaleLowerCase(), u = {
      home: ["en casa", "home", "casa", "maison", "em casa", "дом", "在家"],
      away: ["ausente", "away", "absent", "fora", "fuori", "ушёл", "外出"],
      night: ["noche", "night", "nuit", "noite", "notte", "ночь", "夜间"],
      vacation: ["vacaciones", "vacation", "vacances", "férias", "vacanza", "отпуск", "度假"]
    }, m = Object.entries(u).find(([, P]) => P.some((L) => s.includes(L)))?.[0];
    if (r === "pin_reset") return this._t("log_detail_pin_reset");
    if (r === "pin_reset_failed") return this._t("log_detail_pin_reset_failed");
    if (r === "state_restored") {
      const P = {
        disarmed: this._t("disarmed"),
        armed_home: this._t("mode_home"),
        armed_away: this._t("mode_away"),
        armed_night: this._t("mode_night"),
        armed_vacation: this._t("mode_vacation"),
        triggered: this._t("log_triggered")
      };
      let L = this._t("disarmed");
      const z = o.toLowerCase();
      for (const [C, w] of Object.entries(P))
        if (z.includes(C) || z.includes(w.toLowerCase())) {
          L = w;
          break;
        }
      return `${this._t("log_action_state_restored")}: ${L}`;
    }
    if (r === "confirmation_pending") return o;
    if (r === "disarmed" || r === "disarm") return this._t("log_detail_disarm");
    if (r === "armed" || r === "arm")
      return m ? `${this._t("manual_arm")} (${this._t(`mode_${m}`)})` : this._t("manual_arm");
    if (r === "triggered") {
      const P = o.match(/\((?:modo|mode|modalità|режим|模式)\s*:?\s*([^)]+)\)/i);
      let L = "";
      if (P && P[1]) {
        const w = P[1].toLowerCase(), _ = Object.entries(u).find(([, x]) => x.some((g) => w.includes(g)))?.[0];
        L = _ ? this._t(`mode_${_}`) : P[1];
      }
      const z = o.match(/(?:sensor|capteur|sensore|датчик|传感器)\s*:\s*(.+)$/i)?.[1]?.replace(/\s*\((?:modo|mode|modalità|режим|模式)\s*:?[^)]*\)\s*$/i, "")?.trim();
      let C = z ? `${this._t("log_sensor")}: ${z}` : this._t("log_detail_triggered");
      return L && (C += ` (${this._t("log_mode")}: ${L})`), C;
    }
    if (r === "user_added") return this._t("log_action_user_added");
    if (r === "user_deleted") return this._t("log_action_user_deleted");
    if (r === "sos") return this._t("log_action_sos");
    if (r === "sos_stopped" || r === "panic_stopped") return this._t("log_action_sos_stopped");
    if (r.startsWith("auto_") || r === "automation_executed") return this._t("log_action_automation");
    if (r.startsWith("ai_")) return this._t("log_action_analysis");
    if (r.includes("rejected")) return this._t("log_action_rejected");
    if (r === "ui_configuration_updated") return this._t("settings");
    if (r === "user_logged_in") return this._t("log_action_user_logged_in");
    if (r === "profile_selected") return this._t("log_action_profile_selected");
    if (r === "schedule_applied") return this._t("log_action_schedule_applied");
    if (r === "mode_changed") return this._t("log_action_mode_changed");
    if (r === "audit_log_cleared") return i || this._t("log_action_audit_log_cleared") || "Historial de actividad eliminado";
    if (r.includes("pin_updated") || r.includes("access_pin_updated")) return this._t("update_pin");
    const h = `log_action_${String(r).toLowerCase()}`, S = this._t(h);
    if (S !== h) return S;
    let b = o;
    const k = {
      "Administrador de Argus": this._t("role_argus_admin"),
      "Argus Administrator": this._t("role_argus_admin"),
      "Administrateur Argus": this._t("role_argus_admin"),
      Administrador: this._t("role_argus_admin"),
      "Usuario estándar": this._t("role_argus_standard"),
      "Standard user": this._t("role_argus_standard"),
      "Utilisateur standard": this._t("role_argus_standard"),
      "Cuenta de Home Assistant": (this._t("ha_account_linked") || "").split(":")[0] || "Home Assistant",
      "Compte Home Assistant": (this._t("ha_account_linked") || "").split(":")[0] || "Home Assistant",
      "Home Assistant Account": (this._t("ha_account_linked") || "").split(":")[0] || "Home Assistant",
      "Sin PIN": this._t("user_no_pin"),
      "Sans PIN": this._t("user_no_pin"),
      "No PIN": this._t("user_no_pin"),
      Indefinido: this._t("exp_indefinite"),
      Indéfini: this._t("exp_indefinite"),
      Indefinite: this._t("exp_indefinite"),
      "En casa": this._t("mode_home"),
      Maison: this._t("mode_home"),
      Home: this._t("mode_home"),
      Ausente: this._t("mode_away"),
      Absent: this._t("mode_away"),
      Away: this._t("mode_away"),
      Noche: this._t("mode_night"),
      Nuit: this._t("mode_night"),
      Night: this._t("mode_night"),
      Vacaciones: this._t("mode_vacation"),
      Vacances: this._t("mode_vacation"),
      Vacation: this._t("mode_vacation"),
      Desarmado: this._t("disarmed"),
      Désarmé: this._t("disarmed"),
      Disarmed: this._t("disarmed"),
      "Inicio de sesión": this._t("log_action_user_logged_in"),
      "Inicio de sesion": this._t("log_action_user_logged_in"),
      "Estado local restaurado": this._t("log_action_state_restored"),
      "Estado restaurado": this._t("log_action_state_restored"),
      "Armado manual": this._t("manual_arm"),
      Ajustes: this._t("settings")
    };
    for (const [P, L] of Object.entries(k))
      if (L && L !== P) {
        const z = new RegExp(`\\b${P}\\b`, "gi");
        b = b.replace(z, L);
      }
    return b;
  }
  _renderActivityLog() {
    const r = this.shadowRoot.getElementById("h-activity-log"), i = this.shadowRoot.getElementById("activity-log");
    if (i) {
      r && (r.textContent = this._t("activity_log"));
      try {
        const o = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log.filter((d) => d && typeof d == "object" && !Array.isArray(d)) : [];
        if (!o.length) {
          const d = this._activityTimelineError ? this._t("history_unavailable") : this._t("log_no_events");
          i.innerHTML = `<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(d)}</div>`;
          return;
        }
        const s = i.closest(".panel"), u = s && s.getAttribute("data-size") === "S";
        i.innerHTML = o.slice(0, u ? 1 : 30).map((d) => {
          const m = String(d.action || ""), f = String(d.detail || ""), h = String(d.user || d.actor || ""), S = d.ts ? new Date(d.ts) : null;
          let b = "";
          if (S && !Number.isNaN(S.getTime()))
            try {
              b = S.toLocaleString(this._getLocale());
            } catch {
              b = S.toISOString();
            }
          const k = this._localizeActivityDetail(m, f);
          let P = '<div class="glass-orb"></div>', L = "", z = m, C = "";
          const w = String(m || "").toLowerCase();
          if (w.endsWith("_rejected"))
            C = "log-item--triggered", L = "trigger", z = this._t("log_action_rejected");
          else if (w.includes("arm") && !w.includes("disarm"))
            C = "log-item--armed", L = "arm", z = this._t("log_armed");
          else if (w.includes("disarm"))
            C = "log-item--disarmed", L = "disarm", z = this._t("log_disarmed");
          else if (w.includes("trigger") || w.includes("alarm"))
            C = "log-item--triggered", L = "trigger", z = this._t("log_triggered");
          else if (w === "pin_reset")
            C = "log-item--disarmed", L = "disarm", z = this._t("badge_pin_reset");
          else if (w === "pin_reset_failed")
            C = "log-item--triggered", L = "trigger", z = this._t("badge_pin_reset_failed");
          else if (w === "sos" || w === "sos_stopped" || w === "panic_stopped")
            C = "log-item--triggered", L = "trigger", z = this._t("log_action_sos");
          else if (w === "audit_log_cleared")
            C = "log-item--triggered", L = "trigger", z = "🗑️ " + (this._t("log_action_audit_log_cleared") || "Historial Borrado");
          else if (w === "ui_configuration_updated")
            z = this._t("settings");
          else {
            const x = `log_action_${w}`, g = this._t(x);
            z = g && g !== x ? g : this._t(w) !== w ? this._t(w) : this._t("log_action_analysis") || m;
          }
          let _ = "";
          return h && h !== "Argus" && h !== "system" ? _ = `👤 ${h}` : m.toLowerCase().includes("homekit") || k.toLowerCase().includes("homekit") ? _ = "🍎 HomeKit" : _ = "🤖 Argus", `<div class="log-item ${C}">
          <div class="log-icon">${P}</div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${L}">${this._escapeHtml(z)}</span>
              <span style="font-weight:500">${this._escapeHtml(k)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(b)} &nbsp;·&nbsp; ${this._escapeHtml(_)}</div>
          </div>
        </div>`;
        }).join("");
      } catch (o) {
        console.error("Argus activity log render failed:", o), i.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("log_no_events")}</div>`;
      }
    }
  }
  /* ── Modes ───────────────────────────────────────────────────────── */
  _renderModeTabs() {
    const r = this.shadowRoot.getElementById("mode-tabs");
    if (!r) return;
    const i = ["disarmed", "home", "away", "night", "sos"], o = { disarmed: "🔓", home: "🏠", away: "🔴", night: "🌙", sos: "🚨" }, s = {
      disarmed: this._t("disarmed"),
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      sos: this._t("sos_config_title") || "CONFIGURACIÓN SOS"
    };
    r.className = "tabs", r.innerHTML = `
      <div class="tab-bubble"></div>
      ${i.map((f) => `
        <button type="button" class="tab ${f === this._mode ? "active" : ""}" data-mode="${f}">
          <span class="tab-icon" style="font-size: 20px;">${o[f]}</span>
          <span class="tab-label">${s[f]}</span>
        </button>
      `).join("")}
    `;
    const u = r.querySelector(".tab-bubble");
    r.querySelectorAll("[data-mode]").forEach((f) => f.addEventListener("click", () => {
      this._mode = f.dataset.mode, this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
    }));
    const d = r.querySelectorAll(".tab");
    let m = null;
    d.forEach((f) => {
      f.dataset.mode === this._mode ? (f.classList.add("active"), m = f) : f.classList.remove("active");
    }), u && m && (u.className = `tab-bubble bubble-${this._mode}`, requestAnimationFrame(() => {
      const f = m.offsetLeft, h = m.offsetWidth;
      u.style.transform = `translate3d(${f}px, 0, 0) scaleX(${h / 100})`, u.style.width = "100px", u.style.left = "0";
    }));
  }
  _currentModeConfig() {
    const r = {
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
      let u = {};
      this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] == "object" && !Array.isArray(this._ui.modes[this._mode]) && (u = this._ui.modes[this._mode]), this._ui.modes.__by_entity__[i][this._mode] = { ...r, ...u };
    }
    const o = this._ui.modes.__by_entity__[i][this._mode], s = o && typeof o == "object" && !Array.isArray(o) ? o : r;
    return {
      ...r,
      ...s,
      sensors: Array.isArray(s?.sensors) ? s.sensors : [],
      bypassed_sensors: Array.isArray(s?.bypassed_sensors) ? s.bypassed_sensors : [],
      sirens: Array.isArray(s?.sirens) ? s.sirens : [],
      entry_sensors: Array.isArray(s?.entry_sensors) ? s.entry_sensors : [],
      // sync_panels was the short-lived UI name; retain it only as a read fallback.
      external_panels: Array.isArray(s?.external_panels) ? s.external_panels : Array.isArray(s?.sync_panels) ? s.sync_panels : [],
      require_closed: typeof s?.require_closed == "boolean" ? s.require_closed : !1,
      open_sensors_policy: s?.open_sensors_policy === "pending" || s?.open_sensors_policy === "allow" || s?.open_sensors_policy === "block" ? s.open_sensors_policy : s?.require_closed ? "block" : "allow",
      arming_time: s?.arming_time !== void 0 && s?.arming_time !== null ? s.arming_time : null,
      entry_delay: s?.entry_delay !== void 0 && s?.entry_delay !== null ? s.entry_delay : null,
      light_siren_settings: s?.light_siren_settings && typeof s.light_siren_settings == "object" ? s.light_siren_settings : {},
      mqtt_enabled: s?.mqtt_enabled !== void 0 && s?.mqtt_enabled !== null ? s.mqtt_enabled : null
    };
  }
  _toggleEntrySensor(r) {
    if (!this._isAdmin) return;
    const i = this._currentModeConfig(), o = Array.isArray(i.entry_sensors) ? [...i.entry_sensors] : [];
    o.includes(r) ? i.entry_sensors = o.filter((s) => s !== r) : i.entry_sensors = [...o, r], this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
  }
  _renderModeView() {
    const r = this.shadowRoot.getElementById("mode-view");
    r && (r.classList.remove("bounce-in"), r.offsetWidth, r.classList.add("bounce-in"));
    const i = !this._isAdmin;
    if (this._mode === "sos") {
      const b = this._emergencyNumber || this._ui?.emergency_number || "911", k = this._panicOutputs || this._ui?.panic_outputs || [];
      r.innerHTML = `
        <div class="sos-mode-stack" style="display:flex;flex-direction:column;gap:16px;width:100%">
          <!-- Card 1: Emergency Phone (Full width, styled like mode box) -->
          <div class="mode-section-card" style="width:100%;box-sizing:border-box;padding:20px 24px;border-radius:18px;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
              <div style="flex:1;min-width:220px;">
                <div class="mode-section-title" style="font-size:15px;font-weight:900;margin-bottom:4px;">📞 ${this._t("emergency_number_label") || "Número Local de Emergencia"}</div>
                <p class="small" style="margin:0;opacity:0.75;line-height:1.4;">${this._t("emergency_help") || "Configura el número local de emergencia (ej. 911 o 112). Se incluirá en alertas SOS."}</p>
              </div>
              <div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.04);padding:10px 16px;border-radius:14px;border:1px solid rgba(255,255,255,0.1);">
                <span style="font-size:12px;font-weight:800;text-transform:uppercase;opacity:0.85;">TEL:</span>
                <input id="mode-emergency-number-input" class="glass-control" inputmode="tel" maxlength="16" value="${this._escapeHtml(b)}" style="width:130px;min-height:38px;padding:6px 10px;font-size:18px;font-weight:900;text-align:center;border-radius:10px;background:rgba(0,0,0,0.25);color:#fff;border:1px solid rgba(255,255,255,0.2);letter-spacing:1.5px">
              </div>
            </div>
            <div class="small" style="margin-top:12px;opacity:0.6;font-size:11px;">
              ℹ️ Al activar el SOS desde el panel o widget, se iniciará la marcación rápida y se registrará el evento de auxilio en el historial forense.
            </div>
          </div>

          <!-- Card 2: SOS Actions / Devices (Wide container DEBAJO) -->
          <div class="mode-section-card" style="width:100%;box-sizing:border-box;padding:20px 24px;border-radius:18px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;gap:12px;flex-wrap:wrap;">
              <div>
                <div class="mode-section-title" style="font-size:15px;font-weight:900;margin-bottom:4px;">⚡ ${this._t("sos_actions") || "Dispositivos y Acciones SOS"}</div>
                <p class="small" style="margin:0;opacity:0.75;">${this._t("sos_outputs_help") || "Estos dispositivos se encenderán o ejecutarán inmediatamente al dispararse el SOS."}</p>
              </div>
              ${i ? "" : `
                <button class="ghost" id="btn-mode-select-sos-outputs" style="padding:8px 16px;font-size:12px;font-weight:800;border-radius:12px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);cursor:pointer;">
                  ＋ ${this._t("sos_select_outputs") || "Seleccionar Luces, Sirenas o Escenas"}
                </button>
              `}
            </div>
            <div id="sos-output-chips" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;width:100%;">
              ${k.length ? k.map((P) => this._chip(P, "sos_output")).join("") : `<div class="mode-sensor-none" style="grid-column:1/-1;">${this._t("sos_no_outputs") || "Ningún dispositivo configurado"}</div>`}
            </div>
          </div>

          <!-- Card 3: Unified Informative Diagnostic Card -->
          <div class="mode-section-card" style="padding:14px 18px;border-radius:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:4px;">
              <span style="font-size:11.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;color:rgba(255,255,255,0.85)">ℹ️ Protocolo Informativo de Auxilio y Difusión</span>
              <span style="font-size:9.5px;font-weight:700;padding:2px 6px;border-radius:6px;background:rgba(74,222,128,0.12);color:#4ade80">✓ Activo</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;font-size:11px;">
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid rgba(255,255,255,0.04)">
                <span style="font-size:14px">🚨</span>
                <div><strong style="color:#fff;font-size:11px">Disparo Inmediato:</strong> <span style="opacity:0.7">Sin retardos de salida ni entrada.</span></div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid rgba(255,255,255,0.04)">
                <span style="font-size:14px">📱</span>
                <div><strong style="color:#fff;font-size:11px">Notificación Push:</strong> <span style="opacity:0.7">Alerta crítica a dispositivos autorizados.</span></div>
              </div>
              <div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:rgba(255,255,255,0.02);border-radius:8px;border:1px solid rgba(255,255,255,0.04)">
                <span style="font-size:14px">📋</span>
                <div><strong style="color:#fff;font-size:11px">Auditoría:</strong> <span style="opacity:0.7">Registro inmutable en el historial.</span></div>
              </div>
            </div>
          </div>
        </div>
        ${i ? "" : `
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;">
            <button class="primary" id="save-sos-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2);cursor:pointer;">
              ${this._t("save_config") || "Guardar Configuración"}
            </button>
            <span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span>
          </div>
        `}
      `, i || (r.querySelector("#btn-mode-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), r.querySelectorAll("[data-remove]").forEach(
        (P) => P.addEventListener("click", () => this._removeChip(P.dataset.remove))
      ), r.querySelector("#save-sos-mode")?.addEventListener("click", () => this._saveSosMode()));
      return;
    }
    const o = this._currentModeConfig(), s = o.sensors || [], u = o.bypassed_sensors || [], d = o.sirens || [], m = o.external_panels || [], f = this._dashboard?.entries || [], h = this._modeEntryId || f[0]?.entity_id || "", S = f.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("alarm_instance")}</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${f.map((b) => `<option value="${this._escapeHtml(b.entity_id)}" ${b.entity_id === h ? "selected" : ""}>${this._escapeHtml(b.title || b.entity_id)}</option>`).join("")}</select>
        </div>` : "";
    r.innerHTML = `
      <div class="mode-grid-layout">
        ${S}

        <div class="mode-section-card">
          <div class="mode-section-title">🛡️ ${this._t("sensor_section")}</div>
          <div class="mode-sensor-grid" id="sensor-chips">
            ${s.map((b) => this._chip(b, "sensor")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `
            <button class="ghost" data-open-selector="sensor" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-require-closed" ${o.require_closed ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("lock_if_open")}</span>
            </label>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-wait-if-open" ${o.open_sensors_policy === "pending" ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("wait_if_open")}</span>
            </label>
          `}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("bypass_lbl")}</div>
          <div class="mode-sensor-grid" id="bypass-chips">
            ${u.map((b) => this._chip(b, "bypass")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `<button class="ghost" data-open-selector="bypass" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 ${this._t("siren_section")}</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${d.map((b) => this._chip(b, "siren")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${d.filter((b) => b.startsWith("light.")).map((b) => {
      const k = o.light_siren_settings?.[b] || {}, L = "#" + (Array.isArray(k.rgb_color) ? k.rgb_color : [255, 0, 0]).map((z) => Number(z).toString(16).padStart(2, "0")).join("");
      return `<details class="light-siren-settings"><summary>⚙ ${this._escapeHtml(this._hass?.states?.[b]?.attributes?.friendly_name || b)}</summary><label>${this._t("light_siren_color") || "Color"} <input type="color" data-light-siren-color="${this._escapeHtml(b)}" value="${L}"></label><label class="checkbox-label"><input type="checkbox" data-light-siren-flash="${this._escapeHtml(b)}" ${k.gentle_flash ? "checked" : ""}> ${this._t("light_siren_flash") || "Destello suave si está disponible"}</label></details>`;
    }).join("")}
          <div class="mode-section-title" style="margin-top:14px;font-size:12px">🔗 ${this._t("external_panels") || "Paneles de alarma externos"}</div>
          <div class="mode-sensor-grid" id="external-panel-chips">
            ${m.map((b) => this._chip(b, "external_panel")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button><button class="ghost" data-open-selector="external_panel" style="margin-top:8px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("times_section")}</div>
          <div class="times-grid">
            <div class="input-group time-field">
              <span class="input-label">${this._t("arm_time")}</span>
              <input type="number" id="mode-arming-time" value="${o.arming_time ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
            <div class="input-group time-field">
              <span class="input-label">${this._t("disarm_time")}</span>
              <input type="number" id="mode-entry-delay" value="${o.entry_delay ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
          </div>
          <div class="mode-sensor-grid entry-sensor-list">
            ${(o.entry_sensors || []).map((b) => this._chip(b, "entry")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `<button class="ghost" data-open-selector="entry" style="margin-top:10px;width:100%;justify-content:center;font-size:12px">${this._t("select_entry_sensors")}</button>`}
          <label class="checkbox-label mode-mqtt-row">
            <input type="checkbox" id="mode-mqtt-enabled" ${o.mqtt_enabled === !0 ? "checked" : ""}>
            <span style="font-size:12px;font-weight:600">${this._t("mqtt_label")}</span>
          </label>
        </div>
      </div>
      ${i ? "" : `<div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;"><button class="primary" id="save-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2)">${this._t("save_config")}</button><span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span></div>`}
    `, r.querySelector("#mode-instance-select")?.addEventListener("change", (b) => {
      this._modeEntryId = b.target.value, this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
    }), i || (r.querySelectorAll("[data-open-selector]").forEach(
      (b) => b.addEventListener("click", () => this._openModal(b.dataset.openSelector))
    ), r.querySelectorAll("[data-remove]").forEach(
      (b) => b.addEventListener("click", () => this._removeChip(b.dataset.remove))
    ), r.querySelectorAll("[data-toggle-delay]").forEach(
      (b) => b.addEventListener("click", () => this._toggleEntrySensor(b.dataset.toggleDelay))
    ), r.querySelector("#save-mode")?.addEventListener("click", () => this._saveMode()));
  }
  _chip(r, i) {
    const o = this._hass?.states?.[r]?.state, s = ["on", "unlocked", "open", "recording", "active", "motion"].includes(o), u = this._hass?.states?.[r]?.attributes?.friendly_name || r, d = !this._isAdmin, m = i === "sensor" || i === "bypass" ? `<span class="pill-dot ${s ? "open" : ""}" title="${o}"></span>` : "";
    let f = "", h = "";
    if (i === "sensor" || i === "bypass" || i === "entry") {
      const k = this._hass?.states?.[r], P = this._getDevicePower(r, k);
      if (f = `<span class="pill-status">${s ? this._t("status_open") : this._t("status_closed")}</span>`, P.mains && (h += '<span class="pill-power">🔌 AC</span>'), P.battery !== null) {
        const L = P.battery === 0, z = P.battery <= 10 && !L, C = L ? "🔋 ❌" : `🔋 ${P.battery}%`;
        h += `<span class="pill-power ${L ? "dead" : z ? "low" : ""}">${C}</span>`;
      }
    }
    const S = this._dashboard?.entries?.some(
      (k) => this._hass?.states?.[k.entity_id]?.state === "triggered"
    );
    let b = "";
    return i === "siren" && S && (b = " siren-active"), (i === "sensor" || i === "bypass" || i === "entry") && S && s && (b = " triggered-sensor"), `
      <span class="sensor-pill${b}">
        ${m}
        <span class="pill-content">
          <span class="pill-name">${this._escapeHtml(u)}</span>
          ${f}
          ${h}
        </span>
        ${d ? "" : `<button data-remove="${i}:${r}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
  }
  _removeChip(r) {
    if (!this._isAdmin) return;
    const [i, o] = r.split(":");
    if (i === "sos_output" || i === "panic") {
      this._panicOutputs = (this._panicOutputs || []).filter((m) => m !== o), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
      return;
    }
    const s = this._currentModeConfig(), u = i === "sensor" ? "sensors" : i === "bypass" ? "bypassed_sensors" : i === "entry" ? "entry_sensors" : i === "external_panel" ? "external_panels" : "sirens";
    let d = this._modeEntryId;
    (!d || d === "default") && (d = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = d, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[d] = this._ui.modes.__by_entity__[d] || {}, this._ui.modes.__by_entity__[d][this._mode] = { ...s, [u]: (s[u] || []).filter((m) => m !== o) }, this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
  }
  async _saveSosMode() {
    const r = this.shadowRoot.getElementById("mode-status"), i = this.shadowRoot.getElementById("mode-emergency-number-input"), o = this._normaliseEmergencyNumber(i?.value || this._emergencyNumber || "911");
    this._emergencyNumber = o;
    try {
      r && (r.textContent = "...", r.className = "status", r.style.opacity = "1"), await this._send("argus/save_ui", {
        emergency_number: o,
        panic_outputs: this._panicOutputs || []
      }), this._ui || (this._ui = {}), this._ui.emergency_number = o, this._ui.panic_outputs = this._panicOutputs || [], r && (r.textContent = "✓ " + (this._t("mode_saved") || "Configuración SOS guardada"), r.className = "status ok", r.style.opacity = "1", setTimeout(() => {
        r && (r.textContent = "");
      }, 3e3));
    } catch (s) {
      r && (r.textContent = this._format("generic_error", { error: s.message }), r.className = "status err", r.style.opacity = "1");
    }
  }
  async _saveMode() {
    const r = this._currentModeConfig(), i = this.shadowRoot.getElementById("mode-require-closed"), o = this.shadowRoot.getElementById("mode-wait-if-open"), s = this.shadowRoot.getElementById("mode-arming-time"), u = this.shadowRoot.getElementById("mode-entry-delay"), d = this.shadowRoot.getElementById("mode-mqtt-enabled");
    i && (r.require_closed = i.checked), i?.checked ? r.open_sensors_policy = "block" : o?.checked ? r.open_sensors_policy = "pending" : r.open_sensors_policy = "allow", s && (r.arming_time = s.value ? parseInt(s.value) : 0), u && (r.entry_delay = u.value ? parseInt(u.value) : 0), d && (r.mqtt_enabled = d.checked), r.light_siren_settings = {}, this.shadowRoot.querySelectorAll("[data-light-siren-color]").forEach((m) => {
      const f = m.value || "#ff0000";
      r.light_siren_settings[m.dataset.lightSirenColor] = {
        rgb_color: [1, 3, 5].map((h) => parseInt(f.slice(h, h + 2), 16)),
        gentle_flash: !!this.shadowRoot.querySelector(`[data-light-siren-flash="${CSS.escape(m.dataset.lightSirenColor)}"]`)?.checked
      };
    }), this._runWithPin(async () => {
      const m = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || "default";
      this._ui.modes = this._ui.modes || {}, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[m] = this._ui.modes.__by_entity__[m] || {}, this._ui.modes.__by_entity__[m][this._mode] = { ...r };
      const f = this.shadowRoot.getElementById("mode-status");
      f && (f.textContent = "…", f.className = "status");
      try {
        await this._send("argus/save_mode_config", {
          entity_id: m,
          mode: this._mode,
          config: r
        }), f && (f.textContent = this._t("saved"), f.className = "status ok show"), setTimeout(() => {
          f && (f.textContent = "", f.className = "status");
        }, 3e3);
      } catch (h) {
        f && (f.textContent = "✗ " + (h.message || this._t("generic_error").replace(": {error}", "")), f.className = "status err show");
      }
    });
  }
  /* ── Automations ─────────────────────────────────────────────────── */
  _renderAutomations() {
    const r = this.shadowRoot.getElementById("auto-view");
    if (r) {
      if (!this._dashboard?.entries?.length || !this._hass) {
        r.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
        return;
      }
      try {
        if (!this._relatedAutomationsQueried) {
          this._relatedAutomationsQueried = !0, this._cachedRelatedAutomations = /* @__PURE__ */ new Set(), (async () => {
            try {
              let m = [];
              for (const f of this._dashboard.entries) {
                const h = await this._hass.callWS({ type: "search/related", item_type: "entity", item_id: f.entity_id });
                if (h && (h.automation && m.push(...h.automation), h.device && h.device.length))
                  for (const S of h.device) {
                    const b = await this._hass.callWS({ type: "search/related", item_type: "device", item_id: S });
                    b && b.automation && m.push(...b.automation);
                  }
              }
              this._cachedRelatedAutomations = new Set(m);
            } catch {
              this._cachedRelatedAutomations = /* @__PURE__ */ new Set();
            } finally {
              this._relatedAutomationsFetched = !0, this._renderAutomations();
            }
          })(), r.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
          return;
        }
        if (!this._relatedAutomationsFetched) return;
        const i = this._hass.states || {}, o = Object.values(i).filter((m) => {
          if (!m || !m.entity_id || !m.entity_id.startsWith("automation.")) return !1;
          const f = (m.attributes?.friendly_name || "").toLowerCase();
          return this._cachedRelatedAutomations.has(m.entity_id) || f.includes("argus") || m.entity_id.toLowerCase().includes("argus");
        });
        if (!o.length) {
          r.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
          return;
        }
        const s = r.closest(".panel"), u = s && s.getAttribute("data-size") === "S", d = o.slice(0, u ? 1 : 15);
        r.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${d.map((m) => {
          const f = m.attributes?.id || m.entity_id.replace("automation.", ""), h = m.attributes?.last_triggered ? new Date(m.attributes.last_triggered).toLocaleString(this._getLocale()) : this._t("never_triggered"), S = u ? "" : `<div class="small" style="opacity:0.7;margin-top:4px">${this._escapeHtml(h)}</div>`;
          return `
        <div class="list-item-card">
          <div>
            <div style="font-weight:700">${this._escapeHtml(m.attributes?.friendly_name || m.entity_id)}</div>
            ${S}
          </div>
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(f)}">✏️</button>
        </div>`;
        }).join("")}</div>`, r.querySelectorAll("[data-edit-auto]").forEach((m) => m.addEventListener("click", () => {
          history.pushState(null, "", `/config/automation/edit/${m.dataset.editAuto}`), window.dispatchEvent(new CustomEvent("location-changed"));
        }));
      } catch (i) {
        console.error("Argus automations render failed:", i), r.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
      }
    }
  }
  /* ── Notifications ───────────────────────────────────────────────── */
  _populateNotifSelect() {
    const r = this.shadowRoot.getElementById("notif-select");
    if (!r) return;
    const i = this._hass?.services?.notify || {}, o = Object.values(this._hass?.states || {}).filter((d) => d?.entity_id?.startsWith("notify.") && d.entity_id !== "notify.persistent_notification").map((d) => ({ value: `entity:${d.entity_id}`, label: d.attributes?.friendly_name || d.entity_id })), s = Object.keys(i).filter((d) => !["notify", "send_message", "persistent_notification"].includes(d) && !this._notifTargets.includes(d)).map((d) => ({ value: d, label: d.replace(/_/g, " ") })), u = [...o, ...s].filter((d) => !this._notifTargets.includes(d.value));
    r.innerHTML = u.length ? u.map(({ value: d, label: m }) => `<option value="${this._escapeHtml(d)}">${this._escapeHtml(`🔔 ${m}`)}</option>`).join("") : `<option value="">— ${this._escapeHtml(this._t("notif_no_services"))} —</option>`;
  }
  _addNotifTarget() {
    const i = this.shadowRoot.getElementById("notif-select")?.value;
    !i || this._notifTargets.includes(i) || (this._notifTargets.push(i), this._renderNotifChips(), this._populateNotifSelect());
  }
  _renderNotifChips() {
    const r = this.shadowRoot.getElementById("notif-targets");
    r && (r.innerHTML = this._notifTargets.map((i) => `
      <span class="notif-chip" style="color:#ffffff !important;font-weight:700;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);">🔔 ${this._escapeHtml(i.replace(/^entity:notify\./, "").replace(/_/g, " "))}
        <button data-notif-remove="${this._escapeHtml(i)}" style="color:#ffffff;opacity:0.75;cursor:pointer;margin-left:4px;font-weight:bold;">✕</button>
      </span>`).join("") || '<span class="small" style="opacity:.5">—</span>', r.querySelectorAll("[data-notif-remove]").forEach(
      (i) => i.addEventListener("click", () => {
        this._notifTargets = this._notifTargets.filter((o) => o !== i.dataset.notifRemove), this._renderNotifChips(), this._populateNotifSelect();
      })
    ));
  }
  _renderNotifications() {
    this._renderNotifChips(), this._populateNotifSelect();
  }
  async _saveNotifications() {
    const r = this.shadowRoot.getElementById("notif-status");
    this._runWithPin(async () => {
      try {
        await this._send("argus/save_ui", {
          notif_targets: this._notifTargets
        }), r && (r.textContent = "✓", r.className = "status ok");
      } catch (i) {
        r ? (r.textContent = i.message, r.className = "status err") : alert(this._format("generic_error", { error: i.message }));
      }
    });
  }
  /* ── Users ───────────────────────────────────────────────────────── */
  _renderUsers() {
    const r = this.shadowRoot.getElementById("users-list");
    if (!r) return;
    const i = this.shadowRoot.getElementById("p-admin-only");
    i && (i.style.display = this._isAdmin ? "none" : "block");
    try {
      const o = Array.isArray(this._users) ? this._users.filter((m) => m && typeof m == "object" && !Array.isArray(m)) : [], s = r.closest(".panel"), u = s && s.getAttribute("data-size") === "S", d = u ? o.slice(0, 2) : o;
      o.length ? (r.innerHTML = d.map((m, f) => {
        if (u)
          return `
            <div class="user-card" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:6px 10px;flex-direction:row">
              <div style="font-weight:700">${this._escapeHtml(m.name || "")}</div>
              <div style="display:flex;gap:4px">
                ${m.role === "admin" ? '<span class="user-badge admin">⭐ Adm</span>' : '<span class="user-badge user">👤 Std</span>'}
                ${m.access_pin_configured ? '<span class="user-badge" style="background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800">🔒 PIN</span>' : ""}
              </div>
            </div>`;
        const h = m.expiration_date && new Date(m.expiration_date) < /* @__PURE__ */ new Date();
        let S = "";
        if (m.expiration_date) {
          const z = new Date(m.expiration_date);
          if (!isNaN(z.getTime()))
            try {
              S = this._formatDateTime(z);
            } catch {
              S = z.toISOString();
            }
        }
        const b = m.expiration_date ? h ? `<span class="user-badge admin" style="background:#b91c1c;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">❌ ${this._escapeHtml(this._t("expired"))} (${this._escapeHtml(S)})</span>` : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">⏳ ${this._escapeHtml(this._t("active_until"))}: ${this._escapeHtml(S)}</span>` : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">♾️ ${this._t("exp_indefinite")}</span>`, k = m.ha_user_id ? (() => {
          const z = (this._haUsersList || []).find((C) => C.id === m.ha_user_id);
          return z ? this._format("ha_account_linked", { name: z.name }) : this._t("ha_account_unavailable");
        })() : this._t("ha_account_unavailable"), P = m.role === "admin" ? "⭐ " + this._escapeHtml(this._t("role_argus_admin")) : "👤 " + this._escapeHtml(this._t("role_argus_standard")), L = m.access_pin_configured ? '<span class="user-badge" style="background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800">🔒 PIN</span>' : `<span class="user-badge" style="background:#334155;color:#ffffff!important;border:1px solid rgba(255,255,255,0.2);font-weight:800">🔓 ${this._escapeHtml(this._t("user_no_pin"))}</span>`;
        return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(m.name || "")}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${m.role === "admin" ? "admin" : "user"}">${P}</span>
                  <span class="user-badge" style="background:#581c87;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">${this._escapeHtml(k)}</span>
                  ${L}
                  ${b}
                </div>
                ${m.role !== "admin" && m.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("view_panel_perm") || this._t("instances") || "Panel")}">👁️ ${m.permissions.view_status ? this._t("view_panel_perm") || this._t("instances") || "Panel" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("arm_perm") || this._t("system_armed") || "Armar")}">🛡️ ${m.permissions.arm ? this._t("arm_perm") || this._t("system_armed") || "Armar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("disarm_perm") || this._t("disarmed") || "Desarmar")}">🔓 ${m.permissions.disarm ? this._t("disarm_perm") || this._t("disarmed") || "Desarmar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("view_history_perm") || this._t("activity_log") || "Historial")}">📜 ${m.permissions.view_history ? this._t("view_history_perm") || this._t("activity_log") || "Historial" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="${this._escapeHtml(this._t("access_pin_lbl") || "PIN Acceso")}">🔑 ${m.permissions.change_pin ? this._t("access_pin_lbl") || "PIN Acceso" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="${this._escapeHtml(this._t("master_pin_lbl") || "Pin de Armado")}">🔑 ${m.permissions.change_master_pin ? this._t("master_pin_lbl") || "Pin de Armado" : "---"}</span>
                </div>
                ` : ""}
              </div>
              <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${f}" title="${this._escapeHtml(this._t("modal_edit_name"))}">✏️</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${f}" title="${this._escapeHtml(this._t("modal_pin_title"))}">🔑</button>
                  ${m.role !== "admin" ? `<button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-perms="${f}" title="${this._escapeHtml(this._t("permissions_title") || "Permisos")}">🛡️</button>` : ""}
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${f}" title="${this._escapeHtml(this._t("user_role_label"))}">⭐</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t("delete_user_tooltip"))}" aria-label="${this._escapeHtml(this._t("delete_user_tooltip"))}" data-user-del="${f}">🗑️</button>
                ` : ""}
              </div>
            </div>
          </div>`;
      }).join(""), this._isAdmin && r.insertAdjacentHTML("beforeend", `
            <div style="margin-top:10px">
              <button class="secondary" style="width:100%;padding:10px;font-size:13px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,255,255,0.18);background:rgba(255,255,255,0.03)" id="btn-add-manual-user">➕ ${this._escapeHtml(this._t("modal_add_user"))}</button>
            </div>`), this._isAdmin && (r.querySelectorAll("[data-user-edit]").forEach((m) => {
        m.addEventListener("click", async () => {
          const f = Number(m.dataset.userEdit), h = this._users[f];
          if (!h) return;
          const S = await this._showArgusInputModal({
            title: this._t("modal_edit_name"),
            label: this._t("modal_name_label"),
            placeholder: h.name,
            initialValue: h.name,
            type: "text"
          });
          S === null || S.trim() === "" || this._runWithPin(async () => {
            try {
              const b = this._users.map((P, L) => L === f ? { ...P, name: S.trim() } : P), k = await this._send("argus/save_ui", { users: b });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || b) : this._users = b, this._renderUsers();
            } catch (b) {
              this._showArgusConfirmModal(b.message || this._format("generic_error", { error: b }), { confirmLabel: "OK" });
            }
          });
        });
      }), r.querySelectorAll("[data-user-pin]").forEach((m) => {
        m.addEventListener("click", async () => {
          const f = Number(m.dataset.userPin), h = this._users[f];
          if (!h) return;
          const S = await this._showArgusInputModal({
            title: `${this._t("modal_pin_title")} — ${h.name}`,
            label: this._t("modal_pin_help"),
            placeholder: "••••",
            type: "password",
            numeric: !0
          });
          S !== null && this._runWithPin(async () => {
            try {
              await this._send("argus/save_user_access_pin", { argus_user_id: h.id, pin: S.trim() });
              const b = await this._send("argus/dashboard");
              b && b.users && (this._users = b.users), this._renderUsers();
            } catch (b) {
              this._showArgusConfirmModal(b.message || this._format("generic_error", { error: b }), { confirmLabel: "OK" });
            }
          });
        });
      }), r.querySelector("#btn-add-manual-user")?.addEventListener("click", async () => {
        const m = await this._showArgusInputModal({
          title: this._t("modal_add_user"),
          label: this._t("modal_name_label"),
          placeholder: this._t("user_default") || "Usuario",
          type: "text"
        });
        !m || !m.trim() || this._runWithPin(async () => {
          try {
            const f = {
              id: `argus_manual_${Date.now()}`,
              name: m.trim(),
              role: "standard",
              enabled: !0,
              permissions: { view_status: !0, arm: !0, disarm: !0, view_history: !1 }
            }, h = [...this._users || [], f], S = await this._send("argus/save_ui", { users: h });
            S && S.ui ? (this._ui = S.ui, this._users = S.ui.users || h) : this._users = h, this._renderUsers();
          } catch (f) {
            this._showArgusConfirmModal(f.message || this._format("generic_error", { error: f }), { confirmLabel: "OK" });
          }
        });
      }), r.querySelectorAll("[data-user-role-toggle]").forEach((m) => {
        m.addEventListener("click", async () => {
          const f = Number(m.dataset.userRoleToggle), h = this._users[f];
          if (!h) return;
          const S = await this._showArgusInputModal({
            title: this._t("user_role_action") || "Cambiar Rol",
            label: this._t("user_role_label") || "Selecciona el rol",
            initialValue: h.role === "admin" ? "admin" : "standard",
            type: "select",
            options: [
              { value: "admin", label: this._t("role_argus_admin") || "Administrador de Argus" },
              { value: "standard", label: this._t("role_argus_standard") || "Usuario estándar" }
            ]
          });
          !S || S === h.role || this._runWithPin(async () => {
            const b = this._users.map((k, P) => P === f ? { ...k, role: S } : k);
            try {
              const k = await this._send("argus/save_ui", { users: b });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || b) : this._users = b, this._renderUsers();
            } catch (k) {
              this._showArgusConfirmModal(k.message || this._format("generic_error", { error: k }), { confirmLabel: "OK" });
            }
          });
        });
      }), r.querySelectorAll("[data-user-del]").forEach(
        (m) => m.addEventListener("click", async () => {
          const f = Number(m.dataset.userDel), h = this._users[f];
          if (!h) return;
          const S = this._format("delete_user_confirm", { name: h.name || "User" });
          await this._showArgusConfirmModal(
            this._t("modal_delete_confirm") || S,
            { confirmLabel: this._t("clear") || "Delete", confirmStyle: "background:#e53935;color:white;border:none" }
          ) && this._runWithPin(async () => {
            const k = [...this._users];
            k.splice(f, 1);
            try {
              const P = await this._send("argus/save_ui", { users: k });
              P && P.ui ? (this._ui = P.ui, this._users = P.ui.users || k) : this._users = k, this._renderUsers();
            } catch (P) {
              this._showArgusConfirmModal(P.message || this._format("generic_error", { error: P }), { confirmLabel: "OK" });
            }
          });
        })
      ), r.querySelectorAll("[data-user-perms]").forEach((m) => {
        m.addEventListener("click", async () => {
          const f = Number(m.dataset.userPerms), h = this._users[f];
          if (!h) return;
          const S = await this._showArgusPermissionsModal(h);
          S !== null && this._runWithPin(async () => {
            const b = this._users.map((k, P) => P === f ? { ...k, permissions: { ...k.permissions, ...S } } : k);
            try {
              const k = await this._send("argus/save_ui", { users: b });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || b) : this._users = b, this._renderUsers();
            } catch (k) {
              this._showArgusConfirmModal(k.message || this._format("generic_error", { error: k }), { confirmLabel: "OK" });
            }
          });
        });
      }))) : r.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    } catch (o) {
      console.error("Argus users list render failed:", o), r.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    }
    this._syncAccessSummary();
  }
  _populateTemperatureSources() {
    const r = this.shadowRoot.getElementById("temp-source-select-standalone");
    if (!r || !this._hass) return;
    const i = [{ entity_id: "auto", name: this._t("temp_auto") }];
    for (const s of Object.values(this._hass.states || {})) {
      const u = s.entity_id || "", d = s.attributes || {};
      if (u.startsWith("climate.") && typeof d.current_temperature == "number") {
        i.push({ entity_id: u, name: `🌡️ ${d.friendly_name || u} ${this._t("temp_thermostat")}` });
        continue;
      }
      if (!u.startsWith("sensor.")) continue;
      const m = String(d.device_class || "").toLowerCase(), f = String(d.unit_of_measurement || d.native_unit_of_measurement || "").toLowerCase(), h = Number(s.state);
      Number.isFinite(h) && (m === "temperature" || ["°c", "°f", "c", "f"].includes(f)) && i.push({ entity_id: u, name: `🌡️ ${d.friendly_name || u}` });
    }
    const o = /* @__PURE__ */ new Set();
    r.innerHTML = i.filter((s) => o.has(s.entity_id) ? !1 : (o.add(s.entity_id), !0)).map((s) => `<option value="${this._escapeHtml(s.entity_id)}">${this._escapeHtml(s.name)}</option>`).join("");
  }
  _populateWeatherSources() {
    const r = this.shadowRoot.getElementById("weather-source-select");
    if (!r || !this._hass?.states) return;
    const i = r.value || this._weatherSource || "auto", o = Object.values(this._hass.states).filter((s) => s.entity_id?.startsWith("weather."));
    r.innerHTML = [{ entity_id: "auto", name: this._t("weather_auto") }, ...o.map((s) => ({ entity_id: s.entity_id, name: s.attributes?.friendly_name || s.entity_id }))].map((s) => `<option value="${this._escapeHtml(s.entity_id)}">${this._escapeHtml(s.name)}</option>`).join(""), r.value = [...r.options].some((s) => s.value === i) ? i : "auto";
  }
  _getWeatherEntity() {
    const r = this._weatherSource || "auto";
    return (r !== "auto" ? this._hass?.states?.[r] : null) || Object.values(this._hass?.states || {}).find((o) => o.entity_id?.startsWith("weather.")) || { state: "sunny", attributes: {} };
  }
  _getDisplayedTemperature() {
    if (!this._hass) return null;
    const r = this._temperatureSource || "auto";
    if (r !== "auto") {
      const u = this._hass.states?.[r];
      if (!u) return null;
      const d = r.startsWith("climate.") ? u.attributes?.current_temperature : Number(u.state), m = r.startsWith("climate.") ? u.attributes?.temperature_unit : u.attributes?.unit_of_measurement || u.attributes?.native_unit_of_measurement;
      return Number.isFinite(Number(d)) ? `${Number(d).toFixed(1).replace(/\.0$/, "")}°${String(m || "").replace("°", "")}` : null;
    }
    const i = this._getWeatherEntity(), o = i?.attributes?.temperature, s = i?.attributes?.temperature_unit;
    return Number.isFinite(Number(o)) ? `${Number(o).toFixed(1).replace(/\.0$/, "")}°${String(s || "").replace("°", "")}` : null;
  }
  _getTemperatureReadings() {
    if (!this._hass?.states) return [];
    const r = [], i = this._getWeatherEntity(), o = i?.attributes?.temperature, s = i?.attributes?.temperature_unit;
    Number.isFinite(Number(o)) && r.push({ label: "EXT.", value: `${Number(o).toFixed(1).replace(/\.0$/, "")}°${String(s || "").replace("°", "")}` });
    const u = this._temperatureSource || "auto";
    let d = u !== "auto" ? this._hass.states[u] : Object.values(this._hass.states).find((m) => m.entity_id?.startsWith("climate.") && Number.isFinite(Number(m.attributes?.current_temperature)));
    if (d?.entity_id?.startsWith("weather.") && (d = null), d) {
      const m = d.entity_id.startsWith("climate.") ? d.attributes?.current_temperature : Number(d.state), f = d.entity_id.startsWith("climate.") ? d.attributes?.temperature_unit : d.attributes?.unit_of_measurement || d.attributes?.native_unit_of_measurement;
      Number.isFinite(Number(m)) && r.push({ label: "INT.", value: `${Number(m).toFixed(1).replace(/\.0$/, "")}°${String(f || "").replace("°", "")}` });
    }
    return r;
  }
  _moonPhase() {
    const r = (this._hass?.states?.["sensor.moon_phase"]?.state || this._hass?.states?.["sensor.moon"]?.state || "").toLowerCase().replace(/[\s-]+/g, "_");
    return r.includes("new") ? "new" : r.includes("waxing_crescent") ? "waxing-crescent" : r.includes("first_quarter") ? "first-quarter" : r.includes("waxing_gibbous") ? "waxing-gibbous" : r.includes("waning_gibbous") ? "waning-gibbous" : r.includes("last_quarter") || r.includes("third_quarter") ? "last-quarter" : r.includes("waning_crescent") ? "waning-crescent" : (r.includes("full"), "full");
  }
  _eclipseEvent() {
    const i = Object.values(this._hass?.states || {}).find((s) => {
      const u = `${s.entity_id || ""} ${s.attributes?.friendly_name || ""} ${s.attributes?.device_class || ""}`.toLowerCase(), d = `${s.state || ""} ${s.attributes?.event || ""} ${s.attributes?.type || ""}`.toLowerCase();
      return /eclips/.test(u) && !/^(off|none|unknown|unavailable|false|0)$/i.test(String(s.state || "")) && /eclips|solar|lunar|moon|luna/.test(d);
    });
    if (!i) return null;
    const o = `${i.state || ""} ${i.attributes?.event || ""} ${i.attributes?.type || ""} ${i.attributes?.friendly_name || ""}`.toLowerCase();
    return /solar|sun|sol/.test(o) ? "solar" : /lunar|moon|luna/.test(o) ? "lunar" : null;
  }
  _renderEclipseOverlay(r) {
    if (!r) return "";
    const i = r === "solar" ? "☀️ Eclipse solar" : "🌕 Eclipse lunar";
    return `<div class="weather-eclipse" aria-label="${i}">${i}</div>`;
  }
  _season() {
    const r = (/* @__PURE__ */ new Date()).getMonth(), o = Number(this._hass?.config?.latitude) < 0 ? (r + 6) % 12 : r;
    return [11, 0, 1].includes(o) ? "winter" : [2, 3, 4].includes(o) ? "spring" : [5, 6, 7].includes(o) ? "summer" : "autumn";
  }
  async _handleBackgroundFiles(r) {
    const i = Array.from(r?.target?.files || []).slice(0, 4);
    if (!i.length) return;
    const o = (u) => new Promise((d, m) => {
      const f = new FileReader();
      f.onload = () => d(String(f.result || "")), f.onerror = m, f.readAsDataURL(u);
    });
    this._backgroundImages = (await Promise.all(i.map(o))).filter(Boolean);
    const s = this.shadowRoot.getElementById("bg-file-help");
    s && (s.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`);
  }
  _isVideoFile(r) {
    const i = [".mov", ".mp4", ".webm", ".ogg", ".avi", ".m4v"], o = (r.name || "").toLowerCase();
    return i.some((s) => o.endsWith(s)) || r.type.startsWith("video/");
  }
  async _showLivePhotoDialog(r, i, o) {
    confirm(this._format("file_choice", { file: r.name })) ? await i() : await o();
  }
  async _uploadFile(r, i) {
    const o = this._hass?.auth?.accessToken, s = {};
    o && (s.Authorization = `Bearer ${o}`);
    const u = new FormData();
    u.append("file", r);
    const d = await fetch("/api/argus/upload", {
      method: "POST",
      body: u,
      headers: s
    });
    if (!d.ok) throw new Error(`HTTP error! status: ${d.status}`);
    return await d.json();
  }
  async _handlePanelBgFile(r) {
    const i = r?.target?.files?.[0];
    if (!i) return;
    const o = this.shadowRoot.getElementById("bg-file-help");
    o && (o.textContent = "Subiendo al servidor..."), r.target.value = "";
    try {
      if (this._isVideoFile(i))
        await this._showLivePhotoDialog(
          i,
          async () => {
            const u = await this._uploadFile(i, o);
            if (u?.success) {
              this._panelBgFile = u.url;
              const d = this.shadowRoot.getElementById("panel-bg-url-input");
              d && (d.value = u.url), o && (o.textContent = `Subido como imagen: ${i.name}`), this._loadUploadedFiles();
            } else
              o && (o.textContent = this._format("generic_error", { error: u?.error || this._t("upload_error") }));
          },
          async () => {
            const u = await this._uploadFile(i, o);
            if (u?.success) {
              this._panelBgFile = u.url;
              const d = this.shadowRoot.getElementById("panel-bg-url-input");
              d && (d.value = u.url), o && (o.textContent = `Subido como video: ${i.name}`), this._loadUploadedFiles();
            } else
              o && (o.textContent = this._format("generic_error", { error: u?.error || this._t("upload_error") }));
          }
        );
      else {
        const u = await this._uploadFile(i, o);
        if (u?.success) {
          this._panelBgFile = u.url;
          const d = this.shadowRoot.getElementById("panel-bg-url-input");
          d && (d.value = u.url), o && (o.textContent = `Subido: ${i.name}`), this._loadUploadedFiles();
        } else
          o && (o.textContent = this._format("generic_error", { error: u?.error || this._t("upload_error") }));
      }
    } catch (s) {
      console.error("Upload failed:", s), o && (o.textContent = this._format("generic_error", { error: s.message || s }));
    }
  }
  async _handleHubBgFile(r) {
    const i = r?.target?.files?.[0];
    if (!i) return;
    const o = this.shadowRoot.getElementById("hub-file-help");
    o && (o.textContent = "Subiendo al servidor..."), r.target.value = "";
    try {
      if (this._isVideoFile(i))
        await this._showLivePhotoDialog(
          i,
          async () => {
            const u = await this._uploadFile(i, o);
            if (u?.success) {
              this._hubBgFile = u.url;
              const d = this.shadowRoot.getElementById("hub-bg-url-input");
              d && (d.value = u.url), o && (o.textContent = `Subido como imagen: ${i.name}`), this._loadUploadedFiles();
            } else
              o && (o.textContent = this._format("generic_error", { error: u?.error || this._t("upload_error") }));
          },
          async () => {
            const u = await this._uploadFile(i, o);
            if (u?.success) {
              this._hubBgFile = u.url;
              const d = this.shadowRoot.getElementById("hub-bg-url-input");
              d && (d.value = u.url), o && (o.textContent = `Subido como video: ${i.name}`), this._loadUploadedFiles();
            } else
              o && (o.textContent = this._format("generic_error", { error: u?.error || this._t("upload_error") }));
          }
        );
      else {
        const u = await this._uploadFile(i, o);
        if (u?.success) {
          this._hubBgFile = u.url;
          const d = this.shadowRoot.getElementById("hub-bg-url-input");
          d && (d.value = u.url), o && (o.textContent = `Subido: ${i.name}`), this._loadUploadedFiles();
        } else
          o && (o.textContent = this._format("generic_error", { error: u?.error || this._t("upload_error") }));
      }
    } catch (s) {
      console.error("Upload failed:", s), o && (o.textContent = this._format("generic_error", { error: s.message || s }));
    }
  }
  async _loadUploadedFiles() {
    try {
      const r = await this._send("argus/list_uploaded_files");
      this._uploadedFiles = r || [], this._renderUploadedFiles();
    } catch (r) {
      console.error("Failed to load uploaded files:", r);
      const i = this.shadowRoot.getElementById("uploaded-files-list");
      i && (i.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; color:#ff4d4d; opacity:0.8;">
            ${this._t("error_loading_uploaded_files")}
          </div>
        `);
    }
  }
  _renderUploadedFiles() {
    const r = this.shadowRoot.getElementById("uploaded-files-list"), i = this.shadowRoot.getElementById("storage-files-count");
    if (!r) return;
    const o = this._uploadedFiles || [];
    if (!o.length) {
      r.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; opacity:0.5;">
          ${this._t("no_files_uploaded")}
        </div>
      `, i && (i.textContent = this._t("files_count").replace("{count}", "0"));
      return;
    }
    let s = 0;
    o.forEach((d) => s += d.size_bytes || 0);
    let u = "";
    s >= 1024 * 1024 ? u = `${(s / (1024 * 1024)).toFixed(2)} MB` : u = `${(s / 1024).toFixed(2)} KB`, i && (i.textContent = this._t("files_count_short").replace("{count}", o.length) + ` (${u})`), r.innerHTML = o.filter((d) => !d.is_video).map((d) => `
      <div class="file-card" data-filename="${this._escapeHtml(d.name)}">
        <div class="file-card-preview">
          <img src="${this._escapeHtml(d.url)}" loading="lazy">
        </div>
        <div class="file-card-name" title="${this._escapeHtml(d.name)}">${this._escapeHtml(d.name)}</div>
        <div class="file-card-meta">
          <span>${this._escapeHtml(d.size_str)}</span>
          <button class="file-card-btn-delete" data-filename="${this._escapeHtml(d.name)}" title="${this._escapeHtml(this._t("delete_btn_title"))}">🗑️</button>
        </div>
        <div class="file-card-actions">
          <button class="file-card-btn use-for-panel" data-url="${this._escapeHtml(d.url)}">${this._escapeHtml(this._t("use_for_panel"))}</button>
          <button class="file-card-btn use-for-hub" data-url="${this._escapeHtml(d.url)}">${this._escapeHtml(this._t("use_for_hub"))}</button>
        </div>
      </div>
    `).join(""), r.querySelectorAll(".file-card-btn-delete").forEach((d) => {
      d.addEventListener("click", () => {
        const m = d.dataset.filename;
        confirm(this._t("file_delete_confirm").replace("{filename}", m)) && this._deleteUploadedFile(m);
      });
    }), r.querySelectorAll(".use-for-panel").forEach((d) => {
      d.addEventListener("click", () => {
        const m = d.dataset.url;
        this._panelBgFile = m;
        const f = this.shadowRoot.getElementById("panel-bg-url-input");
        f && (f.value = m);
        const h = this.shadowRoot.getElementById("bg-mode-select-standalone");
        h && (h.value = "photo"), this._backgroundMode = "photo", this._updateBgFieldsVisibility(), this._renderEntries(), this._savePersonalization();
        const S = this.shadowRoot.getElementById("bg-file-help");
        S && (S.textContent = this._t("bg_panel_selected_from_history"));
      });
    }), r.querySelectorAll(".use-for-hub").forEach((d) => {
      d.addEventListener("click", () => {
        const m = d.dataset.url;
        this._hubBgFile = m;
        const f = this.shadowRoot.getElementById("hub-bg-url-input");
        f && (f.value = m);
        const h = this.shadowRoot.getElementById("hub-bg-mode-select");
        h && (h.value = "image"), this._hubBgMode = "image", this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._savePersonalization();
        const S = this.shadowRoot.getElementById("hub-file-help");
        S && (S.textContent = this._t("bg_hub_selected_from_history"));
      });
    });
  }
  async _deleteUploadedFile(r) {
    try {
      await this._send("argus/delete_uploaded_file", { filename: r }), this._uploadedFiles && (this._uploadedFiles = this._uploadedFiles.filter((s) => s.name !== r), this._renderUploadedFiles());
      const i = this.shadowRoot.getElementById("panel-bg-url-input");
      i && i.value === `/local/argus/${r}` && (i.value = "", this._panelBgFile = "");
      const o = this.shadowRoot.getElementById("hub-bg-url-input");
      o && o.value === `/local/argus/${r}` && (o.value = "", this._hubBgFile = "");
    } catch (i) {
      console.warn("Server delete failed:", i), alert(this._format("delete_file_error", { error: i.message || i }));
    }
  }
  _updateBgFieldsVisibility() {
    const r = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", i = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", o = this.shadowRoot.getElementById("panel-custom-bg-inputs");
    if (o)
      if (r === "photo" || r === "collage") {
        o.style.display = "flex";
        const u = this.shadowRoot.getElementById("lbl-panel-bg-sound");
        u && (u.style.display = "none");
        const d = this.shadowRoot.getElementById("panel-bg-file-input");
        d && (d.accept = "image/*,.mov,.heic,.heif");
        const m = this.shadowRoot.getElementById("panel-bg-url-input");
        m && (m.placeholder = "Pegar URL de la imagen");
      } else
        o.style.display = "none";
    const s = this.shadowRoot.getElementById("hub-custom-bg-inputs");
    if (s)
      if (i === "image") {
        s.style.display = "flex";
        const u = this.shadowRoot.getElementById("lbl-hub-bg-sound");
        u && (u.style.display = "none");
        const d = this.shadowRoot.getElementById("hub-bg-file-input");
        d && (d.accept = "image/*,.mov,.heic,.heif");
        const m = this.shadowRoot.getElementById("hub-bg-url-input");
        m && (m.placeholder = "Pegar URL de la imagen/GIF");
      } else
        s.style.display = "none";
  }
  _updateCanvasBackground() {
    const r = this.shadowRoot.getElementById("argus-canvas-bg");
    this.setAttribute("data-bg-mode", "default"), r && (r.innerHTML = "", r.style.backgroundImage = ""), this.shadowRoot.querySelectorAll(".wx-webgl").forEach((i) => {
      i._argusRO && i._argusRO.disconnect(), i._argusWebglStop && i._argusWebglStop(), i.remove();
    }), this.style.backgroundImage = "url('/api/argus_static/argus-default-bg.jpg')", this.style.backgroundSize = "cover", this.style.backgroundPosition = "center", this.style.backgroundRepeat = "no-repeat", this.style.backgroundAttachment = "fixed";
  }
  _renderEntryBackground(r, i) {
    return '<div class="wx wx-liquid-glass" style="position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; border-radius:inherit; background:radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06), transparent 70%);"></div>';
  }
  _updateHomeNameDisplay() {
    const r = this.shadowRoot.getElementById("lbl-home-name-prominent");
    r && (r.textContent = this._homeName || this._t("home_default"));
    const i = this.shadowRoot.getElementById("dropdown-home-name");
    i && (i.textContent = this._homeName || this._t("home_default"));
  }
  _sendTempNotification(r) {
    const i = this._notifTargets || [];
    !i.length || !this._hass || i.forEach((o) => {
      try {
        this._hass.callService("notify", o, {
          message: r,
          title: this._t("temp_notification_title"),
          data: { push: { sound: "default", badge: 1 } }
        });
      } catch {
      }
    });
  }
  _normaliseEmergencyNumber(r) {
    const i = String(r || "").replace(/[^0-9+]/g, "");
    return /^[+]?[0-9]{2,15}$/.test(i) ? i : "911";
  }
  _renderSosOutputs() {
    const r = this.shadowRoot?.getElementById("sos-output-chips");
    if (!r) return;
    const i = this._panicOutputs || [];
    r.innerHTML = i.length ? i.map((o) => {
      const s = this._hass?.states?.[o]?.attributes?.friendly_name || o;
      return `<span class="sensor-pill" title="${this._escapeHtml(s)}"><span>${this._escapeHtml(s)}</span></span>`;
    }).join("") : `<div class="mode-sensor-none">${this._t("sos_no_outputs")}</div>`;
  }
  _configureEmergencyCall() {
    const r = this.shadowRoot?.getElementById("sos-call-btn");
    if (!r) return;
    const i = this._normaliseEmergencyNumber(this._emergencyNumber);
    r.href = `tel:${i}`, r.textContent = `${this._t("sos_call")} (${i})`;
  }
  async _triggerSOS() {
    if (this._sosBusy) return;
    this._sosBusy = !0;
    const r = this.shadowRoot && this.shadowRoot.getElementById("sos-modal");
    r && r.classList.remove("open");
    const i = this._normaliseEmergencyNumber(this._emergencyNumber), o = this._sosEntryIdx, s = this._dashboard?.entries?.[o], u = s?.entity_id;
    try {
      if (!this._hass || !u) throw new Error(this._t("no_alarm_instance"));
      await this._send("argus/perform_alarm_action", { action: "sos", entry_id: s.entry_id }), window.confirm(`${this._t("sos_activated")}. ${this._format("sos_call_confirm", { number: i })}`) && (window.location.href = `tel:${i}`);
    } catch (d) {
      alert(this._format("sos_error", { error: d?.message || d }));
    } finally {
      this._sosEntryIdx = null, this._sosBusy = !1;
    }
  }
  async _stopSOS(r) {
    const i = this._dashboard?.entries?.[r], s = (i && this._hass?.states?.[i.entity_id])?.attributes?.panic_previous_state, u = {
      armed_home: "alarm_arm_home",
      armed_away: "alarm_arm_away",
      armed_night: "alarm_arm_night",
      armed_vacation: "alarm_arm_vacation",
      disarmed: "alarm_disarm"
    }[s];
    if (!i?.entity_id || !u) {
      alert(this._t("panic_state_unknown"));
      return;
    }
    const d = async (f) => {
      try {
        return await this._send("argus/perform_alarm_action", {
          action: u.replace("alarm_", ""),
          entry_id: i.entry_id,
          ...f ? { code: f } : {}
        }), await this._load(), !0;
      } catch (h) {
        const S = this.shadowRoot.getElementById("pin-error");
        return S ? S.textContent = `❌ ${this._format("panic_stop_error", { error: "" }).replace(/:\s*$/, "")}` : alert(this._format("panic_stop_error", { error: h?.message || h })), !1;
      }
    };
    i.pin_configured === !0 || (this._users || []).length > 0 ? this._showPinModal(d) : await d(null);
  }
  _savePersonalization() {
    this._runWithPin(() => this._persistPersonalization());
  }
  async _persistPersonalization() {
    this._ui = this._ui || {};
    const r = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", i = this.shadowRoot.getElementById("temp-source-select-standalone")?.value || "auto", o = this.shadowRoot.getElementById("weather-source-select")?.value || "auto", s = this.shadowRoot.getElementById("argus-clock-format-select")?.value || "auto";
    this._clockFormat = ["auto", "12h", "24h"].includes(s) ? s : "auto";
    const u = this._normaliseEmergencyNumber(this.shadowRoot.getElementById("emergency-number-input")?.value), d = this.shadowRoot.getElementById("panel-bg-url-input")?.value || "", m = !!this.shadowRoot.getElementById("chk-panel-bg-sound")?.checked, f = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", h = f === "default" ? "none" : f, S = this._hubBgFile || this.shadowRoot.getElementById("hub-bg-url-input")?.value || "", b = !!this.shadowRoot.getElementById("chk-hub-bg-sound")?.checked, k = {
      home_name: this._homeName,
      temperature_source: i,
      weather_source: o,
      clock_format: this._clockFormat,
      emergency_number: u
    };
    this._panicOutputs !== void 0 && (k.panic_outputs = this._panicOutputs);
    const P = (this._ui.users || []).find((C) => C.id === this._currentProfile?.id);
    k.background_mode = r, k.background_images = this._backgroundImages || [], k.panel_bg_file = d, k.panel_bg_sound = m, k.hub_bg_mode = h, k.hub_bg_file = S, k.hub_bg_sound = b, k.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    let L = "default", z = "";
    if (r === "photo" && d ? (L = "photo", z = d) : r === "weather" ? L = "weather" : r === "none" && (L = "none"), k.theme = {
      background_mode: L,
      background_file: z
    }, P) {
      const C = JSON.parse(JSON.stringify(this._ui.users || [])), w = C.find((_) => _.id === this._currentProfile?.id);
      w.background_mode = r, w.background_images = this._backgroundImages || [], w.panel_bg_file = d, w.panel_bg_sound = m, w.hub_bg_mode = h, w.hub_bg_file = S, w.hub_bg_sound = b, w.theme = k.theme, k.users = C;
    }
    try {
      await this._send("argus/save_ui", k), this._currentUserTheme = k.theme, this._backgroundMode = r, this._temperatureSource = i, this._weatherSource = o, this._emergencyNumber = u, this._panelBgFile = d, this._panelBgSound = m, this._hubBgMode = f, this._hubBgFile = S, this._hubBgSound = b, this._updateTheme(), this._ui = this._ui || {}, P ? this._ui.users = k.users : (this._ui.background_mode = r, this._ui.background_images = this._backgroundImages || [], this._ui.panel_bg_file = d, this._ui.panel_bg_sound = m, this._ui.hub_bg_mode = h, this._ui.hub_bg_file = S, this._ui.hub_bg_sound = b), this._ui.temperature_source = i, this._ui.weather_source = o, this._ui.clock_format = this._clockFormat, this._ui.emergency_number = u, this._ui.panic_outputs = this._panicOutputs, this._configureEmergencyCall(), this._ui.hub_bg_file = S, this._ui.hub_bg_sound = b, this._renderEntries(), this._updateCanvasBackground();
      const C = this.shadowRoot.getElementById("btn-save-personalization-standalone");
      if (C) {
        const w = C.textContent;
        C.textContent = this._t("saved"), C.style.background = "#43a047", setTimeout(() => {
          C.textContent = w, C.style.background = "";
        }, 3e3);
      }
    } catch (C) {
      alert(this._format("generic_error", { error: C.message }));
    }
  }
  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const r = () => {
      const i = this.shadowRoot.getElementById("home-name-modal"), o = this.shadowRoot.getElementById("home-name-input"), s = this.shadowRoot.getElementById("home-name-status");
      o.value = this._homeName || this.shadowRoot.getElementById("home-name-setting")?.value || "", s && (s.textContent = ""), i.classList.add("open"), i.setAttribute("aria-hidden", "false"), setTimeout(() => o.focus(), 60);
    };
    this._runWithPin(r);
  }
  _closeHomeNameModal() {
    const r = this.shadowRoot.getElementById("home-name-modal");
    r.classList.remove("open"), r.setAttribute("aria-hidden", "true");
  }
  async _saveHomeName() {
    const i = (this.shadowRoot.getElementById("home-name-input")?.value || "").trim();
    try {
      await this._send("argus/save_ui", { home_name: i }), this._homeName = i, this._ui || (this._ui = {}), this._ui.home_name = i, this._updateHomeNameDisplay(), this._renderEntries(), setTimeout(() => this._closeHomeNameModal(), 800);
    } catch (o) {
      alert(this._format("generic_error", { error: o.message }));
    }
  }
  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const r = this.shadowRoot.getElementById("pin-status"), i = this._dashboard?.entries?.[0]?.pin_configured === !0, o = this.shadowRoot.getElementById("current-pin").value;
    if (i && !o) {
      r && (r.textContent = this._t("pin_incorrect"), r.className = "status err");
      return;
    }
    const s = this.shadowRoot.getElementById("new-pin-1").value, u = this.shadowRoot.getElementById("new-pin-2").value;
    if (s !== u) {
      r ? (r.textContent = this._t("pin_mismatch"), r.className = "status err") : alert(this._t("pin_mismatch"));
      return;
    }
    try {
      await this._send("argus/update_master_pin", { pin: s, current_pin: o }), r && (r.textContent = s ? this._t("pin_updated") : this._t("pin_deleted"), r.className = "status ok"), this.shadowRoot.getElementById("current-pin-display") && (this.shadowRoot.getElementById("current-pin-display").textContent = s ? this._t("pin_active_yes") : this._t("pin_active_no")), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !!s), this._syncAccessSummary(), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => this._load(), 1200);
    } catch (d) {
      r ? (r.textContent = d.message, r.className = "status err") : alert(d.message);
    }
  }
  async _handleForgotPin() {
    const r = this.shadowRoot.getElementById("pin-status"), i = this.shadowRoot.getElementById("pin-error");
    if (!(this._hass?.user?.is_admin === !0)) {
      const s = this._t("pin_reset_admin_only");
      r && (r.textContent = s, r.className = "status err"), i && (i.textContent = s);
      return;
    }
    if (confirm(this._t("pin_reset_confirm")))
      try {
        await this._send("argus/update_master_pin", { pin: "", force_reset: !0 });
        const s = "✓ Pin de Armado restablecido";
        r && (r.textContent = s, r.className = "status ok"), i && (i.textContent = s, i.style.color = "#43a047"), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => {
          this._closePinModal(), this._load();
        }, 1200);
      } catch (s) {
        const u = this._format("generic_error", { error: s.message });
        r && (r.textContent = u, r.className = "status err"), i && (i.textContent = u);
      }
  }
  /* ── Liquid-glass input modal (replaces window.prompt) ───────────── */
  _showArgusInputModal({ title: r = "", label: i = "", placeholder: o = "", initialValue: s = "", type: u = "text", numeric: d = !1, options: m = null } = {}) {
    return new Promise((f) => {
      const h = `_aim_${Date.now()}`, S = document.createElement("div");
      S.id = h, S.setAttribute("role", "dialog"), S.setAttribute("aria-modal", "true"), S.style.cssText = [
        "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const b = i.replace(/'/g, "&#39;"), k = r.replace(/'/g, "&#39;"), P = o.replace(/'/g, "&#39;"), L = this._t("modal_cancel") || "Cancelar", z = this._t("modal_save") || "Guardar";
      S.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(380px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${k}</div>
          ${b ? `<div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${b}</div>` : ""}
          ${u === "select" && m ? `<select id="aim-inp" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;transition:border-color .2s;font-family:inherit">
                 ${m.map((v) => `<option value="${this._escapeHtml(v.value)}" ${v.value === s ? "selected" : ""}>${this._escapeHtml(v.label)}</option>`).join("")}
               </select>` : `<input id="aim-inp" type="${u === "password" ? "password" : "text"}"
            ${d ? 'inputmode="numeric" pattern="[0-9]*"' : ""}
            placeholder="${P}"
            value="${s.replace(/"/g, "&quot;")}"
            style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;
              padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;
              transition:border-color .2s;font-family:inherit"/>`}
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="aim-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${L}</button>
            <button id="aim-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${z}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(S);
      const w = S.querySelector("#aim-inp"), _ = S.querySelector("#aim-ok"), x = S.querySelector("#aim-cancel");
      setTimeout(() => w?.focus(), 60), w?.addEventListener("focus", () => w.style.borderColor = "rgba(74,144,217,0.8)"), w?.addEventListener("blur", () => w.style.borderColor = "rgba(255,255,255,0.15)");
      const g = (v) => {
        S.remove(), f(v);
      };
      _.addEventListener("click", () => g(w.value)), x.addEventListener("click", () => g(null)), w.addEventListener("keydown", (v) => {
        v.key === "Enter" && (v.preventDefault(), g(w.value)), v.key === "Escape" && (v.preventDefault(), g(null));
      }), S.addEventListener("click", (v) => {
        v.target === S && g(null);
      });
    });
  }
  _showArgusPermissionsModal(r) {
    return new Promise((i) => {
      const o = document.createElement("div");
      o.style.cssText = [
        "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const s = this._t("modal_cancel") || "Cancelar", u = this._t("modal_save") || "Guardar", d = r.permissions || {};
      o.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(420px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ ${this._t("permissions_title") || "Permisos"} — ${this._escapeHtml(r.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${this._t("permissions_modal_desc") || "Selecciona las acciones permitidas para este perfil estándar:"}</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:280px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${d.view_status ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t("perm_view_status") || "Ver Estado de Sensores / Panel"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${d.arm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t("perm_arm") || "Armar Alarma"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${d.disarm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t("perm_disarm") || "Desarmar Alarma"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${d.view_history ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t("perm_view_history") || "Ver Historial de Actividad"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${d.change_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">${this._t("perm_change_pin") || "Permitir Cambiar su Pin perfil Argus"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${d.change_master_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">${this._t("perm_change_master_pin") || "Permitir Cambiar el Pin de Armado"}</span>
            </label>
          </div>

          <div style="display:flex;gap:10px;margin-top:10px">
            <button id="apm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${s}</button>
            <button id="apm-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${u}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(o);
      const f = o.querySelector("#apm-ok"), h = o.querySelector("#apm-cancel"), S = (b) => {
        o.remove(), i(b);
      };
      f.addEventListener("click", () => {
        const b = {
          view_status: o.querySelector("#chk-perm-view-status").checked,
          arm: o.querySelector("#chk-perm-arm").checked,
          disarm: o.querySelector("#chk-perm-disarm").checked,
          view_history: o.querySelector("#chk-perm-view-history").checked,
          change_pin: o.querySelector("#chk-perm-change-pin").checked,
          change_master_pin: o.querySelector("#chk-perm-change-master-pin").checked
        };
        S(b);
      }), h.addEventListener("click", () => S(null)), o.addEventListener("click", (b) => {
        b.target === o && S(null);
      });
    });
  }
  /* ── Liquid-glass confirm modal (replaces window.confirm) ─────────── */
  _showArgusConfirmModal(r = "", { confirmLabel: i = "", confirmStyle: o = "", cancelLabel: s = "" } = {}) {
    return new Promise((u) => {
      const d = document.createElement("div");
      d.setAttribute("role", "alertdialog"), d.setAttribute("aria-modal", "true"), d.style.cssText = [
        "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const m = i || this._t("modal_confirm") || "Confirmar", f = s || this._t("modal_cancel") || "Cancelar", h = o || "background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)";
      d.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.92);line-height:1.5;text-align:center">${r}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${f}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${h}">${m}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(d);
      const b = (k) => {
        d.remove(), u(k);
      };
      d.querySelector("#acm-ok").addEventListener("click", () => b(!0)), d.querySelector("#acm-cancel").addEventListener("click", () => b(!1)), d.addEventListener("click", (k) => {
        k.target === d && b(!1);
      }), d.addEventListener("keydown", (k) => {
        k.key === "Enter" && b(!0), k.key === "Escape" && b(!1);
      }), setTimeout(() => d.querySelector("#acm-ok")?.focus(), 60);
    });
  }
  _runWithPin(r) {
    r();
  }
  _showPinModal(r) {
    const i = this.shadowRoot.getElementById("pin-modal"), o = this.shadowRoot.getElementById("pin-input"), s = this.shadowRoot.getElementById("pin-error"), u = this.shadowRoot.querySelector(".wrap");
    o.value = "", s && (s.textContent = "", s.style.color = ""), this._pinCallback = r;
    const d = this.classList.contains("fullscreen-active");
    let m = null;
    if (d && (m = this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry") || this.shadowRoot.querySelector("article")), d && m) {
      i.style.position = "absolute", i.style.zIndex = "99999999", i.style.background = "rgba(0, 0, 0, 0.55)", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none";
      const f = i.querySelector(".modal");
      f && (f.classList.remove("dial-elastic"), f.offsetWidth, f.classList.add("dial-elastic")), m.appendChild(i);
    } else
      i.style.position = "fixed", i.style.zIndex = "999999", i.style.background = "rgba(0, 0, 0, 0.3)", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none", u && u.classList.add("wrap-blurred");
    i.classList.add("open"), i.setAttribute("aria-hidden", "false"), setTimeout(() => o.focus(), 60);
  }
  _closePinModal() {
    const r = this.shadowRoot.getElementById("pin-modal");
    r.classList.remove("open"), r.setAttribute("aria-hidden", "true");
    const i = this.shadowRoot.querySelector(".wrap");
    i && i.classList.remove("wrap-blurred"), r.style.position = "fixed", r.style.zIndex = "999999", this.shadowRoot.appendChild(r), this._pinCallback = null;
  }
  _appendPinDigit(r) {
    const i = this.shadowRoot.getElementById("pin-input"), o = this.shadowRoot.getElementById("pin-error");
    i && (i.value = `${i.value || ""}${r}`.slice(0, 8), o && (o.textContent = ""));
  }
  _backspacePin() {
    const r = this.shadowRoot.getElementById("pin-input"), i = this.shadowRoot.getElementById("pin-error");
    r && (r.value = (r.value || "").slice(0, -1), i && (i.textContent = ""));
  }
  async _submitPin() {
    const r = this.shadowRoot.getElementById("pin-input").value.trim();
    if (!r) {
      const o = this.shadowRoot.getElementById("pin-error");
      o && (o.textContent = "⚠️ Introduce el PIN");
      return;
    }
    const i = this._pinCallback;
    if (i)
      try {
        await i(r) !== !1 && this._closePinModal();
      } catch (o) {
        const s = this.shadowRoot.getElementById("pin-error");
        s && (s.textContent = o.message || "❌ PIN incorrecto");
      }
    else
      this._closePinModal();
  }
  /* ── Selector modal ──────────────────────────────────────────────── */
  _selectAll() {
    const r = (this.shadowRoot.getElementById("selector-search")?.value || "").toLowerCase().trim(), i = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"];
    (this._available || []).filter((s) => {
      if (this._selectorTarget === "external_panel") return s.domain === "alarm_control_panel";
      if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(s.domain);
      if (s.domain === "lock") return !0;
      if (s.domain === "binary_sensor") {
        const u = this._hass?.states?.[s.entity_id]?.attributes?.device_class || "";
        return i.includes(u);
      }
      return !1;
    }).filter((s) => !r || [s.entity_id, s.name, s.area].filter(Boolean).join(" ").toLowerCase().includes(r)).forEach((s) => {
      this._selected.includes(s.entity_id) || this._selected.push(s.entity_id);
    }), this._renderSelector(!0);
  }
  _openModal(r) {
    this._selectorTarget = r;
    const i = this._currentModeConfig(), o = r === "sensor" ? "sensors" : r === "bypass" ? "bypassed_sensors" : r === "entry" ? "entry_sensors" : r === "external_panel" ? "external_panels" : "sirens";
    this._selected = r === "panic" ? [...this._panicOutputs || this._ui?.panic_outputs || []] : Array.isArray(i?.[o]) ? [...i[o]] : [];
    const s = this.shadowRoot.getElementById("selector-title");
    r === "sensor" ? s.textContent = this._t("sensor_section") : r === "bypass" ? s.textContent = this._t("sensors_to_bypass") : r === "entry" ? s.textContent = this._t("entry_sensors") : r === "panic" ? s.textContent = this._t("sos_actions") || this._t("selector_panic") || "Dispositivos y Acciones SOS" : r === "external_panel" ? s.textContent = this._t("external_panels") || "Paneles de alarma externos" : s.textContent = this._t("siren_section");
    const u = this.shadowRoot.getElementById("selector-search");
    u && (u.value = ""), this._renderSelector(!0);
    const d = this.shadowRoot.getElementById("selector-modal");
    d.classList.add("open"), d.setAttribute("aria-hidden", "false");
  }
  _closeModal() {
    const r = this.shadowRoot.getElementById("selector-modal");
    r.classList.remove("open"), r.setAttribute("aria-hidden", "true");
  }
  _renderSelectedBox() {
    const r = this.shadowRoot.getElementById("selector-selected");
    if (!r) return;
    r.innerHTML = this._selected.map((o) => {
      const s = this._hass?.states?.[o], u = this._deviceFacts(o, s, !0);
      return `<div class="sel-right-item">
        <div style="min-width:0">
          <div class="sel-right-name">${this._escapeHtml(s?.attributes?.friendly_name || o)}</div>
          <div class="sel-right-facts">${u.map((d) => `<span class="device-fact ${d.className}">${this._escapeHtml(d.text)}</span>`).join("")}</div>
        </div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${this._escapeHtml(o)}">✕</button>
      </div>`;
    }).join("") || `<div class="small" style="padding:10px;opacity:.5">${this._t("none_selected")}</div>`;
    const i = this.shadowRoot.getElementById("selector-count");
    i && (i.textContent = `${this._selected.length} ${this._t("selected_lbl").toLowerCase()}`);
  }
  _renderSelector(r = !0) {
    const i = this.shadowRoot.getElementById("selector-list"), o = this.shadowRoot.getElementById("selector-selected");
    if (!(!i || !o)) {
      if (i._boundSelectorChange || (i._boundSelectorChange = !0, i.addEventListener("change", (s) => {
        const u = s.target.closest("input[type=checkbox]");
        if (!u || !u.dataset.entity) return;
        const d = u.dataset.entity;
        u.checked ? this._selected.includes(d) || this._selected.push(d) : this._selected = this._selected.filter((m) => m !== d), this._renderSelectedBox();
      })), o._boundSelectorRm || (o._boundSelectorRm = !0, o.addEventListener("click", (s) => {
        const u = s.target.closest("[data-rm]");
        if (!u || !u.dataset.rm) return;
        const d = u.dataset.rm;
        this._selected = this._selected.filter((f) => f !== d);
        const m = i.querySelector(`input[type=checkbox][data-entity="${d}"]`);
        m && (m.checked = !1), this._renderSelectedBox();
      })), r) {
        const s = (this.shadowRoot.getElementById("selector-search")?.value || "").toLowerCase().trim(), u = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"], d = (this._available || []).filter((m) => {
          if (this._selectorTarget === "external_panel") return m.domain === "alarm_control_panel";
          if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(m.domain);
          if (m.domain === "lock") return !0;
          if (m.domain === "binary_sensor") {
            const f = this._hass?.states?.[m.entity_id]?.attributes?.device_class || "";
            return u.includes(f);
          }
          return !1;
        }).filter((m) => !s || [m.entity_id, m.name, m.area, m.entity_id.split(".")[1]].filter(Boolean).join(" ").toLowerCase().includes(s));
        i.innerHTML = d.map((m) => {
          const f = this._hass?.states?.[m.entity_id], h = this._deviceFacts(m.entity_id, f, !0);
          return `<label class="pick-row">
          <input type="checkbox" data-entity="${this._escapeHtml(m.entity_id)}" ${this._selected.includes(m.entity_id) ? "checked" : ""}>
          <div>
            <div class="pick-row-name">${this._escapeHtml(m.name || m.entity_id)}</div>
            <div class="pick-row-meta">${this._escapeHtml(m.entity_id)}${m.area ? " · " + this._escapeHtml(m.area) : ""}</div>
            <div class="device-facts">${h.map((S) => `<span class="device-fact ${S.className}">${this._escapeHtml(S.text)}</span>`).join("")}</div>
          </div>
        </label>`;
        }).join("") || `<div class="small" style="padding:10px">${this._t("no_results")}</div>`;
      }
      this._renderSelectedBox();
    }
  }
  _acceptSelection() {
    if (!this._ui) return;
    if (this._selectorTarget === "panic") {
      this._panicOutputs = [...this._selected], this._renderSosOutputs(), this._closeModal(), this._mode === "sos" && (this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")));
      return;
    }
    this._ui.modes || (this._ui.modes = {}), this._ui.modes.__by_entity__ || (this._ui.modes.__by_entity__ = {});
    let r = this._modeEntryId;
    (!r || r === "default") && (r = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = r, this._ui.modes.__by_entity__[r] || (this._ui.modes.__by_entity__[r] = {});
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
    }, o = this._ui.modes.__by_entity__[r][this._mode] || {}, s = { ...i, ...o };
    this._selectorTarget === "sensor" && (s.sensors = [...this._selected]), this._selectorTarget === "siren" && (s.sirens = [...this._selected]), this._selectorTarget === "bypass" && (s.bypassed_sensors = [...this._selected]), this._selectorTarget === "entry" && (s.entry_sensors = [...this._selected]), this._selectorTarget === "external_panel" && (s.external_panels = [...this._selected]), this._ui.modes.__by_entity__[r][this._mode] = s, this._closeModal(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
  }
  /* ── Alarm actions ───────────────────────────────────────────────── */
  async _handleAction(r, i) {
    const o = this._dashboard.entries[Number(r)];
    if (!o?.entity_id || !this._hass) return;
    const s = this._hass.states[o.entity_id];
    if (!s || s.state === "unavailable") return;
    const u = {
      home: "alarm_arm_home",
      away: "alarm_arm_away",
      night: "alarm_arm_night",
      vacation: "alarm_arm_vacation",
      disarm: "alarm_disarm"
    }, d = {
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      vacation: this._t("mode_vacation")
    }, m = u[i];
    if (!m) return;
    if (this._hass?.user?.name || this._t("user_default"), i === "disarm") {
      const S = o.pin_configured === !0, b = o.user_pin_configured === !0, k = async (P) => {
        try {
          return await this._send("argus/perform_alarm_action", {
            action: "disarm",
            entry_id: o.entry_id,
            ...P ? { code: P } : {}
          }), setTimeout(() => {
            this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._load();
          }, 300), !0;
        } catch {
          const z = this.shadowRoot.getElementById("pin-error");
          return z && (z.textContent = "❌ PIN incorrecto o error al desarmar"), !1;
        }
      };
      S || b ? this._showPinModal(async (P) => await k(P)) : await k(null);
      return;
    }
    const f = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id, h = this._ui?.modes?.__by_entity__?.[f]?.[i] || this._ui?.modes?.[i] || {};
    if (h.require_closed) {
      const S = h.sensors || [], b = new Set(
        h.bypassed_sensors || h.bypassedSensors || []
      ), k = [];
      for (const P of S) {
        if (b.has(P)) continue;
        const L = this._hass.states[P]?.state;
        ["on", "open", "unlocked", "active", "motion", "recording"].includes(L) && k.push(this._hass.states[P]?.attributes?.friendly_name || P);
      }
      if (k.length > 0) {
        this._showArmBlockedAlert(k);
        return;
      }
    }
    try {
      await this._send("argus/perform_alarm_action", {
        action: m.replace("alarm_", ""),
        entry_id: o.entry_id
      });
      const S = d[i] || i;
      setTimeout(() => this._load(), 800);
    } catch (S) {
      const b = S?.message || (typeof S == "string" ? S : JSON.stringify(S));
      this._showArmBlockedAlert([], b), console.error("Argus action failed", S);
    }
  }
  _showArmBlockedAlert(r = [], i = "") {
    if (i) {
      alert(`🚨 ${this._t("action_failed")}

${i}`);
      return;
    }
    const o = r.map((s) => `  • ${s}`).join(`
`);
    alert(
      `🚨 ${this._t("cannot_arm")}

` + this._format("open_sensors_explain", { names: o })
    );
  }
  /* ── Bootstrap Render Methods ─────────────────────────────────────── */
  _renderInitializationError(r) {
    const i = this.shadowRoot.getElementById("bootstrap-overlay");
    i.style.display = "flex", i.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <img src="/api/argus_static/argus_logo.png" alt="Argus"
             style="height:72px;border-radius:18px;margin-bottom:16px">
        <h1>${this._escapeHtml(this._t("initialization_error_title"))}</h1>
        <p>${this._escapeHtml(this._t("initialization_error_desc"))}</p>
        <div style="font-size:11px;opacity:.55;margin-bottom:16px;word-break:break-word">
          ${this._escapeHtml(r?.message || "unknown error")}
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
    const r = this.shadowRoot.getElementById("bootstrap-overlay");
    r.style.display = "flex", r.innerHTML = `
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
    const r = this.shadowRoot.getElementById("hero-profile-container");
    if (!r) return;
    const i = this._currentProfile;
    if (!i) {
      r.style.display = "none", r.innerHTML = "";
      return;
    }
    r.style.display = "flex", r.style.position = "relative";
    let o = i.picture || null;
    if (!o && this._hass?.states) {
      const k = Object.values(this._hass.states).filter(
        (P) => P.entity_id?.startsWith("person.") && (P.attributes?.friendly_name?.toLowerCase() === i.name?.toLowerCase() || P.attributes?.user_id === i.ha_user_id)
      );
      if (k.length > 0) {
        const P = k[0].attributes?.entity_picture;
        P && (o = P);
      }
    }
    i.picture = o;
    const s = i.picture ? `<img id="hero-profile-avatar" class="user-avatar" src="${this._escapeHtml(i.picture)}" alt="${this._escapeHtml(i.name)}" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 3px 8px rgba(0,0,0,0.2); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);" />` : `<div id="hero-profile-avatar" class="user-avatar" style="width: 34px; height: 34px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">${this._escapeHtml(i.name.substring(0, 2).toUpperCase())}</div>`, u = this._manualLang || "auto", d = i.role === "admin" || i.permissions && i.permissions.change_pin, m = i.role === "admin" || i.permissions && i.permissions.change_master_pin, f = i.role === "admin" ? this._t("role_argus_admin_short") || "Admin" : this._t("role_argus_user_short") || "Estándar";
    r.innerHTML = `
      <div style="position: relative; display: flex; align-items: center; z-index: 10002;">
        <div class="hero-profile-pill glass liquid-glass" style="display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px;">
          ${s}
          <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
            <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(i.name)}</span>
            <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(f)}</span>
          </div>
          <span class="profile-chevron" style="font-size: 7.5px; opacity: 0.65; margin-left: 2px;">▼</span>
        </div>

        <!-- Dropdown Card -->
        <div id="profile-dropdown" class="hero-profile-dropdown" style="display: none; position: absolute; top: calc(100% + 12px); right: 0; flex-direction: column; width: 280px; z-index: 999999; padding: 16px; border-radius: 18px; box-shadow: 0 16px 32px rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); max-height: calc(100vh - 100px); overflow-y: auto;">
        <div style="display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 8px; width: 100%;">
          ${i.picture ? `<img src="${this._escapeHtml(i.picture)}" alt="${this._escapeHtml(i.name)}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;" />` : `<div class="user-avatar" style="width: 44px; height: 44px; border-radius: 50%; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;">${this._escapeHtml(i.name.substring(0, 2).toUpperCase())}</div>`}
          <div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0; align-items: flex-start;">
            <span style="font-size: 9.5px; opacity: 0.5; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;">${this._t("profile_is_yours") || this._t("active_profile") || "Perfil Activo"}</span>
            <span style="font-size: 14px; font-weight: 850; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; text-align: left;">${this._escapeHtml(i.name)}</span>
            <button id="btn-change-profile-picture" style="font-size: 10.5px; font-weight: 700; color: #30d158; text-decoration: none; display: flex; align-items: center; gap: 3px; margin-top: 3px; background: none; border: none; padding: 0; cursor: pointer;">
              👤 ${this._t("change_profile_picture") || "Ir a Personas de HA ↗"}
            </button>
          </div>
          <span class="user-badge ${i.role === "admin" ? "admin" : "user"}" style="font-size: 8.5px; padding: 3px 8px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.03em;">${this._escapeHtml(f)}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          <label style="font-size: 11px; font-weight: 700; opacity: 0.7; display: flex; align-items: center; gap: 5px;">${this._t("lang_selector_lbl") || "⚙️ Idioma / Language"}</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 36px; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${Ro.map((k) => `<option value="${k.code}" ${k.code === u ? "selected" : ""}>${k.flag} ${k.code === "auto" ? this._t("use_ha_language") || "Automático (HA)" : k.label}</option>`).join("")}
          </select>
        </div>

        <!-- PIN management section -->
        ${d || m ? `
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">${this._t("pin_management") || "🔑 Gestión de Pines"}</span>
          
          <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 2px;">
            ${d ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t("access_pin_lbl") || "Pin perfil Argus"}</span>
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t("change_btn") || "Cambiar"}</button>
                <button id="btn-dropdown-remove-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t("remove_btn") || "Quitar"}</button>
              </div>
            </div>
            ` : ""}
            
            ${m ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t("master_pin_lbl") || "Pin de Armado"}</span>
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t("change_btn") || "Cambiar"}</button>
                <button id="btn-dropdown-remove-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t("remove_btn") || "Quitar"}</button>
              </div>
            </div>
            ` : ""}
          </div>
        </div>
        ` : ""}

        <!-- Home Name Section -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; margin-top: 2px;">
          <div style="display: flex; flex-direction: column; min-width: 0; align-items: flex-start;">
            <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">🏡 ${this._t("home_name_lbl") || "Nombre de la Casa"}</span>
            <span id="dropdown-home-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 140px; margin-top: 1px;">${this._escapeHtml(this._homeName || "Mi Casa")}</span>
          </div>
          <button id="btn-dropdown-edit-home-name" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t("change_btn") || "Cambiar"}</button>
        </div>

        <!-- Switch user button -->
        <button id="btn-dropdown-switch-user" class="glass-control" style="width: 100%; min-height: 32px; padding: 6px; border-radius: 10px; font-size: 10.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; margin-top: 6px; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); color: var(--v2066-text);">
          ${this._t("switch_profile_btn") || "👤 Cambiar de Perfil"}
        </button>
      </div>
      </div>
    `;
    const h = r.querySelector(".hero-profile-pill"), S = r.querySelector("#profile-dropdown");
    if (h && S) {
      const k = (L) => {
        const z = r.closest(".hero");
        z && (z.style.zIndex = L ? "999999" : "9999");
        const C = r.closest(".wrap");
        C && (C.style.zIndex = L ? "999999" : "");
        const w = r.closest(".argus-widget") || r.closest(".react-grid-item") || r.closest(".panel");
        w && (w.style.zIndex = L ? "999999" : "");
      };
      h.addEventListener("click", (L) => {
        L.stopPropagation();
        const z = S.style.display === "flex";
        S.style.display = z ? "none" : "flex", k(!z);
      });
      const P = (L) => {
        (L.composedPath ? L.composedPath() : [L.target]).some((w) => w === r || w.closest && w.closest?.("#profile-dropdown")) || (S.style.display = "none", k(!1), document.removeEventListener("click", P, !0));
      };
      h.addEventListener("click", () => {
        setTimeout(() => {
          S.style.display === "flex" && document.addEventListener("click", P, !0);
        }, 10);
      });
    }
    const b = r.querySelector("#dropdown-lang-select");
    b && b.addEventListener("change", (k) => {
      this._setLanguage(k.target.value);
    }), r.querySelector("#btn-change-profile-picture")?.addEventListener("click", (k) => {
      k.stopPropagation(), S.style.display = "none";
      try {
        window.history.pushState(null, "", "/config/person"), window.dispatchEvent(new CustomEvent("location-changed"));
      } catch {
        window.location.href = "/config/person";
      }
    }), r.querySelector("#btn-dropdown-switch-user")?.addEventListener("click", (k) => {
      k.stopPropagation(), this._switchProfile();
    }), r.querySelector("#btn-dropdown-change-access-pin")?.addEventListener("click", (k) => {
      k.stopPropagation(), S.style.display = "none";
      const P = this.shadowRoot.getElementById("w-access");
      P && (P.scrollIntoView({ behavior: "smooth", block: "center" }), P.style.transition = "box-shadow 0.5s ease-in-out", P.style.boxShadow = "0 0 30px rgba(0, 122, 255, 0.6)", setTimeout(() => {
        P.style.boxShadow = "";
      }, 1500), this.shadowRoot.querySelectorAll("#users-list .user-card").forEach((z) => {
        if (z.textContent.includes(i.name)) {
          z.style.transition = "background-color 0.5s ease", z.style.backgroundColor = "rgba(0, 122, 255, 0.15)", setTimeout(() => {
            z.style.backgroundColor = "";
          }, 2e3);
          const C = z.querySelector("[data-user-pin]");
          C && C.focus();
        }
      }));
    }), r.querySelector("#btn-dropdown-remove-access-pin")?.addEventListener("click", (k) => {
      k.stopPropagation(), S.style.display = "none";
      const P = this.shadowRoot.getElementById("w-access");
      P && (P.scrollIntoView({ behavior: "smooth", block: "center" }), P.style.transition = "box-shadow 0.5s ease-in-out", P.style.boxShadow = "0 0 30px rgba(0, 122, 255, 0.6)", setTimeout(() => {
        P.style.boxShadow = "";
      }, 1500), this.shadowRoot.querySelectorAll("#users-list .user-card").forEach((z) => {
        if (z.textContent.includes(i.name)) {
          z.style.transition = "background-color 0.5s ease", z.style.backgroundColor = "rgba(255, 69, 58, 0.15)", setTimeout(() => {
            z.style.backgroundColor = "";
          }, 2e3);
          const C = z.querySelector("[data-user-pin]");
          C && C.focus();
        }
      }));
    }), r.querySelector("#btn-dropdown-change-master-pin")?.addEventListener("click", (k) => {
      k.stopPropagation(), S.style.display = "none";
      const P = this.shadowRoot.getElementById("w-access");
      if (P) {
        P.scrollIntoView({ behavior: "smooth", block: "center" }), P.style.transition = "box-shadow 0.5s ease-in-out", P.style.boxShadow = "0 0 30px rgba(255, 179, 0, 0.6)", setTimeout(() => {
          P.style.boxShadow = "";
        }, 1500);
        const L = this.shadowRoot.getElementById("new-pin-1");
        L && L.focus();
      }
    }), r.querySelector("#btn-dropdown-remove-master-pin")?.addEventListener("click", (k) => {
      k.stopPropagation(), S.style.display = "none";
      const P = this.shadowRoot.getElementById("w-access");
      if (P) {
        P.scrollIntoView({ behavior: "smooth", block: "center" }), P.style.transition = "box-shadow 0.5s ease-in-out", P.style.boxShadow = "0 0 30px rgba(255, 179, 0, 0.6)", setTimeout(() => {
          P.style.boxShadow = "";
        }, 1500);
        const L = this.shadowRoot.getElementById("current-pin");
        L && L.focus();
      }
    }), r.querySelector("#btn-dropdown-edit-home-name")?.addEventListener("click", (k) => {
      k.stopPropagation(), S.style.display = "none", this._editHomeName();
    });
  }
  async _switchProfile() {
    let r;
    try {
      r = await this._send("argus/bootstrap"), this._welcomeShownThisMount = !1, this._renderLoginScreen(r);
    } catch (i) {
      console.error("Switch profile bootstrap failed:", i);
    }
  }
  async _showChangePictureModal() {
    let r = [];
    try {
      r = ((await this._send("argus/get_ha_persons", {}))?.ha_persons ?? []).filter((m) => m.entity_id).map((m) => {
        const f = this._hass?.states?.[m.entity_id];
        return {
          name: m.name || m.entity_id,
          url: f?.attributes?.entity_picture || null
        };
      }).filter((m) => m.url);
    } catch {
    }
    const i = document.createElement("div");
    i.style.cssText = `
      position: fixed; inset: 0; z-index: 10100;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex; align-items: center; justify-content: center;
    `;
    const o = r.map((u, d) => `
      <div data-pic-url="${this._escapeHtml(u.url)}" data-pic-idx="${d}"
           style="display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; padding:10px; border-radius:12px; border:2px solid transparent; transition:border-color 0.15s;"
           class="ha-pic-option">
        <img src="${this._escapeHtml(u.url)}" alt="${this._escapeHtml(u.name)}"
             style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.15); box-shadow:0 4px 14px rgba(0,0,0,0.3);" />
        <span style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.7); max-width:72px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${this._escapeHtml(u.name)}</span>
      </div>
    `).join("");
    i.innerHTML = `
      <div style="background:rgba(30,32,48,0.97); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:24px; width:min(380px,90vw); color:#fff;">
        <h3 style="margin:0 0 4px; font-size:1.05rem; font-weight:800;">📸 ${this._escapeHtml(this._t("change_profile_picture") || "Cambiar imagen de perfil")}</h3>
        <p style="margin:0 0 16px; font-size:0.78rem; color:rgba(255,255,255,0.5);">${this._escapeHtml(this._t("change_picture_desc") || "Elige una foto de tus personas de HA o dirígete al perfil de HA para subir una nueva.")}</p>

        ${r.length ? `
          <div style="font-size:11px; font-weight:700; opacity:0.6; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">${this._escapeHtml(this._t("ha_persons_title") || "Personas de Home Assistant")}</div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
            ${o}
          </div>
        ` : `
          <p style="font-size:12px; color:rgba(255,255,255,0.45); margin-bottom:16px;">${this._escapeHtml(this._t("no_ha_persons_photo") || "No se encontraron personas con foto en HA. Abre HA para añadir una imagen a tu persona.")}</p>
        `}

        <div style="display:flex; gap:8px;">
          <a href="/config/profile" target="_top"
             style="flex:1; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.07); color:#fff; font-size:12px; font-weight:700; text-decoration:none; text-align:center;">
            ${this._escapeHtml(this._t("go_to_ha_profile") || "Ir al Perfil HA ↗")}
          </a>
          <button id="modal-pic-cancel"
                  style="flex:1; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.6); font-size:12px; font-weight:700; cursor:pointer;">
            ${this._escapeHtml(this._t("cancel") || "Cancelar")}
          </button>
        </div>

        <div id="pic-save-status" style="font-size:12px; margin-top:10px; min-height:16px; text-align:center;"></div>
      </div>
    `, this.shadowRoot.appendChild(i);
    const s = i.querySelector("#pic-save-status");
    i.querySelectorAll(".ha-pic-option").forEach((u) => {
      u.addEventListener("mouseenter", () => u.style.borderColor = "rgba(255,255,255,0.4)"), u.addEventListener("mouseleave", () => u.style.borderColor = "transparent"), u.addEventListener("click", async () => {
        const d = u.getAttribute("data-pic-url");
        if (d) {
          s.textContent = "⏳ Guardando...";
          try {
            await this._send("argus/save_ui", {
              profile_picture: d
            }), s.style.color = "#34c759", s.textContent = "✅ Imagen actualizada. Recarga para verla.", setTimeout(() => {
              i.remove(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderAutomations(), this._renderNotifications(), this._updateHeroProfileDisplay(), this._updateProfileBadge();
            }, 1200);
          } catch (m) {
            s.style.color = "#ff453a", s.textContent = "❌ " + (m.message || "Error al guardar");
          }
        }
      });
    }), i.querySelector("#modal-pic-cancel").addEventListener("click", () => i.remove()), i.addEventListener("click", (u) => {
      u.target === i && i.remove();
    });
  }
  _renderFirstRunScreen() {
    const r = this.shadowRoot.getElementById("bootstrap-overlay");
    if (r.style.display = "flex", this._hass?.user && this._hass.user.is_admin === !1) {
      r.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass">
          <h1>${this._t("first_run_blocked_title") || "Acceso denegado"}</h1>
          <p>${this._t("first_run_blocked_desc") || "Se requiere un administrador de Home Assistant para configurar Argus por primera vez."}</p>
        </div>
      `;
      return;
    }
    const i = this._hass?.user?.name || "Admin", o = this._getCurrentLangCode(), s = {
      es: ["Bienvenido a Argus Home Hub", "Protección inteligente para lo que más importa."],
      en: ["Welcome to Argus Home Hub", "Smart protection for what matters most."],
      fr: ["Bienvenue dans Argus Home Hub", "Une protection intelligente pour ce qui compte le plus."],
      pt: ["Bem-vindo ao Argus Home Hub", "Proteção inteligente para o que mais importa."],
      it: ["Benvenuto in Argus Home Hub", "Protezione intelligente per ciò che conta di più."],
      zh: ["欢迎使用 Argus Home Hub", "为重要事物提供智能保护。"],
      ru: ["Добро пожаловать в Argus Home Hub", "Умная защита самого важного."]
    }[o] || ["Welcome to Argus Home Hub", "Smart protection for what matters most."], u = () => {
      r.innerHTML = `
        <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:420px">
          <div class="argus-first-run-thank-icon">✓</div>
          <h1 style="margin-bottom:10px;font-weight:850">Gracias por usar Argus Home Hub</h1>
          <p style="margin:0">Tu sistema está listo y protegido.</p>
        </div>
      `, setTimeout(() => {
        r.style.display = "none", this._profileSelectedThisMount = !0, this._load();
      }, 1500);
    };
    r.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass argus-first-run-card" style="max-width:540px;width:92vw">
        <div class="argus-first-run-brand">
          <img class="argus-first-run-logo" src="/api/argus_static/argus_logo.png" alt="Logotipo oficial de Argus">
          <div>
            <h1>${this._escapeHtml(s[0])}</h1>
            <p>${this._escapeHtml(s[1])}</p>
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
            ${this._escapeHtml(this._t("first_run_pin_expl") || "El Pin perfil Argus abre Argus. El Pin de Armado controla el armado y desarmado.")}
          </p>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t("setup_access_pin") || "Pin perfil Argus al panel Argus (Opcional)")}</label>
          <div style="display:flex;gap:10px;margin-bottom:15px">
            <input type="password" id="setup-access-pin" placeholder="PIN (4-12)" style="flex:1" />
            <button id="skip-access-pin" class="btn-cancel" style="width:auto;padding:0 12px;font-size:11px">${this._escapeHtml(this._t("first_run_skip") || "Omitir")}</button>
          </div>

          <label style="display:block;text-align:left;font-size:12px;opacity:0.8;margin-bottom:4px">${this._escapeHtml(this._t("setup_master_pin") || "Pin de Armado para armar/desarmar (Opcional)")}</label>
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
    const d = this.shadowRoot.getElementById("tab-setup-fresh"), m = this.shadowRoot.getElementById("tab-setup-restore"), f = this.shadowRoot.getElementById("view-setup-fresh"), h = this.shadowRoot.getElementById("view-setup-restore");
    d?.addEventListener("click", () => {
      d.style.background = "rgba(255,255,255,0.15)", d.style.color = "#fff", m.style.background = "transparent", m.style.color = "rgba(255,255,255,0.6)", f.style.display = "block", h.style.display = "none";
    }), m?.addEventListener("click", () => {
      m.style.background = "rgba(255,255,255,0.15)", m.style.color = "#fff", d.style.background = "transparent", d.style.color = "rgba(255,255,255,0.6)", h.style.display = "block", f.style.display = "none";
    }), this.shadowRoot.getElementById("skip-access-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-access-pin").value = "";
    }), this.shadowRoot.getElementById("skip-master-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-master-pin").value = "";
    }), this.shadowRoot.getElementById("btn-complete-setup")?.addEventListener("click", async () => {
      const k = this.shadowRoot.getElementById("setup-admin-name").value || i, P = this.shadowRoot.getElementById("setup-master-pin").value || void 0, L = this.shadowRoot.getElementById("setup-access-pin").value || void 0;
      try {
        await this._send("argus/complete_first_run", { admin_name: k, master_pin: P, access_pin: L }), u();
      } catch (z) {
        alert("Setup failed: " + z.message);
      }
    });
    const S = this.shadowRoot.getElementById("setup-restore-file"), b = this.shadowRoot.getElementById("restore-status");
    this.shadowRoot.getElementById("btn-trigger-restore")?.addEventListener("click", () => {
      S?.click();
    }), S?.addEventListener("change", (k) => {
      const P = k.target.files?.[0];
      if (!P) return;
      b && (b.textContent = "Procesando copia de seguridad...");
      const L = new FileReader();
      L.onload = async (z) => {
        try {
          let C = JSON.parse(z.target.result);
          if (C?.format === "argus-encrypted-backup") {
            const w = await this._showArgusInputModal({
              title: "Copia de seguridad cifrada",
              label: "Introduce la contraseña del backup:",
              type: "password"
            });
            if (!w) {
              b && (b.textContent = "Restauración cancelada.");
              return;
            }
            try {
              const _ = this._base64ToBytes(C.salt), x = this._base64ToBytes(C.iv), g = await this._backupKey(w, _, ["decrypt"]), v = await crypto.subtle.decrypt({ name: "AES-GCM", iv: x }, g, this._base64ToBytes(C.data));
              C = JSON.parse(new TextDecoder().decode(v));
            } catch {
              throw new Error("Contraseña de copia de seguridad incorrecta.");
            }
          }
          if (typeof C != "object" || C === null)
            throw new Error(this._t("invalid_config"));
          await this._send("argus/restore_config", { config: C }), b && (b.textContent = "✅ Copia de seguridad restaurada con éxito."), u();
        } catch (C) {
          b && (b.textContent = "❌ Error al restaurar: " + (C.message || C));
        }
      }, L.onerror = () => {
        b && (b.textContent = "❌ Error al leer el archivo.");
      }, L.readAsText(P);
    });
  }
  _renderLegacyClaimScreen() {
    const r = this.shadowRoot.getElementById("bootstrap-overlay");
    r.style.display = "flex", r.innerHTML = `
      <div class="argus-bootstrap-card liquid-glass">
        <h1>${this._t("claim_title") || "Argus Security Update"}</h1>
        <p>${this._t("claim_desc") || "Your installation needs an administrator to claim access."}</p>
        <button id="btn-claim-admin" class="btn-claim">${this._t("claim_btn") || "Claim Administration"}</button>
      </div>
    `, this.shadowRoot.getElementById("btn-claim-admin").addEventListener("click", async () => {
      try {
        await this._send("argus/claim_legacy_administration"), r.style.display = "none", this._profileSelectedThisMount = !0, this._load();
      } catch (i) {
        alert("Claim failed: " + i.message);
      }
    });
  }
  async _renderLoginScreen(r) {
    if (!this._isRenderingLogin && !(this.hasAttribute("compact") || this.classList.contains("argus-compact") || this._cardConfig?.compact)) {
      this._isRenderingLogin = !0;
      try {
        const i = (b) => this._t(b);
        let o = [];
        try {
          const b = await this._send("argus/get_profiles", {});
          o = b?.profiles ?? b?.users ?? r?.users ?? [];
        } catch {
          o = this._config?.profiles ?? r?.users ?? [];
        }
        if (!o.length) return;
        o = o.map((b) => ({
          ...b,
          display_name: b.display_name || b.name,
          picture: b.picture || null
        }));
        const s = this.shadowRoot.getElementById("bootstrap-overlay");
        s && (s.style.display = "none"), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen").forEach((b) => b.remove());
        const u = document.createElement("div");
        u.className = "argus-profile-overlay";
        const d = `
      <div class="argus-profile-header">
        <h2>${this._escapeHtml(i("select_profile_title"))}</h2>
        <p>${this._escapeHtml(i("select_profile_subtitle"))}</p>
      </div>
    `, f = `
      <div class="argus-profile-grid">
        ${o.map((b) => {
          const k = b.is_own_profile === !0, P = b.access_pin_configured === !0, L = b.role === "admin" ? i("role_argus_admin") : i("role_argus_standard"), z = b.picture ? `<img src="${this._escapeHtml(b.picture)}" alt="" />` : this._escapeHtml(b.name.substring(0, 2).toUpperCase()), C = P ? '<div class="lock-badge">🔒</div>' : "";
          return `
        <div class="argus-profile-item" tabindex="0"
             data-user-id="${this._escapeHtml(b.id)}"
             data-is-own="${k ? "true" : "false"}"
             data-requires-pin="${P ? "true" : "false"}">
          
          <div class="argus-profile-circle">
            ${z}
            ${C}
          </div>
          <div class="argus-profile-label">
            <div class="p-name">${this._escapeHtml(b.name)}</div>
            <div class="p-role">${this._escapeHtml(L)}</div>
          </div>
        </div>
      `;
        }).join("")}
      </div>
    `, h = `
      <button id="argus-exit-ha" style="
        position: absolute; bottom: 40px;
        background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff;
        padding: 12px 24px; border-radius: 20px; color: #fff; cursor: pointer;
        font-size: 0.9rem; font-weight: 600; transition: background 0.2s;
      ">
        ← ${this._escapeHtml(i("exit_to_ha"))}
      </button>
    `;
        u.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        ${d}
        ${f}
      </div>
      ${h}
    `, this.shadowRoot.appendChild(u), u.querySelector("#argus-exit-ha").addEventListener("click", () => {
          window.location.assign("/");
        }), u.querySelectorAll(".argus-profile-item").forEach((b) => {
          b.addEventListener("click", async () => {
            if (u.dataset.processing) return;
            u.dataset.processing = "1";
            const k = b.getAttribute("data-user-id"), P = b.getAttribute("data-is-own") === "true", L = b.getAttribute("data-requires-pin") === "true", z = o.find((C) => C.id === k);
            if (P)
              if (L)
                u.remove(), this._showTvOSPinPrompt(z);
              else
                try {
                  await this._send("argus/select_profile", { argus_user_id: k }), u.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(z);
                } catch (C) {
                  u.dataset.processing = "", alert(C.message || "Error seleccionando perfil");
                }
            else {
              if (!L) {
                const C = b;
                C.style.animation = "none", C.offsetHeight, C.style.animation = "argus-shake 0.3s ease", u.dataset.processing = "";
                return;
              }
              u.remove(), this._showTvOSPinPrompt(z);
            }
          }), b.addEventListener("keydown", (k) => {
            (k.key === "Enter" || k.key === " ") && b.dispatchEvent(new Event("click"));
          });
        });
      } finally {
        this._isRenderingLogin = !1;
      }
    }
  }
  async _showTvOSPinPrompt(r) {
    const i = (h) => this._t(h), o = document.createElement("div");
    o.className = "argus-pin-prompt", o.innerHTML = `
      <div class="argus-pin-card">
        <h3>${this._escapeHtml(i("profile_needs_pin"))}</h3>
        <div class="pin-sub">Ingresa el PIN de ${this._escapeHtml(r.name)}</div>
        
        <input type="password" id="pin-input" class="argus-pin-input" readonly
               placeholder="••••" inputmode="numeric" />
               
        <div class="argus-numpad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((h) => `<button data-digit="${h}">${h}</button>`).join("")}
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
    `, this.shadowRoot.appendChild(o);
    const s = o.querySelector("#pin-input"), u = o.querySelector("#pin-error"), d = o.querySelector(".argus-pin-card"), m = o.querySelector(".argus-numpad");
    m.querySelectorAll("[data-digit]").forEach((h) => {
      const S = h.getAttribute("data-digit");
      h.addEventListener("click", () => {
        s.value.length < 8 && (s.value += S);
      });
    }), m.querySelector("#pin-del").addEventListener("click", () => {
      s.value = s.value.slice(0, -1);
    }), o.querySelector("#pin-enter").addEventListener("click", () => f()), o.querySelector("#pin-cancel").addEventListener("click", () => {
      o.remove(), this._renderLoginScreen({ users: this._config?.profiles || [] });
    });
    const f = async () => {
      if (!o.dataset.processing) {
        if (o.dataset.processing = "1", !s.value) {
          o.dataset.processing = "";
          return;
        }
        try {
          await this._send("argus/verify_access_pin", {
            argus_user_id: r.id,
            pin: s.value
          }), o.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(r);
        } catch (h) {
          o.dataset.processing = "", u.textContent = h.message || i("invalid_pin_msg"), d.style.animation = "none", d.offsetHeight, d.style.animation = "argus-shake 0.3s ease", s.value = "";
        }
      }
    };
    s.addEventListener("keydown", (h) => {
      h.key === "Enter" && f();
    });
  }
  async _runProfileWelcomeAnimation(r) {
    this._currentProfile = r, this._updateHeroProfileDisplay();
    const i = this.shadowRoot.getElementById("hero-profile-avatar") || this.shadowRoot.querySelector("#hero-profile-container .user-avatar") || this.shadowRoot.querySelector("#hero-profile-container img") || this.shadowRoot.querySelector("#hero-profile-container .hero-profile-pill");
    i && (i.style.opacity = "0", i.style.transition = "opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"), this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready");
    const o = document.createElement("div");
    o.className = "argus-welcome-screen active-anim", o.style.position = "fixed", o.style.inset = "0", o.style.background = "rgba(0,0,0,0.88)", o.style.display = "flex", o.style.flexDirection = "column", o.style.alignItems = "center", o.style.justifyContent = "center", o.style.zIndex = "10000", o.style.pointerEvents = "none";
    const s = r.picture ? `<img src="${this._escapeHtml(r.picture)}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : this._escapeHtml(r.name.substring(0, 2).toUpperCase());
    o.innerHTML = `
      <div class="argus-welcome-avatar" id="welcome-avatar-flying">
        ${s}
      </div>
      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t("welcome_greeting") || "Bienvenido,")}</p>
        <h1 class="wname">${this._escapeHtml(r.display_name || r.name)}</h1>
      </div>
    `, this.shadowRoot.appendChild(o), await new Promise((f) => requestAnimationFrame(f)), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-pin-prompt").forEach((f) => f.remove());
    let u = Promise.resolve();
    this._dashboardLoading || (this._dashboardLoading = !0, u = this._load().catch((f) => console.error("Load error during animation:", f)).finally(() => {
      this._dashboardLoading = !1;
    }));
    const d = o.querySelector("#welcome-avatar-flying"), m = o.querySelector("#welcome-text-anim");
    if (d && m) {
      d.style.transform = "scale(0.8)", d.style.opacity = "0", m.style.opacity = "0", m.style.transform = "translateY(15px)", await new Promise((z) => requestAnimationFrame(z)), d.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease", d.style.transform = "scale(1)", d.style.opacity = "1", m.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.5s ease 0.15s", m.style.transform = "translateY(0)", m.style.opacity = "1", await new Promise((z) => setTimeout(z, 1300)), await u, m.style.transition = "opacity 0.25s ease", m.style.opacity = "0";
      const f = d.getBoundingClientRect(), h = this.shadowRoot.getElementById("hero-profile-avatar") || this.shadowRoot.querySelector("#hero-profile-container .user-avatar") || this.shadowRoot.querySelector("#hero-profile-container img") || this.shadowRoot.querySelector("#hero-profile-container .hero-profile-pill");
      let S = window.innerWidth / 2, b = 60, k = 0.35;
      if (h) {
        const z = h.getBoundingClientRect();
        z.width > 0 && z.height > 0 && (S = z.left + z.width / 2, b = z.top + z.height / 2, k = Math.max(0.2, z.width / f.width));
      }
      const P = S - (f.left + f.width / 2), L = b - (f.top + f.height / 2);
      d.style.transition = "transform 0.65s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 0.35s ease 0.45s", d.style.transform = `translate(${P}px, ${L}px) scale(${k})`, o.style.transition = "background-color 0.55s ease 0.1s", o.style.backgroundColor = "transparent", await new Promise((z) => setTimeout(z, 650)), h && (h.style.opacity = "1", h.style.transform = "scale(1.1)", setTimeout(() => {
        h && (h.style.transform = "scale(1)");
      }, 180));
    }
    await new Promise((f) => setTimeout(f, 120)), await u, this._nukeAllLoginOverlays();
  }
  _nukeAllLoginOverlays() {
    this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen, .argus-pin-prompt").forEach((i) => {
      i.style.transition = "none", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none", i.style.opacity = "0", i.style.display = "none", i.remove();
    });
    const r = this.shadowRoot?.getElementById("bootstrap-overlay");
    r && (r.style.backdropFilter = "none", r.style.webkitBackdropFilter = "none", r.style.display = "none", r.style.opacity = "0", r.style.pointerEvents = "none");
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
    const r = this.shadowRoot.getElementById("widget-grid");
    if (!r) return;
    const i = Array.from(r.children).filter(
      (o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")
    );
    i.forEach((o) => {
      const s = o.id.replace("w-", "");
      if (!o.querySelector(".panel-edit-overlay")) {
        const u = document.createElement("div");
        u.className = "panel-edit-overlay";
        const d = document.createElement("div");
        d.className = "widget-controls";
        const m = document.createElement("div");
        m.className = "widget-controls-title";
        const f = o.querySelector("h2")?.textContent;
        m.textContent = f ? `Widget: ${f}` : `Widget: ${s.toUpperCase()}`, d.appendChild(m);
        const h = document.createElement("div");
        h.className = "widget-drag-handle", h.innerHTML = "⋮⋮ Arrastrar", h.title = "Arrastrar para mover";
        const S = document.createElement("div");
        S.className = "widget-sizes", ["S", "M", "L", "XL"].forEach((k) => {
          const P = document.createElement("button");
          P.className = "widget-size-btn", P.textContent = k, P.dataset.size = k, P.addEventListener("click", (L) => {
            L.stopPropagation(), L.preventDefault(), this._changeWidgetSize(s, k);
          }), S.appendChild(P);
        });
        const b = document.createElement("button");
        b.className = "widget-toggle-btn", b.textContent = "Ocultar", b.addEventListener("click", (k) => {
          k.stopPropagation(), k.preventDefault(), this._toggleWidgetVisibility(s);
        }), d.appendChild(h), d.appendChild(S), d.appendChild(b), u.appendChild(d), o.appendChild(u);
      }
    }), this._renderWidgetLayout(), this._bindWidgetDragEvents(i);
  }
  _renderWidgetLayout() {
    const r = this.shadowRoot.getElementById("widget-grid");
    if (!r) return;
    const i = new Map((this._widgetConfig || []).map((s, u) => [s.id, { ...s, idx: u }])), o = Array.from(r.children).filter(
      (s) => s.classList.contains("panel") && !s.classList.contains("dashboard-instances")
    );
    o.sort((s, u) => {
      const d = i.get(s.id.replace("w-", "")) || { idx: 99 }, m = i.get(u.id.replace("w-", "")) || { idx: 99 };
      return d.idx - m.idx;
    }), o.forEach((s) => {
      r.appendChild(s);
      const u = s.id.replace("w-", ""), d = i.get(u);
      if (d) {
        s.setAttribute("data-size", d.size), s.style.display = d.hidden ? "none" : "";
        const m = s.querySelector(".panel-edit-overlay");
        if (m) {
          m.querySelectorAll(".widget-size-btn").forEach((h) => {
            h.classList.toggle("active", h.dataset.size === d.size);
          });
          const f = m.querySelector(".widget-toggle-btn");
          f && (f.textContent = d.hidden ? "Mostrar" : "Ocultar", f.style.background = d.hidden ? "rgba(52,199,89,.85)" : "rgba(220,38,38,.85)");
        }
      }
    }), r.classList.toggle("editing", !!this._widgetEditing);
  }
  _bindWidgetDragEvents(r) {
    const i = this.shadowRoot.getElementById("widget-grid");
    if (!i) return;
    (r || Array.from(i.children).filter(
      (s) => s.classList.contains("panel") && !s.classList.contains("dashboard-instances")
    )).forEach((s) => {
      s._dragBound || (s._dragBound = !0, s.addEventListener("dragstart", (u) => {
        if (!this._widgetEditing) {
          u.preventDefault();
          return;
        }
        s.classList.add("dragging"), u.dataTransfer.setData("text/plain", s.id), u.dataTransfer.effectAllowed = "move";
      }), s.addEventListener("dragend", () => {
        s.classList.remove("dragging"), this._saveWidgetLayout();
      }), s.addEventListener("dragover", (u) => {
        if (!this._widgetEditing) return;
        u.preventDefault();
        const d = i.querySelector(".dragging");
        if (!d || d === s) return;
        const m = s.getBoundingClientRect();
        u.clientY - m.top > m.height / 2 ? s.after(d) : s.before(d);
      }));
    });
  }
  _saveWidgetLayout() {
    const r = this.shadowRoot.getElementById("widget-grid");
    if (!r) return;
    const i = Array.from(r.children).filter(
      (o) => o.classList.contains("panel") && !o.classList.contains("dashboard-instances")
    );
    this._widgetConfig = i.map((o) => ({
      id: o.id.replace("w-", ""),
      size: o.getAttribute("data-size") || "M",
      hidden: o.style.display === "none"
    }));
    try {
      localStorage.setItem("argus-widgets-v1", JSON.stringify(this._widgetConfig));
    } catch {
    }
  }
  _toggleWidgetEditing() {
    this._widgetEditing = !this._widgetEditing, this.shadowRoot.getElementById("widget-grid") && (this._initWidgetGrid(), this._renderWidgetLayout()), this._applyTranslations();
  }
  _changeWidgetSize(r, i) {
    const o = (this._widgetConfig || []).find((s) => s.id === r);
    o && (o.size = i, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
  _toggleWidgetVisibility(r) {
    const i = (this._widgetConfig || []).find((o) => o.id === r);
    i && (i.hidden = !i.hidden, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
}
customElements.define("argus-panel-v2018", Du);
try {
  customElements.get("argus-panel") || customElements.define("argus-panel", Du);
} catch {
}
const Hu = "2.2.84";
console.info(
  `%c🛡️ ARGUS ALARM CARD %c v${Hu} `,
  "color:white;background:#0a1628;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;",
  "color:#0a1628;background:#38bdf8;font-weight:700;padding:4px 8px;border-radius:0 4px 4px 0;"
);
function Ld(c) {
  if (!c?.states) return null;
  const r = Object.values(c.states);
  return (r.find(
    (o) => o.entity_id?.startsWith("alarm_control_panel.") && (o.attributes?.argus_version || o.attributes?.argus_entry_id || o.entity_id.includes("argus"))
  ) || r.find((o) => o.entity_id?.startsWith("alarm_control_panel.")))?.entity_id || null;
}
const Od = {
  es: { title: "Seguridad", home: "EN CASA", away: "AUSENTE", night: "NOCHE", vacation: "VACACIONES", disarm: "DESARMAR", pin: "INTRODUCIR PIN", bad: "PIN incorrecto", unknown: "Ubicación no disponible" },
  en: { title: "Security", home: "HOME", away: "AWAY", night: "NIGHT", vacation: "VACATION", disarm: "DISARM", pin: "ENTER PIN", bad: "Incorrect PIN", unknown: "Location unavailable" },
  fr: { title: "Sécurité", home: "MAISON", away: "ABSENT", night: "NUIT", vacation: "VACANCES", disarm: "DÉSARMER", pin: "SAISIR LE PIN", bad: "PIN incorrect", unknown: "Emplacement indisponible" },
  pt: { title: "Segurança", home: "EM CASA", away: "AUSENTE", night: "NOITE", vacation: "FÉRIAS", disarm: "DESARMAR", pin: "DIGITE O PIN", bad: "PIN incorreto", unknown: "Local indisponível" },
  it: { title: "Sicurezza", home: "CASA", away: "ASSENTE", night: "NOTTE", vacation: "VACANZA", disarm: "DISARMA", pin: "INSERISCI PIN", bad: "PIN errato", unknown: "Posizione non disponibile" },
  zh: { title: "安全", home: "在家", away: "外出", night: "夜间", vacation: "度假", disarm: "撤防", pin: "输入 PIN", bad: "PIN 错误", unknown: "位置不可用" },
  "zh-Hant": { title: "安全", home: "在家", away: "離家", night: "夜間", vacation: "度假", disarm: "撤防", pin: "輸入 PIN", bad: "PIN 錯誤", unknown: "位置不可用" },
  ru: { title: "Безопасность", home: "ДОМА", away: "УШЁЛ", night: "НОЧЬ", vacation: "ОТПУСК", disarm: "СНЯТЬ", pin: "ВВЕДИТЕ PIN", bad: "Неверный PIN", unknown: "Местоположение недоступно" },
  hi: { title: "सुरक्षा", home: "घर पर", away: "बाहर", night: "रात", vacation: "छुट्टी", disarm: "डिसआर्म", pin: "पिन दर्ज करें", bad: "गलत पिन", unknown: "स्थान अनुपलब्ध" },
  ar: { title: "الأمان", home: "في المنزل", away: "بالخارج", night: "ليلي", vacation: "إجازة", disarm: "تعطيل", pin: "أدخل رمز PIN", bad: "رمز PIN خاطئ", unknown: "الموقع غير متاح" },
  ko: { title: "보안", home: "재실", away: "외출", night: "야간", vacation: "휴가", disarm: "해제", pin: "PIN 입력", bad: "잘못된 PIN", unknown: "위치 사용 불가" },
  ja: { title: "セキュリティ", home: "在宅", away: "外出", night: "夜間", vacation: "休暇", disarm: "解除", pin: "PINを入力", bad: "PINが正しくありません", unknown: "位置情報利用不可" },
  uk: { title: "Безпека", home: "ВДОМА", away: "НЕМАЄ ВДОМА", night: "НІЧ", vacation: "ВІДПУСТКА", disarm: "ЗНЯТИ", pin: "ВВЕДІТЬ PIN", bad: "Невірний PIN", unknown: "Розташування недоступне" }
}, bn = (c) => String(c ?? "").replace(/[&<>'"]/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[r]);
class Gm extends HTMLElement {
  setConfig(r) {
    this._config = r;
  }
  set hass(r) {
    this._hass = r, this._render();
  }
  _render() {
    if (!this._hass) return;
    const r = this._config?.entity || "", i = this._config?.mode || "compact", o = Object.keys(this._hass.states || {}).filter((s) => s.startsWith("alarm_control_panel."));
    this.innerHTML = `
      <style>
        .argus-editor { padding: 16px; display: grid; gap: 14px; font-family: 'Outfit', Inter, system-ui, sans-serif; }
        .argus-editor label { font-size: 13px; font-weight: 700; color: var(--primary-text-color); display: grid; gap: 5px; }
        .argus-editor select, .argus-editor input { padding: 10px 12px; border-radius: 12px; border: 1px solid var(--divider-color, rgba(255,255,255,.15)); background: var(--card-background-color, rgba(0,0,0,.2)); color: var(--primary-text-color); font-size: 14px; width: 100%; box-sizing: border-box; }
        .argus-editor .hint { font-size: 11px; opacity: 0.7; font-weight: 500; }
        .argus-editor .opt-grp { border-left: 3px solid #38bdf8; padding-left: 10px; margin-top: 4px; }
      </style>
      <div class="argus-editor">
        <label>
          Entidad de Alarma Argus
          <select id="entity-sel">
            ${o.map((s) => `<option value="${s}" ${s === r ? "selected" : ""}>${s}</option>`).join("")}
          </select>
          <span class="hint">Detectada automáticamente. Solo cámbiala si tienes varias alarmas.</span>
        </label>
        <label>
          Diseño / Modo de Vista
          <select id="mode-sel">
            <option value="compact" ${i === "compact" ? "selected" : ""}>✨ Instancia Activa (Consola Liquid Glass · Recomendado)</option>
            <option value="panel" ${i === "panel" ? "selected" : ""}>📊 Panel Completo (Dashboard, widgets e historial)</option>
            <option value="basic" ${i === "basic" ? "selected" : ""}>🌤️ Básico (Tarjeta clásica con clima animado)</option>
          </select>
          <div class="opt-grp hint">
            ${i === "compact" ? "Muestra la consola de seguridad de Instancias Activas con el escudo animado, modos iluminados, slide-to-disarm, slide-to-sos y sensores." : i === "panel" ? "Muestra todo el panel de control de Argus con su cuadrícula de widgets e historial de eventos." : "Muestra la tarjeta de alarma ligera con escena de clima y teclado PIN."}
          </div>
        </label>
        <label>
          Título de la Tarjeta (opcional)
          <input id="title-input" type="text" placeholder="Argus Security" value="${this._config?.title || ""}"/>
        </label>
      </div>`, this.querySelector("#entity-sel").addEventListener("change", (s) => this._fire({ entity: s.target.value })), this.querySelector("#mode-sel").addEventListener("change", (s) => this._fire({ mode: s.target.value })), this.querySelector("#title-input").addEventListener("change", (s) => this._fire({ title: s.target.value }));
  }
  _fire(r) {
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: { ...this._config, ...r } },
      bubbles: !0,
      composed: !0
    }));
  }
}
customElements.define("argus-panel-card-editor", Gm);
class Mu extends HTMLElement {
  static getStubConfig(r) {
    return { entity: Ld(r) || "alarm_control_panel.argus", mode: "compact", title: "Argus Security" };
  }
  static getConfigElement() {
    return document.createElement("argus-panel-card-editor");
  }
  setConfig(r) {
    this._config = {
      mode: "compact",
      title: "Argus Security",
      ...r
    }, this._panelMounted = !1, this._fullscreen = !1, this._busy = !1, this._showKeypad = !1, this._enteredPin = "", this._pinError = !1, this._ensureStructure();
  }
  _ensureStructure() {
    if (this._structureReady) return;
    this._structureReady = !0, this.style.display = "block";
    const r = this.attachShadow({ mode: "open" });
    r.innerHTML = `
      <style>
        :host { display: block; width: 100%; }
        ha-card {
          border-radius: 24px;
          background: transparent !important;
          border: none !important;
          color: #fff;
          position: relative;
          --ha-card-border-radius: 24px;
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: visible !important;
        }
        .argus-panel-host {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          width: 100%;
          min-height: fit-content;
          overflow: visible !important;
        }
        /* Fullscreen mode */
        :host(.argus-fullscreen) ha-card {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9999 !important;
          border-radius: 0 !important;
          width: 100vw !important;
          height: 100dvh !important;
          max-width: 100vw !important;
          max-height: 100dvh !important;
          overflow: auto !important;
        }
        :host(.argus-fullscreen) .argus-panel-host {
          min-height: 100dvh;
          height: 100dvh;
          overflow: auto;
        }
        .argus-fs-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 10000;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.20);
          background: rgba(8,16,30,0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: rgba(255,255,255,0.80);
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
        }
        .argus-fs-btn:hover {
          background: rgba(20,40,70,0.92);
          transform: scale(1.08);
        }
        @media (max-width: 600px) {
          .argus-panel-host { min-height: 340px; }
        }
      </style>
      <ha-card>
        <button class="argus-fs-btn" id="fs-btn" title="Pantalla completa" aria-label="Pantalla completa">⛶</button>
        <div class="argus-panel-host" id="panel-host"></div>
      </ha-card>`, this._fsBtn = r.getElementById("fs-btn"), this._panelHost = r.getElementById("panel-host"), this._fsBtn.addEventListener("click", () => this._toggleFullscreen()), document.addEventListener("keydown", (i) => {
      i.key === "Escape" && this._fullscreen && this._exitFullscreen();
    });
  }
  set hass(r) {
    if (this._hass = r, !this._config.entity || this._config.entity === "alarm_control_panel.argus") {
      const i = Ld(r);
      i && (this._config.entity = i);
    }
    if (this._config.mode === "basic")
      this._renderBasicCard();
    else if (this._mountPanel(), this._panelEl)
      try {
        this._panelEl.hass = r;
      } catch {
      }
  }
  _mountPanel() {
    if (!(this._panelMounted || !this._panelHost || !(customElements.get("argus-panel-v2018") || !1))) {
      this._panelMounted = !0, this._panelHost.innerHTML = "", this._panelEl = document.createElement("argus-panel-v2018"), this._config.mode !== "panel" && (this._panelEl.setAttribute("compact", ""), this._panelEl.classList.add("argus-compact"));
      try {
        this._panelEl.setConfig({
          entity: this._config.entity,
          title: this._config.title,
          compact: this._config.mode !== "panel"
        });
      } catch {
      }
      if (this._panelHost.appendChild(this._panelEl), this._hass)
        try {
          this._panelEl.hass = this._hass;
        } catch {
        }
    }
  }
  _renderBasicCard() {
    if (!this._panelHost || !this._hass) return;
    this._panelMounted = !1;
    const r = String(this._hass?.language || "en").split("-")[0], i = Od[r] || Od.en, s = this._hass.states[this._config.entity]?.state || "unavailable", u = Object.values(this._hass?.states || {}), d = this._config.weather_entity ? this._hass.states[this._config.weather_entity] : u.find((v) => v.entity_id?.startsWith("weather.") && !["unknown", "unavailable"].includes(v.state)), m = Number(d?.attributes?.temperature), f = {
      state: String(d?.state || "unavailable").toLowerCase(),
      temp: Number.isFinite(m) ? Math.round(m) : "—",
      unit: Number.isFinite(m) ? String(d?.attributes?.temperature_unit || "") : "",
      night: this._hass?.states?.["sun.sun"]?.state === "below_horizon"
    }, h = this._hass?.config || {}, S = [];
    h.location_name && !/^(home|casa|hogar)$/i.test(h.location_name) && S.push(h.location_name), h.country && S.push(h.country);
    const b = S.length ? S.join(", ") : i.unknown, k = this._config.title || i.title, P = f.state, L = /thunder|storm|lightning/.test(P), z = /rain|pouring|drizzle|shower/.test(P), C = /snow/.test(P), w = /fog|mist|hazy/.test(P), _ = /cloud|overcast/.test(P), x = [f.night ? "night" : "day", L ? "storm" : z ? "rain" : C ? "snow" : w ? "fog" : _ ? "cloud" : "clear"].join(" "), g = new Intl.DateTimeFormat(this._hass.language || void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date());
    this._panelHost.innerHTML = `
      <style>
        .basic-card{position:relative;min-height:330px;isolation:isolate;overflow:hidden;font-family:'Outfit',Inter,system-ui,sans-serif}
        .basic-scene{position:absolute;inset:0;z-index:-3;overflow:hidden;background:linear-gradient(165deg,#2c86c7,#8fc7dc 62%,#d7c7aa);transition:background 1.5s ease}
        .basic-scene.night{background:linear-gradient(180deg,#020513 0%,#0a1130 50%,#152248 100%)!important}
        .basic-vignette{position:absolute;inset:0;z-index:-2;background:radial-gradient(circle at 68% 42%,transparent 15%,rgba(2,6,15,.1) 55%,rgba(0,0,0,.58) 100%)}
        .basic-hud{display:flex;justify-content:space-between;gap:16px;padding:20px 22px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 2px 12px #000}
        .basic-weather{font-size:18px;letter-spacing:0;text-transform:none}
        .basic-layout{display:grid;grid-template-columns:minmax(145px,185px) 1fr;gap:18px;align-items:center;padding:8px 22px 24px}
        .basic-modes{display:grid;gap:8px}
        .basic-mode{appearance:none;border:1px solid rgba(255,255,255,.17);border-radius:16px;background:rgba(8,16,31,.26);backdrop-filter:blur(20px) saturate(1.25);color:#fff;padding:12px 13px;text-align:left;font-weight:850;letter-spacing:.03em;cursor:pointer;transition:transform .25s,background .25s,box-shadow .25s}
        .basic-mode:hover{transform:translateX(5px) scale(1.02);background:rgba(255,255,255,.17);box-shadow:0 12px 26px rgba(0,0,0,.2)}
        .basic-mode.active{background:linear-gradient(135deg,rgba(59,178,255,.42),rgba(114,75,255,.3));border-color:rgba(255,255,255,.42);box-shadow:inset 0 1px rgba(255,255,255,.3),0 10px 34px rgba(20,97,184,.26)}
        .basic-shield{display:grid;place-items:center;font-size:96px;filter:drop-shadow(0 22px 34px rgba(0,0,0,.46));animation:basicFloat 5s ease-in-out infinite}
        @keyframes basicFloat{50%{transform:translateY(-10px) scale(1.025)}}
        .basic-title{position:absolute;right:22px;bottom:18px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;font-size:10px;opacity:.7}
      </style>
      <div class="basic-card">
        <div class="basic-scene ${bn(x)}"></div>
        <div class="basic-vignette"></div>
        <div class="basic-hud"><span>${bn(b)}</span><span class="basic-weather">${bn(g)} · ${bn(f.temp)}${bn(f.unit)}</span></div>
        <div class="basic-layout">
          <div class="basic-modes">
            <button class="basic-mode ${s === "armed_home" ? "active" : ""}" data-service="alarm_arm_home">🏠 ${i.home}</button>
            <button class="basic-mode ${s === "armed_away" ? "active" : ""}" data-service="alarm_arm_away">🔒 ${i.away}</button>
            <button class="basic-mode ${s === "armed_night" ? "active" : ""}" data-service="alarm_arm_night">🌙 ${i.night}</button>
            <button class="basic-mode ${s === "armed_vacation" ? "active" : ""}" data-service="alarm_arm_vacation">✈️ ${i.vacation}</button>
            <button class="basic-mode ${s === "disarmed" ? "active" : ""}" data-service="alarm_disarm">🔓 ${i.disarm}</button>
          </div>
          <div class="basic-shield">${s === "triggered" ? "🚨" : "🛡️"}</div>
        </div>
        <div class="basic-title">${bn(k)} · v${Hu}</div>
      </div>
    `, this._panelHost.querySelectorAll("[data-service]").forEach((v) => {
      v.onclick = async () => {
        const E = v.dataset.service;
        await this._hass.callService("alarm_control_panel", E, { entity_id: this._config.entity });
      };
    });
  }
  _toggleFullscreen() {
    this._fullscreen ? this._exitFullscreen() : this._enterFullscreen();
  }
  _enterFullscreen() {
    this._fullscreen = !0, this.classList.add("argus-fullscreen"), this._fsBtn.textContent = "✕", this._fsBtn.title = "Salir de pantalla completa", document.body.style.overflow = "hidden";
  }
  _exitFullscreen() {
    this._fullscreen = !1, this.classList.remove("argus-fullscreen"), this._fsBtn.textContent = "⛶", this._fsBtn.title = "Pantalla completa", document.body.style.overflow = "";
  }
  getCardSize() {
    return 6;
  }
}
customElements.get("argus-panel-card") || customElements.define("argus-panel-card", Mu);
customElements.get("argus-card") || customElements.define("argus-card", class extends Mu {
});
window.customCards = window.customCards || [];
const $u = new Set(window.customCards.map((c) => c.type));
$u.has("argus-panel-card") || window.customCards.push({
  type: "argus-panel-card",
  name: "Argus Security Panel",
  description: "Panel de seguridad Argus — consola Liquid Glass de Instancias Activas, dashboard e historial.",
  preview: !0,
  documentationURL: "https://github.com/Chrisalvir1/Argus"
});
$u.has("argus-card") || window.customCards.push({
  type: "argus-card",
  name: "Argus Alarm Card",
  description: "Tarjeta de seguridad Argus — consola interactiva de Instancia Activa con Liquid Glass y pantalla completa.",
  preview: !0,
  documentationURL: "https://github.com/Chrisalvir1/Argus"
});
function Ym(c) {
  if (c.__esModule) return c;
  var r = c.default;
  if (typeof r == "function") {
    var i = function o() {
      return this instanceof o ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(c).forEach(function(o) {
    var s = Object.getOwnPropertyDescriptor(c, o);
    Object.defineProperty(i, o, s.get ? s : {
      enumerable: !0,
      get: function() {
        return c[o];
      }
    });
  }), i;
}
var Ps = { exports: {} }, li = {}, Rs = { exports: {} }, Te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function Km() {
  if (Td) return Te;
  Td = 1;
  var c = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.iterator;
  function k(N) {
    return N === null || typeof N != "object" ? null : (N = b && N[b] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, z = {};
  function C(N, B, ae) {
    this.props = N, this.context = B, this.refs = z, this.updater = ae || P;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(N, B) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, B, "setState");
  }, C.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function w() {
  }
  w.prototype = C.prototype;
  function _(N, B, ae) {
    this.props = N, this.context = B, this.refs = z, this.updater = ae || P;
  }
  var x = _.prototype = new w();
  x.constructor = _, L(x, C.prototype), x.isPureReactComponent = !0;
  var g = Array.isArray, v = Object.prototype.hasOwnProperty, E = { current: null }, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(N, B, ae) {
    var fe, ye = {}, Ae = null, Le = null;
    if (B != null) for (fe in B.ref !== void 0 && (Le = B.ref), B.key !== void 0 && (Ae = "" + B.key), B) v.call(B, fe) && !A.hasOwnProperty(fe) && (ye[fe] = B[fe]);
    var J = arguments.length - 2;
    if (J === 1) ye.children = ae;
    else if (1 < J) {
      for (var pe = Array(J), ze = 0; ze < J; ze++) pe[ze] = arguments[ze + 2];
      ye.children = pe;
    }
    if (N && N.defaultProps) for (fe in J = N.defaultProps, J) ye[fe] === void 0 && (ye[fe] = J[fe]);
    return { $$typeof: c, type: N, key: Ae, ref: Le, props: ye, _owner: E.current };
  }
  function V(N, B) {
    return { $$typeof: c, type: N.type, key: B, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function $(N) {
    return typeof N == "object" && N !== null && N.$$typeof === c;
  }
  function G(N) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ae) {
      return B[ae];
    });
  }
  var Z = /\/+/g;
  function ee(N, B) {
    return typeof N == "object" && N !== null && N.key != null ? G("" + N.key) : B.toString(36);
  }
  function ne(N, B, ae, fe, ye) {
    var Ae = typeof N;
    (Ae === "undefined" || Ae === "boolean") && (N = null);
    var Le = !1;
    if (N === null) Le = !0;
    else switch (Ae) {
      case "string":
      case "number":
        Le = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case c:
          case r:
            Le = !0;
        }
    }
    if (Le) return Le = N, ye = ye(Le), N = fe === "" ? "." + ee(Le, 0) : fe, g(ye) ? (ae = "", N != null && (ae = N.replace(Z, "$&/") + "/"), ne(ye, B, ae, "", function(ze) {
      return ze;
    })) : ye != null && ($(ye) && (ye = V(ye, ae + (!ye.key || Le && Le.key === ye.key ? "" : ("" + ye.key).replace(Z, "$&/") + "/") + N)), B.push(ye)), 1;
    if (Le = 0, fe = fe === "" ? "." : fe + ":", g(N)) for (var J = 0; J < N.length; J++) {
      Ae = N[J];
      var pe = fe + ee(Ae, J);
      Le += ne(Ae, B, ae, pe, ye);
    }
    else if (pe = k(N), typeof pe == "function") for (N = pe.call(N), J = 0; !(Ae = N.next()).done; ) Ae = Ae.value, pe = fe + ee(Ae, J++), Le += ne(Ae, B, ae, pe, ye);
    else if (Ae === "object") throw B = String(N), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Le;
  }
  function le(N, B, ae) {
    if (N == null) return N;
    var fe = [], ye = 0;
    return ne(N, fe, "", "", function(Ae) {
      return B.call(ae, Ae, ye++);
    }), fe;
  }
  function ge(N) {
    if (N._status === -1) {
      var B = N._result;
      B = B(), B.then(function(ae) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ae);
      }, function(ae) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ae);
      }), N._status === -1 && (N._status = 0, N._result = B);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var de = { current: null }, Q = { transition: null }, ue = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Q, ReactCurrentOwner: E };
  function F() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Te.Children = { map: le, forEach: function(N, B, ae) {
    le(N, function() {
      B.apply(this, arguments);
    }, ae);
  }, count: function(N) {
    var B = 0;
    return le(N, function() {
      B++;
    }), B;
  }, toArray: function(N) {
    return le(N, function(B) {
      return B;
    }) || [];
  }, only: function(N) {
    if (!$(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, Te.Component = C, Te.Fragment = i, Te.Profiler = s, Te.PureComponent = _, Te.StrictMode = o, Te.Suspense = f, Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, Te.act = F, Te.cloneElement = function(N, B, ae) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var fe = L({}, N.props), ye = N.key, Ae = N.ref, Le = N._owner;
    if (B != null) {
      if (B.ref !== void 0 && (Ae = B.ref, Le = E.current), B.key !== void 0 && (ye = "" + B.key), N.type && N.type.defaultProps) var J = N.type.defaultProps;
      for (pe in B) v.call(B, pe) && !A.hasOwnProperty(pe) && (fe[pe] = B[pe] === void 0 && J !== void 0 ? J[pe] : B[pe]);
    }
    var pe = arguments.length - 2;
    if (pe === 1) fe.children = ae;
    else if (1 < pe) {
      J = Array(pe);
      for (var ze = 0; ze < pe; ze++) J[ze] = arguments[ze + 2];
      fe.children = J;
    }
    return { $$typeof: c, type: N.type, key: ye, ref: Ae, props: fe, _owner: Le };
  }, Te.createContext = function(N) {
    return N = { $$typeof: d, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: u, _context: N }, N.Consumer = N;
  }, Te.createElement = M, Te.createFactory = function(N) {
    var B = M.bind(null, N);
    return B.type = N, B;
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(N) {
    return { $$typeof: m, render: N };
  }, Te.isValidElement = $, Te.lazy = function(N) {
    return { $$typeof: S, _payload: { _status: -1, _result: N }, _init: ge };
  }, Te.memo = function(N, B) {
    return { $$typeof: h, type: N, compare: B === void 0 ? null : B };
  }, Te.startTransition = function(N) {
    var B = Q.transition;
    Q.transition = {};
    try {
      N();
    } finally {
      Q.transition = B;
    }
  }, Te.unstable_act = F, Te.useCallback = function(N, B) {
    return de.current.useCallback(N, B);
  }, Te.useContext = function(N) {
    return de.current.useContext(N);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(N) {
    return de.current.useDeferredValue(N);
  }, Te.useEffect = function(N, B) {
    return de.current.useEffect(N, B);
  }, Te.useId = function() {
    return de.current.useId();
  }, Te.useImperativeHandle = function(N, B, ae) {
    return de.current.useImperativeHandle(N, B, ae);
  }, Te.useInsertionEffect = function(N, B) {
    return de.current.useInsertionEffect(N, B);
  }, Te.useLayoutEffect = function(N, B) {
    return de.current.useLayoutEffect(N, B);
  }, Te.useMemo = function(N, B) {
    return de.current.useMemo(N, B);
  }, Te.useReducer = function(N, B, ae) {
    return de.current.useReducer(N, B, ae);
  }, Te.useRef = function(N) {
    return de.current.useRef(N);
  }, Te.useState = function(N) {
    return de.current.useState(N);
  }, Te.useSyncExternalStore = function(N, B, ae) {
    return de.current.useSyncExternalStore(N, B, ae);
  }, Te.useTransition = function() {
    return de.current.useTransition();
  }, Te.version = "18.3.1", Te;
}
var Dd;
function zt() {
  return Dd || (Dd = 1, Rs.exports = Km()), Rs.exports;
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
var Hd;
function Xm() {
  if (Hd) return li;
  Hd = 1;
  var c = zt(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, f, h) {
    var S, b = {}, k = null, P = null;
    h !== void 0 && (k = "" + h), f.key !== void 0 && (k = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (S in f) o.call(f, S) && !u.hasOwnProperty(S) && (b[S] = f[S]);
    if (m && m.defaultProps) for (S in f = m.defaultProps, f) b[S] === void 0 && (b[S] = f[S]);
    return { $$typeof: r, type: m, key: k, ref: P, props: b, _owner: s.current };
  }
  return li.Fragment = i, li.jsx = d, li.jsxs = d, li;
}
var Md;
function Qm() {
  return Md || (Md = 1, Ps.exports = Xm()), Ps.exports;
}
var _e = Qm(), Io = {}, Is = { exports: {} }, Ct = {}, Ns = { exports: {} }, Ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function Zm() {
  return $d || ($d = 1, function(c) {
    function r(Q, ue) {
      var F = Q.length;
      Q.push(ue);
      e: for (; 0 < F; ) {
        var N = F - 1 >>> 1, B = Q[N];
        if (0 < s(B, ue)) Q[N] = ue, Q[F] = B, F = N;
        else break e;
      }
    }
    function i(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function o(Q) {
      if (Q.length === 0) return null;
      var ue = Q[0], F = Q.pop();
      if (F !== ue) {
        Q[0] = F;
        e: for (var N = 0, B = Q.length, ae = B >>> 1; N < ae; ) {
          var fe = 2 * (N + 1) - 1, ye = Q[fe], Ae = fe + 1, Le = Q[Ae];
          if (0 > s(ye, F)) Ae < B && 0 > s(Le, ye) ? (Q[N] = Le, Q[Ae] = F, N = Ae) : (Q[N] = ye, Q[fe] = F, N = fe);
          else if (Ae < B && 0 > s(Le, F)) Q[N] = Le, Q[Ae] = F, N = Ae;
          else break e;
        }
      }
      return ue;
    }
    function s(Q, ue) {
      var F = Q.sortIndex - ue.sortIndex;
      return F !== 0 ? F : Q.id - ue.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      c.unstable_now = function() {
        return u.now();
      };
    } else {
      var d = Date, m = d.now();
      c.unstable_now = function() {
        return d.now() - m;
      };
    }
    var f = [], h = [], S = 1, b = null, k = 3, P = !1, L = !1, z = !1, C = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(Q) {
      for (var ue = i(h); ue !== null; ) {
        if (ue.callback === null) o(h);
        else if (ue.startTime <= Q) o(h), ue.sortIndex = ue.expirationTime, r(f, ue);
        else break;
        ue = i(h);
      }
    }
    function g(Q) {
      if (z = !1, x(Q), !L) if (i(f) !== null) L = !0, ge(v);
      else {
        var ue = i(h);
        ue !== null && de(g, ue.startTime - Q);
      }
    }
    function v(Q, ue) {
      L = !1, z && (z = !1, w(M), M = -1), P = !0;
      var F = k;
      try {
        for (x(ue), b = i(f); b !== null && (!(b.expirationTime > ue) || Q && !G()); ) {
          var N = b.callback;
          if (typeof N == "function") {
            b.callback = null, k = b.priorityLevel;
            var B = N(b.expirationTime <= ue);
            ue = c.unstable_now(), typeof B == "function" ? b.callback = B : b === i(f) && o(f), x(ue);
          } else o(f);
          b = i(f);
        }
        if (b !== null) var ae = !0;
        else {
          var fe = i(h);
          fe !== null && de(g, fe.startTime - ue), ae = !1;
        }
        return ae;
      } finally {
        b = null, k = F, P = !1;
      }
    }
    var E = !1, A = null, M = -1, V = 5, $ = -1;
    function G() {
      return !(c.unstable_now() - $ < V);
    }
    function Z() {
      if (A !== null) {
        var Q = c.unstable_now();
        $ = Q;
        var ue = !0;
        try {
          ue = A(!0, Q);
        } finally {
          ue ? ee() : (E = !1, A = null);
        }
      } else E = !1;
    }
    var ee;
    if (typeof _ == "function") ee = function() {
      _(Z);
    };
    else if (typeof MessageChannel < "u") {
      var ne = new MessageChannel(), le = ne.port2;
      ne.port1.onmessage = Z, ee = function() {
        le.postMessage(null);
      };
    } else ee = function() {
      C(Z, 0);
    };
    function ge(Q) {
      A = Q, E || (E = !0, ee());
    }
    function de(Q, ue) {
      M = C(function() {
        Q(c.unstable_now());
      }, ue);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, c.unstable_continueExecution = function() {
      L || P || (L = !0, ge(v));
    }, c.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, c.unstable_getFirstCallbackNode = function() {
      return i(f);
    }, c.unstable_next = function(Q) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = k;
      }
      var F = k;
      k = ue;
      try {
        return Q();
      } finally {
        k = F;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(Q, ue) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var F = k;
      k = Q;
      try {
        return ue();
      } finally {
        k = F;
      }
    }, c.unstable_scheduleCallback = function(Q, ue, F) {
      var N = c.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? N + F : N) : F = N, Q) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = F + B, Q = { id: S++, callback: ue, priorityLevel: Q, startTime: F, expirationTime: B, sortIndex: -1 }, F > N ? (Q.sortIndex = F, r(h, Q), i(f) === null && Q === i(h) && (z ? (w(M), M = -1) : z = !0, de(g, F - N))) : (Q.sortIndex = B, r(f, Q), L || P || (L = !0, ge(v))), Q;
    }, c.unstable_shouldYield = G, c.unstable_wrapCallback = function(Q) {
      var ue = k;
      return function() {
        var F = k;
        k = ue;
        try {
          return Q.apply(this, arguments);
        } finally {
          k = F;
        }
      };
    };
  }(Ls)), Ls;
}
var Bd;
function Jm() {
  return Bd || (Bd = 1, Ns.exports = Zm()), Ns.exports;
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
var jd;
function eg() {
  if (jd) return Ct;
  jd = 1;
  var c = zt(), r = Jm();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), s = {};
  function u(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, b = {};
  function k(e) {
    return f.call(b, e) ? !0 : f.call(S, e) ? !1 : h.test(e) ? b[e] = !0 : (S[e] = !0, !1);
  }
  function P(e, t, n, a) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function L(e, t, n, a) {
    if (t === null || typeof t > "u" || P(e, t, n, a)) return !0;
    if (a) return !1;
    if (n !== null) switch (n.type) {
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
  function z(e, t, n, a, l, p, y) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = a, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    C[e] = new z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    C[t] = new z(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    C[e] = new z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    C[e] = new z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    C[e] = new z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    C[e] = new z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    C[e] = new z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    C[e] = new z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    C[e] = new z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var w = /[\-:]([a-z])/g;
  function _(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      w,
      _
    );
    C[t] = new z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(w, _);
    C[t] = new z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(w, _);
    C[t] = new z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    C[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    C[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function x(e, t, n, a) {
    var l = C.hasOwnProperty(t) ? C[t] : null;
    (l !== null ? l.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, l, a) && (n = null), a || l === null ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, a = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
  }
  var g = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = Symbol.for("react.element"), E = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), G = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F = Object.assign, N;
  function B(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
  }
  var ae = !1;
  function fe(e, t) {
    if (!e || ae) return "";
    ae = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (Y) {
          var a = Y;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (Y) {
          a = Y;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Y) {
          a = Y;
        }
        e();
      }
    } catch (Y) {
      if (Y && a && typeof Y.stack == "string") {
        for (var l = Y.stack.split(`
`), p = a.stack.split(`
`), y = l.length - 1, R = p.length - 1; 1 <= y && 0 <= R && l[y] !== p[R]; ) R--;
        for (; 1 <= y && 0 <= R; y--, R--) if (l[y] !== p[R]) {
          if (y !== 1 || R !== 1)
            do
              if (y--, R--, 0 > R || l[y] !== p[R]) {
                var O = `
` + l[y].replace(" at new ", " at ");
                return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
              }
            while (1 <= y && 0 <= R);
          break;
        }
      }
    } finally {
      ae = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? B(e) : "";
  }
  function ye(e) {
    switch (e.tag) {
      case 5:
        return B(e.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = fe(e.type, !1), e;
      case 11:
        return e = fe(e.type.render, !1), e;
      case 1:
        return e = fe(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case A:
        return "Fragment";
      case E:
        return "Portal";
      case V:
        return "Profiler";
      case M:
        return "StrictMode";
      case ee:
        return "Suspense";
      case ne:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case G:
        return (e.displayName || "Context") + ".Consumer";
      case $:
        return (e._context.displayName || "Context") + ".Provider";
      case Z:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case le:
        return t = e.displayName || null, t !== null ? t : Ae(e.type) || "Memo";
      case ge:
        t = e._payload, e = e._init;
        try {
          return Ae(e(t));
        } catch {
        }
    }
    return null;
  }
  function Le(e) {
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
        return Ae(t);
      case 8:
        return t === M ? "StrictMode" : "Mode";
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
  function J(e) {
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
  function pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ze(e) {
    var t = pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, p = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(y) {
        a = "" + y, p.call(this, y);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(y) {
        a = "" + y;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Re(e) {
    e._valueTracker || (e._valueTracker = ze(e));
  }
  function Ne(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = pe(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Be(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, t) {
    var n = t.checked;
    return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function rt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, a = t.checked != null ? t.checked : t.defaultChecked;
    n = J(t.value != null ? t.value : n), e._wrapperState = { initialChecked: a, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function T(e, t) {
    t = t.checked, t != null && x(e, "checked", t, !1);
  }
  function H(e, t) {
    T(e, t);
    var n = J(t.value), a = t.type;
    if (n != null) a === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? X(e, t.type, n) : t.hasOwnProperty("defaultValue") && X(e, t.type, J(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function j(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function X(e, t, n) {
    (t !== "number" || Be(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ce = Array.isArray;
  function we(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + J(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ce(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ie(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (ce(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: J(n) };
  }
  function Oe(e, t) {
    var n = J(t.value), a = J(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), a != null && (e.defaultValue = "" + a);
  }
  function Ve(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xe(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var I, U = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, a, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (I = I || document.createElement("div"), I.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = I.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function K(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
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
  function De(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || oe.hasOwnProperty(e) && oe[e] ? ("" + t).trim() : t + "px";
  }
  function He(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var a = n.indexOf("--") === 0, l = De(n, t[n], a);
      n === "float" && (n = "cssFloat"), a ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Qe = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pt(e, t) {
    if (t) {
      if (Qe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Mt(e, t) {
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
  var Vt = null;
  function Rr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gr = null, Ir = null, Zt = null;
  function kn(e) {
    if (e = Vn(e)) {
      if (typeof Gr != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Ui(t), Gr(e.stateNode, e.type, t));
    }
  }
  function Sn(e) {
    Ir ? Zt ? Zt.push(e) : Zt = [e] : Ir = e;
  }
  function Yr() {
    if (Ir) {
      var e = Ir, t = Zt;
      if (Zt = Ir = null, kn(e), t) for (e = 0; e < t.length; e++) kn(t[e]);
    }
  }
  function vi(e, t) {
    return e(t);
  }
  function el() {
  }
  var Vo = !1;
  function tl(e, t, n) {
    if (Vo) return e(t, n);
    Vo = !0;
    try {
      return vi(e, t, n);
    } finally {
      Vo = !1, (Ir !== null || Zt !== null) && (el(), Yr());
    }
  }
  function En(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = Ui(n);
    if (a === null) return null;
    n = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Go = !1;
  if (m) try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", { get: function() {
      Go = !0;
    } }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
  } catch {
    Go = !1;
  }
  function Ju(e, t, n, a, l, p, y, R, O) {
    var Y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, Y);
    } catch (re) {
      this.onError(re);
    }
  }
  var zn = !1, wi = null, ki = !1, Yo = null, ep = { onError: function(e) {
    zn = !0, wi = e;
  } };
  function tp(e, t, n, a, l, p, y, R, O) {
    zn = !1, wi = null, Ju.apply(ep, arguments);
  }
  function rp(e, t, n, a, l, p, y, R, O) {
    if (tp.apply(this, arguments), zn) {
      if (zn) {
        var Y = wi;
        zn = !1, wi = null;
      } else throw Error(i(198));
      ki || (ki = !0, Yo = Y);
    }
  }
  function Nr(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function rl(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function nl(e) {
    if (Nr(e) !== e) throw Error(i(188));
  }
  function np(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nr(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var p = l.alternate;
      if (p === null) {
        if (a = l.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === p.child) {
        for (p = l.child; p; ) {
          if (p === n) return nl(l), e;
          if (p === a) return nl(l), t;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== a.return) n = l, a = p;
      else {
        for (var y = !1, R = l.child; R; ) {
          if (R === n) {
            y = !0, n = l, a = p;
            break;
          }
          if (R === a) {
            y = !0, a = l, n = p;
            break;
          }
          R = R.sibling;
        }
        if (!y) {
          for (R = p.child; R; ) {
            if (R === n) {
              y = !0, n = p, a = l;
              break;
            }
            if (R === a) {
              y = !0, a = p, n = l;
              break;
            }
            R = R.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (n.alternate !== a) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function il(e) {
    return e = np(e), e !== null ? ol(e) : null;
  }
  function ol(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ol(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var al = r.unstable_scheduleCallback, sl = r.unstable_cancelCallback, ip = r.unstable_shouldYield, op = r.unstable_requestPaint, nt = r.unstable_now, ap = r.unstable_getCurrentPriorityLevel, Ko = r.unstable_ImmediatePriority, ll = r.unstable_UserBlockingPriority, Si = r.unstable_NormalPriority, sp = r.unstable_LowPriority, cl = r.unstable_IdlePriority, Ei = null, Gt = null;
  function lp(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var $t = Math.clz32 ? Math.clz32 : up, cp = Math.log, dp = Math.LN2;
  function up(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cp(e) / dp | 0) | 0;
  }
  var Ci = 64, zi = 4194304;
  function An(e) {
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
  function Ai(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, l = e.suspendedLanes, p = e.pingedLanes, y = n & 268435455;
    if (y !== 0) {
      var R = y & ~l;
      R !== 0 ? a = An(R) : (p &= y, p !== 0 && (a = An(p)));
    } else y = n & ~l, y !== 0 ? a = An(y) : p !== 0 && (a = An(p));
    if (a === 0) return 0;
    if (t !== 0 && t !== a && !(t & l) && (l = a & -a, p = t & -t, l >= p || l === 16 && (p & 4194240) !== 0)) return t;
    if (a & 4 && (a |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= a; 0 < t; ) n = 31 - $t(t), l = 1 << n, a |= e[n], t &= ~l;
    return a;
  }
  function pp(e, t) {
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
  function mp(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var y = 31 - $t(p), R = 1 << y, O = l[y];
      O === -1 ? (!(R & n) || R & a) && (l[y] = pp(R, t)) : O <= t && (e.expiredLanes |= R), p &= ~R;
    }
  }
  function Xo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function dl() {
    var e = Ci;
    return Ci <<= 1, !(Ci & 4194240) && (Ci = 64), e;
  }
  function Qo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $t(t), e[t] = n;
  }
  function gp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - $t(n), p = 1 << l;
      t[l] = 0, a[l] = -1, e[l] = -1, n &= ~p;
    }
  }
  function Zo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - $t(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  var We = 0;
  function ul(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var pl, Jo, ml, gl, fl, ea = !1, Pi = [], cr = null, dr = null, ur = null, Rn = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), pr = [], fp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function hl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        cr = null;
        break;
      case "dragenter":
      case "dragleave":
        dr = null;
        break;
      case "mouseover":
      case "mouseout":
        ur = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        In.delete(t.pointerId);
    }
  }
  function Nn(e, t, n, a, l, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: p, targetContainers: [l] }, t !== null && (t = Vn(t), t !== null && Jo(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function hp(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return cr = Nn(cr, e, t, n, a, l), !0;
      case "dragenter":
        return dr = Nn(dr, e, t, n, a, l), !0;
      case "mouseover":
        return ur = Nn(ur, e, t, n, a, l), !0;
      case "pointerover":
        var p = l.pointerId;
        return Rn.set(p, Nn(Rn.get(p) || null, e, t, n, a, l)), !0;
      case "gotpointercapture":
        return p = l.pointerId, In.set(p, Nn(In.get(p) || null, e, t, n, a, l)), !0;
    }
    return !1;
  }
  function _l(e) {
    var t = Lr(e.target);
    if (t !== null) {
      var n = Nr(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = rl(n), t !== null) {
            e.blockedOn = t, fl(e.priority, function() {
              ml(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ri(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        Vt = a, n.target.dispatchEvent(a), Vt = null;
      } else return t = Vn(n), t !== null && Jo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function bl(e, t, n) {
    Ri(e) && n.delete(t);
  }
  function _p() {
    ea = !1, cr !== null && Ri(cr) && (cr = null), dr !== null && Ri(dr) && (dr = null), ur !== null && Ri(ur) && (ur = null), Rn.forEach(bl), In.forEach(bl);
  }
  function Ln(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ea || (ea = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, _p)));
  }
  function On(e) {
    function t(l) {
      return Ln(l, e);
    }
    if (0 < Pi.length) {
      Ln(Pi[0], e);
      for (var n = 1; n < Pi.length; n++) {
        var a = Pi[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (cr !== null && Ln(cr, e), dr !== null && Ln(dr, e), ur !== null && Ln(ur, e), Rn.forEach(t), In.forEach(t), n = 0; n < pr.length; n++) a = pr[n], a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < pr.length && (n = pr[0], n.blockedOn === null); ) _l(n), n.blockedOn === null && pr.shift();
  }
  var Kr = g.ReactCurrentBatchConfig, Ii = !0;
  function bp(e, t, n, a) {
    var l = We, p = Kr.transition;
    Kr.transition = null;
    try {
      We = 1, ta(e, t, n, a);
    } finally {
      We = l, Kr.transition = p;
    }
  }
  function yp(e, t, n, a) {
    var l = We, p = Kr.transition;
    Kr.transition = null;
    try {
      We = 4, ta(e, t, n, a);
    } finally {
      We = l, Kr.transition = p;
    }
  }
  function ta(e, t, n, a) {
    if (Ii) {
      var l = ra(e, t, n, a);
      if (l === null) ya(e, t, a, Ni, n), hl(e, a);
      else if (hp(l, e, t, n, a)) a.stopPropagation();
      else if (hl(e, a), t & 4 && -1 < fp.indexOf(e)) {
        for (; l !== null; ) {
          var p = Vn(l);
          if (p !== null && pl(p), p = ra(e, t, n, a), p === null && ya(e, t, a, Ni, n), p === l) break;
          l = p;
        }
        l !== null && a.stopPropagation();
      } else ya(e, t, a, null, n);
    }
  }
  var Ni = null;
  function ra(e, t, n, a) {
    if (Ni = null, e = Rr(a), e = Lr(e), e !== null) if (t = Nr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = rl(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ni = e, null;
  }
  function yl(e) {
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
        switch (ap()) {
          case Ko:
            return 1;
          case ll:
            return 4;
          case Si:
          case sp:
            return 16;
          case cl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mr = null, na = null, Li = null;
  function xl() {
    if (Li) return Li;
    var e, t = na, n = t.length, a, l = "value" in mr ? mr.value : mr.textContent, p = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var y = n - e;
    for (a = 1; a <= y && t[n - a] === l[p - a]; a++) ;
    return Li = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ti() {
    return !0;
  }
  function vl() {
    return !1;
  }
  function At(e) {
    function t(n, a, l, p, y) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = p, this.target = y, this.currentTarget = null;
      for (var R in e) e.hasOwnProperty(R) && (n = e[R], this[R] = n ? n(p) : p[R]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Ti : vl, this.isPropagationStopped = vl, this;
    }
    return F(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ti);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ti);
    }, persist: function() {
    }, isPersistent: Ti }), t;
  }
  var Xr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ia = At(Xr), Tn = F({}, Xr, { view: 0, detail: 0 }), xp = At(Tn), oa, aa, Dn, Di = F({}, Tn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: la, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (oa = e.screenX - Dn.screenX, aa = e.screenY - Dn.screenY) : aa = oa = 0, Dn = e), oa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : aa;
  } }), wl = At(Di), vp = F({}, Di, { dataTransfer: 0 }), wp = At(vp), kp = F({}, Tn, { relatedTarget: 0 }), sa = At(kp), Sp = F({}, Xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ep = At(Sp), Cp = F({}, Xr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), zp = At(Cp), Ap = F({}, Xr, { data: 0 }), kl = At(Ap), Pp = {
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
  }, Rp = {
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
  }, Ip = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Np(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ip[e]) ? !!t[e] : !1;
  }
  function la() {
    return Np;
  }
  var Lp = F({}, Tn, { key: function(e) {
    if (e.key) {
      var t = Pp[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: la, charCode: function(e) {
    return e.type === "keypress" ? Oi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Op = At(Lp), Tp = F({}, Di, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sl = At(Tp), Dp = F({}, Tn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: la }), Hp = At(Dp), Mp = F({}, Xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $p = At(Mp), Bp = F({}, Di, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jp = At(Bp), qp = [9, 13, 27, 32], ca = m && "CompositionEvent" in window, Hn = null;
  m && "documentMode" in document && (Hn = document.documentMode);
  var Fp = m && "TextEvent" in window && !Hn, El = m && (!ca || Hn && 8 < Hn && 11 >= Hn), Cl = " ", zl = !1;
  function Al(e, t) {
    switch (e) {
      case "keyup":
        return qp.indexOf(t.keyCode) !== -1;
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
  function Pl(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qr = !1;
  function Up(e, t) {
    switch (e) {
      case "compositionend":
        return Pl(t);
      case "keypress":
        return t.which !== 32 ? null : (zl = !0, Cl);
      case "textInput":
        return e = t.data, e === Cl && zl ? null : e;
      default:
        return null;
    }
  }
  function Wp(e, t) {
    if (Qr) return e === "compositionend" || !ca && Al(e, t) ? (e = xl(), Li = na = mr = null, Qr = !1, e) : null;
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
        return El && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Rl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vp[e.type] : t === "textarea";
  }
  function Il(e, t, n, a) {
    Sn(a), t = ji(t, "onChange"), 0 < t.length && (n = new ia("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
  }
  var Mn = null, $n = null;
  function Gp(e) {
    Kl(e, 0);
  }
  function Hi(e) {
    var t = rn(e);
    if (Ne(t)) return e;
  }
  function Yp(e, t) {
    if (e === "change") return t;
  }
  var Nl = !1;
  if (m) {
    var da;
    if (m) {
      var ua = "oninput" in document;
      if (!ua) {
        var Ll = document.createElement("div");
        Ll.setAttribute("oninput", "return;"), ua = typeof Ll.oninput == "function";
      }
      da = ua;
    } else da = !1;
    Nl = da && (!document.documentMode || 9 < document.documentMode);
  }
  function Ol() {
    Mn && (Mn.detachEvent("onpropertychange", Tl), $n = Mn = null);
  }
  function Tl(e) {
    if (e.propertyName === "value" && Hi($n)) {
      var t = [];
      Il(t, $n, e, Rr(e)), tl(Gp, t);
    }
  }
  function Kp(e, t, n) {
    e === "focusin" ? (Ol(), Mn = t, $n = n, Mn.attachEvent("onpropertychange", Tl)) : e === "focusout" && Ol();
  }
  function Xp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hi($n);
  }
  function Qp(e, t) {
    if (e === "click") return Hi(t);
  }
  function Zp(e, t) {
    if (e === "input" || e === "change") return Hi(t);
  }
  function Jp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Jp;
  function Bn(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!f.call(t, l) || !Bt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Dl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hl(e, t) {
    var n = Dl(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t) return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Dl(n);
    }
  }
  function Ml(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ml(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $l() {
    for (var e = window, t = Be(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Be(e.document);
    }
    return t;
  }
  function pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function em(e) {
    var t = $l(), n = e.focusedElem, a = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ml(n.ownerDocument.documentElement, n)) {
      if (a !== null && pa(n)) {
        if (t = a.start, e = a.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, p = Math.min(a.start, l);
          a = a.end === void 0 ? p : Math.min(a.end, l), !e.extend && p > a && (l = a, a = p, p = l), l = Hl(n, p);
          var y = Hl(
            n,
            a
          );
          l && y && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), p > a ? (e.addRange(t), e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var tm = m && "documentMode" in document && 11 >= document.documentMode, Zr = null, ma = null, jn = null, ga = !1;
  function Bl(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ga || Zr == null || Zr !== Be(a) || (a = Zr, "selectionStart" in a && pa(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), jn && Bn(jn, a) || (jn = a, a = ji(ma, "onSelect"), 0 < a.length && (t = new ia("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Zr)));
  }
  function Mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jr = { animationend: Mi("Animation", "AnimationEnd"), animationiteration: Mi("Animation", "AnimationIteration"), animationstart: Mi("Animation", "AnimationStart"), transitionend: Mi("Transition", "TransitionEnd") }, fa = {}, jl = {};
  m && (jl = document.createElement("div").style, "AnimationEvent" in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), "TransitionEvent" in window || delete Jr.transitionend.transition);
  function $i(e) {
    if (fa[e]) return fa[e];
    if (!Jr[e]) return e;
    var t = Jr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in jl) return fa[e] = t[n];
    return e;
  }
  var ql = $i("animationend"), Fl = $i("animationiteration"), Ul = $i("animationstart"), Wl = $i("transitionend"), Vl = /* @__PURE__ */ new Map(), Gl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gr(e, t) {
    Vl.set(e, t), u(t, [e]);
  }
  for (var ha = 0; ha < Gl.length; ha++) {
    var _a = Gl[ha], rm = _a.toLowerCase(), nm = _a[0].toUpperCase() + _a.slice(1);
    gr(rm, "on" + nm);
  }
  gr(ql, "onAnimationEnd"), gr(Fl, "onAnimationIteration"), gr(Ul, "onAnimationStart"), gr("dblclick", "onDoubleClick"), gr("focusin", "onFocus"), gr("focusout", "onBlur"), gr(Wl, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), im = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
  function Yl(e, t, n) {
    var a = e.type || "unknown-event";
    e.currentTarget = n, rp(a, t, void 0, e), e.currentTarget = null;
  }
  function Kl(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var p = void 0;
        if (t) for (var y = a.length - 1; 0 <= y; y--) {
          var R = a[y], O = R.instance, Y = R.currentTarget;
          if (R = R.listener, O !== p && l.isPropagationStopped()) break e;
          Yl(l, R, Y), p = O;
        }
        else for (y = 0; y < a.length; y++) {
          if (R = a[y], O = R.instance, Y = R.currentTarget, R = R.listener, O !== p && l.isPropagationStopped()) break e;
          Yl(l, R, Y), p = O;
        }
      }
    }
    if (ki) throw e = Yo, ki = !1, Yo = null, e;
  }
  function Ye(e, t) {
    var n = t[Ea];
    n === void 0 && (n = t[Ea] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Xl(t, e, 2, !1), n.add(a));
  }
  function ba(e, t, n) {
    var a = 0;
    t && (a |= 4), Xl(n, e, a, t);
  }
  var Bi = "_reactListening" + Math.random().toString(36).slice(2);
  function Fn(e) {
    if (!e[Bi]) {
      e[Bi] = !0, o.forEach(function(n) {
        n !== "selectionchange" && (im.has(n) || ba(n, !1, e), ba(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bi] || (t[Bi] = !0, ba("selectionchange", !1, t));
    }
  }
  function Xl(e, t, n, a) {
    switch (yl(t)) {
      case 1:
        var l = bp;
        break;
      case 4:
        l = yp;
        break;
      default:
        l = ta;
    }
    n = l.bind(null, t, n, e), l = void 0, !Go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function ya(e, t, n, a, l) {
    var p = a;
    if (!(t & 1) && !(t & 2) && a !== null) e: for (; ; ) {
      if (a === null) return;
      var y = a.tag;
      if (y === 3 || y === 4) {
        var R = a.stateNode.containerInfo;
        if (R === l || R.nodeType === 8 && R.parentNode === l) break;
        if (y === 4) for (y = a.return; y !== null; ) {
          var O = y.tag;
          if ((O === 3 || O === 4) && (O = y.stateNode.containerInfo, O === l || O.nodeType === 8 && O.parentNode === l)) return;
          y = y.return;
        }
        for (; R !== null; ) {
          if (y = Lr(R), y === null) return;
          if (O = y.tag, O === 5 || O === 6) {
            a = p = y;
            continue e;
          }
          R = R.parentNode;
        }
      }
      a = a.return;
    }
    tl(function() {
      var Y = p, re = Rr(n), ie = [];
      e: {
        var te = Vl.get(e);
        if (te !== void 0) {
          var he = ia, xe = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              he = Op;
              break;
            case "focusin":
              xe = "focus", he = sa;
              break;
            case "focusout":
              xe = "blur", he = sa;
              break;
            case "beforeblur":
            case "afterblur":
              he = sa;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              he = wl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = Hp;
              break;
            case ql:
            case Fl:
            case Ul:
              he = Ep;
              break;
            case Wl:
              he = $p;
              break;
            case "scroll":
              he = xp;
              break;
            case "wheel":
              he = jp;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = zp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = Sl;
          }
          var ve = (t & 4) !== 0, it = !ve && e === "scroll", q = ve ? te !== null ? te + "Capture" : null : te;
          ve = [];
          for (var D = Y, W; D !== null; ) {
            W = D;
            var se = W.stateNode;
            if (W.tag === 5 && se !== null && (W = se, q !== null && (se = En(D, q), se != null && ve.push(Un(D, se, W)))), it) break;
            D = D.return;
          }
          0 < ve.length && (te = new he(te, xe, null, n, re), ie.push({ event: te, listeners: ve }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (te = e === "mouseover" || e === "pointerover", he = e === "mouseout" || e === "pointerout", te && n !== Vt && (xe = n.relatedTarget || n.fromElement) && (Lr(xe) || xe[Jt])) break e;
          if ((he || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, he ? (xe = n.relatedTarget || n.toElement, he = Y, xe = xe ? Lr(xe) : null, xe !== null && (it = Nr(xe), xe !== it || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (he = null, xe = Y), he !== xe)) {
            if (ve = wl, se = "onMouseLeave", q = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (ve = Sl, se = "onPointerLeave", q = "onPointerEnter", D = "pointer"), it = he == null ? te : rn(he), W = xe == null ? te : rn(xe), te = new ve(se, D + "leave", he, n, re), te.target = it, te.relatedTarget = W, se = null, Lr(re) === Y && (ve = new ve(q, D + "enter", xe, n, re), ve.target = W, ve.relatedTarget = it, se = ve), it = se, he && xe) t: {
              for (ve = he, q = xe, D = 0, W = ve; W; W = en(W)) D++;
              for (W = 0, se = q; se; se = en(se)) W++;
              for (; 0 < D - W; ) ve = en(ve), D--;
              for (; 0 < W - D; ) q = en(q), W--;
              for (; D--; ) {
                if (ve === q || q !== null && ve === q.alternate) break t;
                ve = en(ve), q = en(q);
              }
              ve = null;
            }
            else ve = null;
            he !== null && Ql(ie, te, he, ve, !1), xe !== null && it !== null && Ql(ie, it, xe, ve, !0);
          }
        }
        e: {
          if (te = Y ? rn(Y) : window, he = te.nodeName && te.nodeName.toLowerCase(), he === "select" || he === "input" && te.type === "file") var ke = Yp;
          else if (Rl(te)) if (Nl) ke = Zp;
          else {
            ke = Xp;
            var Se = Kp;
          }
          else (he = te.nodeName) && he.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (ke = Qp);
          if (ke && (ke = ke(e, Y))) {
            Il(ie, ke, n, re);
            break e;
          }
          Se && Se(e, te, Y), e === "focusout" && (Se = te._wrapperState) && Se.controlled && te.type === "number" && X(te, "number", te.value);
        }
        switch (Se = Y ? rn(Y) : window, e) {
          case "focusin":
            (Rl(Se) || Se.contentEditable === "true") && (Zr = Se, ma = Y, jn = null);
            break;
          case "focusout":
            jn = ma = Zr = null;
            break;
          case "mousedown":
            ga = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ga = !1, Bl(ie, n, re);
            break;
          case "selectionchange":
            if (tm) break;
          case "keydown":
          case "keyup":
            Bl(ie, n, re);
        }
        var Ee;
        if (ca) e: {
          switch (e) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else Qr ? Al(e, n) && (Pe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (El && n.locale !== "ko" && (Qr || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && Qr && (Ee = xl()) : (mr = re, na = "value" in mr ? mr.value : mr.textContent, Qr = !0)), Se = ji(Y, Pe), 0 < Se.length && (Pe = new kl(Pe, e, null, n, re), ie.push({ event: Pe, listeners: Se }), Ee ? Pe.data = Ee : (Ee = Pl(n), Ee !== null && (Pe.data = Ee)))), (Ee = Fp ? Up(e, n) : Wp(e, n)) && (Y = ji(Y, "onBeforeInput"), 0 < Y.length && (re = new kl("onBeforeInput", "beforeinput", null, n, re), ie.push({ event: re, listeners: Y }), re.data = Ee));
      }
      Kl(ie, t);
    });
  }
  function Un(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ji(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, p = l.stateNode;
      l.tag === 5 && p !== null && (l = p, p = En(e, n), p != null && a.unshift(Un(e, p, l)), p = En(e, t), p != null && a.push(Un(e, p, l))), e = e.return;
    }
    return a;
  }
  function en(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ql(e, t, n, a, l) {
    for (var p = t._reactName, y = []; n !== null && n !== a; ) {
      var R = n, O = R.alternate, Y = R.stateNode;
      if (O !== null && O === a) break;
      R.tag === 5 && Y !== null && (R = Y, l ? (O = En(n, p), O != null && y.unshift(Un(n, O, R))) : l || (O = En(n, p), O != null && y.push(Un(n, O, R)))), n = n.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var om = /\r\n?/g, am = /\u0000|\uFFFD/g;
  function Zl(e) {
    return (typeof e == "string" ? e : "" + e).replace(om, `
`).replace(am, "");
  }
  function qi(e, t, n) {
    if (t = Zl(t), Zl(e) !== t && n) throw Error(i(425));
  }
  function Fi() {
  }
  var xa = null, va = null;
  function wa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ka = typeof setTimeout == "function" ? setTimeout : void 0, sm = typeof clearTimeout == "function" ? clearTimeout : void 0, Jl = typeof Promise == "function" ? Promise : void 0, lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jl < "u" ? function(e) {
    return Jl.resolve(null).then(e).catch(cm);
  } : ka;
  function cm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Sa(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (a === 0) {
          e.removeChild(l), On(t);
          return;
        }
        a--;
      } else n !== "$" && n !== "$?" && n !== "$!" || a++;
      n = l;
    } while (n);
    On(t);
  }
  function fr(e) {
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
  function ec(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var tn = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tn, Wn = "__reactProps$" + tn, Jt = "__reactContainer$" + tn, Ea = "__reactEvents$" + tn, dm = "__reactListeners$" + tn, um = "__reactHandles$" + tn;
  function Lr(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jt] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ec(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = ec(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Vn(e) {
    return e = e[Yt] || e[Jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function rn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ui(e) {
    return e[Wn] || null;
  }
  var Ca = [], nn = -1;
  function hr(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > nn || (e.current = Ca[nn], Ca[nn] = null, nn--);
  }
  function Ge(e, t) {
    nn++, Ca[nn] = e.current, e.current = t;
  }
  var _r = {}, ft = hr(_r), vt = hr(!1), Or = _r;
  function on(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _r;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t) return a.__reactInternalMemoizedMaskedChildContext;
    var l = {}, p;
    for (p in n) l[p] = t[p];
    return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function wt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wi() {
    Ke(vt), Ke(ft);
  }
  function tc(e, t, n) {
    if (ft.current !== _r) throw Error(i(168));
    Ge(ft, t), Ge(vt, n);
  }
  function rc(e, t, n) {
    var a = e.stateNode;
    if (t = t.childContextTypes, typeof a.getChildContext != "function") return n;
    a = a.getChildContext();
    for (var l in a) if (!(l in t)) throw Error(i(108, Le(e) || "Unknown", l));
    return F({}, n, a);
  }
  function Vi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _r, Or = ft.current, Ge(ft, e), Ge(vt, vt.current), !0;
  }
  function nc(e, t, n) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    n ? (e = rc(e, t, Or), a.__reactInternalMemoizedMergedChildContext = e, Ke(vt), Ke(ft), Ge(ft, e)) : Ke(vt), Ge(vt, n);
  }
  var er = null, Gi = !1, za = !1;
  function ic(e) {
    er === null ? er = [e] : er.push(e);
  }
  function pm(e) {
    Gi = !0, ic(e);
  }
  function br() {
    if (!za && er !== null) {
      za = !0;
      var e = 0, t = We;
      try {
        var n = er;
        for (We = 1; e < n.length; e++) {
          var a = n[e];
          do
            a = a(!0);
          while (a !== null);
        }
        er = null, Gi = !1;
      } catch (l) {
        throw er !== null && (er = er.slice(e + 1)), al(Ko, br), l;
      } finally {
        We = t, za = !1;
      }
    }
    return null;
  }
  var an = [], sn = 0, Yi = null, Ki = 0, Nt = [], Lt = 0, Tr = null, tr = 1, rr = "";
  function Dr(e, t) {
    an[sn++] = Ki, an[sn++] = Yi, Yi = e, Ki = t;
  }
  function oc(e, t, n) {
    Nt[Lt++] = tr, Nt[Lt++] = rr, Nt[Lt++] = Tr, Tr = e;
    var a = tr;
    e = rr;
    var l = 32 - $t(a) - 1;
    a &= ~(1 << l), n += 1;
    var p = 32 - $t(t) + l;
    if (30 < p) {
      var y = l - l % 5;
      p = (a & (1 << y) - 1).toString(32), a >>= y, l -= y, tr = 1 << 32 - $t(t) + l | n << l | a, rr = p + e;
    } else tr = 1 << p | n << l | a, rr = e;
  }
  function Aa(e) {
    e.return !== null && (Dr(e, 1), oc(e, 1, 0));
  }
  function Pa(e) {
    for (; e === Yi; ) Yi = an[--sn], an[sn] = null, Ki = an[--sn], an[sn] = null;
    for (; e === Tr; ) Tr = Nt[--Lt], Nt[Lt] = null, rr = Nt[--Lt], Nt[Lt] = null, tr = Nt[--Lt], Nt[Lt] = null;
  }
  var Pt = null, Rt = null, Ze = !1, jt = null;
  function ac(e, t) {
    var n = Ht(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, Rt = fr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, Rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tr !== null ? { id: tr, overflow: rr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ht(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pt = e, Rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ra(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ia(e) {
    if (Ze) {
      var t = Rt;
      if (t) {
        var n = t;
        if (!sc(e, t)) {
          if (Ra(e)) throw Error(i(418));
          t = fr(n.nextSibling);
          var a = Pt;
          t && sc(e, t) ? ac(a, n) : (e.flags = e.flags & -4097 | 2, Ze = !1, Pt = e);
        }
      } else {
        if (Ra(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ze = !1, Pt = e;
      }
    }
  }
  function lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Pt = e;
  }
  function Xi(e) {
    if (e !== Pt) return !1;
    if (!Ze) return lc(e), Ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wa(e.type, e.memoizedProps)), t && (t = Rt)) {
      if (Ra(e)) throw cc(), Error(i(418));
      for (; t; ) ac(e, t), t = fr(t.nextSibling);
    }
    if (lc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Rt = fr(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Rt = null;
      }
    } else Rt = Pt ? fr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cc() {
    for (var e = Rt; e; ) e = fr(e.nextSibling);
  }
  function ln() {
    Rt = Pt = null, Ze = !1;
  }
  function Na(e) {
    jt === null ? jt = [e] : jt.push(e);
  }
  var mm = g.ReactCurrentBatchConfig;
  function Gn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var a = n.stateNode;
        }
        if (!a) throw Error(i(147, e));
        var l = a, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(y) {
          var R = l.refs;
          y === null ? delete R[p] : R[p] = y;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Qi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function dc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function uc(e) {
    function t(q, D) {
      if (e) {
        var W = q.deletions;
        W === null ? (q.deletions = [D], q.flags |= 16) : W.push(D);
      }
    }
    function n(q, D) {
      if (!e) return null;
      for (; D !== null; ) t(q, D), D = D.sibling;
      return null;
    }
    function a(q, D) {
      for (q = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? q.set(D.key, D) : q.set(D.index, D), D = D.sibling;
      return q;
    }
    function l(q, D) {
      return q = Cr(q, D), q.index = 0, q.sibling = null, q;
    }
    function p(q, D, W) {
      return q.index = W, e ? (W = q.alternate, W !== null ? (W = W.index, W < D ? (q.flags |= 2, D) : W) : (q.flags |= 2, D)) : (q.flags |= 1048576, D);
    }
    function y(q) {
      return e && q.alternate === null && (q.flags |= 2), q;
    }
    function R(q, D, W, se) {
      return D === null || D.tag !== 6 ? (D = ks(W, q.mode, se), D.return = q, D) : (D = l(D, W), D.return = q, D);
    }
    function O(q, D, W, se) {
      var ke = W.type;
      return ke === A ? re(q, D, W.props.children, se, W.key) : D !== null && (D.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === ge && dc(ke) === D.type) ? (se = l(D, W.props), se.ref = Gn(q, D, W), se.return = q, se) : (se = wo(W.type, W.key, W.props, null, q.mode, se), se.ref = Gn(q, D, W), se.return = q, se);
    }
    function Y(q, D, W, se) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== W.containerInfo || D.stateNode.implementation !== W.implementation ? (D = Ss(W, q.mode, se), D.return = q, D) : (D = l(D, W.children || []), D.return = q, D);
    }
    function re(q, D, W, se, ke) {
      return D === null || D.tag !== 7 ? (D = Ur(W, q.mode, se, ke), D.return = q, D) : (D = l(D, W), D.return = q, D);
    }
    function ie(q, D, W) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = ks("" + D, q.mode, W), D.return = q, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case v:
            return W = wo(D.type, D.key, D.props, null, q.mode, W), W.ref = Gn(q, null, D), W.return = q, W;
          case E:
            return D = Ss(D, q.mode, W), D.return = q, D;
          case ge:
            var se = D._init;
            return ie(q, se(D._payload), W);
        }
        if (ce(D) || ue(D)) return D = Ur(D, q.mode, W, null), D.return = q, D;
        Qi(q, D);
      }
      return null;
    }
    function te(q, D, W, se) {
      var ke = D !== null ? D.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return ke !== null ? null : R(q, D, "" + W, se);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case v:
            return W.key === ke ? O(q, D, W, se) : null;
          case E:
            return W.key === ke ? Y(q, D, W, se) : null;
          case ge:
            return ke = W._init, te(
              q,
              D,
              ke(W._payload),
              se
            );
        }
        if (ce(W) || ue(W)) return ke !== null ? null : re(q, D, W, se, null);
        Qi(q, W);
      }
      return null;
    }
    function he(q, D, W, se, ke) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return q = q.get(W) || null, R(D, q, "" + se, ke);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case v:
            return q = q.get(se.key === null ? W : se.key) || null, O(D, q, se, ke);
          case E:
            return q = q.get(se.key === null ? W : se.key) || null, Y(D, q, se, ke);
          case ge:
            var Se = se._init;
            return he(q, D, W, Se(se._payload), ke);
        }
        if (ce(se) || ue(se)) return q = q.get(W) || null, re(D, q, se, ke, null);
        Qi(D, se);
      }
      return null;
    }
    function xe(q, D, W, se) {
      for (var ke = null, Se = null, Ee = D, Pe = D = 0, ut = null; Ee !== null && Pe < W.length; Pe++) {
        Ee.index > Pe ? (ut = Ee, Ee = null) : ut = Ee.sibling;
        var je = te(q, Ee, W[Pe], se);
        if (je === null) {
          Ee === null && (Ee = ut);
          break;
        }
        e && Ee && je.alternate === null && t(q, Ee), D = p(je, D, Pe), Se === null ? ke = je : Se.sibling = je, Se = je, Ee = ut;
      }
      if (Pe === W.length) return n(q, Ee), Ze && Dr(q, Pe), ke;
      if (Ee === null) {
        for (; Pe < W.length; Pe++) Ee = ie(q, W[Pe], se), Ee !== null && (D = p(Ee, D, Pe), Se === null ? ke = Ee : Se.sibling = Ee, Se = Ee);
        return Ze && Dr(q, Pe), ke;
      }
      for (Ee = a(q, Ee); Pe < W.length; Pe++) ut = he(Ee, q, Pe, W[Pe], se), ut !== null && (e && ut.alternate !== null && Ee.delete(ut.key === null ? Pe : ut.key), D = p(ut, D, Pe), Se === null ? ke = ut : Se.sibling = ut, Se = ut);
      return e && Ee.forEach(function(zr) {
        return t(q, zr);
      }), Ze && Dr(q, Pe), ke;
    }
    function ve(q, D, W, se) {
      var ke = ue(W);
      if (typeof ke != "function") throw Error(i(150));
      if (W = ke.call(W), W == null) throw Error(i(151));
      for (var Se = ke = null, Ee = D, Pe = D = 0, ut = null, je = W.next(); Ee !== null && !je.done; Pe++, je = W.next()) {
        Ee.index > Pe ? (ut = Ee, Ee = null) : ut = Ee.sibling;
        var zr = te(q, Ee, je.value, se);
        if (zr === null) {
          Ee === null && (Ee = ut);
          break;
        }
        e && Ee && zr.alternate === null && t(q, Ee), D = p(zr, D, Pe), Se === null ? ke = zr : Se.sibling = zr, Se = zr, Ee = ut;
      }
      if (je.done) return n(
        q,
        Ee
      ), Ze && Dr(q, Pe), ke;
      if (Ee === null) {
        for (; !je.done; Pe++, je = W.next()) je = ie(q, je.value, se), je !== null && (D = p(je, D, Pe), Se === null ? ke = je : Se.sibling = je, Se = je);
        return Ze && Dr(q, Pe), ke;
      }
      for (Ee = a(q, Ee); !je.done; Pe++, je = W.next()) je = he(Ee, q, Pe, je.value, se), je !== null && (e && je.alternate !== null && Ee.delete(je.key === null ? Pe : je.key), D = p(je, D, Pe), Se === null ? ke = je : Se.sibling = je, Se = je);
      return e && Ee.forEach(function(Vm) {
        return t(q, Vm);
      }), Ze && Dr(q, Pe), ke;
    }
    function it(q, D, W, se) {
      if (typeof W == "object" && W !== null && W.type === A && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case v:
            e: {
              for (var ke = W.key, Se = D; Se !== null; ) {
                if (Se.key === ke) {
                  if (ke = W.type, ke === A) {
                    if (Se.tag === 7) {
                      n(q, Se.sibling), D = l(Se, W.props.children), D.return = q, q = D;
                      break e;
                    }
                  } else if (Se.elementType === ke || typeof ke == "object" && ke !== null && ke.$$typeof === ge && dc(ke) === Se.type) {
                    n(q, Se.sibling), D = l(Se, W.props), D.ref = Gn(q, Se, W), D.return = q, q = D;
                    break e;
                  }
                  n(q, Se);
                  break;
                } else t(q, Se);
                Se = Se.sibling;
              }
              W.type === A ? (D = Ur(W.props.children, q.mode, se, W.key), D.return = q, q = D) : (se = wo(W.type, W.key, W.props, null, q.mode, se), se.ref = Gn(q, D, W), se.return = q, q = se);
            }
            return y(q);
          case E:
            e: {
              for (Se = W.key; D !== null; ) {
                if (D.key === Se) if (D.tag === 4 && D.stateNode.containerInfo === W.containerInfo && D.stateNode.implementation === W.implementation) {
                  n(q, D.sibling), D = l(D, W.children || []), D.return = q, q = D;
                  break e;
                } else {
                  n(q, D);
                  break;
                }
                else t(q, D);
                D = D.sibling;
              }
              D = Ss(W, q.mode, se), D.return = q, q = D;
            }
            return y(q);
          case ge:
            return Se = W._init, it(q, D, Se(W._payload), se);
        }
        if (ce(W)) return xe(q, D, W, se);
        if (ue(W)) return ve(q, D, W, se);
        Qi(q, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, D !== null && D.tag === 6 ? (n(q, D.sibling), D = l(D, W), D.return = q, q = D) : (n(q, D), D = ks(W, q.mode, se), D.return = q, q = D), y(q)) : n(q, D);
    }
    return it;
  }
  var cn = uc(!0), pc = uc(!1), Zi = hr(null), Ji = null, dn = null, La = null;
  function Oa() {
    La = dn = Ji = null;
  }
  function Ta(e) {
    var t = Zi.current;
    Ke(Zi), e._currentValue = t;
  }
  function Da(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function un(e, t) {
    Ji = e, La = dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (kt = !0), e.firstContext = null);
  }
  function Ot(e) {
    var t = e._currentValue;
    if (La !== e) if (e = { context: e, memoizedValue: t, next: null }, dn === null) {
      if (Ji === null) throw Error(i(308));
      dn = e, Ji.dependencies = { lanes: 0, firstContext: e };
    } else dn = dn.next = e;
    return t;
  }
  var Hr = null;
  function Ha(e) {
    Hr === null ? Hr = [e] : Hr.push(e);
  }
  function mc(e, t, n, a) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Ha(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nr(e, a);
  }
  function nr(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var yr = !1;
  function Ma(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function gc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ir(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xr(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, $e & 2) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, nr(e, n);
    }
    return l = a.interleaved, l === null ? (t.next = t, Ha(a)) : (t.next = l.next, l.next = t), a.interleaved = t, nr(e, n);
  }
  function eo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Zo(e, n);
    }
  }
  function fc(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, p = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var y = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          p === null ? l = p = y : p = p.next = y, n = n.next;
        } while (n !== null);
        p === null ? l = p = t : p = p.next = t;
      } else l = p = t;
      n = { baseState: a.baseState, firstBaseUpdate: l, lastBaseUpdate: p, shared: a.shared, effects: a.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function to(e, t, n, a) {
    var l = e.updateQueue;
    yr = !1;
    var p = l.firstBaseUpdate, y = l.lastBaseUpdate, R = l.shared.pending;
    if (R !== null) {
      l.shared.pending = null;
      var O = R, Y = O.next;
      O.next = null, y === null ? p = Y : y.next = Y, y = O;
      var re = e.alternate;
      re !== null && (re = re.updateQueue, R = re.lastBaseUpdate, R !== y && (R === null ? re.firstBaseUpdate = Y : R.next = Y, re.lastBaseUpdate = O));
    }
    if (p !== null) {
      var ie = l.baseState;
      y = 0, re = Y = O = null, R = p;
      do {
        var te = R.lane, he = R.eventTime;
        if ((a & te) === te) {
          re !== null && (re = re.next = {
            eventTime: he,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var xe = e, ve = R;
            switch (te = t, he = n, ve.tag) {
              case 1:
                if (xe = ve.payload, typeof xe == "function") {
                  ie = xe.call(he, ie, te);
                  break e;
                }
                ie = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = ve.payload, te = typeof xe == "function" ? xe.call(he, ie, te) : xe, te == null) break e;
                ie = F({}, ie, te);
                break e;
              case 2:
                yr = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (e.flags |= 64, te = l.effects, te === null ? l.effects = [R] : te.push(R));
        } else he = { eventTime: he, lane: te, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, re === null ? (Y = re = he, O = ie) : re = re.next = he, y |= te;
        if (R = R.next, R === null) {
          if (R = l.shared.pending, R === null) break;
          te = R, R = te.next, te.next = null, l.lastBaseUpdate = te, l.shared.pending = null;
        }
      } while (!0);
      if (re === null && (O = ie), l.baseState = O, l.firstBaseUpdate = Y, l.lastBaseUpdate = re, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          y |= l.lane, l = l.next;
        while (l !== t);
      } else p === null && (l.shared.lanes = 0);
      Br |= y, e.lanes = y, e.memoizedState = ie;
    }
  }
  function hc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var a = e[t], l = a.callback;
      if (l !== null) {
        if (a.callback = null, a = n, typeof l != "function") throw Error(i(191, l));
        l.call(a);
      }
    }
  }
  var Yn = {}, Kt = hr(Yn), Kn = hr(Yn), Xn = hr(Yn);
  function Mr(e) {
    if (e === Yn) throw Error(i(174));
    return e;
  }
  function $a(e, t) {
    switch (Ge(Xn, t), Ge(Kn, e), Ge(Kt, Yn), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lt(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lt(t, e);
    }
    Ke(Kt), Ge(Kt, t);
  }
  function pn() {
    Ke(Kt), Ke(Kn), Ke(Xn);
  }
  function _c(e) {
    Mr(Xn.current);
    var t = Mr(Kt.current), n = lt(t, e.type);
    t !== n && (Ge(Kn, e), Ge(Kt, n));
  }
  function Ba(e) {
    Kn.current === e && (Ke(Kt), Ke(Kn));
  }
  var Je = hr(0);
  function ro(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
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
  var ja = [];
  function qa() {
    for (var e = 0; e < ja.length; e++) ja[e]._workInProgressVersionPrimary = null;
    ja.length = 0;
  }
  var no = g.ReactCurrentDispatcher, Fa = g.ReactCurrentBatchConfig, $r = 0, et = null, at = null, ct = null, io = !1, Qn = !1, Zn = 0, gm = 0;
  function ht() {
    throw Error(i(321));
  }
  function Ua(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function Wa(e, t, n, a, l, p) {
    if ($r = p, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, no.current = e === null || e.memoizedState === null ? bm : ym, e = n(a, l), Qn) {
      p = 0;
      do {
        if (Qn = !1, Zn = 0, 25 <= p) throw Error(i(301));
        p += 1, ct = at = null, t.updateQueue = null, no.current = xm, e = n(a, l);
      } while (Qn);
    }
    if (no.current = so, t = at !== null && at.next !== null, $r = 0, ct = at = et = null, io = !1, t) throw Error(i(300));
    return e;
  }
  function Va() {
    var e = Zn !== 0;
    return Zn = 0, e;
  }
  function Xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ct === null ? et.memoizedState = ct = e : ct = ct.next = e, ct;
  }
  function Tt() {
    if (at === null) {
      var e = et.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = at.next;
    var t = ct === null ? et.memoizedState : ct.next;
    if (t !== null) ct = t, at = e;
    else {
      if (e === null) throw Error(i(310));
      at = e, e = { memoizedState: at.memoizedState, baseState: at.baseState, baseQueue: at.baseQueue, queue: at.queue, next: null }, ct === null ? et.memoizedState = ct = e : ct = ct.next = e;
    }
    return ct;
  }
  function Jn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ga(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var a = at, l = a.baseQueue, p = n.pending;
    if (p !== null) {
      if (l !== null) {
        var y = l.next;
        l.next = p.next, p.next = y;
      }
      a.baseQueue = l = p, n.pending = null;
    }
    if (l !== null) {
      p = l.next, a = a.baseState;
      var R = y = null, O = null, Y = p;
      do {
        var re = Y.lane;
        if (($r & re) === re) O !== null && (O = O.next = { lane: 0, action: Y.action, hasEagerState: Y.hasEagerState, eagerState: Y.eagerState, next: null }), a = Y.hasEagerState ? Y.eagerState : e(a, Y.action);
        else {
          var ie = {
            lane: re,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          };
          O === null ? (R = O = ie, y = a) : O = O.next = ie, et.lanes |= re, Br |= re;
        }
        Y = Y.next;
      } while (Y !== null && Y !== p);
      O === null ? y = a : O.next = R, Bt(a, t.memoizedState) || (kt = !0), t.memoizedState = a, t.baseState = y, t.baseQueue = O, n.lastRenderedState = a;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        p = l.lane, et.lanes |= p, Br |= p, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ya(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, p = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var y = l = l.next;
      do
        p = e(p, y.action), y = y.next;
      while (y !== l);
      Bt(p, t.memoizedState) || (kt = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), n.lastRenderedState = p;
    }
    return [p, a];
  }
  function bc() {
  }
  function yc(e, t) {
    var n = et, a = Tt(), l = t(), p = !Bt(a.memoizedState, l);
    if (p && (a.memoizedState = l, kt = !0), a = a.queue, Ka(wc.bind(null, n, a, e), [e]), a.getSnapshot !== t || p || ct !== null && ct.memoizedState.tag & 1) {
      if (n.flags |= 2048, ei(9, vc.bind(null, n, a, l, t), void 0, null), dt === null) throw Error(i(349));
      $r & 30 || xc(n, t, l);
    }
    return l;
  }
  function xc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vc(e, t, n, a) {
    t.value = n, t.getSnapshot = a, kc(t) && Sc(e);
  }
  function wc(e, t, n) {
    return n(function() {
      kc(t) && Sc(e);
    });
  }
  function kc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Bt(e, n);
    } catch {
      return !0;
    }
  }
  function Sc(e) {
    var t = nr(e, 1);
    t !== null && Wt(t, e, 1, -1);
  }
  function Ec(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = _m.bind(null, et, e), [t.memoizedState, e];
  }
  function ei(e, t, n, a) {
    return e = { tag: e, create: t, destroy: n, deps: a, next: null }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e)), e;
  }
  function Cc() {
    return Tt().memoizedState;
  }
  function oo(e, t, n, a) {
    var l = Xt();
    et.flags |= e, l.memoizedState = ei(1 | t, n, void 0, a === void 0 ? null : a);
  }
  function ao(e, t, n, a) {
    var l = Tt();
    a = a === void 0 ? null : a;
    var p = void 0;
    if (at !== null) {
      var y = at.memoizedState;
      if (p = y.destroy, a !== null && Ua(a, y.deps)) {
        l.memoizedState = ei(t, n, p, a);
        return;
      }
    }
    et.flags |= e, l.memoizedState = ei(1 | t, n, p, a);
  }
  function zc(e, t) {
    return oo(8390656, 8, e, t);
  }
  function Ka(e, t) {
    return ao(2048, 8, e, t);
  }
  function Ac(e, t) {
    return ao(4, 2, e, t);
  }
  function Pc(e, t) {
    return ao(4, 4, e, t);
  }
  function Rc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ic(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ao(4, 4, Rc.bind(null, t, e), n);
  }
  function Xa() {
  }
  function Nc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return a !== null && t !== null && Ua(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Lc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return a !== null && t !== null && Ua(t, a[1]) ? a[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Oc(e, t, n) {
    return $r & 21 ? (Bt(n, t) || (n = dl(), et.lanes |= n, Br |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n);
  }
  function fm(e, t) {
    var n = We;
    We = n !== 0 && 4 > n ? n : 4, e(!0);
    var a = Fa.transition;
    Fa.transition = {};
    try {
      e(!1), t();
    } finally {
      We = n, Fa.transition = a;
    }
  }
  function Tc() {
    return Tt().memoizedState;
  }
  function hm(e, t, n) {
    var a = Sr(e);
    if (n = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null }, Dc(e)) Hc(t, n);
    else if (n = mc(e, t, n, a), n !== null) {
      var l = xt();
      Wt(n, e, a, l), Mc(n, t, a);
    }
  }
  function _m(e, t, n) {
    var a = Sr(e), l = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Dc(e)) Hc(t, l);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var y = t.lastRenderedState, R = p(y, n);
        if (l.hasEagerState = !0, l.eagerState = R, Bt(R, y)) {
          var O = t.interleaved;
          O === null ? (l.next = l, Ha(t)) : (l.next = O.next, O.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = mc(e, t, l, a), n !== null && (l = xt(), Wt(n, e, a, l), Mc(n, t, a));
    }
  }
  function Dc(e) {
    var t = e.alternate;
    return e === et || t !== null && t === et;
  }
  function Hc(e, t) {
    Qn = io = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Mc(e, t, n) {
    if (n & 4194240) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Zo(e, n);
    }
  }
  var so = { readContext: Ot, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, bm = { readContext: Ot, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Ot, useEffect: zc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, oo(
      4194308,
      4,
      Rc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return oo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return oo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var a = Xt();
    return t = n !== void 0 ? n(t) : t, a.memoizedState = a.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, a.queue = e, e = e.dispatch = hm.bind(null, et, e), [a.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ec, useDebugValue: Xa, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = Ec(!1), t = e[0];
    return e = fm.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var a = et, l = Xt();
    if (Ze) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), dt === null) throw Error(i(349));
      $r & 30 || xc(a, t, n);
    }
    l.memoizedState = n;
    var p = { value: n, getSnapshot: t };
    return l.queue = p, zc(wc.bind(
      null,
      a,
      p,
      e
    ), [e]), a.flags |= 2048, ei(9, vc.bind(null, a, p, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = dt.identifierPrefix;
    if (Ze) {
      var n = rr, a = tr;
      n = (a & ~(1 << 32 - $t(a) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = gm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ym = {
    readContext: Ot,
    useCallback: Nc,
    useContext: Ot,
    useEffect: Ka,
    useImperativeHandle: Ic,
    useInsertionEffect: Ac,
    useLayoutEffect: Pc,
    useMemo: Lc,
    useReducer: Ga,
    useRef: Cc,
    useState: function() {
      return Ga(Jn);
    },
    useDebugValue: Xa,
    useDeferredValue: function(e) {
      var t = Tt();
      return Oc(t, at.memoizedState, e);
    },
    useTransition: function() {
      var e = Ga(Jn)[0], t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: bc,
    useSyncExternalStore: yc,
    useId: Tc,
    unstable_isNewReconciler: !1
  }, xm = { readContext: Ot, useCallback: Nc, useContext: Ot, useEffect: Ka, useImperativeHandle: Ic, useInsertionEffect: Ac, useLayoutEffect: Pc, useMemo: Lc, useReducer: Ya, useRef: Cc, useState: function() {
    return Ya(Jn);
  }, useDebugValue: Xa, useDeferredValue: function(e) {
    var t = Tt();
    return at === null ? t.memoizedState = e : Oc(t, at.memoizedState, e);
  }, useTransition: function() {
    var e = Ya(Jn)[0], t = Tt().memoizedState;
    return [e, t];
  }, useMutableSource: bc, useSyncExternalStore: yc, useId: Tc, unstable_isNewReconciler: !1 };
  function qt(e, t) {
    if (e && e.defaultProps) {
      t = F({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Qa(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : F({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var lo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nr(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var a = xt(), l = Sr(e), p = ir(a, l);
    p.payload = t, n != null && (p.callback = n), t = xr(e, p, l), t !== null && (Wt(t, e, l, a), eo(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var a = xt(), l = Sr(e), p = ir(a, l);
    p.tag = 1, p.payload = t, n != null && (p.callback = n), t = xr(e, p, l), t !== null && (Wt(t, e, l, a), eo(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = xt(), a = Sr(e), l = ir(n, a);
    l.tag = 2, t != null && (l.callback = t), t = xr(e, l, a), t !== null && (Wt(t, e, a, n), eo(t, e, a));
  } };
  function $c(e, t, n, a, l, p, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, p, y) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, a) || !Bn(l, p) : !0;
  }
  function Bc(e, t, n) {
    var a = !1, l = _r, p = t.contextType;
    return typeof p == "object" && p !== null ? p = Ot(p) : (l = wt(t) ? Or : ft.current, a = t.contextTypes, p = (a = a != null) ? on(e, l) : _r), t = new t(n, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = lo, e.stateNode = t, t._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function jc(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && lo.enqueueReplaceState(t, t.state, null);
  }
  function Za(e, t, n, a) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ma(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? l.context = Ot(p) : (p = wt(t) ? Or : ft.current, l.context = on(e, p)), l.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (Qa(e, t, p, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && lo.enqueueReplaceState(l, l.state, null), to(e, n, l, a), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function mn(e, t) {
    try {
      var n = "", a = t;
      do
        n += ye(a), a = a.return;
      while (a);
      var l = n;
    } catch (p) {
      l = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Ja(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function es(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var vm = typeof WeakMap == "function" ? WeakMap : Map;
  function qc(e, t, n) {
    n = ir(-1, n), n.tag = 3, n.payload = { element: null };
    var a = t.value;
    return n.callback = function() {
      ho || (ho = !0, fs = a), es(e, t);
    }, n;
  }
  function Fc(e, t, n) {
    n = ir(-1, n), n.tag = 3;
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var l = t.value;
      n.payload = function() {
        return a(l);
      }, n.callback = function() {
        es(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (n.callback = function() {
      es(e, t), typeof a != "function" && (wr === null ? wr = /* @__PURE__ */ new Set([this]) : wr.add(this));
      var y = t.stack;
      this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
    }), n;
  }
  function Uc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new vm();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (l.add(n), e = Tm.bind(null, e, t, n), t.then(e, e));
  }
  function Wc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vc(e, t, n, a, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ir(-1, 1), t.tag = 2, xr(n, t, 1))), n.lanes |= 1), e);
  }
  var wm = g.ReactCurrentOwner, kt = !1;
  function yt(e, t, n, a) {
    t.child = e === null ? pc(t, null, n, a) : cn(t, e.child, n, a);
  }
  function Gc(e, t, n, a, l) {
    n = n.render;
    var p = t.ref;
    return un(t, l), a = Wa(e, t, n, a, p, l), n = Va(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, or(e, t, l)) : (Ze && n && Aa(t), t.flags |= 1, yt(e, t, a, l), t.child);
  }
  function Yc(e, t, n, a, l) {
    if (e === null) {
      var p = n.type;
      return typeof p == "function" && !ws(p) && p.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = p, Kc(e, t, p, a, l)) : (e = wo(n.type, null, a, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, !(e.lanes & l)) {
      var y = p.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Bn, n(y, a) && e.ref === t.ref) return or(e, t, l);
    }
    return t.flags |= 1, e = Cr(p, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Kc(e, t, n, a, l) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Bn(p, a) && e.ref === t.ref) if (kt = !1, t.pendingProps = a = p, (e.lanes & l) !== 0) e.flags & 131072 && (kt = !0);
      else return t.lanes = e.lanes, or(e, t, l);
    }
    return ts(e, t, n, a, l);
  }
  function Xc(e, t, n) {
    var a = t.pendingProps, l = a.children, p = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(fn, It), It |= n;
    else {
      if (!(n & 1073741824)) return e = p !== null ? p.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ge(fn, It), It |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, a = p !== null ? p.baseLanes : n, Ge(fn, It), It |= a;
    }
    else p !== null ? (a = p.baseLanes | n, t.memoizedState = null) : a = n, Ge(fn, It), It |= a;
    return yt(e, t, l, n), t.child;
  }
  function Qc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ts(e, t, n, a, l) {
    var p = wt(n) ? Or : ft.current;
    return p = on(t, p), un(t, l), n = Wa(e, t, n, a, p, l), a = Va(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, or(e, t, l)) : (Ze && a && Aa(t), t.flags |= 1, yt(e, t, n, l), t.child);
  }
  function Zc(e, t, n, a, l) {
    if (wt(n)) {
      var p = !0;
      Vi(t);
    } else p = !1;
    if (un(t, l), t.stateNode === null) uo(e, t), Bc(t, n, a), Za(t, n, a, l), a = !0;
    else if (e === null) {
      var y = t.stateNode, R = t.memoizedProps;
      y.props = R;
      var O = y.context, Y = n.contextType;
      typeof Y == "object" && Y !== null ? Y = Ot(Y) : (Y = wt(n) ? Or : ft.current, Y = on(t, Y));
      var re = n.getDerivedStateFromProps, ie = typeof re == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      ie || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (R !== a || O !== Y) && jc(t, y, a, Y), yr = !1;
      var te = t.memoizedState;
      y.state = te, to(t, a, y, l), O = t.memoizedState, R !== a || te !== O || vt.current || yr ? (typeof re == "function" && (Qa(t, n, re, a), O = t.memoizedState), (R = yr || $c(t, n, R, a, te, O, Y)) ? (ie || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = O), y.props = a, y.state = O, y.context = Y, a = R) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      y = t.stateNode, gc(e, t), R = t.memoizedProps, Y = t.type === t.elementType ? R : qt(t.type, R), y.props = Y, ie = t.pendingProps, te = y.context, O = n.contextType, typeof O == "object" && O !== null ? O = Ot(O) : (O = wt(n) ? Or : ft.current, O = on(t, O));
      var he = n.getDerivedStateFromProps;
      (re = typeof he == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (R !== ie || te !== O) && jc(t, y, a, O), yr = !1, te = t.memoizedState, y.state = te, to(t, a, y, l);
      var xe = t.memoizedState;
      R !== ie || te !== xe || vt.current || yr ? (typeof he == "function" && (Qa(t, n, he, a), xe = t.memoizedState), (Y = yr || $c(t, n, Y, a, te, xe, O) || !1) ? (re || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(a, xe, O), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(a, xe, O)), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || R === e.memoizedProps && te === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || R === e.memoizedProps && te === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = xe), y.props = a, y.state = xe, y.context = O, a = Y) : (typeof y.componentDidUpdate != "function" || R === e.memoizedProps && te === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || R === e.memoizedProps && te === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return rs(e, t, n, a, p, l);
  }
  function rs(e, t, n, a, l, p) {
    Qc(e, t);
    var y = (t.flags & 128) !== 0;
    if (!a && !y) return l && nc(t, n, !1), or(e, t, p);
    a = t.stateNode, wm.current = t;
    var R = y && typeof n.getDerivedStateFromError != "function" ? null : a.render();
    return t.flags |= 1, e !== null && y ? (t.child = cn(t, e.child, null, p), t.child = cn(t, null, R, p)) : yt(e, t, R, p), t.memoizedState = a.state, l && nc(t, n, !0), t.child;
  }
  function Jc(e) {
    var t = e.stateNode;
    t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), $a(e, t.containerInfo);
  }
  function ed(e, t, n, a, l) {
    return ln(), Na(l), t.flags |= 256, yt(e, t, n, a), t.child;
  }
  var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
  function is(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function td(e, t, n) {
    var a = t.pendingProps, l = Je.current, p = !1, y = (t.flags & 128) !== 0, R;
    if ((R = y) || (R = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), R ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ge(Je, l & 1), e === null)
      return Ia(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (y = a.children, e = a.fallback, p ? (a = t.mode, p = t.child, y = { mode: "hidden", children: y }, !(a & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = y) : p = ko(y, a, 0, null), e = Ur(e, a, n, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = is(n), t.memoizedState = ns, e) : os(t, y));
    if (l = e.memoizedState, l !== null && (R = l.dehydrated, R !== null)) return km(e, t, y, a, R, l, n);
    if (p) {
      p = a.fallback, y = t.mode, l = e.child, R = l.sibling;
      var O = { mode: "hidden", children: a.children };
      return !(y & 1) && t.child !== l ? (a = t.child, a.childLanes = 0, a.pendingProps = O, t.deletions = null) : (a = Cr(l, O), a.subtreeFlags = l.subtreeFlags & 14680064), R !== null ? p = Cr(R, p) : (p = Ur(p, y, n, null), p.flags |= 2), p.return = t, a.return = t, a.sibling = p, t.child = a, a = p, p = t.child, y = e.child.memoizedState, y = y === null ? is(n) : { baseLanes: y.baseLanes | n, cachePool: null, transitions: y.transitions }, p.memoizedState = y, p.childLanes = e.childLanes & ~n, t.memoizedState = ns, a;
    }
    return p = e.child, e = p.sibling, a = Cr(p, { mode: "visible", children: a.children }), !(t.mode & 1) && (a.lanes = n), a.return = t, a.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a;
  }
  function os(e, t) {
    return t = ko({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function co(e, t, n, a) {
    return a !== null && Na(a), cn(t, e.child, null, n), e = os(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function km(e, t, n, a, l, p, y) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, a = Ja(Error(i(422))), co(e, t, y, a)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = a.fallback, l = t.mode, a = ko({ mode: "visible", children: a.children }, l, 0, null), p = Ur(p, l, y, null), p.flags |= 2, a.return = t, p.return = t, a.sibling = p, t.child = a, t.mode & 1 && cn(t, e.child, null, y), t.child.memoizedState = is(y), t.memoizedState = ns, p);
    if (!(t.mode & 1)) return co(e, t, y, null);
    if (l.data === "$!") {
      if (a = l.nextSibling && l.nextSibling.dataset, a) var R = a.dgst;
      return a = R, p = Error(i(419)), a = Ja(p, a, void 0), co(e, t, y, a);
    }
    if (R = (y & e.childLanes) !== 0, kt || R) {
      if (a = dt, a !== null) {
        switch (y & -y) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (a.suspendedLanes | y) ? 0 : l, l !== 0 && l !== p.retryLane && (p.retryLane = l, nr(e, l), Wt(a, e, l, -1));
      }
      return vs(), a = Ja(Error(i(421))), co(e, t, y, a);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dm.bind(null, e), l._reactRetry = t, null) : (e = p.treeContext, Rt = fr(l.nextSibling), Pt = t, Ze = !0, jt = null, e !== null && (Nt[Lt++] = tr, Nt[Lt++] = rr, Nt[Lt++] = Tr, tr = e.id, rr = e.overflow, Tr = t), t = os(t, a.children), t.flags |= 4096, t);
  }
  function rd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Da(e.return, t, n);
  }
  function as(e, t, n, a, l) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: l } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = a, p.tail = n, p.tailMode = l);
  }
  function nd(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, p = a.tail;
    if (yt(e, t, a.children, n), a = Je.current, a & 2) a = a & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rd(e, n, t);
        else if (e.tag === 19) rd(e, n, t);
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
      a &= 1;
    }
    if (Ge(Je, a), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ro(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), as(t, !1, l, n, p);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && ro(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        as(t, !0, n, null, p);
        break;
      case "together":
        as(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function uo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function or(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Br |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Cr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Sm(e, t, n) {
    switch (t.tag) {
      case 3:
        Jc(t), ln();
        break;
      case 5:
        _c(t);
        break;
      case 1:
        wt(t.type) && Vi(t);
        break;
      case 4:
        $a(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context, l = t.memoizedProps.value;
        Ge(Zi, a._currentValue), a._currentValue = l;
        break;
      case 13:
        if (a = t.memoizedState, a !== null)
          return a.dehydrated !== null ? (Ge(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? td(e, t, n) : (Ge(Je, Je.current & 1), e = or(e, t, n), e !== null ? e.sibling : null);
        Ge(Je, Je.current & 1);
        break;
      case 19:
        if (a = (n & t.childLanes) !== 0, e.flags & 128) {
          if (a) return nd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ge(Je, Je.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Xc(e, t, n);
    }
    return or(e, t, n);
  }
  var id, ss, od, ad;
  id = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ss = function() {
  }, od = function(e, t, n, a) {
    var l = e.memoizedProps;
    if (l !== a) {
      e = t.stateNode, Mr(Kt.current);
      var p = null;
      switch (n) {
        case "input":
          l = Ue(e, l), a = Ue(e, a), p = [];
          break;
        case "select":
          l = F({}, l, { value: void 0 }), a = F({}, a, { value: void 0 }), p = [];
          break;
        case "textarea":
          l = Ce(e, l), a = Ce(e, a), p = [];
          break;
        default:
          typeof l.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Fi);
      }
      pt(n, a);
      var y;
      n = null;
      for (Y in l) if (!a.hasOwnProperty(Y) && l.hasOwnProperty(Y) && l[Y] != null) if (Y === "style") {
        var R = l[Y];
        for (y in R) R.hasOwnProperty(y) && (n || (n = {}), n[y] = "");
      } else Y !== "dangerouslySetInnerHTML" && Y !== "children" && Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && Y !== "autoFocus" && (s.hasOwnProperty(Y) ? p || (p = []) : (p = p || []).push(Y, null));
      for (Y in a) {
        var O = a[Y];
        if (R = l?.[Y], a.hasOwnProperty(Y) && O !== R && (O != null || R != null)) if (Y === "style") if (R) {
          for (y in R) !R.hasOwnProperty(y) || O && O.hasOwnProperty(y) || (n || (n = {}), n[y] = "");
          for (y in O) O.hasOwnProperty(y) && R[y] !== O[y] && (n || (n = {}), n[y] = O[y]);
        } else n || (p || (p = []), p.push(
          Y,
          n
        )), n = O;
        else Y === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, R = R ? R.__html : void 0, O != null && R !== O && (p = p || []).push(Y, O)) : Y === "children" ? typeof O != "string" && typeof O != "number" || (p = p || []).push(Y, "" + O) : Y !== "suppressContentEditableWarning" && Y !== "suppressHydrationWarning" && (s.hasOwnProperty(Y) ? (O != null && Y === "onScroll" && Ye("scroll", e), p || R === O || (p = [])) : (p = p || []).push(Y, O));
      }
      n && (p = p || []).push("style", n);
      var Y = p;
      (t.updateQueue = Y) && (t.flags |= 4);
    }
  }, ad = function(e, t, n, a) {
    n !== a && (t.flags |= 4);
  };
  function ti(e, t) {
    if (!Ze) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
    }
  }
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 14680064, a |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Em(e, t, n) {
    var a = t.pendingProps;
    switch (Pa(t), t.tag) {
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
        return _t(t), null;
      case 1:
        return wt(t.type) && Wi(), _t(t), null;
      case 3:
        return a = t.stateNode, pn(), Ke(vt), Ke(ft), qa(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && (bs(jt), jt = null))), ss(e, t), _t(t), null;
      case 5:
        Ba(t);
        var l = Mr(Xn.current);
        if (n = t.type, e !== null && t.stateNode != null) od(e, t, n, a, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return _t(t), null;
          }
          if (e = Mr(Kt.current), Xi(t)) {
            a = t.stateNode, n = t.type;
            var p = t.memoizedProps;
            switch (a[Yt] = t, a[Wn] = p, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ye("cancel", a), Ye("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", a);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qn.length; l++) Ye(qn[l], a);
                break;
              case "source":
                Ye("error", a);
                break;
              case "img":
              case "image":
              case "link":
                Ye(
                  "error",
                  a
                ), Ye("load", a);
                break;
              case "details":
                Ye("toggle", a);
                break;
              case "input":
                rt(a, p), Ye("invalid", a);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!p.multiple }, Ye("invalid", a);
                break;
              case "textarea":
                Ie(a, p), Ye("invalid", a);
            }
            pt(n, p), l = null;
            for (var y in p) if (p.hasOwnProperty(y)) {
              var R = p[y];
              y === "children" ? typeof R == "string" ? a.textContent !== R && (p.suppressHydrationWarning !== !0 && qi(a.textContent, R, e), l = ["children", R]) : typeof R == "number" && a.textContent !== "" + R && (p.suppressHydrationWarning !== !0 && qi(
                a.textContent,
                R,
                e
              ), l = ["children", "" + R]) : s.hasOwnProperty(y) && R != null && y === "onScroll" && Ye("scroll", a);
            }
            switch (n) {
              case "input":
                Re(a), j(a, p, !0);
                break;
              case "textarea":
                Re(a), Ve(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (a.onclick = Fi);
            }
            a = l, t.updateQueue = a, a !== null && (t.flags |= 4);
          } else {
            y = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = y.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = y.createElement(n, { is: a.is }) : (e = y.createElement(n), n === "select" && (y = e, a.multiple ? y.multiple = !0 : a.size && (y.size = a.size))) : e = y.createElementNS(e, n), e[Yt] = t, e[Wn] = a, id(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (y = Mt(n, a), n) {
                case "dialog":
                  Ye("cancel", e), Ye("close", e), l = a;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ye("load", e), l = a;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qn.length; l++) Ye(qn[l], e);
                  l = a;
                  break;
                case "source":
                  Ye("error", e), l = a;
                  break;
                case "img":
                case "image":
                case "link":
                  Ye(
                    "error",
                    e
                  ), Ye("load", e), l = a;
                  break;
                case "details":
                  Ye("toggle", e), l = a;
                  break;
                case "input":
                  rt(e, a), l = Ue(e, a), Ye("invalid", e);
                  break;
                case "option":
                  l = a;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!a.multiple }, l = F({}, a, { value: void 0 }), Ye("invalid", e);
                  break;
                case "textarea":
                  Ie(e, a), l = Ce(e, a), Ye("invalid", e);
                  break;
                default:
                  l = a;
              }
              pt(n, l), R = l;
              for (p in R) if (R.hasOwnProperty(p)) {
                var O = R[p];
                p === "style" ? He(e, O) : p === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && U(e, O)) : p === "children" ? typeof O == "string" ? (n !== "textarea" || O !== "") && K(e, O) : typeof O == "number" && K(e, "" + O) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (s.hasOwnProperty(p) ? O != null && p === "onScroll" && Ye("scroll", e) : O != null && x(e, p, O, y));
              }
              switch (n) {
                case "input":
                  Re(e), j(e, a, !1);
                  break;
                case "textarea":
                  Re(e), Ve(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + J(a.value));
                  break;
                case "select":
                  e.multiple = !!a.multiple, p = a.value, p != null ? we(e, !!a.multiple, p, !1) : a.defaultValue != null && we(
                    e,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Fi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return _t(t), null;
      case 6:
        if (e && t.stateNode != null) ad(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Mr(Xn.current), Mr(Kt.current), Xi(t)) {
            if (a = t.stateNode, n = t.memoizedProps, a[Yt] = t, (p = a.nodeValue !== n) && (e = Pt, e !== null)) switch (e.tag) {
              case 3:
                qi(a.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && qi(a.nodeValue, n, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else a = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(a), a[Yt] = t, t.stateNode = a;
        }
        return _t(t), null;
      case 13:
        if (Ke(Je), a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && Rt !== null && t.mode & 1 && !(t.flags & 128)) cc(), ln(), t.flags |= 98560, p = !1;
          else if (p = Xi(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(i(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
              p[Yt] = t;
            } else ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            _t(t), p = !1;
          } else jt !== null && (bs(jt), jt = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (a = a !== null, a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192, t.mode & 1 && (e === null || Je.current & 1 ? st === 0 && (st = 3) : vs())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return pn(), ss(e, t), e === null && Fn(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return Ta(t.type._context), _t(t), null;
      case 17:
        return wt(t.type) && Wi(), _t(t), null;
      case 19:
        if (Ke(Je), p = t.memoizedState, p === null) return _t(t), null;
        if (a = (t.flags & 128) !== 0, y = p.rendering, y === null) if (a) ti(p, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (y = ro(e), y !== null) {
              for (t.flags |= 128, ti(p, !1), a = y.updateQueue, a !== null && (t.updateQueue = a, t.flags |= 4), t.subtreeFlags = 0, a = n, n = t.child; n !== null; ) p = n, e = a, p.flags &= 14680066, y = p.alternate, y === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = y.childLanes, p.lanes = y.lanes, p.child = y.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = y.memoizedProps, p.memoizedState = y.memoizedState, p.updateQueue = y.updateQueue, p.type = y.type, e = y.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ge(Je, Je.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && nt() > hn && (t.flags |= 128, a = !0, ti(p, !1), t.lanes = 4194304);
        }
        else {
          if (!a) if (e = ro(y), e !== null) {
            if (t.flags |= 128, a = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ti(p, !0), p.tail === null && p.tailMode === "hidden" && !y.alternate && !Ze) return _t(t), null;
          } else 2 * nt() - p.renderingStartTime > hn && n !== 1073741824 && (t.flags |= 128, a = !0, ti(p, !1), t.lanes = 4194304);
          p.isBackwards ? (y.sibling = t.child, t.child = y) : (n = p.last, n !== null ? n.sibling = y : t.child = y, p.last = y);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = nt(), t.sibling = null, n = Je.current, Ge(Je, a ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return xs(), a = t.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (t.flags |= 8192), a && t.mode & 1 ? It & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Cm(e, t) {
    switch (Pa(t), t.tag) {
      case 1:
        return wt(t.type) && Wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pn(), Ke(vt), Ke(ft), qa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ba(t), null;
      case 13:
        if (Ke(Je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          ln();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ke(Je), null;
      case 4:
        return pn(), null;
      case 10:
        return Ta(t.type._context), null;
      case 22:
      case 23:
        return xs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var po = !1, bt = !1, zm = typeof WeakSet == "function" ? WeakSet : Set, be = null;
  function gn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (a) {
      tt(e, t, a);
    }
    else n.current = null;
  }
  function ls(e, t, n) {
    try {
      n();
    } catch (a) {
      tt(e, t, a);
    }
  }
  var sd = !1;
  function Am(e, t) {
    if (xa = Ii, e = $l(), pa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var l = a.anchorOffset, p = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, p.nodeType;
          } catch {
            n = null;
            break e;
          }
          var y = 0, R = -1, O = -1, Y = 0, re = 0, ie = e, te = null;
          t: for (; ; ) {
            for (var he; ie !== n || l !== 0 && ie.nodeType !== 3 || (R = y + l), ie !== p || a !== 0 && ie.nodeType !== 3 || (O = y + a), ie.nodeType === 3 && (y += ie.nodeValue.length), (he = ie.firstChild) !== null; )
              te = ie, ie = he;
            for (; ; ) {
              if (ie === e) break t;
              if (te === n && ++Y === l && (R = y), te === p && ++re === a && (O = y), (he = ie.nextSibling) !== null) break;
              ie = te, te = ie.parentNode;
            }
            ie = he;
          }
          n = R === -1 || O === -1 ? null : { start: R, end: O };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (va = { focusedElem: e, selectionRange: n }, Ii = !1, be = t; be !== null; ) if (t = be, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, be = e;
    else for (; be !== null; ) {
      t = be;
      try {
        var xe = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (xe !== null) {
              var ve = xe.memoizedProps, it = xe.memoizedState, q = t.stateNode, D = q.getSnapshotBeforeUpdate(t.elementType === t.type ? ve : qt(t.type, ve), it);
              q.__reactInternalSnapshotBeforeUpdate = D;
            }
            break;
          case 3:
            var W = t.stateNode.containerInfo;
            W.nodeType === 1 ? W.textContent = "" : W.nodeType === 9 && W.documentElement && W.removeChild(W.documentElement);
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
        tt(t, t.return, se);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, be = e;
        break;
      }
      be = t.return;
    }
    return xe = sd, sd = !1, xe;
  }
  function ri(e, t, n) {
    var a = t.updateQueue;
    if (a = a !== null ? a.lastEffect : null, a !== null) {
      var l = a = a.next;
      do {
        if ((l.tag & e) === e) {
          var p = l.destroy;
          l.destroy = void 0, p !== void 0 && ls(t, n, p);
        }
        l = l.next;
      } while (l !== a);
    }
  }
  function mo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var a = n.create;
          n.destroy = a();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function cs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ld(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Wn], delete t[Ea], delete t[dm], delete t[um])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function cd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function dd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || cd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ds(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fi));
    else if (a !== 4 && (e = e.child, e !== null)) for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), e = e.sibling;
  }
  function us(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (e = e.child, e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), e = e.sibling;
  }
  var mt = null, Ft = !1;
  function vr(e, t, n) {
    for (n = n.child; n !== null; ) ud(e, t, n), n = n.sibling;
  }
  function ud(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(Ei, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        bt || gn(n, t);
      case 6:
        var a = mt, l = Ft;
        mt = null, vr(e, t, n), mt = a, Ft = l, mt !== null && (Ft ? (e = mt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : mt.removeChild(n.stateNode));
        break;
      case 18:
        mt !== null && (Ft ? (e = mt, n = n.stateNode, e.nodeType === 8 ? Sa(e.parentNode, n) : e.nodeType === 1 && Sa(e, n), On(e)) : Sa(mt, n.stateNode));
        break;
      case 4:
        a = mt, l = Ft, mt = n.stateNode.containerInfo, Ft = !0, vr(e, t, n), mt = a, Ft = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bt && (a = n.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
          l = a = a.next;
          do {
            var p = l, y = p.destroy;
            p = p.tag, y !== void 0 && (p & 2 || p & 4) && ls(n, t, y), l = l.next;
          } while (l !== a);
        }
        vr(e, t, n);
        break;
      case 1:
        if (!bt && (gn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function")) try {
          a.props = n.memoizedProps, a.state = n.memoizedState, a.componentWillUnmount();
        } catch (R) {
          tt(n, t, R);
        }
        vr(e, t, n);
        break;
      case 21:
        vr(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (bt = (a = bt) || n.memoizedState !== null, vr(e, t, n), bt = a) : vr(e, t, n);
        break;
      default:
        vr(e, t, n);
    }
  }
  function pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new zm()), t.forEach(function(a) {
        var l = Hm.bind(null, e, a);
        n.has(a) || (n.add(a), a.then(l, l));
      });
    }
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null) for (var a = 0; a < n.length; a++) {
      var l = n[a];
      try {
        var p = e, y = t, R = y;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 5:
              mt = R.stateNode, Ft = !1;
              break e;
            case 3:
              mt = R.stateNode.containerInfo, Ft = !0;
              break e;
            case 4:
              mt = R.stateNode.containerInfo, Ft = !0;
              break e;
          }
          R = R.return;
        }
        if (mt === null) throw Error(i(160));
        ud(p, y, l), mt = null, Ft = !1;
        var O = l.alternate;
        O !== null && (O.return = null), l.return = null;
      } catch (Y) {
        tt(l, t, Y);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) md(t, e), t = t.sibling;
  }
  function md(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ut(t, e), Qt(e), a & 4) {
          try {
            ri(3, e, e.return), mo(3, e);
          } catch (ve) {
            tt(e, e.return, ve);
          }
          try {
            ri(5, e, e.return);
          } catch (ve) {
            tt(e, e.return, ve);
          }
        }
        break;
      case 1:
        Ut(t, e), Qt(e), a & 512 && n !== null && gn(n, n.return);
        break;
      case 5:
        if (Ut(t, e), Qt(e), a & 512 && n !== null && gn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            K(l, "");
          } catch (ve) {
            tt(e, e.return, ve);
          }
        }
        if (a & 4 && (l = e.stateNode, l != null)) {
          var p = e.memoizedProps, y = n !== null ? n.memoizedProps : p, R = e.type, O = e.updateQueue;
          if (e.updateQueue = null, O !== null) try {
            R === "input" && p.type === "radio" && p.name != null && T(l, p), Mt(R, y);
            var Y = Mt(R, p);
            for (y = 0; y < O.length; y += 2) {
              var re = O[y], ie = O[y + 1];
              re === "style" ? He(l, ie) : re === "dangerouslySetInnerHTML" ? U(l, ie) : re === "children" ? K(l, ie) : x(l, re, ie, Y);
            }
            switch (R) {
              case "input":
                H(l, p);
                break;
              case "textarea":
                Oe(l, p);
                break;
              case "select":
                var te = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!p.multiple;
                var he = p.value;
                he != null ? we(l, !!p.multiple, he, !1) : te !== !!p.multiple && (p.defaultValue != null ? we(
                  l,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : we(l, !!p.multiple, p.multiple ? [] : "", !1));
            }
            l[Wn] = p;
          } catch (ve) {
            tt(e, e.return, ve);
          }
        }
        break;
      case 6:
        if (Ut(t, e), Qt(e), a & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, p = e.memoizedProps;
          try {
            l.nodeValue = p;
          } catch (ve) {
            tt(e, e.return, ve);
          }
        }
        break;
      case 3:
        if (Ut(t, e), Qt(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
          On(t.containerInfo);
        } catch (ve) {
          tt(e, e.return, ve);
        }
        break;
      case 4:
        Ut(t, e), Qt(e);
        break;
      case 13:
        Ut(t, e), Qt(e), l = e.child, l.flags & 8192 && (p = l.memoizedState !== null, l.stateNode.isHidden = p, !p || l.alternate !== null && l.alternate.memoizedState !== null || (gs = nt())), a & 4 && pd(e);
        break;
      case 22:
        if (re = n !== null && n.memoizedState !== null, e.mode & 1 ? (bt = (Y = bt) || re, Ut(t, e), bt = Y) : Ut(t, e), Qt(e), a & 8192) {
          if (Y = e.memoizedState !== null, (e.stateNode.isHidden = Y) && !re && e.mode & 1) for (be = e, re = e.child; re !== null; ) {
            for (ie = be = re; be !== null; ) {
              switch (te = be, he = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ri(4, te, te.return);
                  break;
                case 1:
                  gn(te, te.return);
                  var xe = te.stateNode;
                  if (typeof xe.componentWillUnmount == "function") {
                    a = te, n = te.return;
                    try {
                      t = a, xe.props = t.memoizedProps, xe.state = t.memoizedState, xe.componentWillUnmount();
                    } catch (ve) {
                      tt(a, n, ve);
                    }
                  }
                  break;
                case 5:
                  gn(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    hd(ie);
                    continue;
                  }
              }
              he !== null ? (he.return = te, be = he) : hd(ie);
            }
            re = re.sibling;
          }
          e: for (re = null, ie = e; ; ) {
            if (ie.tag === 5) {
              if (re === null) {
                re = ie;
                try {
                  l = ie.stateNode, Y ? (p = l.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (R = ie.stateNode, O = ie.memoizedProps.style, y = O != null && O.hasOwnProperty("display") ? O.display : null, R.style.display = De("display", y));
                } catch (ve) {
                  tt(e, e.return, ve);
                }
              }
            } else if (ie.tag === 6) {
              if (re === null) try {
                ie.stateNode.nodeValue = Y ? "" : ie.memoizedProps;
              } catch (ve) {
                tt(e, e.return, ve);
              }
            } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === e) && ie.child !== null) {
              ie.child.return = ie, ie = ie.child;
              continue;
            }
            if (ie === e) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === e) break e;
              re === ie && (re = null), ie = ie.return;
            }
            re === ie && (re = null), ie.sibling.return = ie.return, ie = ie.sibling;
          }
        }
        break;
      case 19:
        Ut(t, e), Qt(e), a & 4 && pd(e);
        break;
      case 21:
        break;
      default:
        Ut(
          t,
          e
        ), Qt(e);
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (cd(n)) {
              var a = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (a.tag) {
          case 5:
            var l = a.stateNode;
            a.flags & 32 && (K(l, ""), a.flags &= -33);
            var p = dd(e);
            us(e, p, l);
            break;
          case 3:
          case 4:
            var y = a.stateNode.containerInfo, R = dd(e);
            ds(e, R, y);
            break;
          default:
            throw Error(i(161));
        }
      } catch (O) {
        tt(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pm(e, t, n) {
    be = e, gd(e);
  }
  function gd(e, t, n) {
    for (var a = (e.mode & 1) !== 0; be !== null; ) {
      var l = be, p = l.child;
      if (l.tag === 22 && a) {
        var y = l.memoizedState !== null || po;
        if (!y) {
          var R = l.alternate, O = R !== null && R.memoizedState !== null || bt;
          R = po;
          var Y = bt;
          if (po = y, (bt = O) && !Y) for (be = l; be !== null; ) y = be, O = y.child, y.tag === 22 && y.memoizedState !== null ? _d(l) : O !== null ? (O.return = y, be = O) : _d(l);
          for (; p !== null; ) be = p, gd(p), p = p.sibling;
          be = l, po = R, bt = Y;
        }
        fd(e);
      } else l.subtreeFlags & 8772 && p !== null ? (p.return = l, be = p) : fd(e);
    }
  }
  function fd(e) {
    for (; be !== null; ) {
      var t = be;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              bt || mo(5, t);
              break;
            case 1:
              var a = t.stateNode;
              if (t.flags & 4 && !bt) if (n === null) a.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : qt(t.type, n.memoizedProps);
                a.componentDidUpdate(l, n.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && hc(t, p, a);
              break;
            case 3:
              var y = t.updateQueue;
              if (y !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                hc(t, y, n);
              }
              break;
            case 5:
              var R = t.stateNode;
              if (n === null && t.flags & 4) {
                n = R;
                var O = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    O.autoFocus && n.focus();
                    break;
                  case "img":
                    O.src && (n.src = O.src);
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
                var Y = t.alternate;
                if (Y !== null) {
                  var re = Y.memoizedState;
                  if (re !== null) {
                    var ie = re.dehydrated;
                    ie !== null && On(ie);
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
          bt || t.flags & 512 && cs(t);
        } catch (te) {
          tt(t, t.return, te);
        }
      }
      if (t === e) {
        be = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, be = n;
        break;
      }
      be = t.return;
    }
  }
  function hd(e) {
    for (; be !== null; ) {
      var t = be;
      if (t === e) {
        be = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, be = n;
        break;
      }
      be = t.return;
    }
  }
  function _d(e) {
    for (; be !== null; ) {
      var t = be;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              mo(4, t);
            } catch (O) {
              tt(t, n, O);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var l = t.return;
              try {
                a.componentDidMount();
              } catch (O) {
                tt(t, l, O);
              }
            }
            var p = t.return;
            try {
              cs(t);
            } catch (O) {
              tt(t, p, O);
            }
            break;
          case 5:
            var y = t.return;
            try {
              cs(t);
            } catch (O) {
              tt(t, y, O);
            }
        }
      } catch (O) {
        tt(t, t.return, O);
      }
      if (t === e) {
        be = null;
        break;
      }
      var R = t.sibling;
      if (R !== null) {
        R.return = t.return, be = R;
        break;
      }
      be = t.return;
    }
  }
  var Rm = Math.ceil, go = g.ReactCurrentDispatcher, ps = g.ReactCurrentOwner, Dt = g.ReactCurrentBatchConfig, $e = 0, dt = null, ot = null, gt = 0, It = 0, fn = hr(0), st = 0, ni = null, Br = 0, fo = 0, ms = 0, ii = null, St = null, gs = 0, hn = 1 / 0, ar = null, ho = !1, fs = null, wr = null, _o = !1, kr = null, bo = 0, oi = 0, hs = null, yo = -1, xo = 0;
  function xt() {
    return $e & 6 ? nt() : yo !== -1 ? yo : yo = nt();
  }
  function Sr(e) {
    return e.mode & 1 ? $e & 2 && gt !== 0 ? gt & -gt : mm.transition !== null ? (xo === 0 && (xo = dl()), xo) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yl(e.type)), e) : 1;
  }
  function Wt(e, t, n, a) {
    if (50 < oi) throw oi = 0, hs = null, Error(i(185));
    Pn(e, n, a), (!($e & 2) || e !== dt) && (e === dt && (!($e & 2) && (fo |= n), st === 4 && Er(e, gt)), Et(e, a), n === 1 && $e === 0 && !(t.mode & 1) && (hn = nt() + 500, Gi && br()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    mp(e, t);
    var a = Ai(e, e === dt ? gt : 0);
    if (a === 0) n !== null && sl(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = a & -a, e.callbackPriority !== t) {
      if (n != null && sl(n), t === 1) e.tag === 0 ? pm(yd.bind(null, e)) : ic(yd.bind(null, e)), lm(function() {
        !($e & 6) && br();
      }), n = null;
      else {
        switch (ul(a)) {
          case 1:
            n = Ko;
            break;
          case 4:
            n = ll;
            break;
          case 16:
            n = Si;
            break;
          case 536870912:
            n = cl;
            break;
          default:
            n = Si;
        }
        n = zd(n, bd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function bd(e, t) {
    if (yo = -1, xo = 0, $e & 6) throw Error(i(327));
    var n = e.callbackNode;
    if (_n() && e.callbackNode !== n) return null;
    var a = Ai(e, e === dt ? gt : 0);
    if (a === 0) return null;
    if (a & 30 || a & e.expiredLanes || t) t = vo(e, a);
    else {
      t = a;
      var l = $e;
      $e |= 2;
      var p = vd();
      (dt !== e || gt !== t) && (ar = null, hn = nt() + 500, qr(e, t));
      do
        try {
          Lm();
          break;
        } catch (R) {
          xd(e, R);
        }
      while (!0);
      Oa(), go.current = p, $e = l, ot !== null ? t = 0 : (dt = null, gt = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (l = Xo(e), l !== 0 && (a = l, t = _s(e, l))), t === 1) throw n = ni, qr(e, 0), Er(e, a), Et(e, nt()), n;
      if (t === 6) Er(e, a);
      else {
        if (l = e.current.alternate, !(a & 30) && !Im(l) && (t = vo(e, a), t === 2 && (p = Xo(e), p !== 0 && (a = p, t = _s(e, p))), t === 1)) throw n = ni, qr(e, 0), Er(e, a), Et(e, nt()), n;
        switch (e.finishedWork = l, e.finishedLanes = a, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Fr(e, St, ar);
            break;
          case 3:
            if (Er(e, a), (a & 130023424) === a && (t = gs + 500 - nt(), 10 < t)) {
              if (Ai(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & a) !== a) {
                xt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ka(Fr.bind(null, e, St, ar), t);
              break;
            }
            Fr(e, St, ar);
            break;
          case 4:
            if (Er(e, a), (a & 4194240) === a) break;
            for (t = e.eventTimes, l = -1; 0 < a; ) {
              var y = 31 - $t(a);
              p = 1 << y, y = t[y], y > l && (l = y), a &= ~p;
            }
            if (a = l, a = nt() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * Rm(a / 1960)) - a, 10 < a) {
              e.timeoutHandle = ka(Fr.bind(null, e, St, ar), a);
              break;
            }
            Fr(e, St, ar);
            break;
          case 5:
            Fr(e, St, ar);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Et(e, nt()), e.callbackNode === n ? bd.bind(null, e) : null;
  }
  function _s(e, t) {
    var n = ii;
    return e.current.memoizedState.isDehydrated && (qr(e, t).flags |= 256), e = vo(e, t), e !== 2 && (t = St, St = n, t !== null && bs(t)), e;
  }
  function bs(e) {
    St === null ? St = e : St.push.apply(St, e);
  }
  function Im(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var a = 0; a < n.length; a++) {
          var l = n[a], p = l.getSnapshot;
          l = l.value;
          try {
            if (!Bt(p(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
  function Er(e, t) {
    for (t &= ~ms, t &= ~fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - $t(t), a = 1 << n;
      e[n] = -1, t &= ~a;
    }
  }
  function yd(e) {
    if ($e & 6) throw Error(i(327));
    _n();
    var t = Ai(e, 0);
    if (!(t & 1)) return Et(e, nt()), null;
    var n = vo(e, t);
    if (e.tag !== 0 && n === 2) {
      var a = Xo(e);
      a !== 0 && (t = a, n = _s(e, a));
    }
    if (n === 1) throw n = ni, qr(e, 0), Er(e, t), Et(e, nt()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Fr(e, St, ar), Et(e, nt()), null;
  }
  function ys(e, t) {
    var n = $e;
    $e |= 1;
    try {
      return e(t);
    } finally {
      $e = n, $e === 0 && (hn = nt() + 500, Gi && br());
    }
  }
  function jr(e) {
    kr !== null && kr.tag === 0 && !($e & 6) && _n();
    var t = $e;
    $e |= 1;
    var n = Dt.transition, a = We;
    try {
      if (Dt.transition = null, We = 1, e) return e();
    } finally {
      We = a, Dt.transition = n, $e = t, !($e & 6) && br();
    }
  }
  function xs() {
    It = fn.current, Ke(fn);
  }
  function qr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, sm(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var a = n;
      switch (Pa(a), a.tag) {
        case 1:
          a = a.type.childContextTypes, a != null && Wi();
          break;
        case 3:
          pn(), Ke(vt), Ke(ft), qa();
          break;
        case 5:
          Ba(a);
          break;
        case 4:
          pn();
          break;
        case 13:
          Ke(Je);
          break;
        case 19:
          Ke(Je);
          break;
        case 10:
          Ta(a.type._context);
          break;
        case 22:
        case 23:
          xs();
      }
      n = n.return;
    }
    if (dt = e, ot = e = Cr(e.current, null), gt = It = t, st = 0, ni = null, ms = fo = Br = 0, St = ii = null, Hr !== null) {
      for (t = 0; t < Hr.length; t++) if (n = Hr[t], a = n.interleaved, a !== null) {
        n.interleaved = null;
        var l = a.next, p = n.pending;
        if (p !== null) {
          var y = p.next;
          p.next = l, a.next = y;
        }
        n.pending = a;
      }
      Hr = null;
    }
    return e;
  }
  function xd(e, t) {
    do {
      var n = ot;
      try {
        if (Oa(), no.current = so, io) {
          for (var a = et.memoizedState; a !== null; ) {
            var l = a.queue;
            l !== null && (l.pending = null), a = a.next;
          }
          io = !1;
        }
        if ($r = 0, ct = at = et = null, Qn = !1, Zn = 0, ps.current = null, n === null || n.return === null) {
          st = 1, ni = t, ot = null;
          break;
        }
        e: {
          var p = e, y = n.return, R = n, O = t;
          if (t = gt, R.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var Y = O, re = R, ie = re.tag;
            if (!(re.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var he = Wc(y);
            if (he !== null) {
              he.flags &= -257, Vc(he, y, R, p, t), he.mode & 1 && Uc(p, Y, t), t = he, O = Y;
              var xe = t.updateQueue;
              if (xe === null) {
                var ve = /* @__PURE__ */ new Set();
                ve.add(O), t.updateQueue = ve;
              } else xe.add(O);
              break e;
            } else {
              if (!(t & 1)) {
                Uc(p, Y, t), vs();
                break e;
              }
              O = Error(i(426));
            }
          } else if (Ze && R.mode & 1) {
            var it = Wc(y);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), Vc(it, y, R, p, t), Na(mn(O, R));
              break e;
            }
          }
          p = O = mn(O, R), st !== 4 && (st = 2), ii === null ? ii = [p] : ii.push(p), p = y;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var q = qc(p, O, t);
                fc(p, q);
                break e;
              case 1:
                R = O;
                var D = p.type, W = p.stateNode;
                if (!(p.flags & 128) && (typeof D.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (wr === null || !wr.has(W)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var se = Fc(p, R, t);
                  fc(p, se);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        kd(n);
      } catch (ke) {
        t = ke, ot === n && n !== null && (ot = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vd() {
    var e = go.current;
    return go.current = so, e === null ? so : e;
  }
  function vs() {
    (st === 0 || st === 3 || st === 2) && (st = 4), dt === null || !(Br & 268435455) && !(fo & 268435455) || Er(dt, gt);
  }
  function vo(e, t) {
    var n = $e;
    $e |= 2;
    var a = vd();
    (dt !== e || gt !== t) && (ar = null, qr(e, t));
    do
      try {
        Nm();
        break;
      } catch (l) {
        xd(e, l);
      }
    while (!0);
    if (Oa(), $e = n, go.current = a, ot !== null) throw Error(i(261));
    return dt = null, gt = 0, st;
  }
  function Nm() {
    for (; ot !== null; ) wd(ot);
  }
  function Lm() {
    for (; ot !== null && !ip(); ) wd(ot);
  }
  function wd(e) {
    var t = Cd(e.alternate, e, It);
    e.memoizedProps = e.pendingProps, t === null ? kd(e) : ot = t, ps.current = null;
  }
  function kd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Cm(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (n = Em(n, t, It), n !== null) {
        ot = n;
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
  function Fr(e, t, n) {
    var a = We, l = Dt.transition;
    try {
      Dt.transition = null, We = 1, Om(e, t, n, a);
    } finally {
      Dt.transition = l, We = a;
    }
    return null;
  }
  function Om(e, t, n, a) {
    do
      _n();
    while (kr !== null);
    if ($e & 6) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = n.lanes | n.childLanes;
    if (gp(e, p), e === dt && (ot = dt = null, gt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _o || (_o = !0, zd(Si, function() {
      return _n(), null;
    })), p = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || p) {
      p = Dt.transition, Dt.transition = null;
      var y = We;
      We = 1;
      var R = $e;
      $e |= 4, ps.current = null, Am(e, n), md(n, e), em(va), Ii = !!xa, va = xa = null, e.current = n, Pm(n), op(), $e = R, We = y, Dt.transition = p;
    } else e.current = n;
    if (_o && (_o = !1, kr = e, bo = l), p = e.pendingLanes, p === 0 && (wr = null), lp(n.stateNode), Et(e, nt()), t !== null) for (a = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], a(l.value, { componentStack: l.stack, digest: l.digest });
    if (ho) throw ho = !1, e = fs, fs = null, e;
    return bo & 1 && e.tag !== 0 && _n(), p = e.pendingLanes, p & 1 ? e === hs ? oi++ : (oi = 0, hs = e) : oi = 0, br(), null;
  }
  function _n() {
    if (kr !== null) {
      var e = ul(bo), t = Dt.transition, n = We;
      try {
        if (Dt.transition = null, We = 16 > e ? 16 : e, kr === null) var a = !1;
        else {
          if (e = kr, kr = null, bo = 0, $e & 6) throw Error(i(331));
          var l = $e;
          for ($e |= 4, be = e.current; be !== null; ) {
            var p = be, y = p.child;
            if (be.flags & 16) {
              var R = p.deletions;
              if (R !== null) {
                for (var O = 0; O < R.length; O++) {
                  var Y = R[O];
                  for (be = Y; be !== null; ) {
                    var re = be;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ri(8, re, p);
                    }
                    var ie = re.child;
                    if (ie !== null) ie.return = re, be = ie;
                    else for (; be !== null; ) {
                      re = be;
                      var te = re.sibling, he = re.return;
                      if (ld(re), re === Y) {
                        be = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = he, be = te;
                        break;
                      }
                      be = he;
                    }
                  }
                }
                var xe = p.alternate;
                if (xe !== null) {
                  var ve = xe.child;
                  if (ve !== null) {
                    xe.child = null;
                    do {
                      var it = ve.sibling;
                      ve.sibling = null, ve = it;
                    } while (ve !== null);
                  }
                }
                be = p;
              }
            }
            if (p.subtreeFlags & 2064 && y !== null) y.return = p, be = y;
            else e: for (; be !== null; ) {
              if (p = be, p.flags & 2048) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  ri(9, p, p.return);
              }
              var q = p.sibling;
              if (q !== null) {
                q.return = p.return, be = q;
                break e;
              }
              be = p.return;
            }
          }
          var D = e.current;
          for (be = D; be !== null; ) {
            y = be;
            var W = y.child;
            if (y.subtreeFlags & 2064 && W !== null) W.return = y, be = W;
            else e: for (y = D; be !== null; ) {
              if (R = be, R.flags & 2048) try {
                switch (R.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mo(9, R);
                }
              } catch (ke) {
                tt(R, R.return, ke);
              }
              if (R === y) {
                be = null;
                break e;
              }
              var se = R.sibling;
              if (se !== null) {
                se.return = R.return, be = se;
                break e;
              }
              be = R.return;
            }
          }
          if ($e = l, br(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(Ei, e);
          } catch {
          }
          a = !0;
        }
        return a;
      } finally {
        We = n, Dt.transition = t;
      }
    }
    return !1;
  }
  function Sd(e, t, n) {
    t = mn(n, t), t = qc(e, t, 1), e = xr(e, t, 1), t = xt(), e !== null && (Pn(e, 1, t), Et(e, t));
  }
  function tt(e, t, n) {
    if (e.tag === 3) Sd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Sd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (wr === null || !wr.has(a))) {
          e = mn(n, e), e = Fc(t, e, 1), t = xr(t, e, 1), e = xt(), t !== null && (Pn(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Tm(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), t = xt(), e.pingedLanes |= e.suspendedLanes & n, dt === e && (gt & n) === n && (st === 4 || st === 3 && (gt & 130023424) === gt && 500 > nt() - gs ? qr(e, 0) : ms |= n), Et(e, t);
  }
  function Ed(e, t) {
    t === 0 && (e.mode & 1 ? (t = zi, zi <<= 1, !(zi & 130023424) && (zi = 4194304)) : t = 1);
    var n = xt();
    e = nr(e, t), e !== null && (Pn(e, t, n), Et(e, n));
  }
  function Dm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ed(e, n);
  }
  function Hm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), Ed(e, n);
  }
  var Cd;
  Cd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return kt = !1, Sm(e, t, n);
      kt = !!(e.flags & 131072);
    }
    else kt = !1, Ze && t.flags & 1048576 && oc(t, Ki, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var a = t.type;
        uo(e, t), e = t.pendingProps;
        var l = on(t, ft.current);
        un(t, n), l = Wa(null, t, a, e, l, n);
        var p = Va();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, wt(a) ? (p = !0, Vi(t)) : p = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ma(t), l.updater = lo, t.stateNode = l, l._reactInternals = t, Za(t, a, e, n), t = rs(null, t, a, !0, p, n)) : (t.tag = 0, Ze && p && Aa(t), yt(null, t, l, n), t = t.child), t;
      case 16:
        a = t.elementType;
        e: {
          switch (uo(e, t), e = t.pendingProps, l = a._init, a = l(a._payload), t.type = a, l = t.tag = $m(a), e = qt(a, e), l) {
            case 0:
              t = ts(null, t, a, e, n);
              break e;
            case 1:
              t = Zc(null, t, a, e, n);
              break e;
            case 11:
              t = Gc(null, t, a, e, n);
              break e;
            case 14:
              t = Yc(null, t, a, qt(a.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            a,
            ""
          ));
        }
        return t;
      case 0:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : qt(a, l), ts(e, t, a, l, n);
      case 1:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : qt(a, l), Zc(e, t, a, l, n);
      case 3:
        e: {
          if (Jc(t), e === null) throw Error(i(387));
          a = t.pendingProps, p = t.memoizedState, l = p.element, gc(e, t), to(t, a, null, n);
          var y = t.memoizedState;
          if (a = y.element, p.isDehydrated) if (p = { element: a, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            l = mn(Error(i(423)), t), t = ed(e, t, a, n, l);
            break e;
          } else if (a !== l) {
            l = mn(Error(i(424)), t), t = ed(e, t, a, n, l);
            break e;
          } else for (Rt = fr(t.stateNode.containerInfo.firstChild), Pt = t, Ze = !0, jt = null, n = pc(t, null, a, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ln(), a === l) {
              t = or(e, t, n);
              break e;
            }
            yt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return _c(t), e === null && Ia(t), a = t.type, l = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = l.children, wa(a, l) ? y = null : p !== null && wa(a, p) && (t.flags |= 32), Qc(e, t), yt(e, t, y, n), t.child;
      case 6:
        return e === null && Ia(t), null;
      case 13:
        return td(e, t, n);
      case 4:
        return $a(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = cn(t, null, a, n) : yt(e, t, a, n), t.child;
      case 11:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : qt(a, l), Gc(e, t, a, l, n);
      case 7:
        return yt(e, t, t.pendingProps, n), t.child;
      case 8:
        return yt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return yt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (a = t.type._context, l = t.pendingProps, p = t.memoizedProps, y = l.value, Ge(Zi, a._currentValue), a._currentValue = y, p !== null) if (Bt(p.value, y)) {
            if (p.children === l.children && !vt.current) {
              t = or(e, t, n);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var R = p.dependencies;
            if (R !== null) {
              y = p.child;
              for (var O = R.firstContext; O !== null; ) {
                if (O.context === a) {
                  if (p.tag === 1) {
                    O = ir(-1, n & -n), O.tag = 2;
                    var Y = p.updateQueue;
                    if (Y !== null) {
                      Y = Y.shared;
                      var re = Y.pending;
                      re === null ? O.next = O : (O.next = re.next, re.next = O), Y.pending = O;
                    }
                  }
                  p.lanes |= n, O = p.alternate, O !== null && (O.lanes |= n), Da(
                    p.return,
                    n,
                    t
                  ), R.lanes |= n;
                  break;
                }
                O = O.next;
              }
            } else if (p.tag === 10) y = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (y = p.return, y === null) throw Error(i(341));
              y.lanes |= n, R = y.alternate, R !== null && (R.lanes |= n), Da(y, n, t), y = p.sibling;
            } else y = p.child;
            if (y !== null) y.return = p;
            else for (y = p; y !== null; ) {
              if (y === t) {
                y = null;
                break;
              }
              if (p = y.sibling, p !== null) {
                p.return = y.return, y = p;
                break;
              }
              y = y.return;
            }
            p = y;
          }
          yt(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, a = t.pendingProps.children, un(t, n), l = Ot(l), a = a(l), t.flags |= 1, yt(e, t, a, n), t.child;
      case 14:
        return a = t.type, l = qt(a, t.pendingProps), l = qt(a.type, l), Yc(e, t, a, l, n);
      case 15:
        return Kc(e, t, t.type, t.pendingProps, n);
      case 17:
        return a = t.type, l = t.pendingProps, l = t.elementType === a ? l : qt(a, l), uo(e, t), t.tag = 1, wt(a) ? (e = !0, Vi(t)) : e = !1, un(t, n), Bc(t, a, l), Za(t, a, l, n), rs(null, t, a, !0, e, n);
      case 19:
        return nd(e, t, n);
      case 22:
        return Xc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function zd(e, t) {
    return al(e, t);
  }
  function Mm(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, a) {
    return new Mm(e, t, n, a);
  }
  function ws(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $m(e) {
    if (typeof e == "function") return ws(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Z) return 11;
      if (e === le) return 14;
    }
    return 2;
  }
  function Cr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function wo(e, t, n, a, l, p) {
    var y = 2;
    if (a = e, typeof e == "function") ws(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else e: switch (e) {
      case A:
        return Ur(n.children, l, p, t);
      case M:
        y = 8, l |= 8;
        break;
      case V:
        return e = Ht(12, n, t, l | 2), e.elementType = V, e.lanes = p, e;
      case ee:
        return e = Ht(13, n, t, l), e.elementType = ee, e.lanes = p, e;
      case ne:
        return e = Ht(19, n, t, l), e.elementType = ne, e.lanes = p, e;
      case de:
        return ko(n, l, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case $:
            y = 10;
            break e;
          case G:
            y = 9;
            break e;
          case Z:
            y = 11;
            break e;
          case le:
            y = 14;
            break e;
          case ge:
            y = 16, a = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Ht(y, n, t, l), t.elementType = e, t.type = a, t.lanes = p, t;
  }
  function Ur(e, t, n, a) {
    return e = Ht(7, e, a, t), e.lanes = n, e;
  }
  function ko(e, t, n, a) {
    return e = Ht(22, e, a, t), e.elementType = de, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ks(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function Ss(e, t, n) {
    return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Bm(e, t, n, a, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qo(0), this.expirationTimes = Qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qo(0), this.identifierPrefix = a, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Es(e, t, n, a, l, p, y, R, O) {
    return e = new Bm(e, t, n, R, O), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = Ht(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: a, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ma(p), e;
  }
  function jm(e, t, n) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: E, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: n };
  }
  function Ad(e) {
    if (!e) return _r;
    e = e._reactInternals;
    e: {
      if (Nr(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (wt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (wt(n)) return rc(e, n, t);
    }
    return t;
  }
  function Pd(e, t, n, a, l, p, y, R, O) {
    return e = Es(n, a, !0, e, l, p, y, R, O), e.context = Ad(null), n = e.current, a = xt(), l = Sr(n), p = ir(a, l), p.callback = t ?? null, xr(n, p, l), e.current.lanes = l, Pn(e, l, a), Et(e, a), e;
  }
  function So(e, t, n, a) {
    var l = t.current, p = xt(), y = Sr(l);
    return n = Ad(n), t.context === null ? t.context = n : t.pendingContext = n, t = ir(p, y), t.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (t.callback = a), e = xr(l, t, y), e !== null && (Wt(e, l, y, p), eo(e, l, y)), y;
  }
  function Eo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Cs(e, t) {
    Rd(e, t), (e = e.alternate) && Rd(e, t);
  }
  function qm() {
    return null;
  }
  var Id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zs(e) {
    this._internalRoot = e;
  }
  Co.prototype.render = zs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    So(e, t, null, null);
  }, Co.prototype.unmount = zs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      jr(function() {
        So(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function Co(e) {
    this._internalRoot = e;
  }
  Co.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = gl();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < pr.length && t !== 0 && t < pr[n].priority; n++) ;
      pr.splice(n, 0, e), n === 0 && _l(e);
    }
  };
  function As(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Nd() {
  }
  function Fm(e, t, n, a, l) {
    if (l) {
      if (typeof a == "function") {
        var p = a;
        a = function() {
          var Y = Eo(y);
          p.call(Y);
        };
      }
      var y = Pd(t, a, e, 0, null, !1, !1, "", Nd);
      return e._reactRootContainer = y, e[Jt] = y.current, Fn(e.nodeType === 8 ? e.parentNode : e), jr(), y;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof a == "function") {
      var R = a;
      a = function() {
        var Y = Eo(O);
        R.call(Y);
      };
    }
    var O = Es(e, 0, !1, null, null, !1, !1, "", Nd);
    return e._reactRootContainer = O, e[Jt] = O.current, Fn(e.nodeType === 8 ? e.parentNode : e), jr(function() {
      So(t, O, n, a);
    }), O;
  }
  function Ao(e, t, n, a, l) {
    var p = n._reactRootContainer;
    if (p) {
      var y = p;
      if (typeof l == "function") {
        var R = l;
        l = function() {
          var O = Eo(y);
          R.call(O);
        };
      }
      So(t, y, e, l);
    } else y = Fm(n, t, e, l, a);
    return Eo(y);
  }
  pl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Zo(t, n | 1), Et(t, nt()), !($e & 6) && (hn = nt() + 500, br()));
        }
        break;
      case 13:
        jr(function() {
          var a = nr(e, 1);
          if (a !== null) {
            var l = xt();
            Wt(a, e, 1, l);
          }
        }), Cs(e, 1);
    }
  }, Jo = function(e) {
    if (e.tag === 13) {
      var t = nr(e, 134217728);
      if (t !== null) {
        var n = xt();
        Wt(t, e, 134217728, n);
      }
      Cs(e, 134217728);
    }
  }, ml = function(e) {
    if (e.tag === 13) {
      var t = Sr(e), n = nr(e, t);
      if (n !== null) {
        var a = xt();
        Wt(n, e, t, a);
      }
      Cs(e, t);
    }
  }, gl = function() {
    return We;
  }, fl = function(e, t) {
    var n = We;
    try {
      return We = e, t();
    } finally {
      We = n;
    }
  }, Gr = function(e, t, n) {
    switch (t) {
      case "input":
        if (H(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var a = n[t];
            if (a !== e && a.form === e.form) {
              var l = Ui(a);
              if (!l) throw Error(i(90));
              Ne(a), H(a, l);
            }
          }
        }
        break;
      case "textarea":
        Oe(e, n);
        break;
      case "select":
        t = n.value, t != null && we(e, !!n.multiple, t, !1);
    }
  }, vi = ys, el = jr;
  var Um = { usingClientEntryPoint: !1, Events: [Vn, rn, Ui, Sn, Yr, ys] }, ai = { findFiberByHostInstance: Lr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wm = { bundleType: ai.bundleType, version: ai.version, rendererPackageName: ai.rendererPackageName, rendererConfig: ai.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: g.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = il(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ai.findFiberByHostInstance || qm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Po.isDisabled && Po.supportsFiber) try {
      Ei = Po.inject(Wm), Gt = Po;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um, Ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!As(t)) throw Error(i(200));
    return jm(e, t, null, n);
  }, Ct.createRoot = function(e, t) {
    if (!As(e)) throw Error(i(299));
    var n = !1, a = "", l = Id;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Es(e, 1, !1, null, null, n, !1, a, l), e[Jt] = t.current, Fn(e.nodeType === 8 ? e.parentNode : e), new zs(t);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = il(t), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return jr(e);
  }, Ct.hydrate = function(e, t, n) {
    if (!zo(t)) throw Error(i(200));
    return Ao(null, e, t, !0, n);
  }, Ct.hydrateRoot = function(e, t, n) {
    if (!As(e)) throw Error(i(405));
    var a = n != null && n.hydratedSources || null, l = !1, p = "", y = Id;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (p = n.identifierPrefix), n.onRecoverableError !== void 0 && (y = n.onRecoverableError)), t = Pd(t, null, e, 1, n ?? null, l, !1, p, y), e[Jt] = t.current, Fn(e), a) for (e = 0; e < a.length; e++) n = a[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Co(t);
  }, Ct.render = function(e, t, n) {
    if (!zo(t)) throw Error(i(200));
    return Ao(null, e, t, !1, n);
  }, Ct.unmountComponentAtNode = function(e) {
    if (!zo(e)) throw Error(i(40));
    return e._reactRootContainer ? (jr(function() {
      Ao(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, Ct.unstable_batchedUpdates = ys, Ct.unstable_renderSubtreeIntoContainer = function(e, t, n, a) {
    if (!zo(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Ao(e, t, n, !1, a);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var qd;
function jo() {
  if (qd) return Is.exports;
  qd = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), Is.exports = eg(), Is.exports;
}
var Fd;
function tg() {
  if (Fd) return Io;
  Fd = 1;
  var c = jo();
  return Io.createRoot = c.createRoot, Io.hydrateRoot = c.hydrateRoot, Io;
}
var Bu = tg();
const rg = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', ng = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", ig = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:visible;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:visible}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-widget__content>.panel:has(#hero),.argus-widget__content>.panel:has(.hero),.argus-widget__content>.panel:has(#hero-profile-container),.argus-widget:has(#hero),.argus-widget:has(.hero),.argus-dashboard-grid .react-grid-item:has(#hero),.argus-dashboard-grid .react-grid-item:first-child{overflow:visible!important;z-index:50!important}#profile-dropdown.hero-profile-dropdown{z-index:999999!important;position:absolute!important;top:calc(100% + 12px)!important;right:0!important;max-height:calc(100vh - 120px)!important;overflow-y:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var Fe = zt();
class Ud extends Fe.Component {
  state = {
    hasError: !1,
    error: null
  };
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
  }
  componentDidCatch(r, i) {
    console.error("ArgusDashboard ErrorBoundary caught an error:", r, i);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ _e.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ _e.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ _e.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ _e.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var Os = { exports: {} }, ci = {}, _i = { exports: {} }, og = _i.exports, Wd;
function Xs() {
  return Wd || (Wd = 1, function(c, r) {
    (function(i, o) {
      o(r);
    })(og, function(i) {
      function o(J) {
        return function(ze, Re, Ne, Be, Ue, rt, T) {
          return J(ze, Re, T);
        };
      }
      function s(J) {
        return function(ze, Re, Ne, Be) {
          if (!ze || !Re || typeof ze != "object" || typeof Re != "object")
            return J(ze, Re, Ne, Be);
          var Ue = Be.get(ze), rt = Be.get(Re);
          if (Ue && rt)
            return Ue === Re && rt === ze;
          Be.set(ze, Re), Be.set(Re, ze);
          var T = J(ze, Re, Ne, Be);
          return Be.delete(ze), Be.delete(Re), T;
        };
      }
      function u(J, pe) {
        var ze = {};
        for (var Re in J)
          ze[Re] = J[Re];
        for (var Re in pe)
          ze[Re] = pe[Re];
        return ze;
      }
      function d(J) {
        return J.constructor === Object || J.constructor == null;
      }
      function m(J) {
        return typeof J.then == "function";
      }
      function f(J, pe) {
        return J === pe || J !== J && pe !== pe;
      }
      var h = "[object Arguments]", S = "[object Boolean]", b = "[object Date]", k = "[object RegExp]", P = "[object Map]", L = "[object Number]", z = "[object Object]", C = "[object Set]", w = "[object String]", _ = Object.prototype.toString;
      function x(J) {
        var pe = J.areArraysEqual, ze = J.areDatesEqual, Re = J.areMapsEqual, Ne = J.areObjectsEqual, Be = J.areRegExpsEqual, Ue = J.areSetsEqual, rt = J.createIsNestedEqual, T = rt(H);
        function H(j, X, ce) {
          if (j === X)
            return !0;
          if (!j || !X || typeof j != "object" || typeof X != "object")
            return j !== j && X !== X;
          if (d(j) && d(X))
            return Ne(j, X, T, ce);
          var we = Array.isArray(j), Ce = Array.isArray(X);
          if (we || Ce)
            return we === Ce && pe(j, X, T, ce);
          var Ie = _.call(j);
          return Ie !== _.call(X) ? !1 : Ie === b ? ze(j, X, T, ce) : Ie === k ? Be(j, X, T, ce) : Ie === P ? Re(j, X, T, ce) : Ie === C ? Ue(j, X, T, ce) : Ie === z || Ie === h ? m(j) || m(X) ? !1 : Ne(j, X, T, ce) : Ie === S || Ie === L || Ie === w ? f(j.valueOf(), X.valueOf()) : !1;
        }
        return H;
      }
      function g(J, pe, ze, Re) {
        var Ne = J.length;
        if (pe.length !== Ne)
          return !1;
        for (; Ne-- > 0; )
          if (!ze(J[Ne], pe[Ne], Ne, Ne, J, pe, Re))
            return !1;
        return !0;
      }
      var v = s(g);
      function E(J, pe) {
        return f(J.valueOf(), pe.valueOf());
      }
      function A(J, pe, ze, Re) {
        var Ne = J.size === pe.size;
        if (!Ne)
          return !1;
        if (!J.size)
          return !0;
        var Be = {}, Ue = 0;
        return J.forEach(function(rt, T) {
          if (Ne) {
            var H = !1, j = 0;
            pe.forEach(function(X, ce) {
              !H && !Be[j] && (H = ze(T, ce, Ue, j, J, pe, Re) && ze(rt, X, T, ce, J, pe, Re)) && (Be[j] = !0), j++;
            }), Ue++, Ne = H;
          }
        }), Ne;
      }
      var M = s(A), V = "_owner", $ = Object.prototype.hasOwnProperty;
      function G(J, pe, ze, Re) {
        var Ne = Object.keys(J), Be = Ne.length;
        if (Object.keys(pe).length !== Be)
          return !1;
        for (var Ue; Be-- > 0; ) {
          if (Ue = Ne[Be], Ue === V) {
            var rt = !!J.$$typeof, T = !!pe.$$typeof;
            if ((rt || T) && rt !== T)
              return !1;
          }
          if (!$.call(pe, Ue) || !ze(J[Ue], pe[Ue], Ue, Ue, J, pe, Re))
            return !1;
        }
        return !0;
      }
      var Z = s(G);
      function ee(J, pe) {
        return J.source === pe.source && J.flags === pe.flags;
      }
      function ne(J, pe, ze, Re) {
        var Ne = J.size === pe.size;
        if (!Ne)
          return !1;
        if (!J.size)
          return !0;
        var Be = {};
        return J.forEach(function(Ue, rt) {
          if (Ne) {
            var T = !1, H = 0;
            pe.forEach(function(j, X) {
              !T && !Be[H] && (T = ze(Ue, j, rt, X, J, pe, Re)) && (Be[H] = !0), H++;
            }), Ne = T;
          }
        }), Ne;
      }
      var le = s(ne), ge = Object.freeze({
        areArraysEqual: g,
        areDatesEqual: E,
        areMapsEqual: A,
        areObjectsEqual: G,
        areRegExpsEqual: ee,
        areSetsEqual: ne,
        createIsNestedEqual: o
      }), de = Object.freeze({
        areArraysEqual: v,
        areDatesEqual: E,
        areMapsEqual: M,
        areObjectsEqual: Z,
        areRegExpsEqual: ee,
        areSetsEqual: le,
        createIsNestedEqual: o
      }), Q = x(ge);
      function ue(J, pe) {
        return Q(J, pe, void 0);
      }
      var F = x(u(ge, { createIsNestedEqual: function() {
        return f;
      } }));
      function N(J, pe) {
        return F(J, pe, void 0);
      }
      var B = x(de);
      function ae(J, pe) {
        return B(J, pe, /* @__PURE__ */ new WeakMap());
      }
      var fe = x(u(de, {
        createIsNestedEqual: function() {
          return f;
        }
      }));
      function ye(J, pe) {
        return fe(J, pe, /* @__PURE__ */ new WeakMap());
      }
      function Ae(J) {
        return x(u(ge, J(ge)));
      }
      function Le(J) {
        var pe = x(u(de, J(de)));
        return function(ze, Re, Ne) {
          return Ne === void 0 && (Ne = /* @__PURE__ */ new WeakMap()), pe(ze, Re, Ne);
        };
      }
      i.circularDeepEqual = ae, i.circularShallowEqual = ye, i.createCustomCircularEqual = Le, i.createCustomEqual = Ae, i.deepEqual = ue, i.sameValueZeroEqual = f, i.shallowEqual = N, Object.defineProperty(i, "__esModule", { value: !0 });
    });
  }(_i, _i.exports)), _i.exports;
}
var No = { exports: {} }, Vd;
function Uo() {
  if (Vd) return No.exports;
  Vd = 1;
  function c(i) {
    var o, s, u = "";
    if (typeof i == "string" || typeof i == "number") u += i;
    else if (typeof i == "object") if (Array.isArray(i)) {
      var d = i.length;
      for (o = 0; o < d; o++) i[o] && (s = c(i[o])) && (u && (u += " "), u += s);
    } else for (s in i) i[s] && (u && (u += " "), u += s);
    return u;
  }
  function r() {
    for (var i, o, s = 0, u = "", d = arguments.length; s < d; s++) (i = arguments[s]) && (o = c(i)) && (u && (u += " "), u += o);
    return u;
  }
  return No.exports = r, No.exports.clsx = r, No.exports;
}
var Me = {}, Ts, Gd;
function ag() {
  return Gd || (Gd = 1, Ts = function(r, i, o) {
    return r === i ? !0 : r.className === i.className && o(r.style, i.style) && r.width === i.width && r.autoSize === i.autoSize && r.cols === i.cols && r.draggableCancel === i.draggableCancel && r.draggableHandle === i.draggableHandle && o(r.verticalCompact, i.verticalCompact) && o(r.compactType, i.compactType) && o(r.layout, i.layout) && o(r.margin, i.margin) && o(r.containerPadding, i.containerPadding) && r.rowHeight === i.rowHeight && r.maxRows === i.maxRows && r.isBounded === i.isBounded && r.isDraggable === i.isDraggable && r.isResizable === i.isResizable && r.allowOverlap === i.allowOverlap && r.preventCollision === i.preventCollision && r.useCSSTransforms === i.useCSSTransforms && r.transformScale === i.transformScale && r.isDroppable === i.isDroppable && o(r.resizeHandles, i.resizeHandles) && o(r.resizeHandle, i.resizeHandle) && r.onLayoutChange === i.onLayoutChange && r.onDragStart === i.onDragStart && r.onDrag === i.onDrag && r.onDragStop === i.onDragStop && r.onResizeStart === i.onResizeStart && r.onResize === i.onResize && r.onResizeStop === i.onResizeStop && r.onDrop === i.onDrop && o(r.droppingItem, i.droppingItem) && o(r.innerRef, i.innerRef);
  }), Ts;
}
var Yd;
function wn() {
  if (Yd) return Me;
  Yd = 1, Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.bottom = f, Me.childrenEqual = P, Me.cloneLayout = h, Me.cloneLayoutItem = k, Me.collides = z, Me.compact = C, Me.compactItem = x, Me.compactType = Be, Me.correctBounds = g, Me.fastPositionEqual = L, Me.fastRGLPropsEqual = void 0, Me.getAllCollisions = A, Me.getFirstCollision = E, Me.getLayoutItem = v, Me.getStatics = M, Me.modifyLayout = S, Me.moveElement = V, Me.moveElementAwayFromCollision = $, Me.noop = void 0, Me.perc = G, Me.resizeItemInDirection = ye, Me.setTopLeft = Le, Me.setTransform = Ae, Me.sortLayoutItems = J, Me.sortLayoutItemsByColRow = ze, Me.sortLayoutItemsByRowCol = pe, Me.synchronizeLayoutWithChildren = Re, Me.validateLayout = Ne, Me.withLayoutItem = b;
  var c = /* @__PURE__ */ Xs(), r = i(zt());
  function i(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function o(T, H) {
    var j = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(T);
      H && (X = X.filter(function(ce) {
        return Object.getOwnPropertyDescriptor(T, ce).enumerable;
      })), j.push.apply(j, X);
    }
    return j;
  }
  function s(T) {
    for (var H = 1; H < arguments.length; H++) {
      var j = arguments[H] != null ? arguments[H] : {};
      H % 2 ? o(Object(j), !0).forEach(function(X) {
        u(T, X, j[X]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(j)) : o(Object(j)).forEach(function(X) {
        Object.defineProperty(T, X, Object.getOwnPropertyDescriptor(j, X));
      });
    }
    return T;
  }
  function u(T, H, j) {
    return (H = d(H)) in T ? Object.defineProperty(T, H, { value: j, enumerable: !0, configurable: !0, writable: !0 }) : T[H] = j, T;
  }
  function d(T) {
    var H = m(T, "string");
    return typeof H == "symbol" ? H : H + "";
  }
  function m(T, H) {
    if (typeof T != "object" || !T) return T;
    var j = T[Symbol.toPrimitive];
    if (j !== void 0) {
      var X = j.call(T, H);
      if (typeof X != "object") return X;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (H === "string" ? String : Number)(T);
  }
  function f(T) {
    let H = 0, j;
    for (let X = 0, ce = T.length; X < ce; X++)
      j = T[X].y + T[X].h, j > H && (H = j);
    return H;
  }
  function h(T) {
    const H = Array(T.length);
    for (let j = 0, X = T.length; j < X; j++)
      H[j] = k(T[j]);
    return H;
  }
  function S(T, H) {
    const j = Array(T.length);
    for (let X = 0, ce = T.length; X < ce; X++)
      H.i === T[X].i ? j[X] = H : j[X] = T[X];
    return j;
  }
  function b(T, H, j) {
    let X = v(T, H);
    return X ? (X = j(k(X)), T = S(T, X), [T, X]) : [T, null];
  }
  function k(T) {
    return {
      w: T.w,
      h: T.h,
      x: T.x,
      y: T.y,
      i: T.i,
      minW: T.minW,
      maxW: T.maxW,
      minH: T.minH,
      maxH: T.maxH,
      moved: !!T.moved,
      static: !!T.static,
      // These can be null/undefined
      isDraggable: T.isDraggable,
      isResizable: T.isResizable,
      resizeHandles: T.resizeHandles,
      isBounded: T.isBounded
    };
  }
  function P(T, H) {
    return (0, c.deepEqual)(r.default.Children.map(T, (j) => j?.key), r.default.Children.map(H, (j) => j?.key)) && (0, c.deepEqual)(r.default.Children.map(T, (j) => j?.props["data-grid"]), r.default.Children.map(H, (j) => j?.props["data-grid"]));
  }
  Me.fastRGLPropsEqual = ag();
  function L(T, H) {
    return T.left === H.left && T.top === H.top && T.width === H.width && T.height === H.height;
  }
  function z(T, H) {
    return !(T.i === H.i || T.x + T.w <= H.x || T.x >= H.x + H.w || T.y + T.h <= H.y || T.y >= H.y + H.h);
  }
  function C(T, H, j, X) {
    const ce = M(T);
    let we = f(ce);
    const Ce = J(T, H), Ie = Array(T.length);
    for (let Oe = 0, Ve = Ce.length; Oe < Ve; Oe++) {
      let Xe = k(Ce[Oe]);
      Xe.static || (Xe = x(ce, Xe, H, j, Ce, X, we), we = Math.max(we, Xe.y + Xe.h), ce.push(Xe)), Ie[T.indexOf(Ce[Oe])] = Xe, Xe.moved = !1;
    }
    return Ie;
  }
  const w = {
    x: "w",
    y: "h"
  };
  function _(T, H, j, X) {
    const ce = w[X];
    H[X] += 1;
    const we = T.map((Ce) => Ce.i).indexOf(H.i);
    for (let Ce = we + 1; Ce < T.length; Ce++) {
      const Ie = T[Ce];
      if (!Ie.static) {
        if (Ie.y > H.y + H.h) break;
        z(H, Ie) && _(T, Ie, j + H[ce], X);
      }
    }
    H[X] = j;
  }
  function x(T, H, j, X, ce, we, Ce) {
    const Ie = j === "vertical", Oe = j === "horizontal";
    if (Ie)
      for (typeof Ce == "number" ? H.y = Math.min(Ce, H.y) : H.y = Math.min(f(T), H.y); H.y > 0 && !E(T, H); )
        H.y--;
    else if (Oe)
      for (; H.x > 0 && !E(T, H); )
        H.x--;
    let Ve;
    for (; (Ve = E(T, H)) && !(j === null && we); )
      if (Oe ? _(ce, H, Ve.x + Ve.w, "x") : _(ce, H, Ve.y + Ve.h, "y"), Oe && H.x + H.w > X)
        for (H.x = X - H.w, H.y++; H.x > 0 && !E(T, H); )
          H.x--;
    return H.y = Math.max(H.y, 0), H.x = Math.max(H.x, 0), H;
  }
  function g(T, H) {
    const j = M(T);
    for (let X = 0, ce = T.length; X < ce; X++) {
      const we = T[X];
      if (we.x + we.w > H.cols && (we.x = H.cols - we.w), we.x < 0 && (we.x = 0, we.w = H.cols), !we.static) j.push(we);
      else
        for (; E(j, we); )
          we.y++;
    }
    return T;
  }
  function v(T, H) {
    for (let j = 0, X = T.length; j < X; j++)
      if (T[j].i === H) return T[j];
  }
  function E(T, H) {
    for (let j = 0, X = T.length; j < X; j++)
      if (z(T[j], H)) return T[j];
  }
  function A(T, H) {
    return T.filter((j) => z(j, H));
  }
  function M(T) {
    return T.filter((H) => H.static);
  }
  function V(T, H, j, X, ce, we, Ce, Ie, Oe) {
    if (H.static && H.isDraggable !== !0 || H.y === X && H.x === j) return T;
    "Moving element ".concat(H.i, " to [").concat(String(j), ",").concat(String(X), "] from [").concat(H.x, ",").concat(H.y, "]");
    const Ve = H.x, Xe = H.y;
    typeof j == "number" && (H.x = j), typeof X == "number" && (H.y = X), H.moved = !0;
    let lt = J(T, Ce);
    (Ce === "vertical" && typeof X == "number" ? Xe >= X : Ce === "horizontal" && typeof j == "number" ? Ve >= j : !1) && (lt = lt.reverse());
    const U = A(lt, H), K = U.length > 0;
    if (K && Oe)
      return h(T);
    if (K && we)
      return "Collision prevented on ".concat(H.i, ", reverting."), H.x = Ve, H.y = Xe, H.moved = !1, T;
    for (let oe = 0, me = U.length; oe < me; oe++) {
      const De = U[oe];
      "Resolving collision between ".concat(H.i, " at [").concat(H.x, ",").concat(H.y, "] and ").concat(De.i, " at [").concat(De.x, ",").concat(De.y, "]"), !De.moved && (De.static ? T = $(T, De, H, ce, Ce) : T = $(T, H, De, ce, Ce));
    }
    return T;
  }
  function $(T, H, j, X, ce, we) {
    const Ce = ce === "horizontal", Ie = ce === "vertical", Oe = H.static;
    if (X) {
      X = !1;
      const lt = {
        x: Ce ? Math.max(H.x - j.w, 0) : j.x,
        y: Ie ? Math.max(H.y - j.h, 0) : j.y,
        w: j.w,
        h: j.h,
        i: "-1"
      }, I = E(T, lt), U = I && I.y + I.h > H.y, K = I && H.x + H.w > I.x;
      if (I) {
        if (U && Ie)
          return V(T, j, void 0, j.y + 1, X, Oe, ce);
        if (U && ce == null)
          return H.y = j.y, j.y = j.y + j.h, T;
        if (K && Ce)
          return V(T, H, j.x, void 0, X, Oe, ce);
      } else return "Doing reverse collision on ".concat(j.i, " up to [").concat(lt.x, ",").concat(lt.y, "]."), V(T, j, Ce ? lt.x : void 0, Ie ? lt.y : void 0, X, Oe, ce);
    }
    const Ve = Ce ? j.x + 1 : void 0, Xe = Ie ? j.y + 1 : void 0;
    return Ve == null && Xe == null ? T : V(T, j, Ce ? j.x + 1 : void 0, Ie ? j.y + 1 : void 0, X, Oe, ce);
  }
  function G(T) {
    return T * 100 + "%";
  }
  const Z = (T, H, j, X) => T + j > X ? H : j, ee = (T, H, j) => T < 0 ? H : j, ne = (T) => Math.max(0, T), le = (T) => Math.max(0, T), ge = (T, H, j) => {
    let {
      left: X,
      height: ce,
      width: we
    } = H;
    const Ce = T.top - (ce - T.height);
    return {
      left: X,
      width: we,
      height: ee(Ce, T.height, ce),
      top: le(Ce)
    };
  }, de = (T, H, j) => {
    let {
      top: X,
      left: ce,
      height: we,
      width: Ce
    } = H;
    return {
      top: X,
      height: we,
      width: Z(T.left, T.width, Ce, j),
      left: ne(ce)
    };
  }, Q = (T, H, j) => {
    let {
      top: X,
      height: ce,
      width: we
    } = H;
    const Ce = T.left - (we - T.width);
    return {
      height: ce,
      width: Ce < 0 ? T.width : Z(T.left, T.width, we, j),
      top: le(X),
      left: ne(Ce)
    };
  }, ue = (T, H, j) => {
    let {
      top: X,
      left: ce,
      height: we,
      width: Ce
    } = H;
    return {
      width: Ce,
      left: ce,
      height: ee(X, T.height, we),
      top: le(X)
    };
  }, fe = {
    n: ge,
    ne: function() {
      return ge(arguments.length <= 0 ? void 0 : arguments[0], de(...arguments));
    },
    e: de,
    se: function() {
      return ue(arguments.length <= 0 ? void 0 : arguments[0], de(...arguments));
    },
    s: ue,
    sw: function() {
      return ue(arguments.length <= 0 ? void 0 : arguments[0], Q(...arguments));
    },
    w: Q,
    nw: function() {
      return ge(arguments.length <= 0 ? void 0 : arguments[0], Q(...arguments));
    }
  };
  function ye(T, H, j, X) {
    const ce = fe[T];
    return ce ? ce(H, s(s({}, H), j), X) : j;
  }
  function Ae(T) {
    let {
      top: H,
      left: j,
      width: X,
      height: ce
    } = T;
    const we = "translate(".concat(j, "px,").concat(H, "px)");
    return {
      transform: we,
      WebkitTransform: we,
      MozTransform: we,
      msTransform: we,
      OTransform: we,
      width: "".concat(X, "px"),
      height: "".concat(ce, "px"),
      position: "absolute"
    };
  }
  function Le(T) {
    let {
      top: H,
      left: j,
      width: X,
      height: ce
    } = T;
    return {
      top: "".concat(H, "px"),
      left: "".concat(j, "px"),
      width: "".concat(X, "px"),
      height: "".concat(ce, "px"),
      position: "absolute"
    };
  }
  function J(T, H) {
    return H === "horizontal" ? ze(T) : H === "vertical" ? pe(T) : T;
  }
  function pe(T) {
    return T.slice(0).sort(function(H, j) {
      return H.y > j.y || H.y === j.y && H.x > j.x ? 1 : H.y === j.y && H.x === j.x ? 0 : -1;
    });
  }
  function ze(T) {
    return T.slice(0).sort(function(H, j) {
      return H.x > j.x || H.x === j.x && H.y > j.y ? 1 : -1;
    });
  }
  function Re(T, H, j, X, ce) {
    T = T || [];
    const we = [];
    r.default.Children.forEach(H, (Ie) => {
      if (Ie?.key == null) return;
      const Oe = v(T, String(Ie.key)), Ve = Ie.props["data-grid"];
      Oe && Ve == null ? we.push(k(Oe)) : Ve ? we.push(k(s(s({}, Ve), {}, {
        i: Ie.key
      }))) : we.push(k({
        w: 1,
        h: 1,
        x: 0,
        y: f(we),
        i: String(Ie.key)
      }));
    });
    const Ce = g(we, {
      cols: j
    });
    return ce ? Ce : C(Ce, X, j);
  }
  function Ne(T) {
    let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const j = ["x", "y", "w", "h"];
    if (!Array.isArray(T)) throw new Error(H + " must be an array!");
    for (let X = 0, ce = T.length; X < ce; X++) {
      const we = T[X];
      for (let Ce = 0; Ce < j.length; Ce++) {
        const Ie = j[Ce], Oe = we[Ie];
        if (typeof Oe != "number" || Number.isNaN(Oe))
          throw new Error("ReactGridLayout: ".concat(H, "[").concat(X, "].").concat(Ie, " must be a number! Received: ").concat(Oe, " (").concat(typeof Oe, ")"));
      }
      if (typeof we.i < "u" && typeof we.i != "string")
        throw new Error("ReactGridLayout: ".concat(H, "[").concat(X, "].i must be a string! Received: ").concat(we.i, " (").concat(typeof we.i, ")"));
    }
  }
  function Be(T) {
    const {
      verticalCompact: H,
      compactType: j
    } = T || {};
    return H === !1 ? null : j;
  }
  function Ue() {
  }
  const rt = () => {
  };
  return Me.noop = rt, Me;
}
var sr = {}, Kd;
function Qs() {
  if (Kd) return sr;
  Kd = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.calcGridColWidth = c, sr.calcGridItemPosition = i, sr.calcGridItemWHPx = r, sr.calcWH = s, sr.calcXY = o, sr.clamp = u;
  function c(d) {
    const {
      margin: m,
      containerPadding: f,
      containerWidth: h,
      cols: S
    } = d;
    return (h - m[0] * (S - 1) - f[0] * 2) / S;
  }
  function r(d, m, f) {
    return Number.isFinite(d) ? Math.round(m * d + Math.max(0, d - 1) * f) : d;
  }
  function i(d, m, f, h, S, b) {
    const {
      margin: k,
      containerPadding: P,
      rowHeight: L
    } = d, z = c(d), C = {};
    return b && b.resizing ? (C.width = Math.round(b.resizing.width), C.height = Math.round(b.resizing.height)) : (C.width = r(h, z, k[0]), C.height = r(S, L, k[1])), b && b.dragging ? (C.top = Math.round(b.dragging.top), C.left = Math.round(b.dragging.left)) : b && b.resizing && typeof b.resizing.top == "number" && typeof b.resizing.left == "number" ? (C.top = Math.round(b.resizing.top), C.left = Math.round(b.resizing.left)) : (C.top = Math.round((L + k[1]) * f + P[1]), C.left = Math.round((z + k[0]) * m + P[0])), C;
  }
  function o(d, m, f, h, S) {
    const {
      margin: b,
      containerPadding: k,
      cols: P,
      rowHeight: L,
      maxRows: z
    } = d, C = c(d);
    let w = Math.round((f - k[0]) / (C + b[0])), _ = Math.round((m - k[1]) / (L + b[1]));
    return w = u(w, 0, P - h), _ = u(_, 0, z - S), {
      x: w,
      y: _
    };
  }
  function s(d, m, f, h, S, b) {
    const {
      margin: k,
      maxRows: P,
      cols: L,
      rowHeight: z
    } = d, C = c(d);
    let w = Math.round((m + k[0]) / (C + k[0])), _ = Math.round((f + k[1]) / (z + k[1])), x = u(w, 0, L - h), g = u(_, 0, P - S);
    return ["sw", "w", "nw"].indexOf(b) !== -1 && (x = u(w, 0, L)), ["nw", "n", "ne"].indexOf(b) !== -1 && (g = u(_, 0, P)), {
      w: x,
      h: g
    };
  }
  function u(d, m, f) {
    return Math.max(Math.min(d, f), m);
  }
  return sr;
}
var di = {}, Ds = { exports: {} }, Hs, Xd;
function sg() {
  if (Xd) return Hs;
  Xd = 1;
  var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hs = c, Hs;
}
var Ms, Qd;
function lg() {
  if (Qd) return Ms;
  Qd = 1;
  var c = /* @__PURE__ */ sg();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Ms = function() {
    function o(d, m, f, h, S, b) {
      if (b !== c) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    o.isRequired = o;
    function s() {
      return o;
    }
    var u = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: s,
      element: o,
      elementType: o,
      instanceOf: s,
      node: o,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return u.PropTypes = u, u;
  }, Ms;
}
var Zd;
function Pr() {
  return Zd || (Zd = 1, Ds.exports = /* @__PURE__ */ lg()()), Ds.exports;
}
var ui = { exports: {} }, $s, Jd;
function cg() {
  if (Jd) return $s;
  Jd = 1;
  var c = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, d = (I, U) => {
    for (var K in U)
      r(I, K, { get: U[K], enumerable: !0 });
  }, m = (I, U, K, oe) => {
    if (U && typeof U == "object" || typeof U == "function")
      for (let me of o(U))
        !u.call(I, me) && me !== K && r(I, me, { get: () => U[me], enumerable: !(oe = i(U, me)) || oe.enumerable });
    return I;
  }, f = (I, U, K) => (K = I != null ? c(s(I)) : {}, m(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !I || !I.__esModule ? r(K, "default", { value: I, enumerable: !0 }) : K,
    I
  )), h = (I) => m(r({}, "__esModule", { value: !0 }), I), S = {};
  d(S, {
    DraggableCore: () => Xe,
    default: () => lt
  }), $s = h(S);
  var b = f(zt()), k = f(/* @__PURE__ */ Pr()), P = f(jo()), L = Uo();
  function z(I, U) {
    for (let K = 0, oe = I.length; K < oe; K++)
      if (U.apply(U, [I[K], K, I])) return I[K];
  }
  function C(I) {
    return typeof I == "function" || Object.prototype.toString.call(I) === "[object Function]";
  }
  function w(I) {
    return typeof I == "number" && !isNaN(I);
  }
  function _(I) {
    return parseInt(I, 10);
  }
  function x(I, U, K) {
    if (I[U])
      return new Error(`Invalid prop ${U} passed to ${K} - do not set this, set it on the child.`);
  }
  var g = ["Moz", "Webkit", "O", "ms"];
  function v(I = "transform") {
    var U, K;
    if (typeof window > "u") return "";
    const oe = (K = (U = window.document) == null ? void 0 : U.documentElement) == null ? void 0 : K.style;
    if (!oe || I in oe) return "";
    for (let me = 0; me < g.length; me++)
      if (E(I, g[me]) in oe) return g[me];
    return "";
  }
  function E(I, U) {
    return U ? `${U}${A(I)}` : I;
  }
  function A(I) {
    let U = "", K = !0;
    for (let oe = 0; oe < I.length; oe++)
      K ? (U += I[oe].toUpperCase(), K = !1) : I[oe] === "-" ? K = !0 : U += I[oe];
    return U;
  }
  var M = v(), V = "";
  function $(I, U) {
    var K;
    V || (V = (K = z([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(me) {
      return C(I[me]);
    })) != null ? K : "");
    const oe = I[V];
    return C(oe) ? !!oe.call(I, U) : !1;
  }
  function G(I, U, K) {
    let oe = I;
    do {
      if ($(oe, U)) return !0;
      if (oe === K) return !1;
      oe = oe.parentNode;
    } while (oe);
    return !1;
  }
  function Z(I, U, K, oe) {
    if (!I) return;
    const me = { capture: !0, ...oe }, De = K;
    I.addEventListener ? I.addEventListener(U, De, me) : I.attachEvent ? I.attachEvent("on" + U, De) : I["on" + U] = De;
  }
  function ee(I, U, K, oe) {
    if (!I) return;
    const me = { capture: !0, ...oe }, De = K;
    I.removeEventListener ? I.removeEventListener(U, De, me) : I.detachEvent ? I.detachEvent("on" + U, De) : I["on" + U] = null;
  }
  function ne(I) {
    let U = I.clientHeight;
    const K = I.ownerDocument.defaultView.getComputedStyle(I);
    return U += _(K.borderTopWidth), U += _(K.borderBottomWidth), U;
  }
  function le(I) {
    let U = I.clientWidth;
    const K = I.ownerDocument.defaultView.getComputedStyle(I);
    return U += _(K.borderLeftWidth), U += _(K.borderRightWidth), U;
  }
  function ge(I) {
    let U = I.clientHeight;
    const K = I.ownerDocument.defaultView.getComputedStyle(I);
    return U -= _(K.paddingTop), U -= _(K.paddingBottom), U;
  }
  function de(I) {
    let U = I.clientWidth;
    const K = I.ownerDocument.defaultView.getComputedStyle(I);
    return U -= _(K.paddingLeft), U -= _(K.paddingRight), U;
  }
  function Q(I, U, K) {
    const me = U === U.ownerDocument.body ? { left: 0, top: 0 } : U.getBoundingClientRect(), De = (I.clientX + U.scrollLeft - me.left) / K, He = (I.clientY + U.scrollTop - me.top) / K;
    return { x: De, y: He };
  }
  function ue(I, U) {
    const K = N(I, U, "px");
    return { [E("transform", M)]: K };
  }
  function F(I, U) {
    return N(I, U, "");
  }
  function N({ x: I, y: U }, K, oe) {
    let me = `translate(${I}${oe},${U}${oe})`;
    if (K) {
      const De = `${typeof K.x == "string" ? K.x : K.x + oe}`, He = `${typeof K.y == "string" ? K.y : K.y + oe}`;
      me = `translate(${De}, ${He})` + me;
    }
    return me;
  }
  function B(I, U) {
    return I.targetTouches && z(I.targetTouches, (K) => U === K.identifier) || I.changedTouches && z(I.changedTouches, (K) => U === K.identifier);
  }
  function ae(I) {
    if (I.targetTouches && I.targetTouches[0]) return I.targetTouches[0].identifier;
    if (I.changedTouches && I.changedTouches[0]) return I.changedTouches[0].identifier;
  }
  function fe() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function ye(I, U) {
    if (!I) return;
    let K = I.getElementById("react-draggable-style-el");
    if (!K) {
      K = I.createElement("style"), K.type = "text/css", K.id = "react-draggable-style-el";
      const oe = U ?? fe();
      oe && K.setAttribute("nonce", oe), K.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, K.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, I.getElementsByTagName("head")[0].appendChild(K);
    }
    I.body && J(I.body, "react-draggable-transparent-selection");
  }
  function Ae(I) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Le(I);
    }) : Le(I);
  }
  function Le(I) {
    if (I)
      try {
        I.body && pe(I.body, "react-draggable-transparent-selection");
        const U = I.selection;
        if (U)
          U.empty();
        else {
          const K = (I.defaultView || window).getSelection();
          K && K.type !== "Caret" && K.removeAllRanges();
        }
      } catch {
      }
  }
  function J(I, U) {
    I.classList ? I.classList.add(U) : I.className.match(new RegExp(`(?:^|\\s)${U}(?!\\S)`)) || (I.className += ` ${U}`);
  }
  function pe(I, U) {
    I.classList ? I.classList.remove(U) : I.className = I.className.replace(new RegExp(`(?:^|\\s)${U}(?!\\S)`, "g"), "");
  }
  function ze(I, U, K) {
    if (!I.props.bounds) return [U, K];
    let { bounds: oe } = I.props;
    oe = typeof oe == "string" ? oe : H(oe);
    const me = j(I);
    if (typeof oe == "string") {
      const { ownerDocument: De } = me, He = De.defaultView;
      if (!He)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Qe;
      if (oe === "parent" ? Qe = me.parentNode : Qe = me.getRootNode().querySelector(oe), !(Qe instanceof He.HTMLElement))
        throw new Error('Bounds selector "' + oe + '" could not find an element.');
      const pt = Qe, Mt = He.getComputedStyle(me), Vt = He.getComputedStyle(pt);
      oe = {
        left: -me.offsetLeft + _(Vt.paddingLeft) + _(Mt.marginLeft),
        top: -me.offsetTop + _(Vt.paddingTop) + _(Mt.marginTop),
        right: de(pt) - le(me) - me.offsetLeft + _(Vt.paddingRight) - _(Mt.marginRight),
        bottom: ge(pt) - ne(me) - me.offsetTop + _(Vt.paddingBottom) - _(Mt.marginBottom)
      };
    }
    return w(oe.right) && (U = Math.min(U, oe.right)), w(oe.bottom) && (K = Math.min(K, oe.bottom)), w(oe.left) && (U = Math.max(U, oe.left)), w(oe.top) && (K = Math.max(K, oe.top)), [U, K];
  }
  function Re(I, U, K) {
    const oe = Math.round(U / I[0]) * I[0], me = Math.round(K / I[1]) * I[1];
    return [oe, me];
  }
  function Ne(I) {
    return I.props.axis === "both" || I.props.axis === "x";
  }
  function Be(I) {
    return I.props.axis === "both" || I.props.axis === "y";
  }
  function Ue(I, U, K) {
    const oe = typeof U == "number" ? B(I, U) : null;
    if (typeof U == "number" && !oe) return null;
    const me = j(K), De = K.props.offsetParent || me.offsetParent || me.ownerDocument.body;
    return Q(oe || I, De, K.props.scale);
  }
  function rt(I, U, K) {
    const oe = !w(I.lastX), me = j(I);
    return oe ? {
      node: me,
      deltaX: 0,
      deltaY: 0,
      lastX: U,
      lastY: K,
      x: U,
      y: K
    } : {
      node: me,
      deltaX: U - I.lastX,
      deltaY: K - I.lastY,
      lastX: I.lastX,
      lastY: I.lastY,
      x: U,
      y: K
    };
  }
  function T(I, U) {
    const K = I.props.scale;
    return {
      node: U.node,
      x: I.state.x + U.deltaX / K,
      y: I.state.y + U.deltaY / K,
      deltaX: U.deltaX / K,
      deltaY: U.deltaY / K,
      lastX: I.state.x,
      lastY: I.state.y
    };
  }
  function H(I) {
    return {
      left: I.left,
      top: I.top,
      right: I.right,
      bottom: I.bottom
    };
  }
  function j(I) {
    const U = I.findDOMNode();
    if (!U)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return U;
  }
  var X = f(zt()), ce = f(/* @__PURE__ */ Pr()), we = f(jo()), Ce = function() {
  }, Ie = Ce, Oe = {
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
  }, Ve = Oe.mouse, Xe = class extends X.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (I) => {
        if (this.props.onMouseDown(I), !this.props.allowAnyClick && (typeof I.button == "number" && I.button !== 0 || I.ctrlKey)) return !1;
        const U = this.findDOMNode();
        if (!U || !U.ownerDocument || !U.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: K } = U;
        if (this.props.disabled || !(I.target instanceof K.defaultView.Node) || this.props.handle && !G(I.target, this.props.handle, U) || this.props.cancel && G(I.target, this.props.cancel, U))
          return;
        I.type === "touchstart" && !this.props.allowMobileScroll && I.preventDefault();
        const oe = ae(I);
        this.touchIdentifier = oe;
        const me = Ue(I, oe, this);
        if (me == null) return;
        const { x: De, y: He } = me, Qe = rt(this, De, He);
        Ie("calling", this.props.onStart), !(this.props.onStart(I, Qe) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && ye(K, this.props.nonce), this.dragging = !0, this.lastX = De, this.lastY = He, Z(K, Ve.move, this.handleDrag), Z(K, Ve.stop, this.handleDragStop));
      }, this.handleDrag = (I) => {
        const U = Ue(I, this.touchIdentifier, this);
        if (U == null) return;
        let { x: K, y: oe } = U;
        if (Array.isArray(this.props.grid)) {
          let He = K - this.lastX, Qe = oe - this.lastY;
          if ([He, Qe] = Re(this.props.grid, He, Qe), !He && !Qe) return;
          K = this.lastX + He, oe = this.lastY + Qe;
        }
        const me = rt(this, K, oe);
        if (this.props.onDrag(I, me) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const He = document.createEvent("MouseEvents");
            He.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(He);
          }
          return;
        }
        this.lastX = K, this.lastY = oe;
      }, this.handleDragStop = (I) => {
        if (!this.dragging) return;
        const U = Ue(I, this.touchIdentifier, this);
        if (U == null) return;
        let { x: K, y: oe } = U;
        if (Array.isArray(this.props.grid)) {
          let Qe = K - this.lastX || 0, pt = oe - this.lastY || 0;
          [Qe, pt] = Re(this.props.grid, Qe, pt), K = this.lastX + Qe, oe = this.lastY + pt;
        }
        const me = rt(this, K, oe);
        if (this.props.onStop(I, me) === !1 || this.mounted === !1) return !1;
        const He = this.findDOMNode();
        He && this.props.enableUserSelectHack && Ae(He.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, He && (ee(He.ownerDocument, Ve.move, this.handleDrag), ee(He.ownerDocument, Ve.stop, this.handleDragStop));
      }, this.onMouseDown = (I) => (Ve = Oe.mouse, this.handleDragStart(I)), this.onMouseUp = (I) => (Ve = Oe.mouse, this.handleDragStop(I)), this.onTouchStart = (I) => (Ve = Oe.touch, this.handleDragStart(I)), this.onTouchEnd = (I) => (Ve = Oe.touch, this.handleDragStop(I));
    }
    componentDidMount() {
      this.mounted = !0;
      const I = this.findDOMNode();
      I && Z(I, Oe.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const I = this.findDOMNode();
      if (I) {
        const { ownerDocument: U } = I;
        ee(U, Oe.mouse.move, this.handleDrag), ee(U, Oe.touch.move, this.handleDrag), ee(U, Oe.mouse.stop, this.handleDragStop), ee(U, Oe.touch.stop, this.handleDragStop), ee(I, Oe.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Ae(U);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var I;
      if ((I = this.props) != null && I.nodeRef)
        return this.props.nodeRef.current;
      const U = we.default;
      return typeof U.findDOMNode == "function" ? U.findDOMNode(this) : null;
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
  Xe.displayName = "DraggableCore", Xe.propTypes = {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: ce.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: ce.default.bool,
    children: ce.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: ce.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: ce.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(I, U) {
      if (I[U] && I[U].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: ce.default.arrayOf(ce.default.number),
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
    handle: ce.default.string,
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
    cancel: ce.default.string,
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
    nodeRef: ce.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: ce.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: ce.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: ce.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: ce.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: ce.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: ce.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: x,
    style: x,
    transform: x
  }, Xe.defaultProps = {
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
  var lt = class extends b.Component {
    constructor(I) {
      super(I), this.onDragStart = (U, K) => {
        if (this.props.onStart(U, T(this, K)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (U, K) => {
        if (!this.state.dragging) return !1;
        const oe = T(this, K), me = {
          x: oe.x,
          y: oe.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: He, y: Qe } = me;
          me.x += this.state.slackX, me.y += this.state.slackY;
          const [pt, Mt] = ze(this, me.x, me.y);
          me.x = pt, me.y = Mt, me.slackX = this.state.slackX + (He - me.x), me.slackY = this.state.slackY + (Qe - me.y), oe.x = me.x, oe.y = me.y, oe.deltaX = me.x - this.state.x, oe.deltaY = me.y - this.state.y;
        }
        if (this.props.onDrag(U, oe) === !1) return !1;
        this.setState(me);
      }, this.onDragStop = (U, K) => {
        if (!this.state.dragging || this.props.onStop(U, T(this, K)) === !1) return !1;
        const me = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: He, y: Qe } = this.props.position;
          me.x = He, me.y = Qe;
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
    static getDerivedStateFromProps({ position: I }, { prevPropsPosition: U }) {
      return I && (!U || I.x !== U.x || I.y !== U.y) ? {
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
      const U = P.default;
      return typeof U.findDOMNode == "function" ? U.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: I,
        bounds: U,
        children: K,
        defaultPosition: oe,
        defaultClassName: me,
        defaultClassNameDragging: De,
        defaultClassNameDragged: He,
        position: Qe,
        positionOffset: pt,
        scale: Mt,
        ...Vt
      } = this.props;
      let Rr = {}, Gr = null;
      const Zt = !!!Qe || this.state.dragging, kn = Qe || oe, Sn = {
        // Set left if horizontal drag is enabled
        x: Ne(this) && Zt ? this.state.x : kn.x,
        // Set top if vertical drag is enabled
        y: Be(this) && Zt ? this.state.y : kn.y
      };
      this.state.isElementSVG ? Gr = F(Sn, pt) : Rr = ue(Sn, pt);
      const Yr = b.Children.only(K), vi = (0, L.clsx)(Yr.props.className || "", me, {
        [De]: this.state.dragging,
        [He]: this.state.dragged
      });
      return /* @__PURE__ */ b.createElement(Xe, { ...Vt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, b.cloneElement(Yr, {
        className: vi,
        style: { ...Yr.props.style, ...Rr },
        transform: Gr
      }));
    }
  };
  return lt.displayName = "Draggable", lt.propTypes = {
    // Accepts all props <DraggableCore> accepts.
    ...Xe.propTypes,
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
    ...Xe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, $s;
}
var eu;
function Zs() {
  if (eu) return ui.exports;
  eu = 1;
  const c = cg(), r = c.DraggableCore, i = c.default || c;
  return ui.exports = i, ui.exports.default = i, ui.exports.DraggableCore = r, ui.exports;
}
var pi = { exports: {} }, mi = {}, Lo = {}, tu;
function dg() {
  if (tu) return Lo;
  tu = 1, Lo.__esModule = !0, Lo.cloneElement = m;
  var c = r(zt());
  function r(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function i(f, h) {
    var S = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(f);
      h && (b = b.filter(function(k) {
        return Object.getOwnPropertyDescriptor(f, k).enumerable;
      })), S.push.apply(S, b);
    }
    return S;
  }
  function o(f) {
    for (var h = 1; h < arguments.length; h++) {
      var S = arguments[h] != null ? arguments[h] : {};
      h % 2 ? i(Object(S), !0).forEach(function(b) {
        s(f, b, S[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(S)) : i(Object(S)).forEach(function(b) {
        Object.defineProperty(f, b, Object.getOwnPropertyDescriptor(S, b));
      });
    }
    return f;
  }
  function s(f, h, S) {
    return h = u(h), h in f ? Object.defineProperty(f, h, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : f[h] = S, f;
  }
  function u(f) {
    var h = d(f, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function d(f, h) {
    if (typeof f != "object" || f === null) return f;
    var S = f[Symbol.toPrimitive];
    if (S !== void 0) {
      var b = S.call(f, h);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(f);
  }
  function m(f, h) {
    return h.style && f.props.style && (h.style = o(o({}, f.props.style), h.style)), h.className && f.props.className && (h.className = f.props.className + " " + h.className), /* @__PURE__ */ c.default.cloneElement(f, h);
  }
  return Lo;
}
var gi = {}, ru;
function ju() {
  if (ru) return gi;
  ru = 1, gi.__esModule = !0, gi.resizableProps = void 0;
  var c = r(/* @__PURE__ */ Pr());
  Zs();
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: c.default.oneOf(["both", "x", "y", "none"]),
    className: c.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: c.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: c.default.shape({
      allowAnyClick: c.default.bool,
      cancel: c.default.string,
      children: c.default.node,
      disabled: c.default.bool,
      enableUserSelectHack: c.default.bool,
      offsetParent: c.default.node,
      grid: c.default.arrayOf(c.default.number),
      handle: c.default.string,
      nodeRef: c.default.object,
      onStart: c.default.func,
      onDrag: c.default.func,
      onStop: c.default.func,
      onMouseDown: c.default.func,
      scale: c.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var s = arguments.length, u = new Array(s), d = 0; d < s; d++)
        u[d] = arguments[d];
      var m = u[0];
      if (m.axis === "both" || m.axis === "y") {
        var f;
        return (f = c.default.number).isRequired.apply(f, u);
      }
      return c.default.number.apply(c.default, u);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: c.default.oneOfType([c.default.node, c.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: c.default.arrayOf(c.default.number),
    lockAspectRatio: c.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: c.default.arrayOf(c.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: c.default.arrayOf(c.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: c.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: c.default.func,
    /*
    * Called on resize event
    * */
    onResize: c.default.func,
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
    resizeHandles: c.default.arrayOf(c.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: c.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var s = arguments.length, u = new Array(s), d = 0; d < s; d++)
        u[d] = arguments[d];
      var m = u[0];
      if (m.axis === "both" || m.axis === "x") {
        var f;
        return (f = c.default.number).isRequired.apply(f, u);
      }
      return c.default.number.apply(c.default, u);
    }
  };
  return gi.resizableProps = i, gi;
}
var nu;
function qu() {
  if (nu) return mi;
  nu = 1, mi.__esModule = !0, mi.default = void 0;
  var c = d(zt()), r = Zs(), i = dg(), o = ju(), s = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function u(w) {
    if (typeof WeakMap != "function") return null;
    var _ = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (u = function(v) {
      return v ? x : _;
    })(w);
  }
  function d(w, _) {
    if (w && w.__esModule)
      return w;
    if (w === null || typeof w != "object" && typeof w != "function")
      return { default: w };
    var x = u(_);
    if (x && x.has(w))
      return x.get(w);
    var g = {}, v = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in w)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(w, E)) {
        var A = v ? Object.getOwnPropertyDescriptor(w, E) : null;
        A && (A.get || A.set) ? Object.defineProperty(g, E, A) : g[E] = w[E];
      }
    return g.default = w, x && x.set(w, g), g;
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(w) {
      for (var _ = 1; _ < arguments.length; _++) {
        var x = arguments[_];
        for (var g in x)
          Object.prototype.hasOwnProperty.call(x, g) && (w[g] = x[g]);
      }
      return w;
    }, m.apply(this, arguments);
  }
  function f(w, _) {
    if (w == null) return {};
    var x = {}, g = Object.keys(w), v, E;
    for (E = 0; E < g.length; E++)
      v = g[E], !(_.indexOf(v) >= 0) && (x[v] = w[v]);
    return x;
  }
  function h(w, _) {
    var x = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(w);
      _ && (g = g.filter(function(v) {
        return Object.getOwnPropertyDescriptor(w, v).enumerable;
      })), x.push.apply(x, g);
    }
    return x;
  }
  function S(w) {
    for (var _ = 1; _ < arguments.length; _++) {
      var x = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? h(Object(x), !0).forEach(function(g) {
        b(w, g, x[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(x)) : h(Object(x)).forEach(function(g) {
        Object.defineProperty(w, g, Object.getOwnPropertyDescriptor(x, g));
      });
    }
    return w;
  }
  function b(w, _, x) {
    return _ = k(_), _ in w ? Object.defineProperty(w, _, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : w[_] = x, w;
  }
  function k(w) {
    var _ = P(w, "string");
    return typeof _ == "symbol" ? _ : String(_);
  }
  function P(w, _) {
    if (typeof w != "object" || w === null) return w;
    var x = w[Symbol.toPrimitive];
    if (x !== void 0) {
      var g = x.call(w, _);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(w);
  }
  function L(w, _) {
    w.prototype = Object.create(_.prototype), w.prototype.constructor = w, z(w, _);
  }
  function z(w, _) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, v) {
      return g.__proto__ = v, g;
    }, z(w, _);
  }
  var C = /* @__PURE__ */ function(w) {
    L(_, w);
    function _() {
      for (var g, v = arguments.length, E = new Array(v), A = 0; A < v; A++)
        E[A] = arguments[A];
      return g = w.call.apply(w, [this].concat(E)) || this, g.handleRefs = {}, g.lastHandleRect = null, g.slack = null, g;
    }
    var x = _.prototype;
    return x.componentWillUnmount = function() {
      this.resetData();
    }, x.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, x.runConstraints = function(v, E) {
      var A = this.props, M = A.minConstraints, V = A.maxConstraints, $ = A.lockAspectRatio;
      if (!M && !V && !$) return [v, E];
      if ($) {
        var G = this.props.width / this.props.height, Z = v - this.props.width, ee = E - this.props.height;
        Math.abs(Z) > Math.abs(ee * G) ? E = v / G : v = E * G;
      }
      var ne = v, le = E, ge = this.slack || [0, 0], de = ge[0], Q = ge[1];
      return v += de, E += Q, M && (v = Math.max(M[0], v), E = Math.max(M[1], E)), V && (v = Math.min(V[0], v), E = Math.min(V[1], E)), this.slack = [de + (ne - v), Q + (le - E)], [v, E];
    }, x.resizeHandler = function(v, E) {
      var A = this;
      return function(M, V) {
        var $ = V.node, G = V.deltaX, Z = V.deltaY;
        v === "onResizeStart" && A.resetData();
        var ee = (A.props.axis === "both" || A.props.axis === "x") && E !== "n" && E !== "s", ne = (A.props.axis === "both" || A.props.axis === "y") && E !== "e" && E !== "w";
        if (!(!ee && !ne)) {
          var le = E[0], ge = E[E.length - 1], de = $.getBoundingClientRect();
          if (A.lastHandleRect != null) {
            if (ge === "w") {
              var Q = de.left - A.lastHandleRect.left;
              G += Q;
            }
            if (le === "n") {
              var ue = de.top - A.lastHandleRect.top;
              Z += ue;
            }
          }
          A.lastHandleRect = de, ge === "w" && (G = -G), le === "n" && (Z = -Z);
          var F = A.props.width + (ee ? G / A.props.transformScale : 0), N = A.props.height + (ne ? Z / A.props.transformScale : 0), B = A.runConstraints(F, N);
          F = B[0], N = B[1];
          var ae = F !== A.props.width || N !== A.props.height, fe = typeof A.props[v] == "function" ? A.props[v] : null, ye = v === "onResize" && !ae;
          fe && !ye && (M.persist == null || M.persist(), fe(M, {
            node: $,
            size: {
              width: F,
              height: N
            },
            handle: E
          })), v === "onResizeStop" && A.resetData();
        }
      };
    }, x.renderResizeHandle = function(v, E) {
      var A = this.props.handle;
      if (!A)
        return /* @__PURE__ */ c.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + v,
          ref: E
        });
      if (typeof A == "function")
        return A(v, E);
      var M = typeof A.type == "string", V = S({
        ref: E
      }, M ? {} : {
        handleAxis: v
      });
      return /* @__PURE__ */ c.cloneElement(A, V);
    }, x.render = function() {
      var v = this, E = this.props, A = E.children, M = E.className, V = E.draggableOpts;
      E.width, E.height, E.handle, E.handleSize, E.lockAspectRatio, E.axis, E.minConstraints, E.maxConstraints, E.onResize, E.onResizeStop, E.onResizeStart;
      var $ = E.resizeHandles;
      E.transformScale;
      var G = f(E, s);
      return (0, i.cloneElement)(A, S(S({}, G), {}, {
        className: (M ? M + " " : "") + "react-resizable",
        children: [].concat(A.props.children, $.map(function(Z) {
          var ee, ne = (ee = v.handleRefs[Z]) != null ? ee : v.handleRefs[Z] = /* @__PURE__ */ c.createRef();
          return /* @__PURE__ */ c.createElement(r.DraggableCore, m({}, V, {
            nodeRef: ne,
            key: "resizableHandle-" + Z,
            onStop: v.resizeHandler("onResizeStop", Z),
            onStart: v.resizeHandler("onResizeStart", Z),
            onDrag: v.resizeHandler("onResize", Z)
          }), v.renderResizeHandle(Z, ne));
        }))
      }));
    }, _;
  }(c.Component);
  return mi.default = C, C.propTypes = o.resizableProps, C.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, mi;
}
var fi = {}, iu;
function ug() {
  if (iu) return fi;
  iu = 1, fi.__esModule = !0, fi.default = void 0;
  var c = m(zt()), r = u(/* @__PURE__ */ Pr()), i = u(qu()), o = ju(), s = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function u(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function d(_) {
    if (typeof WeakMap != "function") return null;
    var x = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (d = function(E) {
      return E ? g : x;
    })(_);
  }
  function m(_, x) {
    if (_ && _.__esModule)
      return _;
    if (_ === null || typeof _ != "object" && typeof _ != "function")
      return { default: _ };
    var g = d(x);
    if (g && g.has(_))
      return g.get(_);
    var v = {}, E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var A in _)
      if (A !== "default" && Object.prototype.hasOwnProperty.call(_, A)) {
        var M = E ? Object.getOwnPropertyDescriptor(_, A) : null;
        M && (M.get || M.set) ? Object.defineProperty(v, A, M) : v[A] = _[A];
      }
    return v.default = _, g && g.set(_, v), v;
  }
  function f() {
    return f = Object.assign ? Object.assign.bind() : function(_) {
      for (var x = 1; x < arguments.length; x++) {
        var g = arguments[x];
        for (var v in g)
          Object.prototype.hasOwnProperty.call(g, v) && (_[v] = g[v]);
      }
      return _;
    }, f.apply(this, arguments);
  }
  function h(_, x) {
    var g = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(_);
      x && (v = v.filter(function(E) {
        return Object.getOwnPropertyDescriptor(_, E).enumerable;
      })), g.push.apply(g, v);
    }
    return g;
  }
  function S(_) {
    for (var x = 1; x < arguments.length; x++) {
      var g = arguments[x] != null ? arguments[x] : {};
      x % 2 ? h(Object(g), !0).forEach(function(v) {
        b(_, v, g[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(g)) : h(Object(g)).forEach(function(v) {
        Object.defineProperty(_, v, Object.getOwnPropertyDescriptor(g, v));
      });
    }
    return _;
  }
  function b(_, x, g) {
    return x = k(x), x in _ ? Object.defineProperty(_, x, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : _[x] = g, _;
  }
  function k(_) {
    var x = P(_, "string");
    return typeof x == "symbol" ? x : String(x);
  }
  function P(_, x) {
    if (typeof _ != "object" || _ === null) return _;
    var g = _[Symbol.toPrimitive];
    if (g !== void 0) {
      var v = g.call(_, x);
      if (typeof v != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(_);
  }
  function L(_, x) {
    if (_ == null) return {};
    var g = {}, v = Object.keys(_), E, A;
    for (A = 0; A < v.length; A++)
      E = v[A], !(x.indexOf(E) >= 0) && (g[E] = _[E]);
    return g;
  }
  function z(_, x) {
    _.prototype = Object.create(x.prototype), _.prototype.constructor = _, C(_, x);
  }
  function C(_, x) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, E) {
      return v.__proto__ = E, v;
    }, C(_, x);
  }
  var w = /* @__PURE__ */ function(_) {
    z(x, _);
    function x() {
      for (var v, E = arguments.length, A = new Array(E), M = 0; M < E; M++)
        A[M] = arguments[M];
      return v = _.call.apply(_, [this].concat(A)) || this, v.state = {
        width: v.props.width,
        height: v.props.height,
        propsWidth: v.props.width,
        propsHeight: v.props.height
      }, v.onResize = function(V, $) {
        var G = $.size;
        v.props.onResize ? (V.persist == null || V.persist(), v.setState(G, function() {
          return v.props.onResize && v.props.onResize(V, $);
        })) : v.setState(G);
      }, v;
    }
    x.getDerivedStateFromProps = function(E, A) {
      return A.propsWidth !== E.width || A.propsHeight !== E.height ? {
        width: E.width,
        height: E.height,
        propsWidth: E.width,
        propsHeight: E.height
      } : null;
    };
    var g = x.prototype;
    return g.render = function() {
      var E = this.props, A = E.handle, M = E.handleSize;
      E.onResize;
      var V = E.onResizeStart, $ = E.onResizeStop, G = E.draggableOpts, Z = E.minConstraints, ee = E.maxConstraints, ne = E.lockAspectRatio, le = E.axis;
      E.width, E.height;
      var ge = E.resizeHandles, de = E.style, Q = E.transformScale, ue = L(E, s);
      return /* @__PURE__ */ c.createElement(i.default, {
        axis: le,
        draggableOpts: G,
        handle: A,
        handleSize: M,
        height: this.state.height,
        lockAspectRatio: ne,
        maxConstraints: ee,
        minConstraints: Z,
        onResizeStart: V,
        onResize: this.onResize,
        onResizeStop: $,
        resizeHandles: ge,
        transformScale: Q,
        width: this.state.width
      }, /* @__PURE__ */ c.createElement("div", f({}, ue, {
        style: S(S({}, de), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, x;
  }(c.Component);
  return fi.default = w, w.propTypes = S(S({}, o.resizableProps), {}, {
    children: r.default.element
  }), fi;
}
var ou;
function pg() {
  return ou || (ou = 1, pi.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, pi.exports.Resizable = qu().default, pi.exports.ResizableBox = ug().default), pi.exports;
}
var lr = {}, au;
function Fu() {
  if (au) return lr;
  au = 1, Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.resizeHandleType = lr.resizeHandleAxesType = lr.default = void 0;
  var c = i(/* @__PURE__ */ Pr()), r = i(zt());
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  const o = lr.resizeHandleAxesType = c.default.arrayOf(c.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), s = lr.resizeHandleType = c.default.oneOfType([c.default.node, c.default.func]);
  return lr.default = {
    //
    // Basic props
    //
    className: c.default.string,
    style: c.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: c.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: c.default.bool,
    // # of cols.
    cols: c.default.number,
    // A selector that will not be draggable.
    draggableCancel: c.default.string,
    // A selector for the draggable handler
    draggableHandle: c.default.string,
    // Deprecated
    verticalCompact: function(u) {
      u.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: c.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(u) {
      var d = u.layout;
      d !== void 0 && wn().validateLayout(d, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: c.default.arrayOf(c.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: c.default.arrayOf(c.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: c.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: c.default.number,
    //
    // Flags
    //
    isBounded: c.default.bool,
    isDraggable: c.default.bool,
    isResizable: c.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: c.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: c.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: c.default.bool,
    // parent layout transform scale
    transformScale: c.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: c.default.bool,
    // Resize handle options
    resizeHandles: o,
    resizeHandle: s,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: c.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: c.default.func,
    // Calls on each drag movement.
    onDrag: c.default.func,
    // Calls when drag is complete.
    onDragStop: c.default.func,
    //Calls when resize starts.
    onResizeStart: c.default.func,
    // Calls when resize movement happens.
    onResize: c.default.func,
    // Calls when resize is complete.
    onResizeStop: c.default.func,
    // Calls when some element is dropped.
    onDrop: c.default.func,
    //
    // Other validations
    //
    droppingItem: c.default.shape({
      i: c.default.string.isRequired,
      w: c.default.number.isRequired,
      h: c.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(u, d) {
      const m = u[d], f = {};
      r.default.Children.forEach(m, function(h) {
        if (h?.key != null) {
          if (f[h.key])
            throw new Error('Duplicate child key "' + h.key + '" found! This will cause problems in ReactGridLayout.');
          f[h.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: c.default.any
  }, lr;
}
var su;
function mg() {
  if (su) return di;
  su = 1, Object.defineProperty(di, "__esModule", {
    value: !0
  }), di.default = void 0;
  var c = h(zt()), r = jo(), i = h(/* @__PURE__ */ Pr()), o = Zs(), s = pg(), u = wn(), d = Qs(), m = Fu(), f = h(Uo());
  function h(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function S(C, w) {
    var _ = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var x = Object.getOwnPropertySymbols(C);
      w && (x = x.filter(function(g) {
        return Object.getOwnPropertyDescriptor(C, g).enumerable;
      })), _.push.apply(_, x);
    }
    return _;
  }
  function b(C) {
    for (var w = 1; w < arguments.length; w++) {
      var _ = arguments[w] != null ? arguments[w] : {};
      w % 2 ? S(Object(_), !0).forEach(function(x) {
        k(C, x, _[x]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(_)) : S(Object(_)).forEach(function(x) {
        Object.defineProperty(C, x, Object.getOwnPropertyDescriptor(_, x));
      });
    }
    return C;
  }
  function k(C, w, _) {
    return (w = P(w)) in C ? Object.defineProperty(C, w, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : C[w] = _, C;
  }
  function P(C) {
    var w = L(C, "string");
    return typeof w == "symbol" ? w : w + "";
  }
  function L(C, w) {
    if (typeof C != "object" || !C) return C;
    var _ = C[Symbol.toPrimitive];
    if (_ !== void 0) {
      var x = _.call(C, w);
      if (typeof x != "object") return x;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (w === "string" ? String : Number)(C);
  }
  let z = class extends c.default.Component {
    constructor() {
      super(...arguments), k(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), k(this, "elementRef", /* @__PURE__ */ c.default.createRef()), k(this, "onDragStart", (w, _) => {
        let {
          node: x
        } = _;
        const {
          onDragStart: g,
          transformScale: v
        } = this.props;
        if (!g) return;
        const E = {
          top: 0,
          left: 0
        }, {
          offsetParent: A
        } = x;
        if (!A) return;
        const M = A.getBoundingClientRect(), V = x.getBoundingClientRect(), $ = V.left / v, G = M.left / v, Z = V.top / v, ee = M.top / v;
        E.left = $ - G + A.scrollLeft, E.top = Z - ee + A.scrollTop, this.setState({
          dragging: E
        });
        const {
          x: ne,
          y: le
        } = (0, d.calcXY)(this.getPositionParams(), E.top, E.left, this.props.w, this.props.h);
        return g.call(this, this.props.i, ne, le, {
          e: w,
          node: x,
          newPosition: E
        });
      }), k(this, "onDrag", (w, _, x) => {
        let {
          node: g,
          deltaX: v,
          deltaY: E
        } = _;
        const {
          onDrag: A
        } = this.props;
        if (!A) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let M = this.state.dragging.top + E, V = this.state.dragging.left + v;
        const {
          isBounded: $,
          i: G,
          w: Z,
          h: ee,
          containerWidth: ne
        } = this.props, le = this.getPositionParams();
        if ($) {
          const {
            offsetParent: ue
          } = g;
          if (ue) {
            const {
              margin: F,
              rowHeight: N
            } = this.props, B = ue.clientHeight - (0, d.calcGridItemWHPx)(ee, N, F[1]);
            M = (0, d.clamp)(M, 0, B);
            const ae = (0, d.calcGridColWidth)(le), fe = ne - (0, d.calcGridItemWHPx)(Z, ae, F[0]);
            V = (0, d.clamp)(V, 0, fe);
          }
        }
        const ge = {
          top: M,
          left: V
        };
        x ? this.setState({
          dragging: ge
        }) : (0, r.flushSync)(() => {
          this.setState({
            dragging: ge
          });
        });
        const {
          x: de,
          y: Q
        } = (0, d.calcXY)(le, M, V, Z, ee);
        return A.call(this, G, de, Q, {
          e: w,
          node: g,
          newPosition: ge
        });
      }), k(this, "onDragStop", (w, _) => {
        let {
          node: x
        } = _;
        const {
          onDragStop: g
        } = this.props;
        if (!g) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: v,
          h: E,
          i: A
        } = this.props, {
          left: M,
          top: V
        } = this.state.dragging, $ = {
          top: V,
          left: M
        };
        this.setState({
          dragging: null
        });
        const {
          x: G,
          y: Z
        } = (0, d.calcXY)(this.getPositionParams(), V, M, v, E);
        return g.call(this, A, G, Z, {
          e: w,
          node: x,
          newPosition: $
        });
      }), k(this, "onResizeStop", (w, _, x) => this.onResizeHandler(w, _, x, "onResizeStop")), k(this, "onResizeStart", (w, _, x) => this.onResizeHandler(w, _, x, "onResizeStart")), k(this, "onResize", (w, _, x) => this.onResizeHandler(w, _, x, "onResize"));
    }
    shouldComponentUpdate(w, _) {
      if (this.props.children !== w.children || this.props.droppingPosition !== w.droppingPosition) return !0;
      const x = (0, d.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), g = (0, d.calcGridItemPosition)(this.getPositionParams(w), w.x, w.y, w.w, w.h, _);
      return !(0, u.fastPositionEqual)(x, g) || this.props.useCSSTransforms !== w.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(w) {
      this.moveDroppingItem(w);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(w) {
      const {
        droppingPosition: _
      } = this.props;
      if (!_) return;
      const x = this.elementRef.current;
      if (!x) return;
      const g = w.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: v
      } = this.state, E = v && _.left !== g.left || _.top !== g.top;
      if (!v)
        this.onDragStart(_.e, {
          node: x,
          deltaX: _.left,
          deltaY: _.top
        });
      else if (E) {
        const A = _.left - v.left, M = _.top - v.top;
        this.onDrag(
          _.e,
          {
            node: x,
            deltaX: A,
            deltaY: M
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: w.cols,
        containerPadding: w.containerPadding,
        containerWidth: w.containerWidth,
        margin: w.margin,
        maxRows: w.maxRows,
        rowHeight: w.rowHeight
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
    createStyle(w) {
      const {
        usePercentages: _,
        containerWidth: x,
        useCSSTransforms: g
      } = this.props;
      let v;
      return g ? v = (0, u.setTransform)(w) : (v = (0, u.setTopLeft)(w), _ && (v.left = (0, u.perc)(w.left / x), v.width = (0, u.perc)(w.width / x))), v;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(w, _) {
      return /* @__PURE__ */ c.default.createElement(o.DraggableCore, {
        disabled: !_,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, w);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(w, _) {
      return (x, g) => (
        /*: Function*/
        _(x, g, w)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(w, _, x) {
      const {
        cols: g,
        minW: v,
        minH: E,
        maxW: A,
        maxH: M,
        transformScale: V,
        resizeHandles: $,
        resizeHandle: G
      } = this.props, Z = this.getPositionParams(), ee = (0, d.calcGridItemPosition)(Z, 0, 0, g, 0).width, ne = (0, d.calcGridItemPosition)(Z, 0, 0, v, E), le = (0, d.calcGridItemPosition)(Z, 0, 0, A, M), ge = [ne.width, ne.height], de = [Math.min(le.width, ee), Math.min(le.height, 1 / 0)];
      return /* @__PURE__ */ c.default.createElement(
        s.Resizable,
        {
          draggableOpts: {
            disabled: !x
          },
          className: x ? void 0 : "react-resizable-hide",
          width: _.width,
          height: _.height,
          minConstraints: ge,
          maxConstraints: de,
          onResizeStop: this.curryResizeHandler(_, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(_, this.onResizeStart),
          onResize: this.curryResizeHandler(_, this.onResize),
          transformScale: V,
          resizeHandles: $,
          handle: G
        },
        w
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(w, _, x, g) {
      let {
        node: v,
        size: E,
        handle: A
      } = _;
      const M = this.props[g];
      if (!M) return;
      const {
        x: V,
        y: $,
        i: G,
        maxH: Z,
        minH: ee,
        containerWidth: ne
      } = this.props, {
        minW: le,
        maxW: ge
      } = this.props;
      let de = E;
      v && (de = (0, u.resizeItemInDirection)(A, x, E, ne), (0, r.flushSync)(() => {
        this.setState({
          resizing: g === "onResizeStop" ? null : de
        });
      }));
      let {
        w: Q,
        h: ue
      } = (0, d.calcWH)(this.getPositionParams(), de.width, de.height, V, $, A);
      Q = (0, d.clamp)(Q, Math.max(le, 1), ge), ue = (0, d.clamp)(ue, ee, Z), M.call(this, G, Q, ue, {
        e: w,
        node: v,
        size: de,
        handle: A
      });
    }
    render() {
      const {
        x: w,
        y: _,
        w: x,
        h: g,
        isDraggable: v,
        isResizable: E,
        droppingPosition: A,
        useCSSTransforms: M
      } = this.props, V = (0, d.calcGridItemPosition)(this.getPositionParams(), w, _, x, g, this.state), $ = c.default.Children.only(this.props.children);
      let G = /* @__PURE__ */ c.default.cloneElement($, {
        ref: this.elementRef,
        className: (0, f.default)("react-grid-item", $.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": v,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!A,
          cssTransforms: M
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: b(b(b({}, this.props.style), $.props.style), this.createStyle(V))
      });
      return G = this.mixinResizable(G, V, E), G = this.mixinDraggable(G, v), G;
    }
  };
  return di.default = z, k(z, "propTypes", {
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
    minW: function(C, w) {
      const _ = C[w];
      if (typeof _ != "number") return new Error("minWidth not Number");
      if (_ > C.w || _ > C.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(C, w) {
      const _ = C[w];
      if (typeof _ != "number") return new Error("maxWidth not Number");
      if (_ < C.w || _ < C.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(C, w) {
      const _ = C[w];
      if (typeof _ != "number") return new Error("minHeight not Number");
      if (_ > C.h || _ > C.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(C, w) {
      const _ = C[w];
      if (typeof _ != "number") return new Error("maxHeight not Number");
      if (_ < C.h || _ < C.minH) return new Error("maxHeight smaller than item height/minHeight");
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
  }), k(z, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), di;
}
var lu;
function Uu() {
  if (lu) return ci;
  lu = 1, Object.defineProperty(ci, "__esModule", {
    value: !0
  }), ci.default = void 0;
  var c = f(zt()), r = /* @__PURE__ */ Xs(), i = m(Uo()), o = wn(), s = Qs(), u = m(mg()), d = m(Fu());
  function m(w) {
    return w && w.__esModule ? w : { default: w };
  }
  function f(w, _) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (f = function(v, E) {
      if (!E && v && v.__esModule) return v;
      var A, M, V = { __proto__: null, default: v };
      if (v === null || typeof v != "object" && typeof v != "function") return V;
      if (A = E ? g : x) {
        if (A.has(v)) return A.get(v);
        A.set(v, V);
      }
      for (const $ in v) $ !== "default" && {}.hasOwnProperty.call(v, $) && ((M = (A = Object.defineProperty) && Object.getOwnPropertyDescriptor(v, $)) && (M.get || M.set) ? A(V, $, M) : V[$] = v[$]);
      return V;
    })(w, _);
  }
  function h(w, _) {
    var x = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(w);
      _ && (g = g.filter(function(v) {
        return Object.getOwnPropertyDescriptor(w, v).enumerable;
      })), x.push.apply(x, g);
    }
    return x;
  }
  function S(w) {
    for (var _ = 1; _ < arguments.length; _++) {
      var x = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? h(Object(x), !0).forEach(function(g) {
        b(w, g, x[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(x)) : h(Object(x)).forEach(function(g) {
        Object.defineProperty(w, g, Object.getOwnPropertyDescriptor(x, g));
      });
    }
    return w;
  }
  function b(w, _, x) {
    return (_ = k(_)) in w ? Object.defineProperty(w, _, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : w[_] = x, w;
  }
  function k(w) {
    var _ = P(w, "string");
    return typeof _ == "symbol" ? _ : _ + "";
  }
  function P(w, _) {
    if (typeof w != "object" || !w) return w;
    var x = w[Symbol.toPrimitive];
    if (x !== void 0) {
      var g = x.call(w, _);
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(w);
  }
  const L = "react-grid-layout";
  let z = !1;
  try {
    z = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let C = class extends c.Component {
    constructor() {
      super(...arguments), b(this, "state", {
        activeDrag: null,
        layout: (0, o.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, o.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), b(this, "dragEnterCounter", 0), b(this, "onDragStart", (_, x, g, v) => {
        let {
          e: E,
          node: A
        } = v;
        const {
          layout: M
        } = this.state, V = (0, o.getLayoutItem)(M, _);
        if (!V) return;
        const $ = {
          w: V.w,
          h: V.h,
          x: V.x,
          y: V.y,
          placeholder: !0,
          i: _
        };
        return this.setState({
          oldDragItem: (0, o.cloneLayoutItem)(V),
          oldLayout: M,
          activeDrag: $
        }), this.props.onDragStart(M, V, V, null, E, A);
      }), b(this, "onDrag", (_, x, g, v) => {
        let {
          e: E,
          node: A
        } = v;
        const {
          oldDragItem: M
        } = this.state;
        let {
          layout: V
        } = this.state;
        const {
          cols: $,
          allowOverlap: G,
          preventCollision: Z
        } = this.props, ee = (0, o.getLayoutItem)(V, _);
        if (!ee) return;
        const ne = {
          w: ee.w,
          h: ee.h,
          x: ee.x,
          y: ee.y,
          placeholder: !0,
          i: _
        };
        V = (0, o.moveElement)(V, ee, x, g, !0, Z, (0, o.compactType)(this.props), $, G), this.props.onDrag(V, M, ee, ne, E, A), this.setState({
          layout: G ? V : (0, o.compact)(V, (0, o.compactType)(this.props), $),
          activeDrag: ne
        });
      }), b(this, "onDragStop", (_, x, g, v) => {
        let {
          e: E,
          node: A
        } = v;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: M
        } = this.state;
        let {
          layout: V
        } = this.state;
        const {
          cols: $,
          preventCollision: G,
          allowOverlap: Z
        } = this.props, ee = (0, o.getLayoutItem)(V, _);
        if (!ee) return;
        V = (0, o.moveElement)(V, ee, x, g, !0, G, (0, o.compactType)(this.props), $, Z);
        const le = Z ? V : (0, o.compact)(V, (0, o.compactType)(this.props), $);
        this.props.onDragStop(le, M, ee, null, E, A);
        const {
          oldLayout: ge
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: le,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(le, ge);
      }), b(this, "onResizeStart", (_, x, g, v) => {
        let {
          e: E,
          node: A
        } = v;
        const {
          layout: M
        } = this.state, V = (0, o.getLayoutItem)(M, _);
        V && (this.setState({
          oldResizeItem: (0, o.cloneLayoutItem)(V),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(M, V, V, null, E, A));
      }), b(this, "onResize", (_, x, g, v) => {
        let {
          e: E,
          node: A,
          size: M,
          handle: V
        } = v;
        const {
          oldResizeItem: $
        } = this.state, {
          layout: G
        } = this.state, {
          cols: Z,
          preventCollision: ee,
          allowOverlap: ne
        } = this.props;
        let le = !1, ge, de, Q;
        const [ue, F] = (0, o.withLayoutItem)(G, _, (B) => {
          let ae;
          return de = B.x, Q = B.y, ["sw", "w", "nw", "n", "ne"].indexOf(V) !== -1 && (["sw", "nw", "w"].indexOf(V) !== -1 && (de = B.x + (B.w - x), x = B.x !== de && de < 0 ? B.w : x, de = de < 0 ? 0 : de), ["ne", "n", "nw"].indexOf(V) !== -1 && (Q = B.y + (B.h - g), g = B.y !== Q && Q < 0 ? B.h : g, Q = Q < 0 ? 0 : Q), le = !0), ee && !ne && (ae = (0, o.getAllCollisions)(G, S(S({}, B), {}, {
            w: x,
            h: g,
            x: de,
            y: Q
          })).filter((ye) => ye.i !== B.i).length > 0, ae && (Q = B.y, g = B.h, de = B.x, x = B.w, le = !1)), B.w = x, B.h = g, B;
        });
        if (!F) return;
        ge = ue, le && (ge = (0, o.moveElement)(ue, F, de, Q, !0, this.props.preventCollision, (0, o.compactType)(this.props), Z, ne));
        const N = {
          w: F.w,
          h: F.h,
          x: F.x,
          y: F.y,
          static: !0,
          i: _
        };
        this.props.onResize(ge, $, F, N, E, A), this.setState({
          layout: ne ? ge : (0, o.compact)(ge, (0, o.compactType)(this.props), Z),
          activeDrag: N
        });
      }), b(this, "onResizeStop", (_, x, g, v) => {
        let {
          e: E,
          node: A
        } = v;
        const {
          layout: M,
          oldResizeItem: V
        } = this.state, {
          cols: $,
          allowOverlap: G
        } = this.props, Z = (0, o.getLayoutItem)(M, _), ee = G ? M : (0, o.compact)(M, (0, o.compactType)(this.props), $);
        this.props.onResizeStop(ee, V, Z, null, E, A);
        const {
          oldLayout: ne
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: ee,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(ee, ne);
      }), b(this, "onDragOver", (_) => {
        var x;
        if (_.preventDefault(), _.stopPropagation(), z && // $FlowIgnore can't figure this out
        !((x = _.nativeEvent.target) !== null && x !== void 0 && x.classList.contains(L)))
          return !1;
        const {
          droppingItem: g,
          onDropDragOver: v,
          margin: E,
          cols: A,
          rowHeight: M,
          maxRows: V,
          width: $,
          containerPadding: G,
          transformScale: Z
        } = this.props, ee = v?.(_);
        if (ee === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const ne = S(S({}, g), ee), {
          layout: le
        } = this.state, ge = _.currentTarget.getBoundingClientRect(), de = _.clientX - ge.left, Q = _.clientY - ge.top, ue = {
          left: de / Z,
          top: Q / Z,
          e: _
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: F,
              top: N
            } = this.state.droppingPosition;
            (F != de || N != Q) && this.setState({
              droppingPosition: ue
            });
          }
        } else {
          const F = {
            cols: A,
            margin: E,
            maxRows: V,
            rowHeight: M,
            containerWidth: $,
            containerPadding: G || E
          }, N = (0, s.calcXY)(F, Q, de, ne.w, ne.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ c.createElement("div", {
              key: ne.i
            }),
            droppingPosition: ue,
            layout: [...le, S(S({}, ne), {}, {
              x: N.x,
              y: N.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), b(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: _,
          cols: x
        } = this.props, {
          layout: g
        } = this.state, v = (0, o.compact)(g.filter((E) => E.i !== _.i), (0, o.compactType)(this.props), x, this.props.allowOverlap);
        this.setState({
          layout: v,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), b(this, "onDragLeave", (_) => {
        _.preventDefault(), _.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), b(this, "onDragEnter", (_) => {
        _.preventDefault(), _.stopPropagation(), this.dragEnterCounter++;
      }), b(this, "onDrop", (_) => {
        _.preventDefault(), _.stopPropagation();
        const {
          droppingItem: x
        } = this.props, {
          layout: g
        } = this.state, v = g.find((E) => E.i === x.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(g, v, _);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(_, x) {
      let g;
      return x.activeDrag ? null : (!(0, r.deepEqual)(_.layout, x.propsLayout) || _.compactType !== x.compactType ? g = _.layout : (0, o.childrenEqual)(_.children, x.children) || (g = x.layout), g ? {
        layout: (0, o.synchronizeLayoutWithChildren)(g, _.children, _.cols, (0, o.compactType)(_), _.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: _.compactType,
        children: _.children,
        propsLayout: _.layout
      } : null);
    }
    shouldComponentUpdate(_, x) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== _.children || !(0, o.fastRGLPropsEqual)(this.props, _, r.deepEqual) || this.state.activeDrag !== x.activeDrag || this.state.mounted !== x.mounted || this.state.droppingPosition !== x.droppingPosition
      );
    }
    componentDidUpdate(_, x) {
      if (!this.state.activeDrag) {
        const g = this.state.layout, v = x.layout;
        this.onLayoutMaybeChanged(g, v);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const _ = (0, o.bottom)(this.state.layout), x = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return _ * this.props.rowHeight + (_ - 1) * this.props.margin[1] + x * 2 + "px";
    }
    onLayoutMaybeChanged(_, x) {
      x || (x = this.state.layout), (0, r.deepEqual)(x, _) || this.props.onLayoutChange(_);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: _
      } = this.state;
      if (!_) return null;
      const {
        width: x,
        cols: g,
        margin: v,
        containerPadding: E,
        rowHeight: A,
        maxRows: M,
        useCSSTransforms: V,
        transformScale: $
      } = this.props;
      return /* @__PURE__ */ c.createElement(u.default, {
        w: _.w,
        h: _.h,
        x: _.x,
        y: _.y,
        i: _.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: x,
        cols: g,
        margin: v,
        containerPadding: E || v,
        maxRows: M,
        rowHeight: A,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: V,
        transformScale: $
      }, /* @__PURE__ */ c.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(_, x) {
      if (!_ || !_.key) return;
      const g = (0, o.getLayoutItem)(this.state.layout, String(_.key));
      if (!g) return null;
      const {
        width: v,
        cols: E,
        margin: A,
        containerPadding: M,
        rowHeight: V,
        maxRows: $,
        isDraggable: G,
        isResizable: Z,
        isBounded: ee,
        useCSSTransforms: ne,
        transformScale: le,
        draggableCancel: ge,
        draggableHandle: de,
        resizeHandles: Q,
        resizeHandle: ue
      } = this.props, {
        mounted: F,
        droppingPosition: N
      } = this.state, B = typeof g.isDraggable == "boolean" ? g.isDraggable : !g.static && G, ae = typeof g.isResizable == "boolean" ? g.isResizable : !g.static && Z, fe = g.resizeHandles || Q, ye = B && ee && g.isBounded !== !1;
      return /* @__PURE__ */ c.createElement(u.default, {
        containerWidth: v,
        cols: E,
        margin: A,
        containerPadding: M || A,
        maxRows: $,
        rowHeight: V,
        cancel: ge,
        handle: de,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: B,
        isResizable: ae,
        isBounded: ye,
        useCSSTransforms: ne && F,
        usePercentages: !F,
        transformScale: le,
        w: g.w,
        h: g.h,
        x: g.x,
        y: g.y,
        i: g.i,
        minH: g.minH,
        minW: g.minW,
        maxH: g.maxH,
        maxW: g.maxW,
        static: g.static,
        droppingPosition: x ? N : void 0,
        resizeHandles: fe,
        resizeHandle: ue
      }, _);
    }
    render() {
      const {
        className: _,
        style: x,
        isDroppable: g,
        innerRef: v
      } = this.props, E = (0, i.default)(L, _), A = S({
        height: this.containerHeight()
      }, x);
      return /* @__PURE__ */ c.createElement("div", {
        ref: v,
        className: E,
        style: A,
        onDrop: g ? this.onDrop : o.noop,
        onDragLeave: g ? this.onDragLeave : o.noop,
        onDragEnter: g ? this.onDragEnter : o.noop,
        onDragOver: g ? this.onDragOver : o.noop
      }, c.Children.map(this.props.children, (M) => this.processGridItem(M)), g && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ci.default = C, b(C, "displayName", "ReactGridLayout"), b(C, "propTypes", d.default), b(C, "defaultProps", {
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
    onLayoutChange: o.noop,
    onDragStart: o.noop,
    onDrag: o.noop,
    onDragStop: o.noop,
    onResizeStart: o.noop,
    onResize: o.noop,
    onResizeStop: o.noop,
    onDrop: o.noop,
    onDropDragOver: o.noop
  }), ci;
}
var hi = {}, Wr = {}, cu;
function Wu() {
  if (cu) return Wr;
  cu = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.findOrGenerateResponsiveLayout = o, Wr.getBreakpointFromWidth = r, Wr.getColsFromBreakpoint = i, Wr.sortBreakpoints = s;
  var c = wn();
  function r(u, d) {
    const m = s(u);
    let f = m[0];
    for (let h = 1, S = m.length; h < S; h++) {
      const b = m[h];
      d > u[b] && (f = b);
    }
    return f;
  }
  function i(u, d) {
    if (!d[u])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + u + " is missing!");
    return d[u];
  }
  function o(u, d, m, f, h, S) {
    if (u[m]) return (0, c.cloneLayout)(u[m]);
    let b = u[f];
    const k = s(d), P = k.slice(k.indexOf(m));
    for (let L = 0, z = P.length; L < z; L++) {
      const C = P[L];
      if (u[C]) {
        b = u[C];
        break;
      }
    }
    return b = (0, c.cloneLayout)(b || []), (0, c.compact)((0, c.correctBounds)(b, {
      cols: h
    }), S, h);
  }
  function s(u) {
    return Object.keys(u).sort(function(m, f) {
      return u[m] - u[f];
    });
  }
  return Wr;
}
var du;
function gg() {
  if (du) return hi;
  du = 1, Object.defineProperty(hi, "__esModule", {
    value: !0
  }), hi.default = void 0;
  var c = f(zt()), r = m(/* @__PURE__ */ Pr()), i = /* @__PURE__ */ Xs(), o = wn(), s = Wu(), u = m(Uu());
  const d = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function m(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function f(g, v) {
    if (typeof WeakMap == "function") var E = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
    return (f = function(M, V) {
      if (!V && M && M.__esModule) return M;
      var $, G, Z = { __proto__: null, default: M };
      if (M === null || typeof M != "object" && typeof M != "function") return Z;
      if ($ = V ? A : E) {
        if ($.has(M)) return $.get(M);
        $.set(M, Z);
      }
      for (const ee in M) ee !== "default" && {}.hasOwnProperty.call(M, ee) && ((G = ($ = Object.defineProperty) && Object.getOwnPropertyDescriptor(M, ee)) && (G.get || G.set) ? $(Z, ee, G) : Z[ee] = M[ee]);
      return Z;
    })(g, v);
  }
  function h() {
    return h = Object.assign ? Object.assign.bind() : function(g) {
      for (var v = 1; v < arguments.length; v++) {
        var E = arguments[v];
        for (var A in E) ({}).hasOwnProperty.call(E, A) && (g[A] = E[A]);
      }
      return g;
    }, h.apply(null, arguments);
  }
  function S(g, v) {
    if (g == null) return {};
    var E, A, M = b(g, v);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(g);
      for (A = 0; A < V.length; A++) E = V[A], v.indexOf(E) === -1 && {}.propertyIsEnumerable.call(g, E) && (M[E] = g[E]);
    }
    return M;
  }
  function b(g, v) {
    if (g == null) return {};
    var E = {};
    for (var A in g) if ({}.hasOwnProperty.call(g, A)) {
      if (v.indexOf(A) !== -1) continue;
      E[A] = g[A];
    }
    return E;
  }
  function k(g, v) {
    var E = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(g);
      v && (A = A.filter(function(M) {
        return Object.getOwnPropertyDescriptor(g, M).enumerable;
      })), E.push.apply(E, A);
    }
    return E;
  }
  function P(g) {
    for (var v = 1; v < arguments.length; v++) {
      var E = arguments[v] != null ? arguments[v] : {};
      v % 2 ? k(Object(E), !0).forEach(function(A) {
        L(g, A, E[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(E)) : k(Object(E)).forEach(function(A) {
        Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(E, A));
      });
    }
    return g;
  }
  function L(g, v, E) {
    return (v = z(v)) in g ? Object.defineProperty(g, v, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : g[v] = E, g;
  }
  function z(g) {
    var v = C(g, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function C(g, v) {
    if (typeof g != "object" || !g) return g;
    var E = g[Symbol.toPrimitive];
    if (E !== void 0) {
      var A = E.call(g, v);
      if (typeof A != "object") return A;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(g);
  }
  const w = (g) => Object.prototype.toString.call(g);
  function _(g, v) {
    return g == null ? null : Array.isArray(g) ? g : g[v];
  }
  let x = class extends c.Component {
    constructor() {
      super(...arguments), L(this, "state", this.generateInitialState()), L(this, "onLayoutChange", (v) => {
        this.props.onLayoutChange(v, P(P({}, this.props.layouts), {}, {
          [this.state.breakpoint]: v
        }));
      });
    }
    generateInitialState() {
      const {
        width: v,
        breakpoints: E,
        layouts: A,
        cols: M
      } = this.props, V = (0, s.getBreakpointFromWidth)(E, v), $ = (0, s.getColsFromBreakpoint)(V, M), G = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, s.findOrGenerateResponsiveLayout)(A, E, V, V, $, G),
        breakpoint: V,
        cols: $
      };
    }
    static getDerivedStateFromProps(v, E) {
      if (!(0, i.deepEqual)(v.layouts, E.layouts)) {
        const {
          breakpoint: A,
          cols: M
        } = E;
        return {
          layout: (0, s.findOrGenerateResponsiveLayout)(v.layouts, v.breakpoints, A, A, M, v.compactType),
          layouts: v.layouts
        };
      }
      return null;
    }
    componentDidUpdate(v) {
      (this.props.width != v.width || this.props.breakpoint !== v.breakpoint || !(0, i.deepEqual)(this.props.breakpoints, v.breakpoints) || !(0, i.deepEqual)(this.props.cols, v.cols)) && this.onWidthChange(v);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(v) {
      const {
        breakpoints: E,
        cols: A,
        layouts: M,
        compactType: V
      } = this.props, $ = this.props.breakpoint || (0, s.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), G = this.state.breakpoint, Z = (0, s.getColsFromBreakpoint)($, A), ee = P({}, M);
      if (G !== $ || v.breakpoints !== E || v.cols !== A) {
        G in ee || (ee[G] = (0, o.cloneLayout)(this.state.layout));
        let ge = (0, s.findOrGenerateResponsiveLayout)(ee, E, $, G, Z, V);
        ge = (0, o.synchronizeLayoutWithChildren)(ge, this.props.children, Z, V, this.props.allowOverlap), ee[$] = ge, this.props.onBreakpointChange($, Z), this.props.onLayoutChange(ge, ee), this.setState({
          breakpoint: $,
          layout: ge,
          cols: Z
        });
      }
      const ne = _(this.props.margin, $), le = _(this.props.containerPadding, $);
      this.props.onWidthChange(this.props.width, ne, Z, le);
    }
    render() {
      const v = this.props, {
        breakpoint: E,
        breakpoints: A,
        cols: M,
        layouts: V,
        margin: $,
        containerPadding: G,
        onBreakpointChange: Z,
        onLayoutChange: ee,
        onWidthChange: ne
      } = v, le = S(v, d);
      return /* @__PURE__ */ c.createElement(u.default, h({}, le, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: _($, this.state.breakpoint),
        containerPadding: _(G, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return hi.default = x, L(x, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: r.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: r.default.object,
    allowOverlap: r.default.bool,
    // # of cols. This is a breakpoint -> cols map
    cols: r.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: r.default.oneOfType([r.default.array, r.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: r.default.oneOfType([r.default.array, r.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts(g, v) {
      if (w(g[v]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + w(g[v]));
      Object.keys(g[v]).forEach((E) => {
        if (!(E in g.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, o.validateLayout)(g.layouts[E], "layouts." + E);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: r.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: r.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: r.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: r.default.func
  }), L(x, "defaultProps", {
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
    onBreakpointChange: o.noop,
    onLayoutChange: o.noop,
    onWidthChange: o.noop
  }), hi;
}
var Oo = {}, Vu = function() {
  if (typeof Map < "u")
    return Map;
  function c(r, i) {
    var o = -1;
    return r.some(function(s, u) {
      return s[0] === i ? (o = u, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function r() {
        this.__entries__ = [];
      }
      return Object.defineProperty(r.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.get = function(i) {
        var o = c(this.__entries__, i), s = this.__entries__[o];
        return s && s[1];
      }, r.prototype.set = function(i, o) {
        var s = c(this.__entries__, i);
        ~s ? this.__entries__[s][1] = o : this.__entries__.push([i, o]);
      }, r.prototype.delete = function(i) {
        var o = this.__entries__, s = c(o, i);
        ~s && o.splice(s, 1);
      }, r.prototype.has = function(i) {
        return !!~c(this.__entries__, i);
      }, r.prototype.clear = function() {
        this.__entries__.splice(0);
      }, r.prototype.forEach = function(i, o) {
        o === void 0 && (o = null);
        for (var s = 0, u = this.__entries__; s < u.length; s++) {
          var d = u[s];
          i.call(o, d[1], d[0]);
        }
      }, r;
    }()
  );
}(), Vs = typeof window < "u" && typeof document < "u" && window.document === document, qo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), fg = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(qo) : function(c) {
    return setTimeout(function() {
      return c(Date.now());
    }, 1e3 / 60);
  };
}(), hg = 2;
function _g(c, r) {
  var i = !1, o = !1, s = 0;
  function u() {
    i && (i = !1, c()), o && m();
  }
  function d() {
    fg(u);
  }
  function m() {
    var f = Date.now();
    if (i) {
      if (f - s < hg)
        return;
      o = !0;
    } else
      i = !0, o = !1, setTimeout(d, r);
    s = f;
  }
  return m;
}
var bg = 20, yg = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], xg = typeof MutationObserver < "u", vg = (
  /** @class */
  function() {
    function c() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = _g(this.refresh.bind(this), bg);
    }
    return c.prototype.addObserver = function(r) {
      ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_();
    }, c.prototype.removeObserver = function(r) {
      var i = this.observers_, o = i.indexOf(r);
      ~o && i.splice(o, 1), !i.length && this.connected_ && this.disconnect_();
    }, c.prototype.refresh = function() {
      var r = this.updateObservers_();
      r && this.refresh();
    }, c.prototype.updateObservers_ = function() {
      var r = this.observers_.filter(function(i) {
        return i.gatherActive(), i.hasActive();
      });
      return r.forEach(function(i) {
        return i.broadcastActive();
      }), r.length > 0;
    }, c.prototype.connect_ = function() {
      !Vs || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), xg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, c.prototype.disconnect_ = function() {
      !Vs || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, c.prototype.onTransitionEnd_ = function(r) {
      var i = r.propertyName, o = i === void 0 ? "" : i, s = yg.some(function(u) {
        return !!~o.indexOf(u);
      });
      s && this.refresh();
    }, c.getInstance = function() {
      return this.instance_ || (this.instance_ = new c()), this.instance_;
    }, c.instance_ = null, c;
  }()
), Gu = function(c, r) {
  for (var i = 0, o = Object.keys(r); i < o.length; i++) {
    var s = o[i];
    Object.defineProperty(c, s, {
      value: r[s],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return c;
}, xn = function(c) {
  var r = c && c.ownerDocument && c.ownerDocument.defaultView;
  return r || qo;
}, Yu = Wo(0, 0, 0, 0);
function Fo(c) {
  return parseFloat(c) || 0;
}
function uu(c) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r[i - 1] = arguments[i];
  return r.reduce(function(o, s) {
    var u = c["border-" + s + "-width"];
    return o + Fo(u);
  }, 0);
}
function wg(c) {
  for (var r = ["top", "right", "bottom", "left"], i = {}, o = 0, s = r; o < s.length; o++) {
    var u = s[o], d = c["padding-" + u];
    i[u] = Fo(d);
  }
  return i;
}
function kg(c) {
  var r = c.getBBox();
  return Wo(0, 0, r.width, r.height);
}
function Sg(c) {
  var r = c.clientWidth, i = c.clientHeight;
  if (!r && !i)
    return Yu;
  var o = xn(c).getComputedStyle(c), s = wg(o), u = s.left + s.right, d = s.top + s.bottom, m = Fo(o.width), f = Fo(o.height);
  if (o.boxSizing === "border-box" && (Math.round(m + u) !== r && (m -= uu(o, "left", "right") + u), Math.round(f + d) !== i && (f -= uu(o, "top", "bottom") + d)), !Cg(c)) {
    var h = Math.round(m + u) - r, S = Math.round(f + d) - i;
    Math.abs(h) !== 1 && (m -= h), Math.abs(S) !== 1 && (f -= S);
  }
  return Wo(s.left, s.top, m, f);
}
var Eg = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(c) {
    return c instanceof xn(c).SVGGraphicsElement;
  } : function(c) {
    return c instanceof xn(c).SVGElement && typeof c.getBBox == "function";
  };
}();
function Cg(c) {
  return c === xn(c).document.documentElement;
}
function zg(c) {
  return Vs ? Eg(c) ? kg(c) : Sg(c) : Yu;
}
function Ag(c) {
  var r = c.x, i = c.y, o = c.width, s = c.height, u = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, d = Object.create(u.prototype);
  return Gu(d, {
    x: r,
    y: i,
    width: o,
    height: s,
    top: i,
    right: r + o,
    bottom: s + i,
    left: r
  }), d;
}
function Wo(c, r, i, o) {
  return { x: c, y: r, width: i, height: o };
}
var Pg = (
  /** @class */
  function() {
    function c(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Wo(0, 0, 0, 0), this.target = r;
    }
    return c.prototype.isActive = function() {
      var r = zg(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, c.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, c;
  }()
), Rg = (
  /** @class */
  /* @__PURE__ */ function() {
    function c(r, i) {
      var o = Ag(i);
      Gu(this, { target: r, contentRect: o });
    }
    return c;
  }()
), Ig = (
  /** @class */
  function() {
    function c(r, i, o) {
      if (this.activeObservations_ = [], this.observations_ = new Vu(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = i, this.callbackCtx_ = o;
    }
    return c.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof xn(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(r) || (i.set(r, new Pg(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, c.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof xn(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var i = this.observations_;
        i.has(r) && (i.delete(r), i.size || this.controller_.removeObserver(this));
      }
    }, c.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, c.prototype.gatherActive = function() {
      var r = this;
      this.clearActive(), this.observations_.forEach(function(i) {
        i.isActive() && r.activeObservations_.push(i);
      });
    }, c.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var r = this.callbackCtx_, i = this.activeObservations_.map(function(o) {
          return new Rg(o.target, o.broadcastRect());
        });
        this.callback_.call(r, i, r), this.clearActive();
      }
    }, c.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, c.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, c;
  }()
), Ku = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Vu(), Xu = (
  /** @class */
  /* @__PURE__ */ function() {
    function c(r) {
      if (!(this instanceof c))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var i = vg.getInstance(), o = new Ig(r, i, this);
      Ku.set(this, o);
    }
    return c;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(c) {
  Xu.prototype[c] = function() {
    var r;
    return (r = Ku.get(this))[c].apply(r, arguments);
  };
});
var Ng = function() {
  return typeof qo.ResizeObserver < "u" ? qo.ResizeObserver : Xu;
}();
const Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ng
}, Symbol.toStringTag, { value: "Module" })), Og = /* @__PURE__ */ Ym(Lg);
var pu;
function Tg() {
  if (pu) return Oo;
  pu = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = L;
  var c = d(zt()), r = u(/* @__PURE__ */ Pr()), i = u(Og), o = u(Uo());
  const s = ["measureBeforeMount"];
  function u(z) {
    return z && z.__esModule ? z : { default: z };
  }
  function d(z, C) {
    if (typeof WeakMap == "function") var w = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap();
    return (d = function(x, g) {
      if (!g && x && x.__esModule) return x;
      var v, E, A = { __proto__: null, default: x };
      if (x === null || typeof x != "object" && typeof x != "function") return A;
      if (v = g ? _ : w) {
        if (v.has(x)) return v.get(x);
        v.set(x, A);
      }
      for (const M in x) M !== "default" && {}.hasOwnProperty.call(x, M) && ((E = (v = Object.defineProperty) && Object.getOwnPropertyDescriptor(x, M)) && (E.get || E.set) ? v(A, M, E) : A[M] = x[M]);
      return A;
    })(z, C);
  }
  function m() {
    return m = Object.assign ? Object.assign.bind() : function(z) {
      for (var C = 1; C < arguments.length; C++) {
        var w = arguments[C];
        for (var _ in w) ({}).hasOwnProperty.call(w, _) && (z[_] = w[_]);
      }
      return z;
    }, m.apply(null, arguments);
  }
  function f(z, C) {
    if (z == null) return {};
    var w, _, x = h(z, C);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(z);
      for (_ = 0; _ < g.length; _++) w = g[_], C.indexOf(w) === -1 && {}.propertyIsEnumerable.call(z, w) && (x[w] = z[w]);
    }
    return x;
  }
  function h(z, C) {
    if (z == null) return {};
    var w = {};
    for (var _ in z) if ({}.hasOwnProperty.call(z, _)) {
      if (C.indexOf(_) !== -1) continue;
      w[_] = z[_];
    }
    return w;
  }
  function S(z, C, w) {
    return (C = b(C)) in z ? Object.defineProperty(z, C, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : z[C] = w, z;
  }
  function b(z) {
    var C = k(z, "string");
    return typeof C == "symbol" ? C : C + "";
  }
  function k(z, C) {
    if (typeof z != "object" || !z) return z;
    var w = z[Symbol.toPrimitive];
    if (w !== void 0) {
      var _ = w.call(z, C);
      if (typeof _ != "object") return _;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(z);
  }
  const P = "react-grid-layout";
  function L(z) {
    var C;
    return C = class extends c.Component {
      constructor() {
        super(...arguments), S(this, "state", {
          width: 1280
        }), S(this, "elementRef", /* @__PURE__ */ c.createRef()), S(this, "mounted", !1), S(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new i.default((x) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const v = x[0].contentRect.width;
            this.setState({
              width: v
            });
          }
        });
        const _ = this.elementRef.current;
        _ instanceof HTMLElement && this.resizeObserver.observe(_);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const _ = this.elementRef.current;
        _ instanceof HTMLElement && this.resizeObserver.unobserve(_), this.resizeObserver.disconnect();
      }
      render() {
        const _ = this.props, {
          measureBeforeMount: x
        } = _, g = f(_, s);
        return x && !this.mounted ? /* @__PURE__ */ c.createElement("div", {
          className: (0, o.default)(this.props.className, P),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ c.createElement(z, m({
          innerRef: this.elementRef
        }, g, this.state));
      }
    }, S(C, "defaultProps", {
      measureBeforeMount: !1
    }), S(C, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: r.default.bool
    }), C;
  }
  return Oo;
}
var mu;
function Dg() {
  return mu || (mu = 1, function(c) {
    c.exports = Uu().default, c.exports.utils = wn(), c.exports.calculateUtils = Qs(), c.exports.Responsive = gg().default, c.exports.Responsive.utils = Wu(), c.exports.WidthProvider = Tg().default;
  }(Os)), Os.exports;
}
var gu = Dg();
const Hg = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, Ar = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, Qu = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, qe = (c, r, i, o, s) => ({ i: c, x: r, y: i, w: o, h: s, minW: 1, minH: 1, maxW: 12, maxH: 12 }), $o = { lg: [qe("activity-history", 0, 0, 6, 4), qe("automations", 6, 0, 6, 4), qe("backup-restore", 0, 4, 6, 4), qe("access-control", 6, 4, 6, 4), qe("alarm-configuration", 0, 8, 12, 5), qe("security-status", 0, 13, 12, 2)], md: [qe("activity-history", 0, 0, 4, 4), qe("automations", 4, 0, 4, 4), qe("backup-restore", 0, 4, 4, 4), qe("access-control", 4, 4, 4, 4), qe("alarm-configuration", 0, 8, 8, 5), qe("security-status", 0, 13, 8, 2)], sm: [qe("activity-history", 0, 0, 4, 4), qe("automations", 0, 4, 4, 4), qe("backup-restore", 0, 8, 4, 4), qe("access-control", 0, 12, 4, 4), qe("alarm-configuration", 0, 16, 4, 5), qe("security-status", 0, 21, 4, 2)], xs: [qe("activity-history", 0, 0, 2, 4), qe("automations", 0, 4, 2, 4), qe("backup-restore", 0, 8, 2, 4), qe("access-control", 0, 12, 2, 4), qe("alarm-configuration", 0, 16, 2, 5), qe("security-status", 0, 21, 2, 2)], xxs: [qe("activity-history", 0, 0, 2, 4), qe("automations", 0, 4, 2, 4), qe("backup-restore", 0, 8, 2, 4), qe("access-control", 0, 12, 2, 4), qe("alarm-configuration", 0, 16, 2, 5), qe("security-status", 0, 21, 2, 2)] };
function Mg(c, r, i) {
  return Object.entries(Qu).map(([o, s]) => ({ size: o, distance: Math.abs(Math.min(s.w, i) - c) + Math.abs(s.h - r) })).sort((o, s) => o.distance - s.distance)[0]?.size ?? "S";
}
function $g(c, r) {
  const i = Qu[c];
  return { w: Math.min(i.w, r), h: i.h };
}
function Gs(c, r) {
  return c.some((i) => i.i !== r.i && r.x < i.x + i.w && r.x + r.w > i.x && r.y < i.y + i.h && r.y + r.h > i.y);
}
function Bg(c, r, i) {
  for (let o = 0; o < 240; o++) for (let s = 0; s <= i - r.w; s++) {
    const u = { ...r, x: s, y: o };
    if (!Gs(c, u)) return u;
  }
  return { ...r, x: 0, y: Math.max(0, ...c.map((o) => o.y + o.h)) };
}
function vn(c) {
  const r = {};
  return Object.keys(Ar).forEach((i) => {
    const o = Ar[i], s = Array.isArray(c?.[i]) ? c[i] : [], u = new Map(s.map((h) => [h.i, h])), d = ($o[i] || []).map((h) => {
      const S = u.get(h.i);
      if (!S) return { ...h };
      const b = Math.min(Math.max(1, S.w), o);
      return { ...h, ...S, w: b, x: Math.max(0, Math.min(S.x, o - b)), y: Math.max(0, S.y) };
    }), m = new Set(d.map((h) => h.i)), f = s.filter((h) => !m.has(h.i)).map((h) => ({ ...h, w: Math.min(Math.max(1, h.w), o), x: Math.max(0, Math.min(h.x, o - Math.min(h.w, o))), y: Math.max(0, h.y) }));
    r[i] = [...d, ...f];
  }), r;
}
class jg {
  key(r, i) {
    return `argus:dashboard-layout:${r}:${i}`;
  }
  read(r, i) {
    try {
      const o = JSON.parse(localStorage.getItem(this.key(r, i)) || "null");
      return o?.layoutVersion != null && o.layoutVersion >= 1 ? o : null;
    } catch {
      return null;
    }
  }
  write(r, i, o) {
    localStorage.setItem(this.key(r, i), JSON.stringify(o));
  }
  async load(r, i) {
    const o = this.read(r, i);
    return o ? vn(o.layouts) : null;
  }
  async save(r, i, o) {
    const s = this.read(r, i);
    this.write(r, i, { layoutVersion: 1, layouts: o, visibility: s?.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(r, i) {
    return this.read(r, i)?.visibility ?? null;
  }
  async saveVisibility(r, i, o) {
    const s = this.read(r, i);
    this.write(r, i, { layoutVersion: 1, layouts: s?.layouts ?? vn(null), visibility: o, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(r, i) {
    localStorage.removeItem(this.key(r, i));
  }
}
const qg = gu.WidthProvider(gu.Responsive);
function Fg({ widget: c, node: r, editing: i, size: o, onSize: s, onHide: u, onReset: d }) {
  const m = Fe.useRef(null);
  Fe.useLayoutEffect(() => {
    m.current?.appendChild(r), r.draggable = !1, r.querySelector(":scope > .panel-edit-overlay")?.remove(), i ? r.setAttribute("inert", "") : r.removeAttribute("inert");
  }, [r, i]);
  const f = (h, S) => {
    if (typeof window._argusT == "function") {
      const b = window._argusT(h);
      if (b && b !== h) return b;
    }
    return S;
  };
  return /* @__PURE__ */ _e.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ _e.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ _e.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `${f("drag", "Mover")} ${c.title}`, title: f("drag", "Arrastrar para mover"), children: "⋮⋮" }),
      /* @__PURE__ */ _e.jsx("strong", { children: c.title }),
      /* @__PURE__ */ _e.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ _e.jsx("summary", { "aria-label": `${f("settings", "Opciones")} ${c.title}`, title: f("settings", "Opciones"), children: "•••" }),
        /* @__PURE__ */ _e.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ _e.jsx("span", { children: f("size", "Tamaño") }),
          /* @__PURE__ */ _e.jsx("div", { children: ["S", "M", "L", "XL"].map((h) => /* @__PURE__ */ _e.jsx("button", { type: "button", className: h === o ? "active" : "", onClick: () => s(h), children: h }, h)) }),
          /* @__PURE__ */ _e.jsx("button", { type: "button", onClick: d, children: f("reset_widget", "Restablecer widget") }),
          /* @__PURE__ */ _e.jsx("button", { type: "button", onClick: u, children: f("hide_widget", "Ocultar widget") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _e.jsx("div", { className: `argus-widget__content${c.kind === "access-control" ? " argus-widget__content--access" : ""}`, ref: m })
  ] });
}
function fu({ widgets: c, nodes: r, storage: i, userId: o, dashboardId: s, onEditing: u, registerEditor: d }) {
  const m = Fe.useMemo(() => Object.fromEntries(c.map((F) => [F.id, F.visible])), [c]), [f, h] = Fe.useState($o), [S, b] = Fe.useState(m), [k, P] = Fe.useState(!1), [L, z] = Fe.useState(!1), [C, w] = Fe.useState("lg"), [_, x] = Fe.useState(""), [, g] = Fe.useState(0), [v, E] = Fe.useState(0), A = Fe.useRef($o), M = Fe.useRef(void 0), V = Fe.useRef(!1), $ = Fe.useRef(null), G = (F, N) => {
    if (typeof window._argusT == "function") {
      const B = window._argusT(F);
      if (B && B !== F) return B;
    }
    return N;
  };
  Fe.useEffect(() => {
    const F = () => g((N) => N + 1);
    return window.addEventListener("argus-lang-changed", F), () => window.removeEventListener("argus-lang-changed", F);
  }, []), Fe.useEffect(() => {
    d(P);
  }, [d]), Fe.useEffect(() => {
    let F = !0;
    return z(!1), Promise.all([i.load(o, s), i.loadVisibility?.(o, s)]).then(([N, B]) => {
      if (!F) return;
      const ae = vn(N);
      h(ae), A.current = ae, B && b({ ...m, ...B }), z(!0);
    }), () => {
      F = !1;
    };
  }, [i, o, s, m]), Fe.useEffect(() => {
    u(k), L && V.current && !k && i.save(o, s, A.current), V.current = k;
  }, [k, L, u, i, o, s]), Fe.useEffect(() => {
    const F = (N) => {
      k && (N.key === "Escape" ? (P(!1), x(G("edit_dashboard_done", "Edición finalizada"))) : N.key === "Enter" && N.target === document.body && P(!1));
    };
    return window.addEventListener("keydown", F), () => window.removeEventListener("keydown", F);
  }, [k]), Fe.useEffect(() => {
    if (typeof ResizeObserver > "u" || !$.current) return;
    let F = 0;
    const N = new ResizeObserver(() => {
      cancelAnimationFrame(F), F = requestAnimationFrame(() => {
        try {
          window.dispatchEvent(new Event("resize"));
        } catch {
        }
      });
    });
    return N.observe($.current), () => {
      cancelAnimationFrame(F), N.disconnect();
    };
  }, []), Fe.useEffect(() => () => clearTimeout(M.current), []);
  const Z = (F, N = !1) => {
    h(F), A.current = F, clearTimeout(M.current), M.current = window.setTimeout(() => i.save(o, s, F), N ? 0 : 550);
  }, ee = (F, N) => {
    const B = { ...S, [F]: N };
    b(B), i.saveVisibility?.(o, s, B), x(N ? G("widget_visible", "Widget visible") : G("hide_widget", "Widget oculto"));
  }, ne = (F, N, B) => {
    const ae = A.current, fe = ae[C] || [], ye = fe.filter((J) => J.i !== F), Ae = Gs(ye, N) ? Bg(ye, N, Ar[C]) : N, Le = { ...ae, [C]: fe.map((J) => J.i === F ? Ae : J) };
    Z(Le, !0), x(B);
  }, le = (F, N) => {
    const B = (A.current[C] || []).find((fe) => fe.i === F);
    if (!B) return;
    const ae = $g(N, Ar[C]);
    ne(F, { ...B, ...ae, x: Math.max(0, Math.min(B.x, Ar[C] - ae.w)) }, `${G("size", "Tamaño")} ${N}`);
  }, ge = (F) => {
    const N = ($o[C] || []).find((B) => B.i === F);
    N && ne(F, { ...N }, G("reset_widget", "Widget restablecido"));
  }, de = (F, N, B) => {
    const ae = Ar[C], fe = Math.min(ae, Math.max(1, B.w)), ye = Math.max(1, B.h), Ae = { ...B, w: fe, h: ye, x: Math.max(0, Math.min(B.x, ae - fe)) };
    ne(B.i, Ae, `${G("size", "Tamaño")}: ${fe}x${ye}`);
  }, Q = async () => {
    try {
      localStorage.removeItem(`argus:dashboard-layout:${o}:${s}`);
    } catch {
    }
    await i.reset(o, s);
    const F = vn(null);
    b(m), h(F), A.current = F, E((N) => N + 1), Z(F, !0), x(G("reset_dashboard_done", "Diseño predeterminado restaurado"));
  }, ue = f[C] || [];
  return L ? /* @__PURE__ */ _e.jsxs("section", { className: `argus-dashboard ${k ? "argus-dashboard--editing" : ""}`, ref: $, children: [
    /* @__PURE__ */ _e.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": G("edit_dashboard", "Edición del tablero"), children: [
      /* @__PURE__ */ _e.jsx("button", { type: "button", onClick: () => P((F) => !F), children: k ? "✓ " + G("edit_dashboard_done", "Listo") : "❖ " + G("edit_dashboard", "Editar tablero") }),
      k && /* @__PURE__ */ _e.jsxs(_e.Fragment, { children: [
        /* @__PURE__ */ _e.jsx("button", { type: "button", onClick: Q, children: G("reset_dashboard", "Restablecer diseño") }),
        /* @__PURE__ */ _e.jsx("div", { className: "argus-dashboard__visibility", "aria-label": G("hide_widget", "Widgets ocultos"), children: c.filter((F) => S[F.id] === !1).map((F) => /* @__PURE__ */ _e.jsxs("button", { type: "button", onClick: () => ee(F.id, !0), children: [
          "Mostrar ",
          F.title
        ] }, F.id)) })
      ] })
    ] }),
    /* @__PURE__ */ _e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: k ? _ : "" }),
    /* @__PURE__ */ _e.jsx(Ud, { children: /* @__PURE__ */ _e.jsx(qg, { className: "argus-dashboard-grid", layouts: f, breakpoints: Hg, cols: Ar, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: "vertical", preventCollision: !1, allowOverlap: !1, isBounded: !0, isDraggable: k, isResizable: k, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (F) => w(F), onLayoutChange: (F, N) => {
      k && (h(N), A.current = N);
    }, onResizeStop: de, onDragStop: (F, N, B) => {
      const ae = (A.current[C] || []).filter((fe) => fe.i !== B.i);
      if (Gs(ae, B)) {
        h({ ...A.current }), x(G("position_collision", "Posición bloqueada por colisión"));
        return;
      }
      ne(B.i, B, G("position_saved", "Posición guardada"));
    }, useCSSTransforms: !0, children: c.filter((F) => S[F.id] !== !1 && r.has(F.id)).map((F) => {
      const N = ue.find((ae) => ae.i === F.id), B = N ? Mg(N.w, N.h, Ar[C]) : F.size;
      return /* @__PURE__ */ _e.jsx("div", { children: /* @__PURE__ */ _e.jsx(Ud, { children: /* @__PURE__ */ _e.jsx(Fg, { widget: F, node: r.get(F.id), editing: k, size: B, onSize: (ae) => le(F.id, ae), onHide: () => ee(F.id, !1), onReset: () => ge(F.id) }) }) }, F.id);
    }) }, v) })
  ] }) : /* @__PURE__ */ _e.jsx("section", { className: "argus-dashboard", ref: $, children: /* @__PURE__ */ _e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: G("loading_dashboard", "Cargando tablero…") }) });
}
const Ug = '.security-console .console-hud{display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important;gap:12px!important;margin-bottom:8px!important;background:transparent!important;border:none!important;box-shadow:none!important}.console-hud-loc{display:inline-flex!important;align-items:center!important;height:36px!important;box-sizing:border-box!important;padding:0 16px!important;max-width:clamp(120px,26vw,240px)!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;border-radius:999px!important;background:linear-gradient(135deg,#ffffff2e,#ffffff0d)!important;border:1px solid rgba(255,255,255,.25)!important;box-shadow:inset 0 1px #ffffff59,0 8px 24px #00000059!important;backdrop-filter:blur(20px) saturate(180%)!important;-webkit-backdrop-filter:blur(20px) saturate(180%)!important;font-size:11.5px!important;font-weight:850!important;letter-spacing:.04em!important;color:#fff!important;text-shadow:0 1px 3px rgba(0,0,0,.5)!important}.argus-connection-pill{display:inline-flex!important;align-items:center!important;gap:8px!important;height:36px!important;padding:0 14px!important;border-radius:999px!important;background:#ffffff14!important;border:1px solid rgba(255,255,255,.16)!important;backdrop-filter:blur(20px) saturate(180%)!important;-webkit-backdrop-filter:blur(20px) saturate(180%)!important;font-size:11px!important;font-weight:800!important;letter-spacing:.05em!important;color:#fff!important;max-width:max-content!important;white-space:nowrap!important}.argus-connection-dot{width:8px!important;height:8px!important;border-radius:50%!important;background:#10b981!important;box-shadow:0 0 10px #10b981!important}.argus-connection-pill[data-online=false] .argus-connection-dot{background:#ef4444!important;box-shadow:0 0 10px #ef4444!important}.console-hud-right{display:inline-flex!important;align-items:center!important;justify-content:flex-end!important;gap:8px!important;min-width:0!important;background:transparent!important;border:0!important;box-shadow:none!important;height:36px!important}.console-system-badge{display:inline-flex!important;align-items:center!important;height:36px!important;box-sizing:border-box!important;padding:0 16px!important;border-radius:999px!important;font-size:11px!important;font-weight:900!important;letter-spacing:.05em!important;text-transform:uppercase!important;white-space:nowrap!important;backdrop-filter:blur(20px) saturate(180%)!important;-webkit-backdrop-filter:blur(20px) saturate(180%)!important}.console-system-badge--disarmed{color:#34d399!important;background:linear-gradient(135deg,#10b98147,#0596691f)!important;border:1.5px solid rgba(16,185,129,.6)!important;box-shadow:0 0 24px #10b98159,inset 0 1px #fff6!important;text-shadow:0 0 10px rgba(16,185,129,.6)!important}@supports (color: color(rec2020 1 1 1)){.console-system-badge--disarmed{color:color(rec2020 .2 .85 .4)!important}}.console-system-badge--armed_home,.console-system-badge--armed_away,.console-system-badge--armed_night,.console-system-badge--pending{color:#fbbf24!important;background:linear-gradient(135deg,#f59e0b4d,#d977061f)!important;border:1.5px solid rgba(245,158,11,.65)!important;box-shadow:0 0 24px #f59e0b61,inset 0 1px #ffffff73!important;text-shadow:0 0 10px rgba(245,158,11,.7)!important}@supports (color: color(rec2020 1 1 1)){.console-system-badge--armed_home,.console-system-badge--armed_away,.console-system-badge--armed_night,.console-system-badge--pending{color:color(rec2020 .95 .75 .1)!important}}.console-system-badge--triggered{color:#f87171!important;background:linear-gradient(135deg,#ef444461,#b91c1c26)!important;border:1.5px solid rgba(239,68,68,.75)!important;box-shadow:0 0 32px #ef44448c,inset 0 1px #ffffff73!important;text-shadow:0 0 12px rgba(239,68,68,.8)!important;animation:argusTriggerBadgePulse .9s ease-in-out infinite!important}@keyframes argusTriggerBadgePulse{0%,to{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}.security-console .entry-icon{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;will-change:transform;animation:float-icon 5s ease-in-out infinite;transform:translateZ(0)}.security-console .entry-icon svg{width:100%!important;max-width:220px!important;height:auto!important;filter:drop-shadow(0 12px 32px rgba(0,0,0,.5))}@keyframes float-icon{0%,to{transform:translateZ(0) scaleZ(1)}50%{transform:translate3d(0,-6px,0) scale3d(1.015,1.015,1)}}.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}.argus-shield-status{display:block;margin:7px auto 0;padding:5px 12px;width:max-content;max-width:200px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:#ff950026;color:#ffd27a;font-size:9.5px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}@keyframes argusArmingShield{0%,to{opacity:.55;transform:scale3d(.94,.94,1)}50%{opacity:1;transform:scale3d(1.07,1.07,1)}}@keyframes argusArmingLabel{0%,to{opacity:.62}50%{opacity:1}}.security-console .liquid-stack{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;width:100%!important}.security-console .liquid-btn{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:4px!important;padding:10px 4px!important;min-height:64px!important;border-radius:16px!important;font-size:11.5px!important;font-weight:800!important;line-height:1.15!important;background:#ffffff14!important;border:1px solid rgba(255,255,255,.16)!important;box-shadow:inset 0 1px #ffffff38,0 8px 22px #00000040!important;backdrop-filter:blur(20px) saturate(180%)!important;-webkit-backdrop-filter:blur(20px) saturate(180%)!important;color:#fff!important;cursor:pointer!important;transition:transform .2s cubic-bezier(.16,1,.3,1),background .2s ease,border-color .2s ease!important;transform:translateZ(0)!important}.security-console .liquid-btn:hover{transform:translateY(-2px) translateZ(0) scale(1.02)!important;background:#ffffff21!important;border-color:#ffffff47!important}.security-console .liquid-btn span:first-child,.security-console .liquid-btn .mode-btn-icon{font-size:20px!important;line-height:1!important}.security-console .liquid-btn span:last-child{font-size:11px!important;font-weight:800!important;color:#fff!important}.security-console .btn-home.active{background:linear-gradient(135deg,#fb8c00,#d97706)!important;border:1px solid rgba(254,215,170,.85)!important;box-shadow:0 12px 32px #fb8c008c,inset 0 1px #ffffff8c!important}.security-console .btn-away.active{background:linear-gradient(135deg,#e53935,#b91c1c)!important;border:1px solid rgba(254,202,202,.85)!important;box-shadow:0 12px 32px #e539358c,inset 0 1px #ffffff8c!important}.security-console .btn-night.active{background:linear-gradient(135deg,#1e88e5,#1d4ed8)!important;border:1px solid rgba(191,219,254,.85)!important;box-shadow:0 12px 32px #1e88e58c,inset 0 1px #ffffff8c!important}.security-console .console-sensors{display:grid;grid-template-columns:1fr;gap:8px;max-height:260px;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;padding-right:4px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.25) transparent}.security-console .console-sensors::-webkit-scrollbar{width:5px}.security-console .console-sensors::-webkit-scrollbar-track{background:#ffffff08;border-radius:4px}.security-console .console-sensors::-webkit-scrollbar-thumb{background:#ffffff38;border-radius:4px}.security-console .console-sensors.console-sensors--compact,.security-console .console-sensors[data-count="3"],.security-console .console-sensors[data-count="4"],.security-console .console-sensors[data-count="5"],.security-console .console-sensors[data-count="6"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important}.security-console .console-sensors.console-sensors--micro,.security-console .console-sensors[data-count="7"],.security-console .console-sensors[data-count="8"],.security-console .console-sensors[data-count="9"],.security-console .console-sensors[data-count="10"],.security-console .console-sensors[data-count="11"],.security-console .console-sensors[data-count="12"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:4px!important}@media (min-width: 901px){.entry:not(.ios-fullscreen) .security-console{display:grid!important;grid-template-columns:minmax(240px,340px) auto minmax(260px,380px)!important;grid-template-rows:auto 1fr!important;align-items:start!important;justify-content:center!important;gap:16px 36px!important;padding:24px 28px 20px!important}.entry:not(.ios-fullscreen) .security-console .console-hud{grid-column:1 / -1!important;grid-row:1!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-column:1!important;grid-row:2!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-column:2!important;grid-row:2!important;justify-self:center!important;align-self:center!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-column:3!important;grid-row:2!important}}@media (max-width: 900px){.entry:not(.ios-fullscreen) .security-console{display:flex!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;width:100%!important;box-sizing:border-box!important}.entry:not(.ios-fullscreen) .security-console .console-hud{flex-wrap:wrap!important;justify-content:center!important;gap:8px!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{width:100%!important;max-width:420px!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:420px!important}}.entry.ios-fullscreen{position:fixed!important;inset:0!important;width:100vw!important;width:100dvw!important;height:100vh!important;height:100dvh!important;z-index:99999999!important;background:radial-gradient(ellipse at 50% 50%,#162438,#08101a 60%,#010408)!important;margin:0!important;padding:0!important;border:none!important;border-radius:0!important;overflow-y:auto!important;overflow-x:hidden!important;box-sizing:border-box!important;-webkit-overflow-scrolling:touch!important}.entry.ios-fullscreen .entry-exit-fs{position:fixed!important;top:max(16px,env(safe-area-inset-top))!important;left:max(16px,env(safe-area-inset-left))!important;z-index:100000!important;padding:10px 16px!important;font-size:20px!important;font-weight:900!important;background:#000000a6!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important;border-radius:14px!important;color:#fff!important;border:1px solid rgba(255,255,255,.25)!important;box-shadow:0 8px 24px #00000080!important;cursor:pointer!important}@media (max-width: 900px),(orientation: portrait){.entry.ios-fullscreen .security-console{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;padding:max(64px,calc(env(safe-area-inset-top) + 48px)) 16px max(32px,env(safe-area-inset-bottom))!important;gap:18px!important;width:100%!important;max-width:480px!important;margin:0 auto!important;box-sizing:border-box!important;min-height:100%!important}.entry.ios-fullscreen .security-console .console-hud{flex-direction:row!important;flex-wrap:wrap!important;justify-content:center!important;gap:8px!important}.entry.ios-fullscreen .security-console .entry-icon{display:flex!important;margin:6px auto!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(50vw,220px)!important}.entry.ios-fullscreen .security-console .liquid-stack{width:100%!important;max-width:440px!important}.entry.ios-fullscreen .security-console .console-sensors{width:100%!important;max-width:440px!important;max-height:300px!important}}@media (min-width: 901px) and (orientation: landscape),(orientation: landscape) and (max-height: 600px){.entry.ios-fullscreen .security-console{display:grid!important;grid-template-columns:minmax(280px,360px) minmax(260px,1fr) minmax(280px,420px)!important;grid-template-rows:auto 1fr!important;align-items:center!important;justify-content:center!important;gap:20px 48px!important;padding:max(56px,env(safe-area-inset-top)) max(48px,env(safe-area-inset-right)) max(32px,env(safe-area-inset-bottom)) max(48px,env(safe-area-inset-left))!important;width:100%!important;max-width:1440px!important;margin:0 auto!important;height:100%!important;min-height:100vh!important;min-height:100dvh!important;box-sizing:border-box!important}.entry.ios-fullscreen .security-console .console-hud{grid-column:1 / -1!important;grid-row:1!important}.entry.ios-fullscreen .security-console .liquid-stack{grid-column:1!important;grid-row:2!important;width:100%!important}.entry.ios-fullscreen .security-console .entry-icon{grid-column:2!important;grid-row:2!important;justify-self:center!important;align-self:center!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(35vw,320px)!important}.entry.ios-fullscreen .security-console .console-sensors{grid-column:3!important;grid-row:2!important;width:100%!important;max-height:420px!important}}';
function Wg({ id: c, name: r, isOpen: i, isBlocking: o, isBypassed: s, battery: u, iconHtml: d, statusLabelOpen: m, statusLabelClosed: f, bypassedLabel: h }) {
  let S = null;
  if (u !== null) {
    const w = u === 0, _ = u <= 10 && !w, x = w ? "🔋 ❌" : `🔋 ${u}%`;
    (w || _) && (S = /* @__PURE__ */ _e.jsx("span", { style: {
      marginLeft: "8px",
      fontSize: "10px",
      fontWeight: 700,
      color: "#ff5252",
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(4px)",
      padding: "2px 6px",
      borderRadius: "10px",
      border: "1px solid rgba(255,82,82,0.3)",
      textShadow: "0 0 5px rgba(255,82,82,0.5)"
    }, children: x }));
  }
  const b = s ? "#a1a1aa" : o ? "#ffd700" : i ? "#ff968b" : "#75f4b0", k = s ? "none" : o ? "pulse 1s infinite" : i ? "pulse 2s infinite" : "none", P = s ? "#a1a1aa" : o ? "#ffd700" : i ? "#ff968b" : "#75f4b0", L = s ? 0.6 : 1, z = i ? m : f, C = s ? `${h || "OMITIDO"} · ${z}` : z;
  return /* @__PURE__ */ _e.jsxs("div", { className: `console-sensor ${i && !s ? "open" : ""}`, style: { opacity: L }, children: [
    /* @__PURE__ */ _e.jsx("span", { className: "console-sensor-icon", style: { display: "flex", alignItems: "center", justifyContent: "center", color: b, animation: k }, dangerouslySetInnerHTML: { __html: d } }),
    /* @__PURE__ */ _e.jsx("span", { className: "console-sensor-name", style: { color: o && !s ? "#ffd700" : "" }, children: r }),
    /* @__PURE__ */ _e.jsxs("span", { className: "console-sensor-state", style: { color: P }, children: [
      C,
      S
    ] })
  ] });
}
function Vg({ panel: c, isFullscreen: r, onToggleFullscreen: i, onUnlockKiosk: o }) {
  const [s, u] = Fe.useState(0);
  Fe.useEffect(() => {
    const $ = () => u((G) => G + 1);
    return c.addEventListener("argus-state-update", $), window.addEventListener("argus-state-update", $), () => {
      c.removeEventListener("argus-state-update", $), window.removeEventListener("argus-state-update", $);
    };
  }, [c]);
  const d = c._dashboard, m = c._hass;
  if (!d || !d.entries || d.entries.length === 0) return null;
  const f = d.entries[0], h = 0, S = c._renderEntryBackground?.(c._weatherState, c._isNight) || "", b = c._renderBatteryAlerts?.(c._activeSensors || []) || "", k = f.entity_id && m?.states[f.entity_id] ? m.states[f.entity_id].state : "unknown", P = ($) => c._t?.($) || $, L = c._homeName || c._ui?.home_name || P("home_fallback") || "Hogar", z = k === "triggered", C = c._hass ? c._hass.connected !== !1 : !1, w = !!m?.states?.[f.entity_id]?.attributes?.arming_waiting_for_sensors, _ = k === "pending" || w, x = () => {
    if (z) return P("system_triggered") || "ALARMA ACTIVADA";
    if (w) {
      const $ = m?.states?.[f.entity_id]?.attributes?.arming_blocking_sensors || [];
      return $.length ? (P("waiting_sensors_count") || "ESPERANDO {count} SENSOR(ES)").replace("{count}", String($.length)) : P("waiting_sensors") || "ESPERANDO SENSORES";
    }
    return k === "disarmed" ? P("system_disarmed") || "SISTEMA DESARMADO" : k === "armed_home" ? (P("system_armed") || "ARMADO") + " · " + (P("mode_home") || "CASA") : k === "armed_away" ? (P("system_armed") || "ARMADO") + " · " + (P("mode_away") || "AUSENTE") : k === "armed_night" ? (P("system_armed") || "ARMADO") + " · " + (P("mode_night") || "NOCHE") : P("system_armed") || "ARMADO";
  }, g = () => c._getIntelligentSVG?.(w ? "pending" : k, null, c._isNight, z, h) || "", v = [], E = m?.states?.[f.entity_id]?.attributes?.arming_blocking_sensors || [];
  if (f.entity_id) {
    const $ = c._ui?.modes?.__by_entity__?.[f.entity_id] || c._ui?.modes || {};
    let G = $[k.replace("armed_", "")] || {};
    z && (G = ["away", "home", "night"].map((ne) => $[ne]).find((ne) => (ne?.sensors || []).some((le) => ["on", "open", "unlocked", "recording", "active", "motion"].includes(m?.states?.[le]?.state))) || {});
    let Z = G.sensors || [];
    if (k === "disarmed" || _ || !Z.length) {
      const ne = /* @__PURE__ */ new Set();
      ["away", "home", "night"].forEach((le) => {
        $[le]?.sensors && $[le].sensors.forEach((ge) => ne.add(ge));
      }), Z = Array.from(ne);
    }
    const ee = G.bypassed_sensors || [];
    Z.forEach((ne) => {
      v.push({ id: ne, isBypassed: ee.includes(ne) });
    });
  }
  const A = [...v].sort(($, G) => {
    const Z = w && E.includes($.id), ee = w && E.includes(G.id);
    if (Z && !ee) return -1;
    if (!Z && ee) return 1;
    const ne = c.isSensorActive ? c.isSensorActive(m?.states[$.id]) : m?.states[$.id]?.state === "on", le = c.isSensorActive ? c.isSensorActive(m?.states[G.id]) : m?.states[G.id]?.state === "on";
    return ne && !le ? -1 : !ne && le ? 1 : 0;
  }), M = A.length, V = M >= 7 ? "console-sensors--micro" : M >= 3 ? "console-sensors--compact" : "";
  return /* @__PURE__ */ _e.jsxs(_e.Fragment, { children: [
    /* @__PURE__ */ _e.jsx("style", { dangerouslySetInnerHTML: { __html: Ug } }),
    /* @__PURE__ */ _e.jsxs("div", { className: `entry ${r ? "ios-fullscreen" : ""} ${w ? "argus-waiting" : ""}`, style: { position: "relative", width: "100%", height: "100%" }, children: [
      /* @__PURE__ */ _e.jsx("div", { dangerouslySetInnerHTML: { __html: S } }),
      c._kioskLocked && !r && /* @__PURE__ */ _e.jsxs("button", { className: "btn-unlock-kiosk", onClick: o, style: { position: "absolute", top: "16px", right: "16px", zIndex: 99, padding: "8px 14px", background: "rgba(220,38,38,0.85)", color: "white", border: "none", borderRadius: "10px", fontWeight: 600, fontSize: "13px", cursor: "pointer", backdropFilter: "blur(8px)", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }, children: [
        "🔓 ",
        P("unlock_kiosk") || "Desbloquear kiosco"
      ] }),
      r ? /* @__PURE__ */ _e.jsx("button", { className: "ghost entry-exit-fs", onClick: i, title: P("fullscreen_title") || "Salir de pantalla completa", style: { position: "fixed", top: "max(16px, env(safe-area-inset-top))", left: "max(16px, env(safe-area-inset-left))", zIndex: 1e5, padding: "10px 16px", fontSize: "20px", fontWeight: 900, background: "rgba(0,0,0,.65)", backdropFilter: "blur(16px)", borderRadius: "14px", color: "white", border: "1px solid rgba(255,255,255,.25)", boxShadow: "0 8px 24px rgba(0,0,0,.5)", cursor: "pointer" }, children: "✕" }) : /* @__PURE__ */ _e.jsx("button", { className: "ghost fs-btn entry-fs", onClick: i, title: P("fullscreen_title") || "Pantalla completa", style: { position: "absolute", bottom: "20px", right: "20px", zIndex: 10, padding: "10px 15px", fontSize: "18px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)", borderRadius: "14px", opacity: 0.85, color: "white", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "0 8px 20px rgba(0,0,0,0.35)", cursor: "pointer" }, children: "⛶" }),
      /* @__PURE__ */ _e.jsx("div", { dangerouslySetInnerHTML: { __html: b } }),
      /* @__PURE__ */ _e.jsxs("div", { className: "entry-content security-console", children: [
        /* @__PURE__ */ _e.jsxs("div", { className: "console-hud", children: [
          /* @__PURE__ */ _e.jsxs("span", { className: "console-hud-loc", children: [
            "🏡 ",
            L
          ] }),
          /* @__PURE__ */ _e.jsxs("div", { className: "argus-connection-pill", "data-online": C ? "true" : "false", children: [
            /* @__PURE__ */ _e.jsx("i", { className: "argus-connection-dot" }),
            /* @__PURE__ */ _e.jsx("span", { className: "argus-connection-label", children: C ? P("connected") || "CONECTADO" : P("disconnected") || "DESCONECTADO" })
          ] }),
          /* @__PURE__ */ _e.jsx("div", { className: "console-hud-right", children: /* @__PURE__ */ _e.jsx("span", { className: `console-system-badge console-system-badge--${z ? "triggered" : k}`, children: x() }) })
        ] }),
        /* @__PURE__ */ _e.jsxs("div", { className: "entry-icon", children: [
          /* @__PURE__ */ _e.jsx("div", { dangerouslySetInnerHTML: { __html: g() } }),
          w && /* @__PURE__ */ _e.jsx("span", { className: "argus-shield-status", children: E.length ? P("waiting_sensors") || "ESPERANDO SENSORES" : P("arming") || "ARMANDO…" })
        ] }),
        /* @__PURE__ */ _e.jsxs("div", { className: "liquid-stack", children: [
          /* @__PURE__ */ _e.jsx("button", { className: `liquid-btn btn-home ${k === "armed_home" ? "active" : ""}`, onClick: () => c._handleAction(h, "home"), dangerouslySetInnerHTML: { __html: c._modeButtonIcon("home") + `<span>${P("mode_home") || "CASA"}</span>` } }),
          /* @__PURE__ */ _e.jsx("button", { className: `liquid-btn btn-away ${k === "armed_away" ? "active" : ""}`, onClick: () => c._handleAction(h, "away"), dangerouslySetInnerHTML: { __html: c._modeButtonIcon("away") + `<span>${P("mode_away") || "AUSENTE"}</span>` } }),
          /* @__PURE__ */ _e.jsx("button", { className: `liquid-btn btn-night ${k === "armed_night" ? "active" : ""}`, onClick: () => c._handleAction(h, "night"), dangerouslySetInnerHTML: { __html: c._modeButtonIcon("night") + `<span>${P("mode_night") || "NOCHE"}</span>` } })
        ] }),
        /* @__PURE__ */ _e.jsx("div", { className: `console-sensors ${V}`, "data-count": M, children: A.length === 0 ? /* @__PURE__ */ _e.jsx("div", { className: "console-empty", children: P("no_sensors_configured") || "Sin sensores configurados" }) : A.map(($) => {
          const G = m.states[$.id], Z = $.name || G?.attributes?.friendly_name || $.id, ee = w && E.includes($.id), ne = c.isSensorActive ? c.isSensorActive(G) : G?.state === "on";
          let le = null;
          return G?.attributes?.battery_level !== void 0 ? le = G.attributes.battery_level : G?.attributes?.battery !== void 0 && (le = G.attributes.battery), /* @__PURE__ */ _e.jsx(
            Wg,
            {
              id: $.id,
              name: Z,
              isOpen: ne,
              isBlocking: ee,
              isBypassed: $.isBypassed,
              battery: le,
              iconHtml: c._getSensorIcon?.(G, $) || "",
              statusLabelOpen: P("status_open") || "ABIERTO",
              statusLabelClosed: P("status_closed") || "CERRADO",
              bypassedLabel: P("bypassed_sensor") || "OMITIDO"
            },
            $.id
          );
        }) })
      ] })
    ] })
  ] });
}
const hu = "argus-slide-action-styles", bi = {
  es: { slide_disarm: "Desliza para desarmar", slide_sos: "Desliza para activar SOS", slide_sos_stop: "Desliza para detener SOS", enter_pin: "Ingresa el PIN maestro", wrong_pin: "PIN incorrecto", cancel: "Cancelar" },
  en: { slide_disarm: "Slide to disarm", slide_sos: "Slide to trigger SOS", slide_sos_stop: "Slide to stop SOS", enter_pin: "Enter master PIN", wrong_pin: "Wrong PIN", cancel: "Cancel" },
  pt: { slide_disarm: "Deslize para desarmar", slide_sos: "Deslize para acionar SOS", slide_sos_stop: "Deslize para parar SOS", enter_pin: "Inserir PIN mestre", wrong_pin: "PIN errado", cancel: "Cancelar" },
  ru: { slide_disarm: "Сдвиньте для снятия охраны", slide_sos: "Сдвиньте для включения SOS", slide_sos_stop: "Сдвиньте для остановки SOS", enter_pin: "Введите мастер-PIN", wrong_pin: "Неверный PIN", cancel: "Отмена" },
  zh: { slide_disarm: "滑动撤防", slide_sos: "滑动触发 SOS", slide_sos_stop: "滑动停止 SOS", enter_pin: "请输入主 PIN 码", wrong_pin: "PIN 错误", cancel: "取消" },
  "zh-Hant": { slide_disarm: "滑動撤防", slide_sos: "滑動觸發 SOS", slide_sos_stop: "滑動停止 SOS", enter_pin: "請輸入主 PIN 碼", wrong_pin: "PIN 錯誤", cancel: "取消" }
};
function Gg(c) {
  if (typeof c._getCurrentLangCode == "function")
    return c._getCurrentLangCode();
  let r = c._manualLang || c._lang;
  if (!r)
    try {
      r = localStorage.getItem("argus_lang");
    } catch {
    }
  if ((!r || r === "auto") && (r = c._ui?.manual_lang || c._ui?.language || c._hass?.language || "en"), r = String(r || "en").trim(), bi[r]) return r;
  if (/^zh-(hant|tw|hk)/i.test(r)) return "zh-Hant";
  if (/^zh/i.test(r)) return "zh";
  const i = r.split(/[-_]/)[0].toLowerCase();
  return bi[i] ? i : "en";
}
function yn(c, r) {
  const i = Gg(c);
  if (c._t) {
    const o = c._t(r);
    if (o && o !== r) return o;
  }
  return (bi[i] || bi.es)[r] || bi.es[r] || r;
}
const Yg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>', _u = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>', Kg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>';
function Xg(c) {
  const r = c.shadowRoot;
  if (!r || r.getElementById(hu)) return;
  const i = document.createElement("style");
  i.id = hu, i.textContent = `
/* ── Slide-to-action base ─────────────────────────────────────────── */
.argus-sta-wrap {
  width: 100%;
  grid-column: 1 / -1;
  position: relative;
}

/* Disarm wrapper: hidden by default, shown only when armed */
.argus-sta-wrap--disarm {
  display: none;
}
.argus-sta-wrap--disarm.sta-armed {
  display: block;
}

/* The pill track — dark Liquid Glass */
.argus-sta-track {
  position: relative;
  width: 100%;
  height: 64px;
  border-radius: 32px;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  backdrop-filter: blur(32px) saturate(180%) brightness(0.7);
  -webkit-backdrop-filter: blur(32px) saturate(180%) brightness(0.7);
}
.argus-sta-track--disarm {
  background: linear-gradient(135deg, rgba(10,18,30,0.92) 0%, rgba(6,12,22,0.96) 100%);
  border: 1px solid rgba(16,185,129,0.28);
  box-shadow: 0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07);
}
.argus-sta-track--sos {
  background: linear-gradient(135deg, rgba(10,18,30,0.92) 0%, rgba(6,12,22,0.96) 100%);
  border: 1px solid rgba(239,68,68,0.28);
  box-shadow: 0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07);
}

/* Fill bar that follows the thumb */
.argus-sta-fill {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  border-radius: inherit;
  pointer-events: none;
  will-change: width;
  transition: width 0.04s linear;
}
.argus-sta-track--disarm .argus-sta-fill {
  background: linear-gradient(90deg, rgba(16,185,129,0.22), rgba(5,150,105,0.06));
}
.argus-sta-track--sos .argus-sta-fill {
  background: linear-gradient(90deg, rgba(239,68,68,0.25), rgba(185,28,28,0.06));
}

/* The large circular thumb (left side) */
.argus-sta-thumb {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  z-index: 4;
  will-change: transform;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}
.argus-sta-thumb:active { cursor: grabbing; }

.argus-sta-track--disarm .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(20,220,140,0.18), rgba(8,10,18,0.96));
  border: 1.5px solid rgba(16,185,129,0.55);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.06) inset,
    0 6px 24px rgba(0,0,0,0.55),
    0 0 18px rgba(16,185,129,0.30);
  color: rgba(167,243,208,0.95);
}
.argus-sta-track--sos .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(220,30,30,0.18), rgba(8,10,18,0.96));
  border: 1.5px solid rgba(239,68,68,0.55);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.06) inset,
    0 6px 24px rgba(0,0,0,0.55),
    0 0 18px rgba(239,68,68,0.30);
  color: rgba(252,165,165,0.95);
}
.argus-sta-track--sos.sos-pulsing .argus-sta-thumb {
  animation: staThumbPulse 0.8s infinite ease-in-out;
}
@keyframes staThumbPulse {
  0%, 100% {
    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 32px rgba(239,68,68,0.90);
    border-color: rgba(239,68,68,0.90);
  }
  50% {
    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 8px rgba(239,68,68,0.25);
    border-color: rgba(239,68,68,0.30);
  }
}

/* The specular highlight ring on thumb */
.argus-sta-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 60%);
  pointer-events: none;
}

/* Text label — centered, crisp solid white */
.argus-sta-label {
  position: absolute;
  left: 68px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  pointer-events: none;
  z-index: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7);
  transition: opacity 0.12s ease;
}
.argus-sta-track--disarm .argus-sta-label { color: #ffffff !important; }
.argus-sta-track--sos .argus-sta-label    { color: #ffffff !important; }

/* Spring snap-back animation */
.argus-sta-thumb--snap {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}

/* PIN modal overlay */
.argus-sta-pin {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  z-index: 10;
  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  background: rgba(8,12,22,0.95);
}
.argus-sta-pin.open { display: flex; }
.argus-sta-pin input {
  width: 120px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(16,185,129,0.3);
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 8px;
  outline: none;
}
.argus-sta-pin input.pin-shake {
  animation: pinShake 0.38s ease both;
  border-color: rgba(239,68,68,0.6) !important;
}
@keyframes pinShake {
  10%,90%{transform:translateX(-2px)}
  20%,80%{transform:translateX(4px)}
  30%,50%,70%{transform:translateX(-4px)}
  40%,60%{transform:translateX(4px)}
}
.argus-sta-pin .pin-row { display:flex; gap:8px; }
.argus-sta-pin button {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.14);
  color: #fff;
  background: rgba(255,255,255,0.08);
}
.argus-sta-pin .pin-ok {
  background: linear-gradient(135deg, #10b981, #059669);
  border-color: rgba(167,243,208,0.4);
}
.argus-sta-pin .pin-err {
  font-size: 10px;
  color: #fca5a5;
  min-height: 14px;
}
`, r.appendChild(i);
}
function bu(c, r, i) {
  const o = document.createElement("div");
  o.className = `argus-sta-wrap argus-sta-wrap--${c}`;
  const s = document.createElement("div");
  s.className = `argus-sta-track argus-sta-track--${c}`;
  const u = document.createElement("div");
  u.className = "argus-sta-fill";
  const d = document.createElement("div");
  d.className = "argus-sta-thumb", d.innerHTML = i;
  const m = document.createElement("span");
  m.className = "argus-sta-label", m.textContent = r;
  const f = document.createElement("div");
  return f.className = "argus-sta-pin", f.innerHTML = `
    <input type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="••••"/>
    <div class="pin-err"></div>
    <div class="pin-row">
      <button class="pin-cancel" type="button">✕</button>
      <button class="pin-ok" type="button">✓</button>
    </div>`, s.append(u, d, m, f), o.appendChild(s), { wrap: o, track: s, fill: u, thumb: d, label: m, pin: f };
}
function yu(c, r, i, o, s, u, d, m) {
  let h = !1, S = 0, b = 0, k = 0;
  function P() {
    return i.getBoundingClientRect().width - 56 - 4 * 2;
  }
  function L(A) {
    k = P();
    const M = Math.max(0, Math.min(A, k));
    s.style.transform = `translateX(${M}px)`, o.style.width = `${M + 60}px`;
    const V = M / k;
    return u.style.opacity = String(Math.max(0, 1 - V * 1.8)), M;
  }
  function z() {
    s.classList.add("argus-sta-thumb--snap"), L(0), u.style.opacity = "1", setTimeout(() => s.classList.remove("argus-sta-thumb--snap"), 520);
  }
  function C(A) {
    d.classList.contains("open") || (h = !0, k = P(), S = A - b, s.style.cursor = "grabbing");
  }
  function w(A) {
    h && (b = L(A - S));
  }
  function _() {
    h && (h = !1, s.style.cursor = "grab", b >= k * 0.8 ? r === "disarm" && Qg(c) ? (x(), z()) : (m(), z()) : z(), b = 0);
  }
  s.addEventListener("mousedown", (A) => {
    A.preventDefault(), C(A.clientX);
  }), window.addEventListener("mousemove", (A) => {
    h && w(A.clientX);
  }), window.addEventListener("mouseup", () => {
    h && _();
  }), s.addEventListener("touchstart", (A) => {
    A.preventDefault(), C(A.touches[0].clientX);
  }, { passive: !1 }), window.addEventListener("touchmove", (A) => {
    h && (A.preventDefault(), w(A.touches[0].clientX));
  }, { passive: !1 }), window.addEventListener("touchend", () => {
    h && _();
  });
  function x() {
    d.classList.add("open"), d.querySelector("input").focus();
  }
  const g = d.querySelector("input"), v = d.querySelector(".pin-err");
  function E() {
    const A = g.value;
    Zg(c, A) ? (d.classList.remove("open"), g.value = "", v.textContent = "", m(A)) : (g.classList.add("pin-shake"), v.textContent = yn(c, "wrong_pin"), setTimeout(() => {
      g.classList.remove("pin-shake"), v.textContent = "", g.value = "";
    }, 700));
  }
  d.querySelector(".pin-ok").addEventListener("click", E), g.addEventListener("keydown", (A) => {
    A.key === "Enter" && E();
  }), d.querySelector(".pin-cancel").addEventListener("click", () => {
    d.classList.remove("open"), g.value = "", v.textContent = "";
  });
}
function Qg(c) {
  return !!(c._entries?.[0]?.pin_configured || c._dashboard?.entries?.[0]?.pin_configured || c._ui?.master_pin_configured || c._pinConfigured);
}
function Zg(c, r) {
  return typeof c._verifyPin == "function" ? c._verifyPin(r) : typeof c._checkMasterPin == "function" ? c._checkMasterPin(r) : !1;
}
function Jg(c, r, i) {
  if (r.querySelector(".argus-sta-wrap")) {
    r._staRefresh?.();
    return;
  }
  r.dataset.staInstalled = "1";
  const s = r.dataset.entityId || c._dashboard?.entries?.[i]?.entity_id || "";
  function u() {
    return String(c._hass?.states?.[s]?.state || "disarmed").toLowerCase();
  }
  function d() {
    return !!c._hass?.states?.[s]?.attributes?.argus_panic_active;
  }
  const { wrap: m, track: f, fill: h, thumb: S, label: b, pin: k } = bu("disarm", yn(c, "slide_disarm"), Yg);
  yu(c, "disarm", f, h, S, b, k, (v) => {
    const E = c._dashboard?.entries?.[i]?.entry_id || "";
    typeof c._send == "function" && c._send("argus/perform_alarm_action", { action: "disarm", entry_id: E, ...v ? { code: v } : {} }).catch(() => {
    });
  });
  const { wrap: P, track: L, fill: z, thumb: C, label: w, pin: _ } = bu("sos", yn(c, "slide_sos"), _u);
  yu(c, "sos", L, z, C, w, _, () => {
    const v = c._dashboard?.entries?.[i]?.entry_id || "";
    typeof c._send == "function" && c._send("argus/perform_alarm_action", { action: "sos", entry_id: v }).catch(() => {
    });
  });
  const x = r.querySelector(".liquid-stack");
  if (!x) return;
  x.querySelectorAll(".btn-disarm, .btn-sos, .argus-disarm-btn").forEach((v) => v.remove()), x.appendChild(m), x.appendChild(P);
  function g() {
    const v = u(), E = d(), A = v !== "disarmed" && v !== "unavailable";
    m.classList.toggle("sta-armed", A), b.textContent = yn(c, "slide_disarm"), L.classList.toggle("sos-pulsing", E), w.textContent = E ? yn(c, "slide_sos_stop") : yn(c, "slide_sos"), C.innerHTML = E ? Kg : _u;
  }
  g(), r._staRefresh = g;
}
function yi(c) {
  Xg(c);
  const r = c.shadowRoot;
  r && r.querySelectorAll(".entry").forEach((i, o) => {
    if (!i.dataset.entityId) {
      const s = c._dashboard?.entries?.[o]?.entity_id;
      s && (i.dataset.entityId = s);
    }
    Jg(c, i, o), i._staRefresh?.();
  });
}
function ef(c) {
  if (!c || c.__argusSlideToAction) return;
  c.__argusSlideToAction = !0;
  const r = c.prototype, i = r._renderEntries;
  r._renderEntries = function(...u) {
    const d = i?.call(this, ...u);
    return requestAnimationFrame(() => {
      yi(this), setTimeout(() => yi(this), 100);
    }), d;
  };
  const o = r._refreshLocalizedUi;
  if (r._refreshLocalizedUi = function(...u) {
    const d = o?.call(this, ...u);
    return yi(this), d;
  }, Object.getOwnPropertyDescriptor(r, "_hass")?.set || r.set_hass) {
    const u = r.set_hass;
    r.set_hass = function(d) {
      u?.call(this, d), this.shadowRoot?.querySelectorAll(".entry").forEach((m) => m._staRefresh?.());
    };
  }
}
function Ys(c) {
  const r = c.shadowRoot;
  if (!r) return;
  const i = r.getElementById("entries");
  i && (c._reactConsoleRoot || (i.innerHTML = "", c._reactConsoleRoot = Bu.createRoot(i)), c._reactConsoleRoot.render(
    /* @__PURE__ */ _e.jsx(tf, { panel: c })
  ));
}
function tf({ panel: c }) {
  const [r, i] = Fe.useState(0), [o, s] = Fe.useState(c.classList.contains("fullscreen-active")), u = Fe.useRef(null);
  return Fe.useEffect(() => {
    const d = () => {
      i((h) => h + 1), s(c.classList.contains("fullscreen-active"));
    }, m = () => {
      s(c.classList.contains("fullscreen-active") || !!document.fullscreenElement);
    };
    c.addEventListener("argus-state-update", d), c.addEventListener("argus-fullscreen-changed", m), document.addEventListener("fullscreenchange", m), document.addEventListener("webkitfullscreenchange", m);
    const f = c._renderEntries;
    return c._renderEntries = function(...h) {
      d();
    }, () => {
      c.removeEventListener("argus-state-update", d), c.removeEventListener("argus-fullscreen-changed", m), document.removeEventListener("fullscreenchange", m), document.removeEventListener("webkitfullscreenchange", m), c._renderEntries = f;
    };
  }, [c]), Fe.useEffect(() => {
    if (!u.current) return;
    const d = setTimeout(() => {
      try {
        typeof yi == "function" && yi(c);
      } catch (m) {
        console.error("Argus: Failed to attach SOS sliders", m);
      }
    }, 40);
    return () => clearTimeout(d);
  }, [r, o, c]), /* @__PURE__ */ _e.jsx("div", { ref: u, style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ _e.jsx(
    Vg,
    {
      panel: c,
      isFullscreen: o,
      onToggleFullscreen: () => {
        if (o)
          typeof c._exitFullscreenView == "function" ? c._exitFullscreenView() : (c.classList.remove("fullscreen-active"), document.body.style.overflow = "", s(!1));
        else {
          const d = c.shadowRoot?.querySelector(".entry");
          typeof c._toggleFullscreen == "function" ? c._toggleFullscreen(d) : (c.classList.add("fullscreen-active"), document.body.style.overflow = "hidden", s(!0));
        }
      },
      onUnlockKiosk: () => c._requestKioskUnlock()
    }
  ) });
}
function rf(c) {
  if (!c || c.__argusReactSecurityConsole) return;
  c.__argusReactSecurityConsole = !0;
  const r = c.prototype.connectedCallback, i = c.prototype._load;
  c.prototype.connectedCallback = function() {
    const o = r?.call(this);
    return Ys(this), o;
  }, c.prototype._load = async function(...o) {
    const s = await i?.apply(this, o);
    return Ys(this), s;
  };
}
typeof window < "u" && (window.mountSecurityConsole = Ys);
function nf(c) {
  const r = (i) => c._t?.(i) || i;
  return [
    { id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: r("activity_log") || "Historial de actividad", size: "M", visible: !0, t: r },
    { id: "automations", nativeId: "w-automations", kind: "automations", title: r("automations") || "Automatizaciones", size: "M", visible: !0, t: r },
    { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: r("backup_title") || "Respaldo y restauración", size: "M", visible: !0, t: r },
    { id: "access-control", nativeId: "w-access", kind: "access-control", title: r("users_title") || "Control de acceso y usuarios", size: "L", visible: !0, t: r },
    { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: r("modes_sos") || "Modos / SOS", size: "XL", visible: !0, t: r },
    { id: "security-status", nativeId: "w-github", kind: "security-status", title: r("support_title") || "Estado y soporte", size: "S", visible: !0, t: r }
  ];
}
class xu extends jg {
  constructor(r) {
    super(), this.panel = r;
  }
  record() {
    return this.panel._ui?.dashboard?.react_layout_v2 || {};
  }
  async remote(r) {
    if (!this.panel._send) return;
    const o = { ...this.record(), ...r, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, s = { ...this.panel._ui?.dashboard || {}, react_layout_v2: o }, u = this.panel._dashboard?.entry_id || this.panel._dashboard?.entries?.[0]?.entry_id;
    await this.panel._send("argus/save_ui", { dashboard: s, ...u ? { entry_id: u } : {} }), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = s;
  }
  async load(r, i) {
    const o = this.record().layouts;
    return o ? vn(o) : super.load(r, i);
  }
  async save(r, i, o) {
    await super.save(r, i, o), await this.remote({ layouts: o });
  }
  async loadVisibility(r, i) {
    return this.record().visibility || await super.loadVisibility(r, i);
  }
  async saveVisibility(r, i, o) {
    await super.saveVisibility(r, i, o), await this.remote({ visibility: o });
  }
  async reset(r, i) {
    await super.reset(r, i), await this.remote({ layouts: vn(null), visibility: {} });
  }
}
function Zu(c) {
  const r = c.shadowRoot?.getElementById("edit-widgets-label");
  (r?.closest("button") || r)?.remove(), c.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((o) => o.remove());
  let i = c.shadowRoot?.getElementById("argus-react-editor-only");
  i || (i = document.createElement("style"), i.id = "argus-react-editor-only", i.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", c.shadowRoot.appendChild(i));
}
function vu(c) {
  Zu(c);
  const r = c.shadowRoot?.getElementById("widget-grid"), i = c._dashboard?.entry_id || c._dashboard?.entries?.[0]?.entry_id || "default";
  if (!r) return;
  const o = nf(c), s = /* @__PURE__ */ new Map();
  if (o.forEach((f) => {
    const h = c.shadowRoot.getElementById(f.nativeId);
    h && s.set(f.id, h);
  }), c._argusReactRoot) {
    c._argusReactRoot.render(
      /* @__PURE__ */ _e.jsx(
        fu,
        {
          widgets: o,
          nodes: s,
          storage: new xu(c),
          userId: c._currentProfile?.id || c._hass?.user?.id || "anonymous",
          dashboardId: i,
          onEditing: (f) => {
            c._widgetEditing = f, r.classList.toggle("editing", f);
          },
          registerEditor: (f) => {
            c._argusReactSetEditing = f;
          }
        }
      )
    );
    return;
  }
  let u = c.shadowRoot.getElementById("argus-react-dashboard-style");
  if (u || (u = document.createElement("style"), u.id = "argus-react-dashboard-style", u.textContent = rg + ng + ig, c.shadowRoot.appendChild(u)), !c.shadowRoot.getElementById("argus-access-scroll-fix")) {
    const f = document.createElement("style");
    f.id = "argus-access-scroll-fix", f.textContent = ".argus-widget__content--access{display:flex;min-height:0;overflow:hidden}.argus-widget__content--access>#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}.argus-widget__content--access>#w-access>.panel-head{flex:0 0 auto!important}.argus-widget__content--access>#w-access>#access-workspace{display:block!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;padding-right:4px}", c.shadowRoot.appendChild(f);
  }
  const d = document.createElement("div");
  d.id = "argus-react-dashboard-root", r.appendChild(d);
  const m = Bu.createRoot(d);
  c._argusReactRoot = m, m.render(
    /* @__PURE__ */ _e.jsx(
      fu,
      {
        widgets: o,
        nodes: s,
        storage: new xu(c),
        userId: c._currentProfile?.id || c._hass?.user?.id || "anonymous",
        dashboardId: i,
        onEditing: (f) => {
          c._widgetEditing = f, r.classList.toggle("editing", f);
        },
        registerEditor: (f) => {
          c._argusReactSetEditing = f;
        }
      }
    )
  );
}
function of(c) {
  if (!c || c.__argusReactDashboard) return;
  c.__argusReactDashboard = !0;
  const r = c.prototype, i = r.connectedCallback, o = r._load, s = r._refreshLocalizedUi;
  r.connectedCallback = function() {
    const u = i?.call(this);
    return Zu(this), u;
  }, r._load = async function() {
    const u = await o?.call(this);
    return vu(this), u;
  }, r._refreshLocalizedUi = function() {
    const u = s?.call(this);
    return vu(this), u;
  }, r._toggleWidgetEditing = function() {
    this._argusReactSetEditing?.(!this._widgetEditing);
  };
}
function wu(c) {
  const r = c._hass?.auth?.accessToken;
  return r ? { Authorization: `Bearer ${r}` } : {};
}
function af(c) {
  const r = c?.prototype;
  !r || r.__argusMediaClient || (r.__argusMediaClient = !0, r._loadUploadedFiles = async function() {
    try {
      const i = await fetch("/api/argus/media", { headers: wu(this), credentials: "same-origin" });
      if (!i.ok) throw new Error(`HTTP ${i.status}`);
      const o = await i.json();
      this._uploadedFiles = Array.isArray(o.files) ? o.files : [];
    } catch (i) {
      console.error("Private Argus media listing failed", i), this._uploadedFiles = [];
    }
    this._renderUploadedFiles?.();
  }, r._deleteUploadedFile = async function(i) {
    try {
      const o = await fetch(`/api/argus/media/${encodeURIComponent(i)}`, { method: "DELETE", headers: wu(this), credentials: "same-origin" });
      if (!o.ok) throw new Error(`HTTP ${o.status}`);
      this._uploadedFiles = (this._uploadedFiles ?? []).filter((u) => u.name !== i);
      const s = [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]];
      for (const [u, d] of s) {
        const m = this.shadowRoot.getElementById(u);
        m?.value.includes(`/${i}?`) && (m.value = "", this[d] = "");
      }
      this._renderUploadedFiles?.();
    } catch (o) {
      const s = o instanceof Error ? o.message : String(o);
      console.error("Private Argus media deletion failed", o), window.alert(this._format?.("delete_file_error", { error: s }) ?? s);
    }
  });
}
const To = (c, r) => c.getElementById(r), Do = (c, r, i) => c._t?.(r) ?? i;
function sf(c) {
  const r = c?.prototype;
  !r || r.__argusSecurityClient || (r.__argusSecurityClient = !0, r._savePin = async function() {
    const i = this.shadowRoot.getElementById("pin-status"), s = this._dashboard?.entries?.[0], u = To(this.shadowRoot, "current-pin")?.value ?? "", d = To(this.shadowRoot, "new-pin-1")?.value ?? "", m = To(this.shadowRoot, "new-pin-2")?.value ?? "", f = (h) => {
      i && (i.textContent = h, i.className = "status err");
    };
    if (!s?.entry_id) return f("No Argus config entry is available");
    if (s.pin_configured && !u) return f(Do(this, "pin_incorrect", "PIN incorrecto"));
    if (d !== m) return f(Do(this, "pin_mismatch", "Los PIN no coinciden"));
    if (d && !/^\d{4,12}$/.test(d)) return f("PIN: se requieren entre 4 y 12 dígitos");
    if (!this._send) return f("Argus WebSocket is unavailable");
    try {
      await this._send("argus/update_master_pin", { entry_id: s.entry_id, pin: d, current_pin: u }), s.pin_configured = !!d, i && (i.textContent = d ? Do(this, "pin_updated", "PIN actualizado") : Do(this, "pin_deleted", "PIN eliminado"), i.className = "status ok");
      for (const h of ["current-pin", "new-pin-1", "new-pin-2"]) {
        const S = To(this.shadowRoot, h);
        S && (S.value = "");
      }
      this._syncAccessSummary?.(), window.setTimeout(() => {
        this._load?.();
      }, 800);
    } catch (h) {
      f(h instanceof Error ? h.message : String(h));
    }
  }, r._handleForgotPin = function() {
    const i = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", o = this.shadowRoot.getElementById("pin-status");
    o ? (o.textContent = i, o.className = "status err") : window.alert(i);
  });
}
const ku = "argus-hdr-promotion-styles";
function lf(c) {
  cf(c);
}
function cf(c) {
  if (!c || c.__argusPremiumHDRApplied) return;
  c.__argusPremiumHDRApplied = !0;
  const r = c.prototype.connectedCallback;
  c.prototype.connectedCallback = function() {
    const i = typeof r == "function" ? r.call(this) : void 0;
    return df(this), i;
  };
}
function df(c) {
  const r = c.shadowRoot;
  if (!r || r.getElementById(ku)) return;
  const i = document.createElement("style");
  i.id = ku, i.textContent = `
    @supports (color: color(rec2020 1 1 1)) {
      :host {
        --argus-accent-green: color(rec2020 0.15 0.85 0.35);
        --argus-accent-amber: color(rec2020 0.95 0.70 0.10);
        --argus-accent-red: color(rec2020 0.95 0.15 0.20);
        --argus-accent-blue: color(rec2020 0.15 0.55 0.95);
        --argus-accent-purple: color(rec2020 0.70 0.20 0.90);
        --argus-glow-green: rgba(30, 220, 90, 0.45);
        --argus-glow-amber: rgba(255, 180, 20, 0.45);
        --argus-glow-red: rgba(255, 40, 50, 0.55);
      }
    }

    @supports (color: color(display-p3 1 1 1)) and (not (color: color(rec2020 1 1 1))) {
      :host {
        --argus-accent-green: color(display-p3 0.22 0.82 0.38);
        --argus-accent-amber: color(display-p3 0.98 0.72 0.15);
        --argus-accent-red: color(display-p3 0.98 0.20 0.25);
        --argus-accent-blue: color(display-p3 0.20 0.58 0.95);
        --argus-accent-purple: color(display-p3 0.68 0.25 0.88);
        --argus-glow-green: rgba(34, 197, 94, 0.40);
        --argus-glow-amber: rgba(245, 158, 11, 0.40);
        --argus-glow-red: rgba(239, 68, 68, 0.50);
      }
    }

    :host {
      --argus-accent-green: #10b981;
      --argus-accent-amber: #f59e0b;
      --argus-accent-red: #ef4444;
      --argus-accent-blue: #3b82f6;
      --argus-accent-purple: #8b5cf6;
      --argus-glow-green: rgba(16, 185, 129, 0.35);
      --argus-glow-amber: rgba(245, 158, 11, 0.35);
      --argus-glow-red: rgba(239, 68, 68, 0.45);
    }

    .entry-icon,
    .argus-shield-svg,
    .liquid-btn,
    .console-sensor,
    .argus-sta-thumb {
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      perspective: 1000px;
    }

    .entry-icon {
      will-change: transform;
      animation: float-icon 5s ease-in-out infinite;
    }

    @keyframes float-icon {
      0%, 100% {
        transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      }
      50% {
        transform: translate3d(0, -6px, 0) scale3d(1.015, 1.015, 1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .entry-icon {
        animation: none !important;
        transform: none !important;
      }
    }
  `, r.appendChild(i);
}
const Ks = "argus-motion-system-v2049", Bo = "__argusMotionV2049", Su = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", Bs = `
:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;
function uf(c) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
  const r = String(c._argusPerfProfile || c.dataset?.argusPerf || "").toLowerCase();
  return r === "essential" || c.classList.contains("argus-perf-essential") ? "essential" : r === "light" ? "light" : "full";
}
function Eu(c) {
  if (c[Bo]) return c[Bo];
  const r = {
    panel: c,
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
  return Object.defineProperty(c, Bo, { value: r, writable: !0, configurable: !0 }), r;
}
function pf(c, r) {
  const i = requestAnimationFrame(() => {
    c.rafs.delete(i), c.active && r();
  });
  return c.rafs.add(i), i;
}
function js(c, r, i, o, s) {
  r.addEventListener(i, o, s), c.cleanups.add(() => r.removeEventListener(i, o, s));
}
function Js(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Ks);
  i ? i.textContent !== Bs && (i.textContent = Bs) : (i = document.createElement("style"), i.id = Ks, i.textContent = Bs, r.appendChild(i));
}
function xi(c) {
  c.profileControl?.classList.remove("is-entering"), c.profileControl = null, c.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function Cu(c, r) {
  xi(c), c.profileControl = r, r?.classList.add("is-entering"), c.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function mf(c) {
  c.observer || !c.panel.shadowRoot || (c.observer = new MutationObserver((r) => {
    r.some((i) => [...i.addedNodes].some((o) => o instanceof Element && o.id !== Ks)) && (c.observerFrame || (c.observerFrame = pf(c, () => {
      c.observerFrame = 0, Js(c.panel);
    })));
  }), c.observer.observe(c.panel.shadowRoot, { childList: !0, subtree: !0, attributes: !1 }));
}
function gf(c) {
  const r = c.panel.shadowRoot;
  if (!r) return;
  const i = (o) => {
    o && (o.classList.remove("argus-motion-press"), c.pressed.delete(o));
  };
  js(c, r, "pointerdown", (o) => {
    if (uf(c.panel) === "essential") return;
    const u = o.target?.closest?.(Su);
    !u || u.disabled || (u.classList.add("argus-motion-press"), c.pressed.add(u));
  }, !0), ["pointerup", "pointercancel", "pointerleave"].forEach((o) => js(c, r, o, (s) => {
    const u = s.target;
    i(u?.closest?.(Su));
  }, !0)), js(c, r, "click", (o) => {
    const s = o.target, u = s?.closest?.(".user-card");
    u && u.dataset.isOwn === "true" && u.dataset.pinRequired !== "true" && Cu(c, u), s?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && Cu(c, s.closest("button")), s?.closest?.("#btn-cancel-login") && xi(c);
  }, !0);
}
function qs(c) {
  c.active || !c.panel.shadowRoot || (c.active = !0, Js(c.panel), gf(c), mf(c), c.api = Object.freeze({ animateView: () => {
  }, stagger: () => {
  }, transitionBackground: () => () => {
  }, animateDashboard: () => {
  } }));
}
function ff(c) {
  c.active = !1, c.observer?.disconnect(), c.observer = null, c.observerFrame && cancelAnimationFrame(c.observerFrame), c.observerFrame = 0, c.rafs.forEach(cancelAnimationFrame), c.rafs.clear(), c.timers.forEach(clearTimeout), c.timers.clear(), c.cleanups.forEach((r) => r()), c.cleanups.clear(), c.pressed.forEach((r) => r.classList.remove("argus-motion-press")), c.pressed.clear(), xi(c);
}
function hf(c) {
  const r = c?.prototype;
  if (!r || r.__argusMotionSystemV2049) return;
  r.__argusMotionSystemV2049 = !0;
  const i = r.connectedCallback, o = r.disconnectedCallback, s = r._load;
  r.connectedCallback = function() {
    const u = i?.call(this), d = Eu(this);
    return this.shadowRoot ? qs(d) : queueMicrotask(() => qs(d)), u;
  }, r.disconnectedCallback = function() {
    const u = this[Bo];
    return u && ff(u), o?.call(this);
  }, r._load = async function(...u) {
    const d = Eu(this);
    try {
      const m = await s?.apply(this, u);
      return !d.active && this.isConnected && qs(d), Js(this), xi(d), m;
    } catch (m) {
      throw xi(d), m;
    }
  };
}
const zu = "__argusStableRenderV2050";
function Vr(c) {
  const r = c.shadowRoot;
  if (!r) return;
  const i = /* @__PURE__ */ new Date(), o = c._formatTime ? c._formatTime(i) : i.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), s = i.toLocaleDateString(c._getLocale?.() || void 0, { weekday: "short", month: "short", day: "numeric" }), u = r.getElementById("hero-clock-time"), d = r.getElementById("hero-clock-date");
  u && u.textContent !== o && (u.textContent = o), d && d.textContent !== s && (d.textContent = s), r.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((m) => {
    m && m.textContent !== o && (m.textContent = o);
  });
}
function Au(c, r, i, o, s, u, d) {
  return [
    r?.entity_id || "",
    r?.entry_id || "",
    i || "",
    u ? "1" : "0",
    d ? "1" : "0",
    s || "",
    o?.arming_waiting_for_sensors ? "1" : "0",
    JSON.stringify(o?.arming_blocking_sensors || []),
    JSON.stringify(o?.triggered_sensors || []),
    c._backgroundMode || "",
    c._panelBgFile || "",
    c._getWeatherEntity?.()?.state || "",
    c._hass?.states?.["sun.sun"]?.state || "",
    c._getDisplayedTemperature?.() || "",
    c._homeName || "",
    c._kioskLocked ? "1" : "0",
    String(c._getCurrentLangCode?.() || c._manualLang || c._ui?.language || c._hass?.language || "")
  ].join("|");
}
function Fs(c, r) {
  !r || r._argusDelegated || (r._argusDelegated = !0, r.addEventListener("click", (i) => {
    const o = i.target;
    if (o.closest?.('button[data-action="unlock-kiosk"]')) {
      c._requestKioskUnlock?.();
      return;
    }
    const u = o.closest?.('button[data-action="sos"]');
    if (u) {
      c._sosEntryIdx = Number(u.dataset.idx), c.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
      return;
    }
    const d = o.closest?.('button[data-action="stop-sos"]');
    if (d) {
      c._stopSOS?.(Number(d.dataset.idx));
      return;
    }
    const m = o.closest?.("button[data-fullscreen]");
    if (m) {
      c._toggleFullscreen?.(m.closest(".entry"));
      return;
    }
    if (o.closest?.("button[data-exit-fullscreen]")) {
      c._exitFullscreenView?.();
      return;
    }
    const h = o.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])');
    h?.dataset?.idx != null && h?.dataset?.action && c._handleAction?.(h.dataset.idx, h.dataset.action);
  }));
}
function _f(c) {
  const r = c?.prototype;
  if (!r || r[zu]) return;
  r[zu] = !0;
  const i = r._renderEntries, o = Object.getOwnPropertyDescriptor(r, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), "hass");
  r._updateLiveClocks = function() {
    Vr(this);
  }, r._startClock = function() {
    this._clockInterval && clearInterval(this._clockInterval), Vr(this), this._clockInterval = setInterval(() => {
      this._dashboard && Vr(this);
    }, 1e3);
  }, r._renderEntries = function(m = !1) {
    const f = this.shadowRoot;
    if (!f) return i?.call(this, m);
    const h = f.getElementById("entries"), S = this._dashboard?.entries || [];
    if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !h || !S.length) {
      const z = i?.call(this, m);
      return Fs(this, f.getElementById("entries")), Vr(this), z;
    }
    const b = [...h.querySelectorAll("article.entry")];
    if (!(m || b.length !== S.length || !b.every((z) => z.querySelector(".entry-content")))) {
      let z = !0;
      for (let C = 0; C < S.length; C++) {
        const w = S[C], _ = this._hass?.states?.[w.entity_id], x = _?.state || w.state || "unavailable", g = _?.attributes || {}, v = !!g.argus_panic_active, E = this._fullscreenIdx === C || !!this._kioskLocked && (this._kioskEntryId === w.entry_id || S.length === 1), A = String(x).replace("armed_", "");
        let M = this._ui?.modes?.__by_entity__?.[w.entity_id]?.[A] || this._ui?.modes?.[A] || {}, V = M.sensors || [];
        if (x === "disarmed" || !V.length) {
          const ne = this._ui?.modes?.__by_entity__?.[w.entity_id] || this._ui?.modes || {}, le = /* @__PURE__ */ new Set();
          ["away", "home", "night", "vacation"].forEach((ge) => {
            (ne[ge]?.sensors || []).forEach((de) => le.add(de));
          }), V = [...le];
        }
        const $ = M.bypassed_sensors || [], Z = V.filter((ne) => !$.includes(ne)).map((ne) => {
          const le = this._hass?.states?.[ne], ge = this._getSensorBattery?.(ne, le) ?? le?.attributes?.battery_level ?? le?.attributes?.battery_percentage ?? "";
          return `${ne}:${le?.state || ""}:${ge}`;
        }).join(","), ee = Au(this, w, x, g, Z, v, E);
        if (this._instanceSignatures.get(C) !== ee) {
          z = !1;
          break;
        }
      }
      if (z) {
        const w = S.map((g) => this._hass?.states?.[g.entity_id]?.state || "unavailable").some((g) => String(g).startsWith("armed") || g === "triggered" || g === "pending"), _ = f.getElementById("global-status");
        _ && (_.innerHTML = "");
        const x = f.getElementById("hero-security-pill");
        if (x) {
          const g = (A) => this._t?.(A) || A, v = g(w ? "system_armed" : "system_disarmed"), E = `<i class="hero-live" style="background:${w ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${w ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(v) || v}`;
          x.innerHTML !== E && (x.innerHTML = E);
        }
        Vr(this), Fs(this, h);
        return;
      }
    }
    const P = i?.call(this, m === !0 ? !0 : void 0);
    return [...h.querySelectorAll("article.entry")].forEach((z, C) => {
      const w = S[C];
      if (!w) return;
      const _ = this._hass?.states?.[w.entity_id], x = _?.state || w.state || "unavailable", g = _?.attributes || {}, v = !!g.argus_panic_active, E = this._fullscreenIdx === C || !!this._kioskLocked && (this._kioskEntryId === w.entry_id || S.length === 1), A = String(x).replace("armed_", "");
      let M = this._ui?.modes?.__by_entity__?.[w.entity_id]?.[A] || this._ui?.modes?.[A] || {}, V = M.sensors || [];
      if (x === "disarmed" || !V.length) {
        const ne = this._ui?.modes?.__by_entity__?.[w.entity_id] || this._ui?.modes || {}, le = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((ge) => {
          (ne[ge]?.sensors || []).forEach((de) => le.add(de));
        }), V = [...le];
      }
      const $ = M.bypassed_sensors || [], Z = V.filter((ne) => !$.includes(ne)).map((ne) => {
        const le = this._hass?.states?.[ne], ge = this._getSensorBattery?.(ne, le) ?? le?.attributes?.battery_level ?? le?.attributes?.battery_percentage ?? "";
        return `${ne}:${le?.state || ""}:${ge}`;
      }).join(","), ee = Au(this, w, x, g, Z, v, E);
      this._instanceSignatures.set(C, ee), z.dataset.renderSig = ee;
    }), Fs(this, h), Vr(this), P;
  };
  const s = o?.get, u = o?.set;
  u && Object.defineProperty(r, "hass", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return s ? s.call(this) : this._hass;
    },
    set: function(m) {
      const f = this._hass;
      if (f && this._dashboard?.entries?.length) {
        const h = /* @__PURE__ */ new Set(), S = (x) => {
          !x || typeof x != "object" || (Array.isArray(x.sensors) && x.sensors.forEach((g) => h.add(g)), Object.values(x).forEach((g) => {
            g && typeof g == "object" && S(g);
          }));
        };
        S(this._ui?.modes);
        const b = f.language !== m.language;
        b && !this._manualLang && this._refreshLocalizedUi?.();
        const k = this._dashboard.entries.some((x) => x.entity_id && f.states[x.entity_id]?.state !== m.states[x.entity_id]?.state), P = [...h].some(
          (x) => f.states[x]?.state !== m.states[x]?.state || f.states[x]?.attributes?.battery_level !== m.states[x]?.attributes?.battery_level || f.states[x]?.attributes?.battery_percentage !== m.states[x]?.attributes?.battery_percentage
        ), L = this._temperatureSource === "auto" ? null : this._temperatureSource, z = L && f.states[L]?.state !== m.states[L]?.state, C = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(m.states).find((x) => x.entity_id?.startsWith("weather."))?.entity_id, w = C && (f.states[C]?.state !== m.states[C]?.state || f.states[C]?.attributes?.temperature !== m.states[C]?.attributes?.temperature), _ = k || P || z || w || b;
        this._hass = m, this._updateTheme?.(), _ ? (this._renderEntries?.(b), this._renderActivityLog?.()) : Vr(this);
        return;
      }
      return u.call(this, m);
    }
  });
  const d = r.connectedCallback;
  r.connectedCallback = function() {
    const m = d?.call(this);
    return this._startClock?.(), m;
  };
}
const Pu = "argus-v2050-alarm-visuals", bf = {
  armed_home: /EN CASA|HOME|EM CASA|CASA|在家|ДОМА/i,
  armed_away: /AUSENTE|AWAY|ASSENTE|外出|УШЁЛ/i,
  armed_night: /NOCHE|NIGHT|NOITE|NOTTE|夜间|НОЧЬ/i
};
function yf(c, r) {
  const i = r?.entity_id || r?.alarm_entity_id, o = i ? c._hass?.states?.[i]?.state : void 0;
  return String(o || r?.state || r?.alarm_state || r?.attributes?.state || "").toLowerCase();
}
function Us(c, r, i) {
  c.classList.toggle("active", i), c.classList.toggle("argus-action-active", i), c.dataset.argusAction = r, r === "sos" && c.classList.toggle("flashing", i);
}
function xf(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Pu);
  i || (i = document.createElement("style"), i.id = Pu, r.appendChild(i)), i.textContent = `
.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}
.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important;will-change:transform,opacity}
.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}
.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;will-change:transform,opacity}
@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale3d(.94,.94,1)}50%{opacity:1;transform:scale3d(1.07,1.07,1)}}
@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}
@keyframes argusTriggeredSensor{0%,100%{opacity:.62;transform:scale3d(1,1,1)}50%{opacity:1;transform:scale3d(1.02,1.02,1)}}
`;
}
function Ws(c) {
  if (!c.shadowRoot) return;
  xf(c);
  const r = c.shadowRoot.querySelectorAll(".entry");
  Array.from(r).forEach((i, o) => {
    const s = c._dashboard?.entries?.[o] || {}, u = s.attributes || c._hass?.states?.[s.entity_id]?.attributes || {}, d = yf(c, s), m = u.arming_blocking_sensors || [], f = d === "arming" || !!u.arming_waiting_for_sensors || !!m.length;
    i.classList.toggle("argus-arming", f), i.classList.toggle("argus-waiting", f);
    const h = i.querySelector(".entry-icon");
    let S = i.querySelector(".argus-shield-status");
    if (f && h) {
      S || (S = document.createElement("span"), S.className = "argus-shield-status", h.insertAdjacentElement("afterend", S));
      const z = (c._t?.("waiting_sensors_count") || "ESPERANDO {count} SENSOR(ES)").replace("{count}", String(m.length));
      S.textContent = m.length ? z : d === "arming" ? c._t?.("arming") || "ARMANDO…" : c._t?.("waiting_sensors") || "ESPERANDO SENSORES";
    } else
      S?.remove();
    const b = i.querySelector(".liquid-stack");
    b && Array.from(b.querySelectorAll(".liquid-btn,button")).forEach((L) => {
      const z = L, C = String(z.textContent || "");
      if (/SOS|PÁNICO|PANIC|PANIQUE|PÂNICO|PANICO|紧急|ПАНИКА/i.test(C)) Us(z, "sos", !!u.argus_panic_active);
      else if (/DESARMAR|DISARM|DESARMADO|DISARMED|DÉSARMER|DÉSARMÉ|OFF|已撤防|СНЯТО/i.test(C)) Us(z, "disarm", d === "disarmed");
      else {
        const w = Object.entries(bf).find(([, _]) => _.test(C));
        w && Us(z, w[0], d === w[0]);
      }
    });
    const k = new Set((u.triggered_sensors || []).map(String)), P = new Set(m.map((L) => String(c._dashboard?.available_entities?.find((z) => z.entity_id === L)?.name || L).toLocaleLowerCase()));
    i.querySelectorAll(".console-sensor").forEach((L) => {
      const z = String(L.querySelector(".console-sensor-name")?.textContent || L.textContent || "").toLocaleLowerCase(), C = Array.from(P).some((_) => z.includes(_) || _.includes(z)), w = Array.from(k).some((_) => z.includes(String(_).toLocaleLowerCase()));
      L.classList.toggle("argus-blocking", C), L.classList.toggle("argus-triggered-sensor", w);
    });
  });
}
function vf(c) {
  const r = c?.prototype;
  if (!r || r.__v2050AlarmVisuals) return;
  r.__v2050AlarmVisuals = !0;
  const i = r.connectedCallback, o = r._load, s = r._renderEntries;
  r.connectedCallback = function() {
    const u = i?.call(this);
    return Ws(this), u;
  }, r._load = async function(...u) {
    const d = await o?.apply(this, u);
    return Ws(this), d;
  }, r._renderEntries = function(...u) {
    const d = s?.apply(this, u);
    return Ws(this), d;
  };
}
const Ru = "argus-v2049-responsive-widgets", wf = '#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"],.users-modal,.access-modal,.argus-users-modal';
function kf(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Ru);
  i || (i = document.createElement("style"), i.id = Ru, r.appendChild(i)), i.textContent = `
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
function Sf(c) {
  const r = c.shadowRoot;
  r && r.querySelectorAll(wf).forEach((i) => {
    const o = i;
    o.style.touchAction = "pan-y", o.style.setProperty("-webkit-overflow-scrolling", "touch"), o.scrollHeight > o.clientHeight && (o.style.overflowY = "auto");
  });
}
function Ho(c) {
  kf(c), Sf(c);
}
function Ef(c) {
  const r = c?.prototype;
  if (!r || r.__v2049ResponsiveWidgets) return;
  r.__v2049ResponsiveWidgets = !0;
  const i = r.connectedCallback, o = r.disconnectedCallback, s = r._load, u = r._renderEntries;
  r.connectedCallback = function() {
    const d = i?.call(this);
    return Ho(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
      this._v2049Frame || (this._v2049Frame = requestAnimationFrame(() => {
        this._v2049Frame = 0, Ho(this);
      }));
    }), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), d;
  }, r.disconnectedCallback = function() {
    return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, o?.call(this);
  }, r._load = async function(...d) {
    const m = await s?.apply(this, d);
    return Ho(this), m;
  }, r._renderEntries = function(...d) {
    const m = u?.apply(this, d);
    return Ho(this), m;
  };
}
const Iu = "argus-v2050-widget-layouts";
function Cf(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Iu);
  i || (i = document.createElement("style"), i.id = Iu, r.appendChild(i)), i.textContent = `
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
function zf(c) {
  const r = c.shadowRoot;
  r && r.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((i) => {
    const o = i;
    o.style.touchAction = "pan-y", o.style.setProperty("-webkit-overflow-scrolling", "touch"), o.scrollHeight > o.clientHeight && (o.style.overflowY = "auto");
  });
}
function Mo(c) {
  Cf(c), zf(c);
}
function Af(c) {
  const r = c?.prototype;
  if (!r || r.__v2050WidgetLayouts) return;
  r.__v2050WidgetLayouts = !0;
  const i = r.connectedCallback, o = r.disconnectedCallback, s = r._load, u = r._renderEntries;
  r.connectedCallback = function() {
    const d = i?.call(this);
    return Mo(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
      this._v2050LayoutFrame || (this._v2050LayoutFrame = requestAnimationFrame(() => {
        this._v2050LayoutFrame = 0, Mo(this);
      }));
    }), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, { childList: !0, subtree: !0 }), d;
  }, r.disconnectedCallback = function() {
    return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, o?.call(this);
  }, r._load = async function(...d) {
    const m = await s?.apply(this, d);
    return Mo(this), m;
  }, r._renderEntries = function(...d) {
    const m = u?.apply(this, d);
    return Mo(this), m;
  };
}
const Nu = "argus-more-info-hook-installed", Lu = "argus-more-info-dialog-styles";
function Pf(c, r) {
  if (!c || !c.startsWith("alarm_control_panel.")) return !1;
  if (c.includes("argus")) return !0;
  const i = r?.states?.[c];
  return !!(i?.attributes?.argus_version || i?.attributes?.argus_entry_id);
}
function Rf(c) {
  if (!c || typeof c.getElementById == "function" && c.getElementById(Lu)) return;
  const r = c.createElement("style");
  r.id = Lu, r.textContent = `
    ha-more-info-dialog:has(.argus-more-info-active) ha-dialog,
    ha-more-info-dialog:has(.argus-more-info-active) .mdc-dialog__surface {
      --ha-dialog-border-radius: 28px !important;
      --mdc-shape-medium: 28px !important;
      background: rgba(7, 17, 31, 0.94) !important;
      backdrop-filter: blur(32px) saturate(170%) !important;
      -webkit-backdrop-filter: blur(32px) saturate(170%) !important;
      border: 1px solid rgba(255, 255, 255, 0.16) !important;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65) !important;
      max-width: 640px !important;
      width: min(92vw, 620px) !important;
    }
    .argus-more-info-container {
      width: 100%;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      overflow: hidden;
      border-radius: 24px;
    }
    .argus-more-info-container argus-panel-v2018 {
      display: block;
      width: 100%;
    }
  `, (c.head || c.body || c).appendChild(r);
}
function Ou(c, r) {
  if (!c) return;
  const i = c._entityId || c.entityId || c.params?.entityId;
  if (!Pf(i, r)) return;
  const o = c.shadowRoot;
  if (!o) return;
  const s = o.querySelector("more-info-content") || o.querySelector("more-info-alarm_control_panel") || o.querySelector(".content") || o.querySelector("ha-dialog");
  if (!s) return;
  c.classList.add("argus-more-info-active");
  let u = o.querySelector(".argus-more-info-container");
  if (u) {
    const d = u.querySelector("argus-card") || u.querySelector("argus-panel-v2018");
    d && (d.hass = r);
  } else {
    u = document.createElement("div"), u.className = "argus-more-info-container";
    const d = customElements.get("argus-card") ? "argus-card" : customElements.get("argus-panel-v2018") ? "argus-panel-v2018" : null;
    if (d) {
      const f = document.createElement(d);
      if (typeof f.setConfig == "function")
        try {
          f.setConfig({ entity: i, compact: !0 });
        } catch {
        }
      f.hass = r, u.appendChild(f);
    }
    const m = o.querySelector("more-info-alarm_control_panel") || o.querySelector("more-info-content");
    m && m !== u ? (m.style.display = "none", m.parentNode?.insertBefore(u, m)) : s.appendChild(u);
  }
}
function If(c) {
  if (typeof window > "u" || typeof document > "u" || window[Nu]) return;
  window[Nu] = !0;
  try {
    Rf(document);
  } catch {
  }
  const r = (i) => {
    i.detail?.entityId && requestAnimationFrame(() => {
      try {
        const s = document.querySelector("home-assistant"), u = s?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
        u && Ou(u, s?.hass);
      } catch {
      }
    });
  };
  try {
    window.addEventListener("hass-more-info", r, { passive: !0 }), document.addEventListener("hass-more-info", r, { passive: !0 });
  } catch {
  }
  try {
    typeof MutationObserver < "u" && document.body && new MutationObserver(() => {
      try {
        const o = document.querySelector("home-assistant"), s = o?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
        s && Ou(s, o?.hass);
      } catch {
      }
    }).observe(document.body, { childList: !0, subtree: !0 });
  } catch {
  }
}
function Df(c) {
  c || (c = customElements.get("argus-panel-v2018"));
  const r = c;
  !r || r.__argusTypedFrontend || (r.__argusTypedFrontend = !0, sf(r), af(r), lf(r), hf(r), _f(r), vf(r), ef(r), Ef(r), Af(r), If(), of(r), rf(r));
}
export {
  Df as applyArgusFrontend
};
