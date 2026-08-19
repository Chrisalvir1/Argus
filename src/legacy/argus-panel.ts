// @ts-nocheck
/**
 * Argus Home Hub – v2.0.99
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
  { code:'zh', flag:'🇨🇳', label:'中文 (简体)' },
  { code:'zh-Hant', flag:'🇭🇰', label:'中文 (繁體)' },
  { code:'ru', flag:'🇷🇺', label:'Русский' },
  { code:'hi', flag:'🇮🇳', label:'हिन्दी' },
  { code:'ar', flag:'🇸🇦', label:'العربية' },
  { code:'ko', flag:'🇰🇷', label:'한국어' },
  { code:'ja', flag:'🇯🇵', label:'日本語' },
  { code:'uk', flag:'🇺🇦', label:'Українська' },
];

// Values received from Home Assistant or persisted storage must never become
// executable markup when rendered through a template literal.
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
}[char]));
const TEXTS = {
  'es': {
    'accept': 'Aceptar',
    'access_control_title': '👥 Control de Acceso y Usuarios',
    'access_desc': 'Control global de seguridad, PIN maestro y administradores.',
    'access_pin_lbl': 'PIN de Acceso',
    'access_title': 'Control de Acceso y Usuarios',
    'action_disarmed': 'Desarmado',
    'action_failed': 'No se pudo realizar la acción',
    'action_sos': 'Alarma de Emergencia SOS',
    'action_sos_stop': 'SOS Detenido',
    'active_profile': 'Perfil Activo',
    'active_until': 'Vence',
    'activity_log': '📋 Historial de Actividad',
    'add_btn': '+ Añadir',
    'add_user': 'Añadir Usuario',
    'admin_only': 'Solo los administradores pueden gestionar usuarios y configuraciones.',
    'alarm_instance': 'Instancia de alarma',
    'all_sensors_bypassed': 'Todos los sensores configurados están omitidos.',
    'analysis_title': 'Análisis de Seguridad',
    'arm_time': 'Armado (s)',
    'arm_time_label': 'Tiempo de armado',
    'armed_away': 'Ausente',
    'armed_home': 'En Casa',
    'armed_night': 'Noche',
    'armed_vacation': 'Vacaciones',
    'arming': 'Armando',
    'automations': 'Automatizaciones',
    'available': 'Disponibles',
    'backdrop_mode_blur': 'Desenfoque',
    'backdrop_mode_dim': 'Atenuado',
    'backdrop_mode_none': 'Ninguno',
    'background_lbl': 'Fondo',
    'backup_desc': 'Exporta, restaura o reinicia la configuración de Argus.',
    'backup_title': 'Respaldo y Restauración',
    'badge_pin_reset': 'PIN Restablecido',
    'badge_pin_reset_failed': 'Fallo al Restablecer PIN',
    'battery_low': 'Batería baja',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Fondo por defecto del Hub',
    'bg_hub_selected_from_history': 'Fondo del Hub seleccionado del historial',
    'bg_hub_title': 'Fondo del Hub',
    'bg_image_opt': 'Imagen',
    'bg_none': 'Ninguno',
    'bg_panel_none': 'Sin fondo en el panel',
    'bg_panel_selected_from_history': 'Fondo del panel seleccionado del historial',
    'bg_panel_title': 'Fondo del Panel',
    'bg_photo': 'Foto',
    'bg_sound_opt': 'Sonido de fondo',
    'bg_video': 'Video animado',
    'bg_weather': 'Clima en vivo',
    'bridge_not_connected': 'Puente no conectado',
    'bridge_not_desc': 'El puente HomeKit no está conectado actualmente.',
    'bridge_paired': 'Puente vinculado',
    'bridge_paired_desc': 'El puente HomeKit está vinculado y activo.',
    'btn_away': '🔴 Ausente',
    'btn_create_argus_profile': '+ Crear Perfil de Argus',
    'btn_disarmed': '🔓 Desarmado',
    'btn_home': '🏠 En Casa',
    'btn_night': '🌙 Noche',
    'btn_sos': '🚨 SOS / PÁNICO',
    'btn_vacation': '✈️ Vacaciones',
    'bypass_lbl': '🚫 Omitir',
    'cancel': 'Cancelar',
    'cancel_btn': 'Cancelar',
    'cannot_arm': 'No se puede armar el sistema',
    'cannot_delete_last_admin': 'No se puede eliminar al único administrador.',
    'change_btn': 'Cambiar',
    'change_pin': 'Cambiar PIN de Acceso',
    'change_profile_picture': 'Cambiar foto en Personas de HA ↗',
    'claim_btn': 'Reclamar Administrador',
    'claim_desc': 'Tu instalación requiere un administrador para obtener acceso.',
    'claim_title': 'Actualización de Seguridad de Argus',
    'clear': 'Limpiar',
    'clear_history': 'Limpiar Historial',
    'clear_history_confirm': '¿Eliminar todo el historial de actividad?',
    'clear_log_btn': '🗑️ Limpiar historial',
    'clock_12h': '12 Horas (AM/PM)',
    'clock_24h': '24 Horas',
    'clock_auto': 'Automático (según idioma)',
    'clock_format_desc': 'Formato de hora en el reloj del encabezado',
    'clock_format_label': 'Formato de Reloj',
    'close': 'Cerrar',
    'collapse': 'Desplegar',
    'confirm': 'Confirmar',
    'confirm_pin': 'Confirmar PIN',
    'connected': 'CONECTADO',
    'create_ha': '+ Crear en HA',
    'current_pin': 'PIN Actual',
    'customize': 'Personalizar',
    'delete': 'Eliminar',
    'delete_btn_title': 'Eliminar',
    'delete_file_error': 'No se pudo eliminar el archivo: {error}',
    'delete_user_confirm': '¿Estás seguro de eliminar este usuario?',
    'delete_user_tooltip': 'Eliminar este usuario',
    'deselect_all': 'Deseleccionar todo',
    'details_notif': 'Detalles de Notificación',
    'disarm_time': 'Retraso de entrada (s)',
    'disarm_time_label': 'Tiempo de entrada',
    'disarmed': 'Desarmado',
    'done': 'Listo',
    'edit_btn': '✏️ Editar Nombre',
    'edit_dashboard': 'Editar tablero',
    'edit_dashboard_done': '✓ Listo',
    'emergency_call_active': 'Llamada de emergencia en curso...',
    'emergency_help': 'Configura el número local de emergencia (ej. 911 o 112). Se incluirá en alertas SOS.',
    'emergency_number_label': 'Número Local de Emergencia',
    'sos_config_title': 'CONFIGURACIÓN SOS',
    'export_history_title': 'Exportar Historial',
    'log_action_audit_log_cleared': 'Historial de actividad eliminado',
    'entry_sensors': 'Sensores de entrada',
    'error_loading_uploaded_files': 'Error al cargar archivos subidos.',
    'exit_to_ha': 'Salir a Home Assistant',
    'exp_indefinite': 'Indefinido',
    'exp_temporary': 'Temporal (Fecha/Hora)',
    'expand': 'Desplegar',
    'expired': 'Expirado',
    'export_btn': 'Exportar Configuración',
    'export_error': 'Error al exportar: {error}',
    'external_panels': 'Paneles de alarma externos',
    'file_choice': '¿Usar como imagen estática (Aceptar) o video animado (Cancelar)?',
    'file_delete_confirm': '¿Eliminar este archivo permanentemente?',
    'file_read_error': 'No se pudo leer el archivo.',
    'files_count': '{count} archivos',
    'files_count_short': '{count} arch.',
    'first_run_blocked_desc': 'Configuración bloqueada.',
    'first_run_blocked_title': 'Configuración Inicial Requerida',
    'first_run_desc': 'Configura tus credenciales iniciales de seguridad.',
    'first_run_pin_expl': 'Establece un PIN maestro para controlar el sistema.',
    'first_run_skip': 'Omitir por ahora',
    'first_run_start': 'Comenzar Configuración',
    'first_run_welcome': '¡Bienvenido a Argus!',
    'forgot_pin': '¿Olvidaste tu PIN?',
    'fullscreen_title': 'Pantalla Completa',
    'generic_error': 'Error: {error}',
    'github_action': 'Dar Estrella en GitHub',
    'github_desc': 'Si te gusta el proyecto, apóyanos con una estrella en GitHub.',
    'github_title': 'Apoya a Argus',
    'ha_account_linked': 'Cuenta HA: {name}',
    'ha_account_unavailable': 'Sin cuenta HA vinculada',
    'ha_admin_label': 'Administrador de HA',
    'ha_role_admin': 'Administrador',
    'ha_role_standard': 'Usuario Estándar',
    'ha_standard_user_label': 'Usuario de HA',
    'help': 'Ayuda',
    'hero_desc': 'Sistema de seguridad inteligente para el hogar',
    'hide': 'Ocultar',
    'hide_widget': 'Ocultar widget',
    'history_refresh': '🔄 Actualizar',
    'history_title': 'Historial de Actividad',
    'history_unavailable': 'No se pudo cargar el historial.',
    'home_default': 'Mi Hogar',
    'home_fallback': 'Mi Hogar',
    'home_name_label': 'Nombre del Hogar',
    'home_name_lbl': 'Nombre del Hogar',
    'home_name_modal_desc': 'Personaliza el nombre de tu residencia mostrado en el encabezado.',
    'home_name_modal_title': 'Editar Nombre del Hogar',
    'home_name_placeholder': 'Nombre de tu hogar...',
    'homekit_bridge': 'Puente HomeKit',
    'homekit_house': 'Casa de HomeKit',
    'homekit_not_paired': 'HomeKit no vinculado',
    'homekit_title': 'Integración HomeKit',
    'import_btn': 'Importar Configuración',
    'import_error': 'Error al importar: {error}',
    'import_success': 'Configuración restaurada. Recargando…',
    'initialization_error_desc': 'No se pudo conectar con el backend autorizado de Home Assistant.',
    'initialization_error_title': 'No se pudo iniciar Argus',
    'instances': 'Panel de Seguridad Argus',
    'introduce_pin': 'Introduce tu PIN de acceso',
    'invalid_config': 'Archivo de configuración no válido.',
    'invalid_pin_msg': 'PIN incorrecto',
    'is_admin': '¿Es Administrador?',
    'lang_select_title': 'Seleccionar Idioma',
    'lang_selector_lbl': '⚙️ Idioma / Language',
    'language': 'Idioma',
    'lbl_aesthetic_custom': 'Personalización y Ajustes',
    'lbl_load_file': 'Subir archivo',
    'lbl_uploaded_files': 'Archivos subidos',
    'light_siren_color': 'Color',
    'light_siren_flash': 'Destello suave si está disponible',
    'link_ha_user': 'Vincular usuario de HA',
    'linked_rules': 'Reglas vinculadas a Argus',
    'loading': 'Cargando…',
    'lock_if_open': 'Bloquear si abiertos',
    'log_action_access_pin_updated': 'PIN de acceso actualizado',
    'log_action_analysis': 'Análisis de Seguridad',
    'log_action_automation': 'Automatización Ejecutada',
    'log_action_backup_created': 'Respaldo Creado',
    'log_action_backup_restored': 'Configuración Restaurada',
    'log_action_first_run_completed': 'Configuración inicial completada',
    'log_action_fullscreen_unlocked': 'Pantalla completa desbloqueada',
    'log_action_master_pin_rejected': 'PIN maestro incorrecto rechazado',
    'log_action_mode_changed': 'Modo Cambiado',
    'log_action_profile_selected': 'Perfil Seleccionado',
    'log_action_rejected': 'Acción Rechazada',
    'log_action_save_ui': 'Configuración visual guardada',
    'log_action_schedule_applied': 'Horario Aplicado',
    'log_action_select_profile': 'Perfil cambiado',
    'log_action_sos': 'Alarma de Emergencia SOS',
    'log_action_sos_stopped': 'SOS Detenido',
    'log_action_state_restored': 'Estado Restaurado',
    'log_action_stop_sos': 'Alarma SOS detenida',
    'log_action_user_added': 'Usuario Creado',
    'log_action_user_deleted': 'Usuario Eliminado',
    'log_action_user_logged_in': 'Inicio de Sesión',
    'log_action_verify_access_pin': 'PIN de acceso verificado',
    'log_armed': 'ARMADO',
    'log_by': 'por',
    'log_detail_armed': 'Sistema armado',
    'log_detail_disarm': 'Sistema desarmado',
    'log_detail_pin_reset': 'PIN maestro restablecido por admin',
    'log_detail_pin_reset_failed': 'Intento de restablecer PIN rechazado',
    'log_detail_triggered': 'Activación automática',
    'log_disarmed': 'DESARMADO',
    'log_mode': 'Modo',
    'log_no_events': 'No hay eventos registrados en el historial.',
    'log_sensor': 'Sensor',
    'log_triggered': 'DISPARADA',
    'login_btn': 'Iniciar Sesión',
    'manual_arm': 'Armado manual',
    'manual_disarm': 'Desarmado manual',
    'master_pin_lbl': 'PIN Maestro',
    'modal_add_user': '+ Añadir Usuario',
    'modal_cancel': 'Cancelar',
    'modal_confirm': 'Confirmar',
    'modal_delete_confirm': '¿Eliminar este usuario?',
    'modal_edit_name': 'Editar Nombre',
    'modal_name_label': 'Nombre del Perfil',
    'modal_pin_help': 'Deja en blanco para no requerir PIN.',
    'modal_pin_title': 'PIN de Acceso',
    'modal_save': 'Guardar',
    'modal_user_added': 'Usuario creado exitosamente.',
    'mode_away': 'Ausente',
    'mode_home': 'En Casa',
    'mode_night': 'Noche',
    'mode_vacation': 'Vacaciones',
    'modes': 'Modos / SOS',
    'modes_sos': 'Modos / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Nunca activado',
    'new_pin': 'Nuevo PIN',
    'no_alarm_instance': 'No hay instancia de alarma disponible',
    'no_auto_linked': 'No hay automatizaciones vinculadas.',
    'no_files_uploaded': 'No hay archivos subidos.',
    'no_files_uploaded_short': 'Sin archivos',
    'no_instances': 'No hay instancias configuradas.',
    'no_results': 'Sin resultados',
    'no_rules': 'No hay reglas disponibles.',
    'no_sensors_configured': 'Sin sensores configurados',
    'no_unlinked_ha_accounts': 'No hay cuentas de HA sin vincular.',
    'no_users': 'No hay usuarios configurados.',
    'none_selected': 'Ninguno seleccionado',
    'notif_desc': 'Notificaciones móviles en eventos críticos.',
    'notif_no_services': 'No hay servicios de notificación móvil disponibles.',
    'notification_armed': '{user} armó el sistema en modo {mode}.',
    'notification_disarmed': '{user} desarmó el sistema.',
    'notifications_title': 'Notificaciones',
    'open_sensors': 'Sensores Abiertos',
    'open_sensors_explain': 'Los siguientes sensores están abiertos:\\\\n{names}\\\\n\\\\nCiérralos antes de armar o habilita Omitir.',
    'panic_state_unknown': 'No se pudo determinar el estado previo de la alarma.',
    'panic_stop_error': 'No se pudo detener la alarma: {error}',
    'panic_stopped': 'Alarma detenida; restaurado estado {state}',
    'pending': 'En espera',
    'pin_active_no': 'Sin PIN activo',
    'pin_active_yes': 'PIN activo',
    'pin_deleted': 'PIN eliminado',
    'pin_desc': 'Código de seguridad de 4 a 8 dígitos.',
    'pin_disarm_error': 'PIN incorrecto o error al desarmar',
    'pin_incorrect': 'PIN incorrecto',
    'pin_management': '🔑 Gestión de Pines',
    'pin_master_title': 'PIN Maestro',
    'pin_mismatch': 'Los PIN no coinciden',
    'pin_modal_desc': 'Ingresa tu PIN de seguridad para continuar.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Deja en blanco para eliminar el PIN maestro.',
    'pin_reset_admin_only': 'Solo el administrador puede restablecer el PIN.',
    'pin_reset_confirm': '¿Restablecer el PIN?',
    'pin_updated': 'PIN actualizado exitosamente',
    'profile_is_yours': 'Tu Perfil',
    'profile_needs_pin': 'Este perfil requiere PIN de acceso.',
    'profile_no_pin_access': 'Acceso libre sin PIN.',
    'remove_btn': 'Eliminar',
    'reset_btn': 'Restablecer a Valores de Fábrica',
    'reset_confirm': '¿Restablecer Argus a valores de fábrica? Se perderán todas las configuraciones.',
    'reset_dashboard': 'Restablecer diseño',
    'reset_error': 'Error al restablecer: {error}',
    'reset_error_auth': 'Autenticación requerida para restablecer.',
    'reset_success': 'Argus restablecido exitosamente.',
    'reset_widget': 'Restablecer widget',
    'retry_action': 'Reintentar',
    'role_argus_admin': 'Administrador de Argus',
    'role_argus_admin_short': 'Adm',
    'role_argus_standard': 'Usuario Estándar',
    'role_argus_user': 'Usuario Estándar',
    'role_argus_user_short': 'Std',
    'rules_tip': 'Consejo de automatización',
    'save_btn': 'Guardar',
    'save_config': '💾 Guardar Modo',
    'save_mode': 'Guardar Modo',
    'save_notif': 'Guardar Notificaciones',
    'save_user': 'Guardar Usuario',
    'saved': '✓ Guardado',
    'search_placeholder': 'Buscar dispositivo o entidad…',
    'search_select': 'Buscar y seleccionar…',
    'searching_auto': 'Buscando automatizaciones…',
    'select_all': 'Seleccionar todo',
    'select_btn': '+ Seleccionar',
    'select_entry_sensors': '+ Seleccionar sensores de entrada',
    'select_profile_subtitle': 'Selecciona tu perfil de usuario',
    'select_profile_title': 'Perfiles de Acceso',
    'selected_lbl': 'Seleccionados',
    'selector_accept': 'Aceptar',
    'selector_clear': 'Limpiar selección',
    'selector_close': 'Cerrar',
    'selector_panic': '🚨 Salidas de Emergencia SOS',
    'sensor_section': 'Sensores de Intrusión',
    'sensors_to_bypass': 'Sensores para omitir',
    'settings': '⚙️ Ajustes',
    'setup_access_pin': 'PIN de acceso al panel Argus (Opcional)',
    'setup_admin_name': 'Nombre de Administrador',
    'setup_master_pin': 'PIN maestro para armar/desarmar (Opcional)',
    'setup_required_action': 'Configurar Argus en Integraciones',
    'setup_required_desc': 'Argus está instalado pero aún no se ha creado una instancia.',
    'setup_required_title': 'Configuración de Argus Requerida',
    'siren_section': 'Sirenas',
    'size': 'Tamaño',
    'slide_disarm': 'Desliza para desarmar',
    'slide_sos': 'Desliza para activar SOS',
    'slide_sos_stop': 'Desliza para detener SOS',
    'sos_actions': 'Dispositivos y Acciones SOS',
    'sos_activated': 'SOS activado',
    'sos_call': 'Llamar a Emergencias',
    'sos_call_confirm': '¿Llamar al número local de emergencias ({number})?',
    'sos_call_help': 'Si este dispositivo no puede realizar llamadas, Argus enviará una notificación crítica.',
    'sos_confirm_text': 'Desliza para disparar la alarma inmediatamente.',
    'sos_confirm_title': '🚨 ¿Activar Alarma de Emergencia?',
    'sos_error': 'No se pudo activar SOS: {error}',
    'sos_no_outputs': 'No hay dispositivos de emergencia seleccionados',
    'sos_outputs_help': 'Estos dispositivos se encenderán al dispararse el SOS.',
    'sos_select_outputs': 'Seleccionar luces, sirenas o escenas',
    'sos_slide': 'Desliza para activar SOS',
    'sos_stop': 'DETENER SOS',
    'status_away': 'Ausente',
    'status_closed': 'CERRADO',
    'status_home': 'En Casa',
    'status_idle': 'Inactivo',
    'status_open': 'ABIERTO',
    'status_recording': 'Grabando',
    'support_title': 'Estado y Soporte',
    'switch_profile_btn': '👤 Cambiar de Perfil',
    'sync_panel_help': 'Sincroniza el estado con paneles de alarma externos.',
    'sync_panel_section': 'Paneles de Alarma Externos',
    'system_armed': 'SISTEMA ARMADO',
    'system_disarmed': 'SISTEMA DESARMADO',
    'system_triggered': '¡ALARMA ACTIVADA!',
    'temp_auto': 'Temperatura automática',
    'temp_displayed': 'Entidad de temperatura en vivo',
    'temp_notification_title': 'Argus — Alerta de Temperatura',
    'temp_thermostat': 'Termostato',
    'thermostat_alert_notif': 'Alerta de termostato',
    'times_section': '⏱️ Tiempos',
    'triggered': '¡Alarma Disparada!',
    'unavailable': 'No disponible',
    'undo_error': 'No se pudo deshacer: {error}',
    'undo_reset': 'Deshacer Restablecimiento',
    'undo_reset_btn': 'Deshacer Restablecimiento',
    'undo_success': 'Restablecimiento deshecho.',
    'unlinked_ha_accounts_title': 'Cuentas de Home Assistant',
    'unlock_kiosk': 'Desbloquear Kiosco',
    'update_pin': 'Actualizar PIN',
    'upload_error': 'Error al subir el archivo.',
    'url_placeholder': 'URL del fondo…',
    'use_for_hub': 'Usar en el Hub',
    'use_for_panel': 'Usar en el Panel',
    'use_ha_language': 'Usar idioma de Home Assistant',
    'user_default': 'Usuario',
    'user_exp_date': 'Fecha y hora de expiración',
    'user_exp_type': 'Tipo de expiración',
    'user_no_pin': 'Sin PIN de acceso',
    'user_pin': 'PIN de Acceso',
    'user_pin_action': 'Configurar PIN',
    'user_required': 'Se requieren nombre y PIN.',
    'user_role_action': 'Cambiar Rol',
    'user_role_label': 'Rol del Usuario',
    'username': 'Nombre de Usuario',
    'users_title': '👥 Control de Acceso y Usuarios',
    'vacation': 'Vacaciones',
    'wait_if_open': 'Esperar armado en espera',
    'waiting_sensors': 'ESPERANDO SENSORES',
    'waiting_sensors_count': 'ESPERANDO {count} SENSOR(ES)',
    'weather_auto': 'Detección automática de clima',
    'weather_source': 'Entidad de clima',
    'welcome_greeting': '¡Hola de nuevo!',
    'welcome_profile': 'Bienvenido, {name}',
    'wrong_pin': 'PIN incorrecto',
  },
  'en': {
    'accept': 'Accept',
    'access_control_title': '👥 Users & Access Control',
    'access_desc': 'Global security management, master PIN and administrators.',
    'access_pin_lbl': 'Access PIN',
    'access_title': 'Users & Access Control',
    'action_disarmed': 'Disarmed',
    'action_failed': 'Action could not be executed',
    'action_sos': 'Emergency SOS Alarm',
    'action_sos_stop': 'SOS Stopped',
    'active_profile': 'Active Profile',
    'active_until': 'Expires',
    'activity_log': '📋 Activity Log',
    'add_btn': '+ Add',
    'add_user': 'Add User',
    'admin_only': 'Only administrators can manage users and settings.',
    'alarm_instance': 'Alarm Instance',
    'all_sensors_bypassed': 'All configured sensors are bypassed.',
    'analysis_title': 'Security Analysis',
    'arm_time': 'Arming delay (s)',
    'arm_time_label': 'Arming Delay',
    'armed_away': 'Away',
    'armed_home': 'Home',
    'armed_night': 'Night',
    'armed_vacation': 'Vacation',
    'arming': 'Arming',
    'automations': 'Automations',
    'available': 'Available',
    'backdrop_mode_blur': 'Blur',
    'backdrop_mode_dim': 'Dimmed',
    'backdrop_mode_none': 'None',
    'background_lbl': 'Background',
    'backup_desc': 'Export, restore, or reset Argus configuration.',
    'backup_title': 'Backup & Restore',
    'badge_pin_reset': 'PIN Reset',
    'badge_pin_reset_failed': 'PIN Reset Failed',
    'battery_low': 'Low Battery',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Default Hub Background',
    'bg_hub_selected_from_history': 'Hub background selected from history',
    'bg_hub_title': 'Hub Background',
    'bg_image_opt': 'Static Image',
    'bg_none': 'None',
    'bg_panel_none': 'No panel background',
    'bg_panel_selected_from_history': 'Panel background selected from history',
    'bg_panel_title': 'Panel Background',
    'bg_photo': 'Photo',
    'bg_sound_opt': 'Background Sound',
    'bg_video': 'Animated Video',
    'bg_weather': 'Live Weather',
    'bridge_not_connected': 'Bridge Not Connected',
    'bridge_not_desc': 'The HomeKit bridge is currently disconnected.',
    'bridge_paired': 'Bridge Paired',
    'bridge_paired_desc': 'The HomeKit bridge is paired and active.',
    'btn_away': '🔴 Away',
    'btn_create_argus_profile': '+ Create Argus Profile',
    'btn_disarmed': '🔓 Disarmed',
    'btn_home': '🏠 Home',
    'btn_night': '🌙 Night',
    'btn_sos': '🚨 SOS / PANIC',
    'btn_vacation': '✈️ Vacation',
    'bypass_lbl': '🚫 Bypass',
    'cancel': 'Cancel',
    'cancel_btn': 'Cancel',
    'cannot_arm': 'Cannot arm system',
    'cannot_delete_last_admin': 'Cannot delete the only administrator.',
    'change_btn': 'Change',
    'change_pin': 'Change Access PIN',
    'change_profile_picture': 'Change photo in HA Persons ↗',
    'claim_btn': 'Claim Administrator',
    'claim_desc': 'Your installation requires an administrator to gain access.',
    'claim_title': 'Argus Security Update',
    'clear': 'Clear',
    'clear_history': 'Clear History',
    'clear_history_confirm': 'Delete all activity history?',
    'clear_log_btn': '🗑️ Clear Log',
    'clock_12h': '12-Hour (AM/PM)',
    'clock_24h': '24-Hour',
    'clock_auto': 'Automatic (by language)',
    'clock_format_desc': 'Clock format in top header',
    'clock_format_label': 'Clock Format',
    'close': 'Close',
    'collapse': 'Collapse',
    'confirm': 'Confirm',
    'confirm_pin': 'Confirm PIN',
    'connected': 'CONNECTED',
    'create_ha': '+ Create in HA',
    'current_pin': 'Current PIN',
    'customize': 'Customize',
    'delete': 'Delete',
    'delete_btn_title': 'Delete',
    'delete_file_error': 'Could not delete file: {error}',
    'delete_user_confirm': 'Are you sure you want to delete this user?',
    'delete_user_tooltip': 'Delete this user',
    'deselect_all': 'Deselect All',
    'details_notif': 'Notification Details',
    'disarm_time': 'Entry delay (s)',
    'disarm_time_label': 'Entry Delay',
    'disarmed': 'Disarmed',
    'done': 'Done',
    'edit_btn': '✏️ Edit Name',
    'edit_dashboard': 'Edit Dashboard',
    'edit_dashboard_done': '✓ Done',
    'emergency_call_active': 'Emergency call in progress...',
    'emergency_help': 'Set local emergency service number (e.g. 911 or 112). Included in SOS alerts.',
    'emergency_number_label': 'Local Emergency Number',
    'sos_config_title': 'SOS CONFIGURATION',
    'export_history_title': 'Export History',
    'log_action_audit_log_cleared': 'Activity history cleared',
    'entry_sensors': 'Entry sensors',
    'error_loading_uploaded_files': 'Error loading uploaded files.',
    'exit_to_ha': 'Exit to Home Assistant',
    'exp_indefinite': 'Indefinite',
    'exp_temporary': 'Temporary (Date/Time)',
    'expand': 'Expand',
    'expired': 'Expired',
    'export_btn': 'Export Configuration',
    'export_error': 'Export error: {error}',
    'external_panels': 'External Alarm Panels',
    'file_choice': 'Use as static image (OK) or animated video (Cancel)?',
    'file_delete_confirm': 'Delete this file permanently?',
    'file_read_error': 'Could not read file.',
    'files_count': '{count} files',
    'files_count_short': '{count} files',
    'first_run_blocked_desc': 'Setup is locked.',
    'first_run_blocked_title': 'Initial Setup Required',
    'first_run_desc': 'Configure your initial security credentials.',
    'first_run_pin_expl': 'Set a master PIN to control the system.',
    'first_run_skip': 'Skip for now',
    'first_run_start': 'Start Setup',
    'first_run_welcome': 'Welcome to Argus!',
    'forgot_pin': 'Forgot your PIN?',
    'fullscreen_title': 'Full Screen',
    'generic_error': 'Error: {error}',
    'github_action': 'Star on GitHub',
    'github_desc': 'If you enjoy this project, support development with a star on GitHub.',
    'github_title': 'Support Argus',
    'ha_account_linked': 'HA Account: {name}',
    'ha_account_unavailable': 'No HA account linked',
    'ha_admin_label': 'HA Administrator',
    'ha_role_admin': 'Administrator',
    'ha_role_standard': 'Standard User',
    'ha_standard_user_label': 'HA Standard User',
    'help': 'Help',
    'hero_desc': 'Intelligent home security system',
    'hide': 'Hide',
    'hide_widget': 'Hide widget',
    'history_refresh': '🔄 Refresh',
    'history_title': 'Activity History',
    'history_unavailable': 'Activity history unavailable.',
    'home_default': 'My Home',
    'home_fallback': 'My Home',
    'home_name_label': 'Home Name',
    'home_name_lbl': 'Home Name',
    'home_name_modal_desc': 'Customize your residence name shown in the top header.',
    'home_name_modal_title': 'Edit Home Name',
    'home_name_placeholder': 'Your home name...',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'HomeKit Home',
    'homekit_not_paired': 'HomeKit Not Paired',
    'homekit_title': 'HomeKit Integration',
    'import_btn': 'Import Configuration',
    'import_error': 'Import error: {error}',
    'import_success': 'Configuration restored. Reloading…',
    'initialization_error_desc': 'Could not connect to authorized Home Assistant backend.',
    'initialization_error_title': 'Could not start Argus',
    'instances': 'Argus Security Panel',
    'introduce_pin': 'Enter your security PIN',
    'invalid_config': 'Invalid configuration file.',
    'invalid_pin_msg': 'Incorrect PIN',
    'is_admin': 'Is Administrator?',
    'lang_select_title': 'Select Language',
    'lang_selector_lbl': '⚙️ Language',
    'language': 'Language',
    'lbl_aesthetic_custom': 'Personalization & Settings',
    'lbl_load_file': 'Upload file',
    'lbl_uploaded_files': 'Uploaded files',
    'light_siren_color': 'Color',
    'light_siren_flash': 'Gentle flash if available',
    'link_ha_user': 'Link HA User',
    'linked_rules': 'Rules linked to Argus',
    'loading': 'Loading…',
    'lock_if_open': 'Block if open',
    'log_action_access_pin_updated': 'Access PIN updated',
    'log_action_analysis': 'Security Analysis',
    'log_action_automation': 'Automation Executed',
    'log_action_backup_created': 'Backup Created',
    'log_action_backup_restored': 'Configuration Restored',
    'log_action_first_run_completed': 'Initial setup completed',
    'log_action_fullscreen_unlocked': 'Full screen unlocked',
    'log_action_master_pin_rejected': 'Wrong master PIN rejected',
    'log_action_mode_changed': 'Mode Changed',
    'log_action_profile_selected': 'Profile Selected',
    'log_action_rejected': 'Action Rejected',
    'log_action_save_ui': 'Visual settings saved',
    'log_action_schedule_applied': 'Schedule Applied',
    'log_action_select_profile': 'Profile switched',
    'log_action_sos': 'Emergency SOS Alarm',
    'log_action_sos_stopped': 'SOS Stopped',
    'log_action_state_restored': 'State Restored',
    'log_action_stop_sos': 'SOS alarm stopped',
    'log_action_user_added': 'User Created',
    'log_action_user_deleted': 'User Deleted',
    'log_action_user_logged_in': 'User Logged In',
    'log_action_verify_access_pin': 'Access PIN verified',
    'log_armed': 'ARMED',
    'log_by': 'by',
    'log_detail_armed': 'System armed',
    'log_detail_disarm': 'System disarmed',
    'log_detail_pin_reset': 'Master PIN reset by HA admin',
    'log_detail_pin_reset_failed': 'PIN reset attempt rejected',
    'log_detail_triggered': 'Automatic activation',
    'log_disarmed': 'DISARMED',
    'log_mode': 'Mode',
    'log_no_events': 'No events recorded in history.',
    'log_sensor': 'Sensor',
    'log_triggered': 'TRIGGERED',
    'login_btn': 'Log In',
    'manual_arm': 'Manual arming',
    'manual_disarm': 'Manual disarm',
    'master_pin_lbl': 'Master PIN',
    'modal_add_user': '+ Add User',
    'modal_cancel': 'Cancel',
    'modal_confirm': 'Confirm',
    'modal_delete_confirm': 'Delete this user?',
    'modal_edit_name': 'Edit Name',
    'modal_name_label': 'Profile Name',
    'modal_pin_help': 'Leave blank to not require a PIN.',
    'modal_pin_title': 'Access PIN',
    'modal_save': 'Save',
    'modal_user_added': 'User created successfully.',
    'mode_away': 'Away',
    'mode_home': 'Home',
    'mode_night': 'Night',
    'mode_vacation': 'Vacation',
    'modes': 'Modes / SOS',
    'modes_sos': 'Modes / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Never triggered',
    'new_pin': 'New PIN',
    'no_alarm_instance': 'No alarm instance available',
    'no_auto_linked': 'No automations linked.',
    'no_files_uploaded': 'No files uploaded.',
    'no_files_uploaded_short': 'No files',
    'no_instances': 'No alarm instances configured.',
    'no_results': 'No results',
    'no_rules': 'No rules available.',
    'no_sensors_configured': 'No sensors configured',
    'no_unlinked_ha_accounts': 'No unlinked HA accounts.',
    'no_users': 'No users configured.',
    'none_selected': 'None selected',
    'notif_desc': 'Mobile push notifications for critical events.',
    'notif_no_services': 'No mobile notification services available.',
    'notification_armed': '{user} armed the system in {mode} mode.',
    'notification_disarmed': '{user} disarmed the system.',
    'notifications_title': 'Notifications',
    'open_sensors': 'Open Sensors',
    'open_sensors_explain': 'The following sensors are open:\\\\n{names}\\\\n\\\\nClose them before arming or enable Bypass.',
    'panic_state_unknown': 'Could not determine previous alarm state.',
    'panic_stop_error': 'Could not stop alarm: {error}',
    'panic_stopped': 'Alarm stopped; restored state {state}',
    'pending': 'Pending',
    'pin_active_no': 'No active PIN',
    'pin_active_yes': 'Active PIN',
    'pin_deleted': 'PIN deleted',
    'pin_desc': '4 to 8 digit security code.',
    'pin_disarm_error': 'Wrong PIN or disarm error',
    'pin_incorrect': 'Wrong PIN',
    'pin_management': '🔑 PIN Management',
    'pin_master_title': 'Master PIN',
    'pin_mismatch': 'PINs do not match',
    'pin_modal_desc': 'Enter your security PIN to continue.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Leave blank to remove the master PIN.',
    'pin_reset_admin_only': 'Only administrators can reset the PIN.',
    'pin_reset_confirm': 'Reset PIN?',
    'pin_updated': 'PIN updated successfully',
    'profile_is_yours': 'Your Profile',
    'profile_needs_pin': 'This profile requires an access PIN.',
    'profile_no_pin_access': 'Free access without PIN.',
    'remove_btn': 'Remove',
    'reset_btn': 'Factory Reset',
    'reset_confirm': 'Reset Argus to factory defaults? All configurations and PINs will be lost.',
    'reset_dashboard': 'Reset Layout',
    'reset_error': 'Reset error: {error}',
    'reset_error_auth': 'Authentication required to reset.',
    'reset_success': 'Argus successfully reset.',
    'reset_widget': 'Reset widget',
    'retry_action': 'Retry',
    'role_argus_admin': 'Argus Administrator',
    'role_argus_admin_short': 'Admin',
    'role_argus_standard': 'Standard User',
    'role_argus_user': 'Standard User',
    'role_argus_user_short': 'User',
    'rules_tip': 'Automation tip',
    'save_btn': 'Save',
    'save_config': '💾 Save Mode',
    'save_mode': 'Save Mode',
    'save_notif': 'Save Notifications',
    'save_user': 'Save User',
    'saved': '✓ Saved',
    'search_placeholder': 'Search device or entity…',
    'search_select': 'Search and select…',
    'searching_auto': 'Searching automations…',
    'select_all': 'Select All',
    'select_btn': '+ Select',
    'select_entry_sensors': '+ Select Entry Sensors',
    'select_profile_subtitle': 'Select your user profile',
    'select_profile_title': 'Access Profiles',
    'selected_lbl': 'Selected',
    'selector_accept': 'Accept',
    'selector_clear': 'Clear Selection',
    'selector_close': 'Close',
    'selector_panic': '🚨 SOS Emergency Outputs',
    'sensor_section': 'Intrusion Sensors',
    'sensors_to_bypass': 'Sensors to bypass',
    'settings': '⚙️ Settings',
    'setup_access_pin': 'Argus panel access PIN (Optional)',
    'setup_admin_name': 'Administrator Name',
    'setup_master_pin': 'Master PIN for arm/disarm (Optional)',
    'setup_required_action': 'Configure Argus in Integrations',
    'setup_required_desc': 'Argus is installed but no instance has been created yet.',
    'setup_required_title': 'Argus Setup Required',
    'siren_section': 'Sirens',
    'size': 'Size',
    'slide_disarm': 'Slide to disarm',
    'slide_sos': 'Slide to trigger SOS',
    'slide_sos_stop': 'Slide to stop SOS',
    'sos_actions': 'SOS Devices and Actions',
    'sos_activated': 'SOS Activated',
    'sos_call': 'Call Emergency Services',
    'sos_call_confirm': 'Call local emergency service ({number})?',
    'sos_call_help': 'If this device cannot place phone calls, Argus will send a critical alert notification.',
    'sos_confirm_text': 'Slide to trigger the emergency alarm immediately.',
    'sos_confirm_title': '🚨 Trigger Emergency Alarm?',
    'sos_error': 'Could not trigger SOS: {error}',
    'sos_no_outputs': 'No emergency output devices selected',
    'sos_outputs_help': 'These devices will always turn on when SOS triggers.',
    'sos_select_outputs': 'Select lights, sirens, or scenes',
    'sos_slide': 'Slide to trigger SOS',
    'sos_stop': 'STOP SOS',
    'status_away': 'Away',
    'status_closed': 'CLOSED',
    'status_home': 'Home',
    'status_idle': 'Idle',
    'status_open': 'OPEN',
    'status_recording': 'Recording',
    'support_title': 'Status & Support',
    'switch_profile_btn': '👤 Switch Profile',
    'sync_panel_help': 'Sync state with external alarm panels.',
    'sync_panel_section': 'External Alarm Panels',
    'system_armed': 'SYSTEM ARMED',
    'system_disarmed': 'SYSTEM DISARMED',
    'system_triggered': 'ALARM TRIGGERED!',
    'temp_auto': 'Automatic temperature',
    'temp_displayed': 'Live temperature entity',
    'temp_notification_title': 'Argus — Temperature Alert',
    'temp_thermostat': 'Thermostat',
    'thermostat_alert_notif': 'Thermostat alert',
    'times_section': '⏱️ Timers',
    'triggered': 'Alarm Triggered!',
    'unavailable': 'Unavailable',
    'undo_error': 'Could not undo reset: {error}',
    'undo_reset': 'Undo Reset',
    'undo_reset_btn': 'Undo Reset',
    'undo_success': 'Reset undone successfully.',
    'unlinked_ha_accounts_title': 'Home Assistant Accounts',
    'unlock_kiosk': 'Unlock Kiosk',
    'update_pin': 'Update PIN',
    'upload_error': 'Upload error.',
    'url_placeholder': 'Background URL…',
    'use_for_hub': 'Use for Hub',
    'use_for_panel': 'Use for Panel',
    'use_ha_language': 'Use Home Assistant language',
    'user_default': 'User',
    'user_exp_date': 'Expiration date and time',
    'user_exp_type': 'Expiration type',
    'user_no_pin': 'No access PIN',
    'user_pin': 'Access PIN',
    'user_pin_action': 'Set PIN',
    'user_required': 'Name and PIN are required.',
    'user_role_action': 'Change Role',
    'user_role_label': 'User Role',
    'username': 'Username',
    'users_title': '👥 Users & Access Control',
    'vacation': 'Vacation',
    'wait_if_open': 'Wait for sensors to close',
    'waiting_sensors': 'WAITING FOR SENSORS',
    'waiting_sensors_count': 'WAITING FOR {count} SENSOR(S)',
    'weather_auto': 'Automatic weather detection',
    'weather_source': 'Weather entity',
    'welcome_greeting': 'Welcome back!',
    'welcome_profile': 'Welcome, {name}',
    'wrong_pin': 'Wrong PIN',
  },
  'fr': {
    'accept': 'Accepter',
    'access_control_title': '👥 Utilisateurs et Contrôle d\'accès',
    'access_desc': 'Gestion globale de la sécurité, code PIN principal et administrateurs.',
    'access_pin_lbl': 'PIN d\'accès',
    'access_title': 'Utilisateurs et Contrôle d\'accès',
    'action_disarmed': 'Désarmé',
    'action_failed': 'L\'action n\'a pas pu être exécutée',
    'action_sos': 'Alarme SOS d\'urgence',
    'action_sos_stop': 'SOS arrêté',
    'active_profile': 'Profil actif',
    'active_until': 'Expire',
    'activity_log': '📋 Journal d\'activité',
    'add_btn': '+ Ajouter',
    'add_user': 'Ajouter un utilisateur',
    'admin_only': 'Seuls les administrateurs peuvent gérer les utilisateurs et les paramètres.',
    'alarm_instance': 'Instance d\'alarme',
    'all_sensors_bypassed': 'Tous les capteurs configurés sont contournés.',
    'analysis_title': 'Analyse de sécurité',
    'arm_time': 'Retard(s) d\'armement',
    'arm_time_label': 'Délai d\'armement',
    'armed_away': 'Loin',
    'armed_home': 'Maison',
    'armed_night': 'Nuit',
    'armed_vacation': 'Vacances',
    'arming': 'Armement',
    'automations': 'Automatisations',
    'available': 'Disponible',
    'backdrop_mode_blur': 'Se brouiller',
    'backdrop_mode_dim': 'Estompé',
    'backdrop_mode_none': 'Aucun',
    'background_lbl': 'Arrière-plan',
    'backup_desc': 'Exportez, restaurez ou réinitialisez la configuration Argus.',
    'backup_title': 'Sauvegarde & Restauration',
    'badge_pin_reset': 'Réinitialisation du code PIN',
    'badge_pin_reset_failed': 'Échec de la réinitialisation du code PIN',
    'battery_low': 'Batterie faible',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Arrière-plan du hub par défaut',
    'bg_hub_selected_from_history': 'Arrière-plan du hub sélectionné dans l\'historique',
    'bg_hub_title': 'Contexte du hub',
    'bg_image_opt': 'Image statique',
    'bg_none': 'Aucun',
    'bg_panel_none': 'Pas de fond de panneau',
    'bg_panel_selected_from_history': 'Arrière-plan du panneau sélectionné dans l\'historique',
    'bg_panel_title': 'Fond du panneau',
    'bg_photo': 'Photo',
    'bg_sound_opt': 'Son de fond',
    'bg_video': 'Vidéo animée',
    'bg_weather': 'Météo en direct',
    'bridge_not_connected': 'Pont non connecté',
    'bridge_not_desc': 'Le pont HomeKit est actuellement déconnecté.',
    'bridge_paired': 'Pont jumelé',
    'bridge_paired_desc': 'Le pont HomeKit est couplé et actif.',
    'btn_away': '🔴 Absent',
    'btn_create_argus_profile': '+ Créer un profil Argus',
    'btn_disarmed': '🔓 Désarmé',
    'btn_home': '🏠 Maison',
    'btn_night': '🌙 Nuit',
    'btn_sos': '🚨 SOS / PANIQUE',
    'btn_vacation': '✈️ Vacances',
    'bypass_lbl': '🚫 Contourner',
    'cancel': 'Annuler',
    'cancel_btn': 'Annuler',
    'cannot_arm': 'Impossible d\'armer le système',
    'cannot_delete_last_admin': 'Impossible de supprimer le seul administrateur.',
    'change_btn': 'Modifier',
    'change_pin': 'Modifier le code PIN d\'accès',
    'change_profile_picture': 'Changer la photo dans HA Personnes ↗',
    'claim_btn': 'Administrateur des réclamations',
    'claim_desc': 'Votre installation nécessite un administrateur pour y accéder.',
    'claim_title': 'Mise à jour de sécurité Argus',
    'clear': 'Clair',
    'clear_history': 'Effacer l\'historique',
    'clear_history_confirm': 'Supprimer tout l\'historique des activités ?',
    'clear_log_btn': '🗑️ Effacer le journal',
    'clock_12h': '12 heures (AM/PM)',
    'clock_24h': '24 heures',
    'clock_auto': 'Automatique (par langue)',
    'clock_format_desc': 'Format de l\'horloge dans l\'en-tête supérieur',
    'clock_format_label': 'Format de l\'horloge',
    'close': 'Fermer',
    'collapse': 'Déplier',
    'confirm': 'Confirmer',
    'confirm_pin': 'Confirmer le code PIN',
    'connected': 'CONNECTÉ',
    'create_ha': '+ Créer en HA',
    'current_pin': 'Code PIN actuel',
    'customize': 'Personnaliser',
    'delete': 'Supprimer',
    'delete_btn_title': 'Supprimer',
    'delete_file_error': 'Impossible de supprimer le fichier : {erreur}',
    'delete_user_confirm': 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
    'delete_user_tooltip': 'Supprimer cet utilisateur',
    'deselect_all': 'Désélectionner tout',
    'details_notif': 'Détails des notifications',
    'disarm_time': 'Délai(s) d\'entrée',
    'disarm_time_label': 'Délai d\'entrée',
    'disarmed': 'Désarmé',
    'done': 'Terminé',
    'edit_btn': '✏️ Modifier le nom',
    'edit_dashboard': 'Modifier le tableau',
    'edit_dashboard_done': '✓ Terminé',
    'emergency_call_active': 'Appel d\'urgence en cours...',
    'emergency_help': 'Définissez le numéro du service d’urgence local (par exemple 911 ou 112). Inclus dans les alertes SOS.',
    'emergency_number_label': '🚨 Numéro d\'urgence local',
    'entry_sensors': 'Capteurs d\'entrée',
    'error_loading_uploaded_files': 'Erreur lors du chargement des fichiers téléchargés.',
    'exit_to_ha': 'Quitter vers Home Assistant',
    'exp_indefinite': 'Indéfini',
    'exp_temporary': 'Temporaire (Date/Heure)',
    'expand': 'Déplier',
    'expired': 'Expiré',
    'export_btn': 'Exporter la Configuration',
    'export_error': 'Erreur d\'exportation : {erreur}',
    'external_panels': 'Panneaux d\'alarme externes',
    'file_choice': 'Utiliser comme image statique (OK) ou vidéo animée (Annuler) ?',
    'file_delete_confirm': 'Supprimer ce fichier définitivement ?',
    'file_read_error': 'Impossible de lire le fichier.',
    'files_count': '{count} fichiers',
    'files_count_short': '{count} fichiers',
    'first_run_blocked_desc': 'L\'installation est verrouillée.',
    'first_run_blocked_title': 'Configuration initiale requise',
    'first_run_desc': 'Configurez vos informations d\'identification de sécurité initiales.',
    'first_run_pin_expl': 'Définissez un code PIN principal pour contrôler le système.',
    'first_run_skip': 'Passer pour l\'instant',
    'first_run_start': 'Démarrer la configuration',
    'first_run_welcome': 'Bienvenue à Argus !',
    'forgot_pin': 'Vous avez oublié votre code PIN ?',
    'fullscreen_title': 'Plein écran',
    'generic_error': 'Erreur : {erreur}',
    'github_action': 'Étoile sur GitHub',
    'github_desc': 'Si vous appréciez ce projet, soutenez le développement avec une étoile sur GitHub.',
    'github_title': 'Soutenez Argus',
    'ha_account': 'Compte HA',
    'ha_account_linked': 'Compte haute disponibilité : {nom}',
    'ha_account_unavailable': 'Aucun compte HA associé',
    'ha_admin_label': 'Administrateur haute disponibilité',
    'ha_role_admin': 'Administrateur',
    'ha_role_standard': 'Utilisateur standard',
    'ha_standard_user_label': 'Utilisateur standard haute disponibilité',
    'help': 'Aide',
    'hero_desc': 'Système de sécurité résidentiel intelligent',
    'hide': 'Masquer',
    'hide_widget': 'Masquer le widget',
    'history_refresh': '🔄 Actualiser',
    'history_title': 'Historique d\'activité',
    'history_unavailable': 'Historique d\'activité indisponible.',
    'home_default': 'Ma maison',
    'home_fallback': 'Ma maison',
    'home_name_label': 'Nom de la maison',
    'home_name_lbl': 'Nom de la maison',
    'home_name_modal_desc': 'Personnalisez le nom de votre résidence affiché dans l\'en-tête supérieur.',
    'home_name_modal_title': 'Modifier le nom de la maison',
    'home_name_placeholder': 'Le nom de votre maison...',
    'homekit_bridge': 'Pont HomeKit',
    'homekit_house': 'AccueilKit',
    'homekit_not_paired': 'HomeKit non couplé',
    'homekit_title': 'Intégration HomeKit',
    'import_btn': 'Importer la Configuration',
    'import_error': 'Erreur d\'importation : {erreur}',
    'import_success': 'Configuration restaurée. Rechargement…',
    'initialization_error_desc': 'Impossible de se connecter au backend autorisé de Home Assistant.',
    'initialization_error_title': 'Impossible de démarrer Argus',
    'instances': 'Panneau de Sécurité Argus',
    'introduce_pin': 'Entrez votre code PIN de sécurité',
    'invalid_config': 'Fichier de configuration invalide.',
    'invalid_pin_msg': 'Code PIN incorrect',
    'is_admin': 'Est-ce qu\'administrateur ?',
    'lang_select_title': 'Sélectionnez la langue',
    'lang_selector_lbl': '⚙️ Langue',
    'language': 'Langue',
    'lbl_aesthetic_custom': 'Personnalisation & Paramètres',
    'lbl_load_file': 'Télécharger le fichier',
    'lbl_uploaded_files': 'Fichiers téléchargés',
    'light_siren_color': 'Couleur',
    'light_siren_flash': 'Flash doux si disponible',
    'link_ha_user': 'Lier l\'utilisateur HA',
    'linked_rules': 'Règles liées à Argus',
    'loading': 'Chargement…',
    'lock_if_open': 'Bloquer si ouvert',
    'log_action_access_pin_updated': 'Code d\'accès mis à jour',
    'log_action_analysis': 'Analyse de sécurité',
    'log_action_automation': 'Automatisation exécutée',
    'log_action_backup_created': 'Sauvegarde créée',
    'log_action_backup_restored': 'Configuration restaurée',
    'log_action_first_run_completed': 'Configuration initiale terminée',
    'log_action_fullscreen_unlocked': 'Plein écran débloqué',
    'log_action_master_pin_rejected': 'Mauvais code PIN principal rejeté',
    'log_action_mode_changed': 'Mode modifié',
    'log_action_profile_selected': 'Profil sélectionné',
    'log_action_rejected': 'Action rejetée',
    'log_action_save_ui': 'Paramètres visuels enregistrés',
    'log_action_schedule_applied': 'Calendrier appliqué',
    'log_action_select_profile': 'Profil changé',
    'log_action_sos': 'Alarme SOS d\'urgence',
    'log_action_sos_stopped': 'SOS arrêté',
    'log_action_state_restored': 'État restauré',
    'log_action_stop_sos': 'Alarme SOS arrêtée',
    'log_action_user_added': 'Utilisateur créé',
    'log_action_user_deleted': 'Utilisateur supprimé',
    'log_action_user_logged_in': 'Utilisateur connecté',
    'log_action_verify_access_pin': 'Code d\'accès vérifié',
    'log_armed': 'ARMÉ',
    'log_by': 'par',
    'log_detail_armed': 'Système armé',
    'log_detail_disarm': 'Système désarmé',
    'log_detail_pin_reset': 'Réinitialisation du code PIN principal par l\'administrateur HA',
    'log_detail_pin_reset_failed': 'Tentative de réinitialisation du code PIN rejetée',
    'log_detail_triggered': 'Activation automatique',
    'log_disarmed': 'DÉSARMÉ',
    'log_mode': 'Mode',
    'log_no_events': 'Aucun événement enregistré dans l\'historique.',
    'log_sensor': 'Capteur',
    'log_triggered': 'DÉCLENCHÉ',
    'login_btn': 'Se connecter',
    'manual_arm': 'Armement manuel',
    'manual_disarm': 'Désarmement manuel',
    'master_pin_lbl': 'PIN Maître',
    'modal_add_user': '+ Ajouter un utilisateur',
    'modal_cancel': 'Annuler',
    'modal_confirm': 'Confirmer',
    'modal_delete_confirm': 'Supprimer cet utilisateur ?',
    'modal_edit_name': 'Modifier le nom',
    'modal_name_label': 'Nom du profil',
    'modal_pin_help': 'Laissez vide pour ne pas exiger de code PIN.',
    'modal_pin_title': 'Accéder au code PIN',
    'modal_save': 'Sauvegarder',
    'modal_user_added': 'Utilisateur créé avec succès.',
    'mode_away': 'Absent',
    'mode_home': 'Maison',
    'mode_night': 'Nuit',
    'mode_vacation': 'Vacances',
    'modes': 'Modes / SOS',
    'modes_sos': 'Modes / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Jamais déclenché',
    'new_pin': 'Nouveau code PIN',
    'no_alarm_instance': 'Aucune instance d\'alarme disponible',
    'no_auto_linked': 'Aucun automatisme lié.',
    'no_files_uploaded': 'Aucun fichier téléchargé.',
    'no_files_uploaded_short': 'Aucun fichier',
    'no_instances': 'Aucune instance d\'alarme configurée.',
    'no_results': 'Aucun résultat',
    'no_rules': 'Aucune règle disponible.',
    'no_sensors_configured': 'Aucun capteur configuré',
    'no_unlinked_ha_accounts': 'Aucun compte HA non lié.',
    'no_users': 'Aucun utilisateur enregistré',
    'none_selected': 'Aucun sélectionné',
    'notif_desc': 'Notifications push mobiles pour les événements critiques.',
    'notif_no_services': 'Aucun service de notification mobile disponible.',
    'notification_armed': '{user} a armé le système en mode {mode}.',
    'notification_disarmed': '{user} a désarmé le système.',
    'notifications_title': 'Notifications',
    'open_sensors': 'Capteurs ouverts',
    'open_sensors_explain': 'Les capteurs suivants sont ouverts :\\\\n{noms}\\\\n\\\\nFermez-les avant l\'armement ou activez le contournement.',
    'panic_state_unknown': 'Impossible de déterminer l’état d’alarme précédent.',
    'panic_stop_error': 'Impossible d\'arrêter l\'alarme : {erreur}',
    'panic_stopped': 'Alarme arrêtée ; état restauré {état}',
    'pending': 'En attente',
    'pin_active_no': 'Aucun PIN actif',
    'pin_active_yes': 'PIN Actif',
    'pin_deleted': 'Code PIN supprimé',
    'pin_desc': 'Code de sécurité de 4 à 8 chiffres.',
    'pin_disarm_error': 'Mauvais code PIN ou erreur de désarmement',
    'pin_incorrect': 'Mauvais code PIN',
    'pin_management': '🔑 Gestion des codes PIN',
    'pin_master_title': 'PIN Maître',
    'pin_mismatch': 'Les codes PIN ne correspondent pas',
    'pin_modal_desc': 'Entrez votre code PIN de sécurité pour continuer.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Laissez vide pour supprimer le code PIN principal.',
    'pin_reset_admin_only': 'Seuls les administrateurs peuvent réinitialiser le code PIN.',
    'pin_reset_confirm': 'Réinitialiser le code ?',
    'pin_updated': 'Code PIN mis à jour avec succès',
    'profile_is_yours': 'Votre Profil',
    'profile_needs_pin': 'Ce profil nécessite un code PIN d\'accès.',
    'profile_no_pin_access': 'Accès gratuit sans code PIN.',
    'remove_btn': 'Supprimer',
    'reset_btn': 'Réinitialisation d\'usine',
    'reset_confirm': 'Réinitialiser Argus aux paramètres d\'usine ? Toutes les configurations et tous les codes PIN seront perdus.',
    'reset_dashboard': 'Réinitialiser la disposition',
    'reset_error': 'Erreur de réinitialisation : {erreur}',
    'reset_error_auth': 'Authentification requise pour réinitialiser.',
    'reset_success': 'Argus a été réinitialisé avec succès.',
    'reset_widget': 'Réinitialiser le widget',
    'retry_action': 'Réessayer',
    'role_argus_admin': 'Administrateur Argus',
    'role_argus_admin_short': 'Administrateur',
    'role_argus_standard': 'Utilisateur standard',
    'role_argus_user': 'Utilisateur standard',
    'role_argus_user_short': 'Utilisateur',
    'rules_tip': 'Astuce d\'automatisation',
    'save_btn': 'Enregistrer',
    'save_config': '💾 Enregistrer le Mode',
    'save_mode': 'Mode Enregistrer',
    'save_notif': 'Enregistrer les notifications',
    'save_user': 'Enregistrer l\'utilisateur',
    'saved': '✓ Enregistré',
    'search_placeholder': 'Rechercher un appareil ou une entité…',
    'search_select': 'Recherchez et sélectionnez…',
    'searching_auto': 'Recherche d\'automatisations…',
    'select_all': 'Sélectionner tout',
    'select_btn': '+ Sélectionner',
    'select_entry_sensors': '+ Sélectionner les capteurs d\'entrée',
    'select_profile_subtitle': 'Sélectionnez votre profil utilisateur',
    'select_profile_title': 'Accéder aux profils',
    'selected_lbl': 'Choisi',
    'selector_accept': 'Accepter',
    'selector_clear': 'Effacer la sélection',
    'selector_close': 'Fermer',
    'selector_panic': '🚨 Sorties d\'urgence SOS',
    'sensor_section': 'Capteurs d\'intrusion',
    'sensors_to_bypass': 'Capteurs à contourner',
    'settings': '⚙️ Paramètres',
    'setup_access_pin': 'Code PIN d\'accès au panneau Argus (facultatif)',
    'setup_admin_name': 'Nom de l\'administrateur',
    'setup_master_pin': 'Code PIN principal pour armer/désarmer (en option)',
    'setup_required_action': 'Configurer Argus dans les intégrations',
    'setup_required_desc': 'Argus est installé mais aucune instance n\'a encore été créée.',
    'setup_required_title': 'Configuration Argus requise',
    'siren_section': 'Sirènes',
    'size': 'Taille',
    'slide_disarm': 'Glisser pour désarmer',
    'slide_sos': 'Glisser pour déclencher SOS',
    'slide_sos_stop': 'Glisser pour arrêter SOS',
    'sos_actions': '🚨Actions SOS',
    'sos_activated': 'SOS activé',
    'sos_call': 'Appeler les services d\'urgence',
    'sos_call_confirm': 'Appeler le service d\'urgence local ({numéro}) ?',
    'sos_call_help': 'Si cet appareil ne peut pas passer d\'appels téléphoniques, Argus enverra une notification d\'alerte critique.',
    'sos_confirm_text': 'Faites glisser pour déclencher immédiatement l\'alarme d\'urgence.',
    'sos_confirm_title': '🚨 Déclencher une alarme d\'urgence ?',
    'sos_error': 'Impossible de déclencher le SOS : {erreur}',
    'sos_no_outputs': 'Aucun dispositif de sortie d\'urgence sélectionné',
    'sos_outputs_help': 'Ces appareils s\'allumeront toujours lorsque SOS se déclenche.',
    'sos_select_outputs': 'Sélectionnez des lumières, des sirènes ou des scènes',
    'sos_slide': 'Faites glisser pour déclencher SOS',
    'sos_stop': 'ARRÊTER SOS',
    'status_away': 'Loin',
    'status_closed': 'FERMÉ',
    'status_home': 'Maison',
    'status_idle': 'Inactif',
    'status_open': 'OUVERT',
    'status_recording': 'Enregistrement',
    'support_title': 'Statut et assistance',
    'switch_profile_btn': '👤 Changer de Profil',
    'sync_panel_help': 'État de synchronisation avec les panneaux d\'alarme externes.',
    'sync_panel_section': 'Panneaux d\'alarme externes',
    'system_armed': 'SYSTÈME ARMÉ',
    'system_disarmed': 'SYSTÈME DÉSARMÉ',
    'system_triggered': 'ALARME DÉCLENCHÉE !',
    'temp_auto': 'Température automatique',
    'temp_displayed': 'Entité de température en direct',
    'temp_notification_title': 'Argus — Alerte de température',
    'temp_thermostat': 'Thermostat',
    'thermostat_alert_notif': 'Alerte thermostat',
    'times_section': '⏱️ Délais',
    'triggered': 'Alarme déclenchée !',
    'unavailable': 'Indisponible',
    'undo_error': 'Impossible d\'annuler la réinitialisation : {erreur}',
    'undo_reset': 'Annuler la réinitialisation',
    'undo_reset_btn': 'Annuler la réinitialisation',
    'undo_success': 'Réinitialisation annulée avec succès.',
    'unlinked_ha_accounts_title': 'Comptes d\'assistant à domicile',
    'unlock_kiosk': 'Déverrouiller le kiosque',
    'update_pin': 'Mettre à jour le code PIN',
    'upload_error': 'Erreur de téléchargement.',
    'url_placeholder': 'URL d\'arrière-plan…',
    'use_for_hub': 'Utiliser pour le hub',
    'use_for_panel': 'Utiliser pour le panneau',
    'use_ha_language': 'Utiliser la langue de Home Assistant',
    'user_default': 'Utilisateur',
    'user_exp_date': 'Date et heure d\'expiration',
    'user_exp_type': 'Type d\'expiration',
    'user_no_pin': 'Aucun code PIN d\'accès',
    'user_pin': 'Accéder au code PIN',
    'user_pin_action': 'Définir le code PIN',
    'user_required': 'Le nom et le code PIN sont requis.',
    'user_role_action': 'Changer de rôle',
    'user_role_label': 'Rôle de l\'utilisateur',
    'username': 'Nom d\'utilisateur',
    'users_title': '👥 Utilisateurs et contrôle d\'accès',
    'vacation': 'Vacances',
    'wait_if_open': 'Attendre la fermeture',
    'waiting_sensors': 'EN ATTENTE DES CAPTEURS',
    'waiting_sensors_count': 'EN ATTENTE DE {count} CAPTEUR(S)',
    'weather_auto': 'Détection météo automatique',
    'weather_source': 'Entité météo',
    'welcome_greeting': 'Content de te revoir!',
    'welcome_profile': 'Bienvenue, {nom}',
    'wrong_pin': 'Mauvais code PIN',
  },
  'pt': {
    'accept': 'Aceitar',
    'access_control_title': '👥 Usuários e Controle de Acesso',
    'access_desc': 'Gerenciamento de segurança global, PIN mestre e administradores.',
    'access_pin_lbl': 'PIN de Acesso',
    'access_title': 'Usuários e Controle de Acesso',
    'action_disarmed': 'Desarmado',
    'action_failed': 'A ação não pôde ser executada',
    'action_sos': 'Alarme SOS de Emergência',
    'action_sos_stop': 'SOS parado',
    'active_profile': 'Perfil ativo',
    'active_until': 'Expira',
    'activity_log': '📋 Registro de atividades',
    'add_btn': '+ Adicionar',
    'add_user': 'Adicionar usuário',
    'admin_only': 'Somente administradores podem gerenciar usuários e configurações.',
    'alarm_instance': 'Instância de alarme',
    'all_sensors_bypassed': 'Todos os sensores configurados são ignorados.',
    'analysis_title': 'Análise de Segurança',
    'arm_time': 'Atraso(s) de armar',
    'arm_time_label': 'Atraso de Armamento',
    'armed_away': 'Ausente',
    'armed_home': 'Lar',
    'armed_night': 'Noite',
    'armed_vacation': 'Férias',
    'arming': 'Armando',
    'automations': 'Automações',
    'available': 'Disponível',
    'backdrop_mode_blur': 'Borrão',
    'backdrop_mode_dim': 'Esmaecido',
    'backdrop_mode_none': 'Nenhum',
    'background_lbl': 'Fundo',
    'backup_desc': 'Exporte, restaure ou redefina a configuração do Argus.',
    'backup_title': 'Backup & Restauração',
    'badge_pin_reset': 'Redefinir PIN',
    'badge_pin_reset_failed': 'Falha na redefinição do PIN',
    'battery_low': 'Bateria fraca',
    'bg_collage': 'Colagem',
    'bg_hub_default': 'Plano de fundo padrão do hub',
    'bg_hub_selected_from_history': 'Plano de fundo do hub selecionado no histórico',
    'bg_hub_title': 'Plano de fundo do hub',
    'bg_image_opt': 'Imagem estática',
    'bg_none': 'Nenhum',
    'bg_panel_none': 'Sem fundo do painel',
    'bg_panel_selected_from_history': 'Plano de fundo do painel selecionado no histórico',
    'bg_panel_title': 'Fundo do painel',
    'bg_photo': 'Foto',
    'bg_sound_opt': 'Som de fundo',
    'bg_video': 'Vídeo animado',
    'bg_weather': 'Clima ao vivo',
    'bridge_not_connected': 'Ponte não conectada',
    'bridge_not_desc': 'A ponte HomeKit está desconectada no momento.',
    'bridge_paired': 'Ponte emparelhada',
    'bridge_paired_desc': 'A ponte HomeKit está emparelhada e ativa.',
    'btn_away': '🔴 Ausente',
    'btn_create_argus_profile': '+ Criar perfil Argus',
    'btn_disarmed': '🔓 Desarmado',
    'btn_home': '🏠 Em Casa',
    'btn_night': '🌙 Noite',
    'btn_sos': '🚨 SOS / PÂNICO',
    'btn_vacation': '✈️ Férias',
    'bypass_lbl': '🚫 Ignorar',
    'cancel': 'Cancelar',
    'cancel_btn': 'Cancelar',
    'cannot_arm': 'Não é possível armar o sistema',
    'cannot_delete_last_admin': 'Não é possível excluir o único administrador.',
    'change_btn': 'Alterar',
    'change_pin': 'Alterar PIN de acesso',
    'change_profile_picture': 'Alterar foto em HA Pessoas ↗',
    'claim_btn': 'Administrador de reivindicações',
    'claim_desc': 'Sua instalação requer um administrador para obter acesso.',
    'claim_title': 'Atualização de segurança Argus',
    'clear': 'Claro',
    'clear_history': 'Limpar histórico',
    'clear_history_confirm': 'Excluir todo o histórico de atividades?',
    'clear_log_btn': '🗑️ Limpar registro',
    'clock_12h': '12 horas (AM/PM)',
    'clock_24h': '24 horas',
    'clock_auto': 'Automático (por idioma)',
    'clock_format_desc': 'Formato do relógio no cabeçalho superior',
    'clock_format_label': 'Formato do relógio',
    'close': 'Fechar',
    'collapse': 'Expandir',
    'confirm': 'Confirmar',
    'confirm_pin': 'Confirmar PIN',
    'connected': 'CONECTADO',
    'create_ha': '+ Criar em HA',
    'current_pin': 'PIN atual',
    'customize': 'Personalizar',
    'delete': 'Excluir',
    'delete_btn_title': 'Excluir',
    'delete_file_error': 'Não foi possível excluir o arquivo: {error}',
    'delete_user_confirm': 'Tem certeza de que deseja excluir este usuário?',
    'delete_user_tooltip': 'Excluir este usuário',
    'deselect_all': 'Desmarcar tudo',
    'details_notif': 'Detalhes da notificação',
    'disarm_time': 'Atraso(s) de entrada',
    'disarm_time_label': 'Atraso de entrada',
    'disarmed': 'Desarmado',
    'done': 'Concluído',
    'edit_btn': '✏️ Editar nome',
    'edit_dashboard': 'Editar painel',
    'edit_dashboard_done': '✓ Concluído',
    'emergency_call_active': 'Chamada de emergência em andamento...',
    'emergency_help': 'Defina o número do serviço de emergência local (por exemplo, 911 ou 112). Incluído em alertas SOS.',
    'emergency_number_label': '🚨 Número de emergência local',
    'entry_sensors': 'Sensores de entrada',
    'error_loading_uploaded_files': 'Erro ao carregar os arquivos enviados.',
    'exit_to_ha': 'Sair para o Home Assistant',
    'exp_indefinite': 'Indeterminado',
    'exp_temporary': 'Temporário (data/hora)',
    'expand': 'Expandir',
    'expired': 'Expirado',
    'export_btn': 'Exportar Configuração',
    'export_error': 'Erro de exportação: {error}',
    'external_panels': 'Painéis de alarme externos',
    'file_choice': 'Usar como imagem estática (OK) ou vídeo animado (Cancelar)?',
    'file_delete_confirm': 'Excluir este arquivo permanentemente?',
    'file_read_error': 'Não foi possível ler o arquivo.',
    'files_count': '{contar} arquivos',
    'files_count_short': '{contar} arquivos',
    'first_run_blocked_desc': 'A configuração está bloqueada.',
    'first_run_blocked_title': 'Configuração inicial necessária',
    'first_run_desc': 'Configure suas credenciais de segurança iniciais.',
    'first_run_pin_expl': 'Defina um PIN mestre para controlar o sistema.',
    'first_run_skip': 'Pular por enquanto',
    'first_run_start': 'Iniciar configuração',
    'first_run_welcome': 'Bem-vindo ao Argos!',
    'forgot_pin': 'Esqueceu seu PIN?',
    'fullscreen_title': 'Tela cheia',
    'generic_error': 'Erro: {erro}',
    'github_action': 'Estrela no GitHub',
    'github_desc': 'Se você gostou deste projeto, apoie o desenvolvimento com uma estrela no GitHub.',
    'github_title': 'Apoie o Argus',
    'ha_account': 'Conta HA',
    'ha_account_linked': 'Conta HA: {nome}',
    'ha_account_unavailable': 'Nenhuma conta HA vinculada',
    'ha_admin_label': 'Administrador de alta disponibilidade',
    'ha_role_admin': 'Administrador',
    'ha_role_standard': 'Usuário padrão',
    'ha_standard_user_label': 'Usuário padrão HA',
    'help': 'Ajuda',
    'hero_desc': 'Sistema de segurança residencial inteligente',
    'hide': 'Ocultar',
    'hide_widget': 'Ocultar widget',
    'history_refresh': '🔄 Atualizar',
    'history_title': 'Histórico de atividades',
    'history_unavailable': 'Histórico de atividades indisponível.',
    'home_default': 'Minha casa',
    'home_fallback': 'Minha casa',
    'home_name_label': 'Nome da casa',
    'home_name_lbl': 'Nome da casa',
    'home_name_modal_desc': 'Personalize o nome da sua residência mostrado no cabeçalho superior.',
    'home_name_modal_title': 'Editar nome da casa',
    'home_name_placeholder': 'O nome da sua casa...',
    'homekit_bridge': 'Ponte HomeKit',
    'homekit_house': 'Página inicial do HomeKit',
    'homekit_not_paired': 'HomeKit não emparelhado',
    'homekit_title': 'Integração HomeKit',
    'import_btn': 'Importar Configuração',
    'import_error': 'Erro de importação: {error}',
    'import_success': 'Configuração restaurada. Recarregando…',
    'initialization_error_desc': 'Não foi possível conectar-se ao back-end autorizado do Home Assistant.',
    'initialization_error_title': 'Não foi possível iniciar o Argus',
    'instances': 'Painel de Segurança Argus',
    'introduce_pin': 'Digite seu PIN de segurança',
    'invalid_config': 'Arquivo de configuração inválido.',
    'invalid_pin_msg': 'PIN incorreto',
    'is_admin': 'É Administrador?',
    'lang_select_title': 'Selecione o idioma',
    'lang_selector_lbl': '⚙️ Idioma',
    'language': 'Linguagem',
    'lbl_aesthetic_custom': 'Personalização e Ajustes',
    'lbl_load_file': 'Carregar arquivo',
    'lbl_uploaded_files': 'Arquivos enviados',
    'light_siren_color': 'Cor',
    'light_siren_flash': 'Flash suave, se disponível',
    'link_ha_user': 'Vincular usuário HA',
    'linked_rules': 'Regras vinculadas ao Argus',
    'loading': 'Carregando…',
    'lock_if_open': 'Bloquear se aberto',
    'log_action_access_pin_updated': 'PIN de acesso atualizado',
    'log_action_analysis': 'Análise de Segurança',
    'log_action_automation': 'Automação executada',
    'log_action_backup_created': 'Backup criado',
    'log_action_backup_restored': 'Configuração restaurada',
    'log_action_first_run_completed': 'Configuração inicial concluída',
    'log_action_fullscreen_unlocked': 'Tela cheia desbloqueada',
    'log_action_master_pin_rejected': 'PIN mestre errado rejeitado',
    'log_action_mode_changed': 'Modo alterado',
    'log_action_profile_selected': 'Perfil selecionado',
    'log_action_rejected': 'Ação rejeitada',
    'log_action_save_ui': 'Configurações visuais salvas',
    'log_action_schedule_applied': 'Cronograma aplicado',
    'log_action_select_profile': 'Perfil trocado',
    'log_action_sos': 'Alarme SOS de Emergência',
    'log_action_sos_stopped': 'SOS parado',
    'log_action_state_restored': 'Estado restaurado',
    'log_action_stop_sos': 'Alarme SOS parado',
    'log_action_user_added': 'Usuário criado',
    'log_action_user_deleted': 'Usuário excluído',
    'log_action_user_logged_in': 'Usuário logado',
    'log_action_verify_access_pin': 'PIN de acesso verificado',
    'log_armed': 'ARMADO',
    'log_by': 'por',
    'log_detail_armed': 'Sistema armado',
    'log_detail_disarm': 'Sistema desarmado',
    'log_detail_pin_reset': 'PIN mestre redefinido pelo administrador HA',
    'log_detail_pin_reset_failed': 'Tentativa de redefinição de PIN rejeitada',
    'log_detail_triggered': 'Ativação automática',
    'log_disarmed': 'DESARMADO',
    'log_mode': 'Modo',
    'log_no_events': 'Nenhum evento registrado na história.',
    'log_sensor': 'Sensor',
    'log_triggered': 'PROVOCADO',
    'login_btn': 'Conecte-se',
    'manual_arm': 'Armar manualmente',
    'manual_disarm': 'Desarme manual',
    'master_pin_lbl': 'PIN Mestre',
    'modal_add_user': '+ Adicionar usuário',
    'modal_cancel': 'Cancelar',
    'modal_confirm': 'Confirmar',
    'modal_delete_confirm': 'Excluir este usuário?',
    'modal_edit_name': 'Editar nome',
    'modal_name_label': 'Nome do perfil',
    'modal_pin_help': 'Deixe em branco para não exigir um PIN.',
    'modal_pin_title': 'PIN de acesso',
    'modal_save': 'Salvar',
    'modal_user_added': 'Usuário criado com sucesso.',
    'mode_away': 'Ausente',
    'mode_home': 'Em Casa',
    'mode_night': 'Noite',
    'mode_vacation': 'Férias',
    'modes': 'Modos / SOS',
    'modes_sos': 'Modos / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Nunca acionado',
    'new_pin': 'Novo PIN',
    'no_alarm_instance': 'Nenhuma instância de alarme disponível',
    'no_auto_linked': 'Nenhuma automação vinculada.',
    'no_files_uploaded': 'Nenhum arquivo enviado.',
    'no_files_uploaded_short': 'Nenhum arquivo',
    'no_instances': 'Nenhuma instância de alarme configurada.',
    'no_results': 'Nenhum resultado',
    'no_rules': 'Nenhuma regra disponível.',
    'no_sensors_configured': 'Nenhum sensor configurado',
    'no_unlinked_ha_accounts': 'Nenhuma conta de HA desvinculada.',
    'no_users': 'Nenhum usuário registrado',
    'none_selected': 'Nenhum selecionado',
    'notif_desc': 'Notificações push móveis para eventos críticos.',
    'notif_no_services': 'Nenhum serviço de notificação móvel disponível.',
    'notification_armed': '{user} armou o sistema no modo {mode}.',
    'notification_disarmed': '{user} desarmou o sistema.',
    'notifications_title': 'Notificações',
    'open_sensors': 'Sensores abertos',
    'open_sensors_explain': 'Os seguintes sensores estão abertos:\\\\n{nomes}\\\\n\\\\nFeche-os antes de armar ou ativar o Bypass.',
    'panic_state_unknown': 'Não foi possível determinar o estado de alarme anterior.',
    'panic_stop_error': 'Não foi possível parar o alarme: {error}',
    'panic_stopped': 'Alarme parado; estado restaurado {estado}',
    'pending': 'Pendente',
    'pin_active_no': 'Nenhum PIN ativo',
    'pin_active_yes': 'PIN Ativo',
    'pin_deleted': 'PIN excluído',
    'pin_desc': 'Código de segurança de 4 a 8 dígitos.',
    'pin_disarm_error': 'PIN errado ou erro de desarmamento',
    'pin_incorrect': 'PIN errado',
    'pin_management': '🔑 Gerenciamento de PINs',
    'pin_master_title': 'PIN Mestre',
    'pin_mismatch': 'Os PINs não correspondem',
    'pin_modal_desc': 'Digite seu PIN de segurança para continuar.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Deixe em branco para remover o PIN mestre.',
    'pin_reset_admin_only': 'Somente administradores podem redefinir o PIN.',
    'pin_reset_confirm': 'Redefinir PIN?',
    'pin_updated': 'PIN atualizado com sucesso',
    'profile_is_yours': 'Seu Perfil',
    'profile_needs_pin': 'Este perfil requer um PIN de acesso.',
    'profile_no_pin_access': 'Acesso gratuito sem PIN.',
    'remove_btn': 'Remover',
    'reset_btn': 'Redefinição de Fábrica',
    'reset_confirm': 'Redefinir o Argus para os padrões de fábrica? Todas as configurações e PINs serão perdidos.',
    'reset_dashboard': 'Redefinir layout',
    'reset_error': 'Erro de redefinição: {error}',
    'reset_error_auth': 'Autenticação necessária para redefinir.',
    'reset_success': 'Argus redefinido com sucesso.',
    'reset_widget': 'Redefinir widget',
    'retry_action': 'Tentar novamente',
    'role_argus_admin': 'Administrador Argus',
    'role_argus_admin_short': 'Administrador',
    'role_argus_standard': 'Usuário padrão',
    'role_argus_user': 'Usuário padrão',
    'role_argus_user_short': 'Usuário',
    'rules_tip': 'Dica de automação',
    'save_btn': 'Salvar',
    'save_config': '💾 Salvar Modo',
    'save_mode': 'Modo Salvar',
    'save_notif': 'Salvar notificações',
    'save_user': 'Salvar usuário',
    'saved': '✓ Salvo',
    'search_placeholder': 'Pesquisar dispositivo ou entidade…',
    'search_select': 'Pesquise e selecione…',
    'searching_auto': 'Procurando automações…',
    'select_all': 'Selecionar tudo',
    'select_btn': '+ Selecionar',
    'select_entry_sensors': '+ Selecionar sensores de entrada',
    'select_profile_subtitle': 'Selecione seu perfil de usuário',
    'select_profile_title': 'Perfis de acesso',
    'selected_lbl': 'Selecionado',
    'selector_accept': 'Aceitar',
    'selector_clear': 'Limpar seleção',
    'selector_close': 'Fechar',
    'selector_panic': '🚨 Saídas de Emergência SOS',
    'sensor_section': 'Sensores de Intrusão',
    'sensors_to_bypass': 'Sensores para ignorar',
    'settings': '⚙️ Configurações',
    'setup_access_pin': 'PIN de acesso ao painel Argus (opcional)',
    'setup_admin_name': 'Nome do administrador',
    'setup_master_pin': 'PIN mestre para armar/desarmar (opcional)',
    'setup_required_action': 'Configurar Argus em integrações',
    'setup_required_desc': 'O Argus está instalado, mas nenhuma instância foi criada ainda.',
    'setup_required_title': 'Configuração Argus necessária',
    'siren_section': 'Sirenes',
    'size': 'Tamanho',
    'slide_disarm': 'Deslize para desarmar',
    'slide_sos': 'Deslize para acionar SOS',
    'slide_sos_stop': 'Deslize para parar SOS',
    'sos_actions': '🚨 Ações SOS',
    'sos_activated': 'SOS ativado',
    'sos_call': 'Ligue para os serviços de emergência',
    'sos_call_confirm': 'Ligar para o serviço de emergência local ({número})?',
    'sos_call_help': 'Se este dispositivo não puder fazer chamadas, o Argus enviará uma notificação de alerta crítico.',
    'sos_confirm_text': 'Deslize para acionar o alarme de emergência imediatamente.',
    'sos_confirm_title': '🚨 Acionar alarme de emergência?',
    'sos_error': 'Não foi possível acionar o SOS: {error}',
    'sos_no_outputs': 'Nenhum dispositivo de saída de emergência selecionado',
    'sos_outputs_help': 'Esses dispositivos sempre serão ligados quando o SOS for acionado.',
    'sos_select_outputs': 'Selecione luzes, sirenes ou cenas',
    'sos_slide': 'Deslize para acionar o SOS',
    'sos_stop': 'PARAR SOS',
    'status_away': 'Ausente',
    'status_closed': 'FECHADO',
    'status_home': 'Lar',
    'status_idle': 'Inativo',
    'status_open': 'ABERTO',
    'status_recording': 'Gravando',
    'support_title': 'Status e suporte',
    'switch_profile_btn': '👤 Alternar Perfil',
    'sync_panel_help': 'Estado de sincronização com painéis de alarme externos.',
    'sync_panel_section': 'Painéis de Alarme Externos',
    'system_armed': 'SISTEMA ARMADO',
    'system_disarmed': 'SISTEMA DESARMADO',
    'system_triggered': 'ALARME DISPARADO!',
    'temp_auto': 'Temperatura automática',
    'temp_displayed': 'Entidade de temperatura ao vivo',
    'temp_notification_title': 'Argus – Alerta de temperatura',
    'temp_thermostat': 'Termostato',
    'thermostat_alert_notif': 'Alerta de termostato',
    'times_section': '⏱️ Temporizadores',
    'triggered': 'Alarme disparado!',
    'unavailable': 'Indisponível',
    'undo_error': 'Não foi possível desfazer a redefinição: {error}',
    'undo_reset': 'Desfazer redefinição',
    'undo_reset_btn': 'Desfazer Redefinição',
    'undo_success': 'Redefinição desfeita com sucesso.',
    'unlinked_ha_accounts_title': 'Contas de assistente doméstico',
    'unlock_kiosk': 'Desbloquear quiosque',
    'update_pin': 'Atualizar PIN',
    'upload_error': 'Erro ao carregar.',
    'url_placeholder': 'URL de plano de fundo…',
    'use_for_hub': 'Usar para hub',
    'use_for_panel': 'Use para painel',
    'use_ha_language': 'Use o idioma do Home Assistant',
    'user_default': 'Usuário',
    'user_exp_date': 'Data e hora de expiração',
    'user_exp_type': 'Tipo de expiração',
    'user_no_pin': 'Sem PIN de acesso',
    'user_pin': 'PIN de acesso',
    'user_pin_action': 'Definir PIN',
    'user_required': 'Nome e PIN são obrigatórios.',
    'user_role_action': 'Alterar função',
    'user_role_label': 'Função do usuário',
    'username': 'Nome de usuário',
    'users_title': '👥 Usuários e controle de acesso',
    'vacation': 'Férias',
    'wait_if_open': 'Aguardar fechamento',
    'waiting_sensors': 'AGUARDANDO SENSORES',
    'waiting_sensors_count': 'AGUARDANDO {count} SENSOR(S)',
    'weather_auto': 'Detecção automática do clima',
    'weather_source': 'Entidade meteorológica',
    'welcome_greeting': 'Bem vindo de volta!',
    'welcome_profile': 'Bem-vindo, {nome}',
    'wrong_pin': 'PIN errado',
  },
  'it': {
    'accept': 'Accetta',
    'access_control_title': '👥 Utenti e Controllo Accessi',
    'access_desc': 'Gestione della sicurezza globale, PIN master e amministratori.',
    'access_pin_lbl': 'PIN di Accesso',
    'access_title': 'Utenti e Controllo Accessi',
    'action_disarmed': 'Disarmato',
    'action_failed': 'Impossibile eseguire l\'azione',
    'action_sos': 'Allarme SOS di emergenza',
    'action_sos_stop': 'SOS interrotto',
    'active_profile': 'Profilo attivo',
    'active_until': 'Scade',
    'activity_log': '📋 Registro delle attività',
    'add_btn': '+ Aggiungi',
    'add_user': 'Aggiungi utente',
    'admin_only': 'Solo gli amministratori possono gestire utenti e impostazioni.',
    'alarm_instance': 'Istanza di allarme',
    'all_sensors_bypassed': 'Tutti i sensori configurati vengono bypassati.',
    'analysis_title': 'Analisi della sicurezza',
    'arm_time': 'Ritardo di inserimento (s)',
    'arm_time_label': 'Ritardo di inserimento',
    'armed_away': 'Lontano',
    'armed_home': 'Casa',
    'armed_night': 'Notte',
    'armed_vacation': 'Vacanza',
    'arming': 'Inserimento',
    'automations': 'Automazioni',
    'available': 'Disponibile',
    'backdrop_mode_blur': 'Sfocatura',
    'backdrop_mode_dim': 'Oscurato',
    'backdrop_mode_none': 'Nessuno',
    'background_lbl': 'Sfondo',
    'backup_desc': 'Esporta, ripristina o ripristina la configurazione di Argus.',
    'backup_title': 'Backup & Ripristino',
    'badge_pin_reset': 'Reimpostazione PIN',
    'badge_pin_reset_failed': 'Reimpostazione del PIN non riuscita',
    'battery_low': 'Batteria scarica',
    'bg_collage': 'Collage',
    'bg_hub_default': 'Sfondo dell\'hub predefinito',
    'bg_hub_selected_from_history': 'Sfondo dell\'hub selezionato dalla cronologia',
    'bg_hub_title': 'Sfondo del mozzo',
    'bg_image_opt': 'Immagine statica',
    'bg_none': 'Nessuno',
    'bg_panel_none': 'Nessuno sfondo del pannello',
    'bg_panel_selected_from_history': 'Sfondo del pannello selezionato dalla cronologia',
    'bg_panel_title': 'Sfondo del pannello',
    'bg_photo': 'Foto',
    'bg_sound_opt': 'Suono di sottofondo',
    'bg_video': 'Video animato',
    'bg_weather': 'Meteo in diretta',
    'bridge_not_connected': 'Bridge non connesso',
    'bridge_not_desc': 'Il bridge HomeKit è attualmente disconnesso.',
    'bridge_paired': 'Ponte accoppiato',
    'bridge_paired_desc': 'Il bridge HomeKit è accoppiato e attivo.',
    'btn_away': '🔴 Fuori',
    'btn_create_argus_profile': '+ Crea profilo Argus',
    'btn_disarmed': '🔓 Disinserito',
    'btn_home': '🏠 Casa',
    'btn_night': '🌙 Notte',
    'btn_sos': '🚨 SOS / PANICO',
    'btn_vacation': '✈️ Vacanza',
    'bypass_lbl': '🚫 Escludi',
    'cancel': 'Annulla',
    'cancel_btn': 'Cancellare',
    'cannot_arm': 'Impossibile inserire il sistema',
    'cannot_delete_last_admin': 'Impossibile eliminare l\'unico amministratore.',
    'change_btn': 'Modifica',
    'change_pin': 'Modifica PIN di accesso',
    'change_profile_picture': 'Cambia foto in HA Persone ↗',
    'claim_btn': 'Amministratore del reclamo',
    'claim_desc': 'L\'installazione richiede l\'accesso da parte di un amministratore.',
    'claim_title': 'Aggiornamento sulla sicurezza di Argus',
    'clear': 'Chiaro',
    'clear_history': 'Cancella cronologia',
    'clear_history_confirm': 'Eliminare tutta la cronologia delle attività?',
    'clear_log_btn': '🗑️ Cancella registro',
    'clock_12h': '12 ore (AM/PM)',
    'clock_24h': '24 ore',
    'clock_auto': 'Automatico (per lingua)',
    'clock_format_desc': 'Formato orologio nell\'intestazione superiore',
    'clock_format_label': 'Formato orologio',
    'close': 'Chiudi',
    'collapse': 'Espandi',
    'confirm': 'Conferma',
    'confirm_pin': 'Conferma il PIN',
    'connected': 'COLLEGATO',
    'create_ha': '+ Crea in HA',
    'current_pin': 'PIN attuale',
    'customize': 'Personalizza',
    'delete': 'Elimina',
    'delete_btn_title': 'Eliminare',
    'delete_file_error': 'Impossibile eliminare il file: {errore}',
    'delete_user_confirm': 'Sei sicuro di voler eliminare questo utente?',
    'delete_user_tooltip': 'Elimina questo utente',
    'deselect_all': 'Deseleziona tutto',
    'details_notif': 'Dettagli della notifica',
    'disarm_time': 'Ritardo di ingresso (s)',
    'disarm_time_label': 'Ritardo di ingresso',
    'disarmed': 'Disinserito',
    'done': 'Fatto',
    'edit_btn': '✏️ Modifica nome',
    'edit_dashboard': 'Modifica dashboard',
    'edit_dashboard_done': '✓ Fatto',
    'emergency_call_active': 'Chiamata d\'emergenza in corso...',
    'emergency_help': 'Imposta il numero del servizio di emergenza locale (ad esempio 911 o 112). Incluso negli avvisi SOS.',
    'emergency_number_label': '🚨 Numero di emergenza locale',
    'entry_sensors': 'Sensori di ingresso',
    'error_loading_uploaded_files': 'Errore durante il caricamento dei file caricati.',
    'exit_to_ha': 'Esci su Home Assistant',
    'exp_indefinite': 'Indefinito',
    'exp_temporary': 'Temporaneo (data/ora)',
    'expand': 'Espandi',
    'expired': 'Scaduto',
    'export_btn': 'Esporta Configurazione',
    'export_error': 'Errore di esportazione: {errore}',
    'external_panels': 'Pannelli di allarme esterni',
    'file_choice': 'Utilizzare come immagine statica (OK) o video animato (Annulla)?',
    'file_delete_confirm': 'Eliminare questo file in modo permanente?',
    'file_read_error': 'Impossibile leggere il file.',
    'files_count': '{count} file',
    'files_count_short': '{count} file',
    'first_run_blocked_desc': 'La configurazione è bloccata.',
    'first_run_blocked_title': 'È richiesta la configurazione iniziale',
    'first_run_desc': 'Configura le tue credenziali di sicurezza iniziali.',
    'first_run_pin_expl': 'Imposta un PIN principale per controllare il sistema.',
    'first_run_skip': 'Salta per ora',
    'first_run_start': 'Avvia la configurazione',
    'first_run_welcome': 'Benvenuti ad Argus!',
    'forgot_pin': 'Hai dimenticato il PIN?',
    'fullscreen_title': 'A schermo intero',
    'generic_error': 'Errore: {errore}',
    'github_action': 'Stella su GitHub',
    'github_desc': 'Se ti piace questo progetto, sostieni lo sviluppo con una stella su GitHub.',
    'github_title': 'Supporta Argus',
    'ha_account': 'Account HA',
    'ha_account_linked': 'Account HA: {nome}',
    'ha_account_unavailable': 'Nessun account HA collegato',
    'ha_admin_label': 'Amministratore HA',
    'ha_role_admin': 'Amministratore',
    'ha_role_standard': 'Utente standard',
    'ha_standard_user_label': 'Utente standard HA',
    'help': 'Aiuto',
    'hero_desc': 'Sistema di sicurezza domestico intelligente',
    'hide': 'Nascondi',
    'hide_widget': 'Nascondi widget',
    'history_refresh': '🔄 Aggiorna',
    'history_title': 'Cronologia delle attività',
    'history_unavailable': 'Cronologia attività non disponibile.',
    'home_default': 'La mia casa',
    'home_fallback': 'La mia casa',
    'home_name_label': 'Nome della casa',
    'home_name_lbl': 'Nome della casa',
    'home_name_modal_desc': 'Personalizza il nome della tua residenza mostrato nell\'intestazione in alto.',
    'home_name_modal_title': 'Modifica nome casa',
    'home_name_placeholder': 'Il tuo nome di casa...',
    'homekit_bridge': 'Ponte HomeKit',
    'homekit_house': 'HomeKit Casa',
    'homekit_not_paired': 'HomeKit non accoppiato',
    'homekit_title': 'Integrazione con HomeKit',
    'import_btn': 'Importa Configurazione',
    'import_error': 'Errore di importazione: {errore}',
    'import_success': 'Configurazione ripristinata. Ricaricamento in corso...',
    'initialization_error_desc': 'Impossibile connettersi al backend autorizzato di Home Assistant.',
    'initialization_error_title': 'Impossibile avviare Argus',
    'instances': 'Pannello di Sicurezza Argus',
    'introduce_pin': 'Inserisci il tuo PIN di sicurezza',
    'invalid_config': 'File di configurazione non valido.',
    'invalid_pin_msg': 'PIN errato',
    'is_admin': 'È amministratore?',
    'lang_select_title': 'Seleziona lingua',
    'lang_selector_lbl': '⚙️ Linguaggio',
    'language': 'Lingua',
    'lbl_aesthetic_custom': 'Personalizzazione e Impostazioni',
    'lbl_load_file': 'Carica file',
    'lbl_uploaded_files': 'File caricati',
    'light_siren_color': 'Colore',
    'light_siren_flash': 'Flash delicato se disponibile',
    'link_ha_user': 'Collega utente HA',
    'linked_rules': 'Regole legate ad Argus',
    'loading': 'Caricamento…',
    'lock_if_open': 'Blocca se aperto',
    'log_action_access_pin_updated': 'PIN di accesso aggiornato',
    'log_action_analysis': 'Analisi della sicurezza',
    'log_action_automation': 'Automazione eseguita',
    'log_action_backup_created': 'Backup creato',
    'log_action_backup_restored': 'Configurazione ripristinata',
    'log_action_first_run_completed': 'Configurazione iniziale completata',
    'log_action_fullscreen_unlocked': 'Schermo intero sbloccato',
    'log_action_master_pin_rejected': 'PIN principale errato rifiutato',
    'log_action_mode_changed': 'Modalità modificata',
    'log_action_profile_selected': 'Profilo selezionato',
    'log_action_rejected': 'Azione rifiutata',
    'log_action_save_ui': 'Impostazioni visive salvate',
    'log_action_schedule_applied': 'Programma applicato',
    'log_action_select_profile': 'Profilo cambiato',
    'log_action_sos': 'Allarme SOS di emergenza',
    'log_action_sos_stopped': 'SOS interrotto',
    'log_action_state_restored': 'Stato ripristinato',
    'log_action_stop_sos': 'L\'allarme SOS è stato interrotto',
    'log_action_user_added': 'Creato dall\'utente',
    'log_action_user_deleted': 'Utente eliminato',
    'log_action_user_logged_in': 'Utente connesso',
    'log_action_verify_access_pin': 'PIN di accesso verificato',
    'log_armed': 'ARMATO',
    'log_by': 'di',
    'log_detail_armed': 'Sistema armato',
    'log_detail_disarm': 'Sistema disinserito',
    'log_detail_pin_reset': 'PIN principale reimpostato dall\'amministratore HA',
    'log_detail_pin_reset_failed': 'Tentativo di reimpostazione del PIN rifiutato',
    'log_detail_triggered': 'Attivazione automatica',
    'log_disarmed': 'DISARMO',
    'log_mode': 'Modalità',
    'log_no_events': 'Nessun evento registrato nella cronologia.',
    'log_sensor': 'Sensore',
    'log_triggered': 'INNESCATO',
    'login_btn': 'Login',
    'manual_arm': 'Inserimento manuale',
    'manual_disarm': 'Disinserimento manuale',
    'master_pin_lbl': 'PIN Master',
    'modal_add_user': '+ Aggiungi utente',
    'modal_cancel': 'Cancellare',
    'modal_confirm': 'Confermare',
    'modal_delete_confirm': 'Eliminare questo utente?',
    'modal_edit_name': 'Modifica nome',
    'modal_name_label': 'Nome del profilo',
    'modal_pin_help': 'Lascia vuoto per non richiedere un PIN.',
    'modal_pin_title': 'PIN di accesso',
    'modal_save': 'Salva',
    'modal_user_added': 'Utente creato con successo.',
    'mode_away': 'Fuori',
    'mode_home': 'Casa',
    'mode_night': 'Notte',
    'mode_vacation': 'Vacanza',
    'modes': 'Modi / SOS',
    'modes_sos': 'Modi / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Mai attivato',
    'new_pin': 'Nuovo PIN',
    'no_alarm_instance': 'Nessuna istanza di allarme disponibile',
    'no_auto_linked': 'Nessuna automazione collegata.',
    'no_files_uploaded': 'Nessun file caricato.',
    'no_files_uploaded_short': 'Nessun file',
    'no_instances': 'Nessuna istanza di allarme configurata.',
    'no_results': 'Nessun risultato',
    'no_rules': 'Nessuna regola disponibile.',
    'no_sensors_configured': 'Nessun sensore configurato',
    'no_unlinked_ha_accounts': 'Nessun account HA scollegato.',
    'no_users': 'Nessun utente registrato',
    'none_selected': 'Nessuno selezionato',
    'notif_desc': 'Notifiche push mobili per eventi critici.',
    'notif_no_services': 'Nessun servizio di notifica mobile disponibile.',
    'notification_armed': '{utente} ha inserito il sistema in modalità {mode}.',
    'notification_disarmed': '{utente} ha disinserito il sistema.',
    'notifications_title': 'Notifiche',
    'open_sensors': 'Sensori aperti',
    'open_sensors_explain': 'I seguenti sensori sono aperti:\\\\n{nomi}\\\\n\\\\nChiudili prima dell\'inserimento o abilita l\'esclusione.',
    'panic_state_unknown': 'Impossibile determinare lo stato di allarme precedente.',
    'panic_stop_error': 'Impossibile interrompere l\'allarme: {errore}',
    'panic_stopped': 'L\'allarme è stato interrotto; stato ripristinato {stato}',
    'pending': 'In attesa di',
    'pin_active_no': 'Nessun PIN attivo',
    'pin_active_yes': 'PIN Attivo',
    'pin_deleted': 'PIN eliminato',
    'pin_desc': 'Codice di sicurezza da 4 a 8 cifre.',
    'pin_disarm_error': 'PIN errato o errore di disinserimento',
    'pin_incorrect': 'PIN sbagliato',
    'pin_management': '🔑 Gestione PIN',
    'pin_master_title': 'PIN Master',
    'pin_mismatch': 'I PIN non corrispondono',
    'pin_modal_desc': 'Inserisci il tuo PIN di sicurezza per continuare.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Lascia vuoto per rimuovere il PIN principale.',
    'pin_reset_admin_only': 'Solo gli amministratori possono reimpostare il PIN.',
    'pin_reset_confirm': 'Reimpostare il PIN?',
    'pin_updated': 'PIN aggiornato correttamente',
    'profile_is_yours': 'Il Tuo Profilo',
    'profile_needs_pin': 'Questo profilo richiede un PIN di accesso.',
    'profile_no_pin_access': 'Accesso gratuito senza PIN.',
    'remove_btn': 'Rimuovi',
    'reset_btn': 'Ripristino di Fabbrica',
    'reset_confirm': 'Ripristinare Argus alle impostazioni di fabbrica? Tutte le configurazioni e i PIN andranno persi.',
    'reset_dashboard': 'Ripristina layout',
    'reset_error': 'Reimposta errore: {errore}',
    'reset_error_auth': 'Autenticazione necessaria per reimpostare.',
    'reset_success': 'Argus ripristinato con successo.',
    'reset_widget': 'Ripristina widget',
    'retry_action': 'Riprova',
    'role_argus_admin': 'Amministratore Argus',
    'role_argus_admin_short': 'Ammin',
    'role_argus_standard': 'Utente standard',
    'role_argus_user': 'Utente standard',
    'role_argus_user_short': 'Utente',
    'rules_tip': 'Suggerimento per l\'automazione',
    'save_btn': 'Salva',
    'save_config': '💾 Salva Modalità',
    'save_mode': 'Modalità di salvataggio',
    'save_notif': 'Salva notifiche',
    'save_user': 'Salva utente',
    'saved': '✓ Salvato',
    'search_placeholder': 'Cerca dispositivo o entità...',
    'search_select': 'Cerca e seleziona...',
    'searching_auto': 'Ricerca automazioni…',
    'select_all': 'Seleziona tutto',
    'select_btn': '+ Seleziona',
    'select_entry_sensors': '+ Seleziona sensori di ingresso',
    'select_profile_subtitle': 'Seleziona il tuo profilo utente',
    'select_profile_title': 'Profili di accesso',
    'selected_lbl': 'Selezionato',
    'selector_accept': 'Accettare',
    'selector_clear': 'Cancella selezione',
    'selector_close': 'Vicino',
    'selector_panic': '🚨 Uscite di emergenza SOS',
    'sensor_section': 'Sensori di Intrusione',
    'sensors_to_bypass': 'Sensori da bypassare',
    'settings': '⚙️ Impostazioni',
    'setup_access_pin': 'PIN di accesso al pannello Argus (opzionale)',
    'setup_admin_name': 'Nome dell\'amministratore',
    'setup_master_pin': 'PIN principale per inserimento/disinserimento (opzionale)',
    'setup_required_action': 'Configura Argus in Integrazioni',
    'setup_required_desc': 'Argus è installato ma non è stata ancora creata alcuna istanza.',
    'setup_required_title': 'È richiesta la configurazione di Argus',
    'siren_section': 'Sirene',
    'size': 'Misurare',
    'slide_disarm': 'Scorri per disarmare',
    'slide_sos': 'Scorri per attivare SOS',
    'slide_sos_stop': 'Scorri per fermare SOS',
    'sos_actions': '🚨 Azioni SOS',
    'sos_activated': 'SOS attivato',
    'sos_call': 'Chiama i servizi di emergenza',
    'sos_call_confirm': 'Chiamare il servizio di emergenza locale ({numero})?',
    'sos_call_help': 'Se questo dispositivo non può effettuare chiamate telefoniche, Argus invierà una notifica di avviso critico.',
    'sos_confirm_text': 'Scorri per attivare immediatamente l\'allarme di emergenza.',
    'sos_confirm_title': '🚨 Attivare l\'allarme di emergenza?',
    'sos_error': 'Impossibile attivare SOS: {errore}',
    'sos_no_outputs': 'Nessun dispositivo di uscita di emergenza selezionato',
    'sos_outputs_help': 'Questi dispositivi si accenderanno sempre quando si attiva SOS.',
    'sos_select_outputs': 'Seleziona luci, sirene o scene',
    'sos_slide': 'Scorri per attivare SOS',
    'sos_stop': 'FERMA SOS',
    'status_away': 'Lontano',
    'status_closed': 'CHIUSO',
    'status_home': 'Casa',
    'status_idle': 'Inattivo',
    'status_open': 'APERTO',
    'status_recording': 'Registrazione',
    'support_title': 'Stato e supporto',
    'switch_profile_btn': '👤 Cambia Profilo',
    'sync_panel_help': 'Sincronizza lo stato con i pannelli di allarme esterni.',
    'sync_panel_section': 'Pannelli di allarme esterni',
    'system_armed': 'SISTEMA INSERITO',
    'system_disarmed': 'SISTEMA DISINSERITO',
    'system_triggered': 'ALLARME SCATTATO!',
    'temp_auto': 'Temperatura automatica',
    'temp_displayed': 'Entità della temperatura in tempo reale',
    'temp_notification_title': 'Argus – Avviso temperatura',
    'temp_thermostat': 'Termostato',
    'thermostat_alert_notif': 'Avviso termostato',
    'times_section': '⏱️ Tempi',
    'triggered': 'Allarme attivato!',
    'unavailable': 'Non disponibile',
    'undo_error': 'Impossibile annullare la reimpostazione: {errore}',
    'undo_reset': 'Annulla ripristino',
    'undo_reset_btn': 'Annulla Ripristino',
    'undo_success': 'Reimpostazione annullata con successo.',
    'unlinked_ha_accounts_title': 'Conti dell\'Assistente Domestico',
    'unlock_kiosk': 'Sblocca il chiosco',
    'update_pin': 'Aggiorna PIN',
    'upload_error': 'Errore di caricamento.',
    'url_placeholder': 'URL di sfondo...',
    'use_for_hub': 'Utilizzare per l\'Hub',
    'use_for_panel': 'Utilizzare per Pannello',
    'use_ha_language': 'Utilizza la lingua dell\'Assistente Domestico',
    'user_default': 'Utente',
    'user_exp_date': 'Data e ora di scadenza',
    'user_exp_type': 'Tipo di scadenza',
    'user_no_pin': 'Nessun PIN di accesso',
    'user_pin': 'PIN di accesso',
    'user_pin_action': 'Imposta il PIN',
    'user_required': 'Nome e PIN sono obbligatori.',
    'user_role_action': 'Cambia ruolo',
    'user_role_label': 'Ruolo utente',
    'username': 'Nome utente',
    'users_title': '👥 Utenti e controllo accessi',
    'vacation': 'Vacanza',
    'wait_if_open': 'Attendi chiusura',
    'waiting_sensors': 'IN ATTESA DEI SENSORI',
    'waiting_sensors_count': 'IN ATTESA DI {count} SENSORI',
    'weather_auto': 'Rilevamento meteorologico automatico',
    'weather_source': 'Entità meteorologica',
    'welcome_greeting': 'Bentornato!',
    'welcome_profile': 'Benvenuto, {nome}',
    'wrong_pin': 'PIN sbagliato',
  },
  'zh': {
    'accept': '确认',
    'access_control_title': '👥 用户与门禁控制',
    'access_desc': '全局安全管理，掌握 PIN 码和管理员。',
    'access_pin_lbl': '访问 PIN 码',
    'access_title': '用户与门禁控制',
    'action_disarmed': '解除武装',
    'action_failed': '动作无法执行',
    'action_sos': '紧急求救警报',
    'action_sos_stop': '求救已停止',
    'active_profile': '活动档案',
    'active_until': '过期',
    'activity_log': '📋 活动日志',
    'add_btn': '+ 添加',
    'add_user': '添加用户',
    'admin_only': '只有管​​理员可以管理用户和设置。',
    'alarm_instance': '报警实例',
    'all_sensors_bypassed': '所有配置的传感器都会被绕过。',
    'analysis_title': '证券分析',
    'arm_time': '布防延迟（秒）',
    'arm_time_label': '布防延迟',
    'armed_away': '离开',
    'armed_home': '家',
    'armed_night': '夜晚',
    'armed_vacation': '假期',
    'arming': '武装',
    'automations': '自动化',
    'available': '可用的',
    'backdrop_mode_blur': '模糊',
    'backdrop_mode_dim': '变暗',
    'backdrop_mode_none': '没有任何',
    'background_lbl': '背景',
    'backup_desc': '导出、恢复或重置 Argus 配置。',
    'backup_title': '备份与恢复',
    'badge_pin_reset': '密码重置',
    'badge_pin_reset_failed': 'PIN 重置失败',
    'battery_low': '电池电量低',
    'bg_collage': '拼贴画',
    'bg_hub_default': '默认中心背景',
    'bg_hub_selected_from_history': 'Hub背景选自历史',
    'bg_hub_title': '中心背景',
    'bg_image_opt': '静态图像',
    'bg_none': '没有任何',
    'bg_panel_none': '无面板背景',
    'bg_panel_selected_from_history': '从历史中选择的面板背景',
    'bg_panel_title': '面板背景',
    'bg_photo': '照片',
    'bg_sound_opt': '背景音',
    'bg_video': '动画视频',
    'bg_weather': '实时天气',
    'bridge_not_connected': '桥未连接',
    'bridge_not_desc': 'HomeKit 桥当前已断开连接。',
    'bridge_paired': '桥接配对',
    'bridge_paired_desc': 'HomeKit 桥接器已配对且处于活动状态。',
    'btn_away': '🔴 外出',
    'btn_create_argus_profile': '+ 创建阿格斯档案',
    'btn_disarmed': '🔓 已撤防',
    'btn_home': '🏠 在家',
    'btn_night': '🌙 夜间',
    'btn_sos': '🚨 紧急呼救 / SOS',
    'btn_vacation': '✈️ 度假',
    'bypass_lbl': '🚫 绕过',
    'cancel': '取消',
    'cancel_btn': '取消',
    'cannot_arm': '无法布防系统',
    'cannot_delete_last_admin': '无法删除唯一的管理员。',
    'change_btn': '更改',
    'change_pin': '更改访问 PIN 码',
    'change_profile_picture': '更改 HA 人员中的照片 ↗',
    'claim_btn': '索赔管理员',
    'claim_desc': '您的安装需要管理员才能获得访问权限。',
    'claim_title': '阿格斯安全更新',
    'clear': '清除',
    'clear_history': '清除历史记录',
    'clear_history_confirm': '删除所有活动历史记录？',
    'clear_log_btn': '🗑️清除日志',
    'clock_12h': '12 小时（上午/下午）',
    'clock_24h': '24小时',
    'clock_auto': '自动（按语言）',
    'clock_format_desc': '顶部标题中的时钟格式',
    'clock_format_label': '时钟格式',
    'close': '关闭',
    'collapse': '展开',
    'confirm': '确认',
    'confirm_pin': '确认密码',
    'connected': '连接',
    'create_ha': '+ 在HA中创建',
    'current_pin': '当前密码',
    'customize': '定制',
    'delete': '删除',
    'delete_btn_title': '删除',
    'delete_file_error': '无法删除文件：{错误}',
    'delete_user_confirm': '您确定要删除该用户吗？',
    'delete_user_tooltip': '删除该用户',
    'deselect_all': '取消全选',
    'details_notif': '通知详情',
    'disarm_time': '进入延迟（秒）',
    'disarm_time_label': '入境延误',
    'disarmed': '已撤防',
    'done': '完成',
    'edit_btn': '✏️ 编辑姓名',
    'edit_dashboard': '编辑仪表板',
    'edit_dashboard_done': '✓ 完成',
    'emergency_call_active': '紧急呼叫正在进行中...',
    'emergency_help': '设置当地紧急服务号码（例如 911 或 112）。包含在 SOS 警报中。',
    'emergency_number_label': '🚨 当地紧急电话号码',
    'entry_sensors': '入口传感器',
    'error_loading_uploaded_files': '加载上传的文件时出错。',
    'exit_to_ha': '退出到家庭助理',
    'exp_indefinite': '不定',
    'exp_temporary': '临时（日期/时间）',
    'expand': '展开',
    'expired': '已到期',
    'export_btn': '导出配置',
    'export_error': '导出错误：{错误}',
    'external_panels': '外部报警面板',
    'file_choice': '用作静态图像（确定）还是动画视频（取消）？',
    'file_delete_confirm': '永久删除该文件吗？',
    'file_read_error': '无法读取文件。',
    'files_count': '{count} 个文件',
    'files_count_short': '{count} 个文件',
    'first_run_blocked_desc': '设置已锁定。',
    'first_run_blocked_title': '需要初始设置',
    'first_run_desc': '配置您的初始安全凭证。',
    'first_run_pin_expl': '设置主 PIN 码来控制系统。',
    'first_run_skip': '暂时跳过',
    'first_run_start': '开始设置',
    'first_run_welcome': '欢迎来到阿古斯！',
    'forgot_pin': '忘记了您的 PIN 码？',
    'fullscreen_title': '全屏',
    'generic_error': '错误：{错误}',
    'github_action': '在 GitHub 上点赞',
    'github_desc': '如果您喜欢这个项目，请在 GitHub 上加星支持开发。',
    'github_title': '支持 Argus',
    'ha_account': 'HA 账户',
    'ha_account_linked': 'HA 帐户：{名称}',
    'ha_account_unavailable': '没有链接 HA 帐户',
    'ha_admin_label': '医管局管理员',
    'ha_role_admin': '行政人员',
    'ha_role_standard': '标准用户',
    'ha_standard_user_label': '房委会标准用户',
    'help': '帮助',
    'hero_desc': '智能家庭安防系统',
    'hide': '隐藏',
    'hide_widget': '隐藏小部件',
    'history_refresh': '🔄 刷新',
    'history_title': '活动历史',
    'history_unavailable': '活动历史记录不可用。',
    'home_default': '我的家',
    'home_fallback': '我的家',
    'home_name_label': '家庭名称',
    'home_name_lbl': '家庭名称',
    'home_name_modal_desc': '自定义顶部标题中显示的居住名称。',
    'home_name_modal_title': '编辑家庭名称',
    'home_name_placeholder': '你家的名字...',
    'homekit_bridge': 'HomeKit 桥接器',
    'homekit_house': 'HomeKit 主页',
    'homekit_not_paired': 'HomeKit 未配对',
    'homekit_title': 'HomeKit 集成',
    'import_btn': '导入配置',
    'import_error': '导入错误：{错误}',
    'import_success': '配置已恢复。正在重新加载...',
    'initialization_error_desc': '无法连接到授权的 Home Assistant 后端。',
    'initialization_error_title': '无法启动阿格斯',
    'instances': 'Argus 安全面板',
    'introduce_pin': '输入您的安全 PIN 码',
    'invalid_config': '配置文件无效。',
    'invalid_pin_msg': 'PIN 码不正确',
    'is_admin': '是管理员吗？',
    'lang_select_title': '选择语言',
    'lang_selector_lbl': '⚙️ 语言',
    'language': '语言',
    'lbl_aesthetic_custom': '个性化与设置',
    'lbl_load_file': '上传文件',
    'lbl_uploaded_files': '上传的文件',
    'light_siren_color': '颜色',
    'light_siren_flash': '柔和的闪光（如果有）',
    'link_ha_user': '链接HA用户',
    'linked_rules': '与阿古斯相关的规则',
    'loading': '加载中…',
    'lock_if_open': '如有开启则阻止',
    'log_action_access_pin_updated': '访问 PIN 码已更新',
    'log_action_analysis': '证券分析',
    'log_action_automation': '自动化执行',
    'log_action_backup_created': '备份已创建',
    'log_action_backup_restored': '配置已恢复',
    'log_action_first_run_completed': '初始设置完成',
    'log_action_fullscreen_unlocked': '全屏解锁',
    'log_action_master_pin_rejected': '错误的主 PIN 码被拒绝',
    'log_action_mode_changed': '模式已更改',
    'log_action_profile_selected': '已选择配置文件',
    'log_action_rejected': '行动被拒绝',
    'log_action_save_ui': '已保存视觉设置',
    'log_action_schedule_applied': '应用时间表',
    'log_action_select_profile': '配置文件已切换',
    'log_action_sos': '紧急求救警报',
    'log_action_sos_stopped': '求救已停止',
    'log_action_state_restored': '状态恢复',
    'log_action_stop_sos': 'SOS 警报已停止',
    'log_action_user_added': '用户已创建',
    'log_action_user_deleted': '用户已删除',
    'log_action_user_logged_in': '用户登录',
    'log_action_verify_access_pin': '访问 PIN 码已验证',
    'log_armed': '武装',
    'log_by': '经过',
    'log_detail_armed': '系统布防',
    'log_detail_disarm': '系统撤防',
    'log_detail_pin_reset': 'HA 管理员重置主 PIN',
    'log_detail_pin_reset_failed': 'PIN 码重置尝试被拒绝',
    'log_detail_triggered': '自动激活',
    'log_disarmed': '解除武装',
    'log_mode': '模式',
    'log_no_events': '历史上没有记录任何事件。',
    'log_sensor': '传感器',
    'log_triggered': '触发',
    'login_btn': '登录',
    'manual_arm': '手动布防',
    'manual_disarm': '手动撤防',
    'master_pin_lbl': '主 PIN 码',
    'modal_add_user': '+ 添加用户',
    'modal_cancel': '取消',
    'modal_confirm': '确认',
    'modal_delete_confirm': '删除该用户？',
    'modal_edit_name': '编辑姓名',
    'modal_name_label': '个人资料名称',
    'modal_pin_help': '留空则不需要 PIN。',
    'modal_pin_title': '访问密码',
    'modal_save': '节省',
    'modal_user_added': '用户创建成功。',
    'mode_away': '外出',
    'mode_home': '在家',
    'mode_night': '夜间',
    'mode_vacation': '度假',
    'modes': '模式 / SOS',
    'modes_sos': '模式 / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': '从未触发过',
    'new_pin': '新密码',
    'no_alarm_instance': '没有可用的警报实例',
    'no_auto_linked': '没有链接自动化。',
    'no_files_uploaded': '没有上传文件。',
    'no_files_uploaded_short': '没有文件',
    'no_instances': '未配置报警实例。',
    'no_results': '没有结果',
    'no_rules': '没有可用的规则。',
    'no_sensors_configured': '未配置传感器',
    'no_unlinked_ha_accounts': '没有未链接的 HA 帐户。',
    'no_users': '未注册用户',
    'none_selected': '未选择',
    'notif_desc': '重大事件的移动推送通知。',
    'notif_no_services': '没有可用的移动通知服务。',
    'notification_armed': '{user} 以 {mode} 模式武装系统。',
    'notification_disarmed': '{user} 撤防系统。',
    'notifications_title': '通知',
    'open_sensors': '开放式传感器',
    'open_sensors_explain': '以下传感器处于打开状态：\\\\n{names}\\\\n\\\\n在布防或启用旁路之前关闭它们。',
    'panic_state_unknown': '无法确定先前的警报状态。',
    'panic_stop_error': '无法停止警报：{错误}',
    'panic_stopped': '警报停止；恢复状态{状态}',
    'pending': '待办的',
    'pin_active_no': '无活动 PIN',
    'pin_active_yes': 'PIN 已激活',
    'pin_deleted': 'PIN 码已删除',
    'pin_desc': '4 至 8 位安全代码。',
    'pin_disarm_error': 'PIN 码错误或撤防错误',
    'pin_incorrect': 'PIN 码错误',
    'pin_management': '🔑 PIN 密码管理',
    'pin_master_title': '主 PIN 码',
    'pin_mismatch': 'PIN 码不匹配',
    'pin_modal_desc': '输入您的安全 PIN 码以继续。',
    'pin_placeholder': '••••',
    'pin_remove_hint': '留空以删除主 PIN。',
    'pin_reset_admin_only': '只有管​​理员可以重置 PIN。',
    'pin_reset_confirm': '重置 PIN 码？',
    'pin_updated': 'PIN 码更新成功',
    'profile_is_yours': '当前用户',
    'profile_needs_pin': '此配置文件需要访问 PIN。',
    'profile_no_pin_access': '无需 PIN 码即可免费访问。',
    'remove_btn': '移除',
    'reset_btn': '恢复出厂设置',
    'reset_confirm': '将阿格斯重置为出厂默认设置？所有配置和 PIN 码都将丢失。',
    'reset_dashboard': '重置布局',
    'reset_error': '重置错误：{错误}',
    'reset_error_auth': '重置需要身份验证。',
    'reset_success': '阿古斯重置成功。',
    'reset_widget': '重置小部件',
    'retry_action': '重试',
    'role_argus_admin': '阿格斯管理员',
    'role_argus_admin_short': '行政',
    'role_argus_standard': '标准用户',
    'role_argus_user': '标准用户',
    'role_argus_user_short': '用户',
    'rules_tip': '自动化提示',
    'save_btn': '保存',
    'save_config': '💾 保存模式',
    'save_mode': '保存模式',
    'save_notif': '保存通知',
    'save_user': '保存用户',
    'saved': '✓ 已保存',
    'search_placeholder': '搜索设备或实体...',
    'search_select': '搜索并选择...',
    'searching_auto': '搜索自动化...',
    'select_all': '选择全部',
    'select_btn': '+ 选择',
    'select_entry_sensors': '+ 选择入口传感器',
    'select_profile_subtitle': '选择您的用户个人资料',
    'select_profile_title': '访问配置文件',
    'selected_lbl': '已选择',
    'selector_accept': '接受',
    'selector_clear': '清除选择',
    'selector_close': '关闭',
    'selector_panic': '🚨 SOS 紧急输出',
    'sensor_section': '入侵传感器',
    'sensors_to_bypass': '要绕过的传感器',
    'settings': '⚙️ 设置',
    'setup_access_pin': 'Argus 面板访问 PIN 码（可选）',
    'setup_admin_name': '管理员姓名',
    'setup_master_pin': '用于布防/撤防的主 PIN（可选）',
    'setup_required_action': '在集成中配置 Argus',
    'setup_required_desc': 'Argus 已安装，但尚未创建实例。',
    'setup_required_title': '需要阿格斯设置',
    'siren_section': '警报器',
    'size': '尺寸',
    'slide_disarm': '滑动撤防',
    'slide_sos': '滑动触发 SOS',
    'slide_sos_stop': '滑动停止 SOS',
    'sos_actions': '🚨 SOS 行动',
    'sos_activated': '紧急求救已启动',
    'sos_call': '致电紧急服务',
    'sos_call_confirm': '致电当地紧急服务中心（{number}）？',
    'sos_call_help': '如果此设备无法拨打电话，Argus 将发送严重警报通知。',
    'sos_confirm_text': '滑动即可立即触发紧急警报。',
    'sos_confirm_title': '🚨 触发紧急警报？',
    'sos_error': '无法触发 SOS：{错误}',
    'sos_no_outputs': '未选择紧急输出设备',
    'sos_outputs_help': '当 SOS 触发时，这些设备将始终打开。',
    'sos_select_outputs': '选择灯光、警报器或场景',
    'sos_slide': '滑动触发SOS',
    'sos_stop': '停止 SOS',
    'status_away': '离开',
    'status_closed': '关闭',
    'status_home': '家',
    'status_idle': '空闲',
    'status_open': '开启',
    'status_recording': '录制中',
    'support_title': '状态与支持',
    'switch_profile_btn': '👤 切换配置文件',
    'sync_panel_help': '与外部报警面板同步状态。',
    'sync_panel_section': '外部报警面板',
    'system_armed': '系统已布防',
    'system_disarmed': '系统已撤防',
    'system_triggered': '警报已触发！',
    'temp_auto': '自动控温',
    'temp_displayed': '实时温度实体',
    'temp_notification_title': '阿格斯 — 温度警报',
    'temp_thermostat': '恒温器',
    'thermostat_alert_notif': '恒温器警报',
    'times_section': '⏱️ 计时延时',
    'triggered': '警报已触发！',
    'unavailable': '不可用',
    'undo_error': '无法撤消重置：{错误}',
    'undo_reset': '撤消重置',
    'undo_reset_btn': '撤销重置',
    'undo_success': '重置撤消成功。',
    'unlinked_ha_accounts_title': '家庭助理账户',
    'unlock_kiosk': '解锁信息亭',
    'update_pin': '更新个人识别码',
    'upload_error': '上传错误。',
    'url_placeholder': '背景网址...',
    'use_for_hub': '用于集线器',
    'use_for_panel': '用于面板',
    'use_ha_language': '使用家庭助理语言',
    'user_default': '用户',
    'user_exp_date': '到期日期和时间',
    'user_exp_type': '过期类型',
    'user_no_pin': '无访问 PIN 码',
    'user_pin': '访问密码',
    'user_pin_action': '设置密码',
    'user_required': '需要姓名和 PIN 码。',
    'user_role_action': '改变角色',
    'user_role_label': '用户角色',
    'username': '用户名',
    'users_title': '👥 用户和访问控制',
    'vacation': '假期',
    'wait_if_open': '等待感应器关闭',
    'waiting_sensors': '等待传感器关闭',
    'waiting_sensors_count': '正在等待 {count} 个传感器',
    'weather_auto': '自动天气检测',
    'weather_source': '天气实体',
    'welcome_greeting': '欢迎回来！',
    'welcome_profile': '欢迎，{name}',
    'wrong_pin': 'PIN 码错误',
  },
  'zh-Hant': {
    'accept': '確認',
    'access_control_title': '👥 使用者與門禁控制',
    'access_desc': '全域安全管理，掌握 PIN 碼和管理員。',
    'access_pin_lbl': '訪問 PIN 碼',
    'access_title': '使用者與門禁控制',
    'action_disarmed': '解除武裝',
    'action_failed': '動作無法執行',
    'action_sos': '緊急求救警報',
    'action_sos_stop': '求救已停止',
    'active_profile': '活動檔案',
    'active_until': '過期',
    'activity_log': '📋 活動日誌',
    'add_btn': '+ 新增',
    'add_user': '新增用戶',
    'admin_only': '只有管​​理員可以管理使用者和設定。',
    'alarm_instance': '警報實例',
    'all_sensors_bypassed': '所有配置的感測器都會被繞過。',
    'analysis_title': '證券分析',
    'arm_time': '布防延遲（秒）',
    'arm_time_label': '布防延遲',
    'armed_away': '離開',
    'armed_home': '家',
    'armed_night': '夜晚',
    'armed_vacation': '假期',
    'arming': '武裝',
    'automations': '自動化',
    'available': '可用的',
    'backdrop_mode_blur': '模糊',
    'backdrop_mode_dim': '變暗',
    'backdrop_mode_none': '沒有任何',
    'background_lbl': '背景',
    'backup_desc': '匯出、復原或重設 Argus 配置。',
    'backup_title': '備份與還原',
    'badge_pin_reset': '密碼重設',
    'badge_pin_reset_failed': 'PIN 重置失敗',
    'battery_low': '電池電量低',
    'bg_collage': '拼貼畫',
    'bg_hub_default': '預設中心背景',
    'bg_hub_selected_from_history': 'Hub背景選自歷史',
    'bg_hub_title': '中心背景',
    'bg_image_opt': '靜態影像',
    'bg_none': '沒有任何',
    'bg_panel_none': '無面板背景',
    'bg_panel_selected_from_history': '從歷史中選擇的面板背景',
    'bg_panel_title': '面板背景',
    'bg_photo': '照片',
    'bg_sound_opt': '背景音',
    'bg_video': '動畫影片',
    'bg_weather': '即時天氣',
    'bridge_not_connected': '橋未連接',
    'bridge_not_desc': 'HomeKit 橋目前已斷開連線。',
    'bridge_paired': '橋接配對',
    'bridge_paired_desc': 'HomeKit 橋接器已配對且處於作用中狀態。',
    'btn_away': '🔴 離家',
    'btn_create_argus_profile': '+ 建立阿格斯檔案',
    'btn_disarmed': '🔓 已撤防',
    'btn_home': '🏠 在家',
    'btn_night': '🌙 夜間',
    'btn_sos': '🚨 緊急求救 / SOS',
    'btn_vacation': '✈️ 度假',
    'bypass_lbl': '🚫 略過',
    'cancel': '取消',
    'cancel_btn': '取消',
    'cannot_arm': '無法布防系統',
    'cannot_delete_last_admin': '無法刪除唯一的管理員。',
    'change_btn': '變更',
    'change_pin': '更改訪問 PIN 碼',
    'change_profile_picture': '更改 HA 人員中的照片 ↗',
    'claim_btn': '索賠管理員',
    'claim_desc': '您的安裝需要管理員才能獲得存取權限。',
    'claim_title': '阿格斯安全更新',
    'clear': '清除',
    'clear_history': '清除歷史記錄',
    'clear_history_confirm': '刪除所有活動記錄？',
    'clear_log_btn': '🗑️清除日誌',
    'clock_12h': '12 小時（上午/下午）',
    'clock_24h': '24小時',
    'clock_auto': '自動（按語言）',
    'clock_format_desc': '頂部標題中的時鐘格式',
    'clock_format_label': '時鐘格式',
    'close': '關閉',
    'collapse': '展開',
    'confirm': '確認',
    'confirm_pin': '確認密碼',
    'connected': '連接',
    'create_ha': '+ 在HA中創建',
    'current_pin': '目前密碼',
    'customize': '客製化',
    'delete': '刪除',
    'delete_btn_title': '刪除',
    'delete_file_error': '無法刪除檔案：{錯誤}',
    'delete_user_confirm': '您確定要刪除該使用者嗎？',
    'delete_user_tooltip': '刪除該用戶',
    'deselect_all': '取消全選',
    'details_notif': '通知詳情',
    'disarm_time': '進入延遲（秒）',
    'disarm_time_label': '入境延誤',
    'disarmed': '已撤防',
    'done': '完成',
    'edit_btn': '✏️ 編輯姓名',
    'edit_dashboard': '編輯儀表板',
    'edit_dashboard_done': '✓ 完成',
    'emergency_call_active': '緊急呼叫正在進行中...',
    'emergency_help': '設定當地緊急服務號碼（例如 911 或 112）。包含在 SOS 警報中。',
    'emergency_number_label': '🚨 當地緊急電話號碼',
    'entry_sensors': '入口感應器',
    'error_loading_uploaded_files': '載入上傳的檔案時發生錯誤。',
    'exit_to_ha': '退出到家庭助理',
    'exp_indefinite': '不定',
    'exp_temporary': '臨時（日期/時間）',
    'expand': '展開',
    'expired': '已到期',
    'export_btn': '匯出設定',
    'export_error': '導出錯誤：{錯誤}',
    'external_panels': '外部警報面板',
    'file_choice': '用作靜態圖像（確定）還是動畫影片（取消）？',
    'file_delete_confirm': '永久刪除該檔案嗎？',
    'file_read_error': '無法讀取檔案。',
    'files_count': '{count} 個文件',
    'files_count_short': '{count} 個文件',
    'first_run_blocked_desc': '設定已鎖定。',
    'first_run_blocked_title': '需要初始設定',
    'first_run_desc': '配置您的初始安全憑證。',
    'first_run_pin_expl': '設定主 PIN 碼來控制系統。',
    'first_run_skip': '暫時跳過',
    'first_run_start': '開始設定',
    'first_run_welcome': '歡迎來到阿古斯！',
    'forgot_pin': '忘了您的 PIN 碼？',
    'fullscreen_title': '全螢幕',
    'generic_error': '錯誤：{錯誤}',
    'github_action': '在 GitHub 上按讚',
    'github_desc': '如果您喜歡這個項目，請在 GitHub 上加星支持開發。',
    'github_title': '支持 Argus',
    'ha_account': 'HA 帳戶',
    'ha_account_linked': 'HA 帳號：{名稱}',
    'ha_account_unavailable': '沒有連結 HA 帳戶',
    'ha_admin_label': '醫管局管理員',
    'ha_role_admin': '行政人員',
    'ha_role_standard': '標準用戶',
    'ha_standard_user_label': '房委會標準用戶',
    'help': '幫助',
    'hero_desc': '智慧家庭安防系統',
    'hide': '隱藏',
    'hide_widget': '隱藏小工具',
    'history_refresh': '🔄 刷新',
    'history_title': '活動歷史',
    'history_unavailable': '活動歷史記錄不可用。',
    'home_default': '我的家',
    'home_fallback': '我的家',
    'home_name_label': '家庭名稱',
    'home_name_lbl': '家庭名稱',
    'home_name_modal_desc': '自訂頂部標題中顯示的居住名稱。',
    'home_name_modal_title': '編輯家庭名稱',
    'home_name_placeholder': '你家的名字...',
    'homekit_bridge': 'HomeKit 橋接器',
    'homekit_house': 'HomeKit 首頁',
    'homekit_not_paired': 'HomeKit 未配對',
    'homekit_title': 'HomeKit 集成',
    'import_btn': '匯入設定',
    'import_error': '導入錯誤：{錯誤}',
    'import_success': '配置已恢復。正在重新加載...',
    'initialization_error_desc': '無法連線到授權的 Home Assistant 後端。',
    'initialization_error_title': '無法啟動阿格斯',
    'instances': 'Argus 安全面板',
    'introduce_pin': '輸入您的安全 PIN 碼',
    'invalid_config': '設定檔無效。',
    'invalid_pin_msg': 'PIN 碼不正確',
    'is_admin': '是管理員嗎？',
    'lang_select_title': '選擇語言',
    'lang_selector_lbl': '⚙️ 語言',
    'language': '語言',
    'lbl_aesthetic_custom': '個人化與設定',
    'lbl_load_file': '上傳文件',
    'lbl_uploaded_files': '上傳的文件',
    'light_siren_color': '顏色',
    'light_siren_flash': '柔和的閃光（如果有）',
    'link_ha_user': '連結HA用戶',
    'linked_rules': '與阿古斯相關的規則',
    'loading': '載入中…',
    'lock_if_open': '如有開啟則阻止',
    'log_action_access_pin_updated': '訪問 PIN 碼已更新',
    'log_action_analysis': '證券分析',
    'log_action_automation': '自動化執行',
    'log_action_backup_created': '備份已創建',
    'log_action_backup_restored': '配置已恢復',
    'log_action_first_run_completed': '初始設定完成',
    'log_action_fullscreen_unlocked': '全螢幕解鎖',
    'log_action_master_pin_rejected': '錯誤的主 PIN 碼被拒絕',
    'log_action_mode_changed': '模式已更改',
    'log_action_profile_selected': '已選擇設定檔',
    'log_action_rejected': '行動被拒絕',
    'log_action_save_ui': '已儲存視覺設定',
    'log_action_schedule_applied': '應用時間表',
    'log_action_select_profile': '設定檔已切換',
    'log_action_sos': '緊急求救警報',
    'log_action_sos_stopped': '求救已停止',
    'log_action_state_restored': '狀態恢復',
    'log_action_stop_sos': 'SOS 警報已停止',
    'log_action_user_added': '使用者已建立',
    'log_action_user_deleted': '用戶已刪除',
    'log_action_user_logged_in': '使用者登入',
    'log_action_verify_access_pin': '訪問 PIN 碼已驗證',
    'log_armed': '武裝',
    'log_by': '經過',
    'log_detail_armed': '系統布防',
    'log_detail_disarm': '系統撤防',
    'log_detail_pin_reset': 'HA 管理員重設主 PIN',
    'log_detail_pin_reset_failed': 'PIN 碼重置嘗試被拒絕',
    'log_detail_triggered': '自動啟用',
    'log_disarmed': '解除武裝',
    'log_mode': '模式',
    'log_no_events': '歷史上沒有記錄任何事件。',
    'log_sensor': '感應器',
    'log_triggered': '觸發',
    'login_btn': '登入',
    'manual_arm': '手動布防',
    'manual_disarm': '手動撤防',
    'master_pin_lbl': '主 PIN 碼',
    'modal_add_user': '+ 新增用戶',
    'modal_cancel': '取消',
    'modal_confirm': '確認',
    'modal_delete_confirm': '刪除該用戶？',
    'modal_edit_name': '編輯姓名',
    'modal_name_label': '個人資料名稱',
    'modal_pin_help': '留空則不需要 PIN。',
    'modal_pin_title': '訪問密碼',
    'modal_save': '節省',
    'modal_user_added': '用戶創建成功。',
    'mode_away': '離家',
    'mode_home': '在家',
    'mode_night': '夜間',
    'mode_vacation': '度假',
    'modes': '模式 / SOS',
    'modes_sos': '模式 / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': '從未觸發過',
    'new_pin': '新密碼',
    'no_alarm_instance': '沒有可用的警報實例',
    'no_auto_linked': '沒有連結自動化。',
    'no_files_uploaded': '沒有上傳文件。',
    'no_files_uploaded_short': '沒有文件',
    'no_instances': '未配置警報實例。',
    'no_results': '沒有結果',
    'no_rules': '沒有可用的規則。',
    'no_sensors_configured': '未配置感測器',
    'no_unlinked_ha_accounts': '沒有未連結的 HA 帳戶。',
    'no_users': '無註冊使用者',
    'none_selected': '未選擇',
    'notif_desc': '重大事件的行動推播通知。',
    'notif_no_services': '沒有可用的行動通知服務。',
    'notification_armed': '{user} 以 {mode} 模式武裝系統。',
    'notification_disarmed': '{user} 撤防系統。',
    'notifications_title': '通知',
    'open_sensors': '開放式感應器',
    'open_sensors_explain': '以下感測器處於開啟狀態：\\\\n{names}\\\\n\\\\n在布防或啟用旁路之前關閉它們。',
    'panic_state_unknown': '無法確定先前的警報狀態。',
    'panic_stop_error': '無法停止警報：{錯誤}',
    'panic_stopped': '警報停止；恢復狀態{狀態}',
    'pending': '待辦的',
    'pin_active_no': '無活動 PIN',
    'pin_active_yes': 'PIN 已啟用',
    'pin_deleted': 'PIN 碼已刪除',
    'pin_desc': '4 至 8 位元安全代碼。',
    'pin_disarm_error': 'PIN 碼錯誤或撤防錯誤',
    'pin_incorrect': 'PIN 碼錯誤',
    'pin_management': '🔑 PIN 密碼管理',
    'pin_master_title': '主 PIN 碼',
    'pin_mismatch': 'PIN 碼不匹配',
    'pin_modal_desc': '輸入您的安全 PIN 碼以繼續。',
    'pin_placeholder': '••••',
    'pin_remove_hint': '留空以刪除主 PIN。',
    'pin_reset_admin_only': '只有管​​理員可以重置 PIN。',
    'pin_reset_confirm': '重置 PIN 碼？',
    'pin_updated': 'PIN 碼更新成功',
    'profile_is_yours': '當前使用者',
    'profile_needs_pin': '此設定檔需要存取 PIN。',
    'profile_no_pin_access': '無需 PIN 碼即可免費存取。',
    'remove_btn': '移除',
    'reset_btn': '恢復出廠預設值',
    'reset_confirm': '將阿格斯重置為出廠預設值？所有配置和 PIN 碼都將遺失。',
    'reset_dashboard': '重設版面配置',
    'reset_error': '重設錯誤：{錯誤}',
    'reset_error_auth': '重置需要身份驗證。',
    'reset_success': '阿古斯重置成功。',
    'reset_widget': '重設小工具',
    'retry_action': '重試',
    'role_argus_admin': '阿格斯管理員',
    'role_argus_admin_short': '行政',
    'role_argus_standard': '標準用戶',
    'role_argus_user': '標準用戶',
    'role_argus_user_short': '使用者',
    'rules_tip': '自動化提示',
    'save_btn': '儲存',
    'save_config': '💾 儲存模式',
    'save_mode': '儲存模式',
    'save_notif': '保存通知',
    'save_user': '儲存用戶',
    'saved': '✓ 已儲存',
    'search_placeholder': '搜尋設備或實體...',
    'search_select': '搜尋並選擇...',
    'searching_auto': '搜尋自動化...',
    'select_all': '選擇全部',
    'select_btn': '+ 選擇',
    'select_entry_sensors': '+ 選擇入口感應器',
    'select_profile_subtitle': '選擇您的用戶個人資料',
    'select_profile_title': '存取設定檔',
    'selected_lbl': '已選擇',
    'selector_accept': '接受',
    'selector_clear': '清除選擇',
    'selector_close': '關閉',
    'selector_panic': '🚨 SOS 緊急輸出',
    'sensor_section': '入侵感應器',
    'sensors_to_bypass': '要繞過的感測器',
    'settings': '⚙️ 設定',
    'setup_access_pin': 'Argus 面板存取 PIN 碼（可選）',
    'setup_admin_name': '管理員姓名',
    'setup_master_pin': '用於布防/撤防的主 PIN（可選）',
    'setup_required_action': '在整合中配置 Argus',
    'setup_required_desc': 'Argus 已安裝，但尚未建立實例。',
    'setup_required_title': '需要阿格斯設置',
    'siren_section': '警報器',
    'size': '尺寸',
    'slide_disarm': '滑動撤防',
    'slide_sos': '滑動觸發 SOS',
    'slide_sos_stop': '滑動停止 SOS',
    'sos_actions': '🚨 SOS 行動',
    'sos_activated': '緊急求救已啟動',
    'sos_call': '致電緊急服務',
    'sos_call_confirm': '致電當地緊急服務中心（{number}）？',
    'sos_call_help': '如果此設備無法撥打電話，Argus 將發送嚴重警報通知。',
    'sos_confirm_text': '滑動即可立即觸發緊急警報。',
    'sos_confirm_title': '🚨 觸發緊急警報？',
    'sos_error': '無法觸發 SOS：{錯誤}',
    'sos_no_outputs': '未選擇緊急輸出設備',
    'sos_outputs_help': '當 SOS 觸發時，這些裝置將始終開啟。',
    'sos_select_outputs': '選擇燈光、警報器或場景',
    'sos_slide': '滑動觸發SOS',
    'sos_stop': '停止 SOS',
    'status_away': '離開',
    'status_closed': '關閉',
    'status_home': '家',
    'status_idle': '閒置',
    'status_open': '開啟',
    'status_recording': '錄製中',
    'support_title': '狀態與支持',
    'switch_profile_btn': '👤 切換設定檔',
    'sync_panel_help': '與外部警報面板同步狀態。',
    'sync_panel_section': '外部警報面板',
    'system_armed': '系統已布防',
    'system_disarmed': '系統已撤防',
    'system_triggered': '警報已觸發！',
    'temp_auto': '自動控溫',
    'temp_displayed': '即時溫度實體',
    'temp_notification_title': '阿格斯 — 溫度警報',
    'temp_thermostat': '恆溫器',
    'thermostat_alert_notif': '恆溫器警報',
    'times_section': '⏱️ 計時延時',
    'triggered': '警報已觸發！',
    'unavailable': '不可用',
    'undo_error': '無法撤銷重設：{錯誤}',
    'undo_reset': '撤銷重置',
    'undo_reset_btn': '復原重設',
    'undo_success': '重置撤銷成功。',
    'unlinked_ha_accounts_title': '家庭助理帳戶',
    'unlock_kiosk': '解鎖資訊亭',
    'update_pin': '更新個人識別碼',
    'upload_error': '上傳錯誤。',
    'url_placeholder': '背景網址...',
    'use_for_hub': '用於集線器',
    'use_for_panel': '用於面板',
    'use_ha_language': '使用家庭助理語言',
    'user_default': '使用者',
    'user_exp_date': '到期日期和時間',
    'user_exp_type': '過期類型',
    'user_no_pin': '無訪問 PIN 碼',
    'user_pin': '訪問密碼',
    'user_pin_action': '設定密碼',
    'user_required': '需要姓名和 PIN 碼。',
    'user_role_action': '改變角色',
    'user_role_label': '使用者角色',
    'username': '使用者名稱',
    'users_title': '👥 使用者和存取控制',
    'vacation': '假期',
    'wait_if_open': '等待感應器關閉',
    'waiting_sensors': '等待感應器關閉',
    'waiting_sensors_count': '正在等待 {count} 個感測器',
    'weather_auto': '自動天氣偵測',
    'weather_source': '天氣實體',
    'welcome_greeting': '歡迎回來！',
    'welcome_profile': '歡迎，{name}',
    'wrong_pin': 'PIN 碼錯誤',
  },
  'ru': {
    'accept': 'Принять',
    'access_control_title': '👥 Пользователи и контроль доступа',
    'access_desc': 'Глобальное управление безопасностью, главный PIN-код и администраторы.',
    'access_pin_lbl': 'PIN доступа',
    'access_title': 'Пользователи и контроль доступа',
    'action_disarmed': 'Разоружен',
    'action_failed': 'Действие не может быть выполнено',
    'action_sos': 'Экстренная сигнализация SOS',
    'action_sos_stop': 'SOS остановлен',
    'active_profile': 'Активный профиль',
    'active_until': 'Срок действия истекает',
    'activity_log': '📋 Журнал активности',
    'add_btn': '+ Добавить',
    'add_user': 'Добавить пользователя',
    'admin_only': 'Только администраторы могут управлять пользователями и настройками.',
    'alarm_instance': 'Экземпляр тревоги',
    'all_sensors_bypassed': 'Все настроенные датчики обойдены.',
    'analysis_title': 'Анализ безопасности',
    'arm_time': 'Задержка постановки на охрану (с)',
    'arm_time_label': 'Задержка постановки на охрану',
    'armed_away': 'Прочь',
    'armed_home': 'Дом',
    'armed_night': 'Ночь',
    'armed_vacation': 'Отпуск',
    'arming': 'Постановка на охрану',
    'automations': 'Автоматизация',
    'available': 'Доступный',
    'backdrop_mode_blur': 'Размытие',
    'backdrop_mode_dim': 'Затемнен',
    'backdrop_mode_none': 'Никто',
    'background_lbl': 'Фон',
    'backup_desc': 'Экспортируйте, восстановите или сбросьте конфигурацию Argus.',
    'backup_title': 'Резервное копирование и восстановление',
    'badge_pin_reset': 'Сброс PIN-кода',
    'badge_pin_reset_failed': 'Сброс PIN-кода не удался',
    'battery_low': 'Низкий заряд батареи',
    'bg_collage': 'Коллаж',
    'bg_hub_default': 'Фон концентратора по умолчанию',
    'bg_hub_selected_from_history': 'Фон хаба, выбранный из истории',
    'bg_hub_title': 'Фон концентратора',
    'bg_image_opt': 'Статическое изображение',
    'bg_none': 'Никто',
    'bg_panel_none': 'Нет фона панели',
    'bg_panel_selected_from_history': 'Фон панели выбран из истории',
    'bg_panel_title': 'Фон панели',
    'bg_photo': 'Фото',
    'bg_sound_opt': 'Фоновый звук',
    'bg_video': 'Анимированное видео',
    'bg_weather': 'Текущая погода',
    'bridge_not_connected': 'Мост не подключен',
    'bridge_not_desc': 'Мост HomeKit в настоящее время отключен.',
    'bridge_paired': 'Мост в паре',
    'bridge_paired_desc': 'Мост HomeKit спарен и активен.',
    'btn_away': '🔴 Вне дома',
    'btn_create_argus_profile': '+ Создать профиль Аргуса',
    'btn_disarmed': '🔓 Снято с охраны',
    'btn_home': '🏠 Дома',
    'btn_night': '🌙 Ночь',
    'btn_sos': '🚨 SOS / ПАНИКА',
    'btn_vacation': '✈️ Отпуск',
    'bypass_lbl': '🚫 Обход',
    'cancel': 'Отмена',
    'cancel_btn': 'Отмена',
    'cannot_arm': 'Не могу поставить систему на охрану',
    'cannot_delete_last_admin': 'Невозможно удалить единственного администратора.',
    'change_btn': 'Изменить',
    'change_pin': 'Изменить PIN-код доступа',
    'change_profile_picture': 'Сменить фото в HA Persons ↗',
    'claim_btn': 'Администратор претензий',
    'claim_desc': 'Для вашей установки требуется администратор для получения доступа.',
    'claim_title': 'Обновление безопасности Argus',
    'clear': 'Прозрачный',
    'clear_history': 'Очистить историю',
    'clear_history_confirm': 'Удалить всю историю активности?',
    'clear_log_btn': '🗑️ Очистить журнал',
    'clock_12h': '12 часов (до полудня/после полудня)',
    'clock_24h': '24 часа',
    'clock_auto': 'Автоматически (по языку)',
    'clock_format_desc': 'Формат часов в верхнем заголовке',
    'clock_format_label': 'Формат часов',
    'close': 'Закрыть',
    'collapse': 'Развернуть',
    'confirm': 'Подтвердить',
    'confirm_pin': 'Подтвердить PIN-код',
    'connected': 'ПОДКЛЮЧЕНО',
    'create_ha': '+ Создать в HA',
    'current_pin': 'Текущий PIN-код',
    'customize': 'Настроить',
    'delete': 'Удалить',
    'delete_btn_title': 'Удалить',
    'delete_file_error': 'Не удалось удалить файл: {ошибка}',
    'delete_user_confirm': 'Вы уверены, что хотите удалить этого пользователя?',
    'delete_user_tooltip': 'Удалить этого пользователя',
    'deselect_all': 'Отменить выбор всех',
    'details_notif': 'Детали уведомления',
    'disarm_time': 'Задержка на вход (с)',
    'disarm_time_label': 'Задержка входа',
    'disarmed': 'Снято с охраны',
    'done': 'Готово',
    'edit_btn': '✏️ Редактировать имя',
    'edit_dashboard': 'Редактировать панель',
    'edit_dashboard_done': '✓ Готово',
    'emergency_call_active': 'Вызов экстренной помощи...',
    'emergency_help': 'Установите номер местной службы экстренной помощи (например, 911 или 112). Включено в SOS-оповещения.',
    'emergency_number_label': '🚨 Местный номер службы экстренной помощи',
    'entry_sensors': 'Датчики входа',
    'error_loading_uploaded_files': 'Ошибка загрузки загруженных файлов.',
    'exit_to_ha': 'Выход в Домашний помощник',
    'exp_indefinite': 'Бессрочный',
    'exp_temporary': 'Временный (дата/время)',
    'expand': 'Развернуть',
    'expired': 'Истекший',
    'export_btn': 'Экспорт конфигурации',
    'export_error': 'Ошибка экспорта: {error}',
    'external_panels': 'Внешние панели сигнализации',
    'file_choice': 'Использовать как статическое изображение (ОК) или анимированное видео (Отмена)?',
    'file_delete_confirm': 'Удалить этот файл навсегда?',
    'file_read_error': 'Не удалось прочитать файл.',
    'files_count': '{количество} файлов',
    'files_count_short': '{количество} файлов',
    'first_run_blocked_desc': 'Настройка заблокирована.',
    'first_run_blocked_title': 'Требуется первоначальная настройка',
    'first_run_desc': 'Настройте первоначальные учетные данные безопасности.',
    'first_run_pin_expl': 'Установите главный PIN-код для управления системой.',
    'first_run_skip': 'Пропустить сейчас',
    'first_run_start': 'Начать установку',
    'first_run_welcome': 'Добро пожаловать в Аргус!',
    'forgot_pin': 'Забыли свой PIN-код?',
    'fullscreen_title': 'Полноэкранный',
    'generic_error': 'Ошибка: {ошибка}',
    'github_action': 'Звезда на GitHub',
    'github_desc': 'Если вам нравится этот проект, поддержите разработку звездочкой на GitHub.',
    'github_title': 'Поддержите Argus',
    'ha_account': 'Аккаунт HA',
    'ha_account_linked': 'Учетная запись высокой доступности: {имя}',
    'ha_account_unavailable': 'Никакая учетная запись HA не связана',
    'ha_admin_label': 'Администратор высокой доступности',
    'ha_role_admin': 'Администратор',
    'ha_role_standard': 'Стандартный пользователь',
    'ha_standard_user_label': 'Стандартный пользователь высокой доступности',
    'help': 'Помощь',
    'hero_desc': 'Интеллектуальная система домашней безопасности',
    'hide': 'Скрыть',
    'hide_widget': 'Скрыть виджет',
    'history_refresh': '🔄 Обновить',
    'history_title': 'История активности',
    'history_unavailable': 'История активности недоступна.',
    'home_default': 'Мой дом',
    'home_fallback': 'Мой дом',
    'home_name_label': 'Домашнее имя',
    'home_name_lbl': 'Домашнее имя',
    'home_name_modal_desc': 'Настройте свое имя проживания, указанное в верхнем заголовке.',
    'home_name_modal_title': 'Изменить домашнее имя',
    'home_name_placeholder': 'Ваше домашнее имя...',
    'homekit_bridge': 'ГлавнаяKit Bridge',
    'homekit_house': 'ГлавнаяKit Home',
    'homekit_not_paired': 'HomeKit не подключен',
    'homekit_title': 'Интеграция HomeKit',
    'import_btn': 'Импорт конфигурации',
    'import_error': 'Ошибка импорта: {error}',
    'import_success': 'Конфигурация восстановлена. Перезагрузка…',
    'initialization_error_desc': 'Не удалось подключиться к авторизованному серверу Home Assistant.',
    'initialization_error_title': 'Не удалось запустить Аргус',
    'instances': 'Панель безопасности Argus',
    'introduce_pin': 'Введите свой PIN-код безопасности',
    'invalid_config': 'Неверный файл конфигурации.',
    'invalid_pin_msg': 'Неправильный PIN-код',
    'is_admin': 'Администратор?',
    'lang_select_title': 'Выберите язык',
    'lang_selector_lbl': '⚙️ Язык',
    'language': 'Язык',
    'lbl_aesthetic_custom': 'Персонализация и настройки',
    'lbl_load_file': 'Загрузить файл',
    'lbl_uploaded_files': 'Загруженные файлы',
    'light_siren_color': 'Цвет',
    'light_siren_flash': 'Мягкая вспышка, если есть',
    'link_ha_user': 'Ссылка на пользователя высокой доступности',
    'linked_rules': 'Правила, связанные с Argus',
    'loading': 'Загрузка…',
    'lock_if_open': 'Блокировать при открытии',
    'log_action_access_pin_updated': 'PIN-код доступа обновлен.',
    'log_action_analysis': 'Анализ безопасности',
    'log_action_automation': 'Автоматизация выполнена',
    'log_action_backup_created': 'Резервная копия создана',
    'log_action_backup_restored': 'Конфигурация восстановлена',
    'log_action_first_run_completed': 'Первоначальная настройка завершена',
    'log_action_fullscreen_unlocked': 'Полный экран разблокирован',
    'log_action_master_pin_rejected': 'Неправильный главный PIN-код отклонен.',
    'log_action_mode_changed': 'Режим изменен',
    'log_action_profile_selected': 'Профиль выбран',
    'log_action_rejected': 'Действие отклонено',
    'log_action_save_ui': 'Визуальные настройки сохранены.',
    'log_action_schedule_applied': 'Расписание применено',
    'log_action_select_profile': 'Профиль переключен',
    'log_action_sos': 'Экстренная сигнализация SOS',
    'log_action_sos_stopped': 'SOS остановлен',
    'log_action_state_restored': 'Состояние восстановлено',
    'log_action_stop_sos': 'Сигнал SOS отключен',
    'log_action_user_added': 'Создано пользователем',
    'log_action_user_deleted': 'Пользователь удален',
    'log_action_user_logged_in': 'Пользователь вошел в систему',
    'log_action_verify_access_pin': 'PIN-код доступа подтвержден',
    'log_armed': 'ВООРУЖЕН',
    'log_by': 'к',
    'log_detail_armed': 'Система поставлена ​​на охрану',
    'log_detail_disarm': 'Система снята с охраны',
    'log_detail_pin_reset': 'Сброс главного PIN-кода администратором HA',
    'log_detail_pin_reset_failed': 'Попытка сброса PIN-кода отклонена',
    'log_detail_triggered': 'Автоматическая активация',
    'log_disarmed': 'РАЗОРУЖЕН',
    'log_mode': 'Режим',
    'log_no_events': 'Никакие события не зафиксированы в истории.',
    'log_sensor': 'Датчик',
    'log_triggered': 'Сработало',
    'login_btn': 'Авторизоваться',
    'manual_arm': 'Ручная постановка на охрану',
    'manual_disarm': 'Ручное снятие с охраны',
    'master_pin_lbl': 'Мастер-PIN',
    'modal_add_user': '+ Добавить пользователя',
    'modal_cancel': 'Отмена',
    'modal_confirm': 'Подтверждать',
    'modal_delete_confirm': 'Удалить этого пользователя?',
    'modal_edit_name': 'Изменить имя',
    'modal_name_label': 'Имя профиля',
    'modal_pin_help': 'Оставьте пустым, чтобы не требовать PIN-код.',
    'modal_pin_title': 'PIN-код доступа',
    'modal_save': 'Сохранять',
    'modal_user_added': 'Пользователь успешно создан.',
    'mode_away': 'Вне дома',
    'mode_home': 'Дома',
    'mode_night': 'Ночь',
    'mode_vacation': 'Отпуск',
    'modes': 'Режимы / SOS',
    'modes_sos': 'Режимы / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Никогда не срабатывал',
    'new_pin': 'Новый ПИН-код',
    'no_alarm_instance': 'Нет доступного экземпляра тревоги',
    'no_auto_linked': 'Никакой автоматизации не связано.',
    'no_files_uploaded': 'Файлы не загружены.',
    'no_files_uploaded_short': 'Нет файлов',
    'no_instances': 'Экземпляры сигналов тревоги не настроены.',
    'no_results': 'Нет результатов',
    'no_rules': 'Нет доступных правил.',
    'no_sensors_configured': 'Датчики не настроены',
    'no_unlinked_ha_accounts': 'Нет несвязанных учетных записей высокой доступности.',
    'no_users': 'Нет зарегистрированных пользователей',
    'none_selected': 'Ничего не выбрано',
    'notif_desc': 'Мобильные push-уведомления о критических событиях.',
    'notif_no_services': 'Службы мобильных уведомлений недоступны.',
    'notification_armed': 'Пользователь {user} поставил систему на охрану в режиме {mode}.',
    'notification_disarmed': 'Пользователь {user} снял систему с охраны.',
    'notifications_title': 'Уведомления',
    'open_sensors': 'Открытые датчики',
    'open_sensors_explain': 'Следующие датчики открыты:\\\\n{имена}\\\\n\\\\nЗакройте их перед постановкой на охрану или включите обход.',
    'panic_state_unknown': 'Не удалось определить предыдущее состояние тревоги.',
    'panic_stop_error': 'Не удалось выключить будильник: {ошибка}',
    'panic_stopped': 'Сигнализация отключена; восстановленное состояние {state}',
    'pending': 'В ожидании',
    'pin_active_no': 'Нет активного PIN',
    'pin_active_yes': 'PIN Активен',
    'pin_deleted': 'PIN-код удален.',
    'pin_desc': 'Код безопасности от 4 до 8 цифр.',
    'pin_disarm_error': 'Неправильный PIN-код или ошибка снятия с охраны',
    'pin_incorrect': 'Неправильный PIN-код',
    'pin_management': '🔑 Управление PIN-кодами',
    'pin_master_title': 'Мастер-PIN',
    'pin_mismatch': 'PIN-коды не совпадают',
    'pin_modal_desc': 'Введите свой PIN-код безопасности, чтобы продолжить.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Оставьте поле пустым, чтобы удалить главный PIN-код.',
    'pin_reset_admin_only': 'Только администраторы могут сбросить PIN-код.',
    'pin_reset_confirm': 'Сбросить PIN-код?',
    'pin_updated': 'PIN-код успешно обновлен',
    'profile_is_yours': 'Ваш профиль',
    'profile_needs_pin': 'Для этого профиля требуется PIN-код доступа.',
    'profile_no_pin_access': 'Бесплатный доступ без PIN-кода.',
    'remove_btn': 'Удалить',
    'reset_btn': 'Сброс до заводских настроек',
    'reset_confirm': 'Сбросить Аргус к заводским настройкам? Все конфигурации и PIN-коды будут потеряны.',
    'reset_dashboard': 'Сбросить макет',
    'reset_error': 'Ошибка сброса: {error}',
    'reset_error_auth': 'Для сброса требуется аутентификация.',
    'reset_success': 'Аргус успешно перезагружен.',
    'reset_widget': 'Сбросить виджет',
    'retry_action': 'Повторить попытку',
    'role_argus_admin': 'Администратор Аргуса',
    'role_argus_admin_short': 'Админ',
    'role_argus_standard': 'Стандартный пользователь',
    'role_argus_user': 'Стандартный пользователь',
    'role_argus_user_short': 'Пользователь',
    'rules_tip': 'Совет по автоматизации',
    'save_btn': 'Сохранить',
    'save_config': '💾 Сохранить режим',
    'save_mode': 'Режим сохранения',
    'save_notif': 'Сохранить уведомления',
    'save_user': 'Сохранить пользователя',
    'saved': '✓ Сохранено',
    'search_placeholder': 'Поиск устройства или объекта…',
    'search_select': 'Ищите и выбирайте…',
    'searching_auto': 'Поиск средств автоматизации…',
    'select_all': 'Выбрать все',
    'select_btn': '+ Выбрать',
    'select_entry_sensors': '+ Выбрать входные датчики',
    'select_profile_subtitle': 'Выберите свой профиль пользователя',
    'select_profile_title': 'Доступ к профилям',
    'selected_lbl': 'Выбрано',
    'selector_accept': 'Принимать',
    'selector_clear': 'Очистить выбор',
    'selector_close': 'Закрывать',
    'selector_panic': '🚨 Экстренные выходы SOS',
    'sensor_section': 'Датчики проникновения',
    'sensors_to_bypass': 'Датчики для обхода',
    'settings': '⚙️ Настройки',
    'setup_access_pin': 'PIN-код доступа к панели Argus (необязательно)',
    'setup_admin_name': 'Имя администратора',
    'setup_master_pin': 'Главный PIN-код для постановки/снятия с охраны (опционально)',
    'setup_required_action': 'Настройка Argus в интеграциях',
    'setup_required_desc': 'Argus установлен, но экземпляр еще не создан.',
    'setup_required_title': 'Требуется настройка Argus',
    'siren_section': 'Сирены',
    'size': 'Размер',
    'slide_disarm': 'Сдвиньте для снятия охраны',
    'slide_sos': 'Сдвиньте для включения SOS',
    'slide_sos_stop': 'Сдвиньте для остановки SOS',
    'sos_actions': '🚨 SOS-действия',
    'sos_activated': 'SOS активирован',
    'sos_call': 'Позвоните в службу экстренной помощи',
    'sos_call_confirm': 'Позвонить в местную службу экстренной помощи ({номер})?',
    'sos_call_help': 'Если это устройство не может совершать телефонные звонки, Argus отправит критическое уведомление.',
    'sos_confirm_text': 'Сдвиньте, чтобы немедленно включить аварийную сигнализацию.',
    'sos_confirm_title': '🚨 Включить экстренную сигнализацию?',
    'sos_error': 'Не удалось вызвать SOS: {ошибка}',
    'sos_no_outputs': 'Устройства аварийного вывода не выбраны',
    'sos_outputs_help': 'Эти устройства всегда включаются при срабатывании SOS.',
    'sos_select_outputs': 'Выберите свет, сирены или сцены',
    'sos_slide': 'Слайд для вызова SOS',
    'sos_stop': 'ОСТАНОВИТЬ SOS',
    'status_away': 'Прочь',
    'status_closed': 'ЗАКРЫТО',
    'status_home': 'Дом',
    'status_idle': 'Ожидание',
    'status_open': 'ОТКРЫТО',
    'status_recording': 'Запись',
    'support_title': 'Статус и поддержка',
    'switch_profile_btn': '👤 Сменить профиль',
    'sync_panel_help': 'Состояние синхронизации с внешними панелями сигнализации.',
    'sync_panel_section': 'Внешние панели сигнализации',
    'system_armed': 'СИСТЕМА НА ОХРАНЕ',
    'system_disarmed': 'СИСТЕМА СНЯТА С ОХРАНЫ',
    'system_triggered': 'ТРЕВОГА СРАБОТАЛА!',
    'temp_auto': 'Автоматическая температура',
    'temp_displayed': 'Текущая температура',
    'temp_notification_title': 'Аргус — оповещение о температуре',
    'temp_thermostat': 'Термостат',
    'thermostat_alert_notif': 'Оповещение термостата',
    'times_section': '⏱️ Таймеры',
    'triggered': 'Сработала сигнализация!',
    'unavailable': 'Недоступно',
    'undo_error': 'Не удалось отменить сброс: {ошибка}',
    'undo_reset': 'Отменить сброс',
    'undo_reset_btn': 'Отменить сброс',
    'undo_success': 'Сброс успешно отменен.',
    'unlinked_ha_accounts_title': 'Аккаунты домашнего помощника',
    'unlock_kiosk': 'Разблокировать киоск',
    'update_pin': 'Обновить PIN-код',
    'upload_error': 'Ошибка загрузки.',
    'url_placeholder': 'Фоновый URL…',
    'use_for_hub': 'Использовать для концентратора',
    'use_for_panel': 'Использование для панели',
    'use_ha_language': 'Использовать язык Home Assistant',
    'user_default': 'Пользователь',
    'user_exp_date': 'Дата и время истечения срока действия',
    'user_exp_type': 'Тип срока действия',
    'user_no_pin': 'Нет PIN-кода доступа',
    'user_pin': 'PIN-код доступа',
    'user_pin_action': 'Установить PIN-код',
    'user_required': 'Требуется имя и PIN-код.',
    'user_role_action': 'Изменить роль',
    'user_role_label': 'Роль пользователя',
    'username': 'Имя пользователя',
    'users_title': '👥 Пользователи и контроль доступа',
    'vacation': 'Отпуск',
    'wait_if_open': 'Ждать закрытия датчиков',
    'waiting_sensors': 'ОЖИДАНИЕ ДАТЧИКОВ',
    'waiting_sensors_count': 'ОЖИДАНИЕ ДАТЧИКОВ: {count}',
    'weather_auto': 'Автоматическое определение погоды',
    'weather_source': 'Погода',
    'welcome_greeting': 'Добро пожаловать!',
    'welcome_profile': 'Добро пожаловать, {имя}',
    'wrong_pin': 'Неправильный PIN-код',
  },
  'hi': {
    'accept': 'स्वीकार करना',
    'access_control_title': '👥 उपयोगकर्ता और अभिगम नियंत्रण',
    'access_desc': 'वैश्विक सुरक्षा प्रबंधन, मास्टर पिन और प्रशासक।',
    'access_pin_lbl': 'पिन तक पहुंचें',
    'access_title': 'उपयोगकर्ता एवं अभिगम नियंत्रण',
    'action_disarmed': 'निरस्त्र',
    'action_failed': 'कार्रवाई अमल में नहीं लाई जा सकी',
    'action_sos': 'आपातकालीन एसओएस अलार्म',
    'action_sos_stop': 'एसओएस बंद हो गया',
    'active_profile': 'सक्रिय प्रोफ़ाइल',
    'active_until': 'समय-सीमा समाप्त',
    'activity_log': '📋 गतिविधि लॉग',
    'add_btn': '+ जोड़ें',
    'add_user': 'उपयोगकर्ता जोड़ें',
    'admin_only': 'केवल व्यवस्थापक ही उपयोगकर्ताओं और सेटिंग्स को प्रबंधित कर सकते हैं।',
    'alarm_instance': 'अलार्म उदाहरण',
    'all_sensors_bypassed': 'सभी कॉन्फ़िगर किए गए सेंसर बायपास हो गए हैं।',
    'analysis_title': 'सुरक्षा विश्लेषण',
    'arm_time': 'शस्त्रागार में देरी',
    'arm_time_label': 'शस्त्रागार में देरी',
    'armed_away': 'दूर',
    'armed_home': 'घर',
    'armed_night': 'रात',
    'armed_vacation': 'छुट्टी',
    'arming': 'असलह',
    'automations': 'स्वचालन',
    'available': 'उपलब्ध',
    'backdrop_mode_blur': 'कलंक',
    'backdrop_mode_dim': 'मंद हो',
    'backdrop_mode_none': 'कोई नहीं',
    'background_lbl': 'पृष्ठभूमि',
    'backup_desc': 'Argus कॉन्फ़िगरेशन को निर्यात करें, पुनर्स्थापित करें या रीसेट करें।',
    'backup_title': 'बैकअप और पुनर्स्थापना',
    'badge_pin_reset': 'पिन रीसेट',
    'badge_pin_reset_failed': 'पिन रीसेट विफल',
    'battery_low': 'लो बैटरी',
    'bg_collage': 'महाविद्यालय',
    'bg_hub_default': 'डिफ़ॉल्ट हब पृष्ठभूमि',
    'bg_hub_selected_from_history': 'इतिहास से हब पृष्ठभूमि का चयन किया गया',
    'bg_hub_title': 'हब पृष्ठभूमि',
    'bg_image_opt': 'स्थैतिक छवि',
    'bg_none': 'कोई नहीं',
    'bg_panel_none': 'कोई पैनल पृष्ठभूमि नहीं',
    'bg_panel_selected_from_history': 'इतिहास से चयनित पैनल पृष्ठभूमि',
    'bg_panel_title': 'पैनल पृष्ठभूमि',
    'bg_photo': 'तस्वीर',
    'bg_sound_opt': 'पृष्ठभूमि आवाज',
    'bg_video': 'एनिमेटेड वीडियो',
    'bg_weather': 'लाइव मौसम',
    'bridge_not_connected': 'पुल जुड़ा नहीं है',
    'bridge_not_desc': 'होमकिट ब्रिज फिलहाल डिस्कनेक्ट है।',
    'bridge_paired': 'पुल युग्मित',
    'bridge_paired_desc': 'होमकिट ब्रिज युग्मित और सक्रिय है।',
    'btn_away': '🔴 दूर',
    'btn_create_argus_profile': '+ आर्गस प्रोफ़ाइल बनाएं',
    'btn_disarmed': '🔓 निहत्था',
    'btn_home': '🏠घर',
    'btn_night': '🌙रात',
    'btn_sos': '🚨 एसओएस / पैनिक',
    'btn_vacation': '✈️ छुट्टियाँ',
    'bypass_lbl': '🚫 बाईपास',
    'cancel': 'रद्द करना',
    'cancel_btn': 'रद्द करना',
    'cannot_arm': 'सिस्टम को आर्म नहीं किया जा सकता',
    'cannot_delete_last_admin': 'एकमात्र व्यवस्थापक को हटाया नहीं जा सकता.',
    'change_btn': 'परिवर्तन',
    'change_pin': 'एक्सेस पिन बदलें',
    'change_profile_picture': 'हा व्यक्तियों में फोटो बदलें ↗',
    'claim_btn': 'दावा प्रशासक',
    'claim_desc': 'आपके इंस्टॉलेशन के लिए पहुंच प्राप्त करने के लिए एक व्यवस्थापक की आवश्यकता होती है।',
    'claim_title': 'आर्गस सुरक्षा अद्यतन',
    'clear': 'स्पष्ट',
    'clear_history': 'इतिहास मिटा दें',
    'clear_history_confirm': 'सभी गतिविधि इतिहास हटाएँ?',
    'clear_log_btn': '🗑️ लॉग साफ़ करें',
    'clock_12h': '12-घंटे (AM/PM)',
    'clock_24h': '24 घंटे',
    'clock_auto': 'स्वचालित (भाषा के अनुसार)',
    'clock_format_desc': 'शीर्ष शीर्षलेख में घड़ी प्रारूप',
    'clock_format_label': 'घड़ी प्रारूप',
    'close': 'बंद करना',
    'collapse': 'गिर जाना',
    'confirm': 'पुष्टि करना',
    'confirm_pin': 'पिन की पुष्टि करें',
    'connected': 'जुड़े हुए',
    'create_ha': '+ हा में बनाएँ',
    'current_pin': 'वर्तमान पिन',
    'customize': 'अनुकूलित करें',
    'delete': 'मिटाना',
    'delete_btn_title': 'मिटाना',
    'delete_file_error': 'फ़ाइल हटाई नहीं जा सकी: {त्रुटि}',
    'delete_user_confirm': 'क्या आप वाकई इस उपयोगकर्ता को हटाना चाहते हैं?',
    'delete_user_tooltip': 'इस उपयोगकर्ता को हटाएँ',
    'deselect_all': 'सबको अचयनित करो',
    'details_notif': 'अधिसूचना विवरण',
    'disarm_time': 'प्रवेश में देरी',
    'disarm_time_label': 'प्रवेश में देरी',
    'disarmed': 'निरस्त्र',
    'done': 'हो गया',
    'edit_btn': '✏️ नाम संपादित करें',
    'edit_dashboard': 'डैशबोर्ड संपादित करें',
    'edit_dashboard_done': '✓ हो गया',
    'emergency_call_active': 'आपातकालीन कॉल जारी है...',
    'emergency_help': 'स्थानीय आपातकालीन सेवा नंबर सेट करें (जैसे 911 या 112)। एसओएस अलर्ट में शामिल।',
    'emergency_number_label': '🚨स्थानीय आपातकालीन नंबर',
    'entry_sensors': 'प्रवेश सेंसर',
    'error_loading_uploaded_files': 'अपलोड की गई फ़ाइलें लोड करने में त्रुटि.',
    'exit_to_ha': 'गृह सहायक से बाहर निकलें',
    'exp_indefinite': 'अनिश्चितकालीन',
    'exp_temporary': 'अस्थायी (तिथि/समय)',
    'expand': 'बढ़ाना',
    'expired': 'खत्म हो चुका',
    'export_btn': 'निर्यात कॉन्फ़िगरेशन',
    'export_error': 'निर्यात त्रुटि: {त्रुटि}',
    'external_panels': 'बाहरी अलार्म पैनल',
    'file_choice': 'स्थिर छवि (ओके) या एनिमेटेड वीडियो (रद्द करें) के रूप में उपयोग करें?',
    'file_delete_confirm': 'इस फ़ाइल को स्थायी रूप से हटाएं?',
    'file_read_error': 'फ़ाइल नहीं पढ़ सका.',
    'files_count': '{गिनती} फ़ाइलें',
    'files_count_short': '{गिनती} फ़ाइलें',
    'first_run_blocked_desc': 'सेटअप लॉक है.',
    'first_run_blocked_title': 'प्रारंभिक सेटअप आवश्यक है',
    'first_run_desc': 'अपने प्रारंभिक सुरक्षा क्रेडेंशियल कॉन्फ़िगर करें.',
    'first_run_pin_expl': 'सिस्टम को नियंत्रित करने के लिए एक मास्टर पिन सेट करें।',
    'first_run_skip': 'अभी के लिए छोड़ दे',
    'first_run_start': 'सेटअप प्रारंभ करें',
    'first_run_welcome': 'आर्गस में आपका स्वागत है!',
    'forgot_pin': 'अपना पिन भूल गए?',
    'fullscreen_title': 'पूर्ण स्क्रीन',
    'generic_error': 'त्रुटि: {त्रुटि}',
    'github_action': 'GitHub पर स्टार लगाएं',
    'github_desc': 'यदि आप इस परियोजना का आनंद लेते हैं, तो GitHub पर एक स्टार के साथ विकास का समर्थन करें।',
    'github_title': 'आर्गस का समर्थन करें',
    'ha_account_linked': 'हा खाता: {नाम}',
    'ha_account_unavailable': 'कोई HA खाता लिंक नहीं किया गया',
    'ha_admin_label': 'हा प्रशासक',
    'ha_role_admin': 'प्रशासक',
    'ha_role_standard': 'मानक प्रयोगकर्ता',
    'ha_standard_user_label': 'हा मानक उपयोगकर्ता',
    'help': 'मदद',
    'hero_desc': 'बुद्धिमान गृह सुरक्षा प्रणाली',
    'hide': 'छिपाना',
    'hide_widget': 'विजेट छिपाएँ',
    'history_refresh': '🔄 ताज़ा करें',
    'history_title': 'गतिविधि इतिहास',
    'history_unavailable': 'गतिविधि इतिहास अनुपलब्ध.',
    'home_default': 'मेरा घर',
    'home_fallback': 'मेरा घर',
    'home_name_label': 'घर का नाम',
    'home_name_lbl': 'घर का नाम',
    'home_name_modal_desc': 'शीर्ष शीर्षलेख में दिखाए गए अपने निवास नाम को अनुकूलित करें।',
    'home_name_modal_title': 'घर का नाम संपादित करें',
    'home_name_placeholder': 'आपके घर का नाम...',
    'homekit_bridge': 'होमकिट ब्रिज',
    'homekit_house': 'होमकिट होम',
    'homekit_not_paired': 'होमकिट युग्मित नहीं है',
    'homekit_title': 'होमकिट एकीकरण',
    'import_btn': 'कॉन्फ़िगरेशन आयात करें',
    'import_error': 'आयात त्रुटि: {त्रुटि}',
    'import_success': 'कॉन्फ़िगरेशन पुनर्स्थापित किया गया. पुनः लोड हो रहा है...',
    'initialization_error_desc': 'अधिकृत होम असिस्टेंट बैकएंड से कनेक्ट नहीं हो सका।',
    'initialization_error_title': 'आर्गस प्रारंभ नहीं हो सका',
    'instances': 'Argus सुरक्षा पैनल',
    'introduce_pin': 'अपना सुरक्षा पिन दर्ज करें',
    'invalid_config': 'अमान्य कॉन्फ़िगरेशन फ़ाइल.',
    'invalid_pin_msg': 'ग़लत पिन',
    'is_admin': 'प्रशासक है?',
    'lang_select_title': 'भाषा चुने',
    'lang_selector_lbl': '⚙️ भाषा',
    'language': 'भाषा',
    'lbl_aesthetic_custom': 'वैयक्तिकरण और सेटिंग्स',
    'lbl_load_file': 'फ़ाइल अपलोड करें',
    'lbl_uploaded_files': 'अपलोड की गई फ़ाइलें',
    'light_siren_color': 'रंग',
    'light_siren_flash': 'यदि उपलब्ध हो तो हल्का फ्लैश',
    'link_ha_user': 'लिंक HA उपयोगकर्ता',
    'linked_rules': 'आर्गस से जुड़े नियम',
    'loading': 'लोड हो रहा है...',
    'lock_if_open': 'यदि खुला हो तो ब्लॉक करें',
    'log_action_access_pin_updated': 'एक्सेस पिन अपडेट किया गया',
    'log_action_analysis': 'सुरक्षा विश्लेषण',
    'log_action_automation': 'स्वचालन निष्पादित',
    'log_action_backup_created': 'बैकअप बनाया गया',
    'log_action_backup_restored': 'कॉन्फ़िगरेशन पुनर्स्थापित किया गया',
    'log_action_first_run_completed': 'आरंभिक सेटअप पूरा हो गया',
    'log_action_fullscreen_unlocked': 'पूर्ण स्क्रीन अनलॉक की गई',
    'log_action_master_pin_rejected': 'ग़लत मास्टर पिन अस्वीकृत',
    'log_action_mode_changed': 'मोड बदला गया',
    'log_action_profile_selected': 'प्रोफ़ाइल चयनित',
    'log_action_rejected': 'कार्रवाई अस्वीकृत',
    'log_action_save_ui': 'दृश्य सेटिंग्स सहेजी गईं',
    'log_action_schedule_applied': 'अनुसूची लागू',
    'log_action_select_profile': 'प्रोफ़ाइल स्विच की गई',
    'log_action_sos': 'आपातकालीन एसओएस अलार्म',
    'log_action_sos_stopped': 'एसओएस बंद हो गया',
    'log_action_state_restored': 'राज्य बहाल',
    'log_action_stop_sos': 'एसओएस अलार्म बंद हो गया',
    'log_action_user_added': 'उपयोगकर्ता बनाया गया',
    'log_action_user_deleted': 'उपयोगकर्ता हटा दिया गया',
    'log_action_user_logged_in': 'उपयोगकर्ता लॉग इन हुआ',
    'log_action_verify_access_pin': 'एक्सेस पिन सत्यापित',
    'log_armed': 'सशस्त्र',
    'log_by': 'द्वारा',
    'log_detail_armed': 'सिस्टम से लैस',
    'log_detail_disarm': 'सिस्टम निरस्त्र',
    'log_detail_pin_reset': 'एचए व्यवस्थापक द्वारा मास्टर पिन रीसेट',
    'log_detail_pin_reset_failed': 'पिन रीसेट प्रयास अस्वीकृत',
    'log_detail_triggered': 'स्वचालित सक्रियण',
    'log_disarmed': 'निरस्त्र',
    'log_mode': 'तरीका',
    'log_no_events': 'इतिहास में कोई घटना दर्ज नहीं.',
    'log_sensor': 'सेंसर',
    'log_triggered': 'शुरू हो रहा',
    'login_btn': 'लॉग इन करें',
    'manual_arm': 'मैनुअल आर्मिंग',
    'manual_disarm': 'मैनुअल निरस्त्रीकरण',
    'master_pin_lbl': 'मास्टर पिन',
    'modal_add_user': '+ उपयोगकर्ता जोड़ें',
    'modal_cancel': 'रद्द करना',
    'modal_confirm': 'पुष्टि करना',
    'modal_delete_confirm': 'इस उपयोगकर्ता को हटाएं?',
    'modal_edit_name': 'नाम संपादित करें',
    'modal_name_label': 'प्रोफ़ाइल नाम',
    'modal_pin_help': 'पिन की आवश्यकता न हो इसलिए खाली छोड़ दें।',
    'modal_pin_title': 'पिन तक पहुंचें',
    'modal_save': 'बचाना',
    'modal_user_added': 'उपयोगकर्ता सफलतापूर्वक बनाया गया.',
    'mode_away': 'दूर',
    'mode_home': 'घर',
    'mode_night': 'रात',
    'mode_vacation': 'छुट्टी',
    'modes': 'मोड / SOS',
    'modes_sos': 'मोड / SOS',
    'mqtt_label': 'एमक्यूटीटी',
    'never_triggered': 'कभी ट्रिगर नहीं हुआ',
    'new_pin': 'नया पिन',
    'no_alarm_instance': 'कोई अलार्म उदाहरण उपलब्ध नहीं है',
    'no_auto_linked': 'कोई ऑटोमेशन लिंक नहीं है.',
    'no_files_uploaded': 'कोई फ़ाइल अपलोड नहीं की गई.',
    'no_files_uploaded_short': 'कोई फ़ाइल नहीं',
    'no_instances': 'कोई अलार्म इंस्टेंस कॉन्फ़िगर नहीं किया गया.',
    'no_results': 'कोई परिणाम नहीं',
    'no_rules': 'कोई नियम उपलब्ध नहीं है.',
    'no_sensors_configured': 'कोई सेंसर कॉन्फ़िगर नहीं किया गया',
    'no_unlinked_ha_accounts': 'कोई भी अनलिंक किया गया HA खाता नहीं.',
    'no_users': 'कोई उपयोगकर्ता कॉन्फ़िगर नहीं किया गया.',
    'none_selected': 'कोई भी चयनित नहीं',
    'notif_desc': 'महत्वपूर्ण घटनाओं के लिए मोबाइल पुश सूचनाएं।',
    'notif_no_services': 'कोई मोबाइल अधिसूचना सेवा उपलब्ध नहीं है.',
    'notification_armed': '{उपयोगकर्ता} ने सिस्टम को {मोड} मोड में सशस्त्र किया।',
    'notification_disarmed': '{उपयोगकर्ता} ने सिस्टम को निष्क्रिय कर दिया।',
    'notifications_title': 'सूचनाएं',
    'open_sensors': 'सेंसर खोलें',
    'open_sensors_explain': 'निम्नलिखित सेंसर खुले हैं:\\\\n{नाम}\\\\n\\\\nआर्मिंग से पहले उन्हें बंद करें या बायपास सक्षम करें।',
    'panic_state_unknown': 'पिछली अलार्म स्थिति निर्धारित नहीं की जा सकी.',
    'panic_stop_error': 'अलार्म बंद नहीं किया जा सका: {त्रुटि}',
    'panic_stopped': 'अलार्म बंद हो गया; बहाल स्थिति {राज्य}',
    'pending': 'लंबित',
    'pin_active_no': 'कोई सक्रिय पिन नहीं',
    'pin_active_yes': 'सक्रिय पिन',
    'pin_deleted': 'पिन हटा दिया गया',
    'pin_desc': '4 से 8 अंकीय सुरक्षा कोड.',
    'pin_disarm_error': 'ग़लत पिन या निरस्त्रीकरण त्रुटि',
    'pin_incorrect': 'ग़लत पिन',
    'pin_management': '🔑 पिन प्रबंधन',
    'pin_master_title': 'मास्टर पिन',
    'pin_mismatch': 'पिन मेल नहीं खाते',
    'pin_modal_desc': 'जारी रखने के लिए अपना सुरक्षा पिन दर्ज करें।',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'मास्टर पिन हटाने के लिए खाली छोड़ दें.',
    'pin_reset_admin_only': 'केवल व्यवस्थापक ही पिन रीसेट कर सकते हैं.',
    'pin_reset_confirm': 'पिन रीसेट करें?',
    'pin_updated': 'पिन सफलतापूर्वक अपडेट किया गया',
    'profile_is_yours': 'आपकी प्रोफ़ाइल',
    'profile_needs_pin': 'इस प्रोफ़ाइल के लिए एक एक्सेस पिन की आवश्यकता है.',
    'profile_no_pin_access': 'बिना पिन के निःशुल्क प्रवेश।',
    'remove_btn': 'निकालना',
    'reset_btn': 'नए यंत्र जैसी सेटिंग',
    'reset_confirm': 'क्या Argus को फ़ैक्टरी डिफ़ॉल्ट पर रीसेट करें? सभी कॉन्फ़िगरेशन और पिन खो जाएंगे.',
    'reset_dashboard': 'लेआउट रीसेट करें',
    'reset_error': 'त्रुटि रीसेट करें: {त्रुटि}',
    'reset_error_auth': 'रीसेट करने के लिए प्रमाणीकरण आवश्यक है.',
    'reset_success': 'आर्गस सफलतापूर्वक रीसेट हो गया।',
    'reset_widget': 'विजेट रीसेट करें',
    'retry_action': 'पुन: प्रयास करें',
    'role_argus_admin': 'आर्गस प्रशासक',
    'role_argus_admin_short': 'व्यवस्थापक',
    'role_argus_standard': 'मानक प्रयोगकर्ता',
    'role_argus_user': 'मानक प्रयोगकर्ता',
    'role_argus_user_short': 'उपयोगकर्ता',
    'rules_tip': 'स्वचालन टिप',
    'save_btn': 'बचाना',
    'save_config': '💾 सेव मोड',
    'save_mode': 'सेव मोड',
    'save_notif': 'सूचनाएं सहेजें',
    'save_user': 'उपयोगकर्ता सहेजें',
    'saved': '✓ सहेजा गया',
    'search_placeholder': 'डिवाइस या इकाई खोजें…',
    'search_select': 'खोजें और चुनें…',
    'searching_auto': 'ऑटोमेशन खोज रहे हैं…',
    'select_all': 'सबका चयन करें',
    'select_btn': '+ चुनें',
    'select_entry_sensors': '+ एंट्री सेंसर चुनें',
    'select_profile_subtitle': 'अपनी उपयोगकर्ता प्रोफ़ाइल चुनें',
    'select_profile_title': 'प्रोफ़ाइल तक पहुंचें',
    'selected_lbl': 'चयनित',
    'selector_accept': 'स्वीकार करना',
    'selector_clear': 'स्पष्ट चयन',
    'selector_close': 'बंद करना',
    'selector_panic': '🚨 एसओएस आपातकालीन आउटपुट',
    'sensor_section': 'घुसपैठ सेंसर',
    'sensors_to_bypass': 'बायपास करने के लिए सेंसर',
    'settings': '⚙️ सेटिंग्स',
    'setup_access_pin': 'आर्गस पैनल एक्सेस पिन (वैकल्पिक)',
    'setup_admin_name': 'प्रशासक का नाम',
    'setup_master_pin': 'हथियार/निरस्त्रीकरण के लिए मास्टर पिन (वैकल्पिक)',
    'setup_required_action': 'आर्गस को एकीकरण में कॉन्फ़िगर करें',
    'setup_required_desc': 'आर्गस स्थापित है लेकिन अभी तक कोई उदाहरण नहीं बनाया गया है।',
    'setup_required_title': 'आर्गस सेटअप आवश्यक',
    'siren_section': 'आवाज',
    'size': 'आकार',
    'slide_disarm': 'निरस्त्र करने के लिए स्लाइड करें',
    'slide_sos': 'एसओएस ट्रिगर करने के लिए स्लाइड करें',
    'slide_sos_stop': 'एसओएस को रोकने के लिए स्लाइड करें',
    'sos_actions': '🚨एसओएस क्रियाएँ',
    'sos_activated': 'एसओएस सक्रिय',
    'sos_call': 'आपातकालीन सेवाओं को कॉल करें',
    'sos_call_confirm': 'स्थानीय आपातकालीन सेवा ({संख्या}) को कॉल करें?',
    'sos_call_help': 'यदि यह डिवाइस फ़ोन कॉल नहीं कर सकता है, तो Argus एक महत्वपूर्ण चेतावनी सूचना भेजेगा।',
    'sos_confirm_text': 'आपातकालीन अलार्म को तुरंत चालू करने के लिए स्लाइड करें।',
    'sos_confirm_title': '🚨 ट्रिगर आपातकालीन अलार्म?',
    'sos_error': 'एसओएस ट्रिगर नहीं किया जा सका: {त्रुटि}',
    'sos_no_outputs': 'कोई आपातकालीन आउटपुट डिवाइस चयनित नहीं',
    'sos_outputs_help': 'एसओएस ट्रिगर होने पर ये डिवाइस हमेशा चालू रहेंगे।',
    'sos_select_outputs': 'रोशनी, सायरन या दृश्य चुनें',
    'sos_slide': 'एसओएस ट्रिगर करने के लिए स्लाइड करें',
    'sos_stop': 'एसओएस बंद करो',
    'status_away': 'दूर',
    'status_closed': 'बंद किया हुआ',
    'status_home': 'घर',
    'status_idle': 'निठल्ला',
    'status_open': 'खुला',
    'status_recording': 'रिकॉर्डिंग',
    'support_title': 'स्थिति एवं समर्थन',
    'switch_profile_btn': '👤प्रोफ़ाइल स्विच करें',
    'sync_panel_help': 'बाहरी अलार्म पैनल के साथ सिंक स्थिति।',
    'sync_panel_section': 'बाहरी अलार्म पैनल',
    'system_armed': 'सिस्टम सशस्त्र',
    'system_disarmed': 'सिस्टम निरस्त्र',
    'system_triggered': 'अलार्म बज उठा!',
    'temp_auto': 'स्वचालित तापमान',
    'temp_displayed': 'लाइव तापमान इकाई',
    'temp_notification_title': 'आर्गस - तापमान चेतावनी',
    'temp_thermostat': 'थर्मोस्टेट',
    'thermostat_alert_notif': 'थर्मोस्टेट चेतावनी',
    'times_section': '⏱️ टाइमर',
    'triggered': 'अलार्म बज उठा!',
    'unavailable': 'अनुपलब्ध',
    'undo_error': 'रीसेट को पूर्ववत नहीं किया जा सका: {त्रुटि}',
    'undo_reset': 'रीसेट पूर्ववत करें',
    'undo_reset_btn': 'रीसेट पूर्ववत करें',
    'undo_success': 'रीसेट सफलतापूर्वक पूर्ववत किया गया.',
    'unlinked_ha_accounts_title': 'गृह सहायक लेखा',
    'unlock_kiosk': 'कियॉस्क अनलॉक करें',
    'update_pin': 'पिन अपडेट करें',
    'upload_error': 'अपलोड करने में त्रुटि.',
    'url_placeholder': 'पृष्ठभूमि यूआरएल…',
    'use_for_hub': 'हब के लिए उपयोग करें',
    'use_for_panel': 'पैनल के लिए उपयोग करें',
    'use_ha_language': 'गृह सहायक भाषा का प्रयोग करें',
    'user_default': 'उपयोगकर्ता',
    'user_exp_date': 'समाप्ति तिथि और समय',
    'user_exp_type': 'समाप्ति प्रकार',
    'user_no_pin': 'कोई एक्सेस पिन नहीं',
    'user_pin': 'पिन तक पहुंचें',
    'user_pin_action': 'पिन सेट करें',
    'user_required': 'नाम और पिन आवश्यक है.',
    'user_role_action': 'भूमिका बदलें',
    'user_role_label': 'उपयोगकर्ता भूमिका',
    'username': 'उपयोगकर्ता नाम',
    'users_title': '👥 उपयोगकर्ता और अभिगम नियंत्रण',
    'vacation': 'छुट्टी',
    'wait_if_open': 'सेंसर बंद होने तक प्रतीक्षा करें',
    'waiting_sensors': 'सेंसर की प्रतीक्षा की जा रही है',
    'waiting_sensors_count': '{गिनती} सेंसर की प्रतीक्षा की जा रही है',
    'weather_auto': 'स्वचालित मौसम का पता लगाना',
    'weather_source': 'मौसम इकाई',
    'welcome_greeting': 'वापसी पर स्वागत है!',
    'welcome_profile': 'स्वागत है, {नाम}',
    'wrong_pin': 'ग़लत पिन',
  },
  'ar': {
    'accept': 'يقبل',
    'access_control_title': '👥 المستخدمون والتحكم في الوصول',
    'access_desc': 'إدارة الأمن العالمية ورقم التعريف الشخصي الرئيسي والمسؤولين.',
    'access_pin_lbl': 'الوصول إلى رقم التعريف الشخصي',
    'access_title': 'المستخدمون والتحكم في الوصول',
    'action_disarmed': 'منزوع السلاح',
    'action_failed': 'لا يمكن تنفيذ الإجراء',
    'action_sos': 'إنذار SOS في حالات الطوارئ',
    'action_sos_stop': 'توقف SOS',
    'active_profile': 'الملف الشخصي النشط',
    'active_until': 'تنتهي',
    'activity_log': '📋 سجل النشاط',
    'add_btn': '+ أضف',
    'add_user': 'إضافة مستخدم',
    'admin_only': 'يمكن للمسؤولين فقط إدارة المستخدمين والإعدادات.',
    'alarm_instance': 'مثيل التنبيه',
    'all_sensors_bypassed': 'يتم تجاوز كافة أجهزة الاستشعار التي تم تكوينها.',
    'analysis_title': 'التحليل الأمني',
    'arm_time': 'تأخير (تأخير) التسليح',
    'arm_time_label': 'تأخير التسليح',
    'armed_away': 'بعيد',
    'armed_home': 'بيت',
    'armed_night': 'ليلة',
    'armed_vacation': 'أجازة',
    'arming': 'تسليح',
    'automations': 'الأتمتة',
    'available': 'متاح',
    'backdrop_mode_blur': 'طمس',
    'backdrop_mode_dim': 'خافتة',
    'backdrop_mode_none': 'لا أحد',
    'background_lbl': 'خلفية',
    'backup_desc': 'تصدير أو استعادة أو إعادة تعيين تكوين Argus.',
    'backup_title': 'النسخ الاحتياطي والاستعادة',
    'badge_pin_reset': 'إعادة تعيين رقم التعريف الشخصي',
    'badge_pin_reset_failed': 'فشلت إعادة تعيين رقم التعريف الشخصي',
    'battery_low': 'بطارية منخفضة',
    'bg_collage': 'ملصقة',
    'bg_hub_default': 'خلفية المحور الافتراضي',
    'bg_hub_selected_from_history': 'خلفية المحور مختارة من التاريخ',
    'bg_hub_title': 'خلفية المحور',
    'bg_image_opt': 'صورة ثابتة',
    'bg_none': 'لا أحد',
    'bg_panel_none': 'لا توجد خلفية لوحة',
    'bg_panel_selected_from_history': 'خلفية اللوحة مختارة من التاريخ',
    'bg_panel_title': 'خلفية اللوحة',
    'bg_photo': 'صورة',
    'bg_sound_opt': 'صوت الخلفية',
    'bg_video': 'فيديو رسوم متحركة',
    'bg_weather': 'الطقس المباشر',
    'bridge_not_connected': 'الجسر غير متصل',
    'bridge_not_desc': 'جسر HomeKit غير متصل حاليًا.',
    'bridge_paired': 'جسر مقترن',
    'bridge_paired_desc': 'جسر HomeKit مقترن ونشط.',
    'btn_away': '🔴 بعيدا',
    'btn_create_argus_profile': '+ إنشاء ملف تعريف أرجوس',
    'btn_disarmed': '🔓 منزوع السلاح',
    'btn_home': '🏠 المنزل',
    'btn_night': '🌙 الليل',
    'btn_sos': '🚨 استغاثة / ذعر',
    'btn_vacation': '✈️ اجازة',
    'bypass_lbl': '🚫 تجاوز',
    'cancel': 'يلغي',
    'cancel_btn': 'يلغي',
    'cannot_arm': 'لا يمكن تسليح النظام',
    'cannot_delete_last_admin': 'لا يمكن حذف المسؤول الوحيد.',
    'change_btn': 'يتغير',
    'change_pin': 'تغيير رقم التعريف الشخصي للوصول',
    'change_profile_picture': 'تغيير الصورة في الأشخاص HA ↗',
    'claim_btn': 'مسؤول المطالبة',
    'claim_desc': 'يتطلب التثبيت وجود مسؤول للوصول إليه.',
    'claim_title': 'تحديث أرجوس الأمني',
    'clear': 'واضح',
    'clear_history': 'مسح التاريخ',
    'clear_history_confirm': 'هل تريد حذف سجل النشاط بالكامل؟',
    'clear_log_btn': '🗑️ مسح السجل',
    'clock_12h': '12 ساعة (صباحًا/مساءً)',
    'clock_24h': '24 ساعة',
    'clock_auto': 'تلقائي (حسب اللغة)',
    'clock_format_desc': 'تنسيق الساعة في أعلى الصفحة',
    'clock_format_label': 'تنسيق الساعة',
    'close': 'يغلق',
    'collapse': 'ينهار',
    'confirm': 'يتأكد',
    'confirm_pin': 'تأكيد رقم التعريف الشخصي',
    'connected': 'متصل',
    'create_ha': '+ إنشاء في HA',
    'current_pin': 'رقم التعريف الشخصي الحالي',
    'customize': 'تخصيص',
    'delete': 'يمسح',
    'delete_btn_title': 'يمسح',
    'delete_file_error': 'لا يمكن حذف الملف: {خطأ}',
    'delete_user_confirm': 'هل أنت متأكد أنك تريد حذف هذا المستخدم؟',
    'delete_user_tooltip': 'حذف هذا المستخدم',
    'deselect_all': 'قم بإلغاء تحديد الكل',
    'details_notif': 'تفاصيل الإخطار',
    'disarm_time': 'تأخير (تأخير) الإدخال',
    'disarm_time_label': 'تأخير الدخول',
    'disarmed': 'منزوع السلاح',
    'done': 'منتهي',
    'edit_btn': '✏️ تعديل الاسم',
    'edit_dashboard': 'تحرير لوحة المعلومات',
    'edit_dashboard_done': '✓ تم',
    'emergency_call_active': 'جاري الاتصال بالطوارئ...',
    'emergency_help': 'قم بتعيين رقم خدمة الطوارئ المحلية (على سبيل المثال 911 أو 112). المدرجة في تنبيهات SOS.',
    'emergency_number_label': '🚨 رقم الطوارئ المحلي',
    'entry_sensors': 'حساسات الدخول',
    'error_loading_uploaded_files': 'حدث خطأ أثناء تحميل الملفات التي تم تحميلها.',
    'exit_to_ha': 'الخروج إلى مساعد المنزل',
    'exp_indefinite': 'غير محدد',
    'exp_temporary': 'مؤقت (التاريخ/الوقت)',
    'expand': 'يوسع',
    'expired': 'منتهي الصلاحية',
    'export_btn': 'تكوين التصدير',
    'export_error': 'خطأ في التصدير: {خطأ}',
    'external_panels': 'لوحات إنذار خارجية',
    'file_choice': 'هل تريد استخدامها كصورة ثابتة (موافق) أو فيديو متحرك (إلغاء)؟',
    'file_delete_confirm': 'هل تريد حذف هذا الملف نهائيًا؟',
    'file_read_error': 'لا يمكن قراءة الملف.',
    'files_count': '{عدد} الملفات',
    'files_count_short': '{عدد} الملفات',
    'first_run_blocked_desc': 'تم تأمين الإعداد.',
    'first_run_blocked_title': 'الإعداد الأولي مطلوب',
    'first_run_desc': 'قم بتكوين بيانات اعتماد الأمان الأولية الخاصة بك.',
    'first_run_pin_expl': 'قم بتعيين رمز PIN رئيسي للتحكم في النظام.',
    'first_run_skip': 'تخطي الآن',
    'first_run_start': 'ابدأ الإعداد',
    'first_run_welcome': 'مرحبا بكم في أرجوس!',
    'forgot_pin': 'هل نسيت رقم التعريف الشخصي؟',
    'fullscreen_title': 'شاشة كاملة',
    'generic_error': 'خطأ: {خطأ}',
    'github_action': 'نجمة على جيثب',
    'github_desc': 'إذا استمتعت بهذا المشروع، فادعم التطوير بنجمة على GitHub.',
    'github_title': 'دعم أرجوس',
    'ha_account_linked': 'حساب HA: {الاسم}',
    'ha_account_unavailable': 'لا يوجد حساب HA مرتبط',
    'ha_admin_label': 'مدير HA',
    'ha_role_admin': 'المسؤول',
    'ha_role_standard': 'المستخدم القياسي',
    'ha_standard_user_label': 'HA المستخدم القياسي',
    'help': 'يساعد',
    'hero_desc': 'نظام أمن المنزل الذكي',
    'hide': 'يخفي',
    'hide_widget': 'إخفاء القطعة',
    'history_refresh': '🔄 تحديث',
    'history_title': 'سجل النشاط',
    'history_unavailable': 'سجل النشاط غير متاح.',
    'home_default': 'منزلي',
    'home_fallback': 'منزلي',
    'home_name_label': 'اسم المنزل',
    'home_name_lbl': 'اسم المنزل',
    'home_name_modal_desc': 'قم بتخصيص اسم إقامتك الموضح في الرأس العلوي.',
    'home_name_modal_title': 'تحرير اسم المنزل',
    'home_name_placeholder': 'اسم منزلك...',
    'homekit_bridge': 'جسر هوم كيت',
    'homekit_house': 'هوم كيت هوم',
    'homekit_not_paired': 'HomeKit غير مقترن',
    'homekit_title': 'التكامل مع هوم كيت',
    'import_btn': 'تكوين الاستيراد',
    'import_error': 'خطأ في الاستيراد: {خطأ}',
    'import_success': 'تمت استعادة التكوين. جارٍ إعادة التحميل…',
    'initialization_error_desc': 'تعذر الاتصال بالواجهة الخلفية لـ Home Assistant المعتمدة.',
    'initialization_error_title': 'تعذر بدء تشغيل Argus',
    'instances': 'لوحة أمان Argus',
    'introduce_pin': 'أدخل رقم التعريف الشخصي للأمان الخاص بك',
    'invalid_config': 'ملف التكوين غير صالح.',
    'invalid_pin_msg': 'رقم التعريف الشخصي غير صحيح',
    'is_admin': 'هل المسؤول؟',
    'lang_select_title': 'اختر اللغة',
    'lang_selector_lbl': '⚙️ اللغة',
    'language': 'لغة',
    'lbl_aesthetic_custom': 'التخصيص والإعدادات',
    'lbl_load_file': 'تحميل الملف',
    'lbl_uploaded_files': 'الملفات المرفوعة',
    'light_siren_color': 'لون',
    'light_siren_flash': 'فلاش لطيف إذا كان متاحا',
    'link_ha_user': 'رابط مستخدم HA',
    'linked_rules': 'القواعد المرتبطة بأرجوس',
    'loading': 'تحميل…',
    'lock_if_open': 'حظر إذا كان مفتوحا',
    'log_action_access_pin_updated': 'تم تحديث رقم التعريف الشخصي للوصول',
    'log_action_analysis': 'التحليل الأمني',
    'log_action_automation': 'تم تنفيذ الأتمتة',
    'log_action_backup_created': 'تم إنشاء النسخة الاحتياطية',
    'log_action_backup_restored': 'تمت استعادة التكوين',
    'log_action_first_run_completed': 'اكتمل الإعداد الأولي',
    'log_action_fullscreen_unlocked': 'كامل الشاشة مقفلة',
    'log_action_master_pin_rejected': 'تم رفض رقم التعريف الشخصي الرئيسي الخاطئ',
    'log_action_mode_changed': 'تم تغيير الوضع',
    'log_action_profile_selected': 'تم تحديد الملف الشخصي',
    'log_action_rejected': 'تم رفض الإجراء',
    'log_action_save_ui': 'تم حفظ الإعدادات المرئية',
    'log_action_schedule_applied': 'تم تطبيق الجدول الزمني',
    'log_action_select_profile': 'تم تبديل الملف الشخصي',
    'log_action_sos': 'إنذار SOS في حالات الطوارئ',
    'log_action_sos_stopped': 'توقف SOS',
    'log_action_state_restored': 'استعادة الدولة',
    'log_action_stop_sos': 'توقف إنذار SOS',
    'log_action_user_added': 'تم إنشاء المستخدم',
    'log_action_user_deleted': 'تم حذف المستخدم',
    'log_action_user_logged_in': 'قام المستخدم بتسجيل الدخول',
    'log_action_verify_access_pin': 'تم التحقق من رقم التعريف الشخصي (PIN) للوصول',
    'log_armed': 'مسلح',
    'log_by': 'بواسطة',
    'log_detail_armed': 'النظام مسلح',
    'log_detail_disarm': 'تم نزع سلاح النظام',
    'log_detail_pin_reset': 'إعادة تعيين رقم التعريف الشخصي الرئيسي بواسطة مشرف HA',
    'log_detail_pin_reset_failed': 'تم رفض محاولة إعادة تعيين رقم التعريف الشخصي',
    'log_detail_triggered': 'التنشيط التلقائي',
    'log_disarmed': 'منزوع السلاح',
    'log_mode': 'وضع',
    'log_no_events': 'لم يتم تسجيل أي أحداث في التاريخ.',
    'log_sensor': 'الاستشعار',
    'log_triggered': 'تم إطلاقه',
    'login_btn': 'تسجيل الدخول',
    'manual_arm': 'التسليح اليدوي',
    'manual_disarm': 'نزع السلاح يدويا',
    'master_pin_lbl': 'رقم التعريف الشخصي الرئيسي',
    'modal_add_user': '+ إضافة مستخدم',
    'modal_cancel': 'يلغي',
    'modal_confirm': 'يتأكد',
    'modal_delete_confirm': 'هل تريد حذف هذا المستخدم؟',
    'modal_edit_name': 'تحرير الاسم',
    'modal_name_label': 'اسم الملف الشخصي',
    'modal_pin_help': 'اتركه فارغًا لعدم طلب رقم التعريف الشخصي.',
    'modal_pin_title': 'الوصول إلى رقم التعريف الشخصي',
    'modal_save': 'يحفظ',
    'modal_user_added': 'تم إنشاء المستخدم بنجاح.',
    'mode_away': 'بعيد',
    'mode_home': 'بيت',
    'mode_night': 'ليلة',
    'mode_vacation': 'أجازة',
    'modes': 'الأوضاع / SOS',
    'modes_sos': 'الأوضاع / SOS',
    'mqtt_label': 'إم كيو تي تي',
    'never_triggered': 'لم يتم تشغيلها أبدًا',
    'new_pin': 'رقم التعريف الشخصي الجديد',
    'no_alarm_instance': 'لا يوجد مثيل إنذار متاح',
    'no_auto_linked': 'لم يتم ربط أي عمليات تلقائية.',
    'no_files_uploaded': 'لم يتم تحميل أي ملفات.',
    'no_files_uploaded_short': 'لا توجد ملفات',
    'no_instances': 'لم يتم تكوين مثيلات التنبيه.',
    'no_results': 'لا توجد نتائج',
    'no_rules': 'لا توجد قواعد متاحة.',
    'no_sensors_configured': 'لم يتم تكوين أجهزة الاستشعار',
    'no_unlinked_ha_accounts': 'لا توجد حسابات HA غير مرتبطة.',
    'no_users': 'لم يتم تكوين أي مستخدمين.',
    'none_selected': 'لم يتم تحديد أي شيء',
    'notif_desc': 'إشعارات الدفع عبر الهاتف المحمول للأحداث الهامة.',
    'notif_no_services': 'لا توجد خدمات إعلام المحمول المتاحة.',
    'notification_armed': 'قام {user} بتسليح النظام في الوضع {mode}.',
    'notification_disarmed': 'قام {user} بنزع سلاح النظام.',
    'notifications_title': 'إشعارات',
    'open_sensors': 'فتح أجهزة الاستشعار',
    'open_sensors_explain': 'المستشعرات التالية مفتوحة:\\\\n{names}\\\\n\\\\nقم بإغلاقها قبل تفعيلها أو تمكين التجاوز.',
    'panic_state_unknown': 'لا يمكن تحديد حالة التنبيه السابقة.',
    'panic_stop_error': 'تعذر إيقاف التنبيه: {خطأ}',
    'panic_stopped': 'توقف التنبيه؛ حالة مستعادة {حالة}',
    'pending': 'قيد الانتظار',
    'pin_active_no': 'لا يوجد رقم تعريف شخصي نشط',
    'pin_active_yes': 'رقم التعريف الشخصي النشط',
    'pin_deleted': 'تم حذف رقم التعريف الشخصي',
    'pin_desc': 'رمز الحماية المكون من 4 إلى 8 أرقام.',
    'pin_disarm_error': 'رقم تعريف شخصي خاطئ أو خطأ في نزع السلاح',
    'pin_incorrect': 'رقم تعريف شخصي خاطئ',
    'pin_management': '🔑 إدارة رقم التعريف الشخصي',
    'pin_master_title': 'رقم التعريف الشخصي الرئيسي',
    'pin_mismatch': 'أرقام التعريف الشخصية غير متطابقة',
    'pin_modal_desc': 'أدخل رقم التعريف الشخصي للأمان الخاص بك للمتابعة.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'اتركه فارغًا لإزالة رقم التعريف الشخصي الرئيسي.',
    'pin_reset_admin_only': 'يمكن للمسؤولين فقط إعادة تعيين رمز PIN.',
    'pin_reset_confirm': 'هل تريد إعادة ضبط رقم التعريف الشخصي؟',
    'pin_updated': 'تم تحديث رقم التعريف الشخصي بنجاح',
    'profile_is_yours': 'ملفك الشخصي',
    'profile_needs_pin': 'يتطلب ملف التعريف هذا رقم PIN للوصول.',
    'profile_no_pin_access': 'حرية الوصول بدون رقم التعريف الشخصي.',
    'remove_btn': 'يزيل',
    'reset_btn': 'إعادة ضبط المصنع',
    'reset_confirm': 'إعادة تعيين Argus إلى إعدادات المصنع الافتراضية؟ سيتم فقدان جميع التكوينات وأرقام التعريف الشخصية.',
    'reset_dashboard': 'إعادة تعيين التخطيط',
    'reset_error': 'خطأ في إعادة التعيين: {خطأ}',
    'reset_error_auth': 'المصادقة مطلوبة لإعادة التعيين.',
    'reset_success': 'تمت إعادة ضبط Argus بنجاح.',
    'reset_widget': 'إعادة تعيين القطعة',
    'retry_action': 'أعد المحاولة',
    'role_argus_admin': 'مدير أرجوس',
    'role_argus_admin_short': 'مسؤل',
    'role_argus_standard': 'المستخدم القياسي',
    'role_argus_user': 'المستخدم القياسي',
    'role_argus_user_short': 'مستخدم',
    'rules_tip': 'نصيحة الأتمتة',
    'save_btn': 'يحفظ',
    'save_config': '💾 حفظ الوضع',
    'save_mode': 'وضع الحفظ',
    'save_notif': 'حفظ الإخطارات',
    'save_user': 'حفظ المستخدم',
    'saved': '✓ المحفوظة',
    'search_placeholder': 'البحث عن جهاز أو كيان...',
    'search_select': 'بحث واختيار…',
    'searching_auto': 'البحث الآلي...',
    'select_all': 'حدد الكل',
    'select_btn': '+ اختر',
    'select_entry_sensors': '+ حدد مجسات الدخول',
    'select_profile_subtitle': 'حدد ملف تعريف المستخدم الخاص بك',
    'select_profile_title': 'الوصول إلى الملفات الشخصية',
    'selected_lbl': 'مختارة',
    'selector_accept': 'يقبل',
    'selector_clear': 'مسح التحديد',
    'selector_close': 'يغلق',
    'selector_panic': '🚨 مخرجات الطوارئ SOS',
    'sensor_section': 'أجهزة استشعار التسلل',
    'sensors_to_bypass': 'أجهزة الاستشعار للتجاوز',
    'settings': '⚙️ الإعدادات',
    'setup_access_pin': 'رقم التعريف الشخصي للوصول إلى لوحة Argus (اختياري)',
    'setup_admin_name': 'اسم المسؤول',
    'setup_master_pin': 'رقم التعريف الشخصي الرئيسي للذراع/نزع السلاح (اختياري)',
    'setup_required_action': 'تكوين Argus في عمليات التكامل',
    'setup_required_desc': 'تم تثبيت Argus ولكن لم يتم إنشاء أي مثيل له حتى الآن.',
    'setup_required_title': 'مطلوب إعداد Argus',
    'siren_section': 'صفارات الإنذار',
    'size': 'مقاس',
    'slide_disarm': 'الشريحة لنزع السلاح',
    'slide_sos': 'قم بالتمرير لتشغيل SOS',
    'slide_sos_stop': 'قم بالتمرير لإيقاف SOS',
    'sos_actions': '🚨 إجراءات SOS',
    'sos_activated': 'تم تفعيل SOS',
    'sos_call': 'اتصل بخدمات الطوارئ',
    'sos_call_confirm': 'هل تريد الاتصال بخدمة الطوارئ المحلية ({number})؟',
    'sos_call_help': 'إذا لم يتمكن هذا الجهاز من إجراء مكالمات هاتفية، فسيقوم Argus بإرسال إشعار تنبيه مهم.',
    'sos_confirm_text': 'قم بالتمرير لتشغيل إنذار الطوارئ على الفور.',
    'sos_confirm_title': '🚨 إطلاق إنذار الطوارئ؟',
    'sos_error': 'تعذر تشغيل SOS: {خطأ}',
    'sos_no_outputs': 'لم يتم تحديد أي أجهزة إخراج للطوارئ',
    'sos_outputs_help': 'سيتم تشغيل هذه الأجهزة دائمًا عند تشغيل SOS.',
    'sos_select_outputs': 'حدد الأضواء أو صفارات الإنذار أو المشاهد',
    'sos_slide': 'قم بالتمرير لتشغيل SOS',
    'sos_stop': 'توقف عن SOS',
    'status_away': 'بعيد',
    'status_closed': 'مغلق',
    'status_home': 'بيت',
    'status_idle': 'عاطل',
    'status_open': 'يفتح',
    'status_recording': 'تسجيل',
    'support_title': 'الحالة والدعم',
    'switch_profile_btn': '👤 تبديل الملف الشخصي',
    'sync_panel_help': 'حالة المزامنة مع لوحات الإنذار الخارجية.',
    'sync_panel_section': 'لوحات إنذار خارجية',
    'system_armed': 'النظام مسلح',
    'system_disarmed': 'تم نزع سلاح النظام',
    'system_triggered': 'تم إطلاق الإنذار!',
    'temp_auto': 'درجة الحرارة التلقائية',
    'temp_displayed': 'كيان درجة الحرارة الحية',
    'temp_notification_title': 'أرجوس — تنبيه لدرجة الحرارة',
    'temp_thermostat': 'ترموستات',
    'thermostat_alert_notif': 'تنبيه الترموستات',
    'times_section': '⏱️ الموقتات',
    'triggered': 'تم إطلاق الإنذار!',
    'unavailable': 'غير متاح',
    'undo_error': 'تعذر التراجع عن إعادة التعيين: {خطأ}',
    'undo_reset': 'التراجع عن إعادة التعيين',
    'undo_reset_btn': 'التراجع عن إعادة التعيين',
    'undo_success': 'تم التراجع عن إعادة الضبط بنجاح.',
    'unlinked_ha_accounts_title': 'حسابات مساعد المنزل',
    'unlock_kiosk': 'فتح الكشك',
    'update_pin': 'تحديث رقم التعريف الشخصي',
    'upload_error': 'خطأ في التحميل.',
    'url_placeholder': 'عنوان URL للخلفية...',
    'use_for_hub': 'استخدم للمحور',
    'use_for_panel': 'استخدام للوحة',
    'use_ha_language': 'استخدم لغة المساعد المنزلي',
    'user_default': 'مستخدم',
    'user_exp_date': 'تاريخ انتهاء الصلاحية والوقت',
    'user_exp_type': 'نوع انتهاء الصلاحية',
    'user_no_pin': 'لا يوجد رقم تعريف شخصي للوصول',
    'user_pin': 'الوصول إلى رقم التعريف الشخصي',
    'user_pin_action': 'تعيين رقم التعريف الشخصي',
    'user_required': 'الاسم ورقم التعريف الشخصي مطلوبان.',
    'user_role_action': 'تغيير الدور',
    'user_role_label': 'دور المستخدم',
    'username': 'اسم المستخدم',
    'users_title': '👥 المستخدمون والتحكم في الوصول',
    'vacation': 'أجازة',
    'wait_if_open': 'انتظر حتى تغلق أجهزة الاستشعار',
    'waiting_sensors': 'في انتظار أجهزة الاستشعار',
    'waiting_sensors_count': 'في انتظار {count} من أجهزة الاستشعار (أجهزة الاستشعار)',
    'weather_auto': 'الكشف التلقائي عن الطقس',
    'weather_source': 'كيان الطقس',
    'welcome_greeting': 'مرحبًا بعودتك!',
    'welcome_profile': 'مرحبًا {الاسم}',
    'wrong_pin': 'رقم تعريف شخصي خاطئ',
  },
  'ko': {
    'accept': '수용하다',
    'access_control_title': '👥 사용자 및 액세스 제어',
    'access_desc': '글로벌 보안 관리, 마스터 PIN 및 관리자.',
    'access_pin_lbl': 'PIN 액세스',
    'access_title': '사용자 및 액세스 제어',
    'action_disarmed': '무장해제',
    'action_failed': '작업을 실행할 수 없습니다.',
    'action_sos': '긴급 SOS 경보',
    'action_sos_stop': 'SOS가 중지되었습니다.',
    'active_profile': '활성 프로필',
    'active_until': '만료',
    'activity_log': '📋 활동 로그',
    'add_btn': '+ 추가',
    'add_user': '사용자 추가',
    'admin_only': '관리자만 사용자 및 설정을 관리할 수 있습니다.',
    'alarm_instance': '알람 인스턴스',
    'all_sensors_bypassed': '구성된 모든 센서가 우회됩니다.',
    'analysis_title': '보안 분석',
    'arm_time': '무장 지연(들)',
    'arm_time_label': '무장 지연',
    'armed_away': '떨어져 있는',
    'armed_home': '집',
    'armed_night': '밤',
    'armed_vacation': '휴가',
    'arming': '무장',
    'automations': '자동화',
    'available': '사용 가능',
    'backdrop_mode_blur': '흐림',
    'backdrop_mode_dim': '흐리게',
    'backdrop_mode_none': '없음',
    'background_lbl': '배경',
    'backup_desc': 'Argus 구성을 내보내거나 복원하거나 재설정합니다.',
    'backup_title': '백업 및 복원',
    'badge_pin_reset': 'PIN 재설정',
    'badge_pin_reset_failed': 'PIN 재설정 실패',
    'battery_low': '배터리 부족',
    'bg_collage': '콜라주',
    'bg_hub_default': '기본 허브 배경',
    'bg_hub_selected_from_history': '기록에서 선택된 허브 배경',
    'bg_hub_title': '허브 배경',
    'bg_image_opt': '정적 이미지',
    'bg_none': '없음',
    'bg_panel_none': '패널 배경 없음',
    'bg_panel_selected_from_history': '기록에서 선택된 패널 배경',
    'bg_panel_title': '패널 배경',
    'bg_photo': '사진',
    'bg_sound_opt': '배경음',
    'bg_video': '애니메이션 비디오',
    'bg_weather': '실시간 날씨',
    'bridge_not_connected': '브리지가 연결되지 않음',
    'bridge_not_desc': 'HomeKit 브리지는 현재 연결이 끊어졌습니다.',
    'bridge_paired': '브리지 페어링됨',
    'bridge_paired_desc': 'HomeKit 브리지가 페어링되어 활성화되어 있습니다.',
    'btn_away': '🔴 멀리',
    'btn_create_argus_profile': '+ 아르거스 프로필 생성',
    'btn_disarmed': '🔓 무장 해제됨',
    'btn_home': '🏠 홈',
    'btn_night': '🌙 밤',
    'btn_sos': '🚨 SOS/패닉',
    'btn_vacation': '✈️ 휴가',
    'bypass_lbl': '🚫 우회',
    'cancel': '취소',
    'cancel_btn': '취소',
    'cannot_arm': '시스템을 무장할 수 없습니다',
    'cannot_delete_last_admin': '유일한 관리자는 삭제할 수 없습니다.',
    'change_btn': '변화',
    'change_pin': '액세스 PIN 변경',
    'change_profile_picture': 'HA Persons에서 사진 변경 ↗',
    'claim_btn': '청구 관리자',
    'claim_desc': '설치하려면 관리자가 액세스 권한을 얻어야 합니다.',
    'claim_title': '아르거스 보안 업데이트',
    'clear': '분명한',
    'clear_history': '기록 지우기',
    'clear_history_confirm': '모든 활동 기록을 삭제하시겠습니까?',
    'clear_log_btn': '🗑️ 로그 지우기',
    'clock_12h': '12시간(오전/오후)',
    'clock_24h': '24시간',
    'clock_auto': '자동(언어별)',
    'clock_format_desc': '상단 헤더의 시계 형식',
    'clock_format_label': '시계 형식',
    'close': '닫다',
    'collapse': '무너지다',
    'confirm': '확인하다',
    'confirm_pin': 'PIN 확인',
    'connected': '연결됨',
    'create_ha': '+ HA에서 생성',
    'current_pin': '현재 PIN',
    'customize': '사용자 정의',
    'delete': '삭제',
    'delete_btn_title': '삭제',
    'delete_file_error': '파일을 삭제할 수 없습니다: {오류}',
    'delete_user_confirm': '이 사용자를 삭제하시겠습니까?',
    'delete_user_tooltip': '이 사용자 삭제',
    'deselect_all': '모두 선택 취소',
    'details_notif': '알림 세부정보',
    'disarm_time': '입장 지연(들)',
    'disarm_time_label': '입장 지연',
    'disarmed': '무장해제',
    'done': '완료',
    'edit_btn': '✏️ 이름 수정',
    'edit_dashboard': '대시보드 편집',
    'edit_dashboard_done': '✓ 완료',
    'emergency_call_active': '긴급 통화 진행 중...',
    'emergency_help': '지역 응급 서비스 번호(예: 911 또는 112)를 설정합니다. SOS 알림에 포함됩니다.',
    'emergency_number_label': '🚨 지역 긴급 전화번호',
    'entry_sensors': '진입 센서',
    'error_loading_uploaded_files': '업로드된 파일을 로드하는 중에 오류가 발생했습니다.',
    'exit_to_ha': '홈어시스턴트로 나가기',
    'exp_indefinite': '무기한',
    'exp_temporary': '임시(날짜/시간)',
    'expand': '확장하다',
    'expired': '만료됨',
    'export_btn': '구성 내보내기',
    'export_error': '내보내기 오류: {error}',
    'external_panels': '외부 경보 패널',
    'file_choice': '정적 이미지(확인)로 사용하시겠습니까, 아니면 애니메이션 비디오(취소)로 사용하시겠습니까?',
    'file_delete_confirm': '이 파일을 영구적으로 삭제하시겠습니까?',
    'file_read_error': '파일을 읽을 수 없습니다.',
    'files_count': '{count}개 파일',
    'files_count_short': '{count}개 파일',
    'first_run_blocked_desc': '설정이 잠겨 있습니다.',
    'first_run_blocked_title': '초기 설정 필요',
    'first_run_desc': '초기 보안 자격 증명을 구성합니다.',
    'first_run_pin_expl': '시스템을 제어하려면 마스터 PIN을 설정하세요.',
    'first_run_skip': '지금은 건너뛰기',
    'first_run_start': '설정 시작',
    'first_run_welcome': '아르거스에 오신 것을 환영합니다!',
    'forgot_pin': 'PIN을 잊으셨나요?',
    'fullscreen_title': '전체 화면',
    'generic_error': '오류: {오류}',
    'github_action': 'GitHub의 스타',
    'github_desc': '이 프로젝트가 마음에 드신다면 GitHub에서 스타와 함께 개발을 지원해 주세요.',
    'github_title': '아르거스 지원',
    'ha_account_linked': 'HA 계정: {이름}',
    'ha_account_unavailable': '연결된 HA 계정이 없습니다.',
    'ha_admin_label': 'HA 관리자',
    'ha_role_admin': '관리자',
    'ha_role_standard': '표준 사용자',
    'ha_standard_user_label': 'HA 표준 사용자',
    'help': '돕다',
    'hero_desc': '지능형 홈 보안 시스템',
    'hide': '숨다',
    'hide_widget': '위젯 숨기기',
    'history_refresh': '🔄 새로 고침',
    'history_title': '활동 내역',
    'history_unavailable': '활동 내역을 확인할 수 없습니다.',
    'home_default': '마이홈',
    'home_fallback': '마이홈',
    'home_name_label': '집 이름',
    'home_name_lbl': '집 이름',
    'home_name_modal_desc': '상단 헤더에 표시된 거주지 이름을 맞춤설정하세요.',
    'home_name_modal_title': '집 이름 수정',
    'home_name_placeholder': '집 이름은...',
    'homekit_bridge': '홈킷 브릿지',
    'homekit_house': '홈킷 홈',
    'homekit_not_paired': 'HomeKit이 페어링되지 않음',
    'homekit_title': '홈킷 통합',
    'import_btn': '구성 가져오기',
    'import_error': '가져오기 오류: {error}',
    'import_success': '구성이 복원되었습니다. 새로고침 중…',
    'initialization_error_desc': '승인된 홈어시스턴트 백엔드에 연결할 수 없습니다.',
    'initialization_error_title': '아르거스를 시작할 수 없습니다',
    'instances': 'Argus 보안 패널',
    'introduce_pin': '보안 PIN을 입력하세요',
    'invalid_config': '구성 파일이 잘못되었습니다.',
    'invalid_pin_msg': '잘못된 PIN',
    'is_admin': '관리자인가요?',
    'lang_select_title': '언어 선택',
    'lang_selector_lbl': '⚙️ 언어',
    'language': '언어',
    'lbl_aesthetic_custom': '개인화 및 설정',
    'lbl_load_file': '파일 업로드',
    'lbl_uploaded_files': '업로드된 파일',
    'light_siren_color': '색상',
    'light_siren_flash': '가능한 경우 부드럽게 플래시',
    'link_ha_user': 'HA 사용자 연결',
    'linked_rules': '아르거스와 관련된 규칙',
    'loading': '로드 중…',
    'lock_if_open': '열려 있으면 차단',
    'log_action_access_pin_updated': '액세스 PIN이 업데이트되었습니다.',
    'log_action_analysis': '보안 분석',
    'log_action_automation': '자동화 실행됨',
    'log_action_backup_created': '백업이 생성되었습니다.',
    'log_action_backup_restored': '구성이 복원되었습니다.',
    'log_action_first_run_completed': '초기 설정 완료',
    'log_action_fullscreen_unlocked': '전체 화면 잠금 해제됨',
    'log_action_master_pin_rejected': '잘못된 마스터 PIN이 거부됨',
    'log_action_mode_changed': '모드가 변경됨',
    'log_action_profile_selected': '프로필이 선택됨',
    'log_action_rejected': '조치가 거부됨',
    'log_action_save_ui': '시각적 설정이 저장되었습니다.',
    'log_action_schedule_applied': '일정 적용',
    'log_action_select_profile': '프로필이 전환됨',
    'log_action_sos': '긴급 SOS 경보',
    'log_action_sos_stopped': 'SOS가 중지되었습니다.',
    'log_action_state_restored': '상태가 복원됨',
    'log_action_stop_sos': 'SOS 경보가 중지되었습니다.',
    'log_action_user_added': '사용자가 생성됨',
    'log_action_user_deleted': '사용자가 삭제되었습니다.',
    'log_action_user_logged_in': '사용자가 로그인했습니다',
    'log_action_verify_access_pin': '액세스 PIN이 확인되었습니다.',
    'log_armed': '무장',
    'log_by': '~에 의해',
    'log_detail_armed': '시스템 무장',
    'log_detail_disarm': '시스템이 해제되었습니다.',
    'log_detail_pin_reset': 'HA 관리자가 마스터 PIN을 재설정함',
    'log_detail_pin_reset_failed': 'PIN 재설정 시도가 거부되었습니다.',
    'log_detail_triggered': '자동 활성화',
    'log_disarmed': '무장 해제됨',
    'log_mode': '방법',
    'log_no_events': '역사에 기록된 사건이 ​​없습니다.',
    'log_sensor': '감지기',
    'log_triggered': '트리거됨',
    'login_btn': '로그인',
    'manual_arm': '수동 무장',
    'manual_disarm': '수동 무장해제',
    'master_pin_lbl': '마스터 PIN',
    'modal_add_user': '+ 사용자 추가',
    'modal_cancel': '취소',
    'modal_confirm': '확인하다',
    'modal_delete_confirm': '이 사용자를 삭제하시겠습니까?',
    'modal_edit_name': '이름 수정',
    'modal_name_label': '프로필 이름',
    'modal_pin_help': 'PIN이 필요하지 않으려면 비워 두세요.',
    'modal_pin_title': 'PIN 액세스',
    'modal_save': '구하다',
    'modal_user_added': '사용자가 성공적으로 생성되었습니다.',
    'mode_away': '떨어져 있는',
    'mode_home': '집',
    'mode_night': '밤',
    'mode_vacation': '휴가',
    'modes': '모드 / SOS',
    'modes_sos': '모드 / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': '트리거되지 않음',
    'new_pin': '새 PIN',
    'no_alarm_instance': '사용 가능한 경보 인스턴스가 없습니다.',
    'no_auto_linked': '연결된 자동화가 없습니다.',
    'no_files_uploaded': '업로드된 파일이 없습니다.',
    'no_files_uploaded_short': '파일 없음',
    'no_instances': '구성된 경보 인스턴스가 없습니다.',
    'no_results': '결과 없음',
    'no_rules': '사용 가능한 규칙이 없습니다.',
    'no_sensors_configured': '구성된 센서가 없습니다.',
    'no_unlinked_ha_accounts': '연결 해제된 HA 계정이 없습니다.',
    'no_users': '구성된 사용자가 없습니다.',
    'none_selected': '선택한 항목 없음',
    'notif_desc': '중요한 이벤트에 대한 모바일 푸시 알림.',
    'notif_no_services': '모바일 알림 서비스를 이용할 수 없습니다.',
    'notification_armed': '{user}가 시스템을 {mode} 모드로 무장시켰습니다.',
    'notification_disarmed': '{user}이(가) 시스템 경보를 해제했습니다.',
    'notifications_title': '알림',
    'open_sensors': '개방형 센서',
    'open_sensors_explain': '다음 센서가 열려 있습니다.\\\\n{names}\\\\n\\\\n바이패스를 활성화하거나 활성화하기 전에 닫으십시오.',
    'panic_state_unknown': '이전 알람 상태를 확인할 수 없습니다.',
    'panic_stop_error': '알람을 중지할 수 없음: {오류}',
    'panic_stopped': '알람이 중지되었습니다. 복원된 상태 {state}',
    'pending': '보류 중',
    'pin_active_no': '활성 PIN 없음',
    'pin_active_yes': '활성 PIN',
    'pin_deleted': 'PIN이 삭제되었습니다.',
    'pin_desc': '4~8자리 보안 코드입니다.',
    'pin_disarm_error': '잘못된 PIN 또는 경보 해제 오류',
    'pin_incorrect': '잘못된 PIN',
    'pin_management': '🔑 PIN 관리',
    'pin_master_title': '마스터 PIN',
    'pin_mismatch': 'PIN이 일치하지 않습니다.',
    'pin_modal_desc': '계속하려면 보안 PIN을 입력하세요.',
    'pin_placeholder': '••••',
    'pin_remove_hint': '마스터 PIN을 제거하려면 비워 두세요.',
    'pin_reset_admin_only': '관리자만 PIN을 재설정할 수 있습니다.',
    'pin_reset_confirm': 'PIN을 재설정하시겠습니까?',
    'pin_updated': 'PIN이 업데이트되었습니다.',
    'profile_is_yours': '귀하의 프로필',
    'profile_needs_pin': '이 프로필에는 액세스 PIN이 필요합니다.',
    'profile_no_pin_access': 'PIN 없이 무료로 액세스할 수 있습니다.',
    'remove_btn': '제거하다',
    'reset_btn': '공장 초기화',
    'reset_confirm': 'Argus를 공장 기본값으로 재설정하시겠습니까? 모든 구성과 PIN이 손실됩니다.',
    'reset_dashboard': '레이아웃 재설정',
    'reset_error': '재설정 오류: {오류}',
    'reset_error_auth': '재설정하려면 인증이 필요합니다.',
    'reset_success': '아르거스가 성공적으로 재설정되었습니다.',
    'reset_widget': '위젯 재설정',
    'retry_action': '다시 해 보다',
    'role_argus_admin': '아르거스 관리자',
    'role_argus_admin_short': '관리자',
    'role_argus_standard': '표준 사용자',
    'role_argus_user': '표준 사용자',
    'role_argus_user_short': '사용자',
    'rules_tip': '자동화 팁',
    'save_btn': '구하다',
    'save_config': '💾 저장 모드',
    'save_mode': '저장 모드',
    'save_notif': '알림 저장',
    'save_user': '사용자 저장',
    'saved': '✓ 저장됨',
    'search_placeholder': '기기 또는 엔터티 검색…',
    'search_select': '검색하고 선택하세요…',
    'searching_auto': '자동화 검색 중…',
    'select_all': '모두 선택',
    'select_btn': '+ 선택',
    'select_entry_sensors': '+ 진입 센서 선택',
    'select_profile_subtitle': '사용자 프로필을 선택하세요',
    'select_profile_title': '액세스 프로필',
    'selected_lbl': '선택된',
    'selector_accept': '수용하다',
    'selector_clear': '선택 지우기',
    'selector_close': '닫다',
    'selector_panic': '🚨 SOS 비상 출력',
    'sensor_section': '침입 센서',
    'sensors_to_bypass': '우회할 센서',
    'settings': '⚙️ 설정',
    'setup_access_pin': 'Argus 패널 액세스 PIN(선택 사항)',
    'setup_admin_name': '관리자 이름',
    'setup_master_pin': '무장/해제를 위한 마스터 PIN(옵션)',
    'setup_required_action': '통합에서 Argus 구성',
    'setup_required_desc': 'Argus가 설치되었지만 아직 인스턴스가 생성되지 않았습니다.',
    'setup_required_title': '아르거스 설정 필요',
    'siren_section': '사이렌',
    'size': '크기',
    'slide_disarm': '슬라이드하여 무장해제',
    'slide_sos': 'SOS를 실행하려면 슬라이드하세요.',
    'slide_sos_stop': '밀어서 SOS 중지',
    'sos_actions': '🚨 SOS 액션',
    'sos_activated': 'SOS 활성화됨',
    'sos_call': '응급 서비스에 전화하세요',
    'sos_call_confirm': '지역 응급 서비스({번호})에 전화하시겠습니까?',
    'sos_call_help': '이 장치가 전화를 걸 수 없는 경우 Argus는 중요한 경고 알림을 보냅니다.',
    'sos_confirm_text': '슬라이드하면 긴급 경보가 즉시 발동됩니다.',
    'sos_confirm_title': '🚨 비상 경보를 발동하시겠습니까?',
    'sos_error': 'SOS를 실행할 수 없습니다. {오류}',
    'sos_no_outputs': '선택한 비상 출력 장치가 없습니다.',
    'sos_outputs_help': '이러한 장치는 SOS가 트리거될 때 항상 켜집니다.',
    'sos_select_outputs': '조명, 사이렌, 장면 선택',
    'sos_slide': 'SOS를 실행하려면 슬라이드하세요.',
    'sos_stop': 'SOS 중지',
    'status_away': '떨어져 있는',
    'status_closed': '닫은',
    'status_home': '집',
    'status_idle': '게으른',
    'status_open': '열려 있는',
    'status_recording': '녹음',
    'support_title': '상태 및 지원',
    'switch_profile_btn': '👤 프로필 전환',
    'sync_panel_help': '외부 알람 패널과 상태를 동기화합니다.',
    'sync_panel_section': '외부 경보 패널',
    'system_armed': '시스템 무장',
    'system_disarmed': '시스템이 해제되었습니다.',
    'system_triggered': '알람이 작동되었습니다!',
    'temp_auto': '자동 온도',
    'temp_displayed': '실시간 온도 엔터티',
    'temp_notification_title': '아르고스(Argus) — 온도 경고',
    'temp_thermostat': '온도조절기',
    'thermostat_alert_notif': '온도 조절기 알림',
    'times_section': '⏱️ 타이머',
    'triggered': '알람이 발동되었습니다!',
    'unavailable': '없는',
    'undo_error': '재설정을 취소할 수 없습니다: {오류}',
    'undo_reset': '재설정 취소',
    'undo_reset_btn': '재설정 취소',
    'undo_success': '재설정이 취소되었습니다.',
    'unlinked_ha_accounts_title': '홈어시스턴트 계정',
    'unlock_kiosk': '키오스크 잠금 해제',
    'update_pin': 'PIN 업데이트',
    'upload_error': '업로드 오류입니다.',
    'url_placeholder': '배경 URL…',
    'use_for_hub': '허브용으로 사용',
    'use_for_panel': '패널에 사용',
    'use_ha_language': '홈어시스턴트 언어 사용',
    'user_default': '사용자',
    'user_exp_date': '만료 날짜 및 시간',
    'user_exp_type': '만료 유형',
    'user_no_pin': '액세스 PIN 없음',
    'user_pin': 'PIN 액세스',
    'user_pin_action': 'PIN 설정',
    'user_required': '이름과 PIN이 필요합니다.',
    'user_role_action': '역할 변경',
    'user_role_label': '사용자 역할',
    'username': '사용자 이름',
    'users_title': '👥 사용자 및 액세스 제어',
    'vacation': '휴가',
    'wait_if_open': '센서가 닫힐 때까지 기다리기',
    'waiting_sensors': '센서를 기다리는 중',
    'waiting_sensors_count': '{count}개의 센서를 기다리는 중',
    'weather_auto': '자동 날씨 감지',
    'weather_source': '날씨 실체',
    'welcome_greeting': '돌아온 것을 환영합니다!',
    'welcome_profile': '환영합니다, {name}님',
    'wrong_pin': '잘못된 PIN',
  },
  'ja': {
    'accept': '受け入れる',
    'access_control_title': '👥 ユーザーとアクセス制御',
    'access_desc': 'グローバルなセキュリティ管理、マスター PIN および管理者。',
    'access_pin_lbl': 'アクセスPIN',
    'access_title': 'ユーザーとアクセス制御',
    'action_disarmed': '武装解除',
    'action_failed': 'アクションを実行できませんでした',
    'action_sos': '緊急SOSアラーム',
    'action_sos_stop': 'SOSが停止しました',
    'active_profile': 'アクティブなプロファイル',
    'active_until': '有効期限が切れます',
    'activity_log': '📋 アクティビティログ',
    'add_btn': '+追加',
    'add_user': 'ユーザーの追加',
    'admin_only': 'ユーザーと設定を管理できるのは管理者だけです。',
    'alarm_instance': 'アラームインスタンス',
    'all_sensors_bypassed': '設定されているセンサーはすべてバイパスされます。',
    'analysis_title': 'セキュリティ分析',
    'arm_time': 'アーミング遅延 (秒)',
    'arm_time_label': 'アーミング遅延',
    'armed_away': '離れて',
    'armed_home': '家',
    'armed_night': '夜',
    'armed_vacation': '休暇',
    'arming': 'アーミング',
    'automations': '自動化',
    'available': '利用可能',
    'backdrop_mode_blur': 'ぼかし',
    'backdrop_mode_dim': '淡色表示',
    'backdrop_mode_none': 'なし',
    'background_lbl': '背景',
    'backup_desc': 'Argus 構成をエクスポート、復元、またはリセットします。',
    'backup_title': 'バックアップと復元',
    'badge_pin_reset': 'PINのリセット',
    'badge_pin_reset_failed': 'PINのリセットに失敗しました',
    'battery_low': 'バッテリー残量低下',
    'bg_collage': 'コラージュ',
    'bg_hub_default': 'デフォルトのハブの背景',
    'bg_hub_selected_from_history': '履歴から選択されたハブの背景',
    'bg_hub_title': 'ハブの背景',
    'bg_image_opt': '静止画像',
    'bg_none': 'なし',
    'bg_panel_none': 'パネルの背景なし',
    'bg_panel_selected_from_history': '履歴から選択したパネルの背景',
    'bg_panel_title': 'パネルの背景',
    'bg_photo': '写真',
    'bg_sound_opt': '背景音',
    'bg_video': 'アニメーションビデオ',
    'bg_weather': 'ライブ天気',
    'bridge_not_connected': 'ブリッジが接続されていません',
    'bridge_not_desc': 'HomeKit ブリッジは現在切断されています。',
    'bridge_paired': 'ブリッジペアリング済み',
    'bridge_paired_desc': 'HomeKit ブリッジはペアリングされており、アクティブです。',
    'btn_away': '🔴離れて',
    'btn_create_argus_profile': '+ Argus プロファイルの作成',
    'btn_disarmed': '🔓武装解除',
    'btn_home': '🏠 ホーム',
    'btn_night': '🌙 夜',
    'btn_sos': '🚨 SOS / パニック',
    'btn_vacation': '✈️休暇',
    'bypass_lbl': '🚫 バイパス',
    'cancel': 'キャンセル',
    'cancel_btn': 'キャンセル',
    'cannot_arm': 'システムを作動させることができません',
    'cannot_delete_last_admin': '唯一の管理者を削除することはできません。',
    'change_btn': '変化',
    'change_pin': 'アクセスPINの変更',
    'change_profile_picture': 'HA 人物で写真を変更 ↗',
    'claim_btn': '請求管理者',
    'claim_desc': 'インストールには管理者がアクセス権を取得する必要があります。',
    'claim_title': 'Argus セキュリティ アップデート',
    'clear': 'クリア',
    'clear_history': '履歴をクリアする',
    'clear_history_confirm': 'アクティビティ履歴をすべて削除しますか?',
    'clear_log_btn': '🗑️ ログをクリア',
    'clock_12h': '12時間制（午前/午後）',
    'clock_24h': '24時間対応',
    'clock_auto': '自動 (言語別)',
    'clock_format_desc': '上部ヘッダーのクロック形式',
    'clock_format_label': 'クロックフォーマット',
    'close': '近い',
    'collapse': '崩壊',
    'confirm': '確認する',
    'confirm_pin': 'PINの確認',
    'connected': '接続済み',
    'create_ha': '+ HA で作成',
    'current_pin': '現在のPIN',
    'customize': 'カスタマイズ',
    'delete': '消去',
    'delete_btn_title': '消去',
    'delete_file_error': 'ファイルを削除できませんでした: {エラー}',
    'delete_user_confirm': 'このユーザーを削除してもよろしいですか?',
    'delete_user_tooltip': 'このユーザーを削除します',
    'deselect_all': 'すべての選択を解除',
    'details_notif': '通知の詳細',
    'disarm_time': 'エントリ遅延 (秒)',
    'disarm_time_label': 'エントリーの遅延',
    'disarmed': '武装解除',
    'done': '終わり',
    'edit_btn': '✏️ 名前を編集',
    'edit_dashboard': 'ダッシュボードの編集',
    'edit_dashboard_done': '✓ 完了',
    'emergency_call_active': '緊急通報中です...',
    'emergency_help': '地域の緊急サービス番号 (例: 911 または 112) を設定します。 SOS アラートに含まれます。',
    'emergency_number_label': '🚨 現地の緊急電話番号',
    'entry_sensors': '侵入センサー',
    'error_loading_uploaded_files': 'アップロードされたファイルのロード中にエラーが発生しました。',
    'exit_to_ha': '終了してホームアシスタントに戻る',
    'exp_indefinite': '不定',
    'exp_temporary': '一時的 (日付/時刻)',
    'expand': '拡大する',
    'expired': '期限切れ',
    'export_btn': '設定のエクスポート',
    'export_error': 'エクスポート エラー: {エラー}',
    'external_panels': '外部警報パネル',
    'file_choice': '静止画像として使用するか (OK)、アニメーションビデオとして使用しますか (キャンセル)?',
    'file_delete_confirm': 'このファイルを完全に削除しますか?',
    'file_read_error': 'ファイルを読み取れませんでした。',
    'files_count': '{count} ファイル',
    'files_count_short': '{count} ファイル',
    'first_run_blocked_desc': 'セットアップはロックされています。',
    'first_run_blocked_title': '初期設定が必要です',
    'first_run_desc': '初期セキュリティ認証情報を構成します。',
    'first_run_pin_expl': 'システムを制御するためのマスターPINを設定します。',
    'first_run_skip': '今のところスキップしてください',
    'first_run_start': 'セットアップの開始',
    'first_run_welcome': 'アルガスへようこそ！',
    'forgot_pin': 'PIN をお忘れですか?',
    'fullscreen_title': '全画面表示',
    'generic_error': 'エラー: {エラー}',
    'github_action': 'GitHub でスターを付ける',
    'github_desc': 'If you enjoy this project, support development with a star on GitHub.',
    'github_title': 'アーガスをサポートする',
    'ha_account_linked': 'HA アカウント: {名前}',
    'ha_account_unavailable': 'HA アカウントがリンクされていません',
    'ha_admin_label': 'HA管理者',
    'ha_role_admin': '管理者',
    'ha_role_standard': '標準ユーザー',
    'ha_standard_user_label': 'HA標準ユーザー',
    'help': 'ヘルプ',
    'hero_desc': 'インテリジェントホームセキュリティシステム',
    'hide': '隠れる',
    'hide_widget': 'ウィジェットを非表示にする',
    'history_refresh': '🔄リフレッシュ',
    'history_title': '活動履歴',
    'history_unavailable': 'アクティビティ履歴は利用できません。',
    'home_default': '私の家',
    'home_fallback': '私の家',
    'home_name_label': '家の名前',
    'home_name_lbl': '家の名前',
    'home_name_modal_desc': 'Customize your residence name shown in the top header.',
    'home_name_modal_title': 'ホーム名の編集',
    'home_name_placeholder': 'あなたの家の名前は...',
    'homekit_bridge': 'ホームキットブリッジ',
    'homekit_house': 'ホームキットホーム',
    'homekit_not_paired': 'HomeKit がペアリングされていません',
    'homekit_title': 'ホームキットの統合',
    'import_btn': '設定のインポート',
    'import_error': 'インポートエラー: {error}',
    'import_success': '構成が復元されました。リロード中…',
    'initialization_error_desc': '承認されたホーム アシスタント バックエンドに接続できませんでした。',
    'initialization_error_title': 'Argus を起動できませんでした',
    'instances': 'Argus セキュリティパネル',
    'introduce_pin': 'セキュリティPINを入力してください',
    'invalid_config': '無効な構成ファイルです。',
    'invalid_pin_msg': '間違ったPIN',
    'is_admin': '管理者ですか？',
    'lang_select_title': '言語の選択',
    'lang_selector_lbl': '⚙️言語',
    'language': '言語',
    'lbl_aesthetic_custom': 'カスタマイズと設定',
    'lbl_load_file': 'ファイルをアップロードする',
    'lbl_uploaded_files': 'アップロードされたファイル',
    'light_siren_color': '色',
    'light_siren_flash': '可能な場合は穏やかなフラッシュ',
    'link_ha_user': 'リンク HA ユーザー',
    'linked_rules': 'Argus に関連するルール',
    'loading': '読み込み中…',
    'lock_if_open': '開いている場合はブロックする',
    'log_action_access_pin_updated': 'アクセスPINが更新されました',
    'log_action_analysis': 'セキュリティ分析',
    'log_action_automation': '自動化が実行されました',
    'log_action_backup_created': 'バックアップが作成されました',
    'log_action_backup_restored': '設定が復元されました',
    'log_action_first_run_completed': '初期設定が完了しました',
    'log_action_fullscreen_unlocked': '全画面ロック解除',
    'log_action_master_pin_rejected': '間違ったマスター PIN が拒否されました',
    'log_action_mode_changed': 'モードが変更されました',
    'log_action_profile_selected': 'プロファイルが選択されました',
    'log_action_rejected': 'アクションが拒否されました',
    'log_action_save_ui': 'ビジュアル設定が保存されました',
    'log_action_schedule_applied': 'スケジュールが適用されました',
    'log_action_select_profile': 'プロファイルが切り替わりました',
    'log_action_sos': '緊急SOSアラーム',
    'log_action_sos_stopped': 'SOSが停止しました',
    'log_action_state_restored': '状態が復元されました',
    'log_action_stop_sos': 'SOSアラームが停止しました',
    'log_action_user_added': 'ユーザーが作成しました',
    'log_action_user_deleted': 'ユーザーが削除されました',
    'log_action_user_logged_in': 'ユーザーがログインしました',
    'log_action_verify_access_pin': 'アクセスPINが確認されました',
    'log_armed': '武装した',
    'log_by': 'による',
    'log_detail_armed': 'システムが作動中',
    'log_detail_disarm': 'システムが解除されました',
    'log_detail_pin_reset': 'HA 管理者によるマスター PIN のリセット',
    'log_detail_pin_reset_failed': 'PIN リセットの試行が拒否されました',
    'log_detail_triggered': '自動アクティベーション',
    'log_disarmed': '武装解除',
    'log_mode': 'モード',
    'log_no_events': '履歴にイベントは記録されません。',
    'log_sensor': 'センサー',
    'log_triggered': 'トリガーされた',
    'login_btn': 'ログイン',
    'manual_arm': '手動アーミング',
    'manual_disarm': '手動解除',
    'master_pin_lbl': 'マスターPIN',
    'modal_add_user': '+ ユーザーを追加',
    'modal_cancel': 'キャンセル',
    'modal_confirm': '確認する',
    'modal_delete_confirm': 'このユーザーを削除しますか?',
    'modal_edit_name': '名前の編集',
    'modal_name_label': 'プロファイル名',
    'modal_pin_help': 'PIN を必要としない場合は空白のままにします。',
    'modal_pin_title': 'アクセスPIN',
    'modal_save': '保存',
    'modal_user_added': 'ユーザーが正常に作成されました。',
    'mode_away': '離れて',
    'mode_home': '家',
    'mode_night': '夜',
    'mode_vacation': '休暇',
    'modes': 'モード / SOS',
    'modes_sos': 'モード / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': '決してトリガーされない',
    'new_pin': '新しいPIN',
    'no_alarm_instance': '利用可能なアラーム インスタンスがありません',
    'no_auto_linked': '自動化はリンクされていません。',
    'no_files_uploaded': 'ファイルはアップロードされていません。',
    'no_files_uploaded_short': 'ファイルがありません',
    'no_instances': 'アラーム インスタンスが設定されていません。',
    'no_results': '結果はありません',
    'no_rules': '利用できるルールはありません。',
    'no_sensors_configured': 'センサーが構成されていません',
    'no_unlinked_ha_accounts': 'リンクされていない HA アカウントはありません。',
    'no_users': 'ユーザーが構成されていません。',
    'none_selected': '何も選択されていません',
    'notif_desc': '重要なイベントのモバイルプッシュ通知。',
    'notif_no_services': 'モバイル通知サービスは利用できません。',
    'notification_armed': '{user} はシステムを {mode} モードに設定しました。',
    'notification_disarmed': '{user} はシステムを解除しました。',
    'notifications_title': '通知',
    'open_sensors': 'オープンセンサー',
    'open_sensors_explain': '次のセンサーが開いています:\\\\n{names}\\\\n\\\\n監視する前にセンサーを閉じるか、バイパスを有効にします。',
    'panic_state_unknown': '以前のアラーム状態を判断できませんでした。',
    'panic_stop_error': 'アラームを停止できませんでした: {エラー}',
    'panic_stopped': 'アラームが停止しました。復元された状態 {状態}',
    'pending': '保留中',
    'pin_active_no': '有効なPINがありません',
    'pin_active_yes': 'アクティブなPIN',
    'pin_deleted': 'PIN が削除されました',
    'pin_desc': '4～8桁のセキュリティコードです。',
    'pin_disarm_error': '間違ったPINまたは解除エラー',
    'pin_incorrect': '間違ったPIN',
    'pin_management': '🔑 PIN 管理',
    'pin_master_title': 'マスターPIN',
    'pin_mismatch': 'PIN が一致しません',
    'pin_modal_desc': '続行するにはセキュリティ PIN を入力してください。',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'マスター PIN を削除するには、空白のままにします。',
    'pin_reset_admin_only': '管理者のみが PIN をリセットできます。',
    'pin_reset_confirm': 'PINをリセットしますか?',
    'pin_updated': 'PIN が正常に更新されました',
    'profile_is_yours': 'あなたのプロフィール',
    'profile_needs_pin': 'このプロファイルにはアクセス PIN が必要です。',
    'profile_no_pin_access': 'PIN なしで無料でアクセスできます。',
    'remove_btn': '取り除く',
    'reset_btn': '工場出荷時設定にリセット',
    'reset_confirm': 'Argus を工場出荷時のデフォルトにリセットしますか?すべての設定と PIN が失われます。',
    'reset_dashboard': 'レイアウトをリセット',
    'reset_error': 'リセットエラー: {エラー}',
    'reset_error_auth': 'リセットするには認証が必要です。',
    'reset_success': 'アーガスは正常にリセットされました。',
    'reset_widget': 'ウィジェットをリセット',
    'retry_action': 'リトライ',
    'role_argus_admin': 'アルガス管理者',
    'role_argus_admin_short': '管理者',
    'role_argus_standard': '標準ユーザー',
    'role_argus_user': '標準ユーザー',
    'role_argus_user_short': 'ユーザー',
    'rules_tip': '自動化のヒント',
    'save_btn': '保存',
    'save_config': '💾 セーブモード',
    'save_mode': 'セーブモード',
    'save_notif': '通知を保存する',
    'save_user': 'ユーザーの保存',
    'saved': '✓ 保存済み',
    'search_placeholder': 'デバイスまたはエンティティを検索…',
    'search_select': '検索して選択してください…',
    'searching_auto': 'オートメーションを検索中…',
    'select_all': 'すべて選択',
    'select_btn': '+ 選択',
    'select_entry_sensors': '+ 入口センサーの選択',
    'select_profile_subtitle': 'ユーザープロフィールを選択してください',
    'select_profile_title': 'プロファイルにアクセスする',
    'selected_lbl': '選択済み',
    'selector_accept': '受け入れる',
    'selector_clear': '選択をクリア',
    'selector_close': '近い',
    'selector_panic': '🚨 SOS緊急出力',
    'sensor_section': '侵入センサー',
    'sensors_to_bypass': 'バイパスするセンサー',
    'settings': '⚙️設定',
    'setup_access_pin': 'Argus パネル アクセス PIN (オプション)',
    'setup_admin_name': '管理者名',
    'setup_master_pin': 'アーム/アーム解除用のマスター PIN (オプション)',
    'setup_required_action': '統合で Argus を構成する',
    'setup_required_desc': 'Argus はインストールされていますが、インスタンスはまだ作成されていません。',
    'setup_required_title': 'Argus のセットアップが必要です',
    'siren_section': 'サイレン',
    'size': 'サイズ',
    'slide_disarm': 'スライドして武装を解除します',
    'slide_sos': 'スライドしてSOSをトリガー',
    'slide_sos_stop': 'スライドしてSOSを停止します',
    'sos_actions': '🚨 SOS アクション',
    'sos_activated': 'SOSが作動しました',
    'sos_call': '緊急サービスに電話する',
    'sos_call_confirm': '地元の緊急サービス ({番号}) に電話しますか?',
    'sos_call_help': 'このデバイスが電話をかけることができない場合、Argus は重要な警告通知を送信します。',
    'sos_confirm_text': 'スライドすると緊急警報がすぐに鳴ります。',
    'sos_confirm_title': '🚨 緊急警報を鳴らしますか?',
    'sos_error': 'SOS をトリガーできませんでした: {エラー}',
    'sos_no_outputs': '緊急出力デバイスが選択されていません',
    'sos_outputs_help': 'これらのデバイスは、SOS がトリガーされると常にオンになります。',
    'sos_select_outputs': 'ライト、サイレン、またはシーンを選択します',
    'sos_slide': 'スライドしてSOSをトリガー',
    'sos_stop': 'ストップSOS',
    'status_away': '離れて',
    'status_closed': '閉店',
    'status_home': '家',
    'status_idle': 'アイドル状態',
    'status_open': '開ける',
    'status_recording': '録音',
    'support_title': 'ステータスとサポート',
    'switch_profile_btn': '👤 プロフィールを切り替える',
    'sync_panel_help': '外部アラームパネルと状態を同期します。',
    'sync_panel_section': '外部警報パネル',
    'system_armed': 'システム武装済み',
    'system_disarmed': 'システムが解除されました',
    'system_triggered': 'アラームが作動しました!',
    'temp_auto': '自動温度',
    'temp_displayed': 'ライブ温度エンティティ',
    'temp_notification_title': 'Argus — 温度アラート',
    'temp_thermostat': 'サーモスタット',
    'thermostat_alert_notif': 'サーモスタット警告',
    'times_section': '⏱️タイマー',
    'triggered': 'アラームが作動しました!',
    'unavailable': '利用不可',
    'undo_error': 'リセットを元に戻すことができませんでした: {error}',
    'undo_reset': 'リセットを元に戻す',
    'undo_reset_btn': 'リセットを元に戻す',
    'undo_success': 'リセットが正常に取り消されました。',
    'unlinked_ha_accounts_title': 'ホーム アシスタント アカウント',
    'unlock_kiosk': 'キオスクのロックを解除する',
    'update_pin': 'PIN を更新する',
    'upload_error': 'アップロードエラー。',
    'url_placeholder': 'バックグラウンド URL…',
    'use_for_hub': 'ハブとして使用',
    'use_for_panel': 'パネルに使用',
    'use_ha_language': 'ホーム アシスタントの言語を使用する',
    'user_default': 'ユーザー',
    'user_exp_date': '有効期限の日時',
    'user_exp_type': '有効期限の種類',
    'user_no_pin': 'アクセスPINがありません',
    'user_pin': 'アクセスPIN',
    'user_pin_action': '暗証番号を設定する',
    'user_required': '名前とPINは必須です。',
    'user_role_action': '役割の変更',
    'user_role_label': 'ユーザーの役割',
    'username': 'ユーザー名',
    'users_title': '👥 ユーザーとアクセス制御',
    'vacation': '休暇',
    'wait_if_open': 'センサーが閉じるまで待ちます',
    'waiting_sensors': 'センサーを待っています',
    'waiting_sensors_count': '{count} 個のセンサーを待機しています',
    'weather_auto': '自動天気検知',
    'weather_source': '気象エンティティ',
    'welcome_greeting': 'おかえり！',
    'welcome_profile': 'ようこそ、{名前}',
    'wrong_pin': '間違ったPIN',
  },
  'uk': {
    'accept': 'прийняти',
    'access_control_title': '👥 Користувачі та контроль доступу',
    'access_desc': 'Глобальне управління безпекою, головний PIN-код і адміністратори.',
    'access_pin_lbl': 'PIN-код доступу',
    'access_title': 'Користувачі та контроль доступу',
    'action_disarmed': 'Знято з зброї',
    'action_failed': 'Не вдалося виконати дію',
    'action_sos': 'Екстрена SOS сигналізація',
    'action_sos_stop': 'SOS зупинено',
    'active_profile': 'Активний профіль',
    'active_until': 'Термін дії закінчується',
    'activity_log': '📋 Журнал активності',
    'add_btn': '+ Додати',
    'add_user': 'Додати користувача',
    'admin_only': 'Лише адміністратори можуть керувати користувачами та налаштуваннями.',
    'alarm_instance': 'Примірник тривоги',
    'all_sensors_bypassed': 'Усі налаштовані датчики обходяться.',
    'analysis_title': 'Аналіз безпеки',
    'arm_time': 'Затримка постановки на охорону (с)',
    'arm_time_label': 'Затримка постановки на охорону',
    'armed_away': 'геть',
    'armed_home': 'додому',
    'armed_night': 'ніч',
    'armed_vacation': 'Відпустка',
    'arming': 'Постановка на охорону',
    'automations': 'Автоматизації',
    'available': 'в наявності',
    'backdrop_mode_blur': 'Розмиття',
    'backdrop_mode_dim': 'Затемнена',
    'backdrop_mode_none': 'Жодного',
    'background_lbl': 'Фон',
    'backup_desc': 'Експорт, відновлення або скидання конфігурації Argus.',
    'backup_title': 'Резервне копіювання та відновлення',
    'badge_pin_reset': 'Скидання PIN-коду',
    'badge_pin_reset_failed': 'Помилка скидання PIN-коду',
    'battery_low': 'Низький заряд батареї',
    'bg_collage': 'колаж',
    'bg_hub_default': 'Фон концентратора за замовчуванням',
    'bg_hub_selected_from_history': 'Фон концентратора вибрано з історії',
    'bg_hub_title': 'Концентратор фону',
    'bg_image_opt': 'Статичне зображення',
    'bg_none': 'Жодного',
    'bg_panel_none': 'Без фону панелі',
    'bg_panel_selected_from_history': 'Фон панелі вибрано з історії',
    'bg_panel_title': 'Фон панелі',
    'bg_photo': 'Фото',
    'bg_sound_opt': 'Фоновий звук',
    'bg_video': 'Анімаційне відео',
    'bg_weather': 'Жива погода',
    'bridge_not_connected': 'Міст не підключено',
    'bridge_not_desc': 'Міст HomeKit наразі відключено.',
    'bridge_paired': 'Парний міст',
    'bridge_paired_desc': 'Міст HomeKit є парним і активним.',
    'btn_away': '🔴 В гостях',
    'btn_create_argus_profile': '+ Створити профіль Argus',
    'btn_disarmed': '🔓 Знято з зброї',
    'btn_home': '🏠 Додому',
    'btn_night': '🌙 Ніч',
    'btn_sos': '🚨 SOS / ПАНІКА',
    'btn_vacation': '✈️ Відпустка',
    'bypass_lbl': '🚫 Обхід',
    'cancel': 'Скасувати',
    'cancel_btn': 'Скасувати',
    'cannot_arm': 'Не вдається поставити систему під охорону',
    'cannot_delete_last_admin': 'Неможливо видалити єдиного адміністратора.',
    'change_btn': 'Зміна',
    'change_pin': 'Змінити PIN-код доступу',
    'change_profile_picture': 'Змінити фото в HA Persons ↗',
    'claim_btn': 'Адміністратор претензій',
    'claim_desc': 'Щоб отримати доступ до вашої інсталяції, потрібен адміністратор.',
    'claim_title': 'Оновлення безпеки Argus',
    'clear': 'ясно',
    'clear_history': 'Очистити історію',
    'clear_history_confirm': 'Видалити всю історію активності?',
    'clear_log_btn': '🗑️ Очистити журнал',
    'clock_12h': '12 годин (до полудня/пополудні)',
    'clock_24h': '24 години',
    'clock_auto': 'Автоматично (за мовою)',
    'clock_format_desc': 'Формат годинника у верхньому заголовку',
    'clock_format_label': 'Формат годинника',
    'close': 'Закрити',
    'collapse': 'Згорнути',
    'confirm': 'Підтвердити',
    'confirm_pin': 'Підтвердьте PIN-код',
    'connected': 'ПІДКЛЮЧЕНО',
    'create_ha': '+ Створити в HA',
    'current_pin': 'Поточний PIN-код',
    'customize': 'Налаштувати',
    'delete': 'Видалити',
    'delete_btn_title': 'Видалити',
    'delete_file_error': 'Не вдалося видалити файл: {помилка}',
    'delete_user_confirm': 'Ви впевнені, що хочете видалити цього користувача?',
    'delete_user_tooltip': 'Видалити цього користувача',
    'deselect_all': 'Зняти вибір із усіх',
    'details_notif': 'Деталі сповіщення',
    'disarm_time': 'Затримка на вхід (с)',
    'disarm_time_label': 'Затримка на вхід',
    'disarmed': 'Знято з зброї',
    'done': 'Готово',
    'edit_btn': '✏️ Редагувати ім’я',
    'edit_dashboard': 'Редагувати інформаційну панель',
    'edit_dashboard_done': '✓ Готово',
    'emergency_call_active': 'Виконується екстрений виклик...',
    'emergency_help': 'Встановіть номер місцевої екстреної служби (наприклад, 911 або 112). Включено до екстрених сповіщень.',
    'emergency_number_label': '🚨 Місцевий номер екстреної допомоги',
    'entry_sensors': 'Датчики входу',
    'error_loading_uploaded_files': 'Помилка завантаження завантажених файлів.',
    'exit_to_ha': 'Вихід до домашнього помічника',
    'exp_indefinite': 'Безстроковий',
    'exp_temporary': 'Тимчасово (дата/час)',
    'expand': 'Розгорнути',
    'expired': 'Термін дії минув',
    'export_btn': 'Конфігурація експорту',
    'export_error': 'Помилка експорту: {error}',
    'external_panels': 'Панелі зовнішньої сигналізації',
    'file_choice': 'Використовувати як статичне зображення (ОК) чи анімаційне відео (Скасувати)?',
    'file_delete_confirm': 'Видалити цей файл назавжди?',
    'file_read_error': 'Не вдалося прочитати файл.',
    'files_count': '{count} файлів',
    'files_count_short': '{count} файлів',
    'first_run_blocked_desc': 'Налаштування заблоковано.',
    'first_run_blocked_title': 'Потрібне початкове налаштування',
    'first_run_desc': 'Налаштуйте початкові облікові дані безпеки.',
    'first_run_pin_expl': 'Встановіть головний PIN-код для керування системою.',
    'first_run_skip': 'Пропустити поки що',
    'first_run_start': 'Запустіть налаштування',
    'first_run_welcome': 'Ласкаво просимо до Argus!',
    'forgot_pin': 'Забули PIN-код?',
    'fullscreen_title': 'Повний екран',
    'generic_error': 'Помилка: {error}',
    'github_action': 'Зірка на GitHub',
    'github_desc': 'Якщо вам подобається цей проект, підтримайте розробку зі зіркою на GitHub.',
    'github_title': 'Підтримайте Argus',
    'ha_account_linked': 'Обліковий запис HA: {name}',
    'ha_account_unavailable': 'Обліковий запис HA не пов’язано',
    'ha_admin_label': 'Адміністратор HA',
    'ha_role_admin': 'Адміністратор',
    'ha_role_standard': 'Стандартний користувач',
    'ha_standard_user_label': 'Стандартний користувач HA',
    'help': 'Довідка',
    'hero_desc': 'Інтелектуальна система безпеки будинку',
    'hide': 'Сховати',
    'hide_widget': 'Сховати віджет',
    'history_refresh': '🔄 Оновити',
    'history_title': 'Історія активності',
    'history_unavailable': 'Історія активності недоступна.',
    'home_default': 'Мій Дім',
    'home_fallback': 'Мій Дім',
    'home_name_label': 'Домашня назва',
    'home_name_lbl': 'Домашня назва',
    'home_name_modal_desc': 'Налаштуйте своє місце проживання, яке відображається у верхньому заголовку.',
    'home_name_modal_title': 'Редагувати назву будинку',
    'home_name_placeholder': 'Ваше домашнє ім\'я...',
    'homekit_bridge': 'HomeKit Bridge',
    'homekit_house': 'HomeKit Home',
    'homekit_not_paired': 'HomeKit не підключено',
    'homekit_title': 'Інтеграція HomeKit',
    'import_btn': 'Конфігурація імпорту',
    'import_error': 'Помилка імпорту: {error}',
    'import_success': 'Конфігурацію відновлено. Перезавантаження…',
    'initialization_error_desc': 'Не вдалося підключитися до авторизованої системи Home Assistant.',
    'initialization_error_title': 'Не вдалося запустити Argus',
    'instances': 'Панель безпеки Argus',
    'introduce_pin': 'Введіть PIN-код безпеки',
    'invalid_config': 'Недійсний файл конфігурації.',
    'invalid_pin_msg': 'Неправильний PIN-код',
    'is_admin': 'Адміністратор?',
    'lang_select_title': 'Виберіть мову',
    'lang_selector_lbl': '⚙️ Мова',
    'language': 'Мова',
    'lbl_aesthetic_custom': 'Персоналізація та налаштування',
    'lbl_load_file': 'Завантажити файл',
    'lbl_uploaded_files': 'Завантажені файли',
    'light_siren_color': 'колір',
    'light_siren_flash': 'Лагідний спалах, якщо доступний',
    'link_ha_user': 'Посилання користувача HA',
    'linked_rules': 'Правила, пов\'язані з Argus',
    'loading': 'Завантаження…',
    'lock_if_open': 'Заблокувати, якщо відкрито',
    'log_action_access_pin_updated': 'PIN-код доступу оновлено',
    'log_action_analysis': 'Аналіз безпеки',
    'log_action_automation': 'Автоматизація виконана',
    'log_action_backup_created': 'Резервну копію створено',
    'log_action_backup_restored': 'Конфігурацію відновлено',
    'log_action_first_run_completed': 'Початкове налаштування завершено',
    'log_action_fullscreen_unlocked': 'Повний екран розблоковано',
    'log_action_master_pin_rejected': 'Неправильний головний PIN відхилено',
    'log_action_mode_changed': 'Режим змінено',
    'log_action_profile_selected': 'Профіль вибрано',
    'log_action_rejected': 'Дія відхилена',
    'log_action_save_ui': 'Візуальні налаштування збережено',
    'log_action_schedule_applied': 'Розклад застосовано',
    'log_action_select_profile': 'Профіль змінено',
    'log_action_sos': 'Екстрена SOS сигналізація',
    'log_action_sos_stopped': 'SOS зупинено',
    'log_action_state_restored': 'Держава відновлена',
    'log_action_stop_sos': 'Сигнал SOS вимкнено',
    'log_action_user_added': 'Створено користувачем',
    'log_action_user_deleted': 'Користувача видалено',
    'log_action_user_logged_in': 'Користувач увійшов',
    'log_action_verify_access_pin': 'PIN-код доступу перевірено',
    'log_armed': 'ОЗБРОЙНИЙ',
    'log_by': 'за',
    'log_detail_armed': 'Система на охороні',
    'log_detail_disarm': 'Система знята з охорони',
    'log_detail_pin_reset': 'Головний PIN-код скинуто адміністратором HA',
    'log_detail_pin_reset_failed': 'Спробу скинути PIN-код відхилено',
    'log_detail_triggered': 'Автоматична активація',
    'log_disarmed': 'ЗНЕЗБРОЄНО',
    'log_mode': 'Режим',
    'log_no_events': 'Немає подій, зафіксованих в історії.',
    'log_sensor': 'датчик',
    'log_triggered': 'ІНІЦІЙОВАНО',
    'login_btn': 'Увійти',
    'manual_arm': 'Ручна постановка на охорону',
    'manual_disarm': 'Ручне зняття з охорони',
    'master_pin_lbl': 'Головний PIN-код',
    'modal_add_user': '+ Додати користувача',
    'modal_cancel': 'Скасувати',
    'modal_confirm': 'Підтвердити',
    'modal_delete_confirm': 'Видалити цього користувача?',
    'modal_edit_name': 'Редагувати назву',
    'modal_name_label': 'Ім\'я профілю',
    'modal_pin_help': 'Залиште поле пустим, щоб PIN-код не вимагався.',
    'modal_pin_title': 'PIN-код доступу',
    'modal_save': 'зберегти',
    'modal_user_added': 'Користувача створено успішно.',
    'mode_away': 'геть',
    'mode_home': 'додому',
    'mode_night': 'ніч',
    'mode_vacation': 'Відпустка',
    'modes': 'Режими / SOS',
    'modes_sos': 'Режими / SOS',
    'mqtt_label': 'MQTT',
    'never_triggered': 'Ніколи не запускався',
    'new_pin': 'Новий PIN-код',
    'no_alarm_instance': 'Немає доступних екземплярів тривоги',
    'no_auto_linked': 'Автоматизація не пов’язана.',
    'no_files_uploaded': 'Немає завантажених файлів.',
    'no_files_uploaded_short': 'Немає файлів',
    'no_instances': 'Немає налаштованих екземплярів тривоги.',
    'no_results': 'Результатів немає',
    'no_rules': 'Немає доступних правил.',
    'no_sensors_configured': 'Датчики не налаштовані',
    'no_unlinked_ha_accounts': 'Немає від’єднаних облікових записів HA.',
    'no_users': 'Користувачів не налаштовано.',
    'none_selected': 'Не вибрано',
    'notif_desc': 'Мобільні push-повідомлення про критичні події.',
    'notif_no_services': 'Немає доступних мобільних служб сповіщень.',
    'notification_armed': '{user} поставив систему під охорону в режимі {mode}.',
    'notification_disarmed': '{user} зняв систему з охорони.',
    'notifications_title': 'Сповіщення',
    'open_sensors': 'Відкриті датчики',
    'open_sensors_explain': 'Наступні датчики відкриті:\\\\n{names}\\\\n\\\\nЗакрийте їх перед постановкою на охорону або увімкніть Обхід.',
    'panic_state_unknown': 'Не вдалося визначити попередній стан будильника.',
    'panic_stop_error': 'Не вдалося зупинити будильник: {помилка}',
    'panic_stopped': 'Сигналізацію зупинено; відновлений стан {стан}',
    'pending': 'В очікуванні',
    'pin_active_no': 'Немає активного PIN-коду',
    'pin_active_yes': 'Активний PIN-код',
    'pin_deleted': 'PIN-код видалено',
    'pin_desc': 'Код безпеки від 4 до 8 цифр.',
    'pin_disarm_error': 'Неправильний PIN-код або помилка зняття з охорони',
    'pin_incorrect': 'Неправильний PIN-код',
    'pin_management': '🔑 Керування PIN-кодом',
    'pin_master_title': 'Головний PIN-код',
    'pin_mismatch': 'PIN-коди не збігаються',
    'pin_modal_desc': 'Введіть PIN-код безпеки, щоб продовжити.',
    'pin_placeholder': '••••',
    'pin_remove_hint': 'Залиште поле порожнім, щоб видалити головний PIN-код.',
    'pin_reset_admin_only': 'Лише адміністратори можуть скинути PIN-код.',
    'pin_reset_confirm': 'Скинути PIN-код?',
    'pin_updated': 'PIN-код успішно оновлено',
    'profile_is_yours': 'Ваш профіль',
    'profile_needs_pin': 'Для цього профілю потрібен PIN-код доступу.',
    'profile_no_pin_access': 'Безкоштовний доступ без PIN-коду.',
    'remove_btn': 'видалити',
    'reset_btn': 'Скидання до заводських налаштувань',
    'reset_confirm': 'Скинути Argus до заводських налаштувань? Усі конфігурації та PIN-коди буде втрачено.',
    'reset_dashboard': 'Скинути макет',
    'reset_error': 'Помилка скидання: {error}',
    'reset_error_auth': 'Для скидання потрібна автентифікація.',
    'reset_success': 'Argus успішно скинуто.',
    'reset_widget': 'Скинути віджет',
    'retry_action': 'Повторіть спробу',
    'role_argus_admin': 'Адміністратор Argus',
    'role_argus_admin_short': 'адмін',
    'role_argus_standard': 'Стандартний користувач',
    'role_argus_user': 'Стандартний користувач',
    'role_argus_user_short': 'Користувач',
    'rules_tip': 'Підказка щодо автоматизації',
    'save_btn': 'зберегти',
    'save_config': '💾 Режим збереження',
    'save_mode': 'Режим збереження',
    'save_notif': 'Зберегти сповіщення',
    'save_user': 'Зберегти користувача',
    'saved': '✓ Збережено',
    'search_placeholder': 'Пошук пристрою чи об’єкта…',
    'search_select': 'Пошук і вибір…',
    'searching_auto': 'Пошук автоматики…',
    'select_all': 'Виберіть усі',
    'select_btn': '+ Виберіть',
    'select_entry_sensors': '+ Виберіть Датчики входу',
    'select_profile_subtitle': 'Виберіть свій профіль користувача',
    'select_profile_title': 'Профілі доступу',
    'selected_lbl': 'Вибране',
    'selector_accept': 'прийняти',
    'selector_clear': 'Очистити вибір',
    'selector_close': 'Закрити',
    'selector_panic': '🚨 Екстрені виходи SOS',
    'sensor_section': 'Датчики вторгнення',
    'sensors_to_bypass': 'Датчики для обходу',
    'settings': '⚙️ Налаштування',
    'setup_access_pin': 'PIN-код доступу до панелі Argus (необов’язково)',
    'setup_admin_name': 'Ім\'я адміністратора',
    'setup_master_pin': 'Головний PIN-код для постановки/зняття з охорони (опціонально)',
    'setup_required_action': 'Налаштуйте Argus в Integrations',
    'setup_required_desc': 'Argus встановлено, але екземпляр ще не створено.',
    'setup_required_title': 'Потрібне налаштування Argus',
    'siren_section': 'Сирени',
    'size': 'Розмір',
    'slide_disarm': 'Посуньте, щоб зняти з охорони',
    'slide_sos': 'Посуньте, щоб викликати SOS',
    'slide_sos_stop': 'Посуньте, щоб зупинити SOS',
    'sos_actions': '🚨 SOS Акції',
    'sos_activated': 'SOS активовано',
    'sos_call': 'Викличте екстрену допомогу',
    'sos_call_confirm': 'Зателефонувати в місцеву екстрену службу ({номер})?',
    'sos_call_help': 'Якщо цей пристрій не може здійснювати телефонні дзвінки, Argus надішле критичне сповіщення.',
    'sos_confirm_text': 'Посуньте, щоб негайно активувати екстрену тривогу.',
    'sos_confirm_title': '🚨 Увімкнути аварійну сигналізацію?',
    'sos_error': 'Не вдалося викликати SOS: {помилка}',
    'sos_no_outputs': 'Не вибрано аварійних вихідних пристроїв',
    'sos_outputs_help': 'Ці пристрої завжди вмикаються, коли спрацьовує SOS.',
    'sos_select_outputs': 'Виберіть світло, сирени або сцени',
    'sos_slide': 'Посуньте, щоб викликати SOS',
    'sos_stop': 'СТОП SOS',
    'status_away': 'геть',
    'status_closed': 'ЗАЧИНЕНО',
    'status_home': 'додому',
    'status_idle': 'Бездіяльність',
    'status_open': 'ВІДЧИНЕНО',
    'status_recording': 'Запис',
    'support_title': 'Статус і підтримка',
    'switch_profile_btn': '👤 Змінити профіль',
    'sync_panel_help': 'Стан синхронізації із зовнішніми панелями сигналізації.',
    'sync_panel_section': 'Панелі зовнішньої сигналізації',
    'system_armed': 'СИСТЕМА НА ОХОРОНІ',
    'system_disarmed': 'СИСТЕМА ВИМКНЕНА З ОХОРОНИ',
    'system_triggered': 'СПРАЦІЮВАЛА ТРИВОГА!',
    'temp_auto': 'Автоматична температура',
    'temp_displayed': 'Об’єкт живої температури',
    'temp_notification_title': 'Argus — сповіщення про температуру',
    'temp_thermostat': 'Термостат',
    'thermostat_alert_notif': 'Оповіщення термостата',
    'times_section': '⏱️ Таймери',
    'triggered': 'Спрацював сигнал тривоги!',
    'unavailable': 'Недоступний',
    'undo_error': 'Не вдалося скасувати скидання: {помилка}',
    'undo_reset': 'Скасувати скидання',
    'undo_reset_btn': 'Скасувати скидання',
    'undo_success': 'Скидання успішно скасовано.',
    'unlinked_ha_accounts_title': 'Облікові записи домашнього помічника',
    'unlock_kiosk': 'Розблокувати кіоск',
    'update_pin': 'Оновіть PIN-код',
    'upload_error': 'Помилка завантаження.',
    'url_placeholder': 'Фонова URL-адреса…',
    'use_for_hub': 'Використовуйте для концентратора',
    'use_for_panel': 'Використовуйте для панелі',
    'use_ha_language': 'Використовуйте мову домашнього помічника',
    'user_default': 'Користувач',
    'user_exp_date': 'Термін придатності та час',
    'user_exp_type': 'Тип закінчення',
    'user_no_pin': 'Немає PIN-коду доступу',
    'user_pin': 'PIN-код доступу',
    'user_pin_action': 'Встановити PIN-код',
    'user_required': 'Необхідно вказати ім’я та PIN-код.',
    'user_role_action': 'Змінити роль',
    'user_role_label': 'Роль користувача',
    'username': 'Ім\'я користувача',
    'users_title': '👥 Користувачі та контроль доступу',
    'vacation': 'Відпустка',
    'wait_if_open': 'Зачекайте, поки датчики закриються',
    'waiting_sensors': 'ЧЕКАЮ НА ДАТЧИКИ',
    'waiting_sensors_count': 'ЧЕКАЄТЬСЯ НА {count} ДАТЧИК(ів)',
    'weather_auto': 'Автоматичне визначення погоди',
    'weather_source': 'Суб\'єкт погоди',
    'welcome_greeting': 'Ласкаво просимо назад!',
    'welcome_profile': 'Ласкаво просимо, {name}',
    'wrong_pin': 'Неправильний PIN-код',
  },
};

const _tmpl = document.createElement('template');
_tmpl.innerHTML = `
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

  setConfig(config) {
    this._cardConfig = config;
    if (config?.compact) {
      this.setAttribute('compact', '');
      this.classList.add('argus-compact');
    } else {
      this.removeAttribute('compact');
      this.classList.remove('argus-compact');
    }
  }

  _getClockFormat() {
    const fmt = this._ui?.personalization?.clock_format
      ?? this._ui?.clock_format 
      ?? this._dashboard?.clock_format 
      ?? 'auto';
    return ['auto', '12h', '24h'].includes(fmt) ? fmt : 'auto';
  }

  _formatTime(dateInput) {
    if (!dateInput) return '';
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(date.getTime())) return '';

    const clockPref = this._getClockFormat();
    const haFmt = String(this._hass?.locale?.time_format || '').toLowerCase();
    const is12h = clockPref === '12h' || (clockPref === 'auto' && (haFmt.includes('12') || haFmt.includes('am')));

    if (is12h) {
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours}:${minutes} ${ampm}`;
    } else {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  }

  _formatDateTime(dateInput) {
    if (!dateInput) return '';
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    if (isNaN(date.getTime())) return '';

    const clockPref = this._getClockFormat();
    const haFmt = String(this._hass?.locale?.time_format || '').toLowerCase();
    const is12h = clockPref === '12h' || (clockPref === 'auto' && (haFmt.includes('12') || haFmt.includes('am')));

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    if (is12h) {
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`;
    } else {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year}, ${hours}:${minutes}`;
    }
  }

  _updateProfileBadge() {
    const pill = this.shadowRoot.getElementById('active-profile-pill');
    const avatar = this.shadowRoot.getElementById('profile-avatar');
    const nameEl = this.shadowRoot.getElementById('profile-name');
    const roleEl = this.shadowRoot.getElementById('profile-role');
    if (!pill || !avatar || !nameEl || !roleEl) return;

    const prof = this._currentProfile;
    if (!prof) { pill.style.display = 'none'; return; }

    pill.style.display = 'flex';
    const name = prof.name || 'User';

    // ← ESTE ES EL FIX: usa foto si existe
    if (prof.picture) {
      avatar.innerHTML = `<img src="${this._escapeHtml(prof.picture)}" 
        style="width:100%;height:100%;border-radius:50%;object-fit:cover;" 
        alt="${this._escapeHtml(name)}" />`;
    } else {
      avatar.textContent = name.slice(0, 2).toUpperCase();
    }

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
    if (isDark) {
    } else {
    }
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    const isCardMode = this.hasAttribute('compact') || this.classList.contains('argus-compact') || Boolean(this._cardConfig?.compact);
    if (!isCardMode && (this._loadState === 'profile_selection' || this._loadState === 'legacy_claim')) return;
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
        if (this._activeAccessSection === 'users') this._renderUsers();
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
    let raw = this._manualLang;
    if (raw === 'auto') raw = null;
    if (!raw) {
      try {
        const stored = localStorage.getItem('argus_lang');
        if (stored && stored !== 'auto') raw = stored;
      } catch(e) {}
    }
    if (!raw) {
      const uiLang = this._ui?.manual_lang || this._ui?.language;
      if (uiLang && uiLang !== 'auto') raw = uiLang;
    }
    if (!raw) {
      raw = this._hass?.language || 'es';
    }
    raw = String(raw || 'es').trim();
    if (TEXTS[raw]) return raw;
    if (/^zh-(hant|tw|hk)/i.test(raw)) return 'zh-Hant';
    if (/^zh/i.test(raw)) return 'zh';
    const short = raw.split(/[-_]/)[0].toLowerCase();
    if (TEXTS[short]) return short;
    return 'es';
  }

  _getLocale() {
    return {
      es: 'es-ES', en: 'en-US', fr: 'fr-FR', pt: 'pt-BR',
      it: 'it-IT', zh: 'zh-CN', 'zh-Hant': 'zh-TW', ru: 'ru-RU',
      hi: 'hi-IN', ar: 'ar-SA', ko: 'ko-KR', ja: 'ja-JP', uk: 'uk-UA',
    }[this._getCurrentLangCode()] || 'en-US';
  }

  _weatherPresentation(condition, isNight) {
    const key = String(condition || 'sunny').toLowerCase().replace(/[\s-]+/g, '_');
    const labels: Record<string, Record<string, string>> = {
      es: { sunny:'Soleado', clear_night:'Noche despejada', partlycloudy:'Parcialmente nublado', cloudy:'Nublado', rainy:'Lluvioso', pouring:'Lluvia intensa', lightning:'Tormenta eléctrica', lightning_rainy:'Tormenta con lluvia', snowy:'Nevando', fog:'Niebla', windy:'Ventoso', exceptional:'Condiciones excepcionales' },
      en: { sunny:'Sunny', clear_night:'Clear night', partlycloudy:'Partly cloudy', cloudy:'Cloudy', rainy:'Rainy', pouring:'Heavy rain', lightning:'Thunderstorm', lightning_rainy:'Thunderstorm with rain', snowy:'Snowing', fog:'Foggy', windy:'Windy', exceptional:'Exceptional conditions' },
      fr: { sunny:'Ensoleillé', clear_night:'Nuit claire', partlycloudy:'Partiellement nuageux', cloudy:'Nuageux', rainy:'Pluvieux', pouring:'Forte pluie', lightning:'Orage', lightning_rainy:'Orage avec pluie', snowy:'Neige', fog:'Brouillard', windy:'Venteux', exceptional:'Conditions exceptionnelles' },
      pt: { sunny:'Ensolarado', clear_night:'Noite limpa', partlycloudy:'Parcialmente nublado', cloudy:'Nublado', rainy:'Chuvoso', pouring:'Chuva forte', lightning:'Trovoada', lightning_rainy:'Trovoada com chuva', snowy:'Nevando', fog:'Neblina', windy:'Ventoso', exceptional:'Condições excepcionais' },
      it: { sunny:'Soleggiato', clear_night:'Notte serena', partlycloudy:'Parzialmente nuvoloso', cloudy:'Nuvoloso', rainy:'Piovoso', pouring:'Pioggia intensa', lightning:'Temporale', lightning_rainy:'Temporale con pioggia', snowy:'Nevica', fog:'Nebbia', windy:'Ventoso', exceptional:'Condizioni eccezionali' },
      zh: { sunny:'晴朗', clear_night:'晴夜', partlycloudy:'局部多云', cloudy:'多云', rainy:'有雨', pouring:'大雨', lightning:'雷暴', lightning_rainy:'雷雨', snowy:'下雪', fog:'有雾', windy:'有风', exceptional:'异常天气' },
      'zh-Hant': { sunny:'晴朗', clear_night:'晴夜', partlycloudy:'局部多雲', cloudy:'多雲', rainy:'有雨', pouring:'大雨', lightning:'雷暴', lightning_rainy:'雷雨', snowy:'下雪', fog:'有霧', windy:'有風', exceptional:'異常天氣' },
      ru: { sunny:'Солнечно', clear_night:'Ясная ночь', partlycloudy:'Переменная облачность', cloudy:'Облачно', rainy:'Дождливо', pouring:'Сильный дождь', lightning:'Гроза', lightning_rainy:'Гроза с дождём', snowy:'Снег', fog:'Туман', windy:'Ветрено', exceptional:'Исключительные условия' },
      hi: { sunny:'धूप', clear_night:'साफ़ रात', partlycloudy:'आंशिक बादल', cloudy:'बादल', rainy:'बारिश', pouring:'भारी बारिश', lightning:'तूफ़ान', lightning_rainy:'तूफ़ानी बारिश', snowy:'बर्फ़बारी', fog:'कोहरा', windy:'हवादार', exceptional:'असाधारण स्थिति' },
      ar: { sunny:'مشمس', clear_night:'ليلة صافية', partlycloudy:'غائم جزئياً', cloudy:'غائم', rainy:'ماطر', pouring:'أمطار غزيرة', lightning:'عاصفة رعدية', lightning_rainy:'عاصفة مع مطر', snowy:'مثلج', fog:'ضباب', windy:'عاصف', exceptional:'ظروف استثنائية' },
      ko: { sunny:'맑음', clear_night:'맑은 밤', partlycloudy:'구름 조금', cloudy:'흐림', rainy:'비', pouring:'폭우', lightning:'뇌우', lightning_rainy:'비 동반 뇌우', snowy:'눈', fog:'안개', windy:'바람', exceptional:'특이 기상' },
      ja: { sunny:'晴れ', clear_night:'快晴（夜）', partlycloudy:'一部曇り', cloudy:'曇り', rainy:'雨', pouring:'大雨', lightning:'雷雨', lightning_rainy:'雨を伴う雷雨', snowy:'雪', fog:'霧', windy:'強風', exceptional:'異常気象' },
      uk: { sunny:'Сонячно', clear_night:'Ясна ніч', partlycloudy:'Мінлива хмарність', cloudy:'Хмарно', rainy:'Дощ', pouring:'Злива', lightning:'Гроза', lightning_rainy:'Гроза з дощем', snowy:'Сніг', fog:'Туман', windy:'Вітряно', exceptional:'Особливі умови' },
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
    const entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    if (code === 'auto') {
      this._manualLang = null;
      try { localStorage.setItem('argus_lang', 'auto'); } catch(e) {}
      if (this._ui) {
        this._ui.language = 'auto';
        this._ui.manual_lang = 'auto';
      }
      this._send('argus/save_ui', { language: 'auto', manual_lang: 'auto', ...(entry_id ? { entry_id } : {}) }).catch(console.error);
    } else {
      if (!TEXTS[code]) return;
      this._manualLang = code;
      try { localStorage.setItem('argus_lang', code); } catch(e) {}
      if (this._ui) {
        this._ui.language = code;
        this._ui.manual_lang = code;
      }
      this._send('argus/save_ui', { language: code, manual_lang: code, ...(entry_id ? { entry_id } : {}) }).catch(console.error);
    }
    if (this._instanceSignatures) this._instanceSignatures.clear();
    this._refreshLocalizedUi();
  }

  _refreshLocalizedUi() {
    (window as any)._argusT = (key: string) => this._t(key);
    (window as any)._argusDashboardReadyBtn = this._t('edit_dashboard_done') || '✓ Listo';
    (window as any)._argusDashboardEditBtn = '✥ ' + (this._t('edit_dashboard') || 'Editar tablero');
    (window as any)._argusDashboardResetBtn = this._t('reset_dashboard') || 'Restablecer diseño';
    this._applyTranslations();
    this._updateHeroProfileDisplay();
    this._updateHeroClock();
    if (this._instanceSignatures) this._instanceSignatures.clear();
    this._renderEntries();
    this._renderModeTabs();
    this._renderModeView();
    this._renderActivityLog();
    this._renderAutomations();
    this._renderNotifications();
    this._renderUsers();
    this._renderSosOutputs();
    if (typeof this._renderHealthCenter === 'function') this._renderHealthCenter();
    if (typeof this._renderStateSchedule === 'function') this._renderStateSchedule();
    this._configureEmergencyCall();
    this._updateHomeNameDisplay();
    this._renderUploadedFiles();
    const cur = this._manualLang || 'auto';
    const sel = this.shadowRoot.getElementById('dropdown-lang-select') as HTMLSelectElement | null;
    if (sel && sel.value !== cur) sel.value = cur;
    try { window.dispatchEvent(new CustomEvent('argus-lang-changed')); } catch(_) {}
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
    set('lbl-mas-ajustes', '🎨 ' + t('lbl_aesthetic_custom'));
    set('edit-widgets-label', this._widgetEditing ? ('✓ ' + t('done')) : '⚙️ Config. Widgets');
    set('lbl-temperature-source', t('temp_displayed'));
    set('lbl-weather-source', t('weather_source'));
    set('lbl-panel-bg-upload',  t('lbl_load_file'));
    set('lbl-hub-bg-upload',    t('lbl_load_file'));
    set('lbl-uploaded-files-title', t('lbl_uploaded_files'));
    set('btn-edit-home-name-standalone', t('edit_btn'));
    set('btn-save-personalization-standalone', t('save_btn'));
    set('btn-refresh-history',  t('history_refresh'));
    set('btn-export-forensic',  '📄 ' + (t('export_history_title') || 'Exportar'));
    set('btn-clear-log',        t('clear_log_btn'));
    set('h-history-export-title', '📄 ' + (t('export_history_title') || 'Exportar Historial'));
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
        this._renderEntries();
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

    // Real-time live update of all entry buttons, disarm button & global status badge
    const root = this.shadowRoot;
    if (root) {
      const modeLabel = key => {
        const str = String(this._t(key) || '').trim();
        const firstSpace = str.indexOf(' ');
        if (firstSpace > 0 && firstSpace <= 3) return str.substring(firstSpace + 1).trim();
        return str;
      };
      root.querySelectorAll('.entry').forEach(entry => {
        const homeSpan = entry.querySelector('.btn-home span');
        if (homeSpan) homeSpan.textContent = modeLabel('btn_home');
        const awaySpan = entry.querySelector('.btn-away span');
        if (awaySpan) awaySpan.textContent = modeLabel('btn_away');
        const nightSpan = entry.querySelector('.btn-night span');
        if (nightSpan) nightSpan.textContent = modeLabel('btn_night');
        const disarmSpan = entry.querySelector('.btn-disarm span, .argus-disarm-btn b');
        if (disarmSpan) disarmSpan.textContent = modeLabel('btn_disarmed');
        const sosSpan = entry.querySelector('.btn-sos span');
        if (sosSpan) {
          const isPanicActive = entry.querySelector('.btn-sos[data-action="stop-sos"]');
          sosSpan.textContent = isPanicActive ? this._t('sos_stop') : this._t('btn_sos');
        }
      });
      const globalStatus = root.getElementById('global-status');
      if (globalStatus) globalStatus.innerHTML = '';
    }

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
    // Nav toggling is removed. Sections are always visible.
  }

  /* ── Init ────────────────────────────────────────────────────────── */
  connectedCallback() {
    // Restore persisted language
    try { this._manualLang = localStorage.getItem('argus_lang') || null; } catch(e) {}
    this._ensureInitialized();
    this._startClock();
    
    // Safety check: If we think we are in fullscreen, but the browser is not, and we are not a kiosk, reset it.
    // This prevents the 'X' button getting stuck when returning to a cached component state.
    if (this._fullscreenIdx >= 0 && !this._kioskLocked) {
      const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
      if (!fsEl) {
        this._fullscreenIdx = -1;
        this.classList.remove('fullscreen-active');
      }
    }

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
    if (!this._shadowClickDelegated) {
      this._shadowClickDelegated = true;
      this.shadowRoot?.addEventListener('click', async (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target) return;
        const refreshBtn = target.closest('#btn-refresh-history, .btn-refresh-history');
        if (refreshBtn) {
          e.preventDefault();
          e.stopPropagation();
          (refreshBtn as HTMLElement).style.opacity = '0.5';
          const entryId = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
          await this._loadActivityTimeline(entryId);
          this._renderActivityLog();
          (refreshBtn as HTMLElement).style.opacity = '1';
          (refreshBtn as HTMLElement).textContent = '✓ ' + (this._t('history_refresh') || 'Actualizado');
          setTimeout(() => {
            if (refreshBtn) (refreshBtn as HTMLElement).textContent = '🔄 ' + (this._t('history_refresh') || 'Actualizar').replace(/^🔄\s*/, '');
          }, 1500);
          return;
        }
        const exportBtn = target.closest('#btn-export-forensic, .btn-export-forensic');
        if (exportBtn) {
          e.preventDefault();
          e.stopPropagation();
          this._openHistoryExportModal();
          return;
        }
        const clearBtn = target.closest('#btn-clear-log, .btn-clear-log');
        if (clearBtn) {
          e.preventDefault();
          e.stopPropagation();
          this._clearHistory();
          return;
        }
        const closeExportBtn = target.closest('#history-export-close');
        if (closeExportBtn) {
          e.preventDefault();
          this._closeHistoryExportModal();
          return;
        }
        const printPdfBtn = target.closest('#btn-do-print-pdf');
        if (printPdfBtn) {
          e.preventDefault();
          this._exportHistoryPrintPdf();
          return;
        }
        const txtBtn = target.closest('#btn-do-download-txt');
        if (txtBtn) {
          e.preventDefault();
          this._exportHistoryText();
          return;
        }
        const jsonBtn = target.closest('#btn-do-download-json');
        if (jsonBtn) {
          e.preventDefault();
          this._exportForensicTimeline();
          return;
        }
      });
    }
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
    this.shadowRoot?.querySelectorAll('.wx-webgl').forEach(canvas => canvas._argusWebglStop?.());
  }

  _startClock() {
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => {
      const now = new Date();
      if (this._dashboard) {
        const heroClock = this.shadowRoot.getElementById('hero-clock-time');
        if (heroClock) {
          const tStr = this._formatTime(now);
          if (heroClock.textContent !== tStr) heroClock.textContent = tStr;
        }
        const conClock = this.shadowRoot.querySelector('.console-hud-time');
        if (conClock) {
          const tStr = this._formatTime(now);
          if (conClock.textContent !== tStr) conClock.textContent = tStr;
        }
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
      const btn = this.shadowRoot.getElementById('btn-refresh-history');
      if (btn) btn.style.opacity = '0.5';
      const entryId = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
      await this._loadActivityTimeline(entryId);
      this._renderActivityLog();
      if (btn) {
        btn.style.opacity = '1';
        btn.textContent = '✓ ' + (this._t('history_refresh') || 'Actualizado');
        setTimeout(() => {
          if (btn) btn.textContent = '🔄 ' + (this._t('history_refresh') || 'Actualizar').replace(/^🔄\s*/, '');
        }, 1500);
      }
    });
    this.shadowRoot.getElementById('btn-export-forensic')?.addEventListener('click', () => this._openHistoryExportModal());
    this.shadowRoot.getElementById('history-export-close')?.addEventListener('click', () => this._closeHistoryExportModal());
    this.shadowRoot.getElementById('history-export-modal')?.addEventListener('click', (e) => {
      if (e.target && (e.target as HTMLElement).id === 'history-export-modal') this._closeHistoryExportModal();
    });
    this.shadowRoot.getElementById('btn-do-print-pdf')?.addEventListener('click', () => this._exportHistoryPrintPdf());
    this.shadowRoot.getElementById('btn-do-download-txt')?.addEventListener('click', () => this._exportHistoryText());
    this.shadowRoot.getElementById('btn-do-download-json')?.addEventListener('click', () => this._exportForensicTimeline());
    this.shadowRoot.getElementById('btn-export-config')?.addEventListener('click', () => this._exportConfig());
    this.shadowRoot.getElementById('btn-import-trigger')?.addEventListener('click', () => this.shadowRoot.getElementById('import-config-file').click());
    this.shadowRoot.getElementById('import-config-file')?.addEventListener('change', (ev) => this._importConfig(ev));
    this.shadowRoot.getElementById('btn-reset-config')?.addEventListener('click', () => this._resetConfig());
    this.shadowRoot.getElementById('btn-undo-reset')?.addEventListener('click', () => this._undoResetConfig());

    this.shadowRoot.getElementById('btn-save-personalization-standalone')?.addEventListener('click', () => this._savePersonalization());
    // Toggle header logic moved to _localize to prevent duplicate bindings
    this.shadowRoot.getElementById('btn-select-sos-outputs')?.addEventListener('click', () => this._openModal('panic'));

    this._configureEmergencyCall();
  }

  _openHistoryExportModal() {
    const m = this.shadowRoot.getElementById('history-export-modal');
    if (!m) return;
    const now = new Date();
    const fromDate = new Date();
    fromDate.setDate(now.getDate() - 30);
    const fromInput = this.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null;
    const toInput = this.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null;
    if (fromInput && !fromInput.value) fromInput.value = fromDate.toISOString().split('T')[0];
    if (toInput && !toInput.value) toInput.value = now.toISOString().split('T')[0];
    m.classList.add('open');
    m.setAttribute('aria-hidden', 'false');
  }

  _closeHistoryExportModal() {
    const m = this.shadowRoot.getElementById('history-export-modal');
    if (m) {
      m.classList.remove('open');
      m.setAttribute('aria-hidden', 'true');
    }
  }

  _getFilteredHistory() {
    const events = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length
      ? this._forensicTimeline
      : (Array.isArray(this._ui?.audit_log) ? this._ui.audit_log : []);

    const fromInput = this.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null;
    const toInput = this.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null;
    const fromVal = fromInput?.value ? new Date(fromInput.value + 'T00:00:00') : null;
    const toVal = toInput?.value ? new Date(toInput.value + 'T23:59:59') : null;

    return events.filter(ev => {
      if (!ev || typeof ev !== 'object') return false;
      if (!ev.ts) return true;
      const t = new Date(ev.ts);
      if (fromVal && t < fromVal) return false;
      if (toVal && t > toVal) return false;
      return true;
    });
  }

  _exportHistoryPrintPdf() {
    this._closeHistoryExportModal();
    const list = this._getFilteredHistory();
    const homeName = this._homeName || 'Argus Home Hub';
    const nowStr = new Date().toLocaleString(this._getLocale());
    const fromInput = (this.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null)?.value || 'Inicio';
    const toInput = (this.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null)?.value || 'Hoy';

    const rowsHtml = list.map((ev, idx) => {
      const date = ev.ts ? new Date(ev.ts) : null;
      const ts = date && !isNaN(date.getTime()) ? date.toLocaleString(this._getLocale()) : '—';
      const action = String(ev.action || '');
      const detail = this._localizeActivityDetail(action, ev.detail);
      const user = ev.user || ev.actor || 'Argus';
      return `
        <tr style="border-bottom: 1px solid #e2e8f0; font-size: 11px;">
          <td style="padding: 6px 8px; color: #64748b; font-family: monospace;">${idx + 1}</td>
          <td style="padding: 6px 8px; white-space: nowrap; font-weight: 600;">${this._escapeHtml(ts)}</td>
          <td style="padding: 6px 8px; font-weight: 700; color: #0284c7;">${this._escapeHtml(action)}</td>
          <td style="padding: 6px 8px;">${this._escapeHtml(detail)}</td>
          <td style="padding: 6px 8px; font-weight: 600;">${this._escapeHtml(user)}</td>
        </tr>
      `;
    }).join('');

    const htmlContent = `
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
            <img src="/api/argus_static/argus_logo.png" alt="Argus Logo" onerror="this.style.display='none'">
            <div>
              <h1 class="title">Argus Home Hub</h1>
              <div class="subtitle">🏡 ${this._escapeHtml(homeName)} · Registro de Actividad y Seguridad</div>
            </div>
          </div>
          <div class="meta">
            <div><strong>Rango:</strong> ${this._escapeHtml(fromInput)} al ${this._escapeHtml(toInput)}</div>
            <div><strong>Generado:</strong> ${this._escapeHtml(nowStr)}</div>
            <div><strong>Total Eventos:</strong> ${list.length}</div>
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
            ${rowsHtml || '<tr><td colspan="5" style="text-align:center;padding:24px;color:#888;">No hay registros en el rango seleccionado</td></tr>'}
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
        </script>
      </body>
      </html>
    `;

    const printWin = window.open('', '_blank', 'width=900,height=700');
    if (printWin) {
      printWin.document.open();
      printWin.document.write(htmlContent);
      printWin.document.close();
    }
  }

  _exportHistoryText() {
    this._closeHistoryExportModal();
    const list = this._getFilteredHistory();
    const homeName = this._homeName || 'Argus Home Hub';
    const nowStr = new Date().toLocaleString(this._getLocale());
    const fromInput = (this.shadowRoot.getElementById('export-history-from') as HTMLInputElement | null)?.value || 'Inicio';
    const toInput = (this.shadowRoot.getElementById('export-history-to') as HTMLInputElement | null)?.value || 'Hoy';

    let content = `================================================================================\n`;
    content += `🛡️  ARGUS HOME HUB - HISTORIAL DE ACTIVIDAD\n`;
    content += `🏡  ${homeName}\n`;
    content += `📅  Rango: ${fromInput} al ${toInput}\n`;
    content += `⏰  Generado: ${nowStr}\n`;
    content += `📊  Total eventos: ${list.length}\n`;
    content += `================================================================================\n\n`;

    list.forEach((ev, idx) => {
      const date = ev.ts ? new Date(ev.ts) : null;
      const ts = date && !isNaN(date.getTime()) ? date.toLocaleString(this._getLocale()) : '—';
      const action = String(ev.action || '');
      const detail = this._localizeActivityDetail(action, ev.detail);
      const user = ev.user || ev.actor || 'Argus';
      content += `[${String(idx + 1).padStart(3, '0')}] ${ts} | [${action}] ${detail} | 👤 ${user}\n`;
    });

    content += `\n================================================================================\n`;
    content += `Argus Home Hub - Fin del reporte\n`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `argus_historial_${new Date().toISOString().slice(0, 10)}.txt`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  async _clearHistory() {
    const hasMasterPin = this._dashboard?.entries?.[0]?.pin_configured === true;
    const currentUser = this._activeProfile?.name || this._hass?.user?.name || 'Administrador';
    const entryId = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;

    const executeClear = async () => {
      try {
        await this._send('argus/clear_audit_log', {
          ...(entryId ? { entry_id: entryId } : {}),
          user_name: currentUser
        });
        await this._loadActivityTimeline(entryId);
        this._renderActivityLog();
        return true;
      } catch (err: any) {
        alert(this._format('generic_error', { error: err.message }));
        return false;
      }
    };

    if (hasMasterPin) {
      this._showPinModal(async (pin) => {
        try {
          const res = await this._send('argus/validate_master_pin', {
            pin,
            ...(entryId ? { entry_id: entryId } : {})
          });
          if (res && res.valid === false) {
            throw new Error(this._t('pin_invalid') || 'PIN incorrecto');
          }
        } catch (e: any) {
          throw new Error(this._t('pin_invalid') || 'PIN incorrecto');
        }
        return await executeClear();
      });
    } else {
      if (!confirm(this._t('clear_history_confirm') || '¿Eliminar todo el historial de actividad?')) return;
      await executeClear();
    }
  }

  async _loadActivityTimeline(entryId = null) {
    if (!this._ui) return;
    try {
      const eid = entryId || this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
      const payload: any = { limit: 100 };
      if (eid) payload.entry_id = eid;
      const response = await this._send('argus/get_forensic_timeline', payload);
      const timeline = Array.isArray(response?.timeline)
        ? response.timeline.filter(entry => entry && typeof entry === 'object' && !Array.isArray(entry))
        : [];
      this._forensicTimeline = timeline;
      this._activityTimelineError = null;
      this._ui.audit_log = timeline;
      this._renderActivityLog();
    } catch (err: any) {
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
    this._closeHistoryExportModal();
    const events = Array.isArray(this._forensicTimeline) && this._forensicTimeline.length ? this._forensicTimeline : (this._ui?.audit_log || []);
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
    s('selector-clear').addEventListener('click', () => { this._selected = []; this._renderSelector(true); });
    s('selector-search').addEventListener('input', () => {
      clearTimeout(this._searchDebounce);
      this._searchDebounce = setTimeout(() => this._renderSelector(true), 120);
    });
    s('selector-modal').addEventListener('click', e => { if (e.target.id === 'selector-modal') this._closeModal(); });
    s('selector-select-all').addEventListener('click', () => this._selectAll());
    s('selector-deselect-all').addEventListener('click', () => { this._selected = []; this._renderSelector(true); });

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
          chevron.textContent = isCollapsed ? '▼' : '▲';
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
    this.shadowRoot.querySelector('.wrap')?.classList.remove('wrap-ready');
    let bootstrap;
    try { bootstrap = await this._send('argus/login_bootstrap'); }
    catch (e) { console.error('Argus bootstrap load failed:', e); return; }

    this._bootstrap = bootstrap;
    
    const userTheme = bootstrap.user_theme || { background_mode: "default", background_file: "" };
    this._currentUserTheme = userTheme;
    
    if (userTheme.background_mode !== "default" && userTheme.background_file) {
      this._backgroundMode = userTheme.background_mode;
      this._panelBgFile = userTheme.background_file;
      this._backgroundImages = [userTheme.background_file];
    } else if (userTheme.background_mode !== "default" && userTheme.background_mode) {
      this._backgroundMode = userTheme.background_mode;
      this._panelBgFile = '';
      this._backgroundImages = [];
    } else {
      this._backgroundMode = bootstrap.background_mode || 'none';
      this._panelBgFile = '';
      this._backgroundImages = bootstrap.background_images || [];
    }
    if (bootstrap.weather_source) this._weatherSource = bootstrap.weather_source;
    if (bootstrap.temperature_source) this._temperatureSource = bootstrap.temperature_source;
    try {
      const stored = localStorage.getItem('argus_lang');
      if (stored && stored !== 'auto') {
        this._manualLang = stored;
      } else if (bootstrap.language && bootstrap.language !== 'auto') {
        this._manualLang = bootstrap.language;
      } else {
        this._manualLang = null;
      }
    } catch(e) {}
    
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

    const isCardMode = this.hasAttribute('compact') || this.classList.contains('argus-compact') || Boolean(this._cardConfig?.compact);
    if (!bootstrap.has_active_session || !this._profileSelectedThisMount) {
      if (isCardMode) {
        this._profileSelectedThisMount = true;
        const ownUser = (bootstrap.users || []).find(u => u.is_own_profile) || (bootstrap.users || [])[0];
        if (ownUser && !bootstrap.has_active_session) {
          try { await this._send('argus/select_profile', { argus_user_id: ownUser.id }); } catch (_) {}
        }
      } else {
        this._loadState = 'profile_selection';
        this._renderLoginScreen(bootstrap);
        return;
      }
    }

    // Always nuke any leftover login/profile overlays before showing dashboard,
    // but NEVER destroy the welcome screen since it might be mid-animation.
    this.shadowRoot.querySelectorAll('.argus-profile-overlay, .argus-pin-prompt').forEach(el => el.remove());

    // Now we have a session, load dashboard
    let dashboard;
    try { 
      dashboard = await this._send('argus/dashboard'); 
    } catch (e) {
      if (isCardMode) {
        const entityId = this._config?.entity || 'alarm_control_panel.argus';
        const entityState = this._hass?.states[entityId];
        dashboard = {
          entries: [{
            entity_id: entityId,
            name: entityState?.attributes?.friendly_name || 'Argus Security',
            state: entityState?.state || 'unavailable',
            pin_configured: true
          }]
        };
      } else {
        if (e.message.includes('permission') || e.message.includes('session') || e.message.includes('unauthorized')) {
          this._renderLoginScreen(bootstrap);
          return;
        }
        console.error('Argus dashboard load failed:', e);
        return;
      }
    }

    if (isCardMode && dashboard?.entries?.length) {
      const entityId = this._config?.entity || 'alarm_control_panel.argus';
      let targetEntry = dashboard.entries.find(e => e.entity_id === entityId);
      if (!targetEntry) {
        targetEntry = dashboard.entries[0];
      }
      dashboard.entries = [targetEntry];
    }

    this._dashboard = dashboard;
    this._available = dashboard.available_entities || [];
    this._ui = dashboard.ui || { modes: {}, dashboard: {} };
    this._notifTargets = dashboard.ui?.notif_targets || [];
    this._users = Array.isArray(dashboard.ui?.users)
      ? dashboard.ui.users.filter(user => user && typeof user === 'object' && !Array.isArray(user))
      : [];
    this._homeName = dashboard.ui?.home_name || '';
    this._emergencyNumber = dashboard.ui?.emergency_number || '911';
    this._loadState = 'dashboard';
    this.shadowRoot.querySelector('.wrap')?.classList.add('wrap-ready');
    this._currentProfile = dashboard.current_profile || null;
    const bootstrapOverlay = this.shadowRoot.getElementById('bootstrap-overlay');
    if (bootstrapOverlay) {
      if (this._currentProfile && !this._welcomeShownThisMount) {
        bootstrapOverlay.style.display = 'flex';
      } else {
        bootstrapOverlay.style.display = 'none';
      }
    }
    await this._loadActivityTimeline(dashboard.entry_id);
    this._panicOutputs = dashboard.ui?.panic_outputs || [];
    const myProfile = this._users.find(u => u.id === this._currentProfile?.id) || {};
    this._backgroundMode = myProfile.background_mode || dashboard.ui?.background_mode || 'weather';
    this._backgroundImages = myProfile.background_images || dashboard.ui?.background_images || [];
    this._temperatureSource = dashboard.ui?.temperature_source || 'auto';
    this._weatherSource = dashboard.ui?.weather_source || 'auto';
    this._clockFormat = dashboard.ui?.clock_format || 'auto';
    this._panelBgFile = myProfile.panel_bg_file !== undefined ? myProfile.panel_bg_file : (dashboard.ui?.panel_bg_file || '');
    this._panelBgSound = Boolean(myProfile.panel_bg_sound !== undefined ? myProfile.panel_bg_sound : dashboard.ui?.panel_bg_sound);
    const rawHubBgMode = myProfile.hub_bg_mode || dashboard.ui?.hub_bg_mode || 'none';
    this._hubBgMode = (rawHubBgMode === 'none' || rawHubBgMode === 'default') ? 'default' : rawHubBgMode;
    this._hubBgFile = myProfile.hub_bg_file !== undefined ? myProfile.hub_bg_file : (dashboard.ui?.hub_bg_file || '');
    this._hubBgSound = Boolean(myProfile.hub_bg_sound !== undefined ? myProfile.hub_bg_sound : dashboard.ui?.hub_bg_sound);
    this._updateTheme();
    this._updateHomeNameDisplay();
    this._updateProfileBadge();
    

    this._populateTemperatureSources();
    const tempSel = this.shadowRoot.getElementById('temp-source-select-standalone');
    if (tempSel) {
      tempSel.value = this._temperatureSource || 'auto';
      if (!tempSel.dataset.bound) { tempSel.dataset.bound = '1'; tempSel.addEventListener('change', () => this._savePersonalization()); }
    }
    this._populateWeatherSources();
    const weatherSel = this.shadowRoot.getElementById('weather-source-select');
    if (weatherSel) {
      weatherSel.value = this._weatherSource || 'auto';
      if (!weatherSel.dataset.bound) { weatherSel.dataset.bound = '1'; weatherSel.addEventListener('change', () => this._savePersonalization()); }
    }
    // Load & bind clock format selector
    const clockSel = this.shadowRoot.getElementById('argus-clock-format-select');
    if (clockSel) {
      this._clockFormat = this._ui?.clock_format || this._dashboard?.clock_format || 'auto';
      clockSel.value = this._clockFormat;
      if (!clockSel.dataset.bound) { clockSel.dataset.bound = '1'; clockSel.addEventListener('change', () => this._savePersonalization()); }
    }
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
        <option value="weather">Clima animado</option>
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
    this._refreshLocalizedUi();

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

  // Read only values that Home Assistant exposes. In particular, do not use a
  // lightning icon or assume 100% just because an entity has no battery sensor.
  _getDevicePower(sensorId: string, sensorState: any) {
    if (!sensorId) return { battery: null, mains: false };
    const attributes = sensorState?.attributes || {};
    
    // 1. Direct sensor battery attributes
    const direct = [attributes.battery_level, attributes.battery, attributes.battery_percentage]
      .find(value => value !== undefined && value !== null && value !== '' && Number.isFinite(Number(value)));
    let battery = direct === undefined ? null : Math.max(0, Math.min(100, Math.round(Number(direct))));

    const source = String(attributes.power_source || attributes.power_supply || attributes.power_type || '').toLowerCase();
    const mains = attributes.mains_powered === true || attributes.is_mains_powered === true || attributes.wired === true ||
      /(?:mains|ac|wired|line|external|toma|corriente)/.test(source);

    const domain = sensorId.split('.')[0];
    if (['switch', 'light', 'fan', 'script', 'input_boolean', 'siren'].includes(domain) && battery === null) {
      return { battery: null, mains: true };
    }

    // 2. Companion battery entity lookup (if no direct attribute)
    if (battery === null && this._hass?.states) {
      let companionState: any = null;
      const objectId = sensorId.split('.').slice(1).join('.').toLowerCase();
      const base = objectId.replace(/_(contact|door|window|motion|occupancy|opening|sensor|iaszone|ias_zone)$/i, '');

      const directCandidates = [
        `sensor.${objectId}_battery`,
        `sensor.${base}_battery`,
        `sensor.${objectId}_battery_level`,
        `sensor.${base}_battery_level`,
        `sensor.${objectId}_battery_percentage`,
        `sensor.${base}_battery_percentage`,
      ];

      for (const cand of directCandidates) {
        const st = this._hass.states[cand];
        if (st && st.state !== 'unavailable' && st.state !== 'unknown' && Number.isFinite(Number(st.state))) {
          companionState = st.state;
          break;
        }
      }

      if (companionState === null) {
        const avEntity = (this._available || []).find((e: any) => e.entity_id === sensorId);
        if (avEntity && avEntity.device_id) {
           const companion = (this._available || []).find((e: any) => 
             e.device_id === avEntity.device_id &&
             e.entity_id !== sensorId &&
             (this._hass?.states?.[e.entity_id]?.attributes?.device_class === 'battery' || /_battery(?:_level|_percent(?:age)?)?$/i.test(e.entity_id))
           );
           if (companion) {
             const st = this._hass?.states?.[companion.entity_id];
             if (st && st.state !== 'unavailable' && st.state !== 'unknown' && Number.isFinite(Number(st.state))) {
               companionState = st.state;
             }
           }
        }
      }

      if (companionState !== null) {
        const level = Number(companionState);
        if (Number.isFinite(level)) battery = Math.max(0, Math.min(100, Math.round(level)));
      }
    }
    return { battery, mains };
  }

  _deviceFacts(entityId: string, stateObj: any, includeStatus = true) {
    const raw = stateObj?.state || 'unknown';
    const isOpen = ['on', 'unlocked', 'open', 'recording', 'active', 'motion'].includes(raw);
    const labels: Record<string, string> = { on:this._t('status_open'), off:this._t('status_closed'), locked:this._t('status_closed'), unlocked:this._t('status_open'), idle:this._t('status_idle'), recording:this._t('status_recording'), home:this._t('status_home'), not_home:this._t('status_away') };
    const domain = entityId.split('.')[0];
    const isActuator = ['siren', 'switch', 'light', 'fan', 'input_boolean', 'script', 'alarm_control_panel'].includes(domain);
    const power = this._getDevicePower(entityId, stateObj);
    const facts = [];
    if (includeStatus) facts.push({ text: isActuator ? raw.toUpperCase() : (labels[raw] || raw), className: isActuator ? '' : (isOpen ? 'status-open' : 'status-closed') });
    if (power.mains) facts.push({ text: '🔌 AC', className: 'power-mains' });
    if (power.battery !== null) {
      const isDead = power.battery === 0;
      const isLow = power.battery <= 20 && !isDead;
      const batText = isDead ? '🔋 ❌' : `🔋 ${power.battery}%`;
      const cls = isDead ? 'dead' : (isLow ? 'low' : '');
      facts.push({ text: batText, className: `pill-power ${cls}` });
    }
    return facts;
  }

  _renderBatteryAlerts(sensors?: string[]) {
    if (!this._hass?.states) return '';
    let sensorsToCheck: string[] = Array.isArray(sensors) && sensors.length ? sensors : [];
    if (!sensorsToCheck.length) {
      const modes = this._ui?.modes || {};
      const all = new Set<string>();
      ['away', 'home', 'night', 'vacation'].forEach(m => {
        const list = modes[m]?.sensors;
        if (Array.isArray(list)) list.forEach((s: string) => all.add(s));
      });
      if (this._ui?.modes?.__by_entity__) {
        Object.values(this._ui.modes.__by_entity__).forEach((mObj: any) => {
          ['away', 'home', 'night', 'vacation'].forEach(m => {
            const list = mObj[m]?.sensors;
            if (Array.isArray(list)) list.forEach((s: string) => all.add(s));
          });
        });
      }
      sensorsToCheck = Array.from(all);
    }
    if (!sensorsToCheck.length) return '';

    const lowBatteries: { name: string; level: number }[] = [];
    sensorsToCheck.forEach(sid => {
      const st = this._hass?.states[sid];
      if (!st) return;
      const power = this._getDevicePower(sid, st);
      if (power.battery !== null && Number.isFinite(power.battery) && power.battery <= 20 && !power.mains) {
        const name = st.attributes?.friendly_name || sid.split('.')[1] || sid;
        lowBatteries.push({ name, level: power.battery });
      }
    });

    if (!lowBatteries.length) return '';
    const t = (k: string) => this._t(k);
    const rows = lowBatteries.map(b => `<div class="battery-alert-pill" style="display:inline-flex; align-items:center; gap:6px; background:rgba(239,68,68,0.25); border:1px solid rgba(239,68,68,0.5); color:#fee2e2; padding:4px 12px; border-radius:999px; font-size:11px; font-weight:600; backdrop-filter:blur(12px); box-shadow:0 4px 12px rgba(0,0,0,0.3)">⚠️ ${t('battery_low')}: ${this._escapeHtml(b.name)} (${b.level}%)</div>`).join('');
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

  _renderPremiumStatusIcon(state, triggered, uid = '0') {
    const mode = triggered ? 'triggered' : ({ armed_home:'home', armed_away:'away', armed_night:'night', armed_vacation:'vacation', disarmed:'disarm' }[state] || 'disarm');
    const accent = { home:'#ffb700', away:'#ff3344', night:'#3898ff', vacation:'#d69cff', disarm:'#00ff8c', triggered:'#ff1744' }[mode];
    const glowColor = { home:'rgba(255,183,0,0.65)', away:'rgba(255,51,68,0.7)', night:'rgba(56,152,255,0.65)', vacation:'rgba(214,156,255,0.65)', disarm:'rgba(0,255,140,0.65)', triggered:'rgba(255,23,68,0.85)' }[mode];
    const symbol = {
      home:'<path d="M66 98 100 69l34 29v35H66z"/><path d="M89 133v-22h22v22"/>',
      away:'<path d="M100 70c18 0 32 14 32 32s-14 32-32 32-32-14-32-32 14-32 32-32z"/><path d="M100 79v46M77 102h46"/>',
      night:'<path d="M120 70a34 34 0 1 0 13 63 38 38 0 1 1-13-63z"/><circle cx="134" cy="73" r="3"/>',
      vacation:'<path d="m67 113 66-34-28 66-9-25z"/><path d="m96 120 15 15M96 120l-20-6"/>',
      disarm:'<path d="m76 104 16 16 34-39"/>',
      triggered:'<path d="M100 65 139 137H61z"/><path d="M100 90v23M100 124h.01"/>'
    }[mode];
    return `<svg viewBox="0 0 200 200" width="100%" height="100%" style="filter:drop-shadow(0 0 35px ${glowColor}) drop-shadow(0 0 70px ${glowColor}) drop-shadow(0 20px 40px rgba(0,0,0,.7));max-width:180px;margin:auto;display:block;overflow:visible" aria-label="${this._escapeHtml(mode)}"><defs><linearGradient id="premium-${mode}-${uid}" x1="20%" y1="5%" x2="85%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".85"/><stop offset=".18" stop-color="${accent}" stop-opacity=".98"/><stop offset=".65" stop-color="${accent}" stop-opacity=".4"/><stop offset="1" stop-color="#01040a" stop-opacity=".85"/></linearGradient><linearGradient id="shield-inner-${mode}-${uid}" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="#ffffff" stop-opacity=".3"/><stop offset=".35" stop-color="${accent}" stop-opacity=".15"/><stop offset="1" stop-color="transparent"/></linearGradient><filter id="premium-glow-${mode}-${uid}" filterUnits="userSpaceOnUse" x="-80" y="-80" width="360" height="360" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="5.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z" fill="url(#premium-${mode}-${uid})" stroke="${accent}" stroke-width="3.5" filter="url(#premium-glow-${mode}-${uid})"/><path d="M100 28 152 50v38c0 38-21 62-52 79-31-17-52-41-52-79V50z" fill="url(#shield-inner-${mode}-${uid})"/><path d="M100 31 148 51" stroke="#fff" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="105" r="43" fill="rgba(2,6,14,.55)" stroke="rgba(255,255,255,.35)" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#premium-glow-${mode}-${uid})">${symbol}</g><circle cx="100" cy="105" r="55" fill="none" stroke="${accent}" stroke-opacity=".65" stroke-width="2.5"><animate attributeName="r" values="50;62;50" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".8;.08;.8" dur="3.2s" repeatCount="indefinite"/></circle></svg>`;
  }

  _getIntelligentSVG(state, w, isNight, triggered, idx = '0') {
    return this._renderPremiumStatusIcon(state, triggered, idx);
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

    // Global status is rendered inside the console-hud in each entry
    if (globalStatusEl) globalStatusEl.innerHTML = '';

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

    // Time — use _formatTime so clock_format setting (12h/24h/auto) is respected
    const now = new Date();
    const timeStr = this._formatTime(now);
    const heroClock = this.shadowRoot.getElementById('hero-clock-time');
    const heroDate = this.shadowRoot.getElementById('hero-clock-date');
    const heroWeather = this.shadowRoot.getElementById('hero-weather-pill');
    const heroSecurity = this.shadowRoot.getElementById('hero-security-pill');
    const isArmed = entries.some(e => {
      const s = this._hass?.states[e.entity_id]?.state || e.state;
      return String(s).startsWith('armed') || s === 'triggered' || s === 'pending';
    });
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
      const isWaiting = Boolean(this._hass?.states?.[e.entity_id]?.attributes?.arming_waiting_for_sensors);
      const blockingSensors = Array.isArray(this._hass?.states?.[e.entity_id]?.attributes?.arming_blocking_sensors) ? this._hass?.states?.[e.entity_id]?.attributes?.arming_blocking_sensors : [];
      const hasOpenSensor = activeSensors.some(sid => OPEN.includes(this._hass?.states?.[sid]?.state));
      const sensorAlert = hasOpenSensor && (state.startsWith('armed') || state === 'pending' || isWaiting) && !triggered;

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
          iconHtml = isOpen ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V2h12v20H4z"></path><path d="M16 4h4v18H4z"></path><circle cx="12" cy="12" r="1"></circle></svg>`
                            : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V2h12v20H6z"></path><circle cx="14" cy="12" r="1"></circle></svg>`;
        }
        const power = this._getDevicePower(sid, sensor);
        let batHtml = '';
        if (power.battery !== null) {
          const isDead = power.battery === 0;
          const isLow = power.battery <= 10 && !isDead;
          const batText = isDead ? '🔋 ❌' : `🔋 ${power.battery}%`;
          if (isDead || isLow) {
             batHtml = `<span style="margin-left:8px;font-size:10px;font-weight:700;color:#ff5252;background:rgba(255,255,255,0.1);backdrop-filter:blur(4px);padding:2px 6px;border-radius:10px;border:1px solid rgba(255,82,82,0.3);text-shadow:0 0 5px rgba(255,82,82,0.5);">${batText}</span>`;
          }
        }

        const isBlocking = isWaiting && blockingSensors.includes(sid);
        return `<div class="console-sensor ${isOpen ? 'open' : ''}"><span class="console-sensor-icon" style="display:flex;align-items:center;justify-content:center;color:${isBlocking?'#ffd700':(isOpen?'#ff968b':'#75f4b0')};${isBlocking?'animation:pulse 1s infinite;':(isOpen?'animation:pulse 2s infinite;':'')}">${iconHtml}</span><span class="console-sensor-name" style="${isBlocking?'color:#ffd700':''}">${this._escapeHtml(name)}</span><span class="console-sensor-state" style="color:${isBlocking?'#ffd700':(isOpen?'#ff968b':'#75f4b0')}">${this._escapeHtml(isOpen ? t('status_open') : t('status_closed'))}${batHtml}</span></div>`;
      }).join('');

      art.innerHTML = `
          ${this._renderEntryBackground(weatherState, isNight)}
          ${this._kioskLocked ? `<button class="btn-unlock-kiosk" data-action="unlock-kiosk" style="position:absolute;top:16px;right:16px;z-index:99;padding:8px 14px;background:rgba(220,38,38,0.85);color:white;border:none;border-radius:10px;font-weight:600;font-size:13px;cursor:pointer;backdrop-filter:blur(8px);box-shadow:0 4px 12px rgba(0,0,0,0.4)">🔓 ${this._escapeHtml(t('unlock_kiosk') || 'Desbloquear kiosco')}</button>` : ''}
          ${isFS ? `<button class="ghost entry-exit-fs" data-exit-fullscreen title="${this._escapeHtml(t('fullscreen_title'))}" aria-label="${this._escapeHtml(t('fullscreen_title'))}" style="position:absolute;top:24px;left:24px;z-index:120;padding:9px 13px;font-size:18px;background:rgba(0,0,0,.55);backdrop-filter:blur(12px);border-radius:14px;color:white;border:1px solid rgba(255,255,255,.25);box-shadow:0 8px 20px rgba(0,0,0,.3)">×</button>` : ''}
          ${!isFS ? `<button class="ghost fs-btn entry-fs" data-fullscreen="${idx}" title="${this._escapeHtml(t('fullscreen_title'))}" style="position:absolute;bottom:24px;right:24px;z-index:10;padding:10px 15px;font-size:18px;background:rgba(0,0,0,0.4);backdrop-filter:blur(12px);border-radius:14px;opacity:0.8;color:white;border:1px solid rgba(255,255,255,0.2);box-shadow:0 8px 20px rgba(0,0,0,0.3)">⛶</button>` : ''}
          ${this._renderBatteryAlerts(activeSensors)}
          <div class="hud">
            <div class="hud-loc">${this._escapeHtml(fullHudLoc)}</div>
            <div class="hud-data"></div>
          </div>
          <div class="entry-content security-console">
            <!-- Symmetrical HUD bar at top of console -->
            <div class="console-hud">
              <span class="console-hud-loc">🏡 ${this._escapeHtml(fullHudLoc)}</span>
              <div class="argus-connection-pill" data-online="true"><i class="argus-connection-dot"></i><span class="argus-connection-label">${this._escapeHtml(t('connected') || 'CONECTADO')}</span></div>
              <div class="console-hud-right">
                <span class="console-system-badge console-system-badge--${triggered ? 'triggered' : state}">${this._escapeHtml(
                  triggered ? (t('system_triggered') || 'ALARMA ACTIVADA') :
                  isWaiting  ? (t('waiting_sensors') || 'ESPERANDO SENSORES') :
                  state === 'disarmed'        ? t('system_disarmed') :
                  state === 'armed_home'      ? (t('system_armed') + ' · ' + (t('mode_home')     || 'CASA'))   :
                  state === 'armed_away'      ? (t('system_armed') + ' · ' + (t('mode_away')     || 'AUSENTE')): 
                  state === 'armed_night'     ? (t('system_armed') + ' · ' + (t('mode_night')    || 'NOCHE'))  :
                  state === 'armed_vacation'  ? (t('system_armed') + ' · ' + (t('mode_vacation') || 'VACACIONES')) :
                  t('system_armed')
                )}</span>
              </div>
            </div>
            <div class="entry-icon" style="display:flex;justify-content:center;animation:float-icon 5s ease-in-out infinite;">
              ${this._getIntelligentSVG(isWaiting ? 'pending' : state, null, isNight, triggered, idx)}
            </div>
            <div class="liquid-stack">
              <button class="liquid-btn btn-home ${state==='armed_home'?'active':''} ${sensorAlert && state==='armed_home'?'buzz-orange':''}" data-idx="${idx}" data-action="home">${this._modeButtonIcon('home')}<span>${this._escapeHtml(modeLabel('btn_home'))}</span></button>
              <button class="liquid-btn btn-away ${state==='armed_away'?'active':''} ${sensorAlert && state==='armed_away'?'buzz-orange':''}" data-idx="${idx}" data-action="away">${this._modeButtonIcon('away')}<span>${this._escapeHtml(modeLabel('btn_away'))}</span></button>
              <button class="liquid-btn btn-night ${state==='armed_night'?'active':''} ${sensorAlert && state==='armed_night'?'buzz-orange':''}" data-idx="${idx}" data-action="night">${this._modeButtonIcon('night')}<span>${this._escapeHtml(modeLabel('btn_night'))}</span></button>
            </div>
            <div class="console-sensors">${sensorRows || `<div class="console-empty">${this._escapeHtml(sList.length === 0 ? (t('no_sensors_configured') || 'Sin sensores de intrusión configurados.') : (t('all_sensors_bypassed') || 'Todos los sensores configurados están omitidos.'))}</div>`}</div>

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
    el.querySelectorAll('.wx-webgl').forEach(canvas => {
      // Use ResizeObserver for reliable initialization on mobile/tablet
      if (canvas._argusRO) canvas._argusRO.disconnect();
      const initOnce = () => {
        if (canvas._argusWebglInit) return;
        if ((canvas.clientWidth > 0 || canvas.offsetWidth > 0) && canvas.isConnected) {
          canvas._argusWebglInit = true;
          this._initWeatherWebGL(canvas);
        }
      };
      if (typeof ResizeObserver !== 'undefined') {
        canvas._argusRO = new ResizeObserver(() => { initOnce(); canvas._argusRO?.disconnect(); });
        canvas._argusRO.observe(canvas.parentElement || canvas);
      }
      // Fallback chain
      if (canvas.clientWidth > 0) { initOnce(); }
      else {
        requestAnimationFrame(() => {
          if (canvas.clientWidth > 0) { initOnce(); }
          else { setTimeout(() => initOnce(), 200); }
        });
      }
    });
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
      this._renderEntries(true);
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
      const stage = this.shadowRoot.getElementById('argus-fullscreen-stage');
      const entriesContainer = this.shadowRoot.getElementById('entries');
      if (target) {
        target.classList.remove('ios-fullscreen');
        if (entriesContainer && target.parentElement === stage) {
          entriesContainer.appendChild(target);
        }
      }
      this.shadowRoot.querySelectorAll('.entry.ios-fullscreen').forEach(el => {
        el.classList.remove('ios-fullscreen');
        if (entriesContainer && el.parentElement === stage) {
          entriesContainer.appendChild(el);
        }
      });
      if (stage) {
        stage.style.display = 'none';
        stage.replaceChildren();
      }
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
    const fsBtn = target?.querySelector('.entry-fs') || target?.querySelector('[data-fullscreen]');
    const idx = parseInt(fsBtn?.dataset?.fullscreen ?? 0);
    const validIdx = (isNaN(idx) || idx < 0) ? 0 : idx;
    const entry = this._dashboard?.entries?.[validIdx] || this._dashboard?.entries?.[0];

    this._kioskEntryId = entry?.entry_id || null;
    this._kioskTarget = target;
    this._kioskLocked = false;
    this._fullscreenIdx = validIdx;
    this.classList.add('fullscreen-active');

    let stage = this.shadowRoot.getElementById('argus-fullscreen-stage');
    if (!stage) {
      stage = document.createElement('div');
      stage.id = 'argus-fullscreen-stage';
      this.shadowRoot.appendChild(stage);
    }
    stage.style.display = 'block';

    if (target) {
      target.classList.add('ios-fullscreen');
      stage.appendChild(target);
    }
    document.body.style.overflow = 'hidden';

    const requestFS = target?.requestFullscreen || target?.webkitRequestFullscreen || this.requestFullscreen || this.webkitRequestFullscreen;
    if (requestFS) {
      requestFS.call(target || this).catch(() => {});
    }
    this._renderEntries(true);
  }

  _getWeatherGradient(weather, rawKey = '') {
    const map = {
      sunny:          'linear-gradient(160deg, #4da6ff 0%, #89c4ff 60%, #c8e8ff 100%)',
      clear:          'linear-gradient(160deg, #1a1a3e 0%, #2d2d6b 50%, #0f2557 100%)',
      cloudy:         'linear-gradient(160deg, #6b7a8d 0%, #9aa5b1 60%, #c5cdd5 100%)',
      partlycloudy:   'linear-gradient(160deg, #5b8fd4 0%, #7baee8 50%, #a8c8f0 100%)',
      rainy:          'linear-gradient(160deg, #3d4f5c 0%, #5a6e7a 50%, #7a8e96 100%)',
      snowy:          'linear-gradient(160deg, #a8bfcf 0%, #c5d8e8 60%, #e8f0f8 100%)',
      stormy:         'linear-gradient(160deg, #1a1f2e 0%, #2d3244 50%, #3d4255 100%)',
      fog:            'linear-gradient(160deg, #8a9099 0%, #adb5bd 60%, #ced4da 100%)',
    };
    const sKey = String(rawKey || weather.label || '').toLowerCase();
    const key = Object.keys(map).find(k => sKey.includes(k)) 
      || Object.keys(map).find(k => weather.label?.toLowerCase().includes(k)) 
      || 'sunny';
    return map[key];
  }

  _initWeatherWebGL(canvas) {
    if (!canvas || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    // Fallback inmediato mientras WebGL carga
    const parent = canvas.parentElement;
    if (parent) {
      const weatherState = this._getWeatherEntity()?.state;
      const isNight = this._hass?.states?.['sun.sun']?.state === 'below_horizon';
      const key = String(weatherState || 'sunny').toLowerCase().replace(/[\s-]+/g, '_');
      parent.style.background = this._getWeatherGradient(
        this._weatherPresentation(weatherState, isNight),
        key
      );
    }

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false, powerPreference: 'low-power' }) ||
               canvas.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: false, antialias: false, powerPreference: 'low-power' });
    if (!gl) {
      canvas.style.opacity = '0';
      return;
    }
    gl.clearColor(0, 0, 0, 0);

    const vertex = 'attribute vec2 p;varying vec2 uv;void main(){uv=(p+1.0)*.5;gl_Position=vec4(p,0.0,1.0);}';
    const fragment = `precision highp float;varying vec2 uv;uniform float time,rain,snow,fog,storm,wind,temp,night,cloudy;
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
gl_FragColor=vec4(col,alpha);}`;

    const compile = (type, source) => { const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader); return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null; };
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) {
      canvas.style.opacity = '0';
      return;
    }
    const program = gl.createProgram(); gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      canvas.style.opacity = '0';
      return;
    }
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const getUniform = key => gl.getUniformLocation(program, key);
    const position = gl.getAttribLocation(program, 'p');
    const uniformLocs = {
      time: getUniform('time'),
      rain: getUniform('rain'),
      snow: getUniform('snow'),
      fog: getUniform('fog'),
      storm: getUniform('storm'),
      wind: getUniform('wind'),
      temp: getUniform('temp'),
      night: getUniform('night'),
      cloudy: getUniform('cloudy'),
      cloudPositions: getUniform('cloudPositions'),
      cloudSizes: getUniform('cloudSizes'),
      cloudAlphas: getUniform('cloudAlphas')
    };

    const values = {
      rain: Math.max(Number(canvas.dataset.rain||0), Number(canvas.dataset.drizzle||0)*0.4),
      snow: Number(canvas.dataset.snow||0),
      fog: Number(canvas.dataset.fog||0),
      storm: Number(canvas.dataset.storm||0),
      wind: Number(canvas.dataset.wind||0),
      temp: Number(canvas.dataset.temp||20),
      night: Number(canvas.dataset.night||0),
      cloudy: Number(canvas.dataset.cloudy||0)
    };

    const numClouds = 6;
    const cloudsList = Array.from({ length: numClouds }, () => {
      return {
        x: Math.random() * 800,
        y: 50 + Math.random() * 250,
        rx: 120 + Math.random() * 80,
        ry: 45 + Math.random() * 25,
        speed: 0.1 + Math.random() * 0.3,
        alpha: 0.08 + Math.random() * 0.07
      };
    });

    let frame = 0, active = true;
    
    // Force initial size fallback immediately if layout isn't ready
    if (canvas.width === 0 || canvas.height === 0 || canvas.clientWidth === 0 || canvas.clientHeight === 0) {
      const parent = canvas.parentElement;
      if (parent && parent.offsetWidth > 0) {
        canvas.width = Math.floor(parent.offsetWidth * (window.devicePixelRatio || 1)) || 300;
        canvas.height = Math.floor(parent.offsetHeight * (window.devicePixelRatio || 1)) || 200;
      } else {
        canvas.width = 600;
        canvas.height = 400;
      }
    }

    const draw = now => {
      if (!active || !canvas.isConnected) return;
      gl.clear(gl.COLOR_BUFFER_BIT);
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5), width = Math.max(1, Math.round(canvas.clientWidth * ratio)), height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; gl.viewport(0, 0, width, height); }

      if (values.cloudy > 0.0) {
        cloudsList.forEach(c => {
          c.x -= c.speed;
          if (c.x + c.rx < 0) {
            c.x = width + c.rx;
            c.y = 50 + Math.random() * (height - 100);
          }
        });
      }
      const flatPositions = [];
      const flatSizes = [];
      const flatAlphas = [];
      cloudsList.forEach(c => {
        flatPositions.push(c.x / width, c.y / height);
        flatSizes.push(c.rx / width, c.ry / height);
        flatAlphas.push(values.cloudy > 0.0 ? c.alpha : 0.0);
      });

      gl.useProgram(program); gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      if (uniformLocs.time) gl.uniform1f(uniformLocs.time, now);
      if (uniformLocs.rain) gl.uniform1f(uniformLocs.rain, values.rain);
      if (uniformLocs.snow) gl.uniform1f(uniformLocs.snow, values.snow);
      if (uniformLocs.fog) gl.uniform1f(uniformLocs.fog, values.fog);
      if (uniformLocs.storm) gl.uniform1f(uniformLocs.storm, values.storm);
      if (uniformLocs.wind) gl.uniform1f(uniformLocs.wind, values.wind);
      if (uniformLocs.temp) gl.uniform1f(uniformLocs.temp, values.temp);
      if (uniformLocs.night) gl.uniform1f(uniformLocs.night, values.night);
      if (uniformLocs.cloudy) gl.uniform1f(uniformLocs.cloudy, values.cloudy);
      if (uniformLocs.cloudPositions) gl.uniform2fv(uniformLocs.cloudPositions, flatPositions);
      if (uniformLocs.cloudSizes) gl.uniform2fv(uniformLocs.cloudSizes, flatSizes);
      if (uniformLocs.cloudAlphas) gl.uniform1fv(uniformLocs.cloudAlphas, flatAlphas);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
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
    const cloud = has('cloud') || has('overcast');
    
    let base = 'clear';
    if (storm) base = 'storm';
    else if (rain || drizzle) base = 'rain';
    else if (snow) base = 'snow';
    else if (fog) base = 'fog';
    else if (has('partly')) base = 'partlycloudy';
    else if (cloud) base = 'cloudy';
    else if (has('sunny')) base = 'sunny';
    
    const night = isNight ? 'night' : 'day';
    const eclipse = this._eclipseEvent();
    const eclipseClass = eclipse ? `eclipse` : '';
    
    return `<div class="scene ${night} ${base} ${eclipseClass}"></div>`;
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
      'zh-Hant':{title:'健康中心',healthy:'系統健康',warning:'需要注意',critical:'設備離線',devices:'已設定設備',offline:'離線',low:'低電量',battery:'電池',none:'模式中未選擇設備。',local:'本地優先已啟用',confirm:'智慧確認',help:'需要在時間窗口內收到獨立信號。煙霧、燃氣、一氧化碳和安全感應器始終立即觸發。',save:'儲存',saved:'已儲存'},
      ru:{title:'Центр здоровья',healthy:'Система исправна',warning:'Требуется внимание',critical:'Устройства не в сети',devices:'настроенных устройств',offline:'не в сети',low:'низкий заряд',battery:'Батарея',none:'В режимах не выбраны устройства.',local:'Local-first активен',confirm:'Умное подтверждение',help:'Требует независимых сигналов. Дым, газ, CO и безопасность всегда срабатывают сразу.',save:'Сохранить',saved:'Сохранено'},
      hi:{title:'स्वास्थ्य केंद्र',healthy:'सिस्टम स्वस्थ है',warning:'ध्यान आवश्यक है',critical:'डिवाइस ऑफ़लाइन हैं',devices:'कॉन्फ़िगर किए गए डिवाइस',offline:'ऑफ़लाइन',low:'कम बैटरी',battery:'बैटरी',none:'मोड में कोई डिवाइस चयनित नहीं है।',local:'लोकल-फर्स्ट सक्रिय',confirm:'स्मार्ट पुष्टि',help:'समय विंडो के भीतर स्वतंत्र संकेतों की आवश्यकता होती है। धुआं, गैस, CO और सुरक्षा हमेशा तुरंत ट्रिगर होते हैं।',save:'सहेजें',saved:'सहेजा गया'},
      ar:{title:'مركز الصحة',healthy:'النظام سليم',warning:'يتطلب الانتباه',critical:'أجهزة غير متصلة',devices:'الأجهزة المكونة',offline:'غير متصل',low:'بطاريات منخفضة',battery:'البطارية',none:'لم يتم تحديد أي أجهزة في الأوضاع.',local:'الأولوية المحلية نشطة',confirm:'تأكيد ذكي',help:'يتطلب إشارات مستقلة ضمن نافذة زمنية. الدخان والغاز والـ CO والأمان يتم تفعيلها دائماً على الفور.',save:'حفظ',saved:'تم الحفظ'},
      ko:{title:'상태 센터',healthy:'시스템 정상',warning:'주의 필요',critical:'오프라인 장치',devices:'구성된 장치',offline:'오프라인',low:'배터리 부족',battery:'배터리',none:'모드에서 선택된 장치가 없습니다.',local:'로컬 우선 활성',confirm:'스마트 확인',help:'시간 창 내 독립적인 신호가 필요합니다. 연기, 가스, CO 및 안전 센서는 항상 즉시 작동합니다.',save:'저장',saved:'저장됨'},
      ja:{title:'ヘルスセンター',healthy:'システムは正常です',warning:'注意が必要です',critical:'オフラインのデバイス',devices:'設定されたデバイス',offline:'オフライン',low:'バッテリー残量低下',battery:'バッテリー',none:'モードでデバイスが選択されていません。',local:'ローカルファースト有効',confirm:'インテリジェント確認',help:'時間枠内に独立した信号が必要です。煙、ガス、CO、安全センサーは常に即座に作動します。',save:'保存',saved:'保存済み'},
      uk:{title:'Центр здоров’я',healthy:'Система в нормі',warning:'Потрібна увага',critical:'Пристрої не в мережі',devices:'налаштованих пристроїв',offline:'не в мережі',low:'низький заряд',battery:'Батарея',none:'У режимах не вибрано пристроїв.',local:'Local-first активний',confirm:'Розумне підтвердження',help:'Вимагає незалежних сигналів у вікні. Дим, газ, CO та безпека завжди спрацьовують негайно.',save:'Зберегти',saved:'Збережено'}
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
    if (!health) { el.innerHTML = `<div class="small" style="padding:10px">${this._escapeHtml(text.none)}</div>`; return; }
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
      'zh-Hant':{title:'本地狀態排程',all:'每天',weekdays:'週一至週五',weekend:'週末',empty:'沒有排程。Argus 將保留最後確認的狀態。',disarmed:'撤防',home:'在家',away:'外出',night:'夜間',vacation:'度假'},
      ru:{title:'Локальное расписание состояния',all:'Каждый день',weekdays:'Понедельник–пятница',weekend:'Выходные',empty:'Расписания нет. Argus сохранит последнее подтверждённое состояние.',disarmed:'Снято',home:'Дома',away:'Нет дома',night:'Ночь',vacation:'Отпуск'},
      hi:{title:'स्थानीय स्थिति कार्यक्रम',all:'हर दिन',weekdays:'सोमवार से शुक्रवार',weekend:'सप्ताहांत',empty:'कोई शेड्यूल नहीं। आर्गस अंतिम पुष्ट स्थिति को बनाए रखेगा।',disarmed:'निहत्था',home:'घर',away:'बाहर',night:'रात',vacation:'छुट्टी'},
      ar:{title:'جداول الحالة المحلية',all:'كل يوم',weekdays:'من الاثنين إلى الجمعة',weekend:'عطلة نهاية الأسبوع',empty:'لا توجد جداول. سيحتفظ آرجوس بآخر حالة مؤكدة.',disarmed:'غير مسلح',home:'بيت',away:'خارج البيت',night:'ليل',vacation:'إجازة'},
      ko:{title:'로컬 상태 일정',all:'매일',weekdays:'월요일~금요일',weekend:'주말',empty:'일정이 없습니다. Argus는 마지막으로 확인된 상태를 유지합니다.',disarmed:'해제됨',home:'집',away:'외출',night:'야간',vacation:'휴가'},
      ja:{title:'ローカルステータススケジュール',all:'毎日',weekdays:'月曜日〜金曜日',weekend:'週末',empty:'スケジュールはありません。Argusは最後に確認された状態を維持します。',disarmed:'解除',home:'在宅',away:'外出',night:'夜間',vacation:'休暇'},
      uk:{title:'Локальний розклад станів',all:'Щодня',weekdays:'Понеділок–п’ятниця',weekend:'Вихідні',empty:'Розкладу немає. Argus збереже останній підтверджений стан.',disarmed:'Знято з охорони',home:'Вдома',away:'Не вдома',night:'Ніч',vacation:'Відпустка'}
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
    const deleteLabel = {es:'Eliminar horario',en:'Delete schedule',fr:'Supprimer l\u2019horaire',pt:'Excluir horário',it:'Elimina programma',zh:'删除计划','zh-Hant':'刪除排程',ru:'Удалить расписание',hi:'शेड्यूल हटाएं',ar:'حذف الجدول',ko:'일정 삭제',ja:'スケジュールを削除',uk:'Видалити розклад'}[this._getCurrentLangCode()] || 'Delete schedule';
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
        disarmed: this._t('disarmed'),
        armed_home: this._t('mode_home'),
        armed_away: this._t('mode_away'),
        armed_night: this._t('mode_night'),
        armed_vacation: this._t('mode_vacation'),
        triggered: this._t('log_triggered'),
      };
      let foundMode = this._t('disarmed');
      const lower = raw.toLowerCase();
      for (const [k, v] of Object.entries(stateMap)) {
        if (lower.includes(k) || lower.includes(v.toLowerCase())) {
          foundMode = v;
          break;
        }
      }
      return `${this._t('log_action_state_restored')}: ${foundMode}`;
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
    if (action === 'audit_log_cleared') return rawDetail || this._t('log_action_audit_log_cleared') || 'Historial de actividad eliminado';
    if (action.includes('pin_updated') || action.includes('access_pin_updated')) return this._t('update_pin');
    const lowerAction = String(action).toLowerCase();
    const tKey = `log_action_${lowerAction}`;
    const tVal = this._t(tKey);
    if (tVal !== tKey) return tVal;

    // Apply real-time dynamic translation for any hardcoded strings that leak into the history log
    let translatedRaw = raw;
    const dynamicMap = {
      'Administrador de Argus': this._t('role_argus_admin'),
      'Argus Administrator': this._t('role_argus_admin'),
      'Administrateur Argus': this._t('role_argus_admin'),
      'Administrador': this._t('role_argus_admin'),
      'Usuario estándar': this._t('role_argus_standard'),
      'Standard user': this._t('role_argus_standard'),
      'Utilisateur standard': this._t('role_argus_standard'),
      'Cuenta de Home Assistant': (this._t('ha_account_linked') || '').split(':')[0] || 'Home Assistant',
      'Compte Home Assistant': (this._t('ha_account_linked') || '').split(':')[0] || 'Home Assistant',
      'Home Assistant Account': (this._t('ha_account_linked') || '').split(':')[0] || 'Home Assistant',
      'Sin PIN': this._t('user_no_pin'),
      'Sans PIN': this._t('user_no_pin'),
      'No PIN': this._t('user_no_pin'),
      'Indefinido': this._t('exp_indefinite'),
      'Indéfini': this._t('exp_indefinite'),
      'Indefinite': this._t('exp_indefinite'),
      'En casa': this._t('mode_home'),
      'Maison': this._t('mode_home'),
      'Home': this._t('mode_home'),
      'Ausente': this._t('mode_away'),
      'Absent': this._t('mode_away'),
      'Away': this._t('mode_away'),
      'Noche': this._t('mode_night'),
      'Nuit': this._t('mode_night'),
      'Night': this._t('mode_night'),
      'Vacaciones': this._t('mode_vacation'),
      'Vacances': this._t('mode_vacation'),
      'Vacation': this._t('mode_vacation'),
      'Desarmado': this._t('disarmed'),
      'Désarmé': this._t('disarmed'),
      'Disarmed': this._t('disarmed'),
      'Inicio de sesión': this._t('log_action_user_logged_in'),
      'Inicio de sesion': this._t('log_action_user_logged_in'),
      'Estado local restaurado': this._t('log_action_state_restored'),
      'Estado restaurado': this._t('log_action_state_restored'),
      'Armado manual': this._t('manual_arm'),
      'Ajustes': this._t('settings')
    };
    
    for (const [esKey, localizedValue] of Object.entries(dynamicMap)) {
      if (localizedValue && localizedValue !== esKey) {
        const regex = new RegExp(`\\b${esKey}\\b`, 'gi');
        translatedRaw = translatedRaw.replace(regex, localizedValue);
      }
    }

    return translatedRaw;
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
        const actionLower = String(action || '').toLowerCase();
        if (actionLower.endsWith('_rejected')) {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('log_action_rejected');
        } else if (actionLower.includes('arm') && !actionLower.includes('disarm')) {
          itemCls = 'log-item--armed'; badgeCls = 'arm'; badgeTxt = this._t('log_armed');
        } else if (actionLower.includes('disarm')) {
          itemCls = 'log-item--disarmed'; badgeCls = 'disarm'; badgeTxt = this._t('log_disarmed');
        } else if (actionLower.includes('trigger') || actionLower.includes('alarm')) {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('log_triggered');
        } else if (actionLower === 'pin_reset') {
          itemCls = 'log-item--disarmed'; badgeCls = 'disarm'; badgeTxt = this._t('badge_pin_reset');
        } else if (actionLower === 'pin_reset_failed') {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('badge_pin_reset_failed');
        } else if (actionLower === 'sos' || actionLower === 'sos_stopped' || actionLower === 'panic_stopped') {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = this._t('log_action_sos');
        } else if (actionLower === 'audit_log_cleared') {
          itemCls = 'log-item--triggered'; badgeCls = 'trigger'; badgeTxt = '🗑️ ' + (this._t('log_action_audit_log_cleared') || 'Historial Borrado');
        } else if (actionLower === 'ui_configuration_updated') {
          badgeTxt = this._t('settings');
        } else {
          const tKey = `log_action_${actionLower}`;
          const tVal = this._t(tKey);
          badgeTxt = (tVal && tVal !== tKey) ? tVal : (this._t(actionLower) !== actionLower ? this._t(actionLower) : (this._t('log_action_analysis') || action));
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
    const modes = ['disarmed', 'home', 'away', 'night', 'sos'];
    const icons = { disarmed:'🔓', home:'🏠', away:'🔴', night:'🌙', sos:'🚨' };
    const lbls  = {
      disarmed: this._t('disarmed'),
      home:     this._t('mode_home'),
      away:     this._t('mode_away'),
      night:    this._t('mode_night'),
      sos:      this._t('sos_config_title') || 'CONFIGURACIÓN SOS',
    };

    tabs.className = 'tabs';
    tabs.innerHTML = `
      <div class="tab-bubble"></div>
      ${modes.map(m => `
        <button type="button" class="tab ${m === this._mode ? 'active' : ''}" data-mode="${m}">
          <span class="tab-icon" style="font-size: 20px;">${icons[m]}</span>
          <span class="tab-label">${lbls[m]}</span>
        </button>
      `).join('')}
    `;
    const bubble = tabs.querySelector('.tab-bubble');
    tabs.querySelectorAll('[data-mode]').forEach(t => t.addEventListener('click', () => {
      this._mode = t.dataset.mode;
      this._renderModeTabs();
      this._renderModeView();
    }));

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
      require_closed: false, open_sensors_policy: 'allow', arming_time: null, entry_delay: null,
      mqtt_enabled: null, entry_sensors: [], external_panels: [], light_siren_settings: {}
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
      // sync_panels was the short-lived UI name; retain it only as a read fallback.
      external_panels: Array.isArray(cfg?.external_panels) ? cfg.external_panels : (Array.isArray(cfg?.sync_panels) ? cfg.sync_panels : []),
      require_closed: typeof cfg?.require_closed === 'boolean' ? cfg.require_closed : false,
      open_sensors_policy: (cfg?.open_sensors_policy === 'pending' || cfg?.open_sensors_policy === 'allow' || cfg?.open_sensors_policy === 'block') ? cfg.open_sensors_policy : (cfg?.require_closed ? 'block' : 'allow'),
      arming_time: (cfg?.arming_time !== undefined && cfg?.arming_time !== null) ? cfg.arming_time : null,
      entry_delay: (cfg?.entry_delay !== undefined && cfg?.entry_delay !== null) ? cfg.entry_delay : null,
      light_siren_settings: cfg?.light_siren_settings && typeof cfg.light_siren_settings === 'object' ? cfg.light_siren_settings : {},
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
    const el = this.shadowRoot.getElementById('mode-view');
    if (el) {
      el.classList.remove('bounce-in');
      void el.offsetWidth; // force reflow
      el.classList.add('bounce-in');
    }
    const readonly = !this._isAdmin;

    if (this._mode === 'sos') {
      const emergencyNumber = this._emergencyNumber || this._ui?.emergency_number || '911';
      const outputs = this._panicOutputs || this._ui?.panic_outputs || [];

      el.innerHTML = `
        <div class="mode-grid-layout">
          <!-- Card 1: Emergency Phone -->
          <div class="mode-section-card">
            <div class="mode-section-title">📞 ${this._t('emergency_number_label') || 'Número Local de Emergencia'}</div>
            <p class="small" style="margin:4px 0 12px;opacity:0.75">${this._t('emergency_help') || 'Configura el número local de emergencia (ej. 911 o 112). Se incluirá en alertas SOS.'}</p>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;background:rgba(255,255,255,0.03);padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
              <span style="font-size:12.5px;font-weight:700;">${this._t('emergency_number_label') || 'Marcado Directo'}:</span>
              <input id="mode-emergency-number-input" class="glass-control" inputmode="tel" maxlength="16" value="${this._escapeHtml(emergencyNumber)}" style="width:130px;min-height:38px;padding:6px 12px;font-size:15px;font-weight:900;text-align:center;border-radius:10px;background:rgba(255,255,255,0.08);color:#fff;border:1px solid rgba(255,255,255,0.18)">
            </div>
            <div class="small" style="margin-top:10px;opacity:0.6;font-size:11px;">
              ℹ️ Al activar el SOS desde el panel o widget, se iniciará la marcación rápida y se registrará el evento de auxilio en el historial forense.
            </div>
          </div>

          <!-- Card 2: SOS Actions / Devices -->
          <div class="mode-section-card">
            <div class="mode-section-title">⚡ ${this._t('sos_actions') || 'Dispositivos y Acciones SOS'}</div>
            <p class="small" style="margin:4px 0 10px;opacity:0.75">${this._t('sos_outputs_help') || 'Estos dispositivos se encenderán o ejecutarán inmediatamente al dispararse el SOS.'}</p>
            <div id="sos-output-chips" class="mode-sensor-grid" style="min-height:70px;">
              ${outputs.length
                ? outputs.map(id => this._chip(id, 'sos_output')).join('')
                : `<div class="mode-sensor-none">${this._t('sos_no_outputs') || 'Ningún dispositivo configurado'}</div>`
              }
            </div>
            ${readonly ? '' : `
              <button class="ghost" id="btn-mode-select-sos-outputs" style="margin-top:12px;width:100%;justify-content:center;font-size:12px;font-weight:800;padding:8px 12px;background:rgba(255,255,255,0.06);border-radius:10px;cursor:pointer;">
                ＋ ${this._t('sos_select_outputs') || 'Seleccionar Luces, Sirenas o Escenas'}
              </button>
            `}
          </div>

          <!-- Card 3: Audible / Visual Signals -->
          <div class="mode-section-card">
            <div class="mode-section-title">📢 Señales de Alerta de Auxilio</div>
            <p class="small" style="margin:4px 0 10px;opacity:0.75">Comportamiento del sistema ante una señal de emergencia SOS.</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.06);font-size:12px;">
                <span>🚨</span>
                <span style="font-weight:600;">Disparo inmediato sin tiempo de entrada ni retardo.</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.06);font-size:12px;">
                <span>💡</span>
                <span style="font-weight:600;">Encendido general de luces de emergencia configuradas.</span>
              </div>
            </div>
          </div>

          <!-- Card 4: Broadcast & History -->
          <div class="mode-section-card">
            <div class="mode-section-title">🛡️ Notificaciones y Registro</div>
            <p class="small" style="margin:4px 0 10px;opacity:0.75">Difusión prioritaria a usuarios autorizados y registro de seguridad.</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.06);font-size:12px;">
                <span>📱</span>
                <span style="font-weight:600;">Notificación push de alta prioridad con sonido de alerta crítica.</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.06);font-size:12px;">
                <span>📋</span>
                <span style="font-weight:600;">Registro criptográfico inmutable en la línea de tiempo de auditoría.</span>
              </div>
            </div>
          </div>
        </div>
        ${readonly ? '' : `
          <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;">
            <button class="primary" id="save-sos-mode" style="width:100%;height:48px;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,0.2);cursor:pointer;">
              ${this._t('save_config') || 'Guardar Configuración'}
            </button>
            <span id="mode-status" style="display:block;text-align:center;font-size:13px;font-weight:700;min-height:20px;transition:opacity .4s;opacity:1;color:var(--primary-color,#03a9f4)"></span>
          </div>
        `}
      `;

      if (!readonly) {
        el.querySelector('#btn-mode-select-sos-outputs')?.addEventListener('click', () => this._openModal('panic'));
        el.querySelectorAll('[data-remove]').forEach(btn =>
          btn.addEventListener('click', () => this._removeChip(btn.dataset.remove))
        );
        el.querySelector('#save-sos-mode')?.addEventListener('click', () => this._saveSosMode());
      }
      return;
    }

    const cfg = this._currentModeConfig();
    const sensors = cfg.sensors || [];
    const bypass  = cfg.bypassed_sensors || [];
    const sirens  = cfg.sirens  || [];
    const externalPanels = cfg.external_panels || [];
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
            <label class="checkbox-label" style="display:flex;align-items:center;gap:8px;margin-top:8px;padding:8px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.05);font-size:12px">
              <input type="checkbox" id="mode-wait-if-open" ${cfg.open_sensors_policy === 'pending' ? 'checked' : ''}>
              <span style="font-size:12px;font-weight:600">${this._t('wait_if_open')}</span>
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
          ${sirens.filter(x => x.startsWith('light.')).map(x => {
            const setting = cfg.light_siren_settings?.[x] || {};
            const rgb = Array.isArray(setting.rgb_color) ? setting.rgb_color : [255, 0, 0];
            const hex = '#' + rgb.map(v => Number(v).toString(16).padStart(2, '0')).join('');
            return `<details class="light-siren-settings"><summary>⚙ ${this._escapeHtml(this._hass?.states?.[x]?.attributes?.friendly_name || x)}</summary><label>${this._t('light_siren_color') || 'Color'} <input type="color" data-light-siren-color="${this._escapeHtml(x)}" value="${hex}"></label><label class="checkbox-label"><input type="checkbox" data-light-siren-flash="${this._escapeHtml(x)}" ${setting.gentle_flash ? 'checked' : ''}> ${this._t('light_siren_flash') || 'Destello suave si está disponible'}</label></details>`;
          }).join('')}
          <div class="mode-section-title" style="margin-top:14px;font-size:12px">🔗 ${this._t('external_panels') || 'Paneles de alarma externos'}</div>
          <div class="mode-sensor-grid" id="external-panel-chips">
            ${externalPanels.map(x => this._chip(x, 'external_panel')).join('') || `<div class="mode-sensor-none">${this._t('none_selected')}</div>`}
          </div>
          ${readonly ? '' : `<button class="ghost" data-open-selector="siren" style="margin-top:12px; width:100%; justify-content:center; font-size:12px">${this._t('select_btn')}</button><button class="ghost" data-open-selector="external_panel" style="margin-top:8px; width:100%; justify-content:center; font-size:12px">${this._t('add_btn')}</button>`}
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
      
      if (power.mains) powerHtml += '<span class="pill-power">🔌 AC</span>';
      if (power.battery !== null) {
        const isDead = power.battery === 0;
        const isLow = power.battery <= 10 && !isDead;
        const batText = isDead ? '🔋 ❌' : `🔋 ${power.battery}%`;
        const cls = isDead ? 'dead' : (isLow ? 'low' : '');
        powerHtml += `<span class="pill-power ${cls}">${batText}</span>`;
      }
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
    if (type === 'sos_output' || type === 'panic') {
      this._panicOutputs = (this._panicOutputs || []).filter(v => v !== entityId);
      this._renderModeView();
      return;
    }
    const cfg = this._currentModeConfig();
    const key = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : (type === 'entry' ? 'entry_sensors' : (type === 'external_panel' ? 'external_panels' : 'sirens')));
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

  async _saveSosMode() {
    const status = this.shadowRoot.getElementById('mode-status');
    const inp = this.shadowRoot.getElementById('mode-emergency-number-input') as HTMLInputElement | null;
    const emergencyNumber = this._normaliseEmergencyNumber(inp?.value || this._emergencyNumber || '911');
    this._emergencyNumber = emergencyNumber;
    try {
      if (status) {
        status.textContent = '...';
        status.className = 'status';
        status.style.opacity = '1';
      }
      await this._send('argus/save_ui', {
        emergency_number: emergencyNumber,
        panic_outputs: this._panicOutputs || []
      });
      if (!this._ui) this._ui = {};
      this._ui.emergency_number = emergencyNumber;
      this._ui.panic_outputs = this._panicOutputs || [];
      if (status) {
        status.textContent = '✓ ' + (this._t('mode_saved') || 'Configuración SOS guardada');
        status.className = 'status ok';
        status.style.opacity = '1';
        setTimeout(() => { if (status) status.textContent = ''; }, 3000);
      }
    } catch (e: any) {
      if (status) {
        status.textContent = this._format('generic_error', { error: e.message });
        status.className = 'status err';
        status.style.opacity = '1';
      }
    }
  }

  async _saveMode() {
    const cfg = this._currentModeConfig();
    const chk      = this.shadowRoot.getElementById('mode-require-closed') as HTMLInputElement | null;
    const waitChk  = this.shadowRoot.getElementById('mode-wait-if-open') as HTMLInputElement | null;
    const armTime  = this.shadowRoot.getElementById('mode-arming-time') as HTMLInputElement | null;
    const entDelay = this.shadowRoot.getElementById('mode-entry-delay') as HTMLInputElement | null;
    const mqttChk  = this.shadowRoot.getElementById('mode-mqtt-enabled') as HTMLInputElement | null;

    if (chk) cfg.require_closed = chk.checked;
    // Derive open_sensors_policy: block wins if require_closed, then pending if wait checked, else allow
    if (chk?.checked) {
      cfg.open_sensors_policy = 'block';
    } else if (waitChk?.checked) {
      cfg.open_sensors_policy = 'pending';
    } else {
      cfg.open_sensors_policy = 'allow';
    }
    if (armTime)  cfg.arming_time  = armTime.value  ? parseInt(armTime.value)  : 0;
    if (entDelay) cfg.entry_delay  = entDelay.value ? parseInt(entDelay.value) : 0;
    if (mqttChk)  cfg.mqtt_enabled = mqttChk.checked;
    cfg.light_siren_settings = {};
    this.shadowRoot.querySelectorAll('[data-light-siren-color]').forEach(input => {
      const hex = input.value || '#ff0000';
      cfg.light_siren_settings[input.dataset.lightSirenColor] = {
        rgb_color: [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)),
        gentle_flash: Boolean(this.shadowRoot.querySelector(`[data-light-siren-flash="${CSS.escape(input.dataset.lightSirenColor)}"]`)?.checked),
      };
    });

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
    const notifyEntities = Object.values(this._hass?.states || {})
      .filter(state => state?.entity_id?.startsWith('notify.') && state.entity_id !== 'notify.persistent_notification')
      .map(state => ({ value: `entity:${state.entity_id}`, label: state.attributes?.friendly_name || state.entity_id }));
    const legacyServices = Object.keys(services)
      .filter(k => !['notify', 'send_message', 'persistent_notification'].includes(k) && !this._notifTargets.includes(k))
      .map(k => ({ value: k, label: k.replace(/_/g, ' ') }));
    const opts = [...notifyEntities, ...legacyServices].filter(option => !this._notifTargets.includes(option.value));

    sel.innerHTML = opts.length
      ? opts.map(({ value, label }) => `<option value="${this._escapeHtml(value)}">${this._escapeHtml(`🔔 ${label}`)}</option>`).join('')
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
      <span class="notif-chip" style="color:#ffffff !important;font-weight:700;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);">🔔 ${this._escapeHtml(t.replace(/^entity:notify\./, '').replace(/_/g,' '))}
        <button data-notif-remove="${this._escapeHtml(t)}" style="color:#ffffff;opacity:0.75;cursor:pointer;margin-left:4px;font-weight:bold;">✕</button>
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
                ${u.role === 'admin' ? '<span class="user-badge admin">⭐ Adm</span>' : '<span class="user-badge user">👤 Std</span>'}
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
                  <span class="user-badge ${u.role === 'admin' ? 'admin' : 'user'}">${roleText}</span>
                  <span class="user-badge" style="background:rgba(74,20,140,0.15);color:rgba(186,104,200,0.95);border:1px solid rgba(74,20,140,0.22);margin-left:5px">${this._escapeHtml(haAccountText)}</span>
                  ${pinBadge}
                  ${expBadge}
                </div>
                ${u.role !== 'admin' && u.permissions ? `
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:6px">
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('view_panel_perm') || this._t('instances') || 'Panel')}">👁️ ${u.permissions.view_status ? (this._t('view_panel_perm') || this._t('instances') || 'Panel') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('arm_perm') || this._t('system_armed') || 'Armar')}">🛡️ ${u.permissions.arm ? (this._t('arm_perm') || this._t('system_armed') || 'Armar') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('disarm_perm') || this._t('disarmed') || 'Desarmar')}">🔓 ${u.permissions.disarm ? (this._t('disarm_perm') || this._t('disarmed') || 'Desarmar') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px" title="${this._escapeHtml(this._t('view_history_perm') || this._t('activity_log') || 'Historial')}">📜 ${u.permissions.view_history ? (this._t('view_history_perm') || this._t('activity_log') || 'Historial') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(52,199,89,0.12);color:#34c759" title="${this._escapeHtml(this._t('access_pin_lbl') || 'PIN Acceso')}">🔑 ${u.permissions.change_pin ? (this._t('access_pin_lbl') || 'PIN Acceso') : '---'}</span>
                  <span class="user-badge" style="opacity:0.85;font-size:10px;background:rgba(255,179,0,0.12);color:#ffb300" title="${this._escapeHtml(this._t('master_pin_lbl') || 'PIN Maestro')}">🔑 ${u.permissions.change_master_pin ? (this._t('master_pin_lbl') || 'PIN Maestro') : '---'}</span>
                </div>
                ` : ''}
              </div>
              <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
                ${this._isAdmin ? `
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-edit="${i}" title="${this._escapeHtml(this._t('modal_edit_name'))}">✏️</button>
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-pin="${i}" title="${this._escapeHtml(this._t('modal_pin_title'))}">🔑</button>
                  ${u.role !== 'admin' ? `<button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-perms="${i}" title="${this._escapeHtml(this._t('permissions_title') || 'Permisos')}">🛡️</button>` : ''}
                  <button class="secondary" style="padding:6px 10px;font-size:12px;border-radius:10px;cursor:pointer" data-user-role-toggle="${i}" title="${this._escapeHtml(this._t('user_role_label'))}">⭐</button>
                  <button class="btn-danger danger" style="padding:6px 10px;font-size:12px;background:#e53935;color:white;border:none;border-radius:10px;cursor:pointer" title="${this._escapeHtml(this._t('delete_user_tooltip'))}" aria-label="${this._escapeHtml(this._t('delete_user_tooltip'))}" data-user-del="${i}">🗑️</button>
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
                  permissions: { view_status: true, arm: true, disarm: true, view_history: false },
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

          el.querySelectorAll('[data-user-perms]').forEach(btn => {
            btn.addEventListener('click', async () => {
              const idx = Number(btn.dataset.userPerms);
              const targetUser = this._users[idx];
              if (!targetUser) return;
              const newPerms = await this._showArgusPermissionsModal(targetUser);
              if (newPerms === null) return;
              this._runWithPin(async () => {
                const nextUsers = this._users.map((u, k) => k === idx ? { ...u, permissions: { ...u.permissions, ...newPerms } } : u);
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
    this.setAttribute('data-bg-mode', 'default');

    if (bgContainer) {
      bgContainer.innerHTML = '';
      bgContainer.style.backgroundImage = '';
    }

    // Stop and remove any WebGL canvas loops to guarantee liquid-smooth rendering
    this.shadowRoot.querySelectorAll('.wx-webgl').forEach(canvas => {
      if ((canvas as any)._argusRO) (canvas as any)._argusRO.disconnect();
      if ((canvas as any)._argusWebglStop) (canvas as any)._argusWebglStop();
      canvas.remove();
    });

    this.style.backgroundImage = `url('/api/argus_static/argus-default-bg.jpg')`;
    this.style.backgroundSize = 'cover';
    this.style.backgroundPosition = 'center';
    this.style.backgroundRepeat = 'no-repeat';
    this.style.backgroundAttachment = 'fixed';
  }

  _renderEntryBackground(ws, isNight) {
    return `<div class="wx wx-liquid-glass" style="position:absolute; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; border-radius:inherit; background:radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06), transparent 70%);"></div>`;
  }

  _updateHomeNameDisplay() {
    const prominent = this.shadowRoot.getElementById('lbl-home-name-prominent');
    if (prominent) prominent.textContent = this._homeName || this._t('home_default');
    const dropdownHome = this.shadowRoot.getElementById('dropdown-home-name');
    if (dropdownHome) dropdownHome.textContent = this._homeName || this._t('home_default');
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
    this._ui = this._ui || {};
    const background_mode = this.shadowRoot.getElementById('bg-mode-select-standalone')?.value || 'weather';
    const temperature_source = this.shadowRoot.getElementById('temp-source-select-standalone')?.value || 'auto';
    const weather_source = this.shadowRoot.getElementById('weather-source-select')?.value || 'auto';
    const clock_format_val = this.shadowRoot.getElementById('argus-clock-format-select')?.value || 'auto';
    this._clockFormat = ['auto','12h','24h'].includes(clock_format_val) ? clock_format_val : 'auto';
    const emergency_number = this._normaliseEmergencyNumber(this.shadowRoot.getElementById('emergency-number-input')?.value);

    // FIX: Read directly from DOM, allowing empty strings when the user clears the URL
    const panel_bg_file = this.shadowRoot.getElementById('panel-bg-url-input')?.value || '';
    const panel_bg_sound = Boolean(this.shadowRoot.getElementById('chk-panel-bg-sound')?.checked);

    const selected_hub_bg_mode = this.shadowRoot.getElementById('hub-bg-mode-select')?.value || 'default';
    const hub_bg_mode = selected_hub_bg_mode === 'default' ? 'none' : selected_hub_bg_mode;
    // Preserve file even in default mode so switching back to image restores it
    const hub_bg_file = this._hubBgFile || this.shadowRoot.getElementById('hub-bg-url-input')?.value || '';
    const hub_bg_sound = Boolean(this.shadowRoot.getElementById('chk-hub-bg-sound')?.checked);

    const payload = {
      home_name: this._homeName,
      temperature_source,
      weather_source,
      clock_format: this._clockFormat,
      emergency_number
    };
    
    if (this._panicOutputs !== undefined) {
      payload.panic_outputs = this._panicOutputs;
    }

    const myProfile = (this._ui.users || []).find(u => u.id === this._currentProfile?.id);
    // Background is an instance preference, not a profile-only override: that
    // makes the Default choice survive a refresh for every administrator.
    payload.background_mode = background_mode;
    payload.background_images = this._backgroundImages || [];
    payload.panel_bg_file = panel_bg_file;
    payload.panel_bg_sound = panel_bg_sound;
    payload.hub_bg_mode = hub_bg_mode;
    payload.hub_bg_file = hub_bg_file;
    payload.hub_bg_sound = hub_bg_sound;
    payload.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;

    // Inject Theme Object per prompt requirements
    let themeMode = "default";
    let themeFile = "";
    if (background_mode === "photo" && panel_bg_file) {
        themeMode = "photo";
        themeFile = panel_bg_file;
    } else if (background_mode === "weather") {
        themeMode = "weather";
    } else if (background_mode === "none") {
        themeMode = "none";
    }
    
    payload.theme = {
        background_mode: themeMode,
        background_file: themeFile,
    };

    if (myProfile) {
      const users = JSON.parse(JSON.stringify(this._ui.users || []));
      const user = users.find(u => u.id === this._currentProfile?.id);
      user.background_mode = background_mode;
      user.background_images = this._backgroundImages || [];
      user.panel_bg_file = panel_bg_file;
      user.panel_bg_sound = panel_bg_sound;
      user.hub_bg_mode = hub_bg_mode;
      user.hub_bg_file = hub_bg_file;
      user.hub_bg_sound = hub_bg_sound;
      // also save theme
      user.theme = payload.theme;
      payload.users = users;
    }

    try {
      await this._send('argus/save_ui', payload);
      this._currentUserTheme = payload.theme;
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
      if (myProfile) {
        this._ui.users = payload.users;
      } else {
        this._ui.background_mode = background_mode;
        this._ui.background_images = this._backgroundImages || [];
        this._ui.panel_bg_file = panel_bg_file;
        this._ui.panel_bg_sound = panel_bg_sound;
        this._ui.hub_bg_mode = hub_bg_mode;
        this._ui.hub_bg_file = hub_bg_file;
        this._ui.hub_bg_sound = hub_bg_sound;
      }
      this._ui.temperature_source = temperature_source;
      this._ui.weather_source = weather_source;
      this._ui.clock_format = this._clockFormat;
      this._ui.emergency_number = emergency_number;
      this._ui.panic_outputs = this._panicOutputs;
      this._configureEmergencyCall();
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
        'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center',
        'background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)',
        'animation:argus-modal-in .18s ease',
      ].join(';');

      const safeLabel = label.replace(/'/g, '&#39;');
      const safeTitle = title.replace(/'/g, '&#39;');
      const safePlaceholder = placeholder.replace(/'/g, '&#39;');
      const cancelLabel = this._t('modal_cancel') || 'Cancelar';
      const saveLabel   = this._t('modal_save')   || 'Guardar';

      overlay.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(380px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">${safeTitle}</div>
          ${safeLabel ? `<div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${safeLabel}</div>` : ''}
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

      const root = document.body || this.shadowRoot;
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

  _showArgusPermissionsModal(targetUser) {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.style.cssText = [
        'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center',
        'background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)',
        'animation:argus-modal-in .18s ease',
      ].join(';');

      const cancelLabel = this._t('modal_cancel') || 'Cancelar';
      const saveLabel = this._t('modal_save') || 'Guardar';
      const perms = targetUser.permissions || {};

      overlay.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(420px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:14px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:16px;font-weight:700;color:#fff;letter-spacing:.01em">🛡️ ${(this._t('permissions_title') || 'Permisos')} — ${this._escapeHtml(targetUser.name)}</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.65);margin-top:-6px">${this._t('permissions_modal_desc') || 'Selecciona las acciones permitidas para este perfil estándar:'}</div>
          
          <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px;max-height:280px;overflow-y:auto;padding-right:4px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-status" ${perms.view_status ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t('perm_view_status') || 'Ver Estado de Sensores / Panel'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-arm" ${perms.arm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t('perm_arm') || 'Armar Alarma'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-disarm" ${perms.disarm ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t('perm_disarm') || 'Desarmar Alarma'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-view-history" ${perms.view_history ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span>${this._t('perm_view_history') || 'Ver Historial de Actividad'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-pin" ${perms.change_pin ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#34c759;font-weight:700;">${this._t('perm_change_pin') || 'Permitir Cambiar su PIN de Acceso'}</span>
            </label>
            <label style="display:flex;align-items:center;gap:10px;font-size:13px;color:#fff;cursor:pointer;">
              <input type="checkbox" id="chk-perm-change-master-pin" ${perms.change_master_pin ? 'checked' : ''} style="width:16px;height:16px;cursor:pointer;" />
              <span style="color:#ffb300;font-weight:700;">${this._t('perm_change_master_pin') || 'Permitir Cambiar el PIN Maestro'}</span>
            </label>
          </div>

          <div style="display:flex;gap:10px;margin-top:10px">
            <button id="apm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${cancelLabel}</button>
            <button id="apm-ok" style="flex:1;padding:11px;border-radius:12px;border:none;
              background:linear-gradient(135deg,#4a90d9,#7b5ea7);color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;box-shadow:0 4px 14px rgba(74,144,217,0.35)">${saveLabel}</button>
          </div>
        </div>`;

      const root = document.body || this.shadowRoot;
      root.appendChild(overlay);

      const okBtn = overlay.querySelector('#apm-ok');
      const cancelBtn = overlay.querySelector('#apm-cancel');

      const cleanup = val => { overlay.remove(); resolve(val); };

      okBtn.addEventListener('click', () => {
        const nextPerms = {
          view_status: overlay.querySelector('#chk-perm-view-status').checked,
          arm: overlay.querySelector('#chk-perm-arm').checked,
          disarm: overlay.querySelector('#chk-perm-disarm').checked,
          view_history: overlay.querySelector('#chk-perm-view-history').checked,
          change_pin: overlay.querySelector('#chk-perm-change-pin').checked,
          change_master_pin: overlay.querySelector('#chk-perm-change-master-pin').checked,
        };
        cleanup(nextPerms);
      });
      cancelBtn.addEventListener('click', () => cleanup(null));
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
        'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;padding:0;box-sizing:border-box;z-index:999999999;display:flex;align-items:center;justify-content:center',
        'background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)',
        'animation:argus-modal-in .18s ease',
      ].join(';');

      const cl = confirmLabel || this._t('modal_confirm') || 'Confirmar';
      const ccl = cancelLabel  || this._t('modal_cancel')  || 'Cancelar';
      const cStyle = confirmStyle || 'background:linear-gradient(135deg,#4a90d9,#7b5ea7);border:none;box-shadow:0 4px 14px rgba(74,144,217,0.35)';

      overlay.innerHTML = `
        <div style="background:rgba(30,30,45,0.92);border:1px solid rgba(255,255,255,0.18);border-radius:20px;
          padding:28px 24px 22px;width:min(360px,90vw);box-shadow:0 24px 64px rgba(0,0,0,0.7);
          display:flex;flex-direction:column;gap:18px;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px)">
          <div style="font-size:15px;color:rgba(255,255,255,0.92);line-height:1.5;text-align:center">${message}</div>
          <div style="display:flex;gap:10px">
            <button id="acm-cancel" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);
              background:rgba(255,255,255,0.06);color:#fff;font-size:14px;cursor:pointer;font-family:inherit">${ccl}</button>
            <button id="acm-ok" style="flex:1;padding:11px;border-radius:12px;color:#fff;font-size:14px;font-weight:600;
              cursor:pointer;font-family:inherit;${cStyle}">${cl}</button>
          </div>
        </div>`;

      const root = document.body || this.shadowRoot;
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
    const q = (this.shadowRoot.getElementById('selector-search')?.value || '').toLowerCase().trim();
    const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
    const items = (this._available || []).filter(x => {
      if (this._selectorTarget === 'external_panel') return x.domain === 'alarm_control_panel';
      if (this._selectorTarget === 'siren' || this._selectorTarget === 'panic') return ['siren','switch','light','fan','input_boolean','script','alarm_control_panel'].includes(x.domain);
      if (x.domain === 'lock') return true;
      if (x.domain === 'binary_sensor') {
        const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
        return INTRUSION_DC.includes(dc);
      }
      return false;
    }).filter(x => !q || [x.entity_id, x.name, x.area].filter(Boolean).join(' ').toLowerCase().includes(q));
    items.forEach(x => { if (!this._selected.includes(x.entity_id)) this._selected.push(x.entity_id); });
    this._renderSelector(true);
  }

  _openModal(type) {
    this._selectorTarget = type;
    const cfg = this._currentModeConfig();
    const _srcKey = type === 'sensor' ? 'sensors' : (type === 'bypass' ? 'bypassed_sensors' : (type === 'entry' ? 'entry_sensors' : (type === 'external_panel' ? 'external_panels' : 'sirens')));
    this._selected = type === 'panic'
      ? [...(this._panicOutputs || this._ui?.panic_outputs || [])]
      : (Array.isArray(cfg?.[_srcKey]) ? [...cfg[_srcKey]] : []);
    const title = this.shadowRoot.getElementById('selector-title');
    if (type === 'sensor') title.textContent = this._t('sensor_section');
    else if (type === 'bypass') title.textContent = this._t('sensors_to_bypass');
    else if (type === 'entry') title.textContent = this._t('entry_sensors');
    else if (type === 'panic') title.textContent = this._t('sos_actions') || this._t('selector_panic') || 'Dispositivos y Acciones SOS';
    else if (type === 'external_panel') title.textContent = this._t('external_panels') || 'Paneles de alarma externos';
    else title.textContent = this._t('siren_section');
    const searchInput = this.shadowRoot.getElementById('selector-search');
    if (searchInput) searchInput.value = '';
    this._renderSelector(true);
    const m = this.shadowRoot.getElementById('selector-modal');
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
  }

  _closeModal() {
    const m = this.shadowRoot.getElementById('selector-modal');
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
  }

  _renderSelectedBox() {
    const selBox = this.shadowRoot.getElementById('selector-selected');
    if (!selBox) return;
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

    const countEl = this.shadowRoot.getElementById('selector-count');
    if (countEl) {
      countEl.textContent = `${this._selected.length} ${this._t('selected_lbl').toLowerCase()}`;
    }
  }

  _renderSelector(rebuildList = true) {
    const list = this.shadowRoot.getElementById('selector-list');
    const selBox = this.shadowRoot.getElementById('selector-selected');
    if (!list || !selBox) return;

    if (!list._boundSelectorChange) {
      list._boundSelectorChange = true;
      list.addEventListener('change', e => {
        const cb = e.target.closest('input[type=checkbox]');
        if (!cb || !cb.dataset.entity) return;
        const id = cb.dataset.entity;
        if (cb.checked) {
          if (!this._selected.includes(id)) this._selected.push(id);
        } else {
          this._selected = this._selected.filter(v => v !== id);
        }
        this._renderSelectedBox();
      });
    }

    if (!selBox._boundSelectorRm) {
      selBox._boundSelectorRm = true;
      selBox.addEventListener('click', e => {
        const btn = e.target.closest('[data-rm]');
        if (!btn || !btn.dataset.rm) return;
        const id = btn.dataset.rm;
        this._selected = this._selected.filter(v => v !== id);
        const cb = list.querySelector(`input[type=checkbox][data-entity="${id}"]`);
        if (cb) cb.checked = false;
        this._renderSelectedBox();
      });
    }

    if (rebuildList) {
      const q = (this.shadowRoot.getElementById('selector-search')?.value || '').toLowerCase().trim();
      const INTRUSION_DC = ['door','window','motion','vibration','glass','opening','smoke','gas','tamper'];
      const items = (this._available || []).filter(x => {
        if (this._selectorTarget === 'external_panel') return x.domain === 'alarm_control_panel';
        if (this._selectorTarget === 'siren' || this._selectorTarget === 'panic') return ['siren','switch','light','fan','input_boolean','script','alarm_control_panel'].includes(x.domain);
        if (x.domain === 'lock') return true;
        if (x.domain === 'binary_sensor') {
          const dc = this._hass?.states?.[x.entity_id]?.attributes?.device_class || '';
          return INTRUSION_DC.includes(dc);
        }
        return false;
      }).filter(x => !q || [x.entity_id, x.name, x.area, x.entity_id.split('.')[1]].filter(Boolean).join(' ').toLowerCase().includes(q));

      list.innerHTML = items.map(x => {
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
    }

    this._renderSelectedBox();
  }

  _acceptSelection() {
    // FIX A DEFINITIVO: leer cfg fresco, mutar, y escribir de vuelta
    // EXACTAMENTE en modes.__by_entity__[eid][mode] — la misma ruta que _currentModeConfig lee
    if (!this._ui) return;
    if (this._selectorTarget === 'panic') {
      this._panicOutputs = [...this._selected];
      this._renderSosOutputs();
      this._closeModal();
      if (this._mode === 'sos') {
        this._renderModeView();
      }
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
    const EMPTY = { sensors:[], bypassed_sensors:[], sirens:[], external_panels:[], require_closed:false,
                    arming_time:null, entry_delay:null, mqtt_enabled:null, entry_sensors:[], light_siren_settings:{} };
    // Partir de la config existente para no perder otros campos
    const existing = this._ui.modes.__by_entity__[_eid][this._mode] || {};
    const cfg = { ...EMPTY, ...existing };
    if (this._selectorTarget === 'sensor') cfg.sensors          = [...this._selected];
    if (this._selectorTarget === 'siren')  cfg.sirens           = [...this._selected];
    if (this._selectorTarget === 'bypass') cfg.bypassed_sensors = [...this._selected];
    if (this._selectorTarget === 'entry')  cfg.entry_sensors    = [...this._selected];
    if (this._selectorTarget === 'external_panel') cfg.external_panels = [...this._selected];
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


  _updateHeroProfileDisplay() {
    const container = this.shadowRoot.getElementById('hero-profile-container');
    if (!container) return;
    const prof = this._currentProfile;
    if (!prof) {
      container.style.display = 'none';
      container.innerHTML = '';
      return;
    }
    container.style.display = 'flex';
    container.style.position = 'relative';

    // Resolve picture: prefer stored picture, fallback to HA person entity_picture
    let resolvedPicture = prof.picture || null;
    if (!resolvedPicture && this._hass?.states) {
      // Try to find a person entity matching this user
      const personEntities = Object.values(this._hass.states).filter(
        s => s.entity_id?.startsWith('person.') && 
        (s.attributes?.friendly_name?.toLowerCase() === prof.name?.toLowerCase() ||
         s.attributes?.user_id === prof.ha_user_id)
      );
      if (personEntities.length > 0) {
        const pic = personEntities[0].attributes?.entity_picture;
        if (pic) resolvedPicture = pic;
      }
    }
    prof.picture = resolvedPicture;

    const avatarHtml = prof.picture
      ? `<img id="hero-profile-avatar" class="user-avatar" src="${this._escapeHtml(prof.picture)}" alt="${this._escapeHtml(prof.name)}" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 3px 8px rgba(0,0,0,0.2); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);" />`
      : `<div id="hero-profile-avatar" class="user-avatar" style="width: 34px; height: 34px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0; transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">${this._escapeHtml(prof.name.substring(0, 2).toUpperCase())}</div>`;
      
    const curLang = this._manualLang || 'auto';
    const canChangePin = prof.role === 'admin' || (prof.permissions && prof.permissions.change_pin);
    const canChangeMasterPin = prof.role === 'admin' || (prof.permissions && prof.permissions.change_master_pin);
    const roleLabel = prof.role === 'admin' 
      ? (this._t('role_argus_admin_short') || 'Admin') 
      : (this._t('role_argus_user_short') || 'Estándar');

    container.innerHTML = `
      <div class="hero-profile-pill glass liquid-glass" style="display: flex; align-items: center; gap: 8px; padding: 5px 12px 5px 7px; border-radius: 999px;">
        ${avatarHtml}
        <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15;">
          <span id="hero-profile-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text, #f7f9ff); max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${this._escapeHtml(prof.name)}</span>
          <span id="hero-profile-role" style="font-size: 8.5px; opacity: 0.65; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;">${this._escapeHtml(roleLabel)}</span>
        </div>
        <span class="profile-chevron" style="font-size: 7.5px; opacity: 0.65; margin-left: 2px;">▼</span>
      </div>

      <!-- Dropdown Card -->
      <div id="profile-dropdown" class="hero-profile-dropdown glass liquid-glass" style="display: none;">
        <div style="display: flex; align-items: center; gap: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; margin-bottom: 8px; width: 100%;">
          ${prof.picture
            ? `<img src="${this._escapeHtml(prof.picture)}" alt="${this._escapeHtml(prof.name)}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(255,255,255,0.20); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;" />`
            : `<div class="user-avatar" style="width: 44px; height: 44px; border-radius: 50%; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.15); box-shadow: 0 4px 10px rgba(0,0,0,0.25); flex-shrink: 0;">${this._escapeHtml(prof.name.substring(0, 2).toUpperCase())}</div>`
          }
          <div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0; align-items: flex-start;">
            <span style="font-size: 9.5px; opacity: 0.5; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em;">${this._t('profile_is_yours') || this._t('active_profile') || 'Perfil Activo'}</span>
            <span style="font-size: 14px; font-weight: 850; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; text-align: left;">${this._escapeHtml(prof.name)}</span>
            <button id="btn-change-profile-picture" style="font-size: 10.5px; font-weight: 700; color: #30d158; text-decoration: none; display: flex; align-items: center; gap: 3px; margin-top: 3px; background: none; border: none; padding: 0; cursor: pointer;">
              👤 ${this._t('change_profile_picture') || 'Ir a Personas de HA ↗'}
            </button>
          </div>
          <span class="user-badge ${prof.role === 'admin' ? 'admin' : 'user'}" style="font-size: 8.5px; padding: 3px 8px; font-weight: 800; border-radius: 6px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.03em;">${this._escapeHtml(roleLabel)}</span>
        </div>

        <!-- Language Selector -->
        <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          <label style="font-size: 11px; font-weight: 700; opacity: 0.7; display: flex; align-items: center; gap: 5px;">${this._t('lang_selector_lbl') || '⚙️ Idioma / Language'}</label>
          <select id="dropdown-lang-select" class="glass-control" style="width: 100%; height: 36px; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; background: rgba(255,255,255,0.06); border: 1px solid var(--v2066-border); color: var(--v2066-text); outline: none; cursor: pointer;">
            ${LANG_LIST.map(l => `<option value="${l.code}" ${l.code === curLang ? 'selected' : ''}>${l.flag} ${l.code === 'auto' ? (this._t('use_ha_language') || 'Automático (HA)') : l.label}</option>`).join('')}
          </select>
        </div>

        <!-- PIN management section -->
        ${(canChangePin || canChangeMasterPin) ? `
        <div style="display: flex; flex-direction: column; gap: 6px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px;">
          <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">${this._t('pin_management') || '🔑 Gestión de Pines'}</span>
          
          <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 2px;">
            ${canChangePin ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t('access_pin_lbl') || 'PIN de Acceso'}</span>
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t('change_btn') || 'Cambiar'}</button>
                <button id="btn-dropdown-remove-access-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t('remove_btn') || 'Quitar'}</button>
              </div>
            </div>
            ` : ''}
            
            ${canChangeMasterPin ? `
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 11px; opacity: 0.85;">${this._t('master_pin_lbl') || 'PIN Maestro'}</span>
              <div style="display: flex; gap: 4px;">
                <button id="btn-dropdown-change-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t('change_btn') || 'Cambiar'}</button>
                <button id="btn-dropdown-remove-master-pin" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; color: #ff453a !important;">${this._t('remove_btn') || 'Quitar'}</button>
              </div>
            </div>
            ` : ''}
          </div>
        </div>
        ` : ''}

        <!-- Home Name Section -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; margin-top: 2px;">
          <div style="display: flex; flex-direction: column; min-width: 0; align-items: flex-start;">
            <span style="font-size: 11px; font-weight: 700; opacity: 0.7;">🏡 ${this._t('home_name_lbl') || 'Nombre de la Casa'}</span>
            <span id="dropdown-home-name" style="font-size: 12.5px; font-weight: 800; color: var(--v2066-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 140px; margin-top: 1px;">${this._escapeHtml(this._homeName || 'Mi Casa')}</span>
          </div>
          <button id="btn-dropdown-edit-home-name" class="glass-control" style="min-height: 24px; padding: 4px 10px; border-radius: 8px; font-size: 9.5px; font-weight: 800; cursor: pointer; text-transform: uppercase;">${this._t('change_btn') || 'Cambiar'}</button>
        </div>

        <!-- Switch user button -->
        <button id="btn-dropdown-switch-user" class="glass-control" style="width: 100%; min-height: 32px; padding: 6px; border-radius: 10px; font-size: 10.5px; font-weight: 800; cursor: pointer; text-transform: uppercase; margin-top: 6px; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); color: var(--v2066-text);">
          ${this._t('switch_profile_btn') || '👤 Cambiar de Perfil'}
        </button>
      </div>
    `;

    // Click handler for pill to toggle dropdown
    const pill = container.querySelector('.hero-profile-pill');
    const dropdown = container.querySelector('#profile-dropdown');
    
    if (pill && dropdown) {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.style.display === 'flex';
        dropdown.style.display = isOpen ? 'none' : 'flex';
      });

      // Close dropdown when clicking outside
      const _closeOnClickOutside = (e) => {
        // In Shadow DOM, e.target is the host element at document level.
        // Use composedPath() to get the actual inner target.
        const path = e.composedPath ? e.composedPath() : [e.target];
        const insideContainer = path.some(el => el === container || (el.closest && el.closest?.('#profile-dropdown')));
        if (!insideContainer) {
          dropdown.style.display = 'none';
          document.removeEventListener('click', _closeOnClickOutside, true);
        }
      };
      pill.addEventListener('click', () => {
        setTimeout(() => {
          if (dropdown.style.display === 'flex') {
            document.addEventListener('click', _closeOnClickOutside, true);
          }
        }, 10);
      });
    }

    // Language dropdown change listener
    const langSelect = container.querySelector('#dropdown-lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this._setLanguage(e.target.value);
      });
    }

    // Change profile picture → navigate to HA Persons page
    container.querySelector('#btn-change-profile-picture')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      try {
        window.history.pushState(null, '', '/config/person');
        window.dispatchEvent(new CustomEvent('location-changed'));
      } catch (_) {
        window.location.href = '/config/person';
      }
    });

    // Action listeners inside dropdown:
    // Switch profile:
    container.querySelector('#btn-dropdown-switch-user')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this._switchProfile();
    });

    // Redirect Access PIN change:
    container.querySelector('#btn-dropdown-change-access-pin')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const target = this.shadowRoot.getElementById('w-access');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.5s ease-in-out';
        target.style.boxShadow = '0 0 30px rgba(0, 122, 255, 0.6)';
        setTimeout(() => { target.style.boxShadow = ''; }, 1500);
        
        // Find and highlight active user card:
        const userCards = this.shadowRoot.querySelectorAll('#users-list .user-card');
        userCards.forEach(card => {
          if (card.textContent.includes(prof.name)) {
            card.style.transition = 'background-color 0.5s ease';
            card.style.backgroundColor = 'rgba(0, 122, 255, 0.15)';
            setTimeout(() => { card.style.backgroundColor = ''; }, 2000);
            const pinBtn = card.querySelector('[data-user-pin]');
            if (pinBtn) pinBtn.focus();
          }
        });
      }
    });

    // Redirect Access PIN remove:
    container.querySelector('#btn-dropdown-remove-access-pin')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const target = this.shadowRoot.getElementById('w-access');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.5s ease-in-out';
        target.style.boxShadow = '0 0 30px rgba(0, 122, 255, 0.6)';
        setTimeout(() => { target.style.boxShadow = ''; }, 1500);
        
        // Find and highlight active user card:
        const userCards = this.shadowRoot.querySelectorAll('#users-list .user-card');
        userCards.forEach(card => {
          if (card.textContent.includes(prof.name)) {
            card.style.transition = 'background-color 0.5s ease';
            card.style.backgroundColor = 'rgba(255, 69, 58, 0.15)';
            setTimeout(() => { card.style.backgroundColor = ''; }, 2000);
            const pinBtn = card.querySelector('[data-user-pin]');
            if (pinBtn) pinBtn.focus();
          }
        });
      }
    });

    // Redirect Master PIN change:
    container.querySelector('#btn-dropdown-change-master-pin')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const target = this.shadowRoot.getElementById('w-access');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.5s ease-in-out';
        target.style.boxShadow = '0 0 30px rgba(255, 179, 0, 0.6)';
        setTimeout(() => { target.style.boxShadow = ''; }, 1500);
        
        const pinInput = this.shadowRoot.getElementById('new-pin-1');
        if (pinInput) pinInput.focus();
      }
    });

    // Redirect Master PIN remove:
    container.querySelector('#btn-dropdown-remove-master-pin')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      const target = this.shadowRoot.getElementById('w-access');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.5s ease-in-out';
        target.style.boxShadow = '0 0 30px rgba(255, 179, 0, 0.6)';
        setTimeout(() => { target.style.boxShadow = ''; }, 1500);
        
        const pinInput = this.shadowRoot.getElementById('current-pin');
        if (pinInput) pinInput.focus();
      }
    });

    // Edit Home Name listener:
    container.querySelector('#btn-dropdown-edit-home-name')?.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.style.display = 'none';
      this._editHomeName();
    });
  }

  async _switchProfile() {
    let bootstrap;
    try {
      bootstrap = await this._send('argus/bootstrap');
      this._welcomeShownThisMount = false;
      this._renderLoginScreen(bootstrap);
    } catch (e) {
      console.error('Switch profile bootstrap failed:', e);
    }
  }

  async _showChangePictureModal() {
    // ── Try to load HA persons for their entity_picture options ───
    let haPictures = [];
    try {
      const resp = await this._send('argus/get_ha_persons', {});
      const persons = resp?.ha_persons ?? [];
      haPictures = persons
        .filter(p => p.entity_id)
        .map(p => {
          // Build the entity_picture URL from the person entity
          const entityState = this._hass?.states?.[p.entity_id];
          return {
            name: p.name || p.entity_id,
            url: entityState?.attributes?.entity_picture || null,
          };
        })
        .filter(p => p.url);
    } catch (_) {
      // Not admin or unavailable — skip HA persons
    }

    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; inset: 0; z-index: 10100;
      background: rgba(0,0,0,0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex; align-items: center; justify-content: center;
    `;

    const picOptions = haPictures.map((p, i) => `
      <div data-pic-url="${this._escapeHtml(p.url)}" data-pic-idx="${i}"
           style="display:flex; flex-direction:column; align-items:center; gap:8px; cursor:pointer; padding:10px; border-radius:12px; border:2px solid transparent; transition:border-color 0.15s;"
           class="ha-pic-option">
        <img src="${this._escapeHtml(p.url)}" alt="${this._escapeHtml(p.name)}"
             style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.15); box-shadow:0 4px 14px rgba(0,0,0,0.3);" />
        <span style="font-size:10px; font-weight:700; color:rgba(255,255,255,0.7); max-width:72px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${this._escapeHtml(p.name)}</span>
      </div>
    `).join('');

    modal.innerHTML = `
      <div style="background:rgba(30,32,48,0.97); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:24px; width:min(380px,90vw); color:#fff;">
        <h3 style="margin:0 0 4px; font-size:1.05rem; font-weight:800;">📸 ${this._escapeHtml(this._t('change_profile_picture') || 'Cambiar imagen de perfil')}</h3>
        <p style="margin:0 0 16px; font-size:0.78rem; color:rgba(255,255,255,0.5);">${this._escapeHtml(this._t('change_picture_desc') || 'Elige una foto de tus personas de HA o dirígete al perfil de HA para subir una nueva.')}</p>

        ${haPictures.length ? `
          <div style="font-size:11px; font-weight:700; opacity:0.6; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:10px;">${this._escapeHtml(this._t('ha_persons_title') || 'Personas de Home Assistant')}</div>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
            ${picOptions}
          </div>
        ` : `
          <p style="font-size:12px; color:rgba(255,255,255,0.45); margin-bottom:16px;">${this._escapeHtml(this._t('no_ha_persons_photo') || 'No se encontraron personas con foto en HA. Abre HA para añadir una imagen a tu persona.')}</p>
        `}

        <div style="display:flex; gap:8px;">
          <a href="/config/profile" target="_top"
             style="flex:1; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.15); background:rgba(255,255,255,0.07); color:#fff; font-size:12px; font-weight:700; text-decoration:none; text-align:center;">
            ${this._escapeHtml(this._t('go_to_ha_profile') || 'Ir al Perfil HA ↗')}
          </a>
          <button id="modal-pic-cancel"
                  style="flex:1; padding:10px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:rgba(255,255,255,0.6); font-size:12px; font-weight:700; cursor:pointer;">
            ${this._escapeHtml(this._t('cancel') || 'Cancelar')}
          </button>
        </div>

        <div id="pic-save-status" style="font-size:12px; margin-top:10px; min-height:16px; text-align:center;"></div>
      </div>
    `;
    this.shadowRoot.appendChild(modal);

    const statusEl = modal.querySelector('#pic-save-status');

    // HA person picture picker
    modal.querySelectorAll('.ha-pic-option').forEach(opt => {
      opt.addEventListener('mouseenter', () => opt.style.borderColor = 'rgba(255,255,255,0.4)');
      opt.addEventListener('mouseleave', () => opt.style.borderColor = 'transparent');
      opt.addEventListener('click', async () => {
        const picUrl = opt.getAttribute('data-pic-url');
        if (!picUrl) return;
        statusEl.textContent = '⏳ Guardando...';
        try {
          // Save picture via argus profile picture update
          await this._send('argus/save_ui', {
            profile_picture: picUrl,
          });
          statusEl.style.color = '#34c759';
          statusEl.textContent = '✅ Imagen actualizada. Recarga para verla.';
          setTimeout(() => {
            modal.remove();
            this._renderEntries();
    this._renderModeTabs();
    this._renderModeView();
    this._renderAutomations();
    this._renderNotifications();
    this._updateHeroProfileDisplay();
            this._updateProfileBadge();
          }, 1200);
        } catch (err) {
          statusEl.style.color = '#ff453a';
          statusEl.textContent = '❌ ' + (err.message || 'Error al guardar');
        }
      });
    });

    modal.querySelector('#modal-pic-cancel').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
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


  async _renderLoginScreen(bootstrap) {
    if (this._isRenderingLogin) return;
    if (this.hasAttribute('compact') || this.classList.contains('argus-compact') || this._cardConfig?.compact) {
      return;
    }
    this._isRenderingLogin = true;
    
    try {
      const t = (k) => this._t(k);

      // ── Obtener perfiles ──────────────────────────────────────────
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
    }));

    // ── Ocultar overlay original si venimos de bootstrap
    const bootOverlay = this.shadowRoot.getElementById('bootstrap-overlay');
    if (bootOverlay) {
        bootOverlay.style.display = 'none';
    }
    
    // Limpiar overlays anteriores por si acaso
    this.shadowRoot.querySelectorAll('.argus-profile-overlay, .argus-welcome-screen').forEach(el => el.remove());

    // ── Render Fase 1 (Selector grid tvOS) ────────────────────────
    const overlay = document.createElement('div');
    overlay.className = 'argus-profile-overlay';
    
    const headerHtml = `
      <div class="argus-profile-header">
        <h2>${this._escapeHtml(t('select_profile_title'))}</h2>
        <p>${this._escapeHtml(t('select_profile_subtitle'))}</p>
      </div>
    `;

    const usersHtml = users.map(u => {
      const isOwn = u.is_own_profile === true;
      const requiresPin = u.access_pin_configured === true;
      const roleLabel = u.role === 'admin' ? t('role_argus_admin') : t('role_argus_standard');
      
      const avatarContent = u.picture
        ? `<img src="${this._escapeHtml(u.picture)}" alt="" />`
        : this._escapeHtml(u.name.substring(0, 2).toUpperCase());

      const lockIcon = requiresPin ? `<div class="lock-badge">🔒</div>` : '';

      return `
        <div class="argus-profile-item" tabindex="0"
             data-user-id="${this._escapeHtml(u.id)}"
             data-is-own="${isOwn ? 'true' : 'false'}"
             data-requires-pin="${requiresPin ? 'true' : 'false'}">
          
          <div class="argus-profile-circle">
            ${avatarContent}
            ${lockIcon}
          </div>
          <div class="argus-profile-label">
            <div class="p-name">${this._escapeHtml(u.name)}</div>
            <div class="p-role">${this._escapeHtml(roleLabel)}</div>
          </div>
        </div>
      `;
    }).join('');

    const gridHtml = `
      <div class="argus-profile-grid">
        ${usersHtml}
      </div>
    `;

    // Botón Salir
    const actionsHtml = `
      <button id="argus-exit-ha" style="
        position: absolute; bottom: 40px;
        background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.4); color: #fff;
        padding: 12px 24px; border-radius: 20px; color: #fff; cursor: pointer;
        font-size: 0.9rem; font-weight: 600; transition: background 0.2s;
      ">
        ← ${this._escapeHtml(t('exit_to_ha'))}
      </button>
    `;

    overlay.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        ${headerHtml}
        ${gridHtml}
      </div>
      ${actionsHtml}
    `;
    this.shadowRoot.appendChild(overlay);

    // Salir
    overlay.querySelector('#argus-exit-ha').addEventListener('click', () => {
      window.location.assign('/');
    });

    // Eventos Click en Perfil
    const items = overlay.querySelectorAll('.argus-profile-item');
    items.forEach(item => {
      item.addEventListener('click', async () => {
        if (overlay.dataset.processing) return;
        overlay.dataset.processing = '1';
        
        const userId = item.getAttribute('data-user-id');
        const isOwn = item.getAttribute('data-is-own') === 'true';
        const requiresPin = item.getAttribute('data-requires-pin') === 'true';
        const userObj = users.find(u => u.id === userId);

        if (isOwn) {
          if (requiresPin) {
            overlay.remove();
            this._showTvOSPinPrompt(userObj);
          } else {
            // Own sin PIN -> directo
            try {
              await this._send('argus/select_profile', { argus_user_id: userId });
              overlay.remove();
              this._profileSelectedThisMount = true;
              await this._runProfileWelcomeAnimation(userObj);
            } catch (err) {
              overlay.dataset.processing = '';
              alert(err.message || 'Error seleccionando perfil');
            }
          }
        } else {
          // Otro perfil
          if (!requiresPin) {
            // Rechazo directo si no tiene PIN
            const el = item;
            el.style.animation = 'none';
            el.offsetHeight; // reflow
            el.style.animation = 'argus-shake 0.3s ease';
            overlay.dataset.processing = '';
            return;
          }
          // Tiene PIN -> pedimos
          overlay.remove();
          this._showTvOSPinPrompt(userObj);
        }
      });
      // Soporte teclado (enter/espacio)
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') item.dispatchEvent(new Event('click'));
      });
    });
    } finally {
      this._isRenderingLogin = false;
    }
  }

  async _showTvOSPinPrompt(user) {
    const t = (k) => this._t(k);
    const overlay = document.createElement('div');
    overlay.className = 'argus-pin-prompt';
    overlay.innerHTML = `
      <div class="argus-pin-card">
        <h3>${this._escapeHtml(t('profile_needs_pin'))}</h3>
        <div class="pin-sub">Ingresa el PIN de ${this._escapeHtml(user.name)}</div>
        
        <input type="password" id="pin-input" class="argus-pin-input" readonly
               placeholder="••••" inputmode="numeric" />
               
        <div class="argus-numpad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button data-digit="${n}">${n}</button>`).join('')}
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
    `;
    this.shadowRoot.appendChild(overlay);

    const pinInput = overlay.querySelector('#pin-input');
    const pinError = overlay.querySelector('#pin-error');
    const pinCard = overlay.querySelector('.argus-pin-card');
    const numpad = overlay.querySelector('.argus-numpad');

    numpad.querySelectorAll('[data-digit]').forEach(btn => {
      const digit = btn.getAttribute('data-digit');
      btn.addEventListener('click', () => {
        if (pinInput.value.length < 8) pinInput.value += digit;
      });
    });

    numpad.querySelector('#pin-del').addEventListener('click', () => {
      pinInput.value = pinInput.value.slice(0, -1);
    });
    overlay.querySelector('#pin-enter').addEventListener('click', () => submitPin());

    overlay.querySelector('#pin-cancel').addEventListener('click', () => {
      overlay.remove();
      this._renderLoginScreen({users: this._config?.profiles || []});
    });

    const submitPin = async () => {
      if (overlay.dataset.processing) return;
      overlay.dataset.processing = '1';
      
      if (!pinInput.value) { overlay.dataset.processing = ''; return; }
      try {
        await this._send('argus/verify_access_pin', {
          argus_user_id: user.id,
          pin: pinInput.value
        });
        overlay.remove();
        
        this._profileSelectedThisMount = true;
        await this._runProfileWelcomeAnimation(user);
      } catch (err) {
        overlay.dataset.processing = '';
        pinError.textContent = err.message || t('invalid_pin_msg');
        pinCard.style.animation = 'none';
        pinCard.offsetHeight; // reflow
        pinCard.style.animation = 'argus-shake 0.3s ease';
        pinInput.value = '';
      }
    };

    pinInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitPin();
    });
  }

  async _runProfileWelcomeAnimation(user) {
    // Set profile and initialize hero display immediately so the target element is mounted in DOM
    this._currentProfile = user;
    this._updateHeroProfileDisplay();

    // Prepare target destination avatar with initial empty opacity state
    const destEl: HTMLElement | null = this.shadowRoot.getElementById('hero-profile-avatar') 
      || this.shadowRoot.querySelector('#hero-profile-container .user-avatar')
      || this.shadowRoot.querySelector('#hero-profile-container img')
      || this.shadowRoot.querySelector('#hero-profile-container .hero-profile-pill');
    
    if (destEl) {
      destEl.style.opacity = '0';
      destEl.style.transition = 'opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }

    // Ensure dashboard wrap is ready under the overlay
    this.shadowRoot.querySelector('.wrap')?.classList.add('wrap-ready');

    const overlay = document.createElement('div');
    overlay.className = 'argus-welcome-screen active-anim';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.88)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '10000';
    overlay.style.pointerEvents = 'none';

    const avatarHtml = user.picture
      ? `<img src="${this._escapeHtml(user.picture)}" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />`
      : this._escapeHtml(user.name.substring(0, 2).toUpperCase());

    overlay.innerHTML = `
      <div class="argus-welcome-avatar" id="welcome-avatar-flying">
        ${avatarHtml}
      </div>
      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t('welcome_greeting') || 'Bienvenido,')}</p>
        <h1 class="wname">${this._escapeHtml(user.display_name || user.name)}</h1>
      </div>
    `;
    this.shadowRoot.appendChild(overlay);

    // Wait 1 frame so the overlay covers the screen instantly
    await new Promise(r => requestAnimationFrame(r));
    // Remove login screens beneath
    this.shadowRoot.querySelectorAll('.argus-profile-overlay, .argus-pin-prompt').forEach(el => el.remove());

    // Start loading dashboard in the background so it's ready when animation finishes
    let dashboardPromise = Promise.resolve();
    if (!this._dashboardLoading) {
      this._dashboardLoading = true;
      dashboardPromise = this._load().catch(e => console.error("Load error during animation:", e)).finally(() => { this._dashboardLoading = false; });
    }

    const avatar = overlay.querySelector('#welcome-avatar-flying') as HTMLElement;
    const textGroup = overlay.querySelector('#welcome-text-anim') as HTMLElement;
    if (avatar && textGroup) {
      avatar.style.transform = 'scale(0.8)';
      avatar.style.opacity = '0';
      textGroup.style.opacity = '0';
      textGroup.style.transform = 'translateY(15px)';

      await new Promise(r => requestAnimationFrame(r));
      
      avatar.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
      avatar.style.transform = 'scale(1)';
      avatar.style.opacity = '1';
      
      textGroup.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.5s ease 0.15s';
      textGroup.style.transform = 'translateY(0)';
      textGroup.style.opacity = '1';

      await new Promise(r => setTimeout(r, 1300));
      await dashboardPromise;

      textGroup.style.transition = 'opacity 0.25s ease';
      textGroup.style.opacity = '0';

      const rect = avatar.getBoundingClientRect();
      
      // Accurately measure destination profile avatar position
      const liveDestEl: HTMLElement | null = this.shadowRoot.getElementById('hero-profile-avatar') 
        || this.shadowRoot.querySelector('#hero-profile-container .user-avatar')
        || this.shadowRoot.querySelector('#hero-profile-container img')
        || this.shadowRoot.querySelector('#hero-profile-container .hero-profile-pill');

      let destX = window.innerWidth / 2, destY = 60, targetScale = 0.35;
      
      if (liveDestEl) {
        const destRect = liveDestEl.getBoundingClientRect();
        if (destRect.width > 0 && destRect.height > 0) {
          destX = destRect.left + destRect.width / 2;
          destY = destRect.top + destRect.height / 2;
          targetScale = Math.max(0.2, destRect.width / rect.width);
        }
      }
      
      // Calculate translate values from the center of the welcome avatar
      const moveX = destX - (rect.left + rect.width / 2);
      const moveY = destY - (rect.top + rect.height / 2);
      
      // Smooth elastic transition to exact top-bar coordinates
      avatar.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 0.35s ease 0.45s';
      avatar.style.transform = `translate(${moveX}px, ${moveY}px) scale(${targetScale})`;
      
      overlay.style.transition = 'background-color 0.55s ease 0.1s';
      overlay.style.backgroundColor = 'transparent';
      
      await new Promise(r => setTimeout(r, 650));
      
      // Reveal real top-bar avatar on landing with an elastic bounce
      if (liveDestEl) {
        liveDestEl.style.opacity = '1';
        liveDestEl.style.transform = 'scale(1.1)';
        setTimeout(() => { if (liveDestEl) liveDestEl.style.transform = 'scale(1)'; }, 180);
      }
    }

    await new Promise(r => setTimeout(r, 120));
    await dashboardPromise;
    
    this._nukeAllLoginOverlays();
  }

  _nukeAllLoginOverlays() {
    // Hard-destroy all profile/welcome overlays. No animations.
    // This is critical: any leftover overlay causes a permanent blur on the UI.
    this.shadowRoot
      .querySelectorAll('.argus-profile-overlay, .argus-welcome-screen, .argus-pin-prompt')
      .forEach(el => {
        el.style.transition = 'none';
        el.style.backdropFilter = 'none';
        el.style.webkitBackdropFilter = 'none';
        el.style.opacity = '0';
        el.style.display = 'none';
        el.remove();
      });
    // Also force-hide the persistent #bootstrap-overlay (stays in DOM via display:none toggle).
    // Even display:none + backdrop-filter can leave compositor artifacts in WebKit.
    const boot = this.shadowRoot?.getElementById('bootstrap-overlay');
    if (boot) {
      boot.style.backdropFilter = 'none';
      boot.style.webkitBackdropFilter = 'none';
      boot.style.display = 'none';
      boot.style.opacity = '0';
      boot.style.pointerEvents = 'none';
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

customElements.define('argus-panel-v2018', ArgusPanel);

try { if (!customElements.get('argus-panel')) customElements.define('argus-panel', ArgusPanel); } catch(_) {}
