const si = [
  { code: "auto", flag: "🏠", label: "Home Assistant" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" }
], li = {
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
    edit_widgets: "Config. Widgets",
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
    system_diagnostics: "Diagnóstico y Resumen del Sistema",
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
    permissions_title: "Permisos",
    permissions_modal_desc: "Selecciona las acciones permitidas para este perfil estándar:",
    perm_view_status: "Ver Estado de Sensores / Panel",
    perm_arm: "Armar Alarma",
    perm_disarm: "Desarmar Alarma",
    perm_sos: "Activar SOS / Pánico",
    perm_view_history: "Ver Historial de Actividad",
    perm_change_pin: "Permitir Cambiar su Pin perfil Argus",
    perm_change_master_pin: "Permitir Cambiar el Pin de Armado",
    perm_admin_access: "Acceso a Pestañas / Ajustes de Admin",
    perm_admin_profiles: "Acceso a Perfiles de Admin",
    no_pin_badge: "SIN PIN",
    configured_pin_badge: "CONFIGURADO",
    configure_btn: "Configurar",
    enter_new_pin: "Introduce el nuevo PIN (4 a 8 dígitos):",
    enter_current_pin: "Introduce el PIN actual:",
    confirm_remove_access_pin: "¿Estás seguro de que deseas eliminar el Pin de perfil Argus?",
    confirm_remove_master_pin: "¿Estás seguro de que deseas eliminar el Pin de Armado del sistema?",
    no_arm_perm_alert: "No tienes permisos para armar la alarma.",
    no_disarm_perm_alert: "No tienes permisos para desarmar la alarma.",
    no_sos_perm_alert: "No tienes permisos para activar la alarma SOS.",
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
    edit_widgets: "Widget Config",
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
    system_diagnostics: "System Diagnostics & Summary",
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
    permissions_title: "Permissions",
    permissions_modal_desc: "Select allowed actions for this standard profile:",
    perm_view_status: "View Sensors / Security Status",
    perm_arm: "Arm System",
    perm_disarm: "Disarm System",
    perm_sos: "Trigger SOS / Panic",
    perm_view_history: "View Activity History",
    perm_change_pin: "Allow Changing Argus Profile PIN",
    perm_change_master_pin: "Allow Changing System Arming PIN",
    perm_admin_access: "Access Admin Tabs & Settings",
    perm_admin_profiles: "Access Admin Profiles",
    no_pin_badge: "NO PIN",
    configured_pin_badge: "CONFIGURED",
    configure_btn: "Configure",
    enter_new_pin: "Enter new PIN (4 to 8 digits):",
    enter_current_pin: "Enter current PIN:",
    confirm_remove_access_pin: "Are you sure you want to remove your Argus Profile PIN?",
    confirm_remove_master_pin: "Are you sure you want to remove the System Arming PIN?",
    no_arm_perm_alert: "You do not have permission to arm the system.",
    no_disarm_perm_alert: "You do not have permission to disarm the system.",
    no_sos_perm_alert: "You do not have permission to trigger SOS.",
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
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100dvw !important;
    height: 100vh !important;
    height: 100dvh !important;
    z-index: 99999999 !important;
    background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    -webkit-overflow-scrolling: touch !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  :host(.fullscreen-active) .hero,
  :host(.fullscreen-active) #argus-react-dashboard-root,
  :host(.fullscreen-active) .argus-dashboard,
  :host(.fullscreen-active) .panel-head,
  :host(.fullscreen-active) section:not(#w-instances),
  :host(.fullscreen-active) .argus-widget:not(#w-instances),
  :host(.fullscreen-active) .personalize-section {
    display: none !important;
  }
  :host(.fullscreen-active) .wrap,
  :host(.fullscreen-active) .grid,
  :host(.fullscreen-active) #widget-grid,
  :host(.fullscreen-active) #w-instances,
  :host(.fullscreen-active) #entries,
  :host(.fullscreen-active) #entries > div {
    display: flex !important;
    flex-direction: column !important;
    position: static !important;
    width: 100% !important;
    width: 100vw !important;
    width: 100dvw !important;
    max-width: none !important;
    min-height: 100% !important;
    min-height: 100vh !important;
    min-height: 100dvh !important;
    height: 100% !important;
    max-height: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    transform: none !important;
    filter: none !important;
    overflow: visible !important;
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
  .security-console {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  .console-hud {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

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

  .entry-content {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
  }

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
              <span id="system-diagnostics-txt" style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;color:rgba(255,255,255,0.85)">ℹ️ Diagnóstico y Resumen del Sistema</span>
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
    const a = this._getClockFormat(), s = String(this._hass?.locale?.time_format || "").toLowerCase();
    if (a === "12h" || a === "auto" && (s.includes("12") || s.includes("am"))) {
      let u = i.getHours();
      const f = String(i.getMinutes()).padStart(2, "0"), g = u >= 12 ? "PM" : "AM";
      return u = u % 12, u = u || 12, `${u}:${f} ${g}`;
    } else {
      const u = String(i.getHours()).padStart(2, "0"), f = String(i.getMinutes()).padStart(2, "0");
      return `${u}:${f}`;
    }
  }
  _formatDateTime(r) {
    if (!r) return "";
    const i = r instanceof Date ? r : new Date(r);
    if (isNaN(i.getTime())) return "";
    const a = this._getClockFormat(), s = String(this._hass?.locale?.time_format || "").toLowerCase(), d = a === "12h" || a === "auto" && (s.includes("12") || s.includes("am")), u = String(i.getDate()).padStart(2, "0"), f = String(i.getMonth() + 1).padStart(2, "0"), g = i.getFullYear();
    if (d) {
      let _ = i.getHours();
      const S = String(i.getMinutes()).padStart(2, "0"), b = _ >= 12 ? "PM" : "AM";
      return _ = _ % 12, _ = _ || 12, `${u}/${f}/${g}, ${_}:${S} ${b}`;
    } else {
      const _ = String(i.getHours()).padStart(2, "0"), S = String(i.getMinutes()).padStart(2, "0");
      return `${u}/${f}/${g}, ${_}:${S}`;
    }
  }
  _updateHeroClock() {
    if (typeof this._updateLiveClocks == "function") {
      this._updateLiveClocks();
      return;
    }
    const r = this.shadowRoot;
    if (!r) return;
    const i = /* @__PURE__ */ new Date(), a = typeof this._formatTime == "function" ? this._formatTime(i) : i.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), s = i.toLocaleDateString(typeof this._getLocale == "function" ? this._getLocale() : void 0, { weekday: "short", month: "short", day: "numeric" }), d = r.getElementById("hero-clock-time"), u = r.getElementById("hero-clock-date");
    d && d.textContent !== a && (d.textContent = a), u && u.textContent !== s && (u.textContent = s);
  }
  _updateProfileBadge() {
    const r = this.shadowRoot.getElementById("active-profile-pill"), i = this.shadowRoot.getElementById("profile-avatar"), a = this.shadowRoot.getElementById("profile-name"), s = this.shadowRoot.getElementById("profile-role");
    if (!r || !i || !a || !s) return;
    const d = this._currentProfile;
    if (!d) {
      r.style.display = "none";
      return;
    }
    r.style.display = "flex";
    const u = d.name || "User";
    d.picture ? i.innerHTML = `<img src="${this._escapeHtml(d.picture)}" 
        style="width:100%;height:100%;border-radius:50%;object-fit:cover;" 
        alt="${this._escapeHtml(u)}" />` : i.textContent = u.slice(0, 2).toUpperCase(), a.textContent = u;
    const f = d.role === "admin" ? "role_argus_admin" : "role_argus_user";
    s.textContent = this._t(f);
  }
  _getBrightness(r) {
    return new Promise((i) => {
      if (!r) {
        i(128);
        return;
      }
      const a = new Image();
      a.crossOrigin = "Anonymous", a.onload = () => {
        try {
          const s = document.createElement("canvas");
          s.width = 10, s.height = 10;
          const d = s.getContext("2d");
          if (!d) {
            i(128);
            return;
          }
          d.drawImage(a, 0, 0, 10, 10);
          const u = d.getImageData(0, 0, 10, 10).data;
          let f = 0, g = 0, _ = 0, S = 0;
          for (let k = 0; k < u.length; k += 4)
            f += u[k], g += u[k + 1], _ += u[k + 2], S++;
          const b = (0.299 * f + 0.587 * g + 0.114 * _) / S;
          i(b);
        } catch {
          i(128);
        }
      }, a.onerror = () => {
        i(128);
      }, a.src = r;
    });
  }
  async _updateTheme() {
    if (!this._hass) return;
    let r = !1;
    const i = this._hubBgMode || "default";
    if (i === "default")
      r = !0;
    else if (i === "image") {
      const a = this._hubBgFile || "";
      if (a)
        if (this._cachedBgUrl === a && this._cachedBgBrightness !== void 0)
          r = this._cachedBgBrightness < 135;
        else {
          const s = await this._getBrightness(a);
          this._cachedBgUrl = a, this._cachedBgBrightness = s, r = s < 135;
        }
      else
        r = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
    } else {
      const a = this._backgroundMode || "weather";
      if (a === "none")
        r = this._hass.themes ? this._hass.themes.darkMode === !0 : !1;
      else if (a === "weather")
        if (this._hass.states?.["sun.sun"]?.state === "below_horizon")
          r = !0;
        else {
          const u = this._getWeatherEntity().state || "sunny";
          r = !["sunny", "fog", "snow", "windy"].includes(u);
        }
      else if (a === "photo" || a === "collage") {
        let s = "";
        if (this._backgroundImages && this._backgroundImages[0] ? s = this._backgroundImages[0] : this._panelBgFile && (s = this._panelBgFile), s)
          if (this._cachedBgUrl === s && this._cachedBgBrightness !== void 0)
            r = this._cachedBgBrightness < 135;
          else {
            const d = await this._getBrightness(s);
            this._cachedBgUrl = s, this._cachedBgBrightness = d, r = d < 135;
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
    const u = this._dashboard.entries.some(
      (z) => z.entity_id && i?.states[z.entity_id]?.state !== r.states[z.entity_id]?.state
    ), f = this._temperatureSource === "auto" ? null : this._temperatureSource, g = f && i?.states[f]?.state !== r.states[f]?.state, _ = this._weatherSource !== "auto" ? this._weatherSource : Object.values(r.states).find((z) => z.entity_id.startsWith("weather."))?.entity_id, S = _ && (i?.states[_]?.state !== r.states[_]?.state || i?.states[_]?.attributes?.temperature !== r.states[_]?.attributes?.temperature || i?.states[_]?.attributes?.temperature_unit !== r.states[_]?.attributes?.temperature_unit), b = /* @__PURE__ */ new Set(), k = (z) => {
      !z || typeof z != "object" || (Array.isArray(z.sensors) && z.sensors.forEach((C) => b.add(C)), Object.values(z).forEach((C) => {
        C && typeof C == "object" && k(C);
      }));
    };
    k(this._ui?.modes);
    const I = !!i && [...b].some((z) => {
      const C = i.states[z], x = r.states[z];
      return C?.state !== x?.state || C?.attributes?.battery_level !== x?.attributes?.battery_level || C?.attributes?.battery_percentage !== x?.attributes?.battery_percentage;
    }), T = !!i && Object.values(r.states).some((z) => {
      const C = z.entity_id || "", x = z.attributes?.device_class === "battery" || /_battery$/i.test(C), m = i.states[C];
      return x && m?.state !== z.state;
    });
    (u || I || T || g || s || S || !i) && (this._renderEntries(), this._renderActivityLog(), i || (this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderAutomations(), this._renderNotifications(), this._activeAccessSection === "users" && this._renderUsers()));
  }
  get hass() {
    return this._hass;
  }
  /* ── Translation ─────────────────────────────────────────────────── */
  _t(r) {
    const i = this._getCurrentLangCode();
    return li[i]?.[r] || li.en[r] || r;
  }
  _format(r, i = {}) {
    return this._t(r).replace(/\{(\w+)\}/g, (a, s) => String(i[s] ?? `{${s}}`));
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
        const a = localStorage.getItem("argus_lang");
        a && a !== "auto" && (r = a);
      } catch {
      }
    if (!r) {
      const a = this._ui?.manual_lang || this._ui?.language;
      a && a !== "auto" && (r = a);
    }
    if (r || (r = this._hass?.language || "es"), r = String(r || "es").trim(), li[r]) return r;
    const i = r.split(/[-_]/)[0].toLowerCase();
    return li[i] ? i : i.startsWith("es") ? "es" : "en";
  }
  _getLocale() {
    const r = this._manualLang && this._manualLang !== "auto" ? this._manualLang : null, i = (() => {
      try {
        const d = localStorage.getItem("argus_lang");
        return d && d !== "auto" ? d : null;
      } catch {
        return null;
      }
    })(), a = this._ui?.manual_lang && this._ui.manual_lang !== "auto" ? this._ui.manual_lang : this._ui?.language && this._ui.language !== "auto" ? this._ui.language : null, s = r || i || a;
    return s && s !== "auto" ? { es: "es-ES", en: "en-US" }[s] || s : this._hass?.language || "es-ES";
  }
  _openLangModal() {
    const r = this.shadowRoot.getElementById("lang-modal");
    if (!r) return;
    const i = this.shadowRoot.getElementById("lang-grid"), a = this._manualLang || "auto";
    i && (i.innerHTML = si.map((u) => `
        <button class="lang-option${u.code === a ? " active" : ""}" data-lang="${u.code}">
          <span class="lang-flag">${u.flag}</span>
          <span>${u.code === "auto" ? this._t("use_ha_language") : u.label}</span>
        </button>`).join(""), i.querySelectorAll(".lang-option").forEach((u) => {
      u.addEventListener("click", () => {
        this._setLanguage(u.dataset.lang), this._closeLangModal();
      });
    }));
    const s = this.shadowRoot.getElementById("lang-modal-title");
    s && (s.textContent = `🌐 ${this._t("lang_select_title")}`);
    const d = r.querySelector(".lang-modal-card");
    d && (d.style.animation = "none", d.offsetWidth, d.style.animation = ""), r.classList.add("open");
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
      if (!li[r]) return;
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
    window._argusT = (a) => this._t(a), window._argusDashboardReadyBtn = this._t("edit_dashboard_done") || "✓ Listo", window._argusDashboardEditBtn = "✥ " + (this._t("edit_dashboard") || "Editar tablero"), window._argusDashboardResetBtn = this._t("reset_dashboard") || "Restablecer diseño", this._applyTranslations(), this._updateHeroProfileDisplay(), this._updateHeroClock?.(), this._instanceSignatures && this._instanceSignatures.clear(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderActivityLog(), this._renderAutomations(), this._renderNotifications(), this._renderUsers(), this._renderSosOutputs(), typeof this._renderHealthCenter == "function" && this._renderHealthCenter(), typeof this._renderStateSchedule == "function" && this._renderStateSchedule(), this._configureEmergencyCall(), this._updateHomeNameDisplay(), this._renderUploadedFiles();
    const r = this._manualLang || "auto", i = this.shadowRoot.getElementById("dropdown-lang-select");
    i && i.value !== r && (i.value = r);
    try {
      window.dispatchEvent(new CustomEvent("argus-lang-changed"));
    } catch {
    }
  }
  _applyTranslations() {
    const r = (h) => this._t(h), i = (h) => this.shadowRoot.getElementById(h), a = (h, v) => {
      const E = i(h);
      E && (E.textContent = v);
    }, s = this._manualLang || "auto", d = si.find((h) => h.code === s) || si[1], u = i("lang-pill-flag"), f = i("lang-pill-label");
    u && (u.textContent = d.flag), f && (f.textContent = s === "auto" ? this._t("use_ha_language") : d.label), a("p-hero-desc", r("hero_desc")), a("h-instances", r("instances")), a("h-modes", r("modes")), a("h-automations", r("automations")), a("p-linked-rules", r("linked_rules")), a("h-settings", r("settings")), a("h-activity-log", r("activity_log")), a("btn-refresh-history", r("history_refresh")), a("t-change-pin", r("change_pin")), a("l-current-pin-lbl", r("current_pin")), a("lnk-forgot-pin", r("forgot_pin")), a("pin-forgot-link", r("forgot_pin")), a("btn-save-pin", r("update_pin")), a("l-new-pin", r("new_pin")), a("l-confirm-pin", r("confirm_pin")), a("h-notifications", r("notifications_title")), a("p-notif-desc", r("notif_desc")), a("h-users", r("users_title")), a("p-admin-only", r("admin_only")), a("t-add-user", r("add_user")), a("l-username", r("username")), a("l-user-pin", r("user_pin")), a("s-is-admin", r("is_admin")), a("l-user-exp-type", r("user_exp_type")), a("l-user-exp-date", r("user_exp_date"));
    const g = i("opt-exp-indefinite");
    g && (g.textContent = r("exp_indefinite"));
    const _ = i("opt-exp-temporary");
    _ && (_.textContent = r("exp_temporary")), a("selector-select-all", r("select_all")), a("selector-deselect-all", r("deselect_all")), a("l-available", r("available")), a("l-selected-lbl", r("selected_lbl")), a("l-introduce-pin", `🔒 ${r("introduce_pin")}`), a("l-pin-modal-desc", r("pin_modal_desc")), ((h) => {
      const v = i(h);
      v && (v.placeholder = r("search_placeholder"));
    })("selector-search");
    const b = (h, v) => {
      const E = i(h);
      E && (E.textContent = r(v));
    };
    b("btn-new-auto", "create_ha"), b("btn-save-pin", "update_pin"), b("btn-save-notif", "save_notif"), b("btn-save-user", "save_user"), b("selector-close", "close"), b("selector-clear", "clear"), b("selector-accept", "accept"), b("pin-cancel", "cancel"), b("pin-confirm", "confirm"), b("btn-cancel-sos", "cancel"), b("sos-call-btn", "sos_call"), b("home-name-cancel", "cancel"), b("home-name-save", "save_btn");
    const k = i("lang-modal-close");
    k && (k.textContent = `✕ ${r("close")}`), a("lbl-home-name-hdr", r("home_name_lbl")), a("lbl-panel-bg-title", r("bg_panel_title")), a("lbl-hub-bg-title", r("bg_hub_title")), a("s-panel-bg-sound-lbl", r("bg_sound_opt")), a("s-hub-bg-sound-lbl", r("bg_sound_opt")), a("lbl-mas-ajustes", "🎨 " + r("lbl_aesthetic_custom")), a("edit-widgets-label", this._widgetEditing ? "✓ " + r("done") : `⚙️ ${this._t("edit_widgets") || "Config. Widgets"}`), a("lbl-temperature-source", r("temp_displayed")), a("lbl-weather-source", r("weather_source")), a("lbl-panel-bg-upload", r("lbl_load_file")), a("lbl-hub-bg-upload", r("lbl_load_file")), a("lbl-uploaded-files-title", r("lbl_uploaded_files")), a("btn-edit-home-name-standalone", r("edit_btn")), a("btn-save-personalization-standalone", r("save_btn")), a("btn-refresh-history", r("history_refresh")), a("btn-export-forensic", "📄 " + (r("export_history_title") || "Exportar")), a("btn-clear-log", r("clear_log_btn")), a("h-history-export-title", "📄 " + (r("export_history_title") || "Exportar Historial")), a("h-access-title", r("access_title")), a("p-access-desc", r("access_desc")), a("btn-access-users", `👥 ${r("users_title").replace(/^👥\s*/, "").replace(/\s(?:y|&|e)\s.*$/i, "")}`), a("btn-access-pin", `🔐 ${r("pin_master_title")}`), a("h-settings-pin", r("pin_master_title")), a("p-pin-remove-hint", r("pin_remove_hint")), a("h-backup-title", r("backup_title")), a("p-backup-desc", r("backup_desc")), a("btn-export-config", r("export_btn")), a("btn-reset-config", r("reset_btn")), a("btn-undo-reset", r("undo_reset_btn")), a("btn-import-trigger", r("import_btn")), a("github-title", r("github_title")), a("github-desc", r("github_desc")), a("github-action", `⭐ ${r("github_action")}`), a("sos-title-txt", r("sos_confirm_title")), a("sos-text-txt", r("sos_confirm_text")), a("sos-label", r("sos_slide")), a("system-diagnostics-txt", "ℹ️ " + (r("system_diagnostics") || "Diagnóstico y Resumen del Sistema")), a("home-name-modal-h3", r("home_name_modal_title")), a("p-home-name-modal-desc", r("home_name_modal_desc")), a("l-home-name-modal-label", r("home_name_label")), a("lang-modal-title", `🌐 ${r("lang_select_title")}`), a("sos-call-help", r("sos_call_help")), a("lbl-emergency-number", r("emergency_number_label")), a("emergency-number-help", r("emergency_help")), a("lbl-sos-actions", r("sos_actions")), a("btn-select-sos-outputs", r("sos_select_outputs")), a("sos-output-help", r("sos_outputs_help")), a("home-name-modal-desc", r("home_name_modal_desc")), a("pin-backspace", r("delete"));
    const I = i("bg-mode-select-standalone");
    if (I) {
      const h = I.value;
      I.innerHTML = `
        <option value="weather">${r("bg_weather")}</option>
        <option value="none">${r("bg_panel_none")}</option>
        <option value="photo">${r("bg_photo")}</option>
        <option value="collage">${r("bg_collage")}</option>
      `, h && (I.value = h), this._renderEntries();
    }
    const T = i("hub-bg-mode-select");
    if (T) {
      const h = T.value;
      T.innerHTML = `
        <option value="default">${r("bg_hub_default")}</option>
        <option value="image">${r("bg_image_opt")}</option>
      `, h && (T.value = h);
    }
    this._populateTemperatureSources(), this._populateWeatherSources();
    const z = i("current-pin-display");
    if (z) {
      const h = this._dashboard?.entries?.[0]?.pin_configured;
      if (h != null)
        z.textContent = r(h ? "pin_active_yes" : "pin_active_no");
      else {
        const v = z.textContent || "", E = v.includes("Sí") || v.includes("Yes") || v.includes("Sim") || v.includes("Sì") || v.includes("是") || v.includes("Да") || v.includes("Ja") || v.includes("Oui") || v.includes("Activo") || v.includes("Active");
        z.textContent = r(E ? "pin_active_yes" : "pin_active_no");
      }
    }
    const C = i("home-name-input");
    C && (C.placeholder = r("home_name_placeholder"));
    const x = i("panel-bg-url-input");
    x && (x.placeholder = r("url_placeholder"));
    const m = i("hub-bg-url-input");
    m && (m.placeholder = r("url_placeholder"));
    const w = this.shadowRoot;
    if (w) {
      const h = (E) => {
        const R = String(this._t(E) || "").trim(), $ = R.indexOf(" ");
        return $ > 0 && $ <= 3 ? R.substring($ + 1).trim() : R;
      };
      w.querySelectorAll(".entry").forEach((E) => {
        const R = E.querySelector(".btn-home span");
        R && (R.textContent = h("btn_home"));
        const $ = E.querySelector(".btn-away span");
        $ && ($.textContent = h("btn_away"));
        const V = E.querySelector(".btn-night span");
        V && (V.textContent = h("btn_night"));
        const Y = E.querySelector(".btn-disarm span, .argus-disarm-btn b");
        Y && (Y.textContent = h("btn_disarmed"));
        const F = E.querySelector(".btn-sos span");
        if (F) {
          const Q = E.querySelector('.btn-sos[data-action="stop-sos"]');
          F.textContent = Q ? this._t("sos_stop") : this._t("btn_sos");
        }
      });
      const v = w.getElementById("global-status");
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
    const i = this._dashboard.entries?.[0]?.pin_configured === !0, a = this._t(i ? "pin_active_yes" : "pin_active_no"), s = Array.isArray(this._users) ? this._users.filter((u) => u?.enabled !== !1).length : 0, d = s > 0 ? `${this._t("users_title")}: ${s}` : this._t("no_users");
    r.textContent = `${a} · ${d}`;
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
      !(document.fullscreenElement || document.webkitFullscreenElement) && !this._kioskLocked && this.classList.contains("fullscreen-active") && this._exitFullscreenView();
    }, document.addEventListener("fullscreenchange", this._onFsChange), document.addEventListener("webkitfullscreenchange", this._onFsChange), this._onEscape = (r) => {
      r.key === "Escape" && this.classList.contains("fullscreen-active") && this._exitFullscreenView();
    }, document.addEventListener("keydown", this._onEscape), this._shadowClickDelegated || (this._shadowClickDelegated = !0, this.shadowRoot?.addEventListener("click", async (r) => {
      const i = r.target;
      if (!i || typeof i.closest != "function") return;
      const a = i.closest("#btn-refresh-history, .btn-refresh-history");
      if (a) {
        r.preventDefault(), r.stopPropagation(), a.style.opacity = "0.5";
        const b = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
        await this._loadActivityTimeline(b), this._renderActivityLog(), a.style.opacity = "1", a.textContent = "✓ " + (this._t("history_refresh") || "Actualizado"), setTimeout(() => {
          a && (a.textContent = "🔄 " + (this._t("history_refresh") || "Actualizar").replace(/^🔄\s*/, ""));
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
        const a = this.shadowRoot.querySelector(".console-hud-time");
        if (a) {
          const s = this._formatTime(r);
          a.textContent !== s && (a.textContent = s);
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
    let a = !1, s = 0, d = 0;
    const u = () => Math.max(1, i.offsetWidth - r.offsetWidth - 12), f = (b) => {
      a = !0, s = b.clientX - d, r.setPointerCapture(b.pointerId), r.style.transition = "none", r.style.cursor = "grabbing", b.preventDefault();
    }, g = (b) => {
      if (!a) return;
      d = Math.max(0, Math.min(b.clientX - s, u())), r.style.left = 6 + d + "px";
      const k = d / u();
      i.style.background = "rgba(217,4,41," + (0.15 + k * 0.55) + ")", k >= 0.98 && S(!0);
    }, _ = (b) => {
      a && S(!1);
    }, S = (b) => {
      a = !1, r.style.transition = "all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)", r.style.cursor = "grab", b ? (this._triggerSOS(), d = 0, setTimeout(() => {
        r.style.left = "6px", i.style.background = "rgba(217,4,41,0.15)";
      }, 600)) : (d = 0, r.style.left = "6px", i.style.background = "rgba(217,4,41,0.15)");
    };
    r.addEventListener("pointerdown", f), r.addEventListener("pointermove", g), r.addEventListener("pointerup", _), r.addEventListener("pointercancel", _), this._sosBound = !0;
  }
  async _init() {
    this._mode = "disarmed", this._staticBound || (this._bindStatic(), this._staticBound = !0), await this._connect(), this._applyTranslations(), await this._load(), this._dashboard && (this._initWidgetGrid(), !this._postLoadBound && (this._postLoadBound = !0, this.shadowRoot.getElementById("history-export-modal")?.addEventListener("click", (r) => {
      r.target && r.target.id === "history-export-modal" && this._closeHistoryExportModal();
    }), this.shadowRoot.getElementById("btn-export-config")?.addEventListener("click", () => this._exportConfig()), this.shadowRoot.getElementById("btn-import-trigger")?.addEventListener("click", () => this.shadowRoot.getElementById("import-config-file").click()), this.shadowRoot.getElementById("import-config-file")?.addEventListener("change", (r) => this._importConfig(r)), this.shadowRoot.getElementById("btn-reset-config")?.addEventListener("click", () => this._resetConfig()), this.shadowRoot.getElementById("btn-undo-reset")?.addEventListener("click", () => this._undoResetConfig()), this.shadowRoot.getElementById("btn-save-personalization-standalone")?.addEventListener("click", () => this._savePersonalization()), this.shadowRoot.getElementById("btn-select-sos-outputs")?.addEventListener("click", () => this._openModal("panic")), this._configureEmergencyCall()));
  }
  _openHistoryExportModal() {
    const r = this.shadowRoot.getElementById("history-export-modal");
    if (!r) return;
    const i = /* @__PURE__ */ new Date(), a = /* @__PURE__ */ new Date();
    a.setDate(i.getDate() - 30);
    const s = this.shadowRoot.getElementById("export-history-from"), d = this.shadowRoot.getElementById("export-history-to");
    s && !s.value && (s.value = a.toISOString().split("T")[0]), d && !d.value && (d.value = i.toISOString().split("T")[0]), r.classList.add("open"), r.setAttribute("aria-hidden", "false");
  }
  _closeHistoryExportModal() {
    const r = this.shadowRoot.getElementById("history-export-modal");
    r && (r.classList.remove("open"), r.setAttribute("aria-hidden", "true"));
  }
  _getFilteredHistory() {
    const r = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : Array.isArray(this._ui?.audit_log) ? this._ui.audit_log : [], i = this.shadowRoot.getElementById("export-history-from"), a = this.shadowRoot.getElementById("export-history-to"), s = i?.value ? /* @__PURE__ */ new Date(i.value + "T00:00:00") : null, d = a?.value ? /* @__PURE__ */ new Date(a.value + "T23:59:59") : null;
    return r.filter((u) => {
      if (!u || typeof u != "object") return !1;
      if (!u.ts) return !0;
      const f = new Date(u.ts);
      return !(s && f < s || d && f > d);
    });
  }
  _exportHistoryPrintPdf() {
    this._closeHistoryExportModal();
    const r = this._getFilteredHistory(), i = this._homeName || "Argus Home Hub", a = (/* @__PURE__ */ new Date()).toLocaleString(this._getLocale()), s = this.shadowRoot.getElementById("export-history-from")?.value || "Inicio", d = this.shadowRoot.getElementById("export-history-to")?.value || "Hoy", u = r.map((_, S) => {
      const b = _.ts ? new Date(_.ts) : null, k = b && !isNaN(b.getTime()) ? b.toLocaleString(this._getLocale()) : "—", I = String(_.action || ""), T = this._localizeActivityDetail(I, _.detail), z = _.user || _.actor || "Argus";
      return `
        <tr style="border-bottom: 1px solid #e2e8f0; font-size: 11px;">
          <td style="padding: 6px 8px; color: #64748b; font-family: monospace;">${S + 1}</td>
          <td style="padding: 6px 8px; white-space: nowrap; font-weight: 600;">${this._escapeHtml(k)}</td>
          <td style="padding: 6px 8px; font-weight: 700; color: #0284c7;">${this._escapeHtml(I)}</td>
          <td style="padding: 6px 8px;">${this._escapeHtml(T)}</td>
          <td style="padding: 6px 8px; font-weight: 600;">${this._escapeHtml(z)}</td>
        </tr>
      `;
    }).join(""), f = `
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
            <div><strong>Rango:</strong> ${this._escapeHtml(s)} al ${this._escapeHtml(d)}</div>
            <div><strong>Generado:</strong> ${this._escapeHtml(a)}</div>
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
            ${u || '<tr><td colspan="5" style="text-align:center;padding:24px;color:#888;">No hay registros en el rango seleccionado</td></tr>'}
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
    `, g = window.open("", "_blank", "width=900,height=700");
    g && (g.document.open(), g.document.write(f), g.document.close());
  }
  _exportHistoryText() {
    this._closeHistoryExportModal();
    const r = this._getFilteredHistory(), i = this._homeName || "Argus Home Hub", a = (/* @__PURE__ */ new Date()).toLocaleString(this._getLocale()), s = this.shadowRoot.getElementById("export-history-from")?.value || "Inicio", d = this.shadowRoot.getElementById("export-history-to")?.value || "Hoy";
    let u = `================================================================================
`;
    u += `🛡️  ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD
`, u += `🏡  ${i}
`, u += `📅  Rango: ${s} al ${d}
`, u += `⏰  Generado: ${a}
`, u += `📊  Total eventos: ${r.length}
`, u += `================================================================================

`, r.forEach((S, b) => {
      const k = S.ts ? new Date(S.ts) : null, I = k && !isNaN(k.getTime()) ? k.toLocaleString(this._getLocale()) : "—", T = String(S.action || ""), z = this._localizeActivityDetail(T, S.detail), C = S.user || S.actor || "Argus";
      u += `[${String(b + 1).padStart(3, "0")}] ${I} | [${T}] ${z} | 👤 ${C}
`;
    }), u += `
================================================================================
`, u += `Argus Home Hub - Fin del reporte
`;
    const f = new Blob([u], { type: "text/plain;charset=utf-8" }), g = URL.createObjectURL(f), _ = document.createElement("a");
    _.href = g, _.download = `argus_historial_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.txt`, _.click(), setTimeout(() => URL.revokeObjectURL(g), 5e3);
  }
  async _clearHistory() {
    const r = this._dashboard?.entries?.[0]?.pin_configured === !0, i = this._activeProfile?.name || this._hass?.user?.name || "Administrador", a = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, s = async () => {
      try {
        return await this._send("argus/clear_audit_log", {
          ...a ? { entry_id: a } : {},
          user_name: i
        }), await this._loadActivityTimeline(a), this._renderActivityLog(), !0;
      } catch (d) {
        return alert(this._format("generic_error", { error: d.message })), !1;
      }
    };
    if (r)
      this._showPinModal(async (d) => {
        try {
          const u = await this._send("argus/validate_master_pin", {
            pin: d,
            ...a ? { entry_id: a } : {}
          });
          if (u && u.valid === !1)
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
        const i = r || this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id, a = { limit: 100 };
        i && (a.entry_id = i);
        const s = await this._send("argus/get_forensic_timeline", a), d = Array.isArray(s?.timeline) ? s.timeline.filter((u) => u && typeof u == "object" && !Array.isArray(u)) : [];
        this._forensicTimeline = d, this._activityTimelineError = null, this._ui.audit_log = d, this._renderActivityLog();
      } catch (i) {
        console.warn("Argus activity timeline unavailable:", i), this._activityTimelineError = i?.message || String(i), this._forensicTimeline = null, Array.isArray(this._ui.audit_log) || (this._ui.audit_log = []), this._renderActivityLog();
      }
  }
  _generateHistoryPDF(r, i) {
    const a = i.homeName || "Mi Casa", s = i.generatedAt || (/* @__PURE__ */ new Date()).toLocaleString(), d = r.length, u = (h) => String(h || "").replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E\xA0-\xFF]/g, " "), f = 612, g = 792, _ = 36, S = 40, b = f - _ * 2, k = 22, I = Math.max(1, Math.ceil(r.length / k)), T = [];
    for (let h = 0; h < I; h++)
      T.push(5 + h * 2);
    const z = [];
    for (let h = 0; h < I; h++) {
      const v = r.slice(h * k, (h + 1) * k);
      let E = "";
      E += `q 0.05 0.08 0.15 rg 0 ${g - 65} ${f} 65 re f Q
`, E += `BT /F2 14 Tf 1 1 1 rg ${_} ${g - 32} Td (ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD) Tj ET
`, E += `BT /F1 8.5 Tf 0.7 0.8 0.9 rg ${_} ${g - 48} Td (${u(`Hogar: ${a}   |   Generado: ${s}   |   Total Eventos: ${d}`)}) Tj ET
`;
      const R = g - 80;
      E += `q 0.12 0.18 0.28 rg ${_} ${R - 18} ${b} 20 re f Q
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${_ + 6} ${R - 13} Td (FECHA Y HORA) Tj ET
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${_ + 130} ${R - 13} Td (ACCION / EVENTO) Tj ET
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${_ + 255} ${R - 13} Td (ORIGEN / USUARIO) Tj ET
`, E += `BT /F2 8.5 Tf 1 1 1 rg ${_ + 365} ${R - 13} Td (DETALLE) Tj ET
`;
      let $ = R - 38;
      for (let V = 0; V < v.length; V++) {
        const Y = v[V];
        V % 2 === 0 && (E += `q 0.96 0.97 0.98 rg ${_} ${$ - 4} ${b} 20 re f Q
`), E += `q 0.88 0.88 0.88 RG 0.5 w ${_} ${$ - 4} m ${_ + b} ${$ - 4} l S Q
`;
        const F = u(Y.ts || "-"), Q = u(Y.action || "-"), ee = u(Y.user || "Argus"), se = u(Y.detail || "-");
        E += `BT /F1 8 Tf 0.15 0.15 0.15 rg ${_ + 6} ${$ + 2} Td (${F.slice(0, 24)}) Tj ET
`, E += `BT /F2 8 Tf 0.1 0.2 0.4 rg ${_ + 130} ${$ + 2} Td (${Q.slice(0, 22)}) Tj ET
`, E += `BT /F1 8 Tf 0.2 0.2 0.2 rg ${_ + 255} ${$ + 2} Td (${ee.slice(0, 20)}) Tj ET
`, E += `BT /F1 7.5 Tf 0.3 0.3 0.3 rg ${_ + 365} ${$ + 2} Td (${se.slice(0, 35)}) Tj ET
`, $ -= 22;
      }
      E += `q 0.8 0.8 0.8 RG 0.5 w ${_} ${S} m ${_ + b} ${S} l S Q
`, E += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg ${_} ${S - 12} Td (Argus Home Hub Security System - Documento Oficial de Auditoria) Tj ET
`, E += `BT /F1 7.5 Tf 0.5 0.5 0.5 rg ${f - _ - 60} ${S - 12} Td (${u(`Pagina ${h + 1} de ${I}`)}) Tj ET
`, z.push(E);
    }
    const C = [], x = [], m = (h) => {
      x.push(C.join(`
`).length + (C.length > 0 ? 1 : 0)), C.push(h);
    };
    C.push("%PDF-1.4"), m(`1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj`), m(`2 0 obj
<< /Type /Pages /Kids [${T.map((h) => `${h} 0 R`).join(" ")}] /Count ${I} /MediaBox [0 0 ${f} ${g}] >>
endobj`), m(`3 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj`), m(`4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj`);
    for (let h = 0; h < I; h++) {
      const v = T[h], E = v + 1, R = z[h], $ = unescape(encodeURIComponent(R)).length;
      m(`${v} 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${E} 0 R >>
endobj`), m(`${E} 0 obj
<< /Length ${$} >>
stream
${R}endstream
endobj`);
    }
    const w = C.join(`
`).length + 1;
    C.push("xref"), C.push(`0 ${x.length + 1}`), C.push("0000000000 65535 f ");
    for (let h = 0; h < x.length; h++)
      C.push(String(x[h]).padStart(10, "0") + " 00000 n ");
    return C.push("trailer"), C.push(`<< /Size ${x.length + 1} /Root 1 0 R >>`), C.push("startxref"), C.push(String(w)), C.push("%%EOF"), C.join(`
`);
  }
  _exportHistoryPDF() {
    const i = (Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : this._ui?.audit_log || []).map((k) => {
      const I = String(k.action || ""), T = String(k.detail || ""), z = this._localizeActivityDetail ? this._localizeActivityDetail(I, T) : T, C = String(k.user || k.actor || "Argus");
      let x = "";
      if (k.ts)
        try {
          x = new Date(k.ts).toLocaleString(this._getLocale());
        } catch {
          x = String(k.ts);
        }
      return { ts: x, action: I, user: C, detail: z };
    }), a = this._homeName || "Mi Casa", s = /* @__PURE__ */ new Date(), d = s.toISOString().slice(0, 10), u = s.toTimeString().slice(0, 5).replace(":", "-"), f = s.toLocaleString(this._getLocale()), g = this._generateHistoryPDF(i, { homeName: a, generatedAt: f }), _ = new Blob([g], { type: "application/pdf" }), S = URL.createObjectURL(_), b = document.createElement("a");
    b.href = S, b.download = `argus_historial_${d}_${u}.pdf`, b.click(), setTimeout(() => URL.revokeObjectURL(S), 5e3);
  }
  _exportForensicTimeline() {
    this._closeHistoryExportModal();
    const r = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : this._ui?.audit_log || [], i = new Blob([JSON.stringify({ format: "argus-forensic-timeline", generated_at: (/* @__PURE__ */ new Date()).toISOString(), events: r }, null, 2)], { type: "application/json" }), a = URL.createObjectURL(i), s = document.createElement("a");
    s.href = a, s.download = `argus_forensic_${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.json`, s.click(), setTimeout(() => URL.revokeObjectURL(a), 5e3);
  }
  _backupText(r) {
    const i = this._getCurrentLangCode(), a = {
      es: { password: "Contraseña de cifrado (mínimo 8 caracteres)", weak: "La contraseña debe tener al menos 8 caracteres.", decrypt: "Contraseña de la copia cifrada", bad: "No se pudo descifrar la copia. Verifica la contraseña." },
      en: { password: "Encryption password (minimum 8 characters)", weak: "The password must be at least 8 characters.", decrypt: "Encrypted backup password", bad: "The backup could not be decrypted. Check the password." }
    };
    return (a[i] || a.en)[r];
  }
  _bytesToBase64(r) {
    let i = "";
    return r.forEach((a) => {
      i += String.fromCharCode(a);
    }), btoa(i);
  }
  _base64ToBytes(r) {
    return Uint8Array.from(atob(r), (i) => i.charCodeAt(0));
  }
  async _backupKey(r, i, a) {
    const s = await crypto.subtle.importKey("raw", new TextEncoder().encode(r), "PBKDF2", !1, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: i, iterations: 25e4, hash: "SHA-256" },
      s,
      { name: "AES-GCM", length: 256 },
      !1,
      a
    );
  }
  _requestBackupPassword(r) {
    return new Promise((i) => {
      const a = document.createElement("div");
      a.className = "modal-back open", a.setAttribute("role", "dialog"), a.setAttribute("aria-modal", "true");
      const s = r === "decrypt" ? this._backupText("decrypt") : this._backupText("password");
      a.innerHTML = `<div class="modal" style="max-width:430px"><div class="modal-head"><h3>${this._escapeHtml(s)}</h3></div><input type="password" class="glass-control" autocomplete="new-password" style="font-size:17px"><div style="display:flex;gap:9px;justify-content:flex-end;margin-top:14px"><button class="ghost" data-secret-cancel>✕</button><button class="primary" data-secret-ok>✓</button></div></div>`, this.shadowRoot.appendChild(a);
      const d = a.querySelector("input"), u = (f) => {
        a.remove(), i(f);
      };
      a.querySelector("[data-secret-cancel]").addEventListener("click", () => u(null)), a.querySelector("[data-secret-ok]").addEventListener("click", () => u(d.value)), d.addEventListener("keydown", (f) => {
        f.key === "Enter" && u(d.value), f.key === "Escape" && u(null);
      }), requestAnimationFrame(() => d.focus());
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
      const a = (await this._send("argus/export_config"))?.config;
      if (typeof a != "object" || a === null) throw new Error(this._t("invalid_config"));
      delete a.runtime;
      const s = crypto.getRandomValues(new Uint8Array(16)), d = crypto.getRandomValues(new Uint8Array(12)), u = await this._backupKey(r, s, ["encrypt"]), f = await crypto.subtle.encrypt({ name: "AES-GCM", iv: d }, u, new TextEncoder().encode(JSON.stringify(a))), g = {
        format: "argus-encrypted-backup",
        version: 1,
        kdf: "PBKDF2-SHA256",
        iterations: 25e4,
        cipher: "AES-256-GCM",
        salt: this._bytesToBase64(s),
        iv: this._bytesToBase64(d),
        data: this._bytesToBase64(new Uint8Array(f))
      }, _ = new Blob([JSON.stringify(g)], { type: "application/json" }), S = URL.createObjectURL(_), b = document.createElement("a");
      b.href = S, b.download = `argus_backup_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.argus`, b.click(), setTimeout(() => URL.revokeObjectURL(S), 5e3);
    } catch (r) {
      alert(this._format("export_error", { error: r.message }));
    }
  }
  _importConfig(r) {
    const i = r.target.files[0];
    if (!i) return;
    r.target.value = "";
    const a = new FileReader();
    a.onload = async (s) => {
      try {
        let d = JSON.parse(s.target.result);
        if (d?.format === "argus-encrypted-backup") {
          const u = await this._requestBackupPassword("decrypt");
          if (u === null) return;
          try {
            const f = this._base64ToBytes(d.salt), g = this._base64ToBytes(d.iv), _ = await this._backupKey(u, f, ["decrypt"]), S = await crypto.subtle.decrypt({ name: "AES-GCM", iv: g }, _, this._base64ToBytes(d.data));
            d = JSON.parse(new TextDecoder().decode(S));
          } catch {
            throw new Error(this._backupText("bad"));
          }
        }
        if (typeof d != "object" || d === null)
          throw new Error(this._t("invalid_config"));
        await this._send("argus/restore_config", { config: d }), alert(this._t("import_success")), window.location.reload();
      } catch (d) {
        alert(this._format("import_error", { error: d.message }));
      }
    }, a.onerror = () => alert(this._t("file_read_error")), a.readAsText(i);
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
    const r = (d) => this.shadowRoot.getElementById(d);
    r("selector-close").addEventListener("click", () => this._closeModal()), r("selector-accept").addEventListener("click", () => this._acceptSelection()), r("selector-clear").addEventListener("click", () => {
      this._selected = [], this._renderSelector(!0);
    }), r("selector-search").addEventListener("input", () => {
      clearTimeout(this._searchDebounce), this._searchDebounce = setTimeout(() => this._renderSelector(!0), 120);
    }), r("selector-modal").addEventListener("click", (d) => {
      d.target.id === "selector-modal" && this._closeModal();
    }), r("selector-select-all").addEventListener("click", () => this._selectAll()), r("selector-deselect-all").addEventListener("click", () => {
      this._selected = [], this._renderSelector(!0);
    }), r("btn-new-auto").addEventListener("click", () => {
      history.pushState(null, "", "/config/automation/edit/new"), window.dispatchEvent(new CustomEvent("location-changed"));
    }), r("btn-access-users")?.addEventListener("click", () => this._toggleAccessSection("users")), r("btn-access-pin")?.addEventListener("click", () => this._toggleAccessSection("pin")), r("btn-save-pin").addEventListener("click", () => this._savePin()), r("lnk-forgot-pin")?.addEventListener("click", (d) => {
      d.preventDefault(), this._handleForgotPin();
    }), r("pin-forgot-link")?.addEventListener("click", (d) => {
      d.preventDefault(), this._handleForgotPin();
    }), r("pin-close").addEventListener("click", () => this._closePinModal()), r("pin-cancel").addEventListener("click", () => this._closePinModal()), r("pin-modal").addEventListener("click", (d) => {
      d.target.id === "pin-modal" && this._closePinModal();
    }), r("pin-confirm").addEventListener("click", () => this._submitPin()), r("pin-input").addEventListener("keydown", (d) => {
      d.key === "Enter" && this._submitPin();
    }), this.shadowRoot.querySelectorAll("[data-pin-digit]").forEach(
      (d) => d.addEventListener("click", () => this._appendPinDigit(d.dataset.pinDigit))
    ), r("pin-backspace").addEventListener("click", () => this._backspacePin()), r("btn-add-notif")?.addEventListener("click", () => this._addNotifTarget()), r("btn-save-notif")?.addEventListener("click", () => this._saveNotifications()), r("btn-edit-home-name-standalone")?.addEventListener("click", () => this._editHomeName()), r("home-name-modal-close").addEventListener("click", () => this._closeHomeNameModal()), r("home-name-cancel").addEventListener("click", () => this._closeHomeNameModal()), r("home-name-modal").addEventListener("click", (d) => {
      d.target.id === "home-name-modal" && this._closeHomeNameModal();
    }), r("home-name-save").addEventListener("click", () => this._saveHomeName()), r("home-name-input").addEventListener("keydown", (d) => {
      d.key === "Enter" && this._saveHomeName();
    }), r("btn-edit-widgets")?.addEventListener("click", () => this._toggleWidgetEditing());
    const i = r("lbl-aesthetic-custom"), a = r("personalize-workspace");
    i && a && !i._boundToggle && (i._boundToggle = !0, i.addEventListener("click", () => {
      const d = a.classList.toggle("collapsed"), u = r("personalize-chevron");
      u && (u.textContent = d ? "▼" : "▲");
    })), r("btn-lang-picker")?.addEventListener("click", () => this._openLangModal()), r("lang-modal-close")?.addEventListener("click", () => this._closeLangModal()), r("lang-modal")?.addEventListener("click", (d) => {
      d.target.id === "lang-modal" && this._closeLangModal();
    });
    const s = () => {
      r("sos-modal")?.classList.remove("open"), this._sosEntryIdx = null, r("sos-thumb") && (r("sos-thumb").style.left = "6px", r("sos-thumb").closest(".ios-slider-track").style.background = "rgba(217,4,41,0.15)");
    };
    r("btn-cancel-sos")?.addEventListener("click", s), r("sos-close-x")?.addEventListener("click", s), r("sos-modal")?.addEventListener("click", (d) => {
      d.target.id === "sos-modal" && s();
    }), r("bg-mode-select-standalone")?.addEventListener("change", () => this._updateBgFieldsVisibility()), r("hub-bg-mode-select")?.addEventListener("change", () => this._updateBgFieldsVisibility()), r("panel-bg-file-input")?.addEventListener("change", (d) => this._handlePanelBgFile(d)), r("hub-bg-file-input")?.addEventListener("change", (d) => this._handleHubBgFile(d));
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
    } catch (Y) {
      console.error("Argus bootstrap load failed:", Y);
      return;
    }
    this._bootstrap = r;
    const i = r.user_theme || { background_mode: "default", background_file: "" };
    this._currentUserTheme = i, i.background_mode !== "default" && i.background_file ? (this._backgroundMode = i.background_mode, this._panelBgFile = i.background_file, this._backgroundImages = [i.background_file]) : i.background_mode !== "default" && i.background_mode ? (this._backgroundMode = i.background_mode, this._panelBgFile = "", this._backgroundImages = []) : (this._backgroundMode = r.background_mode || "none", this._panelBgFile = "", this._backgroundImages = r.background_images || []), r.weather_source && (this._weatherSource = r.weather_source), r.temperature_source && (this._temperatureSource = r.temperature_source);
    try {
      const Y = localStorage.getItem("argus_lang");
      Y && Y !== "auto" ? this._manualLang = Y : r.language && r.language !== "auto" && si.some((F) => F.code === r.language) ? this._manualLang = r.language : this._manualLang = null;
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
    const a = this.hasAttribute("compact") || this.classList.contains("argus-compact") || !!this._cardConfig?.compact;
    if (!r.has_active_session || !this._profileSelectedThisMount)
      if (a) {
        this._profileSelectedThisMount = !0;
        const Y = (r.users || []).find((F) => F.is_own_profile) || (r.users || [])[0];
        if (Y && !r.has_active_session)
          try {
            await this._send("argus/select_profile", { argus_user_id: Y.id });
          } catch {
          }
      } else {
        this._loadState = "profile_selection", this._renderLoginScreen(r);
        return;
      }
    this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-pin-prompt").forEach((Y) => Y.remove());
    let s;
    try {
      s = await this._send("argus/dashboard");
    } catch (Y) {
      if (a) {
        const F = this._config?.entity || "alarm_control_panel.argus", Q = this._hass?.states[F];
        s = {
          entries: [{
            entity_id: F,
            name: Q?.attributes?.friendly_name || "Argus Security",
            state: Q?.state || "unavailable",
            pin_configured: !0
          }]
        };
      } else {
        if (Y.message.includes("permission") || Y.message.includes("session") || Y.message.includes("unauthorized")) {
          this._renderLoginScreen(r);
          return;
        }
        console.error("Argus dashboard load failed:", Y);
        return;
      }
    }
    if (a && s?.entries?.length) {
      const Y = this._config?.entity || "alarm_control_panel.argus";
      let F = s.entries.find((Q) => Q.entity_id === Y);
      F || (F = s.entries[0]), s.entries = [F];
    }
    this._dashboard = s, this._available = s.available_entities || [], this._ui = s.ui || { modes: {}, dashboard: {} }, this._notifTargets = s.ui?.notif_targets || [], this._users = Array.isArray(s.ui?.users) ? s.ui.users.filter((Y) => Y && typeof Y == "object" && !Array.isArray(Y)) : [], this._homeName = s.ui?.home_name || "", this._emergencyNumber = s.ui?.emergency_number || "911", this._loadState = "dashboard", this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready"), this._currentProfile = s.current_profile || null;
    const d = this.shadowRoot.getElementById("bootstrap-overlay");
    d && (this._currentProfile && !this._welcomeShownThisMount ? d.style.display = "flex" : d.style.display = "none"), await this._loadActivityTimeline(s.entry_id), this._panicOutputs = s.ui?.panic_outputs || [];
    const u = this._users.find((Y) => Y.id === this._currentProfile?.id) || {};
    this._backgroundMode = u.background_mode || s.ui?.background_mode || "weather", this._backgroundImages = u.background_images || s.ui?.background_images || [], this._temperatureSource = s.ui?.temperature_source || "auto", this._weatherSource = s.ui?.weather_source || "auto", this._clockFormat = s.ui?.clock_format || "auto", this._panelBgFile = u.panel_bg_file !== void 0 ? u.panel_bg_file : s.ui?.panel_bg_file || "", this._panelBgSound = !!(u.panel_bg_sound !== void 0 ? u.panel_bg_sound : s.ui?.panel_bg_sound);
    const f = u.hub_bg_mode || s.ui?.hub_bg_mode || "none";
    this._hubBgMode = f === "none" || f === "default" ? "default" : f, this._hubBgFile = u.hub_bg_file !== void 0 ? u.hub_bg_file : s.ui?.hub_bg_file || "", this._hubBgSound = !!(u.hub_bg_sound !== void 0 ? u.hub_bg_sound : s.ui?.hub_bg_sound), this._updateTheme(), this._updateHomeNameDisplay(), this._updateProfileBadge(), this._populateTemperatureSources();
    const g = this.shadowRoot.getElementById("temp-source-select-standalone");
    g && (g.value = this._temperatureSource || "auto", g.dataset.bound || (g.dataset.bound = "1", g.addEventListener("change", () => this._savePersonalization()))), this._populateWeatherSources();
    const _ = this.shadowRoot.getElementById("weather-source-select");
    _ && (_.value = this._weatherSource || "auto", _.dataset.bound || (_.dataset.bound = "1", _.addEventListener("change", () => this._savePersonalization())));
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
    const I = this.shadowRoot.getElementById("hub-bg-mode-select");
    I && (I.innerHTML = `
        <option value="default">${this._t("bg_hub_default")}</option>
        <option value="image">${this._t("bg_image_opt")}</option>
        <option value="weather">Clima animado</option>
      `, I.value = this._hubBgMode || "default");
    const T = this.shadowRoot.getElementById("panel-bg-url-input");
    T && (T.value = this._panelBgFile && !this._panelBgFile.startsWith("data:") ? this._panelBgFile : "");
    const z = this.shadowRoot.getElementById("chk-panel-bg-sound");
    z && (z.checked = this._panelBgSound);
    const C = this.shadowRoot.getElementById("hub-bg-url-input");
    C && (C.value = this._hubBgFile && !this._hubBgFile.startsWith("data:") ? this._hubBgFile : "");
    const x = this.shadowRoot.getElementById("chk-hub-bg-sound");
    x && (x.checked = this._hubBgSound), this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._isAdmin = s.current_profile?.role === "admin", this._permissions = s.current_profile?.permissions || {};
    const m = s.entries?.[0]?.entity_id;
    if (m ? ((!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = m), this._loadRetryTimeout && (clearTimeout(this._loadRetryTimeout), this._loadRetryTimeout = null)) : (!this._modeEntryId || this._modeEntryId === "default") && (this._modeEntryId = null), this._isAdmin)
      try {
        const Y = await this._send("argus/get_ha_users");
        this._haUsersList = Y?.ha_users || [];
      } catch (Y) {
        console.warn("Could not fetch HA users:", Y);
      }
    const w = s.entries?.[0]?.pin_configured === !0, h = this.shadowRoot.getElementById("current-pin-display"), v = this.shadowRoot.getElementById("group-current-pin");
    h && (h.textContent = w ? this._t("pin_active_yes") : this._t("pin_active_no")), v && (w ? v.classList.remove("collapsed") : v.classList.add("collapsed"));
    const E = this.shadowRoot.getElementById("lnk-forgot-pin");
    E && (E.style.display = w ? "inline" : "none");
    const R = this.shadowRoot.getElementById("pin-forgot-link");
    R && (R.style.display = w ? "inline" : "none"), [
      ["instances", () => this._renderEntries()],
      ["activity log", () => this._renderActivityLog()],
      ["mode tabs", () => this._renderModeTabs()],
      ["mode view", () => this._renderModeView()],
      ["automations", () => this._renderAutomations()],
      ["notifications", () => this._renderNotifications()],
      ["users", () => this._renderUsers()]
    ].forEach(([Y, F]) => {
      try {
        F();
      } catch (Q) {
        console.error(`Argus ${Y} render failed:`, Q);
      }
    }), this._loadUploadedFiles(), this._refreshLocalizedUi();
    const $ = s.entries && s.entries.length > 0, V = $ && s.entries[0].entity_id;
    $ && !V ? this._loadRetryTimeout || (this._loadRetryTimeout = setTimeout(() => {
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
    const a = i?.attributes || {}, s = [a.battery_level, a.battery, a.battery_percentage].find((_) => _ != null && _ !== "" && Number.isFinite(Number(_)));
    let d = s === void 0 ? null : Math.max(0, Math.min(100, Math.round(Number(s))));
    const u = String(a.power_source || a.power_supply || a.power_type || "").toLowerCase(), f = a.mains_powered === !0 || a.is_mains_powered === !0 || a.wired === !0 || /(?:mains|ac|wired|line|external|toma|corriente)/.test(u), g = r.split(".")[0];
    if (["switch", "light", "fan", "script", "input_boolean", "siren"].includes(g) && d === null)
      return { battery: null, mains: !0 };
    if (d === null && this._hass?.states) {
      let _ = null;
      const S = r.split(".").slice(1).join(".").toLowerCase(), b = S.replace(/_(contact|door|window|motion|occupancy|opening|sensor|iaszone|ias_zone)$/i, ""), k = [
        `sensor.${S}_battery`,
        `sensor.${b}_battery`,
        `sensor.${S}_battery_level`,
        `sensor.${b}_battery_level`,
        `sensor.${S}_battery_percentage`,
        `sensor.${b}_battery_percentage`
      ];
      for (const I of k) {
        const T = this._hass.states[I];
        if (T && T.state !== "unavailable" && T.state !== "unknown" && Number.isFinite(Number(T.state))) {
          _ = T.state;
          break;
        }
      }
      if (_ === null) {
        const I = (this._available || []).find((T) => T.entity_id === r);
        if (I && I.device_id) {
          const T = (this._available || []).find(
            (z) => z.device_id === I.device_id && z.entity_id !== r && (this._hass?.states?.[z.entity_id]?.attributes?.device_class === "battery" || /_battery(?:_level|_percent(?:age)?)?$/i.test(z.entity_id))
          );
          if (T) {
            const z = this._hass?.states?.[T.entity_id];
            z && z.state !== "unavailable" && z.state !== "unknown" && Number.isFinite(Number(z.state)) && (_ = z.state);
          }
        }
      }
      if (_ !== null) {
        const I = Number(_);
        Number.isFinite(I) && (d = Math.max(0, Math.min(100, Math.round(I))));
      }
    }
    return { battery: d, mains: f };
  }
  _deviceFacts(r, i, a = !0) {
    const s = i?.state || "unknown", d = ["on", "unlocked", "open", "recording", "active", "motion"].includes(s), u = { on: this._t("status_open"), off: this._t("status_closed"), locked: this._t("status_closed"), unlocked: this._t("status_open"), idle: this._t("status_idle"), recording: this._t("status_recording"), home: this._t("status_home"), not_home: this._t("status_away") }, f = r.split(".")[0], g = ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(f), _ = this._getDevicePower(r, i), S = [];
    if (a && S.push({ text: g ? s.toUpperCase() : u[s] || s, className: g ? "" : d ? "status-open" : "status-closed" }), _.mains && S.push({ text: "🔌 AC", className: "power-mains" }), _.battery !== null) {
      const b = _.battery === 0, k = _.battery <= 20 && !b, I = b ? "🔋 ❌" : `🔋 ${_.battery}%`, T = b ? "dead" : k ? "low" : "";
      S.push({ text: I, className: `pill-power ${T}` });
    }
    return S;
  }
  _renderBatteryAlerts(r) {
    if (!this._hass?.states) return "";
    let i = Array.isArray(r) && r.length ? r : [];
    if (!i.length) {
      const u = this._ui?.modes || {}, f = /* @__PURE__ */ new Set();
      ["away", "home", "night"].forEach((g) => {
        const _ = u[g]?.sensors;
        Array.isArray(_) && _.forEach((S) => f.add(S));
      }), this._ui?.modes?.__by_entity__ && Object.values(this._ui.modes.__by_entity__).forEach((g) => {
        ["away", "home", "night"].forEach((_) => {
          const S = g[_]?.sensors;
          Array.isArray(S) && S.forEach((b) => f.add(b));
        });
      }), i = Array.from(f);
    }
    if (!i.length) return "";
    const a = [];
    if (i.forEach((u) => {
      const f = this._hass?.states[u];
      if (!f) return;
      const g = this._getDevicePower(u, f);
      if (g.battery !== null && Number.isFinite(g.battery) && g.battery <= 20 && !g.mains) {
        const _ = f.attributes?.friendly_name || u.split(".")[1] || u;
        a.push({ name: _, level: g.battery });
      }
    }), !a.length) return "";
    const s = (u) => this._t(u);
    return `<div class="battery-alerts-container" style="display:flex; flex-direction:column; align-items:center; gap:6px; width:100%; max-width:90%; margin:0 auto 10px; pointer-events:none;">${a.map((u) => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${s("battery_low")}: ${this._escapeHtml(u.name)} (${u.level}%)</div>`).join("")}</div>`;
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
  _renderPremiumStatusIcon(r, i, a = "0") {
    const s = i ? "triggered" : { armed_home: "home", armed_away: "away", armed_night: "night", armed_vacation: "vacation", disarmed: "disarm" }[r] || "disarm", d = { home: "#ffb700", away: "#ff3344", night: "#3898ff", vacation: "#d69cff", disarm: "#00ff8c", triggered: "#ff1744" }[s], u = { home: "rgba(255,183,0,0.65)", away: "rgba(255,51,68,0.7)", night: "rgba(56,152,255,0.65)", vacation: "rgba(214,156,255,0.65)", disarm: "rgba(0,255,140,0.65)", triggered: "rgba(255,23,68,0.85)" }[s], f = {
      home: '<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away: '<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night: '<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
      vacation: '<path d="m67 113 66-34-28 66-9-25z"/><path d="m96 120 15 15M96 120l-20-6"/>',
      disarm: '<path d="m76 104 16 16 34-39"/>',
      triggered: '<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[s];
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 0 35px ${u}) drop-shadow(0 0 70px ${u}) drop-shadow(0 20px 40px rgba(0,0,0,.7));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(s)}"><defs><linearGradient id="premium-${s}-${a}" x1="20%" y1="5%" x2="85%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".85"/><stop offset=".18" stop-color="${d}" stop-opacity=".98"/><stop offset=".65" stop-color="${d}" stop-opacity=".4"/><stop offset="1" stop-color="#01040a" stop-opacity=".85"/></linearGradient><linearGradient id="shield-inner-${s}-${a}" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".3"/><stop offset=".35" stop-color="${d}" stop-opacity=".15"/><stop offset="1" stop-color="transparent"/></linearGradient><filter id="premium-glow-${s}-${a}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="5.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${s}-${a})" stroke="${d}" stroke-width="3.5" filter="url(#premium-glow-${s}-${a})"/><path d="M100 28 152 50v38c0 38-21 62-52 79-31-17-52-41-52-79V50z" fill="url(#shield-inner-${s}-${a})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(2,6,14,.55)" stroke="rgba(255,255,255,.35)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${s}-${a})">${f}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${d}" stroke-opacity=".65" stroke-width="2.5"><animate attributeName="r" values="50;62;50" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;.08;.8" dur="3.2s" repeatCount="indefinite"/></circle></svg>`;
  }
  _getIntelligentSVG(r, i, a, s, d = "0") {
    return this._renderPremiumStatusIcon(r, s, d);
  }
  _renderEntries() {
    this._sosBound = !1;
    const r = this.shadowRoot?.getElementById("hero-clock-time"), i = this.shadowRoot?.getElementById("hero-clock-date"), a = this.shadowRoot?.getElementById("hero-weather-pill"), s = this.shadowRoot?.getElementById("hero-security-pill");
    if (r || i || a || s) {
      const d = /* @__PURE__ */ new Date(), u = this._formatTime(d), g = this._getWeatherEntity().state || "sunny", _ = this._hass?.states?.["sun.sun"]?.state === "below_horizon", S = this._weatherPresentation(g, _), b = this._dashboard?.entries || [], k = (T) => this._t(T), I = b.some((T) => {
        const z = this._hass?.states[T.entity_id]?.state || T.state;
        return String(z).startsWith("armed") || z === "triggered" || z === "pending";
      });
      r && (r.textContent = u), i && (i.textContent = d.toLocaleDateString(this._getLocale(), { weekday: "short", month: "short", day: "numeric" })), a && (a.textContent = `${S.icon} ${S.label}`), s && (s.innerHTML = `<i class="hero-live" style="background:${I ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${I ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml(k(I ? "system_armed" : "system_disarmed"))}`);
    }
    typeof window.mountSecurityConsole == "function" && window.mountSecurityConsole(this);
  }
  async _exitFullscreenView() {
    const r = this._fullscreenIdx >= 0 ? this._fullscreenIdx : 0, i = (this._dashboard?.entries || [])[r], a = i && (i.pin_configured === !0 || i.user_pin_configured === !0), s = async () => {
      if (document.fullscreenElement || document.webkitFullscreenElement)
        try {
          document.exitFullscreen ? await document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        } catch {
        }
      (this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen"))?.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((u) => u.classList.remove("ios-fullscreen")), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !1 } })), this._renderEntries(!0);
    };
    if (!a) {
      await s();
      return;
    }
    this._showPinModal(async (d) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: i.entry_id,
          pin: d || ""
        }), this._closePinModal(), await s();
      } catch {
        const f = this.shadowRoot.getElementById("pin-error");
        f && (f.textContent = "❌ PIN incorrecto o error de acceso", f.style.color = "#ff4a4a");
      }
    });
  }
  _requestKioskUnlock() {
    if (!this._kioskLocked) return;
    const r = (this._dashboard?.entries || []).find((d) => d && d.entry_id === this._kioskEntryId), i = this.shadowRoot.getElementById("pin-error");
    if (!r || !r.entry_id) {
      i && (i.textContent = "Cannot resolve Argus instance", i.style.color = "#ff4a4a");
      return;
    }
    const a = this._kioskTarget || this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry"), s = () => {
      document.exitFullscreen ? document.exitFullscreen().catch(() => {
      }) : document.webkitExitFullscreen && document.webkitExitFullscreen(), a && a.classList.remove("ios-fullscreen"), this.shadowRoot.querySelectorAll(".entry.ios-fullscreen").forEach((d) => {
        d.classList.remove("ios-fullscreen");
      }), this.classList.remove("fullscreen-active"), this._fullscreenIdx = -1, this._kioskLocked = !1, this._kioskEntryId = null, this._kioskTarget = null, document.body.style.overflow = "", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !1 } })), this._renderEntries(!0);
    };
    if (r.pin_configured !== !0) {
      s();
      return;
    }
    i && (i.textContent = ""), this._showPinModal(async (d) => {
      try {
        await this._send("argus/verify_master_pin_for_screen_unlock", {
          entry_id: r.entry_id,
          pin: d || ""
        }), this._closePinModal(), s();
      } catch (u) {
        i && (i.textContent = u.message || this._t("pin_disarm_error"), i.style.color = "#ff4a4a");
      }
    });
  }
  _toggleFullscreen(r) {
    if (this._kioskLocked) {
      this._requestKioskUnlock();
      return;
    }
    const i = r || this.shadowRoot.querySelector(".entry"), a = i?.querySelector(".entry-fs") || i?.querySelector("[data-fullscreen]"), s = parseInt(a?.dataset?.fullscreen ?? 0), d = isNaN(s) || s < 0 ? 0 : s, u = this._dashboard?.entries?.[d] || this._dashboard?.entries?.[0];
    this._kioskEntryId = u?.entry_id || null, this._kioskTarget = i, this._kioskLocked = !1, this._fullscreenIdx = d, this.classList.add("fullscreen-active"), document.body.style.overflow = "hidden", this.dispatchEvent(new CustomEvent("argus-fullscreen-changed", { detail: { fullscreen: !0 } })), this._renderEntries(!0);
    const f = this.requestFullscreen || this.webkitRequestFullscreen || i?.requestFullscreen || i?.webkitRequestFullscreen;
    f && f.call(this).catch(() => {
    });
  }
  _getWeatherGradient(r, i = "") {
    const a = {
      sunny: "linear-gradient(160deg, #4da6ff 0%, #89c4ff 60%, #c8e8ff 100%)",
      clear: "linear-gradient(160deg, #1a1a3e 0%, #2d2d6b 50%, #0f2557 100%)",
      cloudy: "linear-gradient(160deg, #6b7a8d 0%, #9aa5b1 60%, #c5cdd5 100%)",
      partlycloudy: "linear-gradient(160deg, #5b8fd4 0%, #7baee8 50%, #a8c8f0 100%)",
      rainy: "linear-gradient(160deg, #3d4f5c 0%, #5a6e7a 50%, #7a8e96 100%)",
      snowy: "linear-gradient(160deg, #a8bfcf 0%, #c5d8e8 60%, #e8f0f8 100%)",
      stormy: "linear-gradient(160deg, #1a1f2e 0%, #2d3244 50%, #3d4255 100%)",
      fog: "linear-gradient(160deg, #8a9099 0%, #adb5bd 60%, #ced4da 100%)"
    }, s = String(i || r.label || "").toLowerCase(), d = Object.keys(a).find((u) => s.includes(u)) || Object.keys(a).find((u) => r.label?.toLowerCase().includes(u)) || "sunny";
    return a[d];
  }
  _initWeatherWebGL(r) {
    if (!r || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const i = r.parentElement;
    if (i) {
      const h = this._getWeatherEntity()?.state, v = this._hass?.states?.["sun.sun"]?.state === "below_horizon", E = String(h || "sunny").toLowerCase().replace(/[\s-]+/g, "_");
      i.style.background = this._getWeatherGradient(
        this._weatherPresentation(h, v),
        E
      );
    }
    const a = r.getContext("webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, powerPreference: "low-power" }) || r.getContext("experimental-webgl", { alpha: !0, premultipliedAlpha: !1, antialias: !1, powerPreference: "low-power" });
    if (!a) {
      r.style.opacity = "0";
      return;
    }
    a.clearColor(0, 0, 0, 0);
    const s = "attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}", d = `precision highp float;varying vec2 uv;uniform float time,rain,snow,fog,storm,wind,temp,night,cloudy;
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
gl_FragColor=vec4(col,alpha);}`, u = (h, v) => {
      const E = a.createShader(h);
      return a.shaderSource(E, v), a.compileShader(E), a.getShaderParameter(E, a.COMPILE_STATUS) ? E : null;
    }, f = u(a.VERTEX_SHADER, s), g = u(a.FRAGMENT_SHADER, d);
    if (!f || !g) {
      r.style.opacity = "0";
      return;
    }
    const _ = a.createProgram();
    if (a.attachShader(_, f), a.attachShader(_, g), a.linkProgram(_), !a.getProgramParameter(_, a.LINK_STATUS)) {
      r.style.opacity = "0";
      return;
    }
    const S = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, S), a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), a.STATIC_DRAW);
    const b = (h) => a.getUniformLocation(_, h), k = a.getAttribLocation(_, "p"), I = {
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
    }, T = {
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
    let x = 0, m = !0;
    if (r.width === 0 || r.height === 0 || r.clientWidth === 0 || r.clientHeight === 0) {
      const h = r.parentElement;
      h && h.offsetWidth > 0 ? (r.width = Math.floor(h.offsetWidth * (window.devicePixelRatio || 1)) || 300, r.height = Math.floor(h.offsetHeight * (window.devicePixelRatio || 1)) || 200) : (r.width = 600, r.height = 400);
    }
    const w = (h) => {
      if (!m || !r.isConnected) return;
      a.clear(a.COLOR_BUFFER_BIT);
      const v = Math.min(window.devicePixelRatio || 1, 1.5), E = Math.max(1, Math.round(r.clientWidth * v)), R = Math.max(1, Math.round(r.clientHeight * v));
      (r.width !== E || r.height !== R) && (r.width = E, r.height = R, a.viewport(0, 0, E, R)), T.cloudy > 0 && C.forEach((F) => {
        F.x -= F.speed, F.x + F.rx < 0 && (F.x = E + F.rx, F.y = 50 + Math.random() * (R - 100));
      });
      const $ = [], V = [], Y = [];
      C.forEach((F) => {
        $.push(F.x / E, F.y / R), V.push(F.rx / E, F.ry / R), Y.push(T.cloudy > 0 ? F.alpha : 0);
      }), a.useProgram(_), a.enable(a.BLEND), a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA), a.bindBuffer(a.ARRAY_BUFFER, S), a.enableVertexAttribArray(k), a.vertexAttribPointer(k, 2, a.FLOAT, !1, 0, 0), I.time && a.uniform1f(I.time, h), I.rain && a.uniform1f(I.rain, T.rain), I.snow && a.uniform1f(I.snow, T.snow), I.fog && a.uniform1f(I.fog, T.fog), I.storm && a.uniform1f(I.storm, T.storm), I.wind && a.uniform1f(I.wind, T.wind), I.temp && a.uniform1f(I.temp, T.temp), I.night && a.uniform1f(I.night, T.night), I.cloudy && a.uniform1f(I.cloudy, T.cloudy), I.cloudPositions && a.uniform2fv(I.cloudPositions, $), I.cloudSizes && a.uniform2fv(I.cloudSizes, V), I.cloudAlphas && a.uniform1fv(I.cloudAlphas, Y), a.drawArrays(a.TRIANGLE_STRIP, 0, 4), x = requestAnimationFrame(w);
    };
    r._argusWebglStop = () => {
      m = !1, cancelAnimationFrame(x), a.getExtension("WEBGL_lose_context")?.loseContext();
    }, r.closest(".wx-atmosphere")?.classList.add("webgl-active"), x = requestAnimationFrame(w);
  }
  /* ── Inline CSS Weather Backgrounds ─────────────────────────── */
  _renderAtmosphere(r, i) {
    const a = String(r || "").toLowerCase(), s = (z) => a.includes(z), d = s("thunder") || s("lightning") || s("storm"), u = s("snow") || s("hail") || s("sleet") || s("blizzard"), f = s("drizzle") || s("shower"), g = !f && (s("rain") || s("pouring")), _ = s("fog") || s("mist") || s("hazy"), S = s("cloud") || s("overcast");
    let b = "clear";
    d ? b = "storm" : g || f ? b = "rain" : u ? b = "snow" : _ ? b = "fog" : s("partly") ? b = "partlycloudy" : S ? b = "cloudy" : s("sunny") && (b = "sunny");
    const k = i ? "night" : "day", T = this._eclipseEvent() ? "eclipse" : "";
    return `<div class="scene ${k} ${b} ${T}"></div>`;
  }
  _getWeatherBg(r, i) {
    return this._renderAtmosphere(r, i);
  }
  /* ── Activity Log ────────────────────────────────────────────────── */
  _healthText() {
    const r = {
      es: { title: "Centro de salud", healthy: "Sistema saludable", warning: "Requiere atención", critical: "Dispositivos sin conexión", devices: "dispositivos configurados", offline: "sin conexión", low: "batería baja", battery: "Batería", none: "No hay dispositivos seleccionados en los modos.", local: "Local-first activo", confirm: "Confirmación inteligente", help: "Requiere señales independientes en una ventana de tiempo. Humo, gas, CO y seguridad siempre activan inmediatamente.", save: "Guardar", saved: "Guardado" },
      en: { title: "Health center", healthy: "System healthy", warning: "Attention required", critical: "Devices offline", devices: "configured devices", offline: "offline", low: "low batteries", battery: "Battery", none: "No devices are selected in the modes.", local: "Local-first active", confirm: "Intelligent confirmation", help: "Requires independent signals within a window. Smoke, gas, CO and safety always trigger immediately.", save: "Save", saved: "Saved" }
    };
    return r[this._getCurrentLangCode()] || r.en;
  }
  _renderHealthCenter() {
    const r = this._healthText(), i = this.shadowRoot.getElementById("h-health-title"), a = this.shadowRoot.getElementById("health-local-badge"), s = this.shadowRoot.getElementById("health-center");
    i && (i.textContent = r.title), a && (a.textContent = r.local);
    const d = this._ui?.intelligent_confirmation || { enabled: !1, window_seconds: 15, required_signals: 2 }, u = this.shadowRoot.getElementById("confirm-enabled"), f = this.shadowRoot.getElementById("confirm-signals"), g = this.shadowRoot.getElementById("confirm-window");
    u && (u.checked = !!d.enabled), f && (f.value = String(d.required_signals || 2)), g && (g.value = String(d.window_seconds || 15));
    const _ = this.shadowRoot.getElementById("confirm-label");
    _ && (_.textContent = r.confirm);
    const S = this.shadowRoot.getElementById("confirm-help");
    S && (S.textContent = r.help);
    const b = this.shadowRoot.getElementById("btn-save-confirmation");
    if (b && b.dataset.saved !== "1" && (b.textContent = r.save), this._renderStateSchedule(), !s) return;
    const k = this._systemHealth;
    if (!k) {
      s.innerHTML = `<div class="small" style="padding:10px">${this._escapeHtml(r.none)}</div>`;
      return;
    }
    const I = Array.isArray(k.batteries) ? k.batteries : [], T = I.filter((h) => h.low), z = Array.isArray(k.unavailable) ? k.unavailable : [], C = Array.isArray(k.configured_devices) ? k.configured_devices : [], x = k.status === "critical" ? r.critical : k.status === "warning" ? r.warning : r.healthy, m = new Map(I.map((h) => [h.entity_id, h])), w = C.map((h) => {
      const v = m.get(h.entity_id), E = h.state === "unknown" || h.state === "unavailable", R = [E ? r.offline : h.state];
      return v?.value !== null && v?.value !== void 0 && R.push(`${v.value}${v.unit || "%"}`), { name: h.name, value: R.join(" · "), alert: E || !!v?.low };
    });
    s.innerHTML = `<div class="health-summary">
      <div class="health-score" style="--score:${Number(k.score) || 0}" aria-label="${Number(k.score) || 0}%">${Number(k.score) || 0}</div>
      <div><div style="font-weight:850">${this._escapeHtml(x)}</div><div class="small" style="opacity:.6;margin-top:3px">${C.length} ${this._escapeHtml(r.devices)}</div></div>
    </div><div class="health-metrics">
      <div class="health-metric"><strong>${z.length}</strong><span>${this._escapeHtml(r.offline)}</span></div>
      <div class="health-metric"><strong>${T.length}</strong><span>${this._escapeHtml(r.low)}</span></div>
      <div class="health-metric"><strong>${I.length}</strong><span>${this._escapeHtml(r.battery)}</span></div>
    </div><div class="health-list" style="margin-top:13px">${w.length ? w.map((h) => `<div class="health-row"><span>${this._escapeHtml(h.name)}</span><strong style="color:${h.alert ? "#ff8a80" : "inherit"}">${this._escapeHtml(h.value)}</strong></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(r.none)}</div>`}</div>`;
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
      en: { title: "Local state schedules", all: "Every day", weekdays: "Monday to Friday", weekend: "Weekend", empty: "No schedules. Argus will preserve the last confirmed state.", disarmed: "Disarmed", home: "Home", away: "Away", night: "Night", vacation: "Vacation" }
    };
    return r[this._getCurrentLangCode()] || r.en;
  }
  _renderStateSchedule() {
    const r = this._scheduleText(), i = this.shadowRoot.getElementById("schedule-title");
    i && (i.textContent = r.title);
    const a = this.shadowRoot.getElementById("schedule-state"), s = this.shadowRoot.getElementById("schedule-days");
    if (a) {
      const S = a.value;
      a.innerHTML = `<option value="disarmed">${r.disarmed}</option><option value="armed_home">${r.home}</option><option value="armed_away">${r.away}</option><option value="armed_night">${r.night}</option><option value="armed_vacation">${r.vacation}</option>`, a.value = S || "armed_night";
    }
    if (s) {
      const S = s.value;
      s.innerHTML = `<option value="all">${r.all}</option><option value="weekdays">${r.weekdays}</option><option value="weekend">${r.weekend}</option>`, s.value = S || "all";
    }
    const d = this.shadowRoot.getElementById("schedule-list");
    if (!d) return;
    const u = Array.isArray(this._ui?.state_schedule) ? this._ui.state_schedule : [], f = { es: "Eliminar horario", en: "Delete schedule" }[this._getCurrentLangCode()] || "Delete schedule", g = (S) => ({ disarmed: r.disarmed, armed_home: r.home, armed_away: r.away, armed_night: r.night, armed_vacation: r.vacation })[S] || S, _ = (S) => S?.length === 2 ? r.weekend : S?.length === 5 ? r.weekdays : r.all;
    d.innerHTML = u.length ? u.map((S) => `<div class="schedule-row"><span><strong>${this._escapeHtml(S.time || "")}</strong> · ${this._escapeHtml(g(S.state))} · ${this._escapeHtml(_(S.days))}</span><button class="ghost" data-schedule-delete="${this._escapeHtml(S.id)}" aria-label="${this._escapeHtml(f)}">×</button></div>`).join("") : `<div class="small" style="opacity:.55">${this._escapeHtml(r.empty)}</div>`, d.querySelectorAll("[data-schedule-delete]").forEach((S) => S.addEventListener("click", () => this._deleteStateSchedule(S.dataset.scheduleDelete)));
  }
  async _addStateSchedule() {
    const r = this.shadowRoot.getElementById("schedule-state")?.value, i = this.shadowRoot.getElementById("schedule-time")?.value, a = this.shadowRoot.getElementById("schedule-days")?.value || "all";
    if (!r || !/^([01]\d|2[0-3]):[0-5]\d$/.test(i || "")) return;
    const s = a === "weekdays" ? [0, 1, 2, 3, 4] : a === "weekend" ? [5, 6] : [0, 1, 2, 3, 4, 5, 6], d = Array.isArray(this._ui?.state_schedule) ? [...this._ui.state_schedule] : [];
    d.push({ id: `schedule_${Date.now()}`, state: r, time: i, days: s, enabled: !0 }), await this._saveStateSchedule(d);
  }
  async _deleteStateSchedule(r) {
    const i = (this._ui?.state_schedule || []).filter((a) => a.id !== r);
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
    const a = String(i || "").trim(), s = a.toLocaleLowerCase(), d = {
      home: ["en casa", "home", "casa", "maison", "em casa", "дом", "在家"],
      away: ["ausente", "away", "absent", "fora", "fuori", "ушёл", "外出"],
      night: ["noche", "night", "nuit", "noite", "notte", "ночь", "夜间"],
      vacation: ["vacaciones", "vacation", "vacances", "férias", "vacanza", "отпуск", "度假"]
    }, f = Object.entries(d).find(([, I]) => I.some((T) => s.includes(T)))?.[0];
    if (r === "pin_reset") return this._t("log_detail_pin_reset");
    if (r === "pin_reset_failed") return this._t("log_detail_pin_reset_failed");
    if (r === "state_restored") {
      const I = {
        disarmed: this._t("disarmed"),
        armed_home: this._t("mode_home"),
        armed_away: this._t("mode_away"),
        armed_night: this._t("mode_night"),
        armed_vacation: this._t("mode_vacation"),
        triggered: this._t("log_triggered")
      };
      let T = this._t("disarmed");
      const z = a.toLowerCase();
      for (const [C, x] of Object.entries(I))
        if (z.includes(C) || z.includes(x.toLowerCase())) {
          T = x;
          break;
        }
      return `${this._t("log_action_state_restored")}: ${T}`;
    }
    if (r === "confirmation_pending") return a;
    if (r === "disarmed" || r === "disarm") return this._t("log_detail_disarm");
    if (r === "armed" || r === "arm")
      return f ? `${this._t("manual_arm")} (${this._t(`mode_${f}`)})` : this._t("manual_arm");
    if (r === "triggered") {
      const I = a.match(/\((?:modo|mode|modalità|режим|模式)\s*:?\s*([^)]+)\)/i);
      let T = "";
      if (I && I[1]) {
        const x = I[1].toLowerCase(), m = Object.entries(d).find(([, w]) => w.some((h) => x.includes(h)))?.[0];
        T = m ? this._t(`mode_${m}`) : I[1];
      }
      const z = a.match(/(?:sensor|capteur|sensore|датчик|传感器)\s*:\s*(.+)$/i)?.[1]?.replace(/\s*\((?:modo|mode|modalità|режим|模式)\s*:?[^)]*\)\s*$/i, "")?.trim();
      let C = z ? `${this._t("log_sensor")}: ${z}` : this._t("log_detail_triggered");
      return T && (C += ` (${this._t("log_mode")}: ${T})`), C;
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
    const _ = `log_action_${String(r).toLowerCase()}`, S = this._t(_);
    if (S !== _) return S;
    let b = a;
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
    for (const [I, T] of Object.entries(k))
      if (T && T !== I) {
        const z = new RegExp(`\\b${I}\\b`, "gi");
        b = b.replace(z, T);
      }
    return b;
  }
  _renderActivityLog() {
    const r = this.shadowRoot.getElementById("h-activity-log"), i = this.shadowRoot.getElementById("activity-log");
    if (i) {
      r && (r.textContent = this._t("activity_log"));
      try {
        const a = Array.isArray(this._ui?.audit_log) ? this._ui.audit_log.filter((u) => u && typeof u == "object" && !Array.isArray(u)) : [];
        if (!a.length) {
          const u = this._activityTimelineError ? this._t("history_unavailable") : this._t("log_no_events");
          i.innerHTML = `<div class="small" style="padding:8px 0;opacity:.72">${this._escapeHtml(u)}</div>`;
          return;
        }
        const s = i.closest(".panel"), d = s && s.getAttribute("data-size") === "S";
        i.innerHTML = a.slice(0, d ? 1 : 30).map((u) => {
          const f = String(u.action || ""), g = String(u.detail || ""), _ = String(u.user || u.actor || ""), S = u.ts ? new Date(u.ts) : null;
          let b = "";
          if (S && !Number.isNaN(S.getTime()))
            try {
              b = S.toLocaleString(this._getLocale());
            } catch {
              b = S.toISOString();
            }
          const k = this._localizeActivityDetail(f, g);
          let I = '<div class="glass-orb"></div>', T = "", z = f, C = "";
          const x = String(f || "").toLowerCase();
          if (x.endsWith("_rejected"))
            C = "log-item--triggered", T = "trigger", z = this._t("log_action_rejected");
          else if (x.includes("arm") && !x.includes("disarm"))
            C = "log-item--armed", T = "arm", z = this._t("log_armed");
          else if (x.includes("disarm"))
            C = "log-item--disarmed", T = "disarm", z = this._t("log_disarmed");
          else if (x.includes("trigger") || x.includes("alarm"))
            C = "log-item--triggered", T = "trigger", z = this._t("log_triggered");
          else if (x === "pin_reset")
            C = "log-item--disarmed", T = "disarm", z = this._t("badge_pin_reset");
          else if (x === "pin_reset_failed")
            C = "log-item--triggered", T = "trigger", z = this._t("badge_pin_reset_failed");
          else if (x === "sos" || x === "sos_stopped" || x === "panic_stopped")
            C = "log-item--triggered", T = "trigger", z = this._t("log_action_sos");
          else if (x === "audit_log_cleared")
            C = "log-item--triggered", T = "trigger", z = "🗑️ " + (this._t("log_action_audit_log_cleared") || "Historial Borrado");
          else if (x === "ui_configuration_updated")
            z = this._t("settings");
          else {
            const w = `log_action_${x}`, h = this._t(w);
            z = h && h !== w ? h : this._t(x) !== x ? this._t(x) : this._t("log_action_analysis") || f;
          }
          let m = "";
          return _ && _ !== "Argus" && _ !== "system" ? m = `👤 ${_}` : f.toLowerCase().includes("homekit") || k.toLowerCase().includes("homekit") ? m = "🍎 HomeKit" : m = "🤖 Argus", `<div class="log-item ${C}">
          <div class="log-icon">${I}</div>
          <div class="log-body">
            <div class="log-title">
              <span class="log-badge ${T}">${this._escapeHtml(z)}</span>
              <span style="font-weight:500">${this._escapeHtml(k)}</span>
            </div>
            <div class="log-meta">${this._escapeHtml(b)} &nbsp;·&nbsp; ${this._escapeHtml(m)}</div>
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
    const r = this.shadowRoot.getElementById("mode-tabs");
    if (!r) return;
    const i = ["disarmed", "home", "away", "night", "sos"], a = { disarmed: "🔓", home: "🏠", away: "🔴", night: "🌙", sos: "🚨" }, s = {
      disarmed: this._t("disarmed"),
      home: this._t("mode_home"),
      away: this._t("mode_away"),
      night: this._t("mode_night"),
      sos: this._t("sos_config_title") || "CONFIGURACIÓN SOS"
    };
    r.className = "tabs", r.innerHTML = `
      <div class="tab-bubble"></div>
      ${i.map((g) => `
        <button type="button" class="tab ${g === this._mode ? "active" : ""}" data-mode="${g}">
          <span class="tab-icon" style="font-size: 20px;">${a[g]}</span>
          <span class="tab-label">${s[g]}</span>
        </button>
      `).join("")}
    `;
    const d = r.querySelector(".tab-bubble");
    r.querySelectorAll("[data-mode]").forEach((g) => g.addEventListener("click", () => {
      this._mode = g.dataset.mode, this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
    }));
    const u = r.querySelectorAll(".tab");
    let f = null;
    u.forEach((g) => {
      g.dataset.mode === this._mode ? (g.classList.add("active"), f = g) : g.classList.remove("active");
    }), d && f && (d.className = `tab-bubble bubble-${this._mode}`, requestAnimationFrame(() => {
      const g = f.offsetLeft, _ = f.offsetWidth;
      d.style.transform = `translate3d(${g}px, 0, 0) scaleX(${_ / 100})`, d.style.width = "100px", d.style.left = "0";
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
      let d = {};
      this._ui.modes[this._mode] && typeof this._ui.modes[this._mode] == "object" && !Array.isArray(this._ui.modes[this._mode]) && (d = this._ui.modes[this._mode]), this._ui.modes.__by_entity__[i][this._mode] = { ...r, ...d };
    }
    const a = this._ui.modes.__by_entity__[i][this._mode], s = a && typeof a == "object" && !Array.isArray(a) ? a : r;
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
    const i = this._currentModeConfig(), a = Array.isArray(i.entry_sensors) ? [...i.entry_sensors] : [];
    a.includes(r) ? i.entry_sensors = a.filter((s) => s !== r) : i.entry_sensors = [...a, r], this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
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
              ${k.length ? k.map((I) => this._chip(I, "sos_output")).join("") : `<div class="mode-sensor-none" style="grid-column:1/-1;">${this._t("sos_no_outputs") || "Ningún dispositivo configurado"}</div>`}
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
        (I) => I.addEventListener("click", () => this._removeChip(I.dataset.remove))
      ), r.querySelector("#save-sos-mode")?.addEventListener("click", () => this._saveSosMode()));
      return;
    }
    const a = this._currentModeConfig(), s = a.sensors || [], d = a.bypassed_sensors || [], u = a.sirens || [], f = a.external_panels || [], g = this._dashboard?.entries || [], _ = this._modeEntryId || g[0]?.entity_id || "", S = g.length > 1 ? `
        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("alarm_instance")}</div>
          <select id="mode-instance-select" style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); color:inherit; border:1px solid rgba(255,255,255,0.1)">${g.map((b) => `<option value="${this._escapeHtml(b.entity_id)}" ${b.entity_id === _ ? "selected" : ""}>${this._escapeHtml(b.title || b.entity_id)}</option>`).join("")}</select>
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
              <input type="checkbox" id="mode-require-closed" ${a.require_closed ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("lock_if_open")}</span>
            </label>
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-wait-if-open" ${a.open_sensors_policy === "pending" ? "checked" : ""}>
              <span style="font-size:12px;font-weight:600">${this._t("wait_if_open")}</span>
            </label>
          `}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("bypass_lbl")}</div>
          <div class="mode-sensor-grid" id="bypass-chips">
            ${d.map((b) => this._chip(b, "bypass")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `<button class="ghost" data-open-selector="bypass" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">📢 ${this._t("siren_section")}</div>
          <div class="mode-sensor-grid" id="siren-chips">
            ${u.map((b) => this._chip(b, "siren")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${u.filter((b) => b.startsWith("light.")).map((b) => {
      const k = a.light_siren_settings?.[b] || {}, T = "#" + (Array.isArray(k.rgb_color) ? k.rgb_color : [255, 0, 0]).map((z) => Number(z).toString(16).padStart(2, "0")).join("");
      return `<details class="light-siren-settings"><summary>⚙ ${this._escapeHtml(this._hass?.states?.[b]?.attributes?.friendly_name || b)}</summary><label>${this._t("light_siren_color") || "Color"} <input type="color" data-light-siren-color="${this._escapeHtml(b)}" value="${T}"></label><label class="checkbox-label"><input type="checkbox" data-light-siren-flash="${this._escapeHtml(b)}" ${k.gentle_flash ? "checked" : ""}> ${this._t("light_siren_flash") || "Destello suave si está disponible"}</label></details>`;
    }).join("")}
          <div class="mode-section-title" style="margin-top:14px;font-size:12px">🔗 ${this._t("external_panels") || "Paneles de alarma externos"}</div>
          <div class="mode-sensor-grid" id="external-panel-chips">
            ${f.map((b) => this._chip(b, "external_panel")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t("select_btn")}</button><button class="ghost" data-open-selector="external_panel" style="margin-top:8px; width:100%; justify-content:center; font-size:12px">${this._t("add_btn")}</button>`}
        </div>

        <div class="mode-section-card">
          <div class="mode-section-title">${this._t("times_section")}</div>
          <div class="times-grid">
            <div class="input-group time-field">
              <span class="input-label">${this._t("arm_time")}</span>
              <input type="number" id="mode-arming-time" value="${a.arming_time ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
            <div class="input-group time-field">
              <span class="input-label">${this._t("disarm_time")}</span>
              <input type="number" id="mode-entry-delay" value="${a.entry_delay ?? ""}" placeholder="0" style="padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:inherit; font-size:13px">
            </div>
          </div>
          <div class="mode-sensor-grid entry-sensor-list">
            ${(a.entry_sensors || []).map((b) => this._chip(b, "entry")).join("") || `<div class="mode-sensor-none">${this._t("none_selected")}</div>`}
          </div>
          ${i ? "" : `<button class="ghost" data-open-selector="entry" style="margin-top:10px;width:100%;justify-content:center;font-size:12px">${this._t("select_entry_sensors")}</button>`}
          <label class="checkbox-label mode-mqtt-row">
            <input type="checkbox" id="mode-mqtt-enabled" ${a.mqtt_enabled === !0 ? "checked" : ""}>
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
    const a = this._hass?.states?.[r]?.state, s = ["on", "unlocked", "open", "recording", "active", "motion"].includes(a), d = this._hass?.states?.[r]?.attributes?.friendly_name || r, u = !this._isAdmin, f = i === "sensor" || i === "bypass" ? `<span class="pill-dot ${s ? "open" : ""}" title="${a}"></span>` : "";
    let g = "", _ = "";
    if (i === "sensor" || i === "bypass" || i === "entry") {
      const k = this._hass?.states?.[r], I = this._getDevicePower(r, k);
      if (g = `<span class="pill-status">${s ? this._t("status_open") : this._t("status_closed")}</span>`, I.mains && (_ += '<span class="pill-power">🔌 AC</span>'), I.battery !== null) {
        const T = I.battery === 0, z = I.battery <= 10 && !T, C = T ? "🔋 ❌" : `🔋 ${I.battery}%`;
        _ += `<span class="pill-power ${T ? "dead" : z ? "low" : ""}">${C}</span>`;
      }
    }
    const S = this._dashboard?.entries?.some(
      (k) => this._hass?.states?.[k.entity_id]?.state === "triggered"
    );
    let b = "";
    return i === "siren" && S && (b = " siren-active"), (i === "sensor" || i === "bypass" || i === "entry") && S && s && (b = " triggered-sensor"), `
      <span class="sensor-pill${b}">
        ${f}
        <span class="pill-content">
          <span class="pill-name">${this._escapeHtml(d)}</span>
          ${g}
          ${_}
        </span>
        ${u ? "" : `<button data-remove="${i}:${r}" style="background:none; border:none; color:inherit; opacity:0.5; padding:0 4px; cursor:pointer; flex-shrink:0;">✕</button>`}
      </span>
    `;
  }
  _removeChip(r) {
    if (!this._isAdmin) return;
    const [i, a] = r.split(":");
    if (i === "sos_output" || i === "panic") {
      this._panicOutputs = (this._panicOutputs || []).filter((f) => f !== a), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
      return;
    }
    const s = this._currentModeConfig(), d = i === "sensor" ? "sensors" : i === "bypass" ? "bypassed_sensors" : i === "entry" ? "entry_sensors" : i === "external_panel" ? "external_panels" : "sirens";
    let u = this._modeEntryId;
    (!u || u === "default") && (u = this._dashboard?.entries?.[0]?.entity_id || "default"), this._modeEntryId = u, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[u] = this._ui.modes.__by_entity__[u] || {}, this._ui.modes.__by_entity__[u][this._mode] = { ...s, [d]: (s[d] || []).filter((f) => f !== a) }, this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
  }
  async _saveSosMode() {
    const r = this.shadowRoot.getElementById("mode-status"), i = this.shadowRoot.getElementById("mode-emergency-number-input"), a = this._normaliseEmergencyNumber(i?.value || this._emergencyNumber || "911");
    this._emergencyNumber = a;
    try {
      r && (r.textContent = "...", r.className = "status", r.style.opacity = "1"), await this._send("argus/save_ui", {
        emergency_number: a,
        panic_outputs: this._panicOutputs || []
      }), this._ui || (this._ui = {}), this._ui.emergency_number = a, this._ui.panic_outputs = this._panicOutputs || [], r && (r.textContent = "✓ " + (this._t("mode_saved") || "Configuración SOS guardada"), r.className = "status ok", r.style.opacity = "1", setTimeout(() => {
        r && (r.textContent = "");
      }, 3e3));
    } catch (s) {
      r && (r.textContent = this._format("generic_error", { error: s.message }), r.className = "status err", r.style.opacity = "1");
    }
  }
  async _saveMode() {
    const r = this._currentModeConfig(), i = this.shadowRoot.getElementById("mode-require-closed"), a = this.shadowRoot.getElementById("mode-wait-if-open"), s = this.shadowRoot.getElementById("mode-arming-time"), d = this.shadowRoot.getElementById("mode-entry-delay"), u = this.shadowRoot.getElementById("mode-mqtt-enabled");
    i && (r.require_closed = i.checked), i?.checked ? r.open_sensors_policy = "block" : a?.checked ? r.open_sensors_policy = "pending" : r.open_sensors_policy = "allow", s && (r.arming_time = s.value ? parseInt(s.value) : 0), d && (r.entry_delay = d.value ? parseInt(d.value) : 0), u && (r.mqtt_enabled = u.checked), r.light_siren_settings = {}, this.shadowRoot.querySelectorAll("[data-light-siren-color]").forEach((f) => {
      const g = f.value || "#ff0000";
      r.light_siren_settings[f.dataset.lightSirenColor] = {
        rgb_color: [1, 3, 5].map((_) => parseInt(g.slice(_, _ + 2), 16)),
        gentle_flash: !!this.shadowRoot.querySelector(`[data-light-siren-flash="${CSS.escape(f.dataset.lightSirenColor)}"]`)?.checked
      };
    }), this._runWithPin(async () => {
      const f = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id || "default";
      this._ui.modes = this._ui.modes || {}, this._ui.modes.__by_entity__ = this._ui.modes.__by_entity__ || {}, this._ui.modes.__by_entity__[f] = this._ui.modes.__by_entity__[f] || {}, this._ui.modes.__by_entity__[f][this._mode] = { ...r };
      const g = this.shadowRoot.getElementById("mode-status");
      g && (g.textContent = "…", g.className = "status");
      try {
        await this._send("argus/save_mode_config", {
          entity_id: f,
          mode: this._mode,
          config: r
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
              let f = [];
              for (const g of this._dashboard.entries) {
                const _ = await this._hass.callWS({ type: "search/related", item_type: "entity", item_id: g.entity_id });
                if (_ && (_.automation && f.push(..._.automation), _.device && _.device.length))
                  for (const S of _.device) {
                    const b = await this._hass.callWS({ type: "search/related", item_type: "device", item_id: S });
                    b && b.automation && f.push(...b.automation);
                  }
              }
              this._cachedRelatedAutomations = new Set(f);
            } catch {
              this._cachedRelatedAutomations = /* @__PURE__ */ new Set();
            } finally {
              this._relatedAutomationsFetched = !0, this._renderAutomations();
            }
          })(), r.innerHTML = `<div class="small" style="padding:10px 0;opacity:.55">${this._t("searching_auto")}</div>`;
          return;
        }
        if (!this._relatedAutomationsFetched) return;
        const i = this._hass.states || {}, a = Object.values(i).filter((f) => {
          if (!f || !f.entity_id || !f.entity_id.startsWith("automation.")) return !1;
          const g = (f.attributes?.friendly_name || "").toLowerCase();
          return this._cachedRelatedAutomations.has(f.entity_id) || g.includes("argus") || f.entity_id.toLowerCase().includes("argus");
        });
        if (!a.length) {
          r.innerHTML = `<div class="small" style="padding:8px 0;opacity:.55">${this._t("no_auto_linked")}</div>`;
          return;
        }
        const s = r.closest(".panel"), d = s && s.getAttribute("data-size") === "S", u = a.slice(0, d ? 1 : 15);
        r.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;max-height:300px;overflow-y:auto;padding-right:8px">${u.map((f) => {
          const g = f.attributes?.id || f.entity_id.replace("automation.", ""), _ = f.attributes?.last_triggered ? new Date(f.attributes.last_triggered).toLocaleString(this._getLocale()) : this._t("never_triggered"), S = d ? "" : `<div class="small" style="opacity:0.7;margin-top:4px">${this._escapeHtml(_)}</div>`;
          return `
        <div class="list-item-card">
          <div>
            <div style="font-weight:700">${this._escapeHtml(f.attributes?.friendly_name || f.entity_id)}</div>
            ${S}
          </div>
          <button class="ghost" style="padding:6px 12px;background:rgba(255,255,255,0.08);border-radius:8px" data-edit-auto="${this._escapeHtml(g)}">✏️</button>
        </div>`;
        }).join("")}</div>`, r.querySelectorAll("[data-edit-auto]").forEach((f) => f.addEventListener("click", () => {
          history.pushState(null, "", `/config/automation/edit/${f.dataset.editAuto}`), window.dispatchEvent(new CustomEvent("location-changed"));
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
    const i = this._hass?.services?.notify || {}, a = Object.values(this._hass?.states || {}).filter((u) => u?.entity_id?.startsWith("notify.") && u.entity_id !== "notify.persistent_notification").map((u) => ({ value: `entity:${u.entity_id}`, label: u.attributes?.friendly_name || u.entity_id })), s = Object.keys(i).filter((u) => !["notify", "send_message", "persistent_notification"].includes(u) && !this._notifTargets.includes(u)).map((u) => ({ value: u, label: u.replace(/_/g, " ") })), d = [...a, ...s].filter((u) => !this._notifTargets.includes(u.value));
    r.innerHTML = d.length ? d.map(({ value: u, label: f }) => `<option value="${this._escapeHtml(u)}">${this._escapeHtml(`🔔 ${f}`)}</option>`).join("") : `<option value="">— ${this._escapeHtml(this._t("notif_no_services"))} —</option>`;
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
        this._notifTargets = this._notifTargets.filter((a) => a !== i.dataset.notifRemove), this._renderNotifChips(), this._populateNotifSelect();
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
      const a = Array.isArray(this._users) ? this._users.filter((f) => f && typeof f == "object" && !Array.isArray(f)) : [], s = r.closest(".panel"), d = s && s.getAttribute("data-size") === "S", u = d ? a.slice(0, 2) : a;
      a.length ? (r.innerHTML = u.map((f, g) => {
        if (d)
          return `
            <div class="user-card" style="display:flex;justify-content:space-between;align-items:center;width:100%;padding:6px 10px;flex-direction:row">
              <div style="font-weight:700">${this._escapeHtml(f.name || "")}</div>
              <div style="display:flex;gap:4px">
                ${f.role === "admin" ? '<span class="user-badge admin">⭐ Adm</span>' : '<span class="user-badge user">👤 Std</span>'}
                ${f.access_pin_configured ? '<span class="user-badge" style="background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800">🔒 PIN</span>' : ""}
              </div>
            </div>`;
        const _ = f.expiration_date && new Date(f.expiration_date) < /* @__PURE__ */ new Date();
        let S = "";
        if (f.expiration_date) {
          const z = new Date(f.expiration_date);
          if (!isNaN(z.getTime()))
            try {
              S = this._formatDateTime(z);
            } catch {
              S = z.toISOString();
            }
        }
        const b = f.expiration_date ? _ ? `<span class="user-badge admin" style="background:#b91c1c;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">❌ ${this._escapeHtml(this._t("expired"))} (${this._escapeHtml(S)})</span>` : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">⏳ ${this._escapeHtml(this._t("active_until"))}: ${this._escapeHtml(S)}</span>` : `<span class="user-badge" style="background:#15803d;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">♾️ ${this._t("exp_indefinite")}</span>`, k = f.ha_user_id ? (() => {
          const z = (this._haUsersList || []).find((C) => C.id === f.ha_user_id);
          return z ? this._format("ha_account_linked", { name: z.name }) : this._t("ha_account_unavailable");
        })() : this._t("ha_account_unavailable"), I = f.role === "admin" ? "⭐ " + this._escapeHtml(this._t("role_argus_admin")) : "👤 " + this._escapeHtml(this._t("role_argus_standard")), T = f.access_pin_configured ? '<span class="user-badge" style="background:#0284c7;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800">🔒 PIN</span>' : `<span class="user-badge" style="background:#334155;color:#ffffff!important;border:1px solid rgba(255,255,255,0.2);font-weight:800">🔓 ${this._escapeHtml(this._t("user_no_pin"))}</span>`;
        return `
          <div class="user-card" style="display:flex;flex-direction:column;align-items:stretch;gap:8px">
            <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
              <div style="flex:1">
                <div style="font-weight:700">${this._escapeHtml(f.name || "")}</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px">
                  <span class="user-badge ${f.role === "admin" ? "admin" : "user"}">${I}</span>
                  <span class="user-badge" style="background:#581c87;color:#ffffff!important;border:1px solid rgba(255,255,255,0.3);font-weight:800;margin-left:5px">${this._escapeHtml(k)}</span>
                  ${T}
                  ${b}
                </div>
                ${f.role !== "admin" && f.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("view_panel_perm") || this._t("instances") || "Panel")}">👁️ ${f.permissions.view_status ? this._t("view_panel_perm") || this._t("instances") || "Panel" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("arm_perm") || this._t("system_armed") || "Armar")}">🛡️ ${f.permissions.arm ? this._t("arm_perm") || this._t("system_armed") || "Armar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("disarm_perm") || this._t("disarmed") || "Desarmar")}">🔓 ${f.permissions.disarm ? this._t("disarm_perm") || this._t("disarmed") || "Desarmar" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(248,113,113,0.12);color:#f87171" title="${this._escapeHtml(this._t("perm_sos") || "SOS")}">🚨 ${f.permissions.sos ? "SOS" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t("view_history_perm") || this._t("activity_log") || "Historial")}">📜 ${f.permissions.view_history ? this._t("view_history_perm") || this._t("activity_log") || "Historial" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="${this._escapeHtml(this._t("access_pin_lbl") || "PIN Acceso")}">🔑 ${f.permissions.change_pin ? this._t("access_pin_lbl") || "PIN Acceso" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="${this._escapeHtml(this._t("master_pin_lbl") || "Pin de Armado")}">🔑 ${f.permissions.change_master_pin ? this._t("master_pin_lbl") || "Pin de Armado" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(168,85,247,0.12);color:#a855f7" title="${this._escapeHtml(this._t("perm_admin_access") || "Admin")}">⚙️ ${f.permissions.admin_access ? "Admin" : "---"}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(56,189,248,0.12);color:#38bdf8" title="${this._escapeHtml(this._t("perm_admin_profiles") || "Perfiles Admin")}">👑 ${f.permissions.admin_profiles ? "Perfiles" : "---"}</span>
                </div>
                ` : ""}
              </div>
              <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${g}" title="${this._escapeHtml(this._t("modal_edit_name"))}">✏️</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${g}" title="${this._escapeHtml(this._t("modal_pin_title"))}">🔑</button>
                  ${f.role !== "admin" ? `<button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-perms="${g}" title="${this._escapeHtml(this._t("permissions_title") || "Permisos")}">🛡️</button>` : ""}
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${g}" title="${this._escapeHtml(this._t("user_role_label"))}">⭐</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t("delete_user_tooltip"))}" aria-label="${this._escapeHtml(this._t("delete_user_tooltip"))}" data-user-del="${g}">🗑️</button>
                ` : ""}
              </div>
            </div>
          </div>`;
      }).join(""), this._isAdmin && r.insertAdjacentHTML("beforeend", `
            <div style="margin-top:10px">
              <button class="secondary" style="width:100%;padding:10px;font-size:13px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,255,255,0.18);background:rgba(255,255,255,0.03)" id="btn-add-manual-user">➕ ${this._escapeHtml(this._t("modal_add_user"))}</button>
            </div>`), this._isAdmin && (r.querySelectorAll("[data-user-edit]").forEach((f) => {
        f.addEventListener("click", async () => {
          const g = Number(f.dataset.userEdit), _ = this._users[g];
          if (!_) return;
          const S = await this._showArgusInputModal({
            title: this._t("modal_edit_name"),
            label: this._t("modal_name_label"),
            placeholder: _.name,
            initialValue: _.name,
            type: "text"
          });
          S === null || S.trim() === "" || this._runWithPin(async () => {
            try {
              const b = this._users.map((I, T) => T === g ? { ...I, name: S.trim() } : I), k = await this._send("argus/save_ui", { users: b });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || b) : this._users = b, this._renderUsers();
            } catch (b) {
              this._showArgusConfirmModal(b.message || this._format("generic_error", { error: b }), { confirmLabel: "OK" });
            }
          });
        });
      }), r.querySelectorAll("[data-user-pin]").forEach((f) => {
        f.addEventListener("click", async () => {
          const g = Number(f.dataset.userPin), _ = this._users[g];
          if (!_) return;
          const S = await this._showArgusInputModal({
            title: `${this._t("modal_pin_title")} — ${_.name}`,
            label: this._t("modal_pin_help"),
            placeholder: "••••",
            type: "password",
            numeric: !0
          });
          S !== null && this._runWithPin(async () => {
            try {
              await this._send("argus/save_user_access_pin", { argus_user_id: _.id, pin: S.trim() });
              const b = await this._send("argus/dashboard");
              b && b.users && (this._users = b.users), this._renderUsers();
            } catch (b) {
              this._showArgusConfirmModal(b.message || this._format("generic_error", { error: b }), { confirmLabel: "OK" });
            }
          });
        });
      }), r.querySelector("#btn-add-manual-user")?.addEventListener("click", async () => {
        const f = await this._showArgusInputModal({
          title: this._t("modal_add_user"),
          label: this._t("modal_name_label"),
          placeholder: this._t("user_default") || "Usuario",
          type: "text"
        });
        !f || !f.trim() || this._runWithPin(async () => {
          try {
            const g = {
              id: `argus_manual_${Date.now()}`,
              name: f.trim(),
              role: "standard",
              enabled: !0,
              permissions: { view_status: !0, arm: !0, disarm: !0, view_history: !1 }
            }, _ = [...this._users || [], g], S = await this._send("argus/save_ui", { users: _ });
            S && S.ui ? (this._ui = S.ui, this._users = S.ui.users || _) : this._users = _, this._renderUsers();
          } catch (g) {
            this._showArgusConfirmModal(g.message || this._format("generic_error", { error: g }), { confirmLabel: "OK" });
          }
        });
      }), r.querySelectorAll("[data-user-role-toggle]").forEach((f) => {
        f.addEventListener("click", async () => {
          const g = Number(f.dataset.userRoleToggle), _ = this._users[g];
          if (!_) return;
          const S = await this._showArgusInputModal({
            title: this._t("user_role_action") || "Cambiar Rol",
            label: this._t("user_role_label") || "Selecciona el rol",
            initialValue: _.role === "admin" ? "admin" : "standard",
            type: "select",
            options: [
              { value: "admin", label: this._t("role_argus_admin") || "Administrador de Argus" },
              { value: "standard", label: this._t("role_argus_standard") || "Usuario estándar" }
            ]
          });
          !S || S === _.role || this._runWithPin(async () => {
            const b = this._users.map((k, I) => I === g ? { ...k, role: S } : k);
            try {
              const k = await this._send("argus/save_ui", { users: b });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || b) : this._users = b, this._renderUsers();
            } catch (k) {
              this._showArgusConfirmModal(k.message || this._format("generic_error", { error: k }), { confirmLabel: "OK" });
            }
          });
        });
      }), r.querySelectorAll("[data-user-del]").forEach(
        (f) => f.addEventListener("click", async () => {
          const g = Number(f.dataset.userDel), _ = this._users[g];
          if (!_) return;
          const S = this._format("delete_user_confirm", { name: _.name || "User" });
          await this._showArgusConfirmModal(
            this._t("modal_delete_confirm") || S,
            { confirmLabel: this._t("clear") || "Delete", confirmStyle: "background:#e53935;color:white;border:none" }
          ) && this._runWithPin(async () => {
            const k = [...this._users];
            k.splice(g, 1);
            try {
              const I = await this._send("argus/save_ui", { users: k });
              I && I.ui ? (this._ui = I.ui, this._users = I.ui.users || k) : this._users = k, this._renderUsers();
            } catch (I) {
              this._showArgusConfirmModal(I.message || this._format("generic_error", { error: I }), { confirmLabel: "OK" });
            }
          });
        })
      ), r.querySelectorAll("[data-user-perms]").forEach((f) => {
        f.addEventListener("click", async () => {
          const g = Number(f.dataset.userPerms), _ = this._users[g];
          if (!_) return;
          const S = await this._showArgusPermissionsModal(_);
          S !== null && this._runWithPin(async () => {
            const b = this._users.map((k, I) => I === g ? { ...k, permissions: { ...k.permissions, ...S } } : k);
            try {
              const k = await this._send("argus/save_ui", { users: b });
              k && k.ui ? (this._ui = k.ui, this._users = k.ui.users || b) : this._users = b, this._renderUsers();
            } catch (k) {
              this._showArgusConfirmModal(k.message || this._format("generic_error", { error: k }), { confirmLabel: "OK" });
            }
          });
        });
      }))) : r.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    } catch (a) {
      console.error("Argus users list render failed:", a), r.innerHTML = `<div class="small">${this._t("no_users")}</div>`;
    }
    this._syncAccessSummary();
  }
  _populateTemperatureSources() {
    const r = this.shadowRoot.getElementById("temp-source-select-standalone");
    if (!r || !this._hass) return;
    const i = [{ entity_id: "auto", name: this._t("temp_auto") }];
    for (const s of Object.values(this._hass.states || {})) {
      const d = s.entity_id || "", u = s.attributes || {};
      if (d.startsWith("climate.") && typeof u.current_temperature == "number") {
        i.push({ entity_id: d, name: `🌡️ ${u.friendly_name || d} ${this._t("temp_thermostat")}` });
        continue;
      }
      if (!d.startsWith("sensor.")) continue;
      const f = String(u.device_class || "").toLowerCase(), g = String(u.unit_of_measurement || u.native_unit_of_measurement || "").toLowerCase(), _ = Number(s.state);
      Number.isFinite(_) && (f === "temperature" || ["°c", "°f", "c", "f"].includes(g)) && i.push({ entity_id: d, name: `🌡️ ${u.friendly_name || d}` });
    }
    const a = /* @__PURE__ */ new Set();
    r.innerHTML = i.filter((s) => a.has(s.entity_id) ? !1 : (a.add(s.entity_id), !0)).map((s) => `<option value="${this._escapeHtml(s.entity_id)}">${this._escapeHtml(s.name)}</option>`).join("");
  }
  _populateWeatherSources() {
    const r = this.shadowRoot.getElementById("weather-source-select");
    if (!r || !this._hass?.states) return;
    const i = r.value || this._weatherSource || "auto", a = Object.values(this._hass.states).filter((s) => s.entity_id?.startsWith("weather."));
    r.innerHTML = [{ entity_id: "auto", name: this._t("weather_auto") }, ...a.map((s) => ({ entity_id: s.entity_id, name: s.attributes?.friendly_name || s.entity_id }))].map((s) => `<option value="${this._escapeHtml(s.entity_id)}">${this._escapeHtml(s.name)}</option>`).join(""), r.value = [...r.options].some((s) => s.value === i) ? i : "auto";
  }
  _getWeatherEntity() {
    const r = this._weatherSource || "auto";
    return (r !== "auto" ? this._hass?.states?.[r] : null) || Object.values(this._hass?.states || {}).find((a) => a.entity_id?.startsWith("weather.")) || { state: "sunny", attributes: {} };
  }
  _getDisplayedTemperature() {
    if (!this._hass) return null;
    const r = this._temperatureSource || "auto";
    if (r !== "auto") {
      const d = this._hass.states?.[r];
      if (!d) return null;
      const u = r.startsWith("climate.") ? d.attributes?.current_temperature : Number(d.state), f = r.startsWith("climate.") ? d.attributes?.temperature_unit : d.attributes?.unit_of_measurement || d.attributes?.native_unit_of_measurement;
      return Number.isFinite(Number(u)) ? `${Number(u).toFixed(1).replace(/\.0$/, "")}°${String(f || "").replace("°", "")}` : null;
    }
    const i = this._getWeatherEntity(), a = i?.attributes?.temperature, s = i?.attributes?.temperature_unit;
    return Number.isFinite(Number(a)) ? `${Number(a).toFixed(1).replace(/\.0$/, "")}°${String(s || "").replace("°", "")}` : null;
  }
  _getTemperatureReadings() {
    if (!this._hass?.states) return [];
    const r = [], i = this._getWeatherEntity(), a = i?.attributes?.temperature, s = i?.attributes?.temperature_unit;
    Number.isFinite(Number(a)) && r.push({ label: "EXT.", value: `${Number(a).toFixed(1).replace(/\.0$/, "")}°${String(s || "").replace("°", "")}` });
    const d = this._temperatureSource || "auto";
    let u = d !== "auto" ? this._hass.states[d] : Object.values(this._hass.states).find((f) => f.entity_id?.startsWith("climate.") && Number.isFinite(Number(f.attributes?.current_temperature)));
    if (u?.entity_id?.startsWith("weather.") && (u = null), u) {
      const f = u.entity_id.startsWith("climate.") ? u.attributes?.current_temperature : Number(u.state), g = u.entity_id.startsWith("climate.") ? u.attributes?.temperature_unit : u.attributes?.unit_of_measurement || u.attributes?.native_unit_of_measurement;
      Number.isFinite(Number(f)) && r.push({ label: "INT.", value: `${Number(f).toFixed(1).replace(/\.0$/, "")}°${String(g || "").replace("°", "")}` });
    }
    return r;
  }
  _moonPhase() {
    const r = (this._hass?.states?.["sensor.moon_phase"]?.state || this._hass?.states?.["sensor.moon"]?.state || "").toLowerCase().replace(/[\s-]+/g, "_");
    return r.includes("new") ? "new" : r.includes("waxing_crescent") ? "waxing-crescent" : r.includes("first_quarter") ? "first-quarter" : r.includes("waxing_gibbous") ? "waxing-gibbous" : r.includes("waning_gibbous") ? "waning-gibbous" : r.includes("last_quarter") || r.includes("third_quarter") ? "last-quarter" : r.includes("waning_crescent") ? "waning-crescent" : (r.includes("full"), "full");
  }
  _eclipseEvent() {
    const i = Object.values(this._hass?.states || {}).find((s) => {
      const d = `${s.entity_id || ""} ${s.attributes?.friendly_name || ""} ${s.attributes?.device_class || ""}`.toLowerCase(), u = `${s.state || ""} ${s.attributes?.event || ""} ${s.attributes?.type || ""}`.toLowerCase();
      return /eclips/.test(d) && !/^(off|none|unknown|unavailable|false|0)$/i.test(String(s.state || "")) && /eclips|solar|lunar|moon|luna/.test(u);
    });
    if (!i) return null;
    const a = `${i.state || ""} ${i.attributes?.event || ""} ${i.attributes?.type || ""} ${i.attributes?.friendly_name || ""}`.toLowerCase();
    return /solar|sun|sol/.test(a) ? "solar" : /lunar|moon|luna/.test(a) ? "lunar" : null;
  }
  _renderEclipseOverlay(r) {
    if (!r) return "";
    const i = r === "solar" ? "☀️ Eclipse solar" : "🌕 Eclipse lunar";
    return `<div class="weather-eclipse" aria-label="${i}">${i}</div>`;
  }
  _season() {
    const r = (/* @__PURE__ */ new Date()).getMonth(), a = Number(this._hass?.config?.latitude) < 0 ? (r + 6) % 12 : r;
    return [11, 0, 1].includes(a) ? "winter" : [2, 3, 4].includes(a) ? "spring" : [5, 6, 7].includes(a) ? "summer" : "autumn";
  }
  async _handleBackgroundFiles(r) {
    const i = Array.from(r?.target?.files || []).slice(0, 4);
    if (!i.length) return;
    const a = (d) => new Promise((u, f) => {
      const g = new FileReader();
      g.onload = () => u(String(g.result || "")), g.onerror = f, g.readAsDataURL(d);
    });
    this._backgroundImages = (await Promise.all(i.map(a))).filter(Boolean);
    const s = this.shadowRoot.getElementById("bg-file-help");
    s && (s.textContent = `${this._backgroundImages.length} imagen(es) cargadas para el panel.`);
  }
  _isVideoFile(r) {
    const i = [".mov", ".mp4", ".webm", ".ogg", ".avi", ".m4v"], a = (r.name || "").toLowerCase();
    return i.some((s) => a.endsWith(s)) || r.type.startsWith("video/");
  }
  async _showLivePhotoDialog(r, i, a) {
    confirm(this._format("file_choice", { file: r.name })) ? await i() : await a();
  }
  async _uploadFile(r, i) {
    const a = this._hass?.auth?.accessToken, s = {};
    a && (s.Authorization = `Bearer ${a}`);
    const d = new FormData();
    d.append("file", r);
    const u = await fetch("/api/argus/upload", {
      method: "POST",
      body: d,
      headers: s
    });
    if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
    return await u.json();
  }
  async _handlePanelBgFile(r) {
    const i = r?.target?.files?.[0];
    if (!i) return;
    const a = this.shadowRoot.getElementById("bg-file-help");
    a && (a.textContent = "Subiendo al servidor..."), r.target.value = "";
    try {
      if (this._isVideoFile(i))
        await this._showLivePhotoDialog(
          i,
          async () => {
            const d = await this._uploadFile(i, a);
            if (d?.success) {
              this._panelBgFile = d.url;
              const u = this.shadowRoot.getElementById("panel-bg-url-input");
              u && (u.value = d.url), a && (a.textContent = `Subido como imagen: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: d?.error || this._t("upload_error") }));
          },
          async () => {
            const d = await this._uploadFile(i, a);
            if (d?.success) {
              this._panelBgFile = d.url;
              const u = this.shadowRoot.getElementById("panel-bg-url-input");
              u && (u.value = d.url), a && (a.textContent = `Subido como video: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: d?.error || this._t("upload_error") }));
          }
        );
      else {
        const d = await this._uploadFile(i, a);
        if (d?.success) {
          this._panelBgFile = d.url;
          const u = this.shadowRoot.getElementById("panel-bg-url-input");
          u && (u.value = d.url), a && (a.textContent = `Subido: ${i.name}`), this._loadUploadedFiles();
        } else
          a && (a.textContent = this._format("generic_error", { error: d?.error || this._t("upload_error") }));
      }
    } catch (s) {
      console.error("Upload failed:", s), a && (a.textContent = this._format("generic_error", { error: s.message || s }));
    }
  }
  async _handleHubBgFile(r) {
    const i = r?.target?.files?.[0];
    if (!i) return;
    const a = this.shadowRoot.getElementById("hub-file-help");
    a && (a.textContent = "Subiendo al servidor..."), r.target.value = "";
    try {
      if (this._isVideoFile(i))
        await this._showLivePhotoDialog(
          i,
          async () => {
            const d = await this._uploadFile(i, a);
            if (d?.success) {
              this._hubBgFile = d.url;
              const u = this.shadowRoot.getElementById("hub-bg-url-input");
              u && (u.value = d.url), a && (a.textContent = `Subido como imagen: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: d?.error || this._t("upload_error") }));
          },
          async () => {
            const d = await this._uploadFile(i, a);
            if (d?.success) {
              this._hubBgFile = d.url;
              const u = this.shadowRoot.getElementById("hub-bg-url-input");
              u && (u.value = d.url), a && (a.textContent = `Subido como video: ${i.name}`), this._loadUploadedFiles();
            } else
              a && (a.textContent = this._format("generic_error", { error: d?.error || this._t("upload_error") }));
          }
        );
      else {
        const d = await this._uploadFile(i, a);
        if (d?.success) {
          this._hubBgFile = d.url;
          const u = this.shadowRoot.getElementById("hub-bg-url-input");
          u && (u.value = d.url), a && (a.textContent = `Subido: ${i.name}`), this._loadUploadedFiles();
        } else
          a && (a.textContent = this._format("generic_error", { error: d?.error || this._t("upload_error") }));
      }
    } catch (s) {
      console.error("Upload failed:", s), a && (a.textContent = this._format("generic_error", { error: s.message || s }));
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
    const a = this._uploadedFiles || [];
    if (!a.length) {
      r.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:20px; font-size:11px; opacity:0.5;">
          ${this._t("no_files_uploaded")}
        </div>
      `, i && (i.textContent = this._t("files_count").replace("{count}", "0"));
      return;
    }
    let s = 0;
    a.forEach((u) => s += u.size_bytes || 0);
    let d = "";
    s >= 1024 * 1024 ? d = `${(s / (1024 * 1024)).toFixed(2)} MB` : d = `${(s / 1024).toFixed(2)} KB`, i && (i.textContent = this._t("files_count_short").replace("{count}", a.length) + ` (${d})`), r.innerHTML = a.filter((u) => !u.is_video).map((u) => `
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
    `).join(""), r.querySelectorAll(".file-card-btn-delete").forEach((u) => {
      u.addEventListener("click", () => {
        const f = u.dataset.filename;
        confirm(this._t("file_delete_confirm").replace("{filename}", f)) && this._deleteUploadedFile(f);
      });
    }), r.querySelectorAll(".use-for-panel").forEach((u) => {
      u.addEventListener("click", () => {
        const f = u.dataset.url;
        this._panelBgFile = f;
        const g = this.shadowRoot.getElementById("panel-bg-url-input");
        g && (g.value = f);
        const _ = this.shadowRoot.getElementById("bg-mode-select-standalone");
        _ && (_.value = "photo"), this._backgroundMode = "photo", this._updateBgFieldsVisibility(), this._renderEntries(), this._savePersonalization();
        const S = this.shadowRoot.getElementById("bg-file-help");
        S && (S.textContent = this._t("bg_panel_selected_from_history"));
      });
    }), r.querySelectorAll(".use-for-hub").forEach((u) => {
      u.addEventListener("click", () => {
        const f = u.dataset.url;
        this._hubBgFile = f;
        const g = this.shadowRoot.getElementById("hub-bg-url-input");
        g && (g.value = f);
        const _ = this.shadowRoot.getElementById("hub-bg-mode-select");
        _ && (_.value = "image"), this._hubBgMode = "image", this._updateBgFieldsVisibility(), this._updateCanvasBackground(), this._savePersonalization();
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
      const a = this.shadowRoot.getElementById("hub-bg-url-input");
      a && a.value === `/local/argus/${r}` && (a.value = "", this._hubBgFile = "");
    } catch (i) {
      console.warn("Server delete failed:", i), alert(this._format("delete_file_error", { error: i.message || i }));
    }
  }
  _updateBgFieldsVisibility() {
    const r = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", i = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", a = this.shadowRoot.getElementById("panel-custom-bg-inputs");
    if (a)
      if (r === "photo" || r === "collage") {
        a.style.display = "flex";
        const d = this.shadowRoot.getElementById("lbl-panel-bg-sound");
        d && (d.style.display = "none");
        const u = this.shadowRoot.getElementById("panel-bg-file-input");
        u && (u.accept = "image/*,.mov,.heic,.heif");
        const f = this.shadowRoot.getElementById("panel-bg-url-input");
        f && (f.placeholder = "Pegar URL de la imagen");
      } else
        a.style.display = "none";
    const s = this.shadowRoot.getElementById("hub-custom-bg-inputs");
    if (s)
      if (i === "image") {
        s.style.display = "flex";
        const d = this.shadowRoot.getElementById("lbl-hub-bg-sound");
        d && (d.style.display = "none");
        const u = this.shadowRoot.getElementById("hub-bg-file-input");
        u && (u.accept = "image/*,.mov,.heic,.heif");
        const f = this.shadowRoot.getElementById("hub-bg-url-input");
        f && (f.placeholder = "Pegar URL de la imagen/GIF");
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
    !i.length || !this._hass || i.forEach((a) => {
      try {
        this._hass.callService("notify", a, {
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
    r.innerHTML = i.length ? i.map((a) => {
      const s = this._hass?.states?.[a]?.attributes?.friendly_name || a;
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
    if (!this._isAdmin && this._permissions?.sos === !1) {
      await this._showArgusConfirmModal(this._t("no_sos_perm_alert") || "No tienes permisos para activar la alarma SOS.", { confirmLabel: "OK" });
      return;
    }
    this._sosBusy = !0;
    const r = this.shadowRoot && this.shadowRoot.getElementById("sos-modal");
    r && r.classList.remove("open");
    const i = this._normaliseEmergencyNumber(this._emergencyNumber), a = this._sosEntryIdx, s = this._dashboard?.entries?.[a], d = s?.entity_id;
    try {
      if (!this._hass || !d) throw new Error(this._t("no_alarm_instance"));
      await this._send("argus/perform_alarm_action", { action: "sos", entry_id: s.entry_id }), window.confirm(`${this._t("sos_activated")}. ${this._format("sos_call_confirm", { number: i })}`) && (window.location.href = `tel:${i}`);
    } catch (u) {
      alert(this._format("sos_error", { error: u?.message || u }));
    } finally {
      this._sosEntryIdx = null, this._sosBusy = !1;
    }
  }
  async _stopSOS(r) {
    const i = this._dashboard?.entries?.[r], s = (i && this._hass?.states?.[i.entity_id])?.attributes?.panic_previous_state, d = {
      armed_home: "alarm_arm_home",
      armed_away: "alarm_arm_away",
      armed_night: "alarm_arm_night",
      armed_vacation: "alarm_arm_vacation",
      disarmed: "alarm_disarm"
    }[s];
    if (!i?.entity_id || !d) {
      alert(this._t("panic_state_unknown"));
      return;
    }
    const u = async (g) => {
      try {
        return await this._send("argus/perform_alarm_action", {
          action: d.replace("alarm_", ""),
          entry_id: i.entry_id,
          ...g ? { code: g } : {}
        }), await this._load(), !0;
      } catch (_) {
        const S = this.shadowRoot.getElementById("pin-error");
        return S ? S.textContent = `❌ ${this._format("panic_stop_error", { error: "" }).replace(/:\s*$/, "")}` : alert(this._format("panic_stop_error", { error: _?.message || _ })), !1;
      }
    };
    i.pin_configured === !0 || (this._users || []).length > 0 ? this._showPinModal(u) : await u(null);
  }
  _savePersonalization() {
    this._runWithPin(() => this._persistPersonalization());
  }
  async _persistPersonalization() {
    this._ui = this._ui || {};
    const r = this.shadowRoot.getElementById("bg-mode-select-standalone")?.value || "weather", i = this.shadowRoot.getElementById("temp-source-select-standalone")?.value || "auto", a = this.shadowRoot.getElementById("weather-source-select")?.value || "auto", s = this.shadowRoot.getElementById("argus-clock-format-select")?.value || "auto";
    this._clockFormat = ["auto", "12h", "24h"].includes(s) ? s : "auto";
    const d = this._normaliseEmergencyNumber(this.shadowRoot.getElementById("emergency-number-input")?.value), u = this.shadowRoot.getElementById("panel-bg-url-input")?.value || "", f = !!this.shadowRoot.getElementById("chk-panel-bg-sound")?.checked, g = this.shadowRoot.getElementById("hub-bg-mode-select")?.value || "default", _ = g === "default" ? "none" : g, S = this._hubBgFile || this.shadowRoot.getElementById("hub-bg-url-input")?.value || "", b = !!this.shadowRoot.getElementById("chk-hub-bg-sound")?.checked, k = {
      home_name: this._homeName,
      temperature_source: i,
      weather_source: a,
      clock_format: this._clockFormat,
      emergency_number: d
    };
    this._panicOutputs !== void 0 && (k.panic_outputs = this._panicOutputs);
    const I = (this._ui.users || []).find((C) => C.id === this._currentProfile?.id);
    k.background_mode = r, k.background_images = this._backgroundImages || [], k.panel_bg_file = u, k.panel_bg_sound = f, k.hub_bg_mode = _, k.hub_bg_file = S, k.hub_bg_sound = b, k.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    let T = "default", z = "";
    if (r === "photo" && u ? (T = "photo", z = u) : r === "weather" ? T = "weather" : r === "none" && (T = "none"), k.theme = {
      background_mode: T,
      background_file: z
    }, I) {
      const C = JSON.parse(JSON.stringify(this._ui.users || [])), x = C.find((m) => m.id === this._currentProfile?.id);
      x.background_mode = r, x.background_images = this._backgroundImages || [], x.panel_bg_file = u, x.panel_bg_sound = f, x.hub_bg_mode = _, x.hub_bg_file = S, x.hub_bg_sound = b, x.theme = k.theme, k.users = C;
    }
    try {
      await this._send("argus/save_ui", k), this._currentUserTheme = k.theme, this._backgroundMode = r, this._temperatureSource = i, this._weatherSource = a, this._emergencyNumber = d, this._panelBgFile = u, this._panelBgSound = f, this._hubBgMode = g, this._hubBgFile = S, this._hubBgSound = b, this._updateTheme(), this._ui = this._ui || {}, I ? this._ui.users = k.users : (this._ui.background_mode = r, this._ui.background_images = this._backgroundImages || [], this._ui.panel_bg_file = u, this._ui.panel_bg_sound = f, this._ui.hub_bg_mode = _, this._ui.hub_bg_file = S, this._ui.hub_bg_sound = b), this._ui.temperature_source = i, this._ui.weather_source = a, this._ui.clock_format = this._clockFormat, this._ui.emergency_number = d, this._ui.panic_outputs = this._panicOutputs, this._configureEmergencyCall(), this._ui.hub_bg_file = S, this._ui.hub_bg_sound = b, this._renderEntries(), this._updateCanvasBackground();
      const C = this.shadowRoot.getElementById("btn-save-personalization-standalone");
      if (C) {
        const x = C.textContent;
        C.textContent = this._t("saved"), C.style.background = "#43a047", setTimeout(() => {
          C.textContent = x, C.style.background = "";
        }, 3e3);
      }
    } catch (C) {
      alert(this._format("generic_error", { error: C.message }));
    }
  }
  /* ── Home Name management ────────────────────────────────────────── */
  _editHomeName() {
    const r = () => {
      const i = this.shadowRoot.getElementById("home-name-modal"), a = this.shadowRoot.getElementById("home-name-input"), s = this.shadowRoot.getElementById("home-name-status");
      a.value = this._homeName || this.shadowRoot.getElementById("home-name-setting")?.value || "", s && (s.textContent = ""), i.classList.add("open"), i.setAttribute("aria-hidden", "false"), setTimeout(() => a.focus(), 60);
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
    } catch (a) {
      alert(this._format("generic_error", { error: a.message }));
    }
  }
  /* ── PIN management ──────────────────────────────────────────────── */
  async _savePin() {
    const r = this.shadowRoot.getElementById("pin-status"), i = this._dashboard?.entries?.[0]?.pin_configured === !0, a = this.shadowRoot.getElementById("current-pin").value;
    if (i && !a) {
      r && (r.textContent = this._t("pin_incorrect"), r.className = "status err");
      return;
    }
    const s = this.shadowRoot.getElementById("new-pin-1").value, d = this.shadowRoot.getElementById("new-pin-2").value;
    if (s !== d) {
      r ? (r.textContent = this._t("pin_mismatch"), r.className = "status err") : alert(this._t("pin_mismatch"));
      return;
    }
    try {
      await this._send("argus/update_master_pin", { pin: s, current_pin: a }), r && (r.textContent = s ? this._t("pin_updated") : this._t("pin_deleted"), r.className = "status ok"), this.shadowRoot.getElementById("current-pin-display") && (this.shadowRoot.getElementById("current-pin-display").textContent = s ? this._t("pin_active_yes") : this._t("pin_active_no")), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !!s), this._syncAccessSummary(), this.shadowRoot.getElementById("current-pin") && (this.shadowRoot.getElementById("current-pin").value = ""), this.shadowRoot.getElementById("new-pin-1").value = "", this.shadowRoot.getElementById("new-pin-2").value = "", setTimeout(() => this._load(), 1200);
    } catch (u) {
      r ? (r.textContent = u.message, r.className = "status err") : alert(u.message);
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
        const d = this._format("generic_error", { error: s.message });
        r && (r.textContent = d, r.className = "status err"), i && (i.textContent = d);
      }
  }
  /* ── Liquid-glass input modal (replaces window.prompt) ───────────── */
  _showArgusInputModal({ title: r = "", label: i = "", placeholder: a = "", initialValue: s = "", type: d = "text", numeric: u = !1, options: f = null } = {}) {
    return new Promise((g) => {
      const _ = `_aim_${Date.now()}`, S = document.createElement("div");
      S.id = _, S.setAttribute("role", "dialog"), S.setAttribute("aria-modal", "true"), S.style.cssText = [
        "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const b = i.replace(/'/g, "&#39;"), k = r.replace(/'/g, "&#39;"), I = a.replace(/'/g, "&#39;"), T = this._t("modal_cancel") || "Cancelar", z = this._t("modal_save") || "Guardar";
      S.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(380px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${k}</div>
          ${b ? `<div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${b}</div>` : ""}
          ${d === "select" && f ? `<select id="aim-inp" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;transition:border-color .2s;font-family:inherit">
                 ${f.map((v) => `<option value="${this._escapeHtml(v.value)}" ${v.value === s ? "selected" : ""}>${this._escapeHtml(v.label)}</option>`).join("")}
               </select>` : `<input id="aim-inp" type="${d === "password" ? "password" : "text"}"
            ${u ? 'inputmode="numeric" pattern="[0-9]*"' : ""}
            placeholder="${I}"
            value="${s.replace(/"/g, "&quot;")}"
            style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:12px;
              padding:12px 14px;font-size:15px;color:#fff;outline:none;width:100%;box-sizing:border-box;
              transition:border-color .2s;font-family:inherit"/>`}
          <div style="display:flex;gap:10px;margin-top:4px">
            <button id="aim-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${T}</button>
            <button id="aim-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${z}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(S);
      const x = S.querySelector("#aim-inp"), m = S.querySelector("#aim-ok"), w = S.querySelector("#aim-cancel");
      setTimeout(() => x?.focus(), 60), x?.addEventListener("focus", () => x.style.borderColor = "rgba(74,144,217,0.8)"), x?.addEventListener("blur", () => x.style.borderColor = "rgba(255,255,255,0.15)");
      const h = (v) => {
        S.remove(), g(v);
      };
      m.addEventListener("click", () => h(x.value)), w.addEventListener("click", () => h(null)), x.addEventListener("keydown", (v) => {
        v.key === "Enter" && (v.preventDefault(), h(x.value)), v.key === "Escape" && (v.preventDefault(), h(null));
      }), S.addEventListener("click", (v) => {
        v.target === S && h(null);
      });
    });
  }
  _showArgusPermissionsModal(r) {
    return new Promise((i) => {
      const a = document.createElement("div");
      a.style.cssText = [
        "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const s = this._t("modal_cancel") || "Cancelar", d = this._t("modal_save") || "Guardar", u = r.permissions || {};
      a.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(420px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ ${this._t("permissions_title") || "Permisos"} — ${this._escapeHtml(r.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${this._t("permissions_modal_desc") || "Selecciona las acciones permitidas para este perfil estándar:"}</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:340px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${u.view_status ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>👁️ ${this._t("perm_view_status") || "Ver Estado de Sensores / Panel"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${u.arm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>🛡️ ${this._t("perm_arm") || "Armar Alarma"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${u.disarm ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>🔓 ${this._t("perm_disarm") || "Desarmar Alarma"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-sos" ${u.sos ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#f87171;font-weight:700;">🚨 ${this._t("perm_sos") || "Activar SOS / Pánico"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${u.view_history ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span>📜 ${this._t("perm_view_history") || "Ver Historial de Actividad"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${u.change_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">🔑 ${this._t("perm_change_pin") || "Permitir Cambiar su Pin perfil Argus"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${u.change_master_pin ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">🔑 ${this._t("perm_change_master_pin") || "Permitir Cambiar el Pin de Armado"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-admin-access" ${u.admin_access ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#a855f7;font-weight:700;">⚙️ ${this._t("perm_admin_access") || "Acceso a Pestañas / Ajustes de Admin"}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-admin-profiles" ${u.admin_profiles ? "checked" : ""} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#38bdf8;font-weight:700;">👑 ${this._t("perm_admin_profiles") || "Acceso a Perfiles de Admin"}</span>
            </label>
          </div>

          <div style="display:flex;gap:10px;margin-top:10px">
            <button id="apm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${s}</button>
            <button id="apm-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${d}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(a);
      const g = a.querySelector("#apm-ok"), _ = a.querySelector("#apm-cancel"), S = (b) => {
        a.remove(), i(b);
      };
      g.addEventListener("click", () => {
        const b = {
          view_status: a.querySelector("#chk-perm-view-status").checked,
          arm: a.querySelector("#chk-perm-arm").checked,
          disarm: a.querySelector("#chk-perm-disarm").checked,
          sos: a.querySelector("#chk-perm-sos").checked,
          view_history: a.querySelector("#chk-perm-view-history").checked,
          change_pin: a.querySelector("#chk-perm-change-pin").checked,
          change_master_pin: a.querySelector("#chk-perm-change-master-pin").checked,
          admin_access: a.querySelector("#chk-perm-admin-access").checked,
          admin_profiles: a.querySelector("#chk-perm-admin-profiles").checked
        };
        S(b);
      }), _.addEventListener("click", () => S(null)), a.addEventListener("click", (b) => {
        b.target === a && S(null);
      });
    });
  }
  /* ── Liquid-glass confirm modal (replaces window.confirm) ─────────── */
  _showArgusConfirmModal(r = "", { confirmLabel: i = "", confirmStyle: a = "", cancelLabel: s = "" } = {}) {
    return new Promise((d) => {
      const u = document.createElement("div");
      u.setAttribute("role", "alertdialog"), u.setAttribute("aria-modal", "true"), u.style.cssText = [
        "position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center",
        "background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)",
        "animation:argus-modal-in .18s ease"
      ].join(";");
      const f = i || this._t("modal_confirm") || "Confirmar", g = s || this._t("modal_cancel") || "Cancelar", _ = a || "background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)";
      u.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.92);line-height:1.5;text-align:center">${r}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${g}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${_}">${f}</button>
          </div>
        </div>`, (document.body || this.shadowRoot).appendChild(u);
      const b = (k) => {
        u.remove(), d(k);
      };
      u.querySelector("#acm-ok").addEventListener("click", () => b(!0)), u.querySelector("#acm-cancel").addEventListener("click", () => b(!1)), u.addEventListener("click", (k) => {
        k.target === u && b(!1);
      }), u.addEventListener("keydown", (k) => {
        k.key === "Enter" && b(!0), k.key === "Escape" && b(!1);
      }), setTimeout(() => u.querySelector("#acm-ok")?.focus(), 60);
    });
  }
  _runWithPin(r) {
    r();
  }
  _showPinModal(r) {
    const i = this.shadowRoot.getElementById("pin-modal"), a = this.shadowRoot.getElementById("pin-input"), s = this.shadowRoot.getElementById("pin-error"), d = this.shadowRoot.querySelector(".wrap");
    a.value = "", s && (s.textContent = "", s.style.color = ""), this._pinCallback = r;
    const u = this.classList.contains("fullscreen-active");
    let f = null;
    if (u && (f = this.shadowRoot.querySelector(".entry.ios-fullscreen") || this.shadowRoot.querySelector(".entry") || this.shadowRoot.querySelector("article")), u && f) {
      i.style.position = "absolute", i.style.zIndex = "99999999", i.style.background = "rgba(0, 0, 0, 0.55)", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none";
      const g = i.querySelector(".modal");
      g && (g.classList.remove("dial-elastic"), g.offsetWidth, g.classList.add("dial-elastic")), f.appendChild(i);
    } else
      i.style.position = "fixed", i.style.zIndex = "999999", i.style.background = "rgba(0, 0, 0, 0.3)", i.style.backdropFilter = "none", i.style.webkitBackdropFilter = "none", d && d.classList.add("wrap-blurred");
    i.classList.add("open"), i.setAttribute("aria-hidden", "false"), setTimeout(() => a.focus(), 60);
  }
  _closePinModal() {
    const r = this.shadowRoot.getElementById("pin-modal");
    r.classList.remove("open"), r.setAttribute("aria-hidden", "true");
    const i = this.shadowRoot.querySelector(".wrap");
    i && i.classList.remove("wrap-blurred"), r.style.position = "fixed", r.style.zIndex = "999999", this.shadowRoot.appendChild(r), this._pinCallback = null;
  }
  _appendPinDigit(r) {
    const i = this.shadowRoot.getElementById("pin-input"), a = this.shadowRoot.getElementById("pin-error");
    i && (i.value = `${i.value || ""}${r}`.slice(0, 8), a && (a.textContent = ""));
  }
  _backspacePin() {
    const r = this.shadowRoot.getElementById("pin-input"), i = this.shadowRoot.getElementById("pin-error");
    r && (r.value = (r.value || "").slice(0, -1), i && (i.textContent = ""));
  }
  async _submitPin() {
    const r = this.shadowRoot.getElementById("pin-input").value.trim();
    if (!r) {
      const a = this.shadowRoot.getElementById("pin-error");
      a && (a.textContent = "⚠️ Introduce el PIN");
      return;
    }
    const i = this._pinCallback;
    if (i)
      try {
        await i(r) !== !1 && this._closePinModal();
      } catch (a) {
        const s = this.shadowRoot.getElementById("pin-error");
        s && (s.textContent = a.message || "❌ PIN incorrecto");
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
        const d = this._hass?.states?.[s.entity_id]?.attributes?.device_class || "";
        return i.includes(d);
      }
      return !1;
    }).filter((s) => !r || [s.entity_id, s.name, s.area].filter(Boolean).join(" ").toLowerCase().includes(r)).forEach((s) => {
      this._selected.includes(s.entity_id) || this._selected.push(s.entity_id);
    }), this._renderSelector(!0);
  }
  _openModal(r) {
    this._selectorTarget = r;
    const i = this._currentModeConfig(), a = r === "sensor" ? "sensors" : r === "bypass" ? "bypassed_sensors" : r === "entry" ? "entry_sensors" : r === "external_panel" ? "external_panels" : "sirens";
    this._selected = r === "panic" ? [...this._panicOutputs || this._ui?.panic_outputs || []] : Array.isArray(i?.[a]) ? [...i[a]] : [];
    const s = this.shadowRoot.getElementById("selector-title");
    r === "sensor" ? s.textContent = this._t("sensor_section") : r === "bypass" ? s.textContent = this._t("sensors_to_bypass") : r === "entry" ? s.textContent = this._t("entry_sensors") : r === "panic" ? s.textContent = this._t("sos_actions") || this._t("selector_panic") || "Dispositivos y Acciones SOS" : r === "external_panel" ? s.textContent = this._t("external_panels") || "Paneles de alarma externos" : s.textContent = this._t("siren_section");
    const d = this.shadowRoot.getElementById("selector-search");
    d && (d.value = ""), this._renderSelector(!0);
    const u = this.shadowRoot.getElementById("selector-modal");
    u.classList.add("open"), u.setAttribute("aria-hidden", "false");
  }
  _closeModal() {
    const r = this.shadowRoot.getElementById("selector-modal");
    r.classList.remove("open"), r.setAttribute("aria-hidden", "true");
  }
  _renderSelectedBox() {
    const r = this.shadowRoot.getElementById("selector-selected");
    if (!r) return;
    r.innerHTML = this._selected.map((a) => {
      const s = this._hass?.states?.[a], d = this._deviceFacts(a, s, !0);
      return `<div class="sel-right-item">
        <div style="min-width:0">
          <div class="sel-right-name">${this._escapeHtml(s?.attributes?.friendly_name || a)}</div>
          <div class="sel-right-facts">${d.map((u) => `<span class="device-fact ${u.className}">${this._escapeHtml(u.text)}</span>`).join("")}</div>
        </div>
        <button class="ghost" style="padding:3px 8px;font-size:11px;flex-shrink:0;margin-left:6px" data-rm="${this._escapeHtml(a)}">✕</button>
      </div>`;
    }).join("") || `<div class="small" style="padding:10px;opacity:.5">${this._t("none_selected")}</div>`;
    const i = this.shadowRoot.getElementById("selector-count");
    i && (i.textContent = `${this._selected.length} ${this._t("selected_lbl").toLowerCase()}`);
  }
  _renderSelector(r = !0) {
    const i = this.shadowRoot.getElementById("selector-list"), a = this.shadowRoot.getElementById("selector-selected");
    if (!(!i || !a)) {
      if (i._boundSelectorChange || (i._boundSelectorChange = !0, i.addEventListener("change", (s) => {
        const d = s.target.closest("input[type=checkbox]");
        if (!d || !d.dataset.entity) return;
        const u = d.dataset.entity;
        d.checked ? this._selected.includes(u) || this._selected.push(u) : this._selected = this._selected.filter((f) => f !== u), this._renderSelectedBox();
      })), a._boundSelectorRm || (a._boundSelectorRm = !0, a.addEventListener("click", (s) => {
        const d = s.target.closest("[data-rm]");
        if (!d || !d.dataset.rm) return;
        const u = d.dataset.rm;
        this._selected = this._selected.filter((g) => g !== u);
        const f = i.querySelector(`input[type=checkbox][data-entity="${u}"]`);
        f && (f.checked = !1), this._renderSelectedBox();
      })), r) {
        const s = (this.shadowRoot.getElementById("selector-search")?.value || "").toLowerCase().trim(), d = ["door", "window", "motion", "vibration", "glass", "opening", "smoke", "gas", "tamper"], u = (this._available || []).filter((f) => {
          if (this._selectorTarget === "external_panel") return f.domain === "alarm_control_panel";
          if (this._selectorTarget === "siren" || this._selectorTarget === "panic") return ["siren", "switch", "light", "fan", "input_boolean", "script", "alarm_control_panel"].includes(f.domain);
          if (f.domain === "lock") return !0;
          if (f.domain === "binary_sensor") {
            const g = this._hass?.states?.[f.entity_id]?.attributes?.device_class || "";
            return d.includes(g);
          }
          return !1;
        }).filter((f) => !s || [f.entity_id, f.name, f.area, f.entity_id.split(".")[1]].filter(Boolean).join(" ").toLowerCase().includes(s));
        i.innerHTML = u.map((f) => {
          const g = this._hass?.states?.[f.entity_id], _ = this._deviceFacts(f.entity_id, g, !0);
          return `<label class="pick-row">
          <input type="checkbox" data-entity="${this._escapeHtml(f.entity_id)}" ${this._selected.includes(f.entity_id) ? "checked" : ""}>
          <div>
            <div class="pick-row-name">${this._escapeHtml(f.name || f.entity_id)}</div>
            <div class="pick-row-meta">${this._escapeHtml(f.entity_id)}${f.area ? " · " + this._escapeHtml(f.area) : ""}</div>
            <div class="device-facts">${_.map((S) => `<span class="device-fact ${S.className}">${this._escapeHtml(S.text)}</span>`).join("")}</div>
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
    }, a = this._ui.modes.__by_entity__[r][this._mode] || {}, s = { ...i, ...a };
    this._selectorTarget === "sensor" && (s.sensors = [...this._selected]), this._selectorTarget === "siren" && (s.sirens = [...this._selected]), this._selectorTarget === "bypass" && (s.bypassed_sensors = [...this._selected]), this._selectorTarget === "entry" && (s.entry_sensors = [...this._selected]), this._selectorTarget === "external_panel" && (s.external_panels = [...this._selected]), this._ui.modes.__by_entity__[r][this._mode] = s, this._closeModal(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update"));
  }
  /* ── Alarm actions ───────────────────────────────────────────────── */
  async _handleAction(r, i) {
    const a = this._dashboard.entries[Number(r)];
    if (!a?.entity_id || !this._hass) return;
    const s = this._hass.states[a.entity_id];
    if (!s || s.state === "unavailable") return;
    const d = {
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
    }, f = d[i];
    if (!f) return;
    if (this._hass?.user?.name || this._t("user_default"), i === "disarm") {
      if (!this._isAdmin && this._permissions?.disarm === !1) {
        await this._showArgusConfirmModal(this._t("no_disarm_perm_alert") || "No tienes permisos para desarmar la alarma.", { confirmLabel: "OK" });
        return;
      }
      const S = a.pin_configured === !0, b = a.user_pin_configured === !0, k = async (I) => {
        try {
          return await this._send("argus/perform_alarm_action", {
            action: "disarm",
            entry_id: a.entry_id,
            ...I ? { code: I } : {}
          }), setTimeout(() => {
            this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._load();
          }, 300), !0;
        } catch {
          const z = this.shadowRoot.getElementById("pin-error");
          return z && (z.textContent = "❌ PIN incorrecto o error al desarmar"), !1;
        }
      };
      S || b ? this._showPinModal(async (I) => await k(I)) : await k(null);
      return;
    }
    if (i !== "disarm" && !this._isAdmin && this._permissions?.arm === !1) {
      await this._showArgusConfirmModal(this._t("no_arm_perm_alert") || "No tienes permisos para armar la alarma.", { confirmLabel: "OK" });
      return;
    }
    const g = this._modeEntryId || this._dashboard?.entries?.[0]?.entity_id, _ = this._ui?.modes?.__by_entity__?.[g]?.[i] || this._ui?.modes?.[i] || {};
    if (_.require_closed) {
      const S = _.sensors || [], b = new Set(
        _.bypassed_sensors || _.bypassedSensors || []
      ), k = [];
      for (const I of S) {
        if (b.has(I)) continue;
        const T = this._hass.states[I]?.state;
        ["on", "open", "unlocked", "active", "motion", "recording"].includes(T) && k.push(this._hass.states[I]?.attributes?.friendly_name || I);
      }
      if (k.length > 0) {
        this._showArmBlockedAlert(k);
        return;
      }
    }
    try {
      await this._send("argus/perform_alarm_action", {
        action: f.replace("alarm_", ""),
        entry_id: a.entry_id
      });
      const S = u[i] || i;
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
    const a = r.map((s) => `  • ${s}`).join(`
`);
    alert(
      `🚨 ${this._t("cannot_arm")}

` + this._format("open_sensors_explain", { names: a })
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
    let a = i.picture || null;
    if (!a && this._hass?.states) {
      const x = Object.values(this._hass.states).filter(
        (m) => m.entity_id?.startsWith("person.") && (m.attributes?.friendly_name?.toLowerCase() === i.name?.toLowerCase() || m.attributes?.user_id === i.ha_user_id)
      );
      if (x.length > 0) {
        const m = x[0].attributes?.entity_picture;
        m && (a = m);
      }
    }
    i.picture = a;
    const s = i.picture ? `<img id="hero-profile-avatar" class="user-avatar" src="${this._escapeHtml(i.picture)}" alt="${this._escapeHtml(i.name)}" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 3px 8px rgba(0,0,0,0.2); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);" />` : `<div id="hero-profile-avatar" class="user-avatar" style="width: 34px; height: 34px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">${this._escapeHtml(i.name.substring(0, 2).toUpperCase())}</div>`, d = this._manualLang || "auto", u = i.role === "admin" || i.permissions && i.permissions.change_pin, f = i.role === "admin" || i.permissions && i.permissions.change_master_pin, g = i.role === "admin" ? this._t("role_argus_admin_short") || "Admin" : this._t("role_argus_user_short") || "Estándar", _ = (this._users || []).find((x) => x.id === i.id), S = !!(i.access_pin_configured || _?.access_pin_configured), b = !!(this._dashboard?.entries?.[0]?.pin_configured || i.master_pin_configured || (this._users || []).find((x) => x.role === "admin")?.pin_configured);
    r.innerHTML = `
      <div style="position: relative; display: flex; align-items: center; z-index: 10002;">
        <div class="hero-profile-pill glass liquid-glass" style="display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px;">
          ${s}
          <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
            <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(i.name)}</span>
            <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(g)}</span>
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
          <span class="user-badge ${i.role === "admin" ? "admin" : "user"}" style="font-size: 8.5px; padding: 3px 8px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.03em;">${this._escapeHtml(g)}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          <label style="font-size: 11px; font-weight: 700; opacity: 0.7; display: flex; align-items: center; gap: 5px;">${this._t("lang_selector_lbl") || "⚙️ Idioma / Language"}</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 36px; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${si.map((x) => `<option value="${x.code}" ${x.code === d ? "selected" : ""}>${x.flag} ${x.code === "auto" ? this._t("use_ha_language") || "Automático (HA)" : x.label}</option>`).join("")}
          </select>
        </div>

        <!-- PIN management section -->
        ${u || f ? `
        <div style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">${this._t("pin_management") || "🔑 Gestión de Pines"}</span>
          
          <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 2px;">
            ${u ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t("access_pin_lbl") || "Pin perfil Argus"}</span>
              ${S ? `
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t("change_btn") || "Cambiar"}</button>
                <button id="btn-dropdown-remove-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t("remove_btn") || "Eliminar"}</button>
              </div>
              ` : `
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 9.5px; font-weight: 800; opacity: 0.5; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 6px;">${this._t("no_pin_badge") || "SIN PIN"}</span>
                <button id="btn-dropdown-set-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #30d158 !important;">⚙️ ${this._t("configure_btn") || "Configurar"}</button>
              </div>
              `}
            </div>
            ` : ""}
            
            ${f ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t("master_pin_lbl") || "Pin de Armado"}</span>
              ${b ? `
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t("change_btn") || "Cambiar"}</button>
                <button id="btn-dropdown-remove-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t("remove_btn") || "Eliminar"}</button>
              </div>
              ` : `
              <div style="display: flex; align-items: center; gap: 6px;">
                <span style="font-size: 9.5px; font-weight: 800; opacity: 0.5; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 6px;">${this._t("no_pin_badge") || "SIN PIN"}</span>
                <button id="btn-dropdown-set-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #30d158 !important;">⚙️ ${this._t("configure_btn") || "Configurar"}</button>
              </div>
              `}
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
    const k = r.querySelector(".hero-profile-pill"), I = r.querySelector("#profile-dropdown");
    if (k && I) {
      const x = (w) => {
        const h = r.closest(".hero");
        h && (h.style.zIndex = w ? "999999" : "9999");
        const v = r.closest(".wrap");
        v && (v.style.zIndex = w ? "999999" : "");
        const E = r.closest(".argus-widget") || r.closest(".react-grid-item") || r.closest(".panel");
        E && (E.style.zIndex = w ? "999999" : "");
      };
      k.addEventListener("click", (w) => {
        w.stopPropagation();
        const h = I.style.display === "flex";
        I.style.display = h ? "none" : "flex", x(!h);
      });
      const m = (w) => {
        (w.composedPath ? w.composedPath() : [w.target]).some((E) => E === r || E.closest && E.closest?.("#profile-dropdown")) || (I.style.display = "none", x(!1), document.removeEventListener("click", m, !0));
      };
      k.addEventListener("click", () => {
        setTimeout(() => {
          I.style.display === "flex" && document.addEventListener("click", m, !0);
        }, 10);
      });
    }
    const T = r.querySelector("#dropdown-lang-select");
    T && T.addEventListener("change", (x) => {
      this._setLanguage(x.target.value);
    }), r.querySelector("#btn-change-profile-picture")?.addEventListener("click", (x) => {
      x.stopPropagation(), I.style.display = "none";
      try {
        window.history.pushState(null, "", "/config/person"), window.dispatchEvent(new CustomEvent("location-changed"));
      } catch {
        window.location.href = "/config/person";
      }
    }), r.querySelector("#btn-dropdown-switch-user")?.addEventListener("click", (x) => {
      x.stopPropagation(), this._switchProfile();
    });
    const z = async (x) => {
      x.stopPropagation(), I.style.display = "none";
      const m = await this._showArgusInputModal({
        title: `🔑 ${this._t("access_pin_lbl") || "Pin perfil Argus"}`,
        label: this._t("enter_new_pin") || "Introduce el nuevo PIN (4 a 8 dígitos):",
        placeholder: "••••",
        type: "password",
        numeric: !0
      });
      if (!(m === null || !m.trim()))
        try {
          if (await this._send("argus/save_user_access_pin", {
            argus_user_id: i.id,
            pin: m.trim()
          }), i.access_pin_configured = !0, this._ui?.users) {
            const w = this._ui.users.findIndex((h) => h.id === i.id);
            w !== -1 && (this._ui.users[w].access_pin_configured = !0);
          }
          await this._showArgusConfirmModal(this._t("pin_updated") || "PIN actualizado exitosamente", { confirmLabel: "OK" }), this._load();
        } catch (w) {
          this._showArgusConfirmModal(w.message || this._format("generic_error", { error: w }), { confirmLabel: "OK" });
        }
    };
    r.querySelector("#btn-dropdown-set-access-pin")?.addEventListener("click", z), r.querySelector("#btn-dropdown-change-access-pin")?.addEventListener("click", z), r.querySelector("#btn-dropdown-remove-access-pin")?.addEventListener("click", async (x) => {
      if (x.stopPropagation(), I.style.display = "none", !!await this._showArgusConfirmModal(
        this._t("confirm_remove_access_pin") || "¿Estás seguro de que deseas eliminar el Pin de perfil Argus?",
        {
          confirmLabel: this._t("remove_btn") || "Eliminar",
          confirmStyle: "background:#ef4444;color:#fff;border:none;box-shadow:0 4px 14px rgba(239,68,68,0.35);"
        }
      ))
        try {
          if (await this._send("argus/save_user_access_pin", {
            argus_user_id: i.id,
            pin: ""
          }), i.access_pin_configured = !1, this._ui?.users) {
            const w = this._ui.users.findIndex((h) => h.id === i.id);
            w !== -1 && (this._ui.users[w].access_pin_configured = !1);
          }
          await this._showArgusConfirmModal(this._t("pin_deleted") || "PIN eliminado", { confirmLabel: "OK" }), this._load();
        } catch (w) {
          this._showArgusConfirmModal(w.message || this._format("generic_error", { error: w }), { confirmLabel: "OK" });
        }
    });
    const C = async (x) => {
      x.stopPropagation(), I.style.display = "none";
      const m = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId;
      let w = "";
      if (b && i.role !== "admin") {
        const v = await this._showArgusInputModal({
          title: `🔑 ${this._t("master_pin_lbl") || "Pin de Armado"}`,
          label: this._t("enter_current_pin") || "Introduce el PIN actual:",
          placeholder: "••••",
          type: "password",
          numeric: !0
        });
        if (v === null) return;
        w = v.trim();
      }
      const h = await this._showArgusInputModal({
        title: `🔑 ${this._t("master_pin_lbl") || "Pin de Armado"}`,
        label: this._t("enter_new_pin") || "Introduce el nuevo PIN (4 a 8 dígitos):",
        placeholder: "••••",
        type: "password",
        numeric: !0
      });
      if (!(h === null || !h.trim()))
        try {
          await this._send("argus/update_master_pin", {
            entry_id: m,
            pin: h.trim(),
            current_pin: w
          }), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !0), await this._showArgusConfirmModal(this._t("pin_updated") || "PIN actualizado exitosamente", { confirmLabel: "OK" }), this._load();
        } catch (v) {
          this._showArgusConfirmModal(v.message || this._format("generic_error", { error: v }), { confirmLabel: "OK" });
        }
    };
    r.querySelector("#btn-dropdown-set-master-pin")?.addEventListener("click", C), r.querySelector("#btn-dropdown-change-master-pin")?.addEventListener("click", C), r.querySelector("#btn-dropdown-remove-master-pin")?.addEventListener("click", async (x) => {
      x.stopPropagation(), I.style.display = "none";
      const m = this._dashboard?.entries?.[0]?.entry_id || this._dashboard?.entry_id || this._modeEntryId;
      let w = "";
      if (b && i.role !== "admin") {
        const v = await this._showArgusInputModal({
          title: `🔑 ${this._t("master_pin_lbl") || "Pin de Armado"}`,
          label: this._t("enter_current_pin") || "Introduce el PIN actual para confirmar eliminación:",
          placeholder: "••••",
          type: "password",
          numeric: !0
        });
        if (v === null) return;
        w = v.trim();
      }
      if (await this._showArgusConfirmModal(
        this._t("confirm_remove_master_pin") || "¿Estás seguro de que deseas eliminar el Pin de Armado del sistema?",
        {
          confirmLabel: this._t("remove_btn") || "Eliminar",
          confirmStyle: "background:#ef4444;color:#fff;border:none;box-shadow:0 4px 14px rgba(239,68,68,0.35);"
        }
      ))
        try {
          await this._send("argus/update_master_pin", {
            entry_id: m,
            pin: "",
            current_pin: w
          }), this._dashboard?.entries?.[0] && (this._dashboard.entries[0].pin_configured = !1), await this._showArgusConfirmModal(this._t("pin_deleted") || "PIN eliminado", { confirmLabel: "OK" }), this._load();
        } catch (v) {
          this._showArgusConfirmModal(v.message || this._format("generic_error", { error: v }), { confirmLabel: "OK" });
        }
    }), r.querySelector("#btn-dropdown-edit-home-name")?.addEventListener("click", (x) => {
      x.stopPropagation(), I.style.display = "none", this._editHomeName();
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
      r = ((await this._send("argus/get_ha_persons", {}))?.ha_persons ?? []).filter((f) => f.entity_id).map((f) => {
        const g = this._hass?.states?.[f.entity_id];
        return {
          name: f.name || f.entity_id,
          url: g?.attributes?.entity_picture || null
        };
      }).filter((f) => f.url);
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
    const a = r.map((d, u) => `
      <div data-pic-url="${this._escapeHtml(d.url)}" data-pic-idx="${u}"
           style="display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; padding:10px; border-radius:12px; border:2px solid transparent; transition:border-color 0.15s;"
           class="ha-pic-option">
        <img src="${this._escapeHtml(d.url)}" alt="${this._escapeHtml(d.name)}"
             style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.15); box-shadow:0 4px 14px rgba(0,0,0,0.3);" />
        <span style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.7); max-width:72px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${this._escapeHtml(d.name)}</span>
      </div>
    `).join("");
    i.innerHTML = `
      <div style="background:rgba(30,32,48,0.97); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:24px; width:min(380px,90vw); color:#fff;">
        <h3 style="margin:0 0 4px; font-size:1.05rem; font-weight:800;">📸 ${this._escapeHtml(this._t("change_profile_picture") || "Cambiar imagen de perfil")}</h3>
        <p style="margin:0 0 16px; font-size:0.78rem; color:rgba(255,255,255,0.5);">${this._escapeHtml(this._t("change_picture_desc") || "Elige una foto de tus personas de HA o dirígete al perfil de HA para subir una nueva.")}</p>

        ${r.length ? `
          <div style="font-size:11px; font-weight:700; opacity:0.6; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">${this._escapeHtml(this._t("ha_persons_title") || "Personas de Home Assistant")}</div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
            ${a}
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
    i.querySelectorAll(".ha-pic-option").forEach((d) => {
      d.addEventListener("mouseenter", () => d.style.borderColor = "rgba(255,255,255,0.4)"), d.addEventListener("mouseleave", () => d.style.borderColor = "transparent"), d.addEventListener("click", async () => {
        const u = d.getAttribute("data-pic-url");
        if (u) {
          s.textContent = "⏳ Guardando...";
          try {
            await this._send("argus/save_ui", {
              profile_picture: u
            }), s.style.color = "#34c759", s.textContent = "✅ Imagen actualizada. Recarga para verla.", setTimeout(() => {
              i.remove(), this._renderEntries(), this._renderModeTabs(), this._renderModeView(), this._renderEntries(), this.dispatchEvent(new CustomEvent("argus-state-update")), this._renderAutomations(), this._renderNotifications(), this._updateHeroProfileDisplay(), this._updateProfileBadge();
            }, 1200);
          } catch (f) {
            s.style.color = "#ff453a", s.textContent = "❌ " + (f.message || "Error al guardar");
          }
        }
      });
    }), i.querySelector("#modal-pic-cancel").addEventListener("click", () => i.remove()), i.addEventListener("click", (d) => {
      d.target === i && i.remove();
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
    const i = this._hass?.user?.name || "Admin", a = this._getCurrentLangCode(), s = {
      es: ["Bienvenido a Argus Home Hub", "Protección inteligente para lo que más importa."],
      en: ["Welcome to Argus Home Hub", "Smart protection for what matters most."]
    }[a] || ["Welcome to Argus Home Hub", "Smart protection for what matters most."], d = () => {
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
    const u = this.shadowRoot.getElementById("tab-setup-fresh"), f = this.shadowRoot.getElementById("tab-setup-restore"), g = this.shadowRoot.getElementById("view-setup-fresh"), _ = this.shadowRoot.getElementById("view-setup-restore");
    u?.addEventListener("click", () => {
      u.style.background = "rgba(255,255,255,0.15)", u.style.color = "#fff", f.style.background = "transparent", f.style.color = "rgba(255,255,255,0.6)", g.style.display = "block", _.style.display = "none";
    }), f?.addEventListener("click", () => {
      f.style.background = "rgba(255,255,255,0.15)", f.style.color = "#fff", u.style.background = "transparent", u.style.color = "rgba(255,255,255,0.6)", _.style.display = "block", g.style.display = "none";
    }), this.shadowRoot.getElementById("skip-access-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-access-pin").value = "";
    }), this.shadowRoot.getElementById("skip-master-pin")?.addEventListener("click", () => {
      this.shadowRoot.getElementById("setup-master-pin").value = "";
    }), this.shadowRoot.getElementById("btn-complete-setup")?.addEventListener("click", async () => {
      const k = this.shadowRoot.getElementById("setup-admin-name").value || i, I = this.shadowRoot.getElementById("setup-master-pin").value || void 0, T = this.shadowRoot.getElementById("setup-access-pin").value || void 0;
      try {
        await this._send("argus/complete_first_run", { admin_name: k, master_pin: I, access_pin: T }), d();
      } catch (z) {
        alert("Setup failed: " + z.message);
      }
    });
    const S = this.shadowRoot.getElementById("setup-restore-file"), b = this.shadowRoot.getElementById("restore-status");
    this.shadowRoot.getElementById("btn-trigger-restore")?.addEventListener("click", () => {
      S?.click();
    }), S?.addEventListener("change", (k) => {
      const I = k.target.files?.[0];
      if (!I) return;
      b && (b.textContent = "Procesando copia de seguridad...");
      const T = new FileReader();
      T.onload = async (z) => {
        try {
          let C = JSON.parse(z.target.result);
          if (C?.format === "argus-encrypted-backup") {
            const x = await this._showArgusInputModal({
              title: "Copia de seguridad cifrada",
              label: "Introduce la contraseña del backup:",
              type: "password"
            });
            if (!x) {
              b && (b.textContent = "Restauración cancelada.");
              return;
            }
            try {
              const m = this._base64ToBytes(C.salt), w = this._base64ToBytes(C.iv), h = await this._backupKey(x, m, ["decrypt"]), v = await crypto.subtle.decrypt({ name: "AES-GCM", iv: w }, h, this._base64ToBytes(C.data));
              C = JSON.parse(new TextDecoder().decode(v));
            } catch {
              throw new Error("Contraseña de copia de seguridad incorrecta.");
            }
          }
          if (typeof C != "object" || C === null)
            throw new Error(this._t("invalid_config"));
          await this._send("argus/restore_config", { config: C }), b && (b.textContent = "✅ Copia de seguridad restaurada con éxito."), d();
        } catch (C) {
          b && (b.textContent = "❌ Error al restaurar: " + (C.message || C));
        }
      }, T.onerror = () => {
        b && (b.textContent = "❌ Error al leer el archivo.");
      }, T.readAsText(I);
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
        let a = [];
        try {
          const b = await this._send("argus/get_profiles", {});
          a = b?.profiles ?? b?.users ?? r?.users ?? [];
        } catch {
          a = this._config?.profiles ?? r?.users ?? [];
        }
        if (!a.length) return;
        a = a.map((b) => ({
          ...b,
          display_name: b.display_name || b.name,
          picture: b.picture || null
        }));
        const s = this.shadowRoot.getElementById("bootstrap-overlay");
        s && (s.style.display = "none"), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-welcome-screen").forEach((b) => b.remove());
        const d = document.createElement("div");
        d.className = "argus-profile-overlay";
        const u = `
      <div class="argus-profile-header">
        <h2>${this._escapeHtml(i("select_profile_title"))}</h2>
        <p>${this._escapeHtml(i("select_profile_subtitle"))}</p>
      </div>
    `, g = `
      <div class="argus-profile-grid">
        ${a.map((b) => {
          const k = b.is_own_profile === !0, I = b.access_pin_configured === !0, T = b.role === "admin" ? i("role_argus_admin") : i("role_argus_standard"), z = b.picture ? `<img src="${this._escapeHtml(b.picture)}" alt="" />` : this._escapeHtml(b.name.substring(0, 2).toUpperCase()), C = I ? '<div class="lock-badge">🔒</div>' : "";
          return `
        <div class="argus-profile-item" tabindex="0"
             data-user-id="${this._escapeHtml(b.id)}"
             data-is-own="${k ? "true" : "false"}"
             data-requires-pin="${I ? "true" : "false"}">
          
          <div class="argus-profile-circle">
            ${z}
            ${C}
          </div>
          <div class="argus-profile-label">
            <div class="p-name">${this._escapeHtml(b.name)}</div>
            <div class="p-role">${this._escapeHtml(T)}</div>
          </div>
        </div>
      `;
        }).join("")}
      </div>
    `, _ = `
      <button id="argus-exit-ha" style="
        position: absolute; bottom: 40px;
        background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff;
        padding: 12px 24px; border-radius: 20px; color: #fff; cursor: pointer;
        font-size: 0.9rem; font-weight: 600; transition: background 0.2s;
      ">
        ← ${this._escapeHtml(i("exit_to_ha"))}
      </button>
    `;
        d.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        ${u}
        ${g}
      </div>
      ${_}
    `, this.shadowRoot.appendChild(d), d.querySelector("#argus-exit-ha").addEventListener("click", () => {
          window.location.assign("/");
        }), d.querySelectorAll(".argus-profile-item").forEach((b) => {
          b.addEventListener("click", async () => {
            if (d.dataset.processing) return;
            d.dataset.processing = "1";
            const k = b.getAttribute("data-user-id"), I = b.getAttribute("data-is-own") === "true", T = b.getAttribute("data-requires-pin") === "true", z = a.find((C) => C.id === k);
            if (I)
              if (T)
                d.remove(), this._showTvOSPinPrompt(z);
              else
                try {
                  await this._send("argus/select_profile", { argus_user_id: k }), d.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(z);
                } catch (C) {
                  d.dataset.processing = "", alert(C.message || "Error seleccionando perfil");
                }
            else {
              if (!T) {
                const C = b;
                C.style.animation = "none", C.offsetHeight, C.style.animation = "argus-shake 0.3s ease", d.dataset.processing = "";
                return;
              }
              d.remove(), this._showTvOSPinPrompt(z);
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
    const i = (_) => this._t(_), a = document.createElement("div");
    a.className = "argus-pin-prompt", a.innerHTML = `
      <div class="argus-pin-card">
        <h3>${this._escapeHtml(i("profile_needs_pin"))}</h3>
        <div class="pin-sub">Ingresa el PIN de ${this._escapeHtml(r.name)}</div>
        
        <input type="password" id="pin-input" class="argus-pin-input" readonly
               placeholder="••••" inputmode="numeric" />
               
        <div class="argus-numpad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_) => `<button data-digit="${_}">${_}</button>`).join("")}
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
    `, this.shadowRoot.appendChild(a);
    const s = a.querySelector("#pin-input"), d = a.querySelector("#pin-error"), u = a.querySelector(".argus-pin-card"), f = a.querySelector(".argus-numpad");
    f.querySelectorAll("[data-digit]").forEach((_) => {
      const S = _.getAttribute("data-digit");
      _.addEventListener("click", () => {
        s.value.length < 8 && (s.value += S);
      });
    }), f.querySelector("#pin-del").addEventListener("click", () => {
      s.value = s.value.slice(0, -1);
    }), a.querySelector("#pin-enter").addEventListener("click", () => g()), a.querySelector("#pin-cancel").addEventListener("click", () => {
      a.remove(), this._renderLoginScreen({ users: this._config?.profiles || [] });
    });
    const g = async () => {
      if (!a.dataset.processing) {
        if (a.dataset.processing = "1", !s.value) {
          a.dataset.processing = "";
          return;
        }
        try {
          await this._send("argus/verify_access_pin", {
            argus_user_id: r.id,
            pin: s.value
          }), a.remove(), this._profileSelectedThisMount = !0, await this._runProfileWelcomeAnimation(r);
        } catch (_) {
          a.dataset.processing = "", d.textContent = _.message || i("invalid_pin_msg"), u.style.animation = "none", u.offsetHeight, u.style.animation = "argus-shake 0.3s ease", s.value = "";
        }
      }
    };
    s.addEventListener("keydown", (_) => {
      _.key === "Enter" && g();
    });
  }
  async _runProfileWelcomeAnimation(r) {
    this._currentProfile = r, this._updateHeroProfileDisplay();
    const i = this.shadowRoot.getElementById("hero-profile-avatar") || this.shadowRoot.querySelector("#hero-profile-container .user-avatar") || this.shadowRoot.querySelector("#hero-profile-container img") || this.shadowRoot.querySelector("#hero-profile-container .hero-profile-pill");
    i && (i.style.opacity = "0", i.style.transition = "opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"), this.shadowRoot.querySelector(".wrap")?.classList.add("wrap-ready");
    const a = document.createElement("div");
    a.className = "argus-welcome-screen active-anim", a.style.position = "fixed", a.style.inset = "0", a.style.background = "rgba(0,0,0,0.88)", a.style.display = "flex", a.style.flexDirection = "column", a.style.alignItems = "center", a.style.justifyContent = "center", a.style.zIndex = "10000", a.style.pointerEvents = "none";
    const s = r.picture ? `<img src="${this._escapeHtml(r.picture)}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />` : this._escapeHtml(r.name.substring(0, 2).toUpperCase());
    a.innerHTML = `
      <div class="argus-welcome-avatar" id="welcome-avatar-flying">
        ${s}
      </div>
      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t("welcome_greeting") || "Bienvenido,")}</p>
        <h1 class="wname">${this._escapeHtml(r.display_name || r.name)}</h1>
      </div>
    `, this.shadowRoot.appendChild(a), await new Promise((g) => requestAnimationFrame(g)), this.shadowRoot.querySelectorAll(".argus-profile-overlay, .argus-pin-prompt").forEach((g) => g.remove());
    let d = Promise.resolve();
    this._dashboardLoading || (this._dashboardLoading = !0, d = this._load().catch((g) => console.error("Load error during animation:", g)).finally(() => {
      this._dashboardLoading = !1;
    }));
    const u = a.querySelector("#welcome-avatar-flying"), f = a.querySelector("#welcome-text-anim");
    if (u && f) {
      u.style.transform = "scale(0.8)", u.style.opacity = "0", f.style.opacity = "0", f.style.transform = "translateY(15px)", await new Promise((z) => requestAnimationFrame(z)), u.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease", u.style.transform = "scale(1)", u.style.opacity = "1", f.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.5s ease 0.15s", f.style.transform = "translateY(0)", f.style.opacity = "1", await new Promise((z) => setTimeout(z, 1300)), await d, f.style.transition = "opacity 0.25s ease", f.style.opacity = "0";
      const g = u.getBoundingClientRect(), _ = this.shadowRoot.getElementById("hero-profile-avatar") || this.shadowRoot.querySelector("#hero-profile-container .user-avatar") || this.shadowRoot.querySelector("#hero-profile-container img") || this.shadowRoot.querySelector("#hero-profile-container .hero-profile-pill");
      let S = window.innerWidth / 2, b = 60, k = 0.35;
      if (_) {
        const z = _.getBoundingClientRect();
        z.width > 0 && z.height > 0 && (S = z.left + z.width / 2, b = z.top + z.height / 2, k = Math.max(0.2, z.width / g.width));
      }
      const I = S - (g.left + g.width / 2), T = b - (g.top + g.height / 2);
      u.style.transition = "transform 0.65s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 0.35s ease 0.45s", u.style.transform = `translate(${I}px, ${T}px) scale(${k})`, a.style.transition = "background-color 0.55s ease 0.1s", a.style.backgroundColor = "transparent", await new Promise((z) => setTimeout(z, 650)), _ && (_.style.opacity = "1", _.style.transform = "scale(1.1)", setTimeout(() => {
        _ && (_.style.transform = "scale(1)");
      }, 180));
    }
    await new Promise((g) => setTimeout(g, 120)), await d, this._nukeAllLoginOverlays();
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
      (a) => a.classList.contains("panel") && !a.classList.contains("dashboard-instances")
    );
    i.forEach((a) => {
      const s = a.id.replace("w-", "");
      if (!a.querySelector(".panel-edit-overlay")) {
        const d = document.createElement("div");
        d.className = "panel-edit-overlay";
        const u = document.createElement("div");
        u.className = "widget-controls";
        const f = document.createElement("div");
        f.className = "widget-controls-title";
        const g = a.querySelector("h2")?.textContent;
        f.textContent = g ? `Widget: ${g}` : `Widget: ${s.toUpperCase()}`, u.appendChild(f);
        const _ = document.createElement("div");
        _.className = "widget-drag-handle", _.innerHTML = "⋮⋮ Arrastrar", _.title = "Arrastrar para mover";
        const S = document.createElement("div");
        S.className = "widget-sizes", ["S", "M", "L", "XL"].forEach((k) => {
          const I = document.createElement("button");
          I.className = "widget-size-btn", I.textContent = k, I.dataset.size = k, I.addEventListener("click", (T) => {
            T.stopPropagation(), T.preventDefault(), this._changeWidgetSize(s, k);
          }), S.appendChild(I);
        });
        const b = document.createElement("button");
        b.className = "widget-toggle-btn", b.textContent = "Ocultar", b.addEventListener("click", (k) => {
          k.stopPropagation(), k.preventDefault(), this._toggleWidgetVisibility(s);
        }), u.appendChild(_), u.appendChild(S), u.appendChild(b), d.appendChild(u), a.appendChild(d);
      }
    }), this._renderWidgetLayout(), this._bindWidgetDragEvents(i);
  }
  _renderWidgetLayout() {
    const r = this.shadowRoot.getElementById("widget-grid");
    if (!r) return;
    const i = new Map((this._widgetConfig || []).map((s, d) => [s.id, { ...s, idx: d }])), a = Array.from(r.children).filter(
      (s) => s.classList.contains("panel") && !s.classList.contains("dashboard-instances")
    );
    a.sort((s, d) => {
      const u = i.get(s.id.replace("w-", "")) || { idx: 99 }, f = i.get(d.id.replace("w-", "")) || { idx: 99 };
      return u.idx - f.idx;
    }), a.forEach((s) => {
      r.appendChild(s);
      const d = s.id.replace("w-", ""), u = i.get(d);
      if (u) {
        s.setAttribute("data-size", u.size), s.style.display = u.hidden ? "none" : "";
        const f = s.querySelector(".panel-edit-overlay");
        if (f) {
          f.querySelectorAll(".widget-size-btn").forEach((_) => {
            _.classList.toggle("active", _.dataset.size === u.size);
          });
          const g = f.querySelector(".widget-toggle-btn");
          g && (g.textContent = u.hidden ? "Mostrar" : "Ocultar", g.style.background = u.hidden ? "rgba(52,199,89,.85)" : "rgba(220,38,38,.85)");
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
      s._dragBound || (s._dragBound = !0, s.addEventListener("dragstart", (d) => {
        if (!this._widgetEditing) {
          d.preventDefault();
          return;
        }
        s.classList.add("dragging"), d.dataTransfer.setData("text/plain", s.id), d.dataTransfer.effectAllowed = "move";
      }), s.addEventListener("dragend", () => {
        s.classList.remove("dragging"), this._saveWidgetLayout();
      }), s.addEventListener("dragover", (d) => {
        if (!this._widgetEditing) return;
        d.preventDefault();
        const u = i.querySelector(".dragging");
        if (!u || u === s) return;
        const f = s.getBoundingClientRect();
        d.clientY - f.top > f.height / 2 ? s.after(u) : s.before(u);
      }));
    });
  }
  _saveWidgetLayout() {
    const r = this.shadowRoot.getElementById("widget-grid");
    if (!r) return;
    const i = Array.from(r.children).filter(
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
  _changeWidgetSize(r, i) {
    const a = (this._widgetConfig || []).find((s) => s.id === r);
    a && (a.size = i, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
  _toggleWidgetVisibility(r) {
    const i = (this._widgetConfig || []).find((a) => a.id === r);
    i && (i.hidden = !i.hidden, this._saveWidgetLayout(), this._renderWidgetLayout());
  }
}
customElements.define("argus-panel-v2018", Du);
try {
  customElements.get("argus-panel") || customElements.define("argus-panel", Du);
} catch {
}
const Mu = "2.2.93";
console.info(
  `%c🛡️ ARGUS ALARM CARD %c v${Mu} `,
  "color:white;background:#0a1628;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;",
  "color:#0a1628;background:#38bdf8;font-weight:700;padding:4px 8px;border-radius:0 4px 4px 0;"
);
function Nd(c) {
  if (!c?.states) return null;
  const r = Object.values(c.states);
  return (r.find(
    (a) => a.entity_id?.startsWith("alarm_control_panel.") && (a.attributes?.argus_version || a.attributes?.argus_entry_id || a.entity_id.includes("argus"))
  ) || r.find((a) => a.entity_id?.startsWith("alarm_control_panel.")))?.entity_id || null;
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
class Yf extends HTMLElement {
  setConfig(r) {
    this._config = r;
  }
  set hass(r) {
    this._hass = r, this._render();
  }
  _render() {
    if (!this._hass) return;
    const r = this._config?.entity || "", i = this._config?.mode || "compact", a = Object.keys(this._hass.states || {}).filter((s) => s.startsWith("alarm_control_panel."));
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
            ${a.map((s) => `<option value="${s}" ${s === r ? "selected" : ""}>${s}</option>`).join("")}
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
customElements.define("argus-panel-card-editor", Yf);
class $u extends HTMLElement {
  static getStubConfig(r) {
    return { entity: Nd(r) || "alarm_control_panel.argus", mode: "compact", title: "Argus Security" };
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
        :host { display: block; width: 100%; box-sizing: border-box; }
        ha-card {
          border-radius: 28px !important;
          background: linear-gradient(135deg, rgba(16, 23, 38, 0.96) 0%, rgba(10, 15, 26, 0.98) 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.14) !important;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;
          backdrop-filter: blur(28px) saturate(160%) !important;
          -webkit-backdrop-filter: blur(28px) saturate(160%) !important;
          color: #ffffff !important;
          position: relative;
          --ha-card-border-radius: 28px;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden !important;
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
          z-index: 99999999 !important;
          border-radius: 0 !important;
          width: 100vw !important;
          width: 100dvw !important;
          height: 100vh !important;
          height: 100dvh !important;
          max-width: 100vw !important;
          max-height: 100dvh !important;
          overflow: auto !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;
          border: none !important;
          box-shadow: none !important;
        }
        :host(.argus-fullscreen) .argus-panel-host {
          min-height: 100dvh;
          height: 100dvh;
          width: 100vw;
          width: 100dvw;
          overflow: auto;
        }
        @media (max-width: 600px) {
          .argus-panel-host { min-height: 340px; }
        }
      </style>
      <ha-card>
        <div class="argus-panel-host" id="panel-host"></div>
      </ha-card>`, this._fsBtn = r.getElementById("fs-btn"), this._panelHost = r.getElementById("panel-host"), this._fsBtn && this._fsBtn.addEventListener("click", () => this._toggleFullscreen()), document.addEventListener("keydown", (i) => {
      i.key === "Escape" && this._fullscreen && this._exitFullscreen();
    });
  }
  set hass(r) {
    if (this._hass = r, !this._config.entity || this._config.entity === "alarm_control_panel.argus") {
      const i = Nd(r);
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
      if (this._panelHost.appendChild(this._panelEl), this._panelEl.addEventListener("argus-fullscreen-changed", (i) => {
        i.detail?.fullscreen ? this._enterFullscreen() : this._exitFullscreen();
      }), this._hass)
        try {
          this._panelEl.hass = this._hass;
        } catch {
        }
    }
  }
  _renderBasicCard() {
    if (!this._panelHost || !this._hass) return;
    this._panelMounted = !1;
    const r = String(this._hass?.language || "en").split("-")[0], i = Od[r] || Od.en, s = this._hass.states[this._config.entity]?.state || "unavailable", d = Object.values(this._hass?.states || {}), u = this._config.weather_entity ? this._hass.states[this._config.weather_entity] : d.find((v) => v.entity_id?.startsWith("weather.") && !["unknown", "unavailable"].includes(v.state)), f = Number(u?.attributes?.temperature), g = {
      state: String(u?.state || "unavailable").toLowerCase(),
      temp: Number.isFinite(f) ? Math.round(f) : "—",
      unit: Number.isFinite(f) ? String(u?.attributes?.temperature_unit || "") : "",
      night: this._hass?.states?.["sun.sun"]?.state === "below_horizon"
    }, _ = this._hass?.config || {}, S = [];
    _.location_name && !/^(home|casa|hogar)$/i.test(_.location_name) && S.push(_.location_name), _.country && S.push(_.country);
    const b = S.length ? S.join(", ") : i.unknown, k = this._config.title || i.title, I = g.state, T = /thunder|storm|lightning/.test(I), z = /rain|pouring|drizzle|shower/.test(I), C = /snow/.test(I), x = /fog|mist|hazy/.test(I), m = /cloud|overcast/.test(I), w = [g.night ? "night" : "day", T ? "storm" : z ? "rain" : C ? "snow" : x ? "fog" : m ? "cloud" : "clear"].join(" "), h = new Intl.DateTimeFormat(this._hass.language || void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date());
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
        <div class="basic-scene ${bn(w)}"></div>
        <div class="basic-vignette"></div>
        <div class="basic-hud"><span>${bn(b)}</span><span class="basic-weather">${bn(h)} · ${bn(g.temp)}${bn(g.unit)}</span></div>
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
        <div class="basic-title">${bn(k)} · v${Mu}</div>
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
    this._fullscreen = !0, this.classList.add("argus-fullscreen"), this._fsBtn && (this._fsBtn.textContent = "✕", this._fsBtn.title = "Salir de pantalla completa"), document.body.style.overflow = "hidden";
  }
  _exitFullscreen() {
    this._fullscreen = !1, this.classList.remove("argus-fullscreen"), this._fsBtn && (this._fsBtn.textContent = "⛶", this._fsBtn.title = "Pantalla completa"), document.body.style.overflow = "";
  }
  getCardSize() {
    return 6;
  }
  getGridOptions() {
    return {
      columns: 12,
      rows: "auto",
      min_columns: 3,
      min_rows: 2
    };
  }
  getLayoutOptions() {
    return {
      grid_columns: 4,
      grid_rows: "auto",
      grid_min_columns: 2,
      grid_min_rows: 2
    };
  }
}
customElements.get("argus-panel-card") || customElements.define("argus-panel-card", $u);
customElements.get("argus-card") || customElements.define("argus-card", class extends $u {
});
window.customCards = window.customCards || [];
const Hu = new Set(window.customCards.map((c) => c.type));
Hu.has("argus-panel-card") || window.customCards.push({
  type: "argus-panel-card",
  name: "Argus Security Panel",
  description: "Panel de seguridad Argus — consola Liquid Glass de Instancias Activas, dashboard e historial.",
  preview: !0,
  documentationURL: "https://github.com/Chrisalvir1/Argus"
});
Hu.has("argus-card") || window.customCards.push({
  type: "argus-card",
  name: "Argus Alarm Card",
  description: "Tarjeta de seguridad Argus — consola interactiva de Instancia Activa con Liquid Glass y pantalla completa.",
  preview: !0,
  documentationURL: "https://github.com/Chrisalvir1/Argus"
});
function Kf(c) {
  if (c.__esModule) return c;
  var r = c.default;
  if (typeof r == "function") {
    var i = function a() {
      return this instanceof a ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(c).forEach(function(a) {
    var s = Object.getOwnPropertyDescriptor(c, a);
    Object.defineProperty(i, a, s.get ? s : {
      enumerable: !0,
      get: function() {
        return c[a];
      }
    });
  }), i;
}
var Ps = { exports: {} }, ci = {}, Ls = { exports: {} }, Ne = {};
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
function Xf() {
  if (Td) return Ne;
  Td = 1;
  var c = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), b = Symbol.iterator;
  function k(L) {
    return L === null || typeof L != "object" ? null : (L = b && L[b] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, z = {};
  function C(L, H, ge) {
    this.props = L, this.context = H, this.refs = z, this.updater = ge || I;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(L, H) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, H, "setState");
  }, C.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function x() {
  }
  x.prototype = C.prototype;
  function m(L, H, ge) {
    this.props = L, this.context = H, this.refs = z, this.updater = ge || I;
  }
  var w = m.prototype = new x();
  w.constructor = m, T(w, C.prototype), w.isPureReactComponent = !0;
  var h = Array.isArray, v = Object.prototype.hasOwnProperty, E = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(L, H, ge) {
    var ye, Ce = {}, Ae = null, Te = null;
    if (H != null) for (ye in H.ref !== void 0 && (Te = H.ref), H.key !== void 0 && (Ae = "" + H.key), H) v.call(H, ye) && !R.hasOwnProperty(ye) && (Ce[ye] = H[ye]);
    var te = arguments.length - 2;
    if (te === 1) Ce.children = ge;
    else if (1 < te) {
      for (var fe = Array(te), ze = 0; ze < te; ze++) fe[ze] = arguments[ze + 2];
      Ce.children = fe;
    }
    if (L && L.defaultProps) for (ye in te = L.defaultProps, te) Ce[ye] === void 0 && (Ce[ye] = te[ye]);
    return { $$typeof: c, type: L, key: Ae, ref: Te, props: Ce, _owner: E.current };
  }
  function V(L, H) {
    return { $$typeof: c, type: L.type, key: H, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function Y(L) {
    return typeof L == "object" && L !== null && L.$$typeof === c;
  }
  function F(L) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(ge) {
      return H[ge];
    });
  }
  var Q = /\/+/g;
  function ee(L, H) {
    return typeof L == "object" && L !== null && L.key != null ? F("" + L.key) : H.toString(36);
  }
  function se(L, H, ge, ye, Ce) {
    var Ae = typeof L;
    (Ae === "undefined" || Ae === "boolean") && (L = null);
    var Te = !1;
    if (L === null) Te = !0;
    else switch (Ae) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case c:
          case r:
            Te = !0;
        }
    }
    if (Te) return Te = L, Ce = Ce(Te), L = ye === "" ? "." + ee(Te, 0) : ye, h(Ce) ? (ge = "", L != null && (ge = L.replace(Q, "$&/") + "/"), se(Ce, H, ge, "", function(ze) {
      return ze;
    })) : Ce != null && (Y(Ce) && (Ce = V(Ce, ge + (!Ce.key || Te && Te.key === Ce.key ? "" : ("" + Ce.key).replace(Q, "$&/") + "/") + L)), H.push(Ce)), 1;
    if (Te = 0, ye = ye === "" ? "." : ye + ":", h(L)) for (var te = 0; te < L.length; te++) {
      Ae = L[te];
      var fe = ye + ee(Ae, te);
      Te += se(Ae, H, ge, fe, Ce);
    }
    else if (fe = k(L), typeof fe == "function") for (L = fe.call(L), te = 0; !(Ae = L.next()).done; ) Ae = Ae.value, fe = ye + ee(Ae, te++), Te += se(Ae, H, ge, fe, Ce);
    else if (Ae === "object") throw H = String(L), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function le(L, H, ge) {
    if (L == null) return L;
    var ye = [], Ce = 0;
    return se(L, ye, "", "", function(Ae) {
      return H.call(ge, Ae, Ce++);
    }), ye;
  }
  function ne(L) {
    if (L._status === -1) {
      var H = L._result;
      H = H(), H.then(function(ge) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = ge);
      }, function(ge) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = ge);
      }), L._status === -1 && (L._status = 0, L._result = H);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var ue = { current: null }, Z = { transition: null }, de = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Z, ReactCurrentOwner: E };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ne.Children = { map: le, forEach: function(L, H, ge) {
    le(L, function() {
      H.apply(this, arguments);
    }, ge);
  }, count: function(L) {
    var H = 0;
    return le(L, function() {
      H++;
    }), H;
  }, toArray: function(L) {
    return le(L, function(H) {
      return H;
    }) || [];
  }, only: function(L) {
    if (!Y(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, Ne.Component = C, Ne.Fragment = i, Ne.Profiler = s, Ne.PureComponent = m, Ne.StrictMode = a, Ne.Suspense = g, Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de, Ne.act = W, Ne.cloneElement = function(L, H, ge) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var ye = T({}, L.props), Ce = L.key, Ae = L.ref, Te = L._owner;
    if (H != null) {
      if (H.ref !== void 0 && (Ae = H.ref, Te = E.current), H.key !== void 0 && (Ce = "" + H.key), L.type && L.type.defaultProps) var te = L.type.defaultProps;
      for (fe in H) v.call(H, fe) && !R.hasOwnProperty(fe) && (ye[fe] = H[fe] === void 0 && te !== void 0 ? te[fe] : H[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1) ye.children = ge;
    else if (1 < fe) {
      te = Array(fe);
      for (var ze = 0; ze < fe; ze++) te[ze] = arguments[ze + 2];
      ye.children = te;
    }
    return { $$typeof: c, type: L.type, key: Ce, ref: Ae, props: ye, _owner: Te };
  }, Ne.createContext = function(L) {
    return L = { $$typeof: u, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: d, _context: L }, L.Consumer = L;
  }, Ne.createElement = $, Ne.createFactory = function(L) {
    var H = $.bind(null, L);
    return H.type = L, H;
  }, Ne.createRef = function() {
    return { current: null };
  }, Ne.forwardRef = function(L) {
    return { $$typeof: f, render: L };
  }, Ne.isValidElement = Y, Ne.lazy = function(L) {
    return { $$typeof: S, _payload: { _status: -1, _result: L }, _init: ne };
  }, Ne.memo = function(L, H) {
    return { $$typeof: _, type: L, compare: H === void 0 ? null : H };
  }, Ne.startTransition = function(L) {
    var H = Z.transition;
    Z.transition = {};
    try {
      L();
    } finally {
      Z.transition = H;
    }
  }, Ne.unstable_act = W, Ne.useCallback = function(L, H) {
    return ue.current.useCallback(L, H);
  }, Ne.useContext = function(L) {
    return ue.current.useContext(L);
  }, Ne.useDebugValue = function() {
  }, Ne.useDeferredValue = function(L) {
    return ue.current.useDeferredValue(L);
  }, Ne.useEffect = function(L, H) {
    return ue.current.useEffect(L, H);
  }, Ne.useId = function() {
    return ue.current.useId();
  }, Ne.useImperativeHandle = function(L, H, ge) {
    return ue.current.useImperativeHandle(L, H, ge);
  }, Ne.useInsertionEffect = function(L, H) {
    return ue.current.useInsertionEffect(L, H);
  }, Ne.useLayoutEffect = function(L, H) {
    return ue.current.useLayoutEffect(L, H);
  }, Ne.useMemo = function(L, H) {
    return ue.current.useMemo(L, H);
  }, Ne.useReducer = function(L, H, ge) {
    return ue.current.useReducer(L, H, ge);
  }, Ne.useRef = function(L) {
    return ue.current.useRef(L);
  }, Ne.useState = function(L) {
    return ue.current.useState(L);
  }, Ne.useSyncExternalStore = function(L, H, ge) {
    return ue.current.useSyncExternalStore(L, H, ge);
  }, Ne.useTransition = function() {
    return ue.current.useTransition();
  }, Ne.version = "18.3.1", Ne;
}
var Dd;
function zt() {
  return Dd || (Dd = 1, Ls.exports = Xf()), Ls.exports;
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
var Md;
function Qf() {
  if (Md) return ci;
  Md = 1;
  var c = zt(), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, g, _) {
    var S, b = {}, k = null, I = null;
    _ !== void 0 && (k = "" + _), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (I = g.ref);
    for (S in g) a.call(g, S) && !d.hasOwnProperty(S) && (b[S] = g[S]);
    if (f && f.defaultProps) for (S in g = f.defaultProps, g) b[S] === void 0 && (b[S] = g[S]);
    return { $$typeof: r, type: f, key: k, ref: I, props: b, _owner: s.current };
  }
  return ci.Fragment = i, ci.jsx = u, ci.jsxs = u, ci;
}
var $d;
function Zf() {
  return $d || ($d = 1, Ps.exports = Qf()), Ps.exports;
}
var he = Zf(), Io = {}, Is = { exports: {} }, Ct = {}, Ns = { exports: {} }, Os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function Jf() {
  return Hd || (Hd = 1, function(c) {
    function r(Z, de) {
      var W = Z.length;
      Z.push(de);
      e: for (; 0 < W; ) {
        var L = W - 1 >>> 1, H = Z[L];
        if (0 < s(H, de)) Z[L] = de, Z[W] = H, W = L;
        else break e;
      }
    }
    function i(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function a(Z) {
      if (Z.length === 0) return null;
      var de = Z[0], W = Z.pop();
      if (W !== de) {
        Z[0] = W;
        e: for (var L = 0, H = Z.length, ge = H >>> 1; L < ge; ) {
          var ye = 2 * (L + 1) - 1, Ce = Z[ye], Ae = ye + 1, Te = Z[Ae];
          if (0 > s(Ce, W)) Ae < H && 0 > s(Te, Ce) ? (Z[L] = Te, Z[Ae] = W, L = Ae) : (Z[L] = Ce, Z[ye] = W, L = ye);
          else if (Ae < H && 0 > s(Te, W)) Z[L] = Te, Z[Ae] = W, L = Ae;
          else break e;
        }
      }
      return de;
    }
    function s(Z, de) {
      var W = Z.sortIndex - de.sortIndex;
      return W !== 0 ? W : Z.id - de.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      c.unstable_now = function() {
        return d.now();
      };
    } else {
      var u = Date, f = u.now();
      c.unstable_now = function() {
        return u.now() - f;
      };
    }
    var g = [], _ = [], S = 1, b = null, k = 3, I = !1, T = !1, z = !1, C = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function w(Z) {
      for (var de = i(_); de !== null; ) {
        if (de.callback === null) a(_);
        else if (de.startTime <= Z) a(_), de.sortIndex = de.expirationTime, r(g, de);
        else break;
        de = i(_);
      }
    }
    function h(Z) {
      if (z = !1, w(Z), !T) if (i(g) !== null) T = !0, ne(v);
      else {
        var de = i(_);
        de !== null && ue(h, de.startTime - Z);
      }
    }
    function v(Z, de) {
      T = !1, z && (z = !1, x($), $ = -1), I = !0;
      var W = k;
      try {
        for (w(de), b = i(g); b !== null && (!(b.expirationTime > de) || Z && !F()); ) {
          var L = b.callback;
          if (typeof L == "function") {
            b.callback = null, k = b.priorityLevel;
            var H = L(b.expirationTime <= de);
            de = c.unstable_now(), typeof H == "function" ? b.callback = H : b === i(g) && a(g), w(de);
          } else a(g);
          b = i(g);
        }
        if (b !== null) var ge = !0;
        else {
          var ye = i(_);
          ye !== null && ue(h, ye.startTime - de), ge = !1;
        }
        return ge;
      } finally {
        b = null, k = W, I = !1;
      }
    }
    var E = !1, R = null, $ = -1, V = 5, Y = -1;
    function F() {
      return !(c.unstable_now() - Y < V);
    }
    function Q() {
      if (R !== null) {
        var Z = c.unstable_now();
        Y = Z;
        var de = !0;
        try {
          de = R(!0, Z);
        } finally {
          de ? ee() : (E = !1, R = null);
        }
      } else E = !1;
    }
    var ee;
    if (typeof m == "function") ee = function() {
      m(Q);
    };
    else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(), le = se.port2;
      se.port1.onmessage = Q, ee = function() {
        le.postMessage(null);
      };
    } else ee = function() {
      C(Q, 0);
    };
    function ne(Z) {
      R = Z, E || (E = !0, ee());
    }
    function ue(Z, de) {
      $ = C(function() {
        Z(c.unstable_now());
      }, de);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, c.unstable_continueExecution = function() {
      T || I || (T = !0, ne(v));
    }, c.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, c.unstable_getFirstCallbackNode = function() {
      return i(g);
    }, c.unstable_next = function(Z) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = k;
      }
      var W = k;
      k = de;
      try {
        return Z();
      } finally {
        k = W;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(Z, de) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var W = k;
      k = Z;
      try {
        return de();
      } finally {
        k = W;
      }
    }, c.unstable_scheduleCallback = function(Z, de, W) {
      var L = c.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? L + W : L) : W = L, Z) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = W + H, Z = { id: S++, callback: de, priorityLevel: Z, startTime: W, expirationTime: H, sortIndex: -1 }, W > L ? (Z.sortIndex = W, r(_, Z), i(g) === null && Z === i(_) && (z ? (x($), $ = -1) : z = !0, ue(h, W - L))) : (Z.sortIndex = H, r(g, Z), T || I || (T = !0, ne(v))), Z;
    }, c.unstable_shouldYield = F, c.unstable_wrapCallback = function(Z) {
      var de = k;
      return function() {
        var W = k;
        k = de;
        try {
          return Z.apply(this, arguments);
        } finally {
          k = W;
        }
      };
    };
  }(Os)), Os;
}
var Bd;
function eg() {
  return Bd || (Bd = 1, Ns.exports = Jf()), Ns.exports;
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
function tg() {
  if (jd) return Ct;
  jd = 1;
  var c = zt(), r = eg();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), s = {};
  function d(e, t) {
    u(e, t), u(e + "Capture", t);
  }
  function u(e, t) {
    for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, _ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, b = {};
  function k(e) {
    return g.call(b, e) ? !0 : g.call(S, e) ? !1 : _.test(e) ? b[e] = !0 : (S[e] = !0, !1);
  }
  function I(e, t, n, o) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, o) {
    if (t === null || typeof t > "u" || I(e, t, n, o)) return !0;
    if (o) return !1;
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
  function z(e, t, n, o, l, p, y) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
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
  var x = /[\-:]([a-z])/g;
  function m(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      x,
      m
    );
    C[t] = new z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(x, m);
    C[t] = new z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(x, m);
    C[t] = new z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    C[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), C.xlinkHref = new z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    C[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function w(e, t, n, o) {
    var l = C.hasOwnProperty(t) ? C[t] : null;
    (l !== null ? l.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (T(t, n, l, o) && (n = null), o || l === null ? k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, o = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))));
  }
  var h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = Symbol.for("react.element"), E = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), F = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object" ? null : (e = Z && e[Z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, L;
  function H(e) {
    if (L === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      L = t && t[1] || "";
    }
    return `
` + L + e;
  }
  var ge = !1;
  function ye(e, t) {
    if (!e || ge) return "";
    ge = !0;
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
        } catch (G) {
          var o = G;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (G) {
          o = G;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (G) {
          o = G;
        }
        e();
      }
    } catch (G) {
      if (G && o && typeof G.stack == "string") {
        for (var l = G.stack.split(`
`), p = o.stack.split(`
`), y = l.length - 1, A = p.length - 1; 1 <= y && 0 <= A && l[y] !== p[A]; ) A--;
        for (; 1 <= y && 0 <= A; y--, A--) if (l[y] !== p[A]) {
          if (y !== 1 || A !== 1)
            do
              if (y--, A--, 0 > A || l[y] !== p[A]) {
                var N = `
` + l[y].replace(" at new ", " at ");
                return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
              }
            while (1 <= y && 0 <= A);
          break;
        }
      }
    } finally {
      ge = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? H(e) : "";
  }
  function Ce(e) {
    switch (e.tag) {
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ye(e.type, !1), e;
      case 11:
        return e = ye(e.type.render, !1), e;
      case 1:
        return e = ye(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ae(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case E:
        return "Portal";
      case V:
        return "Profiler";
      case $:
        return "StrictMode";
      case ee:
        return "Suspense";
      case se:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case F:
        return (e.displayName || "Context") + ".Consumer";
      case Y:
        return (e._context.displayName || "Context") + ".Provider";
      case Q:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case le:
        return t = e.displayName || null, t !== null ? t : Ae(e.type) || "Memo";
      case ne:
        t = e._payload, e = e._init;
        try {
          return Ae(e(t));
        } catch {
        }
    }
    return null;
  }
  function Te(e) {
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
        return t === $ ? "StrictMode" : "Mode";
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
  function te(e) {
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
  function fe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ze(e) {
    var t = fe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, p = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(y) {
        o = "" + y, p.call(this, y);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(y) {
        o = "" + y;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Le(e) {
    e._valueTracker || (e._valueTracker = ze(e));
  }
  function Oe(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), o = "";
    return e && (o = fe(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== n ? (t.setValue(e), !0) : !1;
  }
  function je(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ve(e, t) {
    var n = t.checked;
    return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function rt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: o, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function O(e, t) {
    t = t.checked, t != null && w(e, "checked", t, !1);
  }
  function M(e, t) {
    O(e, t);
    var n = te(t.value), o = t.type;
    if (n != null) o === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? X(e, t.type, n) : t.hasOwnProperty("defaultValue") && X(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function B(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function X(e, t, n) {
    (t !== "number" || je(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ce = Array.isArray;
  function ve(e, t, n, o) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && o && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, o && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ee(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Pe(e, t) {
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
    e._wrapperState = { initialValue: te(n) };
  }
  function Ie(e, t) {
    var n = te(t.value), o = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), o != null && (e.defaultValue = "" + o);
  }
  function Ue(e) {
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
  var P, q = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, o, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, o, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (P = P || document.createElement("div"), P.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = P.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  }, pe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(oe).forEach(function(e) {
    pe.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), oe[t] = oe[e];
    });
  });
  function De(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || oe.hasOwnProperty(e) && oe[e] ? ("" + t).trim() : t + "px";
  }
  function Me(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var o = n.indexOf("--") === 0, l = De(n, t[n], o);
      n === "float" && (n = "cssFloat"), o ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Qe = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Vt = null;
  function Lr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gr = null, Ir = null, Zt = null;
  function kn(e) {
    if (e = Vn(e)) {
      if (typeof Gr != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Vi(t), Gr(e.stateNode, e.type, t));
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
  function ki(e, t) {
    return e(t);
  }
  function el() {
  }
  var Go = !1;
  function tl(e, t, n) {
    if (Go) return e(t, n);
    Go = !0;
    try {
      return ki(e, t, n);
    } finally {
      Go = !1, (Ir !== null || Zt !== null) && (el(), Yr());
    }
  }
  function En(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var o = Vi(n);
    if (o === null) return null;
    n = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var Yo = !1;
  if (f) try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", { get: function() {
      Yo = !0;
    } }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
  } catch {
    Yo = !1;
  }
  function Ju(e, t, n, o, l, p, y, A, N) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, G);
    } catch (re) {
      this.onError(re);
    }
  }
  var zn = !1, Si = null, Ei = !1, Ko = null, ep = { onError: function(e) {
    zn = !0, Si = e;
  } };
  function tp(e, t, n, o, l, p, y, A, N) {
    zn = !1, Si = null, Ju.apply(ep, arguments);
  }
  function rp(e, t, n, o, l, p, y, A, N) {
    if (tp.apply(this, arguments), zn) {
      if (zn) {
        var G = Si;
        zn = !1, Si = null;
      } else throw Error(i(198));
      Ei || (Ei = !0, Ko = G);
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
    for (var n = e, o = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var p = l.alternate;
      if (p === null) {
        if (o = l.return, o !== null) {
          n = o;
          continue;
        }
        break;
      }
      if (l.child === p.child) {
        for (p = l.child; p; ) {
          if (p === n) return nl(l), e;
          if (p === o) return nl(l), t;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== o.return) n = l, o = p;
      else {
        for (var y = !1, A = l.child; A; ) {
          if (A === n) {
            y = !0, n = l, o = p;
            break;
          }
          if (A === o) {
            y = !0, o = l, n = p;
            break;
          }
          A = A.sibling;
        }
        if (!y) {
          for (A = p.child; A; ) {
            if (A === n) {
              y = !0, n = p, o = l;
              break;
            }
            if (A === o) {
              y = !0, o = p, n = l;
              break;
            }
            A = A.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (n.alternate !== o) throw Error(i(190));
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
  var al = r.unstable_scheduleCallback, sl = r.unstable_cancelCallback, ip = r.unstable_shouldYield, op = r.unstable_requestPaint, nt = r.unstable_now, ap = r.unstable_getCurrentPriorityLevel, Xo = r.unstable_ImmediatePriority, ll = r.unstable_UserBlockingPriority, Ci = r.unstable_NormalPriority, sp = r.unstable_LowPriority, cl = r.unstable_IdlePriority, zi = null, Gt = null;
  function lp(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ht = Math.clz32 ? Math.clz32 : up, cp = Math.log, dp = Math.LN2;
  function up(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (cp(e) / dp | 0) | 0;
  }
  var Ri = 64, Ai = 4194304;
  function Rn(e) {
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
  function Pi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0, l = e.suspendedLanes, p = e.pingedLanes, y = n & 268435455;
    if (y !== 0) {
      var A = y & ~l;
      A !== 0 ? o = Rn(A) : (p &= y, p !== 0 && (o = Rn(p)));
    } else y = n & ~l, y !== 0 ? o = Rn(y) : p !== 0 && (o = Rn(p));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && !(t & l) && (l = o & -o, p = t & -t, l >= p || l === 16 && (p & 4194240) !== 0)) return t;
    if (o & 4 && (o |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t; ) n = 31 - Ht(t), l = 1 << n, o |= e[n], t &= ~l;
    return o;
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
  function fp(e, t) {
    for (var n = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, p = e.pendingLanes; 0 < p; ) {
      var y = 31 - Ht(p), A = 1 << y, N = l[y];
      N === -1 ? (!(A & n) || A & o) && (l[y] = pp(A, t)) : N <= t && (e.expiredLanes |= A), p &= ~A;
    }
  }
  function Qo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function dl() {
    var e = Ri;
    return Ri <<= 1, !(Ri & 4194240) && (Ri = 64), e;
  }
  function Zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function An(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ht(t), e[t] = n;
  }
  function gp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ht(n), p = 1 << l;
      t[l] = 0, o[l] = -1, e[l] = -1, n &= ~p;
    }
  }
  function Jo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var o = 31 - Ht(n), l = 1 << o;
      l & t | e[o] & t && (e[o] |= t), n &= ~l;
    }
  }
  var We = 0;
  function ul(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var pl, ea, fl, gl, ml, ta = !1, Li = [], cr = null, dr = null, ur = null, Pn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), pr = [], mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Pn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(t.pointerId);
    }
  }
  function In(e, t, n, o, l, p) {
    return e === null || e.nativeEvent !== p ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: o, nativeEvent: p, targetContainers: [l] }, t !== null && (t = Vn(t), t !== null && ea(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function hp(e, t, n, o, l) {
    switch (t) {
      case "focusin":
        return cr = In(cr, e, t, n, o, l), !0;
      case "dragenter":
        return dr = In(dr, e, t, n, o, l), !0;
      case "mouseover":
        return ur = In(ur, e, t, n, o, l), !0;
      case "pointerover":
        var p = l.pointerId;
        return Pn.set(p, In(Pn.get(p) || null, e, t, n, o, l)), !0;
      case "gotpointercapture":
        return p = l.pointerId, Ln.set(p, In(Ln.get(p) || null, e, t, n, o, l)), !0;
    }
    return !1;
  }
  function _l(e) {
    var t = Or(e.target);
    if (t !== null) {
      var n = Nr(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = rl(n), t !== null) {
            e.blockedOn = t, ml(e.priority, function() {
              fl(n);
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
  function Ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var o = new n.constructor(n.type, n);
        Vt = o, n.target.dispatchEvent(o), Vt = null;
      } else return t = Vn(n), t !== null && ea(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function bl(e, t, n) {
    Ii(e) && n.delete(t);
  }
  function _p() {
    ta = !1, cr !== null && Ii(cr) && (cr = null), dr !== null && Ii(dr) && (dr = null), ur !== null && Ii(ur) && (ur = null), Pn.forEach(bl), Ln.forEach(bl);
  }
  function Nn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ta || (ta = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, _p)));
  }
  function On(e) {
    function t(l) {
      return Nn(l, e);
    }
    if (0 < Li.length) {
      Nn(Li[0], e);
      for (var n = 1; n < Li.length; n++) {
        var o = Li[n];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (cr !== null && Nn(cr, e), dr !== null && Nn(dr, e), ur !== null && Nn(ur, e), Pn.forEach(t), Ln.forEach(t), n = 0; n < pr.length; n++) o = pr[n], o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < pr.length && (n = pr[0], n.blockedOn === null); ) _l(n), n.blockedOn === null && pr.shift();
  }
  var Kr = h.ReactCurrentBatchConfig, Ni = !0;
  function bp(e, t, n, o) {
    var l = We, p = Kr.transition;
    Kr.transition = null;
    try {
      We = 1, ra(e, t, n, o);
    } finally {
      We = l, Kr.transition = p;
    }
  }
  function yp(e, t, n, o) {
    var l = We, p = Kr.transition;
    Kr.transition = null;
    try {
      We = 4, ra(e, t, n, o);
    } finally {
      We = l, Kr.transition = p;
    }
  }
  function ra(e, t, n, o) {
    if (Ni) {
      var l = na(e, t, n, o);
      if (l === null) xa(e, t, o, Oi, n), hl(e, o);
      else if (hp(l, e, t, n, o)) o.stopPropagation();
      else if (hl(e, o), t & 4 && -1 < mp.indexOf(e)) {
        for (; l !== null; ) {
          var p = Vn(l);
          if (p !== null && pl(p), p = na(e, t, n, o), p === null && xa(e, t, o, Oi, n), p === l) break;
          l = p;
        }
        l !== null && o.stopPropagation();
      } else xa(e, t, o, null, n);
    }
  }
  var Oi = null;
  function na(e, t, n, o) {
    if (Oi = null, e = Lr(o), e = Or(e), e !== null) if (t = Nr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = rl(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Oi = e, null;
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
          case Xo:
            return 1;
          case ll:
            return 4;
          case Ci:
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
  var fr = null, ia = null, Ti = null;
  function xl() {
    if (Ti) return Ti;
    var e, t = ia, n = t.length, o, l = "value" in fr ? fr.value : fr.textContent, p = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var y = n - e;
    for (o = 1; o <= y && t[n - o] === l[p - o]; o++) ;
    return Ti = l.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Di(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mi() {
    return !0;
  }
  function vl() {
    return !1;
  }
  function Rt(e) {
    function t(n, o, l, p, y) {
      this._reactName = n, this._targetInst = l, this.type = o, this.nativeEvent = p, this.target = y, this.currentTarget = null;
      for (var A in e) e.hasOwnProperty(A) && (n = e[A], this[A] = n ? n(p) : p[A]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Mi : vl, this.isPropagationStopped = vl, this;
    }
    return W(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mi);
    }, persist: function() {
    }, isPersistent: Mi }), t;
  }
  var Xr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, oa = Rt(Xr), Tn = W({}, Xr, { view: 0, detail: 0 }), xp = Rt(Tn), aa, sa, Dn, $i = W({}, Tn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ca, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (aa = e.screenX - Dn.screenX, sa = e.screenY - Dn.screenY) : sa = aa = 0, Dn = e), aa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : sa;
  } }), wl = Rt($i), vp = W({}, $i, { dataTransfer: 0 }), wp = Rt(vp), kp = W({}, Tn, { relatedTarget: 0 }), la = Rt(kp), Sp = W({}, Xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ep = Rt(Sp), Cp = W({}, Xr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), zp = Rt(Cp), Rp = W({}, Xr, { data: 0 }), kl = Rt(Rp), Ap = {
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
  }, Pp = {
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
  }, Lp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lp[e]) ? !!t[e] : !1;
  }
  function ca() {
    return Ip;
  }
  var Np = W({}, Tn, { key: function(e) {
    if (e.key) {
      var t = Ap[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Di(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ca, charCode: function(e) {
    return e.type === "keypress" ? Di(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Op = Rt(Np), Tp = W({}, $i, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sl = Rt(Tp), Dp = W({}, Tn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ca }), Mp = Rt(Dp), $p = W({}, Xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hp = Rt($p), Bp = W({}, $i, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), jp = Rt(Bp), Fp = [9, 13, 27, 32], da = f && "CompositionEvent" in window, Mn = null;
  f && "documentMode" in document && (Mn = document.documentMode);
  var qp = f && "TextEvent" in window && !Mn, El = f && (!da || Mn && 8 < Mn && 11 >= Mn), Cl = " ", zl = !1;
  function Rl(e, t) {
    switch (e) {
      case "keyup":
        return Fp.indexOf(t.keyCode) !== -1;
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
  function Al(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qr = !1;
  function Wp(e, t) {
    switch (e) {
      case "compositionend":
        return Al(t);
      case "keypress":
        return t.which !== 32 ? null : (zl = !0, Cl);
      case "textInput":
        return e = t.data, e === Cl && zl ? null : e;
      default:
        return null;
    }
  }
  function Up(e, t) {
    if (Qr) return e === "compositionend" || !da && Rl(e, t) ? (e = xl(), Ti = ia = fr = null, Qr = !1, e) : null;
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
  function Pl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vp[e.type] : t === "textarea";
  }
  function Ll(e, t, n, o) {
    Sn(o), t = qi(t, "onChange"), 0 < t.length && (n = new oa("onChange", "change", null, n, o), e.push({ event: n, listeners: t }));
  }
  var $n = null, Hn = null;
  function Gp(e) {
    Kl(e, 0);
  }
  function Hi(e) {
    var t = rn(e);
    if (Oe(t)) return e;
  }
  function Yp(e, t) {
    if (e === "change") return t;
  }
  var Il = !1;
  if (f) {
    var ua;
    if (f) {
      var pa = "oninput" in document;
      if (!pa) {
        var Nl = document.createElement("div");
        Nl.setAttribute("oninput", "return;"), pa = typeof Nl.oninput == "function";
      }
      ua = pa;
    } else ua = !1;
    Il = ua && (!document.documentMode || 9 < document.documentMode);
  }
  function Ol() {
    $n && ($n.detachEvent("onpropertychange", Tl), Hn = $n = null);
  }
  function Tl(e) {
    if (e.propertyName === "value" && Hi(Hn)) {
      var t = [];
      Ll(t, Hn, e, Lr(e)), tl(Gp, t);
    }
  }
  function Kp(e, t, n) {
    e === "focusin" ? (Ol(), $n = t, Hn = n, $n.attachEvent("onpropertychange", Tl)) : e === "focusout" && Ol();
  }
  function Xp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hi(Hn);
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
    var n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for (o = 0; o < n.length; o++) {
      var l = n[o];
      if (!g.call(t, l) || !Bt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Dl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ml(e, t) {
    var n = Dl(e);
    e = 0;
    for (var o; n; ) {
      if (n.nodeType === 3) {
        if (o = e + n.textContent.length, e <= t && o >= t) return { node: n, offset: t - e };
        e = o;
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
  function $l(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $l(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hl() {
    for (var e = window, t = je(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = je(e.document);
    }
    return t;
  }
  function fa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ef(e) {
    var t = Hl(), n = e.focusedElem, o = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $l(n.ownerDocument.documentElement, n)) {
      if (o !== null && fa(n)) {
        if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, p = Math.min(o.start, l);
          o = o.end === void 0 ? p : Math.min(o.end, l), !e.extend && p > o && (l = o, o = p, p = l), l = Ml(n, p);
          var y = Ml(
            n,
            o
          );
          l && y && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== y.node || e.focusOffset !== y.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), p > o ? (e.addRange(t), e.extend(y.node, y.offset)) : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var tf = f && "documentMode" in document && 11 >= document.documentMode, Zr = null, ga = null, jn = null, ma = !1;
  function Bl(e, t, n) {
    var o = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ma || Zr == null || Zr !== je(o) || (o = Zr, "selectionStart" in o && fa(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), jn && Bn(jn, o) || (jn = o, o = qi(ga, "onSelect"), 0 < o.length && (t = new oa("onSelect", "select", null, t, n), e.push({ event: t, listeners: o }), t.target = Zr)));
  }
  function Bi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jr = { animationend: Bi("Animation", "AnimationEnd"), animationiteration: Bi("Animation", "AnimationIteration"), animationstart: Bi("Animation", "AnimationStart"), transitionend: Bi("Transition", "TransitionEnd") }, ha = {}, jl = {};
  f && (jl = document.createElement("div").style, "AnimationEvent" in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), "TransitionEvent" in window || delete Jr.transitionend.transition);
  function ji(e) {
    if (ha[e]) return ha[e];
    if (!Jr[e]) return e;
    var t = Jr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in jl) return ha[e] = t[n];
    return e;
  }
  var Fl = ji("animationend"), ql = ji("animationiteration"), Wl = ji("animationstart"), Ul = ji("transitionend"), Vl = /* @__PURE__ */ new Map(), Gl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gr(e, t) {
    Vl.set(e, t), d(t, [e]);
  }
  for (var _a = 0; _a < Gl.length; _a++) {
    var ba = Gl[_a], rf = ba.toLowerCase(), nf = ba[0].toUpperCase() + ba.slice(1);
    gr(rf, "on" + nf);
  }
  gr(Fl, "onAnimationEnd"), gr(ql, "onAnimationIteration"), gr(Wl, "onAnimationStart"), gr("dblclick", "onDoubleClick"), gr("focusin", "onFocus"), gr("focusout", "onBlur"), gr(Ul, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), of = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
  function Yl(e, t, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = n, rp(o, t, void 0, e), e.currentTarget = null;
  }
  function Kl(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var o = e[n], l = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (t) for (var y = o.length - 1; 0 <= y; y--) {
          var A = o[y], N = A.instance, G = A.currentTarget;
          if (A = A.listener, N !== p && l.isPropagationStopped()) break e;
          Yl(l, A, G), p = N;
        }
        else for (y = 0; y < o.length; y++) {
          if (A = o[y], N = A.instance, G = A.currentTarget, A = A.listener, N !== p && l.isPropagationStopped()) break e;
          Yl(l, A, G), p = N;
        }
      }
    }
    if (Ei) throw e = Ko, Ei = !1, Ko = null, e;
  }
  function Ye(e, t) {
    var n = t[Ca];
    n === void 0 && (n = t[Ca] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    n.has(o) || (Xl(t, e, 2, !1), n.add(o));
  }
  function ya(e, t, n) {
    var o = 0;
    t && (o |= 4), Xl(n, e, o, t);
  }
  var Fi = "_reactListening" + Math.random().toString(36).slice(2);
  function qn(e) {
    if (!e[Fi]) {
      e[Fi] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (of.has(n) || ya(n, !1, e), ya(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fi] || (t[Fi] = !0, ya("selectionchange", !1, t));
    }
  }
  function Xl(e, t, n, o) {
    switch (yl(t)) {
      case 1:
        var l = bp;
        break;
      case 4:
        l = yp;
        break;
      default:
        l = ra;
    }
    n = l.bind(null, t, n, e), l = void 0, !Yo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), o ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function xa(e, t, n, o, l) {
    var p = o;
    if (!(t & 1) && !(t & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var y = o.tag;
      if (y === 3 || y === 4) {
        var A = o.stateNode.containerInfo;
        if (A === l || A.nodeType === 8 && A.parentNode === l) break;
        if (y === 4) for (y = o.return; y !== null; ) {
          var N = y.tag;
          if ((N === 3 || N === 4) && (N = y.stateNode.containerInfo, N === l || N.nodeType === 8 && N.parentNode === l)) return;
          y = y.return;
        }
        for (; A !== null; ) {
          if (y = Or(A), y === null) return;
          if (N = y.tag, N === 5 || N === 6) {
            o = p = y;
            continue e;
          }
          A = A.parentNode;
        }
      }
      o = o.return;
    }
    tl(function() {
      var G = p, re = Lr(n), ie = [];
      e: {
        var J = Vl.get(e);
        if (J !== void 0) {
          var me = oa, be = e;
          switch (e) {
            case "keypress":
              if (Di(n) === 0) break e;
            case "keydown":
            case "keyup":
              me = Op;
              break;
            case "focusin":
              be = "focus", me = la;
              break;
            case "focusout":
              be = "blur", me = la;
              break;
            case "beforeblur":
            case "afterblur":
              me = la;
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
              me = wl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = Mp;
              break;
            case Fl:
            case ql:
            case Wl:
              me = Ep;
              break;
            case Ul:
              me = Hp;
              break;
            case "scroll":
              me = xp;
              break;
            case "wheel":
              me = jp;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = zp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = Sl;
          }
          var xe = (t & 4) !== 0, it = !xe && e === "scroll", j = xe ? J !== null ? J + "Capture" : null : J;
          xe = [];
          for (var D = G, U; D !== null; ) {
            U = D;
            var ae = U.stateNode;
            if (U.tag === 5 && ae !== null && (U = ae, j !== null && (ae = En(D, j), ae != null && xe.push(Wn(D, ae, U)))), it) break;
            D = D.return;
          }
          0 < xe.length && (J = new me(J, be, null, n, re), ie.push({ event: J, listeners: xe }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", me = e === "mouseout" || e === "pointerout", J && n !== Vt && (be = n.relatedTarget || n.fromElement) && (Or(be) || be[Jt])) break e;
          if ((me || J) && (J = re.window === re ? re : (J = re.ownerDocument) ? J.defaultView || J.parentWindow : window, me ? (be = n.relatedTarget || n.toElement, me = G, be = be ? Or(be) : null, be !== null && (it = Nr(be), be !== it || be.tag !== 5 && be.tag !== 6) && (be = null)) : (me = null, be = G), me !== be)) {
            if (xe = wl, ae = "onMouseLeave", j = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (xe = Sl, ae = "onPointerLeave", j = "onPointerEnter", D = "pointer"), it = me == null ? J : rn(me), U = be == null ? J : rn(be), J = new xe(ae, D + "leave", me, n, re), J.target = it, J.relatedTarget = U, ae = null, Or(re) === G && (xe = new xe(j, D + "enter", be, n, re), xe.target = U, xe.relatedTarget = it, ae = xe), it = ae, me && be) t: {
              for (xe = me, j = be, D = 0, U = xe; U; U = en(U)) D++;
              for (U = 0, ae = j; ae; ae = en(ae)) U++;
              for (; 0 < D - U; ) xe = en(xe), D--;
              for (; 0 < U - D; ) j = en(j), U--;
              for (; D--; ) {
                if (xe === j || j !== null && xe === j.alternate) break t;
                xe = en(xe), j = en(j);
              }
              xe = null;
            }
            else xe = null;
            me !== null && Ql(ie, J, me, xe, !1), be !== null && it !== null && Ql(ie, it, be, xe, !0);
          }
        }
        e: {
          if (J = G ? rn(G) : window, me = J.nodeName && J.nodeName.toLowerCase(), me === "select" || me === "input" && J.type === "file") var we = Yp;
          else if (Pl(J)) if (Il) we = Zp;
          else {
            we = Xp;
            var ke = Kp;
          }
          else (me = J.nodeName) && me.toLowerCase() === "input" && (J.type === "checkbox" || J.type === "radio") && (we = Qp);
          if (we && (we = we(e, G))) {
            Ll(ie, we, n, re);
            break e;
          }
          ke && ke(e, J, G), e === "focusout" && (ke = J._wrapperState) && ke.controlled && J.type === "number" && X(J, "number", J.value);
        }
        switch (ke = G ? rn(G) : window, e) {
          case "focusin":
            (Pl(ke) || ke.contentEditable === "true") && (Zr = ke, ga = G, jn = null);
            break;
          case "focusout":
            jn = ga = Zr = null;
            break;
          case "mousedown":
            ma = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ma = !1, Bl(ie, n, re);
            break;
          case "selectionchange":
            if (tf) break;
          case "keydown":
          case "keyup":
            Bl(ie, n, re);
        }
        var Se;
        if (da) e: {
          switch (e) {
            case "compositionstart":
              var Re = "onCompositionStart";
              break e;
            case "compositionend":
              Re = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Re = "onCompositionUpdate";
              break e;
          }
          Re = void 0;
        }
        else Qr ? Rl(e, n) && (Re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Re = "onCompositionStart");
        Re && (El && n.locale !== "ko" && (Qr || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Qr && (Se = xl()) : (fr = re, ia = "value" in fr ? fr.value : fr.textContent, Qr = !0)), ke = qi(G, Re), 0 < ke.length && (Re = new kl(Re, e, null, n, re), ie.push({ event: Re, listeners: ke }), Se ? Re.data = Se : (Se = Al(n), Se !== null && (Re.data = Se)))), (Se = qp ? Wp(e, n) : Up(e, n)) && (G = qi(G, "onBeforeInput"), 0 < G.length && (re = new kl("onBeforeInput", "beforeinput", null, n, re), ie.push({ event: re, listeners: G }), re.data = Se));
      }
      Kl(ie, t);
    });
  }
  function Wn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function qi(e, t) {
    for (var n = t + "Capture", o = []; e !== null; ) {
      var l = e, p = l.stateNode;
      l.tag === 5 && p !== null && (l = p, p = En(e, n), p != null && o.unshift(Wn(e, p, l)), p = En(e, t), p != null && o.push(Wn(e, p, l))), e = e.return;
    }
    return o;
  }
  function en(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ql(e, t, n, o, l) {
    for (var p = t._reactName, y = []; n !== null && n !== o; ) {
      var A = n, N = A.alternate, G = A.stateNode;
      if (N !== null && N === o) break;
      A.tag === 5 && G !== null && (A = G, l ? (N = En(n, p), N != null && y.unshift(Wn(n, N, A))) : l || (N = En(n, p), N != null && y.push(Wn(n, N, A)))), n = n.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var af = /\r\n?/g, sf = /\u0000|\uFFFD/g;
  function Zl(e) {
    return (typeof e == "string" ? e : "" + e).replace(af, `
`).replace(sf, "");
  }
  function Wi(e, t, n) {
    if (t = Zl(t), Zl(e) !== t && n) throw Error(i(425));
  }
  function Ui() {
  }
  var va = null, wa = null;
  function ka(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Sa = typeof setTimeout == "function" ? setTimeout : void 0, lf = typeof clearTimeout == "function" ? clearTimeout : void 0, Jl = typeof Promise == "function" ? Promise : void 0, cf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jl < "u" ? function(e) {
    return Jl.resolve(null).then(e).catch(df);
  } : Sa;
  function df(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e, t) {
    var n = t, o = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (o === 0) {
          e.removeChild(l), On(t);
          return;
        }
        o--;
      } else n !== "$" && n !== "$?" && n !== "$!" || o++;
      n = l;
    } while (n);
    On(t);
  }
  function mr(e) {
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
  var tn = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tn, Un = "__reactProps$" + tn, Jt = "__reactContainer$" + tn, Ca = "__reactEvents$" + tn, uf = "__reactListeners$" + tn, pf = "__reactHandles$" + tn;
  function Or(e) {
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
  function Vi(e) {
    return e[Un] || null;
  }
  var za = [], nn = -1;
  function hr(e) {
    return { current: e };
  }
  function Ke(e) {
    0 > nn || (e.current = za[nn], za[nn] = null, nn--);
  }
  function Ge(e, t) {
    nn++, za[nn] = e.current, e.current = t;
  }
  var _r = {}, mt = hr(_r), vt = hr(!1), Tr = _r;
  function on(e, t) {
    var n = e.type.contextTypes;
    if (!n) return _r;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var l = {}, p;
    for (p in n) l[p] = t[p];
    return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function wt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Gi() {
    Ke(vt), Ke(mt);
  }
  function tc(e, t, n) {
    if (mt.current !== _r) throw Error(i(168));
    Ge(mt, t), Ge(vt, n);
  }
  function rc(e, t, n) {
    var o = e.stateNode;
    if (t = t.childContextTypes, typeof o.getChildContext != "function") return n;
    o = o.getChildContext();
    for (var l in o) if (!(l in t)) throw Error(i(108, Te(e) || "Unknown", l));
    return W({}, n, o);
  }
  function Yi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _r, Tr = mt.current, Ge(mt, e), Ge(vt, vt.current), !0;
  }
  function nc(e, t, n) {
    var o = e.stateNode;
    if (!o) throw Error(i(169));
    n ? (e = rc(e, t, Tr), o.__reactInternalMemoizedMergedChildContext = e, Ke(vt), Ke(mt), Ge(mt, e)) : Ke(vt), Ge(vt, n);
  }
  var er = null, Ki = !1, Ra = !1;
  function ic(e) {
    er === null ? er = [e] : er.push(e);
  }
  function ff(e) {
    Ki = !0, ic(e);
  }
  function br() {
    if (!Ra && er !== null) {
      Ra = !0;
      var e = 0, t = We;
      try {
        var n = er;
        for (We = 1; e < n.length; e++) {
          var o = n[e];
          do
            o = o(!0);
          while (o !== null);
        }
        er = null, Ki = !1;
      } catch (l) {
        throw er !== null && (er = er.slice(e + 1)), al(Xo, br), l;
      } finally {
        We = t, Ra = !1;
      }
    }
    return null;
  }
  var an = [], sn = 0, Xi = null, Qi = 0, It = [], Nt = 0, Dr = null, tr = 1, rr = "";
  function Mr(e, t) {
    an[sn++] = Qi, an[sn++] = Xi, Xi = e, Qi = t;
  }
  function oc(e, t, n) {
    It[Nt++] = tr, It[Nt++] = rr, It[Nt++] = Dr, Dr = e;
    var o = tr;
    e = rr;
    var l = 32 - Ht(o) - 1;
    o &= ~(1 << l), n += 1;
    var p = 32 - Ht(t) + l;
    if (30 < p) {
      var y = l - l % 5;
      p = (o & (1 << y) - 1).toString(32), o >>= y, l -= y, tr = 1 << 32 - Ht(t) + l | n << l | o, rr = p + e;
    } else tr = 1 << p | n << l | o, rr = e;
  }
  function Aa(e) {
    e.return !== null && (Mr(e, 1), oc(e, 1, 0));
  }
  function Pa(e) {
    for (; e === Xi; ) Xi = an[--sn], an[sn] = null, Qi = an[--sn], an[sn] = null;
    for (; e === Dr; ) Dr = It[--Nt], It[Nt] = null, rr = It[--Nt], It[Nt] = null, tr = It[--Nt], It[Nt] = null;
  }
  var At = null, Pt = null, Ze = !1, jt = null;
  function ac(e, t) {
    var n = Mt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function sc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, At = e, Pt = mr(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, At = e, Pt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dr !== null ? { id: tr, overflow: rr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, At = e, Pt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function La(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ia(e) {
    if (Ze) {
      var t = Pt;
      if (t) {
        var n = t;
        if (!sc(e, t)) {
          if (La(e)) throw Error(i(418));
          t = mr(n.nextSibling);
          var o = At;
          t && sc(e, t) ? ac(o, n) : (e.flags = e.flags & -4097 | 2, Ze = !1, At = e);
        }
      } else {
        if (La(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Ze = !1, At = e;
      }
    }
  }
  function lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    At = e;
  }
  function Zi(e) {
    if (e !== At) return !1;
    if (!Ze) return lc(e), Ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ka(e.type, e.memoizedProps)), t && (t = Pt)) {
      if (La(e)) throw cc(), Error(i(418));
      for (; t; ) ac(e, t), t = mr(t.nextSibling);
    }
    if (lc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Pt = mr(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Pt = null;
      }
    } else Pt = At ? mr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function cc() {
    for (var e = Pt; e; ) e = mr(e.nextSibling);
  }
  function ln() {
    Pt = At = null, Ze = !1;
  }
  function Na(e) {
    jt === null ? jt = [e] : jt.push(e);
  }
  var gf = h.ReactCurrentBatchConfig;
  function Gn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var o = n.stateNode;
        }
        if (!o) throw Error(i(147, e));
        var l = o, p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p ? t.ref : (t = function(y) {
          var A = l.refs;
          y === null ? delete A[p] : A[p] = y;
        }, t._stringRef = p, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Ji(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function dc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function uc(e) {
    function t(j, D) {
      if (e) {
        var U = j.deletions;
        U === null ? (j.deletions = [D], j.flags |= 16) : U.push(D);
      }
    }
    function n(j, D) {
      if (!e) return null;
      for (; D !== null; ) t(j, D), D = D.sibling;
      return null;
    }
    function o(j, D) {
      for (j = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? j.set(D.key, D) : j.set(D.index, D), D = D.sibling;
      return j;
    }
    function l(j, D) {
      return j = Cr(j, D), j.index = 0, j.sibling = null, j;
    }
    function p(j, D, U) {
      return j.index = U, e ? (U = j.alternate, U !== null ? (U = U.index, U < D ? (j.flags |= 2, D) : U) : (j.flags |= 2, D)) : (j.flags |= 1048576, D);
    }
    function y(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function A(j, D, U, ae) {
      return D === null || D.tag !== 6 ? (D = Ss(U, j.mode, ae), D.return = j, D) : (D = l(D, U), D.return = j, D);
    }
    function N(j, D, U, ae) {
      var we = U.type;
      return we === R ? re(j, D, U.props.children, ae, U.key) : D !== null && (D.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ne && dc(we) === D.type) ? (ae = l(D, U.props), ae.ref = Gn(j, D, U), ae.return = j, ae) : (ae = So(U.type, U.key, U.props, null, j.mode, ae), ae.ref = Gn(j, D, U), ae.return = j, ae);
    }
    function G(j, D, U, ae) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== U.containerInfo || D.stateNode.implementation !== U.implementation ? (D = Es(U, j.mode, ae), D.return = j, D) : (D = l(D, U.children || []), D.return = j, D);
    }
    function re(j, D, U, ae, we) {
      return D === null || D.tag !== 7 ? (D = Ur(U, j.mode, ae, we), D.return = j, D) : (D = l(D, U), D.return = j, D);
    }
    function ie(j, D, U) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Ss("" + D, j.mode, U), D.return = j, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case v:
            return U = So(D.type, D.key, D.props, null, j.mode, U), U.ref = Gn(j, null, D), U.return = j, U;
          case E:
            return D = Es(D, j.mode, U), D.return = j, D;
          case ne:
            var ae = D._init;
            return ie(j, ae(D._payload), U);
        }
        if (ce(D) || de(D)) return D = Ur(D, j.mode, U, null), D.return = j, D;
        Ji(j, D);
      }
      return null;
    }
    function J(j, D, U, ae) {
      var we = D !== null ? D.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return we !== null ? null : A(j, D, "" + U, ae);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case v:
            return U.key === we ? N(j, D, U, ae) : null;
          case E:
            return U.key === we ? G(j, D, U, ae) : null;
          case ne:
            return we = U._init, J(
              j,
              D,
              we(U._payload),
              ae
            );
        }
        if (ce(U) || de(U)) return we !== null ? null : re(j, D, U, ae, null);
        Ji(j, U);
      }
      return null;
    }
    function me(j, D, U, ae, we) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number") return j = j.get(U) || null, A(D, j, "" + ae, we);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case v:
            return j = j.get(ae.key === null ? U : ae.key) || null, N(D, j, ae, we);
          case E:
            return j = j.get(ae.key === null ? U : ae.key) || null, G(D, j, ae, we);
          case ne:
            var ke = ae._init;
            return me(j, D, U, ke(ae._payload), we);
        }
        if (ce(ae) || de(ae)) return j = j.get(U) || null, re(D, j, ae, we, null);
        Ji(D, ae);
      }
      return null;
    }
    function be(j, D, U, ae) {
      for (var we = null, ke = null, Se = D, Re = D = 0, ut = null; Se !== null && Re < U.length; Re++) {
        Se.index > Re ? (ut = Se, Se = null) : ut = Se.sibling;
        var Be = J(j, Se, U[Re], ae);
        if (Be === null) {
          Se === null && (Se = ut);
          break;
        }
        e && Se && Be.alternate === null && t(j, Se), D = p(Be, D, Re), ke === null ? we = Be : ke.sibling = Be, ke = Be, Se = ut;
      }
      if (Re === U.length) return n(j, Se), Ze && Mr(j, Re), we;
      if (Se === null) {
        for (; Re < U.length; Re++) Se = ie(j, U[Re], ae), Se !== null && (D = p(Se, D, Re), ke === null ? we = Se : ke.sibling = Se, ke = Se);
        return Ze && Mr(j, Re), we;
      }
      for (Se = o(j, Se); Re < U.length; Re++) ut = me(Se, j, Re, U[Re], ae), ut !== null && (e && ut.alternate !== null && Se.delete(ut.key === null ? Re : ut.key), D = p(ut, D, Re), ke === null ? we = ut : ke.sibling = ut, ke = ut);
      return e && Se.forEach(function(zr) {
        return t(j, zr);
      }), Ze && Mr(j, Re), we;
    }
    function xe(j, D, U, ae) {
      var we = de(U);
      if (typeof we != "function") throw Error(i(150));
      if (U = we.call(U), U == null) throw Error(i(151));
      for (var ke = we = null, Se = D, Re = D = 0, ut = null, Be = U.next(); Se !== null && !Be.done; Re++, Be = U.next()) {
        Se.index > Re ? (ut = Se, Se = null) : ut = Se.sibling;
        var zr = J(j, Se, Be.value, ae);
        if (zr === null) {
          Se === null && (Se = ut);
          break;
        }
        e && Se && zr.alternate === null && t(j, Se), D = p(zr, D, Re), ke === null ? we = zr : ke.sibling = zr, ke = zr, Se = ut;
      }
      if (Be.done) return n(
        j,
        Se
      ), Ze && Mr(j, Re), we;
      if (Se === null) {
        for (; !Be.done; Re++, Be = U.next()) Be = ie(j, Be.value, ae), Be !== null && (D = p(Be, D, Re), ke === null ? we = Be : ke.sibling = Be, ke = Be);
        return Ze && Mr(j, Re), we;
      }
      for (Se = o(j, Se); !Be.done; Re++, Be = U.next()) Be = me(Se, j, Re, Be.value, ae), Be !== null && (e && Be.alternate !== null && Se.delete(Be.key === null ? Re : Be.key), D = p(Be, D, Re), ke === null ? we = Be : ke.sibling = Be, ke = Be);
      return e && Se.forEach(function(Gf) {
        return t(j, Gf);
      }), Ze && Mr(j, Re), we;
    }
    function it(j, D, U, ae) {
      if (typeof U == "object" && U !== null && U.type === R && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case v:
            e: {
              for (var we = U.key, ke = D; ke !== null; ) {
                if (ke.key === we) {
                  if (we = U.type, we === R) {
                    if (ke.tag === 7) {
                      n(j, ke.sibling), D = l(ke, U.props.children), D.return = j, j = D;
                      break e;
                    }
                  } else if (ke.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ne && dc(we) === ke.type) {
                    n(j, ke.sibling), D = l(ke, U.props), D.ref = Gn(j, ke, U), D.return = j, j = D;
                    break e;
                  }
                  n(j, ke);
                  break;
                } else t(j, ke);
                ke = ke.sibling;
              }
              U.type === R ? (D = Ur(U.props.children, j.mode, ae, U.key), D.return = j, j = D) : (ae = So(U.type, U.key, U.props, null, j.mode, ae), ae.ref = Gn(j, D, U), ae.return = j, j = ae);
            }
            return y(j);
          case E:
            e: {
              for (ke = U.key; D !== null; ) {
                if (D.key === ke) if (D.tag === 4 && D.stateNode.containerInfo === U.containerInfo && D.stateNode.implementation === U.implementation) {
                  n(j, D.sibling), D = l(D, U.children || []), D.return = j, j = D;
                  break e;
                } else {
                  n(j, D);
                  break;
                }
                else t(j, D);
                D = D.sibling;
              }
              D = Es(U, j.mode, ae), D.return = j, j = D;
            }
            return y(j);
          case ne:
            return ke = U._init, it(j, D, ke(U._payload), ae);
        }
        if (ce(U)) return be(j, D, U, ae);
        if (de(U)) return xe(j, D, U, ae);
        Ji(j, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, D !== null && D.tag === 6 ? (n(j, D.sibling), D = l(D, U), D.return = j, j = D) : (n(j, D), D = Ss(U, j.mode, ae), D.return = j, j = D), y(j)) : n(j, D);
    }
    return it;
  }
  var cn = uc(!0), pc = uc(!1), eo = hr(null), to = null, dn = null, Oa = null;
  function Ta() {
    Oa = dn = to = null;
  }
  function Da(e) {
    var t = eo.current;
    Ke(eo), e._currentValue = t;
  }
  function Ma(e, t, n) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function un(e, t) {
    to = e, Oa = dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (kt = !0), e.firstContext = null);
  }
  function Ot(e) {
    var t = e._currentValue;
    if (Oa !== e) if (e = { context: e, memoizedValue: t, next: null }, dn === null) {
      if (to === null) throw Error(i(308));
      dn = e, to.dependencies = { lanes: 0, firstContext: e };
    } else dn = dn.next = e;
    return t;
  }
  var $r = null;
  function $a(e) {
    $r === null ? $r = [e] : $r.push(e);
  }
  function fc(e, t, n, o) {
    var l = t.interleaved;
    return l === null ? (n.next = n, $a(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nr(e, o);
  }
  function nr(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var yr = !1;
  function Ha(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function gc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function ir(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xr(e, t, n) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, He & 2) {
      var l = o.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), o.pending = t, nr(e, n);
    }
    return l = o.interleaved, l === null ? (t.next = t, $a(o)) : (t.next = l.next, l.next = t), o.interleaved = t, nr(e, n);
  }
  function ro(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, Jo(e, n);
    }
  }
  function mc(e, t) {
    var n = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, n === o)) {
      var l = null, p = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var y = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          p === null ? l = p = y : p = p.next = y, n = n.next;
        } while (n !== null);
        p === null ? l = p = t : p = p.next = t;
      } else l = p = t;
      n = { baseState: o.baseState, firstBaseUpdate: l, lastBaseUpdate: p, shared: o.shared, effects: o.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function no(e, t, n, o) {
    var l = e.updateQueue;
    yr = !1;
    var p = l.firstBaseUpdate, y = l.lastBaseUpdate, A = l.shared.pending;
    if (A !== null) {
      l.shared.pending = null;
      var N = A, G = N.next;
      N.next = null, y === null ? p = G : y.next = G, y = N;
      var re = e.alternate;
      re !== null && (re = re.updateQueue, A = re.lastBaseUpdate, A !== y && (A === null ? re.firstBaseUpdate = G : A.next = G, re.lastBaseUpdate = N));
    }
    if (p !== null) {
      var ie = l.baseState;
      y = 0, re = G = N = null, A = p;
      do {
        var J = A.lane, me = A.eventTime;
        if ((o & J) === J) {
          re !== null && (re = re.next = {
            eventTime: me,
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          });
          e: {
            var be = e, xe = A;
            switch (J = t, me = n, xe.tag) {
              case 1:
                if (be = xe.payload, typeof be == "function") {
                  ie = be.call(me, ie, J);
                  break e;
                }
                ie = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = xe.payload, J = typeof be == "function" ? be.call(me, ie, J) : be, J == null) break e;
                ie = W({}, ie, J);
                break e;
              case 2:
                yr = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (e.flags |= 64, J = l.effects, J === null ? l.effects = [A] : J.push(A));
        } else me = { eventTime: me, lane: J, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, re === null ? (G = re = me, N = ie) : re = re.next = me, y |= J;
        if (A = A.next, A === null) {
          if (A = l.shared.pending, A === null) break;
          J = A, A = J.next, J.next = null, l.lastBaseUpdate = J, l.shared.pending = null;
        }
      } while (!0);
      if (re === null && (N = ie), l.baseState = N, l.firstBaseUpdate = G, l.lastBaseUpdate = re, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          y |= l.lane, l = l.next;
        while (l !== t);
      } else p === null && (l.shared.lanes = 0);
      jr |= y, e.lanes = y, e.memoizedState = ie;
    }
  }
  function hc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var o = e[t], l = o.callback;
      if (l !== null) {
        if (o.callback = null, o = n, typeof l != "function") throw Error(i(191, l));
        l.call(o);
      }
    }
  }
  var Yn = {}, Kt = hr(Yn), Kn = hr(Yn), Xn = hr(Yn);
  function Hr(e) {
    if (e === Yn) throw Error(i(174));
    return e;
  }
  function Ba(e, t) {
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
    Hr(Xn.current);
    var t = Hr(Kt.current), n = lt(t, e.type);
    t !== n && (Ge(Kn, e), Ge(Kt, n));
  }
  function ja(e) {
    Kn.current === e && (Ke(Kt), Ke(Kn));
  }
  var Je = hr(0);
  function io(e) {
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
  var Fa = [];
  function qa() {
    for (var e = 0; e < Fa.length; e++) Fa[e]._workInProgressVersionPrimary = null;
    Fa.length = 0;
  }
  var oo = h.ReactCurrentDispatcher, Wa = h.ReactCurrentBatchConfig, Br = 0, et = null, at = null, ct = null, ao = !1, Qn = !1, Zn = 0, mf = 0;
  function ht() {
    throw Error(i(321));
  }
  function Ua(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Bt(e[n], t[n])) return !1;
    return !0;
  }
  function Va(e, t, n, o, l, p) {
    if (Br = p, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oo.current = e === null || e.memoizedState === null ? yf : xf, e = n(o, l), Qn) {
      p = 0;
      do {
        if (Qn = !1, Zn = 0, 25 <= p) throw Error(i(301));
        p += 1, ct = at = null, t.updateQueue = null, oo.current = vf, e = n(o, l);
      } while (Qn);
    }
    if (oo.current = co, t = at !== null && at.next !== null, Br = 0, ct = at = et = null, ao = !1, t) throw Error(i(300));
    return e;
  }
  function Ga() {
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
  function Ya(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = at, l = o.baseQueue, p = n.pending;
    if (p !== null) {
      if (l !== null) {
        var y = l.next;
        l.next = p.next, p.next = y;
      }
      o.baseQueue = l = p, n.pending = null;
    }
    if (l !== null) {
      p = l.next, o = o.baseState;
      var A = y = null, N = null, G = p;
      do {
        var re = G.lane;
        if ((Br & re) === re) N !== null && (N = N.next = { lane: 0, action: G.action, hasEagerState: G.hasEagerState, eagerState: G.eagerState, next: null }), o = G.hasEagerState ? G.eagerState : e(o, G.action);
        else {
          var ie = {
            lane: re,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          };
          N === null ? (A = N = ie, y = o) : N = N.next = ie, et.lanes |= re, jr |= re;
        }
        G = G.next;
      } while (G !== null && G !== p);
      N === null ? y = o : N.next = A, Bt(o, t.memoizedState) || (kt = !0), t.memoizedState = o, t.baseState = y, t.baseQueue = N, n.lastRenderedState = o;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        p = l.lane, et.lanes |= p, jr |= p, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ka(e) {
    var t = Tt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var o = n.dispatch, l = n.pending, p = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var y = l = l.next;
      do
        p = e(p, y.action), y = y.next;
      while (y !== l);
      Bt(p, t.memoizedState) || (kt = !0), t.memoizedState = p, t.baseQueue === null && (t.baseState = p), n.lastRenderedState = p;
    }
    return [p, o];
  }
  function bc() {
  }
  function yc(e, t) {
    var n = et, o = Tt(), l = t(), p = !Bt(o.memoizedState, l);
    if (p && (o.memoizedState = l, kt = !0), o = o.queue, Xa(wc.bind(null, n, o, e), [e]), o.getSnapshot !== t || p || ct !== null && ct.memoizedState.tag & 1) {
      if (n.flags |= 2048, ei(9, vc.bind(null, n, o, l, t), void 0, null), dt === null) throw Error(i(349));
      Br & 30 || xc(n, t, l);
    }
    return l;
  }
  function xc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vc(e, t, n, o) {
    t.value = n, t.getSnapshot = o, kc(t) && Sc(e);
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
    t !== null && Ut(t, e, 1, -1);
  }
  function Ec(e) {
    var t = Xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = bf.bind(null, et, e), [t.memoizedState, e];
  }
  function ei(e, t, n, o) {
    return e = { tag: e, create: t, destroy: n, deps: o, next: null }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (o = n.next, n.next = e, e.next = o, t.lastEffect = e)), e;
  }
  function Cc() {
    return Tt().memoizedState;
  }
  function so(e, t, n, o) {
    var l = Xt();
    et.flags |= e, l.memoizedState = ei(1 | t, n, void 0, o === void 0 ? null : o);
  }
  function lo(e, t, n, o) {
    var l = Tt();
    o = o === void 0 ? null : o;
    var p = void 0;
    if (at !== null) {
      var y = at.memoizedState;
      if (p = y.destroy, o !== null && Ua(o, y.deps)) {
        l.memoizedState = ei(t, n, p, o);
        return;
      }
    }
    et.flags |= e, l.memoizedState = ei(1 | t, n, p, o);
  }
  function zc(e, t) {
    return so(8390656, 8, e, t);
  }
  function Xa(e, t) {
    return lo(2048, 8, e, t);
  }
  function Rc(e, t) {
    return lo(4, 2, e, t);
  }
  function Ac(e, t) {
    return lo(4, 4, e, t);
  }
  function Pc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Lc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, lo(4, 4, Pc.bind(null, t, e), n);
  }
  function Qa() {
  }
  function Ic(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Ua(t, o[1]) ? o[0] : (n.memoizedState = [e, t], e);
  }
  function Nc(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var o = n.memoizedState;
    return o !== null && t !== null && Ua(t, o[1]) ? o[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Oc(e, t, n) {
    return Br & 21 ? (Bt(n, t) || (n = dl(), et.lanes |= n, jr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = n);
  }
  function hf(e, t) {
    var n = We;
    We = n !== 0 && 4 > n ? n : 4, e(!0);
    var o = Wa.transition;
    Wa.transition = {};
    try {
      e(!1), t();
    } finally {
      We = n, Wa.transition = o;
    }
  }
  function Tc() {
    return Tt().memoizedState;
  }
  function _f(e, t, n) {
    var o = Sr(e);
    if (n = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null }, Dc(e)) Mc(t, n);
    else if (n = fc(e, t, n, o), n !== null) {
      var l = xt();
      Ut(n, e, o, l), $c(n, t, o);
    }
  }
  function bf(e, t, n) {
    var o = Sr(e), l = { lane: o, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Dc(e)) Mc(t, l);
    else {
      var p = e.alternate;
      if (e.lanes === 0 && (p === null || p.lanes === 0) && (p = t.lastRenderedReducer, p !== null)) try {
        var y = t.lastRenderedState, A = p(y, n);
        if (l.hasEagerState = !0, l.eagerState = A, Bt(A, y)) {
          var N = t.interleaved;
          N === null ? (l.next = l, $a(t)) : (l.next = N.next, N.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = fc(e, t, l, o), n !== null && (l = xt(), Ut(n, e, o, l), $c(n, t, o));
    }
  }
  function Dc(e) {
    var t = e.alternate;
    return e === et || t !== null && t === et;
  }
  function Mc(e, t) {
    Qn = ao = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function $c(e, t, n) {
    if (n & 4194240) {
      var o = t.lanes;
      o &= e.pendingLanes, n |= o, t.lanes = n, Jo(e, n);
    }
  }
  var co = { readContext: Ot, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, yf = { readContext: Ot, useCallback: function(e, t) {
    return Xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Ot, useEffect: zc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, so(
      4194308,
      4,
      Pc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return so(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return so(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var o = Xt();
    return t = n !== void 0 ? n(t) : t, o.memoizedState = o.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, o.queue = e, e = e.dispatch = _f.bind(null, et, e), [o.memoizedState, e];
  }, useRef: function(e) {
    var t = Xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ec, useDebugValue: Qa, useDeferredValue: function(e) {
    return Xt().memoizedState = e;
  }, useTransition: function() {
    var e = Ec(!1), t = e[0];
    return e = hf.bind(null, e[1]), Xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var o = et, l = Xt();
    if (Ze) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), dt === null) throw Error(i(349));
      Br & 30 || xc(o, t, n);
    }
    l.memoizedState = n;
    var p = { value: n, getSnapshot: t };
    return l.queue = p, zc(wc.bind(
      null,
      o,
      p,
      e
    ), [e]), o.flags |= 2048, ei(9, vc.bind(null, o, p, n, t), void 0, null), n;
  }, useId: function() {
    var e = Xt(), t = dt.identifierPrefix;
    if (Ze) {
      var n = rr, o = tr;
      n = (o & ~(1 << 32 - Ht(o) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = mf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, xf = {
    readContext: Ot,
    useCallback: Ic,
    useContext: Ot,
    useEffect: Xa,
    useImperativeHandle: Lc,
    useInsertionEffect: Rc,
    useLayoutEffect: Ac,
    useMemo: Nc,
    useReducer: Ya,
    useRef: Cc,
    useState: function() {
      return Ya(Jn);
    },
    useDebugValue: Qa,
    useDeferredValue: function(e) {
      var t = Tt();
      return Oc(t, at.memoizedState, e);
    },
    useTransition: function() {
      var e = Ya(Jn)[0], t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: bc,
    useSyncExternalStore: yc,
    useId: Tc,
    unstable_isNewReconciler: !1
  }, vf = { readContext: Ot, useCallback: Ic, useContext: Ot, useEffect: Xa, useImperativeHandle: Lc, useInsertionEffect: Rc, useLayoutEffect: Ac, useMemo: Nc, useReducer: Ka, useRef: Cc, useState: function() {
    return Ka(Jn);
  }, useDebugValue: Qa, useDeferredValue: function(e) {
    var t = Tt();
    return at === null ? t.memoizedState = e : Oc(t, at.memoizedState, e);
  }, useTransition: function() {
    var e = Ka(Jn)[0], t = Tt().memoizedState;
    return [e, t];
  }, useMutableSource: bc, useSyncExternalStore: yc, useId: Tc, unstable_isNewReconciler: !1 };
  function Ft(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Za(e, t, n, o) {
    t = e.memoizedState, n = n(o, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var uo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nr(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var o = xt(), l = Sr(e), p = ir(o, l);
    p.payload = t, n != null && (p.callback = n), t = xr(e, p, l), t !== null && (Ut(t, e, l, o), ro(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var o = xt(), l = Sr(e), p = ir(o, l);
    p.tag = 1, p.payload = t, n != null && (p.callback = n), t = xr(e, p, l), t !== null && (Ut(t, e, l, o), ro(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = xt(), o = Sr(e), l = ir(n, o);
    l.tag = 2, t != null && (l.callback = t), t = xr(e, l, o), t !== null && (Ut(t, e, o, n), ro(t, e, o));
  } };
  function Hc(e, t, n, o, l, p, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, p, y) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, o) || !Bn(l, p) : !0;
  }
  function Bc(e, t, n) {
    var o = !1, l = _r, p = t.contextType;
    return typeof p == "object" && p !== null ? p = Ot(p) : (l = wt(t) ? Tr : mt.current, o = t.contextTypes, p = (o = o != null) ? on(e, l) : _r), t = new t(n, p), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = uo, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = p), t;
  }
  function jc(e, t, n, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && uo.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t, n, o) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ha(e);
    var p = t.contextType;
    typeof p == "object" && p !== null ? l.context = Ot(p) : (p = wt(t) ? Tr : mt.current, l.context = on(e, p)), l.state = e.memoizedState, p = t.getDerivedStateFromProps, typeof p == "function" && (Za(e, t, p, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && uo.enqueueReplaceState(l, l.state, null), no(e, n, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function fn(e, t) {
    try {
      var n = "", o = t;
      do
        n += Ce(o), o = o.return;
      while (o);
      var l = n;
    } catch (p) {
      l = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function es(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ts(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var wf = typeof WeakMap == "function" ? WeakMap : Map;
  function Fc(e, t, n) {
    n = ir(-1, n), n.tag = 3, n.payload = { element: null };
    var o = t.value;
    return n.callback = function() {
      bo || (bo = !0, hs = o), ts(e, t);
    }, n;
  }
  function qc(e, t, n) {
    n = ir(-1, n), n.tag = 3;
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var l = t.value;
      n.payload = function() {
        return o(l);
      }, n.callback = function() {
        ts(e, t);
      };
    }
    var p = e.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (n.callback = function() {
      ts(e, t), typeof o != "function" && (wr === null ? wr = /* @__PURE__ */ new Set([this]) : wr.add(this));
      var y = t.stack;
      this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
    }), n;
  }
  function Wc(e, t, n) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new wf();
      var l = /* @__PURE__ */ new Set();
      o.set(t, l);
    } else l = o.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), o.set(t, l));
    l.has(n) || (l.add(n), e = Df.bind(null, e, t, n), t.then(e, e));
  }
  function Uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Vc(e, t, n, o, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ir(-1, 1), t.tag = 2, xr(n, t, 1))), n.lanes |= 1), e);
  }
  var kf = h.ReactCurrentOwner, kt = !1;
  function yt(e, t, n, o) {
    t.child = e === null ? pc(t, null, n, o) : cn(t, e.child, n, o);
  }
  function Gc(e, t, n, o, l) {
    n = n.render;
    var p = t.ref;
    return un(t, l), o = Va(e, t, n, o, p, l), n = Ga(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, or(e, t, l)) : (Ze && n && Aa(t), t.flags |= 1, yt(e, t, o, l), t.child);
  }
  function Yc(e, t, n, o, l) {
    if (e === null) {
      var p = n.type;
      return typeof p == "function" && !ks(p) && p.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = p, Kc(e, t, p, o, l)) : (e = So(n.type, null, o, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (p = e.child, !(e.lanes & l)) {
      var y = p.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Bn, n(y, o) && e.ref === t.ref) return or(e, t, l);
    }
    return t.flags |= 1, e = Cr(p, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Kc(e, t, n, o, l) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Bn(p, o) && e.ref === t.ref) if (kt = !1, t.pendingProps = o = p, (e.lanes & l) !== 0) e.flags & 131072 && (kt = !0);
      else return t.lanes = e.lanes, or(e, t, l);
    }
    return rs(e, t, n, o, l);
  }
  function Xc(e, t, n) {
    var o = t.pendingProps, l = o.children, p = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(mn, Lt), Lt |= n;
    else {
      if (!(n & 1073741824)) return e = p !== null ? p.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ge(mn, Lt), Lt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = p !== null ? p.baseLanes : n, Ge(mn, Lt), Lt |= o;
    }
    else p !== null ? (o = p.baseLanes | n, t.memoizedState = null) : o = n, Ge(mn, Lt), Lt |= o;
    return yt(e, t, l, n), t.child;
  }
  function Qc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function rs(e, t, n, o, l) {
    var p = wt(n) ? Tr : mt.current;
    return p = on(t, p), un(t, l), n = Va(e, t, n, o, p, l), o = Ga(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, or(e, t, l)) : (Ze && o && Aa(t), t.flags |= 1, yt(e, t, n, l), t.child);
  }
  function Zc(e, t, n, o, l) {
    if (wt(n)) {
      var p = !0;
      Yi(t);
    } else p = !1;
    if (un(t, l), t.stateNode === null) fo(e, t), Bc(t, n, o), Ja(t, n, o, l), o = !0;
    else if (e === null) {
      var y = t.stateNode, A = t.memoizedProps;
      y.props = A;
      var N = y.context, G = n.contextType;
      typeof G == "object" && G !== null ? G = Ot(G) : (G = wt(n) ? Tr : mt.current, G = on(t, G));
      var re = n.getDerivedStateFromProps, ie = typeof re == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      ie || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (A !== o || N !== G) && jc(t, y, o, G), yr = !1;
      var J = t.memoizedState;
      y.state = J, no(t, o, y, l), N = t.memoizedState, A !== o || J !== N || vt.current || yr ? (typeof re == "function" && (Za(t, n, re, o), N = t.memoizedState), (A = yr || Hc(t, n, A, o, J, N, G)) ? (ie || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = N), y.props = o, y.state = N, y.context = G, o = A) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      y = t.stateNode, gc(e, t), A = t.memoizedProps, G = t.type === t.elementType ? A : Ft(t.type, A), y.props = G, ie = t.pendingProps, J = y.context, N = n.contextType, typeof N == "object" && N !== null ? N = Ot(N) : (N = wt(n) ? Tr : mt.current, N = on(t, N));
      var me = n.getDerivedStateFromProps;
      (re = typeof me == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (A !== ie || J !== N) && jc(t, y, o, N), yr = !1, J = t.memoizedState, y.state = J, no(t, o, y, l);
      var be = t.memoizedState;
      A !== ie || J !== be || vt.current || yr ? (typeof me == "function" && (Za(t, n, me, o), be = t.memoizedState), (G = yr || Hc(t, n, G, o, J, be, N) || !1) ? (re || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, be, N), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(o, be, N)), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || A === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = be), y.props = o, y.state = be, y.context = N, o = G) : (typeof y.componentDidUpdate != "function" || A === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return ns(e, t, n, o, p, l);
  }
  function ns(e, t, n, o, l, p) {
    Qc(e, t);
    var y = (t.flags & 128) !== 0;
    if (!o && !y) return l && nc(t, n, !1), or(e, t, p);
    o = t.stateNode, kf.current = t;
    var A = y && typeof n.getDerivedStateFromError != "function" ? null : o.render();
    return t.flags |= 1, e !== null && y ? (t.child = cn(t, e.child, null, p), t.child = cn(t, null, A, p)) : yt(e, t, A, p), t.memoizedState = o.state, l && nc(t, n, !0), t.child;
  }
  function Jc(e) {
    var t = e.stateNode;
    t.pendingContext ? tc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tc(e, t.context, !1), Ba(e, t.containerInfo);
  }
  function ed(e, t, n, o, l) {
    return ln(), Na(l), t.flags |= 256, yt(e, t, n, o), t.child;
  }
  var is = { dehydrated: null, treeContext: null, retryLane: 0 };
  function os(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function td(e, t, n) {
    var o = t.pendingProps, l = Je.current, p = !1, y = (t.flags & 128) !== 0, A;
    if ((A = y) || (A = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), A ? (p = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Ge(Je, l & 1), e === null)
      return Ia(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (y = o.children, e = o.fallback, p ? (o = t.mode, p = t.child, y = { mode: "hidden", children: y }, !(o & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = y) : p = Eo(y, o, 0, null), e = Ur(e, o, n, null), p.return = t, e.return = t, p.sibling = e, t.child = p, t.child.memoizedState = os(n), t.memoizedState = is, e) : as(t, y));
    if (l = e.memoizedState, l !== null && (A = l.dehydrated, A !== null)) return Sf(e, t, y, o, A, l, n);
    if (p) {
      p = o.fallback, y = t.mode, l = e.child, A = l.sibling;
      var N = { mode: "hidden", children: o.children };
      return !(y & 1) && t.child !== l ? (o = t.child, o.childLanes = 0, o.pendingProps = N, t.deletions = null) : (o = Cr(l, N), o.subtreeFlags = l.subtreeFlags & 14680064), A !== null ? p = Cr(A, p) : (p = Ur(p, y, n, null), p.flags |= 2), p.return = t, o.return = t, o.sibling = p, t.child = o, o = p, p = t.child, y = e.child.memoizedState, y = y === null ? os(n) : { baseLanes: y.baseLanes | n, cachePool: null, transitions: y.transitions }, p.memoizedState = y, p.childLanes = e.childLanes & ~n, t.memoizedState = is, o;
    }
    return p = e.child, e = p.sibling, o = Cr(p, { mode: "visible", children: o.children }), !(t.mode & 1) && (o.lanes = n), o.return = t, o.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o;
  }
  function as(e, t) {
    return t = Eo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function po(e, t, n, o) {
    return o !== null && Na(o), cn(t, e.child, null, n), e = as(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Sf(e, t, n, o, l, p, y) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, o = es(Error(i(422))), po(e, t, y, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (p = o.fallback, l = t.mode, o = Eo({ mode: "visible", children: o.children }, l, 0, null), p = Ur(p, l, y, null), p.flags |= 2, o.return = t, p.return = t, o.sibling = p, t.child = o, t.mode & 1 && cn(t, e.child, null, y), t.child.memoizedState = os(y), t.memoizedState = is, p);
    if (!(t.mode & 1)) return po(e, t, y, null);
    if (l.data === "$!") {
      if (o = l.nextSibling && l.nextSibling.dataset, o) var A = o.dgst;
      return o = A, p = Error(i(419)), o = es(p, o, void 0), po(e, t, y, o);
    }
    if (A = (y & e.childLanes) !== 0, kt || A) {
      if (o = dt, o !== null) {
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
        l = l & (o.suspendedLanes | y) ? 0 : l, l !== 0 && l !== p.retryLane && (p.retryLane = l, nr(e, l), Ut(o, e, l, -1));
      }
      return ws(), o = es(Error(i(421))), po(e, t, y, o);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Mf.bind(null, e), l._reactRetry = t, null) : (e = p.treeContext, Pt = mr(l.nextSibling), At = t, Ze = !0, jt = null, e !== null && (It[Nt++] = tr, It[Nt++] = rr, It[Nt++] = Dr, tr = e.id, rr = e.overflow, Dr = t), t = as(t, o.children), t.flags |= 4096, t);
  }
  function rd(e, t, n) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), Ma(e.return, t, n);
  }
  function ss(e, t, n, o, l) {
    var p = e.memoizedState;
    p === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: n, tailMode: l } : (p.isBackwards = t, p.rendering = null, p.renderingStartTime = 0, p.last = o, p.tail = n, p.tailMode = l);
  }
  function nd(e, t, n) {
    var o = t.pendingProps, l = o.revealOrder, p = o.tail;
    if (yt(e, t, o.children, n), o = Je.current, o & 2) o = o & 1 | 2, t.flags |= 128;
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
      o &= 1;
    }
    if (Ge(Je, o), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && io(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ss(t, !1, l, n, p);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && io(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ss(t, !0, n, null, p);
        break;
      case "together":
        ss(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function or(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), jr |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = Cr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Cr(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ef(e, t, n) {
    switch (t.tag) {
      case 3:
        Jc(t), ln();
        break;
      case 5:
        _c(t);
        break;
      case 1:
        wt(t.type) && Yi(t);
        break;
      case 4:
        Ba(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context, l = t.memoizedProps.value;
        Ge(eo, o._currentValue), o._currentValue = l;
        break;
      case 13:
        if (o = t.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ge(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? td(e, t, n) : (Ge(Je, Je.current & 1), e = or(e, t, n), e !== null ? e.sibling : null);
        Ge(Je, Je.current & 1);
        break;
      case 19:
        if (o = (n & t.childLanes) !== 0, e.flags & 128) {
          if (o) return nd(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ge(Je, Je.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Xc(e, t, n);
    }
    return or(e, t, n);
  }
  var id, ls, od, ad;
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
  }, ls = function() {
  }, od = function(e, t, n, o) {
    var l = e.memoizedProps;
    if (l !== o) {
      e = t.stateNode, Hr(Kt.current);
      var p = null;
      switch (n) {
        case "input":
          l = Ve(e, l), o = Ve(e, o), p = [];
          break;
        case "select":
          l = W({}, l, { value: void 0 }), o = W({}, o, { value: void 0 }), p = [];
          break;
        case "textarea":
          l = Ee(e, l), o = Ee(e, o), p = [];
          break;
        default:
          typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = Ui);
      }
      pt(n, o);
      var y;
      n = null;
      for (G in l) if (!o.hasOwnProperty(G) && l.hasOwnProperty(G) && l[G] != null) if (G === "style") {
        var A = l[G];
        for (y in A) A.hasOwnProperty(y) && (n || (n = {}), n[y] = "");
      } else G !== "dangerouslySetInnerHTML" && G !== "children" && G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && G !== "autoFocus" && (s.hasOwnProperty(G) ? p || (p = []) : (p = p || []).push(G, null));
      for (G in o) {
        var N = o[G];
        if (A = l?.[G], o.hasOwnProperty(G) && N !== A && (N != null || A != null)) if (G === "style") if (A) {
          for (y in A) !A.hasOwnProperty(y) || N && N.hasOwnProperty(y) || (n || (n = {}), n[y] = "");
          for (y in N) N.hasOwnProperty(y) && A[y] !== N[y] && (n || (n = {}), n[y] = N[y]);
        } else n || (p || (p = []), p.push(
          G,
          n
        )), n = N;
        else G === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, A = A ? A.__html : void 0, N != null && A !== N && (p = p || []).push(G, N)) : G === "children" ? typeof N != "string" && typeof N != "number" || (p = p || []).push(G, "" + N) : G !== "suppressContentEditableWarning" && G !== "suppressHydrationWarning" && (s.hasOwnProperty(G) ? (N != null && G === "onScroll" && Ye("scroll", e), p || A === N || (p = [])) : (p = p || []).push(G, N));
      }
      n && (p = p || []).push("style", n);
      var G = p;
      (t.updateQueue = G) && (t.flags |= 4);
    }
  }, ad = function(e, t, n, o) {
    n !== o && (t.flags |= 4);
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
        for (var o = null; n !== null; ) n.alternate !== null && (o = n), n = n.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, o = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, o |= l.subtreeFlags & 14680064, o |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, o |= l.subtreeFlags, o |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= o, e.childLanes = n, t;
  }
  function Cf(e, t, n) {
    var o = t.pendingProps;
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
        return wt(t.type) && Gi(), _t(t), null;
      case 3:
        return o = t.stateNode, pn(), Ke(vt), Ke(mt), qa(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (Zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && (ys(jt), jt = null))), ls(e, t), _t(t), null;
      case 5:
        ja(t);
        var l = Hr(Xn.current);
        if (n = t.type, e !== null && t.stateNode != null) od(e, t, n, o, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return _t(t), null;
          }
          if (e = Hr(Kt.current), Zi(t)) {
            o = t.stateNode, n = t.type;
            var p = t.memoizedProps;
            switch (o[Yt] = t, o[Un] = p, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ye("cancel", o), Ye("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", o);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) Ye(Fn[l], o);
                break;
              case "source":
                Ye("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ye(
                  "error",
                  o
                ), Ye("load", o);
                break;
              case "details":
                Ye("toggle", o);
                break;
              case "input":
                rt(o, p), Ye("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!p.multiple }, Ye("invalid", o);
                break;
              case "textarea":
                Pe(o, p), Ye("invalid", o);
            }
            pt(n, p), l = null;
            for (var y in p) if (p.hasOwnProperty(y)) {
              var A = p[y];
              y === "children" ? typeof A == "string" ? o.textContent !== A && (p.suppressHydrationWarning !== !0 && Wi(o.textContent, A, e), l = ["children", A]) : typeof A == "number" && o.textContent !== "" + A && (p.suppressHydrationWarning !== !0 && Wi(
                o.textContent,
                A,
                e
              ), l = ["children", "" + A]) : s.hasOwnProperty(y) && A != null && y === "onScroll" && Ye("scroll", o);
            }
            switch (n) {
              case "input":
                Le(o), B(o, p, !0);
                break;
              case "textarea":
                Le(o), Ue(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (o.onclick = Ui);
            }
            o = l, t.updateQueue = o, o !== null && (t.flags |= 4);
          } else {
            y = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = y.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = y.createElement(n, { is: o.is }) : (e = y.createElement(n), n === "select" && (y = e, o.multiple ? y.multiple = !0 : o.size && (y.size = o.size))) : e = y.createElementNS(e, n), e[Yt] = t, e[Un] = o, id(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (y = $t(n, o), n) {
                case "dialog":
                  Ye("cancel", e), Ye("close", e), l = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ye("load", e), l = o;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Fn.length; l++) Ye(Fn[l], e);
                  l = o;
                  break;
                case "source":
                  Ye("error", e), l = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ye(
                    "error",
                    e
                  ), Ye("load", e), l = o;
                  break;
                case "details":
                  Ye("toggle", e), l = o;
                  break;
                case "input":
                  rt(e, o), l = Ve(e, o), Ye("invalid", e);
                  break;
                case "option":
                  l = o;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!o.multiple }, l = W({}, o, { value: void 0 }), Ye("invalid", e);
                  break;
                case "textarea":
                  Pe(e, o), l = Ee(e, o), Ye("invalid", e);
                  break;
                default:
                  l = o;
              }
              pt(n, l), A = l;
              for (p in A) if (A.hasOwnProperty(p)) {
                var N = A[p];
                p === "style" ? Me(e, N) : p === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0, N != null && q(e, N)) : p === "children" ? typeof N == "string" ? (n !== "textarea" || N !== "") && K(e, N) : typeof N == "number" && K(e, "" + N) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (s.hasOwnProperty(p) ? N != null && p === "onScroll" && Ye("scroll", e) : N != null && w(e, p, N, y));
              }
              switch (n) {
                case "input":
                  Le(e), B(e, o, !1);
                  break;
                case "textarea":
                  Le(e), Ue(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + te(o.value));
                  break;
                case "select":
                  e.multiple = !!o.multiple, p = o.value, p != null ? ve(e, !!o.multiple, p, !1) : o.defaultValue != null && ve(
                    e,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Ui);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return _t(t), null;
      case 6:
        if (e && t.stateNode != null) ad(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Hr(Xn.current), Hr(Kt.current), Zi(t)) {
            if (o = t.stateNode, n = t.memoizedProps, o[Yt] = t, (p = o.nodeValue !== n) && (e = At, e !== null)) switch (e.tag) {
              case 3:
                Wi(o.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Wi(o.nodeValue, n, (e.mode & 1) !== 0);
            }
            p && (t.flags |= 4);
          } else o = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(o), o[Yt] = t, t.stateNode = o;
        }
        return _t(t), null;
      case 13:
        if (Ke(Je), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && Pt !== null && t.mode & 1 && !(t.flags & 128)) cc(), ln(), t.flags |= 98560, p = !1;
          else if (p = Zi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(i(318));
              if (p = t.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
              p[Yt] = t;
            } else ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            _t(t), p = !1;
          } else jt !== null && (ys(jt), jt = null), p = !0;
          if (!p) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, t.mode & 1 && (e === null || Je.current & 1 ? st === 0 && (st = 3) : ws())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
      case 4:
        return pn(), ls(e, t), e === null && qn(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return Da(t.type._context), _t(t), null;
      case 17:
        return wt(t.type) && Gi(), _t(t), null;
      case 19:
        if (Ke(Je), p = t.memoizedState, p === null) return _t(t), null;
        if (o = (t.flags & 128) !== 0, y = p.rendering, y === null) if (o) ti(p, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (y = io(e), y !== null) {
              for (t.flags |= 128, ti(p, !1), o = y.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = n, n = t.child; n !== null; ) p = n, e = o, p.flags &= 14680066, y = p.alternate, y === null ? (p.childLanes = 0, p.lanes = e, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = y.childLanes, p.lanes = y.lanes, p.child = y.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = y.memoizedProps, p.memoizedState = y.memoizedState, p.updateQueue = y.updateQueue, p.type = y.type, e = y.dependencies, p.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ge(Je, Je.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          p.tail !== null && nt() > hn && (t.flags |= 128, o = !0, ti(p, !1), t.lanes = 4194304);
        }
        else {
          if (!o) if (e = io(y), e !== null) {
            if (t.flags |= 128, o = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ti(p, !0), p.tail === null && p.tailMode === "hidden" && !y.alternate && !Ze) return _t(t), null;
          } else 2 * nt() - p.renderingStartTime > hn && n !== 1073741824 && (t.flags |= 128, o = !0, ti(p, !1), t.lanes = 4194304);
          p.isBackwards ? (y.sibling = t.child, t.child = y) : (n = p.last, n !== null ? n.sibling = y : t.child = y, p.last = y);
        }
        return p.tail !== null ? (t = p.tail, p.rendering = t, p.tail = t.sibling, p.renderingStartTime = nt(), t.sibling = null, n = Je.current, Ge(Je, o ? n & 1 | 2 : n & 1), t) : (_t(t), null);
      case 22:
      case 23:
        return vs(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && t.mode & 1 ? Lt & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function zf(e, t) {
    switch (Pa(t), t.tag) {
      case 1:
        return wt(t.type) && Gi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pn(), Ke(vt), Ke(mt), qa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ja(t), null;
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
        return Da(t.type._context), null;
      case 22:
      case 23:
        return vs(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var go = !1, bt = !1, Rf = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function gn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (o) {
      tt(e, t, o);
    }
    else n.current = null;
  }
  function cs(e, t, n) {
    try {
      n();
    } catch (o) {
      tt(e, t, o);
    }
  }
  var sd = !1;
  function Af(e, t) {
    if (va = Ni, e = Hl(), fa(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var o = n.getSelection && n.getSelection();
        if (o && o.rangeCount !== 0) {
          n = o.anchorNode;
          var l = o.anchorOffset, p = o.focusNode;
          o = o.focusOffset;
          try {
            n.nodeType, p.nodeType;
          } catch {
            n = null;
            break e;
          }
          var y = 0, A = -1, N = -1, G = 0, re = 0, ie = e, J = null;
          t: for (; ; ) {
            for (var me; ie !== n || l !== 0 && ie.nodeType !== 3 || (A = y + l), ie !== p || o !== 0 && ie.nodeType !== 3 || (N = y + o), ie.nodeType === 3 && (y += ie.nodeValue.length), (me = ie.firstChild) !== null; )
              J = ie, ie = me;
            for (; ; ) {
              if (ie === e) break t;
              if (J === n && ++G === l && (A = y), J === p && ++re === o && (N = y), (me = ie.nextSibling) !== null) break;
              ie = J, J = ie.parentNode;
            }
            ie = me;
          }
          n = A === -1 || N === -1 ? null : { start: A, end: N };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wa = { focusedElem: e, selectionRange: n }, Ni = !1, _e = t; _e !== null; ) if (t = _e, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _e = e;
    else for (; _e !== null; ) {
      t = _e;
      try {
        var be = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (be !== null) {
              var xe = be.memoizedProps, it = be.memoizedState, j = t.stateNode, D = j.getSnapshotBeforeUpdate(t.elementType === t.type ? xe : Ft(t.type, xe), it);
              j.__reactInternalSnapshotBeforeUpdate = D;
            }
            break;
          case 3:
            var U = t.stateNode.containerInfo;
            U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (ae) {
        tt(t, t.return, ae);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, _e = e;
        break;
      }
      _e = t.return;
    }
    return be = sd, sd = !1, be;
  }
  function ri(e, t, n) {
    var o = t.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var l = o = o.next;
      do {
        if ((l.tag & e) === e) {
          var p = l.destroy;
          l.destroy = void 0, p !== void 0 && cs(t, n, p);
        }
        l = l.next;
      } while (l !== o);
    }
  }
  function mo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var o = n.create;
          n.destroy = o();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ds(e) {
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
    t !== null && (e.alternate = null, ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Un], delete t[Ca], delete t[uf], delete t[pf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  function us(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ui));
    else if (o !== 4 && (e = e.child, e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), e = e.sibling;
  }
  function ps(e, t, n) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (o !== 4 && (e = e.child, e !== null)) for (ps(e, t, n), e = e.sibling; e !== null; ) ps(e, t, n), e = e.sibling;
  }
  var ft = null, qt = !1;
  function vr(e, t, n) {
    for (n = n.child; n !== null; ) ud(e, t, n), n = n.sibling;
  }
  function ud(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(zi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        bt || gn(n, t);
      case 6:
        var o = ft, l = qt;
        ft = null, vr(e, t, n), ft = o, qt = l, ft !== null && (qt ? (e = ft, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ft.removeChild(n.stateNode));
        break;
      case 18:
        ft !== null && (qt ? (e = ft, n = n.stateNode, e.nodeType === 8 ? Ea(e.parentNode, n) : e.nodeType === 1 && Ea(e, n), On(e)) : Ea(ft, n.stateNode));
        break;
      case 4:
        o = ft, l = qt, ft = n.stateNode.containerInfo, qt = !0, vr(e, t, n), ft = o, qt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bt && (o = n.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          l = o = o.next;
          do {
            var p = l, y = p.destroy;
            p = p.tag, y !== void 0 && (p & 2 || p & 4) && cs(n, t, y), l = l.next;
          } while (l !== o);
        }
        vr(e, t, n);
        break;
      case 1:
        if (!bt && (gn(n, t), o = n.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = n.memoizedProps, o.state = n.memoizedState, o.componentWillUnmount();
        } catch (A) {
          tt(n, t, A);
        }
        vr(e, t, n);
        break;
      case 21:
        vr(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (bt = (o = bt) || n.memoizedState !== null, vr(e, t, n), bt = o) : vr(e, t, n);
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
      n === null && (n = e.stateNode = new Rf()), t.forEach(function(o) {
        var l = $f.bind(null, e, o);
        n.has(o) || (n.add(o), o.then(l, l));
      });
    }
  }
  function Wt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var o = 0; o < n.length; o++) {
      var l = n[o];
      try {
        var p = e, y = t, A = y;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 5:
              ft = A.stateNode, qt = !1;
              break e;
            case 3:
              ft = A.stateNode.containerInfo, qt = !0;
              break e;
            case 4:
              ft = A.stateNode.containerInfo, qt = !0;
              break e;
          }
          A = A.return;
        }
        if (ft === null) throw Error(i(160));
        ud(p, y, l), ft = null, qt = !1;
        var N = l.alternate;
        N !== null && (N.return = null), l.return = null;
      } catch (G) {
        tt(l, t, G);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fd(t, e), t = t.sibling;
  }
  function fd(e, t) {
    var n = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Wt(t, e), Qt(e), o & 4) {
          try {
            ri(3, e, e.return), mo(3, e);
          } catch (xe) {
            tt(e, e.return, xe);
          }
          try {
            ri(5, e, e.return);
          } catch (xe) {
            tt(e, e.return, xe);
          }
        }
        break;
      case 1:
        Wt(t, e), Qt(e), o & 512 && n !== null && gn(n, n.return);
        break;
      case 5:
        if (Wt(t, e), Qt(e), o & 512 && n !== null && gn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            K(l, "");
          } catch (xe) {
            tt(e, e.return, xe);
          }
        }
        if (o & 4 && (l = e.stateNode, l != null)) {
          var p = e.memoizedProps, y = n !== null ? n.memoizedProps : p, A = e.type, N = e.updateQueue;
          if (e.updateQueue = null, N !== null) try {
            A === "input" && p.type === "radio" && p.name != null && O(l, p), $t(A, y);
            var G = $t(A, p);
            for (y = 0; y < N.length; y += 2) {
              var re = N[y], ie = N[y + 1];
              re === "style" ? Me(l, ie) : re === "dangerouslySetInnerHTML" ? q(l, ie) : re === "children" ? K(l, ie) : w(l, re, ie, G);
            }
            switch (A) {
              case "input":
                M(l, p);
                break;
              case "textarea":
                Ie(l, p);
                break;
              case "select":
                var J = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!p.multiple;
                var me = p.value;
                me != null ? ve(l, !!p.multiple, me, !1) : J !== !!p.multiple && (p.defaultValue != null ? ve(
                  l,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : ve(l, !!p.multiple, p.multiple ? [] : "", !1));
            }
            l[Un] = p;
          } catch (xe) {
            tt(e, e.return, xe);
          }
        }
        break;
      case 6:
        if (Wt(t, e), Qt(e), o & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.stateNode, p = e.memoizedProps;
          try {
            l.nodeValue = p;
          } catch (xe) {
            tt(e, e.return, xe);
          }
        }
        break;
      case 3:
        if (Wt(t, e), Qt(e), o & 4 && n !== null && n.memoizedState.isDehydrated) try {
          On(t.containerInfo);
        } catch (xe) {
          tt(e, e.return, xe);
        }
        break;
      case 4:
        Wt(t, e), Qt(e);
        break;
      case 13:
        Wt(t, e), Qt(e), l = e.child, l.flags & 8192 && (p = l.memoizedState !== null, l.stateNode.isHidden = p, !p || l.alternate !== null && l.alternate.memoizedState !== null || (ms = nt())), o & 4 && pd(e);
        break;
      case 22:
        if (re = n !== null && n.memoizedState !== null, e.mode & 1 ? (bt = (G = bt) || re, Wt(t, e), bt = G) : Wt(t, e), Qt(e), o & 8192) {
          if (G = e.memoizedState !== null, (e.stateNode.isHidden = G) && !re && e.mode & 1) for (_e = e, re = e.child; re !== null; ) {
            for (ie = _e = re; _e !== null; ) {
              switch (J = _e, me = J.child, J.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ri(4, J, J.return);
                  break;
                case 1:
                  gn(J, J.return);
                  var be = J.stateNode;
                  if (typeof be.componentWillUnmount == "function") {
                    o = J, n = J.return;
                    try {
                      t = o, be.props = t.memoizedProps, be.state = t.memoizedState, be.componentWillUnmount();
                    } catch (xe) {
                      tt(o, n, xe);
                    }
                  }
                  break;
                case 5:
                  gn(J, J.return);
                  break;
                case 22:
                  if (J.memoizedState !== null) {
                    hd(ie);
                    continue;
                  }
              }
              me !== null ? (me.return = J, _e = me) : hd(ie);
            }
            re = re.sibling;
          }
          e: for (re = null, ie = e; ; ) {
            if (ie.tag === 5) {
              if (re === null) {
                re = ie;
                try {
                  l = ie.stateNode, G ? (p = l.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (A = ie.stateNode, N = ie.memoizedProps.style, y = N != null && N.hasOwnProperty("display") ? N.display : null, A.style.display = De("display", y));
                } catch (xe) {
                  tt(e, e.return, xe);
                }
              }
            } else if (ie.tag === 6) {
              if (re === null) try {
                ie.stateNode.nodeValue = G ? "" : ie.memoizedProps;
              } catch (xe) {
                tt(e, e.return, xe);
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
        Wt(t, e), Qt(e), o & 4 && pd(e);
        break;
      case 21:
        break;
      default:
        Wt(
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
              var o = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (o.tag) {
          case 5:
            var l = o.stateNode;
            o.flags & 32 && (K(l, ""), o.flags &= -33);
            var p = dd(e);
            ps(e, p, l);
            break;
          case 3:
          case 4:
            var y = o.stateNode.containerInfo, A = dd(e);
            us(e, A, y);
            break;
          default:
            throw Error(i(161));
        }
      } catch (N) {
        tt(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pf(e, t, n) {
    _e = e, gd(e);
  }
  function gd(e, t, n) {
    for (var o = (e.mode & 1) !== 0; _e !== null; ) {
      var l = _e, p = l.child;
      if (l.tag === 22 && o) {
        var y = l.memoizedState !== null || go;
        if (!y) {
          var A = l.alternate, N = A !== null && A.memoizedState !== null || bt;
          A = go;
          var G = bt;
          if (go = y, (bt = N) && !G) for (_e = l; _e !== null; ) y = _e, N = y.child, y.tag === 22 && y.memoizedState !== null ? _d(l) : N !== null ? (N.return = y, _e = N) : _d(l);
          for (; p !== null; ) _e = p, gd(p), p = p.sibling;
          _e = l, go = A, bt = G;
        }
        md(e);
      } else l.subtreeFlags & 8772 && p !== null ? (p.return = l, _e = p) : md(e);
    }
  }
  function md(e) {
    for (; _e !== null; ) {
      var t = _e;
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
              var o = t.stateNode;
              if (t.flags & 4 && !bt) if (n === null) o.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                o.componentDidUpdate(l, n.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var p = t.updateQueue;
              p !== null && hc(t, p, o);
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
              var A = t.stateNode;
              if (n === null && t.flags & 4) {
                n = A;
                var N = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    N.autoFocus && n.focus();
                    break;
                  case "img":
                    N.src && (n.src = N.src);
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
                var G = t.alternate;
                if (G !== null) {
                  var re = G.memoizedState;
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
          bt || t.flags & 512 && ds(t);
        } catch (J) {
          tt(t, t.return, J);
        }
      }
      if (t === e) {
        _e = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, _e = n;
        break;
      }
      _e = t.return;
    }
  }
  function hd(e) {
    for (; _e !== null; ) {
      var t = _e;
      if (t === e) {
        _e = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, _e = n;
        break;
      }
      _e = t.return;
    }
  }
  function _d(e) {
    for (; _e !== null; ) {
      var t = _e;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              mo(4, t);
            } catch (N) {
              tt(t, n, N);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var l = t.return;
              try {
                o.componentDidMount();
              } catch (N) {
                tt(t, l, N);
              }
            }
            var p = t.return;
            try {
              ds(t);
            } catch (N) {
              tt(t, p, N);
            }
            break;
          case 5:
            var y = t.return;
            try {
              ds(t);
            } catch (N) {
              tt(t, y, N);
            }
        }
      } catch (N) {
        tt(t, t.return, N);
      }
      if (t === e) {
        _e = null;
        break;
      }
      var A = t.sibling;
      if (A !== null) {
        A.return = t.return, _e = A;
        break;
      }
      _e = t.return;
    }
  }
  var Lf = Math.ceil, ho = h.ReactCurrentDispatcher, fs = h.ReactCurrentOwner, Dt = h.ReactCurrentBatchConfig, He = 0, dt = null, ot = null, gt = 0, Lt = 0, mn = hr(0), st = 0, ni = null, jr = 0, _o = 0, gs = 0, ii = null, St = null, ms = 0, hn = 1 / 0, ar = null, bo = !1, hs = null, wr = null, yo = !1, kr = null, xo = 0, oi = 0, _s = null, vo = -1, wo = 0;
  function xt() {
    return He & 6 ? nt() : vo !== -1 ? vo : vo = nt();
  }
  function Sr(e) {
    return e.mode & 1 ? He & 2 && gt !== 0 ? gt & -gt : gf.transition !== null ? (wo === 0 && (wo = dl()), wo) : (e = We, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yl(e.type)), e) : 1;
  }
  function Ut(e, t, n, o) {
    if (50 < oi) throw oi = 0, _s = null, Error(i(185));
    An(e, n, o), (!(He & 2) || e !== dt) && (e === dt && (!(He & 2) && (_o |= n), st === 4 && Er(e, gt)), Et(e, o), n === 1 && He === 0 && !(t.mode & 1) && (hn = nt() + 500, Ki && br()));
  }
  function Et(e, t) {
    var n = e.callbackNode;
    fp(e, t);
    var o = Pi(e, e === dt ? gt : 0);
    if (o === 0) n !== null && sl(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = o & -o, e.callbackPriority !== t) {
      if (n != null && sl(n), t === 1) e.tag === 0 ? ff(yd.bind(null, e)) : ic(yd.bind(null, e)), cf(function() {
        !(He & 6) && br();
      }), n = null;
      else {
        switch (ul(o)) {
          case 1:
            n = Xo;
            break;
          case 4:
            n = ll;
            break;
          case 16:
            n = Ci;
            break;
          case 536870912:
            n = cl;
            break;
          default:
            n = Ci;
        }
        n = zd(n, bd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function bd(e, t) {
    if (vo = -1, wo = 0, He & 6) throw Error(i(327));
    var n = e.callbackNode;
    if (_n() && e.callbackNode !== n) return null;
    var o = Pi(e, e === dt ? gt : 0);
    if (o === 0) return null;
    if (o & 30 || o & e.expiredLanes || t) t = ko(e, o);
    else {
      t = o;
      var l = He;
      He |= 2;
      var p = vd();
      (dt !== e || gt !== t) && (ar = null, hn = nt() + 500, qr(e, t));
      do
        try {
          Of();
          break;
        } catch (A) {
          xd(e, A);
        }
      while (!0);
      Ta(), ho.current = p, He = l, ot !== null ? t = 0 : (dt = null, gt = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (l = Qo(e), l !== 0 && (o = l, t = bs(e, l))), t === 1) throw n = ni, qr(e, 0), Er(e, o), Et(e, nt()), n;
      if (t === 6) Er(e, o);
      else {
        if (l = e.current.alternate, !(o & 30) && !If(l) && (t = ko(e, o), t === 2 && (p = Qo(e), p !== 0 && (o = p, t = bs(e, p))), t === 1)) throw n = ni, qr(e, 0), Er(e, o), Et(e, nt()), n;
        switch (e.finishedWork = l, e.finishedLanes = o, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Wr(e, St, ar);
            break;
          case 3:
            if (Er(e, o), (o & 130023424) === o && (t = ms + 500 - nt(), 10 < t)) {
              if (Pi(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & o) !== o) {
                xt(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Sa(Wr.bind(null, e, St, ar), t);
              break;
            }
            Wr(e, St, ar);
            break;
          case 4:
            if (Er(e, o), (o & 4194240) === o) break;
            for (t = e.eventTimes, l = -1; 0 < o; ) {
              var y = 31 - Ht(o);
              p = 1 << y, y = t[y], y > l && (l = y), o &= ~p;
            }
            if (o = l, o = nt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Lf(o / 1960)) - o, 10 < o) {
              e.timeoutHandle = Sa(Wr.bind(null, e, St, ar), o);
              break;
            }
            Wr(e, St, ar);
            break;
          case 5:
            Wr(e, St, ar);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Et(e, nt()), e.callbackNode === n ? bd.bind(null, e) : null;
  }
  function bs(e, t) {
    var n = ii;
    return e.current.memoizedState.isDehydrated && (qr(e, t).flags |= 256), e = ko(e, t), e !== 2 && (t = St, St = n, t !== null && ys(t)), e;
  }
  function ys(e) {
    St === null ? St = e : St.push.apply(St, e);
  }
  function If(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var o = 0; o < n.length; o++) {
          var l = n[o], p = l.getSnapshot;
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
    for (t &= ~gs, t &= ~_o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Ht(t), o = 1 << n;
      e[n] = -1, t &= ~o;
    }
  }
  function yd(e) {
    if (He & 6) throw Error(i(327));
    _n();
    var t = Pi(e, 0);
    if (!(t & 1)) return Et(e, nt()), null;
    var n = ko(e, t);
    if (e.tag !== 0 && n === 2) {
      var o = Qo(e);
      o !== 0 && (t = o, n = bs(e, o));
    }
    if (n === 1) throw n = ni, qr(e, 0), Er(e, t), Et(e, nt()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wr(e, St, ar), Et(e, nt()), null;
  }
  function xs(e, t) {
    var n = He;
    He |= 1;
    try {
      return e(t);
    } finally {
      He = n, He === 0 && (hn = nt() + 500, Ki && br());
    }
  }
  function Fr(e) {
    kr !== null && kr.tag === 0 && !(He & 6) && _n();
    var t = He;
    He |= 1;
    var n = Dt.transition, o = We;
    try {
      if (Dt.transition = null, We = 1, e) return e();
    } finally {
      We = o, Dt.transition = n, He = t, !(He & 6) && br();
    }
  }
  function vs() {
    Lt = mn.current, Ke(mn);
  }
  function qr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, lf(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var o = n;
      switch (Pa(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Gi();
          break;
        case 3:
          pn(), Ke(vt), Ke(mt), qa();
          break;
        case 5:
          ja(o);
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
          Da(o.type._context);
          break;
        case 22:
        case 23:
          vs();
      }
      n = n.return;
    }
    if (dt = e, ot = e = Cr(e.current, null), gt = Lt = t, st = 0, ni = null, gs = _o = jr = 0, St = ii = null, $r !== null) {
      for (t = 0; t < $r.length; t++) if (n = $r[t], o = n.interleaved, o !== null) {
        n.interleaved = null;
        var l = o.next, p = n.pending;
        if (p !== null) {
          var y = p.next;
          p.next = l, o.next = y;
        }
        n.pending = o;
      }
      $r = null;
    }
    return e;
  }
  function xd(e, t) {
    do {
      var n = ot;
      try {
        if (Ta(), oo.current = co, ao) {
          for (var o = et.memoizedState; o !== null; ) {
            var l = o.queue;
            l !== null && (l.pending = null), o = o.next;
          }
          ao = !1;
        }
        if (Br = 0, ct = at = et = null, Qn = !1, Zn = 0, fs.current = null, n === null || n.return === null) {
          st = 1, ni = t, ot = null;
          break;
        }
        e: {
          var p = e, y = n.return, A = n, N = t;
          if (t = gt, A.flags |= 32768, N !== null && typeof N == "object" && typeof N.then == "function") {
            var G = N, re = A, ie = re.tag;
            if (!(re.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var J = re.alternate;
              J ? (re.updateQueue = J.updateQueue, re.memoizedState = J.memoizedState, re.lanes = J.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var me = Uc(y);
            if (me !== null) {
              me.flags &= -257, Vc(me, y, A, p, t), me.mode & 1 && Wc(p, G, t), t = me, N = G;
              var be = t.updateQueue;
              if (be === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(N), t.updateQueue = xe;
              } else be.add(N);
              break e;
            } else {
              if (!(t & 1)) {
                Wc(p, G, t), ws();
                break e;
              }
              N = Error(i(426));
            }
          } else if (Ze && A.mode & 1) {
            var it = Uc(y);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), Vc(it, y, A, p, t), Na(fn(N, A));
              break e;
            }
          }
          p = N = fn(N, A), st !== 4 && (st = 2), ii === null ? ii = [p] : ii.push(p), p = y;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, t &= -t, p.lanes |= t;
                var j = Fc(p, N, t);
                mc(p, j);
                break e;
              case 1:
                A = N;
                var D = p.type, U = p.stateNode;
                if (!(p.flags & 128) && (typeof D.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (wr === null || !wr.has(U)))) {
                  p.flags |= 65536, t &= -t, p.lanes |= t;
                  var ae = qc(p, A, t);
                  mc(p, ae);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        kd(n);
      } catch (we) {
        t = we, ot === n && n !== null && (ot = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vd() {
    var e = ho.current;
    return ho.current = co, e === null ? co : e;
  }
  function ws() {
    (st === 0 || st === 3 || st === 2) && (st = 4), dt === null || !(jr & 268435455) && !(_o & 268435455) || Er(dt, gt);
  }
  function ko(e, t) {
    var n = He;
    He |= 2;
    var o = vd();
    (dt !== e || gt !== t) && (ar = null, qr(e, t));
    do
      try {
        Nf();
        break;
      } catch (l) {
        xd(e, l);
      }
    while (!0);
    if (Ta(), He = n, ho.current = o, ot !== null) throw Error(i(261));
    return dt = null, gt = 0, st;
  }
  function Nf() {
    for (; ot !== null; ) wd(ot);
  }
  function Of() {
    for (; ot !== null && !ip(); ) wd(ot);
  }
  function wd(e) {
    var t = Cd(e.alternate, e, Lt);
    e.memoizedProps = e.pendingProps, t === null ? kd(e) : ot = t, fs.current = null;
  }
  function kd(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = zf(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (n = Cf(n, t, Lt), n !== null) {
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
  function Wr(e, t, n) {
    var o = We, l = Dt.transition;
    try {
      Dt.transition = null, We = 1, Tf(e, t, n, o);
    } finally {
      Dt.transition = l, We = o;
    }
    return null;
  }
  function Tf(e, t, n, o) {
    do
      _n();
    while (kr !== null);
    if (He & 6) throw Error(i(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var p = n.lanes | n.childLanes;
    if (gp(e, p), e === dt && (ot = dt = null, gt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yo || (yo = !0, zd(Ci, function() {
      return _n(), null;
    })), p = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || p) {
      p = Dt.transition, Dt.transition = null;
      var y = We;
      We = 1;
      var A = He;
      He |= 4, fs.current = null, Af(e, n), fd(n, e), ef(wa), Ni = !!va, wa = va = null, e.current = n, Pf(n), op(), He = A, We = y, Dt.transition = p;
    } else e.current = n;
    if (yo && (yo = !1, kr = e, xo = l), p = e.pendingLanes, p === 0 && (wr = null), lp(n.stateNode), Et(e, nt()), t !== null) for (o = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], o(l.value, { componentStack: l.stack, digest: l.digest });
    if (bo) throw bo = !1, e = hs, hs = null, e;
    return xo & 1 && e.tag !== 0 && _n(), p = e.pendingLanes, p & 1 ? e === _s ? oi++ : (oi = 0, _s = e) : oi = 0, br(), null;
  }
  function _n() {
    if (kr !== null) {
      var e = ul(xo), t = Dt.transition, n = We;
      try {
        if (Dt.transition = null, We = 16 > e ? 16 : e, kr === null) var o = !1;
        else {
          if (e = kr, kr = null, xo = 0, He & 6) throw Error(i(331));
          var l = He;
          for (He |= 4, _e = e.current; _e !== null; ) {
            var p = _e, y = p.child;
            if (_e.flags & 16) {
              var A = p.deletions;
              if (A !== null) {
                for (var N = 0; N < A.length; N++) {
                  var G = A[N];
                  for (_e = G; _e !== null; ) {
                    var re = _e;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ri(8, re, p);
                    }
                    var ie = re.child;
                    if (ie !== null) ie.return = re, _e = ie;
                    else for (; _e !== null; ) {
                      re = _e;
                      var J = re.sibling, me = re.return;
                      if (ld(re), re === G) {
                        _e = null;
                        break;
                      }
                      if (J !== null) {
                        J.return = me, _e = J;
                        break;
                      }
                      _e = me;
                    }
                  }
                }
                var be = p.alternate;
                if (be !== null) {
                  var xe = be.child;
                  if (xe !== null) {
                    be.child = null;
                    do {
                      var it = xe.sibling;
                      xe.sibling = null, xe = it;
                    } while (xe !== null);
                  }
                }
                _e = p;
              }
            }
            if (p.subtreeFlags & 2064 && y !== null) y.return = p, _e = y;
            else e: for (; _e !== null; ) {
              if (p = _e, p.flags & 2048) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  ri(9, p, p.return);
              }
              var j = p.sibling;
              if (j !== null) {
                j.return = p.return, _e = j;
                break e;
              }
              _e = p.return;
            }
          }
          var D = e.current;
          for (_e = D; _e !== null; ) {
            y = _e;
            var U = y.child;
            if (y.subtreeFlags & 2064 && U !== null) U.return = y, _e = U;
            else e: for (y = D; _e !== null; ) {
              if (A = _e, A.flags & 2048) try {
                switch (A.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mo(9, A);
                }
              } catch (we) {
                tt(A, A.return, we);
              }
              if (A === y) {
                _e = null;
                break e;
              }
              var ae = A.sibling;
              if (ae !== null) {
                ae.return = A.return, _e = ae;
                break e;
              }
              _e = A.return;
            }
          }
          if (He = l, br(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(zi, e);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        We = n, Dt.transition = t;
      }
    }
    return !1;
  }
  function Sd(e, t, n) {
    t = fn(n, t), t = Fc(e, t, 1), e = xr(e, t, 1), t = xt(), e !== null && (An(e, 1, t), Et(e, t));
  }
  function tt(e, t, n) {
    if (e.tag === 3) Sd(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Sd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (wr === null || !wr.has(o))) {
          e = fn(n, e), e = qc(t, e, 1), t = xr(t, e, 1), e = xt(), t !== null && (An(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Df(e, t, n) {
    var o = e.pingCache;
    o !== null && o.delete(t), t = xt(), e.pingedLanes |= e.suspendedLanes & n, dt === e && (gt & n) === n && (st === 4 || st === 3 && (gt & 130023424) === gt && 500 > nt() - ms ? qr(e, 0) : gs |= n), Et(e, t);
  }
  function Ed(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ai, Ai <<= 1, !(Ai & 130023424) && (Ai = 4194304)) : t = 1);
    var n = xt();
    e = nr(e, t), e !== null && (An(e, t, n), Et(e, n));
  }
  function Mf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ed(e, n);
  }
  function $f(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), Ed(e, n);
  }
  var Cd;
  Cd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || vt.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return kt = !1, Ef(e, t, n);
      kt = !!(e.flags & 131072);
    }
    else kt = !1, Ze && t.flags & 1048576 && oc(t, Qi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var o = t.type;
        fo(e, t), e = t.pendingProps;
        var l = on(t, mt.current);
        un(t, n), l = Va(null, t, o, e, l, n);
        var p = Ga();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, wt(o) ? (p = !0, Yi(t)) : p = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ha(t), l.updater = uo, t.stateNode = l, l._reactInternals = t, Ja(t, o, e, n), t = ns(null, t, o, !0, p, n)) : (t.tag = 0, Ze && p && Aa(t), yt(null, t, l, n), t = t.child), t;
      case 16:
        o = t.elementType;
        e: {
          switch (fo(e, t), e = t.pendingProps, l = o._init, o = l(o._payload), t.type = o, l = t.tag = Bf(o), e = Ft(o, e), l) {
            case 0:
              t = rs(null, t, o, e, n);
              break e;
            case 1:
              t = Zc(null, t, o, e, n);
              break e;
            case 11:
              t = Gc(null, t, o, e, n);
              break e;
            case 14:
              t = Yc(null, t, o, Ft(o.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            o,
            ""
          ));
        }
        return t;
      case 0:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Ft(o, l), rs(e, t, o, l, n);
      case 1:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Ft(o, l), Zc(e, t, o, l, n);
      case 3:
        e: {
          if (Jc(t), e === null) throw Error(i(387));
          o = t.pendingProps, p = t.memoizedState, l = p.element, gc(e, t), no(t, o, null, n);
          var y = t.memoizedState;
          if (o = y.element, p.isDehydrated) if (p = { element: o, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, t.updateQueue.baseState = p, t.memoizedState = p, t.flags & 256) {
            l = fn(Error(i(423)), t), t = ed(e, t, o, n, l);
            break e;
          } else if (o !== l) {
            l = fn(Error(i(424)), t), t = ed(e, t, o, n, l);
            break e;
          } else for (Pt = mr(t.stateNode.containerInfo.firstChild), At = t, Ze = !0, jt = null, n = pc(t, null, o, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ln(), o === l) {
              t = or(e, t, n);
              break e;
            }
            yt(e, t, o, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return _c(t), e === null && Ia(t), o = t.type, l = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = l.children, ka(o, l) ? y = null : p !== null && ka(o, p) && (t.flags |= 32), Qc(e, t), yt(e, t, y, n), t.child;
      case 6:
        return e === null && Ia(t), null;
      case 13:
        return td(e, t, n);
      case 4:
        return Ba(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = cn(t, null, o, n) : yt(e, t, o, n), t.child;
      case 11:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Ft(o, l), Gc(e, t, o, l, n);
      case 7:
        return yt(e, t, t.pendingProps, n), t.child;
      case 8:
        return yt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return yt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (o = t.type._context, l = t.pendingProps, p = t.memoizedProps, y = l.value, Ge(eo, o._currentValue), o._currentValue = y, p !== null) if (Bt(p.value, y)) {
            if (p.children === l.children && !vt.current) {
              t = or(e, t, n);
              break e;
            }
          } else for (p = t.child, p !== null && (p.return = t); p !== null; ) {
            var A = p.dependencies;
            if (A !== null) {
              y = p.child;
              for (var N = A.firstContext; N !== null; ) {
                if (N.context === o) {
                  if (p.tag === 1) {
                    N = ir(-1, n & -n), N.tag = 2;
                    var G = p.updateQueue;
                    if (G !== null) {
                      G = G.shared;
                      var re = G.pending;
                      re === null ? N.next = N : (N.next = re.next, re.next = N), G.pending = N;
                    }
                  }
                  p.lanes |= n, N = p.alternate, N !== null && (N.lanes |= n), Ma(
                    p.return,
                    n,
                    t
                  ), A.lanes |= n;
                  break;
                }
                N = N.next;
              }
            } else if (p.tag === 10) y = p.type === t.type ? null : p.child;
            else if (p.tag === 18) {
              if (y = p.return, y === null) throw Error(i(341));
              y.lanes |= n, A = y.alternate, A !== null && (A.lanes |= n), Ma(y, n, t), y = p.sibling;
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
        return l = t.type, o = t.pendingProps.children, un(t, n), l = Ot(l), o = o(l), t.flags |= 1, yt(e, t, o, n), t.child;
      case 14:
        return o = t.type, l = Ft(o, t.pendingProps), l = Ft(o.type, l), Yc(e, t, o, l, n);
      case 15:
        return Kc(e, t, t.type, t.pendingProps, n);
      case 17:
        return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Ft(o, l), fo(e, t), t.tag = 1, wt(o) ? (e = !0, Yi(t)) : e = !1, un(t, n), Bc(t, o, l), Ja(t, o, l, n), ns(null, t, o, !0, e, n);
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
  function Hf(e, t, n, o) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, n, o) {
    return new Hf(e, t, n, o);
  }
  function ks(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bf(e) {
    if (typeof e == "function") return ks(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Q) return 11;
      if (e === le) return 14;
    }
    return 2;
  }
  function Cr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function So(e, t, n, o, l, p) {
    var y = 2;
    if (o = e, typeof e == "function") ks(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else e: switch (e) {
      case R:
        return Ur(n.children, l, p, t);
      case $:
        y = 8, l |= 8;
        break;
      case V:
        return e = Mt(12, n, t, l | 2), e.elementType = V, e.lanes = p, e;
      case ee:
        return e = Mt(13, n, t, l), e.elementType = ee, e.lanes = p, e;
      case se:
        return e = Mt(19, n, t, l), e.elementType = se, e.lanes = p, e;
      case ue:
        return Eo(n, l, p, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Y:
            y = 10;
            break e;
          case F:
            y = 9;
            break e;
          case Q:
            y = 11;
            break e;
          case le:
            y = 14;
            break e;
          case ne:
            y = 16, o = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = Mt(y, n, t, l), t.elementType = e, t.type = o, t.lanes = p, t;
  }
  function Ur(e, t, n, o) {
    return e = Mt(7, e, o, t), e.lanes = n, e;
  }
  function Eo(e, t, n, o) {
    return e = Mt(22, e, o, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ss(e, t, n) {
    return e = Mt(6, e, null, t), e.lanes = n, e;
  }
  function Es(e, t, n) {
    return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function jf(e, t, n, o, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zo(0), this.expirationTimes = Zo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Cs(e, t, n, o, l, p, y, A, N) {
    return e = new jf(e, t, n, A, N), t === 1 ? (t = 1, p === !0 && (t |= 8)) : t = 0, p = Mt(3, null, null, t), e.current = p, p.stateNode = e, p.memoizedState = { element: o, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ha(p), e;
  }
  function Ff(e, t, n) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: E, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: n };
  }
  function Rd(e) {
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
  function Ad(e, t, n, o, l, p, y, A, N) {
    return e = Cs(n, o, !0, e, l, p, y, A, N), e.context = Rd(null), n = e.current, o = xt(), l = Sr(n), p = ir(o, l), p.callback = t ?? null, xr(n, p, l), e.current.lanes = l, An(e, l, o), Et(e, o), e;
  }
  function Co(e, t, n, o) {
    var l = t.current, p = xt(), y = Sr(l);
    return n = Rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = ir(p, y), t.payload = { element: e }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = xr(l, t, y), e !== null && (Ut(e, l, y, p), ro(e, l, y)), y;
  }
  function zo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function zs(e, t) {
    Pd(e, t), (e = e.alternate) && Pd(e, t);
  }
  function qf() {
    return null;
  }
  var Ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Rs(e) {
    this._internalRoot = e;
  }
  Ro.prototype.render = Rs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Co(e, t, null, null);
  }, Ro.prototype.unmount = Rs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fr(function() {
        Co(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function Ro(e) {
    this._internalRoot = e;
  }
  Ro.prototype.unstable_scheduleHydration = function(e) {
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
  function Ao(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Id() {
  }
  function Wf(e, t, n, o, l) {
    if (l) {
      if (typeof o == "function") {
        var p = o;
        o = function() {
          var G = zo(y);
          p.call(G);
        };
      }
      var y = Ad(t, o, e, 0, null, !1, !1, "", Id);
      return e._reactRootContainer = y, e[Jt] = y.current, qn(e.nodeType === 8 ? e.parentNode : e), Fr(), y;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof o == "function") {
      var A = o;
      o = function() {
        var G = zo(N);
        A.call(G);
      };
    }
    var N = Cs(e, 0, !1, null, null, !1, !1, "", Id);
    return e._reactRootContainer = N, e[Jt] = N.current, qn(e.nodeType === 8 ? e.parentNode : e), Fr(function() {
      Co(t, N, n, o);
    }), N;
  }
  function Po(e, t, n, o, l) {
    var p = n._reactRootContainer;
    if (p) {
      var y = p;
      if (typeof l == "function") {
        var A = l;
        l = function() {
          var N = zo(y);
          A.call(N);
        };
      }
      Co(t, y, e, l);
    } else y = Wf(n, t, e, l, o);
    return zo(y);
  }
  pl = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Rn(t.pendingLanes);
          n !== 0 && (Jo(t, n | 1), Et(t, nt()), !(He & 6) && (hn = nt() + 500, br()));
        }
        break;
      case 13:
        Fr(function() {
          var o = nr(e, 1);
          if (o !== null) {
            var l = xt();
            Ut(o, e, 1, l);
          }
        }), zs(e, 1);
    }
  }, ea = function(e) {
    if (e.tag === 13) {
      var t = nr(e, 134217728);
      if (t !== null) {
        var n = xt();
        Ut(t, e, 134217728, n);
      }
      zs(e, 134217728);
    }
  }, fl = function(e) {
    if (e.tag === 13) {
      var t = Sr(e), n = nr(e, t);
      if (n !== null) {
        var o = xt();
        Ut(n, e, t, o);
      }
      zs(e, t);
    }
  }, gl = function() {
    return We;
  }, ml = function(e, t) {
    var n = We;
    try {
      return We = e, t();
    } finally {
      We = n;
    }
  }, Gr = function(e, t, n) {
    switch (t) {
      case "input":
        if (M(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var o = n[t];
            if (o !== e && o.form === e.form) {
              var l = Vi(o);
              if (!l) throw Error(i(90));
              Oe(o), M(o, l);
            }
          }
        }
        break;
      case "textarea":
        Ie(e, n);
        break;
      case "select":
        t = n.value, t != null && ve(e, !!n.multiple, t, !1);
    }
  }, ki = xs, el = Fr;
  var Uf = { usingClientEntryPoint: !1, Events: [Vn, rn, Vi, Sn, Yr, xs] }, ai = { findFiberByHostInstance: Or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vf = { bundleType: ai.bundleType, version: ai.version, rendererPackageName: ai.rendererPackageName, rendererConfig: ai.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: h.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = il(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ai.findFiberByHostInstance || qf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lo.isDisabled && Lo.supportsFiber) try {
      zi = Lo.inject(Vf), Gt = Lo;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf, Ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!As(t)) throw Error(i(200));
    return Ff(e, t, null, n);
  }, Ct.createRoot = function(e, t) {
    if (!As(e)) throw Error(i(299));
    var n = !1, o = "", l = Ld;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Cs(e, 1, !1, null, null, n, !1, o, l), e[Jt] = t.current, qn(e.nodeType === 8 ? e.parentNode : e), new Rs(t);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = il(t), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return Fr(e);
  }, Ct.hydrate = function(e, t, n) {
    if (!Ao(t)) throw Error(i(200));
    return Po(null, e, t, !0, n);
  }, Ct.hydrateRoot = function(e, t, n) {
    if (!As(e)) throw Error(i(405));
    var o = n != null && n.hydratedSources || null, l = !1, p = "", y = Ld;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (p = n.identifierPrefix), n.onRecoverableError !== void 0 && (y = n.onRecoverableError)), t = Ad(t, null, e, 1, n ?? null, l, !1, p, y), e[Jt] = t.current, qn(e), o) for (e = 0; e < o.length; e++) n = o[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ro(t);
  }, Ct.render = function(e, t, n) {
    if (!Ao(t)) throw Error(i(200));
    return Po(null, e, t, !1, n);
  }, Ct.unmountComponentAtNode = function(e) {
    if (!Ao(e)) throw Error(i(40));
    return e._reactRootContainer ? (Fr(function() {
      Po(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, Ct.unstable_batchedUpdates = xs, Ct.unstable_renderSubtreeIntoContainer = function(e, t, n, o) {
    if (!Ao(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Po(e, t, n, !1, o);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var Fd;
function Fo() {
  if (Fd) return Is.exports;
  Fd = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), Is.exports = tg(), Is.exports;
}
var qd;
function rg() {
  if (qd) return Io;
  qd = 1;
  var c = Fo();
  return Io.createRoot = c.createRoot, Io.hydrateRoot = c.hydrateRoot, Io;
}
var Bu = rg();
const ng = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', ig = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", og = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#fff!important;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:visible;border:1px solid var(--v2066-border,rgba(255,255,255,.08))!important;border-radius:24px;background:var(--v2066-glass,rgba(255,255,255,.06))!important;box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important}.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:visible}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-widget__content>.panel:has(#hero),.argus-widget__content>.panel:has(.hero),.argus-widget__content>.panel:has(#hero-profile-container),.argus-widget:has(#hero),.argus-widget:has(.hero),.argus-dashboard-grid .react-grid-item:has(#hero),.argus-dashboard-grid .react-grid-item:first-child{overflow:visible!important;z-index:50!important}#profile-dropdown.hero-profile-dropdown{z-index:999999!important;position:absolute!important;top:calc(100% + 12px)!important;right:0!important;max-height:calc(100vh - 120px)!important;overflow-y:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;inset:auto 16px 16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var qe = zt();
class Wd extends qe.Component {
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
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ he.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ he.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ he.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ he.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var Ts = { exports: {} }, di = {}, bi = { exports: {} }, ag = bi.exports, Ud;
function Xs() {
  return Ud || (Ud = 1, function(c, r) {
    (function(i, a) {
      a(r);
    })(ag, function(i) {
      function a(te) {
        return function(ze, Le, Oe, je, Ve, rt, O) {
          return te(ze, Le, O);
        };
      }
      function s(te) {
        return function(ze, Le, Oe, je) {
          if (!ze || !Le || typeof ze != "object" || typeof Le != "object")
            return te(ze, Le, Oe, je);
          var Ve = je.get(ze), rt = je.get(Le);
          if (Ve && rt)
            return Ve === Le && rt === ze;
          je.set(ze, Le), je.set(Le, ze);
          var O = te(ze, Le, Oe, je);
          return je.delete(ze), je.delete(Le), O;
        };
      }
      function d(te, fe) {
        var ze = {};
        for (var Le in te)
          ze[Le] = te[Le];
        for (var Le in fe)
          ze[Le] = fe[Le];
        return ze;
      }
      function u(te) {
        return te.constructor === Object || te.constructor == null;
      }
      function f(te) {
        return typeof te.then == "function";
      }
      function g(te, fe) {
        return te === fe || te !== te && fe !== fe;
      }
      var _ = "[object Arguments]", S = "[object Boolean]", b = "[object Date]", k = "[object RegExp]", I = "[object Map]", T = "[object Number]", z = "[object Object]", C = "[object Set]", x = "[object String]", m = Object.prototype.toString;
      function w(te) {
        var fe = te.areArraysEqual, ze = te.areDatesEqual, Le = te.areMapsEqual, Oe = te.areObjectsEqual, je = te.areRegExpsEqual, Ve = te.areSetsEqual, rt = te.createIsNestedEqual, O = rt(M);
        function M(B, X, ce) {
          if (B === X)
            return !0;
          if (!B || !X || typeof B != "object" || typeof X != "object")
            return B !== B && X !== X;
          if (u(B) && u(X))
            return Oe(B, X, O, ce);
          var ve = Array.isArray(B), Ee = Array.isArray(X);
          if (ve || Ee)
            return ve === Ee && fe(B, X, O, ce);
          var Pe = m.call(B);
          return Pe !== m.call(X) ? !1 : Pe === b ? ze(B, X, O, ce) : Pe === k ? je(B, X, O, ce) : Pe === I ? Le(B, X, O, ce) : Pe === C ? Ve(B, X, O, ce) : Pe === z || Pe === _ ? f(B) || f(X) ? !1 : Oe(B, X, O, ce) : Pe === S || Pe === T || Pe === x ? g(B.valueOf(), X.valueOf()) : !1;
        }
        return M;
      }
      function h(te, fe, ze, Le) {
        var Oe = te.length;
        if (fe.length !== Oe)
          return !1;
        for (; Oe-- > 0; )
          if (!ze(te[Oe], fe[Oe], Oe, Oe, te, fe, Le))
            return !1;
        return !0;
      }
      var v = s(h);
      function E(te, fe) {
        return g(te.valueOf(), fe.valueOf());
      }
      function R(te, fe, ze, Le) {
        var Oe = te.size === fe.size;
        if (!Oe)
          return !1;
        if (!te.size)
          return !0;
        var je = {}, Ve = 0;
        return te.forEach(function(rt, O) {
          if (Oe) {
            var M = !1, B = 0;
            fe.forEach(function(X, ce) {
              !M && !je[B] && (M = ze(O, ce, Ve, B, te, fe, Le) && ze(rt, X, O, ce, te, fe, Le)) && (je[B] = !0), B++;
            }), Ve++, Oe = M;
          }
        }), Oe;
      }
      var $ = s(R), V = "_owner", Y = Object.prototype.hasOwnProperty;
      function F(te, fe, ze, Le) {
        var Oe = Object.keys(te), je = Oe.length;
        if (Object.keys(fe).length !== je)
          return !1;
        for (var Ve; je-- > 0; ) {
          if (Ve = Oe[je], Ve === V) {
            var rt = !!te.$$typeof, O = !!fe.$$typeof;
            if ((rt || O) && rt !== O)
              return !1;
          }
          if (!Y.call(fe, Ve) || !ze(te[Ve], fe[Ve], Ve, Ve, te, fe, Le))
            return !1;
        }
        return !0;
      }
      var Q = s(F);
      function ee(te, fe) {
        return te.source === fe.source && te.flags === fe.flags;
      }
      function se(te, fe, ze, Le) {
        var Oe = te.size === fe.size;
        if (!Oe)
          return !1;
        if (!te.size)
          return !0;
        var je = {};
        return te.forEach(function(Ve, rt) {
          if (Oe) {
            var O = !1, M = 0;
            fe.forEach(function(B, X) {
              !O && !je[M] && (O = ze(Ve, B, rt, X, te, fe, Le)) && (je[M] = !0), M++;
            }), Oe = O;
          }
        }), Oe;
      }
      var le = s(se), ne = Object.freeze({
        areArraysEqual: h,
        areDatesEqual: E,
        areMapsEqual: R,
        areObjectsEqual: F,
        areRegExpsEqual: ee,
        areSetsEqual: se,
        createIsNestedEqual: a
      }), ue = Object.freeze({
        areArraysEqual: v,
        areDatesEqual: E,
        areMapsEqual: $,
        areObjectsEqual: Q,
        areRegExpsEqual: ee,
        areSetsEqual: le,
        createIsNestedEqual: a
      }), Z = w(ne);
      function de(te, fe) {
        return Z(te, fe, void 0);
      }
      var W = w(d(ne, { createIsNestedEqual: function() {
        return g;
      } }));
      function L(te, fe) {
        return W(te, fe, void 0);
      }
      var H = w(ue);
      function ge(te, fe) {
        return H(te, fe, /* @__PURE__ */ new WeakMap());
      }
      var ye = w(d(ue, {
        createIsNestedEqual: function() {
          return g;
        }
      }));
      function Ce(te, fe) {
        return ye(te, fe, /* @__PURE__ */ new WeakMap());
      }
      function Ae(te) {
        return w(d(ne, te(ne)));
      }
      function Te(te) {
        var fe = w(d(ue, te(ue)));
        return function(ze, Le, Oe) {
          return Oe === void 0 && (Oe = /* @__PURE__ */ new WeakMap()), fe(ze, Le, Oe);
        };
      }
      i.circularDeepEqual = ge, i.circularShallowEqual = Ce, i.createCustomCircularEqual = Te, i.createCustomEqual = Ae, i.deepEqual = de, i.sameValueZeroEqual = g, i.shallowEqual = L, Object.defineProperty(i, "__esModule", { value: !0 });
    });
  }(bi, bi.exports)), bi.exports;
}
var No = { exports: {} }, Vd;
function Uo() {
  if (Vd) return No.exports;
  Vd = 1;
  function c(i) {
    var a, s, d = "";
    if (typeof i == "string" || typeof i == "number") d += i;
    else if (typeof i == "object") if (Array.isArray(i)) {
      var u = i.length;
      for (a = 0; a < u; a++) i[a] && (s = c(i[a])) && (d && (d += " "), d += s);
    } else for (s in i) i[s] && (d && (d += " "), d += s);
    return d;
  }
  function r() {
    for (var i, a, s = 0, d = "", u = arguments.length; s < u; s++) (i = arguments[s]) && (a = c(i)) && (d && (d += " "), d += a);
    return d;
  }
  return No.exports = r, No.exports.clsx = r, No.exports;
}
var $e = {}, Ds, Gd;
function sg() {
  return Gd || (Gd = 1, Ds = function(r, i, a) {
    return r === i ? !0 : r.className === i.className && a(r.style, i.style) && r.width === i.width && r.autoSize === i.autoSize && r.cols === i.cols && r.draggableCancel === i.draggableCancel && r.draggableHandle === i.draggableHandle && a(r.verticalCompact, i.verticalCompact) && a(r.compactType, i.compactType) && a(r.layout, i.layout) && a(r.margin, i.margin) && a(r.containerPadding, i.containerPadding) && r.rowHeight === i.rowHeight && r.maxRows === i.maxRows && r.isBounded === i.isBounded && r.isDraggable === i.isDraggable && r.isResizable === i.isResizable && r.allowOverlap === i.allowOverlap && r.preventCollision === i.preventCollision && r.useCSSTransforms === i.useCSSTransforms && r.transformScale === i.transformScale && r.isDroppable === i.isDroppable && a(r.resizeHandles, i.resizeHandles) && a(r.resizeHandle, i.resizeHandle) && r.onLayoutChange === i.onLayoutChange && r.onDragStart === i.onDragStart && r.onDrag === i.onDrag && r.onDragStop === i.onDragStop && r.onResizeStart === i.onResizeStart && r.onResize === i.onResize && r.onResizeStop === i.onResizeStop && r.onDrop === i.onDrop && a(r.droppingItem, i.droppingItem) && a(r.innerRef, i.innerRef);
  }), Ds;
}
var Yd;
function wn() {
  if (Yd) return $e;
  Yd = 1, Object.defineProperty($e, "__esModule", {
    value: !0
  }), $e.bottom = g, $e.childrenEqual = I, $e.cloneLayout = _, $e.cloneLayoutItem = k, $e.collides = z, $e.compact = C, $e.compactItem = w, $e.compactType = je, $e.correctBounds = h, $e.fastPositionEqual = T, $e.fastRGLPropsEqual = void 0, $e.getAllCollisions = R, $e.getFirstCollision = E, $e.getLayoutItem = v, $e.getStatics = $, $e.modifyLayout = S, $e.moveElement = V, $e.moveElementAwayFromCollision = Y, $e.noop = void 0, $e.perc = F, $e.resizeItemInDirection = Ce, $e.setTopLeft = Te, $e.setTransform = Ae, $e.sortLayoutItems = te, $e.sortLayoutItemsByColRow = ze, $e.sortLayoutItemsByRowCol = fe, $e.synchronizeLayoutWithChildren = Le, $e.validateLayout = Oe, $e.withLayoutItem = b;
  var c = /* @__PURE__ */ Xs(), r = i(zt());
  function i(O) {
    return O && O.__esModule ? O : { default: O };
  }
  function a(O, M) {
    var B = Object.keys(O);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(O);
      M && (X = X.filter(function(ce) {
        return Object.getOwnPropertyDescriptor(O, ce).enumerable;
      })), B.push.apply(B, X);
    }
    return B;
  }
  function s(O) {
    for (var M = 1; M < arguments.length; M++) {
      var B = arguments[M] != null ? arguments[M] : {};
      M % 2 ? a(Object(B), !0).forEach(function(X) {
        d(O, X, B[X]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(B)) : a(Object(B)).forEach(function(X) {
        Object.defineProperty(O, X, Object.getOwnPropertyDescriptor(B, X));
      });
    }
    return O;
  }
  function d(O, M, B) {
    return (M = u(M)) in O ? Object.defineProperty(O, M, { value: B, enumerable: !0, configurable: !0, writable: !0 }) : O[M] = B, O;
  }
  function u(O) {
    var M = f(O, "string");
    return typeof M == "symbol" ? M : M + "";
  }
  function f(O, M) {
    if (typeof O != "object" || !O) return O;
    var B = O[Symbol.toPrimitive];
    if (B !== void 0) {
      var X = B.call(O, M);
      if (typeof X != "object") return X;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (M === "string" ? String : Number)(O);
  }
  function g(O) {
    let M = 0, B;
    for (let X = 0, ce = O.length; X < ce; X++)
      B = O[X].y + O[X].h, B > M && (M = B);
    return M;
  }
  function _(O) {
    const M = Array(O.length);
    for (let B = 0, X = O.length; B < X; B++)
      M[B] = k(O[B]);
    return M;
  }
  function S(O, M) {
    const B = Array(O.length);
    for (let X = 0, ce = O.length; X < ce; X++)
      M.i === O[X].i ? B[X] = M : B[X] = O[X];
    return B;
  }
  function b(O, M, B) {
    let X = v(O, M);
    return X ? (X = B(k(X)), O = S(O, X), [O, X]) : [O, null];
  }
  function k(O) {
    return {
      w: O.w,
      h: O.h,
      x: O.x,
      y: O.y,
      i: O.i,
      minW: O.minW,
      maxW: O.maxW,
      minH: O.minH,
      maxH: O.maxH,
      moved: !!O.moved,
      static: !!O.static,
      // These can be null/undefined
      isDraggable: O.isDraggable,
      isResizable: O.isResizable,
      resizeHandles: O.resizeHandles,
      isBounded: O.isBounded
    };
  }
  function I(O, M) {
    return (0, c.deepEqual)(r.default.Children.map(O, (B) => B?.key), r.default.Children.map(M, (B) => B?.key)) && (0, c.deepEqual)(r.default.Children.map(O, (B) => B?.props["data-grid"]), r.default.Children.map(M, (B) => B?.props["data-grid"]));
  }
  $e.fastRGLPropsEqual = sg();
  function T(O, M) {
    return O.left === M.left && O.top === M.top && O.width === M.width && O.height === M.height;
  }
  function z(O, M) {
    return !(O.i === M.i || O.x + O.w <= M.x || O.x >= M.x + M.w || O.y + O.h <= M.y || O.y >= M.y + M.h);
  }
  function C(O, M, B, X) {
    const ce = $(O);
    let ve = g(ce);
    const Ee = te(O, M), Pe = Array(O.length);
    for (let Ie = 0, Ue = Ee.length; Ie < Ue; Ie++) {
      let Xe = k(Ee[Ie]);
      Xe.static || (Xe = w(ce, Xe, M, B, Ee, X, ve), ve = Math.max(ve, Xe.y + Xe.h), ce.push(Xe)), Pe[O.indexOf(Ee[Ie])] = Xe, Xe.moved = !1;
    }
    return Pe;
  }
  const x = {
    x: "w",
    y: "h"
  };
  function m(O, M, B, X) {
    const ce = x[X];
    M[X] += 1;
    const ve = O.map((Ee) => Ee.i).indexOf(M.i);
    for (let Ee = ve + 1; Ee < O.length; Ee++) {
      const Pe = O[Ee];
      if (!Pe.static) {
        if (Pe.y > M.y + M.h) break;
        z(M, Pe) && m(O, Pe, B + M[ce], X);
      }
    }
    M[X] = B;
  }
  function w(O, M, B, X, ce, ve, Ee) {
    const Pe = B === "vertical", Ie = B === "horizontal";
    if (Pe)
      for (typeof Ee == "number" ? M.y = Math.min(Ee, M.y) : M.y = Math.min(g(O), M.y); M.y > 0 && !E(O, M); )
        M.y--;
    else if (Ie)
      for (; M.x > 0 && !E(O, M); )
        M.x--;
    let Ue;
    for (; (Ue = E(O, M)) && !(B === null && ve); )
      if (Ie ? m(ce, M, Ue.x + Ue.w, "x") : m(ce, M, Ue.y + Ue.h, "y"), Ie && M.x + M.w > X)
        for (M.x = X - M.w, M.y++; M.x > 0 && !E(O, M); )
          M.x--;
    return M.y = Math.max(M.y, 0), M.x = Math.max(M.x, 0), M;
  }
  function h(O, M) {
    const B = $(O);
    for (let X = 0, ce = O.length; X < ce; X++) {
      const ve = O[X];
      if (ve.x + ve.w > M.cols && (ve.x = M.cols - ve.w), ve.x < 0 && (ve.x = 0, ve.w = M.cols), !ve.static) B.push(ve);
      else
        for (; E(B, ve); )
          ve.y++;
    }
    return O;
  }
  function v(O, M) {
    for (let B = 0, X = O.length; B < X; B++)
      if (O[B].i === M) return O[B];
  }
  function E(O, M) {
    for (let B = 0, X = O.length; B < X; B++)
      if (z(O[B], M)) return O[B];
  }
  function R(O, M) {
    return O.filter((B) => z(B, M));
  }
  function $(O) {
    return O.filter((M) => M.static);
  }
  function V(O, M, B, X, ce, ve, Ee, Pe, Ie) {
    if (M.static && M.isDraggable !== !0 || M.y === X && M.x === B) return O;
    "Moving element ".concat(M.i, " to [").concat(String(B), ",").concat(String(X), "] from [").concat(M.x, ",").concat(M.y, "]");
    const Ue = M.x, Xe = M.y;
    typeof B == "number" && (M.x = B), typeof X == "number" && (M.y = X), M.moved = !0;
    let lt = te(O, Ee);
    (Ee === "vertical" && typeof X == "number" ? Xe >= X : Ee === "horizontal" && typeof B == "number" ? Ue >= B : !1) && (lt = lt.reverse());
    const q = R(lt, M), K = q.length > 0;
    if (K && Ie)
      return _(O);
    if (K && ve)
      return "Collision prevented on ".concat(M.i, ", reverting."), M.x = Ue, M.y = Xe, M.moved = !1, O;
    for (let oe = 0, pe = q.length; oe < pe; oe++) {
      const De = q[oe];
      "Resolving collision between ".concat(M.i, " at [").concat(M.x, ",").concat(M.y, "] and ").concat(De.i, " at [").concat(De.x, ",").concat(De.y, "]"), !De.moved && (De.static ? O = Y(O, De, M, ce, Ee) : O = Y(O, M, De, ce, Ee));
    }
    return O;
  }
  function Y(O, M, B, X, ce, ve) {
    const Ee = ce === "horizontal", Pe = ce === "vertical", Ie = M.static;
    if (X) {
      X = !1;
      const lt = {
        x: Ee ? Math.max(M.x - B.w, 0) : B.x,
        y: Pe ? Math.max(M.y - B.h, 0) : B.y,
        w: B.w,
        h: B.h,
        i: "-1"
      }, P = E(O, lt), q = P && P.y + P.h > M.y, K = P && M.x + M.w > P.x;
      if (P) {
        if (q && Pe)
          return V(O, B, void 0, B.y + 1, X, Ie, ce);
        if (q && ce == null)
          return M.y = B.y, B.y = B.y + B.h, O;
        if (K && Ee)
          return V(O, M, B.x, void 0, X, Ie, ce);
      } else return "Doing reverse collision on ".concat(B.i, " up to [").concat(lt.x, ",").concat(lt.y, "]."), V(O, B, Ee ? lt.x : void 0, Pe ? lt.y : void 0, X, Ie, ce);
    }
    const Ue = Ee ? B.x + 1 : void 0, Xe = Pe ? B.y + 1 : void 0;
    return Ue == null && Xe == null ? O : V(O, B, Ee ? B.x + 1 : void 0, Pe ? B.y + 1 : void 0, X, Ie, ce);
  }
  function F(O) {
    return O * 100 + "%";
  }
  const Q = (O, M, B, X) => O + B > X ? M : B, ee = (O, M, B) => O < 0 ? M : B, se = (O) => Math.max(0, O), le = (O) => Math.max(0, O), ne = (O, M, B) => {
    let {
      left: X,
      height: ce,
      width: ve
    } = M;
    const Ee = O.top - (ce - O.height);
    return {
      left: X,
      width: ve,
      height: ee(Ee, O.height, ce),
      top: le(Ee)
    };
  }, ue = (O, M, B) => {
    let {
      top: X,
      left: ce,
      height: ve,
      width: Ee
    } = M;
    return {
      top: X,
      height: ve,
      width: Q(O.left, O.width, Ee, B),
      left: se(ce)
    };
  }, Z = (O, M, B) => {
    let {
      top: X,
      height: ce,
      width: ve
    } = M;
    const Ee = O.left - (ve - O.width);
    return {
      height: ce,
      width: Ee < 0 ? O.width : Q(O.left, O.width, ve, B),
      top: le(X),
      left: se(Ee)
    };
  }, de = (O, M, B) => {
    let {
      top: X,
      left: ce,
      height: ve,
      width: Ee
    } = M;
    return {
      width: Ee,
      left: ce,
      height: ee(X, O.height, ve),
      top: le(X)
    };
  }, ye = {
    n: ne,
    ne: function() {
      return ne(arguments.length <= 0 ? void 0 : arguments[0], ue(...arguments));
    },
    e: ue,
    se: function() {
      return de(arguments.length <= 0 ? void 0 : arguments[0], ue(...arguments));
    },
    s: de,
    sw: function() {
      return de(arguments.length <= 0 ? void 0 : arguments[0], Z(...arguments));
    },
    w: Z,
    nw: function() {
      return ne(arguments.length <= 0 ? void 0 : arguments[0], Z(...arguments));
    }
  };
  function Ce(O, M, B, X) {
    const ce = ye[O];
    return ce ? ce(M, s(s({}, M), B), X) : B;
  }
  function Ae(O) {
    let {
      top: M,
      left: B,
      width: X,
      height: ce
    } = O;
    const ve = "translate(".concat(B, "px,").concat(M, "px)");
    return {
      transform: ve,
      WebkitTransform: ve,
      MozTransform: ve,
      msTransform: ve,
      OTransform: ve,
      width: "".concat(X, "px"),
      height: "".concat(ce, "px"),
      position: "absolute"
    };
  }
  function Te(O) {
    let {
      top: M,
      left: B,
      width: X,
      height: ce
    } = O;
    return {
      top: "".concat(M, "px"),
      left: "".concat(B, "px"),
      width: "".concat(X, "px"),
      height: "".concat(ce, "px"),
      position: "absolute"
    };
  }
  function te(O, M) {
    return M === "horizontal" ? ze(O) : M === "vertical" ? fe(O) : O;
  }
  function fe(O) {
    return O.slice(0).sort(function(M, B) {
      return M.y > B.y || M.y === B.y && M.x > B.x ? 1 : M.y === B.y && M.x === B.x ? 0 : -1;
    });
  }
  function ze(O) {
    return O.slice(0).sort(function(M, B) {
      return M.x > B.x || M.x === B.x && M.y > B.y ? 1 : -1;
    });
  }
  function Le(O, M, B, X, ce) {
    O = O || [];
    const ve = [];
    r.default.Children.forEach(M, (Pe) => {
      if (Pe?.key == null) return;
      const Ie = v(O, String(Pe.key)), Ue = Pe.props["data-grid"];
      Ie && Ue == null ? ve.push(k(Ie)) : Ue ? ve.push(k(s(s({}, Ue), {}, {
        i: Pe.key
      }))) : ve.push(k({
        w: 1,
        h: 1,
        x: 0,
        y: g(ve),
        i: String(Pe.key)
      }));
    });
    const Ee = h(ve, {
      cols: B
    });
    return ce ? Ee : C(Ee, X, B);
  }
  function Oe(O) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const B = ["x", "y", "w", "h"];
    if (!Array.isArray(O)) throw new Error(M + " must be an array!");
    for (let X = 0, ce = O.length; X < ce; X++) {
      const ve = O[X];
      for (let Ee = 0; Ee < B.length; Ee++) {
        const Pe = B[Ee], Ie = ve[Pe];
        if (typeof Ie != "number" || Number.isNaN(Ie))
          throw new Error("ReactGridLayout: ".concat(M, "[").concat(X, "].").concat(Pe, " must be a number! Received: ").concat(Ie, " (").concat(typeof Ie, ")"));
      }
      if (typeof ve.i < "u" && typeof ve.i != "string")
        throw new Error("ReactGridLayout: ".concat(M, "[").concat(X, "].i must be a string! Received: ").concat(ve.i, " (").concat(typeof ve.i, ")"));
    }
  }
  function je(O) {
    const {
      verticalCompact: M,
      compactType: B
    } = O || {};
    return M === !1 ? null : B;
  }
  function Ve() {
  }
  const rt = () => {
  };
  return $e.noop = rt, $e;
}
var sr = {}, Kd;
function Qs() {
  if (Kd) return sr;
  Kd = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.calcGridColWidth = c, sr.calcGridItemPosition = i, sr.calcGridItemWHPx = r, sr.calcWH = s, sr.calcXY = a, sr.clamp = d;
  function c(u) {
    const {
      margin: f,
      containerPadding: g,
      containerWidth: _,
      cols: S
    } = u;
    return (_ - f[0] * (S - 1) - g[0] * 2) / S;
  }
  function r(u, f, g) {
    return Number.isFinite(u) ? Math.round(f * u + Math.max(0, u - 1) * g) : u;
  }
  function i(u, f, g, _, S, b) {
    const {
      margin: k,
      containerPadding: I,
      rowHeight: T
    } = u, z = c(u), C = {};
    return b && b.resizing ? (C.width = Math.round(b.resizing.width), C.height = Math.round(b.resizing.height)) : (C.width = r(_, z, k[0]), C.height = r(S, T, k[1])), b && b.dragging ? (C.top = Math.round(b.dragging.top), C.left = Math.round(b.dragging.left)) : b && b.resizing && typeof b.resizing.top == "number" && typeof b.resizing.left == "number" ? (C.top = Math.round(b.resizing.top), C.left = Math.round(b.resizing.left)) : (C.top = Math.round((T + k[1]) * g + I[1]), C.left = Math.round((z + k[0]) * f + I[0])), C;
  }
  function a(u, f, g, _, S) {
    const {
      margin: b,
      containerPadding: k,
      cols: I,
      rowHeight: T,
      maxRows: z
    } = u, C = c(u);
    let x = Math.round((g - k[0]) / (C + b[0])), m = Math.round((f - k[1]) / (T + b[1]));
    return x = d(x, 0, I - _), m = d(m, 0, z - S), {
      x,
      y: m
    };
  }
  function s(u, f, g, _, S, b) {
    const {
      margin: k,
      maxRows: I,
      cols: T,
      rowHeight: z
    } = u, C = c(u);
    let x = Math.round((f + k[0]) / (C + k[0])), m = Math.round((g + k[1]) / (z + k[1])), w = d(x, 0, T - _), h = d(m, 0, I - S);
    return ["sw", "w", "nw"].indexOf(b) !== -1 && (w = d(x, 0, T)), ["nw", "n", "ne"].indexOf(b) !== -1 && (h = d(m, 0, I)), {
      w,
      h
    };
  }
  function d(u, f, g) {
    return Math.max(Math.min(u, g), f);
  }
  return sr;
}
var ui = {}, Ms = { exports: {} }, $s, Xd;
function lg() {
  if (Xd) return $s;
  Xd = 1;
  var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $s = c, $s;
}
var Hs, Qd;
function cg() {
  if (Qd) return Hs;
  Qd = 1;
  var c = /* @__PURE__ */ lg();
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, Hs = function() {
    function a(u, f, g, _, S, b) {
      if (b !== c) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    a.isRequired = a;
    function s() {
      return a;
    }
    var d = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: s,
      element: a,
      elementType: a,
      instanceOf: s,
      node: a,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: i,
      resetWarningCache: r
    };
    return d.PropTypes = d, d;
  }, Hs;
}
var Zd;
function Pr() {
  return Zd || (Zd = 1, Ms.exports = /* @__PURE__ */ cg()()), Ms.exports;
}
var pi = { exports: {} }, Bs, Jd;
function dg() {
  if (Jd) return Bs;
  Jd = 1;
  var c = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, s = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty, u = (P, q) => {
    for (var K in q)
      r(P, K, { get: q[K], enumerable: !0 });
  }, f = (P, q, K, oe) => {
    if (q && typeof q == "object" || typeof q == "function")
      for (let pe of a(q))
        !d.call(P, pe) && pe !== K && r(P, pe, { get: () => q[pe], enumerable: !(oe = i(q, pe)) || oe.enumerable });
    return P;
  }, g = (P, q, K) => (K = P != null ? c(s(P)) : {}, f(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !P || !P.__esModule ? r(K, "default", { value: P, enumerable: !0 }) : K,
    P
  )), _ = (P) => f(r({}, "__esModule", { value: !0 }), P), S = {};
  u(S, {
    DraggableCore: () => Xe,
    default: () => lt
  }), Bs = _(S);
  var b = g(zt()), k = g(/* @__PURE__ */ Pr()), I = g(Fo()), T = Uo();
  function z(P, q) {
    for (let K = 0, oe = P.length; K < oe; K++)
      if (q.apply(q, [P[K], K, P])) return P[K];
  }
  function C(P) {
    return typeof P == "function" || Object.prototype.toString.call(P) === "[object Function]";
  }
  function x(P) {
    return typeof P == "number" && !isNaN(P);
  }
  function m(P) {
    return parseInt(P, 10);
  }
  function w(P, q, K) {
    if (P[q])
      return new Error(`Invalid prop ${q} passed to ${K} - do not set this, set it on the child.`);
  }
  var h = ["Moz", "Webkit", "O", "ms"];
  function v(P = "transform") {
    var q, K;
    if (typeof window > "u") return "";
    const oe = (K = (q = window.document) == null ? void 0 : q.documentElement) == null ? void 0 : K.style;
    if (!oe || P in oe) return "";
    for (let pe = 0; pe < h.length; pe++)
      if (E(P, h[pe]) in oe) return h[pe];
    return "";
  }
  function E(P, q) {
    return q ? `${q}${R(P)}` : P;
  }
  function R(P) {
    let q = "", K = !0;
    for (let oe = 0; oe < P.length; oe++)
      K ? (q += P[oe].toUpperCase(), K = !1) : P[oe] === "-" ? K = !0 : q += P[oe];
    return q;
  }
  var $ = v(), V = "";
  function Y(P, q) {
    var K;
    V || (V = (K = z([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(pe) {
      return C(P[pe]);
    })) != null ? K : "");
    const oe = P[V];
    return C(oe) ? !!oe.call(P, q) : !1;
  }
  function F(P, q, K) {
    let oe = P;
    do {
      if (Y(oe, q)) return !0;
      if (oe === K) return !1;
      oe = oe.parentNode;
    } while (oe);
    return !1;
  }
  function Q(P, q, K, oe) {
    if (!P) return;
    const pe = { capture: !0, ...oe }, De = K;
    P.addEventListener ? P.addEventListener(q, De, pe) : P.attachEvent ? P.attachEvent("on" + q, De) : P["on" + q] = De;
  }
  function ee(P, q, K, oe) {
    if (!P) return;
    const pe = { capture: !0, ...oe }, De = K;
    P.removeEventListener ? P.removeEventListener(q, De, pe) : P.detachEvent ? P.detachEvent("on" + q, De) : P["on" + q] = null;
  }
  function se(P) {
    let q = P.clientHeight;
    const K = P.ownerDocument.defaultView.getComputedStyle(P);
    return q += m(K.borderTopWidth), q += m(K.borderBottomWidth), q;
  }
  function le(P) {
    let q = P.clientWidth;
    const K = P.ownerDocument.defaultView.getComputedStyle(P);
    return q += m(K.borderLeftWidth), q += m(K.borderRightWidth), q;
  }
  function ne(P) {
    let q = P.clientHeight;
    const K = P.ownerDocument.defaultView.getComputedStyle(P);
    return q -= m(K.paddingTop), q -= m(K.paddingBottom), q;
  }
  function ue(P) {
    let q = P.clientWidth;
    const K = P.ownerDocument.defaultView.getComputedStyle(P);
    return q -= m(K.paddingLeft), q -= m(K.paddingRight), q;
  }
  function Z(P, q, K) {
    const pe = q === q.ownerDocument.body ? { left: 0, top: 0 } : q.getBoundingClientRect(), De = (P.clientX + q.scrollLeft - pe.left) / K, Me = (P.clientY + q.scrollTop - pe.top) / K;
    return { x: De, y: Me };
  }
  function de(P, q) {
    const K = L(P, q, "px");
    return { [E("transform", $)]: K };
  }
  function W(P, q) {
    return L(P, q, "");
  }
  function L({ x: P, y: q }, K, oe) {
    let pe = `translate(${P}${oe},${q}${oe})`;
    if (K) {
      const De = `${typeof K.x == "string" ? K.x : K.x + oe}`, Me = `${typeof K.y == "string" ? K.y : K.y + oe}`;
      pe = `translate(${De}, ${Me})` + pe;
    }
    return pe;
  }
  function H(P, q) {
    return P.targetTouches && z(P.targetTouches, (K) => q === K.identifier) || P.changedTouches && z(P.changedTouches, (K) => q === K.identifier);
  }
  function ge(P) {
    if (P.targetTouches && P.targetTouches[0]) return P.targetTouches[0].identifier;
    if (P.changedTouches && P.changedTouches[0]) return P.changedTouches[0].identifier;
  }
  function ye() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Ce(P, q) {
    if (!P) return;
    let K = P.getElementById("react-draggable-style-el");
    if (!K) {
      K = P.createElement("style"), K.type = "text/css", K.id = "react-draggable-style-el";
      const oe = q ?? ye();
      oe && K.setAttribute("nonce", oe), K.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, K.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, P.getElementsByTagName("head")[0].appendChild(K);
    }
    P.body && te(P.body, "react-draggable-transparent-selection");
  }
  function Ae(P) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Te(P);
    }) : Te(P);
  }
  function Te(P) {
    if (P)
      try {
        P.body && fe(P.body, "react-draggable-transparent-selection");
        const q = P.selection;
        if (q)
          q.empty();
        else {
          const K = (P.defaultView || window).getSelection();
          K && K.type !== "Caret" && K.removeAllRanges();
        }
      } catch {
      }
  }
  function te(P, q) {
    P.classList ? P.classList.add(q) : P.className.match(new RegExp(`(?:^|\\s)${q}(?!\\S)`)) || (P.className += ` ${q}`);
  }
  function fe(P, q) {
    P.classList ? P.classList.remove(q) : P.className = P.className.replace(new RegExp(`(?:^|\\s)${q}(?!\\S)`, "g"), "");
  }
  function ze(P, q, K) {
    if (!P.props.bounds) return [q, K];
    let { bounds: oe } = P.props;
    oe = typeof oe == "string" ? oe : M(oe);
    const pe = B(P);
    if (typeof oe == "string") {
      const { ownerDocument: De } = pe, Me = De.defaultView;
      if (!Me)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Qe;
      if (oe === "parent" ? Qe = pe.parentNode : Qe = pe.getRootNode().querySelector(oe), !(Qe instanceof Me.HTMLElement))
        throw new Error('Bounds selector "' + oe + '" could not find an element.');
      const pt = Qe, $t = Me.getComputedStyle(pe), Vt = Me.getComputedStyle(pt);
      oe = {
        left: -pe.offsetLeft + m(Vt.paddingLeft) + m($t.marginLeft),
        top: -pe.offsetTop + m(Vt.paddingTop) + m($t.marginTop),
        right: ue(pt) - le(pe) - pe.offsetLeft + m(Vt.paddingRight) - m($t.marginRight),
        bottom: ne(pt) - se(pe) - pe.offsetTop + m(Vt.paddingBottom) - m($t.marginBottom)
      };
    }
    return x(oe.right) && (q = Math.min(q, oe.right)), x(oe.bottom) && (K = Math.min(K, oe.bottom)), x(oe.left) && (q = Math.max(q, oe.left)), x(oe.top) && (K = Math.max(K, oe.top)), [q, K];
  }
  function Le(P, q, K) {
    const oe = Math.round(q / P[0]) * P[0], pe = Math.round(K / P[1]) * P[1];
    return [oe, pe];
  }
  function Oe(P) {
    return P.props.axis === "both" || P.props.axis === "x";
  }
  function je(P) {
    return P.props.axis === "both" || P.props.axis === "y";
  }
  function Ve(P, q, K) {
    const oe = typeof q == "number" ? H(P, q) : null;
    if (typeof q == "number" && !oe) return null;
    const pe = B(K), De = K.props.offsetParent || pe.offsetParent || pe.ownerDocument.body;
    return Z(oe || P, De, K.props.scale);
  }
  function rt(P, q, K) {
    const oe = !x(P.lastX), pe = B(P);
    return oe ? {
      node: pe,
      deltaX: 0,
      deltaY: 0,
      lastX: q,
      lastY: K,
      x: q,
      y: K
    } : {
      node: pe,
      deltaX: q - P.lastX,
      deltaY: K - P.lastY,
      lastX: P.lastX,
      lastY: P.lastY,
      x: q,
      y: K
    };
  }
  function O(P, q) {
    const K = P.props.scale;
    return {
      node: q.node,
      x: P.state.x + q.deltaX / K,
      y: P.state.y + q.deltaY / K,
      deltaX: q.deltaX / K,
      deltaY: q.deltaY / K,
      lastX: P.state.x,
      lastY: P.state.y
    };
  }
  function M(P) {
    return {
      left: P.left,
      top: P.top,
      right: P.right,
      bottom: P.bottom
    };
  }
  function B(P) {
    const q = P.findDOMNode();
    if (!q)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return q;
  }
  var X = g(zt()), ce = g(/* @__PURE__ */ Pr()), ve = g(Fo()), Ee = function() {
  }, Pe = Ee, Ie = {
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
  }, Ue = Ie.mouse, Xe = class extends X.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (P) => {
        if (this.props.onMouseDown(P), !this.props.allowAnyClick && (typeof P.button == "number" && P.button !== 0 || P.ctrlKey)) return !1;
        const q = this.findDOMNode();
        if (!q || !q.ownerDocument || !q.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: K } = q;
        if (this.props.disabled || !(P.target instanceof K.defaultView.Node) || this.props.handle && !F(P.target, this.props.handle, q) || this.props.cancel && F(P.target, this.props.cancel, q))
          return;
        P.type === "touchstart" && !this.props.allowMobileScroll && P.preventDefault();
        const oe = ge(P);
        this.touchIdentifier = oe;
        const pe = Ve(P, oe, this);
        if (pe == null) return;
        const { x: De, y: Me } = pe, Qe = rt(this, De, Me);
        Pe("calling", this.props.onStart), !(this.props.onStart(P, Qe) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Ce(K, this.props.nonce), this.dragging = !0, this.lastX = De, this.lastY = Me, Q(K, Ue.move, this.handleDrag), Q(K, Ue.stop, this.handleDragStop));
      }, this.handleDrag = (P) => {
        const q = Ve(P, this.touchIdentifier, this);
        if (q == null) return;
        let { x: K, y: oe } = q;
        if (Array.isArray(this.props.grid)) {
          let Me = K - this.lastX, Qe = oe - this.lastY;
          if ([Me, Qe] = Le(this.props.grid, Me, Qe), !Me && !Qe) return;
          K = this.lastX + Me, oe = this.lastY + Qe;
        }
        const pe = rt(this, K, oe);
        if (this.props.onDrag(P, pe) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const Me = document.createEvent("MouseEvents");
            Me.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(Me);
          }
          return;
        }
        this.lastX = K, this.lastY = oe;
      }, this.handleDragStop = (P) => {
        if (!this.dragging) return;
        const q = Ve(P, this.touchIdentifier, this);
        if (q == null) return;
        let { x: K, y: oe } = q;
        if (Array.isArray(this.props.grid)) {
          let Qe = K - this.lastX || 0, pt = oe - this.lastY || 0;
          [Qe, pt] = Le(this.props.grid, Qe, pt), K = this.lastX + Qe, oe = this.lastY + pt;
        }
        const pe = rt(this, K, oe);
        if (this.props.onStop(P, pe) === !1 || this.mounted === !1) return !1;
        const Me = this.findDOMNode();
        Me && this.props.enableUserSelectHack && Ae(Me.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Me && (ee(Me.ownerDocument, Ue.move, this.handleDrag), ee(Me.ownerDocument, Ue.stop, this.handleDragStop));
      }, this.onMouseDown = (P) => (Ue = Ie.mouse, this.handleDragStart(P)), this.onMouseUp = (P) => (Ue = Ie.mouse, this.handleDragStop(P)), this.onTouchStart = (P) => (Ue = Ie.touch, this.handleDragStart(P)), this.onTouchEnd = (P) => (Ue = Ie.touch, this.handleDragStop(P));
    }
    componentDidMount() {
      this.mounted = !0;
      const P = this.findDOMNode();
      P && Q(P, Ie.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const P = this.findDOMNode();
      if (P) {
        const { ownerDocument: q } = P;
        ee(q, Ie.mouse.move, this.handleDrag), ee(q, Ie.touch.move, this.handleDrag), ee(q, Ie.mouse.stop, this.handleDragStop), ee(q, Ie.touch.stop, this.handleDragStop), ee(P, Ie.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && Ae(q);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var P;
      if ((P = this.props) != null && P.nodeRef)
        return this.props.nodeRef.current;
      const q = ve.default;
      return typeof q.findDOMNode == "function" ? q.findDOMNode(this) : null;
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
    offsetParent: function(P, q) {
      if (P[q] && P[q].nodeType !== 1)
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
    className: w,
    style: w,
    transform: w
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
    constructor(P) {
      super(P), this.onDragStart = (q, K) => {
        if (this.props.onStart(q, O(this, K)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (q, K) => {
        if (!this.state.dragging) return !1;
        const oe = O(this, K), pe = {
          x: oe.x,
          y: oe.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: Me, y: Qe } = pe;
          pe.x += this.state.slackX, pe.y += this.state.slackY;
          const [pt, $t] = ze(this, pe.x, pe.y);
          pe.x = pt, pe.y = $t, pe.slackX = this.state.slackX + (Me - pe.x), pe.slackY = this.state.slackY + (Qe - pe.y), oe.x = pe.x, oe.y = pe.y, oe.deltaX = pe.x - this.state.x, oe.deltaY = pe.y - this.state.y;
        }
        if (this.props.onDrag(q, oe) === !1) return !1;
        this.setState(pe);
      }, this.onDragStop = (q, K) => {
        if (!this.state.dragging || this.props.onStop(q, O(this, K)) === !1) return !1;
        const pe = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: Me, y: Qe } = this.props.position;
          pe.x = Me, pe.y = Qe;
        }
        this.setState(pe);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: P.position ? P.position.x : P.defaultPosition.x,
        y: P.position ? P.position.y : P.defaultPosition.y,
        prevPropsPosition: { ...P.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, P.position && !(P.onDrag || P.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: P }, { prevPropsPosition: q }) {
      return P && (!q || P.x !== q.x || P.y !== q.y) ? {
        x: P.x,
        y: P.y,
        prevPropsPosition: { ...P }
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
      var P;
      if ((P = this.props) != null && P.nodeRef)
        return this.props.nodeRef.current;
      const q = I.default;
      return typeof q.findDOMNode == "function" ? q.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: P,
        bounds: q,
        children: K,
        defaultPosition: oe,
        defaultClassName: pe,
        defaultClassNameDragging: De,
        defaultClassNameDragged: Me,
        position: Qe,
        positionOffset: pt,
        scale: $t,
        ...Vt
      } = this.props;
      let Lr = {}, Gr = null;
      const Zt = !!!Qe || this.state.dragging, kn = Qe || oe, Sn = {
        // Set left if horizontal drag is enabled
        x: Oe(this) && Zt ? this.state.x : kn.x,
        // Set top if vertical drag is enabled
        y: je(this) && Zt ? this.state.y : kn.y
      };
      this.state.isElementSVG ? Gr = W(Sn, pt) : Lr = de(Sn, pt);
      const Yr = b.Children.only(K), ki = (0, T.clsx)(Yr.props.className || "", pe, {
        [De]: this.state.dragging,
        [Me]: this.state.dragged
      });
      return /* @__PURE__ */ b.createElement(Xe, { ...Vt, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, b.cloneElement(Yr, {
        className: ki,
        style: { ...Yr.props.style, ...Lr },
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
    className: w,
    style: w,
    transform: w
  }, lt.defaultProps = {
    ...Xe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, Bs;
}
var eu;
function Zs() {
  if (eu) return pi.exports;
  eu = 1;
  const c = dg(), r = c.DraggableCore, i = c.default || c;
  return pi.exports = i, pi.exports.default = i, pi.exports.DraggableCore = r, pi.exports;
}
var fi = { exports: {} }, gi = {}, Oo = {}, tu;
function ug() {
  if (tu) return Oo;
  tu = 1, Oo.__esModule = !0, Oo.cloneElement = f;
  var c = r(zt());
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function i(g, _) {
    var S = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var b = Object.getOwnPropertySymbols(g);
      _ && (b = b.filter(function(k) {
        return Object.getOwnPropertyDescriptor(g, k).enumerable;
      })), S.push.apply(S, b);
    }
    return S;
  }
  function a(g) {
    for (var _ = 1; _ < arguments.length; _++) {
      var S = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? i(Object(S), !0).forEach(function(b) {
        s(g, b, S[b]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(S)) : i(Object(S)).forEach(function(b) {
        Object.defineProperty(g, b, Object.getOwnPropertyDescriptor(S, b));
      });
    }
    return g;
  }
  function s(g, _, S) {
    return _ = d(_), _ in g ? Object.defineProperty(g, _, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : g[_] = S, g;
  }
  function d(g) {
    var _ = u(g, "string");
    return typeof _ == "symbol" ? _ : String(_);
  }
  function u(g, _) {
    if (typeof g != "object" || g === null) return g;
    var S = g[Symbol.toPrimitive];
    if (S !== void 0) {
      var b = S.call(g, _);
      if (typeof b != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(g);
  }
  function f(g, _) {
    return _.style && g.props.style && (_.style = a(a({}, g.props.style), _.style)), _.className && g.props.className && (_.className = g.props.className + " " + _.className), /* @__PURE__ */ c.default.cloneElement(g, _);
  }
  return Oo;
}
var mi = {}, ru;
function ju() {
  if (ru) return mi;
  ru = 1, mi.__esModule = !0, mi.resizableProps = void 0;
  var c = r(/* @__PURE__ */ Pr());
  Zs();
  function r(a) {
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
      for (var s = arguments.length, d = new Array(s), u = 0; u < s; u++)
        d[u] = arguments[u];
      var f = d[0];
      if (f.axis === "both" || f.axis === "y") {
        var g;
        return (g = c.default.number).isRequired.apply(g, d);
      }
      return c.default.number.apply(c.default, d);
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
      for (var s = arguments.length, d = new Array(s), u = 0; u < s; u++)
        d[u] = arguments[u];
      var f = d[0];
      if (f.axis === "both" || f.axis === "x") {
        var g;
        return (g = c.default.number).isRequired.apply(g, d);
      }
      return c.default.number.apply(c.default, d);
    }
  };
  return mi.resizableProps = i, mi;
}
var nu;
function Fu() {
  if (nu) return gi;
  nu = 1, gi.__esModule = !0, gi.default = void 0;
  var c = u(zt()), r = Zs(), i = ug(), a = ju(), s = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function d(x) {
    if (typeof WeakMap != "function") return null;
    var m = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap();
    return (d = function(v) {
      return v ? w : m;
    })(x);
  }
  function u(x, m) {
    if (x && x.__esModule)
      return x;
    if (x === null || typeof x != "object" && typeof x != "function")
      return { default: x };
    var w = d(m);
    if (w && w.has(x))
      return w.get(x);
    var h = {}, v = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in x)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(x, E)) {
        var R = v ? Object.getOwnPropertyDescriptor(x, E) : null;
        R && (R.get || R.set) ? Object.defineProperty(h, E, R) : h[E] = x[E];
      }
    return h.default = x, w && w.set(x, h), h;
  }
  function f() {
    return f = Object.assign ? Object.assign.bind() : function(x) {
      for (var m = 1; m < arguments.length; m++) {
        var w = arguments[m];
        for (var h in w)
          Object.prototype.hasOwnProperty.call(w, h) && (x[h] = w[h]);
      }
      return x;
    }, f.apply(this, arguments);
  }
  function g(x, m) {
    if (x == null) return {};
    var w = {}, h = Object.keys(x), v, E;
    for (E = 0; E < h.length; E++)
      v = h[E], !(m.indexOf(v) >= 0) && (w[v] = x[v]);
    return w;
  }
  function _(x, m) {
    var w = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(x);
      m && (h = h.filter(function(v) {
        return Object.getOwnPropertyDescriptor(x, v).enumerable;
      })), w.push.apply(w, h);
    }
    return w;
  }
  function S(x) {
    for (var m = 1; m < arguments.length; m++) {
      var w = arguments[m] != null ? arguments[m] : {};
      m % 2 ? _(Object(w), !0).forEach(function(h) {
        b(x, h, w[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(w)) : _(Object(w)).forEach(function(h) {
        Object.defineProperty(x, h, Object.getOwnPropertyDescriptor(w, h));
      });
    }
    return x;
  }
  function b(x, m, w) {
    return m = k(m), m in x ? Object.defineProperty(x, m, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : x[m] = w, x;
  }
  function k(x) {
    var m = I(x, "string");
    return typeof m == "symbol" ? m : String(m);
  }
  function I(x, m) {
    if (typeof x != "object" || x === null) return x;
    var w = x[Symbol.toPrimitive];
    if (w !== void 0) {
      var h = w.call(x, m);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(x);
  }
  function T(x, m) {
    x.prototype = Object.create(m.prototype), x.prototype.constructor = x, z(x, m);
  }
  function z(x, m) {
    return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, v) {
      return h.__proto__ = v, h;
    }, z(x, m);
  }
  var C = /* @__PURE__ */ function(x) {
    T(m, x);
    function m() {
      for (var h, v = arguments.length, E = new Array(v), R = 0; R < v; R++)
        E[R] = arguments[R];
      return h = x.call.apply(x, [this].concat(E)) || this, h.handleRefs = {}, h.lastHandleRect = null, h.slack = null, h;
    }
    var w = m.prototype;
    return w.componentWillUnmount = function() {
      this.resetData();
    }, w.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, w.runConstraints = function(v, E) {
      var R = this.props, $ = R.minConstraints, V = R.maxConstraints, Y = R.lockAspectRatio;
      if (!$ && !V && !Y) return [v, E];
      if (Y) {
        var F = this.props.width / this.props.height, Q = v - this.props.width, ee = E - this.props.height;
        Math.abs(Q) > Math.abs(ee * F) ? E = v / F : v = E * F;
      }
      var se = v, le = E, ne = this.slack || [0, 0], ue = ne[0], Z = ne[1];
      return v += ue, E += Z, $ && (v = Math.max($[0], v), E = Math.max($[1], E)), V && (v = Math.min(V[0], v), E = Math.min(V[1], E)), this.slack = [ue + (se - v), Z + (le - E)], [v, E];
    }, w.resizeHandler = function(v, E) {
      var R = this;
      return function($, V) {
        var Y = V.node, F = V.deltaX, Q = V.deltaY;
        v === "onResizeStart" && R.resetData();
        var ee = (R.props.axis === "both" || R.props.axis === "x") && E !== "n" && E !== "s", se = (R.props.axis === "both" || R.props.axis === "y") && E !== "e" && E !== "w";
        if (!(!ee && !se)) {
          var le = E[0], ne = E[E.length - 1], ue = Y.getBoundingClientRect();
          if (R.lastHandleRect != null) {
            if (ne === "w") {
              var Z = ue.left - R.lastHandleRect.left;
              F += Z;
            }
            if (le === "n") {
              var de = ue.top - R.lastHandleRect.top;
              Q += de;
            }
          }
          R.lastHandleRect = ue, ne === "w" && (F = -F), le === "n" && (Q = -Q);
          var W = R.props.width + (ee ? F / R.props.transformScale : 0), L = R.props.height + (se ? Q / R.props.transformScale : 0), H = R.runConstraints(W, L);
          W = H[0], L = H[1];
          var ge = W !== R.props.width || L !== R.props.height, ye = typeof R.props[v] == "function" ? R.props[v] : null, Ce = v === "onResize" && !ge;
          ye && !Ce && ($.persist == null || $.persist(), ye($, {
            node: Y,
            size: {
              width: W,
              height: L
            },
            handle: E
          })), v === "onResizeStop" && R.resetData();
        }
      };
    }, w.renderResizeHandle = function(v, E) {
      var R = this.props.handle;
      if (!R)
        return /* @__PURE__ */ c.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + v,
          ref: E
        });
      if (typeof R == "function")
        return R(v, E);
      var $ = typeof R.type == "string", V = S({
        ref: E
      }, $ ? {} : {
        handleAxis: v
      });
      return /* @__PURE__ */ c.cloneElement(R, V);
    }, w.render = function() {
      var v = this, E = this.props, R = E.children, $ = E.className, V = E.draggableOpts;
      E.width, E.height, E.handle, E.handleSize, E.lockAspectRatio, E.axis, E.minConstraints, E.maxConstraints, E.onResize, E.onResizeStop, E.onResizeStart;
      var Y = E.resizeHandles;
      E.transformScale;
      var F = g(E, s);
      return (0, i.cloneElement)(R, S(S({}, F), {}, {
        className: ($ ? $ + " " : "") + "react-resizable",
        children: [].concat(R.props.children, Y.map(function(Q) {
          var ee, se = (ee = v.handleRefs[Q]) != null ? ee : v.handleRefs[Q] = /* @__PURE__ */ c.createRef();
          return /* @__PURE__ */ c.createElement(r.DraggableCore, f({}, V, {
            nodeRef: se,
            key: "resizableHandle-" + Q,
            onStop: v.resizeHandler("onResizeStop", Q),
            onStart: v.resizeHandler("onResizeStart", Q),
            onDrag: v.resizeHandler("onResize", Q)
          }), v.renderResizeHandle(Q, se));
        }))
      }));
    }, m;
  }(c.Component);
  return gi.default = C, C.propTypes = a.resizableProps, C.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, gi;
}
var hi = {}, iu;
function pg() {
  if (iu) return hi;
  iu = 1, hi.__esModule = !0, hi.default = void 0;
  var c = f(zt()), r = d(/* @__PURE__ */ Pr()), i = d(Fu()), a = ju(), s = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function d(m) {
    return m && m.__esModule ? m : { default: m };
  }
  function u(m) {
    if (typeof WeakMap != "function") return null;
    var w = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (u = function(E) {
      return E ? h : w;
    })(m);
  }
  function f(m, w) {
    if (m && m.__esModule)
      return m;
    if (m === null || typeof m != "object" && typeof m != "function")
      return { default: m };
    var h = u(w);
    if (h && h.has(m))
      return h.get(m);
    var v = {}, E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in m)
      if (R !== "default" && Object.prototype.hasOwnProperty.call(m, R)) {
        var $ = E ? Object.getOwnPropertyDescriptor(m, R) : null;
        $ && ($.get || $.set) ? Object.defineProperty(v, R, $) : v[R] = m[R];
      }
    return v.default = m, h && h.set(m, v), v;
  }
  function g() {
    return g = Object.assign ? Object.assign.bind() : function(m) {
      for (var w = 1; w < arguments.length; w++) {
        var h = arguments[w];
        for (var v in h)
          Object.prototype.hasOwnProperty.call(h, v) && (m[v] = h[v]);
      }
      return m;
    }, g.apply(this, arguments);
  }
  function _(m, w) {
    var h = Object.keys(m);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(m);
      w && (v = v.filter(function(E) {
        return Object.getOwnPropertyDescriptor(m, E).enumerable;
      })), h.push.apply(h, v);
    }
    return h;
  }
  function S(m) {
    for (var w = 1; w < arguments.length; w++) {
      var h = arguments[w] != null ? arguments[w] : {};
      w % 2 ? _(Object(h), !0).forEach(function(v) {
        b(m, v, h[v]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(h)) : _(Object(h)).forEach(function(v) {
        Object.defineProperty(m, v, Object.getOwnPropertyDescriptor(h, v));
      });
    }
    return m;
  }
  function b(m, w, h) {
    return w = k(w), w in m ? Object.defineProperty(m, w, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : m[w] = h, m;
  }
  function k(m) {
    var w = I(m, "string");
    return typeof w == "symbol" ? w : String(w);
  }
  function I(m, w) {
    if (typeof m != "object" || m === null) return m;
    var h = m[Symbol.toPrimitive];
    if (h !== void 0) {
      var v = h.call(m, w);
      if (typeof v != "object") return v;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (w === "string" ? String : Number)(m);
  }
  function T(m, w) {
    if (m == null) return {};
    var h = {}, v = Object.keys(m), E, R;
    for (R = 0; R < v.length; R++)
      E = v[R], !(w.indexOf(E) >= 0) && (h[E] = m[E]);
    return h;
  }
  function z(m, w) {
    m.prototype = Object.create(w.prototype), m.prototype.constructor = m, C(m, w);
  }
  function C(m, w) {
    return C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, E) {
      return v.__proto__ = E, v;
    }, C(m, w);
  }
  var x = /* @__PURE__ */ function(m) {
    z(w, m);
    function w() {
      for (var v, E = arguments.length, R = new Array(E), $ = 0; $ < E; $++)
        R[$] = arguments[$];
      return v = m.call.apply(m, [this].concat(R)) || this, v.state = {
        width: v.props.width,
        height: v.props.height,
        propsWidth: v.props.width,
        propsHeight: v.props.height
      }, v.onResize = function(V, Y) {
        var F = Y.size;
        v.props.onResize ? (V.persist == null || V.persist(), v.setState(F, function() {
          return v.props.onResize && v.props.onResize(V, Y);
        })) : v.setState(F);
      }, v;
    }
    w.getDerivedStateFromProps = function(E, R) {
      return R.propsWidth !== E.width || R.propsHeight !== E.height ? {
        width: E.width,
        height: E.height,
        propsWidth: E.width,
        propsHeight: E.height
      } : null;
    };
    var h = w.prototype;
    return h.render = function() {
      var E = this.props, R = E.handle, $ = E.handleSize;
      E.onResize;
      var V = E.onResizeStart, Y = E.onResizeStop, F = E.draggableOpts, Q = E.minConstraints, ee = E.maxConstraints, se = E.lockAspectRatio, le = E.axis;
      E.width, E.height;
      var ne = E.resizeHandles, ue = E.style, Z = E.transformScale, de = T(E, s);
      return /* @__PURE__ */ c.createElement(i.default, {
        axis: le,
        draggableOpts: F,
        handle: R,
        handleSize: $,
        height: this.state.height,
        lockAspectRatio: se,
        maxConstraints: ee,
        minConstraints: Q,
        onResizeStart: V,
        onResize: this.onResize,
        onResizeStop: Y,
        resizeHandles: ne,
        transformScale: Z,
        width: this.state.width
      }, /* @__PURE__ */ c.createElement("div", g({}, de, {
        style: S(S({}, ue), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, w;
  }(c.Component);
  return hi.default = x, x.propTypes = S(S({}, a.resizableProps), {}, {
    children: r.default.element
  }), hi;
}
var ou;
function fg() {
  return ou || (ou = 1, fi.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, fi.exports.Resizable = Fu().default, fi.exports.ResizableBox = pg().default), fi.exports;
}
var lr = {}, au;
function qu() {
  if (au) return lr;
  au = 1, Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.resizeHandleType = lr.resizeHandleAxesType = lr.default = void 0;
  var c = i(/* @__PURE__ */ Pr()), r = i(zt());
  function i(d) {
    return d && d.__esModule ? d : { default: d };
  }
  const a = lr.resizeHandleAxesType = c.default.arrayOf(c.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), s = lr.resizeHandleType = c.default.oneOfType([c.default.node, c.default.func]);
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
    verticalCompact: function(d) {
      d.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: c.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(d) {
      var u = d.layout;
      u !== void 0 && wn().validateLayout(u, "layout");
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
    resizeHandles: a,
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
    children: function(d, u) {
      const f = d[u], g = {};
      r.default.Children.forEach(f, function(_) {
        if (_?.key != null) {
          if (g[_.key])
            throw new Error('Duplicate child key "' + _.key + '" found! This will cause problems in ReactGridLayout.');
          g[_.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: c.default.any
  }, lr;
}
var su;
function gg() {
  if (su) return ui;
  su = 1, Object.defineProperty(ui, "__esModule", {
    value: !0
  }), ui.default = void 0;
  var c = _(zt()), r = Fo(), i = _(/* @__PURE__ */ Pr()), a = Zs(), s = fg(), d = wn(), u = Qs(), f = qu(), g = _(Uo());
  function _(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function S(C, x) {
    var m = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(C);
      x && (w = w.filter(function(h) {
        return Object.getOwnPropertyDescriptor(C, h).enumerable;
      })), m.push.apply(m, w);
    }
    return m;
  }
  function b(C) {
    for (var x = 1; x < arguments.length; x++) {
      var m = arguments[x] != null ? arguments[x] : {};
      x % 2 ? S(Object(m), !0).forEach(function(w) {
        k(C, w, m[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(m)) : S(Object(m)).forEach(function(w) {
        Object.defineProperty(C, w, Object.getOwnPropertyDescriptor(m, w));
      });
    }
    return C;
  }
  function k(C, x, m) {
    return (x = I(x)) in C ? Object.defineProperty(C, x, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : C[x] = m, C;
  }
  function I(C) {
    var x = T(C, "string");
    return typeof x == "symbol" ? x : x + "";
  }
  function T(C, x) {
    if (typeof C != "object" || !C) return C;
    var m = C[Symbol.toPrimitive];
    if (m !== void 0) {
      var w = m.call(C, x);
      if (typeof w != "object") return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(C);
  }
  let z = class extends c.default.Component {
    constructor() {
      super(...arguments), k(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), k(this, "elementRef", /* @__PURE__ */ c.default.createRef()), k(this, "onDragStart", (x, m) => {
        let {
          node: w
        } = m;
        const {
          onDragStart: h,
          transformScale: v
        } = this.props;
        if (!h) return;
        const E = {
          top: 0,
          left: 0
        }, {
          offsetParent: R
        } = w;
        if (!R) return;
        const $ = R.getBoundingClientRect(), V = w.getBoundingClientRect(), Y = V.left / v, F = $.left / v, Q = V.top / v, ee = $.top / v;
        E.left = Y - F + R.scrollLeft, E.top = Q - ee + R.scrollTop, this.setState({
          dragging: E
        });
        const {
          x: se,
          y: le
        } = (0, u.calcXY)(this.getPositionParams(), E.top, E.left, this.props.w, this.props.h);
        return h.call(this, this.props.i, se, le, {
          e: x,
          node: w,
          newPosition: E
        });
      }), k(this, "onDrag", (x, m, w) => {
        let {
          node: h,
          deltaX: v,
          deltaY: E
        } = m;
        const {
          onDrag: R
        } = this.props;
        if (!R) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let $ = this.state.dragging.top + E, V = this.state.dragging.left + v;
        const {
          isBounded: Y,
          i: F,
          w: Q,
          h: ee,
          containerWidth: se
        } = this.props, le = this.getPositionParams();
        if (Y) {
          const {
            offsetParent: de
          } = h;
          if (de) {
            const {
              margin: W,
              rowHeight: L
            } = this.props, H = de.clientHeight - (0, u.calcGridItemWHPx)(ee, L, W[1]);
            $ = (0, u.clamp)($, 0, H);
            const ge = (0, u.calcGridColWidth)(le), ye = se - (0, u.calcGridItemWHPx)(Q, ge, W[0]);
            V = (0, u.clamp)(V, 0, ye);
          }
        }
        const ne = {
          top: $,
          left: V
        };
        w ? this.setState({
          dragging: ne
        }) : (0, r.flushSync)(() => {
          this.setState({
            dragging: ne
          });
        });
        const {
          x: ue,
          y: Z
        } = (0, u.calcXY)(le, $, V, Q, ee);
        return R.call(this, F, ue, Z, {
          e: x,
          node: h,
          newPosition: ne
        });
      }), k(this, "onDragStop", (x, m) => {
        let {
          node: w
        } = m;
        const {
          onDragStop: h
        } = this.props;
        if (!h) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: v,
          h: E,
          i: R
        } = this.props, {
          left: $,
          top: V
        } = this.state.dragging, Y = {
          top: V,
          left: $
        };
        this.setState({
          dragging: null
        });
        const {
          x: F,
          y: Q
        } = (0, u.calcXY)(this.getPositionParams(), V, $, v, E);
        return h.call(this, R, F, Q, {
          e: x,
          node: w,
          newPosition: Y
        });
      }), k(this, "onResizeStop", (x, m, w) => this.onResizeHandler(x, m, w, "onResizeStop")), k(this, "onResizeStart", (x, m, w) => this.onResizeHandler(x, m, w, "onResizeStart")), k(this, "onResize", (x, m, w) => this.onResizeHandler(x, m, w, "onResize"));
    }
    shouldComponentUpdate(x, m) {
      if (this.props.children !== x.children || this.props.droppingPosition !== x.droppingPosition) return !0;
      const w = (0, u.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), h = (0, u.calcGridItemPosition)(this.getPositionParams(x), x.x, x.y, x.w, x.h, m);
      return !(0, d.fastPositionEqual)(w, h) || this.props.useCSSTransforms !== x.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(x) {
      this.moveDroppingItem(x);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(x) {
      const {
        droppingPosition: m
      } = this.props;
      if (!m) return;
      const w = this.elementRef.current;
      if (!w) return;
      const h = x.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: v
      } = this.state, E = v && m.left !== h.left || m.top !== h.top;
      if (!v)
        this.onDragStart(m.e, {
          node: w,
          deltaX: m.left,
          deltaY: m.top
        });
      else if (E) {
        const R = m.left - v.left, $ = m.top - v.top;
        this.onDrag(
          m.e,
          {
            node: w,
            deltaX: R,
            deltaY: $
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: x.cols,
        containerPadding: x.containerPadding,
        containerWidth: x.containerWidth,
        margin: x.margin,
        maxRows: x.maxRows,
        rowHeight: x.rowHeight
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
    createStyle(x) {
      const {
        usePercentages: m,
        containerWidth: w,
        useCSSTransforms: h
      } = this.props;
      let v;
      return h ? v = (0, d.setTransform)(x) : (v = (0, d.setTopLeft)(x), m && (v.left = (0, d.perc)(x.left / w), v.width = (0, d.perc)(x.width / w))), v;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(x, m) {
      return /* @__PURE__ */ c.default.createElement(a.DraggableCore, {
        disabled: !m,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, x);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(x, m) {
      return (w, h) => (
        /*: Function*/
        m(w, h, x)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(x, m, w) {
      const {
        cols: h,
        minW: v,
        minH: E,
        maxW: R,
        maxH: $,
        transformScale: V,
        resizeHandles: Y,
        resizeHandle: F
      } = this.props, Q = this.getPositionParams(), ee = (0, u.calcGridItemPosition)(Q, 0, 0, h, 0).width, se = (0, u.calcGridItemPosition)(Q, 0, 0, v, E), le = (0, u.calcGridItemPosition)(Q, 0, 0, R, $), ne = [se.width, se.height], ue = [Math.min(le.width, ee), Math.min(le.height, 1 / 0)];
      return /* @__PURE__ */ c.default.createElement(
        s.Resizable,
        {
          draggableOpts: {
            disabled: !w
          },
          className: w ? void 0 : "react-resizable-hide",
          width: m.width,
          height: m.height,
          minConstraints: ne,
          maxConstraints: ue,
          onResizeStop: this.curryResizeHandler(m, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(m, this.onResizeStart),
          onResize: this.curryResizeHandler(m, this.onResize),
          transformScale: V,
          resizeHandles: Y,
          handle: F
        },
        x
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(x, m, w, h) {
      let {
        node: v,
        size: E,
        handle: R
      } = m;
      const $ = this.props[h];
      if (!$) return;
      const {
        x: V,
        y: Y,
        i: F,
        maxH: Q,
        minH: ee,
        containerWidth: se
      } = this.props, {
        minW: le,
        maxW: ne
      } = this.props;
      let ue = E;
      v && (ue = (0, d.resizeItemInDirection)(R, w, E, se), (0, r.flushSync)(() => {
        this.setState({
          resizing: h === "onResizeStop" ? null : ue
        });
      }));
      let {
        w: Z,
        h: de
      } = (0, u.calcWH)(this.getPositionParams(), ue.width, ue.height, V, Y, R);
      Z = (0, u.clamp)(Z, Math.max(le, 1), ne), de = (0, u.clamp)(de, ee, Q), $.call(this, F, Z, de, {
        e: x,
        node: v,
        size: ue,
        handle: R
      });
    }
    render() {
      const {
        x,
        y: m,
        w,
        h,
        isDraggable: v,
        isResizable: E,
        droppingPosition: R,
        useCSSTransforms: $
      } = this.props, V = (0, u.calcGridItemPosition)(this.getPositionParams(), x, m, w, h, this.state), Y = c.default.Children.only(this.props.children);
      let F = /* @__PURE__ */ c.default.cloneElement(Y, {
        ref: this.elementRef,
        className: (0, g.default)("react-grid-item", Y.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": v,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!R,
          cssTransforms: $
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: b(b(b({}, this.props.style), Y.props.style), this.createStyle(V))
      });
      return F = this.mixinResizable(F, V, E), F = this.mixinDraggable(F, v), F;
    }
  };
  return ui.default = z, k(z, "propTypes", {
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
    minW: function(C, x) {
      const m = C[x];
      if (typeof m != "number") return new Error("minWidth not Number");
      if (m > C.w || m > C.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(C, x) {
      const m = C[x];
      if (typeof m != "number") return new Error("maxWidth not Number");
      if (m < C.w || m < C.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(C, x) {
      const m = C[x];
      if (typeof m != "number") return new Error("minHeight not Number");
      if (m > C.h || m > C.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(C, x) {
      const m = C[x];
      if (typeof m != "number") return new Error("maxHeight not Number");
      if (m < C.h || m < C.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: i.default.string.isRequired,
    // Resize handle options
    resizeHandles: f.resizeHandleAxesType,
    resizeHandle: f.resizeHandleType,
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
  }), ui;
}
var lu;
function Wu() {
  if (lu) return di;
  lu = 1, Object.defineProperty(di, "__esModule", {
    value: !0
  }), di.default = void 0;
  var c = g(zt()), r = /* @__PURE__ */ Xs(), i = f(Uo()), a = wn(), s = Qs(), d = f(gg()), u = f(qu());
  function f(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function g(x, m) {
    if (typeof WeakMap == "function") var w = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (g = function(v, E) {
      if (!E && v && v.__esModule) return v;
      var R, $, V = { __proto__: null, default: v };
      if (v === null || typeof v != "object" && typeof v != "function") return V;
      if (R = E ? h : w) {
        if (R.has(v)) return R.get(v);
        R.set(v, V);
      }
      for (const Y in v) Y !== "default" && {}.hasOwnProperty.call(v, Y) && (($ = (R = Object.defineProperty) && Object.getOwnPropertyDescriptor(v, Y)) && ($.get || $.set) ? R(V, Y, $) : V[Y] = v[Y]);
      return V;
    })(x, m);
  }
  function _(x, m) {
    var w = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(x);
      m && (h = h.filter(function(v) {
        return Object.getOwnPropertyDescriptor(x, v).enumerable;
      })), w.push.apply(w, h);
    }
    return w;
  }
  function S(x) {
    for (var m = 1; m < arguments.length; m++) {
      var w = arguments[m] != null ? arguments[m] : {};
      m % 2 ? _(Object(w), !0).forEach(function(h) {
        b(x, h, w[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(w)) : _(Object(w)).forEach(function(h) {
        Object.defineProperty(x, h, Object.getOwnPropertyDescriptor(w, h));
      });
    }
    return x;
  }
  function b(x, m, w) {
    return (m = k(m)) in x ? Object.defineProperty(x, m, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : x[m] = w, x;
  }
  function k(x) {
    var m = I(x, "string");
    return typeof m == "symbol" ? m : m + "";
  }
  function I(x, m) {
    if (typeof x != "object" || !x) return x;
    var w = x[Symbol.toPrimitive];
    if (w !== void 0) {
      var h = w.call(x, m);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(x);
  }
  const T = "react-grid-layout";
  let z = !1;
  try {
    z = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let C = class extends c.Component {
    constructor() {
      super(...arguments), b(this, "state", {
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
      }), b(this, "dragEnterCounter", 0), b(this, "onDragStart", (m, w, h, v) => {
        let {
          e: E,
          node: R
        } = v;
        const {
          layout: $
        } = this.state, V = (0, a.getLayoutItem)($, m);
        if (!V) return;
        const Y = {
          w: V.w,
          h: V.h,
          x: V.x,
          y: V.y,
          placeholder: !0,
          i: m
        };
        return this.setState({
          oldDragItem: (0, a.cloneLayoutItem)(V),
          oldLayout: $,
          activeDrag: Y
        }), this.props.onDragStart($, V, V, null, E, R);
      }), b(this, "onDrag", (m, w, h, v) => {
        let {
          e: E,
          node: R
        } = v;
        const {
          oldDragItem: $
        } = this.state;
        let {
          layout: V
        } = this.state;
        const {
          cols: Y,
          allowOverlap: F,
          preventCollision: Q
        } = this.props, ee = (0, a.getLayoutItem)(V, m);
        if (!ee) return;
        const se = {
          w: ee.w,
          h: ee.h,
          x: ee.x,
          y: ee.y,
          placeholder: !0,
          i: m
        };
        V = (0, a.moveElement)(V, ee, w, h, !0, Q, (0, a.compactType)(this.props), Y, F), this.props.onDrag(V, $, ee, se, E, R), this.setState({
          layout: F ? V : (0, a.compact)(V, (0, a.compactType)(this.props), Y),
          activeDrag: se
        });
      }), b(this, "onDragStop", (m, w, h, v) => {
        let {
          e: E,
          node: R
        } = v;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: $
        } = this.state;
        let {
          layout: V
        } = this.state;
        const {
          cols: Y,
          preventCollision: F,
          allowOverlap: Q
        } = this.props, ee = (0, a.getLayoutItem)(V, m);
        if (!ee) return;
        V = (0, a.moveElement)(V, ee, w, h, !0, F, (0, a.compactType)(this.props), Y, Q);
        const le = Q ? V : (0, a.compact)(V, (0, a.compactType)(this.props), Y);
        this.props.onDragStop(le, $, ee, null, E, R);
        const {
          oldLayout: ne
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: le,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(le, ne);
      }), b(this, "onResizeStart", (m, w, h, v) => {
        let {
          e: E,
          node: R
        } = v;
        const {
          layout: $
        } = this.state, V = (0, a.getLayoutItem)($, m);
        V && (this.setState({
          oldResizeItem: (0, a.cloneLayoutItem)(V),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart($, V, V, null, E, R));
      }), b(this, "onResize", (m, w, h, v) => {
        let {
          e: E,
          node: R,
          size: $,
          handle: V
        } = v;
        const {
          oldResizeItem: Y
        } = this.state, {
          layout: F
        } = this.state, {
          cols: Q,
          preventCollision: ee,
          allowOverlap: se
        } = this.props;
        let le = !1, ne, ue, Z;
        const [de, W] = (0, a.withLayoutItem)(F, m, (H) => {
          let ge;
          return ue = H.x, Z = H.y, ["sw", "w", "nw", "n", "ne"].indexOf(V) !== -1 && (["sw", "nw", "w"].indexOf(V) !== -1 && (ue = H.x + (H.w - w), w = H.x !== ue && ue < 0 ? H.w : w, ue = ue < 0 ? 0 : ue), ["ne", "n", "nw"].indexOf(V) !== -1 && (Z = H.y + (H.h - h), h = H.y !== Z && Z < 0 ? H.h : h, Z = Z < 0 ? 0 : Z), le = !0), ee && !se && (ge = (0, a.getAllCollisions)(F, S(S({}, H), {}, {
            w,
            h,
            x: ue,
            y: Z
          })).filter((Ce) => Ce.i !== H.i).length > 0, ge && (Z = H.y, h = H.h, ue = H.x, w = H.w, le = !1)), H.w = w, H.h = h, H;
        });
        if (!W) return;
        ne = de, le && (ne = (0, a.moveElement)(de, W, ue, Z, !0, this.props.preventCollision, (0, a.compactType)(this.props), Q, se));
        const L = {
          w: W.w,
          h: W.h,
          x: W.x,
          y: W.y,
          static: !0,
          i: m
        };
        this.props.onResize(ne, Y, W, L, E, R), this.setState({
          layout: se ? ne : (0, a.compact)(ne, (0, a.compactType)(this.props), Q),
          activeDrag: L
        });
      }), b(this, "onResizeStop", (m, w, h, v) => {
        let {
          e: E,
          node: R
        } = v;
        const {
          layout: $,
          oldResizeItem: V
        } = this.state, {
          cols: Y,
          allowOverlap: F
        } = this.props, Q = (0, a.getLayoutItem)($, m), ee = F ? $ : (0, a.compact)($, (0, a.compactType)(this.props), Y);
        this.props.onResizeStop(ee, V, Q, null, E, R);
        const {
          oldLayout: se
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: ee,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(ee, se);
      }), b(this, "onDragOver", (m) => {
        var w;
        if (m.preventDefault(), m.stopPropagation(), z && // $FlowIgnore can't figure this out
        !((w = m.nativeEvent.target) !== null && w !== void 0 && w.classList.contains(T)))
          return !1;
        const {
          droppingItem: h,
          onDropDragOver: v,
          margin: E,
          cols: R,
          rowHeight: $,
          maxRows: V,
          width: Y,
          containerPadding: F,
          transformScale: Q
        } = this.props, ee = v?.(m);
        if (ee === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const se = S(S({}, h), ee), {
          layout: le
        } = this.state, ne = m.currentTarget.getBoundingClientRect(), ue = m.clientX - ne.left, Z = m.clientY - ne.top, de = {
          left: ue / Q,
          top: Z / Q,
          e: m
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: W,
              top: L
            } = this.state.droppingPosition;
            (W != ue || L != Z) && this.setState({
              droppingPosition: de
            });
          }
        } else {
          const W = {
            cols: R,
            margin: E,
            maxRows: V,
            rowHeight: $,
            containerWidth: Y,
            containerPadding: F || E
          }, L = (0, s.calcXY)(W, Z, ue, se.w, se.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ c.createElement("div", {
              key: se.i
            }),
            droppingPosition: de,
            layout: [...le, S(S({}, se), {}, {
              x: L.x,
              y: L.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), b(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: m,
          cols: w
        } = this.props, {
          layout: h
        } = this.state, v = (0, a.compact)(h.filter((E) => E.i !== m.i), (0, a.compactType)(this.props), w, this.props.allowOverlap);
        this.setState({
          layout: v,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), b(this, "onDragLeave", (m) => {
        m.preventDefault(), m.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), b(this, "onDragEnter", (m) => {
        m.preventDefault(), m.stopPropagation(), this.dragEnterCounter++;
      }), b(this, "onDrop", (m) => {
        m.preventDefault(), m.stopPropagation();
        const {
          droppingItem: w
        } = this.props, {
          layout: h
        } = this.state, v = h.find((E) => E.i === w.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(h, v, m);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(m, w) {
      let h;
      return w.activeDrag ? null : (!(0, r.deepEqual)(m.layout, w.propsLayout) || m.compactType !== w.compactType ? h = m.layout : (0, a.childrenEqual)(m.children, w.children) || (h = w.layout), h ? {
        layout: (0, a.synchronizeLayoutWithChildren)(h, m.children, m.cols, (0, a.compactType)(m), m.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: m.compactType,
        children: m.children,
        propsLayout: m.layout
      } : null);
    }
    shouldComponentUpdate(m, w) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== m.children || !(0, a.fastRGLPropsEqual)(this.props, m, r.deepEqual) || this.state.activeDrag !== w.activeDrag || this.state.mounted !== w.mounted || this.state.droppingPosition !== w.droppingPosition
      );
    }
    componentDidUpdate(m, w) {
      if (!this.state.activeDrag) {
        const h = this.state.layout, v = w.layout;
        this.onLayoutMaybeChanged(h, v);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const m = (0, a.bottom)(this.state.layout), w = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return m * this.props.rowHeight + (m - 1) * this.props.margin[1] + w * 2 + "px";
    }
    onLayoutMaybeChanged(m, w) {
      w || (w = this.state.layout), (0, r.deepEqual)(w, m) || this.props.onLayoutChange(m);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: m
      } = this.state;
      if (!m) return null;
      const {
        width: w,
        cols: h,
        margin: v,
        containerPadding: E,
        rowHeight: R,
        maxRows: $,
        useCSSTransforms: V,
        transformScale: Y
      } = this.props;
      return /* @__PURE__ */ c.createElement(d.default, {
        w: m.w,
        h: m.h,
        x: m.x,
        y: m.y,
        i: m.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: w,
        cols: h,
        margin: v,
        containerPadding: E || v,
        maxRows: $,
        rowHeight: R,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: V,
        transformScale: Y
      }, /* @__PURE__ */ c.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(m, w) {
      if (!m || !m.key) return;
      const h = (0, a.getLayoutItem)(this.state.layout, String(m.key));
      if (!h) return null;
      const {
        width: v,
        cols: E,
        margin: R,
        containerPadding: $,
        rowHeight: V,
        maxRows: Y,
        isDraggable: F,
        isResizable: Q,
        isBounded: ee,
        useCSSTransforms: se,
        transformScale: le,
        draggableCancel: ne,
        draggableHandle: ue,
        resizeHandles: Z,
        resizeHandle: de
      } = this.props, {
        mounted: W,
        droppingPosition: L
      } = this.state, H = typeof h.isDraggable == "boolean" ? h.isDraggable : !h.static && F, ge = typeof h.isResizable == "boolean" ? h.isResizable : !h.static && Q, ye = h.resizeHandles || Z, Ce = H && ee && h.isBounded !== !1;
      return /* @__PURE__ */ c.createElement(d.default, {
        containerWidth: v,
        cols: E,
        margin: R,
        containerPadding: $ || R,
        maxRows: Y,
        rowHeight: V,
        cancel: ne,
        handle: ue,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: H,
        isResizable: ge,
        isBounded: Ce,
        useCSSTransforms: se && W,
        usePercentages: !W,
        transformScale: le,
        w: h.w,
        h: h.h,
        x: h.x,
        y: h.y,
        i: h.i,
        minH: h.minH,
        minW: h.minW,
        maxH: h.maxH,
        maxW: h.maxW,
        static: h.static,
        droppingPosition: w ? L : void 0,
        resizeHandles: ye,
        resizeHandle: de
      }, m);
    }
    render() {
      const {
        className: m,
        style: w,
        isDroppable: h,
        innerRef: v
      } = this.props, E = (0, i.default)(T, m), R = S({
        height: this.containerHeight()
      }, w);
      return /* @__PURE__ */ c.createElement("div", {
        ref: v,
        className: E,
        style: R,
        onDrop: h ? this.onDrop : a.noop,
        onDragLeave: h ? this.onDragLeave : a.noop,
        onDragEnter: h ? this.onDragEnter : a.noop,
        onDragOver: h ? this.onDragOver : a.noop
      }, c.Children.map(this.props.children, ($) => this.processGridItem($)), h && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return di.default = C, b(C, "displayName", "ReactGridLayout"), b(C, "propTypes", u.default), b(C, "defaultProps", {
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
  }), di;
}
var _i = {}, Vr = {}, cu;
function Uu() {
  if (cu) return Vr;
  cu = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.findOrGenerateResponsiveLayout = a, Vr.getBreakpointFromWidth = r, Vr.getColsFromBreakpoint = i, Vr.sortBreakpoints = s;
  var c = wn();
  function r(d, u) {
    const f = s(d);
    let g = f[0];
    for (let _ = 1, S = f.length; _ < S; _++) {
      const b = f[_];
      u > d[b] && (g = b);
    }
    return g;
  }
  function i(d, u) {
    if (!u[d])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + d + " is missing!");
    return u[d];
  }
  function a(d, u, f, g, _, S) {
    if (d[f]) return (0, c.cloneLayout)(d[f]);
    let b = d[g];
    const k = s(u), I = k.slice(k.indexOf(f));
    for (let T = 0, z = I.length; T < z; T++) {
      const C = I[T];
      if (d[C]) {
        b = d[C];
        break;
      }
    }
    return b = (0, c.cloneLayout)(b || []), (0, c.compact)((0, c.correctBounds)(b, {
      cols: _
    }), S, _);
  }
  function s(d) {
    return Object.keys(d).sort(function(f, g) {
      return d[f] - d[g];
    });
  }
  return Vr;
}
var du;
function mg() {
  if (du) return _i;
  du = 1, Object.defineProperty(_i, "__esModule", {
    value: !0
  }), _i.default = void 0;
  var c = g(zt()), r = f(/* @__PURE__ */ Pr()), i = /* @__PURE__ */ Xs(), a = wn(), s = Uu(), d = f(Wu());
  const u = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function f(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function g(h, v) {
    if (typeof WeakMap == "function") var E = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (g = function($, V) {
      if (!V && $ && $.__esModule) return $;
      var Y, F, Q = { __proto__: null, default: $ };
      if ($ === null || typeof $ != "object" && typeof $ != "function") return Q;
      if (Y = V ? R : E) {
        if (Y.has($)) return Y.get($);
        Y.set($, Q);
      }
      for (const ee in $) ee !== "default" && {}.hasOwnProperty.call($, ee) && ((F = (Y = Object.defineProperty) && Object.getOwnPropertyDescriptor($, ee)) && (F.get || F.set) ? Y(Q, ee, F) : Q[ee] = $[ee]);
      return Q;
    })(h, v);
  }
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(h) {
      for (var v = 1; v < arguments.length; v++) {
        var E = arguments[v];
        for (var R in E) ({}).hasOwnProperty.call(E, R) && (h[R] = E[R]);
      }
      return h;
    }, _.apply(null, arguments);
  }
  function S(h, v) {
    if (h == null) return {};
    var E, R, $ = b(h, v);
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(h);
      for (R = 0; R < V.length; R++) E = V[R], v.indexOf(E) === -1 && {}.propertyIsEnumerable.call(h, E) && ($[E] = h[E]);
    }
    return $;
  }
  function b(h, v) {
    if (h == null) return {};
    var E = {};
    for (var R in h) if ({}.hasOwnProperty.call(h, R)) {
      if (v.indexOf(R) !== -1) continue;
      E[R] = h[R];
    }
    return E;
  }
  function k(h, v) {
    var E = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(h);
      v && (R = R.filter(function($) {
        return Object.getOwnPropertyDescriptor(h, $).enumerable;
      })), E.push.apply(E, R);
    }
    return E;
  }
  function I(h) {
    for (var v = 1; v < arguments.length; v++) {
      var E = arguments[v] != null ? arguments[v] : {};
      v % 2 ? k(Object(E), !0).forEach(function(R) {
        T(h, R, E[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(E)) : k(Object(E)).forEach(function(R) {
        Object.defineProperty(h, R, Object.getOwnPropertyDescriptor(E, R));
      });
    }
    return h;
  }
  function T(h, v, E) {
    return (v = z(v)) in h ? Object.defineProperty(h, v, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : h[v] = E, h;
  }
  function z(h) {
    var v = C(h, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function C(h, v) {
    if (typeof h != "object" || !h) return h;
    var E = h[Symbol.toPrimitive];
    if (E !== void 0) {
      var R = E.call(h, v);
      if (typeof R != "object") return R;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(h);
  }
  const x = (h) => Object.prototype.toString.call(h);
  function m(h, v) {
    return h == null ? null : Array.isArray(h) ? h : h[v];
  }
  let w = class extends c.Component {
    constructor() {
      super(...arguments), T(this, "state", this.generateInitialState()), T(this, "onLayoutChange", (v) => {
        this.props.onLayoutChange(v, I(I({}, this.props.layouts), {}, {
          [this.state.breakpoint]: v
        }));
      });
    }
    generateInitialState() {
      const {
        width: v,
        breakpoints: E,
        layouts: R,
        cols: $
      } = this.props, V = (0, s.getBreakpointFromWidth)(E, v), Y = (0, s.getColsFromBreakpoint)(V, $), F = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, s.findOrGenerateResponsiveLayout)(R, E, V, V, Y, F),
        breakpoint: V,
        cols: Y
      };
    }
    static getDerivedStateFromProps(v, E) {
      if (!(0, i.deepEqual)(v.layouts, E.layouts)) {
        const {
          breakpoint: R,
          cols: $
        } = E;
        return {
          layout: (0, s.findOrGenerateResponsiveLayout)(v.layouts, v.breakpoints, R, R, $, v.compactType),
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
        cols: R,
        layouts: $,
        compactType: V
      } = this.props, Y = this.props.breakpoint || (0, s.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), F = this.state.breakpoint, Q = (0, s.getColsFromBreakpoint)(Y, R), ee = I({}, $);
      if (F !== Y || v.breakpoints !== E || v.cols !== R) {
        F in ee || (ee[F] = (0, a.cloneLayout)(this.state.layout));
        let ne = (0, s.findOrGenerateResponsiveLayout)(ee, E, Y, F, Q, V);
        ne = (0, a.synchronizeLayoutWithChildren)(ne, this.props.children, Q, V, this.props.allowOverlap), ee[Y] = ne, this.props.onBreakpointChange(Y, Q), this.props.onLayoutChange(ne, ee), this.setState({
          breakpoint: Y,
          layout: ne,
          cols: Q
        });
      }
      const se = m(this.props.margin, Y), le = m(this.props.containerPadding, Y);
      this.props.onWidthChange(this.props.width, se, Q, le);
    }
    render() {
      const v = this.props, {
        breakpoint: E,
        breakpoints: R,
        cols: $,
        layouts: V,
        margin: Y,
        containerPadding: F,
        onBreakpointChange: Q,
        onLayoutChange: ee,
        onWidthChange: se
      } = v, le = S(v, u);
      return /* @__PURE__ */ c.createElement(d.default, _({}, le, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: m(Y, this.state.breakpoint),
        containerPadding: m(F, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return _i.default = w, T(w, "propTypes", {
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
    layouts(h, v) {
      if (x(h[v]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + x(h[v]));
      Object.keys(h[v]).forEach((E) => {
        if (!(E in h.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, a.validateLayout)(h.layouts[E], "layouts." + E);
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
  }), T(w, "defaultProps", {
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
  }), _i;
}
var To = {}, Vu = function() {
  if (typeof Map < "u")
    return Map;
  function c(r, i) {
    var a = -1;
    return r.some(function(s, d) {
      return s[0] === i ? (a = d, !0) : !1;
    }), a;
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
        var a = c(this.__entries__, i), s = this.__entries__[a];
        return s && s[1];
      }, r.prototype.set = function(i, a) {
        var s = c(this.__entries__, i);
        ~s ? this.__entries__[s][1] = a : this.__entries__.push([i, a]);
      }, r.prototype.delete = function(i) {
        var a = this.__entries__, s = c(a, i);
        ~s && a.splice(s, 1);
      }, r.prototype.has = function(i) {
        return !!~c(this.__entries__, i);
      }, r.prototype.clear = function() {
        this.__entries__.splice(0);
      }, r.prototype.forEach = function(i, a) {
        a === void 0 && (a = null);
        for (var s = 0, d = this.__entries__; s < d.length; s++) {
          var u = d[s];
          i.call(a, u[1], u[0]);
        }
      }, r;
    }()
  );
}(), Gs = typeof window < "u" && typeof document < "u" && window.document === document, qo = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), hg = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(qo) : function(c) {
    return setTimeout(function() {
      return c(Date.now());
    }, 1e3 / 60);
  };
}(), _g = 2;
function bg(c, r) {
  var i = !1, a = !1, s = 0;
  function d() {
    i && (i = !1, c()), a && f();
  }
  function u() {
    hg(d);
  }
  function f() {
    var g = Date.now();
    if (i) {
      if (g - s < _g)
        return;
      a = !0;
    } else
      i = !0, a = !1, setTimeout(u, r);
    s = g;
  }
  return f;
}
var yg = 20, xg = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vg = typeof MutationObserver < "u", wg = (
  /** @class */
  function() {
    function c() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = bg(this.refresh.bind(this), yg);
    }
    return c.prototype.addObserver = function(r) {
      ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_();
    }, c.prototype.removeObserver = function(r) {
      var i = this.observers_, a = i.indexOf(r);
      ~a && i.splice(a, 1), !i.length && this.connected_ && this.disconnect_();
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
      !Gs || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vg ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, c.prototype.disconnect_ = function() {
      !Gs || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, c.prototype.onTransitionEnd_ = function(r) {
      var i = r.propertyName, a = i === void 0 ? "" : i, s = xg.some(function(d) {
        return !!~a.indexOf(d);
      });
      s && this.refresh();
    }, c.getInstance = function() {
      return this.instance_ || (this.instance_ = new c()), this.instance_;
    }, c.instance_ = null, c;
  }()
), Gu = function(c, r) {
  for (var i = 0, a = Object.keys(r); i < a.length; i++) {
    var s = a[i];
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
}, Yu = Vo(0, 0, 0, 0);
function Wo(c) {
  return parseFloat(c) || 0;
}
function uu(c) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r[i - 1] = arguments[i];
  return r.reduce(function(a, s) {
    var d = c["border-" + s + "-width"];
    return a + Wo(d);
  }, 0);
}
function kg(c) {
  for (var r = ["top", "right", "bottom", "left"], i = {}, a = 0, s = r; a < s.length; a++) {
    var d = s[a], u = c["padding-" + d];
    i[d] = Wo(u);
  }
  return i;
}
function Sg(c) {
  var r = c.getBBox();
  return Vo(0, 0, r.width, r.height);
}
function Eg(c) {
  var r = c.clientWidth, i = c.clientHeight;
  if (!r && !i)
    return Yu;
  var a = xn(c).getComputedStyle(c), s = kg(a), d = s.left + s.right, u = s.top + s.bottom, f = Wo(a.width), g = Wo(a.height);
  if (a.boxSizing === "border-box" && (Math.round(f + d) !== r && (f -= uu(a, "left", "right") + d), Math.round(g + u) !== i && (g -= uu(a, "top", "bottom") + u)), !zg(c)) {
    var _ = Math.round(f + d) - r, S = Math.round(g + u) - i;
    Math.abs(_) !== 1 && (f -= _), Math.abs(S) !== 1 && (g -= S);
  }
  return Vo(s.left, s.top, f, g);
}
var Cg = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(c) {
    return c instanceof xn(c).SVGGraphicsElement;
  } : function(c) {
    return c instanceof xn(c).SVGElement && typeof c.getBBox == "function";
  };
}();
function zg(c) {
  return c === xn(c).document.documentElement;
}
function Rg(c) {
  return Gs ? Cg(c) ? Sg(c) : Eg(c) : Yu;
}
function Ag(c) {
  var r = c.x, i = c.y, a = c.width, s = c.height, d = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, u = Object.create(d.prototype);
  return Gu(u, {
    x: r,
    y: i,
    width: a,
    height: s,
    top: i,
    right: r + a,
    bottom: s + i,
    left: r
  }), u;
}
function Vo(c, r, i, a) {
  return { x: c, y: r, width: i, height: a };
}
var Pg = (
  /** @class */
  function() {
    function c(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Vo(0, 0, 0, 0), this.target = r;
    }
    return c.prototype.isActive = function() {
      var r = Rg(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, c.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, c;
  }()
), Lg = (
  /** @class */
  /* @__PURE__ */ function() {
    function c(r, i) {
      var a = Ag(i);
      Gu(this, { target: r, contentRect: a });
    }
    return c;
  }()
), Ig = (
  /** @class */
  function() {
    function c(r, i, a) {
      if (this.activeObservations_ = [], this.observations_ = new Vu(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = i, this.callbackCtx_ = a;
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
        var r = this.callbackCtx_, i = this.activeObservations_.map(function(a) {
          return new Lg(a.target, a.broadcastRect());
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
      var i = wg.getInstance(), a = new Ig(r, i, this);
      Ku.set(this, a);
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
const Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ng
}, Symbol.toStringTag, { value: "Module" })), Tg = /* @__PURE__ */ Kf(Og);
var pu;
function Dg() {
  if (pu) return To;
  pu = 1, Object.defineProperty(To, "__esModule", {
    value: !0
  }), To.default = T;
  var c = u(zt()), r = d(/* @__PURE__ */ Pr()), i = d(Tg), a = d(Uo());
  const s = ["measureBeforeMount"];
  function d(z) {
    return z && z.__esModule ? z : { default: z };
  }
  function u(z, C) {
    if (typeof WeakMap == "function") var x = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (u = function(w, h) {
      if (!h && w && w.__esModule) return w;
      var v, E, R = { __proto__: null, default: w };
      if (w === null || typeof w != "object" && typeof w != "function") return R;
      if (v = h ? m : x) {
        if (v.has(w)) return v.get(w);
        v.set(w, R);
      }
      for (const $ in w) $ !== "default" && {}.hasOwnProperty.call(w, $) && ((E = (v = Object.defineProperty) && Object.getOwnPropertyDescriptor(w, $)) && (E.get || E.set) ? v(R, $, E) : R[$] = w[$]);
      return R;
    })(z, C);
  }
  function f() {
    return f = Object.assign ? Object.assign.bind() : function(z) {
      for (var C = 1; C < arguments.length; C++) {
        var x = arguments[C];
        for (var m in x) ({}).hasOwnProperty.call(x, m) && (z[m] = x[m]);
      }
      return z;
    }, f.apply(null, arguments);
  }
  function g(z, C) {
    if (z == null) return {};
    var x, m, w = _(z, C);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(z);
      for (m = 0; m < h.length; m++) x = h[m], C.indexOf(x) === -1 && {}.propertyIsEnumerable.call(z, x) && (w[x] = z[x]);
    }
    return w;
  }
  function _(z, C) {
    if (z == null) return {};
    var x = {};
    for (var m in z) if ({}.hasOwnProperty.call(z, m)) {
      if (C.indexOf(m) !== -1) continue;
      x[m] = z[m];
    }
    return x;
  }
  function S(z, C, x) {
    return (C = b(C)) in z ? Object.defineProperty(z, C, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : z[C] = x, z;
  }
  function b(z) {
    var C = k(z, "string");
    return typeof C == "symbol" ? C : C + "";
  }
  function k(z, C) {
    if (typeof z != "object" || !z) return z;
    var x = z[Symbol.toPrimitive];
    if (x !== void 0) {
      var m = x.call(z, C);
      if (typeof m != "object") return m;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(z);
  }
  const I = "react-grid-layout";
  function T(z) {
    var C;
    return C = class extends c.Component {
      constructor() {
        super(...arguments), S(this, "state", {
          width: 1280
        }), S(this, "elementRef", /* @__PURE__ */ c.createRef()), S(this, "mounted", !1), S(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new i.default((w) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const v = w[0].contentRect.width;
            this.setState({
              width: v
            });
          }
        });
        const m = this.elementRef.current;
        m instanceof HTMLElement && this.resizeObserver.observe(m);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const m = this.elementRef.current;
        m instanceof HTMLElement && this.resizeObserver.unobserve(m), this.resizeObserver.disconnect();
      }
      render() {
        const m = this.props, {
          measureBeforeMount: w
        } = m, h = g(m, s);
        return w && !this.mounted ? /* @__PURE__ */ c.createElement("div", {
          className: (0, a.default)(this.props.className, I),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ c.createElement(z, f({
          innerRef: this.elementRef
        }, h, this.state));
      }
    }, S(C, "defaultProps", {
      measureBeforeMount: !1
    }), S(C, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: r.default.bool
    }), C;
  }
  return To;
}
var fu;
function Mg() {
  return fu || (fu = 1, function(c) {
    c.exports = Wu().default, c.exports.utils = wn(), c.exports.calculateUtils = Qs(), c.exports.Responsive = mg().default, c.exports.Responsive.utils = Uu(), c.exports.WidthProvider = Dg().default;
  }(Ts)), Ts.exports;
}
var gu = Mg();
const $g = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, Ar = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, Qu = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, Fe = (c, r, i, a, s) => ({ i: c, x: r, y: i, w: a, h: s, minW: 1, minH: 1, maxW: 12, maxH: 12 }), Bo = { lg: [Fe("activity-history", 0, 0, 6, 4), Fe("automations", 6, 0, 6, 4), Fe("backup-restore", 0, 4, 6, 4), Fe("access-control", 6, 4, 6, 4), Fe("alarm-configuration", 0, 8, 12, 5), Fe("security-status", 0, 13, 12, 2)], md: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 4, 0, 4, 4), Fe("backup-restore", 0, 4, 4, 4), Fe("access-control", 4, 4, 4, 4), Fe("alarm-configuration", 0, 8, 8, 5), Fe("security-status", 0, 13, 8, 2)], sm: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 0, 4, 4, 4), Fe("backup-restore", 0, 8, 4, 4), Fe("access-control", 0, 12, 4, 4), Fe("alarm-configuration", 0, 16, 4, 5), Fe("security-status", 0, 21, 4, 2)], xs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 4), Fe("alarm-configuration", 0, 16, 2, 5), Fe("security-status", 0, 21, 2, 2)], xxs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 4), Fe("alarm-configuration", 0, 16, 2, 5), Fe("security-status", 0, 21, 2, 2)] };
function Hg(c, r, i) {
  return Object.entries(Qu).map(([a, s]) => ({ size: a, distance: Math.abs(Math.min(s.w, i) - c) + Math.abs(s.h - r) })).sort((a, s) => a.distance - s.distance)[0]?.size ?? "S";
}
function Bg(c, r) {
  const i = Qu[c];
  return { w: Math.min(i.w, r), h: i.h };
}
function Ys(c, r) {
  return c.some((i) => i.i !== r.i && r.x < i.x + i.w && r.x + r.w > i.x && r.y < i.y + i.h && r.y + r.h > i.y);
}
function jg(c, r, i) {
  for (let a = 0; a < 240; a++) for (let s = 0; s <= i - r.w; s++) {
    const d = { ...r, x: s, y: a };
    if (!Ys(c, d)) return d;
  }
  return { ...r, x: 0, y: Math.max(0, ...c.map((a) => a.y + a.h)) };
}
function vn(c) {
  const r = {};
  return Object.keys(Ar).forEach((i) => {
    const a = Ar[i], s = Array.isArray(c?.[i]) ? c[i] : [], d = new Map(s.map((_) => [_.i, _])), u = (Bo[i] || []).map((_) => {
      const S = d.get(_.i);
      if (!S) return { ..._ };
      const b = Math.min(Math.max(1, S.w), a);
      return { ..._, ...S, w: b, x: Math.max(0, Math.min(S.x, a - b)), y: Math.max(0, S.y) };
    }), f = new Set(u.map((_) => _.i)), g = s.filter((_) => !f.has(_.i)).map((_) => ({ ..._, w: Math.min(Math.max(1, _.w), a), x: Math.max(0, Math.min(_.x, a - Math.min(_.w, a))), y: Math.max(0, _.y) }));
    r[i] = [...u, ...g];
  }), r;
}
class Fg {
  key(r, i) {
    return `argus:dashboard-layout:${r}:${i}`;
  }
  read(r, i) {
    try {
      const a = JSON.parse(localStorage.getItem(this.key(r, i)) || "null");
      return a?.layoutVersion != null && a.layoutVersion >= 1 ? a : null;
    } catch {
      return null;
    }
  }
  write(r, i, a) {
    localStorage.setItem(this.key(r, i), JSON.stringify(a));
  }
  async load(r, i) {
    const a = this.read(r, i);
    return a ? vn(a.layouts) : null;
  }
  async save(r, i, a) {
    const s = this.read(r, i);
    this.write(r, i, { layoutVersion: 1, layouts: a, visibility: s?.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(r, i) {
    return this.read(r, i)?.visibility ?? null;
  }
  async saveVisibility(r, i, a) {
    const s = this.read(r, i);
    this.write(r, i, { layoutVersion: 1, layouts: s?.layouts ?? vn(null), visibility: a, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(r, i) {
    localStorage.removeItem(this.key(r, i));
  }
}
const qg = gu.WidthProvider(gu.Responsive);
function Wg({ widget: c, node: r, editing: i, size: a, onSize: s, onHide: d, onReset: u }) {
  const f = qe.useRef(null);
  qe.useLayoutEffect(() => {
    f.current?.appendChild(r), r.draggable = !1, r.querySelector(":scope > .panel-edit-overlay")?.remove(), i ? r.setAttribute("inert", "") : r.removeAttribute("inert");
  }, [r, i]);
  const g = (_, S) => {
    if (typeof window._argusT == "function") {
      const b = window._argusT(_);
      if (b && b !== _) return b;
    }
    return S;
  };
  return /* @__PURE__ */ he.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ he.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ he.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `${g("drag", "Mover")} ${c.title}`, title: g("drag", "Arrastrar para mover"), children: "⋮⋮" }),
      /* @__PURE__ */ he.jsx("strong", { children: c.title }),
      /* @__PURE__ */ he.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ he.jsx("summary", { "aria-label": `${g("settings", "Opciones")} ${c.title}`, title: g("settings", "Opciones"), children: "•••" }),
        /* @__PURE__ */ he.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ he.jsx("span", { children: g("size", "Tamaño") }),
          /* @__PURE__ */ he.jsx("div", { children: ["S", "M", "L", "XL"].map((_) => /* @__PURE__ */ he.jsx("button", { type: "button", className: _ === a ? "active" : "", onClick: () => s(_), children: _ }, _)) }),
          /* @__PURE__ */ he.jsx("button", { type: "button", onClick: u, children: g("reset_widget", "Restablecer widget") }),
          /* @__PURE__ */ he.jsx("button", { type: "button", onClick: d, children: g("hide_widget", "Ocultar widget") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ he.jsx("div", { className: `argus-widget__content${c.kind === "access-control" ? " argus-widget__content--access" : ""}`, ref: f })
  ] });
}
function mu({ widgets: c, nodes: r, storage: i, userId: a, dashboardId: s, onEditing: d, registerEditor: u }) {
  const f = qe.useMemo(() => Object.fromEntries(c.map((W) => [W.id, W.visible])), [c]), [g, _] = qe.useState(Bo), [S, b] = qe.useState(f), [k, I] = qe.useState(!1), [T, z] = qe.useState(!1), [C, x] = qe.useState("lg"), [m, w] = qe.useState(""), [, h] = qe.useState(0), [v, E] = qe.useState(0), R = qe.useRef(Bo), $ = qe.useRef(void 0), V = qe.useRef(!1), Y = qe.useRef(null), F = (W, L) => {
    if (typeof window._argusT == "function") {
      const H = window._argusT(W);
      if (H && H !== W) return H;
    }
    return L;
  };
  qe.useEffect(() => {
    const W = () => h((L) => L + 1);
    return window.addEventListener("argus-lang-changed", W), () => window.removeEventListener("argus-lang-changed", W);
  }, []), qe.useEffect(() => {
    u(I);
  }, [u]), qe.useEffect(() => {
    let W = !0;
    return z(!1), Promise.all([i.load(a, s), i.loadVisibility?.(a, s)]).then(([L, H]) => {
      if (!W) return;
      const ge = vn(L);
      _(ge), R.current = ge, H && b({ ...f, ...H }), z(!0);
    }), () => {
      W = !1;
    };
  }, [i, a, s, f]), qe.useEffect(() => {
    d(k), T && V.current && !k && i.save(a, s, R.current), V.current = k;
  }, [k, T, d, i, a, s]), qe.useEffect(() => {
    const W = (L) => {
      k && (L.key === "Escape" ? (I(!1), w(F("edit_dashboard_done", "Edición finalizada"))) : L.key === "Enter" && L.target === document.body && I(!1));
    };
    return window.addEventListener("keydown", W), () => window.removeEventListener("keydown", W);
  }, [k]), qe.useEffect(() => {
    if (typeof ResizeObserver > "u" || !Y.current) return;
    let W = 0;
    const L = new ResizeObserver(() => {
      cancelAnimationFrame(W), W = requestAnimationFrame(() => {
        try {
          window.dispatchEvent(new Event("resize"));
        } catch {
        }
      });
    });
    return L.observe(Y.current), () => {
      cancelAnimationFrame(W), L.disconnect();
    };
  }, []), qe.useEffect(() => () => clearTimeout($.current), []);
  const Q = (W, L = !1) => {
    _(W), R.current = W, clearTimeout($.current), $.current = window.setTimeout(() => i.save(a, s, W), L ? 0 : 550);
  }, ee = (W, L) => {
    const H = { ...S, [W]: L };
    b(H), i.saveVisibility?.(a, s, H), w(L ? F("widget_visible", "Widget visible") : F("hide_widget", "Widget oculto"));
  }, se = (W, L, H) => {
    const ge = R.current, ye = ge[C] || [], Ce = ye.filter((te) => te.i !== W), Ae = Ys(Ce, L) ? jg(Ce, L, Ar[C]) : L, Te = { ...ge, [C]: ye.map((te) => te.i === W ? Ae : te) };
    Q(Te, !0), w(H);
  }, le = (W, L) => {
    const H = (R.current[C] || []).find((ye) => ye.i === W);
    if (!H) return;
    const ge = Bg(L, Ar[C]);
    se(W, { ...H, ...ge, x: Math.max(0, Math.min(H.x, Ar[C] - ge.w)) }, `${F("size", "Tamaño")} ${L}`);
  }, ne = (W) => {
    const L = (Bo[C] || []).find((H) => H.i === W);
    L && se(W, { ...L }, F("reset_widget", "Widget restablecido"));
  }, ue = (W, L, H) => {
    const ge = Ar[C], ye = Math.min(ge, Math.max(1, H.w)), Ce = Math.max(1, H.h), Ae = { ...H, w: ye, h: Ce, x: Math.max(0, Math.min(H.x, ge - ye)) };
    se(H.i, Ae, `${F("size", "Tamaño")}: ${ye}x${Ce}`);
  }, Z = async () => {
    try {
      localStorage.removeItem(`argus:dashboard-layout:${a}:${s}`);
    } catch {
    }
    await i.reset(a, s);
    const W = vn(null);
    b(f), _(W), R.current = W, E((L) => L + 1), Q(W, !0), w(F("reset_dashboard_done", "Diseño predeterminado restaurado"));
  }, de = g[C] || [];
  return T ? /* @__PURE__ */ he.jsxs("section", { className: `argus-dashboard ${k ? "argus-dashboard--editing" : ""}`, ref: Y, children: [
    /* @__PURE__ */ he.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": F("edit_dashboard", "Edición del tablero"), children: [
      /* @__PURE__ */ he.jsx("button", { type: "button", onClick: () => I((W) => !W), children: k ? "✓ " + F("edit_dashboard_done", "Listo") : "❖ " + F("edit_dashboard", "Editar tablero") }),
      k && /* @__PURE__ */ he.jsxs(he.Fragment, { children: [
        /* @__PURE__ */ he.jsx("button", { type: "button", onClick: Z, children: F("reset_dashboard", "Restablecer diseño") }),
        /* @__PURE__ */ he.jsx("div", { className: "argus-dashboard__visibility", "aria-label": F("hide_widget", "Widgets ocultos"), children: c.filter((W) => S[W.id] === !1).map((W) => /* @__PURE__ */ he.jsxs("button", { type: "button", onClick: () => ee(W.id, !0), children: [
          "Mostrar ",
          W.title
        ] }, W.id)) })
      ] })
    ] }),
    /* @__PURE__ */ he.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: k ? m : "" }),
    /* @__PURE__ */ he.jsx(Wd, { children: /* @__PURE__ */ he.jsx(qg, { className: "argus-dashboard-grid", layouts: g, breakpoints: $g, cols: Ar, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: "vertical", preventCollision: !1, allowOverlap: !1, isBounded: !0, isDraggable: k, isResizable: k, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (W) => x(W), onLayoutChange: (W, L) => {
      k && (_(L), R.current = L);
    }, onResizeStop: ue, onDragStop: (W, L, H) => {
      const ge = (R.current[C] || []).filter((ye) => ye.i !== H.i);
      if (Ys(ge, H)) {
        _({ ...R.current }), w(F("position_collision", "Posición bloqueada por colisión"));
        return;
      }
      se(H.i, H, F("position_saved", "Posición guardada"));
    }, useCSSTransforms: !0, children: c.filter((W) => S[W.id] !== !1 && r.has(W.id)).map((W) => {
      const L = de.find((ge) => ge.i === W.id), H = L ? Hg(L.w, L.h, Ar[C]) : W.size;
      return /* @__PURE__ */ he.jsx("div", { children: /* @__PURE__ */ he.jsx(Wd, { children: /* @__PURE__ */ he.jsx(Wg, { widget: W, node: r.get(W.id), editing: k, size: H, onSize: (ge) => le(W.id, ge), onHide: () => ee(W.id, !1), onReset: () => ne(W.id) }) }) }, W.id);
    }) }, v) })
  ] }) : /* @__PURE__ */ he.jsx("section", { className: "argus-dashboard", ref: Y, children: /* @__PURE__ */ he.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: F("loading_dashboard", "Cargando tablero…") }) });
}
const Ug = '.entry{position:relative;overflow:hidden;container-type:inline-size;container-name:argus-console;border-radius:28px!important;border:1px solid rgba(255,255,255,.22)!important;background:linear-gradient(135deg,#ffffff1f,#ffffff08)!important;backdrop-filter:blur(40px) saturate(190%) brightness(1.12)!important;-webkit-backdrop-filter:blur(40px) saturate(190%) brightness(1.12)!important;box-shadow:inset 0 1.5px #ffffff73,inset 0 -1px #ffffff1a,0 24px 64px #00000073,0 4px 16px #00000040!important;transition:transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease!important}.security-console,.entry-content,.entry-content.security-console{background:transparent!important;background-color:transparent!important;border:none!important;box-shadow:none!important}.security-console .console-hud{background:transparent!important;border:none!important;box-shadow:none!important}.console-hud-loc{display:inline-flex!important;align-items:center!important;height:38px!important;box-sizing:border-box!important;padding:0 16px!important;max-width:clamp(140px,26vw,260px)!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;border-radius:999px!important;background:linear-gradient(135deg,#fff3,#ffffff0d)!important;border:1px solid rgba(255,255,255,.28)!important;box-shadow:inset 0 1.5px #ffffff73,inset 0 -1px #0003,0 8px 24px #00000059!important;backdrop-filter:blur(24px) saturate(190%)!important;-webkit-backdrop-filter:blur(24px) saturate(190%)!important;font-size:11.5px!important;font-weight:850!important;letter-spacing:.04em!important;color:#fff!important;text-shadow:0 1px 3px rgba(0,0,0,.5)!important;transform:translateZ(0)!important}.argus-connection-pill{display:inline-flex!important;align-items:center!important;gap:8px!important;height:38px!important;padding:0 16px!important;border-radius:999px!important;background:linear-gradient(135deg,#ffffff29,#ffffff0a)!important;border:1px solid rgba(255,255,255,.24)!important;box-shadow:inset 0 1.5px #ffffff61,inset 0 -1px #00000026,0 8px 24px #00000059!important;backdrop-filter:blur(24px) saturate(190%)!important;-webkit-backdrop-filter:blur(24px) saturate(190%)!important;font-size:11px!important;font-weight:850!important;letter-spacing:.05em!important;color:#fff!important;text-shadow:0 1px 3px rgba(0,0,0,.5)!important;max-width:max-content!important;white-space:nowrap!important;transform:translateZ(0)!important}.argus-connection-dot{width:8px!important;height:8px!important;border-radius:50%!important;background:#10b981!important;box-shadow:0 0 12px #10b981!important}.argus-connection-pill[data-online=false] .argus-connection-dot{background:#ef4444!important;box-shadow:0 0 12px #ef4444!important}.console-hud-right{display:inline-flex!important;align-items:center!important;justify-content:flex-end!important;gap:8px!important;min-width:0!important;background:transparent!important;border:0!important;box-shadow:none!important;height:38px!important}.console-system-badge{display:inline-flex!important;align-items:center!important;height:38px!important;box-sizing:border-box!important;padding:0 18px!important;border-radius:999px!important;font-size:11px!important;font-weight:900!important;letter-spacing:.05em!important;text-transform:uppercase!important;white-space:nowrap!important;backdrop-filter:blur(24px) saturate(190%)!important;-webkit-backdrop-filter:blur(24px) saturate(190%)!important;transform:translateZ(0)!important}.console-system-badge--disarmed{color:#34d399!important;background:linear-gradient(135deg,#10b98152,#0596691f)!important;border:1.5px solid rgba(16,185,129,.65)!important;box-shadow:inset 0 1.5px #ffffff80,0 0 24px #10b98166,0 8px 24px #00000059!important;text-shadow:0 0 10px rgba(16,185,129,.7)!important}.console-system-badge--armed_home,.console-system-badge--armed_away,.console-system-badge--armed_night,.console-system-badge--pending{color:#fbbf24!important;background:linear-gradient(135deg,#f59e0b59,#d9770624)!important;border:1.5px solid rgba(245,158,11,.7)!important;box-shadow:inset 0 1.5px #ffffff8c,0 0 24px #f59e0b73,0 8px 24px #00000059!important;text-shadow:0 0 10px rgba(245,158,11,.8)!important}.console-system-badge--triggered{color:#f87171!important;background:linear-gradient(135deg,#ef44446b,#b91c1c29)!important;border:1.5px solid rgba(239,68,68,.85)!important;box-shadow:inset 0 1.5px #fff9,0 0 32px #ef444499,0 8px 24px #00000059!important;text-shadow:0 0 12px rgba(239,68,68,.85)!important;animation:argusTriggerBadgePulse .9s ease-in-out infinite!important}@keyframes argusTriggerBadgePulse{0%,to{opacity:.85;transform:scaleZ(1)}50%{opacity:1;transform:scale3d(1.04,1.04,1)}}.security-console .entry-icon{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;will-change:transform;animation:float-icon 5s ease-in-out infinite;transform:translateZ(0);background:transparent!important;border:none!important;box-shadow:none!important}.security-console .entry-icon svg{width:100%!important;max-width:220px!important;height:auto!important;filter:drop-shadow(0 14px 28px rgba(0,0,0,.6)) drop-shadow(0 0 45px rgba(16,185,129,.55))!important}@keyframes float-icon{0%,to{transform:translateZ(0) scaleZ(1)}50%{transform:translate3d(0,-6px,0) scale3d(1.015,1.015,1)}}.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}.argus-shield-status{display:block;margin:7px auto 0;padding:5px 14px;width:max-content;max-width:200px;border:1px solid rgba(255,184,57,.55);border-radius:999px;background:#ff950033;box-shadow:inset 0 1px #fff6,0 6px 18px #0000004d;color:#ffd27a;font-size:9.5px;font-weight:850;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}@keyframes argusArmingShield{0%,to{opacity:.55;transform:scale3d(.94,.94,1)}50%{opacity:1;transform:scale3d(1.07,1.07,1)}}@keyframes argusArmingLabel{0%,to{opacity:.62}50%{opacity:1}}.security-console .liquid-stack{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;width:100%!important;background:transparent!important;border:none!important;box-shadow:none!important}.security-console .liquid-btn{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:5px!important;padding:12px 6px!important;min-height:68px!important;border-radius:20px!important;font-size:11.5px!important;font-weight:850!important;letter-spacing:.03em!important;line-height:1.15!important;background:linear-gradient(135deg,#ffffff2e,#ffffff0d)!important;border:1px solid rgba(255,255,255,.25)!important;box-shadow:inset 0 1.5px #ffffff6b,inset 0 -1px #0003,0 10px 28px #00000059!important;backdrop-filter:blur(24px) saturate(190%)!important;-webkit-backdrop-filter:blur(24px) saturate(190%)!important;color:#fff!important;text-shadow:0 1px 3px rgba(0,0,0,.5)!important;cursor:pointer!important;transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease,background .25s ease,border-color .25s ease!important;transform:translateZ(0)!important}.security-console .liquid-btn:hover{transform:translateY(-3px) translateZ(0) scale(1.025)!important;background:linear-gradient(135deg,#ffffff3d,#ffffff14)!important;border-color:#fff6!important;box-shadow:inset 0 1.5px #ffffff8c,0 14px 34px #00000073!important}.security-console .liquid-btn span:first-child,.security-console .liquid-btn .mode-btn-icon{font-size:20px!important;line-height:1!important;filter:drop-shadow(0 2px 6px rgba(0,0,0,.4))!important}.security-console .liquid-btn span:last-child{font-size:11px!important;font-weight:850!important;color:#fff!important}.security-console .btn-home.active{background:linear-gradient(135deg,#fb8c00,#d97706)!important;border:1px solid rgba(254,215,170,.85)!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #fb8c0099!important}.security-console .btn-away.active{background:linear-gradient(135deg,#e53935,#b91c1c)!important;border:1px solid rgba(254,202,202,.85)!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #e5393599!important}.security-console .btn-night.active{background:linear-gradient(135deg,#1e88e5,#1d4ed8)!important;border:1px solid rgba(191,219,254,.85)!important;box-shadow:inset 0 1.5px #fff9,0 12px 32px #1e88e599!important}.security-console .console-sensors{display:grid!important;grid-template-columns:1fr;gap:8px;max-height:none!important;overflow:visible!important;padding:0!important;margin:0!important;scrollbar-width:none;background:transparent!important;background-color:transparent!important;border:none!important;outline:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;filter:none!important;isolation:auto!important;contain:none!important}.security-console .console-sensors::-webkit-scrollbar{display:none}.security-console .console-sensors.console-sensors--compact,.security-console .console-sensors[data-count="3"],.security-console .console-sensors[data-count="4"],.security-console .console-sensors[data-count="5"],.security-console .console-sensors[data-count="6"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important}.security-console .console-sensors.console-sensors--micro,.security-console .console-sensors[data-count="7"],.security-console .console-sensors[data-count="8"],.security-console .console-sensors[data-count="9"],.security-console .console-sensors[data-count="10"],.security-console .console-sensors[data-count="11"],.security-console .console-sensors[data-count="12"]{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:4px!important;max-height:280px!important;overflow-y:auto!important;scrollbar-width:thin}.console-sensor{display:grid!important;grid-template-columns:auto minmax(0,1fr) auto!important;align-items:center!important;gap:10px!important;padding:10px 16px!important;border-radius:999px!important;background:linear-gradient(135deg,#ffffff29,#ffffff0a)!important;border:1px solid rgba(255,255,255,.24)!important;box-shadow:inset 0 1.5px #ffffff61,inset 0 -1px #00000026,0 4px 12px #00000040!important;color:#fff!important;text-shadow:0 1px 3px rgba(0,0,0,.5)!important;min-height:44px!important;box-sizing:border-box!important;transition:transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease,border-color .2s ease!important}.console-sensor:hover{transform:translateY(-2px) scale(1.02)!important;box-shadow:inset 0 1.5px #ffffff80,0 8px 18px #00000059!important}.console-sensor.open{background:linear-gradient(135deg,#ef444459,#b91c1c29)!important;border-color:#ef4444a6!important;box-shadow:inset 0 1.5px #ffffff73,0 0 16px #ef444459,0 4px 12px #00000040!important}.console-sensor-icon{font-size:18px!important;display:flex!important;align-items:center!important;justify-content:center!important;filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))!important}.console-sensor-name{font-size:11.5px!important;font-weight:850!important;letter-spacing:.02em!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;color:#fff!important}.console-sensor-state{font-size:10.5px!important;font-weight:900!important;letter-spacing:.05em!important;text-transform:uppercase!important;display:inline-flex!important;align-items:center!important;gap:4px!important;white-space:nowrap!important}.console-empty{padding:24px!important;text-align:center!important;border:1px dashed rgba(255,255,255,.25)!important;border-radius:20px!important;color:#ffffffa6!important;font-size:12px!important;font-weight:800!important}@media (min-width: 901px){.entry:not(.ios-fullscreen) .security-console{display:grid!important;grid-template-columns:minmax(200px,350px) 1fr minmax(220px,380px)!important;grid-template-rows:auto 1fr!important;align-items:center!important;justify-content:center!important;gap:16px 36px!important;padding:24px 28px 20px!important;background:transparent!important;box-shadow:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:contents!important}.entry:not(.ios-fullscreen) .security-console .console-hud-loc{grid-column:1!important;grid-row:1!important;justify-self:start!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .argus-connection-pill{grid-column:2!important;grid-row:1!important;justify-self:center!important;align-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud-right{grid-column:3!important;grid-row:1!important;justify-self:end!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-column:1!important;grid-row:2!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-column:2!important;grid-row:2!important;justify-self:center!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-column:3!important;grid-row:2!important;align-self:center!important;margin:0!important}}@container argus-console (min-width: 540px){.entry:not(.ios-fullscreen) .security-console{display:grid!important;grid-template-columns:minmax(170px,1fr) minmax(140px,200px) minmax(180px,1.2fr)!important;grid-template-rows:auto 1fr!important;align-items:center!important;justify-content:center!important;gap:14px 20px!important;padding:20px 24px 18px!important;background:transparent!important;box-shadow:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:contents!important}.entry:not(.ios-fullscreen) .security-console .console-hud-loc{grid-column:1!important;grid-row:1!important;justify-self:start!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .argus-connection-pill{grid-column:2!important;grid-row:1!important;justify-self:center!important;align-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud-right{grid-column:3!important;grid-row:1!important;justify-self:end!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{grid-column:1!important;grid-row:2!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .entry-icon{grid-column:2!important;grid-row:2!important;justify-self:center!important;align-self:center!important;margin:0!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{grid-column:3!important;grid-row:2!important;align-self:center!important;margin:0!important}}@media (max-width: 539px){.entry:not(.ios-fullscreen) .security-console{display:flex!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;width:100%!important;box-sizing:border-box!important;background:transparent!important;box-shadow:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:flex!important;flex-direction:row!important;flex-wrap:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;width:100%!important;background:transparent!important;box-shadow:none!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{width:100%!important;max-width:440px!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:440px!important}}@container argus-console (max-width: 539px){.entry:not(.ios-fullscreen) .security-console{display:flex!important;flex-direction:column!important;align-items:center!important;gap:14px!important;padding:18px 14px!important;width:100%!important;box-sizing:border-box!important;background:transparent!important;box-shadow:none!important}.entry:not(.ios-fullscreen) .security-console .console-hud{display:flex!important;flex-direction:row!important;flex-wrap:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;width:100%!important;background:transparent!important;box-shadow:none!important}.entry:not(.ios-fullscreen) .security-console .liquid-stack{width:100%!important;max-width:440px!important}.entry:not(.ios-fullscreen) .security-console .console-sensors{width:100%!important;max-width:440px!important}}.entry.ios-fullscreen{position:relative!important;display:flex!important;flex-direction:column!important;width:100%!important;width:100vw!important;width:100dvw!important;height:100%!important;min-height:100vh!important;min-height:100dvh!important;box-sizing:border-box!important;background:transparent!important;border:none!important;border-radius:0!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;overflow:visible!important;padding:0!important;margin:0!important}.entry.ios-fullscreen .entry-exit-fs{position:fixed!important;top:max(16px,env(safe-area-inset-top))!important;left:max(16px,env(safe-area-inset-left))!important;z-index:100000!important;padding:10px 16px!important;font-size:20px!important;font-weight:900!important;background:#000000a6!important;backdrop-filter:blur(20px)!important;-webkit-backdrop-filter:blur(20px)!important;border-radius:16px!important;color:#fff!important;border:1px solid rgba(255,255,255,.3)!important;box-shadow:inset 0 1px #fff6,0 8px 24px #00000080!important;cursor:pointer!important}@media (max-width: 900px),(orientation: portrait){.entry.ios-fullscreen .security-console{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;padding:max(64px,calc(env(safe-area-inset-top) + 48px)) 16px max(32px,env(safe-area-inset-bottom))!important;gap:16px!important;width:100%!important;max-width:480px!important;margin:0 auto!important;box-sizing:border-box!important;min-height:100%!important;background:transparent!important;box-shadow:none!important}.entry.ios-fullscreen .security-console .console-hud{display:flex!important;flex-direction:row!important;flex-wrap:wrap!important;justify-content:center!important;align-items:center!important;gap:8px!important;width:100%!important;background:transparent!important;box-shadow:none!important}.entry.ios-fullscreen .security-console .entry-icon{display:flex!important;margin:6px auto!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(50vw,220px)!important}.entry.ios-fullscreen .security-console .liquid-stack{width:100%!important;max-width:440px!important}.entry.ios-fullscreen .security-console .console-sensors{width:100%!important;max-width:440px!important;max-height:300px!important;background:transparent!important;box-shadow:none!important}}@media (min-width: 901px) and (orientation: landscape),(min-width: 901px),(orientation: landscape) and (max-height: 600px){.entry.ios-fullscreen .security-console{display:grid!important;grid-template-columns:minmax(280px,380px) 1fr minmax(280px,440px)!important;grid-template-rows:auto 1fr!important;align-items:center!important;justify-content:center!important;gap:20px 48px!important;padding:max(56px,env(safe-area-inset-top)) max(48px,env(safe-area-inset-right)) max(32px,env(safe-area-inset-bottom)) max(48px,env(safe-area-inset-left))!important;width:100%!important;max-width:1600px!important;margin:0 auto!important;height:100%!important;min-height:100vh!important;min-height:100dvh!important;box-sizing:border-box!important;background:transparent!important;box-shadow:none!important}.entry.ios-fullscreen .security-console .console-hud{display:contents!important}.entry.ios-fullscreen .security-console .console-hud-loc{grid-column:1!important;grid-row:1!important;justify-self:start!important;align-self:center!important;margin:0!important}.entry.ios-fullscreen .security-console .argus-connection-pill{grid-column:2!important;grid-row:1!important;justify-self:center!important;align-self:center!important;margin:0!important;position:static!important;transform:none!important}.entry.ios-fullscreen .security-console .console-hud-right{grid-column:3!important;grid-row:1!important;justify-self:end!important;align-self:center!important;margin:0!important}.entry.ios-fullscreen .security-console .liquid-stack{grid-column:1!important;grid-row:2!important;width:100%!important;align-self:center!important}.entry.ios-fullscreen .security-console .entry-icon{grid-column:2!important;grid-row:2!important;justify-self:center!important;align-self:center!important}.entry.ios-fullscreen .security-console .entry-icon svg{max-width:min(35vw,360px)!important}.entry.ios-fullscreen .security-console .console-sensors{grid-column:3!important;grid-row:2!important;width:100%!important;max-height:520px!important;align-self:center!important;background:transparent!important;box-shadow:none!important}}';
function Vg({ id: c, name: r, isOpen: i, isBlocking: a, isBypassed: s, battery: d, iconHtml: u, statusLabelOpen: f, statusLabelClosed: g, bypassedLabel: _ }) {
  let S = null;
  if (d !== null) {
    const x = d === 0, m = d <= 10 && !x, w = x ? "🔋 ❌" : `🔋 ${d}%`;
    (x || m) && (S = /* @__PURE__ */ he.jsx("span", { style: {
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
    }, children: w }));
  }
  const b = s ? "#a1a1aa" : a ? "#ffd700" : i ? "#ff968b" : "#75f4b0", k = s ? "none" : a ? "pulse 1s infinite" : i ? "pulse 2s infinite" : "none", I = s ? "#a1a1aa" : a ? "#ffd700" : i ? "#ff968b" : "#75f4b0", T = s ? 0.6 : 1, z = i ? f : g, C = s ? `${_ || "OMITIDO"} · ${z}` : z;
  return /* @__PURE__ */ he.jsxs("div", { className: `console-sensor ${i && !s ? "open" : ""}`, style: { opacity: T }, children: [
    /* @__PURE__ */ he.jsx("span", { className: "console-sensor-icon", style: { display: "flex", alignItems: "center", justifyContent: "center", color: b, animation: k }, dangerouslySetInnerHTML: { __html: u } }),
    /* @__PURE__ */ he.jsx("span", { className: "console-sensor-name", style: { color: a && !s ? "#ffd700" : "" }, children: r }),
    /* @__PURE__ */ he.jsxs("span", { className: "console-sensor-state", style: { color: I }, children: [
      C,
      S
    ] })
  ] });
}
function Gg({ panel: c, isFullscreen: r, onToggleFullscreen: i, onUnlockKiosk: a }) {
  const [s, d] = qe.useState(0);
  qe.useEffect(() => {
    const F = () => d((Q) => Q + 1);
    return c.addEventListener("argus-state-update", F), window.addEventListener("argus-state-update", F), () => {
      c.removeEventListener("argus-state-update", F), window.removeEventListener("argus-state-update", F);
    };
  }, [c]);
  const u = c._dashboard, f = c._hass;
  let g = u?.entries?.[0];
  if (!g) {
    const F = c._cardConfig?.entity || c._config?.entity || Object.keys(f?.states || {}).find((Q) => Q.startsWith("alarm_control_panel.")) || "alarm_control_panel.argus";
    if (!f?.states?.[F]) return null;
    g = { entity_id: F };
  }
  const _ = 0, S = c._renderEntryBackground?.(c._weatherState, c._isNight) || "", b = g.entity_id && f?.states[g.entity_id] ? f.states[g.entity_id].state : "unknown", k = (F) => c._t?.(F) || F, I = c._homeName || c._ui?.home_name || k("home_fallback") || "Hogar", T = b === "triggered", z = c._hass ? c._hass.connected !== !1 : !1, C = !!f?.states?.[g.entity_id]?.attributes?.arming_waiting_for_sensors, x = b === "pending" || C, m = () => {
    if (T) return k("system_triggered") || "ALARMA ACTIVADA";
    if (C) {
      const F = f?.states?.[g.entity_id]?.attributes?.arming_blocking_sensors || [];
      return F.length ? (k("waiting_sensors_count") || "ESPERANDO {count} SENSOR(ES)").replace("{count}", String(F.length)) : k("waiting_sensors") || "ESPERANDO SENSORES";
    }
    return b === "disarmed" ? k("system_disarmed") || "SISTEMA DESARMADO" : b === "armed_home" ? (k("system_armed") || "ARMADO") + " · " + (k("mode_home") || "CASA") : b === "armed_away" ? (k("system_armed") || "ARMADO") + " · " + (k("mode_away") || "AUSENTE") : b === "armed_night" ? (k("system_armed") || "ARMADO") + " · " + (k("mode_night") || "NOCHE") : k("system_armed") || "ARMADO";
  }, w = () => c._getIntelligentSVG?.(C ? "pending" : b, null, c._isNight, T, _) || "", h = [], v = f?.states?.[g.entity_id]?.attributes?.arming_blocking_sensors || [];
  if (g.entity_id) {
    const F = c._ui?.modes?.__by_entity__?.[g.entity_id] || c._ui?.modes || {};
    let Q = F[b.replace("armed_", "")] || {};
    T && (Q = ["away", "home", "night"].map((le) => F[le]).find((le) => (le?.sensors || []).some((ne) => ["on", "open", "unlocked", "recording", "active", "motion"].includes(f?.states?.[ne]?.state))) || {});
    let ee = Q.sensors || [];
    if (b === "disarmed" || x || !ee.length) {
      const le = /* @__PURE__ */ new Set();
      ["away", "home", "night"].forEach((ne) => {
        F[ne]?.sensors && F[ne].sensors.forEach((ue) => le.add(ue));
      }), Array.isArray(c._sensors) && c._sensors.forEach((ne) => le.add(typeof ne == "string" ? ne : ne.entity_id || ne.id)), le.size === 0 && f?.states && Object.keys(f.states).forEach((ne) => {
        ne.startsWith("binary_sensor.") && (ne.includes("door") || ne.includes("window") || ne.includes("motion") || ne.includes("puerta") || ne.includes("porton") || ne.includes("patio") || ne.includes("sensor") || ne.includes("seguridad")) && le.add(ne);
      }), ee = Array.from(le);
    }
    const se = Q.bypassed_sensors || [];
    ee.forEach((le) => {
      h.push({ id: le, isBypassed: se.includes(le) });
    });
  }
  const E = [...h].sort((F, Q) => {
    const ee = C && v.includes(F.id), se = C && v.includes(Q.id);
    if (ee && !se) return -1;
    if (!ee && se) return 1;
    const le = c.isSensorActive ? c.isSensorActive(f?.states[F.id]) : f?.states[F.id]?.state === "on", ne = c.isSensorActive ? c.isSensorActive(f?.states[Q.id]) : f?.states[Q.id]?.state === "on";
    return le && !ne ? -1 : !le && ne ? 1 : 0;
  }), R = E.length, $ = R >= 7 ? "console-sensors--micro" : R >= 3 ? "console-sensors--compact" : "", V = h.map((F) => F.id), Y = c._renderBatteryAlerts?.(V) || "";
  return /* @__PURE__ */ he.jsxs(he.Fragment, { children: [
    /* @__PURE__ */ he.jsx("style", { dangerouslySetInnerHTML: { __html: Ug } }),
    /* @__PURE__ */ he.jsxs("div", { className: `entry ${r ? "ios-fullscreen" : ""} ${C ? "argus-waiting" : ""}`, style: { position: "relative", width: "100%", height: "100%" }, children: [
      /* @__PURE__ */ he.jsx("div", { dangerouslySetInnerHTML: { __html: S } }),
      c._kioskLocked && !r && /* @__PURE__ */ he.jsxs("button", { className: "btn-unlock-kiosk", onClick: a, style: { position: "absolute", top: "16px", right: "16px", zIndex: 99, padding: "8px 14px", background: "rgba(220,38,38,0.85)", color: "white", border: "none", borderRadius: "10px", fontWeight: 600, fontSize: "13px", cursor: "pointer", backdropFilter: "blur(8px)", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }, children: [
        "🔓 ",
        k("unlock_kiosk") || "Desbloquear kiosco"
      ] }),
      r ? /* @__PURE__ */ he.jsx("button", { className: "ghost entry-exit-fs", onClick: i, title: k("fullscreen_title") || "Salir de pantalla completa", style: { position: "fixed", top: "max(16px, env(safe-area-inset-top))", left: "max(16px, env(safe-area-inset-left))", zIndex: 1e5, padding: "10px 16px", fontSize: "20px", fontWeight: 900, background: "rgba(0,0,0,.65)", backdropFilter: "blur(16px)", borderRadius: "14px", color: "white", border: "1px solid rgba(255,255,255,.25)", boxShadow: "0 8px 24px rgba(0,0,0,.5)", cursor: "pointer" }, children: "✕" }) : /* @__PURE__ */ he.jsx("button", { className: "ghost fs-btn entry-fs", onClick: i, title: k("fullscreen_title") || "Pantalla completa", style: { position: "absolute", bottom: "20px", right: "20px", zIndex: 10, padding: "10px 15px", fontSize: "18px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)", borderRadius: "14px", opacity: 0.85, color: "white", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "0 8px 20px rgba(0,0,0,0.35)", cursor: "pointer" }, children: "⛶" }),
      Y && /* @__PURE__ */ he.jsx("div", { className: "battery-alerts-wrapper", dangerouslySetInnerHTML: { __html: Y } }),
      /* @__PURE__ */ he.jsxs("div", { className: "entry-content security-console", children: [
        /* @__PURE__ */ he.jsxs("div", { className: "console-hud", children: [
          /* @__PURE__ */ he.jsxs("span", { className: "console-hud-loc", children: [
            "🏡 ",
            I
          ] }),
          /* @__PURE__ */ he.jsxs("div", { className: "argus-connection-pill", "data-online": z ? "true" : "false", children: [
            /* @__PURE__ */ he.jsx("i", { className: "argus-connection-dot" }),
            /* @__PURE__ */ he.jsx("span", { className: "argus-connection-label", children: z ? k("connected") || "CONECTADO" : k("disconnected") || "DESCONECTADO" })
          ] }),
          /* @__PURE__ */ he.jsx("div", { className: "console-hud-right", children: /* @__PURE__ */ he.jsx("span", { className: `console-system-badge console-system-badge--${T ? "triggered" : b}`, children: m() }) })
        ] }),
        /* @__PURE__ */ he.jsxs("div", { className: "entry-icon", children: [
          /* @__PURE__ */ he.jsx("div", { dangerouslySetInnerHTML: { __html: w() } }),
          C && /* @__PURE__ */ he.jsx("span", { className: "argus-shield-status", children: v.length ? k("waiting_sensors") || "ESPERANDO SENSORES" : k("arming") || "ARMANDO…" })
        ] }),
        /* @__PURE__ */ he.jsxs("div", { className: "liquid-stack", children: [
          /* @__PURE__ */ he.jsx("button", { className: `liquid-btn btn-home ${b === "armed_home" ? "active" : ""}`, onClick: () => c._handleAction(_, "home"), dangerouslySetInnerHTML: { __html: c._modeButtonIcon("home") + `<span>${k("mode_home") || "CASA"}</span>` } }),
          /* @__PURE__ */ he.jsx("button", { className: `liquid-btn btn-away ${b === "armed_away" ? "active" : ""}`, onClick: () => c._handleAction(_, "away"), dangerouslySetInnerHTML: { __html: c._modeButtonIcon("away") + `<span>${k("mode_away") || "AUSENTE"}</span>` } }),
          /* @__PURE__ */ he.jsx("button", { className: `liquid-btn btn-night ${b === "armed_night" ? "active" : ""}`, onClick: () => c._handleAction(_, "night"), dangerouslySetInnerHTML: { __html: c._modeButtonIcon("night") + `<span>${k("mode_night") || "NOCHE"}</span>` } })
        ] }),
        /* @__PURE__ */ he.jsx("div", { className: `console-sensors ${$}`, "data-count": R, children: E.length === 0 ? /* @__PURE__ */ he.jsx("div", { className: "console-empty", children: k("no_sensors_configured") || "Sin sensores configurados" }) : E.map((F) => {
          const Q = f.states[F.id], ee = F.name || Q?.attributes?.friendly_name || F.id, se = C && v.includes(F.id), le = c.isSensorActive ? c.isSensorActive(Q) : Q?.state === "on";
          let ne = null;
          return Q?.attributes?.battery_level !== void 0 ? ne = Q.attributes.battery_level : Q?.attributes?.battery !== void 0 && (ne = Q.attributes.battery), /* @__PURE__ */ he.jsx(
            Vg,
            {
              id: F.id,
              name: ee,
              isOpen: le,
              isBlocking: se,
              isBypassed: F.isBypassed,
              battery: ne,
              iconHtml: c._getSensorIcon?.(Q, F) || "",
              statusLabelOpen: k("status_open") || "ABIERTO",
              statusLabelClosed: k("status_closed") || "CERRADO",
              bypassedLabel: k("bypassed_sensor") || "OMITIDO"
            },
            F.id
          );
        }) })
      ] })
    ] })
  ] });
}
const hu = "argus-slide-action-styles", yi = {
  es: { slide_disarm: "Desliza para desarmar", slide_sos: "Desliza para activar SOS", slide_sos_stop: "Desliza para detener SOS", enter_pin: "Ingresa el PIN maestro", wrong_pin: "PIN incorrecto", cancel: "Cancelar" },
  en: { slide_disarm: "Slide to disarm", slide_sos: "Slide to trigger SOS", slide_sos_stop: "Slide to stop SOS", enter_pin: "Enter master PIN", wrong_pin: "Wrong PIN", cancel: "Cancel" }
};
function Yg(c) {
  if (typeof c._getCurrentLangCode == "function")
    return c._getCurrentLangCode();
  let r = c._manualLang || c._lang;
  if (!r)
    try {
      r = localStorage.getItem("argus_lang");
    } catch {
    }
  if ((!r || r === "auto") && (r = c._ui?.manual_lang || c._ui?.language || c._hass?.language || "en"), r = String(r || "en").trim(), yi[r]) return r;
  const i = r.split(/[-_]/)[0].toLowerCase();
  return yi[i] ? i : i.startsWith("es") ? "es" : "en";
}
function yn(c, r) {
  const i = Yg(c);
  if (c._t) {
    const a = c._t(r);
    if (a && a !== r) return a;
  }
  return (yi[i] || yi.es)[r] || yi.es[r] || r;
}
const Kg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>', _u = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>', Xg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>';
function Qg(c) {
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

/* The pill track — 3D Liquid Glass */
.argus-sta-track {
  position: relative;
  width: 100%;
  height: 64px;
  border-radius: 999px;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  backdrop-filter: blur(32px) saturate(190%) brightness(1.08);
  -webkit-backdrop-filter: blur(32px) saturate(190%) brightness(1.08);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.35), inset 0 2px 8px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  transform: translate3d(0,0,0);
}
.argus-sta-track--disarm {
  border-color: rgba(52, 211, 153, 0.55);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(16, 185, 129, 0.2), 0 8px 24px rgba(0,0,0,0.35);
}
.argus-sta-track--sos {
  border-color: rgba(248, 113, 113, 0.55);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(239, 68, 68, 0.2), 0 8px 24px rgba(0,0,0,0.35);
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
  background: linear-gradient(90deg, rgba(16,185,129,0.35), rgba(5,150,105,0.12));
}
.argus-sta-track--sos .argus-sta-fill {
  background: linear-gradient(90deg, rgba(239,68,68,0.38), rgba(185,28,28,0.12));
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
  backdrop-filter: blur(20px) saturate(190%);
  -webkit-backdrop-filter: blur(20px) saturate(190%);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}
.argus-sta-thumb:active { cursor: grabbing; }

.argus-sta-track--disarm .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(52, 211, 153, 0.35), rgba(10, 24, 20, 0.95));
  border: 1.5px solid rgba(52, 211, 153, 0.85);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(16, 185, 129, 0.45);
  color: #ffffff;
}
.argus-sta-track--sos .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(248, 113, 113, 0.35), rgba(28, 12, 16, 0.95));
  border: 1.5px solid rgba(248, 113, 113, 0.85);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(239, 68, 68, 0.45);
  color: #ffffff;
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
  const a = document.createElement("div");
  a.className = `argus-sta-wrap argus-sta-wrap--${c}`;
  const s = document.createElement("div");
  s.className = `argus-sta-track argus-sta-track--${c}`;
  const d = document.createElement("div");
  d.className = "argus-sta-fill";
  const u = document.createElement("div");
  u.className = "argus-sta-thumb", u.innerHTML = i;
  const f = document.createElement("span");
  f.className = "argus-sta-label", f.textContent = r;
  const g = document.createElement("div");
  return g.className = "argus-sta-pin", g.innerHTML = `
    <input type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="••••"/>
    <div class="pin-err"></div>
    <div class="pin-row">
      <button class="pin-cancel" type="button">✕</button>
      <button class="pin-ok" type="button">✓</button>
    </div>`, s.append(d, u, f, g), a.appendChild(s), { wrap: a, track: s, fill: d, thumb: u, label: f, pin: g };
}
function yu(c, r, i, a, s, d, u, f) {
  let _ = !1, S = 0, b = 0, k = 0;
  function I() {
    return i.getBoundingClientRect().width - 56 - 4 * 2;
  }
  function T(R) {
    k = I();
    const $ = Math.max(0, Math.min(R, k));
    s.style.transform = `translateX(${$}px)`, a.style.width = `${$ + 60}px`;
    const V = $ / k;
    return d.style.opacity = String(Math.max(0, 1 - V * 1.8)), $;
  }
  function z() {
    s.classList.add("argus-sta-thumb--snap"), T(0), d.style.opacity = "1", setTimeout(() => s.classList.remove("argus-sta-thumb--snap"), 520);
  }
  function C(R) {
    u.classList.contains("open") || (_ = !0, k = I(), S = R - b, s.style.cursor = "grabbing");
  }
  function x(R) {
    _ && (b = T(R - S));
  }
  function m() {
    _ && (_ = !1, s.style.cursor = "grab", b >= k * 0.8 ? r === "disarm" && Zg(c) ? (w(), z()) : (f(), z()) : z(), b = 0);
  }
  s.addEventListener("mousedown", (R) => {
    R.preventDefault(), C(R.clientX);
  }), window.addEventListener("mousemove", (R) => {
    _ && x(R.clientX);
  }), window.addEventListener("mouseup", () => {
    _ && m();
  }), s.addEventListener("touchstart", (R) => {
    R.preventDefault(), C(R.touches[0].clientX);
  }, { passive: !1 }), window.addEventListener("touchmove", (R) => {
    _ && (R.preventDefault(), x(R.touches[0].clientX));
  }, { passive: !1 }), window.addEventListener("touchend", () => {
    _ && m();
  });
  function w() {
    u.classList.add("open"), u.querySelector("input").focus();
  }
  const h = u.querySelector("input"), v = u.querySelector(".pin-err");
  function E() {
    const R = h.value;
    Jg(c, R) ? (u.classList.remove("open"), h.value = "", v.textContent = "", f(R)) : (h.classList.add("pin-shake"), v.textContent = yn(c, "wrong_pin"), setTimeout(() => {
      h.classList.remove("pin-shake"), v.textContent = "", h.value = "";
    }, 700));
  }
  u.querySelector(".pin-ok").addEventListener("click", E), h.addEventListener("keydown", (R) => {
    R.key === "Enter" && E();
  }), u.querySelector(".pin-cancel").addEventListener("click", () => {
    u.classList.remove("open"), h.value = "", v.textContent = "";
  });
}
function Zg(c) {
  return !!(c._entries?.[0]?.pin_configured || c._dashboard?.entries?.[0]?.pin_configured || c._ui?.master_pin_configured || c._pinConfigured);
}
function Jg(c, r) {
  return typeof c._verifyPin == "function" ? c._verifyPin(r) : typeof c._checkMasterPin == "function" ? c._checkMasterPin(r) : !1;
}
function em(c, r, i) {
  if (r.querySelector(".argus-sta-wrap")) {
    r._staRefresh?.();
    return;
  }
  r.dataset.staInstalled = "1";
  const s = r.dataset.entityId || c._dashboard?.entries?.[i]?.entity_id || "";
  function d() {
    return String(c._hass?.states?.[s]?.state || "disarmed").toLowerCase();
  }
  function u() {
    return !!c._hass?.states?.[s]?.attributes?.argus_panic_active;
  }
  const { wrap: f, track: g, fill: _, thumb: S, label: b, pin: k } = bu("disarm", yn(c, "slide_disarm"), Kg);
  yu(c, "disarm", g, _, S, b, k, (v) => {
    const E = c._dashboard?.entries?.[i]?.entry_id || "";
    typeof c._send == "function" && c._send("argus/perform_alarm_action", { action: "disarm", entry_id: E, ...v ? { code: v } : {} }).catch(() => {
    });
  });
  const { wrap: I, track: T, fill: z, thumb: C, label: x, pin: m } = bu("sos", yn(c, "slide_sos"), _u);
  yu(c, "sos", T, z, C, x, m, () => {
    const v = c._dashboard?.entries?.[i]?.entry_id || "";
    typeof c._send == "function" && c._send("argus/perform_alarm_action", { action: "sos", entry_id: v }).catch(() => {
    });
  });
  const w = r.querySelector(".liquid-stack");
  if (!w) return;
  w.querySelectorAll(".btn-disarm, .btn-sos, .argus-disarm-btn").forEach((v) => v.remove()), w.appendChild(f), w.appendChild(I);
  function h() {
    const v = d(), E = u(), R = v !== "disarmed" && v !== "unavailable";
    f.classList.toggle("sta-armed", R), b.textContent = yn(c, "slide_disarm"), T.classList.toggle("sos-pulsing", E), x.textContent = E ? yn(c, "slide_sos_stop") : yn(c, "slide_sos"), C.innerHTML = E ? Xg : _u;
  }
  h(), r._staRefresh = h;
}
function xi(c) {
  Qg(c);
  const r = c.shadowRoot;
  r && r.querySelectorAll(".entry").forEach((i, a) => {
    if (!i.dataset.entityId) {
      const s = c._dashboard?.entries?.[a]?.entity_id;
      s && (i.dataset.entityId = s);
    }
    em(c, i, a), i._staRefresh?.();
  });
}
function tm(c) {
  if (!c || c.__argusSlideToAction) return;
  c.__argusSlideToAction = !0;
  const r = c.prototype, i = r._renderEntries;
  r._renderEntries = function(...d) {
    const u = i?.call(this, ...d);
    return requestAnimationFrame(() => {
      xi(this), setTimeout(() => xi(this), 100);
    }), u;
  };
  const a = r._refreshLocalizedUi;
  if (r._refreshLocalizedUi = function(...d) {
    const u = a?.call(this, ...d);
    return xi(this), u;
  }, Object.getOwnPropertyDescriptor(r, "_hass")?.set || r.set_hass) {
    const d = r.set_hass;
    r.set_hass = function(u) {
      d?.call(this, u), this.shadowRoot?.querySelectorAll(".entry").forEach((f) => f._staRefresh?.());
    };
  }
}
function vi(c) {
  const r = c.shadowRoot;
  if (!r) return;
  const i = r.getElementById("entries");
  i && (c._reactConsoleRoot || (i.innerHTML = "", c._reactConsoleRoot = Bu.createRoot(i)), c._reactConsoleRoot.render(
    /* @__PURE__ */ he.jsx(rm, { panel: c })
  ));
}
typeof window < "u" && (window.mountSecurityConsole = vi);
function rm({ panel: c }) {
  const [r, i] = qe.useState(0), [a, s] = qe.useState(c.classList.contains("fullscreen-active")), d = qe.useRef(null);
  return qe.useEffect(() => {
    const u = () => {
      i((_) => _ + 1), s(c.classList.contains("fullscreen-active"));
    }, f = () => {
      s(c.classList.contains("fullscreen-active") || !!document.fullscreenElement);
    };
    c.addEventListener("argus-state-update", u), window.addEventListener("argus-lang-changed", u), c.addEventListener("argus-fullscreen-changed", f), document.addEventListener("fullscreenchange", f), document.addEventListener("webkitfullscreenchange", f);
    const g = c._renderEntries;
    return c._renderEntries = function(..._) {
      u();
    }, () => {
      c.removeEventListener("argus-state-update", u), window.removeEventListener("argus-lang-changed", u), c.removeEventListener("argus-fullscreen-changed", f), document.removeEventListener("fullscreenchange", f), document.removeEventListener("webkitfullscreenchange", f), c._renderEntries = g;
    };
  }, [c]), qe.useEffect(() => {
    if (!d.current) return;
    const u = setTimeout(() => {
      try {
        typeof xi == "function" && xi(c);
      } catch (f) {
        console.error("Argus: Failed to attach SOS sliders", f);
      }
    }, 40);
    return () => clearTimeout(u);
  }, [r, a, c]), /* @__PURE__ */ he.jsx("div", { ref: d, style: { width: "100%", height: "100%" }, children: /* @__PURE__ */ he.jsx(
    Gg,
    {
      panel: c,
      isFullscreen: a,
      onToggleFullscreen: () => {
        if (a)
          typeof c._exitFullscreenView == "function" ? c._exitFullscreenView() : (c.classList.remove("fullscreen-active"), document.body.style.overflow = "", s(!1));
        else {
          const u = c.shadowRoot?.querySelector(".entry");
          typeof c._toggleFullscreen == "function" ? c._toggleFullscreen(u) : (c.classList.add("fullscreen-active"), document.body.style.overflow = "hidden", s(!0));
        }
      },
      onUnlockKiosk: () => c._requestKioskUnlock()
    }
  ) });
}
function nm(c) {
  if (!c || c.__argusReactSecurityConsole) return;
  c.__argusReactSecurityConsole = !0;
  const r = c.prototype.connectedCallback, i = c.prototype._load;
  c.prototype._renderEntries, c.prototype.connectedCallback = function() {
    const a = r?.call(this);
    return vi(this), a;
  }, c.prototype._load = async function(...a) {
    const s = await i?.apply(this, a);
    return vi(this), s;
  }, c.prototype._renderEntries = function() {
    vi(this);
  };
}
typeof window < "u" && (window.mountSecurityConsole = vi);
function im(c) {
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
class xu extends Fg {
  constructor(r) {
    super(), this.panel = r;
  }
  record() {
    return this.panel._ui?.dashboard?.react_layout_v2 || {};
  }
  async remote(r) {
    if (!this.panel._send) return;
    const a = { ...this.record(), ...r, layoutVersion: 2, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, s = { ...this.panel._ui?.dashboard || {}, react_layout_v2: a }, d = this.panel._dashboard?.entry_id || this.panel._dashboard?.entries?.[0]?.entry_id;
    await this.panel._send("argus/save_ui", { dashboard: s, ...d ? { entry_id: d } : {} }), this.panel._ui = this.panel._ui || {}, this.panel._ui.dashboard = s;
  }
  async load(r, i) {
    const a = this.record().layouts;
    return a ? vn(a) : super.load(r, i);
  }
  async save(r, i, a) {
    await super.save(r, i, a), await this.remote({ layouts: a });
  }
  async loadVisibility(r, i) {
    return this.record().visibility || await super.loadVisibility(r, i);
  }
  async saveVisibility(r, i, a) {
    await super.saveVisibility(r, i, a), await this.remote({ visibility: a });
  }
  async reset(r, i) {
    await super.reset(r, i), await this.remote({ layouts: vn(null), visibility: {} });
  }
}
function Zu(c) {
  const r = c.shadowRoot?.getElementById("edit-widgets-label");
  (r?.closest("button") || r)?.remove(), c.shadowRoot?.querySelectorAll(".panel-edit-overlay,.widget-drag-handle").forEach((a) => a.remove());
  let i = c.shadowRoot?.getElementById("argus-react-editor-only");
  i || (i = document.createElement("style"), i.id = "argus-react-editor-only", i.textContent = "#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}", c.shadowRoot.appendChild(i));
}
function vu(c) {
  Zu(c);
  const r = c.shadowRoot?.getElementById("widget-grid"), i = c._dashboard?.entry_id || c._dashboard?.entries?.[0]?.entry_id || "default";
  if (!r) return;
  const a = im(c), s = /* @__PURE__ */ new Map();
  if (a.forEach((g) => {
    const _ = c.shadowRoot.getElementById(g.nativeId);
    _ && s.set(g.id, _);
  }), c._argusReactRoot) {
    c._argusReactRoot.render(
      /* @__PURE__ */ he.jsx(
        mu,
        {
          widgets: a,
          nodes: s,
          storage: new xu(c),
          userId: c._currentProfile?.id || c._hass?.user?.id || "anonymous",
          dashboardId: i,
          onEditing: (g) => {
            c._widgetEditing = g, r.classList.toggle("editing", g);
          },
          registerEditor: (g) => {
            c._argusReactSetEditing = g;
          }
        }
      )
    );
    return;
  }
  let d = c.shadowRoot.getElementById("argus-react-dashboard-style");
  if (d || (d = document.createElement("style"), d.id = "argus-react-dashboard-style", d.textContent = ng + ig + og, c.shadowRoot.appendChild(d)), !c.shadowRoot.getElementById("argus-access-scroll-fix")) {
    const g = document.createElement("style");
    g.id = "argus-access-scroll-fix", g.textContent = ".argus-widget__content--access{display:flex;min-height:0;overflow:hidden}.argus-widget__content--access>#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}.argus-widget__content--access>#w-access>.panel-head{flex:0 0 auto!important}.argus-widget__content--access>#w-access>#access-workspace{display:block!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;padding-right:4px}", c.shadowRoot.appendChild(g);
  }
  const u = document.createElement("div");
  u.id = "argus-react-dashboard-root", r.appendChild(u);
  const f = Bu.createRoot(u);
  c._argusReactRoot = f, f.render(
    /* @__PURE__ */ he.jsx(
      mu,
      {
        widgets: a,
        nodes: s,
        storage: new xu(c),
        userId: c._currentProfile?.id || c._hass?.user?.id || "anonymous",
        dashboardId: i,
        onEditing: (g) => {
          c._widgetEditing = g, r.classList.toggle("editing", g);
        },
        registerEditor: (g) => {
          c._argusReactSetEditing = g;
        }
      }
    )
  );
}
function om(c) {
  if (!c || c.__argusReactDashboard) return;
  c.__argusReactDashboard = !0;
  const r = c.prototype, i = r.connectedCallback, a = r._load, s = r._refreshLocalizedUi;
  r.connectedCallback = function() {
    const d = i?.call(this);
    return Zu(this), d;
  }, r._load = async function() {
    const d = await a?.call(this);
    return vu(this), d;
  }, r._refreshLocalizedUi = function() {
    const d = s?.call(this);
    return vu(this), d;
  }, r._toggleWidgetEditing = function() {
    this._argusReactSetEditing?.(!this._widgetEditing);
  };
}
function wu(c) {
  const r = c._hass?.auth?.accessToken;
  return r ? { Authorization: `Bearer ${r}` } : {};
}
function am(c) {
  const r = c?.prototype;
  !r || r.__argusMediaClient || (r.__argusMediaClient = !0, r._loadUploadedFiles = async function() {
    try {
      const i = await fetch("/api/argus/media", { headers: wu(this), credentials: "same-origin" });
      if (!i.ok) throw new Error(`HTTP ${i.status}`);
      const a = await i.json();
      this._uploadedFiles = Array.isArray(a.files) ? a.files : [];
    } catch (i) {
      console.error("Private Argus media listing failed", i), this._uploadedFiles = [];
    }
    this._renderUploadedFiles?.();
  }, r._deleteUploadedFile = async function(i) {
    try {
      const a = await fetch(`/api/argus/media/${encodeURIComponent(i)}`, { method: "DELETE", headers: wu(this), credentials: "same-origin" });
      if (!a.ok) throw new Error(`HTTP ${a.status}`);
      this._uploadedFiles = (this._uploadedFiles ?? []).filter((d) => d.name !== i);
      const s = [["panel-bg-url-input", "_panelBgFile"], ["hub-bg-url-input", "_hubBgFile"]];
      for (const [d, u] of s) {
        const f = this.shadowRoot.getElementById(d);
        f?.value.includes(`/${i}?`) && (f.value = "", this[u] = "");
      }
      this._renderUploadedFiles?.();
    } catch (a) {
      const s = a instanceof Error ? a.message : String(a);
      console.error("Private Argus media deletion failed", a), window.alert(this._format?.("delete_file_error", { error: s }) ?? s);
    }
  });
}
const Do = (c, r) => c.getElementById(r), Mo = (c, r, i) => c._t?.(r) ?? i;
function sm(c) {
  const r = c?.prototype;
  !r || r.__argusSecurityClient || (r.__argusSecurityClient = !0, r._savePin = async function() {
    const i = this.shadowRoot.getElementById("pin-status"), s = this._dashboard?.entries?.[0], d = Do(this.shadowRoot, "current-pin")?.value ?? "", u = Do(this.shadowRoot, "new-pin-1")?.value ?? "", f = Do(this.shadowRoot, "new-pin-2")?.value ?? "", g = (_) => {
      i && (i.textContent = _, i.className = "status err");
    };
    if (!s?.entry_id) return g("No Argus config entry is available");
    if (s.pin_configured && !d) return g(Mo(this, "pin_incorrect", "PIN incorrecto"));
    if (u !== f) return g(Mo(this, "pin_mismatch", "Los PIN no coinciden"));
    if (u && !/^\d{4,12}$/.test(u)) return g("PIN: se requieren entre 4 y 12 dígitos");
    if (!this._send) return g("Argus WebSocket is unavailable");
    try {
      await this._send("argus/update_master_pin", { entry_id: s.entry_id, pin: u, current_pin: d }), s.pin_configured = !!u, i && (i.textContent = u ? Mo(this, "pin_updated", "PIN actualizado") : Mo(this, "pin_deleted", "PIN eliminado"), i.className = "status ok");
      for (const _ of ["current-pin", "new-pin-1", "new-pin-2"]) {
        const S = Do(this.shadowRoot, _);
        S && (S.value = "");
      }
      this._syncAccessSummary?.(), window.setTimeout(() => {
        this._load?.();
      }, 800);
    } catch (_) {
      g(_ instanceof Error ? _.message : String(_));
    }
  }, r._handleForgotPin = function() {
    const i = "Restablece el PIN desde las opciones de la integración Argus o desde un respaldo confiable de Home Assistant.", a = this.shadowRoot.getElementById("pin-status");
    a ? (a.textContent = i, a.className = "status err") : window.alert(i);
  });
}
const ku = "argus-hdr-promotion-styles";
function lm(c) {
  cm(c);
}
function cm(c) {
  if (!c || c.__argusPremiumHDRApplied) return;
  c.__argusPremiumHDRApplied = !0;
  const r = c.prototype.connectedCallback;
  c.prototype.connectedCallback = function() {
    const i = typeof r == "function" ? r.call(this) : void 0;
    return dm(this), i;
  };
}
function dm(c) {
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
const Ks = "argus-motion-system-v2049", jo = "__argusMotionV2049", Su = ".user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin", js = `
:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;
function um(c) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "essential";
  const r = String(c._argusPerfProfile || c.dataset?.argusPerf || "").toLowerCase();
  return r === "essential" || c.classList.contains("argus-perf-essential") ? "essential" : r === "light" ? "light" : "full";
}
function Eu(c) {
  if (c[jo]) return c[jo];
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
  return Object.defineProperty(c, jo, { value: r, writable: !0, configurable: !0 }), r;
}
function pm(c, r) {
  const i = requestAnimationFrame(() => {
    c.rafs.delete(i), c.active && r();
  });
  return c.rafs.add(i), i;
}
function Fs(c, r, i, a, s) {
  r.addEventListener(i, a, s), c.cleanups.add(() => r.removeEventListener(i, a, s));
}
function Js(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Ks);
  i ? i.textContent !== js && (i.textContent = js) : (i = document.createElement("style"), i.id = Ks, i.textContent = js, r.appendChild(i));
}
function wi(c) {
  c.profileControl?.classList.remove("is-entering"), c.profileControl = null, c.panel.shadowRoot?.getElementById("bootstrap-overlay")?.removeAttribute("aria-busy");
}
function Cu(c, r) {
  wi(c), c.profileControl = r, r?.classList.add("is-entering"), c.panel.shadowRoot?.getElementById("bootstrap-overlay")?.setAttribute("aria-busy", "true");
}
function fm(c) {
  c.observer || !c.panel.shadowRoot || (c.observer = new MutationObserver((r) => {
    r.some((i) => [...i.addedNodes].some((a) => a instanceof Element && a.id !== Ks)) && (c.observerFrame || (c.observerFrame = pm(c, () => {
      c.observerFrame = 0, Js(c.panel);
    })));
  }), c.observer.observe(c.panel.shadowRoot, { childList: !0, subtree: !0, attributes: !1 }));
}
function gm(c) {
  const r = c.panel.shadowRoot;
  if (!r) return;
  const i = (a) => {
    a && (a.classList.remove("argus-motion-press"), c.pressed.delete(a));
  };
  Fs(c, r, "pointerdown", (a) => {
    if (um(c.panel) === "essential") return;
    const d = a.target?.closest?.(Su);
    !d || d.disabled || (d.classList.add("argus-motion-press"), c.pressed.add(d));
  }, !0), ["pointerup", "pointercancel", "pointerleave"].forEach((a) => Fs(c, r, a, (s) => {
    const d = s.target;
    i(d?.closest?.(Su));
  }, !0)), Fs(c, r, "click", (a) => {
    const s = a.target, d = s?.closest?.(".user-card");
    d && d.dataset.isOwn === "true" && d.dataset.pinRequired !== "true" && Cu(c, d), s?.closest?.("#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin") && Cu(c, s.closest("button")), s?.closest?.("#btn-cancel-login") && wi(c);
  }, !0);
}
function qs(c) {
  c.active || !c.panel.shadowRoot || (c.active = !0, Js(c.panel), gm(c), fm(c), c.api = Object.freeze({ animateView: () => {
  }, stagger: () => {
  }, transitionBackground: () => () => {
  }, animateDashboard: () => {
  } }));
}
function mm(c) {
  c.active = !1, c.observer?.disconnect(), c.observer = null, c.observerFrame && cancelAnimationFrame(c.observerFrame), c.observerFrame = 0, c.rafs.forEach(cancelAnimationFrame), c.rafs.clear(), c.timers.forEach(clearTimeout), c.timers.clear(), c.cleanups.forEach((r) => r()), c.cleanups.clear(), c.pressed.forEach((r) => r.classList.remove("argus-motion-press")), c.pressed.clear(), wi(c);
}
function hm(c) {
  const r = c?.prototype;
  if (!r || r.__argusMotionSystemV2049) return;
  r.__argusMotionSystemV2049 = !0;
  const i = r.connectedCallback, a = r.disconnectedCallback, s = r._load;
  r.connectedCallback = function() {
    const d = i?.call(this), u = Eu(this);
    return this.shadowRoot ? qs(u) : queueMicrotask(() => qs(u)), d;
  }, r.disconnectedCallback = function() {
    const d = this[jo];
    return d && mm(d), a?.call(this);
  }, r._load = async function(...d) {
    const u = Eu(this);
    try {
      const f = await s?.apply(this, d);
      return !u.active && this.isConnected && qs(u), Js(this), wi(u), f;
    } catch (f) {
      throw wi(u), f;
    }
  };
}
const zu = "__argusStableRenderV2050";
function Rr(c) {
  const r = c.shadowRoot;
  if (!r) return;
  const i = /* @__PURE__ */ new Date(), a = c._formatTime ? c._formatTime(i) : i.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), s = i.toLocaleDateString(c._getLocale?.() || void 0, { weekday: "short", month: "short", day: "numeric" }), d = r.getElementById("hero-clock-time"), u = r.getElementById("hero-clock-date");
  d && d.textContent !== a && (d.textContent = a), u && u.textContent !== s && (u.textContent = s), r.querySelectorAll(".console-hud-time,.hud-data>span:first-child").forEach((f) => {
    f && f.textContent !== a && (f.textContent = a);
  });
}
function Ru(c, r, i, a, s, d, u) {
  return [
    r?.entity_id || "",
    r?.entry_id || "",
    i || "",
    d ? "1" : "0",
    u ? "1" : "0",
    s || "",
    a?.arming_waiting_for_sensors ? "1" : "0",
    JSON.stringify(a?.arming_blocking_sensors || []),
    JSON.stringify(a?.triggered_sensors || []),
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
function Ws(c, r) {
  !r || r._argusDelegated || (r._argusDelegated = !0, r.addEventListener("click", (i) => {
    const a = i.target;
    if (a.closest?.('button[data-action="unlock-kiosk"]')) {
      c._requestKioskUnlock?.();
      return;
    }
    const d = a.closest?.('button[data-action="sos"]');
    if (d) {
      c._sosEntryIdx = Number(d.dataset.idx), c.shadowRoot?.getElementById("sos-modal")?.classList.add("open");
      return;
    }
    const u = a.closest?.('button[data-action="stop-sos"]');
    if (u) {
      c._stopSOS?.(Number(u.dataset.idx));
      return;
    }
    const f = a.closest?.("button[data-fullscreen]");
    if (f) {
      c._toggleFullscreen?.(f.closest(".entry"));
      return;
    }
    if (a.closest?.("button[data-exit-fullscreen]")) {
      c._exitFullscreenView?.();
      return;
    }
    const _ = a.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])');
    _?.dataset?.idx != null && _?.dataset?.action && c._handleAction?.(_.dataset.idx, _.dataset.action);
  }));
}
function _m(c) {
  const r = c?.prototype;
  if (!r || r[zu]) return;
  r[zu] = !0;
  const i = r._renderEntries, a = Object.getOwnPropertyDescriptor(r, "hass") || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), "hass");
  r._updateLiveClocks = function() {
    Rr(this);
  }, r._updateHeroClock = function() {
    Rr(this);
  }, r._startClock = function() {
    this._clockInterval && clearInterval(this._clockInterval), Rr(this), this._clockInterval = setInterval(() => {
      this._dashboard && Rr(this);
    }, 1e3);
  }, r._renderEntries = function(f = !1) {
    const g = this.shadowRoot;
    if (!g) return i?.call(this, f);
    const _ = g.getElementById("entries"), S = this._dashboard?.entries || [];
    if (this._instanceSignatures = this._instanceSignatures || /* @__PURE__ */ new Map(), !_ || !S.length) {
      const z = i?.call(this, f);
      return Ws(this, g.getElementById("entries")), Rr(this), z;
    }
    const b = [..._.querySelectorAll("article.entry")];
    if (!(f || b.length !== S.length || !b.every((z) => z.querySelector(".entry-content")))) {
      let z = !0;
      for (let C = 0; C < S.length; C++) {
        const x = S[C], m = this._hass?.states?.[x.entity_id], w = m?.state || x.state || "unavailable", h = m?.attributes || {}, v = !!h.argus_panic_active, E = this._fullscreenIdx === C || !!this._kioskLocked && (this._kioskEntryId === x.entry_id || S.length === 1), R = String(w).replace("armed_", "");
        let $ = this._ui?.modes?.__by_entity__?.[x.entity_id]?.[R] || this._ui?.modes?.[R] || {}, V = $.sensors || [];
        if (w === "disarmed" || !V.length) {
          const se = this._ui?.modes?.__by_entity__?.[x.entity_id] || this._ui?.modes || {}, le = /* @__PURE__ */ new Set();
          ["away", "home", "night", "vacation"].forEach((ne) => {
            (se[ne]?.sensors || []).forEach((ue) => le.add(ue));
          }), V = [...le];
        }
        const Y = $.bypassed_sensors || [], Q = V.filter((se) => !Y.includes(se)).map((se) => {
          const le = this._hass?.states?.[se], ne = this._getSensorBattery?.(se, le) ?? le?.attributes?.battery_level ?? le?.attributes?.battery_percentage ?? "";
          return `${se}:${le?.state || ""}:${ne}`;
        }).join(","), ee = Ru(this, x, w, h, Q, v, E);
        if (this._instanceSignatures.get(C) !== ee) {
          z = !1;
          break;
        }
      }
      if (z) {
        const x = S.map((h) => this._hass?.states?.[h.entity_id]?.state || "unavailable").some((h) => String(h).startsWith("armed") || h === "triggered" || h === "pending"), m = g.getElementById("global-status");
        m && (m.innerHTML = "");
        const w = g.getElementById("hero-security-pill");
        if (w) {
          const h = (R) => this._t?.(R) || R, v = h(x ? "system_armed" : "system_disarmed"), E = `<i class="hero-live" style="background:${x ? "#ffb54d" : "#55df91"};box-shadow:0 0 9px ${x ? "#ffb54d" : "#55df91"}"></i>${this._escapeHtml?.(v) || v}`;
          w.innerHTML !== E && (w.innerHTML = E);
        }
        Rr(this), Ws(this, _);
        return;
      }
    }
    const I = i?.call(this, f === !0 ? !0 : void 0);
    return [..._.querySelectorAll("article.entry")].forEach((z, C) => {
      const x = S[C];
      if (!x) return;
      const m = this._hass?.states?.[x.entity_id], w = m?.state || x.state || "unavailable", h = m?.attributes || {}, v = !!h.argus_panic_active, E = this._fullscreenIdx === C || !!this._kioskLocked && (this._kioskEntryId === x.entry_id || S.length === 1), R = String(w).replace("armed_", "");
      let $ = this._ui?.modes?.__by_entity__?.[x.entity_id]?.[R] || this._ui?.modes?.[R] || {}, V = $.sensors || [];
      if (w === "disarmed" || !V.length) {
        const se = this._ui?.modes?.__by_entity__?.[x.entity_id] || this._ui?.modes || {}, le = /* @__PURE__ */ new Set();
        ["away", "home", "night", "vacation"].forEach((ne) => {
          (se[ne]?.sensors || []).forEach((ue) => le.add(ue));
        }), V = [...le];
      }
      const Y = $.bypassed_sensors || [], Q = V.filter((se) => !Y.includes(se)).map((se) => {
        const le = this._hass?.states?.[se], ne = this._getSensorBattery?.(se, le) ?? le?.attributes?.battery_level ?? le?.attributes?.battery_percentage ?? "";
        return `${se}:${le?.state || ""}:${ne}`;
      }).join(","), ee = Ru(this, x, w, h, Q, v, E);
      this._instanceSignatures.set(C, ee), z.dataset.renderSig = ee;
    }), Ws(this, _), Rr(this), I;
  };
  const s = a?.get, d = a?.set;
  d && Object.defineProperty(r, "hass", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return s ? s.call(this) : this._hass;
    },
    set: function(f) {
      const g = this._hass;
      if (g && this._dashboard?.entries?.length) {
        const _ = /* @__PURE__ */ new Set(), S = (w) => {
          !w || typeof w != "object" || (Array.isArray(w.sensors) && w.sensors.forEach((h) => _.add(h)), Object.values(w).forEach((h) => {
            h && typeof h == "object" && S(h);
          }));
        };
        S(this._ui?.modes);
        const b = g.language !== f.language;
        b && !this._manualLang && this._refreshLocalizedUi?.();
        const k = this._dashboard.entries.some((w) => w.entity_id && g.states[w.entity_id]?.state !== f.states[w.entity_id]?.state), I = [..._].some(
          (w) => g.states[w]?.state !== f.states[w]?.state || g.states[w]?.attributes?.battery_level !== f.states[w]?.attributes?.battery_level || g.states[w]?.attributes?.battery_percentage !== f.states[w]?.attributes?.battery_percentage
        ), T = this._temperatureSource === "auto" ? null : this._temperatureSource, z = T && g.states[T]?.state !== f.states[T]?.state, C = this._weatherSource && this._weatherSource !== "auto" ? this._weatherSource : Object.values(f.states).find((w) => w.entity_id?.startsWith("weather."))?.entity_id, x = C && (g.states[C]?.state !== f.states[C]?.state || g.states[C]?.attributes?.temperature !== f.states[C]?.attributes?.temperature), m = k || I || z || x || b;
        this._hass = f, this._updateTheme?.(), m ? (this._renderEntries?.(b), this._renderActivityLog?.()) : Rr(this);
        return;
      }
      return d.call(this, f);
    }
  });
  const u = r.connectedCallback;
  r.connectedCallback = function() {
    const f = u?.call(this);
    return this._startClock?.(), f;
  };
}
const Au = "argus-v2050-alarm-visuals", bm = {
  armed_home: /EN CASA|HOME|EM CASA|CASA|在家|ДОМА/i,
  armed_away: /AUSENTE|AWAY|ASSENTE|外出|УШЁЛ/i,
  armed_night: /NOCHE|NIGHT|NOITE|NOTTE|夜间|НОЧЬ/i
};
function ym(c, r) {
  const i = r?.entity_id || r?.alarm_entity_id, a = i ? c._hass?.states?.[i]?.state : void 0;
  return String(a || r?.state || r?.alarm_state || r?.attributes?.state || "").toLowerCase();
}
function Us(c, r, i) {
  c.classList.toggle("active", i), c.classList.toggle("argus-action-active", i), c.dataset.argusAction = r, r === "sos" && c.classList.toggle("flashing", i);
}
function xm(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Au);
  i || (i = document.createElement("style"), i.id = Au, r.appendChild(i)), i.textContent = `
.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}
.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important;will-change:transform,opacity}
.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}
.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important;will-change:transform,opacity}
@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale3d(.94,.94,1)}50%{opacity:1;transform:scale3d(1.07,1.07,1)}}
@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}
@keyframes argusTriggeredSensor{0%,100%{opacity:.62;transform:scale3d(1,1,1)}50%{opacity:1;transform:scale3d(1.02,1.02,1)}}
`;
}
function Vs(c) {
  if (!c.shadowRoot) return;
  xm(c);
  const r = c.shadowRoot.querySelectorAll(".entry");
  Array.from(r).forEach((i, a) => {
    const s = c._dashboard?.entries?.[a] || {}, d = s.attributes || c._hass?.states?.[s.entity_id]?.attributes || {}, u = ym(c, s), f = d.arming_blocking_sensors || [], g = u === "arming" || !!d.arming_waiting_for_sensors || !!f.length;
    i.classList.toggle("argus-arming", g), i.classList.toggle("argus-waiting", g);
    const _ = i.querySelector(".entry-icon");
    let S = i.querySelector(".argus-shield-status");
    if (g && _) {
      S || (S = document.createElement("span"), S.className = "argus-shield-status", _.insertAdjacentElement("afterend", S));
      const z = (c._t?.("waiting_sensors_count") || "ESPERANDO {count} SENSOR(ES)").replace("{count}", String(f.length));
      S.textContent = f.length ? z : u === "arming" ? c._t?.("arming") || "ARMANDO…" : c._t?.("waiting_sensors") || "ESPERANDO SENSORES";
    } else
      S?.remove();
    const b = i.querySelector(".liquid-stack");
    b && Array.from(b.querySelectorAll(".liquid-btn,button")).forEach((T) => {
      const z = T, C = String(z.textContent || "");
      if (/SOS|PÁNICO|PANIC|PANIQUE|PÂNICO|PANICO|紧急|ПАНИКА/i.test(C)) Us(z, "sos", !!d.argus_panic_active);
      else if (/DESARMAR|DISARM|DESARMADO|DISARMED|DÉSARMER|DÉSARMÉ|OFF|已撤防|СНЯТО/i.test(C)) Us(z, "disarm", u === "disarmed");
      else {
        const x = Object.entries(bm).find(([, m]) => m.test(C));
        x && Us(z, x[0], u === x[0]);
      }
    });
    const k = new Set((d.triggered_sensors || []).map(String)), I = new Set(f.map((T) => String(c._dashboard?.available_entities?.find((z) => z.entity_id === T)?.name || T).toLocaleLowerCase()));
    i.querySelectorAll(".console-sensor").forEach((T) => {
      const z = String(T.querySelector(".console-sensor-name")?.textContent || T.textContent || "").toLocaleLowerCase(), C = Array.from(I).some((m) => z.includes(m) || m.includes(z)), x = Array.from(k).some((m) => z.includes(String(m).toLocaleLowerCase()));
      T.classList.toggle("argus-blocking", C), T.classList.toggle("argus-triggered-sensor", x);
    });
  });
}
function vm(c) {
  const r = c?.prototype;
  if (!r || r.__v2050AlarmVisuals) return;
  r.__v2050AlarmVisuals = !0;
  const i = r.connectedCallback, a = r._load, s = r._renderEntries;
  r.connectedCallback = function() {
    const d = i?.call(this);
    return Vs(this), d;
  }, r._load = async function(...d) {
    const u = await a?.apply(this, d);
    return Vs(this), u;
  }, r._renderEntries = function(...d) {
    const u = s?.apply(this, d);
    return Vs(this), u;
  };
}
const Pu = "argus-v2049-responsive-widgets", wm = '#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"],.users-modal,.access-modal,.argus-users-modal';
function km(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Pu);
  i || (i = document.createElement("style"), i.id = Pu, r.appendChild(i)), i.textContent = `
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
function Sm(c) {
  const r = c.shadowRoot;
  r && r.querySelectorAll(wm).forEach((i) => {
    const a = i;
    a.style.touchAction = "pan-y", a.style.setProperty("-webkit-overflow-scrolling", "touch"), a.scrollHeight > a.clientHeight && (a.style.overflowY = "auto");
  });
}
function $o(c) {
  km(c), Sm(c);
}
function Em(c) {
  const r = c?.prototype;
  if (!r || r.__v2049ResponsiveWidgets) return;
  r.__v2049ResponsiveWidgets = !0;
  const i = r.connectedCallback, a = r.disconnectedCallback, s = r._load, d = r._renderEntries;
  r.connectedCallback = function() {
    const u = i?.call(this);
    return $o(this), this._v2049Observer?.disconnect?.(), this._v2049Frame = 0, this._v2049Observer = new MutationObserver(() => {
      this._v2049Frame || (this._v2049Frame = requestAnimationFrame(() => {
        this._v2049Frame = 0, $o(this);
      }));
    }), this.shadowRoot && this._v2049Observer.observe(this.shadowRoot, { childList: !0, subtree: !0 }), u;
  }, r.disconnectedCallback = function() {
    return this._v2049Observer?.disconnect?.(), this._v2049Observer = null, this._v2049Frame && cancelAnimationFrame(this._v2049Frame), this._v2049Frame = 0, a?.call(this);
  }, r._load = async function(...u) {
    const f = await s?.apply(this, u);
    return $o(this), f;
  }, r._renderEntries = function(...u) {
    const f = d?.apply(this, u);
    return $o(this), f;
  };
}
const Lu = "argus-v2050-widget-layouts";
function Cm(c) {
  const r = c.shadowRoot;
  if (!r) return;
  let i = r.getElementById(Lu);
  i || (i = document.createElement("style"), i.id = Lu, r.appendChild(i)), i.textContent = `
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
function zm(c) {
  const r = c.shadowRoot;
  r && r.querySelectorAll("#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal").forEach((i) => {
    const a = i;
    a.style.touchAction = "pan-y", a.style.setProperty("-webkit-overflow-scrolling", "touch"), a.scrollHeight > a.clientHeight && (a.style.overflowY = "auto");
  });
}
function Ho(c) {
  Cm(c), zm(c);
}
function Rm(c) {
  const r = c?.prototype;
  if (!r || r.__v2050WidgetLayouts) return;
  r.__v2050WidgetLayouts = !0;
  const i = r.connectedCallback, a = r.disconnectedCallback, s = r._load, d = r._renderEntries;
  r.connectedCallback = function() {
    const u = i?.call(this);
    return Ho(this), this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutFrame = 0, this._v2050LayoutObs = new MutationObserver(() => {
      this._v2050LayoutFrame || (this._v2050LayoutFrame = requestAnimationFrame(() => {
        this._v2050LayoutFrame = 0, Ho(this);
      }));
    }), this.shadowRoot && this._v2050LayoutObs.observe(this.shadowRoot, { childList: !0, subtree: !0 }), u;
  }, r.disconnectedCallback = function() {
    return this._v2050LayoutObs?.disconnect?.(), this._v2050LayoutObs = null, this._v2050LayoutFrame && cancelAnimationFrame(this._v2050LayoutFrame), this._v2050LayoutFrame = 0, a?.call(this);
  }, r._load = async function(...u) {
    const f = await s?.apply(this, u);
    return Ho(this), f;
  }, r._renderEntries = function(...u) {
    const f = d?.apply(this, u);
    return Ho(this), f;
  };
}
const Iu = "argus-more-info-hook-installed", Nu = "argus-more-info-dialog-styles";
function Am(c, r) {
  if (!c || !c.startsWith("alarm_control_panel.")) return !1;
  if (c.includes("argus")) return !0;
  const i = r?.states?.[c];
  return !!(i?.attributes?.argus_version || i?.attributes?.argus_entry_id);
}
function Pm(c) {
  if (!c || typeof c.getElementById == "function" && c.getElementById(Nu)) return;
  const r = c.createElement("style");
  r.id = Nu, r.textContent = `
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
  if (!Am(i, r)) return;
  const a = c.shadowRoot;
  if (!a) return;
  const s = a.querySelector("more-info-content") || a.querySelector("more-info-alarm_control_panel") || a.querySelector(".content") || a.querySelector("ha-dialog");
  if (!s) return;
  c.classList.add("argus-more-info-active");
  let d = a.querySelector(".argus-more-info-container");
  if (d) {
    const u = d.querySelector("argus-card") || d.querySelector("argus-panel-v2018");
    u && (u.hass = r);
  } else {
    d = document.createElement("div"), d.className = "argus-more-info-container";
    const u = customElements.get("argus-card") ? "argus-card" : customElements.get("argus-panel-v2018") ? "argus-panel-v2018" : null;
    if (u) {
      const g = document.createElement(u);
      if (typeof g.setConfig == "function")
        try {
          g.setConfig({ entity: i, compact: !0 });
        } catch {
        }
      g.hass = r, d.appendChild(g);
    }
    const f = a.querySelector("more-info-alarm_control_panel") || a.querySelector("more-info-content");
    f && f !== d ? (f.style.display = "none", f.parentNode?.insertBefore(d, f)) : s.appendChild(d);
  }
}
function Lm(c) {
  if (typeof window > "u" || typeof document > "u" || window[Iu]) return;
  window[Iu] = !0;
  try {
    Pm(document);
  } catch {
  }
  const r = (i) => {
    i.detail?.entityId && requestAnimationFrame(() => {
      try {
        const s = document.querySelector("home-assistant"), d = s?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
        d && Ou(d, s?.hass);
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
        const a = document.querySelector("home-assistant"), s = a?.shadowRoot?.querySelector("ha-more-info-dialog") || document.querySelector("ha-more-info-dialog");
        s && Ou(s, a?.hass);
      } catch {
      }
    }).observe(document.body, { childList: !0, subtree: !0 });
  } catch {
  }
}
function Dm(c) {
  c || (c = customElements.get("argus-panel-v2018"));
  const r = c;
  !r || r.__argusTypedFrontend || (r.__argusTypedFrontend = !0, sm(r), am(r), lm(r), hm(r), _m(r), vm(r), tm(r), Em(r), Rm(r), Lm(), om(r), nm(r));
}
export {
  Dm as applyArgusFrontend
};
